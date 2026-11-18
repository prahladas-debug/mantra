/**
 * Jaya Jaya Tulasī Mātā (Tulasī kī Āratī), the Hindi aarti to Tulasī, sung before the tulsi plant and at Tulasī Vivāha, in Devanagari. Author not named in the copies.
 *
 * Collated Nov 2026 against five copies: bhaktibharat.com "Aarti: Jai Jai Tulsi Mata" (B, base), shubhpanchang.com (S),
 * aajtak.in "Tulsi Ji Ki Aarti" (A), astrologics.in (R) and servdharm.com (V, with a Roman copy). B, S, A and R have the opening
 * and six stanzas in the same order; dharmsaar.com repeats B and is not counted. Readings against the base: "रज से रक्ष करके" (B, A, R)
 * against S "रक्षा"; "सूर बल्ली" (B, A, R) against S "सुर बल्ली", kept as in B; "विष्णुप्रिय" (B, A, R) against S "विष्णुप्रिये";
 * "मैया जय तुलसी माता" (B, A) against S "जय जय तुलसी माता" as the refrain; "सुख-संपति" (B, A, R) against S "संपत्ति"; V has "बिजन".
 * The last two lines "हमारी विपद हरो तुम, कृपा करो माता" are marked "extra" in B but stand in the sixth stanza in S, A and R and are
 * kept. The opening is sung again at the end in all copies and is written once. The refrain "जय तुलसी माता" is sung after every
 * stanza. Doubt: "बटु पुत्री" is read as "daughter of Batu" as the copies have it; its sense is not settled. Nukta letters are
 * written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiTulsiMata: Mantra = {
  id: 'aarti-tulsi-mata',
  title: 'जय जय तुलसी माता आरती',
  titleEn: 'Jai Jai Tulsi Mata Aarti',
  category: 'aarti',
  order: 55,
  deity: 'Śrī Tulasī Mātā',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Mother Tulsi, sung before the tulsi plant and at Tulsi Vivah. It calls her the giver of happiness to the world, dear to Vishnu and worn on Hari\'s head, praised by the three worlds and the saviour of the fallen, and asks her to remove our troubles.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Jai Tulsi Mata" is sung after each stanza.',
      verses: [
        {
          text: 'जय जय तुलसी माता, मैया जय तुलसी माता ।\nसब जग की सुख दाता, सबकी वर माता ॥',
          meaning: { en: 'Victory, victory to Mother Tulsi; victory to Mother Tulsi. You give happiness to the whole world, and you are the best of mothers to all.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain is sung.',
      verses: [
        {
          n: 1,
          text: 'सब योगों से ऊपर, सब रोगों से ऊपर ।\nरज से रक्ष करके, सबकी भव त्राता ॥',
          meaning: { en: 'You are above all yogas and above all diseases. Guarding everyone even with your dust, you save them from the cycle of birth.' },
        },
        {
          n: 2,
          text: 'बटु पुत्री है श्यामा, सूर बल्ली है ग्राम्या ।\nविष्णुप्रिय जो नर तुमको सेवे, सो नर तर जाता ॥',
          meaning: { en: 'You are the dark-hued daughter of Batu, a divine creeper that grows near the village. Beloved of Vishnu, the man who serves you crosses over.' },
        },
        {
          n: 3,
          text: 'हरि के शीश विराजत, त्रिभुवन से हो वंदित ।\nपतित जनों की तारिणी, तुम हो विख्याता ॥',
          meaning: { en: 'You rest on the head of Hari and are praised by the three worlds. You raise the fallen, and that is how you are known.' },
        },
        {
          n: 4,
          text: 'लेकर जन्म विजन में, आई दिव्य भवन में ।\nमानव लोक तुम्हीं से, सुख-संपति पाता ॥',
          meaning: { en: 'You were born in a lonely forest and came to a divine dwelling. The human world gains happiness and wealth through you.' },
        },
        {
          n: 5,
          text: 'हरि को तुम अति प्यारी, श्याम वर्ण सुकुमारी ।\nप्रेम अजब है उनका, तुमसे कैसा नाता ॥\nहमारी विपद हरो तुम, कृपा करो माता ॥',
          meaning: { en: 'You are very dear to Hari, dark-hued and tender. Strange is his love; what a bond he has with you! Remove our troubles and be kind to us, Mother.' },
        },
      ],
    },
  ],
};
