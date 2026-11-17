import { getMantra, getMantraInfo } from '../data';
import type { Mantra, Verse } from '../data/types';

/**
 * Verse of the day: one self-contained verse a day, the same for everyone on a given date.
 * Drawn from the Bhagavad Gita (chapters 2-18; chapter 1 is the battlefield scene) and
 * Madhvacharya's Dvadasha stotra, whose verses each stand on their own and have meanings in
 * every language.
 */
const POOL_TEXTS = [
  ...Array.from({ length: 17 }, (_, i) => `bhagavad-gita-${String(i + 2).padStart(2, '0')}`),
  ...Array.from({ length: 12 }, (_, i) => `dvadasha-stotra-${String(i + 1).padStart(2, '0')}`),
];

interface Ref {
  id: string;
  si: number;
  vi: number;
}

let pool: Ref[] | null = null;

function buildPool(): Ref[] {
  const out: Ref[] = [];
  for (const id of POOL_TEXTS) {
    const m = getMantraInfo(id);
    m?.sections?.forEach((s, si) =>
      s.verses.forEach((v, vi) => {
        // Skip speaker lines ("Arjuna said") and fragments.
        if (v.n === undefined || /उवाच/.test(v.text) || v.text.length < 40) return;
        out.push({ id, si, vi });
      }),
    );
  }
  return out;
}

export interface DailyVerse {
  mantra: Mantra;
  verse: Verse;
  si: number;
  vi: number;
}

/** Local calendar day number (days since 1970-01-01 in the phone's time zone). */
function dayNumber(d: Date): number {
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
}

/** The verse for a date (default today). Walks the pool in a fixed shuffled order. */
export function verseOfDay(date: Date = new Date()): DailyVerse | null {
  pool ??= buildPool();
  if (!pool.length) return null;
  // 7919 is prime and larger than the pool, so consecutive days land far apart and every
  // verse comes round before any repeats.
  const r = pool[(dayNumber(date) * 7919) % pool.length];
  const mantra = getMantra(r.id);
  const verse = mantra?.sections?.[r.si]?.verses[r.vi];
  return mantra && verse ? { mantra, verse, si: r.si, vi: r.vi } : null;
}
