/**
 * The app's own words (buttons, headings, notes, dates) in the reader's language.
 *
 * Texts stay Sanskrit and are transliterated; this is only the interface. English strings are
 * the keys: `tr('Sunrise')`, `tr('till {time}', { time })`. A string with no translation yet
 * is shown in English, so nothing ever disappears. Translations live in src/i18n/<lang>.ts;
 * `npx tsx scripts/i18n-check.ts` lists the keys still missing in each language.
 */
import { primaryLang, type MeaningPref } from './meaning';
import { useSettings } from './settings';
import type { ScriptId } from './transliterate';
import { dayMonth, hasTr, longDate, monthName, tr, weekdayName, type UiLang, type Vars } from './tr';

export { dayMonth, hasTr, longDate, monthName, tr, weekdayName, type UiLang };

/** 'auto': follow the meanings language (which itself follows the reading script). */
export type UiPref = 'auto' | UiLang;

export const UI_PREFS: { id: UiPref; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'en', label: 'English' },
  { id: 'kn', label: 'ಕನ್ನಡ' },
  { id: 'hi', label: 'हिन्दी' },
  { id: 'te', label: 'తెలుగు' },
  { id: 'ta', label: 'தமிழ்' },
  { id: 'ml', label: 'മലയാളം' },
];

export function uiLangOf(pref: UiPref | undefined, meaningLang: MeaningPref, script: ScriptId): UiLang {
  return pref && pref !== 'auto' ? pref : primaryLang(meaningLang, script);
}

/** The interface language and helpers bound to it, for components. */
export function useI18n() {
  const { settings } = useSettings();
  const lang = uiLangOf(settings.uiLang, settings.meaningLang, settings.script);
  return {
    lang,
    tr: (s: string, vars?: Vars) => tr(lang, s, vars),
    has: (s: string) => hasTr(lang, s),
    month: (m: number, short = false) => monthName(lang, m, short),
    weekday: (w: number) => weekdayName(lang, w),
    longDate: (y: number, m: number, d: number, w: number) => longDate(lang, y, m, d, w),
    dayMonth: (m: number, d: number) => dayMonth(lang, m, d),
  };
}

/** Marks an English interface string kept in a constant, so the key-finder sees it; render it with tr(). */
export const T = (s: string) => s;
