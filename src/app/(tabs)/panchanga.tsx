import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams, type Href } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { CalendarBar } from '../../components/CalendarBar';
import { FestivalLine, NavButton, useCalcMethod, useCalendarMode, useEkadashiRule, useSauraStart } from '../../components/PanchangaCard';
import { SectionHeading } from '../../components/ui';
import { festivalsBetween } from '../../lib/festivals';
import {
  VARA, addDays, cityById, cityLabel, formatTime, fromJulian, moonriseBetween, panchanga, parseIso, sunriseJd, todayIn, withMethod, type Span,
} from '../../lib/panchanga';
import { plain } from '../../lib/plain';
import { sauraDay, sauraRtu, sauraSankalpa } from '../../lib/sauramana';
import { useSettings } from '../../lib/settings';
import { translit } from '../../lib/transliterate';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ISO = /^\d{4}-\d{2}-\d{2}$/;

/** A row label: plain English with the Sanskrit term in the reading script under it. */
type Label = [en: string, sa: string];
type Row = [Label, string, ('good' | 'avoid')?];

function Table({ rows }: { rows: Row[] }) {
  const { theme, settings } = useSettings();
  const roman = settings.script === 'iast';
  return (
    <View style={{ marginHorizontal: 16, borderRadius: 14, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      {rows.map(([l, value, tone], i) => (
        <View
          key={l[0]}
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, paddingHorizontal: 14, paddingVertical: 11, borderTopWidth: i ? 1 : 0, borderColor: theme.cardBorder }}
        >
          <View style={{ flexShrink: 0, minWidth: 96 }}>
            <Text style={{ color: theme.text, fontSize: 15 }}>{l[0]}</Text>
            {!roman && <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 1 }}>{translit(l[1], settings.script)}</Text>}
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
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ date?: string }>();
  const city = cityById(settings.city);
  const today = todayIn(city);
  const [picked, setPicked] = useState<string | null>(null);
  const date = picked ?? (params.date && ISO.test(params.date) ? params.date : today);
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const [method] = useCalcMethod();
  const ss = method === 'surya';

  const p = useMemo(() => panchanga(date, city, method), [date, city, method]);
  const todays = useMemo(() => festivalsBetween(city, date, date, rule, mode, start, method), [city, date, rule, mode, start, method]);
  const upcoming = useMemo(() => festivalsBetween(city, addDays(date, 1), addDays(date, 30), rule, mode, start, method), [city, date, rule, mode, start, method]);
  const saura = useMemo(() => sauraDay(city, date, start, method), [city, date, start, method]);
  const moonrise = useMemo(
    () => withMethod(method, () => moonriseBetween(city.lat, city.lon, sunriseJd(city, date), sunriseJd(city, addDays(date, 1)))),
    [city, date, method],
  );
  // With the Surya Siddhanta the day starts at its own sunrise; show the visible one too.
  const visibleRise = useMemo(() => (ss ? fromJulian(withMethod('drik', () => sunriseJd(city, date))) : null), [ss, date, city]);
  const sankalpa = mode === 'saura' ? sauraSankalpa(p, saura) : p.sankalpa;
  const t = (s: string) => translit(s, settings.script);
  const tm = (d: Date) => formatTime(d, city, date);
  const [y, m, d] = parseIso(date);

  const card = { marginHorizontal: 16, borderRadius: 14, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card } as const;

  // The five limbs, each with every element from sunrise to the next sunrise and its end time.
  const until = (spans: Span[]) => spans.map((s) => `${t(s.name)} · till ${tm(s.end)}`).join('\n');
  const limbs: Row[] = [
    [['Tithi', 'तिथिः'], until(p.tithis.map((s) => ({ ...s, name: `${s.index <= 15 ? 'शुक्ल' : 'कृष्ण'} ${s.name}` })))],
    [['Nakshatra', 'नक्षत्रम्'], until(p.nakshatras)],
    [['Yoga', 'योगः'], until(p.yogas)],
    [['Karana', 'करणम्'], until(p.karanas)],
    [['Weekday', 'वासरः'], t(p.vasara)],
  ];
  const lunarMasa = t(`${p.adhika ? 'अधिक ' : ''}${p.masa}`);
  const year: Row[] = [
    [['Year', 'संवत्सरः'], t(p.samvatsara)],
    [['Ayana', 'अयनम्'], t(p.ayana)],
    [['Season', 'ऋतुः'], t(mode === 'saura' ? sauraRtu(saura.rasi) : p.rtu)],
    ...(mode === 'saura'
      ? ([
          [['Solar month', 'सौरमासः'], `${t(saura.name)} ${saura.day}\n${plain(saura.tulu)} ${saura.day} (Tulu)`],
          [['Lunar month', 'चान्द्रमासः'], lunarMasa],
        ] as Row[])
      : ([
          [['Month', 'मासः'], lunarMasa],
          [['Solar month', 'सौरमासः'], `${t(saura.name)} ${saura.day}`],
        ] as Row[])),
    [['Paksha', 'पक्षः'], t(p.paksha)],
  ];
  const sunMoon: Row[] = [
    [['Sunrise', 'सूर्योदयः'], visibleRise ? `${tm(p.sunrise)}\nvisible ${tm(visibleRise)}` : tm(p.sunrise)],
    [['Sunset', 'सूर्यास्तः'], tm(p.sunset)],
    [['Moonrise', 'चन्द्रोदयः'], moonrise === null ? '—' : tm(fromJulian(moonrise))],
    [['Sun sign', 'सूर्यराशिः'], t(p.sunRashi)],
    [['Moon sign', 'चन्द्रराशिः'], until(p.moonRashis)],
  ];
  const span = (s: [Date, Date]) => `${tm(s[0])} – ${tm(s[1])}`;
  const parana = festivalsBetween(city, addDays(date, -1), addDays(date, -1), rule, mode, start, method).find((f) => f.kind === 'ekadashi' && f.parana?.date === date)?.parana;
  const times: Row[] = [
    ...(parana ? ([[['Parana (break the fast)', 'पारणम्'], `${tm(parana.start)} – ${tm(parana.end)}${parana.note ? `\n${plain(parana.note)}` : ''}`, 'good']] as Row[]) : []),
    [['Abhijit muhurta', 'अभिजित्'], `${span(p.abhijit)}${p.weekday === 3 ? '\n(not used on Wednesdays)' : ''}`, 'good'],
    [['Rahu kala', 'राहुकालः'], span(p.rahuKala), 'avoid'],
    [['Yamaganda', 'यमगण्डः'], span(p.yamaganda), 'avoid'],
    [['Gulika kala', 'गुलिककालः'], span(p.gulika), 'avoid'],
  ];

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: insets.top + 6, paddingBottom: 40 }}>
      <CalendarBar
        trailing={
          <View style={{ flexDirection: 'row', gap: 8 }}>
          <Pressable
            onPress={() => router.push('/festival-search')}
            accessibilityRole="button"
            accessibilityLabel="Find a festival date"
            hitSlop={8}
            style={({ pressed }) => ({ padding: 8, borderRadius: 18, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 })}
          >
            <Ionicons name="search" size={18} color={theme.accent} />
          </Pressable>
          <Pressable
            onPress={() => router.push({ pathname: '/calendar', params: { month: date.slice(0, 7) } } as Href)}
            accessibilityRole="button"
            accessibilityLabel="Month calendar"
            hitSlop={8}
            style={({ pressed }) => ({ padding: 8, borderRadius: 18, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 })}
          >
            <Ionicons name="calendar-outline" size={18} color={theme.accent} />
          </Pressable>
          </View>
        }
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 12 }}>
        <NavButton icon="chevron-back" label="Previous day" onPress={() => setPicked(addDays(date, -1))} />
        <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={() => date !== today && setPicked(today)} accessibilityRole="button" accessibilityLabel={date !== today ? 'Back to today' : undefined}>
          <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700' }}>
            {WEEKDAYS[p.weekday]}, {d} {MONTHS[m - 1]} {y}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 13 }}>
            {t(VARA[p.weekday])}
            {date !== today ? <Text style={{ color: theme.accent }}>{'  ·  back to today'}</Text> : null}
          </Text>
        </Pressable>
        <NavButton icon="chevron-forward" label="Next day" onPress={() => setPicked(addDays(date, 1))} />
      </View>

      {todays.length > 0 && (
        <View style={[card, { marginTop: 14, padding: 12, borderColor: theme.accent, backgroundColor: theme.accentSoft }]}>
          {todays.map((f) => (
            <View key={f.key}>
              <FestivalLine f={f} showNote />
            </View>
          ))}
        </View>
      )}

      <SectionHeading>Panchanga · the five limbs</SectionHeading>
      <Table rows={limbs} />

      <SectionHeading>Year and month</SectionHeading>
      <Table rows={year} />

      <SectionHeading>Sun and moon</SectionHeading>
      <Table rows={sunMoon} />

      <SectionHeading>Good and inauspicious times</SectionHeading>
      <Table rows={times} />

      <SectionHeading>Sankalpa</SectionHeading>
      <View style={[card, { padding: 14 }]}>
        <Text style={{ color: theme.text, fontSize: 18, lineHeight: 30 }} selectable>
          {t(sankalpa)}
        </Text>
      </View>

      <SectionHeading>Coming festivals</SectionHeading>
      <View style={[card, { paddingHorizontal: 12, paddingVertical: 8 }]}>
        {upcoming.length === 0 ? (
          <Text style={{ color: theme.textMuted }}>None in the next 30 days.</Text>
        ) : (
          upcoming.map((f) => <FestivalLine key={`${f.key}-${f.date}`} f={f} showDate />)
        )}
      </View>

      <Text style={{ color: theme.textMuted, fontSize: 13, margin: 16, lineHeight: 19 }}>
        For {cityLabel(city)} · times are local ({city.tz >= 0 ? '+' : ''}{city.tz} h{city.dst ? ', with daylight saving' : ''}).{' '}
        {ss
          ? 'Surya Siddhanta panchanga, calculated on the phone by the classical text, with its sunrise (centre of the Sun, no refraction); tithi and nakshatra end times agree with matha panchangas to a few minutes. '
          : 'Drik panchanga, calculated on the phone from the true positions of the Sun and Moon (Lahiri ayanamsha); tithi and nakshatra end times agree with published panchangas to about a minute. '}
        For muhurtas, follow your family panchanga.
      </Text>
    </ScrollView>
  );
}
