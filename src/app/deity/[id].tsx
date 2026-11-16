import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { EntryCard } from '../../components/TextList';
import { ALL_MANTRAS, categoryById } from '../../data';
import { DEITIES, deitiesOf } from '../../lib/deities';
import { scriptFont } from '../../lib/fonts';
import { foldMixed } from '../../lib/groups';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';
import { translit } from '../../lib/transliterate';

/** Every text for a deity, under the library section it belongs to. */
export default function DeityScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const group = DEITIES.find((d) => d.id === id);
  const all = group ? ALL_MANTRAS.filter((m) => deitiesOf(m).includes(group.id)) : [];
  const cats = [...new Set(all.map((m) => m.category))];
  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }}>
      <Stack.Screen options={{ title: group?.titleEn ?? tr('Not found') }} />
      {group && (
        <View style={{ paddingHorizontal: 16, paddingTop: 14 }}>
          <Text style={{ color: theme.accent, fontSize: 26, fontFamily: scriptFont(settings.script, settings.bookFonts) }}>{translit(group.title, settings.script)}</Text>
          <Text style={{ color: theme.textMuted, fontSize: 14 }}>
            {group.titleEn} · {tr('{n} texts', { n: all.length })}
          </Text>
        </View>
      )}
      {cats.map((c) => (
        <View key={c} style={{ marginTop: 16 }}>
          <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginHorizontal: 16, marginBottom: 6 }}>{categoryById[c].titleEn.toUpperCase()}</Text>
          <EntryCard entries={foldMixed(all.filter((m) => m.category === c))} />
        </View>
      ))}
    </ScrollView>
  );
}
