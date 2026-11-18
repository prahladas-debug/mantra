/**
 * Sun Merī Devī Parvatavāsinī (Vindhyeśvarī kī Āratī), the Hindi aarti to Vindhyeśvarī, sung at Navarātri; bhaktibharat.com says it is also used for Hiṅglāj Mātā and Maihar, in Devanagari. Folk aarti, author not named; a devotee Dhyānū Bhagat is named in the last stanza.
 *
 * Collated Nov 2026 against seven copies: bhaktibharat.com "Vindhyeshwari Aarti: Sun Meri Devi Parvatvasani" (B, base),
 * hamarivirasat.com "Maihar Wali Mata Aarti" (H), dharmsaar.com (D), bhaktibhawna.com (N), bhaktitak.com "मूल आरती" (T),
 * journeyoftemple.com (J) and astrologics.in (A); bhaktitak.com also gives a longer first version with a stanza "ब्रह्मा वेद पढ़े
 * तेरे द्वारे, शंकर ध्यान लगाया", found nowhere else and not given here. B, H, T, J and A have the opening and seven stanzas in the
 * same order; D and N repeat B. Readings against the base: "पर्वतवासिनी" (T, J, A) against "पर्वतवासनी" (B, H, D, N), taken as the
 * standard form and as in the title of the aarti; "कोई तेरा पार ना पाया" without the final "माँ" (H, T, J) against B, D, N;
 * "भेंट चढ़ाया" (H, T, D) against B "चढ़ायो माँ" and J "भेट"; "नंगे पग माँ अकबर आया" (T, J, B, H); "ऊँचे पर्वत बन्यो देवालय"
 * (T, J) against B and H "बनयो देवालाया", D "ऊंचे ऊंचे पर्वत भयो देवालय" and A "बन्यो दिवालो"; "सतयुग, द्वापर, त्रेता मध्ये" (T, J,
 * H) against D "त्रेता, द्वापर"; "गुण गाया" (B, H, T, N) against "गुण गावैं" (D, J, A); "नैवेद्य" (J, A) against "नैवैध्य" (B, H, D, N) and T "नवैद्य";
 * "सतयुग" (T, J) against "सत्युग" (B, H, N). "सुवा चोली" is in every copy and is kept; its sense is unsettled. The two-line refrain is sung before the first
 * stanza and after every stanza and is written once, with the opening. Nukta letters are written without the dot. Meanings are
 * original.
 */
import type { Mantra } from '../types';

export const aartiVindhyeshwari: Mantra = {
  id: 'aarti-vindhyeshwari',
  title: 'सुन मेरी देवी पर्वतवासिनी आरती',
  titleEn: 'Sun Meri Devi Parvatvasini Aarti',
  category: 'aarti',
  order: 60,
  deity: 'Śrī Vindhyeśvarī (Vindhyavāsinī)',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Vindhyeshwari, the Mother of the mountain, sung at Navratri. It says no one has found her limit, lists the betel, areca nut, flag and coconut offered, tells how even Akbar came barefoot and gave a golden canopy, and ends with the devotee Dhyanu Bhagat receiving the fruit he wished for.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The two-line refrain is sung after each stanza.',
      verses: [
        {
          text: 'सुन मेरी देवी पर्वतवासिनी ।\nकोई तेरा पार ना पाया ॥',
          meaning: { en: 'Listen, my goddess who lives on the mountain: no one has found your limit.' },
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
          text: 'पान सुपारी ध्वजा नारियल ।\nले तेरी भेंट चढाया ॥',
          meaning: { en: 'Betel leaf, areca nut, a flag and a coconut: I have brought them and offered them to you.' },
        },
        {
          n: 2,
          text: 'सुवा चोली तेरी अंग विराजे ।\nकेसर तिलक लगाया ॥',
          meaning: { en: 'A choli (blouse) adorns your body and a saffron mark is put on your forehead. (The word suva is unclear in the copies.)' },
        },
        {
          n: 3,
          text: 'नंगे पग माँ अकबर आया ।\nसोने का छत्र चढाया ॥',
          meaning: { en: 'Barefoot, Mother, Akbar came to you and offered a canopy of gold.' },
        },
        {
          n: 4,
          text: 'ऊँचे पर्वत बन्यो देवालय ।\nनीचे शहर बसाया ॥',
          meaning: { en: 'A temple was raised on the high mountain and a town was settled below.' },
        },
        {
          n: 5,
          text: 'सतयुग, द्वापर, त्रेता मध्ये ।\nकलियुग राज सवाया ॥',
          meaning: { en: 'Among the Satya, Dvapara and Treta ages, in the Kali age your rule is greater by a quarter.' },
        },
        {
          n: 6,
          text: 'धूप दीप नैवेद्य आरती ।\nमोहन भोग लगाया ॥',
          meaning: { en: 'With incense, lamp, food offering and aarti, I have offered you the sweet mohan bhog.' },
        },
        {
          n: 7,
          text: 'ध्यानू भगत मैया तेरे गुण गाया ।\nमनवांछित फल पाया ॥',
          meaning: { en: 'The devotee Dhyanu sang your virtues, Mother, and received the fruit he wished for.' },
        },
      ],
    },
  ],
};
