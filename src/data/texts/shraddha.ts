/**
 * Shraddha — the annual (pratyabdika) parvana shraddha, with Mahalaya and the ama / hiranya forms. Guide to follow the rite, which a priest leads.
 * NOT YET PROOFREAD against a printed edition; the Sanskrit is typed from the manuals below, checked against two sources where possible.
 * Sources:
 *  - Madhva: Shraddha Prayoga (Ashvalayana, Rigveda) with pinda pradana (Sri Mahacharya Prakashana, Bangalore) and the Madhva Yajurveda Shraddha Vidhi shared by Sri Abbayyacharya (Setumadhavachar collection); Shraddha Karma, Srinivasa S. Mathada (Kannada, Raghavendra Darshana Kendra, Bangalore); Ashvalayana Shraddha Paddhati, B. Raghavendracharya (Gadag, 1967). archive.org.
 *  - Smarta: Yajusha Shraddha Prayoga, Veda-Brahma V. Venkatesha Shastri (Sringeri, Vidyaganapati Prakashana, 1998); Rigveda Ashvalayana Shraddha Prayoga, S. V. Shyambhat (Kannada, Bangalore). archive.org.
 *  - Ashvalayana Grihya Sutra 4.7 (GRETIL); Rigveda mantras checked against the Rigveda samhita (GRETIL, Aufrecht).
 *  - Mahalaya and ama / hiranya: the same manuals, quoting Dharmasindhu, Shraddha-manjari and Boudhayana; the sankalpa-shraddha rule (seven parts left out) is in both traditions.
 */
import type { Mantra } from '../types';

