import { Stack } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Chip, SectionHeading } from '../components/ui';
import { CITIES, panchanga } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { translit } from '../lib/transliterate';

export default function PanchangaScreen() {
  const { theme, settings, update } = useSettings();
  const city = CITIES.find((c) => c.id === settings.city) ?? CITIES[0];
  const p = useMemo(() => panchanga(new Date(), city), [city]);
  const t = (s: string) => translit(s, settings.script);
  const rows: [string, string][] = [
    ['Saṃvatsara · ಸಂವತ್ಸರ', p.samvatsara],
    ['Ayana · ಅಯನ', p.ayana],
    ['Ṛtu · ಋತು', p.rtu],
    ['Māsa · ಮಾಸ', `${p.adhika ? 'अधिक ' : ''}${p.masa}`],
    ['Pakṣa · ಪಕ್ಷ', p.paksha],
    ['Tithi · ತಿಥಿ', p.tithi],
    ['Vāsara · ವಾಸರ', p.vasara],
    ['Nakṣatra · ನಕ್ಷತ್ರ', p.nakshatra],
    ['Yoga · ಯೋಗ', p.yoga],
  ];
  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <Stack.Screen options={{ title: 'Pañcāṅga · ಪಂಚಾಂಗ' }} />
      <Text style={{ color: theme.textMuted, marginHorizontal: 16, marginTop: 12 }}>
        {new Date().toDateString()} · at sunrise in {city.name} (
        {p.sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})
      </Text>
      <View style={{ margin: 16, borderRadius: 14, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
        {rows.map(([label, value], i) => (
          <View key={label} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderTopWidth: i ? 1 : 0, borderColor: theme.cardBorder }}>
            <Text style={{ color: theme.textMuted, fontSize: 15 }}>{label}</Text>
            <Text style={{ color: theme.text, fontSize: 17, fontWeight: '600' }}>{t(value)}</Text>
          </View>
        ))}
      </View>
      <SectionHeading>Saṅkalpa phrase · ಸಂಕಲ್ಪ</SectionHeading>
      <Text style={{ color: theme.text, fontSize: 18, lineHeight: 30, marginHorizontal: 16 }} selectable>
        {t(p.sankalpa)}
      </Text>
      <SectionHeading>City · ಊರು</SectionHeading>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginHorizontal: 16 }}>
        {CITIES.map((c) => (
          <Chip key={c.id} label={c.name} active={c.id === city.id} onPress={() => update({ city: c.id })} />
        ))}
      </View>
      <Text style={{ color: theme.textMuted, fontSize: 13, margin: 16, lineHeight: 19 }}>
        Calculated on the device (Cāndramāna, Lahiri ayanāṃśa) for local sunrise. Values agree with printed
        pañcāṅgas for festival checks, but tithi/nakṣatra end-times can differ by a few minutes; for muhūrtas
        consult your family pañcāṅga.
      </Text>
    </ScrollView>
  );
}
