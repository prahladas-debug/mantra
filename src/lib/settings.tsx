import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { THEMES, type Theme, type ThemeName } from './theme';
import type { MeaningPref } from './meaning';
import { localDate, type Plan } from './plans';
import type { ScriptId } from './transliterate';

export interface Settings {
  script: ScriptId;
  /** Second script shown under each verse (e.g. IAST for learners), or null. */
  secondaryScript: ScriptId | null;
  fontScale: number;
  theme: ThemeName | 'system';
  /** Show every meaning expanded. Off: each verse has a tap-to-open ಅರ್ಥ · Meaning button. */
  alwaysShowMeanings: boolean;
  /** Which language(s) meanings are shown in. */
  meaningLang: MeaningPref;
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

interface Store {
  settings: Settings;
  favorites: string[];
  recent: RecentEntry[];
  plans: Plan[];
  /** Last verse key read in each text, for 'continue where you left off'. */
  positions: Record<string, string>;
  bookmarks: Bookmark[];
}

const DEFAULTS: Store = {
  settings: {
    script: 'devanagari',
    secondaryScript: null,
    fontScale: 1,
    theme: 'system',
    alwaysShowMeanings: false,
    meaningLang: 'auto',
    keepAwake: true,
    variants: {},
    city: 'bengaluru',
    layout: 'book',
    bookFonts: true,
    centerVerses: true,
  },
  favorites: [],
  recent: [],
  plans: [],
  positions: {},
  bookmarks: [],
};

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
        const saved = JSON.parse(raw) as Partial<Store>;
        setStore({
          settings: { ...DEFAULTS.settings, ...saved.settings },
          favorites: saved.favorites ?? [],
          recent: saved.recent ?? [],
          plans: saved.plans ?? [],
          positions: saved.positions ?? {},
          bookmarks: saved.bookmarks ?? [],
        });
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) AsyncStorage.setItem(KEY, JSON.stringify(store)).catch(() => {});
  }, [store, ready]);

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

  const themeName: ThemeName =
    store.settings.theme === 'system' ? (system === 'dark' ? 'dark' : 'light') : store.settings.theme;

  const value = useMemo<Ctx>(
    () => ({
      ...store, ready, theme: THEMES[themeName], update, toggleFavorite, markRead,
      addPlan, updatePlan, removePlan, markPlanItemRead, addRecitation, savePosition, toggleBookmark,
    }),
    [store, ready, themeName, update, toggleFavorite, markRead, addPlan, updatePlan, removePlan, markPlanItemRead, addRecitation, savePosition, toggleBookmark],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): Ctx {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider');
  return ctx;
}
