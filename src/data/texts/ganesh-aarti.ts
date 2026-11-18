/**
 * Jaya Gaṇeśa Devā (Śrī Gaṇeśa kī Āratī), Hindi, in Devanagari. The signature "Sūra" names the poet in the tradition (Sūradāsa),
 * but this is not certain.
 *
 * Collated Nov 2026 against three typed copies: bhaktibharat.com (B), mahakavya.com (M) and
 * shubhpanchang.com (S). The three agree in all lines but one: stanza 2 "पान चढ़े फल चढ़े" (B, M) against
 * "पान चढ़े फूल चढ़े" (S); "फल" is kept. B marks the last stanza "दीनन की लाज रखो" as an addition; it is in all four copies and is
 * given as an extra stanza. The refrain "जय गणेश जय गणेश, जय गणेश देवा । माता जाकी पार्वती, पिता महादेवा" is sung
 * after every stanza and is given once, as the opening. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const ganeshAarti: Mantra = {
  id: 'ganesh-aarti',
  title: 'जय गणेश देवा आरती',
  titleEn: 'Jai Ganesh Deva Aarti',
  category: 'aarti',
  order: 27,
  deity: 'Śrī Gaṇeśa',
  source: 'Traditional Hindi aarti, with the signature "Sūra"',
  summary: 'The Hindi aarti to Ganesha sung at the start of nearly every puja and on Ganesh Chaturthi. It praises the one-tusked, four-armed lord with vermilion on his forehead who rides a mouse, lists the betel leaf, fruit, dry fruit and laddus offered to him, and says he gives sight to the blind, a healthy body to the sick, a child to the childless and wealth to the poor.',
  summaryKn: 'ಬಹುತೇಕ ಪ್ರತಿ ಪೂಜೆಯ ಆರಂಭದಲ್ಲಿ ಮತ್ತು ಗಣೇಶ ಚತುರ್ಥಿಯಂದು ಹಾಡುವ ಹಿಂದಿ ಗಣೇಶ ಆರತಿ. ಏಕದಂತ, ನಾಲ್ಕು ಕೈಗಳ, ಹಣೆಯಲ್ಲಿ ಸಿಂಧೂರ ಧರಿಸಿ ಇಲಿಯ ಮೇಲೆ ಸವಾರಿ ಮಾಡುವ ದೇವನನ್ನು ಹೊಗಳಿ, ವೀಳ್ಯ, ಹಣ್ಣು, ಒಣಹಣ್ಣು, ಲಡ್ಡುಗಳ ನೈವೇದ್ಯವನ್ನು ಹೇಳಿ, ಅವನು ಕುರುಡರಿಗೆ ಕಣ್ಣು, ರೋಗಿಗೆ ದೇಹಾರೋಗ್ಯ, ಬಂಜೆಗೆ ಮಗು, ಬಡವರಿಗೆ ಸಂಪತ್ತು ಕೊಡುತ್ತಾನೆ ಎನ್ನುತ್ತದೆ.',
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
          text: 'जय गणेश जय गणेश, जय गणेश देवा ।\nमाता जाकी पार्वती, पिता महादेवा ॥',
          meaning: { en: 'Victory to Ganesha, victory to Ganesha, victory to Lord Ganesha, whose mother is Parvati and whose father is Mahadeva.', kn: 'ಗಣೇಶನಿಗೆ ಜಯ, ಗಣೇಶನಿಗೆ ಜಯ, ದೇವ ಗಣೇಶನಿಗೆ ಜಯ; ಅವನ ತಾಯಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ.' },
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
          text: 'एक दंत दयावंत, चार भुजा धारी ।\nमाथे सिन्दूर सोहे, मूसे की सवारी ॥',
          meaning: { en: 'One-tusked and merciful, bearing four arms, with vermilion shining on his forehead, he rides on a mouse.', kn: 'ಏಕದಂತ, ದಯಾಳು, ನಾಲ್ಕು ತೋಳುಗಳನ್ನು ಧರಿಸಿದವನು; ಹಣೆಯಲ್ಲಿ ಸಿಂಧೂರ ಶೋಭಿಸುತ್ತದೆ, ಇಲಿಯ ಮೇಲೆ ಸವಾರಿ.' },
        },
        {
          n: 2,
          text: 'पान चढ़े फल चढ़े, और चढ़े मेवा ।\nलड्डुअन का भोग लगे, संत करें सेवा ॥',
          meaning: { en: 'Betel leaf is offered, fruit is offered, and dry fruits too; laddus are presented as food, and the saints serve him.', kn: 'ವೀಳ್ಯ ಏರುತ್ತದೆ, ಹಣ್ಣು ಏರುತ್ತದೆ, ಒಣಹಣ್ಣೂ ಏರುತ್ತದೆ; ಲಡ್ಡುಗಳ ನೈವೇದ್ಯ ಆಗುತ್ತದೆ, ಸಂತರು ಸೇವೆ ಮಾಡುತ್ತಾರೆ.' },
        },
        {
          n: 3,
          text: 'अंधन को आंख देत, कोढ़िन को काया ।\nबांझन को पुत्र देत, निर्धन को माया ॥',
          meaning: { en: 'He gives eyes to the blind, a healthy body to the leper, a child to the childless, and wealth to the poor.', kn: 'ಕುರುಡರಿಗೆ ಕಣ್ಣು, ಕುಷ್ಠರೋಗಿಗೆ ಆರೋಗ್ಯದೇಹ, ಬಂಜೆಗೆ ಮಗು, ಬಡವರಿಗೆ ಸಂಪತ್ತನ್ನು ಅವನು ಕೊಡುತ್ತಾನೆ.' },
        },
        {
          n: 4,
          text: '\'सूर\' श्याम शरण आए, सफल कीजे सेवा ।\nमाता जाकी पार्वती, पिता महादेवा ॥',
          meaning: { en: 'Sur Shyam has come to your refuge; make my service fruitful. His mother is Parvati and his father Mahadeva.', kn: 'ಸೂರ್ ಶ್ಯಾಮ ನಿನ್ನ ಶರಣು ಬಂದಿದ್ದಾನೆ; ಸೇವೆಯನ್ನು ಸಫಲಗೊಳಿಸು. ಅವನ ತಾಯಿ ಪಾರ್ವತಿ, ತಂದೆ ಮಹಾದೇವ.' },
        },
      ],
    },
    {
      title: 'अतिरिक्त पद',
      titleEn: 'Extra stanza',
      note: 'Printed as an addition in some copies.',
      noteKn: 'ಕೆಲವು ಪ್ರತಿಗಳಲ್ಲಿ ಹೆಚ್ಚುವರಿಯಾಗಿ ಇರುವ ಪದ್ಯ.',
      verses: [
        {
          text: 'दीनन की लाज रखो, शंभु सुतकारी ।\nकामना को पूर्ण करो, जाऊं बलिहारी ॥',
          meaning: { en: 'Protect the honour of the lowly, son of Shambhu; fulfil our wishes, I offer myself to you.', kn: 'ದೀನರ ಮಾನ ಕಾಪಾಡು, ಶಂಭುಪುತ್ರನೇ; ಆಸೆಗಳನ್ನು ಈಡೇರಿಸು, ನಾನು ನಿನಗೆ ಸಮರ್ಪಿತ.' },
        },
      ],
    },
  ],
};
