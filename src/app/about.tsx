import Constants from 'expo-constants';
import { ScrollView, Text } from 'react-native';
import { ALL_MANTRAS, verseCount } from '../data';
import { BOOKS } from '../data/books';
import { APP_MOTTO, APP_TAGLINE } from '../lib/labels';
import { useSettings } from '../lib/settings';
import { translit } from '../lib/transliterate';

export default function About() {
  const { theme, settings } = useSettings();
  // The sargas/adhyayas of the long works count as texts too (from the manifest).
  const bookUnits = BOOKS.flatMap((w) => w.parts.flatMap((p) => p.units));
  const total = ALL_MANTRAS.reduce((n, m) => n + verseCount(m), 0) + bookUnits.reduce((n, u) => n + u.verses, 0);
  const p = { color: theme.text, fontSize: 16, lineHeight: 24, marginBottom: 14 };
  const h = { color: theme.accent, fontSize: 18, fontWeight: '700' as const, marginTop: 8, marginBottom: 8 };

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ padding: 20 }}>
      <Text style={h}>Nandadeepa</Text>
      <Text style={{ color: theme.textMuted, fontSize: 15, marginTop: -4, marginBottom: 10 }}>
        {translit(APP_MOTTO, settings.script)} · {APP_TAGLINE}
      </Text>
      <Text style={p}>
        The nandadeepa is the lamp kept burning without a break before the deity. This app is meant
        to serve daily practice in the same way: mantras, suktas, stotras and sahasranamas, the great
        works for parayana, devotional songs, Sandhya Vandane, puja and rites, and a panchanga,
        readable in Devanagari, Kannada, Telugu, Tamil, Malayalam, Gujarati, Bengali, Odia and
        English (IAST).
      </Text>
      <Text style={p}>
        {ALL_MANTRAS.length + bookUnits.length} texts · {total} verses · works fully offline.
      </Text>
      <Text style={h}>How the scripts work</Text>
      <Text style={p}>
        Each text is stored once, in the script its best printed source uses (Devanagari for most; Kannada
        or Telugu for songs and works composed in those languages), and converted to your chosen script on
        the device, so every script shows exactly the same text. Texts composed in Tamil, such as the
        Tiruppavai, are always shown in Tamil. For Sanskrit in Tamil script, Tamil uses superscript numbers (க², க³, க⁴) to mark
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
