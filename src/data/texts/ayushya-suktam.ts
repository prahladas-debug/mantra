/**
 * Ayushya Suktam: eight mantras for long life, recited at the Ayushya Homa
 * (birthdays, the first birthday of a child, shashtyabdapurti), with the
 * closing Vishnu mantra.
 *
 * Sources collated (Nov 2026):
 * - stotranidhi.com Ayushya Suktam (with svaras).
 * - stotrasamhita vedamantra-book (AyushyaSuktam.tex, with svaras).
 * The two agree word for word. The eight mantras are not in the Taittiriya
 * Samhita, Brahmana or Aranyaka texts available to me (TITUS, Wikisource) nor in
 * the Rigveda Khilas (GRETIL); they belong to the grihya (domestic rite)
 * tradition. The last mantra (विष्णो त्वं नो अन्तमः) is in the Taittiriya
 * Samhita, kanda 3 (TITUS), which has the sandhi दुह्रत अक्षितम्; the
 * recitation books read दुह्रते अक्षितम्, kept here. In verse 5 सयोन्यः is
 * written as one word (both books space it as स योन्यः). Svaras omitted.
 */
import type { Mantra } from '../types';

export const ayushyaSuktam: Mantra = {
  id: 'ayushya-suktam',
  title: 'आयुष्यसूक्तम्',
  titleEn: 'Ayushya Suktam',
  category: 'vedic',
  deity: 'Ishana, Surya, Skanda, the Devi and all the gods',
  source: 'Grihya mantras of the Ayushya Homa (Krishna Yajurveda tradition)',
  summary:
    'Mantras offered with ghee in the Ayushya Homa for long and healthy life. They invoke in turn Ishana (Shiva), the radiant Sun, Skanda, the Goddess in her many names, the daughters of Daksha, the divine hosts, the One who existed before creation and all the classes of gods, and close with a prayer to Vishnu for shelter.',
  summaryKn:
    'ದೀರ್ಘವೂ ಆರೋಗ್ಯಕರವೂ ಆದ ಆಯುಸ್ಸಿಗಾಗಿ ಆಯುಷ್ಯಹೋಮದಲ್ಲಿ ತುಪ್ಪದ ಆಹುತಿಯೊಂದಿಗೆ ಪಠಿಸುವ ಮಂತ್ರಗಳು. ಈಶಾನ (ಶಿವ), ತೇಜಸ್ವಿಯಾದ ಸೂರ್ಯ, ಸ್ಕಂದ, ಅನೇಕ ಹೆಸರುಗಳ ದೇವಿ, ದಕ್ಷಪುತ್ರಿಯರು, ದಿವ್ಯಗಣಗಳು, ಸೃಷ್ಟಿಗೆ ಮೊದಲೇ ಇದ್ದ ಏಕನಾದ ದೇವ ಮತ್ತು ಎಲ್ಲ ದೇವತಾಗಣಗಳನ್ನು ಇವು ಕ್ರಮವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತವೆ; ಆಶ್ರಯಕ್ಕಾಗಿ ವಿಷ್ಣುವಿನ ಪ್ರಾರ್ಥನೆಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತವೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'आयुष्यसूक्तम्',
      titleEn: 'Ayushya Suktam',
      note: 'In the Ayushya Homa an oblation of ghee is offered at the end of each mantra. A few words (औबला, सुवर्णरम्भग्रह) are obscure, and the meanings given for them are tentative.',
      noteKn: 'ಆಯುಷ್ಯಹೋಮದಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಮಂತ್ರದ ಕೊನೆಯಲ್ಲಿ ತುಪ್ಪದ ಆಹುತಿಯನ್ನು ಕೊಡುತ್ತಾರೆ. ಕೆಲವು ಪದಗಳ (ಔಬಲಾ, ಸುವರ್ಣರಂಭಗ್ರಹ) ಅರ್ಥ ಸ್ಪಷ್ಟವಿಲ್ಲ; ಅವುಗಳಿಗೆ ನೀಡಿರುವ ಅರ್ಥ ಊಹೆಯದು.',
      verses: [
        {
          n: 1,
          text: 'यो ब्रह्मा ब्रह्मण उज्जहार प्राणैः शिरः कृत्तिवासाः पिनाकी ।\nईशानो देवः स न आयुर्दधातु तस्मै जुहोमि हविषा घृतेन ॥',
          meaning: {
            en: 'He who, as the great one, plucked off the head of Brahma together with its life-breaths, who wears a hide and bears the Pinaka bow: may that god Ishana grant us long life. To him I offer this oblation of ghee.',
            kn: 'ಪ್ರಾಣಗಳೊಡನೆ ಬ್ರಹ್ಮನ ಶಿರಸ್ಸನ್ನು ಕಿತ್ತುಹಾಕಿದ ಮಹಾನ್ ದೇವನು, ಚರ್ಮವನ್ನು ಉಟ್ಟವನು, ಪಿನಾಕವೆಂಬ ಧನುಸ್ಸನ್ನು ಧರಿಸಿದವನು; ಆ ಈಶಾನದೇವನು ನಮಗೆ ದೀರ್ಘಾಯುಸ್ಸನ್ನು ಕೊಡಲಿ. ಅವನಿಗೆ ನಾನು ತುಪ್ಪದ ಹವಿಸ್ಸನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 2,
          text: 'विभ्राजमानः सरिरस्य मध्याद्रोचमानो घर्मरुचिर्य आगात् ।\nस मृत्युपाशानपनुद्य घोरानिहायुषेणो घृतमत्तु देवः ॥',
          meaning: {
            en: 'He who has risen, resplendent and shining, from the midst of the waters, the one whose glow is heat: may that god thrust away the dreadful nooses of death and eat this ghee here, for our long life.',
            kn: 'ಜಲರಾಶಿಯ ಮಧ್ಯದಿಂದ ಪ್ರಕಾಶಿಸುತ್ತಾ, ಬೆಳಗುತ್ತಾ ಉದಯಿಸಿದ, ಶಾಖವೇ ಕಾಂತಿಯಾಗಿರುವ ಆ ದೇವನು ಮೃತ್ಯುವಿನ ಭಯಂಕರವಾದ ಪಾಶಗಳನ್ನು ದೂರತಳ್ಳಿ, ನಮ್ಮ ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ಇಲ್ಲಿ ಈ ತುಪ್ಪವನ್ನು ಸ್ವೀಕರಿಸಲಿ.',
          },
        },
        {
          n: 3,
          text: 'ब्रह्मज्योतिर्ब्रह्मपत्नीषु गर्भं यमादधात्पुरुरूपं जयन्तम् ।\nसुवर्णरम्भग्रहमर्कमर्च्यं तमायुषे वर्धयामो घृतेन ॥',
          meaning: {
            en: 'The child of many forms, the victorious one, whom the holy Fire placed as an embryo in the wives of the seers; the radiant one, worthy of worship, who holds a golden staff: him we strengthen with ghee for long life. (This is understood of Skanda.)',
            kn: 'ಪವಿತ್ರ ಅಗ್ನಿಯು ಋಷಿಪತ್ನಿಯರಲ್ಲಿ ಗರ್ಭವಾಗಿ ಇರಿಸಿದ, ಅನೇಕ ರೂಪಗಳುಳ್ಳ, ಜಯಶಾಲಿಯಾದ, ಚಿನ್ನದ ದಂಡವನ್ನು ಹಿಡಿದ, ಪೂಜ್ಯನಾದ ತೇಜಸ್ವಿಯನ್ನು ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ತುಪ್ಪದಿಂದ ನಾವು ವರ್ಧಿಸುತ್ತೇವೆ. (ಇದನ್ನು ಸ್ಕಂದನ ಕುರಿತದ್ದೆಂದು ತಿಳಿಯುತ್ತಾರೆ.)',
          },
        },
        {
          n: 4,
          text: 'श्रियं लक्ष्मीमौबलामम्बिकां गां षष्ठीं च यामिन्द्रसेनेत्युदाहुः ।\nतां विद्यां ब्रह्मयोनिं सरूपामिहायुषे तर्पयामो घृतेन ॥',
          meaning: {
            en: 'She who is called Shri, Lakshmi, Aubala, Ambika, the Cow, Shashthi and Indrasena; she who is knowledge itself, born of Brahman, of lovely form: her we satisfy here with ghee for long life.',
            kn: 'ಶ್ರೀ, ಲಕ್ಷ್ಮೀ, ಔಬಲಾ, ಅಂಬಿಕಾ, ಗೋ, ಷಷ್ಠೀ, ಇಂದ್ರಸೇನಾ ಎಂದು ಕರೆಯಲ್ಪಡುವವಳು, ವಿದ್ಯೆಯೇ ಆಗಿರುವವಳು, ಬ್ರಹ್ಮನಿಂದ ಜನಿಸಿದವಳು, ಸುಂದರ ರೂಪದವಳು; ಅವಳನ್ನು ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ಇಲ್ಲಿ ತುಪ್ಪದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇವೆ.',
          },
        },
        {
          n: 5,
          text: 'दाक्षायण्यः सर्वयोन्यः सयोन्यः सहस्रशो विश्वरूपा विरूपाः ।\nससूनवः सपतयः सयूथ्या आयुषेणो घृतमिदं जुषन्ताम् ॥',
          meaning: {
            en: 'The daughters of Daksha, sources of all beings, sprung from one source, in their thousands, of every form and of varied forms, with their sons, their husbands and their companions: may they accept this ghee for our long life.',
            kn: 'ಎಲ್ಲ ಜೀವಿಗಳಿಗೂ ಮೂಲರಾದ, ಒಂದೇ ಮೂಲದಿಂದ ಹುಟ್ಟಿದ, ಸಾವಿರಾರು ಸಂಖ್ಯೆಯಲ್ಲಿರುವ, ಎಲ್ಲ ರೂಪಗಳೂ ಬಗೆಬಗೆಯ ರೂಪಗಳೂ ಉಳ್ಳ ದಕ್ಷಪುತ್ರಿಯರು ತಮ್ಮ ಮಕ್ಕಳು, ಪತಿಯರು ಮತ್ತು ಸಂಗಡಿಗರೊಡನೆ ನಮ್ಮ ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ಈ ತುಪ್ಪವನ್ನು ಸ್ವೀಕರಿಸಲಿ.',
          },
        },
        {
          n: 6,
          text: 'दिव्या गणा बहुरूपाः पुराणा आयुश्छिदो नः प्रमथ्नन्तु वीरान् ।\nतेभ्यो जुहोमि बहुधा घृतेन मा नः प्रजां रीरिषो मोत वीरान् ॥',
          meaning: {
            en: 'The divine hosts, ancient and of many forms, the cutters-off of life who would crush our heroes: to them I offer ghee in many ways. Do not harm our children, nor our heroes.',
            kn: 'ಪುರಾತನರೂ ಅನೇಕ ರೂಪಗಳುಳ್ಳವರೂ ಆದ ದಿವ್ಯಗಣಗಳು, ಆಯುಸ್ಸನ್ನು ಕತ್ತರಿಸುವ, ನಮ್ಮ ವೀರರನ್ನು ಹಿಂಸಿಸಬಲ್ಲವರು; ಅವರಿಗೆ ನಾನು ಅನೇಕ ಬಗೆಯಲ್ಲಿ ತುಪ್ಪವನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ. ನಮ್ಮ ಮಕ್ಕಳನ್ನೂ ನಮ್ಮ ವೀರರನ್ನೂ ಹಿಂಸಿಸಬೇಡಿ.',
          },
        },
        {
          n: 7,
          text: 'एकः पुरस्ताद्य इदं बभूव यतो बभूव भुवनस्य गोपाः ।\nयमप्येति भुवनं साम्पराये स नो हविर्घृतमिहायुषेऽत्तु देवः ॥',
          meaning: {
            en: 'The One who existed in the beginning and became all this; from whom came forth the protector of the world; into whom the world goes at the end: may that god eat our oblation of ghee here, for our long life.',
            kn: 'ಆದಿಯಲ್ಲಿ ಏಕನಾಗಿದ್ದು ಇದೆಲ್ಲವೂ ಆದವನು; ಯಾರಿಂದ ಲೋಕರಕ್ಷಕನು ಹುಟ್ಟಿದನೋ, ಪ್ರಳಯಕಾಲದಲ್ಲಿ ಜಗತ್ತು ಯಾರಲ್ಲಿ ಲೀನವಾಗುತ್ತದೆಯೋ ಆ ದೇವನು ನಮ್ಮ ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ಇಲ್ಲಿ ನಮ್ಮ ತುಪ್ಪದ ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸಲಿ.',
          },
        },
        {
          n: 8,
          text: 'वसून्रुद्रानादित्यान्मरुतोऽथ साध्यानृभून्यक्षान्गन्धर्वांश्च पितॄंश्च विश्वान् ।\nभृगून्सर्पांश्चाङ्गिरसोऽथ सर्वान्घृतं हुत्वा स्वायुष्या महयाम शश्वत् ॥',
          meaning: {
            en: 'Having offered ghee to the Vasus, the Rudras, the Adityas, the Maruts and the Sadhyas, to the Ribhus, the Yakshas, the Gandharvas, the Pitrs and the All-gods, to the Bhrigus, the Serpents and the Angirases, to all of them, may we, blessed with long life, honour them for ever.',
            kn: 'ವಸುಗಳು, ರುದ್ರರು, ಆದಿತ್ಯರು, ಮರುತ್ತುಗಳು, ಸಾಧ್ಯರು, ಋಭುಗಳು, ಯಕ್ಷರು, ಗಂಧರ್ವರು, ಪಿತೃಗಳು, ವಿಶ್ವೇದೇವತೆಗಳು, ಭೃಗುಗಳು, ಸರ್ಪಗಳು, ಆಂಗಿರಸರು ಎಲ್ಲರಿಗೂ ತುಪ್ಪವನ್ನು ಅರ್ಪಿಸಿ, ದೀರ್ಘಾಯುಷ್ಯವನ್ನು ಪಡೆದ ನಾವು ಅವರನ್ನು ಸದಾ ಪೂಜಿಸೋಣ.',
          },
        },
        {
          n: 9,
          text: 'विष्णो त्वं नो अन्तमः शर्म यच्छ सहन्त्य ।\nप्र ते धारा मधुश्चुत उत्सं दुह्रते अक्षितम् ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'O Vishnu, you who are nearest to us, grant us shelter, O conquering one. Your streams, dripping with honey, pour forth an inexhaustible spring. Om, peace, peace, peace.',
            kn: 'ವಿಷ್ಣುವೇ, ನಮಗೆ ಅತ್ಯಂತ ಹತ್ತಿರದವನೇ, ಜಯಶಾಲಿಯೇ, ನಮಗೆ ಆಶ್ರಯವನ್ನು ನೀಡು. ಜೇನು ಸುರಿಸುವ ನಿನ್ನ ಧಾರೆಗಳು ಎಂದೂ ಬತ್ತದ ಚಿಲುಮೆಯನ್ನು ಹರಿಸುತ್ತವೆ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
      ],
    },
  ],
};
