import { Ionicons } from '@expo/vector-icons';
import { Link, router, type Href } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TodayCard } from '../components/PanchangaCard';
import { PlanCard } from '../components/PlanCard';
import { MantraRow } from '../components/ui';
import { categoryById, categoryCounts, getMantra, type CategoryId } from '../data';
import { DEITIES } from '../lib/deities';
import { scriptFont } from '../lib/fonts';
import { appTitle, categoryTitle } from '../lib/labels';
import { planStatus } from '../lib/plans';
import { useSettings } from '../lib/settings';
import { SCRIPTS, translit, translitTitle } from '../lib/transliterate';

/** The library, arranged in a few groups. */
const SHELVES: { title: string; categories: CategoryId[] }[] = [
  { title: 'Daily practice', categories: ['nitya', 'sandhya', 'puja'] },
  { title: 'Parayana', categories: ['gita', 'sundarakanda', 'devimahatmya', 'sumadhvavijaya', 'harikathamrutasara'] },
  { title: 'Stotras and Sahasranama', categories: ['stotra', 'sahasranama'] },
  { title: 'Vedic suktas', categories: ['vedic'] },
  { title: 'Madhva and Dasa sahitya', categories: ['madhva', 'dasara-pada'] },
];

const TOOLS: { icon: keyof typeof Ionicons.glyphMap; label: string; href: string }[] = [
  { icon: 'sunny-outline', label: 'Panchanga', href: '/panchanga' },
  { icon: 'calendar-outline', label: 'Calendar', href: '/calendar' },
  { icon: 'ellipse-outline', label: 'Japa', href: '/japa' },
  { icon: 'flag-outline', label: 'Parayana', href: '/parayana' },
  { icon: 'bookmark-outline', label: 'Bookmarks', href: '/bookmarks' },
];

/** Reading-script chooser behind the header button. */
function ScriptSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { theme, settings, update } = useSettings();
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: '#0006' }} onPress={onClose} accessibilityLabel="Close" />
      <View style={{ backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingBottom: 28, paddingTop: 8 }}>
        <Text style={{ color: theme.text, fontSize: 19, fontWeight: '700', margin: 16, marginBottom: 8 }}>Reading script</Text>
        {SCRIPTS.map((sc) => {
          const active = settings.script === sc.id;
          return (
            <Pressable
              key={sc.id}
              onPress={() => {
                update({ script: sc.id });
                onClose();
              }}
              accessibilityRole="radio"
              accessibilityState={{ selected: active }}
              style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, paddingHorizontal: 16, opacity: pressed ? 0.6 : 1 })}
            >
              <Text style={{ flex: 1, color: active ? theme.accent : theme.text, fontSize: 18, fontFamily: scriptFont(sc.id, settings.bookFonts) }}>{sc.native}</Text>
              <Text style={{ color: theme.textMuted, fontSize: 14, marginRight: 10 }}>{sc.en}</Text>
              <Ionicons name={active ? 'radio-button-on' : 'radio-button-off'} size={20} color={active ? theme.accent : theme.textMuted} />
            </Pressable>
          );
        })}
      </View>
    </Modal>
  );
}

