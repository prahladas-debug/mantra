/**
 * Pārāyaṇa plans.
 *
 *  - 'readthrough': read a whole work (e.g. all 68 Sundarakāṇḍa sargas, the 18
 *    Gītā chapters) spread evenly over N days.
 *  - 'vow': recite one text every day for N days (e.g. Lalitā Sahasranāma for
 *    40 days), optionally a number of times per day.
 */
export type PlanKind = 'readthrough' | 'vow';

export interface Plan {
  id: string;
  kind: PlanKind;
  title: string;
  /** Mantra ids, in reading order. A vow has exactly one. */
  items: string[];
  days: number;
  /** Local date the plan starts, YYYY-MM-DD. */
  start: string;
  /** Read-through: ids of texts already read. */
  read: string[];
  /** Vow: recitations done per local date (YYYY-MM-DD → count). */
  counts: Record<string, number>;
  /** Vow: recitations to do each day (default 1). */
  perDay: number;
  /** Daily reminder, 'HH:MM' local time, if set. */
  reminder?: string;
  /** Scheduled notification id (native only). */
  notificationId?: string;
}

export function localDate(d = new Date()): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/** 0-based day number of the plan for a given date (may be <0 or ≥ days). */
export function dayIndex(plan: Plan, today = new Date()): number {
  const [y, m, d] = plan.start.split('-').map(Number);
  const start = new Date(y, m - 1, d);
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((t.getTime() - start.getTime()) / 86400000);
}

/** Items scheduled for a given plan day (read-through spreads items evenly). */
export function itemsForDay(plan: Plan, day: number): string[] {
  if (plan.kind === 'vow') return plan.items;
  const n = plan.items.length;
  const from = Math.floor((day * n) / plan.days);
  const to = Math.floor(((day + 1) * n) / plan.days);
  return plan.items.slice(from, to);
}

export interface PlanStatus {
  day: number; // 0-based, clamped to the plan
  finished: boolean;
  /** 0–1 overall progress. */
  progress: number;
  /** Today's items still to read (read-through) or remaining recitations (vow). */
  todayItems: string[];
  todayRemaining: number;
  /** Read-through: items from earlier days not yet read. */
  behind: number;
}

export function planStatus(plan: Plan, today = new Date()): PlanStatus {
  const raw = dayIndex(plan, today);
  const day = Math.max(0, Math.min(plan.days - 1, raw));
  if (plan.kind === 'readthrough') {
    const read = new Set(plan.read);
    const todayItems = raw < plan.days ? itemsForDay(plan, day).filter((id) => !read.has(id)) : [];
    const dueSoFar = plan.items.slice(0, Math.floor(((day + 1) * plan.items.length) / plan.days));
    const behind = dueSoFar.filter((id) => !read.has(id) && !todayItems.includes(id)).length;
    const progress = plan.read.length / plan.items.length;
    return { day, finished: progress >= 1, progress, todayItems, todayRemaining: todayItems.length, behind };
  }
  const done = Object.entries(plan.counts).filter(([, c]) => c >= plan.perDay).length;
  const todayCount = plan.counts[localDate(today)] ?? 0;
  const todayRemaining = Math.max(0, plan.perDay - todayCount);
  return {
    day,
    finished: done >= plan.days,
    progress: Math.min(1, done / plan.days),
    todayItems: todayRemaining > 0 ? plan.items : [],
    todayRemaining,
    behind: 0,
  };
}

export const READTHROUGH_DAYS = [1, 3, 7, 9, 11, 18, 21, 40];
export const VOW_DAYS = [1, 7, 11, 21, 40, 48, 108];
export const VOW_PER_DAY = [1, 3, 5, 11, 108];
