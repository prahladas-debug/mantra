/**
 * Backup and restore of the reader's own data (pure part; the file and share-sheet part is in
 * backupFile.ts). A backup is one JSON file:
 *
 *   { app: 'nandadeepa', version: 1, createdAt: ISO time, store: { …main store… }, japa: { …japa state… } }
 *
 * `store` is what settings.tsx keeps under 'mantra.store.v1' and `japa` what japa.ts keeps under
 * 'mantra.japa.v1'. Nothing leaves the phone except through the share sheet the reader opens.
 *
 * Only type imports from the app code here, so the tests can run this under plain Node.
 */
import type { JapaState } from './japa';
import type { Plan } from './plans';
import { isContentPref } from './audience';
import { MARK_COLORS, type MarkColor } from './marks';
import type { Bookmark, RecentEntry, Settings, Store } from './settings';

export const BACKUP_APP = 'nandadeepa';
export const BACKUP_VERSION = 1;

export interface Backup {
  app: typeof BACKUP_APP;
  version: number;
  /** ISO time the file was made. */
  createdAt: string;
  store: Store;
  japa: JapaState;
}

export type BackupError =
  /** Not JSON, or not an object. */
  | 'unreadable'
  /** A JSON file, but not one of ours. */
  | 'foreign'
  /** Made by a newer version of the app than this one understands. */
  | 'newer'
  /** Ours, but the data is missing or the wrong shape. */
  | 'malformed';

export type Validated = { ok: true; backup: Backup } | { ok: false; error: BackupError };

/** What is in a backup (or on the phone), for the confirmation before anything is replaced. */
export interface BackupSummary {
  favorites: number;
  bookmarks: number;
  plans: number;
  routine: number;
  /** Texts the reader has a saved place in. */
  positions: number;
  /** Days with any japa counted. */
  japaDays: number;
  /** Beads counted in all, ever. */
  japaBeads: number;
}

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const isStr = (v: unknown): v is string => typeof v === 'string';
const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const strings = (v: unknown): string[] => (Array.isArray(v) ? v.filter(isStr) : []);
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function numRecord(v: unknown, keep: (n: number) => boolean = (n) => n >= 0): Record<string, number> {
  const out: Record<string, number> = {};
  if (isObj(v)) for (const [k, n] of Object.entries(v)) if (isNum(n) && keep(n)) out[k] = n;
  return out;
}

function cleanPlan(v: unknown): Plan | null {
  if (!isObj(v) || !isStr(v.id) || !v.id || !isStr(v.title)) return null;
  if (v.kind !== 'readthrough' && v.kind !== 'vow') return null;
  if (!isNum(v.days) || v.days < 1 || !isStr(v.start) || !DATE.test(v.start)) return null;
  const items = strings(v.items);
  if (!items.length) return null;
  const plan: Plan = {
    id: v.id,
    kind: v.kind,
    title: v.title,
    items,
    days: Math.round(v.days),
    start: v.start,
    read: strings(v.read),
    counts: numRecord(v.counts),
    perDay: isNum(v.perDay) && v.perDay >= 1 ? Math.round(v.perDay) : 1,
  };
  if (Array.isArray(v.weights) && v.weights.length === items.length && v.weights.every(isNum)) plan.weights = v.weights as number[];
  // The daily reminder is not carried over: it is a notification scheduled on the old phone,
  // and the reader switches it on again here (which also asks for permission).
  return plan;
}

/** The japa state from whatever is stored (or nothing): always a complete, well-formed state. */
export function cleanJapa(v: unknown): JapaState {
  const j = isObj(v) ? v : {};
  const days: JapaState['days'] = {};
  if (isObj(j.days)) for (const [d, rec] of Object.entries(j.days)) if (DATE.test(d)) days[d] = numRecord(rec, (n) => n > 0);
  return {
    version: 1,
    current: isStr(j.current) && j.current ? j.current : 'om-namo-narayanaya',
    target: isNum(j.target) && j.target > 0 ? Math.round(j.target) : j.target === null ? null : 108,
    counts: numRecord(j.counts, (n) => n > 0),
    totals: numRecord(j.totals, (n) => n > 0),
    days,
    customLabels: strings(j.customLabels).slice(0, 8),
  };
}

