/**
 * The long works (Valmiki Ramayana, Mahabharata, Tulsidas's Ramcharitmanas): the manifest, without loading any text.
 *
 * Each sarga/adhyaya is a bundled asset (assets/books/…/NNN.book) read only when it is opened
 * (src/lib/books.ts loadBookUnit). Lists, search, plans and the routine work from the manifest
 * (src/data/books.generated.ts, written by scripts/build-books.ts): ids, titles, verse counts and
 * summaries. A part may stand for texts the library already has (the Sundarakanda, the Gita);
 * those are read as the library's own texts.
 */
import { plain } from '../lib/plain';
import { BOOKS } from './books.generated';
import { LIBRARY } from './library.generated';
import type { BookPartEntry, BookUnitEntry, BookWork, BookWorkId, CategoryId, Mantra } from './types';

export { BOOKS };

const WORK_IDS = new Set<string>(['ramayana', 'mahabharata', 'ramcharitmanas']);

/** A section of the library that is a long work kept as assets. */
export function isBookWork(id: string): id is BookWorkId {
  return WORK_IDS.has(id);
}

export function bookWork(id: string): BookWork | undefined {
  return BOOKS.find((w) => w.work === id);
}

interface Located {
  work: BookWork;
  part: BookPartEntry;
  unit: BookUnitEntry;
}

const UNITS = new Map<string, Located>();
for (const work of BOOKS) for (const part of work.parts) for (const unit of part.units) UNITS.set(unit.id, { work, part, unit });

/** A sarga/adhyaya of a long work (its text is an asset, loaded with loadBookUnit). */
export function isBookUnit(id: string): boolean {
  return UNITS.has(id);
}

export function bookUnit(id: string): Located | undefined {
  return UNITS.get(id);
}

/** 'बालकाण्डे प्रथमः सर्गः': the part named in the title, as the Sundarakanda's sargas are. */
export function unitTitle(part: BookPartEntry, title: string): string {
  // The name's stem ('बालकाण्ड', 'आदिपर्व'): what the name and its locative share.
  let k = 0;
  while (k < part.name.length && part.name[k] === part.nameLoc[k]) k++;
  const stem = part.name.slice(0, k).replace(/[\u093E-\u094D]$/, '');
  return stem.length > 1 && title.includes(stem) ? title : `${part.nameLoc} ${title}`;
}

/** 'Bala Kanda · Sarga 1 · Narada tells the story of Rama'. */
export function unitTitleEn(part: BookPartEntry, titleEn: string): string {
  return plain(titleEn.startsWith(part.nameEn) ? titleEn : `${part.nameEn} · ${titleEn}`);
}

/**
 * Where a unit stands in its edition. The Ramcharitmanas's prasangs are ten doha-groups each
 * (unit k holds dohas 10(k−1)+1 … 10k, the last unit of a kanda the remainder): 'Bal Kand, dohas 1–10'.
 */
function unitSource(w: BookWork, part: BookPartEntry, unit: number): string {
  if (w.unitLabel !== 'prasang') return `${w.titleEn}, ${part.nameEn}, ${w.unitLabel} ${unit}`;
  const from = 10 * (unit - 1) + 1;
  const to = unit === part.unitCount ? part.verseCount : 10 * unit;
  return `${w.titleEn}, ${part.nameEn}, dohas ${from}–${to}`;
}

/** What every unit shares, whether listed (no sections) or opened. */
export function unitBase(w: BookWork, part: BookPartEntry, u: Pick<BookUnitEntry, 'id' | 'unit' | 'title' | 'titleEn' | 'summary' | 'verses'>): Mantra {
  const en = u.summary.en ?? '';
  return {
    id: u.id,
    // A prasang's title is its episode ('गुरु सन्त और खल की वन्दना'): the kanda stands before it.
    title: w.unitLabel === 'prasang' ? `${part.name} · ${u.title}` : unitTitle(part, u.title),
    titleEn: unitTitleEn(part, u.titleEn),
    category: w.work,
    order: u.unit,
    series: `${w.work}-${part.part}`,
    source: unitSource(w, part, u.unit),
    summary: plain(en),
    summaryKn: u.summary.kn,
    summaries: { ...u.summary, en: plain(en) },
    difficulty: 'medium',
    completeness: 'complete',
    sections: [],
    verseTotal: u.verses,
  };
}

const infoCache = new Map<string, Mantra>();
/** A unit as a text for lists (title, summary, verse count), without its verses. */
export function bookUnitInfo(id: string): Mantra | undefined {
  const hit = infoCache.get(id);
  if (hit) return hit;
  const at = UNITS.get(id);
  if (!at) return undefined;
  const m = unitBase(at.work, at.part, at.unit);
  infoCache.set(id, m);
  return m;
}

