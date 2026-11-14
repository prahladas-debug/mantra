/**
 * Pavamāna Sūkta as chanted in South India:
 *   Taittirīya Saṃhitā 5.6.1.1–2 (four Āpaḥ ṛks, हिरण्यवर्णाः शुचयः पावकाः)
 *   + Taittirīya Brāhmaṇa 1.4.8 (seventeen Pāvamānī ṛks, पवमानः सुवर्जनः …)
 *   + the closing śānti तच्छं योः.
 *
 * Sources:
 * - Base: vishvAsa/vedAH_yajuH (GitHub, CC BY 4.0): TS mūlam 5/6.md and the TB
 *   1.4.8 mūlam blocks. Svaras stripped, split words rejoined.
 * - Witness 1: shlokam.org, Pavamana Suktam (typed Devanagari, recitation text).
 * - Witness 2: TITUS, Taittirīya-Saṃhitā 5.6 and Taittirīya-Brāhmaṇa 1.4.
 * - Sequence also confirmed by hindupedia.com (romanised).
 *
 * Resolved readings:
 * - ṛk 1 अग्निं या गर्भं दधिरे (base and shlokam; TITUS omits या).
 * - ṛk 3 पयसोन्दन्ति and ṛk 4 तनुवोप (base and shlokam; TITUS पयसोऽन्दन्ति, तनुवोऽप).
 * - ṛk 20 शतोद्यामं (base and shlokam).
 * - Hiatus forms in TITUS (प्राणेन इषिरः, मा ऊर्जयन्त्या) follow the recited sandhi.
 * - Spelling: Taittirīya स्स/श्श kept; ꣳ → ं; कामान्त्समर्धयन्तु.
 */
import type { Mantra } from '../types';

