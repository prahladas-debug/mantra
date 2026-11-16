import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Redirect, router, type Href } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TodayCard } from '../../components/PanchangaCard';
import { RoutineCard } from '../../components/RoutineCard';
import { BookCover, CategoryTile, DeityMedallion, QuickTile, ShelfHeading, greatWorks } from '../../components/Shelf';
import { getMantraInfo, scriptFor } from '../../data';
import { DEITIES } from '../../lib/deities';
import { scriptFont } from '../../lib/fonts';
import { T, useI18n } from '../../lib/i18n';
import { APP_MOTTO, appTitle } from '../../lib/labels';
import { useSettings } from '../../lib/settings';
import { SCRIPTS, translit, translitTitle } from '../../lib/transliterate';

/** Reading-script chooser behind the header button. */
function ScriptSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { theme, settings, update } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: '#0006' }} onPress={onClose} accessibilityLabel={tr('Close')} />
      <View style={{ backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingBottom: insets.bottom + 20, paddingTop: 8 }}>
        <Text style={{ color: theme.text, fontSize: 19, fontWeight: '700', margin: 16, marginBottom: 8 }}>{tr('Reading script')}</Text>
        {SCRIPTS.map((sc) => {
          const active = settings.script === sc.id;
          return (
            <Pressable
              key={sc.id}
              onPress={() => {
                update({ script: sc.id });
                onClose();
              }}
              accessibilityRole="radio"
              accessibilityState={{ selected: active }}
              style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, paddingHorizontal: 16, opacity: pressed ? 0.6 : 1 })}
            >
              <Text style={{ flex: 1, color: active ? theme.accent : theme.text, fontSize: 18, fontFamily: scriptFont(sc.id, settings.bookFonts) }}>{sc.native}</Text>
              <Text style={{ color: theme.textMuted, fontSize: 14, marginRight: 10 }}>{sc.en}</Text>
              <MaterialCommunityIcons name={active ? 'radiobox-marked' : 'radiobox-blank'} size={20} color={active ? theme.accent : theme.textMuted} />
            </Pressable>
          );
        })}
      </View>
    </Modal>
  );
}

const EVERY_DAY: { icon: keyof typeof MaterialCommunityIcons.glyphMap; label: string; href: string }[] = [
  { icon: 'weather-sunset-up', label: T('Morning prayers'), href: '/collection/morning' },
  { icon: 'water-outline', label: T('Bath (snana)'), href: '/mantra/snana-vidhi' },
  { icon: 'hands-pray', label: T('Sandhyavandane'), href: '/category/sandhya' },
  { icon: 'oil-lamp', label: T('Daily puja'), href: '/mantra/nitya-puja' },
  { icon: 'rice', label: T('Meal prayers'), href: '/mantra/bhojana-mantras' },
  { icon: 'dots-circle', label: T('Japa counter'), href: '/japa' },
];

/** Home: today, where you left off, the great works as book covers, everyday shortcuts and songs. */
export default function Home() {
  const { theme, settings, recent, positions, routine, ready } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [scriptSheet, setScriptSheet] = useState(false);
  const font = scriptFont(settings.script, settings.bookFonts);
  const script = SCRIPTS.find((x) => x.id === settings.script) ?? SCRIPTS[0];
  const last = recent.map((r) => getMantraInfo(r.id)).find((m) => !!m);
  // About three and a half small covers across the screen, so the row reads as a shelf to swipe.
  const coverW = Math.max(88, Math.min(112, Math.floor((width - 32 - 30) / 3.4)));

  // First launch: choose language, tradition and place.
  if (!ready) return <View style={{ flex: 1, backgroundColor: theme.bg }} />;
  if (!settings.onboarded) return <Redirect href="/welcome" />;

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingTop: insets.top + 14, paddingBottom: 32 }}>
      <View style={s.header}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.accent, fontSize: 28, fontFamily: font, fontWeight: font ? undefined : '700' }} numberOfLines={1}>
            {appTitle(settings.script)}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 13, lineHeight: 20, fontFamily: font }} numberOfLines={1}>
            {translit(APP_MOTTO, settings.script)}
          </Text>
        </View>
        <Pressable
          onPress={() => setScriptSheet(true)}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={tr('Reading script: {script}. Change', { script: script.en })}
          style={({ pressed }) => [s.scriptBtn, { borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1 }]}
        >
          <Text style={{ color: theme.text, fontSize: 15, fontFamily: scriptFont(script.id, settings.bookFonts) }}>{script.native}</Text>
          <MaterialCommunityIcons name="chevron-down" size={16} color={theme.textMuted} />
        </Pressable>
        <Link href="/settings" asChild>
          <Pressable hitSlop={12} accessibilityLabel={tr('Settings')}>
            <MaterialCommunityIcons name="cog-outline" size={25} color={theme.accent} />
          </Pressable>
        </Link>
      </View>

      <Pressable onPress={() => router.push('/search')} style={[s.search, { backgroundColor: theme.card, borderColor: theme.cardBorder }]} accessibilityRole="search">
        <MaterialCommunityIcons name="magnify" size={20} color={theme.accent} />
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
          <MaterialCommunityIcons name="bookmark" size={20} color={theme.gold} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 0.8 }}>{positions[last.id] ? tr('Continue reading').toUpperCase() : tr('Last opened').toUpperCase()}</Text>
            <Text style={{ color: theme.text, fontSize: 16, lineHeight: 25, fontFamily: scriptFont(scriptFor(last, settings.script), settings.bookFonts) }} numberOfLines={1}>
              {translitTitle(last.title, settings.script)}
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.accent} />
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

      <ShelfHeading title={T('By deity')} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12, gap: 2 }}>
        {DEITIES.map((d) => (
          <DeityMedallion key={d.id} deity={d} />
        ))}
      </ScrollView>

      <ShelfHeading title={T('Devotional songs')} action={T('Whole library ›')} onAction={() => router.push('/library')} />
      <View style={s.grid}>
        <CategoryTile id="dasara-pada" />
        <CategoryTile id="kirtana" />
      </View>

      <ScriptSheet visible={scriptSheet} onClose={() => setScriptSheet(false)} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 },
  scriptBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, borderWidth: 1 },
  search: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 14, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 12, borderWidth: 1 },
  resume: { flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginTop: 12, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 14 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 10, marginHorizontal: 16 },
});
