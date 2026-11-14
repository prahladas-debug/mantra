/**
 * Ambhṛṇī Sūkta (Devī Sūkta, Vāk Sūkta): Ṛgveda 10.125.
 *
 * Sources:
 * - Base: bhavykhatri/DharmicData (GitHub, ODbL), Ṛgveda maṇḍala 10, from the
 *   Vedic Heritage Portal. Svaras and independent-svarita numerals stripped
 *   (सुप्राव्ये, अप्स्वन्तः).
 * - Witness: GRETIL, Ṛgveda-Saṃhitā ed. Aufrecht.
 * Collation found no textual differences, only spelling (anusvāra before m).
 */
import type { Mantra } from '../types';

export const ambhriniSukta: Mantra = {
  id: "ambhrini-sukta",
  title: "अम्भृणीसूक्तम्",
  titleEn: "Ambhrini Sukta (Devi Sukta)",
  category: "vedic",
  deity: "Vāk Āmbhṛṇī (Śrī Lakṣmī in the Mādhva reading)",
  source: "Ṛgveda 10.125",
  summary: "Ṛgveda 10.125, in which Vāk, daughter of the seer Ambhṛṇa, speaks as the power that upholds the gods, grants wealth and wisdom, and pervades heaven and earth. The Mādhva tradition identifies the speaker with Śrī Lakṣmī, consort and devotee of Śrī Hari, by whose grace the gods hold their offices.",
  summaryKn: "ಅಂಭೃಣ ಋಷಿಯ ಮಗಳಾದ ವಾಕ್ ದೇವಿಯು ತಾನೇ ಮಾತನಾಡುವ ಋಗ್ವೇದ ಸೂಕ್ತ (೧೦.೧೨೫): ದೇವತೆಗಳನ್ನು ಧರಿಸುವ, ಸಂಪತ್ತನ್ನೂ ಜ್ಞಾನವನ್ನೂ ಕೊಡುವ, ದ್ಯುಲೋಕ ಭೂಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಶಕ್ತಿ ತಾನೆಂದು ಅವಳು ಹೇಳುತ್ತಾಳೆ. ಮಾಧ್ವ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಈ ದೇವಿಯು ಶ್ರೀಹರಿಯ ಪತ್ನಿಯೂ ಭಕ್ತೆಯೂ ಆದ ಶ್ರೀಲಕ್ಷ್ಮೀದೇವಿ; ಅವಳ ಅನುಗ್ರಹದಿಂದಲೇ ದೇವತೆಗಳು ತಮ್ಮ ಪದವಿಗಳನ್ನು ಪಡೆಯುತ್ತಾರೆ.",
  difficulty: "medium",
  completeness: "complete",
  sections: [
    {
      title: "ऋग्वेदः १०.१२५",
      titleEn: "Ṛgveda 10.125",
      verses: [
        {
          n: 1,
          text: "अहं रुद्रेभिर्वसुभिश्चराम्यहमादित्यैरुत विश्वदेवैः ।\nअहं मित्रावरुणोभा बिभर्म्यहमिन्द्राग्नी अहमश्विनोभा ॥",
          meaning: {
            en: "I move with the Rudras and the Vasus, with the Ādityas and all the gods. I uphold both Mitra and Varuṇa, Indra and Agni, and both the Aśvins.",
            kn: "ನಾನು ರುದ್ರರೊಡನೆಯೂ ವಸುಗಳೊಡನೆಯೂ, ಆದಿತ್ಯರೊಡನೆಯೂ ವಿಶ್ವೇದೇವತೆಗಳೊಡನೆಯೂ ಸಂಚರಿಸುತ್ತೇನೆ. ಮಿತ್ರ ವರುಣರಿಬ್ಬರನ್ನೂ, ಇಂದ್ರ ಅಗ್ನಿಗಳನ್ನೂ, ಇಬ್ಬರು ಅಶ್ವಿನೀದೇವತೆಗಳನ್ನೂ ನಾನು ಧರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          n: 2,
          text: "अहं सोममाहनसं बिभर्म्यहं त्वष्टारमुत पूषणं भगम् ।\nअहं दधामि द्रविणं हविष्मते सुप्राव्ये यजमानाय सुन्वते ॥",
          meaning: {
            en: "I uphold Soma, who swells forth, and Tvaṣṭṛ, Pūṣan and Bhaga. I bestow wealth on the worshipper who offers oblations and devoutly presses the soma.",
            kn: "ಉಕ್ಕಿ ಹರಿಯುವ ಸೋಮನನ್ನೂ ತ್ವಷ್ಟೃ, ಪೂಷಾ, ಭಗರನ್ನೂ ನಾನು ಧರಿಸುತ್ತೇನೆ. ಹವಿಸ್ಸನ್ನು ಅರ್ಪಿಸುವ, ಭಕ್ತಿಯಿಂದ ಸೋಮಯಾಗ ಮಾಡುವ ಯಜಮಾನನಿಗೆ ನಾನು ಸಂಪತ್ತನ್ನು ಕೊಡುತ್ತೇನೆ.",
          },
        },
        {
          n: 3,
          text: "अहं राष्ट्री संगमनी वसूनां चिकितुषी प्रथमा यज्ञियानाम् ।\nतां मा देवा व्यदधुः पुरुत्रा भूरिस्थात्रां भूर्यावेशयन्तीम् ॥",
          meaning: {
            en: "I am the queen, the gatherer of riches, the knowing one, first among those worthy of worship. The gods have set me in many places, abiding in many forms and entering into many.",
            kn: "ನಾನು ಒಡತಿ, ಸಂಪತ್ತುಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುವವಳು, ಜ್ಞಾನಿನಿ, ಪೂಜಾರ್ಹರಲ್ಲಿ ಮೊದಲಿಗಳು. ಅನೇಕ ಸ್ಥಾನಗಳಲ್ಲಿ ನೆಲಸಿರುವ, ಅನೇಕ ವಸ್ತುಗಳನ್ನು ಪ್ರವೇಶಿಸಿರುವ ನನ್ನನ್ನು ದೇವತೆಗಳು ಎಲ್ಲೆಡೆ ಸ್ಥಾಪಿಸಿದ್ದಾರೆ.",
          },
        },
        {
          n: 4,
          text: "मया सो अन्नमत्ति यो विपश्यति यः प्राणिति य ईं शृणोत्युक्तम् ।\nअमन्तवो मां त उप क्षियन्ति श्रुधि श्रुत श्रद्धिवं ते वदामि ॥",
          meaning: {
            en: "Through me one eats food, sees, breathes and hears what is spoken. Without knowing it, they all dwell in me. Listen, O renowned one: I tell you what is worthy of faith.",
            kn: "ನನ್ನಿಂದಲೇ ಒಬ್ಬನು ಅನ್ನವನ್ನು ತಿನ್ನುತ್ತಾನೆ, ನೋಡುತ್ತಾನೆ, ಉಸಿರಾಡುತ್ತಾನೆ, ಹೇಳಿದ್ದನ್ನು ಕೇಳುತ್ತಾನೆ. ತಿಳಿಯದೆಯೇ ಎಲ್ಲರೂ ನನ್ನನ್ನು ಆಶ್ರಯಿಸಿ ಬಾಳುತ್ತಾರೆ. ಪ್ರಸಿದ್ಧನೇ ಕೇಳು, ಶ್ರದ್ಧೆಗೆ ಯೋಗ್ಯವಾದುದನ್ನು ನಿನಗೆ ಹೇಳುತ್ತೇನೆ.",
          },
        },
        {
          n: 5,
          text: "अहमेव स्वयमिदं वदामि जुष्टं देवेभिरुत मानुषेभिः ।\nयं कामये तंतमुग्रं कृणोमि तं ब्रह्माणं तमृषिं तं सुमेधाम् ॥",
          meaning: {
            en: "I myself declare this, welcomed by gods and men alike: whomever I love, him I make mighty, him a Brahmā, him a seer, him wise.",
            kn: "ದೇವತೆಗಳೂ ಮನುಷ್ಯರೂ ಸ್ವಾಗತಿಸುವ ಈ ಮಾತನ್ನು ನಾನೇ ಹೇಳುತ್ತೇನೆ: ನಾನು ಯಾರನ್ನು ಬಯಸುತ್ತೇನೆಯೋ ಅವನನ್ನು ಬಲಶಾಲಿಯನ್ನಾಗಿ, ಬ್ರಹ್ಮನನ್ನಾಗಿ, ಋಷಿಯನ್ನಾಗಿ, ಮೇಧಾವಿಯನ್ನಾಗಿ ಮಾಡುತ್ತೇನೆ.",
          },
        },
        {
          n: 6,
          text: "अहं रुद्राय धनुरा तनोमि ब्रह्मद्विषे शरवे हन्तवा उ ।\nअहं जनाय समदं कृणोम्यहं द्यावापृथिवी आ विवेश ॥",
          meaning: {
            en: "I string the bow for Rudra, so that his arrow may strike the hater of the sacred word. I wage the fight for the people; I have entered heaven and earth.",
            kn: "ವೇದದ್ವೇಷಿಯನ್ನು ಕೊಲ್ಲಲು ರುದ್ರನಿಗೆ ನಾನು ಧನುಸ್ಸಿನ ಹೆದೆ ಏರಿಸುತ್ತೇನೆ. ಜನರಿಗಾಗಿ ನಾನು ಹೋರಾಟವನ್ನು ನಡೆಸುತ್ತೇನೆ; ದ್ಯುಲೋಕವನ್ನೂ ಭೂಮಿಯನ್ನೂ ನಾನು ವ್ಯಾಪಿಸಿದ್ದೇನೆ.",
          },
        },
        {
          n: 7,
          text: "अहं सुवे पितरमस्य मूर्धन्मम योनिरप्स्वन्तः समुद्रे ।\nततो वि तिष्ठे भुवनानु विश्वोतामूं द्यां वर्ष्मणोप स्पृशामि ॥",
          meaning: {
            en: "I bring forth the father at the summit of this world; my source is in the waters, within the ocean. From there I spread through all the worlds and touch yonder heaven with my height. (In the Mādhva reading, her source within the ocean is Śrī Nārāyaṇa.)",
            kn: "ಈ ಜಗತ್ತಿನ ಶಿಖರದಲ್ಲಿ ತಂದೆಯನ್ನು ನಾನು ಹುಟ್ಟಿಸುತ್ತೇನೆ; ನನ್ನ ಮೂಲವು ಜಲಗಳಲ್ಲಿ, ಸಮುದ್ರದೊಳಗಿದೆ. ಅಲ್ಲಿಂದ ನಾನು ಎಲ್ಲ ಲೋಕಗಳಲ್ಲಿ ಹರಡುತ್ತೇನೆ; ನನ್ನ ಎತ್ತರದಿಂದ ಆ ದ್ಯುಲೋಕವನ್ನು ಮುಟ್ಟುತ್ತೇನೆ. (ಮಾಧ್ವ ಅರ್ಥದಲ್ಲಿ ಸಮುದ್ರದೊಳಗಿನ ಅವಳ ಮೂಲವೆಂದರೆ ಶ್ರೀನಾರಾಯಣ.)",
          },
        },
        {
          n: 8,
          text: "अहमेव वात इव प्र वाम्यारभमाणा भुवनानि विश्वा ।\nपरो दिवा पर एना पृथिव्यैतावती महिना सं बभूव ॥",
          meaning: {
            en: "I blow forth like the wind, taking hold of all the worlds; beyond heaven and beyond this earth, so great have I become in my glory.",
            kn: "ಎಲ್ಲ ಲೋಕಗಳನ್ನೂ ಹಿಡಿದುಕೊಂಡು ನಾನು ಗಾಳಿಯಂತೆ ಬೀಸುತ್ತೇನೆ. ದ್ಯುಲೋಕವನ್ನು ಮೀರಿ, ಈ ಭೂಮಿಯನ್ನು ಮೀರಿ — ನನ್ನ ಮಹಿಮೆಯಿಂದ ನಾನು ಇಷ್ಟು ಮಹತ್ತಾಗಿದ್ದೇನೆ.",
          },
        },
      ],
    },
  ],
};
