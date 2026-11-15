/**
 * Ishavasya Upanishad: Shukla Yajurveda, Kanva recension (18 mantras), as read
 * in Sri Madhvacharya's Ishavasya Bhashya; with the Shanti mantra.
 *
 * Sources collated (Nov 2026):
 * - Madhva's Ishavasyopanishad-bhashya with the mula text (Rashtriya Sanskrit
 *   Vidyapeetha, Tirupati; eBharati Sampat no. 3247, via sanskrit/raw_etexts).
 * - Sri Raghavendra Tirtha's Ishavasya Khandartha (mula and gloss, same
 *   repository): used for the Madhva readings in the meanings.
 * - GRETIL, Isha Upanishad, Kanva recension with Shankara's commentary (mula
 *   checked against Limaye and Vadekar, Eighteen Principal Upanisads, 1958).
 * - Ishavasyopanishat, Anandashrama Sanskrit Series (Poona 1927; eBharati no.
 *   8691), which also records the Madhyandina readings of Uvata's text.
 * - Vajasaneyi Samhita 40 (Madhyandina) on sa.wikisource, for the note on the
 *   Madhyandina text.
 * Madhva readings: 5 तदु सर्वस्य बाह्यतः (both Madhva witnesses; GRETIL and
 * Anandashrama read सर्वस्यास्य), 17 with ॐ before both halves. Madhva's
 * editions number 20 mantras (16 and 17 are each split in two); the usual
 * 18-mantra numbering is kept here. The Madhva glosses in the meanings are
 * condensed from the bhashya and Raghavendra's khandartha and should be
 * checked by a scholar of the tradition.
 */
import type { Mantra } from '../types';

const SHANTI = 'ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते ।\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥\nॐ शान्तिः शान्तिः शान्तिः ॥';

const SHANTI_MEANING = {
  en: 'That is full; this is full. From the full, the full comes forth. When the full is taken from the full, the full alone remains. Om, peace, peace, peace. (Madhva reading: the Lord\'s original form and each of His forms and incarnations are equally full; when a form comes forth from Him, His fullness is in no way lessened.)',
  kn: 'ಅದು ಪೂರ್ಣ; ಇದು ಪೂರ್ಣ. ಪೂರ್ಣದಿಂದ ಪೂರ್ಣವು ಹೊರಹೊಮ್ಮುತ್ತದೆ. ಪೂರ್ಣದಿಂದ ಪೂರ್ಣವನ್ನು ತೆಗೆದುಕೊಂಡರೂ ಪೂರ್ಣವೇ ಉಳಿಯುತ್ತದೆ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ. (ಮಾಧ್ವ ಅರ್ಥ: ಭಗವಂತನ ಮೂಲರೂಪವೂ ಅವನ ಪ್ರತಿಯೊಂದು ರೂಪವೂ ಅವತಾರವೂ ಸಮಾನವಾಗಿ ಪೂರ್ಣ; ಅವನಿಂದ ಒಂದು ರೂಪವು ಹೊರಹೊಮ್ಮಿದಾಗ ಅವನ ಪೂರ್ಣತೆ ಸ್ವಲ್ಪವೂ ಕಡಿಮೆಯಾಗುವುದಿಲ್ಲ.)',
};

