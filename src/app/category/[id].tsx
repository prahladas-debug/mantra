import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { Chip, MantraRow } from '../../components/ui';
import { categoryById, mantrasInCategory, type CategoryId } from '../../data';
import { DEITIES, deitiesOf } from '../../lib/deities';
import { scriptFont } from '../../lib/fonts';
import { categoryTitle } from '../../lib/labels';
import { useSettings } from '../../lib/settings';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings } = useSettings();
  const [deity, setDeity] = useState<string | null>(null);
  const category = categoryById[id as CategoryId];
  const all = category ? mantrasInCategory(category.id) : [];
  // Deity filter for larger categories (e.g. Stotras, Dāsara Pada).
  const groups = all.length > 8 && all.every((m) => m.order === undefined || m.series)
    ? DEITIES.filter((d) => all.some((m) => deitiesOf(m).includes(d.id)))
    : [];
  const items = deity ? all.filter((m) => deitiesOf(m).includes(deity)) : all;
  const font = scriptFont(settings.script, settings.bookFonts);

  return (
    <>
      <Stack.Screen options={{ title: category?.titleEn ?? 'Not found' }} />
      <FlatList
        style={{ backgroundColor: theme.bg }}
        data={items}
        keyExtractor={(m) => m.id}
        ListHeaderComponent={
          category && (
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
          )
        }
        renderItem={({ item }) => <MantraRow mantra={item} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </>
  );
}
