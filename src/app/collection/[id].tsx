import { Ionicons } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams, type Href } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { getMantraInfo } from '../../data';
import { collectionById } from '../../data/collections';
import { scriptFont } from '../../lib/fonts';
import { useSettings } from '../../lib/settings';
import { translit, translitTitle } from '../../lib/transliterate';

/** A ready-made set of texts, read in order; also offered as a daily routine. */
export default function CollectionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings, routine, setRoutine } = useSettings();
  const c = collectionById(id);
  const font = scriptFont(settings.script, settings.bookFonts);
  if (!c) return <Stack.Screen options={{ title: 'Not found' }} />;
  const items = c.items.map(getMantraInfo).filter((m) => !!m);
  const allInRoutine = c.items.every((x) => routine.includes(x));

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }}>
      <Stack.Screen options={{ title: c.titleEn }} />
      <View style={{ alignItems: 'center', padding: 20, margin: 16, borderRadius: 14, borderWidth: 1, borderColor: theme.pageEdge, backgroundColor: theme.page }}>
        <Text style={{ color: theme.ornament, fontSize: 16 }}>❁</Text>
        <Text style={{ color: theme.accent, fontSize: 26, fontFamily: font, textAlign: 'center', marginTop: 4 }}>{translit(c.title, settings.script)}</Text>
        <Text style={{ color: theme.textMuted, fontSize: 14, textAlign: 'center', marginTop: 6, lineHeight: 20 }}>{c.when}</Text>
        <Pressable
          onPress={() => router.push(`/mantra/${c.items[0]}` as Href)}
          style={({ pressed }) => ({ marginTop: 14, paddingHorizontal: 22, paddingVertical: 11, borderRadius: 22, backgroundColor: theme.accent, opacity: pressed ? 0.8 : 1 })}
          accessibilityRole="button"
        >
          <Text style={{ color: theme.onAccent, fontSize: 16, fontWeight: '700' }}>Begin</Text>
        </Pressable>
      </View>

      <View style={{ marginHorizontal: 16, borderRadius: 14, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
        {items.map((m, i) => (
          <Pressable
            key={m.id}
            onPress={() => router.push(`/mantra/${m.id}` as Href)}
            style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 12, borderTopWidth: i ? 1 : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 })}
          >
            <Text style={{ color: theme.textMuted, width: 22, textAlign: 'right' }}>{i + 1}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.text, fontSize: 17, fontFamily: font }} numberOfLines={1}>
                {translitTitle(m.title, settings.script)}
              </Text>
              <Text style={{ color: theme.textMuted, fontSize: 12 }} numberOfLines={1}>
                {m.titleEn}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={() => setRoutine(allInRoutine ? routine.filter((x) => !c.items.includes(x)) : [...routine, ...c.items.filter((x) => !routine.includes(x))])}
        style={{ alignSelf: 'center', marginTop: 18, padding: 8 }}
        accessibilityRole="button"
      >
        <Text style={{ color: theme.accent, fontSize: 15 }}>{allInRoutine ? 'Remove these from my daily routine' : '＋ Add all to my daily routine'}</Text>
      </Pressable>
    </ScrollView>
  );
}
