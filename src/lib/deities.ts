import type { Mantra } from '../data/types';

/** Deity groups for browsing. A text can belong to several groups. */
export interface DeityGroup {
  id: string;
  /** Devanagari, transliterated to the reader's script. */
  title: string;
  titleEn: string;
  match: RegExp;
}

export const DEITIES: DeityGroup[] = [
  { id: 'vishnu', title: 'श्रीहरिः', titleEn: 'Viṣṇu · Kṛṣṇa · Rāma', match: /Viṣṇu|Vishnu|Hari|Kṛṣṇa|Rāma|Nārāyaṇa|Veṅkaṭ|Narasiṃha|Vāsudeva|Viṭhala|Mukunda|Puruṣa|Satyanārāyaṇa|Venugopāla|Veṇugopāla/ },
  { id: 'devi', title: 'देवी', titleEn: 'Devī · Lakṣmī · Lalitā', match: /Devī|Lakṣmī|Lalitā|Durgā|Caṇḍikā|Āmbhṛṇī|Sarasvatī|Gaurī/ },
  { id: 'shiva', title: 'शिवः', titleEn: 'Śiva · Rudra', match: /Śiva|Rudra/ },
  { id: 'ganesha', title: 'गणेशः', titleEn: 'Gaṇeśa', match: /Gaṇeśa|Gaṇapati|Vināyaka/ },
  { id: 'vayu', title: 'हनुमान् · वायुः', titleEn: 'Hanumān · Vāyu', match: /Hanumān|Vāyu|Mukhyaprāṇa|Bhīma|Manyu/ },
  { id: 'surya', title: 'सूर्यः', titleEn: 'Sūrya · Savitṛ', match: /Sūrya|Savitṛ|Āditya/ },
  { id: 'guru', title: 'गुरवः', titleEn: 'Gurus · Madhva · Rāghavendra', match: /Madhvācārya|Rāghavendra|Guru/ },
];

export function deitiesOf(m: Mantra): string[] {
  const d = m.deity ?? '';
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
