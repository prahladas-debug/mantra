/**
 * Content model.
 *
 * Every text is stored ONCE in Devanagari. All other scripts (Kannada, Telugu,
 * Tamil, Malayalam, IAST, ...) are generated at runtime by
 * `src/lib/transliterate.ts`, so a correction made here fixes every script.
 */

export type CategoryId =
  | 'nitya'
  | 'gita'
  | 'sundarakanda'
  | 'devimahatmya'
  | 'harikathamrutasara'
  | 'sumadhvavijaya'
  | 'vedic'
  | 'sahasranama'
  | 'stotra'
  | 'madhva'
  | 'dasara-pada'
  | 'sandhya'
  | 'puja'
  | 'homa'
  | 'samskara'
  | 'kirtana'
  /** Hindi chalisas and paths (Bajrang Baan, Tulsidas's Sundar Kand). */
  | 'chalisa'
  | 'aarti'
  /** The long works read from bundled assets one sarga/adhyaya at a time (src/lib/books.ts). */
  | 'ramayana'
  | 'ramcharitmanas'
  | 'mahabharata';

export type Difficulty = 'easy' | 'medium' | 'advanced';

/** Languages that verse meanings can be written in. */
export type MeaningLang = 'en' | 'kn' | 'hi' | 'te' | 'ta' | 'ml';

/**
 * A verse meaning. A plain string is English (older entries); an object holds
 * one meaning per language, e.g. { en: '…', kn: '…' }.
 */
export type Meaning = string | Partial<Record<MeaningLang, string>>;

/**
 * Choices a text can offer the reader (e.g. Sandhyāvandane: tradition and
 * time of day). Sections/verses tagged with `when` are shown only if every
 * listed key matches the reader's current choice.
 */
export type VariantKey = 'tradition' | 'time' | 'veda';
export type When = Partial<Record<VariantKey, string[]>>;

export interface VariantOption {
  id: string;
  label: string;
  labelKn?: string;
}

export interface VariantChoice {
  key: VariantKey;
  title: string;
  titleKn?: string;
  options: VariantOption[];
}

export interface Verse {
  /** Verse number, shown as ॥ n ॥ after the text in the reader's script. Omit for prose/steps. */
  n?: number;
  /** Devanagari text. Lines separated by "\n". Do NOT include the verse number. */
  text: string;
  /** Optional meaning in English and/or Kannada. */
  meaning?: Meaning;
  /** Show only for these choices (see VariantChoice). */
  when?: When;
}

export interface Section {
  /** Optional Devanagari heading (gets transliterated). */
  title?: string;
  /** Optional English heading. */
  titleEn?: string;
  /** Optional English instruction/note (e.g. "Sip water three times"). */
  note?: string;
  /** Optional Kannada version of the note. */
  noteKn?: string;
  /** Show only for these choices (see VariantChoice). */
  when?: When;
  verses: Verse[];
}

export interface Mantra {
  /** kebab-case, unique, stable (used for bookmarks). */
  id: string;
  /** Devanagari title. */
  title: string;
  /** English title. */
  titleEn: string;
  category: CategoryId;
  /** Optional position within its category (e.g. Gita chapter number). */
  order?: number;
  /** Texts with the same series are read in `order` with Previous/Next (defaults to the category). */
  series?: string;
  /**
   * Script the verse text is stored in. Default 'devanagari'. Kannada- and Telugu-language works
   * (e.g. Harikathamrutasara, Annamacharya) are stored in their script and converted on load, so
   * they can be read in any script. Tamil-language works (e.g. Tiruppavai) are stored in Tamil and
   * always shown in Tamil: Tamil spelling cannot be converted to other scripts without loss.
   */
  sourceScript?: 'devanagari' | 'kannada' | 'telugu' | 'tamil';
  deity?: string;
  /** Scriptural source, e.g. "Mahābhārata, Anuśāsana Parva". */
  source?: string;
  /** 1–3 sentence English description. */
  summary: string;
  /** Optional Kannada version of the summary. */
  summaryKn?: string;
  /** Summaries in other languages (filled from meaning packs on load). */
  summaries?: Partial<Record<MeaningLang, string>>;
  /** Choices offered at the top of the reader (first option is the default). */
  variants?: VariantChoice[];
  difficulty: Difficulty;
  /**
   * 'complete' = full text as traditionally recited.
   * 'partial'  = some portions are intentionally omitted; explain in `contentNote`.
   */
  completeness: 'complete' | 'partial';
  /** Shown to readers when present (e.g. which verses are still to be added). */
  contentNote?: string;
  sections: Section[];
  /**
   * Number of verses, when `sections` is not loaded: a sarga or adhyaya of the Ramayana or
   * Mahabharata is listed from the books manifest and its text read only when opened.
   */
  verseTotal?: number;
}

