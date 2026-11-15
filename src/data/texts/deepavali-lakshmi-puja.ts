/**
 * Deepavali: Lakshmi puja on the Ashvayuja amavasya night, with the notes and mantras of the days
 * round it: Jalapurana (water-filling) trayodashi, Naraka chaturdashi abhyanga and Yama tarpana,
 * Bali puja on Kartika shukla pratipada. Only what is specific to these rites is given; the common
 * steps are in the app's Shodashopachara Puja text. Collated Nov 2026.
 *
 * WITNESSES
 *   VM  Vrata Muktavali, ed. Vid. Venkatanarasimhacharya Rajapurohit, Sri Raghavendra Swami Matha,
 *       Mantralaya 2005 (Kannada script), pp. 266-274: Jalapurana Trayodashi, Naraka Chaturdashi
 *       (tailabhyanga vidhi), Lakshmi Puja, Balindra Puja (archive.org
 *       Vrata_Muktaavali_-_Raghavendra_Swami_Matha_Mantralya_). Madhva.
 *   N   stotranidhi.com "Sri Maha Lakshmi Visesha Shodasopachara Puja" (Telugu script; Smarta, with
 *       Sri Sukta), for the Smarta Lakshmi puja and the Deepavali prayers.
 *   Vr  Vratarajah, Vishvanatha Sharma, Bombay 1897 (Devanagari; archive.org), Kartika amavasya
 *       Lakshmi vrata and Balipratipada, checked for the Bali verse.
 *
 * CHOICES
 *   Aakasha-dipa verse दामोदराय नभसि तुलायां: VM reads राधया सह (printed here); the common reading
 *   of Kartika-mahatmya texts is लोलया सह (with Lola, Lakshmi), which has the same sense in effect.
 *   Abhyanga Vedic mantra (kanikradat janusham, Rigveda 2.42.1): VM; Yama tarpana names and the
 *   verse यमो निहन्ता: VM; ulka-dipa verse: VM. Chiranjivi verse and Markandeya verse: VM.
 *   Lakshmi prayers नमस्ते सर्वदेवानां, भो दीप, अग्निर्ज्योतिः: VM N. Kubera prayer धनदाय: VM only.
 *   Smarta Lakshmi dhyana verses: N only (the second verse is common in Smarta pujas).
 *   Bali verses बलिराज नमस्तुभ्यम्: VM Vr; the first verse भविष्येन्द्र: VM.
 *   The Smarta Naraka Chaturdashi abhyanga details are not given (not in the sources read).
 *
 */
import type { Mantra } from '../types';

