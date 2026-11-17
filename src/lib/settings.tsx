import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AppState, useColorScheme } from 'react-native';
import { THEMES, type Theme, type ThemeName } from './theme';
import type { UiPref } from './i18n';
import type { MeaningPref } from './meaning';
import { localDate, type Plan } from './plans';
import { cityById, fromJulian, julianDay, sunEventJd, sunriseDayOf, todayIn, withMethod } from './panchanga';
import type { ScriptId } from './transliterate';

export interface Settings {
  script: ScriptId;
  /** Second script shown under each verse (e.g. IAST for learners), or null. */
  secondaryScript: ScriptId | null;
  fontScale: number;
  /** 'sunset': the warm night theme from sunset to sunrise at your place, light by day. */
  theme: ThemeName | 'system' | 'sunset';
  /** Show every meaning expanded. Off: each verse has a tap-to-open ಅರ್ಥ · Meaning button. */
  alwaysShowMeanings: boolean;
  /** Which language(s) meanings are shown in. */
  meaningLang: MeaningPref;
  /** Language of the app's own words; 'auto' follows the meanings language. */
  uiLang: UiPref;
  /** Set once the old IAST choice has been moved to plain English (so a later IAST choice stays). */
  plainEnglish?: boolean;
  keepAwake: boolean;
  /** Reader's choices for texts with variants, e.g. { tradition: 'madhva', time: 'morning' }. */
  variants: Partial<Record<string, string>>;
  /** City for pañcāṅga / sunrise (see CITIES in panchanga.ts). */
  city: string;
  /** 'book': swipe pages like an ebook; 'scroll': one continuous column. */
  layout: 'book' | 'scroll';
  /** Use the bundled book fonts (Tiro / Noto Serif) instead of system fonts. */
  bookFonts: boolean;
  /** Centre verse lines, as printed stotra books do. */
  centerVerses: boolean;
  /** The first-run welcome (language, tradition, place) has been completed. */
  onboarded: boolean;
  /** Notifications the evening before Ekadashi and major festivals. */
  festivalReminders: { ekadashi: boolean; festivals: boolean; time: string };
  /** My practice shows the last seven days as lamps and a forgiving streak. Off unless chosen. */
  showStreaks: boolean;
  /** A light tap of the phone on each bead counted in the japa counter. */
  japaVibrate: boolean;
}

export interface Bookmark {
  id: string;
  mantraId: string;
  /** Row key of the verse, e.g. "v4-12" (section 4, verse 12). */
  key: string;
  at: number;
}

export interface RecentEntry {
  id: string;
  at: number;
}

export interface Store {
  settings: Settings;
  favorites: string[];
  recent: RecentEntry[];
  plans: Plan[];
  /** Last verse key read in each text, for 'continue where you left off'. */
  positions: Record<string, string>;
  bookmarks: Bookmark[];
  /** Texts the reader recites every day, in order. */
  routine: string[];
  /** Routine texts finished, by panchanga day (sunrise to sunrise). Only recent days are kept. */
  routineDone: Record<string, string[]>;
}

const DEFAULTS: Store = {
  settings: {
    script: 'devanagari',
    secondaryScript: null,
    fontScale: 1,
    theme: 'system',
    alwaysShowMeanings: false,
    meaningLang: 'auto',
    uiLang: 'auto',
    keepAwake: true,
    variants: {},
    city: 'bengaluru',
    layout: 'book',
    bookFonts: true,
    centerVerses: true,
    onboarded: false,
    festivalReminders: { ekadashi: false, festivals: false, time: '19:00' },
    showStreaks: false,
    japaVibrate: true,
  },
  favorites: [],
  recent: [],
  plans: [],
  positions: {},
  bookmarks: [],
  routine: [],
  routineDone: {},
};

/** Today's panchanga day at the city: the day changes at sunrise, not midnight. */
export function routineDay(cityId: string): string {
  return sunriseDayOf(cityById(cityId), julianDay(new Date()));
}

/** `routineDay` that follows the clock: looked at again every minute and when the app is reopened. */
export function useRoutineDay(cityId: string): string {
  useClockTick(60 * 1000);
  return routineDay(cityId);
}

/**
 * Re-render the caller every `ms` and whenever the app comes back to the foreground, so
 * that "today" (date, sunrise day, night theme) is not left over from before. Timers do not
 * run while the phone sleeps, so the interval alone can be hours late in the morning.
 */
