/**
 * Sūrya Siddhānta (SS) true longitudes of the Sun and Moon, for matha-style pañcāṅgas.
 *
 * Model (Sūrya Siddhānta ch. 1–2, Burgess's translation, 1860)
 * - Time: the ahargaṇa (count of civil days) runs from the start of the Kali yuga, mean
 *   midnight at Laṅkā on the meridian of Ujjayinī (75°46′ E), 17/18 February 3102 BCE
 *   (Julian), i.e. JD 588465.5 − 75°46′/360°. We evaluate the mean
 *   motions at the true instant (UT), counting days from that Ujjain midnight. This is the
 *   exact form of the deśāntara (longitude) correction and of the correction for the time
 *   of day (the text's yojana-based deśāntara is the same proportion, longitude difference
 *   / 360° of the day's motion). Days are mean solar days, so no bhujāntara / cara
 *   correction is needed for an instant given in UT.
 * - Mean motions: revolutions in a mahāyuga of 4 320 000 years = 1 577 917 828 civil days:
 *   Sun 4 320 000, Moon 57 753 336, Moon's apogee (mandocca) 488 203; Sun's apogee 387 per
 *   kalpa (1000 mahāyugas). At the Kali epoch the mean Sun and Moon are at 0° (Meṣa), the
 *   Moon's apogee at 90°, the Sun's apogee at 77°7′ (from the 1 955 880 000 years elapsed
 *   since creation).
 * - Manda-phala (equation of centre): sin(eq) = (p / 360°) · sin(mean − mandocca), with the
 *   epicycle p varying between the even- and odd-quadrant values (Sun 14° → 13°40′,
 *   Moon 32° → 31°40′) as p = p_even − (p_even − p_odd)·|sin(kendra)|. The true longitude is
 *   mean − eq. Sines are exact (not the 24-entry R-sine table): the tabular sines change the
 *   equation by under 1′.
 * - No bīja: none is applied, and none is needed — with the plain text values the end times
 *   agree with the Mantrālaya pañcāṅga to a median of about 1 min (so any bīja there would
 *   move the Moon by under ~0.01°, ≈1 min of tithi time); see BIJA below.
 * - Longitudes are nirayaṇa (sidereal) by construction: no ayanāṃśa is applied.
 * - Sunrise / sunset (ssSunEvent): the SS one (centre of the Sun, no refraction, cara from
 *   the SS declination, bhujāntara, no udayāntara). The maṭha pañcāṅgas count the day from
 *   it: the Mantrālaya Śrī Rāghavendra Svāmī Maṭha pañcāṅga prints it (agreement ±0.6 min),
 *   and the Uttarādi Maṭha one counts its ghaṭīs from it (while printing the visible
 *   sunrise). It differs from the visible sunrise by about −8 … +15 min over the year (India).
 *
 * Checked in scripts/test-surya-siddhanta.ts against the Mantrālaya 2026–27 pañcāṅga
 * (sunrise, tithi / nakṣatra / yoga ends: median |Δ| ≈ 1 min, max ≈ 3½ min; the 12 saṅkrāntis
 * within ±2 min), the Uttarādi Maṭha Kannada 2025–26 and English London / Dubai 2026–27 and
 * Los Angeles 2025–26 editions (a few minutes typical, ≤ ~20 min where those editions
 * extrapolate their daily positions; see the test), and their Mādhva ekādaśī days.
 *
 * The Moon's other inequalities (evection, variation …) are not in the SS, so SS tithi and
 * nakṣatra times differ from drik ones by up to several hours (≈ ±6 h), and SS saṅkrāntis
 * fall 2–16 h after the Lahiri ones in the 2020s.
 */

const norm = (x: number) => ((x % 360) + 360) % 360;
const D2R = Math.PI / 180;

/** Civil (sāvana) days in a mahāyuga. */
const CIVIL_DAYS = 1577917828;
/** Revolutions in a mahāyuga. */
const REV_SUN = 4320000;
const REV_MOON = 57753336;
const REV_MOON_APOGEE = 488203;
/** Sun's apogee: revolutions in a kalpa (1000 mahāyugas). */
const REV_SUN_APOGEE_KALPA = 387;
/** Years from creation to the start of the Kali yuga. */
const YEARS_CREATION_TO_KALI = 1955880000;

/**
 * Optional bīja (correction to the revolution numbers per mahāyuga), as some later SS
 * pañcāṅgas apply. Zero: the maṭha pañcāṅgas we compared with need none.
 */
const BIJA = { moon: 0, moonApogee: 0 };

/** Longitude of Ujjayinī (degrees east), the prime meridian of the SS. */
export const UJJAIN_LON = 75 + 46 / 60;
/** Kali-yuga epoch: mean midnight at Ujjain, 17/18 Feb 3102 BCE, as a JD (UT). */
export const KALI_EPOCH_JD = 588465.5 - UJJAIN_LON / 360;

