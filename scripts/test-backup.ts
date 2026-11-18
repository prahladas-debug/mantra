/// <reference types="node" />
/**
 * Backup / restore validation and merge (src/lib/backup.ts) and the gentle streak (src/lib/streak.ts).
 * Run: npm test
 */
import assert from 'node:assert/strict';
import { backupFileName, buildBackup, mergeBackup, summarize, validateBackup } from '../src/lib/backup';
import { datesEnding, isLit, shiftDate, streakLength, type LampInput } from '../src/lib/streak';
import type { JapaState } from '../src/lib/japa';
import type { Store } from '../src/lib/settings';

let checks = 0;

const settings = {
  script: 'devanagari', secondaryScript: null, fontScale: 1, theme: 'system', alwaysShowMeanings: false, meaningLang: 'auto',
  uiLang: 'auto', contentFor: 'auto', keepAwake: true, variants: {}, city: 'bengaluru', layout: 'book', bookFonts: true, centerVerses: true,
  onboarded: false, festivalReminders: { ekadashi: false, festivals: false, time: '19:00' }, showStreaks: false, japaVibrate: true, autoSpeed: 4, edgeTaps: true, volumeKeys: false,
} as Store['settings'];
const defaults: Store = { settings, favorites: [], recent: [], plans: [], positions: {}, bookmarks: [], routine: [], routineDone: {}, finished: {}, readDays: [] };
const japa0: JapaState = { version: 1, current: 'om-namo-narayanaya', target: 108, counts: {}, totals: {}, days: {}, customLabels: [] };

const mine: Store = {
  settings: { ...settings, script: 'kannada', city: 'udupi', contentFor: 'north', theme: 'dark', secondaryScript: 'iast', onboarded: true, showStreaks: true, festivalReminders: { ekadashi: true, festivals: false, time: '20:00' } },
  favorites: ['gayatri-mantra', 'vishnu-sahasranama'],
  recent: [{ id: 'gayatri-mantra', at: 5 }],
  plans: [
    { id: 'p1', kind: 'vow', title: 'Lalitha', items: ['lalita-sahasranama'], days: 40, start: '2026-11-01', read: [], counts: { '2026-11-02': 3 }, perDay: 1, reminder: '06:00', notificationId: 'abc' },
  ],
  positions: { 'gayatri-mantra': 'v1-2' },
  bookmarks: [{ id: 'b1', mantraId: 'gayatri-mantra', key: 'v1-2', at: 7 }, { id: 'b2', mantraId: 'vishnu-sahasranama', key: 'v2-3', at: 8, color: 'blue', note: 'learn by Ekadashi' }],
  routine: ['gayatri-mantra', 'vishnu-sahasranama'],
  routineDone: { '2026-11-16': ['gayatri-mantra'] },
  finished: { 'gayatri-mantra': 9 },
  readDays: ['2026-11-15', '2026-11-16'],
};
const mineJapa: JapaState = { ...japa0, current: 'custom:Om', totals: { 'custom:Om': 216 }, days: { '2026-11-16': { 'custom:Om': 108 }, '2026-11-15': { 'custom:Om': 108 } }, customLabels: ['Om'] };

// ---- round trip ----
{
  const file = JSON.stringify(buildBackup(mine, mineJapa, new Date('2026-11-17T08:00:00Z')));
  const v = validateBackup(file);
  assert.ok(v.ok);
  if (v.ok) {
    assert.equal(v.backup.createdAt, '2026-11-17T08:00:00.000Z');
    assert.deepEqual(v.backup.japa, mineJapa);
    assert.deepEqual(v.backup.store.favorites, mine.favorites);
    assert.deepEqual(v.backup.store.bookmarks, mine.bookmarks);
    // A reminder is a notification scheduled on the old phone: not carried over.
    assert.equal(v.backup.store.plans[0].reminder, undefined);
    assert.equal(v.backup.store.plans[0].notificationId, undefined);
    const merged = mergeBackup(defaults, v.backup);
    assert.equal(merged.settings.script, 'kannada');
    assert.equal(merged.settings.city, 'udupi');
    assert.equal(merged.settings.secondaryScript, 'iast');
    assert.equal(merged.settings.contentFor, 'north');
    assert.deepEqual(merged.settings.festivalReminders, { ekadashi: true, festivals: false, time: '20:00' });
    assert.equal(merged.settings.onboarded, true);
    assert.deepEqual(merged.routineDone, mine.routineDone);
    assert.deepEqual(merged.positions, mine.positions);
    assert.deepEqual(summarize(merged, v.backup.japa), { favorites: 2, bookmarks: 2, plans: 1, routine: 2, positions: 1, japaDays: 2, japaBeads: 216 });
    checks += 15;
  }
  assert.equal(backupFileName(new Date('2026-11-17T08:00:00Z')), 'nandadeepa-backup-2026-11-17.json');
  checks += 2;
}

