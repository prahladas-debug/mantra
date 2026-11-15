import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, type Href } from 'expo-router';
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Pressable, Text, View } from 'react-native';
import { defaultRule, festivalsOn, type CalendarMode, type EkadashiRule, type Festival } from '../lib/festivals';
import { sauraDay, sauraSankalpa, type SauraStart } from '../lib/sauramana';
import { addDays, cityById, panchanga, setCalcMethod, todayIn, type CalcMethod } from '../lib/panchanga';
import { getMantraInfo } from '../data';
import { useSettings } from '../lib/settings';
import { plain } from '../lib/plain';
import { translit } from '../lib/transliterate';

// ---------- small persisted preferences shared by the pañcāṅga screens ----------

/** A string preference kept under its own AsyncStorage key, shared across screens.
 *  `onChange` runs whenever the value is loaded or set, before the screens re-render. */
function makePref<T extends string>(key: string, allowed: readonly T[], onChange?: (v: T) => void) {
  let value: T | null | undefined; // undefined = not loaded yet
  const listeners = new Set<() => void>();
  const emit = () => {
    if (value) onChange?.(value);
    listeners.forEach((l) => l());
  };
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
// The pañcāṅga library keeps the method module-wide; the preference drives it.
const calcPref = makePref<CalcMethod>('mantra.panchanga.calcMethod', ['drik', 'surya'], setCalcMethod);

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

/**
 * Calculation method: drik (modern positions, default) or the Surya Siddhanta, as in matha
 * panchangas. The preference also sets it in the library (setCalcMethod) as soon as it is
 * loaded or changed, so every computation follows; still pass the returned value to the
 * library calls and memo deps, so screens recompute when it changes.
 */
export function useCalcMethod(): [CalcMethod, (m: CalcMethod) => void] {
  const stored = useSyncExternalStore(calcPref.subscribe, calcPref.get, () => null);
  const set = useCallback((m: CalcMethod) => calcPref.set(m), []);
  return [stored ?? 'drik', set];
}

/** "Drik" / "Surya Siddhanta" for labels. */
export const calcMethodLabel = (m: CalcMethod) => (m === 'surya' ? 'Surya Siddhanta' : 'Drik');

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
  const [method] = useCalcMethod();
  const p = useMemo(() => panchanga(today, city, method), [city, today, method]);
  return { p, city, today, method };
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

/** One festival: name, plain-English name, a "read" link to its text and an ⓘ that opens its note. */
export function FestivalLine({ f, showDate, showNote }: { f: Festival; showDate?: boolean; showNote?: boolean }) {
  const { theme, settings } = useSettings();
  const [open, setOpen] = useState(!!showNote);
  return (
    <View style={{ paddingVertical: 5 }}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8 }}>
        <Pressable
          disabled={!f.textId}
          onPress={() => router.push(`/mantra/${f.textId}` as Href)}
          accessibilityRole={f.textId ? 'link' : undefined}
          style={({ pressed }) => ({ flex: 1, opacity: pressed ? 0.6 : 1 })}
        >
          <Text style={{ color: f.kind === 'ekadashi' ? theme.accent : theme.text, fontSize: 16, fontWeight: '600' }}>
            {showDate ? `${f.date.slice(8)}/${f.date.slice(5, 7)} · ` : ''}
            {translit(f.name, settings.script)}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 1 }}>
            {plain(f.en)}
            {f.endDate ? ` (to ${f.endDate.slice(8)}/${f.endDate.slice(5, 7)})` : ''}
            {f.textId ? <Text style={{ color: theme.accent }}>{'  ·  read ›'}</Text> : null}
          </Text>
          {f.parana && (
            <Text style={{ color: theme.text, fontSize: 13, marginTop: 1 }}>
              Parana (break the fast): {f.parana.label}
              {f.parana.note ? <Text style={{ color: theme.textMuted }}>{` — ${plain(f.parana.note)}`}</Text> : null}
            </Text>
          )}
        </Pressable>
        {f.note && !showNote ? (
          <Pressable onPress={() => setOpen(!open)} hitSlop={10} accessibilityRole="button" accessibilityLabel={open ? 'Hide details' : 'Show details'}>
            <Ionicons name={open ? 'information-circle' : 'information-circle-outline'} size={20} color={theme.textMuted} />
          </Pressable>
        ) : null}
      </View>
      {open && f.note ? <Text style={{ color: theme.textMuted, fontSize: 13, lineHeight: 18, marginTop: 3 }}>{plain(f.note)}</Text> : null}
    </View>
  );
}