export const shraddha: Mantra = {
  id: 'shraddha',
  title: 'श्राद्धम्',
  titleEn: 'Shraddha (annual, Mahalaya, ama and hiranya)',
  category: 'samskara',
  deity: 'The pitrs, and Vishnu (Janardana) within them',
  source: 'Ashvalayana Grihya Sutra 4.7 and the shraddha prayogas of the Madhva and Smarta traditions',
  summary: 'A step-by-step guide to the annual (pratyabdika) shraddha in the parvana form as done in Karnataka — achamana and pavitra, permission, sankalpa with the placeholders explained, inviting the brahmanas, avahana of the Vishvedevas and pitrs, arghya, agnaukarana, the serving and what is recited during the meal, vikira, pinda pradana, svadha vachana, visarjana and the closing — with the Mahalaya paksha shraddha and the ama (uncooked) and hiranya forms. Choose your tradition (Madhva or Smarta) and Veda (Rig or Yajur) at the top; the sankalpa, mantras and practices change accordingly.',
  summaryKn: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಪಾರ್ವಣ ವಿಧಾನದಲ್ಲಿ ಮಾಡುವ ಪ್ರತ್ಯಾಬ್ದಿಕ (ವಾರ್ಷಿಕ) ಶ್ರಾದ್ಧದ ಹಂತಹಂತದ ಮಾರ್ಗದರ್ಶಿ — ಆಚಮನ–ಪವಿತ್ರ, ಅನುಜ್ಞೆ, ಸಂಕಲ್ಪ (ಖಾಲಿ ಸ್ಥಳಗಳ ವಿವರಣೆಯೊಂದಿಗೆ), ಬ್ರಾಹ್ಮಣರಿಗೆ ಕ್ಷಣ, ವಿಶ್ವೇದೇವ–ಪಿತೃ ಆವಾಹನ, ಅರ್ಘ್ಯ, ಅಗ್ನೌಕರಣ, ಬಡಿಸುವಿಕೆ ಮತ್ತು ಊಟದ ಸಮಯದ ಪಠಣ, ವಿಕಿರ, ಪಿಂಡಪ್ರದಾನ, ಸ್ವಧಾವಾಚನ, ವಿಸರ್ಜನ ಮತ್ತು ಸಮಾಪ್ತಿ — ಜೊತೆಗೆ ಮಹಾಲಯ ಪಕ್ಷ ಶ್ರಾದ್ಧ ಹಾಗೂ ಆಮ (ಬೇಯಿಸದ) ಮತ್ತು ಹಿರಣ್ಯ ಶ್ರಾದ್ಧಗಳು. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಸಂಪ್ರದಾಯ (ಮಾಧ್ವ/ಸ್ಮಾರ್ತ) ಮತ್ತು ವೇದ (ಋಗ್/ಯಜುಸ್) ಆರಿಸಿ; ಸಂಕಲ್ಪ, ಮಂತ್ರ, ಪದ್ಧತಿಗಳು ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ಬದಲಾಗುತ್ತವೆ.',
  variants: [
    {
      key: 'tradition',
      title: 'Tradition',
      titleKn: 'ಸಂಪ್ರದಾಯ',
      options: [
        {
          id: 'madhva',
          label: 'Madhva',
          labelKn: 'ಮಾಧ್ವ',
        },
        {
          id: 'smarta',
          label: 'Smarta',
          labelKn: 'ಸ್ಮಾರ್ತ',
        },
      ],
    },
    {
      key: 'veda',
      title: 'Veda',
      titleKn: 'ವೇದ',
      options: [
        {
          id: 'rig',
          label: 'Rigveda (Ashvalayana)',
          labelKn: 'ಋಗ್ವೇದ (ಆಶ್ವಲಾಯನ)',
        },
        {
          id: 'yajus',
          label: 'Yajurveda (Taittiriya)',
          labelKn: 'ಯಜುರ್ವೇದ (ತೈತ್ತಿರೀಯ)',
        },
      ],
    },
  ],
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'Shraddha is normally performed with a priest (purohita), who leads every step; this page is a guide to follow along and understand what is being done and said. It is not a complete prayoga: the long suktas recited by the brahmanas (prayashchitta and purification suktas, the full rakshoghna and abhishravana, the Purusha and Pitru Suktas), the full desha-kala sankalpa, the formal tyaga formulas of the food and dakshina, the aupasana-fire procedure for agnaukarana, the tarpana (see ‘Pitru Tarpana’) and the full Mahalaya pinda order are referred to, not given; what the priest does is said so in the step. Wording differs between manuals and families; follow your priest and family where they differ.',
  sections: [
    {
      title: 'पूर्वाङ्गम्',
      titleEn: 'Before the shraddha',
      note: 'The annual (pratyabdika, pratisamvatsarika) shraddha is done every year on the tithi of the death (by the lunar month in which it fell), in the afternoon (aparahna). In Karnataka both Madhva and Smarta manuals do it in the parvana form: three generations are invoked together (father, grandfather, great-grandfather; or mother, paternal grandmother, great-grandmother), with the Vishvedevas, and two brahmanas are seated — one in the place of the Vishvedevas and one in the place of the pitrs. Some sutras and families do the annual rite as ekoddishta (for the one person only, without Vishvedevas); follow your family. This rite is led by the priest; this page lets you follow and understand it. Bathe, wear a washed dhoti and uttariya, do the day’s sandhyavandane and puja, and keep ready: black sesame (tila), darbha grass, pavitra rings, kurchas (knotted darbha bundles), a kalasha of water, sandal, flowers, tulasi (for Madhvas), and the food cooked for the shraddha. Sprinkle water on yourself and the materials with this verse.',
      noteKn: 'ಪ್ರತ್ಯಾಬ್ದಿಕ (ಪ್ರತಿಸಾಂವತ್ಸರಿಕ) ಶ್ರಾದ್ಧವನ್ನು ಪ್ರತಿವರ್ಷ ಮೃತರಾದ ಚಾಂದ್ರಮಾಸದ ತಿಥಿಯಂದು ಅಪರಾಹ್ಣದಲ್ಲಿ ಮಾಡಬೇಕು. ಕರ್ನಾಟಕದಲ್ಲಿ ಮಾಧ್ವ ಹಾಗೂ ಸ್ಮಾರ್ತ ಪ್ರಯೋಗ ಪುಸ್ತಕಗಳು ಇದನ್ನು ಪಾರ್ವಣ ವಿಧಾನದಲ್ಲಿ ಹೇಳುತ್ತವೆ: ಮೂರು ತಲೆಮಾರುಗಳನ್ನು (ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜ; ಅಥವಾ ತಾಯಿ, ತಂದೆಯ ತಾಯಿ, ಅವರ ಅತ್ತೆ) ವಿಶ್ವೇದೇವರೊಡನೆ ಆವಾಹಿಸಲಾಗುತ್ತದೆ; ವಿಶ್ವೇದೇವ ಸ್ಥಾನಕ್ಕೆ ಒಬ್ಬ, ಪಿತೃಸ್ಥಾನಕ್ಕೆ ಒಬ್ಬ ಬ್ರಾಹ್ಮಣರನ್ನು ಕೂರಿಸಲಾಗುತ್ತದೆ. ಕೆಲವು ಸೂತ್ರಗಳಲ್ಲಿ ಮತ್ತು ಮನೆತನಗಳಲ್ಲಿ ವಾರ್ಷಿಕ ಶ್ರಾದ್ಧವನ್ನು ಏಕೋದ್ದಿಷ್ಟವಾಗಿ (ಆ ಒಬ್ಬರಿಗೆ ಮಾತ್ರ, ವಿಶ್ವೇದೇವರಿಲ್ಲದೆ) ಮಾಡುವ ಪದ್ಧತಿ ಇದೆ; ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿಯನ್ನು ಅನುಸರಿಸಿ. ಈ ಕರ್ಮವನ್ನು ಪುರೋಹಿತರು ನಡೆಸುತ್ತಾರೆ; ಅದನ್ನು ಹಿಂಬಾಲಿಸಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಈ ಪುಟ. ಸ್ನಾನ ಮಾಡಿ, ಮಡಿ ಪಂಚೆ–ಉತ್ತರೀಯ ಧರಿಸಿ, ಸಂಧ್ಯಾವಂದನೆ–ದೇವರ ಪೂಜೆ ಮುಗಿಸಿ, ಕಪ್ಪು ಎಳ್ಳು, ದರ್ಭೆ, ಪವಿತ್ರ, ಕೂರ್ಚ, ನೀರಿನ ಕಲಶ, ಗಂಧ, ಹೂವು, ತುಳಸಿ (ಮಾಧ್ವರಿಗೆ) ಮತ್ತು ಶ್ರಾದ್ಧಕ್ಕೆ ಮಾಡಿದ ಅಡುಗೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಿ. ಈ ಶ್ಲೋಕ ಹೇಳಿ ನಿಮ್ಮ ಮೇಲೂ ಸಾಮಗ್ರಿಗಳ ಮೇಲೂ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ.',
      verses: [
        {
          text: 'अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥',
          meaning: {
            en: 'Whether pure or impure, in whatever state one may be, whoever remembers the lotus-eyed Lord becomes clean within and without.',
            kn: 'ಶುದ್ಧನಾಗಿರಲಿ ಅಶುದ್ಧನಾಗಿರಲಿ, ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದರೂ, ಕಮಲನಯನನಾದ ಶ್ರೀಹರಿಯನ್ನು ಸ್ಮರಿಸುವವನು ಒಳಗೂ ಹೊರಗೂ ಶುದ್ಧನಾಗುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'पवित्रधारणम्',
      titleEn: 'Achamana, the pavitra ring, and the side of the sacred thread',
      note: 'Do achamana, then wear the darbha pavitra on the ring finger of the right hand with this Rigveda mantra (both Madhva manuals and the Smarta Rigveda manual give it; the Madhva Yajurveda manual uses it too), sip water again and do pranayama. Throughout the shraddha the sacred thread is moved: over the right shoulder (prachinavita, apasavya) for everything said or given to the pitrs, and in the normal position (upavita, savya) for the Vishvedevas, achamana, pranayama and the words addressed to Vishnu. The manuals mark every line with savya or apasavya; the priest calls it out. Water and sesame for the pitrs are poured from the side of the thumb (pitru-tirtha); for the Vishvedevas water with barley (yava) from the finger tips.',
      noteKn: 'ಆಚಮನ ಮಾಡಿ, ಈ ಋಗ್ವೇದ ಮಂತ್ರದಿಂದ ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿಗೆ ದರ್ಭೆಯ ಪವಿತ್ರವನ್ನು ಧರಿಸಿ (ಎರಡೂ ಮಾಧ್ವ ಪುಸ್ತಕಗಳೂ ಸ್ಮಾರ್ತ ಋಗ್ವೇದ ಪುಸ್ತಕವೂ ಇದನ್ನೇ ಹೇಳುತ್ತವೆ; ಮಾಧ್ವ ಯಜುರ್ವೇದ ಪುಸ್ತಕವೂ ಇದನ್ನು ಬಳಸುತ್ತದೆ), ಮತ್ತೆ ಆಚಮನ ಮಾಡಿ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ. ಶ್ರಾದ್ಧದುದ್ದಕ್ಕೂ ಜನಿವಾರವನ್ನು ಬದಲಿಸುತ್ತಿರಬೇಕು: ಪಿತೃಗಳಿಗೆ ಹೇಳುವ, ಕೊಡುವ ಎಲ್ಲದಕ್ಕೂ ಬಲಭುಜದ ಮೇಲೆ (ಪ್ರಾಚೀನಾವೀತ, ಅಪಸವ್ಯ); ವಿಶ್ವೇದೇವರಿಗೆ, ಆಚಮನ–ಪ್ರಾಣಾಯಾಮಗಳಿಗೆ ಮತ್ತು ವಿಷ್ಣುವನ್ನು ಕುರಿತ ವಾಕ್ಯಗಳಿಗೆ ಸಾಮಾನ್ಯ ಸ್ಥಿತಿಯಲ್ಲಿ (ಉಪವೀತ, ಸವ್ಯ). ಪುಸ್ತಕಗಳಲ್ಲಿ ಪ್ರತಿ ವಾಕ್ಯಕ್ಕೂ ಸವ್ಯ/ಅಪಸವ್ಯ ಸೂಚಿಸಿರುತ್ತಾರೆ; ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ. ಪಿತೃಗಳಿಗೆ ಎಳ್ಳು–ನೀರನ್ನು ಹೆಬ್ಬೆರಳಿನ ಬದಿಯಿಂದ (ಪಿತೃತೀರ್ಥ), ವಿಶ್ವೇದೇವರಿಗೆ ಯವ–ನೀರನ್ನು ಬೆರಳ ತುದಿಯಿಂದ ಬಿಡಬೇಕು.',
      verses: [
        {
          text: 'पवित्रं ते विततं ब्रह्मणस्पते प्रभुर्गात्राणि पर्येषि विश्वतः ।\nअतप्ततनूर्न तदामो अश्नुते शृतास इद्वहन्तस्तत्समाशत ॥',
          meaning: {
            en: 'O Lord of the sacred word, your purifying strainer is spread out; as master you pervade every limb on all sides. One whose body is not ripened by austerity does not reach it; only those who are ripened, bearing it, attain it. (Rigveda 9.83.1)',
            kn: 'ಓ ಬ್ರಹ್ಮಣಸ್ಪತಿಯೇ, ನಿನ್ನ ಪವಿತ್ರ (ಶುದ್ಧಿಗೊಳಿಸುವ ಜಾಲ) ಎಲ್ಲೆಡೆ ಹರಡಿದೆ; ಒಡೆಯನಾದ ನೀನು ಎಲ್ಲ ಅವಯವಗಳಲ್ಲೂ ವ್ಯಾಪಿಸಿರುವೆ. ತಪಸ್ಸಿನಿಂದ ಪಕ್ವವಾಗದ ದೇಹದವನು ಅದನ್ನು ಪಡೆಯಲಾರ; ಪಕ್ವರಾದವರೇ ಅದನ್ನು ಹೊತ್ತು ಪಡೆಯುತ್ತಾರೆ. (ಋಗ್ವೇದ ೯.೮೩.೧)',
          },
        },
      ],
    },
    {
      title: 'अनुज्ञा',
      titleEn: 'Asking the brahmanas’ permission',
      note: 'With folded hands the karta (the one doing the shraddha) asks the seated brahmanas for permission, in three questions; the words in brackets are their replies. For a mother’s shraddha say मातुः in place of पितुः. These questions are in the Madhva Rigveda and Yajurveda manuals and in the Sringeri Yajurveda manual.',
      noteKn: 'ಶ್ರಾದ್ಧಕರ್ತನು ಕೈಮುಗಿದು ಕುಳಿತಿರುವ ಬ್ರಾಹ್ಮಣರಿಂದ ಮೂರು ಪ್ರಶ್ನೆಗಳ ಮೂಲಕ ಅನುಮತಿ ಕೇಳುತ್ತಾನೆ; ಆವರಣದಲ್ಲಿರುವುದು ಬ್ರಾಹ್ಮಣರ ಉತ್ತರ. ತಾಯಿಯ ಶ್ರಾದ್ಧವಾದರೆ “ಪಿತುಃ” ಬದಲು “ಮಾತುಃ” ಎನ್ನಿ. ಈ ಪ್ರಶ್ನೆಗಳು ಮಾಧ್ವ ಋಗ್ವೇದ–ಯಜುರ್ವೇದ ಪುಸ್ತಕಗಳಲ್ಲೂ ಶೃಂಗೇರಿಯ ಯಜುರ್ವೇದ ಪುಸ್ತಕದಲ್ಲೂ ಇವೆ.',
      verses: [
        {
          text: 'अस्मत्पितुः प्रतिसांवत्सरिकश्राद्धं कर्तुं मम अधिकारसम्पदस्त्विति भवन्तो ब्रुवन्तु ।\n(अधिकारसम्पदस्तु ।)\nकालश्च मुख्यकालोऽस्त्विति भवन्तो ब्रुवन्तु ।\n(कालश्च मुख्यकालोऽस्तु ।)\nपाकादीनां हविर्योग्यतास्त्विति भवन्तो ब्रुवन्तु ।\n(पाकादीनां हविर्योग्यतास्तु ।)',
          meaning: {
            en: 'May you declare that I am fit to perform the annual shraddha of my father. (You are fit.) May you declare that this time is the proper time. (It is the proper time.) May you declare that the cooked food and the other things are fit to be offered. (They are fit.)',
            kn: 'ನನ್ನ ತಂದೆಯ ಪ್ರತಿಸಾಂವತ್ಸರಿಕ ಶ್ರಾದ್ಧವನ್ನು ಮಾಡಲು ನನಗೆ ಅಧಿಕಾರವಿದೆ ಎಂದು ತಾವು ಹೇಳಿರಿ. (ಅಧಿಕಾರವಿದೆ.) ಈ ಕಾಲವು ಮುಖ್ಯಕಾಲವೆಂದು ಹೇಳಿರಿ. (ಮುಖ್ಯಕಾಲವಾಗಿದೆ.) ಅಡುಗೆ ಮೊದಲಾದವು ಹವಿಸ್ಸಿಗೆ ಯೋಗ್ಯವೆಂದು ಹೇಳಿರಿ. (ಯೋಗ್ಯವಾಗಿವೆ.)',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa (Madhva)',
      note: 'Madhva manuals make the sankalpa in the name of the Lord within Mukhyaprana: the three pitrs are worshipped as Vasu, Rudra and Aditya, within whom the Lord dwells as Pradyumna, Sankarshana and Vasudeva, and the Vishvedevas as Aniruddha and Narayana. The first line is said savya, the rest apasavya; release sesame and water at करिष्ये. Say the desha-kala sankalpa first (place, year, month, fortnight, tithi — as in the Sandhyavandane), then this. Placeholders: अमुकगोत्राणाम् — say your gotra (e.g. काश्यपगोत्राणाम्); अमुकशर्मणाम् — say the three names, each with शर्मन् (father, grandfather, great-grandfather, e.g. रामशर्म-कृष्णशर्म-गोविन्दशर्मणाम्). The pitrs are thought of as Vasu, Rudra and Aditya forms (father, grandfather, great-grandfather). For a mother’s shraddha say मातृपितामहीप्रपितामहीनाम् (mother, father’s mother, her mother-in-law), with their names followed by दा or नाम्नी (e.g. लक्ष्मीदा), and मातुः for पितुः.',
      noteKn: 'ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ ಸಂಕಲ್ಪವನ್ನು ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಭಗವಂತನ ಹೆಸರಿನಲ್ಲಿ ಮಾಡಲಾಗುತ್ತದೆ: ಮೂರು ಪಿತೃಗಳನ್ನು ವಸು–ರುದ್ರ–ಆದಿತ್ಯ ರೂಪರೆಂದೂ, ಅವರಲ್ಲಿ ಭಗವಂತನು ಪ್ರದ್ಯುಮ್ನ–ಸಂಕರ್ಷಣ–ವಾಸುದೇವ ರೂಪದಿಂದಿರುವನೆಂದೂ, ವಿಶ್ವೇದೇವರಲ್ಲಿ ಅನಿರುದ್ಧ–ನಾರಾಯಣ ರೂಪದಿಂದಿರುವನೆಂದೂ ಪೂಜಿಸಲಾಗುತ್ತದೆ. ಮೊದಲ ಸಾಲು ಸವ್ಯದಲ್ಲಿ, ಉಳಿದದ್ದು ಅಪಸವ್ಯದಲ್ಲಿ; “ಕರಿಷ್ಯೇ” ಎಂದಾಗ ಎಳ್ಳು–ನೀರು ಬಿಡಿ. ಮೊದಲು ದೇಶಕಾಲ ಸಂಕಲ್ಪವನ್ನು (ಸ್ಥಳ, ಸಂವತ್ಸರ, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ — ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿರುವಂತೆ) ಹೇಳಿ, ನಂತರ ಇದನ್ನು ಹೇಳಿ. “ಅಮುಕಗೋತ್ರಾಣಾಂ” ಎಂಬಲ್ಲಿ ನಿಮ್ಮ ಗೋತ್ರ (ಉದಾ: ಕಾಶ್ಯಪಗೋತ್ರಾಣಾಂ); “ಅಮುಕಶರ್ಮಣಾಂ” ಎಂಬಲ್ಲಿ ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜರ ಹೆಸರುಗಳನ್ನು “ಶರ್ಮ” ಸೇರಿಸಿ ಹೇಳಿ (ಉದಾ: ರಾಮಶರ್ಮ–ಕೃಷ್ಣಶರ್ಮ–ಗೋವಿಂದಶರ್ಮಣಾಂ). ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜರನ್ನು ಕ್ರಮವಾಗಿ ವಸು, ರುದ್ರ, ಆದಿತ್ಯ ರೂಪರೆಂದು ಭಾವಿಸಲಾಗುತ್ತದೆ. ತಾಯಿಯ ಶ್ರಾದ್ಧವಾದರೆ “ಮಾತೃಪಿತಾಮಹೀಪ್ರಪಿತಾಮಹೀನಾಂ” (ತಾಯಿ, ತಂದೆಯ ತಾಯಿ, ಅವರ ಅತ್ತೆ) ಎಂದು, ಅವರ ಹೆಸರುಗಳಿಗೆ “ದಾ” ಅಥವಾ “ನಾಮ್ನೀ” ಸೇರಿಸಿ (ಉದಾ: ಲಕ್ಷ್ಮೀದಾ), “ಪಿತುಃ” ಬದಲು “ಮಾತುಃ” ಎನ್ನಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अद्य पूर्वोच्चरित एवङ्गुणविशेषणविशिष्टायां शुभपुण्यतिथौ\nभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया श्रीविष्णुप्रीत्यर्थम् ।\n(प्राचीनावीती)\nअस्मत्पितृपितामहप्रपितामहानाम् अमुकगोत्राणाम् अमुकशर्मणां\nवसुरुद्रादित्यान्तर्गत भारतीरमणमुख्यप्राणान्तर्गत प्रद्युम्नसङ्कर्षणवासुदेवानां\nप्रतिसांवत्सरिकश्राद्धं सपार्वणं सदैवम् अन्नेन हविषा सद्यः करिष्ये ॥',
          meaning: {
            en: 'Today, on this holy tithi with the qualities named before, moved by Sri Vishnu who dwells in Mukhyaprana, the beloved of Bharati, and for His pleasure: (thread on the right shoulder) I shall now perform, with cooked food as the offering, the annual shraddha in the parvana form, with the Vishvedevas, of my father, grandfather and great-grandfather, of such gotra and such names, who are Vasu, Rudra and Aditya forms, within whom are Pradyumna, Sankarshana and Vasudeva dwelling in Mukhyaprana.',
            kn: 'ಇಂದು, ಮೊದಲು ಹೇಳಿದ ಗುಣಗಳಿಂದ ಕೂಡಿದ ಈ ಪುಣ್ಯತಿಥಿಯಲ್ಲಿ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೀತಿಗಾಗಿ, (ಪ್ರಾಚೀನಾವೀತಿಯಾಗಿ) ಇಂತಹ ಗೋತ್ರದ, ಇಂತಹ ಹೆಸರಿನ, ವಸು–ರುದ್ರ–ಆದಿತ್ಯ ರೂಪರಾದ, ಅವರಲ್ಲಿರುವ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಪ್ರದ್ಯುಮ್ನ–ಸಂಕರ್ಷಣ–ವಾಸುದೇವರುಳ್ಳ ನನ್ನ ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜರ ಪ್ರತಿಸಾಂವತ್ಸರಿಕ ಶ್ರಾದ್ಧವನ್ನು ಪಾರ್ವಣ ವಿಧಾನದಲ್ಲಿ, ವಿಶ್ವೇದೇವಸಹಿತವಾಗಿ, ಅನ್ನರೂಪ ಹವಿಸ್ಸಿನಿಂದ ಈಗಲೇ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa (Smarta)',
      note: 'The Sringeri Yajurveda manual gives the sankalpa in this form; the Smarta Rigveda manual is the same in substance. The Vishvedevas are named with the thread in the normal position (उपवीती), the pitrs with it on the right shoulder. Release sesame and water at करिष्ये. Say the desha-kala sankalpa first (place, year, month, fortnight, tithi — as in the Sandhyavandane), then this. Placeholders: अमुकगोत्राणाम् — say your gotra (e.g. काश्यपगोत्राणाम्); अमुकशर्मणाम् — say the three names, each with शर्मन् (father, grandfather, great-grandfather, e.g. रामशर्म-कृष्णशर्म-गोविन्दशर्मणाम्). The pitrs are thought of as Vasu, Rudra and Aditya forms (father, grandfather, great-grandfather). For a mother’s shraddha say मातृपितामहीप्रपितामहीनाम् (mother, father’s mother, her mother-in-law), with their names followed by दा or नाम्नी (e.g. लक्ष्मीदा), and मातुः for पितुः.',
      noteKn: 'ಶೃಂಗೇರಿಯ ಯಜುರ್ವೇದ ಶ್ರಾದ್ಧ ಪ್ರಯೋಗದಲ್ಲಿ ಸಂಕಲ್ಪ ಹೀಗಿದೆ; ಸ್ಮಾರ್ತ ಋಗ್ವೇದ ಪುಸ್ತಕದಲ್ಲೂ ಸಾರಾಂಶ ಇದೇ. ವಿಶ್ವೇದೇವರ ಹೆಸರನ್ನು ಉಪವೀತಿಯಾಗಿ, ಪಿತೃಗಳ ಹೆಸರನ್ನು ಪ್ರಾಚೀನಾವೀತಿಯಾಗಿ ಹೇಳಬೇಕು. “ಕರಿಷ್ಯೇ” ಎಂದಾಗ ಎಳ್ಳು–ನೀರು ಬಿಡಿ. ಮೊದಲು ದೇಶಕಾಲ ಸಂಕಲ್ಪವನ್ನು (ಸ್ಥಳ, ಸಂವತ್ಸರ, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ — ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿರುವಂತೆ) ಹೇಳಿ, ನಂತರ ಇದನ್ನು ಹೇಳಿ. “ಅಮುಕಗೋತ್ರಾಣಾಂ” ಎಂಬಲ್ಲಿ ನಿಮ್ಮ ಗೋತ್ರ (ಉದಾ: ಕಾಶ್ಯಪಗೋತ್ರಾಣಾಂ); “ಅಮುಕಶರ್ಮಣಾಂ” ಎಂಬಲ್ಲಿ ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜರ ಹೆಸರುಗಳನ್ನು “ಶರ್ಮ” ಸೇರಿಸಿ ಹೇಳಿ (ಉದಾ: ರಾಮಶರ್ಮ–ಕೃಷ್ಣಶರ್ಮ–ಗೋವಿಂದಶರ್ಮಣಾಂ). ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜರನ್ನು ಕ್ರಮವಾಗಿ ವಸು, ರುದ್ರ, ಆದಿತ್ಯ ರೂಪರೆಂದು ಭಾವಿಸಲಾಗುತ್ತದೆ. ತಾಯಿಯ ಶ್ರಾದ್ಧವಾದರೆ “ಮಾತೃಪಿತಾಮಹೀಪ್ರಪಿತಾಮಹೀನಾಂ” (ತಾಯಿ, ತಂದೆಯ ತಾಯಿ, ಅವರ ಅತ್ತೆ) ಎಂದು, ಅವರ ಹೆಸರುಗಳಿಗೆ “ದಾ” ಅಥವಾ “ನಾಮ್ನೀ” ಸೇರಿಸಿ (ಉದಾ: ಲಕ್ಷ್ಮೀದಾ), “ಪಿತುಃ” ಬದಲು “ಮಾತುಃ” ಎನ್ನಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अद्य पूर्वोच्चरित एवङ्गुणविशेषणविशिष्टायाम् अस्यां पुण्यतिथौ\n(प्राचीनावीती) अस्मत्पितुः प्रतिसांवत्सरिकमृताहान्नश्राद्धे\nअस्मत्पितृपितामहप्रपितामहानाम् अमुकगोत्राणाम् अमुकशर्मणां वसुरुद्रादित्यरूपाणाम्\n(उपवीती) पुरूरवार्द्रवसंज्ञकानां विश्वेषां देवानां च\n(प्राचीनावीती) अस्मत्पितुः प्रतिसांवत्सरिकमृताहान्नश्राद्धम् अन्नेन हविषा\nपार्वणविधानेन युष्मदनुज्ञया सदैवं श्राद्धम् अद्य करिष्ये ॥',
          meaning: {
            en: 'Today, on this holy tithi with the qualities named before: (thread on the right shoulder) in the annual death-day shraddha of my father — for my father, grandfather and great-grandfather, of such gotra and such names, in the forms of Vasu, Rudra and Aditya, (thread normal) and for the Vishvedevas named Pururavas and Ardrava — (thread on the right shoulder) I shall today, with your permission, perform my father’s annual shraddha with cooked food as the offering, in the parvana manner, together with the Vishvedevas.',
            kn: 'ಇಂದು, ಮೊದಲು ಹೇಳಿದ ಗುಣಗಳಿಂದ ಕೂಡಿದ ಈ ಪುಣ್ಯತಿಥಿಯಲ್ಲಿ, (ಪ್ರಾಚೀನಾವೀತಿಯಾಗಿ) ನನ್ನ ತಂದೆಯ ಪ್ರತಿಸಾಂವತ್ಸರಿಕ ಮೃತಾಹ ಶ್ರಾದ್ಧದಲ್ಲಿ ಇಂತಹ ಗೋತ್ರದ, ಇಂತಹ ಹೆಸರಿನ, ವಸು–ರುದ್ರ–ಆದಿತ್ಯ ರೂಪರಾದ ನನ್ನ ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜರಿಗೂ, (ಉಪವೀತಿಯಾಗಿ) ಪುರೂರವ–ಆರ್ದ್ರವ ಎಂಬ ಹೆಸರಿನ ವಿಶ್ವೇದೇವರಿಗೂ, (ಪ್ರಾಚೀನಾವೀತಿಯಾಗಿ) ನನ್ನ ತಂದೆಯ ಪ್ರತಿಸಾಂವತ್ಸರಿಕ ಶ್ರಾದ್ಧವನ್ನು ಅನ್ನರೂಪ ಹವಿಸ್ಸಿನಿಂದ, ಪಾರ್ವಣ ವಿಧಾನದಲ್ಲಿ, ನಿಮ್ಮ ಅನುಮತಿಯಿಂದ, ವಿಶ್ವೇದೇವಸಹಿತವಾಗಿ ಇಂದು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'क्षणप्रदानम्',
      titleEn: 'Brahmana varana: inviting the brahmanas into the places',
      note: 'The brahmana who will sit in the place of the Vishvedevas is given water on his hand with a kurcha (thread normal), then the one for the pitrs (thread on the right shoulder), with these words; their replies are in brackets. For the pitrs say अस्मत्पितृपितामहप्रपितामहानां … स्थाने in place of the Vishvedevas’ names. Then the karta asks them to keep the rules of the day with the verse that follows. When no suitable brahmana can be had, the manuals (quoting the Shraddha-manjari) allow darbha brahmanas: kurchas of darbha are placed on the seats and worshipped in their place, and food is given to brahmanas afterwards — or, failing all, grass to a cow; the priest guides this.',
      noteKn: 'ವಿಶ್ವೇದೇವ ಸ್ಥಾನದಲ್ಲಿ ಕೂರುವ ಬ್ರಾಹ್ಮಣರಿಗೆ ಕೂರ್ಚದಿಂದ ಕೈಗೆ ನೀರು ಕೊಟ್ಟು (ಸವ್ಯ), ನಂತರ ಪಿತೃಸ್ಥಾನದವರಿಗೆ (ಅಪಸವ್ಯ) ಈ ವಾಕ್ಯಗಳಿಂದ ಕ್ಷಣ ಕೊಡಬೇಕು; ಆವರಣದಲ್ಲಿರುವುದು ಅವರ ಉತ್ತರ. ಪಿತೃಗಳಿಗಾದರೆ ವಿಶ್ವೇದೇವರ ಹೆಸರಿನ ಬದಲು “ಅಸ್ಮತ್ಪಿತೃಪಿತಾಮಹಪ್ರಪಿತಾಮಹಾನಾಂ … ಸ್ಥಾನೇ” ಎನ್ನಿ. ನಂತರ ಮುಂದಿನ ಶ್ಲೋಕದಿಂದ ಆ ದಿನದ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಲು ಅವರನ್ನು ಪ್ರಾರ್ಥಿಸಬೇಕು. ಯೋಗ್ಯ ಬ್ರಾಹ್ಮಣರು ಸಿಗದಿದ್ದರೆ ದರ್ಭೆಯ ಕೂರ್ಚಗಳನ್ನು ಆಸನಗಳಲ್ಲಿಟ್ಟು ಅವರ ಸ್ಥಾನದಲ್ಲಿ ಪೂಜಿಸಿ (ದರ್ಭಬ್ರಾಹ್ಮಣರು) ಶ್ರಾದ್ಧ ಮಾಡಿ ನಂತರ ಬ್ರಾಹ್ಮಣರಿಗೆ ಅನ್ನದಾನ ಮಾಡಬೇಕೆಂದೂ, ಏನೂ ಆಗದಿದ್ದರೆ ಗೋವಿಗೆ ಗ್ರಾಸ ಕೊಡಬೇಕೆಂದೂ ಪುಸ್ತಕಗಳು (ಶ್ರಾದ್ಧಮಂಜರಿಯನ್ನು ಉಲ್ಲೇಖಿಸಿ) ಹೇಳುತ್ತವೆ; ಪುರೋಹಿತರು ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತಾರೆ.',
      verses: [
        {
          text: 'पुरूरवार्द्रवसंज्ञकानां विश्वेषां देवानां स्थाने आहवनीयार्थे क्षणः क्रियताम् ।\n(ओं तथा ।)\nप्राप्नोतु भवान् ।\n(प्राप्नवानि ।)',
          meaning: {
            en: 'Please accept the invitation to take the place of the Vishvedevas named Pururavas and Ardrava, to be honoured as the receivers of the offering. (Om, so be it.) May you obtain it. (May I obtain it.)',
            kn: 'ಪುರೂರವ–ಆರ್ದ್ರವ ಎಂಬ ವಿಶ್ವೇದೇವರ ಸ್ಥಾನದಲ್ಲಿ ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸುವವರಾಗಿ ಕುಳಿತುಕೊಳ್ಳಲು ಕ್ಷಣ (ಆಹ್ವಾನ) ಸ್ವೀಕರಿಸಿರಿ. (ಹಾಗೆಯೇ ಆಗಲಿ.) ತಾವು ಇದನ್ನು ಪಡೆಯಿರಿ. (ಪಡೆಯುತ್ತೇನೆ.)',
          },
        },
        {
          text: 'अक्रोधनैः शौचपरैः सततं ब्रह्मवादिभिः ।\nभवितव्यं भवद्भिश्च मया च श्राद्धकर्मणि ॥',
          meaning: {
            en: 'In this shraddha both you and I must remain free of anger, devoted to purity, and always speaking of Brahman (the Veda). (Some manuals read brahmacharibhih, “keeping continence”.)',
            kn: 'ಈ ಶ್ರಾದ್ಧಕರ್ಮದಲ್ಲಿ ತಾವೂ ನಾನೂ ಕೋಪವಿಲ್ಲದೆ, ಶುಚಿತ್ವದಲ್ಲಿ ನಿರತರಾಗಿ, ಸದಾ ವೇದ–ಬ್ರಹ್ಮವಿಚಾರದಲ್ಲಿ ತೊಡಗಿರಬೇಕು. (ಕೆಲವು ಪುಸ್ತಕಗಳಲ್ಲಿ “ಬ್ರಹ್ಮಚಾರಿಭಿಃ” — ಬ್ರಹ್ಮಚರ್ಯ ಪಾಲಿಸುತ್ತ — ಎಂಬ ಪಾಠವಿದೆ.)',
          },
        },
      ],
    },
    {
      title: 'पादप्रक्षालनम्',
      titleEn: 'Washing the brahmanas’ feet',
      note: 'Outside the shraddha room two mandalas are drawn: a square one to the north for the Vishvedeva brahmana (thread normal, water with barley) and a round one to the south for the pitr brahmana (thread on the right shoulder, water with sesame). The karta washes their feet with this verse, welcoming them (स्वागतम् — सुस्वागतम्). He then washes his own hands and feet, sips water, and they enter. (Rigveda 10.9.4; also used in the Yajurveda manuals.)',
      noteKn: 'ಶ್ರಾದ್ಧದ ಕೋಣೆಯ ಹೊರಗೆ ಎರಡು ಮಂಡಲಗಳನ್ನು ಬರೆಯಬೇಕು: ಉತ್ತರಕ್ಕೆ ವಿಶ್ವೇದೇವ ಬ್ರಾಹ್ಮಣರಿಗೆ ಚೌಕ ಮಂಡಲ (ಸವ್ಯ, ಯವ–ನೀರು), ದಕ್ಷಿಣಕ್ಕೆ ಪಿತೃ ಬ್ರಾಹ್ಮಣರಿಗೆ ವೃತ್ತಾಕಾರ ಮಂಡಲ (ಅಪಸವ್ಯ, ಎಳ್ಳು–ನೀರು). “ಸ್ವಾಗತಂ — ಸುಸ್ವಾಗತಂ” ಎಂದು ಸ್ವಾಗತಿಸಿ ಈ ಮಂತ್ರದಿಂದ ಅವರ ಪಾದಗಳನ್ನು ತೊಳೆಯಬೇಕು. ನಂತರ ಕರ್ತನು ತನ್ನ ಕೈಕಾಲು ತೊಳೆದು ಆಚಮನ ಮಾಡಿ ಒಳಗೆ ಬರಬೇಕು. (ಋಗ್ವೇದ ೧೦.೯.೪; ಯಜುರ್ವೇದ ಪುಸ್ತಕಗಳಲ್ಲೂ ಇದೇ.)',
      verses: [
        {
          text: 'शं नो देवीरभिष्टय आपो भवन्तु पीतये ।\nशं योरभि स्रवन्तु नः ॥',
          meaning: {
            en: 'May the divine waters be good to us, for our help and for drinking; may they flow to us with health and well-being. (Rigveda 10.9.4)',
            kn: 'ದಿವ್ಯವಾದ ಜಲಗಳು ನಮಗೆ ಸಹಾಯಕ್ಕೂ ಪಾನಕ್ಕೂ ಮಂಗಳಕರವಾಗಲಿ; ನಮ್ಮ ಕಡೆಗೆ ಆರೋಗ್ಯ–ಕ್ಷೇಮಗಳನ್ನು ಹರಿಸಲಿ. (ಋಗ್ವೇದ ೧೦.೯.೪)',
          },
        },
      ],
    },
    {
      title: 'रक्षोघ्नम्',
      titleEn: 'Purifying the place: driving away the asuras',
      note: 'Thread on the right shoulder: the karta takes sesame and scatters it in all directions of the shraddha place with these two mantras, so that nothing hostile may disturb the rite. The second is the first verse of the Pitru Sukta (Rigveda 10.15.1), which opens separately in the library as ‘Pitru Suktam’. Then, thread normal, he thinks of Gaya and of Janardana (Madhva manuals: श्राद्धकाले गयां ध्यात्वा…).',
      noteKn: 'ಅಪಸವ್ಯದಲ್ಲಿ ಎಳ್ಳನ್ನು ತೆಗೆದುಕೊಂಡು ಈ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಶ್ರಾದ್ಧಸ್ಥಳದ ಎಲ್ಲ ದಿಕ್ಕುಗಳಿಗೆ ಎರಚಬೇಕು — ಯಾವ ವಿಘ್ನಕಾರಕ ಶಕ್ತಿಯೂ ಕರ್ಮಕ್ಕೆ ಅಡ್ಡಿಮಾಡದಿರಲೆಂದು. ಎರಡನೆಯದು ಪಿತೃಸೂಕ್ತದ ಮೊದಲ ಋಕ್ಕು (ಋಗ್ವೇದ ೧೦.೧೫.೧); ಪೂರ್ಣ ಸೂಕ್ತವು ‘ಪಿತೃ ಸೂಕ್ತಂ’ ಎಂಬ ಹೆಸರಿನಲ್ಲಿ ಪ್ರತ್ಯೇಕವಾಗಿ ಇದೆ. ನಂತರ ಸವ್ಯದಲ್ಲಿ ಗಯಾಕ್ಷೇತ್ರವನ್ನೂ ಜನಾರ್ದನನನ್ನೂ ಸ್ಮರಿಸಬೇಕು (ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ “ಶ್ರಾದ್ಧಕಾಲೇ ಗಯಾಂ ಧ್ಯಾತ್ವಾ…”).',
      verses: [
        {
          text: 'अपहता असुरा रक्षांसि पिशाचा ये क्षयन्ति पृथिवीमनु ।\nअन्यत्रेतो गच्छन्तु यत्रैषां गतं मनः ॥',
          meaning: {
            en: 'Driven away are the asuras, the rakshasas and the pishachas who dwell upon the earth; let them go from here to wherever their mind has gone.',
            kn: 'ಭೂಮಿಯ ಮೇಲೆ ನೆಲೆಸಿರುವ ಅಸುರರು, ರಾಕ್ಷಸರು, ಪಿಶಾಚರು ಓಡಿಸಲ್ಪಟ್ಟಿದ್ದಾರೆ; ಅವರ ಮನಸ್ಸು ಎಲ್ಲಿಗೆ ಹೋಗಿದೆಯೋ ಅಲ್ಲಿಗೆ, ಇಲ್ಲಿಂದ ಬೇರೆಡೆಗೆ ಹೋಗಲಿ.',
          },
        },
        {
          text: 'उदीरतामवर उत्परास उन्मध्यमाः पितरः सोम्यासः ।\nअसुं य ईयुरवृका ऋतज्ञास्ते नोऽवन्तु पितरो हवेषु ॥',
          meaning: {
            en: 'May the pitrs, worthy of Soma — the lower, the higher and the middle — rise up; those who have gone on to the life beyond, harmless and knowing the right order, may those pitrs protect us when we call them. (Rigveda 10.15.1)',
            kn: 'ಸೋಮಕ್ಕೆ ಅರ್ಹರಾದ ಕೆಳಗಿನ, ಮೇಲಿನ, ನಡುವಿನ ಪಿತೃಗಳು ಮೇಲೇಳಲಿ; ಹಿಂಸೆಯಿಲ್ಲದೆ, ಋತವನ್ನರಿತು ಪರಲೋಕದ ಪ್ರಾಣವನ್ನು ಸೇರಿದ ಆ ಪಿತೃಗಳು ನಾವು ಕರೆದಾಗ ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ. (ಋಗ್ವೇದ ೧೦.೧೫.೧)',
          },
        },
        {
          text: 'श्राद्धकाले गयां ध्यात्वा ध्यात्वा देवं जनार्दनम् ।\nवस्वादींश्च पितॄन्ध्यात्वा ततः श्राद्धं प्रवर्तयेत् ॥',
          meaning: {
            en: 'At the time of shraddha, meditating on Gaya, meditating on the Lord Janardana, and meditating on the pitrs as Vasu and the others, one should then begin the shraddha. (Madhva manuals)',
            kn: 'ಶ್ರಾದ್ಧಕಾಲದಲ್ಲಿ ಗಯಾಕ್ಷೇತ್ರವನ್ನೂ ಜನಾರ್ದನ ದೇವರನ್ನೂ ವಸು ಮೊದಲಾದ ರೂಪಗಳ ಪಿತೃಗಳನ್ನೂ ಧ್ಯಾನಿಸಿ ನಂತರ ಶ್ರಾದ್ಧವನ್ನು ಆರಂಭಿಸಬೇಕು. (ಮಾಧ್ವ ಪುಸ್ತಕಗಳು)',
          },
          when: { tradition: ['madhva'] },
        },
      ],
    },
    {
      title: 'विश्वेदेवावाहनम्',
      titleEn: 'Avahana: inviting the Vishvedevas',
      note: 'Thread normal. The Vishvedeva brahmana is seated facing east on a seat of darbha (इदमासनम् — सुखासनम्), an arghya vessel is prepared with water and barley, and darbha is placed in his hand. The karta asks भवत्सु विश्वान्देवानावाहयिष्ये (“I shall invite the Vishvedevas into you”) — the reply is आवाहय — and invokes them with these verses, scattering barley. (Rigveda 2.41.13 and 6.52.13; the third verse is in both Madhva manuals.)',
      noteKn: 'ಸವ್ಯದಲ್ಲಿ. ವಿಶ್ವೇದೇವ ಬ್ರಾಹ್ಮಣರನ್ನು ದರ್ಭೆಯ ಆಸನದ ಮೇಲೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕೂರಿಸಿ (ಇದಮಾಸನಂ — ಸುಖಾಸನಂ), ನೀರು–ಯವ ತುಂಬಿದ ಅರ್ಘ್ಯಪಾತ್ರೆ ಸಿದ್ಧಪಡಿಸಿ, ಅವರ ಕೈಗೆ ದರ್ಭೆ ಕೊಡಬೇಕು. “ಭವತ್ಸು ವಿಶ್ವಾನ್ದೇವಾನಾವಾಹಯಿಷ್ಯೇ” (ನಿಮ್ಮಲ್ಲಿ ವಿಶ್ವೇದೇವರನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ) ಎಂದು ಕೇಳಿ — ಉತ್ತರ “ಆವಾಹಯ” — ಈ ಮಂತ್ರಗಳಿಂದ ಯವ ಎರಚುತ್ತ ಆವಾಹಿಸಬೇಕು. (ಋಗ್ವೇದ ೨.೪೧.೧೩, ೬.೫೨.೧೩; ಮೂರನೆಯ ಶ್ಲೋಕ ಎರಡೂ ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿದೆ.)',
      verses: [
        {
          text: 'विश्वे देवास आ गत शृणुता म इमं हवम् ।\nएदं बर्हिर्नि षीदत ॥',
          meaning: {
            en: 'O all the gods, come here; hear this call of mine, and sit down on this sacred grass. (Rigveda 2.41.13)',
            kn: 'ಓ ವಿಶ್ವೇದೇವರೇ, ಇಲ್ಲಿಗೆ ಬನ್ನಿ; ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳಿರಿ; ಈ ದರ್ಭಾಸನದ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಿರಿ. (ಋಗ್ವೇದ ೨.೪೧.೧೩)',
          },
        },
        {
          text: 'विश्वे देवाः शृणुतेमं हवं मे ये अन्तरिक्षे य उप द्यवि ष्ठ ।\nये अग्निजिह्वा उत वा यजत्रा आसद्यास्मिन्बर्हिषि मादयध्वम् ॥',
          meaning: {
            en: 'O all the gods, hear this call of mine — you who are in the mid-air and you who are near the heavens; you whose tongue is Agni, worthy of worship: sit on this sacred grass and rejoice. (Rigveda 6.52.13)',
            kn: 'ಓ ವಿಶ್ವೇದೇವರೇ, ಅಂತರಿಕ್ಷದಲ್ಲಿರುವವರೂ ದ್ಯುಲೋಕದ ಬಳಿ ಇರುವವರೂ ಆದ ನೀವು ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳಿರಿ; ಅಗ್ನಿಯೇ ನಾಲಿಗೆಯಾಗಿರುವ ಪೂಜ್ಯರೇ, ಈ ದರ್ಭಾಸನದ ಮೇಲೆ ಕುಳಿತು ಸಂತೋಷಪಡಿರಿ. (ಋಗ್ವೇದ ೬.೫೨.೧೩)',
          },
        },
        {
          text: 'आगच्छन्तु महाभागा विश्वेदेवा महाबलाः ।\nये अत्र विहिताः श्राद्धे सावधाना भवन्तु ते ॥',
          meaning: {
            en: 'May the greatly fortunate, mighty Vishvedevas come; may those who are appointed in this shraddha be attentive. (The brahmana replies “savadhanah smah”, “we are attentive”.)',
            kn: 'ಮಹಾಭಾಗ್ಯಶಾಲಿಗಳೂ ಮಹಾಬಲರೂ ಆದ ವಿಶ್ವೇದೇವರು ಬರಲಿ; ಈ ಶ್ರಾದ್ಧದಲ್ಲಿ ನಿಯಮಿತರಾದವರು ಎಚ್ಚರದಿಂದಿರಲಿ. (ಬ್ರಾಹ್ಮಣರು “ಸಾವಧಾನಾಃ ಸ್ಮಃ” — ಎಚ್ಚರದಿಂದಿದ್ದೇವೆ — ಎನ್ನುತ್ತಾರೆ.)',
          },
        },
      ],
    },
    {
      title: 'पित्रावाहनम्',
      titleEn: 'Avahana: inviting the pitrs',
      note: 'Thread on the right shoulder. The pitr brahmana is seated (facing north in the Madhva Rigveda manual) on darbha laid with the tips to the south, and the arghya vessels are filled with water and sesame. Asking भवत्सु पितृपितामहप्रपितामहानावाहयिष्ये — reply आवाहय — the karta invites the three pitrs, scattering sesame from the head of the brahmana down to his feet. Rigvedis say the first verse in its Rigveda form (10.16.12), Yajurvedis in the Taittiriya form (Samhita 2.6.12); the second verse is said in both.',
      noteKn: 'ಅಪಸವ್ಯದಲ್ಲಿ. ಪಿತೃ ಬ್ರಾಹ್ಮಣರನ್ನು ದಕ್ಷಿಣಾಗ್ರವಾಗಿ ಹಾಸಿದ ದರ್ಭೆಯ ಮೇಲೆ ಕೂರಿಸಿ (ಮಾಧ್ವ ಋಗ್ವೇದ ಪುಸ್ತಕದಲ್ಲಿ ಉತ್ತರಾಭಿಮುಖವಾಗಿ), ಅರ್ಘ್ಯಪಾತ್ರೆಗಳಲ್ಲಿ ನೀರು–ಎಳ್ಳು ತುಂಬಬೇಕು. “ಭವತ್ಸು ಪಿತೃಪಿತಾಮಹಪ್ರಪಿತಾಮಹಾನಾವಾಹಯಿಷ್ಯೇ” ಎಂದು ಕೇಳಿ — ಉತ್ತರ “ಆವಾಹಯ” — ಬ್ರಾಹ್ಮಣರ ತಲೆಯಿಂದ ಪಾದದವರೆಗೆ ಎಳ್ಳು ಎರಚುತ್ತ ಮೂರು ಪಿತೃಗಳನ್ನು ಆವಾಹಿಸಬೇಕು. ಮೊದಲ ಮಂತ್ರವನ್ನು ಋಗ್ವೇದಿಗಳು ಋಗ್ವೇದ ಪಾಠದಲ್ಲಿ (೧೦.೧೬.೧೨), ಯಜುರ್ವೇದಿಗಳು ತೈತ್ತಿರೀಯ ಪಾಠದಲ್ಲಿ (ಸಂಹಿತೆ ೨.೬.೧೨) ಹೇಳುತ್ತಾರೆ; ಎರಡನೆಯದು ಇಬ್ಬರಿಗೂ ಒಂದೇ.',
      verses: [
        {
          text: 'उशन्तस्त्वा नि धीमह्युशन्तः समिधीमहि ।\nउशन्नुशत आ वह पितॄन्हविषे अत्तवे ॥',
          meaning: {
            en: 'Longing for you, O Agni, we set you down; longing, we kindle you. Longing, bring here the longing pitrs to eat the offering. (Rigveda 10.16.12)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಿನ್ನನ್ನು ಬಯಸಿ ನಾವು ಸ್ಥಾಪಿಸುತ್ತೇವೆ, ಬಯಸಿ ಉರಿಸುತ್ತೇವೆ. ಬಯಸುವ ನೀನು ಹವಿಸ್ಸನ್ನು ಉಣ್ಣಲು ಬಯಸುವ ಪಿತೃಗಳನ್ನು ಇಲ್ಲಿಗೆ ಕರೆತಾ. (ಋಗ್ವೇದ ೧೦.೧೬.೧೨)',
          },
          when: { veda: ['rig'] },
        },
        {
          text: 'उशन्तस्त्वा हवामह उशन्तः समिधीमहि ।\nउशन्नुशत आ वह पितॄन्हविषे अत्तवे ॥',
          meaning: {
            en: 'Longing for you, O Agni, we call you; longing, we kindle you. Longing, bring here the longing pitrs to eat the offering. (Taittiriya form of the same verse)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಿನ್ನನ್ನು ಬಯಸಿ ಕರೆಯುತ್ತೇವೆ, ಬಯಸಿ ಉರಿಸುತ್ತೇವೆ. ಬಯಸುವ ನೀನು ಹವಿಸ್ಸನ್ನು ಉಣ್ಣಲು ಬಯಸುವ ಪಿತೃಗಳನ್ನು ಇಲ್ಲಿಗೆ ಕರೆತಾ. (ಇದೇ ಮಂತ್ರದ ತೈತ್ತಿರೀಯ ಪಾಠ)',
          },
          when: { veda: ['yajus'] },
        },
        {
          text: 'आयन्तु नः पितरः सोम्यासोऽग्निष्वात्ताः पथिभिर्देवयानैः ।\nअस्मिन्यज्ञे स्वधया मदन्तोऽधि ब्रुवन्तु तेऽवन्त्वस्मान् ॥',
          meaning: {
            en: 'May our pitrs, worthy of Soma, who were tasted by Agni, come by the paths the gods travel; rejoicing in this rite with svadha, may they bless us and protect us.',
            kn: 'ಸೋಮಕ್ಕೆ ಅರ್ಹರಾದ, ಅಗ್ನಿಯಿಂದ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟ ನಮ್ಮ ಪಿತೃಗಳು ದೇವಯಾನ ಮಾರ್ಗಗಳಿಂದ ಬರಲಿ; ಈ ಯಜ್ಞದಲ್ಲಿ ಸ್ವಧೆಯಿಂದ ಸಂತೋಷಪಡುತ್ತ ನಮ್ಮನ್ನು ಹರಸಲಿ, ರಕ್ಷಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यम्',
      titleEn: 'Arghya: offering water to the Vishvedevas and the pitrs',
      note: 'Into the Vishvedevas’ arghya vessel barley is dropped with the first verse (thread normal); into each of the three pitr vessels sesame with the second (thread on the right shoulder). The water of each vessel is then poured on the brahmana’s hand — for the Vishvedevas with स्वाहा, for each pitr with स्वधा (Madhva: …वसुरूप … प्रद्युम्न इदं ते अर्घ्यं स्वधा; Ashvalayana: पितरिदं तेऽर्घ्यम्, पितामहेदं तेऽर्घ्यम्…) — and pure water after it with the third verse. The first pitr vessel is not moved afterwards (Ashvalayana Grihya Sutra 4.7). Gandha, flowers, tulasi (Madhva), sacred thread, betel and dakshina are then offered to the brahmanas in the same order.',
      noteKn: 'ವಿಶ್ವೇದೇವರ ಅರ್ಘ್ಯಪಾತ್ರೆಗೆ ಮೊದಲ ಶ್ಲೋಕದಿಂದ ಯವವನ್ನೂ (ಸವ್ಯ), ಮೂರು ಪಿತೃಪಾತ್ರೆಗಳಿಗೆ ಎರಡನೆಯ ಮಂತ್ರದಿಂದ ಎಳ್ಳನ್ನೂ (ಅಪಸವ್ಯ) ಹಾಕಬೇಕು. ನಂತರ ಪ್ರತಿ ಪಾತ್ರೆಯ ನೀರನ್ನು ಬ್ರಾಹ್ಮಣರ ಕೈಗೆ ಬಿಡಬೇಕು — ವಿಶ್ವೇದೇವರಿಗೆ “ಸ್ವಾಹಾ”, ಪ್ರತಿ ಪಿತೃವಿಗೂ “ಸ್ವಧಾ” ಎಂದು (ಮಾಧ್ವ: “…ವಸುರೂಪ … ಪ್ರದ್ಯುಮ್ನ ಇದಂ ತೇ ಅರ್ಘ್ಯಂ ಸ್ವಧಾ”; ಆಶ್ವಲಾಯನ: “ಪಿತರಿದಂ ತೇಽರ್ಘ್ಯಂ, ಪಿತಾಮಹೇದಂ ತೇಽರ್ಘ್ಯಂ…”) — ನಂತರ ಮೂರನೆಯ ಮಂತ್ರದಿಂದ ಶುದ್ಧೋದಕ. ಮೊದಲ ಪಿತೃಪಾತ್ರೆಯನ್ನು ನಂತರ ಅಲುಗಿಸಬಾರದು (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೪.೭). ಆಮೇಲೆ ಅದೇ ಕ್ರಮದಲ್ಲಿ ಬ್ರಾಹ್ಮಣರಿಗೆ ಗಂಧ, ಹೂವು, ತುಳಸಿ (ಮಾಧ್ವರಿಗೆ), ಯಜ್ಞೋಪವೀತ, ವೀಳ್ಯ, ದಕ್ಷಿಣೆ ಕೊಡಬೇಕು.',
      verses: [
        {
          text: 'यवोऽसि धान्यराजो वा वारुणो मधुसंयुतः ।\nनिर्णोदः सर्वपापानां पवित्रमृषिभिः स्मृतम् ॥',
          meaning: {
            en: 'You are barley, king of grains, belonging to Varuna, mixed with sweetness; the sages call you the remover of all sins and a purifier.',
            kn: 'ನೀನು ಯವ, ಧಾನ್ಯಗಳ ರಾಜ, ವರುಣನಿಗೆ ಸೇರಿದವನು, ಮಧುರತೆಯಿಂದ ಕೂಡಿದವನು; ಎಲ್ಲ ಪಾಪಗಳನ್ನು ದೂರಮಾಡುವವನೂ ಪವಿತ್ರನೂ ಎಂದು ಋಷಿಗಳು ಹೇಳುತ್ತಾರೆ.',
          },
        },
        {
          text: 'तिलोऽसि सोमदैवत्यो गोसवो देवनिर्मितः ।\nप्रत्नवद्भिः प्रत्तः स्वधया पितॄनिमाँल्लोकान्प्रीणयाहि नः स्वधा नमः ॥',
          meaning: {
            en: 'You are sesame, whose deity is Soma, made by the gods in the Gosava rite; offered with svadha by the ancients, please the pitrs and these worlds for us. Svadha, salutation. (Ashvalayana Grihya Sutra 4.7.10)',
            kn: 'ನೀನು ಎಳ್ಳು, ಸೋಮನೇ ನಿನ್ನ ದೇವತೆ, ಗೋಸವದಲ್ಲಿ ದೇವತೆಗಳಿಂದ ನಿರ್ಮಿತನು; ಪುರಾತನರಿಂದ ಸ್ವಧೆಯೊಡನೆ ಅರ್ಪಿತನಾದ ನೀನು ನಮಗಾಗಿ ಪಿತೃಗಳನ್ನೂ ಈ ಲೋಕಗಳನ್ನೂ ತೃಪ್ತಿಪಡಿಸು. ಸ್ವಧಾ, ನಮಸ್ಕಾರ. (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೪.೭.೧೦)',
          },
        },
        {
          text: 'या दिव्या आपः पयसा सम्बभूवुर्या अन्तरिक्ष उत पार्थिवीर्याः ।\nहिरण्यवर्णा यज्ञियास्ता न आपः शं स्योना भवन्तु ॥',
          meaning: {
            en: 'The heavenly waters that arose with milk, those of the mid-air and those of the earth — golden-coloured, fit for sacrifice — may those waters be kind and gentle to us.',
            kn: 'ಹಾಲಿನೊಡನೆ ಉದಯಿಸಿದ ದಿವ್ಯ ಜಲಗಳು, ಅಂತರಿಕ್ಷದ ಜಲಗಳು, ಭೂಮಿಯ ಜಲಗಳು — ಚಿನ್ನದ ಬಣ್ಣದ, ಯಜ್ಞಕ್ಕೆ ಯೋಗ್ಯವಾದ ಆ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'अग्नौकरणम्',
      titleEn: 'Agnau karana: the offering of food in the fire',
      note: 'Before the meal a portion of the cooked rice with ghee is offered, with permission (अग्नौ करिष्ये — the brahmanas reply कुरुष्व). One who keeps the aupasana fire offers it there; most householders today, who have no fire, offer it into the right hand of the pitr brahmana (pani-homa), as the Ashvalayana Grihya Sutra (4.7) and the manuals allow: “the gods have Agni for their mouth, the pitrs the hand”. Two offerings are made, each followed by इदं न मम (“this is not mine”), and what remains is served on the pitr leaf. Both Madhva manuals and the Smarta Rigveda manual say पितृमते; the Smarta Yajurveda manual (Sringeri, Apastamba) says पितृपीताय. This step belongs to the priest’s guidance.',
      noteKn: 'ಊಟಕ್ಕೆ ಮೊದಲು ತುಪ್ಪ ಸೇರಿಸಿದ ಅನ್ನದ ಒಂದು ಭಾಗವನ್ನು ಅನುಮತಿ ಪಡೆದು (“ಅಗ್ನೌ ಕರಿಷ್ಯೇ” — ಬ್ರಾಹ್ಮಣರು “ಕುರುಷ್ವ”) ಹೋಮ ಮಾಡಬೇಕು. ಔಪಾಸನಾಗ್ನಿ ಇರುವವರು ಅದರಲ್ಲಿ; ಅಗ್ನಿಯಿಲ್ಲದ ಇಂದಿನ ಹೆಚ್ಚಿನ ಗೃಹಸ್ಥರು ಪಿತೃ ಬ್ರಾಹ್ಮಣರ ಬಲಗೈಯಲ್ಲಿ (ಪಾಣಿಹೋಮ) — “ದೇವತೆಗಳಿಗೆ ಅಗ್ನಿಯೇ ಮುಖ, ಪಿತೃಗಳಿಗೆ ಕೈಯೇ ಮುಖ” ಎಂದು ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ (೪.೭) ಮತ್ತು ಪುಸ್ತಕಗಳು ಅನುಮತಿಸುತ್ತವೆ. ಎರಡು ಆಹುತಿಗಳು, ಪ್ರತಿಯೊಂದರ ನಂತರ “ಇದಂ ನ ಮಮ” (ಇದು ನನ್ನದಲ್ಲ); ಉಳಿದದ್ದನ್ನು ಪಿತೃ ಎಲೆಗೆ ಬಡಿಸಬೇಕು. ಎರಡೂ ಮಾಧ್ವ ಪುಸ್ತಕಗಳು ಮತ್ತು ಸ್ಮಾರ್ತ ಋಗ್ವೇದ ಪುಸ್ತಕ “ಪಿತೃಮತೇ”, ಸ್ಮಾರ್ತ ಯಜುರ್ವೇದ ಪುಸ್ತಕ (ಶೃಂಗೇರಿ, ಆಪಸ್ತಂಬ) “ಪಿತೃಪೀತಾಯ” ಎನ್ನುತ್ತವೆ. ಇದು ಪುರೋಹಿತರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ನಡೆಯುವ ಭಾಗ.',
      verses: [
        {
          text: 'सोमाय पितृमते स्वधा नमः ।\nअग्नये कव्यवाहनाय स्वधा नमः ॥',
          meaning: {
            en: 'To Soma, accompanied by the pitrs, svadha, salutation. To Agni, the bearer of the offerings to the pitrs, svadha, salutation.',
            kn: 'ಪಿತೃಗಳೊಡನಿರುವ ಸೋಮನಿಗೆ ಸ್ವಧಾ, ನಮಸ್ಕಾರ. ಪಿತೃಗಳ ಹವಿಸ್ಸನ್ನು (ಕವ್ಯ) ಒಯ್ಯುವ ಅಗ್ನಿಗೆ ಸ್ವಧಾ, ನಮಸ್ಕಾರ.',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'सोमाय पितृमते स्वधा नमः ।\nअग्नये कव्यवाहनाय स्वधा नमः ॥',
          meaning: {
            en: 'To Soma, accompanied by the pitrs, svadha, salutation. To Agni, the bearer of the offerings to the pitrs, svadha, salutation.',
            kn: 'ಪಿತೃಗಳೊಡನಿರುವ ಸೋಮನಿಗೆ ಸ್ವಧಾ, ನಮಸ್ಕಾರ. ಪಿತೃಗಳ ಹವಿಸ್ಸನ್ನು (ಕವ್ಯ) ಒಯ್ಯುವ ಅಗ್ನಿಗೆ ಸ್ವಧಾ, ನಮಸ್ಕಾರ.',
          },
          when: { tradition: ['smarta'], veda: ['rig'] },
        },
        {
          text: 'सोमाय पितृपीताय स्वधा नमः ।\nअग्नये कव्यवाहनाय स्वधा नमः ॥',
          meaning: {
            en: 'To Soma, drunk by the pitrs, svadha, salutation. To Agni, the bearer of the offerings to the pitrs, svadha, salutation.',
            kn: 'ಪಿತೃಗಳು ಪಾನಮಾಡುವ ಸೋಮನಿಗೆ ಸ್ವಧಾ, ನಮಸ್ಕಾರ. ಪಿತೃಗಳ ಹವಿಸ್ಸನ್ನು ಒಯ್ಯುವ ಅಗ್ನಿಗೆ ಸ್ವಧಾ, ನಮಸ್ಕಾರ.',
          },
          when: { tradition: ['smarta'], veda: ['yajus'] },
        },
      ],
    },
    {
      title: 'अन्नदानम्',
      titleEn: 'Serving the meal and giving the food',
      note: 'Leaves are laid — for the Vishvedevas facing east, for the pitrs facing north — and served (all dishes, ghee last, the Vishvedevas first). The food is sprinkled with water (Gayatri). Then, holding the leaf with both hands, the karta says the first mantra over each leaf — ending स्वाहा for the Vishvedevas and स्वधा for the pitrs — and touches the food with the brahmana’s right thumb, saying the Vishnu verse: अतो देवा… with विष्णो हव्यं रक्षस्व for the Vishvedevas (Madhva Rigveda manual), and इदं विष्णुर्विचक्रमे… with विष्णो कव्यं रक्षस्व for the pitrs. The priest then makes the formal gift of the food (Madhva manuals name Gaya and Gadadhara here: “this place is Gaya, the eater is Gadadhara”). Last, the karta invites them to eat at ease with the closing verse.',
      noteKn: 'ಎಲೆಗಳನ್ನು ಹಾಕಬೇಕು — ವಿಶ್ವೇದೇವರಿಗೆ ಪೂರ್ವಾಭಿಮುಖ, ಪಿತೃಗಳಿಗೆ ಉತ್ತರಾಭಿಮುಖ — ವಿಶ್ವೇದೇವರಿಗೆ ಮೊದಲು, ಎಲ್ಲ ಪದಾರ್ಥಗಳನ್ನೂ ಬಡಿಸಿ ಕೊನೆಗೆ ತುಪ್ಪ. ಗಾಯತ್ರಿಯಿಂದ ಅನ್ನವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ, ಎರಡೂ ಕೈಗಳಿಂದ ಎಲೆಯನ್ನು ಹಿಡಿದು ಪ್ರತಿ ಎಲೆಯ ಮೇಲೆ ಮೊದಲ ಮಂತ್ರವನ್ನು ಹೇಳಬೇಕು — ವಿಶ್ವೇದೇವರಿಗೆ “ಸ್ವಾಹಾ”, ಪಿತೃಗಳಿಗೆ “ಸ್ವಧಾ” ಎಂದು ಮುಗಿಸಿ — ಬ್ರಾಹ್ಮಣರ ಬಲ ಹೆಬ್ಬೆರಳಿನಿಂದ ಅನ್ನವನ್ನು ಮುಟ್ಟಿಸಿ ವಿಷ್ಣುಮಂತ್ರ ಹೇಳಬೇಕು: ವಿಶ್ವೇದೇವರಿಗೆ “ಅತೋ ದೇವಾ…” ಮತ್ತು “ವಿಷ್ಣೋ ಹವ್ಯಂ ರಕ್ಷಸ್ವ” (ಮಾಧ್ವ ಋಗ್ವೇದ ಪುಸ್ತಕ), ಪಿತೃಗಳಿಗೆ “ಇದಂ ವಿಷ್ಣುರ್ವಿಚಕ್ರಮೇ…” ಮತ್ತು “ವಿಷ್ಣೋ ಕವ್ಯಂ ರಕ್ಷಸ್ವ”. ನಂತರ ಪುರೋಹಿತರು ಅನ್ನದಾನ ಸಂಕಲ್ಪ ಹೇಳಿಸುತ್ತಾರೆ (ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ “ಈ ಭೂಮಿ ಗಯಾ, ಉಣ್ಣುವವನು ಗದಾಧರ” ಎಂಬ ಭಾವನೆ). ಕೊನೆಗೆ ಕೊನೆಯ ಶ್ಲೋಕದಿಂದ ಸುಖವಾಗಿ ಊಟಮಾಡಲು ಪ್ರಾರ್ಥಿಸಬೇಕು.',
      verses: [
        {
          text: 'पृथिवी ते पात्रं द्यौरपिधानं ब्राह्मणस्य मुखे अमृते अमृतं जुहोमि स्वाहा ॥',
          meaning: {
            en: 'The earth is your vessel, the sky its lid; in the immortal mouth of the brahmana I offer this immortal food. Svaha. (For the pitrs the karta ends with “svadha”.)',
            kn: 'ಭೂಮಿಯೇ ನಿನ್ನ ಪಾತ್ರೆ, ಆಕಾಶವೇ ಅದರ ಮುಚ್ಚಳ; ಬ್ರಾಹ್ಮಣನ ಅಮೃತಮಯ ಮುಖದಲ್ಲಿ ಈ ಅಮೃತವನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ. ಸ್ವಾಹಾ. (ಪಿತೃಗಳಿಗಾದರೆ “ಸ್ವಧಾ” ಎಂದು ಮುಗಿಸಬೇಕು.)',
          },
        },
        {
          text: 'अतो देवा अवन्तु नो यतो विष्णुर्विचक्रमे ।\nपृथिव्याः सप्त धामभिः ॥\nविष्णो हव्यं रक्षस्व ॥',
          meaning: {
            en: 'May the gods protect us from where Vishnu strode out over the earth through its seven regions. (Rigveda 1.22.16.) O Vishnu, guard this offering to the gods.',
            kn: 'ವಿಷ್ಣುವು ಭೂಮಿಯ ಏಳು ಧಾಮಗಳ ಮೂಲಕ ಎಲ್ಲಿಂದ ಹೆಜ್ಜೆಯಿಟ್ಟನೋ ಅಲ್ಲಿಂದ ದೇವತೆಗಳು ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ. (ಋಗ್ವೇದ ೧.೨೨.೧೬.) ಓ ವಿಷ್ಣುವೇ, ಈ ಹವ್ಯವನ್ನು (ದೇವತೆಗಳ ಅನ್ನ) ರಕ್ಷಿಸು.',
          },
        },
        {
          text: 'इदं विष्णुर्वि चक्रमे त्रेधा नि दधे पदम् ।\nसमूढमस्य पांसुरे ॥\nविष्णो कव्यं रक्षस्व ॥',
          meaning: {
            en: 'Vishnu strode over this universe; three times he set down his foot; the world is gathered in the dust of his footprint. (Rigveda 1.22.17.) O Vishnu, guard this offering to the pitrs.',
            kn: 'ವಿಷ್ಣುವು ಈ ವಿಶ್ವವನ್ನು ಹೆಜ್ಜೆಯಿಟ್ಟು ಅಳೆದನು; ಮೂರು ಬಾರಿ ಪಾದವಿಟ್ಟನು; ಅವನ ಹೆಜ್ಜೆಯ ಧೂಳಿನಲ್ಲಿ ಜಗತ್ತು ಅಡಕವಾಗಿದೆ. (ಋಗ್ವೇದ ೧.೨೨.೧೭.) ಓ ವಿಷ್ಣುವೇ, ಈ ಕವ್ಯವನ್ನು (ಪಿತೃಗಳ ಅನ್ನ) ರಕ್ಷಿಸು.',
          },
        },
        {
          text: 'अपेक्षितं याचितव्यं त्याज्यं चैवानपेक्षितम् ।\nउपविश्य सुखेनैव भोक्तव्यं स्वस्थमानसैः ॥',
          meaning: {
            en: 'Ask for whatever you wish, leave what you do not want; seated at ease, with a contented mind, please eat.',
            kn: 'ಬೇಕಾದುದನ್ನು ಕೇಳಿ ಪಡೆಯಿರಿ, ಬೇಡವಾದುದನ್ನು ಬಿಡಿರಿ; ಸುಖವಾಗಿ ಕುಳಿತು ಪ್ರಸನ್ನ ಮನಸ್ಸಿನಿಂದ ಭೋಜನ ಮಾಡಿರಿ.',
          },
        },
      ],
    },
    {
      title: 'भोजनकाले पठनम्',
      titleEn: 'What is recited during the meal',
      note: 'While the brahmanas eat in silence, the karta (or other brahmanas, which is better) recites. All the manuals open with this verse. Rigveda manuals (Madhva and Smarta) then have the rakshoghna sukta (Rigveda 10.87), whose first verse follows, and the Purusha Sukta; the Smarta Rigveda manual adds Pavamana mantras, the Upanishads and the Ganga-avatarana. The Madhva Rigveda manual names, after the rakshoghna, mantras on the pitrs and on Vishnu, and then the Vishnu Sahasranama, the Bhagavad Gita, Madhvacharya’s Sutra-bhashya and the Katha Upanishad; the Madhva Yajurveda manual has the Purusha Sukta and the abhishravana mantras. The Pitru Sukta (Rigveda 10.15) is recited in the annual shraddha (a verse in the Madhva manual excludes it only from the daily, new-death, monthly and sapindikarana shraddhas). The manuals consulted do not list the Vayu Stuti here; some families add it — follow your family. Purusha Sukta, Pitru Suktam, Vishnu Sahasranama, the Gita and Vayu Stuti open separately in the library.',
      noteKn: 'ಬ್ರಾಹ್ಮಣರು ಮೌನವಾಗಿ ಊಟಮಾಡುವಾಗ ಕರ್ತನು (ಅಥವಾ ಬೇರೆ ಬ್ರಾಹ್ಮಣರು — ಅದು ಉತ್ತಮ) ಪಠಿಸುತ್ತಾರೆ. ಎಲ್ಲ ಪುಸ್ತಕಗಳೂ ಈ ಶ್ಲೋಕದಿಂದ ಆರಂಭಿಸುತ್ತವೆ. ಋಗ್ವೇದ ಪುಸ್ತಕಗಳಲ್ಲಿ (ಮಾಧ್ವ, ಸ್ಮಾರ್ತ) ನಂತರ ರಕ್ಷೋಘ್ನ ಸೂಕ್ತ (ಋಗ್ವೇದ ೧೦.೮೭; ಅದರ ಮೊದಲ ಋಕ್ಕು ಕೆಳಗಿದೆ) ಮತ್ತು ಪುರುಷಸೂಕ್ತ; ಸ್ಮಾರ್ತ ಋಗ್ವೇದ ಪುಸ್ತಕವು ಪವಮಾನ ಮಂತ್ರಗಳು, ಉಪನಿಷತ್ತುಗಳು, ಗಂಗಾವತರಣಗಳನ್ನೂ ಹೇಳುತ್ತದೆ. ಮಾಧ್ವ ಋಗ್ವೇದ ಪುಸ್ತಕವು ರಕ್ಷೋಘ್ನದ ನಂತರ ಪಿತೃಸಂಬಂಧಿ ಮತ್ತು ವಿಷ್ಣುಸಂಬಂಧಿ ಮಂತ್ರಗಳನ್ನು, ಆಮೇಲೆ ವಿಷ್ಣುಸಹಸ್ರನಾಮ, ಭಗವದ್ಗೀತೆ, ಸೂತ್ರಭಾಷ್ಯ, ಕಠೋಪನಿಷತ್ತುಗಳನ್ನು ಹೇಳುತ್ತದೆ; ಮಾಧ್ವ ಯಜುರ್ವೇದ ಪುಸ್ತಕದಲ್ಲಿ ಪುರುಷಸೂಕ್ತ ಮತ್ತು ಅಭಿಶ್ರವಣ ಮಂತ್ರಗಳಿವೆ. ಪಿತೃಸೂಕ್ತವನ್ನು (ಋಗ್ವೇದ ೧೦.೧೫) ವಾರ್ಷಿಕ ಶ್ರಾದ್ಧದಲ್ಲಿ ಪಠಿಸುತ್ತಾರೆ (ನಿತ್ಯ, ನವ, ಮಾಸಿಕ, ಸಪಿಂಡೀಕರಣ ಶ್ರಾದ್ಧಗಳಲ್ಲಿ ಮಾತ್ರ ಬೇಡವೆಂದು ಮಾಧ್ವ ಪುಸ್ತಕದ ಒಂದು ಶ್ಲೋಕ ಹೇಳುತ್ತದೆ). ನೋಡಿದ ಪುಸ್ತಕಗಳು ಇಲ್ಲಿ ವಾಯುಸ್ತುತಿಯನ್ನು ಹೇಳಿಲ್ಲ; ಕೆಲವು ಮನೆತನಗಳು ಅದನ್ನೂ ಸೇರಿಸುತ್ತವೆ — ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿ ಅನುಸರಿಸಿ. ಪುರುಷಸೂಕ್ತ, ಪಿತೃ ಸೂಕ್ತಂ, ವಿಷ್ಣುಸಹಸ್ರನಾಮ, ಗೀತೆ, ವಾಯುಸ್ತುತಿಗಳು ಗ್ರಂಥಾಲಯದಲ್ಲಿ ಪ್ರತ್ಯೇಕವಾಗಿವೆ.',
      verses: [
        {
          text: 'देवताभ्यः पितृभ्यश्च महायोगिभ्य एव च ।\nनमः स्वधायै स्वाहायै नित्यमेव नमो नमः ॥',
          meaning: {
            en: 'Salutations to the gods, to the pitrs and to the great yogis; to Svadha and to Svaha, salutations always, again and again.',
            kn: 'ದೇವತೆಗಳಿಗೂ ಪಿತೃಗಳಿಗೂ ಮಹಾಯೋಗಿಗಳಿಗೂ ನಮಸ್ಕಾರ; ಸ್ವಧಾದೇವಿಗೂ ಸ್ವಾಹಾದೇವಿಗೂ ಸದಾ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'रक्षोहणं वाजिनमा जिघर्मि मित्रं प्रथिष्ठमुप यामि शर्म ।\nशिशानो अग्निः क्रतुभिः समिद्धः स नो दिवा स रिषः पातु नक्तम् ॥',
          meaning: {
            en: 'I pour ghee on the mighty Agni, slayer of demons; I go to the friend, the widest shelter. Sharpening himself, kindled by our rites, may Agni guard us from harm by day and by night. (Rigveda 10.87.1, the first verse of the rakshoghna sukta)',
            kn: 'ರಾಕ್ಷಸರನ್ನು ಕೊಲ್ಲುವ ಬಲಶಾಲಿ ಅಗ್ನಿಗೆ ತುಪ್ಪವನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ; ಮಿತ್ರನೂ ವಿಶಾಲ ಆಶ್ರಯನೂ ಆದ ಅವನನ್ನು ಶರಣು ಹೋಗುತ್ತೇನೆ. ಕರ್ಮಗಳಿಂದ ಉರಿಸಲ್ಪಟ್ಟು ತೀಕ್ಷ್ಣನಾದ ಅಗ್ನಿಯು ಹಗಲೂ ರಾತ್ರಿಯೂ ನಮ್ಮನ್ನು ಹಾನಿಯಿಂದ ಕಾಪಾಡಲಿ. (ಋಗ್ವೇದ ೧೦.೮೭.೧, ರಕ್ಷೋಘ್ನ ಸೂಕ್ತದ ಮೊದಲ ಋಕ್ಕು)',
          },
          when: { veda: ['rig'] },
        },
      ],
    },
    {
      title: 'माध्वसम्प्रदाये श्लोकाः',
      titleEn: 'Verses in the Madhva manuals',
      note: 'Both Madhva manuals (Rigveda and Yajurveda) give these verses at this point, after the verse to the gods and pitrs above.',
      noteKn: 'ಎರಡೂ ಮಾಧ್ವ ಪುಸ್ತಕಗಳು (ಋಗ್ವೇದ, ಯಜುರ್ವೇದ) ಮೇಲಿನ ದೇವತಾ–ಪಿತೃ ನಮಸ್ಕಾರ ಶ್ಲೋಕದ ನಂತರ ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳುತ್ತವೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अमूर्तानां च मूर्तानां पितॄणां दीप्ततेजसाम् ।\nनमस्यामि सदा तेषां ध्यायिनां योगचक्षुषाम् ॥',
          meaning: {
            en: 'I always bow to the pitrs, the formless and those with form, of blazing radiance, absorbed in meditation, whose eye is yoga.',
            kn: 'ರೂಪವಿಲ್ಲದ ಮತ್ತು ರೂಪವುಳ್ಳ, ಪ್ರಕಾಶಮಾನ ತೇಜಸ್ಸಿನ, ಧ್ಯಾನನಿರತರಾದ, ಯೋಗದೃಷ್ಟಿಯುಳ್ಳ ಪಿತೃಗಳಿಗೆ ಸದಾ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'चतुर्भिश्च चतुर्भिश्च द्वाभ्यां पञ्चभिरेव च ।\nहूयते च पुनर्द्वाभ्यां स मे विष्णुः प्रसीदतु ॥',
          meaning: {
            en: 'May that Vishnu be gracious to me, who is worshipped with four, with four, with two, with five and again with two (the syllable-counts of the Vedic calls of the sacrifice).',
            kn: 'ನಾಲ್ಕು, ನಾಲ್ಕು, ಎರಡು, ಐದು, ಮತ್ತೆ ಎರಡು (ಯಜ್ಞದ ವೇದ ಘೋಷಗಳ ಅಕ್ಷರಸಂಖ್ಯೆಗಳು) — ಇವುಗಳಿಂದ ಹೋಮಿಸಲ್ಪಡುವ ಆ ವಿಷ್ಣುವು ನನಗೆ ಪ್ರಸನ್ನನಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'तृप्तिप्रश्नः',
      titleEn: 'When the meal is done: the madhu verses and the question of contentment',
      note: 'When the brahmanas have eaten well, the karta recites the madhumati verses (Rigveda 1.90.6–8; the Ashvalayana Grihya Sutra 4.7 prescribes them here) and says मधु मधु मधु. Then he asks whether all was well (सम्पन्नम् — सुसम्पन्नम्) and whether they are satisfied: for the Vishvedevas (thread normal) तृप्ताः स्थ — the reply तृप्ताः स्मः; then the same for the pitrs (thread on the right shoulder). He asks what is to be done with the remaining food (अन्नशेषैः किं क्रियताम् — इष्टैः सह भुज्यताम्, “eat it with your dear ones”).',
      noteKn: 'ಬ್ರಾಹ್ಮಣರು ತೃಪ್ತಿಯಾಗಿ ಊಟಮಾಡಿದ ಮೇಲೆ ಕರ್ತನು ಮಧುಮತೀ ಋಕ್ಕುಗಳನ್ನು (ಋಗ್ವೇದ ೧.೯೦.೬–೮; ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೪.೭ ಇಲ್ಲಿ ಇವನ್ನು ವಿಧಿಸುತ್ತದೆ) ಹೇಳಿ “ಮಧು ಮಧು ಮಧು” ಎನ್ನಬೇಕು. ನಂತರ ಎಲ್ಲ ಸರಿಯಾಯಿತೇ (“ಸಂಪನ್ನಂ” — “ಸುಸಂಪನ್ನಂ”), ತೃಪ್ತರಾದಿರೇ ಎಂದು ಕೇಳಬೇಕು: ವಿಶ್ವೇದೇವರಿಗೆ (ಸವ್ಯ) “ತೃಪ್ತಾಃ ಸ್ಥ” — ಉತ್ತರ “ತೃಪ್ತಾಃ ಸ್ಮಃ”; ನಂತರ ಪಿತೃಗಳಿಗೆ (ಅಪಸವ್ಯ) ಹಾಗೆಯೇ. ಉಳಿದ ಅನ್ನವನ್ನು ಏನು ಮಾಡಬೇಕೆಂದು ಕೇಳಬೇಕು (“ಅನ್ನಶೇಷೈಃ ಕಿಂ ಕ್ರಿಯತಾಂ” — “ಇಷ್ಟೈಃ ಸಹ ಭುಜ್ಯತಾಂ”, ನಿಮ್ಮವರೊಡನೆ ಉಣ್ಣಿರಿ).',
      verses: [
        {
          text: 'मधु वाता ऋतायते मधु क्षरन्ति सिन्धवः । माध्वीर्नः सन्त्वोषधीः ॥\nमधु नक्तमुतोषसो मधुमत्पार्थिवं रजः । मधु द्यौरस्तु नः पिता ॥\nमधुमान्नो वनस्पतिर्मधुमाँ अस्तु सूर्यः । माध्वीर्गावो भवन्तु नः ॥',
          meaning: {
            en: 'For the one who keeps the right order the winds blow sweetness, the rivers flow with sweetness; may the plants be sweet for us. Sweet be the night and the dawns, sweet the dust of the earth; sweet be heaven, our father. Sweet be the tree for us, sweet the sun; may the cows be sweet for us. (Rigveda 1.90.6–8)',
            kn: 'ಋತವನ್ನು ಪಾಲಿಸುವವನಿಗೆ ಗಾಳಿಗಳು ಮಧುರತೆಯನ್ನು ಬೀಸುತ್ತವೆ, ನದಿಗಳು ಮಧುರತೆಯನ್ನು ಹರಿಸುತ್ತವೆ; ಓಷಧಿಗಳು ನಮಗೆ ಮಧುರವಾಗಲಿ. ರಾತ್ರಿಯೂ ಉಷಸ್ಸುಗಳೂ ಮಧುರವಾಗಲಿ, ಭೂಮಿಯ ಧೂಳೂ ಮಧುರವಾಗಲಿ; ನಮ್ಮ ತಂದೆಯಾದ ದ್ಯುಲೋಕವು ಮಧುರವಾಗಲಿ. ವನಸ್ಪತಿಯು ನಮಗೆ ಮಧುರವಾಗಲಿ, ಸೂರ್ಯನು ಮಧುರನಾಗಲಿ; ಗೋವುಗಳು ನಮಗೆ ಮಧುರವಾಗಲಿ. (ಋಗ್ವೇದ ೧.೯೦.೬–೮)',
          },
        },
      ],
    },
    {
      title: 'विकिरः',
      titleEn: 'Vikira: food scattered for the unremembered',
      note: 'A little of the food mixed with water (in the Smarta Yajurveda manual, rice mixed with curd) is scattered on darbha on the ground: near the Vishvedeva leaf with the first verse (thread normal), near the pitr leaf with the second (thread on the right shoulder). It is for those who have no share in the rite — gods who receive no Soma, and members of the family who died without the last rites or were abandoned. Rigveda manuals add a pinda placed between the two leaves for those burnt and not burnt by fire, with Rigveda 10.15.14.',
      noteKn: 'ನೀರು ಬೆರೆಸಿದ ಸ್ವಲ್ಪ ಅನ್ನವನ್ನು (ಸ್ಮಾರ್ತ ಯಜುರ್ವೇದ ಪುಸ್ತಕದಲ್ಲಿ ಮೊಸರನ್ನ) ನೆಲದ ಮೇಲಿನ ದರ್ಭೆಯ ಮೇಲೆ ಎರಚಬೇಕು: ವಿಶ್ವೇದೇವರ ಎಲೆಯ ಬಳಿ ಮೊದಲ ಶ್ಲೋಕದಿಂದ (ಸವ್ಯ), ಪಿತೃ ಎಲೆಯ ಬಳಿ ಎರಡನೆಯದರಿಂದ (ಅಪಸವ್ಯ). ಇದು ಕರ್ಮದಲ್ಲಿ ಪಾಲಿಲ್ಲದವರಿಗೆ — ಸೋಮಭಾಗವಿಲ್ಲದ ದೇವತೆಗಳಿಗೆ, ಸಂಸ್ಕಾರವಿಲ್ಲದೆ ಮೃತರಾದ ಅಥವಾ ತ್ಯಜಿಸಲ್ಪಟ್ಟ ಮನೆತನದವರಿಗೆ. ಋಗ್ವೇದ ಪುಸ್ತಕಗಳು ಎರಡು ಎಲೆಗಳ ನಡುವೆ ಅಗ್ನಿಯಿಂದ ದಹಿಸಲ್ಪಟ್ಟವರಿಗೂ ದಹಿಸಲ್ಪಡದವರಿಗೂ ಋಗ್ವೇದ ೧೦.೧೫.೧೪ರಿಂದ ಒಂದು ಪಿಂಡವನ್ನು ಇಡುತ್ತವೆ.',
      verses: [
        {
          text: 'असोमपाश्च ये देवा यज्ञभागविवर्जिताः ।\nतेषामन्नं प्रदास्यामि विकिरं वैश्वदेविकम् ॥',
          meaning: {
            en: 'For the gods who do not drink Soma and have no share in the sacrifice, I give this food, the vikira of the Vishvedevas.',
            kn: 'ಸೋಮಪಾನ ಮಾಡದ, ಯಜ್ಞಭಾಗವಿಲ್ಲದ ದೇವತೆಗಳಿಗೆ ವಿಶ್ವೇದೇವ ಸಂಬಂಧಿಯಾದ ಈ ವಿಕಿರಾನ್ನವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'असंस्कृतप्रमीता ये त्यागिन्यो याः कुलस्त्रियः ।\nदास्यामि तेभ्यो विकिरमन्नं ताभ्यश्च पैतृकम् ॥',
          meaning: {
            en: 'To those who died without the last rites, and to the women of the family who were abandoned, I give this vikira food of the pitrs.',
            kn: 'ಸಂಸ್ಕಾರವಿಲ್ಲದೆ ಮೃತರಾದವರಿಗೂ, ತ್ಯಜಿಸಲ್ಪಟ್ಟ ಮನೆತನದ ಸ್ತ್ರೀಯರಿಗೂ ಪಿತೃಸಂಬಂಧಿಯಾದ ಈ ವಿಕಿರಾನ್ನವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ये अग्निदग्धा ये अनग्निदग्धा मध्ये दिवः स्वधया मादयन्ते ।\nतेभिः स्वराळसुनीतिमेतां यथावशं तन्वं कल्पयस्व ॥',
          meaning: {
            en: 'Those burnt by fire and those not burnt by fire, who rejoice with svadha in the midst of heaven — with them, O sovereign Agni, shape as you will this body for the life beyond. (Rigveda 10.15.14)',
            kn: 'ಅಗ್ನಿಯಿಂದ ದಹಿಸಲ್ಪಟ್ಟವರೂ ದಹಿಸಲ್ಪಡದವರೂ ದ್ಯುಲೋಕದ ಮಧ್ಯದಲ್ಲಿ ಸ್ವಧೆಯಿಂದ ಸಂತೋಷಪಡುತ್ತಾರೆ; ಅವರೊಡನೆ, ಓ ಸ್ವರಾಟ್ (ಅಗ್ನಿ), ಪರಲೋಕ ಜೀವನಕ್ಕಾಗಿ ಈ ದೇಹವನ್ನು ಇಚ್ಛೆಯಂತೆ ರೂಪಿಸು. (ಋಗ್ವೇದ ೧೦.೧೫.೧೪)',
          },
          when: { veda: ['rig'] },
        },
      ],
    },
    {
      title: 'पिण्डप्रदानम्',
      titleEn: 'Pinda pradana: offering the rice balls',
      note: 'Thread on the right shoulder, with a fresh sankalpa (…तिलोदकपिण्डप्रदानं करिष्ये). South of the dining place the ground is smeared, a line drawn, darbha laid with the tips to the south, and water poured on it for the three pitrs with the first words — Rigvedis शुन्धन्तां, Yajurvedis मार्जयन्तां. Three pindas of the cooked rice (with sesame, ghee, honey, curd as the manuals list) are set on the darbha, the father’s first, with the formula below — said three times, changing पितः to पितामह and प्रपितामह (and वसु to रुद्र and आदित्य; for Madhvas प्रद्युम्न to सङ्कर्षण and वासुदेव). Madhvas add after each: गयायां विष्णुपादादिसमस्तपादेषु दत्तमस्तु (“may it be given at the feet of Vishnu in Gaya”). Pinda pradana is done under the priest’s direction; some families do it after the meal, some during it, as the manuals say.',
      noteKn: 'ಅಪಸವ್ಯದಲ್ಲಿ, ಹೊಸ ಸಂಕಲ್ಪದೊಡನೆ (“…ತಿಲೋದಕಪಿಂಡಪ್ರದಾನಂ ಕರಿಷ್ಯೇ”). ಊಟದ ಸ್ಥಳದ ದಕ್ಷಿಣಕ್ಕೆ ನೆಲವನ್ನು ಸಾರಿಸಿ, ಗೆರೆ ಎಳೆದು, ದಕ್ಷಿಣಾಗ್ರವಾಗಿ ದರ್ಭೆ ಹಾಸಿ, ಮೊದಲ ವಾಕ್ಯಗಳಿಂದ ಮೂರು ಪಿತೃಗಳಿಗೆ ಅದರ ಮೇಲೆ ನೀರು ಬಿಡಬೇಕು — ಋಗ್ವೇದಿಗಳು “ಶುಂಧಂತಾಂ”, ಯಜುರ್ವೇದಿಗಳು “ಮಾರ್ಜಯಂತಾಂ”. ಅನ್ನದಿಂದ (ಪುಸ್ತಕಗಳು ಹೇಳುವಂತೆ ಎಳ್ಳು, ತುಪ್ಪ, ಜೇನು, ಮೊಸರು ಸೇರಿಸಿ) ಮೂರು ಪಿಂಡಗಳನ್ನು ಮಾಡಿ, ಮೊದಲು ತಂದೆಯದು, ಕೆಳಗಿನ ವಾಕ್ಯದಿಂದ ದರ್ಭೆಯ ಮೇಲಿಡಬೇಕು — “ಪಿತಃ” ಬದಲು “ಪಿತಾಮಹ”, “ಪ್ರಪಿತಾಮಹ” (ವಸು ಬದಲು ರುದ್ರ, ಆದಿತ್ಯ; ಮಾಧ್ವರಿಗೆ ಪ್ರದ್ಯುಮ್ನ ಬದಲು ಸಂಕರ್ಷಣ, ವಾಸುದೇವ) ಎಂದು ಮೂರು ಬಾರಿ. ಮಾಧ್ವರು ಪ್ರತಿಯೊಂದರ ನಂತರ “ಗಯಾಯಾಂ ವಿಷ್ಣುಪಾದಾದಿಸಮಸ್ತಪಾದೇಷು ದತ್ತಮಸ್ತು” (ಗಯೆಯ ವಿಷ್ಣುಪಾದಗಳಲ್ಲಿ ಕೊಟ್ಟಂತಾಗಲಿ) ಎನ್ನುತ್ತಾರೆ. ಪಿಂಡಪ್ರದಾನ ಪುರೋಹಿತರ ನಿರ್ದೇಶನದಲ್ಲಿ ನಡೆಯುತ್ತದೆ; ಪುಸ್ತಕಗಳಂತೆ ಕೆಲವರು ಊಟದ ನಂತರ, ಕೆಲವರು ಊಟದ ಸಮಯದಲ್ಲಿ ಮಾಡುತ್ತಾರೆ.',
      verses: [
        {
          text: 'शुन्धन्तां पितरः । शुन्धन्तां पितामहाः । शुन्धन्तां प्रपितामहाः ॥',
          meaning: {
            en: 'May the fathers be purified; may the grandfathers be purified; may the great-grandfathers be purified.',
            kn: 'ಪಿತೃಗಳು ಶುದ್ಧರಾಗಲಿ; ಪಿತಾಮಹರು ಶುದ್ಧರಾಗಲಿ; ಪ್ರಪಿತಾಮಹರು ಶುದ್ಧರಾಗಲಿ.',
          },
          when: { veda: ['rig'] },
        },
        {
          text: 'मार्जयन्तां मम पितरः । मार्जयन्तां मम पितामहाः । मार्जयन्तां मम प्रपितामहाः ॥',
          meaning: {
            en: 'May my fathers wash themselves clean; may my grandfathers wash themselves clean; may my great-grandfathers wash themselves clean.',
            kn: 'ನನ್ನ ಪಿತೃಗಳು ತೊಳೆದು ಶುದ್ಧರಾಗಲಿ; ನನ್ನ ಪಿತಾಮಹರು ತೊಳೆದು ಶುದ್ಧರಾಗಲಿ; ನನ್ನ ಪ್ರಪಿತಾಮಹರು ತೊಳೆದು ಶುದ್ಧರಾಗಲಿ.',
          },
          when: { veda: ['yajus'] },
        },
        {
          text: 'एतत्ते पितः अमुकगोत्र अमुकशर्मन् वसुरूप तदन्तर्गत भारतीरमणमुख्यप्राणान्तर्गत प्रद्युम्न ये च त्वामत्रानु ।\nअस्मत्पित्रे अमुकगोत्राय अमुकशर्मणे वसुरूपाय ये च त्वामनुगच्छन्ति तेभ्यश्चायं पिण्डः तस्मै ते स्वधा नमः ॥',
          meaning: {
            en: 'This is for you, O father of such gotra and such name, in the form of Vasu, within whom is Pradyumna dwelling in Mukhyaprana, and for those who follow you here. To my father, of such gotra and name, in the form of Vasu, and to those who follow him, is this pinda; to you, svadha, salutation. (Madhva manuals)',
            kn: 'ಇಂತಹ ಗೋತ್ರದ ಇಂತಹ ಹೆಸರಿನ, ವಸುರೂಪನಾದ, ನಿನ್ನಲ್ಲಿ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಪ್ರದ್ಯುಮ್ನನಿರುವ ಓ ತಂದೆಯೇ, ಇದು ನಿನಗೆ ಮತ್ತು ಇಲ್ಲಿ ನಿನ್ನನ್ನು ಅನುಸರಿಸುವವರಿಗೆ. ಇಂತಹ ಗೋತ್ರದ ಹೆಸರಿನ ವಸುರೂಪನಾದ ನನ್ನ ತಂದೆಗೂ ಅವನನ್ನು ಅನುಸರಿಸುವವರಿಗೂ ಈ ಪಿಂಡ; ನಿನಗೆ ಸ್ವಧಾ, ನಮಸ್ಕಾರ. (ಮಾಧ್ವ ಪುಸ್ತಕಗಳು)',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'एतत्ते अस्मत्पितः अमुकगोत्र अमुकशर्मन् वसुरूप ये च त्वामत्रानु ।\nअस्मत्पित्रे अमुकगोत्राय अमुकशर्मणे वसुरूपाय ये च त्वामनुगच्छन्ति तेभ्यश्चायं पिण्डः स्वधा नमः ॥',
          meaning: {
            en: 'This is for you, O my father of such gotra and such name, in the form of Vasu, and for those who follow you here. To my father, of such gotra and name, in the form of Vasu, and to those who follow him, is this pinda; svadha, salutation. (Sringeri Yajurveda manual)',
            kn: 'ಇಂತಹ ಗೋತ್ರದ ಇಂತಹ ಹೆಸರಿನ ವಸುರೂಪನಾದ ಓ ನನ್ನ ತಂದೆಯೇ, ಇದು ನಿನಗೆ ಮತ್ತು ಇಲ್ಲಿ ನಿನ್ನನ್ನು ಅನುಸರಿಸುವವರಿಗೆ. ಇಂತಹ ಗೋತ್ರದ ಹೆಸರಿನ ವಸುರೂಪನಾದ ನನ್ನ ತಂದೆಗೂ ಅವನನ್ನು ಅನುಸರಿಸುವವರಿಗೂ ಈ ಪಿಂಡ; ಸ್ವಧಾ, ನಮಸ್ಕಾರ. (ಶೃಂಗೇರಿಯ ಯಜುರ್ವೇದ ಪುಸ್ತಕ)',
          },
          when: { tradition: ['smarta'] },
        },
      ],
    },
    {
      title: 'पिण्डोपस्थानम्',
      titleEn: 'Honouring the pindas',
      note: 'Water and sesame are poured over the pindas, collyrium and a thread (as cloth) are offered (एतद्वः पितरो वासः), and the pindas are worshipped with gandha, flowers, tulasi, incense and lamp. Then the karta bows to the pitrs with folded hands (thread normal for the namaskara in the Madhva manuals) with the first passage, which is in both Madhva manuals and the Sringeri manual, and recalls their minds back to the living with the Rigveda verses that follow. Last, the verse on the pinda at Gaya is said.',
      noteKn: 'ಪಿಂಡಗಳ ಮೇಲೆ ಎಳ್ಳು–ನೀರು ಬಿಟ್ಟು, ಕಾಡಿಗೆ ಮತ್ತು ವಸ್ತ್ರರೂಪವಾಗಿ ನೂಲು (“ಏತದ್ವಃ ಪಿತರೋ ವಾಸಃ”) ಅರ್ಪಿಸಿ, ಗಂಧ, ಹೂವು, ತುಳಸಿ, ಧೂಪ, ದೀಪಗಳಿಂದ ಪಿಂಡಗಳನ್ನು ಪೂಜಿಸಬೇಕು. ನಂತರ ಕೈಮುಗಿದು ಮೊದಲ ಭಾಗದಿಂದ ಪಿತೃಗಳಿಗೆ ನಮಸ್ಕರಿಸಬೇಕು (ಇದು ಎರಡೂ ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲೂ ಶೃಂಗೇರಿ ಪುಸ್ತಕದಲ್ಲೂ ಇದೆ), ಮುಂದಿನ ಋಗ್ವೇದ ಮಂತ್ರಗಳಿಂದ ಅವರ ಮನಸ್ಸನ್ನು ಬದುಕಿರುವವರತ್ತ ಮರಳಿ ಕರೆಯಬೇಕು. ಕೊನೆಗೆ ಗಯೆಯ ಪಿಂಡದ ಶ್ಲೋಕ.',
      verses: [
        {
          text: 'नमो वः पितरो रसाय नमो वः पितरः शुष्माय नमो वः पितरो जीवाय नमो वः पितरः स्वधायै नमो वः पितरो मन्यवे नमो वः पितरो घोराय पितरो नमो वः ॥',
          meaning: {
            en: 'Salutation to you, O pitrs, for your essence; salutation for your strength; salutation for your life; salutation for your svadha; salutation for your fervour; salutation for your awesome power — O pitrs, salutation to you.',
            kn: 'ಓ ಪಿತೃಗಳೇ, ನಿಮ್ಮ ರಸಕ್ಕೆ ನಮಸ್ಕಾರ; ನಿಮ್ಮ ಬಲಕ್ಕೆ ನಮಸ್ಕಾರ; ನಿಮ್ಮ ಜೀವಕ್ಕೆ ನಮಸ್ಕಾರ; ನಿಮ್ಮ ಸ್ವಧೆಗೆ ನಮಸ್ಕಾರ; ನಿಮ್ಮ ಮನ್ಯುವಿಗೆ (ಉತ್ಸಾಹಕ್ಕೆ) ನಮಸ್ಕಾರ; ನಿಮ್ಮ ಘೋರ ಶಕ್ತಿಗೆ ನಮಸ್ಕಾರ — ಓ ಪಿತೃಗಳೇ, ನಿಮಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'मनो न्वा हुवामहे नाराशंसेन सोमेन । पितॄणां च मन्मभिः ॥\nआ त एतु मनः पुनः क्रत्वे दक्षाय जीवसे । ज्योक्च सूर्यं दृशे ॥\nपुनर्नः पितरो मनो ददातु दैव्यो जनः । जीवं व्रातं सचेमहि ॥',
          meaning: {
            en: 'We call back the mind with the Soma praised by men and with the thoughts of the pitrs. May your mind come back, for strength, for skill, for life, to see the sun for long. May the divine folk give us back our mind, O pitrs; may we stay with the company of the living. (Rigveda 10.57.3–5)',
            kn: 'ನರಾಶಂಸ ಸೋಮದಿಂದಲೂ ಪಿತೃಗಳ ಚಿಂತನೆಗಳಿಂದಲೂ ಮನಸ್ಸನ್ನು ಮರಳಿ ಕರೆಯುತ್ತೇವೆ. ಶಕ್ತಿಗಾಗಿ, ದಕ್ಷತೆಗಾಗಿ, ಜೀವನಕ್ಕಾಗಿ, ಬಹುಕಾಲ ಸೂರ್ಯನನ್ನು ನೋಡಲು ನಿನ್ನ ಮನಸ್ಸು ಮರಳಿ ಬರಲಿ. ಓ ಪಿತೃಗಳೇ, ದೈವೀಜನರು ನಮಗೆ ಮನಸ್ಸನ್ನು ಮರಳಿ ಕೊಡಲಿ; ನಾವು ಬದುಕಿರುವವರ ಸಮೂಹದೊಡನೆ ಇರುವಂತಾಗಲಿ. (ಋಗ್ವೇದ ೧೦.೫೭.೩–೫)',
          },
        },
        {
          text: 'शमीपत्रप्रमाणेन पिण्डं दद्याद्गयाशिरे ।\nउद्धरेत्सप्तगोत्राणि कुलमेकोत्तरं शतम् ॥',
          meaning: {
            en: 'One who gives at Gaya-shiras a pinda even the size of a shami leaf lifts up seven gotras and a hundred and one generations of his family.',
            kn: 'ಗಯಾಶಿರದಲ್ಲಿ ಶಮೀಪತ್ರದಷ್ಟು ಗಾತ್ರದ ಪಿಂಡವನ್ನು ಕೊಟ್ಟರೂ ಏಳು ಗೋತ್ರಗಳನ್ನೂ ನೂರೊಂದು ತಲೆಮಾರಿನ ಕುಲವನ್ನೂ ಉದ್ಧರಿಸುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'अक्षय्योदकं स्वधावाचनम्',
      titleEn: 'Akshayyodaka, svadha vachana and dakshina',
      note: 'After the brahmanas have washed their hands and sipped water, water, darbha and barley (Vishvedevas) or sesame (pitrs) are given on their hands with the blessings शिवा आपः सन्तु — सन्तु शिवा आपः, and so on. The karta asks them to declare the food given “inexhaustible” (…अक्षय्या तृप्तिरस्त्विति भवन्तो ब्रुवन्तु — अक्षय्या तृप्तिरस्तु). Then he asks leave to have svadha said, as below — the words in brackets are the brahmanas’ replies (Ashvalayana Grihya Sutra 4.7.30–31; in all the manuals). Dakshina follows: gold for the Vishvedevas and silver for the pitrs in the Madhva manuals, with betel.',
      noteKn: 'ಬ್ರಾಹ್ಮಣರು ಕೈತೊಳೆದು ಆಚಮನ ಮಾಡಿದ ಮೇಲೆ, ಅವರ ಕೈಗೆ ನೀರು, ದರ್ಭೆ, ಯವ (ವಿಶ್ವೇದೇವರಿಗೆ) ಅಥವಾ ಎಳ್ಳು (ಪಿತೃಗಳಿಗೆ) ಕೊಡುತ್ತ “ಶಿವಾ ಆಪಃ ಸಂತು — ಸಂತು ಶಿವಾ ಆಪಃ” ಮೊದಲಾದ ಆಶೀರ್ವಾದ ಪಡೆಯಬೇಕು. ಕೊಟ್ಟ ಅನ್ನವು ಅಕ್ಷಯವಾಗಲೆಂದು ಹೇಳಲು ಕೇಳಬೇಕು (“…ಅಕ್ಷಯ್ಯಾ ತೃಪ್ತಿರಸ್ತ್ವಿತಿ ಭವಂತೋ ಬ್ರುವಂತು” — “ಅಕ್ಷಯ್ಯಾ ತೃಪ್ತಿರಸ್ತು”). ನಂತರ ಕೆಳಗಿನಂತೆ ಸ್ವಧಾವಾಚನಕ್ಕೆ ಅನುಮತಿ ಕೇಳಬೇಕು — ಆವರಣದಲ್ಲಿರುವುದು ಬ್ರಾಹ್ಮಣರ ಉತ್ತರ (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೪.೭.೩೦–೩೧; ಎಲ್ಲ ಪುಸ್ತಕಗಳಲ್ಲೂ ಇದೆ). ನಂತರ ದಕ್ಷಿಣೆ: ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ ವಿಶ್ವೇದೇವರಿಗೆ ಚಿನ್ನ, ಪಿತೃಗಳಿಗೆ ಬೆಳ್ಳಿ, ವೀಳ್ಯದೊಡನೆ.',
      verses: [
        {
          text: 'स्वधां वाचयिष्ये ।\n(वाच्यताम् ।)\nपितृपितामहप्रपितामहेभ्यः स्वधोच्यताम् ।\n(अस्तु स्वधा ।)',
          meaning: {
            en: 'I shall have svadha pronounced. (Let it be pronounced.) Let svadha be said for the father, grandfather and great-grandfather. (Svadha be it.)',
            kn: 'ಸ್ವಧಾವಾಚನ ಮಾಡಿಸುತ್ತೇನೆ. (ಹೇಳಿಸು.) ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜರಿಗೆ ಸ್ವಧೆ ಹೇಳಲ್ಪಡಲಿ. (ಸ್ವಧೆಯಾಗಲಿ.)',
          },
        },
      ],
    },
    {
      title: 'विसर्जनम्',
      titleEn: 'Visarjana: sending the pitrs and the Vishvedevas off, and the blessings',
      note: 'The pindas are moved (उद्वासन) with the verse on Vishnu’s highest step (Rigveda 1.22.20, in the Madhva manuals). The knot of the kurcha is loosened, and with the verse वाजे वाजे (Rigveda 7.38.8; in all the manuals) the brahmanas are touched with darbha and raised from their seats — first the pitr brahmana with उत्तिष्ठत पितरः (thread on the right shoulder), then the Vishvedeva brahmana with अनुगच्छन्तु विश्वेदेवैः सह (“follow, together with the Vishvedevas”). The karta walks with them to the door, and asks for their blessing with the verses that follow; the brahmanas answer with the same verses, changing नः to वः (“may your givers increase…”).',
      noteKn: 'ಪಿಂಡಗಳನ್ನು ವಿಷ್ಣುವಿನ ಪರಮಪದದ ಮಂತ್ರದಿಂದ (ಋಗ್ವೇದ ೧.೨೨.೨೦, ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ) ಉದ್ವಾಸನ ಮಾಡಬೇಕು. ಕೂರ್ಚದ ಗಂಟನ್ನು ಬಿಚ್ಚಿ “ವಾಜೇ ವಾಜೇ” (ಋಗ್ವೇದ ೭.೩೮.೮; ಎಲ್ಲ ಪುಸ್ತಕಗಳಲ್ಲೂ ಇದೆ) ಮಂತ್ರದಿಂದ ದರ್ಭೆಯಿಂದ ಬ್ರಾಹ್ಮಣರನ್ನು ಮುಟ್ಟಿ ಆಸನದಿಂದ ಎಬ್ಬಿಸಬೇಕು — ಮೊದಲು ಪಿತೃ ಬ್ರಾಹ್ಮಣರನ್ನು “ಉತ್ತಿಷ್ಠತ ಪಿತರಃ” ಎಂದು (ಅಪಸವ್ಯ), ನಂತರ ವಿಶ್ವೇದೇವ ಬ್ರಾಹ್ಮಣರನ್ನು “ಅನುಗಚ್ಛಂತು ವಿಶ್ವೇದೇವೈಃ ಸಹ” (ವಿಶ್ವೇದೇವರೊಡನೆ ಹಿಂಬಾಲಿಸಿರಿ) ಎಂದು. ಕರ್ತನು ಅವರೊಡನೆ ಬಾಗಿಲಿನವರೆಗೆ ಹೋಗಿ ಮುಂದಿನ ಶ್ಲೋಕಗಳಿಂದ ಆಶೀರ್ವಾದ ಬೇಡಬೇಕು; ಬ್ರಾಹ್ಮಣರು “ನಃ” ಬದಲು “ವಃ” (ನಿಮ್ಮ ದಾತಾರರು ವೃದ್ಧಿಯಾಗಲಿ…) ಎಂದು ಅದೇ ಶ್ಲೋಕಗಳಿಂದ ಹರಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'तद्विष्णोः परमं पदं सदा पश्यन्ति सूरयः ।\nदिवीव चक्षुराततम् ॥',
          meaning: {
            en: 'The wise always see that highest step of Vishnu, like an eye spread out in the sky. (Rigveda 1.22.20)',
            kn: 'ಜ್ಞಾನಿಗಳು ವಿಷ್ಣುವಿನ ಆ ಪರಮಪದವನ್ನು ಆಕಾಶದಲ್ಲಿ ಹರಡಿದ ಕಣ್ಣಿನಂತೆ ಸದಾ ಕಾಣುತ್ತಾರೆ. (ಋಗ್ವೇದ ೧.೨೨.೨೦)',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'वाजे वाजेऽवत वाजिनो नो धनेषु विप्रा अमृता ऋतज्ञाः ।\nअस्य मध्वः पिबत मादयध्वं तृप्ता यात पथिभिर्देवयानैः ॥',
          meaning: {
            en: 'In every contest help us, O swift ones, in winning riches — you inspired, immortal knowers of the right order. Drink of this sweetness, rejoice, and, satisfied, go by the paths the gods travel. (Rigveda 7.38.8)',
            kn: 'ಓ ವೇಗಶಾಲಿಗಳೇ, ಜ್ಞಾನಿಗಳೇ, ಅಮರರೇ, ಋತವನ್ನರಿತವರೇ, ಪ್ರತಿಯೊಂದು ಪ್ರಯತ್ನದಲ್ಲೂ ಸಂಪತ್ತನ್ನು ಗಳಿಸುವಲ್ಲಿ ನಮ್ಮನ್ನು ರಕ್ಷಿಸಿ. ಈ ಮಧುರವನ್ನು ಪಾನಮಾಡಿ ಸಂತೋಷಪಡಿ, ತೃಪ್ತರಾಗಿ ದೇವಯಾನ ಮಾರ್ಗಗಳಿಂದ ತೆರಳಿರಿ. (ಋಗ್ವೇದ ೭.೩೮.೮)',
          },
        },
        {
          text: 'दातारो नोऽभिवर्धन्तां वेदाः सन्ततिरेव नः ।\nश्रद्धा च नो मा व्यगमद्बहुदेयं च नोऽस्त्विति ॥\nअन्नं च नो बहु भवेदतिथींश्च लभेमहि ।\nयाचितारश्च नः सन्तु मा च याचिष्म कञ्चन ॥',
          meaning: {
            en: 'May the givers in our family increase, and the Vedas, and our descendants; may faith never leave us, and may we have much to give. May we have plenty of food and receive guests; may there be those who ask of us, and may we never have to ask of anyone. (Manusmriti 3.259–260; in the Madhva and Smarta manuals)',
            kn: 'ನಮ್ಮಲ್ಲಿ ದಾತಾರರು, ವೇದಗಳು, ಸಂತತಿ ವೃದ್ಧಿಯಾಗಲಿ; ಶ್ರದ್ಧೆ ನಮ್ಮನ್ನು ಬಿಡದಿರಲಿ; ಕೊಡಲು ನಮಗೆ ಬಹಳವಿರಲಿ. ನಮಗೆ ಅನ್ನ ಸಮೃದ್ಧವಾಗಿರಲಿ, ಅತಿಥಿಗಳು ದೊರೆಯಲಿ; ನಮ್ಮಲ್ಲಿ ಬೇಡುವವರಿರಲಿ, ನಾವು ಯಾರನ್ನೂ ಬೇಡದಂತಾಗಲಿ. (ಮನುಸ್ಮೃತಿ ೩.೨೫೯–೨೬೦; ಮಾಧ್ವ ಹಾಗೂ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ)',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Closing and offering (Madhva)',
      note: 'The Madhva manuals close with the offering of the whole rite to the Lord within the pitrs, the verse यस्य स्मृत्या, the mantrahina verse, removal of the pavitra, and achamana with the three names (अच्युताय नमः, अनन्ताय नमः, गोविन्दाय नमः). The shraddhanga tila-tarpana is done next day, or on the same day after the shraddha if the family does so; it is given in the library as ‘Pitru Tarpana’. Those who have eaten the shraddha meal drink water consecrated with ten Gayatris before the evening sandhya (Shraddha-manjari, quoted in the manuals).',
      noteKn: 'ಮಾಧ್ವ ಪುಸ್ತಕಗಳು ಸಂಪೂರ್ಣ ಕರ್ಮವನ್ನು ಪಿತೃಗಳಲ್ಲಿರುವ ಭಗವಂತನಿಗೆ ಅರ್ಪಿಸುವುದರೊಂದಿಗೆ, “ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ” ಶ್ಲೋಕ, ಮಂತ್ರಹೀನ ಶ್ಲೋಕ, ಪವಿತ್ರ ವಿಸರ್ಜನ, ಅಚ್ಯುತ–ಅನಂತ–ಗೋವಿಂದ ನಾಮಗಳಿಂದ ಆಚಮನಗಳೊಂದಿಗೆ ಮುಗಿಸುತ್ತವೆ. ಶ್ರಾದ್ಧಾಂಗ ತಿಲತರ್ಪಣವನ್ನು ಮರುದಿನ, ಅಥವಾ ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ ಅದೇ ದಿನ ಶ್ರಾದ್ಧದ ನಂತರ ಮಾಡಬೇಕು; ಅದು ಗ್ರಂಥಾಲಯದಲ್ಲಿ ‘ಪಿತೃ ತರ್ಪಣ’ ಎಂದು ಇದೆ. ಶ್ರಾದ್ಧಭೋಜನ ಮಾಡಿದವರು ಸಾಯಂಸಂಧ್ಯೆಗೆ ಮೊದಲು ಹತ್ತು ಗಾಯತ್ರಿಯಿಂದ ಅಭಿಮಂತ್ರಿಸಿದ ನೀರನ್ನು ಕುಡಿಯಬೇಕು (ಪುಸ್ತಕಗಳಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದ ಶ್ರಾದ್ಧಮಂಜರಿ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अनेन पितृयज्ञेन भगवान् पित्रन्तर्गत भारतीरमणमुख्यप्राणान्तर्गत श्रीजनार्दनवासुदेवः प्रीयतां प्रीतो भवतु ।\nश्रीमध्वेशार्पणमस्तु ॥',
          meaning: {
            en: 'By this rite for the pitrs may the Lord Sri Janardana Vasudeva, who dwells in the pitrs within Mukhyaprana, the beloved of Bharati, be pleased. May it be an offering to the Lord of Madhva.',
            kn: 'ಈ ಪಿತೃಯಜ್ಞದಿಂದ ಪಿತೃಗಳಲ್ಲಿರುವ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಜನಾರ್ದನ ವಾಸುದೇವನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಮಧ್ವೇಶನಿಗೆ ಅರ್ಪಣೆಯಾಗಲಿ.',
          },
        },
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपोयज्ञक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'I bow to Achyuta, by remembering whom and saying whose name whatever is lacking in austerity, sacrifice and rites is at once made complete.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸುವುದರಿಂದಲೂ ಯಾರ ನಾಮವನ್ನು ಉಚ್ಚರಿಸುವುದರಿಂದಲೂ ತಪಸ್ಸು, ಯಜ್ಞ, ಕರ್ಮಗಳಲ್ಲಿನ ಕೊರತೆ ತಕ್ಷಣ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'O Lord of Rama, whatever I have done lacking in mantra, in action or in devotion — O God, may it be made complete for me.',
            kn: 'ಓ ರಮಾಪತಿ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿಂದ ನಾನು ಏನು ಮಾಡಿದ್ದೇನೋ, ಓ ದೇವ, ಅದು ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Closing and offering (Smarta)',
      note: 'The Sringeri manual closes with the japa of the three names for the completeness of the shraddha, the verse यस्य स्मृत्या (above, in the Madhva closing, is said by Smartas too), and offering the rite to the Lord (…श्राद्धेन श्रीपरमेश्वरः प्रीयताम्, ओं तत्सत् ब्रह्मार्पणमस्तु). The shraddhanga tila-tarpana is given in the library as ‘Pitru Tarpana’. Those who have eaten the shraddha meal drink water consecrated with ten Gayatris before the evening sandhya (Sringeri manual).',
      noteKn: 'ಶೃಂಗೇರಿ ಪುಸ್ತಕವು ಶ್ರಾದ್ಧದ ಸಾದ್ಗುಣ್ಯಕ್ಕಾಗಿ ನಾಮತ್ರಯ ಜಪ, “ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ” ಶ್ಲೋಕ, ಕರ್ಮಾರ್ಪಣ (“…ಶ್ರಾದ್ಧೇನ ಶ್ರೀಪರಮೇಶ್ವರಃ ಪ್ರೀಯತಾಂ, ಓಂ ತತ್ಸತ್ ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು”) ಇವುಗಳಿಂದ ಮುಗಿಸುತ್ತದೆ. ಶ್ರಾದ್ಧಾಂಗ ತಿಲತರ್ಪಣ ಗ್ರಂಥಾಲಯದಲ್ಲಿ ‘ಪಿತೃ ತರ್ಪಣ’ ಎಂದು ಇದೆ. ಶ್ರಾದ್ಧಭೋಜನ ಮಾಡಿದವರು ಸಾಯಂಸಂಧ್ಯೆಗೆ ಮೊದಲು ಹತ್ತು ಗಾಯತ್ರಿಯಿಂದ ಅಭಿಮಂತ್ರಿಸಿದ ನೀರನ್ನು ಕುಡಿಯಬೇಕು (ಶೃಂಗೇರಿ ಪುಸ್ತಕ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ।\nअच्युतानन्तगोविन्देभ्यो नमः ॥',
          meaning: {
            en: 'Salutation to Achyuta, to Ananta, to Govinda; salutation to Achyuta, Ananta and Govinda. (The japa of the three names, said for the completeness of the rite.)',
            kn: 'ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕಾರ, ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ, ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ; ಅಚ್ಯುತ–ಅನಂತ–ಗೋವಿಂದರಿಗೆ ನಮಸ್ಕಾರ. (ಕರ್ಮದ ಸಾದ್ಗುಣ್ಯಕ್ಕಾಗಿ ನಾಮತ್ರಯ ಜಪ.)',
          },
        },
      ],
    },
    {
      title: 'महालयश्राद्धम्',
      titleEn: 'Mahalaya paksha shraddha',
      note: 'The Mahalaya is the shraddha of the dark fortnight of Bhadrapada (the pitru paksha), done on the tithi of the death, or once (sakrin-mahalaya) on a suitable day of the fortnight. It follows the same steps, with these differences given in the manuals: (1) the Vishvedevas are named Dhuri and Lochana (धूरिलोचनसंज्ञकाः) in place of Pururavas and Ardrava; (2) the sankalpa names the time — कन्यागते सवितरि आषाढ्यादिपञ्चमापरपक्षे (“the sun in Virgo, in the fifth dark fortnight from the Ashadha full moon”) — and the rite as सकृन्महालयश्राद्धम् (or पक्षमहालयश्राद्धम्), said in place of प्रतिसांवत्सरिकश्राद्धम् in your sankalpa above (Madhvas keep the antaryami names); (3) besides the three pitrs on each side, all the relatives named in the verse below are remembered, each with a pinda in the manuals’ order, and dharma-pindas are given for others; the tarpana next day is for all of them. Mothers who died before their husbands are remembered on the Avidhava Navami, and those who died by weapons or accidents on the Chaturdashi (the Madhva manuals). The priest arranges the order of the pindas.',
      noteKn: 'ಮಹಾಲಯವು ಭಾದ್ರಪದ ಕೃಷ್ಣಪಕ್ಷದ (ಪಿತೃಪಕ್ಷದ) ಶ್ರಾದ್ಧ — ಮೃತ ತಿಥಿಯಂದು, ಅಥವಾ ಪಕ್ಷದ ಯೋಗ್ಯ ದಿನದಲ್ಲಿ ಒಮ್ಮೆ (ಸಕೃನ್ಮಹಾಲಯ). ಹಂತಗಳು ಅವೇ; ಪುಸ್ತಕಗಳು ಹೇಳುವ ವ್ಯತ್ಯಾಸಗಳು: (೧) ವಿಶ್ವೇದೇವರು ಪುರೂರವ–ಆರ್ದ್ರವರ ಬದಲು ಧೂರಿ–ಲೋಚನ ಎಂಬ ಹೆಸರಿನವರು (“ಧೂರಿಲೋಚನಸಂಜ್ಞಕಾಃ”); (೨) ಸಂಕಲ್ಪದಲ್ಲಿ ಕಾಲವನ್ನು “ಕನ್ಯಾಗತೇ ಸವಿತರಿ ಆಷಾಢ್ಯಾದಿಪಂಚಮಾಪರಪಕ್ಷೇ” (ಸೂರ್ಯನು ಕನ್ಯಾರಾಶಿಯಲ್ಲಿರುವಾಗ, ಆಷಾಢ ಹುಣ್ಣಿಮೆಯಿಂದ ಐದನೆಯ ಕೃಷ್ಣಪಕ್ಷದಲ್ಲಿ) ಎಂದೂ, ಕರ್ಮವನ್ನು “ಸಕೃನ್ಮಹಾಲಯಶ್ರಾದ್ಧಂ” (ಅಥವಾ “ಪಕ್ಷಮಹಾಲಯಶ್ರಾದ್ಧಂ”) ಎಂದೂ ಮೇಲಿನ ಸಂಕಲ್ಪದಲ್ಲಿ “ಪ್ರತಿಸಾಂವತ್ಸರಿಕಶ್ರಾದ್ಧಂ” ಬದಲು ಹೇಳಬೇಕು (ಮಾಧ್ವರು ಅಂತರ್ಯಾಮಿ ನಾಮಗಳನ್ನು ಹಾಗೆಯೇ ಉಳಿಸುತ್ತಾರೆ); (೩) ಎರಡೂ ಕಡೆಯ ಮೂರು ಪಿತೃಗಳಲ್ಲದೆ ಕೆಳಗಿನ ಶ್ಲೋಕದಲ್ಲಿ ಹೇಳಿದ ಎಲ್ಲ ಬಂಧುಗಳನ್ನೂ ಸ್ಮರಿಸಿ, ಪುಸ್ತಕಗಳ ಕ್ರಮದಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಪಿಂಡ, ಇತರರಿಗೆ ಧರ್ಮಪಿಂಡಗಳನ್ನು ಕೊಡಬೇಕು; ಮರುದಿನದ ತರ್ಪಣವೂ ಅವರೆಲ್ಲರಿಗೆ. ಪತಿಗಿಂತ ಮೊದಲು ಮೃತರಾದ ತಾಯಂದಿರನ್ನು ಅವಿಧವಾ ನವಮಿಯಂದೂ, ಶಸ್ತ್ರ–ಅಪಘಾತಗಳಿಂದ ಮೃತರಾದವರನ್ನು ಚತುರ್ದಶಿಯಂದೂ ಸ್ಮರಿಸಬೇಕು (ಮಾಧ್ವ ಪುಸ್ತಕಗಳು). ಪಿಂಡಗಳ ಕ್ರಮವನ್ನು ಪುರೋಹಿತರು ಏರ್ಪಡಿಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'तातांबात्रितयं सपत्नजननी मातामहादित्रयं\nसस्त्रीस्त्रीतनयादि तातजननीस्वभ्रातरः सस्त्रियः ।\nतातांबात्मभगिन्यपत्यधवयुग्जाया पिता सद्गुरुः\nशिष्याप्ताः पितरो महालयविधौ तीर्थे तथा तर्पणे ॥',
          meaning: {
            en: 'The three on the father’s side and the three on the mother’s, the step-mother, the three on the maternal grandfather’s side with their wives; one’s wife, sons and daughters; the father’s and mother’s brothers with their wives; the sisters of father, mother and oneself, with their husbands and children; the father-in-law; the guru, disciples and dear friends — these are the pitrs in the Mahalaya, at a tirtha and in the tarpana. (In the Madhva and Smarta manuals; the exact list of relatives is read out by the priest.)',
            kn: 'ತಂದೆಯ ಕಡೆಯ ಮೂವರು, ತಾಯಿಯ ಕಡೆಯ ಮೂವರು, ಮಲತಾಯಿ, ತಾಯಿಯ ತಂದೆಯ ಕಡೆಯ ಮೂವರು ಪತ್ನಿಯರೊಡನೆ; ಪತ್ನಿ, ಮಕ್ಕಳು; ತಂದೆ–ತಾಯಿಯರ ಸಹೋದರರು ಪತ್ನಿಯರೊಡನೆ; ತಂದೆ, ತಾಯಿ ಮತ್ತು ತನ್ನ ಸಹೋದರಿಯರು ಪತಿ–ಮಕ್ಕಳೊಡನೆ; ಮಾವ; ಸದ್ಗುರು, ಶಿಷ್ಯರು, ಆಪ್ತರು — ಇವರು ಮಹಾಲಯದಲ್ಲಿ, ತೀರ್ಥದಲ್ಲಿ ಮತ್ತು ತರ್ಪಣದಲ್ಲಿ ಪಿತೃಗಳು. (ಮಾಧ್ವ ಹಾಗೂ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ; ಬಂಧುಗಳ ನಿಖರ ಪಟ್ಟಿಯನ್ನು ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ.)',
          },
        },
      ],
    },
    {
      title: 'आमश्राद्धं हिरण्यश्राद्धं च',
      titleEn: 'Ama (uncooked) and hiranya (gold) shraddha',
      note: 'When cooking is not possible — in an emergency, while travelling, at a tirtha, or (as many families now do) when brahmanas cannot be fed at home — the manuals allow the shraddha to be done with uncooked provisions (ama shraddha: rice, dal, vegetables, ghee, given in a quantity two to four times what would be cooked), or, failing that, with money or gold (hiranya shraddha: equal to, or a multiple of, the value of those provisions). In the sankalpa say आमेन हविषा or हिरण्येन in place of अन्नेन हविषा, and at the gift इदम् आमम् (or इदं हिरण्यम्) … in place of the food. The Madhva manual consulted (from the Dharmasindhu and Shraddha-manjari) adds: in the ama shraddha the thumb is not placed on the food and the questions of contentment are left out, pindas are made of payasa or saktu (roasted flour), and the avahana mantra is adjusted. In the hiranya shraddha the Smarta Rigveda manual lists as left out the agnaukarana, the laying of leaves, the avahana, the vikira and the visarjana; the Madhva manual makes the pinda optional. When only a sankalpa shraddha can be done, seven parts are left out — avahana, arghya, pinda, vikira, the pinda of the remains, svadha vachana and agnaukarana (both manuals). The priest adapts the mantras; this verse sums up the principle.',
      noteKn: 'ಅಡುಗೆ ಸಾಧ್ಯವಾಗದಿದ್ದಾಗ — ಆಪತ್ತಿನಲ್ಲಿ, ಪ್ರಯಾಣದಲ್ಲಿ, ತೀರ್ಥಕ್ಷೇತ್ರದಲ್ಲಿ, ಅಥವಾ (ಇಂದು ಅನೇಕ ಮನೆತನಗಳು ಮಾಡುವಂತೆ) ಮನೆಯಲ್ಲಿ ಬ್ರಾಹ್ಮಣರಿಗೆ ಊಟ ಹಾಕಲಾಗದಿದ್ದಾಗ — ಬೇಯಿಸದ ಸಾಮಗ್ರಿಗಳಿಂದ (ಆಮಶ್ರಾದ್ಧ: ಅಕ್ಕಿ, ಬೇಳೆ, ತರಕಾರಿ, ತುಪ್ಪ — ಅಡುಗೆಯ ಎರಡರಿಂದ ನಾಲ್ಕರಷ್ಟು ಪ್ರಮಾಣ), ಅದೂ ಆಗದಿದ್ದರೆ ಹಣ ಅಥವಾ ಚಿನ್ನದಿಂದ (ಹಿರಣ್ಯಶ್ರಾದ್ಧ: ಆ ಸಾಮಗ್ರಿಗಳ ಬೆಲೆಯಷ್ಟು ಅಥವಾ ಅದರ ಕೆಲವು ಪಟ್ಟು) ಶ್ರಾದ್ಧ ಮಾಡಲು ಪುಸ್ತಕಗಳು ಅನುಮತಿಸುತ್ತವೆ. ಸಂಕಲ್ಪದಲ್ಲಿ “ಅನ್ನೇನ ಹವಿಷಾ” ಬದಲು “ಆಮೇನ ಹವಿಷಾ” ಅಥವಾ “ಹಿರಣ್ಯೇನ” ಎಂದೂ, ದಾನದಲ್ಲಿ ಅನ್ನದ ಬದಲು “ಇದಮ್ ಆಮಂ” (ಅಥವಾ “ಇದಂ ಹಿರಣ್ಯಂ”) ಎಂದೂ ಹೇಳಬೇಕು. ನೋಡಿದ ಮಾಧ್ವ ಪುಸ್ತಕ (ಧರ್ಮಸಿಂಧು, ಶ್ರಾದ್ಧಮಂಜರಿಗಳಿಂದ) ಹೇಳುವಂತೆ: ಆಮಶ್ರಾದ್ಧದಲ್ಲಿ ಅನ್ನದ ಮೇಲೆ ಹೆಬ್ಬೆರಳು ಇಡುವುದಿಲ್ಲ, ತೃಪ್ತಿಪ್ರಶ್ನೆಗಳಿಲ್ಲ, ಪಿಂಡಗಳನ್ನು ಪಾಯಸ ಅಥವಾ ಸಕ್ತು (ಹುರಿದ ಹಿಟ್ಟು)ಗಳಿಂದ ಮಾಡಬೇಕು, ಆವಾಹನ ಮಂತ್ರದಲ್ಲಿ ಸ್ವಲ್ಪ ಬದಲಾವಣೆ. ಹಿರಣ್ಯಶ್ರಾದ್ಧದಲ್ಲಿ ಅಗ್ನೌಕರಣ, ಎಲೆ ಹಾಕುವುದು, ಆವಾಹನ, ವಿಕಿರ, ವಿಸರ್ಜನಗಳು ಬಿಡಲ್ಪಡುತ್ತವೆ ಎಂದು ಸ್ಮಾರ್ತ ಋಗ್ವೇದ ಪುಸ್ತಕ ಹೇಳುತ್ತದೆ; ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿ ಪಿಂಡ ಐಚ್ಛಿಕ. ಸಂಕಲ್ಪಶ್ರಾದ್ಧ ಮಾತ್ರ ಸಾಧ್ಯವಾದರೆ ಆವಾಹನ, ಅರ್ಘ್ಯ, ಪಿಂಡ, ವಿಕಿರ, ಉಚ್ಛಿಷ್ಟಪಿಂಡ, ಸ್ವಧಾವಾಚನ, ಅಗ್ನೌಕರಣ — ಈ ಏಳನ್ನು ಬಿಡಬೇಕು (ಎರಡೂ ಪುಸ್ತಕಗಳು). ಮಂತ್ರಗಳನ್ನು ಪುರೋಹಿತರು ಹೊಂದಿಸುತ್ತಾರೆ; ಈ ಶ್ಲೋಕ ತತ್ವವನ್ನು ಹೇಳುತ್ತದೆ.',
      verses: [
        {
          text: 'आवाहनार्घ्यपिण्डान्तं विकिरोच्छिष्टपिण्डनम् ।\nस्वधोच्यताग्नौकरणं सङ्कल्पे सप्त वर्जयेत् ॥',
          meaning: {
            en: 'In the sankalpa shraddha one leaves out seven: the avahana, the arghya, the pinda offerings, the vikira, the pinda of the remains, the svadha vachana and the agnaukarana. (Quoted in the Smarta Rigveda manual; the same seven in the Madhva manual from the Dharmasindhu.)',
            kn: 'ಸಂಕಲ್ಪಶ್ರಾದ್ಧದಲ್ಲಿ ಏಳನ್ನು ಬಿಡಬೇಕು: ಆವಾಹನ, ಅರ್ಘ್ಯ, ಪಿಂಡಪ್ರದಾನ, ವಿಕಿರ, ಉಚ್ಛಿಷ್ಟಪಿಂಡ, ಸ್ವಧಾವಾಚನ, ಅಗ್ನೌಕರಣ. (ಸ್ಮಾರ್ತ ಋಗ್ವೇದ ಪುಸ್ತಕದಲ್ಲಿ ಉದ್ಧೃತ; ಧರ್ಮಸಿಂಧುವಿನಿಂದ ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲೂ ಇದೇ ಏಳು.)',
          },
        },
      ],
    },
  ],
};
