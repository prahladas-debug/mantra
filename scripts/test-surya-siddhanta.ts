/// <reference types="node" />
/**
 * Sūrya Siddhānta (SS) method: checks against printed maṭha pañcāṅgas. Run: npm test
 *
 * Sources (all SS; values read from the PDFs with pdftotext, times as printed):
 * - SRS: Śrī Rāghavendra Svāmī Maṭha, Mantrālaya, "Sūryasiddhānta pañcāṅga", Parābhava
 *   2026–27 (Kannada), srsmatha.org/downloads/parabhava_kannada.pdf. Daily table: sunrise
 *   (IST) and tithi / nakṣatra / yoga ends in ghaṭī:pala after sunrise; the saṅkrānti table;
 *   "sarveṣām ekādaśī" days. It prints the SS sunrise itself, so its times are the plain SS
 *   instants — the cleanest reference.
 * - UTTARADI_KN: Śrī Uttarādi Maṭha Kannada pañcāṅga, Viśvāvasu 2025–26
 *   (hindupad.com/wp-content/uploads/kannada-panchanga-2025-2026-uttaradhi-math.pdf).
 *   Calendar grid, IST, 12-hour clock. Its printed sunrise is the modern (visible) one for
 *   16.83° N 75.71° E (fits to 0.3 min rms), but its end times are the SS ghaṭīs counted from
 *   the SS sunrise and added to that printed sunrise; so the printed time ≈ SS instant −
 *   (SS sunrise − modern sunrise) of that day, which this test applies (±15 min over the year:
 *   the SS has no udayāntara and no refraction).
 * - LON / DUBAI / LA: Uttarādi Maṭha "Panchangam in English" for London and Dubai 2026–27
 *   (dvaitavedanta.com) and Los Angeles 2025–26 (hindupad.com), by S. Narasimha Rao
 *   ("Soorya Siddhantha, Thanjavur Panchangam"). Local clock time. These editions
 *   extrapolate each day's positions linearly from about Indian noon, which moves end
 *   times by up to ~±10 min from the true SS instant (late in the day most); the LA edition
 *   is in addition ~14.5 min late throughout (London and Dubai are not), so LA is checked
 *   with that offset.
 */
import assert from 'node:assert/strict';
import { ekadashisBetween, festivalsBetween } from '../src/lib/festivals';
import { cityInstant, planFestivalReminders } from '../src/lib/festivalReminderPlan';
import {
  addDays, cityById, crossing, elongation, getCalcMethod, julianDay, panchanga, setCalcMethod, siderealMoon, siderealSun,
  sunriseJd, withMethod, type City,
} from '../src/lib/panchanga';
import { sauraDay } from '../src/lib/sauramana';
import { KALI_EPOCH_JD, ssAyanamsa, ssMean } from '../src/lib/suryaSiddhanta';

process.env.TZ = 'Asia/Kolkata';
let checks = 0;
const MIN = 1 / 1440;
const norm = (x: number) => ((x % 360) + 360) % 360;
const n180 = (x: number) => ((norm(x) + 180) % 360) - 180;
const stats: Record<string, number[]> = {};
const note = (k: string, v: number) => (stats[k] ??= []).push(v);

type Kind = 't' | 'n' | 'y';
const angle = (k: Kind) => (k === 't' ? elongation : k === 'n' ? siderealMoon : (j: number) => norm(siderealSun(j) + siderealMoon(j)));
/** The SS boundary crossing (of tithi / nakṣatra / yoga) nearest to jd. */
function nearestEnd(k: Kind, jd: number): number {
  const f = angle(k);
  const w = k === 't' ? 12 : 360 / 27;
  const target = norm(Math.round(f(jd) / w) * w);
  let t = jd;
  for (let i = 0; i < 20; i++) {
    const d = n180(target - f(t));
    if (Math.abs(d) < 1e-7) break;
    t += d / (n180(f(t + 0.01) - f(t - 0.01)) / 0.02);
  }
  return t;
}
const istJd = (iso: string) => julianDay(new Date(`${iso}:00+05:30`));
function within(label: string, diffMin: number, tol: number, statKey?: string) {
  assert.ok(Math.abs(diffMin) <= tol, `${label}: ${diffMin.toFixed(1)} min (tolerance ${tol})`);
  if (statKey) note(statKey, diffMin);
  checks++;
}

