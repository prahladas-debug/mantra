import Constants from 'expo-constants';
import { ScrollView, Text } from 'react-native';
import { ALL_MANTRAS, verseCount } from '../data';
import { useSettings } from '../lib/settings';

export default function About() {
  const { theme } = useSettings();
  const total = ALL_MANTRAS.reduce((n, m) => n + verseCount(m), 0);
  const p = { color: theme.text, fontSize: 16, lineHeight: 24, marginBottom: 14 };
  const h = { color: theme.accent, fontSize: 18, fontWeight: '700' as const, marginTop: 8, marginBottom: 8 };

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ padding: 20 }}>
      <Text style={h}>Mantra Sangraha</Text>
      <Text style={p}>
        A pocket collection of Vedic mantras, suktas, stotras, sahasranamas, Sandhya Vandane and puja
        mantras, readable in Devanagari, Kannada, Telugu, Tamil, Malayalam, Gujarati, Bengali, Odia
        and English (IAST).
      </Text>
      <Text style={p}>
        {ALL_MANTRAS.length} texts · {total} verses · works fully offline.
      </Text>
      <Text style={h}>How the scripts work</Text>
      <Text style={p}>
        Each text is stored once in Devanagari and converted to your chosen script on the device, so every
        script always shows exactly the same text. Tamil uses superscript numbers (க², க³, க⁴) to mark
        sounds that ordinary Tamil letters cannot show.
      </Text>
      <Text style={h}>Accuracy</Text>
      <Text style={p}>
        {'Great care has been taken, but please learn chanting (especially Vedic svaras) from a guru ' +
          "and follow your family's sampradaya for Sandhya Vandane and puja procedures. Texts marked " +
          '“Partial” are still being completed. Corrections are very welcome.'}
      </Text>
      <Text style={h}>Places</Text>
      <Text style={p}>
        Place names and coordinates for Indian towns come from GeoNames (geonames.org), licensed under
        Creative Commons Attribution 4.0.
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 13 }}>Version {Constants.expoConfig?.version ?? '1.0.0'}</Text>
    </ScrollView>
  );
}
