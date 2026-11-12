import { Link } from 'expo-router';
import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { Chip, ScriptPicker, SectionHeading } from '../components/ui';
import { useSettings } from '../lib/settings';
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
        <Chip label="A+" onPress={() => update({ fontScale: Math.min(2.2, +(settings.fontScale + 0.1).toFixed(1)) })} />
      </View>
      <View style={{ margin: 16, padding: 16, borderRadius: 12, borderWidth: 1, backgroundColor: theme.card, borderColor: theme.cardBorder }}>
        <Text style={{ color: theme.text, fontSize: 22 * settings.fontScale, lineHeight: 36 * settings.fontScale }}>
          {translit(SAMPLE, settings.script)}
        </Text>
      </View>

      <SectionHeading>Theme</SectionHeading>
      <View style={[row, { justifyContent: 'flex-start', gap: 8 }]}>
        {(['system', 'light', 'sepia', 'dark'] as const).map((t) => (
          <Chip key={t} label={t[0].toUpperCase() + t.slice(1)} active={settings.theme === t} onPress={() => update({ theme: t })} />
        ))}
      </View>

      <SectionHeading>Reading</SectionHeading>
      <View style={row}>
        <Text style={{ color: theme.text, fontSize: 16 }}>Show English meanings</Text>
        <Switch value={settings.showMeanings} onValueChange={(v) => update({ showMeanings: v })} trackColor={{ true: theme.accent }} />
      </View>
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
