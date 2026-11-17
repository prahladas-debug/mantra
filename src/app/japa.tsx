import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Stack, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Animated,
  Platform,
  Pressable,
  ScrollView,
  type ScrollViewInstance,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { Chip, SectionHeading } from '../components/ui';
import {
  BEADS_PER_MALA,
  chantInfo,
  customKey,
  dayTotal,
  JAPA_PRESETS,
  lastDays,
  useJapa,
  type ChantInfo,
} from '../lib/japa';
import { T, useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import type { Theme } from '../lib/theme';
import { translit, translitTitle, type ScriptId } from '../lib/transliterate';

const KEEP_AWAKE_TAG = 'japa-counter';
/** Let the screen sleep again after this long without a count. */
const AWAKE_IDLE_MS = 3 * 60 * 1000;
const NATIVE = Platform.OS !== 'web';

type Tr = ReturnType<typeof useI18n>['tr'];

const TARGETS: { label: string; value: number | null }[] = [
  { label: '108', value: 108 },
  { label: '1008', value: 1008 },
  { label: T('3 malas'), value: 3 * BEADS_PER_MALA },
  { label: T('11 malas'), value: 11 * BEADS_PER_MALA },
  { label: T('16 malas'), value: 16 * BEADS_PER_MALA },
  { label: T('Open'), value: null },
];

// Haptics are skipped on web (no Taptic engine; vibration there is more noise than calm).
const haptic = {
  tick: () => NATIVE && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {}),
  mala: () => NATIVE && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {}),
  target: () => NATIVE && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {}),
  soft: () => NATIVE && Haptics.selectionAsync().catch(() => {}),
};

/** First line of a chant, without its closing danda (for one-line lists). */
const firstLine = (t: string) => t.split('\n')[0].replace(/\s*[।॥]+\s*$/, '');
const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const malas = (n: number) => Math.floor(n / BEADS_PER_MALA);
const malaLabel = (tr: Tr, n: number) => (n === 1 ? tr('{n} mala', { n }) : tr('{n} malas', { n }));

function targetLabel(tr: Tr, t: number | null): string {
  if (t == null) return tr('open count');
  return t % BEADS_PER_MALA === 0 && t > BEADS_PER_MALA ? `${fmt(t)} (${malaLabel(tr, t / BEADS_PER_MALA)})` : fmt(t);
}

