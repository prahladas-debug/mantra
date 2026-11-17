/**
 * Janma nakṣatra: the Moon's nakṣatra, pada and rāśi, and the tithi, at a birth instant given
 * as local civil date and time at a place (the city's standard time and daylight saving rule).
 * Uses the same sidereal Moon as the pañcāṅga, so it follows the calculation method.
 */
import {
  NAKSHATRA, RASHI, julianDay, pakshaOf, siderealMoon, tithiAt, tithiName, utcOffsetMinutes, withMethod, type CalcMethod, type City,
} from './panchanga';

export interface BirthStar {
  /** 0 = Aśvinī … 26 = Revatī. */
  nakshatraIndex: number;
  nakshatra: string;
  /** 1–4. */
  pada: number;
  /** 0 = Meṣa … 11 = Mīna. */
  rashiIndex: number;
  rashi: string;
  /** 1–30. */
  tithiIndex: number;
  tithi: string;
  paksha: 'शुक्ल' | 'कृष्ण';
}

/** The instant (ms since epoch) of a local date and time at the city. */
export function birthInstant(city: City, y: number, m: number, d: number, hh: number, mm: number): number {
  const naive = Date.UTC(y, m - 1, d, hh, mm);
  // The offset depends on the instant itself (daylight saving): refine once.
  const guess = naive - city.tz * 3600000;
  return naive - utcOffsetMinutes(city, guess) * 60000;
}

export function birthStar(city: City, y: number, m: number, d: number, hh: number, mm: number, calc?: CalcMethod): BirthStar {
  return withMethod(calc, () => {
    const jd = julianDay(new Date(birthInstant(city, y, m, d, hh, mm)));
    const lon = siderealMoon(jd);
    const nakshatraIndex = Math.min(26, Math.floor(lon / (360 / 27)));
    const pada = Math.min(4, Math.floor((lon % (360 / 27)) / (360 / 108)) + 1);
    const rashiIndex = Math.floor(lon / 30) % 12;
    const tithiIndex = tithiAt(jd);
    return {
      nakshatraIndex, nakshatra: NAKSHATRA[nakshatraIndex], pada,
      rashiIndex, rashi: RASHI[rashiIndex],
      tithiIndex, tithi: tithiName(tithiIndex), paksha: pakshaOf(tithiIndex),
    };
  });
}
