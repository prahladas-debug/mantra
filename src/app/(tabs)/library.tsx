import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categoryById, categoryCounts, type CategoryId } from '../../data';
import { COLLECTIONS } from '../../data/collections';
import { DEITIES } from '../../lib/deities';
import { scriptFont } from '../../lib/fonts';
import { categoryTitle } from '../../lib/labels';
import { useSettings } from '../../lib/settings';
import { translit } from '../../lib/transliterate';

/** The library, arranged in a few groups. */
export const SHELVES: { title: string; categories: CategoryId[] }[] = [
  { title: 'Daily practice', categories: ['nitya', 'sandhya', 'puja'] },
  { title: 'Parayana', categories: ['gita', 'sundarakanda', 'devimahatmya', 'sumadhvavijaya', 'harikathamrutasara'] },
  { title: 'Stotras and Sahasranama', categories: ['stotra', 'sahasranama'] },
  { title: 'Vedic suktas', categories: ['vedic'] },
  { title: 'Madhva and Dasa sahitya', categories: ['madhva', 'dasara-pada'] },
];

export default function Library() {
  const { theme, settings } = useSettings();
  const counts = categoryCounts();
  const font = scriptFont(settings.script, settings.bookFonts);

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: 8, paddingBottom: 32 }}>
      <Pressable onPress={() => router.push('/search')} style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]} accessibilityRole="search">
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <Text style={{ color: theme.textMuted, fontSize: 16 }}>Search texts, names, verses</Text>
      </Pressable>

      {SHELVES.map((shelf) => {
        const cats = shelf.categories.filter((c) => counts[c] > 0);
        if (!cats.length) return null;
        return (
          <View key={shelf.title} style={{ marginTop: 18 }}>
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

      <Text style={[s.shelf, { color: theme.textMuted, marginTop: 22 }]}>COLLECTIONS</Text>
      <View style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
        {COLLECTIONS.map((c, i) => (
          <Pressable
            key={c.id}
            onPress={() => router.push(`/collection/${c.id}` as Href)}
            accessibilityRole="link"
            style={({ pressed }) => [s.row, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.text, fontSize: 17, fontFamily: font }} numberOfLines={1}>
                {translit(c.title, settings.script)}
              </Text>
              <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 1 }} numberOfLines={1}>
                {c.titleEn} · {c.items.length} texts
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </Pressable>
        ))}
      </View>

      <Text style={[s.shelf, { color: theme.textMuted, marginTop: 22 }]}>BY DEITY</Text>
      <View style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
        {DEITIES.map((d, i) => (
          <Pressable
            key={d.id}
            onPress={() => router.push(`/deity/${d.id}` as Href)}
            accessibilityRole="link"
            style={({ pressed }) => [s.row, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ color: theme.accent, fontSize: 17, fontFamily: font, minWidth: 90 }}>{translit(d.title, settings.script)}</Text>
            <Text style={{ color: theme.textMuted, fontSize: 14, flex: 1 }} numberOfLines={1}>
              {d.titleEn}
            </Text>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 8, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 12, borderWidth: 1 },
  shelf: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginHorizontal: 16, marginBottom: 6 },
  list: { marginHorizontal: 16, borderRadius: 14, borderWidth: 1, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 14, gap: 4 },
});
