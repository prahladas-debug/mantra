import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDeferredValue, useMemo, useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scriptFor, type Mantra } from '../../data';
import { scriptFont } from '../../lib/fonts';
import { useI18n } from '../../lib/i18n';
import { meaningsToShow } from '../../lib/meaning';
import { useSettings } from '../../lib/settings';
import { searchKey, translit, translitInline } from '../../lib/transliterate';
import type { Row } from './rows';

export interface FindHit {
  key: string;
  /** Found in the meaning rather than the verse itself. */
  inMeaning: boolean;
}

/** `text` with the first place `term` appears in it marked, when it appears as typed. */
export function Marked({ text, term, color, style }: { text: string; term: string | null; color: string; style?: object }) {
  const i = term ? text.toLowerCase().indexOf(term.toLowerCase()) : -1;
  if (!term || i < 0) return <Text style={style}>{text}</Text>;
  return (
    <Text style={style}>
      {text.slice(0, i)}
      <Text style={{ backgroundColor: color }}>{text.slice(i, i + term.length)}</Text>
      {text.slice(i + term.length)}
    </Text>
  );
}

/** Find inside the open text: its verses and their meanings, typed in any script. */
export function FindSheet({ visible, onClose, mantra, rows, onJump }: { visible: boolean; onClose: () => void; mantra: Mantra; rows: Row[]; onJump: (hit: FindHit, term: string) => void }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const q = useDeferredValue(query);
  const script = scriptFor(mantra, settings.script);

  // Each verse and its meaning reduced once to a loose key (any script, common spellings).
  const index = useMemo(
    () =>
      rows.flatMap((r) => {
        if (r.kind !== 'verse') return [];
        const meaning = meaningsToShow(r.verse.meaning, settings.meaningLang, settings.script)[0];
        const shownMeaning = meaning ? (meaning.lang === 'en' ? translitInline(meaning.text, settings.script) : meaning.text) : '';
        return [{ row: r, verseKey: searchKey(r.verse.text), meaningKey: shownMeaning ? searchKey(shownMeaning) : '', shown: translit(r.verse.text, script), meaning: shownMeaning }];
      }),
    [rows, script, settings.meaningLang, settings.script],
  );
  const hits = useMemo(() => {
    const k = searchKey(q);
    if (k.length < 2) return [];
    return index
      .filter((x) => x.verseKey.includes(k) || x.meaningKey.includes(k))
      .slice(0, 200)
      .map((x) => ({ ...x, inMeaning: !x.verseKey.includes(k) }));
  }, [index, q]);

  const close = () => {
    setQuery('');
    onClose();
  };
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={close}>
      <Pressable style={{ flex: 1, backgroundColor: '#0005' }} onPress={close} accessibilityLabel={tr('Close')} />
      <View style={{ height: '80%', backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18 }}>
        <View style={{ alignSelf: 'center', width: 40, height: 4, borderRadius: 2, marginTop: 8, backgroundColor: theme.cardBorder }} />
        <View style={[f.box, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
          <MaterialCommunityIcons name="magnify" size={22} color={theme.accent} />
          <TextInput
            autoFocus
            value={query}
            onChangeText={setQuery}
            placeholder={tr('Find in this text')}
            placeholderTextColor={theme.textMuted}
            style={{ flex: 1, paddingVertical: 11, fontSize: 17, color: theme.text }}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />
          <Pressable onPress={close} hitSlop={10} accessibilityRole="button">
            <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>{tr('Close')}</Text>
          </Pressable>
        </View>
        <FlatList
          data={hits}
          keyExtractor={(h) => h.row.key}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 20 }}
          ListHeaderComponent={
            q.trim().length >= 2 ? (
              <Text style={{ color: theme.textMuted, fontSize: 13, marginBottom: 8 }}>
                {hits.length === 1 ? tr('1 verse') : tr('{n} verses', { n: hits.length >= 200 ? '200+' : hits.length })}
              </Text>
            ) : (
              <Text style={{ color: theme.textMuted, fontSize: 14, lineHeight: 21 }}>{tr('Type a word in any script or in English, from a verse or its meaning.')}</Text>
            )
          }
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                onJump({ key: item.row.key, inMeaning: item.inMeaning }, query.trim());
                setQuery('');
              }}
              style={({ pressed }) => [f.hit, { borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.7 : 1 }]}
            >
              {item.row.kind === 'verse' && item.row.verse.n !== undefined && (
                <Text style={{ color: theme.accent, fontSize: 13, fontWeight: '700', marginBottom: 2 }}>{tr('verse {n}', { n: item.row.verse.n })}</Text>
              )}
              {item.inMeaning ? (
                <Marked text={item.meaning} term={query.trim()} color={theme.accentSoft} style={{ color: theme.text, fontSize: 15, lineHeight: 22 }} />
              ) : (
                <Marked text={item.shown.split('\n').slice(0, 2).join('\n')} term={query.trim()} color={theme.accentSoft} style={{ color: theme.text, fontSize: 17, lineHeight: 28, fontFamily: scriptFont(script, settings.bookFonts) }} />
              )}
            </Pressable>
          )}
        />
      </View>
    </Modal>
  );
}

const f = StyleSheet.create({
  box: { flexDirection: 'row', alignItems: 'center', gap: 8, margin: 16, marginTop: 10, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1 },
  hit: { marginBottom: 8, padding: 12, borderRadius: 12, borderWidth: 1 },
});
