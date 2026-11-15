/// <reference types="node" />
/**
 * Festival / ekādaśī reminder planning (the pure part of src/lib/festivalReminders.ts).
 * Run: npm test
 */
import assert from 'node:assert/strict';
import { festivalsBetween } from '../src/lib/festivals';
import {
  MAJOR_FESTIVAL_KEYS, MAX_REMINDERS, REMINDER_ID_PREFIX, cityInstant, isMajorFestival, parseTime, planFestivalReminders,
  type FestivalReminderOptions,
} from '../src/lib/festivalReminderPlan';
import { CITIES } from '../src/lib/panchanga';

let checks = 0;
const city = (id: string) => CITIES.find((c) => c.id === id)!;
const blr = city('bengaluru');
const ny = city('new-york');
const titleOf = (id: string) => ({ 'vishnu-sahasranama': 'Vishnu Sahasranama', 'ganesha-pancharatnam': 'Ganesha Pancharatnam' } as Record<string, string>)[id];
const opts = (o: Partial<FestivalReminderOptions> = {}): FestivalReminderOptions => ({
  city: blr, rule: 'madhva', mode: 'chandra', start: 'next', time: '19:00', kinds: { ekadashi: true, festivals: true }, ...o,
});
const ist = (s: string) => new Date(`${s}+05:30`);

// ---- time helpers ----
assert.deepEqual(parseTime('19:00'), [19, 0]);
assert.deepEqual(parseTime(' 6:05 '), [6, 5]);
assert.deepEqual(parseTime('25:00'), [19, 0]);
assert.deepEqual(parseTime('evening'), [19, 0]);
assert.equal(cityInstant(blr, '2026-11-19', '19:00').toISOString(), '2026-11-19T13:30:00.000Z');
assert.equal(cityInstant(ny, '2026-07-01', '19:00').toISOString(), '2026-07-01T23:00:00.000Z'); // EDT
assert.equal(cityInstant(ny, '2026-12-01', '19:00').toISOString(), '2026-12-02T00:00:00.000Z'); // EST
assert.equal(cityInstant(ny, '2026-11-01', '19:00').toISOString(), '2026-11-02T00:00:00.000Z'); // DST ended that morning
checks += 8;

// ---- the chosen festivals ----
{
  const keys = new Set(festivalsBetween(blr, '2026-01-01', '2026-12-31', 'madhva', 'saura').map((f) => f.key.replace(/-\d{4}-\d\d-\d\d$/, '')));
  for (const k of MAJOR_FESTIVAL_KEYS) { assert.ok(keys.has(k), `major festival key ${k} exists`); checks++; }
  const fs = festivalsBetween(blr, '2026-01-01', '2026-12-31', 'smarta');
  const major = fs.filter(isMajorFestival).map((f) => f.key);
  assert.ok(major.includes('deepavali') && major.includes('makara-sankranti') && major.some((k) => k.startsWith('vaikuntha-ekadashi-')));
  assert.ok(!major.includes('naga-panchami') && !major.includes('pitru-paksha') && !major.some((k) => k.startsWith('ekadashi-')));
  checks += 2;
}

// ---- Mādhva, 15 Nov 2026 → 14 Jan 2027: four ekādaśīs; Vaikuṇṭha merged into Mokṣadā ----
{
  const plan = planFestivalReminders(opts(), ist('2026-11-15T10:00'), titleOf);
  assert.deepEqual(plan.map((r) => r.date), ['2026-11-21', '2026-12-04', '2026-12-20', '2027-01-03']);
  assert.ok(plan.every((r) => r.id === `${REMINDER_ID_PREFIX}${r.date}` && r.data.kind === 'ekadashi'));
  const [first, , vk] = plan;
  assert.equal(first.at.toISOString(), '2026-11-20T13:30:00.000Z'); // 19:00 IST the evening before
  assert.equal(first.title, 'Ekadashi tomorrow — Prabodhinī (Utthāna) Ekādaśī');
  // Mādhva fast on the mahādvādaśī (21st); pāraṇa on trayodaśī morning (drik "Gauna": 06:21–08:39).
  assert.equal(first.body, 'Parana on Sun 22 Nov 06:21–08:39. Read: Vishnu Sahasranama.');
  assert.deepEqual(first.data, { kind: 'ekadashi', date: '2026-11-21', keys: ['ekadashi-2026-11-21'], textId: 'vishnu-sahasranama', url: '/mantra/vishnu-sahasranama' });
  assert.equal(vk.title, 'Ekadashi tomorrow — Mokṣadā Ekādaśī');
  assert.equal(vk.body, 'Parana on Mon 21 Dec 06:37–08:53. Also Vaikuṇṭha (Mukkoṭi) Ekādaśī. Read: Vishnu Sahasranama.');
  assert.deepEqual(vk.data.keys, ['ekadashi-2026-12-20', 'vaikuntha-ekadashi-2026-12-20']);
  checks += 8;
}

