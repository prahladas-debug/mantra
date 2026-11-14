import { Link } from 'expo-router';
import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { Chip, ScriptPicker, SectionHeading } from '../components/ui';
import { MEANING_PREFS } from '../lib/meaning';
import { useSettings } from '../lib/settings';
import { leading, scriptFont } from '../lib/fonts';
import { translit } from '../lib/transliterate';

const SAMPLE = 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्';

export default function SettingsScreen() {
  const { theme, settings, update } = useSettings();
  const row = { flexDirection: 'row' as const, alignItems: 'center' as const, justifyContent: 'space-between' as const, marginHorizontal: 16, paddingVertical: 10 };

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <SectionHeading>Reading script</SectionHeading>
      <ScriptPicker value={settings.script} onChange={(v) => v && update({ script: v })} />

      <SectionHeading>Second script under each verse</SectionHeading>
      <ScriptPicker allowNone value={settings.secondaryScript} onChange={(v) => update({ secondaryScript: v })} />
      <Text style={{ color: theme.textMuted, marginHorizontal: 16, marginTop: 8, fontSize: 14 }}>
        Useful for learning, e.g. Kannada with English (IAST) underneath.
      </Text>

      <SectionHeading>Text size</SectionHeading>
      <View style={[row, { justifyContent: 'flex-start', gap: 10 }]}>
        <Chip label="A−" onPress={() => update({ fontScale: Math.max(0.7, +(settings.fontScale - 0.1).toFixed(1)) })} />
        <Text style={{ color: theme.text, minWidth: 48, textAlign: 'center' }}>{Math.round(settings.fontScale * 100)}%</Text>
        <Chip label="A+" onPress={() => update({ fontScale: Math.min(2.4, +(settings.fontScale + 0.1).toFixed(1)) })} />
      </View>
      <View style={[row, { justifyContent: 'flex-start', gap: 8 }]}>
        <Chip
          label={settings.fontScale >= 1.5 && settings.theme === 'contrast' ? 'Large print ✓ · ದೊಡ್ಡ ಅಕ್ಷರ' : 'Large print · ದೊಡ್ಡ ಅಕ್ಷರ'}
          active={settings.fontScale >= 1.5 && settings.theme === 'contrast'}
          onPress={() =>
            settings.fontScale >= 1.5 && settings.theme === 'contrast'
              ? update({ fontScale: 1, theme: 'system' })
              : update({ fontScale: 1.6, theme: 'contrast', bookFonts: true })
          }
        />
      </View>
      <View style={{ margin: 16, padding: 16, borderRadius: 12, borderWidth: 1, backgroundColor: theme.card, borderColor: theme.cardBorder }}>
        <Text style={{ color: theme.text, fontSize: 22 * settings.fontScale, lineHeight: 22 * settings.fontScale * leading(settings.script, settings.bookFonts), fontFamily: scriptFont(settings.script, settings.bookFonts), textAlign: settings.centerVerses ? 'center' : 'left' }}>
          {translit(SAMPLE, settings.script)}
        </Text>
      </View>

      <SectionHeading>Theme</SectionHeading>
      <View style={[row, { justifyContent: 'flex-start', gap: 8 }]}>
        {(['system', 'light', 'sepia', 'dark', 'contrast'] as const).map((t) => (
          <Chip key={t} label={t === 'contrast' ? 'High contrast' : t[0].toUpperCase() + t.slice(1)} active={settings.theme === t} onPress={() => update({ theme: t })} />
        ))}
      </View>

      <SectionHeading>Book · ಪುಸ್ತಕ</SectionHeading>
      <View style={[row, { justifyContent: 'flex-start', gap: 8, flexWrap: 'wrap' }]}>
        <Chip label="📖 Book pages" active={settings.layout === 'book'} onPress={() => update({ layout: 'book' })} />
        <Chip label="Scroll" active={settings.layout === 'scroll'} onPress={() => update({ layout: 'scroll' })} />
      </View>
      <View style={row}>
        <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>Book fonts (Tiro / Noto Serif)</Text>
        <Switch value={settings.bookFonts} onValueChange={(v) => update({ bookFonts: v })} trackColor={{ true: theme.accent }} />
      </View>
      <View style={row}>
        <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>Centre verses, as in printed books</Text>
        <Switch value={settings.centerVerses} onValueChange={(v) => update({ centerVerses: v })} trackColor={{ true: theme.accent }} />
      </View>

      <SectionHeading>Reading</SectionHeading>
      <View style={row}>
        <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>Show all meanings open · ಎಲ್ಲ ಅರ್ಥ ತೆರೆದಿರಲಿ</Text>
        <Switch value={settings.alwaysShowMeanings} onValueChange={(v) => update({ alwaysShowMeanings: v })} trackColor={{ true: theme.accent }} />
      </View>
      <View style={[row, { justifyContent: 'flex-start', gap: 8, flexWrap: 'wrap' }]}>
        {MEANING_PREFS.map((m) => (
          <Chip key={m.id} label={m.label} active={settings.meaningLang === m.id} onPress={() => update({ meaningLang: m.id })} />
        ))}
      </View>
      <Text style={{ color: theme.textMuted, marginHorizontal: 16, fontSize: 14 }}>
        Meanings are hidden until you tap ಅರ್ಥ · Meaning under a verse. Auto shows the meaning in the
        language of your reading script (ಕನ್ನಡ, తెలుగు, தமிழ், हिन्दी for Devanagari), English otherwise.
      </Text>
      <View style={row}>
        <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>Keep screen on while reading</Text>
        <Switch value={settings.keepAwake} onValueChange={(v) => update({ keepAwake: v })} trackColor={{ true: theme.accent }} />
      </View>

      <SectionHeading>About</SectionHeading>
      <Link href="/about" asChild>
        <Pressable style={row}>
          <Text style={{ color: theme.accent, fontSize: 16 }}>About this app & sources</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
