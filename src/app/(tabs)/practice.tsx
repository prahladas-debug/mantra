import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PlanCard } from '../../components/PlanCard';
import { RoutineCard } from '../../components/RoutineCard';
import { getMantraInfo, scriptFor } from '../../data';
import { scriptFont } from '../../lib/fonts';
import { planStatus } from '../../lib/plans';
import { useSettings } from '../../lib/settings';
import { translitTitle } from '../../lib/transliterate';

const TOOLS: { icon: keyof typeof Ionicons.glyphMap; label: string; href: string }[] = [
  { icon: 'ellipse-outline', label: 'Japa counter', href: '/japa' },
  { icon: 'bookmark-outline', label: 'Bookmarks', href: '/bookmarks' },
  { icon: 'calendar-outline', label: 'Festival calendar', href: '/calendar' },
  { icon: 'search-outline', label: 'Find a festival date', href: '/festival-search' },
];

function Heading({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  const { theme } = useSettings();
  return (
    <View style={s.heading}>
      <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700', flex: 1 }}>{title}</Text>
      {action && (
        <Pressable onPress={onAction} hitSlop={10} accessibilityRole="button">
          <Text style={{ color: theme.accent, fontSize: 15 }}>{action}</Text>
        </Pressable>
      )}
    </View>
  );
}

/** Daily routine, parayana plans, tools, favourites and recently opened texts. */
export default function Practice() {
  const { theme, settings, plans, favorites, recent } = useSettings();
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
          <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
        </Pressable>
      ))}
    </View>
  );

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 32 }}>
      <Heading title="Daily routine" action="Edit" onAction={() => router.push('/routine')} />
      <RoutineCard />

      <Heading title="Parayana" action="＋ New" onAction={() => router.push('/parayana-new')} />
      {active.length === 0 ? (
        <Pressable onPress={() => router.push('/parayana')} style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder, padding: 14 }]}>
          <Text style={{ color: theme.textMuted, fontSize: 14, lineHeight: 20 }}>
            Plan a parayana — the Sundarakanda in 7 days, the Gita in 18, Lalitha Sahasranama for 40 days — with daily reminders.
          </Text>
        </Pressable>
      ) : (
        <>
          <View style={{ height: 10 }} />
          {active.map((p) => <PlanCard key={p.id} plan={p} compact />)}
          {/* The full cards (daily reminder, remove a plan, finished plans) are on the Parayana screen. */}
          <Pressable onPress={() => router.push('/parayana')} hitSlop={8} accessibilityRole="link" style={{ alignSelf: 'flex-start', marginHorizontal: 16 }}>
            <Text style={{ color: theme.accent, fontSize: 15 }}>Reminders and all plans ›</Text>
          </Pressable>
        </>
      )}

      <Heading title="Tools" />
      <View style={[s.list, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
        {TOOLS.map((t, i) => (
          <Pressable
            key={t.href}
            onPress={() => router.push(t.href as Href)}
            style={({ pressed }) => [s.row, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
          >
            <Ionicons name={t.icon} size={20} color={theme.accent} />
            <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>{t.label}</Text>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </Pressable>
        ))}
      </View>

      {favs.length > 0 && (
        <>
          <Heading title="Favourites" />
          {list(favs)}
        </>
      )}
      {recents.length > 0 && (
        <>
          <Heading title="Recently opened" />
          {list(recents)}
        </>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  heading: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 22, marginBottom: 2 },
  list: { marginHorizontal: 16, marginTop: 10, borderRadius: 14, borderWidth: 1, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, paddingHorizontal: 14 },
});
