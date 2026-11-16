/**
 * Ayushya Homa and the birthday (vardhanti, varshavriddhi) rite: the whole rite in order — the day,
 * sankalpa, the agnimukha (from "Homa: Common Procedure"), the dhyana of Dhanvantari, the main
 * offerings (Madhva: the durva homa to Dhanvantari and the durva homa with the Tryambaka mantra;
 * Smarta: the Ayushya Sukta offered with ghee and the Tryambaka mantra), the uttaranga, closing puja
 * and samarpana; then the small vardhapana puja anyone can do at home, and what to avoid.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012 (archive.org
 *    20230827_20230827_0721), chapter "Ayushya Homa (Janmadinada acharane)": the birth-star, the four
 *    kinds of Ayushya homa, the durva homa (four blades dipped in milk and ghee; or dipped in honey,
 *    ghee and curd with the Mrityunjaya mantra, 1000, 108 or 28), the vardhapana with its sankalpa
 *    and the guru's leave, the sixteen deities and their invocation formulas (printed in full there),
 *    their prayers, the sesame-jaggery-milk sip, the six forbidden acts.
 *  - Madhva: Tantrasara-sangraha 4.94 (dhyana of Dhanvantari in the moon), 4.102 (the durva homa).
 *  - The Prayoga-parijata and the Dharmasindhu, as quoted in Homa-Havana.
 *  - Smarta: the Ayushya Suktam (recited and offered with ghee at the Ayushya homa) as in this app's
 *    "Ayushya Suktam" (stotranidhi and stotrasamhita, which agree), each verse offered with svaha;
 *    the Tryambaka mantra RV 7.59.12. The Sringeri manuscript "Ayushya Homa Vidhi" (archive.org
 *    itql_09-ayushya-homa-vidhi-...) was consulted but its scan could not be read.
 *  - Closing puja and kshamapana from this app's "Daily Puja".
 */
import type { Mantra } from '../types';

