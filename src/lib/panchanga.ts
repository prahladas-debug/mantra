/**
 * Pañcāṅga for saṅkalpa: saṃvatsara, ayana, ṛtu, māsa (amānta / Cāndramāna, as
 * used in Karnataka), pakṣa, tithi, vāsara, nakṣatra and yoga, at local sunrise.
 *
 * Sun and Moon positions use the low-precision series from Jean Meeus,
 * "Astronomical Algorithms" (ch. 25 and 47, main terms): Sun ≈ 0.01°, Moon ≈
 * 0.1°, i.e. tithi/nakṣatra change times within a few minutes. Sidereal
 * positions use the Lahiri (Citrapakṣa) ayanāṃśa. Good enough for saṅkalpa;
 * for muhūrta decisions consult a printed pañcāṅga.
 */

const D2R = Math.PI / 180;
const norm = (x: number) => ((x % 360) + 360) % 360;
const sinD = (x: number) => Math.sin(x * D2R);
const cosD = (x: number) => Math.cos(x * D2R);

/** Julian Day for a JS Date (UTC). */
export function julianDay(d: Date): number {
  return d.getTime() / 86400000 + 2440587.5;
}

/** Tropical (sayana) apparent longitude of the Sun, degrees. */
export function sunLongitude(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * sinD(M) +
    (0.019993 - 0.000101 * T) * sinD(2 * M) +
    0.000289 * sinD(3 * M);
  const omega = 125.04 - 1934.136 * T;
  return norm(L0 + C - 0.00569 - 0.00478 * sinD(omega));
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

/** Tropical apparent longitude of the Moon, degrees. */
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
  const omega = 125.04452 - 1934.136261 * T;
  return norm(Lp + sum / 1e6 - 0.00478 * sinD(omega));
}

/** Lahiri ayanāṃśa (degrees), linear approximation around J2000 (23°51′11″). */
export function ayanamsa(jd: number): number {
  return 23.853 + ((jd - 2451545.0) / 365.25) * (50.29 / 3600);
}

const sidereal = (lon: number, jd: number) => norm(lon - ayanamsa(jd));

/** Moon–Sun elongation (0–360). */
const elongation = (jd: number) => norm(moonLongitude(jd) - sunLongitude(jd));

/** Most recent new moon at or before jd (bisection on elongation). */
export function previousNewMoon(jd: number): number {
  let hi = jd - elongation(jd) / 12.19; // mean rate ≈ 12.19°/day
  // ensure hi is just after the conjunction
  while (elongation(hi) > 300) hi += 0.5;
  let lo = hi - 3;
  while (elongation(lo) < 300) lo -= 0.5;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (elongation(mid) > 180) lo = mid;
    else hi = mid;
  }
  return hi;
}