/** Every unit written so far, as list entries (for search). */
export function allBookUnits(): Mantra[] {
  return [...UNITS.keys()].map((id) => bookUnitInfo(id)!);
}

/** Library texts of a category in reading order (ids only; the library is not loaded here). */
function categoryIds(category: string): string[] {
  return LIBRARY.filter((m) => m.category === category)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((m) => m.id);
}

/** One line of a part's contents: a unit of the work, or a library text standing for it. */
export interface PartItem {
  id: string;
  unit: number;
  /** A text of the library (the part links to it). */
  linked: boolean;
  /** The last unit it stands for, when one text stands for several (the Ramcharitmanas's Sundar Kand). */
  last?: number;
}

/** The units of a part in order, linked texts in their places. */
export function partItems(part: BookPartEntry): PartItem[] {
  const items: PartItem[] = part.units.map((u) => ({ id: u.id, unit: u.unit, linked: false }));
  for (const l of part.links) {
    const ids = l.category ? categoryIds(l.category) : [l.text!];
    ids.forEach((id, i) => items.push({ id, unit: l.from + i, linked: true, ...(l.text && l.to > l.from ? { last: l.to } : {}) }));
  }
  return items.sort((a, b) => a.unit - b.unit);
}

/** A part that is wholly a section or a text of the library (the Ramayana's Sundarakanda). */
export function linkedWhole(part: BookPartEntry): { category?: CategoryId; text?: string } | undefined {
  const l = part.links[0];
  if (part.links.length !== 1 || l.from !== 1 || l.to !== part.unitCount || part.units.length) return undefined;
  return l.category ? { category: l.category } : l.text ? { text: l.text } : undefined;
}

/** A part that is wholly a section of the library (the Ramayana's Sundarakanda). */
export function linkedCategory(part: BookPartEntry): CategoryId | undefined {
  return linkedWhole(part)?.category;
}

const sequences = new Map<string, string[]>();
/** The whole work in reading order: every unit written so far and the linked texts. */
export function workSequence(work: BookWork): string[] {
  const hit = sequences.get(work.work);
  if (hit) return hit;
  const ids = work.parts.flatMap((p) => partItems(p).map((x) => x.id));
  sequences.set(work.work, ids);
  return ids;
}

/** Numbered verses of a unit or of a linked library text (for plans), if known from the manifest. */
export function bookVerses(id: string): number | undefined {
  return UNITS.get(id)?.unit.verses;
}

interface Place {
  part: BookPartEntry;
  unit: number;
  /** The last unit a linked text stands for (else the unit itself). */
  last: number;
}
const places = new Map<string, Map<string, Place>>();
/** Where each reading of a work stands in the edition (part and unit number). */
function placesOf(work: BookWork): Map<string, Place> {
  const hit = places.get(work.work);
  if (hit) return hit;
  const m = new Map<string, Place>();
  for (const part of work.parts) for (const x of partItems(part)) m.set(x.id, { part, unit: x.unit, last: x.last ?? x.unit });
  places.set(work.work, m);
  return m;
}

/** b comes straight after a in the edition: the next unit of the part, or the first of the next part. */
function follows(a: Place, b: Place): boolean {
  if (a.part === b.part) return b.unit === a.last + 1;
  return b.part.part === a.part.part + 1 && b.unit === 1 && a.last === a.part.unitCount;
}

/**
 * The previous and next reading of a long work, across parts (kanda to kanda) and linked texts.
 * Only a reading that comes straight before or after in the edition: while a work is being
 * written, Next at the last sarga written so far does not leap over the ones still missing
 * (from the Bala Kanda's second sarga to the Sundarakanda).
 */
export function bookNeighbours(id: string): { prev?: string; next?: string; work: BookWork } | undefined {
  for (const work of BOOKS) {
    const seq = workSequence(work);
    const i = seq.indexOf(id);
    if (i < 0) continue;
    const at = placesOf(work);
    const here = at.get(id)!;
    const prev = seq[i - 1];
    const next = seq[i + 1];
    return {
      prev: prev && follows(at.get(prev)!, here) ? prev : undefined,
      next: next && follows(here, at.get(next)!) ? next : undefined,
      work,
    };
  }
  return undefined;
}

/**
 * For a text of the library that is a whole part of a long work (the Sundarakanda in the
 * Ramayana): the units before its first and after its last, so a reader of the work can go on.
 * Texts linked inside a part (the Gita in the Bhishma Parva) keep to their own book.
 */
export function wholePartNeighbours(id: string): { prev?: string; next?: string } | undefined {
  for (const work of BOOKS) {
    for (const part of work.parts) {
      if (!linkedWhole(part) || !partItems(part).some((x) => x.id === id)) continue;
      return bookNeighbours(id);
    }
  }
  return undefined;
}
