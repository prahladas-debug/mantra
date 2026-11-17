import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams, type Href } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { CalendarBar } from '../../components/CalendarBar';
import { FestivalLine, NavButton, useCalcMethod, useCalendarMode, useEkadashiRule, useMatha, useSauraStart } from '../../components/PanchangaCard';
import { DayTimeline, LimbGrid, RightNow, SegmentList, TimingRows, WindowList, nb, type Limb, type TimingRow } from '../../components/PanchangaParts';
import { SectionHeading } from '../../components/ui';
import { festivalsBetween } from '../../lib/festivals';
import {
  VARA, addDays, cityById, cityLabel, formatTime, fromJulian, moonriseBetween, panchanga, parseIso, sunriseJd, todayIn, withMethod, type Span,
} from '../../lib/panchanga';
import { amritaKala, brahmaMuhurta, choghadiya, durmuhurta, hora, varjyam } from '../../lib/muhurta';
import { paranaNote } from '../../lib/parana';
import { plain } from '../../lib/plain';
import { sauraDay, sauraRtu, sauraSankalpa } from '../../lib/sauramana';
import { useClockTick, useSettings } from '../../lib/settings';
import { translit, isRoman, translitTitle } from '../../lib/transliterate';
import { T, useI18n } from '../../lib/i18n';

/** The current instant (a function, so rendering stays pure; re-read on every clock tick). */
const clock = () => Date.now();

const ISO = /^\d{4}-\d{2}-\d{2}$/;

/** A row label: the term in the interface language, with the Sanskrit term in the reading script under it (English only). */
type Label = [en: string, sa: string];
type Row = [Label, string, ('good' | 'avoid')?];

