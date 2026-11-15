/**
 * Nārāyaṇa Sūktam. Collated (Nov 2026) against stotranidhi.com (its Nārāyaṇa
 * Sūktam and Mantra Puṣpam pages), hindupad.com (Kannada) and the
 * Mahānārāyaṇa Upaniṣad text in the vishvAsa repository. Not yet checked
 * against a printed edition.
 */
import type { Mantra } from '../types';

const SHANTI =
  'ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै ।\nतेजस्वि नावधीतमस्तु मा विद्विषावहै ॥\nॐ शान्तिः शान्तिः शान्तिः ॥';

const SHANTI_MEANING = {
  en: 'May the Lord protect us both, teacher and student; may He nourish us both. May we work together with vigour; may our learning shine brightly; may we never bear ill will toward each other. Om, peace, peace, peace.',
  kn: 'ಭಗವಂತನು ಗುರು ಶಿಷ್ಯರಾದ ನಮ್ಮಿಬ್ಬರನ್ನೂ ಕಾಪಾಡಲಿ; ನಮ್ಮಿಬ್ಬರನ್ನೂ ಪೋಷಿಸಲಿ. ನಾವಿಬ್ಬರೂ ಒಟ್ಟಾಗಿ ಉತ್ಸಾಹದಿಂದ ಸಾಧನೆ ಮಾಡೋಣ. ನಾವು ಕಲಿತ ವಿದ್ಯೆ ತೇಜಸ್ವಿಯಾಗಲಿ; ನಾವು ಪರಸ್ಪರ ದ್ವೇಷಿಸದಿರೋಣ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
};

