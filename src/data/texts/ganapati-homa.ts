/**
 * Mahaganapati Homa (Gana-homa): the whole rite in the order it is done, with the Common Procedure
 * (homa-purvanga) for the agnimukha and the uttaranga. Madhva and Smarta forms as variants.
 *
 * Sources:
 *  - Smarta (S2): "Mahaganapati Homah", Mylapore Vedadhyayana Sabha (E. Balasubrahmanya Sastri,
 *    Janbunatha Sastri, N. V. Nataraja Dikshitar; publ. A. Subbaraman; English by Sundararajan
 *    Subramanian), transcribed in vishvasa/vedAH_yajuH (taittirIyam/sUtram/ApastambaH/gRhyam/
 *    paddhatiH/mailApura-vedAdhyayana-sabhA/ganapati_homa): the complete Tamil Nadu prayoga —
 *    Vighneshvara puja, sankalpa, kalasha and kumbha, Mahaganapati in the kumbha with nyasa,
 *    dhyana and prana-pratishtha, shodashopachara puja, Apastamba agnimukha, puja in the fire,
 *    the pradhana homa (mula mantra, gaṇānāṃ tvā, the Ganesha Gayatri, vakratuṇḍa, durva, laja,
 *    the two coconut halves with jātavedase and dhruvāsu tvā), jaya etc., purnahuti, upasthana,
 *    punah-puja, tarpana, udvasana, abhisheka, raksha, samarpana; the eight materials and counts;
 *    "doing homa with the mantras of the Atharvashirsha".
 *  - Smarta: the Tamil "Sri Ganapati Homam" (Sri Vedachalam Sastri collection, archive.org
 *    zrjf_sri-ganapati-homam-sri-vedachalam-sastri-collection): sankalpa, the namo vrātapataye
 *    mantra, coconut and honey, raksha (a second witness for these).
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012, chapter "Gana-homa"
 *    (archive.org: 20230827_20230827_0721): the Apurita tantra of the Vinayakodaya, the eight
 *    materials and their verse, counting by coconuts, half for homa and half for naivedya,
 *    Vishvambhara within Ganapati.
 *  - Madhva: Tantrasara-sangraha 3.90-92 (Mysore 2003), the Vighnesha dhyana.
 *  - The Ganapati Atharvashirsha is copied from the app's text (collated there against
 *    stotranidhi, sa.wikisource and the Gita Press), each of its ten mantra sections ending in svaha.
 *  - Vedic verses checked against the Rigveda (GRETIL, Aufrecht): 1.24.11, 1.99.1, 2.23.1, 7.88.7,
 *    10.9.1-3, 10.59.6, 10.112.9; the Ganesha Gayatri tatpuruṣāya … is Mahanarayana Upanishad
 *    (Taittiriya Aranyaka 10.1); yo 'pāṃ puṣpam is Taittiriya Aranyaka 1.22, as in the app's
 *    Nitya Puja, from which the kalasha verses, the sixteen names, tambula and pradakshina verses
 *    are copied.
 */
import type { Mantra } from '../types';

