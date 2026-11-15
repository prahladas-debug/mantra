import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { BookCover, CategoryTile, ShelfHeading, greatWorks } from '../../components/Shelf';
import type { CategoryId } from '../../data';
import { COLLECTIONS } from '../../data/collections';
import { DEITIES } from '../../lib/deities';
import { scriptFont } from '../../lib/fonts';
import { useSettings } from '../../lib/settings';
import { translit, translitTitle } from '../../lib/transliterate';

/** The library below the great works, in a few plain groups. */
export const SHELVES: { title: string; categories: CategoryId[] }[] = [
  { title: 'Every day', categories: ['nitya', 'sandhya', 'puja'] },
  { title: 'Stotras and names', categories: ['stotra', 'sahasranama', 'madhva', 'vedic'] },
  { title: 'Devotional songs', categories: ['dasara-pada', 'kirtana'] },
  { title: 'Rites and homas', categories: ['samskara', 'homa'] },
];

/** The whole library: the great works as a shelf of books, then tiles by kind, deity and occasion. */
export default function Library() {
  const { theme, settings } = useSettings();
  const { width } = useWindowDimensions();
  const font = scriptFont(settings.script, settings.bookFonts);
  // Three covers to a row, with the same 16-point gutters as everything else.
  const coverW = Math.min(150, Math.floor((width - 32 - 20) / 3));

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: 8, paddingBottom: 32 }}>
      <Pressable onPress={() => router.push('/search')} style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]} accessibilityRole="search">
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <Text style={{ color: theme.textMuted, fontSize: 16 }}>Search texts, names, verses</Text>
      </Pressable>

      <ShelfHeading title="Great works · parayana" />
      <View style={[s.grid, { justifyContent: 'flex-start', columnGap: 10 }]}>
        {greatWorks(settings.variants.tradition).map((w) => (
          <BookCover key={w.category ?? w.textId} work={w} width={coverW} height={Math.round(coverW * 1.42)} />
        ))}
      </View>

      {SHELVES.map((shelf) => (
        <View key={shelf.title}>
          <ShelfHeading title={shelf.title} />
          <View style={s.grid}>
            {shelf.categories.map((id) => (
              <CategoryTile key={id} id={id} />
            ))}
          </View>
        </View>
      ))}

      <ShelfHeading title="By deity" />
      <View style={[s.grid, { justifyContent: 'flex-start', columnGap: 8, rowGap: 8 }]}>
        {DEITIES.map((d) => (
          <Pressable
            key={d.id}
            onPress={() => router.push(`/deity/${d.id}` as Href)}
            accessibilityRole="link"
            accessibilityLabel={d.titleEn}
            style={({ pressed }) => [s.chip, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ color: theme.accent, fontSize: 16, lineHeight: 24, fontFamily: font }}>{translit(d.title, settings.script)}</Text>
          </Pressable>
        ))}
      </View>

      <ShelfHeading title="For the day and the occasion" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
        {COLLECTIONS.map((c) => (
          <Pressable
            key={c.id}
            onPress={() => router.push(`/collection/${c.id}` as Href)}
            accessibilityRole="link"
            style={({ pressed }) => [s.collection, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1 }]}
          >
            <Text numberOfLines={2} style={{ color: theme.accent, fontSize: 16, lineHeight: 25, fontFamily: font }}>
              {translitTitle(c.title, settings.script)}
            </Text>
            <Text numberOfLines={1} style={{ color: theme.textMuted, fontSize: 12, marginTop: 4 }}>
              {c.titleEn} · {c.items.length}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 8, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 12, borderWidth: 1 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 10, marginHorizontal: 16 },
  chip: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 18, borderWidth: 1 },
  collection: { width: 150, minHeight: 84, padding: 12, borderRadius: 12, borderWidth: 1, justifyContent: 'center' },
});
