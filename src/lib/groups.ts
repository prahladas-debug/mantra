import type { CategoryId, Mantra } from '../data/types';
import { deityKey } from './deities';

/** One line in a list: a text, or a multi-part work folded into one row. */
export interface Entry {
  mantra: Mantra;
  /** Parts of a folded work, in order (includes `mantra` itself as the first). */
  parts?: Mantra[];
  /** Name shown for a folded work. */
  seriesTitle?: { title: string; titleEn: string };
}

export interface Group {
  id: string;
  /** Plain English heading; '' for a list with no sub-headings. */
  title: string;
  entries: Entry[];
}

/** Works read part by part: every text of the category is one part. */
export const BOOK_CATEGORIES = new Set<CategoryId>(['gita', 'sundarakanda', 'devimahatmya', 'sumadhvavijaya', 'harikathamrutasara']);

/** Names for series that fold into one row (three or more parts). */
const SERIES_NAMES: Record<string, { title: string; titleEn: string }> = {
  'dvadasha-stotra': { title: 'द्वादशस्तोत्रम्', titleEn: 'Dvadasha Stotra' },
  venkatesha: { title: 'श्रीवेङ्कटेशसुप्रभातम्', titleEn: 'Venkatesha Suprabhatam, Stotram, Prapatti, Mangalashasanam' },
};

const DEITY_GROUPS: [id: string, title: string, match: RegExp][] = [
  ['ganesha', 'Ganesha', /ganesh|ganapati|vinayaka/],
  ['venkatesha', 'Venkatesha', /venkat|srinivasa/],
  ['krishna', 'Krishna', /krishna|govinda|mukunda|damodara|gopala|ranga(natha)?\b/],
  ['hanuman', 'Hanuman · Vayu', /hanuman|anjaneya|vayu|mukhyaprana|manyu/],
  ['vishnu', 'Vishnu · Rama · Narasimha', /vishnu|hari\b|\brama\b|narayana|vith?thala|achyuta|ananta|jagadisha/],
  ['shiva', 'Shiva', /shiva|rudra|bhairava|dakshinamurti|tryambaka/],
  ['devi', 'Lakshmi · Devi', /lakshmi|durga|lalita|devi|parvati|gauri|sarasvati|sharada|annapurna|minakshi|meenakshi|bhavani|bharati|andal/],
  ['surya', 'Surya · Navagraha', /surya|aditya|savitr|graha/],
  ['subrahmanya', 'Subrahmanya', /subrahmanya|murugan|skanda/],
];

/** The first deity named on the text's deity line decides its group. */
function deityGroup(m: Mantra): [string, string] {
  const d = deityKey(m);
  // Lakshmi-Narasimha, Narasimha (Hari): a Narasimha text, whoever is named first.
  if (/narasimha|nrisimha/.test(d)) return ['vishnu', 'Vishnu · Rama · Narasimha'];
  let best: [number, string, string] | null = null;
  for (const [id, title, re] of DEITY_GROUPS) {
    const i = d.search(re);
    if (i >= 0 && (!best || i < best[0])) best = [i, id, title];
  }
  return best ? [best[1], best[2]] : ['other', 'Other'];
}

const DEITY_ORDER = ['vishnu', 'krishna', 'venkatesha', 'devi', 'shiva', 'ganesha', 'hanuman', 'surya', 'subrahmanya', 'other'];

