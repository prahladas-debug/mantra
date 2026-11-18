/**
 * Oṃ Jaya Śrī Śyāma Hare (Khāṭū Śyāma kī Āratī), the Hindi aarti to Śrī Śyāma of Khāṭū in Rajasthan, in Devanagari. Folk aarti, author not named.
 *
 * Collated Nov 2026 against five copies: bhaktibharat.com "Khatu Shyam Aarti" (B, base), shubhpanchang.com "Om Jai Shri
 * Shyam Hare" (S), aajtak.in "Khatu Shyam Ji Ki Aarti" (A), divineaarti.com (D) and janbhakti.com (J). B, A, D and J have the opening
 * and seven stanzas in the same order; J, A and others write the last two lines as the closing stanza. Readings against the base:
 * "सिर पर मुकुट" (S) against "सिर पार मुकुट" (B, A, D, J), put right as a shared slip; "घुरे" (B, A, D, J) against S "धुरे";
 * "घडियावल" (B, A, D, J) against S "घड़ियावल"; "चंवर" (B, A, D, J) against S "चँवर"; "कहत भक्त-जन" (B, A, J) against S, D "भक्त जन".
 * S has one more stanza, "तन मन धन सब कुछ है तेरा ... तेरा तुझको अर्पण, क्या लागे मेरा", found in no other copy and not given here.
 * A shorter version in prophet666.com ("प्रभु जय श्री श्याम हरे", signed "गावल दासमनोहर") is a different recension and is not used.
 * The refrain of two lines is sung before the first stanza and after every stanza and the opening is sung again at the end;
 * both are written once. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiKhatuShyam: Mantra = {
  id: 'aarti-khatu-shyam',
  title: 'ॐ जय श्री श्याम हरे आरती',
  titleEn: 'Om Jai Shri Shyam Hare Aarti',
  category: 'aarti',
  order: 56,
  deity: 'Śrī Khāṭū Śyāma',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Shri Shyam, worshipped at Khatu in Rajasthan. It describes him on a jewelled throne with a saffron robe and flower garland, the offerings of sweets, incense and lamps, the cymbals and drums, and says that those who meditate on him are freed from all sorrow.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The two-line refrain "Om jai Shri Shyam hare, Baba jai Shri Shyam hare" is sung after each stanza.',
      verses: [
        {
          text: 'ॐ जय श्री श्याम हरे, बाबा जय श्री श्याम हरे ।\nखाटू धाम विराजत, अनुपम रूप धरे ॥',
          meaning: { en: 'Victory to Shri Shyam Hare; victory, Baba, to Shri Shyam Hare. You dwell at Khatu Dham, taking a matchless form.' },
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
          text: 'रतन जडित सिंहासन, सिर पर चंवर ढुरे ।\nतन केसरिया बागो, कुण्डल श्रवण पडे ॥',
          meaning: { en: 'You sit on a throne set with jewels and a fan is waved over your head. Your body is in a saffron robe and earrings hang at your ears.' },
        },
        {
          n: 2,
          text: 'गल पुष्पों की माला, सिर पर मुकुट धरे ।\nखेवत धूप अग्नि पर, दीपक ज्योति जले ॥',
          meaning: { en: 'A garland of flowers is at your neck and a crown on your head. Incense is offered on the fire and the flame of the lamp burns.' },
        },
        {
          n: 3,
          text: 'मोदक खीर चूरमा, सुवरण थाल भरे ।\nसेवक भोग लगावत, सेवा नित्य करे ॥',
          meaning: { en: 'Golden plates are filled with modak, kheer and churma. Your servants offer the food and serve you every day.' },
        },
        {
          n: 4,
          text: 'झांझ कटोरा और घडियावल, शंख मृदंग घुरे ।\nभक्त आरती गावे, जय-जयकार करे ॥',
          meaning: { en: 'Cymbals, small bowl-gongs and gongs sound, and conch and drums resound. Devotees sing the aarti and shout your praise.' },
        },
        {
          n: 5,
          text: 'जो ध्यावे फल पावे, सब दुःख से उबरे ।\nसेवक जन निज मुख से, श्री श्याम-श्याम उचरे ॥',
          meaning: { en: 'Whoever meditates on you gains the fruit and rises above all sorrow. Your servants speak "Shri Shyam, Shyam" with their own mouths.' },
        },
        {
          n: 6,
          text: 'श्री श्याम बिहारी जी की आरती, जो कोई नर गावे ।\nकहत भक्त-जन, मनवांछित फल पावे ॥',
          meaning: { en: 'Whoever sings this aarti of Shri Shyam Bihari, say the devotees, gains the fruit he desires.' },
        },
        {
          n: 7,
          text: 'जय श्री श्याम हरे, बाबा जी श्री श्याम हरे ।\nनिज भक्तों के तुमने, पूरण काज करे ॥',
          meaning: { en: 'Victory to Shri Shyam Hare, Baba. You have fulfilled the work of your own devotees.' },
        },
      ],
    },
  ],
};
