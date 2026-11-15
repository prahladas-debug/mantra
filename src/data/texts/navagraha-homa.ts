/**
 * Navagraha Homa (graha-shanti homa): the main offerings, with the shared steps in
 * "Homa: Common Procedure" (homa-purvanga). NOT YET PROOFREAD against one printed edition.
 *
 * Sources:
 *  - Yajnavalkya Smriti 1.296-308 (GRETIL, sa_yAjJavalkyasmRti): the nine grahas, their
 *    images, the nine Vedic mantras by their opening words, the nine samidhs, the count
 *    (108 or 28 each, with honey, ghee, curd or milk), the nine foods and the nine gifts.
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012, chapter "Navagraha
 *    (Grahashanti) Homa" (the five parts of graha-shanti, the table of grains, samidhs, offerings,
 *    mandala, metals, gems, deities; counts 108 per graha for the full homa and 28 for the
 *    padagraha-yajna; japa counts by dasha-years; the Graha Stotra of Sri Vadirajatirtha; the
 *    forms of the Lord in the grahas from the Parashara Hora). archive.org:
 *    20230827_20230827_0721.
 *  - The Vedic mantras: Rigveda 1.35.2 (akrishnena), 8.44.16 (agnir murdha), 2.23.15 (brihaspate
 *    ati), 10.9.4 (sham no devir), 4.31.1 (kaya nas chitra), 1.6.3 (ketum krinvann), checked
 *    against GRETIL (Aufrecht); Taittiriya Samhita 4.7.13 (udbudhyasva), Taittiriya Brahmana
 *    (annat parisruto), TS 4.2 (kandat kandat), checked in vishvAsa/vedAH_yajuH. The openings of the
 *    other three (imam deva asapatnam, annat parisrutah, kandat-kandat) are given as the
 *    opening words only.
 *  - Vadiraja's Graha Stotra: Homa-Havana only (one witness, text clear).
 */
import type { Mantra } from '../types';

