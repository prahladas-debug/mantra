/**
 * Rigvediya (Ashvalayana, Shakala) Sandhyavandanam — morning, midday and evening, with
 * Madhva and Smarta forms as practised in Karnataka. Each step is a section per tradition
 * (and per time where the rubric differs), so the reader sees one clear instruction
 * (note / noteKn) followed by the mantras, as in a printed pocket manual.
 * NOT YET PROOFREAD against a printed manual.
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
  contentNote: 'Not yet proofread page by page against one printed manual; families differ in small details, so follow your elders where they differ. Not included, because no two reliable sources agreed: separate morning / midday / evening Gayatri dhyana shlokas; a separate Madhva midday upasthana (the morning mantras are used); the pratichakshva… rik before the Madhva prayaschitta arghya; the dikpala / navagraha tarpana list; tattva-nyasa and matrika-nyasa (only for those initiated into them); the eight closing mudras; and Smarta additions such as tryambakam… and syona prithivi….',
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
      title: 'आचमनम्',
      titleEn: 'Achamana (sipping water) — twice',
      note: 'Hollow the right palm into the gokarna shape (like a cow’s ear) and pour into it, from the uddharane, water enough to cover a grain of black gram. With Keshava, Narayana and Madhava sip it three times from the base of the palm (brahma-tirtha), without noise. Then, with the remaining names: Govinda — wash the right palm with the left; Vishnu — wash the left palm with the right; Madhusudana — touch the upper lip; Trivikrama — the lower lip; Vamana — the right cheek; Shridhara — the left cheek; Hrishikesha — wash both hands; Padmanabha — touch the feet; Damodara — the crown of the head with the middle finger; Sankarshana — the tip of the nose with the middle finger; Vasudeva and Pradyumna — the right and left nostril with thumb and index finger; Aniruddha and Purushottama — the right and left eye; Adhokshaja and Narasimha — the right and left ear; Achyuta — the navel; Janardana — the heart with the palm; Upendra — the head; Hari and Sri Krishna — the right and left shoulder with all the fingers. At the start of sandhya go through the whole achamana twice (dvirachamana). Later, “achamana” means once through, unless twice is said.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಹಸುವಿನ ಕಿವಿಯಂತೆ ಗೋಕರ್ಣಾಕಾರದಲ್ಲಿ ಮಡಚಿ, ಉದ್ಧರಣೆಯಿಂದ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ಹಾಕಿಕೊಳ್ಳಿ. ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಮೂರು ನಾಮಗಳಿಂದ ಅಂಗೈಯ ಬುಡದಿಂದ (ಬ್ರಹ್ಮತೀರ್ಥ) ಶಬ್ದ ಮಾಡದೆ ಮೂರು ಬಾರಿ ಪ್ರಾಶನ ಮಾಡಿ. ಉಳಿದ ನಾಮಗಳಿಗೆ: ಗೋವಿಂದ — ಎಡಗೈಯಿಂದ ಬಲ ಅಂಗೈ ತೊಳೆಯುವುದು; ವಿಷ್ಣು — ಬಲಗೈಯಿಂದ ಎಡ ಅಂಗೈ ತೊಳೆಯುವುದು; ಮಧುಸೂದನ — ಮೇಲಿನ ತುಟಿ; ತ್ರಿವಿಕ್ರಮ — ಕೆಳಗಿನ ತುಟಿ; ವಾಮನ — ಬಲ ಕೆನ್ನೆ; ಶ್ರೀಧರ — ಎಡ ಕೆನ್ನೆ; ಹೃಷೀಕೇಶ — ಎರಡೂ ಕೈ ತೊಳೆಯುವುದು; ಪದ್ಮನಾಭ — ಪಾದಗಳು; ದಾಮೋದರ — ನಡುಬೆರಳಿನಿಂದ ನೆತ್ತಿ; ಸಂಕರ್ಷಣ — ನಡುಬೆರಳಿನಿಂದ ಮೂಗಿನ ತುದಿ; ವಾಸುದೇವ, ಪ್ರದ್ಯುಮ್ನ — ಹೆಬ್ಬೆರಳು ಮತ್ತು ತೋರುಬೆರಳಿನಿಂದ ಬಲ, ಎಡ ಮೂಗಿನ ಹೊಳ್ಳೆ; ಅನಿರುದ್ಧ, ಪುರುಷೋತ್ತಮ — ಬಲ, ಎಡ ಕಣ್ಣು; ಅಧೋಕ್ಷಜ, ನಾರಸಿಂಹ — ಬಲ, ಎಡ ಕಿವಿ; ಅಚ್ಯುತ — ನಾಭಿ; ಜನಾರ್ದನ — ಅಂಗೈಯಿಂದ ಹೃದಯ; ಉಪೇಂದ್ರ — ತಲೆ; ಹರಿ, ಶ್ರೀಕೃಷ್ಣ — ಎಲ್ಲ ಬೆರಳುಗಳಿಂದ ಬಲ, ಎಡ ಭುಜ. ಸಂಧ್ಯೆಯ ಆರಂಭದಲ್ಲಿ ಈ ಆಚಮನವನ್ನು ಎರಡು ಬಾರಿ ಮಾಡಬೇಕು (ದ್ವಿರಾಚಮನ). ಮುಂದೆ “ಆಚಮನ” ಎಂದರೆ ಒಂದು ಬಾರಿ, ಎರಡು ಎಂದು ಹೇಳಿದಲ್ಲಿ ಮಾತ್ರ ಎರಡು ಬಾರಿ.',
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
      titleEn: 'Achamana (sipping water) — twice',
      note: 'Hold the right palm hollowed like a cow’s ear (gokarna), take water enough to cover a grain of black gram, and sip it three times without noise with Keshava, Narayana and Madhava. With the remaining names wash the hands and touch the lips, cheeks, eyes, nostrils, ears, navel, heart, head and shoulders, as you were taught (Smarta manuals follow the same names as the Madhva order, with small differences in the touches). At the start of sandhya go through the whole achamana twice; later, “achamana” means once.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ತೆಗೆದುಕೊಂಡು ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ನಾಮಗಳಿಂದ ಶಬ್ದವಿಲ್ಲದೆ ಮೂರು ಬಾರಿ ಸೇವಿಸಿ. ಉಳಿದ ನಾಮಗಳಿಂದ ಕೈ ತೊಳೆದು, ತುಟಿ, ಕೆನ್ನೆ, ಕಣ್ಣು, ಮೂಗಿನ ಹೊಳ್ಳೆ, ಕಿವಿ, ನಾಭಿ, ಹೃದಯ, ತಲೆ, ಭುಜಗಳನ್ನು ಹೇಳಿಕೊಟ್ಟಂತೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ (ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲೂ ಇದೇ ನಾಮಗಳು; ಸ್ಪರ್ಶದಲ್ಲಿ ಸಣ್ಣ ವ್ಯತ್ಯಾಸಗಳಿವೆ). ಸಂಧ್ಯೆಯ ಆರಂಭದಲ್ಲಿ ಇಡೀ ಆಚಮನವನ್ನು ಎರಡು ಬಾರಿ ಮಾಡಿ; ಮುಂದೆ “ಆಚಮನ” ಎಂದರೆ ಒಮ್ಮೆ.',
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
      title: 'प्राणायामः',
      titleEn: 'Pranayama (three times)',
      note: 'Say the viniyoga line first, touching the head (rishi), the mouth (chandas) and the heart (devata). Then with the right hand close the right nostril with the thumb and the left nostril with the ring and little fingers, keeping the index and middle fingers folded. Breathe out through the right nostril, breathe in slowly through the left (puraka), close both and hold the breath (kumbhaka) while reciting the whole mantra mentally, then breathe out slowly through the right nostril (rechaka). Do this three times. Rigvedins say स्वः and स्वरोम् (not सुवः / सुवरोम्).',
      noteKn: 'ಮೊದಲು ವಿನಿಯೋಗವನ್ನು ಹೇಳುತ್ತಾ ತಲೆ (ಋಷಿ), ಬಾಯಿ (ಛಂದಸ್ಸು), ಹೃದಯ (ದೇವತೆ) ಮುಟ್ಟಿಕೊಳ್ಳಿ. ನಂತರ ಬಲಗೈಯ ತೋರುಬೆರಳು ಮತ್ತು ನಡುಬೆರಳನ್ನು ಮಡಚಿ, ಹೆಬ್ಬೆರಳಿನಿಂದ ಬಲ ಮೂಗಿನ ಹೊಳ್ಳೆಯನ್ನೂ ಉಂಗುರದ ಬೆರಳು ಮತ್ತು ಕಿರುಬೆರಳಿನಿಂದ ಎಡ ಹೊಳ್ಳೆಯನ್ನೂ ಮುಚ್ಚಿ. ಬಲ ಹೊಳ್ಳೆಯಿಂದ ಉಸಿರು ಹೊರಬಿಟ್ಟು, ಎಡ ಹೊಳ್ಳೆಯಿಂದ ನಿಧಾನವಾಗಿ ಒಳಗೆಳೆದು (ಪೂರಕ), ಎರಡನ್ನೂ ಮುಚ್ಚಿ ಉಸಿರು ಹಿಡಿದಿರುವಾಗ (ಕುಂಭಕ) ಪೂರ್ಣ ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲೇ ಹೇಳಿ, ನಂತರ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ನಿಧಾನವಾಗಿ ಹೊರಬಿಡಿ (ರೇಚಕ). ಹೀಗೆ ಮೂರು ಬಾರಿ ಮಾಡಿ. ಋಗ್ವೇದಿಗಳು “ಸ್ವಃ”, “ಸ್ವರೋಂ” ಎನ್ನುತ್ತಾರೆ (“ಸುವಃ”, “ಸುವರೋಂ” ಅಲ್ಲ).',
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
          text: 'शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य\nअद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nअष्टाविंशतितमे कलियुगे प्रथमपादे\nजम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे\nअमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'At this good and auspicious moment, today, in the age that runs by the command of Vishnu — the second half of Brahma’s life, the Shveta-varaha kalpa, the Vaivasvata manvantara, the first quarter of the twenty-eighth Kali-yuga — in Bharatavarsha, in Dandakaranya south of the Godavari, in the Shalivahana era, in the present year, ayana, season, month, fortnight, tithi, weekday and star so named, on this auspicious day so marked…',
            kn: 'ಶುಭವೂ ಮಂಗಳಕರವೂ ಆದ ಈ ಮುಹೂರ್ತದಲ್ಲಿ, ಇಂದು, ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದ ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಇಪ್ಪತ್ತೆಂಟನೆಯ ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಭರತವರ್ಷದಲ್ಲಿ ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं',
          meaning: {
            en: 'prompted by Sri Lakshminarayana, who dwells within Mukhyaprana (Vayu), the consort of Bharati, and for the pleasure of Sri Lakshminarayana,',
            kn: 'ಭಾರತೀರಮಣರಾದ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೀತಿಗಾಗಿ,',
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
      note: 'Say the viniyoga. Hold the uddharane with water in the left hand and, with a tulasi leaf or darbha (or the fingers) of the right hand, sprinkle yourself at the end of each of the nine padas (lines), in three rounds — feet, head, chest; chest, feet, head; head, chest, feet — nine sprinklings in all.',
      noteKn: 'ವಿನಿಯೋಗ ಹೇಳಿ. ಎಡಗೈಯಲ್ಲಿ ನೀರಿರುವ ಉದ್ಧರಣೆ ಹಿಡಿದು, ಬಲಗೈಯ ತುಳಸೀದಳ ಅಥವಾ ದರ್ಭೆಯಿಂದ (ಅಥವಾ ಬೆರಳುಗಳಿಂದ) ಒಂಬತ್ತು ಪಾದಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರ ಕೊನೆಗೆ ಮೂರು ಸುತ್ತುಗಳಲ್ಲಿ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ — ಪಾದ, ಶಿರಸ್ಸು, ಹೃದಯ; ಹೃದಯ, ಪಾದ, ಶಿರಸ್ಸು; ಶಿರಸ್ಸು, ಹೃದಯ, ಪಾದ — ಒಟ್ಟು ಒಂಬತ್ತು ಬಾರಿ.',
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
      note: 'Say the viniyoga. Take water in the left palm (or in the uddharane held in the left hand) and, with the fingers of the right hand or a darbha blade, sprinkle the head at the end of each of the nine padas (lines).',
      noteKn: 'ವಿನಿಯೋಗ ಹೇಳಿ. ಎಡ ಅಂಗೈಯಲ್ಲಿ (ಅಥವಾ ಎಡಗೈಯಲ್ಲಿ ಹಿಡಿದ ಉದ್ಧರಣೆಯಲ್ಲಿ) ನೀರು ತೆಗೆದುಕೊಂಡು ಬಲಗೈ ಬೆರಳುಗಳಿಂದ ಅಥವಾ ದರ್ಭೆಯಿಂದ ಒಂಬತ್ತು ಪಾದಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರ ಕೊನೆಗೆ ತಲೆಗೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
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
          text: 'सूर्यश्चेत्यस्य मन्त्रस्य नारायण ऋषिः ।\nसूर्यमामन्युमन्युपतयो रात्रिर्देवताः ।\nप्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “suryash cha”: the seer is Narayana; the deities are Surya, Manyu, the lords of Manyu and Night; the metre is Prakriti; it is used to consecrate the water.',
            kn: '“ಸೂರ್ಯಶ್ಚ” ಮಂತ್ರಕ್ಕೆ ನಾರಾಯಣ ಋಷಿ; ಸೂರ್ಯ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ರಾತ್ರಿ ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಜಲಾಭಿಮಂತ್ರಣಕ್ಕೆ ವಿನಿಯೋಗ.',
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
          text: 'अग्निश्चेत्यस्य मन्त्रस्य हिरण्यगर्भ ऋषिः ।\nअग्निर्मामन्युमन्युपतयोऽहर्देवताः ।\nप्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “agnish cha”: the seer is Hiranyagarbha; the deities are Agni, Manyu, the lords of Manyu and Day; the metre is Prakriti; it is used to consecrate the water.',
            kn: '“ಅಗ್ನಿಶ್ಚ” ಮಂತ್ರಕ್ಕೆ ಹಿರಣ್ಯಗರ್ಭ ಋಷಿ; ಅಗ್ನಿ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ಹಗಲು ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಜಲಾಭಿಮಂತ್ರಣಕ್ಕೆ ವಿನಿಯೋಗ.',
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
      note: 'Say the viniyoga, then sprinkle water on yourself as in Marjana while reciting the whole sukta of nine riks (Rigveda 10.9) and the closing rik सस्रुषीः…: sprinkle the head at the end of each pada (line). Then do achamana once.',
      noteKn: 'ವಿನಿಯೋಗ ಹೇಳಿ, ಮಾರ್ಜನದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಒಂಬತ್ತು ಋಕ್ಕುಗಳ ಪೂರ್ಣ ಸೂಕ್ತವನ್ನೂ (ಋಗ್ವೇದ ೧೦.೯) ಕೊನೆಯ “ಸಸ್ರುಷೀಃ” ಋಕ್ಕನ್ನೂ ಹೇಳುತ್ತಾ ಪ್ರತಿಯೊಂದು ಪಾದದ ಕೊನೆಯಲ್ಲಿ ತಲೆಗೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ. ನಂತರ ಒಂದು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
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
      note: 'Take water in the right palm, held in the gokarna shape near the nose, and do not look at it. Say the viniyoga and the three riks (Rigveda 10.190). Closing the left nostril, breathe out through the right nostril onto the water, thinking that the papa-purusha (the sin within) leaves you and enters it; throw the water away towards the north-east (or to your left onto the ground) and do not look at it again. Then do achamana.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರದಲ್ಲಿ ಮೂಗಿನ ಬಳಿ ಹಿಡಿದು ನೀರು ತೆಗೆದುಕೊಳ್ಳಿ; ಅದನ್ನು ನೋಡಬೇಡಿ. ವಿನಿಯೋಗ ಮತ್ತು ಮೂರು ಋಕ್ಕುಗಳನ್ನು (ಋಗ್ವೇದ ೧೦.೧೯೦) ಹೇಳಿ. ಎಡ ಹೊಳ್ಳೆ ಮುಚ್ಚಿ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ನೀರಿನ ಮೇಲೆ ಉಸಿರು ಬಿಡಿ, ಒಳಗಿನ ಪಾಪಪುರುಷನು ಹೊರಬಂದು ನೀರಿನಲ್ಲಿ ಸೇರಿದನೆಂದು ಭಾವಿಸಿ; ಆ ನೀರನ್ನು ಈಶಾನ್ಯ ದಿಕ್ಕಿಗೆ (ಅಥವಾ ಎಡಕ್ಕೆ ನೆಲದ ಮೇಲೆ) ಚೆಲ್ಲಿ, ಮತ್ತೆ ನೋಡಬೇಡಿ. ನಂತರ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ऋतं चेत्यस्य सूक्तस्य अघमर्षण ऋषिः ।\nभाववृत्तं देवता । अनुष्टुप् छन्दः । पापपुरुषविसर्जने विनियोगः ॥',
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
          text: 'ऋतं चेत्यस्य सूक्तस्य अघमर्षण ऋषिः ।\nभाववृत्तं देवता । अनुष्टुप् छन्दः । पापपुरुषविसर्जने विनियोगः ॥',
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
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Morning: give the arghya before sunrise, standing, facing east and looking towards the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Fill both joined palms with clean water from the arghya vessel (never the achamana water), raise them to the height of the nose, recite the Gayatri with Om and the vyahritis and pour the water out over the fingertips into the plate — once for each recitation, three times, meditating on Sri Narayana (Savitri-namaka Lakshminarayana) in the Sun. If the sun has already risen, say the prayaschitta sankalpa and give a fourth arghya with the Gayatri and its shiras (आपो ज्योती…). Then, touching the chest, pray हृदयस्था तु गायत्री….',
      noteKn: 'ಬೆಳಗಿನ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯೋದಯಕ್ಕೆ ಮೊದಲು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಸೂರ್ಯನ ಕಡೆ ನೋಡುತ್ತಾ ನಿಂತು ಕೊಡಬೇಕು. ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಅರ್ಘ್ಯಪಾತ್ರೆಯ ಶುದ್ಧಜಲವನ್ನು (ಆಚಮನದ ನೀರನ್ನಲ್ಲ) ಬೊಗಸೆಯಲ್ಲಿ ತುಂಬಿ ಮೂಗಿನ ಎತ್ತರಕ್ಕೆ ಎತ್ತಿ, ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ತಟ್ಟೆಗೆ ಬಿಡಿ — ಸೂರ್ಯನಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನನ್ನು (ಸವಿತೃನಾಮಕ ಲಕ್ಷ್ಮೀನಾರಾಯಣ) ಧ್ಯಾನಿಸುತ್ತಾ ಮೂರು ಬಾರಿ. ಸೂರ್ಯೋದಯವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿ ಮತ್ತು ಅದರ ಶಿರಸ್ಸಿನಿಂದ (ಆಪೋ ಜ್ಯೋತೀ…) ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ನಂತರ ಎದೆ ಮುಟ್ಟಿಕೊಂಡು “ಹೃದಯಸ್ಥಾ ತು ಗಾಯತ್ರೀ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ.',
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
          text: 'कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'To expiate the fault of letting the proper time pass, I shall offer a fourth arghya.',
            kn: 'ಸರಿಯಾದ ಕಾಲವನ್ನು ಮೀರಿದ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
          meaning: {
            en: 'The Gayatri with Om and the vyahritis, followed by its shiras: Om — he is the waters, the light, the essence, the immortal, Brahman, filling earth, sky and heaven.',
            kn: 'ಓಂಕಾರ, ವ್ಯಾಹೃತಿಗಳೊಂದಿಗೆ ಗಾಯತ್ರೀ ಮಂತ್ರ, ನಂತರ ಅದರ ಶಿರಸ್ಸು: ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ, ಪರಬ್ರಹ್ಮ ಎಲ್ಲವೂ ಅವನೇ; ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗಗಳನ್ನು ವ್ಯಾಪಿಸಿದ್ದಾನೆ.',
          },
        },
        {
          text: 'हृदयस्था तु गायत्री हृद्गुहामुखनिःसृता ।\nहत्वा ह्यादित्यशत्रूंश्च विशस्व हृदयं मम ॥',
          meaning: {
            en: 'O Gayatri, who dwell in the heart and came forth from the mouth of the heart’s cave: having struck down the enemies of the Sun, enter my heart again.',
            kn: 'ಹೃದಯದಲ್ಲಿ ನೆಲೆಸಿ, ಹೃದಯಗುಹೆಯ ಬಾಯಿಂದ ಹೊರಬಂದ ಓ ಗಾಯತ್ರಿಯೇ, ಸೂರ್ಯನ ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡಿ ಮತ್ತೆ ನನ್ನ ಹೃದಯವನ್ನು ಪ್ರವೇಶಿಸು.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Midday: stand facing the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Fill both joined palms with clean water from the arghya vessel, recite the Gayatri with Om and the vyahritis and pour the water out over the fingertips — three arghyas, meditating on Sri Narayana in the Sun. If noon is long past, say the prayaschitta sankalpa and give a fourth arghya with the Gayatri and its shiras. Then pray एहि त्वं देवि….',
      noteKn: 'ಮಧ್ಯಾಹ್ನ ಸೂರ್ಯನ ಕಡೆಗೆ ನಿಂತುಕೊಳ್ಳಿ. ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಅರ್ಘ್ಯಪಾತ್ರೆಯ ಶುದ್ಧಜಲವನ್ನು ಬೊಗಸೆಯಲ್ಲಿ ತುಂಬಿ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ಬಿಡಿ — ಸೂರ್ಯನಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಮೂರು ಅರ್ಘ್ಯ. ಮಧ್ಯಾಹ್ನ ಬಹಳ ಮೀರಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿ ಮತ್ತು ಶಿರಸ್ಸಿನಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ನಂತರ “ಏಹಿ ತ್ವಂ ದೇವಿ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ.',
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
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
          meaning: {
            en: 'The Gayatri with Om and the vyahritis, followed by its shiras: Om — he is the waters, the light, the essence, the immortal, Brahman, filling earth, sky and heaven.',
            kn: 'ಓಂಕಾರ, ವ್ಯಾಹೃತಿಗಳೊಂದಿಗೆ ಗಾಯತ್ರೀ ಮಂತ್ರ, ನಂತರ ಅದರ ಶಿರಸ್ಸು: ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ, ಪರಬ್ರಹ್ಮ ಎಲ್ಲವೂ ಅವನೇ; ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗಗಳನ್ನು ವ್ಯಾಪಿಸಿದ್ದಾನೆ.',
          },
        },
        {
          text: 'एहि त्वं देवि शीघ्रं वै गायत्रि ब्रह्मरूपिणि ।\nजपानुष्ठानसिद्ध्यर्थं प्रविश्य हृदयं मम ॥',
          meaning: {
            en: 'Come quickly, O goddess Gayatri, whose form is Brahman; enter my heart so that the japa I am about to do may be accomplished.',
            kn: 'ಬ್ರಹ್ಮಸ್ವರೂಪಿಣಿಯಾದ ಓ ಗಾಯತ್ರೀದೇವಿ, ಬೇಗನೆ ಬಾ; ನಾನು ಮಾಡುವ ಜಪವು ಸಿದ್ಧಿಸುವಂತೆ ನನ್ನ ಹೃದಯವನ್ನು ಪ್ರವೇಶಿಸು.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (offering water to the Sun)',
      note: 'Evening: give the arghya before sunset, sitting and facing west; let the water fall into the plate or onto the ground or a stone (at a river, not into the water). Do achamana and one pranayama and say the sankalpa and viniyoga. Fill both joined palms with clean water, recite the Gayatri with Om and the vyahritis and pour it out over the fingertips — three arghyas. If the sun has already set, say the prayaschitta sankalpa and give a fourth arghya with the Gayatri and its shiras. Then pray उत्तिष्ठोत्तिष्ठ….',
      noteKn: 'ಸಂಜೆಯ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಮೊದಲು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು ಕೊಡಬೇಕು; ನೀರನ್ನು ತಟ್ಟೆಗೆ ಅಥವಾ ನೆಲ/ಬಂಡೆಯ ಮೇಲೆ ಬಿಡಿ (ನದೀತೀರದಲ್ಲಿ ನೀರಿನೊಳಗೆ ಬೇಡ). ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಬೊಗಸೆಯಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ಬಿಡಿ — ಮೂರು ಅರ್ಘ್ಯ. ಸೂರ್ಯಾಸ್ತವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿ ಮತ್ತು ಶಿರಸ್ಸಿನಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ನಂತರ “ಉತ್ತಿಷ್ಠೋತ್ತಿಷ್ಠ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ.',
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
          text: 'कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'To expiate the fault of letting the proper time pass, I shall offer a fourth arghya.',
            kn: 'ಸರಿಯಾದ ಕಾಲವನ್ನು ಮೀರಿದ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
          meaning: {
            en: 'The Gayatri with Om and the vyahritis, followed by its shiras: Om — he is the waters, the light, the essence, the immortal, Brahman, filling earth, sky and heaven.',
            kn: 'ಓಂಕಾರ, ವ್ಯಾಹೃತಿಗಳೊಂದಿಗೆ ಗಾಯತ್ರೀ ಮಂತ್ರ, ನಂತರ ಅದರ ಶಿರಸ್ಸು: ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ, ಪರಬ್ರಹ್ಮ ಎಲ್ಲವೂ ಅವನೇ; ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗಗಳನ್ನು ವ್ಯಾಪಿಸಿದ್ದಾನೆ.',
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
      note: 'Morning: give the arghya before sunrise, standing, facing east and looking towards the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Fill both joined palms with clean water from the arghya vessel, raise them to the height of the nose, recite the Gayatri with Om and the vyahritis and pour the water out over the fingertips — three arghyas. If the sun has already risen, say the sankalpa and give a fourth arghya with the Gayatri; many manuals add the rik यदद्य कच्च….',
      noteKn: 'ಬೆಳಗಿನ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯೋದಯಕ್ಕೆ ಮೊದಲು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಸೂರ್ಯನ ಕಡೆ ನೋಡುತ್ತಾ ನಿಂತು ಕೊಡಬೇಕು. ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಅರ್ಘ್ಯಪಾತ್ರೆಯ ಶುದ್ಧಜಲವನ್ನು ಬೊಗಸೆಯಲ್ಲಿ ತುಂಬಿ ಮೂಗಿನ ಎತ್ತರಕ್ಕೆ ಎತ್ತಿ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ಬಿಡಿ — ಮೂರು ಅರ್ಘ್ಯ. ಸೂರ್ಯೋದಯವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ; ಅನೇಕ ಪುಸ್ತಕಗಳು “ಯದದ್ಯ ಕಚ್ಚ…” ಋಕ್ಕನ್ನೂ ಸೇರಿಸುತ್ತವೆ.',
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
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
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
      note: 'Midday: stand facing the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Many manuals give the first arghya with हंसः शुचिषत्…, the second with आ कृष्णेन… and the third with the Gayatri; others give all three with the Gayatri. If noon is long past, say the sankalpa and give a fourth arghya with the Gayatri (many add प्रातर्देवीम्…).',
      noteKn: 'ಮಧ್ಯಾಹ್ನ ಸೂರ್ಯನ ಕಡೆಗೆ ನಿಂತುಕೊಳ್ಳಿ. ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಅನೇಕ ಪುಸ್ತಕಗಳಲ್ಲಿ ಮೊದಲ ಅರ್ಘ್ಯ “ಹಂಸಃ ಶುಚಿಷತ್…”, ಎರಡನೆಯದು “ಆ ಕೃಷ್ಣೇನ…”, ಮೂರನೆಯದು ಗಾಯತ್ರಿಯಿಂದ; ಕೆಲವರು ಮೂರನ್ನೂ ಗಾಯತ್ರಿಯಿಂದ ಕೊಡುತ್ತಾರೆ. ಮಧ್ಯಾಹ್ನ ಬಹಳ ಮೀರಿದ್ದರೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ (ಅನೇಕರು “ಪ್ರಾತರ್ದೇವೀಮ್…” ಸೇರಿಸುತ್ತಾರೆ).',
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
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
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
      note: 'Evening: give the arghya before sunset, sitting and facing west; let the water fall on the ground or a stone (not into a river). Do achamana and one pranayama and say the sankalpa and viniyoga. Recite the Gayatri with Om and the vyahritis and pour out the water from both joined palms — three arghyas. If the sun has already set, say the sankalpa and give a fourth arghya with the Gayatri (many add उद्घेदभि…).',
      noteKn: 'ಸಂಜೆಯ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಮೊದಲು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು ಕೊಡಬೇಕು; ನೀರನ್ನು ನೆಲ/ಬಂಡೆಯ ಮೇಲೆ ಬಿಡಿ (ನದಿಯೊಳಗೆ ಬೇಡ). ಆಚಮನ, ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ, ವಿನಿಯೋಗ ಹೇಳಿ. ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೊಗಸೆಯ ನೀರನ್ನು ಬಿಡಿ — ಮೂರು ಅರ್ಘ್ಯ. ಸೂರ್ಯಾಸ್ತವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ (ಅನೇಕರು “ಉದ್ಘೇದಭಿ…” ಸೇರಿಸುತ್ತಾರೆ).',
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
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitri — for Madhvas, Sri Narayana dwelling in the sun; may he move our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
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
      title: 'केशवादितर्पणम्',
      titleEn: 'Keshavadi tarpana (Madhva)',
      note: 'After the arghyas, offer tarpana to the Lord’s forms. Take water from the arghya vessel in the uddharane with the left hand, pour it onto the fingers of the right hand and let it run off the fingertips (deva-tirtha) into the plate, once for each name. In the bright fortnight (shukla paksha) use the twelve names from Keshava to Damodara; in the dark fortnight (krishna paksha) the twelve from Sankarshana to Sri Krishna. Manuals say it is not done on Ekadashi and similar days; follow your family practice.',
      noteKn: 'ಅರ್ಘ್ಯದ ನಂತರ ಭಗವಂತನ ರೂಪಗಳಿಗೆ ತರ್ಪಣ ಕೊಡಬೇಕು. ಎಡಗೈಯಲ್ಲಿ ಉದ್ಧರಣೆಯಿಂದ ಅರ್ಘ್ಯದ ನೀರು ತೆಗೆದು ಬಲಗೈ ಬೆರಳುಗಳ ಮೇಲೆ ಹಾಕಿ, ಬೆರಳ ತುದಿಗಳಿಂದ (ದೇವತೀರ್ಥ) ತಟ್ಟೆಗೆ ಬಿಡಿ — ಒಂದೊಂದು ನಾಮಕ್ಕೆ ಒಮ್ಮೆ. ಶುಕ್ಲಪಕ್ಷದಲ್ಲಿ ಕೇಶವನಿಂದ ದಾಮೋದರನವರೆಗಿನ ಹನ್ನೆರಡು ನಾಮಗಳು; ಕೃಷ್ಣಪಕ್ಷದಲ್ಲಿ ಸಂಕರ್ಷಣನಿಂದ ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಹನ್ನೆರಡು ನಾಮಗಳು. ಏಕಾದಶಿ ಮುಂತಾದ ದಿನಗಳಲ್ಲಿ ಮಾಡಬಾರದೆಂದು ಕೈಪಿಡಿಗಳು ಹೇಳುತ್ತವೆ; ಮನೆತನದ ಪದ್ಧತಿ ಅನುಸರಿಸಿ.',
      when: { tradition: ['madhva'] },
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
      ],
    },
    {
      title: 'सन्ध्याङ्गतर्पणम्',
      titleEn: 'Sandhyanga tarpana (Smarta, where practised)',
      note: 'Practised in some Rigvedin Smarta families (it is not in every Karnataka manual). Pour water from the right hand into the plate once with each name, then do achamana.',
      noteKn: 'ಕೆಲವು ಋಗ್ವೇದಿ ಸ್ಮಾರ್ತ ಮನೆತನಗಳಲ್ಲಿ ಮಾತ್ರ ಆಚರಣೆಯಲ್ಲಿದೆ (ಎಲ್ಲ ಕರ್ನಾಟಕದ ಕೈಪಿಡಿಗಳಲ್ಲೂ ಇಲ್ಲ). ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಬಲಗೈಯಿಂದ ತಟ್ಟೆಗೆ ನೀರು ಬಿಟ್ಟು, ನಂತರ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
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
      note: 'Before sitting for japa, say the viniyoga and अपसर्पन्तु…, snapping the fingers towards your left (some sprinkle a little water or throw akshata around) to send away obstructing beings. Say निरस्तः परावसुः…, then sprinkle and touch the seat with the right hand, say the viniyoga and pray to the Earth with पृथ्वि त्वया… and मां च पूतं…, bow to the seat as resting on Ananta and Kurma, and sit down firmly — facing east in the morning and at midday, west in the evening.',
      noteKn: 'ಜಪಕ್ಕೆ ಕುಳಿತುಕೊಳ್ಳುವ ಮೊದಲು ವಿನಿಯೋಗ ಮತ್ತು “ಅಪಸರ್ಪಂತು…” ಹೇಳುತ್ತಾ ಎಡಭಾಗಕ್ಕೆ ಚಿಟಿಕೆ ಹೊಡೆದು (ಕೆಲವರು ಸುತ್ತ ನೀರು ಅಥವಾ ಅಕ್ಷತೆ ಹಾಕುತ್ತಾರೆ) ವಿಘ್ನಕಾರಿ ಭೂತಗಳನ್ನು ಓಡಿಸಿ. “ನಿರಸ್ತಃ ಪರಾವಸುಃ…” ಹೇಳಿ, ಆಸನಕ್ಕೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ ಬಲಗೈಯಿಂದ ಮುಟ್ಟಿ, ವಿನಿಯೋಗದೊಂದಿಗೆ “ಪೃಥ್ವಿ ತ್ವಯಾ…”, “ಮಾಂ ಚ ಪೂತಂ…” ಎಂದು ಭೂದೇವಿಯನ್ನು ಪ್ರಾರ್ಥಿಸಿ, ಅನಂತ–ಕೂರ್ಮರ ಮೇಲಿರುವ ಆಸನಕ್ಕೆ ನಮಸ್ಕರಿಸಿ ಸ್ಥಿರವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಿ — ಬೆಳಗ್ಗೆ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ, ಸಂಜೆ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ.',
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
          text: 'अपसर्पन्तु ये भूता ये भूता भुवि संस्थिताः ।\nये भूता विघ्नकर्तारस्ते नश्यन्तु शिवाज्ञया ॥\nअपक्रामन्तु ये भूताः क्रूराश्चैव तु राक्षसाः ।\nये चात्र निवसन्त्येव देवता भुवि सन्ततम् ।\nतेषामप्यविरोधेन ब्रह्मकर्म समारभे ॥',
          meaning: {
            en: 'May the beings that dwell on the earth move away; may those that cause obstacles perish at the auspicious command. Let the beings and cruel rakshasas depart. Without offending the deities who always dwell here, I begin this sacred rite.',
            kn: 'ಭೂಮಿಯಲ್ಲಿರುವ ಭೂತಗಳು ದೂರ ಸರಿಯಲಿ; ವಿಘ್ನವನ್ನುಂಟುಮಾಡುವವು ಮಂಗಳಕರ ಆಜ್ಞೆಯಿಂದ ನಾಶವಾಗಲಿ. ಭೂತಗಳೂ ಕ್ರೂರ ರಾಕ್ಷಸರೂ ತೊಲಗಲಿ. ಇಲ್ಲಿ ಸದಾ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ವಿರೋಧವಾಗದಂತೆ ಈ ಬ್ರಹ್ಮಕರ್ಮವನ್ನು ಆರಂಭಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'निरस्तः परावसुः । इदमहमर्वावसोः सदने सीदामि ।\nआसने सोममण्डले कूर्मस्कन्धे उपविष्टोऽस्मि ॥',
          meaning: {
            en: 'Paravasu, the hindering one, is driven away; I sit here in the seat of Arvavasu, the helping one. I am seated on this seat as on the orb of the Moon, on the shoulders of Kurma, the divine Tortoise.',
            kn: 'ವಿಘ್ನಕಾರಿಯಾದ ಪರಾವಸು ಹೊರಗಟ್ಟಲ್ಪಟ್ಟಿದ್ದಾನೆ; ಸಹಾಯಕನಾದ ಅರ್ವಾವಸುವಿನ ಆಸನದಲ್ಲಿ ನಾನು ಕುಳಿತಿದ್ದೇನೆ. ಚಂದ್ರಮಂಡಲದಂತಿರುವ, ಕೂರ್ಮದೇವರ ಹೆಗಲ ಮೇಲಿರುವ ಈ ಆಸನದಲ್ಲಿ ಕುಳಿತಿದ್ದೇನೆ.',
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
          text: 'मां च पूतं कुरु धरे नतोऽस्मि त्वां सुरेश्वरि ॥',
          meaning: {
            en: 'Make me pure as well, O Earth; I bow to you, queen of the gods.',
            kn: 'ಓ ಭೂದೇವಿ, ನನ್ನನ್ನೂ ಪವಿತ್ರನನ್ನಾಗಿ ಮಾಡು; ದೇವತೆಗಳ ಒಡತಿಯೇ, ನಿನಗೆ ನಮಿಸುತ್ತೇನೆ.',
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
          text: 'ॐ तत्सवितुरङ्गुष्ठाभ्यां नमः ।\nॐ वरेण्यं तर्जनीभ्यां नमः ।\nॐ भर्गो देवस्य मध्यमाभ्यां नमः ।\nॐ धीमहि अनामिकाभ्यां नमः ।\nॐ धियो यो नः कनिष्ठिकाभ्यां नमः ।\nॐ प्रचोदयात् करतलकरपृष्ठाभ्यां नमः ॥',
          meaning: {
            en: 'The six parts of the Gayatri are placed, with salutation, on the thumbs, index fingers, middle fingers, ring fingers, little fingers, and the palms and backs of the hands.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು ನಮಸ್ಕಾರಪೂರ್ವಕವಾಗಿ ಹೆಬ್ಬೆರಳು, ತೋರುಬೆರಳು, ನಡುಬೆರಳು, ಉಂಗುರದ ಬೆರಳು, ಕಿರುಬೆರಳು ಮತ್ತು ಅಂಗೈ–ಕೈಹಿಂಭಾಗಗಳಲ್ಲಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ तत्सवितुर्हृदयाय नमः ।\nॐ वरेण्यं शिरसे स्वाहा ।\nॐ भर्गो देवस्य शिखायै वषट् ।\nॐ धीमहि कवचाय हुम् ।\nॐ धियो यो नः नेत्राभ्यां वौषट् ।\nॐ प्रचोदयात् अस्त्राय फट् ।\nॐ भूर्भुवः स्वरोमिति दिग्बन्धः ॥',
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
      note: 'With folded hands invite the Gayatri to be present for the japa. Say the viniyoga, touching the head (seer), mouth (metre) and heart (deity). Then meditate on Sri Narayana seated on a lotus in the middle of the solar orb (the Sadachara-smriti explains that Gayatri in the morning, Savitri at midday and Sarasvati in the evening are all names of Narayana), and make the resolve for japa, letting a ladle of water fall into the plate.',
      noteKn: 'ಕೈಮುಗಿದು ಜಪಕ್ಕೆ ಸನ್ನಿಹಿತಳಾಗಲು ಗಾಯತ್ರಿಯನ್ನು ಆಹ್ವಾನಿಸಿ. ತಲೆ (ಋಷಿ), ಬಾಯಿ (ಛಂದಸ್ಸು), ಹೃದಯ (ದೇವತೆ) ಮುಟ್ಟುತ್ತಾ ವಿನಿಯೋಗ ಹೇಳಿ. ನಂತರ ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿ ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತ ಶ್ರೀನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸಿ (ಬೆಳಗಿನ ಗಾಯತ್ರಿ, ಮಧ್ಯಾಹ್ನದ ಸಾವಿತ್ರಿ, ಸಂಜೆಯ ಸರಸ್ವತಿ — ಎಲ್ಲವೂ ನಾರಾಯಣನ ಹೆಸರುಗಳೇ ಎಂದು ಸದಾಚಾರಸ್ಮೃತಿ ಹೇಳುತ್ತದೆ), ಜಪದ ಸಂಕಲ್ಪ ಹೇಳಿ ಒಂದು ಉದ್ಧರಣೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
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
          text: 'अस्य श्रीगायत्रीमहामन्त्रस्य विश्वामित्र ऋषिः । दैवी गायत्री छन्दः ।\nसवितृनामकश्रीलक्ष्मीनारायणो देवता ।\nश्रीलक्ष्मीनारायणप्रसादसिद्ध्यर्थे जपे विनियोगः ॥',
          meaning: {
            en: 'Of this great Gayatri mantra the seer is Vishvamitra, the metre daivi gayatri, and the deity Sri Lakshminarayana named Savitri; it is recited in japa to win his grace.',
            kn: 'ಈ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ದೈವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ದೇವತೆ; ಅವನ ಅನುಗ್ರಹ ಸಿದ್ಧಿಗಾಗಿ ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ.',
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
      note: 'Kara-nyasa: with each line touch the named finger with the thumb (the thumb with the index finger), and at the last line rub the palms and backs of the hands together. Anga-nyasa: touch the heart, the top of the head and the tuft; touch the shoulders crosswise (kavacha); touch the eyes (and the middle of the brow); for astraya phat circle the right hand round the head and clap; with the last line snap the fingers in the ten directions (digbandha). The same nyasa is repeated after japa, ending with “digvimokah” instead of “digbandhah”.',
      noteKn: 'ಕರನ್ಯಾಸ: ಒಂದೊಂದು ವಾಕ್ಯಕ್ಕೂ ಹೆಸರಿಸಿದ ಬೆರಳನ್ನು ಹೆಬ್ಬೆರಳಿನಿಂದ (ಹೆಬ್ಬೆರಳನ್ನು ತೋರುಬೆರಳಿನಿಂದ) ಮುಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯಕ್ಕೆ ಅಂಗೈ ಮತ್ತು ಕೈಹಿಂಭಾಗಗಳನ್ನು ಉಜ್ಜಿ. ಅಂಗನ್ಯಾಸ: ಹೃದಯ, ನೆತ್ತಿ, ಶಿಖೆ ಮುಟ್ಟಿ; ಅಡ್ಡಗೈಯಿಂದ ಭುಜಗಳನ್ನು ಮುಟ್ಟಿ (ಕವಚ); ಕಣ್ಣುಗಳನ್ನು (ಮತ್ತು ಹುಬ್ಬುಗಳ ಮಧ್ಯವನ್ನು) ಮುಟ್ಟಿ; “ಅಸ್ತ್ರಾಯ ಫಟ್” ಎನ್ನುವಾಗ ಬಲಗೈಯನ್ನು ತಲೆಯ ಸುತ್ತ ತಿರುಗಿಸಿ ಚಪ್ಪಾಳೆ ತಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯದಿಂದ ಹತ್ತು ದಿಕ್ಕುಗಳಲ್ಲಿ ಚಿಟಿಕೆ ಹೊಡೆಯಿರಿ (ದಿಗ್ಬಂಧ). ಜಪದ ನಂತರ ಇದೇ ನ್ಯಾಸವನ್ನು ಮತ್ತೆ ಮಾಡಿ, ಕೊನೆಯಲ್ಲಿ “ದಿಗ್ಬಂಧಃ” ಬದಲು “ದಿಗ್ವಿಮೋಕಃ” ಎನ್ನಬೇಕು.',
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
      note: 'Morning: stand with folded hands facing east. The Madhva manuals use जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे… at every sandhya. With नमो ब्रह्मणे… turn round clockwise three times where you stand.',
      noteKn: 'ಬೆಳಗ್ಗೆ: ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಮಾಧ್ವ ಪುಸ್ತಕಗಳು ಪ್ರತಿ ಸಂಧ್ಯೆಯಲ್ಲೂ “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತವೆ. “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ.',
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
      note: 'Midday: stand with folded hands facing the Sun (east or north). The Madhva manuals use जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे… at every sandhya. With नमो ब्रह्मणे… turn round clockwise three times where you stand.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ: ಸೂರ್ಯನ ಕಡೆಗೆ (ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ) ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಮಾಧ್ವ ಪುಸ್ತಕಗಳು ಪ್ರತಿ ಸಂಧ್ಯೆಯಲ್ಲೂ “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತವೆ. “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ.',
      when: { tradition: ['madhva'], time: ['midday'] },
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
      note: 'Evening: stand with folded hands facing west. The Madhva manuals use जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे… at every sandhya. With नमो ब्रह्मणे… turn round clockwise three times where you stand.',
      noteKn: 'ಸಂಜೆ: ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಮಾಧ್ವ ಪುಸ್ತಕಗಳು ಪ್ರತಿ ಸಂಧ್ಯೆಯಲ್ಲೂ “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತವೆ. “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ.',
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
      note: 'Morning: stand with folded hands facing east. Many Smarta manuals (especially Andhra ones) first recite the four riks to Mitra (Rigveda 3.59.6–9); recite those only if your family does. Then जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे…, with which you turn round clockwise three times where you stand.',
      noteKn: 'ಬೆಳಗ್ಗೆ: ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಅನೇಕ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು (ವಿಶೇಷವಾಗಿ ಆಂಧ್ರದವು) ಮೊದಲು ಮಿತ್ರನ ನಾಲ್ಕು ಋಕ್ಕುಗಳನ್ನು (ಋಗ್ವೇದ ೩.೫೯.೬–೯) ಹೇಳುತ್ತವೆ; ಮನೆತನದಲ್ಲಿ ಪದ್ಧತಿಯಿದ್ದರೆ ಮಾತ್ರ ಹೇಳಿ. ನಂತರ “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” — ಕೊನೆಯದನ್ನು ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ.',
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
          text: 'अभि यो महिना दिवं मित्रो बभूव सप्रथाः ।\nअभि श्रवोभिः पृथिवीम् ॥',
          meaning: {
            en: 'Far-famed Mitra surpasses the heavens by his greatness, and the earth by his glories.',
            kn: 'ವಿಸ್ತಾರವಾದ ಕೀರ್ತಿಯುಳ್ಳ ಮಿತ್ರನು ತನ್ನ ಮಹಿಮೆಯಿಂದ ದ್ಯುಲೋಕವನ್ನೂ, ತನ್ನ ಕೀರ್ತಿಯಿಂದ ಭೂಮಿಯನ್ನೂ ಮೀರಿ ನಿಂತಿದ್ದಾನೆ.',
          },
        },
        {
          text: 'मित्राय पञ्च येमिरे जना अभिष्टिशवसे ।\nस देवान्विश्वान्बिभर्ति ॥',
          meaning: {
            en: 'To Mitra, mighty to help, the five peoples have offered worship; he sustains all the gods.',
            kn: 'ಸಹಾಯ ಮಾಡುವ ಶಕ್ತಿಯುಳ್ಳ ಮಿತ್ರನಿಗೆ ಐದು ಜನವರ್ಗಗಳೂ ಪೂಜೆ ಸಲ್ಲಿಸಿವೆ; ಅವನು ಎಲ್ಲ ದೇವತೆಗಳನ್ನೂ ಪೋಷಿಸುತ್ತಾನೆ.',
          },
        },
        {
          text: 'मित्रो देवेष्वायुषु जनाय वृक्तबर्हिषे ।\nइष इष्टव्रता अकः ॥',
          meaning: {
            en: 'Mitra, among gods and men, has granted nourishment to the worshipper who spreads the sacred grass — nourishment that fulfils holy vows.',
            kn: 'ದೇವತೆಗಳಲ್ಲೂ ಮನುಷ್ಯರಲ್ಲೂ ಇರುವ ಮಿತ್ರನು ದರ್ಭೆ ಹಾಸಿ ಪೂಜಿಸುವವನಿಗೆ ವ್ರತಗಳನ್ನು ಪೂರೈಸುವ ಅನ್ನವನ್ನು ಕರುಣಿಸಿದ್ದಾನೆ.',
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
      note: 'Midday: stand with folded hands facing the Sun (east or north). Many Smarta manuals (especially Andhra ones) first recite उदु त्यं… (Rigveda 1.50) and चित्रं देवानाम्… (1.115); recite those only if your family does. Then जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे…, with which you turn round clockwise three times where you stand.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ: ಸೂರ್ಯನ ಕಡೆಗೆ (ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ) ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಅನೇಕ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು (ವಿಶೇಷವಾಗಿ ಆಂಧ್ರದವು) ಮೊದಲು “ಉದು ತ್ಯಂ…” (ಋಗ್ವೇದ ೧.೫೦) ಮತ್ತು “ಚಿತ್ರಂ ದೇವಾನಾಮ್…” (೧.೧೧೫) ಹೇಳುತ್ತವೆ; ಮನೆತನದಲ್ಲಿ ಪದ್ಧತಿಯಿದ್ದರೆ ಮಾತ್ರ ಹೇಳಿ. ನಂತರ “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” — ಕೊನೆಯದನ್ನು ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ.',
      when: { tradition: ['smarta'], time: ['midday'] },
      verses: [
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
      note: 'Evening: stand with folded hands facing west. Many Smarta manuals (especially Andhra ones) first recite the riks to Varuna यच्चिद्धि ते… (Rigveda 1.25.1–10); recite those only if your family does. Then जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे…, with which you turn round clockwise three times where you stand.',
      noteKn: 'ಸಂಜೆ: ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. ಅನೇಕ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು (ವಿಶೇಷವಾಗಿ ಆಂಧ್ರದವು) ಮೊದಲು ವರುಣನ “ಯಚ್ಚಿದ್ಧಿ ತೇ…” ಋಕ್ಕುಗಳನ್ನು (ಋಗ್ವೇದ ೧.೨೫.೧–೧೦) ಹೇಳುತ್ತವೆ; ಮನೆತನದಲ್ಲಿ ಪದ್ಧತಿಯಿದ್ದರೆ ಮಾತ್ರ ಹೇಳಿ. ನಂತರ “ಜಾತವೇದಸೇ…”, “ತಚ್ಛಂಯೋಃ…”, “ನಮೋ ಬ್ರಹ್ಮಣೇ…” — ಕೊನೆಯದನ್ನು ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ.',
      when: { tradition: ['smarta'], time: ['evening'] },
      verses: [
        {
          text: 'यच्चिद्धि ते विशो यथा प्र देव वरुण व्रतम् ।\nमिनीमसि द्यविद्यवि ॥',
          meaning: {
            en: 'O god Varuna, as people do, we too break your laws day after day —',
            kn: 'ಓ ವರುಣದೇವ, ಸಾಮಾನ್ಯ ಜನರಂತೆ ನಾವೂ ದಿನದಿನವೂ ನಿನ್ನ ನಿಯಮಗಳನ್ನು ಮೀರುತ್ತೇವೆ —',
          },
        },
        {
          text: 'मा नो वधाय हत्नवे जिहीळानस्य रीरधः ।\nमा हृणानस्य मन्यवे ॥',
          meaning: {
            en: '— yet do not hand us over to death, to the weapon of the angry one, nor to the wrath of the offended.',
            kn: '— ಆದರೂ ಕೋಪಗೊಂಡವನ ಮಾರಕ ಆಯುಧಕ್ಕೂ, ಕ್ರುದ್ಧನ ರೋಷಕ್ಕೂ ನಮ್ಮನ್ನು ಒಪ್ಪಿಸಬೇಡ.',
          },
        },
        {
          text: 'वि मृळीकाय ते मनो रथीरश्वं न सन्दितम् ।\nगीर्भिर्वरुण सीमहि ॥',
          meaning: {
            en: 'As a charioteer loosens a tethered horse, O Varuna, we loosen your mind with our hymns, to win your mercy.',
            kn: 'ಸಾರಥಿಯು ಕಟ್ಟಿದ ಕುದುರೆಯನ್ನು ಬಿಚ್ಚುವಂತೆ, ಓ ವರುಣ, ನಿನ್ನ ಕರುಣೆಗಾಗಿ ನಮ್ಮ ಸ್ತುತಿಗಳಿಂದ ನಿನ್ನ ಮನಸ್ಸನ್ನು ಸಡಿಲಿಸುತ್ತೇವೆ.',
          },
        },
        {
          text: 'परा हि मे विमन्यवः पतन्ति वस्य इष्टये ।\nवयो न वसतीरुप ॥',
          meaning: {
            en: 'My thoughts, free of anger, fly out in search of good, as birds fly to their nests.',
            kn: 'ಹಕ್ಕಿಗಳು ಗೂಡಿನ ಕಡೆಗೆ ಹಾರುವಂತೆ, ಕೋಪವಿಲ್ಲದ ನನ್ನ ಮನಸ್ಸುಗಳು ಶ್ರೇಯಸ್ಸನ್ನು ಅರಸಿ ನಿನ್ನೆಡೆಗೆ ಹಾರುತ್ತವೆ.',
          },
        },
        {
          text: 'कदा क्षत्रश्रियं नरमा वरुणं करामहे ।\nमृळीकायोरुचक्षसम् ॥',
          meaning: {
            en: 'When shall we bring here, for our mercy, Varuna, the hero glorious in power, the far-seeing one?',
            kn: 'ಕ್ಷಾತ್ರತೇಜಸ್ಸಿನಿಂದ ಶೋಭಿಸುವ, ದೂರದರ್ಶಿಯಾದ ವೀರ ವರುಣನನ್ನು ನಮ್ಮ ಮೇಲಿನ ಕರುಣೆಗಾಗಿ ಎಂದು ಇಲ್ಲಿಗೆ ಬರಮಾಡಿಕೊಳ್ಳುವೆವು?',
          },
        },
        {
          text: 'तदित्समानमाशाते वेनन्ता न प्र युच्छतः ।\nधृतव्रताय दाशुषे ॥',
          meaning: {
            en: 'Mitra and Varuna, longing for it, share this offering together and never neglect the giver who keeps his vows.',
            kn: 'ಮಿತ್ರಾವರುಣರು ಬಯಸಿ ಈ ಹವಿಸ್ಸನ್ನು ಒಟ್ಟಾಗಿ ಸ್ವೀಕರಿಸುತ್ತಾರೆ; ವ್ರತನಿಷ್ಠನಾದ ದಾನಿಯನ್ನು ಎಂದೂ ಕೈಬಿಡುವುದಿಲ್ಲ.',
          },
        },
        {
          text: 'वेदा यो वीनां पदमन्तरिक्षेण पतताम् ।\nवेद नावः समुद्रियः ॥',
          meaning: {
            en: 'He knows the path of the birds that fly through the air; dwelling in the ocean, he knows the course of ships.',
            kn: 'ಆಕಾಶದಲ್ಲಿ ಹಾರುವ ಹಕ್ಕಿಗಳ ದಾರಿಯನ್ನು ಅವನು ಬಲ್ಲ; ಸಮುದ್ರದಲ್ಲಿರುವ ಅವನು ಹಡಗುಗಳ ದಾರಿಯನ್ನೂ ಬಲ್ಲ.',
          },
        },
        {
          text: 'वेद मासो धृतव्रतो द्वादश प्रजावतः ।\nवेदा य उपजायते ॥',
          meaning: {
            en: 'Keeper of the law, he knows the twelve months with their offspring, and he knows the month that is born in addition.',
            kn: 'ನಿಯಮಪಾಲಕನಾದ ಅವನು ತಮ್ಮ ಸಂತತಿಯೊಡನೆ ಹನ್ನೆರಡು ತಿಂಗಳುಗಳನ್ನೂ ಬಲ್ಲ; ಹೆಚ್ಚುವರಿಯಾಗಿ ಹುಟ್ಟುವ ಅಧಿಕಮಾಸವನ್ನೂ ಬಲ್ಲ.',
          },
        },
        {
          text: 'वेद वातस्य वर्तनिमुरोरृष्वस्य बृहतः ।\nवेदा ये अध्यासते ॥',
          meaning: {
            en: 'He knows the track of the wind, wide, high and mighty, and he knows those who dwell above.',
            kn: 'ವಿಶಾಲವೂ ಉನ್ನತವೂ ಮಹತ್ತೂ ಆದ ಗಾಳಿಯ ಮಾರ್ಗವನ್ನು ಅವನು ಬಲ್ಲ; ಮೇಲೆ ನೆಲೆಸಿರುವವರನ್ನೂ ಬಲ್ಲ.',
          },
        },
        {
          text: 'नि षसाद धृतव्रतो वरुणः पस्त्यास्वा ।\nसाम्राज्याय सुक्रतुः ॥',
          meaning: {
            en: 'Varuna, keeper of the law, wise in action, has taken his seat among his people to rule as sovereign.',
            kn: 'ನಿಯಮಪಾಲಕನೂ ಸತ್ಕರ್ಮಿಯೂ ಆದ ವರುಣನು ಸಾಮ್ರಾಜ್ಯವನ್ನಾಳಲು ತನ್ನ ಪ್ರಜೆಗಳ ನಡುವೆ ಆಸೀನನಾಗಿದ್ದಾನೆ.',
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
      note: 'Standing, turn to each direction in turn and bow with folded hands, beginning with the east: east, south, west, north; then upwards, downwards, the space around (antariksha) and the intermediate directions. Then salute the guardians of the directions by name, bowing towards each.',
      noteKn: 'ನಿಂತುಕೊಂಡು ಪೂರ್ವದಿಂದ ಆರಂಭಿಸಿ ಪ್ರತಿ ದಿಕ್ಕಿಗೂ ತಿರುಗಿ ಕೈಮುಗಿದು ನಮಸ್ಕರಿಸಿ: ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ; ನಂತರ ಮೇಲೆ, ಕೆಳಗೆ, ಸುತ್ತಲಿನ ಆಕಾಶ (ಅಂತರಿಕ್ಷ), ಉಪದಿಕ್ಕುಗಳು. ಆಮೇಲೆ ದಿಕ್ಪಾಲಕರನ್ನು ಹೆಸರಿಸಿ ಅವರವರ ದಿಕ್ಕಿಗೆ ನಮಸ್ಕರಿಸಿ.',
      when: { tradition: ['madhva'], time: ['morning', 'midday'] },
      verses: [
        {
          text: 'ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽन्तरिक्षायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ॥',
          meaning: {
            en: 'Salutations to the east, south, west and north, to the direction above, the direction below, the mid-space and the intermediate directions — and salutations again and again to the deities who dwell in each of them.',
            kn: 'ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ ದಿಕ್ಕುಗಳಿಗೂ, ಮೇಲಿನ, ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ, ಅಂತರಿಕ್ಷಕ್ಕೂ, ಉಪದಿಕ್ಕುಗಳಿಗೂ ನಮಸ್ಕಾರ; ಅವುಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ॐ इन्द्राय नमः । ॐ अग्नये नमः । ॐ यमाय नमः ।\nॐ निरृतये नमः । ॐ वरुणाय नमः । ॐ वायवे नमः ।\nॐ कुबेराय नमः । ॐ ईशानाय नमः ।\nॐ ब्रह्मणे नमः । ॐ अनन्ताय नमः ॥',
          meaning: {
            en: 'Salutations to the guardians of the directions — Indra, Agni, Yama, Nirriti, Varuna, Vayu, Kubera and Ishana — and to Brahma above and Ananta below.',
            kn: 'ದಿಕ್ಪಾಲಕರಾದ ಇಂದ್ರ, ಅಗ್ನಿ, ಯಮ, ನಿರೃತಿ, ವರುಣ, ವಾಯು, ಕುಬೇರ, ಈಶಾನರಿಗೂ, ಮೇಲಿನ ದಿಕ್ಕಿನ ಬ್ರಹ್ಮದೇವರಿಗೂ ಕೆಳಗಿನ ದಿಕ್ಕಿನ ಅನಂತನಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Digdevata namaskara (salutation to the directions)',
      note: 'Evening: standing, begin with the west and go round in order — west, north, east, south — saying for each the line that names it; then upwards, downwards, the space around and the intermediate directions. Then salute the guardians of the directions by name, bowing towards each.',
      noteKn: 'ಸಂಜೆ: ನಿಂತುಕೊಂಡು ಪಶ್ಚಿಮದಿಂದ ಆರಂಭಿಸಿ ಕ್ರಮವಾಗಿ — ಪಶ್ಚಿಮ, ಉತ್ತರ, ಪೂರ್ವ, ದಕ್ಷಿಣ — ಆ ದಿಕ್ಕನ್ನು ಹೆಸರಿಸುವ ವಾಕ್ಯ ಹೇಳುತ್ತಾ ನಮಸ್ಕರಿಸಿ; ನಂತರ ಮೇಲೆ, ಕೆಳಗೆ, ಸುತ್ತಲಿನ ಆಕಾಶ, ಉಪದಿಕ್ಕುಗಳು. ಆಮೇಲೆ ದಿಕ್ಪಾಲಕರನ್ನು ಹೆಸರಿಸಿ ಅವರವರ ದಿಕ್ಕಿಗೆ ನಮಸ್ಕರಿಸಿ.',
      when: { tradition: ['madhva'], time: ['evening'] },
      verses: [
        {
          text: 'ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽन्तरिक्षायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ॥',
          meaning: {
            en: 'Salutations to the east, south, west and north, to the direction above, the direction below, the mid-space and the intermediate directions — and salutations again and again to the deities who dwell in each of them.',
            kn: 'ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ ದಿಕ್ಕುಗಳಿಗೂ, ಮೇಲಿನ, ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ, ಅಂತರಿಕ್ಷಕ್ಕೂ, ಉಪದಿಕ್ಕುಗಳಿಗೂ ನಮಸ್ಕಾರ; ಅವುಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ॐ इन्द्राय नमः । ॐ अग्नये नमः । ॐ यमाय नमः ।\nॐ निरृतये नमः । ॐ वरुणाय नमः । ॐ वायवे नमः ।\nॐ कुबेराय नमः । ॐ ईशानाय नमः ।\nॐ ब्रह्मणे नमः । ॐ अनन्ताय नमः ॥',
          meaning: {
            en: 'Salutations to the guardians of the directions — Indra, Agni, Yama, Nirriti, Varuna, Vayu, Kubera and Ishana — and to Brahma above and Ananta below.',
            kn: 'ದಿಕ್ಪಾಲಕರಾದ ಇಂದ್ರ, ಅಗ್ನಿ, ಯಮ, ನಿರೃತಿ, ವರುಣ, ವಾಯು, ಕುಬೇರ, ಈಶಾನರಿಗೂ, ಮೇಲಿನ ದಿಕ್ಕಿನ ಬ್ರಹ್ಮದೇವರಿಗೂ ಕೆಳಗಿನ ದಿಕ್ಕಿನ ಅನಂತನಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Digdevata namaskara (salutation to the directions)',
      note: 'Standing, turn to each direction in turn and bow with folded hands (morning and midday from the east, evening from the west); then upwards, downwards, the space around and the intermediate directions. Karnataka Smarta manuals then recite one Rigvedic rik to the guardian of each direction — east (Indra), south-east (Agni), south (Yama), south-west (Nirriti), west (Varuna), north-west (Vayu), north (Soma), north-east (Ishana) — bowing towards it.',
      noteKn: 'ನಿಂತುಕೊಂಡು ಪ್ರತಿ ದಿಕ್ಕಿಗೂ ತಿರುಗಿ ಕೈಮುಗಿದು ನಮಸ್ಕರಿಸಿ (ಬೆಳಗ್ಗೆ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವದಿಂದ, ಸಂಜೆ ಪಶ್ಚಿಮದಿಂದ); ನಂತರ ಮೇಲೆ, ಕೆಳಗೆ, ಸುತ್ತಲಿನ ಆಕಾಶ, ಉಪದಿಕ್ಕುಗಳು. ಕರ್ನಾಟಕದ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು ನಂತರ ಪ್ರತಿ ದಿಕ್ಪಾಲಕನಿಗೆ ಒಂದೊಂದು ಋಕ್ಕನ್ನು ಹೇಳುತ್ತಾ ಆ ದಿಕ್ಕಿಗೆ ನಮಸ್ಕರಿಸುತ್ತವೆ — ಪೂರ್ವ (ಇಂದ್ರ), ಆಗ್ನೇಯ (ಅಗ್ನಿ), ದಕ್ಷಿಣ (ಯಮ), ನೈಋತ್ಯ (ನಿರೃತಿ), ಪಶ್ಚಿಮ (ವರುಣ), ವಾಯವ್ಯ (ವಾಯು), ಉತ್ತರ (ಸೋಮ), ಈಶಾನ್ಯ (ಈಶಾನ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽन्तरिक्षायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ॥',
          meaning: {
            en: 'Salutations to the east, south, west and north, to the direction above, the direction below, the mid-space and the intermediate directions — and salutations again and again to the deities who dwell in each of them.',
            kn: 'ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ ದಿಕ್ಕುಗಳಿಗೂ, ಮೇಲಿನ, ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ, ಅಂತರಿಕ್ಷಕ್ಕೂ, ಉಪದಿಕ್ಕುಗಳಿಗೂ ನಮಸ್ಕಾರ; ಅವುಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'इन्द्रं वो विश्वतस्परि हवामहे जनेभ्यः ।\nअस्माकमस्तु केवलः ॥',
          meaning: {
            en: '(East) We call Indra for you from among all peoples; may he be ours alone.',
            kn: '(ಪೂರ್ವ) ಎಲ್ಲ ಜನರ ನಡುವಿನಿಂದ ಇಂದ್ರನನ್ನು ನಿಮಗಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮವನೇ ಆಗಿರಲಿ.',
          },
        },
        {
          text: 'अग्निं दूतं वृणीमहे होतारं विश्ववेदसम् ।\nअस्य यज्ञस्य सुक्रतुम् ॥',
          meaning: {
            en: '(South-east) We choose Agni as our messenger, the priest who possesses all, the skilful performer of this sacrifice.',
            kn: '(ಆಗ್ನೇಯ) ಸರ್ವಸಂಪನ್ನನಾದ ಹೋತೃವೂ ಈ ಯಜ್ಞವನ್ನು ಚೆನ್ನಾಗಿ ನಡೆಸುವವನೂ ಆದ ಅಗ್ನಿಯನ್ನು ದೂತನನ್ನಾಗಿ ವರಿಸುತ್ತೇವೆ.',
          },
        },
        {
          text: 'यमाय सोमं सुनुत यमाय जुहुता हविः ।\nयमं ह यज्ञो गच्छत्यग्निदूतो अरंकृतः ॥',
          meaning: {
            en: '(South) Press Soma for Yama, offer oblations to Yama; to Yama goes the sacrifice, well prepared, with Agni as its messenger.',
            kn: '(ದಕ್ಷಿಣ) ಯಮನಿಗಾಗಿ ಸೋಮವನ್ನು ಅರ್ಪಿಸಿ, ಯಮನಿಗೆ ಹವಿಸ್ಸನ್ನು ಹೋಮಮಾಡಿ; ಚೆನ್ನಾಗಿ ಸಿದ್ಧಗೊಂಡ ಯಜ್ಞವು ಅಗ್ನಿಯನ್ನು ದೂತನನ್ನಾಗಿ ಹೊಂದಿ ಯಮನನ್ನು ಸೇರುತ್ತದೆ.',
          },
        },
        {
          text: 'मो षु णः परापरा निरृतिर्दुर्हणा वधीत् ।\nपदीष्ट तृष्णया सह ॥',
          meaning: {
            en: '(South-west) Let not cruel Nirriti, hard to overcome, strike us down one after another; let her pass away together with craving.',
            kn: '(ನೈರುತ್ಯ) ಗೆಲ್ಲಲಾಗದ ಕ್ರೂರ ನಿರೃತಿಯು ನಮ್ಮನ್ನು ಒಬ್ಬರ ನಂತರ ಒಬ್ಬರಂತೆ ನಾಶಮಾಡದಿರಲಿ; ದಾಹದೊಂದಿಗೆ ಅವಳು ತೊಲಗಲಿ.',
          },
        },
        {
          text: 'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेळमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
          meaning: {
            en: '(West) Praising you with this hymn, I ask of you what the worshipper seeks with his offerings. Without anger, O Varuna, be attentive to us here; O widely praised one, do not take away our life.',
            kn: '(ಪಶ್ಚಿಮ) ಸ್ತೋತ್ರದಿಂದ ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತಾ, ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳ ಮೂಲಕ ಬಯಸುವುದನ್ನೇ ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ. ಓ ವರುಣ, ಕೋಪಗೊಳ್ಳದೆ ಇಲ್ಲಿ ನಮ್ಮನ್ನು ಗಮನಿಸು; ಎಲ್ಲರಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವವನೇ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಬೇಡ.',
          },
        },
        {
          text: 'तव वायवृतस्पते त्वष्टुर्जामातरद्भुत ।\nअवांस्या वृणीमहे ॥',
          meaning: {
            en: '(North-west) O Vayu, lord of the cosmic order, wondrous son-in-law of Tvashtri, we choose your protection.',
            kn: '(ವಾಯುವ್ಯ) ಋತದ ಒಡೆಯನೇ, ತ್ವಷ್ಟೃವಿನ ಅದ್ಭುತ ಅಳಿಯನೇ, ಓ ವಾಯುವೇ, ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬೇಡುತ್ತೇವೆ.',
          },
        },
        {
          text: 'सोमो धेनुं सोमो अर्वन्तमाशुं सोमो वीरं कर्मण्यं ददाति ।\nसादन्यं विदथ्यं सभेयं पितृश्रवणं यो ददाशदस्मै ॥',
          meaning: {
            en: '(North) To the one who offers to him, Soma gives a milch cow, a swift horse, and a capable son — fit for the home, the assembly and the council, bringing honour to his father.',
            kn: '(ಉತ್ತರ) ತನಗೆ ಅರ್ಪಿಸುವವನಿಗೆ ಸೋಮನು ಹಾಲು ಕೊಡುವ ಹಸು, ವೇಗದ ಕುದುರೆ, ಮನೆಗೂ ಸಭೆಗೂ ಯೋಗ್ಯನಾದ, ತಂದೆಗೆ ಕೀರ್ತಿ ತರುವ ಕರ್ಮಕುಶಲ ಮಗನನ್ನು ಕೊಡುತ್ತಾನೆ.',
          },
        },
        {
          text: 'तमीशानं जगतस्तस्थुषस्पतिं धियंजिन्वमवसे हूमहे वयम् ।\nपूषा नो यथा वेदसामसद्वृधे रक्षिता पायुरदब्धः स्वस्तये ॥',
          meaning: {
            en: '(North-east) We call for protection on Ishana, lord of all that moves and stands, who quickens our minds, so that Pushan may increase our wealth and be our unfailing guardian for our welfare.',
            kn: '(ಈಶಾನ್ಯ) ಚರಾಚರ ಜಗತ್ತಿನ ಒಡೆಯನೂ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವವನೂ ಆದ ಈಶಾನನನ್ನು ರಕ್ಷಣೆಗಾಗಿ ಕರೆಯುತ್ತೇವೆ; ಪೂಷನು ನಮ್ಮ ಸಂಪತ್ತನ್ನು ವೃದ್ಧಿಸಿ, ಸೋಲದ ರಕ್ಷಕನಾಗಿ ನಮ್ಮ ಕ್ಷೇಮವನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्यादिदेवतानमस्कारः',
      titleEn: 'Salutation to Sandhya and the deities',
      note: 'Standing with folded hands, salute Sandhya and the other deities, the sages, teachers and parents. With कामोऽकार्षीत्… confess that desire and anger, not your true self, drove your wrongs. Then bow to Vasudeva and Sandhya, to Krishna as the friend of cows and Brahmanas, and take refuge in Durga. Then make a full prostration (sashtanga namaskara).',
      noteKn: 'ನಿಂತು ಕೈಮುಗಿದು ಸಂಧ್ಯಾದೇವಿ ಮುಂತಾದ ದೇವತೆಗಳಿಗೂ ಋಷಿಮುನಿಗಳಿಗೂ ಗುರುಗಳಿಗೂ ತಂದೆತಾಯಿಯರಿಗೂ ನಮಸ್ಕರಿಸಿ. “ಕಾಮೋಽಕಾರ್ಷೀತ್” ಹೇಳುವಾಗ ನನ್ನ ತಪ್ಪುಗಳಿಗೆ ಕಾಮಕ್ರೋಧಗಳೇ ಕಾರಣ ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು. ನಂತರ ವಾಸುದೇವನಿಗೂ ಸಂಧ್ಯಾದೇವಿಗೂ, ಗೋಬ್ರಾಹ್ಮಣಹಿತನಾದ ಶ್ರೀಕೃಷ್ಣನಿಗೂ ನಮಸ್ಕರಿಸಿ, ದುರ್ಗಾದೇವಿಯಲ್ಲಿ ಶರಣು ಹೋಗಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ॐ सन्ध्यायै नमः । सावित्र्यै नमः । गायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमः । मुनिभ्यो नमः । ऋषिभ्यो नमः ।\nगुरुभ्यो नमः । मातृभ्यो नमः । पितृभ्यो नमः । आचार्येभ्यो नमः ।\nकामोऽकार्षीन्नमो नमः । मन्युरकार्षीन्नमो नमः ॥',
          meaning: {
            en: 'Salutations to Sandhya, Savitri, Gayatri and Sarasvati, to all the deities, to the sages and seers, to the gurus, mothers, fathers and teachers. Desire did it, salutations; anger did it, salutations.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ಗಾಯತ್ರೀ, ಸರಸ್ವತೀ ದೇವಿಯರಿಗೂ, ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ, ಮುನಿಗಳಿಗೂ ಋಷಿಗಳಿಗೂ, ಗುರುಗಳಿಗೂ ತಾಯಿತಂದೆಯರಿಗೂ ಆಚಾರ್ಯರಿಗೂ ನಮಸ್ಕಾರ. ಕಾಮವೇ ಮಾಡಿಸಿತು, ನಮಸ್ಕಾರ; ಕ್ರೋಧವೇ ಮಾಡಿಸಿತು, ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ॐ नमो भगवते वासुदेवाय ।\nयां सदा सर्वभूतानि स्थावराणि चराणि च ।\nसायं प्रातर्नमस्यन्ति सा मां सन्ध्याभिरक्षतु ॥',
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
          text: 'ॐ नमो भगवते वासुदेवाय ।\nयां सदा सर्वभूतानि स्थावराणि चराणि च ।\nसायं प्रातर्नमस्यन्ति सा मां सन्ध्याभिरक्षतु ॥',
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
      title: 'गोत्राभिवादनम्',
      titleEn: 'Abhivadana (formal self-introduction)',
      note: 'Recite the peace prayer and blessing. Then, for abhivadana, hold the right ear with the left hand and the left ear with the right hand (arms crossed), and give your pravara (the names of the rishis of your gotra), gotra, sutra, shakha and name in place of the अमुक words; at the end bow and touch the ground. Do achamana twice afterwards. If you do not know your pravara, ask your elders or purohita; Kshatriyas say वर्मा and Vaishyas गुप्तः in place of शर्मा.',
      noteKn: 'ಶಾಂತಿಮಂತ್ರ ಮತ್ತು ಆಶೀರ್ವಾದ ವಾಕ್ಯಗಳನ್ನು ಹೇಳಿ. ನಂತರ ಅಭಿವಾದನಕ್ಕೆ ಕೈಗಳನ್ನು ಅಡ್ಡವಾಗಿಸಿ ಎಡಗೈಯಿಂದ ಬಲ ಕಿವಿಯನ್ನೂ ಬಲಗೈಯಿಂದ ಎಡ ಕಿವಿಯನ್ನೂ ಹಿಡಿದು, “ಅಮುಕ” ಎಂದಿರುವಲ್ಲಿ ನಿಮ್ಮ ಪ್ರವರ (ಗೋತ್ರದ ಋಷಿಗಳ ಹೆಸರುಗಳು), ಗೋತ್ರ, ಸೂತ್ರ, ಶಾಖೆ ಮತ್ತು ಹೆಸರನ್ನು ಹೇಳಿ; ಕೊನೆಯಲ್ಲಿ ಬಾಗಿ ನೆಲವನ್ನು ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಿ. ನಂತರ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. ಪ್ರವರ ತಿಳಿಯದಿದ್ದರೆ ಹಿರಿಯರನ್ನು ಅಥವಾ ಪುರೋಹಿತರನ್ನು ಕೇಳಿ; ಕ್ಷತ್ರಿಯರು “ಶರ್ಮಾ” ಬದಲು “ವರ್ಮಾ”, ವೈಶ್ಯರು “ಗುಪ್ತಃ” ಎನ್ನುತ್ತಾರೆ.',
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
