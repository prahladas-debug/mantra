/**
 * On-device pañcāṅga: saṃvatsara, ayana, ṛtu, māsa (amānta / Cāndramāna, as used in
 * Karnataka), pakṣa, tithi, vāsara, nakṣatra, yoga and karaṇa at local sunrise, with the
 * end time of every tithi / nakṣatra / yoga / karaṇa until the next sunrise, sunrise and
 * sunset, Rāhu kāla, Yamagaṇḍa, Gulika kāla, Abhijit muhūrta and the Sun's / Moon's rāśi.
 *
 * Astronomy
 * - Sun: VSOP87 truncated as in Meeus, "Astronomical Algorithms" App. III (≈1″), with FK5,
 *   nutation and aberration → apparent longitude.
 * - Moon: Meeus ch. 47, the main 59 longitude terms + additive terms (≈10″).
 * - Times are UT; the series are evaluated at TT = UT + ΔT (ΔT ≈ 69 s in the 2020s).
 * - Sidereal (nirayaṇa) longitude = apparent tropical longitude − mean Lahiri / Citrapakṣa
 *   ayanāṃśa (see ayanamsa(); calibrated to drikpanchang, ≈24°13′ in 2025).
 * - Sunrise/sunset: centre of the Sun at −0°50′ altitude (refraction 34′ + semi-diameter
 *   16′, i.e. the upper limb touching the horizon), as in most modern printed and online
 *   pañcāṅgas; no correction for the observer's elevation.
 * Measured against drikpanchang (Bengaluru, 2025–2026; see scripts/test-panchanga.ts): 98
 * tithi boundaries within about +1 min (ours ≈30–40 s later on average), nakṣatra / yoga /
 * karaṇa ends and sunrise/sunset within a minute, the 24 saṅkrāntis within ±1 min.
 * A day whose tithi changes within a few minutes of sunrise can therefore differ from a
 * printed pañcāṅga; for muhūrta decisions consult your family pañcāṅga.
 *
 * Calculation method (setCalcMethod / getCalcMethod / withMethod)
 * - 'drik' (default): as above.
 * - 'surya': Sūrya Siddhānta, as in traditional maṭha pañcāṅgas (see suryaSiddhanta.ts):
 *   SS true longitudes of the Sun and Moon (already nirayaṇa) and the SS sunrise / sunset.
 *   Everything that goes through elongation / siderealSun / siderealMoon / sunEventJd —
 *   tithi, nakṣatra, yoga, karaṇa, lunar months and adhika, saṅkrāntis, festivals,
 *   ekādaśī and pāraṇa — then follows the SS. Moonrise stays modern.
 *   Every cache that depends on these (sunrise here, festivals.ts, sauramana.ts) keys on
 *   the method.
 *
 * Conventions
 * - A "day" is a civil date at the chosen city, written as an ISO string 'YYYY-MM-DD'.
 *   Its pañcāṅga elements are those prevailing at that day's sunrise (udaya-tithi), and the
 *   pañcāṅga day runs from sunrise to the next sunrise.
 * - Amānta months are named from the Sun's sidereal rāśi at the new moon that begins
 *   them; a lunation with no saṅkrānti is adhika. Kṣaya months (two saṅkrāntis in one
 *   lunation; very rare, last in 1983) are not handled specially.
 * - Rāhu kāla / Yamagaṇḍa / Gulika: the daytime (sunrise→sunset) is split into eighths and
 *   the standard weekday table picks one eighth (e.g. Rāhu: Sun 8th, Mon 2nd, Tue 7th,
 *   Wed 5th, Thu 6th, Fri 4th, Sat 3rd).
 * - Abhijit muhūrta: the 8th of 15 daytime muhūrtas, centred on local apparent noon
 *   (traditionally avoided on Wednesdays).
 */
import { INDIA_CITIES } from '../data/cities';
import { ssMoon, ssSun, ssSunEvent } from './suryaSiddhanta';
import { dayMonth, type UiLang } from './tr';

/** Pañcāṅga calculation: modern (drik) positions, or the Sūrya Siddhānta ('surya'). */
export type CalcMethod = 'drik' | 'surya';
let method: CalcMethod = 'drik';
/** Choose the calculation for everything computed afterwards (module-wide; default 'drik'). */
export function setCalcMethod(m: CalcMethod): void {
  method = m === 'surya' ? 'surya' : 'drik';
}
export const getCalcMethod = (): CalcMethod => method;
/** Run `fn` with the given method (or the current one if undefined), then restore it. */
export function withMethod<T>(m: CalcMethod | undefined, fn: () => T): T {
  if (!m || m === method) return fn();
  const prev = method;
  method = m;
  try {
    return fn();
  } finally {
    method = prev;
  }
}

const D2R = Math.PI / 180;
const norm = (x: number) => ((x % 360) + 360) % 360;
/** Wrap to (−180, 180]. */
const norm180 = (x: number) => {
  const n = norm(x);
  return n > 180 ? n - 360 : n;
};
const sinD = (x: number) => Math.sin(x * D2R);
const cosD = (x: number) => Math.cos(x * D2R);
const DAY_MS = 86400000;
const JD_UNIX = 2440587.5;

/** Julian Day for a JS Date (UTC). */
export function julianDay(d: Date): number {
  return d.getTime() / DAY_MS + JD_UNIX;
}
/** JS Date for a Julian Day (UT). */
export function fromJulian(jd: number): Date {
  return new Date(Math.round((jd - JD_UNIX) * DAY_MS));
}

/** ΔT = TT − UT, in days. Observed ≈63.8 s (2000), 69.4 s (2020), 69.2 s (2025); mild
 *  extrapolation outside. Errors of a few seconds move tithi times by seconds only. */
function deltaT(jd: number): number {
  const y = 2000 + (jd - 2451545.0) / 365.25;
  const s = y < 2000 ? 63.8 + (y - 2000) * 0.5 : y < 2020 ? 63.8 + (y - 2000) * 0.28 : 69.4 + (y - 2020) * 0.1;
  return s / 86400;
}

