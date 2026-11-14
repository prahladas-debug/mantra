/**
 * Ekādaśīs and major festivals, computed on the device from the pañcāṅga in panchanga.ts.
 *
 * Months are amānta (Cāndramāna, as in Karnataka / Andhra / Maharashtra); kṛṣṇa-pakṣa
 * festivals therefore carry the month name one earlier than in North-Indian pūrṇimānta
 * calendars (e.g. Kṛṣṇa Janmāṣṭamī = Śrāvaṇa kṛṣṇa aṣṭamī here, "Bhādrapada" up north).
 * Festivals are only placed in nija (non-adhika) months, except Yugādi.
 *
 * Choosing the civil day ("kāla-vyāpti")
 * Each festival names a tithi and the part of the day at which that tithi must prevail:
 *   udaya      sunrise (the ordinary rule)          aruṇodaya  96 min (4 ghaṭikā) before sunrise
 *   pūrvāhṇa   sunrise to midday
 *   madhyāhna  3rd fifth of the daytime              aparāhṇa   4th fifth of the daytime
 *   sāyāhna    last fifth of the daytime             pradoṣa    sunset + 1/5 of the night
 *   niśītha    the middle muhūrta (1/15) of the night
 * Every pañcāṅga day (sunrise→sunrise) touched by the tithi is scored by the fraction of
 * that window the tithi covers; the best day wins, and a tie (both fully covered) goes to
 * the earlier or later day as the festival's rule prefers. If no day's window is touched,
 * the day on which the tithi begins is used (a kṣaya tithi). This reproduces the dates of
 * the published South-Indian pañcāṅgas checked in scripts/test-panchanga.ts, but it is a
 * simplification: secondary conditions (nakṣatra yoga such as Rohiṇī for Janmāṣṭamī or
 * Śravaṇa for Vijayadaśamī, bhadrā/viṣṭi for Holikā, regional exceptions) are not applied.
 *
 * Ekādaśī (see ekadashiDates for the precise rules)
 * - Smārta: ekādaśī at sunrise; when it is kṣaya, or when the next day is a trispṛśā
 *   (ekādaśī, dvādaśī and trayodaśī within one sunrise-day, so no dvādaśī is left for
 *   pāraṇa), the fast is on the day ekādaśī begins; when it is at two sunrises the first
 *   day, unless that day's ekādaśī is touched by daśamī at aruṇodaya. This matches
 *   drikpanchang's "Smartha" dates for 2025–2026.
 * - Mādhva / Vaiṣṇava: the ekādaśī must be free of daśamī at aruṇodaya (96 min before
 *   sunrise); if it is viddhā, or ekādaśī reaches the next sunrise too, the fast moves to
 *   the next day (on dvādaśī — a "mahādvādaśī"). A kṣaya ekādaśī is observed on the
 *   following dvādaśī day. Gauḍīya calendars (ISKCON, drikpanchang "Vaishnava") also move
 *   the fast for vyañjulī mahādvādaśī (dvādaśī at two sunrises); that case is only noted.
 *   Local maṭha pañcāṅgas may still differ for borderline cases.
 * Ekādaśī names follow the amānta month (24 names; Padminī / Paramā in an adhika month).
 */
import {
  addDays, cityDateOf, crossing, formatTime, fromJulian, julianDay, lunarMonthAt, lunationsBetween,
  parseIso, siderealSun, sunriseDayOf, sunriseJd, sunsetJd, tithiEnd, tithiStart, weekdayOf,
  type City, type LunarMonth,
} from './panchanga';

export type EkadashiRule = 'smarta' | 'madhva';

export interface Festival {
  /** Civil date 'YYYY-MM-DD' at the city. */
  date: string;
  /** Last day, for periods such as Pitṛ pakṣa. */
  endDate?: string;
  /** Stable id, e.g. 'ganesha-chaturthi' or 'ekadashi-2025-06-06'. */
  key: string;
  /** Devanagari name (transliterate for display). */
  name: string;
  /** English / IAST name. */
  en: string;
  kind: 'ekadashi' | 'festival' | 'solar' | 'period';
  /** Linked text in the library (src/data), if any. */
  textId?: string;
  note?: string;
}

const MIN = 1 / 1440;
const ARUNODAYA = 96 * MIN;

type Kala = 'udaya' | 'arunodaya' | 'purvahna' | 'madhyahna' | 'aparahna' | 'sayahna' | 'pradosha' | 'nishitha';