export default function Home() {
  const { theme, settings, favorites, recent, plans, positions } = useSettings();
  const insets = useSafeAreaInsets();
  const [scriptSheet, setScriptSheet] = useState(false);
  const counts = categoryCounts();
  const font = scriptFont(settings.script, settings.bookFonts);
  const script = SCRIPTS.find((x) => x.id === settings.script) ?? SCRIPTS[0];
  const recentMantras = recent.map((r) => getMantra(r.id)).filter((m) => !!m).slice(0, 5);
  const favMantras = favorites.map(getMantra).filter((m) => !!m);
  const activePlans = plans.filter((p) => !planStatus(p).finished);

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: insets.top + 14, paddingBottom: insets.bottom + 40 }}>
      {/* Header: name, script, settings */}
      <View style={s.header}>
        <Text style={{ flex: 1, color: theme.accent, fontSize: 28, fontFamily: font, fontWeight: font ? undefined : '700' }} numberOfLines={1}>
          {appTitle(settings.script)}
        </Text>
        <Pressable
          onPress={() => setScriptSheet(true)}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Reading script: ${script.en}. Change`}
          style={({ pressed }) => [s.scriptBtn, { borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 }]}
        >
          <Text style={{ color: theme.text, fontSize: 15, fontFamily: scriptFont(script.id, settings.bookFonts) }}>{script.native}</Text>
          <Ionicons name="chevron-down" size={14} color={theme.textMuted} />
        </Pressable>
        <Link href="/settings" asChild>
          <Pressable hitSlop={12} accessibilityLabel="Settings">
            <Ionicons name="settings-outline" size={23} color={theme.textMuted} />
          </Pressable>
        </Link>
      </View>

      <Pressable onPress={() => router.push('/search')} style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]} accessibilityRole="search">
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <Text style={{ color: theme.textMuted, fontSize: 16 }}>Search texts, names, verses</Text>
      </Pressable>

      <TodayCard />

      <View style={s.tools}>
        {TOOLS.map((t) => (
          <Pressable key={t.href} onPress={() => router.push(t.href as Href)} style={({ pressed }) => [s.tool, { opacity: pressed ? 0.6 : 1 }]} accessibilityRole="button" accessibilityLabel={t.label}>
            <Ionicons name={t.icon} size={22} color={theme.accent} />
            <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 4 }} numberOfLines={1}>
              {t.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {recentMantras.length > 0 && (
        <>
          <Text style={[s.heading, { color: theme.text }]}>Continue reading</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
            {recentMantras.map((m) => (
              <Pressable
                key={m.id}
                onPress={() => router.push(`/mantra/${m.id}` as Href)}
                style={({ pressed }) => [s.cover, { backgroundColor: theme.page, borderColor: theme.pageEdge, opacity: pressed ? 0.75 : 1 }]}
              >
                <Text numberOfLines={2} style={{ color: theme.accent, fontSize: 16, lineHeight: 26, textAlign: 'center', fontFamily: font }}>
                  {translitTitle(m.title, settings.script)}
                </Text>
                <Text numberOfLines={2} style={{ color: theme.textMuted, fontSize: 12, textAlign: 'center', marginTop: 4 }}>
                  {m.titleEn}
                </Text>
                {positions[m.id] && <Text style={{ color: theme.accent, fontSize: 12, marginTop: 6, fontWeight: '600' }}>Resume ›</Text>}
              </Pressable>
            ))}
          </ScrollView>
        </>
      )}

      {activePlans.length > 0 && <Text style={[s.heading, { color: theme.text }]}>Your parayana</Text>}
      {activePlans.map((p) => (
        <PlanCard key={p.id} plan={p} compact />
      ))}

      <Text style={[s.heading, { color: theme.text }]}>Library</Text>
      {SHELVES.map((shelf) => {
        const cats = shelf.categories.filter((c) => counts[c] > 0);
        if (!cats.length) return null;
        return (
          <View key={shelf.title} style={{ marginBottom: 14 }}>
            <Text style={[s.shelf, { color: theme.textMuted }]}>{shelf.title.toUpperCase()}</Text>
            <View style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
              {cats.map((id, i) => {
                const c = categoryById[id];
                return (
                  <Pressable
                    key={id}
                    onPress={() => router.push(`/category/${id}` as Href)}
                    accessibilityRole="link"
                    style={({ pressed }) => [s.row, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: theme.text, fontSize: 18, fontFamily: font, fontWeight: font ? undefined : '600' }} numberOfLines={1}>
                        {categoryTitle(c, settings.script)}
                      </Text>
                      <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 1 }} numberOfLines={1}>
                        {c.titleEn}
                      </Text>
                    </View>
                    <Text style={{ color: theme.textMuted, fontSize: 13, marginRight: 6 }}>{counts[id]}</Text>
                    <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
                  </Pressable>
                );
              })}
            </View>
          </View>
        );
      })}

      <Text style={[s.heading, { color: theme.text, marginTop: 10 }]}>By deity</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}>
        {DEITIES.map((d) => (
          <Pressable
            key={d.id}
            onPress={() => router.push(`/deity/${d.id}` as Href)}
            style={({ pressed }) => [s.deity, { borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.7 : 1 }]}
          >
            <Text style={{ color: theme.accent, fontSize: 16, fontFamily: font }}>{translit(d.title, settings.script)}</Text>
            <Text style={{ color: theme.textMuted, fontSize: 11 }} numberOfLines={1}>
              {d.titleEn}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {favMantras.length > 0 && (
        <>
          <Text style={[s.heading, { color: theme.text, marginTop: 24 }]}>Favourites</Text>
          {favMantras.slice(0, 6).map((m) => (
            <MantraRow key={m.id} mantra={m} />
          ))}
        </>
      )}

      <ScriptSheet visible={scriptSheet} onClose={() => setScriptSheet(false)} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 },
  scriptBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, borderWidth: 1 },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 14, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 12, borderWidth: 1 },
  tools: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 18 },
  tool: { alignItems: 'center', flex: 1, paddingVertical: 4 },
  heading: { fontSize: 18, fontWeight: '700', marginHorizontal: 16, marginTop: 26, marginBottom: 10 },
  shelf: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginHorizontal: 16, marginBottom: 6 },
  cover: { width: 124, minHeight: 120, padding: 12, borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  list: { marginHorizontal: 16, borderRadius: 14, borderWidth: 1, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 14 },
  deity: { paddingHorizontal: 14, paddingVertical: 9, borderRadius: 12, borderWidth: 1, alignItems: 'center' },
});
