import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Mantra } from '../../data';
import { MEANING_PREFS } from '../../lib/meaning';
import { useSettings } from '../../lib/settings';
import type { ThemeName } from '../../lib/theme';
import { translit } from '../../lib/transliterate';
import { Chip, ScriptPicker } from '../ui';

function Label({ children }: { children: React.ReactNode }) {
  const { theme } = useSettings();
  return <Text style={[p.label, { color: theme.textMuted }]}>{children}</Text>;
}

/** The "Aa" panel: script, size, theme, layout, meanings, practice, jump to section. */
export function DisplayPanel({
  mantra,
  practice,
  setPractice,
  onJump,
}: {
  mantra: Mantra;
  practice: boolean;
  setPractice: (v: boolean) => void;
  onJump: (key: string) => void;
}) {
  const { theme, settings, update } = useSettings();
  const scale = settings.fontScale;
  const sections = mantra.sections.map((s, si) => ({ s, si })).filter(({ s }) => s.title || s.titleEn);
  return (
    <View style={[p.panel, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
      <ScrollView style={{ maxHeight: 420 }} contentContainerStyle={{ paddingBottom: 10 }}>
        <Label>Script · ಲಿಪಿ</Label>
        <ScriptPicker value={settings.script} onChange={(v) => v && update({ script: v })} />
        <Label>Also show below each verse</Label>
        <ScriptPicker allowNone value={settings.secondaryScript} onChange={(v) => update({ secondaryScript: v })} />
        <Label>Reading · ಓದು</Label>
        <View style={p.row}>
          <Chip label="📖 Book pages" active={settings.layout === 'book'} onPress={() => update({ layout: 'book' })} />
          <Chip label="Scroll" active={settings.layout === 'scroll'} onPress={() => update({ layout: 'scroll' })} />
          <Chip label={settings.bookFonts ? 'Book fonts ✓' : 'Book fonts'} active={settings.bookFonts} onPress={() => update({ bookFonts: !settings.bookFonts })} />
          <Chip label={settings.centerVerses ? 'Centred ✓' : 'Centred'} active={settings.centerVerses} onPress={() => update({ centerVerses: !settings.centerVerses })} />
        </View>
        <View style={p.row}>
          <Chip label="A−" onPress={() => update({ fontScale: Math.max(0.7, +(scale - 0.1).toFixed(1)) })} />
          <Text style={{ color: theme.text, minWidth: 48, textAlign: 'center' }}>{Math.round(scale * 100)}%</Text>
          <Chip label="A+" onPress={() => update({ fontScale: Math.min(2.4, +(scale + 0.1).toFixed(1)) })} />
        </View>
        <View style={[p.row, { flexWrap: 'wrap' }]}>
          {(['light', 'sepia', 'dark', 'contrast'] as ThemeName[]).map((t) => (
            <Chip key={t} label={t === 'contrast' ? 'High contrast' : t[0].toUpperCase() + t.slice(1)} active={theme.name === t && settings.theme !== 'system'} onPress={() => update({ theme: t })} />
          ))}
        </View>
        <Label>Meanings · ಅರ್ಥ</Label>
        <View style={[p.row, { flexWrap: 'wrap' }]}>
          {MEANING_PREFS.map((m) => (
            <Chip key={m.id} label={m.label} active={settings.meaningLang === m.id} onPress={() => update({ meaningLang: m.id })} />
          ))}
          <Chip label={settings.alwaysShowMeanings ? 'All open ✓' : 'All open'} active={settings.alwaysShowMeanings} onPress={() => update({ alwaysShowMeanings: !settings.alwaysShowMeanings })} />
        </View>
        <Label>Practice · ಕಂಠಪಾಠ</Label>
        <View style={p.row}>
          <Chip label={practice ? 'Memorise mode ✓' : 'Memorise mode (hide lines)'} active={practice} onPress={() => setPractice(!practice)} />
        </View>
        {sections.length > 1 && (
          <>
            <Label>Jump to section</Label>
            <View style={[p.row, { flexWrap: 'wrap' }]}>
              {sections.map(({ s, si }) => (
                <Chip key={si} label={s.titleEn ?? translit(s.title!, settings.script)} onPress={() => onJump(`s${si}`)} />
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const p = StyleSheet.create({
  panel: { borderBottomWidth: 1, paddingTop: 4 },
  label: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.8, marginHorizontal: 16, marginTop: 10, marginBottom: 4 },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 8, marginTop: 6 },
});
