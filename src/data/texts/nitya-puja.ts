/**
 * Nitya Puja — the daily household worship, Madhva (Tantrasara) and Smarta (panchayatana),
 * as reader-selectable variants. Short daily form, with the fuller steps marked.
 * NOT YET PROOFREAD against one printed edition.
 *
 * Sources (each mantra's wording supported by at least two, or by the Vedic samhita):
 *  - Madhva: Ayachita Dhirendracharya, "Devara Pooje" (samkshipta deva-puja paddhati after
 *    Tantrasara-sangraha and Padyamala; Kannada; approved by the Sripadaraja and Vyasaraja
 *    mathas). archive.org: devara-pooje-ayaachita-dhirendracharya
 *  - Madhva: "Devapuja Paddhati", abridged from Arcata Prarcata / Puja Rahasya of
 *    Pt. Vidyasimhacharya Mahuli, tr. P. Venkataramana Rao (Ananda Teertha Vidyalaya,
 *    Chennai, 2010). archive.org: devapuja-paddhati-eng-madhva-vaishnava-sampradaya-...
 *  - Madhva: Vadirajacharya Karanam, Yajurvediya Trikala Sandhyavandane (Uttaradi Matha,
 *    2011) for naham karta harih karta….
 *  - Smarta: stotrasamhita/puja-vidhanam, "Laghu Panchayatana Puja" (github).
 *  - Smarta: Brahma-karma-samuchchaya, ahnika-kanda, sarvadeva-samanya-puja (Baudhayana
 *    grihya paddhati; vishvAsa/vedAH_yajuH on github) — panchayatana arrangement (Bhopadeva's
 *    verse), Ganapati and Shiva names, dhupa / dipa mantras, panchamrita.
 *  - Shared formulas copied from the app's Shodashopachara Puja, Sandhyavandane and Mantra
 *    Pushpam texts; Vedic verses checked against the Rigveda Shakala samhita (GRETIL).
 */
import type { Mantra } from '../types';

