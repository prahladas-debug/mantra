import type { CategoryId, Mantra } from '../data/types';
import { deityKey } from './deities';
import { T } from './i18n';

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

/**
 * Works read part by part: every text of the category is one part. The Ramayana and the
 * Mahabharata are books too, listed from their manifest (src/data/books.ts) kanda by kanda.
 */
export const BOOK_CATEGORIES = new Set<CategoryId>(['gita', 'sundarakanda', 'devimahatmya', 'sumadhvavijaya', 'harikathamrutasara', 'ramayana', 'ramcharitmanas', 'mahabharata']);

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
      // Padas are looked for by their composer: one heading each for the dasas with several, the rest together.
      const c = padaComposer(m);
      const i = COMPOSERS.findIndex(([name]) => name === c);
      return i >= 0 && COMPOSERS[i][1] ? [`composer-${i}`, c!, i] : ['composer-other', 'Other Haridasas', COMPOSERS.length];
    }
    case 'kirtana':
      if (m.sourceScript === 'tamil') return ['tamil', 'Tamil', 0];
      if (m.sourceScript === 'telugu') return ['telugu', 'Telugu', 1];
      return /aarti/.test(id) ? ['aarti', 'Hindi · Aartis', 3] : ['hindi', 'Hindi · Chalisas and stotras', 2];
    case 'chalisa': {
      if (/^tulsi-sundar-kand/.test(id)) return ['path', 'Tulsidas · Sundar Kand', 99];
      const [g, t] = deityGroup(m);
      // Hanuman's chalisa, Bajrang Baan and Ashtak are the ones most read: they lead.
      return [g, t, g === 'hanuman' ? -1 : DEITY_ORDER.indexOf(g)];
    }
    case 'aarti': {
      if (/^bhajan-/.test(id)) return ['bhajan', 'Bhajans', 98];
      const [g, t] = deityGroup(m);
      return [g, t, DEITY_ORDER.indexOf(g)];
    }
    case 'vedic':
      if (/upanishad|shikshavalli/.test(id)) return ['upanishad', 'Upanishads', 2];
      if (/rudram|atharvashirsha|mantra-pushpam|shanti/.test(id)) return ['other', 'Rudram and other Vedic texts', 1];
      return ['sukta', 'Suktas', 0];
    case 'madhva':
      if (/raghavendra/.test(id)) return ['raghavendra', 'Sri Raghavendra Swami', 3];
      if (/lakshmi-shobhane|dashavatara|vadiraja/.test(id)) return ['vadiraja', 'Sri Vadiraja Tirtha', 1];
      if (/vayu-stuti/.test(id)) return ['vayu', 'Sri Trivikrama Panditacharya', 2];
      if (/yantrodharaka/.test(id)) return ['vyasaraja', 'Sri Vyasaraja Tirtha', 0.5];
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

// ---------- Dasara padas: composers and deities ----------

/**
 * The Haridasas, in the order their headings come (Purandara and Kanaka first, then by period),
 * and whether each has a heading of their own; the rest are listed under "Other Haridasas".
 * The names are interface strings, translated in src/i18n.
 */
const COMPOSERS: [name: string, heading: boolean][] = [
  [T('Purandara Dasa'), true],
  [T('Kanaka Dasa'), true],
  [T('Sripadaraja'), true],
  [T('Vyasaraja'), true],
  [T('Vadiraja'), true],
  [T('Raghavendra Tirtha'), false],
  [T('Vijaya Dasa'), true],
  [T('Gopala Dasa'), true],
  [T('Jagannatha Dasa'), false],
  [T('Prasanna Venkata Dasa'), false],
  [T('Mahipati Dasa'), false],
  [T('Helavanakatte Giriyamma'), false],
  [T('Mohana Dasa'), false],
  [T('Guru Jagannatha Dasa'), false],
  [T('Shreeda Vittala Dasa'), false],
];

/** A pada's composer, from its English title ("Purandara Dasa · Jagadoddharana"). */
export function padaComposer(m: Mantra): string | undefined {
  if (m.category !== 'dasara-pada') return undefined;
  const c = m.titleEn.split(' · ')[0];
  return COMPOSERS.some(([name]) => name === c) ? c : undefined;
}

/** Whether a pada's composer has a heading of their own (so a row under it need not name them). */
export function hasComposerHeading(m: Mantra): boolean {
  const c = padaComposer(m);
  return !!COMPOSERS.find(([name]) => name === c)?.[1];
}

/**
 * The filter chips of a category, when they are not its headings: the Dasara padas are headed
 * by composer and filtered by the deity they praise.
 */
export function filtersFor(category: CategoryId, list: Mantra[]): { id: string; title: string; ids: Set<string> }[] | undefined {
  if (category !== 'dasara-pada') return undefined;
  const by = new Map<string, { title: string; order: number; ids: Set<string> }>();
  for (const m of list) {
    let [g, t] = deityGroup(m);
    if (/-(mangal\w*|lali|arati\w*)(-|$)/.test(m.id)) [g, t] = ['mangala', T('Lali and Mangalarati')];
    else if (/raghavendra|rayara|dasarendare/.test(m.id)) [g, t] = ['guru', T('Gurus and Haridasas')];
    else if (g === 'vishnu') t = T('Hari');
    const f = by.get(g) ?? { title: t, order: g === 'mangala' ? 99 : g === 'guru' ? 98 : DEITY_ORDER.indexOf(g), ids: new Set<string>() };
    f.ids.add(m.id);
    by.set(g, f);
  }
  return [...by.entries()].sort((a, b) => a[1].order - b[1].order).map(([id, f]) => ({ id, title: f.title, ids: f.ids }));
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

// ---------- song languages ----------

/** The language a devotional song is sung in (Sanskrit verses are for everyone). */
export type SongLang = 'sa' | 'hi' | 'mr' | 'kn' | 'te' | 'ta' | 'ml';

/** Categories whose texts are songs in one regional language each. */
export const SONG_CATEGORIES = new Set<CategoryId>(['aarti', 'chalisa', 'kirtana', 'dasara-pada']);

/** Each language named in its own script (no translation needed). */
export const SONG_LANG_NAMES: Record<SongLang, string> = {
  sa: 'संस्कृतम्', hi: 'हिन्दी', mr: 'मराठी', kn: 'ಕನ್ನಡ', te: 'తెలుగు', ta: 'தமிழ்', ml: 'മലയാളം',
};

const MARATHI_AARTIS = /^aarti-(sukhakarta|durge-durghat|lavthavti|trigunatmak|ghalin|shendur)/;
const SANSKRIT_AARTIS = /^aarti-(karpura-gauram|mangala-shlokas)$/;

/** The song's language, or undefined for a text that is not a regional song. */
export function songLanguage(m: Mantra): SongLang | undefined {
  if (!SONG_CATEGORIES.has(m.category)) return undefined;
  if (m.category === 'dasara-pada') return 'kn';
  if (m.sourceScript === 'tamil') return 'ta';
  if (m.sourceScript === 'telugu') return 'te';
  if (m.sourceScript === 'kannada') return 'kn';
  if (m.category === 'aarti') return MARATHI_AARTIS.test(m.id) ? 'mr' : SANSKRIT_AARTIS.test(m.id) ? 'sa' : 'hi';
  return 'hi';
}
