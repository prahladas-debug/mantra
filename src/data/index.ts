import { searchKey, translit } from '../lib/transliterate';
import { CATEGORIES } from './categories';
import { LIBRARY } from './library.generated';
import type { CategoryId, Mantra } from './types';

export { CATEGORIES, categoryById } from './categories';
export type { Category, CategoryId, Mantra, Section, Verse } from './types';

const DIFFICULTY_ORDER = { easy: 0, medium: 1, advanced: 2 } as const;

export const ALL_MANTRAS: Mantra[] = [...LIBRARY].sort(
  (a, b) =>
    DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty] ||
    a.titleEn.localeCompare(b.titleEn),
);

const byId = new Map(ALL_MANTRAS.map((m) => [m.id, m]));

export function getMantra(id: string): Mantra | undefined {
  return byId.get(id);
}

export function mantrasInCategory(id: CategoryId): Mantra[] {
  return ALL_MANTRAS.filter((m) => m.category === id);
}

export function categoryCounts(): Record<CategoryId, number> {
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, 0])) as Record<CategoryId, number>;
  for (const m of ALL_MANTRAS) counts[m.category]++;
  return counts;
}

export function verseCount(m: Mantra): number {
  return m.sections.reduce((n, s) => n + s.verses.length, 0);
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