/** Which sub-heading a text goes under, per category. */
function groupOf(m: Mantra): [id: string, title: string, order: number] {
  const id = m.id;
  switch (m.category) {
    case 'stotra': {
      const [g, t] = deityGroup(m);
      return [g, t, DEITY_ORDER.indexOf(g)];
    }
    case 'dasara-pada': {
      if (/suladi|ugabhoga/.test(id)) return ['suladi', 'Suladi and Ugabhoga', 100];
      if (/-(mangal\w*|lali|arati\w*)(-|$)/.test(id)) return ['mangala', 'Lali and Mangalarati', 99];
      if (/raghavendra|rayara|dasarendare/.test(id)) return ['guru', 'Gurus and Haridasas', 98];
      const [g, t] = deityGroup(m);
      return [g, g === 'vishnu' ? 'Hari' : t, DEITY_ORDER.indexOf(g)];
    }
    case 'kirtana':
      if (m.sourceScript === 'tamil') return ['tamil', 'Tamil', 0];
      if (m.sourceScript === 'telugu') return ['telugu', 'Telugu', 1];
      return /aarti/.test(id) ? ['aarti', 'Hindi · Aartis', 3] : ['hindi', 'Hindi · Chalisas and stotras', 2];
    case 'vedic':
      if (/upanishad|shikshavalli/.test(id)) return ['upanishad', 'Upanishads', 2];
      if (/rudram|atharvashirsha|mantra-pushpam|shanti/.test(id)) return ['other', 'Rudram and other Vedic texts', 1];
      return ['sukta', 'Suktas', 0];
    case 'madhva':
      if (/raghavendra/.test(id)) return ['raghavendra', 'Sri Raghavendra Swami', 3];
      if (/lakshmi-shobhane|dashavatara/.test(id)) return ['vadiraja', 'Sri Vadiraja Tirtha', 1];
      if (/vayu-stuti/.test(id)) return ['vayu', 'Sri Trivikrama Panditacharya', 2];
      return ['madhva', 'Sri Madhvacharya', 0];
    case 'puja':
      if (/^(nitya-puja|shodashopachara-puja|tulasi-puja|pitru-tarpana)$/.test(id)) return ['daily', 'Daily and regular', 0];
      return ['vrata', 'Festival vratas', 1];
    case 'sahasranama':
      if (/sahasranama/.test(id)) return ['sahasra', 'Sahasranama (1000 names)', 0];
      if (/trishati/.test(id)) return ['trishati', 'Trishati (300 names)', 1];
      return ['ashtottara', 'Ashtottara (108 names)', 2];
    default:
      return ['all', '', 0];
  }
}

/** Fold runs of the same series (three or more parts) into one entry. */
function fold(list: Mantra[]): Entry[] {
  const out: Entry[] = [];
  const bySeries = new Map<string, Entry>();
  const counts = new Map<string, number>();
  for (const m of list) if (m.series) counts.set(m.series, (counts.get(m.series) ?? 0) + 1);
  for (const m of list) {
    if (m.series && (counts.get(m.series) ?? 0) >= 3) {
      const e = bySeries.get(m.series);
      if (e) e.parts!.push(m);
      else {
        const entry: Entry = { mantra: m, parts: [m], seriesTitle: SERIES_NAMES[m.series] };
        bySeries.set(m.series, entry);
        out.push(entry);
      }
    } else out.push({ mantra: m });
  }
  return out;
}

/** A category's texts under sub-headings, multi-part works folded. */
export function groupsFor(category: CategoryId, list: Mantra[]): Group[] {
  if (BOOK_CATEGORIES.has(category)) return [{ id: 'all', title: '', entries: list.map((mantra) => ({ mantra })) }];
  const groups = new Map<string, { title: string; order: number; items: Mantra[] }>();
  for (const m of list) {
    const [id, title, order] = groupOf(m);
    const g = groups.get(id) ?? { title, order, items: [] };
    g.items.push(m);
    groups.set(id, g);
  }
  return [...groups.entries()]
    .sort((a, b) => a[1].order - b[1].order)
    .map(([id, g]) => ({ id, title: g.title, entries: fold(g.items) }));
}

/** For mixed lists (a deity page): fold books and long series, keep single texts. */
export function foldMixed(list: Mantra[]): Entry[] {
  const out: Entry[] = [];
  const seen = new Map<string, Entry>();
  for (const m of list) {
    const key = BOOK_CATEGORIES.has(m.category) ? m.category : m.series;
    if (!key) {
      out.push({ mantra: m });
      continue;
    }
    const e = seen.get(key);
    if (e) e.parts!.push(m);
    else {
      const entry: Entry = { mantra: m, parts: [m], seriesTitle: SERIES_NAMES[key] };
      seen.set(key, entry);
      out.push(entry);
    }
  }
  // A "series" of one or two is just listed.
  return out.flatMap((e) => (e.parts && e.parts.length < 3 ? e.parts.map((mantra) => ({ mantra })) : [e]));
}