// VSOP87D Earth heliocentric longitude and radius, truncated as in Meeus, Appendix III
// ([amplitude ×1e-8, phase rad, frequency rad per millennium]); ≈1″ over 1900–2100.
type Terms = [number, number, number][];
const L0: Terms = [[175347046,0,0],[3341656,4.6692568,6283.07585],[34894,4.6261,12566.1517],[3497,2.7441,5753.3849],[3418,2.8289,3.5231],[3136,3.6277,77713.7715],[2676,4.4181,7860.4194],[2343,6.1352,3930.2097],[1324,0.7425,11506.7698],[1273,2.0371,529.691],[1199,1.1096,1577.3435],[990,5.233,5884.927],[902,2.045,26.298],[857,3.508,398.149],[780,1.179,5223.694],[753,2.533,5507.553],[505,4.583,18849.228],[492,4.205,775.523],[357,2.92,0.067],[317,5.849,11790.629],[284,1.899,796.298],[271,0.315,10977.079],[243,0.345,5486.778],[206,4.806,2544.314],[205,1.869,5573.143],[202,2.458,6069.777],[156,0.833,213.299],[132,3.411,2942.463],[126,1.083,20.775],[115,0.645,0.98],[103,0.636,4694.003],[102,0.976,15720.839],[102,4.267,7.114],[99,6.21,2146.17],[98,0.68,155.42],[86,5.98,161000.69],[85,1.3,6275.96],[85,3.67,71430.7],[80,1.81,17260.15],[79,3.04,12036.46],[75,1.76,5088.63],[74,3.5,3154.69],[74,4.68,801.82],[70,0.83,9437.76],[62,3.98,8827.39],[61,1.82,7084.9],[57,2.78,6286.6],[56,4.39,14143.5],[56,3.47,6279.55],[52,0.19,12139.55],[52,1.33,1748.02],[51,0.28,5856.48],[49,0.49,1194.45],[41,5.37,8429.24],[41,2.4,19651.05],[39,6.17,10447.39],[37,6.04,10213.29],[37,2.57,1059.38],[36,1.71,2352.87],[36,1.78,6812.77],[33,0.59,17789.85],[30,0.44,83996.85],[30,2.74,1349.87],[25,3.16,4690.48]];
const L1: Terms = [[628331966747,0,0],[206059,2.678235,6283.07585],[4303,2.6351,12566.1517],[425,1.59,3.523],[119,5.796,26.298],[109,2.966,1577.344],[93,2.59,18849.23],[72,1.14,529.69],[68,1.87,398.15],[67,4.41,5507.55],[59,2.89,5223.69],[56,2.17,155.42],[45,0.4,796.3],[36,0.47,775.52],[29,2.65,7.11],[21,5.34,0.98],[19,1.85,5486.78],[19,4.97,213.3],[17,2.99,6275.96],[16,0.03,2544.31],[16,1.43,2146.17],[15,1.21,10977.08],[12,2.83,1748.02],[12,3.26,5088.63],[12,5.27,1194.45],[12,2.08,4694],[11,0.77,553.57],[10,1.3,6286.6],[10,4.24,1349.87],[9,2.7,242.73],[9,5.64,951.72],[8,5.3,2352.87],[6,2.65,9437.76],[6,4.67,4690.48]];
const L2: Terms = [[52919,0,0],[8720,1.0721,6283.0758],[309,0.867,12566.152],[27,0.05,3.52],[16,5.19,26.3],[16,3.68,155.42],[10,0.76,18849.23],[9,2.06,77713.77],[7,0.83,775.52],[5,4.66,1577.34],[4,1.03,7.11],[4,3.44,5573.14],[3,5.14,796.3],[3,6.05,5507.55],[3,1.19,242.73],[3,6.12,529.69],[3,0.31,398.15],[3,2.28,553.57],[2,4.38,5223.69],[2,3.75,0.98]];
const L3: Terms = [[289,5.844,6283.076],[35,0,0],[17,5.49,12566.15],[3,5.2,155.42],[1,4.72,3.52],[1,5.3,18849.23],[1,5.97,242.73]];
const L4: Terms = [[114,3.142,0],[8,4.13,6283.08],[1,3.84,12566.15]];
const L5: Terms = [[1,3.14,0]];
const R0: Terms = [[100013989,0,0],[1670700,3.0984635,6283.07585],[13956,3.05525,12566.1517],[3084,5.1985,77713.7715],[1628,1.1739,5753.3849],[1576,2.8469,7860.4194],[925,5.453,11506.77],[542,4.564,3930.21],[472,3.661,5884.927],[346,0.964,5507.553],[329,5.9,5223.694],[307,0.299,5573.143],[243,4.273,11790.629],[212,5.847,1577.344],[186,5.022,10977.079],[175,3.012,18849.228]];
const R1: Terms = [[103019,1.10749,6283.07585],[1721,1.0644,12566.1517],[702,3.142,0],[32,1.02,18849.23],[31,2.84,5507.55],[25,1.32,5223.69]];
const R2: Terms = [[4359,5.7846,6283.0758],[124,5.579,12566.152]];
const vsum = (ts: Terms, t: number) => ts.reduce((s, [a, b, c]) => s + a * Math.cos(b + c * t), 0);

/** Nutation in longitude Δψ (degrees), main four terms (Meeus ch. 22, ≈0.5″). */
function nutation(T: number): number {
  const om = 125.04452 - 1934.136261 * T;
  const Ls = 280.4665 + 36000.7698 * T;
  const Lm = 218.3165 + 481267.8813 * T;
  return (-17.2 * sinD(om) - 1.32 * sinD(2 * Ls) - 0.23 * sinD(2 * Lm) + 0.21 * sinD(2 * om)) / 3600;
}

/** Tropical (sāyana) apparent longitude of the Sun, degrees; `jd` in TT. VSOP87 + FK5,
 *  nutation and aberration (Meeus ch. 25, "higher accuracy"). */
export function sunLongitude(jd: number): number {
  const t = (jd - 2451545.0) / 365250;
  const L =
    (vsum(L0, t) + t * vsum(L1, t) + t * t * vsum(L2, t) + t ** 3 * vsum(L3, t) + t ** 4 * vsum(L4, t) + t ** 5 * vsum(L5, t)) / 1e8;
  const R = (vsum(R0, t) + t * vsum(R1, t) + t * t * vsum(R2, t)) / 1e8;
  const geo = L / D2R + 180;
  return norm(geo - 0.09033 / 3600 + nutation(t * 10) - 20.4898 / 3600 / R);
}

// Meeus table 47.A (largest terms): [D, M, M', F, coefficient in 1e-6 degrees]
const MOON_TERMS: [number, number, number, number, number][] = [
  [0, 0, 1, 0, 6288774], [2, 0, -1, 0, 1274027], [2, 0, 0, 0, 658314], [0, 0, 2, 0, 213618],
  [0, 1, 0, 0, -185116], [0, 0, 0, 2, -114332], [2, 0, -2, 0, 58793], [2, -1, -1, 0, 57066],
  [2, 0, 1, 0, 53322], [2, -1, 0, 0, 45758], [0, 1, -1, 0, -40923], [1, 0, 0, 0, -34720],
  [0, 1, 1, 0, -30383], [2, 0, 0, -2, 15327], [0, 0, 1, 2, -12528], [0, 0, 1, -2, 10980],
  [4, 0, -1, 0, 10675], [0, 0, 3, 0, 10034], [4, 0, -2, 0, 8548], [2, 1, -1, 0, -7888],
  [2, 1, 0, 0, -6766], [1, 0, -1, 0, -5163], [1, 1, 0, 0, 4987], [2, -1, 1, 0, 4036],
  [2, 0, 2, 0, 3994], [4, 0, 0, 0, 3861], [2, 0, -3, 0, 3665], [0, 1, -2, 0, -2689],
  [2, 0, -1, 2, -2602], [2, -1, -2, 0, 2390], [1, 0, 1, 0, -2348], [2, -2, 0, 0, 2236],
  [0, 1, 2, 0, -2120], [0, 2, 0, 0, -2069], [2, -2, -1, 0, 2048], [2, 0, 1, -2, -1773],
  [2, 0, 0, 2, -1595], [4, -1, -1, 0, 1215], [0, 0, 2, 2, -1110], [3, 0, -1, 0, -892],
  [2, 1, 1, 0, -810], [4, -1, -2, 0, 759], [0, 2, -1, 0, -713], [2, 2, -1, 0, -700],
  [2, 1, -2, 0, 691], [2, -1, 0, -2, 596], [4, 0, 1, 0, 549], [0, 0, 4, 0, 537],
  [4, -1, 0, 0, 520], [1, 0, -2, 0, -487], [2, 1, 0, -2, -399], [0, 0, 2, -2, -381],
  [1, 1, 1, 0, 351], [3, 0, -2, 0, -340], [4, 0, -3, 0, 330], [2, -1, 2, 0, 327],
  [0, 2, 1, 0, -323], [1, 1, -1, 0, 299], [2, 0, 3, 0, 294],
];