/** Local sunrise (UTC Date) for a calendar day at lat/lon (NOAA algorithm). */
export function sunrise(date: Date, lat: number, lon: number): Date {
  const day0 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const jd = day0 / 86400000 + 2440587.5;
  // Julian days start at noon: 0h UTC of the date is jd = …5, so the day number is ceil().
  const n = Math.ceil(jd - 2451545.0 + 0.0008);
  const Js = n - lon / 360;
  const M = norm(357.5291 + 0.98560028 * Js);
  const C = 1.9148 * sinD(M) + 0.02 * sinD(2 * M) + 0.0003 * sinD(3 * M);
  const lambda = norm(M + C + 180 + 102.9372);
  const Jtransit = 2451545.0 + Js + 0.0053 * sinD(M) - 0.0069 * sinD(2 * lambda);
  const dec = Math.asin(sinD(lambda) * sinD(23.4397)) / D2R;
  const cosH = (sinD(-0.833) - sinD(lat) * sinD(dec)) / (cosD(lat) * cosD(dec));
  const H = Math.acos(Math.max(-1, Math.min(1, cosH))) / D2R;
  const jrise = Jtransit - H / 360;
  return new Date((jrise - 2440587.5) * 86400000);
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
const RTU_LOC = ['वसन्तर्तौ', 'ग्रीष्मर्तौ', 'वर्षर्तौ', 'शरदृतौ', 'हेमन्तर्तौ', 'शिशिरर्तौ'];
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

export interface City {
  id: string;
  name: string;
  lat: number;
  lon: number;
}

export const CITIES: City[] = [
  { id: 'bengaluru', name: 'Bengaluru', lat: 12.97, lon: 77.59 },
  { id: 'mysuru', name: 'Mysuru', lat: 12.3, lon: 76.64 },
  { id: 'udupi', name: 'Udupi', lat: 13.34, lon: 74.75 },
  { id: 'mangaluru', name: 'Mangaluru', lat: 12.91, lon: 74.86 },
  { id: 'hubballi', name: 'Hubballi–Dharwad', lat: 15.36, lon: 75.12 },
  { id: 'mantralayam', name: 'Mantralayam', lat: 15.94, lon: 77.43 },
  { id: 'chennai', name: 'Chennai', lat: 13.08, lon: 80.27 },
  { id: 'hyderabad', name: 'Hyderabad', lat: 17.39, lon: 78.49 },
  { id: 'tirupati', name: 'Tirupati', lat: 13.63, lon: 79.42 },
  { id: 'pune', name: 'Pune', lat: 18.52, lon: 73.86 },
  { id: 'mumbai', name: 'Mumbai', lat: 19.08, lon: 72.88 },
  { id: 'delhi', name: 'Delhi', lat: 28.61, lon: 77.21 },
  { id: 'kolkata', name: 'Kolkata', lat: 22.57, lon: 88.36 },
  { id: 'singapore', name: 'Singapore', lat: 1.35, lon: 103.82 },
  { id: 'dubai', name: 'Dubai', lat: 25.2, lon: 55.27 },
  { id: 'london', name: 'London', lat: 51.51, lon: -0.13 },
  { id: 'new-york', name: 'New York / NJ', lat: 40.71, lon: -74.01 },
  { id: 'bay-area', name: 'San Francisco Bay Area', lat: 37.39, lon: -122.08 },
  { id: 'seattle', name: 'Seattle', lat: 47.61, lon: -122.33 },
  { id: 'sydney', name: 'Sydney', lat: -33.87, lon: 151.21 },
];

export interface Panchanga {
  sunrise: Date;
  samvatsara: string;
  ayana: 'उत्तरायण' | 'दक्षिणायन';
  rtu: string;
  masa: string;
  adhika: boolean;
  paksha: 'शुक्ल' | 'कृष्ण';
  /** 1–30 (16–30 = कृष्ण pakṣa; 15 = पूर्णिमा, 30 = अमावास्या). */
  tithiIndex: number;
  tithi: string;
  vasara: string;
  nakshatra: string;
  yoga: string;
  /** Ready-to-recite saṅkalpa phrase (Devanagari). */
  sankalpa: string;
}

/** Pañcāṅga at local sunrise of the given (local) calendar day. */
export function panchanga(day: Date, city: City): Panchanga {
  const rise = sunrise(day, city.lat, city.lon);
  const jd = julianDay(rise);
  const sun = sunLongitude(jd);
  const moon = moonLongitude(jd);
  const elong = norm(moon - sun);
  const tithiIndex = Math.floor(elong / 12) + 1; // 1..30
  const paksha = tithiIndex <= 15 ? 'शुक्ल' : 'कृष्ण';
  const tInPaksha = ((tithiIndex - 1) % 15) + 1; // 1..15
  const isFull = tithiIndex === 15;
  const isNew = tithiIndex === 30;
  const tithi = isFull ? 'पूर्णिमा' : isNew ? 'अमावास्या' : TITHI[tInPaksha - 1];
  const tithiLoc = isFull ? 'पूर्णिमायां' : isNew ? 'अमावास्यायां' : TITHI_LOC[tInPaksha - 1];

  const sidSun = sidereal(sun, jd);
  const sidMoon = sidereal(moon, jd);
  const nakshatra = NAKSHATRA[Math.floor(sidMoon / (360 / 27))];
  const yoga = YOGA[Math.floor(norm(sidSun + sidMoon) / (360 / 27))];

  // Amānta month: named from the Sun's sidereal rāśi at the new moon that began it.
  const nm = previousNewMoon(jd);
  const nextNm = previousNewMoon(nm + 35);
  const rasiAt = (t: number) => Math.floor(sidereal(sunLongitude(t), t) / 30); // 0 = Meṣa
  const r0 = rasiAt(nm);
  const masaIndex = (r0 + 1) % 12; // Mīna (11) → Caitra (0)
  const adhika = rasiAt(nextNm) === r0;
  const masa = MASA[masaIndex];
  const rtuIndex = Math.floor(masaIndex / 2);

  // Uttarāyaṇa from Makara saṅkrānti to Karka saṅkrānti (sidereal rāśis 9..2).
  const sunRasi = Math.floor(sidSun / 30);
  const ayana = sunRasi >= 9 || sunRasi <= 2 ? 'उत्तरायण' : 'दक्षिणायन';

  // Saṃvatsara changes at Caitra śukla pratipadā (Yugādi): find this lunar year's start.
  const yearStart = new Date((nm - 2440587.5) * 86400000 - masaIndex * 29.53 * 86400000);
  const y = yearStart.getUTCFullYear() + (yearStart.getUTCMonth() >= 10 ? 1 : 0);
  const samvatsara = SAMVATSARA[(((y - 1987) % 60) + 60) % 60];

  const vasara = VASARA[day.getDay()];
  const sankalpa =
    `${samvatsara}नामसंवत्सरे ${ayana}े ${RTU_LOC[rtuIndex]} ` +
    `${adhika ? 'अधिक' : ''}${masa}मासे ${paksha}पक्षे ${tithiLoc} शुभतिथौ ` +
    `${vasara}वासरयुक्तायां ${nakshatra}नक्षत्रयुक्तायां ${yoga}योगयुक्तायाम्`;

  return {
    sunrise: rise, samvatsara, ayana, rtu: RTU[rtuIndex], masa, adhika, paksha,
    tithiIndex, tithi, vasara: `${vasara}वासर`, nakshatra, yoga, sankalpa,
  };
}
