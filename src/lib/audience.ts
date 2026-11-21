/**
 * Who the reader is, so that Home, the Library, the festival lists and the suggestions lead with
 * what that audience reads and keeps. Only ordering and emphasis: every text stays in the Library
 * and in Search. Pure (no React), so the festival code and the tests can use it; the hook is in
 * useAudience.ts.
 *
 * The audience comes from, in order: the reader's own "Content for" choice in Settings; the
 * interface language (hi, kn, te, ta, ml); for an English interface, the reading script; for the
 * English script, the state of the chosen city; else 'general'.
 */
import { PURNIMANTA_STATES } from './panchanga';
import type { ScriptId } from './transliterate';

/** Marks an English interface string kept in a constant, so the key-finder sees it (same as i18n's T, without its React imports). */
const T = (s: string) => s;

export type Audience = 'north' | 'west' | 'kannada' | 'telugu' | 'tamil' | 'malayalam' | 'general';

/** The Settings choice: follow the language, script and place, or one audience for everything. */
export type ContentPref = 'auto' | Audience;

/** The choices as Settings shows them (labels are English interface strings, translated where shown). */
export const CONTENT_PREFS: { id: ContentPref; label: string }[] = [
  { id: 'auto', label: T('Automatic') },
  { id: 'north', label: T('North India') },
  { id: 'west', label: T('Maharashtra & Gujarat') },
  { id: 'kannada', label: T('Karnataka') },
  { id: 'telugu', label: T('Andhra & Telangana') },
  { id: 'tamil', label: T('Tamil Nadu') },
  { id: 'malayalam', label: T('Kerala') },
  { id: 'general', label: T('All India') },
];

const AUDIENCES: readonly string[] = ['north', 'west', 'kannada', 'telugu', 'tamil', 'malayalam', 'general'];
export const isAudience = (v: unknown): v is Audience => typeof v === 'string' && AUDIENCES.includes(v);
export const isContentPref = (v: unknown): v is ContentPref => v === 'auto' || isAudience(v);

const BY_UI_LANG: Record<string, Audience> = { hi: 'north', kn: 'kannada', te: 'telugu', ta: 'tamil', ml: 'malayalam' };
const BY_SCRIPT: Partial<Record<ScriptId, Audience>> = { kannada: 'kannada', telugu: 'telugu', tamil: 'tamil', malayalam: 'malayalam', gujarati: 'west', devanagari: 'north' };
const WEST_STATES = ['Maharashtra', 'Gujarat', 'Goa', 'Dadra and Nagar Haveli and Daman and Diu'];
const BY_STATE: Record<string, Audience> = {
  Karnataka: 'kannada', 'Andhra Pradesh': 'telugu', Telangana: 'telugu', 'Tamil Nadu': 'tamil', Puducherry: 'tamil', Kerala: 'malayalam',
};

export interface AudienceInput {
  /** The resolved interface language (useI18n().lang). */
  uiLang: string;
  script: ScriptId;
  /** The state of the reader's city, if known. */
  cityState?: string;
  /** The Settings choice. */
  override?: ContentPref;
}

export function audienceFor({ uiLang, script, cityState, override }: AudienceInput): Audience {
  if (override && override !== 'auto' && isAudience(override)) return override;
  const byLang = BY_UI_LANG[uiLang];
  if (byLang) return byLang;
  const byScript = BY_SCRIPT[script];
  if (byScript) return byScript;
  if (cityState) {
    if (PURNIMANTA_STATES.includes(cityState)) return 'north';
    if (WEST_STATES.includes(cityState)) return 'west';
    if (BY_STATE[cityState]) return BY_STATE[cityState];
  }
  return 'general';
}

// ---------- what each audience sees first ----------

const MADHVA_WORKS = ['harikathamrutasara', 'sumadhvavijaya', 'vayu-stuti'];
const SMARTA_WORKS = ['devimahatmya', 'lalitha-sahasranama', 'saundarya-lahari'];

const SOUTH_WORKS = ['gita', 'vishnu-sahasranama', 'ramayana', 'sundarakanda', 'mahabharata', 'lalitha-sahasranama', 'saundarya-lahari', 'devimahatmya', 'ramcharitmanas', ...MADHVA_WORKS];

/** The great works (Shelf.tsx GREAT_WORKS: category, else text id) in the order each audience meets them. */
const WORKS: Record<Audience, string[]> = {
  north: ['gita', 'ramcharitmanas', 'vishnu-sahasranama', 'ramayana', 'sundarakanda', 'mahabharata', 'devimahatmya', 'lalitha-sahasranama', 'saundarya-lahari', ...MADHVA_WORKS],
  west: ['gita', 'vishnu-sahasranama', 'ramayana', 'ramcharitmanas', 'sundarakanda', 'mahabharata', 'devimahatmya', 'lalitha-sahasranama', 'saundarya-lahari', ...MADHVA_WORKS],
  kannada: ['gita', 'vishnu-sahasranama', 'sundarakanda', 'ramayana', 'ramcharitmanas', 'mahabharata', ...MADHVA_WORKS, ...SMARTA_WORKS],
  telugu: SOUTH_WORKS,
  tamil: SOUTH_WORKS,
  malayalam: SOUTH_WORKS,
  general: SOUTH_WORKS,
};