export default function JapaScreen() {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const { state, ready, increment, undo, reset, select, setTarget, forgetCustomLabel } = useJapa();
  const params = useLocalSearchParams<{ mantra?: string }>();
  const { width, height } = useWindowDimensions();

  const scrollRef = useRef<ScrollViewInstance>(null);
  const [picking, setPicking] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  // Preselect a library text passed as ?mantra=<id> (once storage has loaded).
  const preselected = useRef(false);
  useEffect(() => {
    if (!ready || preselected.current) return;
    preselected.current = true;
    if (typeof params.mantra === 'string' && params.mantra) select(params.mantra);
  }, [ready, params.mantra, select]);

  const currentKey = state.current;
  const chant = useMemo(() => chantInfo(currentKey), [currentKey]);
  const count = state.counts[state.current] ?? 0;
  const target = state.target;
  const today = dayTotal(state);
  const todayThis = lastDays(state, 1, state.current)[0].forKey;
  const allTime = state.totals[state.current] ?? 0;
  // The ring stays full on a completed mālā until the next bead is counted.
  const inRound = count > 0 && count % BEADS_PER_MALA === 0 ? BEADS_PER_MALA : count % BEADS_PER_MALA;

  // ---- keep the screen awake while counting ----
  const awake = useRef(false);
  const idle = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const release = useCallback(() => {
    clearTimeout(idle.current);
    if (!awake.current) return;
    awake.current = false;
    deactivateKeepAwake(KEEP_AWAKE_TAG).catch(() => {});
  }, []);
  const stayAwake = useCallback(() => {
    if (!settings.keepAwake) return;
    if (!awake.current) {
      awake.current = true;
      activateKeepAwakeAsync(KEEP_AWAKE_TAG).catch(() => {});
    }
    clearTimeout(idle.current);
    idle.current = setTimeout(release, AWAKE_IDLE_MS);
  }, [settings.keepAwake, release]);
  useFocusEffect(useCallback(() => release, [release]));
  useEffect(() => {
    if (!settings.keepAwake) release();
  }, [settings.keepAwake, release]);

  // ---- counting ----
  const pulse = useRef(new Animated.Value(1)).current;
  const onCount = useCallback(() => {
    if (!ready) return;
    const r = increment();
    stayAwake();
    setConfirmReset(false);
    if (r.targetDone) {
      haptic.target();
      AccessibilityInfo.announceForAccessibility(tr('Target reached: {count}', { count: fmt(r.count) }));
    } else if (r.malaDone) {
      haptic.mala();
      AccessibilityInfo.announceForAccessibility(tr('{mala} complete', { mala: malaLabel(tr, malas(r.count)) }));
    } else {
      haptic.tick();
    }
    pulse.setValue(0.965);
    Animated.spring(pulse, { toValue: 1, speed: 40, bounciness: 6, useNativeDriver: NATIVE }).start();
  }, [ready, increment, stayAwake, pulse, tr]);

  const onUndo = () => {
    if (count === 0) return;
    undo();
    haptic.soft();
  };

  // Web: the space bar counts too (unless typing in a field).
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== ' ' || e.repeat) return;
      if (e.target !== document.body) return;
      e.preventDefault();
      onCount();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onCount]);

  useEffect(() => {
    if (!confirmReset) return;
    const t = setTimeout(() => setConfirmReset(false), 6000);
    return () => clearTimeout(t);
  }, [confirmReset]);

  const ring = Math.round(Math.max(220, Math.min(width - 56, 320, height * 0.42)));
  const reached = target != null && count >= target;

  return (
    <ScrollView
      ref={scrollRef}
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={{ paddingBottom: 48 }}
      keyboardShouldPersistTaps="handled"
    >
      <Stack.Screen options={{ title: tr('Japa') }} />

      {/* ---- what is being chanted ---- */}
      <Pressable
        onPress={() => setPicking((p) => !p)}
        accessibilityRole="button"
        accessibilityLabel={tr('Chanting {name}. Change mantra', { name: chant.name })}
        accessibilityState={{ expanded: picking }}
        style={({ pressed }) => [
          s.card,
          { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <View style={{ flex: 1 }}>
          <ChantText chant={chant} script={settings.script} theme={theme} />
        </View>
        <View style={[s.changePill, { backgroundColor: theme.accentSoft }]}>
          <Text style={{ color: theme.accent, fontSize: 14, fontWeight: '600' }}>{picking ? tr('Done') : tr('Change')}</Text>
          <MaterialCommunityIcons name={picking ? 'chevron-up' : 'chevron-down'} size={18} color={theme.accent} />
        </View>
      </Pressable>

      {picking && (
        <ChantPicker
          current={state.current}
          customLabels={state.customLabels}
          script={settings.script}
          theme={theme}
          onPick={(key) => {
            select(key);
            setPicking(false);
            setConfirmReset(false);
            scrollRef.current?.scrollTo({ y: 0, animated: true });
          }}
          onForget={forgetCustomLabel}
        />
      )}

      {/* ---- target ---- */}
      <TargetPicker target={target} onChange={setTarget} theme={theme} />

      {/* ---- the counter: the whole area is the tap target ---- */}
      <Pressable
        onPress={onCount}
        accessibilityRole="button"
        accessibilityLabel={tr('Count one bead')}
        accessibilityHint={tr('Double tap to add one repetition')}
        accessibilityValue={{ text: target != null ? tr('{count} of {target}', { count: fmt(count), target: fmt(target) }) : fmt(count) }}
        style={[s.tapArea, { minHeight: ring + 150 }]}
      >
        {({ pressed }) => (
          <>
            <Animated.View style={{ transform: [{ scale: pulse }] }}>
              <BeadRing size={ring} filled={inRound} theme={theme} />
              <View style={[StyleSheet.absoluteFill, s.center]} pointerEvents="none">
                <View
                  style={[
                    s.disc,
                    {
                      width: ring * 0.7,
                      height: ring * 0.7,
                      borderRadius: ring * 0.35,
                      backgroundColor: pressed ? theme.accentSoft : theme.card,
                      borderColor: theme.cardBorder,
                    },
                  ]}
                >
                  <Text
                    style={[s.count, { color: theme.text, fontSize: Math.round(ring * (count >= 10000 ? 0.15 : 0.2)) }]}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                  >
                    {fmt(count)}
                  </Text>
                  <Text style={{ color: reached ? theme.accent : theme.textMuted, fontSize: 14, fontWeight: reached ? '700' : '400' }}>
                    {reached ? tr('Target reached') : target != null ? tr('of {target}', { target: fmt(target) }) : tr('open count')}
                  </Text>
                </View>
              </View>
            </Animated.View>

            <View style={s.stats}>
              <Stat label={tr('Mala')} value={fmt(malas(count))} theme={theme} />
              <Stat label={tr('This round')} value={`${inRound}/${BEADS_PER_MALA}`} theme={theme} />
              <Stat label={tr('Today')} value={fmt(today)} theme={theme} />
            </View>
            {target != null && (
              <View style={[s.track, { backgroundColor: theme.accentSoft }]}>
                <View style={[s.fill, { backgroundColor: theme.accent, width: `${Math.min(100, (count / target) * 100)}%` }]} />
              </View>
            )}
            <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 10 }}>
              {count === 0 ? tr('Tap anywhere here to count') : tr('Target {target}', { target: targetLabel(tr, target) })}
            </Text>
          </>
        )}
      </Pressable>

      {/* ---- undo / reset ---- */}
      <View style={s.controls}>
        {confirmReset ? (
          <>
            <Text style={{ color: theme.text, fontSize: 16, flex: 1 }}>{tr('Reset to 0?')}</Text>
            <ControlButton icon="close" label={tr('Cancel')} onPress={() => setConfirmReset(false)} theme={theme} />
            <ControlButton
              icon="refresh"
              label={tr('Reset')}
              strong
              onPress={() => {
                reset();
                haptic.soft();
                setConfirmReset(false);
                AccessibilityInfo.announceForAccessibility(tr('Count reset'));
              }}
              theme={theme}
            />
          </>
        ) : (
          <>
            <ControlButton
              icon="undo"
              label="−1"
              a11y={tr('Undo one bead')}
              disabled={count === 0}
              onPress={onUndo}
              theme={theme}
            />
            <View style={{ flex: 1 }} />
            <ControlButton
              icon="refresh"
              label={tr('Reset')}
              a11y={tr('Reset count')}
              disabled={count === 0}
              onPress={() => setConfirmReset(true)}
              theme={theme}
            />
          </>
        )}
      </View>
      <Text style={[s.note, { color: theme.textMuted }]}>
        {tr('Reset starts the count again; your history is kept.')}
        {'\n'}
        {tr('{name}: {today} today · {all} in all ({malas})', { name: chant.name, today: fmt(todayThis), all: fmt(allTime), malas: malaLabel(tr, malas(allTime)) })}
      </Text>

      <History state={state} chantKey={state.current} theme={theme} />
      <Totals totals={state.totals} current={state.current} script={settings.script} theme={theme} />
    </ScrollView>
  );
}

