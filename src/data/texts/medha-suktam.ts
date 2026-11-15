/**
 * Medha Suktam: Taittiriya Aranyaka 10.41-44 (Mahanarayana Upanishad, Dravida
 * recension as chanted in South India).
 *
 * Sources collated (Nov 2026):
 * - Taittiriya Aranyaka with Sayana's commentary (Anandashrama ed., vol. 2,
 *   archive.org scan): anuvakas 41-44, read by eye from the scan.
 * - stotrasamhita vedamantra-book (MedhaSuktam.tex): agrees with Sayana.
 * - Mahanarayana Upanishad of sanskritdocuments (sa.wikisource, eBharati copy).
 * - Andhra recension: Mahadeva Sastri's Taittiriya Aranyaka with Bhatta Bhaskara
 *   (Mysore 1900, archive.org scan), the saswara Taittiriya Aranyaka on
 *   sa.wikisource, and G. A. Jacob's Mahanarayana Upanishad (Bombay 1888).
 * - Rigveda Khila 4.8 (GRETIL) has a related, longer Medha hymn.
 * The text follows Sayana. The Andhra recension reads जुषमाणा दुरुक्तान्,
 * द्रविणेन मेधे, पुष्करस्रजौ, दैवी मेधा मनुष्यजा … जुषताम्, and lacks the
 * last mantra (मयि मेधाम्); this is stated in the section note.
 */
import type { Mantra } from '../types';

