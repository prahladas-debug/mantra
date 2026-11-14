import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, type Href } from 'expo-router';
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Pressable, Text, View } from 'react-native';
import { defaultRule, festivalsOn, type CalendarMode, type EkadashiRule, type Festival } from '../lib/festivals';
import { sauraDay, sauraSankalpa, type SauraStart } from '../lib/sauramana';
import { Chip } from './ui';
import { cityById, panchanga, todayIn } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { translit } from '../lib/transliterate';

// ---------- small persisted preferences shared by the pañcāṅga screens ----------

/** A string preference kept under its own AsyncStorage key, shared across screens. */
function makePref<T extends string>(key: string, allowed: readonly T[]) {
  let value: T | null | undefined; // undefined = not loaded yet
  const listeners = new Set<() => void>();
  const emit = () => listeners.forEach((l) => l());
  const subscribe = (l: () => void) => {
    listeners.add(l);
    if (value === undefined) {
      value = null;
      AsyncStorage.getItem(key)
        .then((v) => {
          if (v && (allowed as readonly string[]).includes(v)) {
            value = v as T;
            emit();
          }
        })
        .catch(() => {});
    }
    return () => {
      listeners.delete(l);
    };
  };
  const set = (v: T) => {
    value = v;
    AsyncStorage.setItem(key, v).catch(() => {});
    emit();
  };
  return { subscribe, get: () => value ?? null, set };
}

const rulePref = makePref<EkadashiRule>('mantra.panchanga.ekadashiRule', ['smarta', 'madhva']);
const modePref = makePref<CalendarMode>('mantra.panchanga.calendarMode', ['chandra', 'saura']);
const startPref = makePref<SauraStart>('mantra.panchanga.sauraStart', ['next', 'same']);

/**
 * The reader's ekādaśī rule: their explicit choice (stored under its own key), else the
 * tradition chosen for texts with variants (settings.variants.tradition), else Mādhva.
 */
export function useEkadashiRule(): [EkadashiRule, (r: EkadashiRule) => void] {
  const { settings } = useSettings();
  const stored = useSyncExternalStore(rulePref.subscribe, rulePref.get, () => null);
  const set = useCallback((r: EkadashiRule) => rulePref.set(r), []);
  return [stored ?? defaultRule(settings.variants.tradition), set];
}

/** Cāndramāna (lunar, default) or Sauramāna (solar, Udupi / Tuḷu Nāḍu) month reckoning. */
export function useCalendarMode(): [CalendarMode, (m: CalendarMode) => void] {
  const stored = useSyncExternalStore(modePref.subscribe, modePref.get, () => null);
  const set = useCallback((m: CalendarMode) => modePref.set(m), []);
  return [stored ?? 'chandra', set];
}

/** Sauramāna month start for a daytime saṅkrānti: the next day (default) or the same day. */
export function useSauraStart(): [SauraStart, (s: SauraStart) => void] {
  const stored = useSyncExternalStore(startPref.subscribe, startPref.get, () => null);
  const set = useCallback((s: SauraStart) => startPref.set(s), []);
  return [stored ?? 'next', set];
}

/** The two-chip Cāndramāna / Sauramāna switch. */
export function CalendarModeChips() {
  const [mode, setMode] = useCalendarMode();
  return (
    <>
      <Chip label="Cāndramāna" active={mode === 'chandra'} onPress={() => setMode('chandra')} />
      <Chip label="Sauramāna" active={mode === 'saura'} onPress={() => setMode('saura')} />
    </>
  );
}

/** Month-start choice, shown only in Sauramāna mode. */
export function SauraStartChips() {
  const { theme } = useSettings();
  const [mode] = useCalendarMode();
  const [start, setStart] = useSauraStart();
  if (mode !== 'saura') return null;
  return (
    <View style={{ gap: 4 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <Text style={{ color: theme.textMuted, fontSize: 13, width: 72 }}>Month start</Text>
        <Chip label="Next day" active={start === 'next'} onPress={() => setStart('next')} />
        <Chip label="Same day" active={start === 'same'} onPress={() => setStart('same')} />
      </View>
      <Text style={{ color: theme.textMuted, fontSize: 12 }}>
        When the saṅkrānti falls in the daytime, the new solar month starts the next day or that same day. Practice differs, even in Udupi.
      </Text>
    </View>
  );
}

/** Labelled rows: ekādaśī rule (Smārta/Mādhva) and calendar (Cāndramāna/Sauramāna). */
export function CalendarOptions({ rule, setRule }: { rule: string; setRule: (r: 'smarta' | 'madhva') => void }) {
  const { theme } = useSettings();
  const label = { color: theme.textMuted, fontSize: 13, width: 72 };
  const row = { flexDirection: 'row' as const, alignItems: 'center' as const, gap: 8, flexWrap: 'wrap' as const };
  return (
    <View style={{ gap: 8, marginTop: 10, marginHorizontal: 16 }}>
      <View style={row}>
        <Text style={label}>Tradition</Text>
        <Chip label="Smārta" active={rule === 'smarta'} onPress={() => setRule('smarta')} />
        <Chip label="Mādhva" active={rule === 'madhva'} onPress={() => setRule('madhva')} />
      </View>
      <View style={row}>
        <Text style={label}>Calendar</Text>
        <CalendarModeChips />
      </View>
      <SauraStartChips />
    </View>
  );
}

/** Today's date at the selected city. */
function useToday() {
  const { settings } = useSettings();
  const city = cityById(settings.city);
  const [, setTick] = useState(0);
  const today = todayIn(city);
  // Re-render every hour so the card does not go stale past midnight at the city.
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 3600000);
    return () => clearInterval(id);
  }, []);
  return { city, today };
}