/** The window [start, end] (JD UT) of a kāla on a pañcāṅga day. */
function kalaWindow(city: City, day: string, kala: Kala): [number, number] {
  const r = sunriseJd(city, day);
  const s = sunsetJd(city, day);
  const r2 = sunriseJd(city, addDays(day, 1));
  const dl = s - r;
  const nl = r2 - s;
  switch (kala) {
    case 'udaya': return [r, r];
    case 'arunodaya': return [r - ARUNODAYA, r - ARUNODAYA];
    case 'purvahna': return [r, r + dl / 2];
    case 'madhyahna': return [r + (2 * dl) / 5, r + (3 * dl) / 5];
    case 'aparahna': return [r + (3 * dl) / 5, r + (4 * dl) / 5];
    case 'sayahna': return [r + (4 * dl) / 5, s];
    case 'pradosha': return [s, s + nl / 5];
    case 'nishitha': return [s + nl / 2 - nl / 30, s + nl / 2 + nl / 30];
  }
}

/** Pañcāṅga day on which a tithi spanning [s, e) is observed under the given kāla rule. */
export function observanceDay(city: City, s: number, e: number, kala: Kala, prefer: 'first' | 'second' = 'first'): string {
  const first = sunriseDayOf(city, s);
  const last = sunriseDayOf(city, e);
  let best = first;
  let bestCov = 0;
  for (let d = first, i = 0; d <= last && i < 4; d = addDays(d, 1), i++) {
    const [a, b] = kalaWindow(city, d, kala);
    const cov = a === b ? (a >= s && a < e ? 1 : 0) : Math.max(0, Math.min(b, e) - Math.max(a, s)) / (b - a);
    if (cov > bestCov + 1e-9 || (prefer === 'second' && cov > 0 && Math.abs(cov - bestCov) <= 1e-9)) {
      best = d;
      bestCov = cov;
    }
  }
  return best;
}

// ---------- ekādaśī ----------

/** [śukla, kṛṣṇa] ekādaśī names for each amānta month, Caitra first. */
const EKADASHI_NAMES: [string, string][] = [
  ['कामदा', 'वरूथिनी'], ['मोहिनी', 'अपरा'], ['निर्जला', 'योगिनी'], ['शयनी', 'कामिका'],
  ['पुत्रदा', 'अजा'], ['परिवर्तिनी', 'इन्दिरा'], ['पाशाङ्कुशा', 'रमा'], ['प्रबोधिनी', 'उत्पन्ना'],
  ['मोक्षदा', 'सफला'], ['पुत्रदा', 'षट्तिला'], ['जया', 'विजया'], ['आमलकी', 'पापमोचनी'],
];
const EKADASHI_EN: [string, string][] = [
  ['Kāmadā', 'Varūthinī'], ['Mohinī', 'Aparā'], ['Nirjalā', 'Yoginī'], ['Śayanī (Prathamā)', 'Kāmikā'],
  ['Putradā (Pavitrā)', 'Ajā'], ['Parivartinī (Pārśva)', 'Indirā'], ['Pāśāṅkuśā', 'Ramā'], ['Prabodhinī (Utthāna)', 'Utpannā'],
  ['Mokṣadā', 'Saphalā'], ['Putradā', 'Ṣaṭtilā'], ['Jayā', 'Vijayā'], ['Āmalakī', 'Pāpamocanī'],
];

export interface EkadashiInfo {
  name: string;
  en: string;
  masa: number;
  adhika: boolean;
  paksha: 'शुक्ल' | 'कृष्ण';
  /** Ekādaśī tithi interval. */
  start: Date;
  end: Date;
  /** Dvādaśī ends (the pāraṇa must be done before this, after sunrise of the next day). */
  dvadashiEnd: Date;
  smarta: string;
  madhva: string;
  /** Gauḍīya-style date (also moves for vyañjulī mahādvādaśī). */
  vaishnava: string;
  /** Mahādvādaśī / special case, if any. */
  special?: 'kshaya' | 'viddha' | 'vrddhi' | 'trisprsha' | 'vyanjuli';
}

