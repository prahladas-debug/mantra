import { Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { MantraRow } from '../../components/ui';
import { ALL_MANTRAS } from '../../data';
import { collapseSeries, DEITIES, deitiesOf } from '../../lib/deities';
import { scriptFont } from '../../lib/fonts';
import { useSettings } from '../../lib/settings';
import { translit } from '../../lib/transliterate';

export default function DeityScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings } = useSettings();
  const group = DEITIES.find((d) => d.id === id);
  const items = group ? collapseSeries(ALL_MANTRAS.filter((m) => deitiesOf(m).includes(group.id))) : [];
  return (
    <>
      <Stack.Screen options={{ title: group?.titleEn ?? 'Not found' }} />
      <FlatList
        style={{ backgroundColor: theme.bg }}
        data={items}
        keyExtractor={(e) => e.mantra.id}
        ListHeaderComponent={
          group && (
            <View style={{ padding: 16 }}>
              <Text style={{ color: theme.accent, fontSize: 28, fontFamily: scriptFont(settings.script, settings.bookFonts) }}>
                {translit(group.title, settings.script)}
              </Text>
              <Text style={{ color: theme.textMuted, fontSize: 15 }}>
                {group.titleEn} · {items.length} texts
              </Text>
            </View>
          )
        }
        renderItem={({ item }) => (
          <MantraRow mantra={item.mantra} subtitle={item.parts > 1 ? `${item.mantra.titleEn.split(' · ')[0]} · ${item.parts} parts` : undefined} />
        )}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </>
  );
}
