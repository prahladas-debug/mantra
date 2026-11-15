/// <reference types="node" />
/** Run: npm test */
import assert from 'node:assert/strict';
import { search } from '../src/data';
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
  ['tamil', 'पुण्डरीक सङ्ग्रह ब्रह्म', 'புண்ட³ரீக ஸங்க்³ரஹ ப்³ரஹ்ம'],
  ['tamil', 'श्रीमान्', 'ஸ்ரீமாந்'],
  // Regional conventions (checked against published Kannada/Telugu stotra texts):
  // anusvara before consonants in Kannada, Telugu, Gujarati.
  ['kannada', 'मन्त्रसङ्ग्रहः गोविन्द शङ्ख पुण्डरीकाक्ष अनन्त', 'ಮಂತ್ರಸಂಗ್ರಹಃ ಗೋವಿಂದ ಶಂಖ ಪುಂಡರೀಕಾಕ್ಷ ಅನಂತ'],
  ['kannada', 'ज्ञान अन्नं सम्यक्', 'ಜ್ಞಾನ ಅನ್ನಂ ಸಮ್ಯಕ್'],
  ['telugu', 'शान्ताकारं शार्ङ्गधन्वा', 'శాంతాకారం శార్ంగధన్వా'],
  ['gujarati', 'मन्त्र गोविन्द', 'મંત્ર ગોવિંદ'],
  // Malayalam: anusvara only for ṅg/ṅkh/ṅgh/mb/mbh; chillu ൻ word-finally.
  ['malayalam', 'मन्त्रसङ्ग्रहः शम्भु शङ्कर भगवान्', 'മന്ത്രസംഗ്രഹഃ ശംഭു ശങ്കര ഭഗവാൻ'],
  // Bengali/Odia medial ya; Odia va.
  ['bengali', 'नारायणाय', 'নারায়ণায়'],
  ['bengali', 'सूर्य योग', 'সূর্য যোগ'],
  ['oriya', 'नारायणाय विश्वं वासुदेव', 'ନାରାୟଣାୟ ବିଶ୍ୱଂ ବାସୁଦେବ'],
  // Vedic svara marks are stripped.
  ['devanagari', 'तत्स॑वि॒तुः', 'तत्सवितुः'],
];
for (const [script, input, expected] of cases) {
  assert.equal(translit(input, script), expected, `${script}: ${input}`);
}

const J = '\u2060\u00A0'; // word joiner + no-break space
assert.equal(verseNumber(12, 'kannada'), `॥${J}೧೨${J}॥`);
assert.equal(verseNumber(12, 'tamil'), `॥${J}12${J}॥`);
assert.equal(verseNumber(3, 'iast'), `||${J}3${J}||`);

// Search keys match across scripts and casual English spelling.
const k = searchKey('विष्णु सहस्रनाम');
assert.equal(searchKey('ವಿಷ್ಣು ಸಹಸ್ರನಾಮ'), k);
assert.equal(searchKey('Vishnu Sahasranama'), k);
assert.equal(searchKey('ಮಂತ್ರ ಸಂಗ್ರಹ'), searchKey('मन्त्र सङ्ग्रह'));
assert.equal(searchKey('ಗೋವಿಂದ'), searchKey('govinda'));
assert.equal(searchKey('viṣṇu sahasranāma'), k);
assert.ok(searchKey('कृष्णं').includes(searchKey('krishna')));

// In-app search: everyday spellings and several words in any order.
{
  const first = (q: string) => search(q, 5).map((r) => r.mantra.id);
  assert.ok(first('geeta')[0].startsWith('bhagavad-gita'), 'geeta finds the Gita');
  assert.equal(first('vishnu sahasranamam')[0], 'vishnu-sahasranama');
  assert.equal(first('palaya achyuta')[0], 'vadiraja-krishnashtakam');
  assert.equal(first('krishnashtakam vadiraja')[0], 'vadiraja-krishnashtakam');
  assert.ok(first('pooja').some((id) => id.endsWith('-puja')), 'pooja finds puja texts');
}

console.log(`transliteration tests passed (${cases.length + 9} assertions)`);
