/**
 * Ṭhumaka Calata Rāmacandra, the bhajan on the child Rāma walking in his anklets, in Devanagari. Attributed to Tulasīdāsa
 * (the last stanza has his name); it is widely sung in Hindi and is said to belong to the Gītāvalī. None of the copies
 * below names the work or a pada number, and the Gītāvalī place is not checked here.
 *
 * Collated Nov 2026 against four typed copies: kavitakosh.org "ठुमक चलत रामचंद्र बाजत पैंजनियां / भजन" (K, base),
 * en.wikipedia.org "Thumak Chalat Ram Chandra", Original Hindi lyrics (W), the University of Washington Manifold song note
 * "Ṭhumaka Calata Rāmacandra" by Anoushka Dalvi (M) and bhaktibharat.com "Thumak Chalat Ramchandra" (B, the sung form, with
 * repeated lines). The four stanzas agree word for word in all four; the differences are only in the nasal mark
 * ("पैंजनियाँ" in W against "पैंजनियां" in K, M, B, "रनियाँ", "बचनियाँ", "लटकनियाँ", "बनियाँ" likewise) and in "देखके"
 * (W) against "देख के" (K, M, B). The form with the chandrabindu is written. B's repeats of lines are the singer's and are
 * not copied. The opening line is the refrain and is sung after each stanza; it is written once. Nukta letters are written
 * without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanThumakChalat: Mantra = {
  id: 'bhajan-thumak-chalat',
  title: 'ठुमक चलत रामचंद्र बाजत पैंजनियाँ',
  titleEn: 'Thumak Chalat Ramachandra (Tulsidas)',
  category: 'aarti',
  order: 42,
  deity: 'Śrī Rāma',
  source: 'Attributed to Tulasīdāsa, Gītāvalī (Awadhi/Braj Bhasha)',
  summary: 'A bhajan on the child Rama taking his first steps, his anklets sounding. He laughs, runs, and falls; Kausalya picks him up and brushes the dust off, and the poet looks at his coral lips and the ring that swings from his nose. Tulsidas ends by saying that Rama\'s beauty can be compared only with itself.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The first line is the refrain, sung after each stanza.',
      verses: [
        {
          text: 'ठुमक चलत रामचंद्र बाजत पैंजनियाँ ॥',
          meaning: { en: 'Ramachandra walks with little dancing steps, and his anklets jingle.' },
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
          text: 'किलकि किलकि उठत धाय गिरत भूमि लटपटाय ।\nधाय मात गोद लेत दशरथ की रनियाँ ॥',
          meaning: { en: 'Laughing and crowing he gets up and runs, and falls to the ground, tottering. The mother, Dasharatha\'s queen, runs and takes him into her lap.' },
        },
        {
          n: 2,
          text: 'अंचल रज अंग झारि विविध भांति सो दुलारि ।\nतन मन धन वारि वारि कहत मृदु बचनियाँ ॥',
          meaning: { en: 'With the end of her sari she brushes the dust from his limbs and fondles him in many ways. Offering up body, mind and wealth for him again and again, she speaks soft words.' },
        },
        {
          n: 3,
          text: 'विद्रुम से अरुण अधर बोलत मुख मधुर मधुर ।\nसुभग नासिका में चारु लटकत लटकनियाँ ॥',
          meaning: { en: 'His red lips are like coral, and sweet, sweet is the speech from his mouth. On his shapely nose a pretty little ring hangs and sways.' },
        },
        {
          n: 4,
          text: 'तुलसीदास अति आनंद देख के मुखारविंद ।\nरघुवर छबि के समान रघुवर छबि बनियाँ ॥',
          meaning: { en: 'Tulsidas is filled with great joy at seeing that lotus face. The beauty of Raghuvara is like nothing but the beauty of Raghuvara himself.' },
        },
      ],
    },
  ],
};
