/**
 * Bhu Suktam: Taittiriya Samhita 1.5.3 (the anuvaka beginning भूमिर्भूम्ना,
 * mantras for re-establishing the sacred fire), followed by the two verses to
 * the great goddess, Vishnu's consort, from Taittiriya Brahmana 3.1.2.
 *
 * Sources collated (Nov 2026):
 * - Taittiriya Samhita 1.5.3 and Taittiriya Brahmana 3.1.2, TITUS edition
 *   (titus.uni-frankfurt.de), transliterated text.
 * - stotrasamhita vedamantra-book (BhuSuktam.tex): the whole of TS 1.5.3.
 * - stotranidhi.com Bhu Suktam: TS 1.5.3.1-2 (the first six mantras) and
 *   TB 3.1.2 (from महीं देवीम्).
 * Omitted: the passage beginning मेदिनी देवी वसुन्धरा and the Bhu Gayatri,
 * which some books insert after the sixth mantra; it is not in the Samhita and
 * only one, visibly corrupt, copy was available. Svaras omitted.
 */
import type { Mantra } from '../types';

export const bhuSuktam: Mantra = {
  id: 'bhu-suktam',
  title: 'भूसूक्तम्',
  titleEn: 'Bhu Suktam',
  category: 'vedic',
  deity: 'Bhudevi (Earth, consort of Vishnu)',
  source: 'Taittiriya Samhita 1.5.3; Taittiriya Brahmana 3.1.2',
  summary:
    'The Taittiriya Samhita anuvaka that opens with "bhumir bhumna", in which the sacred fire is set down again on the lap of Mother Earth (Aditi) and its scattered energy is gathered back by the gods. It is recited as the hymn to Bhudevi, and here closes with the Brahmana verses honouring the great goddess who is the consort of Vishnu.',
  summaryKn:
    '"ಭೂಮಿರ್ಭೂಮ್ನಾ" ಎಂದು ಆರಂಭವಾಗುವ ತೈತ್ತಿರೀಯ ಸಂಹಿತೆಯ ಅನುವಾಕ. ಭೂಮಾತೆಯಾದ ಅದಿತಿಯ ಮಡಿಲಲ್ಲಿ ಅಗ್ನಿಯನ್ನು ಮತ್ತೆ ಪ್ರತಿಷ್ಠಾಪಿಸುವ, ಚದುರಿದ ಅಗ್ನಿಯ ಶಕ್ತಿಯನ್ನು ದೇವತೆಗಳು ಮತ್ತೆ ಒಟ್ಟುಗೂಡಿಸುವ ಮಂತ್ರಗಳು ಇದರಲ್ಲಿವೆ. ಭೂದೇವಿಯ ಸೂಕ್ತವೆಂದು ಇದನ್ನು ಪಠಿಸುತ್ತಾರೆ; ಇಲ್ಲಿ ಇದು ವಿಷ್ಣುಪತ್ನಿಯಾದ ಮಹಾದೇವಿಯನ್ನು ಸ್ತುತಿಸುವ ಬ್ರಾಹ್ಮಣದ ಮಂತ್ರಗಳೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'partial',
  contentNote:
    'Some recitation books recite only the first six mantras of the Samhita anuvaka and then insert later verses to Bhudevi (beginning मेदिनी देवी वसुन्धरा, with a Bhu Gayatri). Those verses are not in the Samhita and no reliable second copy could be found, so they are not included here.',
  sections: [
    {
      title: 'तैत्तिरीयसंहिता १.५.३',
      titleEn: 'Taittiriya Samhita 1.5.3',
      note: 'Recitation books that give only part of the anuvaka stop after mantra 6.',
      noteKn: 'ಅನುವಾಕದ ಒಂದು ಭಾಗವನ್ನು ಮಾತ್ರ ನೀಡುವ ಪಾರಾಯಣ ಪುಸ್ತಕಗಳು ಆರನೆಯ ಮಂತ್ರಕ್ಕೆ ನಿಲ್ಲಿಸುತ್ತವೆ.',
      verses: [
        {
          n: 1,
          text: 'भूमिर्भूम्ना द्यौर्वरिणाऽन्तरिक्षं महित्वा ।\nउपस्थे ते देव्यदितेऽग्निमन्नादमन्नाद्यायाऽऽदधे ॥',
          meaning: {
            en: 'Earth in her breadth, heaven in its expanse, the mid-region in its greatness: O goddess Aditi, upon your lap I set down Agni, the eater of food, so that there may be food to eat.',
            kn: 'ವಿಸ್ತಾರದಲ್ಲಿ ಭೂಮಿ, ಹರವಿನಲ್ಲಿ ದ್ಯುಲೋಕ, ಮಹಿಮೆಯಲ್ಲಿ ಅಂತರಿಕ್ಷ. ಅದಿತಿದೇವಿಯೇ, ಅನ್ನವು ಸಮೃದ್ಧವಾಗಲೆಂದು ಅನ್ನವನ್ನು ಸ್ವೀಕರಿಸುವ ಅಗ್ನಿಯನ್ನು ನಿನ್ನ ಮಡಿಲಲ್ಲಿ ನಾನು ಸ್ಥಾಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 2,
          text: 'आऽयं गौः पृश्निरक्रमीदसनन्मातरं पुनः ।\nपितरं च प्रयन्त्सुवः ॥',
          meaning: {
            en: 'This bright, many-hued one has stepped forth; he has reached his mother, the Earth, once more, and goes on towards his father, heaven.',
            kn: 'ಈ ಬಣ್ಣಬಣ್ಣದ ತೇಜಸ್ವಿಯು ಮುಂದೆ ಹೆಜ್ಜೆಯಿಟ್ಟಿದ್ದಾನೆ; ತನ್ನ ತಾಯಿಯಾದ ಭೂಮಿಯನ್ನು ಮತ್ತೆ ಸೇರಿದ್ದಾನೆ, ತಂದೆಯಾದ ದ್ಯುಲೋಕದ ಕಡೆಗೆ ಸಾಗುತ್ತಿದ್ದಾನೆ.',
          },
        },
        {
          n: 3,
          text: 'त्रिंशद्धाम वि राजति वाक्पतङ्गाय शिश्रिये ।\nप्रत्यस्य वह द्युभिः ॥',
          meaning: {
            en: 'He shines over thirty stations, the days and nights of the month; speech has gone for refuge to him, the winged one. Carry our offering to him day after day.',
            kn: 'ತಿಂಗಳಿನ ಹಗಲು ರಾತ್ರಿಗಳೆಂಬ ಮೂವತ್ತು ಸ್ಥಾನಗಳಲ್ಲಿ ಅವನು ಬೆಳಗುತ್ತಾನೆ; ಪಕ್ಷಿಯಂತೆ ಸಂಚರಿಸುವ ಅವನನ್ನು ವಾಕ್ಕು ಆಶ್ರಯಿಸಿದೆ. ದಿನದಿನವೂ ನಮ್ಮ ಹವಿಸ್ಸನ್ನು ಅವನಿಗೆ ತಲುಪಿಸು.',
          },
        },
        {
          n: 4,
          text: 'अस्य प्राणादपानत्यन्तश्चरति रोचना ।\nव्यख्यन्महिषः सुवः ॥',
          meaning: {
            en: 'From his in-breath comes the out-breath; as a light he moves within all things. The mighty one has lit up the heavens.',
            kn: 'ಅವನ ಉಸಿರಿನಿಂದಲೇ ಉಚ್ಛ್ವಾಸ ನಿಶ್ವಾಸಗಳು ನಡೆಯುತ್ತವೆ; ಬೆಳಕಾಗಿ ಅವನು ಎಲ್ಲದರೊಳಗೆ ಸಂಚರಿಸುತ್ತಾನೆ. ಆ ಮಹಾನ್ ತೇಜಸ್ವಿಯು ಸ್ವರ್ಗವನ್ನು ಬೆಳಗಿಸಿದ್ದಾನೆ.',
          },
        },
        {
          n: 5,
          text: 'यत्त्वा क्रुद्धः परोवप मन्युना यदवर्त्या ।\nसुकल्पमग्ने तत्तव पुनस्त्वोद्दीपयामसि ॥',
          meaning: {
            en: 'O Agni, if in anger I cast you away, or if through misfortune you went out, may that be well set right for you; we kindle you once again.',
            kn: 'ಅಗ್ನಿಯೇ, ಕೋಪದಿಂದ ನಾನು ನಿನ್ನನ್ನು ಚೆಲ್ಲಿಬಿಟ್ಟಿದ್ದರೆ, ಅಥವಾ ದುರದೃಷ್ಟದಿಂದ ನೀನು ನಂದಿಹೋಗಿದ್ದರೆ, ಅದು ಸರಿಯಾಗಿ ಸರಿಪಡಿಸಲ್ಪಡಲಿ; ನಾವು ನಿನ್ನನ್ನು ಮತ್ತೆ ಪ್ರಜ್ವಲಿಸುತ್ತೇವೆ.',
          },
        },
        {
          n: 6,
          text: 'यत्ते मन्युपरोप्तस्य पृथिवीमनु दध्वसे ।\nआदित्या विश्वे तद्देवा वसवश्च समाभरन् ॥',
          meaning: {
            en: 'Whatever of you, scattered in anger, was lost over the earth, that the Adityas, the All-gods and the Vasus have gathered together again.',
            kn: 'ಕೋಪದಿಂದ ಚೆಲ್ಲಲ್ಪಟ್ಟ ನಿನ್ನ ಯಾವ ಭಾಗವು ಭೂಮಿಯ ಮೇಲೆ ಕಳೆದುಹೋಯಿತೋ, ಅದನ್ನು ಆದಿತ್ಯರೂ ವಿಶ್ವೇದೇವತೆಗಳೂ ವಸುಗಳೂ ಮತ್ತೆ ಒಟ್ಟುಗೂಡಿಸಿದ್ದಾರೆ.',
          },
        },
        {
          n: 7,
          text: 'मनो ज्योतिर्जुषतामाज्यं विच्छिन्नं यज्ञं समिमं दधातु ।\nबृहस्पतिस्तनुतामिमं नो विश्वे देवा इह मादयन्ताम् ॥',
          meaning: {
            en: 'May Mind, the light, accept the ghee and join together again this broken sacrifice. May Brihaspati carry this sacrifice of ours forward; may all the gods rejoice here.',
            kn: 'ಜ್ಯೋತಿಸ್ವರೂಪವಾದ ಮನಸ್ಸು ಈ ತುಪ್ಪವನ್ನು ಸ್ವೀಕರಿಸಿ, ತುಂಡಾದ ಈ ಯಜ್ಞವನ್ನು ಮತ್ತೆ ಜೋಡಿಸಲಿ. ಬೃಹಸ್ಪತಿಯು ನಮ್ಮ ಈ ಯಜ್ಞವನ್ನು ಮುಂದುವರಿಸಲಿ; ಎಲ್ಲ ದೇವತೆಗಳು ಇಲ್ಲಿ ಸಂತೋಷಪಡಲಿ.',
          },
        },
        {
          n: 8,
          text: 'सप्त ते अग्ने समिधः सप्त जिह्वाः सप्त ऋषयः सप्त धाम प्रियाणि ।\nसप्त होत्राः सप्तधा त्वा यजन्ति सप्त योनीरा पृणस्वा घृतेन ॥',
          meaning: {
            en: 'Seven are your kindling sticks, O Agni, seven your tongues, seven your seers, seven your beloved abodes. Seven priests worship you in seven ways; fill your seven sources with ghee.',
            kn: 'ಅಗ್ನಿಯೇ, ನಿನಗೆ ಏಳು ಸಮಿತ್ತುಗಳು, ಏಳು ನಾಲಿಗೆಗಳು, ಏಳು ಋಷಿಗಳು, ಏಳು ಪ್ರಿಯವಾದ ನೆಲೆಗಳು. ಏಳು ಋತ್ವಿಜರು ನಿನ್ನನ್ನು ಏಳು ಬಗೆಯಲ್ಲಿ ಪೂಜಿಸುತ್ತಾರೆ; ನಿನ್ನ ಏಳು ಮೂಲಗಳನ್ನು ತುಪ್ಪದಿಂದ ತುಂಬಿಕೊ.',
          },
        },
        {
          n: 9,
          text: 'पुनरूर्जा नि वर्तस्व पुनरग्न इषाऽऽयुषा ।\nपुनर्नः पाहि विश्वतः ॥',
          meaning: {
            en: 'Come back again with strength, O Agni, come back with nourishment and long life; protect us again on every side.',
            kn: 'ಅಗ್ನಿಯೇ, ಬಲದೊಂದಿಗೆ ಮತ್ತೆ ಹಿಂತಿರುಗು; ಅನ್ನದೊಂದಿಗೂ ಆಯುಸ್ಸಿನೊಂದಿಗೂ ಮತ್ತೆ ಬಾ; ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ನಮ್ಮನ್ನು ಮತ್ತೆ ರಕ್ಷಿಸು.',
          },
        },
        {
          n: 10,
          text: 'सह रय्या नि वर्तस्वाग्ने पिन्वस्व धारया ।\nविश्वप्स्निया विश्वतस्परि ॥',
          meaning: {
            en: 'Come back with wealth, O Agni; overflow upon us with your stream, which nourishes all, on every side.',
            kn: 'ಅಗ್ನಿಯೇ, ಐಶ್ವರ್ಯದೊಂದಿಗೆ ಹಿಂತಿರುಗು; ಎಲ್ಲರನ್ನೂ ಪೋಷಿಸುವ ನಿನ್ನ ಧಾರೆಯಿಂದ ಎಲ್ಲ ಕಡೆಯೂ ನಮ್ಮ ಮೇಲೆ ಸಮೃದ್ಧಿಯನ್ನು ಸುರಿಸು.',
          },
        },
        {
          n: 11,
          text: 'लेकः सलेकः सुलेकस्ते न आदित्या आज्यं जुषाणा वियन्तु ।\nकेतः सकेतः सुकेतस्ते न आदित्या आज्यं जुषाणा वियन्तु ।\nविवस्वाँ अदितिर्देवजूतिस्ते न आदित्या आज्यं जुषाणा वियन्तु ॥',
          meaning: {
            en: 'Leka, Saleka and Suleka: may these Adityas accept our ghee and partake of it. Keta, Saketa and Suketa: may these Adityas accept our ghee and partake of it. Vivasvan, Aditi and Devajuti: may these Adityas accept our ghee and partake of it.',
            kn: 'ಲೇಕ, ಸಲೇಕ, ಸುಲೇಕರೆಂಬ ಆದಿತ್ಯರು ನಮ್ಮ ತುಪ್ಪವನ್ನು ಸ್ವೀಕರಿಸಿ ಸೇವಿಸಲಿ. ಕೇತ, ಸಕೇತ, ಸುಕೇತರೆಂಬ ಆದಿತ್ಯರು ನಮ್ಮ ತುಪ್ಪವನ್ನು ಸ್ವೀಕರಿಸಿ ಸೇವಿಸಲಿ. ವಿವಸ್ವಾನ್, ಅದಿತಿ, ದೇವಜೂತಿ ಎಂಬ ಆದಿತ್ಯರು ನಮ್ಮ ತುಪ್ಪವನ್ನು ಸ್ವೀಕರಿಸಿ ಸೇವಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'तैत्तिरीयब्राह्मणम् ३.१.२',
      titleEn: 'Taittiriya Brahmana 3.1.2: the consort of Vishnu',
      note: 'Verses of the Shravana (Shrona) nakshatra offering, addressed to the great goddess, Vishnu\'s consort; recitation books begin at महीं देवीम्.',
      noteKn: 'ಶ್ರವಣ (ಶ್ರೋಣಾ) ನಕ್ಷತ್ರದ ಇಷ್ಟಿಯ ಮಂತ್ರಗಳು; ವಿಷ್ಣುಪತ್ನಿಯಾದ ಮಹಾದೇವಿಯನ್ನು ಉದ್ದೇಶಿಸಿವೆ. ಪಾರಾಯಣ ಪುಸ್ತಕಗಳು "ಮಹೀಂ ದೇವೀಮ್" ಎಂಬಲ್ಲಿಂದ ಆರಂಭಿಸುತ್ತವೆ.',
      verses: [
        {
          n: 1,
          text: 'शृण्वन्ति श्रोणाममृतस्य गोपां पुण्यामस्या उपशृणोमि वाचम् ।\nमहीं देवीं विष्णुपत्नीमजूर्यां प्रतीचीमेनां हविषा यजामः ॥',
          meaning: {
            en: 'They hear of Shrona, guardian of immortality; I listen closely to her holy voice. With oblations we worship her, the great goddess, the consort of Vishnu, ever young, who turns her face towards us.',
            kn: 'ಅಮೃತತ್ವವನ್ನು ಕಾಪಾಡುವ ಶ್ರೋಣೆಯ ಕುರಿತು ಎಲ್ಲರೂ ಕೇಳುತ್ತಾರೆ; ಅವಳ ಪವಿತ್ರವಾದ ವಾಣಿಯನ್ನು ನಾನು ಆಲಿಸುತ್ತೇನೆ. ನಮ್ಮ ಕಡೆಗೆ ಮುಖಮಾಡಿರುವ, ಎಂದೂ ಮುಪ್ಪಿಲ್ಲದ, ವಿಷ್ಣುಪತ್ನಿಯಾದ ಆ ಮಹಾದೇವಿಯನ್ನು ಹವಿಸ್ಸಿನಿಂದ ಪೂಜಿಸುತ್ತೇವೆ.',
          },
        },
        {
          n: 2,
          text: 'त्रेधा विष्णुरुरुगायो वि चक्रमे महीं दिवं पृथिवीमन्तरिक्षम् ।\nतच्छ्रोणैति श्रव इच्छमाना पुण्यं श्लोकं यजमानाय कृण्वती ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'Vishnu, the wide-striding, took his three strides over the great heaven, the earth and the mid-region. Following that path Shrona goes, seeking glory and winning good fame for the one who offers the sacrifice. Om, peace, peace, peace.',
            kn: 'ವಿಶಾಲವಾಗಿ ಹೆಜ್ಜೆಯಿಡುವ ವಿಷ್ಣುವು ಮಹತ್ತಾದ ದ್ಯುಲೋಕ, ಭೂಮಿ, ಅಂತರಿಕ್ಷಗಳಲ್ಲಿ ಮೂರು ಹೆಜ್ಜೆಗಳನ್ನಿಟ್ಟನು. ಅದೇ ಮಾರ್ಗದಲ್ಲಿ ಶ್ರೋಣೆಯು ಕೀರ್ತಿಯನ್ನು ಬಯಸುತ್ತಾ ಸಾಗುತ್ತಾಳೆ, ಯಜ್ಞ ಮಾಡುವವನಿಗೆ ಪುಣ್ಯವಾದ ಕೀರ್ತಿಯನ್ನು ತಂದುಕೊಡುತ್ತಾಳೆ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
      ],
    },
  ],
};
