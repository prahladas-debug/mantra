import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { CategoryList, DeityMedallion, ShelfHeading, WorkCard, greatWorks } from '../../components/Shelf';
import type { CategoryId } from '../../data';
import { COLLECTIONS } from '../../data/collections';
import { DEITIES } from '../../lib/deities';
import { scriptFont } from '../../lib/fonts';
import { T, useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';
import { nameOf } from '../../lib/transliterate';
import { useShowEnglish } from '../../components/useGloss';

/** The library below the great works, in a few plain groups. */
export const SHELVES: { title: string; categories: CategoryId[] }[] = [
  { title: T('Every day'), categories: ['nitya', 'sandhya', 'puja'] },
  { title: T('Stotras and names'), categories: ['stotra', 'sahasranama', 'madhva', 'vedic'] },
  { title: T('Devotional songs'), categories: ['dasara-pada', 'kirtana', 'aarti'] },
  { title: T('Yajnas and rites'), categories: ['homa', 'samskara'] },
];

/** The whole library: the great works as a shelf of books, then tiles by kind, deity and occasion. */
export default function Library() {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const { width } = useWindowDimensions();
  const font = scriptFont(settings.script, settings.bookFonts);
  // The great works two to a row, as painted cards.
  const cardW = Math.floor((width - 32 - 12) / 2);

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: 8, paddingBottom: 32 }}>
      <Pressable onPress={() => router.push('/search')} style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]} accessibilityRole="search">
        <MaterialCommunityIcons name="magnify" size={22} color={theme.accent} />
        <Text style={{ color: theme.textMuted, fontSize: 16 }}>{tr('Search texts, names, verses')}</Text>
      </Pressable>

      <ShelfHeading title={T('Great works')} />
      <View style={[s.grid, { rowGap: 12 }]}>
        {greatWorks(settings.variants.tradition).map((w) => (
          <WorkCard key={w.category ?? w.textId} work={w} width={cardW} />
        ))}
      </View>

      <ShelfHeading title={T('By deity')} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 4 }}>
        {DEITIES.map((d) => (
          <DeityMedallion key={d.id} deity={d} width={84} />
        ))}
      </ScrollView>

      {SHELVES.map((shelf) => (
        <View key={shelf.title}>
          <ShelfHeading title={shelf.title} />
          <CategoryList ids={shelf.categories} />
        </View>
      ))}

      <ShelfHeading title={T('Occasions')} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
        {COLLECTIONS.map((c) => (
          <Pressable
            key={c.id}
            onPress={() => router.push(`/collection/${c.id}` as Href)}
            accessibilityRole="link"
            style={({ pressed }) => [s.collection, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1 }]}
          >
            <Text numberOfLines={2} style={{ color: theme.accent, fontSize: 16, lineHeight: 25, fontFamily: font }}>
              {nameOf(c, settings.script)}
            </Text>
            <Text numberOfLines={1} style={{ color: theme.textMuted, fontSize: 13, marginTop: 4 }}>
              {showEn ? `${c.titleEn} · ` : ''}
              {c.items.length}
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
  collection: { width: 150, minHeight: 84, padding: 12, borderRadius: 12, borderWidth: 1, justifyContent: 'center' },
});
