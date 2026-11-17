/**
 * Japa (mālā) counter: what is being chanted, the running count, and history.
 *
 * Stored on its own AsyncStorage key so it never races with the main settings store.
 *
 * Chant keys:
 *  - a preset id from JAPA_PRESETS (e.g. 'om-namah-shivaya'),
 *  - a library text id (e.g. 'gayatri-mantra', from `?mantra=<id>`),
 *  - 'custom:<label>' for a free-text label.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { getMantraInfo } from '../data';
import { localDate } from './plans';

export const BEADS_PER_MALA = 108;
export const JAPA_KEY = 'mantra.japa.v1';
const KEY = JAPA_KEY;
const CUSTOM_PREFIX = 'custom:';
/** Days of history kept. */
const KEEP_DAYS = 400;
const MAX_CUSTOM_LABELS = 8;

export interface JapaPreset {
  id: string;
  /** Devanagari, transliterated for display. */
  text: string;
  /** Roman name for the chip / subtitle. */
  en: string;
  /** Library text this chant is taken from, if any (its first verse is the chant). */
  libraryId?: string;
}

export const JAPA_PRESETS: JapaPreset[] = [
  { id: 'gayatri-mantra', libraryId: 'gayatri-mantra', text: '', en: 'Gayatri' },
  { id: 'om-namo-narayanaya', text: 'ॐ नमो नारायणाय', en: 'Om namo Narayanaya' },
  { id: 'om-namo-bhagavate-vasudevaya', text: 'ॐ नमो भगवते वासुदेवाय', en: 'Om namo Bhagavate Vasudevaya' },
  { id: 'om-namah-shivaya', text: 'ॐ नमः शिवाय', en: 'Om namah Shivaya' },
  { id: 'sri-rama-jaya-rama', text: 'श्रीराम जय राम जय जय राम', en: 'Shri Rama jaya Rama' },
  {
    id: 'hare-krishna',
    text: 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम राम राम हरे हरे ॥',
    en: 'Hare Krishna mahamantra',
  },
  { id: 'mahamrityunjaya-mantra', libraryId: 'mahamrityunjaya-mantra', text: '', en: 'Mahamrityunjaya' },
  { id: 'om-sri-hanumate-namah', text: 'ॐ श्री हनुमते नमः', en: 'Om Shri Hanumate namah' },
  { id: 'om-gam-ganapataye-namah', text: 'ॐ गं गणपतये नमः', en: 'Om gam Ganapataye namah' },
];

const presetById = new Map(JAPA_PRESETS.map((p) => [p.id, p]));

export interface ChantInfo {
  key: string;
  /** Devanagari title of a library text, if any. */
  title?: string;
  /** Roman / English name (or the free-text label). */
  name: string;
  /** Devanagari chant line(s), if known. */
  line?: string;
  /** True for a library text that is not one of the short presets (show the line clipped). */
  long?: boolean;
  custom?: boolean;
}

export function customKey(label: string): string {
  return CUSTOM_PREFIX + label.trim().replace(/\s+/g, ' ');
}

export function isValidChantKey(key: string): boolean {
  return presetById.has(key) || !!getMantraInfo(key) || (key.startsWith(CUSTOM_PREFIX) && key.length > CUSTOM_PREFIX.length);
}

export function chantInfo(key: string): ChantInfo {
  if (key.startsWith(CUSTOM_PREFIX)) return { key, name: key.slice(CUSTOM_PREFIX.length), custom: true };
  const preset = presetById.get(key);
  const mantra = getMantraInfo(preset?.libraryId ?? key);
  if (preset) {
    return {
      key,
      title: mantra?.title,
      name: preset.en,
      line: preset.text || mantra?.sections[0]?.verses[0]?.text,
    };
  }
  if (mantra) {
    return { key, title: mantra.title, name: mantra.titleEn, line: mantra.sections[0]?.verses[0]?.text, long: true };
  }
  return { key, name: key };
}

export interface JapaState {
  version: 1;
  /** The chant being counted now. */
  current: string;
  /** Target in beads; null = open-ended. */
  target: number | null;
  /** Running (resettable) count for each chant. */
  counts: Record<string, number>;
  /** All-time beads per chant (not affected by reset). */
  totals: Record<string, number>;
  /** Beads per local date (YYYY-MM-DD) per chant. */
  days: Record<string, Record<string, number>>;
  /** Recently used free-text labels, newest first. */
  customLabels: string[];
}

const DEFAULT_STATE: JapaState = {
  version: 1,
  current: 'om-namo-narayanaya',
  target: BEADS_PER_MALA,
  counts: {},
  totals: {},
  days: {},
  customLabels: [],
};

function prune(days: JapaState['days']): JapaState['days'] {
  const cutoff = localDate(new Date(Date.now() - KEEP_DAYS * 86400000));
  return Object.fromEntries(Object.entries(days).filter(([d]) => d >= cutoff));
}

function addTo(rec: Record<string, number>, key: string, delta: number): Record<string, number> {
  const next = { ...rec, [key]: Math.max(0, (rec[key] ?? 0) + delta) };
  if (next[key] === 0) delete next[key];
  return next;
}

export function dayTotal(state: JapaState, date = localDate()): number {
  return Object.values(state.days[date] ?? {}).reduce((a, b) => a + b, 0);
}

