import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CalendarOptions, FestivalLine, useCalendarMode, useEkadashiRule } from '../components/PanchangaCard';
import { Chip, SectionHeading } from '../components/ui';
import { festivalsBetween, type Festival } from '../lib/festivals';
import { cityById, todayIn } from '../lib/panchanga';
import { useSettings } from '../lib/settings';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/** Years offered in the picker (the computation itself works outside this range too). */
const YEARS = Array.from({ length: 12 }, (_, i) => 2025 + i);

/** All festivals and ekādaśīs of a year, grouped by month: /festivals?year=YYYY */
export default function FestivalsYearScreen() {
  const { theme, settings } = useSettings();
  const params = useLocalSearchParams<{ year?: string }>();
  const city = cityById(settings.city);
  const thisYear = Number(todayIn(city).slice(0, 4));
  const fromParam = Number(params.year);
  const [picked, setPicked] = useState<number | null>(null);
  const year = picked ?? (fromParam >= 1900 && fromParam <= 2200 ? fromParam : thisYear);
  const [rule, setRule] = useEkadashiRule();
  const [mode] = useCalendarMode();

  const all = festivalsBetween(city, `${year}-01-01`, `${year}-12-31`, rule, mode);
  const byMonth: Festival[][] = Array.from({ length: 12 }, () => []);
  for (const f of all) {
    // A period that began in the previous year is listed under January.
    const mi = f.date.slice(0, 4) === String(year) ? Number(f.date.slice(5, 7)) - 1 : 0;
    byMonth[mi].push(f);
  }

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <Stack.Screen options={{ title: `Festivals ${year}` }} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingTop: 12 }}>
        {YEARS.map((y) => (
          <Chip key={y} label={String(y)} active={y === year} onPress={() => setPicked(y)} />
        ))}
      </ScrollView>
      <CalendarOptions rule={rule} setRule={setRule} />
      <Text style={{ color: theme.textMuted, fontSize: 13, marginHorizontal: 16, marginTop: 10 }}>
        {city.name} · ekādaśīs by the {rule === 'smarta' ? 'Smārta' : 'Mādhva'} rule
        {mode === 'saura' ? ' · with Udupi / Sauramāna festivals' : ''}
      </Text>

      {byMonth.map((list, mi) =>
        list.length === 0 ? null : (
          <View key={mi}>
            <SectionHeading>{MONTHS[mi]}</SectionHeading>
            <View style={{ marginHorizontal: 16, borderRadius: 14, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, paddingHorizontal: 12, paddingVertical: 8 }}>
              {list.map((f) => (
                <View key={`${f.key}-${f.date}`} style={{ paddingVertical: 2 }}>
                  <FestivalLine f={f} showDate />
                  {f.note ? <Text style={{ color: theme.textMuted, fontSize: 12, lineHeight: 17 }}>{f.note}</Text> : null}
                </View>
              ))}
            </View>
          </View>
        ),
      )}
      <Text style={{ color: theme.textMuted, fontSize: 13, margin: 16, lineHeight: 19 }}>
        Computed on the device from the Sun and Moon positions; dates agree with drikpanchang for the years checked
        (2025–2030 and spot checks to 2036). Local maṭha and temple calendars can differ by a day.
      </Text>
    </ScrollView>
  );
}