setCalcMethod('surya');

// ---- 1. the model ----
{
  // Kali epoch: mean Sun and Moon at Meṣa 0°, Moon's apogee at 90°.
  const m = ssMean(KALI_EPOCH_JD);
  assert.ok(Math.abs(n180(m.sun)) < 1e-9 && Math.abs(n180(m.moon)) < 1e-9 && Math.abs(m.moonApogee - 90) < 1e-9);
  // SS ayanāṃśa as printed in the Uttarādi (LA) pañcāṅga: 22°53′24″ (30 Mar–12 Apr 2025)
  // and 22°53′26″ (13–27 Apr 2025); London edition: 22°54′18″ / 20″ (Mar–Apr 2026).
  const dms = (d: number, m: number, s: number) => d + m / 60 + s / 3600;
  for (const [d, want, tol] of [['2025-04-06', dms(22, 53, 24), 3], ['2025-04-20', dms(22, 53, 26), 3], ['2026-03-25', dms(22, 54, 18), 6]] as const) {
    const diff = (ssAyanamsa(istJd(`${d}T12:00`)) - want) * 3600;
    assert.ok(Math.abs(diff) <= tol, `SS ayanāṃśa ${d}: ${diff.toFixed(1)}″`);
    checks++;
  }
  checks++;
}

// ---- 2. Mantrālaya SRS pañcāṅga 2026–27: SS sunrise and end times ----
// [date, sunrise IST, tithi, nakṣatra, yoga ends in ghaṭī:pala after sunrise] (every 8th day)
const SRS: [string, string, string, string, string][] = [
  ['2026-03-20', '06:30', '54:11', '54:09', '43:23'], ['2026-03-29', '06:26', '6:19', '23:11', '32:23'], ['2026-04-06', '06:22', '13:48', '46:16', '18:33'],
  ['2026-04-15', '06:18', '35:29', '17:41', '13:21'], ['2026-04-27', '06:12', '34:28', '41:58', '42:51'], ['2026-05-07', '06:08', '1:29', '23:43', '42:38'],
  ['2026-05-16', '06:04', '50:09', '29:19', '11:05'], ['2026-05-25', '06:00', '5:42', '1:53', '4:12'], ['2026-06-04', '05:57', '35:38', '47:39', '3:33'],
  ['2026-06-13', '05:54', '20:23', '46:18', '26:50'], ['2026-06-22', '05:53', '34:01', '22:04', '23:07'], ['2026-07-01', '05:52', '0:24', '0:41', '25:21'],
  ['2026-07-11', '05:51', '43:39', '6:47', '42:52'], ['2026-07-21', '05:52', '2:33', '45:11', '41:02'], ['2026-07-30', '05:53', '35:43', '29:12', '47:27'],
  ['2026-08-07', '05:55', '18:42', '26:59', '13:06'], ['2026-08-17', '05:57', '31:37', '1:30', '4:22'], ['2026-08-26', '06:00', '1:56', '47:22', '8:02'],
  ['2026-09-05', '06:03', '37:07', '38:59', '19:42'], ['2026-09-14', '06:07', '2:13', '22:11', '21:56'], ['2026-09-23', '06:11', '36:21', '5:20', '26:41'],
  ['2026-10-03', '06:15', '9:15', '54:45', '31:43'], ['2026-10-13', '06:20', '38:46', '47:35', '37:10'], ['2026-10-23', '06:24', '13:05', '32:56', '38:28'],
  ['2026-11-02', '06:29', '26:04', '6:36', '26:35'], ['2026-11-13', '06:35', '27:43', '22:30', '54:56'], ['2026-11-21', '06:38', '47:08', '52:29', '46:02'],
  ['2026-12-01', '06:42', '53:23', '19:57', '28:39'], ['2026-12-10', '06:45', '0:13', '40:02', '6:19'], ['2026-12-20', '06:47', '22:05', '10:44', '49:46'],
  ['2026-12-31', '06:49', '26:14', '35:38', '26:55'], ['2027-01-10', '06:49', '59:33', '16:48', '22:52'], ['2027-01-20', '06:48', '41:26', '19:09', '36:26'],
  ['2027-01-29', '06:47', '4:14', '57:28', '34:02'], ['2027-02-07', '06:44', '38:33', '40:31', '36:11'], ['2027-02-15', '06:42', '30:16', '43:26', '7:12'],
  ['2027-02-26', '06:38', '42:43', '16:45', '46:38'], ['2027-03-08', '06:35', '19:12', '3:52', '49:49'], ['2027-03-18', '06:31', '43:49', '48:20', '47:02'],
  ['2027-03-26', '06:27', '18:49', '38:41', '3:16'], ['2027-04-04', '06:23', '54:32', '22:50', '7:33'],
];
const mantralayam = cityById('mantralayam');
for (const [date, sr, ...gh] of SRS) {
  const rise = istJd(`${date}T${sr}`);
  within(`SRS sunrise ${date}`, (sunriseJd(mantralayam, date) - rise) / MIN, 1.5, 'SRS sunrise');
  (['t', 'n', 'y'] as Kind[]).forEach((k, i) => {
    const [g, p] = gh[i].split(':').map(Number);
    const at = rise + (g + p / 60) * 24 * MIN;
    within(`SRS ${k} ${date} +${gh[i]}`, (nearestEnd(k, at) - at) / MIN, 6, `SRS ${k}`);
  });
}