// ---------------------------------------------------------------- pieces

function ChantText({ chant, script, theme }: { chant: ChantInfo; script: ScriptId; theme: Theme }) {
  const { tr } = useI18n();
  if (chant.custom) {
    return (
      <>
        <Text style={[s.kicker, { color: theme.textMuted }]}>{tr('Chanting')}</Text>
        <Text style={{ color: theme.text, fontSize: 21, fontWeight: '600' }} numberOfLines={2}>
          {chant.name}
        </Text>
      </>
    );
  }
  const showTitle = !!chant.title && (chant.long || !JAPA_PRESETS.find((p) => p.id === chant.key && p.text));
  return (
    <>
      <Text style={[s.kicker, { color: theme.textMuted }]}>{tr('Chanting · {name}', { name: chant.name })}</Text>
      {showTitle && (
        <Text style={{ color: theme.text, fontSize: 18, fontWeight: '600', marginBottom: 4 }} numberOfLines={1}>
          {translitTitle(chant.title!, script)}
        </Text>
      )}
      {!!chant.line && (
        <Text
          style={{ color: showTitle ? theme.textMuted : theme.text, fontSize: showTitle ? 16 : 21, lineHeight: showTitle ? 25 : 32 }}
          numberOfLines={chant.long ? 3 : undefined}
        >
          {translit(chant.line, script)}
        </Text>
      )}
    </>
  );
}