/** The data of a backup from `raw` file text (or an already parsed value), cleaned; or why it is not one. */
export function validateBackup(raw: unknown): Validated {
  let v = raw;
  if (isStr(raw)) {
    try {
      v = JSON.parse(raw.replace(/^﻿/, ''));
    } catch {
      return { ok: false, error: 'unreadable' };
    }
  }
  if (!isObj(v)) return { ok: false, error: 'unreadable' };
  if (v.app !== BACKUP_APP) return { ok: false, error: 'foreign' };
  if (!isNum(v.version) || v.version < 1) return { ok: false, error: 'malformed' };
  if (v.version > BACKUP_VERSION) return { ok: false, error: 'newer' };
  const s = v.store;
  if (!isObj(s) || !isObj(s.settings)) return { ok: false, error: 'malformed' };
  if (v.japa !== undefined && !isObj(v.japa)) return { ok: false, error: 'malformed' };

  const bookmarks: Bookmark[] = Array.isArray(s.bookmarks)
    ? s.bookmarks.flatMap((b): Bookmark[] =>
        isObj(b) && isStr(b.id) && isStr(b.mantraId) && isStr(b.key)
          ? [{
              id: b.id, mantraId: b.mantraId, key: b.key, at: isNum(b.at) ? b.at : 0,
              ...(isStr(b.color) && (MARK_COLORS as readonly string[]).includes(b.color) ? { color: b.color as MarkColor } : {}),
              ...(isStr(b.note) && b.note.trim() ? { note: b.note } : {}),
            }]
          : [],
      )
    : [];
  const recent: RecentEntry[] = Array.isArray(s.recent)
    ? s.recent.flatMap((r): RecentEntry[] => (isObj(r) && isStr(r.id) ? [{ id: r.id, at: isNum(r.at) ? r.at : 0 }] : [])).slice(0, 10)
    : [];
  const positions: Record<string, string> = {};
  if (isObj(s.positions)) for (const [k, p] of Object.entries(s.positions)) if (isStr(p)) positions[k] = p;
  const finished: Record<string, number> = {};
  if (isObj(s.finished)) for (const [k, t] of Object.entries(s.finished)) if (isNum(t)) finished[k] = t;
  const readDays = strings(s.readDays).filter((d) => DATE.test(d)).sort().slice(-60);
  const routineDone: Record<string, string[]> = {};
  if (isObj(s.routineDone)) for (const [d, ids] of Object.entries(s.routineDone)) if (DATE.test(d)) routineDone[d] = strings(ids);

  return {
    ok: true,
    backup: {
      app: BACKUP_APP,
      version: v.version,
      createdAt: isStr(v.createdAt) ? v.createdAt : '',
      store: {
        // Kept as written; mergeBackup keeps only the settings this version knows, with the right type.
        settings: s.settings as unknown as Settings,
        favorites: [...new Set(strings(s.favorites))],
        recent,
        plans: Array.isArray(s.plans) ? s.plans.flatMap((p) => cleanPlan(p) ?? []) : [],
        positions,
        bookmarks,
        routine: [...new Set(strings(s.routine))],
        routineDone,
        finished,
        readDays,
      },
      japa: cleanJapa(v.japa),
    },
  };
}

/** The same kind of value (so a wrong-typed setting cannot break the app), for a setting with this default. */
function sameKind(value: unknown, like: unknown): boolean {
  if (like === null) return value === null || isStr(value);
  if (isObj(like)) return isObj(value);
  return typeof value === typeof like;
}

/**
 * The store after restoring `backup` over `current`: everything the backup holds replaces what is
 * there. Settings keep this version's defaults for anything the backup lacks (an older backup) or
 * has in the wrong form, and the first-run welcome is not shown again.
 */
export function mergeBackup(current: Store, backup: Backup): Store {
  const settings: Record<string, unknown> = { ...current.settings };
  const saved = backup.store.settings as unknown as Record<string, unknown>;
  for (const [k, def] of Object.entries(current.settings)) {
    if (k in saved && sameKind(saved[k], def)) settings[k] = isObj(def) ? { ...def, ...(saved[k] as object) } : saved[k];
  }
  // "Content for" is a fixed set of choices: anything else is the default (Automatic).
  if (!isContentPref(settings.contentFor)) settings.contentFor = current.settings.contentFor;
  return { ...backup.store, settings: { ...(settings as unknown as Settings), onboarded: true } };
}

export function summarize(store: Store, japa: JapaState): BackupSummary {
  return {
    favorites: store.favorites.length,
    bookmarks: store.bookmarks.length,
    plans: store.plans.length,
    routine: store.routine.length,
    positions: Object.keys(store.positions).length,
    japaDays: Object.values(japa.days).filter((d) => Object.values(d).some((n) => n > 0)).length,
    japaBeads: Object.values(japa.totals).reduce((a, b) => a + b, 0),
  };
}

/** The file to write: a snapshot of the app's data at `now`. */
export function buildBackup(store: Store, japa: JapaState, now = new Date()): Backup {
  return { app: BACKUP_APP, version: BACKUP_VERSION, createdAt: now.toISOString(), store, japa };
}

export const backupFileName = (now = new Date()) => `nandadeepa-backup-${now.toISOString().slice(0, 10)}.json`;
