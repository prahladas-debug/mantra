// Āditya Hṛdayam: Vālmīki Rāmāyaṇa, Yuddha Kāṇḍa (sarga 107 in the southern
// vulgate / Gita Press numbering, 6.107.1–31). Collated Nov 2026; not yet
// checked against a printed edition line by line.
//
// Sources (independent digital witnesses):
//   A. sa.wikisource.org, "आदित्यहृदयम्" (typed Devanagari): base text.
//   B. sa.wikisource.org, "आदित्यहृदयम् (बृहत्स्तोत्ररत्नाकरान्तर्गतम्)":
//      proofread transcription of the printed Bṛhat Stotra Ratnākara (1953).
//   C. stotranidhi.com, Kannada page (from the printed "Prabhāta Stotranidhi").
//   D. stotrasamhita/stotra-sangrahah (GitHub), AdityaHrdayam.tex.
//   E. Gita Press "Āditya Hṛdaya Stotram" booklet (sanskrit/raw_etexts, misc-gp).
//   F. heritage.iitk.ac.in (Valmiki Ramayana, 6.107), Gita Press Rāmāyaṇa text.
//
// E and F give the Rāmāyaṇa-edition text; A–D give the text as it is recited
// as a stotra. This file follows the recitation text (majority of A–D) and
// records the Rāmāyaṇa readings here:
//   v2 भगवानृषिः (A C D) / भगवांस्तदा (E); उपागम्य (A C D F) / उपगम्य (B E)
//   v3 विजयिष्यसि / विजयिष्यसे (E F)
//   v4 जपेन्नित्यमक्षय्यं परमं शिवम् (A C D F) / शुभम् (B) / जपं नित्यमक्षयं (E)
//   v9 प्रजाप्राण (A C D) / प्रजाः प्राण(ा) (B E F)
//   v10 हिरण्यरेता (A B C E F) / विश्वरेता (D)
//   v11 मार्तण्ड अंशुमान् (B D) / मार्ताण्ड (A C) / मार्तण्डकोंऽशुमान् (E F)
//   v12 भास्करो / ऽहस्करो (E)
//   v16 पश्चिमायाद्रये (A C D E F) / पश्चिमे गिरये (B)
//   v18 मार्तण्डाय नमो नमः (A B C D) / प्रचण्डाय नमोऽस्तु ते (E)
//   v19 सूर्याय / सूराय (E); v21 वह्नये / हरये (E); v22 तदेव / तमेष (E)
//   v23 एष एवाग्निहोत्रं (A C D) / एष चैवाग्निहोत्रं (B E F)
//   v24 वेदाश्च क्रतवश्चैव … सर्व एष रविः प्रभुः (A B C D) /
//       देवाश्च … सर्वेषु परमप्रभुः (E F); B has ऋतव for क्रतव
//   v27 वधिष्यसि, तदागस्त्यो जगाम च (A B C D) / जहिष्यसि, ततोऽगस्त्यो जगाम स (E F)
//   v29 जप्त्वा तु / जप्त्वेदं (E); v30 युद्धाय … वधे तस्य धृतोऽभवत् (A B C D) /
//       जयार्थं … वृतस्तस्य वधेऽभवत् (E)
// Spelling: देवासुरगणाँल्लोकान् (v7) with the nasalised l of A, C and E;
// मार्तण्ड throughout. All anuṣṭubh half-verses scan 8 + 8; v31 is puṣpitāgrā.
import type { Mantra } from '../types';

