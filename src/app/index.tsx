import { Ionicons } from '@expo/vector-icons';
import { Link, router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TodayCard } from '../components/PanchangaCard';
import { PlanCard } from '../components/PlanCard';
import { MantraRow, ScriptPicker, SectionHeading } from '../components/ui';
import { categoryById, categoryCounts, getMantra, type CategoryId } from '../data';
import { DEITIES } from '../lib/deities';
import { scriptFont } from '../lib/fonts';
import { appTitle, categoryTitle } from '../lib/labels';
import { planStatus } from '../lib/plans';
import { useSettings } from '../lib/settings';
import { translit, translitTitle } from '../lib/transliterate';

/** The library, arranged on shelves as it grows. */
const SHELVES: { title: string; titleKn: string; categories: CategoryId[] }[] = [
  { title: 'Daily & rituals', titleKn: 'ನಿತ್ಯ ಕರ್ಮ', categories: ['nitya', 'sandhya', 'puja'] },
  { title: 'Parayana granthas', titleKn: 'ಪಾರಾಯಣ ಗ್ರಂಥಗಳು', categories: ['gita', 'sundarakanda', 'devimahatmya', 'sumadhvavijaya', 'harikathamrutasara'] },
  { title: 'Stotras & Sahasranama', titleKn: 'ಸ್ತೋತ್ರಗಳು', categories: ['stotra', 'sahasranama'] },
  { title: 'Vedic', titleKn: 'ವೈದಿಕ', categories: ['vedic'] },
  { title: 'Madhva & Haridasa', titleKn: 'ಮಾಧ್ವ · ದಾಸ ಸಾಹಿತ್ಯ', categories: ['madhva', 'dasara-pada'] },
];

const TOOLS: { icon: keyof typeof Ionicons.glyphMap; label: string; href: string }[] = [
  { icon: 'calendar-outline', label: 'Calendar', href: '/calendar' },
  { icon: 'sunny-outline', label: 'Panchanga', href: '/panchanga' },
  { icon: 'ellipse-outline', label: 'Japa', href: '/japa' },
  { icon: 'flag-outline', label: 'Parayana', href: '/parayana' },
  { icon: 'bookmark-outline', label: 'Bookmarks', href: '/bookmarks' },
];

const FEATURED = ['vishnu-sahasranama', 'lalitha-sahasranama', 'vayu-stuti', 'bhagavad-gita-01', 'venkatesha-suprabhatam', 'sri-rudram-namakam', 'sundarakanda-01', 'sandhya-vandane-rigveda'];