export const ishavasyaUpanishad: Mantra = {
  id: 'ishavasya-upanishad',
  title: 'ईशावास्योपनिषत्',
  titleEn: 'Ishavasya Upanishad',
  category: 'vedic',
  deity: 'Paramatma (Vishnu)',
  source: 'Shukla Yajurveda, Kanva Samhita 40 (Ishavasya Upanishad)',
  summary:
    'The shortest of the principal Upanishads and the last chapter of the Shukla Yajurveda Samhita. In eighteen mantras it teaches that everything is pervaded and ruled by the Lord, that one should live by what He gives, act without craving, see Him in all beings, rightly understand knowledge and ignorance, creation and dissolution, and finally pray to Him for the vision of His auspicious form and for the good path. Madhvacharya reads it as the hymn with which Svayambhuva Manu praised Vishnu as Yajna; his readings are noted with the meanings.',
  summaryKn:
    'ಪ್ರಮುಖ ಉಪನಿಷತ್ತುಗಳಲ್ಲಿ ಅತ್ಯಂತ ಚಿಕ್ಕದು, ಶುಕ್ಲ ಯಜುರ್ವೇದ ಸಂಹಿತೆಯ ಕೊನೆಯ ಅಧ್ಯಾಯ. ಜಗತ್ತೆಲ್ಲವೂ ಭಗವಂತನಿಂದ ವ್ಯಾಪ್ತವಾಗಿದೆ, ಅವನ ನಿಯಂತ್ರಣದಲ್ಲಿದೆ; ಅವನು ಕೊಟ್ಟದ್ದರಿಂದಲೇ ಬದುಕಬೇಕು, ಆಸೆಯಿಲ್ಲದೆ ಕರ್ಮ ಮಾಡಬೇಕು, ಎಲ್ಲ ಜೀವಿಗಳಲ್ಲಿ ಅವನನ್ನು ಕಾಣಬೇಕು, ವಿದ್ಯೆ ಅವಿದ್ಯೆಗಳನ್ನೂ ಸೃಷ್ಟಿ ಸಂಹಾರಗಳನ್ನೂ ಸರಿಯಾಗಿ ತಿಳಿಯಬೇಕು ಎಂದು ಹದಿನೆಂಟು ಮಂತ್ರಗಳಲ್ಲಿ ಇದು ಬೋಧಿಸುತ್ತದೆ; ಅವನ ಮಂಗಳರೂಪದ ದರ್ಶನಕ್ಕಾಗಿಯೂ ಸನ್ಮಾರ್ಗಕ್ಕಾಗಿಯೂ ಪ್ರಾರ್ಥನೆಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ. ಸ್ವಾಯಂಭುವ ಮನುವು ಯಜ್ಞನಾಮಕ ವಿಷ್ಣುವನ್ನು ಸ್ತುತಿಸಿದ ಸ್ತೋತ್ರವೆಂದು ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು ಇದನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತಾರೆ; ಅವರ ಅರ್ಥವನ್ನು ಅರ್ಥಗಳೊಂದಿಗೆ ಸೂಚಿಸಲಾಗಿದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'शान्तिपाठः',
      titleEn: 'Opening Shanti',
      verses: [{ text: SHANTI, meaning: SHANTI_MEANING }],
    },
    {
      title: 'ईशावास्योपनिषत्',
      titleEn: 'Ishavasya Upanishad',
      note: 'Kanva text as read by Madhvacharya. Madhva editions count 20 mantras, treating योऽसावसौ पुरुषः सोऽहमस्मि (end of 16) and the two halves of 17 as separate mantras; other Kanva editions read तदु सर्वस्यास्य बाह्यतः in 5 and have ॐ only once in 17. The Madhyandina text (Vajasaneyi Samhita 40) has 17 mantras: it puts the sambhuti mantras (12-14) before the vidya mantras (9-11), reads प्रेत्यापि गच्छन्ति (3), विचिकित्सति (6) and विद्याया … अविद्यायाः (10), gives 17 as वायुरनिलममृतमथेदं भस्मान्तं शरीरम् । ॐ क्रतो स्मर क्लिबे स्मर कृतं स्मर, then अग्ने नय, and ends with हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम् । योऽसावादित्ये पुरुषः सोऽसावहम् । ॐ खं ब्रह्म; it has no पूषन्नेकर्षे mantra.',
      noteKn: 'ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು ಸ್ವೀಕರಿಸಿದ ಕಾಣ್ವ ಪಾಠ. ಮಾಧ್ವ ಮುದ್ರಣಗಳು ೨೦ ಮಂತ್ರಗಳನ್ನು ಎಣಿಸುತ್ತವೆ: ೧೬ರ ಕೊನೆಯ "ಯೋಽಸಾವಸೌ ಪುರುಷಃ ಸೋಽಹಮಸ್ಮಿ" ಮತ್ತು ೧೭ರ ಎರಡು ಭಾಗಗಳನ್ನು ಬೇರೆ ಮಂತ್ರಗಳಾಗಿ ಪರಿಗಣಿಸುತ್ತವೆ. ಇತರ ಕಾಣ್ವ ಮುದ್ರಣಗಳಲ್ಲಿ ೫ರಲ್ಲಿ "ತದು ಸರ್ವಸ್ಯಾಸ್ಯ ಬಾಹ್ಯತಃ" ಎಂದೂ, ೧೭ರಲ್ಲಿ ಓಂಕಾರ ಒಮ್ಮೆ ಮಾತ್ರ ಎಂದೂ ಇದೆ. ಮಾಧ್ಯಂದಿನ ಪಾಠದಲ್ಲಿ (ವಾಜಸನೇಯಿ ಸಂಹಿತೆ ೪೦) ೧೭ ಮಂತ್ರಗಳಿವೆ: ಸಂಭೂತಿಯ ಮಂತ್ರಗಳು (೧೨-೧೪) ವಿದ್ಯೆಯ ಮಂತ್ರಗಳಿಗಿಂತ (೯-೧೧) ಮೊದಲು ಬರುತ್ತವೆ; "ಪ್ರೇತ್ಯಾಪಿ ಗಚ್ಛಂತಿ" (೩), "ವಿಚಿಕಿತ್ಸತಿ" (೬), "ವಿದ್ಯಾಯಾ … ಅವಿದ್ಯಾಯಾಃ" (೧೦) ಎಂಬ ಪಾಠಗಳಿವೆ; ೧೭ "ವಾಯುರನಿಲಮಮೃತಮಥೇದಂ ಭಸ್ಮಾಂತಂ ಶರೀರಮ್ । ಓಂ ಕ್ರತೋ ಸ್ಮರ ಕ್ಲಿಬೇ ಸ್ಮರ ಕೃತಂ ಸ್ಮರ" ಎಂದಿದೆ; ಅನಂತರ "ಅಗ್ನೇ ನಯ", ಕೊನೆಯಲ್ಲಿ "ಹಿರಣ್ಮಯೇನ ಪಾತ್ರೇಣ ಸತ್ಯಸ್ಯಾಪಿಹಿತಂ ಮುಖಮ್ । ಯೋಽಸಾವಾದಿತ್ಯೇ ಪುರುಷಃ ಸೋಽಸಾವಹಮ್ । ಓಂ ಖಂ ಬ್ರಹ್ಮ". "ಪೂಷನ್ನೇಕರ್ಷೇ" ಮಂತ್ರ ಅಲ್ಲಿಲ್ಲ.',
      verses: [
        {
          n: 1,
          text: 'ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥',
          meaning: {
            en: 'All this, whatever moves in this moving world, is to be dwelt in by the Lord. Enjoy through renunciation; do not covet anyone\'s wealth. (Madhva reading: everything is indwelt and controlled by the Lord and rests on Prakriti, which depends on Him; so live on what He gives, and do not beg wealth of anyone else, since no one but He has the power to give.)',
            kn: 'ಈ ಚಲಿಸುವ ಜಗತ್ತಿನಲ್ಲಿ ಚಲಿಸುವ ಇದೆಲ್ಲವೂ ಈಶ್ವರನಿಗೆ ವಾಸಸ್ಥಾನವಾಗಬೇಕಾದದ್ದು. ತ್ಯಾಗದಿಂದ ಅನುಭವಿಸು; ಯಾರ ಧನವನ್ನೂ ಆಸೆಪಡಬೇಡ. (ಮಾಧ್ವ ಅರ್ಥ: ಎಲ್ಲವೂ ಈಶ್ವರನಿಂದ ಒಳಹೊಕ್ಕು ನಿಯಂತ್ರಿಸಲ್ಪಟ್ಟಿದೆ, ಅವನ ಅಧೀನವಾದ ಪ್ರಕೃತಿಯನ್ನು ಆಶ್ರಯಿಸಿದೆ; ಆದ್ದರಿಂದ ಅವನು ಕೊಟ್ಟದ್ದರಿಂದಲೇ ಜೀವಿಸು, ಬೇರೆ ಯಾರಲ್ಲಿಯೂ ಧನವನ್ನು ಬೇಡಬೇಡ, ಅವನಲ್ಲದೆ ಬೇರೆ ಯಾರಿಗೂ ಕೊಡುವ ಸಾಮರ್ಥ್ಯವಿಲ್ಲ.)',
          },
        },
        {
          n: 2,
          text: 'कुर्वन्नेवेह कर्माणि जिजीविषेच्छतं समाः ।\nएवं त्वयि नान्यथेतोऽस्ति न कर्म लिप्यते नरे ॥',
          meaning: {
            en: 'Only by doing works here should one wish to live a hundred years. For you, living thus, there is no other way than this; so action does not cling to a man. (Madhva reading: one should go on doing one\'s proper duties as worship of the Lord, without desire for their fruit, all one\'s life; if one gives up such worship, it is not true that no karma clings to him; even a knower loses in bliss.)',
            kn: 'ಇಲ್ಲಿ ಕರ್ಮಗಳನ್ನು ಮಾಡುತ್ತಲೇ ನೂರು ವರ್ಷ ಬದುಕಲು ಬಯಸಬೇಕು. ಹೀಗೆ ಬದುಕುವ ನಿನಗೆ ಇದಲ್ಲದೆ ಬೇರೆ ದಾರಿಯಿಲ್ಲ; ಹೀಗಾದರೆ ಕರ್ಮವು ಮನುಷ್ಯನಿಗೆ ಅಂಟುವುದಿಲ್ಲ. (ಮಾಧ್ವ ಅರ್ಥ: ಜೀವನವಿಡೀ ತನ್ನ ಸ್ವಧರ್ಮದ ಕರ್ಮಗಳನ್ನು ಫಲಾಪೇಕ್ಷೆಯಿಲ್ಲದೆ ಭಗವತ್ಪೂಜೆಯಾಗಿ ಮಾಡುತ್ತಿರಬೇಕು; ಅಂತಹ ಪೂಜೆಯನ್ನು ಬಿಟ್ಟರೆ ಕರ್ಮ ಅಂಟುವುದಿಲ್ಲ ಎಂಬುದು ಸತ್ಯವಲ್ಲ; ಜ್ಞಾನಿಗೂ ಆನಂದದಲ್ಲಿ ಕೊರತೆಯಾಗುತ್ತದೆ.)',
          },
        },
        {
          n: 3,
          text: 'असुर्या नाम ते लोका अन्धेन तमसाऽऽवृताः ।\nतांस्ते प्रेत्याभिगच्छन्ति ये के चात्महनो जनाः ॥',
          meaning: {
            en: 'Sunless are those worlds, covered in blind darkness. To them, after death, go all those people who are slayers of the self. (Madhva reading: those worlds are utterly joyless and are reached by the asuras; all who misknow the Lord, the true Self, and turn away from Hari surely go there.)',
            kn: 'ಅಸುರ್ಯವೆಂಬ ಆ ಲೋಕಗಳು ಗಾಢವಾದ ಕತ್ತಲೆಯಿಂದ ಆವೃತವಾಗಿವೆ. ಆತ್ಮಘಾತಕರಾದ ಜನರೆಲ್ಲರೂ ಮರಣಾನಂತರ ಅಲ್ಲಿಗೆ ಹೋಗುತ್ತಾರೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಆ ಲೋಕಗಳು ಸುಖದ ಲೇಶವೂ ಇಲ್ಲದವು, ಅಸುರರು ಸೇರುವಂಥವು; ನಿಜವಾದ ಆತ್ಮನಾದ ಭಗವಂತನನ್ನು ತಪ್ಪಾಗಿ ತಿಳಿದು ಶ್ರೀಹರಿಗೆ ವಿಮುಖರಾದವರೆಲ್ಲರೂ ಅಲ್ಲಿಗೆ ನಿಶ್ಚಯವಾಗಿ ಹೋಗುತ್ತಾರೆ.)',
          },
        },
        {
          n: 4,
          text: 'अनेजदेकं मनसो जवीयो नैनद्देवा आप्नुवन्पूर्वमर्षत् ।\nतद्धावतोऽन्यानत्येति तिष्ठत्तस्मिन्नपो मातरिश्वा दधाति ॥',
          meaning: {
            en: 'The One does not move, yet is swifter than the mind; the gods could not reach it, for it went on ahead. Standing still, it outruns all others who run. In it Matarishvan places the waters. (Madhva reading: the Supreme One, free of fear, is beyond the full grasp even of the gods; He has known all things from eternity; and Mukhya Vayu, Matarishvan, offers to Him all the good deeds that beings do under Vayu\'s impulse.)',
            kn: 'ಆ ಏಕವು ಅಲುಗಾಡುವುದಿಲ್ಲ, ಆದರೂ ಮನಸ್ಸಿಗಿಂತಲೂ ವೇಗವಾದದ್ದು; ದೇವತೆಗಳು ಅದನ್ನು ತಲುಪಲಾಗಲಿಲ್ಲ, ಅದು ಮುಂಚೆಯೇ ಸಾಗಿತ್ತು. ನಿಂತಲ್ಲೇ ನಿಂತು ಓಡುವ ಇತರರೆಲ್ಲರನ್ನೂ ಅದು ಮೀರುತ್ತದೆ. ಅದರಲ್ಲಿ ಮಾತರಿಶ್ವನು ಜಲವನ್ನು ಇರಿಸುತ್ತಾನೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಭಯವಿಲ್ಲದ ಪರಮಾತ್ಮನನ್ನು ದೇವತೆಗಳೂ ಪೂರ್ಣವಾಗಿ ತಿಳಿಯಲಾರರು; ಅನಾದಿಕಾಲದಿಂದಲೇ ಅವನು ಎಲ್ಲವನ್ನೂ ಬಲ್ಲನು; ಮಾತರಿಶ್ವನಾದ ಮುಖ್ಯಪ್ರಾಣನು ತನ್ನ ಪ್ರೇರಣೆಯಿಂದ ಜೀವಿಗಳು ಮಾಡುವ ಸತ್ಕರ್ಮಗಳನ್ನೆಲ್ಲ ಅವನಿಗೆ ಸಮರ್ಪಿಸುತ್ತಾನೆ.)',
          },
        },
        {
          n: 5,
          text: 'तदेजति तन्नैजति तद्दूरे तद्वन्तिके ।\nतदन्तरस्य सर्वस्य तदु सर्वस्य बाह्यतः ॥',
          meaning: {
            en: 'It moves and it does not move; it is far and it is near. It is within all this, and it is outside all this. (Madhva reading: from Him the whole world trembles, while He Himself fears nothing; being everywhere, He is both far and near, inside and outside all things.)',
            kn: 'ಅದು ಚಲಿಸುತ್ತದೆ, ಅದು ಚಲಿಸುವುದಿಲ್ಲ; ಅದು ದೂರದಲ್ಲಿದೆ, ಅದು ಹತ್ತಿರದಲ್ಲಿದೆ. ಅದು ಇದೆಲ್ಲದರ ಒಳಗಿದೆ, ಇದೆಲ್ಲದರ ಹೊರಗೂ ಇದೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಅವನಿಂದ ಜಗತ್ತೆಲ್ಲವೂ ನಡುಗುತ್ತದೆ, ಅವನು ಮಾತ್ರ ಯಾವುದಕ್ಕೂ ಅಂಜುವುದಿಲ್ಲ; ಸರ್ವವ್ಯಾಪಿಯಾದ್ದರಿಂದ ಅವನು ದೂರದಲ್ಲೂ ಹತ್ತಿರದಲ್ಲೂ ಎಲ್ಲದರ ಒಳಗೂ ಹೊರಗೂ ಇದ್ದಾನೆ.)',
          },
        },
        {
          n: 6,
          text: 'यस्तु सर्वाणि भूतान्यात्मन्येवानुपश्यति ।\nसर्वभूतेषु चात्मानं ततो न विजुगुप्सते ॥',
          meaning: {
            en: 'One who sees all beings in the Self, and the Self in all beings, no longer shrinks away from anything. (Madhva reading: one who knows that all beings rest in the Supreme Self and that He dwells in all beings as their controller has no fear left, and so does not seek to guard himself.)',
            kn: 'ಎಲ್ಲ ಜೀವಿಗಳನ್ನೂ ಆತ್ಮನಲ್ಲಿಯೂ, ಎಲ್ಲ ಜೀವಿಗಳಲ್ಲಿ ಆತ್ಮನನ್ನೂ ಕಾಣುವವನು ಅನಂತರ ಯಾವುದರಿಂದಲೂ ಹಿಂಜರಿಯುವುದಿಲ್ಲ. (ಮಾಧ್ವ ಅರ್ಥ: ಎಲ್ಲ ಜೀವಿಗಳೂ ಪರಮಾತ್ಮನನ್ನು ಆಶ್ರಯಿಸಿವೆ, ಅವನು ಎಲ್ಲರಲ್ಲಿ ನಿಯಾಮಕನಾಗಿ ನೆಲೆಸಿದ್ದಾನೆ ಎಂದು ತಿಳಿದವನಿಗೆ ಭಯವೇ ಇರುವುದಿಲ್ಲ; ಆದ್ದರಿಂದ ತನ್ನನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಹವಣಿಸುವುದಿಲ್ಲ.)',
          },
        },
        {
          n: 7,
          text: 'यस्मिन्सर्वाणि भूतान्यात्मैवाभूद्विजानतः ।\nतत्र को मोहः कः शोक एकत्वमनुपश्यतः ॥',
          meaning: {
            en: 'For one who truly knows, in whom all beings have become the Self, what delusion or what sorrow can there be, when he sees the oneness? (Madhva reading: the Self in whom all beings rest is Himself present in all of them; for one who knows this and sees that it is the one same Lord everywhere, there is no delusion and no sorrow.)',
            kn: 'ಸರಿಯಾಗಿ ಅರಿತವನಿಗೆ ಎಲ್ಲ ಜೀವಿಗಳೂ ಆತ್ಮನೇ ಆದಾಗ, ಏಕತ್ವವನ್ನು ಕಾಣುವ ಅವನಿಗೆ ಮೋಹವೆಲ್ಲಿ, ಶೋಕವೆಲ್ಲಿ? (ಮಾಧ್ವ ಅರ್ಥ: ಎಲ್ಲ ಜೀವಿಗಳು ಯಾವ ಪರಮಾತ್ಮನಲ್ಲಿ ನೆಲೆಸಿವೆಯೋ ಅವನೇ ಅವೆಲ್ಲದರಲ್ಲಿಯೂ ಇದ್ದಾನೆ; ಇದನ್ನು ತಿಳಿದು ಎಲ್ಲೆಡೆಯೂ ಒಬ್ಬನೇ ಭಗವಂತನಿದ್ದಾನೆ ಎಂದು ಕಾಣುವವನಿಗೆ ಮೋಹವೂ ಇಲ್ಲ, ಶೋಕವೂ ಇಲ್ಲ.)',
          },
        },
        {
          n: 8,
          text: 'स पर्यगाच्छुक्रमकायमव्रणमस्नाविरं शुद्धमपापविद्धम् ।\nकविर्मनीषी परिभूः स्वयम्भूर्याथातथ्यतोऽर्थान्व्यदधाच्छाश्वतीभ्यः समाभ्यः ॥',
          meaning: {
            en: 'He pervades all: radiant, without a body, without wound or sinew, pure, untouched by evil. The seer, the master of the mind, all-surpassing and self-existent, he has set out all things as they truly are, through endless years. (Madhva reading: the knower attains this Lord, who is free of sorrow, without a material body, ever full and purifying; all-knowing, ruler of all minds, supreme over all and depending on no one, He creates the world as real, in a beginningless and endless stream.)',
            kn: 'ಅವನು ಎಲ್ಲವನ್ನೂ ವ್ಯಾಪಿಸಿದ್ದಾನೆ: ತೇಜೋಮಯನು, ದೇಹರಹಿತನು, ಗಾಯವೂ ನರಗಳೂ ಇಲ್ಲದವನು, ಶುದ್ಧನು, ಪಾಪದ ಸ್ಪರ್ಶವಿಲ್ಲದವನು. ಸರ್ವಜ್ಞನೂ ಮನಸ್ಸಿನ ಒಡೆಯನೂ ಎಲ್ಲವನ್ನೂ ಮೀರಿದವನೂ ಸ್ವಯಂಭುವೂ ಆದ ಅವನು ಅನಂತ ವರ್ಷಗಳುದ್ದಕ್ಕೂ ವಸ್ತುಗಳನ್ನು ಯಥಾರ್ಥವಾಗಿ ವಿಧಿಸಿದ್ದಾನೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಜ್ಞಾನಿಯು ಈ ಭಗವಂತನನ್ನು ಹೊಂದುತ್ತಾನೆ; ಅವನು ಶೋಕರಹಿತನು, ಪ್ರಾಕೃತ ದೇಹವಿಲ್ಲದವನು, ನಿತ್ಯಪೂರ್ಣನು, ಪಾವನನು; ಸರ್ವಜ್ಞನೂ ಎಲ್ಲರ ಮನಸ್ಸುಗಳ ನಿಯಾಮಕನೂ ಸರ್ವೋತ್ತಮನೂ ಯಾರನ್ನೂ ಆಶ್ರಯಿಸದವನೂ ಆದ ಅವನು ಅನಾದಿ ಅನಂತ ಪ್ರವಾಹರೂಪವಾಗಿ ಸತ್ಯವಾದ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸುತ್ತಾನೆ.)',
          },
        },
        {
          n: 9,
          text: 'अन्धं तमः प्रविशन्ति येऽविद्यामुपासते ।\nततो भूय इव ते तमो य उ विद्यायां रताः ॥',
          meaning: {
            en: 'Into blind darkness enter those who worship ignorance; into still greater darkness, as it were, those who delight in knowledge alone. (Madhva reading: those who meditate on the Lord in a wrong way enter blind darkness; those who keep to right knowledge but do not reject the wrong views enter a darkness clearly greater still.)',
            kn: 'ಅವಿದ್ಯೆಯನ್ನು ಉಪಾಸಿಸುವವರು ಗಾಢವಾದ ಕತ್ತಲೆಯನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾರೆ; ವಿದ್ಯೆಯಲ್ಲಿಯೇ ರಮಿಸುವವರು ಅದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಿನ ಕತ್ತಲೆಯನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾರೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಭಗವಂತನನ್ನು ತಪ್ಪಾಗಿ ಉಪಾಸಿಸುವವರು ಗಾಢ ಕತ್ತಲೆಯನ್ನು ಸೇರುತ್ತಾರೆ; ಸರಿಯಾದ ಜ್ಞಾನವನ್ನು ಹಿಡಿದೂ ತಪ್ಪು ಮತಗಳನ್ನು ಖಂಡಿಸದವರು ಅದಕ್ಕಿಂತಲೂ ನಿಶ್ಚಯವಾಗಿ ಹೆಚ್ಚಿನ ಕತ್ತಲೆಯನ್ನು ಸೇರುತ್ತಾರೆ.)',
          },
        },
        {
          n: 10,
          text: 'अन्यदेवाहुर्विद्ययाऽन्यदाहुरविद्यया ।\nइति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे ॥',
          meaning: {
            en: 'One result, they say, comes from knowledge, and another, they say, from ignorance. So we have heard from the wise who explained it to us. (Madhva reading: one part of liberation is gained by right knowledge of the Lord, and another by rejecting wrong knowledge; so the wise elders taught.)',
            kn: 'ವಿದ್ಯೆಯಿಂದ ಒಂದು ಫಲ, ಅವಿದ್ಯೆಯಿಂದ ಮತ್ತೊಂದು ಫಲ ಎಂದು ಹೇಳುತ್ತಾರೆ. ನಮಗೆ ಅದನ್ನು ವಿವರಿಸಿದ ಧೀರರಿಂದ ನಾವು ಹೀಗೆ ಕೇಳಿದ್ದೇವೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಮೋಕ್ಷದ ಒಂದು ಭಾಗವು ಭಗವಂತನ ಯಥಾರ್ಥ ಜ್ಞಾನದಿಂದ, ಇನ್ನೊಂದು ಭಾಗವು ತಪ್ಪು ಜ್ಞಾನವನ್ನು ಖಂಡಿಸುವುದರಿಂದ ದೊರೆಯುತ್ತದೆ ಎಂದು ಹಿರಿಯ ಜ್ಞಾನಿಗಳು ಬೋಧಿಸಿದ್ದಾರೆ.)',
          },
        },
        {
          n: 11,
          text: 'विद्यां चाविद्यां च यस्तद्वेदोभयं सह ।\nअविद्यया मृत्युं तीर्त्वा विद्ययाऽमृतमश्नुते ॥',
          meaning: {
            en: 'One who knows both knowledge and ignorance together crosses death by ignorance and by knowledge attains immortality. (Madhva reading: by rejecting wrong knowledge one crosses sorrow, ignorance and every evil, and by true knowledge of Vishnu one gains the bliss of liberation; both are needed.)',
            kn: 'ವಿದ್ಯೆ ಅವಿದ್ಯೆ ಎರಡನ್ನೂ ಒಟ್ಟಿಗೆ ತಿಳಿದವನು ಅವಿದ್ಯೆಯಿಂದ ಮೃತ್ಯುವನ್ನು ದಾಟಿ ವಿದ್ಯೆಯಿಂದ ಅಮೃತತ್ವವನ್ನು ಹೊಂದುತ್ತಾನೆ. (ಮಾಧ್ವ ಅರ್ಥ: ತಪ್ಪು ಜ್ಞಾನವನ್ನು ಖಂಡಿಸುವುದರಿಂದ ದುಃಖ, ಅಜ್ಞಾನ ಮೊದಲಾದ ಅನಿಷ್ಟಗಳನ್ನು ದಾಟುತ್ತಾನೆ; ವಿಷ್ಣುವಿನ ಯಥಾರ್ಥ ಜ್ಞಾನದಿಂದ ಮೋಕ್ಷಾನಂದವನ್ನು ಪಡೆಯುತ್ತಾನೆ; ಎರಡೂ ಅವಶ್ಯಕ.)',
          },
        },
        {
          n: 12,
          text: 'अन्धं तमः प्रविशन्ति येऽसम्भूतिमुपासते ।\nततो भूय इव ते तमो य उ सम्भूत्यां रताः ॥',
          meaning: {
            en: 'Into blind darkness enter those who worship the unmanifest; into still greater darkness, as it were, those who delight in the manifest. (Madhva reading: those who hold that the Lord is not the creator of the world enter blind darkness; those who accept Him as creator only, and not as the one who withdraws the world, enter still greater darkness.)',
            kn: 'ಅಸಂಭೂತಿಯನ್ನು ಉಪಾಸಿಸುವವರು ಗಾಢವಾದ ಕತ್ತಲೆಯನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾರೆ; ಸಂಭೂತಿಯಲ್ಲಿಯೇ ರಮಿಸುವವರು ಅದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಿನ ಕತ್ತಲೆಯನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾರೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಭಗವಂತನು ಜಗತ್ತಿನ ಸೃಷ್ಟಿಕರ್ತನಲ್ಲ ಎನ್ನುವವರು ಗಾಢ ಕತ್ತಲೆಯನ್ನು ಸೇರುತ್ತಾರೆ; ಅವನನ್ನು ಸೃಷ್ಟಿಕರ್ತನೆಂದು ಮಾತ್ರ ಒಪ್ಪಿ ಸಂಹಾರಕರ್ತನೆಂದು ಒಪ್ಪದವರು ಅದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಿನ ಕತ್ತಲೆಯನ್ನು ಸೇರುತ್ತಾರೆ.)',
          },
        },
        {
          n: 13,
          text: 'अन्यदेवाहुः सम्भवादन्यदाहुरसम्भवात् ।\nइति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे ॥',
          meaning: {
            en: 'One result, they say, comes from the manifest, and another, they say, from the unmanifest. So we have heard from the wise who explained it to us. (Madhva reading: one result comes from knowing the Lord as creator, another from knowing Him as the one who withdraws the world.)',
            kn: 'ಸಂಭವದಿಂದ ಒಂದು ಫಲ, ಅಸಂಭವದಿಂದ ಮತ್ತೊಂದು ಫಲ ಎಂದು ಹೇಳುತ್ತಾರೆ. ನಮಗೆ ಅದನ್ನು ವಿವರಿಸಿದ ಧೀರರಿಂದ ನಾವು ಹೀಗೆ ಕೇಳಿದ್ದೇವೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಭಗವಂತನನ್ನು ಸೃಷ್ಟಿಕರ್ತನೆಂದು ತಿಳಿಯುವುದರಿಂದ ಒಂದು ಫಲ, ಸಂಹಾರಕರ್ತನೆಂದು ತಿಳಿಯುವುದರಿಂದ ಮತ್ತೊಂದು ಫಲ.)',
          },
        },
        {
          n: 14,
          text: 'सम्भूतिं च विनाशं च यस्तद्वेदोभयं सह ।\nविनाशेन मृत्युं तीर्त्वा सम्भूत्याऽमृतमश्नुते ॥',
          meaning: {
            en: 'One who knows both the manifest and destruction together crosses death by destruction and by the manifest attains immortality. (Madhva reading: knowing the Lord as the destroyer of the world, one is freed from all suffering; knowing Him as the creator, the possessor of endless excellences, one gains the bliss of liberation.)',
            kn: 'ಸಂಭೂತಿ ವಿನಾಶ ಎರಡನ್ನೂ ಒಟ್ಟಿಗೆ ತಿಳಿದವನು ವಿನಾಶದಿಂದ ಮೃತ್ಯುವನ್ನು ದಾಟಿ ಸಂಭೂತಿಯಿಂದ ಅಮೃತತ್ವವನ್ನು ಹೊಂದುತ್ತಾನೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಭಗವಂತನನ್ನು ಜಗತ್ಸಂಹಾರಕನೆಂದು ತಿಳಿದು ಎಲ್ಲ ಕ್ಲೇಶಗಳಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ; ಅನಂತ ಗುಣಪೂರ್ಣನಾದ ಸೃಷ್ಟಿಕರ್ತನೆಂದು ತಿಳಿದು ಮೋಕ್ಷಾನಂದವನ್ನು ಪಡೆಯುತ್ತಾನೆ.)',
          },
        },
        {
          n: 15,
          text: 'हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम् ।\nतत्त्वं पूषन्नपावृणु सत्यधर्माय दृष्टये ॥',
          meaning: {
            en: 'The face of the Truth is covered by a golden disc. O Pushan, uncover it, so that I, devoted to the Truth, may see. (Madhva reading: the golden vessel is the orb of the sun, in which the Lord, full of all good qualities, ever dwells veiled; O Pushan, the Full One, remove the veil so that I, Your devotee who holds You in my heart, may see You.)',
            kn: 'ಸತ್ಯದ ಮುಖವು ಚಿನ್ನದ ಪಾತ್ರೆಯಿಂದ ಮುಚ್ಚಲ್ಪಟ್ಟಿದೆ. ಪೂಷನೇ, ಸತ್ಯಧರ್ಮನಾದ ನಾನು ನೋಡುವಂತೆ ಅದನ್ನು ತೆರೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಚಿನ್ನದ ಪಾತ್ರೆ ಎಂದರೆ ಸೂರ್ಯಮಂಡಲ; ಸದ್ಗುಣಪೂರ್ಣನಾದ ಭಗವಂತನು ಅದರಲ್ಲಿ ಮುಚ್ಚಿಕೊಂಡು ನೆಲೆಸಿದ್ದಾನೆ; ಪೂರ್ಣನಾದ ಪೂಷನೇ, ನಿನ್ನನ್ನು ಹೃದಯದಲ್ಲಿ ಧರಿಸಿರುವ ಭಕ್ತನಾದ ನಾನು ನಿನ್ನನ್ನು ಕಾಣುವಂತೆ ಆವರಣವನ್ನು ತೆಗೆ.)',
          },
        },
        {
          n: 16,
          text: 'पूषन्नेकर्षे यम सूर्य प्राजापत्य व्यूह रश्मीन् समूह तेजः ।\nयत्ते रूपं कल्याणतमं तत्ते पश्यामि ।\nयोऽसावसौ पुरुषः सोऽहमस्मि ॥',
          meaning: {
            en: 'O Pushan, sole seer, controller, Sun, son of Prajapati, spread apart your rays and gather in your light; that form of yours which is most auspicious, that I see. That Person yonder, He am I. (Madhva reading: Ekarshi, Yama, Surya and Prajapatya are names of Vishnu as the one supreme knower, the controller of all, the one reached by the wise and the one reached especially by Brahma; expand my knowledge so that by Your grace I see Your most auspicious form. "So\'ham asmi" means that the same Person present in Vayu and in all these symbols dwells within me too, "aham" naming Him as free of all that is to be rejected and "asmi" as ever-existent; it does not say that the soul is the Lord.)',
            kn: 'ಪೂಷನೇ, ಏಕಋಷಿಯೇ, ಯಮನೇ, ಸೂರ್ಯನೇ, ಪ್ರಾಜಾಪತ್ಯನೇ, ನಿನ್ನ ಕಿರಣಗಳನ್ನು ಸರಿಸು, ತೇಜಸ್ಸನ್ನು ಒಟ್ಟುಗೂಡಿಸು; ನಿನ್ನ ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ರೂಪವನ್ನು ನಾನು ಕಾಣುತ್ತೇನೆ. ಅಲ್ಲಿರುವ ಆ ಪುರುಷನೇ ನಾನು. (ಮಾಧ್ವ ಅರ್ಥ: ಏಕರ್ಷಿ, ಯಮ, ಸೂರ್ಯ, ಪ್ರಾಜಾಪತ್ಯ ಎಂಬುವು ವಿಷ್ಣುವಿನ ಹೆಸರುಗಳು: ಏಕಮಾತ್ರ ಪ್ರಧಾನ ಜ್ಞಾನಿ, ಎಲ್ಲರ ನಿಯಾಮಕ, ಜ್ಞಾನಿಗಳು ಹೊಂದುವವನು, ವಿಶೇಷವಾಗಿ ಬ್ರಹ್ಮನು ಹೊಂದುವವನು; ನನ್ನ ಜ್ಞಾನವನ್ನು ವಿಸ್ತರಿಸು, ನಿನ್ನ ಅನುಗ್ರಹದಿಂದ ನಿನ್ನ ಮಂಗಳರೂಪವನ್ನು ಕಾಣುವೆನು. "ಸೋಽಹಮಸ್ಮಿ" ಎಂದರೆ ವಾಯುವಿನಲ್ಲೂ ಈ ಎಲ್ಲ ಪ್ರತೀಕಗಳಲ್ಲೂ ಇರುವ ಅದೇ ಪುರುಷನು ನನ್ನೊಳಗೂ ಇದ್ದಾನೆ; "ಅಹಂ" ಎಂದರೆ ತ್ಯಾಜ್ಯವಾದ ದೋಷವಿಲ್ಲದವನು, "ಅಸ್ಮಿ" ಎಂದರೆ ಸದಾ ಇರುವವನು; ಜೀವನೇ ಈಶ್ವರನೆಂದು ಇದರ ಅರ್ಥವಲ್ಲ.)',
          },
        },
        {
          n: 17,
          text: 'वायुरनिलममृतमथेदं भस्मान्तं शरीरम् ।\nॐ क्रतो स्मर कृतं स्मर ॐ क्रतो स्मर कृतं स्मर ॥',
          meaning: {
            en: 'May my breath go to the immortal air; this body ends in ashes. Om. O mind, remember; remember what has been done. O mind, remember; remember what has been done. (Madhva reading: though this body ends in ashes, the Lord within is untouched by death; if even Vayu, who rests in Him, is immortal, how much more is He. O Lord who are Om and whose very form is knowledge, remember me, that is, be gracious to me, and look upon the worship I have done.)',
            kn: 'ನನ್ನ ಪ್ರಾಣವು ಅಮರವಾದ ವಾಯುವನ್ನು ಸೇರಲಿ; ಈ ಶರೀರವು ಭಸ್ಮದಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. ಓಂ. ಮನಸ್ಸೇ, ಸ್ಮರಿಸು; ಮಾಡಿದ್ದನ್ನು ಸ್ಮರಿಸು. ಮನಸ್ಸೇ, ಸ್ಮರಿಸು; ಮಾಡಿದ್ದನ್ನು ಸ್ಮರಿಸು. (ಮಾಧ್ವ ಅರ್ಥ: ಈ ಶರೀರವು ಭಸ್ಮವಾದರೂ ಒಳಗಿರುವ ಭಗವಂತನಿಗೆ ಮರಣದ ಸ್ಪರ್ಶವಿಲ್ಲ; ಅವನನ್ನು ಆಶ್ರಯಿಸಿರುವ ವಾಯುವೇ ಅಮರನಾದರೆ ಅವನ ವಿಷಯದಲ್ಲಿ ಹೇಳುವುದೇನು? ಓಂಕಾರವಾಚ್ಯನೂ ಜ್ಞಾನಸ್ವರೂಪನೂ ಆದ ಪ್ರಭುವೇ, ನನ್ನನ್ನು ಸ್ಮರಿಸು, ಅಂದರೆ ಅನುಗ್ರಹಿಸು; ನಾನು ಮಾಡಿದ ಉಪಾಸನೆಯನ್ನು ಕಟಾಕ್ಷಿಸು.)',
          },
        },
        {
          n: 18,
          text: 'अग्ने नय सुपथा राये अस्मान्विश्वानि देव वयुनानि विद्वान् ।\nयुयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नम उक्तिं विधेम ॥',
          meaning: {
            en: 'O Agni, lead us by the good path to wealth, O god who know all our deeds. Keep far from us the crooked sin; we offer you our words of salutation again and again. (Madhva reading: Agni is the Lord present in fire, who leads all; lead us by the path of light, from which there is no return, to the wealth of liberation, for You know all the knowledge we have gained; remove from us the sin that makes us small; with devotion and knowledge we offer You abundant salutations.)',
            kn: 'ಅಗ್ನಿಯೇ, ನಮ್ಮ ಎಲ್ಲ ಕರ್ಮಗಳನ್ನೂ ಬಲ್ಲ ದೇವನೇ, ಸನ್ಮಾರ್ಗದಿಂದ ನಮ್ಮನ್ನು ಐಶ್ವರ್ಯದ ಕಡೆಗೆ ನಡೆಸು. ವಕ್ರವಾದ ಪಾಪವನ್ನು ನಮ್ಮಿಂದ ದೂರಮಾಡು; ನಿನಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರದ ಮಾತುಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇವೆ. (ಮಾಧ್ವ ಅರ್ಥ: ಅಗ್ನಿ ಎಂದರೆ ಅಗ್ನಿಯಲ್ಲಿರುವ, ಎಲ್ಲರನ್ನೂ ನಡೆಸುವ ಭಗವಂತ; ಪುನರಾವೃತ್ತಿಯಿಲ್ಲದ ಅರ್ಚಿರಾದಿ ಮಾರ್ಗದಿಂದ ಮೋಕ್ಷವೆಂಬ ಐಶ್ವರ್ಯಕ್ಕೆ ನಮ್ಮನ್ನು ನಡೆಸು, ನಾವು ಪಡೆದ ಜ್ಞಾನವೆಲ್ಲವನ್ನೂ ನೀನು ಬಲ್ಲೆ; ನಮ್ಮನ್ನು ಕುಗ್ಗಿಸುವ ಪಾಪವನ್ನು ದೂರಮಾಡು; ಭಕ್ತಿಜ್ಞಾನಗಳಿಂದ ನಿನಗೆ ಹೇರಳವಾದ ನಮಸ್ಕಾರಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇವೆ.)',
          },
        },
      ],
    },
    {
      title: 'शान्तिपाठः',
      titleEn: 'Closing Shanti',
      verses: [{ text: SHANTI, meaning: SHANTI_MEANING }],
    },
  ],
};
