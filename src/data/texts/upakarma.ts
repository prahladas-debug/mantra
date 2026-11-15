/**
 * Upakarma and yajnopavita dharana. Guide to follow the rite, which a priest leads.
 * Sources:
 *  - Yajurveda (Smarta): Upakarma Vidhi, Yajurvediya, K. Dattatreya Shastri (Upanayana Sangha, Bangalore, 1988; scan from Sringeri Vidyabharati Book Centre / eGangotri, archive.org).
 *  - Rigveda (Madhva): Utsarjana-Upakarma Prayoga (Hombale, Gadag; Madhva Rigveda manual, archive.org) and Nutanopakarma (archive.org) for the kamokarshit and manyur-akarshit mantras.
 *  - Rigveda tarpana outline: Ashvalayana Grihya Sutra 3.4-3.5 (GRETIL) and the Rigveda Upakarma Vidhi on sadagopan.org (Sri Vaishnava manual); Gayatri japa sankalpa: hindupad.com and the Dattatreya Shastri manual.
 *  - Rigveda 1.1.1, 2.43.2, 10.191.4 checked against GRETIL (Aufrecht).
 */
import type { Mantra } from '../types';

export const upakarma: Mantra = {
  id: 'upakarma',
  title: 'उपाकर्म',
  titleEn: 'Upakarma and Yajnopavita Dharana',
  category: 'samskara',
  deity: 'Savitri, the Kanda-rishis and the Vedic rishis; Vishnu (Madhva) or Parameshvara (Smarta)',
  source: 'Ashvalayana Grihya Sutra 3.5 and 3.4; Yajurvediya Upakarma Vidhi (K. Dattatreya Shastri, Sringeri); Utsarjana-Upakarma Prayoga (Hombale, Madhva); Rigveda Upakarma Vidhi (Sadagopan.org)',
  summary: 'A guide to follow the yearly upakarma: the maha-sankalpa and the upakarma sankalpa (Rigveda and Yajurveda, Madhva and Smarta), the Rigveda homa and tarpana of the deities, rishis and teachers, the Yajurveda Kanda-rishi tarpana, putting on the new sacred thread (yajnopavita dharana) with its mantra and the release of the old one, the beginning of the Veda, the kamokarshit and manyur-akarshit japa, and the Gayatri japa of 1008 on the next day. Choose your tradition and Veda at the top.',
  summaryKn: 'ವಾರ್ಷಿಕ ಉಪಾಕರ್ಮವನ್ನು ಹಿಂಬಾಲಿಸಲು ಮಾರ್ಗದರ್ಶಿ: ಮಹಾಸಂಕಲ್ಪ ಮತ್ತು ಉಪಾಕರ್ಮ ಸಂಕಲ್ಪ (ಋಗ್ವೇದ–ಯಜುರ್ವೇದ, ಮಾಧ್ವ–ಸ್ಮಾರ್ತ), ಋಗ್ವೇದದ ಹೋಮ ಮತ್ತು ದೇವತಾ–ಋಷಿ–ಆಚಾರ್ಯ ತರ್ಪಣ, ಯಜುರ್ವೇದದ ಕಾಂಡರ್ಷಿ ತರ್ಪಣ, ಹೊಸ ಜನಿವಾರ ಧಾರಣೆ (ಯಜ್ಞೋಪವೀತ ಧಾರಣ) ಮಂತ್ರ ಮತ್ತು ಹಳೆಯದರ ವಿಸರ್ಜನೆ, ವೇದಾರಂಭ, ಕಾಮೋಕಾರ್ಷೀತ್–ಮನ್ಯುರಕಾರ್ಷೀತ್ ಜಪ, ಮರುದಿನದ ೧೦೦೮ ಗಾಯತ್ರೀ ಜಪ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಸಂಪ್ರದಾಯ ಮತ್ತು ವೇದ ಆರಿಸಿ.',
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
  contentNote: 'Upakarma is normally performed with a priest or an elder who leads each step; this page is a guide to follow along and understand what is being done and said. Not given: the full Rigveda and Yajurveda homa mantras and the pahi-trayodasha and viraja homas (the priest recites them); the Rigveda twenty-deity (Agni and others) tarpana list; the Madhva Rigveda sankalpa is a reading from a partly illegible scan and the Madhva Yajurveda sankalpa is the Yajurveda wording with the Madhva opening of other Madhva manuals; the exact reading of the last line of the old-thread verse and the place of the kamokarshit japa in the day are uncertain between manuals. Punyahavachana, Ganapati puja and the nandi rite that open the day are in ‘Punyahavachana’ and the homa texts. Follow your priest and family where they differ.',
  sections: [
    {
      title: 'उपाकर्म',
      titleEn: 'Upakarma: what it is and when it is done',
      note: 'Upakarma (also called Avani Avittam in the south) is the yearly renewal of Vedic study (adhyayopakarma). Rigvedis (Ashvalayana sutra) do it in the month of Shravana, on the day the moon is in Shravana nakshatra (or, the sutra adds, on the fifth tithi with Hasta nakshatra); Yajurvedis do it on the full moon of Shravana. The date is fixed by the panchanga and the matha announcement. The Yajurveda manual consulted lists what the day contains: punyahavachana, Ganapati puja, nandi puja, the pahi-trayodasha homa (thirteen offerings beginning “pahi no agne enase”, an atonement for the delay of the rite), the utsarjana and upakarma homas, the offering to the nine Kanda-rishis (Kanda-rishi homa and tarpana), changing of the sacred thread, and brahmayajna. Rigveda: after homa with the offerings below one takes curd and saktu (barley flour), washes, and begins the Veda by saying the vyahritis and the Savitri (Gayatri) three times and the first verse of the Rigveda. The next day the Gayatri japa follows (last section). The rite is led by a priest or elder; this page is a guide to follow along. Choose your tradition and Veda at the top. Recite this verse first and sprinkle water on yourself.',
      noteKn: 'ಉಪಾಕರ್ಮ (ದಕ್ಷಿಣದಲ್ಲಿ ಆವಣಿ ಅವಿಟ್ಟಂ) ಎಂದರೆ ವೇದಾಧ್ಯಯನದ ವಾರ್ಷಿಕ ನವೀಕರಣ (ಅಧ್ಯಾಯೋಪಾಕರ್ಮ). ಋಗ್ವೇದಿಗಳು (ಆಶ್ವಲಾಯನ ಸೂತ್ರ) ಶ್ರಾವಣ ಮಾಸದಲ್ಲಿ ಶ್ರವಣ ನಕ್ಷತ್ರ ಇರುವ ದಿನ (ಅಥವಾ ಸೂತ್ರದ ಪ್ರಕಾರ ಪಂಚಮಿಯಂದು ಹಸ್ತ ನಕ್ಷತ್ರದಲ್ಲಿ) ಮಾಡುತ್ತಾರೆ; ಯಜುರ್ವೇದಿಗಳು ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಯಂದು. ದಿನವನ್ನು ಪಂಚಾಂಗ ಮತ್ತು ಮಠಗಳ ನಿರ್ಣಯದಂತೆ ನಿರ್ಧರಿಸುತ್ತಾರೆ. ನೋಡಿದ ಯಜುರ್ವೇದ ಪುಸ್ತಕವು ಆ ದಿನದ ಕರ್ಮಗಳನ್ನು ಪಟ್ಟಿಮಾಡುತ್ತದೆ: ಪುಣ್ಯಾಹವಾಚನ, ಗಣಪತಿ ಪೂಜೆ, ನಾಂದೀ ಪೂಜೆ, ಪಾಹಿ-ತ್ರಯೋದಶ ಹೋಮ (“ಪಾಹಿ ನೋ ಅಗ್ನ ಏನಸೇ” ಎಂದು ಆರಂಭವಾಗುವ ಹದಿಮೂರು ಆಹುತಿಗಳು — ಕಾಲಾತೀತ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತ), ಉತ್ಸರ್ಜನ–ಉಪಾಕರ್ಮ ಹೋಮಗಳು, ಒಂಬತ್ತು ಕಾಂಡರ್ಷಿಗಳ ಹೋಮ–ತರ್ಪಣ, ಯಜ್ಞೋಪವೀತ ಬದಲಾವಣೆ, ಬ್ರಹ್ಮಯಜ್ಞ. ಋಗ್ವೇದದಲ್ಲಿ: ಮುಂದೆ ಹೇಳಿದ ಆಹುತಿಗಳ ಹೋಮದ ನಂತರ ಮೊಸರು–ಸಕ್ತು (ಹುರಿದ ಹಿಟ್ಟು) ಸೇವಿಸಿ, ಮಾರ್ಜನ ಮಾಡಿ, ವ್ಯಾಹೃತಿಗಳನ್ನೂ ಸಾವಿತ್ರಿಯನ್ನೂ (ಗಾಯತ್ರಿ) ಮೂರು ಬಾರಿ ಹೇಳಿ ಋಗ್ವೇದದ ಮೊದಲ ಋಕ್ಕಿನೊಂದಿಗೆ ವೇದಾರಂಭ ಮಾಡುತ್ತಾರೆ. ಮರುದಿನ ಗಾಯತ್ರೀ ಜಪ (ಕೊನೆಯ ವಿಭಾಗ). ಈ ಕರ್ಮವನ್ನು ಪುರೋಹಿತರು ಅಥವಾ ಹಿರಿಯರು ನಡೆಸುತ್ತಾರೆ; ಈ ಪುಟ ಹಿಂಬಾಲಿಸಲು ಮಾರ್ಗದರ್ಶಿ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಸಂಪ್ರದಾಯ ಮತ್ತು ವೇದ ಆರಿಸಿ. ಮೊದಲು ಈ ಶ್ಲೋಕ ಹೇಳಿ ನಿಮ್ಮ ಮೇಲೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ.',
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
      title: 'पूर्वाङ्गम्',
      titleEn: 'Preliminaries: bath, achamana, pranayama and the maha-sankalpa',
      note: 'Bathe (in a river or tank where possible), wear clean clothes, do achamana twice, sit facing east on darbha with the pavitra on the right ring finger, do pranayama, and say the desha-kala sankalpa. For Rig and Yajur alike this begins as in the Sandhyavandane (see ‘Rigveda Sandhyavandane’ and ‘Yajurveda Sandhyavandane’ in the library for the full achamana and pranayama). The two lines below are the sankalpa as given there; fill in the year, ayana, ritu, masa, paksha, tithi, vara and nakshatra from the panchanga (the Rigveda sutra and the manuals say Shravana month and Shravana nakshatra or the full moon for the day). Then the priest asks the ancestors’ blessing and asks for the day’s homa to be taken up with the upakarma sankalpa that follows.',
      noteKn: 'ಸ್ನಾನ ಮಾಡಿ (ಸಾಧ್ಯವಾದರೆ ನದಿ ಅಥವಾ ಕೆರೆಯಲ್ಲಿ), ಶುದ್ಧ ವಸ್ತ್ರ ಧರಿಸಿ, ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ, ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತು ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿಗೆ ಪವಿತ್ರ ಧರಿಸಿ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ದೇಶಕಾಲ ಸಂಕಲ್ಪ ಹೇಳಿ. ಋಗ್ವೇದ–ಯಜುರ್ವೇದ ಎರಡಕ್ಕೂ ಇದು ಸಂಧ್ಯಾವಂದನೆಯಂತೆ ಆರಂಭವಾಗುತ್ತದೆ (ಆಚಮನ–ಪ್ರಾಣಾಯಾಮಗಳಿಗೆ ಗ್ರಂಥಾಲಯದಲ್ಲಿ ‘ಸಂಧ್ಯಾವಂದನೆ — ಋಗ್ವೇದ’ ಮತ್ತು ‘ಸಂಧ್ಯಾವಂದನೆ — ಯಜುರ್ವೇದ’ ನೋಡಿ). ಕೆಳಗಿನ ಎರಡು ಸಾಲುಗಳು ಅಲ್ಲಿರುವ ಸಂಕಲ್ಪ; ವರ್ಷ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳನ್ನು ಪಂಚಾಂಗದಿಂದ ಭರ್ತಿ ಮಾಡಿ (ಋಗ್ವೇದ ಸೂತ್ರ ಮತ್ತು ಪುಸ್ತಕಗಳ ಪ್ರಕಾರ ಶ್ರಾವಣ ಮಾಸ, ಶ್ರವಣ ನಕ್ಷತ್ರ ಅಥವಾ ಹುಣ್ಣಿಮೆ). ಮುಂದೆ ಹೇಳುವ ಉಪಾಕರ್ಮ ಸಂಕಲ್ಪದೊಂದಿಗೆ ಆ ದಿನದ ಹೋಮ ಕರ್ಮ ಮುಂದುವರಿಯುತ್ತದೆ.',
      verses: [
        {
          text: 'शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य\nअद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nअष्टाविंशतितमे कलियुगे प्रथमपादे\nजम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे\nअमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'At this good and auspicious moment, today, in the age that runs by the command of Vishnu — the second half of Brahma’s life, the Shveta-varaha kalpa, the Vaivasvata manvantara, the first quarter of the twenty-eighth Kali-yuga — in Bharatavarsha, in Dandakaranya south of the Godavari, in the Shalivahana era, in the present year, ayana, season, month, fortnight, tithi, weekday and star so named, on this auspicious day so marked…',
            kn: 'ಶುಭವೂ ಮಂಗಳಕರವೂ ಆದ ಈ ಮುಹೂರ್ತದಲ್ಲಿ, ಇಂದು, ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದ ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಇಪ್ಪತ್ತೆಂಟನೆಯ ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಭರತವರ್ಷದಲ್ಲಿ ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          text: 'मम उपात्तसमस्तदुरितक्षयद्वारा\nश्रीपरमेश्वरप्रीत्यर्थं',
          meaning: {
            en: 'for the destruction of all the sins I have gathered, and through that for the pleasure of the Supreme Lord,',
            kn: 'ನಾನು ಗಳಿಸಿಕೊಂಡಿರುವ ಸಮಸ್ತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
      ],
    },
    {
      title: 'उपाकर्मसङ्कल्पः',
      titleEn: 'Upakarma sankalpa',
      note: 'Say, releasing water at करिष्ये. The Madhva Rigveda wording is from the Hombale Madhva manual (Utsarjana-Upakarma Prayoga), the Smarta Yajurveda wording from K. Dattatreya Shastri’s Yajurvediya Upakarma Vidhi (Sringeri), and the Rigveda wording from the Ashvalayana sutra practice (the sankalpa as given in the Rigveda manual used by Sri Vaishnava families, with Parameshvara in place of Narayana for Smartas). The Madhva Yajurveda sankalpa is the Yajurveda wording with the Madhva opening of the Madhva manuals (भारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया श्रीविष्णुप्रीत्यर्थम्); no separate Madhva Yajurveda upakarma manual could be read. Wording differs by family and manual; the priest’s is final.',
      noteKn: '“ಕರಿಷ್ಯೇ” ಎಂದಾಗ ನೀರು ಬಿಡಿ. ಮಾಧ್ವ ಋಗ್ವೇದ ಪಾಠವು ಹೊಂಬಾಳೆಯವರ ಮಾಧ್ವ ಪುಸ್ತಕದಿಂದ (ಉತ್ಸರ್ಜನ–ಉಪಾಕರ್ಮ ಪ್ರಯೋಗ), ಸ್ಮಾರ್ತ ಯಜುರ್ವೇದ ಪಾಠವು ಕೆ. ದತ್ತಾತ್ರೇಯ ಶಾಸ್ತ್ರಿಗಳ ಯಜುರ್ವೇದೀಯ ಉಪಾಕರ್ಮ ವಿಧಿಯಿಂದ (ಶೃಂಗೇರಿ), ಋಗ್ವೇದ ಪಾಠವು ಆಶ್ವಲಾಯನ ಸೂತ್ರದ ಪದ್ಧತಿಯ ಋಗ್ವೇದ ಪುಸ್ತಕದ ಸಂಕಲ್ಪದಿಂದ (ಸ್ಮಾರ್ತರಿಗೆ ನಾರಾಯಣನ ಬದಲು ಪರಮೇಶ್ವರ). ಮಾಧ್ವ ಯಜುರ್ವೇದ ಸಂಕಲ್ಪವು ಯಜುರ್ವೇದ ಪಾಠಕ್ಕೆ ಮಾಧ್ವ ಪುಸ್ತಕಗಳ ಆರಂಭ (“ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀವಿಷ್ಣು ಪ್ರೇರಣಯಾ ಶ್ರೀವಿಷ್ಣು ಪ್ರೀತ್ಯರ್ಥಂ”) ಸೇರಿಸಿದ್ದು; ಪ್ರತ್ಯೇಕ ಮಾಧ್ವ ಯಜುರ್ವೇದ ಉಪಾಕರ್ಮ ಪುಸ್ತಕ ದೊರೆಯಲಿಲ್ಲ. ಪುಸ್ತಕ, ಮನೆತನ ಭೇದದಿಂದ ಪಾಠ ಬದಲಾಗುತ್ತದೆ; ಪುರೋಹಿತರದೇ ಅಂತಿಮ.',
      verses: [
        {
          text: 'अध्याप्यानाम् अध्येष्यमाणानां च छन्दसां सवीर्यत्वाय\nभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया श्रीविष्णुप्रीत्यर्थम्\nएभिर्ब्राह्मणैः सह अद्य उपाकर्माख्यं कर्म करिष्ये ॥',
          meaning: {
            en: 'For the strengthening of the Vedic texts that have been taught and are to be studied, moved by Sri Vishnu who dwells in Mukhyaprana, the beloved of Bharati, and for His pleasure: together with these brahmanas I shall today perform the rite called upakarma.',
            kn: 'ಕಲಿಸಿದ ಮತ್ತು ಇನ್ನು ಕಲಿಯಬೇಕಾದ ವೇದಗಳು ಸವೀರ್ಯವಾಗಲು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಈ ಬ್ರಾಹ್ಮಣರೊಡನೆ ಇಂದು ಉಪಾಕರ್ಮ ಎಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
          when: { tradition: ['madhva'], veda: ['rig'] },
        },
        {
          text: 'श्रावण्यां श्रवणनक्षत्रे अधीतानां छन्दसाम् अयातयामत्वाय वीर्यवत्तासिद्ध्यर्थम्\nश्रीपरमेश्वरप्रीत्यर्थम् अध्यायोपाकर्म करिष्ये ।\nतदङ्गं तर्पणादि करिष्ये । तदङ्गं स्नानं करिष्ये ॥',
          meaning: {
            en: 'In the month of Shravana, under the Shravana star: so that the Vedic texts already learnt may not grow stale and may be full of strength, and for the pleasure of the Supreme Lord, I shall perform the study-upakarma. As part of it I shall do the tarpana and the rest; as part of it I shall bathe.',
            kn: 'ಶ್ರಾವಣ ಮಾಸದ ಶ್ರವಣ ನಕ್ಷತ್ರದಲ್ಲಿ, ಕಲಿತ ವೇದಗಳು ಹಳಸದೆ ಸವೀರ್ಯವಾಗಿರಲು, ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಅಧ್ಯಾಯೋಪಾಕರ್ಮ ಮಾಡುತ್ತೇನೆ. ಅದರ ಅಂಗವಾಗಿ ತರ್ಪಣಾದಿಗಳನ್ನೂ, ಸ್ನಾನವನ್ನೂ ಮಾಡುತ್ತೇನೆ.',
          },
          when: { tradition: ['smarta'], veda: ['rig'] },
        },
        {
          text: 'श्रावण्यां पौर्णमास्यां अध्येष्यमाणानां छन्दसां सवीर्यत्वाय\nअध्यायोपाकर्माङ्गं श्रौतस्मार्तकर्मानुष्ठानयोग्यतासिद्ध्यर्थं\nश्रीपरमेश्वरप्रीत्यर्थम् अध्यायोपाकर्म करिष्ये ॥',
          meaning: {
            en: 'On the full moon of Shravana: so that the Vedic texts to be studied may be full of strength, and so that I may be fit to perform the Vedic and Smarta rites, and for the pleasure of the Supreme Lord, I shall perform the study-upakarma.',
            kn: 'ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಯಂದು, ಇನ್ನು ಕಲಿಯಬೇಕಾದ ವೇದಗಳು ಸವೀರ್ಯವಾಗಲು, ಶ್ರೌತ–ಸ್ಮಾರ್ತ ಕರ್ಮಗಳನ್ನು ಮಾಡಲು ಯೋಗ್ಯತೆ ಸಿದ್ಧಿಸಲು, ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಅಧ್ಯಾಯೋಪಾಕರ್ಮ ಮಾಡುತ್ತೇನೆ.',
          },
          when: { tradition: ['smarta'], veda: ['yajus'] },
        },
        {
          text: 'भारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया श्रीविष्णुप्रीत्यर्थं\nश्रावण्यां पौर्णमास्यां अध्येष्यमाणानां छन्दसां सवीर्यत्वाय\nअध्यायोपाकर्म करिष्ये ॥',
          meaning: {
            en: 'Moved by Sri Vishnu who dwells in Mukhyaprana, the beloved of Bharati, and for His pleasure: on the full moon of Shravana, so that the Vedic texts to be studied may be full of strength, I shall perform the study-upakarma.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಯಂದು ಇನ್ನು ಕಲಿಯಬೇಕಾದ ವೇದಗಳು ಸವೀರ್ಯವಾಗಲು ಅಧ್ಯಾಯೋಪಾಕರ್ಮ ಮಾಡುತ್ತೇನೆ.',
          },
          when: { tradition: ['madhva'], veda: ['yajus'] },
        },
      ],
    },
    {
      title: 'ऋग्वेदोपाकर्महोमः',
      titleEn: 'Rigveda: the homa and the beginning of the Veda',
      note: 'From the Ashvalayana Grihya Sutra (3.5): after the two ajya-bhaga offerings, ajya offerings are made to the nine deities below (the Madhva Hombale manual makes these “the principal deities”), then the dadhi-saktu (curd and barley flour) homa with the Rigveda verses whose openings the sutra gives: “agnim ile purohitam…”, the two verses beginning “kushumbhakas tad abravit…” (the Madhva manual adds “tvam agne dyubhis…” and “avadams tvam shakune…”), “samani va akutih…”, and one more — the priest says them. The sacrificer then eats the curd and saktu, washes, and sits west of the fire on darbha with his hands folded to recite the vyahritis and the Savitri thrice, and the first verse of the Rigveda. The offering list and the three verses follow.',
      noteKn: 'ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರದಂತೆ (೩.೫): ಎರಡು ಆಜ್ಯಭಾಗಗಳ ನಂತರ ಈ ಒಂಬತ್ತು ದೇವತೆಗಳಿಗೆ ಆಜ್ಯಾಹುತಿಗಳನ್ನು ಕೊಡಬೇಕು (ಹೊಂಬಾಳೆ ಮಾಧ್ವ ಪುಸ್ತಕ ಇವನ್ನೇ “ಪ್ರಧಾನ ದೇವತೆಗಳು” ಎನ್ನುತ್ತದೆ); ನಂತರ ಸೂತ್ರ ಹೇಳುವ ಋಗ್ವೇದ ಮಂತ್ರಗಳಿಂದ ದಧಿ–ಸಕ್ತು (ಮೊಸರು–ಹುರಿದ ಹಿಟ್ಟು) ಹೋಮ: “ಅಗ್ನಿಮೀಳೇ ಪುರೋಹಿತಂ…”, “ಕುಷುಂಭಕಸ್ತದಬ್ರವೀತ್…” ಎಂದು ಆರಂಭವಾಗುವ ಎರಡು ಋಕ್ಕುಗಳು (ಮಾಧ್ವ ಪುಸ್ತಕ “ತ್ವಮಗ್ನೇ ದ್ಯುಭಿಸ್ತ್ವಂ…”, “ಆವದಂಸ್ತ್ವಂ ಶಕುನೇ…” ಸೇರಿಸುತ್ತದೆ), “ಸಮಾನೀ ವ ಆಕೂತಿಃ…” ಮತ್ತು ಇನ್ನೊಂದು — ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ. ನಂತರ ಯಜಮಾನನು ಮೊಸರು–ಸಕ್ತು ಸೇವಿಸಿ, ಮಾರ್ಜನ ಮಾಡಿ, ಅಗ್ನಿಯ ಪಶ್ಚಿಮದಲ್ಲಿ ದರ್ಭೆಯ ಮೇಲೆ ಕೈ ಜೋಡಿಸಿ ಕುಳಿತು ವ್ಯಾಹೃತಿಗಳನ್ನೂ ಸಾವಿತ್ರಿಯನ್ನೂ ಮೂರು ಬಾರಿ ಹೇಳಿ, ಋಗ್ವೇದದ ಮೊದಲ ಋಕ್ಕನ್ನು ಹೇಳುತ್ತಾನೆ. ಆಹುತಿ ಪಟ್ಟಿ ಮತ್ತು ಮೂರು ಮಂತ್ರಗಳು ಕೆಳಗಿವೆ.',
      when: { veda: ['rig'] },
      verses: [
        {
          text: 'सावित्र्यै स्वाहा । ब्रह्मणे स्वाहा । श्रद्धायै स्वाहा । मेधायै स्वाहा । प्रज्ञायै स्वाहा ।\nधारणायै स्वाहा । सदसस्पतये स्वाहा । अनुमतये स्वाहा । छन्दोभ्य ऋषिभ्यः स्वाहा ॥',
          meaning: {
            en: 'To Savitri, svaha; to Brahma, svaha; to Shraddha, svaha; to Medha, svaha; to Prajna, svaha; to Dharana, svaha; to Sadaspati, svaha; to Anumati, svaha; to the Rishis of the Vedic metres, svaha. (The nine ajya offerings of the sutra; each is followed by “idam na mama”.)',
            kn: 'ಸಾವಿತ್ರಿಗೆ ಸ್ವಾಹಾ; ಬ್ರಹ್ಮನಿಗೆ ಸ್ವಾಹಾ; ಶ್ರದ್ಧೆಗೆ ಸ್ವಾಹಾ; ಮೇಧೆಗೆ ಸ್ವಾಹಾ; ಪ್ರಜ್ಞೆಗೆ ಸ್ವಾಹಾ; ಧಾರಣೆಗೆ ಸ್ವಾಹಾ; ಸದಸಸ್ಪತಿಗೆ ಸ್ವಾಹಾ; ಅನುಮತಿಗೆ ಸ್ವಾಹಾ; ಛಂದಸ್ಸುಗಳ ಋಷಿಗಳಿಗೆ ಸ್ವಾಹಾ. (ಸೂತ್ರದ ಒಂಬತ್ತು ಆಜ್ಯಾಹುತಿಗಳು; ಪ್ರತಿಯೊಂದರ ನಂತರ “ಇದಂ ನ ಮಮ”.)',
          },
        },
        {
          text: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥',
          meaning: {
            en: 'I praise Agni, the household priest, the god who is the priest of the sacrifice, the invoker, the giver of the best treasure. (Rigveda 1.1.1, the first verse of the Rigveda)',
            kn: 'ಯಜ್ಞದ ಪುರೋಹಿತನೂ ದೇವನೂ ಋತ್ವಿಜನೂ ಹೋತೃವೂ ರತ್ನಗಳನ್ನು ಕೊಡುವವರಲ್ಲಿ ಶ್ರೇಷ್ಠನೂ ಆದ ಅಗ್ನಿಯನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ. (ಋಗ್ವೇದ ೧.೧.೧, ಋಗ್ವೇದದ ಮೊದಲ ಋಕ್ಕು)',
          },
        },
        {
          text: 'उद्गातेव शकुने साम गायसि ब्रह्मपुत्र इव सवनेषु शंससि ।\nवृषेव वाजी शिशुमतीरपीत्या सर्वतो नः शकुने भद्रमा वद विश्वतो नः शकुने पुण्यमा वद ॥',
          meaning: {
            en: 'O bird, you sing the saman like the udgatri, you recite in the soma pressings like the brahma-priest’s son; like a stallion among the nursing mares, speak to us on every side what is good, speak what is holy. (Rigveda 2.43.2)',
            kn: 'ಓ ಪಕ್ಷಿಯೇ, ಉದ್ಗಾತೃವಿನಂತೆ ಸಾಮ ಹಾಡುತ್ತೀಯೆ; ಬ್ರಹ್ಮಪುತ್ರನಂತೆ ಸವನಗಳಲ್ಲಿ ಹೇಳುತ್ತೀಯೆ; ಶಿಶುಗಳ ತಾಯಿ ಕುದುರೆಗಳ ನಡುವಿನ ವೀರ ಕುದುರೆಯಂತೆ, ಎಲ್ಲ ಕಡೆಯಿಂದ ನಮಗೆ ಮಂಗಳವನ್ನು ಹೇಳು, ಪುಣ್ಯವನ್ನು ಹೇಳು. (ಋಗ್ವೇದ ೨.೪೩.೨)',
          },
        },
        {
          text: 'समानी व आकूतिः समाना हृदयानि वः ।\nसमानमस्तु वो मनो यथा वः सुसहासति ॥',
          meaning: {
            en: 'May your intention be the same, your hearts the same, your minds the same, so that you may be well united. (Rigveda 10.191.4)',
            kn: 'ನಿಮ್ಮ ಸಂಕಲ್ಪ ಒಂದೇ ಆಗಿರಲಿ, ನಿಮ್ಮ ಹೃದಯಗಳು ಒಂದೇ ಆಗಿರಲಿ, ನಿಮ್ಮ ಮನಸ್ಸು ಒಂದೇ ಆಗಿರಲಿ — ನೀವು ಚೆನ್ನಾಗಿ ಒಗ್ಗೂಡಿರುವಂತೆ. (ಋಗ್ವೇದ ೧೦.೧೯೧.೪)',
          },
        },
      ],
    },
    {
      title: 'ऋग्वेदतर्पणम्',
      titleEn: 'Rigveda: tarpana of the deities, rishis and teachers',
      note: 'Rice and water are offered, saying तर्पयामि (“I satisfy”) for each line. (1) Thread in the normal position, deva-tirtha (the tips of the fingers): the nine devatas of the upakarma homa — the list below follows the order in the Ashvalayana sutra (3.5.3) and the Rigveda upakarma manual of Sri Vaishnava families (which also has a twenty-deity list beginning with Agni, not reproduced here). (2) Thread as a garland (nivita), rishi-tirtha (base of the little fingers): the rishis of the Rigveda, each line twice in that manual. The list is the sutra’s (Ashvalayana Grihya Sutra 3.4.1). (3) Thread on the right shoulder, pitri-tirtha: the teachers, each line thrice — the sutra’s list (3.4.3), which the priest recites.',
      noteKn: 'ಪ್ರತಿ ಸಾಲಿಗೂ “ತರ್ಪಯಾಮಿ” (ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ) ಎಂದು ಅಕ್ಕಿ–ನೀರು ಬಿಡಬೇಕು. (೧) ಉಪವೀತಿ, ದೇವತೀರ್ಥ (ಬೆರಳ ತುದಿ): ಉಪಾಕರ್ಮ ಹೋಮದ ಒಂಬತ್ತು ದೇವತೆಗಳು — ಕೆಳಗಿನ ಕ್ರಮ ಆಶ್ವಲಾಯನ ಸೂತ್ರದ (೩.೫.೩) ಮತ್ತು ಶ್ರೀವೈಷ್ಣವ ಮನೆತನಗಳ ಋಗ್ವೇದ ಉಪಾಕರ್ಮ ಪುಸ್ತಕದ ಕ್ರಮ (ಆ ಪುಸ್ತಕದಲ್ಲಿ ಅಗ್ನಿಯಿಂದ ಆರಂಭವಾಗುವ ಇಪ್ಪತ್ತು ದೇವತೆಗಳ ಪಟ್ಟಿಯೂ ಇದೆ; ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ). (೨) ನಿವೀತಿ (ಹಾರದಂತೆ), ಋಷಿತೀರ್ಥ (ಕಿರುಬೆರಳ ಬುಡ): ಋಗ್ವೇದದ ಋಷಿಗಳು; ಆ ಪುಸ್ತಕದಲ್ಲಿ ಪ್ರತಿ ಸಾಲನ್ನೂ ಎರಡು ಬಾರಿ. ಪಟ್ಟಿ ಸೂತ್ರದ್ದು (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೩.೪.೧). (೩) ಪ್ರಾಚೀನಾವೀತಿ, ಪಿತೃತೀರ್ಥ: ಆಚಾರ್ಯರು, ಪ್ರತಿ ಸಾಲನ್ನೂ ಮೂರು ಬಾರಿ — ಸೂತ್ರದ ಪಟ್ಟಿ (೩.೪.೩); ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ.',
      when: { veda: ['rig'] },
      verses: [
        {
          text: 'सावित्रीं तर्पयामि । ब्रह्माणं तर्पयामि । श्रद्धां तर्पयामि । मेधां तर्पयामि । प्रज्ञां तर्पयामि ।\nधारणां तर्पयामि । सदसस्पतिं तर्पयामि । अनुमतिं तर्पयामि । छन्दोभ्य ऋषिभ्यस्तर्पयामि ॥',
          meaning: {
            en: 'I satisfy Savitri; I satisfy Brahma; I satisfy Shraddha; I satisfy Medha; I satisfy Prajna; I satisfy Dharana; I satisfy Sadaspati; I satisfy Anumati; I satisfy the Rishis of the metres.',
            kn: 'ಸಾವಿತ್ರಿಯನ್ನು ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ; ಬ್ರಹ್ಮನನ್ನು; ಶ್ರದ್ಧೆಯನ್ನು; ಮೇಧೆಯನ್ನು; ಪ್ರಜ್ಞೆಯನ್ನು; ಧಾರಣೆಯನ್ನು; ಸದಸಸ್ಪತಿಯನ್ನು; ಅನುಮತಿಯನ್ನು; ಛಂದಸ್ಸುಗಳ ಋಷಿಗಳನ್ನು ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'शतर्चिनस्तृप्यन्तु । माध्यमास्तृप्यन्तु । गृत्समदस्तृप्यतु । विश्वामित्रस्तृप्यतु । वामदेवस्तृप्यतु ।\nअत्रिस्तृप्यतु । भरद्वाजस्तृप्यतु । वसिष्ठस्तृप्यतु । प्रगाथास्तृप्यन्तु । पावमान्यस्तृप्यन्तु ।\nक्षुद्रसूक्तास्तृप्यन्तु । महासूक्तास्तृप्यन्तु ॥',
          meaning: {
            en: 'May the Shatarchins be satisfied; the Madhyamas; Gritsamada; Vishvamitra; Vamadeva; Atri; Bharadvaja; Vasishtha; the Pragathas; the Pavamanis; the Kshudra-suktas; the Maha-suktas. (The rishis and groups of the books of the Rigveda; Ashvalayana Grihya Sutra 3.4.1.)',
            kn: 'ಶತರ್ಚಿಗಳು ತೃಪ್ತರಾಗಲಿ; ಮಾಧ್ಯಮರು; ಗೃತ್ಸಮದ; ವಿಶ್ವಾಮಿತ್ರ; ವಾಮದೇವ; ಅತ್ರಿ; ಭರದ್ವಾಜ; ವಸಿಷ್ಠ; ಪ್ರಗಾಥರು; ಪಾವಮಾನಿಗಳು; ಕ್ಷುದ್ರಸೂಕ್ತರು; ಮಹಾಸೂಕ್ತರು. (ಋಗ್ವೇದದ ಮಂಡಲಗಳ ಋಷಿಗಳು ಮತ್ತು ವರ್ಗಗಳು; ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೩.೪.೧.)',
          },
        },
        {
          text: 'सुमन्तुजैमिनिवैशम्पायनपैलसूत्रभाष्यभारतमहाभारतधर्माचार्याः ।\nजानन्तिबाहविगार्ग्यगौतमशाकल्यबाभ्रव्यमाण्डव्यमाण्डूकेयाः ।\nगार्गीवाचक्नवीवडवाप्रातीथेयीसुलभामैत्रेयी ।\nकहोलं कौषीतकं महाकौषीतकं पैङ्ग्यं महापैङ्ग्यं सुयज्ञं शाङ्खायनम् ।\nऐतरेयं महैतरेयं शाकलं बाष्कलं सुजातवक्त्रम् ।\nऔदवाहिं महौदवाहिं सौजामिं शौनकमाश्वलायनम् ।\nये चान्ये आचार्यास्ते सर्वे तृप्यन्त्विति ॥',
          meaning: {
            en: 'May Sumantu, Jaimini, Vaishampayana, Paila, the teachers of the sutras and bhashyas, the Bharata and the Mahabharata and of dharma; Janantibahavi, Gargya, Gautama, Shakalya, Babhravya, Mandavya, Mandukeya; Gargi Vachaknavi, Vadava Pratitheyi, Sulabha Maitreyi; Kahola, Kaushitaki and Mahakaushitaki, Paingya and Mahapaingya, Suyajna, Shankhayana; Aitareya and Mahaitareya, Shakala, Bashkala, Sujatavaktra; Audavahi and Mahaudavahi, Saujami, Shaunaka, Ashvalayana; and all the other teachers — be satisfied. (Ashvalayana Grihya Sutra 3.4.3. For some names the sutra’s reading is uncertain; the priest recites from the manual.)',
            kn: 'ಸುಮಂತು, ಜೈಮಿನಿ, ವೈಶಂಪಾಯನ, ಪೈಲ, ಸೂತ್ರ–ಭಾಷ್ಯ–ಭಾರತ–ಮಹಾಭಾರತ–ಧರ್ಮಗಳ ಆಚಾರ್ಯರು; ಜಾನಂತಿ, ಬಾಹವಿ, ಗಾರ್ಗ್ಯ, ಗೌತಮ, ಶಾಕಲ್ಯ, ಬಾಭ್ರವ್ಯ, ಮಾಂಡವ್ಯ, ಮಾಂಡೂಕೇಯರು; ಗಾರ್ಗೀ ವಾಚಕ್ನವೀ, ವಡವಾ ಪ್ರಾತೀಥೇಯೀ, ಸುಲಭಾ ಮೈತ್ರೇಯೀ; ಕಹೋಳ, ಕೌಷೀತಕ, ಮಹಾಕೌಷೀತಕ, ಪೈಂಗ್ಯ, ಮಹಾಪೈಂಗ್ಯ, ಸುಯಜ್ಞ, ಶಾಂಖಾಯನ; ಐತರೇಯ, ಮಹೈತರೇಯ, ಶಾಕಲ, ಬಾಷ್ಕಲ, ಸುಜಾತವಕ್ತ್ರ; ಔದವಾಹಿ, ಮಹೌದವಾಹಿ, ಸೌಜಾಮಿ, ಶೌನಕ, ಆಶ್ವಲಾಯನ; ಹಾಗೂ ಬೇರೆ ಎಲ್ಲ ಆಚಾರ್ಯರು ತೃಪ್ತರಾಗಲಿ. (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೩.೪.೩. ಕೆಲವು ಹೆಸರುಗಳ ಪಾಠ ಅನಿಶ್ಚಿತ; ಪುರೋಹಿತರು ಪುಸ್ತಕದಿಂದ ಹೇಳುತ್ತಾರೆ.)',
          },
        },
      ],
    },
    {
      title: 'काण्डर्षितर्पणम्',
      titleEn: 'Yajurveda: Kanda-rishi tarpana',
      note: 'Before the homa the nine Kanda-rishis (the divine seers of the sections of the Taittiriya Veda) are invoked in a kalasha and worshipped, and then, with the thread as a garland (nivita), offered tarpana. The Yajurveda manual (K. Dattatreya Shastri) gives these nine. The same offering is made again with the Kanda-rishi homa, and the Smarta manual says the nine kandas are prajapatya, saumya, agneya and vaishvadeva, with the Samhita, Yajniki and Varuni Upanishads, and Brahma and Sadaspati. Say तर्पयामि for each, thrice for the first or as the priest directs.',
      noteKn: 'ಹೋಮಕ್ಕೆ ಮೊದಲು ಒಂಬತ್ತು ಕಾಂಡರ್ಷಿಗಳನ್ನು (ತೈತ್ತಿರೀಯ ವೇದದ ಕಾಂಡಗಳ ದ್ರಷ್ಟಾರರಾದ ದೇವತೆಗಳು) ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸಿ ಪೂಜಿಸಿ, ನಂತರ ನಿವೀತಿಯಾಗಿ (ಹಾರದಂತೆ ಜನಿವಾರ) ತರ್ಪಣ ಕೊಡಬೇಕು. ಯಜುರ್ವೇದ ಪುಸ್ತಕ (ಕೆ. ದತ್ತಾತ್ರೇಯ ಶಾಸ್ತ್ರಿ) ಈ ಒಂಬತ್ತನ್ನು ಕೊಡುತ್ತದೆ. ಅದೇ ಕಾಂಡರ್ಷಿ ಹೋಮದಲ್ಲೂ ಮಾಡಲಾಗುತ್ತದೆ; ಸ್ಮಾರ್ತ ಪುಸ್ತಕದ ಪ್ರಕಾರ ಈ ಕಾಂಡಗಳು ಪ್ರಾಜಾಪತ್ಯ, ಸೌಮ್ಯ, ಆಗ್ನೇಯ, ವೈಶ್ವದೇವ ಮತ್ತು ಸಂಹಿತಾ, ಯಾಜ್ಞಿಕೀ, ವಾರುಣೀ ಉಪನಿಷತ್ತುಗಳು ಹಾಗೂ ಬ್ರಹ್ಮ, ಸದಸಸ್ಪತಿ. ಪ್ರತಿಯೊಂದಕ್ಕೂ “ತರ್ಪಯಾಮಿ” ಎನ್ನಿ (ಮೊದಲನೆಯದು ಮೂರು ಬಾರಿ ಅಥವಾ ಪುರೋಹಿತರ ಸೂಚನೆಯಂತೆ).',
      when: { veda: ['yajus'] },
      verses: [
        {
          text: 'प्राजापत्यं काण्डर्षिं तर्पयामि । सौम्यं काण्डर्षिं तर्पयामि । आग्नेयं काण्डर्षिं तर्पयामि ।\nवैश्वदेवं काण्डर्षिं तर्पयामि । साꣳहितीर्देवता उपनिषदस्तर्पयामि । याज्ञिकीर्देवता उपनिषदस्तर्पयामि ।\nवारुणीर्देवता उपनिषदस्तर्पयामि । ब्रह्माणं स्वयम्भुवं तर्पयामि । सदसस्पतिं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy the seer of the Prajapati section; of the Soma section; of the Agni section; of the Vishvedeva section; the deities of the Samhita Upanishad; of the Yajniki Upanishad; of the Varuni Upanishad; Brahma the self-born; and Sadaspati.',
            kn: 'ಪ್ರಜಾಪತಿ ಕಾಂಡದ ಋಷಿಯನ್ನು ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ; ಸೋಮ ಕಾಂಡದ; ಅಗ್ನಿ ಕಾಂಡದ; ವಿಶ್ವೇದೇವ ಕಾಂಡದ ಋಷಿಯನ್ನು; ಸಂಹಿತಾ ಉಪನಿಷತ್ತಿನ ದೇವತೆಗಳನ್ನು; ಯಾಜ್ಞಿಕೀ ಉಪನಿಷತ್ತಿನ; ವಾರುಣೀ ಉಪನಿಷತ್ತಿನ ದೇವತೆಗಳನ್ನು; ಸ್ವಯಂಭುವಾದ ಬ್ರಹ್ಮನನ್ನು; ಸದಸಸ್ಪತಿಯನ್ನು ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'यज्ञोपवीतधारणसङ्कल्पः',
      titleEn: 'Yajnopavita dharana: the sankalpa (new sacred thread)',
      note: 'After the homa the new sacred threads are blessed. The threads are first smeared with turmeric and worshipped; the knot (brahma-granthi) is invoked with the Gayatri, which is said ten times over the thread; then, with the sankalpa below, the new thread is put on. The Smarta Yajurveda manual (Dattatreya Shastri) gives this sankalpa: for the first thread (the brahmachari’s) to become fit for Vedic and Smarta rites; a second thread is worn for the duties of the householder; and a third as the upper cloth (uttariya) — each with the verse that follows. A thread must first be given to the brahmanas with dakshina; only then does one become fit to wear one’s own. The Madhva form says Sri Vishnu in place of Parameshvara.',
      noteKn: 'ಹೋಮದ ನಂತರ ಹೊಸ ಯಜ್ಞೋಪವೀತಗಳನ್ನು ಸಂಸ್ಕರಿಸುತ್ತಾರೆ. ಮೊದಲು ಅರಿಶಿನ ಹಚ್ಚಿ ಪೂಜಿಸಿ, ಬ್ರಹ್ಮಗ್ರಂಥಿಯಲ್ಲಿ ಗಾಯತ್ರಿಯಿಂದ ಬ್ರಹ್ಮನನ್ನು ಆವಾಹಿಸಿ, ಜನಿವಾರದ ಮೇಲೆ ಹತ್ತು ಬಾರಿ ಗಾಯತ್ರಿ ಜಪಿಸಿ, ಕೆಳಗಿನ ಸಂಕಲ್ಪದೊಂದಿಗೆ ಹೊಸ ಜನಿವಾರ ಧರಿಸುತ್ತಾರೆ. ಸ್ಮಾರ್ತ ಯಜುರ್ವೇದ ಪುಸ್ತಕ (ದತ್ತಾತ್ರೇಯ ಶಾಸ್ತ್ರಿ) ಈ ಸಂಕಲ್ಪವನ್ನು ಕೊಡುತ್ತದೆ: ಮೊದಲ ಜನಿವಾರ (ಬ್ರಹ್ಮಚಾರಿಯದು) ಶ್ರೌತ–ಸ್ಮಾರ್ತ ಕರ್ಮಗಳಿಗೆ ಯೋಗ್ಯತೆ ಸಿದ್ಧಿಸಲು; ಎರಡನೆಯದು ಗೃಹಸ್ಥಾಶ್ರಮ ಧರ್ಮಗಳಿಗೆ; ಮೂರನೆಯದು ಉತ್ತರೀಯದ ಬದಲು — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಮುಂದಿನ ಶ್ಲೋಕದೊಂದಿಗೆ. ಬ್ರಾಹ್ಮಣರಿಗೆ ಮೊದಲು ದಕ್ಷಿಣೆಯೊಂದಿಗೆ ಜನಿವಾರವನ್ನು ದಾನ ಮಾಡಬೇಕು; ಆಗ ಮಾತ್ರ ತನ್ನದನ್ನು ಧರಿಸಲು ಯೋಗ್ಯತೆ. ಮಾಧ್ವ ರೂಪದಲ್ಲಿ ಪರಮೇಶ್ವರನ ಬದಲು ಶ್ರೀವಿಷ್ಣು.',
      verses: [
        {
          text: 'पूर्वोच्चरित एवंगुणविशेषणविशिष्टायां शुभतिथौ\nश्रावण्यां पौर्णमास्यां अध्येष्यमाणानां छन्दसां सवीर्यत्वाय अध्यायोपाकर्माङ्गम्\nश्रौतस्मार्तकर्मानुष्ठानयोग्यतासिद्ध्यर्थं यज्ञोपवीतधारणं करिष्ये ॥',
          meaning: {
            en: 'On the holy tithi with the qualities named before — the full moon of Shravana — so that the Vedic texts to be studied may be full of strength, as part of the study-upakarma, and so that I may be fit to perform the Vedic and Smarta rites, I shall wear the sacred thread.',
            kn: 'ಮೊದಲು ಹೇಳಿದ ಗುಣಗಳಿಂದ ಕೂಡಿದ ಶುಭತಿಥಿಯಾದ ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಯಂದು, ಇನ್ನು ಕಲಿಯಬೇಕಾದ ವೇದಗಳು ಸವೀರ್ಯವಾಗಲು, ಅಧ್ಯಾಯೋಪಾಕರ್ಮದ ಅಂಗವಾಗಿ, ಶ್ರೌತ–ಸ್ಮಾರ್ತ ಕರ್ಮಗಳನ್ನು ಮಾಡಲು ಯೋಗ್ಯತೆ ಸಿದ್ಧಿಸಲು ಯಜ್ಞೋಪವೀತ ಧಾರಣೆ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'यज्ञोपवीतमन्त्रः',
      titleEn: 'Yajnopavita dharana: the mantra for putting on the thread',
      note: 'Holding the thread in both hands, say this verse and put it on over the left shoulder with the right arm out (the Madhva manual: raise the right arm and wear it, then take off the old thread as in the next section). Sip water (achamana) after it. For the second and the third thread, repeat the verse with its own sankalpa line (गृहस्थाश्रमधर्मसाङ्गतासिद्ध्यर्थं द्वितीययज्ञोपवीतधारणं करिष्ये; उपवीतार्थं तृतीययज्ञोपवीतधारणं करिष्ये). The verse is also in the ‘Daily Puja’ text.',
      noteKn: 'ಎರಡೂ ಕೈಗಳಲ್ಲಿ ಜನಿವಾರವನ್ನು ಹಿಡಿದು ಈ ಶ್ಲೋಕ ಹೇಳಿ ಎಡ ಭುಜದ ಮೇಲೆ, ಬಲಗೈ ಹೊರಗಿರುವಂತೆ ಧರಿಸಬೇಕು (ಮಾಧ್ವ ಪುಸ್ತಕ: ಬಲಗೈಯನ್ನು ಮೇಲೆತ್ತಿ ಧರಿಸಿ, ನಂತರ ಮುಂದಿನ ವಿಭಾಗದಂತೆ ಹಳೆಯದನ್ನು ತೆಗೆಯಬೇಕು). ನಂತರ ಆಚಮನ. ಎರಡನೆಯ ಮತ್ತು ಮೂರನೆಯ ಜನಿವಾರಕ್ಕೆ ಅವುಗಳದೇ ಸಂಕಲ್ಪ ವಾಕ್ಯದೊಂದಿಗೆ ಇದೇ ಶ್ಲೋಕ ಹೇಳಿ (“ಗೃಹಸ್ಥಾಶ್ರಮಧರ್ಮಸಾಂಗತಾಸಿದ್ಧ್ಯರ್ಥಂ ದ್ವಿತೀಯಯಜ್ಞೋಪವೀತಧಾರಣಂ ಕರಿಷ್ಯೇ”; “ಉಪವೀತಾರ್ಥಂ ತೃತೀಯಯಜ್ಞೋಪವೀತಧಾರಣಂ ಕರಿಷ್ಯೇ”). ಈ ಶ್ಲೋಕ ‘ನಿತ್ಯ ಪೂಜೆ’ ಪಠ್ಯದಲ್ಲೂ ಇದೆ.',
      verses: [
        {
          text: 'यज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात् ।\nआयुष्यमग्र्यं प्रतिमुञ्च शुभ्रं यज्ञोपवीतं बलमस्तु तेजः ॥',
          meaning: {
            en: 'The sacred thread is supremely purifying, born together with Prajapati in the beginning. Put on this bright, foremost thread that gives long life; may it be strength and splendour. (Offering the sacred thread.)',
            kn: 'ಯಜ್ಞೋಪವೀತವು ಪರಮ ಪವಿತ್ರವಾದುದು, ಆದಿಯಲ್ಲಿ ಪ್ರಜಾಪತಿಯೊಡನೆ ಹುಟ್ಟಿದುದು. ಆಯುಸ್ಸು ಕೊಡುವ ಶ್ರೇಷ್ಠವಾದ ಈ ಶುಭ್ರ ಯಜ್ಞೋಪವೀತವನ್ನು ಧರಿಸು; ಇದು ಬಲವೂ ತೇಜಸ್ಸೂ ಆಗಲಿ. (ಯಜ್ಞೋಪವೀತ ಸಮರ್ಪಣೆ.)',
          },
        },
      ],
    },
    {
      title: 'जीर्णोपवीतविसर्जनम्',
      titleEn: 'Putting off the old thread',
      note: 'After the new thread is on, the old one is taken off over the head (not over the feet) and released into water with this verse (Madhva Hombale manual; the usual form of the verse in other manuals begins उपवीतं छिन्नतन्तुं… and the last pada has वर्चो दीर्घायुरस्तु मे). “May it go to the sea” is said with svaha. It is dropped in flowing water or a pond; it must not be thrown away carelessly.',
      noteKn: 'ಹೊಸ ಜನಿವಾರ ಧರಿಸಿದ ನಂತರ ಹಳೆಯದನ್ನು ತಲೆಯ ಮೇಲಿನಿಂದ (ಕಾಲಿನ ಕಡೆಯಿಂದ ಅಲ್ಲ) ತೆಗೆದು ಈ ಶ್ಲೋಕದೊಡನೆ ನೀರಿನಲ್ಲಿ ಬಿಡಬೇಕು (ಹೊಂಬಾಳೆ ಮಾಧ್ವ ಪುಸ್ತಕ; ಇತರ ಪುಸ್ತಕಗಳ ಸಾಮಾನ್ಯ ಪಾಠ “ಉಪವೀತಂ ಛಿನ್ನತಂತುಂ…” ಎಂದು ಆರಂಭವಾಗಿ ಕೊನೆಯ ಪಾದ “ವರ್ಚೋ ದೀರ್ಘಾಯುರಸ್ತು ಮೇ”). “ಸಮುದ್ರಂ ಗಚ್ಛ ಸ್ವಾಹಾ” ಎನ್ನಬೇಕು. ಹರಿಯುವ ನೀರಿನಲ್ಲಿ ಅಥವಾ ಕೊಳದಲ್ಲಿ ಬಿಡಿ; ಎಲ್ಲೆಂದರಲ್ಲಿ ಎಸೆಯಬಾರದು.',
      verses: [
        {
          text: 'उपवीतं भिन्नतन्तुं जीर्णं कश्मलदूषितम् ।\nविसृजामि जले ब्रह्मन् वर्चो दीर्घायुरस्तु मे ॥\nसमुद्रं गच्छ स्वाहा ॥',
          meaning: {
            en: 'This sacred thread, its strands broken, worn out and soiled with dirt — I release it into the water, O Brahman; may I have radiance and long life. Go to the sea. Svaha.',
            kn: 'ಎಳೆಗಳು ಮುರಿದ, ಜೀರ್ಣವಾದ, ಕಲ್ಮಷದಿಂದ ಕೆಟ್ಟ ಈ ಉಪವೀತವನ್ನು, ಓ ಬ್ರಹ್ಮನೇ, ನೀರಿನಲ್ಲಿ ಬಿಡುತ್ತೇನೆ; ನನಗೆ ತೇಜಸ್ಸೂ ದೀರ್ಘಾಯುಸ್ಸೂ ಇರಲಿ. ಸಮುದ್ರಕ್ಕೆ ಹೋಗು. ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'वेदारम्भः',
      titleEn: 'Yajurveda: the beginning of the Veda and brahmayajna',
      note: 'After the thread, the teacher and all who are present sit on darbha with darbha in their hands and recite the opening of the Veda — the manual lists the opening words of the first four anuvakas of the Taittiriya Samhita (ishe tva…, yajnasya…, shundhadhvam…, karmane vah…) — and close with “upakrta vai vedah” (the Vedas have been begun). Brahmayajna follows (with its tarpana to the gods, rishis and pitrs; the Smarta manual adds the Aruna Kanda-rishis and the Vishvedeva Kanda-rishis), which is done on this day in place of the utsarjana; see the ‘Yajurveda Sandhyavandane’ text for the brahmayajna mantras.',
      noteKn: 'ಜನಿವಾರದ ನಂತರ ಆಚಾರ್ಯರು ಮತ್ತು ಎಲ್ಲರೂ ದರ್ಭೆಯ ಮೇಲೆ ಕೈಯಲ್ಲಿ ದರ್ಭೆ ಹಿಡಿದು ಕುಳಿತು ವೇದದ ಆರಂಭ ಭಾಗವನ್ನು ಪಠಿಸುತ್ತಾರೆ — ಪುಸ್ತಕವು ತೈತ್ತಿರೀಯ ಸಂಹಿತೆಯ ಮೊದಲ ನಾಲ್ಕು ಅನುವಾಕಗಳ ಆರಂಭ ಪದಗಳನ್ನು (ಇಷೇ ತ್ವಾ…, ಯಜ್ಞಸ್ಯ…, ಶುಂಧಧ್ವಂ…, ಕರ್ಮಣೇ ವಃ…) ಹೇಳುತ್ತದೆ — “ಉಪಾಕೃತಾ ವೈ ವೇದಾಃ” ಎಂದು ಮುಗಿಸುತ್ತಾರೆ. ನಂತರ ಬ್ರಹ್ಮಯಜ್ಞ (ದೇವ–ಋಷಿ–ಪಿತೃ ತರ್ಪಣ; ಸ್ಮಾರ್ತ ಪುಸ್ತಕ ಅರುಣ ಕಾಂಡರ್ಷಿಗಳನ್ನೂ ವಿಶ್ವೇದೇವ ಕಾಂಡರ್ಷಿಗಳನ್ನೂ ಸೇರಿಸುತ್ತದೆ); ಉತ್ಸರ್ಜನದ ಬದಲು ಅದೇ ದಿನ ಇದನ್ನು ಮಾಡುತ್ತಾರೆ; ಬ್ರಹ್ಮಯಜ್ಞ ಮಂತ್ರಗಳಿಗೆ ‘ಸಂಧ್ಯಾವಂದನೆ (ಯಜುರ್ವೇದ)’ ಪಠ್ಯ ನೋಡಿ.',
      when: { veda: ['yajus'] },
      verses: [
        {
          text: 'उपाकृता वै वेदाः ॥',
          meaning: {
            en: 'The Vedas have been begun. (Said at the close of the opening recitation.)',
            kn: 'ವೇದಗಳು ಆರಂಭಿಸಲ್ಪಟ್ಟಿವೆ. (ಆರಂಭ ಪಠಣದ ಕೊನೆಯಲ್ಲಿ ಹೇಳುವುದು.)',
          },
        },
      ],
    },
    {
      title: 'कामोऽकार्षीज्जपः',
      titleEn: 'Yajurveda: kamokarshit and manyur-akarshit japa',
      note: 'These two short mantras (Taittiriya Aranyaka / Mahanarayana Upanishad) are the “kamokarshit japa” and “manyur akarshit japa”: the sacrificer admits that desire and anger (kama, manyu) are the doers of his lapses, not he, and offers the offence to them. The Smarta Yajurveda manual lists them with the pahi-trayodasha homa as the prayashchitta for letting the proper time of the rite pass. In the Taittiriya tradition they are also said, with ten or a hundred and eight repetitions, in daily and yearly japa; the number and the place in the day (before or after the homa, and before the next day’s Gayatri japa) vary by family and manual. The text is from the Nutanopakarma manual and the Mahanarayana Upanishad, checked against one more edition; ask your priest or guru for your family’s way.',
      noteKn: 'ಈ ಎರಡು ಚಿಕ್ಕ ಮಂತ್ರಗಳು (ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ / ಮಹಾನಾರಾಯಣ ಉಪನಿಷತ್ತು) “ಕಾಮೋಕಾರ್ಷೀತ್ ಜಪ” ಮತ್ತು “ಮನ್ಯುರಕಾರ್ಷೀತ್ ಜಪ”: ತನ್ನ ತಪ್ಪುಗಳನ್ನು ಮಾಡಿದ್ದು ತಾನಲ್ಲ, ಕಾಮ ಮತ್ತು ಕ್ರೋಧ (ಮನ್ಯು) ಎಂದು ಹೇಳಿ ಆ ಅಪರಾಧವನ್ನು ಅವರಿಗೇ ಅರ್ಪಿಸುವುದು. ಸ್ಮಾರ್ತ ಯಜುರ್ವೇದ ಪುಸ್ತಕ ಕರ್ಮಕಾಲ ಮೀರಿದ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ಇವನ್ನೂ ಪಾಹಿ-ತ್ರಯೋದಶ ಹೋಮವನ್ನೂ ಹೇಳುತ್ತದೆ. ತೈತ್ತಿರೀಯ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಇವನ್ನು ನಿತ್ಯ ಮತ್ತು ವಾರ್ಷಿಕ ಜಪದಲ್ಲಿ ಹತ್ತು ಅಥವಾ ನೂರೆಂಟು ಬಾರಿ ಹೇಳುತ್ತಾರೆ; ಸಂಖ್ಯೆ ಮತ್ತು ದಿನದ ಯಾವ ಸಮಯ (ಹೋಮಕ್ಕೆ ಮೊದಲೋ ನಂತರವೋ, ಮರುದಿನದ ಗಾಯತ್ರೀ ಜಪಕ್ಕೆ ಮೊದಲೋ) ಎಂಬುದು ಮನೆತನ–ಪುಸ್ತಕ ಭೇದ. ಪಠ್ಯ ನೂತನೋಪಾಕರ್ಮ ಪುಸ್ತಕ ಮತ್ತು ಮಹಾನಾರಾಯಣ ಉಪನಿಷತ್ತಿನದು, ಇನ್ನೊಂದು ಆವೃತ್ತಿಯೊಡನೆ ಹೋಲಿಸಿದೆ; ನಿಮ್ಮ ಮನೆತನದ ಕ್ರಮವನ್ನು ಪುರೋಹಿತರು–ಗುರುಗಳಿಂದ ತಿಳಿಯಿರಿ.',
      when: { veda: ['yajus'] },
      verses: [
        {
          text: 'कामोऽकार्षीन्नमो नमः । कामः करोति नाहं करोमि कामः कर्ता नाहं कर्ता\nकामः कारयिता नाहं कारयिता । एष ते काम कामाय स्वाहा ॥',
          meaning: {
            en: 'Desire did it — salutations, salutations. Desire does it, not I; desire is the doer, not I; desire is the one who makes it done, not I. This, O Desire, is for you, for Desire. Svaha.',
            kn: 'ಕಾಮವೇ ಮಾಡಿತು — ನಮೋ ನಮಃ. ಕಾಮವೇ ಮಾಡುತ್ತದೆ, ನಾನಲ್ಲ; ಕಾಮವೇ ಕರ್ತೃ, ನಾನಲ್ಲ; ಕಾಮವೇ ಮಾಡಿಸುವವನು, ನಾನಲ್ಲ. ಓ ಕಾಮವೇ, ಇದು ನಿನಗೆ, ಕಾಮನಿಗೆ. ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'मन्युरकार्षीन्नमो नमः । मन्युः करोति नाहं करोमि मन्युः कर्ता नाहं कर्ता\nमन्युः कारयिता नाहं कारयिता । एष ते मन्यो मन्यवे स्वाहा ॥',
          meaning: {
            en: 'Anger did it — salutations, salutations. Anger does it, not I; anger is the doer, not I; anger is the one who makes it done, not I. This, O Anger, is for you, for Anger. Svaha.',
            kn: 'ಮನ್ಯುವೇ (ಕ್ರೋಧವೇ) ಮಾಡಿತು — ನಮೋ ನಮಃ. ಮನ್ಯುವೇ ಮಾಡುತ್ತದೆ, ನಾನಲ್ಲ; ಮನ್ಯುವೇ ಕರ್ತೃ, ನಾನಲ್ಲ; ಮನ್ಯುವೇ ಮಾಡಿಸುವವನು, ನಾನಲ್ಲ. ಓ ಮನ್ಯುವೇ, ಇದು ನಿನಗೆ, ಮನ್ಯುವಿಗೆ. ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Next day: Gayatri japa (1008)',
      note: 'The day after upakarma (the pratipad; for Yajurvedis of the Apastamba sutra a thousand Gayatri or a thousand samidh-offerings on Shravana pratipad is the rule) all who wear the thread do Gayatri japa as atonement for any faults in their study of the Veda in the past year (mithya-adhita: studying or reciting wrongly). The count is 1008 in the manuals of Sringeri (for a thousand, 1000 in the sutra) and most families. Bathe, sit on darbha facing east, do achamana and pranayama, say the sankalpa below, do the japa-preliminaries (the rishi, chandas and devata of the Gayatri, as in the Sandhyavandane) and japa 1008 times (a japamala of 108 beads, ten rounds, with the count kept), then close with the usual Sandhya closing. Madhvas and Smartas alike. The Gayatri itself is in ‘Gayatri Mantra’ and in the Sandhyavandane texts.',
      noteKn: 'ಉಪಾಕರ್ಮದ ಮರುದಿನ (ಪಾಡ್ಯದಂದು; ಆಪಸ್ತಂಬ ಸೂತ್ರದ ಯಜುರ್ವೇದಿಗಳಿಗೆ ಶ್ರಾವಣ ಪ್ರತಿಪದೆಯಂದು ಸಾವಿರ ಗಾಯತ್ರಿ ಅಥವಾ ಸಾವಿರ ಸಮಿದಾಧಾನ ವಿಧಿ) ಜನಿವಾರ ಧರಿಸಿದ ಎಲ್ಲರೂ ಹಿಂದಿನ ವರ್ಷದ ವೇದಾಧ್ಯಯನದಲ್ಲಿ ಆದ ತಪ್ಪುಗಳಿಗೆ (ಮಿಥ್ಯಾಧೀತ — ತಪ್ಪಾಗಿ ಓದಿದ್ದು) ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ಗಾಯತ್ರೀ ಜಪ ಮಾಡುತ್ತಾರೆ. ಸಂಖ್ಯೆ ಶೃಂಗೇರಿ ಪುಸ್ತಕಗಳಲ್ಲೂ ಹೆಚ್ಚಿನ ಮನೆತನಗಳಲ್ಲೂ ೧೦೦೮ (ಸೂತ್ರದಲ್ಲಿ ೧೦೦೦). ಸ್ನಾನ ಮಾಡಿ, ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತು, ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಕೆಳಗಿನ ಸಂಕಲ್ಪ ಹೇಳಿ, ಜಪಪೂರ್ವಾಂಗಗಳನ್ನು (ಗಾಯತ್ರಿಯ ಋಷಿ, ಛಂದಸ್ಸು, ದೇವತೆ — ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿರುವಂತೆ) ಮಾಡಿ ೧೦೦೮ ಬಾರಿ (೧೦೮ ಮಣಿಗಳ ಜಪಮಾಲೆ, ಹತ್ತು ಸುತ್ತು, ಎಣಿಕೆ ಇಟ್ಟುಕೊಂಡು) ಜಪಿಸಿ, ಸಾಮಾನ್ಯ ಸಂಧ್ಯಾ ಸಮಾಪ್ತಿಯಿಂದ ಮುಗಿಸಬೇಕು. ಮಾಧ್ವರಿಗೂ ಸ್ಮಾರ್ತರಿಗೂ ಒಂದೇ. ಗಾಯತ್ರಿ ‘ಗಾಯತ್ರೀ’ ಮತ್ತು ಸಂಧ್ಯಾವಂದನೆ ಪಠ್ಯಗಳಲ್ಲಿದೆ.',
      verses: [
        {
          text: 'मिथ्याधीतप्रायश्चित्तार्थम् अष्टोत्तरसहस्रसङ्ख्यया गायत्रीमहामन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'As atonement for wrongly studied portions of the Veda, I shall do the japa of the great Gayatri mantra 1008 times.',
            kn: 'ವೇದವನ್ನು ತಪ್ಪಾಗಿ ಓದಿದ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರ ಜಪವನ್ನು ೧೦೦೮ ಬಾರಿ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपःपूजाक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'I bow to Achyuta, by remembering whom and uttering whose name whatever is lacking in austerity, worship and ritual at once becomes complete.',
            kn: 'ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಪೂಜೆ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
  ],
};