/** Ekādaśī of a lunation (k = 11 śukla, 26 kṛṣṇa) under both rules. */
export function ekadashiDates(city: City, l: LunarMonth, k: 11 | 26): EkadashiInfo {
  const es = tithiStart(l, k);
  const ee = tithiStart(l, k + 1);
  const de = tithiEnd(l, k + 1);
  const d0 = sunriseDayOf(city, es); // the day ekādaśī begins
  const d = addDays(d0, 1); // first sunrise after it begins
  const d1 = addDays(d, 1);
  const kshaya = ee <= sunriseJd(city, d);
  const vrddhi = !kshaya && ee > sunriseJd(city, d1);
  const viddha = !kshaya && es > sunriseJd(city, d) - ARUNODAYA;
  const trisprsha = !kshaya && !vrddhi && de <= sunriseJd(city, d1);
  const vyanjuli = !kshaya && !vrddhi && de > sunriseJd(city, addDays(d1, 1));

  let smarta = d;
  if (kshaya || trisprsha) smarta = d0;
  else if (vrddhi && viddha) smarta = d1;

  const madhva = kshaya ? d : viddha || vrddhi ? d1 : d;
  const vaishnava = !viddha && vyanjuli ? d1 : madhva;
  const special = kshaya ? 'kshaya' : viddha ? 'viddha' : vrddhi ? 'vrddhi' : trisprsha ? 'trisprsha' : vyanjuli ? 'vyanjuli' : undefined;
  const sukla = k === 11 ? 0 : 1;
  return {
    name: `${l.adhika ? (sukla ? 'परमा' : 'पद्मिनी') : EKADASHI_NAMES[l.masa][sukla]} एकादशी`,
    en: `${l.adhika ? (sukla ? 'Paramā' : 'Padminī') : EKADASHI_EN[l.masa][sukla]} Ekādaśī`,
    masa: l.masa, adhika: l.adhika, paksha: sukla ? 'कृष्ण' : 'शुक्ल',
    start: fromJulian(es), end: fromJulian(ee), dvadashiEnd: fromJulian(de),
    smarta, madhva, vaishnava, special,
  };
}

const SPECIAL_NOTE: Record<NonNullable<EkadashiInfo['special']>, string> = {
  kshaya: 'Kṣaya ekādaśī (no sunrise in ekādaśī): Smārtas fast the day it begins, Vaiṣṇavas on dvādaśī.',
  viddha: 'Daśamī at aruṇodaya (viddhā): Vaiṣṇavas / Mādhvas fast on the next day.',
  vrddhi: 'Ekādaśī at two sunrises (unmīlinī): Smārta householders fast the first day, Vaiṣṇavas / yatis the second.',
  trisprsha: 'Trispṛśā mahādvādaśī: ekādaśī, dvādaśī and trayodaśī in one day; Smārtas fast the previous day.',
  vyanjuli: 'Vyañjulī mahādvādaśī (dvādaśī at two sunrises): Gauḍīya calendars fast on the dvādaśī, the next day.',
};

// ---------- festival rules ----------

interface TithiRule {
  key: string;
  name: string;
  en: string;
  masa: number;
  tithi: number;
  kala: Kala;
  prefer?: 'first' | 'second';
  textId?: string;
  note?: string;
  /** Also in an adhika month of that name (Yugādi: the year begins with the first Caitra). */
  firstOfName?: boolean;
}

