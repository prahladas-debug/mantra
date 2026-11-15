/**
 * Bhojana mantras: the prayers and the parishechana / pranahuti / aposhana rite before and after meals,
 * Madhva and Smarta (Rigveda and Yajurveda) forms.
 * Sources (collated Nov 2026):
 *  Madhva - "Rugvediya Vaishnaviya Trikala Sandhyavandanam" (Hombali, Gadag; archive.org, the "Bhojanavidhi" page),
 *    Srinivasa S. Mathad, "Upaneetarige Upayukta Upadesha" (archive.org), and the Madhva "Rig-Yajurveda
 *    Vaishnava Ahnika Paddhati" (Belgaum, 1892; archive.org, OCR) for the sequence and the verses.
 *  Smarta, Rigveda - "Rigvediya Trikala Sandhyavandane" (Smarta, 2004; archive.org, "Bhojanavidhi") and
 *    Balkur Bhaskara Udupa, "Rgvediya Smarta Nityahnika Vidhih" (2001).
 *  Smarta, Yajurveda - Shridatta Dixit, "Sandhyavandanadi Nityakarmagalu" (Bodhayana, archive.org, "Bhojana vidhi"),
 *    stotranidhi.com "Parishechanam (Bhojana vidhi)" (Apastamba), and the Taittiriya Aranyaka text (10.68-10.69:
 *    antashcarati bhuteshu ..., shraddhayam prane ..., brahmani ma atma amritatvaya).
 *  Annapurne sadapurne, aham vaishvanaro and brahmarpanam are as in the app's "Nitya Shlokas" (collated from several
 *  sources); brahmarpanam is Bhagavad Gita 4.24 and aham vaishvanaro is Gita 15.14.
 * Not confirmed against two sources and therefore left out: the Madhva Hari-sarvottama prayer and "annam brahma raso
 * vishnuh ..." before the meal. The verse "agastyam kumbhakarnam ca ..." is given from a single printed source (Dixit).
 */
import type { Mantra } from '../types';

