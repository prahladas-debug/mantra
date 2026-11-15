/**
 * Mahaganapati Homa (Gana-homa): the main offerings, with the shared steps in "Homa: Common
 * Procedure" (homa-purvanga). NOT YET PROOFREAD against one printed edition.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Sri Raghavendra Darshana Kendra,
 *    Bangalore 2012, chapter "Gana-homa" (the aptitude of the rite, the Apurita tantra of the
 *    Vasishtha Samhita (Vinayakodaya) that omits pranita, Brahma, idhma, chakshushi and
 *    svishtakrit, the eight materials, the count by coconuts, the closing prayer to Ganapati).
 *    archive.org: 20230827_20230827_0721.
 *  - Madhva: Tantrasara-sangraha of Sri Madhvacharya, ed. Oriental Research Institute, Mysore
 *    2003, 3.90-92 (the Vighnesha mantra and dhyana) with the Gudhartha-sangraha commentary.
 *    archive.org: tantrasarasangraha-of-sri-anandatirtha-bhagavatpadacharya-2003.
 *  - Smarta (Tamil Smarta): "Sri Ganapati Homam" (Sri Vedachalam Sastri collection, Karaikudi;
 *    archive.org zrjf_sri-ganapati-homam-sri-vedachalam-sastri-collection): sankalpa
 *    (shuklambaradharam), the moola mantra for japa and homa, the coconut-and-honey offering,
 *    raksha. The OCR of this book is poor in places; only the clear lines are used.
 *  - Rigveda 2.23.1 and 10.112.9 checked against GRETIL (Aufrecht) and the Taittiriya Aranyaka.
 * Only the mantras and counts that two sources agree on, or that are Vedic and checked, are given
 * as verses; the rest is in the notes.
 */
import type { Mantra } from '../types';

