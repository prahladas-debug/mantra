/// <reference types="node" />
/** Run: npm test */
import assert from 'node:assert/strict';
import { searchKey, translit, verseNumber } from '../src/lib/transliterate';

const cases: [Parameters<typeof translit>[1], string, string][] = [
  ['kannada', 'विश्वं विष्णुर्वषट्कारो', 'ವಿಶ್ವಂ ವಿಷ್ಣುರ್ವಷಟ್ಕಾರೋ'],
  ['telugu', 'विश्वं विष्णुर्वषट्कारो', 'విశ్వం విష్ణుర్వషట్కారో'],
  ['malayalam', 'नमो नारायणाय', 'നമോ നാരായണായ'],
  ['iast', 'सहस्रशीर्षा पुरुषः', 'sahasraśīrṣā puruṣaḥ'],
  // Tamil: superscript marks for voiced/aspirated stops, dandas preserved.
  ['tamil', 'भूमिं गोविन्द ।', 'பூ⁴மிம்ʼ கோ³விந்த³ ।'],
  ['tamil', 'धर्म ॥', 'த⁴ர்ம ॥'],
  ['tamil', 'दुर्गा गर्भ', 'து³ர்கா³ க³ர்ப⁴'],
  ['tamil', 'अद्भुत मघ्', 'அத்³பு⁴த மக்⁴'],
  ['tamil', 'अग्र्य', 'அக்³ர்ய'],
  // Vedic svara marks are stripped.
  ['devanagari', 'तत्स॑वि॒तुः', 'तत्सवितुः'],
];
for (const [script, input, expected] of cases) {
  assert.equal(translit(input, script), expected, `${script}: ${input}`);
}

assert.equal(verseNumber(12, 'kannada'), '॥ ೧೨ ॥');
assert.equal(verseNumber(12, 'tamil'), '॥ 12 ॥');
assert.equal(verseNumber(3, 'iast'), '|| 3 ||');

// Search keys match across scripts and casual English spelling.
const k = searchKey('विष्णु सहस्रनाम');
assert.equal(searchKey('ವಿಷ್ಣು ಸಹಸ್ರನಾಮ'), k);
assert.equal(searchKey('Vishnu Sahasranama'), k);
assert.equal(searchKey('viṣṇu sahasranāma'), k);
assert.ok(searchKey('कृष्णं').includes(searchKey('krishna')));

console.log(`transliteration tests passed (${cases.length + 7} assertions)`);
