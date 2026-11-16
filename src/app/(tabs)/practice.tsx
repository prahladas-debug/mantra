import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PlanCard } from '../../components/PlanCard';
import { RoutineCard } from '../../components/RoutineCard';
import { getMantraInfo, scriptFor } from '../../data';
import { scriptFont } from '../../lib/fonts';
import { T, useI18n } from '../../lib/i18n';
import { planStatus } from '../../lib/plans';
import { useSettings } from '../../lib/settings';
import { translitTitle } from '../../lib/transliterate';

const TOOLS: { icon: keyof typeof MaterialCommunityIcons.glyphMap; label: string; href: string }[] = [
  { icon: 'dots-circle', label: T('Japa counter'), href: '/japa' },
  { icon: 'bookmark-outline', label: T('Bookmarks'), href: '/bookmarks' },
  { icon: 'calendar-month-outline', label: T('Festival calendar'), href: '/calendar' },
  { icon: 'magnify', label: T('Find a festival date'), href: '/festival-search' },
];

function Heading({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  const { theme } = useSettings();
  const { tr } = useI18n();
  return (
    <View style={s.heading}>
      <MaterialCommunityIcons name="spa-outline" size={17} color={theme.gold} style={{ marginRight: 7 }} />
      <Text style={{ color: theme.text, fontSize: 15, fontWeight: '700', flex: 1 }} accessibilityRole="header">{tr(title)}</Text>
      {action && (
        <Pressable onPress={onAction} hitSlop={10} accessibilityRole="button">
          <Text style={{ color: theme.accent, fontSize: 15 }}>{tr(action)}</Text>
        </Pressable>
      )}
    </View>
  );
}

/** Daily routine, parayana plans, tools, favourites and recently opened texts. */
export default function Practice() {
  const { theme, settings, plans, favorites, recent } = useSettings();
  const { tr } = useI18n();
  const active = plans.filter((p) => !planStatus(p).finished);
  const favs = favorites.map(getMantraInfo).filter((m) => !!m);
  const recents = recent.map((r) => getMantraInfo(r.id)).filter((m) => !!m).slice(0, 8);

  const list = (items: NonNullable<ReturnType<typeof getMantraInfo>>[]) => (
    <View style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
      {items.map((m, i) => (
        <Pressable
          key={m.id}
          onPress={() => router.push(`/mantra/${m.id}` as Href)}
          style={({ pressed }) => [s.row, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.text, fontSize: 17, fontFamily: scriptFont(scriptFor(m, settings.script), settings.bookFonts) }} numberOfLines={1}>
              {translitTitle(m.title, settings.script)}
            </Text>
            <Text style={{ color: theme.textMuted, fontSize: 12 }} numberOfLines={1}>
              {m.titleEn}
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.textMuted} />
        </Pressable>
      ))}
    </View>
  );

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }}>
      <Heading title={T('Daily routine')} action={T('Edit')} onAction={() => router.push('/routine')} />
      <RoutineCard />

      <Heading title={T('Parayana')} action={T('＋ New')} onAction={() => router.push('/parayana-new')} />
      {active.length === 0 ? (
        <Pressable onPress={() => router.push('/parayana')} style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder, padding: 14 }]}>
          <Text style={{ color: theme.textMuted, fontSize: 14, lineHeight: 20 }}>
            {tr('Plan a parayana — the Sundarakanda in 7 days, the Gita in 18, Lalitha Sahasranama for 40 days — with daily reminders.')}
          </Text>
        </Pressable>
      ) : (
        <>
          <View style={{ height: 10 }} />
          {active.map((p) => <PlanCard key={p.id} plan={p} compact />)}
          {/* The full cards (daily reminder, remove a plan, finished plans) are on the Parayana screen. */}
          <Pressable onPress={() => router.push('/parayana')} hitSlop={8} accessibilityRole="link" style={{ alignSelf: 'flex-start', marginHorizontal: 16 }}>
            <Text style={{ color: theme.accent, fontSize: 15 }}>{tr('Reminders and all plans ›')}</Text>
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
            <MaterialCommunityIcons name="chevron-right" size={20} color={theme.textMuted} />
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
