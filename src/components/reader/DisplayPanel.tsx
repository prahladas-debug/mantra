import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, type ReactNode } from 'react';
import { Modal, Platform, Pressable, ScrollView, StyleSheet, Switch, Text, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { T, useI18n } from '../../lib/i18n';
import { scriptFont } from '../../lib/fonts';
import { MEANING_PREFS } from '../../lib/meaning';
import { useSettings, type Settings } from '../../lib/settings';
import { THEMES } from '../../lib/theme';
import { SCRIPTS } from '../../lib/transliterate';
import { Segmented } from '../ui';

const SPACINGS = [
  { id: '0.9', label: T('Compact') },
  { id: '1', label: T('Normal') },
  { id: '1.15', label: T('Relaxed') },
];

const THEME_CHOICES: { id: Settings['theme']; label: string }[] = [
  { id: 'light', label: T('Day') },
  { id: 'dark', label: T('Night') },
  { id: 'sunset', label: T('Sunset') },
  { id: 'contrast', label: T('Contrast') },
];

/** The reader's "Aa" sheet: script, layout, size, theme, meanings, a few switches. */
export function DisplayPanel({
  visible,
  onClose,
  practice,
  setPractice,
  onHandsFree,
}: {
  visible: boolean;
  onClose: () => void;
  practice: boolean;
  setPractice: (v: boolean) => void;
  /** Start hands-free reading (and close this sheet). */
  onHandsFree: () => void;
}) {
  const { theme, settings, update } = useSettings();
  const { tr } = useI18n();
  const insets = useSafeAreaInsets();
  const scale = settings.fontScale;

  // One group of choices open at a time.
  const [open, setOpen] = useState<string | null>(null);
  const section = (id: string, label: string, value: string, children: ReactNode) => (
    <View key={id} style={{ borderTopWidth: id === 'script' ? 0 : StyleSheet.hairlineWidth, borderColor: theme.cardBorder }}>
      <Pressable onPress={() => setOpen(open === id ? null : id)} accessibilityRole="button" accessibilityState={{ expanded: open === id }} style={({ pressed }) => [p.sectionRow, { opacity: pressed ? 0.6 : 1 }]}>
        <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>{label}</Text>
        {!!value && <Text style={{ color: theme.textMuted, fontSize: 15, marginRight: 6 }} numberOfLines={1}>{value}</Text>}
        <MaterialCommunityIcons name={open === id ? 'chevron-up' : 'chevron-down'} size={20} color={theme.textMuted} />
      </Pressable>
      {open === id && <View style={{ paddingHorizontal: 14, paddingBottom: 12 }}>{children}</View>}
    </View>
  );
  const meaningName = settings.meaningLang === 'auto' ? tr('Auto') : settings.meaningLang === 'both' ? tr('Both') : MEANING_PREFS.find((m) => m.id === settings.meaningLang)?.label ?? '';
  const spacingName = tr(SPACINGS.find((x) => x.id === String(settings.lineSpacing ?? 1))?.label ?? 'Normal');
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
          <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700', flex: 1 }}>{tr('Display')}</Text>
          <Pressable onPress={onClose} hitSlop={10} accessibilityRole="button">
            <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>{tr('Done')}</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 20 }}>
          {/* What is changed most, always in view: the size, hands-free reading and the theme. */}
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', marginTop: 10 }}>
            <View style={[p.sizeRow, { flex: 1, justifyContent: 'space-between', borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
              <Pressable onPress={() => update({ fontScale: Math.max(0.7, +(scale - 0.1).toFixed(1)) })} hitSlop={8} accessibilityLabel={tr('Smaller text')} style={p.sizeBtn}>
                <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>A−</Text>
              </Pressable>
              <Text style={{ color: theme.text, fontSize: 16, minWidth: 46, textAlign: 'center' }}>{Math.round(scale * 100)}%</Text>
              <Pressable onPress={() => update({ fontScale: Math.min(2.4, +(scale + 0.1).toFixed(1)) })} hitSlop={8} accessibilityLabel={tr('Larger text')} style={p.sizeBtn}>
                <Text style={{ color: theme.accent, fontSize: 21, fontWeight: '700' }}>A+</Text>
              </Pressable>
            </View>
            <Pressable
              onPress={onHandsFree}
              accessibilityRole="button"
              accessibilityHint={settings.layout === 'book' ? tr('The pages turn by themselves while you recite.') : tr('The text moves up by itself while you recite.')}
              style={({ pressed }) => [p.handsFree, { borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.7 : 1 }]}
            >
              <View style={[p.handsIcon, { backgroundColor: theme.accent }]}>
                <MaterialCommunityIcons name="play" size={18} color={theme.onAccent} />
              </View>
              <Text style={{ color: theme.text, fontSize: 15, fontWeight: '600' }}>{tr('Hands-free reading')}</Text>
            </Pressable>
          </View>
          <View style={{ marginTop: 14 }}>
            <ThemeSwatches />
          </View>

          {/* The rest, one line each with what is chosen; a tap opens the choices. */}
          <View style={[p.group, { borderColor: theme.cardBorder, backgroundColor: theme.card, marginTop: 14 }]}>
            {section('script', tr('Script'), SCRIPTS.find((x) => x.id === settings.script)?.native ?? '', (
              <View style={p.wrap}>
                {SCRIPTS.map((sc) => {
                  const active = settings.script === sc.id;
                  return (
                    <Pressable key={sc.id} onPress={() => update({ script: sc.id })} style={pill(active)} accessibilityRole="radio" accessibilityState={{ selected: active }}>
                      <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 16, fontFamily: scriptFont(sc.id, settings.bookFonts) }}>
                        {sc.id === 'iast' ? 'IAST' : sc.id === 'english' ? 'English' : sc.native}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            ))}
            {section('meanings', tr('Meanings'), meaningName, (
              <>
                <View style={p.wrap}>
                  {MEANING_PREFS.map((m) => {
                    const active = settings.meaningLang === m.id;
                    return (
                      <Pressable key={m.id} onPress={() => update({ meaningLang: m.id })} style={pill(active)} accessibilityRole="radio" accessibilityState={{ selected: active }}>
                        <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 16 }}>{m.id === 'auto' ? tr('Auto') : m.id === 'both' ? tr('Both') : m.label}</Text>
                      </Pressable>
                    );
                  })}
                </View>
                <View style={{ marginTop: 8 }}>
                  {toggle(tr('Show all meanings open'), settings.alwaysShowMeanings, (v) => update({ alwaysShowMeanings: v }))}
                  {toggle(tr('Read as a story: meanings first'), !!settings.storyMode, (v) => update({ storyMode: v }))}
                </View>
              </>
            ))}
            {section('layout', tr('Layout'), `${settings.layout === 'book' ? tr('Book') : tr('Scroll')} · ${spacingName}`, (
              <>
                <Segmented options={[{ id: 'book', label: tr('Book') }, { id: 'scroll', label: tr('Scroll') }]} value={settings.layout} onChange={(v) => update({ layout: v })} />
                <View style={{ marginTop: 10 }}>
                  <Segmented options={SPACINGS.map((x) => ({ id: x.id, label: tr(x.label) }))} value={String(settings.lineSpacing ?? 1)} onChange={(v) => update({ lineSpacing: Number(v) })} />
                </View>
              </>
            ))}
            {section('more', tr('More options'), '', (
              <>
                {toggle(tr('Book fonts'), settings.bookFonts, (v) => update({ bookFonts: v }))}
                {toggle(tr('Centre the verses'), settings.centerVerses, (v) => update({ centerVerses: v }))}
                {toggle(tr('Memorise (hide lines)'), practice, setPractice)}
                {settings.layout === 'book' && toggle(tr('Tap the page edges to turn pages'), settings.edgeTaps !== false, (v) => update({ edgeTaps: v }))}
                {Platform.OS === 'android' && toggle(tr('Volume buttons turn pages'), !!settings.volumeKeys, (v) => update({ volumeKeys: v }))}
              </>
            ))}
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
        const stored = settings.theme === 'sepia' ? 'light' : settings.theme === 'night' ? 'dark' : settings.theme;
        const active = stored === t.id;
        const look = t.id === 'sunset' ? THEMES.dark : t.id === 'system' ? (systemDark ? THEMES.dark : THEMES.light) : THEMES[t.id as keyof typeof THEMES];
        return (
          <Pressable key={t.id} onPress={() => update({ theme: t.id })} style={p.swatch} accessibilityRole="radio" accessibilityState={{ selected: active }} accessibilityLabel={tr(t.label)}>
            <View style={[p.dot, { backgroundColor: look.bg, borderColor: active ? theme.accent : theme.cardBorder, borderWidth: active ? 3 : 1 }]}>
              {t.id === 'sunset' ? (
                <MaterialCommunityIcons name="moon-waning-crescent" size={18} color={look.gold} />
              ) : t.id === 'system' ? (
                <MaterialCommunityIcons name="cellphone" size={18} color={look.text} />
              ) : (
                <Text style={{ color: look.text, fontSize: 16, fontWeight: '700' }}>A</Text>
              )}
            </View>
            <Text style={{ color: active ? theme.accent : theme.textMuted, fontSize: 13, marginTop: 4 }} numberOfLines={1}>
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
  heading: { fontSize: 13, fontWeight: '700', letterSpacing: 0.8, marginTop: 14, marginBottom: 6 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  pill: { paddingHorizontal: 11, paddingVertical: 5, borderRadius: 16, borderWidth: 1 },
  sizeRow: { flexDirection: 'row', alignItems: 'center', borderRadius: 12, borderWidth: 1 },
  sizeBtn: { paddingHorizontal: 10, paddingVertical: 7 },
  swatches: { flexDirection: 'row', justifyContent: 'space-between' },
  swatch: { alignItems: 'center', flex: 1 },
  dot: { width: 34, height: 34, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  group: { borderRadius: 12, borderWidth: 1, overflow: 'hidden' },
  switchRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 2 },
  sectionRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 11 },
  handsFree: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 6, paddingLeft: 6, paddingRight: 12, borderRadius: 12, borderWidth: 1 },
  handsIcon: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
});
