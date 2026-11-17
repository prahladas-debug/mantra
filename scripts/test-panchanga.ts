/// <reference types="node" />
/**
 * Pañcāṅga regression tests (Bengaluru). Run: npm test
 *
 * Reference values were read from drikpanchang.com for Bengaluru (geoname 1277333) in
 * November 2026: the day pañcāṅga pages, the 2025/2026 ekādaśī lists, the 2025/2026
 * saṅkrānti lists and the 2025/2026 Hindu-festival calendars. Drik prints HH:MM (seconds
 * dropped), so time checks allow a few minutes; the requirement is ±10 min.
 */
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { LINKED_TEXT_IDS, festivalsBetween, ekadashiDates, ekadashisBetween, paranaFor, paryayaMatha } from '../src/lib/festivals';
import { cityInstant } from '../src/lib/festivalReminderPlan';
import { MATHA_ARADHANAS } from '../src/lib/mathaAradhana';
import { paranaWindow } from '../src/lib/parana';
import { sauraDay, sauraMonthStart, sauraSankalpa } from '../src/lib/sauramana';
import {
  CITIES, MASA, cityById, compoundStem, crossing, elongation, formatTime, julianDay, fromJulian, lunationsBetween, panchanga, siderealSun,
} from '../src/lib/panchanga';

process.env.TZ = 'Asia/Kolkata';
const blr = CITIES.find((c) => c.id === 'bengaluru')!;
let checks = 0;

// ---- 1. sunrise elements on known festival days ----
const at = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return panchanga(new Date(y, m - 1, d, 12), blr);
};
const cases: [string, Partial<ReturnType<typeof at>>][] = [
  ['2024-04-09', { samvatsara: 'क्रोधि', masa: 'चैत्र', paksha: 'शुक्ल', tithi: 'प्रतिपत्' }], // Ugādi
  ['2025-03-14', { masa: 'फाल्गुन', tithi: 'पूर्णिमा' }], // Holi
  ['2025-03-30', { samvatsara: 'विश्वावसु', masa: 'चैत्र', tithi: 'प्रतिपत्' }], // Ugādi
  ['2025-10-21', { masa: 'आश्वयुज', tithi: 'अमावास्या' }], // Dīpāvaḷi
  ['2025-11-05', { masa: 'कार्तिक', tithi: 'पूर्णिमा' }],
  ['2026-01-13', { ayana: 'दक्षिणायन' }],
  ['2026-01-15', { ayana: 'उत्तरायण' }], // after Makara saṅkrānti
  ['2023-07-25', { masa: 'श्रावण', adhika: true }], // adhika Śrāvaṇa 2023
  ['2026-05-27', { masa: 'ज्येष्ठ', adhika: true }], // adhika Jyeṣṭha 2026
  ['2026-11-13', { samvatsara: 'पराभव', masa: 'कार्तिक', tithi: 'चतुर्थी', nakshatra: 'मूल', yoga: 'धृति' }],
];
for (const [date, want] of cases) {
  const got = at(date);
  for (const [k, v] of Object.entries(want)) { assert.equal((got as any)[k], v, `${date} ${k}`); checks++; }
}

// ---- 2. end times and kālas for two full days (drik day-pañcāṅga pages) ----
const addDaysIso = (iso: string, n: number) => new Date(Date.parse(`${iso}T00:00:00Z`) + n * 86400000).toISOString().slice(0, 10);
const mins = (hhmm: string) => { const [h, m] = hhmm.split(/[:,]/).map(Number); return h * 60 + m; };
function near(label: string, got: Date, wantIso: string, tol: number) {
  const want = new Date(`${wantIso}:00+05:30`).getTime();
  const diff = (got.getTime() - want) / 60000;
  assert.ok(Math.abs(diff) <= tol, `${label}: got ${got.toISOString()} want ${wantIso} (${diff.toFixed(1)} min)`);
  checks++;
}
{
  const p = panchanga('2026-11-14', blr);
  const D = '2026-11-14T';
  near('sunrise', p.sunrise, `${D}06:18`, 1.5);
  near('sunset', p.sunset, `${D}17:50`, 1.5);
  assert.equal(p.tithi, 'पञ्चमी'); near('pañcamī ends', p.tithiEnd, `${D}23:23`, 3);
  assert.equal(p.tithis[1].name, 'षष्ठी');
  assert.equal(p.nakshatra, 'पूर्वाषाढा'); near('Pūrvāṣāḍhā ends', p.nakshatraEnd, `${D}20:24`, 3);
  assert.equal(p.nakshatras[1].name, 'उत्तराषाढा');
  assert.equal(p.yoga, 'शूल'); assert.ok(p.yogaEnd > p.nextSunrise, 'Śūla yoga "upto full night"');
  assert.equal(p.karanas[0].name, 'बव'); near('Bava ends', p.karanas[0].end, `${D}10:02`, 3);
  assert.equal(p.karanas[1].name, 'बालव'); near('Bālava ends', p.karanas[1].end, `${D}23:23`, 3);
  assert.equal(p.moonRashi, 'धनुस्'); near('Moon leaves Dhanus', p.moonRashis[0].end, '2026-11-15T03:11', 3);
  assert.equal(p.sunRashi, 'तुला');
  const hm = (t: Date) => formatTime(t, blr);
  assert.deepEqual(p.rahuKala.map(hm), ['09:11', '10:37']);
  assert.deepEqual(p.yamaganda.map(hm), ['13:31', '14:57']);
  assert.deepEqual(p.gulika.map(hm), ['06:18', '07:44']);
  assert.deepEqual(p.abhijit.map(hm), ['11:41', '12:27']);
  checks += 12;
}
{
  const p = panchanga('2025-06-06', blr);
  const D = '2025-06-06T';
  near('sunrise', p.sunrise, `${D}05:53`, 1.5);
  near('sunset', p.sunset, `${D}18:44`, 1.5);
  assert.equal(p.tithi, 'एकादशी'); near('ekādaśī ends', p.tithiEnd, '2025-06-07T04:47', 3);
  assert.equal(p.nakshatra, 'हस्त'); near('Hasta ends', p.nakshatraEnd, `${D}06:34`, 3);
  assert.equal(p.yoga, 'व्यतीपात'); near('Vyatīpāta ends', p.yogaEnd, `${D}10:13`, 3);
  assert.equal(p.karana, 'वणिज'); near('Vaṇija ends', p.karanas[0].end, `${D}15:31`, 3);
  assert.equal(p.karanas[1].name, 'विष्टि');
  assert.equal(p.moonRashi, 'कन्या'); near('Moon leaves Kanyā', p.moonRashis[0].end, `${D}20:06`, 3);
  const hm = (t: Date) => formatTime(t, blr);
  assert.deepEqual(p.rahuKala.map(hm), ['10:42', '12:18']);
  assert.deepEqual(p.yamaganda.map(hm), ['15:31', '17:08']);
  assert.deepEqual(p.gulika.map(hm), ['07:29', '09:05']);
  assert.deepEqual(p.abhijit.map(hm), ['11:53', '12:44']);
  checks += 10;
}