// ---- rejected files ----
const errOf = (x: unknown) => { const v = validateBackup(x); return v.ok ? 'ok' : v.error; };
assert.equal(errOf('not json {'), 'unreadable');
assert.equal(errOf('[1,2]'), 'unreadable');
assert.equal(errOf('42'), 'unreadable');
assert.equal(errOf({ hello: 1 }), 'foreign');
assert.equal(errOf({ app: 'other', version: 1 }), 'foreign');
assert.equal(errOf({ app: 'nandadeepa' }), 'malformed');
assert.equal(errOf({ app: 'nandadeepa', version: '1', store: {} }), 'malformed');
assert.equal(errOf({ app: 'nandadeepa', version: 99, store: {} }), 'newer');
assert.equal(errOf({ app: 'nandadeepa', version: 1 }), 'malformed');
assert.equal(errOf({ app: 'nandadeepa', version: 1, store: { favorites: [] } }), 'malformed');
assert.equal(errOf({ app: 'nandadeepa', version: 1, store: { settings: {} }, japa: 'x' }), 'malformed');
assert.equal(errOf('﻿' + JSON.stringify(buildBackup(mine, mineJapa))), 'ok'); // a byte-order mark is tolerated
checks += 12;

// ---- damaged parts are dropped or defaulted, never trusted ----
{
  const v = validateBackup({
    app: 'nandadeepa', version: 1, createdAt: 5,
    store: {
      settings: { script: 12, city: 'udupi', contentFor: 'mars', theme: 'night', bogus: true, fontScale: 'big', festivalReminders: 'x', secondaryScript: 'iast' },
      favorites: ['a', 3, 'a', null, 'b'],
      recent: [{ id: 'x', at: 1 }, { id: 4 }, 'y'],
      plans: [
        { id: 'bad' },
        { id: 'p', kind: 'vow', title: 't', items: ['m'], days: 5, start: '2026-01-02', counts: { '2026-01-02': 'x', '2026-01-03': 2 } },
        { id: 'q', kind: 'vow', title: 't', items: [], days: 5, start: '2026-01-02' },
      ],
      positions: { a: 'v1', b: 3 },
      bookmarks: [{ id: '1', mantraId: 'm', key: 'k' }, { id: 2 }],
      routine: ['a', 'a', 'b', 7],
      routineDone: { '2026-01-01': ['a', 1], oops: ['a'] },
    },
    japa: { current: '', target: 'x', counts: { a: 5, b: -1, c: 'z' }, totals: { a: 5 }, days: { '2026-01-01': { a: 5, b: 0 }, nope: { a: 1 } }, customLabels: ['x', 2] },
  });
  assert.ok(v.ok);
  if (v.ok) {
    const b = v.backup;
    assert.equal(b.createdAt, '');
    assert.deepEqual(b.store.favorites, ['a', 'b']);
    assert.deepEqual(b.store.recent, [{ id: 'x', at: 1 }]);
    assert.equal(b.store.plans.length, 1);
    assert.deepEqual(b.store.plans[0].counts, { '2026-01-03': 2 });
    assert.equal(b.store.plans[0].perDay, 1);
    assert.deepEqual(b.store.positions, { a: 'v1' });
    assert.equal(b.store.bookmarks.length, 1);
    assert.deepEqual(b.store.routine, ['a', 'b']);
    assert.deepEqual(b.store.routineDone, { '2026-01-01': ['a'] });
    assert.equal(b.japa.current, 'om-namo-narayanaya');
    assert.equal(b.japa.target, 108);
    assert.deepEqual(b.japa.counts, { a: 5 });
    assert.deepEqual(b.japa.days, { '2026-01-01': { a: 5 } });
    assert.deepEqual(b.japa.customLabels, ['x']);
    const m = mergeBackup(defaults, b);
    assert.equal(m.settings.script, 'devanagari'); // wrong type: kept as it was
    assert.equal(m.settings.fontScale, 1);
    assert.deepEqual(m.settings.festivalReminders, defaults.settings.festivalReminders);
    assert.equal(m.settings.city, 'udupi');
    assert.equal(m.settings.theme, 'night');
    assert.equal(m.settings.secondaryScript, 'iast');
    assert.equal(m.settings.contentFor, 'auto'); // not one of the choices: the default
    assert.equal(m.settings.keepAwake, true); // missing from an older backup: the default
    assert.ok(!('bogus' in m.settings));
    checks += 25;
  }
}

