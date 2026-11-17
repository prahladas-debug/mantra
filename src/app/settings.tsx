import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Linking, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { CityPicker } from '../components/CalendarBar';
import { ThemeSwatches } from '../components/reader/DisplayPanel';
import { SectionHeading, Segmented } from '../components/ui';
import { leading, scriptFont } from '../lib/fonts';
import { MEANING_PREFS } from '../lib/meaning';
import { MATHA_OPTIONS, mathaOf, type MathaId } from '../lib/mathaAradhana';
import { cityById, cityLabel } from '../lib/panchanga';
import { ensurePermission, remindersSupported } from '../lib/reminders';
import { UI_PREFS, useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { SCRIPTS, translit, type ScriptId } from '../lib/transliterate';

const SAMPLE = 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशम्';
const TIMES = ['18:00', '19:00', '20:00', '21:00'];

/** Small rounded choices that wrap onto more lines instead of scrolling sideways. */
function Pills<T extends string | null>({ options, value, onChange }: { options: { id: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  const { theme } = useSettings();
  return (
    <View style={s.pills}>
      {options.map((o) => {
        const active = o.id === value;
        return (
          <Pressable
            key={o.id ?? 'none'}
            onPress={() => onChange(o.id)}
            accessibilityRole="radio"
            accessibilityState={{ selected: active }}
            style={[s.pill, { backgroundColor: active ? theme.accent : theme.bg, borderColor: active ? theme.accent : theme.cardBorder }]}
          >
            <Text style={{ color: active ? theme.onAccent : theme.text, fontSize: 16 }}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function Group({ title, children, note }: { title: string; children: React.ReactNode; note?: string }) {
  const { theme } = useSettings();
  return (
    <View>
      <SectionHeading>{title}</SectionHeading>
      <View style={[s.card, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>{children}</View>
      {note && <Text style={[s.note, { color: theme.textMuted }]}>{note}</Text>}
    </View>
  );
}

/** One row inside a group; rows after the first get a hairline above. */
function Row({ first, label, children, onPress }: { first?: boolean; label?: string; children?: React.ReactNode; onPress?: () => void }) {
  const { theme } = useSettings();
  const body = (
    <View style={[s.row, { borderTopWidth: first ? 0 : StyleSheet.hairlineWidth, borderColor: theme.cardBorder }]}>
      {label && <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>{label}</Text>}
      {children}
    </View>
  );
  return onPress ? (
    <Pressable onPress={onPress} accessibilityRole="button" style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
      {body}
    </Pressable>
  ) : (
    body
  );
}

/** A labelled block inside a group, for choices that need the full width. */
function Block({ first, label, children }: { first?: boolean; label: string; children: React.ReactNode }) {
  const { theme } = useSettings();
  return (
    <View style={[s.block, { borderTopWidth: first ? 0 : StyleSheet.hairlineWidth, borderColor: theme.cardBorder }]}>
      <Text style={{ color: theme.textMuted, fontSize: 14, marginBottom: 8 }}>{label}</Text>
      {children}
    </View>
  );
}

export default function SettingsScreen() {
  const { theme, settings, update } = useSettings();
  const { tr } = useI18n();
  const [picker, setPicker] = useState(false);
  const toggle = (value: boolean, onChange: (v: boolean) => void) => <Switch value={value} onValueChange={onChange} trackColor={{ true: theme.accent }} />;
  const largePrint = settings.fontScale >= 1.5 && settings.theme === 'contrast';
  const scripts = SCRIPTS.map((x) => ({ id: x.id as ScriptId, label: x.native }));
  const reminders = settings.festivalReminders;
  // Switching a reminder on asks for notification permission first: refused, the switch would
  // stay on while nothing is ever delivered.
  const setReminder = async (kind: 'ekadashi' | 'festivals', on: boolean) => {
    if (on && !(await ensurePermission())) {
      Alert.alert(tr('Reminders are off'), tr('Notifications are turned off for this app. Allow them in the phone’s settings to get reminders.'), [
        { text: tr('Not now'), style: 'cancel' },
        { text: tr('Open settings'), onPress: () => Linking.openSettings().catch(() => {}) },
      ]);
      return;
    }
    update({ festivalReminders: { ...settings.festivalReminders, [kind]: on } });
  };

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <Group title={tr('LANGUAGE')} note={tr('Mantras are shown in the reading script. With Auto, meanings and the app language follow it.')}>
        <Block first label={tr('Reading script')}>
          <Pills options={scripts} value={settings.script} onChange={(v) => update({ script: v })} />
        </Block>
        <Block label={tr('App language')}>
          <Pills options={UI_PREFS.map((m) => ({ id: m.id, label: m.id === 'auto' ? tr('Auto') : m.label }))} value={settings.uiLang ?? 'auto'} onChange={(v) => update({ uiLang: v })} />
        </Block>
        <Block label={tr('Meanings in')}>
          <Pills options={MEANING_PREFS.map((m) => ({ id: m.id, label: m.id === 'auto' ? tr('Auto') : m.id === 'both' ? tr('Both') : m.label }))} value={settings.meaningLang} onChange={(v) => update({ meaningLang: v })} />
        </Block>
        <Block label={tr('Second script under each verse (for learning)')}>
          <Pills options={[{ id: null, label: tr('None') }, ...scripts]} value={settings.secondaryScript} onChange={(v) => update({ secondaryScript: v })} />
        </Block>
      </Group>

      <Group title={tr('TRADITION AND PLACE')} note={tr('Tradition sets the default steps for Sandhyavandane and puja, and the Ekadashi rule. Place sets sunrise and the calendar.')}>
        <Block first label={tr('Tradition')}>
          <Segmented
            options={[
              { id: 'madhva', label: tr('Madhva') },
              { id: 'smarta', label: tr('Smarta') },
            ]}
            value={settings.variants.tradition === 'smarta' ? 'smarta' : 'madhva'}
            onChange={(v) => update({ variants: { ...settings.variants, tradition: v } })}
          />
        </Block>
        {settings.variants.tradition !== 'smarta' && (
          <Block label={tr('Matha (for aradhanas of its pontiffs)')}>
            <Pills<MathaId>
              options={MATHA_OPTIONS.map((m) => ({ id: m.id, label: tr(m.label) }))}
              value={mathaOf(settings.variants)}
              onChange={(v) => update({ variants: { ...settings.variants, matha: v } })}
            />
            <Text style={{ color: theme.textMuted, fontSize: 13, lineHeight: 18, marginTop: 8 }}>
              {tr(MATHA_OPTIONS.find((m) => m.id === mathaOf(settings.variants))?.hint ?? 'Common observances only')}
              {' · '}
              {tr('Shown in the Panchanga, Calendar and Festivals.')}
            </Text>
          </Block>
        )}
        <Row label={cityLabel(cityById(settings.city))} onPress={() => setPicker(true)}>
          <Text style={{ color: theme.accent, fontSize: 16 }}>{tr('Change')}</Text>
        </Row>
      </Group>
      <CityPicker visible={picker} onClose={() => setPicker(false)} />

      <Group title={tr('TEXT')}>
        <View style={[s.sample, { backgroundColor: theme.page, borderColor: theme.pageEdge }]}>
          <Text style={{ color: theme.text, fontSize: 21 * settings.fontScale, lineHeight: 22 * settings.fontScale * leading(settings.script, settings.bookFonts), fontFamily: scriptFont(settings.script, settings.bookFonts), textAlign: settings.centerVerses ? 'center' : 'left' }}>
            {translit(SAMPLE, settings.script)}
          </Text>
        </View>
        <Row label={tr('Size')}>
          <View style={[s.stepper, { borderColor: theme.cardBorder }]}>
            <Pressable onPress={() => update({ fontScale: Math.max(0.7, +(settings.fontScale - 0.1).toFixed(1)) })} hitSlop={8} accessibilityLabel={tr('Smaller text')} style={s.stepBtn}>
              <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>A−</Text>
            </Pressable>
            <Text style={{ color: theme.text, fontSize: 16, minWidth: 46, textAlign: 'center' }}>{Math.round(settings.fontScale * 100)}%</Text>
            <Pressable onPress={() => update({ fontScale: Math.min(2.4, +(settings.fontScale + 0.1).toFixed(1)) })} hitSlop={8} accessibilityLabel={tr('Larger text')} style={s.stepBtn}>
              <Text style={{ color: theme.accent, fontSize: 21, fontWeight: '700' }}>A+</Text>
            </Pressable>
          </View>
        </Row>
        <Row label={tr('Large print (big text, high contrast)')}>
          {toggle(largePrint, (v) => update(v ? { fontScale: 1.6, theme: 'contrast', bookFonts: true } : { fontScale: 1, theme: 'system' }))}
        </Row>
        <Row label={tr('Book fonts')}>{toggle(settings.bookFonts, (v) => update({ bookFonts: v }))}</Row>
        <Row label={tr('Centre verses, as in printed books')}>{toggle(settings.centerVerses, (v) => update({ centerVerses: v }))}</Row>
      </Group>

      <Group title={tr('LOOK')}>
        <Block first label={tr('Theme')}>
          <ThemeSwatches withSystem />
        </Block>
        <Block label={tr('Reading layout')}>
          <Segmented
            options={[
              { id: 'book', label: tr('Book pages') },
              { id: 'scroll', label: tr('Scroll') },
            ]}
            value={settings.layout}
            onChange={(v) => update({ layout: v })}
          />
        </Block>
      </Group>

      <Group title={tr('READING')} note={tr('Meanings stay hidden until you tap Meaning under a verse, unless all are open.')}>
        <Row first label={tr('Show all meanings open')}>{toggle(settings.alwaysShowMeanings, (v) => update({ alwaysShowMeanings: v }))}</Row>
        <Row label={tr('Keep screen on while reading')}>{toggle(settings.keepAwake, (v) => update({ keepAwake: v }))}</Row>
      </Group>

      {remindersSupported && (
        <Group title={tr('REMINDERS')} note={tr('Dates follow your place, tradition and calendar choice. Tap a reminder to open the text for the day.')}>
          <Row first label={tr('Ekadashi, the evening before')}>{toggle(reminders.ekadashi, (v) => setReminder('ekadashi', v))}</Row>
          <Row label={tr('Major festivals, the evening before')}>{toggle(reminders.festivals, (v) => setReminder('festivals', v))}</Row>
          {(reminders.ekadashi || reminders.festivals) && (
            <Block label={tr('Remind me at')}>
              <Segmented options={TIMES.map((t) => ({ id: t, label: t }))} value={reminders.time} onChange={(t) => update({ festivalReminders: { ...reminders, time: t } })} />
            </Block>
          )}
        </Group>
      )}

      <Group title={tr('ABOUT')}>
        <Row first label={tr('About this app and sources')} onPress={() => router.push('/about')}>
          <MaterialCommunityIcons name="chevron-right" size={22} color={theme.textMuted} />
        </Row>
      </Group>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  card: { marginHorizontal: 16, borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  note: { fontSize: 14, lineHeight: 19, marginHorizontal: 28, marginTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 50, paddingHorizontal: 14, paddingVertical: 6 },
  block: { paddingHorizontal: 14, paddingVertical: 12 },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  pill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, borderWidth: 1 },
  sample: { margin: 12, padding: 14, borderRadius: 10, borderWidth: 1 },
  stepper: { flexDirection: 'row', alignItems: 'center', borderRadius: 12, borderWidth: 1 },
  stepBtn: { paddingHorizontal: 10, paddingVertical: 6 },
});