// masa: 0 Caitra, 1 Vaiśākha, 2 Jyeṣṭha, 3 Āṣāḍha, 4 Śrāvaṇa, 5 Bhādrapada, 6 Āśvayuja,
// 7 Kārtika, 8 Mārgaśīrṣa, 9 Pauṣa, 10 Māgha, 11 Phālguna. tithi 1–30 (16–30 kṛṣṇa).
const RULES: TithiRule[] = [
  { key: 'yugadi', name: 'युगादि', en: 'Yugādi (Ugādi) · Cāndramāna new year', masa: 0, tithi: 1, kala: 'udaya', firstOfName: true },
  { key: 'rama-navami', name: 'श्रीरामनवमी', en: 'Śrī Rāma Navamī', masa: 0, tithi: 9, kala: 'madhyahna', textId: 'rama-raksha-stotram' },
  { key: 'hanuman-jayanti-north', name: 'हनुमज्जयन्ती (चैत्र)', en: 'Hanumān Jayantī (North Indian, Caitra pūrṇimā)', masa: 0, tithi: 15, kala: 'udaya', textId: 'hanuman-chalisa', note: 'North-Indian date; Karnataka observes Hanumad vrata on Mārgaśīrṣa śukla trayodaśī.' },
  { key: 'akshaya-tritiya', name: 'अक्षयतृतीया', en: 'Akṣaya Tṛtīyā', masa: 1, tithi: 3, kala: 'purvahna', textId: 'kanakadhara-stotram' },
  { key: 'shankara-jayanti', name: 'शङ्कर जयन्ती', en: 'Śaṅkara Jayantī', masa: 1, tithi: 5, kala: 'madhyahna' },
  { key: 'narasimha-jayanti', name: 'नृसिंह जयन्ती', en: 'Narasiṃha Jayantī', masa: 1, tithi: 14, kala: 'sayahna', textId: 'vayu-stuti' },
  { key: 'vyasa-purnima', name: 'व्यासपूर्णिमा', en: 'Vyāsa (Guru) Pūrṇimā', masa: 3, tithi: 15, kala: 'udaya', note: 'Cāturmāsya vrata of sannyāsins begins.' },
  { key: 'naga-panchami', name: 'नागपञ्चमी', en: 'Nāga Pañcamī', masa: 4, tithi: 5, kala: 'udaya' },
  { key: 'upakarma', name: 'उपाकर्म', en: 'Upākarma (Yajurveda) · Rakṣā bandhana', masa: 4, tithi: 15, kala: 'udaya', textId: 'gayatri-mantra', note: 'Yajurvedī upākarma on Śrāvaṇa pūrṇimā; Ṛgvedīs use the Śravaṇa-nakṣatra day of Śrāvaṇa, Sāmavedīs Hasta in Bhādrapada.' },
  { key: 'raghavendra-aradhana', name: 'श्रीराघवेन्द्र आराधना', en: 'Śrī Rāghavendra Ārādhanā (madhya)', masa: 4, tithi: 17, kala: 'udaya', textId: 'raghavendra-stotram', note: 'Pūrva-ārādhanā the day before, uttara-ārādhanā the day after (Mantrālaya).' },
  { key: 'krishna-janmashtami', name: 'श्रीकृष्णजन्माष्टमी', en: 'Śrī Kṛṣṇa Janmāṣṭamī', masa: 4, tithi: 23, kala: 'nishitha', textId: 'krishna-ashtottara-shatanama', note: 'Smārta rule: aṣṭamī at midnight. Mādhvas observe the day aṣṭamī prevails at moonrise (arghya to the Moon), often with Rohiṇī; Udupi/maṭha dates can differ by a day.' },
  { key: 'svarna-gauri', name: 'स्वर्णगौरी व्रत', en: 'Svarṇa Gaurī vrata', masa: 5, tithi: 3, kala: 'udaya' },
  { key: 'ganesha-chaturthi', name: 'गणेश चतुर्थी', en: 'Gaṇeśa Caturthī', masa: 5, tithi: 4, kala: 'madhyahna', textId: 'ganesha-pancharatnam' },
  { key: 'ananta-chaturdashi', name: 'अनन्तचतुर्दशी', en: 'Ananta Caturdaśī', masa: 5, tithi: 14, kala: 'udaya' },
  { key: 'mahalaya-amavasya', name: 'महालय अमावास्या', en: 'Mahālaya Amāvāsyā (Sarvapitṛ)', masa: 5, tithi: 30, kala: 'aparahna' },
  { key: 'navaratri', name: 'शरन्नवरात्रारम्भः', en: 'Śarad Navarātri begins', masa: 6, tithi: 1, kala: 'udaya', textId: 'devi-mahatmyam-01' },
  { key: 'durgashtami', name: 'दुर्गाष्टमी', en: 'Durgāṣṭamī', masa: 6, tithi: 8, kala: 'udaya', textId: 'durga-saptashloki' },
  { key: 'mahanavami', name: 'महानवमी', en: 'Mahānavamī · Āyudha pūjā', masa: 6, tithi: 9, kala: 'udaya', textId: 'devi-mahatmyam-01' },
  { key: 'vijayadashami', name: 'विजयदशमी', en: 'Vijayadaśamī', masa: 6, tithi: 10, kala: 'aparahna', textId: 'mahishasura-mardini-stotram' },
  { key: 'naraka-chaturdashi', name: 'नरकचतुर्दशी', en: 'Naraka Caturdaśī (abhyaṅga snāna)', masa: 6, tithi: 29, kala: 'arunodaya' },
  { key: 'deepavali', name: 'दीपावली · लक्ष्मीपूजा', en: 'Dīpāvalī · Lakṣmī pūjā (amāvāsyā)', masa: 6, tithi: 30, kala: 'pradosha', prefer: 'second', textId: 'sri-sukta' },
  { key: 'bali-pratipada', name: 'बलिपाड्यमी', en: 'Bali Pratipadā · Govardhana pūjā', masa: 7, tithi: 1, kala: 'udaya' },
  { key: 'uttana-dvadashi', name: 'उत्थान द्वादशी · तुलसीविवाह', en: 'Uttāna Dvādaśī · Tulasī vivāha', masa: 7, tithi: 12, kala: 'udaya' },
  { key: 'gita-jayanti', name: 'गीताजयन्ती', en: 'Gītā Jayantī', masa: 8, tithi: 11, kala: 'udaya', textId: 'bhagavad-gita-01' },
  { key: 'hanumad-vrata', name: 'हनुमद्व्रत', en: 'Hanumad vrata · Hanumat Jayantī (Karnataka)', masa: 8, tithi: 13, kala: 'udaya', textId: 'hanuman-chalisa', note: 'South-Indian (Karnataka/Andhra) date; North India: Caitra pūrṇimā; Tamil Nadu: Mārgaḻi amāvāsyā.' },
  { key: 'ratha-saptami', name: 'रथसप्तमी', en: 'Ratha Saptamī', masa: 10, tithi: 7, kala: 'udaya', textId: 'aditya-hridayam' },
  { key: 'madhva-navami', name: 'मध्वनवमी', en: 'Madhva Navamī', masa: 10, tithi: 9, kala: 'udaya', textId: 'dvadasha-stotra-01' },
  { key: 'maha-shivaratri', name: 'महाशिवरात्रि', en: 'Mahāśivarātri', masa: 10, tithi: 29, kala: 'nishitha', textId: 'lingashtakam' },
  { key: 'holika', name: 'होलिका · कामदहन', en: 'Holikā dahana · Kāma dahana (Phālguna pūrṇimā)', masa: 11, tithi: 15, kala: 'pradosha', note: 'Pūrṇimā at pradoṣa; bhadrā (viṣṭi karaṇa) restrictions are not applied.' },
];

