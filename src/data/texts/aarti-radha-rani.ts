/**
 * Āratī Śrī Vṛṣabhānusutā Kī, the Hindi aarti to Śrī Rādhā, daughter of Vṛṣabhānu, sung in the temples of Braj and on Rādhāṣṭamī, in Devanagari. Author not named in the copies.
 *
 * Collated Nov 2026 against five copies: bhaktibharat.com "Aarti Shri Vrishabhanusuta Ki - Radha Aarti" (B, base),
 * shubhpanchang.com (S), bhaktvatsal.com (V), timesnowhindi.com (T) and astrologics.in (A). The opening couplet and four stanzas
 * are the same in B, S, V and T; A gives the same stanzas but puts "कृष्णात्मिका" before "संतत सेव्य". Readings against the base:
 * "दुखनिवारिणि" (B) against "दुःख" (S, V); "अविरलप्रेम" (B, S) against "अविरल प्रेम" (V, T, A); "दिव्यगुन" (B, S, V) against
 * "दिव्यगुण" (T, A); "सत मुनि" (B, S, T, A) against V "संत"; "चिन्मयवृन्दा" (B, S) against "चिन्मय वृन्दा" (V, T, A); "सम्पति"
 * (B, S) against V, T, A "संपति". The refrain "आरती श्री वृषभानुसुता की" follows each stanza (B and S) and the opening couplet is sung
 * again at the end; both are written once. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiRadhaRani: Mantra = {
  id: 'aarti-radha-rani',
  title: 'आरती श्री वृषभानुसुता की',
  titleEn: 'Aarti Shri Vrishabhanusuta Ki',
  category: 'aarti',
  order: 54,
  deity: 'Śrī Rādhā (Vṛṣabhānusutā)',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Radha, daughter of Vrishabhanu, sung in Braj and on Radha Ashtami. It praises her as the remover of the threefold suffering, the charmer of Krishna, his constant companion and the primal power, and as the dear friend of Lalita.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Aarti Shri Vrishabhanusuta ki" is sung after each stanza.',
      verses: [
        {
          text: 'आरती श्री वृषभानुसुता की ।\nमंजुल मूर्ति मोहन ममता की ॥',
          meaning: { en: 'Sing the aarti of the daughter of Vrishabhanu, the lovely form of Mohan\'s own tenderness.' },
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
          text: 'त्रिविध तापयुत संसृति नाशिनि ।\nविमल विवेकविराग विकासिनि ॥\nपावन प्रभु पद प्रीति प्रकाशिनि ।\nसुन्दरतम छवि सुन्दरता की ॥',
          meaning: { en: 'She destroys the threefold suffering of the world, brings out pure discernment and detachment, and lights up love for the holy feet of the Lord. Her form is the most beautiful of all beauty.' },
        },
        {
          n: 2,
          text: 'मुनि मन मोहन मोहन मोहनि ।\nमधुर मनोहर मूरति सोहनि ॥\nअविरलप्रेम अमिय रस दोहनि ।\nप्रिय अति सदा सखी ललिता की ॥',
          meaning: { en: 'She enchants Mohan himself, who enchants the minds of sages. Her form is sweet and lovely, and she draws out the nectar of unbroken love. She is always very dear to her friend Lalita.' },
        },
        {
          n: 3,
          text: 'संतत सेव्य सत मुनि जनकी ।\nआकर अमित दिव्यगुन गनकी ॥\nआकर्षिणी कृष्ण तन मनकी ।\nअति अमूल्य सम्पति समता की ॥',
          meaning: { en: 'She is always served by truthful sages and is a mine of countless divine qualities. She draws the body and mind of Krishna, and she is a priceless wealth of evenness of mind.' },
        },
        {
          n: 4,
          text: 'कृष्णात्मिका, कृष्ण सहचारिणि ।\nचिन्मयवृन्दा विपिन विहारिणि ॥\nजगजननि जग दुखनिवारिणि ।\nआदि अनादिशक्ति विभुता की ॥',
          meaning: { en: 'She is the very self of Krishna and his constant companion, full of consciousness, roaming the forest of Vrinda. Mother of the world, remover of the world\'s sorrow, she is the primal power, without beginning, and the greatness of all.' },
        },
      ],
    },
  ],
};