export const deepavaliLakshmiPuja: Mantra = {
  id: "deepavali-lakshmi-puja",
  title: "दीपावलीलक्ष्मीपूजा",
  titleEn: "Deepavali Lakshmi Puja (with Naraka Chaturdashi and Bali Puja)",
  category: "puja",
  deity: "Sri Lakshmi, with Sri Vishnu; Sri Krishna; Bali",
  source: "Vrata Muktavali (Raghavendra Matha); stotranidhi Maha Lakshmi Puja; Vratarajah",
  summary: "The Deepavali days: the water-filling of the bath vessel on trayodashi with the aakasha-dipa; the oil bath (abhyanga) at moonrise of Naraka chaturdashi with its mantra, the prayer to the seven long-lived ones, Yama tarpana and the ulka-dipa for the ancestors; Lakshmi puja on the amavasya night with its prayers and the lighting of lamps; and the Bali puja on the next day. Madhva and Smarta forms are given where the books differ.",
  summaryKn: "ದೀಪಾವಳಿಯ ದಿನಗಳು: ತ್ರಯೋದಶಿಯಂದು ಸ್ನಾನದ ಹಂಡೆಗೆ ನೀರು ತುಂಬುವುದು ಮತ್ತು ಆಕಾಶದೀಪ; ನರಕಚತುರ್ದಶಿಯಂದು ಚಂದ್ರೋದಯದಲ್ಲಿ ಅಭ್ಯಂಜನ ಸ್ನಾನ, ಅದರ ಮಂತ್ರ, ಚಿರಂಜೀವಿ ಪ್ರಾರ್ಥನೆ, ಯಮತರ್ಪಣ, ಪಿತೃಗಳಿಗೆ ಉಲ್ಕಾದೀಪ; ಅಮಾವಾಸ್ಯೆಯ ರಾತ್ರಿ ಲಕ್ಷ್ಮೀ ಪೂಜೆ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ದೀಪ ಹಚ್ಚುವುದು; ಮರುದಿನ ಬಲೀಂದ್ರ ಪೂಜೆ. ಪುಸ್ತಕಗಳಲ್ಲಿ ಭೇದವಿರುವಲ್ಲಿ ಮಾಧ್ವ ಮತ್ತು ಸ್ಮಾರ್ತ ರೂಪಗಳನ್ನು ಕೊಡಲಾಗಿದೆ.",
  variants: [
    {
      key: "tradition",
      title: "Tradition",
      titleKn: "ಸಂಪ್ರದಾಯ",
      options: [
        {
          id: "madhva",
          label: "Madhva",
          labelKn: "ಮಾಧ್ವ",
        },
        {
          id: "smarta",
          label: "Smarta",
          labelKn: "ಸ್ಮಾರ್ತ",
        },
      ],
    },
  ],
  difficulty: "medium",
  completeness: "partial",
  contentNote: "Gives only what is specific to these rites. Acamana, pranayama, desha-kala sankalpa, Ganapati puja, kalasha puja and the sixteen upacharas of the Lakshmi puja (with Sri Sukta, which the app has as a separate text) are as in the Shodashopachara Puja text. The dates (Ashvayuja krishna trayodashi, chaturdashi, amavasya and Kartika shukla pratipada) follow the panchanga, and the moonrise time of your place; refer to the Panchanga in the app. Left out: the Madhva sankalpas of the abhyanga and Bali puja (damaged in the scan), the Smarta abhyanga rules (not in the sources read), the Ganga prayer verse, the Lakshmi ashtottara and Kuberas puja, Govardhana puja and the Yama-dvitiya.",
  sections: [
    {
      title: "जलपूरणत्रयोदशी",
      titleEn: "Trayodashi: water-filling, aakasha-dipa and Yama-dipa",
      note: "On Ashvayuja krishna trayodashi (the day before Naraka chaturdashi) the copper vessel for heating bath water is cleaned, decorated with kumkuma, lime and a toran, and filled three-quarters with clean water. In the Madhva manner (VM) the water of a kalasha worshipped with Ganga and Trivikrama (Rama-Trivikrama within Varuna) is poured into it at night, with music. Ganga is invoked into the kalasha with the verse below, and the vessel is worshipped with the twelve names of Ganga. After sunset an aakasha-dipa (lamp on a tall pole) is lit with the verse below and kept all through Kartika, and a lamp is placed on a high place outside the house for Yama, to ward off untimely death.",
      noteKn: "ಆಶ್ವಯುಜ ಕೃಷ್ಣ ತ್ರಯೋದಶಿಯಂದು (ನರಕಚತುರ್ದಶಿಯ ಹಿಂದಿನ ದಿನ) ನೀರು ಕಾಯಿಸುವ ತಾಮ್ರದ ಹಂಡೆಯನ್ನು ತೊಳೆದು, ಕೆಮ್ಮಣ್ಣು-ಸುಣ್ಣ, ತೋರಣಗಳಿಂದ ಅಲಂಕರಿಸಿ, ಮುಕ್ಕಾಲು ಭಾಗ ಶುದ್ಧ ನೀರು ತುಂಬಿ. ಮಾಧ್ವ ಕ್ರಮದಲ್ಲಿ (ವ್ರತಮುಕ್ತಾವಲಿ) ವರುಣಾಂತರ್ಗತ ಶ್ರೀರಮಾ-ತ್ರಿವಿಕ್ರಮನ ಮತ್ತು ಗಂಗೆಯ ಕಲಶಪೂಜೆ ಮಾಡಿ, ಮಂಗಲವಾದ್ಯಗಳೊಡನೆ ಆ ನೀರನ್ನು ಹಂಡೆಗೆ ಹಾಕುತ್ತಾರೆ. ಗಂಗೆಯನ್ನು ಕೆಳಗಿನ ಶ್ಲೋಕದಿಂದ ಆವಾಹಿಸಿ ಗಂಗೆಯ ಹನ್ನೆರಡು ನಾಮಗಳಿಂದ ಪೂಜಿಸಿ. ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಆಕಾಶದೀಪವನ್ನು ಕೆಳಗಿನ ಶ್ಲೋಕದೊಡನೆ ಹಚ್ಚಿ ಕಾರ್ತೀಕ ಮಾಸವಿಡೀ ಹಚ್ಚಿ; ಅಪಮೃತ್ಯು ನಿವಾರಣೆಗಾಗಿ ಮನೆಯ ಹೊರಗೆ ಎತ್ತರದ ಜಾಗದಲ್ಲಿ ಯಮನ ಪ್ರೀತಿಗೆ ದೀಪ ಇಡಿ.",
      verses: [
        {
          text: "गङ्गे च यमुने कृष्णे गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥",
          meaning: {
            en: "O Ganga, Yamuna, Krishna, Godavari, Sarasvati, Narmada, Sindhu and Kaveri, be present in this water.",
            kn: "ಗಂಗೆ, ಯಮುನೆ, ಕೃಷ್ಣೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು, ಕಾವೇರಿ ನದಿಗಳೇ, ಈ ಜಲದಲ್ಲಿ ಸಾನ್ನಿಧ್ಯವನ್ನು ನೀಡಿರಿ.",
          },
        },
        {
          text: "दामोदराय नभसि तुलायां राधया सह ।\nप्रदीपं ते प्रयच्छामि नमोऽनन्ताय वेधसे ॥",
          meaning: {
            en: "To Damodara, in the sky, in the month of Tula (Kartika), together with Radha (the common reading is Lola, Lakshmi), I give this lamp; salutations to the endless Creator.",
            kn: "ತುಲಾ (ಕಾರ್ತೀಕ) ಮಾಸದಲ್ಲಿ ಆಕಾಶದಲ್ಲಿ ರಾಧೆಯೊಡನೆ (ಸಾಮಾನ್ಯ ಪಾಠ: ಲೋಲೆ, ಲಕ್ಷ್ಮಿ) ಇರುವ ದಾಮೋದರನಿಗೆ ಈ ದೀಪವನ್ನು ಕೊಡುತ್ತೇನೆ; ಅನಂತನಾದ ಸೃಷ್ಟಿಕರ್ತನಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "नरकचतुर्दशी अभ्यङ्गः",
      titleEn: "Naraka Chaturdashi: the oil bath (abhyanga)",
      note: "On Ashvayuja krishna chaturdashi the oil bath is taken at the time of moonrise (the last watch of the night), even if amavasya is present at sunrise. It remembers Krishna's victory over Naraka, when the 16,100 women freed from his prison honoured Krishna with arati, and every household repeats it. Madhva practice (VM): at moonrise bathe to the waist, put on another cloth and arrange in a square mandala before the deity the water from the vessel heated the night before, a bowl, scented oil, sesame (or coconut) oil and durva. Remember Lakshmi in the oil, Ganga in the water and Krishna; do the arghya-padya upacharas; say the Vedic mantra below and remember that Krishna is being worshipped together with his family to the sound of music; offer flowers with the Keshava names, naivedya and arati, then dedicate to Krishna. Married women do arati to everyone with a lamp. Then, with the oil that has been offered, pray to the seven long-lived ones and touch the oil seven times to the ground with a bunch of durva, then to the earth and the head, three times, apply it to the whole body and bathe. Everyone, including ascetics and widows, must take the oil bath. After the bath, wear new clothes and bow to the deity and elders. Smarta books: follow your panchanga and manual for the time and the bathing rules.",
      noteKn: "ಆಶ್ವಯುಜ ಕೃಷ್ಣ ಚತುರ್ದಶಿಯಂದು ಚಂದ್ರೋದಯ ಕಾಲದಲ್ಲಿ (ರಾತ್ರಿಯ ಕೊನೆಯ ಜಾವ) ತೈಲಾಭ್ಯಂಜನ; ಸೂರ್ಯೋದಯಕ್ಕೆ ಅಮಾವಾಸ್ಯೆ ಇದ್ದರೂ ದೋಷವಿಲ್ಲ. ನರಕಾಸುರನ ಬಂಧನದಿಂದ ಮುಕ್ತರಾದ 16,100 ಸ್ತ್ರೀಯರು ಕೃಷ್ಣನಿಗೆ ಆರತಿ ಬೆಳಗಿದುದರ ಸಂಕೇತ. ಮಾಧ್ವ ಕ್ರಮ (ವ್ರತಮುಕ್ತಾವಲಿ): ಚಂದ್ರೋದಯದಲ್ಲಿ ಸೊಂಟದವರೆಗೆ ಮಾತ್ರ ಮಿಂದು ಬೇರೆ ವಸ್ತ್ರ ಧರಿಸಿ, ಹಿಂದಿನ ರಾತ್ರಿಯ ಹಂಡೆಯ ನೀರು, ಬಟ್ಟಲು, ಸುಗಂಧತೈಲ, ಎಳ್ಳೆಣ್ಣೆ (ಅಥವಾ ಕೊಬ್ಬರಿ ಎಣ್ಣೆ), ಗರಿಕೆಗಳನ್ನು ದೇವರ ಮುಂದೆ ಚೌಕ ಮಂಡಲದಲ್ಲಿಟ್ಟು, ಎಣ್ಣೆಯಲ್ಲಿ ಲಕ್ಷ್ಮಿಯನ್ನು, ನೀರಿನಲ್ಲಿ ಗಂಗೆಯನ್ನು, ಕೃಷ್ಣನನ್ನು ಸ್ಮರಿಸಿ, ಅರ್ಘ್ಯಪಾದ್ಯಾದಿ ಉಪಚಾರ ಮಾಡಿ ಕೆಳಗಿನ ವೇದಮಂತ್ರ ಹೇಳುತ್ತಾ ಮಂಗಲವಾದ್ಯಗಳೊಡನೆ ಕೃಷ್ಣನು ಸಪರಿವಾರ ಪೂಜಿತನಾದನೆಂದು ಅನುಸಂಧಾನ ಮಾಡಿ; ಕೇಶವಾದಿ ನಾಮಗಳಿಂದ ಪುಷ್ಪಾರ್ಚನೆ, ನೈವೇದ್ಯ, ಮಂಗಳಾರತಿ ಮಾಡಿ ಕೃಷ್ಣಾರ್ಪಣ. ಸುವಾಸಿನಿಯರು ದೀಪದಿಂದ ಎಲ್ಲರಿಗೂ ಆರತಿ ಮಾಡಿ. ನಂತರ ದೇವರಿಗೆ ಅರ್ಪಿಸಿದ ಎಣ್ಣೆಯನ್ನು ಚಿರಂಜೀವಿಗಳನ್ನು ಪ್ರಾರ್ಥಿಸಿ ಗರಿಕೆಯಿಂದ ನೆಲಕ್ಕೆ ಏಳು ಬಾರಿ ಮುಟ್ಟಿಸಿ, ಭೂಮಿಗೆ, ತಲೆಗೆ ಮೂರು ಬಾರಿ ಹಚ್ಚಿ, ಮೈಗೆಲ್ಲ ಹಚ್ಚಿ ಸ್ನಾನ ಮಾಡಿ. ವ್ರತಿಗಳು, ವಿಧವೆಯರು, ಸನ್ಯಾಸಿಗಳೂ ಸೇರಿ ಎಲ್ಲರೂ ಅಭ್ಯಂಗ ಮಾಡಬೇಕು. ಸ್ನಾನದ ನಂತರ ಹೊಸ ವಸ್ತ್ರ ಧರಿಸಿ ದೇವರಿಗೂ ಹಿರಿಯರಿಗೂ ನಮಸ್ಕರಿಸಿ. ಸ್ಮಾರ್ತ: ಸಮಯ ಮತ್ತು ನಿಯಮಗಳಿಗೆ ಪಂಚಾಂಗ ಮತ್ತು ನಿಮ್ಮ ಪುಸ್ತಕ ನೋಡಿ.",
      verses: [
        {
          text: "कनिक्रदज्जनुषं प्रब्रुवाण इयर्ति वाचमरितेव नावम् ।\nसुमङ्गलश्च शकुने भवासि मा त्वा काचिदभिभा विश्व्या विदत् ॥",
          meaning: {
            en: "The bird, crying aloud and declaring its birth, sends forth its voice like the oar of a boat; O omen-bird, be of good omen, and let no hostile power of any kind find you. (Rigveda 2.42.1, used at the oil bath.)",
            kn: "ಹುಟ್ಟನ್ನು ಘೋಷಿಸುತ್ತಾ ಕೂಗುವ ಪಕ್ಷಿ ತನ್ನ ಧ್ವನಿಯನ್ನು ಹುಟ್ಟುಗೋಲಿನಂತೆ ಹೊರಡಿಸುತ್ತದೆ; ಶಕುನಪಕ್ಷಿಯೇ, ಸುಮಂಗಲಕಾರಿಯಾಗು; ಯಾವ ವಿರೋಧಿಯೂ ನಿನ್ನನ್ನು ಅಭಿಭವಿಸದಿರಲಿ. (ಋಗ್ವೇದ 2.42.1; ತೈಲಾಭ್ಯಂಗದಲ್ಲಿ ಹೇಳುವ ಮಂತ್ರ.)",
          },
        },
        {
          text: "अश्वत्थामा बलिर्व्यासो हनूमांश्च विभीषणः ।\nकृपः परशुरामश्च सप्तैते चिरजीविनः ॥\nमार्कण्डेय महाभाग सप्तकल्पान्तजीवन ।\nआयुरारोग्यमैश्वर्यं देहि मे मुनिपुङ्गव ॥\nनमः चिरजीविभ्यः । आयुरारोग्यैश्वर्याभिवृद्धिं कुर्वन्तु ॥",
          meaning: {
            en: "Ashvatthama, Bali, Vyasa, Hanuman, Vibhishana, Kripa and Parashurama: these seven are long-lived. O Markandeya, blessed sage, who live to the end of seven kalpas, give me long life, health and prosperity, O chief of sages. Salutations to the long-lived ones; may they increase my life, health and prosperity.",
            kn: "ಅಶ್ವತ್ಥಾಮ, ಬಲಿ, ವ್ಯಾಸ, ಹನುಮಂತ, ವಿಭೀಷಣ, ಕೃಪ, ಪರಶುರಾಮ ಈ ಏಳು ಮಂದಿ ಚಿರಂಜೀವಿಗಳು. ಮಹಾಭಾಗನಾದ ಮಾರ್ಕಂಡೇಯನೇ, ಏಳು ಕಲ್ಪಾಂತ ಜೀವಿಯೇ, ಮುನಿಶ್ರೇಷ್ಠನೇ, ನನಗೆ ಆಯುಸ್ಸು, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳನ್ನು ಕೊಡು. ಚಿರಂಜೀವಿಗಳಿಗೆ ನಮಸ್ಕಾರ; ಆಯುರಾರೋಗ್ಯ ಐಶ್ವರ್ಯಗಳನ್ನು ವೃದ್ಧಿಸಲಿ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
      ],
    },
    {
      title: "यमतर्पणम्",
      titleEn: "Yama tarpana (Madhva)",
      note: "After the oil bath, offer water with akshata and sesame, through the deva-tirtha (the tip of the fingers), facing south, three times to each name: men whose father is living do it with the sacred thread over the left shoulder (savya), those whose father has died with it over the right (apasavya), as the Madhva manual says. Say after acamana and pranayama: मम नरकभयनिरासद्वारा विष्णुप्रीत्यर्थं यमतर्पणं करिष्ये, then the fourteen names, then the verse, and close with अनेन यमतर्पणेन श्रीविष्णुः प्रीयताम्. In the evening of Naraka chaturdashi and on the amavasya the ulka-dipa is lit for the forefathers with the last verse.",
      noteKn: "ಅಭ್ಯಂಗ ಸ್ನಾನದ ನಂತರ ದಕ್ಷಿಣಾಭಿಮುಖವಾಗಿ ಅಕ್ಷತೆ-ಎಳ್ಳಿನೊಡನೆ ದೇವತೀರ್ಥದಿಂದ ಪ್ರತಿ ನಾಮಕ್ಕೆ ಮೂರು ಬಾರಿ ನೀರು ಬಿಡಿ: ತಂದೆಯಿದ್ದವರು ಸವ್ಯದಿಂದ, ಇಲ್ಲದವರು ಅಪಸವ್ಯದಿಂದ (ಮಾಧ್ವ ಪುಸ್ತಕದಂತೆ). ಆಚಮನ-ಪ್ರಾಣಾಯಾಮದ ನಂತರ \"ಮಮ ನರಕಭಯನಿರಾಸದ್ವಾರಾ ವಿಷ್ಣುಪ್ರೀತ್ಯರ್ಥಂ ಯಮತರ್ಪಣಂ ಕರಿಷ್ಯೇ\" ಎಂದು ಸಂಕಲ್ಪಿಸಿ, ಹದಿನಾಲ್ಕು ನಾಮಗಳು, ಶ್ಲೋಕ, ಮತ್ತು \"ಅನೇನ ಯಮತರ್ಪಣೇನ ಶ್ರೀವಿಷ್ಣುಃ ಪ್ರೀಯತಾಮ್\" ಎಂದು ಮುಗಿಸಿ. ನರಕಚತುರ್ದಶಿ ಮತ್ತು ಅಮಾವಾಸ್ಯೆಯ ಸಂಜೆ ಪಿತೃಗಳಿಗೆ ಕೊನೆಯ ಶ್ಲೋಕದೊಡನೆ ಉಲ್ಕಾದೀಪ ಹಚ್ಚಿ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "यमं तर्पयामि । धर्मराजं तर्पयामि । मृत्युं तर्पयामि । अन्तकं तर्पयामि ।\nवैवस्वतं तर्पयामि । कालं तर्पयामि । सर्वभूतक्षयं तर्पयामि ।\nऔदुम्बरं तर्पयामि । दध्नं तर्पयामि । नीलं तर्पयामि ।\nपरमेष्ठिनं तर्पयामि । वृकोदरं तर्पयामि ।\nचित्रं तर्पयामि । चित्रगुप्तं तर्पयामि ॥",
          meaning: {
            en: "I satisfy with water Yama, Dharmaraja, Mrityu, Antaka, Vaivasvata, Kala, Sarvabhutakshaya, Audumbara, Dadhna, Nila, Parameshthi, Vrikodara, Chitra and Chitragupta (the fourteen names of Yama).",
            kn: "ಯಮ, ಧರ್ಮರಾಜ, ಮೃತ್ಯು, ಅಂತಕ, ವೈವಸ್ವತ, ಕಾಲ, ಸರ್ವಭೂತಕ್ಷಯ, ಔದುಂಬರ, ದಧ್ನ, ನೀಲ, ಪರಮೇಷ್ಠಿ, ವೃಕೋದರ, ಚಿತ್ರ, ಚಿತ್ರಗುಪ್ತ ಎಂಬ ಯಮನ ಹದಿನಾಲ್ಕು ನಾಮಗಳಿಗೆ ತರ್ಪಣ ಕೊಡುತ್ತೇನೆ.",
          },
        },
        {
          text: "यमो निहन्ता पितृधर्मराजो वैवस्वतो दण्डधरश्च कालः ।\nभूताधिपो दत्तकृतानुसारी कृतान्तकश्चेति सकृज्जपन्ति ॥",
          meaning: {
            en: "Yama, the ender, lord of the ancestors and of dharma, son of Vivasvan, bearer of the rod, Time, lord of beings, who follows what is given and done, and the maker of the end: those who say these names even once are freed from fear of Yama.",
            kn: "ಯಮ, ನಿಹಂತಾ, ಪಿತೃಧರ್ಮರಾಜ, ವೈವಸ್ವತ, ದಂಡಧರ, ಕಾಲ, ಭೂತಾಧಿಪ, ದತ್ತಕೃತಾನುಸಾರಿ, ಕೃತಾಂತಕ ಎಂಬ ಈ ನಾಮಗಳನ್ನು ಒಮ್ಮೆಯಾದರೂ ಜಪಿಸುವವರು ಯಮಭಯದಿಂದ ಮುಕ್ತರಾಗುತ್ತಾರೆ.",
          },
        },
        {
          text: "अग्निदग्धाश्च ये जीवा येऽप्यदग्धाः कुले मम ।\nउज्ज्वलज्योतिषा वर्त्म प्रपश्यन्तु व्रजन्तु ते ॥\nयमलोकं परित्यज्य आगता ये महालये ।\nउज्ज्वलज्योतिषा दग्धास्ते यान्तु परमां गतिम् ॥",
          meaning: {
            en: "Those in my family who were burnt by fire, and those who were not, let them see the path by this bright light and go. Those who have left the world of Yama and come to the great gathering (Mahalaya), burnt by this bright light, let them reach the highest goal. (Said with the ulka-dipa, to show the way to the ancestors.)",
            kn: "ನನ್ನ ಕುಲದಲ್ಲಿ ಅಗ್ನಿದಗ್ಧರಾದ ಮತ್ತು ದಗ್ಧರಾಗದ ಜೀವಿಗಳು ಈ ಉಜ್ವಲ ಬೆಳಕಿನಿಂದ ದಾರಿ ಕಂಡು ಹೋಗಲಿ. ಯಮಲೋಕವನ್ನು ಬಿಟ್ಟು ಮಹಾಲಯದಲ್ಲಿ ಬಂದವರು ಈ ಉಜ್ವಲ ಜ್ಯೋತಿಯಿಂದ ಪರಮಗತಿಯನ್ನು ಹೊಂದಲಿ. (ಉಲ್ಕಾದೀಪದೊಡನೆ ಪಿತೃಗಳಿಗೆ ದಾರಿ ತೋರಿಸುವ ಶ್ಲೋಕ.)",
          },
        },
      ],
    },
    {
      title: "लक्ष्मीपूजा",
      titleEn: "Lakshmi puja on the amavasya night",
      note: "On the Ashvayuja amavasya, at pradosha or at night, worship Lakshmi with her husband (Madhva: Sri Lakshminarayana with Sri Sukta and Purusha Sukta; Smarta: Mahalakshmi with Sri Sukta), with the sixteen upacharas as in the Shodashopachara Puja, the Lakshmi ashtottara and the lamps. Place a kalasha with a Lakshmi image or silver coins, money and the account books; Kubera is worshipped with Lakshmi. In Smarta practice the Sri Sukta puja begins with the dhyana verses below. Afterwards, light rows of lamps (deepavali) in the house with the lamp verses and keep them lit.",
      noteKn: "ಆಶ್ವಯುಜ ಅಮಾವಾಸ್ಯೆಯಂದು ಪ್ರದೋಷ ಅಥವಾ ರಾತ್ರಿಯಲ್ಲಿ ಲಕ್ಷ್ಮಿಯನ್ನು ಪತಿಯೊಡನೆ ಪೂಜಿಸಿ (ಮಾಧ್ವ: ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣರನ್ನು ಶ್ರೀಸೂಕ್ತ-ಪುರುಷಸೂಕ್ತಗಳಿಂದ; ಸ್ಮಾರ್ತ: ಮಹಾಲಕ್ಷ್ಮಿಯನ್ನು ಶ್ರೀಸೂಕ್ತದಿಂದ), ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ, ಲಕ್ಷ್ಮೀ ಅಷ್ಟೋತ್ತರ ಮತ್ತು ದೀಪಗಳೊಡನೆ. ಲಕ್ಷ್ಮೀ ಪ್ರತಿಮೆ ಅಥವಾ ಬೆಳ್ಳಿ ನಾಣ್ಯ, ಹಣ, ಲೆಕ್ಕದ ಪುಸ್ತಕಗಳೊಡನೆ ಕಲಶವಿಡಿ; ಲಕ್ಷ್ಮಿಯೊಡನೆ ಕುಬೇರನ ಪೂಜೆ. ಸ್ಮಾರ್ತ ಪದ್ಧತಿಯಲ್ಲಿ ಶ್ರೀಸೂಕ್ತ ಪೂಜೆಯು ಕೆಳಗಿನ ಧ್ಯಾನ ಶ್ಲೋಕಗಳಿಂದ ಆರಂಭ. ನಂತರ ದೀಪ ಶ್ಲೋಕಗಳೊಡನೆ ಮನೆಯಲ್ಲಿ ದೀಪಾವಳಿ (ದೀಪಗಳ ಸಾಲು) ಹಚ್ಚಿ.",
      verses: [
        {
          text: "या सा पद्मासनस्था विपुलकटितटी पद्मपत्रायताक्षी\nगम्भीरावर्तनाभिः स्तनभरनमिता शुभ्रवस्त्रोत्तरीया ।\nलक्ष्मीर्दिव्यैर्गजेन्द्रैर्मणिगणखचितैः स्नापिता हेमकुम्भैः\nनित्यं सा पद्महस्ता मम वसतु गृहे सर्वमाङ्गल्ययुक्ता ॥",
          meaning: {
            en: "May she who sits on a lotus, with broad hips and long lotus-petal eyes, with a deep spiral navel, bowed by the weight of her breasts, wearing a white upper cloth, Lakshmi, bathed by divine elephants with golden pots set with gems, ever lotus-handed and endowed with every auspiciousness, dwell always in my house.",
            kn: "ಪದ್ಮಾಸನದಲ್ಲಿ ಕುಳಿತ, ವಿಶಾಲ ಕಟಿಯ, ಕಮಲದಳದಂತಹ ವಿಶಾಲ ಕಣ್ಣುಗಳ, ಆಳವಾದ ಸುಳಿ ನಾಭಿಯ, ಸ್ತನಭಾರದಿಂದ ಬಾಗಿದ, ಬಿಳಿಯ ಉತ್ತರೀಯವನ್ನು ಧರಿಸಿದ, ರತ್ನ ಖಚಿತ ಚಿನ್ನದ ಕಲಶಗಳಿಂದ ದಿವ್ಯ ಗಜೇಂದ್ರರು ಸ್ನಾನ ಮಾಡಿಸಿದ, ಸದಾ ಪದ್ಮಹಸ್ತಳಾದ, ಸರ್ವಮಾಂಗಲ್ಯಯುಕ್ತಳಾದ ಲಕ್ಷ್ಮಿಯು ನನ್ನ ಮನೆಯಲ್ಲಿ ಸದಾ ನೆಲೆಸಲಿ.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "लक्ष्मीं क्षीरसमुद्रराजतनयां श्रीरङ्गधामेश्वरीं\nदासीभूतसमस्तदेववनितां लोकैकदीपाङ्कुराम् ।\nश्रीमन्मन्दकटाक्षलब्धविभवब्रह्मेन्द्रगङ्गाधरां\nत्वां त्रैलोक्यकुटुम्बिनीं सरसिजां वन्दे मुकुन्दप्रियाम् ॥",
          meaning: {
            en: "I bow to you, Lakshmi, daughter of the king of the ocean of milk, mistress of the abode of Sriranga, whom all the divine women serve as maids, the sprout of the one lamp of the world, by whose gracious sidelong glance Brahma, Indra and Gangadhara gained their splendour, the mother of the three worlds, born of the lotus, beloved of Mukunda.",
            kn: "ಕ್ಷೀರಸಮುದ್ರರಾಜನ ಮಗಳಾದ, ಶ್ರೀರಂಗಧಾಮೇಶ್ವರಿಯಾದ, ಸಮಸ್ತ ದೇವಸ್ತ್ರೀಯರು ದಾಸಿಯರಾದ, ಲೋಕದ ಏಕೈಕ ದೀಪದ ಅಂಕುರದಂತಿರುವ, ಅವಳ ಮಂದ ಕಟಾಕ್ಷದಿಂದ ಬ್ರಹ್ಮ-ಇಂದ್ರ-ಗಂಗಾಧರರು ವೈಭವ ಪಡೆದ, ತ್ರೈಲೋಕ್ಯದ ಕುಟುಂಬಿನಿಯಾದ, ಸರಸಿಜೆಯಾದ, ಮುಕುಂದಪ್ರಿಯೆಯಾದ ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "नमस्ते सर्वदेवानां वरदासि हरिप्रिये ।\nया गतिस्त्वत्प्रपन्नानां सा मे भूयात्त्वदर्चनात् ॥",
          meaning: {
            en: "Salutations to you, beloved of Hari, giver of boons to all the gods; may the goal that those who take refuge in you attain be mine through your worship.",
            kn: "ಹರಿಪ್ರಿಯೆಯೇ, ಸರ್ವದೇವತೆಗಳಿಗೆ ವರ ನೀಡುವವಳೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ನಿನ್ನನ್ನು ಆಶ್ರಯಿಸಿದವರಿಗೆ ದೊರೆಯುವ ಗತಿ ನಿನ್ನ ಅರ್ಚನೆಯಿಂದ ನನಗೆ ದೊರೆಯಲಿ.",
          },
        },
        {
          text: "धनदाय नमस्तुभ्यं निधिपद्माधिपाय च ।\nभवन्तु त्वत्प्रसादान्मे धनधान्यादिसम्पदः ॥",
          meaning: {
            en: "Salutations to you, giver of wealth, lord of the treasures and of the lotus-treasure; by your grace may wealth, grain and all riches be mine. (Prayer to Kubera, said with Lakshmi puja.)",
            kn: "ಧನದನೇ, ನಿಧಿ-ಪದ್ಮಗಳ ಅಧಿಪತಿಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ನಿನ್ನ ಪ್ರಸಾದದಿಂದ ನನಗೆ ಧನ-ಧಾನ್ಯಾದಿ ಸಂಪತ್ತುಗಳು ಲಭಿಸಲಿ. (ಲಕ್ಷ್ಮೀಪೂಜೆಯಲ್ಲಿ ಕುಬೇರ ಪ್ರಾರ್ಥನೆ.)",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "भो दीप ब्रह्मरूपस्त्वमन्धकारनिवारक ।\nइमां मया कृतां पूजां गृह्णंस्तेजः प्रवर्धय ॥\nअग्निर्ज्योतिर्रविर्ज्योतिश्चन्द्रज्योतिस्तथैव च ।\nउत्तमः सर्वतेजस्सु दीपोऽयं प्रतिगृह्यताम् ॥",
          meaning: {
            en: "O lamp, you are the form of Brahman, remover of darkness; accepting this worship I have made, increase my light. Fire is light, the sun is light, the moon is light likewise; let this lamp, the best of all lights, be accepted.",
            kn: "ದೀಪವೇ, ನೀನು ಬ್ರಹ್ಮರೂಪ, ಅಂಧಕಾರ ನಿವಾರಕ; ನಾನು ಮಾಡಿದ ಈ ಪೂಜೆಯನ್ನು ಸ್ವೀಕರಿಸಿ ನನ್ನಲ್ಲಿ ತೇಜಸ್ಸನ್ನು ವೃದ್ಧಿಸು. ಅಗ್ನಿ ಜ್ಯೋತಿ, ರವಿ ಜ್ಯೋತಿ, ಚಂದ್ರ ಜ್ಯೋತಿ ಹಾಗೆಯೇ; ಎಲ್ಲ ತೇಜಸ್ಸುಗಳಲ್ಲಿ ಉತ್ತಮವಾದ ಈ ದೀಪವನ್ನು ಸ್ವೀಕರಿಸಲಿ.",
          },
        },
        {
          text: "दीपावलीं मया दत्तां गृहाण जगदीश्वर ।\nआरार्तिकप्रदानेन ज्ञानदृष्टिप्रदो भव ॥",
          meaning: {
            en: "O lord of the world, accept this row of lamps that I give; by this offering of arati, grant me the eye of knowledge.",
            kn: "ಜಗದೀಶ್ವರನೇ, ನಾನು ಕೊಡುವ ದೀಪಾವಳಿಯನ್ನು ಸ್ವೀಕರಿಸು; ಈ ಆರತಿ ಸಮರ್ಪಣೆಯಿಂದ ಜ್ಞಾನದೃಷ್ಟಿಯನ್ನು ಕೊಡು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "दीपावलीं मया दत्तां गृहाण त्वं सुरेश्वरि ।\nआरार्तिकप्रदानेन ज्ञानदृष्टिप्रदा भव ॥",
          meaning: {
            en: "O queen of the gods, accept this row of lamps that I give; by this offering of arati, grant me the eye of knowledge.",
            kn: "ಸುರೇಶ್ವರಿಯೇ, ನಾನು ಕೊಡುವ ದೀಪಾವಳಿಯನ್ನು ಸ್ವೀಕರಿಸು; ಈ ಆರತಿ ಸಮರ್ಪಣೆಯಿಂದ ಜ್ಞಾನದೃಷ್ಟಿಯನ್ನು ಕೊಡು.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
      ],
    },
    {
      title: "बलीन्द्रपूजा",
      titleEn: "Bali puja (Kartika shukla pratipada)",
      note: "On Kartika shukla pratipada, the day Vamana humbled Bali and sent him to Patala, men take the oil bath and women do arati; Pandava figures of cow-dung (five lumps) are worshipped in some homes. In the Madhva manner (VM) draw a twelve-petalled lotus with white rangoli, draw the figure of Balindra inside it, and worship Vamana, Hari dwelling within Bali and the guru, with sixteen upacharas after the sankalpa for the increase of all prosperity; then pray to Vamana and to Bali with the verses below. Many Smarta families draw the Bali figure and do the same with the name of Bali.",
      noteKn: "ಕಾರ್ತೀಕ ಶುದ್ಧ ಪಾಡ್ಯದಂದು ವಾಮನನು ಬಲಿಯನ್ನು ದಮನಮಾಡಿ ಪಾತಾಳಕ್ಕೆ ಕಳುಹಿಸಿದ ದಿನ; ಗಂಡಸರು ಅಭ್ಯಂಜನ ಮಾಡಿದ ನಂತರ ಹೆಣ್ಣುಮಕ್ಕಳು ಆರತಿ ಮಾಡುತ್ತಾರೆ; ಕೆಲವು ಮನೆಗಳಲ್ಲಿ ಗೋಮಯದಿಂದ ಐದು ಕುಂತಿಗಳನ್ನು (ಪಾಂಡವರು) ಮಾಡಿ ಪೂಜಿಸುತ್ತಾರೆ. ಮಾಧ್ವ ಕ್ರಮ (ವ್ರತಮುಕ್ತಾವಲಿ): ಬಿಳಿ ರಂಗೋಲಿಯಿಂದ ಹನ್ನೆರಡು ದಳದ ಪದ್ಮ ಬರೆದು ಅದರೊಳಗೆ ಬಲೀಂದ್ರನ ಚಿತ್ರ ರಚಿಸಿ, ಸರ್ವ ಸಂಪದಭಿವೃದ್ಧಿಗಾಗಿ ಸಂಕಲ್ಪ ಮಾಡಿ ಬಲೀಂದ್ರ ಮತ್ತು ಗುರುಗಳ ಅಂತರ್ಗತ ವಾಮನನ ಷೋಡಶೋಪಚಾರ ಪೂಜೆ ಮಾಡಿ, ಕೆಳಗಿನ ಶ್ಲೋಕಗಳಿಂದ ವಾಮನನನ್ನೂ ಬಲಿಯನ್ನೂ ಪ್ರಾರ್ಥಿಸಿ. ಅನೇಕ ಸ್ಮಾರ್ತ ಕುಟುಂಬಗಳಲ್ಲಿ ಬಲಿಯ ಚಿತ್ರ ಬರೆದು ಇದೇ ರೀತಿ ಬಲಿಯ ಹೆಸರಿನಲ್ಲಿ ಮಾಡುತ್ತಾರೆ.",
      verses: [
        {
          text: "श्रीभूमिसहितं दिव्यं मुक्ताहारविभूषितम् ।\nनमामि वामनं विष्णुं भुक्तिमुक्तिफलप्रदम् ॥",
          meaning: {
            en: "I bow to Vamana, Vishnu, divine, with Sri and Bhumi, adorned with a pearl necklace, giver of the fruit of enjoyment and liberation.",
            kn: "ಶ್ರೀ-ಭೂದೇವಿಯರೊಡನೆ ಕೂಡಿದ, ದಿವ್ಯನಾದ, ಮುತ್ತಿನ ಹಾರದಿಂದ ಶೋಭಿಸುವ, ಭುಕ್ತಿ-ಮುಕ್ತಿ ಫಲಗಳನ್ನು ಕೊಡುವ ವಾಮನ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "बलिराज नमस्तुभ्यं विरोचनसुत प्रभो ।\nभविष्येन्द्र सुराराते पूजेयं प्रतिगृह्यताम् ॥\nबलिराज नमस्तुभ्यं दैत्यदानववन्दित ।\nइन्द्रशत्रो अमरारातेविष्णुसान्निध्यदो भव ॥",
          meaning: {
            en: "Salutations to you, King Bali, son of Virochana, lord, future Indra, foe of the gods: let this worship be accepted. Salutations to you, King Bali, honoured by daityas and danavas, enemy of Indra, foe of the immortals: be the bestower of the presence of Vishnu.",
            kn: "ಬಲಿರಾಜನೇ, ವಿರೋಚನನ ಮಗನೇ, ಪ್ರಭುವೇ, ಭವಿಷ್ಯದ ಇಂದ್ರನೇ, ಸುರಾರಾತಿಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಈ ಪೂಜೆಯನ್ನು ಸ್ವೀಕರಿಸು. ಬಲಿರಾಜನೇ, ದೈತ್ಯ-ದಾನವರಿಂದ ವಂದಿತನೇ, ಇಂದ್ರಶತ್ರುವೇ, ಅಮರಾರಾತಿಯೇ, ವಿಷ್ಣುವಿನ ಸಾನ್ನಿಧ್ಯವನ್ನು ಕೊಡುವವನಾಗು.",
          },
        },
      ],
    },
  ],
};
