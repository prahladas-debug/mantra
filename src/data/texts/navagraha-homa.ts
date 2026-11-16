/**
 * Navagraha Homa (graha-shanti, graha-makha): the whole rite in order — sankalpa, the common
 * agnimukha (from "Homa: Common Procedure"), the graha mandala and avahana, dhyana and puja of
 * the nine grahas, the homa to each graha with its Vedic mantra and to its adhidevata and
 * pratyadhidevata, the parivara and dikpala offerings, the uttaranga, the abhisheka of the
 * yajamana, the gifts with their mantras, the stotras and the closing.
 *
 * Sources:
 *  - Matsya Purana 93 (Grahashanti), GRETIL sa_matsyapurANa1-176 (Anandashrama text): mandala
 *    positions 93.11-12, adhidevatas and pratyadhidevatas 93.13-16, invocation with the vyahritis,
 *    samidhs 93.27, count 93.28 (108 or 28, with honey, ghee and curd), samidh-charu-ghee 93.30-32,
 *    graha mantras by their opening words 93.33-37, purnahuti with murdhanam divah 93.48, abhisheka
 *    verses 93.51-54, the gifts 93.60-63 and the dana mantras 93.64-72 (verses printed from GRETIL).
 *  - Yajnavalkya Smriti 1.296-308 (GRETIL): grahas, samidhs, count, gifts (the verses kept from the
 *    earlier version of this text).
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012 (archive.org
 *    20230827_20230827_0721), chapter "Navagraha (Grahashanti) Homa": the five parts, the table of
 *    grains, samidhs, colours, mandala shapes, metals, gems, the adhidevata row (Agni, Apah …
 *    Prajapati, Sarpa, Brahma) and pratyadhidevata row (Rudra, Gauri …), the forms of the Lord in the
 *    grahas (Parashara Hora), 108 each (full) or 28 (padagraha-yajna), a tenth to the parivara
 *    devatas and dikpalas, the Saturn mantra sham agnir agnibhih, Vadiraja's Graha Stotra.
 *  - Graha mantras, Rigveda form: RV 1.35.2, 1.91.16, 8.44.16, 2.23.15, 6.58.1, 8.18.9, 4.31.1,
 *    1.6.3 (GRETIL, Aufrecht; svaras removed); Mercury udbudhyasvagne TS 4.7.13 (no Rigvedic verse;
 *    the form of Yajnavalkya and the Navagraha Sukta). This set agrees with Matsya 93.33-37 except
 *    Mercury (Matsya: agne vivasvad ushasah) and Jupiter (Matsya: brihaspate pari diya), and with
 *    Homa-Havana for Sun, Saturn and Rahu.
 *  - Yajurveda (Taittiriya) form and all adhidevata/pratyadhidevata mantras: the Navagraha Sukta as
 *    printed by stotranidhi.com (two other witnesses for the openings: hindupedia.com), each verse
 *    checked in vishvAsa/vedAH_yajuH (TS vakya-krama, TB dravida text) and the RV: a satyena TS 3.4.11,
 *    agnim dutam RV 1.12.1, yesham ishe TS 3.1.4, apsu me RV 1.23.20, gauri mimaya TB 2.4.6 / RV
 *    1.164.41, syona RV 1.22.15, kshetrasya RV 4.57.1, idam vishnur RV 1.22.17, vishno raratam TS
 *    1.2.13, indra marutva RV 3.51.7, brahma jajnanam TS 4.2.8, pra vah shukraya TB 2.8.2, indranim RV
 *    10.86.11, indram vo RV 1.7.10, sham no devih RV 10.9.4, prajapate RV 10.121.10, imam yama RV
 *    10.14.4, ayam gauh RV 10.189.1 / TS 1.5.3, yat te devi TS 4.2.5, brahma devanam RV 9.96.6, sa
 *    citra RV 6.6.7.
 *  - Purnahuti verse murdhanam divah RV 6.7.1 (GRETIL). Graha dhyana: Vyasa's Navagraha Stotra and the
 *    uttaranga and closing puja as in this app's "Navagraha Stotram", "Homa: Common Procedure" and
 *    "Daily Puja" (copied so that the readings agree).
 */
import type { Mantra } from '../types';

