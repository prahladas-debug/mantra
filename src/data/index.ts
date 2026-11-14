import Sanscript from '@indic-transliteration/sanscript';
import { plain } from '../lib/plain';
import { searchKey, translit } from '../lib/transliterate';
import { CATEGORIES } from './categories';
import { LIBRARY } from './library.generated';
import { MEANING_PACKS } from './meanings.generated';
import type { CategoryId, Mantra, MeaningPack } from './types';

export { CATEGORIES, categoryById } from './categories';
export type { Category, CategoryId, Mantra, Section, Verse } from './types';

const DIFFICULTY_ORDER = { easy: 0, medium: 1, advanced: 2 } as const;

/**
 * Kannada-language works are stored in Kannada script; convert them to the
 * Devanagari form the rest of the app works from (lossless, incl. ಱ/ೞ).
 */
function toDevanagari(m: Mantra): Mantra {
  if (m.sourceScript !== 'kannada') return m;
  const k = (t: string) => Sanscript.t(t, 'kannada', 'devanagari');
  return {
    ...m,
    title: k(m.title),
    sections: m.sections.map((s) => ({
      ...s,
      title: s.title && k(s.title),
      verses: s.verses.map((v) => ({ ...v, text: k(v.text) })),
    })),
  };
}

/** Packs that cover each text id. */
const PACKS_BY_ID = new Map<string, MeaningPack[]>();
for (const p of MEANING_PACKS) for (const id of Object.keys(p.texts)) PACKS_BY_ID.set(id, [...(PACKS_BY_ID.get(id) ?? []), p]);

/** Summaries from the packs, merged for every text at start-up (they show in lists). */
function applySummaries(m: Mantra): Mantra {
  const entries = PACKS_BY_ID.get(m.id);
  if (!entries) return m;
  const summaries = { ...m.summaries };
  for (const p of entries) {
    const t = p.texts[m.id].summary;
    if (t) summaries[p.lang] = t;
  }
  return { ...m, summaries };
}

/**
 * Verse meanings from the packs (keys "si.vi"), merged only when a text is opened:
 * there are ~40,000 of them, too many to copy into every verse at start-up.
 */
function applyVerseMeanings(m: Mantra): Mantra {
  const entries = PACKS_BY_ID.get(m.id);
  if (!entries) return m;
  const sections = m.sections.map((s) => ({ ...s, verses: s.verses.map((v) => ({ ...v })) }));
  for (const p of entries) {
    for (const [k, text] of Object.entries(p.texts[m.id].verses)) {
      const [si, vi] = k.split('.').map(Number);
      const v = sections[si]?.verses[vi];
      if (!v) continue;
      const base = typeof v.meaning === 'string' ? { en: v.meaning } : { ...v.meaning };
      v.meaning = { ...base, [p.lang]: text };
    }
  }
  return { ...m, sections };
}

/**
 * English shown in plain spelling (Krishna, Ekadashi) rather than IAST with diacritics,
 * which most readers find strange. `deity` keeps IAST: it is only matched, not shown.
 * Verse meanings are respelled when displayed (lib/meaning.ts meaningText).
 */
function plainEnglish(m: Mantra): Mantra {
  return {
    ...m,
    titleEn: plain(m.titleEn),
    summary: plain(m.summary),
    contentNote: m.contentNote && plain(m.contentNote),
    summaries: m.summaries?.en ? { ...m.summaries, en: plain(m.summaries.en) } : m.summaries,
    sections: m.sections.map((s) => ({
      ...s,
      titleEn: s.titleEn && plain(s.titleEn),
      note: s.note && plain(s.note),
    })),
  };
}

export const ALL_MANTRAS: Mantra[] = LIBRARY.map(toDevanagari).map(applySummaries).map(plainEnglish).sort(
  (a, b) =>
    (a.order ?? 1e6) - (b.order ?? 1e6) ||
    DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty] ||
    a.titleEn.localeCompare(b.titleEn),
);

const byId = new Map(ALL_MANTRAS.map((m) => [m.id, m]));
const full = new Map<string, Mantra>();

/** A text with all its verse meanings (merged on first use, then cached). */
export function getMantra(id: string): Mantra | undefined {
  const hit = full.get(id);
  if (hit) return hit;
  const m = byId.get(id);
  if (!m) return undefined;
  const merged = applyVerseMeanings(m);
  full.set(id, merged);
  return merged;
}

export function mantrasInCategory(id: CategoryId): Mantra[] {
  return ALL_MANTRAS.filter((m) => m.category === id);
}

export function categoryCounts(): Record<CategoryId, number> {
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, 0])) as Record<CategoryId, number>;
  for (const m of ALL_MANTRAS) counts[m.category]++;
  return counts;
}

/** Numbered verses (excludes speaker lines, colophons, steps); falls back to all items. */
export function verseCount(m: Mantra): number {
  const all = m.sections.flatMap((s) => s.verses);
  const numbered = all.filter((v) => v.n !== undefined).length;
  return numbered || all.length;
}

// ---------- search ----------

interface IndexedVerse {
  mantra: Mantra;
  sectionIndex: number;
  verseIndex: number;
  key: string;
}

let titleIndex: { mantra: Mantra; key: string }[] | null = null;
let verseIndex: IndexedVerse[] | null = null;

function buildIndexes() {
  titleIndex = ALL_MANTRAS.map((m) => ({
    mantra: m,
    key: [searchKey(m.title), searchKey(m.titleEn), searchKey(m.deity ?? '')].join(' '),
  }));
  verseIndex = [];
  for (const m of ALL_MANTRAS) {
    m.sections.forEach((s, si) =>
      s.verses.forEach((v, vi) =>
        verseIndex!.push({ mantra: m, sectionIndex: si, verseIndex: vi, key: searchKey(v.text) }),
      ),
    );
  }
}

export interface SearchResult {
  mantra: Mantra;
  /** Present when the match was inside a verse rather than the title. */
  verse?: { sectionIndex: number; verseIndex: number; text: string; n?: number };
}

/** Search titles and full text. Accepts English, IAST or any supported Indic script. */
export function search(query: string, limit = 50): SearchResult[] {
  const q = searchKey(query);
  if (q.length < 2) return [];
  if (!titleIndex || !verseIndex) buildIndexes();

  const results: SearchResult[] = [];
  const seenTitle = new Set<string>();
  for (const t of titleIndex!) {
    if (t.key.includes(q)) {
      results.push({ mantra: t.mantra });
      seenTitle.add(t.mantra.id);
    }
  }
  for (const v of verseIndex!) {
    if (results.length >= limit) break;
    if (v.key.includes(q)) {
      const verse = v.mantra.sections[v.sectionIndex].verses[v.verseIndex];
      results.push({
        mantra: v.mantra,
        verse: { sectionIndex: v.sectionIndex, verseIndex: v.verseIndex, text: verse.text, n: verse.n },
      });
    }
  }
  return results;
}

/** Title in the reader's script, used across lists. */
export function displayTitle(m: { title: string }, script: Parameters<typeof translit>[1]) {
  return translit(m.title, script);
}