/** Tropical apparent longitude of the Moon, degrees; `jd` in TT. */
export function moonLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  const Lp = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T;
  const D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T;
  const M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
  const Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T;
  const F = 93.272095 + 483202.0175233 * T - 0.0036539 * T * T;
  const E = 1 - 0.002516 * T - 0.0000074 * T * T;
  let sum = 0;
  for (const [d, m, mp, f, c] of MOON_TERMS) {
    const e = Math.abs(m) === 1 ? E : Math.abs(m) === 2 ? E * E : 1;
    sum += c * e * sinD(d * D + m * M + mp * Mp + f * F);
  }
  const A1 = 119.75 + 131.849 * T;
  const A2 = 53.09 + 479264.29 * T;
  sum += 3958 * sinD(A1) + 1962 * sinD(Lp - F) + 318 * sinD(A2);
  return norm(Lp + sum / 1e6 + nutation(T));
}

// Meeus table 47.B (largest terms): [D, M, M', F, coefficient in 1e-6 degrees]
const MOON_LAT: [number, number, number, number, number][] = [
  [0, 0, 0, 1, 5128122], [0, 0, 1, 1, 280602], [0, 0, 1, -1, 277693], [2, 0, 0, -1, 173237],
  [2, 0, -1, 1, 55413], [2, 0, -1, -1, 46271], [2, 0, 0, 1, 32573], [0, 0, 2, 1, 17198],
  [2, 0, 1, -1, 9266], [0, 0, 2, -1, 8822], [2, -1, 0, -1, 8216], [2, 0, -2, -1, 4324],
  [2, 0, 1, 1, 4200], [2, 1, 0, -1, -3359],
];

/** Geocentric ecliptic latitude of the Moon, degrees (≈0.01°); `jd` in TT. */
export function moonLatitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  const Lp = 218.3164477 + 481267.88123421 * T;
  const D = 297.8501921 + 445267.1114034 * T;
  const M = 357.5291092 + 35999.0502909 * T;
  const Mp = 134.9633964 + 477198.8675055 * T;
  const F = 93.272095 + 483202.0175233 * T;
  const E = 1 - 0.002516 * T;
  let sum = 0;
  for (const [d, m, mp, f, c] of MOON_LAT) sum += c * (m ? E : 1) * sinD(d * D + m * M + mp * Mp + f * F);
  const A1 = 119.75 + 131.849 * T;
  sum += -2235 * sinD(Lp) + 382 * sinD(313.45 + 481266.484 * T) + 175 * sinD(A1 - F) + 175 * sinD(A1 + F);
  return sum / 1e6;
}

/**
 * Lahiri ayanāṃśa (mean, degrees); `jd` in TT. 23.86297° at J2000 + IAU-2006 general
 * precession. Sidereal longitude = apparent tropical longitude − this value. The J2000
 * constant is calibrated so that the 24 saṅkrānti moments of 2025–2026 agree with
 * drikpanchang.com (Lahiri) to ±1 min (its displayed ayanāṃśa: 24.2190° on 2025-06-06).
 */
export function ayanamsa(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  return 23.86297 + (5028.796195 * T + 1.1054348 * T * T) / 3600;
}

// UT wrappers.
const sunUT = (jdUT: number) => sunLongitude(jdUT + deltaT(jdUT));
const moonUT = (jdUT: number) => moonLongitude(jdUT + deltaT(jdUT));
const ayanUT = (jdUT: number) => ayanamsa(jdUT + deltaT(jdUT));
/** Moon–Sun elongation (0–360) at UT, by the current method. */
export const elongation = (jdUT: number) =>
  method === 'surya' ? norm(ssMoon(jdUT) - ssSun(jdUT)) : norm(moonUT(jdUT) - sunUT(jdUT));
/** Sidereal longitudes at UT, by the current method (the SS ones need no ayanāṃśa). */
export const siderealSun = (jdUT: number) => (method === 'surya' ? ssSun(jdUT) : norm(sunUT(jdUT) - ayanUT(jdUT)));
export const siderealMoon = (jdUT: number) => (method === 'surya' ? ssMoon(jdUT) : norm(moonUT(jdUT) - ayanUT(jdUT)));
const yogaAngle = (jdUT: number) => norm(siderealSun(jdUT) + siderealMoon(jdUT));

/**
 * Time (JD, UT) at which the angle f reaches `target`, searching forward (dir = 1) or
 * backward (dir = −1) from t0. `rate` is f's mean speed in °/day. Newton iteration with
 * a numerical derivative; converges to < 0.1 s in a few steps.
 */
export function crossing(f: (jd: number) => number, target: number, t0: number, rate: number, dir: 1 | -1 = 1): number {
  const gap = dir === 1 ? norm(target - f(t0)) : norm(f(t0) - target);
  return refine(f, target, t0 + (dir * gap) / rate);
}

/** Newton iteration to the crossing of f = target nearest to the estimate t. */
function refine(f: (jd: number) => number, target: number, t: number): number {
  for (let i = 0; i < 12; i++) {
    const diff = norm180(target - f(t));
    if (Math.abs(diff) < 1e-6) break;
    const h = 0.005;
    t += diff / (norm180(f(t + h) - f(t - h)) / (2 * h));
  }
  return t;
}

const SYNODIC = 29.530589;
/** Most recent new moon at or before jd (UT). */
export function previousNewMoon(jd: number): number {
  const t = crossing(elongation, 0, jd, 12.19, -1);
  return t > jd ? crossing(elongation, 0, jd - 1, 12.19, -1) : t;
}
/** First new moon strictly after jd (UT). */
export function nextNewMoon(jd: number): number {
  const t = crossing(elongation, 0, jd + 1e-4, 12.19, 1);
  return t <= jd ? crossing(elongation, 0, jd + 1, 12.19, 1) : t;
}

// ---------- sunrise / sunset ----------

function sunRaDec(jdUT: number): { ra: number; dec: number } {
  const jd = jdUT + deltaT(jdUT);
  const T = (jd - 2451545.0) / 36525;
  const lam = sunLongitude(jd);
  const eps = 23.4392911 - 0.0130042 * T + 0.00256 * cosD(125.04 - 1934.136 * T);
  const ra = norm(Math.atan2(cosD(eps) * sinD(lam), cosD(lam)) / D2R);
  const dec = Math.asin(sinD(eps) * sinD(lam)) / D2R;
  return { ra, dec };
}
const gmst = (jdUT: number) => norm(280.46061837 + 360.98564736629 * (jdUT - 2451545.0));

/** Sunrise (kind 'rise') or sunset of a civil date (local to the longitude), JD UT. With the
 *  'surya' method, the Sūrya Siddhānta sunrise / sunset (centre of the Sun, no refraction). */
function sunEvent(y: number, m: number, d: number, lat: number, lon: number, kind: 'rise' | 'set'): number {
  if (method === 'surya') return ssSunEvent(Date.UTC(y, m - 1, d) / DAY_MS + JD_UNIX, lat, lon, kind);
  const h0 = -0.8333;
  let jd = Date.UTC(y, m - 1, d, 12) / DAY_MS + JD_UNIX - lon / 360 + (kind === 'rise' ? -0.25 : 0.25);
  for (let i = 0; i < 8; i++) {
    const { ra, dec } = sunRaDec(jd);
    const cosH = (sinD(h0) - sinD(lat) * sinD(dec)) / (cosD(lat) * cosD(dec));
    const H0 = Math.acos(Math.max(-1, Math.min(1, cosH))) / D2R;
    const target = kind === 'rise' ? -H0 : H0;
    const delta = norm180(target - (gmst(jd) + lon - ra));
    jd += delta / 360.98564736629;
    if (Math.abs(delta) < 1e-4) break;
  }
  return jd;
}

