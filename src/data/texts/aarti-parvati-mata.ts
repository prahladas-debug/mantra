/**
 * Jaya Pārvatī Mātā (Pārvatī kī Āratī), the Hindi aarti to Pārvatī, sung on Mangalā Gaurī Tuesdays, Haritālikā Tīja and Gaṅgaur, in Devanagari. Author not named in the copies.
 *
 * Collated Nov 2026 against six copies in two forms of the text. The form taken as base has "अरिकुल पद्म विनाशिनि" in the second stanza and
 * "श्री प्रताप आरती मैया की" at the end; it is in hindi.astroyogi.com (A, base), bhaktvatsal.com (V), hindi.webdunia.com (W),
 * srimandir.com (S) and ilovebhajan.com (I). The other form, with "अरिकुल कंटक नासनि" and "मैया जी की आरती भक्ति भाव से जो नर गाता",
 * is in bhaktibharat.com "Mata Parvati" (B) and vaikunthdham.com (K), and in the sixth stanza has "चरण ध्यान लाता ... तेरी कृपा रहे
 * तो मन नहीं भरमाता" instead of "चित को लाता ... गावत दे दे ताली, मन में रंगराता". The first form has the larger number of
 * copies and is taken. Readings against the base: "देव वधू जस गावत" (A, B, K) against V and S "बंधू", W "वधु जहं" and I "जहाँ";
 * "सिंह को वाहन साजे" (A, V, W, S, B, K) against I "सिंह वाहन साजे शोभित"; "सतयुग रूपशील अतिसुन्दर" (A, V, S, B, K) against W
 * "सतयुग शील सुसुन्दर"; "सखियन संग राता" (A, V, S, K) against B "सखियाँ संगराता"; "हेमांचल" (A, V, W, S) against B "हेमाचंल"; "सहस्र
 * भुजा तनु धरि के" (A, V, W) against "सहस्त्र ... धरिके" (B, K); "सारा जग मदमाता" (A, W, B, K) against V "हाथन मदमाता"; "शुभ फल की
 * दाता" (A, V, W, B, K) against I "शुभ फल सदा दाता" and W "कदा"; "सदा सुखी नित रहता" (A, V, S) against W "रहता"; the opening
 * "जय पार्वती माता" in K and the Gaurī refrain "जय जय गौरी माता" in K are not taken. The refrain "जय पार्वती माता" follows each
 * stanza and the opening is sung again at the end; both are written once. Nukta letters are written without the dot. Meanings are
 * original.
 */
import type { Mantra } from '../types';

export const aartiParvatiMata: Mantra = {
  id: 'aarti-parvati-mata',
  title: 'जय पार्वती माता आरती',
  titleEn: 'Jai Parvati Mata Aarti',
  category: 'aarti',
  order: 59,
  deity: 'Śrī Pārvatī',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Parvati, sung at Mangala Gauri, Hartalika Teej and Gangaur. It praises her as the eternal Brahman-power, mother of the world sung by Hari and Hara, who rides a lion, was born as Sati in the Himalaya, slew Shumbha and Nishumbha, and delights in Shiva; it ends with the promise of lasting happiness to those who sing it.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Jai Parvati Mata" is sung after each stanza.',
      verses: [
        {
          text: 'जय पार्वती माता, जय पार्वती माता ।\nब्रह्म सनातन देवी, शुभ फल की दाता ॥',
          meaning: { en: 'Victory, victory to Mother Parvati, the eternal goddess who is Brahman, the giver of good fruit.' },
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
          text: 'अरिकुल पद्म विनाशिनि, जय सेवक त्राता ।\nजग जीवन जगदम्बा, हरिहर गुण गाता ॥',
          meaning: { en: 'You destroy the lotus-ranks of enemies, and victory to you, protector of your servants. You are the life of the world and its Mother; Hari and Hara sing your virtues.' },
        },
        {
          n: 2,
          text: 'सिंह को वाहन साजे, कुण्डल हैं साथा ।\nदेव वधू जस गावत, नृत्य करत ताथा ॥',
          meaning: { en: 'A lion is your fitting mount and earrings adorn you. The wives of the gods sing your fame and dance with the beat "ta tha".' },
        },
        {
          n: 3,
          text: 'सतयुग रूपशील अतिसुन्दर, नाम सती कहलाता ।\nहेमांचल घर जन्मी, सखियन संग राता ॥',
          meaning: { en: 'In the Satya age you were most beautiful in form and character, and were called Sati. You were born in the house of the Himalaya and delight among your friends.' },
        },
        {
          n: 4,
          text: 'शुम्भ निशुम्भ विदारे, हेमांचल स्थाता ।\nसहस्र भुजा तनु धरि के, चक्र लियो हाथा ॥',
          meaning: { en: 'You tore apart Shumbha and Nishumbha, and you dwell on the Himalaya. Taking a body with a thousand arms, you held the discus in your hand.' },
        },
        {
          n: 5,
          text: 'सृष्टि रूप तुही है जननी, शिवसंग रंगराता ।\nनन्दी भृंगी बीन लही, सारा जग मदमाता ॥',
          meaning: { en: 'You are the mother in the form of creation, and you delight with Shiva. Nandi and Bhringi have taken up the vina, and the whole world is intoxicated with joy.' },
        },
        {
          n: 6,
          text: 'देवन अरज करत हम, चित को लाता ।\nगावत दे दे ताली, मन में रंगराता ॥',
          meaning: { en: 'We, the gods, make our prayer, bringing our minds to you. We sing, clapping our hands, with joy in our hearts.' },
        },
        {
          n: 7,
          text: 'श्री प्रताप आरती मैया की, जो कोई गाता ।\nसदा सुखी नित रहता, सुख सम्पत्ति पाता ॥',
          meaning: { en: 'Whoever sings this aarti of the glorious Mother is always happy and gains happiness and wealth.' },
        },
      ],
    },
  ],
};
