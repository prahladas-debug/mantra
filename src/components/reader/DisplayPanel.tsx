import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, StyleSheet, Switch, Text, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { T, useI18n } from '../../lib/i18n';
import { scriptFont } from '../../lib/fonts';
import { MEANING_PREFS } from '../../lib/meaning';
import { useSettings, type Settings } from '../../lib/settings';
import { THEMES } from '../../lib/theme';
import { SCRIPTS } from '../../lib/transliterate';
import { Segmented } from '../ui';

const THEME_CHOICES: { id: Settings['theme']; label: string }[] = [
  { id: 'light', label: T('Light') },
  { id: 'sepia', label: T('Sepia') },
  { id: 'dark', label: T('Dark') },
  { id: 'night', label: T('Night') },
  { id: 'sunset', label: T('Sunset') },
  { id: 'contrast', label: T('Contrast') },
];

/** The reader's "Aa" sheet: script, layout, size, theme, meanings, a few switches. */
export function DisplayPanel({
  visible,
  onClose,
  practice,
  setPractice,
}: {
  visible: boolean;
  onClose: () => void;
  practice: boolean;
  setPractice: (v: boolean) => void;
}) {
  const { theme, settings, update } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  const scale = settings.fontScale;

  const heading = (text: string) => <Text style={[p.heading, { color: theme.textMuted }]}>{text}</Text>;
  const pill = (active: boolean) => [p.pill, { borderColor: active ? theme.accent : theme.cardBorder, backgroundColor: active ? theme.accent : theme.card }];
  const toggle = (label: string, value: boolean, onChange: (v: boolean) => void) => (
    <View style={[p.switchRow, { borderColor: theme.cardBorder }]}>
      <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>{label}</Text>
      <Switch value={value} onValueChange={onChange} trackColor={{ true: theme.accent }} />
    </View>
  );

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: '#0005' }} onPress={onClose} accessibilityLabel={tr('Close display options')} />
      <View style={[p.sheet, { backgroundColor: theme.bg }]}>
        <View style={[p.grip, { backgroundColor: theme.cardBorder }]} />
        <View style={p.titleRow}>
          <Text style={{ color: theme.text, fontSize: 19, fontWeight: '700', flex: 1 }}>{tr('Display')}</Text>
          <Pressable onPress={onClose} hitSlop={10} accessibilityRole="button">
            <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>{tr('Done')}</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 20 }}>
          {heading(tr('SCRIPT'))}
          <View style={p.wrap}>
            {SCRIPTS.map((sc) => {
              const active = settings.script === sc.id;
              return (
                <Pressable key={sc.id} onPress={() => update({ script: sc.id })} style={pill(active)} accessibilityRole="radio" accessibilityState={{ selected: active }}>
                  <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 15, fontFamily: scriptFont(sc.id, settings.bookFonts) }}>
                    {sc.id === 'iast' ? tr('Roman') : sc.native}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {heading(tr('LAYOUT AND SIZE'))}
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Segmented options={[{ id: 'book', label: tr('Book') }, { id: 'scroll', label: tr('Scroll') }]} value={settings.layout} onChange={(v) => update({ layout: v })} />
          </View>
          <View style={[p.sizeRow, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
            <Pressable onPress={() => update({ fontScale: Math.max(0.7, +(scale - 0.1).toFixed(1)) })} hitSlop={8} accessibilityLabel={tr('Smaller text')} style={p.sizeBtn}>
              <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>A−</Text>
            </Pressable>
            <Text style={{ color: theme.text, fontSize: 15, minWidth: 46, textAlign: 'center' }}>{Math.round(scale * 100)}%</Text>
            <Pressable onPress={() => update({ fontScale: Math.min(2.4, +(scale + 0.1).toFixed(1)) })} hitSlop={8} accessibilityLabel={tr('Larger text')} style={p.sizeBtn}>
              <Text style={{ color: theme.accent, fontSize: 20, fontWeight: '700' }}>A+</Text>
            </Pressable>
          </View>
          </View>

          {heading(tr('THEME'))}
          <ThemeSwatches />

          {heading(tr('MEANINGS'))}
          <View style={p.wrap}>
            {MEANING_PREFS.map((m) => {
              const active = settings.meaningLang === m.id;
              return (
                <Pressable key={m.id} onPress={() => update({ meaningLang: m.id })} style={pill(active)} accessibilityRole="radio" accessibilityState={{ selected: active }}>
                  <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 15 }}>{m.id === 'auto' ? tr('Auto') : m.id === 'both' ? tr('Both') : m.label}</Text>
                </Pressable>
              );
            })}
          </View>

          {heading(tr('OPTIONS'))}
          <View style={[p.group, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
            {toggle(tr('Show all meanings open'), settings.alwaysShowMeanings, (v) => update({ alwaysShowMeanings: v }))}
            {toggle(tr('Book fonts'), settings.bookFonts, (v) => update({ bookFonts: v }))}
            {toggle(tr('Centre the verses'), settings.centerVerses, (v) => update({ centerVerses: v }))}
            {toggle(tr('Memorise (hide lines)'), practice, setPractice)}
          </View>

        </ScrollView>
      </View>
    </Modal>
  );
}

/** One round swatch per theme, in its own colours; `withSystem` adds "follow the phone". */
export function ThemeSwatches({ withSystem }: { withSystem?: boolean }) {
  const { theme, settings, update } = useSettings();
  const { tr } = useI18n();
  const systemDark = useColorScheme() === 'dark';
  const choices = withSystem ? [{ id: 'system' as const, label: T('Phone') }, ...THEME_CHOICES] : THEME_CHOICES;
  return (
    <View style={p.swatches}>
      {choices.map((t) => {
        const active = settings.theme === t.id;
        const look = t.id === 'sunset' ? THEMES.night : t.id === 'system' ? (systemDark ? THEMES.dark : THEMES.light) : THEMES[t.id as keyof typeof THEMES];
        return (
          <Pressable key={t.id} onPress={() => update({ theme: t.id })} style={p.swatch} accessibilityRole="radio" accessibilityState={{ selected: active }} accessibilityLabel={tr(t.label)}>
            <View style={[p.dot, { backgroundColor: look.bg, borderColor: active ? theme.accent : theme.cardBorder, borderWidth: active ? 3 : 1 }]}>
              {t.id === 'sunset' ? (
                <Ionicons name="moon" size={16} color={look.accent} />
              ) : t.id === 'system' ? (
                <Ionicons name="phone-portrait-outline" size={16} color={look.text} />
              ) : (
                <Text style={{ color: look.text, fontSize: 15, fontWeight: '700' }}>A</Text>
              )}
            </View>
            <Text style={{ color: active ? theme.accent : theme.textMuted, fontSize: 11, marginTop: 4 }} numberOfLines={1}>
              {tr(t.label)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const p = StyleSheet.create({
  sheet: { maxHeight: '78%', borderTopLeftRadius: 18, borderTopRightRadius: 18 },
  grip: { alignSelf: 'center', width: 40, height: 4, borderRadius: 2, marginTop: 8 },
  titleRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 6, paddingBottom: 2 },
  heading: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginTop: 14, marginBottom: 6 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  pill: { paddingHorizontal: 11, paddingVertical: 5, borderRadius: 16, borderWidth: 1 },
  sizeRow: { flexDirection: 'row', alignItems: 'center', borderRadius: 12, borderWidth: 1 },
  sizeBtn: { paddingHorizontal: 10, paddingVertical: 7 },
  swatches: { flexDirection: 'row', justifyContent: 'space-between' },
  swatch: { alignItems: 'center', width: 48 },
  dot: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  group: { borderRadius: 12, borderWidth: 1, overflow: 'hidden' },
  switchRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 2 },
  sectionRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 11 },
});
