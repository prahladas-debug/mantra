/**
 * Jaya Lakshmi Ramana, the Hindi aarti sung at the end of the Satyanarayana puja, in Devanagari. The author is not known.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com "Shri Satyanarayan Ji Ki Aarti" (B) and shubhpanchang.com
 * "Jai Lakshmi Ramana" (S). They agree line by line apart from spelling: "नीराजन" (S) against "निराजन" (B), "दर्शन दियो" (S)
 * against "दर्श दियो" (B), "विपति" (S) against "विपत्ति" (B), "फिर स्तुति" in both. The refrain "ॐ जय लक्ष्मी रमणा, स्वामी जय
 * लक्ष्मी रमणा" is sung after every stanza and is given once, as the opening. Two stanzas are given as one verse. The stanzas
 * allude to the stories of the Satyanarayana Katha (the old Brahmin, the woodcutter, King Chandrachuda, the merchant, the cowherds).
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiJaiLakshmiRamana: Mantra = {
  id: 'aarti-jai-lakshmi-ramana',
  title: 'जयलक्ष्मीरमणाआरती',
  titleEn: 'Jai Lakshmi Ramana (Satyanarayana Aarti)',
  category: 'aarti',
  order: 2,
  deity: 'Śrī Satyanārāyaṇa (Viṣṇu)',
  source: 'Traditional Hindi aarti of the Satyanārāyaṇa vrata (author not known)',
  summary: 'The Hindi aarti that closes the Satyanarayana puja. It praises Lakshmi\'s lord, Satyanarayana, on a jewelled throne with Narada waving the lamp, and recalls the Katha: the old Brahmin who became a golden-palace giver, the poor woodcutter, King Chandrachuda, the merchant who forgot and then remembered, and the cowherds. Whoever sings it gains prosperity and ease.',
  summaryKn: 'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆಯ ಕೊನೆಯಲ್ಲಿ ಹಾಡುವ ಹಿಂದಿ ಆರತಿ. ರತ್ನದ ಸಿಂಹಾಸನದಲ್ಲಿ ನಾರದ ನೀರಾಜನ ಮಾಡುವ ಲಕ್ಷ್ಮೀರಮಣ ಸತ್ಯನಾರಾಯಣನನ್ನು ಹೊಗಳಿ, ಕಥೆಯನ್ನು ಸ್ಮರಿಸುತ್ತದೆ: ಮುದುಕ ಬ್ರಾಹ್ಮಣ, ಬಡ ಕಟ್ಟಿಗೆ ಕಡಿಯುವವ, ರಾಜ ಚಂದ್ರಚೂಡ, ಮರೆತು ನಂತರ ನೆನೆದ ವರ್ತಕ, ಗೊಲ್ಲರು. ಹಾಡುವವನಿಗೆ ಋದ್ಧಿಸಿದ್ಧಿ, ಸುಖ ಸಂಪತ್ತು ಸಿಗುತ್ತದೆ.',
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
          text: 'जय लक्ष्मी रमणा, स्वामी जय लक्ष्मी रमणा ।\nसत्यनारायण स्वामी, जन पातक हरणा ॥\nॐ जय लक्ष्मी रमणा ॥',
          meaning: { en: 'Victory to Lakshmi\'s beloved, Lord, victory to Lakshmi\'s beloved. Lord Satyanarayana, remover of the sins of his people.', kn: 'ಲಕ್ಷ್ಮೀರಮಣನಿಗೆ ಜಯ, ಸ್ವಾಮಿ ಲಕ್ಷ್ಮೀರಮಣನಿಗೆ ಜಯ. ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿ, ಜನರ ಪಾಪಗಳನ್ನು ಹರಿಸುವವನು.' },
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
          text: 'रतन जडित सिंहासन, अद्भुत छवि राजे ।\nनारद करत नीराजन, घंटा ध्वनि बाजे ॥\nप्रकट भये कलि कारण, द्विज को दर्शन दियो ।\nबूढा ब्राह्मण बनकर, कंचन महल कियो ॥',
          meaning: { en: 'On a jewelled throne his wonderful form shines; Narada waves the lamp and bells ring. For the sake of the Kali age he appeared and gave his vision to a Brahmin; as an old Brahmin he made a golden palace.', kn: 'ರತ್ನಖಚಿತ ಸಿಂಹಾಸನದಲ್ಲಿ ಅದ್ಭುತ ರೂಪ ಶೋಭಿಸುತ್ತದೆ; ನಾರದ ನೀರಾಜನ ಮಾಡುತ್ತಾನೆ, ಗಂಟೆಯ ನಾದ ಮೊಳಗುತ್ತದೆ. ಕಲಿಯುಗಕ್ಕಾಗಿ ಪ್ರಕಟನಾಗಿ ಬ್ರಾಹ್ಮಣನಿಗೆ ದರ್ಶನ ಕೊಟ್ಟನು; ಮುದುಕ ಬ್ರಾಹ್ಮಣನಾಗಿ ಚಿನ್ನದ ಮಹಲು ಮಾಡಿದನು.' },
        },
        {
          n: 2,
          text: 'दुर्बल भील कठारो, जिन पर कृपा करी ।\nचन्द्रचूड एक राजा, तिनकी विपति हरी ॥\nवैश्य मनोरथ पायो, श्रद्धा तज दीन्ही ।\nसो फल भोग्यो प्रभुजी, फिर स्तुति कीन्ही ॥',
          meaning: { en: 'He showed grace to the poor woodcutter, and ended the trouble of a king named Chandrachuda. The merchant got his wish, then gave up his faith; he suffered the result, Lord, and then praised you again.', kn: 'ಬಡ ಕಟ್ಟಿಗೆ ಕಡಿಯುವವನ ಮೇಲೆ ಕೃಪೆ ಮಾಡಿದನು; ಚಂದ್ರಚೂಡನೆಂಬ ರಾಜನ ವಿಪತ್ತನ್ನು ಹರಿಸಿದನು. ವರ್ತಕ ಬಯಸಿದ್ದು ಪಡೆದು ಶ್ರದ್ಧೆ ಬಿಟ್ಟ; ಅದರ ಫಲ ಅನುಭವಿಸಿ, ಪ್ರಭುವೇ, ಮತ್ತೆ ನಿನ್ನನ್ನು ಸ್ತುತಿಸಿದ.' },
        },
        {
          n: 3,
          text: 'भाव भक्ति के कारण, छिन-छिन रूप धरयो ।\nश्रद्धा धारण कीन्ही, तिनको काज सरयो ॥\nग्वाल-बाल संग राजा, वन में भक्ति करी ।\nमनवांछित फल दीन्हो, दीनदयाल हरि ॥',
          meaning: { en: 'For the sake of devotion and feeling he took form after form, moment by moment; those who held faith had their work accomplished. The king worshipped in the forest with the cowherd boys, and Hari, kind to the lowly, gave the fruit they wished.', kn: 'ಭಾವಭಕ್ತಿಗಾಗಿ ಕ್ಷಣಕ್ಷಣಕ್ಕೂ ರೂಪ ಧರಿಸಿದನು; ಶ್ರದ್ಧೆ ಇಟ್ಟವರ ಕಾರ್ಯ ಸಿದ್ಧಿಸಿತು. ರಾಜನು ಗೊಲ್ಲಬಾಲಕರ ಜೊತೆ ಕಾಡಿನಲ್ಲಿ ಭಕ್ತಿ ಮಾಡಿದನು; ದೀನದಯಾಳು ಹರಿ ಬಯಸಿದ ಫಲ ಕೊಟ್ಟನು.' },
        },
        {
          n: 4,
          text: 'चढत प्रसाद सवायो, कदली फल मेवा ।\nधूप दीप तुलसी से, राजी सत्यदेवा ॥\nश्री सत्यनारायण जी की आरती, जो कोई नर गावै ।\nऋद्धि-सिद्धि सुख-सम्पत्ति, सहज रूप पावै ॥',
          meaning: { en: 'The prasada offered is a quarter more than usual: bananas, fruit, dry fruit; with incense, lamp and tulasi, Lord Satya is pleased. Whoever sings this aarti of Sri Satyanarayana easily gains success, comfort and wealth.', kn: 'ಸವಾಯಿ ಪ್ರಮಾಣದ ಪ್ರಸಾದ ಅರ್ಪಿತವಾಗುತ್ತದೆ: ಬಾಳೆಹಣ್ಣು, ಹಣ್ಣುಗಳು, ಒಣಹಣ್ಣುಗಳು; ಧೂಪ, ದೀಪ, ತುಳಸಿಯಿಂದ ಸತ್ಯದೇವ ಪ್ರಸನ್ನನಾಗುತ್ತಾನೆ. ಶ್ರೀ ಸತ್ಯನಾರಾಯಣನ ಈ ಆರತಿಯನ್ನು ಹಾಡುವವನು ಋದ್ಧಿಸಿದ್ಧಿ, ಸುಖಸಂಪತ್ತನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯುತ್ತಾನೆ.' },
        },
      ],
    },
  ],
};