export const navagrahaHoma: Mantra = {
  id: 'navagraha-homa',
  title: 'नवग्रहहोमः',
  titleEn: 'Navagraha Homa (Graha-shanti)',
  category: 'homa',
  order: 3,
  deity: 'The nine grahas (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu)',
  source: 'Yajnavalkya Smriti 1.296-308; Madhva: Homa-Havana (Satyanarayanacharya) and Vadirajatirtha’s Graha Stotra',
  summary: 'The Navagraha homa for peace from the troubles the planets indicate: the nine grahas with their Vedic mantras, their samidhs and foods, the count (108 each, or 28), the five parts of graha-shanti (puja, homa, japa, stotra, dana), and Vadiraja’s short Graha Stotra. The common steps are in "Homa: Common Procedure".',
  summaryKn: 'ಗ್ರಹಗಳು ಸೂಚಿಸುವ ಪೀಡೆಗಳ ಶಾಂತಿಗಾಗಿ ನವಗ್ರಹ ಹೋಮ: ಒಂಬತ್ತು ಗ್ರಹಗಳು, ಅವುಗಳ ವೈದಿಕ ಮಂತ್ರಗಳು, ಸಮಿಧೆ–ಅನ್ನಗಳು, ಸಂಖ್ಯೆ (ಒಂದೊಂದಕ್ಕೆ ೧೦೮ ಅಥವಾ ೨೮), ಗ್ರಹಶಾಂತಿಯ ಐದು ಭಾಗಗಳು (ಪೂಜೆ, ಹೋಮ, ಜಪ, ಸ್ತೋತ್ರ, ದಾನ), ಶ್ರೀವಾದಿರಾಜರ ಸಂಕ್ಷಿಪ್ತ ಗ್ರಹಸ್ತೋತ್ರ. ಸಾಮಾನ್ಯ ಹಂತಗಳು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿವೆ.',
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'A guide for understanding and following along; homas are traditionally done with a trained priest. Do the common steps first (see "Homa: Common Procedure"), then the offerings below. The graha mantras are given by their opening words except where the verse is given in full from the Rigveda; the full texts (with the Taittiriya and Vajasaneyi forms that differ) are recited by the priest from the Navagraha Sukta. Left out: the graha mandala and the adhidevata and pratyadhidevata mantras and the graha stotras for each single graha (jaapa-kusuma-sankasham and the like). Sources differ on the Rahu mantra (Yajnavalkya gives kandat kandat, Karnataka manuals kaya nas chitra); both are given. Follow your family manual and purohita.',
  sections: [
    {
      title: 'ग्रहशान्तिविधानम्',
      titleEn: 'The nine grahas, their samidhs and the count',
      note: 'No graha is evil: the grahas only show beforehand the fruit of our earlier karma, and are to be honoured for that warning. A graha-shanti has five parts: puja of the grahas (on a mandala with their grains, as in the table below), homa, japa, stotra and dana. Table (Homa-Havana; the grahas in order Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu): grains — wheat, rice, toor, moong, chana, avare, sesame, urad, horse-gram; samidhs — arka, palasha, khadira, apamarga, ashvattha, udumbara, shami, durva, kusha. A full Navagraha homa offers 108 oblations to each graha; 28 each is the padagraha-yajna. Eight each is not recommended; the Homa-Havana says there is no authority for it. After the nine, make oblations, one tenth of the count, to the eight parivara deities (Durga, Ganapati and the rest) and to the eight guardians of the directions. The ghee and the samidh are offered with the Vedic verse of each graha; the samidhs are first dipped in honey, ghee and curd or milk (Yajnavalkya Smriti 1.303).',
      noteKn: 'ಯಾವ ಗ್ರಹವೂ ದುಷ್ಟವಲ್ಲ: ಗ್ರಹಗಳು ನಮ್ಮ ಪೂರ್ವಕರ್ಮಫಲವನ್ನು ಮುಂಚಿತವಾಗಿ ಸೂಚಿಸುತ್ತವೆ ಅಷ್ಟೇ; ಆ ಎಚ್ಚರಿಕೆಗಾಗಿ ಅವು ಪೂಜ್ಯ. ಗ್ರಹಶಾಂತಿಗೆ ಐದು ಭಾಗಗಳು: ಗ್ರಹಪೂಜೆ (ಮಂಡಲದಲ್ಲಿ ಗ್ರಹಧಾನ್ಯಗಳೊಡನೆ, ಕೆಳಗಿನ ಕೋಷ್ಟಕದಂತೆ), ಹೋಮ, ಜಪ, ಸ್ತೋತ್ರ, ದಾನ. ಕೋಷ್ಟಕ (ಹೋಮ–ಹವನ; ಕ್ರಮ: ಸೂರ್ಯ, ಚಂದ್ರ, ಕುಜ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು): ಧಾನ್ಯ — ಗೋಧಿ, ಅಕ್ಕಿ, ತೊಗರಿ, ಹೆಸರು, ಕಡಲೆ, ಅವರೆ, ಎಳ್ಳು, ಉದ್ದು, ಹುರುಳಿ; ಸಮಿಧೆ — ಎಕ್ಕ, ಪಲಾಶ, ಖದಿರ, ಉತ್ತರಾಣೆ, ಅಶ್ವತ್ಥ, ಅತ್ತಿ, ಶಮೀ, ಗರಿಕೆ, ಕುಶ. ಪೂರ್ಣ ನವಗ್ರಹ ಹೋಮದಲ್ಲಿ ಪ್ರತಿ ಗ್ರಹಕ್ಕೆ ೧೦೮ ಆಹುತಿ; ೨೮ ಆದರೆ ಪಾದಗ್ರಹಯಜ್ಞ. ಎಂಟೆಂಟು ಆಹುತಿ ಪ್ರಶಸ್ತವಲ್ಲ; ಅದಕ್ಕೆ ಪ್ರಮಾಣವಿಲ್ಲವೆಂದು ಹೋಮ–ಹವನ ಹೇಳುತ್ತದೆ. ಒಂಬತ್ತು ಗ್ರಹಗಳ ನಂತರ, ದುರ್ಗಾ–ಗಣಪತಿ ಮೊದಲಾದ ಎಂಟು ಪರಿವಾರ ದೇವತೆಗಳಿಗೂ ಎಂಟು ದಿಕ್ಪಾಲಕರಿಗೂ ಸಂಖ್ಯೆಯ ದಶಾಂಶದಷ್ಟು ಆಹುತಿ. ಆಜ್ಯ–ಸಮಿಧೆಗಳನ್ನು ಆಯಾ ಗ್ರಹದ ವೈದಿಕ ಮಂತ್ರದಿಂದ ಹೋಮಿಸಿ; ಸಮಿಧೆಗಳನ್ನು ಮೊದಲು ಜೇನು, ತುಪ್ಪ, ಮೊಸರು ಅಥವಾ ಹಾಲಿನಲ್ಲಿ ಅದ್ದಿ (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೩).',
      verses: [
        {
          text: 'सूर्यः सोमो महीपुत्रः सोमपुत्रो बृहस्पतिः ।\nशुक्रः शनैश्चरो राहुः केतुश्चेति ग्रहाः स्मृताः ॥',
          meaning: {
            en: 'Sun, Moon, Mars (son of Earth), Mercury (son of the Moon), Jupiter, Venus, Saturn, Rahu and Ketu are the grahas that are remembered. (Yajnavalkya Smriti 1.296)',
            kn: 'ಸೂರ್ಯ, ಚಂದ್ರ, ಕುಜ (ಭೂಮಿಪುತ್ರ), ಬುಧ (ಚಂದ್ರಪುತ್ರ), ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು — ಇವರೇ ಗ್ರಹಗಳೆಂದು ಹೇಳಲಾಗಿದೆ. (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೨೯೬)',
          },
        },
        {
          text: 'अर्कः पलाशः खदिर अपामार्गोऽथ पिप्पलः ।\nउदुम्बरः शमी दूर्वा कुशाश्च समिधः क्रमात् ॥',
          meaning: {
            en: 'Arka, palasha, khadira, apamarga, pippala (ashvattha), udumbara, shami, durva and kusha are the samidhs, in order. (Yajnavalkya Smriti 1.302)',
            kn: 'ಎಕ್ಕ, ಪಲಾಶ, ಖದಿರ, ಉತ್ತರಾಣೆ, ಅಶ್ವತ್ಥ, ಅತ್ತಿ, ಶಮೀ, ಗರಿಕೆ, ಕುಶ — ಇವು ಕ್ರಮವಾಗಿ ಸಮಿಧೆಗಳು. (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೨)',
          },
        },
        {
          text: 'एकैकस्य त्वष्टशतमष्टाविंशतिरेव वा ।\nहोतव्या मधुसर्पिर्भ्यां दध्ना क्षीरेण वा युताः ॥',
          meaning: {
            en: 'For each graha one hundred and eight, or only twenty-eight, are to be offered, mixed with honey and ghee, with curd or with milk. (Yajnavalkya Smriti 1.303)',
            kn: 'ಪ್ರತಿ ಗ್ರಹಕ್ಕೆ ನೂರೆಂಟು ಅಥವಾ ಇಪ್ಪತ್ತೆಂಟು ಸಮಿಧೆಗಳನ್ನು ಜೇನು–ತುಪ್ಪ, ಮೊಸರು ಅಥವಾ ಹಾಲಿನೊಡನೆ ಹೋಮಿಸಬೇಕು. (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೩)',
          },
        },
      ],
    },
    {
      title: 'ग्रहमन्त्राः',
      titleEn: 'The nine graha mantras',
      note: 'Offer the oblations to each graha in turn with its mantra (each with svaha and the tyaga, इदं न मम): Sun with akrishnena…, Moon with imam deva…, Mars with agnir murdha…, Mercury with udbudhyasva…, Jupiter with brihaspate ati yad aryah…, Venus with annat parisrutah…, Saturn with sham no devir…, Rahu with kandat kandat… (Yajnavalkya) or kaya nas chitra… (Karnataka manuals), Ketu with ketum krinvann…. The Rigvedic verses are given in full below; the other three by their opening words. Each graha has a form of the Lord to be remembered in it (Parashara Hora, in Homa-Havana): Rama in the Sun, Krishna in the Moon, Narasimha in Mars, Buddha in Mercury, Vamana in Jupiter, Parashurama in Venus, Kurma in Saturn, Varaha in Rahu and Matsya in Ketu; or simply Lakshmi-Narasimha in all. The mantras praise the god and do not name the graha, yet they are the ones dear to it: the Lord is meditated through the mantra, and the graha is pleased (Homa-Havana).',
      noteKn: 'ಪ್ರತಿ ಗ್ರಹಕ್ಕೂ ಅದರ ಮಂತ್ರದಿಂದ ಕ್ರಮವಾಗಿ ಆಹುತಿ ನೀಡಿ (ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ): ಸೂರ್ಯನಿಗೆ “ಆಕೃಷ್ಣೇನ…”, ಚಂದ್ರನಿಗೆ “ಇಮಂ ದೇವಾ…”, ಕುಜನಿಗೆ “ಅಗ್ನಿರ್ಮೂರ್ಧಾ…”, ಬುಧನಿಗೆ “ಉದ್ಬುಧ್ಯಸ್ವ…”, ಗುರುವಿಗೆ “ಬೃಹಸ್ಪತೇ ಅತಿ ಯದರ್ಯಃ…”, ಶುಕ್ರನಿಗೆ “ಅನ್ನಾತ್ ಪರಿಸ್ರುತಃ…”, ಶನಿಗೆ “ಶಂ ನೋ ದೇವೀ…”, ರಾಹುವಿಗೆ “ಕಾಂಡಾತ್ ಕಾಂಡಾತ್…” (ಯಾಜ್ಞವಲ್ಕ್ಯ) ಅಥವಾ “ಕಯಾ ನಶ್ಚಿತ್ರ…” (ಕರ್ನಾಟಕದ ಪದ್ಧತಿಗಳು), ಕೇತುವಿಗೆ “ಕೇತುಂ ಕೃಣ್ವನ್…”. ಋಗ್ವೇದ ಮಂತ್ರಗಳನ್ನು ಕೆಳಗೆ ಪೂರ್ತಿ ಕೊಟ್ಟಿದೆ; ಉಳಿದ ಮೂರನ್ನು ಆದಿ ಪದಗಳಿಂದ ಮಾತ್ರ. ಪ್ರತಿ ಗ್ರಹದಲ್ಲಿ ಸ್ಮರಿಸಬೇಕಾದ ಭಗವದ್ರೂಪ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ): ಸೂರ್ಯನಲ್ಲಿ ರಾಮ, ಚಂದ್ರನಲ್ಲಿ ಕೃಷ್ಣ, ಕುಜನಲ್ಲಿ ನರಸಿಂಹ, ಬುಧನಲ್ಲಿ ಬುದ್ಧ, ಗುರುವಿನಲ್ಲಿ ವಾಮನ, ಶುಕ್ರನಲ್ಲಿ ಪರಶುರಾಮ, ಶನಿಯಲ್ಲಿ ಕೂರ್ಮ, ರಾಹುವಿನಲ್ಲಿ ವರಾಹ, ಕೇತುವಿನಲ್ಲಿ ಮತ್ಸ್ಯ; ಅಥವಾ ಎಲ್ಲರಲ್ಲೂ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ. ಮಂತ್ರಗಳು ಗ್ರಹದ ಹೆಸರನ್ನು ಹೇಳದೆ ದೇವರನ್ನು ಸ್ತುತಿಸುತ್ತವೆ, ಆದರೂ ಅವು ಗ್ರಹಪ್ರಿಯ ಮಂತ್ರಗಳು: ಮಂತ್ರದ ಮೂಲಕ ಭಗವಂತನ ಧ್ಯಾನದಿಂದ ಗ್ರಹಪ್ರೀತಿ ಉಂಟಾಗುತ್ತದೆ (ಹೋಮ–ಹವನ).',
      verses: [
        {
          text: 'आकृष्णेन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवनानि पश्यन् ॥',
          meaning: {
            en: 'Moving through the dark space, calling to rest the immortal and the mortal, the god Savitri comes in his golden chariot, looking upon all the worlds. (Rigveda 1.35.2; the Sun)',
            kn: 'ಕತ್ತಲೆಯ ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ಅಮರರನ್ನೂ ಮರ್ತ್ಯರನ್ನೂ ತಮ್ಮ ತಮ್ಮ ಸ್ಥಾನದಲ್ಲಿ ನೆಲೆಗೊಳಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಎಲ್ಲ ಲೋಕಗಳನ್ನು ನೋಡುತ್ತಾ ಚಿನ್ನದ ರಥದಲ್ಲಿ ಬರುತ್ತಾನೆ. (ಋಗ್ವೇದ ೧.೩೫.೨; ಸೂರ್ಯ)',
          },
        },
        {
          text: 'इमं देवा असपत्नं सुवध्वम् ॥',
          meaning: {
            en: 'O gods, bring forth this one without rival. (Opening words of the Moon mantra as in the Vajasaneyi text and the Navagraha Sukta; Yajnavalkya gives only imam deva. Recited in full by the priest.)',
            kn: 'ಓ ದೇವತೆಗಳೇ, ಇವನನ್ನು ಶತ್ರುರಹಿತನನ್ನಾಗಿ ಮಾಡಿ. (ಚಂದ್ರ ಮಂತ್ರದ ಆದಿ ಪದಗಳು, ವಾಜಸನೇಯಿ ಪಾಠ ಮತ್ತು ನವಗ್ರಹ ಸೂಕ್ತದಂತೆ; ಯಾಜ್ಞವಲ್ಕ್ಯ “ಇಮಂ ದೇವಾ” ಮಾತ್ರ ಹೇಳುತ್ತಾರೆ. ಪುರೋಹಿತರು ಪೂರ್ಣವಾಗಿ ಹೇಳುತ್ತಾರೆ.)',
          },
        },
        {
          text: 'अग्निर्मूर्धा दिवः ककुत्पतिः पृथिव्या अयम् ।\nअपां रेतांसि जिन्वति ॥',
          meaning: {
            en: 'Agni is the head and peak of heaven, lord of the earth; he quickens the seed of the waters. (Rigveda 8.44.16; Mars)',
            kn: 'ಅಗ್ನಿಯು ದ್ಯುಲೋಕದ ಶಿರ ಮತ್ತು ಶಿಖರ, ಭೂಮಿಯ ಒಡೆಯ; ಅವನು ಜಲಗಳ ರೇತಸ್ಸನ್ನು ಜೀವಂತಗೊಳಿಸುತ್ತಾನೆ. (ಋಗ್ವೇದ ೮.೪೪.೧೬; ಕುಜ)',
          },
        },
        {
          text: 'उद्बुध्यस्वाग्ने प्रति जागृहि ॥',
          meaning: {
            en: 'Awake, O Agni, and be watchful. (Opening words of the Mercury mantra; recited in full by the priest, from the Taittiriya Samhita.)',
            kn: 'ಅಗ್ನಿಯೇ, ಎದ್ದೇಳು, ಎಚ್ಚರವಾಗಿರು. (ಬುಧ ಮಂತ್ರದ ಆದಿ ಪದಗಳು; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆಯಿಂದ ಪುರೋಹಿತರು ಪೂರ್ಣವಾಗಿ ಹೇಳುತ್ತಾರೆ.)',
          },
        },
        {
          text: 'बृहस्पतेऽति यदर्यो अर्हाद्द्युमद्विभाति क्रतुमज्जनेषु ।\nयद्दीदयच्छवस ऋतप्रजात तदस्मासु द्रविणं धेहि चित्रम् ॥',
          meaning: {
            en: 'O Brihaspati, that which excels among the people in worthiness and shines with splendour and purpose, that which gleams with strength, born of truth — give us that wonderful wealth. (Rigveda 2.23.15; Jupiter)',
            kn: 'ಓ ಬೃಹಸ್ಪತಿಯೇ, ಜನರಲ್ಲಿ ಯೋಗ್ಯತೆಯಲ್ಲಿ ಮೀರಿ, ತೇಜಸ್ಸಿನಿಂದ ಸಂಕಲ್ಪದೊಡನೆ ಬೆಳಗುವ, ಸತ್ಯದಿಂದ ಹುಟ್ಟಿದ ಬಲದಿಂದ ಹೊಳೆಯುವ ಆ ಅದ್ಭುತ ಸಂಪತ್ತನ್ನು ನಮಗೆ ಕೊಡು. (ಋಗ್ವೇದ ೨.೨೩.೧೫; ಗುರು)',
          },
        },
        {
          text: 'अन्नात्परिस्रुतो रसं ब्रह्मणा व्यपिबत्क्षत्रम् ॥',
          meaning: {
            en: 'From the food, the strained essence: by the spirit he drank the power. (Opening words of the Venus mantra; recited in full by the priest.)',
            kn: 'ಅನ್ನದಿಂದ ಹಿಂಡಿದ ರಸವನ್ನು ಬ್ರಹ್ಮದಿಂದ ಅವನು ಕುಡಿದು ಕ್ಷತ್ರವನ್ನು ಪಡೆದನು. (ಶುಕ್ರ ಮಂತ್ರದ ಆದಿ ಪದಗಳು; ಪುರೋಹಿತರು ಪೂರ್ಣವಾಗಿ ಹೇಳುತ್ತಾರೆ.)',
          },
        },
        {
          text: 'शं नो देवीरभिष्टय आपो भवन्तु पीतये ।\nशं योरभि स्रवन्तु नः ॥',
          meaning: {
            en: 'May the divine Waters be a blessing to us for our welfare and for drinking; may they flow to us with health and happiness. (Rigveda 10.9.4; Saturn)',
            kn: 'ದಿವ್ಯ ಜಲಗಳು ನಮ್ಮ ಅಭೀಷ್ಟಕ್ಕಾಗಿ, ಪಾನಕ್ಕಾಗಿ ಮಂಗಳಕರವಾಗಲಿ; ಆರೋಗ್ಯ–ಸುಖಗಳೊಡನೆ ನಮ್ಮೆಡೆಗೆ ಹರಿಯಲಿ. (ಋಗ್ವೇದ ೧೦.೯.೪; ಶನಿ)',
          },
        },
        {
          text: 'काण्डात्काण्डात्प्ररोहन्ती ॥',
          meaning: {
            en: 'Springing up joint by joint. (Opening words of the Rahu mantra in the Yajnavalkya form, the durva verse; recited in full by the priest.)',
            kn: 'ಕಾಂಡದಿಂದ ಕಾಂಡಕ್ಕೆ ಚಿಗುರುತ್ತಾ. (ಯಾಜ್ಞವಲ್ಕ್ಯ ರೂಪದಲ್ಲಿ ರಾಹು ಮಂತ್ರದ ಆದಿ ಪದಗಳು, ಗರಿಕೆಯ ಮಂತ್ರ; ಪುರೋಹಿತರು ಪೂರ್ಣವಾಗಿ ಹೇಳುತ್ತಾರೆ.)',
          },
        },
        {
          text: 'कया नश्चित्र आ भुवदूती सदावृधः सखा ।\nकया शचिष्ठया वृता ॥',
          meaning: {
            en: 'By what help will the wonderful, ever-growing friend come to us? By what most mighty company? (Rigveda 4.31.1; the Rahu mantra of the Karnataka manuals.)',
            kn: 'ಅದ್ಭುತನಾದ, ಸದಾ ಬೆಳೆಯುವ ಮಿತ್ರನು ಯಾವ ರಕ್ಷಣೆಯೊಡನೆ, ಯಾವ ಅತಿ ಬಲಿಷ್ಠ ಪರಿವಾರದೊಡನೆ ನಮ್ಮೆಡೆಗೆ ಬರುತ್ತಾನೆ? (ಋಗ್ವೇದ ೪.೩೧.೧; ಕರ್ನಾಟಕದ ಪದ್ಧತಿಗಳ ರಾಹು ಮಂತ್ರ.)',
          },
        },
        {
          text: 'केतुं कृण्वन्नकेतवे पेशो मर्या अपेशसे ।\nसमुषद्भिरजायथाः ॥',
          meaning: {
            en: 'Making light for the lightless and form for the formless, O men, you were born together with the dawns. (Rigveda 1.6.3; Ketu)',
            kn: 'ಓ ಮನುಷ್ಯರೇ, ಬೆಳಕಿಲ್ಲದವರಿಗೆ ಬೆಳಕನ್ನೂ ರೂಪವಿಲ್ಲದವರಿಗೆ ರೂಪವನ್ನೂ ಕೊಡುತ್ತಾ ನೀನು ಉಷಸ್ಸುಗಳೊಡನೆ ಹುಟ್ಟಿದೆ. (ಋಗ್ವೇದ ೧.೬.೩; ಕೇತು)',
          },
        },
      ],
    },
    {
      title: 'ग्रहस्तोत्रम्',
      titleEn: 'Vadiraja’s Graha Stotra',
      note: 'The graha stotras are read for the pleasure of the Lord and the grahas. This short one by Sri Vadirajatirtha is easy to recite daily. Another well-known one is namah suryaya somaya… (open elsewhere in the library). Reading a stotra of a single graha repeatedly is also said to remove the fault that graha indicates.',
      noteKn: 'ಗ್ರಹಸ್ತೋತ್ರಗಳನ್ನು ಭಗವಂತ ಮತ್ತು ಗ್ರಹಗಳ ಪ್ರೀತಿಗಾಗಿ ಪಠಿಸುತ್ತಾರೆ. ಶ್ರೀವಾದಿರಾಜತೀರ್ಥರ ಈ ಚಿಕ್ಕ ಸ್ತೋತ್ರವನ್ನು ನಿತ್ಯ ಪಠಿಸಲು ಅನುಕೂಲ. “ನಮಃ ಸೂರ್ಯಾಯ ಸೋಮಾಯ…” ಇನ್ನೊಂದು ಪ್ರಸಿದ್ಧ ಸ್ತೋತ್ರ. ಒಂದೇ ಗ್ರಹದ ಸ್ತೋತ್ರವನ್ನು ಪುನಃ ಪುನಃ ಪಠಿಸಿದರೆ ಆ ಗ್ರಹ ಸೂಚಿಸುವ ದೋಷ ನಿವಾರಣೆ.',
      verses: [
        {
          text: 'भास्वान्मे भासयेत्तत्त्वं चन्द्रश्चाह्लादकृद्भवेत् ।\nमङ्गलो मङ्गलं दद्याद्बुधश्च बुधतां दिशेत् ॥',
          meaning: {
            en: 'May the Sun make the truth shine in me; may the Moon give delight; may Mars give auspiciousness; may Mercury give wisdom.',
            kn: 'ಸೂರ್ಯನು ನನ್ನಲ್ಲಿ ತತ್ತ್ವವನ್ನು ಬೆಳಗಿಸಲಿ; ಚಂದ್ರನು ಆಹ್ಲಾದ ನೀಡಲಿ; ಕುಜನು ಮಂಗಳವನ್ನು ಕೊಡಲಿ; ಬುಧನು ಬುದ್ಧಿಯನ್ನು ದಯಪಾಲಿಸಲಿ.',
          },
        },
        {
          text: 'गुरुश्च गुरुतां दद्यात्कविश्च कवितां दिशेत् ।\nशनिश्च शं प्रापयतु केतुः केतुं जयेऽर्पयेत् ॥',
          meaning: {
            en: 'May Jupiter give greatness; may Venus give poetic power; may Saturn bring welfare; may Ketu raise the banner of my victory.',
            kn: 'ಗುರುವು ಗೌರವವನ್ನು ಕೊಡಲಿ; ಶುಕ್ರನು ಕವಿತಾಶಕ್ತಿಯನ್ನು ಕೊಡಲಿ; ಶನಿಯು ಶುಭವನ್ನು ತರಲಿ; ಕೇತುವು ನನ್ನ ಜಯದ ಪತಾಕೆಯನ್ನು ಹಾರಿಸಲಿ.',
          },
        },
        {
          text: 'राहुर्मे रहयेद्रोगं ग्रहाः सन्तु करे ग्रहाः ।\nनवं नवं ममैश्वर्यं दिशन्त्वेते नवग्रहाः ॥',
          meaning: {
            en: 'May Rahu take my disease away; may all the grahas take me by the hand; may these nine grahas grant me ever new prosperity.',
            kn: 'ರಾಹುವು ನನ್ನ ರೋಗವನ್ನು ಕಳೆಯಲಿ; ಎಲ್ಲ ಗ್ರಹಗಳೂ ಕೈಹಿಡಿದೆತ್ತಲಿ; ಈ ನವಗ್ರಹಗಳು ನನಗೆ ಹೊಸ ಹೊಸ ಐಶ್ವರ್ಯವನ್ನು ಕರುಣಿಸಲಿ.',
          },
        },
        {
          text: 'शने दिनमणेः सूनो ह्यनेकगुणसन्मणे ।\nअरिष्टं हर मेऽभीष्टं कुरु मा कुरु सङ्कटम् ॥',
          meaning: {
            en: 'O Saturn, son of the Sun, jewel of countless virtues, remove my misfortune, grant my wish and cause me no distress.',
            kn: 'ಓ ದಿನಮಣಿಯ ಪುತ್ರನಾದ ಅನೇಕ ಗುಣರತ್ನನಾದ ಶನಿಯೇ, ನನ್ನ ಅರಿಷ್ಟವನ್ನು ಕಳೆ, ಅಭೀಷ್ಟವನ್ನು ಕೊಡು, ಸಂಕಟವನ್ನು ಕೊಡಬೇಡ.',
          },
        },
        {
          text: 'हरेरनुग्रहार्थाय शत्रूणां निग्रहाय च ।\nवादिराजयतिप्रोक्तं ग्रहस्तोत्रं सदा पठेत् ॥',
          meaning: {
            en: 'For the grace of Hari and for the subduing of enemies, one should always recite this Graha Stotra taught by the saint Vadiraja.',
            kn: 'ಶ್ರೀಹರಿಯ ಅನುಗ್ರಹಕ್ಕಾಗಿ ಮತ್ತು ಶತ್ರುಗಳ ನಿಗ್ರಹಕ್ಕಾಗಿ ವಾದಿರಾಜಯತಿಗಳು ಹೇಳಿದ ಈ ಗ್ರಹಸ್ತೋತ್ರವನ್ನು ಸದಾ ಪಠಿಸಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'जपदानादि',
      titleEn: 'Japa, gifts and closing',
      note: 'Japa: the nine graha mantras are repeated 108 times each in a common homa; or by the graha’s dasha-years in thousands (Sun 6,000, Moon 10,000, Mars 7,000, Mercury 17,000, Jupiter 16,000, Venus 20,000, Saturn 19,000, Rahu 18,000, Ketu 7,000, in all 1,20,000), usually done by shrotriya brahmins on one’s behalf; one tenth of the japa as tarpana. Food for the brahmins in the order of the grahas (Yajnavalkya Smriti 1.304: jaggery-rice, payasa, havishya, milk-rice with sali, curd-rice, havishya with flour, meat, variegated rice — the manual of Homa-Havana does not give this list; follow your priest). Gifts (Yajnavalkya Smriti 1.306): a cow, a conch, a bull, gold, cloth, a horse, a black cow, iron, a goat, in the order of the grahas. Honour the ashvattha (Jupiter) and shami (Saturn) trees with a pradakshina. Complete the homa with the purnahuti and farewell of the Common Procedure.',
      noteKn: 'ಜಪ: ಸಾಮಾನ್ಯ ಹೋಮದಲ್ಲಿ ಒಂಬತ್ತು ಗ್ರಹಮಂತ್ರಗಳನ್ನು ತಲಾ ೧೦೮ ಬಾರಿ; ಅಥವಾ ಆಯಾ ಗ್ರಹದ ದಶಾವರ್ಷ ಸಂಖ್ಯೆಯಷ್ಟು ಸಾವಿರ (ಸೂರ್ಯ ೬,೦೦೦; ಚಂದ್ರ ೧೦,೦೦೦; ಕುಜ ೭,೦೦೦; ಬುಧ ೧೭,೦೦೦; ಗುರು ೧೬,೦೦೦; ಶುಕ್ರ ೨೦,೦೦೦; ಶನಿ ೧೯,೦೦೦; ರಾಹು ೧೮,೦೦೦; ಕೇತು ೭,೦೦೦; ಒಟ್ಟು ೧,೨೦,೦೦೦), ಸಾಮಾನ್ಯವಾಗಿ ಶ್ರೋತ್ರಿಯ ಬ್ರಾಹ್ಮಣರು ಯಜಮಾನನ ಪರವಾಗಿ ಮಾಡುತ್ತಾರೆ; ಜಪದ ದಶಾಂಶ ತರ್ಪಣ. ಬ್ರಾಹ್ಮಣರಿಗೆ ಗ್ರಹಕ್ರಮದಲ್ಲಿ ಭೋಜನ (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೪: ಗುಡಾನ್ನ, ಪಾಯಸ, ಹವಿಷ್ಯ, ಕ್ಷೀರಷಾಷ್ಟಿಕ, ದಧ್ಯನ್ನ, ಹವಿಷ್ಯ ಚೂರ್ಣ, ಮಾಂಸ, ಚಿತ್ರಾನ್ನ — ಹೋಮ–ಹವನದಲ್ಲಿ ಈ ಪಟ್ಟಿ ಇಲ್ಲ; ಪುರೋಹಿತರ ಮಾತಿನಂತೆ ಮಾಡಿ). ದಾನ (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೬): ಗ್ರಹಕ್ರಮದಲ್ಲಿ ಹಸು, ಶಂಖ, ಎತ್ತು, ಚಿನ್ನ, ವಸ್ತ್ರ, ಕುದುರೆ, ಕಪ್ಪುಹಸು, ಕಬ್ಬಿಣ, ಆಡು. ಅಶ್ವತ್ಥ (ಗುರು) ಮತ್ತು ಶಮೀ (ಶನಿ) ವೃಕ್ಷಗಳಿಗೆ ಪ್ರದಕ್ಷಿಣೆ. ಸಾಮಾನ್ಯ ವಿಧಿಯ ಪೂರ್ಣಾಹುತಿ–ವಿಸರ್ಜನೆಯಿಂದ ಹೋಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.',
      verses: [
        {
          text: 'धेनुः शङ्खस्तथानड्वान्हेम वासो हयः क्रमात् ।\nकृष्णा गौरायसं छाग एता वै दक्षिणाः स्मृताः ॥',
          meaning: {
            en: 'A cow, a conch, a bull, gold, cloth, a horse, a black cow, iron and a goat, in order, are remembered as the gifts for the grahas. (Yajnavalkya Smriti 1.306)',
            kn: 'ಗ್ರಹಕ್ರಮದಲ್ಲಿ ಹಸು, ಶಂಖ, ಎತ್ತು, ಚಿನ್ನ, ವಸ್ತ್ರ, ಕುದುರೆ, ಕಪ್ಪುಹಸು, ಕಬ್ಬಿಣ, ಆಡು — ಇವೇ ದಕ್ಷಿಣೆಗಳೆಂದು ಹೇಳಲಾಗಿದೆ. (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೬)',
          },
        },
      ],
    },
  ],
};