export default function Home() {
  const { theme, settings, update, favorites, recent, plans, positions } = useSettings();
  const insets = useSafeAreaInsets();
  const counts = categoryCounts();
  const font = scriptFont(settings.script, settings.bookFonts);
  const featured = FEATURED.map(getMantra).filter((m) => !!m);
  const recentMantras = recent.map((r) => getMantra(r.id)).filter((m) => !!m).slice(0, 6);
  const favMantras = favorites.map(getMantra).filter((m) => !!m);
  const activePlans = plans.filter((p) => !planStatus(p).finished);

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: insets.bottom + 32 }}>
      <View style={s.header}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.accent, fontSize: 30, fontFamily: font, fontWeight: font ? undefined : '700' }}>{appTitle(settings.script)}</Text>
          <Text style={{ color: theme.textMuted, fontSize: 15 }}>Vedic mantras, stotras & parayana in your script</Text>
        </View>
        <Link href="/settings" asChild>
          <Pressable hitSlop={12} accessibilityLabel="Settings">
            <Ionicons name="settings-outline" size={24} color={theme.text} />
          </Pressable>
        </Link>
      </View>

      <Pressable onPress={() => router.push('/search')} style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]} accessibilityRole="search">
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <Text style={{ color: theme.textMuted, fontSize: 16 }}>Search mantras, names, verses…</Text>
      </Pressable>

      <TodayCard />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.tools}>
        {TOOLS.map((t) => (
          <Pressable key={t.href} onPress={() => router.push(t.href as Href)} style={s.tool} accessibilityRole="button" accessibilityLabel={t.label}>
            <View style={[s.toolIcon, { backgroundColor: theme.accentSoft }]}>
              <Ionicons name={t.icon} size={22} color={theme.accent} />
            </View>
            <Text style={{ color: theme.text, fontSize: 12, marginTop: 4 }}>{t.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {recentMantras.length > 0 && (
        <>
          <SectionHeading>Continue reading · ಮುಂದುವರಿಸಿ</SectionHeading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
            {recentMantras.map((m) => (
              <Pressable
                key={m.id}
                onPress={() => router.push(`/mantra/${m.id}` as Href)}
                style={({ pressed }) => [s.cover, { backgroundColor: theme.page, borderColor: theme.pageEdge, opacity: pressed ? 0.75 : 1 }]}
              >
                <Text style={{ color: theme.ornament, fontSize: 12 }}>❁</Text>
                <Text numberOfLines={3} style={{ color: theme.accent, fontSize: 17, lineHeight: 28, textAlign: 'center', fontFamily: font }}>
                  {translitTitle(m.title, settings.script)}
                </Text>
                <Text numberOfLines={2} style={{ color: theme.textMuted, fontSize: 12, textAlign: 'center', marginTop: 4 }}>
                  {m.titleEn}
                </Text>
                {positions[m.id] && <Text style={{ color: theme.accent, fontSize: 11, marginTop: 6 }}>Resume ›</Text>}
              </Pressable>
            ))}
          </ScrollView>
        </>
      )}

      {activePlans.length > 0 && <SectionHeading>Parayana · ಪಾರಾಯಣ</SectionHeading>}
      {activePlans.map((p) => (
        <PlanCard key={p.id} plan={p} compact />
      ))}

      <SectionHeading>Reading script · ಲಿಪಿ · लिपि</SectionHeading>
      <ScriptPicker value={settings.script} onChange={(v) => v && update({ script: v })} />

      {SHELVES.map((shelf) => {
        const cats = shelf.categories.filter((c) => counts[c] > 0);
        if (!cats.length) return null;
        return (
          <View key={shelf.title}>
            <SectionHeading>
              {shelf.title} · {shelf.titleKn}
            </SectionHeading>
            <View style={s.grid}>
              {cats.map((id) => {
                const c = categoryById[id];
                return (
                  <Pressable
                    key={id}
                    onPress={() => router.push(`/category/${id}` as Href)}
                    accessibilityRole="link"
                    style={({ pressed }) => [s.tile, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1 }]}
                  >
                    <View style={[s.spine, { backgroundColor: theme.ornament }]} />
                    <Text style={{ color: theme.text, fontSize: 18, fontFamily: font, fontWeight: font ? undefined : '600' }} numberOfLines={1}>
                      {categoryTitle(c, settings.script)}
                    </Text>
                    <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={1}>
                      {c.titleEn}
                    </Text>
                    <Text style={{ color: theme.accent, fontSize: 12, marginTop: 4, fontWeight: '600' }}>
                      {counts[id]} {counts[id] === 1 ? 'text' : 'texts'}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        );
      })}

      <SectionHeading>By deity · ದೇವತೆ</SectionHeading>
      <View style={[s.grid, { paddingHorizontal: 16, gap: 8 }]}>
        {DEITIES.map((d) => (
          <Pressable
            key={d.id}
            onPress={() => router.push(`/deity/${d.id}` as Href)}
            style={({ pressed }) => [s.deity, { borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.7 : 1 }]}
          >
            <Text style={{ color: theme.accent, fontSize: 16, fontFamily: font }}>{translit(d.title, settings.script)}</Text>
            <Text style={{ color: theme.textMuted, fontSize: 11 }}>{d.titleEn}</Text>
          </Pressable>
        ))}
      </View>

      {favMantras.length > 0 && (
        <>
          <SectionHeading>Favourites</SectionHeading>
          {favMantras.map((m) => (
            <MantraRow key={m.id} mantra={m} />
          ))}
        </>
      )}

      <SectionHeading>Featured</SectionHeading>
      {featured.map((m) => (
        <MantraRow key={m.id} mantra={m} />
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 16, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 12, borderWidth: 1 },
  tools: { paddingHorizontal: 12, paddingTop: 16, gap: 4 },
  tool: { alignItems: 'center', width: 72 },
  toolIcon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  cover: { width: 132, minHeight: 150, padding: 12, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12 },
  tile: { width: '46%', margin: '2%', padding: 14, paddingLeft: 18, borderRadius: 12, borderWidth: 1, overflow: 'hidden' },
  spine: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, opacity: 0.8 },
  deity: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, borderWidth: 1 },
});