// Audit (Nov 2026): ten more days of the same table, read independently (none of the rows above).
const SRS_AUDIT: [string, string, string, string, string][] = [
  ['2026-06-05', '05:57', '38:33', '51:58', '3:56'], ['2026-06-11', '05:55', '30:43', '53:08', '40:32'], ['2026-07-31', '05:53', '37:37', '32:53', '46:24'],
  ['2026-08-04', '05:54', '32:48', '35:24', '32:14'], ['2026-09-28', '06:13', '34:33', '14:11', '12:59'], ['2026-10-07', '06:17', '42:14', '40:58', '2:17'],
  ['2026-11-28', '06:41', '13:38', '30:22', '50:08'], ['2026-12-05', '06:43', '47:11', '17:33', '9:34'], ['2027-01-26', '06:47', '9:59', '55:45', '46:09'],
  ['2027-03-12', '06:33', '18:45', '10:29', '36:23'],
];
for (const [date, sr, ...gh] of SRS_AUDIT) {
  const rise = istJd(`${date}T${sr}`);
  within(`SRS (audit) sunrise ${date}`, (sunriseJd(mantralayam, date) - rise) / MIN, 1.5, 'SRS audit sunrise');
  (['t', 'n', 'y'] as Kind[]).forEach((k, i) => {
    const [g, p] = gh[i].split(':').map(Number);
    const at = rise + (g + p / 60) * 24 * MIN;
    within(`SRS (audit) ${k} ${date} +${gh[i]}`, (nearestEnd(k, at) - at) / MIN, 3, 'SRS audit t/n/y');
  });
}