export const adityaHridayam: Mantra = {
  id: 'aditya-hridayam',
  title: 'आदित्यहृदयम्',
  titleEn: 'Aditya Hridayam',
  category: 'stotra',
  deity: 'Sūrya (Āditya)',
  source: 'Vālmīki Rāmāyaṇa, Yuddha Kāṇḍa 107',
  summary:
    'On the battlefield at Laṅkā, as Rāma stands weary before the final fight with Rāvaṇa, the sage Agastya teaches him this hymn to the Sun, the "heart of Āditya". It praises Sūrya as the form of all the gods and the sustainer of the worlds; Rāma recites it three times, regains his joy and goes on to victory.',
  summaryKn:
    'ಲಂಕೆಯ ರಣರಂಗದಲ್ಲಿ ರಾವಣನೊಡನೆ ಕೊನೆಯ ಯುದ್ಧಕ್ಕೆ ಮುನ್ನ ದಣಿದು ನಿಂತಿದ್ದ ಶ್ರೀರಾಮನಿಗೆ ಅಗಸ್ತ್ಯ ಮಹರ್ಷಿಗಳು ಉಪದೇಶಿಸಿದ ಸೂರ್ಯಸ್ತೋತ್ರ ಇದು. ಸೂರ್ಯನನ್ನು ಎಲ್ಲ ದೇವತೆಗಳ ಸ್ವರೂಪನೆಂದೂ ಲೋಕಗಳನ್ನು ಪೋಷಿಸುವವನೆಂದೂ ಇದು ಸ್ತುತಿಸುತ್ತದೆ. ಶ್ರೀರಾಮನು ಇದನ್ನು ಮೂರು ಬಾರಿ ಜಪಿಸಿ ಉತ್ಸಾಹ ಹೊಂದಿ ಯುದ್ಧದಲ್ಲಿ ಜಯಶಾಲಿಯಾಗುತ್ತಾನೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'उपोद्घातः',
      titleEn: 'The Setting',
      verses: [
        {
          n: 1,
          text: 'ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम् ।\nरावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम् ॥',
          meaning: {
            en: 'Rāma stood on the battlefield, worn out by the fighting and lost in thought, and saw Rāvaṇa before him, ready once more for battle.',
            kn: 'ಯುದ್ಧದಿಂದ ಬಳಲಿ ಚಿಂತೆಯಲ್ಲಿ ಮುಳುಗಿ ನಿಂತಿದ್ದ ಶ್ರೀರಾಮನು, ತನ್ನ ಮುಂದೆ ಮತ್ತೆ ಯುದ್ಧಕ್ಕೆ ಸಿದ್ಧನಾಗಿ ನಿಂತ ರಾವಣನನ್ನು ಕಂಡನು.',
          },
        },
        {
          n: 2,
          text: 'दैवतैश्च समागम्य द्रष्टुमभ्यागतो रणम् ।\nउपागम्याब्रवीद्राममगस्त्यो भगवानृषिः ॥',
          meaning: {
            en: 'Then the venerable sage Agastya, who had come with the gods to watch the battle, approached Rāma and spoke to him.',
            kn: 'ಆಗ ದೇವತೆಗಳೊಡನೆ ಯುದ್ಧವನ್ನು ನೋಡಲು ಬಂದಿದ್ದ ಪೂಜ್ಯರಾದ ಅಗಸ್ತ್ಯ ಮಹರ್ಷಿಗಳು ಶ್ರೀರಾಮನ ಬಳಿ ಬಂದು ಹೀಗೆ ಹೇಳಿದರು.',
          },
        },
      ],
    },
    {
      title: 'अगस्त्य उवाच',
      titleEn: 'Agastya Speaks',
      verses: [
        {
          n: 3,
          text: 'राम राम महाबाहो शृणु गुह्यं सनातनम् ।\nयेन सर्वानरीन्वत्स समरे विजयिष्यसि ॥',
          meaning: {
            en: '"Rāma, mighty-armed Rāma, listen to this ancient secret, my child, by which you will conquer all your enemies in battle."',
            kn: '"ಮಹಾಬಾಹುವಾದ ರಾಮಾ, ಮಗೂ, ಈ ಸನಾತನವಾದ ರಹಸ್ಯವನ್ನು ಕೇಳು. ಇದರಿಂದ ನೀನು ಯುದ್ಧದಲ್ಲಿ ಎಲ್ಲ ಶತ್ರುಗಳನ್ನೂ ಜಯಿಸುವೆ."',
          },
        },
        {
          n: 4,
          text: 'आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम् ।\nजयावहं जपेन्नित्यमक्षय्यं परमं शिवम् ॥',
          meaning: {
            en: 'It is the holy Āditya Hṛdayam, which destroys every enemy and brings victory. One should recite it always: it is imperishable, supreme and auspicious.',
            kn: 'ಇದು ಪವಿತ್ರವಾದ ಆದಿತ್ಯಹೃದಯ; ಎಲ್ಲ ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡಿ ಜಯವನ್ನು ತರುವಂಥದ್ದು. ಅಕ್ಷಯವೂ ಶ್ರೇಷ್ಠವೂ ಮಂಗಳಕರವೂ ಆದ ಇದನ್ನು ನಿತ್ಯವೂ ಜಪಿಸಬೇಕು.',
          },
        },
        {
          n: 5,
          text: 'सर्वमङ्गलमाङ्गल्यं सर्वपापप्रणाशनम् ।\nचिन्ताशोकप्रशमनमायुर्वर्धनमुत्तमम् ॥',
          meaning: {
            en: 'It is the most auspicious of all auspicious things, it wipes away every sin, calms anxiety and grief, and is the best means of lengthening life.',
            kn: 'ಇದು ಎಲ್ಲ ಮಂಗಳಗಳಿಗೂ ಮಂಗಳಕರವಾದುದು, ಎಲ್ಲ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವುದು, ಚಿಂತೆ ಮತ್ತು ದುಃಖಗಳನ್ನು ಶಮನಗೊಳಿಸುವುದು ಹಾಗೂ ಆಯುಸ್ಸನ್ನು ವೃದ್ಧಿಸುವ ಉತ್ತಮ ಸಾಧನ.',
          },
        },
      ],
    },
    {
      title: 'स्तोत्रम्',
      titleEn: 'The Hymn',
      verses: [
        {
          n: 6,
          text: 'रश्मिमन्तं समुद्यन्तं देवासुरनमस्कृतम् ।\nपूजयस्व विवस्वन्तं भास्करं भुवनेश्वरम् ॥',
          meaning: {
            en: 'Worship Vivasvān, the Sun crowned with rays, rising in the sky, honoured by gods and demons alike; the maker of light and the lord of the worlds.',
            kn: 'ಕಿರಣಗಳಿಂದ ಕೂಡಿ ಉದಯಿಸುತ್ತಿರುವ, ದೇವತೆಗಳಿಂದಲೂ ಅಸುರರಿಂದಲೂ ನಮಸ್ಕರಿಸಲ್ಪಡುವ, ಬೆಳಕನ್ನು ನೀಡುವ ಲೋಕೇಶ್ವರನಾದ ವಿವಸ್ವಂತನನ್ನು (ಸೂರ್ಯನನ್ನು) ಪೂಜಿಸು.',
          },
        },
        {
          n: 7,
          text: 'सर्वदेवात्मको ह्येष तेजस्वी रश्मिभावनः ।\nएष देवासुरगणाँल्लोकान्पाति गभस्तिभिः ॥',
          meaning: {
            en: 'He is the very self of all the gods, radiant, the source of all rays. With his beams he protects the hosts of gods and demons and all the worlds.',
            kn: 'ಇವನು ಎಲ್ಲ ದೇವತೆಗಳ ಆತ್ಮಸ್ವರೂಪನು, ತೇಜಸ್ವಿಯು, ಕಿರಣಗಳಿಗೆ ಮೂಲನು. ತನ್ನ ಕಿರಣಗಳಿಂದ ದೇವಾಸುರ ಸಮೂಹಗಳನ್ನೂ ಎಲ್ಲ ಲೋಕಗಳನ್ನೂ ಕಾಪಾಡುತ್ತಾನೆ.',
          },
        },
        {
          n: 8,
          text: 'एष ब्रह्मा च विष्णुश्च शिवः स्कन्दः प्रजापतिः ।\nमहेन्द्रो धनदः कालो यमः सोमो ह्यपां पतिः ॥',
          meaning: {
            en: 'He is Brahmā and Viṣṇu, Śiva, Skanda and Prajāpati; he is great Indra, Kubera the giver of wealth, Time, Yama, Soma and Varuṇa, lord of the waters.',
            kn: 'ಇವನೇ ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ಶಿವ, ಸ್ಕಂದ, ಪ್ರಜಾಪತಿ; ಇವನೇ ಮಹೇಂದ್ರ, ಧನವನ್ನು ಕೊಡುವ ಕುಬೇರ, ಕಾಲ, ಯಮ, ಸೋಮ ಮತ್ತು ಜಲಾಧಿಪತಿಯಾದ ವರುಣ.',
          },
        },
        {
          n: 9,
          text: 'पितरो वसवः साध्या ह्यश्विनौ मरुतो मनुः ।\nवायुर्वह्निः प्रजाप्राण ऋतुकर्ता प्रभाकरः ॥',
          meaning: {
            en: 'He is the ancestors, the Vasus, the Sādhyas, the two Aśvins, the Maruts and Manu; he is wind and fire, the life-breath of all creatures, the maker of the seasons and the source of light.',
            kn: 'ಇವನೇ ಪಿತೃದೇವತೆಗಳು, ವಸುಗಳು, ಸಾಧ್ಯರು, ಅಶ್ವಿನೀದೇವತೆಗಳು, ಮರುತ್ತುಗಳು ಮತ್ತು ಮನು; ಇವನೇ ವಾಯು, ಅಗ್ನಿ, ಪ್ರಾಣಿಗಳ ಪ್ರಾಣ, ಋತುಗಳನ್ನು ಉಂಟುಮಾಡುವವನು ಹಾಗೂ ಪ್ರಕಾಶವನ್ನು ನೀಡುವವನು.',
          },
        },
        {
          n: 10,
          text: 'आदित्यः सविता सूर्यः खगः पूषा गभस्तिमान् ।\nसुवर्णसदृशो भानुर्हिरण्यरेता दिवाकरः ॥',
          meaning: {
            en: 'He is Āditya, son of Aditi; Savitṛ, who quickens all; Sūrya; the traveller of the sky; Pūṣan, the nourisher; the lord of rays; gold-like; Bhānu, the shining one; the one whose seed is golden; the maker of day.',
            kn: 'ಅದಿತಿಯ ಮಗನಾದ ಆದಿತ್ಯ, ಎಲ್ಲವನ್ನೂ ಪ್ರೇರಿಸುವ ಸವಿತೃ, ಸೂರ್ಯ, ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವವನು, ಪೋಷಿಸುವ ಪೂಷ, ಕಿರಣಗಳುಳ್ಳವನು, ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವವನು, ಭಾನು, ಹಿರಣ್ಯರೇತಸ್ಸು ಮತ್ತು ಹಗಲನ್ನು ಉಂಟುಮಾಡುವ ದಿವಾಕರ ಇವನೇ.',
          },
        },
        {
          n: 11,
          text: 'हरिदश्वः सहस्रार्चिः सप्तसप्तिर्मरीचिमान् ।\nतिमिरोन्मथनः शम्भुस्त्वष्टा मार्तण्ड अंशुमान् ॥',
          meaning: {
            en: 'He has green horses and a thousand flames; seven steeds draw him; he is full of light. He churns away darkness; he is Śambhu, the giver of good; Tvaṣṭṛ, the shaper; Mārtaṇḍa; the bearer of beams.',
            kn: 'ಹಸಿರು ಕುದುರೆಗಳುಳ್ಳವನು, ಸಾವಿರ ಜ್ವಾಲೆಗಳುಳ್ಳವನು, ಏಳು ಕುದುರೆಗಳ ರಥದವನು, ಕಿರಣಮಯನು, ಕತ್ತಲೆಯನ್ನು ನಾಶಮಾಡುವವನು, ಮಂಗಳವನ್ನು ಕೊಡುವ ಶಂಭು, ರೂಪಗಳನ್ನು ರಚಿಸುವ ತ್ವಷ್ಟೃ, ಮಾರ್ತಂಡ ಮತ್ತು ಅಂಶುಮಾನ್ ಇವನೇ.',
          },
        },
        {
          n: 12,
          text: 'हिरण्यगर्भः शिशिरस्तपनो भास्करो रविः ।\nअग्निगर्भोऽदितेः पुत्रः शङ्खः शिशिरनाशनः ॥',
          meaning: {
            en: 'He is Hiraṇyagarbha, the golden womb of creation; cool and also scorching; the maker of light; Ravi. He holds fire within him, he is the son of Aditi, Śaṅkha, and the dispeller of cold.',
            kn: 'ಸೃಷ್ಟಿಯ ಮೂಲನಾದ ಹಿರಣ್ಯಗರ್ಭ, ತಂಪನ್ನೂ ತಾಪವನ್ನೂ ನೀಡುವವನು, ಭಾಸ್ಕರ, ರವಿ; ಒಡಲಲ್ಲಿ ಅಗ್ನಿಯನ್ನು ಹೊಂದಿದವನು, ಅದಿತಿಯ ಪುತ್ರ, ಶಂಖ ಮತ್ತು ಚಳಿಯನ್ನು ಹೋಗಲಾಡಿಸುವವನು ಇವನೇ.',
          },
        },
        {
          n: 13,
          text: 'व्योमनाथस्तमोभेदी ऋग्यजुःसामपारगः ।\nघनवृष्टिरपां मित्रो विन्ध्यवीथीप्लवङ्गमः ॥',
          meaning: {
            en: 'He is lord of the sky and piercer of darkness, master of the Ṛg, Yajus and Sāma Vedas; he sends heavy rain, is the friend of the waters, and moves swiftly along the Vindhya path.',
            kn: 'ಆಕಾಶದ ಒಡೆಯ, ಕತ್ತಲೆಯನ್ನು ಭೇದಿಸುವವನು, ಋಗ್ ಯಜುಸ್ ಸಾಮ ವೇದಗಳ ಪಾರಂಗತನು; ಧಾರಾಕಾರ ಮಳೆಯನ್ನು ಸುರಿಸುವವನು, ಜಲಕ್ಕೆ ಮಿತ್ರನು, ವಿಂಧ್ಯದ ಮಾರ್ಗದಲ್ಲಿ ವೇಗವಾಗಿ ಸಾಗುವವನು ಇವನೇ.',
          },
        },
        {
          n: 14,
          text: 'आतपी मण्डली मृत्युः पिङ्गलः सर्वतापनः ।\nकविर्विश्वो महातेजा रक्तः सर्वभवोद्भवः ॥',
          meaning: {
            en: 'He gives heat; he is the shining disc; he is death; he is tawny and warms all things. He is the seer, the universe itself, of great splendour, red in hue, the source from which all beings arise.',
            kn: 'ಬಿಸಿಲನ್ನು ನೀಡುವವನು, ಮಂಡಲಾಕಾರದವನು, ಮೃತ್ಯುಸ್ವರೂಪನು, ಪಿಂಗಳವರ್ಣದವನು, ಎಲ್ಲವನ್ನೂ ಕಾಯಿಸುವವನು; ಕವಿ, ವಿಶ್ವರೂಪನು, ಮಹಾತೇಜಸ್ವಿ, ಕೆಂಪು ಬಣ್ಣದವನು ಮತ್ತು ಎಲ್ಲ ಜೀವಿಗಳ ಹುಟ್ಟಿಗೆ ಕಾರಣನು ಇವನೇ.',
          },
        },
        {
          n: 15,
          text: 'नक्षत्रग्रहताराणामधिपो विश्वभावनः ।\nतेजसामपि तेजस्वी द्वादशात्मन्नमोऽस्तु ते ॥',
          meaning: {
            en: 'Lord of the constellations, planets and stars, sustainer of the universe, brightest among all that shines: O you who appear in twelve forms, salutations to you.',
            kn: 'ನಕ್ಷತ್ರ, ಗ್ರಹ, ತಾರೆಗಳ ಅಧಿಪತಿಯೇ, ವಿಶ್ವವನ್ನು ಪೋಷಿಸುವವನೇ, ತೇಜಸ್ಸುಗಳಿಗೂ ತೇಜಸ್ಸಾದವನೇ, ಹನ್ನೆರಡು ರೂಪಗಳ ಆದಿತ್ಯನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 16,
          text: 'नमः पूर्वाय गिरये पश्चिमायाद्रये नमः ।\nज्योतिर्गणानां पतये दिनाधिपतये नमः ॥',
          meaning: {
            en: 'Salutations to him who rises over the eastern mountain and sets behind the western one; salutations to the lord of all the hosts of light, the ruler of the day.',
            kn: 'ಪೂರ್ವದ ಉದಯಪರ್ವತದಲ್ಲಿ ಮೂಡುವವನಿಗೆ ನಮಸ್ಕಾರ, ಪಶ್ಚಿಮದ ಅಸ್ತಪರ್ವತದಲ್ಲಿ ಮುಳುಗುವವನಿಗೆ ನಮಸ್ಕಾರ. ಜ್ಯೋತಿಸಮೂಹಗಳ ಒಡೆಯನಿಗೆ, ದಿನದ ಅಧಿಪತಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 17,
          text: 'जयाय जयभद्राय हर्यश्वाय नमो नमः ।\nनमो नमः सहस्रांशो आदित्याय नमो नमः ॥',
          meaning: {
            en: 'Salutations again and again to him who is victory and the blessing that victory brings, to the lord of the green horses. O thousand-rayed one, salutations to you, Āditya.',
            kn: 'ಜಯಸ್ವರೂಪನಿಗೆ, ಜಯದಿಂದ ಮಂಗಳವನ್ನು ತರುವವನಿಗೆ, ಹಸಿರು ಕುದುರೆಗಳುಳ್ಳವನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. ಸಾವಿರ ಕಿರಣಗಳುಳ್ಳವನೇ, ಆದಿತ್ಯನೇ, ನಿನಗೆ ನಮೋ ನಮಃ.',
          },
        },
        {
          n: 18,
          text: 'नम उग्राय वीराय सारङ्गाय नमो नमः ।\nनमः पद्मप्रबोधाय मार्तण्डाय नमो नमः ॥',
          meaning: {
            en: 'Salutations to the fierce one, the hero, the swift-moving one. Salutations to him who wakes the lotuses into bloom, to Mārtaṇḍa, again and again.',
            kn: 'ಉಗ್ರನಿಗೆ, ವೀರನಿಗೆ, ವೇಗವಾಗಿ ಸಂಚರಿಸುವವನಿಗೆ ನಮಸ್ಕಾರ. ಕಮಲಗಳನ್ನು ಅರಳಿಸುವವನಿಗೆ, ಮಾರ್ತಂಡನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 19,
          text: 'ब्रह्मेशानाच्युतेशाय सूर्यायादित्यवर्चसे ।\nभास्वते सर्वभक्षाय रौद्राय वपुषे नमः ॥',
          meaning: {
            en: 'Salutations to the Sun, ruler even over Brahmā, Śiva and Acyuta, who shines with the splendour of Āditya; to the brilliant one who consumes all things, whose form is fierce like Rudra.',
            kn: 'ಬ್ರಹ್ಮ, ಈಶಾನ, ಅಚ್ಯುತರಿಗೂ ಒಡೆಯನಾದ, ಆದಿತ್ಯತೇಜಸ್ಸಿನಿಂದ ಹೊಳೆಯುವ ಸೂರ್ಯನಿಗೆ ನಮಸ್ಕಾರ. ಪ್ರಕಾಶಮಾನನಾಗಿ ಎಲ್ಲವನ್ನೂ ಕಬಳಿಸುವ ರುದ್ರರೂಪನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 20,
          text: 'तमोघ्नाय हिमघ्नाय शत्रुघ्नायामितात्मने ।\nकृतघ्नघ्नाय देवाय ज्योतिषां पतये नमः ॥',
          meaning: {
            en: 'Salutations to the god who destroys darkness, frost and enemies, whose nature is without measure; who punishes the ungrateful; the lord of all lights.',
            kn: 'ಕತ್ತಲೆಯನ್ನು, ಹಿಮವನ್ನು, ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡುವವನಿಗೆ, ಅಳತೆಗೆ ಸಿಗದ ಮಹಿಮೆಯುಳ್ಳವನಿಗೆ, ಕೃತಘ್ನರನ್ನು ದಂಡಿಸುವ ದೇವನಿಗೆ, ಜ್ಯೋತಿಗಳ ಒಡೆಯನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 21,
          text: 'तप्तचामीकराभाय वह्नये विश्वकर्मणे ।\nनमस्तमोऽभिनिघ्नाय रुचये लोकसाक्षिणे ॥',
          meaning: {
            en: 'Salutations to him who glows like molten gold, who is fire, the maker of the universe; to the destroyer of darkness, the radiant one, the witness of the world.',
            kn: 'ಕಾಯಿಸಿದ ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವವನಿಗೆ, ಅಗ್ನಿಸ್ವರೂಪನಿಗೆ, ಜಗತ್ತನ್ನು ನಿರ್ಮಿಸುವವನಿಗೆ, ಕತ್ತಲೆಯನ್ನು ಸಂಹರಿಸುವವನಿಗೆ, ಕಾಂತಿಮಯನಿಗೆ, ಲೋಕಸಾಕ್ಷಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 22,
          text: 'नाशयत्येष वै भूतं तदेव सृजति प्रभुः ।\nपायत्येष तपत्येष वर्षत्येष गभस्तिभिः ॥',
          meaning: {
            en: 'This Lord destroys all that exists and creates it again. With his rays he dries up the waters, he gives heat, and he sends down the rain.',
            kn: 'ಈ ಪ್ರಭುವೇ ಜೀವಜಗತ್ತನ್ನು ಲಯಗೊಳಿಸಿ ಮತ್ತೆ ಅದನ್ನೇ ಸೃಷ್ಟಿಸುತ್ತಾನೆ. ತನ್ನ ಕಿರಣಗಳಿಂದ ನೀರನ್ನು ಹೀರುತ್ತಾನೆ, ತಾಪವನ್ನು ನೀಡುತ್ತಾನೆ, ಮಳೆಯನ್ನು ಸುರಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 23,
          text: 'एष सुप्तेषु जागर्ति भूतेषु परिनिष्ठितः ।\nएष एवाग्निहोत्रं च फलं चैवाग्निहोत्रिणाम् ॥',
          meaning: {
            en: 'Dwelling within all beings, he stays awake while they sleep. He is the fire offering itself, and he is also the reward of those who offer it.',
            kn: 'ಎಲ್ಲ ಜೀವಿಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ಇವನು ಅವು ನಿದ್ರಿಸುವಾಗಲೂ ಎಚ್ಚರವಾಗಿರುತ್ತಾನೆ. ಅಗ್ನಿಹೋತ್ರವೂ ಇವನೇ, ಅಗ್ನಿಹೋತ್ರ ಮಾಡುವವರಿಗೆ ದೊರೆಯುವ ಫಲವೂ ಇವನೇ.',
          },
        },
        {
          n: 24,
          text: 'वेदाश्च क्रतवश्चैव क्रतूनां फलमेव च ।\nयानि कृत्यानि लोकेषु सर्व एष रविः प्रभुः ॥',
          meaning: {
            en: 'He is the Vedas, the sacrifices and the fruit of the sacrifices. Of every act performed in the worlds, the Sun is the Lord.',
            kn: 'ವೇದಗಳೂ ಯಜ್ಞಗಳೂ ಯಜ್ಞಫಲವೂ ಇವನೇ. ಲೋಕಗಳಲ್ಲಿ ನಡೆಯುವ ಎಲ್ಲ ಕರ್ಮಗಳಿಗೂ ಈ ಸೂರ್ಯನೇ ಪ್ರಭು.',
          },
        },
      ],
    },
    {
      title: 'फलश्रुतिः',
      titleEn: 'Phala-shruti',
      verses: [
        {
          n: 25,
          text: 'एनमापत्सु कृच्छ्रेषु कान्तारेषु भयेषु च ।\nकीर्तयन्पुरुषः कश्चिन्नावसीदति राघव ॥',
          meaning: {
            en: 'O Rāghava, whoever sings his praise in calamity, in hardship, in the wilderness or in times of fear, will never sink into despair.',
            kn: 'ರಾಘವಾ, ಆಪತ್ತಿನಲ್ಲಿ, ಕಷ್ಟದಲ್ಲಿ, ಕಾಡಿನ ದಾರಿಯಲ್ಲಿ, ಭಯದ ಸಂದರ್ಭಗಳಲ್ಲಿ ಇವನನ್ನು ಕೀರ್ತಿಸುವ ಯಾವನೂ ಕುಗ್ಗಿಹೋಗುವುದಿಲ್ಲ.',
          },
        },
        {
          n: 26,
          text: 'पूजयस्वैनमेकाग्रो देवदेवं जगत्पतिम् ।\nएतत्त्रिगुणितं जप्त्वा युद्धेषु विजयिष्यसि ॥',
          meaning: {
            en: 'Worship him with a single-pointed mind, the God of gods, the Lord of the universe. Recite this hymn three times and you will be victorious in battle.',
            kn: 'ದೇವದೇವನೂ ಜಗತ್ಪತಿಯೂ ಆದ ಇವನನ್ನು ಏಕಾಗ್ರಮನಸ್ಸಿನಿಂದ ಪೂಜಿಸು. ಇದನ್ನು ಮೂರು ಬಾರಿ ಜಪಿಸಿದರೆ ಯುದ್ಧದಲ್ಲಿ ನೀನು ಜಯಿಸುವೆ.',
          },
        },
        {
          n: 27,
          text: 'अस्मिन्क्षणे महाबाहो रावणं त्वं वधिष्यसि ।\nएवमुक्त्वा तदागस्त्यो जगाम च यथागतम् ॥',
          meaning: {
            en: '"This very moment, mighty-armed one, you will slay Rāvaṇa." Having said this, Agastya went back the way he had come.',
            kn: '"ಮಹಾಬಾಹುವೇ, ಇದೇ ಕ್ಷಣದಲ್ಲಿ ನೀನು ರಾವಣನನ್ನು ಸಂಹರಿಸುವೆ." ಹೀಗೆ ಹೇಳಿ ಅಗಸ್ತ್ಯರು ಬಂದ ದಾರಿಯಲ್ಲೇ ಹಿಂತಿರುಗಿದರು.',
          },
        },
      ],
    },
    {
      title: 'उपसंहारः',
      titleEn: 'Conclusion',
      verses: [
        {
          n: 28,
          text: 'एतच्छ्रुत्वा महातेजा नष्टशोकोऽभवत्तदा ।\nधारयामास सुप्रीतो राघवः प्रयतात्मवान् ॥',
          meaning: {
            en: 'Hearing this, the radiant Rāghava was freed from his sorrow. Delighted, and with a disciplined mind, he took the hymn to heart.',
            kn: 'ಇದನ್ನು ಕೇಳಿ ಮಹಾತೇಜಸ್ವಿಯಾದ ರಾಘವನ ದುಃಖವೆಲ್ಲ ದೂರವಾಯಿತು. ಅತ್ಯಂತ ಸಂತೋಷದಿಂದ, ಸಂಯಮಿತ ಮನಸ್ಸಿನಿಂದ ಅವನು ಆ ಸ್ತೋತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಧರಿಸಿದನು.',
          },
        },
        {
          n: 29,
          text: 'आदित्यं प्रेक्ष्य जप्त्वा तु परं हर्षमवाप्तवान् ।\nत्रिराचम्य शुचिर्भूत्वा धनुरादाय वीर्यवान् ॥',
          meaning: {
            en: 'Gazing at the Sun and reciting the hymn, he was filled with great joy. The valiant prince sipped water three times, purified himself and took up his bow.',
            kn: 'ಸೂರ್ಯನನ್ನು ನೋಡುತ್ತಾ ಜಪಿಸಿ ಅವನು ಪರಮಾನಂದವನ್ನು ಹೊಂದಿದನು. ಪರಾಕ್ರಮಿಯಾದ ಶ್ರೀರಾಮನು ಮೂರು ಬಾರಿ ಆಚಮನ ಮಾಡಿ ಶುದ್ಧನಾಗಿ ಧನುಸ್ಸನ್ನು ಕೈಗೆತ್ತಿಕೊಂಡನು.',
          },
        },
        {
          n: 30,
          text: 'रावणं प्रेक्ष्य हृष्टात्मा युद्धाय समुपागमत् ।\nसर्वयत्नेन महता वधे तस्य धृतोऽभवत् ॥',
          meaning: {
            en: 'Seeing Rāvaṇa, he advanced to battle with a glad heart, resolved with all his might to bring about his death.',
            kn: 'ರಾವಣನನ್ನು ಕಂಡು ಹರ್ಷಚಿತ್ತನಾಗಿ ಯುದ್ಧಕ್ಕೆ ಮುಂದಾದನು; ತನ್ನ ಸಂಪೂರ್ಣ ಪ್ರಯತ್ನದಿಂದ ಅವನನ್ನು ವಧಿಸಲು ದೃಢಸಂಕಲ್ಪ ಮಾಡಿದನು.',
          },
        },
        {
          n: 31,
          text: 'अथ रविरवदन्निरीक्ष्य रामं\nमुदितमनाः परमं प्रहृष्यमाणः ।\nनिशिचरपतिसङ्क्षयं विदित्वा\nसुरगणमध्यगतो वचस्त्वरेति ॥',
          meaning: {
            en: 'Then the Sun, standing among the gods, looked upon Rāma with a joyful heart and great delight. Knowing that the end of the demon king was near, he said: "Make haste!"',
            kn: 'ಆಗ ದೇವತೆಗಳ ನಡುವೆ ಇದ್ದ ಸೂರ್ಯದೇವನು ಶ್ರೀರಾಮನನ್ನು ನೋಡಿ ಮನಸ್ಸಿನಲ್ಲಿ ಅತ್ಯಂತ ಹರ್ಷಗೊಂಡು, ರಾಕ್ಷಸರಾಜನ ಅಂತ್ಯ ಸಮೀಪಿಸಿದೆ ಎಂದು ತಿಳಿದು "ಬೇಗನೆ ಮುಂದುವರಿ!" ಎಂದು ನುಡಿದನು.',
          },
        },
        {
          text: 'इति श्रीमद्रामायणे आदित्यहृदयं समाप्तम् ॥',
        },
      ],
    },
  ],
};
