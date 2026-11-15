import { Stack, router, useLocalSearchParams, type Href } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { Chip, MantraRow } from '../../components/ui';
import { categoryById, mantrasInCategory, type CategoryId } from '../../data';
import { DEITIES, deitiesOf } from '../../lib/deities';
import { scriptFont } from '../../lib/fonts';
import { categoryTitle } from '../../lib/labels';
import { useSettings } from '../../lib/settings';
import { translit } from '../../lib/transliterate';

/** Multi-part works get a title page: opening verse, number of parts, Begin / Continue. */
const BOOKS = new Set(['gita', 'sundarakanda', 'devimahatmya', 'sumadhvavijaya', 'harikathamrutasara']);

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings, recent } = useSettings();
  const [deity, setDeity] = useState<string | null>(null);
  const category = categoryById[id as CategoryId];
  const all = category ? mantrasInCategory(category.id) : [];
  // Deity filter for larger categories (e.g. Stotras, Dāsara Pada).
  const groups = all.length > 8 && all.every((m) => m.order === undefined || m.series)
    ? DEITIES.filter((d) => all.some((m) => deitiesOf(m).includes(d.id)))
    : [];
  const items = deity ? all.filter((m) => deitiesOf(m).includes(deity)) : all;
  const font = scriptFont(settings.script, settings.bookFonts);
  const lastRead = recent.find((r) => all.some((m) => m.id === r.id));
  const first = all[0];
  const opening = first?.sections.flatMap((x) => x.verses).find((v) => v.n !== undefined)?.text.split('\n').slice(0, 2).join('\n');
  const cover =
    category ? (
      <View style={{ margin: 16, marginBottom: 8, paddingVertical: 24, paddingHorizontal: 18, alignItems: 'center', borderRadius: 16, borderWidth: 1, borderColor: theme.pageEdge, backgroundColor: theme.page }}>
        <Text style={{ color: theme.ornament, fontSize: 18, fontFamily: scriptFont('devanagari', settings.bookFonts) }}>{translit('॥ श्रीः ॥', settings.script)}</Text>
        <Text style={{ color: theme.accent, fontSize: 32, fontFamily: font, fontWeight: font ? undefined : '700', textAlign: 'center', marginTop: 8 }}>
          {categoryTitle(category, settings.script)}
        </Text>
        <Text style={{ color: theme.text, fontSize: 16, marginTop: 2 }}>{category.titleEn}</Text>
        <Text style={{ color: theme.ornament, marginVertical: 12 }}>❁ ❁ ❁</Text>
        {opening && (
          <Text style={{ color: theme.text, fontSize: 18, lineHeight: 30, textAlign: 'center', fontFamily: font }}>{translit(opening, settings.script)}</Text>
        )}
        <Text style={{ color: theme.textMuted, fontSize: 14, textAlign: 'center', marginTop: 12, lineHeight: 20 }}>
          {category.description} · {all.length} parts
        </Text>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 16 }}>
          <Pressable onPress={() => router.push(`/mantra/${first.id}` as Href)} style={({ pressed }) => ({ paddingHorizontal: 20, paddingVertical: 10, borderRadius: 22, borderWidth: 1, borderColor: theme.accent, opacity: pressed ? 0.7 : 1 })}>
            <Text style={{ color: theme.accent, fontSize: 15, fontWeight: '700' }}>Begin</Text>
          </Pressable>
          {lastRead && lastRead.id !== first.id && (
            <Pressable onPress={() => router.push(`/mantra/${lastRead.id}` as Href)} style={({ pressed }) => ({ paddingHorizontal: 20, paddingVertical: 10, borderRadius: 22, backgroundColor: theme.accent, opacity: pressed ? 0.7 : 1 })}>
              <Text style={{ color: theme.onAccent, fontSize: 15, fontWeight: '700' }}>Continue ›</Text>
            </Pressable>
          )}
        </View>
      </View>
    ) : null;

  return (
    <>
      <Stack.Screen options={{ title: category?.titleEn ?? 'Not found' }} />
      <FlatList
        style={{ backgroundColor: theme.bg }}
        data={items}
        keyExtractor={(m) => m.id}
        ListHeaderComponent={
          category && BOOKS.has(category.id) && all.length > 0 && cover ? (
            cover
          ) : category ? (
            <View style={{ paddingTop: 16, paddingBottom: 8 }}>
              <Text style={{ color: theme.accent, fontSize: 28, marginHorizontal: 16, fontFamily: font, fontWeight: font ? undefined : '700' }}>
                {categoryTitle(category, settings.script)}
              </Text>
              <Text style={{ color: theme.textMuted, fontSize: 15, marginTop: 4, marginHorizontal: 16 }}>{category.description}</Text>
              {groups.length > 1 && (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, marginTop: 12 }}>
                  <Chip label={`All · ${all.length}`} active={!deity} onPress={() => setDeity(null)} />
                  {groups.map((g) => (
                    <Chip key={g.id} label={g.titleEn} active={deity === g.id} onPress={() => setDeity(deity === g.id ? null : g.id)} />
                  ))}
                </ScrollView>
              )}
            </View>
          ) : undefined
        }
        renderItem={({ item }) => <MantraRow mantra={item} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </>
  );
}