function ChantPicker({
  current,
  customLabels,
  script,
  theme,
  onPick,
  onForget,
}: {
  current: string;
  customLabels: string[];
  script: ScriptId;
  theme: Theme;
  onPick: (key: string) => void;
  onForget: (label: string) => void;
}) {
  const { tr } = useI18n();
  const [text, setText] = useState('');
  const submit = () => {
    if (text.trim()) onPick(customKey(text));
  };
  const currentIsLibrary = !JAPA_PRESETS.some((p) => p.id === current) && !current.startsWith('custom:');
  const lib = currentIsLibrary ? chantInfo(current) : null;
  return (
    <View style={{ marginHorizontal: 16, marginTop: 4 }}>
      {lib && (
        <PickRow
          main={lib.title ? translitTitle(lib.title, script) : lib.name}
          sub={tr('{name} · from the library', { name: lib.name })}
          active
          onPress={() => onPick(current)}
          theme={theme}
        />
      )}
      {JAPA_PRESETS.map((p) => {
        const info = chantInfo(p.id);
        const main = p.text ? translit(firstLine(p.text), script) : translitTitle(info.title ?? p.en, script);
        return (
          <PickRow
            key={p.id}
            main={main}
            sub={p.en}
            active={current === p.id}
            onPress={() => onPick(p.id)}
            theme={theme}
          />
        );
      })}

      <Text style={[s.kicker, { color: theme.textMuted, marginTop: 14 }]}>{tr('Or your own')}</Text>
      {customLabels.length > 0 && (
        <View style={s.wrap}>
          {customLabels.map((l) => (
            <Pressable
              key={l}
              onPress={() => onPick(customKey(l))}
              onLongPress={() => onForget(l)}
              accessibilityRole="button"
              accessibilityLabel={tr('Chant {name}', { name: l })}
              accessibilityHint={tr('Long press to remove from this list')}
              style={[
                s.chipLike,
                {
                  backgroundColor: current === customKey(l) ? theme.accent : theme.card,
                  borderColor: current === customKey(l) ? theme.accent : theme.cardBorder,
                },
              ]}
            >
              <Text style={{ color: current === customKey(l) ? theme.onAccent : theme.text, fontSize: 16 }}>{l}</Text>
            </Pressable>
          ))}
        </View>
      )}
      <View style={[s.inputRow, { marginTop: 8 }]}>
        <TextInput
          value={text}
          onChangeText={setText}
          onSubmitEditing={submit}
          returnKeyType="done"
          maxLength={80}
          placeholder={tr('Type a name, e.g. Om Shri Gurubhyo namah')}
          placeholderTextColor={theme.textMuted}
          accessibilityLabel={tr('Your own mantra name')}
          style={[s.input, { backgroundColor: theme.card, borderColor: theme.cardBorder, color: theme.text }]}
        />
        <Pressable
          onPress={submit}
          disabled={!text.trim()}
          accessibilityRole="button"
          accessibilityLabel={tr('Use this name')}
          style={[s.smallBtn, { backgroundColor: theme.accent, opacity: text.trim() ? 1 : 0.4 }]}
        >
          <Text style={{ color: theme.onAccent, fontWeight: '700' }}>{tr('Use')}</Text>
        </Pressable>
      </View>
    </View>
  );
}