/**
 * `works` (anything with a `tradition`) in the audience's order. Within the works that belong to
 * one tradition (Madhva or Smarta), the reader's own come first, in the places those works
 * hold; works not listed keep their place at the end.
 */
export function orderWorks<W extends { category?: string; textId?: string; tradition?: 'madhva' | 'smarta' }>(works: W[], audience: Audience, tradition: string | undefined): W[] {
  const rank = WORKS[audience];
  const at = (w: W) => {
    const i = rank.indexOf((w.category ?? w.textId) as string);
    return i < 0 ? rank.length : i;
  };
  const sorted = [...works].sort((a, b) => at(a) - at(b));
  const own = tradition === 'smarta' ? 'smarta' : 'madhva';
  const slots = sorted.flatMap((w, i) => (w.tradition ? [i] : []));
  const tagged = slots.map((i) => sorted[i]).sort((a, b) => Number(a.tradition !== own) - Number(b.tradition !== own));
  slots.forEach((slot, k) => (sorted[slot] = tagged[k]));
  return sorted;
}

/** The Library categories of each shelf, in the audience's order. */
export interface ShelfSpec { title: string; categories: string[] }
const SONGS: Record<Audience, string[]> = {
  north: ['chalisa', 'aarti', 'kirtana', 'dasara-pada'],
  west: ['aarti', 'chalisa', 'kirtana', 'dasara-pada'],
  kannada: ['dasara-pada', 'aarti', 'kirtana', 'chalisa'],
  telugu: ['kirtana', 'aarti', 'dasara-pada', 'chalisa'],
  tamil: ['kirtana', 'aarti', 'dasara-pada', 'chalisa'],
  malayalam: ['kirtana', 'aarti', 'dasara-pada', 'chalisa'],
  general: ['aarti', 'kirtana', 'chalisa', 'dasara-pada'],
};

/** Library shelves: titles are English interface strings. North puts the songs right after Every day. */
export function shelvesFor(audience: Audience): ShelfSpec[] {
  const day: ShelfSpec = { title: T('Every day'), categories: audience === 'north' || audience === 'west' ? ['nitya', 'puja', 'sandhya'] : ['nitya', 'sandhya', 'puja'] };
  const stotras: ShelfSpec = { title: T('Stotras and names'), categories: audience === 'kannada' ? ['stotra', 'sahasranama', 'madhva', 'vedic'] : ['stotra', 'sahasranama', 'vedic', 'madhva'] };
  const songs: ShelfSpec = { title: T('Devotional songs'), categories: SONGS[audience] };
  const rites: ShelfSpec = { title: T('Yajnas and rites'), categories: ['homa', 'samskara'] };
  return audience === 'north' || audience === 'west' ? [day, songs, stotras, rites] : [day, stotras, songs, rites];
}

/** The category tiles of Home's "Devotional songs": the first is shown wide. */
export const HOME_SONGS: Record<Audience, string[]> = {
  north: ['chalisa', 'aarti', 'kirtana'],
  west: ['aarti', 'chalisa', 'kirtana'],
  kannada: ['dasara-pada', 'aarti', 'kirtana'],
  telugu: ['kirtana', 'aarti', 'dasara-pada'],
  tamil: ['kirtana', 'aarti', 'dasara-pada'],
  malayalam: ['kirtana', 'aarti', 'dasara-pada'],
  general: ['aarti', 'kirtana', 'dasara-pada'],
};

/**
 * The languages an audience reads (Sanskrit is everyone's): songs and works in other languages
 * are folded away (one tap shows them). null: show every language ('general' is "All India").
 */
export const AUDIENCE_SONG_LANGS: Record<Audience, string[] | null> = {
  north: ['hi', 'sa'],
  west: ['mr', 'hi', 'sa'],
  kannada: ['kn', 'sa'],
  telugu: ['te', 'sa'],
  tamil: ['ta', 'sa'],
  malayalam: ['ml', 'sa'],
  general: null,
};

/** The great works not written in Sanskrit, by language (Shelf.tsx GREAT_WORKS key). */
const WORK_LANGS: Record<string, string> = { ramcharitmanas: 'hi', harikathamrutasara: 'kn' };

/**
 * Whether a great work is in a language the audience reads. Works in other languages fold away
 * on the Library shelf and are left off Home. Harikathamrutasara stays for every Madhva reader.
 */
