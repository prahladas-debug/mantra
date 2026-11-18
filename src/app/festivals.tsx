import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FestivalLine, calcMethodLabel, useCalcMethod, useCalendarMode, useEkadashiRule, useMatha, useSauraStart } from '../components/PanchangaCard';
import { CalendarBar } from '../components/CalendarBar';
import { Chip, SectionHeading } from '../components/ui';
import { festivalsBetween, forAudience, type Festival } from '../lib/festivals';
import { useI18n } from '../lib/i18n';
import { cityById, todayIn } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { useAudience } from '../lib/useAudience';

/** Years offered in the picker (the computation itself works outside this range too). */
const YEARS = Array.from({ length: 12 }, (_, i) => 2025 + i);

/** All festivals and ekādaśīs of a year, grouped by month: /festivals?year=YYYY */
export default function FestivalsYearScreen() {
  const { theme, settings } = useSettings();
  const { tr, month } = useI18n();
  const params = useLocalSearchParams<{ year?: string }>();
  const city = cityById(settings.city);
  const thisYear = Number(todayIn(city).slice(0, 4));
  const fromParam = Number(params.year);
  const [picked, setPicked] = useState<number | null>(null);
  const year = picked ?? (fromParam >= 1900 && fromParam <= 2200 ? fromParam : thisYear);
  const [rule] = useEkadashiRule();
  const audience = useAudience();
  const matha = useMatha();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const [method] = useCalcMethod();

  const all = forAudience(festivalsBetween(city, `${year}-01-01`, `${year}-12-31`, rule, mode, start, method, matha), audience, rule);
  const byMonth: Festival[][] = Array.from({ length: 12 }, () => []);
  for (const f of all) {
    // A period that began in the previous year is listed under January.
    const mi = f.date.slice(0, 4) === String(year) ? Number(f.date.slice(5, 7)) - 1 : 0;
    byMonth[mi].push(f);
  }

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <Stack.Screen options={{ title: tr('Festivals {year}', { year }) }} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingTop: 12 }}>
        {YEARS.map((y) => (
          <Chip key={y} label={String(y)} active={y === year} onPress={() => setPicked(y)} />
        ))}
      </ScrollView>
      <CalendarBar />
      <Text style={{ color: theme.textMuted, fontSize: 14, marginHorizontal: 16, marginTop: 10 }}>
        {mode === 'saura'
          ? tr('Ekadashi by the {rule} rule · with Udupi festivals · tap ⓘ for details', { rule: rule === 'smarta' ? tr('Smarta') : tr('Madhva') })
          : tr('Ekadashi by the {rule} rule · tap ⓘ for details', { rule: rule === 'smarta' ? tr('Smarta') : tr('Madhva') })}
      </Text>

      {byMonth.map((list, mi) =>
        list.length === 0 ? null : (
          <View key={mi}>
            <SectionHeading>{month(mi + 1)}</SectionHeading>
            <View style={{ marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, paddingHorizontal: 12, paddingVertical: 8 }}>
              {list.map((f) => (
                <View key={`${f.key}-${f.date}`} style={{ paddingVertical: 2 }}>
                  <FestivalLine f={f} showDate />
                </View>
              ))}
            </View>
          </View>
        ),
      )}
      <Text style={{ color: theme.textMuted, fontSize: 14, margin: 16, lineHeight: 19 }}>
        {method === 'surya'
          ? tr('Computed on the device by the {method}; checked against matha panchangas (Uttaradi Math, Raghavendra Matha, 2025–2027). Matha and temple calendars can still differ by a day.', { method: tr(calcMethodLabel(method)) })
          : tr('Computed on the device from the Sun and Moon positions; dates agree with drikpanchang for the years checked (2025–2030 and spot checks to 2036). Local matha and temple calendars can differ by a day.')}
      </Text>
    </ScrollView>
  );
}