function PickRow({
  main,
  sub,
  active,
  onPress,
  theme,
}: {
  main: string;
  sub: string;
  active: boolean;
  onPress: () => void;
  theme: Theme;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={sub}
      accessibilityState={{ selected: active }}
      style={({ pressed }) => [
        s.pickRow,
        {
          backgroundColor: active ? theme.accentSoft : theme.card,
          borderColor: active ? theme.accent : theme.cardBorder,
          opacity: pressed ? 0.75 : 1,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ color: theme.text, fontSize: 18 }} numberOfLines={1}>
          {main}
        </Text>
        <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 1 }}>{sub}</Text>
      </View>
      {active && <MaterialCommunityIcons name="check-circle" size={22} color={theme.accent} />}
    </Pressable>
  );
}

function TargetPicker({
  target,
  onChange,
  theme,
}: {
  target: number | null;
  onChange: (t: number | null) => void;
  theme: Theme;
}) {
  const { tr } = useI18n();
  const preset = TARGETS.some((t) => t.value === target);
  const [custom, setCustom] = useState(false);
  const [num, setNum] = useState('');
  const [unit, setUnit] = useState<'beads' | 'malas'>('malas');
  const n = parseInt(num, 10);
  const value = Number.isFinite(n) && n > 0 ? (unit === 'malas' ? n * BEADS_PER_MALA : n) : null;
  const apply = () => {
    if (value == null) return;
    onChange(value);
    setCustom(false);
  };
  return (
    <>
      <SectionHeading>{tr('Target')}</SectionHeading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}>
        {TARGETS.map((t) => (
          <Chip
            key={t.label}
            label={tr(t.label)}
            active={!custom && target === t.value}
            onPress={() => {
              setCustom(false);
              onChange(t.value);
            }}
          />
        ))}
        <Chip
          label={!preset && target != null && !custom ? tr('Custom · {n}', { n: fmt(target) }) : tr('Custom…')}
          active={custom || (!preset && target != null)}
          onPress={() => setCustom((c) => !c)}
        />
      </ScrollView>
      {custom && (
        <View style={[s.inputRow, { marginHorizontal: 16, marginTop: 10 }]}>
          <TextInput
            value={num}
            onChangeText={(t) => setNum(t.replace(/[^0-9]/g, '').slice(0, 6))}
            onSubmitEditing={apply}
            keyboardType="number-pad"
            returnKeyType="done"
            placeholder={unit === 'malas' ? tr('e.g. 21') : tr('e.g. 500')}
            placeholderTextColor={theme.textMuted}
            accessibilityLabel={unit === 'malas' ? tr('Target in malas') : tr('Target in beads')}
            style={[s.input, { backgroundColor: theme.card, borderColor: theme.cardBorder, color: theme.text, maxWidth: 110 }]}
          />
          <Chip label={tr('malas')} active={unit === 'malas'} onPress={() => setUnit('malas')} />
          <Chip label={tr('beads')} active={unit === 'beads'} onPress={() => setUnit('beads')} />
          <Pressable
            onPress={apply}
            disabled={value == null}
            accessibilityRole="button"
            accessibilityLabel={value != null ? tr('Set target to {value}', { value }) : tr('Set target')}
            style={[s.smallBtn, { backgroundColor: theme.accent, opacity: value != null ? 1 : 0.4 }]}
          >
            <Text style={{ color: theme.onAccent, fontWeight: '700' }}>{tr('Set')}</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

/** 108 beads on a circle, with the meru (guru) bead at the top. */
const BeadRing = memo(function BeadRing({ size, filled, theme }: { size: number; filled: number; theme: Theme }) {
  const beads = useMemo(() => {
    const slots = BEADS_PER_MALA + 1; // + meru
    const bead = Math.max(4, Math.min(8, ((Math.PI * size) / slots) * 0.62));
    const r = size / 2 - 10;
    return Array.from({ length: slots }, (_, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / slots;
      const d = i === 0 ? bead * 2.1 : bead;
      return { left: size / 2 + r * Math.cos(a) - d / 2, top: size / 2 + r * Math.sin(a) - d / 2, d };
    });
  }, [size]);
  return (
    <View style={{ width: size, height: size }} importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
      {beads.map((b, i) => {
        const meru = i === 0;
        const on = !meru && i <= filled;
        const latest = !meru && i === filled;
        const d = latest ? b.d * 1.6 : b.d;
        return (
          <View
            key={i}
            style={{
              position: 'absolute',
              left: b.left - (d - b.d) / 2,
              top: b.top - (d - b.d) / 2,
              width: d,
              height: d,
              borderRadius: d / 2,
              backgroundColor: meru ? theme.accent : on ? theme.accent : theme.cardBorder,
              opacity: meru ? 0.9 : 1,
              borderWidth: meru ? 2 : 0,
              borderColor: theme.bg,
            }}
          />
        );
      })}
    </View>
  );
});

function Stat({ label, value, theme }: { label: string; value: string; theme: Theme }) {
  return (
    <View style={s.stat} accessible accessibilityLabel={`${label}: ${value}`}>
      <Text style={[s.statValue, { color: theme.text }]}>{value}</Text>
      <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 2 }}>{label}</Text>
    </View>
  );
}

function ControlButton({
  icon,
  label,
  a11y,
  onPress,
  disabled,
  strong,
  theme,
}: {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  a11y?: string;
  onPress: () => void;
  disabled?: boolean;
  strong?: boolean;
  theme: Theme;
}) {
  const fg = strong ? theme.onAccent : theme.text;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={a11y ?? label}
      accessibilityState={{ disabled: !!disabled }}
      hitSlop={6}
      style={({ pressed }) => [
        s.ctrl,
        {
          backgroundColor: strong ? theme.accent : theme.card,
          borderColor: strong ? theme.accent : theme.cardBorder,
          opacity: disabled ? 0.4 : pressed ? 0.7 : 1,
        },
      ]}
    >
      <MaterialCommunityIcons name={icon} size={22} color={fg} />
      <Text style={{ color: fg, fontSize: 16, fontWeight: '600' }}>{label}</Text>
    </Pressable>
  );
}