export function isOwnWork(key: string, audience: Audience, tradition: string | undefined): boolean {
  const l = WORK_LANGS[key];
  const langs = AUDIENCE_SONG_LANGS[audience];
  if (!l || !langs) return true;
  if (key === 'harikathamrutasara' && tradition === 'madhva') return true;
  return langs.includes(l);
}

/** The song category that holds an audience's own songs, offered at the top of the other song lists. */
export const OWN_SONGS: Record<Audience, string | null> = {
  north: 'chalisa',
  west: 'aarti',
  kannada: 'dasara-pada',
  telugu: 'kirtana',
  tamil: 'kirtana',
  malayalam: null,
  general: null,
};

/** Deity medallions (ids of deities.ts) in the audience's order. */
export const DEITY_ORDER: Record<Audience, string[]> = {
  north: ['vayu', 'vishnu', 'shiva', 'devi', 'ganesha', 'surya', 'subrahmanya', 'guru'],
  west: ['ganesha', 'vishnu', 'shiva', 'devi', 'vayu', 'surya', 'subrahmanya', 'guru'],
  kannada: ['vishnu', 'devi', 'shiva', 'ganesha', 'vayu', 'surya', 'subrahmanya', 'guru'],
  telugu: ['vishnu', 'shiva', 'devi', 'ganesha', 'vayu', 'subrahmanya', 'surya', 'guru'],
  tamil: ['subrahmanya', 'vishnu', 'shiva', 'devi', 'ganesha', 'vayu', 'surya', 'guru'],
  malayalam: ['vishnu', 'devi', 'shiva', 'ganesha', 'subrahmanya', 'vayu', 'surya', 'guru'],
  general: ['vishnu', 'shiva', 'devi', 'ganesha', 'vayu', 'surya', 'subrahmanya', 'guru'],
};

/** Texts suggested first when choosing the daily routine. */
export const ROUTINE_SUGGESTED: Record<Audience, string[]> = {
  north: ['hanuman-chalisa', 'tulsi-sundar-kand', 'om-jai-jagdish-hare', 'vishnu-sahasranama', 'shiv-chalisa', 'aditya-hridayam', 'gayatri', 'ram-chalisa', 'durga-chalisa', 'nitya-puja'],
  west: ['ganesh-aarti', 'hanuman-chalisa', 'om-jai-jagdish-hare', 'vishnu-sahasranama', 'aditya-hridayam', 'shiv-chalisa', 'gayatri', 'nitya-puja', 'tulsi-sundar-kand', 'lalitha-sahasranama'],
  kannada: ['sandhya-vandane-rigveda', 'nitya-puja', 'vayu-stuti', 'vishnu-sahasranama', 'raghavendra-stotram', 'dvadasha-stotra-01', 'lalitha-sahasranama', 'hanuman-chalisa', 'aditya-hridayam', 'venkatesha-suprabhatam'],
  telugu: ['venkatesha-suprabhatam', 'vishnu-sahasranama', 'lalitha-sahasranama', 'aditya-hridayam', 'nitya-puja', 'sandhya-vandane-yajurveda', 'hanuman-chalisa', 'ganesha-pancharatnam', 'lingashtakam', 'durga-saptashloki'],
  tamil: ['tiruppavai', 'skanda-shashti-kavacham', 'vishnu-sahasranama', 'lalitha-sahasranama', 'aditya-hridayam', 'nitya-puja', 'sandhya-vandane-yajurveda', 'hanuman-chalisa', 'venkatesha-suprabhatam', 'lingashtakam'],
  malayalam: ['vishnu-sahasranama', 'lalitha-sahasranama', 'nitya-puja', 'aditya-hridayam', 'sandhya-vandane-yajurveda', 'ganesha-pancharatnam', 'hanuman-chalisa', 'durga-saptashloki', 'lingashtakam', 'venkatesha-suprabhatam'],
  general: ['nitya-puja', 'vishnu-sahasranama', 'hanuman-chalisa', 'aditya-hridayam', 'sandhya-vandane-rigveda', 'lalitha-sahasranama', 'om-jai-jagdish-hare', 'venkatesha-suprabhatam', 'gayatri', 'ganesha-pancharatnam'],
};

// ---------- festivals ----------

/**
 * Is a festival shown to this audience? One with no `regions` is for everybody, and 'general'
 * ("All India") sees everything. A Madhva reader (`madhvaRule`) always sees the Madhva observances.
 */
export function festivalForAudience(f: { regions?: Audience[]; madhva?: boolean }, audience: Audience, madhvaRule = false): boolean {
  if (!f.regions || audience === 'general' || f.regions.includes(audience)) return true;
  return madhvaRule && !!f.madhva;
}
