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
        { text: 'ॐ केशवाय स्वाहा ।\nॐ नारायणाय स्वाहा ।\nॐ माधवाय स्वाहा ॥' },
        { text: 'ॐ गोविन्दाय नमः ।\nॐ विष्णवे नमः ॥' },
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
        },
        {
          text:
            'मम सकुटुम्बस्य क्षेमस्थैर्यायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nश्रीमहाविष्णुप्रीत्यर्थं यथाशक्ति\nध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥',
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
        },
        {
          text:
            'कुक्षौ तु सागराः सर्वे सप्तद्वीपा वसुन्धरा ।\nऋग्वेदोऽथ यजुर्वेदः सामवेदो ह्यथर्वणः ।\nअङ्गैश्च सहिताः सर्वे कलशाम्बु समाश्रिताः ॥',
        },
        {
          text:
            'गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥',
          meaning:
            'O Gaṅgā, Yamunā, Godāvarī, Sarasvatī, Narmadā, Sindhu and Kāverī — be present in this water.',
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
          meaning:
            'I ring the bell — the sign that invites the gods — so that the gods may come and the demonic forces depart.',
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
        },
        { text: `${D}\nध्यायामि ॥` },
      ],
    },
    {
      title: 'आवाहनम्',
      titleEn: '2. Āvāhana (invocation)',
      note: `Offer akṣata / a flower at the image, inviting the deity to be present. ${REPLACE}`,
      verses: [{ text: `${D}\nआवाहयामि ॥` }],
    },
    {
      title: 'आसनम्',
      titleEn: '3. Āsana (seat)',
      note: `Offer akṣata as a seat for the deity. ${REPLACE}`,
      verses: [{ text: `${D}\nरत्नसिंहासनं समर्पयामि ॥` }],
    },
    {
      title: 'पाद्यम्',
      titleEn: '4. Pādya (water for the feet)',
      note: `Offer a spoonful of water at the feet of the deity. ${REPLACE}`,
      verses: [{ text: `${D}\nपादयोः पाद्यं समर्पयामि ॥` }],
    },
    {
      title: 'अर्घ्यम्',
      titleEn: '5. Arghya (water for the hands)',
      note: `Offer water (with gandha and akṣata) to the hands of the deity. ${REPLACE}`,
      verses: [{ text: `${D}\nहस्तयोरर्घ्यं समर्पयामि ॥` }],
    },
    {
      title: 'आचमनीयम्',
      titleEn: '6. Ācamanīya (water for sipping)',
      note: `Offer a spoonful of water for the deity to sip. ${REPLACE}`,
      verses: [{ text: `${D}\nमुखे आचमनीयं समर्पयामि ॥` }],
    },
    {
      title: 'स्नानम्',
      titleEn: '7. Snāna (bath)',
      note: `Bathe the image (or sprinkle water on it). Pañcāmṛta abhiṣeka (milk, curd, ghee, honey, sugar) may be done here per family practice, followed by a bath of pure water and ācamanīya. ${REPLACE}`,
      verses: [{ text: `${D}\nशुद्धोदकस्नानं समर्पयामि ।\nस्नानानन्तरमाचमनीयं समर्पयामि ॥` }],
    },
    {
      title: 'वस्त्रम्',
      titleEn: '8. Vastra (garments)',
      note: `Offer cloth (or cotton-thread garlands / akṣata in its place). ${REPLACE}`,
      verses: [{ text: `${D}\nवस्त्रयुग्मं समर्पयामि ॥` }],
    },
    {
      title: 'यज्ञोपवीतम्',
      titleEn: '9. Yajñopavīta (sacred thread)',
      note: `Offer a sacred thread (or akṣata in its place). For goddesses, offer kañcuka / mangala items instead as per family practice. ${REPLACE}`,
      verses: [{ text: `${D}\nयज्ञोपवीतं समर्पयामि ॥` }],
    },
    {
      title: 'गन्धः',
      titleEn: '10. Gandha (sandal paste)',
      note: `Apply sandal paste, then offer akṣata (and for goddesses haridrā-kuṅkuma). ${REPLACE}`,
      verses: [{ text: `${D}\nगन्धं समर्पयामि ।\nअक्षतान् समर्पयामि ॥` }],
    },
    {
      title: 'पुष्पम्',
      titleEn: '11. Puṣpa (flowers)',
      note: `Offer flowers and tulasī (for Viṣṇu). The deity's aṣṭottara-śata-nāmāvali may be recited here with flowers or akṣata. ${REPLACE}`,
      verses: [{ text: `${D}\nपुष्पाणि समर्पयामि ॥` }],
    },
    {
      title: 'धूपः',
      titleEn: '12. Dhūpa (incense)',
      note: `Wave lit incense before the deity while ringing the bell. ${REPLACE}`,
      verses: [
        {
          text:
            'वनस्पतिरसोद्भूतो गन्धाढ्यो गन्ध उत्तमः ।\nआघ्रेयः सर्वदेवानां धूपोऽयं प्रतिगृह्यताम् ॥',
          meaning:
            'Born of the essence of trees, rich in fragrance, the finest of scents, fit to be smelt by all the gods — may this incense be accepted.',
        },
        { text: `${D}\nधूपमाघ्रापयामि ॥` },
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
          meaning:
            'O Lord of gods, dispeller of the darkness of the three worlds, accept this lamp of ghee and wick, lit by me with fire.',
        },
        { text: `${D}\nदीपं दर्शयामि ॥` },
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
          meaning:
            'O Lord, accept this food offering; make my devotion unwavering; grant me the boon I seek, and the highest goal hereafter.',
        },
        {
          text:
            'ॐ प्राणाय स्वाहा । ॐ अपानाय स्वाहा ।\nॐ व्यानाय स्वाहा । ॐ उदानाय स्वाहा ।\nॐ समानाय स्वाहा ॥',
        },
        { text: `${D}\nनैवेद्यं समर्पयामि ।\nमध्ये पानीयं समर्पयामि ।\nउत्तरापोशनं समर्पयामि ॥` },
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
          meaning:
            'Please accept this tāmbūla of betel leaves with areca nut and camphor powder.',
        },
        { text: `${D}\nताम्बूलं समर्पयामि ॥` },
      ],
    },
    {
      title: 'नीराजनम्',
      titleEn: '16. Nīrājana (ārati)',
      note: `Wave lighted camphor (or a ghee lamp) in circles before the deity while ringing the bell; then offer water around the flame and take the ārati with both hands. ${REPLACE}`,
      verses: [{ text: `${D}\nकर्पूरनीराजनं समर्पयामि ॥` }],
    },
    {
      title: 'मन्त्रपुष्पम्',
      titleEn: 'Mantrapuṣpa',
      note: `Recite the Mantra Puṣpam text (or any stotra of the deity) holding flowers in joined palms, then offer the flowers at the feet of the deity. ${REPLACE}`,
      verses: [{ text: `${D}\nमन्त्रपुष्पं समर्पयामि ॥` }],
    },
    {
      title: 'प्रदक्षिणा',
      titleEn: 'Pradakṣiṇā (circumambulation)',
      note: `Walk clockwise around the deity (or turn around in place, clockwise, three times). ${REPLACE}`,
      verses: [
        {
          text:
            'यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्ति प्रदक्षिणपदे पदे ॥',
          meaning:
            'Whatever sins were committed, even in former births, are destroyed at every step of the circumambulation.',
        },
        { text: `${D}\nप्रदक्षिणं समर्पयामि ॥` },
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
        },
        { text: `${D}\nनमस्कारान् समर्पयामि ॥` },
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
          meaning:
            'I know not how to invoke, nor how to bid farewell, nor how to worship; forgive me, O Supreme Lord.',
        },
        {
          text:
            'मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।\nयत्पूजितं मया देव परिपूर्णं तदस्तु मे ॥',
          meaning:
            'O Janārdana, whatever worship I have done, lacking in mantra, in rite or in devotion — may it be made complete.',
        },
        {
          text:
            'अपराधसहस्राणि क्रियन्तेऽहर्निशं मया ।\nदासोऽयमिति मां मत्वा क्षमस्व पुरुषोत्तम ॥',
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
        },
        { text: 'अनेन मया कृतेन षोडशोपचारपूजनेन\nश्रीमहाविष्णुः प्रीयताम् ॥' },
        { text: 'सर्वं श्रीकृष्णार्पणमस्तु ॥' },
      ],
    },
  ],
};
