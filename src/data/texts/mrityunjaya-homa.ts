/**
 * Mrityunjaya Homa (Tryambaka homa) for long life and freedom from the fear of untimely death:
 * the whole rite in order — sankalpa, the agnimukha (from "Homa: Common Procedure"), the kalasha,
 * dhyana and avahana of Mrityunjaya, the Tryambaka homa with its dravyas and counts, the Rudra
 * mantras added to it, the uttaranga, the closing puja, the sprinkling and the tirtha, samarpana.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012 (archive.org
 *    20230827_20230827_0721), chapters "Ayushya Homa" (durva dipped in honey, ghee and curd; 1000,
 *    108 or 28; the rishi Kahola; the Prayoga-parijata verse) and "Vayovasthashanti" (the Tryambaka
 *    mantra enclosed by the pranava and the vyahritis, pranava-vyahriti-samputita, for the
 *    Tryambaka-Mrityunjaya shanti; the sankalpa wording mrityudoshadi-pariharapurvakam arogyayuta-
 *    dirghayushyavaptyartham, used with the Navagraha homa at sixty).
 *  - Madhva: Tantrasara-sangraha of Sri Madhvacharya (ORI Mysore 2003) 4.100-102.
 *  - Smarta (Shaiva Agama, Tamil): "Sri Mrityunjaya Ayul Homa Shanti Paddhati", Tiruvarur N. T.
 *    Dakshinamurti Gurukkal (archive.org kyhr_sri-mrityungaya-ayul-homa-shanti-paddhati-by-tiruvarur-
 *    n-t-dakshinamurti-gu): the samidhs and materials and the counts 108 or 1000 (only clear lines used).
 *  - Mantras: Rigveda 7.59.12 and TS 1.8.6 (tryambakam), RV 1.114.8 (ma nas toke), checked on GRETIL
 *    and vishvAsa/vedAH_yajuH; the Rudra dhyana apatala… and the riks recited after the Namakam (yo
 *    rudro agnau TS 5.5; tamu shtuhi RV 5.42.11; ye te sahasram TB 3.10.8; namo rudraya vishnave)
 *    copied from this app's "Sri Rudram" (collated there against several printed editions).
 *  - Closing puja, kshamapana and the tirtha verse from this app's "Daily Puja"; the sesame-milk verse
 *    from "Ayushya Homa" (Homa-Havana).
 */
import type { Mantra } from '../types';

