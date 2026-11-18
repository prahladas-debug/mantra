/**
 * Raghupati Rāghava Rājārāma, the Rāma dhun in its traditional form, in Devanagari. Ascribed to Śrī Lakṣmaṇācārya (from his
 * Nāma Rāmāyaṇa) by B and S; the ascription is the traditional one.
 *
 * The version made popular in the 20th century, tuned by Viṣṇu Digambara Paluskara and sung by Mahatma Gandhi, adds lines
 * ("सीताराम सीताराम, भज प्यारे तू सीताराम", then "ईश्वर अल्लाह तेरे नाम, सबको सन्मति दे भगवान"). Those added lines are not
 * in the traditional text and are not given here; this is the traditional one.
 *
 * Collated Nov 2026 against five typed copies of the traditional four-line text: bhaktibharat.com "Raghupati Raghav Raja Ram"
 * (B, base, with the name Lakshmanacharya), lyricstarana.com (L), bhagwatgeeta.co.in (G), sudhbudh.com (S) and
 * storiesviral.in (T); hindupedia.com "Raghu Pati Rāghava Rājārām" (P, in Roman letters) has the same lines. B, L, G, S and P agree
 * word for word. Readings against the base: "गंगा तुलसी शालग्राम" (B, L, G, S, P "śālagrām") against T "शालिग्राम";
 * "भगत-जनप्रिय सीताराम" (B, L, G, S, P) against "भक्तजन प्रिय" (keylyrics.com); "जानकीरमणा" (B, L, G, S) against T
 * "जानकीरमण". The first couplet is the refrain and is sung after each of the other three; it is written once. Nukta
 * letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanRaghupatiRaghava: Mantra = {
  id: 'bhajan-raghupati-raghava',
  title: 'रघुपति राघव राजा राम',
  titleEn: 'Raghupati Raghava Rajaram (traditional dhun)',
  category: 'aarti',
  order: 46,
  deity: 'Śrī Rāma',
  source: 'Ascribed to Śrī Lakṣmaṇācārya, Nāma Rāmāyaṇa (Sanskrit-Hindi)',
  summary: 'The traditional Ram dhun in its short form, a chain of names of Rama: lord of the Raghus, Raghava, king, purifier of the fallen, Sita\'s Rama, dark as a cloud, beloved of devotees, joy of Janaki. Gandhi\'s later popular version adds lines that are not part of this traditional text.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'This couplet is the refrain, sung after each verse.',
      verses: [
        {
          text: 'रघुपति राघव राजाराम ।\nपतित पावन सीताराम ॥',
          meaning: { en: 'Rama, lord of the Raghu line, Raghava, the king; Sita\'s Rama, purifier of the fallen.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Verses',
      note: 'After each verse the refrain is sung.',
      verses: [
        {
          n: 1,
          text: 'सुन्दर विग्रह मेघश्याम ।\nगंगा तुलसी शालग्राम ॥',
          meaning: { en: 'Beautiful in form, dark as a rain cloud; Ganga, tulasi and the shaligram stone are his.' },
        },
        {
          n: 2,
          text: 'भद्रगिरीश्वर सीताराम ।\nभगत-जनप्रिय सीताराम ॥',
          meaning: { en: 'Sita\'s Rama, lord of Bhadragiri; Sita\'s Rama, dear to the people who love him.' },
        },
        {
          n: 3,
          text: 'जानकीरमणा सीताराम ।\nजयजय राघव सीताराम ॥',
          meaning: { en: 'Sita\'s Rama, the joy of Janaki; victory, victory to Raghava, Sita\'s Rama.' },
        },
      ],
    },
  ],
};