export const ayushyaHoma: Mantra = {
  id: "ayushya-homa",
  title: "आयुष्यहोमः वर्धापनविधिश्च",
  titleEn: "Ayushya Homa and the Birthday Rite (Vardhapana)",
  category: "homa",
  order: 8,
  deity: "Dhanvantari and Mrityunjaya (the Lord who gives life); Markandeya and the other chiranjivis",
  source: "Madhva: Homa-Havana (Satyanarayanacharya), Tantrasara-sangraha 4.94 and 4.102; Prayoga-parijata and Dharmasindhu as quoted; Smarta: the Ayushya Sukta",
  summary: "The rite for long life on the birth-star or birthday, from start to end: the day, sankalpa, the agnimukha, the dhyana of Dhanvantari, the main offerings (Madhva: the durva homa to Dhanvantari, four blades dipped in milk and ghee, and the durva homa with the Tryambaka mantra; Smarta: the eight Ayushya Sukta mantras with ghee and the Tryambaka mantra), the uttaranga, closing puja and samarpana; then the small vardhapana puja anyone can do at home (the sixteen deities invoked on heaps of akshata, their prayers, milk with sesame and jaggery) and what to avoid on the day.",
  summaryKn: "ಜನ್ಮನಕ್ಷತ್ರ ಅಥವಾ ಜನ್ಮದಿನದಂದು ಆಯುಸ್ಸಿಗಾಗಿ ಮಾಡುವ ಕ್ರಿಯೆ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ದಿನ, ಸಂಕಲ್ಪ, ಅಗ್ನಿಮುಖ, ಧನ್ವಂತರಿ ಧ್ಯಾನ, ಪ್ರಧಾನ ಆಹುತಿಗಳು (ಮಾಧ್ವ: ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ಧನ್ವಂತರಿಗೆ ಹೋಮ ಮತ್ತು ತ್ರ್ಯಂಬಕ ಮಂತ್ರದಿಂದ ದೂರ್ವಾಹೋಮ; ಸ್ಮಾರ್ತ: ಆಯುಷ್ಯಸೂಕ್ತದ ಎಂಟು ಮಂತ್ರಗಳಿಂದ ಆಜ್ಯಹೋಮ ಮತ್ತು ತ್ರ್ಯಂಬಕ ಮಂತ್ರ), ಉತ್ತರಾಂಗ, ಉತ್ತರಪೂಜೆ, ಸಮರ್ಪಣೆ; ನಂತರ ಮನೆಯಲ್ಲಿ ಯಾರಾದರೂ ಮಾಡಬಹುದಾದ ಚಿಕ್ಕ ವರ್ಧಾಪನ ಪೂಜೆ (ಅಕ್ಷತೆಯ ರಾಶಿಗಳಲ್ಲಿ ಹದಿನಾರು ದೇವತೆಗಳ ಆವಾಹನೆ, ಪ್ರಾರ್ಥನೆ, ಎಳ್ಳು–ಬೆಲ್ಲದ ಹಾಲು) ಮತ್ತು ಆ ದಿನ ವರ್ಜ್ಯವಾದವು.",
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
  completeness: "partial",
  contentNote: "Homas are traditionally done with a trained priest; this text lets the family follow every step. The agnimukha and the uttaranga are done from \"Homa: Common Procedure\"; everything particular to this homa is printed here. Still missing: the Dhanvantari mantra itself, which the Madhva manuals leave to the guru (the durva homa with the Tryambaka mantra is given in full instead); the vardhapana prayers to Ashvatthama, Kripa, Prahlada, Bhanu and Shashthi-devi and the second Markandeya verse, whose lines are broken in the one scan of the Homa-Havana (their invocations are given); and a printed Smarta Ayushya homa manual (the Sringeri manuscript consulted could not be read), so the Smarta counts are left to the family manual. Follow your family manual and purohita where they differ.",
  sections: [
    {
      title: "जन्मदिनम्",
      titleEn: "The day: birth-star, birth-tithi and the four kinds of homa",
      note: "The time for the Ayushya homa is the birthday, and that is not the calendar date. By the panchanga it is the birth-star in the birth-month, or the birth-tithi. Madhva usage, and the Prayoga-parijata, give the janma-nakshatra: the birth-star, the birth-month and the birth-day of the week are an auspicious time (parvakala), and Sri Madhvacharya enjoins the Ayushya homa \"on the birth-star\". The Dharmasindhu gives the janma-tithi: the rite is done every month for a year on the birth-tithi and afterwards every year on it, and where the tithi is in doubt, the day on which the birth-star also falls is taken; some families follow this. If the birth-star falls on an Ekadashi or a pitru-tithi (a day of shraddha), the rite is done on the next day. The Ayushya homa is of four kinds: Dhanvantari durva-ayushya homa, durva-ayushya charu homa, Mrityunjaya homa and Tryambaka-mantra homa (see \"Mrityunjaya Homa\"). The Tantrasara teaches the Dhanvantari form: with four durva blades at a time, dipped in milk and ghee, daily or on the birth-star; if not monthly, then once a year in the birth-month on the birth-star. The order of this text: sankalpa; the agnimukha of the Common Procedure; the dhyana and avahana of Dhanvantari; the main offerings; the uttaranga; the closing puja; samarpana. Then the vardhapana puja, done on every birthday with or without the homa. Keep ready durva in bundles of four, milk and ghee (and honey, ghee and curd for the Mrityunjaya durva homa), ghee for the Ayushya Sukta, and a kalasha.",
      noteKn: "ಆಯುಷ್ಯ ಹೋಮಕ್ಕೆ ವಿಹಿತಕಾಲ ಜನ್ಮದಿನ; ಇದು ಕ್ಯಾಲೆಂಡರ್ ದಿನಾಂಕವಲ್ಲ; ಪಂಚಾಂಗದಂತೆ ಜನ್ಮಮಾಸದ ಜನ್ಮನಕ್ಷತ್ರ ಅಥವಾ ಜನ್ಮತಿಥಿ. ಮಾಧ್ವ ಪದ್ಧತಿ ಮತ್ತು ಪ್ರಯೋಗಪಾರಿಜಾತ ಜನ್ಮನಕ್ಷತ್ರವನ್ನು ಹೇಳುತ್ತವೆ: ಜನ್ಮನಕ್ಷತ್ರ, ಜನ್ಮಮಾಸ, ಜನ್ಮವಾರ ಪರ್ವಕಾಲ; ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು “ಜನ್ಮನಕ್ಷತ್ರ ಏವ ವಾ” ಎಂದು ಜನ್ಮನಕ್ಷತ್ರದಂದು ಆಯುಷ್ಯಹೋಮ ವಿಧಿಸಿದ್ದಾರೆ. ಧರ್ಮಸಿಂಧು ಜನ್ಮತಿಥಿಯನ್ನು ಹೇಳುತ್ತದೆ: ಒಂದು ವರ್ಷ ಪ್ರತಿ ತಿಂಗಳೂ ಜನ್ಮತಿಥಿಯಂದು, ನಂತರ ಪ್ರತಿ ವರ್ಷವೂ ಅದೇ ತಿಥಿಯಂದು; ತಿಥಿ ಎರಡು ದಿನ ಬಂದರೆ ಜನ್ಮನಕ್ಷತ್ರ ಸೇರಿದ ದಿನ; ಕೆಲವು ಕುಟುಂಬಗಳು ಹೀಗೆ ಮಾಡುತ್ತವೆ. ಜನ್ಮನಕ್ಷತ್ರ ಏಕಾದಶಿ ಅಥವಾ ಪಿತೃತಿಥಿ (ಶ್ರಾದ್ಧದಿನ)ಯಂದು ಬಂದರೆ ಮರುದಿನ ಮಾಡಿ. ಆಯುಷ್ಯ ಹೋಮ ನಾಲ್ಕು ಬಗೆ: ಧಾನ್ವಂತರ ದೂರ್ವಾಯುಷ್ಯ ಹೋಮ, ದೂರ್ವಾಯುಷ್ಯ ಚರುಹೋಮ, ಮೃತ್ಯುಂಜಯ ಹೋಮ, ತ್ರ್ಯಂಬಕಮಂತ್ರ ಹೋಮ (“ಮೃತ್ಯುಂಜಯ ಹೋಮ” ನೋಡಿ). ತಂತ್ರಸಾರವು ಧಾನ್ವಂತರ ರೂಪವನ್ನು ಹೇಳುತ್ತದೆ: ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ, ಪ್ರತಿದಿನ ಅಥವಾ ಜನ್ಮನಕ್ಷತ್ರದಂದು; ಮಾಸಿಕ ಸಾಧ್ಯವಾಗದಿದ್ದರೆ ವರ್ಷಕ್ಕೊಮ್ಮೆ ಜನ್ಮಮಾಸದ ಜನ್ಮನಕ್ಷತ್ರದಂದಾದರೂ. ಈ ಪಠ್ಯದ ಕ್ರಮ: ಸಂಕಲ್ಪ; ಸಾಮಾನ್ಯ ವಿಧಿಯ ಅಗ್ನಿಮುಖ; ಧನ್ವಂತರಿಯ ಧ್ಯಾನ–ಆವಾಹನೆ; ಪ್ರಧಾನ ಆಹುತಿಗಳು; ಉತ್ತರಾಂಗ; ಉತ್ತರಪೂಜೆ; ಸಮರ್ಪಣೆ. ನಂತರ ಹೋಮವಿರಲಿ ಇಲ್ಲದಿರಲಿ ಪ್ರತಿ ಜನ್ಮದಿನದಂದು ಮಾಡುವ ವರ್ಧಾಪನ ಪೂಜೆ. ನಾಲ್ಕು ನಾಲ್ಕರ ಗರಿಕೆ ಕಟ್ಟುಗಳು, ಹಾಲು–ತುಪ್ಪ (ಮೃತ್ಯುಂಜಯ ದೂರ್ವಾಹೋಮಕ್ಕೆ ಜೇನು–ತುಪ್ಪ–ಮೊಸರು), ಆಯುಷ್ಯಸೂಕ್ತಕ್ಕೆ ತುಪ್ಪ, ಕಲಶ ಸಿದ್ಧವಿರಲಿ.",
      verses: [
        {
          text: "आयुर्विवृद्धये नित्यं जन्मनक्षत्र एव वा ।\nचतुश्चतुर्भिर्दूर्वाभिः क्षीराज्याक्ताभिरिष्यते ॥",
          meaning: {
            en: "For increase of life, daily or on the birth-star, the offering is made with four durva blades at a time, dipped in milk and ghee. (Tantrasara-sangraha 4.102)",
            kn: "ಆಯುಸ್ಸಿನ ವೃದ್ಧಿಗಾಗಿ ಪ್ರತಿದಿನ ಅಥವಾ ಜನ್ಮನಕ್ಷತ್ರದಂದು, ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ಹೋಮ ಮಾಡಬೇಕು. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೪.೧೦೨)",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Madhva)",
      note: "Do achamana and pranayama, say the deshakala (with the birth-star) as in the Daily Puja sankalpa, and make this sankalpa with akshata and water. For a child or another person, say अस्य (with the name and star) for मम.",
      noteKn: "ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲ (ಜನ್ಮನಕ್ಷತ್ರಸಹಿತ) ಹೇಳಿ, ಅಕ್ಷತೆ–ನೀರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಮಗುವಿಗಾಗಿ ಅಥವಾ ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ” (ಹೆಸರು, ನಕ್ಷತ್ರದೊಡನೆ).",
      when: { tradition: ["madhva"] },
      verses: [
        {
          text: "यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थम्\nमम आयुरभिवृद्ध्यर्थं श्रीधन्वन्तरिप्रीत्यर्थं दूर्वायुष्यहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥",
          meaning: {
            en: "Prompted by Sri Parashurama, the Lord of Harini, who dwells within Mukhyaprana, the beloved of Bharati, and is the inner ruler of the Yajnapurusha, and for his pleasure: for the increase of my life and for the pleasure of Sri Dhanvantari, I shall perform the rite called the durva Ayushya homa; as its part I shall prepare the sthandila and install the fire.",
            kn: "ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ: ನನ್ನ ಆಯುಸ್ಸಿನ ಅಭಿವೃದ್ಧಿಗಾಗಿ, ಶ್ರೀಧನ್ವಂತರಿಯ ಪ್ರೀತಿಗಾಗಿ ದೂರ್ವಾಯುಷ್ಯಹೋಮವೆಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ ಮಾಡಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Smarta)",
      note: "Remember Ganapati (शुक्लाम्बरधरं…), do achamana and pranayama, say the deshakala (with the birth-star) and make this sankalpa. For a child or another person, say अस्य (with the name and star) for मम.",
      noteKn: "ಗಣಪತಿಸ್ಮರಣೆ, ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ದೇಶಕಾಲ (ಜನ್ಮನಕ್ಷತ್ರಸಹಿತ) ಹೇಳಿ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಮಗುವಿಗಾಗಿ ಅಥವಾ ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ” (ಹೆಸರು, ನಕ್ಷತ್ರದೊಡನೆ).",
      when: { tradition: ["smarta"] },
      verses: [
        {
          text: "ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nमम आयुरारोग्याभिवृद्ध्यर्थम् आयुष्यहोमं करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥",
          meaning: {
            en: "For the removal of all my accumulated sins and for the pleasure of the Supreme Lord, for the increase of my life and health, I shall perform the Ayushya homa; as its part I shall prepare and mark the sthandila and install the fire.",
            kn: "ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ನನ್ನ ಆಯುಸ್ಸು–ಆರೋಗ್ಯಗಳ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಆಯುಷ್ಯಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.",
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
      title: "धन्वन्तरिध्यानम्",
      titleEn: "Dhyana and avahana of Dhanvantari",
      note: "Meditate on Dhanvantari in the circle of the moon within yourself (the Tantrasara: first the moon in oneself, then the Lord in it), invoke him into the kalasha with the vyahritis and worship him with gandha, akshata, tulasi, dhupa, dipa and naivedya as in the Daily Puja.",
      noteKn: "ತನ್ನೊಳಗಿನ ಚಂದ್ರಮಂಡಲದಲ್ಲಿ ಧನ್ವಂತರಿಯನ್ನು ಧ್ಯಾನಿಸಿ (ತಂತ್ರಸಾರ: ಮೊದಲು ತನ್ನೊಳಗೆ ಚಂದ್ರಮಂಡಲ, ಅದರಲ್ಲಿ ಭಗವಂತ), ವ್ಯಾಹೃತಿಗಳಿಂದ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸಿ, ನಿತ್ಯಪೂಜೆಯಂತೆ ಗಂಧ, ಅಕ್ಷತೆ, ತುಳಸಿ, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯಗಳಿಂದ ಪೂಜಿಸಿ.",
      verses: [
        {
          text: "चन्द्रौघकान्तिममृतोरुकरैर्जगन्ति\nसञ्जीवयन्तममितात्मसुखं परेशम् ।\nज्ञानं सुधाकलशमेव च सन्दधानं\nशीतांशुमण्डलगतं स्मरतात्मसंस्थम् ॥",
          meaning: {
            en: "Remember within yourself the Supreme Lord, shining like a mass of moons, reviving the worlds with the great rays of nectar, whose happiness is boundless, holding knowledge and a jar of nectar, seated in the circle of the moon. (Tantrasara-sangraha 4.94)",
            kn: "ಚಂದ್ರಸಮೂಹದ ಕಾಂತಿಯ, ಅಮೃತಮಯ ಮಹಾಕಿರಣಗಳಿಂದ ಲೋಕಗಳನ್ನು ಬದುಕಿಸುವ, ಅಪಾರ ಸುಖಸ್ವರೂಪನಾದ, ಜ್ಞಾನಮುದ್ರೆ ಮತ್ತು ಅಮೃತಕಲಶವನ್ನು ಧರಿಸಿದ, ಚಂದ್ರಮಂಡಲದಲ್ಲಿ ನೆಲೆಸಿದ ಪರಮೇಶ್ವರನನ್ನು ತನ್ನೊಳಗೆ ಸ್ಮರಿಸಿ. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೪.೯೪)",
          },
        },
        {
          text: "ॐ भूर्भुवः स्वः । श्रीधन्वन्तरिम् अस्मिन्कलशे आवाहयामि स्थापयामि पूजयामि ॥",
          meaning: {
            en: "Om, earth, sky, heaven: I invoke Sri Dhanvantari into this kalasha; I install him and worship him.",
            kn: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಶ್ರೀಧನ್ವಂತರಿಯನ್ನು ಈ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "दूर्वाहोमः",
      titleEn: "The durva homa (Madhva)",
      note: "First, the Dhanvantari durva-ayushya homa (Tantrasara 4.102, Homa-Havana): four durva blades to each oblation, dipped in milk and ghee, offered with the Dhanvantari mantra received from one's guru (it is not printed here), 108 or 28 times. Then, or instead, the durva homa with the Mrityunjaya mantra (Prayoga-parijata, Homa-Havana): four durva blades dipped in honey, ghee and curd, 1000, 108 or 28 times, with the Tryambaka mantra enclosed by the pranava and the vyahritis, below. Madhvas may also recite the Ayushya Sukta (given for the Smarta form) while the durva is offered.",
      noteKn: "ಮೊದಲು ಧಾನ್ವಂತರ ದೂರ್ವಾಯುಷ್ಯ ಹೋಮ (ತಂತ್ರಸಾರ ೪.೧೦೨, ಹೋಮ–ಹವನ): ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ, ಗುರುವಿನಿಂದ ಪಡೆದ ಧನ್ವಂತರಿ ಮಂತ್ರದಿಂದ (ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ), ೧೦೮ ಅಥವಾ ೨೮ ಬಾರಿ. ನಂತರ ಅಥವಾ ಅದರ ಬದಲು ಮೃತ್ಯುಂಜಯ ಮಂತ್ರದಿಂದ ದೂರ್ವಾಹೋಮ (ಪ್ರಯೋಗಪಾರಿಜಾತ, ಹೋಮ–ಹವನ): ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ೧೦೦೦, ೧೦೮ ಅಥವಾ ೨೮ ಬಾರಿ, ಕೆಳಗಿನ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ ತ್ರ್ಯಂಬಕ ಮಂತ್ರದಿಂದ. ಗರಿಕೆ ಹೋಮಿಸುವಾಗ ಮಾಧ್ವರು ಆಯುಷ್ಯಸೂಕ್ತವನ್ನೂ (ಸ್ಮಾರ್ತ ರೂಪದಲ್ಲಿ ಕೊಟ್ಟಿದೆ) ಪಠಿಸಬಹುದು.",
      when: { tradition: ["madhva"] },
      verses: [
        {
          text: "मध्वाज्यदधिसंयुक्ता दूर्वा मृत्युञ्जयेन तु ।\nजुहुयाच्च सहस्रं वा अष्टाविंशतिमाहुतीः ॥",
          meaning: {
            en: "Durva joined with honey, ghee and curd should be offered with the Mrityunjaya mantra, a thousand times or twenty-eight oblations. (Prayoga-parijata, as quoted in Homa-Havana)",
            kn: "ಜೇನು, ತುಪ್ಪ, ಮೊಸರು ಸೇರಿಸಿದ ಗರಿಕೆಯನ್ನು ಮೃತ್ಯುಂಜಯ ಮಂತ್ರದಿಂದ ಸಾವಿರ ಬಾರಿ ಅಥವಾ ಇಪ್ಪತ್ತೆಂಟು ಆಹುತಿ ಹೋಮಿಸಬೇಕು. (ಪ್ರಯೋಗಪಾರಿಜಾತ; ಹೋಮ–ಹವನದಲ್ಲಿ ಉದ್ಧೃತ)",
          },
        },
        {
          text: "ॐ भूर्भुवः स्वः । त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् । स्वर्भुवर्भूः ॐ ॥\nस्वाहा । मृत्युञ्जयरुद्रान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतश्रीसङ्कर्षणायेदं न मम ॥",
          meaning: {
            en: "Om, earth, sky, heaven. We worship the three-eyed one, fragrant, who increases nourishment; as the ripe cucumber from its stalk, may I be freed from death, not from immortality. Heaven, sky, earth, Om. Svaha; this is for Sri Sankarshana, who dwells within Mukhyaprana, the beloved of Bharati, within Mrityunjaya Rudra, not for me. (Rigveda 7.59.12, enclosed by the pranava and the vyahritis as the Homa-Havana teaches)",
            kn: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಮೂರು ಕಣ್ಣುಗಳ, ಸುಗಂಧಮಯನಾದ, ಪುಷ್ಟಿವರ್ಧಕನಾದ ದೇವನನ್ನು ಪೂಜಿಸುತ್ತೇವೆ; ಮಾಗಿದ ಸೌತೆಕಾಯಿ ತೊಟ್ಟಿನಿಂದ ಬಿಡುಗಡೆಯಾಗುವಂತೆ ನಾನು ಮೃತ್ಯುವಿನಿಂದ ಬಿಡುಗಡೆ ಹೊಂದಲಿ, ಅಮೃತತ್ವದಿಂದಲ್ಲ. ಸ್ವರ್ಭುವರ್ಭೂಃ ಓಂ. ಸ್ವಾಹಾ; ಇದು ಮೃತ್ಯುಂಜಯ ರುದ್ರಾಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಸಂಕರ್ಷಣನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೭.೫೯.೧೨, ಹೋಮ–ಹವನ ಹೇಳುವಂತೆ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ)",
          },
          when: { tradition: ["madhva"] },
        },
      ],
    },
    {
      title: "आयुष्यसूक्तहोमः",
      titleEn: "The Ayushya Sukta homa (Smarta)",
      note: "Offer ghee with each of the eight mantras of the Ayushya Sukta, which itself says \"I offer to him with ghee\"; then recite the closing Vishnu mantra. Then offer durva dipped in milk and ghee (or honey, ghee and curd) with the Tryambaka mantra, 108 or 28 times. Follow your family manual for the number of rounds.",
      noteKn: "ಆಯುಷ್ಯಸೂಕ್ತದ ಎಂಟು ಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದಲೂ ಆಜ್ಯಾಹುತಿ ನೀಡಿ (ಸೂಕ್ತವೇ “ಘೃತದಿಂದ ಹೋಮಿಸುತ್ತೇನೆ” ಎನ್ನುತ್ತದೆ); ನಂತರ ಕೊನೆಯ ವಿಷ್ಣುಮಂತ್ರ ಹೇಳಿ. ನಂತರ ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ (ಅಥವಾ ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ) ಅದ್ದಿದ ಗರಿಕೆಯನ್ನು ತ್ರ್ಯಂಬಕ ಮಂತ್ರದಿಂದ ೧೦೮ ಅಥವಾ ೨೮ ಬಾರಿ ಹೋಮಿಸಿ. ಆವೃತ್ತಿಗಳ ಸಂಖ್ಯೆಗೆ ನಿಮ್ಮ ಪದ್ಧತಿಯನ್ನು ಅನುಸರಿಸಿ.",
      when: { tradition: ["smarta"] },
      verses: [
        {
          n: 1,
          text: "यो ब्रह्मा ब्रह्मण उज्जहार प्राणैः शिरः कृत्तिवासाः पिनाकी ।\nईशानो देवः स न आयुर्दधातु तस्मै जुहोमि हविषा घृतेन स्वाहा ॥",
          meaning: {
            en: "He who, as the great one, plucked off the head of Brahma together with its life-breaths, who wears a hide and bears the Pinaka bow: may that god Ishana grant us long life. To him I offer this oblation of ghee. Svaha.",
            kn: "ಪ್ರಾಣಗಳೊಡನೆ ಬ್ರಹ್ಮನ ಶಿರಸ್ಸನ್ನು ಕಿತ್ತುಹಾಕಿದ ಮಹಾನ್ ದೇವನು, ಚರ್ಮವನ್ನು ಉಟ್ಟವನು, ಪಿನಾಕವೆಂಬ ಧನುಸ್ಸನ್ನು ಧರಿಸಿದವನು; ಆ ಈಶಾನದೇವನು ನಮಗೆ ದೀರ್ಘಾಯುಸ್ಸನ್ನು ಕೊಡಲಿ. ಅವನಿಗೆ ನಾನು ತುಪ್ಪದ ಹವಿಸ್ಸನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ. ಸ್ವಾಹಾ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          n: 2,
          text: "विभ्राजमानः सरिरस्य मध्याद्रोचमानो घर्मरुचिर्य आगात् ।\nस मृत्युपाशानपनुद्य घोरानिहायुषेणो घृतमत्तु देवः स्वाहा ॥",
          meaning: {
            en: "He who has risen, resplendent and shining, from the midst of the waters, the one whose glow is heat: may that god thrust away the dreadful nooses of death and eat this ghee here, for our long life. Svaha.",
            kn: "ಜಲರಾಶಿಯ ಮಧ್ಯದಿಂದ ಪ್ರಕಾಶಿಸುತ್ತಾ, ಬೆಳಗುತ್ತಾ ಉದಯಿಸಿದ, ಶಾಖವೇ ಕಾಂತಿಯಾಗಿರುವ ಆ ದೇವನು ಮೃತ್ಯುವಿನ ಭಯಂಕರವಾದ ಪಾಶಗಳನ್ನು ದೂರತಳ್ಳಿ, ನಮ್ಮ ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ಇಲ್ಲಿ ಈ ತುಪ್ಪವನ್ನು ಸ್ವೀಕರಿಸಲಿ. ಸ್ವಾಹಾ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          n: 3,
          text: "ब्रह्मज्योतिर्ब्रह्मपत्नीषु गर्भं यमादधात्पुरुरूपं जयन्तम् ।\nसुवर्णरम्भग्रहमर्कमर्च्यं तमायुषे वर्धयामो घृतेन स्वाहा ॥",
          meaning: {
            en: "The child of many forms, the victorious one, whom the holy Fire placed as an embryo in the wives of the seers; the radiant one, worthy of worship, who holds a golden staff: him we strengthen with ghee for long life. (This is understood of Skanda.) Svaha.",
            kn: "ಪವಿತ್ರ ಅಗ್ನಿಯು ಋಷಿಪತ್ನಿಯರಲ್ಲಿ ಗರ್ಭವಾಗಿ ಇರಿಸಿದ, ಅನೇಕ ರೂಪಗಳುಳ್ಳ, ಜಯಶಾಲಿಯಾದ, ಚಿನ್ನದ ದಂಡವನ್ನು ಹಿಡಿದ, ಪೂಜ್ಯನಾದ ತೇಜಸ್ವಿಯನ್ನು ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ತುಪ್ಪದಿಂದ ನಾವು ವರ್ಧಿಸುತ್ತೇವೆ. (ಇದನ್ನು ಸ್ಕಂದನ ಕುರಿತದ್ದೆಂದು ತಿಳಿಯುತ್ತಾರೆ.) ಸ್ವಾಹಾ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          n: 4,
          text: "श्रियं लक्ष्मीमौबलामम्बिकां गां षष्ठीं च यामिन्द्रसेनेत्युदाहुः ।\nतां विद्यां ब्रह्मयोनिं सरूपामिहायुषे तर्पयामो घृतेन स्वाहा ॥",
          meaning: {
            en: "She who is called Shri, Lakshmi, Aubala, Ambika, the Cow, Shashthi and Indrasena; she who is knowledge itself, born of Brahman, of lovely form: her we satisfy here with ghee for long life. Svaha.",
            kn: "ಶ್ರೀ, ಲಕ್ಷ್ಮೀ, ಔಬಲಾ, ಅಂಬಿಕಾ, ಗೋ, ಷಷ್ಠೀ, ಇಂದ್ರಸೇನಾ ಎಂದು ಕರೆಯಲ್ಪಡುವವಳು, ವಿದ್ಯೆಯೇ ಆಗಿರುವವಳು, ಬ್ರಹ್ಮನಿಂದ ಜನಿಸಿದವಳು, ಸುಂದರ ರೂಪದವಳು; ಅವಳನ್ನು ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ಇಲ್ಲಿ ತುಪ್ಪದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇವೆ. ಸ್ವಾಹಾ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          n: 5,
          text: "दाक्षायण्यः सर्वयोन्यः सयोन्यः सहस्रशो विश्वरूपा विरूपाः ।\nससूनवः सपतयः सयूथ्या आयुषेणो घृतमिदं जुषन्ताम् स्वाहा ॥",
          meaning: {
            en: "The daughters of Daksha, sources of all beings, sprung from one source, in their thousands, of every form and of varied forms, with their sons, their husbands and their companions: may they accept this ghee for our long life. Svaha.",
            kn: "ಎಲ್ಲ ಜೀವಿಗಳಿಗೂ ಮೂಲರಾದ, ಒಂದೇ ಮೂಲದಿಂದ ಹುಟ್ಟಿದ, ಸಾವಿರಾರು ಸಂಖ್ಯೆಯಲ್ಲಿರುವ, ಎಲ್ಲ ರೂಪಗಳೂ ಬಗೆಬಗೆಯ ರೂಪಗಳೂ ಉಳ್ಳ ದಕ್ಷಪುತ್ರಿಯರು ತಮ್ಮ ಮಕ್ಕಳು, ಪತಿಯರು ಮತ್ತು ಸಂಗಡಿಗರೊಡನೆ ನಮ್ಮ ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ಈ ತುಪ್ಪವನ್ನು ಸ್ವೀಕರಿಸಲಿ. ಸ್ವಾಹಾ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          n: 6,
          text: "दिव्या गणा बहुरूपाः पुराणा आयुश्छिदो नः प्रमथ्नन्तु वीरान् ।\nतेभ्यो जुहोमि बहुधा घृतेन मा नः प्रजां रीरिषो मोत वीरान् स्वाहा ॥",
          meaning: {
            en: "The divine hosts, ancient and of many forms, the cutters-off of life who would crush our heroes: to them I offer ghee in many ways. Do not harm our children, nor our heroes. Svaha.",
            kn: "ಪುರಾತನರೂ ಅನೇಕ ರೂಪಗಳುಳ್ಳವರೂ ಆದ ದಿವ್ಯಗಣಗಳು, ಆಯುಸ್ಸನ್ನು ಕತ್ತರಿಸುವ, ನಮ್ಮ ವೀರರನ್ನು ಹಿಂಸಿಸಬಲ್ಲವರು; ಅವರಿಗೆ ನಾನು ಅನೇಕ ಬಗೆಯಲ್ಲಿ ತುಪ್ಪವನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ. ನಮ್ಮ ಮಕ್ಕಳನ್ನೂ ನಮ್ಮ ವೀರರನ್ನೂ ಹಿಂಸಿಸಬೇಡಿ. ಸ್ವಾಹಾ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          n: 7,
          text: "एकः पुरस्ताद्य इदं बभूव यतो बभूव भुवनस्य गोपाः ।\nयमप्येति भुवनं साम्पराये स नो हविर्घृतमिहायुषेऽत्तु देवः स्वाहा ॥",
          meaning: {
            en: "The One who existed in the beginning and became all this; from whom came forth the protector of the world; into whom the world goes at the end: may that god eat our oblation of ghee here, for our long life. Svaha.",
            kn: "ಆದಿಯಲ್ಲಿ ಏಕನಾಗಿದ್ದು ಇದೆಲ್ಲವೂ ಆದವನು; ಯಾರಿಂದ ಲೋಕರಕ್ಷಕನು ಹುಟ್ಟಿದನೋ, ಪ್ರಳಯಕಾಲದಲ್ಲಿ ಜಗತ್ತು ಯಾರಲ್ಲಿ ಲೀನವಾಗುತ್ತದೆಯೋ ಆ ದೇವನು ನಮ್ಮ ದೀರ್ಘಾಯುಸ್ಸಿಗಾಗಿ ಇಲ್ಲಿ ನಮ್ಮ ತುಪ್ಪದ ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸಲಿ. ಸ್ವಾಹಾ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          n: 8,
          text: "वसून्रुद्रानादित्यान्मरुतोऽथ साध्यानृभून्यक्षान्गन्धर्वांश्च पितॄंश्च विश्वान् ।\nभृगून्सर्पांश्चाङ्गिरसोऽथ सर्वान्घृतं हुत्वा स्वायुष्या महयाम शश्वत् स्वाहा ॥",
          meaning: {
            en: "Having offered ghee to the Vasus, the Rudras, the Adityas, the Maruts and the Sadhyas, to the Ribhus, the Yakshas, the Gandharvas, the Pitrs and the All-gods, to the Bhrigus, the Serpents and the Angirases, to all of them, may we, blessed with long life, honour them for ever. Svaha.",
            kn: "ವಸುಗಳು, ರುದ್ರರು, ಆದಿತ್ಯರು, ಮರುತ್ತುಗಳು, ಸಾಧ್ಯರು, ಋಭುಗಳು, ಯಕ್ಷರು, ಗಂಧರ್ವರು, ಪಿತೃಗಳು, ವಿಶ್ವೇದೇವತೆಗಳು, ಭೃಗುಗಳು, ಸರ್ಪಗಳು, ಆಂಗಿರಸರು ಎಲ್ಲರಿಗೂ ತುಪ್ಪವನ್ನು ಅರ್ಪಿಸಿ, ದೀರ್ಘಾಯುಷ್ಯವನ್ನು ಪಡೆದ ನಾವು ಅವರನ್ನು ಸದಾ ಪೂಜಿಸೋಣ. ಸ್ವಾಹಾ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          n: 9,
          text: "विष्णो त्वं नो अन्तमः शर्म यच्छ सहन्त्य ।\nप्र ते धारा मधुश्चुत उत्सं दुह्रते अक्षितम् ॥\nॐ शान्तिः शान्तिः शान्तिः ॥",
          meaning: {
            en: "O Vishnu, you who are nearest to us, grant us shelter, O conquering one. Your streams, dripping with honey, pour forth an inexhaustible spring. Om, peace, peace, peace.",
            kn: "ವಿಷ್ಣುವೇ, ನಮಗೆ ಅತ್ಯಂತ ಹತ್ತಿರದವನೇ, ಜಯಶಾಲಿಯೇ, ನಮಗೆ ಆಶ್ರಯವನ್ನು ನೀಡು. ಜೇನು ಸುರಿಸುವ ನಿನ್ನ ಧಾರೆಗಳು ಎಂದೂ ಬತ್ತದ ಚಿಲುಮೆಯನ್ನು ಹರಿಸುತ್ತವೆ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.",
          },
          when: { tradition: ["smarta"] },
        },
        {
          text: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥\nस्वाहा । रुद्राय इदं न मम ॥",
          meaning: {
            en: "We worship the three-eyed one, fragrant, who nourishes; as the ripe cucumber is freed from its stalk, may I be freed from death, not from immortality, svaha. This is for Rudra, not for me. (Rigveda 7.59.12)",
            kn: "ಮೂರು ಕಣ್ಣುಗಳ, ಸುಗಂಧಮಯನಾದ, ಪುಷ್ಟಿಯನ್ನು ವರ್ಧಿಸುವ ದೇವನನ್ನು ಪೂಜಿಸುತ್ತೇವೆ; ಮಾಗಿದ ಸೌತೆಕಾಯಿ ತೊಟ್ಟಿನಿಂದ ಬಿಡುಗಡೆಯಾಗುವಂತೆ ನಾನು ಮೃತ್ಯುವಿನಿಂದ ಬಿಡುಗಡೆ ಹೊಂದಲಿ, ಅಮೃತತ್ವದಿಂದಲ್ಲ, ಸ್ವಾಹಾ. ಇದು ರುದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೭.೫೯.೧೨)",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
    {
      title: "उत्तराङ्गम्",
      titleEn: "Uttaranga: do the Common Procedure from the svishtakrit to the closing prayers",
      note: "After the last main oblation, do the uttaranga as given in full in \"Homa: Common Procedure\", for your tradition: the svishtakrit (offered with a little of each material used in the main homa), the prayaschitta offerings, the purnahuti and vasordhara, the samsrava, the marjana, the agni upasthana, the raksha and the closing prayers. Keep the samarpana and the farewell to Agni for the end of this text, after the closing puja. For the svishtakrit offer a little of the durva and of the ghee.",
      noteKn: "ಕೊನೆಯ ಪ್ರಧಾನ ಆಹುತಿಯ ನಂತರ “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿರುವಂತೆ ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ಉತ್ತರಾಂಗ ಮಾಡಿ: ಸ್ವಿಷ್ಟಕೃತ್ (ಪ್ರಧಾನ ಹೋಮದ ಪ್ರತಿ ದ್ರವ್ಯದ ಸ್ವಲ್ಪ ಭಾಗದಿಂದ), ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ಪೂರ್ಣಾಹುತಿ–ವಸೋರ್ಧಾರಾ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ಅಗ್ನ್ಯುಪಸ್ಥಾನ, ರಕ್ಷಾಧಾರಣ, ಸಮಾಪ್ತಿ ಪ್ರಾರ್ಥನೆಗಳು. ಸಮರ್ಪಣೆ ಮತ್ತು ಅಗ್ನಿವಿಸರ್ಜನೆಯನ್ನು ಉತ್ತರಪೂಜೆಯ ನಂತರ, ಈ ಪಠ್ಯದ ಕೊನೆಯಲ್ಲಿ ಮಾಡಿ. ಸ್ವಿಷ್ಟಕೃತ್‌ಗೆ ಸ್ವಲ್ಪ ಗರಿಕೆ ಮತ್ತು ತುಪ್ಪ.",
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
      note: "Worship Dhanvantari in the kalasha once more with dhupa, dipa and naivedya; sprinkle the person whose birthday it is with the kalasha water. Wave the lamp (mangalarati) before the deity.",
      noteKn: "ಕಲಶದಲ್ಲಿರುವ ಧನ್ವಂತರಿಗೆ ಮತ್ತೆ ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ ಅರ್ಪಿಸಿ; ಜನ್ಮದಿನದವರಿಗೆ ಕಲಶಜಲವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ. ದೇವತೆಗೆ ಮಂಗಳಾರತಿ ಬೆಳಗಿ.",
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
          text: "अनेन आयुष्यहोमेन यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गतः\nश्रीधन्वन्तरिः प्रीयताम् । श्रीकृष्णार्पणमस्तु ॥",
          meaning: {
            en: "By this Ayushya homa may Sri Dhanvantari, the inner ruler of the Yajnapurusha, who dwells within Mukhyaprana, the beloved of Bharati, be pleased. May it be an offering to Sri Krishna.",
            kn: "ಈ ಆಯುಷ್ಯಹೋಮದಿಂದ ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಶ್ರೀಧನ್ವಂತರಿಯು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.",
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
          text: "अनेन आयुष्यहोमकर्मणा श्रीपरमेश्वरः प्रीयताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥",
          meaning: {
            en: "By this rite of the Ayushya homa may the Supreme Lord be pleased. Om tat sat: may it be an offering to Brahman.",
            kn: "ಈ ಆಯುಷ್ಯಹೋಮ ಕರ್ಮದಿಂದ ಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ. ಓಂ ತತ್ಸತ್ ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
    {
      title: "वर्धापनविधिः",
      titleEn: "The small vardhapana puja at home",
      note: "Anyone can do this at home on the birthday, without a priest (Prayoga-parijata and Dharmasindhu, as in Homa-Havana). Bathe and put on new clothes, bow to elders, gurus and the gods, and worship the ancestors, the birth-star deity and Prajapati. After sandhyavandane and puja make the sankalpa and ask the guru’s leave: आयुरभिवृद्ध्यर्थं वर्षवृद्धिकर्म करिष्ये; श्रीगुरुभ्यो नमः, वृद्धिकर्मण्याज्ञा दीयताम्; and remember Ganapati: गं गणपतये नमः, अविघ्नं कुरु. Draw an eight-petalled lotus with rangoli and put a svastika or sixteen heaps of rice on it; invoke the sixteen deities with akshata: 1 the family deity, 2 the deity of the birth-star, 3 the ancestors, 4 Prajapati, 5 Vedavyasa, 6 Parashurama, 7 Hanuman, 8 Ashvatthama, 9 Bali, 10 Vibhishana, 11 Kripa, 12 Markandeya, 13 Shashthidevi, 14 Prahlada, 15 Bhanu, 16 Vighnesha. Say, with akshata and flowers: कुलदेवतादिषोडशवर्षवृद्धिदेवताः एतेषु अक्षतपुञ्जेषु आवाहयामि. Then the sixteen upacharas of puja, an offering of payasa or fruit, and stand to pray with the verses below. The birth-star deities (accusative, for the invocation): Ashvini Ashvinau, Bharani Yama, Krittika Agni, Rohini Dhatar, Mrigashira Shashin, Ardra Rudra, Punarvasu Aditi, Pushya Brihaspati, Ashlesha the serpents, Magha the pitrus, Purva-phalguni Aryaman, Uttara-phalguni Bhaga, Hasta Ravi, Chitra Tvashtar, Svati Vayu, Vishakha Indragni, Anuradha Mitra, Jyeshtha Indra, Mula Nirriti, Purvashadha the waters, Uttarashadha the Vishvedevas, Shravana Vishnu, Dhanishtha the Vasus, Shatabhisha Varuna, Purva-bhadra Ajaikapad, Uttara-bhadra Ahirbudhnya, Revati Pushan.",
      noteKn: "ಇದನ್ನು ಜನ್ಮದಿನದಂದು ಮನೆಯಲ್ಲಿ ಪುರೋಹಿತರಿಲ್ಲದೆ ಯಾರಾದರೂ ಮಾಡಬಹುದು (ಪ್ರಯೋಗಪಾರಿಜಾತ, ಧರ್ಮಸಿಂಧು; ಹೋಮ–ಹವನದಲ್ಲಿರುವಂತೆ). ಮಂಗಳಸ್ನಾನ ಮಾಡಿ ಹೊಸ ವಸ್ತ್ರ ಧರಿಸಿ, ಗುರುಹಿರಿಯರಿಗೆ ದೇವತೆಗಳಿಗೆ ನಮಿಸಿ, ಪಿತೃಗಳು, ಜನ್ಮನಕ್ಷತ್ರ ದೇವತೆ, ಪ್ರಜಾಪತಿಗಳನ್ನು ಪೂಜಿಸಿ. ಸಂಧ್ಯಾ–ಪೂಜೆಗಳ ನಂತರ ಸಂಕಲ್ಪ ಮಾಡಿ ಗುರುವಿನ ಅಪ್ಪಣೆ ಕೇಳಿ: “ಆಯುರಭಿವೃದ್ಧ್ಯರ್ಥಂ ವರ್ಷವೃದ್ಧಿಕರ್ಮ ಕರಿಷ್ಯೇ; ಶ್ರೀಗುರುಭ್ಯೋ ನಮಃ, ವೃದ್ಧಿಕರ್ಮಣ್ಯಾಜ್ಞಾ ದೀಯತಾಮ್”; ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸಿ: “ಗಂ ಗಣಪತಯೇ ನಮಃ, ಅವಿಘ್ನಂ ಕುರು.” ರಂಗೋಲಿಯಿಂದ ಅಷ್ಟದಲ ಪದ್ಮ ಬರೆದು ಅದರ ಮೇಲೆ ಸ್ವಸ್ತಿಕ ಅಥವಾ ಹದಿನಾರು ಅಕ್ಕಿಯ ಗುಪ್ಪೆಗಳನ್ನಿಟ್ಟು ಹದಿನಾರು ದೇವತೆಗಳನ್ನು ಅಕ್ಷತೆಯಿಂದ ಆವಾಹಿಸಿ: ೧ ಕುಲದೇವತೆ, ೨ ಜನ್ಮನಕ್ಷತ್ರ ದೇವತೆ, ೩ ಪಿತೃಗಣ, ೪ ಪ್ರಜಾಪತಿ, ೫ ವೇದವ್ಯಾಸ, ೬ ಪರಶುರಾಮ, ೭ ಹನುಮಂತ, ೮ ಅಶ್ವತ್ಥಾಮ, ೯ ಬಲಿ, ೧೦ ವಿಭೀಷಣ, ೧೧ ಕೃಪ, ೧೨ ಮಾರ್ಕಂಡೇಯ, ೧೩ ಷಷ್ಠೀದೇವಿ, ೧೪ ಪ್ರಹ್ಲಾದ, ೧೫ ಭಾನು, ೧೬ ವಿಘ್ನೇಶ. ಕೈಯಲ್ಲಿ ಅಕ್ಷತೆ–ಹೂವು ಹಿಡಿದು: “ಕುಲದೇವತಾದಿ ಷೋಡಶ ವರ್ಷವೃದ್ಧಿದೇವತಾಃ ಏತೇಷು ಅಕ್ಷತಪುಂಜೇಷು ಆವಾಹಯಾಮಿ.” ನಂತರ ಷೋಡಶೋಪಚಾರ ಪೂಜೆ, ಪಾಯಸ ಅಥವಾ ಫಲ ನೈವೇದ್ಯ; ಎದ್ದು ನಿಂತು ಕೆಳಗಿನ ಶ್ಲೋಕಗಳಿಂದ ಪ್ರಾರ್ಥಿಸಿ. ಜನ್ಮನಕ್ಷತ್ರ ದೇವತೆಗಳು (ದ್ವಿತೀಯಾ ವಿಭಕ್ತಿಯಲ್ಲಿ, ಆವಾಹನೆಗಾಗಿ): ಅಶ್ವಿನೀ ಅಶ್ವಿನೌ, ಭರಣೀ ಯಮ, ಕೃತ್ತಿಕಾ ಅಗ್ನಿ, ರೋಹಿಣೀ ಧಾತೃ, ಮೃಗಶಿರ ಶಶಿ, ಆರ್ದ್ರಾ ರುದ್ರ, ಪುನರ್ವಸು ಅದಿತಿ, ಪುಷ್ಯ ಬೃಹಸ್ಪತಿ, ಆಶ್ಲೇಷಾ ಸರ್ಪಗಳು, ಮಖಾ ಪಿತೃಗಳು, ಪೂರ್ವಫಲ್ಗುನೀ ಅರ್ಯಮ, ಉತ್ತರಫಲ್ಗುನೀ ಭಗ, ಹಸ್ತ ರವಿ, ಚಿತ್ತಾ ತ್ವಷ್ಟೃ, ಸ್ವಾತಿ ವಾಯು, ವಿಶಾಖಾ ಇಂದ್ರಾಗ್ನಿ, ಅನುರಾಧಾ ಮಿತ್ರ, ಜ್ಯೇಷ್ಠಾ ಇಂದ್ರ, ಮೂಲ ನಿರ್ಋತಿ, ಪೂರ್ವಾಷಾಢಾ ಜಲ, ಉತ್ತರಾಷಾಢಾ ವಿಶ್ವೇದೇವರು, ಶ್ರವಣ ವಿಷ್ಣು, ಧನಿಷ್ಠಾ ವಸುಗಳು, ಶತಭಿಷಕ್ ವರುಣ, ಪೂರ್ವಾಭಾದ್ರಾ ಅಜೈಕಪಾದ, ಉತ್ತರಾಭಾದ್ರಾ ಅಹಿರ್ಬುಧ್ನ್ಯ, ರೇವತೀ ಪೂಷಾ.",
      verses: [
        {
          text: "आयुरभिवृद्ध्यर्थं वर्षवृद्धिकर्म करिष्ये ।\nश्रीगुरुभ्यो नमः । वृद्धिकर्मण्याज्ञा दीयताम् ।\nगं गणपतये नमः । अविघ्नं कुरु ॥",
          meaning: {
            en: "For the increase of life I shall perform the rite of the growing year. Salutations to the gurus: grant me leave for this rite of increase. Gam, salutations to Ganapati: make it free of obstacles. (The vardhapana sankalpa, Homa-Havana)",
            kn: "ಆಯುಸ್ಸಿನ ಅಭಿವೃದ್ಧಿಗಾಗಿ ವರ್ಷವೃದ್ಧಿ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ. ಗುರುಗಳಿಗೆ ನಮಸ್ಕಾರ: ಈ ವೃದ್ಧಿಕರ್ಮಕ್ಕೆ ಅಪ್ಪಣೆ ಕೊಡಿ. ಗಂ ಗಣಪತಯೇ ನಮಃ: ವಿಘ್ನವಿಲ್ಲದಂತೆ ಮಾಡು. (ವರ್ಧಾಪನ ಸಂಕಲ್ಪ, ಹೋಮ–ಹವನ)",
          },
        },
        {
          text: "कुलदेवतायै नमः । कुलदेवताम् आवाहयामि । जन्मनक्षत्रदेवतायै नमः । जन्मनक्षत्रदेवताम् आवाहयामि ।\nपितृगणेभ्यो नमः । पितॄन् आवाहयामि । प्रजापतये नमः । प्रजापतिम् आवाहयामि ।\nवेदव्यासाय नमः । वेदव्यासम् आवाहयामि । जामदग्न्यरामाय नमः । परशुरामम् आवाहयामि ।\nहनुमते नमः । हनुमन्तम् आवाहयामि । अश्वत्थाम्ने नमः । अश्वत्थामानम् आवाहयामि ।\nबलये नमः । बलिम् आवाहयामि । विभीषणाय नमः । विभीषणम् आवाहयामि ।\nकृपाय नमः । कृपम् आवाहयामि । मार्कण्डेयाय नमः । मार्कण्डेयम् आवाहयामि ।\nषष्ठीदेव्यै नमः । षष्ठीदेवीम् आवाहयामि । प्रह्लादाय नमः । प्रह्लादम् आवाहयामि ।\nभानवे नमः । भानुम् आवाहयामि । विघ्नेशाय नमः । विघ्नेशम् आवाहयामि ॥\nकुलदेवतादिषोडशवर्षवृद्धिदेवताः एतेषु अक्षतपुञ्जेषु आवाहयामि ॥",
          meaning: {
            en: "Salutation to each of the sixteen deities of the growing year, and \"I invoke\" each: the family deity, the deity of the birth-star (by its name, see the note), the ancestors, Prajapati, Vedavyasa, Parashurama, Hanuman, Ashvatthama, Bali, Vibhishana, Kripa, Markandeya, Shashthi-devi, Prahlada, Bhanu (the Sun) and Vighnesha. Then: I invoke the sixteen deities of the growing year, beginning with the family deity, into these heaps of akshata. (Homa-Havana)",
            kn: "ವರ್ಷವೃದ್ಧಿಯ ಹದಿನಾರು ದೇವತೆಗಳಿಗೆ ನಮಸ್ಕಾರ, ಪ್ರತಿಯೊಬ್ಬರ ಆವಾಹನೆ: ಕುಲದೇವತೆ, ಜನ್ಮನಕ್ಷತ್ರದೇವತೆ (ಹೆಸರಿನಿಂದ; ಸೂಚನೆ ನೋಡಿ), ಪಿತೃಗಳು, ಪ್ರಜಾಪತಿ, ವೇದವ್ಯಾಸ, ಪರಶುರಾಮ, ಹನುಮಂತ, ಅಶ್ವತ್ಥಾಮ, ಬಲಿ, ವಿಭೀಷಣ, ಕೃಪ, ಮಾರ್ಕಂಡೇಯ, ಷಷ್ಠೀದೇವಿ, ಪ್ರಹ್ಲಾದ, ಭಾನು, ವಿಘ್ನೇಶ. ನಂತರ: ಕುಲದೇವತಾದಿ ಹದಿನಾರು ವರ್ಷವೃದ್ಧಿ ದೇವತೆಗಳನ್ನು ಈ ಅಕ್ಷತೆಯ ರಾಶಿಗಳಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ. (ಹೋಮ–ಹವನ)",
          },
        },
        {
          text: "मार्कण्डेय महाभाग सप्तकल्पान्तजीवन ।\nआयुरारोग्यमैश्वर्यं देहि मे मुनिपुङ्गव ॥",
          meaning: {
            en: "O great Markandeya, who lived to the end of seven kalpas, best of sages, give me long life, health and prosperity.",
            kn: "ಓ ಮಹಾಭಾಗನಾದ ಮಾರ್ಕಂಡೇಯನೇ, ಏಳು ಕಲ್ಪಗಳ ಅಂತ್ಯದವರೆಗೆ ಬದುಕಿದವನೇ, ಮುನಿಶ್ರೇಷ್ಠನೇ, ನನಗೆ ಆಯುಸ್ಸು, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯವನ್ನು ಕೊಡು.",
          },
        },
        {
          text: "आयुर्देहि यशो देहि श्रियं देहि विनायक ।\nपुत्रपौत्रान्प्रपौत्रांश्च देहि मे गणनायक ॥",
          meaning: {
            en: "O Vinayaka, give me long life, fame and prosperity; O leader of the hosts, give me sons, grandsons and great-grandsons.",
            kn: "ಓ ವಿನಾಯಕನೇ, ನನಗೆ ಆಯುಸ್ಸು, ಯಶಸ್ಸು, ಸಂಪತ್ತನ್ನು ಕೊಡು; ಓ ಗಣನಾಯಕನೇ, ಮಕ್ಕಳು, ಮೊಮ್ಮಕ್ಕಳು, ಮರಿಮಕ್ಕಳನ್ನು ಕೊಡು.",
          },
        },
        {
          text: "दैत्येन्द्रकुलसम्भूत दानयज्ञक्रियापर ।\nबले त्वां शरणं यामि दीर्घमायुः प्रयच्छ मे ॥",
          meaning: {
            en: "O Bali, born in the line of the lords of the daityas, devoted to gifts and sacrifices, I take refuge in you; give me a long life.",
            kn: "ದೈತ್ಯೇಂದ್ರ ಕುಲದಲ್ಲಿ ಹುಟ್ಟಿದ, ದಾನ–ಯಜ್ಞ ಕ್ರಿಯೆಗಳಲ್ಲಿ ತತ್ಪರನಾದ ಓ ಬಲಿಯೇ, ನಿನ್ನನ್ನು ಶರಣು ಹೊಂದುತ್ತೇನೆ; ನನಗೆ ದೀರ್ಘಾಯುಸ್ಸು ಕೊಡು.",
          },
        },
        {
          text: "वसिष्ठकुलसम्भूत वेदशास्त्रविशारद ।\nनारायणांशसम्भूत वेदव्यास नमोऽस्तु ते ॥",
          meaning: {
            en: "O Vedavyasa, born in the line of Vasishtha, master of the Vedas and the shastras, born of a part of Narayana: salutations to you.",
            kn: "ವಸಿಷ್ಠಕುಲದಲ್ಲಿ ಹುಟ್ಟಿದ, ವೇದಶಾಸ್ತ್ರ ವಿಶಾರದನಾದ, ನಾರಾಯಣಾಂಶನಾದ ವೇದವ್ಯಾಸನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.",
          },
        },
        {
          text: "आञ्जनेय महाभाग कपीन्द्र सचिवोत्तम ।\nरामप्रिय नमस्तुभ्यं हनूमन् रक्ष सर्वदा ॥",
          meaning: {
            en: "O son of Anjana, great and blessed, chief of monkeys, best of ministers, dear to Rama: salutations to you; protect me always, O Hanuman.",
            kn: "ಓ ಮಹಾಭಾಗನಾದ ಆಂಜನೇಯನೇ, ಕಪೀಂದ್ರನೇ, ಸಚಿವೋತ್ತಮನೇ, ರಾಮಪ್ರಿಯನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಹನುಮಂತನೇ, ಯಾವಾಗಲೂ ನನ್ನನ್ನು ರಕ್ಷಿಸು.",
          },
        },
        {
          text: "विभीषण नमस्तुभ्यं रामपादाब्जपूजक ।\nआयुरारोग्यमैश्वर्यं देहि पौलस्त्यनन्दन ॥",
          meaning: {
            en: "Salutations to you, Vibhishana, worshipper of the lotus feet of Rama; give me long life, health and prosperity, O joy of the line of Pulastya.",
            kn: "ರಾಮನ ಪಾದಕಮಲಗಳನ್ನು ಪೂಜಿಸುವ ಓ ವಿಭೀಷಣನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಪೌಲಸ್ತ್ಯನಂದನನೇ, ನನಗೆ ಆಯುಸ್ಸು, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯ ಕೊಡು.",
          },
        },
        {
          text: "रेणुकेय महावीर्य कार्तवीर्यकुलान्तक ।\nआयुः प्रयच्छ मे राम जामदग्न्य नमोऽस्तु ते ॥",
          meaning: {
            en: "O son of Renuka, of great valour, destroyer of the line of Kartavirya: give me long life, O Rama, son of Jamadagni; salutations to you.",
            kn: "ರೇಣುಕೆಯ ಮಗನೇ, ಮಹಾವೀರ್ಯನೇ, ಕಾರ್ತವೀರ್ಯ ಕುಲಾಂತಕನೇ, ಜಾಮದಗ್ನ್ಯ ರಾಮನೇ, ನನಗೆ ಆಯುಸ್ಸು ಕೊಡು; ನಿನಗೆ ನಮಸ್ಕಾರ.",
          },
        },
        {
          text: "त्रैलोक्ये यानि भूतानि स्थावराणि चराणि च ।\nब्रह्मविष्णुशिवैः सार्धं रक्षां कुर्वन्तु तानि मे ॥",
          meaning: {
            en: "May all beings in the three worlds, moving and unmoving, together with Brahma, Vishnu and Shiva, protect me.",
            kn: "ಮೂರು ಲೋಕಗಳಲ್ಲಿರುವ ಸ್ಥಾವರ–ಜಂಗಮ ಸಮಸ್ತ ಜೀವಿಗಳು ಬ್ರಹ್ಮ–ವಿಷ್ಣು–ಶಿವರೊಡನೆ ನನಗೆ ರಕ್ಷೆಯನ್ನು ಮಾಡಲಿ.",
          },
        },
        {
          text: "सतिलं गुडसम्मिश्रमञ्जल्यर्धमितं पयः ।\nमार्कण्डेयाद्वरं लब्ध्वा पिबाम्यायुर्विवृद्धये ॥",
          meaning: {
            en: "Having obtained the boon from Markandeya, I drink milk, half a handful, mixed with sesame and jaggery, for the increase of my life. (Said while taking the milk after the pradakshina and namaskara.)",
            kn: "ಮಾರ್ಕಂಡೇಯನಿಂದ ವರವನ್ನು ಪಡೆದು, ಆಯುಸ್ಸಿನ ವೃದ್ಧಿಗಾಗಿ ಎಳ್ಳು–ಬೆಲ್ಲ ಸೇರಿದ ಅರ್ಧ ಬೊಗಸೆ ಹಾಲನ್ನು ಕುಡಿಯುತ್ತೇನೆ. (ಪ್ರದಕ್ಷಿಣೆ–ನಮಸ್ಕಾರಗಳ ನಂತರ ಹಾಲು ಸ್ವೀಕರಿಸುವಾಗ.)",
          },
        },
        {
          text: "अनेन वर्षवृद्धिपूजाकरणेन भगवान्मध्वपतिगोपालकृष्णः प्रीयताम् ।\nश्रीकृष्णार्पणमस्तु ॥",
          meaning: {
            en: "By this worship for the increase of the year may the Lord Gopalakrishna, the lord of Madhva, be pleased. May it be an offering to Sri Krishna.",
            kn: "ಈ ವರ್ಷವೃದ್ಧಿ ಪೂಜೆಯಿಂದ ಮಧ್ವಪತಿ ಗೋಪಾಲಕೃಷ್ಣನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.",
          },
        },
      ],
    },
    {
      title: "वर्ज्यानि",
      titleEn: "What is avoided on the birthday",
      note: "Six things are forbidden on the birthday: cutting hair and nails, sexual union, long journeys, eating meat, quarrelling and violence (Dharmasindhu, as in Homa-Havana). Even if no Ayushya homa is done, the small vardhapana rite above should be done by everyone on the birthday.",
      noteKn: "ಜನ್ಮದಿನದಂದು ಆರು ನಿಷಿದ್ಧ: ಕೂದಲು–ಉಗುರು ಕತ್ತರಿಸುವುದು, ಮೈಥುನ, ದೂರಪ್ರಯಾಣ, ಮಾಂಸಭಕ್ಷಣ, ಕಲಹ, ಹಿಂಸೆ (ಧರ್ಮಸಿಂಧು; ಹೋಮ–ಹವನದಲ್ಲಿರುವಂತೆ). ಆಯುಷ್ಯ ಹೋಮ ಮಾಡದಿದ್ದರೂ ಮೇಲಿನ ಚಿಕ್ಕ ವರ್ಧಾಪನ ವಿಧಿಯನ್ನು ಪ್ರತಿಯೊಬ್ಬರೂ ಜನ್ಮದಿನದಂದು ಮಾಡಬೇಕು.",
      verses: [
        {
          text: "खण्डनं नखकेशानां मैथुनाध्वागमौ तथा ।\nआमिषं कलहं हिंसां वर्षवृद्धौ विवर्जयेत् ॥",
          meaning: {
            en: "On the birthday one should avoid cutting the nails and hair, sexual union, travelling on a journey, eating meat, quarrelling and harming. (Dharmasindhu)",
            kn: "ಜನ್ಮದಿನದಂದು ಉಗುರು–ಕೂದಲು ಕತ್ತರಿಸುವುದು, ಮೈಥುನ, ಪ್ರಯಾಣ, ಮಾಂಸ ಸೇವನೆ, ಕಲಹ, ಹಿಂಸೆಗಳನ್ನು ವರ್ಜಿಸಬೇಕು. (ಧರ್ಮಸಿಂಧು)",
          },
        },
      ],
    },
  ],
};
