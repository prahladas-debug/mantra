import { Ionicons } from '@expo/vector-icons';
import { Link, Redirect, router, type Href } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TodayCard } from '../../components/PanchangaCard';
import { RoutineCard } from '../../components/RoutineCard';
import { getMantraInfo, scriptFor } from '../../data';
import { COLLECTIONS } from '../../data/collections';
import { scriptFont } from '../../lib/fonts';
import { appTitle } from '../../lib/labels';
import { useSettings } from '../../lib/settings';
import { SCRIPTS, translitTitle } from '../../lib/transliterate';

/** Reading-script chooser behind the header button. */
function ScriptSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { theme, settings, update } = useSettings();
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: '#0006' }} onPress={onClose} accessibilityLabel="Close" />
      <View style={{ backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingBottom: insets.bottom + 20, paddingTop: 8 }}>
        <Text style={{ color: theme.text, fontSize: 19, fontWeight: '700', margin: 16, marginBottom: 8 }}>Reading script</Text>
        {SCRIPTS.map((sc) => {
          const active = settings.script === sc.id;
          return (
            <Pressable
              key={sc.id}
              onPress={() => {
                update({ script: sc.id });
                onClose();
              }}
              accessibilityRole="radio"
              accessibilityState={{ selected: active }}
              style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, paddingHorizontal: 16, opacity: pressed ? 0.6 : 1 })}
            >
              <Text style={{ flex: 1, color: active ? theme.accent : theme.text, fontSize: 18, fontFamily: scriptFont(sc.id, settings.bookFonts) }}>{sc.native}</Text>
              <Text style={{ color: theme.textMuted, fontSize: 14, marginRight: 10 }}>{sc.en}</Text>
              <Ionicons name={active ? 'radio-button-on' : 'radio-button-off'} size={20} color={active ? theme.accent : theme.textMuted} />
            </Pressable>
          );
        })}
      </View>
    </Modal>
  );
}

/** Home: today (panchanga, festival and its text), today's routine, continue reading, collections. */
export default function Home() {
  const { theme, settings, recent, positions, ready } = useSettings();
  const insets = useSafeAreaInsets();
  const [scriptSheet, setScriptSheet] = useState(false);
  const font = scriptFont(settings.script, settings.bookFonts);
  const script = SCRIPTS.find((x) => x.id === settings.script) ?? SCRIPTS[0];
  const recentMantras = recent.map((r) => getMantraInfo(r.id)).filter((m) => !!m).slice(0, 5);

  // First launch: choose language, tradition and place.
  if (!ready) return <View style={{ flex: 1, backgroundColor: theme.bg }} />;
  if (!settings.onboarded) return <Redirect href="/welcome" />;

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: insets.top + 14, paddingBottom: 32 }}>
      <View style={s.header}>
        <Text style={{ flex: 1, color: theme.accent, fontSize: 28, fontFamily: font, fontWeight: font ? undefined : '700' }} numberOfLines={1}>
          {appTitle(settings.script)}
        </Text>
        <Pressable
          onPress={() => setScriptSheet(true)}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={`Reading script: ${script.en}. Change`}
          style={({ pressed }) => [s.scriptBtn, { borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 }]}
        >
          <Text style={{ color: theme.text, fontSize: 15, fontFamily: scriptFont(script.id, settings.bookFonts) }}>{script.native}</Text>
          <Ionicons name="chevron-down" size={14} color={theme.textMuted} />
        </Pressable>
        <Link href="/settings" asChild>
          <Pressable hitSlop={12} accessibilityLabel="Settings">
            <Ionicons name="settings-outline" size={23} color={theme.textMuted} />
          </Pressable>
        </Link>
      </View>

      <Pressable onPress={() => router.push('/search')} style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]} accessibilityRole="search">
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <Text style={{ color: theme.textMuted, fontSize: 16 }}>Search texts, names, verses</Text>
      </Pressable>

      <TodayCard />
      <RoutineCard compact />

      {recentMantras.length > 0 && (
        <>
          <Text style={[s.heading, { color: theme.text }]}>Continue reading</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
            {recentMantras.map((m) => (
              <Pressable
                key={m.id}
                onPress={() => router.push(`/mantra/${m.id}` as Href)}
                style={({ pressed }) => [s.cover, { backgroundColor: theme.page, borderColor: theme.pageEdge, opacity: pressed ? 0.75 : 1 }]}
              >
                <Text numberOfLines={2} style={{ color: theme.accent, fontSize: 16, lineHeight: 26, textAlign: 'center', fontFamily: scriptFont(scriptFor(m, settings.script), settings.bookFonts) }}>
                  {translitTitle(m.title, settings.script)}
                </Text>
                <Text numberOfLines={2} style={{ color: theme.textMuted, fontSize: 12, textAlign: 'center', marginTop: 4 }}>
                  {m.titleEn}
                </Text>
                {positions[m.id] && <Text style={{ color: theme.accent, fontSize: 12, marginTop: 6, fontWeight: '600' }}>Resume ›</Text>}
              </Pressable>
            ))}
          </ScrollView>
        </>
      )}

      <Text style={[s.heading, { color: theme.text }]}>Collections</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
        {COLLECTIONS.map((c) => (
          <Pressable
            key={c.id}
            onPress={() => router.push(`/collection/${c.id}` as Href)}
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

      <ScriptSheet visible={scriptSheet} onClose={() => setScriptSheet(false)} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 },
  scriptBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, borderWidth: 1 },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 14, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 12, borderWidth: 1 },
  heading: { fontSize: 18, fontWeight: '700', marginHorizontal: 16, marginTop: 24, marginBottom: 10 },
  cover: { width: 124, minHeight: 120, padding: 12, borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  collection: { width: 150, minHeight: 84, padding: 12, borderRadius: 12, borderWidth: 1, justifyContent: 'center' },
});