const SUN_RATE = (360 * REV_SUN) / CIVIL_DAYS;
const MOON_RATE = (360 * (REV_MOON + BIJA.moon)) / CIVIL_DAYS;
const MOON_APOGEE_RATE = (360 * (REV_MOON_APOGEE + BIJA.moonApogee)) / CIVIL_DAYS;
const SUN_APOGEE_RATE = (360 * REV_SUN_APOGEE_KALPA) / (CIVIL_DAYS * 1000);
/** Sun's apogee at the Kali epoch (≈77.13°). */
const SUN_APOGEE_0 = norm(360 * ((REV_SUN_APOGEE_KALPA * YEARS_CREATION_TO_KALI) / 4320000000));
/** Moon's apogee at the Kali epoch (exactly 90°: 488 203 × 452.75 revolutions). */
const MOON_APOGEE_0 = 90;

/** Fractional degrees of `rate × days` without losing precision over ~1.9 million days. */
function meanAngle(rate: number, days: number): number {
  // Split days to keep the product's fractional part exact to ~1e-9°.
  const whole = Math.floor(days);
  return norm(norm(rate * whole) + rate * (days - whole));
}

/** Ahargaṇa (days since the Kali epoch, fractional) for a JD in UT. */
export const ahargana = (jdUT: number) => jdUT - KALI_EPOCH_JD;

/** Manda-phala (degrees) for kendra = mean − mandocca and epicycles at even / odd quadrant ends. */
function mandaPhala(kendra: number, pEven: number, pOdd: number): number {
  const s = Math.sin(kendra * D2R);
  const p = pEven - (pEven - pOdd) * Math.abs(s);
  return Math.asin((p / 360) * s) / D2R;
}

/** Mean longitudes (sidereal, degrees) at jd UT: Sun, Moon, their apogees. */
export function ssMean(jdUT: number) {
  const a = ahargana(jdUT);
  return {
    sun: meanAngle(SUN_RATE, a),
    moon: meanAngle(MOON_RATE, a),
    sunApogee: norm(SUN_APOGEE_0 + SUN_APOGEE_RATE * a),
    moonApogee: norm(MOON_APOGEE_0 + meanAngle(MOON_APOGEE_RATE, a)),
  };
}

/** True (sphuṭa) sidereal longitude of the Sun by the SS, degrees; jd in UT. */
export function ssSun(jdUT: number): number {
  const m = ssMean(jdUT);
  return norm(m.sun - mandaPhala(m.sun - m.sunApogee, 14, 13 + 40 / 60));
}

/** True (sphuṭa) sidereal longitude of the Moon by the SS, degrees; jd in UT. */
export function ssMoon(jdUT: number): number {
  const m = ssMean(jdUT);
  return norm(m.moon - mandaPhala(m.moon - m.moonApogee, 32, 31 + 40 / 60));
}

// ---------- sunrise and sunset (SS ch. 2–3) ----------

/** Revolutions of the libration of the equinox (ayana-calana) in a mahāyuga. */
const REV_AYANA = 600;

/**
 * Ayanāṃśa of the SS (3.9–12): the equinox librates ±27°, 600 times in a mahāyuga; the
 * ayanāṃśa is 3/10 of the bhuja (the arc reduced to ±90°) of the libration angle. The sign
 * is taken so that it is positive in the present era (+22°53′ in 2025, as printed in the
 * Uttarādi Maṭha pañcāṅgas). Only used for the Sun's declination at sunrise.
 */
export function ssAyanamsa(jdUT: number): number {
  const phi = norm(meanAngle((360 * REV_AYANA) / CIVIL_DAYS, ahargana(jdUT)) - 180);
  const p = phi > 180 ? phi - 360 : phi;
  const bhuja = p > 90 ? 180 - p : p < -90 ? -180 - p : p;
  return (3 / 10) * bhuja;
}

/** Obliquity of the ecliptic in the SS (2.28): 24°. */
const SS_OBLIQUITY = 24;

/**
 * Sunrise or sunset by the SS, JD (UT), for the civil date whose 0h UT is `jd0h` at
 * latitude/longitude (degrees, east positive). As in the text: the centre of the Sun on the
 * horizon, without refraction; from local mean midnight, ±6 h, the ascensional difference
 * (cara: sin c = tan φ · tan δ, with sin δ = sin 24° · sin(λ + ayanāṃśa)) and the
 * bhujāntara (the Sun's equation of centre, 4 min per degree). The text has no udayāntara
 * (the obliquity part of the equation of time), so this differs from the visible sunrise
 * by up to about ±15 min — but it is the sunrise the maṭha pañcāṅgas count from (the
 * Mantrālaya Śrī Rāghavendra Svāmī Maṭha pañcāṅga prints it to the minute).
 */
export function ssSunEvent(jd0h: number, lat: number, lon: number, kind: 'rise' | 'set'): number {
  const midnight = jd0h - lon / 360;
  const tanLat = Math.tan(lat * D2R);
  let t = midnight + (kind === 'rise' ? 0.25 : 0.75);
  for (let i = 0; i < 4; i++) {
    const m = ssMean(t);
    const sun = ssSun(t);
    const eq = ((m.sun - sun + 540) % 360) - 180; // mean − true
    const sinDec = Math.sin(SS_OBLIQUITY * D2R) * Math.sin((sun + ssAyanamsa(t)) * D2R);
    const tanDec = sinDec / Math.sqrt(1 - sinDec * sinDec);
    const cara = Math.asin(Math.max(-1, Math.min(1, tanLat * tanDec))) / D2R;
    t = midnight + (kind === 'rise' ? 0.25 - cara / 360 : 0.75 + cara / 360) - eq / 360;
  }
  return t;
}
