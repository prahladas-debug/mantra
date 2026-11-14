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
import { LINKED_TEXT_IDS, festivalsBetween, ekadashiDates } from '../src/lib/festivals';
import {
  CITIES, crossing, elongation, formatTime, julianDay, fromJulian, lunationsBetween, panchanga, siderealSun,
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
  // South-Indian Varamahālakṣmī rule when Śrāvaṇa pūrṇimā is a Friday (2026): the previous Friday.
  assert.ok(fs.some((f) => f.key === 'varamahalakshmi' && f.date === '2026-08-21'));
  checks += 2;
}

// ---- 7. linked texts exist in the library ----
{
  const dir = join(__dirname, '../src/data/texts');
  const ids = new Set(
    readdirSync(dir).filter((f) => f.endsWith('.ts'))
      .flatMap((f) => [...readFileSync(join(dir, f), 'utf8').matchAll(/^\s*id: '([^']+)'/gm)].map((m) => m[1])),
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

console.log(`pañcāṅga tests passed (${checks} checks; worst tithi-time offset vs drik ${worst.toFixed(1)} min)`);
