import Sanscript from '@indic-transliteration/sanscript';

export type ScriptId =
  | 'devanagari'
  | 'kannada'
  | 'telugu'
  | 'tamil'
  | 'malayalam'
  | 'gujarati'
  | 'bengali'
  | 'oriya'
  | 'iast';

export interface ScriptInfo {
  id: ScriptId;
  /** Name in its own script. */
  native: string;
  /** English name. */
  en: string;
  /** Sample glyph for compact pickers. */
  sample: string;
}

export const SCRIPTS: ScriptInfo[] = [
  { id: 'devanagari', native: 'देवनागरी', en: 'Devanagari (Sanskrit)', sample: 'ॐ' },
  { id: 'kannada', native: 'ಕನ್ನಡ', en: 'Kannada', sample: 'ಕ' },
  { id: 'telugu', native: 'తెలుగు', en: 'Telugu', sample: 'తె' },
  { id: 'tamil', native: 'தமிழ்', en: 'Tamil', sample: 'த' },
  { id: 'malayalam', native: 'മലയാളം', en: 'Malayalam', sample: 'മ' },
  { id: 'gujarati', native: 'ગુજરાતી', en: 'Gujarati', sample: 'ગુ' },
  { id: 'bengali', native: 'বাংলা', en: 'Bengali', sample: 'বা' },
  { id: 'oriya', native: 'ଓଡ଼ିଆ', en: 'Odia', sample: 'ଓ' },
  { id: 'iast', native: 'English (IAST)', en: 'English / Roman (IAST)', sample: 'Ā' },
];

export const scriptInfo = Object.fromEntries(SCRIPTS.map((s) => [s.id, s])) as Record<
  ScriptId,
  ScriptInfo
>;

/** Sanscript scheme used for each script. Tamil uses superscript numerals for aspirates/voicing. */
const SCHEME: Record<ScriptId, string> = {
  devanagari: 'devanagari',
  kannada: 'kannada',
  telugu: 'telugu',
  tamil: 'tamil_superscripted',
  malayalam: 'malayalam',
  gujarati: 'gujarati',
  bengali: 'bengali',
  oriya: 'oriya',
  iast: 'iast',
};

// Vedic svara marks and similar combining accents — stripped for display.
const SVARA = /[॑-॔᳐-᳿꣠-꣱]/g;
const DEV_DIGITS = '०१२३४५६७८९';

const cache = new Map<string, string>();

/** Transliterate Devanagari text into the given script. Results are memoised. */
export function translit(text: string, script: ScriptId): string {
  if (!text) return text;
  const clean = text.replace(SVARA, '');
  if (script === 'devanagari') return clean;
  const key = script + '\u0000' + clean;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;

  let out: string;
  if (script === 'tamil') {
    // tamil_superscripted renders dandas as '.'; protect them and use 0-9 digits,
    // which Tamil readers generally find easier than Tamil numerals.
    const protectedText = clean
      .replace(/॥/g, '\uE001')
      .replace(/।/g, '\uE000')
      .replace(/[०-९]/g, (d) => String(DEV_DIGITS.indexOf(d)));
    out = Sanscript.t(protectedText, 'devanagari', SCHEME.tamil)
      // Sanscript puts the mark after a following repha (धर्म → தர்⁴ம). ர never takes a
      // superscript, so move it back to the syllable it belongs to (த⁴ர்ம).
      .replace(/([\u0B95-\u0BB9](?:[\u0BBE-\u0BCC]|\u0BCD)?)ர்([²³⁴])/g, '$1$2ர்')
      .replace(/\uE001/g, '॥')
      .replace(/\uE000/g, '।');
  } else {
    out = Sanscript.t(clean, 'devanagari', SCHEME[script]);
  }
  if (cache.size > 5000) cache.clear();
  cache.set(key, out);
  return out;
}

/**
 * For English prose (notes, summaries, meanings) that quotes Devanagari words:
 * convert only the Devanagari runs into the reader's script.
 */
export function translitInline(text: string, script: ScriptId): string {
  if (!text || script === 'devanagari') return text;
  return text.replace(/[\u0900-\u097F\u1CD0-\u1CFF]+(?:[\s'’-]+[\u0900-\u097F\u1CD0-\u1CFF]+)*/g, (run) =>
    translit(run, script),
  );
}

/** Keep dandas on the same line as the preceding word. */
export function bindDandas(text: string): string {
  return text.replace(/ (?=[।॥|])/g, '\u00A0');
}

/** Render a verse number in the chosen script's digits. */
export function verseNumber(n: number, script: ScriptId): string {
  // Non-breaking spaces keep the number on the same line as the verse's last word.
  const NB = '\u00A0';
  if (script === 'iast') return `||${NB}${n}${NB}||`;
  if (script === 'tamil') return `॥${NB}${n}${NB}॥`;
  const dev = String(n).replace(/[0-9]/g, (d) => DEV_DIGITS[Number(d)]);
  return `॥${NB}${translit(dev, script)}${NB}॥`;
}

// ---------- search helpers ----------

const SCRIPT_RANGES: [ScriptId, RegExp][] = [
  ['devanagari', /[ऀ-ॿ]/],
  ['bengali', /[ঀ-৿]/],
  ['gujarati', /[઀-૿]/],
  ['oriya', /[଀-୿]/],
  ['tamil', /[஀-௿]/],
  ['telugu', /[ఀ-౿]/],
  ['kannada', /[ಀ-೿]/],
  ['malayalam', /[ഀ-ൿ]/],
];

/**
 * Reduce any text (Devanagari, any supported Indic script, IAST, or plain
 * English typing like "vishnu sahasranama") to a loose ASCII key so that
 * searches match regardless of script or diacritics.
 */
export function searchKey(text: string): string {
  let s = text.replace(SVARA, '');
  const found = SCRIPT_RANGES.find(([, re]) => re.test(s));
  if (found) {
    const [script] = found;
    // Tamil input is lossy; plain 'tamil' scheme is the best guess for typed Tamil.
    const scheme = script === 'tamil' ? 'tamil' : SCHEME[script];
    s = Sanscript.t(s, scheme, 'iast');
  }
  return looseAscii(s);
}

function looseAscii(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip diacritics: ā→a, ṣ→s, ṃ→m
    .replace(/sh/g, 's')
    .replace(/([kgcjtdpb])h/g, '$1') // aspirates: bh→b, th→t
    .replace(/[wv]/g, 'v')
    .replace(/ri/g, 'r') // ṛ typed as "ri"
    .replace(/(.)\1+/g, '$1') // collapse doubled letters
    .replace(/m(?=[^aeiou]|$)/g, 'n') // anusvara vs. nasal
    .replace(/[^a-z0-9]+/g, '');
}