export function useClockTick(ms: number): number {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const bump = () => setTick((n) => n + 1);
    const id = setInterval(bump, ms);
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') bump();
    });
    return () => {
      clearInterval(id);
      sub.remove();
    };
  }, [ms]);
  return tick;
}

/** Is the sun down right now at the city? (Visible sunrise and sunset, whatever the panchanga method.) */
function isNightAt(cityId: string): boolean {
  const city = cityById(cityId);
  const today = todayIn(city);
  const now = Date.now();
  return withMethod('drik', () => {
    const rise = fromJulian(sunEventJd(city, today, 'rise')).getTime();
    const set = fromJulian(sunEventJd(city, today, 'set')).getTime();
    return now < rise || now >= set;
  });
}

const KEY = 'mantra.store.v1';

interface Ctx extends Store {
  ready: boolean;
  theme: Theme;
  update: (patch: Partial<Settings>) => void;
  toggleFavorite: (id: string) => void;
  markRead: (id: string) => void;
  addPlan: (plan: Plan) => void;
  updatePlan: (id: string, patch: Partial<Plan>) => void;
  removePlan: (id: string) => void;
  /** Mark a text read in every read-through plan that contains it. */
  markPlanItemRead: (mantraId: string, read: boolean) => void;
  /** Add one recitation today to a vow plan. */
  addRecitation: (planId: string, delta: number) => void;
  savePosition: (mantraId: string, key: string) => void;
  toggleBookmark: (mantraId: string, key: string) => void;
  setRoutine: (ids: string[]) => void;
  /** Mark a routine text done (or not) for the given panchanga day. */
  setRoutineDone: (day: string, id: string, done: boolean) => void;
  /** Replace everything the reader has saved with a restored backup (see backup.ts). */
  restoreStore: (store: Store) => void;
}