// ---- 3. ekādaśī tithi begin/end times, 2025–2026 (98 instants, drik ekādaśī lists) ----
// [begins, ends, elongation at the start: 120 śukla / 300 kṛṣṇa]
const EK_TIMES: [string, string, number][] = [
  ['2025-01-09 12:22', '2025-01-10 10:19', 120], ['2025-01-24 19:25', '2025-01-25 20:31', 300], ['2025-02-07 21:26', '2025-02-08 20:15', 120], ['2025-02-23 13:55', '2025-02-24 13:44', 300],
  ['2025-03-09 07:45', '2025-03-10 07:44', 120], ['2025-03-25 05:05', '2025-03-26 03:45', 300], ['2025-04-07 20:00', '2025-04-08 21:12', 120], ['2025-04-23 16:43', '2025-04-24 14:32', 300],
  ['2025-05-07 10:19', '2025-05-08 12:29', 120], ['2025-05-23 01:12', '2025-05-23 22:29', 300], ['2025-06-06 02:15', '2025-06-07 04:47', 120], ['2025-06-21 07:18', '2025-06-22 04:27', 300],
  ['2025-07-05 18:58', '2025-07-06 21:14', 120], ['2025-07-20 12:12', '2025-07-21 09:38', 300], ['2025-08-04 11:41', '2025-08-05 13:12', 120], ['2025-08-18 17:22', '2025-08-19 15:32', 300],
  ['2025-09-03 03:53', '2025-09-04 04:21', 120], ['2025-09-17 00:21', '2025-09-17 23:39', 300], ['2025-10-02 19:10', '2025-10-03 18:32', 120], ['2025-10-16 10:35', '2025-10-17 11:12', 300],
  ['2025-11-01 09:11', '2025-11-02 07:31', 120], ['2025-11-15 00:49', '2025-11-16 02:37', 300], ['2025-11-30 21:29', '2025-12-01 19:01', 120], ['2025-12-14 18:49', '2025-12-15 21:19', 300],
  ['2025-12-30 07:50', '2025-12-31 05:00', 120], ['2026-01-13 15:17', '2026-01-14 17:52', 300], ['2026-01-28 16:35', '2026-01-29 13:55', 120], ['2026-02-12 12:22', '2026-02-13 14:25', 300],
  ['2026-02-27 00:33', '2026-02-27 22:32', 120], ['2026-03-14 08:10', '2026-03-15 09:16', 300], ['2026-03-28 08:45', '2026-03-29 07:46', 120], ['2026-04-13 01:16', '2026-04-14 01:08', 300],
  ['2026-04-26 18:06', '2026-04-27 18:15', 120], ['2026-05-12 14:52', '2026-05-13 13:29', 300], ['2026-05-26 05:10', '2026-05-27 06:21', 120], ['2026-06-11 00:57', '2026-06-11 22:36', 300],
  ['2026-06-24 18:12', '2026-06-25 20:09', 120], ['2026-07-10 08:16', '2026-07-11 05:22', 300], ['2026-07-24 09:12', '2026-07-25 11:34', 120], ['2026-08-08 13:59', '2026-08-09 11:04', 300],
  ['2026-08-23 02:00', '2026-08-24 04:18', 120], ['2026-09-06 19:29', '2026-09-07 17:03', 300], ['2026-09-21 20:00', '2026-09-22 21:43', 120], ['2026-10-06 02:07', '2026-10-07 00:34', 300],
  ['2026-10-21 14:11', '2026-10-22 14:47', 120], ['2026-11-04 11:03', '2026-11-05 10:35', 300], ['2026-11-20 07:15', '2026-11-21 06:31', 120], ['2026-12-03 23:03', '2026-12-04 23:44', 300],
  ['2026-12-19 22:09', '2026-12-20 20:14', 120],
];
let worst = 0;
for (const [b, e, a] of EK_TIMES) {
  for (const [s, ang] of [[b, a], [e, a + 12]] as [string, number][]) {
    const want = new Date(`${s.replace(' ', 'T')}:00+05:30`);
    const t = fromJulian(crossing(elongation, ang % 360, julianDay(want) - 0.3, 12.19));
    const diff = (t.getTime() - want.getTime()) / 60000; // drik truncates to the minute: expect 0..+1
    worst = Math.max(worst, Math.abs(diff - 0.5));
    near(`tithi boundary ${ang % 360}° ${s}`, t, s.replace(' ', 'T'), 3);
  }
}

// ---- 4. saṅkrānti moments 2025–2026 (drik saṅkrānti lists, IST) ----
const SANKRANTI: Record<number, string[]> = {
  2025: ['01-14 09:03', '02-12 22:04', '03-14 18:59', '04-14 03:30', '05-15 00:21', '06-15 06:53', '07-16 17:40', '08-17 02:00', '09-17 01:55', '10-17 13:54', '11-16 13:45', '12-16 04:27'],
  2026: ['01-14 15:13', '02-13 04:14', '03-15 01:08', '04-14 09:38', '05-15 06:28', '06-15 12:59', '07-16 23:45', '08-17 08:04', '09-17 07:58', '10-17 19:57', '11-16 19:48', '12-16 10:29'],
};
for (const [y, list] of Object.entries(SANKRANTI)) {
  list.forEach((s, i) => {
    const iso = `${y}-${s.replace(' ', 'T')}`;
    const t = fromJulian(crossing(siderealSun, ((9 + i) % 12) * 30, julianDay(new Date(`${iso}:00+05:30`)) - 1, 0.9856));
    near(`saṅkrānti ${iso}`, t, iso, 3);
  });
}

// ---- 5. ekādaśī dates, both rules (drik "Smartha" and "Vaishnava/Gauna" lists) ----
// [Smārta, Mādhva/Vaiṣṇava, Gauḍīya (only where it differs)]
const EK_DATES: [string, string, string?][] = [
  ['2025-01-10', '2025-01-10'], ['2025-01-25', '2025-01-25'], ['2025-02-08', '2025-02-08'], ['2025-02-24', '2025-02-24'],
  ['2025-03-10', '2025-03-10'], ['2025-03-25', '2025-03-26'], ['2025-04-08', '2025-04-08'], ['2025-04-24', '2025-04-24'],
  ['2025-05-08', '2025-05-08'], ['2025-05-23', '2025-05-23'], ['2025-06-06', '2025-06-06', '2025-06-07'], ['2025-06-21', '2025-06-22'],
  ['2025-07-06', '2025-07-06'], ['2025-07-21', '2025-07-21'], ['2025-08-05', '2025-08-05'], ['2025-08-19', '2025-08-19'],
  ['2025-09-03', '2025-09-03'], ['2025-09-17', '2025-09-17'], ['2025-10-03', '2025-10-03'], ['2025-10-17', '2025-10-17'],
  ['2025-11-01', '2025-11-02'], ['2025-11-15', '2025-11-15'], ['2025-12-01', '2025-12-01'], ['2025-12-15', '2025-12-15'],
  ['2025-12-30', '2025-12-31'],
  ['2026-01-14', '2026-01-14'], ['2026-01-29', '2026-01-29'], ['2026-02-13', '2026-02-13'], ['2026-02-27', '2026-02-27'],
  ['2026-03-15', '2026-03-15'], ['2026-03-29', '2026-03-29'], ['2026-04-13', '2026-04-13'], ['2026-04-27', '2026-04-27'],
  ['2026-05-13', '2026-05-13'], ['2026-05-27', '2026-05-27'], ['2026-06-11', '2026-06-11'], ['2026-06-25', '2026-06-25'],
  ['2026-07-10', '2026-07-11'], ['2026-07-25', '2026-07-25'], ['2026-08-09', '2026-08-09'], ['2026-08-23', '2026-08-23', '2026-08-24'],
  ['2026-09-07', '2026-09-07'], ['2026-09-22', '2026-09-22'], ['2026-10-06', '2026-10-06'], ['2026-10-22', '2026-10-22'],
  ['2026-11-05', '2026-11-05'], ['2026-11-20', '2026-11-21'], ['2026-12-04', '2026-12-04'], ['2026-12-20', '2026-12-20'],
];
{
  const all = lunationsBetween(julianDay(new Date('2024-12-20')), julianDay(new Date('2026-12-25')))
    .flatMap((l) => [ekadashiDates(blr, l, 11), ekadashiDates(blr, l, 26)])
    .filter((e) => e.smarta >= '2025-01-01' && e.smarta <= '2026-12-31');
  assert.equal(all.length, EK_DATES.length, 'number of ekādaśīs 2025–2026');
  all.forEach((e, i) => {
    const [sm, md, gd] = EK_DATES[i];
    assert.equal(e.smarta, sm, `Smārta ${e.en} ${sm}`);
    assert.equal(e.madhva, md, `Mādhva ${e.en} ${sm}`);
    assert.equal(e.vaishnava, gd ?? md, `Gauḍīya ${e.en} ${sm}`);
    checks += 3;
  });
  const names = (y: string) => all.filter((e) => e.smarta.startsWith(y)).map((e) => e.en.replace(/ \(.*\)/, '').replace(' Ekādaśī', ''));
  assert.deepEqual(names('2026').slice(8, 13), ['Aparā', 'Padminī', 'Paramā', 'Nirjalā', 'Yoginī'], 'adhika Jyeṣṭha 2026 names');
  checks++;
}

