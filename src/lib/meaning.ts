import type { Meaning, MeaningLang } from '../data/types';
import type { ScriptId } from './transliterate';

/** Reader preference for which meaning(s) to show. */
export type MeaningPref = 'auto' | 'en' | 'kn' | 'both';

export const MEANING_PREFS: { id: MeaningPref; label: string }[] = [
  { id: 'auto', label: 'Auto' },
  { id: 'en', label: 'English' },
  { id: 'kn', label: 'ಕನ್ನಡ' },
  { id: 'both', label: 'Both · ಎರಡೂ' },
];

export function meaningText(m: Meaning | undefined, lang: MeaningLang): string | undefined {
  if (!m) return undefined;
  if (typeof m === 'string') return lang === 'en' ? m : undefined;
  return m[lang];
}

/**
 * Which meanings to display, in order. 'auto' shows Kannada when reading in
 * Kannada script and English otherwise. Falls back to whatever exists.
 */
export function meaningsToShow(
  m: Meaning | undefined,
  pref: MeaningPref,
  script: ScriptId,
): { lang: MeaningLang; text: string }[] {
  if (!m) return [];
  const want: MeaningLang[] =
    pref === 'both' ? ['kn', 'en'] : pref === 'auto' ? [script === 'kannada' ? 'kn' : 'en'] : [pref];
  const out = want
    .map((lang) => ({ lang, text: meaningText(m, lang) }))
    .filter((x): x is { lang: MeaningLang; text: string } => !!x.text);
  if (out.length || pref === 'both') return out;
  // Fall back to the other language rather than showing nothing.
  const other: MeaningLang = want[0] === 'kn' ? 'en' : 'kn';
  const t = meaningText(m, other);
  return t ? [{ lang: other, text: t }] : [];
}
