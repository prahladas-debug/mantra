import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { ALL_MANTRAS, getMantraInfo, scriptFor, search, type Mantra } from '../data';
import { scriptFont } from '../lib/fonts';
import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { nameOf } from '../lib/transliterate';
import { useShowEnglish } from '../components/useGloss';

const SUGGESTED = ['sandhya-vandane-rigveda', 'nitya-puja', 'vayu-stuti', 'vishnu-sahasranama', 'raghavendra-stotram', 'dvadasha-stotra-01', 'lalitha-sahasranama', 'hanuman-chalisa', 'aditya-hridayam', 'venkatesha-suprabhatam'];

/** Choose and order the texts of the daily routine. */
export default function RoutineEditor() {
  const { theme, settings, routine, setRoutine } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const [q, setQ] = useState('');
  const fontOf = (m: Mantra) => scriptFont(scriptFor(m, settings.script), settings.bookFonts);
  const chosen = routine.map(getMantraInfo).filter((m) => !!m);
  const pool = q.trim().length >= 2
    ? search(q).filter((r) => !r.verse).map((r) => r.mantra)
    : SUGGESTED.map(getMantraInfo).filter((m) => !!m).concat(ALL_MANTRAS.filter((m) => m.order === undefined && !SUGGESTED.includes(m.id)));
  const candidates = pool.filter((m) => !routine.includes(m.id));

  // Positions are those of the list shown (`chosen`): an id that is no longer in the library
  // is not shown, so counting in `routine` would move the wrong text. Saving drops such ids.
  const move = (i: number, d: -1 | 1) => {
    const j = i + d;
    const next = chosen.map((m) => m.id);
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    setRoutine(next);
  };

  return (
    <FlatList
      style={{ backgroundColor: theme.bg }}
      keyboardShouldPersistTaps="handled"
      ListHeaderComponent={
        <View>
          <Text style={{ color: theme.textMuted, fontSize: 14, margin: 16, marginBottom: 8, lineHeight: 20 }}>
            {tr('Your routine appears on Home and in My practice as a checklist. It starts fresh each day at sunrise.')}
          </Text>
          {chosen.length > 0 && (
            <View style={{ marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
              {chosen.map((m, i) => (
                <View key={m.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 8, padding: 10, borderTopWidth: i ? 1 : 0, borderColor: theme.cardBorder }}>
                  <Text style={{ color: theme.textMuted, width: 20, textAlign: 'right' }}>{i + 1}</Text>
                  <Text style={{ flex: 1, color: theme.text, fontSize: 16, fontFamily: fontOf(m) }} numberOfLines={1}>
                    {nameOf(m, settings.script)}
                  </Text>
                  <Pressable onPress={() => move(i, -1)} hitSlop={8} accessibilityLabel={tr('Move up')} disabled={i === 0}>
                    <MaterialCommunityIcons name="chevron-up" size={22} color={i === 0 ? theme.cardBorder : theme.textMuted} />
                  </Pressable>
                  <Pressable onPress={() => move(i, 1)} hitSlop={8} accessibilityLabel={tr('Move down')} disabled={i === chosen.length - 1}>
                    <MaterialCommunityIcons name="chevron-down" size={22} color={i === chosen.length - 1 ? theme.cardBorder : theme.textMuted} />
                  </Pressable>
                  <Pressable onPress={() => setRoutine(routine.filter((x) => x !== m.id))} hitSlop={8} accessibilityLabel={tr('Remove')}>
                    <MaterialCommunityIcons name="close-circle" size={22} color={theme.textMuted} />
                  </Pressable>
                </View>
              ))}
            </View>
          )}
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 16, marginBottom: 6, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
            <MaterialCommunityIcons name="magnify" size={22} color={theme.accent} />
            <TextInput
              value={q}
              onChangeText={setQ}
              placeholder={tr('Add a text — search or pick below')}
              placeholderTextColor={theme.textMuted}
              style={{ flex: 1, color: theme.text, fontSize: 16, paddingVertical: 11, paddingHorizontal: 8 }}
            />
          </View>
        </View>
      }
      data={candidates.slice(0, 80)}
      keyExtractor={(m) => m.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => setRoutine([...routine, item.id])}
          style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 11, paddingHorizontal: 16, opacity: pressed ? 0.6 : 1 })}
          accessibilityRole="button"
          accessibilityLabel={tr('Add {title}', { title: nameOf(item, settings.script) })}
        >
          <MaterialCommunityIcons name="plus-circle-outline" size={26} color={theme.accent} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.text, fontSize: 16, fontFamily: fontOf(item) }} numberOfLines={1}>
              {nameOf(item, settings.script)}
            </Text>
            {showEn && (
              <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={1}>
                {item.titleEn}
              </Text>
            )}
          </View>
        </Pressable>
      )}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}