// ---- 2b. SRS festival list 2026–27 ("Parābhava saṃvatsara habbagaḷu", p. 14), Mādhva rule ----
// Includes Varamahālakṣmī on Śrāvaṇa pūrṇimā (a Friday), Durgāṣṭamī 19 Oct (18 Oct has
// saptamī at aruṇodaya), Madhva Jayantī 21 Oct (daśamī at sunrise; Vijayadaśamī 20 Oct).
{
  const SRS_FEST: [string, string][] = [
    ['yugadi', '2026-03-19'], ['rama-navami', '2026-03-27'], ['akshaya-tritiya', '2026-04-20'], ['narasimha-jayanti', '2026-04-30'],
    ['naga-panchami', '2026-08-17'], ['upakarma', '2026-08-28'], ['varamahalakshmi', '2026-08-28'], ['raghavendra-aradhana', '2026-08-30'],
    ['krishna-janmashtami', '2026-09-04'], ['svarna-gauri', '2026-09-14'], ['ganesha-chaturthi', '2026-09-14'], ['ananta-chaturdashi', '2026-09-25'],
    ['navaratri', '2026-10-11'], ['durgashtami', '2026-10-19'], ['mahanavami', '2026-10-20'], ['vijayadashami', '2026-10-20'],
    ['madhva-jayanti', '2026-10-21'], ['naraka-chaturdashi', '2026-11-08'], ['deepavali', '2026-11-08'], ['bali-pratipada', '2026-11-10'], ['uttana-dvadashi', '2026-11-21'],
    ['hanumad-vrata', '2026-12-22'], ['makara-sankranti', '2027-01-15'], ['ratha-saptami', '2027-02-13'], ['madhva-navami', '2027-02-15'],
    ['maha-shivaratri', '2027-03-06'], ['holika', '2027-03-21'],
  ];
  const fs = festivalsBetween(mantralayam, '2026-03-15', '2027-03-31', 'madhva');
  for (const [key, date] of SRS_FEST) {
    const got = fs.filter((f) => f.key === key).map((f) => f.date);
    assert.ok(got.includes(date), `SRS ${key}: want ${date}, got ${got.join(',') || 'none'}`);
    checks++;
  }
}

// ---- 3. SRS saṅkrāntis 2026–27 (IST; Makara on 14 Jan at 27:09 = 03:09 on the 15th) ----
const SRS_SANKRANTI = [
  '2026-04-14T11:51', '2026-05-15T10:16', '2026-06-15T20:21', '2026-07-17T11:48', '2026-08-17T23:12', '2026-09-17T23:40',
  '2026-10-18T10:16', '2026-11-17T07:43', '2026-12-16T19:30', '2027-01-15T03:09', '2027-02-13T13:53', '2027-03-15T09:35',
];
SRS_SANKRANTI.forEach((s, i) => {
  const want = istJd(s);
  const t = crossing(siderealSun, i * 30, want - 1, 0.9856);
  within(`SRS saṅkrānti ${s}`, (t - want) / MIN, 3, 'SRS saṅkrānti');
});

