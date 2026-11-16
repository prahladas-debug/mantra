/**
 * Sri Sukta Homa (Lakshmi Homa; in the Madhva manual the Sukrita homa with the Purusha Sukta and
 * the Sri Sukta): the whole rite in order — sankalpa, the agnimukha (from "Homa: Common Procedure"),
 * dhyana and avahana of Lakshmi (Madhva: Lakshmi-Narayana), the Purusha Sukta homa verse by verse
 * (Madhva), the Sri Sukta homa verse by verse, the uttaranga, closing puja and samarpana.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012 (archive.org
 *    20230827_20230827_0721), chapter "Sukrita Homa": the Rigvedic Purusha Sukta of sixteen verses,
 *    each offered sixteen times with ghee (256), the Sri Sukta of fifteen verses, each fifteen times
 *    (225), what the rite is done for.
 *  - The Purusha Sukta in its Rigveda form, RV 10.90.1-16, from GRETIL (Aufrecht), svaras removed; the
 *    meanings follow this app's "Purusha Suktam" (Taittiriya form) verse for verse.
 *  - The Sri Sukta (fifteen riks), the phala-shruti verse that enjoins the daily ghee homa with the
 *    fifteen riks (yah shucih prayato bhutva juhuyad ajyam anvaham), the dhyana sragdhara and the
 *    Lakshmi Gayatri, copied from this app's "Sri Suktam" (collated there against several editions),
 *    so that the readings agree.
 *  - Closing puja and kshamapana from this app's "Daily Puja".
 * No printed Smarta Lakshmi homa manual could be read; the Smarta form here is the Sri Sukta homa that
 * the Sri Sukta's own phala-shruti teaches, with the counts left to the family manual (see contentNote).
 */
import type { Mantra } from '../types';