// ---- 6. festivals (drik Hindu calendar, Bengaluru; Smārta ekādaśī rule) ----
const FESTIVALS: [string, string][] = [
  ['makara-sankranti', '2025-01-14'], ['ratha-saptami', '2025-02-04'], ['madhva-navami', '2025-02-06'], ['maha-shivaratri', '2025-02-26'],
  ['holika', '2025-03-13'], ['yugadi', '2025-03-30'], ['rama-navami', '2025-04-06'], ['hanuman-jayanti-north', '2025-04-12'],
  ['akshaya-tritiya', '2025-04-30'], ['narasimha-jayanti', '2025-05-11'], ['vyasa-purnima', '2025-07-10'], ['varamahalakshmi', '2025-08-08'],
  ['upakarma', '2025-08-09'], ['krishna-janmashtami', '2025-08-15'], ['svarna-gauri', '2025-08-26'], ['ganesha-chaturthi', '2025-08-27'],
  ['ananta-chaturdashi', '2025-09-06'], ['pitru-paksha', '2025-09-08'], ['mahalaya-amavasya', '2025-09-21'], ['navaratri', '2025-09-22'],
  ['vijayadashami', '2025-10-02'], ['madhva-jayanti', '2025-10-02'], ['naraka-chaturdashi', '2025-10-20'], ['deepavali', '2025-10-20'],
  ['bali-pratipada', '2025-10-22'], ['uttana-dvadashi', '2025-11-02'], ['gita-jayanti', '2025-12-01'], ['hanumad-vrata', '2025-12-03'],
  ['makara-sankranti', '2026-01-14'], ['ratha-saptami', '2026-01-25'], ['madhva-navami', '2026-01-27'], ['maha-shivaratri', '2026-02-15'],
  ['yugadi', '2026-03-19'], ['rama-navami', '2026-03-26'], ['hanuman-jayanti-north', '2026-04-02'], ['akshaya-tritiya', '2026-04-19'],
  ['narasimha-jayanti', '2026-04-30'], ['vyasa-purnima', '2026-07-29'], ['upakarma', '2026-08-28'], ['raghavendra-aradhana', '2026-08-30'],
  ['krishna-janmashtami', '2026-09-04'], ['ganesha-chaturthi', '2026-09-14'], ['ananta-chaturdashi', '2026-09-25'], ['pitru-paksha', '2026-09-27'],
  ['navaratri', '2026-10-11'], ['vijayadashami', '2026-10-20'], ['naraka-chaturdashi', '2026-11-08'], ['deepavali', '2026-11-08'],
  ['bali-pratipada', '2026-11-10'], ['uttana-dvadashi', '2026-11-21'],
  // Audit, November 2026 (drik Bengaluru calendars 2025/2026 and festival pages): Vasanta
  // Pañcamī, Vaṭa Pūrṇimā, Holikā dahana 2026 (bhadrā → next day), Durgāṣṭamī, Āyudha Pūjā
  // (= our Mahānavamī; drik's "Maha Navami" is the Bengal Durgā-pūjā date), Madhvācārya
  // Jayantī (daśamī at sunrise: 21 Oct 2026, the day after Vijayadaśamī), Kārtika Pūrṇimā,
  // Gītā Jayantī, Kannada Hanumān Jayantī (Hanumad vrata).
  ['vasanta-panchami', '2025-02-02'], ['vata-purnima', '2025-06-10'], ['durgashtami', '2025-09-30'], ['mahanavami', '2025-10-01'],
  ['kartika-purnima', '2025-11-05'], ['raghavendra-aradhana', '2025-08-11'],
  ['vasanta-panchami', '2026-01-23'], ['holika', '2026-03-03'], ['vata-purnima', '2026-06-29'], ['naga-panchami', '2026-08-17'],
  ['durgashtami', '2026-10-19'], ['mahanavami', '2026-10-20'], ['madhva-jayanti', '2026-10-21'], ['kartika-purnima', '2026-11-24'],
  ['gita-jayanti', '2026-12-20'], ['hanumad-vrata', '2026-12-22'],
];
{
  const fs = festivalsBetween(blr, '2025-01-01', '2026-12-31', 'smarta');
  for (const [key, date] of FESTIVALS) {
    const found = fs.filter((f) => f.key === key && f.date.slice(0, 4) === date.slice(0, 4));
    assert.ok(found.some((f) => f.date === date), `${key}: want ${date}, got ${found.map((f) => f.date).join(',') || 'none'}`);
    checks++;
  }
  // Vaikuṇṭha ekādaśī: 2025-01-10, 2025-12-31 (Vaiṣṇava date), 2026-12-20.
  assert.deepEqual(fs.filter((f) => f.key.startsWith('vaikuntha')).map((f) => f.date), ['2025-01-10', '2025-12-31', '2026-12-20']);
  // Varamahālakṣmī when Śrāvaṇa pūrṇimā is a Friday (2026): that Friday — drik "last Friday of
  // Śrāvaṇa śukla pakṣa" (28 Aug), Mantrālaya maṭha 2026–27 (28 Aug), Karnataka holiday list.
  assert.ok(fs.some((f) => f.key === 'varamahalakshmi' && f.date === '2026-08-28'));
  checks += 2;
}

// ---- 6b. 2027 (drik Bengaluru Hindu calendar, ekādaśī list and festival pages) ----
{
  const FEST_2027: [string, string][] = [
    ['makara-sankranti', '2027-01-15'], ['vasanta-panchami', '2027-02-11'], ['ratha-saptami', '2027-02-13'], ['maha-shivaratri', '2027-03-06'],
    ['holika', '2027-03-21'], ['yugadi', '2027-04-07'], ['rama-navami', '2027-04-15'], ['hanuman-jayanti-north', '2027-04-20'],
    ['akshaya-tritiya', '2027-05-09'], ['narasimha-jayanti', '2027-05-18'], ['vata-purnima', '2027-06-18'], ['vyasa-purnima', '2027-07-18'],
    ['naga-panchami', '2027-08-06'], ['varamahalakshmi', '2027-08-13'], ['upakarma', '2027-08-17'], ['krishna-janmashtami', '2027-08-25'],
    ['ganesha-chaturthi', '2027-09-04'], ['ananta-chaturdashi', '2027-09-14'], ['pitru-paksha', '2027-09-16'], ['navaratri', '2027-09-30'],
    ['durgashtami', '2027-10-07'], ['mahanavami', '2027-10-09'], ['vijayadashami', '2027-10-09'], ['madhva-jayanti', '2027-10-10'],
    ['naraka-chaturdashi', '2027-10-28'], ['deepavali', '2027-10-29'], ['bali-pratipada', '2027-10-30'], ['uttana-dvadashi', '2027-11-11'],
    ['kartika-purnima', '2027-11-14'], ['gita-jayanti', '2027-12-09'], ['hanumad-vrata', '2027-12-11'],
  ];
  const fs = festivalsBetween(blr, '2027-01-01', '2027-12-31', 'smarta');
  for (const [key, date] of FEST_2027) {
    const found = fs.filter((f) => f.key === key).map((f) => f.date);
    assert.ok(found.includes(date), `${key}: want ${date}, got ${found.join(',') || 'none'}`);
    checks++;
  }
  // The same dates with the Mādhva rule (only the ekādaśīs differ), which also adds the
  // ārādhanās of the Mādhva yatis and dāsas (Rāghavendra's is kept under both rules).
  const md = festivalsBetween(blr, '2027-01-01', '2027-12-31', 'madhva');
  const madhvaOnly = (k: string) => (k.endsWith('-aradhana') && k !== 'raghavendra-aradhana') || k === 'vadiraja-jayanti';
  assert.ok(md.some((f) => f.key === 'vyasaraja-aradhana') && !fs.some((f) => f.key === 'vyasaraja-aradhana'));
  assert.ok(fs.some((f) => f.key === 'raghavendra-aradhana'));
  assert.deepEqual(md.filter((f) => f.kind !== 'ekadashi' && !madhvaOnly(f.key)).map((f) => `${f.key} ${f.date}`), fs.filter((f) => f.kind !== 'ekadashi').map((f) => `${f.key} ${f.date}`));
  // All 25 ekādaśīs of 2027: Smārta, and drik's Gauṇa / Vaiṣṇava dates where they differ.
  const SM = '01-03 01-18 02-02 02-17 03-04 03-18 04-02 04-17 05-02 05-16 06-01 06-14 06-30 07-14 07-29 08-12 08-28 09-11 09-26 10-11 10-25 11-10 11-24 12-09 12-23';
  const VAI: Record<string, string> = { '01-18': '01-19', '07-29': '07-30', '10-25': '10-26' };
  const eks = lunationsBetween(julianDay(new Date('2026-12-15')), julianDay(new Date('2027-12-31')))
    .flatMap((l) => [ekadashiDates(blr, l, 11), ekadashiDates(blr, l, 26)]).filter((e) => e.smarta.startsWith('2027'));
  assert.equal(eks.map((e) => e.smarta.slice(5)).join(' '), SM, 'Smārta ekādaśīs 2027');
  for (const e of eks) {
    const want = `2027-${VAI[e.smarta.slice(5)] ?? e.smarta.slice(5)}`;
    assert.equal(e.madhva, want, `Mādhva ${e.smarta}`);
    assert.equal(e.vaishnava, want, `Gauḍīya ${e.smarta}`);
    checks += 2;
  }
  checks += 2;
}

// ---- 6c. saṃvatsara on Yugādi with a kṣaya pratipadā; saṅkalpa compound forms ----
{
  // 19 Mar 2026: amāvāsyā at sunrise, pratipadā begins 06:52 and ends before the next
  // sunrise, so Yugādi is this day — drik shows "Shaka Samvat 1948 Parabhava" (Bengaluru and
  // Kolkata). On 6 Apr 2027 (amāvāsyā day, pratipadā reaching the next sunrise) the year is
  // still Parābhava, as on drik; Plavaṅga from 7 Apr.
  const kol = cityById('kolkata');
  assert.equal(panchanga('2026-03-19', blr).samvatsara, 'पराभव');
  assert.equal(panchanga('2026-03-19', kol).samvatsara, 'पराभव');
  assert.equal(panchanga('2026-03-18', blr).samvatsara, 'विश्वावसु');
  assert.equal(panchanga('2026-03-19', blr).masa, 'फाल्गुन'); // the month is still the sunrise one
  assert.equal(panchanga('2027-04-06', blr).samvatsara, 'पराभव');
  assert.equal(panchanga('2027-04-07', blr).samvatsara, 'प्लवङ्ग');
  assert.ok(festivalsBetween(blr, '2026-03-19', '2026-03-19', 'smarta').some((f) => f.key === 'yugadi'));
  // Consonant stems in the saṅkalpa compounds.
  assert.deepEqual(['सर्वजित्', 'विरोधिकृत्', 'शतभिषक्', 'आयुष्मान्', 'सुकर्मा', 'वरीयान्', 'पराभव'].map(compoundStem),
    ['सर्वजिन्', 'विरोधिकृन्', 'शतभिषङ्', 'आयुष्मद्', 'सुकर्म', 'वरीयो', 'पराभव']);
  const delhi = cityById('delhi');
  assert.ok(panchanga('2026-06-10', delhi).sankalpa.includes('आयुष्मद्योगयुक्तायाम्'), 'Āyuṣmān yoga (Delhi, 10 Jun 2026)');
  assert.ok(panchanga('2031-07-04', cityById('new-york')).sankalpa.startsWith('विरोधिकृन्नामसंवत्सरे'), 'Virodhikṛt 2031');
  checks += 10;
}

