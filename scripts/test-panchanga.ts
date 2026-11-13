/// <reference types="node" />
/** Pañcāṅga regression tests against known festival dates (Bengaluru). Run: npm test */
import assert from 'node:assert/strict';
import { CITIES, panchanga } from '../src/lib/panchanga';

process.env.TZ = 'Asia/Kolkata';
const blr = CITIES.find((c) => c.id === 'bengaluru')!;
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
  ['2026-11-13', { samvatsara: 'पराभव', masa: 'कार्तिक', tithi: 'चतुर्थी', nakshatra: 'मूल', yoga: 'धृति' }],
];
for (const [date, want] of cases) {
  const got = at(date);
  for (const [k, v] of Object.entries(want)) assert.equal((got as any)[k], v, `${date} ${k}`);
}
console.log(`pañcāṅga tests passed (${cases.length} dates)`);
