/**
 * Śrī Rudram: Namakam (Taittirīya Saṃhitā 4.5) and Chamakam (TS 4.7.1–11).
 *
 * Sources:
 * - Base: vishvAsa/vedAH_yajuH (GitHub, CC BY 4.0), TS mūlam, pañcāti-krama
 *   files 4/5.md and 4/7.md. Svaras stripped; Taittirīya pronunciation spellings
 *   normalised to the usual printed form: anusvāra restored at word ends using the
 *   pada-pāṭha in the same repository (शिवम्बभूव → शिवं बभूव, पुरुषञ्जगत् →
 *   पुरुषं जगत्), ꣳ/ँ → ं, jihvāmūlīya/upadhmānīya → visarga, श्ञ → श्न.
 * - Witness 1: TITUS, Taittirīya-Saṃhitā (Weber's edition, romanised).
 * - Witness 2 (Namakam): Ambuda, ‘Rudram with Sayana Bhashya’ (Kāśīnātha Śāstrī
 *   Āgāśe, Ānandāśrama TS vol. 6, 1949), partly proofread typed text.
 * - Chamakam cross-checked against TITUS and the vishvAsa vākya-krama rendering.
 *
 * Resolved readings:
 * - 4.5.1 अयक्ष्मया (Āgāśe; base and TITUS अयक्षमया).
 * - Sandhi restored across the pañcāśat breaks, where the base gives pausal
 *   forms: नमो रोहिताय, नम इषुमद्भ्यो, रथेभ्यो रथपतिभ्यश्च, अस्मिन्ननातुरम्,
 *   तनुवो रुद्र (Namakam) and मेऽपानश्च (Chamakam 1).
 * - Kept the base (with Āgāśe) against TITUS: मीढुषे (TITUS मीडुषे), आहनन्याय
 *   (आहनव्याय), चावार्याय (चावार्त्याय), निवेष्प्याय (निवेष्य्याय), नक्तं (ञक्तं),
 *   निषङ्गिण इषुधिमते (एषुधिमते), परि ब्भुज, शिवां गिरित्र.
 * - Taittirīya visarga sandhi (नमस्सहमानाय, नमश्शङ्गाय) kept as printed in
 *   South Indian editions.
 * Opening ॐ नमो भगवते रुद्राय as in recitation. The dhyāna, nyāsa and the
 * supplementary ṛks after anuvāka 11 are not yet included (see contentNote).
 * GENERATED from the sources above; see PROOFREADING.md.
 */
import type { Mantra } from '../types';

