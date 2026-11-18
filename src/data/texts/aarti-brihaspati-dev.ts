/**
 * Oṃ Jaya Bṛhaspati Devā (Bṛhaspati kī Āratī), the Hindi aarti to Bṛhaspati, the guru of the gods, sung on Thursdays, in Devanagari. The last stanza gives the name Jethanand.
 *
 * Collated Nov 2026 against seven copies: bhaktibharat.com "Shri Brihaspati Dev Ji Ki Aarti" (B, base), shubhpanchang.com (S),
 * hindi.webdunia.com (W), prabhatkhabar.com (P), astrologics.in (R), amarujala.com (U) and neoastro.com (N); festivalhindu.com (F) was read
 * as well. All have the opening and six stanzas in the same order. Readings against the base: "जय बृहस्पति देवा, ॐ जय बृहस्पति
 * देवा" (B, U, N, R, F) against "ॐ जय बृहस्पति देवा, जय बृहस्पति देवा" (S, W, P) as the first line; "बृहस्पति" (S, W, P, U, R, F)
 * against "वृहस्पति" (B, N); "पूरण" (B, S, W, U, N, R) against P "पूर्ण"; "सब संशय हारो" (B, S, U, N) against "तारो" (W, P, R) and F
 * "हारी"; "जेठानन्द आनन्दकर" (B, S, U, N, F) against W and R "जेष्टानंद बंद"; "संतन सुखकारी" (B, S, W, P, U, N) against F "संतान
 * हितकारी"; "प्रेम सहित" (B, S, W, P, R, U, N) against F "सही". Spellings with a joined vowel in B ("लगा‌ऊँ", "को‌ई") are written
 * plainly. The refrain "ॐ जय बृहस्पति देवा, जय बृहस्पति देवा" is sung after every stanza and is written once, with the opening. The
 * closing call to Vishnu and Brihaspati found in B and R is not part of the aarti. Nukta letters are written without the dot.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiBrihaspatiDev: Mantra = {
  id: 'aarti-brihaspati-dev',
  title: 'ॐ जय बृहस्पति देवा आरती',
  titleEn: 'Om Jai Brihaspati Deva Aarti',
  category: 'aarti',
  order: 58,
  deity: 'Śrī Bṛhaspati',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Brihaspati, the guru of the gods, sung on Thursdays. It offers plantain and fruit, calls him the perfect Self, the inner ruler and Lord of the world, asks him to remove sin, doubt and the bonds of rebirth, and promises that whoever sings it with love will surely be blessed.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Om jai Brihaspati deva, jai Brihaspati deva" is sung after each stanza.',
      verses: [
        {
          text: 'जय बृहस्पति देवा, ॐ जय बृहस्पति देवा ।\nछिन छिन भोग लगाऊँ, कदली फल मेवा ॥',
          meaning: { en: 'Victory to Lord Brihaspati. Every moment I offer you food, plantain fruit and dry fruits.' },
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
          text: 'तुम पूरण परमात्मा, तुम अन्तर्यामी ।\nजगतपिता जगदीश्वर, तुम सबके स्वामी ॥',
          meaning: { en: 'You are the perfect Supreme Self and the one who dwells within all hearts. Father of the world, Lord of the world, you are the master of all.' },
        },
        {
          n: 2,
          text: 'चरणामृत निज निर्मल, सब पातक हर्ता ।\nसकल मनोरथ दायक, कृपा करो भर्ता ॥',
          meaning: { en: 'The water that has washed your feet is pure and takes away every sin. You fulfil every wish; be kind to us, our protector.' },
        },
        {
          n: 3,
          text: 'तन मन धन अर्पण कर, जो जन शरण पडे ।\nप्रभु प्रकट तब होकर, आकर द्वार खडे ॥',
          meaning: { en: 'When a person offers body, mind and wealth and comes to you for refuge, the Lord then appears and stands at his door.' },
        },
        {
          n: 4,
          text: 'दीनदयाल दयानिधि, भक्तन हितकारी ।\nपाप दोष सब हर्ता, भव बंधन हारी ॥',
          meaning: { en: 'Kind to the humble, a store of mercy, you do good to your devotees. You take away all sin and fault and free us from the bonds of worldly life.' },
        },
        {
          n: 5,
          text: 'सकल मनोरथ दायक, सब संशय हारो ।\nविषय विकार मिटाओ, संतन सुखकारी ॥',
          meaning: { en: 'You give every wish its fulfilment; remove all our doubts. Wipe out worldly cravings and faults, you who bring joy to the good.' },
        },
        {
          n: 6,
          text: 'जो कोई आरती तेरी, प्रेम सहित गावे ।\nजेठानन्द आनन्दकर, सो निश्चय पावे ॥',
          meaning: { en: 'Whoever sings your aarti with love will surely receive joy, says Jethanand.' },
        },
      ],
    },
  ],
};
