import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { THEMES, type Theme, type ThemeName } from './theme';
import type { MeaningPref } from './meaning';
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
}

export interface RecentEntry {
  id: string;
  at: number;
}

interface Store {
  settings: Settings;
  favorites: string[];
  recent: RecentEntry[];
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
  },
  favorites: [],
  recent: [],
};

const KEY = 'mantra.store.v1';

interface Ctx extends Store {
  ready: boolean;
  theme: Theme;
  update: (patch: Partial<Settings>) => void;
  toggleFavorite: (id: string) => void;
  markRead: (id: string) => void;
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

  const themeName: ThemeName =
    store.settings.theme === 'system' ? (system === 'dark' ? 'dark' : 'light') : store.settings.theme;

  const value = useMemo<Ctx>(
    () => ({ ...store, ready, theme: THEMES[themeName], update, toggleFavorite, markRead }),
    [store, ready, themeName, update, toggleFavorite, markRead],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): Ctx {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider');
  return ctx;
}