export const ganapatiHoma: Mantra = {
  id: 'ganapati-homa',
  title: 'महागणपतिहोमः',
  titleEn: 'Mahaganapati Homa (Gana-homa)',
  category: 'homa',
  order: 2,
  deity: 'Ganapati',
  source: 'Smarta: Mylapore Vedadhyayana Sabha, Mahaganapati Homa; Tamil manual "Sri Ganapati Homam". Madhva: H. Satyanarayanacharya, Homa-Havana; Tantrasara-sangraha 3.90-92. Ganapati Atharvashirsha',
  summary: 'The Ganapati homa from start to end: the materials and counts, the sankalpa, (Smarta) the Vighneshvara puja, kalasha and kumbha, the invocation of Mahaganapati with nyasa, dhyana, mula mantra and prana-pratishtha and his puja; the agnimukha from the Common Procedure; Ganapati invoked in the fire; the main offerings of the eight materials with their mantras (the mula mantra, gananam tva, the Ganesha Gayatri, vakratunda, durva, puffed rice, the two coconut shells), the Ganapati Atharvashirsha section by section with svaha; the uttaranga; the closing puja, arati, mantrapushpa, pradakshina, tarpana, udvasana, tirtha and the prayer. Choose Madhva or Smarta at the top.',
  summaryKn: 'ಗಣಪತಿ ಹೋಮ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ದ್ರವ್ಯ–ಸಂಖ್ಯೆಗಳು, ಸಂಕಲ್ಪ, (ಸ್ಮಾರ್ತ) ವಿಘ್ನೇಶ್ವರಪೂಜೆ, ಕಲಶ–ಕುಂಭ, ನ್ಯಾಸ–ಧ್ಯಾನ–ಮೂಲಮಂತ್ರ–ಪ್ರಾಣಪ್ರತಿಷ್ಠೆಗಳೊಡನೆ ಮಹಾಗಣಪತಿ ಆವಾಹನೆ ಮತ್ತು ಪೂಜೆ; ಸಾಮಾನ್ಯ ಕ್ರಮದ ಅಗ್ನಿಮುಖ; ಅಗ್ನಿಯಲ್ಲಿ ಗಣಪತಿ ಆವಾಹನೆ; ಅಷ್ಟದ್ರವ್ಯಗಳ ಪ್ರಧಾನಾಹುತಿಗಳು ಮಂತ್ರಸಹಿತ (ಮೂಲಮಂತ್ರ, ಗಣಾನಾಂ ತ್ವಾ, ಗಣೇಶ ಗಾಯತ್ರಿ, ವಕ್ರತುಂಡ, ಗರಿಕೆ, ಅರಳು, ಎರಡು ಕಾಯಿಚಿಪ್ಪು), ಗಣಪತಿ ಅಥರ್ವಶೀರ್ಷ ಭಾಗಶಃ ಸ್ವಾಹಾಸಹಿತ; ಉತ್ತರಾಂಗ; ಸಮಾಪ್ತಿ ಪೂಜೆ, ಆರತಿ, ಮಂತ್ರಪುಷ್ಪ, ಪ್ರದಕ್ಷಿಣೆ, ತರ್ಪಣ, ಉದ್ವಾಸನ, ತೀರ್ಥ, ಪ್ರಾರ್ಥನೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಆರಿಸಿ.',
  variants: [
    {
      key: 'tradition',
      title: 'Tradition',
      titleKn: 'ಸಂಪ್ರದಾಯ',
      options: [
        { id: 'madhva', label: 'Madhva', labelKn: 'ಮಾಧ್ವ' },
        { id: 'smarta', label: 'Smarta', labelKn: 'ಸ್ಮಾರ್ತ' },
      ],
    },
  ],
  difficulty: 'advanced',
  completeness: 'complete',
  contentNote: 'The whole homa in order, with the agnimukha and uttaranga in “Homa: Common Procedure”, to which the steps here send you. The Smarta form follows the printed Mylapore Vedadhyayana Sabha prayoga (Tamil Nadu); its mula mantra is an upadesha mantra, printed here as the open manuals give it, to be learnt from your guru. The Madhva form follows Homa-Havana (the Apurita tantra, without pranita, Brahma, idhma, chakshushi or svishtakrit); the Madhva offering mantra is the Vighnesha mantra of the Tantrasara taken from the guru, which is not printed, and Madhva manuals do not use the Atharvashirsha. Homas are traditionally done with a trained priest; follow your family manual where it differs.',
  sections: [
    {
      title: 'गणहोमविधानम्',
      titleEn: 'What the Gana-homa is and how large to make it',
      note: 'Ganapati is worshipped first in every undertaking, so the Gana-homa is done before long rites, at the start of anything new, on Chaturthi, and once a year in many homes; in Kerala and the coast at dawn, in Tamil Nadu after sunrise (Homa-Havana; Mylapore manual). Materials, the ashtadravya: modakas, puffed rice, beaten rice, roasted flour (sattu), sugarcane, coconut (Mylapore: in thin slices), sesame and bananas, mixed with jaggery, honey and ghee (and milk, Mylapore). Madhva (Homa-Havana): count by coconuts — one coconut, four oblations; 1, 3, 6, 12, 48, 108, 1008 or more coconuts; for each coconut eight modakas, eight handfuls each of puffed rice, beaten rice and roasted flour, eight pieces of sugarcane, eight bananas, a kudava of black sesame, half a kudte each of ghee and honey and jaggery as large as a coconut; half the mixture for homa, half for naivedya; the skins are thrown into the fire. Smarta (Mylapore): 28, 108 or 1008 offerings a day, or in fours (44, 444); a third of the mixture is kept for the main naivedya. Also keep a kalasha, a small image or coin for Mahaganapati, turmeric for a Ganapati image, durva grass, flowers, two coconuts for the shells, a silk cloth and coconut or fruit for the purnahuti. The Madhva form follows the Apurita tantra: no pranita vessel, no Brahma, no idhma, no chakshushi and no svishtakrit.',
      noteKn: 'ಎಲ್ಲ ಕಾರ್ಯಗಳ ಆರಂಭದಲ್ಲಿ ಗಣಪತಿ ಪೂಜ್ಯ; ಆದ್ದರಿಂದ ದೀರ್ಘ ಕರ್ಮಗಳ ಮೊದಲು, ಹೊಸ ಕಾರ್ಯದ ಆರಂಭದಲ್ಲಿ, ಚತುರ್ಥಿಯಂದು, ಅನೇಕ ಮನೆಗಳಲ್ಲಿ ವರ್ಷಕ್ಕೊಮ್ಮೆ ಗಣಹೋಮ; ಕೇರಳ–ಕರಾವಳಿಯಲ್ಲಿ ಉಷಃಕಾಲದಲ್ಲಿ, ತಮಿಳುನಾಡಿನಲ್ಲಿ ಸೂರ್ಯೋದಯದ ನಂತರ (ಹೋಮ–ಹವನ; ಮೈಲಾಪುರ ಗ್ರಂಥ). ಅಷ್ಟದ್ರವ್ಯ: ಮೋದಕ, ಅರಳು, ಅವಲಕ್ಕಿ, ಅರಳಿಟ್ಟು (ಸಕ್ತು), ಕಬ್ಬು, ತೆಂಗಿನಕಾಯಿ (ಮೈಲಾಪುರ: ತೆಳು ಚೂರುಗಳು), ಎಳ್ಳು, ಬಾಳೆಹಣ್ಣು — ಬೆಲ್ಲ, ಜೇನು, ತುಪ್ಪ (ಮೈಲಾಪುರ: ಹಾಲು ಕೂಡ) ಸೇರಿಸಿ ಕಲಸಿ. ಮಾಧ್ವ (ಹೋಮ–ಹವನ): ಕಾಯಿ ಲೆಕ್ಕ — ಒಂದು ಕಾಯಿಗೆ ನಾಲ್ಕು ಆಹುತಿ; ೧, ೩, ೬, ೧೨, ೪೮, ೧೦೮, ೧೦೦೮ ಅಥವಾ ಹೆಚ್ಚು ಕಾಯಿಗಳು; ಒಂದು ಕಾಯಿಗೆ ಎಂಟು ಮೋದಕ, ಅರಳು–ಅವಲಕ್ಕಿ–ಅರಳಿಟ್ಟು ಎಂಟೆಂಟು ಮುಷ್ಟಿ, ಎಂಟು ಕಬ್ಬಿನ ತುಂಡು, ಎಂಟು ಬಾಳೆಹಣ್ಣು, ಒಂದು ಕುಡವ ಕರಿಎಳ್ಳು, ಅರ್ಧ ಕುಡ್ತೆ ತುಪ್ಪ, ಅಷ್ಟೇ ಜೇನು, ಕಾಯಿಯಷ್ಟು ಬೆಲ್ಲ; ಅರ್ಧ ಹೋಮಕ್ಕೆ, ಅರ್ಧ ನೈವೇದ್ಯಕ್ಕೆ; ಸಿಪ್ಪೆ–ಚಿಪ್ಪುಗಳನ್ನು ಅಗ್ನಿಗೆ. ಸ್ಮಾರ್ತ (ಮೈಲಾಪುರ): ದಿನಕ್ಕೆ ೨೮, ೧೦೮ ಅಥವಾ ೧೦೦೮ ಆಹುತಿ, ಅಥವಾ ನಾಲ್ಕರ ಕ್ರಮದಲ್ಲಿ (೪೪, ೪೪೪); ಮಿಶ್ರಣದ ಮೂರನೆಯ ಒಂದು ಭಾಗ ಪ್ರಧಾನ ನೈವೇದ್ಯಕ್ಕೆ. ಕಲಶ, ಮಹಾಗಣಪತಿಗೆ ಚಿಕ್ಕ ಪ್ರತಿಮೆ ಅಥವಾ ನಾಣ್ಯ, ಅರಿಶಿನದ ಗಣಪತಿ, ಗರಿಕೆ, ಹೂವು, ಚಿಪ್ಪಿಗಾಗಿ ತೆಂಗಿನಕಾಯಿ, ಪೂರ್ಣಾಹುತಿಗೆ ರೇಷ್ಮೆ ವಸ್ತ್ರ ಮತ್ತು ಕಾಯಿ/ಫಲ ಸಿದ್ಧಪಡಿಸಿ. ಮಾಧ್ವ ರೂಪ ಆಪೂರಿತ ತಂತ್ರದಂತೆ: ಪ್ರಣೀತಾ, ಬ್ರಹ್ಮ, ಇಧ್ಮ, ಚಕ್ಷುಷೀ, ಸ್ವಿಷ್ಟಕೃತ್ ಇಲ್ಲ.',
      verses: [
        {
          text: 'न प्रणीता न च ब्रह्मा न चेध्मं न च चक्षुषी ।\nन च स्विष्टकृदादीनि विघ्नशङ्करयागयोः ॥',
          meaning: {
            en: 'In the Ganapati rite and the Shankara rite there is no pranita vessel, no Brahma priest, no idhma, no two chakshushi oblations and no svishtakrit and the like. (Vinayakodaya of the Vasishtha Samhita, as quoted in Homa-Havana)',
            kn: 'ವಿಘ್ನೇಶ್ವರ ಮತ್ತು ಶಂಕರ ಯಾಗಗಳಲ್ಲಿ ಪ್ರಣೀತಾ ಪಾತ್ರೆ, ಬ್ರಹ್ಮ, ಇಧ್ಮ, ಚಕ್ಷುಷೀ ಹೋಮಗಳು ಮತ್ತು ಸ್ವಿಷ್ಟಕೃತ್ ಮೊದಲಾದವು ಇರುವುದಿಲ್ಲ. (ವಾಸಿಷ್ಠಸಂಹಿತೆಯ ವಿನಾಯಕೋದಯ; ಹೋಮ–ಹವನದಲ್ಲಿ ಉಲ್ಲೇಖ)',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Ganapati smarana and the sankalpa',
      note: 'Do achamana, pranayama and the deshakala as in the Common Procedure (section “Achamana, pranayama and the time and place”). Remember Ganapati with नि षु सीद…, then make the sankalpa of the Gana-homa, naming the number of coconuts. Let the water fall into the plate. Then set the kalasha as in the Common Procedure.',
      noteKn: 'ಸಾಮಾನ್ಯ ವಿಧಿಯಲ್ಲಿರುವಂತೆ ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ದೇಶಕಾಲ ಹೇಳಿ. “ನಿ ಷು ಸೀದ…” ಎಂದು ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸಿ, ಕಾಯಿಗಳ ಸಂಖ್ಯೆ ಹೇಳಿ ಗಣಹೋಮದ ಸಂಕಲ್ಪ ಮಾಡಿ; ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ನಂತರ ಸಾಮಾನ್ಯ ವಿಧಿಯಂತೆ ಕಲಶ ಸ್ಥಾಪನೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'नि षु सीद गणपते गणेषु त्वामाहुर्विप्रतमं कवीनाम् ।\nन ऋते त्वत्क्रियते किं चनारे महामर्कं मघवञ्चित्रमर्च ॥',
          meaning: {
            en: 'Be seated, O lord of hosts, among your hosts; they call you the wisest of seers. Nothing near or far is done without you; O bountiful one, honour our great and wonderful hymn. (Rigveda 10.112.9, said to the Lord before the puja.)',
            kn: 'ಓ ಗಣಪತಿಯೇ (ಸಮೂಹಗಳ ಒಡೆಯನೇ), ನಿನ್ನ ಗಣಗಳ ನಡುವೆ ಕುಳಿತುಕೋ; ಕವಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠ ಜ್ಞಾನಿ ನೀನೆಂದು ಹೇಳುತ್ತಾರೆ. ನಿನ್ನನ್ನು ಬಿಟ್ಟು ಹತ್ತಿರದಲ್ಲಾಗಲೀ ದೂರದಲ್ಲಾಗಲೀ ಏನೂ ನಡೆಯುವುದಿಲ್ಲ; ನಮ್ಮ ಈ ಮಹತ್ತಾದ ಸ್ತುತಿಯನ್ನು ಆದರಿಸು. (ಋಗ್ವೇದ ೧೦.೧೧೨.೯; ಪೂಜೆಗೆ ಮೊದಲು ಭಗವಂತನ ಪ್ರಾರ್ಥನೆ.)',
          },
        },
        {
          text: 'यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थं\nगणपत्यन्तर्गतविश्वम्भरप्रीत्यर्थं निर्विघ्नतासिद्ध्यर्थम्\nअमुकसङ्ख्याकनारिकेलैः अष्टद्रव्यैः गणहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
          meaning: {
            en: 'Prompted by Sri Parashurama, Lord of Harini, who dwells within Mukhyaprana, beloved of Bharati, the inner ruler of the Yajnapurusha, and for his pleasure, for the pleasure of Vishvambhara within Ganapati and that the work may be free of obstacles, I shall perform the Gana-homa with the eight materials and so many coconuts; as its part I shall prepare the sthandila and install the fire. (The sankalpa of the Common Procedure with the name and count of the Gana-homa; Homa-Havana gives the count by coconuts and Vishvambhara within Ganapati.)',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ, ಯಜ್ಞಪುರುಷಾಂತರ್ಯಾಮಿ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಗಣಪತಿಯೊಳಗಿನ ವಿಶ್ವಂಭರನ ಪ್ರೀತಿಗಾಗಿ, ನಿರ್ವಿಘ್ನತೆಗಾಗಿ ಇಷ್ಟು ಕಾಯಿಗಳ ಅಷ್ಟದ್ರವ್ಯಗಳಿಂದ ಗಣಹೋಮವೆಂಬ ಕರ್ಮ ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ, ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ. (ಗಣಹೋಮದ ಹೆಸರು–ಸಂಖ್ಯೆಯೊಡನೆ ಸಾಮಾನ್ಯ ವಿಧಿಯ ಸಂಕಲ್ಪ; ಕಾಯಿ ಲೆಕ್ಕ ಮತ್ತು ವಿಶ್ವಂಭರ ಹೋಮ–ಹವನದಿಂದ.)',
          },
        },
      ],
    },
    {
      title: 'विघ्नेश्वरपूजा',
      titleEn: 'Vighneshvara puja (turmeric Ganapati)',
      note: 'After snana, sandhyavandane and aupasana, wear the pavitra, light the lamp and bow to the elders. Sit with akshata in the hand, recite शुक्लाम्बरधरं… tapping the temples, and say the short sankalpa for the Vighneshvara puja. Make a small Ganapati of turmeric paste, invoke him into it with गणानां त्वा…, and worship him with the upacharas, offering akshata in place of clothes and ornaments, flowers with the sixteen names, a broken coconut and bananas as naivedya, betel, camphor, and pray. Those who do the homa every month may skip this puja (Mylapore manual).',
      noteKn: 'ಸ್ನಾನ, ಸಂಧ್ಯಾವಂದನೆ, ಔಪಾಸನ ಮುಗಿಸಿ ಪವಿತ್ರ ಧರಿಸಿ, ದೀಪ ಹಚ್ಚಿ, ಹಿರಿಯರಿಗೆ ನಮಸ್ಕರಿಸಿ. ಅಕ್ಷತೆ ಹಿಡಿದು ಕುಳಿತು “ಶುಕ್ಲಾಂಬರಧರಂ…” ಎಂದು ಹಣೆಯ ಪಕ್ಕ ತಟ್ಟಿಕೊಂಡು, ವಿಘ್ನೇಶ್ವರಪೂಜೆಯ ಸಂಕ್ಷಿಪ್ತ ಸಂಕಲ್ಪ ಮಾಡಿ. ಅರಿಶಿನದ ಚಿಕ್ಕ ಗಣಪತಿಯನ್ನು ಮಾಡಿ “ಗಣಾನಾಂ ತ್ವಾ…” ಎಂದು ಆವಾಹಿಸಿ, ಉಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ — ವಸ್ತ್ರ–ಆಭರಣಗಳ ಬದಲು ಅಕ್ಷತೆ, ಹದಿನಾರು ನಾಮಗಳಿಂದ ಹೂವು, ಒಡೆದ ಕಾಯಿ–ಬಾಳೆಹಣ್ಣು ನೈವೇದ್ಯ, ತಾಂಬೂಲ, ಕರ್ಪೂರ, ಪ್ರಾರ್ಥನೆ. ಪ್ರತಿ ತಿಂಗಳೂ ಹೋಮ ಮಾಡುವವರು ಈ ಪೂಜೆಯನ್ನು ಬಿಡಬಹುದು (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत्सर्वविघ्नोपशान्तये ॥',
          meaning: {
            en: 'To remove all obstacles, one should meditate on the all-pervading one clad in white, moon-coloured, four-armed, with a gracious face.',
            kn: 'ಎಲ್ಲಾ ವಿಘ್ನಗಳ ಶಾಂತಿಗಾಗಿ, ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಚಂದ್ರನಂತೆ ಬಿಳುಪಾದ, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳ, ಪ್ರಸನ್ನಮುಖನಾದ ಸರ್ವವ್ಯಾಪಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nकरिष्यमाणस्य कर्मणः अविघ्नेन परिसमाप्त्यर्थम् आदौ विघ्नेश्वरपूजां करिष्ये ॥',
          meaning: {
            en: 'For the removal of all my accumulated sins and for the pleasure of the Supreme Lord, that the rite I am about to do may be completed without obstacle, I shall first worship Vighneshvara. (Mylapore manual.)',
            kn: 'ನನ್ನ ಸಂಚಿತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ಮಾಡಲಿರುವ ಕರ್ಮವು ನಿರ್ವಿಘ್ನವಾಗಿ ಮುಗಿಯಲೆಂದು ಮೊದಲು ವಿಘ್ನೇಶ್ವರಪೂಜೆ ಮಾಡುತ್ತೇನೆ. (ಮೈಲಾಪುರ ಗ್ರಂಥ)',
          },
        },
        {
          text: 'गणानां त्वा गणपतिं हवामहे कविं कवीनामुपमश्रवस्तमम् ।\nज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आ नः शृण्वन्नूतिभिः सीद सादनम् ॥',
          meaning: {
            en: 'We call you, lord of the hosts, the poet of poets, most renowned of the renowned, the eldest king of prayers, O Brahmanaspati: come to us, listening, with your helps, and take your seat. (Rigveda 2.23.1)',
            kn: 'ಗಣಗಳ ಒಡೆಯನೇ, ಕವಿಗಳಲ್ಲಿ ಕವಿಯೇ, ಅತಿ ಕೀರ್ತಿಶಾಲಿಯೇ, ಮಂತ್ರಗಳಲ್ಲಿ ಜ್ಯೇಷ್ಠರಾಜನೇ, ಬ್ರಹ್ಮಣಸ್ಪತಿಯೇ, ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇವೆ: ಕೇಳುತ್ತಾ, ನಿನ್ನ ರಕ್ಷಣೆಗಳೊಡನೆ ನಮ್ಮ ಬಳಿ ಬಂದು ಆಸನದಲ್ಲಿ ಕುಳಿತುಕೋ. (ಋಗ್ವೇದ ೨.೨೩.೧)',
          },
        },
        {
          text: 'ॐ भूर्भुवः सुवरोम् । अस्मिन् हरिद्राबिम्बे विघ्नेश्वरं ध्यायामि । विघ्नेश्वरम् आवाहयामि ॥\nविघ्नेश्वराय नमः । आसनं समर्पयामि । पाद्यं समर्पयामि । अर्घ्यं समर्पयामि ।\nआचमनीयं समर्पयामि । स्नानं समर्पयामि । स्नानानन्तरम् आचमनीयं समर्पयामि ।\nवस्त्रार्थम् अक्षतान् समर्पयामि । उपवीतार्थम् अक्षतान् समर्पयामि । आभरणार्थम् अक्षतान् समर्पयामि ।\nगन्धान् धारयामि । गन्धोपरि हरिद्राकुङ्कुमं समर्पयामि । अक्षतान् समर्पयामि ।\nपुष्पमालां समर्पयामि । पुष्पैः पूजयामि ॥',
          meaning: {
            en: 'Om, earth, sky, heaven. I meditate on Vighneshvara in this turmeric image; I invoke Vighneshvara. Salutation to Vighneshvara: I offer a seat, water for the feet, water for the hands, water to sip, a bath, water to sip after the bath; akshata for clothes, for the sacred thread and for ornaments; I apply sandal paste, turmeric and kumkum on it, akshata, a garland; I worship with flowers.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸುವರೋಮ್. ಈ ಅರಿಶಿನದ ಬಿಂಬದಲ್ಲಿ ವಿಘ್ನೇಶ್ವರನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇನೆ, ಆವಾಹಿಸುತ್ತೇನೆ. ವಿಘ್ನೇಶ್ವರನಿಗೆ ನಮಸ್ಕಾರ: ಆಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, ಸ್ನಾನ, ಸ್ನಾನಾನಂತರ ಆಚಮನ; ವಸ್ತ್ರ, ಉಪವೀತ, ಆಭರಣಗಳ ಬದಲು ಅಕ್ಷತೆ; ಗಂಧ, ಅದರ ಮೇಲೆ ಅರಿಶಿನ–ಕುಂಕುಮ, ಅಕ್ಷತೆ, ಹೂಮಾಲೆ ಅರ್ಪಿಸುತ್ತೇನೆ; ಹೂವುಗಳಿಂದ ಪೂಜಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ सुमुखाय नमः । ॐ एकदन्ताय नमः । ॐ कपिलाय नमः । ॐ गजकर्णकाय नमः ।\nॐ लम्बोदराय नमः । ॐ विकटाय नमः । ॐ विघ्नराजाय नमः । ॐ विनायकाय नमः ।\nॐ धूमकेतवे नमः । ॐ गणाध्यक्षाय नमः । ॐ फालचन्द्राय नमः । ॐ गजाननाय नमः ।\nॐ वक्रतुण्डाय नमः । ॐ शूर्पकर्णाय नमः । ॐ हेरम्बाय नमः । ॐ स्कन्दपूर्वजाय नमः ॥',
          meaning: {
            en: 'The sixteen names of Ganesha — Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnaraja, Vinayaka, Dhumaketu, Ganadhyaksha, Phalachandra, Gajanana, Vakratunda, Shurpakarna, Heramba, Skandapurvaja — with a flower or durva for each.',
            kn: 'ಗಣಪತಿಯ ಹದಿನಾರು ನಾಮಗಳು — ಸುಮುಖ, ಏಕದಂತ, ಕಪಿಲ, ಗಜಕರ್ಣಕ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ವಿನಾಯಕ, ಧೂಮಕೇತು, ಗಣಾಧ್ಯಕ್ಷ, ಫಾಲಚಂದ್ರ, ಗಜಾನನ, ವಕ್ರತುಂಡ, ಶೂರ್ಪಕರ್ಣ, ಹೇರಂಬ, ಸ್ಕಂದಪೂರ್ವಜ — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹೂವು ಅಥವಾ ಗರಿಕೆ ಅರ್ಪಿಸಿ.',
          },
        },
        {
          text: 'धूपदीपार्थम् अक्षतान् समर्पयामि ।\nविघ्नेश्वराय नमः । नालिकेरखण्डद्वयं कदलीफलानि अमृतं सर्वं निवेदयामि ।\nकर्पूरताम्बूलं समर्पयामि । कर्पूरनीराजनं समर्पयामि ।\nमन्त्रपुष्पं समर्पयामि । स्वर्णपुष्पं समर्पयामि । समस्तोपचारान् समर्पयामि ॥',
          meaning: {
            en: 'I offer akshata for incense and lamp. Salutation to Vighneshvara: I offer the two halves of a coconut, bananas and all this nectar as naivedya; camphor and betel, the camphor flame, the mantra-flower, a golden flower (a coin), and all the honours. (Before the naivedya the place is sprinkled with the Gayatri and the pranahuti mantras are said, as in the main puja below.)',
            kn: 'ಧೂಪ–ದೀಪಗಳ ಬದಲು ಅಕ್ಷತೆ. ವಿಘ್ನೇಶ್ವರನಿಗೆ ನಮಸ್ಕಾರ: ಎರಡು ಕಾಯಿಹೋಳು, ಬಾಳೆಹಣ್ಣು, ಈ ಅಮೃತವನ್ನೆಲ್ಲ ನೈವೇದ್ಯವಾಗಿ; ಕರ್ಪೂರ–ತಾಂಬೂಲ, ಕರ್ಪೂರ ನೀರಾಜನ, ಮಂತ್ರಪುಷ್ಪ, ಸ್ವರ್ಣಪುಷ್ಪ (ನಾಣ್ಯ), ಸಮಸ್ತ ಉಪಚಾರಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ. (ನೈವೇದ್ಯಕ್ಕೆ ಮೊದಲು ಗಾಯತ್ರಿಯಿಂದ ಪ್ರೋಕ್ಷಣೆ, ಪ್ರಾಣಾಹುತಿ ಮಂತ್ರಗಳು — ಕೆಳಗಿನ ಮುಖ್ಯ ಪೂಜೆಯಂತೆ.)',
          },
        },
        {
          text: 'वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ ।\nअविघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
          meaning: {
            en: 'O curved-trunked one of mighty body, bright as ten million suns, O god, make all my undertakings always free of obstacles.',
            kn: 'ಓ ವಕ್ರತುಂಡನೇ, ಮಹಾಕಾಯನೇ, ಕೋಟಿಸೂರ್ಯರ ಪ್ರಭೆಯುಳ್ಳವನೇ, ದೇವನೇ, ನನ್ನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನೂ ಸದಾ ನಿರ್ವಿಘ್ನಗೊಳಿಸು.',
          },
        },
        {
          text: 'सुमुखश्चैकदन्तश्च कपिलो गजकर्णकः ।\nलम्बोदरश्च विकटो विघ्नराजो विनायकः ॥\nधूमकेतुर्गणाध्यक्षः फालचन्द्रो गजाननः ।\nवक्रतुण्डः शूर्पकर्णो हेरम्बः स्कन्दपूर्वजः ॥\nषोडशैतानि नामानि यः पठेच्छृणुयादपि ।\nविद्यारम्भे विवाहे च प्रवेशे निर्गमे तथा ।\nसङ्ग्रामे सर्वकार्येषु विघ्नस्तस्य न जायते ॥',
          meaning: {
            en: 'Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnaraja, Vinayaka, Dhumaketu, Ganadhyaksha, Phalachandra, Gajanana, Vakratunda, Shurpakarna, Heramba and Skandapurvaja: whoever reads or hears these sixteen names at the start of learning, at a wedding, on entering or leaving, in battle and in every undertaking meets no obstacle.',
            kn: 'ಸುಮುಖ, ಏಕದಂತ, ಕಪಿಲ, ಗಜಕರ್ಣಕ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ವಿನಾಯಕ, ಧೂಮಕೇತು, ಗಣಾಧ್ಯಕ್ಷ, ಫಾಲಚಂದ್ರ, ಗಜಾನನ, ವಕ್ರತುಂಡ, ಶೂರ್ಪಕರ್ಣ, ಹೇರಂಬ, ಸ್ಕಂದಪೂರ್ವಜ — ಈ ಹದಿನಾರು ನಾಮಗಳನ್ನು ವಿದ್ಯಾರಂಭ, ವಿವಾಹ, ಪ್ರವೇಶ, ನಿರ್ಗಮ, ಯುದ್ಧ ಮತ್ತು ಎಲ್ಲ ಕಾರ್ಯಗಳಲ್ಲಿ ಓದುವವನಿಗೂ ಕೇಳುವವನಿಗೂ ವಿಘ್ನವಾಗುವುದಿಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa of the Mahaganapati homa',
      note: 'Sit on darbha with darbha in the hand, remember Ganapati, do pranayama, say the deshakala (Common Procedure) and then this sankalpa with your nakshatra, rashi and name; the brahmins, asked for permission (anujna) with the same words, answer योग्यतासिद्धिरस्तु. Then move the turmeric Ganapati a little to the north (अस्माद्धरिद्राबिम्बाद्विघ्नेश्वरं यथास्थानं प्रतिष्ठापयामि), give a dakshina for the nine planets, choose the acharya (मया सङ्कल्पितमहागणपतिहोमकर्मणि सकलकर्म कर्तुम् आचार्यं त्वां वृणे) and the assisting brahmins (Mylapore manual).',
      noteKn: 'ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತು ಕೈಯಲ್ಲಿ ದರ್ಭೆ ಧರಿಸಿ, ಗಣಪತಿಸ್ಮರಣೆ, ಪ್ರಾಣಾಯಾಮ, ದೇಶಕಾಲ (ಸಾಮಾನ್ಯ ವಿಧಿ) ಹೇಳಿ, ನಂತರ ನಿಮ್ಮ ನಕ್ಷತ್ರ, ರಾಶಿ, ಹೆಸರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ; ಇದೇ ಮಾತುಗಳಿಂದ ಅನುಜ್ಞೆ ಕೇಳಿದಾಗ ಬ್ರಾಹ್ಮಣರು “ಯೋಗ್ಯತಾಸಿದ್ಧಿರಸ್ತು” ಎನ್ನುತ್ತಾರೆ. ನಂತರ ಅರಿಶಿನದ ಗಣಪತಿಯನ್ನು ಸ್ವಲ್ಪ ಉತ್ತರಕ್ಕೆ ಸರಿಸಿ (ಅಸ್ಮಾದ್ಧರಿದ್ರಾಬಿಂಬಾದ್ವಿಘ್ನೇಶ್ವರಂ ಯಥಾಸ್ಥಾನಂ ಪ್ರತಿಷ್ಠಾಪಯಾಮಿ), ನವಗ್ರಹಗಳಿಗೆ ದಕ್ಷಿಣೆ ಕೊಟ್ಟು, ಆಚಾರ್ಯವರಣ (ಮಯಾ ಸಂಕಲ್ಪಿತ ಮಹಾಗಣಪತಿಹೋಮಕರ್ಮಣಿ ಸಕಲಕರ್ಮ ಕರ್ತುಮ್ ಆಚಾರ್ಯಂ ತ್ವಾಂ ವೃಣೇ) ಮತ್ತು ಸಹಾಯಕ ಬ್ರಾಹ್ಮಣರ ವರಣ ಮಾಡಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nअमुकनक्षत्रे अमुकराशौ जातस्य अमुकशर्मणः मम सहकुटुम्बस्य\nक्षेमस्थैर्यवीर्यविजयायुरारोग्यैश्वर्याभिवृद्ध्यर्थं धनधान्यसमृद्ध्यर्थं सर्वत्र विजयाप्त्यर्थं\nसकलविधारिष्टनिवृत्त्यर्थं समस्तसन्मङ्गलाभिवृद्ध्यर्थं महागणपतिप्रसादसिद्ध्यर्थं\nमहागणपतिप्रसादेन सकलबाधानिवृत्तिद्वारा चिन्तितमनोरथावाप्त्यर्थं सर्वाभीष्टसिद्ध्यर्थम्\nनालिकेरादिद्रव्यैः यथासम्भवं यथामति मूलमन्त्रेण श्रीमहागणपतिहोमाख्यं कर्म करिष्ये ।\nतदङ्गं कलशादिपूजां करिष्ये ॥',
          meaning: {
            en: 'For the removal of all my sins and the pleasure of the Supreme Lord; for myself, so-and-so, born in such a nakshatra and rashi, and my family: for the increase of well-being, steadiness, valour, victory, long life, health and prosperity, for plenty of wealth and grain, for victory everywhere, for the removal of every kind of misfortune, for the increase of all good things, for the grace of Mahaganapati and, by his grace, for the removal of all hindrances and the fulfilment of the wishes in my mind and of all desires: I shall perform the rite called the Mahaganapati homa with coconut and the other materials, as far as I can and as I know, with the mula mantra; as its part I shall worship the kalasha. (Mylapore manual; the Tamil Ganapati Homam has the same in brief.)',
            kn: 'ನನ್ನ ಪಾಪಕ್ಷಯದ ಮೂಲಕ ಪರಮೇಶ್ವರಪ್ರೀತಿಗಾಗಿ; ಇಂತಹ ನಕ್ಷತ್ರ–ರಾಶಿಯಲ್ಲಿ ಜನಿಸಿದ ಇಂತಹ ಹೆಸರಿನ ನನಗೂ ನನ್ನ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವೀರ್ಯ, ವಿಜಯ, ಆಯುಸ್ಸು, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ಅಭಿವೃದ್ಧಿಗಾಗಿ, ಧನಧಾನ್ಯ ಸಮೃದ್ಧಿಗಾಗಿ, ಎಲ್ಲೆಡೆ ವಿಜಯಕ್ಕಾಗಿ, ಎಲ್ಲ ಬಗೆಯ ಅರಿಷ್ಟ ನಿವಾರಣೆಗಾಗಿ, ಸಮಸ್ತ ಮಂಗಳಾಭಿವೃದ್ಧಿಗಾಗಿ, ಮಹಾಗಣಪತಿ ಪ್ರಸಾದಕ್ಕಾಗಿ, ಅವನ ಪ್ರಸಾದದಿಂದ ಎಲ್ಲ ಬಾಧೆಗಳ ನಿವಾರಣೆಯ ಮೂಲಕ ಮನಸ್ಸಿನ ಇಷ್ಟಾರ್ಥ ಸಿದ್ಧಿಗಾಗಿ, ಸರ್ವಾಭೀಷ್ಟ ಸಿದ್ಧಿಗಾಗಿ ತೆಂಗಿನಕಾಯಿ ಮುಂತಾದ ದ್ರವ್ಯಗಳಿಂದ ಯಥಾಶಕ್ತಿ ಯಥಾಮತಿ ಮೂಲಮಂತ್ರದಿಂದ ಶ್ರೀಮಹಾಗಣಪತಿ ಹೋಮವೆಂಬ ಕರ್ಮ ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಕಲಶಾದಿ ಪೂಜೆ ಮಾಡುತ್ತೇನೆ. (ಮೈಲಾಪುರ ಗ್ರಂಥ)',
          },
        },
      ],
    },
    {
      title: 'कलशपूजा कुम्भस्थापनं च',
      titleEn: 'Kalasha puja and setting up the kumbha',
      note: 'Purify a small vessel of water with the kalasha verses and the bell verse and sprinkle yourself and the materials. On a square washed with cow dung spread paddy, rice, black gram and sesame, draw a lotus, lay darbha with tips east, and set the kumbha (gold, silver, copper, brass or pancaloha); fill it with water, put in a coin, a kurcha, mango leaves and a turmeric-smeared coconut, touch it and invite Varuna with इमं मे वरुण… and तत्त्वा यामि… (Mylapore manual; it also gives the lines of the base and the filling with their Vedic formulas, which the purohita says).',
      noteKn: 'ಕಲಶ ಶ್ಲೋಕಗಳು ಮತ್ತು ಘಂಟಾಶ್ಲೋಕದಿಂದ ಚಿಕ್ಕ ಪಾತ್ರೆಯ ನೀರನ್ನು ಶುದ್ಧಗೊಳಿಸಿ ತನಗೂ ದ್ರವ್ಯಗಳಿಗೂ ಪ್ರೋಕ್ಷಿಸಿ. ಗೋಮಯದಿಂದ ಸಾರಿಸಿದ ಚೌಕದಲ್ಲಿ ಭತ್ತ, ಅಕ್ಕಿ, ಉದ್ದು, ಎಳ್ಳು ಹರಡಿ, ಪದ್ಮ ಬರೆದು, ತುದಿ ಪೂರ್ವಕ್ಕಿರುವ ದರ್ಭೆ ಹಾಸಿ, ಕುಂಭ (ಚಿನ್ನ, ಬೆಳ್ಳಿ, ತಾಮ್ರ, ಹಿತ್ತಾಳೆ ಅಥವಾ ಪಂಚಲೋಹ) ಇಡಿ; ನೀರು ತುಂಬಿ, ನಾಣ್ಯ, ಕೂರ್ಚ, ಮಾವಿನೆಲೆ, ಅರಿಶಿನ ಹಚ್ಚಿದ ತೆಂಗಿನಕಾಯಿ ಇಟ್ಟು, ಮುಟ್ಟಿಕೊಂಡು “ಇಮಂ ಮೇ ವರುಣ…”, “ತತ್ತ್ವಾ ಯಾಮಿ…” ಎಂದು ವರುಣನನ್ನು ಆವಾಹಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ; ಪೀಠದ ರೇಖೆಗಳ ಮತ್ತು ಜಲಪೂರಣದ ವೈದಿಕ ಮಂತ್ರಗಳನ್ನು ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'कलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः ।\nमूले तत्र स्थितो ब्रह्मा मध्ये मातृगणाः स्मृताः ॥',
          meaning: {
            en: 'Vishnu dwells in the mouth of the kalasha and Rudra in its neck; Brahma stands at its base, and the hosts of Mother-goddesses are said to be in its middle.',
            kn: 'ಕಲಶದ ಮುಖದಲ್ಲಿ ವಿಷ್ಣುವೂ, ಕಂಠದಲ್ಲಿ ರುದ್ರನೂ, ಮೂಲದಲ್ಲಿ ಬ್ರಹ್ಮದೇವರೂ, ಮಧ್ಯದಲ್ಲಿ ಮಾತೃಗಣಗಳೂ ನೆಲೆಸಿದ್ದಾರೆ.',
          },
        },
        {
          text: 'कुक्षौ तु सागराः सर्वे सप्तद्वीपा वसुन्धरा ।\nऋग्वेदोऽथ यजुर्वेदः सामवेदो ह्यथर्वणः ॥\nअङ्गैश्च सहिताः सर्वे कलशं तु समाश्रिताः ।\nअत्र गायत्री सावित्री शान्तिः पुष्टिकरी तथा ॥',
          meaning: {
            en: 'In its belly dwell all the oceans and the earth with its seven continents; the Rigveda, Yajurveda, Samaveda and Atharvaveda with their limbs all rest in the kalasha. Here too are Gayatri, Savitri, and the powers that bring peace and nourishment.',
            kn: 'ಕಲಶದ ಹೊಟ್ಟೆಯಲ್ಲಿ ಎಲ್ಲ ಸಮುದ್ರಗಳೂ ಸಪ್ತದ್ವೀಪಗಳುಳ್ಳ ಭೂಮಿಯೂ ಇವೆ; ಋಗ್ವೇದ, ಯಜುರ್ವೇದ, ಸಾಮವೇದ, ಅಥರ್ವವೇದಗಳು ಅಂಗಗಳ ಸಹಿತ ಕಲಶವನ್ನು ಆಶ್ರಯಿಸಿವೆ. ಇಲ್ಲಿ ಗಾಯತ್ರೀ, ಸಾವಿತ್ರೀ, ಶಾಂತಿ ಮತ್ತು ಪುಷ್ಟಿಯನ್ನು ಕೊಡುವ ಶಕ್ತಿಗಳೂ ಇವೆ.',
          },
        },
        {
          text: 'सर्वे समुद्राः सरितस्तीर्थानि जलदा नदाः ।\nआयान्तु देवपूजार्थं दुरितक्षयकारकाः ॥',
          meaning: {
            en: 'May all the oceans, rivers, holy waters, clouds and streams, which destroy sin, come here for the worship of the Lord.',
            kn: 'ಪಾಪನಾಶಕವಾದ ಎಲ್ಲ ಸಮುದ್ರಗಳೂ ನದಿಗಳೂ ತೀರ್ಥಗಳೂ ಮೋಡಗಳೂ ಪ್ರವಾಹಗಳೂ ದೇವರ ಪೂಜೆಗಾಗಿ ಇಲ್ಲಿಗೆ ಬರಲಿ.',
          },
        },
        {
          text: 'गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥',
          meaning: {
            en: 'O Ganga, Yamuna, Godavari, Sarasvati, Narmada, Sindhu and Kaveri, be present in this water.',
            kn: 'ಓ ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು, ಕಾವೇರಿ ನದಿಗಳೇ, ಈ ಜಲದಲ್ಲಿ ಸಾನ್ನಿಧ್ಯವನ್ನು ನೀಡಿರಿ.',
          },
        },
        {
          text: 'आगमार्थं तु देवानां गमनार्थं तु रक्षसाम् ।\nकुर्वे घण्टारवं तत्र देवताह्वानलाञ्छनम् ॥',
          meaning: {
            en: 'I ring the bell, the sign that invites the gods, so that the gods may come and the demonic forces depart.',
            kn: 'ದೇವತೆಗಳು ಬರಲೆಂದೂ ರಾಕ್ಷಸರು ತೊಲಗಲೆಂದೂ, ದೇವತೆಗಳನ್ನು ಆಹ್ವಾನಿಸುವ ಸಂಕೇತವಾದ ಘಂಟಾನಾದವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'इमं मे वरुण श्रुधी हवमद्या च मृळय ।\nत्वामवस्युरा चके ॥',
          meaning: {
            en: 'O Varuna, hear this call of mine and be gracious to us today; longing for your protection I call upon you. (Rigveda 1.25.19; Varuna is invited into the kalasha.)',
            kn: 'ಓ ವರುಣನೇ, ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳು, ಇಂದು ನಮಗೆ ಸುಖವನ್ನು ಕೊಡು; ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬಯಸಿ ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇನೆ. (ಋಗ್ವೇದ ೧.೨೫.೧೯; ಕಲಶದಲ್ಲಿ ವರುಣನ ಆವಾಹನೆ.)',
          },
        },
        {
          text: 'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेळमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥\nॐ भूर्भुवः सुवरोम् । अस्मिन् कुम्भे वरुणं ध्यायामि । वरुणम् आवाहयामि ॥',
          meaning: {
            en: 'Praising you with this prayer I come to you for that which the sacrificer asks with his offerings; O Varuna, without anger, take heed here; O widely praised one, do not take away our life. (Rigveda 1.24.11.) Om, earth, sky, heaven: I meditate on Varuna in this kumbha and invoke him.',
            kn: 'ಈ ಸ್ತುತಿಯಿಂದ ವಂದಿಸುತ್ತ ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳಿಂದ ಬೇಡುವುದನ್ನೇ ನಾನು ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ; ಓ ವರುಣನೇ, ಕೋಪಿಸದೆ ಇಲ್ಲಿ ಗಮನಿಸು; ಓ ಬಹುಸ್ತುತನೇ, ನಮ್ಮ ಆಯುಸ್ಸನ್ನು ಕಸಿಯಬೇಡ. (ಋಗ್ವೇದ ೧.೨೪.೧೧) ಓಂ ಭೂರ್ಭುವಃ ಸುವರೋಮ್: ಈ ಕುಂಭದಲ್ಲಿ ವರುಣನನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'कुम्भे महागणपत्यावाहनम्',
      titleEn: 'Mahaganapati in the kumbha: nyasa, dhyana and mula mantra',
      note: 'Place a silver image of Mahaganapati (or a coin) on the kumbha. Do the nyasa: say the rishi, metre and deity of the mantra, then with the six seed syllables touch the fingers and the heart, head, crest, arms, eyes and all round. Meditate with the dhyana verse, offer the five upacharas with the elements, recite the mula mantra twelve times, and invoke Mahaganapati into the kumbha and the image with akshata and flowers (Mylapore manual).',
      noteKn: 'ಕುಂಭದ ಮೇಲೆ ಮಹಾಗಣಪತಿಯ ಬೆಳ್ಳಿಯ ಪ್ರತಿಮೆ (ಅಥವಾ ನಾಣ್ಯ) ಇಡಿ. ನ್ಯಾಸ: ಮಂತ್ರದ ಋಷಿ, ಛಂದಸ್ಸು, ದೇವತೆ ಹೇಳಿ, ಆರು ಬೀಜಾಕ್ಷರಗಳಿಂದ ಬೆರಳುಗಳು ಮತ್ತು ಹೃದಯ, ಶಿರ, ಶಿಖೆ, ಕವಚ, ನೇತ್ರ, ಅಸ್ತ್ರ ಸ್ಪರ್ಶಿಸಿ. ಧ್ಯಾನಶ್ಲೋಕದಿಂದ ಧ್ಯಾನಿಸಿ, ಪಂಚಭೂತಾತ್ಮಕ ಪಂಚೋಪಚಾರ ಅರ್ಪಿಸಿ, ಮೂಲಮಂತ್ರವನ್ನು ಹನ್ನೆರಡು ಬಾರಿ ಜಪಿಸಿ, ಅಕ್ಷತೆ–ಹೂವುಗಳಿಂದ ಕುಂಭ ಮತ್ತು ಪ್ರತಿಮೆಯಲ್ಲಿ ಮಹಾಗಣಪತಿಯನ್ನು ಆವಾಹಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अस्य श्रीमहागणपतिमहामन्त्रस्य गणक ऋषिः । निचृद्गायत्री छन्दः । महागणपतिर्देवता ।\nगां बीजम् । गीं शक्तिः । गूं कीलकम् । श्रीमहागणपतिप्रसादसिद्ध्यर्थे जपे विनियोगः ॥\nगां अङ्गुष्ठाभ्यां नमः । गीं तर्जनीभ्यां नमः । गूं मध्यमाभ्यां नमः ।\nगैं अनामिकाभ्यां नमः । गौं कनिष्ठिकाभ्यां नमः । गः करतलकरपृष्ठाभ्यां नमः ॥\nगां हृदयाय नमः । गीं शिरसे स्वाहा । गूं शिखायै वषट् ।\nगैं कवचाय हुम् । गौं नेत्रत्रयाय वौषट् । गः अस्त्राय फट् ।\nभूर्भुवः सुवरोम् इति दिग्बन्धः ॥',
          meaning: {
            en: 'Of this great mantra of Sri Mahaganapati the seer is Ganaka, the metre Nichrit-gayatri, the deity Mahaganapati; gam is the seed, gim the power, gum the pin; it is used in japa for the grace of Mahaganapati. Gam to the thumbs, gim to the forefingers, gum to the middle fingers, gaim to the ring fingers, gaum to the little fingers, gah to the palms and backs of the hands; gam to the heart, gim to the head, gum to the crest, gaim to the armour, gaum to the three eyes, gah to the weapon; with bhur bhuvah suvar om the directions are bound.',
            kn: 'ಈ ಶ್ರೀಮಹಾಗಣಪತಿ ಮಹಾಮಂತ್ರಕ್ಕೆ ಗಣಕ ಋಷಿ, ನಿಚೃದ್ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಮಹಾಗಣಪತಿ ದೇವತೆ; ಗಾಂ ಬೀಜ, ಗೀಂ ಶಕ್ತಿ, ಗೂಂ ಕೀಲಕ; ಮಹಾಗಣಪತಿಪ್ರಸಾದಕ್ಕಾಗಿ ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ. ಗಾಂ ಹೆಬ್ಬೆರಳುಗಳಿಗೆ, ಗೀಂ ತೋರುಬೆರಳುಗಳಿಗೆ, ಗೂಂ ಮಧ್ಯಬೆರಳುಗಳಿಗೆ, ಗೈಂ ಉಂಗುರಬೆರಳುಗಳಿಗೆ, ಗೌಂ ಕಿರುಬೆರಳುಗಳಿಗೆ, ಗಃ ಅಂಗೈ–ಮುಂಗೈಗಳಿಗೆ; ಗಾಂ ಹೃದಯಕ್ಕೆ, ಗೀಂ ಶಿರಕ್ಕೆ, ಗೂಂ ಶಿಖೆಗೆ, ಗೈಂ ಕವಚಕ್ಕೆ, ಗೌಂ ಮೂರು ಕಣ್ಣುಗಳಿಗೆ, ಗಃ ಅಸ್ತ್ರಕ್ಕೆ; “ಭೂರ್ಭುವಃ ಸುವರೋಮ್” ಎಂದು ದಿಗ್ಬಂಧ.',
          },
        },
        {
          text: 'बीजापूरगदेक्षुकार्मुकरुजाचक्राब्जपाशोत्पल-\nव्रीह्यग्रस्वविषाणरत्नकलशप्रोद्यत्कराम्भोरुहः ।\nध्येयो वल्लभया सपद्मकरयाश्लिष्टोज्ज्वलद्भूषया\nविश्वोत्पत्तिविपत्तिसंस्थितिकरो विघ्नेश इष्टार्थदः ॥',
          meaning: {
            en: 'Vighnesha, who grants what is desired, is to be meditated on with lotus hands holding the pomegranate, the mace, the sugarcane bow, the trident, the discus, the lotus, the noose, the blue lily, the ear of rice, his own tusk and the jewelled pot, embraced by his consort with a lotus in her hand and shining ornaments; he brings about the creation, dissolution and maintenance of the world. (Dhyana of Mahaganapati, Mylapore manual.)',
            kn: 'ಮಾದಳ, ಗದೆ, ಕಬ್ಬಿನ ಬಿಲ್ಲು, ಶೂಲ, ಚಕ್ರ, ಕಮಲ, ಪಾಶ, ನೈದಿಲೆ, ಭತ್ತದ ತೆನೆ, ತನ್ನ ದಂತ, ರತ್ನಕಲಶಗಳನ್ನು ಹಿಡಿದ ಕರಕಮಲಗಳುಳ್ಳ, ಕೈಯಲ್ಲಿ ಕಮಲ ಹಿಡಿದ ಹೊಳೆಯುವ ಆಭರಣಗಳ ಪತ್ನಿಯಿಂದ ಆಲಿಂಗಿತನಾದ, ಜಗತ್ತಿನ ಸೃಷ್ಟಿ–ಲಯ–ಸ್ಥಿತಿಗಳನ್ನು ಮಾಡುವ, ಇಷ್ಟಾರ್ಥದಾಯಕ ವಿಘ್ನೇಶನನ್ನು ಧ್ಯಾನಿಸಬೇಕು. (ಮಹಾಗಣಪತಿ ಧ್ಯಾನ, ಮೈಲಾಪುರ ಗ್ರಂಥ)',
          },
        },
        {
          text: 'लं पृथिव्यात्मने गन्धं समर्पयामि । हं आकाशात्मने पुष्पाणि समर्पयामि ।\nयं वाय्वात्मने धूपम् आघ्रापयामि । रं अग्न्यात्मने दीपं दर्शयामि ।\nवं अमृतात्मने अमृतोपहारं निवेदयामि । सं सर्वात्मने समस्तोपचारान् समर्पयामि ॥',
          meaning: {
            en: 'Lam: to him whose self is earth I offer sandal; ham: to him whose self is space, flowers; yam: to him whose self is air, incense; ram: to him whose self is fire, the lamp; vam: to him whose self is nectar, an offering of nectar; sam: to the Self of all, all the honours.',
            kn: 'ಲಂ — ಪೃಥ್ವೀಸ್ವರೂಪನಿಗೆ ಗಂಧ; ಹಂ — ಆಕಾಶಸ್ವರೂಪನಿಗೆ ಹೂವು; ಯಂ — ವಾಯುಸ್ವರೂಪನಿಗೆ ಧೂಪ; ರಂ — ಅಗ್ನಿಸ್ವರೂಪನಿಗೆ ದೀಪ; ವಂ — ಅಮೃತಸ್ವರೂಪನಿಗೆ ಅಮೃತೋಪಹಾರ; ಸಂ — ಸರ್ವಾತ್ಮನಿಗೆ ಸಮಸ್ತ ಉಪಚಾರ.',
          },
        },
        {
          text: 'ॐ श्रीं ह्रीं क्लीं ग्लौं गं गणपतये वरवरद सर्वजनं मे वशमानय स्वाहा ॥',
          meaning: {
            en: 'Om shrim hrim klim glaum gam: to Ganapati, O best giver of boons, bring all people under my sway (win me the goodwill of all), svaha. (The twenty-eight-syllable mula mantra of Mahaganapati; the five seed syllables stand for Rama and Vishnu, Girija and Shiva, Rati and Kama, the Earth and Varaha, Mahalakshmi and Mahaganapati. It is an upadesha mantra: learn it from your guru. The Mylapore manual gives only its first and last words, om shrim … vashamanaya svaha, and the five seeds.)',
            kn: 'ಓಂ ಶ್ರೀಂ ಹ್ರೀಂ ಕ್ಲೀಂ ಗ್ಲೌಂ ಗಂ — ಗಣಪತಿಗೆ, ಓ ವರದರಲ್ಲಿ ಶ್ರೇಷ್ಠನೇ, ಎಲ್ಲ ಜನರನ್ನೂ ನನಗೆ ಅನುಕೂಲರನ್ನಾಗಿಸು, ಸ್ವಾಹಾ. (ಮಹಾಗಣಪತಿಯ ಇಪ್ಪತ್ತೆಂಟಕ್ಷರದ ಮೂಲಮಂತ್ರ; ಐದು ಬೀಜಗಳು ರಮಾ–ವಿಷ್ಣು, ಗಿರಿಜಾ–ಶಿವ, ರತಿ–ಕಾಮ, ಭೂಮಿ–ವರಾಹ, ಮಹಾಲಕ್ಷ್ಮೀ–ಮಹಾಗಣಪತಿ ಯುಗ್ಮಗಳು. ಇದು ಉಪದೇಶ ಮಂತ್ರ: ಗುರುವಿನಿಂದ ಕಲಿಯಿರಿ. ಮೈಲಾಪುರ ಗ್ರಂಥ ಮೊದಲ–ಕೊನೆಯ ಪದಗಳನ್ನೂ ಐದು ಬೀಜಗಳನ್ನೂ ಮಾತ್ರ ಕೊಡುತ್ತದೆ.)',
          },
        },
        {
          text: 'अस्मिन् कुम्भे अस्यां प्रतिमायां महागणपतिं ध्यायामि । महागणपतिम् आवाहयामि ॥',
          meaning: {
            en: 'I meditate on Mahaganapati in this kumbha and in this image; I invoke Mahaganapati.',
            kn: 'ಈ ಕುಂಭದಲ್ಲಿಯೂ ಈ ಪ್ರತಿಮೆಯಲ್ಲಿಯೂ ಮಹಾಗಣಪತಿಯನ್ನು ಧ್ಯಾನಿಸುತ್ತೇನೆ; ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'प्राणप्रतिष्ठा',
      titleEn: 'Prana-pratishtha',
      note: 'Say the rishi, metre and deity of the prana-pratishtha mantra (Brahma, Vishnu and Maheshvara; the Rig, Yajus, Saman and Atharvan metres; the Supreme Prana-shakti; seeds आं ह्रीं क्रों), do the nyasa with आं ह्रीं क्रों, meditate on the Prana-shakti, say the prana-pratishtha formula and असुनीते…, and show the mudras of invocation one by one: आवाहितो भव, स्थापितो भव, सन्निहितो भव, सन्निरुद्धो भव, अवकुण्ठितो भव, सुप्रीतो भव, सुप्रसन्नो भव, सुमुखो भव, वरदो भव, प्रसीद प्रसीद. Recite ॐ fifteen times and offer milk with honey (Mylapore manual).',
      noteKn: 'ಪ್ರಾಣಪ್ರತಿಷ್ಠಾ ಮಂತ್ರದ ಋಷಿ (ಬ್ರಹ್ಮ–ವಿಷ್ಣು–ಮಹೇಶ್ವರ), ಛಂದಸ್ಸು (ಋಕ್–ಯಜುಸ್–ಸಾಮ–ಅಥರ್ವ), ದೇವತೆ (ಪರಾ ಪ್ರಾಣಶಕ್ತಿ), ಬೀಜ (ಆಂ ಹ್ರೀಂ ಕ್ರೋಂ) ಹೇಳಿ, ಆಂ ಹ್ರೀಂ ಕ್ರೋಂಗಳಿಂದ ನ್ಯಾಸ ಮಾಡಿ, ಪ್ರಾಣಶಕ್ತಿಯನ್ನು ಧ್ಯಾನಿಸಿ, ಪ್ರಾಣಪ್ರತಿಷ್ಠಾ ವಾಕ್ಯ ಮತ್ತು “ಅಸುನೀತೇ…” ಹೇಳಿ, ಆವಾಹನ ಮುದ್ರೆಗಳನ್ನು ಒಂದೊಂದಾಗಿ ತೋರಿಸಿ: ಆವಾಹಿತೋ ಭವ, ಸ್ಥಾಪಿತೋ ಭವ, ಸನ್ನಿಹಿತೋ ಭವ, ಸನ್ನಿರುದ್ಧೋ ಭವ, ಅವಕುಂಠಿತೋ ಭವ, ಸುಪ್ರೀತೋ ಭವ, ಸುಪ್ರಸನ್ನೋ ಭವ, ಸುಮುಖೋ ಭವ, ವರದೋ ಭವ, ಪ್ರಸೀದ ಪ್ರಸೀದ. ಓಂಕಾರವನ್ನು ಹದಿನೈದು ಬಾರಿ ಜಪಿಸಿ ಜೇನುಸಹಿತ ಹಾಲು ನಿವೇದಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'रक्ताम्भोधिस्थपोतोल्लसदरुणसरोजाधिरूढा कराब्जैः\nपाशं कोदण्डमिक्षूद्भवमलिगुणमप्यङ्कुशं पञ्चबाणान् ।\nबिभ्राणासृक्कपालं त्रिनयनलसिता पीनवक्षोरुहाढ्या\nदेवी बालार्कवर्णा भवतु सुखकरी प्राणशक्तिः परा नः ॥',
          meaning: {
            en: 'May the Goddess, the supreme Prana-shakti, bring us happiness: seated on a red lotus that shines on a boat in a sea of red, holding in her lotus hands the noose, the sugarcane bow with a string of bees, the goad, the five arrows and a skull-cup, shining with three eyes, full-bosomed, coloured like the rising sun. (Dhyana for the prana-pratishtha, Mylapore manual.)',
            kn: 'ಕೆಂಪು ಸಮುದ್ರದಲ್ಲಿನ ನಾವೆಯ ಮೇಲೆ ಹೊಳೆಯುವ ಕೆಂಪು ಕಮಲದಲ್ಲಿ ಕುಳಿತ, ಕರಕಮಲಗಳಲ್ಲಿ ಪಾಶ, ದುಂಬಿಗಳ ಹೆದೆಯುಳ್ಳ ಕಬ್ಬಿನ ಬಿಲ್ಲು, ಅಂಕುಶ, ಐದು ಬಾಣಗಳು, ಕಪಾಲಗಳನ್ನು ಧರಿಸಿದ, ಮೂರು ಕಣ್ಣುಗಳಿಂದ ಶೋಭಿಸುವ, ಉದಯಸೂರ್ಯನ ಬಣ್ಣದ ಪರಾ ಪ್ರಾಣಶಕ್ತಿ ದೇವಿ ನಮಗೆ ಸುಖವನ್ನುಂಟುಮಾಡಲಿ. (ಪ್ರಾಣಪ್ರತಿಷ್ಠೆಯ ಧ್ಯಾನ)',
          },
        },
        {
          text: 'आं ह्रीं क्रों क्रों ह्रीं आं यरलवशषसहों हंसः सोऽहं सोऽहं हंसः ।\nअस्य श्रीमहागणपतेः प्राणा इह प्राणाः । जीव इह स्थितः ।\nसर्वेन्द्रियाणि वाङ्मनस्त्वक्चक्षुःश्रोत्रजिह्वाघ्राणप्राणापानव्यानोदानसमानाश्च\nइहैवागत्य अस्मिन् कुम्भे अस्यां प्रतिमायां सुखं चिरं तिष्ठन्तु स्वाहा ॥',
          meaning: {
            en: 'Am hrim krom krom hrim am, ya ra la va sha sha sa ham, hamsah so-ham so-ham hamsah: the life-breaths of Sri Mahaganapati are here; his life is established here; may all his senses — speech, mind, skin, eye, ear, tongue and nose — and the five breaths come here and dwell happily and long in this kumbha and this image, svaha. (Mylapore manual.)',
            kn: 'ಆಂ ಹ್ರೀಂ ಕ್ರೋಂ ಕ್ರೋಂ ಹ್ರೀಂ ಆಂ, ಯರಲವಶಷಸಹೋಂ, ಹಂಸಃ ಸೋಹಂ ಸೋಹಂ ಹಂಸಃ — ಶ್ರೀಮಹಾಗಣಪತಿಯ ಪ್ರಾಣಗಳು ಇಲ್ಲಿ; ಜೀವವು ಇಲ್ಲಿ ನೆಲೆಸಿದೆ; ವಾಕ್, ಮನಸ್ಸು, ತ್ವಕ್, ಚಕ್ಷು, ಶ್ರೋತ್ರ, ಜಿಹ್ವೆ, ಘ್ರಾಣ ಎಂಬ ಎಲ್ಲ ಇಂದ್ರಿಯಗಳೂ ಪಂಚಪ್ರಾಣಗಳೂ ಇಲ್ಲಿಗೆ ಬಂದು ಈ ಕುಂಭದಲ್ಲಿಯೂ ಪ್ರತಿಮೆಯಲ್ಲಿಯೂ ಸುಖವಾಗಿ ಚಿರಕಾಲ ನೆಲೆಸಲಿ, ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'असुनीते पुनरस्मासु चक्षुः पुनः प्राणमिह नो धेहि भोगम् ।\nज्योक्पश्येम सूर्यमुच्चरन्तमनुमते मृळया नः स्वस्ति ॥',
          meaning: {
            en: 'O Asuniti (guide of life), give us back sight, give us back breath and enjoyment here; long may we see the sun rising; O Anumati, be gracious to us, for our welfare. (Rigveda 10.59.6.)',
            kn: 'ಓ ಅಸುನೀತಿಯೇ, ನಮಗೆ ಮತ್ತೆ ಕಣ್ಣನ್ನೂ ಪ್ರಾಣವನ್ನೂ ಭೋಗವನ್ನೂ ಇಲ್ಲಿ ಕೊಡು; ಉದಯಿಸುವ ಸೂರ್ಯನನ್ನು ನಾವು ಬಹುಕಾಲ ನೋಡುವಂತಾಗಲಿ; ಓ ಅನುಮತಿಯೇ, ನಮ್ಮ ಕ್ಷೇಮಕ್ಕಾಗಿ ದಯೆ ತೋರು. (ಋಗ್ವೇದ ೧೦.೫೯.೬)',
          },
        },
        {
          text: 'स्वामिन् सर्वजगन्नाथ यावत्पूजावसानकम् ।\nतावत्त्वं प्रीतिभावेन बिम्बेऽस्मिन् सन्निधिं कुरु ॥\nप्राणान् प्रतिष्ठापयामि ॥',
          meaning: {
            en: 'O Lord, master of all the worlds, until the end of this worship be present in this image with love. I establish the life-breaths.',
            kn: 'ಓ ಸ್ವಾಮಿ, ಸರ್ವಜಗನ್ನಾಥನೇ, ಪೂಜೆ ಮುಗಿಯುವವರೆಗೆ ಪ್ರೀತಿಯಿಂದ ಈ ಬಿಂಬದಲ್ಲಿ ಸನ್ನಿಧಾನ ಮಾಡು. ಪ್ರಾಣಗಳನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'षोडशोपचारपूजा प्रधाननैवेद्यं च',
      titleEn: 'Shodashopachara puja and the main naivedya',
      note: 'Worship Mahaganapati in the kumbha with the sixteen upacharas, saying the mula mantra and महागणपतये नमः before each (a jewelled throne, water for feet, hands and mouth, a bath with आपो हि ष्ठा…, clothes, sacred thread, ornaments, sandal, turmeric and kumkum, akshata, garland), do the archana with the sixteen names, sixteen times with the mula mantra and with the 108 names, offer incense and the ghee lamp; then mix the homa materials and, keeping a third aside, offer it as the main naivedya with the Gayatri and the pranahuti mantras (Mylapore manual).',
      noteKn: 'ಕುಂಭದಲ್ಲಿರುವ ಮಹಾಗಣಪತಿಯನ್ನು ಷೋಡಶೋಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ — ಪ್ರತಿಯೊಂದರ ಮೊದಲು ಮೂಲಮಂತ್ರ ಮತ್ತು “ಮಹಾಗಣಪತಯೇ ನಮಃ” ಹೇಳಿ (ರತ್ನಸಿಂಹಾಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, “ಆಪೋ ಹಿ ಷ್ಠಾ…” ಎಂದು ಸ್ನಾನ, ವಸ್ತ್ರ, ಯಜ್ಞೋಪವೀತ, ಆಭರಣ, ಗಂಧ, ಅರಿಶಿನ–ಕುಂಕುಮ, ಅಕ್ಷತೆ, ಹೂಮಾಲೆ); ಹದಿನಾರು ನಾಮಗಳಿಂದ, ಮೂಲಮಂತ್ರದಿಂದ ಹದಿನಾರು ಬಾರಿ, ಅಷ್ಟೋತ್ತರ ನಾಮಗಳಿಂದ ಅರ್ಚನೆ; ಧೂಪ, ತುಪ್ಪದ ದೀಪ; ನಂತರ ಹೋಮದ್ರವ್ಯಗಳನ್ನು ಕಲಸಿ ಮೂರನೆಯ ಒಂದು ಭಾಗವನ್ನು ಗಾಯತ್ರೀ ಮತ್ತು ಪ್ರಾಣಾಹುತಿ ಮಂತ್ರಗಳಿಂದ ಪ್ರಧಾನ ನೈವೇದ್ಯವಾಗಿ ಅರ್ಪಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'महागणपतये नमः । रत्नसिंहासनं समर्पयामि । पादयोः पाद्यं समर्पयामि ।\nहस्तयोः अर्घ्यं समर्पयामि । मुखे आचमनीयं समर्पयामि । स्नानं समर्पयामि ।\nवस्त्रं समर्पयामि । यज्ञोपवीतं समर्पयामि । आभरणानि समर्पयामि ।\nगन्धान् धारयामि । हरिद्राकुङ्कुमं समर्पयामि । अक्षतान् समर्पयामि । पुष्पमालां समर्पयामि ॥',
          meaning: {
            en: 'Salutation to Mahaganapati: I offer a jewelled throne, water for the feet, water for the hands, water to sip, a bath, clothes, the sacred thread, ornaments; I apply sandal; I offer turmeric and kumkum, akshata and a garland. (Each preceded by the mula mantra.)',
            kn: 'ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ರತ್ನಸಿಂಹಾಸನ, ಪಾದಗಳಿಗೆ ಪಾದ್ಯ, ಹಸ್ತಗಳಿಗೆ ಅರ್ಘ್ಯ, ಮುಖಕ್ಕೆ ಆಚಮನ, ಸ್ನಾನ, ವಸ್ತ್ರ, ಯಜ್ಞೋಪವೀತ, ಆಭರಣ, ಗಂಧ, ಅರಿಶಿನ–ಕುಂಕುಮ, ಅಕ್ಷತೆ, ಹೂಮಾಲೆ ಅರ್ಪಿಸುತ್ತೇನೆ. (ಪ್ರತಿಯೊಂದರ ಮೊದಲು ಮೂಲಮಂತ್ರ.)',
          },
        },
        {
          text: 'आपो हि ष्ठा मयोभुवः ।\nता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥',
          meaning: {
            en: 'O Waters, you are the bringers of happiness. Fill us with strength, so that we may behold great joy.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನೀವು ಸುಖವನ್ನು ಕೊಡುವವರು. ನಮಗೆ ಶಕ್ತಿಯನ್ನು ತುಂಬಿ, ಮಹತ್ತಾದ ಆನಂದವನ್ನು ಕಾಣುವಂತೆ ಮಾಡಿ.',
          },
        },
        {
          text: 'यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः ।\nउशतीरिव मातरः ॥',
          meaning: {
            en: 'Let us share here in your most auspicious essence, as loving mothers share with their children.',
            kn: 'ಪ್ರೀತಿಯುಳ್ಳ ತಾಯಂದಿರು ಮಕ್ಕಳಿಗೆ ಉಣಿಸುವಂತೆ, ನಿಮ್ಮಲ್ಲಿರುವ ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ರಸವನ್ನು ನಮಗೂ ಇಲ್ಲಿ ಕರುಣಿಸಿ.',
          },
        },
        {
          text: 'तस्मा अरं गमाम वः ।\nयस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'May we readily attain that essence of yours with which you nourish all that dwells in the world; O Waters, bring us to new life.',
            kn: 'ಲೋಕದ ಜೀವಿಗಳನ್ನು ಪೋಷಿಸುವ ನಿಮ್ಮ ಆ ರಸವನ್ನು ನಾವು ಸಂಪೂರ್ಣವಾಗಿ ಪಡೆಯುವಂತಾಗಲಿ; ಓ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಹೊಸ ಚೈತನ್ಯವನ್ನು ಕೊಡಿ.',
          },
        },
        {
          text: 'ॐ सुमुखाय नमः । ॐ एकदन्ताय नमः । ॐ कपिलाय नमः । ॐ गजकर्णकाय नमः ।\nॐ लम्बोदराय नमः । ॐ विकटाय नमः । ॐ विघ्नराजाय नमः । ॐ विनायकाय नमः ।\nॐ धूमकेतवे नमः । ॐ गणाध्यक्षाय नमः । ॐ फालचन्द्राय नमः । ॐ गजाननाय नमः ।\nॐ वक्रतुण्डाय नमः । ॐ शूर्पकर्णाय नमः । ॐ हेरम्बाय नमः । ॐ स्कन्दपूर्वजाय नमः ॥',
          meaning: {
            en: 'The sixteen names of Ganesha — Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnaraja, Vinayaka, Dhumaketu, Ganadhyaksha, Phalachandra, Gajanana, Vakratunda, Shurpakarna, Heramba, Skandapurvaja — with a flower or durva for each.',
            kn: 'ಗಣಪತಿಯ ಹದಿನಾರು ನಾಮಗಳು — ಸುಮುಖ, ಏಕದಂತ, ಕಪಿಲ, ಗಜಕರ್ಣಕ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ವಿನಾಯಕ, ಧೂಮಕೇತು, ಗಣಾಧ್ಯಕ್ಷ, ಫಾಲಚಂದ್ರ, ಗಜಾನನ, ವಕ್ರತುಂಡ, ಶೂರ್ಪಕರ್ಣ, ಹೇರಂಬ, ಸ್ಕಂದಪೂರ್ವಜ — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹೂವು ಅಥವಾ ಗರಿಕೆ ಅರ್ಪಿಸಿ.',
          },
        },
        {
          text: 'ॐ गं गणपतये नमः ॥\nमहागणपतये नमः । नानाविधपत्रपुष्पाणि समर्पयामि । धूपम् आघ्रापयामि । दीपं दर्शयामि ॥',
          meaning: {
            en: 'Om gam, salutation to Ganapati. Salutation to Mahaganapati: I offer leaves and flowers of many kinds; I offer incense; I show the lamp.',
            kn: 'ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ. ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ನಾನಾ ಬಗೆಯ ಪತ್ರ–ಪುಷ್ಪಗಳು, ಧೂಪ, ದೀಪ ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः सुवः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।\nदेव सवितः प्रसुव । सत्यं त्वर्तेन परिषिञ्चामि । अमृतोपस्तरणमसि ।\nॐ प्राणाय स्वाहा । अपानाय स्वाहा । व्यानाय स्वाहा । उदानाय स्वाहा । समानाय स्वाहा । ब्रह्मणे स्वाहा ॥',
          meaning: {
            en: 'Om, earth, sky, heaven; we meditate on the glorious light of the divine Savitri; may he inspire our minds (sprinkling the naivedya). O god Savitri, impel. I sprinkle truth with right (water round the naivedya). You are the nectar spread beneath. Om, to prana, apana, vyana, udana and samana, and to Brahman, svaha (showing the food to the deity). (Mylapore manual; the same mantras as the Nitya Puja naivedya.)',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ; ದಿವ್ಯ ಸವಿತೃವಿನ ಶ್ರೇಷ್ಠ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರಿಸಲಿ (ನೈವೇದ್ಯಕ್ಕೆ ಪ್ರೋಕ್ಷಣೆ). ಓ ಸವಿತೃದೇವನೇ, ಪ್ರೇರಿಸು. ಸತ್ಯವನ್ನು ಋತದಿಂದ ಸುತ್ತಲೂ ಸಿಂಪಡಿಸುತ್ತೇನೆ. ನೀನು ಅಮೃತದ ಹಾಸು. ಓಂ ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಉದಾನ, ಸಮಾನಗಳಿಗೂ ಬ್ರಹ್ಮನಿಗೂ ಸ್ವಾಹಾ (ನೈವೇದ್ಯವನ್ನು ದೇವರಿಗೆ ತೋರಿಸುತ್ತ).',
          },
        },
        {
          text: 'महागणपतये नमः । नालिकेरादिद्रव्यं निवेदयामि । अमृतापिधानमसि ॥',
          meaning: {
            en: 'Salutation to Mahaganapati: I offer the coconut and the other materials as naivedya. You are the nectar that covers (water is poured).',
            kn: 'ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ತೆಂಗಿನಕಾಯಿ ಮುಂತಾದ ದ್ರವ್ಯಗಳನ್ನು ನಿವೇದಿಸುತ್ತೇನೆ. ನೀನು ಅಮೃತದ ಮುಚ್ಚಳ (ನೀರು ಬಿಡುತ್ತ).',
          },
        },
      ],
    },
    {
      title: 'अग्निमुखम्',
      titleEn: 'The agnimukha: go to the Common Procedure',
      note: 'Do the purvanga (Homa: Common Procedure) up to the ajyabhaga. Madhva: prepare the sthandila, install the fire, meditate on Agni and the Lord within, do the anvadhana naming Ganapati with the ashtadravya and the number of coconuts as the main offering, the paristarana, the ghee, the aghara, the samskaras of Agni and the Vaishnava offerings; by the Apurita tantra the pranita vessel, the Brahma, the idhma and the two chakshushi (ajyabhaga) oblations are left out (Homa-Havana). Smarta: the full Apastamba agnimukha, through the agnimukha oblation and the all-expiation offering. Then come back here for the invocation of Ganapati in the fire.',
      noteKn: 'ಪೂರ್ವಾಂಗವನ್ನು (ಹೋಮವಿಧಿ — ಸಾಮಾನ್ಯ ಕ್ರಮ) ಆಜ್ಯಭಾಗದವರೆಗೆ ಮಾಡಿ. ಮಾಧ್ವ: ಸ್ಥಂಡಿಲ, ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ, ಅಗ್ನಿ ಮತ್ತು ಅಂತರ್ಯಾಮಿ ಧ್ಯಾನ, ಪ್ರಧಾನವಾಗಿ ಅಷ್ಟದ್ರವ್ಯ–ಕಾಯಿಸಂಖ್ಯೆಯೊಡನೆ ಗಣಪತಿಯನ್ನು ಹೆಸರಿಸಿ ಅನ್ವಾಧಾನ, ಪರಿಸ್ತರಣ, ಆಜ್ಯಸಂಸ್ಕಾರ, ಆಘಾರ, ಅಗ್ನಿಸಂಸ್ಕಾರಗಳು, ವೈಷ್ಣವಾಹುತಿಗಳು; ಆಪೂರಿತ ತಂತ್ರದಂತೆ ಪ್ರಣೀತಾ, ಬ್ರಹ್ಮ, ಇಧ್ಮ, ಚಕ್ಷುಷೀ (ಆಜ್ಯಭಾಗ) ಇಲ್ಲ (ಹೋಮ–ಹವನ). ಸ್ಮಾರ್ತ: ಪೂರ್ಣ ಆಪಸ್ತಂಬ ಅಗ್ನಿಮುಖ, ಅಗ್ನಿಮುಖಾಹುತಿ ಮತ್ತು ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತದವರೆಗೆ. ನಂತರ ಅಗ್ನಿಯಲ್ಲಿ ಗಣಪತಿ ಆವಾಹನೆಗಾಗಿ ಇಲ್ಲಿಗೆ ಮರಳಿ.',
      verses: [
        {
          text: 'इति पूर्वाङ्गम् ॥',
          meaning: {
            en: 'Thus the purvanga (from the Common Procedure).',
            kn: 'ಹೀಗೆ ಪೂರ್ವಾಂಗ (ಸಾಮಾನ್ಯ ಕ್ರಮದಿಂದ).',
          },
        },
      ],
    },
    {
      title: 'अग्नौ विघ्नेशध्यानं प्रधानहोमश्च',
      titleEn: 'Vighnesha in the fire: dhyana and the main offerings',
      note: 'Meditate on Vighnesha within the fire with the Tantrasara verse, and on Vishvambhara, the form of Vishnu with the elephant face whom Ganapati worshipped, within him (Homa-Havana). Then make the main offerings: a handful of the eight-fold mixture at a time, four for each coconut, throwing the sugarcane, banana and coconut skins into the fire as well. The offering mantra is the Vighnesha mula mantra of the Tantrasara (the letters of क्षिप्रप्रसादाय नमः, taken with the bija given at upadesha), received from the guru; it is not printed here. The Vedic verses of Ganapati below are recited during the offerings, and one oblation of ghee is offered with each.',
      noteKn: 'ತಂತ್ರಸಾರ ಶ್ಲೋಕದಿಂದ ಅಗ್ನಿಯಲ್ಲಿ ವಿಘ್ನೇಶನನ್ನೂ, ಅವನೊಳಗೆ ಗಣಪತಿ ಆರಾಧಿಸಿದ ಗಜಮುಖ ವಿಷ್ಣುರೂಪ ವಿಶ್ವಂಭರನನ್ನೂ ಧ್ಯಾನಿಸಿ (ಹೋಮ–ಹವನ). ನಂತರ ಪ್ರಧಾನಾಹುತಿ: ಅಷ್ಟದ್ರವ್ಯ ಮಿಶ್ರಣವನ್ನು ಮುಷ್ಟಿಯಷ್ಟು, ಒಂದು ಕಾಯಿಗೆ ನಾಲ್ಕರಂತೆ; ಕಬ್ಬು, ಬಾಳೆ, ಕಾಯಿಯ ಸಿಪ್ಪೆಗಳನ್ನೂ ಅಗ್ನಿಗೆ ಹಾಕಿ. ಆಹುತಿ ಮಂತ್ರ ತಂತ್ರಸಾರದ ವಿಘ್ನೇಶ ಮೂಲಮಂತ್ರ (“ಕ್ಷಿಪ್ರಪ್ರಸಾದಾಯ ನಮಃ” ಅಕ್ಷರಗಳು, ಉಪದೇಶದಲ್ಲಿ ಕೊಟ್ಟ ಬೀಜದೊಡನೆ) — ಗುರುವಿನಿಂದ ಪಡೆಯಬೇಕು; ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ. ಆಹುತಿ ನೀಡುವಾಗ ಕೆಳಗಿನ ಗಣಪತಿ ವೈದಿಕ ಮಂತ್ರಗಳನ್ನು ಪಠಿಸುತ್ತಾರೆ, ಪ್ರತಿಯೊಂದರಿಂದ ಒಂದು ಆಜ್ಯಾಹುತಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'रक्ताम्बरो रक्ततनू रक्तमाल्यानुलेपनः ।\nमहोदरो गजमुखः पाशदन्ताङ्कुशाभये ।\nविभ्रद्ध्येयो विघ्नहरः कामदस्त्वरया ह्ययम् ॥',
          meaning: {
            en: 'He is to be meditated on as clad in red, red-bodied, wearing and smeared with red, big-bellied, elephant-faced, holding noose, tusk, goad and the gesture of fearlessness: the remover of obstacles who grants wishes quickly. (Tantrasara-sangraha 3.90-91)',
            kn: 'ಕೆಂಪು ವಸ್ತ್ರ ಧರಿಸಿದ, ಕೆಂಪು ದೇಹದ, ಕೆಂಪು ಹೂಮಾಲೆ–ಲೇಪನಗಳುಳ್ಳ, ದೊಡ್ಡ ಹೊಟ್ಟೆಯ, ಆನೆಮುಖದ, ಪಾಶ–ದಂತ–ಅಂಕುಶ–ಅಭಯಗಳನ್ನು ಹಿಡಿದ, ವಿಘ್ನಹರನಾದ, ಬೇಗನೆ ಇಷ್ಟಾರ್ಥ ಕೊಡುವ ಗಣಪತಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೩.೯೦–೯೧)',
          },
        },
        {
          text: 'तत्र तत्र स्थितो विष्णुस्तत्तच्छक्तीः प्रबोधयन् ।\nएक एव महाशक्तिः कुरुते सर्वमञ्जसा ॥',
          meaning: {
            en: 'Vishnu, standing within each of these and awakening their several powers, though one, being of great power, easily does everything. (Tantrasara-sangraha 3.92; the reason Ganapati is worshipped as Vishnu’s abode.)',
            kn: 'ಆಯಾ ದೇವತೆಗಳಲ್ಲಿ ನೆಲೆಸಿ ಅವರ ಶಕ್ತಿಗಳನ್ನು ಜಾಗೃತಗೊಳಿಸುತ್ತಾ, ಒಬ್ಬನೇ ಆದ ಮಹಾಶಕ್ತನಾದ ವಿಷ್ಣುವು ಎಲ್ಲವನ್ನೂ ಸುಲಭವಾಗಿ ಮಾಡುತ್ತಾನೆ. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೩.೯೨; ಗಣಪತಿಯನ್ನು ವಿಷ್ಣುವಿನ ಅಧಿಷ್ಠಾನವೆಂದು ಪೂಜಿಸುವುದಕ್ಕೆ ಕಾರಣ.)',
          },
        },
        {
          text: 'गणानां त्वा गणपतिं हवामहे कविं कवीनामुपमश्रवस्तमम् ।\nज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आ नः शृण्वन्नूतिभिः सीद सादनम् स्वाहा ।\nगणपतय इदं न मम ॥',
          meaning: {
            en: 'We call you, lord of the hosts, the poet of poets, most renowned of the renowned, the eldest king of prayers, O Brahmanaspati: come to us, listening, with your helps, and take your seat. (Rigveda 2.23.1) Svaha; this is for Ganapati, not mine.',
            kn: 'ಗಣಗಳ ಒಡೆಯನೇ, ಕವಿಗಳಲ್ಲಿ ಕವಿಯೇ, ಅತಿ ಕೀರ್ತಿಶಾಲಿಯೇ, ಮಂತ್ರಗಳಲ್ಲಿ ಜ್ಯೇಷ್ಠರಾಜನೇ, ಬ್ರಹ್ಮಣಸ್ಪತಿಯೇ, ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇವೆ: ಕೇಳುತ್ತಾ, ನಿನ್ನ ರಕ್ಷಣೆಗಳೊಡನೆ ನಮ್ಮ ಬಳಿ ಬಂದು ಆಸನದಲ್ಲಿ ಕುಳಿತುಕೋ. (ಋಗ್ವೇದ ೨.೨೩.೧) ಸ್ವಾಹಾ; ಇದು ಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'नि षु सीद गणपते गणेषु त्वामाहुर्विप्रतमं कवीनाम् ।\nन ऋते त्वत्क्रियते किं चनारे महामर्कं मघवञ्चित्रमर्च स्वाहा ।\nगणपतय इदं न मम ॥',
          meaning: {
            en: 'Be seated, O lord of hosts, among your hosts; they call you the wisest of seers. Nothing near or far is done without you; O bountiful one, honour our great and wonderful hymn. (Rigveda 10.112.9) Svaha; this is for Ganapati, not mine.',
            kn: 'ಓ ಗಣಪತಿಯೇ (ಸಮೂಹಗಳ ಒಡೆಯನೇ), ನಿನ್ನ ಗಣಗಳ ನಡುವೆ ಕುಳಿತುಕೋ; ಕವಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠ ಜ್ಞಾನಿ ನೀನೆಂದು ಹೇಳುತ್ತಾರೆ. ನಿನ್ನನ್ನು ಬಿಟ್ಟು ಹತ್ತಿರದಲ್ಲಾಗಲೀ ದೂರದಲ್ಲಾಗಲೀ ಏನೂ ನಡೆಯುವುದಿಲ್ಲ; ನಮ್ಮ ಈ ಮಹತ್ತಾದ ಸ್ತುತಿಯನ್ನು ಆದರಿಸು. (ಋಗ್ವೇದ ೧೦.೧೧೨.೯) ಸ್ವಾಹಾ; ಇದು ಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'अग्नौ गणपतिपूजा',
      titleEn: 'Mahaganapati in the fire',
      note: 'With the mula mantra, meditate on Mahaganapati in the fire and invoke him with akshata; worship him with the upacharas (seat, throne, water for feet, hands and mouth, madhuparka, bath, akshata for clothes and thread, sandal, flowers, incense, the three-wick ghee lamp), say the naivedya mantras and offer ghee as his food; offer betel into the fire, show camphor and bow (Mylapore manual).',
      noteKn: 'ಮೂಲಮಂತ್ರದಿಂದ ಅಗ್ನಿಯಲ್ಲಿ ಮಹಾಗಣಪತಿಯನ್ನು ಧ್ಯಾನಿಸಿ ಅಕ್ಷತೆಯಿಂದ ಆವಾಹಿಸಿ; ಉಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ (ಆಸನ, ಸಿಂಹಾಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, ಮಧುಪರ್ಕ, ಸ್ನಾನ, ವಸ್ತ್ರ–ಉಪವೀತಗಳಿಗೆ ಅಕ್ಷತೆ, ಗಂಧ, ಹೂವು, ಧೂಪ, ಮೂರು ಬತ್ತಿಯ ತುಪ್ಪದ ದೀಪ), ನೈವೇದ್ಯ ಮಂತ್ರಗಳನ್ನು ಹೇಳಿ ಆಜ್ಯವನ್ನು ಉಪಹಾರವಾಗಿ ಅರ್ಪಿಸಿ; ತಾಂಬೂಲವನ್ನು ಅಗ್ನಿಗೆ ಹಾಕಿ, ಕರ್ಪೂರ ತೋರಿಸಿ ನಮಸ್ಕರಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अस्मिन्नग्नौ महागणपतिं ध्यायामि । महागणपतिम् आवाहयामि ।\nमहागणपतये नमः । आसनं समर्पयामि । पाद्यं अर्घ्यम् आचमनीयं मधुपर्कं स्नानं समर्पयामि ।\nवस्त्रार्थम् उपवीतार्थम् अक्षतान् समर्पयामि । गन्धान् पुष्पाणि समर्पयामि ।\nधूपम् आघ्रापयामि । दीपं दर्शयामि ॥',
          meaning: {
            en: 'I meditate on Mahaganapati in this fire and invoke him. Salutation to Mahaganapati: I offer a seat, water for the feet and hands, water to sip, madhuparka and a bath; akshata for clothes and sacred thread; sandal and flowers; incense; I show the lamp. (Each preceded by the mula mantra.)',
            kn: 'ಈ ಅಗ್ನಿಯಲ್ಲಿ ಮಹಾಗಣಪತಿಯನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ. ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಆಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, ಮಧುಪರ್ಕ, ಸ್ನಾನ; ವಸ್ತ್ರ–ಉಪವೀತಗಳಿಗೆ ಅಕ್ಷತೆ; ಗಂಧ–ಹೂವು; ಧೂಪ; ದೀಪ. (ಪ್ರತಿಯೊಂದರ ಮೊದಲು ಮೂಲಮಂತ್ರ.)',
          },
        },
        {
          text: 'महागणपतये नमः । आज्योपहारं समर्पयामि । अमृतापिधानमसि ।\nकर्पूरताम्बूलं समर्पयामि । कर्पूरनीराजनं दर्शयामि । प्रदक्षिणनमस्कारान् समर्पयामि ॥',
          meaning: {
            en: 'Salutation to Mahaganapati: I offer ghee as his food (into the fire); you are the nectar that covers; I offer camphor and betel (into the fire), show the camphor flame, and offer circumambulation and prostration.',
            kn: 'ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಆಜ್ಯವನ್ನು ಉಪಹಾರವಾಗಿ (ಅಗ್ನಿಗೆ) ಅರ್ಪಿಸುತ್ತೇನೆ; ನೀನು ಅಮೃತದ ಮುಚ್ಚಳ; ಕರ್ಪೂರ–ತಾಂಬೂಲ (ಅಗ್ನಿಗೆ), ಕರ್ಪೂರ ನೀರಾಜನ, ಪ್ರದಕ್ಷಿಣ ನಮಸ್ಕಾರಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'प्रधानहोमः',
      titleEn: 'The main offerings (pradhana homa)',
      note: 'Offer the mixed materials (modaka, appam, durva, samidh, puffed rice, sugarcane, ghee, fruit, jaggery, honey), a handful at a time, at least eight times and up to a thousand, either separately or mixed, seeing them offered into the mouth of Ganapati in the fire. The order of the Mylapore manual: the mula mantra built up word by word and then eight oblations of ghee; the mixture with गणानां त्वा… (8 or 16); the Ganesha Gayatri (8); वक्रतुण्ड… (8); the prayer for the yajamana (at least 4); durva dipped in milk or ghee with the mula mantra (8); puffed rice (8); the two halves of the coconut shell; and eight more oblations of ghee with the mula mantra.',
      noteKn: 'ಮಿಶ್ರ ದ್ರವ್ಯಗಳನ್ನು (ಮೋದಕ, ಅಪ್ಪ, ಗರಿಕೆ, ಸಮಿಧೆ, ಅರಳು, ಕಬ್ಬು, ತುಪ್ಪ, ಹಣ್ಣು, ಬೆಲ್ಲ, ಜೇನು) ಮುಷ್ಟಿಯಷ್ಟು, ಕನಿಷ್ಠ ಎಂಟು ಬಾರಿಯಿಂದ ಸಾವಿರದವರೆಗೆ, ಬೇರೆಬೇರೆಯಾಗಿ ಅಥವಾ ಕಲಸಿ, ಅಗ್ನಿಯಲ್ಲಿರುವ ಗಣಪತಿಯ ಬಾಯಿಗೆ ಅರ್ಪಿಸುವುದಾಗಿ ಭಾವಿಸಿ ಅರ್ಪಿಸಿ. ಮೈಲಾಪುರ ಗ್ರಂಥದ ಕ್ರಮ: ಪದಪದವಾಗಿ ಬೆಳೆಸಿದ ಮೂಲಮಂತ್ರ, ನಂತರ ಎಂಟು ಆಜ್ಯಾಹುತಿ; “ಗಣಾನಾಂ ತ್ವಾ…”ದಿಂದ ಮಿಶ್ರಣ (೮ ಅಥವಾ ೧೬); ಗಣೇಶ ಗಾಯತ್ರಿ (೮); “ವಕ್ರತುಂಡ…” (೮); ಯಜಮಾನನಿಗಾಗಿ ಪ್ರಾರ್ಥನೆ (ಕನಿಷ್ಠ ೪); ಹಾಲು/ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ಗರಿಕೆ ಮೂಲಮಂತ್ರದಿಂದ (೮); ಅರಳು (೮); ಕಾಯಿಚಿಪ್ಪಿನ ಎರಡು ಅರ್ಧಗಳು; ಮತ್ತೆ ಮೂಲಮಂತ್ರದಿಂದ ಎಂಟು ಆಜ್ಯಾಹುತಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ श्रीं ह्रीं क्लीं ग्लौं गं गणपतये वरवरद सर्वजनं मे वशमानय स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'The mula mantra with svaha; this is for Mahaganapati, not mine. (First build it up word by word — om svaha, om shrim svaha, om shrim hrim svaha … — one oblation of ghee for each step, then the whole mantra; then eight oblations of ghee with the full mantra, holding the ghee vessel in the left hand. Learn the mantra from your guru.)',
            kn: 'ಸ್ವಾಹಾಸಹಿತ ಮೂಲಮಂತ್ರ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಮೊದಲು ಪದಪದವಾಗಿ ಬೆಳೆಸಿ — ಓಂ ಸ್ವಾಹಾ, ಓಂ ಶ್ರೀಂ ಸ್ವಾಹಾ, ಓಂ ಶ್ರೀಂ ಹ್ರೀಂ ಸ್ವಾಹಾ … — ಪ್ರತಿ ಹಂತಕ್ಕೆ ಒಂದು ಆಜ್ಯಾಹುತಿ, ಕೊನೆಗೆ ಪೂರ್ಣ ಮಂತ್ರ; ನಂತರ ಎಡಗೈಯಲ್ಲಿ ಆಜ್ಯಪಾತ್ರೆ ಹಿಡಿದು ಪೂರ್ಣ ಮಂತ್ರದಿಂದ ಎಂಟು ಆಜ್ಯಾಹುತಿ. ಮಂತ್ರವನ್ನು ಗುರುವಿನಿಂದ ಕಲಿಯಿರಿ.)',
          },
        },
        {
          text: 'गणानां त्वा गणपतिं हवामहे कविं कवीनामुपमश्रवस्तमम् ।\nज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आ नः शृण्वन्नूतिभिः सीद सादनम् स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'We call you, lord of the hosts, the poet of poets, most renowned of the renowned, the eldest king of prayers, O Brahmanaspati: come to us, listening, with your helps, and take your seat. (Rigveda 2.23.1) (Offered with the mixture, 8 or 16 times.) Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಗಣಗಳ ಒಡೆಯನೇ, ಕವಿಗಳಲ್ಲಿ ಕವಿಯೇ, ಅತಿ ಕೀರ್ತಿಶಾಲಿಯೇ, ಮಂತ್ರಗಳಲ್ಲಿ ಜ್ಯೇಷ್ಠರಾಜನೇ, ಬ್ರಹ್ಮಣಸ್ಪತಿಯೇ, ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇವೆ: ಕೇಳುತ್ತಾ, ನಿನ್ನ ರಕ್ಷಣೆಗಳೊಡನೆ ನಮ್ಮ ಬಳಿ ಬಂದು ಆಸನದಲ್ಲಿ ಕುಳಿತುಕೋ. (ಋಗ್ವೇದ ೨.೨೩.೧) (ಮಿಶ್ರ ದ್ರವ್ಯದಿಂದ ೮ ಅಥವಾ ೧೬ ಬಾರಿ.) ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'तत्पुरुषाय विद्महे वक्रतुण्डाय धीमहि । तन्नो दन्तिः प्रचोदयात् स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'May we know that Supreme Person; let us meditate on the one with the curved trunk; may the tusked one inspire us. (The Ganesha Gayatri of the Mahanarayana Upanishad, eight offerings.) Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಆ ಪರಮಪುರುಷನನ್ನು ಅರಿಯೋಣ; ವಕ್ರತುಂಡನನ್ನು ಧ್ಯಾನಿಸೋಣ; ಆ ದಂತಿಯು ನಮ್ಮನ್ನು ಪ್ರೇರಿಸಲಿ. (ಮಹಾನಾರಾಯಣೋಪನಿಷತ್ತಿನ ಗಣೇಶ ಗಾಯತ್ರಿ, ಎಂಟು ಆಹುತಿ.) ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ ।\nअविघ्नं कुरु मे देव सर्वकार्येषु सर्वदा स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'O curved-trunked one of mighty body, bright as ten million suns, O god, make all my undertakings always free of obstacles. (Eight offerings.) Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಓ ವಕ್ರತುಂಡನೇ, ಮಹಾಕಾಯನೇ, ಕೋಟಿಸೂರ್ಯಪ್ರಭನೇ, ದೇವನೇ, ನನ್ನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನೂ ಸದಾ ನಿರ್ವಿಘ್ನಗೊಳಿಸು. (ಎಂಟು ಆಹುತಿ.) ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'अमुकनक्षत्रे अमुकराशौ जातस्य अमुकशर्मणः अस्य यजमानस्य सकुटुम्बस्य\nअनुकूलं प्रयच्छ प्रयच्छ । प्रतिकूलं नाशय नाशय । आपदो नाशय नाशय ।\nसम्पदो वर्धय वर्धय । सर्वत्र विजयं प्रापय प्रापय । सर्वजनानुकूल्यं कुरु कुरु ।\nअविघ्नं कुरु मे देव सर्वकार्येषु सर्वदा स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'For this yajamana, so-and-so, born in such a nakshatra and rashi, and his family: grant what is favourable, destroy what is adverse, destroy misfortunes, increase prosperity, bring victory everywhere, win the goodwill of all people; O god, make all my undertakings always free of obstacles. (At least four offerings; Mylapore manual.) Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಇಂತಹ ನಕ್ಷತ್ರ–ರಾಶಿಯಲ್ಲಿ ಜನಿಸಿದ ಇಂತಹ ಹೆಸರಿನ ಈ ಯಜಮಾನನಿಗೂ ಕುಟುಂಬಕ್ಕೂ ಅನುಕೂಲವನ್ನು ಕೊಡು, ಪ್ರತಿಕೂಲವನ್ನು ನಾಶಮಾಡು, ಆಪತ್ತುಗಳನ್ನು ನಾಶಮಾಡು, ಸಂಪತ್ತನ್ನು ಬೆಳೆಸು, ಎಲ್ಲೆಡೆ ವಿಜಯ ತಂದುಕೊಡು, ಎಲ್ಲ ಜನರ ಅನುಕೂಲ ಮಾಡು; ದೇವನೇ, ನನ್ನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನು ಸದಾ ನಿರ್ವಿಘ್ನಗೊಳಿಸು. (ಕನಿಷ್ಠ ನಾಲ್ಕು ಆಹುತಿ; ಮೈಲಾಪುರ ಗ್ರಂಥ.) ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'उत्तिष्ठ पुरुष हरितपिङ्गल लोहिताक्ष धनधान्यसमृद्धिं देहि देहि दापय दापय स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'Rise, O Person, green-and-tawny, red-eyed; give, give, cause to be given abundance of wealth and grain. (Eight offerings of puffed rice; before it eight offerings of durva dipped in milk or ghee with the mula mantra. Mylapore manual.) Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಏಳು, ಓ ಪುರುಷನೇ, ಹಸಿರು–ಹಳದಿ ವರ್ಣನೇ, ಕೆಂಗಣ್ಣನೇ, ಧನಧಾನ್ಯ ಸಮೃದ್ಧಿಯನ್ನು ಕೊಡು ಕೊಡು, ಕೊಡಿಸು ಕೊಡಿಸು. (ಅರಳಿನಿಂದ ಎಂಟು ಆಹುತಿ; ಅದಕ್ಕೆ ಮೊದಲು ಹಾಲು ಅಥವಾ ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ಗರಿಕೆಯಿಂದ ಮೂಲಮಂತ್ರದೊಡನೆ ಎಂಟು ಆಹುತಿ. ಮೈಲಾಪುರ ಗ್ರಂಥ.) ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।\nस नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः स्वाहा ।\nअग्निरूपाय महागणपतय इदं न मम ॥',
          meaning: {
            en: 'Let us press Soma for Jatavedas; may he burn up the wealth of the hostile; may Agni carry us across all difficulties and wrongs as a boat across the river, svaha. This is for Mahaganapati in the form of Agni, not mine. (Rigveda 1.99.1, offering the half of the coconut shell with the eyes.)',
            kn: 'ಜಾತವೇದನಿಗಾಗಿ ಸೋಮವನ್ನು ಹಿಂಡೋಣ; ಶತ್ರುವಿನ ಸಂಪತ್ತನ್ನು ಅವನು ಸುಟ್ಟುಹಾಕಲಿ; ನಾವೆಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಅಗ್ನಿಯು ನಮ್ಮನ್ನು ಎಲ್ಲ ಸಂಕಟ–ಪಾಪಗಳಿಂದ ಪಾರುಮಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿರೂಪಿ ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧.೯೯.೧; ಕಣ್ಣುಗಳಿರುವ ಕಾಯಿಚಿಪ್ಪಿನ ಅರ್ಧವನ್ನು ಅರ್ಪಿಸುತ್ತ.)',
          },
        },
        {
          text: 'ध्रुवासु त्वासु क्षितिषु क्षियन्तो व्यस्मत्पाशं वरुणो मुमोचत् ।\nअवो वन्वाना अदितेरुपस्थाद्यूयं पात स्वस्तिभिः सदा नः स्वाहा ।\nवरुणरूपाय महागणपतय इदं न मम ॥',
          meaning: {
            en: 'Dwelling in these firm abodes, may Varuna loosen his noose from us; winning help from the lap of Aditi — protect us always with blessings, svaha. This is for Mahaganapati in the form of Varuna, not mine. (Rigveda 7.88.7, offering the other half of the shell.)',
            kn: 'ಈ ಸ್ಥಿರ ನೆಲೆಗಳಲ್ಲಿ ವಾಸಿಸುವ ನಮ್ಮಿಂದ ವರುಣನು ಪಾಶವನ್ನು ಬಿಡಿಸಲಿ; ಅದಿತಿಯ ಮಡಿಲಿನಿಂದ ರಕ್ಷಣೆಯನ್ನು ಪಡೆಯುತ್ತ — ನೀವು ಸದಾ ಮಂಗಳಗಳಿಂದ ನಮ್ಮನ್ನು ಕಾಪಾಡಿರಿ, ಸ್ವಾಹಾ. ಇದು ವರುಣರೂಪಿ ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೭.೮೮.೭; ಚಿಪ್ಪಿನ ಇನ್ನೊಂದು ಅರ್ಧವನ್ನು ಅರ್ಪಿಸುತ್ತ.)',
          },
        },
      ],
    },
    {
      title: 'अथर्वशीर्षहोमः',
      titleEn: 'Homa with the Ganapati Atharvashirsha',
      note: 'Many families also offer with the Ganapati Atharvashirsha (the Mylapore manual: “doing homa with the mantras of the Atharvashirsha begets great benefit”; the Atharvashirsha itself praises worship with durva, puffed rice and a thousand modakas). Recite the opening shanti-patha (भद्रं कर्णेभिः…), then offer the mixture or ghee once at the end of each of the ten sections below; the phalashruti that follows (sections 11-14) and the closing shanti-patha are recited, not offered. For 21 or 108 recitations, repeat the ten offerings each time. Madhva manuals do not use the Atharvashirsha.',
      noteKn: 'ಅನೇಕ ಮನೆತನಗಳು ಗಣಪತಿ ಅಥರ್ವಶೀರ್ಷದಿಂದಲೂ ಹೋಮ ಮಾಡುತ್ತಾರೆ (ಮೈಲಾಪುರ: “ಅಥರ್ವಶೀರ್ಷ ಮಂತ್ರಗಳಿಂದ ಹೋಮ ಮಾಡಿದರೆ ಮಹಾಫಲ”; ಅಥರ್ವಶೀರ್ಷವೇ ಗರಿಕೆ, ಅರಳು, ಸಾವಿರ ಮೋದಕಗಳ ಯಜನವನ್ನು ಹೊಗಳುತ್ತದೆ). ಆರಂಭದ ಶಾಂತಿಪಾಠ (ಭದ್ರಂ ಕರ್ಣೇಭಿಃ…) ಹೇಳಿ, ಕೆಳಗಿನ ಹತ್ತು ಭಾಗಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರ ಕೊನೆಯಲ್ಲಿ ಮಿಶ್ರಣ ಅಥವಾ ತುಪ್ಪದಿಂದ ಒಂದು ಆಹುತಿ; ನಂತರದ ಫಲಶ್ರುತಿ (೧೧–೧೪) ಮತ್ತು ಸಮಾಪ್ತಿ ಶಾಂತಿಪಾಠ ಪಠಣ ಮಾತ್ರ. ೨೧ ಅಥವಾ ೧೦೮ ಆವೃತ್ತಿಗೆ ಪ್ರತಿ ಬಾರಿ ಹತ್ತು ಆಹುತಿಗಳನ್ನು ಪುನರಾವರ್ತಿಸಿ. ಮಾಧ್ವ ಗ್ರಂಥಗಳು ಅಥರ್ವಶೀರ್ಷವನ್ನು ಬಳಸುವುದಿಲ್ಲ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ भद्रं कर्णेभिः शृणुयाम देवाः ।\nभद्रं पश्येमाक्षभिर्यजत्राः ।\nस्थिरैरङ्गैस्तुष्टुवाꣳसस्तनूभिः ।\nव्यशेम देवहितं यदायुः ॥\nॐ स्वस्ति न इन्द्रो वृद्धश्रवाः ।\nस्वस्ति नः पूषा विश्ववेदाः ।\nस्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः ।\nस्वस्ति नो बृहस्पतिर्दधातु ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'O gods, may we hear what is auspicious with our ears; may we see what is auspicious with our eyes, O worshipful ones. With firm limbs and bodies, praising you, may we live the span of life given by the gods. May Indra of ancient fame be gracious to us; may Pushan, the all-knowing, be gracious; may Tarkshya of unharmed rim be gracious; may Brihaspati grant us well-being. Om peace, peace, peace.',
            kn: 'ಓ ದೇವತೆಗಳೇ, ನಾವು ಕಿವಿಗಳಿಂದ ಶುಭವನ್ನೇ ಕೇಳುವಂತಾಗಲಿ; ಪೂಜ್ಯರೇ, ಕಣ್ಣುಗಳಿಂದ ಶುಭವನ್ನೇ ನೋಡುವಂತಾಗಲಿ. ದೃಢವಾದ ಅಂಗಗಳಿಂದ, ದೇಹಗಳಿಂದ ನಿಮ್ಮನ್ನು ಸ್ತುತಿಸುತ್ತಾ ದೇವರು ಕೊಟ್ಟ ಆಯುಸ್ಸನ್ನು ಅನುಭವಿಸುವಂತಾಗಲಿ. ವೃದ್ಧಕೀರ್ತಿಯ ಇಂದ್ರನು ನಮಗೆ ಮಂಗಳ ಮಾಡಲಿ; ಸರ್ವಜ್ಞನಾದ ಪೂಷನು ಮಂಗಳ ಮಾಡಲಿ; ಅರಿಷ್ಟನೇಮಿಯಾದ ತಾರ್ಕ್ಷ್ಯನು ಮಂಗಳ ಮಾಡಲಿ; ಬೃಹಸ್ಪತಿಯು ನಮಗೆ ಮಂಗಳವನ್ನು ಕೊಡಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
        {
          text: 'ॐ नमस्ते गणपतये ।\nत्वमेव प्रत्यक्षं तत्त्वमसि ।\nत्वमेव केवलं कर्ताऽसि ।\nत्वमेव केवलं धर्ताऽसि ।\nत्वमेव केवलं हर्ताऽसि ।\nत्वमेव सर्वं खल्विदं ब्रह्मासि ।\nत्वं साक्षादात्माऽसि नित्यम् स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'Om, salutations to Ganapati. You alone are the visible Truth. You alone are the creator; you alone are the sustainer; you alone are the destroyer. You alone are all this, Brahman indeed. You are the Self itself, eternal. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಓಂ, ಗಣಪತಿಗೆ ನಮಸ್ಕಾರ. ನೀನೇ ಪ್ರತ್ಯಕ್ಷ ತತ್ತ್ವ. ನೀನೇ ಕರ್ತ; ನೀನೇ ಧರ್ತ; ನೀನೇ ಹರ್ತ. ಇದೆಲ್ಲವೂ ನೀನೇ, ಬ್ರಹ್ಮವೇ ಆಗಿರುವೆ. ನೀನು ನಿತ್ಯವಾದ ಸಾಕ್ಷಾತ್ ಆತ್ಮ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'ऋतं वच्मि । सत्यं वच्मि स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'I speak the right; I speak the truth. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ನಾನು ಋತವನ್ನು ಹೇಳುತ್ತೇನೆ; ಸತ್ಯವನ್ನು ಹೇಳುತ್ತೇನೆ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'अव त्वं माम् । अव वक्तारम् ।\nअव श्रोतारम् । अव दातारम् ।\nअव धातारम् । अवानूचानमव शिष्यम् ।\nअव पश्चात्तात् । अव पुरस्तात् ।\nअवोत्तरात्तात् । अव दक्षिणात्तात् ।\nअव चोर्ध्वात्तात् । अवाधरात्तात् ।\nसर्वतो मां पाहि पाहि समन्तात् स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'Protect me; protect the speaker; protect the listener; protect the giver; protect the holder (of the teaching); protect the learned teacher and the pupil. Protect from behind and from the front, from the north and from the south, from above and from below. Guard me on every side, guard me completely. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ನನ್ನನ್ನು ರಕ್ಷಿಸು; ಹೇಳುವವನನ್ನು ರಕ್ಷಿಸು; ಕೇಳುವವನನ್ನು ರಕ್ಷಿಸು; ಕೊಡುವವನನ್ನು ರಕ್ಷಿಸು; ಧರಿಸುವವನನ್ನು ರಕ್ಷಿಸು; ಜ್ಞಾನಿಯಾದ ಗುರುವನ್ನೂ ಶಿಷ್ಯನನ್ನೂ ರಕ್ಷಿಸು. ಹಿಂದಿನಿಂದ, ಮುಂದಿನಿಂದ, ಉತ್ತರದಿಂದ, ದಕ್ಷಿಣದಿಂದ, ಮೇಲಿನಿಂದ, ಕೆಳಗಿನಿಂದ ರಕ್ಷಿಸು. ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ನನ್ನನ್ನು ಕಾಪಾಡು, ಕಾಪಾಡು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'त्वं वाङ्मयस्त्वं चिन्मयः ।\nत्वमानन्दमयस्त्वं ब्रह्ममयः ।\nत्वं सच्चिदानन्दाद्वितीयोऽसि ।\nत्वं प्रत्यक्षं ब्रह्मासि ।\nत्वं ज्ञानमयो विज्ञानमयोऽसि स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'You are of the nature of speech and of consciousness; you are of bliss and of Brahman. You are Existence-Consciousness-Bliss, without a second. You are the visible Brahman. You are full of knowledge and of realisation. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ನೀನು ವಾಙ್ಮಯ, ನೀನು ಚಿನ್ಮಯ; ನೀನು ಆನಂದಮಯ, ನೀನು ಬ್ರಹ್ಮಮಯ. ನೀನು ಸಚ್ಚಿದಾನಂದ ಅದ್ವಿತೀಯ. ನೀನು ಪ್ರತ್ಯಕ್ಷ ಬ್ರಹ್ಮ. ನೀನು ಜ್ಞಾನಮಯ, ವಿಜ್ಞಾನಮಯ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'सर्वं जगदिदं त्वत्तो जायते ।\nसर्वं जगदिदं त्वत्तस्तिष्ठति ।\nसर्वं जगदिदं त्वयि लयमेष्यति ।\nसर्वं जगदिदं त्वयि प्रत्येति ।\nत्वं भूमिरापोऽनलोऽनिलो नभः ।\nत्वं चत्वारि वाक्पदानि स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'All this world is born from you; all this world stands in you; all this world will dissolve into you; all this world returns to you. You are earth, water, fire, air and space. You are the four levels of speech. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಈ ಜಗತ್ತೆಲ್ಲವೂ ನಿನ್ನಿಂದ ಹುಟ್ಟುತ್ತದೆ; ನಿನ್ನಲ್ಲಿ ನೆಲೆಯಾಗಿರುತ್ತದೆ; ನಿನ್ನಲ್ಲಿ ಲಯವಾಗುತ್ತದೆ; ನಿನ್ನಲ್ಲೇ ಮರಳಿ ಸೇರುತ್ತದೆ. ನೀನು ಭೂಮಿ, ನೀರು, ಅಗ್ನಿ, ವಾಯು, ಆಕಾಶ. ನೀನು ವಾಕ್ಕಿನ ನಾಲ್ಕು ಪದಗಳು (ಪರಾ, ಪಶ್ಯಂತೀ, ಮಧ್ಯಮಾ, ವೈಖರೀ). ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'त्वं गुणत्रयातीतः । त्वमवस्थात्रयातीतः ।\nत्वं देहत्रयातीतः ।\nत्वं कालत्रयातीतः ।\nत्वं मूलाधारस्थितोऽसि नित्यम् ।\nत्वं शक्तित्रयात्मकः ।\nत्वां योगिनो ध्यायन्ति नित्यम् ।\nत्वं ब्रह्मा त्वं विष्णुस्त्वं रुद्रस्त्वमिन्द्रस्त्वमग्निस्त्वं वायुस्त्वं सूर्यस्त्वं चन्द्रमास्त्वं ब्रह्म भूर्भुवःस्वरोम् स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'You are beyond the three gunas, beyond the three states (waking, dream, deep sleep), beyond the three bodies, beyond the three times. You abide always in the muladhara. You are made of the three powers. Yogis meditate on you always. You are Brahma, Vishnu, Rudra, Indra, Agni, Vayu, Surya, Chandra; you are Brahman, and Bhur, Bhuvah, Svah and Om. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ನೀನು ತ್ರಿಗುಣಗಳನ್ನು ಮೀರಿದವನು, ಮೂರು ಅವಸ್ಥೆಗಳನ್ನು (ಜಾಗ್ರತ್, ಸ್ವಪ್ನ, ಸುಷುಪ್ತಿ) ಮೀರಿದವನು, ಮೂರು ದೇಹಗಳನ್ನು ಮೀರಿದವನು, ಮೂರು ಕಾಲಗಳನ್ನು ಮೀರಿದವನು. ನೀನು ನಿತ್ಯವೂ ಮೂಲಾಧಾರದಲ್ಲಿ ನೆಲೆಸಿರುವೆ. ನೀನು ತ್ರಿಶಕ್ತಿಸ್ವರೂಪ. ಯೋಗಿಗಳು ನಿತ್ಯವೂ ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾರೆ. ನೀನು ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಇಂದ್ರ, ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ಚಂದ್ರ; ನೀನೇ ಬ್ರಹ್ಮ, ಭೂಃ ಭುವಃ ಸ್ವಃ ಮತ್ತು ಓಂ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'गणादिं पूर्वमुच्चार्य वर्णादींस्तदनन्तरम् ।\nअनुस्वारः परतरः ।\nअर्धेन्दुलसितम् ।\nतारेण ऋद्धम् ।\nएतत्तव मनुस्वरूपम् ।\nगकारः पूर्वरूपम् ।\nअकारो मध्यमरूपम् ।\nअनुस्वारश्चान्त्यरूपम् ।\nबिन्दुरुत्तररूपम् ।\nनादः सन्धानम् ।\nसंहिता सन्धिः ।\nसैषा गणेशविद्या ।\nगणक ऋषिः ।\nनिचृद्गायत्रीच्छन्दः ।\nगणपतिर्देवता ।\nॐ गं गणपतये नमः स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'Pronounce first the first letter of the word "gana", then the first letter of the alphabet (a), then the anusvara after it, adorned by the half-moon and enclosed by Om: this is the form of your mantra. The letter "g" is its first form, "a" its middle form, the anusvara its last form, the bindu its upper form, the nada its junction, and their union the joining. This is Ganesha-vidya. The seer is Ganaka, the metre Nichrit-gayatri, the deity Ganapati: Om gam ganapataye namah. Svaha; this is for Mahaganapati, not mine.',
            kn: '“ಗಣ” ಶಬ್ದದ ಆದ್ಯಕ್ಷರವನ್ನು (ಗ) ಮೊದಲು ಉಚ್ಚರಿಸಿ, ಅನಂತರ ವರ್ಣಾದಿಯಾದ ಅ-ಕಾರ, ಅದರ ಮೇಲೆ ಅನುಸ್ವಾರ; ಅರ್ಧಚಂದ್ರನಿಂದ ಶೋಭಿತವಾಗಿ ಓಂಕಾರದಿಂದ ಆವೃತವಾದದ್ದು ನಿನ್ನ ಮಂತ್ರಸ್ವರೂಪ. ಗಕಾರ ಪೂರ್ವರೂಪ, ಅಕಾರ ಮಧ್ಯರೂಪ, ಅನುಸ್ವಾರ ಅಂತ್ಯರೂಪ, ಬಿಂದು ಉತ್ತರರೂಪ, ನಾದ ಸಂಧಾನ, ಸಂಹಿತೆಯೇ ಸಂಧಿ. ಇದೇ ಗಣೇಶವಿದ್ಯೆ. ಗಣಕ ಋಷಿ, ನಿಚೃದ್ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಗಣಪತಿ ದೇವತೆ: ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'एकदन्ताय विद्महे वक्रतुण्डाय धीमहि ।\nतन्नो दन्तिः प्रचोदयात् स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'We know the one-tusked; we meditate on the curved-trunked. May that Danti (the elephant-faced) inspire us. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಏಕದಂತನನ್ನು ತಿಳಿಯುತ್ತೇವೆ; ವಕ್ರತುಂಡನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಆ ದಂತಿಯು ನಮ್ಮನ್ನು ಪ್ರೇರಿಸಲಿ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'एकदन्तं चतुर्हस्तं पाशमङ्कुशधारिणम् ।\nरदं च वरदं हस्तैर्बिभ्राणं मूषकध्वजम् ॥\nरक्तं लम्बोदरं शूर्पकर्णकं रक्तवाससम् ।\nरक्तगन्धानुलिप्ताङ्गं रक्तपुष्पैः सुपूजितम् ॥\nभक्तानुकम्पिनं देवं जगत्कारणमच्युतम् ।\nआविर्भूतं च सृष्ट्यादौ प्रकृतेः पुरुषात्परम् ॥\nएवं ध्यायति यो नित्यं स योगी योगिनां वरः स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'He has one tusk and four hands, bearing the noose and the goad, and with his hands holding a tusk and showing the boon-giving gesture; his banner is the mouse. He is red, big-bellied, with ears like winnowing fans, wearing red clothes, his limbs anointed with red sandal and worshipped with red flowers. He is the god compassionate to devotees, the cause of the world, the imperishable, who appeared at the beginning of creation, beyond Prakriti and Purusha. He who meditates on him thus every day is a yogi, the best of yogis. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ಏಕದಂತನು, ನಾಲ್ಕು ಕೈಗಳುಳ್ಳವನು, ಪಾಶ ಮತ್ತು ಅಂಕುಶ ಧರಿಸಿದವನು; ಕೈಗಳಲ್ಲಿ ದಂತ ಮತ್ತು ವರಮುದ್ರೆ ಹಿಡಿದವನು; ಇಲಿಯೇ ಧ್ವಜವುಳ್ಳವನು. ಕೆಂಪು ವರ್ಣದವನು, ಲಂಬೋದರ, ಮೊರದಂತಹ ಕಿವಿಯುಳ್ಳವನು, ಕೆಂಪು ವಸ್ತ್ರ ಧರಿಸಿದವನು, ಕೆಂಪು ಗಂಧ ಲೇಪಿತ ಅಂಗಗಳುಳ್ಳವನು, ಕೆಂಪು ಹೂವುಗಳಿಂದ ಚೆನ್ನಾಗಿ ಪೂಜಿತನು. ಭಕ್ತರ ಮೇಲೆ ಅನುಕಂಪವುಳ್ಳ ದೇವನು, ಜಗತ್ತಿನ ಕಾರಣನು, ಅಚ್ಯುತನು, ಸೃಷ್ಟಿಯ ಆದಿಯಲ್ಲಿ ಆವಿರ್ಭವಿಸಿದವನು, ಪ್ರಕೃತಿ ಪುರುಷರನ್ನು ಮೀರಿದವನು. ಹೀಗೆ ನಿತ್ಯವೂ ಧ್ಯಾನಿಸುವವನು ಯೋಗಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠ ಯೋಗಿ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'नमो व्रातपतये नमो गणपतये नमः प्रमथपतये\nनमस्तेऽस्तु लम्बोदरायैकदन्ताय विघ्ननाशिने\nशिवसुताय वरदमूर्तये नमः स्वाहा ।\nमहागणपतय इदं न मम ॥',
          meaning: {
            en: 'Salutations to the lord of the groups (vratapati), to Ganapati, to the lord of the pramathas. Salutations to you, the big-bellied, the one-tusked, destroyer of obstacles, son of Shiva, the form that gives boons. Svaha; this is for Mahaganapati, not mine.',
            kn: 'ವ್ರಾತಪತಿಗೆ ನಮಸ್ಕಾರ; ಗಣಪತಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರಮಥಪತಿಗೆ ನಮಸ್ಕಾರ. ಲಂಬೋದರನಿಗೆ, ಏಕದಂತನಿಗೆ, ವಿಘ್ನನಾಶಕನಿಗೆ, ಶಿವಪುತ್ರನಿಗೆ, ವರದಮೂರ್ತಿಗೆ ನಿನಗೆ ನಮಸ್ಕಾರ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'उत्तराङ्गम्',
      titleEn: 'Uttaranga: go to the Common Procedure',
      note: 'Now do the uttaranga in the Common Procedure. Madhva: by the Apurita tantra there is no svishtakrit; do the prayaschitta offerings, the purnahuti with समुद्रादूर्मिः… (with a coconut), the samsrava, the marjana and the rest. Smarta: the jaya, abhyatana and rashtrabhrt offerings, svishtakrit, prayaschitta, then the purnahuti: पूर्णाहुतिमुत्तमाम्… and गणानां त्वा… with svaha, a coconut or fruit wrapped in silk, then the mula mantra until all the materials are consumed; then the mula mantra japa sixteen times, the Atharvashirsha, Bhagya, Durga and Sri Suktas as time allows, the Ganesha Gayatri and नमो व्रातपतये…; then सप्त ते अग्ने…, parishechana, marjana, the gift to the Brahma and the upasthana. After the upasthana take back Mahaganapati from the fire into your heart with a flower: अग्नौ आवाहितं महागणपतिं हृदि प्रवेशयामि. Then come back here for the closing puja.',
      noteKn: 'ಈಗ ಸಾಮಾನ್ಯ ಕ್ರಮದಲ್ಲಿರುವ ಉತ್ತರಾಂಗ ಮಾಡಿ. ಮಾಧ್ವ: ಆಪೂರಿತ ತಂತ್ರದಂತೆ ಸ್ವಿಷ್ಟಕೃತ್ ಇಲ್ಲ; ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ತೆಂಗಿನಕಾಯಿಯೊಡನೆ “ಸಮುದ್ರಾದೂರ್ಮಿಃ…” ಪೂರ್ಣಾಹುತಿ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ ಇತ್ಯಾದಿ. ಸ್ಮಾರ್ತ: ಜಯ, ಅಭ್ಯಾತಾನ, ರಾಷ್ಟ್ರಭೃತ್, ಸ್ವಿಷ್ಟಕೃತ್, ಪ್ರಾಯಶ್ಚಿತ್ತ; ನಂತರ ಪೂರ್ಣಾಹುತಿ: “ಪೂರ್ಣಾಹುತಿಮುತ್ತಮಾಮ್…” ಮತ್ತು ಸ್ವಾಹಾಸಹಿತ “ಗಣಾನಾಂ ತ್ವಾ…”, ರೇಷ್ಮೆಯಲ್ಲಿ ಸುತ್ತಿದ ಕಾಯಿ/ಫಲ; ದ್ರವ್ಯಗಳು ಮುಗಿಯುವವರೆಗೆ ಮೂಲಮಂತ್ರ; ನಂತರ ಮೂಲಮಂತ್ರ ಜಪ ಹದಿನಾರು, ಸಮಯವಿದ್ದಂತೆ ಅಥರ್ವಶೀರ್ಷ, ಭಾಗ್ಯ, ದುರ್ಗಾ, ಶ್ರೀ ಸೂಕ್ತಗಳು, ಗಣೇಶ ಗಾಯತ್ರಿ, “ನಮೋ ವ್ರಾತಪತಯೇ…”; ನಂತರ “ಸಪ್ತ ತೇ ಅಗ್ನೇ…”, ಪರಿಷೇಚನ, ಮಾರ್ಜನ, ಬ್ರಹ್ಮವರದಾನ, ಉಪಸ್ಥಾನ. ಉಪಸ್ಥಾನದ ನಂತರ ಒಂದು ಹೂವಿನಿಂದ ಅಗ್ನಿಯಲ್ಲಿನ ಮಹಾಗಣಪತಿಯನ್ನು ಹೃದಯಕ್ಕೆ ತೆಗೆದುಕೊಳ್ಳಿ: “ಅಗ್ನೌ ಆವಾಹಿತಂ ಮಹಾಗಣಪತಿಂ ಹೃದಿ ಪ್ರವೇಶಯಾಮಿ”. ನಂತರ ಸಮಾಪ್ತಿ ಪೂಜೆಗೆ ಇಲ್ಲಿಗೆ ಮರಳಿ.',
      verses: [
        {
          text: 'ॐ नमो व्रातपतये नमो गणपतये नमः प्रमथपतये\nनमस्तेऽस्तु लम्बोदरायैकदन्ताय विघ्नविनाशिने\nशिवसुताय वरदमूर्तये नमो नमः ॥',
          meaning: {
            en: 'Om, salutations to the lord of the hosts; salutations to the lord of the ganas; salutations to the lord of the pramathas. Salutations to you, big-bellied, one-tusked, destroyer of obstacles, son of Shiva, in the form that grants boons; salutations again and again. (Atharvashirsha 10; recited after the purnahuti in the Mylapore manual and given as the moola mantra in the Tamil Ganapati Homam.)',
            kn: 'ಓಂ, ವ್ರಾತಪತಿಗೆ ನಮಸ್ಕಾರ; ಗಣಪತಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರಮಥಪತಿಗೆ ನಮಸ್ಕಾರ. ಲಂಬೋದರನೇ, ಏಕದಂತನೇ, ವಿಘ್ನವಿನಾಶಕನೇ, ಶಿವಸುತನೇ, ವರದಮೂರ್ತಿಯೇ, ನಿನಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. (ಅಥರ್ವಶೀರ್ಷ ೧೦; ಮೈಲಾಪುರ ಗ್ರಂಥದಲ್ಲಿ ಪೂರ್ಣಾಹುತಿಯ ನಂತರ; ತಮಿಳು ಗಣಪತಿಹೋಮದಲ್ಲಿ ಮೂಲಮಂತ್ರ.)',
          },
          when: { tradition: ['smarta'] },
        },
        {
          text: 'अग्नौ आवाहितं महागणपतिं हृदि प्रवेशयामि ॥',
          meaning: {
            en: 'I take Mahaganapati, invoked in the fire, into my heart. (Smelling a flower offered to him; Mylapore manual.)',
            kn: 'ಅಗ್ನಿಯಲ್ಲಿ ಆವಾಹಿಸಿದ ಮಹಾಗಣಪತಿಯನ್ನು ಹೃದಯದಲ್ಲಿ ಪ್ರವೇಶಗೊಳಿಸುತ್ತೇನೆ. (ಅವನಿಗೆ ಅರ್ಪಿಸಿದ ಹೂವನ್ನು ಮೂಸುತ್ತ.)',
          },
          when: { tradition: ['smarta'] },
        },
      ],
    },
    {
      title: 'पुनःपूजा',
      titleEn: 'Closing puja of Mahaganapati in the kumbha',
      note: 'Worship Mahaganapati in the kumbha again: akshata for a seat, water for feet, hands and mouth, a bath with आपो हि ष्ठा… and the Pavamana verses, clothes, sandal, kumkum, flowers with the sixteen names, incense and lamp; the great naivedya (rice, vadas, coconut pieces and bananas) with the naivedya mantras; betel; the camphor arati; the mantrapushpa; pradakshina and namaskara with the prayers below; and the umbrella, chamara and all the honours (Mylapore manual).',
      noteKn: 'ಕುಂಭದಲ್ಲಿರುವ ಮಹಾಗಣಪತಿಯನ್ನು ಮತ್ತೆ ಪೂಜಿಸಿ: ಆಸನಕ್ಕೆ ಅಕ್ಷತೆ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, “ಆಪೋ ಹಿ ಷ್ಠಾ…” ಮತ್ತು ಪವಮಾನ ಮಂತ್ರಗಳಿಂದ ಸ್ನಾನ, ವಸ್ತ್ರ, ಗಂಧ, ಕುಂಕುಮ, ಹದಿನಾರು ನಾಮಗಳಿಂದ ಹೂವು, ಧೂಪ–ದೀಪ; ನೈವೇದ್ಯ ಮಂತ್ರಗಳಿಂದ ಮಹಾನೈವೇದ್ಯ (ಅನ್ನ, ವಡೆ, ಕಾಯಿಚೂರು, ಬಾಳೆಹಣ್ಣು); ತಾಂಬೂಲ; ಕರ್ಪೂರ ಆರತಿ; ಮಂತ್ರಪುಷ್ಪ; ಕೆಳಗಿನ ಪ್ರಾರ್ಥನೆಗಳೊಡನೆ ಪ್ರದಕ್ಷಿಣ ನಮಸ್ಕಾರ; ಛತ್ರ, ಚಾಮರ ಮೊದಲಾದ ಸಮಸ್ತೋಪಚಾರ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ भूर्भुवः सुवः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।\nदेव सवितः प्रसुव । सत्यं त्वर्तेन परिषिञ्चामि । अमृतोपस्तरणमसि ।\nॐ प्राणाय स्वाहा । अपानाय स्वाहा । व्यानाय स्वाहा । उदानाय स्वाहा । समानाय स्वाहा । ब्रह्मणे स्वाहा ॥',
          meaning: {
            en: 'Om, earth, sky, heaven; we meditate on the glorious light of the divine Savitri; may he inspire our minds (sprinkling the naivedya). O god Savitri, impel. I sprinkle truth with right (water round the naivedya). You are the nectar spread beneath. Om, to prana, apana, vyana, udana and samana, and to Brahman, svaha (showing the food to the deity). (Mylapore manual; the same mantras as the Nitya Puja naivedya.)',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ; ದಿವ್ಯ ಸವಿತೃವಿನ ಶ್ರೇಷ್ಠ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರಿಸಲಿ (ನೈವೇದ್ಯಕ್ಕೆ ಪ್ರೋಕ್ಷಣೆ). ಓ ಸವಿತೃದೇವನೇ, ಪ್ರೇರಿಸು. ಸತ್ಯವನ್ನು ಋತದಿಂದ ಸುತ್ತಲೂ ಸಿಂಪಡಿಸುತ್ತೇನೆ. ನೀನು ಅಮೃತದ ಹಾಸು. ಓಂ ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಉದಾನ, ಸಮಾನಗಳಿಗೂ ಬ್ರಹ್ಮನಿಗೂ ಸ್ವಾಹಾ (ನೈವೇದ್ಯವನ್ನು ದೇವರಿಗೆ ತೋರಿಸುತ್ತ).',
          },
        },
        {
          text: 'नानाभक्ष्यसमायुक्तं नानाफलसमन्वितम् ।\nपरमान्नसमायुक्तं मधुनाज्येन संयुतम् ।\nनैवेद्यं षड्रसोपेतं प्रतिगृह्णीष्व सादरम् ॥\nश्रीमहागणपतये नमः । महानैवेद्यं निवेदयामि ॥',
          meaning: {
            en: 'Accept with kindness this naivedya of six tastes, with many foods and many fruits, with sweet rice, honey and ghee. Salutation to Sri Mahaganapati: I offer the great naivedya.',
            kn: 'ನಾನಾ ಭಕ್ಷ್ಯಗಳಿಂದ, ನಾನಾ ಫಲಗಳಿಂದ, ಪರಮಾನ್ನ, ಜೇನು, ತುಪ್ಪಗಳಿಂದ ಕೂಡಿದ ಷಡ್ರಸಯುಕ್ತ ಈ ನೈವೇದ್ಯವನ್ನು ಆದರದಿಂದ ಸ್ವೀಕರಿಸು. ಶ್ರೀಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಮಹಾನೈವೇದ್ಯ ನಿವೇದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'पूगीफलसमायुक्तं नागवल्लीदलैर्युतम् ।\nकर्पूरचूर्णसंयुक्तं ताम्बूलं प्रतिगृह्यताम् ॥',
          meaning: {
            en: 'Please accept this tambula of betel leaves with areca nut and camphor powder.',
            kn: 'ಅಡಿಕೆ, ವೀಳ್ಯದೆಲೆ ಮತ್ತು ಕರ್ಪೂರದ ಪುಡಿಯಿಂದ ಕೂಡಿದ ಈ ತಾಂಬೂಲವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: 'चन्द्रादित्यौ च ताराणि विद्युदग्निस्त्वमेव च ।\nत्वमेव सर्वज्योतींषि भज नीराजनं प्रभो ॥\nश्रीमहागणपतये नमः । कर्पूरनीराजनं सन्दर्शयामि ॥',
          meaning: {
            en: 'The moon and the sun, the stars, lightning and fire are you alone; you are all the lights: accept this arati, O Lord. Salutation to Sri Mahaganapati: I show the camphor arati. (Then namo vratapataye… is said, and the arati is taken with both hands as raksha.)',
            kn: 'ಚಂದ್ರ–ಸೂರ್ಯರು, ನಕ್ಷತ್ರಗಳು, ಮಿಂಚು, ಅಗ್ನಿ ಎಲ್ಲವೂ ನೀನೇ; ಎಲ್ಲ ಜ್ಯೋತಿಗಳೂ ನೀನೇ; ಓ ಪ್ರಭುವೇ, ಈ ನೀರಾಜನವನ್ನು ಸ್ವೀಕರಿಸು. ಶ್ರೀಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಕರ್ಪೂರ ನೀರಾಜನ ತೋರಿಸುತ್ತೇನೆ. (ನಂತರ “ನಮೋ ವ್ರಾತಪತಯೇ…”, ಆರತಿಯನ್ನು ಎರಡು ಕೈಗಳಿಂದ ರಕ್ಷೆಯಾಗಿ ಸ್ವೀಕರಿಸುವುದು.)',
          },
        },
        {
          text: 'योऽपां पुष्पं वेद । पुष्पवान्प्रजावान्पशुमान्भवति ।\nचन्द्रमा वा अपां पुष्पम् । पुष्पवान्प्रजावान्पशुमान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'One who knows the flower of the waters becomes rich in flowers, offspring and cattle. The moon is the flower of the waters; one who knows this becomes rich in flowers, offspring and cattle. One who knows the support of the waters gains a firm support.',
            kn: 'ನೀರಿನ ಹೂವನ್ನು ಅರಿತವನು ಹೂವು, ಸಂತಾನ ಮತ್ತು ಪಶುಸಂಪತ್ತುಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಚಂದ್ರನೇ ನೀರಿನ ಹೂವು; ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು ಹೂವು, ಸಂತಾನ, ಪಶುಸಂಪತ್ತುಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ತಾನೂ ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          text: 'यो वेदादौ स्वरः प्रोक्तो वेदान्ते च प्रतिष्ठितः ।\nतस्य प्रकृतिलीनस्य यः परः स महेश्वरः ॥\nश्रीमहागणपतये नमः । मन्त्रपुष्पाञ्जलिं समर्पयामि ॥',
          meaning: {
            en: 'The syllable spoken at the beginning of the Veda and established at the end of the Veda — he who is beyond it, merged in its source, is the great Lord. (Mahanarayana Upanishad.) Salutation to Sri Mahaganapati: I offer the handful of mantra-flowers.',
            kn: 'ವೇದದ ಆದಿಯಲ್ಲಿ ಹೇಳಲ್ಪಟ್ಟ, ವೇದಾಂತದಲ್ಲಿ ಪ್ರತಿಷ್ಠಿತವಾದ ಸ್ವರ — ಅದರ ಮೂಲದಲ್ಲಿ ಲೀನವಾದದ್ದರ ಆಚೆ ಇರುವವನೇ ಮಹೇಶ್ವರ. (ಮಹಾನಾರಾಯಣೋಪನಿಷತ್) ಶ್ರೀಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಮಂತ್ರಪುಷ್ಪಾಂಜಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्तु प्रदक्षिणपदे पदे ॥\nप्रकृष्टपापनाशाय प्रकृष्टफलसिद्धये ।\nप्रदक्षिणं करोमीश प्रसीद गणनायक ॥',
          meaning: {
            en: 'Whatever sins were done in former births, may they perish at every step of this circumambulation. For the destruction of grave sins and the attainment of the highest fruit I go round you, O Lord; be gracious, O leader of the hosts.',
            kn: 'ಹಿಂದಿನ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದ ಯಾವ ಪಾಪಗಳಿವೆಯೋ ಅವೆಲ್ಲವೂ ಪ್ರದಕ್ಷಿಣೆಯ ಪ್ರತಿ ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗಲಿ. ಘೋರ ಪಾಪನಾಶಕ್ಕಾಗಿ, ಉತ್ತಮ ಫಲಸಿದ್ಧಿಗಾಗಿ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡುತ್ತೇನೆ, ಓ ಈಶನೇ; ಓ ಗಣನಾಯಕನೇ, ಪ್ರಸನ್ನನಾಗು.',
          },
        },
        {
          text: 'गजाननं भूतगणादिसेवितं कपित्थजम्बूफलसारभक्षितम् ।\nउमासुतं शोकविनाशकारणं नमामि विघ्नेश्वरपादपङ्कजम् ॥\nअगजाननपद्मार्कं गजाननमहर्निशम् ।\nअनेकदं तं भक्तानामेकदन्तमुपास्महे ॥\nनमो नमो गणेशाय नमस्ते शिवसूनवे ।\nअविघ्नं कुरु मे कामं नमामि त्वां गजानन ॥',
          meaning: {
            en: 'I bow to the lotus feet of Vighneshvara, the elephant-faced, served by the hosts of beings, who eats the essence of wood-apple and rose-apple fruit, the son of Uma, the cause of the end of sorrow. Day and night we worship the one-tusked, elephant-faced one, the sun to the lotus of Parvati’s face, who gives many gifts to his devotees. Salutations again and again to Ganesha; salutation to you, son of Shiva; make my desire free of obstacles; I bow to you, O Gajanana. (Mylapore manual.)',
            kn: 'ಭೂತಗಣಗಳಿಂದ ಸೇವಿತನಾದ, ಬೇಲ–ನೇರಳೆ ಹಣ್ಣುಗಳ ಸಾರವನ್ನು ಭುಂಜಿಸುವ, ಉಮಾಸುತನಾದ, ಶೋಕನಾಶಕಾರಣನಾದ ಗಜಾನನ ವಿಘ್ನೇಶ್ವರನ ಪಾದಕಮಲಗಳಿಗೆ ನಮಿಸುತ್ತೇನೆ. ಪಾರ್ವತಿಯ ಮುಖಕಮಲಕ್ಕೆ ಸೂರ್ಯನಂತಿರುವ, ಭಕ್ತರಿಗೆ ಅನೇಕವನ್ನು ಕೊಡುವ ಏಕದಂತ ಗಜಾನನನನ್ನು ಹಗಲಿರುಳು ಉಪಾಸಿಸುತ್ತೇವೆ. ಗಣೇಶನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ; ಶಿವಸೂನುವೇ ನಿನಗೆ ನಮಸ್ಕಾರ; ನನ್ನ ಇಷ್ಟಾರ್ಥವನ್ನು ನಿರ್ವಿಘ್ನಗೊಳಿಸು; ಓ ಗಜಾನನನೇ, ನಿನಗೆ ನಮಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'तर्पणम् उद्वासनं च',
      titleEn: 'Tarpana, udvasana, abhisheka and tirtha',
      note: 'Do tarpana to Mahaganapati with the sixteen names, pouring water from the right palm over the fingertips. Recite the mula mantra twelve or sixteen times, do the anga-nyasa and the dhyana again (the directions are now released: भूर्भुवः सुवरोम् इति दिग्विमोकः), the five upacharas, गणानां त्वा… and the Ganesha Gayatri; then offer a flower and move the kumbha a little to the north, bidding Mahaganapati return to his place. With the kumbha water sprinkle the yajamana, his wife and everyone (आपो हि ष्ठा…, the abhisheka), and give it as tirtha (Mylapore manual). Then the raksha, the samarpana and the prasada as in the Common Procedure.',
      noteKn: 'ಹದಿನಾರು ನಾಮಗಳಿಂದ ಮಹಾಗಣಪತಿಗೆ ತರ್ಪಣ — ಬಲ ಅಂಗೈಯಿಂದ ಬೆರಳ ತುದಿಗಳ ಮೂಲಕ ನೀರು ಬಿಡಿ. ಮೂಲಮಂತ್ರವನ್ನು ಹನ್ನೆರಡು ಅಥವಾ ಹದಿನಾರು ಬಾರಿ ಜಪಿಸಿ, ಅಂಗನ್ಯಾಸ, ಧ್ಯಾನ (ಈಗ ದಿಗ್ವಿಮೋಕ: ಭೂರ್ಭುವಃ ಸುವರೋಮ್), ಪಂಚೋಪಚಾರ, “ಗಣಾನಾಂ ತ್ವಾ…”, ಗಣೇಶ ಗಾಯತ್ರಿ; ನಂತರ ಹೂವು ಅರ್ಪಿಸಿ ಕುಂಭವನ್ನು ಸ್ವಲ್ಪ ಉತ್ತರಕ್ಕೆ ಸರಿಸಿ ಮಹಾಗಣಪತಿಯನ್ನು ಸ್ವಸ್ಥಾನಕ್ಕೆ ಬೀಳ್ಕೊಡಿ. ಕುಂಭಜಲದಿಂದ ಯಜಮಾನ, ಪತ್ನಿ, ಎಲ್ಲರಿಗೂ ಪ್ರೋಕ್ಷಣೆ (“ಆಪೋ ಹಿ ಷ್ಠಾ…”, ಅಭಿಷೇಕ), ತೀರ್ಥವಾಗಿ ಕೊಡಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ). ನಂತರ ಸಾಮಾನ್ಯ ಕ್ರಮದಂತೆ ರಕ್ಷೆ, ಸಮರ್ಪಣೆ, ಪ್ರಸಾದ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'सुमुखं तर्पयामि । एकदन्तं तर्पयामि । कपिलं तर्पयामि । गजकर्णकं तर्पयामि ।\nलम्बोदरं तर्पयामि । विकटं तर्पयामि । विघ्नराजं तर्पयामि । विनायकं तर्पयामि ।\nधूमकेतुं तर्पयामि । गणाध्यक्षं तर्पयामि । फालचन्द्रं तर्पयामि । गजाननं तर्पयामि ।\nवक्रतुण्डं तर्पयामि । शूर्पकर्णं तर्पयामि । हेरम्बं तर्पयामि । स्कन्दपूर्वजं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy (with water) Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnaraja, Vinayaka, Dhumaketu, Ganadhyaksha, Phalachandra, Gajanana, Vakratunda, Shurpakarna, Heramba and Skandapurvaja.',
            kn: 'ಸುಮುಖ, ಏಕದಂತ, ಕಪಿಲ, ಗಜಕರ್ಣಕ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ವಿನಾಯಕ, ಧೂಮಕೇತು, ಗಣಾಧ್ಯಕ್ಷ, ಫಾಲಚಂದ್ರ, ಗಜಾನನ, ವಕ್ರತುಂಡ, ಶೂರ್ಪಕರ್ಣ, ಹೇರಂಬ, ಸ್ಕಂದಪೂರ್ವಜರನ್ನು (ಜಲದಿಂದ) ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अस्मात् कुम्भात् आवाहितं महागणपतिं यथास्थानं प्रतिष्ठापयामि ।\nशोभनार्थे क्षेमाय पुनरागमनाय च ॥',
          meaning: {
            en: 'I return Mahaganapati, invoked in this kumbha, to his own place — for good fortune, for well-being, and to come again.',
            kn: 'ಈ ಕುಂಭದಲ್ಲಿ ಆವಾಹಿಸಿದ ಮಹಾಗಣಪತಿಯನ್ನು ಅವನ ಸ್ಥಾನಕ್ಕೆ ಪ್ರತಿಷ್ಠಾಪಿಸುತ್ತೇನೆ — ಶುಭಕ್ಕಾಗಿ, ಕ್ಷೇಮಕ್ಕಾಗಿ, ಮತ್ತೆ ಬರಲೆಂದು.',
          },
        },
        {
          text: 'अकालमृत्युहरणं सर्वव्याधिनिवारणम् ।\nसर्वपापक्षयकरं मन्त्रपूतोदकं शुभम् ॥',
          meaning: {
            en: 'This auspicious water, purified by the mantras, takes away untimely death, removes all illness and destroys all sins. (Said drinking the kumbha water as tirtha; Mylapore manual.)',
            kn: 'ಅಕಾಲಮೃತ್ಯುವನ್ನು ಹರಿಸುವ, ಎಲ್ಲ ರೋಗಗಳನ್ನು ನಿವಾರಿಸುವ, ಎಲ್ಲ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವ ಮಂತ್ರಪೂತ ಶುಭ ಜಲ. (ಕುಂಭಜಲವನ್ನು ತೀರ್ಥವಾಗಿ ಸ್ವೀಕರಿಸುವಾಗ.)',
          },
        },
      ],
    },
    {
      title: 'पूर्णाहुत्यादि',
      titleEn: 'Closing prayer',
      note: 'Madhva: when the eight-fold mixture is finished and the skins are burnt, the uttaranga of the Common Procedure is done (without svishtakrit); offer the other half of the mixture to Ganapati as naivedya (Homa-Havana), and pray with this verse. Smarta: after the closing puja, the tarpana and the udvasana, take the raksha with बृहत्साम… and finish with the samarpana of the Common Procedure; the Tamil manual adds 32 japas of the mula mantra and says the homa is best done on Fridays or Chaturthi, at sunrise after sandhyavandane, and that those who cannot do it themselves have a priest do it with their name and nakshatra. Distribute the prasada and, if possible, feed brahmins.',
      noteKn: 'ಮಾಧ್ವ: ಅಷ್ಟದ್ರವ್ಯ ಮುಗಿದು ಸಿಪ್ಪೆಗಳು ಸುಟ್ಟ ಮೇಲೆ ಸಾಮಾನ್ಯ ಕ್ರಮದ ಉತ್ತರಾಂಗ (ಸ್ವಿಷ್ಟಕೃತ್ ಇಲ್ಲದೆ); ಮಿಶ್ರಣದ ಇನ್ನರ್ಧವನ್ನು ಗಣಪತಿಗೆ ನೈವೇದ್ಯ ಮಾಡಿ (ಹೋಮ–ಹವನ), ಈ ಶ್ಲೋಕದಿಂದ ಪ್ರಾರ್ಥಿಸಿ. ಸ್ಮಾರ್ತ: ಸಮಾಪ್ತಿ ಪೂಜೆ, ತರ್ಪಣ, ಉದ್ವಾಸನದ ನಂತರ “ಬೃಹತ್ಸಾಮ…” ಎಂದು ರಕ್ಷೆ ಧರಿಸಿ, ಸಾಮಾನ್ಯ ಕ್ರಮದ ಸಮರ್ಪಣೆಯಿಂದ ಮುಗಿಸಿ; ತಮಿಳು ಗ್ರಂಥದಲ್ಲಿ ಮೂಲಮಂತ್ರ ಜಪ ೩೨, ಶುಕ್ರವಾರ ಅಥವಾ ಚತುರ್ಥಿಯಂದು ಸಂಧ್ಯಾವಂದನೆಯ ನಂತರ ಸೂರ್ಯೋದಯದಲ್ಲಿ ಉತ್ತಮ, ತಾವೇ ಮಾಡಲಾಗದವರು ಪುರೋಹಿತರಿಂದ ಹೆಸರು–ನಕ್ಷತ್ರ ಹೇಳಿ ಮಾಡಿಸಬಹುದು. ಪ್ರಸಾದ ವಿತರಿಸಿ, ಸಾಧ್ಯವಾದರೆ ಬ್ರಾಹ್ಮಣ ಭೋಜನ.',
      verses: [
        {
          text: 'आयुर्देहि यशो देहि श्रियं देहि विनायक ।\nपुत्रपौत्रान्प्रपौत्रांश्च देहि मे गणनायक ॥',
          meaning: {
            en: 'O Vinayaka, give me long life, fame and prosperity; O leader of the hosts, give me sons, grandsons and great-grandsons. (Prayer to Ganapati, Homa-Havana)',
            kn: 'ಓ ವಿನಾಯಕನೇ, ನನಗೆ ಆಯುಸ್ಸು, ಯಶಸ್ಸು, ಸಂಪತ್ತನ್ನು ಕೊಡು; ಓ ಗಣನಾಯಕನೇ, ಮಕ್ಕಳು, ಮೊಮ್ಮಕ್ಕಳು, ಮರಿಮಕ್ಕಳನ್ನು ಕೊಡು. (ಗಣಪತಿ ಪ್ರಾರ್ಥನೆ, ಹೋಮ–ಹವನ)',
          },
        },
      ],
    },
  ],
};