export const lakshmiHoma: Mantra = {
  id: "lakshmi-homa",
  title: "श्रीसूक्तहोमः (सुकृतहोमः)",
  titleEn: "Sri Sukta Homa (Lakshmi Homa, Sukrita Homa)",
  category: "homa",
  order: 7,
  deity: "Sri Lakshmi (Madhva: with Narayana, by the Purusha Sukta)",
  source: "Madhva: Homa-Havana (Satyanarayanacharya), chapter on the Sukrita homa; Rigveda 10.90 and the Sri Sukta with its phala-shruti",
  summary: "The Lakshmi homa from start to end: sankalpa, the agnimukha, dhyana and avahana of Lakshmi (Madhva: Lakshmi-Narayana), the Purusha Sukta homa with all sixteen Rigvedic verses, each with svaha and offered sixteen times (Madhva), the Sri Sukta homa with all fifteen riks, each with svaha (Madhva fifteen times each), the uttaranga, the closing puja and samarpana.",
  summaryKn: "ಲಕ್ಷ್ಮೀಹೋಮ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ಸಂಕಲ್ಪ, ಅಗ್ನಿಮುಖ, ಲಕ್ಷ್ಮಿಯ (ಮಾಧ್ವ: ಲಕ್ಷ್ಮೀನಾರಾಯಣರ) ಧ್ಯಾನ–ಆವಾಹನೆ, ಋಗ್ವೇದದ ಪುರುಷಸೂಕ್ತದ ಹದಿನಾರೂ ಮಂತ್ರಗಳಿಂದ ಸ್ವಾಹಾಕಾರಸಹಿತ ಹೋಮ — ತಲಾ ಹದಿನಾರು ಬಾರಿ (ಮಾಧ್ವ), ಶ್ರೀಸೂಕ್ತದ ಹದಿನೈದೂ ಋಕ್ಕುಗಳಿಂದ ಸ್ವಾಹಾಕಾರಸಹಿತ ಹೋಮ (ಮಾಧ್ವರಲ್ಲಿ ತಲಾ ಹದಿನೈದು ಬಾರಿ), ಉತ್ತರಾಂಗ, ಉತ್ತರಪೂಜೆ, ಸಮರ್ಪಣೆ.",
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
  ],
  difficulty: "medium",
  completeness: "complete",
  contentNote: "Homas are traditionally done with a trained priest; this text lets the family follow every step. The agnimukha and the uttaranga are done from \"Homa: Common Procedure\"; everything particular to this homa is printed here. The counts are those of the Madhva manual (Homa-Havana). No printed Smarta Lakshmi homa manual could be read: the Smarta form given is the Sri Sukta homa that the Sri Sukta's phala-shruti enjoins, and the number of rounds, the lotus, bilva or payasa offerings and any Lakshmi ashtottara that some families add are left to the family manual. Follow your family manual and purohita where they differ.",
  sections: [
    {
      title: "सुकृतहोमः",
      titleEn: "Before you begin: the Sukrita homa and how it is counted",
      note: "The Purusha Sukta praises the Father of the world, Sri Hari; the Sri Sukta praises the Mother of the world, Lakshmi. Whoever praises the parents of the world with them is blessed, whoever worships with them is fulfilled, and whoever offers the homa with them is a man of great merit (sukrita); so this homa is called the Sukrita homa (Homa-Havana). The Purusha Sukta has sixteen verses in the Rigveda (the Yajurveda forms have eighteen or twenty-one); the homa uses the Rigveda form. Count: with each of the sixteen verses of the Purusha Sukta, sixteen ghee oblations (256 in all); with each of the fifteen verses of the Sri Sukta, fifteen ghee oblations (225 in all). The Sri Sukta asks Lakshmi to drive away Alakshmi, settle in the house and lead one to the Lord. It is done without any wish, for the pleasure of the Lord; sometimes for success in marriage and other fortune, for the release of a departed one, or for expiation. The Sri Sukta itself teaches the homa: whoever, pure and attentive, offers ghee daily with the fifteen riks and recites them, desiring prosperity (its phala-shruti, below). The order of this text: sankalpa; the agnimukha of the Common Procedure; dhyana and avahana; (Madhva) the Purusha Sukta homa; the Sri Sukta homa; the uttaranga; the closing puja; samarpana. Keep ready ghee in plenty; Smarta families also use lotus flowers, bilva leaves or payasa as their manual directs.",
      noteKn: "ಪುರುಷಸೂಕ್ತ ಜಗತ್ಪಿತನಾದ ಶ್ರೀಹರಿಯನ್ನು, ಶ್ರೀಸೂಕ್ತ ಜಗನ್ಮಾತೆಯಾದ ಲಕ್ಷ್ಮಿಯನ್ನು ಕೊಂಡಾಡುತ್ತವೆ. ಇವುಗಳಿಂದ ಜಗದ ತಂದೆ–ತಾಯಿಯರನ್ನು ಸ್ತುತಿಸುವವನು ಧನ್ಯ, ಅರ್ಚಿಸುವವನು ಕೃತಾರ್ಥ, ಹೋಮಿಸುವವನು ಸುಕೃತಿ; ಆದ್ದರಿಂದ ಈ ಹೋಮ ಸುಕೃತಹೋಮ (ಹೋಮ–ಹವನ). ಋಗ್ವೇದದಲ್ಲಿ ಪುರುಷಸೂಕ್ತಕ್ಕೆ ಹದಿನಾರು ಮಂತ್ರಗಳು (ಯಜುರ್ವೇದ ರೂಪಗಳಲ್ಲಿ ಹದಿನೆಂಟು ಅಥವಾ ಇಪ್ಪತ್ತೊಂದು); ಹೋಮದಲ್ಲಿ ಋಗ್ವೇದ ರೂಪ. ಸಂಖ್ಯೆ: ಪುರುಷಸೂಕ್ತದ ಹದಿನಾರು ಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹದಿನಾರು ಆಜ್ಯಾಹುತಿ (ಒಟ್ಟು ೨೫೬); ಶ್ರೀಸೂಕ್ತದ ಹದಿನೈದು ಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹದಿನೈದು ಆಜ್ಯಾಹುತಿ (ಒಟ್ಟು ೨೨೫). ಶ್ರೀಸೂಕ್ತವು ಅಲಕ್ಷ್ಮಿಯನ್ನು ಓಡಿಸಿ, ಮನೆಯಲ್ಲಿ ನೆಲೆಸಿ, ಭಗವಂತನ ಸನಿಹಕ್ಕೆ ಕರೆದೊಯ್ಯೆಂದು ಲಕ್ಷ್ಮಿಯನ್ನು ಬೇಡುತ್ತದೆ. ನಿಷ್ಕಾಮವಾಗಿ ಭಗವತ್ಪ್ರೀತಿಗಾಗಿ ಮಾಡುತ್ತಾರೆ; ಕೆಲವೊಮ್ಮೆ ವಿವಾಹಾದಿ ಭಾಗ್ಯಸಿದ್ಧಿಗಾಗಿ, ಪ್ರೇತಮೋಕ್ಷಕ್ಕಾಗಿ, ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿಯೂ. ಶ್ರೀಸೂಕ್ತವೇ ಈ ಹೋಮವನ್ನು ವಿಧಿಸುತ್ತದೆ: ಶುಚಿಯಾಗಿ ಏಕಾಗ್ರನಾಗಿ ಪ್ರತಿದಿನ ಹದಿನೈದು ಋಕ್ಕುಗಳಿಂದ ಆಜ್ಯಹೋಮ ಮಾಡಿ ಜಪಿಸುವವನಿಗೆ ಶ್ರೀ ಲಭಿಸುತ್ತದೆ (ಅದರ ಫಲಶ್ರುತಿ, ಕೆಳಗೆ). ಈ ಪಠ್ಯದ ಕ್ರಮ: ಸಂಕಲ್ಪ; ಸಾಮಾನ್ಯ ವಿಧಿಯ ಅಗ್ನಿಮುಖ; ಧ್ಯಾನ–ಆವಾಹನೆ; (ಮಾಧ್ವ) ಪುರುಷಸೂಕ್ತ ಹೋಮ; ಶ್ರೀಸೂಕ್ತ ಹೋಮ; ಉತ್ತರಾಂಗ; ಉತ್ತರಪೂಜೆ; ಸಮರ್ಪಣೆ. ಸಾಕಷ್ಟು ತುಪ್ಪ ಸಿದ್ಧವಿರಲಿ; ಸ್ಮಾರ್ತರು ತಮ್ಮ ಪದ್ಧತಿಯಂತೆ ಕಮಲ, ಬಿಲ್ವಪತ್ರೆ ಅಥವಾ ಪಾಯಸವನ್ನೂ ಬಳಸುತ್ತಾರೆ.",
      verses: [
        {
          text: "यः शुचिः प्रयतो भूत्वा जुहुयादाज्यमन्वहम् ।\nसूक्तं पञ्चदशर्चं च श्रीकामः सततं जपेत् ॥",
          meaning: {
            en: "One who longs for prosperity should become pure and self-restrained, offer ghee into the fire every day, and constantly recite this hymn of fifteen ṛks.",
            kn: "ಸಂಪತ್ತನ್ನು ಬಯಸುವವನು ಶುಚಿಯಾಗಿ, ಸಂಯಮದಿಂದ ಇದ್ದು, ಪ್ರತಿದಿನ ಅಗ್ನಿಯಲ್ಲಿ ತುಪ್ಪವನ್ನು ಹೋಮಮಾಡಿ, ಹದಿನೈದು ಋಕ್ಕುಗಳ ಈ ಸೂಕ್ತವನ್ನು ನಿರಂತರವಾಗಿ ಜಪಿಸಬೇಕು.",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Madhva)",
      note: "Do achamana and pranayama, say the deshakala as in the Daily Puja sankalpa, and make this sankalpa with akshata and water. A particular wish (a marriage, the release of a departed one, expiation) may be named before the name of the homa.",
      noteKn: "ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲ ಹೇಳಿ, ಅಕ್ಷತೆ–ನೀರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ವಿಶೇಷ ಉದ್ದೇಶವಿದ್ದರೆ (ವಿವಾಹ, ಪ್ರೇತಮೋಕ್ಷ, ಪ್ರಾಯಶ್ಚಿತ್ತ) ಹೋಮದ ಹೆಸರಿನ ಮೊದಲು ಹೇಳಬಹುದು.",
      when: { tradition: ["madhva"] },
      verses: [
        {
          text: "यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थम्\nश्रीलक्ष्मीनारायणप्रीत्यर्थं पुरुषसूक्तश्रीसूक्ताभ्यां सुकृतहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥",
          meaning: {
            en: "Prompted by Sri Parashurama, the Lord of Harini, who dwells within Mukhyaprana, the beloved of Bharati, and is the inner ruler of the Yajnapurusha, and for his pleasure, for the pleasure of Sri Lakshmi-Narayana, I shall perform the rite called the Sukrita homa with the Purusha Sukta and the Sri Sukta; as its part I shall prepare the sthandila and install the fire.",
            kn: "ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣರ ಪ್ರೀತಿಗಾಗಿ ಪುರುಷಸೂಕ್ತ–ಶ್ರೀಸೂಕ್ತಗಳಿಂದ ಸುಕೃತಹೋಮವೆಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ ಮಾಡಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Smarta)",
      note: "Remember Ganapati (शुक्लाम्बरधरं…), do achamana and pranayama, say the deshakala and make this sankalpa. A particular wish may be named before the name of the homa.",
      noteKn: "ಗಣಪತಿಸ್ಮರಣೆ (“ಶುಕ್ಲಾಂಬರಧರಂ…”), ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ದೇಶಕಾಲ ಹೇಳಿ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ವಿಶೇಷ ಉದ್ದೇಶವನ್ನು ಹೋಮದ ಹೆಸರಿನ ಮೊದಲು ಹೇಳಬಹುದು.",
      when: { tradition: ["smarta"] },
      verses: [
        {
          text: "ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nश्रीमहालक्ष्मीप्रसादसिद्ध्यर्थं श्रीसूक्तेन श्रीसूक्तहोमं करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥",
          meaning: {
            en: "For the removal of all my accumulated sins and for the pleasure of the Supreme Lord, for the grace of Sri Mahalakshmi, I shall perform the Sri Sukta homa with the Sri Sukta; as its part I shall prepare and mark the sthandila and install the fire.",
            kn: "ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ಶ್ರೀಮಹಾಲಕ್ಷ್ಮಿಯ ಪ್ರಸಾದಸಿದ್ಧಿಗಾಗಿ ಶ್ರೀಸೂಕ್ತದಿಂದ ಶ್ರೀಸೂಕ್ತಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
    {
      title: "अग्निमुखम्",
      titleEn: "Agnimukha: do the purvanga (Homa: Common Procedure) up to the ajyabhaga",
      note: "Now do the purvanga as given in \"Homa: Common Procedure\", from the kalasha and punyahavachana up to the ajyabhaga: preparing the sthandila, installing and meditating on the fire, paristarana, purifying the ghee, the fuel, the aghara and ajyabhaga. Madhvas also do the samskaras of Agni and the Vaishnava offerings given there (they include one round of the Purusha Sukta; the sixteen rounds below are the main homa). Smartas then give the four vyahriti offerings. Come back here for the main offerings.",
      noteKn: "“ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿರುವಂತೆ ಕಲಶ–ಪುಣ್ಯಾಹವಾಚನದಿಂದ ಆಜ್ಯಭಾಗದವರೆಗೆ ಪೂರ್ವಾಂಗ ಮಾಡಿ: ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ, ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ–ಧ್ಯಾನ, ಪರಿಸ್ತರಣ, ಆಜ್ಯಸಂಸ್ಕಾರ, ಇಧ್ಮ, ಆಘಾರ, ಆಜ್ಯಭಾಗ. ಮಾಧ್ವರು ಅಲ್ಲಿರುವ ಅಗ್ನಿಸಂಸ್ಕಾರಗಳು ಮತ್ತು ವೈಷ್ಣವ ಆಹುತಿಗಳನ್ನೂ ಮಾಡುತ್ತಾರೆ (ಅವುಗಳಲ್ಲಿ ಪುರುಷಸೂಕ್ತದ ಒಂದು ಆವೃತ್ತಿ ಇದೆ; ಕೆಳಗಿನ ಹದಿನಾರು ಆವೃತ್ತಿಗಳು ಪ್ರಧಾನ ಹೋಮ). ಸ್ಮಾರ್ತರು ನಂತರ ನಾಲ್ಕು ವ್ಯಾಹೃತಿ ಆಹುತಿಗಳನ್ನು ನೀಡುತ್ತಾರೆ. ಪ್ರಧಾನ ಆಹುತಿಗಳಿಗಾಗಿ ಇಲ್ಲಿಗೆ ಹಿಂತಿರುಗಿ.",
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
      title: "ध्यानम् आवाहनं च",
      titleEn: "Dhyana, avahana and puja",
      note: "On the kalasha (or the saligrama and an image of Lakshmi) meditate on Lakshmi with the verse या सा पद्मासनस्था… (both halves), invoke her (Madhva: Lakshmi with Narayana) with the vyahritis and worship with gandha, akshata, red flowers or lotuses, kumkuma, dhupa, dipa and naivedya (payasa, fruit) as in the Daily Puja. Recite the Lakshmi Gayatri (ten, twenty-eight or a hundred and eight times) before the homa.",
      noteKn: "ಕಲಶದಲ್ಲಿ (ಅಥವಾ ಸಾಲಿಗ್ರಾಮ ಮತ್ತು ಲಕ್ಷ್ಮೀಪ್ರತಿಮೆಯಲ್ಲಿ) “ಯಾ ಸಾ ಪದ್ಮಾಸನಸ್ಥಾ…” (ಎರಡು ಭಾಗಗಳು) ಶ್ಲೋಕದಿಂದ ಲಕ್ಷ್ಮಿಯನ್ನು ಧ್ಯಾನಿಸಿ, ವ್ಯಾಹೃತಿಗಳಿಂದ ಆವಾಹಿಸಿ (ಮಾಧ್ವ: ನಾರಾಯಣಸಹಿತ ಲಕ್ಷ್ಮಿ), ನಿತ್ಯಪೂಜೆಯಂತೆ ಗಂಧ, ಅಕ್ಷತೆ, ಕೆಂಪು ಹೂವು ಅಥವಾ ಕಮಲ, ಕುಂಕುಮ, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ (ಪಾಯಸ, ಫಲ) ಅರ್ಪಿಸಿ. ಹೋಮಕ್ಕೆ ಮೊದಲು ಲಕ್ಷ್ಮೀಗಾಯತ್ರಿಯನ್ನು (೧೦, ೨೮ ಅಥವಾ ೧೦೮ ಬಾರಿ) ಜಪಿಸಿ.",
      verses: [
        {
          text: "या सा पद्मासनस्था विपुलकटितटी पद्मपत्रायताक्षी ।\nगम्भीरावर्तनाभिः स्तनभरनमिता शुभ्रवस्त्रोत्तरीया ॥",
          meaning: {
            en: "She who is seated on a lotus, broad of hip, with eyes long as lotus petals, with a deep navel, bowed by the fullness of her bosom, wearing a white upper garment (continued in the next verse).",
            kn: "ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ವಿಶಾಲವಾದ ಸೊಂಟವುಳ್ಳ, ಕಮಲದಳದಂತೆ ನೀಳವಾದ ಕಣ್ಣುಳ್ಳ, ಆಳವಾದ ನಾಭಿಯುಳ್ಳ, ಸ್ತನಭಾರದಿಂದ ಬಾಗಿದ, ಬಿಳಿಯ ಉತ್ತರೀಯವನ್ನು ಧರಿಸಿದ ಆ ದೇವಿ (ಮುಂದಿನ ಶ್ಲೋಕದೊಂದಿಗೆ ಅರ್ಥ ಪೂರ್ಣವಾಗುತ್ತದೆ).",
          },
        },
        {
          text: "लक्ष्मीर्दिव्यैर्गजेन्द्रैर्मणिगणखचितैः स्नापिता हेमकुम्भैः ।\nनित्यं सा पद्महस्ता मम वसतु गृहे सर्वमाङ्गल्ययुक्ता ॥",
          meaning: {
            en: "that Lakṣmī, bathed by celestial elephants from golden pots set with jewels, holding a lotus and endowed with every auspiciousness: may she dwell in my home for ever.",
            kn: "ದಿವ್ಯ ಗಜರಾಜರು ರತ್ನಖಚಿತವಾದ ಚಿನ್ನದ ಕಲಶಗಳಿಂದ ಅಭಿಷೇಕ ಮಾಡುವ, ಕೈಯಲ್ಲಿ ಕಮಲ ಹಿಡಿದ, ಸಕಲ ಮಂಗಳಗಳಿಂದ ಕೂಡಿದ ಆ ಲಕ್ಷ್ಮೀದೇವಿಯು ನನ್ನ ಮನೆಯಲ್ಲಿ ಸದಾ ನೆಲೆಸಲಿ.",
          },
        },
        {
          text: "ॐ भूर्भुवः स्वः । श्रीलक्ष्मीनारायणौ अस्मिन्कलशे आवाहयामि स्थापयामि पूजयामि ॥",
          meaning: {
            en: "Om, earth, sky, heaven: I invoke Sri Lakshmi and Narayana into this kalasha; I install them and worship them.",
            kn: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣರನ್ನು ಈ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
        {
          text: "ॐ भूर्भुवः स्वः । श्रीमहालक्ष्मीम् अस्मिन्कलशे आवाहयामि स्थापयामि पूजयामि ॥",
          meaning: {
            en: "Om, earth, sky, heaven: I invoke Sri Mahalakshmi into this kalasha; I install her and worship her.",
            kn: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಶ್ರೀಮಹಾಲಕ್ಷ್ಮಿಯನ್ನು ಈ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          text: "महालक्ष्मी च विद्महे विष्णुपत्नी च धीमहि ।\nतन्नो लक्ष्मीः प्रचोदयात् ॥",
          meaning: {
            en: "We know Mahālakṣmī; we meditate on the consort of Viṣṇu. May that Lakṣmī inspire and guide us.",
            kn: "ಮಹಾಲಕ್ಷ್ಮಿಯನ್ನು ನಾವು ಅರಿಯುತ್ತೇವೆ; ವಿಷ್ಣುಪತ್ನಿಯನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಆ ಲಕ್ಷ್ಮೀದೇವಿಯು ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.",
          },
        },
      ],
    },
    {
      title: "पुरुषसूक्तहोमः",
      titleEn: "The Purusha Sukta homa (Rigveda 10.90)",
      note: "Madhva (Sukrita homa): with each of the sixteen verses of the Rigvedic Purusha Sukta offer ghee sixteen times (256 oblations in all; Homa-Havana). The Purusha is the Lord, Narayana, the Father of the world; offer meditating on him with Lakshmi. Yajurvedi families who use the Taittiriya form open \"Purusha Suktam\" in the library.",
      noteKn: "ಮಾಧ್ವ (ಸುಕೃತಹೋಮ): ಋಗ್ವೇದದ ಪುರುಷಸೂಕ್ತದ ಹದಿನಾರು ಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದಲೂ ಹದಿನಾರು ಬಾರಿ ಆಜ್ಯಾಹುತಿ (ಒಟ್ಟು ೨೫೬; ಹೋಮ–ಹವನ). ಪುರುಷನು ಜಗತ್ಪಿತನಾದ ನಾರಾಯಣ; ಲಕ್ಷ್ಮೀಸಹಿತನಾದ ಅವನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಹೋಮಿಸಿ. ತೈತ್ತಿರೀಯ ರೂಪವನ್ನು ಬಳಸುವ ಯಜುರ್ವೇದಿಗಳು ಗ್ರಂಥಾಲಯದ “ಪುರುಷಸೂಕ್ತಂ” ತೆರೆಯಿರಿ.",
      when: { tradition: ["madhva"] },
      verses: [
        {
          n: 1,
          text: "सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "The Supreme Person has a thousand heads, a thousand eyes and a thousand feet. Pervading the earth on every side, He stands beyond it by ten fingers’ breadth, that is, beyond all measure. (Rigveda 10.90.1) Svaha; this is for the Purusha, not for me.",
            kn: "ಪರಮಪುರುಷನಿಗೆ ಸಾವಿರಾರು ತಲೆಗಳು, ಸಾವಿರಾರು ಕಣ್ಣುಗಳು, ಸಾವಿರಾರು ಪಾದಗಳು. ಅವನು ಭೂಮಿಯನ್ನು ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ವ್ಯಾಪಿಸಿ, ಅದನ್ನು ಮೀರಿ ಹತ್ತು ಅಂಗುಲ ಮೇಲೆ ನಿಂತಿದ್ದಾನೆ; ಅಂದರೆ ಅವನು ಜಗತ್ತಿಗಿಂತಲೂ ಮಿಗಿಲಾದವನು. (ಋಗ್ವೇದ ೧೦.೯೦.೧) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 2,
          text: "पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।\nउतामृतत्वस्येशानो यदन्नेनातिरोहति ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "All this is the Puruṣa alone: whatever has been and whatever is yet to be. He is the lord of immortality, and He rises far above all that grows by food. (Rigveda 10.90.2) Svaha; this is for the Purusha, not for me.",
            kn: "ಹಿಂದೆ ಇದ್ದದ್ದು, ಮುಂದೆ ಬರುವುದು, ಈ ಎಲ್ಲವೂ ಆ ಪರಮಪುರುಷನೇ. ಅವನು ಅಮೃತತ್ವಕ್ಕೆ (ಮೋಕ್ಷಕ್ಕೆ) ಒಡೆಯನು; ಅನ್ನದಿಂದ ಬೆಳೆಯುವ ಈ ಜಗತ್ತನ್ನು ಮೀರಿ ನಿಂತವನು. (ಋಗ್ವೇದ ೧೦.೯೦.೨) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 3,
          text: "एतावानस्य महिमातो ज्यायांश्च पूरुषः ।\nपादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "Such is His glory, yet the Puruṣa is greater still. All beings are but one quarter of Him; three quarters of Him are immortal, in the highest heaven. (Rigveda 10.90.3) Svaha; this is for the Purusha, not for me.",
            kn: "ಇದೆಲ್ಲವೂ ಅವನ ಮಹಿಮೆ; ಆದರೆ ಪುರುಷನು ಇದಕ್ಕಿಂತಲೂ ಹಿರಿಯನು. ಸಮಸ್ತ ಜೀವಿಗಳು ಅವನ ಒಂದು ಪಾದ ಮಾತ್ರ; ಉಳಿದ ಮೂರು ಪಾದಗಳು ಅಮೃತರೂಪವಾಗಿ ಪರಮಪದದಲ್ಲಿ ಬೆಳಗುತ್ತವೆ. (ಋಗ್ವೇದ ೧೦.೯೦.೩) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 4,
          text: "त्रिपादूर्ध्व उदैत्पुरुषः पादोऽस्येहाभवत्पुनः ।\nततो विष्वङ्व्यक्रामत्साशनानशने अभि ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "With three quarters the Puruṣa rose on high; one quarter of Him comes to be here again and again as the world. From that He spread out everywhere, into all that eats and all that does not. (Rigveda 10.90.4) Svaha; this is for the Purusha, not for me.",
            kn: "ಮೂರು ಪಾದಗಳಿಂದ ಪುರುಷನು ಮೇಲೆ ನೆಲೆಸಿದನು; ಅವನ ಒಂದು ಪಾದವೇ ಇಲ್ಲಿ ಮತ್ತೆ ಮತ್ತೆ ಜಗತ್ತಾಗಿ ಮೂಡುತ್ತದೆ. ಅಲ್ಲಿಂದ ಅವನು ಆಹಾರ ಸೇವಿಸುವ ಜೀವಿಗಳಲ್ಲೂ ಸೇವಿಸದ ಜಡವಸ್ತುಗಳಲ್ಲೂ ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿದನು. (ಋಗ್ವೇದ ೧೦.೯೦.೪) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 5,
          text: "तस्माद्विराळजायत विराजो अधि पूरुषः ।\nस जातो अत्यरिच्यत पश्चाद्भूमिमथो पुरः ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "From Him the cosmic form, Virāṭ, was born, and within Virāṭ the Puruṣa dwelt. Once manifest, He extended beyond it, and then brought forth the earth and the bodies of beings. (Rigveda 10.90.5) Svaha; this is for the Purusha, not for me.",
            kn: "ಅವನಿಂದ ವಿರಾಟ್ ಎಂಬ ಬ್ರಹ್ಮಾಂಡರೂಪ ಹುಟ್ಟಿತು; ಆ ವಿರಾಟನಲ್ಲಿ ಪುರುಷನು ಅಂತರ್ಯಾಮಿಯಾಗಿ ನೆಲೆಸಿದನು. ಹಾಗೆ ಪ್ರಕಟನಾದ ಅವನು ಅದನ್ನೂ ಮೀರಿ ನಿಂತು, ಬಳಿಕ ಭೂಮಿಯನ್ನೂ ಜೀವಿಗಳ ಶರೀರಗಳನ್ನೂ ಸೃಷ್ಟಿಸಿದನು. (ಋಗ್ವೇದ ೧೦.೯೦.೫) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 6,
          text: "यत्पुरुषेण हविषा देवा यज्ञमतन्वत ।\nवसन्तो अस्यासीदाज्यं ग्रीष्म इध्मः शरद्धविः ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "When the gods performed a sacrifice with the Puruṣa Himself as the offering, spring was its ghee, summer its firewood, and autumn its oblation. (Rigveda 10.90.6) Svaha; this is for the Purusha, not for me.",
            kn: "ದೇವತೆಗಳು ಪುರುಷನನ್ನೇ ಹವಿಸ್ಸಾಗಿ ಭಾವಿಸಿ ಯಜ್ಞವನ್ನು ನಡೆಸಿದಾಗ, ವಸಂತ ಋತುವೇ ಅದರ ತುಪ್ಪವಾಯಿತು, ಗ್ರೀಷ್ಮ ಋತುವೇ ಸಮಿಧೆಯಾಯಿತು, ಶರದೃತುವೇ ಹವಿಸ್ಸಾಯಿತು. (ಋಗ್ವೇದ ೧೦.೯೦.೬) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 7,
          text: "तं यज्ञं बर्हिषि प्रौक्षन्पुरुषं जातमग्रतः ।\nतेन देवा अयजन्त साध्या ऋषयश्च ये ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "On the sacred grass they consecrated that Puruṣa, born before all, as the sacrifice itself. Through Him the gods, the Sādhyas and the sages offered worship. (Rigveda 10.90.7) Svaha; this is for the Purusha, not for me.",
            kn: "ಎಲ್ಲಕ್ಕಿಂತ ಮೊದಲು ಪ್ರಕಟನಾದ ಆ ಯಜ್ಞರೂಪಿ ಪುರುಷನನ್ನು ದರ್ಭೆಯ ಮೇಲೆ ಇರಿಸಿ ಪ್ರೋಕ್ಷಿಸಿದರು. ಅವನ ಮೂಲಕವೇ ದೇವತೆಗಳೂ ಸಾಧ್ಯರೂ ಋಷಿಗಳೂ ಯಜ್ಞವನ್ನು ಮಾಡಿದರು. (ಋಗ್ವೇದ ೧೦.೯೦.೭) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 8,
          text: "तस्माद्यज्ञात्सर्वहुतः सम्भृतं पृषदाज्यम् ।\nपशून्तांश्चक्रे वायव्यानारण्यान्ग्राम्याश्च ये ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "From that sacrifice in which everything was offered, the ghee mixed with curds was gathered. From it He made the creatures of the air, and the animals of the forest and of the village. (Rigveda 10.90.8) Svaha; this is for the Purusha, not for me.",
            kn: "ಸರ್ವವನ್ನೂ ಅರ್ಪಿಸಿದ ಆ ಯಜ್ಞದಿಂದ ಮೊಸರು ಬೆರೆತ ತುಪ್ಪ (ಪೃಷದಾಜ್ಯ) ಸಂಗ್ರಹವಾಯಿತು. ಅದರಿಂದ ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವ ಜೀವಿಗಳನ್ನೂ, ಕಾಡಿನ ಮತ್ತು ಊರಿನ ಪ್ರಾಣಿಗಳನ್ನೂ ಭಗವಂತನು ಸೃಷ್ಟಿಸಿದನು. (ಋಗ್ವೇದ ೧೦.೯೦.೮) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 9,
          text: "तस्माद्यज्ञात्सर्वहुत ऋचः सामानि जज्ञिरे ।\nछन्दांसि जज्ञिरे तस्माद्यजुस्तस्मादजायत ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "From that all-offering sacrifice were born the Ṛk verses and the Sāman chants; from it the metres were born, and from it the Yajus arose. (Rigveda 10.90.9) Svaha; this is for the Purusha, not for me.",
            kn: "ಸರ್ವಹುತವಾದ ಆ ಯಜ್ಞದಿಂದ ಋಙ್ಮಂತ್ರಗಳೂ ಸಾಮಗಾನಗಳೂ ಹುಟ್ಟಿದವು. ಅದರಿಂದಲೇ ಛಂದಸ್ಸುಗಳು ಹುಟ್ಟಿದವು; ಯಜುರ್ಮಂತ್ರಗಳೂ ಅದರಿಂದಲೇ ಉದಿಸಿದವು. (ಋಗ್ವೇದ ೧೦.೯೦.೯) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 10,
          text: "तस्मादश्वा अजायन्त ये के चोभयादतः ।\nगावो ह जज्ञिरे तस्मात्तस्माज्जाता अजावयः ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "From it were born horses and all animals with teeth in both jaws. From it were born the cows, and from it the goats and sheep. (Rigveda 10.90.10) Svaha; this is for the Purusha, not for me.",
            kn: "ಅದರಿಂದ ಕುದುರೆಗಳೂ, ಮೇಲೆ ಕೆಳಗೆ ಎರಡೂ ಸಾಲು ಹಲ್ಲುಗಳಿರುವ ಪ್ರಾಣಿಗಳೂ ಹುಟ್ಟಿದವು. ಗೋವುಗಳು ಅದರಿಂದಲೇ ಹುಟ್ಟಿದವು; ಆಡು ಕುರಿಗಳೂ ಅದರಿಂದಲೇ ಜನಿಸಿದವು. (ಋಗ್ವೇದ ೧೦.೯೦.೧೦) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 11,
          text: "यत्पुरुषं व्यदधुः कतिधा व्यकल्पयन् ।\nमुखं किमस्य कौ बाहू का ऊरू पादा उच्येते ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "When they envisioned the Puruṣa, in how many ways did they conceive Him? What was His mouth, what His arms, and what are called His thighs and feet? (Rigveda 10.90.11) Svaha; this is for the Purusha, not for me.",
            kn: "ದೇವತೆಗಳು ಪುರುಷನನ್ನು ಧ್ಯಾನದಲ್ಲಿ ಕಲ್ಪಿಸಿಕೊಂಡಾಗ ಎಷ್ಟು ಬಗೆಯಾಗಿ ಕಂಡರು? ಅವನ ಮುಖ ಯಾವುದು? ಬಾಹುಗಳು ಯಾವುವು? ತೊಡೆಗಳು, ಪಾದಗಳು ಯಾವುವು ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ? (ಋಗ್ವೇದ ೧೦.೯೦.೧೧) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 12,
          text: "ब्राह्मणोऽस्य मुखमासीद्बाहू राजन्यः कृतः ।\nऊरू तदस्य यद्वैश्यः पद्भ्यां शूद्रो अजायत ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "The Brāhmaṇa was His mouth, the Kṣatriya was made His arms, the Vaiśya was His thighs, and from His feet the Śūdra was born. Thus all orders of society arise from the one Lord, like the limbs of a single body. (Rigveda 10.90.12) Svaha; this is for the Purusha, not for me.",
            kn: "ಬ್ರಾಹ್ಮಣನು ಅವನ ಮುಖವಾದನು; ಕ್ಷತ್ರಿಯನು ಅವನ ಬಾಹುಗಳಾದನು; ವೈಶ್ಯನು ಅವನ ತೊಡೆಗಳಾದನು; ಪಾದಗಳಿಂದ ಶೂದ್ರನು ಹುಟ್ಟಿದನು. ಹೀಗೆ ಸಮಾಜದ ಎಲ್ಲ ವರ್ಗಗಳೂ ಒಬ್ಬನೇ ಭಗವಂತನಿಂದ ಹುಟ್ಟಿ, ಒಂದೇ ಶರೀರದ ಅಂಗಗಳಂತೆ ಇವೆ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೨) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 13,
          text: "चन्द्रमा मनसो जातश्चक्षोः सूर्यो अजायत ।\nमुखादिन्द्रश्चाग्निश्च प्राणाद्वायुरजायत ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "The moon was born from His mind and the sun from His eyes; Indra and Agni came from His mouth, and Vāyu from His breath. (Rigveda 10.90.13) Svaha; this is for the Purusha, not for me.",
            kn: "ಅವನ ಮನಸ್ಸಿನಿಂದ ಚಂದ್ರನು ಹುಟ್ಟಿದನು; ಕಣ್ಣುಗಳಿಂದ ಸೂರ್ಯನು ಹುಟ್ಟಿದನು. ಮುಖದಿಂದ ಇಂದ್ರನೂ ಅಗ್ನಿಯೂ, ಪ್ರಾಣದಿಂದ ವಾಯುವೂ ಜನಿಸಿದರು. (ಋಗ್ವೇದ ೧೦.೯೦.೧೩) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 14,
          text: "नाभ्या आसीदन्तरिक्षं शीर्ष्णो द्यौः समवर्तत ।\nपद्भ्यां भूमिर्दिशः श्रोत्रात्तथा लोकाँ अकल्पयन् ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "From His navel came the mid-region, and from His head the heavens took shape; from His feet came the earth and from His ears the directions. In this way the worlds were fashioned. (Rigveda 10.90.14) Svaha; this is for the Purusha, not for me.",
            kn: "ಅವನ ನಾಭಿಯಿಂದ ಅಂತರಿಕ್ಷವೂ, ಶಿರಸ್ಸಿನಿಂದ ದ್ಯುಲೋಕವೂ ಉಂಟಾದವು. ಪಾದಗಳಿಂದ ಭೂಮಿಯೂ, ಕಿವಿಗಳಿಂದ ದಿಕ್ಕುಗಳೂ ಹುಟ್ಟಿದವು. ಹೀಗೆ ಲೋಕಗಳು ರೂಪುಗೊಂಡವು. (ಋಗ್ವೇದ ೧೦.೯೦.೧೪) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 15,
          text: "सप्तास्यासन्परिधयस्त्रिः सप्त समिधः कृताः ।\nदेवा यद्यज्ञं तन्वाना अबध्नन्पुरुषं पशुम् ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "That sacrifice had seven enclosing sticks and thrice seven fuel-sticks, when the gods, unfolding it, bound the Puruṣa as its offering. (Rigveda 10.90.15) Svaha; this is for the Purusha, not for me.",
            kn: "ಆ ಯಜ್ಞಕ್ಕೆ ಏಳು ಪರಿಧಿಗಳೂ ಇಪ್ಪತ್ತೊಂದು ಸಮಿಧೆಗಳೂ ಇದ್ದವು. ಯಜ್ಞವನ್ನು ವಿಸ್ತರಿಸುತ್ತಿದ್ದ ದೇವತೆಗಳು ಪುರುಷನನ್ನೇ ಯಜ್ಞಪಶುವಾಗಿ ಭಾವಿಸಿ ಧ್ಯಾನಿಸಿದರು. (ಋಗ್ವೇದ ೧೦.೯೦.೧೫) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 16,
          text: "यज्ञेन यज्ञमयजन्त देवास्तानि धर्माणि प्रथमान्यासन् ।\nते ह नाकं महिमानः सचन्त यत्र पूर्वे साध्याः सन्ति देवाः ॥\nस्वाहा । पुरुषायेदं न मम ॥",
          meaning: {
            en: "The gods worshipped the Lord, who is Sacrifice itself, by means of sacrifice; these were the first of all dharmas. Those great souls reach the highest heaven, where the ancient Sādhyas and gods abide. (Rigveda 10.90.16) Svaha; this is for the Purusha, not for me.",
            kn: "ದೇವತೆಗಳು ಯಜ್ಞಸ್ವರೂಪನಾದ ಭಗವಂತನನ್ನು ಯಜ್ಞದಿಂದಲೇ ಆರಾಧಿಸಿದರು; ಅವೇ ಮೊದಲ ಧರ್ಮಗಳಾದವು. ಹಾಗೆ ಆರಾಧಿಸುವ ಮಹಾತ್ಮರು ಹಿಂದಿನ ಸಾಧ್ಯರೂ ದೇವತೆಗಳೂ ನೆಲೆಸಿರುವ ಉನ್ನತ ಲೋಕವನ್ನು ಸೇರುತ್ತಾರೆ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೬) ಸ್ವಾಹಾ; ಇದು ಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "श्रीसूक्तहोमः",
      titleEn: "The Sri Sukta homa",
      note: "With each of the fifteen riks of the Sri Sukta offer ghee: Madhva, fifteen times each (225 oblations in all; Homa-Havana). Smarta: once each, or as many rounds as your family manual gives (the phala-shruti asks only that the fifteen riks be offered with ghee); families that offer lotuses, bilva leaves or payasa offer one with each rik, dipped in ghee. Meditate on Lakshmi as the Mother of the world, who drives away Alakshmi and leads the household to the Lord.",
      noteKn: "ಶ್ರೀಸೂಕ್ತದ ಹದಿನೈದು ಋಕ್ಕುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದಲೂ ಆಜ್ಯಾಹುತಿ: ಮಾಧ್ವ — ತಲಾ ಹದಿನೈದು ಬಾರಿ (ಒಟ್ಟು ೨೨೫; ಹೋಮ–ಹವನ). ಸ್ಮಾರ್ತ — ತಲಾ ಒಮ್ಮೆ, ಅಥವಾ ನಿಮ್ಮ ಪದ್ಧತಿ ಹೇಳುವಷ್ಟು ಆವೃತ್ತಿ (ಫಲಶ್ರುತಿ ಹದಿನೈದು ಋಕ್ಕುಗಳಿಂದ ಆಜ್ಯಹೋಮವನ್ನಷ್ಟೇ ಹೇಳುತ್ತದೆ); ಕಮಲ, ಬಿಲ್ವ ಅಥವಾ ಪಾಯಸ ಹೋಮಿಸುವವರು ಪ್ರತಿ ಋಕ್ಕಿಗೆ ಒಂದನ್ನು ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿ ಹೋಮಿಸುತ್ತಾರೆ. ಅಲಕ್ಷ್ಮಿಯನ್ನು ಓಡಿಸಿ ಮನೆಯನ್ನು ಭಗವಂತನ ಬಳಿಗೆ ಕರೆದೊಯ್ಯುವ ಜಗನ್ಮಾತೆ ಲಕ್ಷ್ಮಿಯನ್ನು ಧ್ಯಾನಿಸಿ.",
      verses: [
        {
          n: 1,
          text: "हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम् ।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "O Jātavedas (Agni), bring to me Lakṣmī: golden in hue, the remover of sorrow, wearing garlands of gold and silver, delightful as the moon and radiant as gold. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಓ ಜಾತವೇದನೇ (ಅಗ್ನಿದೇವನೇ), ಬಂಗಾರದ ಬಣ್ಣದವಳು, ದುಃಖಗಳನ್ನು ಹರಿಸುವವಳು, ಚಿನ್ನ ಬೆಳ್ಳಿಯ ಹಾರಗಳನ್ನು ಧರಿಸಿದವಳು, ಚಂದ್ರನಂತೆ ಆಹ್ಲಾದಕರಳು, ಸುವರ್ಣಮಯಿಯಾದ ಲಕ್ಷ್ಮೀದೇವಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 2,
          text: "तां म आवह जातवेदो लक्ष्मीमनपगामिनीम् ।\nयस्यां हिरण्यं विन्देयं गामश्वं पुरुषानहम् ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "O Jātavedas, bring to me that Lakṣmī who never departs, by whose grace I may gain gold, cattle, horses and people around me. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಓ ಜಾತವೇದನೇ, ಎಂದೂ ನನ್ನನ್ನು ಬಿಟ್ಟುಹೋಗದ ಆ ಲಕ್ಷ್ಮೀದೇವಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ. ಅವಳ ಕೃಪೆಯಿಂದ ನಾನು ಚಿನ್ನ, ಗೋವುಗಳು, ಕುದುರೆಗಳು ಮತ್ತು ಬಂಧುಜನರನ್ನು ಪಡೆಯುವಂತಾಗಲಿ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 3,
          text: "अश्वपूर्वां रथमध्यां हस्तिनादप्रबोधिनीम् ।\nश्रियं देवीमुपह्वये श्रीर्मा देवी जुषताम् ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "I invoke the goddess Śrī, whose procession has horses in front and chariots in the middle, and whose coming is announced by the trumpeting of elephants. May the goddess Śrī be gracious to me. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಮುಂದೆ ಕುದುರೆಗಳು, ನಡುವೆ ರಥ, ಆನೆಗಳ ಘೀಳಿಡುವಿಕೆಯಿಂದ ತನ್ನ ಆಗಮನವನ್ನು ಸಾರುವ ಶ್ರೀದೇವಿಯನ್ನು ನಾನು ಆಹ್ವಾನಿಸುತ್ತೇನೆ. ಆ ಶ್ರೀದೇವಿ ನನ್ನ ಮೇಲೆ ಪ್ರಸನ್ನಳಾಗಲಿ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 4,
          text: "कां सोस्मितां हिरण्यप्राकारामार्द्रां ज्वलन्तीं तृप्तां तर्पयन्तीम् ।\nपद्मेस्थितां पद्मवर्णां तामिहोपह्वये श्रियम् ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "I invoke here Śrī, who is bliss itself, gently smiling, enclosed in gold, tender with compassion, shining, ever content and contenting her devotees, seated on a lotus and lotus-hued. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಆನಂದಸ್ವರೂಪಿಣಿ, ಮಂದಹಾಸ ಬೀರುವವಳು, ಚಿನ್ನದ ಪ್ರಾಕಾರದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಕರುಣೆಯಿಂದ ಆರ್ದ್ರಳಾದವಳು, ತೇಜಸ್ಸಿನಿಂದ ಬೆಳಗುವವಳು, ತಾನು ತೃಪ್ತಳಾಗಿ ಭಕ್ತರನ್ನೂ ತೃಪ್ತಿಪಡಿಸುವವಳು, ಕಮಲದಲ್ಲಿ ಕುಳಿತವಳು, ಕಮಲದ ಬಣ್ಣದವಳು ಆದ ಶ್ರೀದೇವಿಯನ್ನು ನಾನು ಇಲ್ಲಿಗೆ ಆಹ್ವಾನಿಸುತ್ತೇನೆ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 5,
          text: "चन्द्रां प्रभासां यशसा ज्वलन्तीं श्रियं लोके देवजुष्टामुदाराम् ।\nतां पद्मिनीमीं शरणमहं प्रपद्येऽलक्ष्मीर्मे नश्यतां त्वां वृणे ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "I take refuge in Śrī, lovely as the moon, brilliant, blazing with glory, honoured by the gods in the world, generous and holding the lotus. I choose you, Mother; may my misfortune be destroyed. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಚಂದ್ರನಂತೆ ಸುಂದರಳು, ಪ್ರಕಾಶಮಾನಳು, ಕೀರ್ತಿಯಿಂದ ಬೆಳಗುವವಳು, ದೇವತೆಗಳಿಂದ ಪೂಜಿತಳು, ಉದಾರಳು, ಕಮಲಧಾರಿಣಿಯಾದ ಶ್ರೀದೇವಿಗೆ ನಾನು ಶರಣಾಗುತ್ತೇನೆ. ತಾಯೇ, ನಿನ್ನನ್ನೇ ಆರಿಸಿಕೊಳ್ಳುತ್ತೇನೆ; ನನ್ನ ದಾರಿದ್ರ್ಯವು (ಅಲಕ್ಷ್ಮಿ) ನಾಶವಾಗಲಿ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 6,
          text: "आदित्यवर्णे तपसोऽधिजातो वनस्पतिस्तव वृक्षोऽथ बिल्वः ।\nतस्य फलानि तपसा नुदन्तु मायान्तरायाश्च बाह्या अलक्ष्मीः ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "O Goddess radiant as the sun, from your austerity the bilva, king of trees, was born. By your power may its fruits drive away the obstacles of ignorance within and misfortune without. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಸೂರ್ಯನಂತೆ ಪ್ರಕಾಶಿಸುವ ತಾಯೇ, ನಿನ್ನ ತಪಸ್ಸಿನಿಂದ ವೃಕ್ಷರಾಜನಾದ ಬಿಲ್ವವೃಕ್ಷ ಹುಟ್ಟಿತು. ಅದರ ಹಣ್ಣುಗಳು ನಿನ್ನ ಅನುಗ್ರಹದಿಂದ ನನ್ನೊಳಗಿನ ಅಜ್ಞಾನದ ಅಡ್ಡಿಗಳನ್ನೂ ಹೊರಗಿನ ದಾರಿದ್ರ್ಯವನ್ನೂ ದೂರಮಾಡಲಿ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 7,
          text: "उपैतु मां देवसखः कीर्तिश्च मणिना सह ।\nप्रादुर्भूतोऽस्मि राष्ट्रेऽस्मिन् कीर्तिमृद्धिं ददातु मे ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "May the friend of the gods (Kubera) come to me together with Kīrti (fame) and precious jewels. I am born in this land; may he grant me fame and prosperity. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ದೇವತೆಗಳ ಸ್ನೇಹಿತನಾದ ಕುಬೇರನೂ ಕೀರ್ತಿದೇವತೆಯೂ ರತ್ನಸಹಿತವಾಗಿ ನನ್ನ ಬಳಿಗೆ ಬರಲಿ. ನಾನು ಈ ನಾಡಿನಲ್ಲಿ ಹುಟ್ಟಿದ್ದೇನೆ; ನನಗೆ ಕೀರ್ತಿಯನ್ನೂ ಸಮೃದ್ಧಿಯನ್ನೂ ಕರುಣಿಸಲಿ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 8,
          text: "क्षुत्पिपासामलां ज्येष्ठामलक्ष्मीं नाशयाम्यहम् ।\nअभूतिमसमृद्धिं च सर्वां निर्णुद मे गृहात् ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "I drive away Alakṣmī, the elder sister, who brings hunger, thirst and impurity. O Goddess, cast out from my home all want and lack of plenty. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಹಸಿವು, ಬಾಯಾರಿಕೆ, ಮಾಲಿನ್ಯಗಳನ್ನು ತರುವ ಜ್ಯೇಷ್ಠಾ ಎಂಬ ಅಲಕ್ಷ್ಮಿಯನ್ನು ನಾನು ನಾಶಪಡಿಸುತ್ತೇನೆ. ತಾಯೇ, ಬಡತನವನ್ನೂ ಅಭಾವವನ್ನೂ ನನ್ನ ಮನೆಯಿಂದ ಸಂಪೂರ್ಣವಾಗಿ ಓಡಿಸು. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 9,
          text: "गन्धद्वारां दुराधर्षां नित्यपुष्टां करीषिणीम् ।\nईश्वरीं सर्वभूतानां तामिहोपह्वये श्रियम् ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "I invoke here Śrī, who is known by her fragrance, who cannot be overcome, who is ever abundant, rich in herds, and the sovereign of all beings. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಸುಗಂಧದಿಂದ ಗುರುತಿಸಲ್ಪಡುವವಳು, ಯಾರಿಂದಲೂ ಜಯಿಸಲಾಗದವಳು, ಸದಾ ಸಮೃದ್ಧಳು, ಗೋಸಂಪತ್ತಿನಿಂದ ತುಂಬಿದವಳು, ಸಕಲ ಜೀವಿಗಳಿಗೂ ಒಡತಿಯಾದ ಶ್ರೀದೇವಿಯನ್ನು ನಾನು ಇಲ್ಲಿಗೆ ಆಹ್ವಾನಿಸುತ್ತೇನೆ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 10,
          text: "मनसः काममाकूतिं वाचः सत्यमशीमहि ।\nपशूनां रूपमन्नस्य मयि श्रीः श्रयतां यशः ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "May we attain the wishes and resolves of the mind and truth in our speech. May Śrī dwell in me as thriving herds, plentiful food and good name. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಮನಸ್ಸಿನ ಆಸೆಗಳೂ ಸಂಕಲ್ಪಗಳೂ ಈಡೇರಲಿ; ಮಾತಿನಲ್ಲಿ ಸತ್ಯ ನೆಲೆಸಲಿ. ಗೋಸಂಪತ್ತು, ಅನ್ನಸಮೃದ್ಧಿ ಮತ್ತು ಕೀರ್ತಿಯ ರೂಪದಲ್ಲಿ ಶ್ರೀದೇವಿ ನನ್ನಲ್ಲಿ ನೆಲೆಸಲಿ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 11,
          text: "कर्दमेन प्रजाभूता मयि सम्भव कर्दम ।\nश्रियं वासय मे कुले मातरं पद्ममालिनीम् ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "O Kardama, through you Lakṣmī is blessed with offspring; dwell with me, O Kardama. Make Śrī, the Mother adorned with a lotus garland, dwell in my family. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಓ ಕರ್ದಮನೇ, ನಿನ್ನಿಂದ ಲಕ್ಷ್ಮೀದೇವಿ ಸಂತಾನವತಿಯಾದಳು; ನೀನು ನನ್ನಲ್ಲಿ ನೆಲೆಸು. ಕಮಲಮಾಲೆಯನ್ನು ಧರಿಸಿದ ಜಗನ್ಮಾತೆ ಶ್ರೀದೇವಿಯನ್ನು ನನ್ನ ಕುಲದಲ್ಲಿ ನೆಲೆಸುವಂತೆ ಮಾಡು. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 12,
          text: "आपः सृजन्तु स्निग्धानि चिक्लीत वस मे गृहे ।\nनि च देवीं मातरं श्रियं वासय मे कुले ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "May the waters bring forth gentle, nourishing abundance. O Ciklīta, dwell in my home, and make the divine Mother Śrī dwell in my family. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಜಲದೇವತೆಗಳು ಸ್ನಿಗ್ಧವಾದ, ಪೋಷಕವಾದ ಸಮೃದ್ಧಿಯನ್ನು ಉಂಟುಮಾಡಲಿ. ಓ ಚಿಕ್ಲೀತನೇ, ನನ್ನ ಮನೆಯಲ್ಲಿ ನೆಲೆಸು; ದೇವಿಯಾದ ತಾಯಿ ಶ್ರೀದೇವಿಯನ್ನೂ ನನ್ನ ಕುಲದಲ್ಲಿ ನೆಲೆಸುವಂತೆ ಮಾಡು. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 13,
          text: "आर्द्रां पुष्करिणीं पुष्टिं पिङ्गलां पद्ममालिनीम् ।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "O Jātavedas, bring to me Lakṣmī: tender with compassion, dwelling in the lotus-pond, giver of nourishment, golden-tawny, garlanded with lotuses, delightful as the moon and radiant as gold. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಓ ಜಾತವೇದನೇ, ಕರುಣೆಯಿಂದ ಆರ್ದ್ರಳು, ಕಮಲಸರೋವರದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಪುಷ್ಟಿಯನ್ನು ಕೊಡುವವಳು, ಹೊಂಬಣ್ಣದವಳು, ಕಮಲಮಾಲೆ ಧರಿಸಿದವಳು, ಚಂದ್ರನಂತೆ ಆಹ್ಲಾದಕರಳು, ಸುವರ್ಣಮಯಿಯಾದ ಲಕ್ಷ್ಮಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 14,
          text: "आर्द्रां यः करिणीं यष्टिं सुवर्णां हेममालिनीम् ।\nसूर्यां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "O Jātavedas, bring to me Lakṣmī: tender with compassion, a staff of support to her devotees, fair of form, wearing a golden garland, brilliant as the sun and radiant as gold. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಓ ಜಾತವೇದನೇ, ಕರುಣೆಯಿಂದ ಆರ್ದ್ರಳು, ಭಕ್ತರಿಗೆ ಊರುಗೋಲಿನಂತೆ ಆಧಾರವಾದವಳು, ಸುಂದರ ವರ್ಣದವಳು, ಚಿನ್ನದ ಹಾರ ಧರಿಸಿದವಳು, ಸೂರ್ಯನಂತೆ ತೇಜಸ್ವಿನಿ, ಸುವರ್ಣಮಯಿಯಾದ ಲಕ್ಷ್ಮಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
        {
          n: 15,
          text: "तां म आवह जातवेदो लक्ष्मीमनपगामिनीम् ।\nयस्यां हिरण्यं प्रभूतं गावो दास्योऽश्वान्विन्देयं पुरुषानहम् ॥\nस्वाहा । श्रियै इदं न मम ॥",
          meaning: {
            en: "O Jātavedas, bring to me that Lakṣmī who never departs, by whose grace I may gain gold in abundance, cows, servants, horses and people around me. Svaha; this is for Sri (Lakshmi), not for me.",
            kn: "ಓ ಜಾತವೇದನೇ, ಎಂದೂ ಬಿಟ್ಟುಹೋಗದ ಆ ಲಕ್ಷ್ಮೀದೇವಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ. ಅವಳ ಕೃಪೆಯಿಂದ ನಾನು ಹೇರಳವಾದ ಚಿನ್ನ, ಗೋವುಗಳು, ಸೇವಕರು, ಕುದುರೆಗಳು ಮತ್ತು ಬಂಧುಜನರನ್ನು ಪಡೆಯುವಂತಾಗಲಿ. ಸ್ವಾಹಾ; ಇದು ಶ್ರೀದೇವಿಗೆ, ನನ್ನದಲ್ಲ.",
          },
        },
      ],
    },
    {
      title: "उत्तराङ्गम्",
      titleEn: "Uttaranga: do the Common Procedure from the svishtakrit to the closing prayers",
      note: "After the last main oblation, do the uttaranga as given in full in \"Homa: Common Procedure\", for your tradition: the svishtakrit (offered with a little of each material used in the main homa), the prayaschitta offerings, the purnahuti and vasordhara, the samsrava, the marjana, the agni upasthana, the raksha and the closing prayers. Keep the samarpana and the farewell to Agni for the end of this text, after the closing puja. For the svishtakrit offer a little of the ghee (and of the lotuses or payasa, if used).",
      noteKn: "ಕೊನೆಯ ಪ್ರಧಾನ ಆಹುತಿಯ ನಂತರ “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿರುವಂತೆ ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ಉತ್ತರಾಂಗ ಮಾಡಿ: ಸ್ವಿಷ್ಟಕೃತ್ (ಪ್ರಧಾನ ಹೋಮದ ಪ್ರತಿ ದ್ರವ್ಯದ ಸ್ವಲ್ಪ ಭಾಗದಿಂದ), ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ಪೂರ್ಣಾಹುತಿ–ವಸೋರ್ಧಾರಾ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ಅಗ್ನ್ಯುಪಸ್ಥಾನ, ರಕ್ಷಾಧಾರಣ, ಸಮಾಪ್ತಿ ಪ್ರಾರ್ಥನೆಗಳು. ಸಮರ್ಪಣೆ ಮತ್ತು ಅಗ್ನಿವಿಸರ್ಜನೆಯನ್ನು ಉತ್ತರಪೂಜೆಯ ನಂತರ, ಈ ಪಠ್ಯದ ಕೊನೆಯಲ್ಲಿ ಮಾಡಿ. ಸ್ವಿಷ್ಟಕೃತ್‌ಗೆ ಸ್ವಲ್ಪ ತುಪ್ಪ (ಕಮಲ ಅಥವಾ ಪಾಯಸ ಬಳಸಿದ್ದರೆ ಅದರ ಸ್ವಲ್ಪ).",
      verses: [
        {
          text: "उत्तराङ्गम् — स्विष्टकृदादि ॥",
          meaning: {
            en: "The uttaranga, beginning with the svishtakrit. (A heading: do these steps from \"Homa: Common Procedure\".)",
            kn: "ಸ್ವಿಷ್ಟಕೃತ್‌ನಿಂದ ಆರಂಭವಾಗುವ ಉತ್ತರಾಂಗ. (ಶೀರ್ಷಿಕೆ: ಈ ಹಂತಗಳನ್ನು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಿಂದ ಮಾಡಿ.)",
          },
        },
      ],
    },
    {
      title: "उत्तरपूजा — नीराजनम्",
      titleEn: "Closing puja: arati",
      note: "Worship Lakshmi (Madhva: Lakshmi-Narayana) once more with dhupa, dipa and naivedya; sprinkle the family and the house with the kalasha water and give it as tirtha. Wave the lamp (mangalarati) before the deity.",
      noteKn: "ಲಕ್ಷ್ಮಿಗೆ (ಮಾಧ್ವ: ಲಕ್ಷ್ಮೀನಾರಾಯಣರಿಗೆ) ಮತ್ತೆ ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ ಅರ್ಪಿಸಿ; ಕಲಶಜಲವನ್ನು ಮನೆಯವರಿಗೂ ಮನೆಗೂ ಪ್ರೋಕ್ಷಿಸಿ ತೀರ್ಥವಾಗಿ ಕೊಡಿ. ದೇವತೆಗೆ ಮಂಗಳಾರತಿ ಬೆಳಗಿ.",
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
          text: "अनेन सुकृतहोमेन यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गतः\nश्रीलक्ष्मीनारायणः प्रीयताम् । श्रीकृष्णार्पणमस्तु ॥",
          meaning: {
            en: "By this Sukrita homa may Sri Lakshmi-Narayana, the inner ruler of the Yajnapurusha, who dwells within Mukhyaprana, the beloved of Bharati, be pleased. May it be an offering to Sri Krishna.",
            kn: "ಈ ಸುಕೃತಹೋಮದಿಂದ ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.",
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
          text: "अनेन श्रीसूक्तहोमकर्मणा श्रीमहालक्ष्मीः प्रीयताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥",
          meaning: {
            en: "By this rite of the Sri Sukta homa may Sri Mahalakshmi be pleased. Om tat sat: may it be an offering to Brahman.",
            kn: "ಈ ಶ್ರೀಸೂಕ್ತಹೋಮ ಕರ್ಮದಿಂದ ಶ್ರೀಮಹಾಲಕ್ಷ್ಮಿಯು ಪ್ರೀತಳಾಗಲಿ. ಓಂ ತತ್ಸತ್ ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
  ],
};
