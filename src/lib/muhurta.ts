/**
 * Timings derived from a day's pañcāṅga, as printed in Drik Panchang and Kannada calendars:
 * Caughaḍiyā (8 day + 8 night), Horā (24 planetary hours), Durmuhūrta, Varjyam (tyājya),
 * Amṛta kāla and Brahma muhūrta. Pure functions of a Panchanga (sunrise, sunset, next sunrise,
 * weekday and nakṣatra spans), so they follow the calculation method the day was computed with.
 *
 * Conventions (checked against drikpanchang.com, see scripts/test-panchanga.ts)
 * - Caughaḍiyā: daytime and night are each divided into 8 equal parts. The cycle is
 *   Udvega, Cara, Lābha, Amṛta, Kāla, Śubha, Roga; the day's first part is the weekday lord's
 *   (Sun Udvega, Mon Amṛta, Tue Roga, Wed Lābha, Thu Śubha, Fri Cara, Sat Kāla) and the
 *   night's first part is the fifth from it, then the cycle runs in steps of five
 *   (Tue night: Kāla, Lābha, Udvega, Śubha, Amṛta, Cara, Roga, Kāla). Amṛta, Śubha, Lābha good; Cara neutral;
 *   Udvega, Kāla, Roga bad.
 * - Horā: daytime and night each in 12 equal parts (so hours vary with the season), the
 *   Chaldean order Sun, Venus, Mercury, Moon, Saturn, Jupiter, Mars, starting with the
 *   weekday's lord at sunrise.
 * - Durmuhūrta: 15 equal daytime muhūrtas (sunrise→sunset), 15 night ones. Day muhūrtas
 *   Sun 14; Mon 9, 12; Tue 4 (and night 7); Wed 8; Thu 6, 12; Fri 4, 9; Sat 1, 2.
 * - Varjyam and Amṛta kāla: each nakṣatra has a start offset in ghaṭikās (of its 60) at which
 *   a window of 4/60 of the nakṣatra's actual duration begins. The windows shown for a day
 *   are those that begin between its sunrise and the next sunrise.
 * - Brahma muhūrta: the second-last of the 15 night muhūrtas, ending one muhūrta before sunrise.
 */
import type { Panchanga } from './panchanga';

export type Quality = 'good' | 'neutral' | 'bad';

export interface Segment {
  /** Sanskrit name (Devanagari). */
  name: string;
  start: Date;
  end: Date;
  quality: Quality;
  /** Night part (after sunset). */
  night: boolean;
}

const CHOGHADIYA: [string, Quality][] = [
  ['उद्वेग', 'bad'], ['चर', 'neutral'], ['लाभ', 'good'], ['अमृत', 'good'], ['काल', 'bad'], ['शुभ', 'good'], ['रोग', 'bad'],
];
/** Index into the cycle of the weekday's first day part, Sunday first. */
const CHOGHADIYA_START = [0, 3, 6, 2, 5, 1, 4];

const HORA: [string, Quality][] = [
  ['सूर्य', 'neutral'], ['शुक्र', 'good'], ['बुध', 'good'], ['चन्द्र', 'good'], ['शनि', 'bad'], ['गुरु', 'good'], ['मङ्गल', 'bad'],
];
/** Position of the weekday's lord in the Chaldean order above, Sunday first. */
const HORA_START = [0, 3, 6, 2, 5, 1, 4];

/** 1-based daytime muhūrtas that are durmuhūrta, Sunday first. */
const DURMUHURTA_DAY = [[14], [9, 12], [4], [8], [6, 12], [4, 9], [1, 2]];
/** 1-based night muhūrtas that are durmuhūrta, Sunday first. */
const DURMUHURTA_NIGHT = [[], [], [7], [], [], [], []];