export const pavamanaSukta: Mantra = {
  id: "pavamana-sukta",
  title: "पवमानसूक्तम्",
  titleEn: "Pavamana Suktam",
  category: "vedic",
  deity: "Āpaḥ (the Waters); Pavamāna",
  source: "Taittirīya Saṃhitā 5.6.1.1–2; Taittirīya Brāhmaṇa 1.4.8",
  summary: "The Pavamāna Sūkta as chanted in South India for purification, for example in puṇyāhavācana and abhiṣeka: the four Āpaḥ ṛks हिरण्यवर्णाः शुचयः पावकाः (Taittirīya Saṃhitā 5.6.1.1–2), then the seventeen Pāvamānī ṛks पवमानः सुवर्जनः… (Taittirīya Brāhmaṇa 1.4.8), closing with the śānti.",
  summaryKn: "ದಕ್ಷಿಣ ಭಾರತದಲ್ಲಿ ಪುಣ್ಯಾಹವಾಚನ, ಅಭಿಷೇಕ ಮೊದಲಾದ ಶುದ್ಧಿಕರ್ಮಗಳಲ್ಲಿ ಪಠಿಸುವ ಪವಮಾನ ಸೂಕ್ತ: ‘ಹಿರಣ್ಯವರ್ಣಾಃ ಶುಚಯಃ ಪಾವಕಾಃ’ ಎಂಬ ಜಲದೇವತೆಗಳ ನಾಲ್ಕು ಋಕ್ಕುಗಳು (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೫.೬.೧.೧–೨), ನಂತರ ‘ಪವಮಾನಃ ಸುವರ್ಜನಃ’ ಎಂಬ ಹದಿನೇಳು ಪಾವಮಾನೀ ಋಕ್ಕುಗಳು (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೧.೪.೮), ಕೊನೆಯಲ್ಲಿ ಶಾಂತಿಪಾಠ.",
  difficulty: "medium",
  completeness: "complete",
  sections: [
    {
      title: "आपः (तैत्तिरीयसंहिता ५.६.१)",
      titleEn: "The Waters (Taittirīya Saṃhitā 5.6.1)",
      verses: [
        {
          n: 1,
          text: "हिरण्यवर्णाश्शुचयः पावका यासु जातः कश्यपो यास्विन्द्रः ।\nअग्निं या गर्भं दधिरे विरूपास्ता न आपश्शं स्योना भवन्तु ॥",
          meaning: {
            en: "The golden-hued, pure, purifying Waters, in which Kaśyapa and Indra were born, which bore Agni of many forms in their womb: may those Waters be gracious and kind to us.",
            kn: "ಚಿನ್ನದ ಬಣ್ಣದ, ಶುದ್ಧವಾದ, ಪವಿತ್ರಗೊಳಿಸುವ ಜಲಗಳು — ಯಾವುದರಲ್ಲಿ ಕಶ್ಯಪನೂ ಇಂದ್ರನೂ ಹುಟ್ಟಿದರೋ, ಯಾವುವು ಅನೇಕ ರೂಪಗಳ ಅಗ್ನಿಯನ್ನು ಗರ್ಭದಲ್ಲಿ ಧರಿಸಿದವೋ — ಆ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.",
          },
        },
        {
          n: 2,
          text: "यासां राजा वरुणो याति मध्ये सत्यानृते अवपश्यञ्जनानाम् ।\nमधुश्चुतश्शुचयो याः पावकास्ता न आपश्शं स्योना भवन्तु ॥",
          meaning: {
            en: "In whose midst King Varuṇa moves, beholding the truth and falsehood of men: may those honey-dripping, pure, purifying Waters be gracious and kind to us.",
            kn: "ಜನರ ಸತ್ಯವನ್ನೂ ಅಸತ್ಯವನ್ನೂ ನೋಡುತ್ತಾ ರಾಜನಾದ ವರುಣನು ಯಾವುವುಗಳ ನಡುವೆ ಸಂಚರಿಸುತ್ತಾನೆಯೋ, ಜೇನನ್ನು ಸುರಿಸುವ ಶುದ್ಧವಾದ ಪವಿತ್ರಗೊಳಿಸುವ ಆ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.",
          },
        },
        {
          n: 3,
          text: "यासां देवा दिवि कृण्वन्ति भक्षं या अन्तरिक्षे बहुधा भवन्ति ।\nयाः पृथिवीं पयसोन्दन्ति शुक्रास्ता न आपश्शं स्योना भवन्तु ॥",
          meaning: {
            en: "Of which the gods in heaven make their drink, which dwell in many forms in mid-air, which moisten the earth with their milk: may those bright Waters be gracious and kind to us.",
            kn: "ದೇವತೆಗಳು ದ್ಯುಲೋಕದಲ್ಲಿ ಯಾವುದನ್ನು ತಮ್ಮ ಪಾನೀಯವನ್ನಾಗಿ ಮಾಡಿಕೊಳ್ಳುತ್ತಾರೋ, ಅಂತರಿಕ್ಷದಲ್ಲಿ ಅನೇಕ ರೂಪಗಳಲ್ಲಿ ಇರುವ, ತಮ್ಮ ರಸದಿಂದ ಭೂಮಿಯನ್ನು ತೋಯಿಸುವ ಆ ಉಜ್ವಲ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.",
          },
        },
        {
          n: 4,
          text: "शिवेन मा चक्षुषा पश्यतापश्शिवया तनुवोप स्पृशत त्वचं मे ।\nसर्वाँ अग्नीं रप्सुषदो हुवे वो मयि वर्चो बलमोजो नि धत्त ॥",
          meaning: {
            en: "O Waters, look on me with a kindly eye; touch my skin with your kindly body. I invoke all the fires that dwell in the waters: place in me lustre, strength and vigour.",
            kn: "ಜಲಗಳೇ, ಮಂಗಳಕರವಾದ ಕಣ್ಣಿನಿಂದ ನನ್ನನ್ನು ನೋಡಿ; ಮಂಗಳಕರವಾದ ನಿಮ್ಮ ದೇಹದಿಂದ ನನ್ನ ಚರ್ಮವನ್ನು ಸ್ಪರ್ಶಿಸಿ. ಜಲಗಳಲ್ಲಿ ನೆಲಸಿರುವ ಎಲ್ಲ ಅಗ್ನಿಗಳನ್ನೂ ಆವಾಹಿಸುತ್ತೇನೆ; ನನ್ನಲ್ಲಿ ತೇಜಸ್ಸು, ಬಲ ಮತ್ತು ಓಜಸ್ಸನ್ನು ಇಡಿ.",
          },
        },
      ],
    },
    {
      title: "पावमान्यः (तैत्तिरीयब्राह्मणम् १.४.८)",
      titleEn: "Pāvamānī ṛks (Taittirīya Brāhmaṇa 1.4.8)",
      verses: [
        {
          n: 5,
          text: "पवमानस्सुवर्जनः । पवित्रेण विचर्षणिः ।\nयः पोता स पुनातु मा ॥",
          meaning: {
            en: "May the Purifier, who brings the light of heaven and sees all through his purifying power, he who makes pure, purify me.",
            kn: "ಸ್ವರ್ಗದ ಬೆಳಕನ್ನು ತರುವ, ತನ್ನ ಪವಿತ್ರಗೊಳಿಸುವ ಶಕ್ತಿಯಿಂದ ಎಲ್ಲವನ್ನೂ ನೋಡುವ ಪವಮಾನನು — ಶುದ್ಧಗೊಳಿಸುವ ಅವನು — ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ.",
          },
        },
        {
          n: 6,
          text: "पुनन्तु मा देवजनाः । पुनन्तु मनवो धिया ।\nपुनन्तु विश्व आयवः ॥",
          meaning: {
            en: "May the hosts of gods purify me; may the Manus purify me with wisdom; may all living beings purify me.",
            kn: "ದೇವಗಣಗಳು ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ; ಮನುಗಳು ತಮ್ಮ ಜ್ಞಾನದಿಂದ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ; ಎಲ್ಲ ಜೀವಿಗಳೂ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ.",
          },
        },
        {
          n: 7,
          text: "जातवेदः पवित्रवत् । पवित्रेण पुनाहि मा ।\nशुक्रेण देव दीद्यत् । अग्ने क्रत्वा क्रतूं रनु ॥",
          meaning: {
            en: "O Jātavedas, bearer of purity, purify me with your purifier; shining with your bright light, O Agni, purify me by your power, according to my deeds.",
            kn: "ಜಾತವೇದಸನೇ, ಪವಿತ್ರತೆಯನ್ನು ಹೊಂದಿದವನೇ, ನಿನ್ನ ಪವಿತ್ರ ಶಕ್ತಿಯಿಂದ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸು. ಉಜ್ವಲ ಕಾಂತಿಯಿಂದ ಬೆಳಗುವ ಅಗ್ನಿಯೇ, ನನ್ನ ಕರ್ಮಗಳಿಗೆ ತಕ್ಕಂತೆ ನಿನ್ನ ಶಕ್ತಿಯಿಂದ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸು.",
          },
        },
        {
          n: 8,
          text: "यत्ते पवित्रमर्चिषि । अग्ने विततमन्तरा ।\nब्रह्म तेन पुनीमहे ॥",
          meaning: {
            en: "O Agni, by the purifier spread within your flame, we purify our sacred word.",
            kn: "ಅಗ್ನಿಯೇ, ನಿನ್ನ ಜ್ವಾಲೆಯೊಳಗೆ ಹರಡಿರುವ ಆ ಪವಿತ್ರತೆಯಿಂದ ನಾವು ನಮ್ಮ ವೇದವಾಣಿಯನ್ನು ಪವಿತ್ರಗೊಳಿಸುತ್ತೇವೆ.",
          },
        },
        {
          n: 9,
          text: "उभाभ्यां देव सवितः । पवित्रेण सवेन च ।\nइदं ब्रह्म पुनीमहे ॥",
          meaning: {
            en: "O divine Savitṛ, by both your purifier and your impulse, we purify this sacred word.",
            kn: "ಸವಿತೃದೇವನೇ, ನಿನ್ನ ಪವಿತ್ರತೆ ಮತ್ತು ಪ್ರೇರಣೆ ಎರಡರಿಂದಲೂ ನಾವು ಈ ವೇದವಾಣಿಯನ್ನು ಪವಿತ್ರಗೊಳಿಸುತ್ತೇವೆ.",
          },
        },
        {
          n: 10,
          text: "वैश्वदेवी पुनती देव्यागात् । यस्यै बह्वीस्तनुवो वीतपृष्ठाः ।\nतया मदन्तस्सधमाद्येषु । वयं स्याम पतयो रयीणाम् ॥",
          meaning: {
            en: "The purifying goddess of all the gods has come, she who has many fair forms; rejoicing with her at the feasts, may we be lords of riches.",
            kn: "ಎಲ್ಲ ದೇವತೆಗಳಿಗೆ ಸೇರಿದ, ಪವಿತ್ರಗೊಳಿಸುವ ದೇವಿಯು ಬಂದಿದ್ದಾಳೆ; ಅವಳಿಗೆ ಅನೇಕ ಸುಂದರ ರೂಪಗಳಿವೆ. ಯಜ್ಞೋತ್ಸವಗಳಲ್ಲಿ ಅವಳೊಡನೆ ಸಂತೋಷಪಡುತ್ತಾ ನಾವು ಸಂಪತ್ತಿನ ಒಡೆಯರಾಗೋಣ.",
          },
        },
        {
          n: 11,
          text: "वैश्वानरो रश्मिभिर्मा पुनातु । वातः प्राणेनेषिरो मयोभूः ।\nद्यावापृथिवी पयसा पयोभिः । ऋतावरी यज्ञिये मा पुनीताम् ॥",
          meaning: {
            en: "May Vaiśvānara purify me with his rays, and the swift wind, giver of joy, with breath; may Heaven and Earth, true and holy, purify me with their milk.",
            kn: "ವೈಶ್ವಾನರನು ತನ್ನ ಕಿರಣಗಳಿಂದ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ; ವೇಗಶಾಲಿಯೂ ಸುಖದಾಯಕನೂ ಆದ ವಾಯುವು ಪ್ರಾಣದಿಂದ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ; ಋತದಿಂದ ಕೂಡಿದ, ಯಜ್ಞಯೋಗ್ಯರಾದ ದ್ಯಾವಾಪೃಥಿವಿಗಳು ತಮ್ಮ ಕ್ಷೀರರಸದಿಂದ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ.",
          },
        },
        {
          n: 12,
          text: "बृहद्भिस्सवितस्तृभिः । वर्षिष्ठैर्देव मन्मभिः ।\nअग्ने दक्षैः पुनाहि मा ॥",
          meaning: {
            en: "O Savitṛ, with your three great powers and with the loftiest hymns, O God; O Agni, purify me with your strengths.",
            kn: "ಸವಿತೃವೇ, ನಿನ್ನ ಮೂರು ಮಹಾಶಕ್ತಿಗಳಿಂದ, ಶ್ರೇಷ್ಠವಾದ ಸ್ತುತಿಗಳಿಂದ, ದೇವನೇ; ಅಗ್ನಿಯೇ, ನಿನ್ನ ಸಾಮರ್ಥ್ಯಗಳಿಂದ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸು.",
          },
        },
        {
          n: 13,
          text: "येन देवा अपुनत । येनापो दिव्यं कशः ।\nतेन दिव्येन ब्रह्मणा । इदं ब्रह्म पुनीमहे ॥",
          meaning: {
            en: "By that with which the gods purified themselves, by which the Waters purified the heavenly sap, by that divine sacred word we purify this sacred word.",
            kn: "ಯಾವುದರಿಂದ ದೇವತೆಗಳು ತಮ್ಮನ್ನು ಪವಿತ್ರಗೊಳಿಸಿಕೊಂಡರೋ, ಯಾವುದರಿಂದ ಜಲಗಳು ದಿವ್ಯ ರಸವನ್ನು ಪವಿತ್ರಗೊಳಿಸಿದವೋ, ಆ ದಿವ್ಯ ಮಂತ್ರದಿಂದ ನಾವು ಈ ವೇದವಾಣಿಯನ್ನು ಪವಿತ್ರಗೊಳಿಸುತ್ತೇವೆ.",
          },
        },
        {
          n: 14,
          text: "यः पावमानीरध्येति । ऋषिभिस्सम्भृतं रसम् ।\nसर्वं स पूतमश्नाति । स्वदितं मातरिश्वना ॥",
          meaning: {
            en: "Whoever studies the Pāvamānī verses, the essence gathered by the seers, eats all his food made pure, sweetened by Mātariśvan.",
            kn: "ಋಷಿಗಳು ಒಟ್ಟುಗೂಡಿಸಿದ ಸಾರವಾದ ಪಾವಮಾನೀ ಮಂತ್ರಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡುವವನು ಮಾತರಿಶ್ವನಿಂದ (ವಾಯುವಿನಿಂದ) ಸಿಹಿಯಾಗಿಸಲ್ಪಟ್ಟ ಪವಿತ್ರವಾದ ಅನ್ನವನ್ನೇ ಉಣ್ಣುತ್ತಾನೆ.",
          },
        },
        {
          n: 15,
          text: "पावमानीर्यो अध्येति । ऋषिभिस्सम्भृतं रसम् ।\nतस्मै सरस्वती दुहे । क्षीरं सर्पिर्मधूदकम् ॥",
          meaning: {
            en: "Whoever studies the Pāvamānī verses, the essence gathered by the seers, for him Sarasvatī yields milk, ghee, honey and water.",
            kn: "ಋಷಿಗಳು ಒಟ್ಟುಗೂಡಿಸಿದ ಸಾರವಾದ ಪಾವಮಾನೀ ಮಂತ್ರಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡುವವನಿಗೆ ಸರಸ್ವತಿಯು ಹಾಲು, ತುಪ್ಪ, ಜೇನು ಮತ್ತು ನೀರನ್ನು ಕರೆದುಕೊಡುತ್ತಾಳೆ.",
          },
        },
        {
          n: 16,
          text: "पावमानीस्स्वस्त्ययनीः । सुदुघा हि पयस्वतीः ।\nऋषिभिस्सम्भृतो रसः । ब्राह्मणेष्वमृतं हितम् ॥",
          meaning: {
            en: "The Pāvamānī verses bring well-being; they yield richly, full of milk. The essence gathered by the seers is nectar placed in the knowers of the Veda.",
            kn: "ಪಾವಮಾನೀ ಮಂತ್ರಗಳು ಕ್ಷೇಮವನ್ನು ತರುತ್ತವೆ; ಹಾಲಿನಿಂದ ತುಂಬಿದ ಹಸುಗಳಂತೆ ಅವು ಸಮೃದ್ಧವಾಗಿ ಕರೆಯುತ್ತವೆ. ಋಷಿಗಳು ಒಟ್ಟುಗೂಡಿಸಿದ ಈ ಸಾರವು ವೇದವಿದರಲ್ಲಿ ಇಟ್ಟ ಅಮೃತ.",
          },
        },
        {
          n: 17,
          text: "पावमानीर्दिशन्तु नः । इमं लोकमथो अमुम् ।\nकामान्त्समर्धयन्तु नः । देवीर्देवैस्समाभृताः ॥",
          meaning: {
            en: "May the Pāvamānī verses grant us this world and the next; may they, goddesses gathered by the gods, fulfil our desires.",
            kn: "ಪಾವಮಾನೀ ಮಂತ್ರಗಳು ನಮಗೆ ಈ ಲೋಕವನ್ನೂ ಪರಲೋಕವನ್ನೂ ಕೊಡಲಿ; ದೇವತೆಗಳು ಒಟ್ಟುಗೂಡಿಸಿದ ಆ ದೇವಿಯರು ನಮ್ಮ ಕಾಮನೆಗಳನ್ನು ಪೂರೈಸಲಿ.",
          },
        },
        {
          n: 18,
          text: "पावमानीस्स्वस्त्ययनीः । सुदुघा हि घृतश्चुतः ।\nऋषिभिस्सम्भृतो रसः । ब्राह्मणेष्वमृतं हितम् ॥",
          meaning: {
            en: "The Pāvamānī verses bring well-being; they yield richly, dripping with ghee. The essence gathered by the seers is nectar placed in the knowers of the Veda.",
            kn: "ಪಾವಮಾನೀ ಮಂತ್ರಗಳು ಕ್ಷೇಮವನ್ನು ತರುತ್ತವೆ; ತುಪ್ಪವನ್ನು ಸುರಿಸುವ ಹಸುಗಳಂತೆ ಸಮೃದ್ಧವಾಗಿ ಕರೆಯುತ್ತವೆ. ಋಷಿಗಳು ಒಟ್ಟುಗೂಡಿಸಿದ ಈ ಸಾರವು ವೇದವಿದರಲ್ಲಿ ಇಟ್ಟ ಅಮೃತ.",
          },
        },
        {
          n: 19,
          text: "येन देवाः पवित्रेण । आत्मानं पुनते सदा ।\nतेन सहस्रधारेण । पावमान्यः पुनन्तु मा ॥",
          meaning: {
            en: "By the purifier with which the gods ever cleanse themselves, by that thousand-streamed one, may the Pāvamānī verses purify me.",
            kn: "ಯಾವ ಪವಿತ್ರತೆಯಿಂದ ದೇವತೆಗಳು ಸದಾ ತಮ್ಮನ್ನು ಶುದ್ಧಗೊಳಿಸಿಕೊಳ್ಳುತ್ತಾರೋ, ಸಾವಿರ ಧಾರೆಗಳುಳ್ಳ ಆ ಪವಿತ್ರತೆಯಿಂದ ಪಾವಮಾನೀ ಮಂತ್ರಗಳು ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ.",
          },
        },
        {
          n: 20,
          text: "प्राजापत्यं पवित्रम् । शतोद्यामं हिरण्मयम् ।\nतेन ब्रह्मविदो वयम् । पूतं ब्रह्म पुनीमहे ॥",
          meaning: {
            en: "Prajāpati's purifier is golden, of a hundred strands; by it we, knowers of Brahman, purify the sacred word, already pure.",
            kn: "ಪ್ರಜಾಪತಿಯ ಪವಿತ್ರವು ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವ, ನೂರು ಎಳೆಗಳುಳ್ಳದ್ದು; ಅದರಿಂದ ಬ್ರಹ್ಮವಿದರಾದ ನಾವು ಪವಿತ್ರವಾದ ವೇದವಾಣಿಯನ್ನು ಇನ್ನಷ್ಟು ಶುದ್ಧಗೊಳಿಸುತ್ತೇವೆ.",
          },
        },
        {
          n: 21,
          text: "इन्द्रस्सुनीती सह मा पुनातु । सोमस्स्वस्त्या वरुणस्समीच्या ।\nयमो राजा प्रमृणाभिः पुनातु मा । जातवेदा मोर्जयन्त्या पुनातु ॥",
          meaning: {
            en: "May Indra purify me with right guidance, Soma with well-being, Varuṇa with harmony; may King Yama purify me with his chastening; may Jātavedas purify me with strength-giving vigour.",
            kn: "ಇಂದ್ರನು ಒಳ್ಳೆಯ ಮಾರ್ಗದರ್ಶನದಿಂದ, ಸೋಮನು ಕ್ಷೇಮದಿಂದ, ವರುಣನು ಸಾಮರಸ್ಯದಿಂದ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ; ರಾಜನಾದ ಯಮನು ತನ್ನ ಶಿಕ್ಷಣದಿಂದ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಜಾತವೇದಸನು ಶಕ್ತಿದಾಯಕವಾದ ಬಲದಿಂದ ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ.",
          },
        },
      ],
    },
    {
      title: "शान्तिपाठः",
      titleEn: "Closing Śānti",
      verses: [
        {
          text: "ॐ तच्छं योरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥\nॐ शान्तिः शान्तिः शान्तिः ॥",
          meaning: {
            en: "We pray for that welfare and blessing: may we find the way to worship for the sacrifice and for its patron. May divine well-being be ours and well-being reach all people; may healing rise upward. May there be peace for the two-footed and the four-footed. Om, peace, peace, peace.",
            kn: "ಆ ಮಂಗಳವನ್ನೂ ಸುಖವನ್ನೂ ಪ್ರಾರ್ಥಿಸುತ್ತೇವೆ. ಯಜ್ಞಕ್ಕಾಗಿಯೂ ಯಜ್ಞ ಮಾಡುವವನಿಗಾಗಿಯೂ ಪೂಜೆಯ ದಾರಿ ದೊರೆಯಲಿ. ದೈವಿಕ ಕ್ಷೇಮವು ನಮಗೂ ಎಲ್ಲ ಮಾನವರಿಗೂ ಆಗಲಿ; ಔಷಧಿಗಳು ಮೇಲಕ್ಕೆ ಬೆಳೆಯಲಿ. ಮನುಷ್ಯರಿಗೂ ಪಶುಗಳಿಗೂ ಶಾಂತಿ ಸುಖ ಇರಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.",
          },
        },
      ],
    },
  ],
};
