import { router } from 'expo-router';
import { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSettings } from '../lib/settings';
import { CITIES, panchanga } from '../lib/panchanga';
import { translit } from '../lib/transliterate';

function usePanchanga() {
  const { settings } = useSettings();
  const city = CITIES.find((c) => c.id === settings.city) ?? CITIES[0];
  // Recomputed per render day; cheap (< 1 ms).
  const today = new Date().toDateString();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const p = useMemo(() => panchanga(new Date(), city), [city, today]);
  return { p, city };
}

/** Compact "today" card for the home screen. */
export function TodayCard() {
  const { theme, settings } = useSettings();
  const { p, city } = usePanchanga();
  const t = (s: string) => translit(s, settings.script);
  return (
    <Pressable
      onPress={() => router.push('/panchanga')}
      style={({ pressed }) => ({
        marginHorizontal: 16, marginTop: 16, padding: 14, borderRadius: 14, borderWidth: 1,
        backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1,
      })}
      accessibilityRole="link"
    >
      <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 }}>
        TODAY · ಇಂದು · {city.name.toUpperCase()}
      </Text>
      <Text style={{ color: theme.accent, fontSize: 18, fontWeight: '700', marginTop: 4 }}>
        {t(`${p.adhika ? 'अधिक ' : ''}${p.masa} ${p.paksha} ${p.tithi}`)}
      </Text>
      <Text style={{ color: theme.text, fontSize: 15, marginTop: 2 }}>
        {t(`${p.samvatsara} · ${p.nakshatra} · ${p.vasara}`)}
      </Text>
    </Pressable>
  );
}

/** Saṅkalpa phrase for today, shown at the top of Sandhyāvandane / pūjā texts. */
export function SankalpaCard() {
  const { theme, settings } = useSettings();
  const { p, city } = usePanchanga();
  return (
    <View style={{ marginTop: 14, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', marginBottom: 6 }}>
        Today’s saṅkalpa details · ಇಂದಿನ ಸಂಕಲ್ಪ ({city.name})
      </Text>
      <Text style={{ color: theme.text, fontSize: 17, lineHeight: 28 }} selectable>
        {translit(p.sankalpa, settings.script)}
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 6 }}>
        Use in place of the samvatsara…tithi placeholders. Computed for sunrise; change city in Pañcāṅga.
      </Text>
    </View>
  );
}
