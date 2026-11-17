import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useFocusEffect, type Href } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PlanCard } from '../../components/PlanCard';
import { RoutineCard } from '../../components/RoutineCard';
import { getMantraInfo, scriptFor } from '../../data';
import { headingFont, scriptFont } from '../../lib/fonts';
import { T, useI18n } from '../../lib/i18n';
import { loadJapaDays } from '../../lib/japa';
import { planStatus } from '../../lib/plans';
import { routineDay, useSettings } from '../../lib/settings';
import { datesEnding, isLit, streakLength } from '../../lib/streak';
import { nameOf } from '../../lib/transliterate';
import { useShowEnglish } from '../../components/useGloss';

const TOOLS: { icon: keyof typeof MaterialCommunityIcons.glyphMap; label: string; href: string }[] = [
  { icon: 'dots-circle', label: T('Japa counter'), href: '/japa' },
  { icon: 'bookmark-outline', label: T('Bookmarks'), href: '/bookmarks' },
  { icon: 'calendar-month-outline', label: T('Festival calendar'), href: '/calendar' },
  { icon: 'magnify', label: T('Find a festival date'), href: '/festival-search' },
];

function Heading({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  const { theme, settings } = useSettings();
  const { tr, lang } = useI18n();
  const hf = headingFont(lang, settings.bookFonts);
  return (
    <View style={s.heading}>
      <MaterialCommunityIcons name="spa-outline" size={18} color={theme.gold} style={{ marginRight: 8 }} />
      <Text style={{ color: theme.text, fontSize: 16, fontFamily: hf, fontWeight: hf ? undefined : '700', flex: 1 }} accessibilityRole="header">{tr(title)}</Text>
      {action && (
        <Pressable onPress={onAction} hitSlop={10} accessibilityRole="button">
          <Text style={{ color: theme.accent, fontSize: 16 }}>{tr(action)}</Text>
        </Pressable>
      )}
    </View>
  );
}

const LAMP_DAYS = 7;
const LOOKBACK = 60;

/** The last seven days as small lamps, and the forgiving streak. Shown only when switched on in Settings. */
function StreakCard() {
  const { theme, settings, routine, routineDone } = useSettings();
  const { tr, weekday } = useI18n();
  const [japa, setJapa] = useState<{ target: number | null; byDate: Record<string, number> }>({ target: 108, byDate: {} });
  useFocusEffect(useCallback(() => { loadJapaDays().then(setJapa); }, []));
  // Days run sunrise to sunrise for the routine, as on the routine card.
  const today = routineDay(settings.city);
  const { days, lit, streak } = useMemo(() => {
    const input = { routine, routineDone, japaByDate: japa.byDate, japaTarget: japa.target };
    const all = datesEnding(today, LOOKBACK);
    const flags = all.map((d) => isLit(input, d));
    return { days: all.slice(-LAMP_DAYS), lit: flags.slice(-LAMP_DAYS), streak: streakLength(flags) };
  }, [today, routine, routineDone, japa]);
  return (
    <View style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder, padding: 14 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 14 }} accessible accessibilityLabel={tr('Last seven days: {n} lit', { n: lit.filter(Boolean).length })}>
          {days.map((d, i) => {
            const [y, m, dd] = d.split('-').map(Number);
            const wd = weekday(new Date(y, m - 1, dd).getDay());
            return (
              <View key={d} style={{ alignItems: 'center', width: 34 }}>
                <MaterialCommunityIcons name="oil-lamp" size={24} color={lit[i] ? theme.gold : theme.textMuted} style={{ opacity: lit[i] ? 1 : 0.35 }} />
                <Text style={{ color: theme.textMuted, fontSize: 11, marginTop: 2 }}>{wd.slice(0, 1)}</Text>
              </View>
            );
          })}
        </View>
        <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600' }}>{streak === 1 ? tr('{n} day', { n: streak }) : tr('{n} days', { n: streak })}</Text>
      </View>
      <Text style={{ color: theme.textMuted, fontSize: 13, lineHeight: 18, marginTop: 8 }}>
        {tr('A lamp is lit when the routine is done or the japa target is met. One quiet day in seven does not break the streak.')}
      </Text>
    </View>
  );
}

/** Daily routine, parayana plans, tools, favourites and recently opened texts. */
export default function Practice() {
  const { theme, settings, plans, favorites, recent } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const active = plans.filter((p) => !planStatus(p).finished);
  const favs = favorites.map(getMantraInfo).filter((m) => !!m);
  const recents = recent.map((r) => getMantraInfo(r.id)).filter((m) => !!m).slice(0, 3);

  const list = (items: NonNullable<ReturnType<typeof getMantraInfo>>[]) => (
    <View style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
      {items.map((m, i) => (
        <Pressable
          key={m.id}
          onPress={() => router.push(`/mantra/${m.id}` as Href)}
          style={({ pressed }) => [s.row, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.text, fontSize: 18, fontFamily: scriptFont(scriptFor(m, settings.script), settings.bookFonts) }} numberOfLines={1}>
              {nameOf(m, settings.script)}
            </Text>
            {showEn && (
              <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={1}>
                {m.titleEn}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={22} color={theme.textMuted} />
        </Pressable>
      ))}
    </View>
  );

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }}>
      {settings.showStreaks && <StreakCard />}
      <Heading title={T('Daily routine')} action={T('Edit')} onAction={() => router.push('/routine')} />
      <RoutineCard />

      <Heading title={T('Parayana')} action={T('＋ New')} onAction={() => router.push('/parayana-new')} />
      {active.length === 0 ? (
        <Pressable onPress={() => router.push('/parayana')} style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder, padding: 14 }]}>
          <Text style={{ color: theme.textMuted, fontSize: 14, lineHeight: 20 }}>
            {tr('Read a great work over set days, with a daily reminder.')}
          </Text>
        </Pressable>
      ) : (
        <>
          <View style={{ height: 10 }} />
          {active.map((p) => <PlanCard key={p.id} plan={p} compact />)}
          {/* The full cards (daily reminder, remove a plan, finished plans) are on the Parayana screen. */}
          <Pressable onPress={() => router.push('/parayana')} hitSlop={8} accessibilityRole="link" style={{ alignSelf: 'flex-start', marginHorizontal: 16 }}>
            <Text style={{ color: theme.accent, fontSize: 16 }}>{tr('Reminders and all plans ›')}</Text>
          </Pressable>
        </>
      )}

      <Heading title={T('Tools')} />
      <View style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
        {TOOLS.map((t, i) => (
          <Pressable
            key={t.href}
            onPress={() => router.push(t.href as Href)}
            style={({ pressed }) => [s.row, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
          >
            <MaterialCommunityIcons name={t.icon} size={22} color={theme.gold} />
            <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>{tr(t.label)}</Text>
            <MaterialCommunityIcons name="chevron-right" size={22} color={theme.textMuted} />
          </Pressable>
        ))}
      </View>

      {favs.length > 0 && (
        <>
          <Heading title={T('Favourites')} />
          {list(favs)}
        </>
      )}
      {recents.length > 0 && (
        <>
          <Heading title={T('Recently opened')} />
          {list(recents)}
        </>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  heading: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 22, marginBottom: 2 },
  list: { marginHorizontal: 16, marginTop: 10, borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, paddingHorizontal: 14 },
});
