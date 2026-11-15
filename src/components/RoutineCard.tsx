import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { getMantraInfo, scriptFor, type Mantra } from '../data';
import { scriptFont } from '../lib/fonts';
import { useRoutineDay, useSettings } from '../lib/settings';
import { translitTitle } from '../lib/transliterate';

/**
 * Today's routine as a checklist (resets at sunrise at your place). Compact on Home:
 * a progress line and the next text; full in My practice: every text with a tick box.
 */
export function RoutineCard({ compact }: { compact?: boolean }) {
  const { theme, settings, routine, routineDone, setRoutineDone } = useSettings();
  const day = useRoutineDay(settings.city);
  const done = routineDone[day] ?? [];
  const items = routine.map((id) => getMantraInfo(id)).filter((m) => !!m);
  // A Tamil-language title keeps the Tamil font whatever the reading script.
  const fontOf = (m: Mantra) => scriptFont(scriptFor(m, settings.script), settings.bookFonts);
  const finished = items.filter((m) => done.includes(m.id)).length;

  if (!items.length) {
    return (
      <Pressable
        onPress={() => router.push('/routine')}
        style={({ pressed }) => [s.card, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1, flexDirection: 'row', alignItems: 'center', gap: 10 }]}
        accessibilityRole="button"
      >
        <Ionicons name="list-outline" size={22} color={theme.accent} />
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600' }}>Set up your daily routine</Text>
          <Text style={{ color: theme.textMuted, fontSize: 13 }}>Pick the texts you recite each day; tick them off as you go.</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
      </Pressable>
    );
  }

  const next = items.find((m) => !done.includes(m.id));
  if (compact) {
    return (
      <Pressable
        onPress={() => router.push((next ? `/mantra/${next.id}` : '/practice') as Href)}
        style={({ pressed }) => [s.card, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1 }]}
        accessibilityRole="button"
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8, flex: 1 }}>
            TODAY’S ROUTINE · {finished}/{items.length}
          </Text>
          {finished === items.length && <Ionicons name="checkmark-circle" size={18} color={theme.accent} />}
        </View>
        <View style={[s.bar, { backgroundColor: theme.accentSoft }]}>
          <View style={{ width: `${(finished / items.length) * 100}%`, height: '100%', backgroundColor: theme.accent }} />
        </View>
        <Text style={{ color: next ? theme.text : theme.accent, fontSize: 16, marginTop: 6, fontFamily: next ? fontOf(next) : undefined }} numberOfLines={1}>
          {next ? `${translitTitle(next.title, settings.script)}  ›` : 'All done for today 🙏'}
        </Text>
      </Pressable>
    );
  }

  return (
    <View style={[s.card, { backgroundColor: theme.card, borderColor: theme.cardBorder, paddingVertical: 4 }]}>
      {items.map((m, i) => {
        const ok = done.includes(m.id);
        return (
          <View key={m.id} style={[s.row, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder }]}>
            <Pressable
              onPress={() => setRoutineDone(day, m.id, !ok)}
              hitSlop={10}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: ok }}
              accessibilityLabel={`${m.titleEn} done today`}
            >
              <Ionicons name={ok ? 'checkmark-circle' : 'ellipse-outline'} size={26} color={ok ? theme.accent : theme.textMuted} />
            </Pressable>
            <Pressable onPress={() => router.push(`/mantra/${m.id}` as Href)} style={{ flex: 1 }} accessibilityRole="link">
              <Text style={{ color: ok ? theme.textMuted : theme.text, fontSize: 17, fontFamily: fontOf(m), textDecorationLine: ok ? 'line-through' : 'none' }} numberOfLines={1}>
                {translitTitle(m.title, settings.script)}
              </Text>
              <Text style={{ color: theme.textMuted, fontSize: 12 }} numberOfLines={1}>
                {m.titleEn}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  card: { marginHorizontal: 16, marginTop: 12, padding: 14, borderRadius: 14, borderWidth: 1 },
  bar: { height: 5, borderRadius: 3, overflow: 'hidden', marginTop: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10 },
});
