/**
 * Opening a sarga/adhyaya of the long works (Valmiki Ramayana, Mahabharata).
 *
 * Their text is not in the JS bundle: each unit is an asset (assets/books/<work>/<part>/NNN.book,
 * written by scripts/build-books.ts) read when the reader opens it, then kept in a small
 * in-memory cache so Previous/Next and going back do not read it again.
 * Lists, search and plans use the manifest helpers re-exported here (src/data/books.ts).
 */
import { plain } from './plain';
import { bookUnit, unitBase } from '../data/books';
import type { Mantra, Section } from '../data/types';
import { readBookAsset } from './bookFile';

export {
  BOOKS,
  bookNeighbours,
  bookUnit,
  bookUnitInfo,
  bookVerses,
  bookWork,
  isBookUnit,
  isBookWork,
  linkedCategory,
  partItems,
  workSequence,
} from '../data/books';

/** The source file's shape (see CONTENT_GUIDE.md, "Long works"). */
interface UnitFile {
  id: string;
  title: string;
  titleEn: string;
  summary: Mantra['summaries'];
  source: string;
  contentNote?: string;
  completeness?: 'complete' | 'partial';
  sections: Section[];
}

/** Units kept in memory: a sarga is at most a few hundred kB with its meanings. */
const CACHE_SIZE = 6;
const cache = new Map<string, Mantra>();
const pending = new Map<string, Promise<Mantra>>();

function remember(id: string, m: Mantra) {
  cache.delete(id);
  cache.set(id, m);
  while (cache.size > CACHE_SIZE) cache.delete(cache.keys().next().value!);
}

/** A unit already in memory (so the reader can open it at once, without a loading state). */
export function peekBookUnit(id: string): Mantra | undefined {
  const m = cache.get(id);
  if (m) remember(id, m);
  return m;
}

function toMantra(id: string, f: UnitFile): Mantra {
  const at = bookUnit(id)!;
  const base = unitBase(at.work, at.part, { ...at.unit, title: f.title, titleEn: f.titleEn, summary: f.summary ?? at.unit.summary });
  return {
    ...base,
    // The reader shows the work's name before the source: 'Valmiki Ramayana, Bala Kanda …' would say it twice.
    source: f.source ? f.source.replace(new RegExp(`^${at.work.titleEn},?\\s*`), '') : base.source,
    contentNote: f.contentNote && plain(f.contentNote),
    completeness: f.completeness ?? 'complete',
    sections: f.sections.map((s) => ({ ...s, titleEn: s.titleEn && plain(s.titleEn), note: s.note && plain(s.note) })),
  };
}

/** Read one sarga/adhyaya as a text the reader can show (meanings on its verses). */
export function loadBookUnit(id: string): Promise<Mantra> {
  const hit = peekBookUnit(id);
  if (hit) return Promise.resolve(hit);
  const running = pending.get(id);
  if (running) return running;
  const at = bookUnit(id);
  if (!at) return Promise.reject(new Error(`no book unit ${id}`));
  const p = readBookAsset(at.unit.asset())
    .then((text) => {
      const m = toMantra(id, JSON.parse(text) as UnitFile);
      remember(id, m);
      return m;
    })
    .finally(() => pending.delete(id));
  pending.set(id, p);
  return p;
}

/** Read the next unit ahead of time, so Next opens at once. Errors are ignored here. */
export function prefetchBookUnit(id: string | undefined) {
  if (id && bookUnit(id) && !cache.has(id)) loadBookUnit(id).catch(() => {});
}