export interface DayEntry {
  date: string;
  /** All chants. */
  total: number;
  /** The given chant only. */
  forKey: number;
}

/** The last `n` local days, oldest first, ending today. */
export function lastDays(state: JapaState, n: number, key?: string): DayEntry[] {
  const out: DayEntry[] = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = localDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() - i));
    out.push({ date: d, total: dayTotal(state, d), forKey: key ? (state.days[d]?.[key] ?? 0) : 0 });
  }
  return out;
}

/** Beads counted per date (all chants) and the target, read from storage (for the streak on My practice). */
export async function loadJapaDays(): Promise<{ target: number | null; byDate: Record<string, number> }> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    const saved = raw ? (JSON.parse(raw) as Partial<JapaState>) : {};
    const byDate: Record<string, number> = {};
    for (const [d, rec] of Object.entries(saved.days ?? {})) byDate[d] = Object.values(rec).reduce((a, b) => a + b, 0);
    return { target: saved.target === undefined ? DEFAULT_STATE.target : saved.target, byDate };
  } catch {
    return { target: DEFAULT_STATE.target, byDate: {} };
  }
}

export interface CountResult {
  count: number;
  /** A full mālā (multiple of 108) was just completed. */
  malaDone: boolean;
  /** The target was just reached. */
  targetDone: boolean;
}

/**
 * The japa store. Updates are applied synchronously to a ref so that rapid taps
 * never lose a count; writes to storage are debounced and flushed when the app
 * goes to the background or the screen unmounts.
 */
export function useJapa() {
  const [state, setState] = useState<JapaState>(DEFAULT_STATE);
  const [ready, setReady] = useState(false);
  const ref = useRef<JapaState>(DEFAULT_STATE);
  const dirty = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const flush = useCallback(() => {
    clearTimeout(timer.current);
    if (!dirty.current) return;
    dirty.current = false;
    AsyncStorage.setItem(KEY, JSON.stringify(ref.current)).catch(() => {});
  }, []);

  const commit = useCallback(
    (next: JapaState) => {
      ref.current = next;
      setState(next);
      dirty.current = true;
      clearTimeout(timer.current);
      timer.current = setTimeout(flush, 600);
    },
    [flush],
  );

  useEffect(() => {
    let alive = true;
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (!alive || !raw) return;
        const saved = JSON.parse(raw) as Partial<JapaState>;
        const next: JapaState = {
          ...DEFAULT_STATE,
          ...saved,
          version: 1,
          counts: saved.counts ?? {},
          totals: saved.totals ?? {},
          days: prune(saved.days ?? {}),
          customLabels: saved.customLabels ?? [],
        };
        if (!isValidChantKey(next.current)) next.current = DEFAULT_STATE.current;
        ref.current = next;
        setState(next);
      })
      .catch(() => {})
      .finally(() => alive && setReady(true));
    const sub = AppState.addEventListener('change', (s) => {
      if (s !== 'active') flush();
    });
    return () => {
      alive = false;
      sub.remove();
      flush();
    };
  }, [flush]);

  /** Add `delta` beads (negative to undo) to the current chant. */
  const add = useCallback(
    (delta: number): CountResult => {
      const s = ref.current;
      const key = s.current;
      const before = s.counts[key] ?? 0;
      const step = delta < 0 ? -Math.min(before, -delta) : delta;
      if (step === 0) return { count: before, malaDone: false, targetDone: false };
      const today = localDate();
      const count = before + step;
      commit({
        ...s,
        counts: addTo(s.counts, key, step),
        totals: addTo(s.totals, key, step),
        days: { ...s.days, [today]: addTo(s.days[today] ?? {}, key, step) },
      });
      return {
        count,
        malaDone: step > 0 && count % BEADS_PER_MALA === 0,
        targetDone: step > 0 && s.target != null && before < s.target && count >= s.target,
      };
    },
    [commit],
  );

  const increment = useCallback(() => add(1), [add]);
  const undo = useCallback(() => add(-1), [add]);

  /** Start the current chant's count again from zero (history and totals are kept). */
  const reset = useCallback(() => {
    const s = ref.current;
    const counts = { ...s.counts };
    delete counts[s.current];
    commit({ ...s, counts });
  }, [commit]);

  const select = useCallback(
    (key: string) => {
      const s = ref.current;
      if (s.current === key || !isValidChantKey(key)) return;
      let customLabels = s.customLabels;
      if (key.startsWith(CUSTOM_PREFIX)) {
        const label = key.slice(CUSTOM_PREFIX.length);
        customLabels = [label, ...customLabels.filter((l) => l !== label)].slice(0, MAX_CUSTOM_LABELS);
      }
      commit({ ...s, current: key, customLabels });
    },
    [commit],
  );

  const setTarget = useCallback(
    (target: number | null) => {
      const t = target != null && target > 0 ? Math.min(Math.round(target), 1_000_000) : null;
      commit({ ...ref.current, target: t });
    },
    [commit],
  );

  const forgetCustomLabel = useCallback(
    (label: string) => commit({ ...ref.current, customLabels: ref.current.customLabels.filter((l) => l !== label) }),
    [commit],
  );

  return { state, ready, increment, undo, reset, select, setTarget, forgetCustomLabel };
}