// ---- 4. Uttarādi Maṭha Kannada pañcāṅga 2025–26 (printed sunrise + SS ghaṭīs) ----
const UTTARADI_KN: [Kind, string][] = [
  ['t', '2025-03-30T14:36'], ['t', '2025-04-04T03:09'], ['n', '2025-04-07T09:53'], ['t', '2025-04-13T04:03'],
  ['n', '2025-04-17T03:03'], ['t', '2025-04-21T13:42'], ['t', '2025-04-25T08:09'], ['t', '2025-04-29T20:22'],
  ['n', '2025-05-03T17:35'], ['t', '2025-05-08T13:26'], ['t', '2025-05-13T22:45'], ['n', '2025-05-17T14:59'],
  ['t', '2025-05-22T20:37'], ['n', '2025-05-26T07:31'], ['t', '2025-05-31T01:11'], ['n', '2025-06-04T03:25'],
  ['t', '2025-06-09T08:38'], ['n', '2025-06-13T22:45'], ['t', '2025-06-18T10:25'], ['n', '2025-06-22T15:48'],
  ['t', '2025-06-27T13:08'], ['n', '2025-07-01T11:13'], ['t', '2025-07-06T20:07'], ['t', '2025-07-12T02:00'],
  ['n', '2025-07-16T06:00'], ['t', '2025-07-20T10:49'], ['t', '2025-07-25T00:42'], ['n', '2025-07-28T18:48'],
  ['n', '2025-08-03T05:47'], ['n', '2025-08-07T13:57'], ['n', '2025-08-12T14:08'], ['n', '2025-08-16T08:22'],
  ['n', '2025-08-21T01:30'], ['t', '2025-08-25T11:25'], ['t', '2025-08-30T19:27'], ['n', '2025-09-03T21:29'],
  ['t', '2025-09-08T22:19'], ['n', '2025-09-12T16:26'], ['n', '2025-09-16T10:24'], ['t', '2025-09-21T23:46'],
  ['n', '2025-09-25T17:21'], ['t', '2025-09-30T13:11'], ['t', '2025-10-05T12:43'], ['t', '2025-10-10T02:45'],
  ['n', '2025-10-13T18:17'], ['t', '2025-10-18T12:53'], ['n', '2025-10-23T00:23'], ['n', '2025-10-27T10:15'],
  ['t', '2025-11-02T02:47'], ['n', '2025-11-05T10:10'], ['n', '2025-11-10T02:13'], ['n', '2025-11-14T00:02'],
  ['t', '2025-11-18T06:33'], ['t', '2025-11-23T16:25'], ['n', '2025-11-27T22:22'], ['t', '2025-12-02T12:12'],
  ['t', '2025-12-07T00:42'], ['t', '2025-12-11T18:32'], ['n', '2025-12-15T12:44'], ['n', '2025-12-21T01:08'],
  ['n', '2025-12-26T06:31'], ['n', '2025-12-30T02:43'], ['t', '2026-01-03T16:14'], ['n', '2026-01-07T15:53'],
  ['t', '2026-01-12T13:45'], ['t', '2026-01-17T23:55'], ['n', '2026-01-21T14:01'], ['t', '2026-01-26T19:00'],
  ['t', '2026-01-30T09:46'], ['t', '2026-02-04T01:54'], ['n', '2026-02-08T03:26'], ['n', '2026-02-12T13:15'],
  ['t', '2026-02-17T17:35'], ['n', '2026-02-21T20:13'], ['n', '2026-02-25T14:08'], ['t', '2026-03-02T17:35'],
  ['n', '2026-03-06T09:14'], ['t', '2026-03-12T02:15'], ['t', '2026-03-16T07:44'],
];
const uttaradiPlace: City = { id: 'uttaradi-kn-ref', name: 'Uttaradi Kannada reference', lat: 16.83, lon: 75.71, tz: 5.5 };
for (const [k, s] of UTTARADI_KN) {
  const at = istJd(s);
  // The pañcāṅga day (from the visible sunrise) holding the printed time, and its shift.
  let day = s.slice(0, 10);
  const drikRise = (d: string) => withMethod('drik', () => sunriseJd(uttaradiPlace, d));
  if (at < drikRise(day)) day = addDays(day, -1);
  const shift = sunriseJd(uttaradiPlace, day) - drikRise(day);
  within(`Uttarādi KN ${k} ${s}`, (nearestEnd(k, at + shift) - shift - at) / MIN, 20, `Uttaradi KN ${k}`);
  note(`Uttaradi KN ${k} (plain SS instant)`, (nearestEnd(k, at) - at) / MIN);
}

