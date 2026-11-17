/**
 * Book typography. Tiro fonts (designed for Sanskrit and Indic book setting)
 * for Devanagari, Kannada, Telugu, Tamil and Bengali; Noto Serif for the rest
 * and for Roman text. All bundled, so the reader looks the same on every phone.
 */
import { NotoSerif_400Regular, NotoSerif_400Regular_Italic, NotoSerif_700Bold } from '@expo-google-fonts/noto-serif';
import { NotoSerifGujarati_400Regular } from '@expo-google-fonts/noto-serif-gujarati';
import { NotoSerifMalayalam_400Regular } from '@expo-google-fonts/noto-serif-malayalam';
import { NotoSerifOriya_400Regular } from '@expo-google-fonts/noto-serif-oriya';
import { TiroBangla_400Regular } from '@expo-google-fonts/tiro-bangla';
import { TiroDevanagariSanskrit_400Regular } from '@expo-google-fonts/tiro-devanagari-sanskrit';
import { TiroKannada_400Regular } from '@expo-google-fonts/tiro-kannada';
import { TiroTamil_400Regular } from '@expo-google-fonts/tiro-tamil';
import { TiroTelugu_400Regular } from '@expo-google-fonts/tiro-telugu';
import type { MeaningLang } from '../data/types';
import type { ScriptId } from './transliterate';

export const FONT_ASSETS = {
  BookDevanagari: TiroDevanagariSanskrit_400Regular,
  BookKannada: TiroKannada_400Regular,
  BookTelugu: TiroTelugu_400Regular,
  BookTamil: TiroTamil_400Regular,
  BookBengali: TiroBangla_400Regular,
  BookMalayalam: NotoSerifMalayalam_400Regular,
  BookGujarati: NotoSerifGujarati_400Regular,
  BookOdia: NotoSerifOriya_400Regular,
  BookSerif: NotoSerif_400Regular,
  BookSerifItalic: NotoSerif_400Regular_Italic,
  BookSerifBold: NotoSerif_700Bold,
};

const SCRIPT_FONT: Record<ScriptId, keyof typeof FONT_ASSETS> = {
  devanagari: 'BookDevanagari',
  kannada: 'BookKannada',
  telugu: 'BookTelugu',
  tamil: 'BookTamil',
  bengali: 'BookBengali',
  malayalam: 'BookMalayalam',
  gujarati: 'BookGujarati',
  oriya: 'BookOdia',
  iast: 'BookSerif',
  english: 'BookSerif',
};

const LANG_FONT: Record<MeaningLang, keyof typeof FONT_ASSETS> = {
  en: 'BookSerifItalic',
  kn: 'BookKannada',
  hi: 'BookDevanagari',
  te: 'BookTelugu',
  ta: 'BookTamil',
  ml: 'BookMalayalam',
};

/** Font family for verse text in a script (undefined = system font). */
export function scriptFont(script: ScriptId, enabled: boolean): string | undefined {
  return enabled ? SCRIPT_FONT[script] : undefined;
}

/** Font family for a meaning in a language. */
export function meaningFont(lang: MeaningLang, enabled: boolean): string | undefined {
  return enabled ? LANG_FONT[lang] : undefined;
}

/**
 * Line-height factor per script. Tiro fonts have tall stacks (conjuncts,
 * vowel signs above and below), so they need more leading than system fonts.
 */
export function leading(script: ScriptId, enabled: boolean): number {
  if (!enabled) return 1.65;
  return script === 'iast' || script === 'english' ? 1.55 : script === 'devanagari' ? 1.8 : 1.75;
}

/** Book-style serif for section headings in the interface language (undefined = system font). */
export function headingFont(lang: MeaningLang, enabled: boolean): string | undefined {
  if (!enabled) return undefined;
  return lang === 'en' ? 'BookSerifBold' : LANG_FONT[lang];
}
