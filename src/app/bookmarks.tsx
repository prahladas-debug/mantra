import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, Stack, type Href } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { getMantraInfo, scriptFor, type Mantra } from '../data';
import { isBookUnit, loadBookUnit, peekBookUnit } from '../lib/books';
import { scriptFont } from '../lib/fonts';
import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { translit, nameOf } from '../lib/transliterate';
import { useShowEnglish } from '../components/useGloss';

export default function Bookmarks() {
  const { theme, settings, bookmarks, toggleBookmark } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  // Sargas of the long works are read from their assets for the verse text, and kept here: the
  // loader's cache holds only a few units, so one read earlier may be gone from it by now.
  const [units, setUnits] = useState<Record<string, Mantra>>(() => {
    const at: Record<string, Mantra> = {};
    for (const b of bookmarks) {
      const m = isBookUnit(b.mantraId) ? peekBookUnit(b.mantraId) : undefined;
      if (m) at[b.mantraId] = m;
    }
    return at;
  });
  // Units asked for already (removing a bookmark does not read the others again).
  const asked = useRef(new Set<string>());
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  useEffect(() => {
    for (const id of new Set(bookmarks.map((b) => b.mantraId))) {
      if (!isBookUnit(id) || asked.current.has(id)) continue;
      asked.current.add(id);
      loadBookUnit(id).then(
        (m) => mounted.current && setUnits((u) => (u[id] === m ? u : { ...u, [id]: m })),
        () => asked.current.delete(id),
      );
    }
  }, [bookmarks]);
  const items = bookmarks
    .map((b) => {
      // Titles and verse text only: no need to merge every meaning of each bookmarked text.
      const m = isBookUnit(b.mantraId) ? units[b.mantraId] ?? getMantraInfo(b.mantraId) : getMantraInfo(b.mantraId);
      const [si, vi] = b.key.replace(/^v/, '').split('-').map(Number);
      // A sarga still being read shows its title for a moment; its verse follows. A verse no
      // longer at that place (the text was revised) still lists the bookmark, so it can be removed.
      const v = m?.sections[si]?.verses[vi];
      return m ? { b, m, v, si, vi } : null;
    })
    .filter((x) => !!x);
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <Stack.Screen options={{ title: tr('Bookmarks') }} />
      <FlatList
        data={items}
        keyExtractor={(x) => x.b.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        ListEmptyComponent={
          <Text style={{ color: theme.textMuted, lineHeight: 22 }}>
            {tr('Tap the bookmark icon under any verse to keep it here, e.g. a shloka you are learning by heart.')}
          </Text>
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/mantra/${item.m.id}?si=${item.si}&vi=${item.vi}` as Href)}
            style={{ marginBottom: 10, padding: 14, borderRadius: 16, borderWidth: 1, backgroundColor: theme.card, borderColor: theme.cardBorder }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: theme.accent, fontSize: 13, fontWeight: '600', flex: 1 }}>
                {nameOf(item.m, settings.script)}{showEn ? ` · ${item.m.titleEn}` : ''}
                {item.v?.n !== undefined ? ` · ${item.v.n}` : ''}
              </Text>
              <Pressable hitSlop={10} onPress={() => toggleBookmark(item.m.id, item.b.key)} accessibilityLabel={tr('Remove bookmark')}>
                <MaterialCommunityIcons name="close" size={20} color={theme.accent} />
              </Pressable>
            </View>
            <Text numberOfLines={3} style={{ color: theme.text, fontSize: 18, lineHeight: 30, marginTop: 4, fontFamily: scriptFont(scriptFor(item.m, settings.script), settings.bookFonts) }}>
              {item.v ? translit(item.v.text, settings.script) : '…'}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
