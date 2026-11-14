import { Stack, router, useLocalSearchParams, type Href } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CalendarModeChips, SauraStartChips, FestivalLine, NavButton, useCalendarMode, useSauraStart, useEkadashiRule } from '../components/PanchangaCard';
import { Chip, SectionHeading } from '../components/ui';
import { festivalsBetween } from '../lib/festivals';
import { CITIES, VARA, addDays, cityById, formatTime, panchanga, parseIso, todayIn, type Span } from '../lib/panchanga';
import { sauraDay, sauraRtu, sauraSankalpa } from '../lib/sauramana';
import { useSettings } from '../lib/settings';
import { translit } from '../lib/transliterate';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ISO = /^\d{4}-\d{2}-\d{2}$/;

export default function PanchangaScreen() {
  const { theme, settings, update } = useSettings();
  const params = useLocalSearchParams<{ date?: string }>();
  const city = cityById(settings.city);
  const today = todayIn(city);
  const [picked, setPicked] = useState<string | null>(null);
  const date = picked ?? (params.date && ISO.test(params.date) ? params.date : today);
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();

  const p = useMemo(() => panchanga(date, city), [date, city]);
  const todays = useMemo(() => festivalsBetween(city, date, date, rule, mode, start), [city, date, rule, mode, start]);
  const upcoming = useMemo(() => festivalsBetween(city, addDays(date, 1), addDays(date, 30), rule, mode, start), [city, date, rule, mode, start]);
  const saura = useMemo(() => sauraDay(city, date, start), [city, date, start]);
  const sankalpa = mode === 'saura' ? sauraSankalpa(p, saura) : p.sankalpa;
  const t = (s: string) => translit(s, settings.script);
  const tm = (d: Date) => formatTime(d, city, date);
  const [y, m, d] = parseIso(date);

  const card = { marginHorizontal: 16, borderRadius: 14, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card } as const;
  const row = (i: number) => ({ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, padding: 12, borderTopWidth: i ? 1 : 0, borderColor: theme.cardBorder }) as const;

  const basic: [string, string][] = [
    ['Saṃvatsara · ಸಂವತ್ಸರ', p.samvatsara],
    ['Ayana · ಅಯನ', p.ayana],
    ['Ṛtu · ಋತು', mode === 'saura' ? sauraRtu(saura.rasi) : p.rtu],
    ...((mode === 'saura'
      ? [
          ['Saura māsa · ಸೌರ ಮಾಸ', `${saura.name} · ${saura.day}`],
          ['Tuḷu month · ತುಳು ತಿಂಗಳು', `${saura.tulu} ${saura.day}`],
          ['Cāndra māsa · ಚಾಂದ್ರ ಮಾಸ', `${p.adhika ? 'अधिक ' : ''}${p.masa}`],
        ]
      : [
          ['Māsa · ಮಾಸ', `${p.adhika ? 'अधिक ' : ''}${p.masa}`],
          ['Saura māsa · ಸೌರ ಮಾಸ', `${saura.name} · ${saura.day}`],
        ]) as [string, string][]),
    ['Pakṣa · ಪಕ್ಷ', p.paksha],
    ['Vāsara · ವಾಸರ', p.vasara],
  ];
  // Every element from sunrise to the next sunrise, each with its end time.
  const spanText = (spans: Span[]) => spans.map((s) => `${t(s.name)}  till ${tm(s.end)}`).join('\n');
  const timed: [string, Span[]][] = [
    ['Tithi · ತಿಥಿ', p.tithis.map((s) => ({ ...s, name: `${s.index <= 15 ? 'शुक्ल' : 'कृष्ण'} ${s.name}` }))],
    ['Nakṣatra · ನಕ್ಷತ್ರ', p.nakshatras],
    ['Yoga · ಯೋಗ', p.yogas],
    ['Karaṇa · ಕರಣ', p.karanas],
    ['Candra rāśi · ಚಂದ್ರ ರಾಶಿ', p.moonRashis],
  ];
  const kalas: [string, string, boolean?][] = [
    ['Sunrise · ಸೂರ್ಯೋದಯ', tm(p.sunrise)],
    ['Sunset · ಸೂರ್ಯಾಸ್ತ', tm(p.sunset)],
    ['Rāhu kāla · ರಾಹುಕಾಲ', `${tm(p.rahuKala[0])} – ${tm(p.rahuKala[1])}`, true],
    ['Yamagaṇḍa · ಯಮಗಂಡ', `${tm(p.yamaganda[0])} – ${tm(p.yamaganda[1])}`, true],
    ['Gulika kāla · ಗುಳಿಕ', `${tm(p.gulika[0])} – ${tm(p.gulika[1])}`, true],
    ['Abhijit muhūrta · ಅಭಿಜಿತ್', `${tm(p.abhijit[0])} – ${tm(p.abhijit[1])}${p.weekday === 3 ? ' (avoided on Wednesdays)' : ''}`],
    ['Sūrya rāśi · ಸೂರ್ಯ ರಾಶಿ', t(p.sunRashi)],
  ];

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <Stack.Screen options={{ title: 'Pañcāṅga · ಪಂಚಾಂಗ' }} />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 12 }}>
        <NavButton icon="chevron-back" label="Previous day" onPress={() => setPicked(addDays(date, -1))} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: theme.text, fontSize: 17, fontWeight: '700' }}>
            {WEEKDAYS[p.weekday]}, {d} {MONTHS[m - 1]} {y}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 13 }}>
            {t(VARA[p.weekday])} · {city.name}
          </Text>
        </View>
        <NavButton icon="chevron-forward" label="Next day" onPress={() => setPicked(addDays(date, 1))} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 10 }}>
        {date !== today && <Chip label="Today" onPress={() => setPicked(today)} />}
        <Chip label="Calendar · ಕ್ಯಾಲೆಂಡರ್" onPress={() => router.push({ pathname: '/calendar', params: { month: date.slice(0, 7) } } as Href)} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 8 }}>
        <CalendarModeChips />
      </View>
      <View style={{ marginHorizontal: 16, marginTop: 8 }}>
        <SauraStartChips />
      </View>

      {todays.length > 0 && (
        <View style={[card, { marginTop: 14, padding: 12, borderColor: theme.accent, backgroundColor: theme.accentSoft }]}>
          {todays.map((f) => (
            <View key={f.key}>
              <FestivalLine f={f} />
              {f.note ? <Text style={{ color: theme.textMuted, fontSize: 12, lineHeight: 17 }}>{f.note}</Text> : null}
            </View>
          ))}
        </View>
      )}

      <SectionHeading>At sunrise · ಸೂರ್ಯೋದಯದಲ್ಲಿ</SectionHeading>
      <View style={card}>
        {basic.map(([label, value], i) => (
          <View key={label} style={row(i)}>
            <Text style={{ color: theme.textMuted, fontSize: 15 }}>{label}</Text>
            <Text style={{ color: theme.text, fontSize: 17, fontWeight: '600' }}>{t(value)}</Text>
          </View>
        ))}
      </View>

      <SectionHeading>Pañcāṅga with end times · ಅಂತ್ಯ ಕಾಲ</SectionHeading>
      <View style={card}>
        {timed.map(([label, spans], i) => (
          <View key={label} style={row(i)}>
            <Text style={{ color: theme.textMuted, fontSize: 15, flexShrink: 0 }}>{label}</Text>
            <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600', textAlign: 'right', flexShrink: 1, lineHeight: 23 }}>
              {spanText(spans)}
            </Text>
          </View>
        ))}
      </View>

      <SectionHeading>Sun and kālas · ಕಾಲಗಳು</SectionHeading>
      <View style={card}>
        {kalas.map(([label, value, bad], i) => (
          <View key={label} style={row(i)}>
            <Text style={{ color: theme.textMuted, fontSize: 15 }}>{label}</Text>
            <Text style={{ color: bad ? theme.warningText : theme.text, fontSize: 16, fontWeight: '600', textAlign: 'right', flexShrink: 1 }}>
              {value}
            </Text>
          </View>
        ))}
      </View>

      <SectionHeading>Saṅkalpa phrase · ಸಂಕಲ್ಪ</SectionHeading>
      <Text style={{ color: theme.text, fontSize: 18, lineHeight: 30, marginHorizontal: 16 }} selectable>
        {t(sankalpa)}
      </Text>

      <SectionHeading>Next 30 days · ಮುಂದಿನ ಹಬ್ಬಗಳು</SectionHeading>
      <View style={[card, { paddingHorizontal: 12, paddingVertical: 8 }]}>
        {upcoming.length === 0 ? (
          <Text style={{ color: theme.textMuted }}>No listed festivals.</Text>
        ) : (
          upcoming.map((f) => <FestivalLine key={`${f.key}-${f.date}`} f={f} showDate />)
        )}
        <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 6 }}>
          Ekādaśī dates: {rule === 'smarta' ? 'Smārta' : 'Mādhva / Vaiṣṇava'} rule (change in the calendar).
        </Text>
      </View>

      <SectionHeading>City · ಊರು</SectionHeading>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginHorizontal: 16 }}>
        {CITIES.map((c) => (
          <Chip key={c.id} label={c.name} active={c.id === city.id} onPress={() => update({ city: c.id })} />
        ))}
      </View>
      <Text style={{ color: theme.textMuted, fontSize: 13, margin: 16, lineHeight: 19 }}>
        Calculated on the device (Cāndramāna amānta months, Lahiri ayanāṃśa) for {city.name}; times are local
        ({city.tz >= 0 ? '+' : ''}{city.tz} h{city.dst ? ', with daylight saving' : ''}). Tithi and nakṣatra end-times
        agree with drikpanchang to about a minute, but a printed pañcāṅga may differ by a few minutes; for muhūrtas
        consult your family pañcāṅga.
      </Text>
    </ScrollView>
  );
}