/** Altitude of the Moon's centre (degrees, geocentric) at jd UT for lat/lon. */
function moonAltitude(jdUT: number, lat: number, lon: number): number {
  const jd = jdUT + deltaT(jdUT);
  const T = (jd - 2451545.0) / 36525;
  const lam = moonLongitude(jd);
  const bet = moonLatitude(jd);
  const eps = 23.4392911 - 0.0130042 * T;
  const ra = Math.atan2(sinD(lam) * cosD(eps) - Math.tan(bet * D2R) * sinD(eps), cosD(lam)) / D2R;
  const dec = Math.asin(sinD(bet) * cosD(eps) + cosD(bet) * sinD(eps) * sinD(lam)) / D2R;
  const H = gmst(jdUT) + lon - ra;
  return Math.asin(sinD(lat) * sinD(dec) + cosD(lat) * cosD(dec) * cosD(H)) / D2R;
}

/**
 * First moonrise (candrodaya) in [from, to) (JD UT) at lat/lon, or null. Upper limb with
 * refraction and the Moon's mean parallax: geocentric altitude +0.125°. Accuracy ≈2 min.
 */
export function moonriseBetween(lat: number, lon: number, from: number, to: number): number | null {
  const alt = (t: number) => moonAltitude(t, lat, lon) - 0.125;
  const step = 1 / 72; // 20 min
  let prev = alt(from);
  for (let t = from + step; t < to + step; t += step) {
    const cur = alt(t);
    if (prev < 0 && cur >= 0) {
      let lo = t - step;
      let hi = t;
      for (let i = 0; i < 20; i++) {
        const mid = (lo + hi) / 2;
        if (alt(mid) < 0) lo = mid;
        else hi = mid;
      }
      return hi < to ? hi : null;
    }
    prev = cur;
  }
  return null;
}

/** Local sunrise (UTC Date) for the device-local calendar day of `date` at lat/lon. */
export function sunrise(date: Date, lat: number, lon: number): Date {
  return fromJulian(sunEvent(date.getFullYear(), date.getMonth() + 1, date.getDate(), lat, lon, 'rise'));
}

// ---------- names (Devanagari; transliterated by the app) ----------

export const SAMVATSARA = [
  'प्रभव', 'विभव', 'शुक्ल', 'प्रमोदूत', 'प्रजोत्पत्ति', 'आङ्गीरस', 'श्रीमुख', 'भाव', 'युव', 'धातृ',
  'ईश्वर', 'बहुधान्य', 'प्रमाथि', 'विक्रम', 'वृष', 'चित्रभानु', 'स्वभानु', 'तारण', 'पार्थिव', 'व्यय',
  'सर्वजित्', 'सर्वधारि', 'विरोधि', 'विकृति', 'खर', 'नन्दन', 'विजय', 'जय', 'मन्मथ', 'दुर्मुखि',
  'हेविलम्बि', 'विलम्बि', 'विकारि', 'शार्वरि', 'प्लव', 'शुभकृत्', 'शोभकृत्', 'क्रोधि', 'विश्वावसु', 'पराभव',
  'प्लवङ्ग', 'कीलक', 'सौम्य', 'साधारण', 'विरोधिकृत्', 'परिधावि', 'प्रमादि', 'आनन्द', 'राक्षस', 'नल',
  'पिङ्गल', 'कालयुक्ति', 'सिद्धार्थि', 'रौद्रि', 'दुर्मति', 'दुन्दुभि', 'रुधिरोद्गारि', 'रक्ताक्षि', 'क्रोधन', 'अक्षय',
];
export const MASA = ['चैत्र', 'वैशाख', 'ज्येष्ठ', 'आषाढ', 'श्रावण', 'भाद्रपद', 'आश्वयुज', 'कार्तिक', 'मार्गशीर्ष', 'पुष्य', 'माघ', 'फाल्गुन'];
/** How lunar months are named: amānta (month ends at the new moon: Karnataka, Andhra, Maharashtra, Gujarat …) or pūrṇimānta (ends at the full moon: North India). */
export type MonthNaming = 'amanta' | 'purnimanta';
/**
 * States and union territories where the pūrṇimānta month is used (the default for a city there).
 * Gujarat and Maharashtra (and the South, Odisha, Bengal, Assam) are amānta, as is Goa.
 * The reader's own choice overrides this.
 */
export const PURNIMANTA_STATES = [
  'Uttar Pradesh', 'Bihar', 'Jharkhand', 'Madhya Pradesh', 'Chhattisgarh', 'Rajasthan', 'Delhi', 'Haryana', 'Punjab',
  'Himachal Pradesh', 'Uttarakhand', 'Jammu and Kashmir', 'Ladakh', 'Chandigarh',
];
/** Pūrṇimānta for cities in the northern states, else amānta. */
export const defaultMonthNaming = (city: { state?: string }): MonthNaming => (city.state && PURNIMANTA_STATES.includes(city.state) ? 'purnimanta' : 'amanta');

/**
 * The lunar month of a day under a naming. In kṛṣṇa pakṣa the pūrṇimānta month is the next
 * amānta one (amānta Āśvayuja kṛṣṇa = pūrṇimānta Kārtika kṛṣṇa); śukla pakṣa is the same.
 * A day of an adhika lunation keeps its name and adhika flag in both pakṣas (the adhika month is
 * one whole new moon to new moon span; the usual pūrṇimānta calendars differ only in how they
 * label its kṛṣṇa half), while the kṛṣṇa pakṣa of the month before it is named as usual.
 */
