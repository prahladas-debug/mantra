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

/*
 * Regional spelling conventions.
 *
 * The source texts use Sanskrit-style nasal conjuncts (मन्त्र, सङ्ग्रह, गोविन्द),
 * which is correct in Devanagari but is NOT how Sanskrit is printed in most
 * regional scripts. Verified against published stotra texts and Wikipedia
 * (Nov 2026):
 *  - Kannada, Telugu, Gujarati: anusvara before every stop consonant
 *    (ಮಂತ್ರ, ಸಂಗ್ರಹ, ಗೋವಿಂದ, ಶಂಖ, ಪುಂಡರೀಕಾಕ್ಷ / మంత్ర, గోవింద / મંત્ર, ગોવિંદ).
 *  - Malayalam: anusvara only for ṅkh/ṅg/ṅgh/mb/mbh (സംഗ്രഹം, ശംഖ്, ശംഭു, അംബ);
 *    other clusters stay conjunct (മന്ത്രം, പഞ്ച, ഗോവിന്ദ, ശങ്കര).
 *  - Tamil, Bengali, Odia: nasal conjuncts are normal (மந்த்ர, গোবিন্দ, ଗୋବିନ୍ଦ).
 */
const NASAL_BEFORE_STOP = /[ङञणनम]्(?=[कखगघचछजझटठडढतथदधपफबभ])/g;
const NASAL_MALAYALAM = /ङ्(?=[खगघ])|म्(?=[बभ])/g;

function preprocess(dev: string, script: ScriptId): string {
  switch (script) {
    case 'kannada':
    case 'telugu':
    case 'gujarati':
      return dev.replace(NASAL_BEFORE_STOP, 'ं');
    case 'malayalam':
      return dev.replace(NASAL_MALAYALAM, 'ं');
    default:
      return dev;
  }
}

const NOT_LETTER = '(?=[\\s।॥|,.;:!?)\\-–—]|$)';

function postprocess(out: string, script: ScriptId): string {
  switch (script) {
    case 'malayalam':
      // Modern Malayalam writes word-final n as the chillu ൻ (ഭഗവാൻ, ശ്രീമാൻ).
      return out.replace(new RegExp('ന്(?!\\u200D)' + NOT_LETTER, 'g'), 'ൻ');
    case 'tamil':
      // ஸ்ரீ is the universal Tamil spelling of śrī.
      return out.replace(/ஶ்ரீ/g, 'ஸ்ரீ');
    case 'bengali':
      // য after a vowel or a full consonant (not as ya-phala, not word-initial) is য় (নারায়ণ).
      return out.replace(/(?<=[অ-ঔক-হা-ৌৗংঃ়])য(?!়)/g, 'য়');
    case 'oriya':
      return (
        out
          // Medial ya is ୟ (ନାରାୟଣ); ya-phala and word-initial ଯ stay.
          .replace(/(?<=[ଅ-ଔକ-ହା-ୌଂଃ])ଯ/g, 'ୟ')
          // Odia writes va as ବ, and as ୱ after a virama (ବିଶ୍ୱ, ସ୍ୱାମୀ). ଵ is rare in fonts.
          .replace(/୍ଵ/g, '୍ୱ')
          .replace(/ଵ/g, 'ବ')
      );
    default:
      return out;
  }
}

const cache = new Map<string, string>();

/** Transliterate Devanagari text into the given script. Results are memoised. */
export function translit(text: string, script: ScriptId): string {
  if (!text) return text;
  const clean = text.replace(SVARA, '');
  if (script === 'devanagari') return clean;
  const key = script + '\u0000' + clean;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;

  const src = preprocess(clean, script);
  let out: string;
  if (script === 'tamil') {
    // tamil_superscripted renders dandas as '.'; protect them and use 0-9 digits,
    // which Tamil readers generally find easier than Tamil numerals.
    const protectedText = src
      .replace(/॥/g, '\uE001')
      .replace(/।/g, '\uE000')
      .replace(/[०-९]/g, (d) => String(DEV_DIGITS.indexOf(d)));
    out = Sanscript.t(protectedText, 'devanagari', SCHEME.tamil)
      // Sanscript sometimes puts the mark after a following ர syllable
      // (धर्म → தர்⁴ம, पुण्डरीक → புண்டரீ³க, ग्रह → க்ர³ஹ). ர never takes a superscript,
      // so move the mark back to the consonant it belongs to (த⁴ர்ம, புண்ட³ரீக, க்³ரஹ).
      .replace(
        /([\u0B95-\u0BB9](?:[\u0BBE-\u0BCC]|\u0BCD)?)(\u0BB0(?:[\u0BC1\u0BC2]\u02BC|[\u0BBE-\u0BCC]|\u0BCD)?)([\u00B2\u00B3\u2074])/g,
        '$1$3$2',
      )
      .replace(/\uE001/g, '॥')
      .replace(/\uE000/g, '।');
  } else {
    out = Sanscript.t(src, 'devanagari', SCHEME[script]);
  }
  out = postprocess(out, script);
  if (cache.size > 5000) cache.clear();
  cache.set(key, out);
  return out;
}

/**
 * Titles: Kannada, Telugu and Malayalam books end titles with anusvara
 * (ಸ್ತೋತ್ರಂ, స్తోత్రం, സ്തോത്രം) rather than म् (ಸ್ತೋತ್ರಮ್).
 */
export function translitTitle(title: string, script: ScriptId): string {
  const t =
    script === 'kannada' || script === 'telugu' || script === 'malayalam'
      ? title.replace(/म्(?=\s|$)/g, 'ं')
      : title;
  return translit(t, script);
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
  // Keep "॥ n ॥" on one line: line-breaking rules allow a break after a danda even
  // before a no-break space, so add a word joiner (U+2060) after the first danda.
  const NB = '\u2060\u00A0';
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
