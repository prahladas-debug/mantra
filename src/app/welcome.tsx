import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CityPicker } from '../components/CalendarBar';
import { scriptFont } from '../lib/fonts';
import { APP_MOTTO, APP_TAGLINE, appTitle } from '../lib/labels';
import { cityById, cityLabel } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { translit, type ScriptId } from '../lib/transliterate';

const SAMPLE = 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम्';

/** How each script is offered as a language on first launch. */
const LANGUAGES: { script: ScriptId; name: string; en: string }[] = [
  { script: 'kannada', name: 'ಕನ್ನಡ', en: 'Kannada' },
  { script: 'devanagari', name: 'संस्कृतम् · हिन्दी', en: 'Sanskrit / Hindi (Devanagari)' },
  { script: 'telugu', name: 'తెలుగు', en: 'Telugu' },
  { script: 'tamil', name: 'தமிழ்', en: 'Tamil' },
  { script: 'malayalam', name: 'മലയാളം', en: 'Malayalam' },
  { script: 'gujarati', name: 'ગુજરાતી', en: 'Gujarati' },
  { script: 'bengali', name: 'বাংলা', en: 'Bengali' },
  { script: 'oriya', name: 'ଓଡ଼ିଆ', en: 'Odia' },
  { script: 'iast', name: 'English', en: 'English (Roman letters)' },
];

function Choice({ active, onPress, children }: { active: boolean; onPress: () => void; children: React.ReactNode }) {
  const { theme } = useSettings();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected: active }}
      style={({ pressed }) => ({
        flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 13, paddingHorizontal: 14, borderRadius: 12, borderWidth: 1,
        borderColor: active ? theme.accent : theme.cardBorder, backgroundColor: active ? theme.accentSoft : theme.card, opacity: pressed ? 0.7 : 1,
      })}
    >
      <View style={{ flex: 1 }}>{children}</View>
      <Ionicons name={active ? 'radio-button-on' : 'radio-button-off'} size={20} color={active ? theme.accent : theme.textMuted} />
    </Pressable>
  );
}

/** First launch: language (reading script and meanings), then tradition and place. */
export default function Welcome() {
  const { theme, settings, update } = useSettings();
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState<1 | 2>(1);
  const [picker, setPicker] = useState(false);
  const tradition = settings.variants.tradition;
  const city = cityById(settings.city);
  const font = scriptFont(settings.script, settings.bookFonts);

  const finish = () => {
    update({ onboarded: true });
    router.replace('/');
  };
  const button = (label: string, onPress: () => void, primary = true) => (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => ({
        flex: 1, alignItems: 'center', paddingVertical: 14, borderRadius: 12, borderWidth: 1,
        borderColor: theme.accent, backgroundColor: primary ? theme.accent : 'transparent', opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text style={{ color: primary ? theme.onAccent : theme.accent, fontSize: 17, fontWeight: '700' }}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg, paddingTop: insets.top + 16 }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24, gap: 10 }}>
        <Text style={{ color: theme.accent, fontSize: 30, textAlign: 'center', fontFamily: font, fontWeight: font ? undefined : '700' }}>
          {appTitle(settings.script)}
        </Text>
        <Text style={{ color: theme.text, fontSize: 16, lineHeight: 25, textAlign: 'center', fontFamily: font, marginTop: -6 }}>{translit(APP_MOTTO, settings.script)}</Text>
        <Text style={{ color: theme.textMuted, fontSize: 13, textAlign: 'center' }}>{APP_TAGLINE}</Text>
        <Text style={{ color: theme.textMuted, fontSize: 14, textAlign: 'center', marginBottom: 6 }}>Step {step} of 2</Text>

        {step === 1 ? (
          <>
            <Text style={{ color: theme.text, fontSize: 21, fontWeight: '700' }}>Choose your language</Text>
            <Text style={{ color: theme.textMuted, fontSize: 15, marginBottom: 4 }}>
              Mantras are shown in its script, with meanings in that language where available (otherwise English). You can change this any time in Settings.
            </Text>
            {LANGUAGES.map((l) => (
              <Choice key={l.script} active={settings.script === l.script} onPress={() => update({ script: l.script, meaningLang: 'auto' })}>
                <Text style={{ color: theme.text, fontSize: 19, fontFamily: scriptFont(l.script, settings.bookFonts) }}>{l.name}</Text>
                <Text style={{ color: theme.textMuted, fontSize: 13 }}>{l.en}</Text>
              </Choice>
            ))}
            <View style={{ marginTop: 6, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.page }}>
              <Text style={{ color: theme.text, fontSize: 20, lineHeight: 34, textAlign: 'center', fontFamily: font }}>{translit(SAMPLE, settings.script)}</Text>
            </View>
          </>
        ) : (
          <>
            <Text style={{ color: theme.text, fontSize: 21, fontWeight: '700' }}>Your tradition</Text>
            <Text style={{ color: theme.textMuted, fontSize: 15, marginBottom: 4 }}>
              Sets the steps shown in Sandhyavandane and daily puja, and how Ekadashi is dated. Each text still lets you switch.
            </Text>
            <Choice active={tradition === 'madhva'} onPress={() => update({ variants: { ...settings.variants, tradition: 'madhva' } })}>
              <Text style={{ color: theme.text, fontSize: 17, fontWeight: '600' }}>Madhva (Vaishnava)</Text>
            </Choice>
            <Choice active={tradition === 'smarta'} onPress={() => update({ variants: { ...settings.variants, tradition: 'smarta' } })}>
              <Text style={{ color: theme.text, fontSize: 17, fontWeight: '600' }}>Smarta</Text>
            </Choice>

            <Text style={{ color: theme.text, fontSize: 21, fontWeight: '700', marginTop: 18 }}>Your place</Text>
            <Text style={{ color: theme.textMuted, fontSize: 15, marginBottom: 4 }}>For sunrise, panchanga and festival dates.</Text>
            <Pressable
              onPress={() => setPicker(true)}
              accessibilityRole="button"
              style={({ pressed }) => ({
                flexDirection: 'row', alignItems: 'center', gap: 10, padding: 14, borderRadius: 12, borderWidth: 1,
                borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.7 : 1,
              })}
            >
              <Ionicons name="location-outline" size={20} color={theme.accent} />
              <Text style={{ flex: 1, color: theme.text, fontSize: 17 }}>{cityLabel(city)}</Text>
              <Text style={{ color: theme.accent, fontSize: 15 }}>Change</Text>
            </Pressable>
            <CityPicker visible={picker} onClose={() => setPicker(false)} />
          </>
        )}
      </ScrollView>

      <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 20, paddingTop: 10, paddingBottom: insets.bottom + 16, borderTopWidth: 1, borderColor: theme.cardBorder }}>
        {step === 1 ? button('Continue', () => setStep(2)) : (
          <>
            {button('Back', () => setStep(1), false)}
            {button('Start', finish)}
          </>
        )}
      </View>
    </View>
  );
}