export interface Category {
  id: CategoryId;
  title: string;
  titleEn: string;
  description: string;
}

/**
 * Meanings in an additional language, kept outside the text files so that
 * translators never touch the sacred text. Keys are "sectionIndex.verseIndex"
 * (0-based, as in the text file). Merged into Verse.meaning on load.
 */
export interface MeaningPack {
  /** en/kn packs carry meanings for the long works (Gītā, Sundarakāṇḍa …) kept out of the text files. */
  lang: MeaningLang;
  texts: Record<string, { summary?: string; verses: Record<string, string> }>;
}

// ---------- the long works (Valmiki Ramayana, Mahabharata, Tulsidas's Ramcharitmanas) ----------

/** A meaning or summary in each language it has been written in. */
export type LangText = Partial<Record<MeaningLang, string>>;

/** The ids of the works kept as bundled assets, one file per sarga/adhyaya. */
export type BookWorkId = 'ramayana' | 'mahabharata' | 'ramcharitmanas';

/** One sarga/adhyaya in the generated manifest (src/data/books.generated.ts). */
export interface BookUnitEntry {
  /** e.g. 'ramayana-1-001'. */
  id: string;
  unit: number;
  /** Devanagari title as in the source file (e.g. 'प्रथमः सर्गः'). */
  title: string;
  titleEn: string;
  /** Numbered verses. */
  verses: number;
  /** English only: the five-language summaries are in the unit's asset, read when it is opened. */
  summary: LangText;
  /** The asset module (expo-asset), required lazily so nothing is loaded until a unit is opened. */
  asset: () => number;
}

/** A part of a long work that is an existing text or section of the library. */
export interface BookLink {
  /** First and last unit of this part that the linked texts stand for. */
  from: number;
  to: number;
  /** A whole category (e.g. 'sundarakanda', 'gita'), read in its texts' order. */
  category?: CategoryId;
  /** Or a single text id (e.g. 'vishnu-sahasranama'). */
  text?: string;
}

export interface BookPartEntry {
  part: number;
  /** Folder under books-src/<work>/ and assets/books/<work>/, e.g. '1-bala'. */
  dir: string;
  name: string;
  nameEn: string;
  /** Locative of the name for titles ('बालकाण्डे'). */
  nameLoc: string;
  /** Units the part has in the edition (all of them, whether written yet or not). */
  unitCount: number;
  /** Verses the part has in the edition (from book.json). */
  verseCount: number;
  summary: LangText;
  /** Units of this part that are existing texts of the library. */
  links: BookLink[];
  /** Units written so far, in order. */
  units: BookUnitEntry[];
  /** The units' topics in other languages ({ unit: { kn: …, hi: … } }), read when the part is opened. */
  topics?: () => number;
}

export interface BookWork {
  work: BookWorkId;
  title: string;
  titleEn: string;
  /** "kanda"/"sarga", "parva"/"adhyaya" or "kanda"/"prasang", for English labels. */
  partLabel: string;
  unitLabel: string;
  edition: string;
  sources: string[];
  /** First two lines of the opening verse, shown on the work's page. */
  opening?: string;
  parts: BookPartEntry[];
}