// ---- 5. Uttarādi Maṭha English editions (S. Narasimha Rao): London, Dubai 2026–27, LA 2025–26 ----
const LON: [Kind, string][] = [
  ['t', '2026-04-07T09:30'], ['n', '2026-03-28T11:01'], ['n', '2026-04-05T17:52'], ['t', '2026-04-30T15:49'],
  ['n', '2026-05-16T13:17'], ['t', '2026-04-27T15:29'], ['t', '2026-06-12T11:44'], ['t', '2026-05-21T09:45'],
  ['t', '2026-05-31T08:19'], ['n', '2026-06-27T17:59'], ['t', '2026-07-07T04:14'], ['t', '2026-06-28T21:41'],
  ['t', '2026-08-06T10:59'], ['t', '2026-07-29T14:30'], ['n', '2026-08-02T16:00'], ['n', '2026-09-10T10:09'],
  ['n', '2026-08-15T01:33'], ['t', '2026-08-16T14:07'], ['t', '2026-10-09T16:17'], ['n', '2026-09-28T07:22'],
  ['n', '2026-10-03T23:36'], ['t', '2026-10-23T07:23'], ['t', '2026-11-01T13:33'], ['n', '2026-10-11T18:03'],
  ['t', '2026-11-28T06:35'], ['t', '2026-11-19T20:52'], ['t', '2027-01-05T15:08'], ['t', '2027-01-04T13:31'],
  ['t', '2026-12-12T05:42'], ['t', '2027-02-04T10:53'], ['t', '2027-01-09T23:30'], ['t', '2027-01-13T03:33'],
  ['n', '2027-02-26T07:52'], ['n', '2027-02-24T07:08'], ['t', '2027-03-19T16:11'], ['n', '2027-04-03T09:05'],
  ['n', '2027-03-16T23:40'],
];
const DUBAI: [Kind, string][] = [
  ['t', '2026-04-08T14:36'], ['t', '2026-04-11T19:18'], ['t', '2026-04-01T04:47'], ['t', '2026-05-14T06:25'],
  ['n', '2026-04-18T09:33'], ['n', '2026-04-28T21:48'], ['n', '2026-05-24T05:18'], ['n', '2026-05-22T07:04'],
  ['n', '2026-06-08T03:19'], ['n', '2026-06-20T13:22'], ['t', '2026-07-01T04:37'], ['t', '2026-07-05T08:14'],
  ['t', '2026-08-11T23:53'], ['n', '2026-08-09T11:56'], ['t', '2026-08-03T18:44'], ['n', '2026-09-08T15:23'],
  ['t', '2026-08-28T07:22'], ['t', '2026-09-01T05:44'], ['t', '2026-10-07T21:37'], ['n', '2026-09-18T21:10'],
  ['t', '2026-10-09T19:18'], ['n', '2026-10-28T15:30'], ['t', '2026-10-22T09:47'], ['t', '2026-10-13T20:21'],
  ['n', '2026-11-26T20:38'], ['n', '2026-11-30T14:18'], ['t', '2026-11-16T22:11'], ['t', '2027-01-02T15:38'],
  ['n', '2027-01-03T22:00'], ['t', '2026-12-14T13:30'], ['n', '2027-01-24T06:27'], ['t', '2027-01-21T19:31'],
  ['n', '2027-01-18T15:46'], ['t', '2027-02-13T20:49'], ['n', '2027-02-12T01:40'], ['n', '2027-03-13T08:44'],
  ['t', '2027-03-25T12:18'], ['t', '2027-03-22T14:36'],
];
const LA: [Kind, string][] = [
  ['t', '2025-03-30T02:36'], ['t', '2025-04-21T01:53'], ['t', '2025-04-01T19:16'], ['t', '2025-05-26T20:41'],
  ['n', '2025-05-02T05:53'], ['n', '2025-04-29T09:42'], ['n', '2025-06-22T03:40'], ['n', '2025-05-30T13:26'],
  ['n', '2025-06-02T14:14'], ['n', '2025-07-12T19:26'], ['n', '2025-07-08T14:56'], ['n', '2025-08-02T17:24'],
  ['n', '2025-08-15T19:59'], ['t', '2025-08-22T22:30'], ['t', '2025-09-06T12:33'], ['t', '2025-09-08T09:56'],
  ['n', '2025-10-16T03:55'], ['t', '2025-10-19T00:56'], ['t', '2025-09-24T15:47'], ['t', '2025-11-13T14:08'],
  ['t', '2025-10-29T16:19'], ['n', '2025-12-18T06:55'], ['n', '2025-11-23T04:43'], ['n', '2025-12-02T05:22'],
  ['t', '2026-01-08T20:51'], ['n', '2026-01-05T03:03'], ['n', '2026-01-18T22:58'], ['n', '2026-01-31T12:13'],
  ['n', '2026-02-03T10:20'], ['n', '2026-03-18T17:20'], ['n', '2026-02-19T08:28'],
];
for (const [name, cityId, rows, offset, tol] of [['London', 'london', LON, 0, 16], ['Dubai', 'dubai', DUBAI, 0, 16], ['Los Angeles', 'los-angeles', LA, -14.5, 21]] as const) {
  const city = cityById(cityId);
  for (const [k, s] of rows) {
    const at = julianDay(cityInstant(city, s.slice(0, 10), s.slice(11)));
    within(`${name} ${k} ${s}`, (nearestEnd(k, at) - at) / MIN - offset, tol, `${name} ${k}`);
  }
}