export const sriRudramNamakam: Mantra = {
  id: "sri-rudram-namakam",
  title: "श्रीरुद्रप्रश्नः (नमकम्)",
  titleEn: "Sri Rudram · Namakam",
  category: "vedic",
  order: 1,
  series: "sri-rudram",
  deity: "Rudra (Śiva)",
  source: "Kṛṣṇa Yajurveda, Taittirīya Saṃhitā 4.5",
  summary: "The Śatarudrīya, the great Yajurvedic litany to Rudra (Taittirīya Saṃhitā 4.5). Its eleven anuvākas first pacify Rudra's wrath and weapons, then salute him as present in every being, place and calling, and end with prayers for protection. Recited with the Chamakam as Śrī Rudram.",
  summaryKn: "ಯಜುರ್ವೇದದ ಶತರುದ್ರೀಯ (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೪.೫). ಇದರ ಹನ್ನೊಂದು ಅನುವಾಕಗಳು ಮೊದಲು ರುದ್ರನ ಕೋಪವನ್ನೂ ಆಯುಧಗಳನ್ನೂ ಶಾಂತಗೊಳಿಸಿ, ನಂತರ ಎಲ್ಲ ಜೀವಿಗಳಲ್ಲಿ, ಎಲ್ಲ ಸ್ಥಳಗಳಲ್ಲಿ, ಎಲ್ಲ ವೃತ್ತಿಗಳಲ್ಲಿ ಇರುವ ಅವನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತವೆ; ಕೊನೆಯಲ್ಲಿ ರಕ್ಷಣೆಗಾಗಿ ಪ್ರಾರ್ಥಿಸುತ್ತವೆ. ಚಮಕದೊಂದಿಗೆ ಇದನ್ನು ಶ್ರೀರುದ್ರ ಎಂದು ಪಠಿಸುತ್ತಾರೆ.",
  difficulty: "advanced",
  completeness: "partial",
  contentNote: "Taittirīya Saṃhitā 4.5 is given in full, with the opening ॐ नमो भगवते रुद्राय. Not included yet: the dhyāna ślokas, the nyāsa, and the supplementary ṛks many reciters add after the eleventh anuvāka (त्र्यम्बकं यजामहे…, तमु ष्टुहि…, अयं मे हस्तो भगवान्…, ये ते सहस्रम्… and the rest); these could not yet be checked against two independent sources.",
  sections: [
    {
      title: "उपक्रमः",
      titleEn: "Opening",
      verses: [
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
      title: "प्रथमोऽनुवाकः",
      titleEn: "Anuvāka 1",
      verses: [
        {
          n: 1,
          text: "नमस्ते रुद्र मन्यव उतो त इषवे नमः ।\nनमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः ॥",
          meaning: {
            en: "Salutations, O Rudra, to your wrath and to your arrow; salutations to your bow and to your two arms.",
            kn: "ಓ ರುದ್ರದೇವನೇ, ನಿನ್ನ ಕೋಪಕ್ಕೂ ನಿನ್ನ ಬಾಣಕ್ಕೂ ನಮಸ್ಕಾರ. ನಿನ್ನ ಧನುಸ್ಸಿಗೂ ನಿನ್ನ ಎರಡು ಬಾಹುಗಳಿಗೂ ನಮಸ್ಕಾರ.",
          },
        },
        {
          n: 2,
          text: "या त इषुश्शिवतमा शिवं बभूव ते धनुः ।\nशिवा शरव्या या तव तया नो रुद्र मृडय ॥",
          meaning: {
            en: "Your arrow has become most auspicious, your bow is auspicious, and your missile is auspicious; with these, O Rudra, make us happy.",
            kn: "ನಿನ್ನ ಬಾಣವು ಅತ್ಯಂತ ಮಂಗಳಕರವಾಗಿದೆ, ನಿನ್ನ ಧನುಸ್ಸೂ ಮಂಗಳಕರ, ನಿನ್ನ ಅಸ್ತ್ರವೂ ಮಂಗಳಕರ. ಓ ರುದ್ರನೇ, ಅವುಗಳಿಂದ ನಮ್ಮನ್ನು ಸುಖಿಗಳನ್ನಾಗಿ ಮಾಡು.",
          },
        },
        {
          n: 3,
          text: "या ते रुद्र शिवा तनूरघोरापापकाशिनी ।\nतया नस्तनुवा शन्तमया गिरिशन्ताभि चाकशीहि ॥",
          meaning: {
            en: "O Rudra, dweller on the mountain, look upon us with that form of yours which is gentle, not fearsome, showing no evil, and most peaceful.",
            kn: "ಗಿರಿಯಲ್ಲಿ ನೆಲಸಿ ಸುಖವನ್ನು ಕೊಡುವ ರುದ್ರನೇ, ಭಯಂಕರವಲ್ಲದ, ಪಾಪವನ್ನು ತೋರದ, ಮಂಗಳಕರವೂ ಶಾಂತವೂ ಆದ ನಿನ್ನ ಆ ರೂಪದಿಂದ ನಮ್ಮನ್ನು ಕೃಪೆಯಿಂದ ನೋಡು.",
          },
        },
        {
          n: 4,
          text: "यामिषुं गिरिशन्त हस्ते बिभर्ष्यस्तवे ।\nशिवां गिरित्र तां कुरु मा हिंसीः पुरुषं जगत् ॥",
          meaning: {
            en: "The arrow you hold in your hand to shoot, O mountain-dweller, make it auspicious, O guardian of the mountain; do not harm man or the moving world.",
            kn: "ಗಿರಿವಾಸಿಯೇ, ಎಸೆಯಲು ನೀನು ಕೈಯಲ್ಲಿ ಹಿಡಿದಿರುವ ಬಾಣವನ್ನು, ಗಿರಿಯನ್ನು ಕಾಯುವವನೇ, ಮಂಗಳಕರವಾಗಿಸು. ಮನುಷ್ಯರನ್ನೂ ಜಗತ್ತಿನ ಜೀವಿಗಳನ್ನೂ ಹಿಂಸಿಸಬೇಡ.",
          },
        },
        {
          n: 5,
          text: "शिवेन वचसा त्वा गिरिशाच्छा वदामसि ।\nयथा नस्सर्वमिज्जगदयक्ष्मं सुमना असत् ॥",
          meaning: {
            en: "With auspicious words we pray to reach you, O mountain-dweller, so that all our world may be free of disease and of kindly mind.",
            kn: "ಗಿರಿಶನೇ, ನಿನ್ನನ್ನು ಸೇರಲು ಮಂಗಳಕರವಾದ ಮಾತುಗಳಿಂದ ಪ್ರಾರ್ಥಿಸುತ್ತೇವೆ; ನಮ್ಮ ಈ ಜಗತ್ತೆಲ್ಲವೂ ರೋಗವಿಲ್ಲದೆ ಪ್ರಸನ್ನ ಮನಸ್ಸಿನಿಂದ ಇರಲಿ.",
          },
        },
        {
          n: 6,
          text: "अध्यवोचदधिवक्ता प्रथमो दैव्यो भिषक् ।\nअहींश्च सर्वाञ्जम्भयन्त्सर्वाश्च यातुधान्यः ॥",
          meaning: {
            en: "May he speak for us, the advocate, the first divine physician, crushing all serpents and all evil spirits.",
            kn: "ದೇವತೆಗಳ ಮೊದಲ ವೈದ್ಯನಾದ ಅವನು ನಮ್ಮ ಪರವಾಗಿ ಮಾತನಾಡಲಿ; ಎಲ್ಲ ಸರ್ಪಗಳನ್ನೂ ಎಲ್ಲ ದುಷ್ಟಶಕ್ತಿಗಳನ್ನೂ ನಾಶಮಾಡಿ ನಮ್ಮನ್ನು ಕಾಪಾಡಲಿ.",
          },
        },
        {
          n: 7,
          text: "असौ यस्ताम्रो अरुण उत बभ्रुस्सुमङ्गलः ।\nये चेमां रुद्रा अभितो दिक्षु श्रितास्सहस्रशोऽवैषां हेड ईमहे ॥",
          meaning: {
            en: "He who is coppery, ruddy and brown, the most auspicious one (seen as the rising sun), and the Rudras who dwell around him in thousands in every quarter: we appease their anger with worship.",
            kn: "ತಾಮ್ರವರ್ಣನೂ ಕೆಂಪಾದವನೂ ಕಂದುಬಣ್ಣದವನೂ ಆದ ಈ ಮಂಗಳಮಯನು (ಉದಯಿಸುವ ಸೂರ್ಯನ ರೂಪದ ರುದ್ರನು), ಮತ್ತು ಅವನ ಸುತ್ತ ಎಲ್ಲ ದಿಕ್ಕುಗಳಲ್ಲಿ ಸಾವಿರಾರಾಗಿ ನೆಲಸಿರುವ ರುದ್ರರು — ಅವರ ಕೋಪವನ್ನು ಪೂಜೆಯಿಂದ ಶಮನಗೊಳಿಸುತ್ತೇವೆ.",
          },
        },
        {
          n: 8,
          text: "असौ योऽवसर्पति नीलग्रीवो विलोहितः ।\nउतैनं गोपा अदृशन्नदृशन्नुदहार्यः ।\nउतैनं विश्वा भूतानि स दृष्टो मृडयाति नः ॥",
          meaning: {
            en: "He who moves across the sky, blue-necked and red: the cowherds and the women carrying water have seen him, and all beings see him. May he, being seen, be gracious to us.",
            kn: "ನೀಲಕಂಠನೂ ಕೆಂಪಾದವನೂ ಆಗಿ ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವ ಅವನನ್ನು ಗೋಪಾಲಕರೂ ನೀರು ಹೊರುವ ಹೆಂಗಸರೂ ಕಂಡಿದ್ದಾರೆ; ಎಲ್ಲ ಜೀವಿಗಳೂ ಕಾಣುತ್ತವೆ. ಹಾಗೆ ಕಾಣಿಸಿಕೊಳ್ಳುವ ಅವನು ನಮಗೆ ಸುಖವನ್ನು ಕೊಡಲಿ.",
          },
        },
        {
          n: 9,
          text: "नमो अस्तु नीलग्रीवाय सहस्राक्षाय मीढुषे ।\nअथो ये अस्य सत्वानोऽहं तेभ्योऽकरं नमः ॥",
          meaning: {
            en: "Salutations to the blue-necked, thousand-eyed showerer of blessings; and to his attendants too I offer salutations.",
            kn: "ನೀಲಕಂಠನೂ ಸಹಸ್ರಾಕ್ಷನೂ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಸುರಿಸುವವನೂ ಆದ ರುದ್ರನಿಗೆ ನಮಸ್ಕಾರ. ಅವನ ಸೇವಕರಾದ ವೀರರಿಗೂ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          n: 10,
          text: "प्र मुञ्च धन्वनस्त्वमुभयोरार्त्नियोर्ज्याम् ।\nयाश्च ते हस्त इषवः परा ता भगवो वप ॥",
          meaning: {
            en: "Loosen the string from both ends of your bow, and cast away, O Lord, the arrows in your hand.",
            kn: "ಓ ಭಗವಂತನೇ, ನಿನ್ನ ಧನುಸ್ಸಿನ ಎರಡು ತುದಿಗಳಿಂದ ಹೆದೆಯನ್ನು ಬಿಚ್ಚು; ನಿನ್ನ ಕೈಯಲ್ಲಿರುವ ಬಾಣಗಳನ್ನು ದೂರ ಎಸೆ.",
          },
        },
        {
          n: 11,
          text: "अवतत्य धनुस्त्वं सहस्राक्ष शतेषुधे ।\nनिशीर्य शल्यानां मुखा शिवो नस्सुमना भव ॥",
          meaning: {
            en: "Unstringing your bow, O thousand-eyed one with a hundred quivers, and blunting the points of your arrows, be gracious and kind to us.",
            kn: "ಸಾವಿರ ಕಣ್ಣುಗಳುಳ್ಳವನೇ, ನೂರು ಬತ್ತಳಿಕೆಗಳುಳ್ಳವನೇ, ಧನುಸ್ಸಿನ ಹೆದೆ ಇಳಿಸಿ, ಬಾಣಗಳ ಮೊನೆಗಳನ್ನು ಮೊಂಡು ಮಾಡಿ, ನಮಗೆ ಮಂಗಳಕರನೂ ಪ್ರಸನ್ನನೂ ಆಗು.",
          },
        },
        {
          n: 12,
          text: "विज्यं धनुः कपर्दिनो विशल्यो बाणवाँ उत ।\nअनेशन्नस्येषव आभुरस्य निषङ्गथिः ॥",
          meaning: {
            en: "May the bow of the matted-haired one be stringless and his quiver without arrows; may his arrows be gone and his sheath be empty.",
            kn: "ಜಟಾಧಾರಿಯಾದ ರುದ್ರನ ಧನುಸ್ಸು ಹೆದೆಯಿಲ್ಲದ್ದಾಗಲಿ, ಬತ್ತಳಿಕೆಯು ಬಾಣಗಳಿಲ್ಲದ್ದಾಗಲಿ; ಅವನ ಬಾಣಗಳು ಮಾಯವಾಗಲಿ, ಒರೆಯು ಬರಿದಾಗಲಿ.",
          },
        },
        {
          n: 13,
          text: "या ते हेतिर्मीढुष्टम हस्ते बभूव ते धनुः ।\nतयास्मान्विश्वतस्त्वमयक्षमया परि ब्भुज ॥",
          meaning: {
            en: "O most bountiful one, with the weapon in your hand and your bow, which bring no harm, protect us on every side.",
            kn: "ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಸುರಿಸುವವರಲ್ಲಿ ಶ್ರೇಷ್ಠನೇ, ನಿನ್ನ ಕೈಯಲ್ಲಿರುವ ಆಯುಧ ಮತ್ತು ಧನುಸ್ಸು ಯಾವ ಹಾನಿಯನ್ನೂ ತರದೆ ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ರಕ್ಷಿಸಲಿ.",
          },
        },
        {
          n: 14,
          text: "नमस्ते अस्त्वायुधायानातताय धृष्णवे ।\nउभाभ्यामुत ते नमो बाहुभ्यां तव धन्वने ॥",
          meaning: {
            en: "Salutations to your weapon, mighty even when not drawn; salutations to both your arms and to your bow.",
            kn: "ಹೂಡದಿದ್ದರೂ ಶಕ್ತಿಯುತವಾದ ನಿನ್ನ ಆಯುಧಕ್ಕೆ ನಮಸ್ಕಾರ. ನಿನ್ನ ಎರಡು ಬಾಹುಗಳಿಗೂ ನಿನ್ನ ಧನುಸ್ಸಿಗೂ ನಮಸ್ಕಾರ.",
          },
        },
        {
          n: 15,
          text: "परि ते धन्वनो हेतिरस्मान्वृणक्तु विश्वतः ।\nअथो य इषुधिस्तवारे अस्मन्नि धेहि तम् ॥",
          meaning: {
            en: "May the missile of your bow pass us by on every side, and keep your quiver far away from us.",
            kn: "ನಿನ್ನ ಧನುಸ್ಸಿನ ಅಸ್ತ್ರವು ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ತಪ್ಪಿಸಿ ಹೋಗಲಿ; ನಿನ್ನ ಬತ್ತಳಿಕೆಯನ್ನು ನಮ್ಮಿಂದ ದೂರದಲ್ಲಿ ಇಡು.",
          },
        },
      ],
    },
    {
      title: "द्वितीयोऽनुवाकः",
      titleEn: "Anuvāka 2",
      verses: [
        {
          text: "नमो हिरण्यबाहवे सेनान्ये दिशां च पतये नमो\nनमो वृक्षेभ्यो हरिकेशेभ्यः पशूनां पतये नमो\nनमस्सस्पिञ्जराय त्विषीमते पथीनां पतये नमो\nनमो बभ्लुशाय विव्याधिनेऽन्नानां पतये नमो\nनमो हरिकेशायोपवीतिने पुष्टानां पतये नमो\nनमो भवस्य हेत्यै जगतां पतये नमो\nनमो रुद्रायातताविने क्षेत्राणां पतये नमो\nनमस्सूतायाहन्त्याय वनानां पतये नमो\nनमो रोहिताय स्थपतये वृक्षाणां पतये नमो\nनमो मन्त्रिणे वाणिजाय कक्षाणां पतये नमो\nनमो भुवन्तये वारिवस्कृतायौषधीनां पतये नमो\nनम उच्चैर्घोषायाक्रन्दयते पत्तीनां पतये नमो\nनमः कृत्स्नवीताय धावते सत्वनां पतये नमः ॥",
          meaning: {
            en: "Salutations to Rudra in his many forms: the golden-armed leader of hosts and lord of the quarters; the trees with green leaves for hair, lord of animals; the radiant one tawny like young grass, lord of paths; lord of food, of the well-nourished, of the worlds, of fields and of forests; the red builder, lord of trees; the counsellor and merchant, lord of thickets; lord of herbs, of foot-soldiers and of warriors. The whole world is seen as his manifestation and saluted.",
            kn: "ಚಿನ್ನದ ಬಾಹುಗಳುಳ್ಳ ಸೇನಾಪತಿ, ದಿಕ್ಕುಗಳ ಒಡೆಯ, ಹಸಿರು ಎಲೆಗಳೇ ಕೂದಲಾಗಿರುವ ವೃಕ್ಷರೂಪಿ, ಪಶುಗಳ ಒಡೆಯ, ದಾರಿಗಳ ಒಡೆಯ, ಅನ್ನದ ಒಡೆಯ, ಜಗತ್ತಿನ, ಹೊಲಗಳ, ಕಾಡುಗಳ, ಮರಗಳ, ಔಷಧಿಗಳ, ಕಾಲಾಳುಗಳ ಮತ್ತು ವೀರರ ಒಡೆಯ — ಹೀಗೆ ಎಲ್ಲೆಡೆಯೂ ಕಾಣುವ ರುದ್ರನ ಅನೇಕ ರೂಪಗಳಿಗೆ ನಮಸ್ಕಾರ. ಇಡೀ ಜಗತ್ತನ್ನೇ ಅವನ ರೂಪವೆಂದು ಕಂಡು ವಂದಿಸಲಾಗುತ್ತದೆ.",
          },
        },
      ],
    },
    {
      title: "तृतीयोऽनुवाकः",
      titleEn: "Anuvāka 3",
      verses: [
        {
          text: "नमस्सहमानाय निव्याधिन आव्याधिनीनां पतये नमो\nनमः ककुभाय निषङ्गिणे स्तेनानां पतये नमो\nनमो निषङ्गिण इषुधिमते तस्कराणां पतये नमो\nनमो वञ्चते परिवञ्चते स्तायूनां पतये नमो\nनमो निचेरवे परिचरायारण्यानां पतये नमो\nनमस्सृकाविभ्यो जिघांसद्भ्यो मुष्णतां पतये नमो\nनमोऽसिमद्भ्यो नक्तं चरद्भ्यः प्रकृन्तानां पतये नमो\nनम उष्णीषिणे गिरिचराय कुलुञ्चानां पतये नमो\nनम इषुमद्भ्यो धन्वाविभ्यश्च वो नमो\nनम आतन्वानेभ्यः प्रतिदधानेभ्यश्च वो नमो\nनम आयच्छद्भ्यो विसृजद्भ्यश्च वो नमो\nनमोऽस्यद्भ्यो विध्यद्भ्यश्च वो नमो\nनम आसीनेभ्यश्शयानेभ्यश्च वो नमो\nनमस्स्वपद्भ्यो जाग्रद्भ्यश्च वो नमो\nनमस्तिष्ठद्भ्यो धावद्भ्यश्च वो नमो\nनमस्सभाभ्यस्सभापतिभ्यश्च वो नमो\nनमो अश्वेभ्योऽश्वपतिभ्यश्च वो नमः ॥",
          meaning: {
            en: "Salutations to Rudra as the conqueror and piercer, lord of attacking armies, bearer of sword and quiver; and even as lord of thieves, robbers, cheats and night-prowlers, for nothing, not even the lawless, lies outside his rule. Salutations also to you in the form of those who carry bows and arrows, who string, aim, shoot and pierce; of those sitting and lying, sleeping and waking, standing and running; of assemblies and their leaders, of horses and their masters.",
            kn: "ಜಯಿಸುವವನೂ ಚುಚ್ಚುವವನೂ ಆಗಿ ದಾಳಿಮಾಡುವ ಸೇನೆಗಳ ಒಡೆಯನಾದ, ಖಡ್ಗ ಬತ್ತಳಿಕೆ ಧರಿಸಿದ ರುದ್ರನಿಗೆ ನಮಸ್ಕಾರ. ಕಳ್ಳರು, ದರೋಡೆಕೋರರು, ಮೋಸಗಾರರು, ರಾತ್ರಿ ಸಂಚರಿಸುವವರು — ಇವರೂ ಅವನ ಆಳ್ವಿಕೆಯ ಹೊರಗಿಲ್ಲ; ಅವರ ಒಡೆಯನಾಗಿಯೂ ಅವನಿಗೆ ನಮಸ್ಕಾರ. ಬಿಲ್ಲುಬಾಣ ಹಿಡಿದವರು, ಹೆದೆ ಏರಿಸುವವರು, ಗುರಿಯಿಟ್ಟು ಎಸೆಯುವವರು, ಕುಳಿತವರು, ಮಲಗಿದವರು, ನಿದ್ರಿಸುವವರು, ಎಚ್ಚರವಾಗಿರುವವರು, ನಿಂತವರು, ಓಡುವವರು, ಸಭೆಗಳು ಮತ್ತು ಅವುಗಳ ಒಡೆಯರು, ಕುದುರೆಗಳು ಮತ್ತು ಅವುಗಳ ಒಡೆಯರು — ಈ ಎಲ್ಲ ರೂಪಗಳಲ್ಲಿರುವ ನಿಮಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "चतुर्थोऽनुवाकः",
      titleEn: "Anuvāka 4",
      verses: [
        {
          text: "नम आव्याधिनीभ्यो विविध्यन्तीभ्यश्च वो नमो\nनम उगणाभ्यस्तृंहतीभ्यश्च वो नमो\nनमो गृत्सेभ्यो गृत्सपतिभ्यश्च वो नमो\nनमो व्रातेभ्यो व्रातपतिभ्यश्च वो नमो\nनमो गणेभ्यो गणपतिभ्यश्च वो नमो\nनमो विरूपेभ्यो विश्वरूपेभ्यश्च वो नमो\nनमो महद्भ्यः क्षुल्लकेभ्यश्च वो नमो\nनमो रथिभ्योऽरथेभ्यश्च वो नमो\nनमो रथेभ्यो रथपतिभ्यश्च वो नमो\nनमस्सेनाभ्यस्सेनानिभ्यश्च वो नमो\nनमः क्षत्तृभ्यस्सङ्ग्रहीतृभ्यश्च वो नमो\nनमस्तक्षभ्यो रथकारेभ्यश्च वो नमो\nनमः कुलालेभ्यः कर्मारेभ्यश्च वो नमो\nनमः पुञ्जिष्टेभ्यो निषादेभ्यश्च वो नमो\nनम इषुकृद्भ्यो धन्वकृद्भ्यश्च वो नमो\nनमो मृगयुभ्यश्श्वनिभ्यश्च वो नमो\nनमश्श्वभ्यश्श्वपतिभ्यश्च वो नमः ॥",
          meaning: {
            en: "Salutations to you in all your forms: the wounding and piercing powers, the fierce ones, the greedy and their lords, guilds and companies and their leaders, the misshapen and the all-formed, the great and the small, those with chariots and without, chariots and their masters, armies and their commanders, charioteers and drivers, carpenters and chariot-makers, potters and smiths, fowlers and fishermen, makers of arrows and of bows, hunters, keepers of dogs, and dogs and their masters.",
            kn: "ಗಾಯಗೊಳಿಸುವ, ಚುಚ್ಚುವ ಶಕ್ತಿಗಳು, ಉಗ್ರರು, ಆಸೆಬುರುಕರು ಮತ್ತು ಅವರ ಒಡೆಯರು, ಸಂಘಗಳು ಮತ್ತು ಅವುಗಳ ನಾಯಕರು, ವಿಕಾರರೂಪಿಗಳು ಮತ್ತು ವಿಶ್ವರೂಪಿಗಳು, ದೊಡ್ಡವರು ಮತ್ತು ಚಿಕ್ಕವರು, ರಥಿಕರು ಮತ್ತು ರಥವಿಲ್ಲದವರು, ಸೇನೆಗಳು ಮತ್ತು ಸೇನಾನಾಯಕರು, ಸಾರಥಿಗಳು, ಬಡಗಿಗಳು, ರಥ ಕಟ್ಟುವವರು, ಕುಂಬಾರರು, ಕಮ್ಮಾರರು, ಬೇಡರು, ಬೆಸ್ತರು, ಬಾಣ ಮತ್ತು ಬಿಲ್ಲು ಮಾಡುವವರು, ಬೇಟೆಗಾರರು, ನಾಯಿಗಳನ್ನು ಸಾಕುವವರು, ನಾಯಿಗಳು ಮತ್ತು ಅವುಗಳ ಒಡೆಯರು — ಈ ಎಲ್ಲ ರೂಪಗಳಲ್ಲಿರುವ ರುದ್ರನಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "पञ्चमोऽनुवाकः",
      titleEn: "Anuvāka 5",
      verses: [
        {
          text: "नमो भवाय च रुद्राय च\nनमश्शर्वाय च पशुपतये च\nनमो नीलग्रीवाय च शितिकण्ठाय च\nनमः कपर्दिने च व्युप्तकेशाय च\nनमस्सहस्राक्षाय च शतधन्वने च\nनमो गिरिशाय च शिपिविष्टाय च\nनमो मीढुष्टमाय चेषुमते च\nनमो ह्रस्वाय च वामनाय च\nनमो बृहते च वर्षीयसे च\nनमो वृद्धाय च संवृध्वने च\nनमो अग्रियाय च प्रथमाय च\nनम आशवे चाजिराय च\nनमश्शीघ्रियाय च शीभ्याय च\nनम ऊर्म्याय चावस्वन्याय च\nनमस्स्रोतस्याय च द्वीप्याय च ॥",
          meaning: {
            en: "Salutations to Bhava and Rudra, to Śarva and Paśupati; to the blue-necked and the white-throated; to the one with matted locks and the shaven one; to the thousand-eyed with a hundred bows; to the mountain-dweller and the one pervading as light; to the most bountiful, bearing arrows; to the short and the dwarf, the great and the mighty; to the ancient one who grows with praise; to the first and foremost; to the swift and quick; to him who is in rushing streams and still waters, in waves, in rivers and on islands.",
            kn: "ಭವನಿಗೂ ರುದ್ರನಿಗೂ, ಶರ್ವನಿಗೂ ಪಶುಪತಿಗೂ, ನೀಲಕಂಠನಿಗೂ ಶಿತಿಕಂಠನಿಗೂ, ಜಟಾಧಾರಿಗೂ ಮುಂಡಿತಕೇಶನಿಗೂ, ಸಹಸ್ರಾಕ್ಷನಿಗೂ ನೂರು ಧನುಸ್ಸುಗಳುಳ್ಳವನಿಗೂ, ಗಿರಿಶನಿಗೂ ಶಿಪಿವಿಷ್ಟನಿಗೂ, ಬಾಣಧಾರಿಗೂ ನಮಸ್ಕಾರ. ಕುಳ್ಳನೂ ವಾಮನನೂ, ಬೃಹತ್ತಾದವನೂ ಹಿರಿಯನೂ, ಸ್ತುತಿಗಳಿಂದ ಬೆಳೆಯುವ ವೃದ್ಧನೂ, ಮೊದಲಿಗನೂ ಶ್ರೇಷ್ಠನೂ, ವೇಗಶಾಲಿಯೂ, ಪ್ರವಾಹಗಳಲ್ಲಿ, ಅಲೆಗಳಲ್ಲಿ, ನಿಶ್ಚಲ ನೀರಿನಲ್ಲಿ, ನದಿಗಳಲ್ಲಿ ಮತ್ತು ದ್ವೀಪಗಳಲ್ಲಿ ಇರುವವನೂ ಆದ ರುದ್ರನಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "षष्ठोऽनुवाकः",
      titleEn: "Anuvāka 6",
      verses: [
        {
          text: "नमो ज्येष्ठाय च कनिष्ठाय च\nनमः पूर्वजाय चापरजाय च\nनमो मध्यमाय चापगल्भाय च\nनमो जघन्याय च बुध्नियाय च\nनमस्सोभ्याय च प्रतिसर्याय च\nनमो याम्याय च क्षेम्याय च\nनम उर्वर्याय च खल्याय च\nनमश्श्लोक्याय चावसान्याय च\nनमो वन्याय च कक्ष्याय च\nनमश्श्रवाय च प्रतिश्रवाय च\nनम आशुषेणाय चाशुरथाय च\nनमश्शूराय चावभिन्दते च\nनमो वर्मिणे च वरूथिने च\nनमो बिल्मिने च कवचिने च\nनमश्श्रुताय च श्रुतसेनाय च ॥",
          meaning: {
            en: "Salutations to the eldest and the youngest, the first-born and the later-born, the middle one and the humble one; to him in the low places and in the depths; in this world and the next; in death and in safety; in the fields and on the threshing floors; in fame and at the end of things; in forests and thickets; in sound and in echo; to him with swift armies and swift chariots; to the hero who breaks through; to him in armour, helmet and breastplate; to the renowned one with a renowned army.",
            kn: "ಹಿರಿಯನೂ ಕಿರಿಯನೂ, ಮೊದಲು ಹುಟ್ಟಿದವನೂ ನಂತರ ಹುಟ್ಟಿದವನೂ, ನಡುವಿನವನೂ ವಿನಯಶಾಲಿಯೂ, ತಗ್ಗಿನಲ್ಲಿಯೂ ಆಳದಲ್ಲಿಯೂ, ಈ ಲೋಕದಲ್ಲಿಯೂ ಪರಲೋಕದಲ್ಲಿಯೂ, ಸಾವಿನಲ್ಲಿಯೂ ಕ್ಷೇಮದಲ್ಲಿಯೂ, ಹೊಲಗಳಲ್ಲಿಯೂ ಕಣಗಳಲ್ಲಿಯೂ, ಕೀರ್ತಿಯಲ್ಲಿಯೂ ಅಂತ್ಯದಲ್ಲಿಯೂ, ಕಾಡುಗಳಲ್ಲಿಯೂ ಪೊದೆಗಳಲ್ಲಿಯೂ, ಶಬ್ದದಲ್ಲಿಯೂ ಪ್ರತಿಧ್ವನಿಯಲ್ಲಿಯೂ ಇರುವವನಿಗೆ ನಮಸ್ಕಾರ. ವೇಗದ ಸೇನೆ ಮತ್ತು ರಥವುಳ್ಳವನಿಗೆ, ಶತ್ರುಗಳನ್ನು ಭೇದಿಸುವ ಶೂರನಿಗೆ, ಕವಚ ಕಿರೀಟ ಧರಿಸಿದವನಿಗೆ, ಪ್ರಸಿದ್ಧನಿಗೂ ಪ್ರಸಿದ್ಧ ಸೇನೆಯುಳ್ಳವನಿಗೂ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "सप्तमोऽनुवाकः",
      titleEn: "Anuvāka 7",
      verses: [
        {
          text: "नमो दुन्दुभ्याय चाहनन्याय च\nनमो धृष्णवे च प्रमृशाय च\nनमो दूताय च प्रहिताय च\nनमो निषङ्गिणे चेषुधिमते च\nनमस्तीक्ष्णेषवे चायुधिने च\nनमस्स्वायुधाय च सुधन्वने च\nनमस्स्रुत्याय च पथ्याय च\nनमः काट्याय च नीप्याय च\nनमस्सूद्याय च सरस्याय च\nनमो नाद्याय च वैशन्ताय च\nनमः कूप्याय चावट्याय च\nनमो वर्ष्याय चावर्ष्याय च\nनमो मेघ्याय च विद्युत्याय च\nनम ईध्रियाय चातप्याय च\nनमो वात्याय च रेष्मियाय च\nनमो वास्तव्याय च वास्तुपाय च ॥",
          meaning: {
            en: "Salutations to him in the drum and in the drumstick; to the bold one and the thoughtful one; to the messenger and the one who is sent; to him with sword and quiver, with sharp arrows and weapons, with good weapons and a good bow; to him in streams and paths, hollows and lowlands, channels and lakes, rivers and pools, wells and pits; in rain and drought, clouds and lightning, clear sky and sunshine, wind and storm; in dwellings, and to the protector of dwellings.",
            kn: "ದುಂದುಭಿಯಲ್ಲಿಯೂ ಅದನ್ನು ಬಾರಿಸುವ ಕೋಲಿನಲ್ಲಿಯೂ ಇರುವವನಿಗೆ, ಧೈರ್ಯಶಾಲಿಗೂ ವಿವೇಚಿಸುವವನಿಗೂ, ದೂತನಿಗೂ ಕಳುಹಿಸಲ್ಪಟ್ಟವನಿಗೂ, ಖಡ್ಗ ಬತ್ತಳಿಕೆ, ಹರಿತ ಬಾಣಗಳು, ಉತ್ತಮ ಆಯುಧಗಳು ಮತ್ತು ಧನುಸ್ಸು ಧರಿಸಿದವನಿಗೆ ನಮಸ್ಕಾರ. ತೊರೆಗಳು, ದಾರಿಗಳು, ಹಳ್ಳಗಳು, ಕಾಲುವೆಗಳು, ಸರೋವರಗಳು, ನದಿಗಳು, ಬಾವಿಗಳು, ಗುಂಡಿಗಳು, ಮಳೆ, ಬರ, ಮೋಡ, ಮಿಂಚು, ಶುಭ್ರ ಆಕಾಶ, ಬಿಸಿಲು, ಗಾಳಿ, ಬಿರುಗಾಳಿ, ಮನೆಗಳು — ಇವುಗಳಲ್ಲೆಲ್ಲ ಇರುವವನಿಗೂ ಮನೆಗಳ ರಕ್ಷಕನಿಗೂ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "अष्टमोऽनुवाकः",
      titleEn: "Anuvāka 8",
      verses: [
        {
          text: "नमस्सोमाय च रुद्राय च\nनमस्ताम्राय चारुणाय च\nनमश्शङ्गाय च पशुपतये च\nनम उग्राय च भीमाय च\nनमो अग्रेवधाय च दूरेवधाय च\nनमो हन्त्रे च हनीयसे च\nनमो वृक्षेभ्यो हरिकेशेभ्यो\nनमस्ताराय\nनमश्शम्भवे च मयोभवे च\nनमश्शङ्कराय च मयस्कराय च\nनमश्शिवाय च शिवतराय च\nनमस्तीर्थ्याय च कूल्याय च\nनमः पार्याय चावार्याय च\nनमः प्रतरणाय चोत्तरणाय च\nनम आतार्याय चालाद्याय च\nनमश्शष्प्याय च फेन्याय च\nनमस्सिकत्याय च प्रवाह्याय च ॥",
          meaning: {
            en: "Salutations to Rudra who is with Umā (Soma); to the copper-coloured and the ruddy; to the giver of joy, lord of creatures; to the fierce and the terrible; to him who slays from near and from afar, the slayer and the greater slayer; to the trees with green leaves; to Tāra, who carries across (the Praṇava). Salutations to Śambhu and Mayobhu, the source of happiness and of delight; to Śaṅkara and Mayaskara, the maker of happiness and of delight; to Śiva and Śivatara, the auspicious and the most auspicious. Salutations to him in holy fords and on river banks, on the far shore and this shore, in the crossing over and the crossing back, in tender grass and foam, in sand and in the flowing current.",
            kn: "ಸೋಮನಾದ (ಉಮೆಯೊಡನಿರುವ) ರುದ್ರನಿಗೆ, ತಾಮ್ರವರ್ಣನಿಗೂ ಅರುಣವರ್ಣನಿಗೂ, ಸುಖ ನೀಡುವ ಪಶುಪತಿಗೆ, ಉಗ್ರನಿಗೂ ಭೀಮನಿಗೂ, ಹತ್ತಿರದಿಂದಲೂ ದೂರದಿಂದಲೂ ಸಂಹರಿಸುವವನಿಗೆ, ಹಸಿರು ಎಲೆಗಳ ವೃಕ್ಷರೂಪಿಗೆ, ಸಂಸಾರದಿಂದ ದಾಟಿಸುವ ತಾರನಿಗೆ (ಓಂಕಾರರೂಪಿಗೆ) ನಮಸ್ಕಾರ. ಸುಖದ ಮೂಲನಾದ ಶಂಭುವಿಗೂ ಮಯೋಭುವಿಗೂ, ಸುಖವನ್ನು ಮಾಡುವ ಶಂಕರನಿಗೂ ಮಯಸ್ಕರನಿಗೂ, ಮಂಗಳಕರನಾದ ಶಿವನಿಗೂ ಅತ್ಯಂತ ಮಂಗಳಕರನಾದ ಶಿವತರನಿಗೂ ನಮಸ್ಕಾರ. ಪುಣ್ಯತೀರ್ಥಗಳಲ್ಲಿ, ನದೀತೀರಗಳಲ್ಲಿ, ಆಚೆಯ ದಡದಲ್ಲಿ, ಈಚೆಯ ದಡದಲ್ಲಿ, ದಾಟುವಿಕೆಯಲ್ಲಿ, ಎಳೆಯ ಹುಲ್ಲಿನಲ್ಲಿ, ನೊರೆಯಲ್ಲಿ, ಮರಳಿನಲ್ಲಿ, ಹರಿಯುವ ಪ್ರವಾಹದಲ್ಲಿ ಇರುವವನಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "नवमोऽनुवाकः",
      titleEn: "Anuvāka 9",
      verses: [
        {
          text: "नम इरिण्याय च प्रपथ्याय च\nनमः किंशिलाय च क्षयणाय च\nनमः कपर्दिने च पुलस्तये च\nनमो गोष्ठ्याय च गृह्याय च\nनमस्तल्प्याय च गेह्याय च\nनमः काट्याय च गह्वरेष्ठाय च\nनमो ह्रदय्याय च निवेष्प्याय च\nनमः पांसव्याय च रजस्याय च\nनमश्शुष्क्याय च हरित्याय च\nनमो लोप्याय चोलप्याय च\nनम ऊर्व्याय च सूर्म्याय च\nनमः पर्ण्याय च पर्णशद्याय च\nनमोऽपगुरमाणाय चाभिघ्नते च\nनम आक्खिदते च प्रक्खिदते च\nनमो वः किरिकेभ्यो देवानां हृदयेभ्यो\nनमो विक्षीणकेभ्यो\nनमो विचिन्वत्केभ्यो\nनम आनिर्हतेभ्यो\nनम आमीवत्केभ्यः ॥",
          meaning: {
            en: "Salutations to him in barren land and on broad roads, on rocky ground and in dwelling places; to the matted-haired one who stands before us; to him in cowsheds and houses, in beds and mansions, among thorns and in caves, in deep pools and in dew, in dust and in mist, in dry things and green, on hard ground and in grass, in the earth and in waves, in leaves and in falling leaves; to him who raises his weapon and strikes down the wicked. Salutations to you who are the sparks of the gods' hearts, the imperishable ones, the searching ones, who bring forth all and pervade all.",
            kn: "ಬಂಜರು ನೆಲದಲ್ಲಿ, ಹೆದ್ದಾರಿಗಳಲ್ಲಿ, ಕಲ್ಲು ನೆಲದಲ್ಲಿ, ವಾಸಸ್ಥಳಗಳಲ್ಲಿ ಇರುವವನಿಗೆ, ಜಟಾಧಾರಿಯಾಗಿ ಮುಂದೆ ನಿಂತಿರುವವನಿಗೆ, ಗೋಶಾಲೆಗಳಲ್ಲಿ, ಮನೆಗಳಲ್ಲಿ, ಹಾಸಿಗೆಗಳಲ್ಲಿ, ಭವನಗಳಲ್ಲಿ, ಮುಳ್ಳುಗಳ ನಡುವೆ, ಗುಹೆಗಳಲ್ಲಿ, ಆಳವಾದ ಮಡುಗಳಲ್ಲಿ, ಮಂಜಿನಲ್ಲಿ, ಧೂಳಿನಲ್ಲಿ, ಒಣಗಿದ ಮತ್ತು ಹಸಿರಾದ ವಸ್ತುಗಳಲ್ಲಿ, ಗಟ್ಟಿ ನೆಲದಲ್ಲಿ, ಹುಲ್ಲಿನಲ್ಲಿ, ಭೂಮಿಯಲ್ಲಿ, ಅಲೆಗಳಲ್ಲಿ, ಎಲೆಗಳಲ್ಲಿ, ಉದುರುವ ಎಲೆಗಳಲ್ಲಿ ಇರುವವನಿಗೆ ನಮಸ್ಕಾರ. ಆಯುಧ ಎತ್ತಿ ದುಷ್ಟರನ್ನು ಹೊಡೆಯುವವನಿಗೆ ನಮಸ್ಕಾರ. ದೇವತೆಗಳ ಹೃದಯಗಳಂತಿರುವ, ಕ್ಷಯವಿಲ್ಲದ, ಹುಡುಕುವ, ಎಲ್ಲವನ್ನೂ ಹೊರತರುವ, ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿರುವ ನಿಮ್ಮ ರೂಪಗಳಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "दशमोऽनुवाकः",
      titleEn: "Anuvāka 10",
      verses: [
        {
          n: 1,
          text: "द्रापे अन्धसस्पते दरिद्रन्नीललोहित ।\nएषां पुरुषाणामेषां पशूनां मा भेर्मारो मो एषां किं चनाममत् ॥",
          meaning: {
            en: "O Rudra who chastens the wicked, lord of food, who owns nothing yet lacks nothing, blue-and-red one: do not frighten or harm these our people and these cattle; let none of them fall ill.",
            kn: "ದುಷ್ಟರನ್ನು ದಂಡಿಸುವವನೇ, ಅನ್ನದ ಒಡೆಯನೇ, ಏನನ್ನೂ ಹೊಂದದ ವಿರಕ್ತನೇ, ನೀಲಲೋಹಿತನೇ, ಈ ನಮ್ಮ ಜನರನ್ನೂ ಪಶುಗಳನ್ನೂ ಭಯಪಡಿಸಬೇಡ, ನೋಯಿಸಬೇಡ; ಇವರಲ್ಲಿ ಯಾರೂ ರೋಗಕ್ಕೆ ತುತ್ತಾಗದಿರಲಿ.",
          },
        },
        {
          n: 2,
          text: "या ते रुद्र शिवा तनूश्शिवा विश्वाहभेषजी ।\nशिवा रुद्रस्य भेषजी तया नो मृड जीवसे ॥",
          meaning: {
            en: "O Rudra, with that auspicious form of yours which heals every day and is the remedy for all ills, make us happy, so that we may live.",
            kn: "ರುದ್ರನೇ, ಮಂಗಳಕರವಾದ, ಪ್ರತಿದಿನವೂ ಎಲ್ಲ ರೋಗಗಳಿಗೆ ಔಷಧವಾದ ನಿನ್ನ ಆ ರೂಪದಿಂದ ನಾವು ಬದುಕಿ ಬಾಳುವಂತೆ ನಮಗೆ ಸುಖವನ್ನು ಕೊಡು.",
          },
        },
        {
          n: 3,
          text: "इमां रुद्राय तवसे कपर्दिने क्षयद्वीराय प्र भरामहे मतिम् ।\nयथा नश्शमसद्द्विपदे चतुष्पदे विश्वं पुष्टं ग्रामे अस्मिन्ननातुरम् ॥",
          meaning: {
            en: "We offer this hymn to Rudra, the mighty, the matted-haired ruler of heroes, so that there may be well-being for men and cattle, and all in this village be nourished and free from sickness.",
            kn: "ಬಲಶಾಲಿಯೂ ಜಟಾಧಾರಿಯೂ ವೀರರನ್ನು ಆಳುವವನೂ ಆದ ರುದ್ರನಿಗೆ ಈ ಸ್ತುತಿಯನ್ನು ಅರ್ಪಿಸುತ್ತೇವೆ. ಇದರಿಂದ ಮನುಷ್ಯರಿಗೂ ಪಶುಗಳಿಗೂ ಕ್ಷೇಮವಾಗಲಿ; ಈ ಊರಿನಲ್ಲಿರುವ ಎಲ್ಲರೂ ಪುಷ್ಟರಾಗಿ ರೋಗವಿಲ್ಲದೆ ಇರಲಿ.",
          },
        },
        {
          n: 4,
          text: "मृडा नो रुद्रोत नो मयस्कृधि क्षयद्वीराय नमसा विधेम ते ।\nयच्छं च योश्च मनुरायजे पिता तदश्याम तव रुद्र प्रणीतौ ॥",
          meaning: {
            en: "Be gracious to us, O Rudra, and give us joy; we worship you, ruler of heroes, with salutations. The welfare and freedom from ill that father Manu won by worship, may we attain under your guidance.",
            kn: "ರುದ್ರನೇ, ನಮ್ಮ ಮೇಲೆ ಕೃಪೆ ತೋರು, ನಮಗೆ ಸುಖವನ್ನು ಕೊಡು; ವೀರರ ಒಡೆಯನಾದ ನಿನ್ನನ್ನು ನಮಸ್ಕಾರದಿಂದ ಪೂಜಿಸುತ್ತೇವೆ. ತಂದೆಯಾದ ಮನುವು ಯಜ್ಞದಿಂದ ಪಡೆದ ಸುಖವನ್ನೂ ದುಃಖನಿವಾರಣೆಯನ್ನೂ ನಿನ್ನ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ನಾವೂ ಪಡೆಯುವಂತಾಗಲಿ.",
          },
        },
        {
          n: 5,
          text: "मा नो महान्तमुत मा नो अर्भकं मा न उक्षन्तमुत मा न उक्षितम् ।\nमा नो वधीः पितरं मोत मातरं प्रिया मा नस्तनुवो रुद्र रीरिषः ॥",
          meaning: {
            en: "Do not harm our elders or our little ones, our youths or the unborn; do not slay our father or our mother; do not hurt our dear bodies, O Rudra.",
            kn: "ನಮ್ಮ ಹಿರಿಯರನ್ನೂ ಚಿಕ್ಕ ಮಕ್ಕಳನ್ನೂ ಯುವಕರನ್ನೂ ಗರ್ಭದಲ್ಲಿರುವ ಶಿಶುಗಳನ್ನೂ ನೋಯಿಸಬೇಡ. ನಮ್ಮ ತಂದೆಯನ್ನಾಗಲೀ ತಾಯಿಯನ್ನಾಗಲೀ ಕೊಲ್ಲಬೇಡ; ಓ ರುದ್ರನೇ, ನಮ್ಮ ಪ್ರಿಯವಾದ ದೇಹಗಳಿಗೆ ಹಾನಿ ಮಾಡಬೇಡ.",
          },
        },
        {
          n: 6,
          text: "मा नस्तोके तनये मा न आयुषि मा नो गोषु मा नो अश्वेषु रीरिषः ।\nवीरान्मा नो रुद्र भामितो वधीर्हविष्मन्तो नमसा विधेम ते ॥",
          meaning: {
            en: "Do not harm our children and grandchildren, our lives, our cattle or our horses; do not in anger slay our heroes, O Rudra. Bearing offerings, we worship you with salutations.",
            kn: "ನಮ್ಮ ಮಕ್ಕಳು, ಮೊಮ್ಮಕ್ಕಳು, ನಮ್ಮ ಆಯುಸ್ಸು, ನಮ್ಮ ಗೋವುಗಳು, ಕುದುರೆಗಳು — ಇವುಗಳಿಗೆ ಹಾನಿ ಮಾಡಬೇಡ. ರುದ್ರನೇ, ಕೋಪಗೊಂಡು ನಮ್ಮ ವೀರರನ್ನು ಕೊಲ್ಲಬೇಡ. ಹವಿಸ್ಸನ್ನು ಹಿಡಿದು ನಮಸ್ಕಾರದಿಂದ ನಿನ್ನನ್ನು ಪೂಜಿಸುತ್ತೇವೆ.",
          },
        },
        {
          n: 7,
          text: "आरात्ते गोघ्न उत पूरुषघ्ने क्षयद्वीराय सुम्नमस्मे ते अस्तु ।\nरक्षा च नो अधि च देव ब्रूह्यधा च नश्शर्म यच्छ द्विबर्हाः ॥",
          meaning: {
            en: "Far from us be your power that slays cattle and men, O ruler of heroes; may your favour be with us. Protect us, speak for us, O God, and grant us shelter, you of twofold strength.",
            kn: "ಗೋವುಗಳನ್ನೂ ಮನುಷ್ಯರನ್ನೂ ಕೊಲ್ಲುವ ನಿನ್ನ ಉಗ್ರರೂಪವು ನಮ್ಮಿಂದ ದೂರವಿರಲಿ; ವೀರರ ಒಡೆಯನೇ, ನಿನ್ನ ಅನುಗ್ರಹ ನಮ್ಮ ಮೇಲಿರಲಿ. ದೇವನೇ, ನಮ್ಮನ್ನು ರಕ್ಷಿಸು, ನಮ್ಮ ಪರವಾಗಿ ಮಾತನಾಡು; ಎರಡು ಪಟ್ಟು ಬಲವುಳ್ಳವನೇ, ನಮಗೆ ಆಶ್ರಯವನ್ನು ಕೊಡು.",
          },
        },
        {
          n: 8,
          text: "स्तुहि श्रुतं गर्तसदं युवानं मृगं न भीममुपहत्नुमुग्रम् ।\nमृडा जरित्रे रुद्र स्तवानो अन्यं ते अस्मन्नि वपन्तु सेनाः ॥",
          meaning: {
            en: "Praise the renowned one, seated in the cave of the heart, ever young, fearsome like a lion, the mighty destroyer. Praised by us, O Rudra, be gracious to the singer; let your armies strike others than us.",
            kn: "ಪ್ರಸಿದ್ಧನಾದ, ಹೃದಯಗುಹೆಯಲ್ಲಿ ನೆಲಸಿರುವ, ಚಿರಯುವಕನಾದ, ಸಿಂಹದಂತೆ ಭಯಂಕರನಾದ, ಶತ್ರುಗಳನ್ನು ಸಂಹರಿಸುವ ಉಗ್ರನನ್ನು ಸ್ತುತಿಸು. ರುದ್ರನೇ, ನಮ್ಮ ಸ್ತುತಿಯಿಂದ ಪ್ರಸನ್ನನಾಗಿ ಸ್ತುತಿಸುವವನಿಗೆ ಸುಖ ಕೊಡು; ನಿನ್ನ ಸೇನೆಗಳು ನಮ್ಮನ್ನು ಬಿಟ್ಟು ಬೇರೆಡೆಗೆ ಹೋಗಲಿ.",
          },
        },
        {
          n: 9,
          text: "परि णो रुद्रस्य हेतिर्वृणक्तु परि त्वेषस्य दुर्मतिरघायोः ।\nअव स्थिरा मघवद्भ्यस्तनुष्व मीढ्वस्तोकाय तनयाय मृडय ॥",
          meaning: {
            en: "May Rudra's weapon pass us by, and may the ill-will of the angry, fierce one spare us. Unstring your firm bows for your generous worshippers; O bountiful one, be gracious to our children and grandchildren.",
            kn: "ರುದ್ರನ ಆಯುಧವು ನಮ್ಮನ್ನು ತಪ್ಪಿಸಿ ಹೋಗಲಿ; ಕೋಪಗೊಂಡ ಉಗ್ರನ ಅಸಮಾಧಾನವು ನಮ್ಮನ್ನು ಬಿಟ್ಟುಬಿಡಲಿ. ದಾನಶೀಲರಾದ ಭಕ್ತರಿಗಾಗಿ ನಿನ್ನ ಬಿಗಿಯಾದ ಧನುಸ್ಸುಗಳ ಹೆದೆ ಇಳಿಸು; ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಸುರಿಸುವವನೇ, ನಮ್ಮ ಮಕ್ಕಳು ಮೊಮ್ಮಕ್ಕಳಿಗೆ ಸುಖ ಕೊಡು.",
          },
        },
        {
          n: 10,
          text: "मीढुष्टम शिवतम शिवो नस्सुमना भव ।\nपरमे वृक्ष आयुधं निधाय कृत्तिं वसान आ चर पिनाकं बिभ्रदा गहि ॥",
          meaning: {
            en: "Most bountiful, most auspicious one, be gracious and kind to us. Laying down your weapons on the highest tree and wearing the hide, come to us bearing only the Pināka bow.",
            kn: "ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಸುರಿಸುವವರಲ್ಲಿ ಶ್ರೇಷ್ಠನೇ, ಅತ್ಯಂತ ಮಂಗಳಕರನೇ, ನಮಗೆ ಮಂಗಳಕರನೂ ಪ್ರಸನ್ನನೂ ಆಗು. ನಿನ್ನ ಆಯುಧಗಳನ್ನು ಎತ್ತರದ ಮರದ ಮೇಲೆ ಇಟ್ಟು, ಚರ್ಮವನ್ನು ಧರಿಸಿ, ಪಿನಾಕ ಧನುಸ್ಸನ್ನು ಮಾತ್ರ ಹಿಡಿದು ನಮ್ಮ ಬಳಿಗೆ ಬಾ.",
          },
        },
        {
          n: 11,
          text: "विकिरिद विलोहित नमस्ते अस्तु भगवः ।\nयास्ते सहस्रं हेतयोऽन्यमस्मन्नि वपन्तु ताः ॥",
          meaning: {
            en: "O dispeller of troubles, O red one, salutations to you, O Lord. Let your thousand weapons fall elsewhere, away from us.",
            kn: "ಕಷ್ಟಗಳನ್ನು ಚದುರಿಸುವವನೇ, ಕೆಂಪು ವರ್ಣದವನೇ, ಭಗವಂತನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ. ನಿನ್ನ ಸಾವಿರ ಆಯುಧಗಳು ನಮ್ಮನ್ನು ಬಿಟ್ಟು ಬೇರೆಡೆಗೆ ಬೀಳಲಿ.",
          },
        },
        {
          n: 12,
          text: "सहस्राणि सहस्रधा बाहुवोस्तव हेतयः ।\nतासामीशानो भगवः पराचीना मुखा कृधि ॥",
          meaning: {
            en: "Thousands upon thousands of kinds are the weapons in your arms; O Lord, master of them all, turn their points away from us.",
            kn: "ನಿನ್ನ ಬಾಹುಗಳಲ್ಲಿ ಸಾವಿರಾರು ಬಗೆಯ ಸಾವಿರಾರು ಆಯುಧಗಳಿವೆ. ಅವುಗಳ ಒಡೆಯನಾದ ಭಗವಂತನೇ, ಅವುಗಳ ಮೊನೆಗಳನ್ನು ನಮ್ಮಿಂದ ಆಚೆಗೆ ತಿರುಗಿಸು.",
          },
        },
      ],
    },
    {
      title: "एकादशोऽनुवाकः",
      titleEn: "Anuvāka 11",
      note: "As in the Saṃhitā, the refrain तेषां सहस्रयोजनेऽव धन्वानि तन्मसि is written only after ṛks 1 and 10. Many reciters repeat it after every ṛk of this anuvāka.",
      noteKn: "ಸಂಹಿತೆಯಲ್ಲಿರುವಂತೆ ‘ತೇಷಾಂ ಸಹಸ್ರಯೋಜನೇಽವ ಧನ್ವಾನಿ ತನ್ಮಸಿ’ ಎಂಬ ಪಲ್ಲವಿಯನ್ನು ೧ ಮತ್ತು ೧೦ನೇ ಋಕ್ಕುಗಳ ನಂತರ ಮಾತ್ರ ಬರೆಯಲಾಗಿದೆ. ಅನೇಕರು ಇದನ್ನು ಪ್ರತಿಯೊಂದು ಋಕ್ಕಿನ ನಂತರವೂ ಪಠಿಸುತ್ತಾರೆ.",
      verses: [
        {
          n: 1,
          text: "सहस्राणि सहस्रशो ये रुद्रा अधि भूम्याम् ।\nतेषां सहस्रयोजनेऽव धन्वानि तन्मसि ॥",
          meaning: {
            en: "The Rudras who dwell upon the earth in thousands upon thousands: their bows we unstring and set a thousand leagues away.",
            kn: "ಭೂಮಿಯ ಮೇಲೆ ಸಾವಿರಾರು ಸಂಖ್ಯೆಯಲ್ಲಿರುವ ರುದ್ರರ ಧನುಸ್ಸುಗಳನ್ನು ಹೆದೆ ಇಳಿಸಿ ಸಾವಿರ ಯೋಜನ ದೂರದಲ್ಲಿ ಇಡುತ್ತೇವೆ.",
          },
        },
        {
          n: 2,
          text: "अस्मिन्महत्यर्णवेऽन्तरिक्षे भवा अधि ॥",
          meaning: {
            en: "So too the Bhavas who dwell in this great ocean, the mid-air.",
            kn: "ಮಹಾಸಮುದ್ರದಂತಿರುವ ಈ ಅಂತರಿಕ್ಷದಲ್ಲಿ ನೆಲಸಿರುವ ಭವರ ಧನುಸ್ಸುಗಳನ್ನೂ ಹಾಗೆಯೇ ದೂರ ಇಡುತ್ತೇವೆ.",
          },
        },
        {
          n: 3,
          text: "नीलग्रीवाश्शितिकण्ठाश्शर्वा अधः क्षमाचराः ॥",
          meaning: {
            en: "The Śarvas, blue-necked and white-throated, who roam beneath the earth.",
            kn: "ನೀಲಕಂಠರೂ ಶಿತಿಕಂಠರೂ ಆಗಿ ಭೂಮಿಯ ಕೆಳಗಿನ ಲೋಕಗಳಲ್ಲಿ ಸಂಚರಿಸುವ ಶರ್ವರು.",
          },
        },
        {
          n: 4,
          text: "नीलग्रीवाश्शितिकण्ठा दिवं रुद्रा उपश्रिताः ॥",
          meaning: {
            en: "The Rudras, blue-necked and white-throated, who abide in heaven.",
            kn: "ನೀಲಕಂಠರೂ ಶಿತಿಕಂಠರೂ ಆಗಿ ದ್ಯುಲೋಕದಲ್ಲಿ ನೆಲಸಿರುವ ರುದ್ರರು.",
          },
        },
        {
          n: 5,
          text: "ये वृक्षेषु सस्पिञ्जरा नीलग्रीवा विलोहिताः ॥",
          meaning: {
            en: "Those in the trees, tawny like young grass, blue-necked and red.",
            kn: "ಎಳೆಯ ಹುಲ್ಲಿನ ಬಣ್ಣದವರಾಗಿ, ನೀಲಕಂಠರೂ ಕೆಂಪಾದವರೂ ಆಗಿ ಮರಗಳಲ್ಲಿ ನೆಲಸಿರುವವರು.",
          },
        },
        {
          n: 6,
          text: "ये भूतानामधिपतयो विशिखासः कपर्दिनः ॥",
          meaning: {
            en: "Those who are lords of beings, some with shaven heads, some with matted locks.",
            kn: "ಜೀವಿಗಳ ಅಧಿಪತಿಗಳಾಗಿ, ಕೆಲವರು ಕೂದಲಿಲ್ಲದವರೂ ಕೆಲವರು ಜಟಾಧಾರಿಗಳೂ ಆಗಿರುವವರು.",
          },
        },
        {
          n: 7,
          text: "ये अन्नेषु विविध्यन्ति पात्रेषु पिबतो जनान् ॥",
          meaning: {
            en: "Those who afflict people through their food and in the vessels they drink from.",
            kn: "ಅನ್ನದಲ್ಲಿಯೂ ಕುಡಿಯುವ ಪಾತ್ರೆಗಳಲ್ಲಿಯೂ ಇದ್ದು ಜನರನ್ನು ಪೀಡಿಸುವವರು.",
          },
        },
        {
          n: 8,
          text: "ये पथां पथिरक्षय ऐलबृदा यव्युधः ॥",
          meaning: {
            en: "Those who guard the paths, who sustain with food and fight all their lives.",
            kn: "ದಾರಿಗಳನ್ನು ಕಾಯುವವರು, ಅನ್ನದಿಂದ ಪೋಷಿಸುವವರು, ಜೀವನವಿಡೀ ಹೋರಾಡುವವರು.",
          },
        },
        {
          n: 9,
          text: "ये तीर्थानि प्रचरन्ति सृकावन्तो निषङ्गिणः ॥",
          meaning: {
            en: "Those who roam the holy fords, bearing spears and swords.",
            kn: "ಈಟಿ ಖಡ್ಗಗಳನ್ನು ಹಿಡಿದು ಪುಣ್ಯತೀರ್ಥಗಳಲ್ಲಿ ಸಂಚರಿಸುವವರು.",
          },
        },
        {
          n: 10,
          text: "य एतावन्तश्च भूयांसश्च दिशो रुद्रा वितस्थिरे ।\nतेषां सहस्रयोजनेऽव धन्वानि तन्मसि ॥",
          meaning: {
            en: "And the Rudras, as many as these and more, who have spread through all the quarters: their bows we unstring and set a thousand leagues away.",
            kn: "ಇಷ್ಟು ಮಂದಿ ಮತ್ತು ಇನ್ನೂ ಹೆಚ್ಚು ರುದ್ರರು ಎಲ್ಲ ದಿಕ್ಕುಗಳಲ್ಲಿಯೂ ವ್ಯಾಪಿಸಿದ್ದಾರೆ; ಅವರೆಲ್ಲರ ಧನುಸ್ಸುಗಳನ್ನು ಹೆದೆ ಇಳಿಸಿ ಸಾವಿರ ಯೋಜನ ದೂರದಲ್ಲಿ ಇಡುತ್ತೇವೆ.",
          },
        },
        {
          text: "नमो रुद्रेभ्यो ये पृथिव्यां येऽन्तरिक्षे ये दिवि येषामन्नं वातो वर्षमिषवस्तेभ्यो दश प्राचीर्दश दक्षिणा दश प्रतीचीर्दशोदीचीर्दशोर्ध्वास्तेभ्यो\nनमस्ते नो मृडयन्तु ते यं द्विष्मो यश्च नो द्वेष्टि तं वो जम्भे दधामि ॥",
          meaning: {
            en: "Salutations to the Rudras on earth, in mid-air and in heaven, whose arrows are food, wind and rain. To them I join ten fingers towards the east, ten to the south, ten to the west, ten to the north and ten upward; to them salutations. May they be gracious to us. Whoever we hate and whoever hates us, him I place in your jaws.",
            kn: "ಭೂಮಿಯಲ್ಲಿ, ಅಂತರಿಕ್ಷದಲ್ಲಿ ಮತ್ತು ದ್ಯುಲೋಕದಲ್ಲಿ ಇರುವ, ಅನ್ನ, ಗಾಳಿ ಮತ್ತು ಮಳೆಯೇ ಬಾಣಗಳಾಗಿರುವ ರುದ್ರರಿಗೆ ನಮಸ್ಕಾರ. ಅವರಿಗೆ ಪೂರ್ವಕ್ಕೆ ಹತ್ತು, ದಕ್ಷಿಣಕ್ಕೆ ಹತ್ತು, ಪಶ್ಚಿಮಕ್ಕೆ ಹತ್ತು, ಉತ್ತರಕ್ಕೆ ಹತ್ತು, ಮೇಲಕ್ಕೆ ಹತ್ತು ಬೆರಳುಗಳನ್ನು ಜೋಡಿಸಿ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. ಅವರು ನಮಗೆ ಸುಖವನ್ನು ಕೊಡಲಿ. ನಾವು ದ್ವೇಷಿಸುವವನನ್ನೂ ನಮ್ಮನ್ನು ದ್ವೇಷಿಸುವವನನ್ನೂ ನಿಮ್ಮ ದವಡೆಗಳಿಗೆ ಒಪ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "शान्तिः",
      titleEn: "Closing",
      verses: [
        {
          text: "ॐ शान्तिः शान्तिः शान्तिः ॥",
        },
      ],
    },
  ],
};

export const sriRudramChamakam: Mantra = {
  id: "sri-rudram-chamakam",
  title: "श्रीरुद्रप्रश्नः (चमकम्)",
  titleEn: "Sri Rudram · Chamakam",
  category: "vedic",
  order: 2,
  series: "sri-rudram",
  deity: "Agni-Viṣṇu; Rudra",
  source: "Kṛṣṇa Yajurveda, Taittirīya Saṃhitā 4.7.1–11",
  summary: "The companion of the Namakam (Taittirīya Saṃhitā 4.7.1–11), the Vasordhārā litany. After invoking Agni and Viṣṇu, the worshipper asks, item by item, for every good of body, mind, home, the sacrifice and the world, repeating ‘ca me’, ‘and this for me’.",
  summaryKn: "ನಮಕದ ಜೊತೆಯ ಭಾಗ (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೪.೭.೧–೧೧), ವಸೋರ್ಧಾರಾ ಮಂತ್ರಗಳು. ಅಗ್ನಿ ಮತ್ತು ವಿಷ್ಣುವನ್ನು ಆವಾಹಿಸಿದ ನಂತರ ಭಕ್ತನು ದೇಹ, ಮನಸ್ಸು, ಮನೆ, ಯಜ್ಞ ಮತ್ತು ಜಗತ್ತಿನ ಎಲ್ಲ ಒಳಿತುಗಳನ್ನು ‘ಚ ಮೇ’ (ಇದೂ ನನಗೆ) ಎಂದು ಒಂದೊಂದಾಗಿ ಕೇಳುತ್ತಾನೆ.",
  difficulty: "advanced",
  completeness: "complete",
  contentNote: "Taittirīya Saṃhitā 4.7.1–11 in full. The closing prayers that some reciters add after the eleventh anuvāka (इडा देवहूः… and others) are not included.",
  sections: [
    {
      title: "प्रथमोऽनुवाकः",
      titleEn: "Anuvāka 1",
      verses: [
        {
          text: "अग्नाविष्णू सजोषसेमा वर्धन्तु वां गिरः ।\nद्युम्नैर्वाजेभिरागतम् ॥",
          meaning: {
            en: "O Agni and Viṣṇu, rejoicing together, may these songs magnify you; come to us with splendour and strength.",
            kn: "ಒಟ್ಟಾಗಿ ಸಂತೋಷಪಡುವ ಅಗ್ನಿ ವಿಷ್ಣುಗಳೇ, ನಮ್ಮ ಈ ಸ್ತುತಿಗಳು ನಿಮ್ಮ ಮಹಿಮೆಯನ್ನು ಬೆಳೆಸಲಿ; ತೇಜಸ್ಸು ಮತ್ತು ಬಲದೊಂದಿಗೆ ನಮ್ಮ ಬಳಿಗೆ ಬನ್ನಿ.",
          },
        },
        {
          text: "वाजश्च मे प्रसवश्च मे प्रयतिश्च मे प्रसितिश्च मे\nधीतिश्च मे क्रतुश्च मे स्वरश्च मे श्लोकश्च मे\nश्रावश्च मे श्रुतिश्च मे ज्योतिश्च मे सुवश्च मे\nप्राणश्च मेऽपानश्च मे व्यानश्च मेऽसुश्च मे चित्तं च म आधीतं च मे\nवाक्च मे मनश्च मे चक्षुश्च मे श्रोत्रं च मे\nदक्षश्च मे बलं च म ओजश्च मे सहश्च म आयुश्च मे\nजरा च म आत्मा च मे तनूश्च मे\nशर्म च मे वर्म च मेऽङ्गानि च मेऽस्थानि च मे\nपरूंषि च मे शरीराणि च मे ॥",
          meaning: {
            en: "May these be mine through the sacrifice: food and its bringing forth, effort and its success, thought and resolve, voice and fame, hearing and learning, light and heaven; the vital breaths, mind, eye, ear, skill, strength, vigour and endurance; long life and a ripe old age; my self and my body, shelter and armour; my limbs, bones, joints and whole body. (Each anuvāka of the Chamakam prays in this way, ‘and this for me, and this for me’.)",
            kn: "ಅನ್ನ ಮತ್ತು ಅದರ ಉತ್ಪತ್ತಿ, ಪ್ರಯತ್ನ ಮತ್ತು ಅದರ ಫಲ, ಚಿಂತನೆ, ಸಂಕಲ್ಪ, ಧ್ವನಿ, ಕೀರ್ತಿ, ಕೇಳುವಿಕೆ, ವಿದ್ಯೆ, ಜ್ಯೋತಿ, ಸ್ವರ್ಗ, ಪ್ರಾಣ-ಅಪಾನ-ವ್ಯಾನಗಳು, ಮನಸ್ಸು, ಕಣ್ಣು, ಕಿವಿ, ಕೌಶಲ, ಬಲ, ಓಜಸ್ಸು, ಸಹನೆ, ದೀರ್ಘಾಯುಸ್ಸು, ಮುಪ್ಪಿನ ತನಕ ಬದುಕು, ಆತ್ಮ, ದೇಹ, ಆಶ್ರಯ, ಕವಚ, ಅಂಗಗಳು, ಎಲುಬುಗಳು, ಕೀಲುಗಳು, ಇಡೀ ಶರೀರ — ಇವೆಲ್ಲವೂ ಯಜ್ಞದ ಫಲವಾಗಿ ನನಗೆ ದೊರೆಯಲಿ. (ಚಮಕದ ಪ್ರತಿಯೊಂದು ಅನುವಾಕವೂ ‘ಇದೂ ನನಗೆ, ಇದೂ ನನಗೆ’ ಎಂದು ಹೀಗೆಯೇ ಪ್ರಾರ್ಥಿಸುತ್ತದೆ.)",
          },
        },
      ],
    },
    {
      title: "द्वितीयोऽनुवाकः",
      titleEn: "Anuvāka 2",
      verses: [
        {
          text: "ज्यैष्ठ्यं च म आधिपत्यं च मे मन्युश्च मे\nभामश्च मेऽमश्च मेऽम्भश्च मे जेमा च मे महिमा च मे\nवरिमा च मे प्रथिमा च मे वर्ष्मा च मे\nद्राघुया च मे वृद्धं च मे वृद्धिश्च मे\nसत्यं च मे श्रद्धा च मे जगच्च मे\nधनं च मे वशश्च मे त्विषिश्च मे क्रीडा च मे\nमोदश्च मे जातं च मे जनिष्यमाणं च मे\nसूक्तं च मे सुकृतं च मे वित्तं च मे\nवेद्यं च मे भूतं च मे भविष्यच्च मे\nसुगं च मे सुपथं च म ऋद्धं च म ऋद्धिश्च मे\nकॢप्तं च मे कॢप्तिश्च मे मतिश्च मे सुमतिश्च मे ॥",
          meaning: {
            en: "May I have leadership and lordship, righteous anger and dignity, strength and depth, victory, greatness, breadth, extent, height, length, growth and increase, truth and faith, the moving world, wealth and self-mastery, radiance and play, joy, what is born and what will be born, good speech and good deeds, what is gained and what is to be gained, the past and the future, easy ways and good paths, prosperity and its increase, what is fitting and its fulfilment, understanding and right understanding.",
            kn: "ಹಿರಿತನ, ಅಧಿಕಾರ, ನ್ಯಾಯವಾದ ಕೋಪ, ಗೌರವ, ಬಲ, ಗಾಂಭೀರ್ಯ, ಜಯ, ಮಹಿಮೆ, ವಿಸ್ತಾರ, ಎತ್ತರ, ದೀರ್ಘತೆ, ವೃದ್ಧಿ, ಸತ್ಯ, ಶ್ರದ್ಧೆ, ಚರಾಚರ ಜಗತ್ತು, ಧನ, ಸ್ವಾಧೀನ, ತೇಜಸ್ಸು, ಕ್ರೀಡೆ, ಸಂತೋಷ, ಹುಟ್ಟಿದ್ದು ಮತ್ತು ಹುಟ್ಟಲಿರುವುದು, ಒಳ್ಳೆಯ ಮಾತು, ಒಳ್ಳೆಯ ಕರ್ಮ, ಪಡೆದದ್ದು ಮತ್ತು ಪಡೆಯಬೇಕಾದದ್ದು, ಭೂತ-ಭವಿಷ್ಯತ್ತುಗಳು, ಸುಗಮ ಮಾರ್ಗ, ಸಮೃದ್ಧಿ, ಯೋಗ್ಯವಾದದ್ದು ಮತ್ತು ಅದರ ಸಿದ್ಧಿ, ಒಳ್ಳೆಯ ಬುದ್ಧಿ — ಇವೆಲ್ಲವೂ ನನಗೆ ದೊರೆಯಲಿ.",
          },
        },
      ],
    },
    {
      title: "तृतीयोऽनुवाकः",
      titleEn: "Anuvāka 3",
      verses: [
        {
          text: "शं च मे मयश्च मे प्रियं च मेऽनुकामश्च मे\nकामश्च मे सौमनसश्च मे भद्रं च मे श्रेयश्च मे\nवस्यश्च मे यशश्च मे भगश्च मे द्रविणं च मे\nयन्ता च मे धर्ता च मे क्षेमश्च मे\nधृतिश्च मे विश्वं च मे महश्च मे संविच्च मे\nज्ञात्रं च मे सूश्च मे प्रसूश्च मे सीरं च मे\nलयश्च म ऋतं च मेऽमृतं च मेऽयक्ष्मं च मेऽनामयच्च मे\nजीवातुश्च मे दीर्घायुत्वं च मेऽनमित्रं च मेऽभयं च मे\nसुगं च मे शयनं च मे सूषा च मे\nसुदिनं च मे ॥",
          meaning: {
            en: "May I have peace and joy, what is dear and what I long for, contentment, goodness, the better and the best, fame, fortune and riches, guidance and support, safety and steadiness, all things and greatness, knowledge and the knowing mind, offspring and progeny, the plough and the furrow, truth and immortality, freedom from disease and from sickness, life and long life, freedom from enemies and from fear, a good way and good rest, a fair dawn and a good day.",
            kn: "ಶಾಂತಿ, ಸುಖ, ಪ್ರಿಯವಾದದ್ದು, ಬಯಸಿದ್ದು, ಮನಸ್ಸಿನ ನೆಮ್ಮದಿ, ಮಂಗಳ, ಶ್ರೇಯಸ್ಸು, ಕೀರ್ತಿ, ಭಾಗ್ಯ, ಸಂಪತ್ತು, ಮಾರ್ಗದರ್ಶನ, ಆಧಾರ, ಕ್ಷೇಮ, ಧೈರ್ಯ, ಜ್ಞಾನ, ಸಂತಾನ, ನೇಗಿಲು ಮತ್ತು ಉಳುಮೆ, ಋತ, ಅಮೃತತ್ವ, ರೋಗವಿಲ್ಲದಿರುವಿಕೆ, ಆರೋಗ್ಯ, ದೀರ್ಘಾಯುಸ್ಸು, ಶತ್ರುಭಯವಿಲ್ಲದಿರುವಿಕೆ, ನಿರ್ಭಯತೆ, ಸುಗಮ ಪ್ರಯಾಣ, ಒಳ್ಳೆಯ ನಿದ್ರೆ, ಶುಭ ಉಷಃಕಾಲ, ಶುಭ ದಿನ — ಇವೆಲ್ಲವೂ ನನಗೆ ದೊರೆಯಲಿ.",
          },
        },
      ],
    },
    {
      title: "चतुर्थोऽनुवाकः",
      titleEn: "Anuvāka 4",
      verses: [
        {
          text: "ऊर्क्च मे सूनृता च मे पयश्च मे रसश्च मे\nघृतं च मे मधु च मे सग्धिश्च मे\nसपीतिश्च मे कृषिश्च मे वृष्टिश्च मे जैत्रं च म औद्भिद्यं च मे\nरयिश्च मे रायश्च मे पुष्टं च मे पुष्टिश्च मे\nविभु च मे प्रभु च मे बहु च मे\nभूयश्च मे पूर्णं च मे पूर्णतरं च मेऽक्षितिश्च मे\nकूयवाश्च मेऽन्नं च मेऽक्षुच्च मे व्रीहयश्च मे यवाश्च मे\nमाषाश्च मे तिलाश्च मे मुद्गाश्च मे खल्वाश्च मे\nगोधूमाश्च मे मसुराश्च मे प्रियङ्गवश्च मेऽणवश्च मे श्यामाकाश्च मे\nनीवाराश्च मे ॥",
          meaning: {
            en: "May I have nourishing food and kind, true speech, milk and its essence, ghee and honey, meals and drinks shared together, ploughing and rain, victory, the plants of the earth, riches and wealth, nourishment and growth, abundance and plenty, fullness and more than fullness, unfailing food, fodder, food that banishes hunger; rice, barley, black gram, sesame, green gram, chickpeas, wheat, lentils, millets, fine grains, śyāmāka and wild rice.",
            kn: "ಶಕ್ತಿದಾಯಕ ಆಹಾರ, ಸಿಹಿಯಾದ ಸತ್ಯವಾದ ಮಾತು, ಹಾಲು, ರಸ, ತುಪ್ಪ, ಜೇನು, ಒಟ್ಟಾಗಿ ಉಣ್ಣುವುದು ಕುಡಿಯುವುದು, ಉಳುಮೆ, ಮಳೆ, ಜಯ, ಭೂಮಿಯಿಂದ ಬೆಳೆಯುವ ಸಸ್ಯಗಳು, ಸಂಪತ್ತು, ಪುಷ್ಟಿ, ಸಮೃದ್ಧಿ, ಪೂರ್ಣತೆ, ಎಂದೂ ತೀರದ ಆಹಾರ, ಮೇವು, ಹಸಿವನ್ನು ನೀಗುವ ಅನ್ನ; ಅಕ್ಕಿ, ಜವೆಗೋಧಿ, ಉದ್ದು, ಎಳ್ಳು, ಹೆಸರು, ಕಡಲೆ, ಗೋಧಿ, ಮಸೂರ, ನವಣೆ, ಸಣ್ಣ ಧಾನ್ಯಗಳು, ಸಾಮೆ, ಕಾಡಕ್ಕಿ — ಇವೆಲ್ಲವೂ ನನಗೆ ದೊರೆಯಲಿ.",
          },
        },
      ],
    },
    {
      title: "पञ्चमोऽनुवाकः",
      titleEn: "Anuvāka 5",
      verses: [
        {
          text: "अश्मा च मे मृत्तिका च मे गिरयश्च मे\nपर्वताश्च मे सिकताश्च मे वनस्पतयश्च मे हिरण्यं च मेऽयश्च मे\nसीसं च मे त्रपुश्च मे श्यामं च मे\nलोहं च मेऽग्निश्च म आपश्च मे वीरुधश्च म ओषधयश्च मे\nकृष्टपच्यं च मेऽकृष्टपच्यं च मे ग्राम्याश्च मे पशव आरण्याश्च यज्ञेन कल्पन्तां वित्तं च मे\nवित्तिश्च मे भूतं च मे भूतिश्च मे वसु च मे\nवसतिश्च मे कर्म च मे शक्तिश्च मेऽर्थश्च म एमश्च म इतिश्च मे\nगतिश्च मे ॥",
          meaning: {
            en: "May stone and clay, hills and mountains, sand and trees, gold and iron, lead and tin, dark and red metals, fire and water, creepers and herbs, the crops of tilled and untilled land, and domestic and wild animals prosper for me through the sacrifice. May I have wealth gained and to be gained, prosperity, goods and a dwelling, work and the power to do it, purpose, effort, movement and progress.",
            kn: "ಕಲ್ಲು, ಮಣ್ಣು, ಬೆಟ್ಟಗಳು, ಪರ್ವತಗಳು, ಮರಳು, ಮರಗಳು, ಚಿನ್ನ, ಕಬ್ಬಿಣ, ಸೀಸ, ತವರ, ಕಪ್ಪು ಮತ್ತು ಕೆಂಪು ಲೋಹಗಳು, ಅಗ್ನಿ, ನೀರು, ಬಳ್ಳಿಗಳು, ಔಷಧಿ ಸಸ್ಯಗಳು, ಉತ್ತ ಮತ್ತು ಉಳದ ಭೂಮಿಯ ಬೆಳೆಗಳು, ಊರಿನ ಮತ್ತು ಕಾಡಿನ ಪ್ರಾಣಿಗಳು — ಇವು ಯಜ್ಞದಿಂದ ನನಗೆ ಸಮೃದ್ಧವಾಗಲಿ. ಸಂಪಾದಿಸಿದ ಮತ್ತು ಸಂಪಾದಿಸಬೇಕಾದ ಧನ, ಐಶ್ವರ್ಯ, ವಸ್ತುಗಳು, ವಾಸಸ್ಥಾನ, ಕರ್ಮ, ಅದನ್ನು ಮಾಡುವ ಶಕ್ತಿ, ಗುರಿ, ಪ್ರಯತ್ನ, ಗತಿ — ಇವೆಲ್ಲವೂ ನನಗೆ ದೊರೆಯಲಿ.",
          },
        },
      ],
    },
    {
      title: "षष्ठोऽनुवाकः",
      titleEn: "Anuvāka 6",
      verses: [
        {
          text: "अग्निश्च म इन्द्रश्च मे सोमश्च म इन्द्रश्च मे\nसविता च म इन्द्रश्च मे सरस्वती च म इन्द्रश्च मे\nपूषा च म इन्द्रश्च मे बृहस्पतिश्च म इन्द्रश्च मे\nमित्रश्च म इन्द्रश्च मे वरुणश्च म इन्द्रश्च मे\nत्वष्टा च म इन्द्रश्च मे धाता च म इन्द्रश्च मे\nविष्णुश्च म इन्द्रश्च मेऽश्विनौ च म इन्द्रश्च मे\nमरुतश्च म इन्द्रश्च मे विश्वे च मे देवा इन्द्रश्च मे\nपृथिवी च म इन्द्रश्च मेऽन्तरिक्षं च म इन्द्रश्च मे\nद्यौश्च म इन्द्रश्च मे दिशश्च म इन्द्रश्च मे\nमूर्धा च म इन्द्रश्च मे प्रजापतिश्च म इन्द्रश्च मे ॥",
          meaning: {
            en: "May Agni be mine and Indra; Soma, Savitṛ, Sarasvatī, Pūṣan, Bṛhaspati, Mitra, Varuṇa, Tvaṣṭṛ, Dhātṛ, Viṣṇu, the Aśvins, the Maruts and the Viśvedevas, Earth, Mid-air, Heaven, the Quarters, the Zenith and Prajāpati, each together with Indra.",
            kn: "ಅಗ್ನಿ, ಸೋಮ, ಸವಿತೃ, ಸರಸ್ವತೀ, ಪೂಷಾ, ಬೃಹಸ್ಪತಿ, ಮಿತ್ರ, ವರುಣ, ತ್ವಷ್ಟೃ, ಧಾತೃ, ವಿಷ್ಣು, ಅಶ್ವಿನೀದೇವತೆಗಳು, ಮರುತ್ತುಗಳು, ವಿಶ್ವೇದೇವತೆಗಳು, ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ದ್ಯುಲೋಕ, ದಿಕ್ಕುಗಳು, ಊರ್ಧ್ವಲೋಕ ಮತ್ತು ಪ್ರಜಾಪತಿ — ಇವರೆಲ್ಲರೂ ಇಂದ್ರನೊಂದಿಗೆ ನನಗೆ ಅನುಕೂಲರಾಗಲಿ.",
          },
        },
      ],
    },
    {
      title: "सप्तमोऽनुवाकः",
      titleEn: "Anuvāka 7",
      verses: [
        {
          text: "अंशुश्च मे रश्मिश्च मेऽदाभ्यश्च मेऽधिपतिश्च म उपांशुश्च मेऽन्तर्यामश्च म ऐन्द्रवायवश्च मे\nमैत्रावरुणश्च म आश्विनश्च मे प्रतिप्रस्थानश्च मे शुक्रश्च मे\nमन्थी च म आग्रयणश्च मे वैश्वदेवश्च मे ध्रुवश्च मे\nवैश्वानरश्च म ऋतुग्रहाश्च मेऽतिग्राह्याश्च म ऐन्द्राग्नश्च मे वैश्वदेवश्च मे\nमरुत्वतीयाश्च मे माहेन्द्रश्च म आदित्यश्च मे सावित्रश्च मे\nसारस्वतश्च मे पौष्णश्च मे पात्नीवतश्च मे हारियोजनश्च मे ॥",
          meaning: {
            en: "May the soma cups of the sacrifice be mine: the aṃśu and raśmi, adābhya and adhipati, upāṃśu and antaryāma, the cups for Indra and Vāyu, for Mitra and Varuṇa and for the Aśvins, the śukra and manthin, āgrayaṇa, vaiśvadeva, dhruva and vaiśvānara, the seasonal and additional cups, those for Indra and Agni, the Viśvedevas, the Maruts, Mahendra, the Ādityas, Savitṛ, Sarasvatī, Pūṣan, the wives of the gods, and the hāriyojana.",
            kn: "ಸೋಮಯಾಗದಲ್ಲಿ ವಿವಿಧ ದೇವತೆಗಳಿಗಾಗಿ ತುಂಬುವ ಸೋಮಪಾತ್ರೆಗಳು (ಗ್ರಹಗಳು) — ಅಂಶು, ರಶ್ಮಿ, ಅದಾಭ್ಯ, ಅಧಿಪತಿ, ಉಪಾಂಶು, ಅಂತರ್ಯಾಮ, ಐಂದ್ರವಾಯವ, ಮೈತ್ರಾವರುಣ, ಆಶ್ವಿನ, ಶುಕ್ರ, ಮಂಥೀ, ಆಗ್ರಯಣ, ವೈಶ್ವದೇವ, ಧ್ರುವ, ವೈಶ್ವಾನರ, ಋತುಗ್ರಹಗಳು, ಅತಿಗ್ರಾಹ್ಯಗಳು, ಐಂದ್ರಾಗ್ನ, ಮರುತ್ವತೀಯ, ಮಾಹೇಂದ್ರ, ಆದಿತ್ಯ, ಸಾವಿತ್ರ, ಸಾರಸ್ವತ, ಪೌಷ್ಣ, ಪಾತ್ನೀವತ, ಹಾರಿಯೋಜನ — ಇವೆಲ್ಲವೂ ನನಗೆ ಸಿದ್ಧಿಸಲಿ.",
          },
        },
      ],
    },
    {
      title: "अष्टमोऽनुवाकः",
      titleEn: "Anuvāka 8",
      verses: [
        {
          text: "इध्मश्च मे बर्हिश्च मे वेदिश्च मे धिष्णियाश्च मे\nस्रुचश्च मे चमसाश्च मे ग्रावाणश्च मे स्वरवश्च म उपरवाश्च मेऽधिषवणे च मे\nद्रोणकलशश्च मे वायव्यानि च मे पूतभृच्च म आधवनीयश्च म आग्नीध्रं च मे\nहविर्धानं च मे गृहाश्च मे सदश्च मे पुरोडाशाश्च मे\nपचताश्च मेऽवभृथश्च मे स्वगाकारश्च मे ॥",
          meaning: {
            en: "May the implements of sacrifice be mine: fuel and sacred grass, the altar and the fire-hearths, ladles and cups, pressing stones, the sounding holes, the pressing boards, the wooden tub, the vessels for Vāyu, the vessel for the purified soma, the mixing vessel, the Āgnīdhra fire, the shed for oblations, the sheds and the seat, the rice cakes, the cooked offerings, the final bath and the call svagā.",
            kn: "ಸಮಿಧೆ, ದರ್ಭೆ, ವೇದಿ, ಧಿಷ್ಣ್ಯಗಳು, ಸ್ರುಕ್ಕುಗಳು, ಚಮಸಗಳು, ಸೋಮವನ್ನು ಅರೆಯುವ ಕಲ್ಲುಗಳು, ಉಪರವಗಳು, ಅಧಿಷವಣ ಹಲಗೆಗಳು, ದ್ರೋಣಕಲಶ, ವಾಯವ್ಯ ಪಾತ್ರೆಗಳು, ಪೂತಭೃತ್, ಆಧವನೀಯ, ಆಗ್ನೀಧ್ರ, ಹವಿರ್ಧಾನ, ಯಜ್ಞಶಾಲೆಗಳು, ಸದಸ್ಸು, ಪುರೋಡಾಶಗಳು, ಬೇಯಿಸಿದ ಹವಿಸ್ಸುಗಳು, ಅವಭೃಥಸ್ನಾನ, ಸ್ವಗಾಕಾರ — ಈ ಯಜ್ಞಸಾಧನಗಳೆಲ್ಲವೂ ನನಗೆ ಸಿದ್ಧಿಸಲಿ.",
          },
        },
      ],
    },
    {
      title: "नवमोऽनुवाकः",
      titleEn: "Anuvāka 9",
      verses: [
        {
          text: "अग्निश्च मे घर्मश्च मेऽर्कश्च मे सूर्यश्च मे प्राणश्च मेऽश्वमेधश्च मे\nपृथिवी च मेऽदितिश्च मे दितिश्च मे द्यौश्च मे\nशक्वरीरङ्गुलयो दिशश्च मे यज्ञेन कल्पन्तामृक्च मे साम च मे\nस्तोमश्च मे यजुश्च मे दीक्षा च मे तपश्च म ऋतुश्च मे\nव्रतं च मेऽहोरात्रयोर्वृष्ट्या बृहद्रथन्तरे च मे यज्ञेन कल्पेताम् ॥",
          meaning: {
            en: "May fire and the gharma offering, the arka and the sun, breath and the horse-sacrifice, Earth, Aditi and Diti, Heaven, the śakvarī verses, the fingers and the quarters prosper through the sacrifice. May I have the ṛk and the sāman, the stoma and the yajus, consecration and austerity, the seasons and the vows; may day and night, with rain, and the Bṛhat and Rathantara chants prosper through the sacrifice.",
            kn: "ಅಗ್ನಿ, ಘರ್ಮ, ಅರ್ಕ, ಸೂರ್ಯ, ಪ್ರಾಣ, ಅಶ್ವಮೇಧ, ಭೂಮಿ, ಅದಿತಿ, ದಿತಿ, ದ್ಯುಲೋಕ, ಶಕ್ವರೀ ಛಂದಸ್ಸುಗಳು, ಬೆರಳುಗಳು, ದಿಕ್ಕುಗಳು — ಇವು ಯಜ್ಞದಿಂದ ಸಮೃದ್ಧವಾಗಲಿ. ಋಕ್, ಸಾಮ, ಸ್ತೋಮ, ಯಜುಸ್, ದೀಕ್ಷೆ, ತಪಸ್ಸು, ಋತುಗಳು, ವ್ರತಗಳು ನನಗೆ ದೊರೆಯಲಿ; ಹಗಲು-ರಾತ್ರಿಗಳು ಮಳೆಯೊಂದಿಗೆ, ಬೃಹತ್ ಮತ್ತು ರಥಂತರ ಸಾಮಗಳು ಯಜ್ಞದಿಂದ ಸಮೃದ್ಧವಾಗಲಿ.",
          },
        },
      ],
    },
    {
      title: "दशमोऽनुवाकः",
      titleEn: "Anuvāka 10",
      verses: [
        {
          text: "गर्भाश्च मे वत्साश्च मे त्र्यविश्च मे त्र्यवी च मे\nदित्यवाट्च मे दित्यौही च मे पञ्चाविश्च मे पञ्चावी च मे\nत्रिवत्सश्च मे त्रिवत्सा च मे तुर्यवाट्च मे तुर्यौही च मे\nपष्ठवाच्च मे पष्ठौही च म उक्षा च मे\nवशा च म ऋषभश्च मे वेहच्च मेऽनड्वाञ्च मे\nधेनुश्च म आयुर्यज्ञेन कल्पतां प्राणो यज्ञेन कल्पतामपानो यज्ञेन कल्पतां व्यानो यज्ञेन कल्पतां चक्षुर्यज्ञेन कल्पतां श्रोत्रं यज्ञेन कल्पतां मनो यज्ञेन कल्पतां वाग्यज्ञेन कल्पतामात्मा यज्ञेन कल्पतां यज्ञो यज्ञेन कल्पताम् ॥",
          meaning: {
            en: "May I have the young of cattle and the calves; heifers and steers of eighteen months, of two years, of two and a half, three and four years; the bull and the barren cow, the ox, the cow that has lost her calf, the draught ox and the milch cow. May life, breath, the downward and the diffused breath, eye, ear, mind, speech and the self prosper through the sacrifice; may the sacrifice itself prosper through the sacrifice.",
            kn: "ಗರ್ಭದ ಮರಿಗಳು, ಕರುಗಳು, ಒಂದೂವರೆ, ಎರಡು, ಎರಡೂವರೆ, ಮೂರು ಮತ್ತು ನಾಲ್ಕು ವರ್ಷದ ಹೋರಿಗಳು ಮತ್ತು ಹಸುಗಳು, ಗೂಳಿ, ಬಂಜೆ ಹಸು, ಎತ್ತು, ಗರ್ಭ ಕಳೆದುಕೊಂಡ ಹಸು, ನೊಗ ಹೊರುವ ಎತ್ತು, ಹಾಲು ಕೊಡುವ ಹಸು — ಇವೆಲ್ಲವೂ ನನಗೆ ದೊರೆಯಲಿ. ಆಯುಸ್ಸು, ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಕಣ್ಣು, ಕಿವಿ, ಮನಸ್ಸು, ಮಾತು, ಆತ್ಮ — ಇವು ಯಜ್ಞದಿಂದ ಸಮೃದ್ಧವಾಗಲಿ; ಯಜ್ಞವೂ ಯಜ್ಞದಿಂದಲೇ ಸಮೃದ್ಧವಾಗಲಿ.",
          },
        },
      ],
    },
    {
      title: "एकादशोऽनुवाकः",
      titleEn: "Anuvāka 11",
      verses: [
        {
          text: "एका च मे तिस्रश्च मे पञ्च च मे\nसप्त च मे नव च म एकादश च मे\nत्रयोदश च मे पञ्चदश च मे सप्तदश च मे\nनवदश च म एकविंशतिश्च मे त्रयोविंशतिश्च मे पञ्चविंशतिश्च मे\nसप्तविंशतिश्च मे नवविंशतिश्च म एकत्रिंशच्च मे त्रयस्त्रिंशच्च मे\nचतस्रश्च मेऽष्टौ च मे द्वादश च मे षोडश च मे\nविंशतिश्च मे चतुर्विंशतिश्च मेऽष्टाविंशतिश्च मे द्वात्रिंशच्च मे षट्त्रिंशच्च मे\nचत्वारिंशच्च मे चतुश्चत्वारिंशच्च मेऽष्टाचत्वारिंशच्च मे वाजश्च प्रसवश्चापिजश्च क्रतुश्च सुवश्च मूर्धा च व्यश्नियश्चान्त्यायनश्चान्त्यश्च भौवनश्च भुवनश्चाधिपतिश्च ॥",
          meaning: {
            en: "May the odd numbers be mine, one, three, five and so on to thirty-three, and the fours, four, eight, twelve and so on to forty-eight; tradition explains them as metres, gods or the courses of the fire-altar. The closing names, Vāja, Prasava and the rest up to Adhipati, are traditionally taken as the months of the year and their lord.",
            kn: "ಒಂದು, ಮೂರು, ಐದು ಎಂದು ಮೂವತ್ತಮೂರರವರೆಗಿನ ಬೆಸಸಂಖ್ಯೆಗಳೂ, ನಾಲ್ಕು, ಎಂಟು, ಹನ್ನೆರಡು ಎಂದು ನಲವತ್ತೆಂಟರವರೆಗಿನ ನಾಲ್ಕರ ಸಂಖ್ಯೆಗಳೂ ನನಗೆ ಅನುಕೂಲವಾಗಲಿ; ಸಂಪ್ರದಾಯವು ಇವನ್ನು ಛಂದಸ್ಸುಗಳು, ದೇವತೆಗಳು ಅಥವಾ ಯಜ್ಞವೇದಿಯ ಪದರಗಳು ಎಂದು ವಿವರಿಸುತ್ತದೆ. ಕೊನೆಯ ‘ವಾಜ, ಪ್ರಸವ’ ಮೊದಲಾದ ‘ಅಧಿಪತಿ’ಯವರೆಗಿನ ಹೆಸರುಗಳನ್ನು ವರ್ಷದ ಮಾಸಗಳು ಮತ್ತು ಅವುಗಳ ಒಡೆಯ ಎಂದು ಸಂಪ್ರದಾಯವು ತಿಳಿಸುತ್ತದೆ.",
          },
        },
      ],
    },
    {
      title: "शान्तिः",
      titleEn: "Closing",
      verses: [
        {
          text: "ॐ शान्तिः शान्तिः शान्तिः ॥",
        },
      ],
    },
  ],
};
