import { Pressable, ScrollView, StyleSheet, Text, View, type TextProps } from 'react-native';
import type { Mantra } from '../data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextRow } from './TextList';
import { useSettings } from '../lib/settings';
import { SCRIPTS, type ScriptId } from '../lib/transliterate';

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
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 26, marginBottom: 10, marginHorizontal: 16 }}>
      <MaterialCommunityIcons name="spa-outline" size={18} color={theme.gold} />
      <Text style={{ fontSize: 16, fontWeight: '700', color: theme.text }} accessibilityRole="header">
        {children}
      </Text>
    </View>
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
      <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 16 }}>{label}</Text>
    </Pressable>
  );
}

/** A text as a standalone compact card (search results). Lists inside a section use TextList. */
export function MantraRow({ mantra, subtitle }: { mantra: Mantra; subtitle?: string }) {
  const { theme } = useSettings();
  return (
    <View style={{ marginHorizontal: 16, marginBottom: 8, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, overflow: 'hidden' }}>
      <TextRow mantra={mantra} subtitle={subtitle} />
    </View>
  );
}

export const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 14,
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
    borderRadius: 16,
    borderWidth: 1,
  },
  metaRow: { flexDirection: 'row', gap: 8, marginTop: 8, alignItems: 'center' },
  meta: { fontSize: 13, fontWeight: '600', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, overflow: 'hidden' },
  metaPlain: { fontSize: 13 },
});

/** A row of equal buttons, one selected (like a two- or three-way switch). */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  const { theme } = useSettings();
  return (
    <View style={{ flexDirection: 'row', borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, padding: 3, gap: 3 }}>
      {options.map((o) => {
        const active = o.id === value;
        return (
          <Pressable
            key={o.id}
            onPress={() => onChange(o.id)}
            accessibilityRole="radio"
            accessibilityState={{ selected: active }}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 9, paddingHorizontal: 6, borderRadius: 9, backgroundColor: active ? theme.accent : 'transparent' }}
          >
            <Text numberOfLines={1} style={{ color: active ? theme.onAccent : theme.text, fontSize: 16, fontWeight: active ? '700' : '400' }}>
              {o.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