// ---- an open-ended japa target survives ----
{
  const v = validateBackup(JSON.stringify(buildBackup(mine, { ...mineJapa, target: null })));
  assert.ok(v.ok && v.backup.japa.target === null);
  checks++;
}

// ---- dates ----
assert.equal(shiftDate('2026-03-01', -1), '2026-02-28');
assert.equal(shiftDate('2026-12-31', 1), '2027-01-01');
assert.deepEqual(datesEnding('2026-11-17', 3), ['2026-11-15', '2026-11-16', '2026-11-17']);
checks += 3;

// ---- lamps ----
{
  const i: LampInput = { routine: ['a', 'b'], routineDone: { d1: ['a', 'b'], d2: ['a'], d3: ['b', 'a', 'z'] }, japaByDate: { d4: 108, d5: 107, d6: 1008 }, japaTarget: 108 };
  assert.ok(isLit(i, 'd1'), 'full routine lights');
  assert.ok(!isLit(i, 'd2'), 'part of the routine does not');
  assert.ok(isLit(i, 'd3'), 'order and extras do not matter');
  assert.ok(isLit(i, 'd4'), 'target met');
  assert.ok(!isLit(i, 'd5'), 'target not met');
  assert.ok(isLit(i, 'd6'), 'more than the target');
  assert.ok(!isLit({ ...i, routine: [], routineDone: { d1: [] } }, 'd1'), 'an empty routine is never complete');
  assert.ok(isLit({ ...i, japaTarget: null }, 'd4') && !isLit({ ...i, japaTarget: null }, 'd5'), 'open target: one mala');
  assert.ok(isLit({ ...i, japaTarget: 1008 }, 'd6') && !isLit({ ...i, japaTarget: 1008 }, 'd4'), 'larger target');
  checks += 9;
}

// ---- the forgiving streak (oldest first, last = today) ----
{
  const s = (str: string) => streakLength([...str].map((c) => c === 'x'));
  assert.equal(s(''), 0);
  assert.equal(s('.......'), 0);
  assert.equal(s('xxxxxxx'), 7);
  assert.equal(s('xxxxxx.'), 6, 'today not yet lit is not a miss');
  assert.equal(s('xx.xxxx'), 6, 'one miss in seven is forgiven (and not counted)');
  assert.equal(s('xxxx.xx'), 6);
  assert.equal(s('xxx.xx.'), 5, 'a forgiven miss, and today unlit');
  assert.equal(s('x.xx.xx'), 4, 'two misses within seven days end it');
  assert.equal(s('xxxxxxx.xxxxxx.'), 13, 'misses a week apart are both forgiven');
  assert.equal(s('x..xxxxx'), 5, 'two missed days in a row end it');
  assert.equal(s('.x'), 1);
  assert.equal(s('..x'), 1);
  assert.equal(s('x.x'), 2);
  checks += 13;
}

console.log(`backup + streak: ${checks} checks passed`);
