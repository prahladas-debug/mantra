import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams, type Href } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { getMantraInfo, scriptFor } from '../../data';
import { collectionById } from '../../data/collections';
import { scriptFont } from '../../lib/fonts';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';
import { nameOf } from '../../lib/transliterate';
import { useShowEnglish } from '../../components/useGloss';

/** A ready-made set of texts, read in order; also offered as a daily routine. */
export default function CollectionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme, settings, routine, setRoutine } = useSettings();
  const { lang, tr } = useI18n();
  const showEn = useShowEnglish();
  const c = collectionById(id);
  const font = scriptFont(settings.script, settings.bookFonts);
  if (!c) return <Stack.Screen options={{ title: tr('Not found') }} />;
  const items = c.items.map(getMantraInfo).filter((m) => !!m);
  const ids = items.map((m) => m.id);
  const allInRoutine = ids.every((x) => routine.includes(x));

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }}>
      <Stack.Screen options={{ title: lang === 'en' ? c.titleEn : nameOf(c, settings.script) }} />
      <View style={{ alignItems: 'center', padding: 20, margin: 16, borderRadius: 14, borderWidth: 1, borderColor: theme.pageEdge, backgroundColor: theme.page }}>
        <Text style={{ color: theme.ornament, fontSize: 16 }}>❁</Text>
        <Text style={{ color: theme.accent, fontSize: 26, fontFamily: font, textAlign: 'center', marginTop: 4 }}>{nameOf(c, settings.script)}</Text>
        {lang === 'en' && <Text style={{ color: theme.textMuted, fontSize: 14, textAlign: 'center', marginTop: 6, lineHeight: 20 }}>{c.when}</Text>}
        <Pressable
          onPress={() => items[0] && router.push(`/mantra/${items[0].id}` as Href)}
          style={({ pressed }) => ({ marginTop: 14, paddingHorizontal: 22, paddingVertical: 11, borderRadius: 22, backgroundColor: theme.accent, opacity: pressed ? 0.8 : 1 })}
          accessibilityRole="button"
        >
          <Text style={{ color: theme.onAccent, fontSize: 16, fontWeight: '700' }}>{tr('Begin')}</Text>
        </Pressable>
      </View>

      <View style={{ marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
        {items.map((m, i) => (
          <Pressable
            key={m.id}
            onPress={() => router.push(`/mantra/${m.id}` as Href)}
            style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 12, borderTopWidth: i ? 1 : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 })}
          >
            <Text style={{ color: theme.textMuted, width: 22, textAlign: 'right' }}>{i + 1}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.text, fontSize: 17, fontFamily: scriptFont(scriptFor(m, settings.script), settings.bookFonts) }} numberOfLines={1}>
                {nameOf(m, settings.script)}
              </Text>
              {showEn && (
                <Text style={{ color: theme.textMuted, fontSize: 12 }} numberOfLines={1}>
                  {m.titleEn}
                </Text>
              )}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={20} color={theme.textMuted} />
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={() => setRoutine(allInRoutine ? routine.filter((x) => !ids.includes(x)) : [...routine, ...ids.filter((x) => !routine.includes(x))])}
        style={{ alignSelf: 'center', marginTop: 18, padding: 8 }}
        accessibilityRole="button"
      >
        <Text style={{ color: theme.accent, fontSize: 15 }}>{allInRoutine ? tr('Remove these from my daily routine') : tr('＋ Add all to my daily routine')}</Text>
      </Pressable>
    </ScrollView>
  );
}
