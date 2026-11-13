/**
 * Ṣoḍaśopacāra Pūjā — generic sixteen-step worship (shown for Śrī Mahāviṣṇu).
 * NOT YET PROOFREAD against a printed pūjā-vidhāna. Formulas follow the common
 * South Indian (Karnataka) household pattern.
 */
import type { Mantra } from '../types';

/** Name of the deity in the dative case. Replace when worshipping another deity. */
const D = 'ॐ श्रीमहाविष्णवे नमः ।';
const REPLACE =
  'Replace “श्रीमहाविष्णवे” with the name of the deity being worshipped in the dative case (e.g. श्रीकृष्णाय, श्रीलक्ष्मीनारायणाय, श्रीगणेशाय).';

export const shodashopacharaPuja: Mantra = {
  id: 'shodashopachara-puja',
  title: 'षोडशोपचारपूजा',
  titleEn: 'Shodashopachara Puja',
  category: 'puja',
  deity: 'Śrī Mahāviṣṇu (or any deity)',
  source: 'Traditional Āgama / Purāṇic pūjā-vidhāna (household practice)',
  summary:
    'The sixteen-step (ṣoḍaśa upacāra) worship used in daily and festival pūjā: the deity is welcomed as an honoured guest, bathed, dressed, adorned and offered food, light and prostrations. Shown here for Śrī Mahāviṣṇu; the same formulas serve for any deity by changing the name.',
  summaryKn:
    'ದೈನಂದಿನ ಹಾಗೂ ಹಬ್ಬದ ಪೂಜೆಗಳಲ್ಲಿ ಮಾಡುವ ಹದಿನಾರು ಉಪಚಾರಗಳ (ಷೋಡಶೋಪಚಾರ) ಪೂಜೆ: ದೇವರನ್ನು ಗೌರವಾನ್ವಿತ ಅತಿಥಿಯಂತೆ ಬರಮಾಡಿಕೊಂಡು, ಸ್ನಾನ ಮಾಡಿಸಿ, ವಸ್ತ್ರ ಆಭರಣಗಳಿಂದ ಅಲಂಕರಿಸಿ, ನೈವೇದ್ಯ, ದೀಪ ಮತ್ತು ನಮಸ್ಕಾರಗಳನ್ನು ಅರ್ಪಿಸಲಾಗುತ್ತದೆ. ಇಲ್ಲಿ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿನ ಪೂಜೆಯಾಗಿ ಕೊಡಲಾಗಿದೆ; ದೇವರ ಹೆಸರನ್ನು ಬದಲಿಸಿ ಇದೇ ಮಂತ್ರಗಳಿಂದ ಯಾವ ದೇವರನ್ನಾದರೂ ಪೂಜಿಸಬಹುದು.',
  difficulty: 'easy',
  completeness: 'complete',
  contentNote:
    'Shown for Śrī Mahāviṣṇu. To worship another deity, replace श्रीमहाविष्णवे in each formula with that deity\'s name in the dative case. Detailed procedures (e.g. Puruṣa-sūkta based pūjā, pañcāmṛta abhiṣeka, aṣṭottara archana) vary by family; follow your family tradition.',
  sections: [
    {
      title: 'आचमनम्',
      titleEn: 'Ācamana',
      note:
        'Sip water from the right palm at each of the three names ending in स्वाहा; then touch the body with the remaining names as described in the Sandhyāvandane text (full 24-name ācamana).',
      verses: [
        {
          text: 'ॐ केशवाय स्वाहा ।\nॐ नारायणाय स्वाहा ।\nॐ माधवाय स्वाहा ॥',
          meaning: {
            en: 'Offering to Keśava, to Nārāyaṇa and to Mādhava: with each of these names of the Lord a sip of water is taken.',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಭಗವಂತನ ನಾಮಗಳನ್ನು ಹೇಳಿ, ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಜಲವನ್ನು ಅರ್ಪಿಸಿ ಆಚಮನ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ गोविन्दाय नमः ।\nॐ विष्णवे नमः ॥',
          meaning: {
            en: 'Salutations to Govinda; salutations to Viṣṇu.',
            kn: 'ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ; ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Saṅkalpa (resolve)',
      note:
        'Hold akṣata and water in the right hand. Replace each अमुक with the current saṁvatsara, ayana, ṛtu, māsa, pakṣa, tithi, weekday and nakṣatra from the pañcāṅga, and the deity name as needed. At the end place the akṣata and water in the plate.',
      verses: [
        {
          text:
            'हरिः ॐ तत्सत् । श्रीगोविन्द गोविन्द गोविन्द ।\nअद्य शुभे शोभने मुहूर्ते\nअमुक नाम संवत्सरे अमुक अयने अमुक ऋतौ\nअमुक मासे अमुक पक्षे अमुक तिथौ\nअमुक वासरे अमुक नक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'Hari Om Tat Sat; Govinda is remembered three times. Today, at this good and auspicious hour, in the present year, ayana, season, month, fortnight, tithi, weekday and star, under an auspicious yoga and karaṇa, on this auspicious day so marked…',
            kn: 'ಹರಿಃ ಓಂ ತತ್ಸತ್; ಗೋವಿಂದನನ್ನು ಮೂರು ಬಾರಿ ಸ್ಮರಿಸುತ್ತೇನೆ. ಇಂದು ಈ ಶುಭಮುಹೂರ್ತದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ಶುಭಯೋಗ, ಶುಭಕರಣಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          text:
            'मम सकुटुम्बस्य क्षेमस्थैर्यायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nश्रीमहाविष्णुप्रीत्यर्थं यथाशक्ति\nध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥',
          meaning: {
            en: 'For the growth of well-being, stability, long life, health and prosperity for me and my family, and for the pleasure of Śrī Mahāviṣṇu, I shall perform, as far as I am able, the sixteen-step worship beginning with meditation and invocation.',
            kn: 'ನನಗೂ ನನ್ನ ಕುಟುಂಬದವರಿಗೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳು ವೃದ್ಧಿಯಾಗಲೆಂದು, ಶ್ರೀಮಹಾವಿಷ್ಣುವಿನ ಪ್ರೀತಿಗಾಗಿ, ಯಥಾಶಕ್ತಿ ಧ್ಯಾನ, ಆವಾಹನೆ ಮೊದಲಾದ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'कलशपूजा',
      titleEn: 'Kalaśa pūjā (worship of the water-pot)',
      note:
        'Place gandha, akṣata and a flower on the kalaśa (water vessel) and cover its mouth with the right palm while reciting. This water is then used for the upacāras and sprinkled on the pūjā items and oneself.',
      verses: [
        {
          text:
            'कलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः ।\nमूले तत्र स्थितो ब्रह्मा मध्ये मातृगणाः स्मृताः ॥',
          meaning: {
            en: 'Viṣṇu dwells in the mouth of the kalaśa and Rudra in its neck; Brahmā stands at its base, and the hosts of Mother-goddesses are said to be in its middle.',
            kn: 'ಕಲಶದ ಮುಖದಲ್ಲಿ ವಿಷ್ಣುವೂ, ಕಂಠದಲ್ಲಿ ರುದ್ರನೂ, ಮೂಲದಲ್ಲಿ ಬ್ರಹ್ಮದೇವರೂ, ಮಧ್ಯದಲ್ಲಿ ಮಾತೃಗಣಗಳೂ ನೆಲೆಸಿದ್ದಾರೆ.',
          },
        },
        {
          text:
            'कुक्षौ तु सागराः सर्वे सप्तद्वीपा वसुन्धरा ।\nऋग्वेदोऽथ यजुर्वेदः सामवेदो ह्यथर्वणः ।\nअङ्गैश्च सहिताः सर्वे कलशाम्बु समाश्रिताः ॥',
          meaning: {
            en: 'In its body are all the oceans and the earth with its seven continents; the Ṛg, Yajur, Sāma and Atharva Vedas, together with their limbs, all abide in the water of the kalaśa.',
            kn: 'ಅದರ ಒಡಲಲ್ಲಿ ಎಲ್ಲಾ ಸಮುದ್ರಗಳೂ ಏಳು ದ್ವೀಪಗಳಿಂದ ಕೂಡಿದ ಭೂಮಿಯೂ ಇವೆ. ಋಗ್ವೇದ, ಯಜುರ್ವೇದ, ಸಾಮವೇದ, ಅಥರ್ವವೇದಗಳು ತಮ್ಮ ಅಂಗಗಳೊಂದಿಗೆ ಕಲಶದ ಜಲದಲ್ಲಿ ನೆಲೆಸಿವೆ.',
          },
        },
        {
          text:
            'गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥',
          meaning: {
            en: 'O Gaṅgā, Yamunā, Godāvarī, Sarasvatī, Narmadā, Sindhu and Kāverī, be present in this water.',
            kn: 'ಓ ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು, ಕಾವೇರಿ ನದಿಗಳೇ, ಈ ಜಲದಲ್ಲಿ ಸಾನ್ನಿಧ್ಯವನ್ನು ನೀಡಿರಿ.',
          },
        },
      ],
    },
    {
      title: 'घण्टापूजा',
      titleEn: 'Ghaṇṭā pūjā (worship of the bell)',
      note: 'Offer gandha and akṣata to the bell and ring it.',
      verses: [
        {
          text:
            'आगमार्थं तु देवानां गमनार्थं तु रक्षसाम् ।\nकुर्वे घण्टारवं तत्र देवताह्वानलाञ्छनम् ॥',
          meaning: {
            en: 'I ring the bell, the sign that invites the gods, so that the gods may come and the demonic forces depart.',
            kn: 'ದೇವತೆಗಳು ಬರಲೆಂದೂ ರಾಕ್ಷಸರು ತೊಲಗಲೆಂದೂ, ದೇವತೆಗಳನ್ನು ಆಹ್ವಾನಿಸುವ ಸಂಕೇತವಾದ ಘಂಟಾನಾದವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'ध्यानम्',
      titleEn: '1. Dhyāna (meditation)',
      note: `Meditate on the form of the deity with folded hands. ${REPLACE} For other deities use that deity's dhyāna-śloka.`,
      verses: [
        {
          text:
            'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\nविश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् ।\nलक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं\nवन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥',
          meaning: {
            en: 'I bow to Viṣṇu: serene in form, resting on the serpent, lotus-navelled, lord of the gods, support of the universe, vast as the sky, dark as a rain-cloud, of auspicious form; beloved of Lakṣmī, lotus-eyed, reached by yogis in meditation, remover of the fear of worldly existence, the one Lord of all the worlds.',
            kn: 'ಶಾಂತಸ್ವರೂಪನೂ, ಶೇಷಶಾಯಿಯೂ, ಪದ್ಮನಾಭನೂ, ದೇವತೆಗಳ ಒಡೆಯನೂ, ಜಗತ್ತಿಗೆ ಆಧಾರನೂ, ಆಕಾಶದಂತೆ ವ್ಯಾಪಕನೂ, ಮೇಘವರ್ಣನೂ, ಮಂಗಳಾಂಗನೂ, ಲಕ್ಷ್ಮೀಪತಿಯೂ, ಕಮಲನಯನನೂ, ಯೋಗಿಗಳ ಧ್ಯಾನಕ್ಕೆ ಗೋಚರನೂ, ಸಂಸಾರಭಯವನ್ನು ಹೋಗಲಾಡಿಸುವವನೂ, ಸಕಲ ಲೋಕಗಳಿಗೆ ಏಕೈಕ ಒಡೆಯನೂ ಆದ ಶ್ರೀವಿಷ್ಣುವಿಗೆ ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: `${D}\nध्यायामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I meditate on the Lord.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ದೇವರನ್ನು ಧ್ಯಾನಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'आवाहनम्',
      titleEn: '2. Āvāhana (invocation)',
      note: `Offer akṣata / a flower at the image, inviting the deity to be present. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nआवाहयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I invite the Lord to be present here.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ದೇವರನ್ನು ಇಲ್ಲಿಗೆ ಆವಾಹನೆ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'आसनम्',
      titleEn: '3. Āsana (seat)',
      note: `Offer akṣata as a seat for the deity. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nरत्नसिंहासनं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer the Lord a jewelled throne as his seat.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ದೇವರಿಗೆ ಆಸನವಾಗಿ ರತ್ನಸಿಂಹಾಸನವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'पाद्यम्',
      titleEn: '4. Pādya (water for the feet)',
      note: `Offer a spoonful of water at the feet of the deity. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nपादयोः पाद्यं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer water to wash the feet.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಪಾದಗಳನ್ನು ತೊಳೆಯಲು ಪಾದ್ಯವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यम्',
      titleEn: '5. Arghya (water for the hands)',
      note: `Offer water (with gandha and akṣata) to the hands of the deity. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nहस्तयोरर्घ्यं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer arghya water to the hands.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಹಸ್ತಗಳಿಗೆ ಅರ್ಘ್ಯವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'आचमनीयम्',
      titleEn: '6. Ācamanīya (water for sipping)',
      note: `Offer a spoonful of water for the deity to sip. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nमुखे आचमनीयं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer water to sip.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಮುಖಕ್ಕೆ ಆಚಮನಕ್ಕಾಗಿ ಜಲವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'स्नानम्',
      titleEn: '7. Snāna (bath)',
      note: `Bathe the image (or sprinkle water on it). Pañcāmṛta abhiṣeka (milk, curd, ghee, honey, sugar) may be done here per family practice, followed by a bath of pure water and ācamanīya. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nशुद्धोदकस्नानं समर्पयामि ।\nस्नानानन्तरमाचमनीयं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer a bath of pure water, and after the bath I offer water to sip.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಶುದ್ಧೋದಕ ಸ್ನಾನವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ, ಸ್ನಾನದ ನಂತರ ಆಚಮನಕ್ಕೆ ಜಲವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'वस्त्रम्',
      titleEn: '8. Vastra (garments)',
      note: `Offer cloth (or cotton-thread garlands / akṣata in its place). ${REPLACE}`,
      verses: [
        {
          text: `${D}\nवस्त्रयुग्मं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer a pair of garments.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ವಸ್ತ್ರಯುಗ್ಮವನ್ನು (ಒಂದು ಜೊತೆ ವಸ್ತ್ರವನ್ನು) ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'यज्ञोपवीतम्',
      titleEn: '9. Yajñopavīta (sacred thread)',
      note: `Offer a sacred thread (or akṣata in its place). For goddesses, offer kañcuka / mangala items instead as per family practice. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nयज्ञोपवीतं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer the sacred thread.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಯಜ್ಞೋಪವೀತವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'गन्धः',
      titleEn: '10. Gandha (sandal paste)',
      note: `Apply sandal paste, then offer akṣata (and for goddesses haridrā-kuṅkuma). ${REPLACE}`,
      verses: [
        {
          text: `${D}\nगन्धं समर्पयामि ।\nअक्षतान् समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer sandal paste, and I offer akṣata.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಗಂಧವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ, ಅಕ್ಷತೆಯನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'पुष्पम्',
      titleEn: '11. Puṣpa (flowers)',
      note: `Offer flowers and tulasī (for Viṣṇu). The deity's aṣṭottara-śata-nāmāvali may be recited here with flowers or akṣata. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nपुष्पाणि समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer flowers.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಪುಷ್ಪಗಳನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'धूपः',
      titleEn: '12. Dhūpa (incense)',
      note: `Wave lit incense before the deity while ringing the bell. ${REPLACE}`,
      verses: [
        {
          text:
            'वनस्पतिरसोद्भूतो गन्धाढ्यो गन्ध उत्तमः ।\nआघ्रेयः सर्वदेवानां धूपोऽयं प्रतिगृह्यताम् ॥',
          meaning: {
            en: 'Born of the essence of trees, rich in fragrance, the finest of scents, fit to be enjoyed by all the gods: may this incense be accepted.',
            kn: 'ವನಸ್ಪತಿಗಳ ರಸದಿಂದ ಹುಟ್ಟಿದ, ಸುಗಂಧಭರಿತವಾದ, ಉತ್ತಮ ಪರಿಮಳವುಳ್ಳ, ಎಲ್ಲಾ ದೇವತೆಗಳೂ ಆಘ್ರಾಣಿಸಲು ಯೋಗ್ಯವಾದ ಈ ಧೂಪವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: `${D}\nधूपमाघ्रापयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer incense for the Lord to enjoy.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಧೂಪವನ್ನು ಆಘ್ರಾಣಿಸಲು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'दीपः',
      titleEn: '13. Dīpa (lamp)',
      note: `Show a ghee lamp before the deity while ringing the bell. ${REPLACE}`,
      verses: [
        {
          text:
            'साज्यं च वर्तिसंयुक्तं वह्निना योजितं मया ।\nदीपं गृहाण देवेश त्रैलोक्यतिमिरापह ॥',
          meaning: {
            en: 'O Lord of the gods, dispeller of the darkness of the three worlds, accept this lamp of ghee and wick, lit by me with fire.',
            kn: 'ಮೂರು ಲೋಕಗಳ ಕತ್ತಲೆಯನ್ನು ಹೋಗಲಾಡಿಸುವ ಓ ದೇವದೇವ, ತುಪ್ಪ ಮತ್ತು ಬತ್ತಿಯಿಂದ ಕೂಡಿ ನಾನು ಬೆಳಗಿಸಿದ ಈ ದೀಪವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: `${D}\nदीपं दर्शयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I show the lamp to the Lord.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ದೇವರಿಗೆ ದೀಪವನ್ನು ತೋರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'नैवेद्यम्',
      titleEn: '14. Naivedya (food offering)',
      note: `Sprinkle water around the food, place a tulasī leaf / flower on it, and offer it with the five prāṇa mantras, showing it to the deity with the right hand. Offer water to sip in between and at the end. ${REPLACE}`,
      verses: [
        {
          text:
            'नैवेद्यं गृह्यतां देव भक्तिं मे ह्यचलां कुरु ।\nईप्सितं मे वरं देहि परत्र च परां गतिम् ॥',
          meaning: {
            en: 'O Lord, accept this food offering and make my devotion unwavering; grant me the boon I seek, and the highest goal hereafter.',
            kn: 'ಓ ದೇವ, ಈ ನೈವೇದ್ಯವನ್ನು ಸ್ವೀಕರಿಸಿ ನನ್ನ ಭಕ್ತಿಯನ್ನು ಅಚಲವಾಗಿಸು. ನಾನು ಬಯಸುವ ವರವನ್ನು ಕೊಡು, ಪರಲೋಕದಲ್ಲಿ ಉತ್ತಮ ಗತಿಯನ್ನು ಕರುಣಿಸು.',
          },
        },
        {
          text:
            'ॐ प्राणाय स्वाहा । ॐ अपानाय स्वाहा ।\nॐ व्यानाय स्वाहा । ॐ उदानाय स्वाहा ।\nॐ समानाय स्वाहा ॥',
          meaning: {
            en: 'Offering to prāṇa, apāna, vyāna, udāna and samāna, the five vital breaths.',
            kn: 'ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಉದಾನ, ಸಮಾನ ಎಂಬ ಐದು ಪ್ರಾಣಗಳಿಗೆ ಆಹುತಿಯಾಗಿ ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: `${D}\nनैवेद्यं समर्पयामि ।\nमध्ये पानीयं समर्पयामि ।\nउत्तरापोशनं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer the food, drinking water in between, and water to close the meal (uttarāpośana).',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ನೈವೇದ್ಯವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ, ಮಧ್ಯದಲ್ಲಿ ಕುಡಿಯಲು ನೀರನ್ನೂ ಕೊನೆಯಲ್ಲಿ ಉತ್ತರಾಪೋಶನವನ್ನೂ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'ताम्बूलम्',
      titleEn: '15. Tāmbūla (betel leaves and nut)',
      note: `Offer betel leaves with areca nut (and fruit / dakṣiṇā as per practice). ${REPLACE}`,
      verses: [
        {
          text:
            'पूगीफलसमायुक्तं नागवल्लीदलैर्युतम् ।\nकर्पूरचूर्णसंयुक्तं ताम्बूलं प्रतिगृह्यताम् ॥',
          meaning: {
            en: 'Please accept this tāmbūla of betel leaves with areca nut and camphor powder.',
            kn: 'ಅಡಿಕೆ, ವೀಳ್ಯದೆಲೆ ಮತ್ತು ಕರ್ಪೂರದ ಪುಡಿಯಿಂದ ಕೂಡಿದ ಈ ತಾಂಬೂಲವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: `${D}\nताम्बूलं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer tāmbūla.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ತಾಂಬೂಲವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'नीराजनम्',
      titleEn: '16. Nīrājana (ārati)',
      note: `Wave lighted camphor (or a ghee lamp) in circles before the deity while ringing the bell; then offer water around the flame and take the ārati with both hands. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nकर्पूरनीराजनं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer ārati with burning camphor.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಕರ್ಪೂರದ ಆರತಿಯನ್ನು (ನೀರಾಜನವನ್ನು) ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'मन्त्रपुष्पम्',
      titleEn: 'Mantrapuṣpa',
      note: `Recite the Mantra Puṣpam text (or any stotra of the deity) holding flowers in joined palms, then offer the flowers at the feet of the deity. ${REPLACE}`,
      verses: [
        {
          text: `${D}\nमन्त्रपुष्पं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer flowers with mantras (mantrapuṣpa).',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಮಂತ್ರಪುಷ್ಪವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'प्रदक्षिणा',
      titleEn: 'Pradakṣiṇā (circumambulation)',
      note: `Walk clockwise around the deity (or turn around in place, clockwise, three times). ${REPLACE}`,
      verses: [
        {
          text:
            'यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्ति प्रदक्षिणपदे पदे ॥',
          meaning: {
            en: 'Whatever sins there are, even those committed in former births, are destroyed at every step of the circumambulation.',
            kn: 'ಹಿಂದಿನ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದವೂ ಸೇರಿದಂತೆ ಯಾವ ಯಾವ ಪಾಪಗಳಿವೆಯೋ, ಅವೆಲ್ಲವೂ ಪ್ರದಕ್ಷಿಣೆಯ ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗುತ್ತವೆ.',
          },
        },
        {
          text: `${D}\nप्रदक्षिणं समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer circumambulation.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರದಕ್ಷಿಣೆಯನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'नमस्कारः',
      titleEn: 'Namaskāra (prostration)',
      note: `Prostrate before the deity (sāṣṭāṅga namaskāra for men; pañcāṅga for women as per tradition). ${REPLACE}`,
      verses: [
        {
          text:
            'नमोऽस्त्वनन्ताय सहस्रमूर्तये\nसहस्रपादाक्षिशिरोरुबाहवे ।\nसहस्रनाम्ने पुरुषाय शाश्वते\nसहस्रकोटीयुगधारिणे नमः ॥',
          meaning: {
            en: 'Salutations to the Infinite One of a thousand forms, with a thousand feet, eyes, heads, thighs and arms; salutations to the eternal Person of a thousand names, who upholds thousands of crores of yugas.',
            kn: 'ಸಾವಿರ ರೂಪಗಳುಳ್ಳ, ಸಾವಿರ ಪಾದ, ಕಣ್ಣು, ಶಿರ, ತೊಡೆ, ಬಾಹುಗಳುಳ್ಳ ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ; ಸಾವಿರ ನಾಮಗಳುಳ್ಳ, ಸಾವಿರ ಕೋಟಿ ಯುಗಗಳನ್ನು ಧರಿಸಿರುವ ಶಾಶ್ವತ ಪುರುಷನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: `${D}\nनमस्कारान् समर्पयामि ॥`,
          meaning: {
            en: 'Om, salutations to Śrī Mahāviṣṇu; I offer my prostrations.',
            kn: 'ಓಂ ಶ್ರೀಮಹಾವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ನಮಸ್ಕಾರಗಳನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'क्षमापणम्',
      titleEn: 'Kṣamāpaṇa (asking forgiveness)',
      note: 'With folded hands, ask forgiveness for any lapses in the worship.',
      verses: [
        {
          text:
            'आवाहनं न जानामि न जानामि विसर्जनम् ।\nपूजां चैव न जानामि क्षमस्व परमेश्वर ॥',
          meaning: {
            en: 'I know not how to invoke you, nor how to bid you farewell, nor how to worship you; forgive me, O Supreme Lord.',
            kn: 'ಆವಾಹನೆಯನ್ನಾಗಲಿ, ವಿಸರ್ಜನೆಯನ್ನಾಗಲಿ, ಪೂಜಾವಿಧಾನವನ್ನಾಗಲಿ ನಾನು ಅರಿಯೆನು; ಓ ಪರಮೇಶ್ವರ, ನನ್ನನ್ನು ಕ್ಷಮಿಸು.',
          },
        },
        {
          text:
            'मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।\nयत्पूजितं मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'O Janārdana, whatever worship I have done, lacking in mantra, in rite or in devotion, may it be made complete for me.',
            kn: 'ಓ ಜನಾರ್ದನ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿ ಇವುಗಳಲ್ಲಿ ಕೊರತೆಯಿದ್ದರೂ ನಾನು ಮಾಡಿದ ಈ ಪೂಜೆಯು ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
        {
          text:
            'अपराधसहस्राणि क्रियन्तेऽहर्निशं मया ।\nदासोऽयमिति मां मत्वा क्षमस्व पुरुषोत्तम ॥',
          meaning: {
            en: 'Thousands of faults are committed by me day and night; thinking of me as your servant, forgive me, O Puruṣottama.',
            kn: 'ಹಗಲೂ ರಾತ್ರಿಯೂ ನನ್ನಿಂದ ಸಾವಿರಾರು ಅಪರಾಧಗಳು ನಡೆಯುತ್ತವೆ; ಇವನು ನನ್ನ ದಾಸನೆಂದು ಭಾವಿಸಿ, ಓ ಪುರುಷೋತ್ತಮ, ನನ್ನನ್ನು ಕ್ಷಮಿಸು.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Samarpaṇa (dedication)',
      note:
        'Pour a little water from the right hand (with akṣata) into the plate, offering the fruit of the worship to the Lord. Replace the deity name in the second line as needed.',
      verses: [
        {
          text:
            'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Nārāyaṇa.',
            kn: 'ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अनेन मया कृतेन षोडशोपचारपूजनेन\nश्रीमहाविष्णुः प्रीयताम् ॥',
          meaning: {
            en: 'May Śrī Mahāviṣṇu be pleased by this sixteen-step worship performed by me.',
            kn: 'ನಾನು ಮಾಡಿದ ಈ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಿಂದ ಶ್ರೀಮಹಾವಿಷ್ಣುವು ಪ್ರೀತನಾಗಲಿ.',
          },
        },
        {
          text: 'सर्वं श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'May all this be an offering to Śrī Kṛṣṇa.',
            kn: 'ಎಲ್ಲವೂ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
      ],
    },
  ],
};