export const medhaSuktam: Mantra = {
  id: 'medha-suktam',
  title: 'मेधासूक्तम्',
  titleEn: 'Medha Suktam',
  category: 'vedic',
  deity: 'Medha (Sarasvati)',
  source: 'Taittiriya Aranyaka 10.41-44 (Mahanarayana Upanishad)',
  summary:
    'A prayer to Medha, the goddess of intelligence and retentive memory, identified with Sarasvati. It asks Indra, Sarasvati, the Ashvins, Agni and Surya to place understanding, progeny and radiance in the reciter, and is chanted by students and at the start of study.',
  summaryKn:
    'ಬುದ್ಧಿ ಮತ್ತು ಧಾರಣಾಶಕ್ತಿಯ ದೇವತೆಯಾದ ಮೇಧಾದೇವಿಯ (ಸರಸ್ವತಿಯ) ಪ್ರಾರ್ಥನೆ. ಇಂದ್ರ, ಸರಸ್ವತಿ, ಅಶ್ವಿನೀದೇವತೆಗಳು, ಅಗ್ನಿ ಮತ್ತು ಸೂರ್ಯರು ಪಠಿಸುವವನಲ್ಲಿ ಮೇಧಾಶಕ್ತಿ, ಸಂತಾನ ಮತ್ತು ತೇಜಸ್ಸನ್ನು ನೆಲೆಗೊಳಿಸಲೆಂದು ಇದು ಬೇಡುತ್ತದೆ. ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಅಧ್ಯಯನದ ಆರಂಭದಲ್ಲಿ ಇದನ್ನು ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'मेधासूक्तम्',
      titleEn: 'Medha Suktam',
      note: 'Text as in Sayana\'s Taittiriya Aranyaka and the South Indian recitation books. The Andhra recension reads जुषमाणा दुरुक्तान् (verse 1), द्रविणेन मेधे (2), पुष्करस्रजौ (3), दैवी मेधा मनुष्यजा सा मां मेधा सुरभिर्जुषताम् (4) and जुषताम् (5), and does not have verse 6.',
      noteKn: 'ಸಾಯಣರ ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ ಮತ್ತು ದಕ್ಷಿಣ ಭಾರತದ ಪಾರಾಯಣ ಪುಸ್ತಕಗಳ ಪಾಠ. ಆಂಧ್ರ ಪಾಠದಲ್ಲಿ ಜುಷಮಾಣಾ ದುರುಕ್ತಾನ್ (೧), ದ್ರವಿಣೇನ ಮೇಧೇ (೨), ಪುಷ್ಕರಸ್ರಜೌ (೩), ದೈವೀ ಮೇಧಾ ಮನುಷ್ಯಜಾ ಸಾ ಮಾಂ ಮೇಧಾ ಸುರಭಿರ್ಜುಷತಾಮ್ (೪), ಜುಷತಾಮ್ (೫) ಎಂದಿದೆ; ಆರನೆಯ ಮಂತ್ರ ಅಲ್ಲಿಲ್ಲ.',
      verses: [
        {
          n: 1,
          text: 'मेधा देवी जुषमाणा न आगाद्विश्वाची भद्रा सुमनस्यमाना ।\nत्वया जुष्टा नुदमाना दुरुक्तान्बृहद्वदेम विदथे सुवीराः ॥',
          meaning: {
            en: 'May the goddess Medha come to us, pleased with us, all-pervading, auspicious and kindly disposed. Favoured by you and driving away wrong and empty words, may we, with worthy sons, speak out loud and well in the assembly.',
            kn: 'ಪ್ರಸನ್ನಳಾದ, ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿರುವ, ಮಂಗಳಕರಳಾದ, ಒಳ್ಳೆಯ ಮನಸ್ಸುಳ್ಳ ಮೇಧಾದೇವಿಯು ನಮ್ಮ ಬಳಿಗೆ ಬರಲಿ. ನಿನ್ನ ಅನುಗ್ರಹ ಪಡೆದು, ಕೆಟ್ಟ ಹಾಗೂ ವ್ಯರ್ಥ ಮಾತುಗಳನ್ನು ದೂರಮಾಡಿ, ಸತ್ಪುತ್ರರೊಡನೆ ನಾವು ಸಭೆಯಲ್ಲಿ ಉತ್ತಮವಾಗಿ ಗಟ್ಟಿಯಾಗಿ ಮಾತನಾಡುವಂತಾಗಲಿ.',
          },
        },
        {
          n: 2,
          text: 'त्वया जुष्ट ऋषिर्भवति देवि त्वया ब्रह्माऽऽगतश्रीरुत त्वया ।\nत्वया जुष्टश्चित्रं विन्दते वसु सा नो जुषस्व द्रविणो न मेधे ॥',
          meaning: {
            en: 'Favoured by you, O goddess, one becomes a seer; by you one becomes a knower of the Veda, and by you one gains prosperity. Favoured by you one finds wonderful wealth. Such as you are, O Medha, be gracious to us as wealth itself.',
            kn: 'ದೇವಿಯೇ, ನಿನ್ನ ಅನುಗ್ರಹದಿಂದ ಮನುಷ್ಯನು ಋಷಿಯಾಗುತ್ತಾನೆ; ನಿನ್ನಿಂದ ವೇದವನ್ನು ಬಲ್ಲವನಾಗುತ್ತಾನೆ; ನಿನ್ನಿಂದಲೇ ಸಂಪತ್ತನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನಿನ್ನ ಅನುಗ್ರಹ ಪಡೆದವನು ಅದ್ಭುತವಾದ ಐಶ್ವರ್ಯವನ್ನು ಗಳಿಸುತ್ತಾನೆ. ಮೇಧೆಯೇ, ಅಂತಹ ನೀನು ಐಶ್ವರ್ಯದಂತೆ ನಮ್ಮನ್ನು ಅನುಗ್ರಹಿಸು.',
          },
        },
        {
          n: 3,
          text: 'मेधां म इन्द्रो ददातु मेधां देवी सरस्वती ।\nमेधां मे अश्विनावुभावाधत्तां पुष्करस्रजा ॥',
          meaning: {
            en: 'May Indra give me intelligence; may the goddess Sarasvati give me intelligence. May the two Ashvins, wearing garlands of lotuses, place intelligence in me.',
            kn: 'ಇಂದ್ರನು ನನಗೆ ಮೇಧೆಯನ್ನು ಕೊಡಲಿ; ಸರಸ್ವತೀದೇವಿಯು ಮೇಧೆಯನ್ನು ಕೊಡಲಿ. ಕಮಲದ ಹಾರಗಳನ್ನು ಧರಿಸಿದ ಇಬ್ಬರು ಅಶ್ವಿನೀದೇವತೆಗಳು ನನ್ನಲ್ಲಿ ಮೇಧೆಯನ್ನು ನೆಲೆಗೊಳಿಸಲಿ.',
          },
        },
        {
          n: 4,
          text: 'अप्सरासु च या मेधा गन्धर्वेषु च यन्मनः ।\nदैवी मेधा सरस्वती सा मां मेधा सुरभिर्जुषतां स्वाहा ॥',
          meaning: {
            en: 'The intelligence that is in the Apsaras, the thinking power that is in the Gandharvas, the divine intelligence that is Sarasvati: may that fragrant Medha be gracious to me. Svaha.',
            kn: 'ಅಪ್ಸರೆಯರಲ್ಲಿರುವ ಮೇಧೆ, ಗಂಧರ್ವರಲ್ಲಿರುವ ಮನನಶಕ್ತಿ, ಸರಸ್ವತಿಯೇ ಆಗಿರುವ ದಿವ್ಯ ಮೇಧೆ: ಸುಗಂಧಯುಕ್ತಳಾದ ಆ ಮೇಧೆಯು ನನ್ನನ್ನು ಅನುಗ್ರಹಿಸಲಿ. ಸ್ವಾಹಾ.',
          },
        },
        {
          n: 5,
          text: 'आ मां मेधा सुरभिर्विश्वरूपा हिरण्यवर्णा जगती जगम्या ।\nऊर्जस्वती पयसा पिन्वमाना सा मां मेधा सुप्रतीका जुषन्ताम् ॥',
          meaning: {
            en: 'May Medha come to me: fragrant, of every form, golden in colour, present throughout the world and worthy to be reached; full of strength, nourishing me as with milk. May that Medha of lovely face be gracious to me.',
            kn: 'ಸುಗಂಧಯುಕ್ತಳೂ, ಎಲ್ಲ ರೂಪಗಳುಳ್ಳವಳೂ, ಚಿನ್ನದ ಬಣ್ಣದವಳೂ, ಜಗತ್ತಿನಲ್ಲೆಲ್ಲ ಇರುವವಳೂ, ಹೊಂದಲು ಯೋಗ್ಯಳೂ, ಬಲದಿಂದ ಕೂಡಿದವಳೂ, ಹಾಲಿನಂತೆ ಪೋಷಿಸುವವಳೂ ಆದ ಮೇಧೆಯು ನನ್ನ ಬಳಿಗೆ ಬರಲಿ. ಸುಂದರ ಮುಖವುಳ್ಳ ಆ ಮೇಧೆಯು ನನ್ನನ್ನು ಅನುಗ್ರಹಿಸಲಿ.',
          },
        },
        {
          n: 6,
          text: 'मयि मेधां मयि प्रजां मय्यग्निस्तेजो दधातु ।\nमयि मेधां मयि प्रजां मयीन्द्र इन्द्रियं दधातु ।\nमयि मेधां मयि प्रजां मयि सूर्यो भ्राजो दधातु ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'May Agni place in me intelligence, progeny and brilliance. May Indra place in me intelligence, progeny and the strength of the senses. May Surya place in me intelligence, progeny and radiance. Om, peace, peace, peace.',
            kn: 'ಅಗ್ನಿಯು ನನ್ನಲ್ಲಿ ಮೇಧೆಯನ್ನೂ ಸಂತಾನವನ್ನೂ ತೇಜಸ್ಸನ್ನೂ ನೆಲೆಗೊಳಿಸಲಿ. ಇಂದ್ರನು ನನ್ನಲ್ಲಿ ಮೇಧೆಯನ್ನೂ ಸಂತಾನವನ್ನೂ ಇಂದ್ರಿಯಬಲವನ್ನೂ ನೆಲೆಗೊಳಿಸಲಿ. ಸೂರ್ಯನು ನನ್ನಲ್ಲಿ ಮೇಧೆಯನ್ನೂ ಸಂತಾನವನ್ನೂ ಕಾಂತಿಯನ್ನೂ ನೆಲೆಗೊಳಿಸಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
      ],
    },
  ],
};
