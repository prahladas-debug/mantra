import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View, type TextProps } from 'react-native';
import { verseCount, type Mantra } from '../data';
import { scriptFont } from '../lib/fonts';
import { useSettings } from '../lib/settings';
import { SCRIPTS, translitTitle, type ScriptId } from '../lib/transliterate';

export function Txt({
  muted,
  size = 16,
  weight,
  style,
  ...rest
}: TextProps & { muted?: boolean; size?: number; weight?: '400' | '600' | '700' }) {
  const { theme } = useSettings();
  return (
    <Text
      {...rest}
      style={[
        { color: muted ? theme.textMuted : theme.text, fontSize: size, fontWeight: weight },
        style,
      ]}
    />
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  const { theme } = useSettings();
  return (
    <Text style={[styles.sectionHeading, { color: theme.textMuted }]} accessibilityRole="header">
      {children}
    </Text>
  );
}

/** Horizontal row of script chips. */
export function ScriptPicker({
  value,
  onChange,
  allowNone,
}: {
  value: ScriptId | null;
  onChange: (s: ScriptId | null) => void;
  allowNone?: boolean;
}) {
  const options: (ScriptId | null)[] = [...(allowNone ? [null] : []), ...SCRIPTS.map((s) => s.id)];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
      {options.map((id) => {
        const label = id ? SCRIPTS.find((s) => s.id === id)!.native : 'None';
        return <Chip key={id ?? 'none'} label={label} active={value === id} onPress={() => onChange(id)} />;
      })}
    </ScrollView>
  );
}

export function Chip({ label, active, onPress }: { label: string; active?: boolean; onPress: () => void }) {
  const { theme } = useSettings();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: !!active }}
      style={[
        styles.chip,
        {
          backgroundColor: active ? theme.accent : theme.card,
          borderColor: active ? theme.accent : theme.cardBorder,
        },
      ]}
    >
      <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 15 }}>{label}</Text>
    </Pressable>
  );
}

const DIFFICULTY_LABEL = { easy: 'Easy', medium: 'Medium', advanced: 'Advanced' } as const;

/** A tappable card for one mantra in a list. */
export function MantraRow({ mantra, subtitle }: { mantra: Mantra; subtitle?: string }) {
  const { theme, settings, favorites } = useSettings();
  const title = translitTitle(mantra.title, settings.script);
  const fav = favorites.includes(mantra.id);
  return (
      <Pressable
        onPress={() => router.push(`/mantra/${mantra.id}` as Href)}
        accessibilityRole="link"
        style={({ pressed }) => [
          styles.row,
          { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1 },
        ]}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.text, fontSize: 19, fontFamily: scriptFont(settings.script, settings.bookFonts), fontWeight: settings.bookFonts ? undefined : '600' }} numberOfLines={1}>
            {title}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 2 }} numberOfLines={2}>
            {subtitle ?? mantra.titleEn}
          </Text>
          <View style={styles.metaRow}>
            <Text style={[styles.meta, { color: theme.accent, backgroundColor: theme.accentSoft }]}>
              {DIFFICULTY_LABEL[mantra.difficulty]}
            </Text>
            <Text style={[styles.metaPlain, { color: theme.textMuted }]}>{verseCount(mantra)} verses</Text>
            {mantra.completeness === 'partial' && (
              <Text style={[styles.meta, { color: theme.warningText, backgroundColor: theme.warningBg }]}>
                Partial
              </Text>
            )}
          </View>
        </View>
        {fav && <Ionicons name="star" size={18} color={theme.accent} style={{ marginRight: 6 }} />}
        <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
      </Pressable>
  );
}

export const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: 24,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  chipRow: { paddingHorizontal: 16, gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
  },
  metaRow: { flexDirection: 'row', gap: 8, marginTop: 8, alignItems: 'center' },
  meta: { fontSize: 12, fontWeight: '600', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, overflow: 'hidden' },
  metaPlain: { fontSize: 12 },
});
