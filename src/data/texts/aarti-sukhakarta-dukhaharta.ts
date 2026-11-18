/**
 * Sukhakarta Dukhaharta ("Jai Dev Jai Dev"), the Marathi Ganesha aarti of Samartha Ramadasa (17th century), in Devanagari. The third stanza names
 * "Rama's servant" (Ramadasa).
 *
 * Collated Nov 2026 against three typed copies: shubhpanchang.com (S), drikpanchang.com "Ganapati Sukhakarta Dukhaharta Aarti" (D)
 * and bhaktibharat.com "Shri Siddhivinayak Aarti" (B). The three agree apart from spelling: "कंठी झळके" (S, B) / "कण्ठी" (D),
 * "हिरेजडित" (S) / "हिरे जडित" (D, B), "सरळ सोंड" (all). The refrain "जय देव जय देव जय मंगलमूर्ती । दर्शनमात्रे मनकामना पुरती" is sung after
 * every stanza and is given once, as the opening. B adds the Hindi "शेंदुर लाल चढ़ायो" aarti after this; it is given as its own text.
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiSukhakartaDukhaharta: Mantra = {
  id: 'aarti-sukhakarta-dukhaharta',
  title: 'सुखकर्ता दुःखहर्ता गणेश आरती',
  titleEn: 'Sukhakarta Dukhaharta (Ganesha Aarti)',
  category: 'aarti',
  order: 8,
  deity: 'Śrī Gaṇeśa',
  source: 'Samartha Rāmadāsa (17th century), Marathi',
  summary: 'The Marathi aarti of Ganapati by Samartha Ramadasa, the signature aarti of Ganeshotsav and of every Maharashtrian home puja. It praises the giver of joy and remover of sorrow, smeared with vermilion and wearing a pearl garland, with a jewelled crown and tinkling anklets, the three-eyed, curved-trunk, big-bellied lord, and asks him to come at times of trouble.',
  summaryKn: 'ಸಮರ್ಥ ರಾಮದಾಸರು ರಚಿಸಿದ ಗಣಪತಿಯ ಮರಾಠಿ ಆರತಿ; ಗಣೇಶೋತ್ಸವ ಮತ್ತು ಪ್ರತಿ ಮರಾಠಿ ಮನೆಯ ಪೂಜೆಯ ಗುರುತು. ಸುಖ ನೀಡುವ, ದುಃಖ ಹರಿಸುವ, ಸಿಂಧೂರ ಲೇಪಿತ, ಮುತ್ತಿನ ಮಾಲೆ, ರತ್ನ ಕಿರೀಟ, ಗೆಜ್ಜೆ ಧರಿಸಿದ, ಮೂರು ಕಣ್ಣಿನ, ವಕ್ರತುಂಡ, ಲಂಬೋದರನನ್ನು ಹೊಗಳಿ ಸಂಕಟದಲ್ಲಿ ಬಂದು ಕಾಪಾಡೆಂದು ಬೇಡುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain, sung after each stanza.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಹಾಡುವ ಪಲ್ಲವಿ.',
      verses: [
        {
          text: 'जय देव जय देव जय मंगलमूर्ती ।\nदर्शनमात्रे मनकामना पुरती ॥',
          meaning: { en: 'Victory, victory to the auspicious image; at the mere sight of him the wishes of the heart are fulfilled.', kn: 'ಮಂಗಲಮೂರ್ತಿಗೆ ಜಯ ಜಯ; ದರ್ಶನಮಾತ್ರದಿಂದ ಮನದ ಕಾಮನೆಗಳು ಈಡೇರುತ್ತವೆ.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'सुखकर्ता दुःखहर्ता वार्ता विघ्नाची ।\nनुरवी पुरवी प्रेम कृपा जयाची ॥\nसर्वांगी सुंदर उटी शेंदुराची ।\nकंठी झळके माळ मुक्ताफळांची ॥',
          meaning: { en: 'Giver of joy, remover of sorrow, whose very word ends obstacles; the one on whose love and grace no lack remains and every wish is filled. His whole body is beautiful with a coat of vermilion, and a garland of pearls gleams at his neck.', kn: 'ಸುಖ ನೀಡುವವನು, ದುಃಖ ಹರಿಸುವವನು, ವಿಘ್ನಗಳ ಸುದ್ದಿಯನ್ನೇ ಅಳಿಸುವವನು; ಯಾರ ಪ್ರೇಮ ಕೃಪೆಯಿಂದ ಕೊರತೆ ಉಳಿಯದೆ ಎಲ್ಲವೂ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಅವನು. ಸರ್ವಾಂಗದಲ್ಲಿ ಸಿಂಧೂರ ಲೇಪನ ಸುಂದರ; ಕೊರಳಲ್ಲಿ ಮುತ್ತಿನ ಮಾಲೆ ಹೊಳೆಯುತ್ತದೆ.' },
        },
        {
          n: 2,
          text: 'रत्नखचित फरा तुज गौरीकुमरा ।\nचंदनाची उटी कुंकुमकेशरा ॥\nहिरेजडित मुकुट शोभतो बरा ।\nरुणझुणती नूपुरे चरणी घागरिया ॥',
          meaning: { en: 'Jewel-studded is your adornment, son of Gauri; sandal paste, kumkum and saffron anoint you. A diamond-set crown suits you well, and anklets and bells tinkle at your feet.', kn: 'ಗೌರೀಕುಮಾರನೇ, ರತ್ನಖಚಿತ ಅಲಂಕಾರ ನಿನ್ನದು; ಚಂದನ, ಕುಂಕುಮ, ಕೇಸರಿಯ ಲೇಪನ. ವಜ್ರ ಖಚಿತ ಕಿರೀಟ ಚೆನ್ನಾಗಿ ಶೋಭಿಸುತ್ತದೆ; ಪಾದಗಳಲ್ಲಿ ಗೆಜ್ಜೆ ಘಲ್ಲೆನ್ನುತ್ತದೆ.' },
        },
        {
          n: 3,
          text: 'लंबोदर पीतांबर फणिवरबंधना ।\nसरळ सोंड वक्रतुंड त्रिनयना ॥\nदास रामाचा वाट पाहे सदना ।\nसंकटी पावावे निर्वाणी रक्षावे सुरवरवंदना ॥',
          meaning: { en: 'Big-bellied, in yellow silk, a great serpent tied round you; straight trunk, curved tusk, three eyes. Rama\'s servant waits for you at his house: come in trouble, protect in the final hour, you who are adored by the best of gods.', kn: 'ಲಂಬೋದರ, ಪೀತಾಂಬರಧಾರಿ, ಮಹಾಸರ್ಪವನ್ನು ಕಟ್ಟಿಕೊಂಡವನು; ನೇರ ಸೊಂಡಿಲು, ವಕ್ರತುಂಡ, ತ್ರಿನೇತ್ರ. ರಾಮದಾಸ ನಿನ್ನ ಮನೆಯಲ್ಲಿ ನಿನ್ನ ಬರುವಿಕೆಗೆ ಕಾಯುತ್ತಾನೆ; ಸಂಕಟದಲ್ಲಿ ಬಂದು ಕಾಪಾಡು, ಅಂತ್ಯಕಾಲದಲ್ಲಿ ರಕ್ಷಿಸು, ದೇವತೆಗಳಿಂದ ವಂದಿತನೇ.' },
        },
      ],
    },
  ],
};