// ---- 6d. independent sample: drikpanchang day pages, ten cities, 2025–2031 (read Nov 2026) ----
// [city, date, sunrise, sunset, sunrise tithi → end, nakṣatra end, yoga end, Rāhu-kāla start,
//  amānta month (* = adhika), saṃvatsara]; local clock times, '+' = next day. drik serves day
// pages only up to 2031. Includes DST change days (New York 8 Mar / 1 Nov 2026, London
// 28 Mar 2027 / 29 Oct 2028, Sydney 5 Apr 2026 / 3 Oct 2027) and Srinagar (34° N) at both solstices.
const DAYS: [string, string, string, string, string, string, string, string, string, string, string][] = [
  ['bengaluru', '2027-03-12', '06:29', '18:30', 'चतुर्थी', '14:57', '11:22', '21:34', '10:59', 'फाल्गुन', 'पराभव'],
  ['udupi', '2025-09-14', '06:20', '18:33', 'अष्टमी', '+03:06', '08:41', '07:35', '17:01', 'भाद्रपद', 'विश्वावसु'],
  ['srinagar', '2026-06-21', '05:20', '19:45', 'सप्तमी', '15:20', '09:31', '11:21', '17:57', 'ज्येष्ठ', 'पराभव'],
  ['srinagar', '2027-12-22', '07:33', '17:26', 'दशमी', '23:40', '+00:08', '13:28', '12:29', 'मार्गशीर्ष', 'प्लवङ्ग'],
  ['new-york', '2026-03-08', '07:19', '18:55', 'पञ्चमी', '11:40', '+06:41', '22:06', '17:28', 'फाल्गुन', 'विश्वावसु'],
  ['new-york', '2026-11-01', '06:26', '16:52', 'अष्टमी', '+02:40', '18:00', '+01:37', '15:34', 'आश्वयुज', 'पराभव'],
  ['new-york', '2031-07-04', '05:30', '20:31', 'पूर्णिमा', '15:00', '07:10', '10:06', '11:08', 'आषाढ', 'विरोधिकृत्'],
  ['london', '2027-03-28', '06:46', '19:27', 'षष्ठी', '10:34', '20:01', '+01:38', '17:51', 'फाल्गुन', 'पराभव'],
  ['london', '2028-10-29', '06:49', '16:38', 'द्वादशी', '+03:20', '20:00', '08:48', '15:24', 'कार्तिक', 'कीलक'],
  ['london', '2026-06-21', '04:43', '21:22', 'सप्तमी', '10:50', '05:01', '06:51', '19:17', 'ज्येष्ठ', 'पराभव'],
  ['sydney', '2026-04-05', '06:10', '17:45', 'तृतीया', '16:29', '+04:38', '19:14', '16:18', 'चैत्र', 'पराभव'],
  ['sydney', '2027-10-03', '06:30', '18:59', 'तृतीया', '07:38', '+05:30', '19:15', '17:25', 'आश्वयुज', 'प्लवङ्ग'],
  ['bengaluru', '2027-04-07', '06:12', '18:32', 'प्रतिपत्', '+04:28', '18:25', '07:26', '12:22', 'चैत्र', 'प्लवङ्ग'],
  ['bengaluru', '2031-09-20', '06:09', '18:17', 'चतुर्थी', '23:48', '21:30', '10:33', '09:11', 'भाद्रपद', 'विरोधिकृत्'],
  ['bengaluru', '2030-04-02', '06:15', '18:31', 'अमावास्या', '+03:31', '23:07', '19:22', '15:27', 'फाल्गुन', 'सौम्य'],
  ['mumbai', '2029-04-14', '06:22', '18:56', 'प्रतिपत्', '+05:32', '+06:07', '+04:08', '09:30', 'चैत्र', 'सौम्य'],
  ['chennai', '2028-01-15', '06:35', '18:01', 'चतुर्थी', '20:10', '11:25', '+02:09', '09:27', 'पुष्य', 'प्लवङ्ग'],
  ['chennai', '2031-12-25', '06:28', '17:50', 'द्वादशी', '17:49', '', '13:36', '13:34', 'मार्गशीर्ष', 'विरोधिकृत्'],
  ['delhi', '2026-06-10', '05:23', '19:19', 'दशमी', '+00:57', '09:21', '06:30', '12:21', '*ज्येष्ठ', 'पराभव'],
  ['delhi', '2025-03-30', '06:13', '18:38', 'प्रतिपत्', '12:49', '16:35', '17:54', '17:05', 'चैत्र', 'विश्वावसु'],
  ['kolkata', '2027-10-29', '05:39', '17:01', 'अमावास्या', '19:05', '10:27', '+00:34', '09:55', 'आश्वयुज', 'प्लवङ्ग'],
  ['kolkata', '2030-05-05', '05:02', '18:05', 'तृतीया', '+03:26', '19:39', '05:31', '16:27', 'वैशाख', 'साधारण'],
  ['kolkata', '2026-03-19', '05:42', '17:47', 'अमावास्या', '06:52', '+04:05', '+01:17', '13:15', 'फाल्गुन', 'पराभव'],
  ['udupi', '2029-04-01', '06:27', '18:43', 'तृतीया', '20:44', '14:26', '12:57', '17:11', '*चैत्र', 'सौम्य'],
  ['bengaluru', '2027-04-06', '06:13', '18:31', 'अमावास्या', '+05:20', '18:23', '08:51', '15:27', 'फाल्गुन', 'पराभव'],
  ['bengaluru', '2026-03-19', '06:25', '18:30', 'अमावास्या', '06:52', '+04:05', '+01:17', '13:58', 'फाल्गुन', 'पराभव'],
  ['bengaluru', '2029-03-20', '06:24', '', 'पञ्चमी', '21:47', '', '', '', '*चैत्र', 'सौम्य'],
];
{
  const worstBy: Record<string, number> = {};
  for (const [id, date, rise, set, tithi, tEnd, nEnd, yEnd, rahu, masa, samv] of DAYS) {
    const c = cityById(id);
    assert.equal(c.id, id);
    const p = panchanga(date, c);
    const at = (hm: string) => (hm.startsWith('+') ? cityInstant(c, addDaysIso(date, 1), hm.slice(1)) : cityInstant(c, date, hm));
    const cmp = (what: string, got: Date, want: string, tol: number) => {
      if (!want) return;
      const d = (got.getTime() - at(want).getTime()) / 60000;
      worstBy[what] = Math.max(worstBy[what] ?? 0, Math.abs(d));
      assert.ok(Math.abs(d) <= tol, `${id} ${date} ${what}: ${d.toFixed(1)} min`);
      checks++;
    };
    cmp('sunrise', p.sunrise, rise, 1.5);
    cmp('sunset', p.sunset, set, 1.5);
    assert.equal(p.tithi, tithi, `${id} ${date} tithi`);
    cmp('tithi end', p.tithiEnd, tEnd, 3);
    cmp('nakṣatra end', p.nakshatraEnd, nEnd, 3);
    cmp('yoga end', p.yogaEnd, yEnd, 3);
    cmp('Rāhu kāla', p.rahuKala[0], rahu, 1.5);
    assert.equal(`${p.adhika ? '*' : ''}${p.masa}`, masa, `${id} ${date} month`);
    assert.equal(p.samvatsara, samv, `${id} ${date} saṃvatsara`);
    checks += 3;
  }
  console.log(`drik day pages (${DAYS.length}): worst |Δ| ${Object.entries(worstBy).map(([k, v]) => `${k} ${v.toFixed(1)}`).join(', ')} min`);
}

// ---- 7. linked texts exist in the library ----
{
  const dir = join(__dirname, '../src/data/texts');
  const ids = new Set(
    readdirSync(dir).filter((f) => f.endsWith('.ts'))
      .flatMap((f) => [...readFileSync(join(dir, f), 'utf8').matchAll(/^\s*id: ['"]([^'"]+)['"]/gm)].map((m) => m[1])),
  );
  for (const id of LINKED_TEXT_IDS) { assert.ok(ids.has(id), `linked text ${id} exists`); checks++; }
}