/** Home card: today's month and tithi, today's festival with its text, and tomorrow's observance. */
export function TodayCard() {
  const { theme, settings } = useSettings();
  const { p, city, today, method } = usePanchanga();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const fest = useMemo(() => festivalsOn(city, today, rule, mode, start, method), [city, today, rule, mode, start, method]);
  const tomorrow = useMemo(
    () => festivalsOn(city, addDays(today, 1), rule, mode, start, method).filter((f) => f.kind === 'ekadashi' || f.kind === 'festival'),
    [city, today, rule, mode, start, method],
  );
  const saura = useMemo(() => (mode === 'saura' ? sauraDay(city, today, start, method) : null), [city, today, mode, start, method]);
  const breakFast = useMemo(
    () => festivalsOn(city, addDays(today, -1), rule, mode, start, method).find((f) => f.kind === 'ekadashi' && f.parana?.date === today)?.parana,
    [city, today, rule, mode, start, method],
  );
  const t = (s: string) => translit(s, settings.script);
  const read = (id: string | undefined) => (id ? getMantraInfo(id) : undefined);
  return (
    <View style={{ marginHorizontal: 16, marginTop: 16, borderRadius: 14, borderWidth: 1, backgroundColor: theme.card, borderColor: theme.cardBorder, overflow: 'hidden' }}>
      <Pressable onPress={() => router.push({ pathname: '/panchanga', params: { date: today } } as Href)} style={({ pressed }) => ({ padding: 14, opacity: pressed ? 0.7 : 1 })} accessibilityRole="link">
        <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 }}>
          TODAY · {city.name.toUpperCase()}
        </Text>
        <Text style={{ color: theme.accent, fontSize: 18, fontWeight: '700', marginTop: 4 }}>
          {saura
            ? `${t(`${saura.name} ${saura.day} · ${p.paksha} ${p.tithi}`)}`
            : t(`${p.adhika ? 'अधिक ' : ''}${p.masa} ${p.paksha} ${p.tithi}`)}
        </Text>
        <Text style={{ color: theme.text, fontSize: 15, marginTop: 2 }}>
          {t(`${p.samvatsara} · ${p.nakshatra} · ${p.vasara}`)}
        </Text>
      </Pressable>
      {fest.map((f) => {
        const m = read(f.textId);
        return (
          <Pressable
            key={f.key}
            disabled={!m}
            onPress={() => m && router.push(`/mantra/${m.id}` as Href)}
            style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 14, paddingVertical: 10, borderTopWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.accentSoft, opacity: pressed ? 0.7 : 1 })}
            accessibilityRole={m ? 'link' : undefined}
          >
            <Ionicons name={f.kind === 'ekadashi' ? 'moon-outline' : 'sparkles-outline'} size={18} color={theme.accent} />
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '600' }}>{t(f.name)}</Text>
              {m && <Text style={{ color: theme.text, fontSize: 13 }}>Read: {m.titleEn} ›</Text>}
              {f.parana && <Text style={{ color: theme.textMuted, fontSize: 12 }}>Parana {f.parana.label}</Text>}
            </View>
          </Pressable>
        );
      })}
      {breakFast && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 14, paddingVertical: 10, borderTopWidth: 1, borderColor: theme.cardBorder }}>
          <Ionicons name="restaurant-outline" size={18} color={theme.accent} />
          <Text style={{ color: theme.text, fontSize: 14, flex: 1 }}>
            Break the Ekadashi fast today: <Text style={{ fontWeight: '700' }}>{breakFast.label.replace(/ on .*$/, '')}</Text>
            {breakFast.note ? <Text style={{ color: theme.textMuted, fontSize: 12 }}>{`\n${plain(breakFast.note)}`}</Text> : null}
          </Text>
        </View>
      )}
      {tomorrow.length > 0 && (
        <View style={{ paddingHorizontal: 14, paddingVertical: 9, borderTopWidth: 1, borderColor: theme.cardBorder }}>
          <Text style={{ color: theme.textMuted, fontSize: 13 }}>
            Tomorrow: <Text style={{ color: theme.text }}>{tomorrow.map((f) => plain(f.en)).join(' · ')}</Text>
          </Text>
        </View>
      )}
    </View>
  );
}

/** Saṅkalpa phrase for today, shown at the top of Sandhyāvandane / pūjā texts. */
export function SankalpaCard() {
  const { theme, settings } = useSettings();
  const { p, city, today, method } = usePanchanga();
  const [mode] = useCalendarMode();
  const [start] = useSauraStart();
  const sankalpa = mode === 'saura' ? sauraSankalpa(p, sauraDay(city, today, start, method)) : p.sankalpa;
  return (
    <View style={{ marginTop: 14, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', marginBottom: 6 }}>
        Today’s sankalpa · {city.name}
      </Text>
      <Text style={{ color: theme.text, fontSize: 17, lineHeight: 28 }} selectable>
        {translit(sankalpa, settings.script)}
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 12, marginTop: 6 }}>
        Use in place of the samvatsara…tithi placeholders. Computed for sunrise; change the place in Panchanga.
      </Text>
    </View>
  );
}