/** Varjyam: start offset in ghaṭikās (0–60) of each nakṣatra, Aśvinī first. */
const VARJYAM = [50, 24, 30, 40, 14, 21, 30, 20, 32, 30, 20, 18, 21, 20, 14, 14, 10, 14, 56, 24, 20, 10, 10, 18, 16, 24, 30];
/** Amṛta kāla: start offset in ghaṭikās of each nakṣatra, Aśvinī first. */
const AMRITA = [42, 48, 54, 52, 38, 35, 54, 44, 56, 54, 44, 42, 45, 44, 38, 38, 34, 38, 44, 48, 44, 34, 34, 42, 40, 48, 54];

const slice = (a: Date, b: Date, parts: number, i: number): [Date, Date] => {
  const len = b.getTime() - a.getTime();
  return [new Date(a.getTime() + (len * i) / parts), new Date(a.getTime() + (len * (i + 1)) / parts)];
};

/** The 16 caughaḍiyā of the pañcāṅga day: 8 by day, then 8 by night. */
export function choghadiya(p: Panchanga): Segment[] {
  const first = CHOGHADIYA_START[p.weekday];
  const out: Segment[] = [];
  for (const night of [false, true]) {
    const [a, b] = night ? [p.sunset, p.nextSunrise] : [p.sunrise, p.sunset];
    for (let i = 0; i < 8; i++) {
      const [name, quality] = CHOGHADIYA[night ? (first + 5 + 5 * i) % 7 : (first + i) % 7];
      const [start, end] = slice(a, b, 8, i);
      out.push({ name, quality, start, end, night });
    }
  }
  return out;
}

/** The 24 horās of the pañcāṅga day: 12 by day, then 12 by night. */
export function hora(p: Panchanga): Segment[] {
  const out: Segment[] = [];
  for (const night of [false, true]) {
    const [a, b] = night ? [p.sunset, p.nextSunrise] : [p.sunrise, p.sunset];
    for (let i = 0; i < 12; i++) {
      const [name, quality] = HORA[(HORA_START[p.weekday] + (night ? 12 : 0) + i) % 7];
      const [start, end] = slice(a, b, 12, i);
      out.push({ name, quality, start, end, night });
    }
  }
  return out;
}

/** Durmuhūrta windows of the day (daytime ones, then the night one on Tuesdays). */
export function durmuhurta(p: Panchanga): [Date, Date][] {
  const out: [Date, Date][] = [];
  for (const n of DURMUHURTA_DAY[p.weekday]) out.push(slice(p.sunrise, p.sunset, 15, n - 1));
  for (const n of DURMUHURTA_NIGHT[p.weekday]) out.push(slice(p.sunset, p.nextSunrise, 15, n - 1));
  return out;
}

/** Brahma muhūrta: the 2nd-last of the 15 night muhūrtas before sunrise. */
export function brahmaMuhurta(p: Panchanga): [Date, Date] {
  const m = (p.nextSunrise.getTime() - p.sunset.getTime()) / 15;
  const rise = p.sunrise.getTime();
  return [new Date(rise - 2 * m), new Date(rise - m)];
}

/** Windows of 4/60 of each nakṣatra's duration at the given ghaṭikā offsets, starting within the day. */
function nakshatraWindows(p: Panchanga, offsets: number[]): [Date, Date][] {
  const out: [Date, Date][] = [];
  for (const n of p.nakshatras) {
    const a = n.start.getTime();
    const len = n.end.getTime() - a;
    const start = a + (len * offsets[n.index]) / 60;
    if (start >= p.sunrise.getTime() && start < p.nextSunrise.getTime()) out.push([new Date(start), new Date(start + (len * 4) / 60)]);
  }
  return out;
}

/** Varjyam (tyājya), the avoided window of each nakṣatra that starts within the day. */
export const varjyam = (p: Panchanga) => nakshatraWindows(p, VARJYAM);
/** Amṛta kāla, the auspicious window of each nakṣatra that starts within the day. */
export const amritaKala = (p: Panchanga) => nakshatraWindows(p, AMRITA);

/** Index of the segment containing the instant, or -1. */
export function segmentAt(segs: Segment[], now: number): number {
  return segs.findIndex((s) => now >= s.start.getTime() && now < s.end.getTime());
}