export function monthFor(p: Pick<Panchanga, 'masaIndex' | 'adhika' | 'paksha'>, naming: MonthNaming): { masa: string; masaIndex: number; adhika: boolean } {
  const i = naming === 'purnimanta' && p.paksha === 'कृष्ण' && !p.adhika ? (p.masaIndex + 1) % 12 : p.masaIndex;
  return { masa: MASA[i], masaIndex: i, adhika: p.adhika };
}
/** "अधिक कार्तिक" style label of the day's lunar month. */
export const monthLabel = (p: Pick<Panchanga, 'masaIndex' | 'adhika' | 'paksha'>, naming: MonthNaming) => {
  const m = monthFor(p, naming);
  return `${m.adhika ? 'अधिक ' : ''}${m.masa}`;
};
/** The day's saṅkalpa with the month named by `naming` (the saṅkalpa itself is written amānta). */
export function sankalpaFor(p: Panchanga, naming: MonthNaming, sankalpa: string = p.sankalpa): string {
  const m = monthFor(p, naming);
  if (m.masaIndex === p.masaIndex) return sankalpa;
  return sankalpa.replace(`${p.adhika ? 'अधिक' : ''}${p.masa}मासे`, `${m.adhika ? 'अधिक' : ''}${m.masa}मासे`);
}
export const RTU_LOC = ['वसन्तर्तौ', 'ग्रीष्मर्तौ', 'वर्षर्तौ', 'शरदृतौ', 'हेमन्तर्तौ', 'शिशिरर्तौ'];
const RTU = ['वसन्त', 'ग्रीष्म', 'वर्षा', 'शरद्', 'हेमन्त', 'शिशिर'];
export const TITHI = ['प्रतिपत्', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'अष्टमी', 'नवमी', 'दशमी', 'एकादशी', 'द्वादशी', 'त्रयोदशी', 'चतुर्दशी'];
const TITHI_LOC = ['प्रतिपदि', 'द्वितीयायां', 'तृतीयायां', 'चतुर्थ्यां', 'पञ्चम्यां', 'षष्ठ्यां', 'सप्तम्यां', 'अष्टम्यां', 'नवम्यां', 'दशम्यां', 'एकादश्यां', 'द्वादश्यां', 'त्रयोदश्यां', 'चतुर्दश्यां'];
const VASARA = ['भानु', 'इन्दु', 'भौम', 'सौम्य', 'गुरु', 'भृगु', 'स्थिर'];
export const NAKSHATRA = [
  'अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा', 'आर्द्रा', 'पुनर्वसु', 'पुष्य', 'आश्लेषा',
  'मघा', 'पूर्वफल्गुनी', 'उत्तरफल्गुनी', 'हस्त', 'चित्रा', 'स्वाती', 'विशाखा', 'अनूराधा', 'ज्येष्ठा',
  'मूल', 'पूर्वाषाढा', 'उत्तराषाढा', 'श्रवण', 'धनिष्ठा', 'शतभिषक्', 'पूर्वभाद्रपदा', 'उत्तरभाद्रपदा', 'रेवती',
];
export const YOGA = [
  'विष्कम्भ', 'प्रीति', 'आयुष्मान्', 'सौभाग्य', 'शोभन', 'अतिगण्ड', 'सुकर्मा', 'धृति', 'शूल',
  'गण्ड', 'वृद्धि', 'ध्रुव', 'व्याघात', 'हर्षण', 'वज्र', 'सिद्धि', 'व्यतीपात', 'वरीयान्',
  'परिघ', 'शिव', 'सिद्ध', 'साध्य', 'शुभ', 'शुक्ल', 'ब्रह्म', 'ऐन्द्र', 'वैधृति',
];
export const RASHI = ['मेष', 'वृषभ', 'मिथुन', 'कर्कटक', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनुस्', 'मकर', 'कुम्भ', 'मीन'];
const KARANA_MOVABLE = ['बव', 'बालव', 'कौलव', 'तैतिल', 'गर', 'वणिज', 'विष्टि'];
/** Karaṇa name for half-tithi number k = 0..59 (0 = first half of śukla pratipadā). */
export function karanaName(k: number): string {
  if (k === 0) return 'किंस्तुघ्न';
  if (k >= 57) return ['शकुनि', 'चतुष्पाद', 'नाग'][k - 57];
  return KARANA_MOVABLE[(k - 1) % 7];
}
/**
 * A name as the first member of a compound before न / य (saṅkalpa: "…नामसंवत्सरे",
 * "…नक्षत्रयुक्तायां", "…योगयुक्तायाम्"): consonant stems take their compound form —
 * सर्वजित् → सर्वजिन्(नाम), शतभिषक् → शतभिषङ्(नक्षत्र), आयुष्मान् → आयुष्मद्(योग),
 * सुकर्मा → सुकर्म(योग), वरीयान् → वरीयो(योग); vowel-final names are unchanged.
 */
const STEM: Record<string, string> = { 'शतभिषक्': 'शतभिषङ्', 'आयुष्मान्': 'आयुष्मद्', 'सुकर्मा': 'सुकर्म', 'वरीयान्': 'वरीयो' };
export const compoundStem = (name: string) => STEM[name] ?? name.replace(/त्$/, 'न्');

/** Weekday names, Sunday first (Devanagari). */
export const VARA = ['भानुवार', 'सोमवार', 'मङ्गलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];

/** Tithi name for index 1..30 (15 = पूर्णिमा, 30 = अमावास्या). */
export function tithiName(i: number): string {
  if (i === 15) return 'पूर्णिमा';
  if (i === 30) return 'अमावास्या';
  return TITHI[(i - 1) % 15];
}
export const pakshaOf = (i: number): 'शुक्ल' | 'कृष्ण' => (i <= 15 ? 'शुक्ल' : 'कृष्ण');

// ---------- cities and local time ----------

export interface City {
  id: string;
  name: string;
  /** State (India) or country. */
  state?: string;
  lat: number;
  lon: number;
  /** Standard-time UTC offset in hours. */
  tz: number;
  /** Daylight-saving rule, if any. */
  dst?: 'us' | 'eu' | 'au';
  /** Size rank 0–3 (orders search results). */
  rank?: number;
  /** Other names to match in search (Bangalore, Bombay …). */
  alias?: string;
}

/** Popular places, shown first in the city picker (ids are stored in settings — keep them stable). */
export const CITIES: City[] = [
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', lat: 12.97, lon: 77.59, tz: 5.5, rank: 3, alias: 'Bangalore' },
  { id: 'mysuru', name: 'Mysuru', state: 'Karnataka', lat: 12.3, lon: 76.64, tz: 5.5, rank: 2, alias: 'Mysore' },
  { id: 'udupi', name: 'Udupi', state: 'Karnataka', lat: 13.34, lon: 74.75, tz: 5.5, rank: 2, alias: 'Udipi' },
  { id: 'mangaluru', name: 'Mangaluru', state: 'Karnataka', lat: 12.91, lon: 74.86, tz: 5.5, rank: 2, alias: 'Mangalore' },
  { id: 'hubballi', name: 'Hubballi–Dharwad', state: 'Karnataka', lat: 15.36, lon: 75.12, tz: 5.5, rank: 2, alias: 'Hubli Dharwad' },
  { id: 'mantralayam', name: 'Mantralayam', state: 'Andhra Pradesh', lat: 15.94, lon: 77.43, tz: 5.5, rank: 2 },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', lat: 13.08, lon: 80.27, tz: 5.5, rank: 3, alias: 'Madras' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', lat: 17.39, lon: 78.49, tz: 5.5, rank: 3 },
  { id: 'tirupati', name: 'Tirupati', state: 'Andhra Pradesh', lat: 13.63, lon: 79.42, tz: 5.5, rank: 2 },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', lat: 18.52, lon: 73.86, tz: 5.5, rank: 3, alias: 'Poona' },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', lat: 19.08, lon: 72.88, tz: 5.5, rank: 3, alias: 'Bombay' },
  { id: 'delhi', name: 'Delhi', state: 'Delhi', lat: 28.61, lon: 77.21, tz: 5.5, rank: 3, alias: 'New Delhi' },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', lat: 22.57, lon: 88.36, tz: 5.5, rank: 3, alias: 'Calcutta' },
  { id: 'singapore', name: 'Singapore', state: 'Singapore', lat: 1.35, lon: 103.82, tz: 8, rank: 3 },
  { id: 'dubai', name: 'Dubai', state: 'UAE', lat: 25.2, lon: 55.27, tz: 4, rank: 3 },
  { id: 'london', name: 'London', state: 'UK', lat: 51.51, lon: -0.13, tz: 0, dst: 'eu', rank: 3 },
  { id: 'new-york', name: 'New York / NJ', state: 'USA', lat: 40.71, lon: -74.01, tz: -5, dst: 'us', rank: 3 },
  { id: 'bay-area', name: 'San Francisco Bay Area', state: 'USA', lat: 37.39, lon: -122.08, tz: -8, dst: 'us', rank: 3 },
  { id: 'seattle', name: 'Seattle', state: 'USA', lat: 47.61, lon: -122.33, tz: -8, dst: 'us', rank: 3 },
  { id: 'sydney', name: 'Sydney', state: 'Australia', lat: -33.87, lon: 151.21, tz: 10, dst: 'au', rank: 3 },
];