export const mrityunjayaHoma: Mantra = {
  id: "mrityunjaya-homa",
  title: "मृत्युञ्जयहोमः",
  titleEn: "Mrityunjaya Homa (Tryambaka homa)",
  category: "homa",
  order: 4,
  deity: "Mrityunjaya (Tryambaka); Madhva: Sri Sankarshana within Rudra",
  source: "Rigveda 7.59.12; Madhva: Homa-Havana and Tantrasara-sangraha 4.99-102; Smarta: Shaiva Agama Tamil manual; the riks of the Sri Rudram",
  summary: "The Mrityunjaya homa from start to end, done on the birth-star, on a birthday, in illness or against the fear of untimely death: sankalpa, the agnimukha, the dhyana and avahana of Mrityunjaya in the kalasha, the Tryambaka homa (Madhva: enclosed by the pranava and vyahritis, with durva dipped in honey, ghee and curd; Smarta: with the six samidhs, payasa, ghee and sesame) with the counts 28, 108 or 1000, the Rudra mantras, the uttaranga, the closing puja, the sprinkling with the kalasha water, the tirtha and prasada, and the samarpana.",
  summaryKn: "ಜನ್ಮನಕ್ಷತ್ರ, ಜನ್ಮದಿನ, ರೋಗ ಅಥವಾ ಅಕಾಲಮೃತ್ಯುಭಯದಲ್ಲಿ ಮಾಡುವ ಮೃತ್ಯುಂಜಯ ಹೋಮ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ಸಂಕಲ್ಪ, ಅಗ್ನಿಮುಖ, ಕಲಶದಲ್ಲಿ ಮೃತ್ಯುಂಜಯನ ಧ್ಯಾನ–ಆವಾಹನೆ, ತ್ರ್ಯಂಬಕ ಹೋಮ (ಮಾಧ್ವ: ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನ ಗರಿಕೆಯಿಂದ; ಸ್ಮಾರ್ತ: ಆರು ಸಮಿಧೆ, ಪಾಯಸ, ತುಪ್ಪ, ಎಳ್ಳು) — ೨೮, ೧೦೮ ಅಥವಾ ೧೦೦೦ ಸಂಖ್ಯೆ, ರುದ್ರಮಂತ್ರಗಳು, ಉತ್ತರಾಂಗ, ಉತ್ತರಪೂಜೆ, ಕಲಶಜಲ ಪ್ರೋಕ್ಷಣೆ, ತೀರ್ಥ–ಪ್ರಸಾದ, ಸಮರ್ಪಣೆ.",
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
  contentNote: "Homas are traditionally done with a trained priest; this text lets the family follow every step. The agnimukha and the uttaranga are done from \"Homa: Common Procedure\"; everything particular to this homa is printed here. Not given, because it is taken only from a guru: the nyasa and the bija form of the Mahamrityunjaya mantra (ॐ हौं जूं सः…) and the avarana puja of the Shaiva Agama form; the full Rudra homa with the eleven anuvakas is a separate, longer rite. The Smarta counts and materials come from one Tamil Shaiva manual whose scan is partly illegible. Follow your family manual and purohita where they differ.",
  sections: [
    {
      title: "मृत्युञ्जयहोमप्रयोजनम्",
      titleEn: "Before you begin: when, with what and how many",
      note: "The Ayushya homa on the birth day is of four kinds: durva-ayushya homa (with Dhanvantari), durva-charu homa, Mrityunjaya homa and Tryambaka-mantra homa (Homa-Havana). The Mrityunjaya mantra was seen by the rishi Kahola, who knew Shiva’s greatness. In the Madhva view the offering goes to Vishnu as the Lord who is the giver of life, within Rudra. Offering: durva grass, four blades to each oblation, dipped in honey, ghee and curd (trimadhura) — \"durva is life-giving\", and honey, ghee and curd bring peace, nourishment and contentment. Count: 1000, 108 or 28 oblations. Amrita (guduchi) samidhs, ten thousand of them with cow’s ghee and milk, remove all disease, says the Tantrasara, if one is not hostile to Hari; the apamarga offering is for ghosts and sorcery, followed by the amrita twice over and then plain ghee. Smarta (Shaiva Agama manual): the offerings, each 108 or 1000 times, are the samidhs of ashvattha, apamarga (nayuruvi), guduchi (seendil), durva, shami (vanni) and palasha, and payasa and ghee; sesame 108 times. Eat the nirmalya of the rite to remove untimely death (Shiva Purana, as quoted in the Tamil manual). The order of this text: sankalpa; the agnimukha of the Common Procedure; the kalasha, dhyana and avahana of Mrityunjaya; the Tryambaka homa; the Rudra mantras; the uttaranga; the closing puja; the sprinkling with the kalasha water and the tirtha; samarpana. Keep ready the durva (in bundles of four), honey, ghee and curd mixed (trimadhura), the samidhs and payasa or sesame as your tradition uses, and a kalasha with water.",
      noteKn: "ಜನ್ಮದಿನದಂದು ಮಾಡುವ ಆಯುಷ್ಯಹೋಮ ನಾಲ್ಕು ಬಗೆ: ಧಾನ್ವಂತರ ದೂರ್ವಾಯುಷ್ಯ ಹೋಮ, ದೂರ್ವಾಯುಷ್ಯ ಚರುಹೋಮ, ಮೃತ್ಯುಂಜಯ ಹೋಮ, ತ್ರ್ಯಂಬಕಮಂತ್ರ ಹೋಮ (ಹೋಮ–ಹವನ). ಮೃತ್ಯುಂಜಯ ಮಂತ್ರವನ್ನು ಶಿವನ ಮಹಿಮೆಯನ್ನು ತಿಳಿದ ಕಹೋಳ ಋಷಿ ಕಂಡನು. ಮಾಧ್ವ ದೃಷ್ಟಿಯಲ್ಲಿ ಆಹುತಿ ರುದ್ರನೊಳಗಿರುವ ಆಯುಷ್ಯದಾತ ವಿಷ್ಣುವಿಗೆ ಸಲ್ಲುತ್ತದೆ. ದ್ರವ್ಯ: ಗರಿಕೆ, ಒಂದು ಆಹುತಿಗೆ ನಾಲ್ಕು ಗರಿಕೆ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿ (ತ್ರಿಮಧುರ) — “ದೂರ್ವಾ ಆಯುಷ್ಯವರ್ಧನ”; ಜೇನು, ತುಪ್ಪ, ಮೊಸರು ಶಾಂತಿ–ಪುಷ್ಟಿ–ತುಷ್ಟಿ ಕೊಡುತ್ತವೆ. ಸಂಖ್ಯೆ: ೧೦೦೦, ೧೦೮ ಅಥವಾ ೨೮ ಆಹುತಿ. ಅಮೃತಬಳ್ಳಿ (ಗುಡೂಚಿ) ಸಮಿಧೆಗಳನ್ನು ಹತ್ತು ಸಾವಿರ, ಗೋವಿನ ತುಪ್ಪ–ಹಾಲಿನೊಡನೆ ಹೋಮಿಸಿದರೆ, ಹರಿವಿಮುಖನಲ್ಲದಿದ್ದರೆ ಎಲ್ಲ ರೋಗಗಳೂ ನಾಶ ಎಂದು ತಂತ್ರಸಾರ; ಉತ್ತರಾಣೆ ಹೋಮ ಭೂತ–ಅಭಿಚಾರ ಶಾಂತಿಗೆ, ನಂತರ ಎರಡು ಪಟ್ಟು ಅಮೃತ, ನಂತರ ಕೇವಲ ತುಪ್ಪ. ಸ್ಮಾರ್ತ (ಶೈವಾಗಮ ಗ್ರಂಥ): ಅಶ್ವತ್ಥ, ಉತ್ತರಾಣೆ, ಅಮೃತಬಳ್ಳಿ, ಗರಿಕೆ, ಶಮೀ, ಪಲಾಶ ಸಮಿಧೆಗಳು, ಪಾಯಸ, ತುಪ್ಪ — ಒಂದೊಂದನ್ನೂ ೧೦೮ ಅಥವಾ ೧೦೦೦ ಬಾರಿ; ಎಳ್ಳು ೧೦೮ ಬಾರಿ. ಅಕಾಲಮೃತ್ಯು ನಿವಾರಣೆಗಾಗಿ ಈ ಹೋಮದ ನಿರ್ಮಾಲ್ಯವನ್ನು ಸೇವಿಸಿ (ತಮಿಳು ಗ್ರಂಥದಲ್ಲಿ ಉದ್ಧರಿಸಿದ ಶಿವಪುರಾಣ). ಈ ಪಠ್ಯದ ಕ್ರಮ: ಸಂಕಲ್ಪ; ಸಾಮಾನ್ಯ ವಿಧಿಯ ಅಗ್ನಿಮುಖ; ಕಲಶದಲ್ಲಿ ಮೃತ್ಯುಂಜಯನ ಧ್ಯಾನ–ಆವಾಹನೆ; ತ್ರ್ಯಂಬಕ ಹೋಮ; ರುದ್ರಮಂತ್ರಗಳು; ಉತ್ತರಾಂಗ; ಉತ್ತರಪೂಜೆ; ಕಲಶಜಲ ಪ್ರೋಕ್ಷಣೆ–ತೀರ್ಥ; ಸಮರ್ಪಣೆ. ನಾಲ್ಕು ನಾಲ್ಕರ ಗರಿಕೆ ಕಟ್ಟುಗಳು, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನ ಮಿಶ್ರಣ (ತ್ರಿಮಧುರ), ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ಸಮಿಧೆಗಳು, ಪಾಯಸ ಅಥವಾ ಎಳ್ಳು, ನೀರಿನ ಕಲಶವನ್ನು ಸಿದ್ಧಪಡಿಸಿ.",
      verses: [
        {
          text: "मध्वाज्यदधिसंयुक्ता दूर्वा मृत्युञ्जयेन तु ।\nजुहुयाच्च सहस्रं वा अष्टाविंशतिमाहुतीः ॥",
          meaning: {
            en: "Durva joined with honey, ghee and curd should be offered with the Mrityunjaya mantra, a thousand times or twenty-eight oblations. (Prayoga-parijata, as quoted in Homa-Havana)",
            kn: "ಜೇನು, ತುಪ್ಪ, ಮೊಸರು ಸೇರಿಸಿದ ಗರಿಕೆಯನ್ನು ಮೃತ್ಯುಂಜಯ ಮಂತ್ರದಿಂದ ಸಾವಿರ ಬಾರಿ ಅಥವಾ ಇಪ್ಪತ್ತೆಂಟು ಆಹುತಿ ಹೋಮಿಸಬೇಕು. (ಪ್ರಯೋಗಪಾರಿಜಾತ; ಹೋಮ–ಹವನದಲ್ಲಿ ಉದ್ಧೃತ)",
          },
        },
        {
          text: "आयुर्विवृद्धये नित्यं जन्मनक्षत्र एव वा ।\nचतुश्चतुर्भिर्दूर्वाभिः क्षीराज्याक्ताभिरिष्यते ॥",
          meaning: {
            en: "For increase of life, daily or on the birth-star, the offering is made with four durva blades at a time, dipped in milk and ghee. (Tantrasara-sangraha 4.102)",
            kn: "ಆಯುಸ್ಸಿನ ವೃದ್ಧಿಗಾಗಿ ಪ್ರತಿದಿನ ಅಥವಾ ಜನ್ಮನಕ್ಷತ್ರದಂದು, ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ಹೋಮ ಮಾಡಬೇಕು. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೪.೧೦೨)",
          },
        },
        {
          text: "अयुतामृतसमिद्धोमाद्गोघृतक्षीरसंयुतात् ।\nसर्वे रोगा विनश्यन्ति विमुखो न हरेर्यदि ॥",
          meaning: {
            en: "By offering ten thousand amrita (guduchi) samidhs with cow’s ghee and milk, all diseases are destroyed, provided one is not turned away from Hari. (Tantrasara-sangraha 4.100)",
            kn: "ಹತ್ತು ಸಾವಿರ ಅಮೃತಬಳ್ಳಿ ಸಮಿಧೆಗಳನ್ನು ಗೋವಿನ ತುಪ್ಪ–ಹಾಲಿನೊಡನೆ ಹೋಮಿಸಿದರೆ, ಹರಿಯಿಂದ ವಿಮುಖನಾಗದಿದ್ದರೆ, ಎಲ್ಲ ರೋಗಗಳೂ ನಾಶವಾಗುತ್ತವೆ. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೪.೧೦೦)",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Madhva)",
      note: "Do achamana and pranayama, say the deshakala as in the Daily Puja sankalpa, and make this sankalpa with akshata and water. Name the person: for another, say अस्य यजमानस्य (with his birth-star and name) for मम.",
      noteKn: "ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲ ಹೇಳಿ, ಅಕ್ಷತೆ–ನೀರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ ಯಜಮಾನಸ್ಯ” (ಅವರ ನಕ್ಷತ್ರ, ಹೆಸರಿನೊಡನೆ).",
      when: { tradition: ["madhva"] },
      verses: [
        {
          text: "यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थम्\nमम अपमृत्युदोषपरिहारपूर्वकम् आरोग्ययुतदीर्घायुष्यावाप्त्यर्थं\nमृत्युञ्जयरुद्रान्तर्गतश्रीसङ्कर्षणप्रीत्यर्थं मृत्युञ्जयहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥",
          meaning: {
            en: "Prompted by Sri Parashurama, the Lord of Harini, who dwells within Mukhyaprana, the beloved of Bharati, and is the inner ruler of the Yajnapurusha, and for his pleasure: for the removal of the danger of untimely death and for gaining a long life with good health, and for the pleasure of Sri Sankarshana within Mrityunjaya Rudra, I shall perform the rite called the Mrityunjaya homa; as its part I shall prepare the sthandila and install the fire.",
            kn: "ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ: ನನ್ನ ಅಪಮೃತ್ಯುದೋಷ ಪರಿಹಾರಪೂರ್ವಕವಾಗಿ ಆರೋಗ್ಯಸಹಿತ ದೀರ್ಘಾಯುಷ್ಯ ಪ್ರಾಪ್ತಿಗಾಗಿ, ಮೃತ್ಯುಂಜಯ ರುದ್ರಾಂತರ್ಗತ ಶ್ರೀಸಂಕರ್ಷಣನ ಪ್ರೀತಿಗಾಗಿ ಮೃತ್ಯುಂಜಯಹೋಮವೆಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ ಮಾಡಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.",
          },
          when: { tradition: ["madhva"] },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Smarta)",
      note: "Remember Ganapati (शुक्लाम्बरधरं…), do achamana and pranayama, say the deshakala and make this sankalpa. For another person, say अस्य यजमानस्य (with his birth-star and name) for मम.",
      noteKn: "ಗಣಪತಿಸ್ಮರಣೆ (“ಶುಕ್ಲಾಂಬರಧರಂ…”), ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ದೇಶಕಾಲ ಹೇಳಿ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ ಯಜಮಾನಸ್ಯ” (ನಕ್ಷತ್ರ, ಹೆಸರಿನೊಡನೆ).",
      when: { tradition: ["smarta"] },
      verses: [
        {
          text: "ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nमम अपमृत्युदोषपरिहारपूर्वकम् आरोग्ययुतदीर्घायुष्यावाप्त्यर्थं\nश्रीमृत्युञ्जयप्रसादसिद्ध्यर्थं मृत्युञ्जयहोमं करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥",
          meaning: {
            en: "For the removal of all my accumulated sins and for the pleasure of the Supreme Lord; for the removal of the danger of untimely death and for gaining a long life with good health; for the grace of Sri Mrityunjaya, I shall perform the Mrityunjaya homa; as its part I shall prepare and mark the sthandila and install the fire.",
            kn: "ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ; ಅಪಮೃತ್ಯುದೋಷ ಪರಿಹಾರಪೂರ್ವಕವಾಗಿ ಆರೋಗ್ಯಸಹಿತ ದೀರ್ಘಾಯುಷ್ಯ ಪ್ರಾಪ್ತಿಗಾಗಿ; ಶ್ರೀಮೃತ್ಯುಂಜಯನ ಪ್ರಸಾದಸಿದ್ಧಿಗಾಗಿ ಮೃತ್ಯುಂಜಯಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.",
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
      title: "मृत्युञ्जयध्यानम् आवाहनं च",
      titleEn: "Dhyana and avahana of Mrityunjaya in the kalasha",
      note: "On the kalasha set up with the purvanga (or on a linga or image), meditate on the Lord with the Rudra dhyana, invoke Mrityunjaya with the vyahritis and worship him with gandha, akshata, bilva or flowers, dhupa, dipa and naivedya, saying ॐ नमो भगवते रुद्राय with each. Madhvas meditate on Sri Sankarshana within Rudra, the Lord who gives life (Homa-Havana), and offer tulasi to him within. The nyasa and the bija form of the Mahamrityunjaya mantra (ॐ हौं जूं सः…) printed in some Smarta manuals is taken only from one's guru and is not given here.",
      noteKn: "ಪೂರ್ವಾಂಗದಲ್ಲಿ ಇಟ್ಟ ಕಲಶದ ಮೇಲೆ (ಅಥವಾ ಲಿಂಗ, ಪ್ರತಿಮೆಯಲ್ಲಿ) ರುದ್ರಧ್ಯಾನದಿಂದ ಭಗವಂತನನ್ನು ಧ್ಯಾನಿಸಿ, ವ್ಯಾಹೃತಿಗಳಿಂದ ಮೃತ್ಯುಂಜಯನನ್ನು ಆವಾಹಿಸಿ, “ಓಂ ನಮೋ ಭಗವತೇ ರುದ್ರಾಯ” ಎನ್ನುತ್ತಾ ಗಂಧ, ಅಕ್ಷತೆ, ಬಿಲ್ವ ಅಥವಾ ಹೂವು, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯಗಳಿಂದ ಪೂಜಿಸಿ. ಮಾಧ್ವರು ರುದ್ರಾಂತರ್ಗತ ಆಯುಷ್ಯದಾತ ಶ್ರೀಸಂಕರ್ಷಣನನ್ನು ಧ್ಯಾನಿಸಿ (ಹೋಮ–ಹವನ) ಒಳಗಿರುವ ಅವನಿಗೆ ತುಳಸಿ ಅರ್ಪಿಸುತ್ತಾರೆ. ಕೆಲವು ಸ್ಮಾರ್ತ ಗ್ರಂಥಗಳಲ್ಲಿ ಮುದ್ರಿತವಾದ ಮಹಾಮೃತ್ಯುಂಜಯದ ನ್ಯಾಸ ಮತ್ತು ಬೀಜಸಹಿತ ರೂಪವನ್ನು (ಓಂ ಹೌಂ ಜೂಂ ಸಃ…) ಗುರುವಿನಿಂದಲೇ ಪಡೆಯಬೇಕು; ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ.",
      verses: [
        {
          text: "आपातालनभःस्थलान्तभुवनब्रह्माण्डमाविस्फुरज्-\nज्योतिःस्फाटिकलिङ्गमौलिविलसत्पूर्णेन्दुवान्तामृतैः ।\nअस्तोकाप्लुतमेकमीशमनिशं रुद्रानुवाकाञ्जपन्\nध्यायेदीप्सितसिद्धये ध्रुवपदं विप्रोऽभिषिञ्चेच्छिवम् ॥",
          meaning: {
            en: "To gain what he seeks and the abiding state, let the worshipper meditate on the one Lord Śiva: the crystal liṅga whose light shines through all the worlds from the nether regions to the sky, bathed abundantly in the nectar flowing from the full moon on His head; and, ceaselessly chanting the Rudra anuvākas, let him bathe Śiva in abhiṣeka.",
            kn: "ಬಯಸಿದ ಫಲಕ್ಕಾಗಿಯೂ ಶಾಶ್ವತ ಪದವಿಗಾಗಿಯೂ ಭಕ್ತನು ಏಕನಾದ ಈಶ್ವರನಾದ ಶಿವನನ್ನು ಧ್ಯಾನಿಸಲಿ: ಪಾತಾಳದಿಂದ ಆಕಾಶದವರೆಗಿನ ಎಲ್ಲ ಲೋಕಗಳಲ್ಲಿಯೂ ಬೆಳಗುವ ಸ್ಫಟಿಕಲಿಂಗರೂಪನಾದ, ಶಿರಸ್ಸಿನ ಪೂರ್ಣಚಂದ್ರನಿಂದ ಸುರಿಯುವ ಅಮೃತದಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ತೋಯ್ದಿರುವ ಶಿವನನ್ನು. ರುದ್ರಾನುವಾಕಗಳನ್ನು ನಿರಂತರವಾಗಿ ಜಪಿಸುತ್ತಾ ಶಿವನಿಗೆ ಅಭಿಷೇಕ ಮಾಡಲಿ.",
          },
        },
        {
          text: "ॐ भूर्भुवः स्वः । श्रीमृत्युञ्जयम् अस्मिन्कलशे आवाहयामि स्थापयामि पूजयामि ॥",
          meaning: {
            en: "Om, earth, sky, heaven: I invoke Sri Mrityunjaya into this kalasha; I install him and worship him.",
            kn: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಶ್ರೀಮೃತ್ಯುಂಜಯನನ್ನು ಈ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "ॐ नमो भगवते रुद्राय ॥",
          meaning: {
            en: "Om, salutations to the Lord Rudra.",
            kn: "ಓಂ, ಭಗವಂತನಾದ ರುದ್ರನಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "त्र्यम्बकहोमः",
      titleEn: "The Tryambaka homa: dravyas and counts",
      note: "Offer with the Tryambaka mantra, one oblation for each repetition, while the kalasha is touched. Madhva (Homa-Havana): durva, four blades to each oblation, dipped in honey, ghee and curd, 1000, 108 or 28 times, with the mantra enclosed by the pranava and the vyahritis; or, for illness, amrita (guduchi) samidhs with cow's ghee and milk (Tantrasara). Smarta (Shaiva Agama manual): samidhs of ashvattha, apamarga, guduchi, durva, shami and palasha, then payasa and ghee, each 108 or 1000 times, and sesame 108 times, with the plain mantra and svaha. After the counted oblations, offer the Rudra mantras of the next step.",
      noteKn: "ತ್ರ್ಯಂಬಕ ಮಂತ್ರದ ಪ್ರತಿ ಪಠಣಕ್ಕೆ ಒಂದು ಆಹುತಿಯಂತೆ, ಕಲಶವನ್ನು ಮುಟ್ಟಿಕೊಂಡು ಹೋಮಿಸಿ. ಮಾಧ್ವ (ಹೋಮ–ಹವನ): ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ೧೦೦೦, ೧೦೮ ಅಥವಾ ೨೮ ಬಾರಿ, ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ ಮಂತ್ರದಿಂದ; ಅಥವಾ ರೋಗಶಾಂತಿಗೆ ಗೋವಿನ ತುಪ್ಪ–ಹಾಲಿನೊಡನೆ ಅಮೃತಬಳ್ಳಿ ಸಮಿಧೆಗಳು (ತಂತ್ರಸಾರ). ಸ್ಮಾರ್ತ (ಶೈವಾಗಮ ಗ್ರಂಥ): ಅಶ್ವತ್ಥ, ಉತ್ತರಾಣೆ, ಅಮೃತಬಳ್ಳಿ, ಗರಿಕೆ, ಶಮೀ, ಪಲಾಶ ಸಮಿಧೆಗಳು, ನಂತರ ಪಾಯಸ, ತುಪ್ಪ — ಒಂದೊಂದನ್ನೂ ೧೦೮ ಅಥವಾ ೧೦೦೦ ಬಾರಿ, ಎಳ್ಳು ೧೦೮ ಬಾರಿ, ಸ್ವಾಹಾಕಾರಸಹಿತ ಮಂತ್ರದಿಂದ. ಎಣಿಸಿದ ಆಹುತಿಗಳ ನಂತರ ಮುಂದಿನ ಹಂತದ ರುದ್ರಮಂತ್ರಗಳು.",
      verses: [
        {
          text: "ॐ भूर्भुवः स्वः । त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् । स्वर्भुवर्भूः ॐ ॥\nस्वाहा । मृत्युञ्जयरुद्रान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतश्रीसङ्कर्षणायेदं न मम ॥",
          meaning: {
            en: "Om, earth, sky, heaven. We worship the three-eyed one, fragrant, who increases nourishment; as the ripe cucumber from its stalk, may I be freed from death, not from immortality. Heaven, sky, earth, Om. Svaha; this is for Sri Sankarshana, who dwells within Mukhyaprana, the beloved of Bharati, within Mrityunjaya Rudra, not for me. (Rigveda 7.59.12, enclosed by the pranava and the vyahritis as the Homa-Havana teaches)",
            kn: "ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಮೂರು ಕಣ್ಣುಗಳ, ಸುಗಂಧಮಯನಾದ, ಪುಷ್ಟಿವರ್ಧಕನಾದ ದೇವನನ್ನು ಪೂಜಿಸುತ್ತೇವೆ; ಮಾಗಿದ ಸೌತೆಕಾಯಿ ತೊಟ್ಟಿನಿಂದ ಬಿಡುಗಡೆಯಾಗುವಂತೆ ನಾನು ಮೃತ್ಯುವಿನಿಂದ ಬಿಡುಗಡೆ ಹೊಂದಲಿ, ಅಮೃತತ್ವದಿಂದಲ್ಲ. ಸ್ವರ್ಭುವರ್ಭೂಃ ಓಂ. ಸ್ವಾಹಾ; ಇದು ಮೃತ್ಯುಂಜಯ ರುದ್ರಾಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಸಂಕರ್ಷಣನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೭.೫೯.೧೨, ಹೋಮ–ಹವನ ಹೇಳುವಂತೆ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ)",
          },
          when: { tradition: ["madhva"] },
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
      title: "रुद्रमन्त्राः",
      titleEn: "The Rudra mantras with the homa",
      note: "After the Tryambaka oblations, recite these riks that follow the Namakam of the Sri Rudram (copied from that text). The verse ये ते सहस्रम्… ends with मृत्यवे स्वाहा twice: offer two oblations of ghee with it, to Mrityu (Madhva: to the Lord within him). Then recite the others with folded hands. Families that do the full Rudra homa (the eleven anuvakas of the Namakam with ghee) do it here as their purohita directs; it is a longer rite of its own.",
      noteKn: "ತ್ರ್ಯಂಬಕ ಆಹುತಿಗಳ ನಂತರ ಶ್ರೀರುದ್ರದ ನಮಕದ ನಂತರ ಬರುವ ಈ ಋಕ್ಕುಗಳನ್ನು ಹೇಳಿ (ಆ ಪಠ್ಯದಿಂದ ತೆಗೆದದ್ದು). “ಯೇ ತೇ ಸಹಸ್ರಮ್…” ಮಂತ್ರ “ಮೃತ್ಯವೇ ಸ್ವಾಹಾ” ಎಂದು ಎರಡು ಬಾರಿ ಮುಗಿಯುತ್ತದೆ: ಅದರಿಂದ ಮೃತ್ಯುವಿಗೆ (ಮಾಧ್ವ: ಒಳಗಿರುವ ಭಗವಂತನಿಗೆ) ಎರಡು ಆಜ್ಯಾಹುತಿ ನೀಡಿ. ಉಳಿದವುಗಳನ್ನು ಕೈಮುಗಿದು ಹೇಳಿ. ಪೂರ್ಣ ರುದ್ರಹೋಮ (ನಮಕದ ಹನ್ನೊಂದು ಅನುವಾಕಗಳಿಂದ ಆಜ್ಯಾಹುತಿ) ಮಾಡುವವರು ಇಲ್ಲಿ ಪುರೋಹಿತರ ಮಾರ್ಗದರ್ಶನದಂತೆ ಮಾಡಲಿ; ಅದು ಪ್ರತ್ಯೇಕ ದೀರ್ಘ ಕರ್ಮ.",
      verses: [
        {
          text: "ये ते सहस्रमयुतं पाशा मृत्यो मर्त्याय हन्तवे ।\nतान् यज्ञस्य मायया सर्वानवयजामहे ।\nमृत्यवे स्वाहा मृत्यवे स्वाहा ॥",
          meaning: {
            en: "The thousand, the ten thousand snares you lay, O Death, to slay mortals: all of them we remove by the power of the sacrifice. To Death, svāhā! To Death, svāhā!",
            kn: "ಮೃತ್ಯುವೇ, ಮನುಷ್ಯರನ್ನು ಕೊಲ್ಲಲು ನೀನು ಹಾಕಿರುವ ಸಾವಿರಾರು, ಹತ್ತು ಸಾವಿರ ಪಾಶಗಳನ್ನು ಯಜ್ಞದ ಶಕ್ತಿಯಿಂದ ನಾವು ತೆಗೆದುಹಾಕುತ್ತೇವೆ. ಮೃತ್ಯುವಿಗೆ ಸ್ವಾಹಾ, ಮೃತ್ಯುವಿಗೆ ಸ್ವಾಹಾ.",
          },
        },
        {
          text: "यो रुद्रो अग्नौ यो अप्सु य ओषधीषु ।\nयो रुद्रो विश्वा भुवनाविवेश तस्मै रुद्राय नमो अस्तु ॥",
          meaning: {
            en: "Salutations to that Rudra who is in fire, in the waters and in the plants, the Rudra who has entered all the worlds.",
            kn: "ಅಗ್ನಿಯಲ್ಲಿ, ಜಲದಲ್ಲಿ, ಓಷಧಿಗಳಲ್ಲಿ ಇರುವ, ಎಲ್ಲ ಲೋಕಗಳನ್ನೂ ಪ್ರವೇಶಿಸಿರುವ ಆ ರುದ್ರನಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
        {
          text: "तमु ष्टुहि यः स्विषुः सुधन्वा यो विश्वस्य क्षयति भेषजस्य ।\nयक्ष्वा महे सौमनसाय रुद्रं नमोभिर्देवमसुरं दुवस्य ॥",
          meaning: {
            en: "Praise him who has good arrows and a good bow, who rules over every remedy. Worship Rudra for his great kindness; honour the divine, mighty Lord with salutations.",
            kn: "ಉತ್ತಮ ಬಾಣಗಳೂ ಉತ್ತಮ ಧನುಸ್ಸೂ ಉಳ್ಳ, ಎಲ್ಲ ಔಷಧಗಳ ಮೇಲೆ ಅಧಿಕಾರವುಳ್ಳ ಅವನನ್ನು ಸ್ತುತಿಸು. ಅವನ ಮಹಾ ಕೃಪೆಗಾಗಿ ರುದ್ರನನ್ನು ಪೂಜಿಸು; ಬಲಶಾಲಿಯಾದ ಆ ದೇವನನ್ನು ನಮಸ್ಕಾರಗಳಿಂದ ಆರಾಧಿಸು.",
          },
        },
        {
          text: "ॐ नमो भगवते रुद्राय विष्णवे मृत्युर्मे पाहि ॥",
          meaning: {
            en: "Om, salutations to the Lord Rudra, to Viṣṇu: protect me from death.",
            kn: "ಓಂ, ಭಗವಂತನಾದ ರುದ್ರನಿಗೆ, ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಮೃತ್ಯುವಿನಿಂದ ನನ್ನನ್ನು ಕಾಪಾಡು.",
          },
        },
        {
          text: "प्राणानां ग्रन्थिरसि रुद्रो मा विशान्तकः ।\nतेनान्नेनाप्यायस्व ॥",
          meaning: {
            en: "You are the knot that holds the life-breaths together. Rudra, the Ender, do not enter me (as death). Be nourished by this food.",
            kn: "ನೀನು ಪ್ರಾಣಗಳನ್ನು ಒಟ್ಟಿಗೆ ಬಂಧಿಸಿರುವ ಗ್ರಂಥಿಯಾಗಿರುವೆ. ಅಂತಕನಾದ ರುದ್ರನೇ, ನನ್ನನ್ನು (ಮೃತ್ಯುವಾಗಿ) ಪ್ರವೇಶಿಸಬೇಡ. ಈ ಅನ್ನದಿಂದ ಪುಷ್ಟನಾಗು.",
          },
        },
        {
          text: "नमो रुद्राय विष्णवे मृत्युर्मे पाहि ।\nसदाशिवोम् ॥",
          meaning: {
            en: "Salutations to Rudra, to Viṣṇu: protect me from death. Sadāśiva, Om.",
            kn: "ರುದ್ರನಿಗೆ, ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ; ಮೃತ್ಯುವಿನಿಂದ ನನ್ನನ್ನು ಕಾಪಾಡು. ಸದಾಶಿವ, ಓಂ.",
          },
        },
      ],
    },
    {
      title: "उत्तराङ्गम्",
      titleEn: "Uttaranga: do the Common Procedure from the svishtakrit to the closing prayers",
      note: "After the last main oblation, do the uttaranga as given in full in \"Homa: Common Procedure\", for your tradition: the svishtakrit (offered with a little of each material used in the main homa), the prayaschitta offerings, the purnahuti and vasordhara, the samsrava, the marjana, the agni upasthana, the raksha and the closing prayers. Keep the samarpana and the farewell to Agni for the end of this text, after the closing puja. For the svishtakrit offer a little of each material used in the main homa (durva with trimadhura, the samidhs, payasa, sesame).",
      noteKn: "ಕೊನೆಯ ಪ್ರಧಾನ ಆಹುತಿಯ ನಂತರ “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿರುವಂತೆ ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ಉತ್ತರಾಂಗ ಮಾಡಿ: ಸ್ವಿಷ್ಟಕೃತ್ (ಪ್ರಧಾನ ಹೋಮದ ಪ್ರತಿ ದ್ರವ್ಯದ ಸ್ವಲ್ಪ ಭಾಗದಿಂದ), ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ಪೂರ್ಣಾಹುತಿ–ವಸೋರ್ಧಾರಾ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ಅಗ್ನ್ಯುಪಸ್ಥಾನ, ರಕ್ಷಾಧಾರಣ, ಸಮಾಪ್ತಿ ಪ್ರಾರ್ಥನೆಗಳು. ಸಮರ್ಪಣೆ ಮತ್ತು ಅಗ್ನಿವಿಸರ್ಜನೆಯನ್ನು ಉತ್ತರಪೂಜೆಯ ನಂತರ, ಈ ಪಠ್ಯದ ಕೊನೆಯಲ್ಲಿ ಮಾಡಿ. ಸ್ವಿಷ್ಟಕೃತ್‌ಗೆ ಪ್ರಧಾನ ಹೋಮದ ಪ್ರತಿ ದ್ರವ್ಯದ ಸ್ವಲ್ಪ ಭಾಗ (ತ್ರಿಮಧುರದ ಗರಿಕೆ, ಸಮಿಧೆ, ಪಾಯಸ, ಎಳ್ಳು).",
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
      note: "Worship Mrityunjaya in the kalasha once more with dhupa, dipa and naivedya. Wave the lamp (mangalarati) before the deity.",
      noteKn: "ಕಲಶದಲ್ಲಿರುವ ಮೃತ್ಯುಂಜಯನಿಗೆ ಮತ್ತೆ ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ ಅರ್ಪಿಸಿ. ದೇವತೆಗೆ ಮಂಗಳಾರತಿ ಬೆಳಗಿ.",
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
      title: "कलशप्रोक्षणं तीर्थप्रसादश्च",
      titleEn: "Sprinkling with the kalasha water, the tirtha and prasada",
      note: "Take up the kalasha and sprinkle the person for whom the homa was done, and then the family, with its water, reciting the Tryambaka mantra (without svaha) and मा नस्तोके…; give the water to drink as tirtha with the verse अकालमृत्युहरणं…. Eat the prasada (the naivedya and the remains of the payasa) to remove untimely death (Shiva Purana, as quoted in the Tamil manual). On a birthday the person also drinks milk with sesame and jaggery with the verse सतिलं गुडसम्मिश्रं… (Homa-Havana; see \"Ayushya Homa\").",
      noteKn: "ಕಲಶವನ್ನು ಎತ್ತಿಕೊಂಡು ಯಾರಿಗಾಗಿ ಹೋಮ ಮಾಡಿದೆಯೋ ಅವರಿಗೂ ನಂತರ ಮನೆಯವರಿಗೂ ತ್ರ್ಯಂಬಕ ಮಂತ್ರ (ಸ್ವಾಹಾ ಇಲ್ಲದೆ) ಮತ್ತು “ಮಾ ನಸ್ತೋಕೇ…” ಹೇಳುತ್ತಾ ಅದರ ಜಲವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ; “ಅಕಾಲಮೃತ್ಯುಹರಣಂ…” ಎಂದು ತೀರ್ಥವಾಗಿ ಕುಡಿಯಲು ಕೊಡಿ. ಅಕಾಲಮೃತ್ಯು ನಿವಾರಣೆಗೆ ಪ್ರಸಾದವನ್ನು (ನೈವೇದ್ಯ, ಪಾಯಸದ ಶೇಷ) ಸೇವಿಸಿ (ತಮಿಳು ಗ್ರಂಥದಲ್ಲಿ ಉದ್ಧೃತ ಶಿವಪುರಾಣ). ಜನ್ಮದಿನದಂದು “ಸತಿಲಂ ಗುಡಸಮ್ಮಿಶ್ರಂ…” ಎಂದು ಎಳ್ಳು–ಬೆಲ್ಲ ಸೇರಿದ ಹಾಲು ಕುಡಿಯಿರಿ (ಹೋಮ–ಹವನ; “ಆಯುಷ್ಯ ಹೋಮ” ನೋಡಿ).",
      verses: [
        {
          text: "ॐ त्र्यम्बकं यजामहे\nसुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्\nमृत्योर्मुक्षीय माऽमृतात् ॥",
          meaning: {
            en: "We worship the three-eyed One, fragrant, who nourishes and increases all beings. As the ripe cucumber is freed from its stalk, may He free us from death, but not from immortality.",
            kn: "ಸುಗಂಧಯುಕ್ತನಾದ, ಎಲ್ಲರ ಪುಷ್ಟಿಯನ್ನು ವೃದ್ಧಿಸುವ ತ್ರ್ಯಂಬಕನನ್ನು (ಮುಕ್ಕಣ್ಣನಾದ ಶಿವನನ್ನು) ನಾವು ಪೂಜಿಸುತ್ತೇವೆ. ಹಣ್ಣಾದ ಸೌತೆಕಾಯಿ ತೊಟ್ಟಿನಿಂದ ಸಹಜವಾಗಿ ಬಿಡುಗಡೆಯಾಗುವಂತೆ ಆತನು ನಮ್ಮನ್ನು ಮೃತ್ಯುವಿನ ಬಂಧನದಿಂದ ಬಿಡಿಸಲಿ; ಅಮೃತತ್ವದಿಂದ ಅಲ್ಲ.",
          },
        },
        {
          text: "मा नस्तोके तनये मा न आयौ मा नो गोषु मा नो अश्वेषु रीरिषः ।\nवीरान्मा नो रुद्र भामितो वधीर्हविष्मन्तः सदमित्त्वा हवामहे ॥",
          meaning: {
            en: "Harm us not in our children and grandchildren, nor in our life, nor in our cattle, nor in our horses. O Rudra, in anger strike not our heroes; bearing offerings we call on you always. (Rigveda 1.114.8; the Rudram verse for protection.)",
            kn: "ನಮ್ಮ ಮಕ್ಕಳು–ಮೊಮ್ಮಕ್ಕಳಲ್ಲಿ, ನಮ್ಮ ಆಯುಸ್ಸಿನಲ್ಲಿ, ನಮ್ಮ ಗೋವುಗಳಲ್ಲಿ, ಕುದುರೆಗಳಲ್ಲಿ ನಮಗೆ ಹಾನಿ ಮಾಡಬೇಡ. ಓ ರುದ್ರನೇ, ಕೋಪದಿಂದ ನಮ್ಮ ವೀರರನ್ನು ಕೊಲ್ಲಬೇಡ; ಹವಿಸ್ಸನ್ನು ಹಿಡಿದು ನಾವು ಯಾವಾಗಲೂ ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇವೆ. (ಋಗ್ವೇದ ೧.೧೧೪.೮; ರಕ್ಷೆಗಾಗಿ ರುದ್ರದ ಮಂತ್ರ.)",
          },
        },
        {
          text: "अकालमृत्युहरणं सर्वव्याधिविनाशनम् ।\nविष्णुपादोदकं तीर्थं जठरे धारयाम्यहम् ॥",
          meaning: {
            en: "I take within me this holy water that has washed the feet of Vishnu, which removes untimely death and destroys every disease.",
            kn: "ಅಕಾಲಮೃತ್ಯುವನ್ನು ಹೋಗಲಾಡಿಸುವ, ಎಲ್ಲ ರೋಗಗಳನ್ನೂ ನಾಶಮಾಡುವ, ವಿಷ್ಣುವಿನ ಪಾದಗಳನ್ನು ತೊಳೆದ ಈ ತೀರ್ಥವನ್ನು ನಾನು ಸೇವಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "सतिलं गुडसम्मिश्रमञ्जल्यर्धमितं पयः ।\nमार्कण्डेयाद्वरं लब्ध्वा पिबाम्यायुर्विवृद्धये ॥",
          meaning: {
            en: "Having obtained the boon from Markandeya, I drink milk, half a handful, mixed with sesame and jaggery, for the increase of my life. (Said while taking the milk after the pradakshina and namaskara.)",
            kn: "ಮಾರ್ಕಂಡೇಯನಿಂದ ವರವನ್ನು ಪಡೆದು, ಆಯುಸ್ಸಿನ ವೃದ್ಧಿಗಾಗಿ ಎಳ್ಳು–ಬೆಲ್ಲ ಸೇರಿದ ಅರ್ಧ ಬೊಗಸೆ ಹಾಲನ್ನು ಕುಡಿಯುತ್ತೇನೆ. (ಪ್ರದಕ್ಷಿಣೆ–ನಮಸ್ಕಾರಗಳ ನಂತರ ಹಾಲು ಸ್ವೀಕರಿಸುವಾಗ.)",
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
          text: "अनेन मृत्युञ्जयहोमेन यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गतः\nमृत्युञ्जयरुद्रान्तर्गतः श्रीसङ्कर्षणः प्रीयताम् । श्रीकृष्णार्पणमस्तु ॥",
          meaning: {
            en: "By this Mrityunjaya homa may Sri Sankarshana, the inner ruler of the Yajnapurusha, who dwells within Mukhyaprana, the beloved of Bharati, and within Mrityunjaya Rudra, be pleased. May it be an offering to Sri Krishna.",
            kn: "ಈ ಮೃತ್ಯುಂಜಯಹೋಮದಿಂದ ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ, ಮೃತ್ಯುಂಜಯ ರುದ್ರಾಂತರ್ಗತನಾದ ಶ್ರೀಸಂಕರ್ಷಣನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.",
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
          text: "अनेन मृत्युञ्जयहोमकर्मणा श्रीमृत्युञ्जयः प्रीयताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥",
          meaning: {
            en: "By this rite of the Mrityunjaya homa may Sri Mrityunjaya be pleased. Om tat sat: may it be an offering to Brahman.",
            kn: "ಈ ಮೃತ್ಯುಂಜಯಹೋಮ ಕರ್ಮದಿಂದ ಶ್ರೀಮೃತ್ಯುಂಜಯನು ಪ್ರೀತನಾಗಲಿ. ಓಂ ತತ್ಸತ್ ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು.",
          },
          when: { tradition: ["smarta"] },
        },
      ],
    },
  ],
};
