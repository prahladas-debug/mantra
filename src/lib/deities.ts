import type { Mantra } from '../data/types';
import { DEITY_ORDER, type Audience } from './audience';
import { plain } from './plain';

/** Deity groups for browsing. A text can belong to several groups. */
export interface DeityGroup {
  id: string;
  /** Devanagari, transliterated to the reader's script. */
  title: string;
  titleEn: string;
  /** A one-word name for a small label. */
  short?: string;
  match: RegExp;
}

// Patterns are matched against the deity in plain spelling (Krishna, not Kṛṣṇa), so texts
// written either way are found.
const GROUPS: DeityGroup[] = [
  { id: 'vishnu', title: 'श्रीहरिः', titleEn: 'Vishnu · Krishna · Rama', match: /vishnu|hari\b|krishna|\brama\b|narayana|venkat|srinivasa|narasimha|nrisimha|vasudeva|vith?thala|mukunda|govinda|purusha|ananta|jagadisha|ranganatha|ranga\b|keshava|dhanvantari|achyuta/ },
  { id: 'devi', title: 'देवी', titleEn: 'Devi · Lakshmi · Lalita', match: /devi|lakshmi|lalita|durga|chandika|ambhrini|sarasvati|sharada|gauri|parvati|annapurna|minakshi|meenakshi|bhavani|andal/ },
  { id: 'shiva', title: 'शिवः', titleEn: 'Shiva · Rudra', match: /shiva|rudra|bhairava|dakshinamurti|tryambaka|mrityunjaya/ },
  { id: 'ganesha', title: 'गणेशः', titleEn: 'Ganesha', match: /ganesh|ganapati|vinayaka/ },
  { id: 'vayu', title: 'हनुमान् · वायुः', short: 'हनुमान्', titleEn: 'Hanuman · Vayu', match: /hanuman|anjaneya|vayu|mukhyaprana|bhima|manyu/ },
  { id: 'surya', title: 'सूर्यः · ग्रहाः', short: 'सूर्यः', titleEn: 'Surya · Navagraha', match: /surya|savitr|savitri|aditya|graha/ },
  { id: 'subrahmanya', title: 'सुब्रह्मण्यः', titleEn: 'Subrahmanya', match: /subrahmanya|murugan|skanda/ },
  { id: 'guru', title: 'गुरवः', titleEn: 'Gurus · Madhva · Raghavendra', match: /madhvacharya|raghavendra|guru/ },
];

export const DEITIES: DeityGroup[] = GROUPS;

/** The medallions in the order the reader's audience meets them; none is left out. */
export const deitiesFor = (audience: Audience): DeityGroup[] => {
  const order = DEITY_ORDER[audience];
  return [...GROUPS].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
};

/** The deity line in plain lower-case spelling, for matching. */
export const deityKey = (m: Mantra) => plain(m.deity ?? '').toLowerCase();

export function deitiesOf(m: Mantra): string[] {
  const d = deityKey(m);
  return DEITIES.filter((g) => g.match.test(d)).map((g) => g.id);
}

/**
 * Collapse multi-part works to their first part, so a deity list shows
 * "Sundarakāṇḍa" once instead of 68 sargas.
 */
export function collapseSeries(list: Mantra[]): { mantra: Mantra; parts: number }[] {
  const seen = new Map<string, { mantra: Mantra; parts: number }>();
  const out: { mantra: Mantra; parts: number }[] = [];
  for (const m of list) {
    const series = m.order !== undefined ? m.series ?? m.category : null;
    if (!series) {
      out.push({ mantra: m, parts: 1 });
      continue;
    }
    const e = seen.get(series);
    if (e) e.parts++;
    else {
      const entry = { mantra: m, parts: 1 };
      seen.set(series, entry);
      out.push(entry);
    }
  }
  return out;
}