/** Places outside India (besides those in CITIES). */
const ABROAD: City[] = [
  { id: 'abu-dhabi', name: 'Abu Dhabi', state: 'UAE', lat: 24.45, lon: 54.38, tz: 4 },
  { id: 'muscat', name: 'Muscat', state: 'Oman', lat: 23.59, lon: 58.41, tz: 4 },
  { id: 'doha', name: 'Doha', state: 'Qatar', lat: 25.29, lon: 51.53, tz: 3 },
  { id: 'kuwait', name: 'Kuwait City', state: 'Kuwait', lat: 29.38, lon: 47.99, tz: 3 },
  { id: 'riyadh', name: 'Riyadh', state: 'Saudi Arabia', lat: 24.71, lon: 46.68, tz: 3 },
  { id: 'kathmandu', name: 'Kathmandu', state: 'Nepal', lat: 27.72, lon: 85.32, tz: 5.75 },
  { id: 'colombo', name: 'Colombo', state: 'Sri Lanka', lat: 6.93, lon: 79.86, tz: 5.5 },
  { id: 'dhaka', name: 'Dhaka', state: 'Bangladesh', lat: 23.81, lon: 90.41, tz: 6 },
  { id: 'kuala-lumpur', name: 'Kuala Lumpur', state: 'Malaysia', lat: 3.14, lon: 101.69, tz: 8 },
  { id: 'hong-kong', name: 'Hong Kong', state: 'China', lat: 22.32, lon: 114.17, tz: 8 },
  { id: 'tokyo', name: 'Tokyo', state: 'Japan', lat: 35.68, lon: 139.69, tz: 9 },
  { id: 'nairobi', name: 'Nairobi', state: 'Kenya', lat: -1.29, lon: 36.82, tz: 3 },
  { id: 'johannesburg', name: 'Johannesburg', state: 'South Africa', lat: -26.2, lon: 28.05, tz: 2 },
  { id: 'durban', name: 'Durban', state: 'South Africa', lat: -29.86, lon: 31.02, tz: 2 },
  { id: 'mauritius', name: 'Port Louis', state: 'Mauritius', lat: -20.16, lon: 57.5, tz: 4 },
  { id: 'frankfurt', name: 'Frankfurt', state: 'Germany', lat: 50.11, lon: 8.68, tz: 1, dst: 'eu' },
  { id: 'munich', name: 'Munich', state: 'Germany', lat: 48.14, lon: 11.58, tz: 1, dst: 'eu' },
  { id: 'paris', name: 'Paris', state: 'France', lat: 48.86, lon: 2.35, tz: 1, dst: 'eu' },
  { id: 'amsterdam', name: 'Amsterdam', state: 'Netherlands', lat: 52.37, lon: 4.9, tz: 1, dst: 'eu' },
  { id: 'zurich', name: 'Zurich', state: 'Switzerland', lat: 47.38, lon: 8.54, tz: 1, dst: 'eu' },
  { id: 'dublin', name: 'Dublin', state: 'Ireland', lat: 53.35, lon: -6.26, tz: 0, dst: 'eu' },
  { id: 'manchester', name: 'Manchester', state: 'UK', lat: 53.48, lon: -2.24, tz: 0, dst: 'eu' },
  { id: 'leicester', name: 'Leicester', state: 'UK', lat: 52.64, lon: -1.13, tz: 0, dst: 'eu' },
  { id: 'toronto', name: 'Toronto', state: 'Canada', lat: 43.65, lon: -79.38, tz: -5, dst: 'us' },
  { id: 'vancouver', name: 'Vancouver', state: 'Canada', lat: 49.28, lon: -123.12, tz: -8, dst: 'us' },
  { id: 'boston', name: 'Boston', state: 'USA', lat: 42.36, lon: -71.06, tz: -5, dst: 'us' },
  { id: 'washington', name: 'Washington DC area', state: 'USA', lat: 38.9, lon: -77.04, tz: -5, dst: 'us' },
  { id: 'atlanta', name: 'Atlanta', state: 'USA', lat: 33.75, lon: -84.39, tz: -5, dst: 'us' },
  { id: 'chicago', name: 'Chicago', state: 'USA', lat: 41.88, lon: -87.63, tz: -6, dst: 'us' },
  { id: 'dallas', name: 'Dallas', state: 'USA', lat: 32.78, lon: -96.8, tz: -6, dst: 'us' },
  { id: 'houston', name: 'Houston', state: 'USA', lat: 29.76, lon: -95.37, tz: -6, dst: 'us' },
  { id: 'denver', name: 'Denver', state: 'USA', lat: 39.74, lon: -104.99, tz: -7, dst: 'us' },
  { id: 'los-angeles', name: 'Los Angeles', state: 'USA', lat: 34.05, lon: -118.24, tz: -8, dst: 'us' },
  { id: 'melbourne', name: 'Melbourne', state: 'Australia', lat: -37.81, lon: 144.96, tz: 10, dst: 'au' },
  { id: 'brisbane', name: 'Brisbane', state: 'Australia', lat: -27.47, lon: 153.03, tz: 10 },
  { id: 'perth', name: 'Perth', state: 'Australia', lat: -31.95, lon: 115.86, tz: 8 },
];

const slug = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

let all: City[] | null = null;
let byId: Map<string, City> | null = null;
/** Every selectable place: CITIES, then all Indian towns of 15,000+ people (GeoNames) and ABROAD. */
export function allCities(): City[] {
  if (all) return all;
  const out: City[] = [...CITIES];
  // ABROAD ids are fixed too: a GeoNames town of the same name (Dhaka, Bihar) gets a suffix.
  const ids = new Set([...CITIES, ...ABROAD].map((c) => c.id));
  const near = (a: City, lat: number, lon: number) => Math.abs(a.lat - lat) < 0.12 && Math.abs(a.lon - lon) < 0.12;
  for (const [name, state, lat, lon, rank, alias] of INDIA_CITIES) {
    // Skip the GeoNames twin of a popular place (same name, same spot).
    if (CITIES.some((c) => near(c, lat, lon) && (c.name.startsWith(name) || (c.alias ?? '').includes(name)))) continue;
    let id = slug(name);
    if (ids.has(id)) id = `${id}-${slug(state)}`;
    if (ids.has(id)) continue;
    ids.add(id);
    out.push({ id, name, state, lat, lon, tz: 5.5, rank, alias });
  }
  for (const c of ABROAD) out.push({ rank: 2, ...c });
  all = out;
  return out;
}

export const cityById = (id: string | undefined): City => {
  if (!byId) byId = new Map(allCities().map((c) => [c.id, c]));
  return (id && byId.get(id)) || CITIES[0];
};

/** "Udupi, Karnataka". */
export const cityLabel = (c: City) => (c.state && c.state !== c.name ? `${c.name}, ${c.state}` : c.name);

const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
/** Places whose name, other name or state starts with the query (word prefix), larger places first. */
export function searchCities(query: string, limit = 80): City[] {
  const q = fold(query.trim());
  if (!q) return CITIES;
  const scored: [number, City][] = [];
  for (const c of allCities()) {
    const name = fold(c.name);
    const alias = fold(c.alias ?? '');
    const state = fold(c.state ?? '');
    let score = -1;
    if (name === q) score = 100;
    else if (name.startsWith(q) || alias.split(/\s+/).some((w) => w.startsWith(q))) score = 60;
    else if (name.split(/[\s–-]+/).some((w) => w.startsWith(q))) score = 40;
    else if (state.startsWith(q) || state.split(/\s+/).some((w) => w.startsWith(q))) score = 20;
    if (score >= 0) scored.push([score + (c.rank ?? 0) * 5, c]);
  }
  scored.sort((a, b) => b[0] - a[0] || a[1].name.localeCompare(b[1].name));
  return scored.slice(0, limit).map(([, c]) => c);
}