const SettingsContext = createContext<Ctx | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<Store>(DEFAULTS);
  const [ready, setReady] = useState(false);
  const system = useColorScheme();

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (!raw) return;
        let saved: Partial<Store>;
        try {
          saved = JSON.parse(raw) as Partial<Store>;
        } catch {
          // Keep the unreadable data rather than overwrite it with defaults unseen.
          AsyncStorage.setItem(`${KEY}.unreadable`, raw).catch(() => {});
          return;
        }
        setStore({
          // Someone who used the app before the welcome screen existed has already chosen.
          // The old "English (IAST)" choice now means plain English spelling (Krishna, not Kṛṣṇa);
          // IAST stays available as its own choice.
          settings: {
            ...DEFAULTS.settings,
            onboarded: true,
            ...saved.settings,
            ...(saved.settings?.script === 'iast' && !saved.settings.plainEnglish ? { script: 'english' as const } : {}),
            plainEnglish: true,
          },
          favorites: saved.favorites ?? [],
          recent: saved.recent ?? [],
          plans: saved.plans ?? [],
          positions: saved.positions ?? {},
          bookmarks: saved.bookmarks ?? [],
          routine: saved.routine ?? [],
          routineDone: saved.routineDone ?? {},
        });
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  // Saved a moment after the last change, and at once when the app goes to the background: the
  // reader saves its position at every page turn and while scrolling, and writing the whole store
  // (positions in every text, plans, bookmarks) on each of those is needless work while scrolling.
  const latest = useRef<Store | null>(null);
  const flush = useCallback(() => {
    const s = latest.current;
    latest.current = null;
    if (s) AsyncStorage.setItem(KEY, JSON.stringify(s)).catch(() => {});
  }, []);
  useEffect(() => {
    if (!ready) return;
    latest.current = store;
    const t = setTimeout(flush, 500);
    return () => clearTimeout(t);
  }, [store, ready, flush]);
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state !== 'active') flush();
    });
    return () => {
      sub.remove();
      flush();
    };
  }, [flush]);

  const update = useCallback(
    (patch: Partial<Settings>) =>
      setStore((s) => ({ ...s, settings: { ...s.settings, ...patch } })),
    [],
  );
  const toggleFavorite = useCallback(
    (id: string) =>
      setStore((s) => ({
        ...s,
        favorites: s.favorites.includes(id)
          ? s.favorites.filter((f) => f !== id)
          : [id, ...s.favorites],
      })),
    [],
  );
  const markRead = useCallback(
    (id: string) =>
      setStore((s) => ({
        ...s,
        recent: [{ id, at: Date.now() }, ...s.recent.filter((r) => r.id !== id)].slice(0, 10),
      })),
    [],
  );

  const addPlan = useCallback((plan: Plan) => setStore((s) => ({ ...s, plans: [...s.plans, plan] })), []);
  const updatePlan = useCallback(
    (id: string, patch: Partial<Plan>) =>
      setStore((s) => ({ ...s, plans: s.plans.map((p) => (p.id === id ? { ...p, ...patch } : p)) })),
    [],
  );
  const removePlan = useCallback(
    (id: string) => setStore((s) => ({ ...s, plans: s.plans.filter((p) => p.id !== id) })),
    [],
  );
  const markPlanItemRead = useCallback(
    (mantraId: string, read: boolean) =>
      setStore((s) => ({
        ...s,
        plans: s.plans.map((p) =>
          p.kind !== 'readthrough' || !p.items.includes(mantraId)
            ? p
            : { ...p, read: read ? [...new Set([...p.read, mantraId])] : p.read.filter((x) => x !== mantraId) },
        ),
      })),
    [],
  );
  const addRecitation = useCallback(
    (planId: string, delta: number) =>
      setStore((s) => {
        const today = localDate();
        return {
          ...s,
          plans: s.plans.map((p) =>
            p.id !== planId ? p : { ...p, counts: { ...p.counts, [today]: Math.max(0, (p.counts[today] ?? 0) + delta) } },
          ),
        };
      }),
    [],
  );

  const savePosition = useCallback(
    (mantraId: string, key: string) =>
      setStore((s) => (s.positions[mantraId] === key ? s : { ...s, positions: { ...s.positions, [mantraId]: key } })),
    [],
  );
  const toggleBookmark = useCallback(
    (mantraId: string, key: string) =>
      setStore((s) => {
        const exists = s.bookmarks.some((b) => b.mantraId === mantraId && b.key === key);
        return {
          ...s,
          bookmarks: exists
            ? s.bookmarks.filter((b) => !(b.mantraId === mantraId && b.key === key))
            : [{ id: `${Date.now()}`, mantraId, key, at: Date.now() }, ...s.bookmarks],
        };
      }),
    [],
  );

  const restoreStore = useCallback((next: Store) => setStore(next), []);
  const setRoutine = useCallback((ids: string[]) => setStore((s) => ({ ...s, routine: [...new Set(ids)] })), []);
  const setRoutineDone = useCallback(
    (day: string, id: string, done: boolean) =>
      setStore((s) => {
        const list = s.routineDone[day] ?? [];
        const next = done ? [...new Set([...list, id])] : list.filter((x) => x !== id);
        // Keep two months of history (the streak on My practice looks back over it).
        const days = Object.keys({ ...s.routineDone, [day]: next }).sort().slice(-60);
        const routineDone: Record<string, string[]> = {};
        for (const d of days) routineDone[d] = d === day ? next : s.routineDone[d];
        return { ...s, routineDone };
      }),
    [],
  );

  // 'sunset' theme: look every five minutes, and when the app is opened again, whether the
  // sun is down at the reader's place. Worked out while rendering (it is cheap: sunrise and
  // sunset are cached), so the app does not open on the light theme for a moment at night.
  useClockTick(5 * 60 * 1000);
  const night = store.settings.theme === 'sunset' && isNightAt(store.settings.city);

  const themeName: ThemeName =
    store.settings.theme === 'system'
      ? system === 'dark' ? 'dark' : 'light'
      : store.settings.theme === 'sunset'
        ? night ? 'night' : 'light'
        : store.settings.theme;

  const value = useMemo<Ctx>(
    () => ({
      ...store, ready, theme: THEMES[themeName], update, toggleFavorite, markRead,
      addPlan, updatePlan, removePlan, markPlanItemRead, addRecitation, savePosition, toggleBookmark,
      setRoutine, setRoutineDone, restoreStore,
    }),
    [store, ready, themeName, update, toggleFavorite, markRead, addPlan, updatePlan, removePlan, markPlanItemRead, addRecitation, savePosition, toggleBookmark, setRoutine, setRoutineDone, restoreStore],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): Ctx {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider');
  return ctx;
}
