import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Animated, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { getMantraInfo, scriptFor, type Mantra } from '../data';
import { scriptFont } from '../lib/fonts';
import { useI18n } from '../lib/i18n';
import { useReduceMotion } from '../lib/motion';
import { useRoutineDay, useSettings } from '../lib/settings';
import { nameOf } from '../lib/transliterate';
import { collectionById } from '../data/collections';
import { useAudience } from '../lib/useAudience';
import { useShowEnglish } from './useGloss';

/** The tick box icon; when it becomes ticked it settles in with a brief, gentle scale and fade. */
function TickIcon({ ok }: { ok: boolean }) {
  const { theme } = useSettings();
  const reduce = useReduceMotion();
  const [anim] = useState(() => new Animated.Value(1));
  const was = useRef(ok);
  useEffect(() => {
    if (ok && !was.current && !reduce) {
      anim.setValue(0);
      Animated.timing(anim, { toValue: 1, duration: 300, useNativeDriver: Platform.OS !== 'web' }).start();
    }
    was.current = ok;
  }, [ok, reduce, anim]);
  return (
    <Animated.View style={{ opacity: anim.interpolate({ inputRange: [0, 1], outputRange: [0.4, 1] }), transform: [{ scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] }) }] }}>
      <MaterialCommunityIcons name={ok ? 'check-circle' : 'circle-outline'} size={26} color={ok ? theme.success : theme.textMuted} />
    </Animated.View>
  );
}

/**
 * Today's routine as a checklist (resets at sunrise at your place). Compact on Home:
 * a progress line and the next text; full in My practice: every text with a tick box.
 */
export function RoutineCard({ compact }: { compact?: boolean }) {
  const { theme, settings, routine, routineDone, setRoutineDone } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const day = useRoutineDay(settings.city);
  const done = routineDone[day] ?? [];
  const items = routine.map((id) => getMantraInfo(id)).filter((m) => !!m);
  // A Tamil-language title keeps the Tamil font whatever the reading script.
  const fontOf = (m: Mantra) => scriptFont(scriptFor(m, settings.script), settings.bookFonts);
  const finished = items.filter((m) => done.includes(m.id)).length;

  if (!items.length && !compact) return <RoutineStarters />;
  if (!items.length) {
    return (
      <Pressable
        onPress={() => router.push('/routine')}
        style={({ pressed }) => [s.card, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1, flexDirection: 'row', alignItems: 'center', gap: 10 }]}
        accessibilityRole="button"
      >
        <MaterialCommunityIcons name="format-list-bulleted" size={26} color={theme.gold} />
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600' }}>{tr('Set up your daily routine')}</Text>
          <Text style={{ color: theme.textMuted, fontSize: 14 }}>{tr('Pick the texts you recite each day; tick them off as you go.')}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={22} color={theme.textMuted} />
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
          <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', letterSpacing: 0.8, flex: 1 }}>
            {tr('Today’s routine · {done}/{total}', { done: finished, total: items.length }).toUpperCase()}
          </Text>
          {finished === items.length && <MaterialCommunityIcons name="check-circle" size={22} color={theme.success} />}
        </View>
        <View style={[s.bar, { backgroundColor: theme.accentSoft }]}>
          <View style={{ width: `${(finished / items.length) * 100}%`, height: '100%', backgroundColor: theme.accent }} />
        </View>
        <Text style={{ color: next ? theme.text : theme.accent, fontSize: 16, marginTop: 6, fontFamily: next ? fontOf(next) : undefined }} numberOfLines={1}>
          {next ? `${nameOf(next, settings.script)}  ›` : tr('All done for today 🙏')}
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
              onPress={() => {
                if (!ok && Platform.OS !== 'web') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                setRoutineDone(day, m.id, !ok);
              }}
              hitSlop={10}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: ok }}
              accessibilityLabel={tr('{title} done today', { title: nameOf(m, settings.script) })}
            >
              <TickIcon ok={ok} />
            </Pressable>
            <Pressable onPress={() => router.push(`/mantra/${m.id}` as Href)} style={{ flex: 1 }} accessibilityRole="link">
              <Text style={{ color: ok ? theme.textMuted : theme.text, fontSize: 18, fontFamily: fontOf(m), textDecorationLine: ok ? 'line-through' : 'none' }} numberOfLines={1}>
                {nameOf(m, settings.script)}
              </Text>
              {showEn && (
                <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={1}>
                  {m.titleEn}
                </Text>
              )}
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  card: { marginHorizontal: 16, marginTop: 12, padding: 14, borderRadius: 16, borderWidth: 1 },
  bar: { height: 5, borderRadius: 3, overflow: 'hidden', marginTop: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10 },
});

/**
 * My practice with no routine yet: two or three ready-made sets the reader can take with one tap
 * (the morning prayers, a Madhva reader's daily stotras, Hanuman's), or choose texts one by one.
 */
function RoutineStarters() {
  const { theme, settings, setRoutine } = useSettings();
  const { tr } = useI18n();
  const audience = useAudience();
  const font = scriptFont(settings.script, settings.bookFonts);
  const ids = ['morning', settings.variants.tradition === 'madhva' ? 'madhva-daily' : audience === 'north' || audience === 'west' ? 'hanuman' : 'monday-shiva', 'ekadashi'];
  const sets = ids.map(collectionById).filter((c) => !!c);
  return (
    <View style={[s.card, { backgroundColor: theme.card, borderColor: theme.cardBorder, gap: 10 }]}>
      <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600' }}>{tr('Set up your daily routine')}</Text>
      <Text style={{ color: theme.textMuted, fontSize: 14 }}>{tr('Start with a ready-made set, or pick the texts yourself.')}</Text>
      {sets.map((c) => {
        const texts = c.items.map(getMantraInfo).filter((m) => !!m);
        return (
          <View key={c.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8, borderTopWidth: StyleSheet.hairlineWidth, borderColor: theme.cardBorder }}>
            <Pressable onPress={() => router.push(`/collection/${c.id}` as Href)} style={{ flex: 1 }} accessibilityRole="link">
              <Text style={{ color: theme.text, fontSize: 16, fontFamily: font }} numberOfLines={1}>{nameOf(c, settings.script)}</Text>
              <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={1}>{tr('{n} texts', { n: texts.length })}</Text>
            </Pressable>
            <Pressable
              onPress={() => setRoutine(texts.map((m) => m.id))}
              accessibilityRole="button"
              accessibilityLabel={tr('Use as my daily routine')}
              style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 16, backgroundColor: theme.accentSoft, opacity: pressed ? 0.7 : 1 })}
            >
              <MaterialCommunityIcons name="plus" size={16} color={theme.accent} />
              <Text style={{ color: theme.accent, fontSize: 14, fontWeight: '600' }}>{tr('Use')}</Text>
            </Pressable>
          </View>
        );
      })}
      <Pressable onPress={() => router.push('/routine')} style={{ flexDirection: 'row', alignItems: 'center', gap: 6, paddingTop: 4 }} accessibilityRole="link">
        <MaterialCommunityIcons name="format-list-checks" size={18} color={theme.accent} />
        <Text style={{ color: theme.accent, fontSize: 15 }}>{tr('Choose texts myself')}</Text>
      </Pressable>
    </View>
  );
}
