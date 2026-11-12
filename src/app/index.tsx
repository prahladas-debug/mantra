import { Ionicons } from '@expo/vector-icons';
import { Link, router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MantraRow, ScriptPicker, SectionHeading } from '../components/ui';
import { CATEGORIES, categoryCounts, getMantra } from '../data';
import { useSettings } from '../lib/settings';
import { translit } from '../lib/transliterate';

const APP_TITLE = 'मन्त्रसङ्ग्रहः';

const FEATURED = [
  'vishnu-sahasranama',
  'vayu-stuti',
  'purusha-sukta',
  'sri-sukta',
  'venkatesha-stotram',
  'sandhya-vandane',
];

export default function Home() {
  const { theme, settings, update, favorites, recent } = useSettings();
  const insets = useSafeAreaInsets();
  const counts = categoryCounts();
  const featured = FEATURED.map(getMantra).filter((m) => !!m);
  const recentMantras = recent.map((r) => getMantra(r.id)).filter((m) => !!m).slice(0, 3);
  const favMantras = favorites.map(getMantra).filter((m) => !!m);

  return (
    <ScrollView
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: insets.bottom + 32 }}
    >
      <View style={s.header}>
        <View style={{ flex: 1 }}>
          <Text style={[s.appTitle, { color: theme.accent }]}>{translit(APP_TITLE, settings.script)}</Text>
          <Text style={{ color: theme.textMuted, fontSize: 15 }}>Vedic mantras & stotras in your script</Text>
        </View>
        <Link href="/settings" asChild>
          <Pressable hitSlop={12} accessibilityLabel="Settings">
            <Ionicons name="settings-outline" size={24} color={theme.text} />
          </Pressable>
        </Link>
      </View>

      <Pressable
        onPress={() => router.push('/search')}
        style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}
        accessibilityRole="search"
      >
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <Text style={{ color: theme.textMuted, fontSize: 16 }}>Search mantras, names, verses…</Text>
      </Pressable>

      <SectionHeading>Reading script · ಲಿಪಿ · लिपि</SectionHeading>
      <ScriptPicker value={settings.script} onChange={(v) => v && update({ script: v })} />

      {recentMantras.length > 0 && (
        <>
          <SectionHeading>Continue reading</SectionHeading>
          {recentMantras.map((m) => (
            <MantraRow key={m.id} mantra={m} />
          ))}
        </>
      )}

      {favMantras.length > 0 && (
        <>
          <SectionHeading>Favourites</SectionHeading>
          {favMantras.map((m) => (
            <MantraRow key={m.id} mantra={m} />
          ))}
        </>
      )}

      <SectionHeading>Categories</SectionHeading>
      <View style={s.grid}>
        {CATEGORIES.filter((c) => counts[c.id] > 0).map((c) => (
            <Pressable
              key={c.id}
              onPress={() => router.push(`/category/${c.id}` as Href)}
              accessibilityRole="link"
              style={({ pressed }) => [
                s.tile,
                { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1 },
              ]}
            >
              <Text style={[s.tileTitle, { color: theme.text }]} numberOfLines={1}>
                {translit(c.title, settings.script)}
              </Text>
              <Text style={{ color: theme.textMuted, fontSize: 14 }}>{c.titleEn}</Text>
              <Text style={{ color: theme.accent, fontSize: 13, marginTop: 6, fontWeight: '600' }}>
                {counts[c.id]} {counts[c.id] === 1 ? 'text' : 'texts'}
              </Text>
            </Pressable>
        ))}
      </View>

      {featured.length > 0 && (
        <>
          <SectionHeading>Featured</SectionHeading>
          {featured.map((m) => (
            <MantraRow key={m.id} mantra={m} />
          ))}
        </>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 },
  appTitle: { fontSize: 30, fontWeight: '700' },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12 },
  tile: { width: '46%', margin: '2%', padding: 14, borderRadius: 14, borderWidth: 1 },
  tileTitle: { fontSize: 18, fontWeight: '600', marginBottom: 2 },
});