/** Day of month of the n-th (n ≥ 1) or last (n = −1) Sunday of month m (1–12). */
function sunday(y: number, m: number, n: number): number {
  if (n > 0) {
    const first = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
    return 1 + ((7 - first) % 7) + (n - 1) * 7;
  }
  const lastDate = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const lastDow = new Date(Date.UTC(y, m - 1, lastDate)).getUTCDay();
  return lastDate - lastDow;
}

/** UTC offset of the city in minutes at the instant `ms` (standard rules for 2007+). */
export function utcOffsetMinutes(city: City, ms: number): number {
  const std = city.tz * 60;
  if (!city.dst) return std;
  const y = new Date(ms + std * 60000).getUTCFullYear();
  let start: number;
  let end: number;
  if (city.dst === 'us') {
    start = Date.UTC(y, 2, sunday(y, 3, 2), 2) - std * 60000; // 2:00 local standard
    end = Date.UTC(y, 10, sunday(y, 11, 1), 1) - std * 60000; // 2:00 local daylight
  } else if (city.dst === 'eu') {
    start = Date.UTC(y, 2, sunday(y, 3, -1), 1);
    end = Date.UTC(y, 9, sunday(y, 10, -1), 1);
  } else {
    // Southern hemisphere: DST from the first Sunday of October to the first Sunday of April.
    const aprEnd = Date.UTC(y, 3, sunday(y, 4, 1), 2) - std * 60000;
    const octStart = Date.UTC(y, 9, sunday(y, 10, 1), 2) - std * 60000;
    return ms < aprEnd || ms >= octStart ? std + 60 : std;
  }
  return ms >= start && ms < end ? std + 60 : std;
}

const pad = (n: number) => String(n).padStart(2, '0');
/** ISO date from y, m (1–12), d. */
export const isoDate = (y: number, m: number, d: number) => `${y}-${pad(m)}-${pad(d)}`;
/** Device-local calendar date of a JS Date as 'YYYY-MM-DD'. */
export const isoOf = (d: Date) => isoDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
export function parseIso(iso: string): [number, number, number] {
  const [y, m, d] = iso.split('-').map(Number);
  return [y, m, d];
}
export function addDays(iso: string, n: number): string {
  const [y, m, d] = parseIso(iso);
  const t = new Date(Date.UTC(y, m - 1, d + n));
  return isoDate(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate());
}
/** 0 = Sunday. */
export const weekdayOf = (iso: string) => {
  const [y, m, d] = parseIso(iso);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
};
/** Civil date at the city of an instant. */
export function cityDateOf(city: City, ms: number): string {
  const t = new Date(ms + utcOffsetMinutes(city, ms) * 60000);
  return isoDate(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate());
}
/** Today's date at the city. */
export const todayIn = (city: City) => cityDateOf(city, Date.now());

/** "HH:MM" in the city's local time; with `+1`/`-1` style suffix when not on `day`. */
export function formatTime(t: Date, city: City, day?: string, lang: UiLang = 'en'): string {
  const ms = t.getTime() + 30000; // round to the nearest minute
  const loc = new Date(ms + utcOffsetMinutes(city, ms) * 60000);
  const s = `${pad(loc.getUTCHours())}:${pad(loc.getUTCMinutes())}`;
  if (!day) return s;
  const other = isoDate(loc.getUTCFullYear(), loc.getUTCMonth() + 1, loc.getUTCDate());
  if (other === day) return s;
  const dm = dayMonth(lang, loc.getUTCMonth() + 1, loc.getUTCDate());
  // Other languages put the date first, so endings such as "till" join the time's digits.
  return lang === 'en' ? `${s}, ${dm}` : `${dm} ${s}`;
}

const sunCache = new Map<string, number>();
/** Sunrise / sunset of a civil date at the city, JD (UT). Cached. */
export function sunEventJd(city: City, iso: string, kind: 'rise' | 'set'): number {
  const key = `${method}|${city.lat},${city.lon},${iso},${kind}`;
  let v = sunCache.get(key);
  if (v === undefined) {
    const [y, m, d] = parseIso(iso);
    v = sunEvent(y, m, d, city.lat, city.lon, kind);
    if (sunCache.size > 5000) sunCache.clear();
    sunCache.set(key, v);
  }
  return v;
}
export const sunriseJd = (city: City, iso: string) => sunEventJd(city, iso, 'rise');
export const sunsetJd = (city: City, iso: string) => sunEventJd(city, iso, 'set');

/** The pañcāṅga day (sunrise→next sunrise) containing the instant jd (UT). */
export function sunriseDayOf(city: City, jd: number): string {
  const iso = cityDateOf(city, (jd - JD_UNIX) * DAY_MS);
  return jd < sunriseJd(city, iso) ? addDays(iso, -1) : jd >= sunriseJd(city, addDays(iso, 1)) ? addDays(iso, 1) : iso;
}

/** Tithi (1–30) prevailing at an instant. */
export const tithiAt = (jd: number) => Math.floor(elongation(jd) / 12) + 1;
/** Tithi (1–30) at sunrise of a day. */
export const sunriseTithi = (city: City, iso: string) => tithiAt(sunriseJd(city, iso));

// ---------- lunar months ----------

export interface LunarMonth {
  /** New moons bounding the lunation, JD UT. */
  start: number;
  end: number;
  /** 0 = Caitra … 11 = Phālguna. */
  masa: number;
  adhika: boolean;
}
const rasiAt = (jd: number) => Math.floor(siderealSun(jd) / 30); // 0 = Meṣa

function lunationFrom(nm: number): LunarMonth {
  const end = nextNewMoon(nm);
  const r0 = rasiAt(nm);
  return { start: nm, end, masa: (r0 + 1) % 12, adhika: rasiAt(end) === r0 };
}
/** The amānta lunation containing jd (UT). */
export const lunarMonthAt = (jd: number) => lunationFrom(previousNewMoon(jd));
/** All lunations overlapping [from, to] (JD UT). */
export function lunationsBetween(from: number, to: number): LunarMonth[] {
  const out: LunarMonth[] = [];
  let l = lunarMonthAt(from);
  while (l.start <= to) {
    out.push(l);
    l = lunationFrom(l.end);
  }
  return out;
}
/** Start time (JD UT) of tithi k (1–30) of a lunation. */
export function tithiStart(l: LunarMonth, k: number): number {
  if (k === 1) return l.start;
  // Newton from the mean position: the true time is within ~±1 day (±12°), so the
  // nearest crossing is the right one.
  return refine(elongation, (k - 1) * 12, l.start + ((k - 1) * (l.end - l.start)) / 30);
}
export const tithiEnd = (l: LunarMonth, k: number) => (k === 30 ? l.end : tithiStart(l, k + 1));

// ---------- the daily pañcāṅga ----------

export interface Span {
  /** Index of the element (tithi 1–30, nakṣatra/yoga 0–26, karaṇa 0–59, rāśi 0–11). */
  index: number;
  name: string;
  start: Date;
  end: Date;
}