const WEEKDAY = [T('Sun'), T('Mon'), T('Tue'), T('Wed'), T('Thu'), T('Fri'), T('Sat')];

function History({ state, chantKey, theme }: { state: ReturnType<typeof useJapa>['state']; chantKey: string; theme: Theme }) {
  const { tr } = useI18n();
  const days = lastDays(state, 7, chantKey);
  const max = Math.max(1, ...days.map((d) => d.total));
  const week = days.reduce((a, d) => a + d.total, 0);
  const maxIdx = days.findIndex((d) => d.total === max);
  const H = 88;
  return (
    <>
      <SectionHeading>{tr('Last 7 days')}</SectionHeading>
      <View style={[s.panel, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
        <Text style={{ color: theme.textMuted, fontSize: 14, marginBottom: 12 }}>
          {tr('All chants · {week} this week ({malas})', { week: fmt(week), malas: malaLabel(tr, malas(week)) })}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: H + 20 }}>
          {days.map((d, i) => {
            const isToday = i === days.length - 1;
            const [y, m, dd] = d.date.split('-').map(Number);
            const wd = tr(WEEKDAY[new Date(y, m - 1, dd).getDay()]);
            const h = d.total ? Math.max(4, (d.total / max) * H) : 2;
            const showValue = d.total > 0 && (isToday || i === maxIdx);
            return (
              <View
                key={d.date}
                style={{ flex: 1, alignItems: 'center' }}
                accessible
                accessibilityLabel={`${isToday ? tr('Today') : wd} ${dd}: ${fmt(d.total)}`}
              >
                <Text style={{ color: theme.textMuted, fontSize: 13, marginBottom: 4, opacity: showValue ? 1 : 0 }}>
                  {fmt(d.total)}
                </Text>
                <View
                  style={{
                    width: 22,
                    height: h,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    backgroundColor: d.total ? theme.accent : theme.cardBorder,
                  }}
                />
              </View>
            );
          })}
        </View>
        <View style={{ flexDirection: 'row', borderTopWidth: StyleSheet.hairlineWidth, borderColor: theme.cardBorder, paddingTop: 6 }}>
          {days.map((d, i) => {
            const [y, m, dd] = d.date.split('-').map(Number);
            const isToday = i === days.length - 1;
            return (
              <Text
                key={d.date}
                style={{ flex: 1, textAlign: 'center', fontSize: 13, color: isToday ? theme.text : theme.textMuted, fontWeight: isToday ? '700' : '400' }}
                importantForAccessibility="no"
              >
                {isToday ? tr('Today') : tr(WEEKDAY[new Date(y, m - 1, dd).getDay()])}
              </Text>
            );
          })}
        </View>
      </View>
    </>
  );
}

