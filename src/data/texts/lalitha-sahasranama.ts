/**
 * Śrī Lalitā Sahasranāma Stotram (Brahmāṇḍa Purāṇa, Uttara-khaṇḍa,
 * Lalitopākhyāna; Hayagrīva–Agastya saṃvāda), as printed for pārāyaṇa:
 * nyāsa / viniyoga, four dhyāna verses, 183 ślokas, closing colophon.
 *
 * Collated (Nov 2026) from these independent digital witnesses:
 *  - stotranidhi.com, typed Devanagari from their printed "Prabhāta
 *    Stotranidhi" (base text for the stotram)
 *  - Gita Press, Gorakhpur, "Lalitā Sahasranāma Stotra" (archive.org OCR)
 *  - Peter Freund's typed text of Swāmī Tapasyānanda's edition (Sri
 *    Ramakrishna Math, Madras 1998), via github.com/sanskrit/raw_etexts
 *  - the sanskritdocuments.org family, read through copies on sa.wikisource
 *    (2012), ebharatisampat (Rashtriya Sanskrit Vidyapeetha, Tirupati) and
 *    readslokas.github.io (counted as one witness)
 *  - for disputed names: Bhāskararāya's Saubhāgyabhāskara, ed. W. L. S.
 *    Pansikar (Nirnaya Sagar; archive.org OCR)
 *
 * Every half-verse of the stotram is 16 syllables (no hypermetric lines).
 * Numbering: 183 ślokas (stotranidhi, Gita Press, Tapasyānanda); the
 * sanskritdocuments copies leave the last couplet unnumbered (182).
 *
 * Changes to the base text, by majority of witnesses and grammar:
 *  - 8, 128 क्लुप्त → कॢप्त (Tapasyānanda, sanskritdocuments; Gita Press क्लृप्त)
 *  - 10 समाकर्षद्दिगन्तरा → समाकर्षिदिगन्तरा (Gita Press, sanskritdocuments,
 *    Bhāskararāya; stotranidhi and Tapasyānanda have समाकर्षद्°)
 *  - 12 चुबुक → चिबुक (Gita Press, sanskritdocuments, Bhāskararāya)
 *  - 17 माणिक्यमकुट° → माणिक्यमुकुट° (all other witnesses)
 *  - 21 शिवा कामेश्वराङ्कस्था शिवस्वाधीनवल्लभा → शिवकामेश्वराङ्कस्था शिवा
 *    स्वाधीनवल्लभा (all other witnesses)
 *  - 22 गृहान्तःस्था → गृहान्तस्था, and 37 कुलान्तःस्था / समयान्तःस्था →
 *    °अन्तस्था (majority; now consistent with 160 गगनान्तस्था)
 *  - 40 तटिल्लता → तडिल्लता (all other witnesses)
 *  - 78 विमोचनी → विमोचिनी (all other witnesses)
 *  - 90 द्विजबृन्द → द्विजवृन्द (Gita Press, Tapasyānanda, current sanskritdocuments)
 * Kept against some witnesses:
 *  - 40 महासक्तिः (Bhāskararāya, stotranidhi, Tapasyānanda; older
 *    sanskritdocuments copies and Gita Press महाशक्तिः)
 *  - 111 बर्बरालका (stotranidhi, Gita Press; Bhāskararāya calls it the
 *    traditional and better-attested reading; Tapasyānanda and
 *    sanskritdocuments बन्धुरालका)
 *  - 154 सर्वान्तर्यामिणी (stotranidhi, Gita Press, Bhāskararāya; others °नी)
 *  - 9 रदनच्छदा (Gita Press दशन°), 36 कलेबरा (some कलेवरा), 66 भुवनावलिः
 *    (some °आवली), 159 शान्त्यतीतकलात्मिका (Gita Press शान्त्यतीता कला°)
 * Nyāsa: wording of the Gita Press (स्तोत्रमालामहामन्त्रस्य, with
 * मूलप्रकृतिरिति ध्यानम्); others have स्तोत्रमालामन्त्रस्य (Tapasyānanda,
 * sanskritdocuments) or स्तोत्रमहामन्त्रस्य (stotranidhi). The bīja-mantra
 * kara/aṅga-nyāsa and the pañcapūjā (Gita Press, stotranidhi only) are omitted.
 * Dhyānam: all four verses are in stotranidhi, Gita Press and current
 * sanskritdocuments (Tapasyānanda and the older copies have only the first).
 * त्रिनयनां (stotranidhi त्रिणयनां), बिभ्रतीं (some °विभ्रतीं), मयूखैः.
 * Colophon: Gita Press wording.
 *
 * Meanings (en, kn) are original short glosses written for this app.
 * Still to be proofread against a printed edition before a store release.
 */
import type { Mantra } from '../types';