/** Successive spans of an angular quantity divided into `count` equal parts, from `from` until past `to`. */
function spans(f: (jd: number) => number, count: number, rate: number, from: number, to: number, name: (i: number) => string): Span[] {
  const width = 360 / count;
  const out: Span[] = [];
  let idx = Math.floor(f(from) / width) % count;
  let start = crossing(f, idx * width, from, rate, -1);
  let t = from;
  for (let guard = 0; guard < 12; guard++) {
    const end = crossing(f, ((idx + 1) % count) * width, t, rate);
    out.push({ index: idx, name: name(idx), start: fromJulian(start), end: fromJulian(end) });
    if (end >= to) break;
    start = end;
    t = end + 1e-6;
    idx = (idx + 1) % count;
  }
  return out;
}

export interface Panchanga {
  /** Civil date 'YYYY-MM-DD' at the city. */
  date: string;
  sunrise: Date;
  sunset: Date;
  nextSunrise: Date;
  samvatsara: string;
  ayana: 'उत्तरायण' | 'दक्षिणायन';
  rtu: string;
  masa: string;
  /** 0 = Caitra … 11 = Phālguna. */
  masaIndex: number;
  adhika: boolean;
  paksha: 'शुक्ल' | 'कृष्ण';
  /** 1–30 (16–30 = कृष्ण pakṣa; 15 = पूर्णिमा, 30 = अमावास्या), at sunrise. */
  tithiIndex: number;
  tithi: string;
  /** When the sunrise tithi ends. */
  tithiEnd: Date;
  /** All tithis from sunrise until the next sunrise (the last one may run past it). */
  tithis: Span[];
  /** 0 = Sunday. */
  weekday: number;
  vasara: string;
  nakshatraIndex: number;
  nakshatra: string;
  nakshatraEnd: Date;
  nakshatras: Span[];
  yoga: string;
  yogaEnd: Date;
  yogas: Span[];
  karana: string;
  karanas: Span[];
  /** Sidereal rāśi of the Moon (at sunrise) and any change before the next sunrise. */
  moonRashi: string;
  moonRashis: Span[];
  sunRashi: string;
  rahuKala: [Date, Date];
  yamaganda: [Date, Date];
  gulika: [Date, Date];
  abhijit: [Date, Date];
  /** Ready-to-recite saṅkalpa phrase (Devanagari). */
  sankalpa: string;
}

// 1-based eighth of the daytime, Sunday first.
const RAHU = [8, 2, 7, 5, 6, 4, 3];
const YAMA = [5, 4, 3, 2, 1, 7, 6];
const GULIKA = [7, 6, 5, 4, 3, 2, 1];

/**
 * Pañcāṅga for a day at a city. `day` is either an ISO date ('YYYY-MM-DD', the civil date
 * at the city) or a JS Date, whose device-local calendar date is used. `calc` overrides the
 * module-wide calculation method for this call.
 */
export function panchanga(day: Date | string, city: City, calc?: CalcMethod): Panchanga {
  return withMethod(calc, () => panchangaOf(day, city));
}

function panchangaOf(day: Date | string, city: City): Panchanga {
  const date = typeof day === 'string' ? day : isoOf(day);
  const jd = sunriseJd(city, date);
  const jdSet = sunsetJd(city, date);
  const jdNext = sunriseJd(city, addDays(date, 1));
  const rise = fromJulian(jd);
  const set = fromJulian(jdSet);

  const elong = elongation(jd);
  const tithiIndex = Math.floor(elong / 12) + 1; // 1..30
  const paksha = pakshaOf(tithiIndex);
  const tInPaksha = ((tithiIndex - 1) % 15) + 1; // 1..15
  const isFull = tithiIndex === 15;
  const isNew = tithiIndex === 30;
  const tithi = tithiName(tithiIndex);
  const tithiLoc = isFull ? 'पूर्णिमायां' : isNew ? 'अमावास्यायां' : TITHI_LOC[tInPaksha - 1];
  const tithis = spans(elongation, 30, 12.19, jd, jdNext, (i) => tithiName(i + 1)).map((s) => ({ ...s, index: s.index + 1 }));
  const nakshatras = spans(siderealMoon, 27, 13.18, jd, jdNext, (i) => NAKSHATRA[i]);
  const yogas = spans(yogaAngle, 27, 14.17, jd, jdNext, (i) => YOGA[i]);
  const karanas = spans(elongation, 60, 12.19, jd, jdNext, karanaName);
  const moonRashis = spans(siderealMoon, 12, 13.18, jd, jdNext, (i) => RASHI[i]);

  const sidSun = siderealSun(jd);
  const nakshatra = nakshatras[0].name;
  const yoga = yogas[0].name;

  // Amānta month: named from the Sun's sidereal rāśi at the new moon that began it.
  const lm = lunarMonthAt(jd);
  const masaIndex = lm.masa;
  const adhika = lm.adhika;
  const masa = MASA[masaIndex];
  const rtuIndex = Math.floor(masaIndex / 2);

  // Uttarāyaṇa from Makara saṅkrānti to Karka saṅkrānti (sidereal rāśis 9..2).
  const sunRasi = Math.floor(sidSun / 30);
  const ayana = sunRasi >= 9 || sunRasi <= 2 ? 'उत्तरायण' : 'दक्षिणायन';

  // Saṃvatsara changes at Caitra śukla pratipadā (Yugādi): find this lunar year's start.
  // When the new moon falls before the next sunrise and pratipadā ends before it too (a kṣaya
  // pratipadā, so Yugādi is this very day although amāvāsyā is at sunrise — e.g. 19 Mar
  // 2026), the day already belongs to the new lunation's year (drikpanchang does the same).
  const ylm = lm.end < jdNext && tithiAt(jdNext) !== 1 ? lunationFrom(lm.end) : lm;
  const yearStart = fromJulian(ylm.start - ylm.masa * SYNODIC);
  const y = yearStart.getUTCFullYear() + (yearStart.getUTCMonth() >= 10 ? 1 : 0);
  const samvatsara = SAMVATSARA[(((y - 1987) % 60) + 60) % 60];

  const weekday = weekdayOf(date);
  const vasara = VASARA[weekday];
  const sankalpa =
    `${compoundStem(samvatsara)}नामसंवत्सरे ${ayana}े ${RTU_LOC[rtuIndex]} ` +
    `${adhika ? 'अधिक' : ''}${masa}मासे ${paksha}पक्षे ${tithiLoc} शुभतिथौ ` +
    `${vasara}वासरयुक्तायां ${compoundStem(nakshatra)}नक्षत्रयुक्तायां ${compoundStem(yoga)}योगयुक्तायाम्`;

  const dayLen = jdSet - jd;
  const eighth = (n: number): [Date, Date] => [fromJulian(jd + ((n - 1) * dayLen) / 8), fromJulian(jd + (n * dayLen) / 8)];
  const mid = (jd + jdSet) / 2;

  return {
    date, sunrise: rise, sunset: set, nextSunrise: fromJulian(jdNext),
    samvatsara, ayana, rtu: RTU[rtuIndex], masa, masaIndex, adhika, paksha,
    tithiIndex, tithi, tithiEnd: tithis[0].end, tithis,
    weekday, vasara: `${vasara}वासर`,
    nakshatraIndex: nakshatras[0].index, nakshatra, nakshatraEnd: nakshatras[0].end, nakshatras,
    yoga, yogaEnd: yogas[0].end, yogas,
    karana: karanas[0].name, karanas,
    moonRashi: moonRashis[0].name, moonRashis, sunRashi: RASHI[sunRasi],
    rahuKala: eighth(RAHU[weekday]), yamaganda: eighth(YAMA[weekday]), gulika: eighth(GULIKA[weekday]),
    abhijit: [fromJulian(mid - dayLen / 30), fromJulian(mid + dayLen / 30)],
    sankalpa,
  };
}