/** All rule ids that link to a library text (checked by the tests). */
export const LINKED_TEXT_IDS = [...new Set([...RULES.map((r) => r.textId), 'vishnu-sahasranama', 'sumadhva-vijaya-01', 'mahalakshmi-ashtakam'].filter(Boolean))] as string[];

// ---------- assembling ----------

function solarFestival(city: City, rasi: number, nearIso: string, key: string, name: string, en: string, textId?: string): Festival {
  const t = crossing(siderealSun, rasi * 30, julianDay(new Date(`${nearIso}T00:00:00Z`)) - 3, 0.9856);
  let date = cityDateOf(city, (t - 2440587.5) * 86400000);
  // Puṇyakāla is on the day of the saṅkrānti if it occurs before sunset, else the next day.
  if (t > sunsetJd(city, date)) date = addDays(date, 1);
  return { date, key, name, en, kind: 'solar', textId, note: `Saṅkrānti at ${formatTime(fromJulian(t), city)}.` };
}

const cache = new Map<string, Festival[]>();

/**
 * Festivals and ekādaśīs whose date (or, for periods, any day) lies in [from, to] (ISO
 * dates, inclusive), sorted by date. Ekādaśīs are dated by `rule`; the other tradition's
 * date is given in the note when it differs.
 */
export function festivalsBetween(city: City, from: string, to: string, rule: EkadashiRule): Festival[] {
  const key = `${city.id}|${from}|${to}|${rule}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const jdFrom = julianDay(new Date(`${from}T00:00:00Z`)) - 3;
  const jdTo = julianDay(new Date(`${to}T00:00:00Z`)) + 3;
  const out: Festival[] = [];

  for (const l of lunationsBetween(jdFrom - 2, jdTo)) {
    // ekādaśīs
    for (const k of [11, 26] as const) {
      const e = ekadashiDates(city, l, k);
      const date = rule === 'smarta' ? e.smarta : e.madhva;
      const other = rule === 'smarta' ? e.madhva : e.smarta;
      const notes: string[] = [];
      if (other !== date) notes.push(`${rule === 'smarta' ? 'Mādhva/Vaiṣṇava' : 'Smārta'}: ${other}.`);
      if (e.special) notes.push(SPECIAL_NOTE[e.special]);
      if (e.vaishnava !== e.madhva) notes.push(`Gauḍīya Vaiṣṇava: ${e.vaishnava}.`);
      out.push({ date, key: `ekadashi-${date}`, name: e.name, en: e.en, kind: 'ekadashi', textId: 'vishnu-sahasranama', note: notes.join(' ') || undefined });
      // Vaikuṇṭha (Mukkoṭi) ekādaśī: the śukla ekādaśī while the Sun is in Dhanu.
      if (k === 11 && Math.floor(siderealSun(sunriseJd(city, e.madhva)) / 30) === 8) {
        out.push({
          date: e.madhva, key: `vaikuntha-ekadashi-${e.madhva}`, name: 'वैकुण्ठ एकादशी', en: 'Vaikuṇṭha (Mukkoṭi) Ekādaśī',
          kind: 'festival', textId: 'vishnu-sahasranama', note: 'Śukla ekādaśī in the solar month Dhanus; dated by the Vaiṣṇava rule, as in temple calendars.',
        });
      }
    }

    for (const r of RULES) {
      if (r.masa !== l.masa) continue;
      if (r.firstOfName) {
        // skip the nija month when an adhika month of the same name preceded it
        if (!l.adhika && lunarMonthAt(l.start - 1).adhika) continue;
      } else if (l.adhika) continue;
      const s = tithiStart(l, r.tithi);
      const e = tithiEnd(l, r.tithi);
      const date = observanceDay(city, s, e, r.kala, r.prefer);
      out.push({ date, key: r.key, name: r.name, en: r.en, kind: 'festival', textId: r.textId, note: r.note });

      if (r.key === 'vijayadashami') {
        out.push({ date, key: 'madhva-jayanti', name: 'मध्वजयन्ती', en: 'Madhva Jayantī', kind: 'festival', textId: 'sumadhva-vijaya-01', note: 'Śrī Madhvācārya’s birthday, observed on Vijayadaśamī.' });
      }
      if (r.key === 'upakarma') {
        // Varamahālakṣmī: the Friday before Śrāvaṇa pūrṇimā (South-Indian rule; when the
        // pūrṇimā itself is a Friday some calendars use that day instead).
        const back = (weekdayOf(date) - 5 + 7) % 7 || 7;
        out.push({
          date: addDays(date, -back), key: 'varamahalakshmi', name: 'वरमहालक्ष्मी व्रत', en: 'Varamahālakṣmī vrata',
          kind: 'festival', textId: 'mahalakshmi-ashtakam',
          note: back === 7 ? 'Śrāvaṇa pūrṇimā is itself a Friday this year; some calendars observe the vrata on that day.' : undefined,
        });
      }
      if (r.key === 'mahalaya-amavasya') {
        const p = observanceDay(city, tithiStart(l, 16), tithiEnd(l, 16), 'udaya');
        out.push({ date: p, endDate: date, key: 'pitru-paksha', name: 'पितृपक्ष (महालयपक्ष)', en: 'Pitṛ pakṣa (Mahālaya pakṣa)', kind: 'period', note: `Bhādrapada kṛṣṇa pakṣa, ${p} → ${date}: daily mahālaya śrāddha.` });
      }
    }
  }

  // Solar festivals for every Gregorian year touching the range.
  const [y0] = parseIso(from);
  const [y1] = parseIso(to);
  for (let y = y0 - 1; y <= y1 + 1; y++) {
    out.push(solarFestival(city, 9, `${y}-01-12`, 'makara-sankranti', 'मकरसङ्क्रान्ति', 'Makara Saṅkrānti · Uttarāyaṇa puṇyakāla', 'aditya-hridayam'));
    out.push(solarFestival(city, 0, `${y}-04-12`, 'mesha-sankranti', 'मेषसङ्क्रान्ति · सौरमान युगादि', 'Meṣa Saṅkrānti · Sauramāna Yugādi (Viṣu)'));
  }

  const res = out
    .filter((f) => f.date <= to && (f.endDate ?? f.date) >= from)
    .sort((a, b) => a.date.localeCompare(b.date) || Number(b.kind === 'ekadashi') - Number(a.kind === 'ekadashi'));
  if (cache.size > 200) cache.clear();
  cache.set(key, res);
  return res;
}

/** Festivals on one day. */
export const festivalsOn = (city: City, date: string, rule: EkadashiRule) => festivalsBetween(city, date, date, rule);

/** Default ekādaśī rule from the reader's tradition setting (Mādhva unless 'smarta'). */
export const defaultRule = (tradition: string | undefined): EkadashiRule => (tradition === 'smarta' ? 'smarta' : 'madhva');
