/**
 * Content model.
 *
 * Every text is stored ONCE in Devanagari. All other scripts (Kannada, Telugu,
 * Tamil, Malayalam, IAST, ...) are generated at runtime by
 * `src/lib/transliterate.ts`, so a correction made here fixes every script.
 */

export type CategoryId =
  | 'nitya'
  | 'vedic'
  | 'sahasranama'
  | 'stotra'
  | 'madhva'
  | 'sandhya'
  | 'puja';

export type Difficulty = 'easy' | 'medium' | 'advanced';

export interface Verse {
  /** Verse number, shown as ॥ n ॥ after the text in the reader's script. Omit for prose/steps. */
  n?: number;
  /** Devanagari text. Lines separated by "\n". Do NOT include the verse number. */
  text: string;
  /** Optional short English meaning. */
  meaning?: string;
}

export interface Section {
  /** Optional Devanagari heading (gets transliterated). */
  title?: string;
  /** Optional English heading. */
  titleEn?: string;
  /** Optional English instruction/note (e.g. "Sip water three times"). */
  note?: string;
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
  deity?: string;
  /** Scriptural source, e.g. "Mahābhārata, Anuśāsana Parva". */
  source?: string;
  /** 1–3 sentence English description. */
  summary: string;
  difficulty: Difficulty;
  /**
   * 'complete' = full text as traditionally recited.
   * 'partial'  = some portions are intentionally omitted; explain in `contentNote`.
   */
  completeness: 'complete' | 'partial';
  /** Shown to readers when present (e.g. which verses are still to be added). */
  contentNote?: string;
  sections: Section[];
}

export interface Category {
  id: CategoryId;
  title: string;
  titleEn: string;
  description: string;
}
