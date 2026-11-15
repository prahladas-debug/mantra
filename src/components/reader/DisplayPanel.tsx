import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import type { Mantra } from '../../data';
import { scriptFont } from '../../lib/fonts';
import { MEANING_PREFS } from '../../lib/meaning';
import { useSettings, type Settings } from '../../lib/settings';
import { THEMES } from '../../lib/theme';
import { SCRIPTS, translit } from '../../lib/transliterate';
import { Segmented } from '../ui';
import type { Row } from './rows';

const THEME_CHOICES: { id: Settings['theme']; label: string }[] = [
  { id: 'light', label: 'Light' },
  { id: 'sepia', label: 'Sepia' },
  { id: 'dark', label: 'Dark' },
  { id: 'night', label: 'Night' },
  { id: 'sunset', label: 'At sunset' },
  { id: 'contrast', label: 'Contrast' },
];

/** The reader's "Aa" sheet: script, layout, size, theme, meanings, practice, sections. */
export function DisplayPanel({
  visible,
  onClose,
  mantra,
  rows,
  practice,
  setPractice,
  onJump,
}: {
  visible: boolean;
  onClose: () => void;
  mantra: Mantra;
  /** The rows being shown: sections left out by the reader's choices can't be jumped to. */
  rows: Row[];
  practice: boolean;
  setPractice: (v: boolean) => void;
  onJump: (key: string) => void;
}) {
  const { theme, settings, update } = useSettings();
  const scale = settings.fontScale;
  const shown = new Set(rows.map((r) => r.key));
  const sections = mantra.sections.map((s, si) => ({ s, si })).filter(({ s, si }) => (s.title || s.titleEn) && shown.has(`s${si}`));

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
      <Pressable style={{ flex: 1, backgroundColor: '#0005' }} onPress={onClose} accessibilityLabel="Close display options" />
      <View style={[p.sheet, { backgroundColor: theme.bg }]}>
        <View style={[p.grip, { backgroundColor: theme.cardBorder }]} />
        <View style={p.titleRow}>
          <Text style={{ color: theme.text, fontSize: 19, fontWeight: '700', flex: 1 }}>Display</Text>
          <Pressable onPress={onClose} hitSlop={10} accessibilityRole="button">
            <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>Done</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 28 }}>
          {heading('SCRIPT')}
          <View style={p.wrap}>
            {SCRIPTS.map((sc) => {
              const active = settings.script === sc.id;
              return (
                <Pressable key={sc.id} onPress={() => update({ script: sc.id })} style={pill(active)} accessibilityRole="radio" accessibilityState={{ selected: active }}>
                  <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 15, fontFamily: scriptFont(sc.id, settings.bookFonts) }}>
                    {sc.id === 'iast' ? 'Roman' : sc.native}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {heading('LAYOUT AND SIZE')}
          <Segmented options={[{ id: 'book', label: '📖 Book pages' }, { id: 'scroll', label: 'Scroll' }]} value={settings.layout} onChange={(v) => update({ layout: v })} />
          <View style={[p.sizeRow, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
            <Pressable onPress={() => update({ fontScale: Math.max(0.7, +(scale - 0.1).toFixed(1)) })} hitSlop={8} accessibilityLabel="Smaller text" style={p.sizeBtn}>
              <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>A−</Text>
            </Pressable>
            <Text style={{ color: theme.text, fontSize: 16, flex: 1, textAlign: 'center' }}>Text size {Math.round(scale * 100)}%</Text>
            <Pressable onPress={() => update({ fontScale: Math.min(2.4, +(scale + 0.1).toFixed(1)) })} hitSlop={8} accessibilityLabel="Larger text" style={p.sizeBtn}>
              <Text style={{ color: theme.accent, fontSize: 22, fontWeight: '700' }}>A+</Text>
            </Pressable>
          </View>
          <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 4 }}>Tip: pinch with two fingers on the text to resize.</Text>

          {heading('THEME')}
          <View style={p.swatches}>
            {THEME_CHOICES.map((t) => {
              const active = settings.theme === t.id;
              const look = t.id === 'sunset' ? THEMES.night : THEMES[t.id as keyof typeof THEMES];
              return (
                <Pressable key={t.id} onPress={() => update({ theme: t.id })} style={p.swatch} accessibilityRole="radio" accessibilityState={{ selected: active }} accessibilityLabel={t.label}>
                  <View style={[p.dot, { backgroundColor: look.bg, borderColor: active ? theme.accent : theme.cardBorder, borderWidth: active ? 3 : 1 }]}>
                    {t.id === 'sunset' ? <Ionicons name="moon" size={16} color={look.accent} /> : <Text style={{ color: look.text, fontSize: 15, fontWeight: '700' }}>A</Text>}
                  </View>
                  <Text style={{ color: active ? theme.accent : theme.textMuted, fontSize: 11, marginTop: 4 }} numberOfLines={1}>
                    {t.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {heading('MEANINGS')}
          <View style={p.wrap}>
            {MEANING_PREFS.map((m) => {
              const active = settings.meaningLang === m.id;
              return (
                <Pressable key={m.id} onPress={() => update({ meaningLang: m.id })} style={pill(active)} accessibilityRole="radio" accessibilityState={{ selected: active }}>
                  <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 15 }}>{m.label}</Text>
                </Pressable>
              );
            })}
          </View>

          {heading('MORE')}
          <View style={[p.group, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
            {toggle('Show all meanings open', settings.alwaysShowMeanings, (v) => update({ alwaysShowMeanings: v }))}
            {toggle('Book fonts', settings.bookFonts, (v) => update({ bookFonts: v }))}
            {toggle('Centre the verses', settings.centerVerses, (v) => update({ centerVerses: v }))}
            {toggle('Memorise: hide lines until tapped', practice, setPractice)}
          </View>
          <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 6 }}>A second script under each verse can be set in Settings.</Text>

          {sections.length > 1 && (
            <>
              {heading('GO TO SECTION')}
              <View style={[p.group, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
                {sections.map(({ s, si }, i) => (
                  <Pressable
                    key={si}
                    onPress={() => onJump(`s${si}`)}
                    style={({ pressed }) => [p.sectionRow, { borderTopWidth: i ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
                  >
                    <Text style={{ color: theme.text, fontSize: 15, flex: 1 }} numberOfLines={1}>
                      {s.titleEn ?? translit(s.title!, settings.script)}
                    </Text>
                    <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
                  </Pressable>
                ))}
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}

const p = StyleSheet.create({
  sheet: { maxHeight: '82%', borderTopLeftRadius: 18, borderTopRightRadius: 18 },
  grip: { alignSelf: 'center', width: 40, height: 4, borderRadius: 2, marginTop: 8 },
  titleRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  heading: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginTop: 18, marginBottom: 8 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: { paddingHorizontal: 13, paddingVertical: 7, borderRadius: 18, borderWidth: 1 },
  sizeRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10, borderRadius: 12, borderWidth: 1, paddingHorizontal: 6 },
  sizeBtn: { paddingHorizontal: 14, paddingVertical: 8 },
  swatches: { flexDirection: 'row', justifyContent: 'space-between' },
  swatch: { alignItems: 'center', width: 54 },
  dot: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  group: { borderRadius: 12, borderWidth: 1, overflow: 'hidden' },
  switchRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 6 },
  sectionRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 11 },
});
