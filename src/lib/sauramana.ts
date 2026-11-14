/**
 * Sauramāna (solar) months, as followed in Udupi / Tuḷu Nāḍu and by the Aṣṭa Maṭhas.
 *
 * A solar month is the Sun's stay in one sidereal rāśi (Lahiri, as in panchanga.ts):
 * Meṣa … Mīna. Tuḷu names (Paggu … Suggi) follow shivallibrahmins.com and
 * mangaloreheritage.com, which map them to the rāśis as below.
 *
 * Which civil day starts the month
 * Regional solar calendars differ when the saṅkrānti (ingress) falls during the day:
 *   Tamil      — before sunset → that day, else the next day;
 *   Kerala     — before the end of the madhyāhna/aparāhṇa part of the day → that day;
 *   Tuḷu       — the saṅkrānti day is the LAST day of the old month and the following day
 *                ("tingoḷe / siṅgoḍe") is day 1 (tulu-research.blogspot.com, "Tingoḍe aka
 *                Siṅgoḍe & Tulu calendar": Paggu 1 = 14 April 2020, the day after Meṣa
 *                saṅkrānti on the 13th).
 * Implemented (Tuḷu): the saṅkrānti day is the pañcāṅga day (sunrise→sunrise) that
 * contains the ingress, so day 1 is the civil day of the first sunrise after the ingress;
 * equivalently, the month of a day is the Sun's rāśi at its sunrise. Checks: Paggu 2020
 * (14 Apr), Āṭi 2025 begins 17 Jul (ingress 16 Jul 17:40), and drikpanchang's "pravishṭe"
 * count of 29 in Siṃha on 14 Sep 2025. Not verified against a printed Udupi pañcāṅga for a
 * daytime ingress (e.g. Meṣa 2026 at 09:38 → Bisu on 15 April by this rule; several
 * websites give 14 April, the saṅkrānti day itself) — treat such days with care.
 */
import {
  RASHI, addDays, crossing, fromJulian, siderealSun, sunriseDayOf, sunriseJd, type City, type Panchanga,
} from './panchanga';

/** Tuḷu month names, Meṣa first (romanised; spellings vary: Bēsa/Bēṣa, Puyintel/Ponni…). */
export const TULU_MONTHS = ['Paggu', 'Bēsa', 'Kārtel', 'Āṭi', 'Sōna', 'Nirnāla', 'Bontel', 'Jārde', 'Perārde', 'Puyintel', 'Māyi', 'Suggi'];
/** Locative stem for the saṅkalpa: "<name>मासे" (धनुस् → धनुर्मासे). */
const SAURA_MASA_STEM = ['मेष', 'वृषभ', 'मिथुन', 'कर्कटक', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनुर्', 'मकर', 'कुम्भ', 'मीन'];

export interface SauraDay {
  /** 0 = Meṣa … 11 = Mīna. */
  rasi: number;
  /** Devanagari rāśi name. */
  name: string;
  tulu: string;
  /** 1-based day of the solar month. */
  day: number;
  /** First day of this solar month (ISO). */
  start: string;
  /** Moment of the saṅkrānti that began it. */
  sankranti: Date;
}

const cache = new Map<string, SauraDay>();

/** Solar month and day number of a civil day at the city (Tuḷu / Udupi rule). */
export function sauraDay(city: City, iso: string): SauraDay {
  const key = `${city.id}|${iso}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const r = sunriseJd(city, iso);
  const rasi = Math.floor(siderealSun(r) / 30);
  const ingress = crossing(siderealSun, rasi * 30, r, 0.9856, -1);
  const start = addDays(sunriseDayOf(city, ingress), 1);
  const [y1, m1, d1] = start.split('-').map(Number);
  const [y2, m2, d2] = iso.split('-').map(Number);
  const day = Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000) + 1;
  const res = { rasi, name: RASHI[rasi], tulu: TULU_MONTHS[rasi], day, start, sankranti: fromJulian(ingress) };
  if (cache.size > 5000) cache.clear();
  cache.set(key, res);
  return res;
}

/** First day (ISO) of the solar month of rāśi `rasi` that begins in Gregorian year `year`. */
export function sauraMonthStart(city: City, year: number, rasi: number): string {
  // Approximate ingress: Meṣa ≈ 14 Apr, then ≈30.44 days per rāśi; Makara ≈ 14 Jan.
  const approx = rasi >= 9 ? Date.UTC(year, 0, 14) + (rasi - 9) * 30.44 * 86400000 : Date.UTC(year, 3, 14) + rasi * 30.9 * 86400000;
  const ingress = crossing(siderealSun, rasi * 30, approx / 86400000 + 2440587.5 - 10, 0.9856);
  return addDays(sunriseDayOf(city, ingress), 1);
}

/**
 * Saṅkalpa with the solar month in place of the lunar one, as recited in Udupi:
 * "… वृश्चिकमासे …". The form "<rāśi>मासे" is the usual one in Sauramāna saṅkalpas;
 * some families add the lunar month as well ("सौर वृश्चिकमासे चान्द्र कार्तिकमासे") —
 * not verified against a printed Udupi saṅkalpa, so only the solar month is substituted.
 */
export function sauraSankalpa(p: Panchanga, s: SauraDay): string {
  const lunar = `${p.adhika ? 'अधिक' : ''}${p.masa}मासे`;
  return p.sankalpa.replace(lunar, `${SAURA_MASA_STEM[s.rasi]}मासे`);
}
