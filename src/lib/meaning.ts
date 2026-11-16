import type { Meaning, MeaningLang } from '../data/types';
import { plain } from './plain';
import type { ScriptId } from './transliterate';

/** Reader preference for which meaning(s) to show. */
export type MeaningPref = 'auto' | MeaningLang | 'both';

export const MEANING_PREFS: { id: MeaningPref; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'en', label: 'English' },
  { id: 'kn', label: 'ಕನ್ನಡ' },
  { id: 'hi', label: 'हिन्दी' },
  { id: 'te', label: 'తెలుగు' },
  { id: 'ta', label: 'தமிழ்' },
  { id: 'ml', label: 'മലയാളം' },
  { id: 'both', label: 'Both · ಎರಡೂ' },
];

/** Meaning language that goes with a reading script. */
export function langForScript(script: ScriptId): MeaningLang {
  switch (script) {
    case 'kannada':
      return 'kn';
    case 'telugu':
      return 'te';
    case 'tamil':
      return 'ta';
    case 'malayalam':
      return 'ml';
    case 'devanagari':
      return 'hi';
    default:
      return 'en';
  }
}

/** The language a preference resolves to for summaries and labels. */
export function primaryLang(pref: MeaningPref, script: ScriptId): MeaningLang {
  return pref === 'auto' || pref === 'both' ? langForScript(script) : pref;
}

/** English is respelled without IAST marks here, when shown, rather than for all ~9,000 verses at start-up. */
export function meaningText(m: Meaning | undefined, lang: MeaningLang): string | undefined {
  if (!m) return undefined;
  if (typeof m === 'string') return lang === 'en' ? plain(m) : undefined;
  return lang === 'en' && m.en ? plain(m.en) : m[lang];
}

/**
 * Which meanings to display, in order. 'auto' shows the language that matches
 * the reading script (Kannada, Telugu, Tamil, Malayalam, Hindi for Devanagari), 'both'
 * adds English. Falls back to English, then Kannada, rather than showing nothing.
 */
export function meaningsToShow(
  m: Meaning | undefined,
  pref: MeaningPref,
  script: ScriptId,
): { lang: MeaningLang; text: string }[] {
  if (!m) return [];
  const native = langForScript(script);
  const want: MeaningLang[] =
    pref === 'both' ? (native === 'en' ? ['en'] : [native, 'en']) : [pref === 'auto' ? native : pref];
  const out = want
    .map((lang) => ({ lang, text: meaningText(m, lang) }))
    .filter((x): x is { lang: MeaningLang; text: string } => !!x.text);
  if (out.length) return out;
  for (const lang of ['en', 'kn'] as MeaningLang[]) {
    const t = meaningText(m, lang);
    if (t) return [{ lang, text: t }];
  }
  return [];
}

/** Text summary in the preferred language, falling back to English. */
export function summaryFor(
  m: { summary: string; summaryKn?: string; summaries?: Partial<Record<MeaningLang, string>> },
  lang: MeaningLang,
): { lang: MeaningLang; text: string } {
  const t = lang === 'kn' ? m.summaryKn ?? m.summaries?.kn : lang === 'en' ? undefined : m.summaries?.[lang];
  return t ? { lang, text: t } : { lang: 'en', text: plain(m.summary) };
}

/** Label for the tap-to-open meaning button. */
export const MEANING_BUTTON: Record<MeaningLang, string> = {
  en: 'Meaning',
  kn: 'ಅರ್ಥ',
  hi: 'अर्थ',
  te: 'అర్థం',
  ta: 'பொருள்',
  ml: 'അർത്ഥം',
};
