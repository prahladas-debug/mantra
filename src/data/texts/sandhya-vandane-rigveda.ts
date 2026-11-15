/**
 * Rigvediya (Ashvalayana, Shakala) Sandhyavandanam — morning, midday and evening, with
 * Madhva and Smarta forms as practised in Karnataka. Each step is a section per tradition
 * (and per time where the rubric differs), so the reader sees one clear instruction
 * (note / noteKn) followed by the mantras, as in a printed pocket manual.
 * Audited Nov 2026 step by step against scans of: Vadirajacharya Karanam, "Rigvediya Trikala
 * Sandhyavandane" (Uttaradi Matha, 2010; archive.org Rigveda_Trikala_Sandhyavandane_-_Vadirajacharya_Karnam);
 * "Rugvediya Vaishnaviya Trikala Sandhyavandanam" (Gadag; archive.org
 * rugvediya-vaishnaviya-trikala-sandhyavandanam); Srinivas S. Mathad, "Sri Sandhya Sara Sangraha"
 * (Vijayapura, 1996; archive.org SriSandhyaSaraSangraha_-_SrinivasaS.Mathada) — Madhva; Kota Vasudeva
 * Somayaji, "Rgvediya Sandhyavandana" (Mysuru, 2004; archive.org rigvedhiya-sandhyavandana); Balkur
 * Bhaskara Udupa, "Rgvediya Smarta Nityahnika Vidhih" (2001; archive.org sandhyavandane-balkur-copys);
 * B. V. Kamesvara Aiyar, "The Sandhyavandanam of Rig, Yajus and Sama Vedins" (Madras, 1898; archive.org
 * sandhyavandanam00aiyagoog); stotranidhi.com "Rigveda Sandhyavandanam" — Smarta. Riks checked against
 * the GRETIL Aufrecht Rigveda. The corrections are listed in proofreading/sandhya/.
 *
 * Sources collated (with scripts/collate.ts; readings supported by two sources, by the
 * Rigveda samhita or by grammar were preferred):
 *  - Rigvediya Ashvalayana Pratah Sandhyavandanam (Madhva), A. Basargekar,
 *    sanskritdocuments.org "rgsandhya" — Devanagari copy in the Sanchaya archive
 *    (github.com/cahcblr/sanchaya, Vedic texts/RV/rgvediya-sandhya-English.txt).
 *  - Sri Madhwamrutha, "Rigveda Pratha / Sayam Sandhyavandhane" (Madhva, madhwamrutha.org).
 *  - Ashwathavruksha blog, "Rugvediya Sandhyaavandana" (Madhva family lesson; Kannada), 2018.
 *  - Vadirajacharya Karanam, "Yajurvediya Trikala Sandhyavandane" (Uttaradi Matha, 2011) for
 *    the Madhva prayers after the arghyas (hridayastha / ehi tvam / uttishthottishtha) and
 *    the asana mantras shared by both Vedas.
 *  - Samskara blog (satishharitasa.blogspot.com), Rigveda (Ashvalayana) sandhyavandanam
 *    (Smarta, Kannada), based on Rigveda Sandhyadi Nityakarma (Sringeri, 1973) and Rigveda
 *    Prayoga Dipika (Bengaluru, 1999).
 *  - "Rigveda Trikala Sandhyopasanam" data of github.com/saianirudh15/sandhyavandanam-app
 *    and stotranidhi.com "Rigveda Sandhyavandanam" (Smarta, Andhra; Telugu).
 *  - Vishvamitra-smriti 61–64 (github.com/sanskrit/raw_etexts) for the 24 mudra names.
 *  - Sadachara-smriti of Sri Madhvacharya with commentaries for the Madhva order of steps.
 *  - Rigveda Shakala samhita (github.com/sanskrit/raw_etexts) for the text of every rik.
 * Generated from the previous version by a rebuild script; edit this file directly from now on.
 */
import type { Mantra } from '../types';

