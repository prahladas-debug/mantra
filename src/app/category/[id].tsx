import { Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { MantraRow } from '../../components/ui';
import { categoryById, mantrasInCategory, type CategoryId } from '../../data';
import { useSettings } from '../../lib/settings';
import { translit } from '../../lib/transliterate';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings } = useSettings();
  const category = categoryById[id as CategoryId];
  const items = category ? mantrasInCategory(category.id) : [];

  return (
    <>
      <Stack.Screen options={{ title: category?.titleEn ?? 'Not found' }} />
      <FlatList
        style={{ backgroundColor: theme.bg }}
        data={items}
        keyExtractor={(m) => m.id}
        ListHeaderComponent={
          category && (
            <View style={{ padding: 16 }}>
              <Text style={{ color: theme.accent, fontSize: 26, fontWeight: '700' }}>
                {translit(category.title, settings.script)}
              </Text>
              <Text style={{ color: theme.textMuted, fontSize: 15, marginTop: 4 }}>{category.description}</Text>
            </View>
          )
        }
        renderItem={({ item }) => <MantraRow mantra={item} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </>
  );
}
