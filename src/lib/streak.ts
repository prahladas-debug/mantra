/**
 * Gentle streaks for My practice. A day is "lit" when the day's routine was finished or the
 * japa target was met. The streak forgives: one unlit day in any seven does not end it.
 * Pure (no React), so the tests can run it.
 */
/** Beads that count as a day's japa when the target is open-ended: one mala. */
export const OPEN_TARGET_BEADS = 108;

/** `YYYY-MM-DD` shifted by whole days (calendar arithmetic, no time zones). */
export function shiftDate(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().slice(0, 10);
}

/** The `n` dates ending at `today`, oldest first. */
export function datesEnding(today: string, n: number): string[] {
  return Array.from({ length: n }, (_, i) => shiftDate(today, i - (n - 1)));
}

export interface LampInput {
  routine: string[];
  routineDone: Record<string, string[]>;
  /** Total beads counted per date (all chants). */
  japaByDate: Record<string, number>;
  /** The japa target in beads, or null for open-ended. */
  japaTarget: number | null;
}

/** Was the whole routine ticked off on this day? (No routine: never.) */
export function routineComplete(i: LampInput, date: string): boolean {
  if (!i.routine.length) return false;
  const done = i.routineDone[date] ?? [];
  return i.routine.every((id) => done.includes(id));
}

export function japaMet(i: LampInput, date: string): boolean {
  const beads = i.japaByDate[date] ?? 0;
  return beads > 0 && beads >= (i.japaTarget ?? OPEN_TARGET_BEADS);
}

export const isLit = (i: LampInput, date: string) => routineComplete(i, date) || japaMet(i, date);

/**
 * Length of the streak ending today, from `lit` (oldest first, last = today).
 * Today does not count against you while it is still unlit; any other unlit day is forgiven if
 * no other unlit day lies within the seven days before it.
 */
export function streakLength(lit: boolean[]): number {
  const n = lit.length;
  let count = 0;
  let lastMiss = -Infinity; // position, counted from today (0), of the nearest forgiven day
  for (let back = lit[n - 1] ? 0 : 1; back < n; back++) {
    if (lit[n - 1 - back]) {
      count++;
    } else if (back - lastMiss >= 7) {
      lastMiss = back;
    } else {
      break;
    }
  }
  return count;
}