function Totals({
  totals,
  current,
  script,
  theme,
}: {
  totals: Record<string, number>;
  current: string;
  script: ScriptId;
  theme: Theme;
}) {
  const { tr } = useI18n();
  const rows = Object.entries(totals)
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  if (!rows.length) return null;
  return (
    <>
      <SectionHeading>{tr('All-time')}</SectionHeading>
      <View style={[s.panel, { backgroundColor: theme.card, borderColor: theme.cardBorder, paddingVertical: 4 }]}>
        {rows.map(([key, n], i) => {
          const info = chantInfo(key);
          const preset = JAPA_PRESETS.find((p) => p.id === key);
          const native = info.custom
            ? null
            : preset?.text
              ? translit(firstLine(preset.text), script)
              : info.title
                ? translitTitle(info.title, script)
                : null;
          return (
            <View
              key={key}
              style={[
                s.totalRow,
                i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderColor: theme.cardBorder },
              ]}
              accessible
              accessibilityLabel={`${info.name}: ${fmt(n)}, ${malaLabel(tr, malas(n))}`}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: theme.text, fontSize: 16, fontWeight: key === current ? '700' : '400' }} numberOfLines={1}>
                  {native ?? info.name}
                </Text>
                {native && (
                  <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={1}>
                    {info.name}
                  </Text>
                )}
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={[s.tabular, { color: theme.text, fontSize: 16, fontWeight: '600' }]}>{fmt(n)}</Text>
                <Text style={{ color: theme.textMuted, fontSize: 13 }}>{malaLabel(tr, malas(n))}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
}

const s = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  kicker: { fontSize: 13, fontWeight: '700', letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 6 },
  changePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  pickRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 8,
  },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chipLike: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1 },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  input: { flex: 1, borderWidth: 1, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16 },
  smallBtn: { paddingHorizontal: 16, paddingVertical: 11, borderRadius: 12 },
  tapArea: { alignItems: 'center', justifyContent: 'center', paddingVertical: 20, marginTop: 8 },
  center: { alignItems: 'center', justifyContent: 'center' },
  disc: { alignItems: 'center', justifyContent: 'center', borderWidth: 1 },
  count: { fontWeight: '300', fontVariant: ['tabular-nums'], letterSpacing: -1 },
  stats: { flexDirection: 'row', alignSelf: 'stretch', marginHorizontal: 24, marginTop: 18 },
  stat: { flex: 1, alignItems: 'center' },
  statValue: { fontSize: 21, fontWeight: '600', fontVariant: ['tabular-nums'] },
  track: { height: 4, borderRadius: 2, alignSelf: 'stretch', marginHorizontal: 40, marginTop: 16, overflow: 'hidden' },
  fill: { height: 4, borderRadius: 2 },
  controls: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 4 },
  ctrl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 24,
    borderWidth: 1,
    minHeight: 44,
  },
  note: { fontSize: 14, lineHeight: 20, marginHorizontal: 16, marginTop: 12 },
  panel: { marginHorizontal: 16, padding: 14, borderRadius: 16, borderWidth: 1 },
  totalRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, gap: 12 },
  tabular: { fontVariant: ['tabular-nums'] },
});