export const narayanaSukta: Mantra = {
  id: 'narayana-sukta',
  title: 'नारायणसूक्तम्',
  titleEn: 'Narayana Suktam',
  category: 'vedic',
  deity: 'Nārāyaṇa',
  source: 'Taittirīya Āraṇyaka, Prapāṭhaka 10 (Mahānārāyaṇa Upaniṣad)',
  summary:
    'A hymn from the Mahānārāyaṇa Upaniṣad praising Nārāyaṇa as the thousand-headed, all-pervading Supreme, and describing His presence as the flame dwelling in the lotus of the heart. It concludes with the Nārāyaṇa Gāyatrī.',
  summaryKn:
    'ಮಹಾನಾರಾಯಣ ಉಪನಿಷತ್ತಿನ ಈ ಸೂಕ್ತವು ಸಾವಿರಾರು ಶಿರಗಳುಳ್ಳ, ಸರ್ವವ್ಯಾಪಿಯಾದ ಪರಮಾತ್ಮ ನಾರಾಯಣನನ್ನು ಸ್ತುತಿಸುತ್ತದೆ; ಹೃದಯಕಮಲದಲ್ಲಿ ಜ್ಯೋತಿಯ ರೂಪದಲ್ಲಿ ನೆಲೆಸಿರುವ ಅವನ ಸಾನ್ನಿಧ್ಯವನ್ನು ವರ್ಣಿಸುತ್ತದೆ. ನಾರಾಯಣ ಗಾಯತ್ರಿಯೊಂದಿಗೆ ಇದು ಮುಕ್ತಾಯವಾಗುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'शान्तिपाठः',
      titleEn: 'Opening Śānti',
      verses: [{ text: SHANTI, meaning: SHANTI_MEANING }],
    },
    {
      title: 'नारायणसूक्तम्',
      titleEn: 'Nārāyaṇa Sūktam',
      verses: [
        {
          n: 1,
          text: 'सहस्रशीर्षं देवं विश्वाक्षं विश्वशम्भुवम् ।\nविश्वं नारायणं देवमक्षरं परमं पदम् ॥',
          meaning: {
            en: 'The thousand-headed God, all-seeing, the source of the world’s welfare, who is Himself the universe: Nārāyaṇa is the imperishable Lord and the supreme goal.',
            kn: 'ಸಾವಿರಾರು ಶಿರಗಳುಳ್ಳವನು, ಎಲ್ಲವನ್ನೂ ಕಾಣುವವನು, ಜಗತ್ತಿಗೆ ಮಂಗಳವನ್ನುಂಟುಮಾಡುವವನು, ವಿಶ್ವವ್ಯಾಪಿಯಾದ ನಾರಾಯಣನೇ ಅವಿನಾಶಿಯಾದ ದೇವನು, ಎಲ್ಲರಿಗೂ ಪರಮ ಗುರಿ.',
          },
        },
        {
          n: 2,
          text: 'विश्वतः परमान्नित्यं विश्वं नारायणं हरिम् ।\nविश्वमेवेदं पुरुषस्तद्विश्वमुपजीवति ॥',
          meaning: {
            en: 'Nārāyaṇa, Hari, is eternal and higher than the universe, yet He pervades it all. This whole world is that Puruṣa, and the world lives by Him alone.',
            kn: 'ಶ್ರೀಹರಿಯಾದ ನಾರಾಯಣನು ವಿಶ್ವಕ್ಕಿಂತಲೂ ಮಿಗಿಲಾದವನು, ನಿತ್ಯನು; ಆದರೂ ವಿಶ್ವವೆಲ್ಲವನ್ನೂ ವ್ಯಾಪಿಸಿದ್ದಾನೆ. ಈ ವಿಶ್ವವೆಲ್ಲವೂ ಆ ಪುರುಷನೇ; ಅವನನ್ನು ಆಶ್ರಯಿಸಿಯೇ ಜಗತ್ತು ಜೀವಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 3,
          text: 'पतिं विश्वस्यात्मेश्वरं शाश्वतं शिवमच्युतम् ।\nनारायणं महाज्ञेयं विश्वात्मानं परायणम् ॥',
          meaning: {
            en: 'He is the master of the universe and the ruler of all souls: eternal, auspicious and never-failing (Achyuta). Nārāyaṇa is the great One to be known, the inner Self of the universe and the final refuge.',
            kn: 'ಅವನು ಜಗತ್ತಿನ ಒಡೆಯನು, ಎಲ್ಲ ಜೀವಾತ್ಮರ ನಿಯಾಮಕನು, ಶಾಶ್ವತನು, ಮಂಗಳಮಯನು, ಎಂದೂ ಚ್ಯುತನಾಗದ ಅಚ್ಯುತನು. ನಾರಾಯಣನೇ ಎಲ್ಲರೂ ಅರಿಯಬೇಕಾದ ಮಹಾತತ್ತ್ವ; ವಿಶ್ವದ ಅಂತರಾತ್ಮ, ಎಲ್ಲರಿಗೂ ಪರಮ ಆಶ್ರಯ.',
          },
        },
        {
          n: 4,
          text: 'नारायणपरो ज्योतिरात्मा नारायणः परः ।\nनारायणपरं ब्रह्म तत्त्वं नारायणः परः ।\nनारायणपरो ध्याता ध्यानं नारायणः परः ॥',
          meaning: {
            en: 'Nārāyaṇa is the supreme Light; Nārāyaṇa is the supreme Self. Nārāyaṇa is the supreme Brahman and the highest Truth. Nārāyaṇa is the highest meditator and the highest object of meditation.',
            kn: 'ನಾರಾಯಣನೇ ಪರಂಜ್ಯೋತಿ; ನಾರಾಯಣನೇ ಪರಮಾತ್ಮ. ನಾರಾಯಣನೇ ಪರಬ್ರಹ್ಮ; ನಾರಾಯಣನೇ ಪರಮತತ್ತ್ವ. ಧ್ಯಾನ ಮಾಡುವವರಲ್ಲಿ ಶ್ರೇಷ್ಠನೂ ಧ್ಯಾನಕ್ಕೆ ಪರಮ ವಿಷಯವೂ ನಾರಾಯಣನೇ.',
          },
        },
        {
          n: 5,
          text: 'यच्च किञ्चिज्जगत्सर्वं दृश्यते श्रूयतेऽपि वा ।\nअन्तर्बहिश्च तत्सर्वं व्याप्य नारायणः स्थितः ॥',
          meaning: {
            en: 'Whatever there is in this world, whether seen or heard of, Nārāyaṇa abides pervading all of it, within and without.',
            kn: 'ಈ ಜಗತ್ತಿನಲ್ಲಿ ಕಾಣುವ ಅಥವಾ ಕೇಳಿಬರುವ ಯಾವುದೇ ವಸ್ತುವಿರಲಿ, ಅದೆಲ್ಲದರ ಒಳಗೂ ಹೊರಗೂ ವ್ಯಾಪಿಸಿಕೊಂಡು ನಾರಾಯಣನು ನೆಲೆಸಿದ್ದಾನೆ.',
          },
        },
        {
          n: 6,
          text: 'अनन्तमव्ययं कविं समुद्रेऽन्तं विश्वशम्भुवम् ।\nपद्मकोशप्रतीकाशं हृदयं चाप्यधोमुखम् ॥',
          meaning: {
            en: 'Meditate on Him who is infinite, imperishable and all-knowing, the shore beyond the ocean of worldly life and the source of all good, within the heart, which is like a lotus bud turned downward.',
            kn: 'ಅನಂತನು, ಅವ್ಯಯನು, ಸರ್ವಜ್ಞನು, ಸಂಸಾರಸಾಗರದ ಆಚೆಯ ದಡವಾದವನು, ಜಗತ್ತಿಗೆ ಮಂಗಳಕರನಾದ ಆ ಭಗವಂತನನ್ನು, ಕೆಳಮುಖವಾದ ಕಮಲದ ಮೊಗ್ಗಿನಂತಿರುವ ಹೃದಯದಲ್ಲಿ ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          n: 7,
          text: 'अधो निष्ट्या वितस्त्यान्ते नाभ्यामुपरि तिष्ठति ।\nज्वालमालाकुलं भाती विश्वस्यायतनं महत् ॥',
          meaning: {
            en: 'Below the throat and a span above the navel lies the heart. Shining as if wreathed in flames, it is the great dwelling-place of the Lord of the universe.',
            kn: 'ಕಂಠದಿಂದ ಕೆಳಗೆ, ನಾಭಿಯಿಂದ ಒಂದು ಗೇಣು ಮೇಲೆ ಹೃದಯವು ಇದೆ. ಜ್ವಾಲೆಗಳ ಮಾಲೆಯಿಂದ ಸುತ್ತುವರಿದಂತೆ ಬೆಳಗುವ ಅದು ವಿಶ್ವದೊಡೆಯನಾದ ಭಗವಂತನ ಮಹಾ ನಿವಾಸಸ್ಥಾನ.',
          },
        },
        {
          n: 8,
          text: 'सन्ततं सिराभिस्तु लम्बत्याकोशसन्निभम् ।\nतस्यान्ते सुषिरं सूक्ष्मं तस्मिन्सर्वं प्रतिष्ठितम् ॥',
          meaning: {
            en: 'Surrounded by channels on every side, it hangs like a lotus bud. At its tip is a subtle space, and in that everything is established.',
            kn: 'ನಾಡಿಗಳಿಂದ ಸುತ್ತುವರಿದ ಅದು ಕಮಲದ ಮೊಗ್ಗಿನಂತೆ ಇಳಿಬಿದ್ದಿದೆ. ಅದರ ತುದಿಯಲ್ಲಿ ಸೂಕ್ಷ್ಮವಾದ ಒಂದು ಆಕಾಶವಿದೆ; ಅದರಲ್ಲಿ ಎಲ್ಲವೂ ಪ್ರತಿಷ್ಠಿತವಾಗಿದೆ.',
          },
        },
        {
          n: 9,
          text: 'तस्य मध्ये महानग्निर्विश्वार्चिर्विश्वतोमुखः ।\nसोऽग्रभुग्विभजन्तिष्ठन्नाहारमजरः कविः ॥',
          meaning: {
            en: 'In its centre is a great fire with flames spreading everywhere and facing every direction. That ageless and wise fire first receives the food that is eaten and distributes it, abiding there.',
            kn: 'ಅದರ ಮಧ್ಯದಲ್ಲಿ ಎಲ್ಲೆಡೆ ಜ್ವಾಲೆಗಳನ್ನು ಚಾಚಿರುವ, ಎಲ್ಲ ದಿಕ್ಕುಗಳಿಗೂ ಮುಖಮಾಡಿರುವ ಮಹಾ ಅಗ್ನಿ ಇದೆ. ಮುಪ್ಪಿಲ್ಲದ, ಜ್ಞಾನಮಯವಾದ ಆ ಅಗ್ನಿ ಸೇವಿಸಿದ ಆಹಾರವನ್ನು ಮೊದಲು ಸ್ವೀಕರಿಸಿ ದೇಹಕ್ಕೆಲ್ಲ ಹಂಚುತ್ತ ಅಲ್ಲಿ ನೆಲೆಸಿದೆ.',
          },
        },
        {
          n: 10,
          text: 'तिर्यगूर्ध्वमधश्शायी रश्मयस्तस्य सन्तता ।\nसन्तापयति स्वं देहमापादतलमस्तकः ।\nतस्य मध्ये वह्निशिखा अणीयोर्ध्वा व्यवस्थिता ॥',
          meaning: {
            en: 'Its rays spread out sideways, upward and downward, warming the whole body from the soles of the feet to the crown of the head. In its midst a very subtle tongue of flame stands pointing upward.',
            kn: 'ಅದರ ಕಿರಣಗಳು ಅಡ್ಡಲಾಗಿ, ಮೇಲಕ್ಕೆ, ಕೆಳಕ್ಕೆ ಎಲ್ಲೆಡೆ ಹರಡಿವೆ; ಅದು ಅಂಗಾಲಿನಿಂದ ನೆತ್ತಿಯವರೆಗೆ ಇಡೀ ದೇಹವನ್ನು ಬೆಚ್ಚಗಿಡುತ್ತದೆ. ಅದರ ಮಧ್ಯದಲ್ಲಿ ಅತಿ ಸೂಕ್ಷ್ಮವಾದ ಒಂದು ಅಗ್ನಿಶಿಖೆ ಮೇಲ್ಮುಖವಾಗಿ ನಿಂತಿದೆ.',
          },
        },
        {
          n: 11,
          text: 'नीलतोयदमध्यस्थाद्विद्युल्लेखेव भास्वरा ।\nनीवारशूकवत्तन्वी पीता भास्वत्यणूपमा ॥',
          meaning: {
            en: 'That flame shines like a streak of lightning in the midst of a dark rain-cloud. It is slender as the tip of a grain of wild rice, golden-yellow, brilliant and as fine as an atom.',
            kn: 'ಆ ಶಿಖೆ ಕಪ್ಪು ಮಳೆಮೋಡದ ನಡುವೆ ಹೊಳೆಯುವ ಮಿಂಚಿನ ಗೆರೆಯಂತೆ ಪ್ರಕಾಶಿಸುತ್ತದೆ. ಅದು ನೀವಾರ ಧಾನ್ಯದ ಕುಡಿಯಂತೆ ತೆಳುವಾಗಿದ್ದು, ಹಳದಿ ಬಣ್ಣದಿಂದ ಹೊಳೆಯುವ, ಅಣುವಿನಷ್ಟು ಸೂಕ್ಷ್ಮವಾದುದು.',
          },
        },
        {
          n: 12,
          text: 'तस्याः शिखाया मध्ये परमात्मा व्यवस्थितः ।\nस ब्रह्म स शिवः स हरिः सेन्द्रः सोऽक्षरः परमः स्वराट् ॥',
          meaning: {
            en: 'In the midst of that flame the Supreme Self abides. He alone is Brahmā, He is Śiva, He is Hari, He is Indra; He is the imperishable, the highest, the self-ruling Lord.',
            kn: 'ಆ ಶಿಖೆಯ ಮಧ್ಯದಲ್ಲಿ ಪರಮಾತ್ಮನು ನೆಲೆಸಿದ್ದಾನೆ. ಅವನೇ ಬ್ರಹ್ಮ, ಅವನೇ ಶಿವ, ಅವನೇ ಹರಿ, ಅವನೇ ಇಂದ್ರ; ಅವನೇ ಅಕ್ಷರನು, ಪರಮನು, ಸ್ವತಂತ್ರನಾದ ಸ್ವರಾಟ್.',
          },
        },
        {
          n: 13,
          text: 'ऋतं सत्यं परं ब्रह्म पुरुषं कृष्णपिङ्गलम् ।\nऊर्ध्वरेतं विरूपाक्षं विश्वरूपाय वै नमो नमः ॥',
          meaning: {
            en: 'Salutations again and again to Him whose form is the universe: who is cosmic order and truth, the supreme Brahman, the Person of dark and golden hue, perfectly self-restrained, with wondrous eyes.',
            kn: 'ಋತವೂ ಸತ್ಯವೂ ಆದವನು, ಪರಬ್ರಹ್ಮನು, ಕಪ್ಪು ಮತ್ತು ಹೊಂಬಣ್ಣದ ಕಾಂತಿಯುಳ್ಳ ಪುರುಷನು, ಪರಿಪೂರ್ಣ ಸಂಯಮಿಯು, ಅಸಾಧಾರಣ ಕಣ್ಣುಗಳುಳ್ಳವನು ಆದ ಆ ವಿಶ್ವರೂಪನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'नारायणगायत्री',
      titleEn: 'Nārāyaṇa Gāyatrī',
      verses: [
        {
          text: 'ॐ नारायणाय विद्महे वासुदेवाय धीमहि ।\nतन्नो विष्णुः प्रचोदयात् ॥',
          meaning: {
            en: 'We know Nārāyaṇa; we meditate on Vāsudeva. May that Viṣṇu inspire and guide our minds.',
            kn: 'ನಾರಾಯಣನನ್ನು ನಾವು ಅರಿಯುತ್ತೇವೆ; ವಾಸುದೇವನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಆ ಮಹಾವಿಷ್ಣುವು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'शान्तिपाठः',
      titleEn: 'Closing Śānti',
      verses: [{ text: SHANTI, meaning: SHANTI_MEANING }],
    },
  ],
};