export const ganapatiHoma: Mantra = {
  id: 'ganapati-homa',
  title: 'महागणपतिहोमः',
  titleEn: 'Mahaganapati Homa (Gana-homa)',
  category: 'homa',
  order: 2,
  deity: 'Ganapati',
  source: 'Madhva: Homa-Havana (Satyanarayanacharya), Tantrasara-sangraha 3.90; Smarta: Tamil manual "Sri Ganapati Homam"',
  summary: 'The household Ganapati homa, done at the start of any new undertaking, a festival or yearly in the home: the materials, the counting by coconuts (one coconut, four oblations), the dhyana and moola mantra of Ganapati, the Vedic mantras recited, and the prayer at the end. Choose Madhva or Smarta at the top; the common steps are in "Homa: Common Procedure".',
  summaryKn: 'ಯಾವುದೇ ಹೊಸ ಕಾರ್ಯದ ಆರಂಭದಲ್ಲಿ, ಹಬ್ಬದಲ್ಲಿ ಅಥವಾ ವರ್ಷಕ್ಕೊಮ್ಮೆ ಮನೆಯಲ್ಲಿ ಮಾಡುವ ಗಣಪತಿಹೋಮ: ದ್ರವ್ಯಗಳು, ತೆಂಗಿನಕಾಯಿ ಲೆಕ್ಕ (ಒಂದು ಕಾಯಿಗೆ ನಾಲ್ಕು ಆಹುತಿ), ಗಣಪತಿಯ ಧ್ಯಾನ–ಮೂಲಮಂತ್ರ, ಪಠಿಸುವ ವೈದಿಕ ಮಂತ್ರಗಳು, ಕೊನೆಯ ಪ್ರಾರ್ಥನೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಆರಿಸಿ; ಸಾಮಾನ್ಯ ಹಂತಗಳು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿವೆ.',
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
  difficulty: 'medium',
  completeness: 'partial',
  contentNote: 'A guide for understanding and following along; homas are traditionally done with a trained priest. Do the common steps first (see "Homa: Common Procedure"), then the main offerings given here. Not included: the Ganapati Atharvashirsha and the Ganapati Sukta (they open as separate texts in the library; the Atharvashirsha is read before or after the homa), the full list of Ganapati names for archana, and the Smarta moola mantra as an offering formula with its exact svaha ending, which the one clear Tamil manual does not print unambiguously; ask your purohita for the form your family uses. Counts follow the Madhva manual.',
  sections: [
    {
      title: 'गणहोमविधानम्',
      titleEn: 'What the Gana-homa is and how large to make it',
      note: 'Ganapati is worshipped first in every undertaking, so the Gana-homa is done before long rites (pratishtha, Rigveda-samhita yajna and the like), for the presence of Ganapati in temples (daily, or once a Chaturthi), once a year in many coastal homes, and at the start of anything new. It is not an elaborate rite: the Apurita tantra of the Vasishtha Samhita (Vinayakodaya) says the pranita vessel, the Brahma, the idhma, the two chakshushi (eyes of the fire) oblations and the svishtakrit are not done in the Ganapati and Shankara rites. The poor may do a small one, the rich a large one. Count by coconuts: one coconut, four oblations; three coconuts, twelve; so on. You may do 1, 3, 6, 12, 48, 108, 1008 or 10,008 coconuts (Homa-Havana). The materials for each coconut (Madhva manual): eight modakas, eight handfuls each of puffed rice, beaten rice and roasted flour, eight pieces of sugarcane, eight bananas, a kudava (about a cup and a half) of black sesame, half a kudte (a small cup) of ghee, the same of honey, and jaggery as large as one coconut; mix the eight materials with jaggery, honey and ghee, and divide the mixture in two, half for homa and half for naivedya. Offer a handful at a time; throw the sugarcane, banana and coconut skins into the fire. This homa makes a great deal of smoke. For the Smarta families’ coconut-and-honey form, see the Smarta section below.',
      noteKn: 'ಎಲ್ಲ ಕಾರ್ಯಗಳ ಆರಂಭದಲ್ಲಿ ಗಣಪತಿ ಪೂಜ್ಯ; ಆದ್ದರಿಂದ ದೀರ್ಘ ಕರ್ಮಗಳಿಗೆ (ಪ್ರತಿಷ್ಠೆ, ಋಕ್‌ಸಂಹಿತಾ ಯಾಗ ಇತ್ಯಾದಿ) ಮೊದಲು, ದೇವಾಲಯಗಳಲ್ಲಿ ಸಾನ್ನಿಧ್ಯಸಿದ್ಧಿಗಾಗಿ (ನಿತ್ಯ ಅಥವಾ ಚತುರ್ಥಿಗೊಮ್ಮೆ), ಕರಾವಳಿಯ ಅನೇಕ ಮನೆಗಳಲ್ಲಿ ವರ್ಷಕ್ಕೊಮ್ಮೆ, ಹಾಗೂ ಯಾವುದೇ ಹೊಸ ಕಾರ್ಯದ ಆರಂಭದಲ್ಲಿ ಗಣಹೋಮ ಮಾಡುತ್ತಾರೆ. ಇದು ವಿಸ್ತೃತ ಕ್ರಿಯೆಯಲ್ಲ: ವಾಸಿಷ್ಠಸಂಹಿತೆಯ (ವಿನಾಯಕೋದಯ) ಆಪೂರಿತ ತಂತ್ರದಲ್ಲಿ ಗಣಪತಿ ಮತ್ತು ಶಂಕರ ಯಾಗಗಳಲ್ಲಿ ಪ್ರಣೀತಾ ಪಾತ್ರೆ, ಬ್ರಹ್ಮ, ಇಧ್ಮ, ಚಕ್ಷುಷೀ ಹೋಮ, ಸ್ವಿಷ್ಟಕೃತ್ ಇರುವುದಿಲ್ಲ ಎಂದಿದೆ. ಬಡವರು ಚಿಕ್ಕದನ್ನು, ಉಳ್ಳವರು ದೊಡ್ಡದನ್ನು ಮಾಡಬಹುದು. ಕಾಯಿ ಲೆಕ್ಕ: ಒಂದು ಕಾಯಿಗೆ ನಾಲ್ಕು ಆಹುತಿ; ಮೂರು ಕಾಯಿಗೆ ಹನ್ನೆರಡು; ಹೀಗೆ. ೧, ೩, ೬, ೧೨, ೪೮, ೧೦೮, ೧೦೦೮ ಅಥವಾ ೧೦,೦೦೮ ಕಾಯಿಗಳ ಹೋಮ ಮಾಡಬಹುದು (ಹೋಮ–ಹವನ). ಒಂದು ಕಾಯಿಗೆ ದ್ರವ್ಯಗಳು (ಮಾಧ್ವ ಗ್ರಂಥ): ಎಂಟು ಮೋದಕ; ಅರಳು, ಅವಲಕ್ಕಿ, ಅರಳಿಟ್ಟು ಇವುಗಳಲ್ಲಿ ಎಂಟೆಂಟು ಮುಷ್ಟಿ; ಕಬ್ಬಿನ ಎಂಟು ತುಂಡು; ಎಂಟು ಬಾಳೆಹಣ್ಣು; ಒಂದು ಕುಡವ ಕರಿಎಳ್ಳು; ಅರ್ಧ ಕುಡ್ತೆ ತುಪ್ಪ, ಅಷ್ಟೇ ಜೇನು; ಒಂದು ತೆಂಗಿನಕಾಯಿಯಷ್ಟು ಬೆಲ್ಲ; ಎಂಟು ದ್ರವ್ಯಗಳನ್ನು ಬೆಲ್ಲ, ಜೇನು, ತುಪ್ಪದೊಡನೆ ಕಲಸಿ ಎರಡು ಸಮ ಭಾಗ ಮಾಡಿ, ಒಂದನ್ನು ಹೋಮಕ್ಕೆ, ಇನ್ನೊಂದನ್ನು ನೈವೇದ್ಯಕ್ಕೆ. ಮುಷ್ಟಿಯಷ್ಟು ಆಹುತಿ ನೀಡಿ; ಕಬ್ಬು, ಬಾಳೆ, ತೆಂಗಿನ ಸಿಪ್ಪೆ–ಚಿಪ್ಪುಗಳನ್ನು ಅಗ್ನಿಗೆ ಹಾಕಿ. ಈ ಹೋಮದಲ್ಲಿ ಹೊಗೆ ಹೆಚ್ಚು. ಸ್ಮಾರ್ತ ಕುಟುಂಬಗಳ ತೆಂಗಿನಕಾಯಿ–ಜೇನಿನ ರೂಪಕ್ಕೆ ಕೆಳಗಿನ ಸ್ಮಾರ್ತ ಭಾಗ ನೋಡಿ.',
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
      titleEn: 'Sankalpa for the Gana-homa',
      note: 'First do the common steps up to the installation of the fire (see "Homa: Common Procedure"). Make the homa sankalpa with the name of the rite: Madhva — गणहोमाख्यं कर्म; Smarta — श्रीमहागणपतिप्रीत्यर्थं सर्वकार्यसिद्ध्यर्थं श्रीमहागणपतिहोमम्, as the Tamil manual has it. In the Smarta form a lamp is also lit to the north-east and the Goddess invoked in it; follow your family manual.',
      noteKn: 'ಮೊದಲು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆಯವರೆಗಿನ ಸಾಮಾನ್ಯ ಹಂತಗಳನ್ನು ಮಾಡಿ (“ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ನೋಡಿ). ಹೋಮದ ಹೆಸರಿನೊಡನೆ ಸಂಕಲ್ಪ ಮಾಡಿ: ಮಾಧ್ವ — “ಗಣಹೋಮಾಖ್ಯಂ ಕರ್ಮ”; ಸ್ಮಾರ್ತ — ತಮಿಳು ಗ್ರಂಥದಲ್ಲಿರುವಂತೆ “ಶ್ರೀಮಹಾಗಣಪತಿಪ್ರೀತ್ಯರ್ಥಂ ಸರ್ವಕಾರ್ಯಸಿದ್ಧ್ಯರ್ಥಂ ಶ್ರೀಮಹಾಗಣಪತಿಹೋಮಮ್”. ಸ್ಮಾರ್ತ ಪದ್ಧತಿಯಲ್ಲಿ ಈಶಾನ್ಯದಲ್ಲಿ ದೀಪವನ್ನೂ ಹಚ್ಚಿ ಅದರಲ್ಲಿ ದೇವಿಯನ್ನು ಆವಾಹಿಸುತ್ತಾರೆ; ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿಯನ್ನು ಅನುಸರಿಸಿ.',
      verses: [
        {
          text: 'ॐ भूर्भुवःसुवः ।\nउपात्तसमस्तदुरितक्षयद्वारा श्रीमहागणपतिप्रीत्यर्थं सर्वकार्यसिद्ध्यर्थं\nश्रीमहागणपतिहोमं करिष्ये ॥',
          meaning: {
            en: 'Om, earth, sky, heaven. For the removal of all accumulated sins, for the pleasure of Sri Mahaganapati and for the success of all undertakings, I shall perform the Mahaganapati homa. (The Smarta sankalpa of the Tamil manual; Madhvas use the sankalpa of the Common Procedure with "gana-homa" as the name.)',
            kn: 'ಓಂ ಭೂರ್ಭುವಃಸುವಃ. ಸಂಚಿತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಮಹಾಗಣಪತಿಯ ಪ್ರೀತಿಗಾಗಿ ಮತ್ತು ಎಲ್ಲ ಕಾರ್ಯಗಳ ಸಿದ್ಧಿಗಾಗಿ ಶ್ರೀಮಹಾಗಣಪತಿಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ. (ತಮಿಳು ಗ್ರಂಥದ ಸ್ಮಾರ್ತ ಸಂಕಲ್ಪ; ಮಾಧ್ವರು ಸಾಮಾನ್ಯ ವಿಧಿಯ ಸಂಕಲ್ಪದಲ್ಲಿ “ಗಣಹೋಮ” ಎಂಬ ಹೆಸರನ್ನು ಬಳಸುತ್ತಾರೆ.)',
          },
        },
      ],
    },
    {
      title: 'ध्यानं मूलमन्त्रश्च',
      titleEn: 'Dhyana and moola mantra of Ganapati',
      note: 'Meditate on Vighnesha within the fire and invoke him with the mantra, then make the main offerings. Madhva: the Tantrasara gives the moola mantra of Vighnesha as the letters of क्षिप्रप्रसादाय नमः written in reverse order (the commentary: क्षिप्रप्रसादाय नमः); it is taken with the bija given at upadesha, and the dhyana is the verse below. Ganapati within is Vishvambhara, the form of Vishnu with the elephant face, whom Ganapati worshipped (Homa-Havana).',
      noteKn: 'ಅಗ್ನಿಯಲ್ಲಿ ವಿಘ್ನೇಶನನ್ನು ಧ್ಯಾನಿಸಿ ಮಂತ್ರದಿಂದ ಆವಾಹಿಸಿ, ನಂತರ ಪ್ರಧಾನಾಹುತಿ ನೀಡಿ. ಮಾಧ್ವ: ತಂತ್ರಸಾರದಲ್ಲಿ ವಿಘ್ನೇಶನ ಮೂಲಮಂತ್ರವನ್ನು “ಕ್ಷಿಪ್ರಪ್ರಸಾದಾಯ ನಮಃ” ಅಕ್ಷರಗಳನ್ನು ಹಿಂದುಮುಂದಾಗಿ ಬರೆದು ಕೊಡಲಾಗಿದೆ (ವ್ಯಾಖ್ಯಾನ: ಕ್ಷಿಪ್ರಪ್ರಸಾದಾಯ ನಮಃ); ಉಪದೇಶದಲ್ಲಿ ಕೊಟ್ಟ ಬೀಜದೊಡನೆ ಇದನ್ನು ಬಳಸುತ್ತಾರೆ; ಧ್ಯಾನ ಕೆಳಗಿನ ಶ್ಲೋಕ. ಒಳಗಿರುವ ದೇವ ವಿಶ್ವಂಭರ — ಗಜಮುಖ ರೂಪದ ವಿಷ್ಣು, ಗಣಪತಿ ಅವನನ್ನು ಆರಾಧಿಸಿದ (ಹೋಮ–ಹವನ).',
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
      ],
    },
    {
      title: 'ध्यानं मूलमन्त्रश्च',
      titleEn: 'Dhyana and moola mantra of Ganapati',
      note: 'Remember Ganapati with शुक्लाम्बरधरं…, then recite the moola mantra. The Tamil manual gives it as the mantra for japa (a number of times, with the count told by your purohita) and for the homa with svaha at the end; for the homa each offering is made with this mantra and invokes Mahaganapati in the fire, as in the pooja.',
      noteKn: '“ಶುಕ್ಲಾಂಬರಧರಂ…” ಎಂದು ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸಿ, ನಂತರ ಮೂಲಮಂತ್ರ ಹೇಳಿ. ತಮಿಳು ಗ್ರಂಥವು ಇದನ್ನು ಜಪಕ್ಕೂ (ಸಂಖ್ಯೆಯನ್ನು ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ) ಹೋಮಕ್ಕೂ (ಕೊನೆಯಲ್ಲಿ ಸ್ವಾಹಾ ಸೇರಿಸಿ) ಮೂಲಮಂತ್ರವೆಂದು ಕೊಡುತ್ತದೆ; ಹೋಮದಲ್ಲಿ ಪ್ರತಿ ಆಹುತಿಯನ್ನೂ ಈ ಮಂತ್ರದಿಂದ ನೀಡಿ ಅಗ್ನಿಯಲ್ಲಿ ಮಹಾಗಣಪತಿಯನ್ನು ಆವಾಹಿಸಲಾಗುತ್ತದೆ. ಹೋಮದ ನಂತರ ಗ್ರಂಥದಲ್ಲಿ ಮೂಲಮಂತ್ರ ಜಪ ೩೨ ಬಾರಿ.',
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
          text: 'ॐ नमो व्रातपतये नमो गणपतये नमः प्रमथपतये\nनमस्तेऽस्तु लम्बोदरायैकदन्ताय विघ्नविनाशिने\nशिवसुताय वरदमूर्तये नमो नमः ॥',
          meaning: {
            en: 'Om, salutations to the lord of the hosts; salutations to the lord of the ganas; salutations to the lord of the pramathas. Salutations to you, big-bellied, one-tusked, destroyer of obstacles, son of Shiva, in the form that grants boons; salutations again and again. (The moola mantra of the Tamil Ganapati Homam manual, one witness.)',
            kn: 'ಓಂ, ವ್ರಾತಪತಿಗೆ ನಮಸ್ಕಾರ; ಗಣಪತಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರಮಥಪತಿಗೆ ನಮಸ್ಕಾರ. ಲಂಬೋದರನೇ, ಏಕದಂತನೇ, ವಿಘ್ನವಿನಾಶಕನೇ, ಶಿವಸುತನೇ, ವರದಮೂರ್ತಿಯೇ, ನಿನಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. (ತಮಿಳು ಗಣಪತಿಹೋಮ ಗ್ರಂಥದ ಮೂಲಮಂತ್ರ, ಒಂದೇ ಆಧಾರ.)',
          },
        },
      ],
    },
    {
      title: 'वैदिकमन्त्राः',
      titleEn: 'Vedic mantras of the Gana-homa',
      note: 'These two Rigvedic verses to Ganapati (Brahmanaspati) are the Vedic mantras of the homa; ghee or the mixed offering may be offered with them, and they are recited during the homa and at the invocation. The Ganapati Atharvashirsha and the Ganapati Sukta (in the library) are also read, by others present, while the offerings are made.',
      noteKn: 'ಗಣಪತಿಗೆ (ಬ್ರಹ್ಮಣಸ್ಪತಿಗೆ) ಸಂಬಂಧಿಸಿದ ಈ ಎರಡು ಋಗ್ವೇದ ಮಂತ್ರಗಳು ಹೋಮದ ವೈದಿಕ ಮಂತ್ರಗಳು; ಇವುಗಳಿಂದ ಆವಾಹನೆ ಮಾಡುತ್ತಾರೆ, ಹೋಮದಲ್ಲೂ ಪಠಿಸುತ್ತಾರೆ, ಆಜ್ಯ ಅಥವಾ ಮಿಶ್ರ ದ್ರವ್ಯದಿಂದ ಆಹುತಿ ನೀಡಬಹುದು. ಆಹುತಿ ನೀಡುವಾಗ ಇತರರು ಗಣಪತಿ ಅಥರ್ವಶೀರ್ಷ ಮತ್ತು ಗಣಪತಿ ಸೂಕ್ತವನ್ನು (ಗ್ರಂಥಾಲಯದಲ್ಲಿವೆ) ಪಠಿಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'गणानां त्वा गणपतिं हवामहे कविं कवीनामुपमश्रवस्तमम् ।\nज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आ नः शृण्वन्नूतिभिः सीद सादनम् ॥',
          meaning: {
            en: 'We call you, lord of the hosts, the poet of poets, most renowned of the renowned, the eldest king of prayers, O Brahmanaspati: come to us, listening, with your helps, and take your seat. (Rigveda 2.23.1)',
            kn: 'ಗಣಗಳ ಒಡೆಯನೇ, ಕವಿಗಳಲ್ಲಿ ಕವಿಯೇ, ಅತಿ ಕೀರ್ತಿಶಾಲಿಯೇ, ಮಂತ್ರಗಳಲ್ಲಿ ಜ್ಯೇಷ್ಠರಾಜನೇ, ಬ್ರಹ್ಮಣಸ್ಪತಿಯೇ, ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇವೆ: ಕೇಳುತ್ತಾ, ನಿನ್ನ ರಕ್ಷಣೆಗಳೊಡನೆ ನಮ್ಮ ಬಳಿ ಬಂದು ಆಸನದಲ್ಲಿ ಕುಳಿತುಕೋ. (ಋಗ್ವೇದ ೨.೨೩.೧)',
          },
        },
        {
          text: 'नि षु सीद गणपते गणेषु त्वामाहुर्विप्रतमं कवीनाम् ।\nन ऋते त्वत्क्रियते किं चनारे महामर्कं मघवञ्चित्रमर्च ॥',
          meaning: {
            en: 'Be seated, O lord of hosts, among your hosts; they call you the wisest of seers. Nothing near or far is done without you; O bountiful one, honour our great and wonderful hymn. (Rigveda 10.112.9)',
            kn: 'ಓ ಗಣಪತಿಯೇ (ಸಮೂಹಗಳ ಒಡೆಯನೇ), ನಿನ್ನ ಗಣಗಳ ನಡುವೆ ಕುಳಿತುಕೋ; ಕವಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠ ಜ್ಞಾನಿ ನೀನೆಂದು ಹೇಳುತ್ತಾರೆ. ನಿನ್ನನ್ನು ಬಿಟ್ಟು ಹತ್ತಿರದಲ್ಲಾಗಲೀ ದೂರದಲ್ಲಾಗಲೀ ಏನೂ ನಡೆಯುವುದಿಲ್ಲ; ನಮ್ಮ ಈ ಮಹತ್ತಾದ ಸ್ತುತಿಯನ್ನು ಆದರಿಸು. (ಋಗ್ವೇದ ೧೦.೧೧೨.೯)',
          },
        },
      ],
    },
    {
      title: 'पूर्णाहुत्यादि',
      titleEn: 'Closing',
      note: 'When the oblations are done (Madhva: the eight-fold mixture finished, the coconut skins burnt), do the purnahuti, the samsrava, the marjana and the farewell as in the Common Procedure (without svishtakrit and the like in the Madhva form, per the Apurita tantra above). Smarta (Tamil manual): after the homa do 32 japas of the moola mantra; the homa is done on Fridays or as one can, at sunrise after sandhyavandane; those who cannot do it themselves have a priest do it with their name and nakshatra. Finish by offering the milk and fruit as naivedya and pray with this verse, which Homa-Havana gives for Ganapati.',
      noteKn: 'ಆಹುತಿಗಳು ಮುಗಿದ ಮೇಲೆ (ಮಾಧ್ವ: ಎಂಟು ದ್ರವ್ಯದ ಮಿಶ್ರಣ ಮುಗಿದು ಕಾಯಿಯ ಚಿಪ್ಪುಗಳು ಸುಟ್ಟ ಮೇಲೆ) ಸಾಮಾನ್ಯ ವಿಧಿಯಲ್ಲಿರುವಂತೆ ಪೂರ್ಣಾಹುತಿ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ವಿಸರ್ಜನೆ ಮಾಡಿ (ಮಾಧ್ವ ರೂಪದಲ್ಲಿ ಮೇಲಿನ ಆಪೂರಿತ ತಂತ್ರದಂತೆ ಸ್ವಿಷ್ಟಕೃತ್ ಮೊದಲಾದವು ಇಲ್ಲ). ಸ್ಮಾರ್ತ (ತಮಿಳು ಗ್ರಂಥ): ಹೋಮದ ನಂತರ ಮೂಲಮಂತ್ರ ಜಪ ೩೨; ಶುಕ್ರವಾರಗಳಲ್ಲಿ ಅಥವಾ ಸಾಧ್ಯವಾದಾಗ, ಸಂಧ್ಯಾವಂದನೆಯ ನಂತರ ಸೂರ್ಯೋದಯದಲ್ಲಿ ಮಾಡುವುದು; ತಾವೇ ಮಾಡಲಾಗದವರು ಪುರೋಹಿತರಿಂದ ತಮ್ಮ ಹೆಸರು–ನಕ್ಷತ್ರ ಹೇಳಿ ಮಾಡಿಸುತ್ತಾರೆ. ಹಾಲು–ಹಣ್ಣಿನ ನೈವೇದ್ಯ ಮಾಡಿ, ಹೋಮ–ಹವನ ಕೊಟ್ಟಿರುವ ಈ ಶ್ಲೋಕದಿಂದ ಪ್ರಾರ್ಥಿಸಿ.',
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