export const nityaPuja: Mantra = {
  id: 'nitya-puja',
  title: 'नित्यपूजा',
  titleEn: 'Daily Puja (Madhva and Smarta)',
  category: 'puja',
  deity: 'Sri Lakshminarayana (Madhva); the five deities of the panchayatana (Smarta)',
  source: 'Madhva: Tantrasara-sangraha practice (Mahuli Vidyasimhacharya, Ayachita Dhirendracharya); Smarta: panchayatana puja manuals',
  summary: 'The daily household worship of the deities, step by step: for Madhvas the Tantrasara puja of Sri Lakshminarayana in the Saligrama — door-keepers, lamp, bell, nirmalya bath, sankalpa, kalasha and conch, abhisheka with panchamrita and the Purusha Sukta, tulasi archana, naivedya, arati, mantrapushpa, offering to Lakshmi and Vayu, and samarpana; for Smartas the panchayatana puja of Ganapati, the Sun, Ambika, Vishnu and Shiva. Choose your tradition at the top. Each step says whether it belongs to the short daily form or to the fuller puja.',
  summaryKn: 'ಮನೆಯಲ್ಲಿ ಪ್ರತಿದಿನ ಮಾಡುವ ದೇವರ ಪೂಜೆಯ ಹಂತಹಂತದ ಕ್ರಮ: ಮಾಧ್ವರಿಗೆ ಸಾಲಿಗ್ರಾಮದಲ್ಲಿ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ತಂತ್ರಸಾರೋಕ್ತ ಪೂಜೆ — ದ್ವಾರಪಾಲ ನಮನ, ದೀಪ, ಘಂಟೆ, ನಿರ್ಮಾಲ್ಯ ಅಭಿಷೇಕ, ಸಂಕಲ್ಪ, ಕಲಶ–ಶಂಖ ಪೂಜೆ, ಪಂಚಾಮೃತ ಮತ್ತು ಪುರುಷಸೂಕ್ತದಿಂದ ಅಭಿಷೇಕ, ತುಳಸೀ ಅರ್ಚನೆ, ನೈವೇದ್ಯ, ಮಂಗಳಾರತಿ, ಮಂತ್ರಪುಷ್ಪ, ಲಕ್ಷ್ಮೀ–ವಾಯುಗಳಿಗೆ ಅರ್ಪಣೆ, ಸಮರ್ಪಣೆ; ಸ್ಮಾರ್ತರಿಗೆ ಗಣಪತಿ, ಸೂರ್ಯ, ಅಂಬಿಕೆ, ವಿಷ್ಣು, ಶಿವರ ಪಂಚಾಯತನ ಪೂಜೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಸಂಪ್ರದಾಯವನ್ನು ಆರಿಸಿ. ಪ್ರತಿ ಹಂತವೂ ಸಂಕ್ಷಿಪ್ತ ನಿತ್ಯಕ್ರಮದ್ದೋ ವಿಸ್ತೃತ ಪೂಜೆಯದ್ದೋ ಎಂದು ಸೂಚಿಸಲಾಗಿದೆ.',
  variants: [
    {
      key: 'tradition',
      title: 'Tradition',
      titleKn: 'ಸಂಪ್ರದಾಯ',
      options: [
        {
          id: 'madhva',
          label: 'Madhva (Vaishnava)',
          labelKn: 'ಮಾಧ್ವ (ವೈಷ್ಣವ)',
        },
        {
          id: 'smarta',
          label: 'Smarta (panchayatana)',
          labelKn: 'ಸ್ಮಾರ್ತ (ಪಂಚಾಯತನ)',
        },
      ],
    },
  ],
  difficulty: 'medium',
  completeness: 'complete',
  contentNote: 'The daily form as household manuals give it; not yet proofread against one printed edition. Long texts recited during the puja (Ambhrini Sukta, Purusha Sukta, Sri Sukta, Rudram, Mantra Pushpam, Vayu Stuti, ashtottaras) are referred to and open separately in the library. Not included: the elaborate Madhva pitha-devata and avarana puja, tattva- and matrika-nyasa (for those initiated), Vaishvadeva and hastodaka, the Madhva mangalarati shlokas and the Smarta upasana-specific dhyana shlokas, on which the manuals differ. Follow your family and guru where they differ.',
  sections: [
    {
      title: 'पूर्वाङ्गम्',
      titleEn: 'Before the puja',
      note: 'Daily puja is done after bath and sandhyavandane, before eating. Clean the shrine and the floor in front of it, wash the puja vessels, and keep ready: a kalasha (water pot) of fresh water, a panchapatre with uddharane, a plate, the bell, a ghee lamp, incense, sandal paste (gandha), akshata, flowers, tulasi (for Vishnu), betel and fruit, camphor, and the cooked food or fruit to be offered. Sit on a mat facing east (or north), with the deities in front of you. Choose your tradition at the top. Each section below says whether it is part of the short daily form or belongs to the fuller (elaborate) puja; on a busy day do the short form, never skipping arghya-water, bath, flowers, naivedya and arati. Recite this verse and sprinkle a little water on yourself and the puja items.',
      noteKn: 'ನಿತ್ಯಪೂಜೆಯನ್ನು ಸ್ನಾನ, ಸಂಧ್ಯಾವಂದನೆಗಳ ನಂತರ, ಊಟಕ್ಕೆ ಮೊದಲು ಮಾಡಬೇಕು. ದೇವರ ಮನೆ ಮತ್ತು ಅದರ ಮುಂದಿನ ನೆಲವನ್ನು ಶುಚಿಗೊಳಿಸಿ, ಪೂಜಾಪಾತ್ರೆಗಳನ್ನು ತೊಳೆದು ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಿ: ಶುದ್ಧಜಲದ ಕಲಶ, ಉದ್ಧರಣೆಯೊಂದಿಗೆ ಪಂಚಪಾತ್ರೆ, ತಟ್ಟೆ, ಗಂಟೆ, ತುಪ್ಪದ ದೀಪ, ಊದುಬತ್ತಿ, ಗಂಧ, ಅಕ್ಷತೆ, ಹೂವು, ತುಳಸಿ (ವಿಷ್ಣುವಿಗೆ), ವೀಳ್ಯ, ಹಣ್ಣು, ಕರ್ಪೂರ ಮತ್ತು ನೈವೇದ್ಯಕ್ಕೆ ಅಡುಗೆ ಅಥವಾ ಹಣ್ಣು. ದೇವರುಗಳು ಎದುರಿರುವಂತೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ (ಅಥವಾ ಉತ್ತರಾಭಿಮುಖವಾಗಿ) ಆಸನದ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಿ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ನಿಮ್ಮ ಸಂಪ್ರದಾಯವನ್ನು ಆರಿಸಿ. ಪ್ರತಿ ಹಂತವೂ ಸಂಕ್ಷಿಪ್ತ ನಿತ್ಯಕ್ರಮಕ್ಕೆ ಸೇರಿದೆಯೋ ವಿಸ್ತೃತ ಪೂಜೆಗೆ ಸೇರಿದೆಯೋ ಎಂದು ಸೂಚಿಸಲಾಗಿದೆ; ಸಮಯವಿಲ್ಲದ ದಿನ ಸಂಕ್ಷಿಪ್ತ ಕ್ರಮ ಮಾಡಿ — ಅರ್ಘ್ಯಜಲ, ಅಭಿಷೇಕ, ಹೂವು, ನೈವೇದ್ಯ, ಆರತಿಗಳನ್ನು ಬಿಡಬೇಡಿ. ಈ ಶ್ಲೋಕ ಹೇಳಿ ನಿಮ್ಮ ಮೇಲೂ ಪೂಜಾಸಾಮಗ್ರಿಗಳ ಮೇಲೂ ಸ್ವಲ್ಪ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ.',
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
      title: 'श्रौताचमनम्',
      titleEn: 'Shrauta achamana (with the names of the Vedas)',
      note: 'Manuals speak of three kinds of achamana. (1) Shrauta or Vaidika achamana, with the names of the Vedas (ऋग्वेदाय स्वाहा …). (2) Achamana with the Gayatri and apo hi shtha, with twenty-four touches — the Devi Bhagavata and Andhra manuals call this one Shrauta, the Madhva commentary on the Sadachara-smriti calls it Smarta. (3) Keshavadi achamana with the twenty-four names of Vishnu — called Pauranika in the Devi Bhagavata and Vaishnava in the Madhva commentary. Sip from the base of the palm (gokarna shape, water to cover a grain of urad) three times, with ॐ ऋग्वेदाय स्वाहा, ॐ यजुर्वेदाय स्वाहा and ॐ सामवेदाय स्वाहा. Then, with the wet hand, wipe the lips twice (Atharvaveda; Itihasa-Purana) and touch the mouth (Agni); sprinkle the left hand (the stars) and the feet (Vishnu); touch the eyes with thumb and ring finger (Moon, Sun), the nostrils with thumb and index finger (prana, apana), the ears with thumb and little finger (the directions), the upper arms with thumb and middle finger (Indra), the heart with four fingers (Rudra), the navel with the thumb (Earth), and the head with all the fingers; let the water left in the hand drip away for Kubera and all the gods (Baudhayana, in the Brahma-karma-samuchchaya; the Ashvalayana rule also has the sips with Om and svaha). Smarta families who use it do it first, at the start of the puja, and then the Keshavadi achamana.',
      noteKn: 'ಪುಸ್ತಕಗಳು ಮೂರು ಬಗೆಯ ಆಚಮನಗಳನ್ನು ಹೇಳುತ್ತವೆ: (೧) ವೇದಗಳ ಹೆಸರುಗಳಿಂದ ಮಾಡುವ ಶ್ರೌತ ಅಥವಾ ವೈದಿಕ ಆಚಮನ (“ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ…”). (೨) ಗಾಯತ್ರಿ ಮತ್ತು “ಆಪೋ ಹಿಷ್ಠಾ”ಗಳಿಂದ ಇಪ್ಪತ್ನಾಲ್ಕು ಸ್ಪರ್ಶಗಳೊಡನೆ ಮಾಡುವ ಆಚಮನ — ದೇವೀಭಾಗವತ ಮತ್ತು ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು ಇದನ್ನು ಶ್ರೌತ ಎನ್ನುತ್ತವೆ, ಸದಾಚಾರಸ್ಮೃತಿಯ ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನ ಸ್ಮಾರ್ತ ಎನ್ನುತ್ತದೆ. (೩) ವಿಷ್ಣುವಿನ ಇಪ್ಪತ್ನಾಲ್ಕು ನಾಮಗಳಿಂದ ಮಾಡುವ ಕೇಶವಾದಿ ಆಚಮನ — ದೇವೀಭಾಗವತದಲ್ಲಿ ಪೌರಾಣಿಕ, ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ವೈಷ್ಣವ ಆಚಮನ. ಗೋಕರ್ಣಾಕಾರದ ಅಂಗೈಯ ಬುಡದಿಂದ (ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು) “ಓಂ ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ”, “ಓಂ ಯಜುರ್ವೇದಾಯ ಸ್ವಾಹಾ”, “ಓಂ ಸಾಮವೇದಾಯ ಸ್ವಾಹಾ” ಎಂದು ಮೂರು ಬಾರಿ ಸೇವಿಸಿ. ನಂತರ ಒದ್ದೆ ಕೈಯಿಂದ ತುಟಿಗಳನ್ನು ಎರಡು ಬಾರಿ ಒರೆಸಿ (ಅಥರ್ವವೇದ; ಇತಿಹಾಸ–ಪುರಾಣ), ಬಾಯಿ ಮುಟ್ಟಿ (ಅಗ್ನಿ); ಎಡಗೈಗೆ (ನಕ್ಷತ್ರಗಳು), ಪಾದಗಳಿಗೆ (ವಿಷ್ಣು) ನೀರು ಪ್ರೋಕ್ಷಿಸಿ; ಹೆಬ್ಬೆರಳು–ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಕಣ್ಣುಗಳು (ಚಂದ್ರ, ಸೂರ್ಯ), ಹೆಬ್ಬೆರಳು–ತೋರುಬೆರಳಿನಿಂದ ಮೂಗಿನ ಹೊಳ್ಳೆಗಳು (ಪ್ರಾಣ, ಅಪಾನ), ಹೆಬ್ಬೆರಳು–ಕಿರುಬೆರಳಿನಿಂದ ಕಿವಿಗಳು (ದಿಕ್ಕುಗಳು), ಹೆಬ್ಬೆರಳು–ನಡುಬೆರಳಿನಿಂದ ತೋಳುಗಳು (ಇಂದ್ರ), ನಾಲ್ಕು ಬೆರಳುಗಳಿಂದ ಹೃದಯ (ರುದ್ರ), ಹೆಬ್ಬೆರಳಿನಿಂದ ನಾಭಿ (ಪೃಥ್ವಿ), ಎಲ್ಲ ಬೆರಳುಗಳಿಂದ ತಲೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ; ಕೈಯಲ್ಲಿ ಉಳಿದ ನೀರನ್ನು ಕುಬೇರಾದಿ ಸಮಸ್ತ ದೇವತೆಗಳಿಗಾಗಿ ಬಿಡಿ (ಬ್ರಹ್ಮಕರ್ಮಸಮುಚ್ಚಯದಲ್ಲಿನ ಬೋಧಾಯನ ವಿಧಿ; ಆಶ್ವಲಾಯನರೂ ಪ್ರಣವ–ಸ್ವಾಹಾಕಾರ ಸಹಿತ ಮೂರು ಗುಟುಕುಗಳನ್ನು ಹೇಳುತ್ತಾರೆ). ಇದನ್ನು ಮಾಡುವ ಸ್ಮಾರ್ತ ಮನೆತನಗಳು ಪೂಜೆಯ ಆರಂಭದಲ್ಲಿ ಮೊದಲು ಇದನ್ನು, ನಂತರ ಕೇಶವಾದಿ ಆಚಮನವನ್ನು ಮಾಡುತ್ತಾರೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ ऋग्वेदाय स्वाहा । ॐ यजुर्वेदाय स्वाहा । ॐ सामवेदाय स्वाहा ॥',
          meaning: {
            en: 'Om, to the Rigveda, svaha; Om, to the Yajurveda, svaha; Om, to the Samaveda, svaha. (A sip of water with each, offered to the three Vedas.)',
            kn: 'ಓಂ ಋಗ್ವೇದಕ್ಕೆ ಸ್ವಾಹಾ; ಓಂ ಯಜುರ್ವೇದಕ್ಕೆ ಸ್ವಾಹಾ; ಓಂ ಸಾಮವೇದಕ್ಕೆ ಸ್ವಾಹಾ. (ಪ್ರತಿಯೊಂದರೊಡನೆ ಒಂದು ಗುಟುಕು ನೀರು — ಮೂರು ವೇದಗಳಿಗೆ ಅರ್ಪಣೆ.)',
          },
        },
        {
          text: 'ॐ अथर्ववेदाय नमः । ॐ इतिहासपुराणेभ्यो नमः । ॐ अग्नये नमः ।\nॐ नक्षत्रेभ्यो नमः । ॐ विष्णवे नमः ।\nॐ चन्द्राय नमः । ॐ आदित्याय नमः ।\nॐ प्राणाय नमः । ॐ अपानाय नमः ।\nॐ दिग्भ्यो नमः । ॐ दिग्भ्यो नमः ।\nॐ इन्द्राय नमः । ॐ इन्द्राय नमः ।\nॐ रुद्राय नमः । ॐ पृथिव्यै नमः ॥',
          meaning: {
            en: 'Salutations to the Atharvaveda and to the Itihasas and Puranas (wiping the lips); to Agni (the mouth); to the stars (the left hand); to Vishnu (the feet); to the Moon and the Sun (the two eyes); to prana and apana (the two nostrils); to the directions (the two ears); to Indra (the two arms); to Rudra (the heart); and to the Earth (the navel).',
            kn: 'ಅಥರ್ವವೇದಕ್ಕೂ ಇತಿಹಾಸ–ಪುರಾಣಗಳಿಗೂ ನಮಸ್ಕಾರ (ತುಟಿಗಳನ್ನು ಒರೆಸುವುದು); ಅಗ್ನಿಗೆ (ಬಾಯಿ); ನಕ್ಷತ್ರಗಳಿಗೆ (ಎಡಗೈ); ವಿಷ್ಣುವಿಗೆ (ಪಾದಗಳು); ಚಂದ್ರ–ಸೂರ್ಯರಿಗೆ (ಎರಡು ಕಣ್ಣು); ಪ್ರಾಣ–ಅಪಾನಗಳಿಗೆ (ಎರಡು ಮೂಗಿನ ಹೊಳ್ಳೆ); ದಿಕ್ಕುಗಳಿಗೆ (ಎರಡು ಕಿವಿ); ಇಂದ್ರನಿಗೆ (ಎರಡು ತೋಳು); ರುದ್ರನಿಗೆ (ಹೃದಯ); ಪೃಥ್ವಿಗೆ (ನಾಭಿ) ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'गायत्र्याचमनम्',
      titleEn: 'Achamana with the Gayatri and apo hi shtha',
      note: 'Sip three times with the three padas of the Gayatri, each preceded by Om (some manuals add the vyahritis or svaha). Then, washing the hand in between: with the nine padas of apo hi shtha wash the left and right hands and touch the cheeks, the lips, the joined palms, the feet and the head; with the seven vyahritis (bhuh … satyam) touch the tip and the two sides of the nose, the two eyes and the two ears; with the three padas of the Gayatri the navel, the heart and the head; and with its shiras (apo jyoti …) the two shoulders — twenty-four places in all. The places vary slightly between manuals. This longer form is used where your manual or teacher prescribes it; most families today do the Keshavadi achamana.',
      noteKn: 'ಗಾಯತ್ರಿಯ ಮೂರು ಪಾದಗಳಿಂದ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಮೊದಲು ಓಂ ಸೇರಿಸಿ, ಮೂರು ಬಾರಿ ಸೇವಿಸಿ (ಕೆಲವು ಪುಸ್ತಕಗಳು ವ್ಯಾಹೃತಿಗಳನ್ನೋ ಸ್ವಾಹಾವನ್ನೋ ಸೇರಿಸುತ್ತವೆ). ನಂತರ ನಡುನಡುವೆ ಕೈ ತೊಳೆಯುತ್ತಾ: “ಆಪೋ ಹಿಷ್ಠಾ”ದ ಒಂಬತ್ತು ಪಾದಗಳಿಂದ ಎಡ–ಬಲ ಕೈಗಳನ್ನು ತೊಳೆದು ಕೆನ್ನೆಗಳು, ತುಟಿಗಳು, ಜೋಡಿಸಿದ ಅಂಗೈಗಳು, ಪಾದಗಳು, ತಲೆಯನ್ನು ಮುಟ್ಟಿ; ಏಳು ವ್ಯಾಹೃತಿಗಳಿಂದ (ಭೂಃ … ಸತ್ಯಂ) ಮೂಗಿನ ತುದಿ, ಮೂಗಿನ ಎರಡು ಪಕ್ಕ, ಎರಡು ಕಣ್ಣು, ಎರಡು ಕಿವಿ; ಗಾಯತ್ರಿಯ ಮೂರು ಪಾದಗಳಿಂದ ನಾಭಿ, ಹೃದಯ, ತಲೆ; ಅದರ ಶಿರಸ್ಸಿನಿಂದ (ಆಪೋ ಜ್ಯೋತೀ…) ಎರಡು ಭುಜಗಳು — ಒಟ್ಟು ಇಪ್ಪತ್ನಾಲ್ಕು ಸ್ಥಾನಗಳು. ಸ್ಥಾನಗಳು ಪುಸ್ತಕದಿಂದ ಪುಸ್ತಕಕ್ಕೆ ಸ್ವಲ್ಪ ಭಿನ್ನ. ನಿಮ್ಮ ಪುಸ್ತಕ ಅಥವಾ ಗುರುಗಳು ವಿಧಿಸಿದಲ್ಲಿ ಈ ದೀರ್ಘ ಕ್ರಮ; ಇಂದು ಹೆಚ್ಚಿನ ಮನೆತನಗಳು ಕೇಶವಾದಿ ಆಚಮನ ಮಾಡುತ್ತಾರೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ तत्सवितुर्वरेण्यम् । भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'The Gayatri, one pada with each sip: we meditate on the adorable radiance of the divine Savitri; may he move our minds.',
            kn: 'ಗಾಯತ್ರಿ — ಪ್ರತಿ ಗುಟುಕಿಗೆ ಒಂದು ಪಾದ: ಸವಿತೃದೇವನ ಪೂಜನೀಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'आपो हि ष्ठा मयोभुवः ।\nता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥',
          meaning: {
            en: 'O Waters, you are the bringers of happiness. Fill us with strength, so that we may behold great joy.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನೀವು ಸುಖವನ್ನು ಕೊಡುವವರು. ನಮಗೆ ಶಕ್ತಿಯನ್ನು ತುಂಬಿ, ಮಹತ್ತಾದ ಆನಂದವನ್ನು ಕಾಣುವಂತೆ ಮಾಡಿ.',
          },
        },
        {
          text: 'यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः ।\nउशतीरिव मातरः ॥',
          meaning: {
            en: 'Let us share here in your most auspicious essence, as loving mothers share with their children.',
            kn: 'ಪ್ರೀತಿಯುಳ್ಳ ತಾಯಂದಿರು ಮಕ್ಕಳಿಗೆ ಉಣಿಸುವಂತೆ, ನಿಮ್ಮಲ್ಲಿರುವ ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ರಸವನ್ನು ನಮಗೂ ಇಲ್ಲಿ ಕರುಣಿಸಿ.',
          },
        },
        {
          text: 'तस्मा अरं गमाम वः ।\nयस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'May we readily attain that essence of yours with which you nourish all that dwells in the world; O Waters, bring us to new life.',
            kn: 'ಲೋಕದ ಜೀವಿಗಳನ್ನು ಪೋಷಿಸುವ ನಿಮ್ಮ ಆ ರಸವನ್ನು ನಾವು ಸಂಪೂರ್ಣವಾಗಿ ಪಡೆಯುವಂತಾಗಲಿ; ಓ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಹೊಸ ಚೈತನ್ಯವನ್ನು ಕೊಡಿ.',
          },
        },
        {
          text: 'ॐ भूः । ॐ भुवः । ॐ स्वः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhuh to Satya. We meditate on the adorable radiance of the divine Savitri, who moves our minds. Om — he is the waters, the light, the essence, the immortal, Brahman; he fills earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಪೂಜನೀಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಅವನೇ; ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮನೂ ಅವನೇ.',
          },
        },
      ],
    },
    {
      title: 'आचमनम्',
      titleEn: 'Keshavadi achamana (Vaishnava / Pauranika) (short form)',
      note: 'Do achamana before the puja (twice, if you have not just done it at sandhya): hollow the right palm like a cow’s ear, take water enough to cover a grain of urad dal and sip it three times without noise with Keshava, Narayana and Madhava; with the remaining names wash the hands and touch the lips, cheeks, nose, eyes, ears, navel, heart, head and shoulders, as shown in Sandhyavandane. This is the Keshavadi achamana — the Vaishnava achamana of the Madhva commentary on the Sadachara-smriti, which prescribes it for every rite, and the Pauranika achamana of the Devi Bhagavata (sip with the names ending in svaha, touch with those ending in namah).',
      noteKn: 'ಪೂಜೆಗೆ ಮೊದಲು ಆಚಮನ ಮಾಡಿ (ಆಗತಾನೇ ಸಂಧ್ಯೆಯಲ್ಲಿ ಮಾಡಿಲ್ಲದಿದ್ದರೆ ಎರಡು ಬಾರಿ): ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ತೆಗೆದುಕೊಂಡು ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ನಾಮಗಳಿಂದ ಶಬ್ದವಿಲ್ಲದೆ ಮೂರು ಬಾರಿ ಸೇವಿಸಿ; ಉಳಿದ ನಾಮಗಳಿಂದ ಕೈ ತೊಳೆದು ತುಟಿ, ಕೆನ್ನೆ, ಮೂಗು, ಕಣ್ಣು, ಕಿವಿ, ನಾಭಿ, ಹೃದಯ, ತಲೆ, ಭುಜಗಳನ್ನು ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿ ತೋರಿಸಿದಂತೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ. ಇದು ಕೇಶವಾದಿ ಆಚಮನ — ಸದಾಚಾರಸ್ಮೃತಿಯ ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನ ಎಲ್ಲ ಕರ್ಮಗಳಿಗೂ ವಿಧಿಸುವ ವೈಷ್ಣವ ಆಚಮನ; ದೇವೀಭಾಗವತದ ಪೌರಾಣಿಕ ಆಚಮನವೂ ಇದೇ (“ಸ್ವಾಹಾ” ಎಂದು ಕೊನೆಗೊಳ್ಳುವ ನಾಮಗಳಿಂದ ಸೇವನೆ, “ನಮಃ” ಎಂದು ಕೊನೆಗೊಳ್ಳುವವುಗಳಿಂದ ಸ್ಪರ್ಶ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ॐ केशवाय स्वाहा ।\nॐ नारायणाय स्वाहा ।\nॐ माधवाय स्वाहा ॥',
          meaning: {
            en: 'Offering to Keshava, to Narayana and to Madhava: with each of these names of the Lord a sip of water is taken.',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಭಗವಂತನ ನಾಮಗಳನ್ನು ಹೇಳಿ, ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಜಲವನ್ನು ಅರ್ಪಿಸಿ ಆಚಮನ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ गोविन्दाय नमः । ॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः । ॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः । ॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः । ॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः । ॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः । ॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः । ॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः । ॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः । ॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord by his holy names, from Govinda and Vishnu to Hari and Sri Krishna; with each, the Lord is remembered as present in the part of the body that is touched.',
            kn: 'ಗೋವಿಂದ, ವಿಷ್ಣು ಮೊದಲ್ಗೊಂಡು ಹರಿ, ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಭಗವಂತನ ಪವಿತ್ರ ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ; ಒಂದೊಂದು ನಾಮ ಹೇಳುವಾಗಲೂ ಮುಟ್ಟಿದ ಅಂಗದಲ್ಲಿ ಆ ರೂಪದ ಭಗವಂತನಿದ್ದಾನೆಂದು ಸ್ಮರಿಸಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'आचमनम्',
      titleEn: 'Keshavadi achamana (Pauranika) (short form)',
      note: 'Do achamana before the puja (twice, if you have not just done it at sandhya): hollow the right palm like a cow’s ear, take water enough to cover a grain of urad dal and sip it three times without noise with Keshava, Narayana and Madhava; with the remaining names wash the hands and touch the lips, cheeks, nose, eyes, ears, navel, heart, head and shoulders, as shown in Sandhyavandane. This is the Keshavadi (Pauranika) achamana, done after the Shrauta achamana by families who do both.',
      noteKn: 'ಪೂಜೆಗೆ ಮೊದಲು ಆಚಮನ ಮಾಡಿ (ಆಗತಾನೇ ಸಂಧ್ಯೆಯಲ್ಲಿ ಮಾಡಿಲ್ಲದಿದ್ದರೆ ಎರಡು ಬಾರಿ): ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ತೆಗೆದುಕೊಂಡು ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ನಾಮಗಳಿಂದ ಶಬ್ದವಿಲ್ಲದೆ ಮೂರು ಬಾರಿ ಸೇವಿಸಿ; ಉಳಿದ ನಾಮಗಳಿಂದ ಕೈ ತೊಳೆದು ತುಟಿ, ಕೆನ್ನೆ, ಮೂಗು, ಕಣ್ಣು, ಕಿವಿ, ನಾಭಿ, ಹೃದಯ, ತಲೆ, ಭುಜಗಳನ್ನು ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿ ತೋರಿಸಿದಂತೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ. ಇದು ಕೇಶವಾದಿ (ಪೌರಾಣಿಕ) ಆಚಮನ; ಎರಡನ್ನೂ ಮಾಡುವ ಮನೆತನಗಳು ಶ್ರೌತ ಆಚಮನದ ನಂತರ ಇದನ್ನು ಮಾಡುತ್ತಾರೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ केशवाय स्वाहा ।\nॐ नारायणाय स्वाहा ।\nॐ माधवाय स्वाहा ॥',
          meaning: {
            en: 'Offering to Keshava, to Narayana and to Madhava: with each of these names of the Lord a sip of water is taken.',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಭಗವಂತನ ನಾಮಗಳನ್ನು ಹೇಳಿ, ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಜಲವನ್ನು ಅರ್ಪಿಸಿ ಆಚಮನ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ गोविन्दाय नमः । ॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः । ॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः । ॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः । ॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः । ॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः । ॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः । ॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः । ॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः । ॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord by his holy names, from Govinda and Vishnu to Hari and Sri Krishna; with each, the Lord is remembered as present in the part of the body that is touched.',
            kn: 'ಗೋವಿಂದ, ವಿಷ್ಣು ಮೊದಲ್ಗೊಂಡು ಹರಿ, ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಭಗವಂತನ ಪವಿತ್ರ ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ; ಒಂದೊಂದು ನಾಮ ಹೇಳುವಾಗಲೂ ಮುಟ್ಟಿದ ಅಂಗದಲ್ಲಿ ಆ ರೂಪದ ಭಗವಂತನಿದ್ದಾನೆಂದು ಸ್ಮರಿಸಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'श्रौताचमनम्',
      titleEn: 'Shrauta achamana (with the names of the Vedas) — for reference',
      note: 'The Madhva commentary on Sri Madhvacharya’s Sadachara-smriti describes all three kinds of achamana — Smarta (with the Gayatri and apo hi shtha), Shrauta or mantra-achamana (with the names of the Vedas) and Vaishnava (Keshavadi) — and concludes that, being followed by all the learned, the Vaishnava (Keshavadi) achamana is to be done in every rite. The other two are given here so that you can recognise them; do them only if your guru or family has taught them. Sip from the base of the palm (gokarna shape, water to cover a grain of urad) three times, with ॐ ऋग्वेदाय स्वाहा, ॐ यजुर्वेदाय स्वाहा and ॐ सामवेदाय स्वाहा. Then, with the wet hand, wipe the lips twice (Atharvaveda; Itihasa-Purana) and touch the mouth (Agni); sprinkle the left hand (the stars) and the feet (Vishnu); touch the eyes with thumb and ring finger (Moon, Sun), the nostrils with thumb and index finger (prana, apana), the ears with thumb and little finger (the directions), the upper arms with thumb and middle finger (Indra), the heart with four fingers (Rudra), the navel with the thumb (Earth), and the head with all the fingers; let the water left in the hand drip away for Kubera and all the gods (Baudhayana, in the Brahma-karma-samuchchaya; the Ashvalayana rule also has the sips with Om and svaha). The Madhva commentary itself reads ऋग्वेदाय नमः, यजुर्वेदाय नमः, सामवेदाय नमः for the sips and then touches the mouth (Atharvaveda, Agni), the lips (Vishnu, Sarasvati), the nostrils (Prana, Vayu), the eyes (Chandra, Bhaskara), the heart (Brahma, Vishnu), the arms (Indra), the feet (Prithivi), the knees (Antariksha) and the head (Shiva).',
      noteKn: 'ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರ ಸದಾಚಾರಸ್ಮೃತಿಯ ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನವು ಮೂರು ಬಗೆಯ ಆಚಮನಗಳನ್ನು — ಸ್ಮಾರ್ತ (ಗಾಯತ್ರಿ, ಆಪೋ ಹಿಷ್ಠಾಗಳಿಂದ), ಶ್ರೌತ ಅಥವಾ ಮಂತ್ರಾಚಮನ (ವೇದಗಳ ಹೆಸರುಗಳಿಂದ), ವೈಷ್ಣವ (ಕೇಶವಾದಿ) — ವಿವರಿಸಿ, ಸಮಸ್ತ ಶಿಷ್ಟರು ಅನುಸರಿಸುವುದರಿಂದ ಎಲ್ಲ ಕರ್ಮಗಳಲ್ಲೂ ವೈಷ್ಣವ (ಕೇಶವಾದಿ) ಆಚಮನವನ್ನೇ ಮಾಡಬೇಕೆಂದು ನಿರ್ಣಯಿಸುತ್ತದೆ. ಉಳಿದೆರಡನ್ನು ಗುರುತಿಸಲೆಂದು ಇಲ್ಲಿ ಕೊಡಲಾಗಿದೆ; ಗುರುಗಳು ಅಥವಾ ಮನೆತನ ಹೇಳಿಕೊಟ್ಟಿದ್ದರೆ ಮಾತ್ರ ಮಾಡಿ. ಗೋಕರ್ಣಾಕಾರದ ಅಂಗೈಯ ಬುಡದಿಂದ (ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು) “ಓಂ ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ”, “ಓಂ ಯಜುರ್ವೇದಾಯ ಸ್ವಾಹಾ”, “ಓಂ ಸಾಮವೇದಾಯ ಸ್ವಾಹಾ” ಎಂದು ಮೂರು ಬಾರಿ ಸೇವಿಸಿ. ನಂತರ ಒದ್ದೆ ಕೈಯಿಂದ ತುಟಿಗಳನ್ನು ಎರಡು ಬಾರಿ ಒರೆಸಿ (ಅಥರ್ವವೇದ; ಇತಿಹಾಸ–ಪುರಾಣ), ಬಾಯಿ ಮುಟ್ಟಿ (ಅಗ್ನಿ); ಎಡಗೈಗೆ (ನಕ್ಷತ್ರಗಳು), ಪಾದಗಳಿಗೆ (ವಿಷ್ಣು) ನೀರು ಪ್ರೋಕ್ಷಿಸಿ; ಹೆಬ್ಬೆರಳು–ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಕಣ್ಣುಗಳು (ಚಂದ್ರ, ಸೂರ್ಯ), ಹೆಬ್ಬೆರಳು–ತೋರುಬೆರಳಿನಿಂದ ಮೂಗಿನ ಹೊಳ್ಳೆಗಳು (ಪ್ರಾಣ, ಅಪಾನ), ಹೆಬ್ಬೆರಳು–ಕಿರುಬೆರಳಿನಿಂದ ಕಿವಿಗಳು (ದಿಕ್ಕುಗಳು), ಹೆಬ್ಬೆರಳು–ನಡುಬೆರಳಿನಿಂದ ತೋಳುಗಳು (ಇಂದ್ರ), ನಾಲ್ಕು ಬೆರಳುಗಳಿಂದ ಹೃದಯ (ರುದ್ರ), ಹೆಬ್ಬೆರಳಿನಿಂದ ನಾಭಿ (ಪೃಥ್ವಿ), ಎಲ್ಲ ಬೆರಳುಗಳಿಂದ ತಲೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ; ಕೈಯಲ್ಲಿ ಉಳಿದ ನೀರನ್ನು ಕುಬೇರಾದಿ ಸಮಸ್ತ ದೇವತೆಗಳಿಗಾಗಿ ಬಿಡಿ (ಬ್ರಹ್ಮಕರ್ಮಸಮುಚ್ಚಯದಲ್ಲಿನ ಬೋಧಾಯನ ವಿಧಿ; ಆಶ್ವಲಾಯನರೂ ಪ್ರಣವ–ಸ್ವಾಹಾಕಾರ ಸಹಿತ ಮೂರು ಗುಟುಕುಗಳನ್ನು ಹೇಳುತ್ತಾರೆ). ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ಗುಟುಕುಗಳಿಗೆ “ಋಗ್ವೇದಾಯ ನಮಃ, ಯಜುರ್ವೇದಾಯ ನಮಃ, ಸಾಮವೇದಾಯ ನಮಃ” ಎಂದಿದ್ದು, ನಂತರ ಬಾಯಿ (ಅಥರ್ವವೇದ, ಅಗ್ನಿ), ತುಟಿಗಳು (ವಿಷ್ಣು, ಸರಸ್ವತಿ), ಮೂಗಿನ ಹೊಳ್ಳೆಗಳು (ಪ್ರಾಣ, ವಾಯು), ಕಣ್ಣುಗಳು (ಚಂದ್ರ, ಭಾಸ್ಕರ), ಹೃದಯ (ಬ್ರಹ್ಮ, ವಿಷ್ಣು), ತೋಳುಗಳು (ಇಂದ್ರ), ಪಾದಗಳು (ಪೃಥ್ವಿ), ಮಂಡಿಗಳು (ಅಂತರಿಕ್ಷ), ತಲೆ (ಶಿವ) ಮುಟ್ಟುವ ಕ್ರಮವಿದೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ॐ ऋग्वेदाय स्वाहा । ॐ यजुर्वेदाय स्वाहा । ॐ सामवेदाय स्वाहा ॥',
          meaning: {
            en: 'Om, to the Rigveda, svaha; Om, to the Yajurveda, svaha; Om, to the Samaveda, svaha. (A sip of water with each, offered to the three Vedas.)',
            kn: 'ಓಂ ಋಗ್ವೇದಕ್ಕೆ ಸ್ವಾಹಾ; ಓಂ ಯಜುರ್ವೇದಕ್ಕೆ ಸ್ವಾಹಾ; ಓಂ ಸಾಮವೇದಕ್ಕೆ ಸ್ವಾಹಾ. (ಪ್ರತಿಯೊಂದರೊಡನೆ ಒಂದು ಗುಟುಕು ನೀರು — ಮೂರು ವೇದಗಳಿಗೆ ಅರ್ಪಣೆ.)',
          },
        },
        {
          text: 'ॐ अथर्ववेदाय नमः । ॐ इतिहासपुराणेभ्यो नमः । ॐ अग्नये नमः ।\nॐ नक्षत्रेभ्यो नमः । ॐ विष्णवे नमः ।\nॐ चन्द्राय नमः । ॐ आदित्याय नमः ।\nॐ प्राणाय नमः । ॐ अपानाय नमः ।\nॐ दिग्भ्यो नमः । ॐ दिग्भ्यो नमः ।\nॐ इन्द्राय नमः । ॐ इन्द्राय नमः ।\nॐ रुद्राय नमः । ॐ पृथिव्यै नमः ॥',
          meaning: {
            en: 'Salutations to the Atharvaveda and to the Itihasas and Puranas (wiping the lips); to Agni (the mouth); to the stars (the left hand); to Vishnu (the feet); to the Moon and the Sun (the two eyes); to prana and apana (the two nostrils); to the directions (the two ears); to Indra (the two arms); to Rudra (the heart); and to the Earth (the navel).',
            kn: 'ಅಥರ್ವವೇದಕ್ಕೂ ಇತಿಹಾಸ–ಪುರಾಣಗಳಿಗೂ ನಮಸ್ಕಾರ (ತುಟಿಗಳನ್ನು ಒರೆಸುವುದು); ಅಗ್ನಿಗೆ (ಬಾಯಿ); ನಕ್ಷತ್ರಗಳಿಗೆ (ಎಡಗೈ); ವಿಷ್ಣುವಿಗೆ (ಪಾದಗಳು); ಚಂದ್ರ–ಸೂರ್ಯರಿಗೆ (ಎರಡು ಕಣ್ಣು); ಪ್ರಾಣ–ಅಪಾನಗಳಿಗೆ (ಎರಡು ಮೂಗಿನ ಹೊಳ್ಳೆ); ದಿಕ್ಕುಗಳಿಗೆ (ಎರಡು ಕಿವಿ); ಇಂದ್ರನಿಗೆ (ಎರಡು ತೋಳು); ರುದ್ರನಿಗೆ (ಹೃದಯ); ಪೃಥ್ವಿಗೆ (ನಾಭಿ) ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'स्मार्ताचमनम्',
      titleEn: 'Smarta achamana (with the Gayatri and apo hi shtha) — for reference',
      note: 'This is what the Madhva Sadachara commentary calls the Smarta achamana (after Bharadvaja). Sip three times with the three padas of the Gayatri, each preceded by Om (some manuals add the vyahritis or svaha). Then, washing the hand in between: with the nine padas of apo hi shtha wash the left and right hands and touch the cheeks, the lips, the joined palms, the feet and the head; with the seven vyahritis (bhuh … satyam) touch the tip and the two sides of the nose, the two eyes and the two ears; with the three padas of the Gayatri the navel, the heart and the head; and with its shiras (apo jyoti …) the two shoulders — twenty-four places in all. The places vary slightly between manuals.',
      noteKn: 'ಇದನ್ನು ಮಾಧ್ವ ಸದಾಚಾರ ವ್ಯಾಖ್ಯಾನ (ಭರದ್ವಾಜರನ್ನು ಉಲ್ಲೇಖಿಸಿ) ಸ್ಮಾರ್ತ ಆಚಮನ ಎನ್ನುತ್ತದೆ. ಗಾಯತ್ರಿಯ ಮೂರು ಪಾದಗಳಿಂದ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಮೊದಲು ಓಂ ಸೇರಿಸಿ, ಮೂರು ಬಾರಿ ಸೇವಿಸಿ (ಕೆಲವು ಪುಸ್ತಕಗಳು ವ್ಯಾಹೃತಿಗಳನ್ನೋ ಸ್ವಾಹಾವನ್ನೋ ಸೇರಿಸುತ್ತವೆ). ನಂತರ ನಡುನಡುವೆ ಕೈ ತೊಳೆಯುತ್ತಾ: “ಆಪೋ ಹಿಷ್ಠಾ”ದ ಒಂಬತ್ತು ಪಾದಗಳಿಂದ ಎಡ–ಬಲ ಕೈಗಳನ್ನು ತೊಳೆದು ಕೆನ್ನೆಗಳು, ತುಟಿಗಳು, ಜೋಡಿಸಿದ ಅಂಗೈಗಳು, ಪಾದಗಳು, ತಲೆಯನ್ನು ಮುಟ್ಟಿ; ಏಳು ವ್ಯಾಹೃತಿಗಳಿಂದ (ಭೂಃ … ಸತ್ಯಂ) ಮೂಗಿನ ತುದಿ, ಮೂಗಿನ ಎರಡು ಪಕ್ಕ, ಎರಡು ಕಣ್ಣು, ಎರಡು ಕಿವಿ; ಗಾಯತ್ರಿಯ ಮೂರು ಪಾದಗಳಿಂದ ನಾಭಿ, ಹೃದಯ, ತಲೆ; ಅದರ ಶಿರಸ್ಸಿನಿಂದ (ಆಪೋ ಜ್ಯೋತೀ…) ಎರಡು ಭುಜಗಳು — ಒಟ್ಟು ಇಪ್ಪತ್ನಾಲ್ಕು ಸ್ಥಾನಗಳು. ಸ್ಥಾನಗಳು ಪುಸ್ತಕದಿಂದ ಪುಸ್ತಕಕ್ಕೆ ಸ್ವಲ್ಪ ಭಿನ್ನ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ॐ तत्सवितुर्वरेण्यम् । भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'The Gayatri, one pada with each sip: we meditate on the adorable radiance of the divine Savitri; may he move our minds.',
            kn: 'ಗಾಯತ್ರಿ — ಪ್ರತಿ ಗುಟುಕಿಗೆ ಒಂದು ಪಾದ: ಸವಿತೃದೇವನ ಪೂಜನೀಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'आपो हि ष्ठा मयोभुवः ।\nता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥',
          meaning: {
            en: 'O Waters, you are the bringers of happiness. Fill us with strength, so that we may behold great joy.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನೀವು ಸುಖವನ್ನು ಕೊಡುವವರು. ನಮಗೆ ಶಕ್ತಿಯನ್ನು ತುಂಬಿ, ಮಹತ್ತಾದ ಆನಂದವನ್ನು ಕಾಣುವಂತೆ ಮಾಡಿ.',
          },
        },
        {
          text: 'यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः ।\nउशतीरिव मातरः ॥',
          meaning: {
            en: 'Let us share here in your most auspicious essence, as loving mothers share with their children.',
            kn: 'ಪ್ರೀತಿಯುಳ್ಳ ತಾಯಂದಿರು ಮಕ್ಕಳಿಗೆ ಉಣಿಸುವಂತೆ, ನಿಮ್ಮಲ್ಲಿರುವ ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ರಸವನ್ನು ನಮಗೂ ಇಲ್ಲಿ ಕರುಣಿಸಿ.',
          },
        },
        {
          text: 'तस्मा अरं गमाम वः ।\nयस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'May we readily attain that essence of yours with which you nourish all that dwells in the world; O Waters, bring us to new life.',
            kn: 'ಲೋಕದ ಜೀವಿಗಳನ್ನು ಪೋಷಿಸುವ ನಿಮ್ಮ ಆ ರಸವನ್ನು ನಾವು ಸಂಪೂರ್ಣವಾಗಿ ಪಡೆಯುವಂತಾಗಲಿ; ಓ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಹೊಸ ಚೈತನ್ಯವನ್ನು ಕೊಡಿ.',
          },
        },
        {
          text: 'ॐ भूः । ॐ भुवः । ॐ स्वः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhuh to Satya. We meditate on the adorable radiance of the divine Savitri, who moves our minds. Om — he is the waters, the light, the essence, the immortal, Brahman; he fills earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಪೂಜನೀಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಅವನೇ; ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮನೂ ಅವನೇ.',
          },
        },
      ],
    },
    {
      title: 'गुरुवन्दनम्',
      titleEn: 'Salutation to the gurus and the Lord (short form)',
      note: 'Standing before the shrine with folded hands, bow to your guru, to Sri Madhvacharya and to Vedavyasa, and then to the Lord.',
      noteKn: 'ದೇವರ ಮನೆಯ ಮುಂದೆ ಕೈಮುಗಿದು ನಿಂತು ನಿಮ್ಮ ಗುರುಗಳಿಗೂ ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರಿಗೂ ವೇದವ್ಯಾಸರಿಗೂ, ನಂತರ ಭಗವಂತನಿಗೂ ನಮಸ್ಕರಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'श्रीगुरुभ्यो नमः । श्रीपरमगुरुभ्यो नमः ।\nश्रीमदानन्दतीर्थभगवत्पादाचार्येभ्यो नमः ।\nश्रीवेदव्यासाय नमः ॥',
          meaning: {
            en: 'Salutations to my guru, to the guru’s guru, to Sri Madhvacharya (Anandatirtha), and to Sri Vedavyasa.',
            kn: 'ನನ್ನ ಗುರುಗಳಿಗೆ, ಪರಮಗುರುಗಳಿಗೆ, ಶ್ರೀಮದಾನಂದತೀರ್ಥ ಭಗವತ್ಪಾದಾಚಾರ್ಯರಿಗೆ (ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರಿಗೆ) ಮತ್ತು ಶ್ರೀವೇದವ್ಯಾಸರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'नारायणाय परिपूर्णगुणार्णवाय\nविश्वोदयस्थितिलयोन्नियतिप्रदाय ।\nज्ञानप्रदाय विबुधासुरसौख्यदुःख-\nसत्कारणाय वितताय नमो नमस्ते ॥',
          meaning: {
            en: 'Salutations again and again to Narayana, the ocean of all perfect qualities, who gives the world its rise, sustenance, dissolution and governance, who grants knowledge, who is the true cause of the joy of the gods and the sorrow of the demons, and who pervades everything.',
            kn: 'ಸಮಸ್ತ ಗುಣಗಳಿಂದ ಪರಿಪೂರ್ಣನಾದ ಸಮುದ್ರದಂತಿರುವ, ಜಗತ್ತಿನ ಸೃಷ್ಟಿ–ಸ್ಥಿತಿ–ಲಯ–ನಿಯಮನಗಳನ್ನು ಮಾಡುವ, ಜ್ಞಾನವನ್ನು ಕೊಡುವ, ದೇವತೆಗಳ ಸುಖಕ್ಕೂ ಅಸುರರ ದುಃಖಕ್ಕೂ ನಿಜವಾದ ಕಾರಣನಾದ, ಸರ್ವವ್ಯಾಪಿಯಾದ ನಾರಾಯಣನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'द्वारपालनमनम्',
      titleEn: 'Door-keepers and opening the shrine (short form)',
      note: 'Wash your hands and feet and go to the door of the shrine. Bow to the door-keepers of the four doors in turn — east, south, west, north — as though asking their permission to enter. Then open the shrine (or the puja box, samputa) reciting वायवा याहि…, stepping in with the right foot first, without touching the threshold.',
      noteKn: 'ಕೈಕಾಲು ತೊಳೆದು ದೇವರ ಮನೆಯ ಬಾಗಿಲಿಗೆ ಬನ್ನಿ. ಪ್ರವೇಶಕ್ಕೆ ಅನುಮತಿ ಕೇಳುವಂತೆ ನಾಲ್ಕು ದ್ವಾರಗಳ ದ್ವಾರಪಾಲಕರಿಗೆ — ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ — ಕ್ರಮವಾಗಿ ನಮಸ್ಕರಿಸಿ. ನಂತರ “ವಾಯವಾ ಯಾಹಿ…” ಹೇಳುತ್ತಾ ದೇವರ ಮನೆಯನ್ನು (ಅಥವಾ ದೇವರ ಪೆಟ್ಟಿಗೆ — ಸಂಪುಟವನ್ನು) ತೆರೆಯಿರಿ; ಹೊಸ್ತಿಲನ್ನು ಮುಟ್ಟದೆ ಬಲಗಾಲಿಟ್ಟು ಒಳಗೆ ಹೋಗಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'पूर्वद्वारे श्रियै नमः । जयाय नमः । विजयाय नमः ।\nदक्षिणद्वारे श्रियै नमः । बलाय नमः । प्रबलाय नमः ।\nपश्चिमद्वारे श्रियै नमः । नन्दाय नमः । सुनन्दाय नमः ।\nउत्तरद्वारे श्रियै नमः । कुमुदाय नमः । कुमुदाक्षाय नमः ॥',
          meaning: {
            en: 'At the eastern door, salutations to Sri (Lakshmi) and to the door-keepers Jaya and Vijaya; at the southern door to Sri, Bala and Prabala; at the western door to Sri, Nanda and Sunanda; at the northern door to Sri, Kumuda and Kumudaksha.',
            kn: 'ಪೂರ್ವ ದ್ವಾರದಲ್ಲಿ ಶ್ರೀ (ಲಕ್ಷ್ಮೀ)ಗೂ ದ್ವಾರಪಾಲಕರಾದ ಜಯ–ವಿಜಯರಿಗೂ; ದಕ್ಷಿಣ ದ್ವಾರದಲ್ಲಿ ಶ್ರೀ, ಬಲ, ಪ್ರಬಲರಿಗೂ; ಪಶ್ಚಿಮ ದ್ವಾರದಲ್ಲಿ ಶ್ರೀ, ನಂದ, ಸುನಂದರಿಗೂ; ಉತ್ತರ ದ್ವಾರದಲ್ಲಿ ಶ್ರೀ, ಕುಮುದ, ಕುಮುದಾಕ್ಷರಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'वायवा याहि दर्शतेमे सोमा अरंकृताः ।\nतेषां पाहि श्रुधी हवम् ॥',
          meaning: {
            en: 'Come, O Vayu, fair to behold; these offerings are made ready. Partake of them and hear our call. (Rigveda 1.2.1, said while opening the shrine.)',
            kn: 'ಓ ದರ್ಶನೀಯನಾದ ವಾಯುದೇವನೇ, ಬಾ; ಈ ಸೋಮಾದಿಗಳು ಸಿದ್ಧವಾಗಿವೆ. ಅವನ್ನು ಸ್ವೀಕರಿಸಿ ನಮ್ಮ ಕರೆಯನ್ನು ಕೇಳು. (ಋಗ್ವೇದ ೧.೨.೧; ದೇವರ ಮಂಟಪ ತೆರೆಯುವಾಗ.)',
          },
        },
      ],
    },
    {
      title: 'दीपप्रज्वलनम्',
      titleEn: 'Lighting the lamp and removing obstacles (short form)',
      note: 'Light (or brighten) the lamp with अग्निनाग्निः…. Then recite अपसर्पन्तु… and snap the fingers around yourself to drive away obstructing beings.',
      noteKn: '“ಅಗ್ನಿನಾಗ್ನಿಃ…” ಎಂದು ದೀಪವನ್ನು ಹಚ್ಚಿ (ಅಥವಾ ದೊಡ್ಡದು ಮಾಡಿ). ನಂತರ “ಅಪಸರ್ಪಂತು…” ಹೇಳುತ್ತಾ ನಿಮ್ಮ ಸುತ್ತಲೂ ಚಿಟಿಕೆ ಹೊಡೆದು ವಿಘ್ನಕಾರಿ ಭೂತಗಳನ್ನು ಓಡಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अग्निनाग्निः समिध्यते कविर्गृहपतिर्युवा ।\nहव्यवाड्जुह्वास्यः ॥',
          meaning: {
            en: 'Fire is kindled by fire — the wise, ever-young lord of the house, the bearer of offerings whose mouth is the ladle. (Rigveda 1.12.6, said while lighting the lamp.)',
            kn: 'ಅಗ್ನಿಯಿಂದಲೇ ಅಗ್ನಿ ಪ್ರಜ್ವಲಿಸುತ್ತದೆ — ಜ್ಞಾನಿಯೂ ಮನೆಯ ಒಡೆಯನೂ ನಿತ್ಯಯುವನೂ ಹವಿಸ್ಸನ್ನು ಒಯ್ಯುವವನೂ ಆದ ಅಗ್ನಿ. (ಋಗ್ವೇದ ೧.೧೨.೬; ದೀಪ ಹಚ್ಚುವಾಗ.)',
          },
        },
        {
          text: 'अपसर्पन्तु ये भूता ये भूता भुवि संस्थिताः ।\nये भूता विघ्नकर्तारस्ते नश्यन्तु शिवाज्ञया ॥\nअपक्रामन्तु ये भूताः क्रूराश्चैव तु राक्षसाः ।\nये चात्र निवसन्त्येव देवता भुवि सन्ततम् ।\nतेषामप्यविरोधेन ब्रह्मकर्म समारभे ॥',
          meaning: {
            en: 'May the beings that dwell on the earth move away; may those that cause obstacles perish at the auspicious command. Let the beings and cruel rakshasas depart. Without offending the deities who always dwell here, I begin this sacred rite.',
            kn: 'ಭೂಮಿಯಲ್ಲಿರುವ ಭೂತಗಳು ದೂರ ಸರಿಯಲಿ; ವಿಘ್ನವನ್ನುಂಟುಮಾಡುವವು ಮಂಗಳಕರ ಆಜ್ಞೆಯಿಂದ ನಾಶವಾಗಲಿ. ಭೂತಗಳೂ ಕ್ರೂರ ರಾಕ್ಷಸರೂ ತೊಲಗಲಿ. ಇಲ್ಲಿ ಸದಾ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ವಿರೋಧವಾಗದಂತೆ ಈ ಬ್ರಹ್ಮಕರ್ಮವನ್ನು ಆರಂಭಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'घण्टानादः',
      titleEn: 'Ringing the bell and waking the Lord (short form)',
      note: 'Ring the bell with the left hand while reciting आगमार्थं…, inviting the gods and sending away harmful beings. Then, with folded hands, pray to the Lord to rise for his worship and to look upon you with compassion.',
      noteKn: 'ಎಡಗೈಯಿಂದ ಗಂಟೆ ಬಾರಿಸುತ್ತಾ “ಆಗಮಾರ್ಥಂ…” ಹೇಳಿ — ದೇವತೆಗಳನ್ನು ಬರಮಾಡಿ ದುಷ್ಟಶಕ್ತಿಗಳನ್ನು ಓಡಿಸುವುದು. ನಂತರ ಕೈಮುಗಿದು ಪೂಜೆಗಾಗಿ ಎದ್ದು ಕರುಣೆಯಿಂದ ನೋಡೆಂದು ಭಗವಂತನನ್ನು ಪ್ರಾರ್ಥಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'आगमार्थं तु देवानां गमनार्थं तु रक्षसाम् ।\nकुर्वे घण्टारवं तत्र देवताह्वानलाञ्छनम् ॥',
          meaning: {
            en: 'I ring the bell, the sign that invites the gods, so that the gods may come and the demonic forces depart.',
            kn: 'ದೇವತೆಗಳು ಬರಲೆಂದೂ ರಾಕ್ಷಸರು ತೊಲಗಲೆಂದೂ, ದೇವತೆಗಳನ್ನು ಆಹ್ವಾನಿಸುವ ಸಂಕೇತವಾದ ಘಂಟಾನಾದವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आयताभ्यां विशालाभ्यां शीतलाभ्यां कृपानिधे ।\nकरुणारसपूर्णाभ्यां लोचनाभ्यां विलोकय ॥',
          meaning: {
            en: 'O treasure of grace, look upon me with your long, wide, cool eyes, full of compassion. (Said while waking the Lord for worship.)',
            kn: 'ಓ ಕೃಪಾನಿಧಿಯೇ, ನೀಳವಾದ, ವಿಶಾಲವಾದ, ತಂಪಾದ, ಕರುಣೆಯಿಂದ ತುಂಬಿದ ಕಣ್ಣುಗಳಿಂದ ನನ್ನನ್ನು ನೋಡು. (ಪೂಜೆಗಾಗಿ ದೇವರನ್ನು ಎಬ್ಬಿಸುವಾಗ.)',
          },
        },
      ],
    },
    {
      title: 'निर्माल्यविसर्जनम्',
      titleEn: 'Removing yesterday’s offerings and the morning bath (fuller puja)',
      note: 'With the thumb and ring finger remove yesterday’s flowers, tulasi and sandal (nirmalya) and keep them aside in a clean place. Place the Saligramas and images in the bathing plate. Take water from the kalasha in the panchapatre, add tulasi, consecrate it by reciting ॐ नमो नारायणाय eight times, and pour it over the Lord with the conch while reciting the Ambhrini Sukta (open “Ambhrini Sukta” in Vedic). This water is the nirmalya-tirtha. With it bathe, three ladles each, the conch and image of Lakshmi (Sri Sukta), Mukhyaprana — Hanuman, Bhima, Madhva — (Balittha Sukta and Vayu Stuti: open them in the library), Garuda, Shesha and the gurus (Raghavendra Stotra). Keep Mukhyaprana’s tirtha separately. Offer a tulasi leaf and a little sugar as naivedya. Families who do only the short daily form go on from here to the abhisheka and the upacharas below without the separate morning bath.',
      noteKn: 'ಹೆಬ್ಬೆರಳು ಮತ್ತು ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಹಿಂದಿನ ದಿನದ ಹೂವು, ತುಳಸಿ, ಗಂಧ (ನಿರ್ಮಾಲ್ಯ)ವನ್ನು ತೆಗೆದು ಶುದ್ಧ ಸ್ಥಳದಲ್ಲಿಡಿ. ಸಾಲಿಗ್ರಾಮಗಳನ್ನೂ ಪ್ರತಿಮೆಗಳನ್ನೂ ಅಭಿಷೇಕದ ತಟ್ಟೆಯಲ್ಲಿಡಿ. ಕಲಶದ ನೀರನ್ನು ಪಂಚಪಾತ್ರೆಗೆ ತೆಗೆದು ತುಳಸಿ ಹಾಕಿ, “ಓಂ ನಮೋ ನಾರಾಯಣಾಯ” ಎಂದು ಎಂಟು ಬಾರಿ ಅಭಿಮಂತ್ರಿಸಿ, ಅಂಭೃಣೀ ಸೂಕ್ತ ಹೇಳುತ್ತಾ (ವೈದಿಕ ವಿಭಾಗದಲ್ಲಿ “ಅಂಭೃಣೀಸೂಕ್ತಂ” ತೆರೆಯಿರಿ) ಶಂಖದಿಂದ ದೇವರಿಗೆ ಅಭಿಷೇಕ ಮಾಡಿ. ಈ ನೀರೇ ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥ. ಇದರಿಂದ ಶಂಖಕ್ಕೂ ಲಕ್ಷ್ಮೀ ಪ್ರತಿಮೆಗೂ (ಶ್ರೀಸೂಕ್ತ), ಮುಖ್ಯಪ್ರಾಣರಿಗೆ — ಹನುಮ, ಭೀಮ, ಮಧ್ವರಿಗೆ — (ಬಳಿತ್ಥಾ ಸೂಕ್ತ, ವಾಯುಸ್ತುತಿ: ಗ್ರಂಥಾಲಯದಲ್ಲಿ ತೆರೆಯಿರಿ), ಗರುಡ, ಶೇಷ ಮತ್ತು ಗುರುಗಳಿಗೆ (ರಾಘವೇಂದ್ರ ಸ್ತೋತ್ರ) ತಲಾ ಮೂರು ಉದ್ಧರಣೆ ಅಭಿಷೇಕ ಮಾಡಿ. ಮುಖ್ಯಪ್ರಾಣರ ತೀರ್ಥವನ್ನು ಬೇರೆ ಇಟ್ಟುಕೊಳ್ಳಿ. ಒಂದು ತುಳಸೀದಳ ಮತ್ತು ಸ್ವಲ್ಪ ಸಕ್ಕರೆ ನೈವೇದ್ಯ ಮಾಡಿ. ಸಂಕ್ಷಿಪ್ತ ನಿತ್ಯಕ್ರಮ ಮಾಡುವವರು ಈ ಬೆಳಗಿನ ಪ್ರತ್ಯೇಕ ಅಭಿಷೇಕವಿಲ್ಲದೆ ಮುಂದಿನ ಅಭಿಷೇಕ–ಉಪಚಾರಗಳಿಗೆ ಹೋಗಬಹುದು.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ॐ नमो नारायणाय ॥',
          meaning: {
            en: 'Om, salutations to Narayana — the eight-syllabled root mantra (mula-mantra) used throughout the Madhva puja.',
            kn: 'ಓಂ ನಮೋ ನಾರಾಯಣಾಯ — ಶ್ರೀನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರ; ಮಾಧ್ವ ಪೂಜೆಯುದ್ದಕ್ಕೂ ಬಳಸುವ ಅಷ್ಟಾಕ್ಷರ ಮೂಲಮಂತ್ರ.',
          },
        },
      ],
    },
    {
      title: 'प्रार्थना सङ्कल्पश्च',
      titleEn: 'Prayer and sankalpa (short form)',
      note: 'With hands joined in the prayer gesture, pray to the Lord who is worshipped by Vayu, remembering that you are only his reflection. Then do achamana and pranayama (as in Sandhyavandane) and make the sankalpa, holding akshata and water: replace each अमुक with today’s details from the panchanga (see the panchanga card at the top). Let the water fall into the plate.',
      noteKn: 'ಪ್ರಾರ್ಥನಾಮುದ್ರೆಯಿಂದ ಕೈಜೋಡಿಸಿ, ವಾಯುದೇವರಿಂದ ಆರಾಧಿಸಲ್ಪಡುವ ಭಗವಂತನನ್ನು, ನಾನು ಅವನ ಪ್ರತಿಬಿಂಬ ಮಾತ್ರ ಎಂದು ನೆನೆದು ಪ್ರಾರ್ಥಿಸಿ. ನಂತರ (ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿರುವಂತೆ) ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಸಂಕಲ್ಪ ಮಾಡಿ: “ಅಮುಕ” ಬದಲು ಇಂದಿನ ಪಂಚಾಂಗ ವಿವರ ಹೇಳಿ (ಮೇಲ್ಭಾಗದ ಪಂಚಾಂಗ ಕಾರ್ಡ್ ನೋಡಿ). ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'नि षु सीद गणपते गणेषु त्वामाहुर्विप्रतमं कवीनाम् ।\nन ऋते त्वत्क्रियते किं चनारे महामर्कं मघवञ्चित्रमर्च ॥',
          meaning: {
            en: 'Be seated, O lord of hosts, among your hosts; they call you the wisest of seers. Nothing near or far is done without you; O bountiful one, honour our great and wonderful hymn. (Rigveda 10.112.9, said to the Lord before the puja.)',
            kn: 'ಓ ಗಣಪತಿಯೇ (ಸಮೂಹಗಳ ಒಡೆಯನೇ), ನಿನ್ನ ಗಣಗಳ ನಡುವೆ ಕುಳಿತುಕೋ; ಕವಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠ ಜ್ಞಾನಿ ನೀನೆಂದು ಹೇಳುತ್ತಾರೆ. ನಿನ್ನನ್ನು ಬಿಟ್ಟು ಹತ್ತಿರದಲ್ಲಾಗಲೀ ದೂರದಲ್ಲಾಗಲೀ ಏನೂ ನಡೆಯುವುದಿಲ್ಲ; ನಮ್ಮ ಈ ಮಹತ್ತಾದ ಸ್ತುತಿಯನ್ನು ಆದರಿಸು. (ಋಗ್ವೇದ ೧೦.೧೧೨.೯; ಪೂಜೆಗೆ ಮೊದಲು ಭಗವಂತನ ಪ್ರಾರ್ಥನೆ.)',
          },
        },
        {
          text: 'आराध्यसे प्राणभृतां प्रणेत्रा\nप्राणाधिनाथेन समीरणेन ।\nनारायण ज्ञानसुखैकपूर्ण\nस्वामिन् मयि श्रीरमण प्रसीद ॥',
          meaning: {
            en: 'O Narayana, full of knowledge and bliss alone, you are worshipped by Samirana (Vayu), the lord of the life-breaths who leads all living beings. O Master, beloved of Sri, be gracious to me.',
            kn: 'ಓ ಜ್ಞಾನಾನಂದ ಪರಿಪೂರ್ಣನಾದ ನಾರಾಯಣನೇ, ಸಮಸ್ತ ಪ್ರಾಣಿಗಳನ್ನು ನಡೆಸುವ ಪ್ರಾಣಾಧಿಪತಿಯಾದ ವಾಯುದೇವರಿಂದ ನೀನು ಆರಾಧಿಸಲ್ಪಡುತ್ತೀಯೆ. ಓ ಸ್ವಾಮಿ, ಶ್ರೀರಮಣನೇ, ನನ್ನ ಮೇಲೆ ಪ್ರಸನ್ನನಾಗು.',
          },
        },
        {
          text: 'बिम्बोऽसि प्रतिबिम्बोऽस्मि तव यद्यपि चान्तरम् ।\nस्वामिन् निर्दोष मद्दोषान् विरेचय नमोऽस्तु ते ॥',
          meaning: {
            en: 'You are the original (bimba) and I am your reflection, though there is a vast difference between us. O faultless Master, cleanse me of my faults; salutations to you.',
            kn: 'ನೀನು ಬಿಂಬ, ನಾನು ನಿನ್ನ ಪ್ರತಿಬಿಂಬ — ಆದರೂ ನಮ್ಮಿಬ್ಬರ ನಡುವೆ ಅಪಾರ ಅಂತರವಿದೆ. ಓ ನಿರ್ದೋಷನಾದ ಸ್ವಾಮಿಯೇ, ನನ್ನ ದೋಷಗಳನ್ನು ತೊಳೆದುಹಾಕು; ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'आचम्य । प्राणानायम्य ॥',
          meaning: {
            en: 'Do achamana and then pranayama (breath control with the Gayatri and its vyahritis), exactly as at the beginning.',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಆಚಮನ ಮಾಡಿ, ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಗಾಯತ್ರಿಯನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಉಸಿರಿನ ನಿಯಮನ).',
          },
        },
        {
          text: 'शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य\nअद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nअष्टाविंशतितमे कलियुगे प्रथमपादे\nजम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे\nअमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'At this good and auspicious moment, today, in the age that runs by the command of Vishnu — the second half of Brahma’s life, the Shveta-varaha kalpa, the Vaivasvata manvantara, the first quarter of the twenty-eighth Kali-yuga — in Bharatavarsha, in Dandakaranya south of the Godavari, in the Shalivahana era, in the present year, ayana, season, month, fortnight, tithi, weekday and star so named, on this auspicious day so marked…',
            kn: 'ಶುಭವೂ ಮಂಗಳಕರವೂ ಆದ ಈ ಮುಹೂರ್ತದಲ್ಲಿ, ಇಂದು, ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದ ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಇಪ್ಪತ್ತೆಂಟನೆಯ ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಭರತವರ್ಷದಲ್ಲಿ ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं\nभगवतो बलेन भगवतो वीर्येण भगवतस्तेजसा भगवतः कर्मणा\nभगवता सञ्जीवितस्वान्तवपुश्चिदिन्द्रियोऽहं\nश्रीलक्ष्मीनारायणस्य ध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥',
          meaning: {
            en: 'Prompted by Sri Lakshminarayana who dwells within Mukhyaprana, the beloved of Bharati, and for his pleasure — by the Lord’s strength, valour, splendour and action, my mind, body, consciousness and senses kept alive by the Lord — I shall perform the sixteen-step worship of Sri Lakshminarayana, beginning with meditation and invocation.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ — ಭಗವಂತನ ಬಲ, ವೀರ್ಯ, ತೇಜಸ್ಸು, ಕರ್ಮಗಳಿಂದ, ಭಗವಂತನಿಂದಲೇ ಜೀವಂತವಾಗಿರುವ ಮನಸ್ಸು, ದೇಹ, ಚೈತನ್ಯ, ಇಂದ್ರಿಯಗಳುಳ್ಳ ನಾನು — ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಧ್ಯಾನ–ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'गणपतिस्मरणं सङ्कल्पश्च',
      titleEn: 'Remembering Ganapati and sankalpa (short form)',
      note: 'Light the lamp. Tapping the temples lightly with the knuckles, remember Ganapati with शुक्लाम्बरधरम्… so that the puja goes without obstacles. Do achamana and pranayama (as in Sandhyavandane), then make the sankalpa holding akshata and water, replacing each अमुक with today’s details from the panchanga (see the panchanga card at the top). Let the water fall into the plate.',
      noteKn: 'ದೀಪ ಹಚ್ಚಿ. ಮುಷ್ಟಿಯಿಂದ ಹಣೆಯ ಎರಡೂ ಪಕ್ಕ ಮೆಲ್ಲನೆ ತಟ್ಟಿಕೊಳ್ಳುತ್ತಾ, ಪೂಜೆ ನಿರ್ವಿಘ್ನವಾಗಿ ನಡೆಯಲೆಂದು “ಶುಕ್ಲಾಂಬರಧರಂ…” ಎಂದು ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸಿ. (ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿರುವಂತೆ) ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಸಂಕಲ್ಪ ಮಾಡಿ; “ಅಮುಕ” ಬದಲು ಇಂದಿನ ಪಂಚಾಂಗ ವಿವರ ಹೇಳಿ (ಮೇಲ್ಭಾಗದ ಪಂಚಾಂಗ ಕಾರ್ಡ್ ನೋಡಿ). ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत्सर्वविघ्नोपशान्तये ॥',
          meaning: {
            en: 'To remove all obstacles, one should meditate on the all-pervading one clad in white, moon-coloured, four-armed, with a gracious face.',
            kn: 'ಎಲ್ಲಾ ವಿಘ್ನಗಳ ಶಾಂತಿಗಾಗಿ, ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಚಂದ್ರನಂತೆ ಬಿಳುಪಾದ, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳ, ಪ್ರಸನ್ನಮುಖನಾದ ಸರ್ವವ್ಯಾಪಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          text: 'आचम्य । प्राणानायम्य ॥',
          meaning: {
            en: 'Do achamana and then pranayama (breath control with the Gayatri and its vyahritis), exactly as at the beginning.',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಆಚಮನ ಮಾಡಿ, ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಗಾಯತ್ರಿಯನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಉಸಿರಿನ ನಿಯಮನ).',
          },
        },
        {
          text: 'शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य\nअद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nअष्टाविंशतितमे कलियुगे प्रथमपादे\nजम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे\nअमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'At this good and auspicious moment, today, in the age that runs by the command of Vishnu — the second half of Brahma’s life, the Shveta-varaha kalpa, the Vaivasvata manvantara, the first quarter of the twenty-eighth Kali-yuga — in Bharatavarsha, in Dandakaranya south of the Godavari, in the Shalivahana era, in the present year, ayana, season, month, fortnight, tithi, weekday and star so named, on this auspicious day so marked…',
            kn: 'ಶುಭವೂ ಮಂಗಳಕರವೂ ಆದ ಈ ಮುಹೂರ್ತದಲ್ಲಿ, ಇಂದು, ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದ ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಇಪ್ಪತ್ತೆಂಟನೆಯ ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಭರತವರ್ಷದಲ್ಲಿ ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nअस्माकं सकुटुम्बानां क्षेमस्थैर्यायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nयावच्छक्ति ध्यानावाहनादिषोडशोपचारैः पञ्चायतनदेवतापूजां करिष्ये ॥',
          meaning: {
            en: 'For the removal of all my accumulated sins and for the pleasure of the Supreme Lord, and for the increase of the welfare, steadiness, long life, health and prosperity of us and our family, I shall worship the five deities of the panchayatana with the sixteen offerings, beginning with meditation and invocation, as far as I am able.',
            kn: 'ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ನಮ್ಮ ಕುಟುಂಬದ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ಆಯುಸ್ಸು, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ವೃದ್ಧಿಗಾಗಿ, ಶಕ್ತಿಯಿದ್ದಷ್ಟು ಧ್ಯಾನ–ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರಗಳಿಂದ ಪಂಚಾಯತನ ದೇವತೆಗಳ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'कलशपूजा',
      titleEn: 'Kalasha puja (short form)',
      note: 'Keep at least two water pots: one for bathing the Lord and a full kalasha (purna-kumbha); larger households keep more for naivedya and sprinkling. Put tulasi in them, apply gandha and akshata on four sides, and touch the bathing kalasha with the right hand while reciting these verses, inviting the sacred rivers into it. Recite ॐ नमो नारायणाय twelve times over it and show the mudras taught to you (Garuda, dhenu, shankha, chakra, gada) for removing poison, making it nectar, purifying, protecting and sealing the directions.',
      noteKn: 'ಕನಿಷ್ಠ ಎರಡು ಕಲಶಗಳನ್ನಿಡಿ: ದೇವರ ಅಭಿಷೇಕಕ್ಕೆ ಒಂದು (ಸ್ನಾನೀಯ ಕಲಶ), ಇನ್ನೊಂದು ಪೂರ್ಣಕಲಶ; ದೊಡ್ಡ ಮನೆತನಗಳಲ್ಲಿ ನೈವೇದ್ಯ, ಪ್ರೋಕ್ಷಣೆಗಳಿಗೂ ಬೇರೆ ಕಲಶಗಳಿರುತ್ತವೆ. ಅವುಗಳಲ್ಲಿ ತುಳಸಿ ಹಾಕಿ, ನಾಲ್ಕು ದಿಕ್ಕಿಗೂ ಗಂಧಾಕ್ಷತೆ ಹಚ್ಚಿ, ಸ್ನಾನೀಯ ಕಲಶವನ್ನು ಬಲಗೈಯಿಂದ ಮುಟ್ಟಿಕೊಂಡು ಈ ಶ್ಲೋಕಗಳಿಂದ ಪವಿತ್ರ ನದಿಗಳನ್ನು ಆಹ್ವಾನಿಸಿ. ಅದರ ಮೇಲೆ “ಓಂ ನಮೋ ನಾರಾಯಣಾಯ” ಎಂದು ಹನ್ನೆರಡು ಬಾರಿ ಜಪಿಸಿ, ಕಲಿತ ಮುದ್ರೆಗಳನ್ನು (ಗರುಡ, ಧೇನು, ಶಂಖ, ಚಕ್ರ, ಗದಾ) ನಿರ್ವಿಷೀಕರಣ, ಅಮೃತೀಕರಣ, ಪವಿತ್ರೀಕರಣ, ಸಂರಕ್ಷಣೆ, ದಿಗ್ಬಂಧನಗಳಿಗಾಗಿ ತೋರಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'कलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः ।\nमूले तत्र स्थितो ब्रह्मा मध्ये मातृगणाः स्मृताः ॥',
          meaning: {
            en: 'Vishnu dwells in the mouth of the kalasha and Rudra in its neck; Brahma stands at its base, and the hosts of Mother-goddesses are said to be in its middle.',
            kn: 'ಕಲಶದ ಮುಖದಲ್ಲಿ ವಿಷ್ಣುವೂ, ಕಂಠದಲ್ಲಿ ರುದ್ರನೂ, ಮೂಲದಲ್ಲಿ ಬ್ರಹ್ಮದೇವರೂ, ಮಧ್ಯದಲ್ಲಿ ಮಾತೃಗಣಗಳೂ ನೆಲೆಸಿದ್ದಾರೆ.',
          },
        },
        {
          text: 'कुक्षौ तु सागराः सर्वे सप्तद्वीपा वसुन्धरा ।\nऋग्वेदोऽथ यजुर्वेदः सामवेदो ह्यथर्वणः ॥\nअङ्गैश्च सहिताः सर्वे कलशं तु समाश्रिताः ।\nअत्र गायत्री सावित्री शान्तिः पुष्टिकरी तथा ॥',
          meaning: {
            en: 'In its belly dwell all the oceans and the earth with its seven continents; the Rigveda, Yajurveda, Samaveda and Atharvaveda with their limbs all rest in the kalasha. Here too are Gayatri, Savitri, and the powers that bring peace and nourishment.',
            kn: 'ಕಲಶದ ಹೊಟ್ಟೆಯಲ್ಲಿ ಎಲ್ಲ ಸಮುದ್ರಗಳೂ ಸಪ್ತದ್ವೀಪಗಳುಳ್ಳ ಭೂಮಿಯೂ ಇವೆ; ಋಗ್ವೇದ, ಯಜುರ್ವೇದ, ಸಾಮವೇದ, ಅಥರ್ವವೇದಗಳು ಅಂಗಗಳ ಸಹಿತ ಕಲಶವನ್ನು ಆಶ್ರಯಿಸಿವೆ. ಇಲ್ಲಿ ಗಾಯತ್ರೀ, ಸಾವಿತ್ರೀ, ಶಾಂತಿ ಮತ್ತು ಪುಷ್ಟಿಯನ್ನು ಕೊಡುವ ಶಕ್ತಿಗಳೂ ಇವೆ.',
          },
        },
        {
          text: 'सर्वे समुद्राः सरितस्तीर्थानि जलदा नदाः ।\nआयान्तु देवपूजार्थं दुरितक्षयकारकाः ॥',
          meaning: {
            en: 'May all the oceans, rivers, holy waters, clouds and streams, which destroy sin, come here for the worship of the Lord.',
            kn: 'ಪಾಪನಾಶಕವಾದ ಎಲ್ಲ ಸಮುದ್ರಗಳೂ ನದಿಗಳೂ ತೀರ್ಥಗಳೂ ಮೋಡಗಳೂ ಪ್ರವಾಹಗಳೂ ದೇವರ ಪೂಜೆಗಾಗಿ ಇಲ್ಲಿಗೆ ಬರಲಿ.',
          },
        },
        {
          text: 'गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥',
          meaning: {
            en: 'O Ganga, Yamuna, Godavari, Sarasvati, Narmada, Sindhu and Kaveri, be present in this water.',
            kn: 'ಓ ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು, ಕಾವೇರಿ ನದಿಗಳೇ, ಈ ಜಲದಲ್ಲಿ ಸಾನ್ನಿಧ್ಯವನ್ನು ನೀಡಿರಿ.',
          },
        },
        {
          text: 'इमं मे गङ्गे यमुने सरस्वति शुतुद्रि स्तोमं सचता परुष्ण्या ।\nअसिक्न्या मरुद्वृधे वितस्तयार्जीकीये शृणुह्या सुषोमया ॥',
          meaning: {
            en: 'O Ganga, Yamuna, Sarasvati, Shutudri, with Parushni; O Marudvridha with Asikni and Vitasta; O Arjikiya with Sushoma — hear this hymn of mine and accept it. (Rigveda 10.75.5, inviting the sacred rivers into the kalasha.)',
            kn: 'ಓ ಗಂಗೆ, ಯಮುನೆ, ಸರಸ್ವತಿ, ಶುತುದ್ರಿ, ಪರುಷ್ಣಿಯರೇ; ಅಸಿಕ್ನಿ, ವಿತಸ್ತೆಯರೊಡನೆ ಮರುದ್ವೃಧೆಯೇ; ಸುಷೋಮೆಯೊಡನೆ ಆರ್ಜೀಕೀಯೆಯೇ — ನನ್ನ ಈ ಸ್ತುತಿಯನ್ನು ಕೇಳಿ ಸ್ವೀಕರಿಸಿ. (ಋಗ್ವೇದ ೧೦.೭೫.೫; ಪವಿತ್ರ ನದಿಗಳನ್ನು ಕಲಶಕ್ಕೆ ಆಹ್ವಾನಿಸುವುದು.)',
          },
        },
        {
          text: 'ॐ नमो नारायणाय ॥',
          meaning: {
            en: 'Om, salutations to Narayana — the eight-syllabled root mantra (mula-mantra) used throughout the Madhva puja.',
            kn: 'ಓಂ ನಮೋ ನಾರಾಯಣಾಯ — ಶ್ರೀನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರ; ಮಾಧ್ವ ಪೂಜೆಯುದ್ದಕ್ಕೂ ಬಳಸುವ ಅಷ್ಟಾಕ್ಷರ ಮೂಲಮಂತ್ರ.',
          },
        },
      ],
    },
    {
      title: 'कलशपूजा घण्टापूजा च',
      titleEn: 'Kalasha and bell (short form)',
      note: 'Fill the kalasha with fresh water, put in a flower, apply gandha and akshata on it, and cover its mouth with the right palm while reciting these verses. Show the dhenu (cow) mudra over it. With this water the deities, the puja items and yourself are sprinkled. Then offer gandha and akshata to the bell and ring it with आगमार्थं….',
      noteKn: 'ಕಲಶದಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ, ಒಂದು ಹೂವು ಹಾಕಿ, ಗಂಧಾಕ್ಷತೆ ಹಚ್ಚಿ, ಬಲ ಅಂಗೈಯಿಂದ ಅದರ ಬಾಯಿ ಮುಚ್ಚಿ ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ. ಅದರ ಮೇಲೆ ಧೇನುಮುದ್ರೆ ತೋರಿಸಿ. ಈ ನೀರಿನಿಂದ ದೇವತೆಗಳಿಗೂ ಪೂಜಾಸಾಮಗ್ರಿಗಳಿಗೂ ನಿಮಗೂ ಪ್ರೋಕ್ಷಣೆ. ನಂತರ ಗಂಟೆಗೆ ಗಂಧಾಕ್ಷತೆ ಅರ್ಪಿಸಿ “ಆಗಮಾರ್ಥಂ…” ಎಂದು ಬಾರಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'कलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः ।\nमूले तत्र स्थितो ब्रह्मा मध्ये मातृगणाः स्मृताः ॥',
          meaning: {
            en: 'Vishnu dwells in the mouth of the kalasha and Rudra in its neck; Brahma stands at its base, and the hosts of Mother-goddesses are said to be in its middle.',
            kn: 'ಕಲಶದ ಮುಖದಲ್ಲಿ ವಿಷ್ಣುವೂ, ಕಂಠದಲ್ಲಿ ರುದ್ರನೂ, ಮೂಲದಲ್ಲಿ ಬ್ರಹ್ಮದೇವರೂ, ಮಧ್ಯದಲ್ಲಿ ಮಾತೃಗಣಗಳೂ ನೆಲೆಸಿದ್ದಾರೆ.',
          },
        },
        {
          text: 'कुक्षौ तु सागराः सर्वे सप्तद्वीपा वसुन्धरा ।\nऋग्वेदोऽथ यजुर्वेदः सामवेदो ह्यथर्वणः ॥\nअङ्गैश्च सहिताः सर्वे कलशं तु समाश्रिताः ।\nअत्र गायत्री सावित्री शान्तिः पुष्टिकरी तथा ॥',
          meaning: {
            en: 'In its belly dwell all the oceans and the earth with its seven continents; the Rigveda, Yajurveda, Samaveda and Atharvaveda with their limbs all rest in the kalasha. Here too are Gayatri, Savitri, and the powers that bring peace and nourishment.',
            kn: 'ಕಲಶದ ಹೊಟ್ಟೆಯಲ್ಲಿ ಎಲ್ಲ ಸಮುದ್ರಗಳೂ ಸಪ್ತದ್ವೀಪಗಳುಳ್ಳ ಭೂಮಿಯೂ ಇವೆ; ಋಗ್ವೇದ, ಯಜುರ್ವೇದ, ಸಾಮವೇದ, ಅಥರ್ವವೇದಗಳು ಅಂಗಗಳ ಸಹಿತ ಕಲಶವನ್ನು ಆಶ್ರಯಿಸಿವೆ. ಇಲ್ಲಿ ಗಾಯತ್ರೀ, ಸಾವಿತ್ರೀ, ಶಾಂತಿ ಮತ್ತು ಪುಷ್ಟಿಯನ್ನು ಕೊಡುವ ಶಕ್ತಿಗಳೂ ಇವೆ.',
          },
        },
        {
          text: 'सर्वे समुद्राः सरितस्तीर्थानि जलदा नदाः ।\nआयान्तु देवपूजार्थं दुरितक्षयकारकाः ॥',
          meaning: {
            en: 'May all the oceans, rivers, holy waters, clouds and streams, which destroy sin, come here for the worship of the Lord.',
            kn: 'ಪಾಪನಾಶಕವಾದ ಎಲ್ಲ ಸಮುದ್ರಗಳೂ ನದಿಗಳೂ ತೀರ್ಥಗಳೂ ಮೋಡಗಳೂ ಪ್ರವಾಹಗಳೂ ದೇವರ ಪೂಜೆಗಾಗಿ ಇಲ್ಲಿಗೆ ಬರಲಿ.',
          },
        },
        {
          text: 'गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥',
          meaning: {
            en: 'O Ganga, Yamuna, Godavari, Sarasvati, Narmada, Sindhu and Kaveri, be present in this water.',
            kn: 'ಓ ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು, ಕಾವೇರಿ ನದಿಗಳೇ, ಈ ಜಲದಲ್ಲಿ ಸಾನ್ನಿಧ್ಯವನ್ನು ನೀಡಿರಿ.',
          },
        },
        {
          text: 'आगमार्थं तु देवानां गमनार्थं तु रक्षसाम् ।\nकुर्वे घण्टारवं तत्र देवताह्वानलाञ्छनम् ॥',
          meaning: {
            en: 'I ring the bell, the sign that invites the gods, so that the gods may come and the demonic forces depart.',
            kn: 'ದೇವತೆಗಳು ಬರಲೆಂದೂ ರಾಕ್ಷಸರು ತೊಲಗಲೆಂದೂ, ದೇವತೆಗಳನ್ನು ಆಹ್ವಾನಿಸುವ ಸಂಕೇತವಾದ ಘಂಟಾನಾದವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'शङ्खपूजा',
      titleEn: 'Shankha puja (short form)',
      note: 'Fill the conch with water from the worshipped kalasha, apply gandha and akshata, put in a tulasi leaf, recite ॐ नमो नारायणाय twelve times and pray to it as Panchajanya. With the conch water sprinkle the Lord, the shrine, the puja items and yourself.',
      noteKn: 'ಪೂಜಿಸಿದ ಕಲಶದ ನೀರಿನಿಂದ ಶಂಖವನ್ನು ತುಂಬಿ, ಗಂಧಾಕ್ಷತೆ ಹಚ್ಚಿ, ತುಳಸೀದಳ ಹಾಕಿ, “ಓಂ ನಮೋ ನಾರಾಯಣಾಯ” ಎಂದು ಹನ್ನೆರಡು ಬಾರಿ ಜಪಿಸಿ ಪಾಂಚಜನ್ಯವೆಂದು ಪ್ರಾರ್ಥಿಸಿ. ಶಂಖದ ನೀರಿನಿಂದ ದೇವರು, ಮಂಟಪ, ಪೂಜಾಸಾಮಗ್ರಿಗಳು ಮತ್ತು ನಿಮ್ಮ ಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'त्वं पुरा सागरोत्पन्नो विष्णुना विधृतः करे ।\nनमितः सर्वदेवैश्च पाञ्चजन्य नमोऽस्तु ते ॥',
          meaning: {
            en: 'O Panchajanya, born of the ocean long ago, held in Vishnu’s hand and honoured by all the gods — salutations to you.',
            kn: 'ಹಿಂದೆ ಸಮುದ್ರದಿಂದ ಹುಟ್ಟಿ, ವಿಷ್ಣುವಿನ ಕೈಯಲ್ಲಿ ಧರಿಸಲ್ಪಟ್ಟು, ಎಲ್ಲ ದೇವತೆಗಳಿಂದ ನಮಿಸಲ್ಪಟ್ಟ ಓ ಪಾಂಚಜನ್ಯವೇ (ಶಂಖವೇ), ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'पीठपूजा आवाहनं च',
      titleEn: 'Pitha, dhyana and avahana (short form)',
      note: 'Offer a tulasi leaf to the seat of the Lord with विष्णोरासनभूताय…. In the Saligrama the Lord is self-manifest, so no separate invocation is needed: meditate on him seated there, recite ॐ नमो नारायणाय eight times and offer tulasi. For an image (pratima), families invite him from the heart with the avahana mantra their guru taught and show the six mudras. Tattva-nyasa and matrika-nyasa on the image are part of the elaborate puja and are done only by those initiated into them.',
      noteKn: '“ವಿಷ್ಣೋರಾಸನಭೂತಾಯ…” ಎಂದು ದೇವರ ಪೀಠಕ್ಕೆ ತುಳಸೀದಳ ಅರ್ಪಿಸಿ. ಸಾಲಿಗ್ರಾಮದಲ್ಲಿ ಭಗವಂತನು ಸ್ವಯಂವ್ಯಕ್ತನಾಗಿರುವುದರಿಂದ ಪ್ರತ್ಯೇಕ ಆವಾಹನೆ ಬೇಕಿಲ್ಲ: ಅಲ್ಲಿ ಕುಳಿತಿರುವ ಅವನನ್ನು ಧ್ಯಾನಿಸಿ “ಓಂ ನಮೋ ನಾರಾಯಣಾಯ” ಎಂದು ಎಂಟು ಬಾರಿ ಜಪಿಸಿ ತುಳಸಿ ಅರ್ಪಿಸಿ. ಪ್ರತಿಮೆಯಾದರೆ ಗುರೂಪದೇಶದ ಆವಾಹನಮಂತ್ರದಿಂದ ಹೃದಯದಿಂದ ಆವಾಹಿಸಿ ಷಣ್ಮುದ್ರೆ ತೋರಿಸುತ್ತಾರೆ. ಪ್ರತಿಮೆಗೆ ತತ್ವನ್ಯಾಸ, ಮಾತೃಕಾನ್ಯಾಸಗಳು ವಿಸ್ತೃತ ಪೂಜೆಯ ಭಾಗ; ಉಪದೇಶವಿದ್ದವರು ಮಾತ್ರ ಮಾಡುತ್ತಾರೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'विष्णोरासनभूताय दिव्यरत्नमयाय च ।\nप्रधानपुरुषेशाय महापीठाय ते नमः ॥',
          meaning: {
            en: 'Salutations to you, the great seat (pitha), made of divine jewels, which serves as the throne of Vishnu, the lord of matter and of souls.',
            kn: 'ಪ್ರಕೃತಿ–ಪುರುಷರ ಒಡೆಯನಾದ ವಿಷ್ಣುವಿಗೆ ಆಸನವಾಗಿರುವ, ದಿವ್ಯರತ್ನಮಯವಾದ ಮಹಾಪೀಠವೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ॐ नमो नारायणाय ॥',
          meaning: {
            en: 'Om, salutations to Narayana — the eight-syllabled root mantra (mula-mantra) used throughout the Madhva puja.',
            kn: 'ಓಂ ನಮೋ ನಾರಾಯಣಾಯ — ಶ್ರೀನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರ; ಮಾಧ್ವ ಪೂಜೆಯುದ್ದಕ್ಕೂ ಬಳಸುವ ಅಷ್ಟಾಕ್ಷರ ಮೂಲಮಂತ್ರ.',
          },
        },
      ],
    },
    {
      title: 'पञ्चायतनध्यानावाहनम्',
      titleEn: 'Panchayatana: dhyana and avahana (short form)',
      note: 'In panchayatana worship the five deities — Ganapati, Aditya (the Sun), Ambika, Vishnu and Shiva — are kept together, with your chosen deity (ishta-devata) in the centre and the other four in the corners, starting from the north-east and going clockwise (north-east, south-east, south-west, north-west): for Shiva in the centre — Vishnu, Surya, Ganesha, Devi; for Vishnu in the centre — Shiva, Ganesha, Surya, Devi; for Surya in the centre — Shiva, Ganesha, Vishnu, Devi; for Devi in the centre — Vishnu, Shiva, Ganesha, Surya; for Ganesha in the centre — Vishnu, Shiva, Surya, Devi. Do not keep two Shiva-lingas, two Saligramas or two Sun images in a home shrine. Offer akshata to each deity in turn with its Vedic mantra, meditating on it in its image. Then offer the first upacharas to all of them together.',
      noteKn: 'ಪಂಚಾಯತನ ಪೂಜೆಯಲ್ಲಿ ಐದು ದೇವತೆಗಳು — ಗಣಪತಿ, ಆದಿತ್ಯ (ಸೂರ್ಯ), ಅಂಬಿಕಾ, ವಿಷ್ಣು, ಶಿವ — ಒಟ್ಟಿಗಿರುತ್ತಾರೆ; ನಿಮ್ಮ ಇಷ್ಟದೇವತೆ ಮಧ್ಯದಲ್ಲಿ, ಉಳಿದ ನಾಲ್ವರು ಈಶಾನ್ಯದಿಂದ ಪ್ರದಕ್ಷಿಣವಾಗಿ (ಈಶಾನ್ಯ, ಆಗ್ನೇಯ, ನೈಋತ್ಯ, ವಾಯವ್ಯ) ಮೂಲೆಗಳಲ್ಲಿ: ಶಿವ ಮಧ್ಯದಲ್ಲಿದ್ದರೆ — ವಿಷ್ಣು, ಸೂರ್ಯ, ಗಣೇಶ, ದೇವಿ; ವಿಷ್ಣು ಮಧ್ಯದಲ್ಲಿದ್ದರೆ — ಶಿವ, ಗಣೇಶ, ಸೂರ್ಯ, ದೇವಿ; ಸೂರ್ಯ ಮಧ್ಯದಲ್ಲಿದ್ದರೆ — ಶಿವ, ಗಣೇಶ, ವಿಷ್ಣು, ದೇವಿ; ದೇವಿ ಮಧ್ಯದಲ್ಲಿದ್ದರೆ — ವಿಷ್ಣು, ಶಿವ, ಗಣೇಶ, ಸೂರ್ಯ; ಗಣೇಶ ಮಧ್ಯದಲ್ಲಿದ್ದರೆ — ವಿಷ್ಣು, ಶಿವ, ಸೂರ್ಯ, ದೇವಿ. ಮನೆಯ ದೇವರಲ್ಲಿ ಎರಡು ಶಿವಲಿಂಗ, ಎರಡು ಸಾಲಿಗ್ರಾಮ, ಎರಡು ಸೂರ್ಯಪ್ರತಿಮೆಗಳನ್ನಿಡಬಾರದು. ಪ್ರತಿಯೊಂದು ದೇವತೆಗೂ ಅದರ ವೇದಮಂತ್ರದಿಂದ ಬಿಂಬದಲ್ಲಿ ಧ್ಯಾನಿಸುತ್ತಾ ಅಕ್ಷತೆ ಅರ್ಪಿಸಿ. ನಂತರ ಎಲ್ಲರಿಗೂ ಒಟ್ಟಿಗೆ ಮೊದಲ ಉಪಚಾರಗಳನ್ನು ಅರ್ಪಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'गणानां त्वा गणपतिं हवामहे कविं कवीनामुपमश्रवस्तमम् ।\nज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आ नः शृण्वन्नूतिभिः सीद सादनम् ॥\nअस्मिन् बिम्बे श्रीमहागणपतिं ध्यायामि । आवाहयामि ॥',
          meaning: {
            en: 'We invoke you, lord of the hosts, the wisest of the wise, most famous, the eldest king of prayers, O Brahmanaspati: hearing us, come with your help and sit in this seat. (Rigveda 2.23.1.) In this image I meditate on Sri Mahaganapati and invite him.',
            kn: 'ಗಣಗಳ ಒಡೆಯನೇ, ಕವಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠನೇ, ಅತಿ ಕೀರ್ತಿವಂತನೇ, ಮಂತ್ರಗಳ ಜ್ಯೇಷ್ಠ ರಾಜನೇ, ಓ ಬ್ರಹ್ಮಣಸ್ಪತಿಯೇ, ನಿನ್ನನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ; ನಮ್ಮ ಮಾತನ್ನು ಕೇಳಿ ರಕ್ಷಣೆಯೊಡನೆ ಬಂದು ಈ ಆಸನದಲ್ಲಿ ಕುಳಿತುಕೋ. (ಋಗ್ವೇದ ೨.೨೩.೧.) ಈ ಬಿಂಬದಲ್ಲಿ ಶ್ರೀಮಹಾಗಣಪತಿಯನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आ सत्येन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवना विपश्यन् ॥\nअस्मिन् बिम्बे श्रीसूर्यनारायणं ध्यायामि । आवाहयामि ॥',
          meaning: {
            en: 'Moving through the true region of space, bringing to rest the immortal and the mortal, god Savitri comes in his golden chariot, beholding all the worlds. In this image I meditate on Sri Suryanarayana and invite him.',
            kn: 'ಸತ್ಯವಾದ ಅಂತರಿಕ್ಷಮಾರ್ಗದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ಅಮರರನ್ನೂ ಮರ್ತ್ಯರನ್ನೂ ಅವರವರ ಸ್ಥಾನದಲ್ಲಿರಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಸ್ವರ್ಣರಥದಲ್ಲಿ ಎಲ್ಲ ಲೋಕಗಳನ್ನೂ ನೋಡುತ್ತಾ ಬರುತ್ತಾನೆ. ಈ ಬಿಂಬದಲ್ಲಿ ಶ್ರೀಸೂರ್ಯನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गौरी मिमाय सलिलानि तक्षती । एकपदी द्विपदी सा चतुष्पदी ।\nअष्टापदी नवपदी बभूवुषी । सहस्राक्षरा परमे व्योमन् ॥\nअस्मिन् बिम्बे श्रीगौरीदेवीं ध्यायामि । आवाहयामि ॥',
          meaning: {
            en: 'Gauri, the divine Word, lowed forth, shaping the waters: she became one-footed, two-footed, four-footed, eight-footed and nine-footed, with a thousand syllables in the highest heaven. (Taittiriya Aranyaka / Rigveda 1.164.41.) In this image I meditate on the goddess Gauri and invite her.',
            kn: 'ಗೌರಿ (ದಿವ್ಯವಾಣಿ) ಜಲಗಳನ್ನು ರೂಪಿಸುತ್ತಾ ನಾದ ಮಾಡಿದಳು; ಅವಳು ಏಕಪದಿ, ದ್ವಿಪದಿ, ಚತುಷ್ಪದಿ, ಅಷ್ಟಾಪದಿ, ನವಪದಿಯಾಗಿ ಪರಮ ವ್ಯೋಮದಲ್ಲಿ ಸಹಸ್ರಾಕ್ಷರೆಯಾದಳು. ಈ ಬಿಂಬದಲ್ಲಿ ಶ್ರೀಗೌರೀದೇವಿಯನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'सहस्रशीर्षा पुरुषः । सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वा । अत्यतिष्ठद्दशाङ्गुलम् ॥\nअस्मिन् बिम्बे श्रीलक्ष्मीनारायणं ध्यायामि । आवाहयामि ॥',
          meaning: {
            en: 'The Purusha has a thousand heads, a thousand eyes and a thousand feet; pervading the earth on every side, he extends beyond it by ten fingers’ breadth. (Purusha Sukta 1.) In this image I meditate on Sri Lakshminarayana and invite him.',
            kn: 'ಪುರುಷನು ಸಾವಿರ ತಲೆಗಳು, ಸಾವಿರ ಕಣ್ಣುಗಳು, ಸಾವಿರ ಪಾದಗಳು ಉಳ್ಳವನು; ಭೂಮಿಯನ್ನು ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿ ಅದನ್ನು ಮೀರಿ ಹತ್ತು ಅಂಗುಲ ನಿಂತಿದ್ದಾನೆ. (ಪುರುಷಸೂಕ್ತ ೧.) ಈ ಬಿಂಬದಲ್ಲಿ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात् ॥\nअस्मिन् बिम्बे श्रीसाम्बपरमेश्वरं ध्यायामि । आवाहयामि ॥',
          meaning: {
            en: 'We worship the three-eyed Lord, fragrant, who increases nourishment; as a ripe cucumber from its stalk, may I be freed from death, not from immortality. (Rigveda 7.59.12.) In this image I meditate on Sri Samba Parameshvara and invite him.',
            kn: 'ಸುಗಂಧಮಯನಾದ, ಪುಷ್ಟಿಯನ್ನು ಹೆಚ್ಚಿಸುವ ತ್ರ್ಯಂಬಕನನ್ನು ಪೂಜಿಸುತ್ತೇವೆ; ಹಣ್ಣಾದ ಸೌತೆಕಾಯಿ ತೊಟ್ಟಿನಿಂದ ಬಿಡುಗಡೆಯಾಗುವಂತೆ ನಾನು ಮೃತ್ಯುವಿನಿಂದ ಬಿಡುಗಡೆಯಾಗಲಿ, ಅಮೃತತ್ವದಿಂದಲ್ಲ. (ಋಗ್ವೇದ ೭.೫೯.೧೨.) ಈ ಬಿಂಬದಲ್ಲಿ ಶ್ರೀಸಾಂಬಪರಮೇಶ್ವರನನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आवाहिताभ्यः सर्वाभ्यो देवताभ्यो नमः ।\nआसनं समर्पयामि । पादयोः पाद्यं समर्पयामि ।\nअर्घ्यं समर्पयामि । आचमनीयं समर्पयामि ॥',
          meaning: {
            en: 'Salutations to all the deities who have been invoked. I offer a seat, water for the feet, water for the hands (arghya) and water to sip.',
            kn: 'ಆವಾಹಿಸಲ್ಪಟ್ಟ ಎಲ್ಲ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ. ಆಸನ, ಪಾದಗಳಿಗೆ ಪಾದ್ಯ, ಕೈಗಳಿಗೆ ಅರ್ಘ್ಯ, ಆಚಮನಕ್ಕೆ ನೀರು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'पञ्चामृताभिषेकः',
      titleEn: 'Panchamrita abhisheka (fuller puja; short form: milk or water only)',
      note: 'Bathe the Saligrama and images (Smartas: the panchayatana) in the abhisheka plate, one substance at a time — milk, curd, ghee, honey, sugar — with the mantra for each, pouring with the conch (Madhvas) or the uddharane, and a little pure water after each. Fruit juice or tender coconut water may follow with याः फलिनीः…. Madhva: then offer tulasi and fruit naivedya and show the lamp before the main bath. Many Smarta Yajurvedins use शुक्रमसि ज्योतिरसि… for ghee and the Gayatri for sugar instead of the Rigvedic verses given here; follow your family. On a short day bathe with milk or with water only.',
      noteKn: 'ಸಾಲಿಗ್ರಾಮ ಮತ್ತು ಪ್ರತಿಮೆಗಳಿಗೆ (ಸ್ಮಾರ್ತರು: ಪಂಚಾಯತನಕ್ಕೆ) ಅಭಿಷೇಕದ ತಟ್ಟೆಯಲ್ಲಿ ಒಂದೊಂದಾಗಿ — ಹಾಲು, ಮೊಸರು, ತುಪ್ಪ, ಜೇನು, ಸಕ್ಕರೆ — ಆಯಾ ಮಂತ್ರದಿಂದ ಶಂಖದಿಂದ (ಮಾಧ್ವರು) ಅಥವಾ ಉದ್ಧರಣೆಯಿಂದ ಅಭಿಷೇಕ ಮಾಡಿ, ಪ್ರತಿಯೊಂದರ ನಂತರ ಸ್ವಲ್ಪ ಶುದ್ಧಜಲ ಹಾಕಿ. ನಂತರ “ಯಾಃ ಫಲಿನೀಃ…” ಎಂದು ಹಣ್ಣಿನ ರಸ ಅಥವಾ ಎಳನೀರಿನ ಅಭಿಷೇಕ ಮಾಡಬಹುದು. ಮಾಧ್ವರು: ನಂತರ ತುಳಸಿ ಅರ್ಪಿಸಿ ಹಣ್ಣಿನ ನೈವೇದ್ಯ ಮಾಡಿ ಆರತಿ ತೋರಿಸಿ ಮಹಾಭಿಷೇಕಕ್ಕೆ ಹೋಗುತ್ತಾರೆ. ಅನೇಕ ಸ್ಮಾರ್ತ ಯಜುರ್ವೇದಿಗಳು ತುಪ್ಪಕ್ಕೆ “ಶುಕ್ರಮಸಿ ಜ್ಯೋತಿರಸಿ…”, ಸಕ್ಕರೆಗೆ ಗಾಯತ್ರಿ ಹೇಳುತ್ತಾರೆ; ಮನೆತನದ ಪದ್ಧತಿ ಅನುಸರಿಸಿ. ಸಮಯವಿಲ್ಲದ ದಿನ ಹಾಲು ಅಥವಾ ಕೇವಲ ನೀರಿನಿಂದ ಅಭಿಷೇಕ ಮಾಡಿ.',
      verses: [
        {
          text: 'आप्यायस्व समेतु ते विश्वतः सोम वृष्ण्यम् ।\nभवा वाजस्य सङ्गथे ॥',
          meaning: {
            en: 'Swell, O Soma; may vigour come to you from every side; be present where strength is gathered. (Rigveda 1.91.16 — bath with milk.)',
            kn: 'ಓ ಸೋಮನೇ, ವೃದ್ಧಿಯಾಗು; ಎಲ್ಲೆಡೆಯಿಂದ ನಿನಗೆ ಶಕ್ತಿ ಬರಲಿ; ಬಲವು ಸೇರುವಲ್ಲಿ ನೀನು ಇರು. (ಋಗ್ವೇದ ೧.೯೧.೧೬ — ಹಾಲಿನ ಅಭಿಷೇಕ.)',
          },
        },
        {
          text: 'दधिक्राव्णो अकारिषं जिष्णोरश्वस्य वाजिनः ।\nसुरभि नो मुखा करत्प्र ण आयूंषि तारिषत् ॥',
          meaning: {
            en: 'I have praised Dadhikravan, the victorious, swift and mighty divine steed. May he make our mouths fragrant and lengthen our lives.',
            kn: 'ಜಯಶಾಲಿಯೂ ವೇಗಶಾಲಿಯೂ ಬಲಶಾಲಿಯೂ ಆದ ದಧಿಕ್ರಾವನೆಂಬ ದಿವ್ಯಾಶ್ವವನ್ನು ಸ್ತುತಿಸಿದ್ದೇನೆ. ಅವನು ನಮ್ಮ ಮುಖಗಳನ್ನು ಸುಗಂಧಮಯವಾಗಿಸಲಿ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲಿ.',
          },
        },
        {
          text: 'घृतं मिमिक्षे घृतमस्य योनिर्घृते श्रितो घृतम्वस्य धाम ।\nअनुष्वधमा वह मादयस्व स्वाहाकृतं वृषभ वक्षि हव्यम् ॥',
          meaning: {
            en: 'I sprinkle ghee; ghee is his source, in ghee he rests, ghee is his home. Bring the gods according to custom and gladden them; O mighty one, carry the offering made with svaha. (Rigveda 2.3.11 — bath with ghee.)',
            kn: 'ತುಪ್ಪವನ್ನು ಸಿಂಪಡಿಸುತ್ತೇನೆ; ತುಪ್ಪವೇ ಅವನ ಮೂಲ, ತುಪ್ಪದಲ್ಲೇ ಅವನು ನೆಲೆಸಿದ್ದಾನೆ, ತುಪ್ಪವೇ ಅವನ ಧಾಮ. ವಿಧಿಯಂತೆ ದೇವತೆಗಳನ್ನು ಕರೆತಂದು ಸಂತೋಷಪಡಿಸು; ಓ ಬಲಿಷ್ಠನೇ, ಸ್ವಾಹಾಕಾರದಿಂದ ಅರ್ಪಿಸಿದ ಹವಿಸ್ಸನ್ನು ಒಯ್ಯು. (ಋಗ್ವೇದ ೨.೩.೧೧ — ತುಪ್ಪದ ಅಭಿಷೇಕ.)',
          },
        },
        {
          text: 'मधु वाता ऋतायते मधु क्षरन्ति सिन्धवः । माध्वीर्नः सन्त्वोषधीः ॥\nमधु नक्तमुतोषसो मधुमत्पार्थिवं रजः । मधु द्यौरस्तु नः पिता ॥\nमधुमान्नो वनस्पतिर्मधुमाँ अस्तु सूर्यः । माध्वीर्गावो भवन्तु नः ॥',
          meaning: {
            en: 'For one who follows the right order the winds blow sweet, the rivers flow sweet; may the plants be sweet to us. Sweet be the night and the dawns, sweet the dust of the earth, sweet heaven our father. Sweet be the trees to us, sweet the Sun, and sweet our cows. (Rigveda 1.90.6–8 — bath with honey.)',
            kn: 'ಋತವನ್ನು ಅನುಸರಿಸುವವನಿಗೆ ಗಾಳಿಗಳು ಮಧುರವಾಗಿ ಬೀಸುತ್ತವೆ, ನದಿಗಳು ಮಧುವನ್ನು ಹರಿಸುತ್ತವೆ; ಸಸ್ಯಗಳು ನಮಗೆ ಮಧುರವಾಗಲಿ. ರಾತ್ರಿಯೂ ಉಷಃಕಾಲವೂ ಮಧುರವಾಗಲಿ, ಭೂಮಿಯ ಧೂಳೂ ಮಧುರವಾಗಲಿ, ತಂದೆಯಾದ ದ್ಯುಲೋಕ ಮಧುರವಾಗಲಿ. ವೃಕ್ಷಗಳು, ಸೂರ್ಯ, ನಮ್ಮ ಗೋವುಗಳು ಮಧುರವಾಗಲಿ. (ಋಗ್ವೇದ ೧.೯೦.೬–೮ — ಜೇನಿನ ಅಭಿಷೇಕ.)',
          },
        },
        {
          text: 'स्वादुः पवस्व दिव्याय जन्मने स्वादुरिन्द्राय सुहवीतुनाम्ने ।\nस्वादुर्मित्राय वरुणाय वायवे बृहस्पतये मधुमाँ अदाभ्यः ॥',
          meaning: {
            en: 'Flow sweet for the divine race, sweet for Indra whose name is good to invoke, sweet for Mitra, Varuna, Vayu and Brihaspati — honeyed and unharmed. (Rigveda 9.85.6 — bath with sugar.)',
            kn: 'ದಿವ್ಯ ಜನ್ಮದವರಿಗೆ ಸ್ವಾದುವಾಗಿ ಹರಿ; ಆಹ್ವಾನಿಸಲು ಯೋಗ್ಯ ಹೆಸರಿನ ಇಂದ್ರನಿಗೆ, ಮಿತ್ರ, ವರುಣ, ವಾಯು, ಬೃಹಸ್ಪತಿಯರಿಗೆ ಮಧುರವಾಗಿ, ಅಬಾಧಿತವಾಗಿ ಹರಿ. (ಋಗ್ವೇದ ೯.೮೫.೬ — ಸಕ್ಕರೆಯ ಅಭಿಷೇಕ.)',
          },
        },
        {
          text: 'याः फलिनीर्या अफला अपुष्पा याश्च पुष्पिणीः ।\nबृहस्पतिप्रसूतास्ता नो मुञ्चन्त्वंहसः ॥',
          meaning: {
            en: 'The plants that bear fruit and those that do not, those without flowers and those with flowers — brought forth by Brihaspati, may they free us from distress. (Rigveda 10.97.15 — bath with fruit juice or tender coconut water.)',
            kn: 'ಫಲ ಕೊಡುವ, ಫಲ ಕೊಡದ, ಹೂವಿಲ್ಲದ, ಹೂವಿರುವ ಸಸ್ಯಗಳು — ಬೃಹಸ್ಪತಿಯಿಂದ ಹುಟ್ಟಿದವು — ನಮ್ಮನ್ನು ಸಂಕಟದಿಂದ ಬಿಡಿಸಲಿ. (ಋಗ್ವೇದ ೧೦.೯೭.೧೫ — ಹಣ್ಣಿನ ರಸ ಅಥವಾ ಎಳನೀರಿನ ಅಭಿಷೇಕ.)',
          },
        },
      ],
    },
    {
      title: 'महाभिषेकः',
      titleEn: 'Main bath with Purusha Sukta (short form)',
      note: 'Pour water from the bathing kalasha over the Lord with the conch, ringing the bell with the left hand, while reciting the Purusha Sukta (open “Purusha Suktam” in Vedic). Then sprinkle water from the full kalasha with a tulasi leaf. Dry the Saligramas and images with a clean cloth and set them back in the samputa or on the pitha with fresh tulasi.',
      noteKn: 'ಎಡಗೈಯಿಂದ ಗಂಟೆ ಬಾರಿಸುತ್ತಾ, ಪುರುಷಸೂಕ್ತ ಹೇಳುತ್ತಾ (ವೈದಿಕ ವಿಭಾಗದಲ್ಲಿ “ಪುರುಷಸೂಕ್ತಂ” ತೆರೆಯಿರಿ) ಸ್ನಾನೀಯ ಕಲಶದ ನೀರನ್ನು ಶಂಖದಿಂದ ದೇವರಿಗೆ ಅಭಿಷೇಕ ಮಾಡಿ. ನಂತರ ಪೂರ್ಣಕಲಶದ ನೀರನ್ನು ತುಳಸಿಯಿಂದ ಪ್ರೋಕ್ಷಿಸಿ. ಸಾಲಿಗ್ರಾಮ, ಪ್ರತಿಮೆಗಳನ್ನು ಶುಭ್ರ ಬಟ್ಟೆಯಿಂದ ಒರಸಿ ಹೊಸ ತುಳಸಿಯೊಂದಿಗೆ ಸಂಪುಟದಲ್ಲಿ ಅಥವಾ ಪೀಠದ ಮೇಲೆ ಇಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'शुद्धोदकस्नानं समर्पयामि ।\nस्नानानन्तरम् आचमनीयं समर्पयामि ॥',
          meaning: {
            en: 'I offer a bath of pure water; after the bath I offer water to sip.',
            kn: 'ಶುದ್ಧೋದಕ ಸ್ನಾನವನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ; ಸ್ನಾನದ ನಂತರ ಆಚಮನಕ್ಕೆ ನೀರು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'शुद्धोदकाभिषेकः',
      titleEn: 'Bath with pure water (short form)',
      note: 'Bathe the deities with pure water: Vishnu with the Purusha Sukta, Shiva with the Rudram and Chamakam, the Devi with the Sri Sukta, as time allows (open them in Vedic). On a short day the five mantras of the invocation may be used again. Dry the images and set them back in their places.',
      noteKn: 'ದೇವತೆಗಳಿಗೆ ಶುದ್ಧಜಲದ ಅಭಿಷೇಕ: ವಿಷ್ಣುವಿಗೆ ಪುರುಷಸೂಕ್ತ, ಶಿವನಿಗೆ ರುದ್ರ–ಚಮಕ, ದೇವಿಗೆ ಶ್ರೀಸೂಕ್ತ — ಸಮಯವಿದ್ದಂತೆ (ವೈದಿಕ ವಿಭಾಗದಲ್ಲಿ ತೆರೆಯಿರಿ). ಸಮಯವಿಲ್ಲದ ದಿನ ಆವಾಹನೆಯ ಐದು ಮಂತ್ರಗಳನ್ನೇ ಮತ್ತೆ ಹೇಳಬಹುದು. ಪ್ರತಿಮೆಗಳನ್ನು ಒರಸಿ ಅವುಗಳ ಸ್ಥಾನದಲ್ಲಿಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'शुद्धोदकस्नानं समर्पयामि ।\nस्नानानन्तरम् आचमनीयं समर्पयामि ॥',
          meaning: {
            en: 'I offer a bath of pure water; after the bath I offer water to sip.',
            kn: 'ಶುದ್ಧೋದಕ ಸ್ನಾನವನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ; ಸ್ನಾನದ ನಂತರ ಆಚಮನಕ್ಕೆ ನೀರು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'अलङ्कारः अर्चना च',
      titleEn: 'Clothes, sandal and tulasi archana (short form)',
      note: 'Offer clothes (or akshata in their place) with युवं वस्त्राणि…, the sacred thread with यज्ञोपवीतं…, and ornaments in the mind. Touch sandal paste with tulasi to the conch and apply it to the Lord. Then offer tulasi leaves and flowers with the twenty-four names Keshava to Sri Krishna — at least these; with more time add the Vishnu Sahasranama or the Vishnu Ashtottara (open them in the library). Tulasi is not offered to Lakshmi or to Ganesha.',
      noteKn: '“ಯುವಂ ವಸ್ತ್ರಾಣಿ…” ಎಂದು ವಸ್ತ್ರ (ಅಥವಾ ಅದರ ಬದಲು ಅಕ್ಷತೆ), “ಯಜ್ಞೋಪವೀತಂ…” ಎಂದು ಯಜ್ಞೋಪವೀತ ಅರ್ಪಿಸಿ, ಆಭರಣಗಳನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಅರ್ಪಿಸಿ. ಗಂಧವನ್ನು ತುಳಸಿಯೊಡನೆ ಶಂಖಕ್ಕೆ ಮುಟ್ಟಿಸಿ ದೇವರಿಗೆ ಹಚ್ಚಿ. ನಂತರ ಕೇಶವನಿಂದ ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಇಪ್ಪತ್ನಾಲ್ಕು ನಾಮಗಳಿಂದ ತುಳಸಿ, ಹೂವುಗಳನ್ನು ಅರ್ಪಿಸಿ — ಕನಿಷ್ಠ ಇಷ್ಟು; ಸಮಯವಿದ್ದರೆ ವಿಷ್ಣುಸಹಸ್ರನಾಮ ಅಥವಾ ವಿಷ್ಣು ಅಷ್ಟೋತ್ತರ (ಗ್ರಂಥಾಲಯದಲ್ಲಿ ತೆರೆಯಿರಿ). ಲಕ್ಷ್ಮಿಗೂ ಗಣೇಶನಿಗೂ ತುಳಸಿ ಅರ್ಪಿಸುವುದಿಲ್ಲ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'युवं वस्त्राणि पीवसा वसाथे युवोरच्छिद्रा मन्तवो ह सर्गाः ।\nअवातिरतमनृतानि विश्व ऋतेन मित्रावरुणा सचेथे ॥',
          meaning: {
            en: 'You two wear rich garments; flawless are your thoughts and your creations. You have overcome every untruth; O Mitra and Varuna, you hold fast to the right order. (Rigveda 1.152.1 — offering clothes.)',
            kn: 'ನೀವಿಬ್ಬರೂ ಸಮೃದ್ಧ ವಸ್ತ್ರಗಳನ್ನು ಧರಿಸುತ್ತೀರಿ; ನಿಮ್ಮ ಸಂಕಲ್ಪಗಳೂ ಸೃಷ್ಟಿಗಳೂ ದೋಷರಹಿತ. ಎಲ್ಲ ಅಸತ್ಯಗಳನ್ನೂ ಮೀರಿದ್ದೀರಿ; ಓ ಮಿತ್ರಾವರುಣರೇ, ನೀವು ಋತವನ್ನು ಅನುಸರಿಸುತ್ತೀರಿ. (ಋಗ್ವೇದ ೧.೧೫೨.೧ — ವಸ್ತ್ರ ಸಮರ್ಪಣೆ.)',
          },
        },
        {
          text: 'यज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात् ।\nआयुष्यमग्र्यं प्रतिमुञ्च शुभ्रं यज्ञोपवीतं बलमस्तु तेजः ॥',
          meaning: {
            en: 'The sacred thread is supremely purifying, born together with Prajapati in the beginning. Put on this bright, foremost thread that gives long life; may it be strength and splendour. (Offering the sacred thread.)',
            kn: 'ಯಜ್ಞೋಪವೀತವು ಪರಮ ಪವಿತ್ರವಾದುದು, ಆದಿಯಲ್ಲಿ ಪ್ರಜಾಪತಿಯೊಡನೆ ಹುಟ್ಟಿದುದು. ಆಯುಸ್ಸು ಕೊಡುವ ಶ್ರೇಷ್ಠವಾದ ಈ ಶುಭ್ರ ಯಜ್ಞೋಪವೀತವನ್ನು ಧರಿಸು; ಇದು ಬಲವೂ ತೇಜಸ್ಸೂ ಆಗಲಿ. (ಯಜ್ಞೋಪವೀತ ಸಮರ್ಪಣೆ.)',
          },
        },
        {
          text: 'ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ।\nॐ गोविन्दाय नमः । ॐ विष्णवे नमः । ॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः । ॐ वामनाय नमः । ॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः । ॐ दामोदराय नमः ।\nॐ सङ्कर्षणाय नमः । ॐ वासुदेवाय नमः । ॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः । ॐ पुरुषोत्तमाय नमः । ॐ अधोक्षजाय नमः ।\nॐ नारसिंहाय नमः । ॐ अच्युताय नमः । ॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः । ॐ हरये नमः । ॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the twenty-four forms of the Lord, from Keshava to Sri Krishna — a tulasi leaf or flower is offered with each name.',
            kn: 'ಕೇಶವನಿಂದ ಶ್ರೀಕೃಷ್ಣನವರೆಗೆ ಭಗವಂತನ ಇಪ್ಪತ್ನಾಲ್ಕು ರೂಪಗಳಿಗೆ ನಮಸ್ಕಾರ — ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಒಂದು ತುಳಸೀದಳ ಅಥವಾ ಹೂವು ಅರ್ಪಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'अलङ्कारः',
      titleEn: 'Clothes, sandal and flowers (short form)',
      note: 'Offer akshata in place of clothes, sacred thread and ornaments; apply sandal paste, and over it turmeric and kumkum (for the Devi), then akshata, a garland and flowers.',
      noteKn: 'ವಸ್ತ್ರ, ಯಜ್ಞೋಪವೀತ, ಆಭರಣಗಳ ಬದಲು ಅಕ್ಷತೆ ಅರ್ಪಿಸಿ; ಗಂಧ ಹಚ್ಚಿ, ಅದರ ಮೇಲೆ (ದೇವಿಗೆ) ಅರಿಶಿನ–ಕುಂಕುಮ, ನಂತರ ಅಕ್ಷತೆ, ಹೂಮಾಲೆ, ಹೂವುಗಳನ್ನು ಅರ್ಪಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'वस्त्रार्थम् अक्षतान् समर्पयामि ।\nयज्ञोपवीताभरणार्थे अक्षतान् समर्पयामि ।\nदिव्यपरिमलगन्धान् धारयामि । गन्धस्योपरि हरिद्राकुङ्कुमं समर्पयामि ।\nअक्षतान् समर्पयामि । पुष्पमालिकां समर्पयामि । पुष्पैः पूजयामि ॥',
          meaning: {
            en: 'In place of clothes I offer akshata; in place of the sacred thread and ornaments I offer akshata. I apply fragrant sandal paste, and over it turmeric and kumkum; I offer akshata, a garland, and worship with flowers.',
            kn: 'ವಸ್ತ್ರದ ಬದಲು ಅಕ್ಷತೆ, ಯಜ್ಞೋಪವೀತ–ಆಭರಣಗಳ ಬದಲು ಅಕ್ಷತೆ ಅರ್ಪಿಸುತ್ತೇನೆ. ಸುಗಂಧಭರಿತ ಗಂಧವನ್ನು ಹಚ್ಚಿ, ಅದರ ಮೇಲೆ ಅರಿಶಿನ–ಕುಂಕುಮ ಅರ್ಪಿಸುತ್ತೇನೆ; ಅಕ್ಷತೆ, ಹೂಮಾಲೆ ಅರ್ಪಿಸಿ ಹೂವುಗಳಿಂದ ಪೂಜಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'अर्चना',
      titleEn: 'Archana with the names of each deity (short form)',
      note: 'Offer a flower (durva for Ganapati, tulasi for Vishnu, bilva for Shiva) with each name: Ganapati’s sixteen names, the Sun’s twelve, Vishnu’s twenty-four, Shiva’s eight. For the Devi recite her ashtottara (open Sri Lalitha Ashtottara in the library), and with more time the ashtottara of your chosen deity.',
      noteKn: 'ಪ್ರತಿ ನಾಮಕ್ಕೂ ಒಂದು ಹೂವು (ಗಣಪತಿಗೆ ಗರಿಕೆ, ವಿಷ್ಣುವಿಗೆ ತುಳಸಿ, ಶಿವನಿಗೆ ಬಿಲ್ವ) ಅರ್ಪಿಸಿ: ಗಣಪತಿಯ ಹದಿನಾರು, ಸೂರ್ಯನ ಹನ್ನೆರಡು, ವಿಷ್ಣುವಿನ ಇಪ್ಪತ್ನಾಲ್ಕು, ಶಿವನ ಎಂಟು ನಾಮಗಳು. ದೇವಿಗೆ ಅವಳ ಅಷ್ಟೋತ್ತರ (ಗ್ರಂಥಾಲಯದಲ್ಲಿ ಶ್ರೀ ಲಲಿತಾ ಅಷ್ಟೋತ್ತರ ತೆರೆಯಿರಿ); ಸಮಯವಿದ್ದರೆ ಇಷ್ಟದೇವತೆಯ ಅಷ್ಟೋತ್ತರ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ सुमुखाय नमः । ॐ एकदन्ताय नमः । ॐ कपिलाय नमः । ॐ गजकर्णकाय नमः ।\nॐ लम्बोदराय नमः । ॐ विकटाय नमः । ॐ विघ्नराजाय नमः । ॐ विनायकाय नमः ।\nॐ धूमकेतवे नमः । ॐ गणाध्यक्षाय नमः । ॐ फालचन्द्राय नमः । ॐ गजाननाय नमः ।\nॐ वक्रतुण्डाय नमः । ॐ शूर्पकर्णाय नमः । ॐ हेरम्बाय नमः । ॐ स्कन्दपूर्वजाय नमः ॥',
          meaning: {
            en: 'The sixteen names of Ganesha — Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnaraja, Vinayaka, Dhumaketu, Ganadhyaksha, Phalachandra, Gajanana, Vakratunda, Shurpakarna, Heramba, Skandapurvaja — with a flower or durva for each.',
            kn: 'ಗಣಪತಿಯ ಹದಿನಾರು ನಾಮಗಳು — ಸುಮುಖ, ಏಕದಂತ, ಕಪಿಲ, ಗಜಕರ್ಣಕ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ವಿನಾಯಕ, ಧೂಮಕೇತು, ಗಣಾಧ್ಯಕ್ಷ, ಫಾಲಚಂದ್ರ, ಗಜಾನನ, ವಕ್ರತುಂಡ, ಶೂರ್ಪಕರ್ಣ, ಹೇರಂಬ, ಸ್ಕಂದಪೂರ್ವಜ — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹೂವು ಅಥವಾ ಗರಿಕೆ ಅರ್ಪಿಸಿ.',
          },
        },
        {
          text: 'ॐ मित्राय नमः । ॐ रवये नमः । ॐ सूर्याय नमः । ॐ भानवे नमः ।\nॐ खगाय नमः । ॐ पूष्णे नमः । ॐ हिरण्यगर्भाय नमः । ॐ मरीचये नमः ।\nॐ आदित्याय नमः । ॐ सवित्रे नमः । ॐ अर्काय नमः । ॐ भास्कराय नमः ॥',
          meaning: {
            en: 'The twelve names of the Sun — Mitra, Ravi, Surya, Bhanu, Khaga, Pushan, Hiranyagarbha, Marichi, Aditya, Savitri, Arka, Bhaskara — with a flower for each.',
            kn: 'ಸೂರ್ಯನ ಹನ್ನೆರಡು ನಾಮಗಳು — ಮಿತ್ರ, ರವಿ, ಸೂರ್ಯ, ಭಾನು, ಖಗ, ಪೂಷಾ, ಹಿರಣ್ಯಗರ್ಭ, ಮರೀಚಿ, ಆದಿತ್ಯ, ಸವಿತೃ, ಅರ್ಕ, ಭಾಸ್ಕರ — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಒಂದು ಹೂವು.',
          },
        },
        {
          text: 'ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ।\nॐ गोविन्दाय नमः । ॐ विष्णवे नमः । ॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः । ॐ वामनाय नमः । ॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः । ॐ दामोदराय नमः ।\nॐ सङ्कर्षणाय नमः । ॐ वासुदेवाय नमः । ॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः । ॐ पुरुषोत्तमाय नमः । ॐ अधोक्षजाय नमः ।\nॐ नारसिंहाय नमः । ॐ अच्युताय नमः । ॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः । ॐ हरये नमः । ॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the twenty-four forms of the Lord, from Keshava to Sri Krishna — a tulasi leaf or flower is offered with each name.',
            kn: 'ಕೇಶವನಿಂದ ಶ್ರೀಕೃಷ್ಣನವರೆಗೆ ಭಗವಂತನ ಇಪ್ಪತ್ನಾಲ್ಕು ರೂಪಗಳಿಗೆ ನಮಸ್ಕಾರ — ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಒಂದು ತುಳಸೀದಳ ಅಥವಾ ಹೂವು ಅರ್ಪಿಸಿ.',
          },
        },
        {
          text: 'ॐ भवाय देवाय नमः । ॐ शर्वाय देवाय नमः ।\nॐ ईशानाय देवाय नमः । ॐ पशुपतये देवाय नमः ।\nॐ रुद्राय देवाय नमः । ॐ उग्राय देवाय नमः ।\nॐ भीमाय देवाय नमः । ॐ महते देवाय नमः ॥',
          meaning: {
            en: 'The eight names of Shiva (ashta-murti) — Bhava, Sharva, Ishana, Pashupati, Rudra, Ugra, Bhima and Mahadeva — with a bilva leaf or flower for each.',
            kn: 'ಶಿವನ ಎಂಟು ನಾಮಗಳು (ಅಷ್ಟಮೂರ್ತಿ) — ಭವ, ಶರ್ವ, ಈಶಾನ, ಪಶುಪತಿ, ರುದ್ರ, ಉಗ್ರ, ಭೀಮ, ಮಹಾದೇವ — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಬಿಲ್ವಪತ್ರ ಅಥವಾ ಹೂವು.',
          },
        },
      ],
    },
    {
      title: 'धूपदीपौ',
      titleEn: 'Incense and lamp (short form)',
      note: 'Wave the lit incense before the Lord, ringing the bell, and fan the smoke towards him; then wave the ghee lamp with three wicks before him three and a half times, ringing the bell, and wash your hands.',
      noteKn: 'ಗಂಟೆ ಬಾರಿಸುತ್ತಾ ಹಚ್ಚಿದ ಧೂಪವನ್ನು ದೇವರ ಮುಂದೆ ಬೆಳಗಿ ಹೊಗೆಯನ್ನು ಅವನ ಕಡೆಗೆ ಬೀಸಿ; ನಂತರ ಮೂರು ಬತ್ತಿಯ ತುಪ್ಪದ ದೀಪವನ್ನು ಗಂಟೆ ಬಾರಿಸುತ್ತಾ ಮೂರೂವರೆ ಬಾರಿ ಬೆಳಗಿ, ಕೈ ತೊಳೆದುಕೊಳ್ಳಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'वनस्पत्युद्भवो दिव्यो गन्धाढ्यो गन्ध उत्तमः ।\nआघ्रेयः सर्वदेवानां धूपोऽयं प्रतिगृह्यताम् ॥',
          meaning: {
            en: 'Born of trees, divine, rich in fragrance, the finest of scents, fit to be smelt by all the gods — please accept this incense.',
            kn: 'ವೃಕ್ಷಗಳಿಂದ ಹುಟ್ಟಿದ, ದಿವ್ಯವಾದ, ಸುಗಂಧಭರಿತವಾದ, ಉತ್ತಮ ಪರಿಮಳದ, ಎಲ್ಲ ದೇವತೆಗಳೂ ಆಘ್ರಾಣಿಸಲು ಯೋಗ್ಯವಾದ ಈ ಧೂಪವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: 'साज्यं त्रिवर्तिसंयुक्तं वह्निना योजितं मया ।\nदीपं गृहाण देवेश त्रैलोक्यतिमिरापह ॥',
          meaning: {
            en: 'O Lord of the gods, dispeller of the darkness of the three worlds, accept this lamp with ghee and three wicks, which I have lit with fire.',
            kn: 'ಓ ದೇವೇಶನೇ, ಮೂರು ಲೋಕಗಳ ಕತ್ತಲೆಯನ್ನು ಹೋಗಲಾಡಿಸುವವನೇ, ತುಪ್ಪ ಮತ್ತು ಮೂರು ಬತ್ತಿಗಳುಳ್ಳ, ನಾನು ಹಚ್ಚಿದ ಈ ದೀಪವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
      ],
    },
    {
      title: 'धूपदीपौ',
      titleEn: 'Incense and lamp (short form)',
      note: 'Show the lit incense to all the deities, ringing the bell, saying धूपमाघ्रापयामि; then show the ghee lamp, saying दीपं दर्शयामि, and offer water to sip after it.',
      noteKn: 'ಗಂಟೆ ಬಾರಿಸುತ್ತಾ “ಧೂಪಮಾಘ್ರಾಪಯಾಮಿ” ಎಂದು ಎಲ್ಲ ದೇವತೆಗಳಿಗೂ ಧೂಪ ತೋರಿಸಿ; ನಂತರ “ದೀಪಂ ದರ್ಶಯಾಮಿ” ಎಂದು ತುಪ್ಪದ ದೀಪ ತೋರಿಸಿ, ಆಮೇಲೆ ಆಚಮನಕ್ಕೆ ನೀರು ಅರ್ಪಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'वनस्पतिरसोद्भूतो गन्धाढ्यो गन्ध उत्तमः ।\nआघ्रेयः सर्वदेवानां धूपोऽयं प्रतिगृह्यताम् ॥',
          meaning: {
            en: 'Born of the essence of trees, rich in fragrance, the finest of scents, fit to be enjoyed by all the gods: may this incense be accepted.',
            kn: 'ವನಸ್ಪತಿಗಳ ರಸದಿಂದ ಹುಟ್ಟಿದ, ಸುಗಂಧಭರಿತವಾದ, ಉತ್ತಮ ಪರಿಮಳವುಳ್ಳ, ಎಲ್ಲಾ ದೇವತೆಗಳೂ ಆಘ್ರಾಣಿಸಲು ಯೋಗ್ಯವಾದ ಈ ಧೂಪವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: 'साज्यं च वर्तिसंयुक्तं वह्निना योजितं मया ।\nदीपं गृहाण देवेश त्रैलोक्यतिमिरापहम् ॥',
          meaning: {
            en: 'O Lord of the gods, accept this lamp of ghee and wick, lit by me with fire, which dispels the darkness of the three worlds.',
            kn: 'ಓ ದೇವದೇವ, ತುಪ್ಪ ಮತ್ತು ಬತ್ತಿಯಿಂದ ಕೂಡಿ ನಾನು ಬೆಳಗಿಸಿದ, ಮೂರು ಲೋಕಗಳ ಕತ್ತಲೆಯನ್ನು ಹೋಗಲಾಡಿಸುವ ಈ ದೀಪವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: 'उद्दीप्यस्व जातवेदोऽपघ्नन्निरृतिं मम ।\nपशूंश्च मह्यमावह जीवनं च दिशो दिश ॥',
          meaning: {
            en: 'Blaze forth, O Jatavedas (Fire), driving away my misfortune; bring me cattle and livelihood from every direction. (Offering the lamp.)',
            kn: 'ಓ ಜಾತವೇದ (ಅಗ್ನಿ)ನೇ, ನನ್ನ ದುರದೃಷ್ಟವನ್ನು ಹೋಗಲಾಡಿಸುತ್ತಾ ಪ್ರಜ್ವಲಿಸು; ಎಲ್ಲ ದಿಕ್ಕುಗಳಿಂದ ನನಗೆ ಪಶುಗಳನ್ನೂ ಜೀವನೋಪಾಯವನ್ನೂ ತಾ. (ದೀಪ ಸಮರ್ಪಣೆ.)',
          },
        },
      ],
    },
    {
      title: 'नैवेद्यम्',
      titleEn: 'Naivedya (food offering) (short form)',
      note: 'Draw a square with rangoli on the right in front of the Lord and place the cooked food (rice, payasa, ghee, vegetables, fruit, milk, water) on it, each with a tulasi leaf and a little ghee. Sprinkle it with water from the conch over which ॐ नमो नारायणाय has been recited eight times, and show the mudras. Sprinkle water round the food with सत्यं त्वर्तेन… and give the first sip (aposhana). Offer to the five life-breaths, then pray with सौवर्णे… and श्रीनिवास नमस्तुभ्यं…, and with eyes closed recite ॐ नमो नारायणाय 108 times, thinking that the Lord, present in the Saligrama, receives the essence of the food. Then give the closing sip with अमृतापिधानमसि स्वाहा, water to wash hands and to sip, and betel. On Ekadashi offer only fruit, milk and the like, not cooked grain.',
      noteKn: 'ದೇವರ ಮುಂದೆ ಬಲಭಾಗದಲ್ಲಿ ರಂಗೋಲಿಯಿಂದ ಚೌಕ ಬರೆದು ಅದರ ಮೇಲೆ ಅಡುಗೆ (ಅನ್ನ, ಪಾಯಸ, ತುಪ್ಪ, ಪಲ್ಯ, ಹಣ್ಣು, ಹಾಲು, ನೀರು) ಇಡಿ; ಪ್ರತಿಯೊಂದಕ್ಕೂ ತುಳಸೀದಳ, ಸ್ವಲ್ಪ ತುಪ್ಪ ಹಾಕಿ. “ಓಂ ನಮೋ ನಾರಾಯಣಾಯ” ಎಂದು ಎಂಟು ಬಾರಿ ಅಭಿಮಂತ್ರಿಸಿದ ಶಂಖದ ನೀರಿನಿಂದ ಪ್ರೋಕ್ಷಿಸಿ ಮುದ್ರೆಗಳನ್ನು ತೋರಿಸಿ. “ಸತ್ಯಂ ತ್ವರ್ತೇನ…” ಎಂದು ನೈವೇದ್ಯದ ಸುತ್ತ ನೀರು ಹಾಕಿ ಆಪೋಶನ ಕೊಡಿ. ಪಂಚಪ್ರಾಣಗಳಿಗೆ ಅರ್ಪಿಸಿ, “ಸೌವರ್ಣೇ…”, “ಶ್ರೀನಿವಾಸ ನಮಸ್ತುಭ್ಯಂ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ, ಕಣ್ಣು ಮುಚ್ಚಿ “ಓಂ ನಮೋ ನಾರಾಯಣಾಯ” ಎಂದು ೧೦೮ ಬಾರಿ ಜಪಿಸಿ — ಸಾಲಿಗ್ರಾಮದಲ್ಲಿರುವ ಭಗವಂತನು ಅನ್ನದ ಸಾರವನ್ನು ಸ್ವೀಕರಿಸುತ್ತಾನೆಂದು ಚಿಂತಿಸಿ. ನಂತರ “ಅಮೃತಾಪಿಧಾನಮಸಿ ಸ್ವಾಹಾ” ಎಂದು ಉತ್ತರಾಪೋಶನ, ಕೈ ತೊಳೆಯಲು ಮತ್ತು ಆಚಮನಕ್ಕೆ ನೀರು, ತಾಂಬೂಲ ಅರ್ಪಿಸಿ. ಏಕಾದಶಿಯಂದು ಹಣ್ಣು, ಹಾಲು ಮುಂತಾದವನ್ನು ಮಾತ್ರ ನಿವೇದಿಸಿ, ಅನ್ನವನ್ನಲ್ಲ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'सत्यं त्वर्तेन परिषिञ्चामि ।\nअमृतोपस्तरणमसि स्वाहा ॥',
          meaning: {
            en: 'I sprinkle you, the truth, with the right order (sprinkling water round the food). You are the nectar-spread beneath (offering the first sip, aposhana).',
            kn: 'ಸತ್ಯವಾದ ನಿನ್ನನ್ನು ಋತದಿಂದ ಪರಿಷೇಚಿಸುತ್ತೇನೆ (ನೈವೇದ್ಯದ ಸುತ್ತ ನೀರು ಹಾಕುವುದು). ನೀನು ಅಮೃತದ ಹಾಸು (ಆಪೋಶನ).',
          },
        },
        {
          text: 'ॐ प्राणाय स्वाहा । ॐ अपानाय स्वाहा ।\nॐ व्यानाय स्वाहा । ॐ उदानाय स्वाहा ।\nॐ समानाय स्वाहा ॥',
          meaning: {
            en: 'Offering to prana, apana, vyana, udana and samana, the five vital breaths.',
            kn: 'ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಉದಾನ, ಸಮಾನ ಎಂಬ ಐದು ಪ್ರಾಣಗಳಿಗೆ ಆಹುತಿಯಾಗಿ ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'सौवर्णे स्थालिवर्ये मणिगणखचिते गोघृताक्तान् सुपक्वान्\nभक्ष्यान् भोज्यांश्च लेह्यानपि परममहच्चोष्यमन्नं निधाय ।\nनानाशाकैरुपेतं दधि मधु सुघृतं क्षीरपानीययुक्तं\nताम्बूलं चापि विष्णोः प्रतिदिवसमहं मानसे चिन्तयामि ॥',
          meaning: {
            en: 'Every day I picture in my mind, set before Vishnu on a fine golden plate studded with gems, well-cooked foods glistening with cow’s ghee — things to chew, to eat, to lick and to suck, and the best rice — with many vegetables, curd, honey, good ghee, milk and water, and betel too.',
            kn: 'ರತ್ನಖಚಿತವಾದ ಶ್ರೇಷ್ಠ ಸುವರ್ಣದ ತಟ್ಟೆಯಲ್ಲಿ ಹಸುವಿನ ತುಪ್ಪದಿಂದ ಕೂಡಿದ ಚೆನ್ನಾಗಿ ಬೆಂದ ಭಕ್ಷ್ಯ, ಭೋಜ್ಯ, ಲೇಹ್ಯ, ಚೋಷ್ಯಗಳನ್ನೂ ಶ್ರೇಷ್ಠ ಅನ್ನವನ್ನೂ ಇಟ್ಟು, ಬಗೆಬಗೆಯ ಪಲ್ಯಗಳು, ಮೊಸರು, ಜೇನು, ತುಪ್ಪ, ಹಾಲು, ನೀರು, ತಾಂಬೂಲಗಳೊಂದಿಗೆ ವಿಷ್ಣುವಿಗೆ ಅರ್ಪಿಸುವುದನ್ನು ಪ್ರತಿದಿನ ಮನಸ್ಸಿನಲ್ಲಿ ಚಿಂತಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'श्रीनिवास नमस्तुभ्यं महानैवेद्यमुत्तमम् ।\nनित्यतृप्त गृहाणेदं कृपया भक्तवत्सल ॥',
          meaning: {
            en: 'O Srinivasa, salutations to you; O ever-satisfied one, loving to your devotees, graciously accept this excellent great food offering.',
            kn: 'ಓ ಶ್ರೀನಿವಾಸನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಓ ನಿತ್ಯತೃಪ್ತನೇ, ಭಕ್ತವತ್ಸಲನೇ, ಈ ಉತ್ತಮ ಮಹಾನೈವೇದ್ಯವನ್ನು ಕೃಪೆಯಿಂದ ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: 'ॐ नमो नारायणाय ॥',
          meaning: {
            en: 'Om, salutations to Narayana — the eight-syllabled root mantra (mula-mantra) used throughout the Madhva puja.',
            kn: 'ಓಂ ನಮೋ ನಾರಾಯಣಾಯ — ಶ್ರೀನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರ; ಮಾಧ್ವ ಪೂಜೆಯುದ್ದಕ್ಕೂ ಬಳಸುವ ಅಷ್ಟಾಕ್ಷರ ಮೂಲಮಂತ್ರ.',
          },
        },
        {
          text: 'अमृतापिधानमसि स्वाहा ॥',
          meaning: {
            en: 'You are the nectar-cover (the closing sip of water, uttara-aposhana, after the meal is offered).',
            kn: 'ನೀನು ಅಮೃತದ ಮುಚ್ಚಳ (ನೈವೇದ್ಯದ ನಂತರ ಕೊಡುವ ಉತ್ತರಾಪೋಶನ).',
          },
        },
      ],
    },
    {
      title: 'नैवेद्यम्',
      titleEn: 'Naivedya (food offering) (short form)',
      note: 'Place the food before the deities, sprinkle it with water while reciting the Gayatri, show the dhenu mudra, and sprinkle water round it. Offer it to the five life-breaths, showing it to the deities with the right hand, and offer water to drink in between and after.',
      noteKn: 'ನೈವೇದ್ಯವನ್ನು ದೇವತೆಗಳ ಮುಂದಿಟ್ಟು ಗಾಯತ್ರಿ ಹೇಳುತ್ತಾ ನೀರಿನಿಂದ ಪ್ರೋಕ್ಷಿಸಿ, ಧೇನುಮುದ್ರೆ ತೋರಿಸಿ, ಸುತ್ತಲೂ ನೀರು ಹಾಕಿ. ಬಲಗೈಯಿಂದ ದೇವತೆಗಳಿಗೆ ತೋರಿಸುತ್ತಾ ಪಂಚಪ್ರಾಣಗಳಿಗೆ ಅರ್ಪಿಸಿ, ನಡುನಡುವೆ ಮತ್ತು ಕೊನೆಯಲ್ಲಿ ಕುಡಿಯುವ ನೀರು ಅರ್ಪಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ प्राणाय स्वाहा । ॐ अपानाय स्वाहा ।\nॐ व्यानाय स्वाहा । ॐ उदानाय स्वाहा ।\nॐ समानाय स्वाहा ॥',
          meaning: {
            en: 'Offering to prana, apana, vyana, udana and samana, the five vital breaths.',
            kn: 'ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಉದಾನ, ಸಮಾನ ಎಂಬ ಐದು ಪ್ರಾಣಗಳಿಗೆ ಆಹುತಿಯಾಗಿ ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'महानैवेद्यं निवेदयामि ।\nमध्ये मध्ये अमृतपानीयं समर्पयामि । अमृतापिधानमसि ।\nहस्तप्रक्षालनं समर्पयामि ।\nनिवेदनानन्तरम् आचमनीयं समर्पयामि ॥',
          meaning: {
            en: 'I offer the great food offering; in between I offer nectar-like drinking water. You are the nectar-cover. I offer water to wash the hands, and after the offering, water to sip.',
            kn: 'ಮಹಾನೈವೇದ್ಯವನ್ನು ನಿವೇದಿಸುತ್ತೇನೆ; ನಡುನಡುವೆ ಅಮೃತದಂತಹ ಕುಡಿಯುವ ನೀರು ಅರ್ಪಿಸುತ್ತೇನೆ. ನೀನು ಅಮೃತದ ಮುಚ್ಚಳ. ಕೈ ತೊಳೆಯಲು ನೀರು, ನಿವೇದನೆಯ ನಂತರ ಆಚಮನಕ್ಕೆ ನೀರು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'ताम्बूलम्',
      titleEn: 'Tambula (betel) (short form)',
      note: 'Offer betel leaves with areca nut (and fruit or a coin as dakshina).',
      noteKn: 'ಅಡಿಕೆಯೊಡನೆ ವೀಳ್ಯದೆಲೆ (ಮತ್ತು ಹಣ್ಣು ಅಥವಾ ದಕ್ಷಿಣೆಯಾಗಿ ನಾಣ್ಯ) ಅರ್ಪಿಸಿ.',
      verses: [
        {
          text: 'पूगीफलसमायुक्तं नागवल्लीदलैर्युतम् ।\nकर्पूरचूर्णसंयुक्तं ताम्बूलं प्रतिगृह्यताम् ॥',
          meaning: {
            en: 'Please accept this tambula of betel leaves with areca nut and camphor powder.',
            kn: 'ಅಡಿಕೆ, ವೀಳ್ಯದೆಲೆ ಮತ್ತು ಕರ್ಪೂರದ ಪುಡಿಯಿಂದ ಕೂಡಿದ ಈ ತಾಂಬೂಲವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
      ],
    },
    {
      title: 'मङ्गलनीराजनम्',
      titleEn: 'Mangalarati (short form)',
      note: 'Wave the arati (five or two lamps, or camphor) before the Lord, ringing the bell: three times at the feet, three at the heart, three at the face, and three times from feet to crown — twelve circles in all. Then offer the plate of gandha and akshata.',
      noteKn: 'ಗಂಟೆ ಬಾರಿಸುತ್ತಾ ದೇವರಿಗೆ ಆರತಿ (ಐದು ಅಥವಾ ಎರಡು ದೀಪ, ಅಥವಾ ಕರ್ಪೂರ) ಬೆಳಗಿ: ಪಾದಗಳಿಗೆ ಮೂರು, ಹೃದಯಕ್ಕೆ ಮೂರು, ಮುಖಕ್ಕೆ ಮೂರು, ಪಾದದಿಂದ ಕಿರೀಟದವರೆಗೆ ಮೂರು — ಒಟ್ಟು ಹನ್ನೆರಡು ಸುತ್ತು. ನಂತರ ಗಂಧಾಕ್ಷತೆಯ ತಟ್ಟೆಯನ್ನು ಅರ್ಪಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ॐ नमो नारायणाय । मङ्गलनीराजनं समर्पयामि ॥',
          meaning: {
            en: 'Om, salutations to Narayana; I offer the auspicious arati (waving of lights).',
            kn: 'ಓಂ ನಮೋ ನಾರಾಯಣಾಯ; ಮಂಗಳ ನೀರಾಜನವನ್ನು (ಮಂಗಳಾರತಿಯನ್ನು) ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'नीराजनम्',
      titleEn: 'Camphor arati (short form)',
      note: 'Light camphor and wave it before all the deities, ringing the bell; then circle water round it and take the arati with both hands to your eyes.',
      noteKn: 'ಕರ್ಪೂರ ಹಚ್ಚಿ ಗಂಟೆ ಬಾರಿಸುತ್ತಾ ಎಲ್ಲ ದೇವತೆಗಳಿಗೂ ಬೆಳಗಿ; ನಂತರ ಅದರ ಸುತ್ತ ನೀರು ತಿರುಗಿಸಿ, ಎರಡೂ ಕೈಗಳಿಂದ ಆರತಿಯನ್ನು ಕಣ್ಣಿಗೊತ್ತಿಕೊಳ್ಳಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'न तत्र सूर्यो भाति न चन्द्रतारकं\nनेमा विद्युतो भान्ति कुतोऽयमग्निः ।\nतमेव भान्तमनुभाति सर्वं\nतस्य भासा सर्वमिदं विभाति ॥',
          meaning: {
            en: 'There the Sun does not shine, nor the Moon and stars, nor these lightnings — how then this fire? Everything shines only after him who shines; by his light all this is lit. (Katha Upanishad 2.2.15, recited during the camphor arati.)',
            kn: 'ಅಲ್ಲಿ ಸೂರ್ಯನಾಗಲೀ ಚಂದ್ರ–ನಕ್ಷತ್ರಗಳಾಗಲೀ ಮಿಂಚುಗಳಾಗಲೀ ಪ್ರಕಾಶಿಸುವುದಿಲ್ಲ — ಈ ಅಗ್ನಿ ಹೇಗೆ ತಾನೇ? ಪ್ರಕಾಶಿಸುವ ಅವನನ್ನನುಸರಿಸಿಯೇ ಎಲ್ಲವೂ ಪ್ರಕಾಶಿಸುತ್ತದೆ; ಅವನ ಬೆಳಕಿನಿಂದಲೇ ಇದೆಲ್ಲವೂ ಬೆಳಗುತ್ತದೆ. (ಕಠೋಪನಿಷತ್ ೨.೨.೧೫; ಕರ್ಪೂರಾರತಿಯ ಸಮಯದಲ್ಲಿ.)',
          },
        },
        {
          text: 'कर्पूरनीराजनं दर्शयामि ।\nनीराजनानन्तरम् आचमनीयं समर्पयामि ॥',
          meaning: {
            en: 'I show the camphor arati; after the arati I offer water to sip.',
            kn: 'ಕರ್ಪೂರದ ನೀರಾಜನವನ್ನು ತೋರಿಸುತ್ತೇನೆ; ನೀರಾಜನದ ನಂತರ ಆಚಮನಕ್ಕೆ ನೀರು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'मन्त्रपुष्पम्',
      titleEn: 'Mantrapushpa (short form)',
      note: 'Holding flowers, tulasi and akshata in joined palms, recite राजाधिराजाय… and ॐ स्वस्ति साम्राज्यं… (Madhva manuals), or the Mantra Pushpam you know (open “Mantra Pushpam” in Vedic), and offer them at the Lord’s feet three times. Then offer in the mind the royal honours — umbrella, chamara, fan, mirror, dance, song, music and praise.',
      noteKn: 'ಬೊಗಸೆಯಲ್ಲಿ ಹೂವು, ತುಳಸಿ, ಅಕ್ಷತೆ ಹಿಡಿದು “ರಾಜಾಧಿರಾಜಾಯ…”, “ಓಂ ಸ್ವಸ್ತಿ ಸಾಮ್ರಾಜ್ಯಂ…” (ಮಾಧ್ವ ಪುಸ್ತಕಗಳು) ಅಥವಾ ನಿಮಗೆ ತಿಳಿದ ಮಂತ್ರಪುಷ್ಪ (ವೈದಿಕ ವಿಭಾಗದಲ್ಲಿ “ಮಂತ್ರಪುಷ್ಪಂ” ತೆರೆಯಿರಿ) ಹೇಳಿ ದೇವರ ಪಾದಗಳಿಗೆ ಮೂರು ಬಾರಿ ಅರ್ಪಿಸಿ. ನಂತರ ಛತ್ರ, ಚಾಮರ, ವ್ಯಜನ, ದರ್ಪಣ, ನೃತ್ಯ, ಗೀತ, ವಾದ್ಯ, ಸ್ತೋತ್ರ ಮುಂತಾದ ರಾಜೋಪಚಾರಗಳನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಅರ್ಪಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ॐ राजाधिराजाय प्रसह्यसाहिने । नमो वयं वैश्रवणाय कुर्महे ।\nस मे कामान्कामकामाय मह्यम् । कामेश्वरो वैश्रवणो ददातु ।\nकुबेराय वैश्रवणाय । महाराजाय नमः ॥',
          meaning: {
            en: 'We bow to Vaishravana, king of kings, who prevails by his might. May he, the lord of desires, grant my wishes to me who long for them. Salutations to Kubera Vaishravana, the great king.',
            kn: 'ರಾಜಾಧಿರಾಜನೂ, ತನ್ನ ಶಕ್ತಿಯಿಂದ ಎಲ್ಲರನ್ನೂ ಗೆಲ್ಲುವವನೂ ಆದ ವೈಶ್ರವಣನಿಗೆ ನಾವು ನಮಸ್ಕರಿಸುತ್ತೇವೆ. ಕಾಮೇಶ್ವರನಾದ ಆ ವೈಶ್ರವಣನು ಬಯಕೆಯುಳ್ಳ ನನಗೆ ನನ್ನ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಕರುಣಿಸಲಿ. ಮಹಾರಾಜನಾದ ವೈಶ್ರವಣ ಕುಬೇರನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'मन्त्रपुष्पं समर्पयामि ॥',
          meaning: {
            en: 'I offer the mantra-pushpa — flowers offered with Vedic mantras.',
            kn: 'ಮಂತ್ರಪುಷ್ಪವನ್ನು — ವೇದಮಂತ್ರಗಳೊಂದಿಗೆ ಹೂವುಗಳನ್ನು — ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'मन्त्रपुष्पम्',
      titleEn: 'Mantrapushpa (short form)',
      note: 'Holding flowers in joined palms, recite the Mantra Pushpam (open “Mantra Pushpam” in Vedic; at least योऽपां पुष्पं वेद…) and offer the flowers at the feet of the deities.',
      noteKn: 'ಬೊಗಸೆಯಲ್ಲಿ ಹೂವು ಹಿಡಿದು ಮಂತ್ರಪುಷ್ಪ ಹೇಳಿ (ವೈದಿಕ ವಿಭಾಗದಲ್ಲಿ “ಮಂತ್ರಪುಷ್ಪಂ” ತೆರೆಯಿರಿ; ಕನಿಷ್ಠ “ಯೋಽಪಾಂ ಪುಷ್ಪಂ ವೇದ…”) ದೇವತೆಗಳ ಪಾದಗಳಿಗೆ ಹೂವುಗಳನ್ನು ಅರ್ಪಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'योऽपां पुष्पं वेद । पुष्पवान्प्रजावान्पशुमान्भवति ।\nचन्द्रमा वा अपां पुष्पम् । पुष्पवान्प्रजावान्पशुमान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'One who knows the flower of the waters becomes rich in flowers, offspring and cattle. The moon is the flower of the waters; one who knows this becomes rich in flowers, offspring and cattle. One who knows the support of the waters gains a firm support.',
            kn: 'ನೀರಿನ ಹೂವನ್ನು ಅರಿತವನು ಹೂವು, ಸಂತಾನ ಮತ್ತು ಪಶುಸಂಪತ್ತುಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಚಂದ್ರನೇ ನೀರಿನ ಹೂವು; ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು ಹೂವು, ಸಂತಾನ, ಪಶುಸಂಪತ್ತುಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ತಾನೂ ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          text: 'मन्त्रपुष्पं समर्पयामि ॥',
          meaning: {
            en: 'I offer the mantra-pushpa — flowers offered with Vedic mantras.',
            kn: 'ಮಂತ್ರಪುಷ್ಪವನ್ನು — ವೇದಮಂತ್ರಗಳೊಂದಿಗೆ ಹೂವುಗಳನ್ನು — ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'शङ्खभ्रमणं रमादिनैवेद्यं च',
      titleEn: 'Shankha-bhramana and offering to Lakshmi, Vayu and the others (fuller puja)',
      note: 'Fill the conch with pure water and circle it clockwise before the Lord three times — from the feet to the crown, from the navel to the crown, from the heart to the crown — and pour the water into a cup; it removes the evil eye and harmful influences and is sprinkled on the family. Then offer the Lord’s tirtha, sandal, tulasi and flowers, and a portion of the naivedya (with tirtha and tulasi added), to Lakshmi (Sri Sukta), to Mukhyaprana (Balittha Sukta / Vayu Stuti), and to Garuda, Shesha and the others, with रमाब्रह्मादयो देवाः…. A third portion of the cooked food is kept aside, unoffered, for Vaishvadeva, which is done before the meal (it is not given here).',
      noteKn: 'ಶಂಖದಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ ದೇವರ ಮುಂದೆ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ಸುತ್ತಿಸಿ — ಪಾದದಿಂದ ಕಿರೀಟದವರೆಗೆ, ನಾಭಿಯಿಂದ ಕಿರೀಟದವರೆಗೆ, ಹೃದಯದಿಂದ ಕಿರೀಟದವರೆಗೆ — ಆ ನೀರನ್ನು ಬಟ್ಟಲಿಗೆ ಹಾಕಿ; ಇದು ದೃಷ್ಟಿದೋಷ, ಪೀಡೆಗಳನ್ನು ಪರಿಹರಿಸುತ್ತದೆ, ಮನೆಯವರ ಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಲಾಗುತ್ತದೆ. ನಂತರ ದೇವರ ತೀರ್ಥ, ಗಂಧ, ತುಳಸಿ, ಹೂವುಗಳನ್ನೂ (ತೀರ್ಥ ತುಳಸಿ ಹಾಕಿದ) ನೈವೇದ್ಯದ ಒಂದು ಭಾಗವನ್ನೂ ಲಕ್ಷ್ಮಿಗೆ (ಶ್ರೀಸೂಕ್ತ), ಮುಖ್ಯಪ್ರಾಣರಿಗೆ (ಬಳಿತ್ಥಾ ಸೂಕ್ತ / ವಾಯುಸ್ತುತಿ), ಗರುಡ, ಶೇಷಾದಿಗಳಿಗೆ “ರಮಾಬ್ರಹ್ಮಾದಯೋ ದೇವಾಃ…” ಎಂದು ಅರ್ಪಿಸಿ. ಅಡುಗೆಯ ಮೂರನೆಯ ಭಾಗವನ್ನು ನಿವೇದಿಸದೆ ವೈಶ್ವದೇವಕ್ಕಾಗಿ ತೆಗೆದಿಡಿ; ವೈಶ್ವದೇವವನ್ನು ಊಟಕ್ಕೆ ಮೊದಲು ಮಾಡುತ್ತಾರೆ (ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'रमाब्रह्मादयो देवाः सनकाद्याः शुकादयः ।\nश्रीनृसिंहप्रसादोऽयं सर्वे गृह्णन्तु वैष्णवाः ॥',
          meaning: {
            en: 'May Rama (Lakshmi), Brahma and the other gods, Sanaka and the other sages, Shuka and all Vaishnavas receive this prasada of Sri Narasimha.',
            kn: 'ರಮಾ (ಲಕ್ಷ್ಮೀ), ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳು, ಸನಕಾದಿ ಮುನಿಗಳು, ಶುಕಾದಿಗಳು — ಎಲ್ಲ ವೈಷ್ಣವರೂ ಶ್ರೀನೃಸಿಂಹನ ಈ ಪ್ರಸಾದವನ್ನು ಸ್ವೀಕರಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'प्रदक्षिणनमस्कारौ',
      titleEn: 'Pradakshina and namaskara (short form)',
      note: 'Touch the Saligramas and images, close the samputa, and walk round the shrine clockwise (or turn round where you stand) three times; then prostrate fully (sashtanga namaskara), remembering that you are not the doer — Hari is.',
      noteKn: 'ಸಾಲಿಗ್ರಾಮ, ಪ್ರತಿಮೆಗಳನ್ನು ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಿ ಸಂಪುಟವನ್ನು ಮುಚ್ಚಿ, ದೇವರ ಮನೆಯ ಸುತ್ತ (ಅಥವಾ ನಿಂತಲ್ಲೇ) ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ; ನಂತರ “ನಾನು ಕರ್ತನಲ್ಲ, ಹರಿಯೇ ಕರ್ತ” ಎಂದು ನೆನೆದು ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕಾರ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्ति प्रदक्षिणपदे पदे ॥',
          meaning: {
            en: 'Whatever sins there are, even those committed in former births, are destroyed at every step of the circumambulation.',
            kn: 'ಹಿಂದಿನ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದವೂ ಸೇರಿದಂತೆ ಯಾವ ಯಾವ ಪಾಪಗಳಿವೆಯೋ, ಅವೆಲ್ಲವೂ ಪ್ರದಕ್ಷಿಣೆಯ ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗುತ್ತವೆ.',
          },
        },
        {
          text: 'नाहं कर्ता हरिः कर्ता तत्पूजा कर्म चाखिलम् ।\nतथापि मत्कृता पूजा तत्प्रसादेन नान्यथा ॥',
          meaning: {
            en: 'I am not the doer; Hari is the doer, and all action is his worship. Even so, this worship done by me happens only by his grace, not otherwise.',
            kn: 'ನಾನು ಕರ್ತನಲ್ಲ, ಹರಿಯೇ ಕರ್ತ; ಎಲ್ಲ ಕರ್ಮವೂ ಅವನ ಪೂಜೆಯೇ. ಆದರೂ ನಾನು ಮಾಡಿದ ಈ ಪೂಜೆ ಅವನ ಪ್ರಸಾದದಿಂದಲೇ ನಡೆಯಿತು, ಬೇರೆ ರೀತಿಯಿಂದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'प्रदक्षिणनमस्कारौ',
      titleEn: 'Pradakshina and namaskara (short form)',
      note: 'Walk round the deities clockwise (or turn round where you stand) three times, and prostrate (sashtanga namaskara for men).',
      noteKn: 'ದೇವತೆಗಳ ಸುತ್ತ (ಅಥವಾ ನಿಂತಲ್ಲೇ) ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ ನಮಸ್ಕರಿಸಿ (ಪುರುಷರು ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕಾರ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्ति प्रदक्षिणपदे पदे ॥',
          meaning: {
            en: 'Whatever sins there are, even those committed in former births, are destroyed at every step of the circumambulation.',
            kn: 'ಹಿಂದಿನ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದವೂ ಸೇರಿದಂತೆ ಯಾವ ಯಾವ ಪಾಪಗಳಿವೆಯೋ, ಅವೆಲ್ಲವೂ ಪ್ರದಕ್ಷಿಣೆಯ ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗುತ್ತವೆ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Kshamapana and samarpana (short form)',
      note: 'With folded hands ask the Lord to make good whatever was lacking, offer all your actions to Narayana with कायेन वाचा…, and pour water with tulasi and akshata into the plate saying the samarpana.',
      noteKn: 'ಕೈಮುಗಿದು ಕೊರತೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸೆಂದು ಭಗವಂತನನ್ನು ಬೇಡಿ, “ಕಾಯೇನ ವಾಚಾ…” ಎಂದು ಎಲ್ಲ ಕರ್ಮಗಳನ್ನೂ ನಾರಾಯಣನಿಗೆ ಅರ್ಪಿಸಿ, ಸಮರ್ಪಣವಾಕ್ಯ ಹೇಳಿ ತುಳಸಿ–ಅಕ್ಷತೆಗಳೊಂದಿಗೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपःपूजाक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'I bow to Achyuta, by remembering whom and uttering whose name whatever is lacking in austerity, worship and ritual at once becomes complete.',
            kn: 'ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಪೂಜೆ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'O Lord of Rama, whatever I have done lacking in mantra, in action or in devotion — O God, may it be made complete for me.',
            kn: 'ಓ ರಮಾಪತಿ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿಂದ ನಾನು ಏನು ಮಾಡಿದ್ದೇನೋ, ಓ ದೇವ, ಅದು ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
        {
          text: 'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Narayana.',
            kn: 'ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अनया पूजया भारतीरमणमुख्यप्राणान्तर्गत\nश्रीलक्ष्मीनारायणः प्रीयतां प्रीतो भवतु ।\nश्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this worship may Sri Lakshminarayana, who dwells within Mukhyaprana, the beloved of Bharati, be pleased and remain pleased. May it be an offering to Sri Krishna.',
            kn: 'ಈ ಪೂಜೆಯಿಂದ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ, ಪ್ರಸನ್ನನಾಗಿರಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.',
          },
        },
      ],
    },
    {
      title: 'क्षमापणं समर्पणं च',
      titleEn: 'Kshamapana and samarpana (short form)',
      note: 'With folded hands ask forgiveness for any lapses, offer everything to Narayana with कायेन वाचा…, and pour water with akshata into the plate saying the samarpana. Take a few flowers from the deities, smell them and place them on your head.',
      noteKn: 'ಕೈಮುಗಿದು ಲೋಪಗಳಿಗೆ ಕ್ಷಮೆ ಕೇಳಿ, “ಕಾಯೇನ ವಾಚಾ…” ಎಂದು ಎಲ್ಲವನ್ನೂ ನಾರಾಯಣನಿಗೆ ಅರ್ಪಿಸಿ, ಸಮರ್ಪಣವಾಕ್ಯ ಹೇಳಿ ಅಕ್ಷತೆಯೊಂದಿಗೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ದೇವತೆಗಳಿಂದ ಕೆಲವು ಹೂವುಗಳನ್ನು ತೆಗೆದು ಆಘ್ರಾಣಿಸಿ ತಲೆಯ ಮೇಲಿಟ್ಟುಕೊಳ್ಳಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'आवाहनं न जानामि न जानामि विसर्जनम् ।\nपूजां चैव न जानामि क्षमस्व परमेश्वर ॥',
          meaning: {
            en: 'I know not how to invoke you, nor how to bid you farewell, nor how to worship you; forgive me, O Supreme Lord.',
            kn: 'ಆವಾಹನೆಯನ್ನಾಗಲಿ, ವಿಸರ್ಜನೆಯನ್ನಾಗಲಿ, ಪೂಜಾವಿಧಾನವನ್ನಾಗಲಿ ನಾನು ಅರಿಯೆನು; ಓ ಪರಮೇಶ್ವರ, ನನ್ನನ್ನು ಕ್ಷಮಿಸು.',
          },
        },
        {
          text: 'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Narayana.',
            kn: 'ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अनया पूजया पञ्चायतनदेवताः प्रीयन्ताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥',
          meaning: {
            en: 'By this worship may the five deities of the panchayatana be pleased. Om tat sat — may it be an offering to Brahman.',
            kn: 'ಈ ಪೂಜೆಯಿಂದ ಪಂಚಾಯತನ ದೇವತೆಗಳು ಪ್ರೀತರಾಗಲಿ. ಓಂ ತತ್ಸತ್ — ಇದು ಬ್ರಹ್ಮಾರ್ಪಣವಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'तीर्थप्राशनम्',
      titleEn: 'Taking the tirtha (short form)',
      note: 'Take a little of the abhisheka water (tirtha) in the right palm held over the left, and sip it three times: the first for purity of body, the second for dharma, the third for liberation (Madhva manuals). Give tirtha and gandha-akshata to the family. Madhvas: on Ekadashi take the nirmalya-tirtha only once. Smartas who worship Shiva in the centre say शिवपादोदकं in place of विष्णुपादोदकं. After the puja come Vaishvadeva and the meal, which are not part of this text.',
      noteKn: 'ಎಡ ಅಂಗೈಯ ಮೇಲೆ ಬಲ ಅಂಗೈ ಹಿಡಿದು ಸ್ವಲ್ಪ ಅಭಿಷೇಕದ ನೀರನ್ನು (ತೀರ್ಥ) ತೆಗೆದುಕೊಂಡು ಮೂರು ಬಾರಿ ಸೇವಿಸಿ: ಮೊದಲನೆಯದು ದೇಹಶುದ್ಧಿಗೆ, ಎರಡನೆಯದು ಧರ್ಮಸಾಧನೆಗೆ, ಮೂರನೆಯದು ಮೋಕ್ಷಕ್ಕೆ (ಮಾಧ್ವ ಪುಸ್ತಕಗಳು). ಮನೆಯವರಿಗೆ ತೀರ್ಥ, ಗಂಧಾಕ್ಷತೆ ಕೊಡಿ. ಮಾಧ್ವರು: ಏಕಾದಶಿಯಂದು ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥವನ್ನು ಒಮ್ಮೆ ಮಾತ್ರ ತೆಗೆದುಕೊಳ್ಳಿ. ಶಿವನನ್ನು ಮಧ್ಯದಲ್ಲಿಟ್ಟು ಪೂಜಿಸುವ ಸ್ಮಾರ್ತರು “ವಿಷ್ಣುಪಾದೋದಕಂ” ಬದಲು “ಶಿವಪಾದೋದಕಂ” ಎನ್ನುತ್ತಾರೆ. ಪೂಜೆಯ ನಂತರ ವೈಶ್ವದೇವ ಮತ್ತು ಭೋಜನ — ಅವು ಈ ಪಠ್ಯದಲ್ಲಿಲ್ಲ.',
      verses: [
        {
          text: 'अकालमृत्युहरणं सर्वव्याधिविनाशनम् ।\nविष्णुपादोदकं तीर्थं जठरे धारयाम्यहम् ॥',
          meaning: {
            en: 'I take within me this holy water that has washed the feet of Vishnu, which removes untimely death and destroys every disease.',
            kn: 'ಅಕಾಲಮೃತ್ಯುವನ್ನು ಹೋಗಲಾಡಿಸುವ, ಎಲ್ಲ ರೋಗಗಳನ್ನೂ ನಾಶಮಾಡುವ, ವಿಷ್ಣುವಿನ ಪಾದಗಳನ್ನು ತೊಳೆದ ಈ ತೀರ್ಥವನ್ನು ನಾನು ಸೇವಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
  ],
};