// ---- 6. Mādhva ekādaśī days ----
// Printed Mādhva fasting days ("sarveṣām ekādaśī", "Sarvathra" / "Bha. Vai." Ekadashi,
// "bhāgavatānām ekādaśī"). With the 96-min aruṇodaya rule 8 of these 103 are missed (e.g.
// Yoginī 2025 / 2026, Prabodhinī 2025 at Bengaluru); the SS method uses the maṭha window
// (festivals.ts, SS_MADHVA_VEDHA). The Uttarādi deśa-bheda table (Kannada edition p. 6) gives
// the day by district; a few places from it are checked here.
const EK: [string | City, string[]][] = [
  ['mantralayam', ['2026-03-29', '2026-04-13', '2026-04-27', '2026-05-13', '2026-05-27', '2026-06-11', '2026-06-25', '2026-07-11', '2026-07-25',
    '2026-08-09', '2026-08-23', '2026-09-07', '2026-09-22', '2026-10-06', '2026-10-22', '2026-11-05', '2026-11-20', '2026-12-04', '2026-12-20',
    '2027-01-03', '2027-01-19', '2027-02-02', '2027-02-17', '2027-03-04', '2027-03-18', '2027-04-02']],
  ['london', ['2026-03-29', '2026-04-13', '2026-04-27', '2026-05-27', '2026-06-11', '2026-06-25', '2026-07-10', '2026-07-25', '2026-08-09',
    '2026-08-23', '2026-09-07', '2026-09-22', '2026-10-06', '2026-10-22', '2026-11-05', '2026-11-20', '2026-12-04', '2026-12-20', '2027-01-03',
    '2027-02-02', '2027-03-18', '2027-04-02']],
  ['dubai', ['2026-03-29', '2026-04-13', '2026-04-27', '2026-05-13', '2026-05-27', '2026-06-11', '2026-06-25', '2026-07-10', '2026-07-25',
    '2026-08-09', '2026-08-23', '2026-09-07', '2026-09-22', '2026-10-06', '2026-10-22', '2026-11-05', '2026-11-20', '2026-12-04', '2026-12-20',
    '2027-01-03', '2027-01-18', '2027-02-02', '2027-03-18', '2027-04-02']],
  ['los-angeles', ['2025-04-08', '2025-04-23', '2025-05-07', '2025-05-23', '2025-06-06', '2025-06-21', '2025-07-06', '2025-07-20', '2025-08-04',
    '2025-08-19', '2025-10-02', '2025-10-16', '2025-11-15', '2025-11-30', '2025-12-15', '2025-12-30', '2026-01-13', '2026-01-28', '2026-02-12']],
  // Uttarādi Kannada 2025–26 at its own place: Nirjalā (viddhā there: 7 Jun), Kāmikā,
  // Yoginī (22 Jun; Smārtas 21st), Prabodhinī, Utpatti, Vaikuṇṭha.
  [uttaradiPlace, ['2025-06-07', '2025-06-22', '2025-07-21', '2025-11-01', '2025-11-15', '2025-12-30']],
  // Deśa-bheda: Udupi has no vedha on 6 Jun and 1 Nov 2025; Bengaluru has it on 6 Jun and 1 Nov.
  ['udupi', ['2025-06-06', '2025-11-01', '2025-11-15']],
  ['bengaluru', ['2025-06-07', '2025-11-02', '2025-11-15']],
  ['hyderabad', ['2025-11-15']],
];
let ekAll = 0;
for (const [place, printed] of EK) {
  const city = typeof place === 'string' ? cityById(place) : place;
  const ours = new Set(ekadashisBetween(city, addDays(printed[0], -3), addDays(printed[printed.length - 1], 3), 'madhva').map((e) => e.date));
  for (const d of printed) {
    assert.ok(ours.has(d), `${city.id} Mādhva ekādaśī ${d}`);
    ekAll++;
    checks++;
  }
}
// Deśa-bheda places with vedha on 15 Nov 2025 (fast on the 16th): east Telangana, Kolkata.
for (const [lat, lon, name] of [[17.25, 80.15, 'Khammam'], [22.57, 88.36, 'Kolkata']] as const) {
  const c: City = { id: name, name, lat, lon, tz: 5.5 };
  assert.ok(ekadashisBetween(c, '2025-11-14', '2025-11-17', 'madhva').some((e) => e.date === '2025-11-16'), `${name} 16 Nov 2025`);
  checks++;
}