export const bhojanaMantras: Mantra = {
  id: 'bhojana-mantras',
  title: 'भोजनमन्त्राः',
  titleEn: 'Bhojana Mantras (Before and After Meals)',
  category: 'nitya',
  deity: 'Annapurna / Sri Vishnu',
  source: 'Taittiriya Aranyaka 10; Bhagavad Gita 4.24, 15.14; matha and Smarta nityakarma manuals',
  summary: 'The prayers and rite of the daily meal. Before eating: bow to the food (annapurne sadapurne), offer it to the Lord (brahmarpanam and aham vaishvanaro), sprinkle it with the Gayatri, surround the leaf with water (parishechana), give the chitra-ahuti, sip the water with amritopastaranam (aposhana), offer the five pranahutis and eat in silence. After the meal: amritapidhanam (uttaraposhana). Choose Madhva or Smarta (and, for Smarta, Rigveda or Yajurveda) at the top for the exact words. The rite is for those who wear the sacred thread; children and others say only the prayers of the first two sections.',
  summaryKn: 'ನಿತ್ಯ ಭೋಜನದ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ವಿಧಿ. ಊಟಕ್ಕೆ ಮೊದಲು: ಅನ್ನಕ್ಕೆ ನಮಸ್ಕಾರ (ಅನ್ನಪೂರ್ಣೇ ಸದಾಪೂರ್ಣೇ), ಭಗವಂತನಿಗೆ ಅರ್ಪಣೆ (ಬ್ರಹ್ಮಾರ್ಪಣಂ, ಅಹಂ ವೈಶ್ವಾನರೋ), ಗಾಯತ್ರಿಯಿಂದ ಪ್ರೋಕ್ಷಣೆ, ಎಲೆಯ ಸುತ್ತ ನೀರು ಸುತ್ತುವುದು (ಪರಿಷೇಚನ), ಚಿತ್ರಾಹುತಿ, ಅಮೃತೋಪಸ್ತರಣದಿಂದ ಆಪೋಶನ, ಪಂಚ ಪ್ರಾಣಾಹುತಿ, ಮೌನವಾಗಿ ಊಟ. ಊಟದ ನಂತರ: ಅಮೃತಾಪಿಧಾನ (ಉತ್ತರಾಪೋಶನ). ನಿಖರ ಮಾತುಗಳಿಗಾಗಿ ಮೇಲೆ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ (ಸ್ಮಾರ್ತರಿಗೆ ಋಗ್ವೇದ ಅಥವಾ ಯಜುರ್ವೇದ) ಆರಿಸಿ. ಈ ವಿಧಿ ಉಪನೀತರಿಗೆ; ಮಕ್ಕಳು ಮತ್ತು ಇತರರು ಮೊದಲ ಎರಡು ವಿಭಾಗಗಳ ಪ್ರಾರ್ಥನೆಗಳನ್ನು ಮಾತ್ರ ಹೇಳುತ್ತಾರೆ.',
  variants: [
    {
      key: 'tradition',
      title: 'Tradition',
      titleKn: 'ಸಂಪ್ರದಾಯ',
      options: [
        {
          id: 'madhva',
          label: 'Madhva',
          labelKn: 'ಮಾಧ್ವ',
        },
        {
          id: 'smarta',
          label: 'Smarta',
          labelKn: 'ಸ್ಮಾರ್ತ',
        },
      ],
    },
    {
      key: 'veda',
      title: 'Veda (for the Smarta forms)',
      titleKn: 'ವೇದ (ಸ್ಮಾರ್ತ ರೂಪಗಳಿಗೆ)',
      options: [
        {
          id: 'rigveda',
          label: 'Rigveda',
          labelKn: 'ಋಗ್ವೇದ',
        },
        {
          id: 'yajurveda',
          label: 'Yajurveda (Taittiriya)',
          labelKn: 'ಯಜುರ್ವೇದ (ತೈತ್ತಿರೀಯ)',
        },
      ],
    },
  ],
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'Madhva (Rigveda form as printed in the Gadag and Belgaum manuals and by Mathad; Yajurvedi Madhva families follow the same words in their manuals) and Smarta Rigveda and Yajurveda are given step by step. Not included, because no two printed sources agreed on the words: the Madhva Hari-sarvottama prayer and "annam brahma raso vishnuh" before the meal, and the Madhva remarks on bhojana in dasa-sahitya. Families differ in small details; follow your elders.',
  sections: [
    {
      title: 'अन्नवन्दनम्',
      titleEn: 'Bowing to the food (everyone)',
      note: 'Sit facing east (or north) with the leaf or plate before you, bow to the food and say this verse. Everyone, children included, begins the meal this way.',
      noteKn: 'ಪೂರ್ವ (ಅಥವಾ ಉತ್ತರ) ಮುಖವಾಗಿ ಎಲೆ ಅಥವಾ ತಟ್ಟೆಯ ಮುಂದೆ ಕುಳಿತು ಅನ್ನಕ್ಕೆ ನಮಸ್ಕರಿಸಿ ಈ ಶ್ಲೋಕ ಹೇಳಿ. ಮಕ್ಕಳೂ ಸೇರಿ ಎಲ್ಲರೂ ಊಟವನ್ನು ಹೀಗೆ ಆರಂಭಿಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'अन्नपूर्णे सदापूर्णे शङ्करप्राणवल्लभे ।\nज्ञानवैराग्यसिद्ध्यर्थं भिक्षां देहि च पार्वति ॥',
          meaning: {
            en: 'O Annapurna, ever full, beloved of Shankara, O Parvati: grant me alms so that I may attain knowledge and dispassion.',
            kn: 'ಸದಾ ಪೂರ್ಣಳಾದ ಅನ್ನಪೂರ್ಣೇ, ಶಂಕರನ ಪ್ರಾಣವಲ್ಲಭೆಯೇ, ಪಾರ್ವತಿಯೇ, ಜ್ಞಾನ ವೈರಾಗ್ಯಗಳು ಸಿದ್ಧಿಸುವಂತೆ ನನಗೆ ಭಿಕ್ಷೆಯನ್ನು ನೀಡು.',
          },
        },
      ],
    },
    {
      title: 'अर्पणम्',
      titleEn: 'Offering the meal to the Lord (everyone)',
      note: 'Said by all while the food is served, or before beginning to eat, offering the meal to the Lord. The "saha navavatu" prayer, with which stotranidhi.com begins the meal, is used by Yajurvedi Smartas.',
      noteKn: 'ಊಟ ಬಡಿಸುವಾಗ ಅಥವಾ ಊಟ ಆರಂಭಿಸುವ ಮೊದಲು, ಭಗವಂತನಿಗೆ ಅರ್ಪಿಸುತ್ತಾ ಎಲ್ಲರೂ ಹೇಳುವ ಶ್ಲೋಕಗಳು. “ಸಹ ನಾವವತು” ಪ್ರಾರ್ಥನೆಯನ್ನು ಯಜುರ್ವೇದಿ ಸ್ಮಾರ್ತರು ಬಳಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः ।\nप्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम् ॥',
          meaning: {
            en: 'The Lord says: becoming Vaishvanara, the fire of digestion, I dwell in the bodies of living beings and, joined with the in- and out-breaths, digest the four kinds of food. (Bhagavad Gita 15.14)',
            kn: 'ಭಗವಂತನು ಹೇಳುತ್ತಾನೆ: ನಾನೇ ವೈಶ್ವಾನರನೆಂಬ ಜಠರಾಗ್ನಿಯಾಗಿ ಜೀವಿಗಳ ದೇಹದಲ್ಲಿ ನೆಲೆಸಿ, ಪ್ರಾಣಾಪಾನಗಳೊಡನೆ ಕೂಡಿ ನಾಲ್ಕು ಬಗೆಯ ಅನ್ನವನ್ನು ಜೀರ್ಣಿಸುತ್ತೇನೆ. (ಭಗವದ್ಗೀತೆ 15.14)',
          },
        },
        {
          text: 'ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥',
          meaning: {
            en: 'The act of offering is Brahman, the offering is Brahman, offered by Brahman into the fire of Brahman. Brahman alone is reached by one absorbed in Brahman in all action. (Bhagavad Gita 4.24)',
            kn: 'ಅರ್ಪಿಸುವ ಕ್ರಿಯೆಯೂ ಬ್ರಹ್ಮವೇ, ಹವಿಸ್ಸೂ ಬ್ರಹ್ಮವೇ; ಬ್ರಹ್ಮವೆಂಬ ಅಗ್ನಿಯಲ್ಲಿ ಬ್ರಹ್ಮನಿಂದಲೇ ಅದು ಅರ್ಪಿತವಾಗುತ್ತದೆ. ಎಲ್ಲ ಕರ್ಮಗಳಲ್ಲೂ ಬ್ರಹ್ಮಭಾವದಲ್ಲಿ ನೆಲೆಸಿದವನು ಬ್ರಹ್ಮವನ್ನೇ ಸೇರುತ್ತಾನೆ. (ಭಗವದ್ಗೀತೆ 4.24)',
          },
        },
        {
          text: 'ॐ सह नाववतु ।\nसह नौ भुनक्तु ।\nसह वीर्यं करवावहै ।\nतेजस्विनावधीतमस्तु मा विद्विषावहै ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'Om. May he protect us both (teacher and pupil, or those who eat together); may he nourish us both; may we work together with great energy. May our study be bright; may we not hate one another. Om peace, peace, peace.',
            kn: 'ಓಂ. ನಮ್ಮಿಬ್ಬರನ್ನೂ (ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡುವವರನ್ನು) ಅವನು ರಕ್ಷಿಸಲಿ; ನಮ್ಮಿಬ್ಬರನ್ನೂ ಪೋಷಿಸಲಿ; ನಾವು ಒಟ್ಟಾಗಿ ಬಲದಿಂದ ಕೆಲಸ ಮಾಡೋಣ. ನಮ್ಮ ಅಧ್ಯಯನ ತೇಜಸ್ವಿಯಾಗಲಿ; ನಾವು ಪರಸ್ಪರ ದ್ವೇಷಿಸದಿರೋಣ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
          when: {
            tradition: ['smarta'],
            veda: ['yajurveda'],
          },
        },
      ],
    },
    {
      title: 'तीर्थप्राशनम्',
      titleEn: 'Taking the tirtha (Madhva)',
      note: 'Before the meal, take the tirtha (the water of the Lord\'s puja, with a tulasi leaf) three times, saying this verse. Then the parishechana.',
      noteKn: 'ಊಟಕ್ಕೆ ಮೊದಲು ದೇವರ ತೀರ್ಥವನ್ನು (ತುಳಸಿಯೊಂದಿಗೆ) ಈ ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ಮೂರು ಬಾರಿ ತೆಗೆದುಕೊಳ್ಳಿ. ನಂತರ ಪರಿಷೇಚನ.',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'प्रथमं कायशुद्ध्यर्थं द्वितीयं धर्मसाधनम् ।\nतृतीयं मोक्षमाप्नोति एवं तीर्थं त्रिधा पिबेत् ॥',
          meaning: {
            en: 'The first sip is for the purity of the body, the second for the practice of dharma, and with the third one attains liberation: thus one should drink the tirtha three times.',
            kn: 'ಮೊದಲನೆಯದು ದೇಹಶುದ್ಧಿಗಾಗಿ, ಎರಡನೆಯದು ಧರ್ಮಸಾಧನೆಗಾಗಿ, ಮೂರನೆಯದರಿಂದ ಮೋಕ್ಷವನ್ನು ಪಡೆಯುತ್ತಾನೆ — ಹೀಗೆ ತೀರ್ಥವನ್ನು ಮೂರು ಬಾರಿ ಕುಡಿಯಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'परिषेचनम् — चित्राहुतिः',
      titleEn: 'Parishechana and chitra-ahuti (Madhva)',
      note: 'Touching the leaf or vessel with the left hand, sprinkle the food with tirtha (with a tulasi leaf) and the Gayatri, then pour water round the vessel, clockwise from the north-east back to the north-east, saying the first sentence by day or the second at night. Then place two small portions of rice on the ground at the right of the leaf for Chitra and Chitragupta saying the last verse.',
      noteKn: 'ಎಡಗೈಯಿಂದ ಎಲೆ ಅಥವಾ ಪಾತ್ರೆಯನ್ನು ಮುಟ್ಟಿ, ಗಾಯತ್ರೀ ಮಂತ್ರದಿಂದ ತುಳಸಿಸಹಿತ ತೀರ್ಥವನ್ನು ಅನ್ನದ ಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿ; ನಂತರ ಹಗಲಿನಲ್ಲಿ ಮೊದಲ ವಾಕ್ಯ, ರಾತ್ರಿಯಲ್ಲಿ ಎರಡನೆಯದು ಹೇಳುತ್ತಾ ಈಶಾನ್ಯದಿಂದ ಈಶಾನ್ಯದವರೆಗೆ ಪ್ರದಕ್ಷಿಣವಾಗಿ ಪಾತ್ರೆಯ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತಿ. ನಂತರ ಎಲೆಯ ಬಲಭಾಗದಲ್ಲಿ ಚಿತ್ರ ಮತ್ತು ಚಿತ್ರಗುಪ್ತರಿಗೆ ಎರಡು ಅನ್ನದ ತುತ್ತುಗಳನ್ನು ಇಟ್ಟು ಕೊನೆಯ ಶ್ಲೋಕ ಹೇಳಿ.',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'ॐ भूर्भुवः सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, Bhur, Bhuvah, Svah. We meditate on the glorious light of the divine Savitri; may he inspire our minds.',
            kn: 'ಓಂ ಭೂಃ ಭುವಃ ಸುವಃ. ಸವಿತೃ ದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನು ಪ್ರೇರಿಸಲಿ.',
          },
        },
        {
          text: 'सत्यं त्वर्तेन परिषिञ्चामि ॥ (दिवा)',
          meaning: {
            en: 'I surround the food with water, with "truth by the law (rita)" (by day).',
            kn: '“ಋತದಿಂದ ಸತ್ಯವನ್ನು (ಸುತ್ತುವೆ)” — ಹೀಗೆ ಅನ್ನದ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತುತ್ತೇನೆ (ಹಗಲಿನಲ್ಲಿ).',
          },
        },
        {
          text: 'ऋतं त्वा सत्येन परिषिञ्चामि ॥ (रात्रौ)',
          meaning: {
            en: 'I surround the food with water, with "the law (rita) by truth" (at night).',
            kn: '“ಸತ್ಯದಿಂದ ಋತವನ್ನು (ಸುತ್ತುವೆ)” — ಹೀಗೆ ಅನ್ನದ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತುತ್ತೇನೆ (ರಾತ್ರಿಯಲ್ಲಿ).',
          },
        },
        {
          text: 'ॐ चित्राय नमः । ॐ चित्रगुप्ताय नमः ॥',
          meaning: {
            en: 'Om, salutations to Chitra; Om, salutations to Chitragupta.',
            kn: 'ಓಂ ಚಿತ್ರನಿಗೆ ನಮಸ್ಕಾರ; ಓಂ ಚಿತ್ರಗುಪ್ತನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'आपोशनम् — प्राणाहुतयः',
      titleEn: 'Aposhana and the five pranahutis (Madhva)',
      note: 'Take a little water (with a tulasi leaf) in the right hand and sip it saying the first line (aposhana). Then take a little food with each of the six svaha-phrases (the pranahutis), wipe the eyes with water (as the Gadag manual says), and eat in silence, remembering the Lord (the Belgaum manual says: remembering "Govinda, Govinda").',
      noteKn: 'ಬಲಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು (ತುಳಸಿಯೊಂದಿಗೆ) ತೆಗೆದುಕೊಂಡು ಮೊದಲ ಸಾಲನ್ನು ಹೇಳಿ ಕುಡಿಯಿರಿ (ಆಪೋಶನ). ನಂತರ ಆರು ಸ್ವಾಹಾ ವಾಕ್ಯಗಳಲ್ಲಿ ಒಂದೊಂದಕ್ಕೂ ಸ್ವಲ್ಪ ಅನ್ನವನ್ನು ಬಾಯಿಗೆ ಹಾಕಿಕೊಳ್ಳಿ (ಪ್ರಾಣಾಹುತಿ); ಗದಗ ಪುಸ್ತಕದಂತೆ ನೀರಿನಿಂದ ಕಣ್ಣುಗಳನ್ನು ಒರೆಸಿಕೊಂಡು, ಭಗವಂತನನ್ನು (ಬೆಳಗಾವಿ ಪುಸ್ತಕದಂತೆ “ಗೋವಿಂದ ಗೋವಿಂದ” ಎಂದು) ಸ್ಮರಿಸುತ್ತಾ ಮೌನವಾಗಿ ಊಟ ಮಾಡಿ.',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'अमृतोपस्तरणमसि स्वाहा ॥',
          meaning: {
            en: 'You are the spreading-under of nectar. Svaha.',
            kn: 'ನೀನು ಅಮೃತದ ಹಾಸು (ಉಪಸ್ತರಣ). ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'ॐ प्राणाय स्वाहा । ॐ अपानाय स्वाहा । ॐ व्यानाय स्वाहा ।\nॐ उदानाय स्वाहा । ॐ समानाय स्वाहा । ॐ ब्रह्मणे स्वाहा ॥',
          meaning: {
            en: 'To Prana, svaha; to Apana, svaha; to Vyana, svaha; to Udana, svaha; to Samana, svaha; to Brahman, svaha.',
            kn: 'ಪ್ರಾಣನಿಗೆ ಸ್ವಾಹಾ; ಅಪಾನನಿಗೆ ಸ್ವಾಹಾ; ವ್ಯಾನನಿಗೆ ಸ್ವಾಹಾ; ಉದಾನನಿಗೆ ಸ್ವಾಹಾ; ಸಮಾನನಿಗೆ ಸ್ವಾಹಾ; ಬ್ರಹ್ಮನಿಗೆ ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'उत्तरापोशनम् — भोजनानन्तरम्',
      titleEn: 'After the meal (Madhva)',
      note: 'At the end of the meal take water in the right hand, say the first line and drink half of it; pour the rest on the ground saying the second verse. Wash the hands and feet, do achamana twice, take the water of the Lord\'s feet (tirtha) with the third verse, and eat a tulasi leaf offered to Vishnu with the last.',
      noteKn: 'ಊಟದ ಕೊನೆಯಲ್ಲಿ ಬಲಗೈಗೆ ನೀರು ಹಾಕಿಕೊಂಡು ಮೊದಲ ಸಾಲನ್ನು ಹೇಳಿ ಅರ್ಧ ಕುಡಿಯಿರಿ; ಉಳಿದ ನೀರನ್ನು ಎರಡನೆಯ ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ನೆಲದ ಮೇಲೆ ಬಿಡಿ. ಕೈಕಾಲು ತೊಳೆದು ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ, ಮೂರನೆಯ ಶ್ಲೋಕದಿಂದ ಹರಿಯ ಪಾದೋದಕ (ತೀರ್ಥ) ತೆಗೆದುಕೊಂಡು, ಕೊನೆಯ ಶ್ಲೋಕದಿಂದ ವಿಷ್ಣುವಿಗೆ ಅರ್ಪಿತವಾದ ತುಳಸೀದಳವನ್ನು ಭಕ್ಷಿಸಿ.',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'अमृतापिधानमसि स्वाहा ॥',
          meaning: {
            en: 'You are the covering of nectar. Svaha.',
            kn: 'ನೀನು ಅಮೃತದ ಹೊದಿಕೆ. ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'रौरवेऽपुण्यनिलये पद्मार्बुदनिवासिनाम् ।\nअर्थिनामुदकं दत्तमक्षय्यमुपतिष्ठतु ॥',
          meaning: {
            en: 'May the water given here become inexhaustible for those in the Raurava hell and other places of misery who dwell there for ages and seek it.',
            kn: 'ರೌರವ ಮೊದಲಾದ ಪುಣ್ಯರಹಿತ ನರಕಗಳಲ್ಲಿ ಅಸಂಖ್ಯ ಕಾಲ ವಾಸಿಸುತ್ತಾ ನೀರನ್ನು ಬಯಸುವವರಿಗೆ ನಾನು ಕೊಟ್ಟ ಈ ನೀರು ಅಕ್ಷಯವಾಗಿ ಒದಗಲಿ.',
          },
        },
        {
          text: 'इदमन्नं पवित्रं स्यात्पानीयं चातिपावनम् ।\nभुक्तपीतविशुद्ध्यर्थं हरेः पादोदकं पिबेत् ॥',
          meaning: {
            en: 'May this food be pure and this water supremely purifying: to purify what I have eaten and drunk, I take the water that washed Hari\'s feet.',
            kn: 'ಈ ಅನ್ನ ಪವಿತ್ರವಾಗಲಿ, ಈ ನೀರು ಅತಿಪಾವನವಾಗಲಿ; ತಿಂದದ್ದು ಕುಡಿದದ್ದು ಶುದ್ಧವಾಗಲೆಂದು ಹರಿಯ ಪಾದೋದಕವನ್ನು ಕುಡಿಯುತ್ತೇನೆ.',
          },
        },
        {
          text: 'भोजनानन्तरं विष्णोरर्पितं तुलसीदलम् ।\nभक्षणात्पापनिर्मुक्तश्चान्द्रायणशताधिकम् ॥',
          meaning: {
            en: 'After the meal, one who eats a tulasi leaf offered to Vishnu is freed from sin, and gains more than the merit of a hundred chandrayana vows.',
            kn: 'ಊಟದ ನಂತರ ವಿಷ್ಣುವಿಗೆ ಅರ್ಪಿತವಾದ ತುಳಸೀದಳವನ್ನು ಭಕ್ಷಿಸುವುದರಿಂದ ಪಾಪಗಳಿಂದ ಮುಕ್ತನಾಗಿ ನೂರಕ್ಕೂ ಹೆಚ್ಚು ಚಾಂದ್ರಾಯಣ ವ್ರತಗಳ ಫಲವನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'परिषेचनम् — चित्राहुतिः',
      titleEn: 'Parishechana and chitra-ahuti (Smarta, Rigveda)',
      note: 'Sprinkle the food with water saying the Gayatri; pour water round the vessel (day: the first sentence, night: the second). Those who are not brahmacharis then draw a line of water on the ground to the right of the vessel and set aside four portions of rice with the last verse; then gather them together, pour water on them, and touch the food.',
      noteKn: 'ಗಾಯತ್ರೀ ಹೇಳುತ್ತಾ ಅನ್ನವನ್ನು ನೀರಿನಿಂದ ಪ್ರೋಕ್ಷಿಸಿ; ಪಾತ್ರೆಯ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತಿ (ಹಗಲು: ಮೊದಲ ವಾಕ್ಯ, ರಾತ್ರಿ: ಎರಡನೆಯದು). ಬ್ರಹ್ಮಚಾರಿಗಳಲ್ಲದವರು ಪಾತ್ರೆಯ ಬಲಭಾಗದಲ್ಲಿ ನೆಲದ ಮೇಲೆ ನೀರಿನ ಗೀಟು ಎಳೆದು ಕೊನೆಯ ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ನಾಲ್ಕು ತುತ್ತು ಅನ್ನವನ್ನು ತೆಗೆದಿಟ್ಟು, ಅವನ್ನು ಒಟ್ಟು ಸೇರಿಸಿ ನೀರು ಬಿಟ್ಟು ಅನ್ನವನ್ನು ಮುಟ್ಟಿಕೊಳ್ಳಿ.',
      when: {
        tradition: ['smarta'],
        veda: ['rigveda'],
      },
      verses: [
        {
          text: 'ॐ भूर्भुवः सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, Bhur, Bhuvah, Svah. We meditate on the glorious light of the divine Savitri; may he inspire our minds.',
            kn: 'ಓಂ ಭೂಃ ಭುವಃ ಸುವಃ. ಸವಿತೃ ದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನು ಪ್ರೇರಿಸಲಿ.',
          },
        },
        {
          text: 'सत्यं त्वर्तेन परिषिञ्चामि ॥ (दिवा)',
          meaning: {
            en: 'I surround the food with water, with "truth by the law (rita)" (by day).',
            kn: '“ಋತದಿಂದ ಸತ್ಯವನ್ನು (ಸುತ್ತುವೆ)” — ಹೀಗೆ ಅನ್ನದ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತುತ್ತೇನೆ (ಹಗಲಿನಲ್ಲಿ).',
          },
        },
        {
          text: 'ऋतं त्वा सत्येन परिषिञ्चामि ॥ (रात्रौ)',
          meaning: {
            en: 'I surround the food with water, with "the law (rita) by truth" (at night).',
            kn: '“ಸತ್ಯದಿಂದ ಋತವನ್ನು (ಸುತ್ತುವೆ)” — ಹೀಗೆ ಅನ್ನದ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತುತ್ತೇನೆ (ರಾತ್ರಿಯಲ್ಲಿ).',
          },
        },
        {
          text: 'ॐ चित्राय स्वाहा । ॐ चित्रगुप्ताय स्वाहा ।\nॐ यमाय स्वाहा । ॐ यमधर्माय स्वाहा ॥',
          meaning: {
            en: 'Om, to Chitra, svaha; to Chitragupta, svaha; to Yama, svaha; to Yamadharma, svaha.',
            kn: 'ಓಂ ಚಿತ್ರನಿಗೆ ಸ್ವಾಹಾ; ಚಿತ್ರಗುಪ್ತನಿಗೆ ಸ್ವಾಹಾ; ಯಮನಿಗೆ ಸ್ವಾಹಾ; ಯಮಧರ್ಮನಿಗೆ ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'आपोशनम् — प्राणाहुतयः',
      titleEn: 'Aposhana and the pranahutis (Smarta, Rigveda)',
      note: 'Touching the leaf with the left middle finger and the food with the right hand, say the first verse, then drink a little water with the second line. Then offer the seven pranahutis, taking a little rice each time with the fingers named in your manual (first: forefinger, middle finger and thumb; second: middle, ring finger and thumb; third: little finger, ring finger and thumb; fourth: middle, ring finger and thumb; the last three: all the fingers), and eat in silence.',
      noteKn: 'ಎಡಗೈ ಮಧ್ಯದ ಬೆರಳಿನಿಂದ ಎಲೆಯನ್ನೂ ಬಲಗೈಯಿಂದ ಅನ್ನವನ್ನೂ ಮುಟ್ಟಿಕೊಂಡು ಮೊದಲ ಶ್ಲೋಕ ಹೇಳಿ, ಎರಡನೆಯ ಸಾಲಿನಿಂದ ಸ್ವಲ್ಪ ನೀರು ಕುಡಿಯಿರಿ. ನಂತರ ಏಳು ಪ್ರಾಣಾಹುತಿಗಳನ್ನು ಕೊಡಿ: ಪ್ರತಿ ಬಾರಿಯೂ ಸ್ವಲ್ಪ ಅನ್ನವನ್ನು ಬೆರಳುಗಳಿಂದ (ಮೊದಲನೆಯದು ತೋರು, ಮಧ್ಯ, ಹೆಬ್ಬೆರಳು; ಎರಡನೆಯದು ಮಧ್ಯ, ಉಂಗುರ, ಹೆಬ್ಬೆರಳು; ಮೂರನೆಯದು ಕಿರುಬೆರಳು, ಉಂಗುರ, ಹೆಬ್ಬೆರಳು; ನಾಲ್ಕನೆಯದು ಮಧ್ಯ, ಉಂಗುರ, ಹೆಬ್ಬೆರಳು; ಕೊನೆಯ ಮೂರು ಎಲ್ಲ ಬೆರಳುಗಳಿಂದ) ಬಾಯಿಗೆ ಹಾಕಿಕೊಂಡು ಮೌನವಾಗಿ ಊಟ ಮಾಡಿ.',
      when: {
        tradition: ['smarta'],
        veda: ['rigveda'],
      },
      verses: [
        {
          text: 'अन्तश्चरति भूतेषु गुहायां सर्वतोमुखः ।\nत्वं यज्ञस्त्वं वषट्कारस्त्वं विष्णुः पुरुषः परः ॥',
          meaning: {
            en: 'He moves within all beings, in the cave of the heart, facing every way. You are sacrifice, you are the vashat-call, you are Vishnu, the Supreme Person.',
            kn: 'ಎಲ್ಲ ಭೂತಗಳೊಳಗೆ, ಹೃದಯ ಗುಹೆಯಲ್ಲಿ, ಸರ್ವತೋಮುಖನಾಗಿ ಸಂಚರಿಸುತ್ತಾನೆ. ನೀನು ಯಜ್ಞ, ನೀನು ವಷಟ್ಕಾರ, ನೀನು ವಿಷ್ಣು, ಪರಮ ಪುರುಷ.',
          },
        },
        {
          text: 'अमृतोपस्तरणमसि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'You are the spreading-under of nectar: I offer this. Svaha.',
            kn: 'ನೀನು ಅಮೃತದ ಹಾಸು; ಇದನ್ನು ಹೋಮಿಸುತ್ತೇನೆ. ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'ॐ प्राणाय स्वाहा । ॐ अपानाय स्वाहा । ॐ व्यानाय स्वाहा ।\nॐ उदानाय स्वाहा । ॐ समानाय स्वाहा ।\nॐ आत्मने स्वाहा । ॐ परमात्मने स्वाहा ॥',
          meaning: {
            en: 'To Prana, svaha; to Apana, svaha; to Vyana, svaha; to Udana, svaha; to Samana, svaha; to the Self, svaha; to the Supreme Self, svaha.',
            kn: 'ಪ್ರಾಣನಿಗೆ ಸ್ವಾಹಾ; ಅಪಾನನಿಗೆ ಸ್ವಾಹಾ; ವ್ಯಾನನಿಗೆ ಸ್ವಾಹಾ; ಉದಾನನಿಗೆ ಸ್ವಾಹಾ; ಸಮಾನನಿಗೆ ಸ್ವಾಹಾ; ಆತ್ಮನಿಗೆ ಸ್ವಾಹಾ; ಪರಮಾತ್ಮನಿಗೆ ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'उत्तरापोशनम्',
      titleEn: 'After the meal (Smarta, Rigveda)',
      note: 'At the end take water in the right hand, say the first line and drink; wash the mouth well, the hands and feet, and do achamana twice. The verse "raurave..." is said while letting the remaining water fall on the ground.',
      noteKn: 'ಊಟದ ಕೊನೆಯಲ್ಲಿ ಬಲಗೈಗೆ ನೀರು ಹಾಕಿಕೊಂಡು ಮೊದಲ ಸಾಲನ್ನು ಹೇಳಿ ಕುಡಿಯಿರಿ; ಬಾಯಿ, ಕೈಕಾಲು ತೊಳೆದು ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. “ರೌರವೇ...” ಶ್ಲೋಕವನ್ನು ಉಳಿದ ನೀರನ್ನು ನೆಲಕ್ಕೆ ಬಿಡುವಾಗ ಹೇಳಿ.',
      when: {
        tradition: ['smarta'],
        veda: ['rigveda'],
      },
      verses: [
        {
          text: 'अमृतापिधानमसि स्वाहा ॥',
          meaning: {
            en: 'You are the covering of nectar. Svaha.',
            kn: 'ನೀನು ಅಮೃತದ ಹೊದಿಕೆ. ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'रौरवेऽपुण्यनिलये पद्मार्बुदनिवासिनाम् ।\nअर्थिनामुदकं दत्तमक्षय्यमुपतिष्ठतु ॥',
          meaning: {
            en: 'May the water given here become inexhaustible for those in the Raurava hell and other places of misery who dwell there for ages and seek it.',
            kn: 'ರೌರವ ಮೊದಲಾದ ಪುಣ್ಯರಹಿತ ನರಕಗಳಲ್ಲಿ ಅಸಂಖ್ಯ ಕಾಲ ವಾಸಿಸುತ್ತಾ ನೀರನ್ನು ಬಯಸುವವರಿಗೆ ನಾನು ಕೊಟ್ಟ ಈ ನೀರು ಅಕ್ಷಯವಾಗಿ ಒದಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'परिषेचनम् — चित्राहुतिः',
      titleEn: 'Parishechana and chitra-ahuti (Smarta, Yajurveda)',
      note: 'Sprinkle the food with water saying the Gayatri; pour water round the vessel (day: the first sentence, night: the second). Those who are not brahmacharis draw a line of water on the ground to the right of the vessel, set down four portions of rice with the svaha-verse, sprinkle water on them with the last verse, gather them together and wash the hand (Dixit adds that if it is not convenient the gathering may be left out, and that some say "sarvebhyo namah triptirastu" once for all four).',
      noteKn: 'ಗಾಯತ್ರೀ ಹೇಳುತ್ತಾ ಅನ್ನವನ್ನು ನೀರಿನಿಂದ ಪ್ರೋಕ್ಷಿಸಿ; ಪಾತ್ರೆಯ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತಿ (ಹಗಲು: ಮೊದಲ ವಾಕ್ಯ, ರಾತ್ರಿ: ಎರಡನೆಯದು). ಬ್ರಹ್ಮಚಾರಿಗಳಲ್ಲದವರು ಬಲಭಾಗದಲ್ಲಿ ನೆಲದ ಮೇಲೆ ನೀರಿನ ಗೆರೆ ಎಳೆದು ಸ್ವಾಹಾ ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ನಾಲ್ಕು ತುತ್ತು ಅನ್ನ ಇಟ್ಟು, ಕೊನೆಯ ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ಅವುಗಳ ಮೇಲೆ ನೀರು ಬಿಟ್ಟು, ಒಟ್ಟು ಸೇರಿಸಿ ಕೈ ತೊಳೆಯಿರಿ (ದೀಕ್ಷಿತರು ಹೇಳುವಂತೆ ಅನುಕೂಲವಿಲ್ಲದಿದ್ದರೆ ಒಟ್ಟು ಸೇರಿಸುವುದನ್ನು ಬಿಡಬಹುದು; ಕೆಲವರು ನಾಲ್ವರಿಗೂ “ಸರ್ವೇಭ್ಯೋ ನಮಃ ತೃಪ್ತಿರಸ್ತು” ಎಂದು ಒಮ್ಮೆಲೇ ಹೇಳುತ್ತಾರೆ).',
      when: {
        tradition: ['smarta'],
        veda: ['yajurveda'],
      },
      verses: [
        {
          text: 'ॐ भूर्भुवः सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, Bhur, Bhuvah, Svah. We meditate on the glorious light of the divine Savitri; may he inspire our minds.',
            kn: 'ಓಂ ಭೂಃ ಭುವಃ ಸುವಃ. ಸವಿತೃ ದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನು ಪ್ರೇರಿಸಲಿ.',
          },
        },
        {
          text: 'सत्यं त्वर्तेन परिषिञ्चामि ॥ (दिवा)',
          meaning: {
            en: 'I surround the food with water, with "truth by the law (rita)" (by day).',
            kn: '“ಋತದಿಂದ ಸತ್ಯವನ್ನು (ಸುತ್ತುವೆ)” — ಹೀಗೆ ಅನ್ನದ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತುತ್ತೇನೆ (ಹಗಲಿನಲ್ಲಿ).',
          },
        },
        {
          text: 'ऋतं त्वा सत्येन परिषिञ्चामि ॥ (रात्रौ)',
          meaning: {
            en: 'I surround the food with water, with "the law (rita) by truth" (at night).',
            kn: '“ಸತ್ಯದಿಂದ ಋತವನ್ನು (ಸುತ್ತುವೆ)” — ಹೀಗೆ ಅನ್ನದ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತುತ್ತೇನೆ (ರಾತ್ರಿಯಲ್ಲಿ).',
          },
        },
        {
          text: 'ॐ चित्राय स्वाहा । ॐ चित्रगुप्ताय स्वाहा ।\nॐ यमाय स्वाहा । ॐ यमधर्मराजाय स्वाहा ॥',
          meaning: {
            en: 'Om, to Chitra, svaha; to Chitragupta, svaha; to Yama, svaha; to Yamadharmaraja, svaha.',
            kn: 'ಓಂ ಚಿತ್ರನಿಗೆ ಸ್ವಾಹಾ; ಚಿತ್ರಗುಪ್ತನಿಗೆ ಸ್ವಾಹಾ; ಯಮನಿಗೆ ಸ್ವಾಹಾ; ಯಮಧರ್ಮರಾಜನಿಗೆ ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'ॐ चित्राय नमः तृप्तिरस्तु । ॐ चित्रगुप्ताय नमः तृप्तिरस्तु ।\nॐ यमाय नमः तृप्तिरस्तु । ॐ यमधर्मराजाय नमः तृप्तिरस्तु ॥',
          meaning: {
            en: 'Om, salutations to Chitra: may he be satisfied; salutations to Chitragupta: may he be satisfied; salutations to Yama: may he be satisfied; salutations to Yamadharmaraja: may he be satisfied.',
            kn: 'ಓಂ ಚಿತ್ರನಿಗೆ ನಮಸ್ಕಾರ, ತೃಪ್ತಿಯಾಗಲಿ; ಚಿತ್ರಗುಪ್ತನಿಗೆ ನಮಸ್ಕಾರ, ತೃಪ್ತಿಯಾಗಲಿ; ಯಮನಿಗೆ ನಮಸ್ಕಾರ, ತೃಪ್ತಿಯಾಗಲಿ; ಯಮಧರ್ಮರಾಜನಿಗೆ ನಮಸ್ಕಾರ, ತೃಪ್ತಿಯಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'आपोशनम् — प्राणाहुतयः',
      titleEn: 'Aposhana and the pranahutis (Smarta, Yajurveda)',
      note: 'Touching the leaf with the left ring finger and the food with the right hand, say the first verse, sip water with the second line, then take a little rice with each of the five pranahuti phrases and say the last phrase after the fifth (as in the Apastamba text on stotranidhi.com and the Taittiriya Aranyaka). Followers of the Bodhayana manual of Dixit say "brahmane svaha" as a sixth pranahuti instead. Eat in silence.',
      noteKn: 'ಎಡಗೈ ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಎಲೆಯನ್ನೂ ಬಲಗೈಯಿಂದ ಅನ್ನವನ್ನೂ ಮುಟ್ಟಿಕೊಂಡು ಮೊದಲ ಶ್ಲೋಕ ಹೇಳಿ, ಎರಡನೆಯ ಸಾಲಿನಿಂದ ನೀರು ಕುಡಿಯಿರಿ; ನಂತರ ಐದು ಪ್ರಾಣಾಹುತಿ ವಾಕ್ಯಗಳಲ್ಲಿ ಒಂದೊಂದಕ್ಕೂ ಸ್ವಲ್ಪ ಅನ್ನ ತೆಗೆದುಕೊಂಡು ಐದನೆಯ ನಂತರ ಕೊನೆಯ ವಾಕ್ಯ ಹೇಳಿ (ಆಪಸ್ತಂಬ ಪಾಠ, ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕದಂತೆ). ದೀಕ್ಷಿತರ ಬೋಧಾಯನ ಪುಸ್ತಕದವರು ಆರನೆಯ ಆಹುತಿಯಾಗಿ “ಬ್ರಹ್ಮಣೇ ಸ್ವಾಹಾ” ಹೇಳುತ್ತಾರೆ. ಮೌನವಾಗಿ ಊಟ ಮಾಡಿ.',
      when: {
        tradition: ['smarta'],
        veda: ['yajurveda'],
      },
      verses: [
        {
          text: 'ॐ अन्तश्चरति भूतेषु गुहायां विश्वमूर्तिषु ।\nत्वं यज्ञस्त्वं वषट्कारस्त्वमिन्द्रस्त्वं रुद्रस्त्वं विष्णुस्त्वं ब्रह्म त्वं प्रजापतिः ।\nत्वं तदाप आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ॥\nप्रजापते न त्वदेतान्यन्यो विश्वा जातानि परि ता बभूव ।\nयत्कामास्ते जुहुमस्तन्नो अस्तु वयं स्याम पतयो रयीणाम् ॥',
          meaning: {
            en: 'Om. He moves within all beings, in the cave of the heart, in all forms. You are sacrifice, the vashat-call, Indra, Rudra, Vishnu, Brahma, Prajapati. You are that: the waters, the light, the essence, the nectar, Brahman, Bhur Bhuvah Svah, Om. O Prajapati, no other than you has encompassed all these born things; may whatever we desire in offering to you be ours, and may we be lords of wealth.',
            kn: 'ಓಂ. ಅವನು ಎಲ್ಲ ಭೂತಗಳೊಳಗೆ, ಹೃದಯ ಗುಹೆಯಲ್ಲಿ, ಎಲ್ಲ ರೂಪಗಳಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾನೆ. ನೀನು ಯಜ್ಞ, ವಷಟ್ಕಾರ, ಇಂದ್ರ, ರುದ್ರ, ವಿಷ್ಣು, ಬ್ರಹ್ಮ, ಪ್ರಜಾಪತಿ. ನೀನು ಆ ತತ್ತ್ವ: ಆಪಸ್ಸು, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ, ಬ್ರಹ್ಮ, ಭೂರ್ಭುವಃಸ್ವರೋಂ. ಹೇ ಪ್ರಜಾಪತಿ, ನಿನ್ನ ಹೊರತು ಬೇರೆ ಯಾರೂ ಈ ಹುಟ್ಟಿದ ಎಲ್ಲವನ್ನೂ ಆವರಿಸಲಿಲ್ಲ; ಯಾವ ಇಷ್ಟದಿಂದ ನಿನಗೆ ಆಹುತಿ ಕೊಡುತ್ತೇವೋ ಅದು ನಮಗಾಗಲಿ; ನಾವು ಸಂಪತ್ತಿನ ಒಡೆಯರಾಗೋಣ.',
          },
        },
        {
          text: 'अमृतोपस्तरणमसि स्वाहा ॥',
          meaning: {
            en: 'You are the spreading-under of nectar. Svaha.',
            kn: 'ನೀನು ಅಮೃತದ ಹಾಸು. ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'ॐ प्राणाय स्वाहा । ॐ अपानाय स्वाहा । ॐ व्यानाय स्वाहा ।\nॐ उदानाय स्वाहा । ॐ समानाय स्वाहा ।\nब्रह्मणि म आत्माऽमृतत्वाय ॥',
          meaning: {
            en: 'To Prana, svaha; to Apana, svaha; to Vyana, svaha; to Udana, svaha; to Samana, svaha. May my self be in Brahman for immortality.',
            kn: 'ಪ್ರಾಣನಿಗೆ ಸ್ವಾಹಾ; ಅಪಾನನಿಗೆ ಸ್ವಾಹಾ; ವ್ಯಾನನಿಗೆ ಸ್ವಾಹಾ; ಉದಾನನಿಗೆ ಸ್ವಾಹಾ; ಸಮಾನನಿಗೆ ಸ್ವಾಹಾ. ಅಮೃತತ್ವಕ್ಕಾಗಿ ನನ್ನ ಆತ್ಮ ಬ್ರಹ್ಮನಲ್ಲಿ ನೆಲೆಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'उत्तरापोशनम्',
      titleEn: 'After the meal (Smarta, Yajurveda)',
      note: 'At the end take water in the right hand and drink half with the first line; pour the rest on the ground with the second verse. Wash the hands and feet, do achamana twice, and then say the last verse (japa), as Dixit gives it.',
      noteKn: 'ಊಟದ ಕೊನೆಯಲ್ಲಿ ಬಲಗೈಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು ಮೊದಲ ಸಾಲನ್ನು ಹೇಳಿ ಅರ್ಧ ಕುಡಿಯಿರಿ; ಉಳಿದ ನೀರನ್ನು ಎರಡನೆಯ ಶ್ಲೋಕ ಹೇಳಿ ನೆಲಕ್ಕೆ ಬಿಡಿ. ಕೈಕಾಲು ತೊಳೆದು ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ; ನಂತರ ದೀಕ್ಷಿತರ ಪುಸ್ತಕದಂತೆ ಕೊನೆಯ ಶ್ಲೋಕವನ್ನು ಜಪಿಸಿ.',
      when: {
        tradition: ['smarta'],
        veda: ['yajurveda'],
      },
      verses: [
        {
          text: 'अमृतापिधानमसि स्वाहा ॥',
          meaning: {
            en: 'You are the covering of nectar. Svaha.',
            kn: 'ನೀನು ಅಮೃತದ ಹೊದಿಕೆ. ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'रौरवेऽपुण्यनिलये पद्मार्बुदनिवासिनाम् ।\nअर्थिनामुदकं दत्तमक्षय्यमुपतिष्ठतु ॥',
          meaning: {
            en: 'May the water given here become inexhaustible for those in the Raurava hell and other places of misery who dwell there for ages and seek it.',
            kn: 'ರೌರವ ಮೊದಲಾದ ಪುಣ್ಯರಹಿತ ನರಕಗಳಲ್ಲಿ ಅಸಂಖ್ಯ ಕಾಲ ವಾಸಿಸುತ್ತಾ ನೀರನ್ನು ಬಯಸುವವರಿಗೆ ನಾನು ಕೊಟ್ಟ ಈ ನೀರು ಅಕ್ಷಯವಾಗಿ ಒದಗಲಿ.',
          },
        },
        {
          text: 'अगस्त्यं कुम्भकर्णं च शनिं च वडवानलम् ।\nआहारपरिणामार्थं स्मरामि च वृकोदरम् ॥',
          meaning: {
            en: 'For the digestion of the food I remember Agastya, Kumbhakarna, Shani, the Vadavanala fire, and Vrikodara (Bhima).',
            kn: 'ಆಹಾರ ಜೀರ್ಣವಾಗಲೆಂದು ಅಗಸ್ತ್ಯ, ಕುಂಭಕರ್ಣ, ಶನಿ, ವಡವಾನಲ ಮತ್ತು ವೃಕೋದರ (ಭೀಮ) — ಇವರನ್ನು ಸ್ಮರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
  ],
};
