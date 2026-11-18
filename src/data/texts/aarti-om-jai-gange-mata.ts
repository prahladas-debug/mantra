/**
 * Om Jaya Gange Mata, the Hindi aarti to Ganga sung at the river's ghats and on Ganga Dashahara, in Devanagari. The author is not
 * known.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com "Shri Ganga Maiya Ji" (B) and shubhpanchang.com "Om Jai Gange
 * Mata" (S). The four stanzas agree apart from spelling and a few words: "सेवक वही सहज में" (S) against "दास वही सहज में" (B);
 * "एक बार" (S) against "एक ही बार" (B); "कृपा दृष्टि हो तुम्हारी" (S) against "कृपा दृष्टि तुम्हारी" (B); "चंद्र-सी ज्योति" (S)
 * against "चंद्र सी जोत" (B); the S wording is kept. B also prints an opening Sanskrit verse "नमामि गंगे तव पाद पंकजम्" and a
 * refrain "हर हर गंगे, जय माँ गंगे"; they are not in S and are left out. The refrain "ॐ जय गंगे माता" is sung after every
 * stanza and is given once, as the opening. Stanzas are given two to a verse. Nukta letters are written without the dot.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiOmJaiGangeMata: Mantra = {
  id: 'aarti-om-jai-gange-mata',
  title: 'ॐ जय गंगे माता आरती',
  titleEn: 'Om Jai Gange Mata Aarti',
  category: 'aarti',
  order: 4,
  deity: 'Śrī Gaṅgā',
  source: 'Traditional Hindi aarti (author not known)',
  summary: 'The Hindi aarti to Mother Ganga, sung at the evening aarti on the ghats of Haridwar and Varanasi. It praises the river with moonlike light and pure water, who carried the sons of Sagara across, whose refuge frees a man from the fear of Yama, and says that whoever sings it daily attains liberation.',
  summaryKn: 'ಹರಿದ್ವಾರ, ಕಾಶಿಯ ಘಾಟ್‌ಗಳಲ್ಲಿ ಸಂಜೆ ಹಾಡುವ ಗಂಗಾಮಾತೆಯ ಹಿಂದಿ ಆರತಿ. ಚಂದ್ರನ ಕಾಂತಿ, ನಿರ್ಮಲ ಜಲದ ಗಂಗೆ, ಸಗರಪುತ್ರರನ್ನು ಉದ್ಧರಿಸಿದವಳು, ಶರಣು ಬಂದವನ ಯಮಭಯ ಕಳೆಯುವವಳು ಎಂದು ಹೊಗಳಿ, ನಿತ್ಯ ಹಾಡುವವನಿಗೆ ಮುಕ್ತಿ ಎನ್ನುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain, sung after each verse.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಹಾಡುವ ಪಲ್ಲವಿ.',
      verses: [
        {
          text: 'ॐ जय गंगे माता, मैया जय गंगे माता ।\nजो नर तुमको ध्याता, मनवांछित फल पाता ॥',
          meaning: { en: 'Om, victory to Mother Ganga, victory to Mother Ganga. The man who meditates on you gets the fruit he wishes.', kn: 'ಓಂ, ಗಂಗಾಮಾತೆಗೆ ಜಯ, ಮಾತೆ ಗಂಗೆಗೆ ಜಯ. ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುವವನು ಬಯಸಿದ ಫಲ ಪಡೆಯುತ್ತಾನೆ.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each verse the refrain is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'चन्द्र-सी ज्योति तुम्हारी, जल निर्मल आता ।\nशरण पड़े जो तेरी, सो नर तर जाता ॥\nपुत्र सगर के तारे, सब जग को ज्ञाता ।\nकृपा दृष्टि हो तुम्हारी, त्रिभुवन सुख दाता ॥',
          meaning: { en: 'Your light is like the moon and your waters flow pure; the man who falls at your refuge crosses over. You saved the sons of Sagara, as the whole world knows; with your gracious glance you give happiness in the three worlds.', kn: 'ನಿನ್ನ ಕಾಂತಿ ಚಂದ್ರನಂತೆ, ಜಲ ನಿರ್ಮಲವಾಗಿ ಹರಿಯುತ್ತದೆ; ನಿನ್ನ ಶರಣು ಬಂದ ಮನುಷ್ಯ ಭವ ದಾಟುತ್ತಾನೆ. ಸಗರಪುತ್ರರನ್ನು ಉದ್ಧರಿಸಿದೆ, ಇದು ಜಗತ್ತಿಗೆ ತಿಳಿದದ್ದು; ನಿನ್ನ ಕೃಪಾದೃಷ್ಟಿಯಿಂದ ಮೂರು ಲೋಕಗಳಿಗೆ ಸುಖ ನೀಡುವೆ.' },
        },
        {
          n: 2,
          text: 'एक बार जो प्राणी, शरण तेरी आता ।\nयम की त्रास मिटाकर, परमगति पाता ॥\nआरती मातु तुम्हारी, जो नर नित गाता ।\nसेवक वही सहज में, मुक्ति को पाता ॥',
          meaning: { en: 'Whoever comes to your refuge even once has the terror of Yama wiped away and reaches the highest state. The man who sings your aarti every day, that servant, easily gains liberation.', kn: 'ಒಮ್ಮೆ ನಿನ್ನ ಶರಣು ಬಂದ ಪ್ರಾಣಿ ಯಮಭಯ ಕಳೆದು ಪರಮಗತಿ ಪಡೆಯುತ್ತಾನೆ. ತಾಯಿ, ನಿನ್ನ ಆರತಿಯನ್ನು ನಿತ್ಯ ಹಾಡುವ ಆ ಸೇವಕ ಸುಲಭವಾಗಿ ಮುಕ್ತಿ ಪಡೆಯುತ್ತಾನೆ.' },
        },
      ],
    },
  ],
};