// ---- 8. other cities / time zones ----
{
  const ny = CITIES.find((c) => c.id === 'new-york')!;
  const p = panchanga('2026-07-01', ny);
  assert.ok(Math.abs(mins(formatTime(p.sunrise, ny)) - (5 * 60 + 27)) <= 3, `NY sunrise ${formatTime(p.sunrise, ny)}`); // EDT
  const w = panchanga('2026-01-01', ny);
  assert.ok(Math.abs(mins(formatTime(w.sunrise, ny)) - (7 * 60 + 20)) <= 3, `NY winter sunrise ${formatTime(w.sunrise, ny)}`); // EST
  checks += 2;
}

// ---- 9. ten-year range 2025–2036 ----
{
  // Adhika months (amānta). Published lists (Patrika, PanchangBodh, drikpanchang 2026/2029):
  // Jyeṣṭha 2026, Caitra 2029 (15 Mar–13 Apr), Bhādrapada 2031, Āṣāḍha 2034. No kṣaya month.
  const ls = lunationsBetween(julianDay(new Date('2025-01-01')), julianDay(new Date('2036-12-31')));
  const adhika = ls.filter((l) => l.adhika).map((l) => `${fromJulian(l.start + 0.25).toISOString().slice(0, 4)} ${MASA[l.masa]}`);
  assert.deepEqual(adhika, ['2026 ज्येष्ठ', '2029 चैत्र', '2031 भाद्रपद', '2034 आषाढ']);
  for (let i = 1; i < ls.length; i++) assert.equal((ls[i].masa - ls[i - 1].masa + 12) % 12, ls[i - 1].adhika ? 0 : 1, 'no kṣaya month');
  checks += 1 + ls.length - 1;

  // drikpanchang Hindu calendars (Bengaluru) 2028–2030; Diwali 2033 (drik/AstroSage),
  // Gaṇeśa Caturthī 2036 (drik), Diwali 2036 (AstroSage).
  const FUTURE: [string, string][] = [
    ['makara-sankranti', '2028-01-15'], ['maha-shivaratri', '2028-02-23'], ['yugadi', '2028-03-27'], ['rama-navami', '2028-04-03'],
    ['krishna-janmashtami', '2028-08-13'], ['ganesha-chaturthi', '2028-08-23'], ['vijayadashami', '2028-09-27'], ['naraka-chaturdashi', '2028-10-17'], ['deepavali', '2028-10-17'],
    ['makara-sankranti', '2029-01-14'], ['maha-shivaratri', '2029-02-11'], ['yugadi', '2029-04-14'], ['rama-navami', '2029-04-23'],
    ['krishna-janmashtami', '2029-09-01'], ['ganesha-chaturthi', '2029-09-11'], ['vijayadashami', '2029-10-16'], ['deepavali', '2029-11-05'],
    ['makara-sankranti', '2030-01-14'], ['maha-shivaratri', '2030-03-02'], ['yugadi', '2030-04-03'], ['rama-navami', '2030-04-12'],
    ['krishna-janmashtami', '2030-08-21'], ['ganesha-chaturthi', '2030-09-01'], ['vijayadashami', '2030-10-06'], ['naraka-chaturdashi', '2030-10-26'], ['deepavali', '2030-10-26'],
    ['deepavali', '2033-10-22'], ['naraka-chaturdashi', '2033-10-22'], ['ganesha-chaturthi', '2036-08-24'], ['deepavali', '2036-10-18'],
    // Holikā dahana (drik Holika Dahan pages): after bhadrā 10 Mar 2028 / 8 Mar 2031, udaya-
    // vyāpinī pūrṇimā 2029 / 2030. Vaṭa Pūrṇimā (drik): 6 Jun 2028 (not the udaya day), 5 Jun 2031.
    ['holika', '2028-03-10'], ['holika', '2029-02-28'], ['holika', '2030-03-19'], ['holika', '2031-03-08'],
    ['vata-purnima', '2028-06-06'], ['vata-purnima', '2031-06-05'],
  ];
  const fs = festivalsBetween(blr, '2028-01-01', '2036-12-31', 'smarta');
  for (const [key, date] of FUTURE) {
    const found = fs.filter((f) => f.key === key && f.date.slice(0, 4) === date.slice(0, 4)).map((f) => f.date);
    assert.ok(found.includes(date), `${key}: want ${date}, got ${found.join(',') || 'none'}`);
    checks++;
  }
  // Ekādaśīs 2028 and 2030 (drik ekādaśī lists): all Smārta dates, and the Mādhva shifts.
  const EK_FUTURE: Record<number, { smarta: string; madhva: Record<string, string>; gaudiya?: Record<string, string> }> = {
    2028: {
      smarta: '01-08 01-22 02-07 02-20 03-07 03-21 04-05 04-20 05-05 05-20 06-03 06-18 07-02 07-18 08-01 08-16 08-30 09-15 09-29 10-14 10-29 11-12 11-27 12-12 12-27',
      madhva: { '04-05': '04-06', '08-16': '08-17', '11-12': '11-13' },
      gaudiya: { '02-20': '02-21' },
    },
    2030: {
      smarta: '01-15 01-29 02-14 02-28 03-15 03-29 04-14 04-28 05-13 05-27 06-12 06-26 07-11 07-26 08-09 08-24 09-08 09-23 10-07 10-23 11-05 11-21 12-05 12-21',
      madhva: { '01-29': '01-30', '03-15': '03-16', '05-13': '05-14' },
    },
  };
  for (const [y, want] of Object.entries(EK_FUTURE)) {
    const eks = lunationsBetween(julianDay(new Date(`${Number(y) - 1}-12-15`)), julianDay(new Date(`${y}-12-31`)))
      .flatMap((l) => [ekadashiDates(blr, l, 11), ekadashiDates(blr, l, 26)])
      .filter((e) => e.smarta.startsWith(y));
    assert.equal(eks.map((e) => e.smarta.slice(5)).join(' '), want.smarta, `Smārta ekādaśīs ${y}`);
    for (const e of eks) {
      const md = e.smarta.slice(5);
      if (e.borderline) continue; // 2030-08-09: daśamī-vedha by 2.5 min — drik treats it as śuddha
      assert.equal(e.madhva.slice(5), want.madhva[md] ?? md, `Mādhva ${y}-${md}`);
      assert.equal(e.vaishnava.slice(5), want.gaudiya?.[md] ?? want.madhva[md] ?? md, `Gauḍīya ${y}-${md}`);
      checks += 2;
    }
    checks++;
  }
  assert.ok(ekadashiDates(blr, lunationsBetween(julianDay(new Date('2030-08-05')), julianDay(new Date('2030-08-05')))[0], 11).borderline);
}