// ---- 7. switching the method ----
{
  const blr = cityById('bengaluru');
  const ss = panchanga('2026-11-14', blr);
  setCalcMethod('drik');
  assert.equal(getCalcMethod(), 'drik');
  const drik = panchanga('2026-11-14', blr);
  // drik reference values (scripts/test-panchanga.ts): pañcamī until 23:23 IST.
  assert.ok(Math.abs(drik.tithiEnd.getTime() - Date.parse('2026-11-14T23:23:00+05:30')) < 3 * 60000);
  assert.notEqual(ss.tithiEnd.getTime(), drik.tithiEnd.getTime());
  assert.notEqual(ss.sunrise.getTime(), drik.sunrise.getTime());
  // The per-call override leaves the module method alone and agrees with the global switch.
  assert.equal(panchanga('2026-11-14', blr, 'surya').tithiEnd.getTime(), ss.tithiEnd.getTime());
  assert.equal(getCalcMethod(), 'drik');
  assert.equal(withMethod('surya', () => getCalcMethod()), 'surya');
  assert.equal(getCalcMethod(), 'drik');
  // Caches keep the methods apart (festivals, solar months).
  const a = JSON.stringify(festivalsBetween(blr, '2026-01-01', '2026-12-31', 'madhva', 'saura'));
  const b = JSON.stringify(festivalsBetween(blr, '2026-01-01', '2026-12-31', 'madhva', 'saura', 'next', 'surya'));
  assert.notEqual(a, b);
  assert.equal(JSON.stringify(festivalsBetween(blr, '2026-01-01', '2026-12-31', 'madhva', 'saura')), a);
  setCalcMethod('surya');
  assert.equal(JSON.stringify(festivalsBetween(blr, '2026-01-01', '2026-12-31', 'madhva', 'saura')), b);
  setCalcMethod('drik');
  // SS Meṣa saṅkrānti 2026 is 11:49 IST (drik 09:38): Bisu (Tuḷu rule) is the 15th either way,
  // but the saṅkrānti moment shown differs.
  assert.notEqual(sauraDay(blr, '2026-04-20').sankranti.getTime(), sauraDay(blr, '2026-04-20', 'next', 'surya').sankranti.getTime());
  // Reminders follow the method they are given.
  const opts = { city: blr, rule: 'madhva' as const, mode: 'chandra' as const, start: 'next' as const, time: '19:00', kinds: { ekadashi: true, festivals: true } };
  const now = new Date('2026-07-01T00:00:00+05:30');
  const pd = planFestivalReminders(opts, now);
  const ps = planFestivalReminders({ ...opts, method: 'surya' }, now);
  assert.ok(pd.length > 0 && ps.length > 0);
  assert.equal(getCalcMethod(), 'drik');
  checks += 14;
}

const summary = Object.entries(stats).map(([k, v]) => {
  const a = v.map(Math.abs).sort((x, y) => x - y);
  return `  ${k.padEnd(36)} n ${String(v.length).padStart(3)}  |Δ| median ${a[a.length >> 1].toFixed(1)}  max ${a[a.length - 1].toFixed(1)} min`;
});
console.log(`Sūrya Siddhānta vs maṭha pañcāṅgas:\n${summary.join('\n')}\n  Mādhva ekādaśī days: ${ekAll}/${ekAll} as printed`);
console.log(`sūrya-siddhānta tests passed (${checks} checks)`);
