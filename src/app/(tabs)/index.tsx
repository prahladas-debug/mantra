import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Redirect, router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TodayCard } from '../../components/PanchangaCard';
import { RoutineCard } from '../../components/RoutineCard';
import { BookCover, QuickTile, ShelfHeading, greatWorks } from '../../components/Shelf';
import { getMantraInfo, scriptFor } from '../../data';
import { scriptFont } from '../../lib/fonts';
import { T, useI18n } from '../../lib/i18n';
import { APP_MOTTO, appTitle } from '../../lib/labels';
import { useSettings } from '../../lib/settings';
import { translit, nameOf } from '../../lib/transliterate';


const EVERY_DAY: { icon: keyof typeof MaterialCommunityIcons.glyphMap; label: string; href: string }[] = [
  { icon: 'weather-sunset-up', label: T('Morning prayers'), href: '/collection/morning' },
  { icon: 'water-outline', label: T('Bath (snana)'), href: '/mantra/snana-vidhi' },
  { icon: 'hands-pray', label: T('Sandhyavandane'), href: '/category/sandhya' },
  { icon: 'oil-lamp', label: T('Daily puja'), href: '/mantra/nitya-puja' },
  { icon: 'rice', label: T('Meal prayers'), href: '/mantra/bhojana-mantras' },
  { icon: 'dots-circle', label: T('Japa counter'), href: '/japa' },
];

/** Home, kept quiet: today, your routine and where you left off, the great works, everyday shortcuts. */
export default function Home() {
  const { theme, settings, recent, positions, routine, ready } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const font = scriptFont(settings.script, settings.bookFonts);
  const last = recent.map((r) => getMantraInfo(r.id)).find((m) => !!m);
  // About three and a half small covers across the screen, so the row reads as a shelf to swipe.
  const coverW = Math.max(88, Math.min(112, Math.floor((width - 32 - 30) / 3.4)));

  // First launch: choose language, tradition and place.
  if (!ready) return <View style={{ flex: 1, backgroundColor: theme.bg }} />;
  if (!settings.onboarded) return <Redirect href="/welcome" />;

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: insets.top + 18, paddingBottom: 40 }}>
      <View style={s.header}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.name === 'dark' ? theme.gold : theme.accent, fontSize: 28, fontFamily: font, fontWeight: font ? undefined : '700' }} numberOfLines={1}>
            {appTitle(settings.script)}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 14, lineHeight: 21, fontFamily: font }} numberOfLines={1}>
            {translit(APP_MOTTO, settings.script)}
          </Text>
        </View>
        <Link href="/settings" asChild>
          <Pressable hitSlop={12} accessibilityLabel={tr('Settings')}>
            <MaterialCommunityIcons name="cog-outline" size={26} color={theme.accent} />
          </Pressable>
        </Link>
      </View>

      <Pressable onPress={() => router.push('/search')} style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]} accessibilityRole="search">
        <MaterialCommunityIcons name="magnify" size={22} color={theme.accent} />
        <Text style={{ color: theme.textMuted, fontSize: 16 }}>{tr('Search texts, names, verses')}</Text>
      </Pressable>

      <TodayCard />
      {routine.length > 0 && <RoutineCard compact />}

      {last && (
        <Pressable
          onPress={() => router.push(`/mantra/${last.id}` as Href)}
          accessibilityRole="link"
          style={({ pressed }) => [s.resume, { backgroundColor: theme.accentSoft, opacity: pressed ? 0.7 : 1 }]}
        >
          <MaterialCommunityIcons name="bookmark" size={22} color={theme.gold} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', letterSpacing: 0.8 }}>{positions[last.id] ? tr('Continue reading').toUpperCase() : tr('Last opened').toUpperCase()}</Text>
            <Text style={{ color: theme.text, fontSize: 16, lineHeight: 25, fontFamily: scriptFont(scriptFor(last, settings.script), settings.bookFonts) }} numberOfLines={1}>
              {nameOf(last, settings.script)}
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={22} color={theme.accent} />
        </Pressable>
      )}

      <ShelfHeading title={T('Great works')} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 10, paddingBottom: 6 }}>
        {greatWorks(settings.variants.tradition).map((w) => (
          <BookCover key={w.category ?? w.textId} work={w} width={coverW} />
        ))}
      </ScrollView>

      <ShelfHeading title={T('Every day')} />
      <View style={s.grid}>
        {EVERY_DAY.map((t) => (
          <QuickTile key={t.href} {...t} />
        ))}
      </View>

    </ScrollView>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 },
  scriptBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, borderWidth: 1 },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 14, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 12, borderWidth: 1 },
  resume: { flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginTop: 12, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 10, marginHorizontal: 16 },
});