export const navagrahaHoma: Mantra = {
  id: "navagraha-homa",
  title: "नवग्रहहोमः",
  titleEn: "Navagraha Homa (Graha-shanti)",
  category: "homa",
  order: 3,
  deity: "The nine grahas (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu), with their adhidevatas and pratyadhidevatas",
  source: "Matsya Purana 93; Yajnavalkya Smriti 1.296-308; Rigveda and the Taittiriya Navagraha Sukta; Madhva: Homa-Havana (Satyanarayanacharya), Vadirajatirtha’s Graha Stotra",
  summary: "The Navagraha homa from start to end, for peace from the troubles the planets indicate: sankalpa, the agnimukha, the graha mandala and invocation, dhyana with Vyasa’s stotra, the homa to each of the nine grahas with its full Vedic mantra (Rigveda and Taittiriya forms) and to its adhidevata and pratyadhidevata, with the samidh, food and count of each, the dikpala offerings, the uttaranga with the graha purnahuti, the abhisheka of the yajamana with the Matsya Purana verses, the nine gifts with their mantras, the stotras, and the closing. Choose Madhva or Smarta and your Veda at the top.",
  summaryKn: "ಗ್ರಹಗಳು ಸೂಚಿಸುವ ಪೀಡೆಗಳ ಶಾಂತಿಗಾಗಿ ನವಗ್ರಹ ಹೋಮ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ಸಂಕಲ್ಪ, ಅಗ್ನಿಮುಖ, ಗ್ರಹಮಂಡಲ–ಆವಾಹನೆ, ವ್ಯಾಸಸ್ತೋತ್ರದಿಂದ ಧ್ಯಾನ, ಒಂಬತ್ತು ಗ್ರಹಗಳಿಗೂ ಪೂರ್ಣ ವೈದಿಕ ಮಂತ್ರದಿಂದ (ಋಗ್ವೇದ ಮತ್ತು ತೈತ್ತಿರೀಯ ರೂಪಗಳು) ಮತ್ತು ಅವುಗಳ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಹೋಮ — ಪ್ರತಿಯೊಂದರ ಸಮಿಧೆ, ನೈವೇದ್ಯ, ಸಂಖ್ಯೆಗಳೊಡನೆ, ದಿಕ್ಪಾಲಕರ ಆಹುತಿ, ಗ್ರಹಪೂರ್ಣಾಹುತಿಸಹಿತ ಉತ್ತರಾಂಗ, ಮತ್ಸ್ಯಪುರಾಣ ಶ್ಲೋಕಗಳಿಂದ ಯಜಮಾನನಿಗೆ ಅಭಿಷೇಕ, ಮಂತ್ರಸಹಿತ ನವದಾನ, ಸ್ತೋತ್ರಗಳು, ಸಮಾಪ್ತಿ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ/ಸ್ಮಾರ್ತ ಮತ್ತು ವೇದವನ್ನು ಆರಿಸಿ.",
  variants: [
    {
      key: "tradition",
      title: "Tradition",
      titleKn: "ಸಂಪ್ರದಾಯ",
      options: [
        { id: "madhva", label: "Madhva", labelKn: "ಮಾಧ್ವ" },
        { id: "smarta", label: "Smarta", labelKn: "ಸ್ಮಾರ್ತ" },
      ],
    },
    {
      key: "veda",
      title: "Veda (for the graha mantras)",
      titleKn: "ವೇದ (ಗ್ರಹಮಂತ್ರಗಳಿಗೆ)",
      options: [
        { id: "rigveda", label: "Rigveda", labelKn: "ಋಗ್ವೇದ" },
        { id: "yajurveda", label: "Yajurveda (Taittiriya)", labelKn: "ಯಜುರ್ವೇದ (ತೈತ್ತಿರೀಯ)" },
      ],
    },
  ],
  difficulty: "advanced",
  completeness: "complete",
  contentNote: "Homas are traditionally done with a trained priest; this text lets the family follow every step. The agnimukha (from the kalasha to the ajyabhaga) is done from \"Homa: Common Procedure\"; everything else is printed here. Choose your Veda for the graha mantras: the Rigvedic set follows the Homa-Havana and the Matsya Purana (Mercury's mantra udbudhyasva is from the Yajurveda, as in Yajnavalkya and the Navagraha Sukta; Matsya gives agne vivasvad ushasah for Mercury and brihaspate pari diya for Jupiter, and sham no devih for Saturn); the Taittiriya set is the Navagraha Sukta. The adhidevata and pratyadhidevata mantras are those of the Navagraha Sukta, used by both. Not given: the Graha-pidahara stotra recited at the abhisheka (only partly legible in the one scan), the names of all eight parivara deities of the Homa-Havana (the five of the Matsya Purana are given), and the long japa counts done by brahmins on one's behalf (described in the note). Follow your family manual and purohita where they differ.",
  sections: [
    {
      title: "ग्रहशान्तिविधानम्",
      titleEn: "Before you begin: materials, the count and the order",
      note: "No graha is evil: the grahas only show beforehand the fruit of our earlier karma, and are to be honoured for that warning. A graha-shanti has five parts: puja of the grahas (on a mandala with their grains, as in the table below), homa, japa, stotra and dana. Table (Homa-Havana; the grahas in order Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu): grains — wheat, rice, toor, moong, chana, avare, sesame, urad, horse-gram; samidhs — arka, palasha, khadira, apamarga, ashvattha, udumbara, shami, durva, kusha. A full Navagraha homa offers 108 oblations to each graha; 28 each is the padagraha-yajna. Eight each is not recommended; the Homa-Havana says there is no authority for it. After the nine, make oblations, one tenth of the count, to the eight parivara deities (Durga, Ganapati and the rest) and to the eight guardians of the directions. The ghee and the samidh are offered with the Vedic verse of each graha; the samidhs are first dipped in honey, ghee and curd or milk (Yajnavalkya Smriti 1.303). The order of this text: sankalpa; the agnimukha of the Common Procedure; the mandala and the invocation of the grahas; their dhyana and puja; the homa to each graha in turn (Sun to Ketu) with its adhidevata and pratyadhidevata; the parivara devatas and the dikpalas; the uttaranga with the purnahuti; the closing puja; the abhisheka of the yajamana with the kalasha water; the gifts; the stotras; kshamapana and samarpana. Choose Madhva or Smarta, and Rigveda or Yajurveda, at the top: Rigvedis (and Madhvas, who follow the Rigvedic forms of the Homa-Havana) use the Rigvedic graha mantras; Taittiriya Yajurvedis use those of the Navagraha Sukta. Where the two have the same verse it is shown once.",
      noteKn: "ಯಾವ ಗ್ರಹವೂ ದುಷ್ಟವಲ್ಲ: ಗ್ರಹಗಳು ನಮ್ಮ ಪೂರ್ವಕರ್ಮಫಲವನ್ನು ಮುಂಚಿತವಾಗಿ ಸೂಚಿಸುತ್ತವೆ ಅಷ್ಟೇ; ಆ ಎಚ್ಚರಿಕೆಗಾಗಿ ಅವು ಪೂಜ್ಯ. ಗ್ರಹಶಾಂತಿಗೆ ಐದು ಭಾಗಗಳು: ಗ್ರಹಪೂಜೆ (ಮಂಡಲದಲ್ಲಿ ಗ್ರಹಧಾನ್ಯಗಳೊಡನೆ, ಕೆಳಗಿನ ಕೋಷ್ಟಕದಂತೆ), ಹೋಮ, ಜಪ, ಸ್ತೋತ್ರ, ದಾನ. ಕೋಷ್ಟಕ (ಹೋಮ–ಹವನ; ಕ್ರಮ: ಸೂರ್ಯ, ಚಂದ್ರ, ಕುಜ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು): ಧಾನ್ಯ — ಗೋಧಿ, ಅಕ್ಕಿ, ತೊಗರಿ, ಹೆಸರು, ಕಡಲೆ, ಅವರೆ, ಎಳ್ಳು, ಉದ್ದು, ಹುರುಳಿ; ಸಮಿಧೆ — ಎಕ್ಕ, ಪಲಾಶ, ಖದಿರ, ಉತ್ತರಾಣೆ, ಅಶ್ವತ್ಥ, ಅತ್ತಿ, ಶಮೀ, ಗರಿಕೆ, ಕುಶ. ಪೂರ್ಣ ನವಗ್ರಹ ಹೋಮದಲ್ಲಿ ಪ್ರತಿ ಗ್ರಹಕ್ಕೆ ೧೦೮ ಆಹುತಿ; ೨೮ ಆದರೆ ಪಾದಗ್ರಹಯಜ್ಞ. ಎಂಟೆಂಟು ಆಹುತಿ ಪ್ರಶಸ್ತವಲ್ಲ; ಅದಕ್ಕೆ ಪ್ರಮಾಣವಿಲ್ಲವೆಂದು ಹೋಮ–ಹವನ ಹೇಳುತ್ತದೆ. ಒಂಬತ್ತು ಗ್ರಹಗಳ ನಂತರ, ದುರ್ಗಾ–ಗಣಪತಿ ಮೊದಲಾದ ಎಂಟು ಪರಿವಾರ ದೇವತೆಗಳಿಗೂ ಎಂಟು ದಿಕ್ಪಾಲಕರಿಗೂ ಸಂಖ್ಯೆಯ ದಶಾಂಶದಷ್ಟು ಆಹುತಿ. ಆಜ್ಯ–ಸಮಿಧೆಗಳನ್ನು ಆಯಾ ಗ್ರಹದ ವೈದಿಕ ಮಂತ್ರದಿಂದ ಹೋಮಿಸಿ; ಸಮಿಧೆಗಳನ್ನು ಮೊದಲು ಜೇನು, ತುಪ್ಪ, ಮೊಸರು ಅಥವಾ ಹಾಲಿನಲ್ಲಿ ಅದ್ದಿ (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೩). ಈ ಪಠ್ಯದ ಕ್ರಮ: ಸಂಕಲ್ಪ; ಸಾಮಾನ್ಯ ವಿಧಿಯ ಅಗ್ನಿಮುಖ; ಮಂಡಲ ಮತ್ತು ಗ್ರಹಾವಾಹನೆ; ಧ್ಯಾನ–ಪೂಜೆ; ಒಂದೊಂದು ಗ್ರಹಕ್ಕೂ (ಸೂರ್ಯನಿಂದ ಕೇತುವಿನವರೆಗೆ) ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳೊಡನೆ ಹೋಮ; ಪರಿವಾರದೇವತೆಗಳು ಮತ್ತು ದಿಕ್ಪಾಲಕರು; ಪೂರ್ಣಾಹುತಿಸಹಿತ ಉತ್ತರಾಂಗ; ಉತ್ತರಪೂಜೆ; ಕಲಶಜಲದಿಂದ ಯಜಮಾನನಿಗೆ ಅಭಿಷೇಕ; ದಾನ; ಸ್ತೋತ್ರ; ಕ್ಷಮಾಪಣೆ–ಸಮರ್ಪಣೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ/ಸ್ಮಾರ್ತ ಮತ್ತು ಋಗ್ವೇದ/ಯಜುರ್ವೇದ ಆರಿಸಿ: ಋಗ್ವೇದಿಗಳು (ಹೋಮ–ಹವನದ ಋಗ್ವೇದ ರೂಪಗಳನ್ನು ಅನುಸರಿಸುವ ಮಾಧ್ವರೂ) ಋಗ್ವೇದದ ಗ್ರಹಮಂತ್ರಗಳನ್ನು, ತೈತ್ತಿರೀಯ ಯಜುರ್ವೇದಿಗಳು ನವಗ್ರಹಸೂಕ್ತದ ಮಂತ್ರಗಳನ್ನು ಬಳಸುತ್ತಾರೆ. ಎರಡರಲ್ಲೂ ಒಂದೇ ಮಂತ್ರವಿದ್ದರೆ ಒಮ್ಮೆ ಮಾತ್ರ ತೋರಿಸಿದೆ.",
      verses: [
        {
          text: "सूर्यः सोमो महीपुत्रः सोमपुत्रो बृहस्पतिः ।\nशुक्रः शनैश्चरो राहुः केतुश्चेति ग्रहाः स्मृताः ॥",
          meaning: {
            en: "Sun, Moon, Mars (son of Earth), Mercury (son of the Moon), Jupiter, Venus, Saturn, Rahu and Ketu are the grahas that are remembered. (Yajnavalkya Smriti 1.296)",
            kn: "ಸೂರ್ಯ, ಚಂದ್ರ, ಕುಜ (ಭೂಮಿಪುತ್ರ), ಬುಧ (ಚಂದ್ರಪುತ್ರ), ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು — ಇವರೇ ಗ್ರಹಗಳೆಂದು ಹೇಳಲಾಗಿದೆ. (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೨೯೬)",
          },
        },
        {
          text: "अर्कः पलाशः खदिर अपामार्गोऽथ पिप्पलः ।\nउदुम्बरः शमी दूर्वा कुशाश्च समिधः क्रमात् ॥",
          meaning: {
            en: "Arka, palasha, khadira, apamarga, pippala (ashvattha), udumbara, shami, durva and kusha are the samidhs, in order. (Yajnavalkya Smriti 1.302)",
            kn: "ಎಕ್ಕ, ಪಲಾಶ, ಖದಿರ, ಉತ್ತರಾಣೆ, ಅಶ್ವತ್ಥ, ಅತ್ತಿ, ಶಮೀ, ಗರಿಕೆ, ಕುಶ — ಇವು ಕ್ರಮವಾಗಿ ಸಮಿಧೆಗಳು. (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೨)",
          },
        },
        {
          text: "एकैकस्य त्वष्टशतमष्टाविंशतिरेव वा ।\nहोतव्या मधुसर्पिर्भ्यां दध्ना क्षीरेण वा युताः ॥",
          meaning: {
            en: "For each graha one hundred and eight, or only twenty-eight, are to be offered, mixed with honey and ghee, with curd or with milk. (Yajnavalkya Smriti 1.303)",
            kn: "ಪ್ರತಿ ಗ್ರಹಕ್ಕೆ ನೂರೆಂಟು ಅಥವಾ ಇಪ್ಪತ್ತೆಂಟು ಸಮಿಧೆಗಳನ್ನು ಜೇನು–ತುಪ್ಪ, ಮೊಸರು ಅಥವಾ ಹಾಲಿನೊಡನೆ ಹೋಮಿಸಬೇಕು. (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೩)",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Madhva)",
      note: "Do achamana and pranayama, say the deshakala as in the Daily Puja sankalpa, then, holding akshata and water, make this sankalpa and let the water fall into the plate. For another person, say अस्य यजमानस्य (of this yajamana) for मम.",
      noteKn: "ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲ ಹೇಳಿ, ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಈ ಸಂಕಲ್ಪ ಮಾಡಿ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ಇನ್ನೊಬ್ಬರಿಗಾಗಿ ಮಾಡುವಾಗ “ಮಮ” ಬದಲು “ಅಸ್ಯ ಯಜಮಾನಸ್ಯ” ಎನ್ನಿ.",
      when: { tradition: ["madhva"] },
      verses: [
        {
          text: "यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थम्\nमम जन्मराशेर्नामराशेर्वा सकाशादनिष्टस्थानस्थितग्रहसूचितदोषपरिहारद्वारा\nआदित्यादिनवग्रहान्तर्गतश्रीरामादिभगवद्रूपप्रीत्यर्थं नवग्रहहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥",
          meaning: {
            en: "Prompted by Sri Parashurama, the Lord of Harini, who dwells within Mukhyaprana, the beloved of Bharati, and is the inner ruler of the Yajnapurusha, and for his pleasure: for the removal of the faults shown by the grahas that stand in unfavourable places from my birth sign or name sign, and for the pleasure of the forms of the Lord, Rama and the others, within the nine grahas beginning with the Sun, I shall perform the rite called the Navagraha homa; as its part I shall prepare the sthandila and install the fire.",
            kn: "ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ: ನನ್ನ ಜನ್ಮರಾಶಿ ಅಥವಾ ನಾಮರಾಶಿಯಿಂದ ಅನಿಷ್ಟ ಸ್ಥಾನಗಳಲ್ಲಿರುವ ಗ್ರಹಗಳು ಸೂಚಿಸುವ ದೋಷಗಳ ಪರಿಹಾರದ ಮೂಲಕ, ಆದಿತ್ಯಾದಿ ನವಗ್ರಹಾಂತರ್ಗತ ಶ್ರೀರಾಮಾದಿ ಭಗವದ್ರೂಪಗಳ ಪ್ರೀತಿಗಾಗಿ ನವಗ್ರಹಹೋಮವೆಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ ಮಾಡಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Smarta)",
      note: "Remember Ganapati (शुक्लाम्बरधरं…), do achamana and pranayama, say the deshakala, and make this sankalpa with akshata and water. For another person, say अस्य यजमानस्य for मम.",
      noteKn: "ಗಣಪತಿಸ್ಮರಣೆ (“ಶುಕ್ಲಾಂಬರಧರಂ…”), ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ದೇಶಕಾಲ ಹೇಳಿ ಅಕ್ಷತೆ–ನೀರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ ಯಜಮಾನಸ್ಯ”.",
      when: { tradition: ["smarta"] },
      verses: [
        {
          text: "ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nमम जन्मराशेर्नामराशेर्वा सकाशादनिष्टस्थानस्थितानां ग्रहाणां सर्वारिष्टनिरसनद्वारा शुभफलप्राप्त्यर्थम्\nआदित्यादिनवग्रहदेवताप्रसादसिद्ध्यर्थं नवग्रहहोमं करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥",
          meaning: {
            en: "For the removal of all my accumulated sins and for the pleasure of the Supreme Lord; for the removal of every misfortune from the grahas that stand in unfavourable places from my birth sign or name sign, and for gaining their good fruit; for the grace of the nine graha deities beginning with the Sun, I shall perform the Navagraha homa; as its part I shall prepare and mark the sthandila and install the fire.",
            kn: "ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ; ನನ್ನ ಜನ್ಮರಾಶಿ ಅಥವಾ ನಾಮರಾಶಿಯಿಂದ ಅನಿಷ್ಟ ಸ್ಥಾನಗಳಲ್ಲಿರುವ ಗ್ರಹಗಳ ಎಲ್ಲ ಅರಿಷ್ಟಗಳ ನಿವಾರಣೆಯ ಮೂಲಕ ಶುಭಫಲ ಪ್ರಾಪ್ತಿಗಾಗಿ; ಆದಿತ್ಯಾದಿ ನವಗ್ರಹದೇವತೆಗಳ ಪ್ರಸಾದಸಿದ್ಧಿಗಾಗಿ ನವಗ್ರಹಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
    {
      title: "अग्निमुखम्",
      titleEn: "Agnimukha: do the purvanga (Homa: Common Procedure) up to the ajyabhaga",
      note: "Now do the purvanga as given in \"Homa: Common Procedure\", from the kalasha and punyahavachana up to the ajyabhaga: preparing the sthandila, installing and meditating on the fire, paristarana, purifying the ghee, the fuel, the aghara and ajyabhaga. Madhvas also do the samskaras of Agni and the Vaishnava offerings given there. Smartas then give the four vyahriti offerings. Come back here for the main offerings.",
      noteKn: "“ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿರುವಂತೆ ಕಲಶ–ಪುಣ್ಯಾಹವಾಚನದಿಂದ ಆಜ್ಯಭಾಗದವರೆಗೆ ಪೂರ್ವಾಂಗ ಮಾಡಿ: ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ, ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ–ಧ್ಯಾನ, ಪರಿಸ್ತರಣ, ಆಜ್ಯಸಂಸ್ಕಾರ, ಇಧ್ಮ, ಆಘಾರ, ಆಜ್ಯಭಾಗ. ಮಾಧ್ವರು ಅಲ್ಲಿರುವ ಅಗ್ನಿಸಂಸ್ಕಾರಗಳು ಮತ್ತು ವೈಷ್ಣವ ಆಹುತಿಗಳನ್ನೂ ಮಾಡುತ್ತಾರೆ. ಸ್ಮಾರ್ತರು ನಂತರ ನಾಲ್ಕು ವ್ಯಾಹೃತಿ ಆಹುತಿಗಳನ್ನು ನೀಡುತ್ತಾರೆ. ಪ್ರಧಾನ ಆಹುತಿಗಳಿಗಾಗಿ ಇಲ್ಲಿಗೆ ಹಿಂತಿರುಗಿ.",
      verses: [
        {
          text: "अग्निमुखम् — आज्यभागान्तम् ॥",
          meaning: {
            en: "The agnimukha, up to the ajyabhaga. (A heading: do these steps from \"Homa: Common Procedure\".)",
            kn: "ಅಗ್ನಿಮುಖ, ಆಜ್ಯಭಾಗದವರೆಗೆ. (ಶೀರ್ಷಿಕೆ: ಈ ಹಂತಗಳನ್ನು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಿಂದ ಮಾಡಿ.)",
          },
        },
      ],
    },
    {
      title: "ग्रहमण्डलम् आवाहनं च",
      titleEn: "The graha mandala and the invocation",
      note: "To the north-east of the fire (or on a separate platform) draw the graha mandala with five colours, or place nine heaps of the graha grains on a cloth, in the places below: the Sun in the middle in a red circle, Venus east (white pentagon), the Moon south-east (white square), Mars south (red triangle), Rahu south-west (black winnowing-fan), Saturn west (blue bow), Ketu north-west (variegated banner), Jupiter north (yellow oblong), Mercury north-east (green arrow) (Homa-Havana, as Matsya Purana 93.11-12). Place an image, a betel nut or a flower for each graha, with its adhidevata on its right and pratyadhidevata on its left. Invoke each graha with its own Vedic mantra (given in the homa below) and the vyahritis, then all together with the formula below. Note: Matsya Purana calls Ishvara, Uma and the others the adhidevatas and Agni, the Waters and the others the pratyadhidevatas; the Homa-Havana table and the Navagraha Sukta give the same deities with the names the other way round. The same deities are honoured either way.",
      noteKn: "ಅಗ್ನಿಯ ಈಶಾನ್ಯದಲ್ಲಿ (ಅಥವಾ ಬೇರೆ ಪೀಠದ ಮೇಲೆ) ಐದು ಬಣ್ಣಗಳಿಂದ ಗ್ರಹಮಂಡಲ ಬರೆಯಿರಿ, ಅಥವಾ ವಸ್ತ್ರದ ಮೇಲೆ ಗ್ರಹಧಾನ್ಯಗಳ ಒಂಬತ್ತು ರಾಶಿಗಳನ್ನಿಡಿ: ಮಧ್ಯದಲ್ಲಿ ಕೆಂಪು ವೃತ್ತದಲ್ಲಿ ಸೂರ್ಯ, ಪೂರ್ವದಲ್ಲಿ ಶುಕ್ರ (ಬಿಳಿ ಪಂಚಕೋನ), ಆಗ್ನೇಯದಲ್ಲಿ ಚಂದ್ರ (ಬಿಳಿ ಚತುಷ್ಕೋನ), ದಕ್ಷಿಣದಲ್ಲಿ ಕುಜ (ಕೆಂಪು ತ್ರಿಕೋನ), ನೈರುತ್ಯದಲ್ಲಿ ರಾಹು (ಕಪ್ಪು ಮೊರ), ಪಶ್ಚಿಮದಲ್ಲಿ ಶನಿ (ನೀಲಿ ಧನುಸ್ಸು), ವಾಯವ್ಯದಲ್ಲಿ ಕೇತು (ಚಿತ್ರವರ್ಣದ ಧ್ವಜ), ಉತ್ತರದಲ್ಲಿ ಗುರು (ಹಳದಿ ಆಯತ), ಈಶಾನ್ಯದಲ್ಲಿ ಬುಧ (ಹಸಿರು ಬಾಣ) (ಹೋಮ–ಹವನ; ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೧–೧೨). ಪ್ರತಿ ಗ್ರಹಕ್ಕೂ ಪ್ರತಿಮೆ, ಅಡಿಕೆ ಅಥವಾ ಹೂವನ್ನಿಟ್ಟು ಬಲಕ್ಕೆ ಅಧಿದೇವತೆ, ಎಡಕ್ಕೆ ಪ್ರತ್ಯಧಿದೇವತೆಯನ್ನು ಇಡಿ. ಪ್ರತಿ ಗ್ರಹವನ್ನು ಅದರ ವೈದಿಕ ಮಂತ್ರ (ಕೆಳಗಿನ ಹೋಮದಲ್ಲಿದೆ) ಮತ್ತು ವ್ಯಾಹೃತಿಗಳಿಂದ ಆವಾಹಿಸಿ, ನಂತರ ಎಲ್ಲರನ್ನೂ ಕೆಳಗಿನ ವಾಕ್ಯದಿಂದ. ಸೂಚನೆ: ಮತ್ಸ್ಯಪುರಾಣ ಈಶ್ವರ–ಉಮಾದಿಗಳನ್ನು ಅಧಿದೇವತೆಗಳೆಂದೂ ಅಗ್ನಿ–ಜಲಾದಿಗಳನ್ನು ಪ್ರತ್ಯಧಿದೇವತೆಗಳೆಂದೂ ಹೇಳುತ್ತದೆ; ಹೋಮ–ಹವನದ ಕೋಷ್ಟಕ ಮತ್ತು ನವಗ್ರಹಸೂಕ್ತ ಅದೇ ದೇವತೆಗಳನ್ನು ವಿರುದ್ಧ ಹೆಸರುಗಳಿಂದ ಕೊಡುತ್ತವೆ. ಹೇಗಾದರೂ ಪೂಜಿಸುವುದು ಅದೇ ದೇವತೆಗಳನ್ನು.",
      verses: [
        {
          text: "मध्ये तु भास्करं विद्याल्लोहितं दक्षिणेन तु ।\nउत्तरेण गुरुं विद्याद्बुधं पूर्वोत्तरेण तु ॥",
          meaning: {
            en: "Know the Sun to be in the middle, Mars to the south, Jupiter to the north and Mercury to the north-east. (Matsya Purana 93.11)",
            kn: "ಮಧ್ಯದಲ್ಲಿ ಸೂರ್ಯ, ದಕ್ಷಿಣದಲ್ಲಿ ಕುಜ, ಉತ್ತರದಲ್ಲಿ ಗುರು, ಈಶಾನ್ಯದಲ್ಲಿ ಬುಧ ಎಂದು ತಿಳಿಯಬೇಕು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೧)",
          },
        },
        {
          text: "पूर्वेण भार्गवं विद्यात्सोमं दक्षिणपूर्वके ।\nपश्चिमेन शनिं विद्याद्राहुं पश्चिमदक्षिणे ।\nपश्चिमोत्तरतः केतुं स्थापयेच्छुक्लतण्डुलैः ॥",
          meaning: {
            en: "Venus to the east, the Moon to the south-east, Saturn to the west, Rahu to the south-west and Ketu to the north-west: place them with white rice. (Matsya Purana 93.12)",
            kn: "ಪೂರ್ವದಲ್ಲಿ ಶುಕ್ರ, ಆಗ್ನೇಯದಲ್ಲಿ ಚಂದ್ರ, ಪಶ್ಚಿಮದಲ್ಲಿ ಶನಿ, ನೈರುತ್ಯದಲ್ಲಿ ರಾಹು, ವಾಯವ್ಯದಲ್ಲಿ ಕೇತು — ಇವರನ್ನು ಬಿಳಿ ಅಕ್ಕಿಯಿಂದ ಸ್ಥಾಪಿಸಬೇಕು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೨)",
          },
        },
        {
          text: "भास्करस्येश्वरं विद्यादुमां च शशिनस्तथा ।\nस्कन्दमङ्गारकस्यापि बुधस्य च तथा हरिम् ॥",
          meaning: {
            en: "Know Ishvara (Shiva) as the adhidevata of the Sun, Uma of the Moon, Skanda of Mars and Hari of Mercury. (Matsya Purana 93.13)",
            kn: "ಸೂರ್ಯನಿಗೆ ಈಶ್ವರ, ಚಂದ್ರನಿಗೆ ಉಮಾ, ಕುಜನಿಗೆ ಸ್ಕಂದ, ಬುಧನಿಗೆ ಹರಿ ಅಧಿದೇವತೆಗಳೆಂದು ತಿಳಿಯಬೇಕು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೩)",
          },
        },
        {
          text: "ब्रह्माणं च गुरोर्विद्याच्छुक्रस्यापि शचीपतिम् ।\nशनैश्चरस्य तु यमं राहोः कालं तथैव च ॥",
          meaning: {
            en: "Brahma for Jupiter, Indra, the lord of Shachi, for Venus, Yama for Saturn and Kala (Time) for Rahu. (Matsya Purana 93.14)",
            kn: "ಗುರುವಿಗೆ ಬ್ರಹ್ಮ, ಶುಕ್ರನಿಗೆ ಶಚೀಪತಿ ಇಂದ್ರ, ಶನಿಗೆ ಯಮ, ರಾಹುವಿಗೆ ಕಾಲ. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೪)",
          },
        },
        {
          text: "केतोर्वै चित्रगुप्तं च सर्वेषामधिदेवताः ।\nअग्निरापः क्षितिर्विष्णुरिन्द्र ऐन्द्री च देवताः ॥",
          meaning: {
            en: "And Chitragupta for Ketu: these are the adhidevatas of them all. Agni, the Waters, the Earth, Vishnu, Indra and Aindri (Indrani)… (Matsya Purana 93.15)",
            kn: "ಕೇತುವಿಗೆ ಚಿತ್ರಗುಪ್ತ — ಇವರು ಎಲ್ಲರ ಅಧಿದೇವತೆಗಳು. ಅಗ್ನಿ, ಜಲ, ಭೂಮಿ, ವಿಷ್ಣು, ಇಂದ್ರ, ಐಂದ್ರೀ (ಇಂದ್ರಾಣಿ)… (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೫)",
          },
        },
        {
          text: "प्रजापतिश्च सर्पाश्च ब्रह्मा प्रत्यधिदेवताः ।\nविनायकं तथा दुर्गां वायुराकाशमेव च ।\nआवाहयेद्व्याहृतिभिस्तथैवाश्विकुमारकौ ॥",
          meaning: {
            en: "…Prajapati, the Serpents and Brahma are the pratyadhidevatas. Vinayaka, Durga, Vayu, Akasha and the two Ashvins too should be invoked with the vyahritis. (Matsya Purana 93.16)",
            kn: "…ಪ್ರಜಾಪತಿ, ಸರ್ಪಗಳು, ಬ್ರಹ್ಮ — ಇವರು ಪ್ರತ್ಯಧಿದೇವತೆಗಳು. ವಿನಾಯಕ, ದುರ್ಗಾ, ವಾಯು, ಆಕಾಶ, ಅಶ್ವಿನೀಕುಮಾರರನ್ನೂ ವ್ಯಾಹೃತಿಗಳಿಂದ ಆವಾಹಿಸಬೇಕು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೬)",
          },
        },
        {
          text: "ॐ भूर्भुवः स्वः । अधिदेवताप्रत्यधिदेवतासहितान् आदित्यादिनवग्रहान्\nअस्मिन्मण्डले आवाहयामि स्थापयामि पूजयामि ॥",
          meaning: {
            en: "Om, earth, sky, heaven: I invoke into this mandala the nine grahas beginning with the Sun, together with their adhidevatas and pratyadhidevatas; I install them and worship them.",
            kn: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳ ಸಹಿತ ಆದಿತ್ಯಾದಿ ನವಗ್ರಹಗಳನ್ನು ಈ ಮಂಡಲದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "ग्रहध्यानं पूजा च",
      titleEn: "Dhyana and puja of the grahas",
      note: "Meditate on each graha with its verse from Vyasa's Navagraha Stotra and offer the upacharas (gandha, akshata, the graha's flower, dhupa, dipa, its food: see the note of each graha below) with the salutation that follows. Clothes and flowers in the graha's colour (Matsya Purana 93.17-18): red for the Sun and Mars, white for the Moon and Venus, yellow for Mercury and Jupiter, black for Saturn and Rahu, smoke-grey for Ketu. Madhvas remember in each graha its form of the Lord (see the homa below).",
      noteKn: "ವ್ಯಾಸರ ನವಗ್ರಹಸ್ತೋತ್ರದ ಶ್ಲೋಕದಿಂದ ಪ್ರತಿ ಗ್ರಹವನ್ನು ಧ್ಯಾನಿಸಿ, ಕೆಳಗಿನ ನಮಸ್ಕಾರವಾಕ್ಯದೊಡನೆ ಉಪಚಾರಗಳನ್ನು (ಗಂಧ, ಅಕ್ಷತೆ, ಗ್ರಹಪ್ರಿಯ ಹೂವು, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ — ಪ್ರತಿ ಗ್ರಹದ ಸೂಚನೆ ನೋಡಿ) ಅರ್ಪಿಸಿ. ಗ್ರಹದ ಬಣ್ಣದ ವಸ್ತ್ರ–ಹೂವು (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೭–೧೮): ಸೂರ್ಯ–ಕುಜರಿಗೆ ಕೆಂಪು, ಚಂದ್ರ–ಶುಕ್ರರಿಗೆ ಬಿಳಿ, ಬುಧ–ಗುರುಗಳಿಗೆ ಹಳದಿ, ಶನಿ–ರಾಹುಗಳಿಗೆ ಕಪ್ಪು, ಕೇತುವಿಗೆ ಧೂಮ್ರ. ಮಾಧ್ವರು ಪ್ರತಿ ಗ್ರಹದಲ್ಲಿ ಅದರ ಭಗವದ್ರೂಪವನ್ನು ಸ್ಮರಿಸುತ್ತಾರೆ (ಕೆಳಗಿನ ಹೋಮ ನೋಡಿ).",
      verses: [
        {
          text: "जपाकुसुमसङ्काशं काश्यपेयं महाद्युतिम् ।\nतमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम् ॥",
          meaning: {
            en: "I bow to Divakara, the Sun: red like the japa (hibiscus) flower, son of Kashyapa, of great brilliance, the enemy of darkness and destroyer of all sins.",
            kn: "ದಾಸವಾಳದ ಹೂವಿನಂತೆ ಕೆಂಪಾದ, ಕಶ್ಯಪರ ಮಗನಾದ, ಮಹಾತೇಜಸ್ವಿಯಾದ, ಕತ್ತಲೆಯ ಶತ್ರುವೂ ಸಕಲ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವವನೂ ಆದ ದಿವಾಕರನಿಗೆ (ಸೂರ್ಯನಿಗೆ) ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "दधिशङ्खतुषाराभं क्षीरोदार्णवसम्भवम् ।\nनमामि शशिनं सोमं शम्भोर्मुकुटभूषणम् ॥",
          meaning: {
            en: "I salute Soma, the Moon: white as curd, the conch and snow, born from the ocean of milk, the ornament on the crown of Shambhu (Shiva).",
            kn: "ಮೊಸರು, ಶಂಖ, ಹಿಮಗಳಂತೆ ಬೆಳ್ಳಗಿರುವ, ಕ್ಷೀರಸಮುದ್ರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಶಂಭುವಿನ (ಶಿವನ) ಕಿರೀಟಕ್ಕೆ ಆಭರಣವಾದ ಚಂದ್ರನಿಗೆ (ಸೋಮನಿಗೆ) ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "धरणीगर्भसम्भूतं विद्युत्कान्तिसमप्रभम् ।\nकुमारं शक्तिहस्तं तं मङ्गलं प्रणमाम्यहम् ॥",
          meaning: {
            en: "I bow to Mangala (Mars): born of the womb of the Earth, shining like a flash of lightning, ever youthful, holding a spear in his hand.",
            kn: "ಭೂದೇವಿಯ ಗರ್ಭದಿಂದ ಹುಟ್ಟಿದ, ಮಿಂಚಿನ ಕಾಂತಿಯಂತೆ ಹೊಳೆಯುವ, ಕುಮಾರನಾದ, ಕೈಯಲ್ಲಿ ಶಕ್ತಿ ಆಯುಧವನ್ನು ಹಿಡಿದ ಮಂಗಳನಿಗೆ (ಕುಜನಿಗೆ) ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "प्रियङ्गुकलिकाश्यामं रूपेणाप्रतिमं बुधम् ।\nसौम्यं सौम्यगुणोपेतं तं बुधं प्रणमाम्यहम् ॥",
          meaning: {
            en: "I bow to Budha (Mercury): dark green like the bud of the priyangu creeper, of matchless form, gentle, son of Soma, and endowed with gentle qualities.",
            kn: "ಪ್ರಿಯಂಗು ಮೊಗ್ಗಿನಂತೆ ಹಸಿರುಗಪ್ಪಾದ, ರೂಪದಲ್ಲಿ ಸಾಟಿಯಿಲ್ಲದ, ಸೌಮ್ಯನಾದ (ಸೋಮನ ಮಗನಾದ), ಸೌಮ್ಯಗುಣಗಳಿಂದ ಕೂಡಿದ ಬುಧನಿಗೆ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "देवानां च ऋषीणां च गुरुं काञ्चनसन्निभम् ।\nबुद्धिभूतं त्रिलोकेशं तं नमामि बृहस्पतिम् ॥",
          meaning: {
            en: "I salute Brihaspati (Jupiter): teacher of the gods and the sages, golden in colour, wisdom itself, a lord in the three worlds.",
            kn: "ದೇವತೆಗಳಿಗೂ ಋಷಿಗಳಿಗೂ ಗುರುವಾದ, ಬಂಗಾರದಂತೆ ಹೊಳೆಯುವ, ಬುದ್ಧಿಸ್ವರೂಪನಾದ, ಮೂರು ಲೋಕಗಳ ಒಡೆಯನಾದ ಬೃಹಸ್ಪತಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "हिमकुन्दमृणालाभं दैत्यानां परमं गुरुम् ।\nसर्वशास्त्रप्रवक्तारं भार्गवं प्रणमाम्यहम् ॥",
          meaning: {
            en: "I bow to Bhargava, Shukra (Venus): white as snow, the kunda jasmine and the lotus stalk, the great teacher of the daityas, expounder of all the shastras.",
            kn: "ಹಿಮ, ಕುಂದಪುಷ್ಪ, ತಾವರೆಯ ದಂಟುಗಳಂತೆ ಬೆಳ್ಳಗಿರುವ, ದೈತ್ಯರ ಪರಮ ಗುರುವಾದ, ಎಲ್ಲ ಶಾಸ್ತ್ರಗಳನ್ನು ಉಪದೇಶಿಸುವ ಭಾರ್ಗವನಿಗೆ (ಶುಕ್ರನಿಗೆ) ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम् ।\nछायामार्तण्डसम्भूतं तं नमामि शनैश्चरम् ॥",
          meaning: {
            en: "I salute Shanaishchara, Saturn: dark like blue collyrium, son of the Sun, elder brother of Yama, born of Chhaya and Martanda (the Sun).",
            kn: "ಕಪ್ಪು ಕಾಡಿಗೆಯಂತೆ ಕಾಣುವ, ಸೂರ್ಯನ ಮಗನಾದ, ಯಮನ ಅಣ್ಣನಾದ, ಛಾಯಾದೇವಿ ಮತ್ತು ಮಾರ್ತಂಡರಿಂದ (ಸೂರ್ಯನಿಂದ) ಹುಟ್ಟಿದ ಶನೈಶ್ಚರನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "अर्धकायं महावीर्यं चन्द्रादित्यविमर्दनम् ।\nसिंहिकागर्भसम्भूतं तं राहुं प्रणमाम्यहम् ॥",
          meaning: {
            en: "I bow to Rahu: who has half a body, of great might, the tormentor of the Moon and the Sun (at eclipses), born of the womb of Simhika.",
            kn: "ಅರ್ಧ ದೇಹವುಳ್ಳ, ಮಹಾಪರಾಕ್ರಮಿಯಾದ, (ಗ್ರಹಣಗಳಲ್ಲಿ) ಚಂದ್ರಸೂರ್ಯರನ್ನು ಪೀಡಿಸುವ, ಸಿಂಹಿಕೆಯ ಗರ್ಭದಿಂದ ಹುಟ್ಟಿದ ರಾಹುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "पलाशपुष्पसङ्काशं तारकाग्रहमस्तकम् ।\nरौद्रं रौद्रात्मकं घोरं तं केतुं प्रणमाम्यहम् ॥",
          meaning: {
            en: "I bow to Ketu: red like the palasha flower, the head among the stars and planets, fierce, of fierce nature and terrible.",
            kn: "ಮುತ್ತುಗದ ಹೂವಿನಂತೆ ಕೆಂಪಾದ, ನಕ್ಷತ್ರ ಗ್ರಹಗಳಿಗೆ ಶಿರಸ್ಸಿನಂತಿರುವ, ರೌದ್ರನಾದ, ರೌದ್ರಸ್ವಭಾವದ, ಭಯಂಕರನಾದ ಕೇತುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "अधिदेवताप्रत्यधिदेवतासहितेभ्य आदित्यादिनवग्रहदेवताभ्यो नमः ॥",
          meaning: {
            en: "Salutations to the nine graha deities beginning with the Sun, together with their adhidevatas and pratyadhidevatas. (Said with each upachara: पाद्यं समर्पयामि, अर्घ्यं समर्पयामि and so on.)",
            kn: "ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳ ಸಹಿತ ಆದಿತ್ಯಾದಿ ನವಗ್ರಹದೇವತೆಗಳಿಗೆ ನಮಸ್ಕಾರ. (ಪ್ರತಿ ಉಪಚಾರದೊಡನೆ: “ಪಾದ್ಯಂ ಸಮರ್ಪಯಾಮಿ”, “ಅರ್ಘ್ಯಂ ಸಮರ್ಪಯಾಮಿ” ಇತ್ಯಾದಿ.)",
          },
        },
      ],
    },
    {
      title: "अथ ग्रहहोमः",
      titleEn: "The graha homa: how it is offered",
      note: "Now the main homa. Offer to the nine grahas in the order Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu, each with its samidh, charu and ghee and its count, then to its adhidevata and pratyadhidevata; the sections that follow give each graha's mantras with svaha and the tyaga. While the homa goes on, touch the kalasha or have it touched so that its water is charged for the abhisheka at the end.",
      noteKn: "ಈಗ ಪ್ರಧಾನ ಹೋಮ. ಸೂರ್ಯ, ಚಂದ್ರ, ಕುಜ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು ಕ್ರಮದಲ್ಲಿ ಪ್ರತಿ ಗ್ರಹಕ್ಕೂ ಅದರ ಸಮಿಧೆ, ಚರು, ಆಜ್ಯಗಳಿಂದ ಸಂಖ್ಯೆಯಂತೆ, ನಂತರ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಹೋಮಿಸಿ; ಮುಂದಿನ ಭಾಗಗಳಲ್ಲಿ ಪ್ರತಿ ಗ್ರಹದ ಮಂತ್ರಗಳು ಸ್ವಾಹಾ–ತ್ಯಾಗಗಳೊಡನೆ ಇವೆ. ಹೋಮ ನಡೆಯುವಾಗ ಕಲಶವನ್ನು ಮುಟ್ಟಿಕೊಂಡಿರಿ, ಕೊನೆಯ ಅಭಿಷೇಕಕ್ಕೆ ಅದರ ಜಲ ಅಭಿಮಂತ್ರಿತವಾಗುತ್ತದೆ.",
      verses: [
        {
          text: "अर्कः पलाशखदिरावपामार्गोऽथ पिप्पलः ।\nऔदुम्बरः शमी दूर्वा कुशाश्च समिधः क्रमात् ॥",
          meaning: {
            en: "Arka, palasha and khadira, apamarga, then pippala, udumbara, shami, durva and kusha are the samidhs, in order. (Matsya Purana 93.27)",
            kn: "ಎಕ್ಕ, ಪಲಾಶ, ಖದಿರ, ಉತ್ತರಾಣೆ, ಅಶ್ವತ್ಥ, ಅತ್ತಿ, ಶಮೀ, ಗರಿಕೆ, ಕುಶ — ಇವು ಕ್ರಮವಾಗಿ ಸಮಿಧೆಗಳು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೭)",
          },
        },
        {
          text: "एकैकस्याष्टकशतमष्टविंशतिरेव वा ।\nहोतव्या मधुसर्पिर्भ्यां दध्ना चैव समन्विताः ॥",
          meaning: {
            en: "For each graha one hundred and eight, or twenty-eight, are to be offered, joined with honey, ghee and curd. (Matsya Purana 93.28)",
            kn: "ಪ್ರತಿ ಗ್ರಹಕ್ಕೆ ನೂರೆಂಟು ಅಥವಾ ಇಪ್ಪತ್ತೆಂಟು ಸಮಿಧೆಗಳನ್ನು ಜೇನು, ತುಪ್ಪ, ಮೊಸರು ಸೇರಿಸಿ ಹೋಮಿಸಬೇಕು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮)",
          },
        },
      ],
    },
    {
      title: "सूर्यः",
      titleEn: "The Sun (Surya)",
      note: "Offer to The Sun: arka (ekka) samidhs; food: jaggery-rice. With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Rama, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ಸೂರ್ಯಗೆ: ಎಕ್ಕದ ಸಮಿಧೆ; ನೈವೇದ್ಯ: ಗುಡಾನ್ನ. ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ರಾಮನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "आ कृष्णेन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवनानि पश्यन् ॥\nस्वाहा । सूर्यायेदं न मम ॥",
          meaning: {
            en: "Moving through the dark space, calling to rest the immortal and the mortal, the god Savitri comes in his golden chariot, looking upon all the worlds. (Rigveda 1.35.2; the Sun) Svaha; this is for the Sun, not for me.",
            kn: "ಕತ್ತಲೆಯ ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ಅಮರರನ್ನೂ ಮರ್ತ್ಯರನ್ನೂ ತಮ್ಮ ತಮ್ಮ ಸ್ಥಾನದಲ್ಲಿ ನೆಲೆಗೊಳಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಎಲ್ಲ ಲೋಕಗಳನ್ನು ನೋಡುತ್ತಾ ಚಿನ್ನದ ರಥದಲ್ಲಿ ಬರುತ್ತಾನೆ. (ಋಗ್ವೇದ ೧.೩೫.೨; ಸೂರ್ಯ) ಸ್ವಾಹಾ; ಇದು ಸೂರ್ಯನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["rigveda"] },
        },
        {
          text: "आ सत्येन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवना विपश्यन् ॥\nस्वाहा । सूर्यायेदं न मम ॥",
          meaning: {
            en: "Coming by the true path through space, calling to rest the immortal and the mortal, the god Savitri comes in his golden chariot, beholding the worlds. (Taittiriya Samhita 3.4.11; the Sun) Svaha; this is for the Sun, not for me.",
            kn: "ಸತ್ಯಮಾರ್ಗದಲ್ಲಿ ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ಅಮರರನ್ನೂ ಮರ್ತ್ಯರನ್ನೂ ನೆಲೆಗೊಳಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಲೋಕಗಳನ್ನು ನೋಡುತ್ತಾ ಚಿನ್ನದ ರಥದಲ್ಲಿ ಬರುತ್ತಾನೆ. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೧೧; ಸೂರ್ಯ) ಸ್ವಾಹಾ; ಇದು ಸೂರ್ಯನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["yajurveda"] },
        },
        {
          text: "अग्निं दूतं वृणीमहे होतारं विश्ववेदसम् ।\nअस्य यज्ञस्य सुक्रतुम् ॥\nस्वाहा । अग्नय इदं न मम ॥",
          meaning: {
            en: "We choose Agni as our messenger, the priest who knows all, the wise performer of this sacrifice. (Rigveda 1.12.1; Agni, with the Sun) Svaha; this is for Agni, not for me.",
            kn: "ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಹೋತೃವೂ ಈ ಯಜ್ಞವನ್ನು ಚೆನ್ನಾಗಿ ನಡೆಸುವವನೂ ಆದ ಅಗ್ನಿಯನ್ನು ದೂತನನ್ನಾಗಿ ಆರಿಸುತ್ತೇವೆ. (ಋಗ್ವೇದ ೧.೧೨.೧; ಸೂರ್ಯನೊಡನೆ ಅಗ್ನಿ) ಸ್ವಾಹಾ; ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "येषामीशे पशुपतिः पशूनां चतुष्पदामुत च द्विपदाम् ।\nनिष्क्रीतोऽयं यज्ञियं भागमेतु रायस्पोषा यजमानस्य सन्तु ॥\nस्वाहा । रुद्रायेदं न मम ॥",
          meaning: {
            en: "May the offering that Pashupati, lord of the beasts, both four-footed and two-footed, has been ransomed with, come to its sacrificial share; may abundance of wealth be the yajamana's. (Taittiriya Samhita 3.1.4; Rudra, with the Sun) Svaha; this is for Rudra, not for me.",
            kn: "ನಾಲ್ಕು ಕಾಲಿನ, ಎರಡು ಕಾಲಿನ ಪಶುಗಳ ಒಡೆಯನಾದ ಪಶುಪತಿಗೆ ಸಲ್ಲುವ ಈ ಯಜ್ಞಭಾಗ ಅವನನ್ನು ಸೇರಲಿ; ಯಜಮಾನನಿಗೆ ಸಂಪತ್ಸಮೃದ್ಧಿಯಾಗಲಿ. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೧.೪; ಸೂರ್ಯನೊಡನೆ ರುದ್ರ) ಸ್ವಾಹಾ; ಇದು ರುದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "सोमः",
      titleEn: "The Moon (Soma)",
      note: "Offer to The Moon: palasha samidhs; food: payasa with ghee. With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Krishna, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ಚಂದ್ರಗೆ: ಪಲಾಶ ಸಮಿಧೆ; ನೈವೇದ್ಯ: ಘೃತಪಾಯಸ. ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ಕೃಷ್ಣನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "आप्यायस्व समेतु ते विश्वतः सोम वृष्ण्यम् ।\nभवा वाजस्य सङ्गथे ॥\nस्वाहा । सोमायेदं न मम ॥",
          meaning: {
            en: "Swell, O Soma; let strength gather in you from every side; be there where the prize is won. (Rigveda 1.91.16; the Moon) Svaha; this is for the Moon, not for me.",
            kn: "ಓ ಸೋಮನೇ, ವೃದ್ಧಿಸು; ಎಲ್ಲ ಕಡೆಯಿಂದ ನಿನ್ನಲ್ಲಿ ಬಲ ಸೇರಲಿ; ಅನ್ನ–ಬಲಗಳ ಸಂಗಮದಲ್ಲಿ ನೀನಿರು. (ಋಗ್ವೇದ ೧.೯೧.೧೬; ಚಂದ್ರ) ಸ್ವಾಹಾ; ಇದು ಚಂದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "अप्सु मे सोमो अब्रवीदन्तर्विश्वानि भेषजा ।\nअग्निं च विश्वशम्भुवमापश्च विश्वभेषजीः ॥\nस्वाहा । अद्भ्य इदं न मम ॥",
          meaning: {
            en: "Soma told me that all remedies are in the waters, and Agni who blesses all, and the waters that heal all. (Rigveda 1.23.20; the Waters, with the Moon) Svaha; this is for the Waters, not for me.",
            kn: "ಜಲಗಳಲ್ಲಿ ಎಲ್ಲ ಔಷಧಗಳೂ, ಎಲ್ಲರಿಗೂ ಮಂಗಳಕರನಾದ ಅಗ್ನಿಯೂ, ಸರ್ವರೋಗಹರ ಜಲಗಳೂ ಇವೆ ಎಂದು ಸೋಮನು ನನಗೆ ಹೇಳಿದನು. (ಋಗ್ವೇದ ೧.೨೩.೨೦; ಚಂದ್ರನೊಡನೆ ಜಲದೇವತೆ) ಸ್ವಾಹಾ; ಇದು ಜಲದೇವತೆಗಳಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "गौरी मिमाय सलिलानि तक्षत्येकपदी द्विपदी सा चतुष्पदी ।\nअष्टापदी नवपदी बभूवुषी सहस्राक्षरा परमे व्योमन् ॥\nस्वाहा । गौर्या इदं न मम ॥",
          meaning: {
            en: "Gauri lowed, shaping the waters; she became one-footed, two-footed, four-footed, eight-footed, nine-footed, thousand-syllabled in the highest heaven. (Taittiriya Brahmana 2.4.6, Rigveda 1.164.41; Gauri, with the Moon) Svaha; this is for Gauri, not for me.",
            kn: "ಗೌರಿಯು ಜಲಗಳನ್ನು ರೂಪಿಸುತ್ತಾ ನಾದಮಾಡಿದಳು; ಅವಳು ಏಕಪದಿ, ದ್ವಿಪದಿ, ಚತುಷ್ಪದಿ, ಅಷ್ಟಾಪದಿ, ನವಪದಿಯಾಗಿ ಪರಮಾಕಾಶದಲ್ಲಿ ಸಹಸ್ರಾಕ್ಷರಳಾದಳು. (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೨.೪.೬, ಋಗ್ವೇದ ೧.೧೬೪.೪೧; ಚಂದ್ರನೊಡನೆ ಗೌರಿ) ಸ್ವಾಹಾ; ಇದು ಗೌರಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "अङ्गारकः",
      titleEn: "Mars (Angaraka)",
      note: "Offer to Mars: khadira samidhs; food: samyava (wheat cooked with ghee and milk). With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Narasimha, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ಅಂಗಾರಕಗೆ: ಖದಿರ ಸಮಿಧೆ; ನೈವೇದ್ಯ: ಸಂಯಾವ (ತುಪ್ಪ–ಹಾಲಿನಲ್ಲಿ ಬೇಯಿಸಿದ ಗೋಧಿ). ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ನರಸಿಂಹನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "अग्निर्मूर्धा दिवः ककुत्पतिः पृथिव्या अयम् ।\nअपां रेतांसि जिन्वति ॥\nस्वाहा । अङ्गारकायेदं न मम ॥",
          meaning: {
            en: "Agni is the head and peak of heaven, lord of the earth; he quickens the seed of the waters. (Rigveda 8.44.16; Mars) Svaha; this is for Mars, not for me.",
            kn: "ಅಗ್ನಿಯು ದ್ಯುಲೋಕದ ಶಿರ ಮತ್ತು ಶಿಖರ, ಭೂಮಿಯ ಒಡೆಯ; ಅವನು ಜಲಗಳ ರೇತಸ್ಸನ್ನು ಜೀವಂತಗೊಳಿಸುತ್ತಾನೆ. (ಋಗ್ವೇದ ೮.೪೪.೧೬; ಕುಜ) ಸ್ವಾಹಾ; ಇದು ಅಂಗಾರಕನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "स्योना पृथिवि भवानृक्षरा निवेशनी ।\nयच्छा नः शर्म सप्रथाः ॥\nस्वाहा । पृथिव्या इदं न मम ॥",
          meaning: {
            en: "O Earth, be kind to us, free of thorns, a resting place; give us wide shelter. (Rigveda 1.22.15; the Earth, with Mars) Svaha; this is for the Earth, not for me.",
            kn: "ಓ ಭೂಮಿಯೇ, ನಮಗೆ ಸುಖಕರಳಾಗು, ಮುಳ್ಳಿಲ್ಲದವಳೂ ನೆಲೆಯಾಗುವವಳೂ ಆಗು; ನಮಗೆ ವಿಶಾಲವಾದ ಆಶ್ರಯವನ್ನು ಕೊಡು. (ಋಗ್ವೇದ ೧.೨೨.೧೫; ಕುಜನೊಡನೆ ಭೂಮಿ) ಸ್ವಾಹಾ; ಇದು ಭೂದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "क्षेत्रस्य पतिना वयं हितेनेव जयामसि ।\nगामश्वं पोषयित्न्वा स नो मृळातीदृशे ॥\nस्वाहा । क्षेत्रपतय इदं न मम ॥",
          meaning: {
            en: "With the Lord of the field as our friend we win as with a kinsman; may he who nourishes our cows and horses be gracious to us in this way. (Rigveda 4.57.1; Kshetrapala, with Mars) Svaha; this is for the Lord of the field (Kshetrapala), not for me.",
            kn: "ಕ್ಷೇತ್ರಪತಿಯನ್ನು ಹಿತೈಷಿಯಾಗಿ ಹೊಂದಿ ನಾವು ಜಯಿಸುತ್ತೇವೆ; ನಮ್ಮ ಗೋವು–ಕುದುರೆಗಳನ್ನು ಪೋಷಿಸುವ ಅವನು ನಮಗೆ ಹೀಗೆಯೇ ಸುಖ ನೀಡಲಿ. (ಋಗ್ವೇದ ೪.೫೭.೧; ಕುಜನೊಡನೆ ಕ್ಷೇತ್ರಪಾಲ) ಸ್ವಾಹಾ; ಇದು ಕ್ಷೇತ್ರಪತಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "बुधः",
      titleEn: "Mercury (Budha)",
      note: "Offer to Mercury: apamarga (uttarani) samidhs; food: milk-rice of shashtika rice. With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Buddha, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ಬುಧಗೆ: ಉತ್ತರಾಣೆ ಸಮಿಧೆ; ನೈವೇದ್ಯ: ಷಷ್ಟಿಕಾನ್ನದ ಕ್ಷೀರಾನ್ನ. ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ಬುದ್ಧನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "उद्बुध्यस्वाग्ने प्रति जागृह्येनमिष्टापूर्ते सं सृजेथामयं च ।\nपुनः कृण्वंस्त्वा पितरं युवानमन्वातांसीत्त्वयि तन्तुमेतम् ॥\nस्वाहा । बुधायेदं न मम ॥",
          meaning: {
            en: "Awake, O Agni, and watch over him; may you and he together bring about his offerings and good works; making you young again as a father, he has spread this thread in you. (Taittiriya Samhita 4.7.13; Mercury) Svaha; this is for Mercury, not for me.",
            kn: "ಅಗ್ನಿಯೇ, ಎದ್ದೇಳು, ಇವನನ್ನು ಕಾಪಾಡು; ನೀನೂ ಇವನೂ ಸೇರಿ ಇಷ್ಟಾಪೂರ್ತ ಕರ್ಮಗಳನ್ನು ಸಿದ್ಧಿಸಿರಿ; ನಿನ್ನನ್ನು ಮತ್ತೆ ಯುವ ತಂದೆಯಂತೆ ಮಾಡುತ್ತಾ ಇವನು ಈ ತಂತುವನ್ನು ನಿನ್ನಲ್ಲಿ ಹರಡಿದ್ದಾನೆ. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೪.೭.೧೩; ಬುಧ) ಸ್ವಾಹಾ; ಇದು ಬುಧನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "इदं विष्णुर्वि चक्रमे त्रेधा नि दधे पदम् ।\nसमूळ्हमस्य पांसुरे ॥\nस्वाहा । विष्णव इदं न मम ॥",
          meaning: {
            en: "Vishnu strode over this; three times he set down his foot; the world is gathered in his dusty footprint. (Rigveda 1.22.17; Vishnu, with Mercury) Svaha; this is for Vishnu, not for me.",
            kn: "ವಿಷ್ಣುವು ಇದನ್ನೆಲ್ಲ ಅಳೆದನು; ಮೂರು ಬಾರಿ ಹೆಜ್ಜೆಯಿಟ್ಟನು; ಅವನ ಧೂಳಿನ ಹೆಜ್ಜೆಯಲ್ಲಿ ಜಗತ್ತು ಅಡಗಿದೆ. (ಋಗ್ವೇದ ೧.೨೨.೧೭; ಬುಧನೊಡನೆ ವಿಷ್ಣು) ಸ್ವಾಹಾ; ಇದು ವಿಷ್ಣುವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "विष्णो रराटमसि विष्णोः पृष्ठमसि विष्णोः श्नप्त्रे स्थो विष्णोः स्यूरसि ।\nविष्णोर्ध्रुवमसि वैष्णवमसि विष्णवे त्वा ॥\nस्वाहा । विष्णव इदं न मम ॥",
          meaning: {
            en: "You are the forehead of Vishnu, the back of Vishnu, the two corners of Vishnu's mouth, the thread of Vishnu, the firm seat of Vishnu; you belong to Vishnu; you for Vishnu. (Taittiriya Samhita 1.2.13; Vishnu as pratyadhidevata, with Mercury) Svaha; this is for Vishnu, not for me.",
            kn: "ನೀನು ವಿಷ್ಣುವಿನ ಹಣೆ, ವಿಷ್ಣುವಿನ ಬೆನ್ನು, ವಿಷ್ಣುವಿನ ಬಾಯಿಯ ಎರಡು ಅಂಚುಗಳು, ವಿಷ್ಣುವಿನ ಸೂತ್ರ, ವಿಷ್ಣುವಿನ ಸ್ಥಿರ ಸ್ಥಾನ; ನೀನು ವಿಷ್ಣುವಿಗೆ ಸೇರಿದ್ದೀಯೆ; ನಿನ್ನನ್ನು ವಿಷ್ಣುವಿಗಾಗಿ. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೧.೨.೧೩; ಬುಧನೊಡನೆ ಪ್ರತ್ಯಧಿದೇವತೆ ವಿಷ್ಣು) ಸ್ವಾಹಾ; ಇದು ವಿಷ್ಣುವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "बृहस्पतिः",
      titleEn: "Jupiter (Brihaspati)",
      note: "Offer to Jupiter: ashvattha samidhs; food: curd-rice. With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Vamana, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ಬೃಹಸ್ಪತಿಗೆ: ಅಶ್ವತ್ಥ ಸಮಿಧೆ; ನೈವೇದ್ಯ: ಮೊಸರನ್ನ. ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ವಾಮನನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "बृहस्पते अति यदर्यो अर्हाद्द्युमद्विभाति क्रतुमज्जनेषु ।\nयद्दीदयच्छवस ऋतप्रजात तदस्मासु द्रविणं धेहि चित्रम् ॥\nस्वाहा । बृहस्पतय इदं न मम ॥",
          meaning: {
            en: "O Brihaspati, that which excels among the people in worthiness and shines with splendour and purpose, that which gleams with strength, born of truth — give us that wonderful wealth. (Rigveda 2.23.15; Jupiter) Svaha; this is for Jupiter, not for me.",
            kn: "ಓ ಬೃಹಸ್ಪತಿಯೇ, ಜನರಲ್ಲಿ ಯೋಗ್ಯತೆಯಲ್ಲಿ ಮೀರಿ, ತೇಜಸ್ಸಿನಿಂದ ಸಂಕಲ್ಪದೊಡನೆ ಬೆಳಗುವ, ಸತ್ಯದಿಂದ ಹುಟ್ಟಿದ ಬಲದಿಂದ ಹೊಳೆಯುವ ಆ ಅದ್ಭುತ ಸಂಪತ್ತನ್ನು ನಮಗೆ ಕೊಡು. (ಋಗ್ವೇದ ೨.೨೩.೧೫; ಗುರು) ಸ್ವಾಹಾ; ಇದು ಬೃಹಸ್ಪತಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "इन्द्र मरुत्व इह पाहि सोमं यथा शार्याते अपिबः सुतस्य ।\nतव प्रणीती तव शूर शर्मन्ना विवासन्ति कवयः सुयज्ञाः ॥\nस्वाहा । इन्द्रायेदं न मम ॥",
          meaning: {
            en: "O Indra with the Maruts, drink the Soma here as you drank of the pressed juice at Sharyata's; under your guidance, in your shelter, O hero, the wise ones who sacrifice well worship you. (Rigveda 3.51.7; Indra, with Jupiter) Svaha; this is for Indra, not for me.",
            kn: "ಓ ಮರುತ್ತುಗಳೊಡನಿರುವ ಇಂದ್ರನೇ, ಶಾರ್ಯಾತನಲ್ಲಿ ಸೋಮವನ್ನು ಕುಡಿದಂತೆ ಇಲ್ಲಿಯೂ ಕುಡಿ; ಓ ಶೂರನೇ, ನಿನ್ನ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ನಿನ್ನ ಆಶ್ರಯದಲ್ಲಿ ಒಳ್ಳೆಯ ಯಜ್ಞಮಾಡುವ ಕವಿಗಳು ನಿನ್ನನ್ನು ಆರಾಧಿಸುತ್ತಾರೆ. (ಋಗ್ವೇದ ೩.೫೧.೭; ಗುರುವಿನೊಡನೆ ಇಂದ್ರ) ಸ್ವಾಹಾ; ಇದು ಇಂದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "ब्रह्म जज्ञानं प्रथमं पुरस्ताद्वि सीमतः सुरुचो वेन आवः ।\nस बुध्निया उपमा अस्य विष्ठाः सतश्च योनिमसतश्च विवः ॥\nस्वाहा । ब्रह्मण इदं न मम ॥",
          meaning: {
            en: "Brahman, born first in the east, the Seer has unveiled from the shining boundary; he revealed its deepest, nearest forms, the womb of the existent and the non-existent. (Taittiriya Samhita 4.2.8; Brahma, with Jupiter) Svaha; this is for Brahma, not for me.",
            kn: "ಮೊದಲು ಪೂರ್ವದಲ್ಲಿ ಹುಟ್ಟಿದ ಬ್ರಹ್ಮವನ್ನು ವೇನನು ಪ್ರಕಾಶಮಾನ ಸೀಮೆಯಿಂದ ತೆರೆದು ತೋರಿಸಿದನು; ಅದರ ಆಳವಾದ ಹತ್ತಿರದ ರೂಪಗಳನ್ನೂ ಸತ್ತು–ಅಸತ್ತುಗಳ ಯೋನಿಯನ್ನೂ ಪ್ರಕಟಿಸಿದನು. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೪.೨.೮; ಗುರುವಿನೊಡನೆ ಬ್ರಹ್ಮ) ಸ್ವಾಹಾ; ಇದು ಬ್ರಹ್ಮನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "शुक्रः",
      titleEn: "Venus (Shukra)",
      note: "Offer to Venus: udumbara (atti) samidhs; food: rice with ghee. With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Parashurama, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ಶುಕ್ರಗೆ: ಅತ್ತಿ ಸಮಿಧೆ; ನೈವೇದ್ಯ: ಘೃತಾನ್ನ. ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ಪರಶುರಾಮನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "शुक्रं ते अन्यद्यजतं ते अन्यद्विषुरूपे अहनी द्यौरिवासि ।\nविश्वा हि माया अवसि स्वधावो भद्रा ते पूषन्निह रातिरस्तु ॥\nस्वाहा । शुक्रायेदं न मम ॥",
          meaning: {
            en: "One form of yours is bright, another is worshipful; you are like the sky with its two different halves, day and night. You guard all wonderful powers, O self-reliant one; may your bounty be blessed here, O Pushan. (Rigveda 6.58.1; Venus) Svaha; this is for Venus, not for me.",
            kn: "ನಿನ್ನ ಒಂದು ರೂಪ ಶುಭ್ರ, ಇನ್ನೊಂದು ಪೂಜ್ಯ; ಹಗಲು–ರಾತ್ರಿಗಳೆಂಬ ಭಿನ್ನರೂಪಗಳ ದ್ಯುಲೋಕದಂತೆ ನೀನಿರುವೆ. ಓ ಸ್ವಧಾವಂತನೇ, ಎಲ್ಲ ಮಾಯಾಶಕ್ತಿಗಳನ್ನು ರಕ್ಷಿಸುವೆ; ಓ ಪೂಷನೇ, ನಿನ್ನ ದಾನ ಇಲ್ಲಿ ಮಂಗಳವಾಗಲಿ. (ಋಗ್ವೇದ ೬.೫೮.೧; ಶುಕ್ರ) ಸ್ವಾಹಾ; ಇದು ಶುಕ್ರನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["rigveda"] },
        },
        {
          text: "प्र वः शुक्राय भानवे भरध्वं हव्यं मतिं चाग्नये सुपूतम् ।\nयो दैव्यानि मानुषा जनूंष्यन्तर्विश्वानि विद्मना जिगाति ॥\nस्वाहा । शुक्रायेदं न मम ॥",
          meaning: {
            en: "Bring to Agni, the bright and shining, an offering and a well-purified hymn; he who moves among all the races of gods and men, knowing them within. (Taittiriya Brahmana 2.8.2; Venus) Svaha; this is for Venus, not for me.",
            kn: "ಶುಭ್ರನೂ ಪ್ರಕಾಶಮಾನನೂ ಆದ ಅಗ್ನಿಗೆ ಹವಿಸ್ಸನ್ನೂ ಶುದ್ಧವಾದ ಸ್ತುತಿಯನ್ನೂ ತನ್ನಿರಿ; ದೇವ–ಮಾನವರ ಎಲ್ಲ ಜನ್ಮಗಳನ್ನು ಒಳಗಿನಿಂದ ಅರಿತು ಅವನು ಅವುಗಳ ನಡುವೆ ಸಂಚರಿಸುತ್ತಾನೆ. (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೨.೮.೨; ಶುಕ್ರ) ಸ್ವಾಹಾ; ಇದು ಶುಕ್ರನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["yajurveda"] },
        },
        {
          text: "इन्द्राणीमासु नारिषु सुभगामहमश्रवम् ।\nनह्यस्या अपरं चन जरसा मरते पतिर्विश्वस्मादिन्द्र उत्तरः ॥\nस्वाहा । इन्द्राण्या इदं न मम ॥",
          meaning: {
            en: "Among these women I have heard of Indrani as the most fortunate; for her husband never dies of old age; Indra is supreme over all. (Rigveda 10.86.11; Indrani, with Venus) Svaha; this is for Indrani, not for me.",
            kn: "ಈ ಸ್ತ್ರೀಯರಲ್ಲಿ ಇಂದ್ರಾಣಿಯೇ ಅತಿ ಸೌಭಾಗ್ಯವತಿ ಎಂದು ನಾನು ಕೇಳಿದ್ದೇನೆ; ಅವಳ ಪತಿ ಮುಪ್ಪಿನಿಂದ ಎಂದೂ ಸಾಯುವುದಿಲ್ಲ; ಇಂದ್ರನು ಎಲ್ಲರಿಗಿಂತ ಶ್ರೇಷ್ಠ. (ಋಗ್ವೇದ ೧೦.೮೬.೧೧; ಶುಕ್ರನೊಡನೆ ಇಂದ್ರಾಣಿ) ಸ್ವಾಹಾ; ಇದು ಇಂದ್ರಾಣಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["rigveda"] },
        },
        {
          text: "इन्द्राणीमासु नारिषु सुपत्नीमहमश्रवम् ।\nन ह्यस्या अपरं चन जरसा मरते पतिः ॥\nस्वाहा । इन्द्राण्या इदं न मम ॥",
          meaning: {
            en: "Among these women I have heard of Indrani as the one with the good husband; for her husband never dies of old age. (The Navagraha Sukta reading of Rigveda 10.86.11; Indrani, with Venus) Svaha; this is for Indrani, not for me.",
            kn: "ಈ ಸ್ತ್ರೀಯರಲ್ಲಿ ಇಂದ್ರಾಣಿಯೇ ಉತ್ತಮ ಪತಿಯುಳ್ಳವಳೆಂದು ನಾನು ಕೇಳಿದ್ದೇನೆ; ಅವಳ ಪತಿ ಮುಪ್ಪಿನಿಂದ ಎಂದೂ ಸಾಯುವುದಿಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೮೬.೧೧ರ ನವಗ್ರಹಸೂಕ್ತ ಪಾಠ; ಶುಕ್ರನೊಡನೆ ಇಂದ್ರಾಣಿ) ಸ್ವಾಹಾ; ಇದು ಇಂದ್ರಾಣಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["yajurveda"] },
        },
        {
          text: "इन्द्रं वो विश्वतस्परि हवामहे जनेभ्यः ।\nअस्माकमस्तु केवलः ॥\nस्वाहा । इन्द्रायेदं न मम ॥",
          meaning: {
            en: "We call Indra for you, away from all other people; may he be ours alone. (Rigveda 1.7.10; Indra, with Venus) Svaha; this is for Indra, not for me.",
            kn: "ಎಲ್ಲ ಜನರಿಂದಲೂ ಬೇರ್ಪಡಿಸಿ ನಿಮಗಾಗಿ ಇಂದ್ರನನ್ನು ಕರೆಯುತ್ತೇವೆ; ಅವನು ನಮಗೇ ಸೇರಿದವನಾಗಲಿ. (ಋಗ್ವೇದ ೧.೭.೧೦; ಶುಕ್ರನೊಡನೆ ಇಂದ್ರ) ಸ್ವಾಹಾ; ಇದು ಇಂದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "शनैश्चरः",
      titleEn: "Saturn (Shanaishchara)",
      note: "Offer to Saturn: shami samidhs; food: krisara (rice with sesame). With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Kurma, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ಶನೈಶ್ಚರಗೆ: ಶಮೀ ಸಮಿಧೆ; ನೈವೇದ್ಯ: ಕೃಸರ (ಎಳ್ಳು ಸೇರಿದ ಅನ್ನ). ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ಕೂರ್ಮನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "शमग्निरग्निभिः करच्छं नस्तपतु सूर्यः ।\nशं वातो वात्वरपा अप स्रिधः ॥\nस्वाहा । शनैश्चरायेदं न मम ॥",
          meaning: {
            en: "May Agni with his fires bring us peace; may the Sun warm us kindly; may the wind blow for us free of harm; away with the foes. (Rigveda 8.18.9; the Saturn mantra of the Madhva manual) Svaha; this is for Saturn, not for me.",
            kn: "ಅಗ್ನಿಯು ತನ್ನ ಜ್ವಾಲೆಗಳಿಂದ ನಮಗೆ ಶಾಂತಿ ತರಲಿ; ಸೂರ್ಯನು ಮಂಗಳಕರನಾಗಿ ತಪಿಸಲಿ; ಗಾಳಿ ನಿರ್ದೋಷವಾಗಿ ಬೀಸಲಿ; ಶತ್ರುಗಳು ದೂರವಾಗಲಿ. (ಋಗ್ವೇದ ೮.೧೮.೯; ಹೋಮ–ಹವನದ ಶನಿಮಂತ್ರ) ಸ್ವಾಹಾ; ಇದು ಶನೈಶ್ಚರನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["rigveda"] },
        },
        {
          text: "शं नो देवीरभिष्टय आपो भवन्तु पीतये ।\nशं योरभि स्रवन्तु नः ॥\nस्वाहा । शनैश्चरायेदं न मम ॥",
          meaning: {
            en: "May the divine Waters be a blessing to us for our welfare and for drinking; may they flow to us with health and happiness. (Rigveda 10.9.4; Saturn) Svaha; this is for Saturn, not for me.",
            kn: "ದಿವ್ಯ ಜಲಗಳು ನಮ್ಮ ಅಭೀಷ್ಟಕ್ಕಾಗಿ, ಪಾನಕ್ಕಾಗಿ ಮಂಗಳಕರವಾಗಲಿ; ಆರೋಗ್ಯ–ಸುಖಗಳೊಡನೆ ನಮ್ಮೆಡೆಗೆ ಹರಿಯಲಿ. (ಋಗ್ವೇದ ೧೦.೯.೪; ಶನಿ) ಸ್ವಾಹಾ; ಇದು ಶನೈಶ್ಚರನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["yajurveda"] },
        },
        {
          text: "प्रजापते न त्वदेतान्यन्यो विश्वा जातानि परि ता बभूव ।\nयत्कामास्ते जुहुमस्तन्नो अस्तु वयं स्याम पतयो रयीणाम् ॥\nस्वाहा । प्रजापतय इदं न मम ॥",
          meaning: {
            en: "O Prajapati, none other than you encompasses all these created things; may what we desire when we offer to you be ours; may we be lords of riches. (Rigveda 10.121.10; Prajapati, with Saturn) Svaha; this is for Prajapati, not for me.",
            kn: "ಓ ಪ್ರಜಾಪತಿಯೇ, ನಿನ್ನ ಹೊರತು ಬೇರೆ ಯಾರೂ ಈ ಎಲ್ಲ ಸೃಷ್ಟಿಗಳನ್ನು ಆವರಿಸಿಲ್ಲ; ಯಾವ ಬಯಕೆಯಿಂದ ನಿನಗೆ ಹೋಮಿಸುತ್ತೇವೋ ಅದು ನಮಗಾಗಲಿ; ನಾವು ಸಂಪತ್ತಿನ ಒಡೆಯರಾಗೋಣ. (ಋಗ್ವೇದ ೧೦.೧೨೧.೧೦; ಶನಿಯೊಡನೆ ಪ್ರಜಾಪತಿ) ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "इमं यम प्रस्तरमा हि सीदाङ्गिरोभिः पितृभिः संविदानः ।\nआ त्वा मन्त्राः कविशस्ता वहन्त्वेना राजन्हविषा मादयस्व ॥\nस्वाहा । यमायेदं न मम ॥",
          meaning: {
            en: "O Yama, sit on this strewn grass, in accord with the Angirases and the fathers; may the mantras spoken by the seers bring you; O king, rejoice in this offering. (Rigveda 10.14.4; Yama, with Saturn) Svaha; this is for Yama, not for me.",
            kn: "ಓ ಯಮನೇ, ಅಂಗಿರಸರೊಡನೆಯೂ ಪಿತೃಗಳೊಡನೆಯೂ ಒಮ್ಮತದಿಂದ ಈ ದರ್ಭಾಸನದಲ್ಲಿ ಕುಳಿತುಕೋ; ಕವಿಗಳು ಹೇಳಿದ ಮಂತ್ರಗಳು ನಿನ್ನನ್ನು ಕರೆತರಲಿ; ಓ ರಾಜನೇ, ಈ ಹವಿಸ್ಸಿನಿಂದ ಸಂತೋಷಪಡು. (ಋಗ್ವೇದ ೧೦.೧೪.೪; ಶನಿಯೊಡನೆ ಯಮ) ಸ್ವಾಹಾ; ಇದು ಯಮನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "राहुः",
      titleEn: "Rahu",
      note: "Offer to Rahu: durva; food as your family gives it (Matsya names goat meat; vegetarian households give urad and rice). With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Varaha, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ರಾಹುಗೆ: ಗರಿಕೆ; ನೈವೇದ್ಯ ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ (ಮತ್ಸ್ಯಪುರಾಣ ಮಾಂಸವನ್ನು ಹೇಳುತ್ತದೆ; ಸಸ್ಯಾಹಾರಿ ಮನೆಗಳಲ್ಲಿ ಉದ್ದು–ಅನ್ನ). ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ವರಾಹನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "कया नश्चित्र आ भुवदूती सदावृधः सखा ।\nकया शचिष्ठया वृता ॥\nस्वाहा । राहव इदं न मम ॥",
          meaning: {
            en: "By what help will the wonderful, ever-growing friend come to us? By what most mighty company? (Rigveda 4.31.1; the Rahu mantra of the Karnataka manuals.) Svaha; this is for Rahu, not for me.",
            kn: "ಅದ್ಭುತನಾದ, ಸದಾ ಬೆಳೆಯುವ ಮಿತ್ರನು ಯಾವ ರಕ್ಷಣೆಯೊಡನೆ, ಯಾವ ಅತಿ ಬಲಿಷ್ಠ ಪರಿವಾರದೊಡನೆ ನಮ್ಮೆಡೆಗೆ ಬರುತ್ತಾನೆ? (ಋಗ್ವೇದ ೪.೩೧.೧; ಕರ್ನಾಟಕದ ಪದ್ಧತಿಗಳ ರಾಹು ಮಂತ್ರ.) ಸ್ವಾಹಾ; ಇದು ರಾಹುವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "आयं गौः पृश्निरक्रमीदसदन्मातरं पुरः ।\nपितरं च प्रयन्स्वः ॥\nस्वाहा । सर्पेभ्य इदं न मम ॥",
          meaning: {
            en: "This dappled bull has come forward and sat down before his mother, going forth to his father, the heaven. (Rigveda 10.189.1, the verse of Sarparajni; the Serpents, with Rahu) Svaha; this is for the Serpents, not for me.",
            kn: "ಈ ಚಿತ್ರವರ್ಣದ ವೃಷಭನು ಮುಂದೆ ಬಂದು ತನ್ನ ತಾಯಿಯ ಮುಂದೆ ಕುಳಿತಿದ್ದಾನೆ, ತಂದೆಯಾದ ಸ್ವರ್ಗದ ಕಡೆಗೆ ಹೊರಟು. (ಋಗ್ವೇದ ೧೦.೧೮೯.೧, ಸರ್ಪರಾಜ್ಞಿಯ ಮಂತ್ರ; ರಾಹುವಿನೊಡನೆ ಸರ್ಪದೇವತೆ) ಸ್ವಾಹಾ; ಇದು ಸರ್ಪಗಳಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["rigveda"] },
        },
        {
          text: "आयं गौः पृश्निरक्रमीदसनन्मातरं पुनः ।\nपितरं च प्रयन्त्सुवः ॥\nस्वाहा । सर्पेभ्य इदं न मम ॥",
          meaning: {
            en: "This dappled bull has come forward and won back his mother, going forth to his father, the heaven. (Taittiriya Samhita 1.5.3, the verse of Sarparajni; the Serpents, with Rahu) Svaha; this is for the Serpents, not for me.",
            kn: "ಈ ಚಿತ್ರವರ್ಣದ ವೃಷಭನು ಮುಂದೆ ಬಂದು ತನ್ನ ತಾಯಿಯನ್ನು ಮತ್ತೆ ಪಡೆದಿದ್ದಾನೆ, ತಂದೆಯಾದ ಸ್ವರ್ಗದ ಕಡೆಗೆ ಹೊರಟು. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೧.೫.೩, ಸರ್ಪರಾಜ್ಞಿಯ ಮಂತ್ರ; ರಾಹುವಿನೊಡನೆ ಸರ್ಪದೇವತೆ) ಸ್ವಾಹಾ; ಇದು ಸರ್ಪಗಳಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
          when: { veda: ["yajurveda"] },
        },
        {
          text: "यत्ते देवी निर्ऋतिराबबन्ध दाम ग्रीवास्वविचर्त्यम् ।\nइदं ते तद्वि ष्याम्यायुषो न मध्यादथा जीवः पितुमद्धि प्रमुक्तः ॥\nस्वाहा । निर्ऋत्या इदं न मम ॥",
          meaning: {
            en: "The bond that the goddess Nirriti has tied on your neck, not to be loosened, I untie for you, as from the middle of life; now, freed, eat food that nourishes. (Taittiriya Samhita 4.2.5; Nirriti, with Rahu) Svaha; this is for Nirriti, not for me.",
            kn: "ನಿರ್ಋತಿದೇವಿಯು ನಿನ್ನ ಕೊರಳಿಗೆ ಬಿಗಿದ ಬಿಚ್ಚಲಾಗದ ಪಾಶವನ್ನು ನಾನು ಆಯುಸ್ಸಿನ ಮಧ್ಯದಿಂದಲೇ ಎಂಬಂತೆ ಬಿಚ್ಚುತ್ತೇನೆ; ಈಗ ಬಿಡುಗಡೆಯಾಗಿ ಪುಷ್ಟಿಕರ ಅನ್ನವನ್ನು ಉಣ್ಣು. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೪.೨.೫; ರಾಹುವಿನೊಡನೆ ನಿರ್ಋತಿ) ಸ್ವಾಹಾ; ಇದು ನಿರ್ಋತಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "केतुः",
      titleEn: "Ketu",
      note: "Offer to Ketu: kusha; food: chitranna (rice of many colours). With its graha mantra (first verse) offer the samidhs, then charu, then ghee, 108 times each for a full homa or 28 times each for the shorter padagraha-yajna (Matsya Purana 93.28-32; Homa-Havana); the samidhs a span long, dipped in honey, ghee and curd. Then offer to its adhidevata and pratyadhidevata with the next two verses, a tenth of that number (or as your purohita directs). Each oblation ends with svaha and the tyaga, इदं न मम. Madhva anusandhana: the offering goes to Matsya, the form of the Lord who rules this graha (Parashara Hora, in Homa-Havana), or to Lakshmi-Narasimha within Mukhyaprana in all the grahas.",
      noteKn: "ಕೇತುಗೆ: ಕುಶ; ನೈವೇದ್ಯ: ಚಿತ್ರಾನ್ನ. ಗ್ರಹಮಂತ್ರದಿಂದ (ಮೊದಲ ಮಂತ್ರ) ಸಮಿಧೆ, ನಂತರ ಚರು, ನಂತರ ತುಪ್ಪ — ಪೂರ್ಣ ಹೋಮಕ್ಕೆ ತಲಾ ೧೦೮, ಪಾದಗ್ರಹಯಜ್ಞಕ್ಕೆ ತಲಾ ೨೮ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೨೮–೩೨; ಹೋಮ–ಹವನ); ಸಮಿಧೆಗಳು ಗೇಣುದ್ದ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದವು. ನಂತರ ಮುಂದಿನ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳಿಗೆ ಅದರ ದಶಾಂಶ (ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದಷ್ಟು). ಪ್ರತಿ ಆಹುತಿಯೂ ಸ್ವಾಹಾ ಮತ್ತು “ಇದಂ ನ ಮಮ” ತ್ಯಾಗದೊಡನೆ. ಮಾಧ್ವ ಅನುಸಂಧಾನ: ಈ ಗ್ರಹನಿಯಾಮಕನಾದ ಭಗವದ್ರೂಪ ಮತ್ಸ್ಯನಿಗೆ (ಪರಾಶರಹೋರಾ; ಹೋಮ–ಹವನ), ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಲ್ಲೂ ಪ್ರಾಣಾಂತರ್ಗತ ಲಕ್ಷ್ಮೀನೃಸಿಂಹನಿಗೆ ಆಹುತಿ.",
      verses: [
        {
          text: "केतुं कृण्वन्नकेतवे पेशो मर्या अपेशसे ।\nसमुषद्भिरजायथाः ॥\nस्वाहा । केतुभ्य इदं न मम ॥",
          meaning: {
            en: "Making light for the lightless and form for the formless, O men, you were born together with the dawns. (Rigveda 1.6.3; Ketu) Svaha; this is for Ketu, not for me.",
            kn: "ಓ ಮನುಷ್ಯರೇ, ಬೆಳಕಿಲ್ಲದವರಿಗೆ ಬೆಳಕನ್ನೂ ರೂಪವಿಲ್ಲದವರಿಗೆ ರೂಪವನ್ನೂ ಕೊಡುತ್ತಾ ನೀನು ಉಷಸ್ಸುಗಳೊಡನೆ ಹುಟ್ಟಿದೆ. (ಋಗ್ವೇದ ೧.೬.೩; ಕೇತು) ಸ್ವಾಹಾ; ಇದು ಕೇತುವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "ब्रह्मा देवानां पदवीः कवीनामृषिर्विप्राणां महिषो मृगाणाम् ।\nश्येनो गृध्राणां स्वधितिर्वनानां सोमः पवित्रमत्येति रेभन् ॥\nस्वाहा । ब्रह्मण इदं न मम ॥",
          meaning: {
            en: "Brahma among the gods, the leader among poets, the seer among sages, the buffalo among wild beasts, the falcon among birds of prey, the axe among trees: Soma passes through the filter, singing. (Rigveda 9.96.6; Brahma, with Ketu) Svaha; this is for Brahma, not for me.",
            kn: "ದೇವತೆಗಳಲ್ಲಿ ಬ್ರಹ್ಮ, ಕವಿಗಳಲ್ಲಿ ಮಾರ್ಗದರ್ಶಿ, ವಿಪ್ರರಲ್ಲಿ ಋಷಿ, ಮೃಗಗಳಲ್ಲಿ ಮಹಿಷ, ಹದ್ದುಗಳಲ್ಲಿ ಶ್ಯೇನ, ಮರಗಳಿಗೆ ಕೊಡಲಿ — ಸೋಮನು ಶಬ್ದಮಾಡುತ್ತಾ ಪವಿತ್ರವನ್ನು ದಾಟುತ್ತಾನೆ. (ಋಗ್ವೇದ ೯.೯೬.೬; ಕೇತುವಿನೊಡನೆ ಬ್ರಹ್ಮ) ಸ್ವಾಹಾ; ಇದು ಬ್ರಹ್ಮನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          text: "स चित्र चित्रं चितयन्तमस्मे चित्रक्षत्र चित्रतमं वयोधाम् ।\nचन्द्रं रयिं पुरुवीरं बृहन्तं चन्द्र चन्द्राभिर्गृणते युवस्व ॥\nस्वाहा । चित्रगुप्तायेदं न मम ॥",
          meaning: {
            en: "O wonderful one, of wonderful power, bestow on us wonderful, most splendid wealth that gives vigour; O shining one, grant to him who praises you with shining hymns bright riches, great and rich in heroes. (Rigveda 6.6.7; Chitragupta, with Ketu) Svaha; this is for Chitragupta, not for me.",
            kn: "ಓ ಅದ್ಭುತನೇ, ಅದ್ಭುತ ಬಲದವನೇ, ನಮಗೆ ಅದ್ಭುತವಾದ, ಅತ್ಯಂತ ತೇಜಸ್ವಿಯಾದ, ಚೈತನ್ಯ ನೀಡುವ ಸಂಪತ್ತನ್ನು ಕೊಡು; ಓ ಪ್ರಕಾಶಮಾನನೇ, ಪ್ರಕಾಶಮಾನ ಸ್ತೋತ್ರಗಳಿಂದ ಸ್ತುತಿಸುವವನಿಗೆ ವೀರಪುತ್ರರಿಂದ ಕೂಡಿದ ದೊಡ್ಡ ಐಶ್ವರ್ಯವನ್ನು ಕರುಣಿಸು. (ಋಗ್ವೇದ ೬.೬.೭; ಕೇತುವಿನೊಡನೆ ಚಿತ್ರಗುಪ್ತ) ಸ್ವಾಹಾ; ಇದು ಚಿತ್ರಗುಪ್ತನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "परिवारदेवता दिक्पालाश्च",
      titleEn: "The parivara devatas and the dikpalas",
      note: "After the nine grahas, offer ghee to the deities around them and to the guardians of the eight directions, a tenth of the graha count each (Homa-Havana). Homa-Havana speaks of eight parivara deities, Durga, Ganapati and the others, without naming all of them; the five that Matsya Purana 93.16 names are given here. Families that also offer to Mrityunjaya or other upapradhana deities follow their purohita.",
      noteKn: "ಒಂಬತ್ತು ಗ್ರಹಗಳ ನಂತರ ಪರಿವಾರದೇವತೆಗಳಿಗೂ ಎಂಟು ದಿಕ್ಪಾಲಕರಿಗೂ ಗ್ರಹಸಂಖ್ಯೆಯ ದಶಾಂಶದಷ್ಟು ಆಜ್ಯಾಹುತಿ (ಹೋಮ–ಹವನ). ಹೋಮ–ಹವನ ದುರ್ಗಾ–ಗಣಪತಿ ಮೊದಲಾದ ಎಂಟು ಪರಿವಾರದೇವತೆಗಳನ್ನು ಹೇಳುತ್ತದೆ, ಎಲ್ಲರ ಹೆಸರು ಕೊಡುವುದಿಲ್ಲ; ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೬ ಹೆಸರಿಸುವ ಐವರನ್ನು ಇಲ್ಲಿ ಕೊಡಲಾಗಿದೆ. ಮೃತ್ಯುಂಜಯಾದಿ ಉಪಪ್ರಧಾನ ದೇವತೆಗಳಿಗೂ ಹೋಮಿಸುವವರು ಪುರೋಹಿತರಂತೆ ಮಾಡಲಿ.",
      verses: [
        {
          text: "विनायकाय स्वाहा । दुर्गायै स्वाहा । वायवे स्वाहा । आकाशाय स्वाहा । अश्विभ्यां स्वाहा ॥",
          meaning: {
            en: "To Vinayaka, svaha; to Durga, svaha; to Vayu, svaha; to Akasha, svaha; to the two Ashvins, svaha. (The deities Matsya Purana 93.16 names beside the grahas; each with its tyaga, इदं न मम.)",
            kn: "ವಿನಾಯಕನಿಗೆ ಸ್ವಾಹಾ; ದುರ್ಗೆಗೆ ಸ್ವಾಹಾ; ವಾಯುವಿಗೆ ಸ್ವಾಹಾ; ಆಕಾಶಕ್ಕೆ ಸ್ವಾಹಾ; ಅಶ್ವಿನೀದೇವತೆಗಳಿಗೆ ಸ್ವಾಹಾ. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೧೬ ಗ್ರಹಗಳೊಡನೆ ಹೆಸರಿಸುವ ದೇವತೆಗಳು; ಪ್ರತಿಯೊಂದಕ್ಕೂ “ಇದಂ ನ ಮಮ” ತ್ಯಾಗ.)",
          },
        },
        {
          text: "इन्द्राय स्वाहा । अग्नये स्वाहा । यमाय स्वाहा । निर्ऋतये स्वाहा ।\nवरुणाय स्वाहा । वायवे स्वाहा । कुबेराय स्वाहा । ईशानाय स्वाहा ॥",
          meaning: {
            en: "To Indra, Agni, Yama, Nirriti, Varuna, Vayu, Kubera and Ishana, the guardians of the eight directions (east, south-east, south, south-west, west, north-west, north, north-east), svaha to each, with its tyaga.",
            kn: "ಎಂಟು ದಿಕ್ಕುಗಳ ರಕ್ಷಕರಾದ ಇಂದ್ರ, ಅಗ್ನಿ, ಯಮ, ನಿರ್ಋತಿ, ವರುಣ, ವಾಯು, ಕುಬೇರ, ಈಶಾನರಿಗೆ (ಪೂರ್ವ, ಆಗ್ನೇಯ, ದಕ್ಷಿಣ, ನೈರುತ್ಯ, ಪಶ್ಚಿಮ, ವಾಯವ್ಯ, ಉತ್ತರ, ಈಶಾನ್ಯ) ತಲಾ ಸ್ವಾಹಾ, ತ್ಯಾಗದೊಡನೆ.",
          },
        },
      ],
    },
    {
      title: "उत्तराङ्गम्",
      titleEn: "Uttaranga: do the Common Procedure from the svishtakrit to the closing prayers",
      note: "After the last main oblation, do the uttaranga as given in full in \"Homa: Common Procedure\", for your tradition: the svishtakrit (offered with a little of each material used in the main homa), the prayaschitta offerings, the purnahuti and vasordhara, the samsrava, the marjana, the agni upasthana, the raksha and the closing prayers. Keep the samarpana and the farewell to Agni for the end of this text, after the closing puja. For the graha homa the Matsya Purana (93.48) gives the purnahuti verse मूर्धानं दिवो…, printed below: say it with the purnahuti (Madhva: before समुद्रादूर्मिः…; Smarta: before पूर्णाहुतिमुत्तमां…). For the svishtakrit, offer a little of each samidh, the charu and ghee.",
      noteKn: "ಕೊನೆಯ ಪ್ರಧಾನ ಆಹುತಿಯ ನಂತರ “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿರುವಂತೆ ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ಉತ್ತರಾಂಗ ಮಾಡಿ: ಸ್ವಿಷ್ಟಕೃತ್ (ಪ್ರಧಾನ ಹೋಮದ ಪ್ರತಿ ದ್ರವ್ಯದ ಸ್ವಲ್ಪ ಭಾಗದಿಂದ), ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ಪೂರ್ಣಾಹುತಿ–ವಸೋರ್ಧಾರಾ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ಅಗ್ನ್ಯುಪಸ್ಥಾನ, ರಕ್ಷಾಧಾರಣ, ಸಮಾಪ್ತಿ ಪ್ರಾರ್ಥನೆಗಳು. ಸಮರ್ಪಣೆ ಮತ್ತು ಅಗ್ನಿವಿಸರ್ಜನೆಯನ್ನು ಉತ್ತರಪೂಜೆಯ ನಂತರ, ಈ ಪಠ್ಯದ ಕೊನೆಯಲ್ಲಿ ಮಾಡಿ. ಗ್ರಹಹೋಮಕ್ಕೆ ಮತ್ಸ್ಯಪುರಾಣ (೯೩.೪೮) “ಮೂರ್ಧಾನಂ ದಿವೋ…” ಪೂರ್ಣಾಹುತಿ ಮಂತ್ರವನ್ನು ಕೊಡುತ್ತದೆ, ಕೆಳಗಿದೆ: ಪೂರ್ಣಾಹುತಿಯೊಡನೆ ಹೇಳಿ (ಮಾಧ್ವ: “ಸಮುದ್ರಾದೂರ್ಮಿಃ…” ಮೊದಲು; ಸ್ಮಾರ್ತ: “ಪೂರ್ಣಾಹುತಿಮುತ್ತಮಾಂ…” ಮೊದಲು). ಸ್ವಿಷ್ಟಕೃತ್‌ಗೆ ಪ್ರತಿ ಸಮಿಧೆ, ಚರು, ಆಜ್ಯಗಳ ಸ್ವಲ್ಪ ಭಾಗ.",
      verses: [
        {
          text: "उत्तराङ्गम् — स्विष्टकृदादि ॥",
          meaning: {
            en: "The uttaranga, beginning with the svishtakrit. (A heading: do these steps from \"Homa: Common Procedure\".)",
            kn: "ಸ್ವಿಷ್ಟಕೃತ್‌ನಿಂದ ಆರಂಭವಾಗುವ ಉತ್ತರಾಂಗ. (ಶೀರ್ಷಿಕೆ: ಈ ಹಂತಗಳನ್ನು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಿಂದ ಮಾಡಿ.)",
          },
        },
        {
          text: "मूर्धानं दिवो अरतिं पृथिव्या वैश्वानरमृत आ जातमग्निम् ।\nकविं सम्राजमतिथिं जनानामासन्ना पात्रं जनयन्त देवाः ॥\nस्वाहा । अग्नये वैश्वानरायेदं न मम ॥",
          meaning: {
            en: "The gods brought forth Agni Vaishvanara, head of heaven, messenger of the earth, born in the order of truth, the poet, the sovereign, the guest of men, a vessel for their mouth. Svaha; this is for Agni Vaishvanara, not for me. (Rigveda 6.7.1; the purnahuti of the graha homa, Matsya Purana 93.48)",
            kn: "ದ್ಯುಲೋಕದ ಶಿರಸ್ಸು, ಭೂಮಿಯ ದೂತ, ಋತದಲ್ಲಿ ಹುಟ್ಟಿದ, ಕವಿ, ಸಮ್ರಾಟ, ಜನರ ಅತಿಥಿ, ಅವರ ಮುಖದ ಪಾತ್ರೆಯಾದ ವೈಶ್ವಾನರ ಅಗ್ನಿಯನ್ನು ದೇವತೆಗಳು ಹುಟ್ಟಿಸಿದರು. ಸ್ವಾಹಾ; ಇದು ವೈಶ್ವಾನರ ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೬.೭.೧; ಗ್ರಹಹೋಮದ ಪೂರ್ಣಾಹುತಿ, ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೪೮)",
          },
        },
      ],
    },
    {
      title: "उत्तरपूजा — नीराजनम्",
      titleEn: "Closing puja: arati",
      note: "Worship the grahas once more on the mandala with dhupa, dipa and naivedya (the graha foods). Wave the lamp (mangalarati) before the deity.",
      noteKn: "ಮಂಡಲದಲ್ಲಿ ಗ್ರಹಗಳಿಗೆ ಮತ್ತೆ ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ (ಗ್ರಹಪ್ರಿಯ ಅನ್ನಗಳು) ಅರ್ಪಿಸಿ. ದೇವತೆಗೆ ಮಂಗಳಾರತಿ ಬೆಳಗಿ.",
      verses: [
        {
          text: "ॐ नमो नारायणाय । मङ्गलनीराजनं समर्पयामि ॥",
          meaning: {
            en: "Om, salutations to Narayana; I offer the auspicious arati (waving of lights).",
            kn: "ಓಂ ನಮೋ ನಾರಾಯಣಾಯ; ಮಂಗಳ ನೀರಾಜನವನ್ನು (ಮಂಗಳಾರತಿಯನ್ನು) ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "न तत्र सूर्यो भाति न चन्द्रतारकं\nनेमा विद्युतो भान्ति कुतोऽयमग्निः ।\nतमेव भान्तमनुभाति सर्वं\nतस्य भासा सर्वमिदं विभाति ॥",
          meaning: {
            en: "There the Sun does not shine, nor the Moon and stars, nor these lightnings — how then this fire? Everything shines only after him who shines; by his light all this is lit. (Katha Upanishad 2.2.15, recited during the camphor arati.)",
            kn: "ಅಲ್ಲಿ ಸೂರ್ಯನಾಗಲೀ ಚಂದ್ರ–ನಕ್ಷತ್ರಗಳಾಗಲೀ ಮಿಂಚುಗಳಾಗಲೀ ಪ್ರಕಾಶಿಸುವುದಿಲ್ಲ — ಈ ಅಗ್ನಿ ಹೇಗೆ ತಾನೇ? ಪ್ರಕಾಶಿಸುವ ಅವನನ್ನನುಸರಿಸಿಯೇ ಎಲ್ಲವೂ ಪ್ರಕಾಶಿಸುತ್ತದೆ; ಅವನ ಬೆಳಕಿನಿಂದಲೇ ಇದೆಲ್ಲವೂ ಬೆಳಗುತ್ತದೆ. (ಕಠೋಪನಿಷತ್ ೨.೨.೧೫; ಕರ್ಪೂರಾರತಿಯ ಸಮಯದಲ್ಲಿ.)",
          },
          when: { tradition: ["smarta"] },
        },
        {
          text: "कर्पूरनीराजनं दर्शयामि ।\nनीराजनानन्तरम् आचमनीयं समर्पयामि ॥",
          meaning: {
            en: "I show the camphor arati; after the arati I offer water to sip.",
            kn: "ಕರ್ಪೂರದ ನೀರಾಜನವನ್ನು ತೋರಿಸುತ್ತೇನೆ; ನೀರಾಜನದ ನಂತರ ಆಚಮನಕ್ಕೆ ನೀರು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
    {
      title: "मन्त्रपुष्पम्",
      titleEn: "Mantrapushpa",
      note: "Stand, hold flowers in the joined palms, recite and offer them at the feet of the deity.",
      noteKn: "ಎದ್ದು ನಿಂತು ಬೊಗಸೆಯಲ್ಲಿ ಹೂವು ಹಿಡಿದು ಮಂತ್ರ ಹೇಳಿ ದೇವತೆಯ ಪಾದಗಳಿಗೆ ಅರ್ಪಿಸಿ.",
      verses: [
        {
          text: "ॐ राजाधिराजाय प्रसह्यसाहिने । नमो वयं वैश्रवणाय कुर्महे ।\nस मे कामान्कामकामाय मह्यम् । कामेश्वरो वैश्रवणो ददातु ।\nकुबेराय वैश्रवणाय । महाराजाय नमः ॥",
          meaning: {
            en: "We bow to Vaishravana, king of kings, who prevails by his might. May he, the lord of desires, grant my wishes to me who long for them. Salutations to Kubera Vaishravana, the great king.",
            kn: "ರಾಜಾಧಿರಾಜನೂ, ತನ್ನ ಶಕ್ತಿಯಿಂದ ಎಲ್ಲರನ್ನೂ ಗೆಲ್ಲುವವನೂ ಆದ ವೈಶ್ರವಣನಿಗೆ ನಾವು ನಮಸ್ಕರಿಸುತ್ತೇವೆ. ಕಾಮೇಶ್ವರನಾದ ಆ ವೈಶ್ರವಣನು ಬಯಕೆಯುಳ್ಳ ನನಗೆ ನನ್ನ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಕರುಣಿಸಲಿ. ಮಹಾರಾಜನಾದ ವೈಶ್ರವಣ ಕುಬೇರನಿಗೆ ನಮಸ್ಕಾರ.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "मन्त्रपुष्पं समर्पयामि ॥",
          meaning: {
            en: "I offer the mantra-pushpa — flowers offered with Vedic mantras.",
            kn: "ಮಂತ್ರಪುಷ್ಪವನ್ನು — ವೇದಮಂತ್ರಗಳೊಂದಿಗೆ ಹೂವುಗಳನ್ನು — ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "योऽपां पुष्पं वेद । पुष्पवान्प्रजावान्पशुमान्भवति ।\nचन्द्रमा वा अपां पुष्पम् । पुष्पवान्प्रजावान्पशुमान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥",
          meaning: {
            en: "One who knows the flower of the waters becomes rich in flowers, offspring and cattle. The moon is the flower of the waters; one who knows this becomes rich in flowers, offspring and cattle. One who knows the support of the waters gains a firm support.",
            kn: "ನೀರಿನ ಹೂವನ್ನು ಅರಿತವನು ಹೂವು, ಸಂತಾನ ಮತ್ತು ಪಶುಸಂಪತ್ತುಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಚಂದ್ರನೇ ನೀರಿನ ಹೂವು; ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು ಹೂವು, ಸಂತಾನ, ಪಶುಸಂಪತ್ತುಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ತಾನೂ ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          text: "मन्त्रपुष्पं समर्पयामि ॥",
          meaning: {
            en: "I offer the mantra-pushpa — flowers offered with Vedic mantras.",
            kn: "ಮಂತ್ರಪುಷ್ಪವನ್ನು — ವೇದಮಂತ್ರಗಳೊಂದಿಗೆ ಹೂವುಗಳನ್ನು — ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
    {
      title: "प्रदक्षिणनमस्काराः",
      titleEn: "Pradakshina and namaskara",
      note: "Go round the fire and the deity clockwise (three times, or as many as you can) and prostrate.",
      noteKn: "ಅಗ್ನಿ ಮತ್ತು ದೇವತೆಗೆ ಪ್ರದಕ್ಷಿಣೆ (ಮೂರು ಬಾರಿ ಅಥವಾ ಸಾಧ್ಯವಾದಷ್ಟು) ಮಾಡಿ ನಮಸ್ಕರಿಸಿ.",
      verses: [
        {
          text: "यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्ति प्रदक्षिणपदे पदे ॥",
          meaning: {
            en: "Whatever sins there are, even those committed in former births, are destroyed at every step of the circumambulation.",
            kn: "ಹಿಂದಿನ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದವೂ ಸೇರಿದಂತೆ ಯಾವ ಯಾವ ಪಾಪಗಳಿವೆಯೋ, ಅವೆಲ್ಲವೂ ಪ್ರದಕ್ಷಿಣೆಯ ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗುತ್ತವೆ.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "नाहं कर्ता हरिः कर्ता तत्पूजा कर्म चाखिलम् ।\nतथापि मत्कृता पूजा तत्प्रसादेन नान्यथा ॥",
          meaning: {
            en: "I am not the doer; Hari is the doer, and all action is his worship. Even so, this worship done by me happens only by his grace, not otherwise.",
            kn: "ನಾನು ಕರ್ತನಲ್ಲ, ಹರಿಯೇ ಕರ್ತ; ಎಲ್ಲ ಕರ್ಮವೂ ಅವನ ಪೂಜೆಯೇ. ಆದರೂ ನಾನು ಮಾಡಿದ ಈ ಪೂಜೆ ಅವನ ಪ್ರಸಾದದಿಂದಲೇ ನಡೆಯಿತು, ಬೇರೆ ರೀತಿಯಿಂದಲ್ಲ.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्ति प्रदक्षिणपदे पदे ॥",
          meaning: {
            en: "Whatever sins there are, even those committed in former births, are destroyed at every step of the circumambulation.",
            kn: "ಹಿಂದಿನ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದವೂ ಸೇರಿದಂತೆ ಯಾವ ಯಾವ ಪಾಪಗಳಿವೆಯೋ, ಅವೆಲ್ಲವೂ ಪ್ರದಕ್ಷಿಣೆಯ ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗುತ್ತವೆ.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
    {
      title: "अभिषेकः",
      titleEn: "Abhisheka of the yajamana with the kalasha water",
      note: "The yajamana sits facing east or north (with his wife); four brahmins (or the purohita) sprinkle him with the water of the kalasha, with mango leaves or darbha, to music and auspicious songs, reciting these verses (Matsya Purana 93.49-54); then he puts on fresh white clothes. Madhvas also recite the Navagraha Sukta and the Graha-pidahara stotra during the abhisheka, as the purohita gives them (Homa-Havana).",
      noteKn: "ಯಜಮಾನನು (ಪತ್ನಿಯೊಡನೆ) ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಾಭಿಮುಖವಾಗಿ ಕುಳಿತುಕೊಳ್ಳುತ್ತಾನೆ; ನಾಲ್ವರು ಬ್ರಾಹ್ಮಣರು (ಅಥವಾ ಪುರೋಹಿತರು) ಮಾವಿನೆಲೆ ಅಥವಾ ದರ್ಭೆಯಿಂದ ಕಲಶಜಲವನ್ನು ಪ್ರೋಕ್ಷಿಸುತ್ತಾ, ವಾದ್ಯ–ಮಂಗಳಗೀತೆಗಳೊಡನೆ ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳುತ್ತಾರೆ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೪೯–೫೪); ನಂತರ ಯಜಮಾನನು ಶುಭ್ರ ಬಿಳಿ ವಸ್ತ್ರ ಧರಿಸುತ್ತಾನೆ. ಮಾಧ್ವರಲ್ಲಿ ಅಭಿಷೇಕ ಕಾಲದಲ್ಲಿ ನವಗ್ರಹಸೂಕ್ತ ಮತ್ತು ಗ್ರಹಪೀಡಾಹರ ಸ್ತೋತ್ರವನ್ನೂ ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ (ಹೋಮ–ಹವನ).",
      verses: [
        {
          text: "सुरास्त्वामभिषिञ्चन्तु ब्रह्मविष्णुमहेश्वराः ।\nवासुदेवो जगन्नाथस्तथा सङ्कर्षणो विभुः ।\nप्रद्युम्नश्चानिरुद्धश्च भवन्तु विजयाय ते ॥",
          meaning: {
            en: "May the gods Brahma, Vishnu and Maheshvara anoint you; may Vasudeva, the lord of the world, the mighty Sankarshana, Pradyumna and Aniruddha be for your victory. (Matsya Purana 93.51)",
            kn: "ಬ್ರಹ್ಮ–ವಿಷ್ಣು–ಮಹೇಶ್ವರರೆಂಬ ದೇವತೆಗಳು ನಿನಗೆ ಅಭಿಷೇಕ ಮಾಡಲಿ; ಜಗನ್ನಾಥ ವಾಸುದೇವ, ವಿಭು ಸಂಕರ್ಷಣ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧರು ನಿನ್ನ ಜಯಕ್ಕಾಗಿ ಇರಲಿ. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೫೧)",
          },
        },
        {
          text: "आखण्डलोऽग्निर्भगवान्यमो वै निर्ऋतिस्तथा ।\nवरुणः पवनश्चैव धनाध्यक्षस्तथा शिवः ।\nब्रह्मणा सहितः शेषो दिक्पालास्त्वामवन्तु ते ॥",
          meaning: {
            en: "May Indra, the lord Agni, Yama, Nirriti, Varuna, Vayu, Kubera the lord of wealth and Shiva, and Shesha with Brahma, the guardians of the directions, protect you. (Matsya Purana 93.52)",
            kn: "ಇಂದ್ರ, ಭಗವಾನ್ ಅಗ್ನಿ, ಯಮ, ನಿರ್ಋತಿ, ವರುಣ, ವಾಯು, ಧನಾಧ್ಯಕ್ಷ ಕುಬೇರ, ಶಿವ, ಬ್ರಹ್ಮನೊಡನೆ ಶೇಷ — ಈ ದಿಕ್ಪಾಲಕರು ನಿನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೫೨)",
          },
        },
        {
          text: "कीर्तिर्लक्ष्मीर्धृतिर्मेधा पुष्टिः श्रद्धा क्रिया मतिः ।\nबुद्धिर्लज्जा वपुः शान्तिस्तुष्टिः कान्तिश्च मातरः ।\nएतास्त्वामभिषिञ्चन्तु धर्मपत्न्यः समागताः ॥",
          meaning: {
            en: "Fame, Lakshmi, Steadfastness, Intelligence, Nourishment, Faith, Action, Thought, Understanding, Modesty, Beauty of form, Peace, Contentment and Radiance, the mothers, the wives of Dharma, gathered here, may they anoint you. (Matsya Purana 93.53)",
            kn: "ಕೀರ್ತಿ, ಲಕ್ಷ್ಮೀ, ಧೃತಿ, ಮೇಧಾ, ಪುಷ್ಟಿ, ಶ್ರದ್ಧಾ, ಕ್ರಿಯಾ, ಮತಿ, ಬುದ್ಧಿ, ಲಜ್ಜಾ, ವಪು, ಶಾಂತಿ, ತುಷ್ಟಿ, ಕಾಂತಿ — ಈ ಧರ್ಮಪತ್ನಿಯರಾದ ಮಾತೃದೇವತೆಗಳು ಇಲ್ಲಿ ಸೇರಿ ನಿನಗೆ ಅಭಿಷೇಕ ಮಾಡಲಿ. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೫೩)",
          },
        },
        {
          text: "आदित्यश्चन्द्रमा भौमो बुधो जीवः सितोऽर्कजः ।\nग्रहास्त्वामभिषिञ्चन्तु राहुः केतुश्च तर्पिताः ॥",
          meaning: {
            en: "May the grahas, the Sun, the Moon, Mars, Mercury, Jupiter, Venus and Saturn, with Rahu and Ketu, now satisfied, anoint you. (Matsya Purana 93.54)",
            kn: "ಸೂರ್ಯ, ಚಂದ್ರ, ಕುಜ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು — ತೃಪ್ತರಾದ ಈ ಗ್ರಹಗಳು ನಿನಗೆ ಅಭಿಷೇಕ ಮಾಡಲಿ. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೫೪)",
          },
        },
      ],
    },
    {
      title: "दानम्",
      titleEn: "The gifts (graha-dana)",
      note: "Honour the ritviks with dakshina. Give to each graha its gift with its mantra (Matsya Purana 93.59-72), or for all of them cows, or gold, or what pleases the guru; the graha grains, the images, gems and clothes are also given (Homa-Havana: grain, image, gem and cloth; give with an honest mind to a worthy person). The gifts of Yajnavalkya Smriti 1.306, close to these, are given at the end of the next section.",
      noteKn: "ಋತ್ವಿಕ್ಕುಗಳಿಗೆ ದಕ್ಷಿಣೆ ಕೊಟ್ಟು ಸತ್ಕರಿಸಿ. ಪ್ರತಿ ಗ್ರಹಕ್ಕೆ ಅದರ ದಾನವನ್ನು ಮಂತ್ರಸಹಿತ ಕೊಡಿ (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೫೯–೭೨), ಅಥವಾ ಎಲ್ಲರಿಗೂ ಗೋವುಗಳು, ಚಿನ್ನ, ಅಥವಾ ಗುರುವಿಗೆ ಪ್ರಿಯವಾದದ್ದು; ಗ್ರಹಧಾನ್ಯ, ಪ್ರತಿಮೆ, ರತ್ನ, ವಸ್ತ್ರಗಳನ್ನೂ ದಾನ ಮಾಡುತ್ತಾರೆ (ಹೋಮ–ಹವನ: ನಿರ್ವಂಚನೆಯಿಂದ ಯೋಗ್ಯರಿಗೆ ಕೊಡಿ). ಇದಕ್ಕೆ ಹತ್ತಿರವಾದ ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೬ರ ದಾನಪಟ್ಟಿ ಮುಂದಿನ ಭಾಗದ ಕೊನೆಯಲ್ಲಿದೆ.",
      verses: [
        {
          text: "सूर्याय कपिलां धेनुं शङ्खं दद्यात्तथेन्दवे ।\nरक्तं धुरन्धरं दद्याद्भौमाय च ककुद्मिनम् ॥",
          meaning: {
            en: "For the Sun one should give a tawny cow, for the Moon a conch, for Mars a red draught-bull with a hump. (Matsya Purana 93.60)",
            kn: "ಸೂರ್ಯನಿಗಾಗಿ ಕಪಿಲ ಹಸು, ಚಂದ್ರನಿಗಾಗಿ ಶಂಖ, ಕುಜನಿಗಾಗಿ ಡುಬ್ಬವುಳ್ಳ ಕೆಂಪು ಎತ್ತನ್ನು ದಾನ ಕೊಡಬೇಕು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೦)",
          },
        },
        {
          text: "बुधाय जातरूपं तु गुरवे पीतवाससी ।\nश्वेताश्वं दैत्यगुरवे कृष्णां गामर्कसूनवे ॥",
          meaning: {
            en: "For Mercury gold, for Jupiter a pair of yellow garments, for Venus, the guru of the daityas, a white horse, for Saturn, the son of the Sun, a black cow. (Matsya Purana 93.61)",
            kn: "ಬುಧನಿಗೆ ಚಿನ್ನ, ಗುರುವಿಗೆ ಹಳದಿ ವಸ್ತ್ರಯುಗ್ಮ, ದೈತ್ಯಗುರು ಶುಕ್ರನಿಗೆ ಬಿಳಿಯ ಕುದುರೆ, ಸೂರ್ಯಪುತ್ರ ಶನಿಗೆ ಕಪ್ಪು ಹಸು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೧)",
          },
        },
        {
          text: "आयसं राहवे दद्यात्केतुभ्यश्छागमुत्तमम् ।\nसुवर्णेन समा कार्या यजमानेन दक्षिणा ॥",
          meaning: {
            en: "For Rahu iron, for the Ketus a fine goat; the yajamana should make the fee to match it in gold. (Matsya Purana 93.62)",
            kn: "ರಾಹುವಿಗೆ ಕಬ್ಬಿಣ, ಕೇತುಗಳಿಗೆ ಉತ್ತಮ ಆಡು; ಯಜಮಾನನು ಅದಕ್ಕೆ ಸಮಾನವಾಗಿ ಸುವರ್ಣದಕ್ಷಿಣೆಯನ್ನು ಕೊಡಬೇಕು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೨)",
          },
        },
        {
          text: "सर्वेषामथवा गावो दातव्या हेमभूषिताः ।\nसुवर्णमथवा दद्याद्गुरुर्वा येन तुष्यति ।\nसमन्त्रेणैव दातव्याः सर्वाः सर्वत्र दक्षिणाः ॥",
          meaning: {
            en: "Or cows adorned with gold may be given for all of them, or gold, or whatever pleases the guru; every gift, everywhere, is to be given with its mantra. (Matsya Purana 93.63)",
            kn: "ಅಥವಾ ಎಲ್ಲ ಗ್ರಹಗಳಿಗೂ ಚಿನ್ನದಿಂದ ಅಲಂಕರಿಸಿದ ಗೋವುಗಳು, ಅಥವಾ ಚಿನ್ನ, ಅಥವಾ ಗುರುವು ಯಾವುದರಿಂದ ಸಂತುಷ್ಟನಾಗುವನೋ ಅದನ್ನು ಕೊಡಬಹುದು; ಎಲ್ಲ ದಕ್ಷಿಣೆಗಳನ್ನೂ ಮಂತ್ರಸಹಿತವಾಗಿಯೇ ಕೊಡಬೇಕು. (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೩)",
          },
        },
        {
          text: "कपिले सर्वदेवानां पूजनीयासि रोहिणी ।\nतीर्थदेवमयी यस्मादतः शान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "O tawny cow, you are to be honoured by all the gods, red one; since you are full of the holy fords and the gods, grant me peace. (Giving the cow, for the Sun) (Matsya Purana 93.64)",
            kn: "ಓ ಕಪಿಲೆಯೇ, ರೋಹಿಣಿಯೇ, ನೀನು ಎಲ್ಲ ದೇವತೆಗಳಿಗೂ ಪೂಜ್ಯಳು; ತೀರ್ಥ–ದೇವತಾಮಯಿಯಾಗಿರುವುದರಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ಸೂರ್ಯನಿಗಾಗಿ ಗೋದಾನ) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೪)",
          },
        },
        {
          text: "पुण्यस्त्वं शङ्ख पुण्यानां मङ्गलानां च मङ्गलम् ।\nविष्णुना विधृतश्चासि ततः शान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "O conch, you are the holiest of holy things and the most auspicious of auspicious things; you are held by Vishnu: so grant me peace. (The conch, for the Moon) (Matsya Purana 93.65)",
            kn: "ಓ ಶಂಖವೇ, ನೀನು ಪುಣ್ಯಗಳಲ್ಲಿ ಪುಣ್ಯ, ಮಂಗಳಗಳಲ್ಲಿ ಮಂಗಳ; ವಿಷ್ಣುವು ನಿನ್ನನ್ನು ಧರಿಸಿದ್ದಾನೆ; ಆದ್ದರಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ಚಂದ್ರನಿಗಾಗಿ ಶಂಖ) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೫)",
          },
        },
        {
          text: "धर्मस्त्वं वृषरूपेण जगदानन्दकारक ।\nअष्टमूर्तेरधिष्ठानमतः शान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "You are Dharma in the form of a bull, giver of joy to the world, the seat of the eight-formed Shiva: so grant me peace. (The bull, for Mars) (Matsya Purana 93.66)",
            kn: "ಜಗತ್ತಿಗೆ ಆನಂದ ನೀಡುವವನೇ, ನೀನು ವೃಷರೂಪದ ಧರ್ಮ, ಅಷ್ಟಮೂರ್ತಿಯಾದ ಶಿವನ ಅಧಿಷ್ಠಾನ; ಆದ್ದರಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ಕುಜನಿಗಾಗಿ ವೃಷಭ) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೬)",
          },
        },
        {
          text: "हिरण्यगर्भगर्भस्त्वं हेमबीजं विभावसोः ।\nअनन्तपुण्यफलदमतः शान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "You are within the womb of Hiranyagarbha, gold, the seed of fire, giver of endless merit: so grant me peace. (Gold, for Mercury) (Matsya Purana 93.67)",
            kn: "ನೀನು ಹಿರಣ್ಯಗರ್ಭನ ಗರ್ಭದಲ್ಲಿರುವ, ಅಗ್ನಿಯ ಬೀಜವಾದ ಚಿನ್ನ, ಅನಂತ ಪುಣ್ಯಫಲ ನೀಡುವುದು; ಆದ್ದರಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ಬುಧನಿಗಾಗಿ ಸುವರ್ಣ) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೭)",
          },
        },
        {
          text: "पीतवस्त्रयुगं यस्माद्वासुदेवस्य वल्लभम् ।\nप्रदानात्तस्य मे विष्णो ह्यतः शान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "Since a pair of yellow garments is dear to Vasudeva, O Vishnu, by my giving it grant me peace. (The yellow cloth, for Jupiter) (Matsya Purana 93.68)",
            kn: "ಹಳದಿ ವಸ್ತ್ರಯುಗ್ಮ ವಾಸುದೇವನಿಗೆ ಪ್ರಿಯವಾದ್ದರಿಂದ, ಓ ವಿಷ್ಣುವೇ, ಅದರ ದಾನದಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ಗುರುವಿಗಾಗಿ ಪೀತವಸ್ತ್ರ) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೮)",
          },
        },
        {
          text: "विष्णुस्त्वमश्वरूपेण यस्मादमृतसम्भवः ।\nचन्द्रार्कवाहनो नित्यमतः शान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "You are Vishnu in the form of a horse, born of the nectar, ever the carrier of the Moon and the Sun: so grant me peace. (The horse, for Venus) (Matsya Purana 93.69)",
            kn: "ನೀನು ಅಶ್ವರೂಪದ ವಿಷ್ಣು, ಅಮೃತದಿಂದ ಹುಟ್ಟಿದವನು, ಸದಾ ಚಂದ್ರ–ಸೂರ್ಯರ ವಾಹನ; ಆದ್ದರಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ಶುಕ್ರನಿಗಾಗಿ ಅಶ್ವ) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೬೯)",
          },
        },
        {
          text: "यस्मात्त्वं पृथिवी सर्वा धेनुः केशवसन्निभा ।\nसर्वपापहरा नित्यमतः शान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "Since you, O cow, are the whole earth, like Keshava, ever removing all sins, grant me peace. (The black cow, for Saturn) (Matsya Purana 93.70)",
            kn: "ಓ ಧೇನುವೇ, ನೀನು ಸಮಗ್ರ ಭೂಮಿ, ಕೇಶವನಂತಿರುವವಳು, ಸದಾ ಎಲ್ಲ ಪಾಪಗಳನ್ನು ಹರಿಸುವವಳು; ಆದ್ದರಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ಶನಿಗಾಗಿ ಕಪ್ಪು ಹಸು) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೭೦)",
          },
        },
        {
          text: "यस्मादायसकर्माणि तवाधीनानि सर्वदा ।\nलाङ्गलाद्यायुधादीनि तस्माच्छान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "Since all works in iron, the plough and the weapons, always depend on you, grant me peace. (Iron, for Rahu) (Matsya Purana 93.71)",
            kn: "ನೇಗಿಲು, ಆಯುಧಗಳು ಮೊದಲಾದ ಕಬ್ಬಿಣದ ಕೆಲಸಗಳೆಲ್ಲ ಸದಾ ನಿನ್ನ ಅಧೀನವಾಗಿರುವುದರಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ರಾಹುವಿಗಾಗಿ ಕಬ್ಬಿಣ) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೭೧)",
          },
        },
        {
          text: "यस्मात्त्वं सर्वयज्ञानामङ्गत्वेन व्यवस्थितः ।\nयानं विभावसोर्नित्यमतः शान्तिं प्रयच्छ मे ॥",
          meaning: {
            en: "Since you stand as a part of all sacrifices and are ever the vehicle of Agni, grant me peace. (The goat, for Ketu) (Matsya Purana 93.72)",
            kn: "ನೀನು ಎಲ್ಲ ಯಜ್ಞಗಳ ಅಂಗವಾಗಿ ನೆಲೆಸಿರುವೆ, ಸದಾ ಅಗ್ನಿಯ ವಾಹನ; ಆದ್ದರಿಂದ ನನಗೆ ಶಾಂತಿಯನ್ನು ಕೊಡು. (ಕೇತುವಿಗಾಗಿ ಆಡು) (ಮತ್ಸ್ಯಪುರಾಣ ೯೩.೭೨)",
          },
        },
      ],
    },
    {
      title: "ग्रहस्तोत्रम्",
      titleEn: "Graha stotras, japa and Vadiraja’s Graha Stotra",
      note: "The graha stotras are read for the pleasure of the Lord and the grahas. This short one by Sri Vadirajatirtha is easy to recite daily. Another well-known one is namah suryaya somaya… (open elsewhere in the library). Reading a stotra of a single graha repeatedly is also said to remove the fault that graha indicates. Japa: the nine graha mantras are repeated 108 times each in a common homa; or by the graha’s dasha-years in thousands (Sun 6,000, Moon 10,000, Mars 7,000, Mercury 17,000, Jupiter 16,000, Venus 20,000, Saturn 19,000, Rahu 18,000, Ketu 7,000, in all 1,20,000), usually done by shrotriya brahmins on one’s behalf; one tenth of the japa as tarpana. Food for the brahmins in the order of the grahas (Yajnavalkya Smriti 1.304: jaggery-rice, payasa, havishya, milk-rice with sali, curd-rice, havishya with flour, meat, variegated rice — the manual of Homa-Havana does not give this list; follow your priest). Gifts (Yajnavalkya Smriti 1.306): a cow, a conch, a bull, gold, cloth, a horse, a black cow, iron, a goat, in the order of the grahas. Honour the ashvattha (Jupiter) and shami (Saturn) trees with a pradakshina.",
      noteKn: "ಗ್ರಹಸ್ತೋತ್ರಗಳನ್ನು ಭಗವಂತ ಮತ್ತು ಗ್ರಹಗಳ ಪ್ರೀತಿಗಾಗಿ ಪಠಿಸುತ್ತಾರೆ. ಶ್ರೀವಾದಿರಾಜತೀರ್ಥರ ಈ ಚಿಕ್ಕ ಸ್ತೋತ್ರವನ್ನು ನಿತ್ಯ ಪಠಿಸಲು ಅನುಕೂಲ. “ನಮಃ ಸೂರ್ಯಾಯ ಸೋಮಾಯ…” ಇನ್ನೊಂದು ಪ್ರಸಿದ್ಧ ಸ್ತೋತ್ರ. ಒಂದೇ ಗ್ರಹದ ಸ್ತೋತ್ರವನ್ನು ಪುನಃ ಪುನಃ ಪಠಿಸಿದರೆ ಆ ಗ್ರಹ ಸೂಚಿಸುವ ದೋಷ ನಿವಾರಣೆ. ಜಪ: ಸಾಮಾನ್ಯ ಹೋಮದಲ್ಲಿ ಒಂಬತ್ತು ಗ್ರಹಮಂತ್ರಗಳನ್ನು ತಲಾ ೧೦೮ ಬಾರಿ; ಅಥವಾ ಆಯಾ ಗ್ರಹದ ದಶಾವರ್ಷ ಸಂಖ್ಯೆಯಷ್ಟು ಸಾವಿರ (ಸೂರ್ಯ ೬,೦೦೦; ಚಂದ್ರ ೧೦,೦೦೦; ಕುಜ ೭,೦೦೦; ಬುಧ ೧೭,೦೦೦; ಗುರು ೧೬,೦೦೦; ಶುಕ್ರ ೨೦,೦೦೦; ಶನಿ ೧೯,೦೦೦; ರಾಹು ೧೮,೦೦೦; ಕೇತು ೭,೦೦೦; ಒಟ್ಟು ೧,೨೦,೦೦೦), ಸಾಮಾನ್ಯವಾಗಿ ಶ್ರೋತ್ರಿಯ ಬ್ರಾಹ್ಮಣರು ಯಜಮಾನನ ಪರವಾಗಿ ಮಾಡುತ್ತಾರೆ; ಜಪದ ದಶಾಂಶ ತರ್ಪಣ. ಬ್ರಾಹ್ಮಣರಿಗೆ ಗ್ರಹಕ್ರಮದಲ್ಲಿ ಭೋಜನ (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೪: ಗುಡಾನ್ನ, ಪಾಯಸ, ಹವಿಷ್ಯ, ಕ್ಷೀರಷಾಷ್ಟಿಕ, ದಧ್ಯನ್ನ, ಹವಿಷ್ಯ ಚೂರ್ಣ, ಮಾಂಸ, ಚಿತ್ರಾನ್ನ — ಹೋಮ–ಹವನದಲ್ಲಿ ಈ ಪಟ್ಟಿ ಇಲ್ಲ; ಪುರೋಹಿತರ ಮಾತಿನಂತೆ ಮಾಡಿ). ದಾನ (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೬): ಗ್ರಹಕ್ರಮದಲ್ಲಿ ಹಸು, ಶಂಖ, ಎತ್ತು, ಚಿನ್ನ, ವಸ್ತ್ರ, ಕುದುರೆ, ಕಪ್ಪುಹಸು, ಕಬ್ಬಿಣ, ಆಡು. ಅಶ್ವತ್ಥ (ಗುರು) ಮತ್ತು ಶಮೀ (ಶನಿ) ವೃಕ್ಷಗಳಿಗೆ ಪ್ರದಕ್ಷಿಣೆ.",
      verses: [
        {
          text: "भास्वान्मे भासयेत्तत्त्वं चन्द्रश्चाह्लादकृद्भवेत् ।\nमङ्गलो मङ्गलं दद्याद्बुधश्च बुधतां दिशेत् ॥",
          meaning: {
            en: "May the Sun make the truth shine in me; may the Moon give delight; may Mars give auspiciousness; may Mercury give wisdom.",
            kn: "ಸೂರ್ಯನು ನನ್ನಲ್ಲಿ ತತ್ತ್ವವನ್ನು ಬೆಳಗಿಸಲಿ; ಚಂದ್ರನು ಆಹ್ಲಾದ ನೀಡಲಿ; ಕುಜನು ಮಂಗಳವನ್ನು ಕೊಡಲಿ; ಬುಧನು ಬುದ್ಧಿಯನ್ನು ದಯಪಾಲಿಸಲಿ.",
          },
        },
        {
          text: "गुरुश्च गुरुतां दद्यात्कविश्च कवितां दिशेत् ।\nशनिश्च शं प्रापयतु केतुः केतुं जयेऽर्पयेत् ॥",
          meaning: {
            en: "May Jupiter give greatness; may Venus give poetic power; may Saturn bring welfare; may Ketu raise the banner of my victory.",
            kn: "ಗುರುವು ಗೌರವವನ್ನು ಕೊಡಲಿ; ಶುಕ್ರನು ಕವಿತಾಶಕ್ತಿಯನ್ನು ಕೊಡಲಿ; ಶನಿಯು ಶುಭವನ್ನು ತರಲಿ; ಕೇತುವು ನನ್ನ ಜಯದ ಪತಾಕೆಯನ್ನು ಹಾರಿಸಲಿ.",
          },
        },
        {
          text: "राहुर्मे रहयेद्रोगं ग्रहाः सन्तु करे ग्रहाः ।\nनवं नवं ममैश्वर्यं दिशन्त्वेते नवग्रहाः ॥",
          meaning: {
            en: "May Rahu take my disease away; may all the grahas take me by the hand; may these nine grahas grant me ever new prosperity.",
            kn: "ರಾಹುವು ನನ್ನ ರೋಗವನ್ನು ಕಳೆಯಲಿ; ಎಲ್ಲ ಗ್ರಹಗಳೂ ಕೈಹಿಡಿದೆತ್ತಲಿ; ಈ ನವಗ್ರಹಗಳು ನನಗೆ ಹೊಸ ಹೊಸ ಐಶ್ವರ್ಯವನ್ನು ಕರುಣಿಸಲಿ.",
          },
        },
        {
          text: "शने दिनमणेः सूनो ह्यनेकगुणसन्मणे ।\nअरिष्टं हर मेऽभीष्टं कुरु मा कुरु सङ्कटम् ॥",
          meaning: {
            en: "O Saturn, son of the Sun, jewel of countless virtues, remove my misfortune, grant my wish and cause me no distress.",
            kn: "ಓ ದಿನಮಣಿಯ ಪುತ್ರನಾದ ಅನೇಕ ಗುಣರತ್ನನಾದ ಶನಿಯೇ, ನನ್ನ ಅರಿಷ್ಟವನ್ನು ಕಳೆ, ಅಭೀಷ್ಟವನ್ನು ಕೊಡು, ಸಂಕಟವನ್ನು ಕೊಡಬೇಡ.",
          },
        },
        {
          text: "हरेरनुग्रहार्थाय शत्रूणां निग्रहाय च ।\nवादिराजयतिप्रोक्तं ग्रहस्तोत्रं सदा पठेत् ॥",
          meaning: {
            en: "For the grace of Hari and for the subduing of enemies, one should always recite this Graha Stotra taught by the saint Vadiraja.",
            kn: "ಶ್ರೀಹರಿಯ ಅನುಗ್ರಹಕ್ಕಾಗಿ ಮತ್ತು ಶತ್ರುಗಳ ನಿಗ್ರಹಕ್ಕಾಗಿ ವಾದಿರಾಜಯತಿಗಳು ಹೇಳಿದ ಈ ಗ್ರಹಸ್ತೋತ್ರವನ್ನು ಸದಾ ಪಠಿಸಬೇಕು.",
          },
        },
        {
          text: "धेनुः शङ्खस्तथानड्वान्हेम वासो हयः क्रमात् ।\nकृष्णा गौरायसं छाग एता वै दक्षिणाः स्मृताः ॥",
          meaning: {
            en: "A cow, a conch, a bull, gold, cloth, a horse, a black cow, iron and a goat, in order, are remembered as the gifts for the grahas. (Yajnavalkya Smriti 1.306)",
            kn: "ಗ್ರಹಕ್ರಮದಲ್ಲಿ ಹಸು, ಶಂಖ, ಎತ್ತು, ಚಿನ್ನ, ವಸ್ತ್ರ, ಕುದುರೆ, ಕಪ್ಪುಹಸು, ಕಬ್ಬಿಣ, ಆಡು — ಇವೇ ದಕ್ಷಿಣೆಗಳೆಂದು ಹೇಳಲಾಗಿದೆ. (ಯಾಜ್ಞವಲ್ಕ್ಯಸ್ಮೃತಿ ೧.೩೦೬)",
          },
        },
      ],
    },
    {
      title: "क्षमापनं समर्पणं च",
      titleEn: "Kshamapana, samarpana and farewell to Agni",
      note: "Ask pardon for any fault, and offer the whole rite to the Lord with water from the hand, saying this homa's own samarpana (it takes the place of अनेन अमुकहोमेन… in \"Homa: Common Procedure\"). Then bid Agni farewell; the fire is left to die down, never put out with water.",
      noteKn: "ಯಾವುದೇ ದೋಷಕ್ಕೆ ಕ್ಷಮೆ ಬೇಡಿ, ಈ ಹೋಮದ ಸಮರ್ಪಣ ವಾಕ್ಯ ಹೇಳುತ್ತಾ (“ಹೋಮವಿಧಿ” ಪಠ್ಯದ “ಅನೇನ ಅಮುಕಹೋಮೇನ…” ಬದಲು) ಕೈಯಿಂದ ನೀರು ಬಿಟ್ಟು ಇಡೀ ಕರ್ಮವನ್ನು ಭಗವಂತನಿಗೆ ಸಮರ್ಪಿಸಿ. ನಂತರ ಅಗ್ನಿಯನ್ನು ವಿಸರ್ಜಿಸಿ; ಅಗ್ನಿಯನ್ನು ನೀರಿನಿಂದ ನಂದಿಸಬಾರದು, ತಾನಾಗಿ ಶಾಂತವಾಗಲಿ.",
      verses: [
        {
          text: "यस्य स्मृत्या च नामोक्त्या तपःपूजाक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥",
          meaning: {
            en: "I bow to Achyuta, by remembering whom and uttering whose name whatever is lacking in austerity, worship and ritual at once becomes complete.",
            kn: "ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಪೂಜೆ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥",
          meaning: {
            en: "Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Narayana.",
            kn: "ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "अनेन नवग्रहहोमेन यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गतः\nआदित्यादिनवग्रहान्तर्गतः श्रीलक्ष्मीनृसिंहः प्रीयताम् । श्रीकृष्णार्पणमस्तु ॥",
          meaning: {
            en: "By this Navagraha homa may Sri Lakshmi-Narasimha, the inner ruler of the Yajnapurusha, who dwells within Mukhyaprana, the beloved of Bharati, and within the nine grahas beginning with the Sun, be pleased. May it be an offering to Sri Krishna.",
            kn: "ಈ ನವಗ್ರಹಹೋಮದಿಂದ ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ, ಆದಿತ್ಯಾದಿ ನವಗ್ರಹಾಂತರ್ಗತನಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನೃಸಿಂಹನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "गच्छ गच्छ सुरश्रेष्ठ देवासुरसुपूजित ।\nयत्र ब्रह्मादयो देवास्तत्र गच्छ हुताशन ॥",
          meaning: {
            en: "Go, go, best of the gods, worshipped by gods and asuras; go, O eater of offerings, to where Brahma and the other gods are.",
            kn: "ದೇವಾಸುರರಿಂದ ಪೂಜಿತನಾದ ಓ ದೇವಶ್ರೇಷ್ಠನೇ, ಹೋಗು; ಓ ಹುತಾಶನನೇ, ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳಿರುವಲ್ಲಿಗೆ ಹೋಗು.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "आवाहनं न जानामि न जानामि विसर्जनम् ।\nपूजां चैव न जानामि क्षमस्व परमेश्वर ॥",
          meaning: {
            en: "I know not how to invoke you, nor how to bid you farewell, nor how to worship you; forgive me, O Supreme Lord.",
            kn: "ಆವಾಹನೆಯನ್ನಾಗಲಿ, ವಿಸರ್ಜನೆಯನ್ನಾಗಲಿ, ಪೂಜಾವಿಧಾನವನ್ನಾಗಲಿ ನಾನು ಅರಿಯೆನು; ಓ ಪರಮೇಶ್ವರ, ನನ್ನನ್ನು ಕ್ಷಮಿಸು.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          text: "कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥",
          meaning: {
            en: "Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Narayana.",
            kn: "ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          text: "अनेन नवग्रहहोमकर्मणा अधिदेवताप्रत्यधिदेवतासहिता आदित्यादिनवग्रहदेवताः प्रीयन्ताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥",
          meaning: {
            en: "By this rite of the Navagraha homa may the nine graha deities beginning with the Sun, with their adhidevatas and pratyadhidevatas, be pleased. Om tat sat: may it be an offering to Brahman.",
            kn: "ಈ ನವಗ್ರಹಹೋಮ ಕರ್ಮದಿಂದ ಅಧಿದೇವತೆ–ಪ್ರತ್ಯಧಿದೇವತೆಗಳ ಸಹಿತ ಆದಿತ್ಯಾದಿ ನವಗ್ರಹದೇವತೆಗಳು ಪ್ರೀತರಾಗಲಿ. ಓಂ ತತ್ಸತ್ ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
  ],
};