// ---- 10. Sauramāna (Udupi / Tuḷu) ----
{
  const udupi = CITIES.find((c) => c.id === 'udupi')!;
  // drikpanchang Udupi 14 Sep 2025: Sun in Siṃha, "pravishṭe" 29.
  assert.deepEqual([sauraDay(udupi, '2025-09-14').rasi, sauraDay(udupi, '2025-09-14').day], [4, 29]);
  // Tuḷu: the saṅkrānti day closes the month — Paggu 1 = 14 Apr 2020 (ingress 13 Apr evening);
  // Āṭi 2025 begins 17 Jul (Karka ingress 16 Jul 17:40); Bisu 2025 = 14 Apr (ingress 03:30).
  assert.equal(sauraMonthStart(udupi, 2020, 0), '2020-04-14');
  assert.equal(sauraMonthStart(udupi, 2025, 3), '2025-07-17');
  assert.equal(sauraMonthStart(udupi, 2025, 0), '2025-04-14');
  assert.equal(sauraDay(udupi, '2025-07-16').tulu, 'Kārtel');
  assert.equal(sauraDay(udupi, '2025-07-17').tulu, 'Āṭi');
  const p = panchanga('2026-11-20', udupi);
  assert.ok(sauraSankalpa(p, sauraDay(udupi, '2026-11-20')).includes('वृश्चिकमासे'), 'Sauramāna saṅkalpa');
  // Ṛtu from the solar month: Vṛścika → Hemanta (the lunar Kārtika gives Śarad).
  assert.ok(p.sankalpa.includes('शरदृतौ') && sauraSankalpa(p, sauraDay(udupi, '2026-11-20')).includes('हेमन्तर्तौ'), 'solar ṛtu');
  // Month start for a daytime saṅkrānti (Meṣa 2026 at 09:38): next day 15 Apr, or same day 14 Apr.
  assert.equal(sauraMonthStart(udupi, 2026, 0, 'next'), '2026-04-15');
  assert.equal(sauraMonthStart(udupi, 2026, 0, 'same'), '2026-04-14');
  assert.deepEqual([sauraDay(udupi, '2026-04-14', 'same').rasi, sauraDay(udupi, '2026-04-14', 'same').day], [0, 1]);
  assert.deepEqual([sauraDay(udupi, '2026-04-14', 'next').rasi, sauraDay(udupi, '2026-04-15', 'next').day], [11, 1]);
  assert.equal(sauraDay(udupi, '2026-04-20', 'same').day, sauraDay(udupi, '2026-04-20', 'next').day + 1);
  // A night saṅkrānti starts the month at the next sunrise under both rules (Bisu 2025, ingress 03:30).
  assert.equal(sauraMonthStart(udupi, 2025, 0, 'same'), '2025-04-14');
  checks += 14;

  const us = festivalsBetween(udupi, '2024-01-01', '2026-12-31', 'madhva', 'saura');
  const on = (key: string) => us.filter((f) => f.key === key).map((f) => f.date);
  // Udupi Śrī Kṛṣṇa Maṭha: 14 Sep 2025 (Telangana Today), 4 Sep 2026 + Viṭla Piṇḍi 5 Sep (Deccan Chronicle).
  assert.ok(on('udupi-krishna-janmashtami').includes('2025-09-14'));
  assert.ok(on('udupi-krishna-janmashtami').includes('2026-09-04'));
  assert.ok(on('vitla-pindi').includes('2025-09-15') && on('vitla-pindi').includes('2026-09-05'));
  // Saptotsava 9–15 Jan 2025 (Udayavani); Lakṣa Dīpotsava from Uttāna dvādaśī, 13 Nov 2024 (Udayavani).
  assert.ok(us.some((f) => f.key === 'saptotsava' && f.date === '2025-01-09' && f.endDate === '2025-01-15'));
  assert.ok(on('laksha-deepotsava').includes('2024-11-13'));
  // Udupi Janmāṣṭamī 26 Aug 2024 + Viṭla Piṇḍi 27 Aug (Udayavani); 24 Aug 2027 (hindu-blog.com,
  // Rohiṇī in Siṃha — not yet announced by the Maṭha).
  assert.ok(on('udupi-krishna-janmashtami').includes('2024-08-26') && on('vitla-pindi').includes('2024-08-27'));
  assert.ok(festivalsBetween(udupi, '2027-08-01', '2027-09-30', 'madhva', 'saura').some((f) => f.key === 'udupi-krishna-janmashtami' && f.date === '2027-08-24'));
  // Uttāna dvādaśī and Lakṣa Dīpotsava 2025 at the Udupi Maṭha: Monday 3 Nov (Deccan Chronicle) —
  // the pāraṇa day after the Mādhva Prabodhinī fast on the trispṛśā day (2 Nov); Smārta: 2 Nov (drik).
  assert.ok(us.some((f) => f.key === 'laksha-deepotsava' && f.date === '2025-11-03' && f.endDate === '2025-11-05'));
  assert.ok(on('uttana-dvadashi').includes('2025-11-03'));
  assert.ok(festivalsBetween(udupi, '2025-11-01', '2025-11-05', 'smarta').some((f) => f.key === 'uttana-dvadashi' && f.date === '2025-11-02'));
  checks += 5;
  // Paryāya: Puttige 2024, Shirur 18 Jan 2026 (Vedavardhana Tīrtha), then Sode 2028.
  assert.deepEqual([2024, 2026, 2028, 2030, 2032, 2034, 2036].map(paryayaMatha), ['Puttige', 'Shirur', 'Sode', 'Kaniyur', 'Pejavar', 'Palimaru', 'Admaru']);
  assert.ok(on('paryaya').includes('2026-01-18'));
  // The Cāndramāna list is unchanged by the Udupi additions.
  assert.ok(!festivalsBetween(udupi, '2025-01-01', '2025-12-31', 'madhva').some((f) => f.place === 'Udupi'));
  checks += 8;
}