export const sandhyaVandaneRigveda: Mantra = {
  id: 'sandhya-vandane-rigveda',
  title: 'ऋग्वेदसन्ध्यावन्दनम्',
  titleEn: 'Rigveda Sandhyavandane',
  category: 'sandhya',
  order: 1,
  deity: 'Savitri — Sri Lakshminarayana in the solar orb',
  source: 'Rigveda (Shakala) mantras, Ashvalayana practice; Taittiriya Aranyaka (prashana); Sadachara-smriti',
  summary: 'The complete daily sandhya worship of Rigvedins (Ashvalayana sutra, Shakala shakha) for morning, midday and evening, step by step as in a printed pocket manual: achamana, pranayama, sankalpa, marjana, prashana, aghamarshana, arghya, tarpana, Gayatri japa, upasthana and the closing salutations. Choose Madhva or Smarta and the time of day at the top: each step then shows only its own words and what to do with the hands, water, posture and direction. Families differ in small details, so follow the lesson of your elders where it differs.',
  summaryKn: 'ಋಗ್ವೇದಿಗಳ (ಆಶ್ವಲಾಯನ ಸೂತ್ರ, ಶಾಕಲ ಶಾಖೆ) ಪ್ರಾತಃ, ಮಾಧ್ಯಾಹ್ನಿಕ ಮತ್ತು ಸಾಯಂ ಸಂಧ್ಯಾವಂದನೆಯ ಸಂಪೂರ್ಣ ಕ್ರಮ: ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ಸಂಕಲ್ಪ, ಮಾರ್ಜನ, ಪ್ರಾಶನ, ಅಘಮರ್ಷಣ, ಅರ್ಘ್ಯ, ಗಾಯತ್ರೀ ಜಪ, ಉಪಸ್ಥಾನ ಮತ್ತು ಕೊನೆಯ ನಮಸ್ಕಾರಗಳು. ಮೇಲೆ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಸಂಪ್ರದಾಯವನ್ನೂ ಕಾಲವನ್ನೂ ಆರಿಸಿಕೊಂಡರೆ ಅದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಹಂತಗಳು ಮತ್ತು ಮಂತ್ರಗಳು ಮಾತ್ರ ಕಾಣಿಸುತ್ತವೆ. ಮನೆತನಗಳಲ್ಲಿ ಸಣ್ಣಪುಟ್ಟ ವ್ಯತ್ಯಾಸಗಳಿರುವುದರಿಂದ, ಭಿನ್ನವಾದಲ್ಲಿ ಹಿರಿಯರು ಹೇಳಿಕೊಟ್ಟ ಪಾಠವನ್ನೇ ಅನುಸರಿಸಿ.',
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
      key: 'time',
      title: 'Time of day',
      titleKn: 'ಕಾಲ',
      options: [
        {
          id: 'morning',
          label: 'Morning (Pratah)',
          labelKn: 'ಪ್ರಾತಃಕಾಲ',
        },
        {
          id: 'midday',
          label: 'Midday (Madhyahnika)',
          labelKn: 'ಮಾಧ್ಯಾಹ್ನಿಕ',
        },
        {
          id: 'evening',
          label: 'Evening (Sayam)',
          labelKn: 'ಸಾಯಂಕಾಲ',
        },
      ],
    },
  ],
  difficulty: 'medium',
  completeness: 'complete',
  contentNote: 'Audited in Nov 2026 against the Madhva manuals of the Uttaradi Matha (Karanam), Gadag and Vijayapura (Mathad), and the Smarta manuals of Mysuru (Somayaji), Balkur, Madras (Kamesvara Aiyar) and stotranidhi; every rik was checked against the Rigveda samhita. Families differ in small details, so follow your elders where they differ. Not included, because no two reliable sources agreed: separate morning / midday / evening Gayatri dhyana shlokas; the pratichakshva… / uta yatam… / mo shv adya… riks said while turning round with asav adityo brahma in two Madhva manuals; the mandarahvaya… Gayatri dhyana of the Karnataka Smarta manuals; the Smarta ashtakshara and panchakshara japa; tattva-nyasa and matrika-nyasa (only for those initiated into them); the eight closing mudras; and Smarta additions such as tryambakam… and syona prithivi….',
  sections: [
    {
      title: 'शुद्धिः',
      titleEn: 'Preparation and purification',
      note: 'Bathe before the morning sandhya; for midday and evening at least wash the feet, hands and face. Wear clean dry clothes (dhoti worn with kachche and an upper cloth) with the sacred thread over the left shoulder. Sit on a darbha mat, deer-skin or wooden plank in a clean place: in the morning facing east (or north), at midday facing east or north, in the evening facing north (the evening arghya and japa are then done facing west). Keep ready a panchapatre of water with an uddharane (ladle) for achamana, a second vessel of clean water for arghya, and an empty plate (arghya-patre) to receive offered water. If your family wears a darbha pavitra, put it on the right ring finger now. Then take a little water in the right palm, recite this verse and sprinkle it over your head and body.',
      noteKn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಗೆ ಮೊದಲು ಸ್ನಾನ ಮಾಡಬೇಕು; ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಾಯಂಕಾಲಗಳಲ್ಲಿ ಕನಿಷ್ಠ ಕೈ, ಕಾಲು, ಮುಖ ತೊಳೆದುಕೊಳ್ಳಬೇಕು. ಶುಭ್ರವಾದ ಒಣ ವಸ್ತ್ರಗಳನ್ನು (ಕಚ್ಚೆ ಹಾಕಿದ ಪಂಚೆ ಮತ್ತು ಉತ್ತರೀಯ) ಧರಿಸಿ, ಯಜ್ಞೋಪವೀತವು ಎಡ ಭುಜದ ಮೇಲಿರಲಿ. ಶುದ್ಧವಾದ ಸ್ಥಳದಲ್ಲಿ ದರ್ಭಾಸನ, ಕೃಷ್ಣಾಜಿನ ಅಥವಾ ಮಣೆಯ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಿ: ಬೆಳಗ್ಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ (ಅಥವಾ ಉತ್ತರಾಭಿಮುಖವಾಗಿ), ಮಧ್ಯಾಹ್ನ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ, ಸಾಯಂಕಾಲ ಉತ್ತರಾಭಿಮುಖವಾಗಿ (ಸಾಯಂಕಾಲದ ಅರ್ಘ್ಯ ಮತ್ತು ಜಪವನ್ನು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಮಾಡಬೇಕು). ಆಚಮನಕ್ಕೆ ಉದ್ಧರಣೆಯೊಂದಿಗೆ ನೀರಿನ ಪಂಚಪಾತ್ರೆ, ಅರ್ಘ್ಯಕ್ಕೆ ಶುದ್ಧ ನೀರಿನ ಇನ್ನೊಂದು ಪಾತ್ರೆ, ಅರ್ಪಿಸಿದ ನೀರನ್ನು ಬಿಡಲು ಖಾಲಿ ತಟ್ಟೆ (ಅರ್ಘ್ಯಪಾತ್ರೆ) ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ. ಮನೆತನದಲ್ಲಿ ದರ್ಭೆಯ ಪವಿತ್ರ ಧರಿಸುವ ಪದ್ಧತಿಯಿದ್ದರೆ ಈಗ ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿಗೆ ಧರಿಸಿ. ನಂತರ ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ಈ ಶ್ಲೋಕ ಹೇಳಿ ತಲೆ ಮತ್ತು ಮೈಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
      when: { tradition: ['madhva'] },
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
      title: 'शुद्धिः',
      titleEn: 'Preparation and purification',
      note: 'Bathe before the morning sandhya; at midday and in the evening at least wash the feet, hands and face. Wear clean dry clothes (dhoti in kachche style and an upper cloth) with the sacred thread over the left shoulder, and apply bhasma or your family tilaka. Sit on a darbha mat, deer-skin or wooden plank in a clean place, facing east in the morning, east or north at midday and west (or north) in the evening. Keep ready a panchapatre of water with an uddharane for achamana, a second vessel of clean water for arghya and an empty plate to receive offered water; put on the darbha pavitra if your family wears one. Take a little water in the right palm, recite this verse and sprinkle it over your head and body.',
      noteKn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಗೆ ಮೊದಲು ಸ್ನಾನ ಮಾಡಬೇಕು; ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಂಜೆ ಕನಿಷ್ಠ ಕೈ, ಕಾಲು, ಮುಖ ತೊಳೆದುಕೊಳ್ಳಬೇಕು. ಕಚ್ಚೆ ಹಾಕಿದ ಪಂಚೆ, ಉತ್ತರೀಯ ಧರಿಸಿ, ಯಜ್ಞೋಪವೀತ ಎಡಭುಜದ ಮೇಲಿರಲಿ; ಭಸ್ಮ ಅಥವಾ ಮನೆತನದ ತಿಲಕ ಧರಿಸಿ. ಶುದ್ಧ ಸ್ಥಳದಲ್ಲಿ ದರ್ಭಾಸನ, ಕೃಷ್ಣಾಜಿನ ಅಥವಾ ಮಣೆಯ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಿ: ಬೆಳಗ್ಗೆ ಪೂರ್ವಕ್ಕೆ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ, ಸಂಜೆ ಪಶ್ಚಿಮಕ್ಕೆ (ಅಥವಾ ಉತ್ತರಕ್ಕೆ) ಮುಖಮಾಡಿ. ಉದ್ಧರಣೆಯೊಂದಿಗೆ ಪಂಚಪಾತ್ರೆ, ಅರ್ಘ್ಯಕ್ಕೆ ಶುದ್ಧಜಲದ ಪಾತ್ರೆ, ನೀರು ಬಿಡಲು ಖಾಲಿ ತಟ್ಟೆ ಇಟ್ಟುಕೊಳ್ಳಿ; ಪದ್ಧತಿಯಿದ್ದರೆ ದರ್ಭೆಯ ಪವಿತ್ರ ಧರಿಸಿ. ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ಈ ಶ್ಲೋಕ ಹೇಳಿ ತಲೆ ಮತ್ತು ಮೈಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
      when: { tradition: ['smarta'] },
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
      title: 'ऊर्ध्वपुण्ड्रधारणम्',
      titleEn: 'Urdhvapundra and mudras (Madhva)',
      note: 'Put a spoonful of water (nirmalya tirtha from the day’s puja if available, otherwise clean water) in the left palm and rub gopichandana into a paste while reciting the first verse. Apply it at twelve places, saying one of the twelve names for each: forehead — Keshava; middle of the abdomen — Narayana; chest — Madhava; front of the neck — Govinda; right side of the abdomen — Vishnu; right arm/shoulder — Madhusudana; right side of the neck — Trivikrama; left side of the abdomen — Vamana; left arm/shoulder — Shridhara; left side of the neck — Hrishikesha; lower back — Padmanabha; back of the neck — Damodara; then touch the top of the head with what remains. On the forehead draw two upright parallel lines (urdhvapundra) with the finger. In the morning, then stamp the mudras with gopichandana — chakra, shankha, gada, padma and finally Narayana mudra over them — in the places your family follows (chakra on the right side, shankha on the left).',
      noteKn: 'ಎಡ ಅಂಗೈಯಲ್ಲಿ ಒಂದು ಉದ್ಧರಣೆ ನೀರು (ದೇವರ ಪೂಜೆಯ ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥ ಇದ್ದರೆ ಅದು, ಇಲ್ಲವಾದರೆ ಶುದ್ಧ ನೀರು) ಹಾಕಿಕೊಂಡು ಮೊದಲ ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ಗೋಪೀಚಂದನವನ್ನು ತೇಯ್ದು ಗಂಧ ಮಾಡಿಕೊಳ್ಳಿ. ಹನ್ನೆರಡು ನಾಮಗಳನ್ನು ಒಂದೊಂದಾಗಿ ಹೇಳುತ್ತಾ ಹನ್ನೆರಡು ಸ್ಥಳಗಳಲ್ಲಿ ಧರಿಸಿ: ಹಣೆ — ಕೇಶವ; ಹೊಟ್ಟೆಯ ಮಧ್ಯ — ನಾರಾಯಣ; ಎದೆ — ಮಾಧವ; ಕಂಠದ ಮುಂಭಾಗ — ಗೋವಿಂದ; ಹೊಟ್ಟೆಯ ಬಲಭಾಗ — ವಿಷ್ಣು; ಬಲ ಭುಜ — ಮಧುಸೂದನ; ಕುತ್ತಿಗೆಯ ಬಲಭಾಗ — ತ್ರಿವಿಕ್ರಮ; ಹೊಟ್ಟೆಯ ಎಡಭಾಗ — ವಾಮನ; ಎಡ ಭುಜ — ಶ್ರೀಧರ; ಕುತ್ತಿಗೆಯ ಎಡಭಾಗ — ಹೃಷೀಕೇಶ; ಬೆನ್ನಿನ ಕೆಳಭಾಗ — ಪದ್ಮನಾಭ; ಕುತ್ತಿಗೆಯ ಹಿಂಭಾಗ — ದಾಮೋದರ; ಉಳಿದ ಗಂಧವನ್ನು ನೆತ್ತಿಗೆ ಮುಟ್ಟಿಸಿ. ಹಣೆಯಲ್ಲಿ ಬೆರಳಿನಿಂದ ಮೇಲ್ಮುಖವಾದ ಎರಡು ಸಮಾನಾಂತರ ರೇಖೆಗಳನ್ನು (ಊರ್ಧ್ವಪುಂಡ್ರ) ಎಳೆಯಿರಿ. ಬೆಳಗ್ಗೆ ನಂತರ ಗೋಪೀಚಂದನದಿಂದ ಚಕ್ರ, ಶಂಖ, ಗದಾ, ಪದ್ಮ ಮುದ್ರೆಗಳನ್ನೂ ಕೊನೆಗೆ ಅವುಗಳ ಮೇಲೆ ನಾರಾಯಣ ಮುದ್ರೆಯನ್ನೂ ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ ಧರಿಸಿ (ಚಕ್ರ ಬಲಭಾಗದಲ್ಲಿ, ಶಂಖ ಎಡಭಾಗದಲ್ಲಿ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'गोपीचन्दन पापघ्न विष्णुदेहसमुद्भव ।\nचक्राङ्कित नमस्तेऽस्तु धारणान्मुक्तिदो भव ॥',
          meaning: {
            en: 'O gopichandana, destroyer of sin, sprung from Vishnu’s own body and marked with his discus: salutations to you. Worn on my body, become the giver of liberation.',
            kn: 'ಪಾಪವನ್ನು ನಾಶಮಾಡುವ, ವಿಷ್ಣುವಿನ ದೇಹದಿಂದ ಉದ್ಭವಿಸಿದ, ಚಕ್ರಚಿಹ್ನೆಯುಳ್ಳ ಓ ಗೋಪೀಚಂದನವೇ, ನಿನಗೆ ನಮಸ್ಕಾರ. ನಿನ್ನನ್ನು ಧರಿಸುವುದರಿಂದ ನನಗೆ ಮೋಕ್ಷವನ್ನು ಕೊಡುವಂಥದ್ದಾಗು.',
          },
        },
        {
          text: 'ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ।\nॐ गोविन्दाय नमः । ॐ विष्णवे नमः । ॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः । ॐ वामनाय नमः । ॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः । ॐ दामोदराय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord in his twelve forms, Keshava to Damodara, one placed on each of the twelve marks of the body.',
            kn: 'ಕೇಶವನಿಂದ ದಾಮೋದರನವರೆಗಿನ ಭಗವಂತನ ಹನ್ನೆರಡು ರೂಪಗಳಿಗೆ ನಮಸ್ಕಾರ; ಒಂದೊಂದು ರೂಪವನ್ನೂ ದೇಹದ ಒಂದೊಂದು ಊರ್ಧ್ವಪುಂಡ್ರದಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'श्रौताचमनम्',
      titleEn: 'Shrauta achamana (with the names of the Vedas)',
      note: 'Manuals speak of three kinds of achamana. (1) Shrauta or Vaidika achamana, with the names of the Vedas (ऋग्वेदाय स्वाहा …). (2) Achamana with the Gayatri and apo hi shtha, with twenty-four touches — the Devi Bhagavata and Andhra manuals call this one Shrauta, the Madhva commentary on the Sadachara-smriti calls it Smarta. (3) Keshavadi achamana with the twenty-four names of Vishnu — called Pauranika in the Devi Bhagavata and Vaishnava in the Madhva commentary. The Karnataka Rigvedi Smarta manuals (Kota Vasudeva Somayaji, Mysuru; Balkur Bhaskara Udupa) begin with this Shrauta achamana. Sip from the base of the palm (gokarna shape, water to cover a grain of urad) three times, with ॐ ऋग्वेदाय स्वाहा, ॐ यजुर्वेदाय स्वाहा and ॐ सामवेदाय स्वाहा. Then, with the names that follow, touch: the left and right palm (Atharvaveda, Itihasa-Purana); the lower and upper lip (Agni, Agni); the right and left eye with thumb and index finger (Surya, Chandra); the right and left nostril with thumb and middle finger (Vayu, Prana); the ears with thumb and ring finger (the directions); the arms with thumb and little finger (Indra); with all the fingers the feet (Prithivi), the knees (Antariksha), the lower body (Dyaus), the navel (Brahma), the heart (Vishnu) and the head (Shiva). Go through it twice. (Somayaji touches the nostrils before the eyes and ends with सदाशिवाय नमः.) Many families then also do the Keshavadi achamana; others do only the Keshavadi. Follow your family.',
      noteKn: 'ಪುಸ್ತಕಗಳು ಮೂರು ಬಗೆಯ ಆಚಮನಗಳನ್ನು ಹೇಳುತ್ತವೆ: (೧) ವೇದಗಳ ಹೆಸರುಗಳಿಂದ ಮಾಡುವ ಶ್ರೌತ ಅಥವಾ ವೈದಿಕ ಆಚಮನ (“ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ…”). (೨) ಗಾಯತ್ರಿ ಮತ್ತು “ಆಪೋ ಹಿಷ್ಠಾ”ಗಳಿಂದ ಇಪ್ಪತ್ನಾಲ್ಕು ಸ್ಪರ್ಶಗಳೊಡನೆ ಮಾಡುವ ಆಚಮನ — ದೇವೀಭಾಗವತ ಮತ್ತು ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು ಇದನ್ನು ಶ್ರೌತ ಎನ್ನುತ್ತವೆ, ಸದಾಚಾರಸ್ಮೃತಿಯ ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನ ಸ್ಮಾರ್ತ ಎನ್ನುತ್ತದೆ. (೩) ವಿಷ್ಣುವಿನ ಇಪ್ಪತ್ನಾಲ್ಕು ನಾಮಗಳಿಂದ ಮಾಡುವ ಕೇಶವಾದಿ ಆಚಮನ — ದೇವೀಭಾಗವತದಲ್ಲಿ ಪೌರಾಣಿಕ, ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ವೈಷ್ಣವ ಆಚಮನ. ಕರ್ನಾಟಕದ ಋಗ್ವೇದಿ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು (ಕೋಟ ವಾಸುದೇವ ಸೋಮಯಾಜಿ, ಮೈಸೂರು; ಬಳ್ಕೂರು ಭಾಸ್ಕರ ಉಡುಪ) ಈ ಶ್ರೌತ ಆಚಮನದಿಂದ ಆರಂಭಿಸುತ್ತವೆ. ಗೋಕರ್ಣಾಕಾರದ ಅಂಗೈಯ ಬುಡದಿಂದ (ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು) “ಓಂ ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ”, “ಓಂ ಯಜುರ್ವೇದಾಯ ಸ್ವಾಹಾ”, “ಓಂ ಸಾಮವೇದಾಯ ಸ್ವಾಹಾ” ಎಂದು ಮೂರು ಬಾರಿ ಸೇವಿಸಿ. ನಂತರ ಮುಂದಿನ ನಾಮಗಳೊಡನೆ ಹೀಗೆ ಮುಟ್ಟಿ: ಎಡ, ಬಲ ಅಂಗೈ (ಅಥರ್ವವೇದ, ಇತಿಹಾಸ–ಪುರಾಣ); ಕೆಳಗಿನ, ಮೇಲಿನ ತುಟಿ (ಅಗ್ನಿ, ಅಗ್ನಿ); ಹೆಬ್ಬೆರಳು–ತೋರುಬೆರಳಿನಿಂದ ಬಲ, ಎಡ ಕಣ್ಣು (ಸೂರ್ಯ, ಚಂದ್ರ); ಹೆಬ್ಬೆರಳು–ನಡುಬೆರಳಿನಿಂದ ಬಲ, ಎಡ ಮೂಗಿನ ಹೊಳ್ಳೆ (ವಾಯು, ಪ್ರಾಣ); ಹೆಬ್ಬೆರಳು–ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಕಿವಿಗಳು (ದಿಕ್ಕುಗಳು); ಹೆಬ್ಬೆರಳು–ಕಿರುಬೆರಳಿನಿಂದ ಭುಜಗಳು (ಇಂದ್ರ); ಎಲ್ಲ ಬೆರಳುಗಳಿಂದ ಪಾದಗಳು (ಪೃಥ್ವಿ), ಮೊಣಕಾಲುಗಳು (ಅಂತರಿಕ್ಷ), ಕೆಳಭಾಗ (ದ್ಯುಲೋಕ), ನಾಭಿ (ಬ್ರಹ್ಮ), ಹೃದಯ (ವಿಷ್ಣು), ತಲೆ (ಶಿವ). ಹೀಗೆ ಎರಡು ಬಾರಿ ಮಾಡಿ. (ಸೋಮಯಾಜಿಯವರ ಪುಸ್ತಕದಲ್ಲಿ ಮೂಗನ್ನು ಕಣ್ಣಿಗಿಂತ ಮೊದಲು ಮುಟ್ಟುತ್ತಾರೆ, ಕೊನೆಯಲ್ಲಿ “ಸದಾಶಿವಾಯ ನಮಃ”.) ಅನೇಕ ಮನೆತನಗಳು ನಂತರ ಕೇಶವಾದಿ ಆಚಮನವನ್ನೂ ಮಾಡುತ್ತವೆ; ಕೆಲವರು ಕೇಶವಾದಿಯನ್ನು ಮಾತ್ರ ಮಾಡುತ್ತಾರೆ. ಮನೆತನದ ಪದ್ಧತಿ ಅನುಸರಿಸಿ.',
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
          text: 'ॐ अथर्ववेदाय नमः । ॐ इतिहासपुराणेभ्यो नमः ।\nॐ अग्नये नमः । ॐ अग्नये नमः ।\nॐ सूर्याय नमः । ॐ चन्द्राय नमः ।\nॐ वायवे नमः । ॐ प्राणाय नमः ।\nॐ दिग्भ्यो नमः । ॐ दिग्भ्यो नमः ।\nॐ इन्द्राय नमः । ॐ इन्द्राय नमः ।\nॐ पृथिव्यै नमः । ॐ पृथिव्यै नमः ।\nॐ अन्तरिक्षाय नमः । ॐ अन्तरिक्षाय नमः ।\nॐ दिवे नमः । ॐ ब्रह्मणे नमः ।\nॐ विष्णवे नमः । ॐ शिवाय नमः ॥',
          meaning: {
            en: 'Salutations to the Atharvaveda and to the Itihasa-Puranas (the two palms); to Agni, twice (the lips); to the Sun and the Moon (the eyes); to Vayu and Prana (the nostrils); to the directions (the ears); to Indra (the arms); to the Earth (the feet); to the mid-space (the knees); to heaven (the lower body); to Brahma (the navel), to Vishnu (the heart) and to Shiva (the head).',
            kn: 'ಅಥರ್ವವೇದಕ್ಕೂ ಇತಿಹಾಸ–ಪುರಾಣಗಳಿಗೂ (ಎರಡು ಅಂಗೈಗಳು) ನಮಸ್ಕಾರ; ಅಗ್ನಿಗೆ ಎರಡು ಬಾರಿ (ತುಟಿಗಳು); ಸೂರ್ಯ–ಚಂದ್ರರಿಗೆ (ಕಣ್ಣುಗಳು); ವಾಯು–ಪ್ರಾಣರಿಗೆ (ಮೂಗಿನ ಹೊಳ್ಳೆಗಳು); ದಿಕ್ಕುಗಳಿಗೆ (ಕಿವಿಗಳು); ಇಂದ್ರನಿಗೆ (ಭುಜಗಳು); ಪೃಥ್ವಿಗೆ (ಪಾದಗಳು); ಅಂತರಿಕ್ಷಕ್ಕೆ (ಮೊಣಕಾಲುಗಳು); ದ್ಯುಲೋಕಕ್ಕೆ (ಕೆಳಭಾಗ); ಬ್ರಹ್ಮನಿಗೆ (ನಾಭಿ), ವಿಷ್ಣುವಿಗೆ (ಹೃದಯ), ಶಿವನಿಗೆ (ತಲೆ) ನಮಸ್ಕಾರ.',
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
      titleEn: 'Keshavadi achamana (Vaishnava / Pauranika) — twice',
      note: 'Hollow the right palm into the gokarna shape (like a cow’s ear) and pour into it, from the uddharane, water enough to cover a grain of black gram. With Keshava, Narayana and Madhava sip it three times from the base of the palm (brahma-tirtha), without noise. Then, with the remaining names: Govinda — wash the left hand; Vishnu — wash the right hand; Madhusudana — touch the upper lip; Trivikrama — the lower lip; Vamana — the right cheek; Shridhara — the left cheek; Hrishikesha — join both hands; Padmanabha — touch the feet; Damodara — the head; Sankarshana — just below the nose; Vasudeva and Pradyumna — the right and left nostril with thumb and index finger; Aniruddha and Purushottama — the right and left eye; Adhokshaja and Narasimha — the right and left ear; Achyuta — the navel; Janardana — the heart with the palm; Upendra — the head; Hari and Sri Krishna — the right and left shoulder with all the fingers. At the start of sandhya go through the whole achamana twice (dvirachamana). Later, “achamana” means once through, unless twice is said. This is the Keshavadi achamana — the Vaishnava achamana of the Madhva commentary on the Sadachara-smriti, which prescribes it for every rite, and the Pauranika achamana of the Devi Bhagavata (sip with the names ending in svaha, touch with those ending in namah).',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಹಸುವಿನ ಕಿವಿಯಂತೆ ಗೋಕರ್ಣಾಕಾರದಲ್ಲಿ ಮಡಚಿ, ಉದ್ಧರಣೆಯಿಂದ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ಹಾಕಿಕೊಳ್ಳಿ. ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಮೂರು ನಾಮಗಳಿಂದ ಅಂಗೈಯ ಬುಡದಿಂದ (ಬ್ರಹ್ಮತೀರ್ಥ) ಶಬ್ದ ಮಾಡದೆ ಮೂರು ಬಾರಿ ಪ್ರಾಶನ ಮಾಡಿ. ಉಳಿದ ನಾಮಗಳಿಗೆ: ಗೋವಿಂದ — ಎಡಗೈ ತೊಳೆಯುವುದು; ವಿಷ್ಣು — ಬಲಗೈ ತೊಳೆಯುವುದು; ಮಧುಸೂದನ — ಮೇಲಿನ ತುಟಿ; ತ್ರಿವಿಕ್ರಮ — ಕೆಳಗಿನ ತುಟಿ; ವಾಮನ — ಬಲ ಕೆನ್ನೆ; ಶ್ರೀಧರ — ಎಡ ಕೆನ್ನೆ; ಹೃಷೀಕೇಶ — ಎರಡೂ ಕೈ ಜೋಡಿಸುವುದು; ಪದ್ಮನಾಭ — ಪಾದಗಳು; ದಾಮೋದರ — ತಲೆ; ಸಂಕರ್ಷಣ — ಮೂಗಿನ ಕೆಳಭಾಗ; ವಾಸುದೇವ, ಪ್ರದ್ಯುಮ್ನ — ಹೆಬ್ಬೆರಳು ಮತ್ತು ತೋರುಬೆರಳಿನಿಂದ ಬಲ, ಎಡ ಮೂಗಿನ ಹೊಳ್ಳೆ; ಅನಿರುದ್ಧ, ಪುರುಷೋತ್ತಮ — ಬಲ, ಎಡ ಕಣ್ಣು; ಅಧೋಕ್ಷಜ, ನಾರಸಿಂಹ — ಬಲ, ಎಡ ಕಿವಿ; ಅಚ್ಯುತ — ನಾಭಿ; ಜನಾರ್ದನ — ಅಂಗೈಯಿಂದ ಹೃದಯ; ಉಪೇಂದ್ರ — ತಲೆ; ಹರಿ, ಶ್ರೀಕೃಷ್ಣ — ಎಲ್ಲ ಬೆರಳುಗಳಿಂದ ಬಲ, ಎಡ ಭುಜ. ಸಂಧ್ಯೆಯ ಆರಂಭದಲ್ಲಿ ಈ ಆಚಮನವನ್ನು ಎರಡು ಬಾರಿ ಮಾಡಬೇಕು (ದ್ವಿರಾಚಮನ). ಮುಂದೆ “ಆಚಮನ” ಎಂದರೆ ಒಂದು ಬಾರಿ, ಎರಡು ಎಂದು ಹೇಳಿದಲ್ಲಿ ಮಾತ್ರ ಎರಡು ಬಾರಿ. ಇದು ಕೇಶವಾದಿ ಆಚಮನ — ಸದಾಚಾರಸ್ಮೃತಿಯ ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನ ಎಲ್ಲ ಕರ್ಮಗಳಿಗೂ ವಿಧಿಸುವ ವೈಷ್ಣವ ಆಚಮನ; ದೇವೀಭಾಗವತದ ಪೌರಾಣಿಕ ಆಚಮನವೂ ಇದೇ (“ಸ್ವಾಹಾ” ಎಂದು ಕೊನೆಗೊಳ್ಳುವ ನಾಮಗಳಿಂದ ಸೇವನೆ, “ನಮಃ” ಎಂದು ಕೊನೆಗೊಳ್ಳುವವುಗಳಿಂದ ಸ್ಪರ್ಶ).',
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
      titleEn: 'Keshavadi achamana (Pauranika) — twice',
      note: 'Hold the right palm hollowed like a cow’s ear (gokarna), take water enough to cover a grain of black gram, and sip it three times without noise with Keshava, Narayana and Madhava. With the remaining names wash the hands and touch the lips, cheeks, eyes, nostrils, ears, navel, heart, head and shoulders, as you were taught (Smarta manuals follow the same names as the Madhva order, with small differences in the touches). At the start of sandhya go through the whole achamana twice; later, “achamana” means once. This is the Keshavadi (Pauranika) achamana, done after the Shrauta achamana by families who do both.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ತೆಗೆದುಕೊಂಡು ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ನಾಮಗಳಿಂದ ಶಬ್ದವಿಲ್ಲದೆ ಮೂರು ಬಾರಿ ಸೇವಿಸಿ. ಉಳಿದ ನಾಮಗಳಿಂದ ಕೈ ತೊಳೆದು, ತುಟಿ, ಕೆನ್ನೆ, ಕಣ್ಣು, ಮೂಗಿನ ಹೊಳ್ಳೆ, ಕಿವಿ, ನಾಭಿ, ಹೃದಯ, ತಲೆ, ಭುಜಗಳನ್ನು ಹೇಳಿಕೊಟ್ಟಂತೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ (ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲೂ ಇದೇ ನಾಮಗಳು; ಸ್ಪರ್ಶದಲ್ಲಿ ಸಣ್ಣ ವ್ಯತ್ಯಾಸಗಳಿವೆ). ಸಂಧ್ಯೆಯ ಆರಂಭದಲ್ಲಿ ಇಡೀ ಆಚಮನವನ್ನು ಎರಡು ಬಾರಿ ಮಾಡಿ; ಮುಂದೆ “ಆಚಮನ” ಎಂದರೆ ಒಮ್ಮೆ. ಇದು ಕೇಶವಾದಿ (ಪೌರಾಣಿಕ) ಆಚಮನ; ಎರಡನ್ನೂ ಮಾಡುವ ಮನೆತನಗಳು ಶ್ರೌತ ಆಚಮನದ ನಂತರ ಇದನ್ನು ಮಾಡುತ್ತಾರೆ.',
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
      title: 'प्राणायामः',
      titleEn: 'Pranayama (three times)',
      note: 'Say the viniyoga line first, touching the head (rishi), the mouth (chandas) and the heart (devata). Then with the right hand close the right nostril with the thumb and the left nostril with the ring and little fingers, keeping the index and middle fingers folded. Breathe out through the right nostril, breathe in slowly through the left (puraka), close both and hold the breath (kumbhaka) while reciting the whole mantra mentally, then breathe out slowly through the right nostril (rechaka). Do this three times. Madhva Rigveda manuals print स्वः and स्वरोम्; some Smarta Rigveda manuals of Karnataka print सुवः / सुवरोम् as the Yajurvedins do — say it as your family does.',
      noteKn: 'ಮೊದಲು ವಿನಿಯೋಗವನ್ನು ಹೇಳುತ್ತಾ ತಲೆ (ಋಷಿ), ಬಾಯಿ (ಛಂದಸ್ಸು), ಹೃದಯ (ದೇವತೆ) ಮುಟ್ಟಿಕೊಳ್ಳಿ. ನಂತರ ಬಲಗೈಯ ತೋರುಬೆರಳು ಮತ್ತು ನಡುಬೆರಳನ್ನು ಮಡಚಿ, ಹೆಬ್ಬೆರಳಿನಿಂದ ಬಲ ಮೂಗಿನ ಹೊಳ್ಳೆಯನ್ನೂ ಉಂಗುರದ ಬೆರಳು ಮತ್ತು ಕಿರುಬೆರಳಿನಿಂದ ಎಡ ಹೊಳ್ಳೆಯನ್ನೂ ಮುಚ್ಚಿ. ಬಲ ಹೊಳ್ಳೆಯಿಂದ ಉಸಿರು ಹೊರಬಿಟ್ಟು, ಎಡ ಹೊಳ್ಳೆಯಿಂದ ನಿಧಾನವಾಗಿ ಒಳಗೆಳೆದು (ಪೂರಕ), ಎರಡನ್ನೂ ಮುಚ್ಚಿ ಉಸಿರು ಹಿಡಿದಿರುವಾಗ (ಕುಂಭಕ) ಪೂರ್ಣ ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲೇ ಹೇಳಿ, ನಂತರ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ನಿಧಾನವಾಗಿ ಹೊರಬಿಡಿ (ರೇಚಕ). ಹೀಗೆ ಮೂರು ಬಾರಿ ಮಾಡಿ. ಮಾಧ್ವ ಋಗ್ವೇದ ಪುಸ್ತಕಗಳು “ಸ್ವಃ”, “ಸ್ವರೋಂ” ಎಂದು ಮುದ್ರಿಸುತ್ತವೆ; ಕರ್ನಾಟಕದ ಕೆಲವು ಸ್ಮಾರ್ತ ಋಗ್ವೇದ ಪುಸ್ತಕಗಳು ಯಜುರ್ವೇದಿಗಳಂತೆ “ಸುವಃ”, “ಸುವರೋಂ” ಎನ್ನುತ್ತವೆ — ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ ಹೇಳಿ.',
      verses: [
        {
          text: 'प्रणवस्य परब्रह्म ऋषिः । परमात्मा देवता ।\nदैवी गायत्री छन्दः । प्राणायामे विनियोगः ॥',
          meaning: {
            en: 'For the pranava (Om): the seer is the Supreme Brahman, the deity is the Supreme Self, the metre is the divine Gayatri; it is used for pranayama.',
            kn: 'ಪ್ರಣವಕ್ಕೆ (ಓಂಕಾರಕ್ಕೆ) ಪರಬ್ರಹ್ಮನೇ ಋಷಿ, ಪರಮಾತ್ಮನೇ ದೇವತೆ, ದೈವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಇದನ್ನು ಪ್ರಾಣಾಯಾಮಕ್ಕೆ ವಿನಿಯೋಗಿಸುತ್ತೇನೆ.',
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
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa (resolve)',
      note: 'Place the right palm over the left palm (or touch the water vessel) and rest them on the right thigh. Replace each अमुक (“such-and-such”) with today’s samvatsara, ayana (uttarayana / dakshinayana), ritu, masa, paksha (shukla / krishna), tithi, weekday (vasara) and nakshatra from the panchanga — the panchanga card at the top of this text shows them; the place words (south bank of the Godavari, Dandakaranya) are those used in Karnataka. The last line is for the time of day you chose. At the end let a ladle of water fall into the plate.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಎಡ ಅಂಗೈಯ ಮೇಲಿಟ್ಟು (ಅಥವಾ ಜಲಪಾತ್ರೆಯನ್ನು ಮುಟ್ಟಿಕೊಂಡು) ಬಲತೊಡೆಯ ಮೇಲಿಡಿ. ಪ್ರತಿಯೊಂದು “ಅಮುಕ” ಬದಲು ಇಂದಿನ ಸಂವತ್ಸರ, ಅಯನ (ಉತ್ತರಾಯಣ / ದಕ್ಷಿಣಾಯನ), ಋತು, ಮಾಸ, ಪಕ್ಷ (ಶುಕ್ಲ / ಕೃಷ್ಣ), ತಿಥಿ, ವಾಸರ, ನಕ್ಷತ್ರಗಳನ್ನು ಪಂಚಾಂಗದಿಂದ ಹೇಳಿ — ಈ ಪಠ್ಯದ ಮೇಲ್ಭಾಗದ ಪಂಚಾಂಗ ಕಾರ್ಡಿನಲ್ಲಿ ಅವು ಇವೆ; ದೇಶವಾಚಕ ಪದಗಳು (ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರ, ದಂಡಕಾರಣ್ಯ) ಕರ್ನಾಟಕದಲ್ಲಿ ಬಳಸುವಂಥವು. ಕೊನೆಯ ಸಾಲು ನೀವು ಆರಿಸಿದ ಕಾಲದ್ದು. ಕೊನೆಯಲ್ಲಿ ಒಂದು ಉದ್ಧರಣೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'श्रीगोविन्द गोविन्द । श्रीमद्भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य\nअद्य ब्रह्मणः द्वितीयपरार्धे श्रीश्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nकलियुगे प्रथमचरणे भरतवर्षे भरतखण्डे जम्बूद्वीपे\nदण्डकारण्ये देशे गोदावर्याः दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने चान्द्रमानेन अमुकनामसंवत्सरे\nअमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'Sri Govinda, Govinda! Today, in the time that runs by the command of Vishnu, the blessed Lord and Supreme Person — in the second half of Brahma’s life, the Shveta-varaha kalpa, the Vaivasvata manvantara, the first quarter of the Kali-yuga — in Bharatavarsha, Bharatakhanda, Jambudvipa, in the Dandakaranya country on the south bank of the Godavari, in the Shalivahana era, the age of the Buddha avatara, in the land of Rama, in the present year, ayana, season, month, fortnight, tithi, weekday and star so named by the lunar reckoning, on this auspicious day so marked…',
            kn: 'ಶ್ರೀಗೋವಿಂದ ಗೋವಿಂದ! ಇಂದು, ಭಗವಂತನೂ ಮಹಾಪುರುಷನೂ ಆದ ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಕಾಲದಲ್ಲಿ — ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದ ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಕಲಿಯುಗದ ಪ್ರಥಮ ಚರಣದಲ್ಲಿ — ಜಂಬೂದ್ವೀಪದ ಭರತವರ್ಷ, ಭರತಖಂಡದಲ್ಲಿ, ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯ ದೇಶದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕದಲ್ಲಿ, ಬೌದ್ಧಾವತಾರದ ಕಾಲದಲ್ಲಿ, ರಾಮಕ್ಷೇತ್ರದಲ್ಲಿ, ಚಾಂದ್ರಮಾನದಂತೆ ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया\nश्रीविष्णुप्रीत्यर्थं',
          meaning: {
            en: 'prompted by Sri Vishnu, who dwells within Mukhyaprana (Vayu), the consort of Bharati, and for the pleasure of Sri Vishnu,',
            kn: 'ಭಾರತೀರಮಣರಾದ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'प्रातःसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'I shall perform the morning sandhya worship.',
            kn: 'ಪ್ರಾತಃಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'माध्याह्निकसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'I shall perform the midday sandhya worship.',
            kn: 'ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'सायंसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'I shall perform the evening sandhya worship.',
            kn: 'ಸಾಯಂಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa (resolve)',
      note: 'Place the right palm over the left palm (some hold akshata) and rest them on the right thigh. Replace each अमुक (“such-and-such”) with today’s samvatsara, ayana, ritu, masa, paksha, tithi, weekday and nakshatra from the panchanga (see the panchanga card at the top); the place words are those used in Karnataka. The last line is for the time of day you chose. At the end let a ladle of water fall into the plate.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಎಡ ಅಂಗೈಯ ಮೇಲಿಟ್ಟು (ಕೆಲವರು ಅಕ್ಷತೆ ಹಿಡಿಯುತ್ತಾರೆ) ಬಲತೊಡೆಯ ಮೇಲಿಡಿ. ಪ್ರತಿಯೊಂದು “ಅಮುಕ” ಬದಲು ಇಂದಿನ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳನ್ನು ಹೇಳಿ (ಮೇಲ್ಭಾಗದ ಪಂಚಾಂಗ ಕಾರ್ಡ್ ನೋಡಿ); ದೇಶವಾಚಕ ಪದಗಳು ಕರ್ನಾಟಕದಲ್ಲಿ ಬಳಸುವಂಥವು. ಕೊನೆಯ ಸಾಲು ನೀವು ಆರಿಸಿದ ಕಾಲದ್ದು. ಕೊನೆಯಲ್ಲಿ ಒಂದು ಉದ್ಧರಣೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['smarta'] },
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
        {
          when: { time: ['morning'] },
          text: 'प्रातःसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'I shall perform the morning sandhya worship.',
            kn: 'ಪ್ರಾತಃಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'माध्याह्निकसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'I shall perform the midday sandhya worship.',
            kn: 'ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'सायंसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'I shall perform the evening sandhya worship.',
            kn: 'ಸಾಯಂಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'मार्जनम्',
      titleEn: 'Marjana (sprinkling)',
      note: 'Say the viniyoga. Hold the uddharane with water in the left hand and, with a tulasi leaf (the nirmalya tulasi of the day’s puja, if you have it) or the fingers of the right hand, sprinkle yourself at the end of each of the nine padas (lines): on the head for the first seven padas, on the feet for the eighth (यस्य क्षयाय जिन्वथ) and on the head again for the ninth (Uttaradi Matha manual). Other Madhva manuals sprinkle in three rounds of three — the chest, the stomach and the head (or the ground, the head and the sky).',
      noteKn: 'ವಿನಿಯೋಗ ಹೇಳಿ. ಎಡಗೈಯಲ್ಲಿ ನೀರಿರುವ ಉದ್ಧರಣೆ ಹಿಡಿದು, ಬಲಗೈಯ ತುಳಸೀದಳದಿಂದ (ಇದ್ದರೆ ಆ ದಿನದ ಪೂಜೆಯ ನಿರ್ಮಾಲ್ಯ ತುಳಸಿ) ಅಥವಾ ಬೆರಳುಗಳಿಂದ ಒಂಬತ್ತು ಪಾದಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರ ಕೊನೆಗೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ: ಮೊದಲ ಏಳು ಪಾದಗಳಿಗೆ ತಲೆಯ ಮೇಲೆ, ಎಂಟನೆಯದಕ್ಕೆ (“ಯಸ್ಯ ಕ್ಷಯಾಯ ಜಿನ್ವಥ”) ಪಾದಗಳ ಮೇಲೆ, ಒಂಬತ್ತನೆಯದಕ್ಕೆ ಮತ್ತೆ ತಲೆಯ ಮೇಲೆ (ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕ). ಬೇರೆ ಕೆಲವು ಮಾಧ್ವ ಪುಸ್ತಕಗಳು ಮೂರು ಮೂರರ ಸುತ್ತುಗಳಲ್ಲಿ — ಎದೆ, ಹೊಟ್ಟೆ, ತಲೆ (ಅಥವಾ ಭೂಮಿ, ತಲೆ, ಆಕಾಶ) — ಪ್ರೋಕ್ಷಿಸುತ್ತವೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'आपो हि ष्ठेति तृचस्य सूक्तस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।\nआपो देवता । गायत्री छन्दः । मार्जने विनियोगः ॥',
          meaning: {
            en: 'For the three riks beginning “apo hi shtha”: the seer is Sindhudvipa son of Ambarisha, the deity is the Waters, the metre is Gayatri; they are used for sprinkling.',
            kn: '“ಆಪೋ ಹಿ ಷ್ಠಾ” ಎಂದು ಆರಂಭವಾಗುವ ಮೂರು ಋಕ್ಕುಗಳಿಗೆ ಅಂಬರೀಷಪುತ್ರ ಸಿಂಧುದ್ವೀಪನು ಋಷಿ, ಜಲದೇವತೆಗಳು ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಮಾರ್ಜನಕ್ಕೆ ವಿನಿಯೋಗ.',
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
      ],
    },
    {
      title: 'मार्जनम्',
      titleEn: 'Marjana (sprinkling)',
      note: 'Say the viniyoga. Take water in the uddharane held in the left hand and, with the thumb, ring and middle fingers of the right hand, sprinkle yourself at the end of each of the nine padas (lines), in this order (Karnataka Rigvedi manuals): the heart, below the chest, above the chest, the right side, the left side, the back, the face, the lower body and the whole body. Many families simply sprinkle the head at each pada.',
      noteKn: 'ವಿನಿಯೋಗ ಹೇಳಿ. ಎಡಗೈಯಲ್ಲಿ ಹಿಡಿದ ಉದ್ಧರಣೆಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು ಬಲಗೈಯ ಹೆಬ್ಬೆರಳು, ಉಂಗುರದ ಬೆರಳು, ನಡುಬೆರಳುಗಳಿಂದ ಒಂಬತ್ತು ಪಾದಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರ ಕೊನೆಗೆ ಈ ಕ್ರಮದಲ್ಲಿ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ (ಕರ್ನಾಟಕದ ಋಗ್ವೇದಿ ಪುಸ್ತಕಗಳು): ಹೃದಯ, ಎದೆಯ ಕೆಳಭಾಗ, ಎದೆಯ ಮೇಲ್ಭಾಗ, ಬಲಪಾರ್ಶ್ವ, ಎಡಪಾರ್ಶ್ವ, ಬೆನ್ನು, ಮುಖ, ಕೆಳಭಾಗ, ಸರ್ವಾಂಗ. ಅನೇಕ ಮನೆತನಗಳು ಪ್ರತಿ ಪಾದಕ್ಕೂ ತಲೆಗೆ ಮಾತ್ರ ಪ್ರೋಕ್ಷಿಸುತ್ತವೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'आपो हि ष्ठेति तृचस्य सूक्तस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।\nआपो देवता । गायत्री छन्दः । मार्जने विनियोगः ॥',
          meaning: {
            en: 'For the three riks beginning “apo hi shtha”: the seer is Sindhudvipa son of Ambarisha, the deity is the Waters, the metre is Gayatri; they are used for sprinkling.',
            kn: '“ಆಪೋ ಹಿ ಷ್ಠಾ” ಎಂದು ಆರಂಭವಾಗುವ ಮೂರು ಋಕ್ಕುಗಳಿಗೆ ಅಂಬರೀಷಪುತ್ರ ಸಿಂಧುದ್ವೀಪನು ಋಷಿ, ಜಲದೇವತೆಗಳು ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಮಾರ್ಜನಕ್ಕೆ ವಿನಿಯೋಗ.',
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
      ],
    },
    {
      title: 'जलाभिमन्त्रणम्',
      titleEn: 'Jalabhimantrana and prashana (sipping consecrated water)',
      note: 'Take in the right palm, held like a cow’s ear, as much water as covers a grain of black gram (from the arghya vessel). Say the viniyoga and then the mantra for this time of day over the water, and sip it at स्वाहा. Then do achamana once.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು (ಅರ್ಘ್ಯಪಾತ್ರೆಯಿಂದ) ತೆಗೆದುಕೊಳ್ಳಿ. ವಿನಿಯೋಗ ಮತ್ತು ಈ ಕಾಲದ ಮಂತ್ರವನ್ನು ನೀರಿನ ಮೇಲೆ ಹೇಳಿ, “ಸ್ವಾಹಾ” ಎನ್ನುವಾಗ ಪ್ರಾಶನ ಮಾಡಿ. ನಂತರ ಒಮ್ಮೆ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          when: { time: ['morning'] },
          text: 'सूर्यश्चेति मन्त्रस्य हिरण्यगर्भ ऋषिः ।\nसूर्यमन्युमन्युपतिरात्रयो देवताः । प्रकृतिश्छन्दः ।\nमन्त्राचमने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “suryash cha” the seer is Hiranyagarbha; the deities are the Sun, Manyu, the lords of Manyu and Night; the metre prakriti; it is applied in sipping water with mantra.',
            kn: '"ಸೂರ್ಯಶ್ಚ" ಮಂತ್ರಕ್ಕೆ ಹಿರಣ್ಯಗರ್ಭ ಋಷಿ; ಸೂರ್ಯ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ರಾತ್ರಿ ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಮಂತ್ರಾಚಮನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयद्रात्रिया पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nरात्रिस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसूर्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May the Sun, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the night with mind, speech, hands, feet, belly or organ, may the night wipe it away. Whatever wrong is in me, I offer it, and myself, into the Sun, the light that is the source of immortality. Svaha.',
            kn: 'ಸೂರ್ಯನೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ರಾತ್ರಿಯಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ, ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ರಾತ್ರಿದೇವತೆಯು ಅಳಿಸಲಿ. ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸೂರ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
          when: { time: ['morning'] },
        },
        {
          when: { time: ['midday'] },
          text: 'आपः पुनन्त्विति मन्त्रस्य पूतनामको नारायण ऋषिः ।\nआपो देवता । अष्टिश्छन्दः । अपां प्राशने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “apah punantu” the seer is Narayana called Puta, the deity the Waters, the metre ashti; it is applied in sipping water.',
            kn: '"ಆಪಃ ಪುನಂತು" ಮಂತ್ರಕ್ಕೆ ಪೂತನಾಮಕ ನಾರಾಯಣ ಋಷಿ, ಜಲದೇವತೆಗಳು ದೇವತೆ, ಅಷ್ಟಿ ಛಂದಸ್ಸು; ಜಲಪ್ರಾಶನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् ।\nपुनन्तु ब्रह्मणस्पतिर्ब्रह्मपूता पुनातु माम् ।\nयदुच्छिष्टमभोज्यं यद्वा दुश्चरितं मम ।\nसर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहं स्वाहा ॥',
          meaning: {
            en: 'May the waters purify the earth, and the purified earth purify me; may Brahmanaspati, and the Veda-purified earth, purify me. From leftover or forbidden food, from my misdeeds and from gifts taken from the unworthy, may the waters purify me entirely. Svaha.',
            kn: 'ಜಲವು ಭೂಮಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ, ಶುದ್ಧವಾದ ಭೂಮಿ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಬ್ರಹ್ಮಣಸ್ಪತಿಯೂ ವೇದದಿಂದ ಪವಿತ್ರವಾದ ಭೂಮಿಯೂ ನನ್ನನ್ನು ಪಾವನಗೊಳಿಸಲಿ. ಎಂಜಲು, ತಿನ್ನಬಾರದ ಆಹಾರ, ನನ್ನ ದುರಾಚಾರ, ಅಯೋಗ್ಯರಿಂದ ಪಡೆದ ದಾನ — ಇವೆಲ್ಲದರಿಂದ ಜಲವು ನನ್ನನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಶುದ್ಧಗೊಳಿಸಲಿ, ಸ್ವಾಹಾ.',
          },
          when: { time: ['midday'] },
        },
        {
          when: { time: ['evening'] },
          text: 'अग्निश्चेति मन्त्रस्य हिरण्यगर्भ ऋषिः ।\nअग्निमन्युमन्युपत्यहानि देवताः । प्रकृतिश्छन्दः ।\nमन्त्राचमने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “agnish cha” the seer is Hiranyagarbha; the deities are Agni, Manyu, the lords of Manyu and Day; the metre prakriti; it is applied in sipping water with mantra.',
            kn: '"ಅಗ್ನಿಶ್ಚ" ಮಂತ್ರಕ್ಕೆ ಹಿರಣ್ಯಗರ್ಭ ಋಷಿ; ಅಗ್ನಿ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ಹಗಲು ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಮಂತ್ರಾಚಮನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयदह्ना पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nअहस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसत्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May Agni, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the day with mind, speech, hands, feet, belly or organ, may the day wipe it away. Whatever wrong is in me, I offer it, and myself, into the light of Truth, the source of immortality. Svaha.',
            kn: 'ಅಗ್ನಿಯೂ, ಮನ್ಯುವೂ, ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ಹಗಲಿನಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ, ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ಹಗಲಿನ ದೇವತೆಯು ಅಳಿಸಲಿ. ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸತ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
          when: { time: ['evening'] },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'जलाभिमन्त्रणम्',
      titleEn: 'Jalabhimantrana and prashana (sipping consecrated water)',
      note: 'Take in the right palm, held like a cow’s ear, as much water as covers a grain of black gram (from the arghya vessel). Recite the mantra for this time of day over the water, and sip it at स्वाहा. Then do achamana once.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು (ಅರ್ಘ್ಯಪಾತ್ರೆಯಿಂದ) ತೆಗೆದುಕೊಳ್ಳಿ. ಈ ಕಾಲದ ಮಂತ್ರವನ್ನು (ವಿನಿಯೋಗ ಸಹಿತ) ನೀರಿನ ಮೇಲೆ ಹೇಳಿ, “ಸ್ವಾಹಾ” ಎನ್ನುವಾಗ ಪ್ರಾಶನ ಮಾಡಿ. ನಂತರ ಒಮ್ಮೆ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          when: { time: ['morning'] },
          text: 'सूर्यश्चेत्यस्य मन्त्रस्य याज्ञवल्क्य उपनिषद् ऋषिः ।\nसूर्यमन्युमन्युपतिरात्रयो देवताः ।\nप्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “suryash cha”: the seer is the Upanishad of Yajnavalkya; the deities are Surya, Manyu, the lords of Manyu and Night; the metre is Prakriti; it is used to consecrate the water.',
            kn: '“ಸೂರ್ಯಶ್ಚ” ಮಂತ್ರಕ್ಕೆ ಯಾಜ್ಞವಲ್ಕ್ಯ ಉಪನಿಷತ್ ಋಷಿ; ಸೂರ್ಯ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ರಾತ್ರಿ ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಜಲಾಭಿಮಂತ್ರಣಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयद्रात्रिया पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nरात्रिस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसूर्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May the Sun, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the night with mind, speech, hands, feet, belly or organ, may the night wipe it away. Whatever wrong is in me, I offer it, and myself, into the Sun, the light that is the source of immortality. Svaha.',
            kn: 'ಸೂರ್ಯನೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ರಾತ್ರಿಯಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ, ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ರಾತ್ರಿದೇವತೆಯು ಅಳಿಸಲಿ. ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸೂರ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
          when: { time: ['morning'] },
        },
        {
          text: 'आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् ।\nपुनन्तु ब्रह्मणस्पतिर्ब्रह्मपूता पुनातु माम् ।\nयदुच्छिष्टमभोज्यं यद्वा दुश्चरितं मम ।\nसर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहं स्वाहा ॥',
          meaning: {
            en: 'May the waters purify the earth, and the purified earth purify me; may Brahmanaspati, and the Veda-purified earth, purify me. From leftover or forbidden food, from my misdeeds and from gifts taken from the unworthy, may the waters purify me entirely. Svaha.',
            kn: 'ಜಲವು ಭೂಮಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ, ಶುದ್ಧವಾದ ಭೂಮಿ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಬ್ರಹ್ಮಣಸ್ಪತಿಯೂ ವೇದದಿಂದ ಪವಿತ್ರವಾದ ಭೂಮಿಯೂ ನನ್ನನ್ನು ಪಾವನಗೊಳಿಸಲಿ. ಎಂಜಲು, ತಿನ್ನಬಾರದ ಆಹಾರ, ನನ್ನ ದುರಾಚಾರ, ಅಯೋಗ್ಯರಿಂದ ಪಡೆದ ದಾನ — ಇವೆಲ್ಲದರಿಂದ ಜಲವು ನನ್ನನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಶುದ್ಧಗೊಳಿಸಲಿ, ಸ್ವಾಹಾ.',
          },
          when: { time: ['midday'] },
        },
        {
          when: { time: ['evening'] },
          text: 'अग्निश्चेत्यस्य मन्त्रस्य याज्ञवल्क्य उपनिषद् ऋषिः ।\nअग्निमन्युमन्युपतयोऽहश्च देवताः ।\nप्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “agnish cha”: the seer is the Upanishad of Yajnavalkya; the deities are Agni, Manyu, the lords of Manyu and Day; the metre is Prakriti; it is used to consecrate the water.',
            kn: '“ಅಗ್ನಿಶ್ಚ” ಮಂತ್ರಕ್ಕೆ ಯಾಜ್ಞವಲ್ಕ್ಯ ಉಪನಿಷತ್ ಋಷಿ; ಅಗ್ನಿ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ಹಗಲು ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಜಲಾಭಿಮಂತ್ರಣಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयदह्ना पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nअहस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसत्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May Agni, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the day with mind, speech, hands, feet, belly or organ, may the day wipe it away. Whatever wrong is in me, I offer it, and myself, into the light of Truth, the source of immortality. Svaha.',
            kn: 'ಅಗ್ನಿಯೂ, ಮನ್ಯುವೂ, ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ಹಗಲಿನಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ, ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ಹಗಲಿನ ದೇವತೆಯು ಅಳಿಸಲಿ. ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸತ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
          when: { time: ['evening'] },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'पुनर्मार्जनम्',
      titleEn: 'Punar-marjana (second sprinkling, nine riks)',
      note: 'Say the viniyoga, then sprinkle water on yourself as in Marjana while reciting the whole sukta of nine riks (Rigveda 10.9) and the closing rik सस्रुषीः…: sprinkle the head at the end of each pada (line). Then do achamana once. The Karnataka Smarta manuals end with the ninth rik; the Madhva and Andhra manuals add सस्रुषीः….',
      noteKn: 'ವಿನಿಯೋಗ ಹೇಳಿ, ಮಾರ್ಜನದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಒಂಬತ್ತು ಋಕ್ಕುಗಳ ಪೂರ್ಣ ಸೂಕ್ತವನ್ನೂ (ಋಗ್ವೇದ ೧೦.೯) ಕೊನೆಯ “ಸಸ್ರುಷೀಃ” ಋಕ್ಕನ್ನೂ ಹೇಳುತ್ತಾ ಪ್ರತಿಯೊಂದು ಪಾದದ ಕೊನೆಯಲ್ಲಿ ತಲೆಗೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ. ನಂತರ ಒಂದು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. ಕರ್ನಾಟಕದ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು ಒಂಬತ್ತನೆಯ ಋಕ್ಕಿನೊಂದಿಗೆ ಮುಗಿಸುತ್ತವೆ; ಮಾಧ್ವ ಮತ್ತು ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು “ಸಸ್ರುಷೀಃ…” ಸೇರಿಸುತ್ತವೆ.',
      verses: [
        {
          text: 'आपो हि ष्ठेति नवर्चस्य सूक्तस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।\nआपो देवता । गायत्री छन्दः । पञ्चमी वर्धमाना । सप्तमी प्रतिष्ठा ।\nअन्त्ये द्वे अनुष्टुभौ । पुनर्मार्जने विनियोगः ॥',
          meaning: {
            en: 'For the sukta of nine riks “apo hi shtha”: the seer is Sindhudvipa son of Ambarisha, the deity is the Waters, the metre is Gayatri — the fifth rik in Vardhamana, the seventh in Pratishtha, the last two in Anushtubh; used for the second sprinkling.',
            kn: 'ಒಂಬತ್ತು ಋಕ್ಕುಗಳ “ಆಪೋ ಹಿ ಷ್ಠಾ” ಸೂಕ್ತಕ್ಕೆ ಅಂಬರೀಷಪುತ್ರ ಸಿಂಧುದ್ವೀಪ ಋಷಿ, ಜಲದೇವತೆಗಳು ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು — ಐದನೆಯದು ವರ್ಧಮಾನಾ, ಏಳನೆಯದು ಪ್ರತಿಷ್ಠಾ, ಕೊನೆಯ ಎರಡು ಅನುಷ್ಟುಪ್; ಪುನರ್ಮಾರ್ಜನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'आपो हि ष्ठा मयोभुवस्ता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥',
          meaning: {
            en: 'O Waters, you are the bringers of happiness. Fill us with strength, so that we may behold great joy.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನೀವು ಸುಖವನ್ನು ಕೊಡುವವರು. ನಮಗೆ ಶಕ್ತಿಯನ್ನು ತುಂಬಿ, ಮಹತ್ತಾದ ಆನಂದವನ್ನು ಕಾಣುವಂತೆ ಮಾಡಿ.',
          },
        },
        {
          text: 'यो वः शिवतमो रसस्तस्य भाजयतेह नः ।\nउशतीरिव मातरः ॥',
          meaning: {
            en: 'Let us share here in your most auspicious essence, as loving mothers share with their children.',
            kn: 'ಪ್ರೀತಿಯುಳ್ಳ ತಾಯಂದಿರು ಮಕ್ಕಳಿಗೆ ಉಣಿಸುವಂತೆ, ನಿಮ್ಮಲ್ಲಿರುವ ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ರಸವನ್ನು ನಮಗೂ ಇಲ್ಲಿ ಕರುಣಿಸಿ.',
          },
        },
        {
          text: 'तस्मा अरं गमाम वो यस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'May we readily attain that essence of yours with which you nourish all that dwells in the world; O Waters, bring us to new life.',
            kn: 'ಲೋಕದ ಜೀವಿಗಳನ್ನು ಪೋಷಿಸುವ ನಿಮ್ಮ ಆ ರಸವನ್ನು ನಾವು ಸಂಪೂರ್ಣವಾಗಿ ಪಡೆಯುವಂತಾಗಲಿ; ಓ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಹೊಸ ಚೈತನ್ಯವನ್ನು ಕೊಡಿ.',
          },
        },
        {
          text: 'शं नो देवीरभिष्टय आपो भवन्तु पीतये ।\nशं योरभि स्रवन्तु नः ॥',
          meaning: {
            en: 'May the divine Waters be a blessing to us, for help and for drinking; may they flow towards us with health and well-being.',
            kn: 'ದಿವ್ಯವಾದ ಜಲದೇವತೆಗಳು ನಮಗೆ ಸಹಾಯಕ್ಕೂ ಪಾನಕ್ಕೂ ಮಂಗಳಕರರಾಗಲಿ; ಆರೋಗ್ಯವನ್ನೂ ಕ್ಷೇಮವನ್ನೂ ನಮ್ಮೆಡೆಗೆ ಹರಿಸಲಿ.',
          },
        },
        {
          text: 'ईशाना वार्याणां क्षयन्तीश्चर्षणीनाम् ।\nअपो याचामि भेषजम् ॥',
          meaning: {
            en: 'From the Waters, who rule over all things desirable and give dwelling to all people, I ask for healing.',
            kn: 'ಎಲ್ಲ ಬಯಸುವ ಸಂಪತ್ತುಗಳಿಗೆ ಒಡೆಯರೂ ಜನರಿಗೆ ನೆಲೆ ಕೊಡುವವರೂ ಆದ ಜಲದೇವತೆಗಳಲ್ಲಿ ಔಷಧವನ್ನು (ಆರೋಗ್ಯವನ್ನು) ಬೇಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अप्सु मे सोमो अब्रवीदन्तर्विश्वानि भेषजा ।\nअग्निं च विश्वशम्भुवम् ॥',
          meaning: {
            en: 'Soma has told me that within the Waters are all remedies, and Agni too, who brings good to all.',
            kn: 'ಜಲದಲ್ಲಿ ಎಲ್ಲ ಔಷಧಗಳೂ ಇವೆ, ಎಲ್ಲರಿಗೂ ಮಂಗಳವನ್ನುಂಟುಮಾಡುವ ಅಗ್ನಿಯೂ ಇದ್ದಾನೆ ಎಂದು ಸೋಮನು ನನಗೆ ಹೇಳಿದ್ದಾನೆ.',
          },
        },
        {
          text: 'आपः पृणीत भेषजं वरूथं तन्वे मम ।\nज्योक्च सूर्यं दृशे ॥',
          meaning: {
            en: 'O Waters, fill my body with healing and protection, so that I may long behold the sun.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನನ್ನ ದೇಹಕ್ಕೆ ಔಷಧವನ್ನೂ ರಕ್ಷಣೆಯನ್ನೂ ತುಂಬಿ, ನಾನು ಬಹುಕಾಲ ಸೂರ್ಯನನ್ನು ಕಾಣುವಂತಾಗಲಿ.',
          },
        },
        {
          text: 'इदमापः प्र वहत यत्किं च दुरितं मयि ।\nयद्वाहमभिदुद्रोह यद्वा शेप उतानृतम् ॥',
          meaning: {
            en: 'O Waters, carry away whatever wrong is in me — any harm I have done to others, any curse I have uttered, any untruth.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನನ್ನಲ್ಲಿರುವ ಯಾವುದೇ ದೋಷವನ್ನು — ನಾನು ಇತರರಿಗೆ ಮಾಡಿದ ದ್ರೋಹ, ಕೊಟ್ಟ ಶಾಪ, ಆಡಿದ ಸುಳ್ಳು — ಎಲ್ಲವನ್ನೂ ಕೊಚ್ಚಿಕೊಂಡು ಹೋಗಿ.',
          },
        },
        {
          text: 'आपो अद्यान्वचारिषं रसेन समगस्महि ।\nपयस्वानग्न आ गहि तं मा सं सृज वर्चसा ॥',
          meaning: {
            en: 'Today I have entered the Waters and become one with their essence. O Agni, rich in nourishment, come and endow me with radiance.',
            kn: 'ಇಂದು ನಾನು ಜಲವನ್ನು ಪ್ರವೇಶಿಸಿ ಅದರ ರಸದೊಂದಿಗೆ ಒಂದಾಗಿದ್ದೇನೆ. ಪೋಷಣೆಯಿಂದ ಕೂಡಿದ ಓ ಅಗ್ನಿಯೇ, ಬಂದು ನನಗೆ ತೇಜಸ್ಸನ್ನು ಕೊಡು.',
          },
        },
        {
          text: 'सस्रुषीस्तदपसो दिवा नक्तं च सस्रुषीः ।\nवरेण्यक्रतूरहमा देवीरवसे हुवे ॥',
          meaning: {
            en: 'The Waters that flow on day and night, busy at their work, of excellent power — those goddesses I call upon for protection.',
            kn: 'ಹಗಲೂ ರಾತ್ರಿಯೂ ತಮ್ಮ ಕಾರ್ಯದಲ್ಲಿ ತೊಡಗಿ ಹರಿಯುತ್ತಿರುವ, ಶ್ರೇಷ್ಠ ಶಕ್ತಿಯುಳ್ಳ ಆ ಜಲದೇವತೆಗಳನ್ನು ನನ್ನ ರಕ್ಷಣೆಗಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'अघमर्षणम्',
      titleEn: 'Aghamarshana (casting out sin)',
      note: 'Take water in the right palm, held in the gokarna shape near the nose, and do not look at it. Say the viniyoga and the three riks (Rigveda 10.190). Closing the left nostril, breathe out through the right nostril onto the water, thinking that the papa-purusha (the sin within) leaves you with the breath and enters it; imagine a blazing rock (vajra-shila) on your left, throw the water onto it and think the sin destroyed; do not look at it again. Then do achamana and pranayama.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರದಲ್ಲಿ ಮೂಗಿನ ಬಳಿ ಹಿಡಿದು ನೀರು ತೆಗೆದುಕೊಳ್ಳಿ; ಅದನ್ನು ನೋಡಬೇಡಿ. ವಿನಿಯೋಗ ಮತ್ತು ಮೂರು ಋಕ್ಕುಗಳನ್ನು (ಋಗ್ವೇದ ೧೦.೧೯೦) ಹೇಳಿ. ಎಡ ಹೊಳ್ಳೆ ಮುಚ್ಚಿ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ನೀರಿನ ಮೇಲೆ ಉಸಿರು ಬಿಡಿ, ಒಳಗಿನ ಪಾಪಪುರುಷನು ಉಸಿರಿನೊಡನೆ ಹೊರಬಂದು ನೀರಿನಲ್ಲಿ ಸೇರಿದನೆಂದು ಭಾವಿಸಿ; ಎಡಭಾಗದಲ್ಲಿ ಉರಿಯುವ ವಜ್ರಶಿಲೆಯಿದೆಯೆಂದು ಭಾವಿಸಿ ಆ ನೀರನ್ನು ಅದರ ಮೇಲೆ ಚೆಲ್ಲಿ, ಪಾಪ ನಾಶವಾಯಿತೆಂದು ಭಾವಿಸಿ; ಮತ್ತೆ ನೋಡಬೇಡಿ. ನಂತರ ಆಚಮನ ಮತ್ತು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ऋतं चेति तृचस्य अघमर्षण ऋषिः ।\nभाववृत्तो देवता । अनुष्टुप् छन्दः । पापपुरुषविसर्जने विनियोगः ॥',
          meaning: {
            en: 'For the sukta “ritam cha”: the seer is Aghamarshana, the deity is Bhavavritta (the course of creation), the metre is Anushtubh; it is used for casting out the person of sin.',
            kn: '“ಋತಂ ಚ” ಸೂಕ್ತಕ್ಕೆ ಅಘಮರ್ಷಣ ಋಷಿ, ಭಾವವೃತ್ತ (ಸೃಷ್ಟಿಯ ಕ್ರಮ) ದೇವತೆ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಪಾಪಪುರುಷನನ್ನು ಹೊರಹಾಕಲು ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ऋतं च सत्यं चाभीद्धात्तपसोऽध्यजायत ।\nततो रात्र्यजायत ततः समुद्रो अर्णवः ॥',
          meaning: {
            en: 'From blazing tapas — the Lord’s will to create — cosmic order and truth were born; from that came night, and from that the surging ocean.',
            kn: 'ಪ್ರಜ್ವಲಿಸುವ ತಪಸ್ಸಿನಿಂದ (ಭಗವಂತನ ಸೃಷ್ಟಿಸಂಕಲ್ಪದಿಂದ) ಋತವೂ ಸತ್ಯವೂ ಹುಟ್ಟಿದವು; ಅದರಿಂದ ರಾತ್ರಿಯೂ, ಅದರಿಂದ ಅಲೆಗಳಿಂದ ಕೂಡಿದ ಸಮುದ್ರವೂ ಉಂಟಾದವು.',
          },
        },
        {
          text: 'समुद्रादर्णवादधि संवत्सरो अजायत ।\nअहोरात्राणि विदधद्विश्वस्य मिषतो वशी ॥',
          meaning: {
            en: 'From the surging ocean the year was born; the ruler of all that blinks its eyes ordained the days and nights.',
            kn: 'ಆ ಸಮುದ್ರದಿಂದ ಸಂವತ್ಸರವು ಹುಟ್ಟಿತು; ಕಣ್ಣು ಮಿಟುಕಿಸುವ ಸಮಸ್ತ ಜೀವಿಗಳ ಒಡೆಯನು ಹಗಲು ರಾತ್ರಿಗಳನ್ನು ವಿಧಿಸಿದನು.',
          },
        },
        {
          text: 'सूर्याचन्द्रमसौ धाता यथापूर्वमकल्पयत् ।\nदिवं च पृथिवीं चान्तरिक्षमथो स्वः ॥',
          meaning: {
            en: 'The Creator fashioned the sun and moon as before, and heaven, earth, the mid-region and the world of light.',
            kn: 'ಸೃಷ್ಟಿಕರ್ತನು ಹಿಂದಿನ ಕಲ್ಪಗಳಲ್ಲಿದ್ದಂತೆಯೇ ಸೂರ್ಯಚಂದ್ರರನ್ನೂ, ದ್ಯುಲೋಕ, ಭೂಮಿ, ಅಂತರಿಕ್ಷ ಮತ್ತು ಸ್ವರ್ಗಲೋಕಗಳನ್ನೂ ರಚಿಸಿದನು.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'अघमर्षणम्',
      titleEn: 'Aghamarshana (casting out sin)',
      note: 'Take water in the right palm, held in the gokarna shape near the nose. Say the viniyoga and the three riks (Rigveda 10.190). Then, closing the left nostril, breathe out through the right nostril onto the water, thinking that the papa-purusha (the sin within) leaves you into it; throw the water away to your left onto the ground and do not look at it again. Then do achamana once.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರದಲ್ಲಿ ಮೂಗಿನ ಬಳಿ ಹಿಡಿದು ಅದರಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಳ್ಳಿ. ವಿನಿಯೋಗವನ್ನೂ ಮೂರು ಋಕ್ಕುಗಳನ್ನೂ (ಋಗ್ವೇದ ೧೦.೧೯೦) ಹೇಳಿ. ನಂತರ ಎಡ ಹೊಳ್ಳೆಯನ್ನು ಮುಚ್ಚಿ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ಆ ನೀರಿನ ಮೇಲೆ ಉಸಿರು ಬಿಡುತ್ತಾ, ನನ್ನೊಳಗಿನ ಪಾಪಪುರುಷನು ಆ ನೀರಿಗೆ ಹೊರಟುಹೋದನೆಂದು ಭಾವಿಸಿ; ಆ ನೀರನ್ನು ಎಡಭಾಗಕ್ಕೆ ನೆಲದ ಮೇಲೆ ಚೆಲ್ಲಿ, ಮತ್ತೆ ಅದನ್ನು ನೋಡಬೇಡಿ. ನಂತರ ಒಂದು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ऋतं चेत्यस्य मन्त्रस्य माधुच्छन्दसोऽघमर्षण ऋषिः ।\nभाववृत्तं देवता । अनुष्टुप् छन्दः । अघमर्षणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “ritam cha”: the seer is Aghamarshana, son of Madhuchchhandas, the deity is Bhavavritta (the course of creation), the metre is Anushtubh; it is used for aghamarshana, the casting out of sin.',
            kn: '“ಋತಂ ಚ” ಮಂತ್ರಕ್ಕೆ ಮಧುಚ್ಛಂದಸರ ಮಗನಾದ ಅಘಮರ್ಷಣ ಋಷಿ, ಭಾವವೃತ್ತ (ಸೃಷ್ಟಿಯ ಕ್ರಮ) ದೇವತೆ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಅಘಮರ್ಷಣಕ್ಕೆ (ಪಾಪವನ್ನು ಹೊರಹಾಕಲು) ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ऋतं च सत्यं चाभीद्धात्तपसोऽध्यजायत ।\nततो रात्र्यजायत ततः समुद्रो अर्णवः ॥',
          meaning: {
            en: 'From blazing tapas — the Lord’s will to create — cosmic order and truth were born; from that came night, and from that the surging ocean.',
            kn: 'ಪ್ರಜ್ವಲಿಸುವ ತಪಸ್ಸಿನಿಂದ (ಭಗವಂತನ ಸೃಷ್ಟಿಸಂಕಲ್ಪದಿಂದ) ಋತವೂ ಸತ್ಯವೂ ಹುಟ್ಟಿದವು; ಅದರಿಂದ ರಾತ್ರಿಯೂ, ಅದರಿಂದ ಅಲೆಗಳಿಂದ ಕೂಡಿದ ಸಮುದ್ರವೂ ಉಂಟಾದವು.',
          },
        },
        {
          text: 'समुद्रादर्णवादधि संवत्सरो अजायत ।\nअहोरात्राणि विदधद्विश्वस्य मिषतो वशी ॥',
          meaning: {
            en: 'From the surging ocean the year was born; the ruler of all that blinks its eyes ordained the days and nights.',
            kn: 'ಆ ಸಮುದ್ರದಿಂದ ಸಂವತ್ಸರವು ಹುಟ್ಟಿತು; ಕಣ್ಣು ಮಿಟುಕಿಸುವ ಸಮಸ್ತ ಜೀವಿಗಳ ಒಡೆಯನು ಹಗಲು ರಾತ್ರಿಗಳನ್ನು ವಿಧಿಸಿದನು.',
          },
        },
        {
          text: 'सूर्याचन्द्रमसौ धाता यथापूर्वमकल्पयत् ।\nदिवं च पृथिवीं चान्तरिक्षमथो स्वः ॥',
          meaning: {
            en: 'The Creator fashioned the sun and moon as before, and heaven, earth, the mid-region and the world of light.',
            kn: 'ಸೃಷ್ಟಿಕರ್ತನು ಹಿಂದಿನ ಕಲ್ಪಗಳಲ್ಲಿದ್ದಂತೆಯೇ ಸೂರ್ಯಚಂದ್ರರನ್ನೂ, ದ್ಯುಲೋಕ, ಭೂಮಿ, ಅಂತರಿಕ್ಷ ಮತ್ತು ಸ್ವರ್ಗಲೋಕಗಳನ್ನೂ ರಚಿಸಿದನು.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Morning: give the arghya before sunrise, standing, facing east and looking towards the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Fill both joined palms with clean water from the arghya vessel (never the achamana water), raise them, recite the Gayatri with Om and the vyahritis and pour the water out over the fingertips into the plate (at a river or tank, throw it upwards towards the Sun), saying सूर्यनारायणाय इदमर्घ्यं… — offering it to Narayana within the Sun. Give three arghyas. If the sun has already risen, say the sankalpa and give a fourth arghya with the Gayatri. Then pray हृदयस्था तु गायत्री… and उत्तिष्ठोत्तिष्ठ….',
      noteKn: 'ಬೆಳಗಿನ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯೋದಯಕ್ಕೆ ಮೊದಲು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಸೂರ್ಯನ ಕಡೆ ನೋಡುತ್ತಾ ನಿಂತು ಕೊಡಬೇಕು. ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಅರ್ಘ್ಯಪಾತ್ರೆಯ ಶುದ್ಧಜಲವನ್ನು (ಆಚಮನದ ನೀರನ್ನಲ್ಲ) ಬೊಗಸೆಯಲ್ಲಿ ತುಂಬಿ ಎತ್ತಿ, ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ತಟ್ಟೆಗೆ ಬಿಡಿ (ನದಿ, ಕೆರೆಗಳಲ್ಲಿ ಸೂರ್ಯನ ಕಡೆಗೆ ಮೇಲಕ್ಕೆ ಬಿಡಿ); “ಸೂರ್ಯನಾರಾಯಣಾಯ ಇದಮರ್ಘ್ಯಂ…” ಎಂದು ಸೂರ್ಯಾಂತರ್ಯಾಮಿ ನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸಿ. ಹೀಗೆ ಮೂರು ಅರ್ಘ್ಯ ಕೊಡಿ. ಸೂರ್ಯೋದಯವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ನಂತರ “ಹೃದಯಸ್ಥಾ ತು ಗಾಯತ್ರೀ…”, “ಉತ್ತಿಷ್ಠೋತ್ತಿಷ್ಠ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ.',
      when: { tradition: ['madhva'], time: ['morning'] },
      verses: [
        {
          text: 'आचम्य । प्राणानायम्य ॥',
          meaning: {
            en: 'Do achamana and then pranayama (breath control with the Gayatri and its vyahritis), exactly as at the beginning.',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಆಚಮನ ಮಾಡಿ, ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಗಾಯತ್ರಿಯನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಉಸಿರಿನ ನಿಯಮನ).',
          },
        },
        {
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nश्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, prompted by Sri Lakshminarayana named Savitri, who dwells within Mukhyaprana, the consort of Bharati, and for his pleasure,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          text: 'प्रातःसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'I shall offer the arghya of the morning sandhya.',
            kn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the Gayatri: the seer is Vishvamitra, the deity is Savitri, the metre is Gayatri; it is used for offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'सूर्यनारायणाय इदमर्घ्यं समर्पयामि दत्तं न मम ॥',
          meaning: {
            en: 'I offer this arghya to Suryanarayana; it is given, it is no longer mine.',
            kn: 'ಈ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ; ಇದು ಕೊಡಲ್ಪಟ್ಟಿದೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'अर्घ्यत्रयान्ते प्रातःसन्ध्याकालातिक्रमदोषपरिहारार्थं\nचतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'After the three arghyas, to remove the fault of letting the time of the morning sandhya pass, I shall give a fourth arghya.',
            kn: 'ಮೂರು ಅರ್ಘ್ಯಗಳ ನಂತರ, ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಕಾಲ ಮೀರಿದ ದೋಷದ ಪರಿಹಾರಕ್ಕಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'हृदयस्था तु गायत्री हृद्गुहामुखनिःसृता ।\nहत्वा ह्यादित्यशत्रूंश्च विशस्व हृदयं मम ॥',
          meaning: {
            en: 'O Gayatri, who dwell in the heart and came forth from the mouth of the heart’s cave: having struck down the enemies of the Sun, enter my heart again.',
            kn: 'ಹೃದಯದಲ್ಲಿ ನೆಲೆಸಿ, ಹೃದಯಗುಹೆಯ ಬಾಯಿಂದ ಹೊರಬಂದ ಓ ಗಾಯತ್ರಿಯೇ, ಸೂರ್ಯನ ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡಿ ಮತ್ತೆ ನನ್ನ ಹೃದಯವನ್ನು ಪ್ರವೇಶಿಸು.',
          },
        },
        {
          text: 'उत्तिष्ठोत्तिष्ठ गन्तव्यं पुनरागमनाय च ।\nउत्तिष्ठ देवि स्थातव्यं प्रविश्य हृदयं मम ॥',
          meaning: {
            en: 'Rise, rise, O goddess: you go forth only to return again. Rise, and having entered my heart, remain there.',
            kn: 'ಏಳು, ಏಳು ಓ ದೇವಿ; ನೀನು ಹೊರಡುವುದು ಮತ್ತೆ ಬರುವುದಕ್ಕಾಗಿಯೇ. ಎದ್ದು ನನ್ನ ಹೃದಯವನ್ನು ಪ್ರವೇಶಿಸಿ ಅಲ್ಲಿಯೇ ನೆಲೆಸು.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Midday: stand facing the Sun. Do achamana and one pranayama and say the sankalpa. With clean water in both joined palms give three arghyas, saying सूर्यनारायणाय इदमर्घ्यं… after each: the first with हंसः शुचिषत्…, the second with आ कृष्णेन… and the third with the Gayatri (Madhva manuals of the Uttaradi Matha, Gadag and Vijayapura). If noon is long past, say the sankalpa and give a fourth arghya with the Gayatri.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ ಸೂರ್ಯನಿಗೆ ಅಭಿಮುಖವಾಗಿ ನಿಂತುಕೊಳ್ಳಿ. ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ ಹೇಳಿ. ಬೊಗಸೆಯಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ ಮೂರು ಅರ್ಘ್ಯ ಕೊಡಿ, ಪ್ರತಿ ಬಾರಿಯೂ “ಸೂರ್ಯನಾರಾಯಣಾಯ ಇದಮರ್ಘ್ಯಂ…” ಎನ್ನಿ: ಮೊದಲನೆಯದು “ಹಂಸಃ ಶುಚಿಷತ್…”, ಎರಡನೆಯದು “ಆ ಕೃಷ್ಣೇನ…”, ಮೂರನೆಯದು ಗಾಯತ್ರಿಯಿಂದ (ಉತ್ತರಾದಿಮಠ, ಗದಗ ಮತ್ತು ವಿಜಾಪುರದ ಮಾಧ್ವ ಪುಸ್ತಕಗಳು). ಮಧ್ಯಾಹ್ನದ ಕಾಲ ಬಹಳ ಮೀರಿದ್ದರೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ.',
      when: { tradition: ['madhva'], time: ['midday'] },
      verses: [
        {
          text: 'आचम्य । प्राणानायम्य ॥',
          meaning: {
            en: 'Do achamana and then pranayama (breath control with the Gayatri and its vyahritis), exactly as at the beginning.',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಆಚಮನ ಮಾಡಿ, ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಗಾಯತ್ರಿಯನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಉಸಿರಿನ ನಿಯಮನ).',
          },
        },
        {
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nश्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, prompted by Sri Lakshminarayana named Savitri, who dwells within Mukhyaprana, the consort of Bharati, and for his pleasure,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          text: 'माध्याह्निकसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'I shall offer the arghya of the midday sandhya.',
            kn: 'ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'हंसः शुचिषदित्यस्य मन्त्रस्य गौतमपुत्रो वामदेव ऋषिः ।\nसूर्यो देवता । जगती छन्दः । माध्याह्निकार्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “hamsah shuchishat”: the seer is Vamadeva, son of Gautama, the deity is Surya, the metre is Jagati; it is used for the midday arghya.',
            kn: '“ಹಂಸಃ ಶುಚಿಷತ್” ಮಂತ್ರಕ್ಕೆ ಗೌತಮಪುತ್ರ ವಾಮದೇವ ಋಷಿ, ಸೂರ್ಯ ದೇವತೆ, ಜಗತೀ ಛಂದಸ್ಸು; ಮಾಧ್ಯಾಹ್ನಿಕ ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।\nनृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतम् ॥',
          meaning: {
            en: 'The Sun is the swan dwelling in brightness, the Vasu in the mid-region, the priest at the altar, the guest in the house; he dwells in men, in the highest, in the order of the world and in the sky; born of the waters, of the rays, of truth and of the mountain — he is the cosmic order itself. (First midday arghya.)',
            kn: 'ಸೂರ್ಯನು ಪ್ರಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವ ಹಂಸ, ಅಂತರಿಕ್ಷದಲ್ಲಿರುವ ವಸು, ವೇದಿಯಲ್ಲಿರುವ ಹೋತೃ, ಮನೆಯಲ್ಲಿರುವ ಅತಿಥಿ; ಮನುಷ್ಯರಲ್ಲೂ ಶ್ರೇಷ್ಠಸ್ಥಾನದಲ್ಲೂ ಋತದಲ್ಲೂ ಆಕಾಶದಲ್ಲೂ ನೆಲೆಸಿದ್ದಾನೆ; ಜಲ, ಕಿರಣ, ಸತ್ಯ, ಪರ್ವತಗಳಿಂದ ಹುಟ್ಟಿದವನು — ಅವನೇ ಋತಸ್ವರೂಪ. (ಮಧ್ಯಾಹ್ನದ ಮೊದಲ ಅರ್ಘ್ಯ.)',
          },
        },
        {
          text: 'सूर्यनारायणाय इदमर्घ्यं समर्पयामि दत्तं न मम ॥',
          meaning: {
            en: 'I offer this arghya to Suryanarayana; it is given, it is no longer mine.',
            kn: 'ಈ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ; ಇದು ಕೊಡಲ್ಪಟ್ಟಿದೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'आ कृष्णेनेत्यस्य मन्त्रस्य हिरण्यस्तूप ऋषिः ।\nसविता देवता । त्रिष्टुप् छन्दः । माध्याह्निकार्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “a krishnena”: the seer is Hiranyastupa, the deity is Savitri, the metre is Trishtubh; it is used for the midday arghya.',
            kn: '“ಆ ಕೃಷ್ಣೇನ” ಮಂತ್ರಕ್ಕೆ ಹಿರಣ್ಯಸ್ತೂಪ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ತ್ರಿಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಮಾಧ್ಯಾಹ್ನಿಕ ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'आ कृष्णेन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवनानि पश्यन् ॥',
          meaning: {
            en: 'Moving through the dark space, laying to rest both immortal and mortal, the god Savitri comes in his golden chariot, beholding all the worlds. (Second midday arghya.)',
            kn: 'ಕತ್ತಲೆಯ ಅಂತರಿಕ್ಷದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ದೇವತೆಗಳನ್ನೂ ಮನುಷ್ಯರನ್ನೂ ಅವರವರ ಸ್ಥಾನದಲ್ಲಿರಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಚಿನ್ನದ ರಥದಲ್ಲಿ ಎಲ್ಲ ಲೋಕಗಳನ್ನೂ ನೋಡುತ್ತಾ ಬರುತ್ತಾನೆ. (ಮಧ್ಯಾಹ್ನದ ಎರಡನೆಯ ಅರ್ಘ್ಯ.)',
          },
        },
        {
          text: 'सूर्यनारायणाय इदमर्घ्यं समर्पयामि दत्तं न मम ॥',
          meaning: {
            en: 'I offer this arghya to Suryanarayana; it is given, it is no longer mine.',
            kn: 'ಈ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ; ಇದು ಕೊಡಲ್ಪಟ್ಟಿದೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the Gayatri: the seer is Vishvamitra, the deity is Savitri, the metre is Gayatri; it is used for offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'सूर्यनारायणाय इदमर्घ्यं समर्पयामि दत्तं न मम ॥',
          meaning: {
            en: 'I offer this arghya to Suryanarayana; it is given, it is no longer mine.',
            kn: 'ಈ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ; ಇದು ಕೊಡಲ್ಪಟ್ಟಿದೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'अर्घ्यत्रयान्ते माध्याह्नसन्ध्याकालातिक्रमदोषपरिहारार्थं\nचतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'After the three arghyas, to remove the fault of letting the time of the midday sandhya pass, I shall give a fourth arghya.',
            kn: 'ಮೂರು ಅರ್ಘ್ಯಗಳ ನಂತರ, ಮಾಧ್ಯಾಹ್ನ ಸಂಧ್ಯೆಯ ಕಾಲ ಮೀರಿದ ದೋಷದ ಪರಿಹಾರಕ್ಕಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Evening: give the arghya before sunset, sitting and facing west; let the water fall into the plate or onto the ground or a stone (at a river, not into the water). Do achamana and one pranayama and say the sankalpa and viniyoga. Fill both joined palms with clean water, recite the Gayatri with Om and the vyahritis and pour it out over the fingertips, saying सूर्यनारायणाय इदमर्घ्यं… — three arghyas. If the sun has already set, say the sankalpa and give a fourth arghya with the Gayatri. Then pray उत्तिष्ठोत्तिष्ठ… (the Uttaradi manual also says हृदयस्था तु गायत्री… here).',
      noteKn: 'ಸಾಯಂಕಾಲದ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಮೊದಲು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು ಕೊಡಬೇಕು; ನೀರನ್ನು ತಟ್ಟೆಗೆ, ನೆಲಕ್ಕೆ ಅಥವಾ ಕಲ್ಲಿನ ಮೇಲೆ ಬಿಡಿ (ನದಿಯಲ್ಲಾದರೆ ನೀರಿನೊಳಗೆ ಅಲ್ಲ). ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಬೊಗಸೆಯಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ಬಿಡಿ, “ಸೂರ್ಯನಾರಾಯಣಾಯ ಇದಮರ್ಘ್ಯಂ…” ಎನ್ನಿ — ಮೂರು ಅರ್ಘ್ಯಗಳು. ಸೂರ್ಯಾಸ್ತವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ನಂತರ “ಉತ್ತಿಷ್ಠೋತ್ತಿಷ್ಠ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ (ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕ ಇಲ್ಲಿ “ಹೃದಯಸ್ಥಾ ತು ಗಾಯತ್ರೀ…” ಎಂದೂ ಹೇಳುತ್ತದೆ).',
      when: { tradition: ['madhva'], time: ['evening'] },
      verses: [
        {
          text: 'आचम्य । प्राणानायम्य ॥',
          meaning: {
            en: 'Do achamana and then pranayama (breath control with the Gayatri and its vyahritis), exactly as at the beginning.',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಆಚಮನ ಮಾಡಿ, ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಗಾಯತ್ರಿಯನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಉಸಿರಿನ ನಿಯಮನ).',
          },
        },
        {
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nश्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, prompted by Sri Lakshminarayana named Savitri, who dwells within Mukhyaprana, the consort of Bharati, and for his pleasure,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          text: 'सायंसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'I shall offer the arghya of the evening sandhya.',
            kn: 'ಸಾಯಂಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the Gayatri: the seer is Vishvamitra, the deity is Savitri, the metre is Gayatri; it is used for offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'सूर्यनारायणाय इदमर्घ्यं समर्पयामि दत्तं न मम ॥',
          meaning: {
            en: 'I offer this arghya to Suryanarayana; it is given, it is no longer mine.',
            kn: 'ಈ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ; ಇದು ಕೊಡಲ್ಪಟ್ಟಿದೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'अर्घ्यत्रयान्ते सायंसन्ध्याकालातिक्रमदोषपरिहारार्थं\nचतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'After the three arghyas, to remove the fault of letting the time of the evening sandhya pass, I shall give a fourth arghya.',
            kn: 'ಮೂರು ಅರ್ಘ್ಯಗಳ ನಂತರ, ಸಾಯಂಸಂಧ್ಯೆಯ ಕಾಲ ಮೀರಿದ ದೋಷದ ಪರಿಹಾರಕ್ಕಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'उत्तिष्ठोत्तिष्ठ गन्तव्यं पुनरागमनाय च ।\nउत्तिष्ठ देवि स्थातव्यं प्रविश्य हृदयं मम ॥',
          meaning: {
            en: 'Rise, rise, O goddess: you go forth only to return again. Rise, and having entered my heart, remain there.',
            kn: 'ಏಳು, ಏಳು ಓ ದೇವಿ; ನೀನು ಹೊರಡುವುದು ಮತ್ತೆ ಬರುವುದಕ್ಕಾಗಿಯೇ. ಎದ್ದು ನನ್ನ ಹೃದಯವನ್ನು ಪ್ರವೇಶಿಸಿ ಅಲ್ಲಿಯೇ ನೆಲೆಸು.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Morning: give the arghya before sunrise, standing, facing east and looking towards the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Fill both joined palms with clean water from the arghya vessel, raise them to the height of the nose, recite the Gayatri with Om and the vyahritis and pour the water out over the fingertips — three arghyas. If the sun has already risen, say the prayaschitta sankalpa and give one more arghya with the rik यदद्य कच्च… (Rigveda 8.93.4; seer Sukaksha Angirasa, deity Indra, metre Gayatri). The Karnataka manuals give this prayaschitta arghya before the three; others after them.',
      noteKn: 'ಬೆಳಗಿನ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯೋದಯಕ್ಕೆ ಮೊದಲು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಸೂರ್ಯನ ಕಡೆ ನೋಡುತ್ತಾ ನಿಂತು ಕೊಡಬೇಕು. ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಅರ್ಘ್ಯಪಾತ್ರೆಯ ಶುದ್ಧಜಲವನ್ನು ಬೊಗಸೆಯಲ್ಲಿ ತುಂಬಿ ಮೂಗಿನ ಎತ್ತರಕ್ಕೆ ಎತ್ತಿ, ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ಬಿಡಿ — ಮೂರು ಅರ್ಘ್ಯಗಳು. ಸೂರ್ಯೋದಯವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ “ಯದದ್ಯ ಕಚ್ಚ…” ಋಕ್ಕಿನಿಂದ (ಋಗ್ವೇದ ೮.೯೩.೪; ಸುಕಕ್ಷ ಆಂಗಿರಸ ಋಷಿ, ಇಂದ್ರ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು) ಇನ್ನೊಂದು ಅರ್ಘ್ಯ ಕೊಡಿ. ಕರ್ನಾಟಕದ ಪುಸ್ತಕಗಳು ಈ ಪ್ರಾಯಶ್ಚಿತ್ತಾರ್ಘ್ಯವನ್ನು ಮೂರು ಅರ್ಘ್ಯಗಳಿಗೆ ಮೊದಲು ಕೊಡುತ್ತವೆ; ಇತರರು ಅವುಗಳ ನಂತರ.',
      when: { tradition: ['smarta'], time: ['morning'] },
      verses: [
        {
          text: 'आचम्य । प्राणानायम्य ॥',
          meaning: {
            en: 'Do achamana and then pranayama (breath control with the Gayatri and its vyahritis), exactly as at the beginning.',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಆಚಮನ ಮಾಡಿ, ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಗಾಯತ್ರಿಯನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಉಸಿರಿನ ನಿಯಮನ).',
          },
        },
        {
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nमम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, for the destruction of all my sins and the pleasure of the Supreme Lord,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ನನ್ನ ಸಮಸ್ತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          text: 'प्रातःसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'I shall offer the arghya of the morning sandhya.',
            kn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the Gayatri: the seer is Vishvamitra, the deity is Savitri, the metre is Gayatri; it is used for offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'To expiate the fault of letting the proper time pass, I shall offer a fourth arghya.',
            kn: 'ಸರಿಯಾದ ಕಾಲವನ್ನು ಮೀರಿದ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'यदद्य कच्च वृत्रहन्नुदगा अभि सूर्य ।\nसर्वं तदिन्द्र ते वशे ॥',
          meaning: {
            en: 'O slayer of Vritra, O Sun, whatever you have risen upon today — all of it, O Indra, is under your control.',
            kn: 'ವೃತ್ರನನ್ನು ಕೊಂದವನೇ, ಓ ಸೂರ್ಯನೇ, ಇಂದು ನೀನು ಯಾವುದರ ಮೇಲೆ ಉದಯಿಸಿರುವೆಯೋ ಅದೆಲ್ಲವೂ, ಓ ಇಂದ್ರನೇ, ನಿನ್ನ ವಶದಲ್ಲಿದೆ.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Midday: stand facing the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Andhra manuals give the first arghya with हंसः शुचिषत्…, the second with आ कृष्णेन… and the third with the Gayatri; the Mysuru manual gives all three with आ कृष्णेन…; others give all three with the Gayatri. If noon is long past, say the prayaschitta sankalpa and give one more arghya with the rik प्रातर्देवीम्… (Rigveda 5.69.3).',
      noteKn: 'ಮಧ್ಯಾಹ್ನ ಸೂರ್ಯನಿಗೆ ಅಭಿಮುಖವಾಗಿ ನಿಂತುಕೊಳ್ಳಿ. ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು ಮೊದಲ ಅರ್ಘ್ಯವನ್ನು “ಹಂಸಃ ಶುಚಿಷತ್…”, ಎರಡನೆಯದನ್ನು “ಆ ಕೃಷ್ಣೇನ…”, ಮೂರನೆಯದನ್ನು ಗಾಯತ್ರಿಯಿಂದ ಕೊಡುತ್ತವೆ; ಮೈಸೂರಿನ ಪುಸ್ತಕ ಮೂರನ್ನೂ “ಆ ಕೃಷ್ಣೇನ…”ದಿಂದ ಕೊಡುತ್ತದೆ; ಇತರರು ಮೂರನ್ನೂ ಗಾಯತ್ರಿಯಿಂದ ಕೊಡುತ್ತಾರೆ. ಮಧ್ಯಾಹ್ನದ ಕಾಲ ಬಹಳ ಮೀರಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ “ಪ್ರಾತರ್ದೇವೀಮ್…” ಋಕ್ಕಿನಿಂದ (ಋಗ್ವೇದ ೫.೬೯.೩) ಇನ್ನೊಂದು ಅರ್ಘ್ಯ ಕೊಡಿ.',
      when: { tradition: ['smarta'], time: ['midday'] },
      verses: [
        {
          text: 'आचम्य । प्राणानायम्य ॥',
          meaning: {
            en: 'Do achamana and then pranayama (breath control with the Gayatri and its vyahritis), exactly as at the beginning.',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಆಚಮನ ಮಾಡಿ, ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಗಾಯತ್ರಿಯನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಉಸಿರಿನ ನಿಯಮನ).',
          },
        },
        {
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nमम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, for the destruction of all my sins and the pleasure of the Supreme Lord,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ನನ್ನ ಸಮಸ್ತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          text: 'माध्याह्निकसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'I shall offer the arghya of the midday sandhya.',
            kn: 'ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the Gayatri: the seer is Vishvamitra, the deity is Savitri, the metre is Gayatri; it is used for offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।\nनृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतम् ॥',
          meaning: {
            en: 'The Sun is the swan dwelling in brightness, the Vasu in the mid-region, the priest at the altar, the guest in the house; he dwells in men, in the highest, in the order of the world and in the sky; born of the waters, of the rays, of truth and of the mountain — he is the cosmic order itself. (First midday arghya.)',
            kn: 'ಸೂರ್ಯನು ಪ್ರಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವ ಹಂಸ, ಅಂತರಿಕ್ಷದಲ್ಲಿರುವ ವಸು, ವೇದಿಯಲ್ಲಿರುವ ಹೋತೃ, ಮನೆಯಲ್ಲಿರುವ ಅತಿಥಿ; ಮನುಷ್ಯರಲ್ಲೂ ಶ್ರೇಷ್ಠಸ್ಥಾನದಲ್ಲೂ ಋತದಲ್ಲೂ ಆಕಾಶದಲ್ಲೂ ನೆಲೆಸಿದ್ದಾನೆ; ಜಲ, ಕಿರಣ, ಸತ್ಯ, ಪರ್ವತಗಳಿಂದ ಹುಟ್ಟಿದವನು — ಅವನೇ ಋತಸ್ವರೂಪ. (ಮಧ್ಯಾಹ್ನದ ಮೊದಲ ಅರ್ಘ್ಯ.)',
          },
        },
        {
          text: 'आ कृष्णेन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवनानि पश्यन् ॥',
          meaning: {
            en: 'Moving through the dark space, laying to rest both immortal and mortal, the god Savitri comes in his golden chariot, beholding all the worlds. (Second midday arghya.)',
            kn: 'ಕತ್ತಲೆಯ ಅಂತರಿಕ್ಷದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ದೇವತೆಗಳನ್ನೂ ಮನುಷ್ಯರನ್ನೂ ಅವರವರ ಸ್ಥಾನದಲ್ಲಿರಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಚಿನ್ನದ ರಥದಲ್ಲಿ ಎಲ್ಲ ಲೋಕಗಳನ್ನೂ ನೋಡುತ್ತಾ ಬರುತ್ತಾನೆ. (ಮಧ್ಯಾಹ್ನದ ಎರಡನೆಯ ಅರ್ಘ್ಯ.)',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'To expiate the fault of letting the proper time pass, I shall offer a fourth arghya.',
            kn: 'ಸರಿಯಾದ ಕಾಲವನ್ನು ಮೀರಿದ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'प्रातर्देवीमदितिं जोहवीमि मध्यन्दिन उदिता सूर्यस्य ।\nराये मित्रावरुणा सर्वतातेळे तोकाय तनयाय शं योः ॥',
          meaning: {
            en: 'At dawn I call on the goddess Aditi, and at noon when the sun is high; I praise Mitra and Varuna everywhere for wealth, and for health and welfare for our children and descendants.',
            kn: 'ಬೆಳಗಿನ ಜಾವದಲ್ಲೂ ಸೂರ್ಯನು ಮೇಲೇರಿದ ಮಧ್ಯಾಹ್ನದಲ್ಲೂ ಅದಿತಿದೇವಿಯನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇನೆ; ಸಂಪತ್ತಿಗಾಗಿಯೂ ಮಕ್ಕಳು ಮೊಮ್ಮಕ್ಕಳ ಆರೋಗ್ಯ, ಕ್ಷೇಮಕ್ಕಾಗಿಯೂ ಮಿತ್ರಾವರುಣರನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Evening: give the arghya before sunset, sitting and facing west; let the water fall on the ground or a stone (not into a river). Do achamana and one pranayama and say the sankalpa and viniyoga. Recite the Gayatri with Om and the vyahritis and pour out the water from both joined palms — three arghyas. If the sun has already set, say the prayaschitta sankalpa and give one more arghya with the rik उद्घेदभि… (Rigveda 8.93.1); the Karnataka manuals give it before the three.',
      noteKn: 'ಸಾಯಂಕಾಲದ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಮೊದಲು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು ಕೊಡಬೇಕು; ನೀರನ್ನು ನೆಲಕ್ಕೆ ಅಥವಾ ಕಲ್ಲಿನ ಮೇಲೆ ಬಿಡಿ (ನದಿಯೊಳಗೆ ಅಲ್ಲ). ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೊಗಸೆಯ ನೀರನ್ನು ಬಿಡಿ — ಮೂರು ಅರ್ಘ್ಯಗಳು. ಸೂರ್ಯಾಸ್ತವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ “ಉದ್ಘೇದಭಿ…” ಋಕ್ಕಿನಿಂದ (ಋಗ್ವೇದ ೮.೯೩.೧) ಇನ್ನೊಂದು ಅರ್ಘ್ಯ ಕೊಡಿ; ಕರ್ನಾಟಕದ ಪುಸ್ತಕಗಳು ಇದನ್ನು ಮೂರು ಅರ್ಘ್ಯಗಳಿಗೆ ಮೊದಲು ಕೊಡುತ್ತವೆ.',
      when: { tradition: ['smarta'], time: ['evening'] },
      verses: [
        {
          text: 'आचम्य । प्राणानायम्य ॥',
          meaning: {
            en: 'Do achamana and then pranayama (breath control with the Gayatri and its vyahritis), exactly as at the beginning.',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಆಚಮನ ಮಾಡಿ, ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಗಾಯತ್ರಿಯನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಉಸಿರಿನ ನಿಯಮನ).',
          },
        },
        {
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nमम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, for the destruction of all my sins and the pleasure of the Supreme Lord,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ನನ್ನ ಸಮಸ್ತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          text: 'सायंसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'I shall offer the arghya of the evening sandhya.',
            kn: 'ಸಾಯಂಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the Gayatri: the seer is Vishvamitra, the deity is Savitri, the metre is Gayatri; it is used for offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'To expiate the fault of letting the proper time pass, I shall offer a fourth arghya.',
            kn: 'ಸರಿಯಾದ ಕಾಲವನ್ನು ಮೀರಿದ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'उद्घेदभि श्रुतामघं वृषभं नर्यापसम् ।\nअस्तारमेषि सूर्य ॥',
          meaning: {
            en: 'O Sun, you rise towards Indra, famed for his bounty, the mighty bull whose deeds benefit men, the hurler of weapons.',
            kn: 'ಓ ಸೂರ್ಯನೇ, ದಾನಕ್ಕೆ ಪ್ರಸಿದ್ಧನಾದ, ಬಲಿಷ್ಠನಾದ, ಮನುಷ್ಯರಿಗೆ ಹಿತಕರ ಕಾರ್ಯ ಮಾಡುವ, ಆಯುಧ ಪ್ರಯೋಗಿಸುವ ಇಂದ್ರನ ಕಡೆಗೆ ನೀನು ಉದಯಿಸುತ್ತೀಯೆ.',
          },
        },
      ],
    },
    {
      title: 'आत्मप्रदक्षिणा',
      titleEn: 'Atma-pradakshina (turning round in meditation)',
      note: 'Take a little water in the right hand, say असावादित्यो ब्रह्म — meditating that the Lord within the sun is Brahman — and turn round once clockwise where you stand, sprinkling the water around you. Then do achamana twice and sit down.',
      noteKn: 'ಬಲಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು, ಸೂರ್ಯನೊಳಗಿರುವ ಭಗವಂತನೇ ಪರಬ್ರಹ್ಮನೆಂದು ಧ್ಯಾನಿಸುತ್ತಾ “ಅಸಾವಾದಿತ್ಯೋ ಬ್ರಹ್ಮ” ಎಂದು ಹೇಳಿ, ನಿಂತಲ್ಲೇ ಒಂದು ಸುತ್ತು ಪ್ರದಕ್ಷಿಣೆಯಾಗಿ ತಿರುಗಿ ಸುತ್ತಲೂ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ. ನಂತರ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ ಕುಳಿತುಕೊಳ್ಳಿ.',
      verses: [
        {
          text: 'असावादित्यो ब्रह्म ॥',
          meaning: {
            en: 'That one in the sun is Brahman — the Supreme Lord shining within the solar orb.',
            kn: 'ಸೂರ್ಯನಲ್ಲಿರುವ ಅವನೇ ಬ್ರಹ್ಮ — ಸೂರ್ಯಮಂಡಲದೊಳಗೆ ಬೆಳಗುವ ಪರಮಾತ್ಮ.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'सूर्योपस्थानम्',
      titleEn: 'Suryopasthana at midday (before japa)',
      note: 'Midday: stand facing the Sun with folded (or raised) hands and recite the sukta उदु त्यं… (Rigveda 1.50, thirteen riks) and चित्रं देवानाम्… (1.115, six riks), and finish with सविता पश्चातात्… (10.36.14). Rigvedins, both Madhva and Smarta, do the midday upasthana here, before the Gayatri japa and not after it (Kamesvara Aiyar; the Madhva manuals of the Uttaradi Matha, Gadag and Vijayapura; the Mysuru Smarta manual). Some recite only the thirteen riks of 1.50 (Kamesvara Aiyar); the Uttaradi manual uses आसत्येन…, उद्वयं…, उदु त्यं…, चित्रं…, तच्चक्षुः… and हंसः शुचिषत्… instead. Madhvas then say the abhivadana (next step) and sit for japa.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ ಸೂರ್ಯನಿಗೆ ಅಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು (ಅಥವಾ ಕೈ ಮೇಲೆತ್ತಿ) ನಿಂತು “ಉದು ತ್ಯಂ…” ಸೂಕ್ತವನ್ನು (ಋಗ್ವೇದ ೧.೫೦, ಹದಿಮೂರು ಋಕ್ಕುಗಳು), “ಚಿತ್ರಂ ದೇವಾನಾಮ್…” (೧.೧೧೫, ಆರು ಋಕ್ಕುಗಳು) ಹೇಳಿ, “ಸವಿತಾ ಪಶ್ಚಾತಾತ್…” (೧೦.೩೬.೧೪) ಎಂದು ಮುಗಿಸಿ. ಮಾಧ್ವರಾಗಲಿ ಸ್ಮಾರ್ತರಾಗಲಿ ಋಗ್ವೇದಿಗಳು ಮಧ್ಯಾಹ್ನದ ಉಪಸ್ಥಾನವನ್ನು ಇಲ್ಲಿಯೇ, ಗಾಯತ್ರೀಜಪಕ್ಕೆ ಮೊದಲು ಮಾಡುತ್ತಾರೆ, ನಂತರವಲ್ಲ (ಕಾಮೇಶ್ವರ ಅಯ್ಯರ್; ಉತ್ತರಾದಿಮಠ, ಗದಗ, ವಿಜಾಪುರದ ಮಾಧ್ವ ಪುಸ್ತಕಗಳು; ಮೈಸೂರಿನ ಸ್ಮಾರ್ತ ಪುಸ್ತಕ). ಕೆಲವರು ೧.೫೦ರ ಹದಿಮೂರು ಋಕ್ಕುಗಳನ್ನು ಮಾತ್ರ ಹೇಳುತ್ತಾರೆ (ಕಾಮೇಶ್ವರ ಅಯ್ಯರ್); ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕ ಇವುಗಳ ಬದಲು “ಆಸತ್ಯೇನ…”, “ಉದ್ವಯಂ…”, “ಉದು ತ್ಯಂ…”, “ಚಿತ್ರಂ…”, “ತಚ್ಚಕ್ಷುಃ…”, “ಹಂಸಃ ಶುಚಿಷತ್…” ಹೇಳುತ್ತದೆ. ಮಾಧ್ವರು ನಂತರ ಅಭಿವಾದನ (ಮುಂದಿನ ಹಂತ) ಮಾಡಿ ಜಪಕ್ಕೆ ಕುಳಿತುಕೊಳ್ಳುತ್ತಾರೆ.',
      when: { time: ['midday'] },
      verses: [
        {
          text: 'उदु त्यमिति त्रयोदशर्चस्य सूक्तस्य काण्वः प्रस्कण्व ऋषिः ।\nसूर्यो देवता । नवाद्या गायत्र्यः । अन्त्याश्चतस्रोऽनुष्टुभः ।\nसूर्योपस्थाने विनियोगः ॥',
          meaning: {
            en: 'For the sukta of thirteen riks “ud u tyam”: the seer is Praskanva of the Kanva family and the deity is Surya; the first nine riks are in Gayatri metre and the last four in Anushtubh; it is used in worshipping the Sun (upasthana).',
            kn: '“ಉದು ತ್ಯಂ” ಎಂಬ ಹದಿಮೂರು ಋಕ್ಕುಗಳ ಸೂಕ್ತಕ್ಕೆ ಕಣ್ವವಂಶದ ಪ್ರಸ್ಕಣ್ವ ಋಷಿ, ಸೂರ್ಯ ದೇವತೆ; ಮೊದಲ ಒಂಬತ್ತು ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಕೊನೆಯ ನಾಲ್ಕು ಅನುಷ್ಟುಪ್; ಸೂರ್ಯೋಪಸ್ಥಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'उदु त्यं जातवेदसं देवं वहन्ति केतवः ।\nदृशे विश्वाय सूर्यम् ॥',
          meaning: {
            en: 'His rays bear aloft the god Surya, knower of all beings, so that all may see him.',
            kn: 'ಎಲ್ಲ ಜೀವಿಗಳನ್ನೂ ಬಲ್ಲ ಸೂರ್ಯದೇವನನ್ನು, ಎಲ್ಲರೂ ಕಾಣುವಂತೆ, ಅವನ ಕಿರಣಗಳು ಮೇಲಕ್ಕೆ ಹೊತ್ತೊಯ್ಯುತ್ತವೆ.',
          },
        },
        {
          text: 'अप त्ये तायवो यथा नक्षत्रा यन्त्यक्तुभिः ।\nसूराय विश्वचक्षसे ॥',
          meaning: {
            en: 'Before the all-seeing Sun the stars slip away with the night, like thieves.',
            kn: 'ಎಲ್ಲವನ್ನೂ ನೋಡುವ ಸೂರ್ಯನ ಮುಂದೆ ನಕ್ಷತ್ರಗಳು ರಾತ್ರಿಯೊಂದಿಗೆ ಕಳ್ಳರಂತೆ ಸರಿದುಹೋಗುತ್ತವೆ.',
          },
        },
        {
          text: 'अदृश्रमस्य केतवो वि रश्मयो जनाँ अनु ।\nभ्राजन्तो अग्नयो यथा ॥',
          meaning: {
            en: 'His beams have been seen spreading over the peoples, blazing like fires.',
            kn: 'ಅವನ ಕಿರಣಗಳು ಬೆಂಕಿಯಂತೆ ಹೊಳೆಯುತ್ತಾ ಜನರೆಲ್ಲರ ಮೇಲೆ ಹರಡಿರುವುದು ಕಾಣುತ್ತಿದೆ.',
          },
        },
        {
          text: 'तरणिर्विश्वदर्शतो ज्योतिष्कृदसि सूर्य ।\nविश्वमा भासि रोचनम् ॥',
          meaning: {
            en: 'O Sun, swift and seen by all, maker of light, you illumine the whole bright realm.',
            kn: 'ಓ ಸೂರ್ಯನೇ, ನೀನು ವೇಗಶಾಲಿ, ಎಲ್ಲರಿಗೂ ಕಾಣುವವನು, ಬೆಳಕನ್ನು ಸೃಷ್ಟಿಸುವವನು; ಪ್ರಕಾಶಮಾನವಾದ ಸಮಸ್ತ ಲೋಕವನ್ನೂ ಬೆಳಗುತ್ತೀಯೆ.',
          },
        },
        {
          text: 'प्रत्यङ्देवानां विशः प्रत्यङ्ङुदेषि मानुषान् ।\nप्रत्यङ्विश्वं स्वर्दृशे ॥',
          meaning: {
            en: 'You rise facing the hosts of gods, facing mankind, facing all, so that the light may be seen.',
            kn: 'ದೇವತೆಗಳ ಸಮೂಹಕ್ಕೂ, ಮನುಷ್ಯರಿಗೂ, ಸಮಸ್ತಕ್ಕೂ ಎದುರಾಗಿ ಬೆಳಕು ಕಾಣುವಂತೆ ನೀನು ಉದಯಿಸುತ್ತೀಯೆ.',
          },
        },
        {
          text: 'येना पावक चक्षसा भुरण्यन्तं जनाँ अनु ।\nत्वं वरुण पश्यसि ॥',
          meaning: {
            en: 'With that eye, O purifying Varuna, with which you watch the busy one moving among men —',
            kn: 'ಓ ಪಾವನನಾದ ವರುಣನೇ, ಜನರ ನಡುವೆ ಸಂಚರಿಸುವವನನ್ನು ನೀನು ಯಾವ ಕಣ್ಣಿನಿಂದ ನೋಡುತ್ತೀಯೋ ಆ ಕಣ್ಣಿನಿಂದ —',
          },
        },
        {
          text: 'वि द्यामेषि रजस्पृथ्वहा मिमानो अक्तुभिः ।\nपश्यञ्जन्मानि सूर्य ॥',
          meaning: {
            en: '— you cross the sky and the wide mid-region, O Sun, measuring out the days with the nights, watching over all that is born.',
            kn: '— ಓ ಸೂರ್ಯನೇ, ರಾತ್ರಿಗಳೊಂದಿಗೆ ಹಗಲುಗಳನ್ನು ಅಳೆಯುತ್ತಾ, ಹುಟ್ಟಿದ ಎಲ್ಲ ಜೀವಿಗಳನ್ನೂ ನೋಡುತ್ತಾ, ದ್ಯುಲೋಕವನ್ನೂ ವಿಶಾಲ ಅಂತರಿಕ್ಷವನ್ನೂ ದಾಟುತ್ತೀಯೆ.',
          },
        },
        {
          text: 'सप्त त्वा हरितो रथे वहन्ति देव सूर्य ।\nशोचिष्केशं विचक्षण ॥',
          meaning: {
            en: 'Seven bay mares draw you in your chariot, O god Surya, far-seeing one with hair of flame.',
            kn: 'ಓ ಸೂರ್ಯದೇವ, ಜ್ವಾಲೆಯಂತಹ ಕೇಶವುಳ್ಳ ದೂರದರ್ಶಿಯೇ, ಏಳು ಕುದುರೆಗಳು ನಿನ್ನನ್ನು ರಥದಲ್ಲಿ ಎಳೆಯುತ್ತವೆ.',
          },
        },
        {
          text: 'अयुक्त सप्त शुन्ध्युवः सूरो रथस्य नप्त्यः ।\nताभिर्याति स्वयुक्तिभिः ॥',
          meaning: {
            en: 'The Sun has yoked the seven bright daughters of his chariot; with them, self-yoked, he goes on his way.',
            kn: 'ಸೂರ್ಯನು ತನ್ನ ರಥದ ಏಳು ಹೊಳೆಯುವ ಕುದುರೆಗಳನ್ನು ಹೂಡಿದ್ದಾನೆ; ತಾವಾಗಿಯೇ ಹೂಡಿಕೊಂಡ ಅವುಗಳೊಂದಿಗೆ ಸಾಗುತ್ತಾನೆ.',
          },
        },
        {
          text: 'उद्वयं तमसस्परि ज्योतिष्पश्यन्त उत्तरम् ।\nदेवं देवत्रा सूर्यमगन्म ज्योतिरुत्तमम् ॥',
          meaning: {
            en: 'Rising above the darkness and seeing the higher light, we have come to Surya, god among gods, the highest light.',
            kn: 'ಕತ್ತಲೆಯನ್ನು ದಾಟಿ ಮೇಲಿನ ಬೆಳಕನ್ನು ಕಾಣುತ್ತಾ, ದೇವತೆಗಳಲ್ಲಿ ದೇವನಾದ, ಉತ್ತಮ ಜ್ಯೋತಿಯಾದ ಸೂರ್ಯನನ್ನು ನಾವು ಸೇರಿದ್ದೇವೆ.',
          },
        },
        {
          text: 'उद्यन्नद्य मित्रमह आरोहन्नुत्तरां दिवम् ।\nहृद्रोगं मम सूर्य हरिमाणं च नाशय ॥',
          meaning: {
            en: 'Rising today, O Sun rich in friendship, and climbing the higher heaven, destroy my heart’s disease and my pallor.',
            kn: 'ಸ್ನೇಹಪೂರ್ಣ ತೇಜಸ್ಸುಳ್ಳ ಓ ಸೂರ್ಯನೇ, ಇಂದು ಉದಯಿಸಿ ಮೇಲಿನ ಆಕಾಶವನ್ನೇರುತ್ತಾ ನನ್ನ ಹೃದ್ರೋಗವನ್ನೂ ಮೈಬಣ್ಣ ಕಳೆಗುಂದುವ ರೋಗವನ್ನೂ ನಾಶಮಾಡು.',
          },
        },
        {
          text: 'शुकेषु मे हरिमाणं रोपणाकासु दध्मसि ।\nअथो हारिद्रवेषु मे हरिमाणं नि दध्मसि ॥',
          meaning: {
            en: 'Let us put my pallor into the parrots and the thrushes; let us put my pallor into the yellow birds.',
            kn: 'ನನ್ನ ಈ ಹಳದಿ ರೋಗವನ್ನು ಗಿಳಿಗಳಿಗೂ ರೋಪಣಾಕ ಹಕ್ಕಿಗಳಿಗೂ ವರ್ಗಾಯಿಸೋಣ; ಹಳದಿ ಬಣ್ಣದ ಹಕ್ಕಿಗಳಿಗೂ ಅದನ್ನು ಬಿಟ್ಟುಬಿಡೋಣ.',
          },
        },
        {
          text: 'उदगादयमादित्यो विश्वेन सहसा सह ।\nद्विषन्तं मह्यं रन्धयन्मो अहं द्विषते रधम् ॥',
          meaning: {
            en: 'This Aditya has risen with all his might, subduing for me the one who hates me; may I never fall into the power of my enemy.',
            kn: 'ಈ ಆದಿತ್ಯನು ತನ್ನ ಸಮಸ್ತ ಬಲದೊಂದಿಗೆ ಉದಯಿಸಿದ್ದಾನೆ, ನನ್ನನ್ನು ದ್ವೇಷಿಸುವವನನ್ನು ನನಗೆ ವಶಪಡಿಸುತ್ತಾ; ನಾನೆಂದೂ ಶತ್ರುವಿನ ವಶಕ್ಕೆ ಬೀಳದಿರಲಿ.',
          },
        },
        {
          text: 'चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः ।\nआप्रा द्यावापृथिवी अन्तरिक्षं सूर्य आत्मा जगतस्तस्थुषश्च ॥',
          meaning: {
            en: 'The bright face of the gods has risen, the eye of Mitra, Varuna and Agni. He has filled heaven, earth and the mid-region; the Sun is the soul of all that moves and all that stands still.',
            kn: 'ದೇವತೆಗಳ ಅದ್ಭುತವಾದ ಮುಖ, ಮಿತ್ರ, ವರುಣ, ಅಗ್ನಿಯರ ಕಣ್ಣು ಉದಯಿಸಿದೆ. ಅವನು ದ್ಯುಲೋಕ, ಭೂಮಿ, ಅಂತರಿಕ್ಷಗಳನ್ನು ತುಂಬಿದ್ದಾನೆ; ಚರಾಚರ ಜಗತ್ತಿನ ಆತ್ಮ ಸೂರ್ಯನೇ.',
          },
        },
        {
          text: 'सूर्यो देवीमुषसं रोचमानां मर्यो न योषामभ्येति पश्चात् ।\nयत्रा नरो देवयन्तो युगानि वितन्वते प्रति भद्राय भद्रम् ॥',
          meaning: {
            en: 'The Sun follows the shining goddess Dawn as a young man follows a maiden, there where devout men perform their rites age after age, each blessing answered with blessing.',
            kn: 'ಯುವಕನು ಕನ್ಯೆಯನ್ನು ಹಿಂಬಾಲಿಸುವಂತೆ ಸೂರ್ಯನು ಪ್ರಕಾಶಿಸುವ ಉಷಾದೇವಿಯನ್ನು ಹಿಂಬಾಲಿಸುತ್ತಾನೆ; ಅಲ್ಲಿ ದೇವಭಕ್ತರು ಯುಗಯುಗಗಳಿಂದ ಮಂಗಳಕ್ಕಾಗಿ ಮಂಗಳಕರ ಕರ್ಮಗಳನ್ನು ವಿಸ್ತರಿಸುತ್ತಾರೆ.',
          },
        },
        {
          text: 'भद्रा अश्वा हरितः सूर्यस्य चित्रा एतग्वा अनुमाद्यासः ।\nनमस्यन्तो दिव आ पृष्ठमस्थुः परि द्यावापृथिवी यन्ति सद्यः ॥',
          meaning: {
            en: 'The Sun’s auspicious bay horses, bright, swift and worthy of praise, bowing low, have climbed the ridge of heaven; in a day they circle heaven and earth.',
            kn: 'ಸೂರ್ಯನ ಮಂಗಳಕರವಾದ, ವಿಚಿತ್ರ ಬಣ್ಣದ, ವೇಗಶಾಲಿಯಾದ, ಸ್ತುತ್ಯವಾದ ಕುದುರೆಗಳು ನಮಸ್ಕರಿಸುತ್ತಾ ಆಕಾಶದ ಶಿಖರವನ್ನೇರಿವೆ; ಒಂದೇ ದಿನದಲ್ಲಿ ದ್ಯಾವಾಪೃಥಿವಿಗಳನ್ನು ಸುತ್ತುತ್ತವೆ.',
          },
        },
        {
          text: 'तत्सूर्यस्य देवत्वं तन्महित्वं मध्या कर्तोर्विततं सं जभार ।\nयदेदयुक्त हरितः सधस्थादाद्रात्री वासस्तनुते सिमस्मै ॥',
          meaning: {
            en: 'This is the divinity, this the greatness of the Sun: in the midst of work he draws in the spread-out light; when he unyokes his horses from their stall, Night spreads her garment over all.',
            kn: 'ಇದೇ ಸೂರ್ಯನ ದೇವತ್ವ, ಇದೇ ಅವನ ಮಹಿಮೆ: ಕೆಲಸ ನಡೆಯುತ್ತಿರುವಾಗಲೇ ಹರಡಿದ ಬೆಳಕನ್ನು ಹಿಂದೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ; ಅವನು ಕುದುರೆಗಳನ್ನು ಬಿಚ್ಚಿದಾಗ ರಾತ್ರಿಯು ಎಲ್ಲದರ ಮೇಲೆ ತನ್ನ ವಸ್ತ್ರವನ್ನು ಹರಡುತ್ತಾಳೆ.',
          },
        },
        {
          text: 'तन्मित्रस्य वरुणस्याभिचक्षे सूर्यो रूपं कृणुते द्योरुपस्थे ।\nअनन्तमन्यद्रुशदस्य पाजः कृष्णमन्यद्धरितः सं भरन्ति ॥',
          meaning: {
            en: 'In the lap of heaven the Sun takes on a form for Mitra and Varuna to behold: his bay horses bring now his endless shining power, now its dark counterpart.',
            kn: 'ಮಿತ್ರಾವರುಣರು ನೋಡುವಂತೆ ಸೂರ್ಯನು ಆಕಾಶದ ಮಡಿಲಲ್ಲಿ ರೂಪ ಧರಿಸುತ್ತಾನೆ; ಅವನ ಕುದುರೆಗಳು ಒಮ್ಮೆ ಅನಂತವಾದ ಹೊಳೆಯುವ ತೇಜಸ್ಸನ್ನೂ, ಒಮ್ಮೆ ಕಪ್ಪಾದ ಇನ್ನೊಂದು ರೂಪವನ್ನೂ ತರುತ್ತವೆ.',
          },
        },
        {
          text: 'अद्या देवा उदिता सूर्यस्य निरंहसः पिपृता निरवद्यात् ।\nतन्नो मित्रो वरुणो मामहन्तामदितिः सिन्धुः पृथिवी उत द्यौः ॥',
          meaning: {
            en: 'Today, O gods, at the rising of the Sun, deliver us from sin and from blame. May Mitra and Varuna, Aditi, the river, earth and heaven grant us this.',
            kn: 'ಓ ದೇವತೆಗಳೇ, ಇಂದು ಸೂರ್ಯೋದಯದಲ್ಲಿ ನಮ್ಮನ್ನು ಪಾಪದಿಂದಲೂ ನಿಂದೆಯಿಂದಲೂ ಪಾರುಮಾಡಿ. ಮಿತ್ರ, ವರುಣ, ಅದಿತಿ, ಸಿಂಧು, ಭೂಮಿ, ದ್ಯುಲೋಕ ಇವರೆಲ್ಲರೂ ಇದನ್ನು ನಮಗೆ ಕರುಣಿಸಲಿ.',
          },
        },
        {
          text: 'सविता पश्चातात्सविता पुरस्तात्सवितोत्तरात्तात्सविताधरात्तात् ।\nसविता नः सुवतु सर्वतातिं सविता नो रासतां दीर्घमायुः ॥',
          meaning: {
            en: 'Savitri behind us and Savitri before us, Savitri above and Savitri below: may Savitri bring us wholeness of every kind, may Savitri grant us long life.',
            kn: 'ಹಿಂದೆಯೂ ಸವಿತೃ, ಮುಂದೆಯೂ ಸವಿತೃ, ಮೇಲೆಯೂ ಸವಿತೃ, ಕೆಳಗೆಯೂ ಸವಿತೃ; ಸವಿತೃದೇವನು ನಮಗೆ ಎಲ್ಲ ಬಗೆಯ ಪೂರ್ಣತೆಯನ್ನು ಕೊಡಲಿ, ಸವಿತೃದೇವನು ನಮಗೆ ದೀರ್ಘಾಯುಸ್ಸನ್ನು ಕೊಡಲಿ.',
          },
        },
      ],
    },
    {
      title: 'गोत्राभिवादनम्',
      titleEn: 'Abhivadana (formal self-introduction)',
      note: 'Madhva midday: after the upasthana, still standing, recite the peace prayer and blessing and say the abhivadana — holding the right ear with the left hand and the left ear with the right, giving your pravara, gotra, Veda, sutra, shakha and name — and bow touching the ground. Then do achamana and sit for the japa (Uttaradi Matha, Gadag and Vijayapura manuals).',
      noteKn: 'ಮಾಧ್ವರ ಮಧ್ಯಾಹ್ನ: ಉಪಸ್ಥಾನದ ನಂತರ ನಿಂತಲ್ಲೇ ಶಾಂತಿಮಂತ್ರ, ಆಶೀರ್ವಾದ ವಾಕ್ಯಗಳನ್ನು ಹೇಳಿ, ಎಡಗೈಯಿಂದ ಬಲ ಕಿವಿಯನ್ನೂ ಬಲಗೈಯಿಂದ ಎಡ ಕಿವಿಯನ್ನೂ ಹಿಡಿದು ಪ್ರವರ, ಗೋತ್ರ, ವೇದ, ಸೂತ್ರ, ಶಾಖೆ, ಹೆಸರುಗಳೊಡನೆ ಅಭಿವಾದನ ಮಾಡಿ ನೆಲವನ್ನು ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಿ. ನಂತರ ಆಚಮನ ಮಾಡಿ ಜಪಕ್ಕೆ ಕುಳಿತುಕೊಳ್ಳಿ (ಉತ್ತರಾದಿಮಠ, ಗದಗ, ವಿಜಾಪುರದ ಪುಸ್ತಕಗಳು).',
      when: { tradition: ['madhva'], time: ['midday'] },
      verses: [
        {
          text: 'ॐ भद्रं नो अपि वातय मनः ।\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'Inspire our minds towards what is good. Om, peace, peace, peace.',
            kn: 'ನಮ್ಮ ಮನಸ್ಸನ್ನು ಶುಭದ ಕಡೆಗೆ ಪ್ರೇರೇಪಿಸು. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
        {
          text: 'सर्वारिष्टशान्तिरस्तु । समस्तमङ्गलावाप्तिरस्तु ।\nचतुःसागरपर्यन्तं गोब्राह्मणेभ्यः शुभं भवतु ॥',
          meaning: {
            en: 'May all misfortunes be stilled; may every blessing be attained. May there be good to cows and Brahmanas as far as the four oceans.',
            kn: 'ಎಲ್ಲ ಅರಿಷ್ಟಗಳೂ ಶಾಂತವಾಗಲಿ; ಸಮಸ್ತ ಮಂಗಳಗಳೂ ಲಭಿಸಲಿ. ನಾಲ್ಕು ಸಮುದ್ರಗಳವರೆಗಿನ ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಶುಭವಾಗಲಿ.',
          },
        },
        {
          text: 'अमुकप्रवरान्वित अमुकगोत्रोत्पन्नः ऋग्वेदस्य आश्वलायनसूत्रः\nशाकल्यशाखाध्यायी अमुकशर्मा अहं भो अभिवादये ॥',
          meaning: {
            en: 'I, so-and-so Sharma, born in such-and-such gotra with such-and-such pravara, following the Ashvalayana sutra of the Rigveda and studying the Shakala shakha, offer my salutation.',
            kn: 'ಇಂತಹ ಪ್ರವರದಿಂದ ಕೂಡಿದ ಇಂತಹ ಗೋತ್ರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಋಗ್ವೇದದ ಆಶ್ವಲಾಯನ ಸೂತ್ರವನ್ನು ಅನುಸರಿಸುವ, ಶಾಕಲ ಶಾಖೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಇಂತಹ ಹೆಸರಿನ ಶರ್ಮನಾದ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'केशवादितर्पणम्',
      titleEn: 'Keshavadi tarpana (Madhva)',
      note: 'Morning only: after the arghyas, sit down and offer tarpana. Take water from the arghya vessel in the uddharane with the left hand, pour it onto the fingers of the right hand and let it run off the fingertips (deva-tirtha) into the plate, once for each name. In the bright fortnight (shukla paksha) use the twelve names from Keshava to Damodara; in the dark fortnight (krishna paksha) the twelve from Sankarshana to Sri Krishna. Then offer to the nine planets. On Ekadashi offer only to the twelve forms of the Lord, not to the planets (Uttaradi Matha manual). Afterwards do achamana and pranayama. There is no tarpana at midday or in the evening.',
      noteKn: 'ಬೆಳಿಗ್ಗೆ ಮಾತ್ರ: ಅರ್ಘ್ಯಗಳ ನಂತರ ಕುಳಿತು ತರ್ಪಣ ಕೊಡಿ. ಎಡಗೈಯಲ್ಲಿ ಉದ್ಧರಣೆಯಿಂದ ಅರ್ಘ್ಯಪಾತ್ರೆಯ ನೀರು ತೆಗೆದು ಬಲಗೈ ಬೆರಳುಗಳ ಮೇಲೆ ಸುರಿದು, ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಬೆರಳ ತುದಿಯಿಂದ (ದೇವತೀರ್ಥ) ತಟ್ಟೆಗೆ ಬಿಡಿ. ಶುಕ್ಲಪಕ್ಷದಲ್ಲಿ ಕೇಶವನಿಂದ ದಾಮೋದರನವರೆಗಿನ ಹನ್ನೆರಡು ನಾಮಗಳು; ಕೃಷ್ಣಪಕ್ಷದಲ್ಲಿ ಸಂಕರ್ಷಣನಿಂದ ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಹನ್ನೆರಡು. ನಂತರ ನವಗ್ರಹ ತರ್ಪಣ. ಏಕಾದಶಿಯಂದು ಕೇಶವಾದಿ ತರ್ಪಣ ಮಾತ್ರ, ನವಗ್ರಹ ತರ್ಪಣ ಕೊಡಬಾರದು (ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕ). ನಂತರ ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ. ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಾಯಂಕಾಲ ತರ್ಪಣವಿಲ್ಲ.',
      when: { tradition: ['madhva'], time: ['morning'] },
      verses: [
        {
          text: 'केशवं तर्पयामि । नारायणं तर्पयामि । माधवं तर्पयामि ।\nगोविन्दं तर्पयामि । विष्णुं तर्पयामि । मधुसूदनं तर्पयामि ।\nत्रिविक्रमं तर्पयामि । वामनं तर्पयामि । श्रीधरं तर्पयामि ।\nहृषीकेशं तर्पयामि । पद्मनाभं तर्पयामि । दामोदरं तर्पयामि ॥',
          meaning: {
            en: 'Bright fortnight: I offer water to please the Lord as Keshava, Narayana, Madhava, Govinda, Vishnu, Madhusudana, Trivikrama, Vamana, Shridhara, Hrishikesha, Padmanabha and Damodara.',
            kn: 'ಶುಕ್ಲಪಕ್ಷ: ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ, ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ, ತ್ರಿವಿಕ್ರಮ, ವಾಮನ, ಶ್ರೀಧರ, ಹೃಷೀಕೇಶ, ಪದ್ಮನಾಭ, ದಾಮೋದರ ರೂಪಗಳ ಭಗವಂತನನ್ನು ಜಲತರ್ಪಣದಿಂದ ಸಂತೋಷಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'सङ्कर्षणं तर्पयामि । वासुदेवं तर्पयामि । प्रद्युम्नं तर्पयामि ।\nअनिरुद्धं तर्पयामि । पुरुषोत्तमं तर्पयामि । अधोक्षजं तर्पयामि ।\nनारसिंहं तर्पयामि । अच्युतं तर्पयामि । जनार्दनं तर्पयामि ।\nउपेन्द्रं तर्पयामि । हरिं तर्पयामि । श्रीकृष्णं तर्पयामि ॥',
          meaning: {
            en: 'Dark fortnight: I offer water to please the Lord as Sankarshana, Vasudeva, Pradyumna, Aniruddha, Purushottama, Adhokshaja, Narasimha, Achyuta, Janardana, Upendra, Hari and Sri Krishna.',
            kn: 'ಕೃಷ್ಣಪಕ್ಷ: ಸಂಕರ್ಷಣ, ವಾಸುದೇವ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧ, ಪುರುಷೋತ್ತಮ, ಅಧೋಕ್ಷಜ, ನಾರಸಿಂಹ, ಅಚ್ಯುತ, ಜನಾರ್ದನ, ಉಪೇಂದ್ರ, ಹರಿ, ಶ್ರೀಕೃಷ್ಣ ರೂಪಗಳ ಭಗವಂತನನ್ನು ಜಲತರ್ಪಣದಿಂದ ಸಂತೋಷಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'सूर्यं तर्पयामि । चन्द्रं तर्पयामि । अङ्गारकं तर्पयामि ।\nबुधं तर्पयामि । बृहस्पतिं तर्पयामि । शुक्रं तर्पयामि ।\nशनैश्चरं तर्पयामि । राहुं तर्पयामि । केतुं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water the nine planets: the Sun, the Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu. (Not on Ekadashi.)',
            kn: 'ಸೂರ್ಯ, ಚಂದ್ರ, ಅಂಗಾರಕ, ಬುಧ, ಬೃಹಸ್ಪತಿ, ಶುಕ್ರ, ಶನೈಶ್ಚರ, ರಾಹು, ಕೇತು — ನವಗ್ರಹಗಳನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ. (ಏಕಾದಶಿಯಂದು ಬೇಡ.)',
          },
        },
      ],
    },
    {
      title: 'सन्ध्याङ्गतर्पणम्',
      titleEn: 'Sandhyanga tarpana (Smarta, where practised)',
      note: 'After the arghyas, sit down and pour water from the right hand into the plate once with each name. The Karnataka Rigvedi Smarta manuals (Somayaji, Balkur) give the first set — the three worlds, Gayatri, Savitri, Sarasvati, Narayana and Shiva — at every sandhya. Andhra manuals instead give the tarpana to Sandhya and her forms for the time of day (the lines that follow). Then do achamana.',
      noteKn: 'ಅರ್ಘ್ಯಗಳ ನಂತರ ಕುಳಿತು, ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಬಲಗೈಯಿಂದ ಒಂದೊಂದು ಬಾರಿ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ಕರ್ನಾಟಕದ ಋಗ್ವೇದಿ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು (ಸೋಮಯಾಜಿ, ಬಳ್ಕೂರು) ಮೊದಲ ಗುಂಪನ್ನು — ಮೂರು ಲೋಕಗಳು, ಗಾಯತ್ರಿ, ಸಾವಿತ್ರಿ, ಸರಸ್ವತಿ, ನಾರಾಯಣ, ಶಿವ — ಎಲ್ಲ ಸಂಧ್ಯೆಗಳಲ್ಲೂ ಕೊಡುತ್ತವೆ. ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು ಅದರ ಬದಲು ಆಯಾ ಕಾಲದ ಸಂಧ್ಯಾದೇವಿ ಮತ್ತು ಅವಳ ರೂಪಗಳಿಗೆ ತರ್ಪಣ ಕೊಡುತ್ತವೆ (ಮುಂದಿನ ಸಾಲುಗಳು). ನಂತರ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ भूस्तर्पयामि । ॐ भुवस्तर्पयामि । ॐ स्वस्तर्पयामि ।\nॐ भूर्भुवःस्वस्तर्पयामि । गायत्रीं तर्पयामि ।\nसावित्रीं तर्पयामि । सरस्वतीं तर्पयामि ।\nॐ नमो नारायणाय नारायणं तर्पयामि ।\nॐ नमः शिवाय शिवं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water Bhuh, Bhuvah and Svah, and all three together; I satisfy Gayatri, Savitri and Sarasvati; with “Om namo Narayanaya” I satisfy Narayana, and with “Om namah Shivaya” I satisfy Shiva.',
            kn: 'ಭೂಃ, ಭುವಃ, ಸ್ವಃ ಎಂಬ ಲೋಕಗಳನ್ನೂ ಮೂರನ್ನೂ ಒಟ್ಟಾಗಿಯೂ ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ; ಗಾಯತ್ರಿ, ಸಾವಿತ್ರಿ, ಸರಸ್ವತಿಯರನ್ನು ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ; “ಓಂ ನಮೋ ನಾರಾಯಣಾಯ” ಎಂದು ನಾರಾಯಣನನ್ನೂ, “ಓಂ ನಮಃ ಶಿವಾಯ” ಎಂದು ಶಿವನನ್ನೂ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'सन्ध्यां तर्पयामि । गायत्रीं तर्पयामि ।\nब्राह्मीं तर्पयामि । निमृजीं तर्पयामि ॥',
          meaning: {
            en: 'I offer water to Sandhya, to Gayatri, to Brahmi and to Nimriji, the purifying one — the deity of the morning sandhya.',
            kn: 'ಸಂಧ್ಯಾ, ಗಾಯತ್ರೀ, ಬ್ರಾಹ್ಮೀ, ಶುದ್ಧಿಗೊಳಿಸುವ ನಿಮೃಜೀ — ಪ್ರಾತಃಸಂಧ್ಯೆಯ ದೇವತೆಗೆ ತರ್ಪಣ ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'सन्ध्यां तर्पयामि । सावित्रीं तर्पयामि ।\nरौद्रीं तर्पयामि । निमृजीं तर्पयामि ॥',
          meaning: {
            en: 'I offer water to Sandhya, to Savitri, to Raudri and to Nimriji, the purifying one — the deity of the midday sandhya.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ರೌದ್ರೀ, ಶುದ್ಧಿಗೊಳಿಸುವ ನಿಮೃಜೀ — ಮಧ್ಯಾಹ್ನದ ಸಂಧ್ಯಾದೇವತೆಗೆ ತರ್ಪಣ ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'सन्ध्यां तर्पयामि । सरस्वतीं तर्पयामि ।\nवैष्णवीं तर्पयामि । निमृजीं तर्पयामि ॥',
          meaning: {
            en: 'I offer water to Sandhya, to Sarasvati, to Vaishnavi and to Nimriji, the purifying one — the deity of the evening sandhya.',
            kn: 'ಸಂಧ್ಯಾ, ಸರಸ್ವತೀ, ವೈಷ್ಣವೀ, ಶುದ್ಧಿಗೊಳಿಸುವ ನಿಮೃಜೀ — ಸಾಯಂಸಂಧ್ಯೆಯ ದೇವತೆಗೆ ತರ್ಪಣ ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'भूतोच्चाटनम् आसनशुद्धिश्च',
      titleEn: 'Bhutochchatana and asana-shuddhi (before japa)',
      note: 'Before sitting for japa, say the viniyoga and अपसर्पन्तु…, snapping the fingers towards your left to send away obstructing beings. Then touch the seat with the right hand, say the viniyoga and pray to the Earth with पृथ्वि त्वया… and मां च पूतं…, think of the seat as resting on Ananta and bow to it, and sit down firmly — facing east in the morning and at midday, west in the evening.',
      noteKn: 'ಜಪಕ್ಕೆ ಕುಳಿತುಕೊಳ್ಳುವ ಮೊದಲು ವಿನಿಯೋಗ ಮತ್ತು “ಅಪಸರ್ಪಂತು…” ಹೇಳುತ್ತಾ ಎಡಭಾಗದ ಕಡೆಗೆ ಚಿಟಿಕೆ ಹೊಡೆದು ವಿಘ್ನಕಾರಿ ಭೂತಗಳನ್ನು ಓಡಿಸಿ. ನಂತರ ಬಲಗೈಯಿಂದ ಆಸನವನ್ನು ಮುಟ್ಟಿ, ವಿನಿಯೋಗ ಹೇಳಿ “ಪೃಥ್ವಿ ತ್ವಯಾ…”, “ಮಾಂ ಚ ಪೂತಂ…” ಎಂದು ಭೂದೇವಿಯನ್ನು ಪ್ರಾರ್ಥಿಸಿ; ಆಸನವು ಅನಂತನ ಮೇಲಿದೆಯೆಂದು ಭಾವಿಸಿ ನಮಸ್ಕರಿಸಿ, ಸ್ಥಿರವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಿ — ಬೆಳಿಗ್ಗೆ ಮತ್ತು ಮಧ್ಯಾಹ್ನ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ, ಸಾಯಂಕಾಲ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अपसर्पन्त्वित्यस्य मन्त्रस्य वामदेव ऋषिः । भूतानि देवता ।\nअनुष्टुप् छन्दः । भूतोच्चाटने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra beginning apasarpantu the seer is Vamadeva, the deities are the spirits (bhutas), the metre anushtubh; it is used to send away obstructing beings.',
            kn: '“ಅಪಸರ್ಪಂತು” ಮಂತ್ರಕ್ಕೆ ವಾಮದೇವ ಋಷಿ, ಭೂತಗಳು ದೇವತೆ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು; ವಿಘ್ನಕಾರಿ ಭೂತಗಳನ್ನು ಓಡಿಸಲು ಇದರ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'अपसर्पन्तु ते भूता ये भूता भुवि संस्थिताः ।\nये भूता विघ्नकर्तारस्ते नश्यन्तु शिवाज्ञया ॥\nअपक्रामन्तु ये भूताः क्रूराश्चैव तु राक्षसाः ।\nये चात्र निवसन्त्येव देवता भुवि सन्ततम् ।\nतेषामप्यविरोधेन ब्रह्मकर्म समारभे ॥',
          meaning: {
            en: 'May the beings that dwell on the earth move away; may those that cause obstacles perish at the auspicious command. Let the beings and cruel rakshasas depart. Without offending the deities who always dwell here, I begin this sacred rite.',
            kn: 'ಭೂಮಿಯಲ್ಲಿರುವ ಭೂತಗಳು ದೂರ ಸರಿಯಲಿ; ವಿಘ್ನವನ್ನುಂಟುಮಾಡುವವು ಮಂಗಳಕರ ಆಜ್ಞೆಯಿಂದ ನಾಶವಾಗಲಿ. ಭೂತಗಳೂ ಕ್ರೂರ ರಾಕ್ಷಸರೂ ತೊಲಗಲಿ. ಇಲ್ಲಿ ಸದಾ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ವಿರೋಧವಾಗದಂತೆ ಈ ಬ್ರಹ್ಮಕರ್ಮವನ್ನು ಆರಂಭಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'पृथ्वीति मन्त्रस्य मेरुपृष्ठ ऋषिः । कूर्मो देवता ।\nसुतलं छन्दः । आसने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “prithvi”: the seer is Meruprishtha, the deity is Kurma (the Lord as the tortoise), the metre is Sutala; it is used for the seat.',
            kn: '“ಪೃಥ್ವಿ” ಮಂತ್ರಕ್ಕೆ ಮೇರುಪೃಷ್ಠ ಋಷಿ, ಕೂರ್ಮ (ಕೂರ್ಮರೂಪಿ ಭಗವಂತ) ದೇವತೆ, ಸುತಲ ಛಂದಸ್ಸು; ಆಸನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'पृथ्वि त्वया धृता लोका देवि त्वं विष्णुना धृता ।\nत्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥',
          meaning: {
            en: 'O Earth, the worlds are held up by you, and you, O Goddess, are held up by Vishnu. Hold me up too, O Goddess, and make this seat pure.',
            kn: 'ಓ ಭೂದೇವಿ, ಲೋಕಗಳನ್ನು ನೀನು ಧರಿಸಿರುವೆ; ನಿನ್ನನ್ನು ಶ್ರೀವಿಷ್ಣುವು ಧರಿಸಿದ್ದಾನೆ. ಓ ದೇವಿ, ನನ್ನನ್ನೂ ಧರಿಸು, ಈ ಆಸನವನ್ನು ಪವಿತ್ರಗೊಳಿಸು.',
          },
        },
        {
          text: 'मां च पूतं कुरु धरे नतोऽस्मि त्वां सुरेश्वरि ।\nआसने सोममण्डले कूर्मस्कन्धे उपविष्टोऽस्मि ॥',
          meaning: {
            en: 'Make me pure as well, O Earth; I bow to you, queen of the gods. I am seated on this seat as on the orb of the Moon, on the shoulders of Kurma, the divine Tortoise.',
            kn: 'ಓ ಭೂದೇವಿ, ನನ್ನನ್ನೂ ಪವಿತ್ರನನ್ನಾಗಿ ಮಾಡು; ದೇವತೆಗಳ ಒಡತಿಯೇ, ನಿನಗೆ ನಮಿಸುತ್ತೇನೆ. ಚಂದ್ರಮಂಡಲದಂತಿರುವ, ಕೂರ್ಮದೇವರ ಹೆಗಲ ಮೇಲಿರುವ ಈ ಆಸನದಲ್ಲಿ ಕುಳಿತಿದ್ದೇನೆ.',
          },
        },
        {
          text: 'अनन्तासनाय नमः ॥',
          meaning: {
            en: 'Salutations to the seat that is Ananta, the divine serpent who bears the earth.',
            kn: 'ಭೂಮಿಯನ್ನು ಹೊತ್ತಿರುವ ಅನಂತನೆಂಬ ಆಸನಕ್ಕೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'भूतोच्चाटनम् आसनशुद्धिश्च',
      titleEn: 'Bhutochchatana and asana-shuddhi (before japa)',
      note: 'Before sitting for japa, recite अपसर्पन्तु… to send away obstructing beings, sprinkling a little water around you (some also throw a few grains of akshata). Then sprinkle the seat, touch it with the right hand, recite the prayer to the Earth, bow to the seat (अनन्तासनाय नमः, कूर्मासनाय नमः) and sit down firmly, facing east in the morning and at midday, west in the evening.',
      noteKn: 'ಜಪಕ್ಕೆ ಕುಳಿತುಕೊಳ್ಳುವ ಮೊದಲು, ವಿಘ್ನಕಾರಕ ಭೂತಗಳನ್ನು ಓಡಿಸಲು “ಅಪಸರ್ಪಂತು” ಹೇಳುತ್ತಾ ಸುತ್ತಲೂ ಸ್ವಲ್ಪ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ (ಕೆಲವರು ಅಕ್ಷತೆಯನ್ನೂ ಎಸೆಯುತ್ತಾರೆ). ನಂತರ ಆಸನಕ್ಕೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ಬಲಗೈಯಿಂದ ಅದನ್ನು ಮುಟ್ಟಿ ಭೂದೇವಿಯ ಪ್ರಾರ್ಥನೆ ಹೇಳಿ, “ಅನಂತಾಸನಾಯ ನಮಃ, ಕೂರ್ಮಾಸನಾಯ ನಮಃ” ಎಂದು ಆಸನಕ್ಕೆ ನಮಸ್ಕರಿಸಿ, ಬೆಳಗ್ಗೆ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವಕ್ಕೆ, ಸಂಜೆ ಪಶ್ಚಿಮಕ್ಕೆ ಮುಖಮಾಡಿ ಸ್ಥಿರವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अपसर्पन्तु ये भूता ये भूता भुवि संस्थिताः ।\nये भूता विघ्नकर्तारस्ते नश्यन्तु शिवाज्ञया ॥\nअपक्रामन्तु भूतानि पिशाचाः सर्वतो दिशम् ।\nसर्वेषामविरोधेन ब्रह्मकर्म समारभे ॥',
          meaning: {
            en: 'May the beings that dwell on the earth move away; may those that cause obstacles perish by auspicious command. Let the spirits and goblins depart in every direction; without opposing any of them, I begin this sacred rite.',
            kn: 'ಭೂಮಿಯಲ್ಲಿ ನೆಲೆಸಿರುವ ಭೂತಗಳು ದೂರ ಸರಿಯಲಿ; ವಿಘ್ನವನ್ನುಂಟುಮಾಡುವವು ಮಂಗಳಕರವಾದ ಆಜ್ಞೆಯಿಂದ ನಾಶವಾಗಲಿ. ಭೂತಪಿಶಾಚಗಳು ಎಲ್ಲ ದಿಕ್ಕುಗಳಿಗೂ ತೊಲಗಲಿ; ಯಾರಿಗೂ ವಿರೋಧವಿಲ್ಲದಂತೆ ಈ ಬ್ರಹ್ಮಕರ್ಮವನ್ನು ಆರಂಭಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'पृथ्वीति मन्त्रस्य मेरुपृष्ठ ऋषिः । कूर्मो देवता ।\nसुतलं छन्दः । आसने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “prithvi”: the seer is Meruprishtha, the deity is Kurma (the Lord as the tortoise), the metre is Sutala; it is used for the seat.',
            kn: '“ಪೃಥ್ವಿ” ಮಂತ್ರಕ್ಕೆ ಮೇರುಪೃಷ್ಠ ಋಷಿ, ಕೂರ್ಮ (ಕೂರ್ಮರೂಪಿ ಭಗವಂತ) ದೇವತೆ, ಸುತಲ ಛಂದಸ್ಸು; ಆಸನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'पृथ्वि त्वया धृता लोका देवि त्वं विष्णुना धृता ।\nत्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥',
          meaning: {
            en: 'O Earth, the worlds are held up by you, and you, O Goddess, are held up by Vishnu. Hold me up too, O Goddess, and make this seat pure.',
            kn: 'ಓ ಭೂದೇವಿ, ಲೋಕಗಳನ್ನು ನೀನು ಧರಿಸಿರುವೆ; ನಿನ್ನನ್ನು ಶ್ರೀವಿಷ್ಣುವು ಧರಿಸಿದ್ದಾನೆ. ಓ ದೇವಿ, ನನ್ನನ್ನೂ ಧರಿಸು, ಈ ಆಸನವನ್ನು ಪವಿತ್ರಗೊಳಿಸು.',
          },
        },
        {
          text: 'अनन्तासनाय नमः । कूर्मासनाय नमः ॥',
          meaning: {
            en: 'Salutations to the seat that is Ananta; salutations to the seat that is Kurma.',
            kn: 'ಅನಂತನೆಂಬ ಆಸನಕ್ಕೆ ನಮಸ್ಕಾರ; ಕೂರ್ಮನೆಂಬ ಆಸನಕ್ಕೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'गायत्र्यावाहनम्',
      titleEn: 'Gayatri avahana (invocation)',
      note: 'Seated, with folded hands, invoke Gayatri. Say the pranava viniyoga, then आयातु… and ओजोऽसि…, and the avahana names. With the last passage (rishi, chandas, devata and the limbs of Gayatri) touch, as you name them: the mouth (Agni), the head (Brahma), the heart (Vishnu), the tuft of hair (Rudra), and the feet / ground (Prithivi).',
      noteKn: 'ಕುಳಿತು ಕೈಮುಗಿದು ಗಾಯತ್ರಿಯನ್ನು ಆಹ್ವಾನಿಸಿ. ಪ್ರಣವದ ವಿನಿಯೋಗ, ನಂತರ “ಆಯಾತು”, “ಓಜೋಽಸಿ” ಮತ್ತು ಆವಾಹನ ನಾಮಗಳನ್ನು ಹೇಳಿ. ಕೊನೆಯ ಭಾಗದಲ್ಲಿ (ಋಷಿ, ಛಂದಸ್ಸು, ದೇವತೆ ಮತ್ತು ಗಾಯತ್ರಿಯ ಅಂಗಗಳು) ಹೆಸರು ಹೇಳುವಾಗ ಕ್ರಮವಾಗಿ ಬಾಯಿ (ಅಗ್ನಿ), ತಲೆ (ಬ್ರಹ್ಮ), ಹೃದಯ (ವಿಷ್ಣು), ಶಿಖೆ (ರುದ್ರ), ಪಾದ / ನೆಲ (ಪೃಥಿವೀ) ಮುಟ್ಟಿಕೊಳ್ಳಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ओमित्येकाक्षरं ब्रह्म । अग्निर्देवता । ब्रह्म इत्यार्षम् ।\nगायत्रं छन्दम् । परमात्मं सरूपम् । सायुज्यं विनियोगम् ॥',
          meaning: {
            en: 'Om, the single syllable, is Brahman; its deity is Agni, its seer is Brahman, its metre Gayatri; its form is the Supreme Self, and it is used for union with him.',
            kn: 'ಓಂ ಎಂಬ ಏಕಾಕ್ಷರವೇ ಬ್ರಹ್ಮ; ಅದಕ್ಕೆ ಅಗ್ನಿ ದೇವತೆ, ಬ್ರಹ್ಮ ಋಷಿ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಪರಮಾತ್ಮನೇ ಅದರ ಸ್ವರೂಪ; ಅವನ ಸಾನ್ನಿಧ್ಯಕ್ಕಾಗಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'आयातु वरदा देवी अक्षरं ब्रह्मसम्मितम् ।\nगायत्री छन्दसां मातेदं ब्रह्म जुषस्व मे ॥\nयदह्नात्कुरुते पापं तदह्नात्प्रतिमुच्यते ।\nयद्रात्रियात्कुरुते पापं तद्रात्रियात्प्रतिमुच्यते ।\nसर्ववर्णे महादेवि सन्ध्याविद्ये सरस्वति ॥',
          meaning: {
            en: 'May the boon-giving Goddess come, imperishable, equal to the Veda. O Gayatri, mother of the metres, accept this prayer of mine. The sin one commits by day is released that very day, the sin of the night that very night. O great Goddess of all syllables, knowledge of the sandhya, Sarasvati!',
            kn: 'ವರವನ್ನು ಕೊಡುವ, ಅಕ್ಷರಸ್ವರೂಪಳೂ ವೇದಕ್ಕೆ ಸಮಾನಳೂ ಆದ ದೇವಿಯು ಬರಲಿ. ಛಂದಸ್ಸುಗಳ ತಾಯಿಯಾದ ಓ ಗಾಯತ್ರೀ, ನನ್ನ ಈ ಪ್ರಾರ್ಥನೆಯನ್ನು ಸ್ವೀಕರಿಸು. ಹಗಲಿನಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಅಂದೇ, ರಾತ್ರಿಯಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಆ ರಾತ್ರಿಯೇ ಪರಿಹಾರವಾಗುತ್ತದೆ. ಎಲ್ಲ ಅಕ್ಷರಗಳ ಸ್ವರೂಪಳಾದ ಮಹಾದೇವಿ, ಸಂಧ್ಯಾವಿದ್ಯೆಯೇ, ಸರಸ್ವತೀ!',
          },
        },
        {
          text: 'ओजोऽसि सहोऽसि बलमसि भ्राजोऽसि ।\nदेवानां धामनामासि विश्वमसि विश्वायुः ।\nसर्वमसि सर्वायुरभिभूरोम् ॥',
          meaning: {
            en: 'You are vigour, you are endurance, you are strength, you are radiance; you are the abode and the name of the gods; you are the universe and the life of the universe; you are all and the life of all; you are the conqueror — Om.',
            kn: 'ನೀನು ಓಜಸ್ಸು, ಸಹನೆ, ಬಲ, ತೇಜಸ್ಸು; ದೇವತೆಗಳ ನೆಲೆಯೂ ನಾಮವೂ ನೀನೇ; ವಿಶ್ವವೂ ವಿಶ್ವದ ಆಯುಸ್ಸೂ ನೀನೇ; ಎಲ್ಲವೂ ಎಲ್ಲರ ಜೀವವೂ ನೀನೇ; ಎಲ್ಲವನ್ನೂ ಗೆಲ್ಲುವವನು ನೀನೇ — ಓಂ.',
          },
        },
        {
          text: 'गायत्रीमावाहयामि । सावित्रीमावाहयामि ।\nसरस्वतीमावाहयामि । छन्दर्षीनावाहयामि ।\nश्रियमावाहयामि । बलमावाहयामि ॥',
          meaning: {
            en: 'I invoke Gayatri, Savitri and Sarasvati; I invoke the metres and seers, Sri (Lakshmi) and Bala (strength).',
            kn: 'ಗಾಯತ್ರೀ, ಸಾವಿತ್ರೀ, ಸರಸ್ವತಿಯರನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ; ಛಂದಸ್ಸುಗಳನ್ನೂ ಋಷಿಗಳನ್ನೂ, ಶ್ರೀ (ಲಕ್ಷ್ಮೀ) ಮತ್ತು ಬಲವನ್ನೂ ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या गायत्री छन्दः । विश्वामित्र ऋषिः । सविता देवता ।\nअग्निर्मुखम् । ब्रह्मा शिरः । विष्णुर्हृदयम् । रुद्रः शिखा । पृथिवी योनिः ।\nप्राणापानव्यानोदानसमाना सप्राणा श्वेतवर्णा साङ्ख्यायनसगोत्रा\nगायत्री चतुर्विंशत्यक्षरा त्रिपदा षट्कुक्षिः पञ्चशीर्षोपनयने विनियोगः ॥',
          meaning: {
            en: 'Of the Gayatri the metre is Gayatri, the seer Vishvamitra, the deity Savitri. Agni is her mouth, Brahma her head, Vishnu her heart, Rudra her tuft, the Earth her source. She has the five vital breaths, is white in colour, of the Sankhyayana gotra, of twenty-four syllables, three feet, six divisions and five heads; she is used at the upanayana (and in daily japa).',
            kn: 'ಗಾಯತ್ರಿಗೆ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ. ಅಗ್ನಿಯೇ ಅವಳ ಮುಖ, ಬ್ರಹ್ಮನೇ ತಲೆ, ವಿಷ್ಣುವೇ ಹೃದಯ, ರುದ್ರನೇ ಶಿಖೆ, ಪೃಥಿವಿಯೇ ಉತ್ಪತ್ತಿಸ್ಥಾನ. ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಉದಾನ, ಸಮಾನಗಳೆಂಬ ಐದು ಪ್ರಾಣಗಳಿಂದ ಕೂಡಿದವಳು, ಬಿಳಿಯ ಬಣ್ಣದವಳು, ಸಾಂಖ್ಯಾಯನ ಗೋತ್ರದವಳು, ಇಪ್ಪತ್ತನಾಲ್ಕು ಅಕ್ಷರ, ಮೂರು ಪಾದ, ಆರು ಕುಕ್ಷಿ, ಐದು ಶಿರಸ್ಸುಗಳುಳ್ಳವಳು; ಉಪನಯನದಲ್ಲಿ (ಮತ್ತು ನಿತ್ಯಜಪದಲ್ಲಿ) ವಿನಿಯೋಗ.',
          },
        },
      ],
    },
    {
      title: 'करन्यासः अङ्गन्यासश्च',
      titleEn: 'Kara-nyasa and anga-nyasa (Madhva)',
      note: 'First do achamana and three pranayamas. Kara-nyasa: with each line touch the named finger with the thumb (and the thumb with the index finger), and at the last line rub the palms and backs of the hands together. Anga-nyasa: touch the heart, the top of the head and the tuft with the right hand; cross the arms to touch both shoulders (kavacha); touch both eyes; for astraya phat circle the right hand round the head and clap; with the last line snap the fingers around you in the ten directions (digbandha).',
      noteKn: 'ಮೊದಲು ಆಚಮನ ಮತ್ತು ಮೂರು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ. ಕರನ್ಯಾಸ: ಒಂದೊಂದು ವಾಕ್ಯಕ್ಕೂ ಹೆಸರಿಸಿದ ಬೆರಳನ್ನು ಹೆಬ್ಬೆರಳಿನಿಂದ (ಹೆಬ್ಬೆರಳನ್ನು ತೋರುಬೆರಳಿನಿಂದ) ಮುಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯಕ್ಕೆ ಅಂಗೈ ಮತ್ತು ಕೈಹಿಂಭಾಗಗಳನ್ನು ಉಜ್ಜಿ. ಅಂಗನ್ಯಾಸ: ಬಲಗೈಯಿಂದ ಹೃದಯ, ನೆತ್ತಿ, ಶಿಖೆಯನ್ನು ಮುಟ್ಟಿ; ಕೈಗಳನ್ನು ಅಡ್ಡವಾಗಿಸಿ ಎರಡೂ ಭುಜ ಮುಟ್ಟಿ (ಕವಚ); ಎರಡೂ ಕಣ್ಣು ಮುಟ್ಟಿ; “ಅಸ್ತ್ರಾಯ ಫಟ್” ಎನ್ನುವಾಗ ಬಲಗೈಯನ್ನು ತಲೆಯ ಸುತ್ತ ತಿರುಗಿಸಿ ಚಪ್ಪಾಳೆ ತಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯದಿಂದ ಹತ್ತು ದಿಕ್ಕುಗಳಲ್ಲೂ ಚಿಟಿಕೆ ಹೊಡೆಯಿರಿ (ದಿಗ್ಬಂಧ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'प्राणानायम्य ॥',
          meaning: {
            en: 'Do pranayama, as at the beginning (Madhvas: three times).',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ಮಾಧ್ವರು ಮೂರು ಬಾರಿ).',
          },
        },
        {
          text: 'तत्सवितुः अङ्गुष्ठाभ्यां नमः ।\nवरेण्यं तर्जनीभ्यां नमः ।\nभर्गो देवस्य मध्यमाभ्यां नमः ।\nधीमहि अनामिकाभ्यां नमः ।\nधियो यो नः कनिष्ठिकाभ्यां नमः ।\nप्रचोदयात् करतलकरपृष्ठाभ्यां नमः ॥',
          meaning: {
            en: 'The six parts of the Gayatri are placed, with salutation, on the thumbs, index fingers, middle fingers, ring fingers, little fingers, and the palms and backs of the hands.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು ನಮಸ್ಕಾರಪೂರ್ವಕವಾಗಿ ಹೆಬ್ಬೆರಳು, ತೋರುಬೆರಳು, ನಡುಬೆರಳು, ಉಂಗುರದ ಬೆರಳು, ಕಿರುಬೆರಳು ಮತ್ತು ಅಂಗೈ–ಕೈಹಿಂಭಾಗಗಳಲ್ಲಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'तत्सवितुः हृदयाय नमः ।\nवरेण्यं शिरसे स्वाहा ।\nभर्गो देवस्य शिखायै वषट् ।\nधीमहि कवचाय हुम् ।\nधियो यो नः नेत्राभ्यां वौषट् ।\nप्रचोदयात् अस्त्राय फट् ।\nभूर्भुवः स्वरोमिति दिग्बन्धः ॥',
          meaning: {
            en: 'The six parts of the Gayatri are placed on the heart, the head, the tuft, the shoulders as armour, the eyes, and as a weapon around oneself; with “bhur bhuvah svar om” the directions are sealed.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು ಹೃದಯ, ತಲೆ, ಶಿಖೆ, ಕವಚವಾಗಿ ಭುಜಗಳು, ಕಣ್ಣುಗಳು ಮತ್ತು ಸುತ್ತಲೂ ಅಸ್ತ್ರವಾಗಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ; “ಭೂರ್ಭುವಃ ಸ್ವರೋಂ” ಎಂದು ದಿಕ್ಕುಗಳನ್ನು ಬಂಧಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'गायत्र्याह्वानम्',
      titleEn: 'Gayatri ahvana, viniyoga and dhyana',
      note: 'With folded hands invite the Lord, as Gayatri, into the heart for the japa with आगच्छ वरदे देवि…. Say the viniyoga, touching the head (seer), mouth (metre) and heart (deity). Then meditate on Sri Narayana seated on a lotus in the middle of the solar orb (the Sadachara-smriti explains that Gayatri in the morning, Savitri at midday and Sarasvati in the evening are all names of Narayana), recite the passage रक्तो वर्णः… describing the Gayatri, and make the resolve for japa, letting a ladle of water fall into the plate. (The Gadag and Vijayapura manuals read पृथिवी योनिः in that passage and change the colour with the time: white at midday, dark in the evening.)',
      noteKn: 'ಕೈಮುಗಿದು “ಆಗಚ್ಛ ವರದೇ ದೇವಿ…” ಎಂದು ಗಾಯತ್ರೀನಾಮಕ ಭಗವಂತನನ್ನು ಜಪಕ್ಕಾಗಿ ಹೃದಯಕ್ಕೆ ಆಹ್ವಾನಿಸಿ. ತಲೆ (ಋಷಿ), ಬಾಯಿ (ಛಂದಸ್ಸು), ಹೃದಯ (ದೇವತೆ) ಮುಟ್ಟುತ್ತಾ ವಿನಿಯೋಗ ಹೇಳಿ. ನಂತರ ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿ ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತ ಶ್ರೀನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸಿ (ಬೆಳಗಿನ ಗಾಯತ್ರಿ, ಮಧ್ಯಾಹ್ನದ ಸಾವಿತ್ರಿ, ಸಂಜೆಯ ಸರಸ್ವತಿ — ಎಲ್ಲವೂ ನಾರಾಯಣನ ನಾಮಗಳೇ ಎಂದು ಸದಾಚಾರಸ್ಮೃತಿ ವಿವರಿಸುತ್ತದೆ), ಗಾಯತ್ರಿಯನ್ನು ವರ್ಣಿಸುವ “ರಕ್ತೋ ವರ್ಣಃ…” ಎಂಬ ವಾಕ್ಯ ಹೇಳಿ, ಜಪಸಂಕಲ್ಪ ಮಾಡಿ ಒಂದು ಉದ್ಧರಣೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. (ಗದಗ ಮತ್ತು ವಿಜಾಪುರದ ಪುಸ್ತಕಗಳಲ್ಲಿ ಆ ವಾಕ್ಯದಲ್ಲಿ “ಪೃಥಿವೀ ಯೋನಿಃ” ಎಂದಿದೆ; ವರ್ಣ ಕಾಲಕ್ಕೆ ತಕ್ಕಂತೆ ಬದಲಾಗುತ್ತದೆ: ಮಧ್ಯಾಹ್ನ ಶ್ವೇತ, ಸಂಜೆ ಕೃಷ್ಣ.)',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'आगच्छ वरदे देवि जपे मे सन्निधौ भव ।\nगायन्तं त्रायसे यस्माद्गायत्री त्वं ततः स्मृता ॥',
          meaning: {
            en: 'Come, boon-giving Goddess, be present in my japa. Because you protect the one who chants you, you are known as Gayatri.',
            kn: 'ವರವನ್ನು ಕೊಡುವ ಓ ದೇವಿ, ಬಾ, ನನ್ನ ಜಪದಲ್ಲಿ ಸನ್ನಿಹಿತಳಾಗು. ನಿನ್ನನ್ನು ಗಾಯನ ಮಾಡುವವನನ್ನು ರಕ್ಷಿಸುವುದರಿಂದ ನೀನು ಗಾಯತ್ರೀ ಎಂದು ಪ್ರಸಿದ್ಧಳಾಗಿರುವೆ.',
          },
        },
        {
          text: 'प्रणवस्य परब्रह्म ऋषिः । परमात्मा देवता । दैवी गायत्री छन्दः ।\nव्याहृतीनां प्रजापतिरृषिः । अग्निवायुसूर्या देवताः । गायत्र्युष्णिगनुष्टुभश्छन्दांसि ।\nगायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nजपे विनियोगः ॥',
          meaning: {
            en: 'For the pranava the seer is Parabrahman, the deity the Supreme Self, the metre daivi gayatri; for the vyahritis the seer is Prajapati, the deities Agni, Vayu and Surya, the metres Gayatri, Ushnik and Anushtubh; for the Gayatri the seer is Vishvamitra, the deity Savitri (for Madhvas, Sri Lakshminarayana named Savitri), the metre Gayatri; all are used in japa.',
            kn: 'ಪ್ರಣವಕ್ಕೆ ಪರಬ್ರಹ್ಮ ಋಷಿ, ಪರಮಾತ್ಮ ದೇವತೆ, ದೈವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ವ್ಯಾಹೃತಿಗಳಿಗೆ ಪ್ರಜಾಪತಿ ಋಷಿ, ಅಗ್ನಿ–ವಾಯು–ಸೂರ್ಯರು ದೇವತೆಗಳು, ಗಾಯತ್ರೀ–ಉಷ್ಣಿಕ್–ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸುಗಳು; ಗಾಯತ್ರಿಗೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ (ಮಾಧ್ವರಿಗೆ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣ), ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ध्येयः सदा सवितृमण्डलमध्यवर्ती\nनारायणः सरसिजासनसन्निविष्टः ।\nकेयूरवान् मकरकुण्डलवान् किरीटी\nहारी हिरण्मयवपुर्धृतशङ्खचक्रः ॥',
          meaning: {
            en: 'Always to be meditated upon is Narayana in the centre of the sun’s orb, seated on a lotus, wearing armlets, fish-shaped earrings, a crown and necklaces, golden of form, holding the conch and the discus.',
            kn: 'ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿರುವ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ಕೇಯೂರ, ಮಕರಕುಂಡಲ, ಕಿರೀಟ, ಹಾರಗಳನ್ನು ಧರಿಸಿರುವ, ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವ ದೇಹವುಳ್ಳ, ಶಂಖಚಕ್ರಧಾರಿಯಾದ ಶ್ರೀನಾರಾಯಣನನ್ನು ಸದಾ ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          text: 'रक्तो वर्णः । अग्निर्मुखम् । ब्रह्मा शिरः । विष्णुर्हृदयम् । रुद्रो ललाटम् ।\nपृथिवी कुक्षिः । त्रैलोक्यं चरणाः । प्राणापानव्यानोदानसमाना सप्राणा\nश्वेतवर्णा सांख्यायनसगोत्रा गायत्री सावित्री सरस्वती\nचतुर्विंशत्यक्षरा त्रिपदा षट्कुक्षिः पञ्चशीर्षोपनयने विनियोगः ॥',
          meaning: {
            en: 'Her colour is red; Agni is her mouth, Brahma her head, Vishnu her heart, Rudra her forehead, the earth her belly and the three worlds her feet; she is alive with the five vital breaths, white in colour, of the Sankhyayana gotra — Gayatri, Savitri, Sarasvati — of twenty-four syllables, three feet, six bellies and five heads; she is invoked for the upanayana and for japa.',
            kn: 'ಆಕೆಯ ವರ್ಣ ಕೆಂಪು; ಅಗ್ನಿ ಮುಖ, ಬ್ರಹ್ಮ ಶಿರಸ್ಸು, ವಿಷ್ಣು ಹೃದಯ, ರುದ್ರ ಹಣೆ, ಭೂಮಿ ಹೊಟ್ಟೆ, ಮೂರು ಲೋಕಗಳು ಪಾದಗಳು; ಪ್ರಾಣ–ಅಪಾನ–ವ್ಯಾನ–ಉದಾನ–ಸಮಾನಗಳೆಂಬ ಪ್ರಾಣಗಳಿಂದ ಕೂಡಿದವಳು, ಶ್ವೇತವರ್ಣೆ, ಸಾಂಖ್ಯಾಯನ ಗೋತ್ರದವಳು — ಗಾಯತ್ರೀ, ಸಾವಿತ್ರೀ, ಸರಸ್ವತೀ — ಇಪ್ಪತ್ನಾಲ್ಕು ಅಕ್ಷರ, ಮೂರು ಪಾದ, ಆರು ಕುಕ್ಷಿ, ಐದು ಶಿರಸ್ಸುಗಳುಳ್ಳವಳು; ಉಪನಯನಕ್ಕೂ ಜಪಕ್ಕೂ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'Prompted by Sri Lakshminarayana named Savitri, who dwells within Mukhyaprana, the consort of Bharati, and for his pleasure, I shall do japa of the Gayatri mantra as much as I am able.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಯಥಾಶಕ್ತಿ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'जपसङ्कल्पः',
      titleEn: 'Pranayama and japa-sankalpa (Smarta)',
      note: 'Do achamana and three pranayamas, then say this sankalpa with the hands on the right thigh and let a ladle of water fall into the plate.',
      noteKn: 'ಆಚಮನ ಮತ್ತು ಮೂರು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಕೈಗಳನ್ನು ಬಲ ತೊಡೆಯ ಮೇಲಿಟ್ಟು ಈ ಸಂಕಲ್ಪ ಹೇಳಿ, ಒಂದು ಉದ್ಧರಣೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'प्राणानायम्य ॥',
          meaning: {
            en: 'Do pranayama, as at the beginning (Madhvas: three times).',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ಮಾಧ್ವರು ಮೂರು ಬಾರಿ).',
          },
        },
        {
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nमम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, for the destruction of all my sins and the pleasure of the Supreme Lord,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ನನ್ನ ಸಮಸ್ತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'प्रातःसन्ध्याङ्ग यथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'I shall do japa of the Gayatri mantra, as part of the morning sandhya, as much as I am able.',
            kn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅಂಗವಾಗಿ ಯಥಾಶಕ್ತಿ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'माध्याह्निकसन्ध्याङ्ग यथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'I shall do japa of the Gayatri mantra, as part of the midday sandhya, as much as I am able.',
            kn: 'ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೆಯ ಅಂಗವಾಗಿ ಯಥಾಶಕ್ತಿ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'सायंसन्ध्याङ्ग यथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'I shall do japa of the Gayatri mantra, as part of the evening sandhya, as much as I am able.',
            kn: 'ಸಾಯಂಸಂಧ್ಯೆಯ ಅಂಗವಾಗಿ ಯಥಾಶಕ್ತಿ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'करन्यासः अङ्गन्यासश्च',
      titleEn: 'Kara-nyasa and anga-nyasa (Smarta)',
      note: 'Kara-nyasa: with each line touch the named finger with the thumb (the thumb with the index finger), and at the last line rub the palms and backs of the hands together. Anga-nyasa: touch the heart, the top of the head and the tuft; touch the shoulders crosswise (kavacha); touch the eyes (and the middle of the brow); for astraya phat circle the right hand round the head and clap; with the last line snap the fingers in the ten directions (digbandha). The same nyasa is repeated after japa, ending with “digvimokah” instead of “digbandhah”. Karnataka manuals read धीमहि ईश्वरात्मने and धियो यो नः सदाशिवात्मने in the fourth and fifth lines.',
      noteKn: 'ಕರನ್ಯಾಸ: ಒಂದೊಂದು ವಾಕ್ಯಕ್ಕೂ ಹೆಸರಿಸಿದ ಬೆರಳನ್ನು ಹೆಬ್ಬೆರಳಿನಿಂದ (ಹೆಬ್ಬೆರಳನ್ನು ತೋರುಬೆರಳಿನಿಂದ) ಮುಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯಕ್ಕೆ ಅಂಗೈ ಮತ್ತು ಕೈಹಿಂಭಾಗಗಳನ್ನು ಉಜ್ಜಿ. ಅಂಗನ್ಯಾಸ: ಹೃದಯ, ನೆತ್ತಿ, ಶಿಖೆ ಮುಟ್ಟಿ; ಅಡ್ಡಗೈಯಿಂದ ಭುಜಗಳನ್ನು ಮುಟ್ಟಿ (ಕವಚ); ಕಣ್ಣುಗಳನ್ನು (ಮತ್ತು ಹುಬ್ಬುಗಳ ಮಧ್ಯವನ್ನು) ಮುಟ್ಟಿ; “ಅಸ್ತ್ರಾಯ ಫಟ್” ಎನ್ನುವಾಗ ಬಲಗೈಯನ್ನು ತಲೆಯ ಸುತ್ತ ತಿರುಗಿಸಿ ಚಪ್ಪಾಳೆ ತಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯದಿಂದ ಹತ್ತು ದಿಕ್ಕುಗಳಲ್ಲಿ ಚಿಟಿಕೆ ಹೊಡೆಯಿರಿ (ದಿಗ್ಬಂಧ). ಜಪದ ನಂತರ ಇದೇ ನ್ಯಾಸವನ್ನು ಮತ್ತೆ ಮಾಡಿ, ಕೊನೆಯಲ್ಲಿ “ದಿಗ್ಬಂಧಃ” ಬದಲು “ದಿಗ್ವಿಮೋಕಃ” ಎನ್ನಬೇಕು. ಕರ್ನಾಟಕದ ಪುಸ್ತಕಗಳಲ್ಲಿ ನಾಲ್ಕು ಮತ್ತು ಐದನೆಯ ಸಾಲುಗಳು “ಧೀಮಹಿ ಈಶ್ವರಾತ್ಮನೇ”, “ಧಿಯೋ ಯೋ ನಃ ಸದಾಶಿವಾತ್ಮನೇ”.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'तत्सवितुः ब्रह्मात्मने अङ्गुष्ठाभ्यां नमः ।\nवरेण्यं विष्ण्वात्मने तर्जनीभ्यां नमः ।\nभर्गो देवस्य रुद्रात्मने मध्यमाभ्यां नमः ।\nधीमहि सत्यात्मने अनामिकाभ्यां नमः ।\nधियो यो नः ज्ञानात्मने कनिष्ठिकाभ्यां नमः ।\nप्रचोदयात् सर्वात्मने करतलकरपृष्ठाभ्यां नमः ॥',
          meaning: {
            en: 'The six parts of the Gayatri — as Brahma, Vishnu, Rudra, Truth, Knowledge and the Self of all — are placed on the thumbs, index, middle, ring and little fingers, and the palms and backs of the hands.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು — ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಸತ್ಯ, ಜ್ಞಾನ, ಸರ್ವಾತ್ಮ ಸ್ವರೂಪವಾಗಿ — ಹೆಬ್ಬೆರಳು, ತೋರುಬೆರಳು, ನಡುಬೆರಳು, ಉಂಗುರದ ಬೆರಳು, ಕಿರುಬೆರಳು ಮತ್ತು ಅಂಗೈ–ಕೈಹಿಂಭಾಗಗಳಲ್ಲಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'तत्सवितुः ब्रह्मात्मने हृदयाय नमः ।\nवरेण्यं विष्ण्वात्मने शिरसे स्वाहा ।\nभर्गो देवस्य रुद्रात्मने शिखायै वषट् ।\nधीमहि सत्यात्मने कवचाय हुम् ।\nधियो यो नः ज्ञानात्मने नेत्रत्रयाय वौषट् ।\nप्रचोदयात् सर्वात्मने अस्त्राय फट् ।\nभूर्भुवः स्वरोमिति दिग्बन्धः ॥',
          meaning: {
            en: 'The same six parts are placed on the heart, head, tuft, shoulders as armour, the three eyes, and as a weapon around oneself; with “bhur bhuvah svar om” the directions are sealed.',
            kn: 'ಅದೇ ಆರು ಭಾಗಗಳನ್ನು ಹೃದಯ, ತಲೆ, ಶಿಖೆ, ಕವಚವಾಗಿ ಭುಜಗಳು, ಮೂರು ಕಣ್ಣುಗಳು ಮತ್ತು ಸುತ್ತಲೂ ಅಸ್ತ್ರವಾಗಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ; “ಭೂರ್ಭುವಃ ಸ್ವರೋಂ” ಎಂದು ದಿಕ್ಕುಗಳನ್ನು ಬಂಧಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'ध्यानम्',
      titleEn: 'Gayatri dhyana and mudras',
      note: 'Meditate on the five-faced Goddess Gayatri (मुक्ताविद्रुम…); many also recite ध्येयः सदा…. Those who were taught the twenty-four Gayatri mudras show them now, naming each, before beginning the japa; learn the gestures from your elders.',
      noteKn: 'ಪಂಚಮುಖಿ ಗಾಯತ್ರೀದೇವಿಯನ್ನು ಧ್ಯಾನಿಸಿ (ಮುಕ್ತಾವಿದ್ರುಮ…); ಅನೇಕರು “ಧ್ಯೇಯಃ ಸದಾ…” ಸಹ ಹೇಳುತ್ತಾರೆ. ಇಪ್ಪತ್ನಾಲ್ಕು ಗಾಯತ್ರೀ ಮುದ್ರೆಗಳನ್ನು ಕಲಿತವರು ಜಪಕ್ಕೆ ಮೊದಲು ಹೆಸರು ಹೇಳುತ್ತಾ ಈಗ ತೋರಿಸುತ್ತಾರೆ; ಮುದ್ರೆಗಳನ್ನು ಹಿರಿಯರಿಂದ ಕಲಿಯಿರಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'मुक्ताविद्रुमहेमनीलधवलच्छायैर्मुखैस्त्रीक्षणैः\nयुक्तामिन्दुनिबद्धरत्नमुकुटां तत्त्वार्थवर्णात्मिकाम् ।\nगायत्रीं वरदाभयाङ्कुशकशाः शुभ्रं कपालं गदां\nशङ्खं चक्रमथारविन्दयुगलं हस्तैर्वहन्तीं भजे ॥',
          meaning: {
            en: 'I worship Gayatri, whose five faces shine with the hues of pearl, coral, gold, sapphire and white, each with three eyes; whose jewelled crown bears the crescent moon; whose syllables are the essence of truth; who holds in her hands the gestures of boon and fearlessness, the goad, the whip, a white skull-bowl, the mace, the conch, the discus and a pair of lotuses.',
            kn: 'ಮುತ್ತು, ಹವಳ, ಚಿನ್ನ, ನೀಲಮಣಿ, ಬಿಳುಪಿನ ಕಾಂತಿಯುಳ್ಳ, ಮೂರು ಕಣ್ಣುಗಳ ಐದು ಮುಖಗಳಿಂದ ಕೂಡಿದ, ಚಂದ್ರಕಲೆಯುಳ್ಳ ರತ್ನಕಿರೀಟ ಧರಿಸಿದ, ತತ್ತ್ವಾರ್ಥವೇ ಅಕ್ಷರರೂಪವಾದ, ವರ–ಅಭಯ ಮುದ್ರೆಗಳು, ಅಂಕುಶ, ಚಾವಟಿ, ಬಿಳಿಯ ಕಪಾಲ, ಗದೆ, ಶಂಖ, ಚಕ್ರ ಮತ್ತು ಎರಡು ಕಮಲಗಳನ್ನು ಕೈಗಳಲ್ಲಿ ಹಿಡಿದಿರುವ ಗಾಯತ್ರೀದೇವಿಯನ್ನು ಭಜಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ध्येयः सदा सवितृमण्डलमध्यवर्ती\nनारायणः सरसिजासनसन्निविष्टः ।\nकेयूरवान् मकरकुण्डलवान् किरीटी\nहारी हिरण्मयवपुर्धृतशङ्खचक्रः ॥',
          meaning: {
            en: 'Always to be meditated upon is Narayana in the centre of the sun’s orb, seated on a lotus, wearing armlets, fish-shaped earrings, a crown and necklaces, golden of form, holding the conch and the discus.',
            kn: 'ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿರುವ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ಕೇಯೂರ, ಮಕರಕುಂಡಲ, ಕಿರೀಟ, ಹಾರಗಳನ್ನು ಧರಿಸಿರುವ, ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವ ದೇಹವುಳ್ಳ, ಶಂಖಚಕ್ರಧಾರಿಯಾದ ಶ್ರೀನಾರಾಯಣನನ್ನು ಸದಾ ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          text: 'सुमुखं सम्पुटं चैव विततं विस्तृतं तथा ।\nद्विमुखं त्रिमुखं चैव चतुःपञ्चमुखं तथा ॥\nषण्मुखाधोमुखं चैव व्यापकाञ्जलिकं तथा ।\nशकटं यमपाशं च ग्रथितं सम्मुखोन्मुखम् ॥\nप्रलम्बं मुष्टिकं चैव मत्स्यः कूर्मो वराहकम् ।\nसिंहाक्रान्तं महाक्रान्तं मुद्गरं पल्लवं तथा ॥\nचतुर्विंशतिमुद्रा वै गायत्र्यां सुप्रतिष्ठिताः ।\nइति मुद्रा न जानाति गायत्री निष्फला भवेत् ॥',
          meaning: {
            en: 'The twenty-four gestures shown before Gayatri japa: sumukha, samputa, vitata, vistrita, dvimukha, trimukha, chaturmukha, panchamukha, shanmukha, adhomukha, vyapakanjalika, shakata, yamapasha, grathita, sammukhonmukha, pralamba, mushtika, matsya, kurma, varaha, simhakranta, mahakranta, mudgara and pallava. These are established in the Gayatri; it is said that japa done without knowing them bears little fruit.',
            kn: 'ಗಾಯತ್ರೀ ಜಪಕ್ಕೆ ಮೊದಲು ತೋರಿಸುವ ಇಪ್ಪತ್ನಾಲ್ಕು ಮುದ್ರೆಗಳು: ಸುಮುಖ, ಸಂಪುಟ, ವಿತತ, ವಿಸ್ತೃತ, ದ್ವಿಮುಖ, ತ್ರಿಮುಖ, ಚತುರ್ಮುಖ, ಪಂಚಮುಖ, ಷಣ್ಮುಖ, ಅಧೋಮುಖ, ವ್ಯಾಪಕಾಂಜಲಿಕ, ಶಕಟ, ಯಮಪಾಶ, ಗ್ರಥಿತ, ಸಮ್ಮುಖೋನ್ಮುಖ, ಪ್ರಲಂಬ, ಮುಷ್ಟಿಕ, ಮತ್ಸ್ಯ, ಕೂರ್ಮ, ವರಾಹ, ಸಿಂಹಾಕ್ರಾಂತ, ಮಹಾಕ್ರಾಂತ, ಮುದ್ಗರ ಮತ್ತು ಪಲ್ಲವ. ಇವು ಗಾಯತ್ರಿಯಲ್ಲಿ ಪ್ರತಿಷ್ಠಿತವಾಗಿವೆ; ಇವನ್ನು ತಿಳಿಯದೆ ಮಾಡಿದ ಜಪ ಫಲ ಕೊಡದು ಎನ್ನುತ್ತಾರೆ.',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Morning: stand facing east until the sun has risen (after that you may sit), hands held near the navel. Recite the Gayatri 1008 times (best), 108 (middle) or at least 10 times — never fewer — keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Then offer the japa and do the ashtakshara japa (next step).',
      noteKn: 'ಬೆಳಗ್ಗೆ: ಸೂರ್ಯೋದಯವಾಗುವವರೆಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ನಿಂತು (ನಂತರ ಕುಳಿತುಕೊಳ್ಳಬಹುದು), ಕೈಗಳನ್ನು ನಾಭಿಯ ಬಳಿ ಹಿಡಿದು ಜಪಿಸಿ. ಗಾಯತ್ರಿಯನ್ನು ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ) ಅಥವಾ ಕನಿಷ್ಠ ೧೦ ಬಾರಿ — ಅದಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ — ಜಪಿಸಿ; ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ. ಸಾಧ್ಯವಾದರೆ ತುಟಿ ಅಲುಗಿಸದೆ, ಇಲ್ಲವಾದರೆ ಮೆಲ್ಲನೆ, ಅರ್ಥ ಚಿಂತಿಸುತ್ತಾ ಜಪಿಸಿ; ಆಗಾಗ ಸ್ವಲ್ಪ ನಿಲ್ಲಿಸಿ; ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ. ನಂತರ ಜಪ ಸಮರ್ಪಿಸಿ ಅಷ್ಟಾಕ್ಷರ ಜಪ ಮಾಡಿ (ಮುಂದಿನ ಹಂತ).',
      when: { tradition: ['madhva'], time: ['morning'] },
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Midday: sit facing east or north, hands at the chest. Recite the Gayatri 1008 times (best), 108 (middle) or at least 10 times — never fewer — keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Then offer the japa and do the ashtakshara japa (next step).',
      noteKn: 'ಮಧ್ಯಾಹ್ನ: ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಕೈಗಳನ್ನು ಎದೆಯ ಬಳಿ ಹಿಡಿದು ಜಪಿಸಿ. ಗಾಯತ್ರಿಯನ್ನು ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ) ಅಥವಾ ಕನಿಷ್ಠ ೧೦ ಬಾರಿ — ಅದಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ — ಜಪಿಸಿ; ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ. ಸಾಧ್ಯವಾದರೆ ತುಟಿ ಅಲುಗಿಸದೆ, ಇಲ್ಲವಾದರೆ ಮೆಲ್ಲನೆ, ಅರ್ಥ ಚಿಂತಿಸುತ್ತಾ ಜಪಿಸಿ; ಆಗಾಗ ಸ್ವಲ್ಪ ನಿಲ್ಲಿಸಿ; ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ. ನಂತರ ಜಪ ಸಮರ್ಪಿಸಿ ಅಷ್ಟಾಕ್ಷರ ಜಪ ಮಾಡಿ (ಮುಂದಿನ ಹಂತ).',
      when: { tradition: ['madhva'], time: ['midday'] },
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Evening: sit facing west, hands at the level of the nose. Recite the Gayatri 1008 times (best), 108 (middle) or at least 10 times — never fewer — keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Then offer the japa and do the ashtakshara japa (next step).',
      noteKn: 'ಸಂಜೆ: ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಕೈಗಳನ್ನು ಮೂಗಿನ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದು ಜಪಿಸಿ. ಗಾಯತ್ರಿಯನ್ನು ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ) ಅಥವಾ ಕನಿಷ್ಠ ೧೦ ಬಾರಿ — ಅದಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ — ಜಪಿಸಿ; ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ. ಸಾಧ್ಯವಾದರೆ ತುಟಿ ಅಲುಗಿಸದೆ, ಇಲ್ಲವಾದರೆ ಮೆಲ್ಲನೆ, ಅರ್ಥ ಚಿಂತಿಸುತ್ತಾ ಜಪಿಸಿ; ಆಗಾಗ ಸ್ವಲ್ಪ ನಿಲ್ಲಿಸಿ; ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ. ನಂತರ ಜಪ ಸಮರ್ಪಿಸಿ ಅಷ್ಟಾಕ್ಷರ ಜಪ ಮಾಡಿ (ಮುಂದಿನ ಹಂತ).',
      when: { tradition: ['madhva'], time: ['evening'] },
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Morning: stand facing east until the sun has risen (after that you may sit), hands held near the navel. Recite the Gayatri 1008 times (best), 108 (middle), 28 or at least 10 times keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Many Smarta families then repeat the nyasa (ending with digvimokah) and show the eight closing mudras.',
      noteKn: 'ಬೆಳಗ್ಗೆ: ಸೂರ್ಯೋದಯವಾಗುವವರೆಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ನಿಂತು (ನಂತರ ಕುಳಿತುಕೊಳ್ಳಬಹುದು), ಕೈಗಳನ್ನು ನಾಭಿಯ ಬಳಿ ಹಿಡಿದು ಜಪಿಸಿ. ಗಾಯತ್ರಿಯನ್ನು ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ), ೨೮ ಅಥವಾ ಕನಿಷ್ಠ ೧೦ ಬಾರಿ — ಅದಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ — ಜಪಿಸಿ; ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ. ಸಾಧ್ಯವಾದರೆ ತುಟಿ ಅಲುಗಿಸದೆ, ಇಲ್ಲವಾದರೆ ಮೆಲ್ಲನೆ, ಅರ್ಥ ಚಿಂತಿಸುತ್ತಾ ಜಪಿಸಿ; ಆಗಾಗ ಸ್ವಲ್ಪ ನಿಲ್ಲಿಸಿ; ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ. ಅನೇಕ ಸ್ಮಾರ್ತ ಮನೆತನಗಳು ನಂತರ ನ್ಯಾಸವನ್ನು (ದಿಗ್ವಿಮೋಕದೊಂದಿಗೆ) ಮತ್ತೆ ಮಾಡಿ ಎಂಟು ಉತ್ತರ ಮುದ್ರೆಗಳನ್ನು ತೋರಿಸುತ್ತಾರೆ.',
      when: { tradition: ['smarta'], time: ['morning'] },
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Midday: sit facing east or north, hands at the chest. Recite the Gayatri 1008 times (best), 108 (middle), 28 or at least 10 times keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Many Smarta families then repeat the nyasa (ending with digvimokah) and show the eight closing mudras.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ: ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಕೈಗಳನ್ನು ಎದೆಯ ಬಳಿ ಹಿಡಿದು ಜಪಿಸಿ. ಗಾಯತ್ರಿಯನ್ನು ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ), ೨೮ ಅಥವಾ ಕನಿಷ್ಠ ೧೦ ಬಾರಿ — ಅದಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ — ಜಪಿಸಿ; ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ. ಸಾಧ್ಯವಾದರೆ ತುಟಿ ಅಲುಗಿಸದೆ, ಇಲ್ಲವಾದರೆ ಮೆಲ್ಲನೆ, ಅರ್ಥ ಚಿಂತಿಸುತ್ತಾ ಜಪಿಸಿ; ಆಗಾಗ ಸ್ವಲ್ಪ ನಿಲ್ಲಿಸಿ; ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ. ಅನೇಕ ಸ್ಮಾರ್ತ ಮನೆತನಗಳು ನಂತರ ನ್ಯಾಸವನ್ನು (ದಿಗ್ವಿಮೋಕದೊಂದಿಗೆ) ಮತ್ತೆ ಮಾಡಿ ಎಂಟು ಉತ್ತರ ಮುದ್ರೆಗಳನ್ನು ತೋರಿಸುತ್ತಾರೆ.',
      when: { tradition: ['smarta'], time: ['midday'] },
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Evening: sit facing west, hands at the level of the nose. Recite the Gayatri 1008 times (best), 108 (middle), 28 or at least 10 times keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Many Smarta families then repeat the nyasa (ending with digvimokah) and show the eight closing mudras.',
      noteKn: 'ಸಂಜೆ: ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಕೈಗಳನ್ನು ಮೂಗಿನ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದು ಜಪಿಸಿ. ಗಾಯತ್ರಿಯನ್ನು ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ), ೨೮ ಅಥವಾ ಕನಿಷ್ಠ ೧೦ ಬಾರಿ — ಅದಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ — ಜಪಿಸಿ; ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ. ಸಾಧ್ಯವಾದರೆ ತುಟಿ ಅಲುಗಿಸದೆ, ಇಲ್ಲವಾದರೆ ಮೆಲ್ಲನೆ, ಅರ್ಥ ಚಿಂತಿಸುತ್ತಾ ಜಪಿಸಿ; ಆಗಾಗ ಸ್ವಲ್ಪ ನಿಲ್ಲಿಸಿ; ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ. ಅನೇಕ ಸ್ಮಾರ್ತ ಮನೆತನಗಳು ನಂತರ ನ್ಯಾಸವನ್ನು (ದಿಗ್ವಿಮೋಕದೊಂದಿಗೆ) ಮತ್ತೆ ಮಾಡಿ ಎಂಟು ಉತ್ತರ ಮುದ್ರೆಗಳನ್ನು ತೋರಿಸುತ್ತಾರೆ.',
      when: { tradition: ['smarta'], time: ['evening'] },
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'जपसमर्पणम् अष्टाक्षरजपश्च',
      titleEn: 'Japa-samarpana and ashtakshara japa (Madhva)',
      note: 'Offer the Gayatri japa to the Lord with the first formula and let water fall into the plate. Then do pranayama, say the ashtakshara sankalpa and recite the Narayana ashtakshara mantra, enclosed in Om — the Sadachara-smriti prescribes three times as many as the Gayatri japa (for example 30 for 10, 300 for 100). Close by offering this japa too with the last line.',
      noteKn: 'ಮೊದಲ ವಾಕ್ಯದಿಂದ ಗಾಯತ್ರೀ ಜಪವನ್ನು ಭಗವಂತನಿಗೆ ಸಮರ್ಪಿಸಿ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಿ. ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಅಷ್ಟಾಕ್ಷರ ಸಂಕಲ್ಪ ಹೇಳಿ, ಪ್ರಣವ ಸಂಪುಟಿತವಾದ ನಾರಾಯಣ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರವನ್ನು ಜಪಿಸಿ — ಗಾಯತ್ರೀ ಜಪದ ಮೂರು ಪಟ್ಟು ಎಂದು ಸದಾಚಾರಸ್ಮೃತಿ ಹೇಳುತ್ತದೆ (ಉದಾ: ೧೦ಕ್ಕೆ ೩೦, ೧೦೦ಕ್ಕೆ ೩೦೦). ಕೊನೆಯ ವಾಕ್ಯದಿಂದ ಈ ಜಪವನ್ನೂ ಸಮರ್ಪಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया सवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nकृतः श्रीगायत्रीमन्त्रजपः सम्पूर्णः । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'This japa of the Gayatri mantra, done prompted by Sri Lakshminarayana named Savitri and for his pleasure, is complete. May it be an offering to Sri Krishna.',
            kn: 'ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ ಅವನ ಪ್ರೀತಿಗಾಗಿ ಮಾಡಿದ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪ ಸಂಪೂರ್ಣವಾಯಿತು. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          text: 'प्राणानायम्य ॥',
          meaning: {
            en: 'Do pranayama, as at the beginning (Madhvas: three times).',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ಮಾಧ್ವರು ಮೂರು ಬಾರಿ).',
          },
        },
        {
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति नारायणाष्टाक्षरमन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'Prompted by Sri Lakshminarayana named Savitri, who dwells within Mukhyaprana, and for his pleasure, I shall do japa of the eight-syllabled Narayana mantra as much as I am able.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಯಥಾಶಕ್ತಿ ನಾರಾಯಣ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ ॐ नमो नारायणाय ॐ ॥',
          meaning: {
            en: 'Om. Om, salutations to Narayana. Om. (The eight-syllabled mantra, enclosed in Om.)',
            kn: 'ಓಂ. ಓಂ ನಮೋ ನಾರಾಯಣಾಯ — ಶ್ರೀನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರ. ಓಂ. (ಪ್ರಣವದಿಂದ ಸಂಪುಟಿತವಾದ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರ.)',
          },
        },
        {
          text: 'नारायणाष्टाक्षरमन्त्रजपः सम्पूर्णः । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'The japa of the eight-syllabled Narayana mantra is complete. May it be an offering to Sri Krishna.',
            kn: 'ನಾರಾಯಣ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರಜಪ ಸಂಪೂರ್ಣವಾಯಿತು. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्योपस्थानम्',
      titleEn: 'Sandhyopasthana (worship of the Sun, standing)',
      note: 'Morning: stand with folded hands facing east. The Madhva manuals use जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे… in the morning and in the evening (the midday upasthana is different and comes before japa). With नमो ब्रह्मणे… turn round clockwise three times where you stand.',
      noteKn: 'ಬೆಳಿಗ್ಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಮಾಧ್ವ ಪುಸ್ತಕಗಳು ಬೆಳಿಗ್ಗೆ ಮತ್ತು ಸಾಯಂಕಾಲ “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಮಂತ್ರಗಳನ್ನು ಹೇಳುತ್ತವೆ (ಮಧ್ಯಾಹ್ನದ ಉಪಸ್ಥಾನ ಬೇರೆ, ಅದು ಜಪಕ್ಕೆ ಮೊದಲು). “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ.',
      when: { tradition: ['madhva'], time: ['morning'] },
      verses: [
        {
          text: 'जातवेदस इत्यस्य मन्त्रस्य कश्यप ऋषिः । दुर्गा जातवेदा अग्निर्देवता ।\nत्रिष्टुप् छन्दः । सन्ध्योपस्थाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “jatavedase”: the seer is Kashyapa, the deity is Agni Jatavedas (also named as Durga), the metre is Trishtubh; it is used for the sandhya upasthana.',
            kn: '“ಜಾತವೇದಸೇ” ಮಂತ್ರಕ್ಕೆ ಕಶ್ಯಪ ಋಷಿ, ಜಾತವೇದ ಅಗ್ನಿ (ದುರ್ಗಾ ಎಂದೂ ಹೇಳುತ್ತಾರೆ) ದೇವತೆ, ತ್ರಿಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಸಂಧ್ಯೋಪಸ್ಥಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।\nस नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥',
          meaning: {
            en: 'For Jatavedas, the knower of all, let us press the Soma; may he burn away the hoard of those who are hostile. As a boat carries across a river, may Agni — for Madhvas, the Lord within him — carry us beyond all difficulties and wrongs.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಜಾತವೇದನಿಗಾಗಿ ಸೋಮವನ್ನು ಅರ್ಪಿಸೋಣ; ಅವನು ಶತ್ರುಗಳ ಸಂಪತ್ತನ್ನು ಸುಟ್ಟುಹಾಕಲಿ. ದೋಣಿಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಅಗ್ನಿಯು (ಮಾಧ್ವರಿಗೆ ಅಗ್ನಿಯ ಅಂತರ್ಯಾಮಿಯಾದ ಭಗವಂತನು) ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದಲೂ ಪಾಪಗಳಿಂದಲೂ ಪಾರುಮಾಡಲಿ.',
          },
        },
        {
          text: 'तच्छंयोरित्यस्य मन्त्रस्य शंयुरृषिः । विश्वे देवा देवताः ।\nशक्वरी छन्दः । उपस्थाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “tac chamyoh”: the seer is Shamyu, the deities are the Vishvedevas, the metre is Shakvari; it is used in the upasthana.',
            kn: '“ತಚ್ಛಂಯೋಃ” ಮಂತ್ರಕ್ಕೆ ಶಂಯು ಋಷಿ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆ, ಶಕ್ವರೀ ಛಂದಸ್ಸು; ಉಪಸ್ಥಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'तच्छंयोरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥',
          meaning: {
            en: 'We pray for that health and happiness: for the success of the sacrifice and of the one who offers it. May divine well-being be ours, and well-being for all people; may healing rise ever higher; may there be welfare for our two-footed and four-footed beings.',
            kn: 'ಆ ಆರೋಗ್ಯ ಸುಖಗಳನ್ನು ಬೇಡುತ್ತೇವೆ: ಯಜ್ಞಕ್ಕೂ ಯಜ್ಞಮಾಡುವವನಿಗೂ ಸಫಲತೆಯಾಗಲಿ. ನಮಗೆ ದೈವಿಕ ಕ್ಷೇಮವೂ ಎಲ್ಲ ಮನುಷ್ಯರಿಗೆ ಕ್ಷೇಮವೂ ಆಗಲಿ; ಔಷಧಶಕ್ತಿ ಮೇಲ್ಮುಖವಾಗಿ ವೃದ್ಧಿಯಾಗಲಿ; ಎರಡು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ನಾಲ್ಕು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          text: 'नमो ब्रह्मणे । नमो अस्त्वग्नये । नमः पृथिव्यै । नम ओषधीभ्यः ।\nनमो वाचे । नमो वाचस्पतये । नमो विष्णवे महते करोमि ॥',
          meaning: {
            en: 'Salutations to Brahman; salutations to Agni; to the Earth; to the healing plants; to Speech and to the Lord of Speech; to the great Vishnu I offer my salutation.',
            kn: 'ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಅಗ್ನಿಗೆ, ಭೂಮಿಗೆ, ಓಷಧಿಗಳಿಗೆ, ವಾಗ್ದೇವಿಗೆ, ವಾಚಸ್ಪತಿಗೆ ನಮಸ್ಕಾರ; ಮಹಾನ್ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्योपस्थानम्',
      titleEn: 'Sandhyopasthana (worship of the Sun, standing)',
      note: 'Evening: stand with folded hands facing west. The Madhva manuals use जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे… in the morning and in the evening (the midday upasthana is different and comes before japa). With नमो ब्रह्मणे… turn round clockwise three times where you stand.',
      noteKn: 'ಸಾಯಂಕಾಲ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಮಾಧ್ವ ಪುಸ್ತಕಗಳು ಬೆಳಿಗ್ಗೆ ಮತ್ತು ಸಾಯಂಕಾಲ “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಮಂತ್ರಗಳನ್ನು ಹೇಳುತ್ತವೆ (ಮಧ್ಯಾಹ್ನದ ಉಪಸ್ಥಾನ ಬೇರೆ, ಅದು ಜಪಕ್ಕೆ ಮೊದಲು). “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ.',
      when: { tradition: ['madhva'], time: ['evening'] },
      verses: [
        {
          text: 'जातवेदस इत्यस्य मन्त्रस्य कश्यप ऋषिः । दुर्गा जातवेदा अग्निर्देवता ।\nत्रिष्टुप् छन्दः । सन्ध्योपस्थाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “jatavedase”: the seer is Kashyapa, the deity is Agni Jatavedas (also named as Durga), the metre is Trishtubh; it is used for the sandhya upasthana.',
            kn: '“ಜಾತವೇದಸೇ” ಮಂತ್ರಕ್ಕೆ ಕಶ್ಯಪ ಋಷಿ, ಜಾತವೇದ ಅಗ್ನಿ (ದುರ್ಗಾ ಎಂದೂ ಹೇಳುತ್ತಾರೆ) ದೇವತೆ, ತ್ರಿಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಸಂಧ್ಯೋಪಸ್ಥಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।\nस नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥',
          meaning: {
            en: 'For Jatavedas, the knower of all, let us press the Soma; may he burn away the hoard of those who are hostile. As a boat carries across a river, may Agni — for Madhvas, the Lord within him — carry us beyond all difficulties and wrongs.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಜಾತವೇದನಿಗಾಗಿ ಸೋಮವನ್ನು ಅರ್ಪಿಸೋಣ; ಅವನು ಶತ್ರುಗಳ ಸಂಪತ್ತನ್ನು ಸುಟ್ಟುಹಾಕಲಿ. ದೋಣಿಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಅಗ್ನಿಯು (ಮಾಧ್ವರಿಗೆ ಅಗ್ನಿಯ ಅಂತರ್ಯಾಮಿಯಾದ ಭಗವಂತನು) ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದಲೂ ಪಾಪಗಳಿಂದಲೂ ಪಾರುಮಾಡಲಿ.',
          },
        },
        {
          text: 'तच्छंयोरित्यस्य मन्त्रस्य शंयुरृषिः । विश्वे देवा देवताः ।\nशक्वरी छन्दः । उपस्थाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “tac chamyoh”: the seer is Shamyu, the deities are the Vishvedevas, the metre is Shakvari; it is used in the upasthana.',
            kn: '“ತಚ್ಛಂಯೋಃ” ಮಂತ್ರಕ್ಕೆ ಶಂಯು ಋಷಿ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆ, ಶಕ್ವರೀ ಛಂದಸ್ಸು; ಉಪಸ್ಥಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'तच्छंयोरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥',
          meaning: {
            en: 'We pray for that health and happiness: for the success of the sacrifice and of the one who offers it. May divine well-being be ours, and well-being for all people; may healing rise ever higher; may there be welfare for our two-footed and four-footed beings.',
            kn: 'ಆ ಆರೋಗ್ಯ ಸುಖಗಳನ್ನು ಬೇಡುತ್ತೇವೆ: ಯಜ್ಞಕ್ಕೂ ಯಜ್ಞಮಾಡುವವನಿಗೂ ಸಫಲತೆಯಾಗಲಿ. ನಮಗೆ ದೈವಿಕ ಕ್ಷೇಮವೂ ಎಲ್ಲ ಮನುಷ್ಯರಿಗೆ ಕ್ಷೇಮವೂ ಆಗಲಿ; ಔಷಧಶಕ್ತಿ ಮೇಲ್ಮುಖವಾಗಿ ವೃದ್ಧಿಯಾಗಲಿ; ಎರಡು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ನಾಲ್ಕು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          text: 'नमो ब्रह्मणे । नमो अस्त्वग्नये । नमः पृथिव्यै । नम ओषधीभ्यः ।\nनमो वाचे । नमो वाचस्पतये । नमो विष्णवे महते करोमि ॥',
          meaning: {
            en: 'Salutations to Brahman; salutations to Agni; to the Earth; to the healing plants; to Speech and to the Lord of Speech; to the great Vishnu I offer my salutation.',
            kn: 'ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಅಗ್ನಿಗೆ, ಭೂಮಿಗೆ, ಓಷಧಿಗಳಿಗೆ, ವಾಗ್ದೇವಿಗೆ, ವಾಚಸ್ಪತಿಗೆ ನಮಸ್ಕಾರ; ಮಹಾನ್ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्योपस्थानम्',
      titleEn: 'Sandhyopasthana (worship of the Sun, standing)',
      note: 'Morning: stand with folded hands facing east. The Karnataka Rigvedi Smarta manuals (Somayaji, Balkur) recite the three riks to Mitra मित्रस्य…, मित्रो जनान्…, प्र स मित्र… (Rigveda 3.59.6, 1, 2). Tamil and Andhra manuals (Kamesvara Aiyar, stotranidhi) instead recite जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे…, with which you turn round clockwise three times. Recite what your family recites.',
      noteKn: 'ಬೆಳಿಗ್ಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಕರ್ನಾಟಕದ ಋಗ್ವೇದಿ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು (ಸೋಮಯಾಜಿ, ಬಳ್ಕೂರು) ಮಿತ್ರನ ಮೂರು ಋಕ್ಕುಗಳನ್ನು — “ಮಿತ್ರಸ್ಯ…”, “ಮಿತ್ರೋ ಜನಾನ್…”, “ಪ್ರ ಸ ಮಿತ್ರ…” (ಋಗ್ವೇದ ೩.೫೯.೬, ೧, ೨) — ಹೇಳುತ್ತವೆ. ತಮಿಳು ಮತ್ತು ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು (ಕಾಮೇಶ್ವರ ಅಯ್ಯರ್, ಸ್ತೋತ್ರನಿಧಿ) ಅದರ ಬದಲು “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತವೆ; ಕೊನೆಯದನ್ನು ಹೇಳುತ್ತಾ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ. ಮನೆತನದಲ್ಲಿ ಹೇಳುವುದನ್ನೇ ಹೇಳಿ.',
      when: { tradition: ['smarta'], time: ['morning'] },
      verses: [
        {
          text: 'मित्रस्य चर्षणीधृतोऽवो देवस्य सानसि ।\nद्युम्नं चित्रश्रवस्तमम् ॥',
          meaning: {
            en: 'The protection of the god Mitra, upholder of men, wins blessings; his splendour is most wonderfully renowned.',
            kn: 'ಜನರನ್ನು ಪೋಷಿಸುವ ಮಿತ್ರದೇವನ ರಕ್ಷಣೆ ಶ್ರೇಯಸ್ಸನ್ನು ತರುತ್ತದೆ; ಅವನ ತೇಜಸ್ಸು ಅತ್ಯಂತ ಅದ್ಭುತವಾಗಿ ಪ್ರಸಿದ್ಧವಾದುದು.',
          },
        },
        {
          text: 'मित्रो जनान्यातयति ब्रुवाणो मित्रो दाधार पृथिवीमुत द्याम् ।\nमित्रः कृष्टीरनिमिषाभि चष्टे मित्राय हव्यं घृतवज्जुहोत ॥',
          meaning: {
            en: 'Mitra, when he speaks, sets people to their work; Mitra upholds the earth and the sky; Mitra watches over all beings without closing his eyes. Offer to Mitra an oblation rich with ghee.',
            kn: 'ಮಾತನಾಡುವ ಮಿತ್ರನು ಜನರನ್ನು ಅವರವರ ಕಾರ್ಯಗಳಿಗೆ ಪ್ರೇರಿಸುತ್ತಾನೆ; ಮಿತ್ರನು ಭೂಮಿಯನ್ನೂ ಆಕಾಶವನ್ನೂ ಧರಿಸಿದ್ದಾನೆ; ಮಿತ್ರನು ರೆಪ್ಪೆ ಮುಚ್ಚದೆ ಎಲ್ಲಾ ಜೀವಿಗಳನ್ನು ನೋಡುತ್ತಾನೆ. ಮಿತ್ರನಿಗೆ ತುಪ್ಪದಿಂದ ಕೂಡಿದ ಹವಿಸ್ಸನ್ನು ಅರ್ಪಿಸಿರಿ.',
          },
        },
        {
          text: 'प्र स मित्र मर्तो अस्तु प्रयस्वान् यस्त आदित्य शिक्षति व्रतेन ।\nन हन्यते न जीयते त्वोतो नैनमंहो अश्नोत्यन्तितो न दूरात् ॥',
          meaning: {
            en: 'O Mitra, O Aditya, may that mortal prosper who serves you by keeping your law. Protected by you, he is neither slain nor overcome; no distress reaches him, from near or from afar.',
            kn: 'ಓ ಮಿತ್ರ, ಓ ಆದಿತ್ಯ, ನಿನ್ನ ವ್ರತವನ್ನು ಪಾಲಿಸುತ್ತಾ ನಿನ್ನನ್ನು ಸೇವಿಸುವ ಮನುಷ್ಯನು ಸಮೃದ್ಧನಾಗಲಿ. ನಿನ್ನಿಂದ ರಕ್ಷಿತನಾದ ಅವನು ಕೊಲ್ಲಲ್ಪಡುವುದಿಲ್ಲ, ಸೋಲುವುದಿಲ್ಲ; ಹತ್ತಿರದಿಂದಾಗಲೀ ದೂರದಿಂದಾಗಲೀ ಯಾವ ಕಷ್ಟವೂ ಅವನನ್ನು ತಲುಪುವುದಿಲ್ಲ.',
          },
        },
        {
          text: 'जातवेदस इत्यस्य मन्त्रस्य कश्यप ऋषिः । दुर्गा जातवेदा अग्निर्देवता ।\nत्रिष्टुप् छन्दः । सन्ध्योपस्थाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “jatavedase”: the seer is Kashyapa, the deity is Agni Jatavedas (also named as Durga), the metre is Trishtubh; it is used for the sandhya upasthana.',
            kn: '“ಜಾತವೇದಸೇ” ಮಂತ್ರಕ್ಕೆ ಕಶ್ಯಪ ಋಷಿ, ಜಾತವೇದ ಅಗ್ನಿ (ದುರ್ಗಾ ಎಂದೂ ಹೇಳುತ್ತಾರೆ) ದೇವತೆ, ತ್ರಿಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಸಂಧ್ಯೋಪಸ್ಥಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।\nस नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥',
          meaning: {
            en: 'For Jatavedas, the knower of all, let us press the Soma; may he burn away the hoard of those who are hostile. As a boat carries across a river, may Agni — for Madhvas, the Lord within him — carry us beyond all difficulties and wrongs.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಜಾತವೇದನಿಗಾಗಿ ಸೋಮವನ್ನು ಅರ್ಪಿಸೋಣ; ಅವನು ಶತ್ರುಗಳ ಸಂಪತ್ತನ್ನು ಸುಟ್ಟುಹಾಕಲಿ. ದೋಣಿಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಅಗ್ನಿಯು (ಮಾಧ್ವರಿಗೆ ಅಗ್ನಿಯ ಅಂತರ್ಯಾಮಿಯಾದ ಭಗವಂತನು) ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದಲೂ ಪಾಪಗಳಿಂದಲೂ ಪಾರುಮಾಡಲಿ.',
          },
        },
        {
          text: 'तच्छंयोरित्यस्य मन्त्रस्य शंयुरृषिः । विश्वे देवा देवताः ।\nशक्वरी छन्दः । शान्त्यर्थे जपे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “tac chamyoh”: the seer is Shamyu, the deities are the Vishvedevas, the metre is Shakvari; it is recited for peace.',
            kn: '“ತಚ್ಛಂಯೋಃ” ಮಂತ್ರಕ್ಕೆ ಶಂಯು ಋಷಿ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆ, ಶಕ್ವರೀ ಛಂದಸ್ಸು; ಶಾಂತಿಗಾಗಿ ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'तच्छंयोरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥',
          meaning: {
            en: 'We pray for that health and happiness: for the success of the sacrifice and of the one who offers it. May divine well-being be ours, and well-being for all people; may healing rise ever higher; may there be welfare for our two-footed and four-footed beings.',
            kn: 'ಆ ಆರೋಗ್ಯ ಸುಖಗಳನ್ನು ಬೇಡುತ್ತೇವೆ: ಯಜ್ಞಕ್ಕೂ ಯಜ್ಞಮಾಡುವವನಿಗೂ ಸಫಲತೆಯಾಗಲಿ. ನಮಗೆ ದೈವಿಕ ಕ್ಷೇಮವೂ ಎಲ್ಲ ಮನುಷ್ಯರಿಗೆ ಕ್ಷೇಮವೂ ಆಗಲಿ; ಔಷಧಶಕ್ತಿ ಮೇಲ್ಮುಖವಾಗಿ ವೃದ್ಧಿಯಾಗಲಿ; ಎರಡು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ನಾಲ್ಕು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          text: 'नमो ब्रह्मणे । नमो अस्त्वग्नये । नमः पृथिव्यै । नम ओषधीभ्यः ।\nनमो वाचे । नमो वाचस्पतये । नमो विष्णवे महते करोमि ॥',
          meaning: {
            en: 'Salutations to Brahman; salutations to Agni; to the Earth; to the healing plants; to Speech and to the Lord of Speech; to the great Vishnu I offer my salutation.',
            kn: 'ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಅಗ್ನಿಗೆ, ಭೂಮಿಗೆ, ಓಷಧಿಗಳಿಗೆ, ವಾಗ್ದೇವಿಗೆ, ವಾಚಸ್ಪತಿಗೆ ನಮಸ್ಕಾರ; ಮಹಾನ್ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्योपस्थानम्',
      titleEn: 'Sandhyopasthana (worship of the Sun, standing)',
      note: 'Evening: stand with folded hands facing west. The Karnataka Rigvedi Smarta manuals (Somayaji, Balkur) recite the two riks to Varuna इमं मे वरुण… and तत्त्वा यामि… (Rigveda 1.25.19, 1.24.11). Tamil and Andhra manuals instead recite जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे…, with which you turn round clockwise three times. Recite what your family recites.',
      noteKn: 'ಸಾಯಂಕಾಲ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಕರ್ನಾಟಕದ ಋಗ್ವೇದಿ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು (ಸೋಮಯಾಜಿ, ಬಳ್ಕೂರು) ವರುಣನ ಎರಡು ಋಕ್ಕುಗಳನ್ನು — “ಇಮಂ ಮೇ ವರುಣ…”, “ತತ್ತ್ವಾ ಯಾಮಿ…” (ಋಗ್ವೇದ ೧.೨೫.೧೯, ೧.೨೪.೧೧) — ಹೇಳುತ್ತವೆ. ತಮಿಳು ಮತ್ತು ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು ಅದರ ಬದಲು “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತವೆ; ಕೊನೆಯದನ್ನು ಹೇಳುತ್ತಾ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ. ಮನೆತನದಲ್ಲಿ ಹೇಳುವುದನ್ನೇ ಹೇಳಿ.',
      when: { tradition: ['smarta'], time: ['evening'] },
      verses: [
        {
          text: 'इमं मे वरुण श्रुधी हवमद्या च मृळय ।\nत्वामवस्युरा चके ॥',
          meaning: {
            en: 'O Varuna, hear this call of mine and be gracious to me today; seeking your protection, I call upon you.',
            kn: 'ಓ ವರುಣದೇವ, ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳು, ಇಂದು ನನ್ನ ಮೇಲೆ ಕರುಣೆ ತೋರು. ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬಯಸಿ ನಿನ್ನನ್ನು ಪ್ರಾರ್ಥಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेळमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
          meaning: {
            en: 'Praising you with this hymn, I ask of you what the worshipper seeks with his offerings. Without anger, O Varuna, be attentive to us here; O widely praised one, do not take away our life.',
            kn: 'ಸ್ತೋತ್ರದಿಂದ ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತಾ, ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳ ಮೂಲಕ ಬಯಸುವುದನ್ನೇ ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ. ಓ ವರುಣ, ಕೋಪಗೊಳ್ಳದೆ ಇಲ್ಲಿ ನಮ್ಮನ್ನು ಗಮನಿಸು; ಎಲ್ಲರಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವವನೇ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಬೇಡ.',
          },
        },
        {
          text: 'जातवेदस इत्यस्य मन्त्रस्य कश्यप ऋषिः । दुर्गा जातवेदा अग्निर्देवता ।\nत्रिष्टुप् छन्दः । सन्ध्योपस्थाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “jatavedase”: the seer is Kashyapa, the deity is Agni Jatavedas (also named as Durga), the metre is Trishtubh; it is used for the sandhya upasthana.',
            kn: '“ಜಾತವೇದಸೇ” ಮಂತ್ರಕ್ಕೆ ಕಶ್ಯಪ ಋಷಿ, ಜಾತವೇದ ಅಗ್ನಿ (ದುರ್ಗಾ ಎಂದೂ ಹೇಳುತ್ತಾರೆ) ದೇವತೆ, ತ್ರಿಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಸಂಧ್ಯೋಪಸ್ಥಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।\nस नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥',
          meaning: {
            en: 'For Jatavedas, the knower of all, let us press the Soma; may he burn away the hoard of those who are hostile. As a boat carries across a river, may Agni — for Madhvas, the Lord within him — carry us beyond all difficulties and wrongs.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಜಾತವೇದನಿಗಾಗಿ ಸೋಮವನ್ನು ಅರ್ಪಿಸೋಣ; ಅವನು ಶತ್ರುಗಳ ಸಂಪತ್ತನ್ನು ಸುಟ್ಟುಹಾಕಲಿ. ದೋಣಿಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಅಗ್ನಿಯು (ಮಾಧ್ವರಿಗೆ ಅಗ್ನಿಯ ಅಂತರ್ಯಾಮಿಯಾದ ಭಗವಂತನು) ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದಲೂ ಪಾಪಗಳಿಂದಲೂ ಪಾರುಮಾಡಲಿ.',
          },
        },
        {
          text: 'तच्छंयोरित्यस्य मन्त्रस्य शंयुरृषिः । विश्वे देवा देवताः ।\nशक्वरी छन्दः । शान्त्यर्थे जपे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “tac chamyoh”: the seer is Shamyu, the deities are the Vishvedevas, the metre is Shakvari; it is recited for peace.',
            kn: '“ತಚ್ಛಂಯೋಃ” ಮಂತ್ರಕ್ಕೆ ಶಂಯು ಋಷಿ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆ, ಶಕ್ವರೀ ಛಂದಸ್ಸು; ಶಾಂತಿಗಾಗಿ ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'तच्छंयोरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥',
          meaning: {
            en: 'We pray for that health and happiness: for the success of the sacrifice and of the one who offers it. May divine well-being be ours, and well-being for all people; may healing rise ever higher; may there be welfare for our two-footed and four-footed beings.',
            kn: 'ಆ ಆರೋಗ್ಯ ಸುಖಗಳನ್ನು ಬೇಡುತ್ತೇವೆ: ಯಜ್ಞಕ್ಕೂ ಯಜ್ಞಮಾಡುವವನಿಗೂ ಸಫಲತೆಯಾಗಲಿ. ನಮಗೆ ದೈವಿಕ ಕ್ಷೇಮವೂ ಎಲ್ಲ ಮನುಷ್ಯರಿಗೆ ಕ್ಷೇಮವೂ ಆಗಲಿ; ಔಷಧಶಕ್ತಿ ಮೇಲ್ಮುಖವಾಗಿ ವೃದ್ಧಿಯಾಗಲಿ; ಎರಡು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ನಾಲ್ಕು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          text: 'नमो ब्रह्मणे । नमो अस्त्वग्नये । नमः पृथिव्यै । नम ओषधीभ्यः ।\nनमो वाचे । नमो वाचस्पतये । नमो विष्णवे महते करोमि ॥',
          meaning: {
            en: 'Salutations to Brahman; salutations to Agni; to the Earth; to the healing plants; to Speech and to the Lord of Speech; to the great Vishnu I offer my salutation.',
            kn: 'ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಅಗ್ನಿಗೆ, ಭೂಮಿಗೆ, ಓಷಧಿಗಳಿಗೆ, ವಾಗ್ದೇವಿಗೆ, ವಾಚಸ್ಪತಿಗೆ ನಮಸ್ಕಾರ; ಮಹಾನ್ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Digdevata namaskara (salutation to the directions)',
      note: 'Morning: standing, turn to each direction in turn and bow with folded hands, beginning with the east: east, south, west, north, then upwards, downwards and the mid-space. With each, think of the guardian deities who dwell there with their consorts — Indra and Agni (east, south-east), Yama and Nirriti (south, south-west), Varuna and Vayu (west, north-west), Chandra, Kubera and Rudra (north, north-east), Garuda and Kama (above), Shesha (below), Ganesha and Surya (mid-space) — and of the form of the Lord each of them worships (Uttaradi Matha manual). There is no digdevata namaskara at midday.',
      noteKn: 'ಬೆಳಿಗ್ಗೆ ನಿಂತುಕೊಂಡು, ಪೂರ್ವದಿಂದ ಆರಂಭಿಸಿ ಒಂದೊಂದು ದಿಕ್ಕಿಗೂ ತಿರುಗಿ ಕೈಮುಗಿದು ನಮಸ್ಕರಿಸಿ: ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ನಂತರ ಮೇಲೆ, ಕೆಳಗೆ, ಅಂತರಿಕ್ಷ. ಆಯಾ ದಿಕ್ಕಿನಲ್ಲಿ ಪತ್ನೀಸಹಿತರಾಗಿ ನೆಲೆಸಿರುವ ದಿಗಭಿಮಾನಿ ದೇವತೆಗಳನ್ನು — ಇಂದ್ರ, ಅಗ್ನಿ (ಪೂರ್ವ, ಆಗ್ನೇಯ), ಯಮ, ನಿರೃತಿ (ದಕ್ಷಿಣ, ನೈರೃತ್ಯ), ವರುಣ, ವಾಯು (ಪಶ್ಚಿಮ, ವಾಯವ್ಯ), ಚಂದ್ರ, ಕುಬೇರ, ರುದ್ರ (ಉತ್ತರ, ಈಶಾನ್ಯ), ಗರುಡ, ಮನ್ಮಥ (ಮೇಲೆ), ಶೇಷ (ಕೆಳಗೆ), ವಿನಾಯಕ, ಸೂರ್ಯ (ಅಂತರಿಕ್ಷ) — ಮತ್ತು ಅವರು ಉಪಾಸಿಸುವ ಭಗವಂತನ ರೂಪವನ್ನು ಚಿಂತಿಸಿ (ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕ). ಮಧ್ಯಾಹ್ನ ದಿಗ್ದೇವತಾ ನಮಸ್ಕಾರವಿಲ್ಲ.',
      when: { tradition: ['madhva'], time: ['morning'] },
      verses: [
        {
          text: 'प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nदक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nप्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nउदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nअधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nअन्तरिक्षायै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ॥',
          meaning: {
            en: 'To the east, the south, the west and the north, to the direction above, the direction below and the mid-space — and to the deities who dwell in each of them — salutations again and again.',
            kn: 'ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ ದಿಕ್ಕುಗಳಿಗೂ, ಮೇಲಿನ ಮತ್ತು ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ, ಅಂತರಿಕ್ಷಕ್ಕೂ, ಅವುಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Digdevata namaskara (salutation to the directions)',
      note: 'Evening: standing, begin with the west and go round in order — west, north, east, south, then upwards, downwards and the mid-space — thinking of the guardian deities of each direction and of the form of the Lord they worship.',
      noteKn: 'ಸಾಯಂಕಾಲ ನಿಂತುಕೊಂಡು ಪಶ್ಚಿಮದಿಂದ ಆರಂಭಿಸಿ ಕ್ರಮವಾಗಿ — ಪಶ್ಚಿಮ, ಉತ್ತರ, ಪೂರ್ವ, ದಕ್ಷಿಣ, ನಂತರ ಮೇಲೆ, ಕೆಳಗೆ, ಅಂತರಿಕ್ಷ — ನಮಸ್ಕರಿಸಿ; ಆಯಾ ದಿಕ್ಕಿನ ದಿಗಭಿಮಾನಿ ದೇವತೆಗಳನ್ನೂ ಅವರು ಉಪಾಸಿಸುವ ಭಗವಂತನ ರೂಪವನ್ನೂ ಚಿಂತಿಸಿ.',
      when: { tradition: ['madhva'], time: ['evening'] },
      verses: [
        {
          text: 'प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nउदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nप्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nदक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nअधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ।\nअन्तरिक्षायै दिशे याश्च देवता एतस्यां प्रतिवसन्ति एताभ्यश्च नमो नमः ॥',
          meaning: {
            en: 'To the west, the north, the east and the south, to the direction above, the direction below and the mid-space — and to the deities who dwell in each of them — salutations again and again.',
            kn: 'ಪಶ್ಚಿಮ, ಉತ್ತರ, ಪೂರ್ವ, ದಕ್ಷಿಣ ದಿಕ್ಕುಗಳಿಗೂ, ಮೇಲಿನ ಮತ್ತು ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ, ಅಂತರಿಕ್ಷಕ್ಕೂ, ಅವುಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Digdevata namaskara (salutation to the directions)',
      note: 'Standing, salute the guardians of the eight directions, turning to each — in the morning from the east (Indra), in the evening from the west (Varuna). Then turn round four times where you stand with भूरिदं प्रदक्षिणम्…, and recite one mantra facing each quarter: इन्द्र श्रेष्ठानि… to the east, यमाय धर्मराजाय… to the south, ध्रुवासु त्वासु… to the west and ऋतं सत्यम्… to the north (in the evening begin with the west). This is the form of the Karnataka Rigvedi manuals (Somayaji, Balkur; Somayaji says कुबेराय नमः for the north). Andhra and Tamil manuals instead salute the quarters with नमः प्राच्यै दिशे… (the last verse).',
      noteKn: 'ನಿಂತುಕೊಂಡು ಒಂದೊಂದು ದಿಕ್ಕಿಗೂ ತಿರುಗಿ ಅಷ್ಟದಿಕ್ಪಾಲಕರಿಗೆ ನಮಸ್ಕರಿಸಿ — ಬೆಳಿಗ್ಗೆ ಪೂರ್ವದಿಂದ (ಇಂದ್ರ), ಸಂಜೆ ಪಶ್ಚಿಮದಿಂದ (ವರುಣ). ನಂತರ “ಭೂರಿದಂ ಪ್ರದಕ್ಷಿಣಮ್…” ಎಂದು ನಿಂತಲ್ಲೇ ನಾಲ್ಕು ಬಾರಿ ತಿರುಗಿ, ಒಂದೊಂದು ದಿಕ್ಕಿಗೆ ಮುಖಮಾಡಿ ಒಂದೊಂದು ಮಂತ್ರ ಹೇಳಿ: ಪೂರ್ವಕ್ಕೆ “ಇಂದ್ರ ಶ್ರೇಷ್ಠಾನಿ…”, ದಕ್ಷಿಣಕ್ಕೆ “ಯಮಾಯ ಧರ್ಮರಾಜಾಯ…”, ಪಶ್ಚಿಮಕ್ಕೆ “ಧ್ರುವಾಸು ತ್ವಾಸು…”, ಉತ್ತರಕ್ಕೆ “ಋತಂ ಸತ್ಯಮ್…” (ಸಂಜೆ ಪಶ್ಚಿಮದಿಂದ ಆರಂಭಿಸಿ). ಇದು ಕರ್ನಾಟಕದ ಋಗ್ವೇದಿ ಪುಸ್ತಕಗಳ ಕ್ರಮ (ಸೋಮಯಾಜಿ, ಬಳ್ಕೂರು; ಸೋಮಯಾಜಿಯವರು ಉತ್ತರಕ್ಕೆ “ಕುಬೇರಾಯ ನಮಃ” ಎನ್ನುತ್ತಾರೆ). ಆಂಧ್ರ ಮತ್ತು ತಮಿಳು ಪುಸ್ತಕಗಳು ಅದರ ಬದಲು “ನಮಃ ಪ್ರಾಚ್ಯೈ ದಿಶೇ…” (ಕೊನೆಯ ಮಂತ್ರ) ಎಂದು ದಿಕ್ಕುಗಳಿಗೆ ನಮಸ್ಕರಿಸುತ್ತವೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ इन्द्राय नमः । ॐ अग्नये नमः । ॐ यमाय नमः । ॐ निरृतये नमः ।\nॐ वरुणाय नमः । ॐ वायवे नमः । ॐ सोमाय नमः । ॐ ईशानाय नमः ॥',
          meaning: {
            en: 'Salutations to Indra, Agni, Yama and Nirriti, to Varuna, Vayu, Soma and Ishana — the guardians of the eight directions, beginning with the east.',
            kn: 'ಪೂರ್ವದಿಂದ ಆರಂಭಿಸಿ ಎಂಟು ದಿಕ್ಕುಗಳ ಪಾಲಕರಾದ ಇಂದ್ರ, ಅಗ್ನಿ, ಯಮ, ನಿರೃತಿ, ವರುಣ, ವಾಯು, ಸೋಮ, ಈಶಾನರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ॐ भूरिदं प्रदक्षिणम् । ॐ भुवरिदं प्रदक्षिणम् ।\nॐ सुवरिदं प्रदक्षिणम् । ॐ भूर्भुवस्सुवरिदं प्रदक्षिणम् ॥',
          meaning: {
            en: 'This circumambulation is for Bhuh; this is for Bhuvah; this is for Suvah; this is for Bhuh, Bhuvah and Suvah together.',
            kn: 'ಈ ಪ್ರದಕ್ಷಿಣೆ ಭೂಲೋಕಕ್ಕೆ; ಇದು ಭುವರ್ಲೋಕಕ್ಕೆ; ಇದು ಸುವರ್ಲೋಕಕ್ಕೆ; ಇದು ಮೂರೂ ಲೋಕಗಳಿಗೆ ಒಟ್ಟಾಗಿ.',
          },
        },
        {
          text: 'इन्द्र श्रेष्ठानि द्रविणानि धेहि चित्तिं दक्षस्य सुभगत्वमस्मे ।\nपोषं रयीणामरिष्टिं तनूनां स्वाद्मानं वाचः सुदिनत्वमह्नाम् ॥',
          meaning: {
            en: 'O Indra, grant us the best of riches, clear understanding, skill and good fortune; the increase of wealth, the well-being of our bodies, sweetness of speech and good days.',
            kn: 'ಓ ಇಂದ್ರನೇ, ನಮಗೆ ಶ್ರೇಷ್ಠವಾದ ಸಂಪತ್ತನ್ನೂ, ಸ್ಪಷ್ಟವಾದ ತಿಳಿವನ್ನೂ, ಕೌಶಲವನ್ನೂ, ಸೌಭಾಗ್ಯವನ್ನೂ ಕೊಡು; ಐಶ್ವರ್ಯದ ವೃದ್ಧಿ, ದೇಹಗಳ ಕ್ಷೇಮ, ಮಾತಿನ ಮಾಧುರ್ಯ ಮತ್ತು ಶುಭದಿನಗಳನ್ನು ಕರುಣಿಸು.',
          },
        },
        {
          text: 'यमाय धर्मराजाय मृत्यवे चान्तकाय च ।\nवैवस्वताय कालाय सर्वभूतक्षयाय च ॥\nऔदुम्बराय दध्नाय नीलाय परमेष्ठिने ।\nवृकोदराय चित्राय चित्रगुप्ताय वै नमः ॥',
          meaning: {
            en: 'Salutations to Yama, the king of dharma — to Death, the Ender, the son of Vivasvan, Time, the destroyer of all beings; to Audumbara, Dadhna, Nila, Parameshthin, Vrikodara, Chitra and Chitragupta.',
            kn: 'ಧರ್ಮರಾಜನಾದ ಯಮನಿಗೆ — ಮೃತ್ಯು, ಅಂತಕ, ವೈವಸ್ವತ, ಕಾಲ, ಸರ್ವಭೂತಕ್ಷಯ ಎಂದು ಕರೆಯಲ್ಪಡುವವನಿಗೆ; ಔದುಂಬರ, ದಧ್ನ, ನೀಲ, ಪರಮೇಷ್ಠಿ, ವೃಕೋದರ, ಚಿತ್ರ, ಚಿತ್ರಗುಪ್ತರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ध्रुवासु त्वासु क्षितिषु क्षियन्तो व्यस्मत्पाशं वरुणो मुमोचत् ।\nअवो वन्वाना अदितेरुपस्थाद्यूयं पात स्वस्तिभिः सदा नः ॥',
          meaning: {
            en: 'As we dwell in these firm dwelling-places of yours, may Varuna loosen his noose from us; winning protection from the lap of Aditi, protect us always, O gods, with blessings.',
            kn: 'ನಿನ್ನ ಈ ಸ್ಥಿರವಾದ ನೆಲೆಗಳಲ್ಲಿ ವಾಸಿಸುತ್ತಿರುವ ನಮ್ಮಿಂದ ವರುಣನು ತನ್ನ ಪಾಶವನ್ನು ಬಿಡಿಸಲಿ; ಅದಿತಿಯ ಮಡಿಲಿನಿಂದ ರಕ್ಷಣೆಯನ್ನು ಪಡೆಯುತ್ತಾ, ಓ ದೇವತೆಗಳೇ, ನಮ್ಮನ್ನು ಸದಾ ಮಂಗಳಗಳಿಂದ ಕಾಪಾಡಿರಿ.',
          },
        },
        {
          text: 'ऋतं सत्यं परं ब्रह्म पुरुषं कृष्णपिङ्गलम् ।\nऊर्ध्वरेतं विरूपाक्षं विश्वरूपाय वै नमो नमः ॥',
          meaning: {
            en: 'To him who is Order and Truth, the Supreme Brahman, the Person dark and tawny, of upward-flowing vigour, of uncommon eyes, whose form is the universe: salutations again and again.',
            kn: 'ಋತವೂ ಸತ್ಯವೂ ಪರಬ್ರಹ್ಮವೂ ಆದ, ಕಪ್ಪು-ಕಂದು ವರ್ಣದ ಪುರುಷನಾದ, ಊರ್ಧ್ವರೇತಸ್ಕನಾದ, ವಿಶಿಷ್ಟ ನೇತ್ರಗಳುಳ್ಳ, ವಿಶ್ವರೂಪನಾದ ಪರಮಾತ್ಮನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ॥',
          meaning: {
            en: 'Salutation to the eastern direction and to the deities who dwell in it; likewise to the south, the west, the north, the direction above, the direction below and the intermediate space, and to the deities who dwell in each.',
            kn: 'ಪೂರ್ವ ದಿಕ್ಕಿಗೂ ಅಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ; ಹಾಗೆಯೇ ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ಮೇಲಿನ, ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ ಮಧ್ಯದ ಅವಕಾಶಕ್ಕೂ ಅಲ್ಲಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्यादिदेवतानमस्कारः',
      titleEn: 'Salutation to Sandhya and the deities',
      note: 'Standing with folded hands, salute Sandhya and the other deities, the sages, teachers and parents. With कामोऽकार्षीत्… confess that desire and anger, not your true self, drove your wrongs. Then bow to Vasudeva and Sandhya, to Krishna as the friend of cows and Brahmanas, and take refuge in Durga. Then make a full prostration (sashtanga namaskara).',
      noteKn: 'ನಿಂತು ಕೈಮುಗಿದು ಸಂಧ್ಯಾದೇವಿ ಮುಂತಾದ ದೇವತೆಗಳಿಗೂ ಋಷಿಮುನಿಗಳಿಗೂ ಗುರುಗಳಿಗೂ ತಂದೆತಾಯಿಯರಿಗೂ ನಮಸ್ಕರಿಸಿ. “ಕಾಮೋಽಕಾರ್ಷೀತ್” ಹೇಳುವಾಗ ನನ್ನ ತಪ್ಪುಗಳಿಗೆ ಕಾಮಕ್ರೋಧಗಳೇ ಕಾರಣ ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು. ನಂತರ ವಾಸುದೇವನಿಗೂ ಸಂಧ್ಯಾದೇವಿಗೂ, ಗೋಬ್ರಾಹ್ಮಣಹಿತನಾದ ಶ್ರೀಕೃಷ್ಣನಿಗೂ ನಮಸ್ಕರಿಸಿ, ದುರ್ಗಾದೇವಿಯಲ್ಲಿ ಶರಣು ಹೋಗಿ.',
      when: { tradition: ['madhva'], time: ['morning', 'evening'] },
      verses: [
        {
          text: 'ॐ सन्ध्यायै नमः । सावित्र्यै नमः । गायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमः । मुनिभ्यो नमः । ऋषिभ्यो नमः ।\nगुरुभ्यो नमः । मातृभ्यो नमः । पितृभ्यो नमः । आचार्येभ्यो नमः ।\nकामोऽकार्षीन्नमो नमः । मन्युरकार्षीन्नमो नमः ॥',
          meaning: {
            en: 'Salutations to Sandhya, Savitri, Gayatri and Sarasvati, to all the deities, to the sages and seers, to the gurus, mothers, fathers and teachers. Desire did it, salutations; anger did it, salutations.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ಗಾಯತ್ರೀ, ಸರಸ್ವತೀ ದೇವಿಯರಿಗೂ, ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ, ಮುನಿಗಳಿಗೂ ಋಷಿಗಳಿಗೂ, ಗುರುಗಳಿಗೂ ತಾಯಿತಂದೆಯರಿಗೂ ಆಚಾರ್ಯರಿಗೂ ನಮಸ್ಕಾರ. ಕಾಮವೇ ಮಾಡಿಸಿತು, ನಮಸ್ಕಾರ; ಕ್ರೋಧವೇ ಮಾಡಿಸಿತು, ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ॐ नमो भगवते वासुदेवाय ।\nयां सदा सर्वभूतानि स्थावराणि चराणि च ।\nसायं प्रातर्नमस्यन्ति सा मा सन्ध्याभिरक्षतु ॥',
          meaning: {
            en: 'Om, salutations to Lord Vasudeva. May that Sandhya, to whom all beings, moving and unmoving, bow evening and morning, protect me.',
            kn: 'ಓಂ, ಭಗವಾನ್ ವಾಸುದೇವನಿಗೆ ನಮಸ್ಕಾರ. ಚರಾಚರ ಜೀವಿಗಳೆಲ್ಲವೂ ಸಂಜೆ ಬೆಳಗ್ಗೆ ಯಾರಿಗೆ ನಮಸ್ಕರಿಸುತ್ತವೆಯೋ ಆ ಸಂಧ್ಯಾದೇವತೆ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        {
          text: 'ब्रह्मण्यो देवकीपुत्रो ब्रह्मण्यो मधुसूदनः ।\nब्रह्मण्यः पुण्डरीकाक्षो ब्रह्मण्यो विष्णुरच्युतः ॥\nनमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च ।\nजगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥',
          meaning: {
            en: 'The son of Devaki, Madhusudana, the lotus-eyed one, the imperishable Vishnu — he is devoted to the Veda and its followers. Salutations again and again to Krishna, Govinda, the Lord dear to the Veda-knowers, who works for the good of cows, Brahmanas and the whole world.',
            kn: 'ದೇವಕೀಪುತ್ರನೂ, ಮಧುಸೂದನನೂ, ಪುಂಡರೀಕಾಕ್ಷನೂ, ಅಚ್ಯುತನಾದ ವಿಷ್ಣುವೂ ವೇದಕ್ಕೂ ವೇದನಿಷ್ಠರಿಗೂ ಪ್ರಿಯನಾದವನು. ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಸಮಸ್ತ ಜಗತ್ತಿಗೂ ಹಿತವನ್ನುಂಟುಮಾಡುವ ಬ್ರಹ್ಮಣ್ಯದೇವನಾದ ಶ್ರೀಕೃಷ್ಣ ಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'क्षीरेण स्नापिते देवि चन्दनेन विलेपिते ।\nबिल्वपत्रार्चिते देवि दुर्गेऽहं शरणं गतः ॥',
          meaning: {
            en: 'O Goddess Durga, bathed in milk, anointed with sandal and worshipped with bilva leaves — I have come to you for refuge.',
            kn: 'ಹಾಲಿನಿಂದ ಅಭಿಷಿಕ್ತಳಾದ, ಚಂದನದಿಂದ ಲೇಪಿತಳಾದ, ಬಿಲ್ವಪತ್ರಗಳಿಂದ ಪೂಜಿತಳಾದ ಓ ದುರ್ಗಾದೇವಿ, ನಾನು ನಿನ್ನಲ್ಲಿ ಶರಣು ಬಂದಿದ್ದೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्यादिदेवतानमस्कारः',
      titleEn: 'Salutation to Sandhya and the deities',
      note: 'Standing with folded hands, salute Sandhya and the other deities, the sages, teachers and parents. With कामोऽकार्षीत्… confess that desire and anger, not your true self, drove your wrongs. Then bow to Vasudeva and Sandhya, to Krishna as the friend of cows and Brahmanas, and take refuge in Durga.',
      noteKn: 'ನಿಂತು ಕೈಮುಗಿದು ಸಂಧ್ಯಾದೇವಿ ಮುಂತಾದ ದೇವತೆಗಳಿಗೂ ಋಷಿಮುನಿಗಳಿಗೂ ಗುರುಗಳಿಗೂ ತಂದೆತಾಯಿಯರಿಗೂ ನಮಸ್ಕರಿಸಿ. “ಕಾಮೋಽಕಾರ್ಷೀತ್” ಹೇಳುವಾಗ ನನ್ನ ತಪ್ಪುಗಳಿಗೆ ಕಾಮಕ್ರೋಧಗಳೇ ಕಾರಣ ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು. ನಂತರ ವಾಸುದೇವನಿಗೂ ಸಂಧ್ಯಾದೇವಿಗೂ, ಗೋಬ್ರಾಹ್ಮಣಹಿತನಾದ ಶ್ರೀಕೃಷ್ಣನಿಗೂ ನಮಸ್ಕರಿಸಿ, ದುರ್ಗಾದೇವಿಯಲ್ಲಿ ಶರಣು ಹೋಗಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ सन्ध्यायै नमः । सावित्र्यै नमः । गायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमः । मुनिभ्यो नमः । ऋषिभ्यो नमः ।\nगुरुभ्यो नमः । मातृभ्यो नमः । पितृभ्यो नमः । आचार्येभ्यो नमः ।\nकामोऽकार्षीन्नमो नमः । मन्युरकार्षीन्नमो नमः ॥',
          meaning: {
            en: 'Salutations to Sandhya, Savitri, Gayatri and Sarasvati, to all the deities, to the sages and seers, to the gurus, mothers, fathers and teachers. Desire did it, salutations; anger did it, salutations.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ಗಾಯತ್ರೀ, ಸರಸ್ವತೀ ದೇವಿಯರಿಗೂ, ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ, ಮುನಿಗಳಿಗೂ ಋಷಿಗಳಿಗೂ, ಗುರುಗಳಿಗೂ ತಾಯಿತಂದೆಯರಿಗೂ ಆಚಾರ್ಯರಿಗೂ ನಮಸ್ಕಾರ. ಕಾಮವೇ ಮಾಡಿಸಿತು, ನಮಸ್ಕಾರ; ಕ್ರೋಧವೇ ಮಾಡಿಸಿತು, ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ॐ नमो भगवते वासुदेवाय ।\nयां सदा सर्वभूतानि स्थावराणि चराणि च ।\nसायं प्रातर्नमस्यन्ति सा मा सन्ध्याभिरक्षतु ॥',
          meaning: {
            en: 'Om, salutations to Lord Vasudeva. May that Sandhya, to whom all beings, moving and unmoving, bow evening and morning, protect me.',
            kn: 'ಓಂ, ಭಗವಾನ್ ವಾಸುದೇವನಿಗೆ ನಮಸ್ಕಾರ. ಚರಾಚರ ಜೀವಿಗಳೆಲ್ಲವೂ ಸಂಜೆ ಬೆಳಗ್ಗೆ ಯಾರಿಗೆ ನಮಸ್ಕರಿಸುತ್ತವೆಯೋ ಆ ಸಂಧ್ಯಾದೇವತೆ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        {
          text: 'ब्रह्मण्यो देवकीपुत्रो ब्रह्मण्यो मधुसूदनः ।\nब्रह्मण्यः पुण्डरीकाक्षो ब्रह्मण्यो विष्णुरच्युतः ॥\nनमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च ।\nजगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥',
          meaning: {
            en: 'The son of Devaki, Madhusudana, the lotus-eyed one, the imperishable Vishnu — he is devoted to the Veda and its followers. Salutations again and again to Krishna, Govinda, the Lord dear to the Veda-knowers, who works for the good of cows, Brahmanas and the whole world.',
            kn: 'ದೇವಕೀಪುತ್ರನೂ, ಮಧುಸೂದನನೂ, ಪುಂಡರೀಕಾಕ್ಷನೂ, ಅಚ್ಯುತನಾದ ವಿಷ್ಣುವೂ ವೇದಕ್ಕೂ ವೇದನಿಷ್ಠರಿಗೂ ಪ್ರಿಯನಾದವನು. ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಸಮಸ್ತ ಜಗತ್ತಿಗೂ ಹಿತವನ್ನುಂಟುಮಾಡುವ ಬ್ರಹ್ಮಣ್ಯದೇವನಾದ ಶ್ರೀಕೃಷ್ಣ ಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'शिवाय विष्णुरूपाय शिवरूपाय विष्णवे ।\nशिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः ॥\nयथा शिवमयो विष्णुरेवं विष्णुमयः शिवः ।\nयथान्तरं न पश्यामि तथा मे स्वस्तिरायुषि ॥',
          meaning: {
            en: 'Salutations to Shiva in the form of Vishnu and to Vishnu in the form of Shiva; Vishnu is the heart of Shiva and Shiva the heart of Vishnu. As Vishnu is full of Shiva and Shiva full of Vishnu, and I see no difference between them, so may there be well-being in my life.',
            kn: 'ವಿಷ್ಣುರೂಪನಾದ ಶಿವನಿಗೂ ಶಿವರೂಪನಾದ ವಿಷ್ಣುವಿಗೂ ನಮಸ್ಕಾರ; ಶಿವನ ಹೃದಯ ವಿಷ್ಣು, ವಿಷ್ಣುವಿನ ಹೃದಯ ಶಿವ. ವಿಷ್ಣುವು ಶಿವಮಯನಾಗಿರುವಂತೆ ಶಿವನು ವಿಷ್ಣುಮಯನು; ಅವರಲ್ಲಿ ನಾನು ಭೇದವನ್ನು ಕಾಣದಿರುವಂತೆಯೇ ನನ್ನ ಆಯುಷ್ಯದಲ್ಲಿ ಕ್ಷೇಮವಿರಲಿ.',
          },
        },
        {
          text: 'क्षीरेण स्नापिते देवि चन्दनेन विलेपिते ।\nबिल्वपत्रार्चिते देवि दुर्गेऽहं शरणं गतः ॥',
          meaning: {
            en: 'O Goddess Durga, bathed in milk, anointed with sandal and worshipped with bilva leaves — I have come to you for refuge.',
            kn: 'ಹಾಲಿನಿಂದ ಅಭಿಷಿಕ್ತಳಾದ, ಚಂದನದಿಂದ ಲೇಪಿತಳಾದ, ಬಿಲ್ವಪತ್ರಗಳಿಂದ ಪೂಜಿತಳಾದ ಓ ದುರ್ಗಾದೇವಿ, ನಾನು ನಿನ್ನಲ್ಲಿ ಶರಣು ಬಂದಿದ್ದೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'गायत्र्युद्वासनम्',
      titleEn: 'Gayatri udvasana (farewell)',
      note: 'With folded hands bid Gayatri farewell, then recite the verses offering all salutations to Keshava and bow.',
      noteKn: 'ಕೈಮುಗಿದು ಗಾಯತ್ರಿಯನ್ನು ಬೀಳ್ಕೊಡಿ; ನಂತರ ಎಲ್ಲ ನಮಸ್ಕಾರಗಳನ್ನೂ ಕೇಶವನಿಗೆ ಅರ್ಪಿಸುವ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ ನಮಸ್ಕರಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'उत्तमे शिखरे जाते भूम्यां पर्वतमूर्धनि ।\nब्राह्मणेभ्योऽभ्यनुज्ञाता गच्छ देवि यथासुखम् ॥',
          meaning: {
            en: 'O Goddess, dwelling on the highest peak, on the summit of the mountain on earth: with the leave of the Brahmanas, go now as you please.',
            kn: 'ಭೂಮಿಯ ಮೇಲಿನ ಪರ್ವತದ ಉನ್ನತ ಶಿಖರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಓ ದೇವಿ, ಬ್ರಾಹ್ಮಣರ ಅನುಮತಿಯೊಂದಿಗೆ ನಿನಗೆ ಸುಖವಾಗುವಂತೆ ತೆರಳು.',
          },
        },
        {
          text: 'आकाशात्पतितं तोयं यथा गच्छति सागरम् ।\nसर्वदेवनमस्कारः केशवं प्रति गच्छति ॥',
          meaning: {
            en: 'Just as all water falling from the sky flows on to the ocean, salutations offered to any deity reach Keshava.',
            kn: 'ಆಕಾಶದಿಂದ ಬಿದ್ದ ನೀರೆಲ್ಲವೂ ಕೊನೆಗೆ ಸಮುದ್ರವನ್ನೇ ಸೇರುವಂತೆ, ಯಾವ ದೇವತೆಗೆ ಮಾಡಿದ ನಮಸ್ಕಾರವೂ ಕೇಶವನನ್ನೇ ಸೇರುತ್ತದೆ.',
          },
        },
        {
          text: 'वासनाद्वासुदेवस्य वासितं ते जगत्त्रयम् ।\nसर्वभूतनिवासोऽसि वासुदेव नमोऽस्तु ते ॥',
          meaning: {
            en: 'O Vasudeva, the three worlds are pervaded by you because you dwell in them; you are the abode of all beings — salutations to you.',
            kn: 'ಓ ವಾಸುದೇವ, ನೀನು ವಾಸಿಸಿರುವುದರಿಂದಲೇ ಮೂರು ಲೋಕಗಳೂ ನಿನ್ನಿಂದ ವ್ಯಾಪ್ತವಾಗಿವೆ; ಸಮಸ್ತ ಜೀವಿಗಳ ನೆಲೆ ನೀನೇ — ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'नमोऽस्त्वनन्ताय सहस्रमूर्तये\nसहस्रपादाक्षिशिरोरुबाहवे ।\nसहस्रनाम्ने पुरुषाय शाश्वते\nसहस्रकोटियुगधारिणे नमः ॥',
          meaning: {
            en: 'Salutations to the infinite Lord of a thousand forms, with a thousand feet, eyes, heads, thighs and arms; to the eternal Person of a thousand names, who upholds thousands of crores of ages.',
            kn: 'ಸಾವಿರ ರೂಪಗಳ, ಸಾವಿರ ಪಾದ, ಕಣ್ಣು, ತಲೆ, ತೊಡೆ, ತೋಳುಗಳುಳ್ಳ ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ; ಸಾವಿರ ನಾಮಗಳ, ಸಾವಿರಾರು ಕೋಟಿ ಯುಗಗಳನ್ನು ಧರಿಸುವ ಶಾಶ್ವತ ಪುರುಷನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'गायत्र्युद्वासनम्',
      titleEn: 'Gayatri udvasana (farewell)',
      note: 'With folded hands say the viniyoga and bid the Gayatri farewell with उत्तमे शिखरे…, then recite the verses offering all salutations to Keshava and bow.',
      noteKn: 'ಕೈಮುಗಿದು ವಿನಿಯೋಗ ಹೇಳಿ “ಉತ್ತಮೇ ಶಿಖರೇ…” ಎಂದು ಗಾಯತ್ರಿಯನ್ನು ಬೀಳ್ಕೊಡಿ; ನಂತರ ಎಲ್ಲ ನಮಸ್ಕಾರಗಳನ್ನೂ ಕೇಶವನಿಗೆ ಅರ್ಪಿಸುವ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ ನಮಸ್ಕರಿಸಿ.',
      when: { tradition: ['madhva'], time: ['morning', 'evening'] },
      verses: [
        {
          text: 'उत्तम इत्यस्य वामदेव ऋषिः । गायत्री देवता । अनुष्टुप् छन्दः ।\nगायत्र्युद्वासने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “uttame” the seer is Vamadeva, the deity Gayatri, the metre anushtubh; it is applied in bidding farewell to the Gayatri.',
            kn: '"ಉತ್ತಮೇ" ಮಂತ್ರಕ್ಕೆ ವಾಮದೇವ ಋಷಿ, ಗಾಯತ್ರೀ ದೇವತೆ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಗಾಯತ್ರೀ ಉದ್ವಾಸನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'उत्तमे शिखरे जाते भूम्यां पर्वतमूर्धनि ।\nब्राह्मणेभ्योऽभ्यनुज्ञाता गच्छ देवि यथासुखम् ॥',
          meaning: {
            en: 'O Goddess, dwelling on the highest peak, on the summit of the mountain on earth: with the leave of the Brahmanas, go now as you please.',
            kn: 'ಭೂಮಿಯ ಮೇಲಿನ ಪರ್ವತದ ಉನ್ನತ ಶಿಖರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಓ ದೇವಿ, ಬ್ರಾಹ್ಮಣರ ಅನುಮತಿಯೊಂದಿಗೆ ನಿನಗೆ ಸುಖವಾಗುವಂತೆ ತೆರಳು.',
          },
        },
        {
          text: 'आकाशात्पतितं तोयं यथा गच्छति सागरम् ।\nसर्वदेवनमस्कारः केशवं प्रति गच्छति ॥',
          meaning: {
            en: 'Just as all water falling from the sky flows on to the ocean, salutations offered to any deity reach Keshava.',
            kn: 'ಆಕಾಶದಿಂದ ಬಿದ್ದ ನೀರೆಲ್ಲವೂ ಕೊನೆಗೆ ಸಮುದ್ರವನ್ನೇ ಸೇರುವಂತೆ, ಯಾವ ದೇವತೆಗೆ ಮಾಡಿದ ನಮಸ್ಕಾರವೂ ಕೇಶವನನ್ನೇ ಸೇರುತ್ತದೆ.',
          },
        },
        {
          text: 'वासनाद्वासुदेवस्य वासितं ते जगत्त्रयम् ।\nसर्वभूतनिवासोऽसि वासुदेव नमोऽस्तु ते ॥',
          meaning: {
            en: 'O Vasudeva, the three worlds are pervaded by you because you dwell in them; you are the abode of all beings — salutations to you.',
            kn: 'ಓ ವಾಸುದೇವ, ನೀನು ವಾಸಿಸಿರುವುದರಿಂದಲೇ ಮೂರು ಲೋಕಗಳೂ ನಿನ್ನಿಂದ ವ್ಯಾಪ್ತವಾಗಿವೆ; ಸಮಸ್ತ ಜೀವಿಗಳ ನೆಲೆ ನೀನೇ — ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'नमोऽस्त्वनन्ताय सहस्रमूर्तये\nसहस्रपादाक्षिशिरोरुबाहवे ।\nसहस्रनाम्ने पुरुषाय शाश्वते\nसहस्रकोटियुगधारिणे नमः ॥',
          meaning: {
            en: 'Salutations to the infinite Lord of a thousand forms, with a thousand feet, eyes, heads, thighs and arms; to the eternal Person of a thousand names, who upholds thousands of crores of ages.',
            kn: 'ಸಾವಿರ ರೂಪಗಳ, ಸಾವಿರ ಪಾದ, ಕಣ್ಣು, ತಲೆ, ತೊಡೆ, ತೋಳುಗಳುಳ್ಳ ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ; ಸಾವಿರ ನಾಮಗಳ, ಸಾವಿರಾರು ಕೋಟಿ ಯುಗಗಳನ್ನು ಧರಿಸುವ ಶಾಶ್ವತ ಪುರುಷನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'गोत्राभिवादनम्',
      titleEn: 'Abhivadana (formal self-introduction)',
      note: 'Recite the peace prayer and blessing. Then, for abhivadana, hold the right ear with the left hand and the left ear with the right hand (arms crossed), and give your pravara (the names of the rishis of your gotra), gotra, sutra, shakha and name in place of the अमुक words; at the end bow and touch the ground. Do achamana twice afterwards. If you do not know your pravara, ask your elders or purohita; Kshatriyas say वर्मा and Vaishyas गुप्तः in place of शर्मा.',
      noteKn: 'ಶಾಂತಿಮಂತ್ರ ಮತ್ತು ಆಶೀರ್ವಾದ ವಾಕ್ಯಗಳನ್ನು ಹೇಳಿ. ನಂತರ ಅಭಿವಾದನಕ್ಕೆ ಕೈಗಳನ್ನು ಅಡ್ಡವಾಗಿಸಿ ಎಡಗೈಯಿಂದ ಬಲ ಕಿವಿಯನ್ನೂ ಬಲಗೈಯಿಂದ ಎಡ ಕಿವಿಯನ್ನೂ ಹಿಡಿದು, “ಅಮುಕ” ಎಂದಿರುವಲ್ಲಿ ನಿಮ್ಮ ಪ್ರವರ (ಗೋತ್ರದ ಋಷಿಗಳ ಹೆಸರುಗಳು), ಗೋತ್ರ, ಸೂತ್ರ, ಶಾಖೆ ಮತ್ತು ಹೆಸರನ್ನು ಹೇಳಿ; ಕೊನೆಯಲ್ಲಿ ಬಾಗಿ ನೆಲವನ್ನು ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಿ. ನಂತರ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. ಪ್ರವರ ತಿಳಿಯದಿದ್ದರೆ ಹಿರಿಯರನ್ನು ಅಥವಾ ಪುರೋಹಿತರನ್ನು ಕೇಳಿ; ಕ್ಷತ್ರಿಯರು “ಶರ್ಮಾ” ಬದಲು “ವರ್ಮಾ”, ವೈಶ್ಯರು “ಗುಪ್ತಃ” ಎನ್ನುತ್ತಾರೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ भद्रं नो अपि वातय मनः ।\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'Inspire our minds towards what is good. Om, peace, peace, peace.',
            kn: 'ನಮ್ಮ ಮನಸ್ಸನ್ನು ಶುಭದ ಕಡೆಗೆ ಪ್ರೇರೇಪಿಸು. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
        {
          text: 'सर्वारिष्टशान्तिरस्तु । समस्तमङ्गलावाप्तिरस्तु ।\nचतुःसागरपर्यन्तं गोब्राह्मणेभ्यः शुभं भवतु ॥',
          meaning: {
            en: 'May all misfortunes be stilled; may every blessing be attained. May there be good to cows and Brahmanas as far as the four oceans.',
            kn: 'ಎಲ್ಲ ಅರಿಷ್ಟಗಳೂ ಶಾಂತವಾಗಲಿ; ಸಮಸ್ತ ಮಂಗಳಗಳೂ ಲಭಿಸಲಿ. ನಾಲ್ಕು ಸಮುದ್ರಗಳವರೆಗಿನ ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಶುಭವಾಗಲಿ.',
          },
        },
        {
          text: 'अमुकप्रवरान्वित अमुकगोत्रः आश्वलायनसूत्रः\nऋक्शाखाध्यायी अमुकशर्माहं भो अभिवादये ॥',
          meaning: {
            en: 'I, so-and-so Sharma, of such-and-such gotra with its pravara, following the Ashvalayana sutra and studying the Rigveda shakha, offer my respectful salutation.',
            kn: 'ಇಂತಹ ಪ್ರವರದಿಂದ ಕೂಡಿದ ಇಂತಹ ಗೋತ್ರದ, ಆಶ್ವಲಾಯನ ಸೂತ್ರದ, ಋಕ್‌ಶಾಖೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಇಂತಹ ಶರ್ಮನಾದ ನಾನು ವಿನಯದಿಂದ ಅಭಿವಾದನ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'गोत्राभिवादनम्',
      titleEn: 'Abhivadana (formal self-introduction)',
      note: 'Recite the peace prayer and blessing. Then, for abhivadana, hold the right ear with the left hand and the left ear with the right hand (arms crossed), say your pravara, gotra, Veda, sutra, shakha and name in place of the अमुक words, and bow touching the ground. Do achamana twice afterwards. If you do not know your pravara, ask your elders or purohita; Kshatriyas say वर्मा and Vaishyas गुप्तः in place of शर्मा.',
      noteKn: 'ಶಾಂತಿಮಂತ್ರ ಮತ್ತು ಆಶೀರ್ವಾದ ವಾಕ್ಯಗಳನ್ನು ಹೇಳಿ. ನಂತರ ಅಭಿವಾದನಕ್ಕೆ ಕೈಗಳನ್ನು ಅಡ್ಡವಾಗಿಸಿ ಎಡಗೈಯಿಂದ ಬಲ ಕಿವಿಯನ್ನೂ ಬಲಗೈಯಿಂದ ಎಡ ಕಿವಿಯನ್ನೂ ಹಿಡಿದು, “ಅಮುಕ” ಎಂದಿರುವಲ್ಲಿ ನಿಮ್ಮ ಪ್ರವರ, ಗೋತ್ರ, ವೇದ, ಸೂತ್ರ, ಶಾಖೆ ಮತ್ತು ಹೆಸರನ್ನು ಹೇಳಿ ನೆಲವನ್ನು ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಿ. ನಂತರ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. ಪ್ರವರ ತಿಳಿಯದಿದ್ದರೆ ಹಿರಿಯರನ್ನು ಅಥವಾ ಪುರೋಹಿತರನ್ನು ಕೇಳಿ; ಕ್ಷತ್ರಿಯರು “ಶರ್ಮಾ” ಬದಲು “ವರ್ಮಾ”, ವೈಶ್ಯರು “ಗುಪ್ತಃ” ಎನ್ನುತ್ತಾರೆ.',
      when: { tradition: ['madhva'], time: ['morning', 'evening'] },
      verses: [
        {
          text: 'ॐ भद्रं नो अपि वातय मनः ।\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'Inspire our minds towards what is good. Om, peace, peace, peace.',
            kn: 'ನಮ್ಮ ಮನಸ್ಸನ್ನು ಶುಭದ ಕಡೆಗೆ ಪ್ರೇರೇಪಿಸು. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
        {
          text: 'सर्वारिष्टशान्तिरस्तु । समस्तमङ्गलावाप्तिरस्तु ।\nचतुःसागरपर्यन्तं गोब्राह्मणेभ्यः शुभं भवतु ॥',
          meaning: {
            en: 'May all misfortunes be stilled; may every blessing be attained. May there be good to cows and Brahmanas as far as the four oceans.',
            kn: 'ಎಲ್ಲ ಅರಿಷ್ಟಗಳೂ ಶಾಂತವಾಗಲಿ; ಸಮಸ್ತ ಮಂಗಳಗಳೂ ಲಭಿಸಲಿ. ನಾಲ್ಕು ಸಮುದ್ರಗಳವರೆಗಿನ ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಶುಭವಾಗಲಿ.',
          },
        },
        {
          text: 'अमुकप्रवरान्वित अमुकगोत्रोत्पन्नः ऋग्वेदस्य आश्वलायनसूत्रः\nशाकल्यशाखाध्यायी अमुकशर्मा अहं भो अभिवादये ॥',
          meaning: {
            en: 'I, so-and-so Sharma, born in such-and-such gotra with such-and-such pravara, following the Ashvalayana sutra of the Rigveda and studying the Shakala shakha, offer my salutation.',
            kn: 'ಇಂತಹ ಪ್ರವರದಿಂದ ಕೂಡಿದ ಇಂತಹ ಗೋತ್ರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಋಗ್ವೇದದ ಆಶ್ವಲಾಯನ ಸೂತ್ರವನ್ನು ಅನುಸರಿಸುವ, ಶಾಕಲ ಶಾಖೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಇಂತಹ ಹೆಸರಿನ ಶರ್ಮನಾದ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Samarpana (offering the worship to the Lord)',
      note: 'Take water in the right hand and recite: यस्य स्मृत्या…, मन्त्रहीनं…, then the dedication for the time of day followed by your tradition’s wording, and pour the water into the plate. Do achamana twice. To make good any fault in mantra, tone or syllable, say the sankalpa and the three names Achyuta, Ananta, Govinda (three times). Close with कायेन वाचा….',
      noteKn: 'ಬಲಗೈಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು “ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ”, “ಮಂತ್ರಹೀನಂ”, ನಂತರ ಆ ಕಾಲದ ಸಮರ್ಪಣ ವಾಕ್ಯ ಮತ್ತು ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ವಾಕ್ಯವನ್ನು ಹೇಳಿ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಿ. ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. ಮಂತ್ರ, ಸ್ವರ, ಅಕ್ಷರಗಳಲ್ಲಾದ ದೋಷಗಳ ಪರಿಹಾರಕ್ಕೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಅಚ್ಯುತ, ಅನಂತ, ಗೋವಿಂದ ಎಂಬ ಮೂರು ನಾಮಗಳನ್ನು (ಮೂರು ಬಾರಿ) ಜಪಿಸಿ. “ಕಾಯೇನ ವಾಚಾ” ಶ್ಲೋಕದಿಂದ ಮುಗಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपःसन्ध्याक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'By remembering him and uttering his name, whatever is lacking in austerity, sandhya and other rites is at once made complete: I bow to that Achyuta.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸುವುದರಿಂದಲೂ ಯಾರ ನಾಮವನ್ನು ಉಚ್ಚರಿಸುವುದರಿಂದಲೂ ತಪಸ್ಸು, ಸಂಧ್ಯೆ ಮುಂತಾದ ಕರ್ಮಗಳಲ್ಲಿನ ಕೊರತೆ ತಕ್ಷಣ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ವಂದಿಸುತ್ತೇನೆ.',
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
          when: { time: ['morning'] },
          text: 'अनेन प्रातःसन्ध्यावन्दनेन',
          meaning: {
            en: 'By this morning sandhya worship',
            kn: 'ಈ ಪ್ರಾತಃಸಂಧ್ಯಾವಂದನೆಯಿಂದ',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'अनेन माध्याह्निकसन्ध्यावन्दनेन',
          meaning: {
            en: 'By this midday sandhya worship',
            kn: 'ಈ ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯಾವಂದನೆಯಿಂದ',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'अनेन सायंसन्ध्यावन्दनेन',
          meaning: {
            en: 'By this evening sandhya worship',
            kn: 'ಈ ಸಾಯಂಸಂಧ್ಯಾವಂದನೆಯಿಂದ',
          },
        },
        {
          text: 'भगवान् भारतीरमणमुख्यप्राणान्तर्गत\nसवितृनामक श्रीलक्ष्मीनारायणः प्रीयताम् ।\nप्रीतो वरदो भवतु । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: '…may Lord Sri Lakshminarayana, named Savitri, dwelling within Mukhyaprana the consort of Bharati, be pleased; being pleased, may he grant his blessings. May it be an offering to Sri Krishna.',
            kn: '…ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ; ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡುವವನಾಗಲಿ. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
        {
          text: 'मध्ये मन्त्रतन्त्रस्वरवर्णलोपदोषप्रायश्चित्तार्थं नामत्रयमन्त्रजपं करिष्ये ।\nअच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ।\nअच्युतानन्तगोविन्देभ्यो नमः ॥',
          meaning: {
            en: 'To atone for any omission or fault in mantra, procedure, tone or syllable during the rite, I shall recite the three names: salutations to Achyuta, to Ananta, to Govinda; salutations to Achyuta, Ananta and Govinda.',
            kn: 'ಕರ್ಮದ ನಡುವೆ ಮಂತ್ರ, ತಂತ್ರ, ಸ್ವರ, ವರ್ಣಗಳಲ್ಲಾದ ಲೋಪದೋಷಗಳ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ ನಾಮತ್ರಯ ಜಪ ಮಾಡುತ್ತೇನೆ: ಅಚ್ಯುತನಿಗೆ, ಅನಂತನಿಗೆ, ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ; ಅಚ್ಯುತ–ಅನಂತ–ಗೋವಿಂದರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Narayana.',
            kn: 'ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Samarpana (offering the worship to the Lord)',
      note: 'Take water in the right hand and recite: यस्य स्मृत्या…, मन्त्रहीनं…, then the dedication for the time of day followed by your tradition’s wording, and pour the water into the plate. Do achamana twice. To make good any fault in mantra, tone or syllable, say the sankalpa and the three names Achyuta, Ananta, Govinda (three times). Close with कायेन वाचा….',
      noteKn: 'ಬಲಗೈಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು “ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ”, “ಮಂತ್ರಹೀನಂ”, ನಂತರ ಆ ಕಾಲದ ಸಮರ್ಪಣ ವಾಕ್ಯ ಮತ್ತು ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ವಾಕ್ಯವನ್ನು ಹೇಳಿ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಿ. ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. ಮಂತ್ರ, ಸ್ವರ, ಅಕ್ಷರಗಳಲ್ಲಾದ ದೋಷಗಳ ಪರಿಹಾರಕ್ಕೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಅಚ್ಯುತ, ಅನಂತ, ಗೋವಿಂದ ಎಂಬ ಮೂರು ನಾಮಗಳನ್ನು (ಮೂರು ಬಾರಿ) ಜಪಿಸಿ. “ಕಾಯೇನ ವಾಚಾ” ಶ್ಲೋಕದಿಂದ ಮುಗಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपःसन्ध्याक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'By remembering him and uttering his name, whatever is lacking in austerity, sandhya and other rites is at once made complete: I bow to that Achyuta.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸುವುದರಿಂದಲೂ ಯಾರ ನಾಮವನ್ನು ಉಚ್ಚರಿಸುವುದರಿಂದಲೂ ತಪಸ್ಸು, ಸಂಧ್ಯೆ ಮುಂತಾದ ಕರ್ಮಗಳಲ್ಲಿನ ಕೊರತೆ ತಕ್ಷಣ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'O Janardana, whatever I have done lacking in mantra, in action or in devotion — O God, may it be made complete for me.',
            kn: 'ಓ ಜನಾರ್ದನ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿಂದ ನಾನು ಏನು ಮಾಡಿದ್ದೇನೋ, ಓ ದೇವ, ಅದು ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'अनेन प्रातःसन्ध्यावन्दनेन',
          meaning: {
            en: 'By this morning sandhya worship',
            kn: 'ಈ ಪ್ರಾತಃಸಂಧ್ಯಾವಂದನೆಯಿಂದ',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'अनेन माध्याह्निकसन्ध्यावन्दनेन',
          meaning: {
            en: 'By this midday sandhya worship',
            kn: 'ಈ ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯಾವಂದನೆಯಿಂದ',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'अनेन सायंसन्ध्यावन्दनेन',
          meaning: {
            en: 'By this evening sandhya worship',
            kn: 'ಈ ಸಾಯಂಸಂಧ್ಯಾವಂದನೆಯಿಂದ',
          },
        },
        {
          text: 'भगवान् सर्वात्मकः प्रीयताम् ।\nसर्वं श्रीपरमेश्वरार्पणमस्तु ॥',
          meaning: {
            en: '…may the Lord, the Self of all, be pleased. May all this be an offering to the Supreme Lord.',
            kn: '…ಸರ್ವಾತ್ಮಕನಾದ ಭಗವಂತನು ಪ್ರೀತನಾಗಲಿ. ಎಲ್ಲವೂ ಪರಮೇಶ್ವರನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
        {
          text: 'मध्ये मन्त्रतन्त्रस्वरवर्णलोपदोषप्रायश्चित्तार्थं नामत्रयमन्त्रजपं करिष्ये ।\nअच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ।\nअच्युतानन्तगोविन्देभ्यो नमः ॥',
          meaning: {
            en: 'To atone for any omission or fault in mantra, procedure, tone or syllable during the rite, I shall recite the three names: salutations to Achyuta, to Ananta, to Govinda; salutations to Achyuta, Ananta and Govinda.',
            kn: 'ಕರ್ಮದ ನಡುವೆ ಮಂತ್ರ, ತಂತ್ರ, ಸ್ವರ, ವರ್ಣಗಳಲ್ಲಾದ ಲೋಪದೋಷಗಳ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ ನಾಮತ್ರಯ ಜಪ ಮಾಡುತ್ತೇನೆ: ಅಚ್ಯುತನಿಗೆ, ಅನಂತನಿಗೆ, ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ; ಅಚ್ಯುತ–ಅನಂತ–ಗೋವಿಂದರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Narayana.',
            kn: 'ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'स्थानप्रोक्षणम्',
      titleEn: 'Sprinkling the place (where practised)',
      note: 'Many Karnataka families finish by sprinkling a ladle of water on the place where they sat, reciting these two riks to Savitri (Rigveda 5.82.4–5), touching the moistened ground and applying a little of it to the forehead — it is said that if the place of japa is not sprinkled, Indra takes away its merit.',
      noteKn: 'ಕರ್ನಾಟಕದ ಅನೇಕ ಮನೆತನಗಳಲ್ಲಿ ಕೊನೆಯಲ್ಲಿ ಕುಳಿತ ಸ್ಥಳಕ್ಕೆ ಒಂದು ಉದ್ಧರಣೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ಸವಿತೃವಿನ ಈ ಎರಡು ಋಕ್ಕುಗಳನ್ನು (ಋಗ್ವೇದ ೫.೮೨.೪–೫) ಹೇಳುತ್ತಾ ಒದ್ದೆಯಾದ ನೆಲವನ್ನು ಮುಟ್ಟಿ ಸ್ವಲ್ಪವನ್ನು ಹಣೆಗೆ ಹಚ್ಚಿಕೊಳ್ಳುತ್ತಾರೆ — ಜಪಸ್ಥಾನವನ್ನು ಪ್ರೋಕ್ಷಿಸದಿದ್ದರೆ ಅದರ ಫಲವನ್ನು ಇಂದ್ರನು ಕೊಂಡೊಯ್ಯುತ್ತಾನೆ ಎಂಬ ಮಾತಿದೆ.',
      verses: [
        {
          text: 'अद्या नो देव सवितः प्रजावत्सावीः सौभगम् ।\nपरा दुष्ष्वप्न्यं सुव ॥',
          meaning: {
            en: 'O god Savitri, today send us good fortune with offspring; drive away bad dreams.',
            kn: 'ಓ ಸವಿತೃದೇವ, ಇಂದು ನಮಗೆ ಸಂತಾನಸಹಿತವಾದ ಸೌಭಾಗ್ಯವನ್ನು ಕರುಣಿಸು; ದುಃಸ್ವಪ್ನಗಳನ್ನು ದೂರಮಾಡು.',
          },
        },
        {
          text: 'विश्वानि देव सवितर्दुरितानि परा सुव ।\nयद्भद्रं तन्न आ सुव ॥',
          meaning: {
            en: 'O god Savitri, drive away all evils; send us whatever is good.',
            kn: 'ಓ ಸವಿತೃದೇವ, ಎಲ್ಲ ದುರಿತಗಳನ್ನೂ ದೂರಮಾಡು; ಯಾವುದು ಮಂಗಳಕರವೋ ಅದನ್ನು ನಮಗೆ ಕರುಣಿಸು.',
          },
        },
      ],
    },
  ],
};