export const lalithaSahasranama: Mantra = {
  id: 'lalitha-sahasranama',
  title: 'श्रीललितासहस्रनामस्तोत्रम्',
  titleEn: 'Sri Lalitha Sahasranama',
  category: 'sahasranama',
  deity: 'Śrī Lalitā Tripurasundarī',
  source: 'Brahmāṇḍa Purāṇa, Uttara-khaṇḍa (Lalitopākhyāna), Hayagrīva–Agastya saṃvāda',
  summary: 'The thousand names of the Divine Mother, Śrī Lalitā Tripurasundarī, taught by Lord Hayagrīva to the sage Agastya in the Lalitopākhyāna of the Brahmāṇḍa Purāṇa. At the Goddess\'s command the names were composed and first sung by Vaśinī and the other goddesses of speech. This text gives the viniyoga, four dhyāna verses and the 183 ślokas of the stotram, recited for pārāyaṇa.',
  summaryKn: 'ಬ್ರಹ್ಮಾಂಡಪುರಾಣದ ಲಲಿತೋಪಾಖ್ಯಾನದಲ್ಲಿ ಶ್ರೀಹಯಗ್ರೀವರು ಅಗಸ್ತ್ಯ ಮಹರ್ಷಿಗಳಿಗೆ ಉಪದೇಶಿಸಿದ, ಜಗನ್ಮಾತೆ ಶ್ರೀಲಲಿತಾ ತ್ರಿಪುರಸುಂದರಿಯ ಸಾವಿರ ನಾಮಗಳು. ದೇವಿಯ ಆಜ್ಞೆಯಂತೆ ವಶಿನೀ ಮೊದಲಾದ ವಾಗ್ದೇವತೆಯರು ಈ ನಾಮಗಳನ್ನು ರಚಿಸಿ ಮೊದಲು ಹಾಡಿದರು. ಪಾರಾಯಣಕ್ಕಾಗಿ ಇಲ್ಲಿ ವಿನಿಯೋಗ, ನಾಲ್ಕು ಧ್ಯಾನಶ್ಲೋಕಗಳು ಮತ್ತು ಸ್ತೋತ್ರದ 183 ಶ್ಲೋಕಗಳನ್ನು ನೀಡಲಾಗಿದೆ.',
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'The Pūrva-bhāga (the Hayagrīva–Agastya dialogue before the names, 50 ślokas) and the Uttara-bhāga / phala-śruti (86 ślokas) are not included yet; they are to be added after collation. The karanyāsa and aṅganyāsa with bīja-mantras and the pañcapūjā (लमित्यादि) printed in some editions are also omitted. Śloka 111 follows Bhāskararāya\'s preferred reading बर्बरालका; many editions read बन्धुरालका. Other readings recited in some families: śloka 10 समाकर्षद्दिगन्तरा, 12 चुबुक°, 40 महाशक्तिः.',
  sections: [
    {
      title: 'न्यासः',
      titleEn: 'Nyāsa and Viniyoga',
      note: 'Said once before the pārāyaṇa. Those initiated into Śrī Vidyā also perform karanyāsa and aṅganyāsa here with the root mantra.',
      noteKn: 'ಪಾರಾಯಣಕ್ಕೆ ಮೊದಲು ಒಮ್ಮೆ ಹೇಳಬೇಕು. ಶ್ರೀವಿದ್ಯಾ ದೀಕ್ಷೆ ಪಡೆದವರು ಇಲ್ಲಿ ಮೂಲಮಂತ್ರದಿಂದ ಕರನ್ಯಾಸ ಮತ್ತು ಅಂಗನ್ಯಾಸಗಳನ್ನೂ ಮಾಡುತ್ತಾರೆ.',
      verses: [
        {
          text: 'अस्य श्रीललितासहस्रनामस्तोत्रमालामहामन्त्रस्य ।\nवशिन्यादिवाग्देवता ऋषयः ।\nअनुष्टुप् छन्दः ।\nश्रीललितापरमेश्वरी देवता ।\nश्रीमद्वाग्भवकूटेति बीजम् ।\nमध्यकूटेति शक्तिः ।\nशक्तिकूटेति कीलकम् ।\nमूलप्रकृतिरिति ध्यानम् ।\nमम श्रीललितामहात्रिपुरसुन्दरीप्रसादसिद्धिद्वारा चिन्तितफलावाप्त्यर्थे जपे विनियोगः ॥',
          meaning: {
            en: 'The viniyoga. For this great mantra, the garland of the thousand names of Śrī Lalitā, the seers are Vaśinī and the other goddesses of speech, the metre is anuṣṭubh and the deity is Śrī Lalitā Parameśvarī. The three sections (kūṭas) of her fifteen-syllable mantra are its seed, power and pin, Mūlaprakṛti is its meditation, and it is recited to win her grace and the fruit one longs for.',
            kn: 'ವಿನಿಯೋಗ: ಶ್ರೀಲಲಿತಾಸಹಸ್ರನಾಮವೆಂಬ ಈ ಮಹಾಮಂತ್ರಕ್ಕೆ ವಶಿನೀ ಮೊದಲಾದ ವಾಗ್ದೇವತೆಯರು ಋಷಿಗಳು, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ಶ್ರೀಲಲಿತಾ ಪರಮೇಶ್ವರಿಯು ದೇವತೆ. ಪಂಚದಶೀ ಮಂತ್ರದ ವಾಗ್ಭವಕೂಟ, ಮಧ್ಯಕೂಟ, ಶಕ್ತಿಕೂಟಗಳು ಇದರ ಬೀಜ, ಶಕ್ತಿ, ಕೀಲಕಗಳು; ಮೂಲಪ್ರಕೃತಿಯೇ ಧ್ಯಾನ. ಶ್ರೀಲಲಿತಾ ಮಹಾತ್ರಿಪುರಸುಂದರಿಯ ಅನುಗ್ರಹದಿಂದ ಬಯಸಿದ ಫಲವನ್ನು ಪಡೆಯಲು ಈ ಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'ध्यानम्',
      titleEn: 'Dhyānam',
      verses: [
        {
          n: 1,
          text: 'सिन्दूरारुणविग्रहां त्रिनयनां माणिक्यमौलिस्फुर-\nत्तारानायकशेखरां स्मितमुखीमापीनवक्षोरुहाम् ।\nपाणिभ्यामलिपूर्णरत्नचषकं रक्तोत्पलं बिभ्रतीं\nसौम्यां रत्नघटस्थरक्तचरणां ध्यायेत्परामम्बिकाम् ॥',
          meaning: {
            en: 'Let one meditate on the supreme Mother. Her body is red like vermilion, she has three eyes, and the moon shines on her ruby-studded crown; smiling and full-bosomed, she holds a jewelled cup brimming with nectar and a red lotus, and her red feet rest gently on a jewelled pot.',
            kn: 'ಸಿಂಧೂರದಂತೆ ಕೆಂಪಾದ ದೇಹವುಳ್ಳ, ಮೂರು ಕಣ್ಣುಗಳ, ಮಾಣಿಕ್ಯದ ಕಿರೀಟದಲ್ಲಿ ಚಂದ್ರನನ್ನು ಧರಿಸಿರುವ, ನಗುಮುಖದ ಪರಾಂಬಿಕೆಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು. ದೇವಿಯು ಕೈಗಳಲ್ಲಿ ಅಮೃತ ತುಂಬಿದ ರತ್ನದ ಪಾತ್ರೆಯನ್ನೂ ಕೆಂಪು ಕಮಲವನ್ನೂ ಹಿಡಿದಿರುವಳು; ಸೌಮ್ಯಳಾದ ಆಕೆಯ ಕೆಂಪು ಪಾದಗಳು ರತ್ನದ ಕಲಶದ ಮೇಲಿವೆ.',
          },
        },
        {
          n: 2,
          text: 'अरुणां करुणातरङ्गिताक्षीं\nधृतपाशाङ्कुशपुष्पबाणचापाम् ।\nअणिमादिभिरावृतां मयूखै-\nरहमित्येव विभावये भवानीम् ॥',
          meaning: {
            en: 'I contemplate Bhavānī as my very Self. She is rosy-red, her eyes ripple with waves of compassion, she holds the noose, the goad, the flower-arrows and the bow, and the powers Aṇimā and the rest surround her like rays of light.',
            kn: 'ಅರುಣವರ್ಣದವಳೂ, ಕರುಣೆಯ ಅಲೆಗಳು ತುಂಬಿದ ಕಣ್ಣುಗಳುಳ್ಳವಳೂ, ಪಾಶ, ಅಂಕುಶ, ಹೂವಿನ ಬಾಣಗಳು ಮತ್ತು ಬಿಲ್ಲನ್ನು ಧರಿಸಿದವಳೂ, ಅಣಿಮಾ ಮೊದಲಾದ ಸಿದ್ಧಿಗಳೆಂಬ ಕಿರಣಗಳಿಂದ ಸುತ್ತುವರಿದವಳೂ ಆದ ಭವಾನಿಯನ್ನು ನನ್ನ ಆತ್ಮಸ್ವರೂಪಳೆಂದೇ ಭಾವಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 3,
          text: 'ध्यायेत्पद्मासनस्थां विकसितवदनां पद्मपत्रायताक्षीं\nहेमाभां पीतवस्त्रां करकलितलसद्धेमपद्मां वराङ्गीम् ।\nसर्वालङ्कारयुक्तां सततमभयदां भक्तनम्रां भवानीं\nश्रीविद्यां शान्तमूर्तिं सकलसुरनुतां सर्वसम्पत्प्रदात्रीम् ॥',
          meaning: {
            en: 'Meditate on Bhavānī seated on a lotus, her face blooming and her eyes long like lotus petals. Golden in hue and clad in yellow, she holds a shining golden lotus, is adorned with every ornament, always grants fearlessness and is bowed to by her devotees; she is Śrī Vidyā, peace embodied, praised by all the gods, the giver of every kind of wealth.',
            kn: 'ಪದ್ಮಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ಅರಳಿದ ಮುಖದ, ಕಮಲದಳದಂತೆ ದೀರ್ಘವಾದ ಕಣ್ಣುಗಳ, ಚಿನ್ನದ ಕಾಂತಿಯ, ಹಳದಿ ವಸ್ತ್ರ ಧರಿಸಿದ, ಕೈಯಲ್ಲಿ ಹೊಳೆಯುವ ಚಿನ್ನದ ಕಮಲವನ್ನು ಹಿಡಿದ ಸುಂದರಾಂಗಿಯಾದ ಭವಾನಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು. ಎಲ್ಲ ಆಭರಣಗಳಿಂದ ಅಲಂಕೃತಳಾಗಿ ಸದಾ ಅಭಯವನ್ನು ನೀಡುವ, ಭಕ್ತರು ನಮಸ್ಕರಿಸುವ ಆಕೆಯೇ ಶ್ರೀವಿದ್ಯೆ; ಶಾಂತಮೂರ್ತಿಯಾದ ಆಕೆಯನ್ನು ಎಲ್ಲ ದೇವತೆಗಳೂ ಸ್ತುತಿಸುತ್ತಾರೆ, ಆಕೆ ಎಲ್ಲ ಸಂಪತ್ತನ್ನೂ ಕೊಡುವವಳು.',
          },
        },
        {
          n: 4,
          text: 'सकुङ्कुमविलेपनामलिकचुम्बिकस्तूरिकां\nसमन्दहसितेक्षणां सशरचापपाशाङ्कुशाम् ।\nअशेषजनमोहिनीमरुणमाल्यभूषाम्बरां\nजपाकुसुमभासुरां जपविधौ स्मरेदम्बिकाम् ॥',
          meaning: {
            en: 'During japa one should remember the Mother: anointed with saffron, a mark of musk on her forehead, her glance soft with a gentle smile, holding arrows, bow, noose and goad. She enchants all beings, wears red garlands, ornaments and garments, and glows like the red hibiscus.',
            kn: 'ಕುಂಕುಮದ ಲೇಪನವುಳ್ಳ, ಹಣೆಯಲ್ಲಿ ಕಸ್ತೂರಿ ತಿಲಕವಿರುವ, ಮಂದಹಾಸದಿಂದ ಕೂಡಿದ ನೋಟದ, ಬಾಣ, ಬಿಲ್ಲು, ಪಾಶ, ಅಂಕುಶಗಳನ್ನು ಧರಿಸಿದ, ಸಕಲ ಜನರನ್ನೂ ಮೋಹಗೊಳಿಸುವ, ಕೆಂಪು ಹೂಮಾಲೆ, ಆಭರಣ, ವಸ್ತ್ರಗಳನ್ನು ತೊಟ್ಟ, ದಾಸವಾಳದ ಹೂವಿನಂತೆ ಹೊಳೆಯುವ ಅಂಬಿಕೆಯನ್ನು ಜಪದ ಸಮಯದಲ್ಲಿ ಸ್ಮರಿಸಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'श्रीललितासहस्रनामस्तोत्रम्',
      titleEn: 'Stotram',
      note: 'Numbered in 183 ślokas, as in the Gita Press edition and most others; some editions leave the last couplet (एवं श्रीललितादेव्या …) unnumbered and count 182. Many editions begin the first śloka with ॐ.',
      noteKn: 'ಗೀತಾ ಪ್ರೆಸ್ ಮತ್ತು ಹೆಚ್ಚಿನ ಆವೃತ್ತಿಗಳಂತೆ 183 ಶ್ಲೋಕಗಳಾಗಿ ಸಂಖ್ಯೆ ನೀಡಲಾಗಿದೆ; ಕೆಲವು ಆವೃತ್ತಿಗಳು ಕೊನೆಯ ಅರ್ಧಶ್ಲೋಕಕ್ಕೆ ಸಂಖ್ಯೆ ನೀಡದೆ 182 ಎಂದು ಎಣಿಸುತ್ತವೆ. ಅನೇಕ ಆವೃತ್ತಿಗಳಲ್ಲಿ ಮೊದಲ ಶ್ಲೋಕವನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಆರಂಭಿಸುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी ।\nचिदग्निकुण्डसम्भूता देवकार्यसमुद्यता ॥',
          meaning: {
            en: 'She is the auspicious Mother (Śrīmātā), the great Empress, the Queen seated on the glorious lion-throne. She arose from the fire-altar of pure consciousness to accomplish the purpose of the gods.',
            kn: 'ಆಕೆ ಶ್ರೀಮಾತೆ, ಮಹಾಸಾಮ್ರಾಜ್ಞಿ, ಶ್ರೇಷ್ಠ ಸಿಂಹಾಸನದ ಒಡತಿ. ದೇವತೆಗಳ ಕಾರ್ಯವನ್ನು ನೆರವೇರಿಸಲು ಚೈತನ್ಯವೆಂಬ ಅಗ್ನಿಕುಂಡದಿಂದ ಆವಿರ್ಭವಿಸಿದವಳು.',
          },
        },
        {
          n: 2,
          text: 'उद्यद्भानुसहस्राभा चतुर्बाहुसमन्विता ।\nरागस्वरूपपाशाढ्या क्रोधाकाराङ्कुशोज्ज्वला ॥',
          meaning: {
            en: 'She shines like a thousand rising suns and has four arms. She holds the noose, which is desire (rāga), and the bright goad, which is anger.',
            kn: 'ಉದಯಿಸುತ್ತಿರುವ ಸಾವಿರ ಸೂರ್ಯರ ಕಾಂತಿಯುಳ್ಳವಳು, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳವಳು. ರಾಗ (ಆಸೆ) ಸ್ವರೂಪವಾದ ಪಾಶವನ್ನೂ ಕ್ರೋಧರೂಪವಾದ ಹೊಳೆಯುವ ಅಂಕುಶವನ್ನೂ ಧರಿಸಿದವಳು.',
          },
        },
        {
          n: 3,
          text: 'मनोरूपेक्षुकोदण्डा पञ्चतन्मात्रसायका ।\nनिजारुणप्रभापूरमज्जद्ब्रह्माण्डमण्डला ॥',
          meaning: {
            en: 'Her sugarcane bow is the mind and her five arrows are the five subtle elements (tanmātras). The whole universe is immersed in the flood of her own rosy radiance.',
            kn: 'ಮನಸ್ಸೇ ಆಕೆಯ ಕಬ್ಬಿನ ಬಿಲ್ಲು, ಪಂಚತನ್ಮಾತ್ರೆಗಳೇ ಐದು ಬಾಣಗಳು. ಆಕೆಯ ಕೆಂಪು ಕಾಂತಿಯ ಪ್ರವಾಹದಲ್ಲಿ ಇಡೀ ಬ್ರಹ್ಮಾಂಡಮಂಡಲವೇ ಮುಳುಗಿದೆ.',
          },
        },
        {
          n: 4,
          text: 'चम्पकाशोकपुन्नागसौगन्धिकलसत्कचा ।\nकुरुविन्दमणिश्रेणीकनत्कोटीरमण्डिता ॥',
          meaning: {
            en: 'Her hair is adorned with campaka, aśoka, punnāga and saugandhika flowers, and her crown glitters with rows of kuruvinda rubies.',
            kn: 'ಸಂಪಿಗೆ, ಅಶೋಕ, ಪುನ್ನಾಗ, ಸೌಗಂಧಿಕ ಹೂವುಗಳಿಂದ ಶೋಭಿಸುವ ಕೇಶರಾಶಿಯುಳ್ಳವಳು; ಕುರುವಿಂದ ಮಣಿಗಳ ಸಾಲುಗಳಿಂದ ಹೊಳೆಯುವ ಕಿರೀಟದಿಂದ ಅಲಂಕೃತಳು.',
          },
        },
        {
          n: 5,
          text: 'अष्टमीचन्द्रविभ्राजदलिकस्थलशोभिता ।\nमुखचन्द्रकलङ्काभमृगनाभिविशेषका ॥',
          meaning: {
            en: 'Her forehead gleams like the half-moon of the eighth lunar day, and the musk mark on it looks like the dark spot on the moon of her face.',
            kn: 'ಅಷ್ಟಮಿಯ ಚಂದ್ರನಂತೆ ಹೊಳೆಯುವ ಹಣೆಯಿಂದ ಶೋಭಿಸುವವಳು; ಮುಖವೆಂಬ ಚಂದ್ರನಲ್ಲಿನ ಕಳಂಕದಂತೆ ಕಾಣುವ ಕಸ್ತೂರಿ ತಿಲಕವುಳ್ಳವಳು.',
          },
        },
        {
          n: 6,
          text: 'वदनस्मरमाङ्गल्यगृहतोरणचिल्लिका ।\nवक्त्रलक्ष्मीपरीवाहचलन्मीनाभलोचना ॥',
          meaning: {
            en: 'Her face is the auspicious house of Kāma, and her eyebrows are the festive arches at its door. Her eyes are like fish darting in the stream of her face\'s beauty.',
            kn: 'ಆಕೆಯ ಮುಖವು ಮನ್ಮಥನ ಮಂಗಳಮಂದಿರ; ಹುಬ್ಬುಗಳು ಅದರ ತೋರಣಗಳಂತೆ. ಮುಖಸೌಂದರ್ಯದ ಪ್ರವಾಹದಲ್ಲಿ ಚಲಿಸುವ ಮೀನುಗಳಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವಳು.',
          },
        },
        {
          n: 7,
          text: 'नवचम्पकपुष्पाभनासादण्डविराजिता ।\nताराकान्तितिरस्कारिनासाभरणभासुरा ॥',
          meaning: {
            en: 'Her nose shines like a fresh campaka bud, and her nose ornament outshines the light of the stars.',
            kn: 'ಹೊಸ ಸಂಪಿಗೆ ಮೊಗ್ಗಿನಂತಹ ಮೂಗಿನಿಂದ ಶೋಭಿಸುವವಳು; ನಕ್ಷತ್ರಗಳ ಕಾಂತಿಯನ್ನೂ ಮೀರಿಸುವ ಮೂಗುತಿಯಿಂದ ಹೊಳೆಯುವವಳು.',
          },
        },
        {
          n: 8,
          text: 'कदम्बमञ्जरीकॢप्तकर्णपूरमनोहरा ।\nताटङ्कयुगलीभूततपनोडुपमण्डला ॥',
          meaning: {
            en: 'She is lovely with ear ornaments made of kadamba blossoms, and the sun and the moon are her pair of earrings.',
            kn: 'ಕದಂಬದ ಹೂಗೊಂಚಲಿನಿಂದ ಮಾಡಿದ ಕಿವಿಯಾಭರಣದಿಂದ ಮನೋಹರಳು; ಸೂರ್ಯಚಂದ್ರರೇ ಆಕೆಯ ಎರಡು ಓಲೆಗಳು.',
          },
        },
        {
          n: 9,
          text: 'पद्मरागशिलादर्शपरिभाविकपोलभूः ।\nनवविद्रुमबिम्बश्रीन्यक्कारिरदनच्छदा ॥',
          meaning: {
            en: 'Her cheeks surpass mirrors of ruby, and her lips put to shame fresh coral and the red bimba fruit.',
            kn: 'ಪದ್ಮರಾಗ ಮಣಿಯ ಕನ್ನಡಿಯನ್ನೂ ಮೀರಿಸುವ ಕೆನ್ನೆಗಳುಳ್ಳವಳು; ಹೊಸ ಹವಳ ಮತ್ತು ತೊಂಡೆಹಣ್ಣಿನ ಕಾಂತಿಯನ್ನು ಸೋಲಿಸುವ ತುಟಿಗಳುಳ್ಳವಳು.',
          },
        },
        {
          n: 10,
          text: 'शुद्धविद्याङ्कुराकारद्विजपङ्क्तिद्वयोज्ज्वला ।\nकर्पूरवीटिकामोदसमाकर्षिदिगन्तरा ॥',
          meaning: {
            en: 'Her two rows of teeth shine like sprouts of pure knowledge (Śuddha-vidyā). The fragrance of her camphor-scented betel draws in all the quarters.',
            kn: 'ಶುದ್ಧವಿದ್ಯೆಯ ಮೊಳಕೆಗಳಂತೆ ಹೊಳೆಯುವ ಎರಡು ಸಾಲು ಹಲ್ಲುಗಳುಳ್ಳವಳು; ಕರ್ಪೂರ ಬೆರೆತ ತಾಂಬೂಲದ ಸುವಾಸನೆಯಿಂದ ಎಲ್ಲ ದಿಕ್ಕುಗಳನ್ನೂ ಆಕರ್ಷಿಸುವವಳು.',
          },
        },
        {
          n: 11,
          text: 'निजसल्लापमाधुर्यविनिर्भर्त्सितकच्छपी ।\nमन्दस्मितप्रभापूरमज्जत्कामेशमानसा ॥',
          meaning: {
            en: 'The sweetness of her speech surpasses the kacchapī, the vīṇā of Sarasvatī. The flood of her gentle smile overwhelms the mind of Kāmeśvara.',
            kn: 'ಆಕೆಯ ಮಾತಿನ ಮಾಧುರ್ಯವು ಸರಸ್ವತಿಯ ಕಚ್ಛಪೀ ವೀಣೆಯನ್ನೂ ಸೋಲಿಸುತ್ತದೆ. ಆಕೆಯ ಮಂದಹಾಸದ ಕಾಂತಿಪ್ರವಾಹದಲ್ಲಿ ಕಾಮೇಶ್ವರನ ಮನಸ್ಸೇ ಮುಳುಗಿಹೋಗುತ್ತದೆ.',
          },
        },
        {
          n: 12,
          text: 'अनाकलितसादृश्यचिबुकश्रीविराजिता ।\nकामेशबद्धमाङ्गल्यसूत्रशोभितकन्धरा ॥',
          meaning: {
            en: 'Her chin has a beauty beyond comparison. Her neck is graced by the auspicious marriage thread (maṅgalasūtra) tied by Kāmeśvara.',
            kn: 'ಹೋಲಿಕೆಯೇ ಇಲ್ಲದ ಸೌಂದರ್ಯದ ಗಲ್ಲವುಳ್ಳವಳು; ಕಾಮೇಶ್ವರನು ಕಟ್ಟಿದ ಮಾಂಗಲ್ಯಸೂತ್ರದಿಂದ ಶೋಭಿಸುವ ಕಂಠವುಳ್ಳವಳು.',
          },
        },
        {
          n: 13,
          text: 'कनकाङ्गदकेयूरकमनीयभुजान्विता ।\nरत्नग्रैवेयचिन्ताकलोलमुक्ताफलान्विता ॥',
          meaning: {
            en: 'Her arms are beautiful with golden armlets and bracelets. She wears a jewelled necklace with a pendant and swaying pearls.',
            kn: 'ಚಿನ್ನದ ತೋಳುಬಂದಿ ಮತ್ತು ಕೇಯೂರಗಳಿಂದ ಸುಂದರವಾದ ಭುಜಗಳುಳ್ಳವಳು; ರತ್ನದ ಕಂಠಾಭರಣ, ಪದಕ ಮತ್ತು ತೂಗಾಡುವ ಮುತ್ತುಗಳಿಂದ ಕೂಡಿದವಳು.',
          },
        },
        {
          n: 14,
          text: 'कामेश्वरप्रेमरत्नमणिप्रतिपणस्तनी ।\nनाभ्यालवालरोमालिलताफलकुचद्वयी ॥',
          meaning: {
            en: 'Her breasts are the price she offers in return for the jewel of Kāmeśvara\'s love. They are like two fruits on the creeper of fine hair that rises from the basin of her navel.',
            kn: 'ಕಾಮೇಶ್ವರನ ಪ್ರೇಮವೆಂಬ ರತ್ನಕ್ಕೆ ಪ್ರತಿಯಾಗಿ ಕೊಡುವ ಬೆಲೆಯಂತಿರುವ ಸ್ತನಗಳುಳ್ಳವಳು; ನಾಭಿಯೆಂಬ ಪಾತಿಯಿಂದ ಮೇಲೇರುವ ರೋಮಾವಳಿಯೆಂಬ ಬಳ್ಳಿಯ ಎರಡು ಫಲಗಳಂತೆ ಆಕೆಯ ಕುಚಗಳು.',
          },
        },
        {
          n: 15,
          text: 'लक्ष्यरोमलताधारतासमुन्नेयमध्यमा ।\nस्तनभारदलन्मध्यपट्टबन्धवलित्रया ॥',
          meaning: {
            en: 'Her waist is so slender that it can only be inferred from the line of fine hair it supports. Under the weight of her bosom three folds form on it, like a band binding the waist.',
            kn: 'ಆಕೆಯ ನಡು ಎಷ್ಟು ಸೂಕ್ಷ್ಮವೆಂದರೆ, ಅದರ ಮೇಲಿನ ರೋಮಲತೆಗೆ ಆಧಾರವಾಗಿರುವುದರಿಂದಲೇ ಅದನ್ನು ಊಹಿಸಬೇಕು. ಸ್ತನಭಾರದಿಂದ ಬಾಗುವ ನಡುವಿಗೆ ಕಟ್ಟಿದ ಪಟ್ಟಿಯಂತೆ ಮೂರು ವಳಿಗಳು ಕಾಣುತ್ತವೆ.',
          },
        },
        {
          n: 16,
          text: 'अरुणारुणकौसुम्भवस्त्रभास्वत्कटीतटी ।\nरत्नकिङ्किणिकारम्यरशनादामभूषिता ॥',
          meaning: {
            en: 'Her hips shine in a garment of deep red safflower hue, and she wears a girdle made lovely by tiny jewelled bells.',
            kn: 'ಕುಸುಂಬೆ ಹೂವಿನ ಬಣ್ಣದ ಗಾಢ ಕೆಂಪು ವಸ್ತ್ರದಿಂದ ಹೊಳೆಯುವ ಸೊಂಟವುಳ್ಳವಳು; ರತ್ನದ ಕಿರುಗೆಜ್ಜೆಗಳಿಂದ ಮನೋಹರವಾದ ಒಡ್ಯಾಣದಿಂದ ಅಲಂಕೃತಳು.',
          },
        },
        {
          n: 17,
          text: 'कामेशज्ञातसौभाग्यमार्दवोरुद्वयान्विता ।\nमाणिक्यमुकुटाकारजानुद्वयविराजिता ॥',
          meaning: {
            en: 'The beauty and softness of her thighs are known to Kāmeśa alone. Her knees are like crowns made of rubies.',
            kn: 'ಆಕೆಯ ತೊಡೆಗಳ ಸೌಂದರ್ಯ ಮತ್ತು ಕೋಮಲತೆಯನ್ನು ಕಾಮೇಶ್ವರನೊಬ್ಬನೇ ಬಲ್ಲನು; ಮಾಣಿಕ್ಯದ ಕಿರೀಟದಂತಿರುವ ಮಂಡಿಗಳಿಂದ ಶೋಭಿಸುವವಳು.',
          },
        },
        {
          n: 18,
          text: 'इन्द्रगोपपरिक्षिप्तस्मरतूणाभजङ्घिका ।\nगूढगुल्फा कूर्मपृष्ठजयिष्णुप्रपदान्विता ॥',
          meaning: {
            en: 'Her shanks are like Kāma\'s quivers set about with red indragopa insects. Her ankles are rounded and hidden, and the arch of her feet surpasses the curve of a tortoise\'s back.',
            kn: 'ಕೆಂಪು ಇಂದ್ರಗೋಪ ಹುಳುಗಳಿಂದ ಸುತ್ತುವರಿದ ಮನ್ಮಥನ ಬತ್ತಳಿಕೆಯಂತಿರುವ ಕಣಕಾಲುಗಳುಳ್ಳವಳು; ಮಾಂಸಲವಾಗಿ ಮರೆಯಾದ ಹರಡುಗಳುಳ್ಳವಳು; ಆಮೆಯ ಬೆನ್ನನ್ನೂ ಮೀರಿಸುವ ಉಬ್ಬಿದ ಪಾದಗಳುಳ್ಳವಳು.',
          },
        },
        {
          n: 19,
          text: 'नखदीधितिसञ्छन्ननमज्जनतमोगुणा ।\nपदद्वयप्रभाजालपराकृतसरोरुहा ॥',
          meaning: {
            en: 'The radiance of her toenails dispels the darkness (tamas) of those who bow to her. The splendour of her two feet defeats the lotus.',
            kn: 'ಆಕೆಯ ಕಾಲುಗುರುಗಳ ಕಾಂತಿಯು ನಮಸ್ಕರಿಸುವವರ ತಮೋಗುಣವನ್ನು ಅಳಿಸುತ್ತದೆ; ಆಕೆಯ ಪಾದಗಳ ಕಾಂತಿಜಾಲವು ಕಮಲಗಳನ್ನೂ ಸೋಲಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 20,
          text: 'शिञ्जानमणिमञ्जीरमण्डितश्रीपदाम्बुजा ।\nमरालीमन्दगमना महालावण्यशेवधिः ॥',
          meaning: {
            en: 'Her lotus feet are adorned with tinkling jewelled anklets. She walks slowly and gracefully like a female swan, and she is a treasure-house of great loveliness.',
            kn: 'ಘಲ್ಲೆನ್ನುವ ರತ್ನದ ಗೆಜ್ಜೆಗಳಿಂದ ಅಲಂಕೃತವಾದ ಪಾದಕಮಲಗಳುಳ್ಳವಳು; ಹೆಣ್ಣು ಹಂಸದಂತೆ ಮಂದಗತಿಯಿಂದ ನಡೆಯುವವಳು; ಮಹಾಲಾವಣ್ಯದ ನಿಧಿ.',
          },
        },
        {
          n: 21,
          text: 'सर्वारुणाऽनवद्याङ्गी सर्वाभरणभूषिता ।\nशिवकामेश्वराङ्कस्था शिवा स्वाधीनवल्लभा ॥',
          meaning: {
            en: 'She is red all over, flawless in every limb and decked with every ornament. She sits on the lap of Śiva-Kāmeśvara; she is Śivā, the auspicious one, and her beloved is under her own sway.',
            kn: 'ಸಂಪೂರ್ಣ ಅರುಣವರ್ಣದವಳು, ದೋಷರಹಿತವಾದ ಅಂಗಗಳುಳ್ಳವಳು, ಎಲ್ಲ ಆಭರಣಗಳಿಂದ ಭೂಷಿತಳು. ಶಿವಕಾಮೇಶ್ವರನ ತೊಡೆಯ ಮೇಲೆ ಕುಳಿತಿರುವವಳು; ಮಂಗಳಮಯಿಯಾದ ಶಿವೆ; ತನ್ನ ಪ್ರಿಯನನ್ನು ತನ್ನ ವಶದಲ್ಲಿರಿಸಿಕೊಂಡವಳು.',
          },
        },
        {
          n: 22,
          text: 'सुमेरुमध्यशृङ्गस्था श्रीमन्नगरनायिका ।\nचिन्तामणिगृहान्तस्था पञ्चब्रह्मासनस्थिता ॥',
          meaning: {
            en: 'She dwells on the middle peak of Mount Meru and is the queen of Śrīnagara, her sacred city. She lives within the palace of wish-fulfilling cintāmaṇi gems and sits on the seat formed by the five Brahmas.',
            kn: 'ಸುಮೇರು ಪರ್ವತದ ಮಧ್ಯಶಿಖರದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಶ್ರೀನಗರದ ಒಡತಿ; ಚಿಂತಾಮಣಿಗಳಿಂದಾದ ಅರಮನೆಯೊಳಗೆ ಇರುವವಳು, ಪಂಚಬ್ರಹ್ಮರಿಂದಾದ ಆಸನದಲ್ಲಿ ಕುಳಿತವಳು.',
          },
        },
        {
          n: 23,
          text: 'महापद्माटवीसंस्था कदम्बवनवासिनी ।\nसुधासागरमध्यस्था कामाक्षी कामदायिनी ॥',
          meaning: {
            en: 'She abides in the great lotus forest and lives in the kadamba grove, in the midst of the ocean of nectar. She is Kāmākṣī, of lovely eyes, who grants all desires.',
            kn: 'ಮಹಾಪದ್ಮವನದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಕದಂಬವನವಾಸಿನಿ, ಅಮೃತಸಾಗರದ ಮಧ್ಯದಲ್ಲಿ ಇರುವವಳು. ಮನೋಹರ ಕಣ್ಣುಗಳ ಕಾಮಾಕ್ಷಿ, ಬಯಕೆಗಳನ್ನು ಈಡೇರಿಸುವವಳು.',
          },
        },
        {
          n: 24,
          text: 'देवर्षिगणसङ्घातस्तूयमानात्मवैभवा ।\nभण्डासुरवधोद्युक्तशक्तिसेनासमन्विता ॥',
          meaning: {
            en: 'Hosts of gods and sages sing the glory of her being. She is accompanied by an army of Śaktis ready to slay the demon Bhaṇḍa.',
            kn: 'ದೇವತೆಗಳು ಮತ್ತು ಋಷಿಗಣಗಳು ಆಕೆಯ ಮಹಿಮೆಯನ್ನು ಸ್ತುತಿಸುತ್ತಾರೆ. ಭಂಡಾಸುರನ ವಧೆಗೆ ಸಿದ್ಧವಾದ ಶಕ್ತಿಸೇನೆಯಿಂದ ಕೂಡಿದವಳು.',
          },
        },
        {
          n: 25,
          text: 'सम्पत्करीसमारूढसिन्धुरव्रजसेविता ।\nअश्वारूढाधिष्ठिताश्वकोटिकोटिभिरावृता ॥',
          meaning: {
            en: 'She is attended by herds of elephants led by the goddess Sampatkarī, and surrounded by millions of horses under the goddess Aśvārūḍhā.',
            kn: 'ಸಂಪತ್ಕರೀ ದೇವಿಯು ಏರಿದ ಆನೆಗಳ ಹಿಂಡು ಆಕೆಯನ್ನು ಸೇವಿಸುತ್ತದೆ; ಅಶ್ವಾರೂಢಾ ದೇವಿಯ ಅಧೀನದಲ್ಲಿರುವ ಕೋಟಿಕೋಟಿ ಕುದುರೆಗಳು ಆಕೆಯನ್ನು ಸುತ್ತುವರಿದಿವೆ.',
          },
        },
        {
          n: 26,
          text: 'चक्रराजरथारूढसर्वायुधपरिष्कृता ।\nगेयचक्ररथारूढमन्त्रिणीपरिसेविता ॥',
          meaning: {
            en: 'She rides the Cakrarāja chariot, equipped with every weapon, and is attended by Mantriṇī (Śyāmalā), who rides the Geyacakra chariot.',
            kn: 'ಚಕ್ರರಾಜ ರಥವನ್ನೇರಿ ಸರ್ವಾಯುಧಗಳಿಂದ ಸಜ್ಜಾದವಳು; ಗೇಯಚಕ್ರ ರಥವನ್ನೇರಿದ ಮಂತ್ರಿಣೀ (ಶ್ಯಾಮಲಾ) ದೇವಿಯು ಆಕೆಯನ್ನು ಸೇವಿಸುತ್ತಾಳೆ.',
          },
        },
        {
          n: 27,
          text: 'किरिचक्ररथारूढदण्डनाथापुरस्कृता ।\nज्वालामालिनिकाक्षिप्तवह्निप्राकारमध्यगा ॥',
          meaning: {
            en: 'Daṇḍanāthā (Vārāhī), riding the Kiricakra chariot, goes before her. She stands within the rampart of fire raised by the goddess Jvālāmālinī.',
            kn: 'ಕಿರಿಚಕ್ರ ರಥವನ್ನೇರಿದ ದಂಡನಾಥಾ (ವಾರಾಹೀ) ದೇವಿಯು ಆಕೆಯ ಮುಂದೆ ಸಾಗುತ್ತಾಳೆ. ಜ್ವಾಲಾಮಾಲಿನೀ ದೇವಿಯು ನಿರ್ಮಿಸಿದ ಅಗ್ನಿಪ್ರಾಕಾರದ ಮಧ್ಯದಲ್ಲಿರುವವಳು.',
          },
        },
        {
          n: 28,
          text: 'भण्डसैन्यवधोद्युक्तशक्तिविक्रमहर्षिता ।\nनित्यापराक्रमाटोपनिरीक्षणसमुत्सुका ॥',
          meaning: {
            en: 'She rejoices at the valour of the Śaktis bent on destroying Bhaṇḍa\'s army, and is eager to watch the bold prowess of the Nityā goddesses.',
            kn: 'ಭಂಡನ ಸೈನ್ಯವನ್ನು ನಾಶಮಾಡಲು ತೊಡಗಿದ ಶಕ್ತಿಗಳ ಪರಾಕ್ರಮದಿಂದ ಹರ್ಷಗೊಂಡವಳು; ನಿತ್ಯಾದೇವಿಯರ ಪರಾಕ್ರಮದ ಆರ್ಭಟವನ್ನು ನೋಡಲು ಉತ್ಸುಕಳಾದವಳು.',
          },
        },
        {
          n: 29,
          text: 'भण्डपुत्रवधोद्युक्तबालाविक्रमनन्दिता ।\nमन्त्रिण्यम्बाविरचितविषङ्गवधतोषिता ॥',
          meaning: {
            en: 'She delights in the valour of the child-goddess Bālā, who set out to slay Bhaṇḍa\'s sons, and is pleased when Mantriṇī slays the demon Viṣaṅga.',
            kn: 'ಭಂಡನ ಪುತ್ರರನ್ನು ಕೊಲ್ಲಲು ಹೊರಟ ಬಾಲಾದೇವಿಯ ಪರಾಕ್ರಮದಿಂದ ಆನಂದಿಸಿದವಳು; ಮಂತ್ರಿಣೀ ದೇವಿಯು ವಿಷಂಗಾಸುರನನ್ನು ವಧಿಸಿದ್ದರಿಂದ ಸಂತುಷ್ಟಳಾದವಳು.',
          },
        },
        {
          n: 30,
          text: 'विशुक्रप्राणहरणवाराहीवीर्यनन्दिता ।\nकामेश्वरमुखालोककल्पितश्रीगणेश्वरा ॥',
          meaning: {
            en: 'She rejoices in the might of Vārāhī, who took the life of Viśukra. By a glance at Kāmeśvara\'s face she brought forth Śrī Gaṇeśa.',
            kn: 'ವಿಶುಕ್ರನ ಪ್ರಾಣವನ್ನು ಹರಣ ಮಾಡಿದ ವಾರಾಹೀ ದೇವಿಯ ಶೌರ್ಯದಿಂದ ಆನಂದಿಸಿದವಳು; ಕಾಮೇಶ್ವರನ ಮುಖವನ್ನು ನೋಡಿದ ಮಾತ್ರದಿಂದಲೇ ಶ್ರೀಗಣೇಶನನ್ನು ಸೃಷ್ಟಿಸಿದವಳು.',
          },
        },
        {
          n: 31,
          text: 'महागणेशनिर्भिन्नविघ्नयन्त्रप्रहर्षिता ।\nभण्डासुरेन्द्रनिर्मुक्तशस्त्रप्रत्यस्त्रवर्षिणी ॥',
          meaning: {
            en: 'She is delighted when Mahāgaṇeśa shatters the demons\' obstacle-device (vighna-yantra). She rains counter-weapons against every weapon hurled by Bhaṇḍāsura.',
            kn: 'ಮಹಾಗಣಪತಿಯು ಅಸುರರ ವಿಘ್ನಯಂತ್ರವನ್ನು ಭೇದಿಸಿದಾಗ ಹರ್ಷಗೊಂಡವಳು; ಭಂಡಾಸುರನು ಪ್ರಯೋಗಿಸಿದ ಪ್ರತಿಯೊಂದು ಅಸ್ತ್ರಕ್ಕೂ ಪ್ರತ್ಯಸ್ತ್ರಗಳ ಮಳೆಗರೆದವಳು.',
          },
        },
        {
          n: 32,
          text: 'कराङ्गुलिनखोत्पन्ननारायणदशाकृतिः ।\nमहापाशुपतास्त्राग्निनिर्दग्धासुरसैनिका ॥',
          meaning: {
            en: 'From her fingernails she brought forth the ten incarnations of Nārāyaṇa. With the fire of the Mahāpāśupata weapon she burnt up the demon armies.',
            kn: 'ತನ್ನ ಕೈಬೆರಳುಗಳ ಉಗುರುಗಳಿಂದ ನಾರಾಯಣನ ದಶಾವತಾರಗಳನ್ನು ಹುಟ್ಟಿಸಿದವಳು; ಮಹಾಪಾಶುಪತಾಸ್ತ್ರದ ಅಗ್ನಿಯಿಂದ ಅಸುರಸೈನ್ಯವನ್ನು ಸುಟ್ಟವಳು.',
          },
        },
        {
          n: 33,
          text: 'कामेश्वरास्त्रनिर्दग्धसभण्डासुरशून्यका ।\nब्रह्मोपेन्द्रमहेन्द्रादिदेवसंस्तुतवैभवा ॥',
          meaning: {
            en: 'With the Kāmeśvara weapon she burnt Bhaṇḍāsura together with his city Śūnyaka. Brahmā, Viṣṇu, Indra and the other gods praise her glory.',
            kn: 'ಕಾಮೇಶ್ವರಾಸ್ತ್ರದಿಂದ ಭಂಡಾಸುರನನ್ನೂ ಅವನ ಶೂನ್ಯಕ ನಗರವನ್ನೂ ಸುಟ್ಟುಹಾಕಿದವಳು; ಬ್ರಹ್ಮ, ಉಪೇಂದ್ರ, ಮಹೇಂದ್ರ ಮೊದಲಾದ ದೇವತೆಗಳಿಂದ ಸ್ತುತಿಸಲ್ಪಟ್ಟ ಮಹಿಮೆಯುಳ್ಳವಳು.',
          },
        },
        {
          n: 34,
          text: 'हरनेत्राग्निसन्दग्धकामसञ्जीवनौषधिः ।\nश्रीमद्वाग्भवकूटैकस्वरूपमुखपङ्कजा ॥',
          meaning: {
            en: 'She is the life-giving herb that revived Kāma after he was burnt by the fire of Śiva\'s eye. Her lotus face is the Vāgbhava-kūṭa, the first section of her fifteen-syllable mantra.',
            kn: 'ಶಿವನ ಹಣೆಗಣ್ಣಿನ ಬೆಂಕಿಯಿಂದ ಸುಟ್ಟುಹೋದ ಮನ್ಮಥನಿಗೆ ಮತ್ತೆ ಜೀವ ನೀಡಿದ ಸಂಜೀವಿನಿ ಔಷಧಿ ಆಕೆ. ಪಂಚದಶೀ ಮಂತ್ರದ ಮೊದಲ ಭಾಗವಾದ ವಾಗ್ಭವಕೂಟವೇ ಆಕೆಯ ಮುಖಕಮಲ.',
          },
        },
        {
          n: 35,
          text: 'कण्ठाधःकटिपर्यन्तमध्यकूटस्वरूपिणी ।\nशक्तिकूटैकतापन्नकट्यधोभागधारिणी ॥',
          meaning: {
            en: 'Her body from the neck to the waist is the middle kūṭa (Kāmarāja-kūṭa), and the part below the waist is one with the Śakti-kūṭa.',
            kn: 'ಕಂಠದಿಂದ ಸೊಂಟದವರೆಗಿನ ಆಕೆಯ ದೇಹಭಾಗವು ಮಧ್ಯಕೂಟ (ಕಾಮರಾಜಕೂಟ); ಸೊಂಟದ ಕೆಳಭಾಗವು ಶಕ್ತಿಕೂಟದೊಂದಿಗೆ ಏಕವಾಗಿದೆ.',
          },
        },
        {
          n: 36,
          text: 'मूलमन्त्रात्मिका मूलकूटत्रयकलेबरा ।\nकुलामृतैकरसिका कुलसङ्केतपालिनी ॥',
          meaning: {
            en: 'She is the root mantra itself, and its three kūṭas are her body. She delights only in the nectar of Kula, and guards the secret conventions of the Kula path.',
            kn: 'ಆಕೆ ಮೂಲಮಂತ್ರಸ್ವರೂಪಿಣಿ; ಮೂಲಮಂತ್ರದ ಮೂರು ಕೂಟಗಳೇ ಆಕೆಯ ಶರೀರ. ಕುಲಾಮೃತವನ್ನೇ ಸವಿಯುವವಳು, ಕುಲಮಾರ್ಗದ ರಹಸ್ಯ ಸಂಕೇತಗಳನ್ನು ಕಾಪಾಡುವವಳು.',
          },
        },
        {
          n: 37,
          text: 'कुलाङ्गना कुलान्तस्था कौलिनी कुलयोगिनी ।\nअकुला समयान्तस्था समयाचारतत्परा ॥',
          meaning: {
            en: 'She is the noble lady of the Kula and dwells within it; she is Kaulinī, the yoginī of the Kula. Yet she is beyond Kula (Akulā), dwells within the Samaya path and is devoted to the Samaya mode of worship.',
            kn: 'ಕುಲಾಂಗನೆ, ಕುಲದೊಳಗೆ ನೆಲೆಸಿದವಳು, ಕೌಲಿನೀ, ಕುಲಯೋಗಿನೀ. ಕುಲವನ್ನು ಮೀರಿದ ಅಕುಲಾ, ಸಮಯಮಾರ್ಗದೊಳಗಿರುವವಳು, ಸಮಯಾಚಾರದಲ್ಲಿ ನಿರತಳು.',
          },
        },
        {
          n: 38,
          text: 'मूलाधारैकनिलया ब्रह्मग्रन्थिविभेदिनी ।\nमणिपूरान्तरुदिता विष्णुग्रन्थिविभेदिनी ॥',
          meaning: {
            en: 'The Mūlādhāra is her one abode, and she pierces the knot of Brahmā. Rising in the Maṇipūra, she pierces the knot of Viṣṇu.',
            kn: 'ಮೂಲಾಧಾರವೇ ಆಕೆಯ ಮುಖ್ಯ ನೆಲೆ; ಬ್ರಹ್ಮಗ್ರಂಥಿಯನ್ನು ಭೇದಿಸುವವಳು. ಮಣಿಪೂರ ಚಕ್ರದೊಳಗೆ ಉದಯಿಸಿ ವಿಷ್ಣುಗ್ರಂಥಿಯನ್ನು ಭೇದಿಸುವವಳು.',
          },
        },
        {
          n: 39,
          text: 'आज्ञाचक्रान्तरालस्था रुद्रग्रन्थिविभेदिनी ।\nसहस्राराम्बुजारूढा सुधासाराभिवर्षिणी ॥',
          meaning: {
            en: 'Abiding within the Ājñā-cakra, she pierces the knot of Rudra. Ascending to the thousand-petalled lotus (sahasrāra), she pours down streams of nectar.',
            kn: 'ಆಜ್ಞಾಚಕ್ರದೊಳಗೆ ನೆಲೆಸಿ ರುದ್ರಗ್ರಂಥಿಯನ್ನು ಭೇದಿಸುವವಳು; ಸಹಸ್ರಾರ ಕಮಲವನ್ನೇರಿ ಅಮೃತಧಾರೆಯನ್ನು ಸುರಿಸುವವಳು.',
          },
        },
        {
          n: 40,
          text: 'तडिल्लतासमरुचिः षट्चक्रोपरिसंस्थिता ।\nमहासक्तिः कुण्डलिनी बिसतन्तुतनीयसी ॥',
          meaning: {
            en: 'She shines like a streak of lightning and abides above the six cakras. She is Mahāsakti, intent on union with Śiva; she is Kuṇḍalinī, finer than the fibre of a lotus stalk.',
            kn: 'ಮಿಂಚಿನ ಬಳ್ಳಿಯಂತೆ ಹೊಳೆಯುವವಳು, ಷಟ್ಚಕ್ರಗಳ ಮೇಲೆ ನೆಲೆಸಿದವಳು. ಶಿವನೊಡನೆ ಸೇರುವುದರಲ್ಲಿ ಮಹಾ ಆಸಕ್ತಿಯುಳ್ಳ ಮಹಾಸಕ್ತಿ, ಕುಂಡಲಿನೀ, ತಾವರೆಯ ದಂಟಿನ ನಾರಿಗಿಂತಲೂ ಸೂಕ್ಷ್ಮಳು.',
          },
        },
        {
          n: 41,
          text: 'भवानी भावनागम्या भवारण्यकुठारिका ।\nभद्रप्रिया भद्रमूर्तिर्भक्तसौभाग्यदायिनी ॥',
          meaning: {
            en: 'She is Bhavānī, consort of Bhava, reached through inner contemplation, the axe that fells the forest of saṃsāra. She loves what is auspicious, is auspiciousness embodied, and gives good fortune to her devotees.',
            kn: 'ಭವನ ಪತ್ನಿಯಾದ ಭವಾನಿ, ಧ್ಯಾನಭಾವನೆಯಿಂದ ತಿಳಿಯಲ್ಪಡುವವಳು, ಸಂಸಾರವೆಂಬ ಕಾಡನ್ನು ಕಡಿಯುವ ಕೊಡಲಿ. ಮಂಗಳಪ್ರಿಯೆ, ಮಂಗಳಮೂರ್ತಿ, ಭಕ್ತರಿಗೆ ಸೌಭಾಗ್ಯವನ್ನು ಕೊಡುವವಳು.',
          },
        },
        {
          n: 42,
          text: 'भक्तिप्रिया भक्तिगम्या भक्तिवश्या भयापहा ।\nशाम्भवी शारदाराध्या शर्वाणी शर्मदायिनी ॥',
          meaning: {
            en: 'She loves devotion, is reached by devotion and won over by devotion, and removes fear. She is Śāmbhavī, consort of Śambhu, worshipped by Śāradā; she is Śarvāṇī, the giver of happiness.',
            kn: 'ಭಕ್ತಿಪ್ರಿಯೆ, ಭಕ್ತಿಯಿಂದ ತಿಳಿಯಲ್ಪಡುವವಳು, ಭಕ್ತಿಗೆ ವಶಳಾಗುವವಳು, ಭಯವನ್ನು ನೀಗುವವಳು. ಶಂಭುವಿನ ಪತ್ನಿ ಶಾಂಭವಿ, ಶಾರದೆಯಿಂದ ಆರಾಧಿಸಲ್ಪಡುವವಳು, ಶರ್ವಾಣಿ, ಸುಖವನ್ನು ಕೊಡುವವಳು.',
          },
        },
        {
          n: 43,
          text: 'शाङ्करी श्रीकरी साध्वी शरच्चन्द्रनिभानना ।\nशातोदरी शान्तिमती निराधारा निरञ्जना ॥',
          meaning: {
            en: 'She is Śāṅkarī, the bringer of prosperity, the virtuous one, with a face like the autumn moon. She is slender-waisted and full of peace; she rests on nothing and no stain touches her.',
            kn: 'ಶಾಂಕರೀ, ಐಶ್ವರ್ಯವನ್ನು ಕೊಡುವ ಶ್ರೀಕರೀ, ಸಾಧ್ವಿ, ಶರತ್ಕಾಲದ ಚಂದ್ರನಂತಹ ಮುಖವುಳ್ಳವಳು. ಕೃಶವಾದ ಉದರವುಳ್ಳವಳು, ಶಾಂತಿಮಯಿ, ಯಾವ ಆಧಾರವೂ ಬೇಕಿಲ್ಲದವಳು, ಕಳಂಕರಹಿತಳಾದ ನಿರಂಜನೆ.',
          },
        },
        {
          n: 44,
          text: 'निर्लेपा निर्मला नित्या निराकारा निराकुला ।\nनिर्गुणा निष्कला शान्ता निष्कामा निरुपप्लवा ॥',
          meaning: {
            en: 'She is untainted, pure, eternal, formless and untroubled; beyond the guṇas, without parts, peaceful, free of desire and free of every calamity.',
            kn: 'ಯಾವ ಲೇಪವೂ ಇಲ್ಲದವಳು, ನಿರ್ಮಲೆ, ನಿತ್ಯೆ, ನಿರಾಕಾರೆ, ಕಳವಳವಿಲ್ಲದವಳು; ಗುಣಗಳನ್ನು ಮೀರಿದವಳು, ಅಂಶಗಳಿಲ್ಲದವಳು, ಶಾಂತೆ, ಆಸೆಯಿಲ್ಲದವಳು, ಯಾವ ಉಪದ್ರವವೂ ಇಲ್ಲದವಳು.',
          },
        },
        {
          n: 45,
          text: 'नित्यमुक्ता निर्विकारा निष्प्रपञ्चा निराश्रया ।\nनित्यशुद्धा नित्यबुद्धा निरवद्या निरन्तरा ॥',
          meaning: {
            en: 'She is ever free, changeless, beyond the world of appearances and dependent on none; ever pure, ever awake, blameless and without any break.',
            kn: 'ನಿತ್ಯಮುಕ್ತೆ, ವಿಕಾರವಿಲ್ಲದವಳು, ಪ್ರಪಂಚವನ್ನು ಮೀರಿದವಳು, ಯಾರನ್ನೂ ಆಶ್ರಯಿಸದವಳು; ನಿತ್ಯಶುದ್ಧೆ, ಸದಾ ಜ್ಞಾನಸ್ವರೂಪಿಣಿಯಾದ ನಿತ್ಯಬುದ್ಧೆ, ದೋಷರಹಿತೆ, ಎಡೆಬಿಡದೆ ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿರುವವಳು.',
          },
        },
        {
          n: 46,
          text: 'निष्कारणा निष्कलङ्का निरुपाधिर्निरीश्वरा ।\nनीरागा रागमथनी निर्मदा मदनाशिनी ॥',
          meaning: {
            en: 'She has no cause, no blemish, no limiting adjunct and no lord above her. Free of passion, she churns passion away; free of pride, she destroys pride.',
            kn: 'ಕಾರಣವಿಲ್ಲದವಳು, ಕಳಂಕವಿಲ್ಲದವಳು, ಉಪಾಧಿಯಿಲ್ಲದವಳು, ತನಗಿಂತ ಮೇಲಿನ ಒಡೆಯನಿಲ್ಲದವಳು. ರಾಗರಹಿತೆ, ರಾಗವನ್ನು ಮಥಿಸುವವಳು; ಮದರಹಿತೆ, ಮದವನ್ನು ನಾಶಮಾಡುವವಳು.',
          },
        },
        {
          n: 47,
          text: 'निश्चिन्ता निरहङ्कारा निर्मोहा मोहनाशिनी ।\nनिर्ममा ममताहन्त्री निष्पापा पापनाशिनी ॥',
          meaning: {
            en: 'Free of worry, of ego and of delusion, she destroys delusion. Free of the sense of mine, she ends possessiveness; sinless, she destroys sin.',
            kn: 'ಚಿಂತೆಯಿಲ್ಲದವಳು, ಅಹಂಕಾರವಿಲ್ಲದವಳು, ಮೋಹವಿಲ್ಲದವಳು, ಮೋಹವನ್ನು ನಾಶಮಾಡುವವಳು. ನನ್ನದೆಂಬ ಭಾವವಿಲ್ಲದವಳು, ಮಮತೆಯನ್ನು ಕೊನೆಗಾಣಿಸುವವಳು; ಪಾಪರಹಿತೆ, ಪಾಪನಾಶಿನಿ.',
          },
        },
        {
          n: 48,
          text: 'निष्क्रोधा क्रोधशमनी निर्लोभा लोभनाशिनी ।\nनिःसंशया संशयघ्नी निर्भवा भवनाशिनी ॥',
          meaning: {
            en: 'Free of anger, she calms anger; free of greed, she destroys greed. Free of doubt, she dispels doubt; free of birth, she ends the round of births.',
            kn: 'ಕೋಪವಿಲ್ಲದವಳು, ಕೋಪವನ್ನು ಶಮನಗೊಳಿಸುವವಳು; ಲೋಭವಿಲ್ಲದವಳು, ಲೋಭವನ್ನು ನಾಶಮಾಡುವವಳು. ಸಂಶಯವಿಲ್ಲದವಳು, ಸಂಶಯವನ್ನು ನೀಗುವವಳು; ಜನ್ಮವಿಲ್ಲದವಳು, ಸಂಸಾರಬಂಧನವನ್ನು ನಾಶಮಾಡುವವಳು.',
          },
        },
        {
          n: 49,
          text: 'निर्विकल्पा निराबाधा निर्भेदा भेदनाशिनी ।\nनिर्नाशा मृत्युमथनी निष्क्रिया निष्परिग्रहा ॥',
          meaning: {
            en: 'She is beyond all mental constructs, unobstructed and without difference, and she destroys the sense of difference. Imperishable, she crushes death; she is beyond action and owns nothing.',
            kn: 'ವಿಕಲ್ಪಗಳಿಲ್ಲದವಳು, ಯಾವ ಅಡ್ಡಿಯೂ ಇಲ್ಲದವಳು, ಭೇದವಿಲ್ಲದವಳು, ಭೇದಬುದ್ಧಿಯನ್ನು ನಾಶಮಾಡುವವಳು. ನಾಶವಿಲ್ಲದವಳು, ಮೃತ್ಯುವನ್ನು ಮಥಿಸುವವಳು; ಕ್ರಿಯೆಯಿಲ್ಲದವಳು, ಯಾವುದನ್ನೂ ಪರಿಗ್ರಹಿಸದವಳು.',
          },
        },
        {
          n: 50,
          text: 'निस्तुला नीलचिकुरा निरपाया निरत्यया ।\nदुर्लभा दुर्गमा दुर्गा दुःखहन्त्री सुखप्रदा ॥',
          meaning: {
            en: 'She is incomparable, with dark blue-black hair, beyond harm and beyond decay. She is hard to attain and hard to approach; she is Durgā, who ends sorrow and gives happiness.',
            kn: 'ಹೋಲಿಕೆಯಿಲ್ಲದವಳು, ನೀಲವಾದ ಕೇಶವುಳ್ಳವಳು, ಅಪಾಯವಿಲ್ಲದವಳು, ಯಾರೂ ಮೀರಲಾಗದವಳು. ದುರ್ಲಭೆ, ದುರ್ಗಮೆ, ದುರ್ಗೆ, ದುಃಖವನ್ನು ನಾಶಮಾಡಿ ಸುಖವನ್ನು ಕೊಡುವವಳು.',
          },
        },
        {
          n: 51,
          text: 'दुष्टदूरा दुराचारशमनी दोषवर्जिता ।\nसर्वज्ञा सान्द्रकरुणा समानाधिकवर्जिता ॥',
          meaning: {
            en: 'She is far from the wicked, puts an end to evil conduct and is free of every fault. She knows all, is dense with compassion, and has no equal or superior.',
            kn: 'ದುಷ್ಟರಿಗೆ ದೂರಳು, ದುರಾಚಾರವನ್ನು ಶಮನಗೊಳಿಸುವವಳು, ದೋಷರಹಿತೆ. ಸರ್ವಜ್ಞೆ, ಗಾಢವಾದ ಕರುಣೆಯುಳ್ಳವಳು, ತನಗೆ ಸಮರೂ ಮೇಲಿನವರೂ ಇಲ್ಲದವಳು.',
          },
        },
        {
          n: 52,
          text: 'सर्वशक्तिमयी सर्वमङ्गला सद्गतिप्रदा ।\nसर्वेश्वरी सर्वमयी सर्वमन्त्रस्वरूपिणी ॥',
          meaning: {
            en: 'She holds every power within her, is all-auspicious and grants the good destination. She is the ruler of all, pervades all, and is the form of every mantra.',
            kn: 'ಸರ್ವಶಕ್ತಿಮಯಿ, ಸರ್ವಮಂಗಳೆ, ಸದ್ಗತಿಯನ್ನು ಕೊಡುವವಳು. ಸರ್ವೇಶ್ವರಿ, ಸರ್ವಮಯಿ, ಎಲ್ಲ ಮಂತ್ರಗಳ ಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 53,
          text: 'सर्वयन्त्रात्मिका सर्वतन्त्ररूपा मनोन्मनी ।\nमाहेश्वरी महादेवी महालक्ष्मीर्मृडप्रिया ॥',
          meaning: {
            en: 'She is the soul of every yantra and the form of every tantra; she is Manonmanī, the state beyond the mind. She is Māheśvarī, the great goddess, Mahālakṣmī, the beloved of Mṛḍa (Śiva).',
            kn: 'ಎಲ್ಲ ಯಂತ್ರಗಳ ಆತ್ಮ, ಎಲ್ಲ ತಂತ್ರಗಳ ರೂಪ, ಮನಸ್ಸನ್ನು ಮೀರಿದ ಮನೋನ್ಮನೀ. ಮಾಹೇಶ್ವರೀ, ಮಹಾದೇವಿ, ಮಹಾಲಕ್ಷ್ಮಿ, ಮೃಡನ (ಶಿವನ) ಪ್ರಿಯೆ.',
          },
        },
        {
          n: 54,
          text: 'महारूपा महापूज्या महापातकनाशिनी ।\nमहामाया महासत्त्वा महाशक्तिर्महारतिः ॥',
          meaning: {
            en: 'Her form is vast, she is greatly worshipped, and she destroys even the gravest sins. She is the great Māyā, of great sattva, the great Śakti and the great delight.',
            kn: 'ಮಹಾರೂಪೆ, ಮಹಾಪೂಜ್ಯೆ, ಮಹಾಪಾತಕಗಳನ್ನೂ ನಾಶಮಾಡುವವಳು. ಮಹಾಮಾಯೆ, ಮಹಾಸತ್ತ್ವೆ, ಮಹಾಶಕ್ತಿ, ಪರಮಾನಂದರೂಪಳಾದ ಮಹಾರತಿ.',
          },
        },
        {
          n: 55,
          text: 'महाभोगा महैश्वर्या महावीर्या महाबला ।\nमहाबुद्धिर्महासिद्धिर्महायोगेश्वरेश्वरी ॥',
          meaning: {
            en: 'Great are her enjoyments, her sovereignty, her valour and her strength; great her wisdom and her attainment. She rules even the great lords of yoga.',
            kn: 'ಮಹಾಭೋಗೆ, ಮಹೈಶ್ವರ್ಯೆ, ಮಹಾವೀರ್ಯೆ, ಮಹಾಬಲೆ, ಮಹಾಬುದ್ಧಿ, ಮಹಾಸಿದ್ಧಿ; ಮಹಾಯೋಗೇಶ್ವರರಿಗೂ ಒಡತಿ.',
          },
        },
        {
          n: 56,
          text: 'महातन्त्रा महामन्त्रा महायन्त्रा महासना ।\nमहायागक्रमाराध्या महाभैरवपूजिता ॥',
          meaning: {
            en: 'She is the great tantra, the great mantra and the great yantra, and has the great seat. She is worshipped through the great sacrificial rite in its due order, and adored by Mahābhairava.',
            kn: 'ಮಹಾತಂತ್ರೆ, ಮಹಾಮಂತ್ರೆ, ಮಹಾಯಂತ್ರೆ, ಮಹಾಸನೆ. ಮಹಾಯಾಗದ ಕ್ರಮದಿಂದ ಆರಾಧಿಸಲ್ಪಡುವವಳು, ಮಹಾಭೈರವನಿಂದ ಪೂಜಿಸಲ್ಪಡುವವಳು.',
          },
        },
        {
          n: 57,
          text: 'महेश्वरमहाकल्पमहाताण्डवसाक्षिणी ।\nमहाकामेशमहिषी महात्रिपुरसुन्दरी ॥',
          meaning: {
            en: 'She is the witness of the great cosmic dance of Maheśvara at the end of the great aeon. She is the queen of Mahākāmeśa, Mahātripurasundarī.',
            kn: 'ಮಹಾಕಲ್ಪದ ಅಂತ್ಯದಲ್ಲಿ ಮಹೇಶ್ವರನು ಮಾಡುವ ಮಹಾತಾಂಡವಕ್ಕೆ ಸಾಕ್ಷಿಯಾದವಳು. ಮಹಾಕಾಮೇಶ್ವರನ ಪಟ್ಟದರಸಿ, ಮಹಾತ್ರಿಪುರಸುಂದರಿ.',
          },
        },
        {
          n: 58,
          text: 'चतुःषष्ट्युपचाराढ्या चतुःषष्टिकलामयी ।\nमहाचतुःषष्टिकोटियोगिनीगणसेविता ॥',
          meaning: {
            en: 'She is honoured with the sixty-four services (upacāras) and embodies the sixty-four arts. She is attended by the hosts of the sixty-four crores of great yoginīs.',
            kn: 'ಅರವತ್ನಾಲ್ಕು ಉಪಚಾರಗಳಿಂದ ಪೂಜಿತಳು, ಅರವತ್ನಾಲ್ಕು ಕಲೆಗಳ ಸ್ವರೂಪಿಣಿ; ಅರವತ್ನಾಲ್ಕು ಕೋಟಿ ಮಹಾಯೋಗಿನಿಯರ ಗಣಗಳಿಂದ ಸೇವಿತಳು.',
          },
        },
        {
          n: 59,
          text: 'मनुविद्या चन्द्रविद्या चन्द्रमण्डलमध्यगा ।\nचारुरूपा चारुहासा चारुचन्द्रकलाधरा ॥',
          meaning: {
            en: 'She is the Vidyā worshipped by Manu and by Candra, and dwells in the centre of the lunar orb. Her form is lovely, her smile is lovely, and she wears the lovely crescent moon.',
            kn: 'ಮನುವು ಉಪಾಸಿಸಿದ ವಿದ್ಯೆ, ಚಂದ್ರನು ಉಪಾಸಿಸಿದ ವಿದ್ಯೆ, ಚಂದ್ರಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿರುವವಳು. ಸುಂದರ ರೂಪದವಳು, ಸುಂದರ ನಗೆಯವಳು, ಮನೋಹರವಾದ ಚಂದ್ರಕಲೆಯನ್ನು ಧರಿಸಿದವಳು.',
          },
        },
        {
          n: 60,
          text: 'चराचरजगन्नाथा चक्रराजनिकेतना ।\nपार्वती पद्मनयना पद्मरागसमप्रभा ॥',
          meaning: {
            en: 'She is the ruler of the moving and unmoving world and makes the Śrīcakra her home. She is Pārvatī, lotus-eyed, radiant like a ruby.',
            kn: 'ಚರಾಚರ ಜಗತ್ತಿನ ಒಡತಿ, ಶ್ರೀಚಕ್ರವೇ ಆಕೆಯ ಮನೆ. ಪಾರ್ವತಿ, ಕಮಲದಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವಳು, ಪದ್ಮರಾಗ ಮಣಿಯಂತೆ ಹೊಳೆಯುವವಳು.',
          },
        },
        {
          n: 61,
          text: 'पञ्चप्रेतासनासीना पञ्चब्रह्मस्वरूपिणी ।\nचिन्मयी परमानन्दा विज्ञानघनरूपिणी ॥',
          meaning: {
            en: 'She sits on the seat of the five pretas: Brahmā, Viṣṇu, Rudra, Īśvara and Sadāśiva, who are inert as corpses without her power. She is the form of the five Brahmas, pure consciousness, supreme bliss, and knowledge in its densest form.',
            kn: 'ಆಕೆಯ ಶಕ್ತಿಯಿಲ್ಲದೆ ಶವದಂತಿರುವ ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಈಶ್ವರ, ಸದಾಶಿವರೆಂಬ ಪಂಚಪ್ರೇತಗಳ ಆಸನದಲ್ಲಿ ಕುಳಿತವಳು. ಪಂಚಬ್ರಹ್ಮಸ್ವರೂಪಿಣಿ, ಚಿನ್ಮಯಿ, ಪರಮಾನಂದೆ, ಘನೀಭೂತ ವಿಜ್ಞಾನರೂಪಿಣಿ.',
          },
        },
        {
          n: 62,
          text: 'ध्यानध्यातृध्येयरूपा धर्माधर्मविवर्जिता ।\nविश्वरूपा जागरिणी स्वपन्ती तैजसात्मिका ॥',
          meaning: {
            en: 'She is meditation, the meditator and the object of meditation, and is beyond both dharma and adharma. She is the waking state as Viśva, and the dreaming state as Taijasa.',
            kn: 'ಧ್ಯಾನ, ಧ್ಯಾನಿಸುವವನು, ಧ್ಯಾನಿಸಲ್ಪಡುವುದು ಈ ಮೂರೂ ಆಕೆಯೇ; ಧರ್ಮಾಧರ್ಮಗಳನ್ನು ಮೀರಿದವಳು. ಜಾಗ್ರದವಸ್ಥೆಯಲ್ಲಿ ವಿಶ್ವರೂಪಳು, ಸ್ವಪ್ನಾವಸ್ಥೆಯಲ್ಲಿ ತೈಜಸಸ್ವರೂಪಳು.',
          },
        },
        {
          n: 63,
          text: 'सुप्ता प्राज्ञात्मिका तुर्या सर्वावस्थाविवर्जिता ।\nसृष्टिकर्त्री ब्रह्मरूपा गोप्त्री गोविन्दरूपिणी ॥',
          meaning: {
            en: 'She is deep sleep as Prājña and the fourth state (turīya), and also beyond all states. As Brahmā she creates, and as Govinda she protects.',
            kn: 'ಸುಷುಪ್ತಿಯಲ್ಲಿ ಪ್ರಾಜ್ಞಸ್ವರೂಪಳು, ತುರೀಯಳು, ಎಲ್ಲ ಅವಸ್ಥೆಗಳನ್ನೂ ಮೀರಿದವಳು. ಬ್ರಹ್ಮರೂಪದಿಂದ ಸೃಷ್ಟಿಸುವವಳು, ಗೋವಿಂದರೂಪದಿಂದ ಪಾಲಿಸುವವಳು.',
          },
        },
        {
          n: 64,
          text: 'संहारिणी रुद्ररूपा तिरोधानकरीश्वरी ।\nसदाशिवानुग्रहदा पञ्चकृत्यपरायणा ॥',
          meaning: {
            en: 'As Rudra she dissolves, as Īśvarī she veils (tirodhāna), and as Sadāśiva she bestows grace. Thus she is devoted to the five cosmic functions.',
            kn: 'ರುದ್ರರೂಪದಿಂದ ಸಂಹರಿಸುವವಳು, ಈಶ್ವರಿಯಾಗಿ ತಿರೋಧಾನ ಮಾಡುವವಳು, ಸದಾಶಿವರೂಪದಿಂದ ಅನುಗ್ರಹಿಸುವವಳು; ಹೀಗೆ ಸೃಷ್ಟಿ, ಸ್ಥಿತಿ, ಸಂಹಾರ, ತಿರೋಧಾನ, ಅನುಗ್ರಹ ಎಂಬ ಐದು ಕೃತ್ಯಗಳಲ್ಲಿ ನಿರತಳು.',
          },
        },
        {
          n: 65,
          text: 'भानुमण्डलमध्यस्था भैरवी भगमालिनी ।\nपद्मासना भगवती पद्मनाभसहोदरी ॥',
          meaning: {
            en: 'She dwells in the centre of the sun\'s orb; she is Bhairavī and Bhagamālinī. Seated on a lotus, she is the Blessed One (Bhagavatī) and the sister of Padmanābha (Viṣṇu).',
            kn: 'ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿರುವವಳು, ಭೈರವೀ, ಭಗಮಾಲಿನೀ. ಪದ್ಮಾಸನೆ, ಭಗವತೀ, ಪದ್ಮನಾಭನ (ವಿಷ್ಣುವಿನ) ಸಹೋದರಿ.',
          },
        },
        {
          n: 66,
          text: 'उन्मेषनिमिषोत्पन्नविपन्नभुवनावलिः ।\nसहस्रशीर्षवदना सहस्राक्षी सहस्रपात् ॥',
          meaning: {
            en: 'Worlds upon worlds arise when she opens her eyes and vanish when she closes them. She has a thousand heads and faces, a thousand eyes and a thousand feet.',
            kn: 'ಆಕೆ ಕಣ್ಣು ತೆರೆದಾಗ ಲೋಕಗಳ ಸಾಲು ಹುಟ್ಟುತ್ತದೆ, ಕಣ್ಣು ಮುಚ್ಚಿದಾಗ ಅಳಿಯುತ್ತದೆ. ಸಾವಿರ ತಲೆಗಳು, ಸಾವಿರ ಮುಖಗಳು, ಸಾವಿರ ಕಣ್ಣುಗಳು, ಸಾವಿರ ಪಾದಗಳುಳ್ಳವಳು.',
          },
        },
        {
          n: 67,
          text: 'आब्रह्मकीटजननी वर्णाश्रमविधायिनी ।\nनिजाज्ञारूपनिगमा पुण्यापुण्यफलप्रदा ॥',
          meaning: {
            en: 'She is the mother of all, from Brahmā down to the smallest insect, and she ordained the order of varṇas and āśramas. The Vedas are her own commands, and she gives the fruits of merit and demerit.',
            kn: 'ಬ್ರಹ್ಮನಿಂದ ಹಿಡಿದು ಕೀಟದವರೆಗೆ ಎಲ್ಲರ ತಾಯಿ, ವರ್ಣಾಶ್ರಮ ವ್ಯವಸ್ಥೆಯನ್ನು ವಿಧಿಸಿದವಳು. ವೇದಗಳೇ ಆಕೆಯ ಆಜ್ಞೆಗಳು; ಪುಣ್ಯಪಾಪಗಳ ಫಲವನ್ನು ಕೊಡುವವಳು.',
          },
        },
        {
          n: 68,
          text: 'श्रुतिसीमन्तसिन्दूरीकृतपादाब्जधूलिका ।\nसकलागमसन्दोहशुक्तिसम्पुटमौक्तिका ॥',
          meaning: {
            en: 'The dust of her lotus feet is the vermilion in the hair-parting of the Vedas. She is the pearl held within the shell of all the scriptures.',
            kn: 'ಶ್ರುತಿಗಳೆಂಬ ಸ್ತ್ರೀಯರ ಬೈತಲೆಯ ಸಿಂಧೂರವೇ ಆಕೆಯ ಪಾದಕಮಲದ ಧೂಳು. ಸಕಲ ಆಗಮಗಳೆಂಬ ಚಿಪ್ಪಿನೊಳಗಿನ ಮುತ್ತು ಆಕೆ.',
          },
        },
        {
          n: 69,
          text: 'पुरुषार्थप्रदा पूर्णा भोगिनी भुवनेश्वरी ।\nअम्बिकाऽनादिनिधना हरिब्रह्मेन्द्रसेविता ॥',
          meaning: {
            en: 'She grants the four goals of life and is complete in herself; she enjoys all and rules the worlds. She is Ambikā, without beginning or end, served by Hari, Brahmā and Indra.',
            kn: 'ಧರ್ಮ, ಅರ್ಥ, ಕಾಮ, ಮೋಕ್ಷಗಳೆಂಬ ಪುರುಷಾರ್ಥಗಳನ್ನು ಕೊಡುವವಳು, ಪೂರ್ಣೆ, ಭೋಗಿನೀ, ಭುವನೇಶ್ವರೀ. ಆದಿ ಅಂತ್ಯಗಳಿಲ್ಲದ ಅಂಬಿಕೆ, ಹರಿ, ಬ್ರಹ್ಮ, ಇಂದ್ರರಿಂದ ಸೇವಿತಳು.',
          },
        },
        {
          n: 70,
          text: 'नारायणी नादरूपा नामरूपविवर्जिता ।\nह्रीङ्कारी ह्रीमती हृद्या हेयोपादेयवर्जिता ॥',
          meaning: {
            en: 'She is Nārāyaṇī, the form of primal sound (nāda), yet beyond name and form. She is the seed-syllable hrīṃ, full of modesty, dear to the heart, and beyond anything to be rejected or accepted.',
            kn: 'ನಾರಾಯಣೀ, ನಾದರೂಪಿಣಿ, ನಾಮರೂಪಗಳನ್ನು ಮೀರಿದವಳು. ಹ್ರೀಂಕಾರಸ್ವರೂಪಿಣಿ, ಲಜ್ಜಾವತಿ, ಹೃದಯಕ್ಕೆ ಪ್ರಿಯಳು, ಬಿಡಬೇಕಾದುದು ಹಿಡಿಯಬೇಕಾದುದು ಎಂಬ ಭೇದವನ್ನು ಮೀರಿದವಳು.',
          },
        },
        {
          n: 71,
          text: 'राजराजार्चिता राज्ञी रम्या राजीवलोचना ।\nरञ्जनी रमणी रस्या रणत्किङ्किणिमेखला ॥',
          meaning: {
            en: 'She is worshipped by Kubera, the king of kings, and is the Queen, delightful and lotus-eyed. She gladdens all, is charming and full of rasa, and wears a girdle of tinkling bells.',
            kn: 'ರಾಜರಾಜನಾದ ಕುಬೇರನಿಂದ ಪೂಜಿತಳು, ರಾಣಿ, ರಮ್ಯೆ, ಕಮಲದಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವಳು. ಎಲ್ಲರನ್ನೂ ರಂಜಿಸುವವಳು, ರಮಣೀ, ರಸಮಯಿ, ಘಲ್ಲೆನ್ನುವ ಗೆಜ್ಜೆಗಳ ಒಡ್ಯಾಣವುಳ್ಳವಳು.',
          },
        },
        {
          n: 72,
          text: 'रमा राकेन्दुवदना रतिरूपा रतिप्रिया ।\nरक्षाकरी राक्षसघ्नी रामा रमणलम्पटा ॥',
          meaning: {
            en: 'She is Ramā (Lakṣmī), with a face like the full moon; she is Rati\'s own form and loves delight. She protects, slays the rākṣasas, is the beloved one, and delights in her Lord.',
            kn: 'ರಮೆ, ಹುಣ್ಣಿಮೆಯ ಚಂದ್ರನಂತಹ ಮುಖವುಳ್ಳವಳು, ರತಿರೂಪೆ, ರತಿಪ್ರಿಯೆ. ರಕ್ಷಿಸುವವಳು, ರಾಕ್ಷಸರನ್ನು ಸಂಹರಿಸುವವಳು, ರಾಮೆ, ತನ್ನ ಪತಿಯಲ್ಲಿ ಅನುರಕ್ತಳು.',
          },
        },
        {
          n: 73,
          text: 'काम्या कामकलारूपा कदम्बकुसुमप्रिया ।\nकल्याणी जगतीकन्दा करुणारससागरा ॥',
          meaning: {
            en: 'She is the one to be longed for, the form of Kāmakalā, and loves kadamba flowers. She is auspicious, the root of the world, and an ocean of compassion.',
            kn: 'ಎಲ್ಲರೂ ಬಯಸುವವಳು, ಕಾಮಕಲಾರೂಪಿಣಿ, ಕದಂಬ ಪುಷ್ಪಪ್ರಿಯೆ. ಕಲ್ಯಾಣೀ, ಜಗತ್ತಿನ ಮೂಲ, ಕರುಣಾರಸದ ಸಾಗರ.',
          },
        },
        {
          n: 74,
          text: 'कलावती कलालापा कान्ता कादम्बरीप्रिया ।\nवरदा वामनयना वारुणीमदविह्वला ॥',
          meaning: {
            en: 'She is rich in the arts, sweet of speech, lovely, and fond of kādambarī (mead). She grants boons, has beautiful eyes, and is lost in the rapture of vāruṇī, understood as the inner nectar of bliss.',
            kn: 'ಕಲಾವತಿ, ಮಧುರವಾಗಿ ಮಾತನಾಡುವವಳು, ಕಾಂತೆ, ಕಾದಂಬರೀ ಪ್ರಿಯೆ. ವರದೆ, ಸುಂದರ ಕಣ್ಣುಗಳುಳ್ಳವಳು, ವಾರುಣೀ ಮದದಿಂದ ಅಂದರೆ ಆಂತರಿಕ ಆನಂದಾಮೃತದಿಂದ ಪರವಶಳಾದವಳು.',
          },
        },
        {
          n: 75,
          text: 'विश्वाधिका वेदवेद्या विन्ध्याचलनिवासिनी ।\nविधात्री वेदजननी विष्णुमाया विलासिनी ॥',
          meaning: {
            en: 'She transcends the universe, is known through the Vedas and dwells on the Vindhya mountains. She sustains the world, is the mother of the Vedas, the Māyā of Viṣṇu, and full of play.',
            kn: 'ವಿಶ್ವವನ್ನು ಮೀರಿದವಳು, ವೇದಗಳಿಂದ ತಿಳಿಯಲ್ಪಡುವವಳು, ವಿಂಧ್ಯಪರ್ವತವಾಸಿನಿ. ಜಗತ್ತನ್ನು ಧರಿಸುವ ವಿಧಾತ್ರಿ, ವೇದಜನನಿ, ವಿಷ್ಣುಮಾಯೆ, ವಿಲಾಸಿನಿ.',
          },
        },
        {
          n: 76,
          text: 'क्षेत्रस्वरूपा क्षेत्रेशी क्षेत्रक्षेत्रज्ञपालिनी ।\nक्षयवृद्धिविनिर्मुक्ता क्षेत्रपालसमर्चिता ॥',
          meaning: {
            en: 'She is the field (the body and the world), its ruler, and the protector of both the field and its knower. She is free of decay and growth, and is worshipped by Kṣetrapāla.',
            kn: 'ದೇಹ ಮತ್ತು ಜಗತ್ತೆಂಬ ಕ್ಷೇತ್ರದ ಸ್ವರೂಪಿಣಿ, ಕ್ಷೇತ್ರದ ಒಡತಿ, ಕ್ಷೇತ್ರ ಮತ್ತು ಕ್ಷೇತ್ರಜ್ಞ ಎರಡನ್ನೂ ಪಾಲಿಸುವವಳು. ಕ್ಷಯ ವೃದ್ಧಿಗಳಿಲ್ಲದವಳು, ಕ್ಷೇತ್ರಪಾಲನಿಂದ ಪೂಜಿತಳು.',
          },
        },
        {
          n: 77,
          text: 'विजया विमला वन्द्या वन्दारुजनवत्सला ।\nवाग्वादिनी वामकेशी वह्निमण्डलवासिनी ॥',
          meaning: {
            en: 'She is victorious, spotless, worthy of praise, and loving towards those who bow to her. She is the source of speech, Vāmakeśī, and dwells in the orb of fire.',
            kn: 'ವಿಜಯೆ, ವಿಮಲೆ, ವಂದನೀಯೆ, ನಮಸ್ಕರಿಸುವ ಜನರಲ್ಲಿ ವಾತ್ಸಲ್ಯವುಳ್ಳವಳು. ವಾಕ್ಕನ್ನು ನುಡಿಸುವ ವಾಗ್ವಾದಿನೀ, ವಾಮಕೇಶೀ, ಅಗ್ನಿಮಂಡಲವಾಸಿನಿ.',
          },
        },
        {
          n: 78,
          text: 'भक्तिमत्कल्पलतिका पशुपाशविमोचिनी ।\nसंहृताशेषपाषण्डा सदाचारप्रवर्तिका ॥',
          meaning: {
            en: 'She is the wish-fulfilling creeper for the devout, and frees bound souls (paśus) from their fetters. She has swept away all heresy and sets good conduct in motion.',
            kn: 'ಭಕ್ತರಿಗೆ ಕಲ್ಪಲತೆ, ಪಶುಗಳೆಂಬ ಬದ್ಧಜೀವಿಗಳನ್ನು ಪಾಶದಿಂದ ಬಿಡಿಸುವವಳು. ಎಲ್ಲ ಪಾಷಂಡಗಳನ್ನೂ ನಾಶಮಾಡಿದವಳು, ಸದಾಚಾರವನ್ನು ಪ್ರವರ್ತಿಸುವವಳು.',
          },
        },
        {
          n: 79,
          text: 'तापत्रयाग्निसन्तप्तसमाह्लादनचन्द्रिका ।\nतरुणी तापसाराध्या तनुमध्या तमोऽपहा ॥',
          meaning: {
            en: 'She is the cooling moonlight for those scorched by the fire of the three afflictions. She is ever young, worshipped by ascetics, slender-waisted, and dispels darkness.',
            kn: 'ಆಧ್ಯಾತ್ಮಿಕ, ಆಧಿಭೌತಿಕ, ಆಧಿದೈವಿಕ ಎಂಬ ಮೂರು ತಾಪಗಳ ಬೆಂಕಿಯಿಂದ ಬೆಂದವರಿಗೆ ತಂಪು ನೀಡುವ ಬೆಳದಿಂಗಳು. ತರುಣಿ, ತಪಸ್ವಿಗಳಿಂದ ಆರಾಧಿತಳು, ತೆಳು ನಡುವಿನವಳು, ಅಜ್ಞಾನದ ಕತ್ತಲೆಯನ್ನು ನೀಗುವವಳು.',
          },
        },
        {
          n: 80,
          text: 'चितिस्तत्पदलक्ष्यार्था चिदेकरसरूपिणी ।\nस्वात्मानन्दलवीभूतब्रह्माद्यानन्दसन्ततिः ॥',
          meaning: {
            en: 'She is consciousness (citi), the meaning pointed to by the word tat (That), the single essence of awareness. The joy of Brahmā and all the gods is only a tiny drop of her own bliss.',
            kn: 'ಚೈತನ್ಯರೂಪಳಾದ ಚಿತಿ, ತತ್ ಎಂಬ ಪದದ ಲಕ್ಷ್ಯಾರ್ಥ, ಏಕರಸವಾದ ಚೈತನ್ಯಸ್ವರೂಪಿಣಿ. ಬ್ರಹ್ಮಾದಿಗಳ ಆನಂದವೆಲ್ಲವೂ ಆಕೆಯ ಆತ್ಮಾನಂದದ ಒಂದು ಕಣ ಮಾತ್ರ.',
          },
        },
        {
          n: 81,
          text: 'परा प्रत्यक्चितीरूपा पश्यन्ती परदेवता ।\nमध्यमा वैखरीरूपा भक्तमानसहंसिका ॥',
          meaning: {
            en: 'She is Parā, the highest level of speech, and inward-turned consciousness; she is Paśyantī and the supreme deity. She is Madhyamā and Vaikharī, and the swan that glides in the minds of her devotees.',
            kn: 'ಪರಾ ವಾಕ್ಕು, ಒಳಮುಖವಾದ ಪ್ರತ್ಯಕ್ ಚೈತನ್ಯರೂಪಿಣಿ, ಪಶ್ಯಂತೀ, ಪರದೇವತೆ. ಮಧ್ಯಮಾ, ವೈಖರೀ ರೂಪಿಣಿ; ಭಕ್ತರ ಮನಸ್ಸೆಂಬ ಸರೋವರದ ಹಂಸ.',
          },
        },
        {
          n: 82,
          text: 'कामेश्वरप्राणनाडी कृतज्ञा कामपूजिता ।\nशृङ्गाररससम्पूर्णा जया जालन्धरस्थिता ॥',
          meaning: {
            en: 'She is the very life-breath of Kāmeśvara; she is grateful, and worshipped by Kāma. She is full of the rasa of love (śṛṅgāra), victorious (Jayā), and abides in the Jālandhara pīṭha.',
            kn: 'ಕಾಮೇಶ್ವರನ ಪ್ರಾಣನಾಡಿ, ಕೃತಜ್ಞೆ, ಕಾಮನಿಂದ ಪೂಜಿತಳು. ಶೃಂಗಾರರಸದಿಂದ ತುಂಬಿದವಳು, ಜಯೆ, ಜಾಲಂಧರ ಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದವಳು.',
          },
        },
        {
          n: 83,
          text: 'ओड्याणपीठनिलया बिन्दुमण्डलवासिनी ।\nरहोयागक्रमाराध्या रहस्तर्पणतर्पिता ॥',
          meaning: {
            en: 'She resides in the Oḍyāṇa pīṭha and dwells in the bindu at the centre of the Śrīcakra. She is worshipped through the secret inner sacrifice and is gratified by secret offerings.',
            kn: 'ಓಡ್ಯಾಣ ಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಶ್ರೀಚಕ್ರದ ಮಧ್ಯದ ಬಿಂದುಮಂಡಲವಾಸಿನಿ. ರಹಸ್ಯವಾದ ಅಂತರ್ಯಾಗದ ಕ್ರಮದಿಂದ ಆರಾಧಿಸಲ್ಪಡುವವಳು, ರಹಸ್ಯ ತರ್ಪಣಗಳಿಂದ ತೃಪ್ತಳಾಗುವವಳು.',
          },
        },
        {
          n: 84,
          text: 'सद्यःप्रसादिनी विश्वसाक्षिणी साक्षिवर्जिता ।\nषडङ्गदेवतायुक्ता षाड्गुण्यपरिपूरिता ॥',
          meaning: {
            en: 'She grants her grace at once; she is the witness of the universe, yet has no witness of her own. She is attended by the deities of the six limbs and is full of the six divine excellences.',
            kn: 'ತಕ್ಷಣವೇ ಪ್ರಸನ್ನಳಾಗುವವಳು, ವಿಶ್ವಕ್ಕೆ ಸಾಕ್ಷಿ, ತನಗೆ ಯಾವ ಸಾಕ್ಷಿಯೂ ಇಲ್ಲದವಳು. ಆರು ಅಂಗದೇವತೆಗಳಿಂದ ಕೂಡಿದವಳು, ಐಶ್ವರ್ಯ, ವೀರ್ಯ, ಯಶಸ್ಸು, ಶ್ರೀ, ಜ್ಞಾನ, ವೈರಾಗ್ಯ ಎಂಬ ಆರು ಗುಣಗಳಿಂದ ಪರಿಪೂರ್ಣಳು.',
          },
        },
        {
          n: 85,
          text: 'नित्यक्लिन्ना निरुपमा निर्वाणसुखदायिनी ।\nनित्याषोडशिकारूपा श्रीकण्ठार्धशरीरिणी ॥',
          meaning: {
            en: 'She is ever moist with compassion, incomparable, and gives the bliss of liberation. She takes the form of the sixteen Nityā goddesses and is half of the body of Śrīkaṇṭha (Śiva).',
            kn: 'ಸದಾ ಕರುಣೆಯಿಂದ ಆರ್ದ್ರಳಾದ ನಿತ್ಯಕ್ಲಿನ್ನೆ, ಹೋಲಿಕೆಯಿಲ್ಲದವಳು, ನಿರ್ವಾಣಸುಖವನ್ನು ಕೊಡುವವಳು. ಹದಿನಾರು ನಿತ್ಯಾದೇವಿಯರ ರೂಪಿಣಿ, ಶ್ರೀಕಂಠನ (ಶಿವನ) ಅರ್ಧಶರೀರಿಣಿ.',
          },
        },
        {
          n: 86,
          text: 'प्रभावती प्रभारूपा प्रसिद्धा परमेश्वरी ।\nमूलप्रकृतिरव्यक्ता व्यक्ताव्यक्तस्वरूपिणी ॥',
          meaning: {
            en: 'She is radiant, radiance itself, renowned, the supreme ruler. She is Mūlaprakṛti, the unmanifest, and the form of both the manifest and the unmanifest.',
            kn: 'ಪ್ರಭಾವತಿ, ಪ್ರಭಾರೂಪೆ, ಪ್ರಸಿದ್ಧೆ, ಪರಮೇಶ್ವರಿ. ಮೂಲಪ್ರಕೃತಿ, ಅವ್ಯಕ್ತೆ, ವ್ಯಕ್ತ ಮತ್ತು ಅವ್ಯಕ್ತ ಎರಡರ ಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 87,
          text: 'व्यापिनी विविधाकारा विद्याऽविद्यास्वरूपिणी ।\nमहाकामेशनयनकुमुदाह्लादकौमुदी ॥',
          meaning: {
            en: 'She pervades all and takes many forms; she is both knowledge and ignorance. She is the moonlight that delights the lily-like eyes of Mahākāmeśa.',
            kn: 'ಸರ್ವವ್ಯಾಪಿನಿ, ನಾನಾ ಆಕಾರಗಳುಳ್ಳವಳು, ವಿದ್ಯೆ ಮತ್ತು ಅವಿದ್ಯೆ ಎರಡರ ಸ್ವರೂಪಿಣಿ. ಮಹಾಕಾಮೇಶ್ವರನ ನೈದಿಲೆಯಂತಹ ಕಣ್ಣುಗಳಿಗೆ ಆನಂದ ನೀಡುವ ಬೆಳದಿಂಗಳು.',
          },
        },
        {
          n: 88,
          text: 'भक्तहार्दतमोभेदभानुमद्भानुसन्ततिः ।\nशिवदूती शिवाराध्या शिवमूर्तिः शिवङ्करी ॥',
          meaning: {
            en: 'She is a stream of sunlight that pierces the darkness in her devotees\' hearts. She is Śivadūtī, who sent Śiva as her messenger; she is worshipped by Śiva, is Śiva\'s very form, and brings auspiciousness.',
            kn: 'ಭಕ್ತರ ಹೃದಯದ ಕತ್ತಲೆಯನ್ನು ಭೇದಿಸುವ ಸೂರ್ಯಕಿರಣಗಳ ಸಾಲು. ಶಿವನನ್ನೇ ದೂತನನ್ನಾಗಿ ಕಳುಹಿಸಿದ ಶಿವದೂತೀ, ಶಿವನಿಂದ ಆರಾಧಿತಳು, ಶಿವಮೂರ್ತಿ, ಮಂಗಳವನ್ನುಂಟುಮಾಡುವ ಶಿವಂಕರೀ.',
          },
        },
        {
          n: 89,
          text: 'शिवप्रिया शिवपरा शिष्टेष्टा शिष्टपूजिता ।\nअप्रमेया स्वप्रकाशा मनोवाचामगोचरा ॥',
          meaning: {
            en: 'She is dear to Śiva and wholly devoted to him; she loves the virtuous and is worshipped by them. She is immeasurable, self-luminous, and beyond the reach of mind and speech.',
            kn: 'ಶಿವಪ್ರಿಯೆ, ಶಿವನಲ್ಲೇ ನಿರತಳು, ಶಿಷ್ಟರಿಗೆ ಪ್ರಿಯಳು, ಶಿಷ್ಟರಿಂದ ಪೂಜಿತಳು. ಅಳೆಯಲಾಗದವಳು, ಸ್ವಪ್ರಕಾಶೆ, ಮನಸ್ಸು ಮಾತುಗಳಿಗೆ ನಿಲುಕದವಳು.',
          },
        },
        {
          n: 90,
          text: 'चिच्छक्तिश्चेतनारूपा जडशक्तिर्जडात्मिका ।\nगायत्री व्याहृतिः सन्ध्या द्विजवृन्दनिषेविता ॥',
          meaning: {
            en: 'She is the power of consciousness and consciousness itself, and also the power of inert matter and matter itself. She is Gāyatrī, the vyāhṛtis and Sandhyā, and is served by the twice-born.',
            kn: 'ಚಿಚ್ಛಕ್ತಿ, ಚೇತನಾರೂಪೆ, ಜಡಶಕ್ತಿ, ಜಡಸ್ವರೂಪಿಣಿ. ಗಾಯತ್ರೀ, ವ್ಯಾಹೃತಿ, ಸಂಧ್ಯೆ, ದ್ವಿಜರ ಸಮೂಹದಿಂದ ಸೇವಿತಳು.',
          },
        },
        {
          n: 91,
          text: 'तत्त्वासना तत्त्वमयी पञ्चकोशान्तरस्थिता ।\nनिःसीममहिमा नित्ययौवना मदशालिनी ॥',
          meaning: {
            en: 'The tattvas are her seat and she is made of the tattvas; she abides within the five sheaths (kośas). Her greatness is boundless, her youth eternal, and she glows with rapture.',
            kn: 'ತತ್ತ್ವಗಳನ್ನೇ ಆಸನವನ್ನಾಗಿ ಹೊಂದಿದವಳು, ತತ್ತ್ವಮಯಿ, ಪಂಚಕೋಶಗಳ ಒಳಗೆ ನೆಲೆಸಿದವಳು. ಎಲ್ಲೆಯಿಲ್ಲದ ಮಹಿಮೆಯುಳ್ಳವಳು, ನಿತ್ಯಯೌವನೆ, ಆನಂದದ ಮದದಿಂದ ಶೋಭಿಸುವವಳು.',
          },
        },
        {
          n: 92,
          text: 'मदघूर्णितरक्ताक्षी मदपाटलगण्डभूः ।\nचन्दनद्रवदिग्धाङ्गी चाम्पेयकुसुमप्रिया ॥',
          meaning: {
            en: 'Her reddish eyes roll with rapture and her cheeks are flushed rosy with it. Her limbs are smeared with sandal paste, and she loves campaka flowers.',
            kn: 'ಆನಂದಮದದಿಂದ ಹೊರಳುವ ಕೆಂಪು ಕಣ್ಣುಗಳುಳ್ಳವಳು, ಅದೇ ಮದದಿಂದ ಕೆಂಪಾದ ಕೆನ್ನೆಗಳುಳ್ಳವಳು. ಗಂಧದ ಲೇಪನವುಳ್ಳ ಅಂಗಗಳುಳ್ಳವಳು, ಸಂಪಿಗೆ ಹೂವು ಪ್ರಿಯವಾದವಳು.',
          },
        },
        {
          n: 93,
          text: 'कुशला कोमलाकारा कुरुकुल्ला कुलेश्वरी ।\nकुलकुण्डालया कौलमार्गतत्परसेविता ॥',
          meaning: {
            en: 'She is skilful, gentle of form, Kurukullā and the ruler of the Kula. She dwells in the Kula-kuṇḍa (in the Mūlādhāra) and is served by those devoted to the Kaula path.',
            kn: 'ಕುಶಲೆ, ಕೋಮಲ ಆಕಾರದವಳು, ಕುರುಕುಲ್ಲಾ, ಕುಲೇಶ್ವರಿ. ಮೂಲಾಧಾರದ ಕುಲಕುಂಡದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಕೌಲಮಾರ್ಗದಲ್ಲಿ ನಿರತರಾದವರಿಂದ ಸೇವಿತಳು.',
          },
        },
        {
          n: 94,
          text: 'कुमारगणनाथाम्बा तुष्टिः पुष्टिर्मतिर्धृतिः ।\nशान्तिः स्वस्तिमती कान्तिर्नन्दिनी विघ्ननाशिनी ॥',
          meaning: {
            en: 'She is the mother of Kumāra (Skanda) and Gaṇanātha (Gaṇeśa); she is contentment, nourishment, understanding and steadfastness. She is peace, well-being, radiance and joy, and she destroys obstacles.',
            kn: 'ಕುಮಾರ (ಷಣ್ಮುಖ) ಮತ್ತು ಗಣನಾಥರ ತಾಯಿ; ತುಷ್ಟಿ, ಪುಷ್ಟಿ, ಮತಿ, ಧೃತಿ. ಶಾಂತಿ, ಸ್ವಸ್ತಿಮತಿ, ಕಾಂತಿ, ಆನಂದ ನೀಡುವ ನಂದಿನೀ, ವಿಘ್ನನಾಶಿನಿ.',
          },
        },
        {
          n: 95,
          text: 'तेजोवती त्रिनयना लोलाक्षीकामरूपिणी ।\nमालिनी हंसिनी माता मलयाचलवासिनी ॥',
          meaning: {
            en: 'She is full of splendour and three-eyed, and she is the desire that dwells in restless-eyed women. She is Mālinī, Haṃsinī, the Mother, and dwells on the Malaya mountain.',
            kn: 'ತೇಜೋವತಿ, ಮೂರು ಕಣ್ಣುಗಳುಳ್ಳವಳು, ಚಂಚಲ ಕಣ್ಣಿನ ಸ್ತ್ರೀಯರಲ್ಲಿ ಕಾಮರೂಪದಿಂದ ಇರುವವಳು. ಮಾಲಿನೀ, ಹಂಸಿನೀ, ಮಾತೆ, ಮಲಯಪರ್ವತವಾಸಿನಿ.',
          },
        },
        {
          n: 96,
          text: 'सुमुखी नलिनी सुभ्रूः शोभना सुरनायिका ।\nकालकण्ठी कान्तिमती क्षोभिणी सूक्ष्मरूपिणी ॥',
          meaning: {
            en: 'She has a lovely face, is soft as a lotus, fair-browed, radiant, the leader of the gods. She is Kālakaṇṭhī, consort of the dark-throated Śiva, full of beauty; she stirs creation into motion, and her form is subtle.',
            kn: 'ಸುಂದರ ಮುಖದವಳು, ಕಮಲದಂತೆ ಕೋಮಲಳಾದ ನಲಿನೀ, ಸುಂದರ ಹುಬ್ಬುಗಳುಳ್ಳವಳು, ಶೋಭನೆ, ದೇವತೆಗಳ ನಾಯಕಿ. ಕಾಲಕಂಠನ ಪತ್ನಿ ಕಾಲಕಂಠೀ, ಕಾಂತಿಮತಿ, ಸೃಷ್ಟಿಗಾಗಿ ಪ್ರಕೃತಿಯನ್ನು ಕದಡುವ ಕ್ಷೋಭಿಣೀ, ಸೂಕ್ಷ್ಮರೂಪಿಣಿ.',
          },
        },
        {
          n: 97,
          text: 'वज्रेश्वरी वामदेवी वयोऽवस्थाविवर्जिता ।\nसिद्धेश्वरी सिद्धविद्या सिद्धमाता यशस्विनी ॥',
          meaning: {
            en: 'She is Vajreśvarī and Vāmadevī, untouched by age and its stages. She is the queen of the siddhas, the Vidyā that grants perfection, the mother of the perfected, and full of glory.',
            kn: 'ವಜ್ರೇಶ್ವರೀ, ವಾಮದೇವೀ, ವಯಸ್ಸು ಮತ್ತು ಅವಸ್ಥೆಗಳನ್ನು ಮೀರಿದವಳು. ಸಿದ್ಧೇಶ್ವರೀ, ಸಿದ್ಧವಿದ್ಯೆ, ಸಿದ್ಧರ ತಾಯಿ, ಯಶಸ್ವಿನೀ.',
          },
        },
        {
          n: 98,
          text: 'विशुद्धिचक्रनिलयाऽऽरक्तवर्णा त्रिलोचना ।\nखट्वाङ्गादिप्रहरणा वदनैकसमन्विता ॥',
          meaning: {
            en: 'Dwelling in the Viśuddhi cakra (as Ḍākinī), she is rosy-red and three-eyed; she bears the khaṭvāṅga and other weapons and has a single face.',
            kn: 'ವಿಶುದ್ಧಿಚಕ್ರದಲ್ಲಿ ಡಾಕಿನೀ ರೂಪದಿಂದ ನೆಲೆಸಿದವಳು, ಕೆಂಪು ಬಣ್ಣದವಳು, ಮೂರು ಕಣ್ಣುಗಳುಳ್ಳವಳು; ಖಟ್ವಾಂಗ ಮೊದಲಾದ ಆಯುಧಗಳನ್ನು ಧರಿಸಿದವಳು, ಒಂದೇ ಮುಖವುಳ್ಳವಳು.',
          },
        },
        {
          n: 99,
          text: 'पायसान्नप्रिया त्वक्स्था पशुलोकभयङ्करी ।\nअमृतादिमहाशक्तिसंवृता डाकिनीश्वरी ॥',
          meaning: {
            en: 'She loves rice cooked in milk (pāyasa) and presides over the skin; she strikes fear into those bound by ignorance. Surrounded by Amṛtā and the other great powers, she is Ḍākinīśvarī.',
            kn: 'ಪಾಯಸಾನ್ನಪ್ರಿಯೆ, ಚರ್ಮಧಾತುವಿನಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಅಜ್ಞಾನದಿಂದ ಬದ್ಧರಾದ ಪಶುಜನರಿಗೆ ಭಯವನ್ನುಂಟುಮಾಡುವವಳು. ಅಮೃತಾ ಮೊದಲಾದ ಮಹಾಶಕ್ತಿಗಳಿಂದ ಸುತ್ತುವರಿದ ಡಾಕಿನೀಶ್ವರೀ.',
          },
        },
        {
          n: 100,
          text: 'अनाहताब्जनिलया श्यामाभा वदनद्वया ।\nदंष्ट्रोज्ज्वलाऽक्षमालादिधरा रुधिरसंस्थिता ॥',
          meaning: {
            en: 'Abiding in the heart lotus (Anāhata), she is dark in hue and has two faces. Gleaming with tusks, she holds a rosary and other emblems, and presides over the blood.',
            kn: 'ಅನಾಹತ ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಶ್ಯಾಮವರ್ಣದವಳು, ಎರಡು ಮುಖಗಳುಳ್ಳವಳು. ಕೋರೆಹಲ್ಲುಗಳಿಂದ ಹೊಳೆಯುವ, ಅಕ್ಷಮಾಲೆ ಮೊದಲಾದವುಗಳನ್ನು ಧರಿಸಿದ, ರಕ್ತಧಾತುವಿನಲ್ಲಿ ನೆಲೆಸಿದವಳು.',
          },
        },
        {
          n: 101,
          text: 'कालरात्र्यादिशक्त्यौघवृता स्निग्धौदनप्रिया ।\nमहावीरेन्द्रवरदा राकिण्यम्बास्वरूपिणी ॥',
          meaning: {
            en: 'She is surrounded by hosts of powers such as Kālarātri, and loves rice cooked with ghee. She grants boons to great heroes and is the form of Mother Rākiṇī.',
            kn: 'ಕಾಲರಾತ್ರಿ ಮೊದಲಾದ ಶಕ್ತಿಗಳ ಸಮೂಹದಿಂದ ಸುತ್ತುವರಿದವಳು, ತುಪ್ಪ ಬೆರೆತ ಅನ್ನಪ್ರಿಯೆ. ಮಹಾವೀರರಿಗೆ ವರ ನೀಡುವವಳು, ರಾಕಿಣೀ ಅಂಬಾ ಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 102,
          text: 'मणिपूराब्जनिलया वदनत्रयसम्युता ।\nवज्रादिकायुधोपेता डामर्यादिभिरावृता ॥',
          meaning: {
            en: 'Dwelling in the Maṇipūra lotus, she has three faces, bears the thunderbolt and other weapons, and is surrounded by Ḍāmarī and other attendant powers.',
            kn: 'ಮಣಿಪೂರ ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಮೂರು ಮುಖಗಳುಳ್ಳವಳು, ವಜ್ರ ಮೊದಲಾದ ಆಯುಧಗಳನ್ನು ಧರಿಸಿದವಳು, ಡಾಮರೀ ಮೊದಲಾದ ಶಕ್ತಿಗಳಿಂದ ಸುತ್ತುವರಿದವಳು.',
          },
        },
        {
          n: 103,
          text: 'रक्तवर्णा मांसनिष्ठा गुडान्नप्रीतमानसा ।\nसमस्तभक्तसुखदा लाकिन्यम्बास्वरूपिणी ॥',
          meaning: {
            en: 'She is red in colour, presides over the flesh, and delights in rice cooked with jaggery. Giving happiness to all her devotees, she is the form of Mother Lākinī.',
            kn: 'ಕೆಂಪು ಬಣ್ಣದವಳು, ಮಾಂಸಧಾತುವಿನಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಬೆಲ್ಲದ ಅನ್ನದಿಂದ ಪ್ರೀತಳಾಗುವವಳು. ಎಲ್ಲ ಭಕ್ತರಿಗೂ ಸುಖ ಕೊಡುವ ಲಾಕಿನೀ ಅಂಬಾ ಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 104,
          text: 'स्वाधिष्ठानाम्बुजगता चतुर्वक्त्रमनोहरा ।\nशूलाद्यायुधसम्पन्ना पीतवर्णाऽतिगर्विता ॥',
          meaning: {
            en: 'Abiding in the Svādhiṣṭhāna lotus, she is lovely with four faces, armed with the trident and other weapons, yellow in colour and exceedingly proud.',
            kn: 'ಸ್ವಾಧಿಷ್ಠಾನ ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ನಾಲ್ಕು ಮುಖಗಳಿಂದ ಮನೋಹರಳು, ಶೂಲ ಮೊದಲಾದ ಆಯುಧಗಳುಳ್ಳವಳು, ಹಳದಿ ಬಣ್ಣದವಳು, ಅತಿ ಗರ್ವಿತಳು.',
          },
        },
        {
          n: 105,
          text: 'मेदोनिष्ठा मधुप्रीता बन्धिन्यादिसमन्विता ।\nदध्यन्नासक्तहृदया काकिनीरूपधारिणी ॥',
          meaning: {
            en: 'She presides over the fat, delights in honey, and is accompanied by Bandhinī and other powers. Fond of curd-rice, she takes the form of Kākinī.',
            kn: 'ಮೇದಸ್ಸು ಧಾತುವಿನಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಮಧುಪ್ರಿಯೆ, ಬಂಧಿನೀ ಮೊದಲಾದ ಶಕ್ತಿಗಳಿಂದ ಕೂಡಿದವಳು. ಮೊಸರನ್ನದಲ್ಲಿ ಆಸಕ್ತಳಾದ ಕಾಕಿನೀ ರೂಪಧಾರಿಣಿ.',
          },
        },
        {
          n: 106,
          text: 'मूलाधाराम्बुजारूढा पञ्चवक्त्राऽस्थिसंस्थिता ।\nअङ्कुशादिप्रहरणा वरदादिनिषेविता ॥',
          meaning: {
            en: 'Seated on the Mūlādhāra lotus, she has five faces and presides over the bones. She bears the goad and other weapons, and is attended by Varadā and other powers.',
            kn: 'ಮೂಲಾಧಾರ ಕಮಲದಲ್ಲಿ ಕುಳಿತವಳು, ಐದು ಮುಖಗಳುಳ್ಳವಳು, ಅಸ್ಥಿಧಾತುವಿನಲ್ಲಿ ನೆಲೆಸಿದವಳು. ಅಂಕುಶ ಮೊದಲಾದ ಆಯುಧಗಳುಳ್ಳವಳು, ವರದಾ ಮೊದಲಾದ ಶಕ್ತಿಗಳಿಂದ ಸೇವಿತಳು.',
          },
        },
        {
          n: 107,
          text: 'मुद्गौदनासक्तचित्ता साकिन्यम्बास्वरूपिणी ।\nआज्ञाचक्राब्जनिलया शुक्लवर्णा षडानना ॥',
          meaning: {
            en: 'Fond of rice cooked with green gram, she is the form of Mother Sākinī. Dwelling in the lotus of the Ājñā-cakra, she is white in colour and has six faces.',
            kn: 'ಹೆಸರುಬೇಳೆಯ ಅನ್ನದಲ್ಲಿ ಆಸಕ್ತ ಮನಸ್ಸುಳ್ಳ ಸಾಕಿನೀ ಅಂಬಾ ಸ್ವರೂಪಿಣಿ. ಆಜ್ಞಾಚಕ್ರ ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಬಿಳಿ ಬಣ್ಣದವಳು, ಆರು ಮುಖಗಳುಳ್ಳವಳು.',
          },
        },
        {
          n: 108,
          text: 'मज्जासंस्था हंसवतीमुख्यशक्तिसमन्विता ।\nहरिद्रान्नैकरसिका हाकिनीरूपधारिणी ॥',
          meaning: {
            en: 'She presides over the marrow and is accompanied by Haṃsavatī and other chief powers. She relishes rice cooked with turmeric, and takes the form of Hākinī.',
            kn: 'ಮಜ್ಜಾಧಾತುವಿನಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಹಂಸವತೀ ಮೊದಲಾದ ಮುಖ್ಯ ಶಕ್ತಿಗಳಿಂದ ಕೂಡಿದವಳು. ಅರಿಶಿನದ ಅನ್ನವನ್ನೇ ಸವಿಯುವ ಹಾಕಿನೀ ರೂಪಧಾರಿಣಿ.',
          },
        },
        {
          n: 109,
          text: 'सहस्रदलपद्मस्था सर्ववर्णोपशोभिता ।\nसर्वायुधधरा शुक्लसंस्थिता सर्वतोमुखी ॥',
          meaning: {
            en: 'Abiding in the thousand-petalled lotus, she shines with all colours. She bears every weapon, presides over the vital seed (śukla), and faces every direction.',
            kn: 'ಸಹಸ್ರದಳ ಪದ್ಮದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಎಲ್ಲ ಬಣ್ಣಗಳಿಂದ ಶೋಭಿಸುವವಳು. ಎಲ್ಲ ಆಯುಧಗಳನ್ನು ಧರಿಸಿದವಳು, ಶುಕ್ಲಧಾತುವಿನಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಎಲ್ಲ ದಿಕ್ಕುಗಳಿಗೂ ಮುಖವುಳ್ಳವಳು.',
          },
        },
        {
          n: 110,
          text: 'सर्वौदनप्रीतचित्ता याकिन्यम्बास्वरूपिणी ।\nस्वाहा स्वधाऽमतिर्मेधा श्रुतिः स्मृतिरनुत्तमा ॥',
          meaning: {
            en: 'Pleased by every kind of food, she is the form of Mother Yākinī. She is Svāhā and Svadhā, the offerings to gods and ancestors; she is both unknowing (amati) and intelligence (medhā), the Veda and the smṛti, and she is unsurpassed.',
            kn: 'ಎಲ್ಲ ಬಗೆಯ ಅನ್ನದಿಂದ ಪ್ರೀತಳಾಗುವ ಯಾಕಿನೀ ಅಂಬಾ ಸ್ವರೂಪಿಣಿ. ದೇವತೆಗಳಿಗೆ ಅರ್ಪಿಸುವ ಸ್ವಾಹಾ, ಪಿತೃಗಳಿಗೆ ಅರ್ಪಿಸುವ ಸ್ವಧಾ ಆಕೆಯೇ; ಅಜ್ಞಾನವಾದ ಅಮತಿಯೂ ಬುದ್ಧಿಯಾದ ಮೇಧೆಯೂ ಆಕೆಯೇ; ಶ್ರುತಿ, ಸ್ಮೃತಿ, ಸರ್ವೋತ್ತಮೆ.',
          },
        },
        {
          n: 111,
          text: 'पुण्यकीर्तिः पुण्यलभ्या पुण्यश्रवणकीर्तना ।\nपुलोमजार्चिता बन्धमोचनी बर्बरालका ॥',
          meaning: {
            en: 'Her fame is holy, she is attained through merit, and hearing and singing of her is itself meritorious. She is worshipped by Pulomajā (Śacī, Indra\'s wife), frees from bondage, and has curly locks.',
            kn: 'ಪವಿತ್ರ ಕೀರ್ತಿಯುಳ್ಳವಳು, ಪುಣ್ಯದಿಂದ ದೊರೆಯುವವಳು, ಆಕೆಯ ಶ್ರವಣ ಕೀರ್ತನಗಳೇ ಪುಣ್ಯಕರ. ಇಂದ್ರಪತ್ನಿ ಶಚೀದೇವಿಯಿಂದ ಪೂಜಿತಳು, ಬಂಧನದಿಂದ ಬಿಡಿಸುವವಳು, ಗುಂಗುರು ಮುಂಗುರುಳುಗಳುಳ್ಳವಳು.',
          },
        },
        {
          n: 112,
          text: 'विमर्शरूपिणी विद्या वियदादिजगत्प्रसूः ।\nसर्वव्याधिप्रशमनी सर्वमृत्युनिवारिणी ॥',
          meaning: {
            en: 'She is Vimarśa, the self-awareness of the Absolute, and Vidyā, knowledge; she gives birth to the world, beginning with space. She calms every disease and wards off every kind of death.',
            kn: 'ಪರಬ್ರಹ್ಮದ ಸ್ವಪ್ರಜ್ಞೆಯಾದ ವಿಮರ್ಶರೂಪಿಣಿ, ವಿದ್ಯೆ, ಆಕಾಶದಿಂದ ಮೊದಲ್ಗೊಂಡು ಜಗತ್ತನ್ನು ಹುಟ್ಟಿಸಿದವಳು. ಎಲ್ಲ ರೋಗಗಳನ್ನು ಶಮನಗೊಳಿಸುವವಳು, ಎಲ್ಲ ಬಗೆಯ ಮೃತ್ಯುವನ್ನು ತಡೆಯುವವಳು.',
          },
        },
        {
          n: 113,
          text: 'अग्रगण्याऽचिन्त्यरूपा कलिकल्मषनाशिनी ।\nकात्यायनी कालहन्त्री कमलाक्षनिषेविता ॥',
          meaning: {
            en: 'She is foremost of all, of inconceivable form, and destroys the impurities of the Kali age. She is Kātyāyanī, the slayer of Time, worshipped by the lotus-eyed Viṣṇu.',
            kn: 'ಎಲ್ಲರಿಗಿಂತ ಮೊದಲು ಎಣಿಸಲ್ಪಡುವವಳು, ಊಹಿಸಲಾಗದ ರೂಪದವಳು, ಕಲಿಯುಗದ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವವಳು. ಕಾತ್ಯಾಯನೀ, ಕಾಲನನ್ನೂ ಕೊಲ್ಲುವವಳು, ಕಮಲಾಕ್ಷನಾದ ವಿಷ್ಣುವಿನಿಂದ ಸೇವಿತಳು.',
          },
        },
        {
          n: 114,
          text: 'ताम्बूलपूरितमुखी दाडिमीकुसुमप्रभा ।\nमृगाक्षी मोहिनी मुख्या मृडानी मित्ररूपिणी ॥',
          meaning: {
            en: 'Her mouth is filled with betel, and she glows like the pomegranate flower. She is doe-eyed, enchanting, foremost, Mṛḍānī (Śiva\'s consort), and a friend to all.',
            kn: 'ತಾಂಬೂಲದಿಂದ ತುಂಬಿದ ಬಾಯುಳ್ಳವಳು, ದಾಳಿಂಬೆ ಹೂವಿನಂತೆ ಹೊಳೆಯುವವಳು. ಜಿಂಕೆಯ ಕಣ್ಣಿನವಳು, ಮೋಹಿನೀ, ಮುಖ್ಯೆ, ಮೃಡಾನೀ, ಎಲ್ಲರಿಗೂ ಮಿತ್ರಳು.',
          },
        },
        {
          n: 115,
          text: 'नित्यतृप्ता भक्तनिधिर्नियन्त्री निखिलेश्वरी ।\nमैत्र्यादिवासनालभ्या महाप्रलयसाक्षिणी ॥',
          meaning: {
            en: 'She is ever content, the treasure of her devotees, the controller and ruler of all. She is reached through friendliness and the other noble dispositions, and is the witness of the great dissolution.',
            kn: 'ನಿತ್ಯತೃಪ್ತೆ, ಭಕ್ತರ ನಿಧಿ, ಎಲ್ಲವನ್ನೂ ನಿಯಂತ್ರಿಸುವವಳು, ಅಖಿಲೇಶ್ವರಿ. ಮೈತ್ರಿ ಮೊದಲಾದ ಸದ್ಭಾವನೆಗಳಿಂದ ದೊರೆಯುವವಳು, ಮಹಾಪ್ರಳಯಕ್ಕೆ ಸಾಕ್ಷಿ.',
          },
        },
        {
          n: 116,
          text: 'पराशक्तिः परानिष्ठा प्रज्ञानघनरूपिणी ।\nमाध्वीपानालसा मत्ता मातृकावर्णरूपिणी ॥',
          meaning: {
            en: 'She is the supreme power, the supreme goal, and the form of dense wisdom. Languid and rapt with the honey-wine of bliss, she is the form of the letters of the alphabet (mātṛkā).',
            kn: 'ಪರಾಶಕ್ತಿ, ಪರಮ ನಿಷ್ಠೆ, ಘನೀಭೂತ ಪ್ರಜ್ಞಾನರೂಪಿಣಿ. ಮಾಧ್ವೀ ಪಾನದ ಆನಂದದಿಂದ ಆಲಸ್ಯಗೊಂಡವಳು, ಮತ್ತಳು; ಮಾತೃಕಾ ವರ್ಣಗಳ ಅಂದರೆ ಅಕ್ಷರಗಳ ಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 117,
          text: 'महाकैलासनिलया मृणालमृदुदोर्लता ।\nमहनीया दयामूर्तिर्महासाम्राज्यशालिनी ॥',
          meaning: {
            en: 'She dwells on great Kailāsa, and her arms are tender as lotus stalks. She is worthy of honour, compassion embodied, and splendid with a great empire.',
            kn: 'ಮಹಾಕೈಲಾಸವಾಸಿನಿ, ತಾವರೆಯ ದಂಟಿನಂತೆ ಮೃದುವಾದ ಬಾಹುಲತೆಗಳುಳ್ಳವಳು. ಪೂಜನೀಯೆ, ದಯಾಮೂರ್ತಿ, ಮಹಾಸಾಮ್ರಾಜ್ಯದಿಂದ ಶೋಭಿಸುವವಳು.',
          },
        },
        {
          n: 118,
          text: 'आत्मविद्या महाविद्या श्रीविद्या कामसेविता ।\nश्रीषोडशाक्षरीविद्या त्रिकूटा कामकोटिका ॥',
          meaning: {
            en: 'She is the knowledge of the Self, the great Vidyā and Śrī Vidyā, worshipped by Kāma. She is the sixteen-syllable Śrī Vidyā, made of three kūṭas, and is Kāmakoṭikā.',
            kn: 'ಆತ್ಮವಿದ್ಯೆ, ಮಹಾವಿದ್ಯೆ, ಶ್ರೀವಿದ್ಯೆ, ಕಾಮನಿಂದ ಸೇವಿತಳು. ಶ್ರೀಷೋಡಶಾಕ್ಷರೀ ವಿದ್ಯೆ, ಮೂರು ಕೂಟಗಳುಳ್ಳ ತ್ರಿಕೂಟೆ, ಕಾಮಕೋಟಿಕೆ.',
          },
        },
        {
          n: 119,
          text: 'कटाक्षकिङ्करीभूतकमलाकोटिसेविता ।\nशिरःस्थिता चन्द्रनिभा भालस्थेन्द्रधनुःप्रभा ॥',
          meaning: {
            en: 'Millions of Lakṣmīs, made her servants by a mere side-glance, wait upon her. She is in the head, shining like the moon, and on the forehead, bright as a rainbow.',
            kn: 'ಆಕೆಯ ಕಡೆಗಣ್ಣ ನೋಟಕ್ಕೇ ದಾಸಿಯರಾದ ಕೋಟಿ ಲಕ್ಷ್ಮಿಯರು ಆಕೆಯನ್ನು ಸೇವಿಸುತ್ತಾರೆ. ತಲೆಯಲ್ಲಿ ಚಂದ್ರನಂತೆ, ಹಣೆಯಲ್ಲಿ ಕಾಮನಬಿಲ್ಲಿನಂತೆ ಹೊಳೆಯುವವಳು.',
          },
        },
        {
          n: 120,
          text: 'हृदयस्था रविप्रख्या त्रिकोणान्तरदीपिका ।\nदाक्षायणी दैत्यहन्त्री दक्षयज्ञविनाशिनी ॥',
          meaning: {
            en: 'In the heart she shines like the sun, and she is the lamp within the triangle. She is Dākṣāyaṇī, daughter of Dakṣa, the slayer of demons, who destroyed Dakṣa\'s sacrifice.',
            kn: 'ಹೃದಯದಲ್ಲಿ ಸೂರ್ಯನಂತೆ ಪ್ರಕಾಶಿಸುವವಳು, ತ್ರಿಕೋಣದೊಳಗಿನ ದೀಪ. ದಕ್ಷನ ಮಗಳಾದ ದಾಕ್ಷಾಯಣೀ, ದೈತ್ಯರನ್ನು ಕೊಲ್ಲುವವಳು, ದಕ್ಷಯಜ್ಞವನ್ನು ನಾಶಮಾಡಿದವಳು.',
          },
        },
        {
          n: 121,
          text: 'दरान्दोलितदीर्घाक्षी दरहासोज्ज्वलन्मुखी ।\nगुरुमूर्तिर्गुणनिधिर्गोमाता गुहजन्मभूः ॥',
          meaning: {
            en: 'Her long eyes move gently, and her face glows with a soft smile. She is the Guru in visible form, a treasury of virtues, the mother of cows (of Kāmadhenu and of speech), and the birthplace of Guha (Skanda).',
            kn: 'ಮೆಲ್ಲನೆ ಚಲಿಸುವ ದೀರ್ಘವಾದ ಕಣ್ಣುಗಳುಳ್ಳವಳು, ಮಂದಹಾಸದಿಂದ ಹೊಳೆಯುವ ಮುಖವುಳ್ಳವಳು. ಗುರುಮೂರ್ತಿ, ಗುಣಗಳ ನಿಧಿ, ಗೋಮಾತೆ, ಗುಹನ (ಷಣ್ಮುಖನ) ಜನ್ಮಸ್ಥಾನ.',
          },
        },
        {
          n: 122,
          text: 'देवेशी दण्डनीतिस्था दहराकाशरूपिणी ।\nप्रतिपन्मुख्यराकान्ततिथिमण्डलपूजिता ॥',
          meaning: {
            en: 'She is the ruler of the gods and upholds the law of just governance (daṇḍanīti); she is the subtle space within the heart (daharākāśa). She is worshipped by the circle of lunar days, from the first day to the full moon.',
            kn: 'ದೇವತೆಗಳ ಒಡತಿ, ದಂಡನೀತಿಯಲ್ಲಿ (ನ್ಯಾಯಯುತ ಆಡಳಿತದಲ್ಲಿ) ನೆಲೆಸಿದವಳು, ಹೃದಯದೊಳಗಿನ ದಹರಾಕಾಶರೂಪಿಣಿ. ಪ್ರತಿಪದೆಯಿಂದ ಹುಣ್ಣಿಮೆಯವರೆಗಿನ ತಿಥಿಗಳ ಮಂಡಲದಿಂದ ಪೂಜಿತಳು.',
          },
        },
        {
          n: 123,
          text: 'कलात्मिका कलानाथा काव्यालापविनोदिनी ।\nसचामररमावाणीसव्यदक्षिणसेविता ॥',
          meaning: {
            en: 'She is the soul of the arts and the lord of the digits of the moon, and delights in the conversation of poetry. Lakṣmī and Sarasvatī attend her on the left and right, waving chowries.',
            kn: 'ಕಲೆಗಳ ಆತ್ಮ, ಕಲಾನಾಥೆ, ಕಾವ್ಯಸಂಭಾಷಣೆಯಲ್ಲಿ ಆನಂದಿಸುವವಳು. ಚಾಮರ ಹಿಡಿದ ಲಕ್ಷ್ಮೀ ಸರಸ್ವತಿಯರು ಆಕೆಯ ಎಡಬಲಗಳಲ್ಲಿ ನಿಂತು ಸೇವಿಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 124,
          text: 'आदिशक्तिरमेयात्मा परमा पावनाकृतिः ।\nअनेककोटिब्रह्माण्डजननी दिव्यविग्रहा ॥',
          meaning: {
            en: 'She is the primal Śakti, of immeasurable being, supreme, of purifying form. She is the mother of countless millions of universes, and her form is divine.',
            kn: 'ಆದಿಶಕ್ತಿ, ಅಳೆಯಲಾಗದ ಆತ್ಮಸ್ವರೂಪಿಣಿ, ಪರಮೆ, ಪಾವನವಾದ ಆಕಾರವುಳ್ಳವಳು. ಅನೇಕ ಕೋಟಿ ಬ್ರಹ್ಮಾಂಡಗಳ ಜನನಿ, ದಿವ್ಯವಿಗ್ರಹೆ.',
          },
        },
        {
          n: 125,
          text: 'क्लीङ्कारी केवला गुह्या कैवल्यपददायिनी ।\nत्रिपुरा त्रिजगद्वन्द्या त्रिमूर्तिस्त्रिदशेश्वरी ॥',
          meaning: {
            en: 'She is the seed-syllable klīṃ, the one alone, the secret one, who grants the state of liberation (kaivalya). She is Tripurā, adored by the three worlds, the Trinity in one, and the ruler of the gods.',
            kn: 'ಕ್ಲೀಂಕಾರಸ್ವರೂಪಿಣಿ, ಏಕಮಾತ್ರಳಾದ ಕೇವಲೆ, ರಹಸ್ಯರೂಪಿಣಿ, ಕೈವಲ್ಯಪದವನ್ನು ಕೊಡುವವಳು. ತ್ರಿಪುರೆ, ಮೂರು ಲೋಕಗಳಿಂದ ವಂದಿತಳು, ತ್ರಿಮೂರ್ತಿಸ್ವರೂಪಿಣಿ, ದೇವತೆಗಳ ಒಡತಿ.',
          },
        },
        {
          n: 126,
          text: 'त्र्यक्षरी दिव्यगन्धाढ्या सिन्दूरतिलकाञ्चिता ।\nउमा शैलेन्द्रतनया गौरी गन्धर्वसेविता ॥',
          meaning: {
            en: 'She is the three-syllabled one, rich in divine fragrance, and adorned with a vermilion mark. She is Umā, daughter of the king of mountains, Gaurī, served by the gandharvas.',
            kn: 'ತ್ರ್ಯಕ್ಷರೀ, ದಿವ್ಯ ಸುಗಂಧದಿಂದ ಕೂಡಿದವಳು, ಸಿಂಧೂರ ತಿಲಕದಿಂದ ಅಲಂಕೃತಳು. ಉಮೆ, ಪರ್ವತರಾಜನ ಮಗಳು, ಗೌರಿ, ಗಂಧರ್ವರಿಂದ ಸೇವಿತಳು.',
          },
        },
        {
          n: 127,
          text: 'विश्वगर्भा स्वर्णगर्भाऽवरदा वागधीश्वरी ।\nध्यानगम्याऽपरिच्छेद्या ज्ञानदा ज्ञानविग्रहा ॥',
          meaning: {
            en: 'The universe lies within her womb; she is the golden womb (Hiraṇyagarbha) and Avaradā, who cuts down the wicked; she is the queen of speech. She is reached by meditation, has no limits, gives knowledge and is knowledge embodied.',
            kn: 'ವಿಶ್ವವನ್ನು ಗರ್ಭದಲ್ಲಿ ಧರಿಸಿದವಳು, ಹಿರಣ್ಯಗರ್ಭರೂಪಿಣಿ, ದುಷ್ಟರನ್ನು ಖಂಡಿಸುವ ಅವರದೆ, ವಾಕ್ಕಿನ ಒಡತಿ. ಧ್ಯಾನದಿಂದ ತಿಳಿಯಲ್ಪಡುವವಳು, ಎಲ್ಲೆಯಿಲ್ಲದವಳು, ಜ್ಞಾನವನ್ನು ಕೊಡುವವಳು, ಜ್ಞಾನವೇ ಮೂರ್ತಿವೆತ್ತವಳು.',
          },
        },
        {
          n: 128,
          text: 'सर्ववेदान्तसंवेद्या सत्यानन्दस्वरूपिणी ।\nलोपामुद्रार्चिता लीलाकॢप्तब्रह्माण्डमण्डला ॥',
          meaning: {
            en: 'She is known through all of Vedānta, and her nature is truth and bliss. She is worshipped by Lopāmudrā, and creates the orbs of the universes in play.',
            kn: 'ಎಲ್ಲ ವೇದಾಂತಗಳಿಂದ ತಿಳಿಯಲ್ಪಡುವವಳು, ಸತ್ಯ ಮತ್ತು ಆನಂದಸ್ವರೂಪಿಣಿ. ಲೋಪಾಮುದ್ರೆಯಿಂದ ಪೂಜಿತಳು, ಲೀಲೆಯಾಗಿಯೇ ಬ್ರಹ್ಮಾಂಡಮಂಡಲಗಳನ್ನು ಸೃಷ್ಟಿಸಿದವಳು.',
          },
        },
        {
          n: 129,
          text: 'अदृश्या दृश्यरहिता विज्ञात्री वेद्यवर्जिता ।\nयोगिनी योगदा योग्या योगानन्दा युगन्धरा ॥',
          meaning: {
            en: 'She is invisible and has nothing beyond her to see; she is the knower, with nothing apart from her to be known. She is the yoginī, the giver of yoga, attainable by yoga, the bliss of yoga, and the bearer of the ages.',
            kn: 'ಕಣ್ಣಿಗೆ ಕಾಣದವಳು, ತನ್ನ ಹೊರತು ನೋಡಬೇಕಾದುದು ಇಲ್ಲದವಳು; ಎಲ್ಲವನ್ನೂ ತಿಳಿಯುವವಳು, ತಿಳಿಯಬೇಕಾದ ಬೇರೆ ವಸ್ತುವಿಲ್ಲದವಳು. ಯೋಗಿನೀ, ಯೋಗವನ್ನು ಕೊಡುವವಳು, ಯೋಗದಿಂದ ಪಡೆಯಲ್ಪಡುವವಳು, ಯೋಗಾನಂದೆ, ಯುಗಗಳನ್ನು ಧರಿಸುವವಳು.',
          },
        },
        {
          n: 130,
          text: 'इच्छाशक्तिज्ञानशक्तिक्रियाशक्तिस्वरूपिणी ।\nसर्वाधारा सुप्रतिष्ठा सदसद्रूपधारिणी ॥',
          meaning: {
            en: 'She is the power of will, the power of knowledge and the power of action. She is the support of all, firmly established, and takes the form of both being and non-being.',
            kn: 'ಇಚ್ಛಾಶಕ್ತಿ, ಜ್ಞಾನಶಕ್ತಿ, ಕ್ರಿಯಾಶಕ್ತಿ ಸ್ವರೂಪಿಣಿ. ಎಲ್ಲಕ್ಕೂ ಆಧಾರ, ದೃಢವಾಗಿ ನೆಲೆಗೊಂಡವಳು, ಸತ್ ಮತ್ತು ಅಸತ್ ಎರಡರ ರೂಪವನ್ನೂ ಧರಿಸಿದವಳು.',
          },
        },
        {
          n: 131,
          text: 'अष्टमूर्तिरजाजैत्री लोकयात्राविधायिनी ।\nएकाकिनी भूमरूपा निर्द्वैता द्वैतवर्जिता ॥',
          meaning: {
            en: 'She has eight forms, conquers ignorance (ajā), and ordains the course of the world. She is the one alone, the Infinite (bhūman), non-dual and free of all duality.',
            kn: 'ಅಷ್ಟಮೂರ್ತಿ, ಅಜೆಯೆಂಬ ಅವಿದ್ಯೆಯನ್ನು ಗೆಲ್ಲುವವಳು, ಲೋಕದ ವ್ಯವಹಾರವನ್ನು ನಡೆಸುವವಳು. ಏಕಾಕಿನೀ, ಭೂಮಾ ಎಂಬ ಅನಂತಸ್ವರೂಪಿಣಿ, ಅದ್ವೈತೆ, ದ್ವೈತವನ್ನು ಮೀರಿದವಳು.',
          },
        },
        {
          n: 132,
          text: 'अन्नदा वसुदा वृद्धा ब्रह्मात्मैक्यस्वरूपिणी ।\nबृहती ब्राह्मणी ब्राह्मी ब्रह्मानन्दा बलिप्रिया ॥',
          meaning: {
            en: 'She gives food and wealth, is the ancient one, and is the oneness of Brahman and the Self. She is Bṛhatī, Brāhmaṇī and Brāhmī, the bliss of Brahman, and loves offerings.',
            kn: 'ಅನ್ನವನ್ನೂ ಸಂಪತ್ತನ್ನೂ ಕೊಡುವವಳು, ಪುರಾತನಳಾದ ವೃದ್ಧೆ, ಬ್ರಹ್ಮ ಮತ್ತು ಆತ್ಮದ ಏಕತ್ವಸ್ವರೂಪಿಣಿ. ಬೃಹತೀ, ಬ್ರಾಹ್ಮಣೀ, ಬ್ರಾಹ್ಮೀ, ಬ್ರಹ್ಮಾನಂದೆ, ಬಲಿಪ್ರಿಯೆ.',
          },
        },
        {
          n: 133,
          text: 'भाषारूपा बृहत्सेना भावाभावविवर्जिता ।\nसुखाराध्या शुभकरी शोभना सुलभा गतिः ॥',
          meaning: {
            en: 'She is the form of all languages, has a vast army, and is beyond existence and non-existence. She is easily worshipped, brings good, is radiant, and is the goal that is easily reached.',
            kn: 'ಎಲ್ಲ ಭಾಷೆಗಳ ರೂಪಿಣಿ, ಮಹಾಸೇನೆಯುಳ್ಳವಳು, ಭಾವ ಅಭಾವಗಳನ್ನು ಮೀರಿದವಳು. ಸುಲಭವಾಗಿ ಆರಾಧಿಸಬಹುದಾದವಳು, ಶುಭವನ್ನುಂಟುಮಾಡುವವಳು, ಶೋಭನೆ, ಸುಲಭವಾಗಿ ದೊರೆಯುವ ಗತಿ.',
          },
        },
        {
          n: 134,
          text: 'राजराजेश्वरी राज्यदायिनी राज्यवल्लभा ।\nराजत्कृपा राजपीठनिवेशितनिजाश्रिता ॥',
          meaning: {
            en: 'She is Rājarājeśvarī, the empress of emperors, who grants kingdoms and holds sovereignty dear. Her grace shines forth, and she places those who take refuge in her on royal thrones.',
            kn: 'ರಾಜರಾಜೇಶ್ವರಿ, ರಾಜ್ಯವನ್ನು ಕೊಡುವವಳು, ರಾಜ್ಯಪ್ರಿಯೆ. ಹೊಳೆಯುವ ಕೃಪೆಯುಳ್ಳವಳು, ತನ್ನನ್ನು ಆಶ್ರಯಿಸಿದವರನ್ನು ರಾಜಪೀಠದಲ್ಲಿ ಕುಳ್ಳಿರಿಸುವವಳು.',
          },
        },
        {
          n: 135,
          text: 'राज्यलक्ष्मीः कोशनाथा चतुरङ्गबलेश्वरी ।\nसाम्राज्यदायिनी सत्यसन्धा सागरमेखला ॥',
          meaning: {
            en: 'She is the royal fortune, the lord of the treasury, and the commander of the fourfold army. She grants empire, is true to her word, and wears the ocean as her girdle.',
            kn: 'ರಾಜ್ಯಲಕ್ಷ್ಮಿ, ಕೋಶದ ಒಡತಿ, ಚತುರಂಗ ಸೈನ್ಯದ ಅಧಿಪತಿ. ಸಾಮ್ರಾಜ್ಯವನ್ನು ಕೊಡುವವಳು, ಸತ್ಯಸಂಧೆ, ಸಾಗರವನ್ನೇ ಒಡ್ಯಾಣವಾಗಿ ಧರಿಸಿದ ಭೂಮಿರೂಪಿಣಿ.',
          },
        },
        {
          n: 136,
          text: 'दीक्षिता दैत्यशमनी सर्वलोकवशङ्करी ।\nसर्वार्थदात्री सावित्री सच्चिदानन्दरूपिणी ॥',
          meaning: {
            en: 'She is consecrated (dīkṣitā), subdues the demons, and brings all the worlds under her sway. She grants every aim, is Sāvitrī, and is being, consciousness and bliss.',
            kn: 'ದೀಕ್ಷಿತೆ, ದೈತ್ಯರನ್ನು ಶಮನಗೊಳಿಸುವವಳು, ಎಲ್ಲ ಲೋಕಗಳನ್ನೂ ವಶಪಡಿಸಿಕೊಳ್ಳುವವಳು. ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಕೊಡುವವಳು, ಸಾವಿತ್ರೀ, ಸಚ್ಚಿದಾನಂದರೂಪಿಣಿ.',
          },
        },
        {
          n: 137,
          text: 'देशकालापरिच्छिन्ना सर्वगा सर्वमोहिनी ।\nसरस्वती शास्त्रमयी गुहाम्बा गुह्यरूपिणी ॥',
          meaning: {
            en: 'She is not limited by space or time, is all-pervading and enchants all. She is Sarasvatī, made of the scriptures, the mother of Guha, and secret in form.',
            kn: 'ದೇಶ ಕಾಲಗಳಿಂದ ಮಿತಿಗೊಳ್ಳದವಳು, ಸರ್ವವ್ಯಾಪಿನಿ, ಎಲ್ಲರನ್ನೂ ಮೋಹಗೊಳಿಸುವವಳು. ಸರಸ್ವತೀ, ಶಾಸ್ತ್ರಮಯಿ, ಗುಹನ ತಾಯಿ, ರಹಸ್ಯರೂಪಿಣಿ.',
          },
        },
        {
          n: 138,
          text: 'सर्वोपाधिविनिर्मुक्ता सदाशिवपतिव्रता ।\nसम्प्रदायेश्वरी साध्वी गुरुमण्डलरूपिणी ॥',
          meaning: {
            en: 'She is free of every limiting adjunct and is the devoted wife of Sadāśiva. She presides over the sacred lineages of teaching, is virtuous, and is the circle of gurus in visible form.',
            kn: 'ಎಲ್ಲ ಉಪಾಧಿಗಳಿಂದ ಮುಕ್ತಳು, ಸದಾಶಿವನ ಪತಿವ್ರತೆ. ಸಂಪ್ರದಾಯಗಳ ಒಡತಿ, ಸಾಧ್ವಿ, ಗುರುಮಂಡಲರೂಪಿಣಿ.',
          },
        },
        {
          n: 139,
          text: 'कुलोत्तीर्णा भगाराध्या माया मधुमती मही ।\nगणाम्बा गुह्यकाराध्या कोमलाङ्गी गुरुप्रिया ॥',
          meaning: {
            en: 'She has gone beyond the Kula, is worshipped in the solar orb (bhaga), and is Māyā, Madhumatī and the Earth. She is the mother of the gaṇas, worshipped by the guhyakas, tender-limbed, and dear to the guru.',
            kn: 'ಕುಲವನ್ನು ಮೀರಿದವಳು, ಭಗ (ಸೂರ್ಯ) ಮಂಡಲದಲ್ಲಿ ಆರಾಧಿಸಲ್ಪಡುವವಳು, ಮಾಯೆ, ಮಧುಮತೀ, ಭೂಮಿರೂಪಿಣಿ. ಗಣಗಳ ತಾಯಿ, ಗುಹ್ಯಕರಿಂದ ಆರಾಧಿತಳು, ಕೋಮಲಾಂಗಿ, ಗುರುಪ್ರಿಯೆ.',
          },
        },
        {
          n: 140,
          text: 'स्वतन्त्रा सर्वतन्त्रेशी दक्षिणामूर्तिरूपिणी ।\nसनकादिसमाराध्या शिवज्ञानप्रदायिनी ॥',
          meaning: {
            en: 'She is wholly independent and rules over all tantras; she takes the form of Dakṣiṇāmūrti. Worshipped by Sanaka and the other sages, she bestows the knowledge of Śiva.',
            kn: 'ಸ್ವತಂತ್ರೆ, ಎಲ್ಲ ತಂತ್ರಗಳ ಒಡತಿ, ದಕ್ಷಿಣಾಮೂರ್ತಿರೂಪಿಣಿ. ಸನಕಾದಿ ಮುನಿಗಳಿಂದ ಆರಾಧಿತಳು, ಶಿವಜ್ಞಾನವನ್ನು ಕೊಡುವವಳು.',
          },
        },
        {
          n: 141,
          text: 'चित्कलाऽऽनन्दकलिका प्रेमरूपा प्रियङ्करी ।\nनामपारायणप्रीता नन्दिविद्या नटेश्वरी ॥',
          meaning: {
            en: 'She is a spark of consciousness, a bud of bliss, love itself, and brings joy. She delights in the recitation of her names, is the Vidyā worshipped by Nandi, and is the queen of Naṭeśa, the Lord of dance.',
            kn: 'ಚಿತ್ಕಲೆ, ಆನಂದದ ಮೊಗ್ಗು, ಪ್ರೇಮರೂಪೆ, ಪ್ರಿಯವನ್ನುಂಟುಮಾಡುವವಳು. ನಾಮಪಾರಾಯಣದಿಂದ ಪ್ರೀತಳಾಗುವವಳು, ನಂದಿಯು ಉಪಾಸಿಸಿದ ವಿದ್ಯೆ, ನಟರಾಜನ ಪತ್ನಿ ನಟೇಶ್ವರೀ.',
          },
        },
        {
          n: 142,
          text: 'मिथ्याजगदधिष्ठाना मुक्तिदा मुक्तिरूपिणी ।\nलास्यप्रिया लयकरी लज्जा रम्भादिवन्दिता ॥',
          meaning: {
            en: 'She is the real ground on which the unreal world appears; she grants liberation and is liberation itself. She loves the gentle dance (lāsya), brings about dissolution, is modesty, and is adored by Rambhā and the other celestial maidens.',
            kn: 'ಮಿಥ್ಯೆಯಾದ ಜಗತ್ತಿಗೆ ಅಧಿಷ್ಠಾನವಾದ ಸತ್ಯವಸ್ತು, ಮುಕ್ತಿಯನ್ನು ಕೊಡುವವಳು, ಮುಕ್ತಿರೂಪಿಣಿ. ಲಾಸ್ಯಪ್ರಿಯೆ, ಲಯವನ್ನುಂಟುಮಾಡುವವಳು, ಲಜ್ಜೆ, ರಂಭೆ ಮೊದಲಾದ ಅಪ್ಸರೆಯರಿಂದ ವಂದಿತಳು.',
          },
        },
        {
          n: 143,
          text: 'भवदावसुधावृष्टिः पापारण्यदवानला ।\nदौर्भाग्यतूलवातूला जराध्वान्तरविप्रभा ॥',
          meaning: {
            en: 'She is a shower of nectar on the forest fire of worldly existence, and a forest fire to the jungle of sins. She is a whirlwind to the cotton-fluff of misfortune, and sunlight to the darkness of old age.',
            kn: 'ಸಂಸಾರವೆಂಬ ಕಾಳ್ಗಿಚ್ಚಿಗೆ ಅಮೃತದ ಮಳೆ, ಪಾಪವೆಂಬ ಕಾಡಿಗೆ ಕಾಳ್ಗಿಚ್ಚು. ದುರದೃಷ್ಟವೆಂಬ ಹತ್ತಿಗೆ ಬಿರುಗಾಳಿ, ಮುಪ್ಪೆಂಬ ಕತ್ತಲೆಗೆ ಸೂರ್ಯಪ್ರಕಾಶ.',
          },
        },
        {
          n: 144,
          text: 'भाग्याब्धिचन्द्रिका भक्तचित्तकेकिघनाघना ।\nरोगपर्वतदम्भोलिर्मृत्युदारुकुठारिका ॥',
          meaning: {
            en: 'She is the moonlight that swells the ocean of good fortune, and the rain cloud that makes the peacocks of her devotees\' minds dance. She is the thunderbolt that shatters the mountain of disease, and the axe that fells the tree of death.',
            kn: 'ಸೌಭಾಗ್ಯಸಾಗರವನ್ನು ಉಕ್ಕಿಸುವ ಬೆಳದಿಂಗಳು, ಭಕ್ತರ ಮನಸ್ಸೆಂಬ ನವಿಲುಗಳನ್ನು ಕುಣಿಸುವ ಮಳೆಮೋಡ. ರೋಗವೆಂಬ ಪರ್ವತಕ್ಕೆ ವಜ್ರಾಯುಧ, ಮೃತ್ಯುವೆಂಬ ಮರಕ್ಕೆ ಕೊಡಲಿ.',
          },
        },
        {
          n: 145,
          text: 'महेश्वरी महाकाली महाग्रासा महाशना ।\nअपर्णा चण्डिका चण्डमुण्डासुरनिषूदिनी ॥',
          meaning: {
            en: 'She is Maheśvarī and Mahākālī, the great devourer who swallows all at the dissolution. She is Aparṇā, Caṇḍikā, the slayer of the demons Caṇḍa and Muṇḍa.',
            kn: 'ಮಹೇಶ್ವರೀ, ಮಹಾಕಾಳೀ, ಪ್ರಳಯಕಾಲದಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ನುಂಗುವ ಮಹಾಗ್ರಾಸೆ, ಮಹಾಶನೆ. ಅಪರ್ಣೆ, ಚಂಡಿಕೆ, ಚಂಡ ಮುಂಡರೆಂಬ ಅಸುರರನ್ನು ಸಂಹರಿಸಿದವಳು.',
          },
        },
        {
          n: 146,
          text: 'क्षराक्षरात्मिका सर्वलोकेशी विश्वधारिणी ।\nत्रिवर्गदात्री सुभगा त्र्यम्बका त्रिगुणात्मिका ॥',
          meaning: {
            en: 'She is both the perishable and the imperishable, the ruler of all worlds, the upholder of the universe. She grants the three aims of life (dharma, artha, kāma), is gracious, is Tryambakā, and the soul of the three guṇas.',
            kn: 'ಕ್ಷರ ಮತ್ತು ಅಕ್ಷರ ಎರಡರ ಸ್ವರೂಪಿಣಿ, ಸರ್ವಲೋಕೇಶ್ವರಿ, ವಿಶ್ವವನ್ನು ಧರಿಸುವವಳು. ಧರ್ಮ, ಅರ್ಥ, ಕಾಮಗಳೆಂಬ ತ್ರಿವರ್ಗವನ್ನು ಕೊಡುವವಳು, ಸುಭಗೆ, ತ್ರ್ಯಂಬಕೆ, ತ್ರಿಗುಣಾತ್ಮಿಕೆ.',
          },
        },
        {
          n: 147,
          text: 'स्वर्गापवर्गदा शुद्धा जपापुष्पनिभाकृतिः ।\nओजोवती द्युतिधरा यज्ञरूपा प्रियव्रता ॥',
          meaning: {
            en: 'She grants heaven and final release, is pure, and her form is like the red hibiscus. She is full of vigour and brilliance, the form of sacrifice, and devoted to her vows.',
            kn: 'ಸ್ವರ್ಗವನ್ನೂ ಮೋಕ್ಷವನ್ನೂ ಕೊಡುವವಳು, ಶುದ್ಧೆ, ದಾಸವಾಳದ ಹೂವಿನಂತಹ ಕಾಂತಿಯುಳ್ಳವಳು. ಓಜಸ್ಸುಳ್ಳವಳು, ತೇಜಸ್ಸನ್ನು ಧರಿಸಿದವಳು, ಯಜ್ಞರೂಪಿಣಿ, ವ್ರತಪ್ರಿಯೆ.',
          },
        },
        {
          n: 148,
          text: 'दुराराध्या दुराधर्षा पाटलीकुसुमप्रिया ।\nमहती मेरुनिलया मन्दारकुसुमप्रिया ॥',
          meaning: {
            en: 'She is hard to worship and impossible to overpower, and she loves the pāṭalī flower. She is great, dwells on Mount Meru, and loves the mandāra flower.',
            kn: 'ಆರಾಧಿಸಲು ಕಷ್ಟಳಾದವಳು, ಯಾರೂ ಎದುರಿಸಲಾಗದವಳು, ಪಾದರಿ ಹೂವು ಪ್ರಿಯವಾದವಳು. ಮಹತೀ, ಮೇರುಪರ್ವತವಾಸಿನಿ, ಮಂದಾರ ಪುಷ್ಪಪ್ರಿಯೆ.',
          },
        },
        {
          n: 149,
          text: 'वीराराध्या विराड्रूपा विरजा विश्वतोमुखी ।\nप्रत्यग्रूपा पराकाशा प्राणदा प्राणरूपिणी ॥',
          meaning: {
            en: 'She is worshipped by heroes, takes the cosmic form (Virāṭ), is spotless and faces every direction. She is the inner Self, the supreme space, the giver of life and life itself.',
            kn: 'ವೀರರಿಂದ ಆರಾಧಿತಳು, ವಿರಾಟ್ ರೂಪಿಣಿ, ರಜೋಗುಣವಿಲ್ಲದ ವಿರಜೆ, ಎಲ್ಲ ದಿಕ್ಕುಗಳಿಗೂ ಮುಖವುಳ್ಳವಳು. ಒಳಗಿನ ಆತ್ಮಸ್ವರೂಪಿಣಿ, ಪರಮಾಕಾಶ, ಪ್ರಾಣವನ್ನು ಕೊಡುವವಳು, ಪ್ರಾಣರೂಪಿಣಿ.',
          },
        },
        {
          n: 150,
          text: 'मार्ताण्डभैरवाराध्या मन्त्रिणीन्यस्तराज्यधूः ।\nत्रिपुरेशी जयत्सेना निस्त्रैगुण्या परापरा ॥',
          meaning: {
            en: 'She is worshipped by Mārtāṇḍa-Bhairava, and has entrusted the burden of her kingdom to Mantriṇī. She is the ruler of the three cities, her army is ever victorious, she is beyond the three guṇas, and she is both the higher and the lower.',
            kn: 'ಮಾರ್ತಾಂಡಭೈರವನಿಂದ ಆರಾಧಿತಳು, ರಾಜ್ಯಭಾರವನ್ನು ಮಂತ್ರಿಣೀ ದೇವಿಗೆ ಒಪ್ಪಿಸಿದವಳು. ತ್ರಿಪುರೇಶೀ, ಜಯಶೀಲ ಸೈನ್ಯವುಳ್ಳವಳು, ತ್ರಿಗುಣಗಳನ್ನು ಮೀರಿದವಳು, ಪರ ಮತ್ತು ಅಪರ ಎರಡೂ ಆದವಳು.',
          },
        },
        {
          n: 151,
          text: 'सत्यज्ञानानन्दरूपा सामरस्यपरायणा ।\nकपर्दिनी कलामाला कामधुक्कामरूपिणी ॥',
          meaning: {
            en: 'She is truth, knowledge and bliss, and abides in perfect oneness (sāmarasya) with Śiva. She is the consort of Kapardin (Śiva), a garland of the arts, the wish-yielding cow, and takes any form she wills.',
            kn: 'ಸತ್ಯ, ಜ್ಞಾನ, ಆನಂದ ಸ್ವರೂಪಿಣಿ, ಶಿವನೊಡನೆ ಸಾಮರಸ್ಯದಲ್ಲಿ ನೆಲೆಸಿದವಳು. ಕಪರ್ದಿಯ (ಶಿವನ) ಪತ್ನಿ, ಕಲೆಗಳ ಮಾಲೆ, ಕಾಮಧೇನು, ಇಚ್ಛಿಸಿದ ರೂಪವನ್ನು ಧರಿಸುವವಳು.',
          },
        },
        {
          n: 152,
          text: 'कलानिधिः काव्यकला रसज्ञा रसशेवधिः ।\nपुष्टा पुरातना पूज्या पुष्करा पुष्करेक्षणा ॥',
          meaning: {
            en: 'She is a treasury of the arts and the art of poetry itself; she knows every flavour and is a store of rasa. She is well-nourished, ancient, worthy of worship, full and nourishing (Puṣkarā), and lotus-eyed.',
            kn: 'ಕಲೆಗಳ ನಿಧಿ, ಕಾವ್ಯಕಲೆ, ರಸಜ್ಞೆ, ರಸದ ಭಂಡಾರ. ಪುಷ್ಟೆ, ಪುರಾತನೆ, ಪೂಜ್ಯೆ, ಪುಷ್ಕರೆ, ಕಮಲದಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವಳು.',
          },
        },
        {
          n: 153,
          text: 'परञ्ज्योतिः परन्धाम परमाणुः परात्परा ।\nपाशहस्ता पाशहन्त्री परमन्त्रविभेदिनी ॥',
          meaning: {
            en: 'She is the supreme light and the supreme abode, the subtlest atom, higher than the highest. She holds the noose, cuts the noose of bondage, and breaks the spells of hostile mantras.',
            kn: 'ಪರಂಜ್ಯೋತಿ, ಪರಂಧಾಮ, ಅತಿಸೂಕ್ಷ್ಮವಾದ ಪರಮಾಣು, ಶ್ರೇಷ್ಠರಿಗಿಂತಲೂ ಶ್ರೇಷ್ಠೆ. ಕೈಯಲ್ಲಿ ಪಾಶವನ್ನು ಹಿಡಿದವಳು, ಬಂಧನದ ಪಾಶವನ್ನು ಕತ್ತರಿಸುವವಳು, ಶತ್ರುಗಳ ಮಂತ್ರಗಳನ್ನು ಭೇದಿಸುವವಳು.',
          },
        },
        {
          n: 154,
          text: 'मूर्ताऽमूर्ताऽनित्यतृप्ता मुनिमानसहंसिका ।\nसत्यव्रता सत्यरूपा सर्वान्तर्यामिणी सती ॥',
          meaning: {
            en: 'She has form and is formless; she is satisfied even by transient offerings, and is the swan in the minds of sages. She is true to her vows, truth itself, the indweller of all, and Satī.',
            kn: 'ಮೂರ್ತೆ, ಅಮೂರ್ತೆ, ಅನಿತ್ಯವಾದ ಅರ್ಪಣೆಗಳಿಂದಲೂ ತೃಪ್ತಳಾಗುವವಳು, ಮುನಿಗಳ ಮನಸ್ಸೆಂಬ ಸರೋವರದ ಹಂಸ. ಸತ್ಯವ್ರತೆ, ಸತ್ಯರೂಪೆ, ಎಲ್ಲರೊಳಗಿರುವ ಅಂತರ್ಯಾಮಿನಿ, ಸತೀ.',
          },
        },
        {
          n: 155,
          text: 'ब्रह्माणी ब्रह्मजननी बहुरूपा बुधार्चिता ।\nप्रसवित्री प्रचण्डाऽऽज्ञा प्रतिष्ठा प्रकटाकृतिः ॥',
          meaning: {
            en: 'She is Brahmāṇī, the mother of Brahmā, many-formed, worshipped by the wise. She gives birth to all, is fierce, is the divine command, the firm foundation, and manifest in form.',
            kn: 'ಬ್ರಹ್ಮಾಣೀ, ಬ್ರಹ್ಮನ ಜನನಿ, ಬಹುರೂಪೆ, ಜ್ಞಾನಿಗಳಿಂದ ಪೂಜಿತಳು. ಎಲ್ಲವನ್ನೂ ಹುಟ್ಟಿಸುವವಳು, ಪ್ರಚಂಡೆ, ಆಜ್ಞಾಸ್ವರೂಪಿಣಿ, ಪ್ರತಿಷ್ಠೆ, ಪ್ರಕಟವಾದ ರೂಪವುಳ್ಳವಳು.',
          },
        },
        {
          n: 156,
          text: 'प्राणेश्वरी प्राणदात्री पञ्चाशत्पीठरूपिणी ।\nविशृङ्खला विविक्तस्था वीरमाता वियत्प्रसूः ॥',
          meaning: {
            en: 'She is the ruler and giver of life, and the form of the fifty sacred seats (the fifty letters). She is unfettered, dwells in solitude, is the mother of heroes, and gives birth to space.',
            kn: 'ಪ್ರಾಣೇಶ್ವರೀ, ಪ್ರಾಣದಾತ್ರೀ, ಐವತ್ತು ಪೀಠಗಳ (ಐವತ್ತು ಅಕ್ಷರಗಳ) ರೂಪಿಣಿ. ಯಾವ ಬಂಧನವೂ ಇಲ್ಲದವಳು, ಏಕಾಂತದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ವೀರಮಾತೆ, ಆಕಾಶವನ್ನು ಹುಟ್ಟಿಸಿದವಳು.',
          },
        },
        {
          n: 157,
          text: 'मुकुन्दा मुक्तिनिलया मूलविग्रहरूपिणी ।\nभावज्ञा भवरोगघ्नी भवचक्रप्रवर्तिनी ॥',
          meaning: {
            en: 'She is Mukundā, the abode of liberation, the root form of all. She knows every feeling, cures the disease of worldly existence, and turns the wheel of saṃsāra.',
            kn: 'ಮುಕುಂದೆ, ಮುಕ್ತಿಯ ನೆಲೆ, ಎಲ್ಲಕ್ಕೂ ಮೂಲವಾದ ರೂಪವುಳ್ಳವಳು. ಮನದ ಭಾವಗಳನ್ನು ಬಲ್ಲವಳು, ಸಂಸಾರರೋಗವನ್ನು ನಾಶಮಾಡುವವಳು, ಸಂಸಾರಚಕ್ರವನ್ನು ತಿರುಗಿಸುವವಳು.',
          },
        },
        {
          n: 158,
          text: 'छन्दःसारा शास्त्रसारा मन्त्रसारा तलोदरी ।\nउदारकीर्तिरुद्दामवैभवा वर्णरूपिणी ॥',
          meaning: {
            en: 'She is the essence of the Vedic metres, of the scriptures and of the mantras, and is slender-waisted. Her fame is noble, her glory unbounded, and she is the form of the letters.',
            kn: 'ಛಂದಸ್ಸುಗಳ ಸಾರ, ಶಾಸ್ತ್ರಗಳ ಸಾರ, ಮಂತ್ರಗಳ ಸಾರ, ತೆಳು ಉದರವುಳ್ಳವಳು. ಉದಾರ ಕೀರ್ತಿಯುಳ್ಳವಳು, ಎಲ್ಲೆಯಿಲ್ಲದ ವೈಭವವುಳ್ಳವಳು, ವರ್ಣರೂಪಿಣಿ.',
          },
        },
        {
          n: 159,
          text: 'जन्ममृत्युजरातप्तजनविश्रान्तिदायिनी ।\nसर्वोपनिषदुद्घुष्टा शान्त्यतीतकलात्मिका ॥',
          meaning: {
            en: 'She gives rest to people scorched by birth, death and old age. All the Upaniṣads proclaim her, and she is the kalā that lies beyond even the kalā of peace (śāntyatīta).',
            kn: 'ಹುಟ್ಟು, ಸಾವು, ಮುಪ್ಪುಗಳಿಂದ ಬೆಂದ ಜನರಿಗೆ ವಿಶ್ರಾಂತಿ ನೀಡುವವಳು. ಎಲ್ಲ ಉಪನಿಷತ್ತುಗಳೂ ಆಕೆಯನ್ನು ಘೋಷಿಸುತ್ತವೆ; ಶಾಂತಿಕಲೆಯನ್ನೂ ಮೀರಿದ ಶಾಂತ್ಯತೀತ ಕಲಾಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 160,
          text: 'गम्भीरा गगनान्तस्था गर्विता गानलोलुपा ।\nकल्पनारहिता काष्ठाऽकान्ता कान्तार्धविग्रहा ॥',
          meaning: {
            en: 'She is profound, dwells within the sky of consciousness, is proud, and loves music. She is free of imagination, the farthest limit of all, the remover of sin, and half of her Lord\'s body.',
            kn: 'ಗಂಭೀರೆ, ಆಕಾಶದೊಳಗೆ ನೆಲೆಸಿದವಳು, ಗರ್ವಿತೆ, ಗಾನಪ್ರಿಯೆ. ಕಲ್ಪನೆಗಳಿಲ್ಲದವಳು, ಎಲ್ಲಕ್ಕೂ ಅಂತಿಮ ಎಲ್ಲೆಯಾದ ಕಾಷ್ಠೆ, ಪಾಪವನ್ನು ಕೊನೆಗಾಣಿಸುವವಳು, ಪತಿಯ ಅರ್ಧಶರೀರವಾದವಳು.',
          },
        },
        {
          n: 161,
          text: 'कार्यकारणनिर्मुक्ता कामकेलितरङ्गिता ।\nकनत्कनकताटङ्का लीलाविग्रहधारिणी ॥',
          meaning: {
            en: 'She is free of cause and effect, and ripples with the play of love with Kāmeśvara. She wears shining golden earrings and takes on forms in play.',
            kn: 'ಕಾರ್ಯಕಾರಣಗಳಿಂದ ಮುಕ್ತಳು, ಕಾಮೇಶ್ವರನೊಡನೆ ಪ್ರೇಮಕೇಳಿಯ ಅಲೆಗಳಲ್ಲಿ ತೇಲುವವಳು. ಹೊಳೆಯುವ ಚಿನ್ನದ ಓಲೆಗಳುಳ್ಳವಳು, ಲೀಲೆಗಾಗಿ ರೂಪಗಳನ್ನು ಧರಿಸುವವಳು.',
          },
        },
        {
          n: 162,
          text: 'अजा क्षयविनिर्मुक्ता मुग्धा क्षिप्रप्रसादिनी ।\nअन्तर्मुखसमाराध्या बहिर्मुखसुदुर्लभा ॥',
          meaning: {
            en: 'She is unborn, free of decay, innocent and charming, and quick to be pleased. She is worshipped by those whose minds are turned within, and very hard to reach for those turned outward.',
            kn: 'ಹುಟ್ಟಿಲ್ಲದ ಅಜೆ, ಕ್ಷಯವಿಲ್ಲದವಳು, ಮುಗ್ಧೆ, ಬೇಗನೆ ಪ್ರಸನ್ನಳಾಗುವವಳು. ಅಂತರ್ಮುಖರಾದವರಿಂದ ಆರಾಧಿಸಲ್ಪಡುವವಳು, ಬಹಿರ್ಮುಖರಿಗೆ ಅತಿ ದುರ್ಲಭಳು.',
          },
        },
        {
          n: 163,
          text: 'त्रयी त्रिवर्गनिलया त्रिस्था त्रिपुरमालिनी ।\nनिरामया निरालम्बा स्वात्मारामा सुधासृतिः ॥',
          meaning: {
            en: 'She is the three Vedas, the home of the three aims of life, abiding in the three worlds, and Tripuramālinī. She is free of ailment, needs no support, delights in her own Self, and is a stream of nectar.',
            kn: 'ಮೂರು ವೇದಗಳ ರೂಪಿಣಿ, ತ್ರಿವರ್ಗದ ನೆಲೆ, ಮೂರು ಲೋಕಗಳಲ್ಲೂ ಇರುವವಳು, ತ್ರಿಪುರಮಾಲಿನೀ. ರೋಗವಿಲ್ಲದವಳು, ಯಾವ ಆಧಾರವೂ ಬೇಕಿಲ್ಲದವಳು, ತನ್ನ ಆತ್ಮದಲ್ಲೇ ರಮಿಸುವವಳು, ಅಮೃತದ ಹರಿವು.',
          },
        },
        {
          n: 164,
          text: 'संसारपङ्कनिर्मग्नसमुद्धरणपण्डिता ।\nयज्ञप्रिया यज्ञकर्त्री यजमानस्वरूपिणी ॥',
          meaning: {
            en: 'She is skilled in lifting up those sunk in the mire of worldly life. She loves sacrifice, performs it, and is herself the one who offers it.',
            kn: 'ಸಂಸಾರವೆಂಬ ಕೆಸರಿನಲ್ಲಿ ಮುಳುಗಿದವರನ್ನು ಮೇಲೆತ್ತುವುದರಲ್ಲಿ ನಿಪುಣೆ. ಯಜ್ಞಪ್ರಿಯೆ, ಯಜ್ಞವನ್ನು ನಡೆಸುವವಳು, ಯಜಮಾನಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 165,
          text: 'धर्माधारा धनाध्यक्षा धनधान्यविवर्धिनी ।\nविप्रप्रिया विप्ररूपा विश्वभ्रमणकारिणी ॥',
          meaning: {
            en: 'She is the support of dharma, the overseer of wealth, and increases wealth and grain. She loves the learned, takes their form, and keeps the universe turning.',
            kn: 'ಧರ್ಮಕ್ಕೆ ಆಧಾರ, ಧನದ ಅಧ್ಯಕ್ಷೆ, ಧನಧಾನ್ಯಗಳನ್ನು ವೃದ್ಧಿಸುವವಳು. ವಿಪ್ರಪ್ರಿಯೆ, ವಿಪ್ರರೂಪಿಣಿ, ವಿಶ್ವವನ್ನು ತಿರುಗಿಸುವವಳು.',
          },
        },
        {
          n: 166,
          text: 'विश्वग्रासा विद्रुमाभा वैष्णवी विष्णुरूपिणी ।\nअयोनिर्योनिनिलया कूटस्था कुलरूपिणी ॥',
          meaning: {
            en: 'She swallows the universe at the dissolution, glows like coral, and is Vaiṣṇavī, in the form of Viṣṇu. She has no source, yet is the source of all; she is unchanging and the form of the Kula.',
            kn: 'ಪ್ರಳಯದಲ್ಲಿ ವಿಶ್ವವನ್ನು ನುಂಗುವವಳು, ಹವಳದಂತೆ ಹೊಳೆಯುವವಳು, ವೈಷ್ಣವೀ, ವಿಷ್ಣುರೂಪಿಣಿ. ತನಗೆ ಮೂಲವಿಲ್ಲದವಳು, ಎಲ್ಲಕ್ಕೂ ಮೂಲಸ್ಥಾನ, ಕೂಟಸ್ಥೆ, ಕುಲರೂಪಿಣಿ.',
          },
        },
        {
          n: 167,
          text: 'वीरगोष्ठीप्रिया वीरा नैष्कर्म्या नादरूपिणी ।\nविज्ञानकलना कल्या विदग्धा बैन्दवासना ॥',
          meaning: {
            en: 'She loves the company of heroic worshippers and is heroic herself; she is beyond action and is the form of nāda. She is the grasp of true knowledge, ever ready, skilful, and seated in the bindu.',
            kn: 'ವೀರರ ಗೋಷ್ಠಿ ಪ್ರಿಯವಾದವಳು, ವೀರೆ, ಕರ್ಮಾತೀತೆ, ನಾದರೂಪಿಣಿ. ವಿಜ್ಞಾನವನ್ನು ಗ್ರಹಿಸುವ ಶಕ್ತಿ, ಕಲ್ಯೆ, ವಿದಗ್ಧೆ, ಬಿಂದುವಿನಲ್ಲಿ ಆಸನವುಳ್ಳವಳು.',
          },
        },
        {
          n: 168,
          text: 'तत्त्वाधिका तत्त्वमयी तत्त्वमर्थस्वरूपिणी ।\nसामगानप्रिया सौम्या सदाशिवकुटुम्बिनी ॥',
          meaning: {
            en: 'She is beyond the tattvas and made of the tattvas, and is the meaning of tat and tvam (That and you). She loves the chanting of the Sāmaveda, is gentle, and is the consort of Sadāśiva.',
            kn: 'ತತ್ತ್ವಗಳನ್ನು ಮೀರಿದವಳು, ತತ್ತ್ವಮಯಿ, ತತ್ ಮತ್ತು ತ್ವಮ್ ಎಂಬ ಪದಗಳ ಅರ್ಥಸ್ವರೂಪಿಣಿ. ಸಾಮಗಾನಪ್ರಿಯೆ, ಸೌಮ್ಯೆ, ಸದಾಶಿವನ ಗೃಹಿಣಿ.',
          },
        },
        {
          n: 169,
          text: 'सव्यापसव्यमार्गस्था सर्वापद्विनिवारिणी ।\nस्वस्था स्वभावमधुरा धीरा धीरसमर्चिता ॥',
          meaning: {
            en: 'She abides in both the right-hand and the left-hand paths, and wards off every calamity. She rests in herself, is sweet by nature, steadfast, and worshipped by the steadfast.',
            kn: 'ದಕ್ಷಿಣ ಮತ್ತು ವಾಮ ಎರಡೂ ಮಾರ್ಗಗಳಲ್ಲಿ ಇರುವವಳು, ಎಲ್ಲ ಆಪತ್ತುಗಳನ್ನು ನಿವಾರಿಸುವವಳು. ತನ್ನಲ್ಲೇ ನೆಲೆಸಿದ ಸ್ವಸ್ಥೆ, ಸ್ವಭಾವದಿಂದಲೇ ಮಧುರಳು, ಧೀರೆ, ಧೀರರಿಂದ ಪೂಜಿತಳು.',
          },
        },
        {
          n: 170,
          text: 'चैतन्यार्घ्यसमाराध्या चैतन्यकुसुमप्रिया ।\nसदोदिता सदातुष्टा तरुणादित्यपाटला ॥',
          meaning: {
            en: 'She is worshipped with the offering of consciousness itself and loves the flower of consciousness. She is ever risen, ever content, and rosy like the rising sun.',
            kn: 'ಚೈತನ್ಯವೆಂಬ ಅರ್ಘ್ಯದಿಂದ ಆರಾಧಿಸಲ್ಪಡುವವಳು, ಚೈತನ್ಯವೆಂಬ ಹೂವು ಪ್ರಿಯವಾದವಳು. ಸದಾ ಉದಿತಳು, ಸದಾ ಸಂತುಷ್ಟಳು, ಉದಯಸೂರ್ಯನಂತೆ ಕೆಂಪಾದವಳು.',
          },
        },
        {
          n: 171,
          text: 'दक्षिणादक्षिणाराध्या दरस्मेरमुखाम्बुजा ।\nकौलिनीकेवलाऽनर्घ्यकैवल्यपददायिनी ॥',
          meaning: {
            en: 'She is worshipped by both the learned and the simple, and her lotus face blooms with a soft smile. She is Kaulinī-Kevalā, and grants the priceless state of liberation.',
            kn: 'ಜ್ಞಾನಿಗಳಿಂದಲೂ ಸಾಮಾನ್ಯರಿಂದಲೂ ಆರಾಧಿಸಲ್ಪಡುವವಳು, ಮಂದಹಾಸದಿಂದ ಅರಳಿದ ಮುಖಕಮಲವುಳ್ಳವಳು. ಕೌಲಿನೀ ಕೇವಲೆ, ಬೆಲೆಕಟ್ಟಲಾಗದ ಕೈವಲ್ಯಪದವನ್ನು ಕೊಡುವವಳು.',
          },
        },
        {
          n: 172,
          text: 'स्तोत्रप्रिया स्तुतिमती श्रुतिसंस्तुतवैभवा ।\nमनस्विनी मानवती महेशी मङ्गलाकृतिः ॥',
          meaning: {
            en: 'She loves hymns of praise and is the very spirit of praise; the Vedas extol her glory. She is high-minded, dignified, the great ruler, and auspicious in form.',
            kn: 'ಸ್ತೋತ್ರಪ್ರಿಯೆ, ಸ್ತುತಿಸ್ವರೂಪಿಣಿ, ಶ್ರುತಿಗಳಿಂದ ಸ್ತುತಿಸಲ್ಪಟ್ಟ ವೈಭವವುಳ್ಳವಳು. ಮನಸ್ವಿನೀ, ಮಾನವತಿ, ಮಹೇಶೀ, ಮಂಗಳಾಕಾರೆ.',
          },
        },
        {
          n: 173,
          text: 'विश्वमाता जगद्धात्री विशालाक्षी विरागिणी ।\nप्रगल्भा परमोदारा परामोदा मनोमयी ॥',
          meaning: {
            en: 'She is the mother of the universe and the nurse of the world, wide-eyed and free of attachment. She is bold, supremely generous, supreme joy, and of the nature of mind.',
            kn: 'ವಿಶ್ವಮಾತೆ, ಜಗತ್ತನ್ನು ಪೋಷಿಸುವವಳು, ವಿಶಾಲಾಕ್ಷಿ, ವಿರಾಗಿಣಿ. ಪ್ರಗಲ್ಭೆ, ಪರಮ ಉದಾರೆ, ಪರಮ ಆನಂದರೂಪಿಣಿ, ಮನೋಮಯಿ.',
          },
        },
        {
          n: 174,
          text: 'व्योमकेशी विमानस्था वज्रिणी वामकेश्वरी ।\nपञ्चयज्ञप्रिया पञ्चप्रेतमञ्चाधिशायिनी ॥',
          meaning: {
            en: 'The sky is her hair; she rides a celestial car, wields the thunderbolt, and is Vāmakeśvarī. She loves the five daily sacrifices, and reclines on the couch made of the five pretas.',
            kn: 'ಆಕಾಶವೇ ಕೇಶವಾದ ವ್ಯೋಮಕೇಶೀ, ವಿಮಾನದಲ್ಲಿ ಇರುವವಳು, ವಜ್ರವನ್ನು ಧರಿಸಿದವಳು, ವಾಮಕೇಶ್ವರೀ. ಪಂಚಮಹಾಯಜ್ಞಗಳು ಪ್ರಿಯವಾದವಳು, ಪಂಚಪ್ರೇತಗಳ ಮಂಚದ ಮೇಲೆ ಮಲಗಿರುವವಳು.',
          },
        },
        {
          n: 175,
          text: 'पञ्चमी पञ्चभूतेशी पञ्चसङ्ख्योपचारिणी ।\nशाश्वती शाश्वतैश्वर्या शर्मदा शम्भुमोहिनी ॥',
          meaning: {
            en: 'She is Pañcamī, the ruler of the five elements, worshipped with the five offerings. She is eternal, with everlasting sovereignty, the giver of happiness, and she enchants Śambhu.',
            kn: 'ಪಂಚಮೀ, ಪಂಚಭೂತಗಳ ಒಡತಿ, ಐದು ಉಪಚಾರಗಳಿಂದ ಪೂಜಿಸಲ್ಪಡುವವಳು. ಶಾಶ್ವತೆ, ಶಾಶ್ವತ ಐಶ್ವರ್ಯವುಳ್ಳವಳು, ಸುಖವನ್ನು ಕೊಡುವವಳು, ಶಂಭುವನ್ನು ಮೋಹಗೊಳಿಸುವವಳು.',
          },
        },
        {
          n: 176,
          text: 'धरा धरसुता धन्या धर्मिणी धर्मवर्धिनी ।\nलोकातीता गुणातीता सर्वातीता शमात्मिका ॥',
          meaning: {
            en: 'She is the Earth and the daughter of the mountain, blessed, righteous, and the increaser of dharma. She is beyond the worlds, beyond the guṇas, beyond everything, and peace itself.',
            kn: 'ಭೂಮಿರೂಪಳಾದ ಧರೆ, ಪರ್ವತರಾಜನ ಮಗಳು, ಧನ್ಯೆ, ಧರ್ಮಿಣಿ, ಧರ್ಮವನ್ನು ವೃದ್ಧಿಸುವವಳು. ಲೋಕಾತೀತೆ, ಗುಣಾತೀತೆ, ಸರ್ವಾತೀತೆ, ಶಾಂತಿಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 177,
          text: 'बन्धूककुसुमप्रख्या बाला लीलाविनोदिनी ।\nसुमङ्गली सुखकरी सुवेषाढ्या सुवासिनी ॥',
          meaning: {
            en: 'She is red like the bandhūka flower, the young girl Bālā, who delights in play. She is most auspicious, brings happiness, is beautifully dressed, and is a happy wife (suvāsinī).',
            kn: 'ಬಂಧೂಕ ಹೂವಿನಂತೆ ಕೆಂಪಾದವಳು, ಬಾಲೆ, ಲೀಲೆಯಲ್ಲಿ ಆನಂದಿಸುವವಳು. ಸುಮಂಗಲಿ, ಸುಖವನ್ನುಂಟುಮಾಡುವವಳು, ಸುಂದರ ವೇಷಭೂಷಣಗಳುಳ್ಳವಳು, ಸುವಾಸಿನಿ.',
          },
        },
        {
          n: 178,
          text: 'सुवासिन्यर्चनप्रीताऽऽशोभना शुद्धमानसा ।\nबिन्दुतर्पणसन्तुष्टा पूर्वजा त्रिपुराम्बिका ॥',
          meaning: {
            en: 'She is pleased by the worship of suvāsinīs, radiant on every side, and pure of mind. She is gratified by offerings into the bindu, is the first-born, and is Tripurāmbikā.',
            kn: 'ಸುವಾಸಿನಿಯರ ಪೂಜೆಯಿಂದ ಪ್ರೀತಳಾಗುವವಳು, ಎಲ್ಲೆಡೆ ಶೋಭಿಸುವವಳು, ಶುದ್ಧ ಮನಸ್ಸುಳ್ಳವಳು. ಬಿಂದುತರ್ಪಣದಿಂದ ಸಂತುಷ್ಟಳಾಗುವವಳು, ಎಲ್ಲರಿಗಿಂತ ಮೊದಲು ಹುಟ್ಟಿದ ಪೂರ್ವಜೆ, ತ್ರಿಪುರಾಂಬಿಕೆ.',
          },
        },
        {
          n: 179,
          text: 'दशमुद्रासमाराध्या त्रिपुराश्रीवशङ्करी ।\nज्ञानमुद्रा ज्ञानगम्या ज्ञानज्ञेयस्वरूपिणी ॥',
          meaning: {
            en: 'She is worshipped with the ten mudrās and holds Tripurāśrī under her sway. She is the gesture of knowledge (jñāna-mudrā), reached through knowledge, and is both knowledge and its object.',
            kn: 'ಹತ್ತು ಮುದ್ರೆಗಳಿಂದ ಆರಾಧಿಸಲ್ಪಡುವವಳು, ತ್ರಿಪುರಾಶ್ರೀಯನ್ನು ವಶದಲ್ಲಿರಿಸಿಕೊಂಡವಳು. ಜ್ಞಾನಮುದ್ರೆ, ಜ್ಞಾನದಿಂದ ತಿಳಿಯಲ್ಪಡುವವಳು, ಜ್ಞಾನ ಮತ್ತು ಜ್ಞೇಯ ಎರಡರ ಸ್ವರೂಪಿಣಿ.',
          },
        },
        {
          n: 180,
          text: 'योनिमुद्रा त्रिखण्डेशी त्रिगुणाऽम्बा त्रिकोणगा ।\nअनघाऽद्भुतचारित्रा वाञ्छितार्थप्रदायिनी ॥',
          meaning: {
            en: 'She is the yoni-mudrā, ruler of the three sections of the mantra, the three guṇas, the Mother, dwelling in the triangle. She is sinless, of wondrous deeds, and grants what is desired.',
            kn: 'ಯೋನಿಮುದ್ರೆ, ಮಂತ್ರದ ಮೂರು ಖಂಡಗಳ ಒಡತಿ, ತ್ರಿಗುಣೆ, ಅಂಬೆ, ತ್ರಿಕೋಣದಲ್ಲಿರುವವಳು. ಪಾಪರಹಿತೆ, ಅದ್ಭುತ ಚರಿತ್ರೆಯುಳ್ಳವಳು, ಬಯಸಿದ್ದನ್ನು ಕೊಡುವವಳು.',
          },
        },
        {
          n: 181,
          text: 'अभ्यासातिशयज्ञाता षडध्वातीतरूपिणी ।\nअव्याजकरुणामूर्तिरज्ञानध्वान्तदीपिका ॥',
          meaning: {
            en: 'She is known through intense, sustained practice, and her form transcends the six paths (ṣaḍadhvā). She is compassion that asks for no reason, and the lamp that dispels the darkness of ignorance.',
            kn: 'ತೀವ್ರವಾದ ನಿರಂತರ ಅಭ್ಯಾಸದಿಂದ ತಿಳಿಯಲ್ಪಡುವವಳು, ಆರು ಅಧ್ವಗಳನ್ನು ಮೀರಿದ ರೂಪವುಳ್ಳವಳು. ಯಾವ ಕಾರಣವನ್ನೂ ಬಯಸದ ಕರುಣೆಯ ಮೂರ್ತಿ, ಅಜ್ಞಾನದ ಕತ್ತಲೆಯನ್ನು ಹೋಗಲಾಡಿಸುವ ದೀಪ.',
          },
        },
        {
          n: 182,
          text: 'आबालगोपविदिता सर्वानुल्लङ्घ्यशासना ।\nश्रीचक्रराजनिलया श्रीमत्त्रिपुरसुन्दरी ॥',
          meaning: {
            en: 'She is known to all, even to children and cowherds, and no one can transgress her command. Her home is the Śrīcakra, the king of cakras; she is the glorious Tripurasundarī.',
            kn: 'ಮಕ್ಕಳು ಗೊಲ್ಲರವರೆಗೆ ಎಲ್ಲರಿಗೂ ತಿಳಿದವಳು, ಯಾರೂ ಮೀರಲಾಗದ ಆಜ್ಞೆಯುಳ್ಳವಳು. ಚಕ್ರಗಳ ರಾಜನಾದ ಶ್ರೀಚಕ್ರವೇ ಆಕೆಯ ನೆಲೆ; ಶ್ರೀಮತ್ ತ್ರಿಪುರಸುಂದರಿ.',
          },
        },
        {
          n: 183,
          text: 'श्रीशिवा शिवशक्त्यैक्यरूपिणी ललिताम्बिका ।\nएवं श्रीललितादेव्या नाम्नां साहस्रकं जगुः ॥',
          meaning: {
            en: 'She is Śrī Śivā, the oneness of Śiva and Śakti, Lalitāmbikā. Thus did they sing the thousand names of the goddess Śrī Lalitā.',
            kn: 'ಶ್ರೀಶಿವೆ, ಶಿವಶಕ್ತಿಯರ ಐಕ್ಯಸ್ವರೂಪಿಣಿ, ಲಲಿತಾಂಬಿಕೆ. ಹೀಗೆ ಶ್ರೀಲಲಿತಾದೇವಿಯ ಸಾವಿರ ನಾಮಗಳನ್ನು ಅವರು ಗಾನಮಾಡಿದರು.',
          },
        },
      ],
    },
    {
      titleEn: 'Conclusion',
      verses: [
        { text: 'इति श्रीब्रह्माण्डपुराणे उत्तरखण्डे श्रीहयग्रीवागस्त्यसंवादे\nश्रीललितासहस्रनामस्तोत्रकथनं नाम द्वितीयोऽध्यायः ॥' },
      ],
    },
  ],
};