// ---- 11. pāraṇa (breaking the ekādaśī fast) ----
// drikpanchang ekādaśī pages (…/ekadashis/<name>/<name>-ekadashi-date-time.html?year=Y&geoname-id=…),
// read November 2026: Bengaluru (1277333) 2025–2027 and New York (5128581) 2026, local time.
// 'S <fast> <from>-<to>' = Smārta fast and pāraṇa window on the next day; 'V …' = drik's
// "Vaishnava"/"Gauna" fast (a mahādvādaśī: pāraṇa on trayodaśī, or before a short dvādaśī ends);
// 'hvHH:MM' = drik's "Hari Vasara End Moment" when it fixes the window; '?' = no end given.
const PARANA: Record<string, string[]> = {
  bengaluru: [
    'S 2025-01-10 06:45-08:21', 'S 2025-01-25 06:46-09:05', 'S 2025-02-08 06:44-09:04', 'S 2025-02-24 06:38-09:00', 'S 2025-03-10 06:30-08:13',
    'S 2025-03-25 13:38-16:05 hv09:14', 'V 2025-03-26 06:19-08:45', 'S 2025-04-08 06:11-08:39', 'S 2025-04-24 06:02-08:32', 'S 2025-05-08 05:56-08:28',
    'S 2025-05-23 05:53-08:26', 'S 2025-06-06 13:36-16:10 hv11:25', 'V 2025-06-07 05:53-07:17', 'S 2025-06-21 13:39-16:14 hv09:41',
    'V 2025-06-22 05:55-08:30', 'S 2025-07-06 05:59-08:33', 'S 2025-07-21 06:03-07:05', 'S 2025-08-05 06:06-08:38', 'S 2025-08-19 06:08-08:38',
    'S 2025-09-03 13:32-16:00 hv10:18', 'S 2025-09-17 06:09-08:35', 'S 2025-10-03 06:09-08:33', 'S 2025-10-17 06:10-08:32',
    'S 2025-11-01 13:13-15:33 hv12:55', 'V 2025-11-02 06:14-08:34', 'S 2025-11-15 13:13-15:32 hv09:09', 'S 2025-12-01 06:27-08:44',
    'S 2025-12-15 06:34-08:51', 'S 2026-01-14 06:46-09:03', 'S 2026-01-29 06:46-09:05', 'S 2026-02-13 06:43-09:03', 'S 2026-02-27 06:36-08:59',
    'S 2026-03-15 06:27-08:51', 'S 2026-03-29 06:17-07:09', 'S 2026-04-13 06:54-08:37 hv06:54', 'S 2026-04-27 06:00-08:31', 'S 2026-05-13 05:55-08:27',
    'S 2026-06-25 05:56-08:31', 'S 2026-07-10 13:42-16:16 hv10:32', 'V 2026-07-11 06:00-08:34', 'S 2026-07-25 06:04-08:37', 'S 2026-08-09 06:07-08:00',
    'S 2026-08-23 13:37-16:06 hv10:49', 'V 2026-08-24 06:08-06:20', 'S 2026-09-07 06:09-08:36', 'S 2026-09-22 06:09-08:34',
    'S 2026-10-06 06:14-08:32 hv06:14', 'S 2026-10-22 06:11-08:32', 'S 2026-11-05 06:15-08:34', 'S 2026-11-20 13:14-15:32 hv12:07',
    'V 2026-11-21 06:21-08:39', 'S 2026-12-04 06:28-08:45', 'S 2026-12-20 06:37-08:53', 'S 2027-01-03 06:43-08:59', 'S 2027-01-18 13:39-15:57 hv13:02',
    'V 2027-01-19 06:46-09:04', 'S 2027-02-02 06:46-09:05', 'S 2027-02-17 06:41-09:02', 'S 2027-03-04 06:33-08:57', 'S 2027-03-18 07:12-08:50 hv07:12',
    'S 2027-04-02 13:37-16:04 hv09:15', 'S 2027-04-17 06:06-07:42', 'S 2027-05-02 05:58-08:30', 'S 2027-05-16 05:54-08:27', 'S 2027-06-01 05:52-08:26',
    'S 2027-06-14 08:13-08:28 hv08:13', 'S 2027-06-30 05:57-08:32', 'S 2027-07-14 06:01-08:35', 'S 2027-07-29 13:42-16:15 hv10:29',
    'V 2027-07-30 06:05-08:37', 'S 2027-08-12 13:40-16:11 hv09:34', 'S 2027-08-28 06:08-08:37', 'S 2027-09-11 06:09-08:36', 'S 2027-09-26 06:09-08:33',
    'S 2027-10-11 06:09-08:32', 'S 2027-10-25 13:14-15:35 hv08:47', 'V 2027-10-26 06:12-08:32', 'S 2027-11-10 06:16-08:35', 'S 2027-11-24 06:23-08:40',
    'S 2027-12-09 13:21-15:37 hv09:13',
  ],
  'new-york': [
    'S 2026-01-14 07:18-09:13', 'S 2026-01-28 08:43-09:09 hv08:43', 'V 2026-01-29 07:08-09:08', 'S 2026-02-12 13:14-15:21 hv10:19',
    'S 2026-02-27 06:31-08:46', 'S 2026-03-14 07:08-09:31', 'S 2026-03-28 06:44-09:15', 'S 2026-04-13 06:19-08:58', 'S 2026-04-27 05:59-08:45',
    'S 2026-05-12 14:19-17:12 hv09:27', 'V 2026-05-13 05:40-08:33', 'S 2026-06-25 05:26-08:27', 'S 2026-07-10 05:35-08:33',
    'S 2026-07-24 08:40-08:41 hv08:40', 'S 2026-08-08 06:48-08:49 hv06:48', 'S 2026-08-23 06:15-08:56', 'S 2026-09-06 14:11-16:45 hv12:58',
    'V 2026-09-07 06:30-09:03', 'S 2026-09-22 06:45-09:10', 'S 2026-10-06 06:59-09:17', 'S 2026-10-21 13:45-15:55 hv11:14', 'S 2026-11-04 06:31-08:34',
    'S 2026-11-20 06:50-08:47', 'S 2026-12-04 07:05-08:57', 'S 2026-12-19 15:04-? hv15:04', 'V 2026-12-20 07:16-09:08',
  ],
};
{
  let worstParana = 0;
  const minsOf = (t: Date, c: (typeof CITIES)[number]) => mins(formatTime(t, c));
  const close = (label: string, got: number, want: string) => {
    const d = got - mins(want);
    worstParana = Math.max(worstParana, Math.abs(d));
    assert.ok(Math.abs(d) <= 2, `${label}: got ${Math.floor(got / 60)}:${String(got % 60).padStart(2, '0')} want ${want}`);
    checks++;
  };
  let smartaRows = 0;
  for (const [id, rows] of Object.entries(PARANA)) {
    const city = CITIES.find((c) => c.id === id)!;
    for (const row of rows) {
      const [type, fast, win, hvTok] = row.split(' ');
      const [from, to] = win.split('-');
      const label = `${id} pāraṇa after ${type} ${fast}`;
      let p;
      if (type === 'S') {
        smartaRows++;
        p = paranaFor(city, fast, 'smarta');
        assert.ok(p, `${label}: no ekādaśī`);
        // Mādhva convention: the same window, except that a Hari-vāsara outlasting the
        // prātaḥkāla is followed directly (no aparāhṇa rule) — when the Mādhva fast is the same day.
        const m = paranaFor(city, fast, 'madhva');
        if (m) {
          if (p.kind === 'aparahna' || p.kind === 'after-harivasara') {
            assert.equal(m.kind, 'after-harivasara', `${label} Mādhva kind`);
            close(`${label} Mādhva start = Hari-vāsara end`, minsOf(m.start, city), hvTok.slice(2));
          } else {
            assert.deepEqual([m.start, m.end, m.kind], [p.start, p.end, p.kind], `${label} Mādhva = Smārta`);
            checks++;
          }
        }
      } else {
        // drik's Vaiṣṇava fast: our Mādhva date, or (vyañjulī) only the Gauḍīya date.
        p = paranaFor(city, fast, 'madhva');
        if (!p) {
          const info = lunationsBetween(julianDay(new Date(fast)) - 20, julianDay(new Date(fast)) + 2)
            .flatMap((l) => [ekadashiDates(city, l, 11), ekadashiDates(city, l, 26)]).find((e) => e.vaishnava === fast);
          assert.ok(info, `${label}: no Gauḍīya ekādaśī`);
          p = paranaWindow(city, info, fast, 'madhva');
        }
        assert.ok(['trayodashi', 'dvadashi-end'].includes(p.kind), `${label} kind ${p.kind}`);
      }
      assert.equal(p.date, addDaysIso(fast, 1), `${label} date`);
      close(`${label} start`, minsOf(p.start, city), from);
      if (to !== '?') close(`${label} end`, minsOf(p.end, city), to);
      if (hvTok) close(`${label} Hari-vāsara end`, minsOf(p.harivasaraEnd, city), hvTok.slice(2));
      checks++;
    }
  }
  assert.ok(smartaRows >= 90, 'pāraṇa reference rows');

  // Labels and the Festival field (Utpannā 2025: Smārta in the aparāhṇa, Mādhva right after Hari-vāsara).
  const sm = festivalsBetween(blr, '2025-11-15', '2025-11-15', 'smarta').find((f) => f.kind === 'ekadashi')!;
  assert.equal(sm.parana?.label, '13:13–15:32 on 16 Nov');
  assert.equal(sm.parana?.kind, 'aparahna');
  const md = festivalsBetween(blr, '2025-11-15', '2025-11-15', 'madhva').find((f) => f.kind === 'ekadashi')!;
  assert.ok(/^09:1[01]–17:50 on 16 Nov$/.test(md.parana?.label ?? ''), `Mādhva label ${md.parana?.label}`);
  // Alpa dvādaśī (Kāmadā 2026): the note names the dvādaśī end.
  const alpa = paranaFor(blr, '2026-03-29', 'madhva')!;
  assert.equal(alpa.kind, 'dvadashi-end');
  assert.ok(alpa.note?.startsWith('Alpa dvādaśī: pāraṇe before 07:'), alpa.note);
  // Dvādaśī ending after midnight shows the date (Utpannā 2026: "12:51 AM, Dec 06" on drik).
  assert.ok(formatTime(paranaFor(blr, '2026-12-04', 'smarta')!.dvadashiEnd, blr, '2026-12-05').endsWith(', 6 Dec'));
  // Not an ekādaśī fast day under the rule.
  assert.equal(paranaFor(blr, '2026-11-16', 'smarta'), null);
  assert.equal(paranaFor(blr, '2025-03-25', 'madhva'), null); // Mādhva fast is on the 26th
  // The list helper: all fasts with their pāraṇa, the same dates as the festival list.
  const list = ekadashisBetween(blr, '2025-01-01', '2025-12-31', 'madhva');
  assert.equal(list.length, 25);
  assert.deepEqual(list.map((e) => e.date), festivalsBetween(blr, '2025-01-01', '2025-12-31', 'madhva').filter((f) => f.kind === 'ekadashi').map((f) => f.date));
  assert.ok(list.every((e) => e.parana.date === addDaysIso(e.date, 1) && e.parana.start < e.parana.end));
  checks += 12;
  console.log(`pāraṇa: worst offset vs drik ${worstParana} min`);
}

// ---- Mādhva observances (madhwafestivals.com month lists) against the Rāghavendra Maṭha
// Mantrālaya Parābhava 2026–27 pañcāṅga (Sūrya Siddhānta, read from its monthly pages) and the
// Uttarādi Maṭha Viśvāvasu 2025–26 pañcāṅga (Los Angeles edition, Sūrya Siddhānta) ----
{
  const MANTRALAYA: [string, string, string?][] = [
    ['matsya-jayanti', '2026-03-21'], ['vaishakha-snana', '2026-04-02'], ['ganga-dasara', '2026-06-24'], ['sripadaraja-aradhana', '2026-06-28'],
    ['vijayeendra-aradhana', '2026-07-12'], ['mannettina-amavasya', '2026-07-14'], ['shaka-vrata', '2026-07-25', '2026-08-22'],
    ['jayatirtha-aradhana', '2026-08-03'], ['bheemana-amavasya', '2026-08-12'], ['naga-chaturthi', '2026-08-16'], ['dadhi-vrata', '2026-08-23'],
    ['rishi-panchami', '2026-09-15'], ['jagannatha-dasa-aradhana', '2026-09-20'], ['kshira-vrata', '2026-09-22'], ['vamana-jayanti', '2026-09-23'],
    ['pranesha-dasa-aradhana', '2026-10-17'], ['dvidala-vrata', '2026-10-22'], ['kartika-snana', '2026-10-26', '2026-11-24'],
    ['jalapurana-trayodashi', '2026-11-07'], ['yama-dvitiya', '2026-11-11'], ['vijaya-dasa-aradhana', '2026-11-19'],
    ['padmanabha-tirtha-aradhana', '2026-12-07'], ['subrahmanya-shashti', '2026-12-15'], ['dhanurmasa', '2026-12-17', '2027-01-14'],
    ['magha-snana', '2027-01-22', '2027-02-20'], ['narahari-tirtha-aradhana', '2027-01-29'], ['gopala-dasa-aradhana', '2027-01-30'],
    ['purandara-dasa-aradhana', '2027-02-06'], ['bhishmashtami', '2027-02-14'], ['vadiraja-aradhana', '2027-03-25'], ['vyasaraja-aradhana', '2027-03-26'],
  ];
  const fs = festivalsBetween(cityById('mantralayam'), '2026-03-15', '2027-04-05', 'madhva', 'chandra', 'next', 'surya');
  for (const [key, date, end] of MANTRALAYA) {
    const f = fs.find((x) => x.key === key && x.date === date);
    assert.ok(f, `${key}: want ${date}, got ${fs.filter((x) => x.key === key).map((x) => x.date).join(',') || 'none'}`);
    if (end) assert.equal(f.endDate, end, `${key} ends`);
    checks++;
  }
  // Uttarādi Maṭha, Los Angeles 2025–26 (local dates).
  const UTTARADI: [string, string][] = [
    ['mohana-dasa-aradhana', '2025-06-01'], ['sripadaraja-aradhana', '2025-06-09'], ['vijayeendra-aradhana', '2025-06-23'], ['shaka-vrata', '2025-07-06'],
    ['jayatirtha-aradhana', '2025-07-15'], ['jagannatha-dasa-aradhana', '2025-09-01'], ['prasanna-venkata-dasa-aradhana', '2025-09-04'],
    ['dvidala-vrata', '2025-10-02'], ['kartika-snana', '2025-10-06'], ['jalapurana-trayodashi', '2025-10-18'], ['vijaya-dasa-aradhana', '2025-10-31'],
    ['kanakadasa-jayanti', '2025-11-07'], ['padmanabha-tirtha-aradhana', '2025-11-18'], ['mahipati-dasa-aradhana', '2025-11-19'],
    ['magha-snana', '2026-01-02'], ['narahari-tirtha-aradhana', '2026-01-09'], ['gopala-dasa-aradhana', '2026-01-10'], ['purandara-dasa-aradhana', '2026-01-18'],
    ['bhishmashtami', '2026-01-25'], ['vadiraja-jayanti', '2026-01-29'], ['vadiraja-aradhana', '2026-03-05'], ['vyasaraja-aradhana', '2026-03-06'],
  ];
  const la = festivalsBetween(cityById('los-angeles'), '2025-05-01', '2026-03-31', 'madhva', 'chandra', 'next', 'surya');
  for (const [key, date] of UTTARADI) {
    assert.ok(la.some((x) => x.key === key && x.date === date), `LA ${key}: want ${date}, got ${la.filter((x) => x.key === key).map((x) => x.date).join(',') || 'none'}`);
    checks++;
  }
  // Cāturmāsya: the dvidala vrata ends the day before the Prabodhinī fast (Mādhva rule, Bengaluru 2026).
  const md = festivalsBetween(blr, '2026-10-01', '2026-11-30', 'madhva');
  const prab = md.find((f) => f.kind === 'ekadashi' && f.en.startsWith('Prabodhinī'))!;
  assert.equal(md.find((f) => f.key === 'dvidala-vrata')!.endDate, addDaysIso(prab.date, -1));
  checks++;
}

