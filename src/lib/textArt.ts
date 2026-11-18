/** Which painting (src/lib/art.ts) belongs with a text. Kept apart from the images so it can be tested. */
import type { ArtKey } from './art';
import { plain } from './plain';

/** The great works' own paintings, by category (every part of the work) or by text id. */
const WORK_ART: Partial<Record<string, ArtKey>> = {
  gita: 'gita',
  sundarakanda: 'sundarakanda',
  ramayana: 'ramayana',
  ramcharitmanas: 'ramcharitmanas',
  mahabharata: 'mahabharata',
  harikathamrutasara: 'harikathamrutasara',
  sumadhvavijaya: 'sumadhvavijaya',
  devimahatmya: 'devimahatmya',
  'vishnu-sahasranama': 'vishnu',
  'vayu-stuti': 'vayustuti',
  'lalitha-sahasranama': 'lalita',
  'saundarya-lahari': 'saundaryalahari',
  'tulsi-sundar-kand': 'sundarakanda',
};

/**
 * Forms with no painting of their own: a text to one of them gets none rather than another
 * form's picture (Narasimha is not the seated Narayana, Raghavendra is not Madhva).
 */
const NO_ART = /narasimha|narahari|raghavendra|sarasvati|sharada|ganga|sudarshana|dattatreya|annapurna|tulasi|bhudevi|niladevi|bharati|ambhrini|agni|graha|savitri|gayatri|pitr|apah|sarva|hayavadana|dhanvantari|minakshi|gauri|andal/;

/** By the deity a text is addressed to, read from the first name in its deity line. */
const DEITY_PATTERNS: [RegExp, ArtKey][] = [
  [/madhvacharya/, 'sumadhvavijaya'],
  [/hanuman|anjaneya|mukhyaprana/, 'hanuman'],
  [/\brama\b|raghava/, 'ramayana'],
  [/krishna|vit?thala|gopala|govinda|mukunda|damodara/, 'krishna'],
  [/lalita/, 'lalita'],
  [/durga|chandika|bhavani|\bamba\b/, 'durga'],
  [/lakshmi/, 'lakshmi'],
  [/shiva|rudra|mrityunjaya|tryambaka|shankara/, 'shiva'],
  [/ganesh|ganapati|vinayaka/, 'ganesha'],
  [/subrahmanya|murugan|skanda/, 'subrahmanya'],
  [/surya|aditya/, 'surya'],
  [/vishnu|\bhari\b|narayana|venkat|srinivasa|ranga|vasudeva|keshava|padmanabha|paramatma|purusha|jagadisha/, 'vishnu'],
];

/** The painting for a text: its great work's, else its deity's where one truly shows that deity. */
export function artFor(m: { id: string; category: string; deity?: string }): ArtKey | undefined {
  const work = WORK_ART[m.category] ?? WORK_ART[m.id];
  if (work) return work;
  const d = plain(m.deity ?? '').toLowerCase();
  // The first name only: "Shri Rama, Hanuman" is Rama's, "Sri Hari (Vijaya Vitthala)" Hari's.
  const first = d.split(/[(;·,—/]| and | with /)[0];
  if (!first.trim() || NO_ART.test(first)) return undefined;
  return DEITY_PATTERNS.find(([re]) => re.test(first))?.[1];
}