function usePanchanga() {
  const { city, today } = useToday();
  const p = useMemo(() => panchanga(today, city), [city, today]);
  return { p, city, today };
}

/** Round ‹ / › button for day and month navigation. */
export function NavButton({ icon, label, onPress }: { icon: 'chevron-back' | 'chevron-forward'; label: string; onPress: () => void }) {
  const { theme } = useSettings();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={({ pressed }) => ({
        padding: 8, borderRadius: 20, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1,
      })}
    >
      <Ionicons name={icon} size={20} color={theme.accent} />
    </Pressable>
  );
}

/** One festival as a tappable line (opens the linked text when there is one). */
export function FestivalLine({ f, showDate }: { f: Festival; showDate?: boolean }) {
  const { theme, settings } = useSettings();
  const body = (
    <>
      <Text style={{ color: f.kind === 'ekadashi' ? theme.accent : theme.text, fontSize: 16, fontWeight: '600' }}>
        {showDate ? `${f.date.slice(8)}/${f.date.slice(5, 7)} · ` : ''}
        {translit(f.name, settings.script)}
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 1 }}>
        {f.en}
        {f.endDate ? ` (to ${f.endDate.slice(8)}/${f.endDate.slice(5, 7)})` : ''}
        {f.calendar === 'saura' ? ' · Sauramāna' : f.calendar === 'civil' ? ' · fixed date' : ''}
        {f.textId ? '  ·  read ›' : ''}
      </Text>
    </>
  );
  if (!f.textId) return <View style={{ paddingVertical: 4 }}>{body}</View>;
  return (
    <Pressable
      onPress={() => router.push(`/mantra/${f.textId}` as Href)}
      accessibilityRole="link"
      style={({ pressed }) => ({ paddingVertical: 4, opacity: pressed ? 0.6 : 1 })}
    >
      {body}
    </Pressable>
  );
}

/** Compact "today" card for the home screen. */
export function TodayCard() {
  const { theme, settings } = useSettings();
  const { p, city, today } = usePanchanga();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const fest = useMemo(() => festivalsOn(city, today, rule, mode, start), [city, today, rule, mode, start]);
  const saura = useMemo(() => (mode === 'saura' ? sauraDay(city, today, start) : null), [city, today, mode, start]);
  const t = (s: string) => translit(s, settings.script);
  return (
    <Pressable
      onPress={() => router.push('/panchanga')}
      style={({ pressed }) => ({
        marginHorizontal: 16, marginTop: 16, padding: 14, borderRadius: 14, borderWidth: 1,
        backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1,
      })}
      accessibilityRole="link"
    >
      <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 }}>
        TODAY · ಇಂದು · {city.name.toUpperCase()}
      </Text>
      <Text style={{ color: theme.accent, fontSize: 18, fontWeight: '700', marginTop: 4 }}>
        {saura
          ? `${t(`${saura.name} ${saura.day} · ${p.paksha} ${p.tithi}`)}`
          : t(`${p.adhika ? 'अधिक ' : ''}${p.masa} ${p.paksha} ${p.tithi}`)}
      </Text>
      {saura && (
        <Text style={{ color: theme.textMuted, fontSize: 13 }}>
          Sauramāna · {saura.tulu} {saura.day} · {t(`${p.adhika ? 'अधिक ' : ''}${p.masa}`)} (Cāndramāna)
        </Text>
      )}
      <Text style={{ color: theme.text, fontSize: 15, marginTop: 2 }}>
        {t(`${p.samvatsara} · ${p.nakshatra} · ${p.vasara}`)}
      </Text>
      {fest.length > 0 && (
        <Text style={{ color: theme.accent, fontSize: 15, fontWeight: '600', marginTop: 6 }}>
          {fest.map((f) => t(f.name)).join(' · ')}
        </Text>
      )}
    </Pressable>
  );
}

/** Saṅkalpa phrase for today, shown at the top of Sandhyāvandane / pūjā texts. */
export function SankalpaCard() {
  const { theme, settings } = useSettings();
  const { p, city, today } = usePanchanga();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const sankalpa = mode === 'saura' ? sauraSankalpa(p, sauraDay(city, today, start)) : p.sankalpa;
  return (
    <View style={{ marginTop: 14, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', marginBottom: 6 }}>
        Today’s saṅkalpa details · ಇಂದಿನ ಸಂಕಲ್ಪ ({city.name})
      </Text>
      <Text style={{ color: theme.text, fontSize: 17, lineHeight: 28 }} selectable>
        {translit(sankalpa, settings.script)}
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 6 }}>
        Use in place of the samvatsara…tithi placeholders. Computed for sunrise; change city in Pañcāṅga.
      </Text>
    </View>
  );
}