// ---- Smārta: fast on the 20th, pāraṇa in the aparāhṇa (drik: 13:14–15:32) ----
{
  const plan = planFestivalReminders(opts({ rule: 'smarta' }), ist('2026-11-15T10:00'));
  assert.equal(plan[0].date, '2026-11-20');
  assert.equal(plan[0].body, 'Parana on Sat 21 Nov 13:14–15:32.'); // no titleOf → no "Read:"
  checks += 2;
}

// ---- kinds, the past, the window ----
{
  const now = ist('2026-08-01T10:00');
  const both = planFestivalReminders(opts(), now, titleOf);
  const ek = planFestivalReminders(opts({ kinds: { ekadashi: true, festivals: false } }), now, titleOf);
  const fe = planFestivalReminders(opts({ kinds: { ekadashi: false, festivals: true } }), now, titleOf);
  assert.deepEqual(planFestivalReminders(opts({ kinds: { ekadashi: false, festivals: false } }), now), []);
  assert.ok(ek.every((r) => r.data.kind === 'ekadashi') && fe.every((r) => r.data.kind === 'festival'));
  assert.equal(both.length, ek.length + fe.length);
  assert.deepEqual(fe.map((r) => r.data.keys.join('+')), ['varamahalakshmi', 'raghavendra-aradhana', 'krishna-janmashtami', 'ganesha-chaturthi']);
  const g = fe.find((r) => r.data.keys[0] === 'ganesha-chaturthi')!;
  assert.equal(g.title, 'Tomorrow: Gaṇeśa Caturthī');
  assert.equal(g.body, 'Mon 14 Sep. Read: Ganesha Pancharatnam.');
  assert.equal(g.data.url, '/mantra/ganesha-pancharatnam');
  assert.ok(both.every((r) => r.date > '2026-08-01' && r.date <= '2026-09-30'), '60-day window');
  assert.ok(both.every((r, i) => i === 0 || both[i - 1].at < r.at), 'sorted, one per day');
  // Saura mode adds the Udupi Janmāṣṭamī (same day in 2026) to the same notification.
  const saura = planFestivalReminders(opts({ mode: 'saura', kinds: { ekadashi: false, festivals: true } }), now, titleOf);
  const kj = saura.find((r) => r.date === '2026-09-04')!;
  assert.deepEqual(kj.data.keys, ['krishna-janmashtami', 'udupi-krishna-janmashtami']);
  assert.ok(kj.body.startsWith('Fri 4 Sep.'), kj.body);
  // A reminder whose evening has passed is dropped: at 19:30 on the 22nd, the 23rd's is gone.
  const late = planFestivalReminders(opts(), ist('2026-08-22T19:30'), titleOf);
  assert.ok(!late.some((r) => r.date === '2026-08-23') && late.some((r) => r.date === '2026-08-30'));
  const early = planFestivalReminders(opts(), ist('2026-08-22T18:59'), titleOf);
  assert.equal(early[0].date, '2026-08-23');
  checks += 13;
}

// ---- other cities: local evening, local pāraṇa ----
{
  const plan = planFestivalReminders(opts({ city: ny, rule: 'smarta', time: '20:15' }), new Date('2026-11-15T12:00:00Z'));
  const r = plan.find((x) => x.date === '2026-11-20')!;
  assert.equal(r.at.toISOString(), '2026-11-20T01:15:00.000Z'); // 20:15 EST on the 19th
  assert.equal(r.body, 'Parana on Sat 21 Nov 06:50–08:47.'); // drik New York: 06:50–08:47
  assert.ok(planFestivalReminders(opts(), new Date('2026-01-01T00:00:00Z'), undefined, 400).length <= MAX_REMINDERS);
  checks += 3;
}

console.log(`festival reminder tests passed (${checks} checks)`);