// ---- Maṭha ārādhanās (src/lib/mathaAradhana.ts). Each is placed by tithi like the others; the
// dates below are those the maṭhas published (Sūrya Siddhānta, as their pañcāṅgas): ----
{
  const run = (city: string, from: string, to: string, matha: Parameters<typeof festivalsBetween>[7]) =>
    festivalsBetween(cityById(city), from, to, 'madhva', 'chandra', 'next', 'surya', matha);
  const want = (fs: ReturnType<typeof run>, list: [string, string][], who: string) => {
    for (const [key, date] of list) {
      assert.ok(fs.some((x) => x.key === key && x.date === date), `${who} ${key}: want ${date}, got ${fs.filter((x) => x.key === key).map((x) => x.date).join(',') || 'none'}`);
      checks++;
    }
  };
  // Vyāsarāja Maṭha, Sosale: official daily pañcāṅga, vyasarajamatha.org/panchanga.php (panchanga_ajax.php),
  // Viśvāvasu 2025–26 and Parābhava 2026–27 (read 17 Nov 2026).
  const sosale = run('bengaluru', '2025-04-01', '2027-03-31', 'vyasaraja');
  want(sosale, [
    ['vidyashreedhara-tirtha-aradhana', '2025-04-26'], ['vidyashreedhara-tirtha-aradhana', '2026-04-16'],
    ['sheshadasa-aradhana', '2025-05-05'], ['sheshadasa-aradhana', '2026-04-24'],
    ['vidyaratnakara-tirtha-aradhana', '2025-05-21'], ['vidyaratnakara-tirtha-aradhana', '2026-05-11'],
    ['vidyakanta-tirtha-aradhana', '2025-06-04'], ['vidyakanta-tirtha-aradhana', '2026-06-23'],
    ['vidyashreesindhu-tirtha-aradhana', '2026-07-23'], ['vidyapayonidhi-tirtha-aradhana', '2026-10-05'],
    ['vidyaprasanna-tirtha-aradhana', '2025-12-04'], ['kambaluru-ramachandra-aradhana', '2026-12-12'],
    ['vidyavallabha-tirtha-aradhana', '2026-12-18'], ['vibudhendra-tirtha-aradhana', '2026-12-19'],
    ['jagannatha-bhashyadipika-aradhana', '2027-01-09'], ['shreenatha-tirtha-aradhana', '2027-01-11'], ['lakshmivallabha-tirtha-aradhana', '2027-01-13'],
  ], 'Sosale');
  // Rāghavendra Maṭha, Mantrālaya: dates of the ārādhanās as reported on srsmatha.org (news), Mantrālaya.
  const mantralaya = run('mantralayam', '2025-01-01', '2026-12-31', 'raghavendra');
  want(mantralaya, [
    ['sujayeendra-tirtha-aradhana', '2025-02-02'], ['sujayeendra-tirtha-aradhana', '2026-01-22'], ['dheerendra-tirtha-aradhana', '2025-03-12'],
    ['dheerendra-tirtha-aradhana', '2026-03-01'], ['sudheendra-tirtha-aradhana', '2025-03-16'], ['suyateendra-tirtha-aradhana', '2025-03-19'],
    ['suyateendra-tirtha-aradhana', '2026-03-08'], ['sushameendra-tirtha-aradhana', '2025-04-15'], ['sushameendra-tirtha-aradhana', '2026-04-04'],
    ['vadeendra-tirtha-aradhana', '2025-06-04'], ['susheelendra-tirtha-aradhana', '2026-07-17'], ['raghunandana-tirtha-aradhana', '2025-11-12'],
    ['vasudhendra-tirtha-aradhana', '2026-11-01'], ['kavindra-tirtha-aradhana', '2025-04-06'], ['vageesha-tirtha-aradhana', '2025-04-16'],
  ], 'Mantralaya');
  // Uttarādi Maṭha's Kavīndra / Vāgīśa ārādhanās are the same days (Chaitra śukla navamī, kṛṣṇa tṛtīyā).
  want(run('bengaluru', '2025-04-01', '2025-04-30', 'uttaradi'), [['kavindra-tirtha-aradhana', '2025-04-06'], ['vageesha-tirtha-aradhana', '2025-04-16']], 'Uttaradi');
  // The tithi of ārādhanās whose date the Uttarādi Maṭha's Guru Parampara pages (uttaradimath.org) or the Palimāru
  // Maṭha's notices (sripalimarumatha.org) give as a date: Satyapramoda Tīrtha 3 Nov 1997 and Satyābhijña Tīrtha
  // 2 Feb 1948 (Uttarādi), the 18th and 19th ārādhanā of Vidyāmānya Tīrtha on 26 Apr 2018 and 15 May 2019 (Palimāru).
  const tithiOn = (date: string, city: string) => {
    const p = panchanga(date, cityById(city));
    return `${p.masaIndex}:${p.tithiIndex}${p.adhika ? 'a' : ''}`;
  };
  const rowOf = (key: string) => MATHA_ARADHANAS.find((a) => a.key === key)!;
  for (const [key, date, city] of [
    ['satyapramoda-tirtha-aradhana', '1997-11-03', 'bengaluru'], ['satyabhijna-tirtha-aradhana', '1948-02-02', 'bengaluru'],
    ['vidyamanya-tirtha-aradhana', '2018-04-26', 'udupi'], ['vidyamanya-tirtha-aradhana', '2019-05-15', 'udupi'],
  ] as const) {
    assert.equal(tithiOn(date, city), `${rowOf(key).masa}:${rowOf(key).tithi}`, `${key} on ${date}`);
    checks++;
  }
  // Settings: nothing extra for 'all' (default) or under the Smārta rule; each maṭha sees only its own.
  const isMatha = (f: { key: string }) => MATHA_ARADHANAS.some((a) => a.key === f.key);
  assert.equal(run('bengaluru', '2025-01-01', '2026-12-31', 'all').filter(isMatha).length, 0);
  assert.equal(festivalsBetween(blr, '2025-01-01', '2026-12-31', 'smarta', 'chandra', 'next', 'surya', 'vyasaraja').filter(isMatha).length, 0);
  assert.ok(!sosale.some((f) => f.key === 'vageesha-tirtha-aradhana') && mantralaya.some((f) => f.key === 'vibudhendra-tirtha-aradhana') === true);
  assert.ok(MATHA_ARADHANAS.every((a) => a.mathas.length > 0 && a.masa >= 0 && a.masa < 12 && a.tithi >= 1 && a.tithi <= 30));
  assert.equal(new Set(MATHA_ARADHANAS.map((a) => a.key)).size, MATHA_ARADHANAS.length);
  checks += 5;
  console.log(`maṭha ārādhanās: ${MATHA_ARADHANAS.length} entries`);
}

{
  const t0 = Date.now();
  for (let y = 2025; y <= 2036; y++) festivalsBetween(blr, `${y}-01-01`, `${y}-12-31`, 'madhva', 'saura');
  const ms = Date.now() - t0;
  assert.ok(ms < 5000, `12 years of festivals in ${ms} ms`);
  checks++;
}

console.log(`pañcāṅga tests passed (${checks} checks; worst tithi-time offset vs drik ${worst.toFixed(1)} min)`);
