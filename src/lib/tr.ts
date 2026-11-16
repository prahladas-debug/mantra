/**
 * Interface translation and date names without React, so the calculation libraries
 * (panchanga, parana, festivals) and the tests can use them. Components use useI18n() in i18n.ts.
 */
import type { MeaningLang } from '../data/types';
import { UI_STRINGS } from '../i18n';

export type UiLang = MeaningLang;
export type Vars = Record<string, string | number>;

/** The translation of an English interface string, with {name} placeholders filled. */
export function tr(lang: UiLang, s: string, vars?: Vars): string {
  const out = (lang === 'en' ? undefined : UI_STRINGS[lang]?.[s]) ?? s;
  return vars ? out.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m)) : out;
}

/** Whether a string has a translation (for optional English-only lines such as festival subtitles). */
export function hasTr(lang: UiLang, s: string): boolean {
  return lang === 'en' || !!UI_STRINGS[lang]?.[s];
}

const MONTHS: Record<UiLang, string[]> = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  kn: ['ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್'],
  hi: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
  te: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'],
  ta: ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'],
  ml: ['ജനുവരി', 'ഫെബ്രുവരി', 'മാർച്ച്', 'ഏപ്രിൽ', 'മേയ്', 'ജൂൺ', 'ജൂലൈ', 'ഓഗസ്റ്റ്', 'സെപ്റ്റംബർ', 'ഒക്ടോബർ', 'നവംബർ', 'ഡിസംബർ'],
};
const MONTHS_SHORT_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const WEEKDAYS: Record<UiLang, string[]> = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  kn: ['ಭಾನುವಾರ', 'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ'],
  hi: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
  te: ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'],
  ta: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'],
  ml: ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി'],
};

/** Month name; `short` gives Jan/Feb… in English and the full name elsewhere (no common abbreviations). */
export function monthName(lang: UiLang, m: number, short = false): string {
  return short && lang === 'en' ? MONTHS_SHORT_EN[m - 1] : MONTHS[lang][m - 1];
}
export const weekdayName = (lang: UiLang, w: number) => WEEKDAYS[lang][w];
/** "Monday, 16 Nov 2026" / "ಸೋಮವಾರ, 16 ನವೆಂಬರ್ 2026". */
export const longDate = (lang: UiLang, y: number, m: number, d: number, w: number) =>
  `${weekdayName(lang, w)}, ${d} ${monthName(lang, m, true)} ${y}`;
/**
 * "16 Nov" in English and Hindi; month first in Kannada, Telugu, Tamil and Malayalam ("ನವೆಂಬರ್ 16"),
 * as they usually write it, so a case ending joins the number ("ನವೆಂಬರ್ 16ರವರೆಗೆ") and not the month.
 */
export const dayMonth = (lang: UiLang, m: number, d: number) =>
  lang === 'en' || lang === 'hi' ? `${d} ${monthName(lang, m, true)}` : `${monthName(lang, m, true)} ${d}`;