function Table({ rows }: { rows: Row[] }) {
  const { theme, settings } = useSettings();
  const { lang, tr } = useI18n();
  const roman = isRoman(settings.script) || lang !== 'en';
  return (
    <View style={{ marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      {rows.map(([l, value, tone], i) => (
        <View
          key={l[0]}
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, paddingHorizontal: 14, paddingVertical: 11, borderTopWidth: i ? 1 : 0, borderColor: theme.cardBorder }}
        >
          <View style={{ flexShrink: 0, minWidth: 96 }}>
            <Text style={{ color: theme.gold, fontSize: 16, fontWeight: '600' }}>{tr(l[0])}</Text>
            {!roman && <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 1 }}>{translit(l[1], settings.script)}</Text>}
          </View>
          <Text
            style={{
              color: tone === 'avoid' ? theme.warningText : tone === 'good' ? theme.accent : theme.text,
              fontSize: 16, fontWeight: '600', textAlign: 'right', flexShrink: 1, lineHeight: 24,
            }}
          >
            {value}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default function PanchangaScreen() {
  const { theme, settings } = useSettings();
  const { lang, tr, longDate } = useI18n();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ date?: string; at?: string }>();
  const city = cityById(settings.city);
  // Follow the clock, so the tab does not stay on yesterday when the app is left open.
  useClockTick(60 * 1000); // also keeps "right now" and the time left current
  const today = todayIn(city);
  // The day picked here (‹ › / back to today) belongs to the link it was picked after, so a
  // new date from the calendar or festival search, or a tap on the Home card (`at`), replaces it.
  const fromParam = params.date && ISO.test(params.date) ? params.date : undefined;
  const from = `${fromParam ?? ''}@${params.at ?? ''}`;
  const [picked, setPickedState] = useState<{ from: string; date: string } | null>(null);
  const date = picked && picked.from === from ? picked.date : (fromParam ?? today);
  const setPicked = (d: string) => setPickedState({ from, date: d });
  // The day's essentials first; the rest (year and month, moon, sankalpa, coming festivals) on request.
  const [full, setFull] = useState(false);
  const [rule] = useEkadashiRule();
  const matha = useMatha();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const [method] = useCalcMethod();
  const ss = method === 'surya';

  const p = useMemo(() => panchanga(date, city, method), [date, city, method]);
  const todays = useMemo(() => festivalsBetween(city, date, date, rule, mode, start, method, matha), [city, date, rule, mode, start, method, matha]);
  const upcoming = useMemo(() => festivalsBetween(city, addDays(date, 1), addDays(date, 30), rule, mode, start, method, matha), [city, date, rule, mode, start, method, matha]);
  const saura = useMemo(() => sauraDay(city, date, start, method), [city, date, start, method]);
  const moonrise = useMemo(
    () => withMethod(method, () => moonriseBetween(city.lat, city.lon, sunriseJd(city, date), sunriseJd(city, addDays(date, 1)))),
    [city, date, method],
  );
  // With the Surya Siddhanta the day starts at its own sunrise; show the visible one too.
  const visibleRise = useMemo(() => (ss ? fromJulian(withMethod('drik', () => sunriseJd(city, date))) : null), [ss, date, city]);
  const sankalpa = mode === 'saura' ? sauraSankalpa(p, saura) : p.sankalpa;
  // Names (tithi, month, festival): in plain English they read best capitalised.
  const t = (s: string) => (settings.script === 'english' ? translitTitle(s, settings.script) : translit(s, settings.script));
  const tm = (d: Date) => formatTime(d, city, date, lang);
  // The choghadiya and hora lists run sunrise to sunrise: after-midnight rows need no date.
  const clockTime = (d: Date) => formatTime(d, city);
  const [y, m, d] = parseIso(date);

  const card = { marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card } as const;

  // The five limbs: the element at sunrise and when it ends; the full panchanga lists every element
  // up to the next sunrise.
  const items = (spans: Span[]) => (full ? spans : spans.slice(0, 1)).map((s) => ({ name: t(s.name), till: tm(s.end) }));
  const limbs: Limb[] = [
    { label: T('Tithi'), items: items(p.tithis.map((s) => ({ ...s, name: `${s.index <= 15 ? 'शुक्ल' : 'कृष्ण'} ${s.name}` }))) },
    { label: T('Nakshatra'), items: items(p.nakshatras) },
    { label: T('Yoga'), items: items(p.yogas) },
    { label: T('Karana'), items: items(p.karanas) },
    { label: T('Weekday'), items: [{ name: t(p.vasara) }] },
    { label: T('Moon sign'), items: items(p.moonRashis) },
  ];
  const lunarMasa = t(`${p.adhika ? 'अधिक ' : ''}${p.masa}`);
  const year: Row[] = [
    [[T('Year'), 'संवत्सरः'], t(p.samvatsara)],
    [[T('Ayana'), 'अयनम्'], t(p.ayana)],
    [[T('Season'), 'ऋतुः'], t(mode === 'saura' ? sauraRtu(saura.rasi) : p.rtu)],
    ...(mode === 'saura'
      ? ([
          [[T('Solar month'), 'सौरमासः'], `${t(saura.name)} ${saura.day}\n${plain(saura.tulu)} ${saura.day} (${tr('Tulu')})`],
          [[T('Lunar month'), 'चान्द्रमासः'], lunarMasa],
        ] as Row[])
      : ([
          [[T('Month'), 'मासः'], lunarMasa],
          [[T('Solar month'), 'सौरमासः'], `${t(saura.name)} ${saura.day}`],
        ] as Row[])),
    [[T('Paksha'), 'पक्षः'], t(p.paksha)],
  ];
  const moonRows: Row[] = [
    [[T('Moonrise'), 'चन्द्रोदयः'], moonrise === null ? tr('None before the next sunrise') : tm(fromJulian(moonrise))],
    [[T('Sun sign'), 'सूर्यराशिः'], t(p.sunRashi)],
  ];
  const span = (s: [Date, Date]) => nb(`${tm(s[0])} – ${tm(s[1])}`);
  const parana = festivalsBetween(city, addDays(date, -1), addDays(date, -1), rule, mode, start, method).find((f) => f.kind === 'ekadashi' && f.parana?.date === date)?.parana;
  const amrita = useMemo(() => amritaKala(p), [p]);
  const brahma = useMemo(() => brahmaMuhurta(p), [p]);
  const chog = useMemo(() => choghadiya(p), [p]);
  const horas = useMemo(() => hora(p), [p]);
  const durm = useMemo(() => durmuhurta(p), [p]);
  const varj = useMemo(() => varjyam(p), [p]);
  // "Right now" only on today's date; the clock is re-read every minute (useClockTick above).
  const now = date === today ? clock() : null;
  const times: TimingRow[] = [
    ...(parana ? [{ label: T('Parana (break the fast)'), value: `${span([parana.start, parana.end])}${parana.note ? `\n${paranaNote(parana, city, lang)}` : ''}`, tone: 'good' as const }] : []),
    { label: T('Brahma muhurta'), value: span(brahma), tone: 'good' },
    { label: T('Abhijit muhurta'), value: `${span(p.abhijit)}${p.weekday === 3 ? `\n${tr('(not used on Wednesdays)')}` : ''}`, tone: 'good' },
    ...(amrita.length ? [{ label: T('Amrita kala'), value: amrita.map(span).join('\n'), tone: 'good' as const }] : []),
    { label: T('Rahu kala'), value: span(p.rahuKala), tone: 'bad' },
    { label: T('Yamaganda'), value: span(p.yamaganda), tone: 'bad' },
    { label: T('Gulika kala'), value: span(p.gulika), tone: 'bad' },
  ];

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: insets.top + 6, paddingBottom: 40 }}>
      <CalendarBar
        trailing={
          <View style={{ flexDirection: 'row', gap: 8 }}>
          <Pressable
            onPress={() => router.push('/festival-search')}
            accessibilityRole="button"
            accessibilityLabel={tr('Find a festival date')}
            hitSlop={8}
            style={({ pressed }) => ({ padding: 8, borderRadius: 18, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 })}
          >
            <MaterialCommunityIcons name="magnify" size={22} color={theme.accent} />
          </Pressable>
          <Pressable
            onPress={() => router.push({ pathname: '/calendar', params: { month: date.slice(0, 7) } } as Href)}
            accessibilityRole="button"
            accessibilityLabel={tr('Month calendar')}
            hitSlop={8}
            style={({ pressed }) => ({ padding: 8, borderRadius: 18, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 })}
          >
            <MaterialCommunityIcons name="calendar-month-outline" size={22} color={theme.accent} />
          </Pressable>
          </View>
        }
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 12 }}>
        <NavButton icon="chevron-left" label={tr('Previous day')} onPress={() => setPicked(addDays(date, -1))} />
        <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={() => date !== today && setPicked(today)} accessibilityRole="button" accessibilityLabel={date !== today ? tr('Back to today') : undefined}>
          <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700' }}>
            {longDate(y, m, d, p.weekday)}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 14 }}>
            {t(VARA[p.weekday])}
            {date !== today ? <Text style={{ color: theme.accent }}>{`  ·  ${tr('back to today')}`}</Text> : null}
          </Text>
        </Pressable>
        <NavButton icon="chevron-right" label={tr('Next day')} onPress={() => setPicked(addDays(date, 1))} />
      </View>

      {todays.length > 0 && (
        <View style={[card, { marginTop: 14, padding: 12, borderColor: theme.accent, backgroundColor: theme.goldSoft }]}>
          {todays.map((f) => (
            <View key={f.key}>
              <FestivalLine f={f} compact />
            </View>
          ))}
        </View>
      )}

      {now !== null && <RightNow choghadiya={chog} now={now} t={t} tm={tm} />}

      <DayTimeline p={p} tm={tm} now={now} rahu={p.rahuKala} yama={p.yamaganda} gulika={p.gulika} abhijit={p.abhijit} amrita={amrita} />
      {visibleRise && (
        <Text style={{ color: theme.textMuted, fontSize: 13, marginHorizontal: 20, marginTop: 6 }}>{tr('visible sunrise {time}', { time: tm(visibleRise) })}</Text>
      )}

      <View style={{ height: 14 }} />
      <LimbGrid limbs={limbs} />

      <View style={{ height: 14 }} />
      <TimingRows rows={times} />

      {full && (
        <>
          <View style={{ height: 14 }} />
          <Table rows={moonRows} />
        </>
      )}

      <Pressable
        onPress={() => setFull(!full)}
        accessibilityRole="button"
        style={({ pressed }) => [card, { marginTop: 18, paddingVertical: 13, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, opacity: pressed ? 0.7 : 1 }]}
      >
        <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '600' }}>{full ? tr('Show less') : tr('Full panchanga')}</Text>
        <MaterialCommunityIcons name={full ? 'chevron-up' : 'chevron-down'} size={22} color={theme.accent} />
      </Pressable>

      {full && (
      <>
      <View style={{ height: 16 }} />
      <Table rows={year} />

      <SectionHeading>{tr('Choghadiya')}</SectionHeading>
      <SegmentList segs={chog} now={now} t={t} tm={clockTime} />

      <SectionHeading>{tr('Hora')}</SectionHeading>
      <SegmentList segs={horas} now={now} t={t} tm={clockTime} />

      <SectionHeading>{tr('Durmuhurta')}</SectionHeading>
      <WindowList windows={durm} tm={tm} now={now} />

      <SectionHeading>{tr('Varjyam')}</SectionHeading>
      <WindowList windows={varj} tm={tm} now={now} />

      <SectionHeading>{tr('Sankalpa')}</SectionHeading>
      <View style={[card, { padding: 14 }]}>
        <Text style={{ color: theme.text, fontSize: 18, lineHeight: 30 }} selectable>
          {translit(sankalpa, settings.script)}
        </Text>
      </View>

      <SectionHeading>{tr('Coming festivals')}</SectionHeading>
      <View style={[card, { paddingHorizontal: 12, paddingVertical: 8 }]}>
        {upcoming.length === 0 ? (
          <Text style={{ color: theme.textMuted }}>{tr('None in the next 30 days.')}</Text>
        ) : (
          upcoming.map((f) => <FestivalLine key={`${f.key}-${f.date}`} f={f} showDate />)
        )}
      </View>

      <Text style={{ color: theme.textMuted, fontSize: 14, margin: 16, lineHeight: 19 }}>
        {tr('For {place} · times are local (UTC{offset} h).', { place: cityLabel(city), offset: `${city.tz >= 0 ? '+' : ''}${city.tz}` })}
        {city.dst ? ` ${tr('Daylight saving is applied.')}` : ''}{' '}
        {ss
          ? tr('Surya Siddhanta panchanga, calculated on the phone by the classical text, with its sunrise (centre of the Sun, no refraction); tithi and nakshatra end times agree with matha panchangas to a few minutes.')
          : tr('Drik panchanga, calculated on the phone from the true positions of the Sun and Moon (Lahiri ayanamsha); tithi and nakshatra end times agree with published panchangas to about a minute.')}{' '}
        {tr('For muhurtas, follow your family panchanga.')}
      </Text>
      </>
      )}
    </ScrollView>
  );
}
