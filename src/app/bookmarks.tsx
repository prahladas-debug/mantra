import { Ionicons } from '@expo/vector-icons';
import { router, Stack, type Href } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { getMantraInfo, scriptFor, type Mantra } from '../data';
import { isBookUnit, loadBookUnit, peekBookUnit } from '../lib/books';
import { scriptFont } from '../lib/fonts';
import { useSettings } from '../lib/settings';
import { translit, translitTitle } from '../lib/transliterate';

export default function Bookmarks() {
  const { theme, settings, bookmarks, toggleBookmark } = useSettings();
  // Sargas of the long works are read from their assets for the verse text (a few, then cached).
  const [units, setUnits] = useState<Record<string, Mantra>>({});
  useEffect(() => {
    let live = true;
    for (const id of new Set(bookmarks.map((b) => b.mantraId))) {
      if (!isBookUnit(id) || peekBookUnit(id)) continue;
      loadBookUnit(id).then(
        (m) => live && setUnits((u) => ({ ...u, [id]: m })),
        () => {},
      );
    }
    return () => {
      live = false;
    };
  }, [bookmarks]);
  const items = bookmarks
    .map((b) => {
      // Titles and verse text only: no need to merge every meaning of each bookmarked text.
      const m = isBookUnit(b.mantraId) ? units[b.mantraId] ?? peekBookUnit(b.mantraId) : getMantraInfo(b.mantraId);
      const [si, vi] = b.key.replace(/^v/, '').split('-').map(Number);
      const v = m?.sections[si]?.verses[vi];
      return m && v ? { b, m, v, si, vi } : null;
    })
    .filter((x) => !!x);
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <Stack.Screen options={{ title: 'Bookmarks' }} />
      <FlatList
        data={items}
        keyExtractor={(x) => x.b.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        ListEmptyComponent={
          <Text style={{ color: theme.textMuted, lineHeight: 22 }}>
            Tap the bookmark icon under any verse to keep it here, e.g. a shloka you are learning by heart.
          </Text>
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/mantra/${item.m.id}?si=${item.si}&vi=${item.vi}` as Href)}
            style={{ marginBottom: 10, padding: 14, borderRadius: 14, borderWidth: 1, backgroundColor: theme.card, borderColor: theme.cardBorder }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: theme.accent, fontSize: 13, fontWeight: '600', flex: 1 }}>
                {translitTitle(item.m.title, settings.script)} · {item.m.titleEn}
                {item.v.n !== undefined ? ` · ${item.v.n}` : ''}
              </Text>
              <Pressable hitSlop={10} onPress={() => toggleBookmark(item.m.id, item.b.key)} accessibilityLabel="Remove bookmark">
                <Ionicons name="close" size={18} color={theme.textMuted} />
              </Pressable>
            </View>
            <Text numberOfLines={3} style={{ color: theme.text, fontSize: 18, lineHeight: 30, marginTop: 4, fontFamily: scriptFont(scriptFor(item.m, settings.script), settings.bookFonts) }}>
              {translit(item.v.text, settings.script)}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
