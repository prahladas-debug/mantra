/**
 * Yajurveda Sandhyavandanam (Krishna-Yajurveda, Taittiriya shakha, Apastamba sutra):
 * morning, midday and evening, Madhva and Smarta, as reader-selectable variants. Each step
 * is a section per tradition (and per time where the rubric differs), so the reader sees one
 * clear instruction (note / noteKn) followed by the mantras, as in a printed pocket manual.
 * NOT YET PROOFREAD page by page against one printed edition.
 *
 * Sandhya manuals used:
 * - Madhva (primary): Pt. Vadirajacharya Karanam (comp.), "Yajurvediya Trikala
 *   Sandhyavandane", Vishva Madhva Maha Parishat / Sri Uttaradi Matha, Bengaluru, 2011
 *   (Kannada). archive.org: Yajurveda_Trikala_Sandhyavandana_-_Vadirajacharya_Karnam
 *   (page images checked for the prayers after the arghyas and the asana mantras).
 * - Madhva: P. Vedavyasacharya (pub.), "Yajurveda Trikala Sandhyavandanamu", Sri Uttaradi
 *   Matha, Hyderabad (Telugu). archive.org: madhwa-yajurveda-sandhyavidhi
 * - Madhva: Sri Madhwamrutha, "Yajurveda Pratha / Sayam Sandhyavandhane" (Kannada),
 *   madhwamrutha.org (marjana order, asana mantras, ashtakshara japa, abhivadana, samarpana).
 * - Madhva (Rigveda, for shared prayers): A. Basargekar, Rgvediya Asvalayana Pratah
 *   Sandhyavandanam (sanskritdocuments "rgsandhya"; Sanchaya archive copy).
 * - Smarta (primary): Painganadu Venkatarama Sastri, "Smarta Yajurveda Sandhyavandanam"
 *   (Tamil script, Kanchi tradition, 1986/1997). archive.org: SandhyaVandanam_201802
 * - Smarta: B. V. Kamesvara Aiyar, "The Sandhyavandanam of Rig, Yajus and Sama Vedins"
 *   (Madras). archive.org: sv-bvka-ao
 * - Smarta: Mylapore Vedadhyayana Sabha sandhyavandanam (vishvAsa/vedAH_yajuH, ApastambaH
 *   paddhatiH) and S. Sushil Narayanan et al., "Yajurveda Kaalai Sandhyaavandanam" (2020,
 *   github sreenivasanac/sandhyavandanam) — Yama, Narmada / Astika and namah savitre
 *   salutations, arghya sankalpa.
 * - Smarta: stotranidhi.com, "Krishna Yajurveda Sandhyavandanam" (Telugu) — arghya counts,
 *   nyasa, 24 mudras; Vishvamitra-smriti 61–64 (sanskrit/raw_etexts) for the mudra names.
 * - Smarta (Karnataka): "Rgvediya Smarta Nityahnika Vidhih" (archive.org:
 *   sandhyavandane-balkur-copys); Sudharthi, "Trimatastha Sandhyavandane" (1992).
 *
 * Vedic mantras were checked (accents removed) against the vishvAsa/vedAH_yajuH texts of
 * the Taittiriya Samhita, Brahmana 2.4.4 / 2.6.6 and Aranyaka 2.2, 2.20, 4.42 and 10.
 * Generated from the previous version by a rebuild script; edit this file directly from now on.
 */
import type { Mantra } from '../types';

export const sandhyaVandaneYajurveda: Mantra = {
  id: 'sandhya-vandane-yajurveda',
  title: 'यजुर्वेदसन्ध्यावन्दनम्',
  titleEn: 'Yajurveda Sandhyavandane',
  category: 'sandhya',
  order: 2,
  deity: 'Savitri / Gayatri (Sri Lakshminarayana in the solar orb)',
  source: 'Taittiriya Samhita, Brahmana and Aranyaka (Mahanarayana); Apastamba practice',
  summary: 'The complete daily twilight worship of Krishna-Yajurvedins of the Taittiriya shakha, step by step as in a printed pocket manual: achamana, pranayama, sankalpa, marjana, prashana, punar-marjana, aghamarshana, arghya to the Sun, tarpana, Gayatri avahana, nyasa, japa and udvasana, upasthana, salutations, abhivadana and samarpana. Choose Madhva or Smarta and the time of day at the top: each step then shows only its own words and what to do with the hands, water, posture and direction.',
  summaryKn: 'ತೈತ್ತಿರೀಯ ಶಾಖೆಯ ಕೃಷ್ಣಯಜುರ್ವೇದಿಗಳ ದೈನಂದಿನ ಸಂಧ್ಯಾವಂದನೆಯ ಪೂರ್ಣ ಕ್ರಮ, ಮುದ್ರಿತ ಕೈಪಿಡಿಯಂತೆ ಹಂತಹಂತವಾಗಿ: ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ಸಂಕಲ್ಪ, ಮಾರ್ಜನ, ಪ್ರಾಶನ, ಪುನರ್ಮಾರ್ಜನ, ಅಘಮರ್ಷಣ, ಸೂರ್ಯನಿಗೆ ಅರ್ಘ್ಯ, ತರ್ಪಣ, ಗಾಯತ್ರೀ ಆವಾಹನ, ನ್ಯಾಸ, ಜಪ, ಉದ್ವಾಸನ, ಉಪಸ್ಥಾನ, ನಮಸ್ಕಾರಗಳು, ಅಭಿವಾದನ ಮತ್ತು ಸಮರ್ಪಣೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಸಂಪ್ರದಾಯವನ್ನೂ ಕಾಲವನ್ನೂ ಆರಿಸಿ; ಪ್ರತಿ ಹಂತದಲ್ಲಿ ಅದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಮಂತ್ರಗಳೂ ಕೈ, ನೀರು, ಆಸನ, ದಿಕ್ಕುಗಳ ಬಗ್ಗೆ ಸೂಚನೆಗಳೂ ಮಾತ್ರ ಕಾಣಿಸುತ್ತವೆ.',
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
  contentNote: 'Collated from Uttaradi Matha (Madhva) and Kanchi / Karnataka Smarta manuals; not yet proofread page by page against one printed edition. Families differ in small details — follow your elders or purohita where they differ. Not included (sources disagree or only one could be read): the Madhva closing shlokas akshayam karma… and naham karta harih karta…, the time-specific Smarta Gayatri dhyana shlokas, the eight closing mudras, and the gopichandana mudra-dharana mantras. Brahmayajna and agnikarya are separate rites.',
  sections: [
    {
      title: 'पूर्वाङ्गम्',
      titleEn: 'Preparation',
      note: 'Bathe before the morning sandhya; at midday and in the evening at least wash the hands, feet and face and rinse the mouth. Wear a clean, dry dhoti in kachche style and an upper cloth, with the sacred thread over the left shoulder. Sit on a darbha mat, a woollen cloth or a wooden plank (never on the bare floor) in a clean place: facing east in the morning, east or north at midday, and north in the evening (the evening arghya and japa are then done facing west). Keep ready a panchapatre of water with an uddharane (small spoon) for achamana, a second vessel of fresh water for arghya, a plate to receive the offered water, and tulasi leaves or darbha if you use them. If your family wears a darbha pavitra, put it on the right ring finger now. Take a little water in the right palm, recite this verse and sprinkle it on your head and body.',
      noteKn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಗೆ ಮೊದಲು ಸ್ನಾನ ಮಾಡಬೇಕು; ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಂಜೆ ಕನಿಷ್ಠ ಕೈಕಾಲು ಮುಖ ತೊಳೆದು ಬಾಯಿ ಮುಕ್ಕಳಿಸಬೇಕು. ಶುಭ್ರವಾದ ಒಣ ಪಂಚೆಯನ್ನು ಕಚ್ಚೆ ಹಾಕಿ ಉಟ್ಟು, ಉತ್ತರೀಯ ಹೊದ್ದು, ಯಜ್ಞೋಪವೀತ ಎಡಭುಜದ ಮೇಲಿರಲಿ. ಶುದ್ಧ ಸ್ಥಳದಲ್ಲಿ ದರ್ಭಾಸನ, ಕಂಬಳಿ ಅಥವಾ ಮಣೆಯ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಿ (ಬರೀ ನೆಲದ ಮೇಲೆ ಬೇಡ): ಬೆಳಗ್ಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಾಭಿಮುಖವಾಗಿ, ಸಂಜೆ ಉತ್ತರಾಭಿಮುಖವಾಗಿ (ಸಂಜೆಯ ಅರ್ಘ್ಯ ಮತ್ತು ಜಪವನ್ನು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಮಾಡಬೇಕು). ಆಚಮನಕ್ಕೆ ಉದ್ಧರಣೆಯೊಂದಿಗೆ ನೀರಿನ ಪಂಚಪಾತ್ರೆ, ಅರ್ಘ್ಯಕ್ಕೆ ಶುದ್ಧಜಲದ ಇನ್ನೊಂದು ಪಾತ್ರೆ, ಅರ್ಪಿಸಿದ ನೀರು ಬಿಡಲು ಒಂದು ತಟ್ಟೆ, ಬಳಸುವುದಾದರೆ ತುಳಸಿ ಅಥವಾ ದರ್ಭೆ ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ. ಮನೆತನದಲ್ಲಿ ದರ್ಭೆಯ ಪವಿತ್ರ ಧರಿಸುವ ಪದ್ಧತಿಯಿದ್ದರೆ ಈಗ ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿಗೆ ಧರಿಸಿ. ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ಈ ಶ್ಲೋಕ ಹೇಳಿ ತಲೆ ಮತ್ತು ಮೈಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥',
          meaning: {
            en: 'Whether pure or impure, in whatever state one may be, whoever remembers the lotus-eyed Lord becomes pure within and without.',
            kn: 'ಶುದ್ಧನಾಗಿರಲಿ ಅಶುದ್ಧನಾಗಿರಲಿ, ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದರೂ, ಕಮಲನಯನನಾದ ಶ್ರೀಹರಿಯನ್ನು ಸ್ಮರಿಸುವವನು ಒಳಗೂ ಹೊರಗೂ ಶುದ್ಧನಾಗುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'पूर्वाङ्गम्',
      titleEn: 'Preparation',
      note: 'Bathe before the morning sandhya; at midday and in the evening at least wash the hands, feet and face and rinse the mouth. Wear a clean, dry dhoti in kachche style and an upper cloth, with the sacred thread over the left shoulder, and apply bhasma or your family tilaka. Sit on a darbha mat, a woollen cloth or a wooden plank (never on the bare floor): facing east in the morning, east or north at midday, and west in the evening. Keep ready a panchapatre of water with an uddharane for achamana, a vessel of fresh water for arghya and a plate to receive the offered water, and put the darbha pavitra on the right ring finger if your family wears one. Take a little water in the right palm, recite this verse and sprinkle it on your head.',
      noteKn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಗೆ ಮೊದಲು ಸ್ನಾನ ಮಾಡಬೇಕು; ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಂಜೆ ಕನಿಷ್ಠ ಕೈಕಾಲು ಮುಖ ತೊಳೆದು ಬಾಯಿ ಮುಕ್ಕಳಿಸಬೇಕು. ಶುಭ್ರವಾದ ಒಣ ಪಂಚೆಯನ್ನು ಕಚ್ಚೆ ಹಾಕಿ ಉಟ್ಟು, ಉತ್ತರೀಯ ಹೊದ್ದು, ಯಜ್ಞೋಪವೀತ ಎಡಭುಜದ ಮೇಲಿರಲಿ; ಭಸ್ಮ ಅಥವಾ ಮನೆತನದ ತಿಲಕ ಧರಿಸಿ. ದರ್ಭಾಸನ, ಕಂಬಳಿ ಅಥವಾ ಮಣೆಯ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಿ: ಬೆಳಗ್ಗೆ ಪೂರ್ವಕ್ಕೆ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ, ಸಂಜೆ ಪಶ್ಚಿಮಕ್ಕೆ ಮುಖಮಾಡಿ. ಉದ್ಧರಣೆಯೊಂದಿಗೆ ಪಂಚಪಾತ್ರೆ, ಅರ್ಘ್ಯಕ್ಕೆ ಶುದ್ಧಜಲ, ನೀರು ಬಿಡಲು ತಟ್ಟೆ ಇಟ್ಟುಕೊಳ್ಳಿ; ಪದ್ಧತಿಯಿದ್ದರೆ ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿಗೆ ದರ್ಭೆಯ ಪವಿತ್ರ ಧರಿಸಿ. ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ಈ ಶ್ಲೋಕ ಹೇಳಿ ತಲೆಯ ಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥',
          meaning: {
            en: 'Whether pure or impure, in whatever state one may be, whoever remembers the lotus-eyed Lord becomes pure within and without.',
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
      note: 'Manuals speak of three kinds of achamana. (1) Shrauta or Vaidika achamana, with the names of the Vedas (ऋग्वेदाय स्वाहा …). (2) Achamana with the Gayatri and apo hi shtha, with twenty-four touches — the Devi Bhagavata and Andhra manuals call this one Shrauta, the Madhva commentary on the Sadachara-smriti calls it Smarta. (3) Keshavadi achamana with the twenty-four names of Vishnu — called Pauranika in the Devi Bhagavata and Vaishnava in the Madhva commentary. Sip from the base of the palm (gokarna shape, water to cover a grain of urad) three times, with ॐ ऋग्वेदाय स्वाहा, ॐ यजुर्वेदाय स्वाहा and ॐ सामवेदाय स्वाहा. Then, with the wet hand, wipe the lips twice (Atharvaveda; Itihasa-Purana) and touch the mouth (Agni); sprinkle the left hand (the stars) and the feet (Vishnu); touch the eyes with thumb and ring finger (Moon, Sun), the nostrils with thumb and index finger (prana, apana), the ears with thumb and little finger (the directions), the upper arms with thumb and middle finger (Indra), the heart with four fingers (Rudra), the navel with the thumb (Earth), and the head with all the fingers; let the water left in the hand drip away for Kubera and all the gods (Baudhayana, in the Brahma-karma-samuchchaya; the Ashvalayana rule also has the sips with Om and svaha). Many Smarta families, especially those who follow the Vedic (grihya) manuals, do this Shrauta achamana first at the start of sandhya and of Vedic rites and then the Keshavadi achamana; others do only the Keshavadi. Follow your family.',
      noteKn: 'ಪುಸ್ತಕಗಳು ಮೂರು ಬಗೆಯ ಆಚಮನಗಳನ್ನು ಹೇಳುತ್ತವೆ: (೧) ವೇದಗಳ ಹೆಸರುಗಳಿಂದ ಮಾಡುವ ಶ್ರೌತ ಅಥವಾ ವೈದಿಕ ಆಚಮನ (“ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ…”). (೨) ಗಾಯತ್ರಿ ಮತ್ತು “ಆಪೋ ಹಿಷ್ಠಾ”ಗಳಿಂದ ಇಪ್ಪತ್ನಾಲ್ಕು ಸ್ಪರ್ಶಗಳೊಡನೆ ಮಾಡುವ ಆಚಮನ — ದೇವೀಭಾಗವತ ಮತ್ತು ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು ಇದನ್ನು ಶ್ರೌತ ಎನ್ನುತ್ತವೆ, ಸದಾಚಾರಸ್ಮೃತಿಯ ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನ ಸ್ಮಾರ್ತ ಎನ್ನುತ್ತದೆ. (೩) ವಿಷ್ಣುವಿನ ಇಪ್ಪತ್ನಾಲ್ಕು ನಾಮಗಳಿಂದ ಮಾಡುವ ಕೇಶವಾದಿ ಆಚಮನ — ದೇವೀಭಾಗವತದಲ್ಲಿ ಪೌರಾಣಿಕ, ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ವೈಷ್ಣವ ಆಚಮನ. ಗೋಕರ್ಣಾಕಾರದ ಅಂಗೈಯ ಬುಡದಿಂದ (ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು) “ಓಂ ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ”, “ಓಂ ಯಜುರ್ವೇದಾಯ ಸ್ವಾಹಾ”, “ಓಂ ಸಾಮವೇದಾಯ ಸ್ವಾಹಾ” ಎಂದು ಮೂರು ಬಾರಿ ಸೇವಿಸಿ. ನಂತರ ಒದ್ದೆ ಕೈಯಿಂದ ತುಟಿಗಳನ್ನು ಎರಡು ಬಾರಿ ಒರೆಸಿ (ಅಥರ್ವವೇದ; ಇತಿಹಾಸ–ಪುರಾಣ), ಬಾಯಿ ಮುಟ್ಟಿ (ಅಗ್ನಿ); ಎಡಗೈಗೆ (ನಕ್ಷತ್ರಗಳು), ಪಾದಗಳಿಗೆ (ವಿಷ್ಣು) ನೀರು ಪ್ರೋಕ್ಷಿಸಿ; ಹೆಬ್ಬೆರಳು–ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಕಣ್ಣುಗಳು (ಚಂದ್ರ, ಸೂರ್ಯ), ಹೆಬ್ಬೆರಳು–ತೋರುಬೆರಳಿನಿಂದ ಮೂಗಿನ ಹೊಳ್ಳೆಗಳು (ಪ್ರಾಣ, ಅಪಾನ), ಹೆಬ್ಬೆರಳು–ಕಿರುಬೆರಳಿನಿಂದ ಕಿವಿಗಳು (ದಿಕ್ಕುಗಳು), ಹೆಬ್ಬೆರಳು–ನಡುಬೆರಳಿನಿಂದ ತೋಳುಗಳು (ಇಂದ್ರ), ನಾಲ್ಕು ಬೆರಳುಗಳಿಂದ ಹೃದಯ (ರುದ್ರ), ಹೆಬ್ಬೆರಳಿನಿಂದ ನಾಭಿ (ಪೃಥ್ವಿ), ಎಲ್ಲ ಬೆರಳುಗಳಿಂದ ತಲೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ; ಕೈಯಲ್ಲಿ ಉಳಿದ ನೀರನ್ನು ಕುಬೇರಾದಿ ಸಮಸ್ತ ದೇವತೆಗಳಿಗಾಗಿ ಬಿಡಿ (ಬ್ರಹ್ಮಕರ್ಮಸಮುಚ್ಚಯದಲ್ಲಿನ ಬೋಧಾಯನ ವಿಧಿ; ಆಶ್ವಲಾಯನರೂ ಪ್ರಣವ–ಸ್ವಾಹಾಕಾರ ಸಹಿತ ಮೂರು ಗುಟುಕುಗಳನ್ನು ಹೇಳುತ್ತಾರೆ). ಅನೇಕ ಸ್ಮಾರ್ತ ಮನೆತನಗಳು, ವಿಶೇಷವಾಗಿ ಗೃಹ್ಯಸೂತ್ರದ ಪುಸ್ತಕಗಳನ್ನು ಅನುಸರಿಸುವವರು, ಸಂಧ್ಯೆಯ ಮತ್ತು ವೈದಿಕ ಕರ್ಮಗಳ ಆರಂಭದಲ್ಲಿ ಮೊದಲು ಈ ಶ್ರೌತ ಆಚಮನ, ನಂತರ ಕೇಶವಾದಿ ಆಚಮನ ಮಾಡುತ್ತಾರೆ; ಕೆಲವರು ಕೇಶವಾದಿಯನ್ನು ಮಾತ್ರ ಮಾಡುತ್ತಾರೆ. ಮನೆತನದ ಪದ್ಧತಿ ಅನುಸರಿಸಿ.',
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
          text: 'आपो हि ष्ठा मयोभुवः । ता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे । यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः । उशतीरिव मातरः ।\nतस्मा अरं गमाम वः । यस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'The three riks to the Waters, as in marjana: bringers of happiness, give us strength and joy, share with us your most auspicious essence like loving mothers, and bring us to new life.',
            kn: 'ಮಾರ್ಜನದಲ್ಲಿ ಹೇಳಿದ ಜಲದೇವತೆಗಳ ಮೂರು ಋಕ್ಕುಗಳು: ಸುಖಕೊಡುವ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಶಕ್ತಿಯನ್ನೂ ಆನಂದವನ್ನೂ ಕೊಡಿ; ತಾಯಂದಿರಂತೆ ನಿಮ್ಮ ಮಂಗಳಕರ ರಸವನ್ನು ಉಣಿಸಿ; ನಮಗೆ ಹೊಸ ಚೈತನ್ಯ ಕೊಡಿ.',
          },
        },
        {
          text: 'ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhuh up to Satya. We meditate on the excellent radiance of the divine Savitri, who inspires our minds. Om: he is the waters, the light, the essence, the immortal, Brahman, pervading earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಆಗಿರುವ ಅವನೇ ಮೂರು ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮ.',
          },
        },
      ],
    },
    {
      title: 'आचमनम्',
      titleEn: 'Keshavadi achamana (Vaishnava / Pauranika) — twice',
      note: 'Hold the right palm hollowed like a cow’s ear (gokarna) and pour into it from the uddharane only as much water as would cover a grain of urad dal. With Keshava, Narayana and Madhava sip it three times from the base of the palm, without noise. Then, as each remaining name is said (Uttaradi Matha manual): Govinda — wash the left hand; Vishnu — wash the right hand; Madhusudana — upper lip; Trivikrama — lower lip; Vamana — right cheek; Sridhara — left cheek; Hrishikesha — join both hands; Padmanabha — both feet; Damodara — head; Sankarshana — just below the nose; Vasudeva — right nostril; Pradyumna — left nostril; Aniruddha — right eye; Purushottama — left eye; Adhokshaja — right ear; Narasimha — left ear; Achyuta — navel; Janardana — heart; Upendra — head; Hari — right arm; Sri Krishna — left arm. At the start of sandhya go through the whole achamana twice. Later, wherever this book says “achamana”, do it once. This is the Keshavadi achamana — the Vaishnava achamana of the Madhva commentary on the Sadachara-smriti, which prescribes it for every rite, and the Pauranika achamana of the Devi Bhagavata (sip with the names ending in svaha, touch with those ending in namah).',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಹಸುವಿನ ಕಿವಿಯಂತೆ (ಗೋಕರ್ಣ) ಮಡಚಿ, ಉದ್ಧರಣೆಯಿಂದ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ಮಾತ್ರ ನೀರು ಹಾಕಿಕೊಳ್ಳಿ. ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ನಾಮಗಳಿಂದ ಅಂಗೈಯ ಬುಡದಿಂದ ಶಬ್ದವಾಗದಂತೆ ಮೂರು ಬಾರಿ ಸೇವಿಸಿ. ನಂತರ ಉಳಿದ ನಾಮಗಳಿಗೆ (ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕದಂತೆ): ಗೋವಿಂದ — ಎಡಗೈ ತೊಳೆಯುವುದು; ವಿಷ್ಣು — ಬಲಗೈ ತೊಳೆಯುವುದು; ಮಧುಸೂದನ — ಮೇಲ್ತುಟಿ; ತ್ರಿವಿಕ್ರಮ — ಕೆಳತುಟಿ; ವಾಮನ — ಬಲಗೆನ್ನೆ; ಶ್ರೀಧರ — ಎಡಗೆನ್ನೆ; ಹೃಷೀಕೇಶ — ಎರಡೂ ಕೈ ಜೋಡಿಸುವುದು; ಪದ್ಮನಾಭ — ಎರಡೂ ಪಾದ; ದಾಮೋದರ — ತಲೆ; ಸಂಕರ್ಷಣ — ಮೂಗಿನ ಕೆಳಭಾಗ; ವಾಸುದೇವ — ಬಲ ಮೂಗಿನ ಹೊಳ್ಳೆ; ಪ್ರದ್ಯುಮ್ನ — ಎಡ ಹೊಳ್ಳೆ; ಅನಿರುದ್ಧ — ಬಲಗಣ್ಣು; ಪುರುಷೋತ್ತಮ — ಎಡಗಣ್ಣು; ಅಧೋಕ್ಷಜ — ಬಲಗಿವಿ; ನಾರಸಿಂಹ — ಎಡಗಿವಿ; ಅಚ್ಯುತ — ನಾಭಿ; ಜನಾರ್ದನ — ಹೃದಯ; ಉಪೇಂದ್ರ — ತಲೆ; ಹರಿ — ಬಲತೋಳು; ಶ್ರೀಕೃಷ್ಣ — ಎಡತೋಳು. ಸಂಧ್ಯೆಯ ಆರಂಭದಲ್ಲಿ ಇಡೀ ಆಚಮನವನ್ನು ಎರಡು ಬಾರಿ ಮಾಡಬೇಕು. ಮುಂದೆ “ಆಚಮನ” ಎಂದಲ್ಲೆಲ್ಲ ಒಮ್ಮೆ ಮಾಡಿದರೆ ಸಾಕು. ಇದು ಕೇಶವಾದಿ ಆಚಮನ — ಸದಾಚಾರಸ್ಮೃತಿಯ ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನ ಎಲ್ಲ ಕರ್ಮಗಳಿಗೂ ವಿಧಿಸುವ ವೈಷ್ಣವ ಆಚಮನ; ದೇವೀಭಾಗವತದ ಪೌರಾಣಿಕ ಆಚಮನವೂ ಇದೇ (“ಸ್ವಾಹಾ” ಎಂದು ಕೊನೆಗೊಳ್ಳುವ ನಾಮಗಳಿಂದ ಸೇವನೆ, “ನಮಃ” ಎಂದು ಕೊನೆಗೊಳ್ಳುವವುಗಳಿಂದ ಸ್ಪರ್ಶ).',
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
          text: 'ॐ गोविन्दाय नमः ।\nॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः ।\nॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः ।\nॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः ।\nॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः ।\nॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः ।\nॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः ।\nॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः ।\nॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः ।\nॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord by his holy names, from Govinda, Vishnu and Madhusudana through to Hari and Sri Krishna; with each name a part of the body is touched, offering it to him.',
            kn: 'ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ ಮೊದಲ್ಗೊಂಡು ಹರಿ, ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಭಗವಂತನ ಪವಿತ್ರ ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಒಂದೊಂದು ಅವಯವವನ್ನು ಮುಟ್ಟಿ ಅವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'आचमनम्',
      titleEn: 'Pauranika achamana (Achyuta, Ananta, Govinda; Keshavadi)',
      note: 'Hold the right palm hollowed like a cow’s ear (gokarna), take as much water as would cover a grain of urad dal, and sip it without noise at each of the three names Achyuta, Ananta and Govinda. Wipe the lips twice with the right thumb, wash the hand, and then touch (Kanchi manual): Keshava, Narayana — right and left cheek (thumb); Madhava, Govinda — right and left eye (ring finger); Vishno, Madhusudana — right and left nostril (index finger); Trivikrama, Vamana — right and left ear (little finger); Sridhara, Hrishikesha — right and left shoulder (middle finger); Padmanabha — navel or chest, Damodara — top of the head (all fingers). Many Karnataka Smarta families instead do the 24-name achamana shown next; follow your family. This is the Keshavadi (Pauranika) achamana, done after the Shrauta achamana by families who do both.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ತೆಗೆದುಕೊಂಡು ಅಚ್ಯುತ, ಅನಂತ, ಗೋವಿಂದ ಎಂಬ ಮೂರು ನಾಮಗಳಿಂದ ಶಬ್ದವಿಲ್ಲದೆ ಸೇವಿಸಿ. ಬಲ ಹೆಬ್ಬೆರಳಿನಿಂದ ತುಟಿಗಳನ್ನು ಎರಡು ಬಾರಿ ಒರೆಸಿ, ಕೈ ತೊಳೆದು (ಕಂಚಿ ಪುಸ್ತಕದಂತೆ) ಸ್ಪರ್ಶಿಸಿ: ಕೇಶವ, ನಾರಾಯಣ — ಬಲ, ಎಡ ಕೆನ್ನೆ (ಹೆಬ್ಬೆರಳು); ಮಾಧವ, ಗೋವಿಂದ — ಬಲ, ಎಡ ಕಣ್ಣು (ಉಂಗುರದ ಬೆರಳು); ವಿಷ್ಣೋ, ಮಧುಸೂದನ — ಬಲ, ಎಡ ಮೂಗಿನ ಹೊಳ್ಳೆ (ತೋರುಬೆರಳು); ತ್ರಿವಿಕ್ರಮ, ವಾಮನ — ಬಲ, ಎಡ ಕಿವಿ (ಕಿರುಬೆರಳು); ಶ್ರೀಧರ, ಹೃಷೀಕೇಶ — ಬಲ, ಎಡ ಭುಜ (ನಡುಬೆರಳು); ಪದ್ಮನಾಭ — ನಾಭಿ ಅಥವಾ ಎದೆ, ದಾಮೋದರ — ನೆತ್ತಿ (ಎಲ್ಲ ಬೆರಳುಗಳು). ಕರ್ನಾಟಕದ ಅನೇಕ ಸ್ಮಾರ್ತ ಮನೆತನಗಳು ಮುಂದೆ ಕೊಟ್ಟಿರುವ ೨೪ ನಾಮಗಳ ಆಚಮನ ಮಾಡುತ್ತಾರೆ; ಮನೆತನದ ಪದ್ಧತಿಯನ್ನು ಅನುಸರಿಸಿ. ಇದು ಕೇಶವಾದಿ (ಪೌರಾಣಿಕ) ಆಚಮನ; ಎರಡನ್ನೂ ಮಾಡುವ ಮನೆತನಗಳು ಶ್ರೌತ ಆಚಮನದ ನಂತರ ಇದನ್ನು ಮಾಡುತ್ತಾರೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ अच्युताय नमः ।\nॐ अनन्ताय नमः ।\nॐ गोविन्दाय नमः ॥',
          meaning: {
            en: 'Salutations to Achyuta, the never-falling; to Ananta, the endless; and to Govinda. (Kanchi form: a sip is taken with each name.)',
            kn: 'ಎಂದೂ ಚ್ಯುತನಾಗದ ಅಚ್ಯುತನಿಗೆ, ಕೊನೆಯಿಲ್ಲದ ಅನಂತನಿಗೆ, ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ. (ಕಂಚಿ ಪದ್ಧತಿ: ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಆಚಮನ.)',
          },
        },
        {
          text: 'केशव । नारायण । माधव । गोविन्द ।\nविष्णो । मधुसूदन । त्रिविक्रम । वामन ।\nश्रीधर । हृषीकेश । पद्मनाभ । दामोदर ॥',
          meaning: {
            en: 'The twelve names of Vishnu, from Keshava to Damodara, said while touching cheeks, eyes, nostrils, ears, shoulders, chest and head as described above (Kanchi form).',
            kn: 'ಕೇಶವನಿಂದ ದಾಮೋದರನವರೆಗಿನ ವಿಷ್ಣುವಿನ ಹನ್ನೆರಡು ನಾಮಗಳು; ಮೇಲೆ ಹೇಳಿದಂತೆ ಕೆನ್ನೆ, ಕಣ್ಣು, ಮೂಗು, ಕಿವಿ, ಭುಜ, ಎದೆ, ತಲೆಗಳನ್ನು ಮುಟ್ಟುತ್ತಾ ಹೇಳಬೇಕು (ಕಂಚಿ ಪದ್ಧತಿ).',
          },
        },
      ],
    },
    {
      note: 'Or, as in many Karnataka Smarta families: sip at Keshava, Narayana and Madhava and touch the limbs with the remaining names.',
      noteKn: 'ಅಥವಾ ಕರ್ನಾಟಕದ ಅನೇಕ ಸ್ಮಾರ್ತ ಮನೆತನಗಳಂತೆ: ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ನಾಮಗಳಿಂದ ಸೇವಿಸಿ, ಉಳಿದ ನಾಮಗಳಿಂದ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
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
          text: 'ॐ गोविन्दाय नमः ।\nॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः ।\nॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः ।\nॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः ।\nॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः ।\nॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः ।\nॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः ।\nॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः ।\nॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः ।\nॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord by his holy names, from Govinda, Vishnu and Madhusudana through to Hari and Sri Krishna; with each name a part of the body is touched, offering it to him.',
            kn: 'ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ ಮೊದಲ್ಗೊಂಡು ಹರಿ, ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಭಗವಂತನ ಪವಿತ್ರ ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಒಂದೊಂದು ಅವಯವವನ್ನು ಮುಟ್ಟಿ ಅವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ.',
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
          text: 'आपो हि ष्ठा मयोभुवः । ता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे । यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः । उशतीरिव मातरः ।\nतस्मा अरं गमाम वः । यस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'The three riks to the Waters, as in marjana: bringers of happiness, give us strength and joy, share with us your most auspicious essence like loving mothers, and bring us to new life.',
            kn: 'ಮಾರ್ಜನದಲ್ಲಿ ಹೇಳಿದ ಜಲದೇವತೆಗಳ ಮೂರು ಋಕ್ಕುಗಳು: ಸುಖಕೊಡುವ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಶಕ್ತಿಯನ್ನೂ ಆನಂದವನ್ನೂ ಕೊಡಿ; ತಾಯಂದಿರಂತೆ ನಿಮ್ಮ ಮಂಗಳಕರ ರಸವನ್ನು ಉಣಿಸಿ; ನಮಗೆ ಹೊಸ ಚೈತನ್ಯ ಕೊಡಿ.',
          },
        },
        {
          text: 'ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhuh up to Satya. We meditate on the excellent radiance of the divine Savitri, who inspires our minds. Om: he is the waters, the light, the essence, the immortal, Brahman, pervading earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಆಗಿರುವ ಅವನೇ ಮೂರು ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮ.',
          },
        },
      ],
    },
    {
      title: 'प्राणायामः',
      titleEn: 'Pranayama (breath control) — three times',
      note: 'Say the rishi–chandas–devata line first, touching the head (seer), the mouth (metre) and the chest (deity). Then hold the nose with the right hand — thumb on the right nostril, ring and little fingers on the left, index and middle fingers folded. As in the Uttaradi Matha manual: breathe out through the right nostril while mentally reciting the mantra once (rechaka, deity Rudra); breathe in through the left while reciting it twice (puraka, deity Brahma); close both nostrils and hold the breath while reciting it three times (kumbhaka, the Lord himself is the deity), remembering Vayu and Hari throughout. Do this three times. If this is too long, recite the mantra once in each part.',
      noteKn: 'ಮೊದಲು ಋಷಿ–ಛಂದಸ್ಸು–ದೇವತೆಗಳ ವಾಕ್ಯ ಹೇಳುತ್ತಾ ತಲೆ (ಋಷಿ), ಬಾಯಿ (ಛಂದಸ್ಸು), ಎದೆ (ದೇವತೆ) ಮುಟ್ಟಿಕೊಳ್ಳಿ. ನಂತರ ಬಲಗೈಯಿಂದ ಮೂಗು ಹಿಡಿಯಿರಿ — ಹೆಬ್ಬೆರಳು ಬಲ ಹೊಳ್ಳೆಯ ಮೇಲೆ, ಉಂಗುರ ಮತ್ತು ಕಿರುಬೆರಳು ಎಡ ಹೊಳ್ಳೆಯ ಮೇಲೆ, ತೋರು ಮತ್ತು ನಡುಬೆರಳು ಮಡಚಿರಲಿ. ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕದಂತೆ: ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಒಮ್ಮೆ ಹೇಳುತ್ತಾ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ಉಸಿರು ಬಿಡಿ (ರೇಚಕ, ರುದ್ರ ದೇವತೆ); ಎರಡು ಬಾರಿ ಹೇಳುತ್ತಾ ಎಡ ಹೊಳ್ಳೆಯಿಂದ ಉಸಿರು ಎಳೆಯಿರಿ (ಪೂರಕ, ಬ್ರಹ್ಮ ದೇವತೆ); ಎರಡೂ ಹೊಳ್ಳೆ ಮುಚ್ಚಿ ಮೂರು ಬಾರಿ ಹೇಳುತ್ತಾ ಉಸಿರು ನಿಲ್ಲಿಸಿ (ಕುಂಭಕ, ಭಗವಂತನೇ ದೇವತೆ); ಆ ಸಮಯದಲ್ಲೆಲ್ಲ ವಾಯು–ಹರಿಯರನ್ನು ಸ್ಮರಿಸಿ. ಹೀಗೆ ಮೂರು ಬಾರಿ ಮಾಡಿ. ಇಷ್ಟು ದೀರ್ಘ ಕಷ್ಟವಾದರೆ ಪ್ರತಿಯೊಂದು ಭಾಗದಲ್ಲೂ ಒಮ್ಮೆ ಹೇಳಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'प्रणवस्य परब्रह्म ऋषिः । परमात्मा देवता । दैवी गायत्री छन्दः ।\nसप्तानां व्याहृतीनां विश्वामित्रजमदग्निभरद्वाजगौतमात्रिवसिष्ठकश्यपा ऋषयः ।\nअग्निवाय्वादित्यबृहस्पतिवरुणेन्द्रविश्वेदेवा देवताः ।\nगायत्र्युष्णिगनुष्टुब्बृहतीपङ्क्तित्रिष्टुब्जगत्यश्छन्दांसि ।\nगायत्रीशिरसः प्रजापतिरृषिः । ब्रह्माग्निवाय्वादित्या देवताः । यजुश्छन्दः ।\nप्राणायामे विनियोगः ॥',
          meaning: {
            en: 'Of Om, the seer is the Supreme Brahman, the deity the Supreme Self, the metre daivi gayatri. Of the seven vyahritis the seers are Vishvamitra, Jamadagni, Bharadvaja, Gautama, Atri, Vasishtha and Kashyapa; the deities Agni, Vayu, Aditya, Brihaspati, Varuna, Indra and the Vishvedevas; the metres gayatri to jagati. Of the Gayatri-shiras the seer is Prajapati, the deities Brahman, Agni, Vayu and Aditya, the metre yajus. These are applied in pranayama.',
            kn: 'ಓಂಕಾರಕ್ಕೆ ಪರಬ್ರಹ್ಮನೇ ಋಷಿ, ಪರಮಾತ್ಮನೇ ದೇವತೆ, ದೈವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು. ಏಳು ವ್ಯಾಹೃತಿಗಳಿಗೆ ವಿಶ್ವಾಮಿತ್ರ, ಜಮದಗ್ನಿ, ಭರದ್ವಾಜ, ಗೌತಮ, ಅತ್ರಿ, ವಸಿಷ್ಠ, ಕಶ್ಯಪರು ಋಷಿಗಳು; ಅಗ್ನಿ, ವಾಯು, ಆದಿತ್ಯ, ಬೃಹಸ್ಪತಿ, ವರುಣ, ಇಂದ್ರ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆಗಳು; ಗಾಯತ್ರಿಯಿಂದ ಜಗತಿಯವರೆಗಿನವು ಛಂದಸ್ಸುಗಳು. ಗಾಯತ್ರೀಶಿರಸ್ಸಿಗೆ ಪ್ರಜಾಪತಿ ಋಷಿ, ಬ್ರಹ್ಮ-ಅಗ್ನಿ-ವಾಯು-ಆದಿತ್ಯರು ದೇವತೆಗಳು, ಯಜುಸ್ಸು ಛಂದಸ್ಸು. ಇವನ್ನು ಪ್ರಾಣಾಯಾಮದಲ್ಲಿ ವಿನಿಯೋಗಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhuh up to Satya. We meditate on the excellent radiance of the divine Savitri, who inspires our minds. Om: he is the waters, the light, the essence, the immortal, Brahman, pervading earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಆಗಿರುವ ಅವನೇ ಮೂರು ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮ.',
          },
        },
      ],
    },
    {
      title: 'प्राणायामः',
      titleEn: 'Pranayama (breath control)',
      note: 'Say the rishi–chandas–devata line first, touching the head (seer), the tip of the nose (metre) and the chest (deity). Close the right nostril with the right thumb and breathe in slowly through the left while mentally reciting the mantra; close the left nostril with the ring and little fingers and hold the breath; then breathe out slowly through the right. Afterwards touch the right ear. Do it once or three times, as your family does.',
      noteKn: 'ಮೊದಲು ಋಷಿ–ಛಂದಸ್ಸು–ದೇವತೆಗಳ ವಾಕ್ಯ ಹೇಳುತ್ತಾ ತಲೆ (ಋಷಿ), ಮೂಗಿನ ತುದಿ (ಛಂದಸ್ಸು), ಎದೆ (ದೇವತೆ) ಮುಟ್ಟಿಕೊಳ್ಳಿ. ಬಲ ಹೆಬ್ಬೆರಳಿನಿಂದ ಬಲ ಹೊಳ್ಳೆ ಮುಚ್ಚಿ ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ ಎಡ ಹೊಳ್ಳೆಯಿಂದ ನಿಧಾನವಾಗಿ ಉಸಿರು ಎಳೆಯಿರಿ; ಉಂಗುರ ಮತ್ತು ಕಿರುಬೆರಳಿನಿಂದ ಎಡ ಹೊಳ್ಳೆ ಮುಚ್ಚಿ ಉಸಿರು ನಿಲ್ಲಿಸಿ; ನಂತರ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ನಿಧಾನವಾಗಿ ಬಿಡಿ. ಆಮೇಲೆ ಬಲಗಿವಿಯನ್ನು ಮುಟ್ಟಿಕೊಳ್ಳಿ. ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ ಒಮ್ಮೆ ಅಥವಾ ಮೂರು ಬಾರಿ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'प्रणवस्य ऋषिर्ब्रह्मा । देवी गायत्री छन्दः । परमात्मा देवता ।\nभूरादिसप्तव्याहृतीनाम् अत्रिभृगुकुत्सवसिष्ठगौतमकाश्यपाङ्गिरस ऋषयः ।\nगायत्र्युष्णिगनुष्टुब्बृहतीपङ्क्तित्रिष्टुब्जगत्यश्छन्दांसि ।\nअग्निवाय्वर्कवागीशवरुणेन्द्रविश्वेदेवा देवताः ॥',
          meaning: {
            en: 'Of Om the seer is Brahma, the metre devi gayatri, the deity the Supreme Self. Of the seven vyahritis from bhuh, the seers are Atri, Bhrigu, Kutsa, Vasishtha, Gautama, Kashyapa and Angirasa; the metres gayatri, ushnik, anushtubh, brihati, pankti, trishtubh and jagati; the deities Agni, Vayu, Arka (the Sun), Vagisha, Varuna, Indra and the Vishvedevas.',
            kn: 'ಓಂಕಾರಕ್ಕೆ ಬ್ರಹ್ಮ ಋಷಿ, ದೇವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಪರಮಾತ್ಮ ದೇವತೆ. ಭೂಃ ಮೊದಲಾದ ಏಳು ವ್ಯಾಹೃತಿಗಳಿಗೆ ಅತ್ರಿ, ಭೃಗು, ಕುತ್ಸ, ವಸಿಷ್ಠ, ಗೌತಮ, ಕಾಶ್ಯಪ, ಆಂಗಿರಸರು ಋಷಿಗಳು; ಗಾಯತ್ರೀ, ಉಷ್ಣಿಕ್, ಅನುಷ್ಟುಪ್, ಬೃಹತೀ, ಪಂಕ್ತಿ, ತ್ರಿಷ್ಟುಪ್, ಜಗತೀ ಛಂದಸ್ಸುಗಳು; ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ವಾಗೀಶ, ವರುಣ, ಇಂದ್ರ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆಗಳು.',
          },
        },
        {
          text: 'ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhuh up to Satya. We meditate on the excellent radiance of the divine Savitri, who inspires our minds. Om: he is the waters, the light, the essence, the immortal, Brahman, pervading earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಆಗಿರುವ ಅವನೇ ಮೂರು ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa (resolve)',
      note: 'Place the left hand, palm up, on the right thigh and cover it with the right hand (or touch the water vessel). Replace each अमुक (“such-and-such”) with today’s samvatsara, ayana (uttarayana / dakshinayana), ritu, masa, paksha (shukla / krishna), tithi, weekday and nakshatra from the panchanga — the panchanga card at the top of this text shows them — and change the place words if you live elsewhere, as your elders taught. The last line is for the time of day you chose.',
      noteKn: 'ಎಡ ಅಂಗೈಯನ್ನು ಮೇಲ್ಮುಖವಾಗಿ ಬಲತೊಡೆಯ ಮೇಲಿಟ್ಟು ಅದನ್ನು ಬಲಗೈಯಿಂದ ಮುಚ್ಚಿ (ಅಥವಾ ನೀರಿನ ಪಾತ್ರೆಯನ್ನು ಮುಟ್ಟಿಕೊಂಡು) ಸಂಕಲ್ಪ ಮಾಡಿ. ಪ್ರತಿಯೊಂದು “ಅಮುಕ” ಬದಲು ಇಂದಿನ ಸಂವತ್ಸರ, ಅಯನ (ಉತ್ತರಾಯಣ / ದಕ್ಷಿಣಾಯನ), ಋತು, ಮಾಸ, ಪಕ್ಷ (ಶುಕ್ಲ / ಕೃಷ್ಣ), ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳನ್ನು ಪಂಚಾಂಗದಿಂದ ಹೇಳಿ — ಈ ಪಠ್ಯದ ಮೇಲ್ಭಾಗದ ಪಂಚಾಂಗ ಕಾರ್ಡಿನಲ್ಲಿ ಅವು ಇವೆ. ಬೇರೆ ಊರಿನಲ್ಲಿದ್ದರೆ ಹಿರಿಯರು ಹೇಳಿಕೊಟ್ಟಂತೆ ದೇಶವಾಚಕ ಪದಗಳನ್ನು ಬದಲಿಸಿ. ಕೊನೆಯ ಸಾಲು ನೀವು ಆರಿಸಿದ ಕಾಲಕ್ಕೆ ಸಂಬಂಧಿಸಿದ್ದು.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'श्रीगोविन्द गोविन्द ।\nश्रीमद्भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य',
          meaning: {
            en: 'Sri Govinda, Govinda! In the age that moves on by the command of the glorious Lord Vishnu, the Supreme Person…',
            kn: 'ಶ್ರೀಗೋವಿಂದ, ಗೋವಿಂದ! ಮಹಾಪುರುಷನಾದ ಭಗವಾನ್ ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ…',
          },
        },
        {
          text: 'आद्यब्रह्मणः द्वितीयपरार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nकलियुगे प्रथमचरणे भरतवर्षे भरतखण्डे जम्बूद्वीपे\nदण्डकारण्ये देशे गोदावर्याः दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने चान्द्रमानेन व्यावहारिके अमुकनामसंवत्सरे\nअमुकायने अमुकर्तौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'In the second half of the life of the first Brahma, in the Shveta-varaha kalpa, in the Vaivasvata manvantara, in the first quarter of Kali-yuga, in Bharatavarsha of Jambudvipa, in the Dandaka forest region south of the Godavari, in the Shalivahana era, in the time of the Buddha avatara, in the field of Rama; in the present year of such-and-such name by the lunar reckoning, in such ayana, season, month, fortnight, tithi, weekday and star, with auspicious yoga and karana: on this auspicious day so qualified…',
            kn: 'ಮೊದಲ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದಲ್ಲಿ, ಶ್ವೇತವರಾಹ ಕಲ್ಪದಲ್ಲಿ, ವೈವಸ್ವತ ಮನ್ವಂತರದಲ್ಲಿ, ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಜಂಬೂದ್ವೀಪದ ಭರತವರ್ಷದಲ್ಲಿ, ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯ ಪ್ರದೇಶದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕೆಯಲ್ಲಿ, ಬೌದ್ಧಾವತಾರದ ಕಾಲದಲ್ಲಿ, ರಾಮಕ್ಷೇತ್ರದಲ್ಲಿ; ಚಾಂದ್ರಮಾನದಂತೆ ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಹೆಸರಿನ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ಶುಭಯೋಗ, ಶುಭಕರಣಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['morning'] },
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं प्रातःसन्ध्योपास्तिं करिष्ये ॥',
          meaning: {
            en: 'Moved by Sri Lakshminarayana, called Savitri, who dwells within Mukhyaprana, the beloved of Bharati, and for his pleasure, I shall perform the morning sandhya worship.',
            kn: 'ಭಾರತೀರಮಣರಾದ ಮುಖ್ಯಪ್ರಾಣದೇವರಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯಾಗಿರುವ, ಸವಿತೃನಾಮಕನಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['midday'] },
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया\nश्रीविष्णुप्रीत्यर्थं माध्याह्नसन्ध्योपास्तिं करिष्ये ॥',
          meaning: {
            en: 'Moved by Sri Vishnu who dwells within Mukhyaprana, the beloved of Bharati, and for his pleasure, I shall perform the midday sandhya worship.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['evening'] },
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया\nश्रीविष्णुप्रीत्यर्थं सायंसन्ध्योपास्तिं करिष्ये ॥',
          meaning: {
            en: 'Moved by Sri Vishnu who dwells within Mukhyaprana, the beloved of Bharati, and for his pleasure, I shall perform the evening sandhya worship.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಸಾಯಂಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa (resolve)',
      note: 'Place the left hand, palm up, on the right thigh and cover it with the right hand (or hold a little water or akshata in the right hand). Families that recite the full desha-kala say the first passage, replacing each अमुक with today’s samvatsara, ayana, ritu, masa, paksha, tithi, weekday and nakshatra (see the panchanga card at the top); the Kanchi and Madras manuals use only the short resolve that follows. At the end let the water go into the plate (Kanchi manual: write Om on the water with the ring finger and touch the forehead saying श्रीकेशवाय नमः).',
      noteKn: 'ಎಡ ಅಂಗೈಯನ್ನು ಮೇಲ್ಮುಖವಾಗಿ ಬಲತೊಡೆಯ ಮೇಲಿಟ್ಟು ಬಲಗೈಯಿಂದ ಮುಚ್ಚಿ (ಅಥವಾ ಬಲಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು/ಅಕ್ಷತೆ ಹಿಡಿದು) ಸಂಕಲ್ಪ ಮಾಡಿ. ಪೂರ್ಣ ದೇಶಕಾಲ ಹೇಳುವ ಮನೆತನಗಳು ಮೊದಲ ಭಾಗವನ್ನು ಹೇಳಿ, “ಅಮುಕ” ಬದಲು ಇಂದಿನ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳನ್ನು ಹೇಳುತ್ತಾರೆ (ಮೇಲ್ಭಾಗದ ಪಂಚಾಂಗ ಕಾರ್ಡ್ ನೋಡಿ); ಕಂಚಿ ಮತ್ತು ಮದ್ರಾಸಿನ ಪುಸ್ತಕಗಳು ನಂತರದ ಸಣ್ಣ ಸಂಕಲ್ಪವನ್ನು ಮಾತ್ರ ಹೇಳುತ್ತವೆ. ಕೊನೆಯಲ್ಲಿ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ (ಕಂಚಿ ಪುಸ್ತಕ: ಉಂಗುರದ ಬೆರಳಿನಿಂದ ನೀರಿನ ಮೇಲೆ ಓಂ ಬರೆದು “ಶ್ರೀಕೇಶವಾಯ ನಮಃ” ಎಂದು ಹಣೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'आद्यब्रह्मणः द्वितीयपरार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nकलियुगे प्रथमचरणे भरतवर्षे भरतखण्डे जम्बूद्वीपे\nदण्डकारण्ये देशे गोदावर्याः दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने चान्द्रमानेन व्यावहारिके अमुकनामसंवत्सरे\nअमुकायने अमुकर्तौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'In the second half of the life of the first Brahma, in the Shveta-varaha kalpa, in the Vaivasvata manvantara, in the first quarter of Kali-yuga, in Bharatavarsha of Jambudvipa, in the Dandaka forest region south of the Godavari, in the Shalivahana era, in the time of the Buddha avatara, in the field of Rama; in the present year of such-and-such name by the lunar reckoning, in such ayana, season, month, fortnight, tithi, weekday and star, with auspicious yoga and karana: on this auspicious day so qualified…',
            kn: 'ಮೊದಲ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದಲ್ಲಿ, ಶ್ವೇತವರಾಹ ಕಲ್ಪದಲ್ಲಿ, ವೈವಸ್ವತ ಮನ್ವಂತರದಲ್ಲಿ, ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಜಂಬೂದ್ವೀಪದ ಭರತವರ್ಷದಲ್ಲಿ, ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯ ಪ್ರದೇಶದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕೆಯಲ್ಲಿ, ಬೌದ್ಧಾವತಾರದ ಕಾಲದಲ್ಲಿ, ರಾಮಕ್ಷೇತ್ರದಲ್ಲಿ; ಚಾಂದ್ರಮಾನದಂತೆ ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಹೆಸರಿನ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ಶುಭಯೋಗ, ಶುಭಕರಣಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          when: { tradition: ['smarta'], time: ['morning'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nप्रातःसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'For the destruction of all the sins I have gathered, and so for the pleasure of the Supreme Lord, I shall worship the morning sandhya.',
            kn: 'ನಾನು ಸಂಪಾದಿಸಿರುವ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೆಯನ್ನು ಉಪಾಸಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: ['smarta'], time: ['midday'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nमाध्याह्निकं करिष्ये ॥',
          meaning: {
            en: 'For the destruction of all the sins I have gathered, and so for the pleasure of the Supreme Lord, I shall perform the midday worship (madhyahnika).',
            kn: 'ನಾನು ಸಂಪಾದಿಸಿರುವ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಮಾಧ್ಯಾಹ್ನಿಕವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: ['smarta'], time: ['evening'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nसायंसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'For the destruction of all the sins I have gathered, and so for the pleasure of the Supreme Lord, I shall worship the evening sandhya.',
            kn: 'ನಾನು ಸಂಪಾದಿಸಿರುವ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಸಾಯಂಸಂಧ್ಯೆಯನ್ನು ಉಪಾಸಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'मार्जनम्',
      titleEn: 'Marjana (sprinkling)',
      note: 'Say the viniyoga. Hold the uddharane with water in the left hand and, with a tulasi leaf or darbha (or the fingers) of the right hand, sprinkle yourself at the end of each of the nine padas (lines). The Madhva manuals sprinkle in three rounds — feet, head, chest; chest, feet, head; head, chest, feet — nine times in all. (Some families sprinkle the head for the first seven padas, the feet for the eighth and the head for the ninth.)',
      noteKn: 'ವಿನಿಯೋಗ ಹೇಳಿ. ಎಡಗೈಯಲ್ಲಿ ನೀರಿರುವ ಉದ್ಧರಣೆ ಹಿಡಿದು, ಬಲಗೈಯ ತುಳಸೀದಳ ಅಥವಾ ದರ್ಭೆಯಿಂದ (ಅಥವಾ ಬೆರಳುಗಳಿಂದ) ಒಂಬತ್ತು ಪಾದಗಳಲ್ಲಿ (ಸಾಲುಗಳಲ್ಲಿ) ಪ್ರತಿಯೊಂದರ ಕೊನೆಗೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ. ಮಾಧ್ವ ಪುಸ್ತಕಗಳ ಕ್ರಮ: ಪಾದ–ಶಿರಸ್ಸು–ಹೃದಯ, ಹೃದಯ–ಪಾದ–ಶಿರಸ್ಸು, ಶಿರಸ್ಸು–ಹೃದಯ–ಪಾದ — ಒಟ್ಟು ಒಂಬತ್ತು ಬಾರಿ. (ಕೆಲವು ಮನೆತನಗಳಲ್ಲಿ ಮೊದಲ ಏಳು ಪಾದಗಳಿಗೆ ತಲೆಗೆ, ಎಂಟನೆಯದಕ್ಕೆ ಪಾದಗಳಿಗೆ, ಒಂಬತ್ತನೆಯದಕ್ಕೆ ಮತ್ತೆ ತಲೆಗೆ ಪ್ರೋಕ್ಷಿಸುತ್ತಾರೆ.)',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'आपो हि ष्ठेत्यस्य मन्त्रस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।\nआपो देवता । गायत्री छन्दः । मार्जने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “apo hi shtha” the seer is Sindhudvipa son of Ambarisha, the deity the Waters, the metre gayatri; it is applied in sprinkling.',
            kn: '"ಆಪೋ ಹಿ ಷ್ಠಾ" ಮಂತ್ರಕ್ಕೆ ಅಂಬರೀಷನ ಮಗನಾದ ಸಿಂಧುದ್ವೀಪ ಋಷಿ, ಜಲದೇವತೆಗಳು ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಮಾರ್ಜನದಲ್ಲಿ ವಿನಿಯೋಗ.',
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
      note: 'Say the viniyoga. Take water in the left palm and, with the fingers of the right hand, sprinkle at the end of each of the nine padas (lines): padas 1–7 on the head, pada 8 (यस्य क्षयाय जिन्वथ) on the feet, pada 9 (आपो जनयथा च नः) on the head again. Then take a little water and, saying ॐ भूर्भुवस्सुवः, circle it clockwise round the head and let it fall.',
      noteKn: 'ವಿನಿಯೋಗ ಹೇಳಿ. ಎಡ ಅಂಗೈಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು ಬಲಗೈ ಬೆರಳುಗಳಿಂದ ಒಂಬತ್ತು ಪಾದಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರ ಕೊನೆಗೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ: ೧–೭ ಪಾದಗಳಿಗೆ ತಲೆಗೆ, ೮ನೆಯ ಪಾದಕ್ಕೆ (ಯಸ್ಯ ಕ್ಷಯಾಯ ಜಿನ್ವಥ) ಪಾದಗಳಿಗೆ, ೯ನೆಯದಕ್ಕೆ (ಆಪೋ ಜನಯಥಾ ಚ ನಃ) ಮತ್ತೆ ತಲೆಗೆ. ನಂತರ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು “ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ” ಎನ್ನುತ್ತಾ ತಲೆಯ ಸುತ್ತ ಪ್ರದಕ್ಷಿಣವಾಗಿ ಸುತ್ತಿಸಿ ಬಿಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'आपो हि ष्ठेत्यस्य मन्त्रस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।\nआपो देवता । गायत्री छन्दः । मार्जने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “apo hi shtha” the seer is Sindhudvipa son of Ambarisha, the deity the Waters, the metre gayatri; it is applied in sprinkling.',
            kn: '"ಆಪೋ ಹಿ ಷ್ಠಾ" ಮಂತ್ರಕ್ಕೆ ಅಂಬರೀಷನ ಮಗನಾದ ಸಿಂಧುದ್ವೀಪ ಋಷಿ, ಜಲದೇವತೆಗಳು ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಮಾರ್ಜನದಲ್ಲಿ ವಿನಿಯೋಗ.',
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
          text: 'ॐ भूर्भुवस्सुवः ॥',
          meaning: {
            en: 'Om, earth, sky and heaven: water is circled round the head with this, enclosing oneself in purity.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ — ಈ ಮಂತ್ರದಿಂದ ತಲೆಯ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತಿಸಿ ತನ್ನನ್ನು ಪವಿತ್ರತೆಯಿಂದ ಆವರಿಸಿಕೊಳ್ಳುವುದು.',
          },
        },
      ],
    },
    {
      title: 'प्राशनम्',
      titleEn: 'Prashana (sipping consecrated water)',
      note: 'Take in the right palm, held like a cow’s ear, as much water as covers a grain of urad dal. Say the viniyoga and then the mantra for this time of day over the water, and sip it at स्वाहा. Then do achamana once.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ಹಾಕಿಕೊಳ್ಳಿ. ವಿನಿಯೋಗ ಮತ್ತು ಈ ಕಾಲದ ಮಂತ್ರವನ್ನು ನೀರಿನ ಮೇಲೆ ಹೇಳಿ, “ಸ್ವಾಹಾ” ಎನ್ನುವಾಗ ಪ್ರಾಶನ ಮಾಡಿ. ನಂತರ ಒಮ್ಮೆ ಆಚಮನ ಮಾಡಿ.',
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
          when: { time: ['morning'] },
          text: 'सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयद्रात्रिया पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nरात्रिस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसूर्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May the Sun, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the night with mind, speech, hands, feet, belly or organ, may the night wipe it away; whatever wrong is in me, I offer it, and myself, into the Sun, the light that is the source of immortality. Svaha.',
            kn: 'ಸೂರ್ಯನೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ರಾತ್ರಿಯಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ ಮತ್ತು ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ರಾತ್ರಿದೇವತೆಯು ಅಳಿಸಲಿ; ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸೂರ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
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
          when: { time: ['midday'] },
          text: 'आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् ।\nपुनन्तु ब्रह्मणस्पतिर्ब्रह्मपूता पुनातु माम् ।\nयदुच्छिष्टमभोज्यं यद्वा दुश्चरितं मम ।\nसर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहं स्वाहा ॥',
          meaning: {
            en: 'May the waters purify the earth, and the purified earth purify me; may Brahmanaspati, and what is made pure by the Veda, purify me. From leftover or forbidden food, from my misdeeds and from gifts taken from the unworthy, may the waters purify me entirely. Svaha.',
            kn: 'ಜಲವು ಭೂಮಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ, ಶುದ್ಧವಾದ ಭೂಮಿ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಬ್ರಹ್ಮಣಸ್ಪತಿಯೂ ವೇದದಿಂದ ಪವಿತ್ರವಾದುದೂ ನನ್ನನ್ನು ಪಾವನಗೊಳಿಸಲಿ. ಎಂಜಲು, ತಿನ್ನಬಾರದ ಆಹಾರ, ನನ್ನ ದುರಾಚಾರ, ಅಯೋಗ್ಯರಿಂದ ಪಡೆದ ದಾನ ಇವೆಲ್ಲದರಿಂದ ಜಲವು ನನ್ನನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಶುದ್ಧಗೊಳಿಸಲಿ, ಸ್ವಾಹಾ.',
          },
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
          when: { time: ['evening'] },
          text: 'अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयदह्ना पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nअहस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसत्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May Agni, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the day with mind, speech, hands, feet, belly or organ, may the day wipe it away; whatever wrong is in me, I offer it, and myself, into the light of Truth, the source of immortality. Svaha.',
            kn: 'ಅಗ್ನಿಯೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ಹಗಲಿನಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ ಮತ್ತು ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ಹಗಲಿನ ದೇವತೆಯು ಅಳಿಸಲಿ; ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸತ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
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
      title: 'प्राशनम्',
      titleEn: 'Prashana (sipping consecrated water)',
      note: 'Take in the right palm, held like a cow’s ear, as much water as covers a grain of urad dal. Recite the mantra for this time of day over the water and sip it at स्वाहा. Then do achamana once.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ಹಾಕಿಕೊಳ್ಳಿ. ಈ ಕಾಲದ ಮಂತ್ರವನ್ನು ನೀರಿನ ಮೇಲೆ ಹೇಳಿ, “ಸ್ವಾಹಾ” ಎನ್ನುವಾಗ ಪ್ರಾಶನ ಮಾಡಿ. ನಂತರ ಒಮ್ಮೆ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          when: { time: ['morning'] },
          text: 'सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयद्रात्रिया पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nरात्रिस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसूर्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May the Sun, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the night with mind, speech, hands, feet, belly or organ, may the night wipe it away; whatever wrong is in me, I offer it, and myself, into the Sun, the light that is the source of immortality. Svaha.',
            kn: 'ಸೂರ್ಯನೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ರಾತ್ರಿಯಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ ಮತ್ತು ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ರಾತ್ರಿದೇವತೆಯು ಅಳಿಸಲಿ; ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸೂರ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् ।\nपुनन्तु ब्रह्मणस्पतिर्ब्रह्मपूता पुनातु माम् ।\nयदुच्छिष्टमभोज्यं यद्वा दुश्चरितं मम ।\nसर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहं स्वाहा ॥',
          meaning: {
            en: 'May the waters purify the earth, and the purified earth purify me; may Brahmanaspati, and what is made pure by the Veda, purify me. From leftover or forbidden food, from my misdeeds and from gifts taken from the unworthy, may the waters purify me entirely. Svaha.',
            kn: 'ಜಲವು ಭೂಮಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ, ಶುದ್ಧವಾದ ಭೂಮಿ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಬ್ರಹ್ಮಣಸ್ಪತಿಯೂ ವೇದದಿಂದ ಪವಿತ್ರವಾದುದೂ ನನ್ನನ್ನು ಪಾವನಗೊಳಿಸಲಿ. ಎಂಜಲು, ತಿನ್ನಬಾರದ ಆಹಾರ, ನನ್ನ ದುರಾಚಾರ, ಅಯೋಗ್ಯರಿಂದ ಪಡೆದ ದಾನ ಇವೆಲ್ಲದರಿಂದ ಜಲವು ನನ್ನನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಶುದ್ಧಗೊಳಿಸಲಿ, ಸ್ವಾಹಾ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयदह्ना पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nअहस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसत्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May Agni, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the day with mind, speech, hands, feet, belly or organ, may the day wipe it away; whatever wrong is in me, I offer it, and myself, into the light of Truth, the source of immortality. Svaha.',
            kn: 'ಅಗ್ನಿಯೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ಹಗಲಿನಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ ಮತ್ತು ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ಹಗಲಿನ ದೇವತೆಯು ಅಳಿಸಲಿ; ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸತ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
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
      title: 'पुनर्मार्जनम्',
      titleEn: 'Punar-marjana (second sprinkling)',
      note: 'Sprinkle water on yourself again, as in marjana, at the end of each pada: first with दधिक्राव्णो… (seer Vamadeva, metre anushtubh), then the nine padas of apo hi shtha, and then the four Taittiriya riks हिरण्यवर्णाः… (Taittiriya Samhita 5.6.1).',
      noteKn: 'ಮಾರ್ಜನದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಪ್ರತಿಯೊಂದು ಪಾದದ ಕೊನೆಗೆ ಮತ್ತೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ: ಮೊದಲು “ದಧಿಕ್ರಾವ್ಣೋ…” (ವಾಮದೇವ ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು), ನಂತರ ಆಪೋ ಹಿಷ್ಠಾದ ಒಂಬತ್ತು ಪಾದಗಳು, ಆಮೇಲೆ ನಾಲ್ಕು ತೈತ್ತಿರೀಯ ಋಕ್ಕುಗಳು “ಹಿರಣ್ಯವರ್ಣಾಃ…” (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೫.೬.೧).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'दधिक्राव्णो अकारिषं जिष्णोरश्वस्य वाजिनः ।\nसुरभि नो मुखा करत्प्र ण आयूंषि तारिषत् ॥',
          meaning: {
            en: 'I have praised Dadhikravan, the victorious, swift and mighty divine steed. May he make our mouths fragrant and lengthen our lives.',
            kn: 'ಜಯಶಾಲಿಯೂ ವೇಗಶಾಲಿಯೂ ಬಲಶಾಲಿಯೂ ಆದ ದಧಿಕ್ರಾವನೆಂಬ ದಿವ್ಯಾಶ್ವವನ್ನು ಸ್ತುತಿಸಿದ್ದೇನೆ. ಅವನು ನಮ್ಮ ಮುಖಗಳನ್ನು ಸುಗಂಧಮಯವಾಗಿಸಲಿ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲಿ.',
          },
        },
        {
          text: 'आपो हि ष्ठा मयोभुवः । ता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे । यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः । उशतीरिव मातरः ।\nतस्मा अरं गमाम वः । यस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'The three riks to the Waters, as in marjana: bringers of happiness, give us strength and joy, share with us your most auspicious essence like loving mothers, and bring us to new life.',
            kn: 'ಮಾರ್ಜನದಲ್ಲಿ ಹೇಳಿದ ಜಲದೇವತೆಗಳ ಮೂರು ಋಕ್ಕುಗಳು: ಸುಖಕೊಡುವ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಶಕ್ತಿಯನ್ನೂ ಆನಂದವನ್ನೂ ಕೊಡಿ; ತಾಯಂದಿರಂತೆ ನಿಮ್ಮ ಮಂಗಳಕರ ರಸವನ್ನು ಉಣಿಸಿ; ನಮಗೆ ಹೊಸ ಚೈತನ್ಯ ಕೊಡಿ.',
          },
        },
        {
          text: 'हिरण्यवर्णाः शुचयः पावका यासु जातः कश्यपो यास्विन्द्रः ।\nअग्निं या गर्भं दधिरे विरूपास्ता न आपः शं स्योना भवन्तु ॥',
          meaning: {
            en: 'The golden-hued, pure and purifying waters, in which Kashyapa and Indra were born, which of many forms bore Agni as their child: may those waters be gracious and kind to us.',
            kn: 'ಚಿನ್ನದ ಬಣ್ಣದ, ಶುಚಿಯಾದ, ಪಾವನಗೊಳಿಸುವ ಜಲಗಳು — ಅವುಗಳಲ್ಲಿ ಕಶ್ಯಪನೂ ಇಂದ್ರನೂ ಜನಿಸಿದರು; ನಾನಾ ರೂಪಗಳ ಆ ಜಲಗಳು ಅಗ್ನಿಯನ್ನು ಗರ್ಭದಲ್ಲಿ ಧರಿಸಿದವು. ಆ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.',
          },
        },
        {
          text: 'यासां राजा वरुणो याति मध्ये सत्यानृते अवपश्यञ्जनानाम् ।\nमधुश्चुतः शुचयो याः पावकास्ता न आपः शं स्योना भवन्तु ॥',
          meaning: {
            en: 'The waters in whose midst King Varuna moves, looking down on the truth and falsehood of men; the honey-dripping, pure and purifying waters: may they be gracious and kind to us.',
            kn: 'ಜನರ ಸತ್ಯ-ಅಸತ್ಯಗಳನ್ನು ನೋಡುತ್ತಾ ರಾಜನಾದ ವರುಣನು ಯಾವ ಜಲಗಳ ಮಧ್ಯೆ ಸಂಚರಿಸುತ್ತಾನೋ, ಜೇನು ಸುರಿಸುವ, ಶುಚಿಯಾದ, ಪಾವನಗೊಳಿಸುವ ಆ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.',
          },
        },
        {
          text: 'यासां देवा दिवि कृण्वन्ति भक्षं या अन्तरिक्षे बहुधा भवन्ति ।\nयाः पृथिवीं पयसोऽन्दन्ति शुक्रास्ता न आपः शं स्योना भवन्तु ॥',
          meaning: {
            en: 'The waters that the gods drink in heaven, that take many forms in the sky, and that drench the earth with their milk: may those bright waters be gracious and kind to us.',
            kn: 'ದೇವತೆಗಳು ಸ್ವರ್ಗದಲ್ಲಿ ಪಾನಮಾಡುವ, ಅಂತರಿಕ್ಷದಲ್ಲಿ ಅನೇಕ ರೂಪಗಳಲ್ಲಿರುವ, ತಮ್ಮ ಸಾರದಿಂದ ಭೂಮಿಯನ್ನು ತೋಯಿಸುವ ಆ ಉಜ್ವಲ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.',
          },
        },
        {
          text: 'शिवेन मा चक्षुषा पश्यतापः शिवया तनुवोप स्पृशत त्वचं मे ।\nसर्वाँ अग्नीँरप्सुषदो हुवे वो मयि वर्चो बलमोजो नि धत्त ॥',
          meaning: {
            en: 'O Waters, look on me with a kindly eye and touch my skin with your gracious body. I call on all the fires that dwell in you: place in me radiance, strength and vigour.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ಮಂಗಳಕರವಾದ ಕಣ್ಣಿನಿಂದ ನನ್ನನ್ನು ನೋಡಿ, ಮಂಗಳಕರವಾದ ದೇಹದಿಂದ ನನ್ನ ಚರ್ಮವನ್ನು ಸ್ಪರ್ಶಿಸಿ. ನಿಮ್ಮಲ್ಲಿ ನೆಲೆಸಿರುವ ಎಲ್ಲಾ ಅಗ್ನಿಗಳನ್ನು ಕರೆಯುತ್ತೇನೆ; ನನ್ನಲ್ಲಿ ತೇಜಸ್ಸು, ಬಲ, ಓಜಸ್ಸುಗಳನ್ನು ಇರಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'पुनर्मार्जनम्',
      titleEn: 'Punar-marjana (second sprinkling)',
      note: 'Sprinkle water on the head again at the end of each pada: first with दधिक्राव्णो… (seer Vamadeva, metre anushtubh), then the nine padas of apo hi shtha as in marjana (eighth pada on the feet). Then circle water round the head with ॐ भूर्भुवस्सुवः. (Some Smarta families also add the four riks हिरण्यवर्णाः… recited by Madhvas.)',
      noteKn: 'ಪ್ರತಿಯೊಂದು ಪಾದದ ಕೊನೆಗೆ ಮತ್ತೆ ತಲೆಗೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ: ಮೊದಲು “ದಧಿಕ್ರಾವ್ಣೋ…” (ವಾಮದೇವ ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು), ನಂತರ ಮಾರ್ಜನದಂತೆ ಆಪೋ ಹಿಷ್ಠಾದ ಒಂಬತ್ತು ಪಾದಗಳು (ಎಂಟನೆಯದು ಪಾದಗಳಿಗೆ). ಆಮೇಲೆ “ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ” ಎಂದು ತಲೆಯ ಸುತ್ತ ನೀರು ಸುತ್ತಿಸಿ. (ಕೆಲವು ಸ್ಮಾರ್ತ ಮನೆತನಗಳು ಮಾಧ್ವರು ಹೇಳುವ “ಹಿರಣ್ಯವರ್ಣಾಃ…” ನಾಲ್ಕು ಋಕ್ಕುಗಳನ್ನೂ ಸೇರಿಸುತ್ತಾರೆ.)',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'दधिक्राव्णो अकारिषं जिष्णोरश्वस्य वाजिनः ।\nसुरभि नो मुखा करत्प्र ण आयूंषि तारिषत् ॥',
          meaning: {
            en: 'I have praised Dadhikravan, the victorious, swift and mighty divine steed. May he make our mouths fragrant and lengthen our lives.',
            kn: 'ಜಯಶಾಲಿಯೂ ವೇಗಶಾಲಿಯೂ ಬಲಶಾಲಿಯೂ ಆದ ದಧಿಕ್ರಾವನೆಂಬ ದಿವ್ಯಾಶ್ವವನ್ನು ಸ್ತುತಿಸಿದ್ದೇನೆ. ಅವನು ನಮ್ಮ ಮುಖಗಳನ್ನು ಸುಗಂಧಮಯವಾಗಿಸಲಿ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲಿ.',
          },
        },
        {
          text: 'आपो हि ष्ठा मयोभुवः । ता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे । यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः । उशतीरिव मातरः ।\nतस्मा अरं गमाम वः । यस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'The three riks to the Waters, as in marjana: bringers of happiness, give us strength and joy, share with us your most auspicious essence like loving mothers, and bring us to new life.',
            kn: 'ಮಾರ್ಜನದಲ್ಲಿ ಹೇಳಿದ ಜಲದೇವತೆಗಳ ಮೂರು ಋಕ್ಕುಗಳು: ಸುಖಕೊಡುವ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಶಕ್ತಿಯನ್ನೂ ಆನಂದವನ್ನೂ ಕೊಡಿ; ತಾಯಂದಿರಂತೆ ನಿಮ್ಮ ಮಂಗಳಕರ ರಸವನ್ನು ಉಣಿಸಿ; ನಮಗೆ ಹೊಸ ಚೈತನ್ಯ ಕೊಡಿ.',
          },
        },
        {
          text: 'ॐ भूर्भुवस्सुवः ॥',
          meaning: {
            en: 'Om, earth, sky and heaven: water is circled round the head with this.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ — ಈ ಮಂತ್ರದಿಂದ ತಲೆಯ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತಿಸುವುದು.',
          },
        },
      ],
    },
    {
      title: 'अघमर्षणम्',
      titleEn: 'Aghamarshana (casting out sin)',
      note: 'Take water in the right palm (cow’s-ear shape) and hold it near the nose without looking at it. Reciting the mantra, think that the sin-person (papa-purusha) leaves through the right nostril with your breath and enters the water. Then throw the water away towards the north-east (or onto the ground to your left, imagining a glowing rock there) and think the sin destroyed. Do not look at it again. Then do achamana twice.',
      noteKn: 'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ನೀರು ತೆಗೆದುಕೊಂಡು, ಅದನ್ನು ನೋಡದೆ ಮೂಗಿನ ಬಳಿ ಹಿಡಿಯಿರಿ. ಮಂತ್ರ ಹೇಳುತ್ತಾ ಪಾಪಪುರುಷನು ಬಲ ಹೊಳ್ಳೆಯ ಉಸಿರಿನೊಂದಿಗೆ ಹೊರಬಂದು ನೀರಿನಲ್ಲಿ ಸೇರಿದನೆಂದು ಭಾವಿಸಿ. ನಂತರ ಆ ನೀರನ್ನು ಈಶಾನ್ಯ ದಿಕ್ಕಿಗೆ (ಅಥವಾ ಎಡಭಾಗದಲ್ಲಿ ಉರಿಯುವ ಬಂಡೆಯೊಂದನ್ನು ಕಲ್ಪಿಸಿ ಅದರ ಮೇಲೆ) ಚೆಲ್ಲಿ, ಪಾಪ ನಾಶವಾಯಿತೆಂದು ಭಾವಿಸಿ. ಮತ್ತೆ ಅದನ್ನು ನೋಡಬೇಡಿ. ನಂತರ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'द्रुपदादिव मुञ्चतु । द्रुपदादिवेन्मुमुचानः ।\nस्विन्नः स्नात्वी मलादिव ।\nपूतं पवित्रेणेवाज्यम् । आपः शुन्धन्तु मैनसः ॥',
          meaning: {
            en: 'As one is freed from a post one was tied to, as a sweating man after bathing is freed from dirt, as ghee is made clean through a strainer, so may the waters cleanse me of sin.',
            kn: 'ಕಟ್ಟಿಹಾಕಿದ ಕಂಬದಿಂದ ಬಿಡುಗಡೆಯಾದಂತೆ, ಬೆವರಿದವನು ಸ್ನಾನದಿಂದ ಕೊಳೆಯಿಂದ ಮುಕ್ತನಾದಂತೆ, ಶೋಧಕದಿಂದ ತುಪ್ಪ ಶುದ್ಧವಾದಂತೆ, ಜಲದೇವತೆಗಳು ನನ್ನನ್ನು ಪಾಪದಿಂದ ಶುದ್ಧಗೊಳಿಸಲಿ.',
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
      note: 'Many Smarta Yajurvedins do this step (the Kanchi manual omits it). Take water in the right palm and hold it near the nose without looking at it. Reciting the mantra, breathe out through the right nostril onto the water, thinking that the sin within leaves you and enters it; throw the water away to your left and do not look at it again. Then do achamana.',
      noteKn: 'ಅನೇಕ ಸ್ಮಾರ್ತ ಯಜುರ್ವೇದಿಗಳು ಈ ಹಂತ ಮಾಡುತ್ತಾರೆ (ಕಂಚಿ ಪುಸ್ತಕದಲ್ಲಿ ಇಲ್ಲ). ಬಲ ಅಂಗೈಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು ನೋಡದೆ ಮೂಗಿನ ಬಳಿ ಹಿಡಿಯಿರಿ. ಮಂತ್ರ ಹೇಳುತ್ತಾ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ನೀರಿನ ಮೇಲೆ ಉಸಿರು ಬಿಡಿ, ಒಳಗಿನ ಪಾಪ ಹೊರಬಂದು ನೀರಿನಲ್ಲಿ ಸೇರಿತೆಂದು ಭಾವಿಸಿ; ಆ ನೀರನ್ನು ಎಡಕ್ಕೆ ಚೆಲ್ಲಿ, ಮತ್ತೆ ನೋಡಬೇಡಿ. ನಂತರ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'द्रुपदादिव मुञ्चतु । द्रुपदादिवेन्मुमुचानः ।\nस्विन्नः स्नात्वी मलादिव ।\nपूतं पवित्रेणेवाज्यम् । आपः शुन्धन्तु मैनसः ॥',
          meaning: {
            en: 'As one is freed from a post one was tied to, as a sweating man after bathing is freed from dirt, as ghee is made clean through a strainer, so may the waters cleanse me of sin.',
            kn: 'ಕಟ್ಟಿಹಾಕಿದ ಕಂಬದಿಂದ ಬಿಡುಗಡೆಯಾದಂತೆ, ಬೆವರಿದವನು ಸ್ನಾನದಿಂದ ಕೊಳೆಯಿಂದ ಮುಕ್ತನಾದಂತೆ, ಶೋಧಕದಿಂದ ತುಪ್ಪ ಶುದ್ಧವಾದಂತೆ, ಜಲದೇವತೆಗಳು ನನ್ನನ್ನು ಪಾಪದಿಂದ ಶುದ್ಧಗೊಳಿಸಲಿ.',
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
      titleEn: 'Arghya (water offering to the Sun)',
      note: 'Morning: give the arghya before sunrise, standing, facing east, feet together. Do achamana and pranayama and say the sankalpa. Use fresh water from the arghya vessel, never the achamana water; the Uttaradi manual draws the Gayatri yantra on it as taught by the guru. Fill both hands joined like a cup (thumbs apart from the fingers), raise them, look towards the Sun, recite the Gayatri with Om and the vyahritis and pour the water out over the fingertips into the plate or onto clean ground (at a river or tank, throw it upward towards the Sun). After each say सूर्यनारायणाय इदमर्घ्यं…, offering it to Narayana within the Sun. Give three arghyas. If the sun has already risen, say the prayaschitta sankalpa and give a fourth arghya with the Gayatri. Then, touching the chest, pray हृदयस्था तु गायत्री….',
      noteKn: 'ಬೆಳಗಿನ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯೋದಯಕ್ಕೆ ಮೊದಲು, ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಪಾದಗಳನ್ನು ಜೋಡಿಸಿ ನಿಂತು ಕೊಡಬೇಕು. ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ ಹೇಳಿ. ಅರ್ಘ್ಯಪಾತ್ರೆಯ ಶುದ್ಧಜಲವನ್ನೇ ಬಳಸಿ, ಆಚಮನದ ನೀರನ್ನಲ್ಲ; ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕದಂತೆ ಗುರೂಪದೇಶದ ಪ್ರಕಾರ ಆ ನೀರಿನ ಮೇಲೆ ಗಾಯತ್ರೀ ಯಂತ್ರ ಬರೆಯುತ್ತಾರೆ. ಎರಡೂ ಕೈಗಳನ್ನು ಬೊಗಸೆ ಮಾಡಿ (ಹೆಬ್ಬೆರಳುಗಳನ್ನು ಬೆರಳುಗಳಿಂದ ದೂರವಿಟ್ಟು) ನೀರು ತುಂಬಿ, ಮೇಲೆತ್ತಿ, ಸೂರ್ಯನನ್ನು ನೋಡುತ್ತಾ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ತಟ್ಟೆಗೆ ಅಥವಾ ಶುದ್ಧ ನೆಲಕ್ಕೆ ಬಿಡಿ (ನದಿ, ಕೆರೆಯಲ್ಲಾದರೆ ಸೂರ್ಯನ ಕಡೆಗೆ ಮೇಲಕ್ಕೆ ಚೆಲ್ಲಿ). ಪ್ರತಿ ಬಾರಿಯೂ “ಸೂರ್ಯನಾರಾಯಣಾಯ ಇದಮರ್ಘ್ಯಂ…” ಎಂದು ಸೂರ್ಯಾಂತರ್ಯಾಮಿ ನಾರಾಯಣನಿಗೆ ಅರ್ಪಿಸಿ. ಹೀಗೆ ಮೂರು ಅರ್ಘ್ಯ ಕೊಡಿ. ಸೂರ್ಯೋದಯವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ನಂತರ ಎದೆ ಮುಟ್ಟಿಕೊಂಡು “ಹೃದಯಸ್ಥಾ ತು ಗಾಯತ್ರೀ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ.',
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
          text: 'पूर्वोक्त एवंगुणविशेषणविशिष्टायां शुभतिथौ\nसवितृनामकसूर्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं प्रातःसन्ध्याङ्गार्घ्यप्रदानमहं करिष्ये ॥',
          meaning: {
            en: 'On this auspicious day described before, moved by Sri Lakshminarayana who dwells in Mukhyaprana, the beloved of Bharati, within the Sun called Savitri, and for his pleasure, I shall offer the arghya that is part of the morning sandhya.',
            kn: 'ಹಿಂದೆ ಹೇಳಿದ ಈ ಶುಭದಿನದಂದು, ಸವಿತೃನಾಮಕ ಸೂರ್ಯನಲ್ಲಿರುವ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣರಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'Of the Gayatri the seer is Vishvamitra, the deity Savitri, the metre gayatri; it is applied in offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
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
            en: 'After the three arghyas, to remove the fault of letting the time of the morning sandhya pass, I shall give a fourth arghya. (Then offer it with the Gayatri above.)',
            kn: 'ಮೂರು ಅರ್ಘ್ಯಗಳ ನಂತರ, ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಕಾಲ ಮೀರಿದ ದೋಷದ ಪರಿಹಾರಕ್ಕಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ. (ಮೇಲಿನ ಗಾಯತ್ರಿಯಿಂದ ಕೊಡಬೇಕು.)',
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
      titleEn: 'Arghya (water offering to the Sun)',
      note: 'Midday: stand facing the Sun (north or east), feet together. Do achamana and pranayama and say the sankalpa. With fresh water in both hands joined like a cup, give the first arghya with हंसः शुचिषत्… (seer Vamadeva son of Gautama, deity Surya, metre jagati) and the second and third with the Gayatri, saying सूर्यनारायणाय इदमर्घ्यं… after each. If noon is long past, say the prayaschitta sankalpa and give a fourth arghya with the Gayatri. Then pray एहि त्वं देवि….',
      noteKn: 'ಮಧ್ಯಾಹ್ನ ಸೂರ್ಯನ ಕಡೆಗೆ (ಉತ್ತರ ಅಥವಾ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ) ಪಾದಗಳನ್ನು ಜೋಡಿಸಿ ನಿಂತುಕೊಳ್ಳಿ. ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ ಹೇಳಿ. ಬೊಗಸೆಯಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ ಮೊದಲ ಅರ್ಘ್ಯವನ್ನು “ಹಂಸಃ ಶುಚಿಷತ್…” ಮಂತ್ರದಿಂದ (ಗೌತಮಪುತ್ರ ವಾಮದೇವ ಋಷಿ, ಸೂರ್ಯ ದೇವತೆ, ಜಗತೀ ಛಂದಸ್ಸು), ಎರಡನೆಯ ಮತ್ತು ಮೂರನೆಯದನ್ನು ಗಾಯತ್ರಿಯಿಂದ ಕೊಡಿ; ಪ್ರತಿ ಬಾರಿ “ಸೂರ್ಯನಾರಾಯಣಾಯ ಇದಮರ್ಘ್ಯಂ…” ಎನ್ನಿ. ಮಧ್ಯಾಹ್ನ ಬಹಳ ಮೀರಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ನಂತರ “ಏಹಿ ತ್ವಂ ದೇವಿ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ.',
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
          text: 'पूर्वोक्त एवंगुणविशेषणविशिष्टायां शुभतिथौ\nसवितृनामकसूर्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं माध्याह्नसन्ध्याङ्गार्घ्यप्रदानमहं करिष्ये ॥',
          meaning: {
            en: 'On this auspicious day described before, moved by Sri Lakshminarayana who dwells in Mukhyaprana within the Sun called Savitri, and for his pleasure, I shall offer the arghya that is part of the midday sandhya.',
            kn: 'ಹಿಂದೆ ಹೇಳಿದ ಈ ಶುಭದಿನದಂದು, ಸವಿತೃನಾಮಕ ಸೂರ್ಯಾಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಮಾಧ್ಯಾಹ್ನ ಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।\nनृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतं बृहत् ॥',
          meaning: {
            en: 'He is the Swan dwelling in the bright heaven, the Vasu dwelling in the sky, the priest seated at the altar, the guest in the house; he dwells in men, in the best, in truth and in the vault of heaven; born of the waters, of rays, of truth and of the mountain, he is the great Truth. (Madhva: first midday arghya.)',
            kn: 'ಅವನು ಪ್ರಕಾಶಮಯ ಸ್ವರ್ಗದಲ್ಲಿರುವ ಹಂಸ, ಅಂತರಿಕ್ಷದಲ್ಲಿರುವ ವಸು, ವೇದಿಯಲ್ಲಿ ಕುಳಿತ ಹೋತೃ, ಮನೆಯಲ್ಲಿರುವ ಅತಿಥಿ; ಮನುಷ್ಯರಲ್ಲಿ, ಶ್ರೇಷ್ಠರಲ್ಲಿ, ಸತ್ಯದಲ್ಲಿ, ಆಕಾಶದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಜಲ, ಕಿರಣ, ಸತ್ಯ, ಪರ್ವತಗಳಿಂದ ಹುಟ್ಟಿದವನು; ಅವನೇ ಮಹಾ ಸತ್ಯ. (ಮಾಧ್ವರ ಮಧ್ಯಾಹ್ನದ ಮೊದಲ ಅರ್ಘ್ಯ.)',
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
            en: 'Of the Gayatri the seer is Vishvamitra, the deity Savitri, the metre gayatri; it is applied in offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
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
      titleEn: 'Arghya (water offering to the Sun)',
      note: 'Evening: give the arghya before sunset, sitting and facing west. Do achamana and pranayama and say the sankalpa. With fresh water in both hands joined like a cup, recite the Gayatri and let the water fall into the plate or onto clean ground or a stone — at a river, not into the water. Say सूर्यनारायणाय इदमर्घ्यं… after each; give three arghyas. If the sun has already set, say the prayaschitta sankalpa and give a fourth. Then pray उत्तिष्ठोत्तिष्ठ….',
      noteKn: 'ಸಂಜೆಯ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಮೊದಲು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು ಕೊಡಬೇಕು. ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ ಹೇಳಿ. ಬೊಗಸೆಯಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ ಗಾಯತ್ರಿ ಹೇಳಿ ತಟ್ಟೆಗೆ ಅಥವಾ ಶುದ್ಧ ನೆಲ/ಬಂಡೆಯ ಮೇಲೆ ಬಿಡಿ — ನದೀತೀರದಲ್ಲಿ ನೀರಿನೊಳಗೆ ಬಿಡಬಾರದು. ಪ್ರತಿ ಬಾರಿ “ಸೂರ್ಯನಾರಾಯಣಾಯ ಇದಮರ್ಘ್ಯಂ…” ಎನ್ನಿ; ಮೂರು ಅರ್ಘ್ಯ ಕೊಡಿ. ಸೂರ್ಯಾಸ್ತವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಸಂಕಲ್ಪ ಹೇಳಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ನಂತರ “ಉತ್ತಿಷ್ಠೋತ್ತಿಷ್ಠ…” ಎಂದು ಪ್ರಾರ್ಥಿಸಿ.',
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
          text: 'पूर्वोक्त एवंगुणविशेषणविशिष्टायां शुभतिथौ\nसवितृनामकसूर्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं सायंसन्ध्याङ्गार्घ्यप्रदानमहं करिष्ये ॥',
          meaning: {
            en: 'On this auspicious day described before, moved by Sri Lakshminarayana who dwells in Mukhyaprana within the Sun called Savitri, and for his pleasure, I shall offer the arghya that is part of the evening sandhya.',
            kn: 'ಹಿಂದೆ ಹೇಳಿದ ಈ ಶುಭದಿನದಂದು, ಸವಿತೃನಾಮಕ ಸೂರ್ಯಾಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಸಾಯಂಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'Of the Gayatri the seer is Vishvamitra, the deity Savitri, the metre gayatri; it is applied in offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
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
      titleEn: 'Arghya (water offering to the Sun)',
      note: 'Morning: give the arghya before sunrise, standing, facing east, feet together. Do achamana and pranayama and say the sankalpa. Take fresh water in both hands joined like a cup, thumbs kept apart from the fingers, raise it to the level of the brows and, reciting the Gayatri with Om and the vyahritis, pour it out over the fingertips while rising slightly on the heels. Give three arghyas. If the sun has already risen, do one pranayama, say the kalatita sankalpa and give a fourth with the Gayatri.',
      noteKn: 'ಬೆಳಗಿನ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯೋದಯಕ್ಕೆ ಮೊದಲು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಪಾದಗಳನ್ನು ಜೋಡಿಸಿ ನಿಂತು ಕೊಡಬೇಕು. ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ ಹೇಳಿ. ಹೆಬ್ಬೆರಳುಗಳನ್ನು ಬೆರಳುಗಳಿಂದ ದೂರವಿಟ್ಟು ಬೊಗಸೆಯಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ, ಹುಬ್ಬಿನ ಎತ್ತರಕ್ಕೆ ಎತ್ತಿ, ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿ ಹೇಳುತ್ತಾ ಹಿಮ್ಮಡಿಯನ್ನು ಸ್ವಲ್ಪ ಎತ್ತಿ ಬೆರಳ ತುದಿಯಿಂದ ಬಿಡಿ. ಮೂರು ಅರ್ಘ್ಯ ಕೊಡಿ. ಸೂರ್ಯೋದಯವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಕಾಲಾತೀತ ಸಂಕಲ್ಪ ಹೇಳಿ ಗಾಯತ್ರಿಯಿಂದ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ.',
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
            en: 'Of the Gayatri the seer is Vishvamitra, the deity Savitri, the metre gayatri; it is applied in offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'कालातीतप्रायश्चित्तार्घ्यं करिष्ये ॥',
          meaning: {
            en: 'I shall give the expiatory arghya for the time that has passed. (Do one pranayama, say this, and offer one more arghya with the Gayatri.)',
            kn: 'ಕಾಲ ಮೀರಿದ್ದಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ. (ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಇದನ್ನು ಹೇಳಿ, ಗಾಯತ್ರಿಯಿಂದ ಇನ್ನೊಂದು ಅರ್ಘ್ಯ ಕೊಡಬೇಕು.)',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (water offering to the Sun)',
      note: 'Midday: stand facing the Sun (north or east). Do achamana and pranayama and say the sankalpa. With fresh water in both joined hands give the arghya with the Gayatri as in the morning. The Kanchi manual and Kamesvara Aiyar give two arghyas at midday; Andhra manuals give three — the first with हंसः शुचिषत्… and two with the Gayatri. If noon is long past, give the fourth (kalatita) arghya.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ ಸೂರ್ಯನ ಕಡೆಗೆ (ಉತ್ತರ ಅಥವಾ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ) ನಿಂತುಕೊಳ್ಳಿ. ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ ಹೇಳಿ. ಬೆಳಗಿನಂತೆಯೇ ಬೊಗಸೆಯಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ ಗಾಯತ್ರಿಯಿಂದ ಅರ್ಘ್ಯ ಕೊಡಿ. ಕಂಚಿ ಪುಸ್ತಕ ಮತ್ತು ಕಾಮೇಶ್ವರ ಅಯ್ಯರ್ ಮಧ್ಯಾಹ್ನ ಎರಡು ಅರ್ಘ್ಯ ಹೇಳುತ್ತಾರೆ; ಆಂಧ್ರದ ಪುಸ್ತಕಗಳು ಮೂರು — ಮೊದಲನೆಯದು “ಹಂಸಃ ಶುಚಿಷತ್…” ಮಂತ್ರದಿಂದ, ಉಳಿದೆರಡು ಗಾಯತ್ರಿಯಿಂದ. ಮಧ್ಯಾಹ್ನ ಬಹಳ ಮೀರಿದ್ದರೆ ನಾಲ್ಕನೆಯ (ಕಾಲಾತೀತ) ಅರ್ಘ್ಯ ಕೊಡಿ.',
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
          text: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।\nनृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतं बृहत् ॥',
          meaning: {
            en: 'He is the Swan dwelling in the bright heaven, the Vasu dwelling in the sky, the priest seated at the altar, the guest in the house; he dwells in men, in the best, in truth and in the vault of heaven; born of the waters, of rays, of truth and of the mountain, he is the great Truth. (Madhva: first midday arghya.)',
            kn: 'ಅವನು ಪ್ರಕಾಶಮಯ ಸ್ವರ್ಗದಲ್ಲಿರುವ ಹಂಸ, ಅಂತರಿಕ್ಷದಲ್ಲಿರುವ ವಸು, ವೇದಿಯಲ್ಲಿ ಕುಳಿತ ಹೋತೃ, ಮನೆಯಲ್ಲಿರುವ ಅತಿಥಿ; ಮನುಷ್ಯರಲ್ಲಿ, ಶ್ರೇಷ್ಠರಲ್ಲಿ, ಸತ್ಯದಲ್ಲಿ, ಆಕಾಶದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಜಲ, ಕಿರಣ, ಸತ್ಯ, ಪರ್ವತಗಳಿಂದ ಹುಟ್ಟಿದವನು; ಅವನೇ ಮಹಾ ಸತ್ಯ. (ಮಾಧ್ವರ ಮಧ್ಯಾಹ್ನದ ಮೊದಲ ಅರ್ಘ್ಯ.)',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'Of the Gayatri the seer is Vishvamitra, the deity Savitri, the metre gayatri; it is applied in offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'कालातीतप्रायश्चित्तार्घ्यं करिष्ये ॥',
          meaning: {
            en: 'I shall give the expiatory arghya for the time that has passed. (Do one pranayama, say this, and offer one more arghya with the Gayatri.)',
            kn: 'ಕಾಲ ಮೀರಿದ್ದಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ. (ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಇದನ್ನು ಹೇಳಿ, ಗಾಯತ್ರಿಯಿಂದ ಇನ್ನೊಂದು ಅರ್ಘ್ಯ ಕೊಡಬೇಕು.)',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (water offering to the Sun)',
      note: 'Evening: give the arghya before sunset, facing west; the Kanchi manual has it given sitting. Do achamana and pranayama and say the sankalpa. With fresh water in both joined hands, recite the Gayatri and let the water fall into the plate or onto clean ground. Give three arghyas. If the sun has already set, give the fourth (kalatita) arghya.',
      noteKn: 'ಸಂಜೆಯ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಮೊದಲು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕೊಡಬೇಕು; ಕಂಚಿ ಪುಸ್ತಕದಂತೆ ಕುಳಿತು ಕೊಡುತ್ತಾರೆ. ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪ ಹೇಳಿ. ಬೊಗಸೆಯಲ್ಲಿ ಶುದ್ಧಜಲ ತುಂಬಿ ಗಾಯತ್ರಿ ಹೇಳಿ ತಟ್ಟೆಗೆ ಅಥವಾ ಶುದ್ಧ ನೆಲಕ್ಕೆ ಬಿಡಿ. ಮೂರು ಅರ್ಘ್ಯ ಕೊಡಿ. ಸೂರ್ಯಾಸ್ತವಾಗಿಬಿಟ್ಟಿದ್ದರೆ ನಾಲ್ಕನೆಯ (ಕಾಲಾತೀತ) ಅರ್ಘ್ಯ ಕೊಡಿ.',
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
            en: 'Of the Gayatri the seer is Vishvamitra, the deity Savitri, the metre gayatri; it is applied in offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ भूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          text: 'कालातीतप्रायश्चित्तार्घ्यं करिष्ये ॥',
          meaning: {
            en: 'I shall give the expiatory arghya for the time that has passed. (Do one pranayama, say this, and offer one more arghya with the Gayatri.)',
            kn: 'ಕಾಲ ಮೀರಿದ್ದಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ. (ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಇದನ್ನು ಹೇಳಿ, ಗಾಯತ್ರಿಯಿಂದ ಇನ್ನೊಂದು ಅರ್ಘ್ಯ ಕೊಡಬೇಕು.)',
          },
        },
      ],
    },
    {
      title: 'आत्मप्रदक्षिणम्',
      titleEn: 'Atma-pradakshina (turning round)',
      note: 'Take a little water in the right hand and, saying असावादित्यो ब्रह्म, turn round once clockwise where you stand, pouring the water around yourself. Meditate that Sri Lakshminarayana, present in the Sun through Mukhyaprana, is Brahman. Then sit down and do achamana twice.',
      noteKn: 'ಬಲಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು “ಅಸಾವಾದಿತ್ಯೋ ಬ್ರಹ್ಮ” ಎನ್ನುತ್ತಾ ನಿಂತಲ್ಲೇ ಒಮ್ಮೆ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ, ನಿಮ್ಮ ಸುತ್ತಲೂ ನೀರು ಬಿಡಿ. ಮುಖ್ಯಪ್ರಾಣನ ಮೂಲಕ ಸೂರ್ಯನಲ್ಲಿರುವ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನೇ ಬ್ರಹ್ಮನೆಂದು ಧ್ಯಾನಿಸಿ. ನಂತರ ಕುಳಿತು ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'असावादित्यो ब्रह्म ॥',
          meaning: {
            en: 'That Aditya, the Sun, is Brahman. (Madhva: the Lord within the Sun is the Supreme Brahman.)',
            kn: 'ಆ ಆದಿತ್ಯನೇ ಬ್ರಹ್ಮ. (ಮಾಧ್ವರು: ಸೂರ್ಯನಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯಾಗಿರುವ ಭಗವಂತನೇ ಪರಬ್ರಹ್ಮ.)',
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
      title: 'आत्मप्रदक्षिणम्',
      titleEn: 'Atma-pradakshina and aikyanusandhana',
      note: 'Take a little water in the right hand, turn round once clockwise where you stand and pour it around yourself saying असावादित्यो ब्रह्म. Then say ब्रह्मैवाहमस्मि, touching the chest with both hands, meditating on the Sun as Brahman and on yourself as one with it. Sit down and do achamana.',
      noteKn: 'ಬಲಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ನಿಂತಲ್ಲೇ ಒಮ್ಮೆ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ “ಅಸಾವಾದಿತ್ಯೋ ಬ್ರಹ್ಮ” ಎಂದು ಸುತ್ತಲೂ ನೀರು ಬಿಡಿ. ನಂತರ ಎರಡೂ ಕೈಗಳಿಂದ ಎದೆ ಮುಟ್ಟಿಕೊಂಡು “ಬ್ರಹ್ಮೈವಾಹಮಸ್ಮಿ” ಎಂದು, ಸೂರ್ಯನನ್ನು ಬ್ರಹ್ಮನೆಂದೂ ತನ್ನನ್ನು ಅದರೊಡನೆ ಒಂದೆಂದೂ ಧ್ಯಾನಿಸಿ. ಕುಳಿತು ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'असावादित्यो ब्रह्म ॥',
          meaning: {
            en: 'That Aditya, the Sun, is Brahman. (Madhva: the Lord within the Sun is the Supreme Brahman.)',
            kn: 'ಆ ಆದಿತ್ಯನೇ ಬ್ರಹ್ಮ. (ಮಾಧ್ವರು: ಸೂರ್ಯನಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯಾಗಿರುವ ಭಗವಂತನೇ ಪರಬ್ರಹ್ಮ.)',
          },
        },
        {
          text: 'ब्रह्मैवाहमस्मि ॥',
          meaning: {
            en: 'I am indeed that Brahman.',
            kn: 'ನಾನೇ ಆ ಬ್ರಹ್ಮನಾಗಿದ್ದೇನೆ.',
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
      title: 'तर्पणम्',
      titleEn: 'Tarpana (water offerings)',
      note: 'Seated, take fresh water (from the arghya vessel) and let it run off the tips of the right-hand fingers (deva-tirtha) into the plate, once for each name, looking towards the Sun. In the bright fortnight (shukla paksha) offer to the twelve forms Keshava … Damodara; in the dark fortnight (krishna paksha) to Sankarshana … Sri Krishna. Then offer to the nine planets every day — except on Ekadashi, when only the twelve forms are offered. Afterwards do achamana.',
      noteKn: 'ಕುಳಿತುಕೊಂಡು ಅರ್ಘ್ಯಪಾತ್ರೆಯ ಶುದ್ಧಜಲವನ್ನು ಬಲಗೈ ಬೆರಳ ತುದಿಯಿಂದ (ದೇವತೀರ್ಥ) ಸೂರ್ಯನ ಕಡೆ ನೋಡುತ್ತಾ ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಒಮ್ಮೆ ತಟ್ಟೆಗೆ ಬಿಡಿ. ಶುಕ್ಲಪಕ್ಷದಲ್ಲಿ ಕೇಶವ … ದಾಮೋದರ ಹನ್ನೆರಡು ರೂಪಗಳಿಗೆ; ಕೃಷ್ಣಪಕ್ಷದಲ್ಲಿ ಸಂಕರ್ಷಣ … ಶ್ರೀಕೃಷ್ಣ ಹನ್ನೆರಡು ರೂಪಗಳಿಗೆ. ನಂತರ ಪ್ರತಿದಿನ ನವಗ್ರಹಗಳಿಗೆ ತರ್ಪಣ — ಏಕಾದಶಿಯಂದು ಮಾತ್ರ ದ್ವಾದಶ ರೂಪಗಳಿಗೆ ಮಾತ್ರ ಕೊಡಬೇಕು. ಆಮೇಲೆ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'केशवं तर्पयामि । नारायणं तर्पयामि । माधवं तर्पयामि ।\nगोविन्दं तर्पयामि । विष्णुं तर्पयामि । मधुसूदनं तर्पयामि ।\nत्रिविक्रमं तर्पयामि । वामनं तर्पयामि । श्रीधरं तर्पयामि ।\nहृषीकेशं तर्पयामि । पद्मनाभं तर्पयामि । दामोदरं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water the twelve forms of the Lord: Keshava, Narayana, Madhava, Govinda, Vishnu, Madhusudana, Trivikrama, Vamana, Shridhara, Hrishikesha, Padmanabha and Damodara. (Madhva: in the bright fortnight.)',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ, ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ, ತ್ರಿವಿಕ್ರಮ, ವಾಮನ, ಶ್ರೀಧರ, ಹೃಷೀಕೇಶ, ಪದ್ಮನಾಭ, ದಾಮೋದರ ಎಂಬ ಭಗವಂತನ ಹನ್ನೆರಡು ರೂಪಗಳನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ. (ಮಾಧ್ವರು: ಶುಕ್ಲಪಕ್ಷದಲ್ಲಿ.)',
          },
        },
        {
          text: 'सङ्कर्षणं तर्पयामि । वासुदेवं तर्पयामि । प्रद्युम्नं तर्पयामि ।\nअनिरुद्धं तर्पयामि । पुरुषोत्तमं तर्पयामि । अधोक्षजं तर्पयामि ।\nनारसिंहं तर्पयामि । अच्युतं तर्पयामि । जनार्दनं तर्पयामि ।\nउपेन्द्रं तर्पयामि । हरिं तर्पयामि । श्रीकृष्णं तर्पयामि ॥',
          meaning: {
            en: 'In the dark fortnight, in place of the above: I satisfy with water Sankarshana, Vasudeva, Pradyumna, Aniruddha, Purushottama, Adhokshaja, Narasimha, Achyuta, Janardana, Upendra, Hari and Sri Krishna.',
            kn: 'ಕೃಷ್ಣಪಕ್ಷದಲ್ಲಿ ಮೇಲಿನವುಗಳ ಬದಲು: ಸಂಕರ್ಷಣ, ವಾಸುದೇವ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧ, ಪುರುಷೋತ್ತಮ, ಅಧೋಕ್ಷಜ, ನಾರಸಿಂಹ, ಅಚ್ಯುತ, ಜನಾರ್ದನ, ಉಪೇಂದ್ರ, ಹರಿ, ಶ್ರೀಕೃಷ್ಣರನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'सूर्यं तर्पयामि । चन्द्रं तर्पयामि । अङ्गारकं तर्पयामि ।\nबुधं तर्पयामि । बृहस्पतिं तर्पयामि । शुक्रं तर्पयामि ।\nशनैश्चरं तर्पयामि । राहुं तर्पयामि । केतुं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water the nine planets: the Sun, the Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu. (Not on Ekadashi.)',
            kn: 'ಸೂರ್ಯ, ಚಂದ್ರ, ಅಂಗಾರಕ, ಬುಧ, ಬೃಹಸ್ಪತಿ, ಶುಕ್ರ, ಶನೈಶ್ಚರ, ರಾಹು, ಕೇತು — ನವಗ್ರಹಗಳನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ. (ಏಕಾದಶಿಯಂದು ಬೇಡ.)',
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
      title: 'तर्पणम्',
      titleEn: 'Tarpana (water offerings)',
      note: 'Seated, let water run off the tips of the right-hand fingers (deva-tirtha) into the plate, once for each name: first the nine planets (Aditya …), then Keshava … Damodara (Kanchi manual). Afterwards do achamana.',
      noteKn: 'ಕುಳಿತುಕೊಂಡು ಬಲಗೈ ಬೆರಳ ತುದಿಯಿಂದ (ದೇವತೀರ್ಥ) ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಒಮ್ಮೆ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಿ: ಮೊದಲು ನವಗ್ರಹಗಳಿಗೆ (ಆದಿತ್ಯ …), ನಂತರ ಕೇಶವ … ದಾಮೋದರರಿಗೆ (ಕಂಚಿ ಪುಸ್ತಕ). ಆಮೇಲೆ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'आदित्यं तर्पयामि । सोमं तर्पयामि । अङ्गारकं तर्पयामि ।\nबुधं तर्पयामि । बृहस्पतिं तर्पयामि । शुक्रं तर्पयामि ।\nशनैश्चरं तर्पयामि । राहुं तर्पयामि । केतुं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water the Sun, the Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu.',
            kn: 'ಸೂರ್ಯ, ಚಂದ್ರ, ಅಂಗಾರಕ, ಬುಧ, ಬೃಹಸ್ಪತಿ, ಶುಕ್ರ, ಶನೈಶ್ಚರ, ರಾಹು, ಕೇತುಗಳನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'केशवं तर्पयामि । नारायणं तर्पयामि । माधवं तर्पयामि ।\nगोविन्दं तर्पयामि । विष्णुं तर्पयामि । मधुसूदनं तर्पयामि ।\nत्रिविक्रमं तर्पयामि । वामनं तर्पयामि । श्रीधरं तर्पयामि ।\nहृषीकेशं तर्पयामि । पद्मनाभं तर्पयामि । दामोदरं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water the twelve forms of the Lord: Keshava, Narayana, Madhava, Govinda, Vishnu, Madhusudana, Trivikrama, Vamana, Shridhara, Hrishikesha, Padmanabha and Damodara. (Madhva: in the bright fortnight.)',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ, ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ, ತ್ರಿವಿಕ್ರಮ, ವಾಮನ, ಶ್ರೀಧರ, ಹೃಷೀಕೇಶ, ಪದ್ಮನಾಭ, ದಾಮೋದರ ಎಂಬ ಭಗವಂತನ ಹನ್ನೆರಡು ರೂಪಗಳನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ. (ಮಾಧ್ವರು: ಶುಕ್ಲಪಕ್ಷದಲ್ಲಿ.)',
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
      titleEn: 'Removing obstacles and purifying the seat for japa',
      note: 'Sit for japa in a quiet, clean place (morning and midday facing east, evening facing west). Say the viniyoga and अपसर्पन्तु…, snapping the fingers (chotika) towards your left to drive away obstructing beings. Say निरस्तः परावसुः…, then touch the seat and pray to Mother Earth with पृथ्वि त्वया…; think of the seat as resting on Ananta and Kurma and bow to it. Then do pranayama three times.',
      noteKn: 'ಶಾಂತವಾದ ಶುದ್ಧ ಸ್ಥಳದಲ್ಲಿ ಜಪಕ್ಕೆ ಕುಳಿತುಕೊಳ್ಳಿ (ಬೆಳಗ್ಗೆ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ, ಸಂಜೆ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ). ವಿನಿಯೋಗ ಮತ್ತು “ಅಪಸರ್ಪಂತು…” ಹೇಳುತ್ತಾ ಎಡಭಾಗಕ್ಕೆ ಚಿಟಿಕೆ ಹೊಡೆದು ವಿಘ್ನಕಾರಿ ಭೂತಗಳನ್ನು ಓಡಿಸಿ. “ನಿರಸ್ತಃ ಪರಾವಸುಃ…” ಹೇಳಿ, ಆಸನವನ್ನು ಮುಟ್ಟಿ “ಪೃಥ್ವಿ ತ್ವಯಾ…” ಎಂದು ಭೂದೇವಿಯನ್ನು ಪ್ರಾರ್ಥಿಸಿ; ಆಸನವು ಅನಂತ–ಕೂರ್ಮರ ಮೇಲಿದೆ ಎಂದು ಭಾವಿಸಿ ನಮಸ್ಕರಿಸಿ. ನಂತರ ಮೂರು ಬಾರಿ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ.',
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
            en: 'May the beings that dwell on this ground move away; may those that create obstacles perish by auspicious command. May cruel beings and rakshasas depart. Without offending the deities who always dwell here, I begin this sacred Vedic rite.',
            kn: 'ಈ ನೆಲದಲ್ಲಿರುವ ಭೂತಗಳು ದೂರ ಸರಿಯಲಿ; ವಿಘ್ನ ಮಾಡುವವು ಮಂಗಳಕರವಾದ ಆಜ್ಞೆಯಿಂದ ನಾಶವಾಗಲಿ. ಕ್ರೂರ ಭೂತಗಳೂ ರಾಕ್ಷಸರೂ ತೊಲಗಲಿ. ಇಲ್ಲಿ ಸದಾ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ವಿರೋಧವಾಗದಂತೆ ಈ ಬ್ರಹ್ಮಕರ್ಮವನ್ನು ಆರಂಭಿಸುತ್ತೇನೆ.',
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
            en: 'O Earth, the worlds are borne by you, and you are borne by Vishnu. O Goddess, bear me too, and make this seat pure.',
            kn: 'ಓ ಭೂದೇವಿ, ಲೋಕಗಳನ್ನು ನೀನು ಧರಿಸಿರುವೆ; ನಿನ್ನನ್ನು ಶ್ರೀವಿಷ್ಣು ಧರಿಸಿದ್ದಾನೆ. ದೇವಿ, ನನ್ನನ್ನೂ ಧರಿಸು; ಈ ಆಸನವನ್ನು ಪವಿತ್ರಗೊಳಿಸು.',
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
        {
          text: 'प्राणानायम्य ॥',
          meaning: {
            en: 'Do pranayama, as at the beginning (Madhvas: three times).',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ಮಾಧ್ವರು ಮೂರು ಬಾರಿ).',
          },
        },
      ],
    },
    {
      title: 'आसनशुद्धिः',
      titleEn: 'Purifying the seat and remembering Ganesha',
      note: 'Sit for japa in a quiet, clean place. Touch the seat and pray to Mother Earth with पृथ्वि त्वया…, then remember Ganesha with शुक्लाम्बरधरम्…, tapping the temples lightly with the knuckles. Then do pranayama.',
      noteKn: 'ಶಾಂತವಾದ ಶುದ್ಧ ಸ್ಥಳದಲ್ಲಿ ಜಪಕ್ಕೆ ಕುಳಿತುಕೊಳ್ಳಿ. ಆಸನವನ್ನು ಮುಟ್ಟಿ “ಪೃಥ್ವಿ ತ್ವಯಾ…” ಎಂದು ಭೂದೇವಿಯನ್ನು ಪ್ರಾರ್ಥಿಸಿ, ನಂತರ ಮುಷ್ಟಿಯಿಂದ ಹಣೆಯ ಎರಡೂ ಪಕ್ಕ ಮೆಲ್ಲನೆ ತಟ್ಟಿಕೊಳ್ಳುತ್ತಾ “ಶುಕ್ಲಾಂಬರಧರಂ…” ಎಂದು ಗಣೇಶನನ್ನು ಸ್ಮರಿಸಿ. ಆಮೇಲೆ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'पृथ्वि त्वया धृता लोका देवि त्वं विष्णुना धृता ।\nत्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥',
          meaning: {
            en: 'O Earth, the worlds are borne by you, and you are borne by Vishnu. O Goddess, bear me too, and make this seat pure.',
            kn: 'ಓ ಭೂದೇವಿ, ಲೋಕಗಳನ್ನು ನೀನು ಧರಿಸಿರುವೆ; ನಿನ್ನನ್ನು ಶ್ರೀವಿಷ್ಣು ಧರಿಸಿದ್ದಾನೆ. ದೇವಿ, ನನ್ನನ್ನೂ ಧರಿಸು; ಈ ಆಸನವನ್ನು ಪವಿತ್ರಗೊಳಿಸು.',
          },
        },
        {
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत्सर्वविघ्नोपशान्तये ॥',
          meaning: {
            en: 'To remove all obstacles, one should meditate on the all-pervading one clad in white, moon-coloured, four-armed, with a gracious face.',
            kn: 'ಎಲ್ಲಾ ವಿಘ್ನಗಳ ಶಾಂತಿಗಾಗಿ, ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಚಂದ್ರನಂತೆ ಬಿಳುಪಾದ, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳ, ಪ್ರಸನ್ನಮುಖನಾದ ಸರ್ವವ್ಯಾಪಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          text: 'प्राणानायम्य ॥',
          meaning: {
            en: 'Do pranayama, as at the beginning (Madhvas: three times).',
            kn: 'ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ಮಾಧ್ವರು ಮೂರು ಬಾರಿ).',
          },
        },
      ],
    },
    {
      title: 'गायत्र्यावाहनम्',
      titleEn: 'Gayatri avahana (invocation)',
      note: 'With folded hands (anjali) invoke the Gayatri with the Taittiriya mantras (Mahanarayana Upanishad): begin with ओमित्येकाक्षरं ब्रह्म… and recite the whole passage through …पञ्चशीर्षोपनयने विनियोगः. At आवाहयामि draw the folded hands towards the chest. Some manuals read जुषस्व नः for जुषस्व मे.',
      noteKn: 'ಕೈಮುಗಿದು (ಅಂಜಲಿ) ತೈತ್ತಿರೀಯ ಮಂತ್ರಗಳಿಂದ (ಮಹಾನಾರಾಯಣೋಪನಿಷತ್) ಗಾಯತ್ರಿಯನ್ನು ಆವಾಹಿಸಿ: “ಓಮಿತ್ಯೇಕಾಕ್ಷರಂ ಬ್ರಹ್ಮ…” ಇಂದ ಆರಂಭಿಸಿ “…ಪಂಚಶೀರ್ಷೋಪನಯನೇ ವಿನಿಯೋಗಃ” ವರೆಗೆ ಹೇಳಿ. “ಆವಾಹಯಾಮಿ” ಎನ್ನುವಾಗ ಜೋಡಿಸಿದ ಕೈಗಳನ್ನು ಎದೆಯ ಕಡೆಗೆ ತನ್ನಿ. ಕೆಲವು ಪುಸ್ತಕಗಳಲ್ಲಿ “ಜುಷಸ್ವ ಮೇ” ಬದಲು “ಜುಷಸ್ವ ನಃ” ಎಂದಿದೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ओमित्येकाक्षरं ब्रह्म । अग्निर्देवता ब्रह्म इत्यार्षम् ।\nगायत्रं छन्दं परमात्मं सरूपम् । सायुज्यं विनियोगम् ॥',
          meaning: {
            en: 'Om, the single syllable, is Brahman. Its deity is Agni; its seer is Brahman; its metre is gayatri; its form is the Supreme Self; its use is to attain union with him.',
            kn: 'ಓಂ ಎಂಬ ಏಕಾಕ್ಷರವೇ ಬ್ರಹ್ಮ. ಅದಕ್ಕೆ ಅಗ್ನಿ ದೇವತೆ, ಬ್ರಹ್ಮ ಋಷಿ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಪರಮಾತ್ಮನೇ ಅದರ ಸ್ವರೂಪ; ಅವನ ಸಾಯುಜ್ಯವೇ ಅದರ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'आयातु वरदा देवी अक्षरं ब्रह्मसम्मितम् ।\nगायत्रीं छन्दसां मातेदं ब्रह्म जुषस्व मे ॥',
          meaning: {
            en: 'May the boon-giving Goddess come, the imperishable one, equal to the Veda. O Gayatri, mother of the metres, accept this prayer of mine.',
            kn: 'ವರವನ್ನು ಕೊಡುವ, ಅಕ್ಷರಸ್ವರೂಪಳೂ ವೇದಕ್ಕೆ ಸಮಾನಳೂ ಆದ ದೇವಿಯು ಬರಲಿ. ಛಂದಸ್ಸುಗಳ ತಾಯಿಯಾದ ಓ ಗಾಯತ್ರೀದೇವಿ, ನನ್ನ ಈ ಪ್ರಾರ್ಥನೆಯನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: 'यदह्नात्कुरुते पापं तदह्नात्प्रतिमुच्यते ।\nयद्रात्रियात्कुरुते पापं तद्रात्रियात्प्रतिमुच्यते ।\nसर्ववर्णे महादेवि सन्ध्याविद्ये सरस्वति ॥',
          meaning: {
            en: 'The sin one commits by day is released that very day, and the sin one commits by night is released that very night (through this worship). O great Goddess of all colours, knowledge of the sandhya, Sarasvati!',
            kn: 'ಹಗಲಿನಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಆ ಹಗಲಿನಲ್ಲೇ, ರಾತ್ರಿಯಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಆ ರಾತ್ರಿಯಲ್ಲೇ (ಈ ಉಪಾಸನೆಯಿಂದ) ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ. ಎಲ್ಲಾ ವರ್ಣಗಳುಳ್ಳ ಮಹಾದೇವಿ, ಸಂಧ್ಯಾವಿದ್ಯೆಯೇ, ಸರಸ್ವತಿ!',
          },
        },
        {
          text: 'ओजोऽसि सहोऽसि बलमसि भ्राजोऽसि देवानां धामनामासि ।\nविश्वमसि विश्वायुः सर्वमसि सर्वायुरभिभूरोम् ।\nगायत्रीमावाहयामि सावित्रीमावाहयामि सरस्वतीमावाहयामि ॥',
          meaning: {
            en: 'You are vigour, you are endurance, you are strength, you are splendour; you are the abode and name of the gods; you are the universe and the life of the universe, you are all and the life of all, the conqueror, Om. I invoke Gayatri, I invoke Savitri, I invoke Sarasvati.',
            kn: 'ನೀನು ಓಜಸ್ಸು, ಸಹನೆ, ಬಲ, ತೇಜಸ್ಸು; ದೇವತೆಗಳ ಧಾಮವೂ ನಾಮವೂ ನೀನೇ; ವಿಶ್ವವೂ ವಿಶ್ವದ ಆಯುಸ್ಸೂ, ಸರ್ವವೂ ಸರ್ವರ ಆಯುಸ್ಸೂ, ಎಲ್ಲವನ್ನೂ ಮೀರಿದವಳೂ ನೀನೇ, ಓಂ. ಗಾಯತ್ರಿಯನ್ನು, ಸಾವಿತ್ರಿಯನ್ನು, ಸರಸ್ವತಿಯನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'छन्दर्षीनावाहयामि श्रियमावाहयामि ।\nगायत्रिया गायत्रीच्छन्दो विश्वामित्र ऋषिः सविता देवता ।\nअग्निर्मुखं ब्रह्मा शिरो विष्णुर्हृदयं रुद्रः शिखा पृथिवी योनिः ।\nप्राणापानव्यानोदानसमाना सप्राणा श्वेतवर्णा सांख्यायनसगोत्रा ।\nगायत्री चतुर्विंशत्यक्षरा त्रिपदा षट्कुक्षिः पञ्चशीर्षोपनयने विनियोगः ॥',
          meaning: {
            en: 'I invoke the metres and seers, I invoke Sri. Of the Gayatri, the metre is gayatri, the seer Vishvamitra, the deity Savitri. Agni is her mouth, Brahma her head, Vishnu her heart, Rudra her topknot, the Earth her source; she is endowed with the five vital breaths, white in colour, of the Samkhyayana gotra, of twenty-four syllables, three feet, six bellies and five heads; she is employed at the upanayana.',
            kn: 'ಛಂದಸ್ಸು-ಋಷಿಗಳನ್ನೂ ಶ್ರೀಯನ್ನೂ ಆವಾಹಿಸುತ್ತೇನೆ. ಗಾಯತ್ರಿಗೆ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ. ಅಗ್ನಿ ಅವಳ ಮುಖ, ಬ್ರಹ್ಮ ತಲೆ, ವಿಷ್ಣು ಹೃದಯ, ರುದ್ರ ಶಿಖೆ, ಭೂಮಿ ಯೋನಿ; ಪ್ರಾಣ-ಅಪಾನ-ವ್ಯಾನ-ಉದಾನ-ಸಮಾನಗಳಿಂದ ಕೂಡಿದವಳು, ಬಿಳಿಯ ಬಣ್ಣದವಳು, ಸಾಂಖ್ಯಾಯನ ಗೋತ್ರದವಳು, ಇಪ್ಪತ್ನಾಲ್ಕು ಅಕ್ಷರ, ಮೂರು ಪಾದ, ಆರು ಕುಕ್ಷಿ, ಐದು ಶಿರಸ್ಸುಗಳುಳ್ಳವಳು; ಉಪನಯನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
      ],
    },
    {
      title: 'गायत्र्यावाहनम्',
      titleEn: 'Gayatri avahana (invocation)',
      note: 'With folded hands, say the viniyoga आयात्वित्यनुवाकस्य… touching the head, the tip of the nose and the chest, and invoke the Gayatri. At each आवाहयामि draw the folded hands towards the chest. Many Smarta manuals stop the invocation at सरस्वतीमावाहयामि; others continue to the end as given here.',
      noteKn: 'ಕೈಮುಗಿದು “ಆಯಾತ್ವಿತ್ಯನುವಾಕಸ್ಯ…” ವಿನಿಯೋಗವನ್ನು ತಲೆ, ಮೂಗಿನ ತುದಿ, ಎದೆ ಮುಟ್ಟುತ್ತಾ ಹೇಳಿ ಗಾಯತ್ರಿಯನ್ನು ಆವಾಹಿಸಿ. ಪ್ರತಿಯೊಂದು “ಆವಾಹಯಾಮಿ”ಗೂ ಜೋಡಿಸಿದ ಕೈಗಳನ್ನು ಎದೆಯ ಕಡೆಗೆ ತನ್ನಿ. ಅನೇಕ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು “ಸರಸ್ವತೀಮಾವಾಹಯಾಮಿ”ಗೆ ನಿಲ್ಲಿಸುತ್ತವೆ; ಕೆಲವರು ಇಲ್ಲಿ ಕೊಟ್ಟಂತೆ ಕೊನೆಯವರೆಗೂ ಹೇಳುತ್ತಾರೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'आयात्वित्यनुवाकस्य वामदेव ऋषिः । अनुष्टुप् छन्दः ।\nगायत्री देवता । गायत्र्यावाहने विनियोगः ॥',
          meaning: {
            en: 'Of the anuvaka “ayatu” the seer is Vamadeva, the metre anushtubh, the deity Gayatri; it is applied in invoking the Gayatri.',
            kn: '"ಆಯಾತು" ಅನುವಾಕಕ್ಕೆ ವಾಮದೇವ ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ಗಾಯತ್ರೀ ದೇವತೆ; ಗಾಯತ್ರೀ ಆವಾಹನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'आयातु वरदा देवी अक्षरं ब्रह्मसम्मितम् ।\nगायत्रीं छन्दसां मातेदं ब्रह्म जुषस्व मे ॥',
          meaning: {
            en: 'May the boon-giving Goddess come, the imperishable one, equal to the Veda. O Gayatri, mother of the metres, accept this prayer of mine.',
            kn: 'ವರವನ್ನು ಕೊಡುವ, ಅಕ್ಷರಸ್ವರೂಪಳೂ ವೇದಕ್ಕೆ ಸಮಾನಳೂ ಆದ ದೇವಿಯು ಬರಲಿ. ಛಂದಸ್ಸುಗಳ ತಾಯಿಯಾದ ಓ ಗಾಯತ್ರೀದೇವಿ, ನನ್ನ ಈ ಪ್ರಾರ್ಥನೆಯನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: 'यदह्नात्कुरुते पापं तदह्नात्प्रतिमुच्यते ।\nयद्रात्रियात्कुरुते पापं तद्रात्रियात्प्रतिमुच्यते ।\nसर्ववर्णे महादेवि सन्ध्याविद्ये सरस्वति ॥',
          meaning: {
            en: 'The sin one commits by day is released that very day, and the sin one commits by night is released that very night (through this worship). O great Goddess of all colours, knowledge of the sandhya, Sarasvati!',
            kn: 'ಹಗಲಿನಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಆ ಹಗಲಿನಲ್ಲೇ, ರಾತ್ರಿಯಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಆ ರಾತ್ರಿಯಲ್ಲೇ (ಈ ಉಪಾಸನೆಯಿಂದ) ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ. ಎಲ್ಲಾ ವರ್ಣಗಳುಳ್ಳ ಮಹಾದೇವಿ, ಸಂಧ್ಯಾವಿದ್ಯೆಯೇ, ಸರಸ್ವತಿ!',
          },
        },
        {
          text: 'ओजोऽसि सहोऽसि बलमसि भ्राजोऽसि देवानां धामनामासि ।\nविश्वमसि विश्वायुः सर्वमसि सर्वायुरभिभूरोम् ।\nगायत्रीमावाहयामि सावित्रीमावाहयामि सरस्वतीमावाहयामि ॥',
          meaning: {
            en: 'You are vigour, you are endurance, you are strength, you are splendour; you are the abode and name of the gods; you are the universe and the life of the universe, you are all and the life of all, the conqueror, Om. I invoke Gayatri, I invoke Savitri, I invoke Sarasvati.',
            kn: 'ನೀನು ಓಜಸ್ಸು, ಸಹನೆ, ಬಲ, ತೇಜಸ್ಸು; ದೇವತೆಗಳ ಧಾಮವೂ ನಾಮವೂ ನೀನೇ; ವಿಶ್ವವೂ ವಿಶ್ವದ ಆಯುಸ್ಸೂ, ಸರ್ವವೂ ಸರ್ವರ ಆಯುಸ್ಸೂ, ಎಲ್ಲವನ್ನೂ ಮೀರಿದವಳೂ ನೀನೇ, ಓಂ. ಗಾಯತ್ರಿಯನ್ನು, ಸಾವಿತ್ರಿಯನ್ನು, ಸರಸ್ವತಿಯನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'छन्दर्षीनावाहयामि श्रियमावाहयामि ।\nगायत्रिया गायत्रीच्छन्दो विश्वामित्र ऋषिः सविता देवता ।\nअग्निर्मुखं ब्रह्मा शिरो विष्णुर्हृदयं रुद्रः शिखा पृथिवी योनिः ।\nप्राणापानव्यानोदानसमाना सप्राणा श्वेतवर्णा सांख्यायनसगोत्रा ।\nगायत्री चतुर्विंशत्यक्षरा त्रिपदा षट्कुक्षिः पञ्चशीर्षोपनयने विनियोगः ॥',
          meaning: {
            en: 'I invoke the metres and seers, I invoke Sri. Of the Gayatri, the metre is gayatri, the seer Vishvamitra, the deity Savitri. Agni is her mouth, Brahma her head, Vishnu her heart, Rudra her topknot, the Earth her source; she is endowed with the five vital breaths, white in colour, of the Samkhyayana gotra, of twenty-four syllables, three feet, six bellies and five heads; she is employed at the upanayana.',
            kn: 'ಛಂದಸ್ಸು-ಋಷಿಗಳನ್ನೂ ಶ್ರೀಯನ್ನೂ ಆವಾಹಿಸುತ್ತೇನೆ. ಗಾಯತ್ರಿಗೆ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ. ಅಗ್ನಿ ಅವಳ ಮುಖ, ಬ್ರಹ್ಮ ತಲೆ, ವಿಷ್ಣು ಹೃದಯ, ರುದ್ರ ಶಿಖೆ, ಭೂಮಿ ಯೋನಿ; ಪ್ರಾಣ-ಅಪಾನ-ವ್ಯಾನ-ಉದಾನ-ಸಮಾನಗಳಿಂದ ಕೂಡಿದವಳು, ಬಿಳಿಯ ಬಣ್ಣದವಳು, ಸಾಂಖ್ಯಾಯನ ಗೋತ್ರದವಳು, ಇಪ್ಪತ್ನಾಲ್ಕು ಅಕ್ಷರ, ಮೂರು ಪಾದ, ಆರು ಕುಕ್ಷಿ, ಐದು ಶಿರಸ್ಸುಗಳುಳ್ಳವಳು; ಉಪನಯನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
      ],
    },
    {
      title: 'न्यासः',
      titleEn: 'Kara-nyasa and anga-nyasa',
      note: 'Kara-nyasa: with both index fingers touch both thumbs (tat savituh), then with the thumbs touch the index, middle, ring and little fingers in turn, and finally rub the palms and backs of the hands. Anga-nyasa: with the right hand touch the chest, the top of the head and the topknot; cross the arms to touch both shoulders (kavacha); touch both eyes; at अस्त्राय फट् circle the right hand round the head and clap; with the last line snap the fingers in the directions (digbandha). Then, with folded hands, invite the Gayatri into the heart with आगच्छ वरदे देवि…, and say the rishi–chandas–devata for the japa, touching head, mouth and chest.',
      noteKn: 'ಕರನ್ಯಾಸ: ಎರಡೂ ತೋರುಬೆರಳುಗಳಿಂದ ಎರಡೂ ಹೆಬ್ಬೆರಳುಗಳನ್ನು (“ತತ್ಸವಿತುಃ”), ನಂತರ ಹೆಬ್ಬೆರಳುಗಳಿಂದ ತೋರು, ನಡು, ಉಂಗುರ, ಕಿರುಬೆರಳುಗಳನ್ನು ಕ್ರಮವಾಗಿ ಮುಟ್ಟಿ, ಕೊನೆಗೆ ಅಂಗೈ ಮತ್ತು ಮುಂಗೈಗಳನ್ನು ಉಜ್ಜಿ. ಅಂಗನ್ಯಾಸ: ಬಲಗೈಯಿಂದ ಎದೆ, ನೆತ್ತಿ, ಶಿಖೆ ಮುಟ್ಟಿ; ಕೈಗಳನ್ನು ಅಡ್ಡಹಾಕಿ ಎರಡೂ ಭುಜ (ಕವಚ); ಎರಡೂ ಕಣ್ಣು ಮುಟ್ಟಿ; “ಅಸ್ತ್ರಾಯ ಫಟ್” ಎನ್ನುವಾಗ ಬಲಗೈಯನ್ನು ತಲೆಯ ಸುತ್ತ ತಿರುಗಿಸಿ ಚಪ್ಪಾಳೆ ತಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯಕ್ಕೆ ದಿಕ್ಕುಗಳಿಗೆ ಚಿಟಿಕೆ ಹೊಡೆಯಿರಿ (ದಿಗ್ಬಂಧ). ನಂತರ ಕೈಮುಗಿದು “ಆಗಚ್ಛ ವರದೇ ದೇವಿ…” ಎಂದು ಗಾಯತ್ರಿಯನ್ನು ಹೃದಯಕ್ಕೆ ಆಹ್ವಾನಿಸಿ, ತಲೆ, ಬಾಯಿ, ಎದೆ ಮುಟ್ಟುತ್ತಾ ಜಪದ ಋಷಿ–ಛಂದಸ್ಸು–ದೇವತೆಗಳನ್ನು ಹೇಳಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'तत्सवितुः अङ्गुष्ठाभ्यां नमः । वरेण्यं तर्जनीभ्यां नमः ।\nभर्गो देवस्य मध्यमाभ्यां नमः । धीमहि अनामिकाभ्यां नमः ।\nधियो यो नः कनिष्ठिकाभ्यां नमः । प्रचोदयात् करतलकरपृष्ठाभ्यां नमः ॥',
          meaning: {
            en: 'Karanyasa: the parts of the Gayatri are placed on the thumbs, index, middle, ring and little fingers, and on the palms and backs of the hands, with salutation.',
            kn: 'ಕರನ್ಯಾಸ: ಗಾಯತ್ರಿಯ ಭಾಗಗಳನ್ನು ಹೆಬ್ಬೆರಳು, ತೋರು, ನಡು, ಉಂಗುರ, ಕಿರು ಬೆರಳುಗಳಲ್ಲೂ ಅಂಗೈ-ಮುಂಗೈಗಳಲ್ಲೂ ನಮಸ್ಕಾರದೊಂದಿಗೆ ಇರಿಸುವುದು.',
          },
        },
        {
          text: 'तत्सवितुः हृदयाय नमः । वरेण्यं शिरसे स्वाहा ।\nभर्गो देवस्य शिखायै वषट् । धीमहि कवचाय हुम् ।\nधियो यो नः नेत्राभ्यां वौषट् । प्रचोदयात् अस्त्राय फट् ।\nभूर्भुवस्सुवरोमिति दिग्बन्धः ॥',
          meaning: {
            en: 'Anganyasa: the parts of the Gayatri are placed on the heart, head, topknot, the chest as armour and the eyes, and as a weapon; with “bhur bhuvas suvar om” the directions are sealed against evil influences.',
            kn: 'ಅಂಗನ್ಯಾಸ: ಗಾಯತ್ರಿಯ ಭಾಗಗಳನ್ನು ಹೃದಯ, ತಲೆ, ಶಿಖೆ, ಕವಚರೂಪವಾಗಿ ಉರಸ್ಸು, ಕಣ್ಣುಗಳಲ್ಲೂ ಅಸ್ತ್ರರೂಪವಾಗಿಯೂ ಇರಿಸುವುದು; "ಭೂರ್ಭುವಸ್ಸುವರೋಮ್" ಎಂದು ದುಷ್ಟಶಕ್ತಿಗಳು ಪ್ರವೇಶಿಸದಂತೆ ದಿಕ್ಕುಗಳನ್ನು ಬಂಧಿಸುವುದು.',
          },
        },
        {
          text: 'आगच्छ वरदे देवि जपे मे सन्निधौ भव ।\nगायन्तं त्रायसे यस्माद्गायत्री त्वं ततः स्मृता ॥',
          meaning: {
            en: 'Come, O boon-giver, and be present with me in my japa. Because you protect the one who sings you, you are called Gayatri. (Madhva: the Lord is thought of as the Gayatri and invited into the heart.)',
            kn: 'ವರವನ್ನು ಕೊಡುವವನೇ, ಬಾ; ನನ್ನ ಜಪದಲ್ಲಿ ಸನ್ನಿಹಿತನಾಗು. ನಿನ್ನನ್ನು ಗಾನಮಾಡುವವನನ್ನು ರಕ್ಷಿಸುವುದರಿಂದ ನೀನು ಗಾಯತ್ರೀ ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತೀಯೆ. (ಮಾಧ್ವರು: ಭಗವಂತನನ್ನೇ ಗಾಯತ್ರೀಪ್ರತಿಪಾದ್ಯನೆಂದು ಚಿಂತಿಸಿ ಹೃದಯಮಂದಿರಕ್ಕೆ ಆಹ್ವಾನಿಸಬೇಕು.)',
          },
        },
        {
          text: 'प्रणवस्य परब्रह्म ऋषिः । परमात्मा देवता । दैवी गायत्री छन्दः ।\nव्याहृतीनां प्रजापतिरृषिः । अग्निवायुसूर्या देवताः । गायत्र्युष्णिगनुष्टुभश्छन्दांसि ।\nअस्य श्रीगायत्रीमन्त्रस्य विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nजपे विनियोगः ॥',
          meaning: {
            en: 'Of Om the seer is the Supreme Brahman, the deity the Supreme Self, the metre daivi gayatri; of the vyahritis the seer is Prajapati, the deities Agni, Vayu and Surya, the metres gayatri, ushnik and anushtubh; of this Gayatri mantra the seer is Vishvamitra, the deity Savitri, the metre gayatri; it is applied in japa.',
            kn: 'ಓಂಕಾರಕ್ಕೆ ಪರಬ್ರಹ್ಮ ಋಷಿ, ಪರಮಾತ್ಮ ದೇವತೆ, ದೈವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ವ್ಯಾಹೃತಿಗಳಿಗೆ ಪ್ರಜಾಪತಿ ಋಷಿ, ಅಗ್ನಿ-ವಾಯು-ಸೂರ್ಯರು ದೇವತೆಗಳು, ಗಾಯತ್ರೀ-ಉಷ್ಣಿಕ್-ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸುಗಳು; ಈ ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
      ],
    },
    {
      title: 'न्यासः',
      titleEn: 'Rishi–chandas–devata, nyasa and mudras',
      note: 'Say the rishi–chandas–devata of the Savitri, touching the head, the tip of the nose and the chest. Families that do nyasa then do kara-nyasa (touch each named finger with the thumb, then rub the palms and backs of the hands) and anga-nyasa (heart, head, topknot, shoulders crosswise, the eyes and the middle of the brows; at अस्त्राय फट् circle the right hand round the head and clap; with the last line snap the fingers in the ten directions). Those who were taught the twenty-four Gayatri mudras show them here, naming each; learn the gestures from your elders.',
      noteKn: 'ತಲೆ, ಮೂಗಿನ ತುದಿ, ಎದೆ ಮುಟ್ಟುತ್ತಾ ಸಾವಿತ್ರಿಯ ಋಷಿ–ಛಂದಸ್ಸು–ದೇವತೆಗಳನ್ನು ಹೇಳಿ. ನ್ಯಾಸ ಮಾಡುವ ಮನೆತನಗಳು ನಂತರ ಕರನ್ಯಾಸ (ಹೆಸರಿಸಿದ ಬೆರಳನ್ನು ಹೆಬ್ಬೆರಳಿನಿಂದ ಮುಟ್ಟಿ, ಕೊನೆಗೆ ಅಂಗೈ–ಮುಂಗೈ ಉಜ್ಜುವುದು) ಮತ್ತು ಅಂಗನ್ಯಾಸ (ಹೃದಯ, ತಲೆ, ಶಿಖೆ, ಅಡ್ಡಲಾಗಿ ಭುಜಗಳು, ಕಣ್ಣುಗಳು ಮತ್ತು ಹುಬ್ಬುಗಳ ನಡುವೆ; “ಅಸ್ತ್ರಾಯ ಫಟ್”ಗೆ ತಲೆಯ ಸುತ್ತ ಬಲಗೈ ತಿರುಗಿಸಿ ಚಪ್ಪಾಳೆ; ಕೊನೆಯ ವಾಕ್ಯಕ್ಕೆ ಹತ್ತು ದಿಕ್ಕುಗಳಿಗೆ ಚಿಟಿಕೆ) ಮಾಡುತ್ತಾರೆ. ಇಪ್ಪತ್ನಾಲ್ಕು ಗಾಯತ್ರೀ ಮುದ್ರೆಗಳನ್ನು ಕಲಿತವರು ಇಲ್ಲಿ ಹೆಸರು ಹೇಳುತ್ತಾ ತೋರಿಸುತ್ತಾರೆ; ಮುದ್ರೆಗಳನ್ನು ಹಿರಿಯರಿಂದ ಕಲಿಯಿರಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'सावित्र्या ऋषिर्विश्वामित्रः । निचृद्गायत्री छन्दः । सविता देवता ॥',
          meaning: {
            en: 'Of the Savitri (Gayatri) the seer is Vishvamitra, the metre nichrid gayatri, the deity Savitri.',
            kn: 'ಸಾವಿತ್ರೀ (ಗಾಯತ್ರೀ) ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ನಿಚೃದ್ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಸವಿತೃ ದೇವತೆ.',
          },
        },
        {
          text: 'तत्सवितुः ब्रह्मात्मने अङ्गुष्ठाभ्यां नमः ।\nवरेण्यं विष्ण्वात्मने तर्जनीभ्यां नमः ।\nभर्गो देवस्य रुद्रात्मने मध्यमाभ्यां नमः ।\nधीमहि सत्यात्मने अनामिकाभ्यां नमः ।\nधियो यो नः ज्ञानात्मने कनिष्ठिकाभ्यां नमः ।\nप्रचोदयात् सर्वात्मने करतलकरपृष्ठाभ्यां नमः ॥',
          meaning: {
            en: 'The six parts of the Gayatri — as Brahma, Vishnu, Rudra, Truth, Knowledge and the Self of all — are placed on the thumbs, index, middle, ring and little fingers, and the palms and backs of the hands.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು — ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಸತ್ಯ, ಜ್ಞಾನ, ಸರ್ವಾತ್ಮ ಸ್ವರೂಪವಾಗಿ — ಹೆಬ್ಬೆರಳು, ತೋರುಬೆರಳು, ನಡುಬೆರಳು, ಉಂಗುರದ ಬೆರಳು, ಕಿರುಬೆರಳು ಮತ್ತು ಅಂಗೈ–ಕೈಹಿಂಭಾಗಗಳಲ್ಲಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'तत्सवितुः ब्रह्मात्मने हृदयाय नमः ।\nवरेण्यं विष्ण्वात्मने शिरसे स्वाहा ।\nभर्गो देवस्य रुद्रात्मने शिखायै वषट् ।\nधीमहि सत्यात्मने कवचाय हुम् ।\nधियो यो नः ज्ञानात्मने नेत्रत्रयाय वौषट् ।\nप्रचोदयात् सर्वात्मने अस्त्राय फट् ।\nभूर्भुवस्सुवरोमिति दिग्बन्धः ॥',
          meaning: {
            en: 'The six parts of the Gayatri — as Brahma, Vishnu, Rudra, Truth, Knowledge and the Self of all — are placed on the heart, head, topknot, shoulders as armour, the three eyes, and as a weapon around oneself; with “bhur bhuvas suvar om” the directions are sealed.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು — ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಸತ್ಯ, ಜ್ಞಾನ, ಸರ್ವಾತ್ಮ ರೂಪದಲ್ಲಿ — ಹೃದಯ, ತಲೆ, ಶಿಖೆ, ಕವಚವಾಗಿ ಭುಜಗಳು, ಮೂರು ಕಣ್ಣುಗಳು ಮತ್ತು ಅಸ್ತ್ರವಾಗಿ ಸುತ್ತಲೂ ನ್ಯಾಸ ಮಾಡಲಾಗುತ್ತದೆ; “ಭೂರ್ಭುವಸ್ಸುವರೋಂ” ಎಂದು ದಿಕ್ಕುಗಳನ್ನು ಬಂಧಿಸಲಾಗುತ್ತದೆ.',
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
      title: 'ध्यानम् जपसङ्कल्पश्च',
      titleEn: 'Gayatri dhyana and japa sankalpa',
      note: 'Meditate on Sri Lakshminarayana shining in the middle of the solar orb, seated on a lotus, wearing armlets, makara earrings, a crown and a necklace, golden in colour, holding conch and discus — the same at all three times. Then make the resolve for japa and let a little water fall into the plate.',
      noteKn: 'ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿ ರಾರಾಜಿಸುವ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತ, ತೋಳ್ಬಳೆ, ಮಕರಕುಂಡಲ, ಕಿರೀಟ, ಹಾರ ಧರಿಸಿದ, ಸುವರ್ಣವರ್ಣನಾದ, ಶಂಖಚಕ್ರಧಾರಿ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸಿ — ಮೂರೂ ಕಾಲಗಳಲ್ಲಿ ಇದೇ ಧ್ಯಾನ. ನಂತರ ಜಪದ ಸಂಕಲ್ಪ ಹೇಳಿ ಸ್ವಲ್ಪ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ध्येयः सदा सवितृमण्डलमध्यवर्ती\nनारायणः सरसिजासनसन्निविष्टः ।\nकेयूरवान् मकरकुण्डलवान् किरीटी\nहारी हिरण्मयवपुर्धृतशङ्खचक्रः ॥',
          meaning: {
            en: 'Narayana should always be meditated upon, abiding in the middle of the orb of the Sun, seated on a lotus, wearing armlets, makara-shaped earrings, a crown and a necklace, golden in form, holding the conch and the discus.',
            kn: 'ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿರುವ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ತೋಳುಬಳೆ, ಮಕರಕುಂಡಲ, ಕಿರೀಟ, ಹಾರಗಳನ್ನು ಧರಿಸಿರುವ, ಬಂಗಾರದ ದೇಹಕಾಂತಿಯುಳ್ಳ, ಶಂಖ-ಚಕ್ರಗಳನ್ನು ಹಿಡಿದಿರುವ ಶ್ರೀನಾರಾಯಣನನ್ನು ಸದಾ ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['morning'] },
          text: 'अद्य पूर्वोच्चरित एवंगुणविशेषणविशिष्टायां शुभतिथौ\nभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति प्रातःसन्ध्याङ्गगायत्रीमन्त्रजपमहं करिष्ये ॥',
          meaning: {
            en: 'Today, on the auspicious day described before, moved by Sri Lakshminarayana called Savitri, who dwells in Mukhyaprana the beloved of Bharati, and for his pleasure, I shall do japa of the Gayatri mantra, as part of the morning sandhya, as far as I am able.',
            kn: 'ಇಂದು, ಹಿಂದೆ ಹೇಳಿದ ಈ ಶುಭದಿನದಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಯಥಾಶಕ್ತಿ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['midday'] },
          text: 'अद्य पूर्वोच्चरित एवंगुणविशेषणविशिष्टायां शुभतिथौ\nभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति माध्याह्नसन्ध्याङ्गगायत्रीमन्त्रजपमहं करिष्ये ॥',
          meaning: {
            en: 'Today, moved by Sri Lakshminarayana called Savitri, who dwells in Mukhyaprana, and for his pleasure, I shall do japa of the Gayatri mantra as part of the midday sandhya, as far as I am able.',
            kn: 'ಇಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಮಾಧ್ಯಾಹ್ನ ಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಯಥಾಶಕ್ತಿ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['evening'] },
          text: 'अद्य पूर्वोच्चरित एवंगुणविशेषणविशिष्टायां शुभतिथौ\nभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति सायंसन्ध्याङ्गगायत्रीमन्त्रजपमहं करिष्ये ॥',
          meaning: {
            en: 'Today, moved by Sri Lakshminarayana called Savitri, who dwells in Mukhyaprana, and for his pleasure, I shall do japa of the Gayatri mantra as part of the evening sandhya, as far as I am able.',
            kn: 'ಇಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಸಾಯಂಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಯಥಾಶಕ್ತಿ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'जपसङ्कल्पः ध्यानं च',
      titleEn: 'Japa sankalpa and Gayatri dhyana',
      note: 'Make the resolve for japa (Kanchi manual: after ten pranayamas; most families do one). Then meditate on the five-faced Goddess Gayatri: the Kanchi manual pictures her as Gayatri (Brahma’s form) in the morning, Savitri (Rudra’s form) at midday and Sarasvati (Vishnu’s form) in the evening.',
      noteKn: 'ಜಪದ ಸಂಕಲ್ಪ ಮಾಡಿ (ಕಂಚಿ ಪುಸ್ತಕದಲ್ಲಿ ಹತ್ತು ಪ್ರಾಣಾಯಾಮಗಳ ನಂತರ; ಹೆಚ್ಚಿನವರು ಒಂದು ಮಾಡುತ್ತಾರೆ). ನಂತರ ಪಂಚಮುಖಿ ಗಾಯತ್ರೀದೇವಿಯನ್ನು ಧ್ಯಾನಿಸಿ: ಕಂಚಿ ಪುಸ್ತಕದಂತೆ ಬೆಳಗ್ಗೆ ಗಾಯತ್ರಿ (ಬ್ರಹ್ಮರೂಪ), ಮಧ್ಯಾಹ್ನ ಸಾವಿತ್ರಿ (ರುದ್ರರೂಪ), ಸಂಜೆ ಸರಸ್ವತಿ (ವಿಷ್ಣುರೂಪ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          when: { tradition: ['smarta'], time: ['morning'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nप्रातःसन्ध्यागायत्रीमहामन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'For the destruction of all my sins, and so for the pleasure of the Supreme Lord, I shall do japa of the great Gayatri mantra of the morning sandhya.',
            kn: 'ನನ್ನ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: ['smarta'], time: ['midday'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nमाध्याह्निकगायत्रीमहामन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'For the destruction of all my sins, and so for the pleasure of the Supreme Lord, I shall do japa of the great Gayatri mantra of the midday worship.',
            kn: 'ನನ್ನ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಮಾಧ್ಯಾಹ್ನಿಕದ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: ['smarta'], time: ['evening'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nसायंसन्ध्यागायत्रीमहामन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'For the destruction of all my sins, and so for the pleasure of the Supreme Lord, I shall do japa of the great Gayatri mantra of the evening sandhya.',
            kn: 'ನನ್ನ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಸಾಯಂಸಂಧ್ಯೆಯ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मुक्ताविद्रुमहेमनीलधवलच्छायैर्मुखैस्त्रीक्षणैः\nयुक्तामिन्दुकलानिबद्धरत्नमुकुटां तत्त्वार्थवर्णात्मिकाम् ।\nगायत्रीं वरदाभयाङ्कुशकशाः शुभ्रं कपालं गुणं\nशङ्खं चक्रमथारविन्दयुगलं हस्तैर्वहन्तीं भजे ॥',
          meaning: {
            en: 'I worship Gayatri, whose faces have the hues of pearl, coral, gold, sapphire and white, each with three eyes; whose jewelled crown bears the crescent moon; whose very letters embody the meaning of reality; who holds in her hands the gestures of boon and fearlessness, a goad, a whip, a white skull, a rope, a conch, a discus and a pair of lotuses.',
            kn: 'ಮುತ್ತು, ಹವಳ, ಚಿನ್ನ, ನೀಲ, ಬಿಳುಪಿನ ಬಣ್ಣಗಳ ಐದು ಮುಖಗಳುಳ್ಳ, ಪ್ರತಿ ಮುಖಕ್ಕೂ ಮೂರು ಕಣ್ಣುಗಳಿರುವ, ಚಂದ್ರಕಲೆಯಿಂದ ಕೂಡಿದ ರತ್ನಕಿರೀಟವುಳ್ಳ, ತತ್ತ್ವಾರ್ಥವನ್ನು ತಿಳಿಸುವ ಅಕ್ಷರಸ್ವರೂಪಳಾದ, ಕೈಗಳಲ್ಲಿ ವರದ-ಅಭಯ ಮುದ್ರೆಗಳು, ಅಂಕುಶ, ಚಾವಟಿ, ಬಿಳಿಯ ಕಪಾಲ, ಪಾಶ, ಶಂಖ, ಚಕ್ರ, ಎರಡು ಕಮಲಗಳನ್ನು ಧರಿಸಿರುವ ಗಾಯತ್ರೀದೇವಿಯನ್ನು ಭಜಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Morning: stand facing east until the sun has risen (then you may sit), the counting hand held level with the navel. Recite the Gayatri silently or in a whisper, with the mind on its meaning and on the Lord within the Sun, pausing at the five places shown. Number: 1008 (best), 108 (middle) or at least 10 — Uttaradi manual; never fewer than ten. Count on the finger joints of the right hand, covered with the upper cloth: start at the middle joint of the ring finger, go down and round clockwise to the middle joint of the middle finger (ten per round); the middle joints are the meru and are not crossed. No mala is used for sandhya japa. Householders and brahmacharis say Om only at the beginning. Do not talk, look around or touch the body below the navel during japa.',
      noteKn: 'ಬೆಳಗ್ಗೆ: ಸೂರ್ಯೋದಯವಾಗುವವರೆಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ನಿಂತು (ನಂತರ ಕುಳಿತುಕೊಳ್ಳಬಹುದು), ಎಣಿಸುವ ಕೈಯನ್ನು ನಾಭಿಯ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದು ಜಪಿಸಿ. ಅರ್ಥವನ್ನೂ ಸೂರ್ಯಾಂತರ್ಯಾಮಿ ಭಗವಂತನನ್ನೂ ಚಿಂತಿಸುತ್ತಾ ಮನಸ್ಸಿನಲ್ಲಿ ಅಥವಾ ಮೆಲ್ಲನೆ ಗಾಯತ್ರಿ ಜಪಿಸಿ; ತೋರಿಸಿದ ಐದು ಕಡೆ ನಿಲ್ಲಿಸಿ. ಸಂಖ್ಯೆ: ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ) ಅಥವಾ ಕನಿಷ್ಠ ೧೦ — ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕ; ಹತ್ತಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ. ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ: ಉಂಗುರದ ಬೆರಳಿನ ನಡುಗೆಣ್ಣಿನಿಂದ ಕೆಳಗಿಳಿದು ಪ್ರದಕ್ಷಿಣವಾಗಿ ನಡುಬೆರಳಿನ ನಡುಗೆಣ್ಣಿನವರೆಗೆ (ಒಂದು ಸುತ್ತಿಗೆ ಹತ್ತು); ನಡುಗೆಣ್ಣುಗಳು ಮೇರು, ಅವನ್ನು ದಾಟಬಾರದು. ಸಂಧ್ಯಾಜಪಕ್ಕೆ ಜಪಮಾಲೆ ಬಳಸುವುದಿಲ್ಲ. ಗೃಹಸ್ಥರೂ ಬ್ರಹ್ಮಚಾರಿಗಳೂ ಆರಂಭದಲ್ಲಿ ಮಾತ್ರ ಓಂ ಹೇಳುತ್ತಾರೆ. ಜಪದ ಸಮಯದಲ್ಲಿ ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ.',
      when: { tradition: ['madhva'], time: ['morning'] },
      verses: [
        {
          text: 'ॐ ।\nभूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om. Earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds. (Madhva: we meditate on the adorable splendour of the Lord, the creator, who is full, all-pervading and bliss itself, and who moves our minds and deeds.)',
            kn: 'ಓಂ. ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಮಾಧ್ವರು: ಪರಿಪೂರ್ಣನೂ ಸರ್ವವ್ಯಾಪ್ತನೂ ಆನಂದಸ್ವರೂಪನೂ ಆದ, ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನೂ ಕರ್ಮಗಳನ್ನೂ ಪ್ರೇರಿಸುವ ಸೃಷ್ಟಿಕರ್ತನಾದ ಪರಮಾತ್ಮನ ಶ್ರೇಷ್ಠರಿಂದಲೂ ಭಜನೀಯವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ.)',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Midday: sit facing east (or north), the counting hand held level with the heart. Recite the Gayatri silently or in a whisper, with the mind on its meaning and on the Lord within the Sun, pausing at the five places shown. Number: 1008 (best), 108 (middle) or at least 10 — Uttaradi manual; never fewer than ten. Count on the finger joints of the right hand, covered with the upper cloth: start at the middle joint of the ring finger, go down and round clockwise to the middle joint of the middle finger (ten per round); the middle joints are the meru and are not crossed. No mala is used for sandhya japa. Householders and brahmacharis say Om only at the beginning. Do not talk, look around or touch the body below the navel during japa.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ: ಪೂರ್ವ (ಅಥವಾ ಉತ್ತರ) ಅಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಎಣಿಸುವ ಕೈಯನ್ನು ಹೃದಯದ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದು ಜಪಿಸಿ. ಅರ್ಥವನ್ನೂ ಸೂರ್ಯಾಂತರ್ಯಾಮಿ ಭಗವಂತನನ್ನೂ ಚಿಂತಿಸುತ್ತಾ ಮನಸ್ಸಿನಲ್ಲಿ ಅಥವಾ ಮೆಲ್ಲನೆ ಗಾಯತ್ರಿ ಜಪಿಸಿ; ತೋರಿಸಿದ ಐದು ಕಡೆ ನಿಲ್ಲಿಸಿ. ಸಂಖ್ಯೆ: ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ) ಅಥವಾ ಕನಿಷ್ಠ ೧೦ — ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕ; ಹತ್ತಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ. ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ: ಉಂಗುರದ ಬೆರಳಿನ ನಡುಗೆಣ್ಣಿನಿಂದ ಕೆಳಗಿಳಿದು ಪ್ರದಕ್ಷಿಣವಾಗಿ ನಡುಬೆರಳಿನ ನಡುಗೆಣ್ಣಿನವರೆಗೆ (ಒಂದು ಸುತ್ತಿಗೆ ಹತ್ತು); ನಡುಗೆಣ್ಣುಗಳು ಮೇರು, ಅವನ್ನು ದಾಟಬಾರದು. ಸಂಧ್ಯಾಜಪಕ್ಕೆ ಜಪಮಾಲೆ ಬಳಸುವುದಿಲ್ಲ. ಗೃಹಸ್ಥರೂ ಬ್ರಹ್ಮಚಾರಿಗಳೂ ಆರಂಭದಲ್ಲಿ ಮಾತ್ರ ಓಂ ಹೇಳುತ್ತಾರೆ. ಜಪದ ಸಮಯದಲ್ಲಿ ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ.',
      when: { tradition: ['madhva'], time: ['midday'] },
      verses: [
        {
          text: 'ॐ ।\nभूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om. Earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds. (Madhva: we meditate on the adorable splendour of the Lord, the creator, who is full, all-pervading and bliss itself, and who moves our minds and deeds.)',
            kn: 'ಓಂ. ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಮಾಧ್ವರು: ಪರಿಪೂರ್ಣನೂ ಸರ್ವವ್ಯಾಪ್ತನೂ ಆನಂದಸ್ವರೂಪನೂ ಆದ, ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನೂ ಕರ್ಮಗಳನ್ನೂ ಪ್ರೇರಿಸುವ ಸೃಷ್ಟಿಕರ್ತನಾದ ಪರಮಾತ್ಮನ ಶ್ರೇಷ್ಠರಿಂದಲೂ ಭಜನೀಯವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ.)',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Evening: sit facing west, the counting hand held level with the face. Recite the Gayatri silently or in a whisper, with the mind on its meaning and on the Lord within the Sun, pausing at the five places shown. Number: 1008 (best), 108 (middle) or at least 10 — Uttaradi manual; never fewer than ten. Count on the finger joints of the right hand, covered with the upper cloth: start at the middle joint of the ring finger, go down and round clockwise to the middle joint of the middle finger (ten per round); the middle joints are the meru and are not crossed. No mala is used for sandhya japa. Householders and brahmacharis say Om only at the beginning. Do not talk, look around or touch the body below the navel during japa.',
      noteKn: 'ಸಂಜೆ: ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಎಣಿಸುವ ಕೈಯನ್ನು ಮುಖದ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದು ಜಪಿಸಿ. ಅರ್ಥವನ್ನೂ ಸೂರ್ಯಾಂತರ್ಯಾಮಿ ಭಗವಂತನನ್ನೂ ಚಿಂತಿಸುತ್ತಾ ಮನಸ್ಸಿನಲ್ಲಿ ಅಥವಾ ಮೆಲ್ಲನೆ ಗಾಯತ್ರಿ ಜಪಿಸಿ; ತೋರಿಸಿದ ಐದು ಕಡೆ ನಿಲ್ಲಿಸಿ. ಸಂಖ್ಯೆ: ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ) ಅಥವಾ ಕನಿಷ್ಠ ೧೦ — ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕ; ಹತ್ತಕ್ಕಿಂತ ಕಡಿಮೆ ಬೇಡ. ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿದ ಬಲಗೈ ಬೆರಳ ಗೆಣ್ಣುಗಳಲ್ಲಿ ಎಣಿಸಿ: ಉಂಗುರದ ಬೆರಳಿನ ನಡುಗೆಣ್ಣಿನಿಂದ ಕೆಳಗಿಳಿದು ಪ್ರದಕ್ಷಿಣವಾಗಿ ನಡುಬೆರಳಿನ ನಡುಗೆಣ್ಣಿನವರೆಗೆ (ಒಂದು ಸುತ್ತಿಗೆ ಹತ್ತು); ನಡುಗೆಣ್ಣುಗಳು ಮೇರು, ಅವನ್ನು ದಾಟಬಾರದು. ಸಂಧ್ಯಾಜಪಕ್ಕೆ ಜಪಮಾಲೆ ಬಳಸುವುದಿಲ್ಲ. ಗೃಹಸ್ಥರೂ ಬ್ರಹ್ಮಚಾರಿಗಳೂ ಆರಂಭದಲ್ಲಿ ಮಾತ್ರ ಓಂ ಹೇಳುತ್ತಾರೆ. ಜಪದ ಸಮಯದಲ್ಲಿ ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ಅಂಗ ಮುಟ್ಟುವುದು ಬೇಡ.',
      when: { tradition: ['madhva'], time: ['evening'] },
      verses: [
        {
          text: 'ॐ ।\nभूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om. Earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds. (Madhva: we meditate on the adorable splendour of the Lord, the creator, who is full, all-pervading and bliss itself, and who moves our minds and deeds.)',
            kn: 'ಓಂ. ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಮಾಧ್ವರು: ಪರಿಪೂರ್ಣನೂ ಸರ್ವವ್ಯಾಪ್ತನೂ ಆನಂದಸ್ವರೂಪನೂ ಆದ, ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನೂ ಕರ್ಮಗಳನ್ನೂ ಪ್ರೇರಿಸುವ ಸೃಷ್ಟಿಕರ್ತನಾದ ಪರಮಾತ್ಮನ ಶ್ರೇಷ್ಠರಿಂದಲೂ ಭಜನೀಯವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ.)',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Morning: stand facing east, hands level with the face (Kanchi manual), until the sun has risen. Recite the Gayatri silently or in a whisper with the mind on its meaning, pausing at the five places shown, the fingers kept together and covered with the upper cloth. Number: 1008 (best), 108 (middle), 28, or at least 10 (the Kanchi manual gives 108 in the morning, 32 at midday and 64 in the evening). Do not talk or look around during japa.',
      noteKn: 'ಬೆಳಗ್ಗೆ: ಸೂರ್ಯೋದಯವಾಗುವವರೆಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ನಿಂತು, ಕೈಗಳನ್ನು ಮುಖದ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದು (ಕಂಚಿ ಪುಸ್ತಕ) ಜಪಿಸಿ. ಅರ್ಥವನ್ನು ಚಿಂತಿಸುತ್ತಾ ಮನಸ್ಸಿನಲ್ಲಿ ಅಥವಾ ಮೆಲ್ಲನೆ ಗಾಯತ್ರಿ ಜಪಿಸಿ, ತೋರಿಸಿದ ಐದು ಕಡೆ ನಿಲ್ಲಿಸಿ; ಬೆರಳುಗಳನ್ನು ಸೇರಿಸಿ ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿಕೊಳ್ಳಿ. ಸಂಖ್ಯೆ: ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ), ೨೮ ಅಥವಾ ಕನಿಷ್ಠ ೧೦ (ಕಂಚಿ ಪುಸ್ತಕ: ಬೆಳಗ್ಗೆ ೧೦೮, ಮಧ್ಯಾಹ್ನ ೩೨, ಸಂಜೆ ೬೪). ಜಪದ ಸಮಯದಲ್ಲಿ ಮಾತನಾಡಬೇಡಿ, ಅತ್ತಿತ್ತ ನೋಡಬೇಡಿ.',
      when: { tradition: ['smarta'], time: ['morning'] },
      verses: [
        {
          text: 'ॐ ।\nभूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om. Earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds. (Madhva: we meditate on the adorable splendour of the Lord, the creator, who is full, all-pervading and bliss itself, and who moves our minds and deeds.)',
            kn: 'ಓಂ. ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಮಾಧ್ವರು: ಪರಿಪೂರ್ಣನೂ ಸರ್ವವ್ಯಾಪ್ತನೂ ಆನಂದಸ್ವರೂಪನೂ ಆದ, ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನೂ ಕರ್ಮಗಳನ್ನೂ ಪ್ರೇರಿಸುವ ಸೃಷ್ಟಿಕರ್ತನಾದ ಪರಮಾತ್ಮನ ಶ್ರೇಷ್ಠರಿಂದಲೂ ಭಜನೀಯವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ.)',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Midday: sit facing east or north, hands level with the chest. Recite the Gayatri silently or in a whisper with the mind on its meaning, pausing at the five places shown, the fingers kept together and covered with the upper cloth. Number: 1008 (best), 108 (middle), 28, or at least 10 (the Kanchi manual gives 108 in the morning, 32 at midday and 64 in the evening). Do not talk or look around during japa.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ: ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಕೈಗಳನ್ನು ಎದೆಯ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದು ಜಪಿಸಿ. ಅರ್ಥವನ್ನು ಚಿಂತಿಸುತ್ತಾ ಮನಸ್ಸಿನಲ್ಲಿ ಅಥವಾ ಮೆಲ್ಲನೆ ಗಾಯತ್ರಿ ಜಪಿಸಿ, ತೋರಿಸಿದ ಐದು ಕಡೆ ನಿಲ್ಲಿಸಿ; ಬೆರಳುಗಳನ್ನು ಸೇರಿಸಿ ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿಕೊಳ್ಳಿ. ಸಂಖ್ಯೆ: ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ), ೨೮ ಅಥವಾ ಕನಿಷ್ಠ ೧೦ (ಕಂಚಿ ಪುಸ್ತಕ: ಬೆಳಗ್ಗೆ ೧೦೮, ಮಧ್ಯಾಹ್ನ ೩೨, ಸಂಜೆ ೬೪). ಜಪದ ಸಮಯದಲ್ಲಿ ಮಾತನಾಡಬೇಡಿ, ಅತ್ತಿತ್ತ ನೋಡಬೇಡಿ.',
      when: { tradition: ['smarta'], time: ['midday'] },
      verses: [
        {
          text: 'ॐ ।\nभूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om. Earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds. (Madhva: we meditate on the adorable splendour of the Lord, the creator, who is full, all-pervading and bliss itself, and who moves our minds and deeds.)',
            kn: 'ಓಂ. ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಮಾಧ್ವರು: ಪರಿಪೂರ್ಣನೂ ಸರ್ವವ್ಯಾಪ್ತನೂ ಆನಂದಸ್ವರೂಪನೂ ಆದ, ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನೂ ಕರ್ಮಗಳನ್ನೂ ಪ್ರೇರಿಸುವ ಸೃಷ್ಟಿಕರ್ತನಾದ ಪರಮಾತ್ಮನ ಶ್ರೇಷ್ಠರಿಂದಲೂ ಭಜನೀಯವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ.)',
          },
        },
      ],
    },
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gayatri japa',
      note: 'Evening: sit facing west, hands level with the navel. Recite the Gayatri silently or in a whisper with the mind on its meaning, pausing at the five places shown, the fingers kept together and covered with the upper cloth. Number: 1008 (best), 108 (middle), 28, or at least 10 (the Kanchi manual gives 108 in the morning, 32 at midday and 64 in the evening). Do not talk or look around during japa.',
      noteKn: 'ಸಂಜೆ: ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಕೈಗಳನ್ನು ನಾಭಿಯ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿದು ಜಪಿಸಿ. ಅರ್ಥವನ್ನು ಚಿಂತಿಸುತ್ತಾ ಮನಸ್ಸಿನಲ್ಲಿ ಅಥವಾ ಮೆಲ್ಲನೆ ಗಾಯತ್ರಿ ಜಪಿಸಿ, ತೋರಿಸಿದ ಐದು ಕಡೆ ನಿಲ್ಲಿಸಿ; ಬೆರಳುಗಳನ್ನು ಸೇರಿಸಿ ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿಕೊಳ್ಳಿ. ಸಂಖ್ಯೆ: ೧೦೦೮ (ಉತ್ತಮ), ೧೦೮ (ಮಧ್ಯಮ), ೨೮ ಅಥವಾ ಕನಿಷ್ಠ ೧೦ (ಕಂಚಿ ಪುಸ್ತಕ: ಬೆಳಗ್ಗೆ ೧೦೮, ಮಧ್ಯಾಹ್ನ ೩೨, ಸಂಜೆ ೬೪). ಜಪದ ಸಮಯದಲ್ಲಿ ಮಾತನಾಡಬೇಡಿ, ಅತ್ತಿತ್ತ ನೋಡಬೇಡಿ.',
      when: { tradition: ['smarta'], time: ['evening'] },
      verses: [
        {
          text: 'ॐ ।\nभूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om. Earth, sky and heaven. We meditate on that excellent radiance of the divine Savitri; may he stir and guide our minds. (Madhva: we meditate on the adorable splendour of the Lord, the creator, who is full, all-pervading and bliss itself, and who moves our minds and deeds.)',
            kn: 'ಓಂ. ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಮಾಧ್ವರು: ಪರಿಪೂರ್ಣನೂ ಸರ್ವವ್ಯಾಪ್ತನೂ ಆನಂದಸ್ವರೂಪನೂ ಆದ, ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನೂ ಕರ್ಮಗಳನ್ನೂ ಪ್ರೇರಿಸುವ ಸೃಷ್ಟಿಕರ್ತನಾದ ಪರಮಾತ್ಮನ ಶ್ರೇಷ್ಠರಿಂದಲೂ ಭಜನೀಯವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ.)',
          },
        },
      ],
    },
    {
      title: 'जपसमर्पणम् अष्टाक्षरजपश्च',
      titleEn: 'Japa samarpana and ashtakshara japa',
      note: 'After japa do pranayama, repeat the kara-nyasa and anga-nyasa (now releasing the directions) and recite the dhyana shloka again. Offer the japa to the Lord with the words below, letting a little water fall into the plate. Those who are entitled then do pranayama, make the resolve and recite the Narayana ashtakshara mantra three times as many times as the Gayatri (for example 30 for 10, 300 for 100), and offer it in the same way.',
      noteKn: 'ಜಪದ ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಕರನ್ಯಾಸ–ಅಂಗನ್ಯಾಸಗಳನ್ನು (ಈಗ ದಿಕ್ಕುಗಳ ವಿಮೋಚನೆಯೊಂದಿಗೆ) ಮತ್ತೆ ಮಾಡಿ, ಧ್ಯಾನಶ್ಲೋಕವನ್ನು ಮತ್ತೆ ಹೇಳಿ. ಕೆಳಗಿನ ವಾಕ್ಯದಿಂದ ಜಪವನ್ನು ಭಗವಂತನಿಗೆ ಅರ್ಪಿಸಿ ಸ್ವಲ್ಪ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ಅಧಿಕಾರವುಳ್ಳವರು ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಸಂಕಲ್ಪಿಸಿ, ಗಾಯತ್ರೀ ಜಪದ ಮೂರು ಪಟ್ಟು (ಉದಾ: ೧೦ಕ್ಕೆ ೩೦, ೧೦೦ಕ್ಕೆ ೩೦೦) ನಾರಾಯಣ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರವನ್ನು ಜಪಿಸಿ, ಅದನ್ನೂ ಹಾಗೆಯೇ ಸಮರ್ಪಿಸಬೇಕು.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          when: { time: ['morning'] },
          text: 'अनेन प्रातःसन्ध्याङ्गगायत्रीमन्त्रजपेन गायत्रीमन्त्रप्रतिपाद्यः\nश्रीभारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकश्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this Gayatri japa, part of the morning sandhya, may Sri Lakshminarayana called Savitri, the one the Gayatri speaks of, who dwells in Mukhyaprana the beloved of Bharati, be pleased; being well pleased, may he grant boons. May it be an offering to Sri Krishna.',
            kn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಈ ಗಾಯತ್ರೀಜಪದಿಂದ, ಗಾಯತ್ರೀಮಂತ್ರಪ್ರತಿಪಾದ್ಯನಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ, ಸುಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'अनेन माध्याह्नसन्ध्याङ्गगायत्रीमन्त्रजपेन गायत्रीमन्त्रप्रतिपाद्यः\nश्रीभारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकश्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this Gayatri japa, part of the midday sandhya, may Sri Lakshminarayana called Savitri, the one the Gayatri speaks of, who dwells in Mukhyaprana, be pleased and grant boons. May it be an offering to Sri Krishna.',
            kn: 'ಮಾಧ್ಯಾಹ್ನ ಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಈ ಗಾಯತ್ರೀಜಪದಿಂದ, ಗಾಯತ್ರೀಮಂತ್ರಪ್ರತಿಪಾದ್ಯನಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'अनेन सायंसन्ध्याङ्गगायत्रीमन्त्रजपेन गायत्रीमन्त्रप्रतिपाद्यः\nश्रीभारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकश्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this Gayatri japa, part of the evening sandhya, may Sri Lakshminarayana called Savitri, the one the Gayatri speaks of, who dwells in Mukhyaprana, be pleased and grant boons. May it be an offering to Sri Krishna.',
            kn: 'ಸಾಯಂಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಈ ಗಾಯತ್ರೀಜಪದಿಂದ, ಗಾಯತ್ರೀಮಂತ್ರಪ್ರತಿಪಾದ್ಯನಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
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
      title: 'गायत्र्युद्वासनम्',
      titleEn: 'Gayatri udvasana (farewell)',
      note: 'After japa do one pranayama and stand up. With folded hands — touching the ground at the first verse (Kanchi manual) — bid farewell to the Gayatri. Then continue with the upasthana.',
      noteKn: 'ಜಪದ ನಂತರ ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಎದ್ದು ನಿಲ್ಲಿ. ಕೈಮುಗಿದು — ಮೊದಲ ಶ್ಲೋಕಕ್ಕೆ ನೆಲ ಮುಟ್ಟಿ (ಕಂಚಿ ಪುಸ್ತಕ) — ಗಾಯತ್ರಿಯನ್ನು ಬೀಳ್ಕೊಡಿ. ನಂತರ ಉಪಸ್ಥಾನ ಮಾಡಿ.',
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
          text: 'उत्तमे इत्यनुवाकस्य वामदेव ऋषिः । अनुष्टुप् छन्दः ।\nगायत्री देवता । गायत्र्युद्वासने विनियोगः ॥',
          meaning: {
            en: 'Of the anuvaka “uttame” the seer is Vamadeva, the metre anushtubh, the deity Gayatri; it is applied in bidding farewell to the Gayatri.',
            kn: '"ಉತ್ತಮೇ" ಅನುವಾಕಕ್ಕೆ ವಾಮದೇವ ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ಗಾಯತ್ರೀ ದೇವತೆ; ಗಾಯತ್ರೀ ಉದ್ವಾಸನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'उत्तमे शिखरे जाते भूम्यां पर्वतमूर्धनि ।\nब्राह्मणेभ्योऽभ्यनुज्ञाता गच्छ देवि यथासुखम् ॥',
          meaning: {
            en: 'O Goddess, born on the highest peak, on the mountain summit upon the earth: with the leave of the brahmanas, go as you please.',
            kn: 'ಭೂಮಿಯ ಮೇಲಿನ ಪರ್ವತದ ಉನ್ನತ ಶಿಖರದಲ್ಲಿ ಜನಿಸಿದ ದೇವಿಯೇ, ಬ್ರಾಹ್ಮಣರ ಅನುಮತಿಯೊಂದಿಗೆ ನಿನಗೆ ಸುಖವಾದಂತೆ ತೆರಳು.',
          },
        },
        {
          text: 'स्तुतो मया वरदा वेदमाता प्रचोदयन्ती पवने द्विजाता ।\nआयुः पृथिव्यां द्रविणं ब्रह्मवर्चसं मह्यं दत्त्वा प्रजातुं ब्रह्मलोकम् ॥',
          meaning: {
            en: 'Praised by me is the boon-giving Mother of the Vedas, who inspires, who dwells in the purifying air, who gives the second birth. Having given me long life on earth, wealth and the radiance of Vedic learning, may she go to the world of Brahman.',
            kn: 'ನನ್ನಿಂದ ಸ್ತುತಿಸಲ್ಪಟ್ಟ, ವರಕೊಡುವ, ಪ್ರೇರೇಪಿಸುವ, ಪವಿತ್ರ ವಾಯುವಿನಲ್ಲಿರುವ, ದ್ವಿಜತ್ವವನ್ನು ಕೊಡುವ ವೇದಮಾತೆಯು ನನಗೆ ಭೂಮಿಯಲ್ಲಿ ಆಯುಸ್ಸು, ಸಂಪತ್ತು, ಬ್ರಹ್ಮವರ್ಚಸ್ಸುಗಳನ್ನು ಕೊಟ್ಟು ಬ್ರಹ್ಮಲೋಕಕ್ಕೆ ತೆರಳಲಿ.',
          },
        },
      ],
    },
    {
      title: 'सूर्योपस्थानम्',
      titleEn: 'Suryopasthana (worship of the Sun, standing)',
      note: 'Morning: stand facing east (towards the rising Sun) with folded hands and recite the three riks to Mitra (Taittiriya Samhita 3.4.11). Then say नमो ब्रह्मणे… and turn round three times clockwise where you stand. Think of Narayana within the Sun as the one being praised.',
      noteKn: 'ಬೆಳಗ್ಗೆ: ಉದಯಿಸುವ ಸೂರ್ಯನ ಕಡೆಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತು ಮಿತ್ರನ ಮೂರು ಋಕ್ಕುಗಳನ್ನು (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೧೧) ಹೇಳಿ. ನಂತರ “ನಮೋ ಬ್ರಹ್ಮಣೇ…” ಹೇಳಿ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ. ಸ್ತುತಿಸಲ್ಪಡುವವನು ಸೂರ್ಯಾಂತರ್ಯಾಮಿ ನಾರಾಯಣನೆಂದು ಚಿಂತಿಸಿ.',
      when: { tradition: ['madhva'], time: ['morning'] },
      verses: [
        {
          text: 'मित्रस्य चर्षणीधृतः श्रवो देवस्य सानसिम् ।\nसत्यं चित्रश्रवस्तमम् ॥',
          meaning: {
            en: 'We praise the glory of the god Mitra, upholder of all people: a glory that is true, bountiful and most wonderfully renowned.',
            kn: 'ಎಲ್ಲಾ ಜನರನ್ನು ಪೋಷಿಸುವ ಮಿತ್ರದೇವನ ಕೀರ್ತಿಯನ್ನು ಸ್ತುತಿಸುತ್ತೇವೆ; ಅದು ಸತ್ಯವಾದುದು, ಫಲವನ್ನು ಕೊಡುವಂಥದ್ದು, ಅತ್ಯಂತ ಅದ್ಭುತವಾಗಿ ಪ್ರಸಿದ್ಧವಾದುದು.',
          },
        },
        {
          text: 'मित्रो जनान् यातयति प्रजानन् मित्रो दाधार पृथिवीमुत द्याम् ।\nमित्रः कृष्टीरनिमिषाभि चष्टे सत्याय हव्यं घृतवद्विधेम ॥',
          meaning: {
            en: 'Mitra, knowing all, sets people to their work; Mitra upholds the earth and the sky; Mitra watches over all beings without closing his eyes. To him, the true one, let us offer oblations rich with ghee.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಮಿತ್ರನು ಜನರನ್ನು ಅವರವರ ಕಾರ್ಯಗಳಿಗೆ ಪ್ರೇರಿಸುತ್ತಾನೆ; ಮಿತ್ರನು ಭೂಮಿಯನ್ನೂ ಆಕಾಶವನ್ನೂ ಧರಿಸಿದ್ದಾನೆ; ಮಿತ್ರನು ರೆಪ್ಪೆ ಮುಚ್ಚದೆ ಎಲ್ಲಾ ಜೀವಿಗಳನ್ನು ನೋಡುತ್ತಾನೆ. ಸತ್ಯಸ್ವರೂಪನಾದ ಅವನಿಗೆ ತುಪ್ಪದಿಂದ ಕೂಡಿದ ಹವಿಸ್ಸನ್ನು ಅರ್ಪಿಸೋಣ.',
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
          text: 'नमो ब्रह्मणे नमो अस्त्वग्नये नमः पृथिव्यै नम ओषधीभ्यः ।\nनमो वाचे नमो वाचस्पतये नमो विष्णवे महते करोमि ॥',
          meaning: {
            en: 'Salutation to Brahman, salutation to Agni, to the Earth and to the plants; salutation to Speech and to the lord of Speech; I offer salutation to the great Vishnu.',
            kn: 'ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ, ಅಗ್ನಿಗೆ ನಮಸ್ಕಾರ, ಭೂಮಿಗೂ ಸಸ್ಯಗಳಿಗೂ ನಮಸ್ಕಾರ; ವಾಕ್ಕಿಗೂ ವಾಚಸ್ಪತಿಗೂ ನಮಸ್ಕಾರ; ಮಹಾನ್ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सूर्योपस्थानम्',
      titleEn: 'Suryopasthana (worship of the Sun, standing)',
      note: 'Midday: stand facing the Sun (north or east) with folded hands. At पश्येम शरदः शतम्… look at the Sun through the gap made by the curled fingers of both hands (learn this from your elders). Madhvas add हंसः शुचिषत्…. Then turn round three times clockwise where you stand. Think of Narayana within the Sun as the one being praised.',
      noteKn: 'ಮಧ್ಯಾಹ್ನ: ಸೂರ್ಯನ ಕಡೆಗೆ (ಉತ್ತರ ಅಥವಾ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ) ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. “ಪಶ್ಯೇಮ ಶರದಃ ಶತಂ…” ಎನ್ನುವಾಗ ಎರಡೂ ಕೈಗಳ ಬೆರಳುಗಳನ್ನು ಮಡಚಿ ಮಾಡಿದ ಸಂದಿಯ ಮೂಲಕ ಸೂರ್ಯನನ್ನು ನೋಡಿ (ಹಿರಿಯರಿಂದ ಕಲಿಯಿರಿ). ಮಾಧ್ವರು “ಹಂಸಃ ಶುಚಿಷತ್…” ಸೇರಿಸುತ್ತಾರೆ. ನಂತರ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ. ಸ್ತುತಿಸಲ್ಪಡುವವನು ಸೂರ್ಯಾಂತರ್ಯಾಮಿ ನಾರಾಯಣನೆಂದು ಚಿಂತಿಸಿ.',
      when: { tradition: ['madhva'], time: ['midday'] },
      verses: [
        {
          text: 'आसत्येन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवना विपश्यन् ॥',
          meaning: {
            en: 'Moving through the region of light, laying to rest both the immortal and the mortal, the god Savitri comes in his golden chariot, beholding all the worlds.',
            kn: 'ಪ್ರಕಾಶಮಯ ಲೋಕದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ಅಮರರನ್ನೂ ಮರ್ತ್ಯರನ್ನೂ ಅವರವರ ಸ್ಥಾನದಲ್ಲಿ ನೆಲೆಗೊಳಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಎಲ್ಲಾ ಲೋಕಗಳನ್ನು ನೋಡುತ್ತಾ ಚಿನ್ನದ ರಥದಲ್ಲಿ ಬರುತ್ತಾನೆ.',
          },
        },
        {
          text: 'उद्वयं तमसस्परि पश्यन्तो ज्योतिरुत्तरम् ।\nदेवं देवत्रा सूर्यमगन्म ज्योतिरुत्तमम् ॥',
          meaning: {
            en: 'Rising above the darkness and beholding the higher light, we have come to the Sun, god among the gods, the highest light.',
            kn: 'ಕತ್ತಲೆಯನ್ನು ದಾಟಿ ಮೇಲಿನ ಬೆಳಕನ್ನು ನೋಡುತ್ತಾ, ದೇವತೆಗಳಲ್ಲಿ ದೇವನಾದ, ಉತ್ತಮ ಜ್ಯೋತಿಯಾದ ಸೂರ್ಯನನ್ನು ನಾವು ತಲುಪಿದ್ದೇವೆ.',
          },
        },
        {
          text: 'उदु त्यं जातवेदसं देवं वहन्ति केतवः ।\nदृशे विश्वाय सूर्यम् ॥',
          meaning: {
            en: 'His rays bear aloft the god Surya, knower of all that is born, so that all may see him.',
            kn: 'ಹುಟ್ಟಿದ ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಸೂರ್ಯದೇವನನ್ನು ಎಲ್ಲರೂ ಕಾಣುವಂತೆ ಅವನ ಕಿರಣಗಳು ಮೇಲಕ್ಕೆ ಹೊತ್ತೊಯ್ಯುತ್ತವೆ.',
          },
        },
        {
          text: 'चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः ।\nआप्रा द्यावापृथिवी अन्तरिक्षं सूर्य आत्मा जगतस्तस्थुषश्च ॥',
          meaning: {
            en: 'The wondrous face of the gods has risen, the eye of Mitra, Varuna and Agni. He has filled heaven, earth and the sky between; Surya is the self of all that moves and all that stands still.',
            kn: 'ದೇವತೆಗಳ ಅದ್ಭುತ ಮುಖವೂ ಮಿತ್ರ, ವರುಣ, ಅಗ್ನಿಗಳ ಕಣ್ಣೂ ಆದ ಸೂರ್ಯನು ಉದಯಿಸಿದ್ದಾನೆ. ಅವನು ಸ್ವರ್ಗ, ಭೂಮಿ, ಅಂತರಿಕ್ಷಗಳನ್ನು ತುಂಬಿದ್ದಾನೆ; ಚರಾಚರ ಜಗತ್ತಿನ ಆತ್ಮ ಸೂರ್ಯನೇ.',
          },
        },
        {
          text: 'तच्चक्षुर्देवहितं पुरस्ताच्छुक्रमुच्चरत् ।\nपश्येम शरदः शतं जीवेम शरदः शतं\nनन्दाम शरदः शतं मोदाम शरदः शतं\nभवाम शरदः शतं शृणवाम शरदः शतं\nप्रब्रवाम शरदः शतमजीतास्स्याम शरदः शतं\nज्योक्च सूर्यं दृशे ॥',
          meaning: {
            en: 'That bright eye, dear to the gods, rises in the east. May we see for a hundred autumns, live a hundred autumns, rejoice, be glad, flourish, hear and speak for a hundred autumns, and remain unconquered for a hundred autumns; and long may we behold the Sun.',
            kn: 'ದೇವತೆಗಳಿಗೆ ಹಿತವಾದ ಆ ಉಜ್ವಲ ಕಣ್ಣು ಪೂರ್ವದಲ್ಲಿ ಉದಯಿಸುತ್ತಿದೆ. ನಾವು ನೂರು ವರ್ಷ ನೋಡೋಣ, ನೂರು ವರ್ಷ ಬಾಳೋಣ, ನೂರು ವರ್ಷ ಸಂತೋಷಪಡೋಣ, ಆನಂದಿಸೋಣ, ಸಮೃದ್ಧರಾಗೋಣ, ಕೇಳೋಣ, ಮಾತನಾಡೋಣ, ನೂರು ವರ್ಷ ಸೋಲದವರಾಗಿರೋಣ; ಬಹುಕಾಲ ಸೂರ್ಯನನ್ನು ಕಾಣೋಣ.',
          },
        },
        {
          text: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।\nनृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतं बृहत् ॥',
          meaning: {
            en: 'The Swan in the bright heaven, the Vasu in the sky, the priest at the altar, the guest in the house, dwelling in men, in the best, in truth and in the heavens, born of waters, rays, truth and mountain: he is the great Truth.',
            kn: 'ಪ್ರಕಾಶಮಯ ಸ್ವರ್ಗದಲ್ಲಿರುವ ಹಂಸ, ಅಂತರಿಕ್ಷದ ವಸು, ವೇದಿಯ ಹೋತೃ, ಮನೆಯ ಅತಿಥಿ; ಮನುಷ್ಯರಲ್ಲಿ, ಶ್ರೇಷ್ಠರಲ್ಲಿ, ಸತ್ಯದಲ್ಲಿ, ಆಕಾಶದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಜಲ, ಕಿರಣ, ಸತ್ಯ, ಪರ್ವತಗಳಿಂದ ಹುಟ್ಟಿದವನು — ಅವನೇ ಮಹಾ ಸತ್ಯ.',
          },
        },
      ],
    },
    {
      title: 'सूर्योपस्थानम्',
      titleEn: 'Suryopasthana (worship of the Sun, standing)',
      note: 'Evening: stand facing west (towards the setting Sun) with folded hands and recite the five riks to Varuna. Then turn round three times clockwise where you stand. Think of Narayana within the Sun as the one being praised.',
      noteKn: 'ಸಂಜೆ: ಅಸ್ತಮಿಸುವ ಸೂರ್ಯನ ಕಡೆಗೆ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತು ವರುಣನ ಐದು ಋಕ್ಕುಗಳನ್ನು ಹೇಳಿ. ನಂತರ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ. ಸ್ತುತಿಸಲ್ಪಡುವವನು ಸೂರ್ಯಾಂತರ್ಯಾಮಿ ನಾರಾಯಣನೆಂದು ಚಿಂತಿಸಿ.',
      when: { tradition: ['madhva'], time: ['evening'] },
      verses: [
        {
          text: 'इमं मे वरुण श्रुधी हवमद्या च मृडय ।\nत्वामवस्युरा चके ॥',
          meaning: {
            en: 'O Varuna, hear this call of mine and be gracious to me today; seeking your protection, I call upon you.',
            kn: 'ಓ ವರುಣದೇವ, ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳು, ಇಂದು ನನ್ನ ಮೇಲೆ ಕರುಣೆ ತೋರು. ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬಯಸಿ ನಿನ್ನನ್ನು ಪ್ರಾರ್ಥಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेडमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
          meaning: {
            en: 'Praising you with this hymn, I ask of you what the worshipper seeks with his offerings. Without anger, O Varuna, be attentive to us here; O widely praised one, do not take away our life.',
            kn: 'ಸ್ತೋತ್ರದಿಂದ ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತಾ, ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳ ಮೂಲಕ ಬಯಸುವುದನ್ನೇ ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ. ಓ ವರುಣ, ಕೋಪಗೊಳ್ಳದೆ ಇಲ್ಲಿ ನಮ್ಮ ಪ್ರಾರ್ಥನೆಯನ್ನು ಗಮನಿಸು; ಎಲ್ಲರಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವವನೇ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಬೇಡ.',
          },
        },
        {
          text: 'यच्चिद्धि ते विशो यथा प्र देव वरुण व्रतम् ।\nमिनीमसि द्यविद्यवि ॥',
          meaning: {
            en: 'O god Varuna, whatever law of yours we, like ordinary folk, break day after day, (forgive us).',
            kn: 'ಓ ವರುಣದೇವ, ಸಾಮಾನ್ಯ ಜನರಂತೆ ನಾವು ದಿನದಿನವೂ ನಿನ್ನ ವ್ರತವನ್ನು ಯಾವುದಾದರೂ ರೀತಿಯಲ್ಲಿ ಮೀರುತ್ತೇವೆ; (ಅದನ್ನು ಕ್ಷಮಿಸು).',
          },
        },
        {
          text: 'यत्किञ्चेदं वरुण दैव्ये जनेऽभिद्रोहं मनुष्याश्चरामसि ।\nअचित्ती यत्तव धर्मा युयोपिम मा नस्तस्मादेनसो देव रीरिषः ॥',
          meaning: {
            en: 'Whatever wrong we humans do against the divine host, O Varuna, whatever of your laws we have broken through ignorance, do not harm us, O god, for that sin.',
            kn: 'ಓ ವರುಣ, ಮನುಷ್ಯರಾದ ನಾವು ದೇವತೆಗಳ ವಿಷಯದಲ್ಲಿ ಮಾಡುವ ಯಾವುದೇ ದ್ರೋಹಕ್ಕಾಗಿ, ಅಜ್ಞಾನದಿಂದ ನಿನ್ನ ಧರ್ಮಗಳನ್ನು ಮೀರಿದ್ದಕ್ಕಾಗಿ, ಆ ಪಾಪದಿಂದ ನಮ್ಮನ್ನು ಹಿಂಸಿಸಬೇಡ, ದೇವಾ.',
          },
        },
        {
          text: 'कितवासो यद्रिरिपुर्न दीवि यद्वा घा सत्यमुत यन्न विद्म ।\nसर्वा ता विष्य शिथिरेव देवाथा ते स्याम वरुण प्रियासः ॥',
          meaning: {
            en: 'Whatever sins have been laid on us falsely, as by cheats at dice, or committed by us knowingly or unknowingly: loosen them all like slack bonds, O god, and may we then be dear to you, O Varuna.',
            kn: 'ಜೂಜುಕೋರರಂತೆ ಮೋಸದಿಂದ ನಮ್ಮ ಮೇಲೆ ಹೊರಿಸಿದ ದೋಷಗಳು, ತಿಳಿದೋ ತಿಳಿಯದೆಯೋ ನಾವು ಮಾಡಿದ ಪಾಪಗಳು — ಇವೆಲ್ಲವನ್ನೂ ಸಡಿಲವಾದ ಬಂಧನಗಳಂತೆ ಬಿಡಿಸು, ದೇವಾ; ಅನಂತರ ನಾವು ನಿನಗೆ ಪ್ರಿಯರಾಗೋಣ, ಓ ವರುಣ.',
          },
        },
      ],
    },
    {
      title: 'सूर्योपस्थानम्',
      titleEn: 'Suryopasthana (worship of the Sun, standing)',
      note: 'Morning: stand facing east (towards the rising Sun) with folded hands and recite the three riks to Mitra (Taittiriya Samhita 3.4.11).',
      noteKn: 'ಬೆಳಗ್ಗೆ: ಉದಯಿಸುವ ಸೂರ್ಯನ ಕಡೆಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತು ಮಿತ್ರನ ಮೂರು ಋಕ್ಕುಗಳನ್ನು (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೧೧) ಹೇಳಿ.',
      when: { tradition: ['smarta'], time: ['morning'] },
      verses: [
        {
          text: 'मित्रस्य चर्षणीधृतः श्रवो देवस्य सानसिम् ।\nसत्यं चित्रश्रवस्तमम् ॥',
          meaning: {
            en: 'We praise the glory of the god Mitra, upholder of all people: a glory that is true, bountiful and most wonderfully renowned.',
            kn: 'ಎಲ್ಲಾ ಜನರನ್ನು ಪೋಷಿಸುವ ಮಿತ್ರದೇವನ ಕೀರ್ತಿಯನ್ನು ಸ್ತುತಿಸುತ್ತೇವೆ; ಅದು ಸತ್ಯವಾದುದು, ಫಲವನ್ನು ಕೊಡುವಂಥದ್ದು, ಅತ್ಯಂತ ಅದ್ಭುತವಾಗಿ ಪ್ರಸಿದ್ಧವಾದುದು.',
          },
        },
        {
          text: 'मित्रो जनान् यातयति प्रजानन् मित्रो दाधार पृथिवीमुत द्याम् ।\nमित्रः कृष्टीरनिमिषाभि चष्टे सत्याय हव्यं घृतवद्विधेम ॥',
          meaning: {
            en: 'Mitra, knowing all, sets people to their work; Mitra upholds the earth and the sky; Mitra watches over all beings without closing his eyes. To him, the true one, let us offer oblations rich with ghee.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಮಿತ್ರನು ಜನರನ್ನು ಅವರವರ ಕಾರ್ಯಗಳಿಗೆ ಪ್ರೇರಿಸುತ್ತಾನೆ; ಮಿತ್ರನು ಭೂಮಿಯನ್ನೂ ಆಕಾಶವನ್ನೂ ಧರಿಸಿದ್ದಾನೆ; ಮಿತ್ರನು ರೆಪ್ಪೆ ಮುಚ್ಚದೆ ಎಲ್ಲಾ ಜೀವಿಗಳನ್ನು ನೋಡುತ್ತಾನೆ. ಸತ್ಯಸ್ವರೂಪನಾದ ಅವನಿಗೆ ತುಪ್ಪದಿಂದ ಕೂಡಿದ ಹವಿಸ್ಸನ್ನು ಅರ್ಪಿಸೋಣ.',
          },
        },
        {
          text: 'प्र स मित्र मर्तो अस्तु प्रयस्वान् यस्त आदित्य शिक्षति व्रतेन ।\nन हन्यते न जीयते त्वोतो नैनमंहो अश्नोत्यन्तितो न दूरात् ॥',
          meaning: {
            en: 'O Mitra, O Aditya, may that mortal prosper who serves you by keeping your law. Protected by you, he is neither slain nor overcome; no distress reaches him, from near or from afar.',
            kn: 'ಓ ಮಿತ್ರ, ಓ ಆದಿತ್ಯ, ನಿನ್ನ ವ್ರತವನ್ನು ಪಾಲಿಸುತ್ತಾ ನಿನ್ನನ್ನು ಸೇವಿಸುವ ಮನುಷ್ಯನು ಸಮೃದ್ಧನಾಗಲಿ. ನಿನ್ನಿಂದ ರಕ್ಷಿತನಾದ ಅವನು ಕೊಲ್ಲಲ್ಪಡುವುದಿಲ್ಲ, ಸೋಲುವುದಿಲ್ಲ; ಹತ್ತಿರದಿಂದಾಗಲೀ ದೂರದಿಂದಾಗಲೀ ಯಾವ ಕಷ್ಟವೂ ಅವನನ್ನು ತಲುಪುವುದಿಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'सूर्योपस्थानम्',
      titleEn: 'Suryopasthana (worship of the Sun, standing)',
      note: 'Midday: stand facing the Sun (north or east) with folded hands. At पश्येम शरदः शतम्… look at the Sun through the gap made by the curled fingers of both hands (learn this from your elders). Then, with folded hands, add य उदगान्महतोऽर्णवात्….',
      noteKn: 'ಮಧ್ಯಾಹ್ನ: ಸೂರ್ಯನ ಕಡೆಗೆ (ಉತ್ತರ ಅಥವಾ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ) ಕೈಮುಗಿದು ನಿಂತುಕೊಳ್ಳಿ. “ಪಶ್ಯೇಮ ಶರದಃ ಶತಂ…” ಎನ್ನುವಾಗ ಎರಡೂ ಕೈಗಳ ಬೆರಳುಗಳನ್ನು ಮಡಚಿ ಮಾಡಿದ ಸಂದಿಯ ಮೂಲಕ ಸೂರ್ಯನನ್ನು ನೋಡಿ (ಹಿರಿಯರಿಂದ ಕಲಿಯಿರಿ). ನಂತರ ಕೈಮುಗಿದು “ಯ ಉದಗಾನ್ಮಹತೋಽರ್ಣವಾತ್…” ಸೇರಿಸಿ.',
      when: { tradition: ['smarta'], time: ['midday'] },
      verses: [
        {
          text: 'आसत्येन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवना विपश्यन् ॥',
          meaning: {
            en: 'Moving through the region of light, laying to rest both the immortal and the mortal, the god Savitri comes in his golden chariot, beholding all the worlds.',
            kn: 'ಪ್ರಕಾಶಮಯ ಲೋಕದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ಅಮರರನ್ನೂ ಮರ್ತ್ಯರನ್ನೂ ಅವರವರ ಸ್ಥಾನದಲ್ಲಿ ನೆಲೆಗೊಳಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಎಲ್ಲಾ ಲೋಕಗಳನ್ನು ನೋಡುತ್ತಾ ಚಿನ್ನದ ರಥದಲ್ಲಿ ಬರುತ್ತಾನೆ.',
          },
        },
        {
          text: 'उद्वयं तमसस्परि पश्यन्तो ज्योतिरुत्तरम् ।\nदेवं देवत्रा सूर्यमगन्म ज्योतिरुत्तमम् ॥',
          meaning: {
            en: 'Rising above the darkness and beholding the higher light, we have come to the Sun, god among the gods, the highest light.',
            kn: 'ಕತ್ತಲೆಯನ್ನು ದಾಟಿ ಮೇಲಿನ ಬೆಳಕನ್ನು ನೋಡುತ್ತಾ, ದೇವತೆಗಳಲ್ಲಿ ದೇವನಾದ, ಉತ್ತಮ ಜ್ಯೋತಿಯಾದ ಸೂರ್ಯನನ್ನು ನಾವು ತಲುಪಿದ್ದೇವೆ.',
          },
        },
        {
          text: 'उदु त्यं जातवेदसं देवं वहन्ति केतवः ।\nदृशे विश्वाय सूर्यम् ॥',
          meaning: {
            en: 'His rays bear aloft the god Surya, knower of all that is born, so that all may see him.',
            kn: 'ಹುಟ್ಟಿದ ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಸೂರ್ಯದೇವನನ್ನು ಎಲ್ಲರೂ ಕಾಣುವಂತೆ ಅವನ ಕಿರಣಗಳು ಮೇಲಕ್ಕೆ ಹೊತ್ತೊಯ್ಯುತ್ತವೆ.',
          },
        },
        {
          text: 'चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः ।\nआप्रा द्यावापृथिवी अन्तरिक्षं सूर्य आत्मा जगतस्तस्थुषश्च ॥',
          meaning: {
            en: 'The wondrous face of the gods has risen, the eye of Mitra, Varuna and Agni. He has filled heaven, earth and the sky between; Surya is the self of all that moves and all that stands still.',
            kn: 'ದೇವತೆಗಳ ಅದ್ಭುತ ಮುಖವೂ ಮಿತ್ರ, ವರುಣ, ಅಗ್ನಿಗಳ ಕಣ್ಣೂ ಆದ ಸೂರ್ಯನು ಉದಯಿಸಿದ್ದಾನೆ. ಅವನು ಸ್ವರ್ಗ, ಭೂಮಿ, ಅಂತರಿಕ್ಷಗಳನ್ನು ತುಂಬಿದ್ದಾನೆ; ಚರಾಚರ ಜಗತ್ತಿನ ಆತ್ಮ ಸೂರ್ಯನೇ.',
          },
        },
        {
          text: 'तच्चक्षुर्देवहितं पुरस्ताच्छुक्रमुच्चरत् ।\nपश्येम शरदः शतं जीवेम शरदः शतं\nनन्दाम शरदः शतं मोदाम शरदः शतं\nभवाम शरदः शतं शृणवाम शरदः शतं\nप्रब्रवाम शरदः शतमजीतास्स्याम शरदः शतं\nज्योक्च सूर्यं दृशे ॥',
          meaning: {
            en: 'That bright eye, dear to the gods, rises in the east. May we see for a hundred autumns, live a hundred autumns, rejoice, be glad, flourish, hear and speak for a hundred autumns, and remain unconquered for a hundred autumns; and long may we behold the Sun.',
            kn: 'ದೇವತೆಗಳಿಗೆ ಹಿತವಾದ ಆ ಉಜ್ವಲ ಕಣ್ಣು ಪೂರ್ವದಲ್ಲಿ ಉದಯಿಸುತ್ತಿದೆ. ನಾವು ನೂರು ವರ್ಷ ನೋಡೋಣ, ನೂರು ವರ್ಷ ಬಾಳೋಣ, ನೂರು ವರ್ಷ ಸಂತೋಷಪಡೋಣ, ಆನಂದಿಸೋಣ, ಸಮೃದ್ಧರಾಗೋಣ, ಕೇಳೋಣ, ಮಾತನಾಡೋಣ, ನೂರು ವರ್ಷ ಸೋಲದವರಾಗಿರೋಣ; ಬಹುಕಾಲ ಸೂರ್ಯನನ್ನು ಕಾಣೋಣ.',
          },
        },
        {
          text: 'य उदगान्महतोऽर्णवाद्विभ्राजमानस्सरिरस्य मध्यात् ।\nस मा वृषभो लोहिताक्षस्सूर्यो विपश्चिन्मनसा पुनातु ॥',
          meaning: {
            en: 'He who has risen shining from the great ocean, from the midst of the waters: may that mighty, red-eyed, wise Surya purify me in mind.',
            kn: 'ಮಹಾಸಮುದ್ರದಿಂದ, ಜಲರಾಶಿಯ ಮಧ್ಯದಿಂದ ಪ್ರಕಾಶಿಸುತ್ತಾ ಉದಯಿಸಿದ, ಶ್ರೇಷ್ಠನೂ ಕೆಂಗಣ್ಣಿನವನೂ ಜ್ಞಾನಿಯೂ ಆದ ಸೂರ್ಯನು ನನ್ನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಪವಿತ್ರಗೊಳಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'सूर्योपस्थानम्',
      titleEn: 'Suryopasthana (worship of the Sun, standing)',
      note: 'Evening: stand facing west (towards the setting Sun) with folded hands and recite the five riks to Varuna.',
      noteKn: 'ಸಂಜೆ: ಅಸ್ತಮಿಸುವ ಸೂರ್ಯನ ಕಡೆಗೆ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕೈಮುಗಿದು ನಿಂತು ವರುಣನ ಐದು ಋಕ್ಕುಗಳನ್ನು ಹೇಳಿ.',
      when: { tradition: ['smarta'], time: ['evening'] },
      verses: [
        {
          text: 'इमं मे वरुण श्रुधी हवमद्या च मृडय ।\nत्वामवस्युरा चके ॥',
          meaning: {
            en: 'O Varuna, hear this call of mine and be gracious to me today; seeking your protection, I call upon you.',
            kn: 'ಓ ವರುಣದೇವ, ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳು, ಇಂದು ನನ್ನ ಮೇಲೆ ಕರುಣೆ ತೋರು. ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬಯಸಿ ನಿನ್ನನ್ನು ಪ್ರಾರ್ಥಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेडमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
          meaning: {
            en: 'Praising you with this hymn, I ask of you what the worshipper seeks with his offerings. Without anger, O Varuna, be attentive to us here; O widely praised one, do not take away our life.',
            kn: 'ಸ್ತೋತ್ರದಿಂದ ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತಾ, ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳ ಮೂಲಕ ಬಯಸುವುದನ್ನೇ ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ. ಓ ವರುಣ, ಕೋಪಗೊಳ್ಳದೆ ಇಲ್ಲಿ ನಮ್ಮ ಪ್ರಾರ್ಥನೆಯನ್ನು ಗಮನಿಸು; ಎಲ್ಲರಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವವನೇ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಬೇಡ.',
          },
        },
        {
          text: 'यच्चिद्धि ते विशो यथा प्र देव वरुण व्रतम् ।\nमिनीमसि द्यविद्यवि ॥',
          meaning: {
            en: 'O god Varuna, whatever law of yours we, like ordinary folk, break day after day, (forgive us).',
            kn: 'ಓ ವರುಣದೇವ, ಸಾಮಾನ್ಯ ಜನರಂತೆ ನಾವು ದಿನದಿನವೂ ನಿನ್ನ ವ್ರತವನ್ನು ಯಾವುದಾದರೂ ರೀತಿಯಲ್ಲಿ ಮೀರುತ್ತೇವೆ; (ಅದನ್ನು ಕ್ಷಮಿಸು).',
          },
        },
        {
          text: 'यत्किञ्चेदं वरुण दैव्ये जनेऽभिद्रोहं मनुष्याश्चरामसि ।\nअचित्ती यत्तव धर्मा युयोपिम मा नस्तस्मादेनसो देव रीरिषः ॥',
          meaning: {
            en: 'Whatever wrong we humans do against the divine host, O Varuna, whatever of your laws we have broken through ignorance, do not harm us, O god, for that sin.',
            kn: 'ಓ ವರುಣ, ಮನುಷ್ಯರಾದ ನಾವು ದೇವತೆಗಳ ವಿಷಯದಲ್ಲಿ ಮಾಡುವ ಯಾವುದೇ ದ್ರೋಹಕ್ಕಾಗಿ, ಅಜ್ಞಾನದಿಂದ ನಿನ್ನ ಧರ್ಮಗಳನ್ನು ಮೀರಿದ್ದಕ್ಕಾಗಿ, ಆ ಪಾಪದಿಂದ ನಮ್ಮನ್ನು ಹಿಂಸಿಸಬೇಡ, ದೇವಾ.',
          },
        },
        {
          text: 'कितवासो यद्रिरिपुर्न दीवि यद्वा घा सत्यमुत यन्न विद्म ।\nसर्वा ता विष्य शिथिरेव देवाथा ते स्याम वरुण प्रियासः ॥',
          meaning: {
            en: 'Whatever sins have been laid on us falsely, as by cheats at dice, or committed by us knowingly or unknowingly: loosen them all like slack bonds, O god, and may we then be dear to you, O Varuna.',
            kn: 'ಜೂಜುಕೋರರಂತೆ ಮೋಸದಿಂದ ನಮ್ಮ ಮೇಲೆ ಹೊರಿಸಿದ ದೋಷಗಳು, ತಿಳಿದೋ ತಿಳಿಯದೆಯೋ ನಾವು ಮಾಡಿದ ಪಾಪಗಳು — ಇವೆಲ್ಲವನ್ನೂ ಸಡಿಲವಾದ ಬಂಧನಗಳಂತೆ ಬಿಡಿಸು, ದೇವಾ; ಅನಂತರ ನಾವು ನಿನಗೆ ಪ್ರಿಯರಾಗೋಣ, ಓ ವರುಣ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Salutation to the directions',
      note: 'Still standing, turn to each direction as you name it and bow with folded hands (Taittiriya Aranyaka 2.20): east, south, west, north, then upwards, downwards and the space between. You are saluting the guardian deities of each direction with their consorts — Indra with Shachi in the east, Agni with Svaha in the south-east, Yama, Nirriti, Varuna, Vayu, Chandra and Kubera, Rudra and the others — and the form of the Lord each of them worships. Then salute the sages who dwell between the Ganga and the Yamuna.',
      noteKn: 'ನಿಂತುಕೊಂಡೇ ಹೆಸರಿಸಿದ ದಿಕ್ಕಿಗೆ ತಿರುಗಿ ಕೈಮುಗಿದು ನಮಸ್ಕರಿಸಿ (ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ ೨.೨೦): ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ನಂತರ ಮೇಲೆ, ಕೆಳಗೆ, ನಡುವಿನ ಆಕಾಶ. ಪ್ರತಿ ದಿಕ್ಕಿನ ಅಧಿಪತಿಗಳನ್ನು ಪತ್ನೀಸಮೇತರಾಗಿ — ಪೂರ್ವದಲ್ಲಿ ಶಚೀಸಹಿತ ಇಂದ್ರ, ಆಗ್ನೇಯದಲ್ಲಿ ಸ್ವಾಹಾಸಹಿತ ಅಗ್ನಿ, ಯಮ, ನಿರೃತಿ, ವರುಣ, ವಾಯು, ಚಂದ್ರ, ಕುಬೇರ, ರುದ್ರ ಮೊದಲಾದವರನ್ನು — ಮತ್ತು ಅವರು ಉಪಾಸಿಸುವ ಭಗವದ್ರೂಪವನ್ನು ನಮಸ್ಕರಿಸುತ್ತೀರಿ. ನಂತರ ಗಂಗಾ–ಯಮುನೆಯರ ನಡುವೆ ವಾಸಿಸುವ ಮುನಿಗಳಿಗೆ ನಮಸ್ಕರಿಸಿ.',
      when: { tradition: ['madhva'], time: ['morning', 'midday'] },
      verses: [
        {
          text: 'ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ॥',
          meaning: {
            en: 'Salutation to the eastern direction and to the deities who dwell in it; likewise to the south, the west, the north, the direction above, the direction below and the intermediate space, and to the deities who dwell in each.',
            kn: 'ಪೂರ್ವ ದಿಕ್ಕಿಗೂ ಅಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ; ಹಾಗೆಯೇ ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ಮೇಲಿನ, ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ ಮಧ್ಯದ ಅವಕಾಶಕ್ಕೂ ಅಲ್ಲಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'नमो गङ्गायमुनयोर्मध्ये ये वसन्ति ते मे प्रसन्नात्मानश्चिरं जीवितं वर्धयन्ति ।\nनमो गङ्गायमुनयोर्मुनिभ्यश्च नमो नमो गङ्गायमुनयोर्मुनिभ्यश्च नमः ॥',
          meaning: {
            en: 'Salutation to those who dwell between the Ganga and the Yamuna; may they, gracious in heart, lengthen my life. Salutation again and again to the sages of the Ganga and the Yamuna.',
            kn: 'ಗಂಗಾ-ಯಮುನೆಯರ ಮಧ್ಯೆ ವಾಸಿಸುವವರಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರಸನ್ನಮನಸ್ಕರಾದ ಅವರು ನನ್ನ ಆಯುಸ್ಸನ್ನು ವೃದ್ಧಿಸಲಿ. ಗಂಗಾ-ಯಮುನೆಯರ ಮುನಿಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Salutation to the directions',
      note: 'Evening: still standing, start from the west. Turn to each direction and bow with folded hands — west, north, east, south, then upwards, downwards and the space between — saying for each the line that names it below. You are saluting the guardian deities of each direction with their consorts and the form of the Lord they worship. Then salute the sages who dwell between the Ganga and the Yamuna.',
      noteKn: 'ಸಂಜೆ: ನಿಂತುಕೊಂಡೇ ಪಶ್ಚಿಮದಿಂದ ಆರಂಭಿಸಿ. ಪ್ರತಿ ದಿಕ್ಕಿಗೆ ತಿರುಗಿ ಕೈಮುಗಿದು ನಮಸ್ಕರಿಸಿ — ಪಶ್ಚಿಮ, ಉತ್ತರ, ಪೂರ್ವ, ದಕ್ಷಿಣ, ನಂತರ ಮೇಲೆ, ಕೆಳಗೆ, ನಡುವಿನ ಆಕಾಶ — ಕೆಳಗೆ ಆ ದಿಕ್ಕನ್ನು ಹೆಸರಿಸುವ ವಾಕ್ಯವನ್ನು ಹೇಳಿ. ದಿಕ್ಪಾಲಕರನ್ನು ಪತ್ನೀಸಮೇತರಾಗಿಯೂ ಅವರು ಉಪಾಸಿಸುವ ಭಗವದ್ರೂಪವನ್ನೂ ನಮಸ್ಕರಿಸುತ್ತೀರಿ. ನಂತರ ಗಂಗಾ–ಯಮುನೆಯರ ನಡುವೆ ವಾಸಿಸುವ ಮುನಿಗಳಿಗೆ ನಮಸ್ಕರಿಸಿ.',
      when: { tradition: ['madhva'], time: ['evening'] },
      verses: [
        {
          text: 'ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ॥',
          meaning: {
            en: 'Salutation to the eastern direction and to the deities who dwell in it; likewise to the south, the west, the north, the direction above, the direction below and the intermediate space, and to the deities who dwell in each.',
            kn: 'ಪೂರ್ವ ದಿಕ್ಕಿಗೂ ಅಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ; ಹಾಗೆಯೇ ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ಮೇಲಿನ, ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ ಮಧ್ಯದ ಅವಕಾಶಕ್ಕೂ ಅಲ್ಲಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'नमो गङ्गायमुनयोर्मध्ये ये वसन्ति ते मे प्रसन्नात्मानश्चिरं जीवितं वर्धयन्ति ।\nनमो गङ्गायमुनयोर्मुनिभ्यश्च नमो नमो गङ्गायमुनयोर्मुनिभ्यश्च नमः ॥',
          meaning: {
            en: 'Salutation to those who dwell between the Ganga and the Yamuna; may they, gracious in heart, lengthen my life. Salutation again and again to the sages of the Ganga and the Yamuna.',
            kn: 'ಗಂಗಾ-ಯಮುನೆಯರ ಮಧ್ಯೆ ವಾಸಿಸುವವರಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರಸನ್ನಮನಸ್ಕರಾದ ಅವರು ನನ್ನ ಆಯುಸ್ಸನ್ನು ವೃದ್ಧಿಸಲಿ. ಗಂಗಾ-ಯಮುನೆಯರ ಮುನಿಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Salutation to the directions',
      note: 'Standing, turn to each direction as you name it and bow with folded hands (morning and midday start from the east, evening from the west); for upwards and downwards point the folded hands up and down. Then, facing north, recite ऋतं सत्यम्… remembering the oneness of Hari and Hara.',
      noteKn: 'ನಿಂತುಕೊಂಡು ಹೆಸರಿಸಿದ ದಿಕ್ಕಿಗೆ ತಿರುಗಿ ಕೈಮುಗಿದು ನಮಸ್ಕರಿಸಿ (ಬೆಳಗ್ಗೆ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವದಿಂದ, ಸಂಜೆ ಪಶ್ಚಿಮದಿಂದ ಆರಂಭ); ಮೇಲೆ, ಕೆಳಗೆ ಎನ್ನುವಾಗ ಜೋಡಿಸಿದ ಕೈಗಳನ್ನು ಮೇಲಕ್ಕೂ ಕೆಳಕ್ಕೂ ತೋರಿಸಿ. ನಂತರ ಉತ್ತರಾಭಿಮುಖವಾಗಿ ಹರಿಹರರ ಏಕತ್ವವನ್ನು ಸ್ಮರಿಸುತ್ತಾ “ಋತಂ ಸತ್ಯಂ…” ಹೇಳಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'प्राच्यै दिशे नमः । दक्षिणायै दिशे नमः ।\nप्रतीच्यै दिशे नमः । उदीच्यै दिशे नमः ।\nऊर्ध्वाय नमः । अधराय नमः ।\nअन्तरिक्षाय नमः । भूम्यै नमः ।\nब्रह्मणे नमः । विष्णवे नमः । यमाय नमः ॥',
          meaning: {
            en: 'Salutations to the east, south, west and north; to the region above and below; to the sky and the earth; to Brahma and to Vishnu; and, facing south, to Yama.',
            kn: 'ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ ದಿಕ್ಕುಗಳಿಗೆ; ಮೇಲಿನ ಮತ್ತು ಕೆಳಗಿನ ಭಾಗಗಳಿಗೆ; ಅಂತರಿಕ್ಷಕ್ಕೂ ಭೂಮಿಗೂ; ಬ್ರಹ್ಮನಿಗೂ ವಿಷ್ಣುವಿಗೂ ನಮಸ್ಕಾರ; ದಕ್ಷಿಣಕ್ಕೆ ತಿರುಗಿ ಯಮನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'ऋतं सत्यं परं ब्रह्म पुरुषं कृष्णपिङ्गलम् ।\nऊर्ध्वरेतं विरूपाक्षं विश्वरूपाय वै नमो नमः ॥',
          meaning: {
            en: 'To him who is Order and Truth, the Supreme Brahman, the Person dark and tawny, of upward-flowing vigour, of uncommon eyes, whose form is the universe: salutations again and again.',
            kn: 'ಋತವೂ ಸತ್ಯವೂ ಪರಬ್ರಹ್ಮವೂ ಆದ, ಕಪ್ಪು-ಕಂದು ವರ್ಣದ ಪುರುಷನಾದ, ಊರ್ಧ್ವರೇತಸ್ಕನಾದ, ವಿಶಿಷ್ಟ ನೇತ್ರಗಳುಳ್ಳ, ವಿಶ್ವರೂಪನಾದ ಪರಮಾತ್ಮನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      note: 'Tamil Smarta manuals (Kanchi tradition) then add: facing south, the salutation to Yama; facing east, the prayer to the Narmada and to Astika for protection from snakes; and, meditating on the Sun, नमः सवित्रे…. Recite these if your family does.',
      noteKn: 'ತಮಿಳುನಾಡಿನ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳು (ಕಂಚಿ ಸಂಪ್ರದಾಯ) ಇದರ ನಂತರ ಹೀಗೆ ಸೇರಿಸುತ್ತವೆ: ದಕ್ಷಿಣಕ್ಕೆ ತಿರುಗಿ ಯಮನಿಗೆ ನಮಸ್ಕಾರ; ಪೂರ್ವಕ್ಕೆ ತಿರುಗಿ ಸರ್ಪಭಯ ನಿವಾರಣೆಗಾಗಿ ನರ್ಮದೆ ಮತ್ತು ಆಸ್ತೀಕರ ಪ್ರಾರ್ಥನೆ; ಸೂರ್ಯನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ “ನಮಃ ಸವಿತ್ರೇ…”. ಮನೆತನದಲ್ಲಿ ಪದ್ಧತಿಯಿದ್ದರೆ ಹೇಳಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'यमाय धर्मराजाय मृत्यवे चान्तकाय च ।\nवैवस्वताय कालाय सर्वभूतक्षयाय च ॥\nऔदुम्बराय दध्नाय नीलाय परमेष्ठिने ।\nवृकोदराय चित्राय चित्रगुप्ताय वै नमः ॥',
          meaning: {
            en: 'Salutations to Yama, the king of dharma — to Death, the Ender, the son of Vivasvan, Time, the destroyer of all beings; to Audumbara, Dadhna, Nila, Parameshthin, Vrikodara, Chitra and Chitragupta.',
            kn: 'ಧರ್ಮರಾಜನಾದ ಯಮನಿಗೆ — ಮೃತ್ಯು, ಅಂತಕ, ವೈವಸ್ವತ, ಕಾಲ, ಸರ್ವಭೂತಕ್ಷಯ ಎಂದು ಕರೆಯಲ್ಪಡುವವನಿಗೆ; ಔದುಂಬರ, ದಧ್ನ, ನೀಲ, ಪರಮೇಷ್ಠಿ, ವೃಕೋದರ, ಚಿತ್ರ, ಚಿತ್ರಗುಪ್ತರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'नर्मदायै नमः प्रातर्नर्मदायै नमो निशि ।\nनमोऽस्तु नर्मदे तुभ्यं त्राहि मां विषसर्पतः ॥\nअपसर्प सर्प भद्रं ते दूरं गच्छ महायशाः ।\nजनमेजययज्ञान्ते आस्तीकवचनं स्मरन् ॥\nजरत्कारोर्जरत्कार्वां समुत्पन्नो महायशाः ।\nआस्तीकः सत्यसन्धो मां पन्नगेभ्योऽभिरक्षतु ॥',
          meaning: {
            en: 'Salutations to the Narmada in the morning and at night; O Narmada, I bow to you — protect me from venomous snakes. Go away, O snake, peace be with you; go far, remembering the word of Astika at the end of Janamejaya’s sacrifice. May the famous Astika, true to his word, born of Jaratkaru and his wife Jaratkaru, protect me from serpents.',
            kn: 'ಬೆಳಗ್ಗೆಯೂ ರಾತ್ರಿಯೂ ನರ್ಮದೆಗೆ ನಮಸ್ಕಾರ; ಓ ನರ್ಮದೆ, ನಿನಗೆ ನಮಿಸುತ್ತೇನೆ — ವಿಷಸರ್ಪಗಳಿಂದ ನನ್ನನ್ನು ಕಾಪಾಡು. ಓ ಸರ್ಪವೇ, ನಿನಗೆ ಮಂಗಳವಾಗಲಿ; ಜನಮೇಜಯನ ಯಜ್ಞದ ಕೊನೆಯಲ್ಲಿ ಆಸ್ತೀಕನು ಹೇಳಿದ ಮಾತನ್ನು ನೆನೆದು ದೂರ ಹೋಗು. ಜರತ್ಕಾರು ದಂಪತಿಗಳಿಂದ ಹುಟ್ಟಿದ, ಸತ್ಯಸಂಧನಾದ ಯಶಸ್ವಿ ಆಸ್ತೀಕನು ಸರ್ಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        {
          text: 'नमः सवित्रे जगदेकचक्षुषे\nजगत्प्रसूतिस्थितिनाशहेतवे ।\nत्रयीमयाय त्रिगुणात्मधारिणे\nविरिञ्चिनारायणशङ्करात्मने ॥',
          meaning: {
            en: 'Salutations to Savitri, the one eye of the world, the cause of its birth, preservation and dissolution; made of the three Vedas, bearing the three gunas, whose self is Brahma, Narayana and Shankara.',
            kn: 'ಜಗತ್ತಿನ ಏಕೈಕ ಕಣ್ಣಾದ, ಜಗತ್ತಿನ ಸೃಷ್ಟಿ–ಸ್ಥಿತಿ–ಲಯಗಳಿಗೆ ಕಾರಣನಾದ, ತ್ರಯೀಮಯನಾದ, ತ್ರಿಗುಣಗಳನ್ನು ಧರಿಸಿದ, ಬ್ರಹ್ಮ–ನಾರಾಯಣ–ಶಂಕರ ಸ್ವರೂಪನಾದ ಸವಿತೃವಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्यादिदेवतानमस्कारः',
      titleEn: 'Salutations to Sandhya and the deities',
      note: 'Standing with folded hands, salute Sandhya and the other deities, the sages, teachers and parents. With कामोऽकार्षीत्… confess that desire and anger drove your wrongs. Then bow to Vasudeva and Sandhya, to Krishna as the friend of cows and brahmanas, take refuge in Durga, and finish with आकाशात्पतितं तोयम्…, offering all salutations to Keshava. Then make a full prostration (sashtanga namaskara).',
      noteKn: 'ಕೈಮುಗಿದು ನಿಂತು ಸಂಧ್ಯಾದೇವಿ ಮೊದಲಾದ ದೇವತೆಗಳಿಗೂ ಋಷಿಗಳಿಗೂ ಗುರುಗಳಿಗೂ ತಂದೆತಾಯಿಯರಿಗೂ ನಮಸ್ಕರಿಸಿ. “ಕಾಮೋಽಕಾರ್ಷೀತ್…” ಎಂದು ಕಾಮಕ್ರೋಧಗಳಿಂದಲೇ ತಪ್ಪುಗಳಾದವು ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳಿ. ನಂತರ ವಾಸುದೇವನಿಗೂ ಸಂಧ್ಯಾದೇವಿಗೂ, ಗೋಬ್ರಾಹ್ಮಣಹಿತನಾದ ಶ್ರೀಕೃಷ್ಣನಿಗೂ ನಮಸ್ಕರಿಸಿ, ದುರ್ಗೆಯಲ್ಲಿ ಶರಣು ಹೊಂದಿ, “ಆಕಾಶಾತ್ಪತಿತಂ ತೋಯಂ…” ಎಂದು ಎಲ್ಲ ನಮಸ್ಕಾರಗಳನ್ನೂ ಕೇಶವನಿಗೆ ಅರ್ಪಿಸಿ. ಆಮೇಲೆ ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕಾರ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'सन्ध्यायै नमः । सावित्र्यै नमः ।\nगायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमो नमः ॥',
          meaning: {
            en: 'Salutations to Sandhya, Savitri, Gayatri and Sarasvati, and again and again to all the deities.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ಗಾಯತ್ರೀ, ಸರಸ್ವತೀ ದೇವಿಯರಿಗೂ ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'देवीभ्यो नमः । ऋषिभ्यो नमः । गुरुभ्यो नमः ।\nमातृभ्यो नमः । पितृभ्यो नमः । आचार्येभ्यो नमः ॥',
          meaning: {
            en: 'Salutations to the goddesses, the sages, the gurus, the mothers, the fathers and the acharyas.',
            kn: 'ದೇವಿಯರಿಗೂ ಋಷಿಗಳಿಗೂ ಗುರುಗಳಿಗೂ ತಾಯಂದಿರಿಗೂ ಪಿತೃಗಳಿಗೂ ಆಚಾರ್ಯರಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'कामोऽकार्षीन्मन्युरकार्षीन्नमो नमः ॥',
          meaning: {
            en: 'It was desire that did it, it was anger that did it (not my true self): salutations again and again.',
            kn: 'ಆ ತಪ್ಪುಗಳನ್ನು ಮಾಡಿದ್ದು ಕಾಮ, ಮಾಡಿದ್ದು ಕ್ರೋಧ (ನನ್ನ ನಿಜಸ್ವರೂಪವಲ್ಲ); ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'पृथिव्यापस्तेजोवायुराकाशेभ्यो नमो नमः ।\nॐ नमो भगवते वासुदेवाय ॥',
          meaning: {
            en: 'Salutations again and again to earth, water, fire, air and space. Om, salutation to Lord Vasudeva.',
            kn: 'ಪೃಥ್ವಿ, ಜಲ, ತೇಜಸ್ಸು, ವಾಯು, ಆಕಾಶಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. ಓಂ, ಭಗವಾನ್ ವಾಸುದೇವನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'यां सदा सर्वभूतानि स्थावराणि चराणि च ।\nसायं प्रातर्नमस्यन्ति सा मा सन्ध्याभिरक्षतु ॥',
          meaning: {
            en: 'May Sandhya, to whom all beings, moving and unmoving, bow at dusk and at dawn, protect me.',
            kn: 'ಚರಾಚರಗಳಾದ ಎಲ್ಲಾ ಜೀವಿಗಳೂ ಸಾಯಂಕಾಲ-ಪ್ರಾತಃಕಾಲಗಳಲ್ಲಿ ಸದಾ ನಮಸ್ಕರಿಸುವ ಆ ಸಂಧ್ಯಾದೇವಿ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        {
          text: 'ब्रह्मण्यो देवकीपुत्रो ब्रह्मण्यो मधुसूदनः ।\nब्रह्मण्यः पुण्डरीकाक्षो ब्रह्मण्यो विष्णुरच्युतः ॥',
          meaning: {
            en: 'The son of Devaki is devoted to the Veda and its followers; so is Madhusudana, so is the lotus-eyed one, so is Vishnu, the unfailing.',
            kn: 'ದೇವಕೀಪುತ್ರನು ಬ್ರಹ್ಮಣ್ಯ (ವೇದಕ್ಕೂ ವೇದನಿಷ್ಠರಿಗೂ ಹಿತಕಾರಿ); ಮಧುಸೂದನನೂ, ಪುಂಡರೀಕಾಕ್ಷನೂ, ಅಚ್ಯುತನಾದ ವಿಷ್ಣುವೂ ಬ್ರಹ್ಮಣ್ಯರೇ.',
          },
        },
        {
          text: 'नमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च ।\nजगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥',
          meaning: {
            en: 'Salutations to the Lord devoted to the Veda, who cares for cows and brahmanas and for the good of the whole world; to Krishna, to Govinda, salutations again and again.',
            kn: 'ವೇದಪ್ರಿಯನಾದ ದೇವನಿಗೆ, ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಹಿತಕಾರಿಯಾದವನಿಗೆ, ಜಗತ್ತಿಗೆಲ್ಲ ಹಿತಕಾರಿಯಾದ ಶ್ರೀಕೃಷ್ಣನಿಗೆ, ಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'क्षीरेण स्नापिते देवि चन्दनेन विलेपिते ।\nबिल्वपत्रार्चिते देवि दुर्गेऽहं शरणं गतः ॥',
          meaning: {
            en: 'O Goddess bathed in milk and anointed with sandal paste, worshipped with bilva leaves: O Durga, I have come to you for refuge.',
            kn: 'ಹಾಲಿನಿಂದ ಅಭಿಷೇಕಗೊಂಡ, ಚಂದನದಿಂದ ಲೇಪಿತಳಾದ, ಬಿಲ್ವಪತ್ರಗಳಿಂದ ಪೂಜಿತಳಾದ ದುರ್ಗಾದೇವಿಯೇ, ನಿನ್ನಲ್ಲಿ ಶರಣು ಬಂದಿದ್ದೇನೆ.',
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
          text: 'सर्ववेदेषु यत्पुण्यं सर्वतीर्थेषु यत्फलम् ।\nतत्फलं समवाप्नोति स्तुत्वा देवं जनार्दनम् ॥',
          meaning: {
            en: 'Whatever merit lies in all the Vedas and whatever fruit in all the holy places, that fruit one gains by praising the Lord Janardana.',
            kn: 'ಎಲ್ಲಾ ವೇದಗಳಲ್ಲಿರುವ ಪುಣ್ಯವೂ ಎಲ್ಲಾ ತೀರ್ಥಗಳ ಫಲವೂ ಜನಾರ್ದನನನ್ನು ಸ್ತುತಿಸುವುದರಿಂದಲೇ ದೊರೆಯುತ್ತದೆ.',
          },
        },
        {
          text: 'नमोऽस्त्वनन्ताय सहस्रमूर्तये सहस्रपादाक्षिशिरोरुबाहवे ।\nसहस्रनाम्ने पुरुषाय शाश्वते सहस्रकोटियुगधारिणे नमः ॥',
          meaning: {
            en: 'Salutation to the Endless One of a thousand forms, with a thousand feet, eyes, heads, thighs and arms; to the eternal Person of a thousand names, who sustains thousands of crores of ages.',
            kn: 'ಸಾವಿರಾರು ರೂಪಗಳುಳ್ಳ, ಸಾವಿರಾರು ಪಾದ, ಕಣ್ಣು, ತಲೆ, ತೊಡೆ, ಭುಜಗಳುಳ್ಳ ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ; ಸಾವಿರ ನಾಮಗಳುಳ್ಳ, ಸಾವಿರ ಕೋಟಿ ಯುಗಗಳನ್ನು ಧರಿಸುವ ಶಾಶ್ವತ ಪುರುಷನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्यादिदेवतानमस्कारः',
      titleEn: 'Salutations to Sandhya and the deities',
      note: 'With folded hands salute Sandhya towards the east, Savitri towards the south, Gayatri towards the west and Sarasvati towards the north (Kanchi manual), then all the deities, and say कामोऽकार्षीत्…. Then bow to Krishna and Govinda, and finish with आकाशात्पतितं तोयम्….',
      noteKn: 'ಕೈಮುಗಿದು ಪೂರ್ವಕ್ಕೆ ಸಂಧ್ಯೆಗೆ, ದಕ್ಷಿಣಕ್ಕೆ ಸಾವಿತ್ರಿಗೆ, ಪಶ್ಚಿಮಕ್ಕೆ ಗಾಯತ್ರಿಗೆ, ಉತ್ತರಕ್ಕೆ ಸರಸ್ವತಿಗೆ (ಕಂಚಿ ಪುಸ್ತಕ), ನಂತರ ಎಲ್ಲ ದೇವತೆಗಳಿಗೆ ನಮಸ್ಕರಿಸಿ “ಕಾಮೋಽಕಾರ್ಷೀತ್…” ಹೇಳಿ. ಆಮೇಲೆ ಶ್ರೀಕೃಷ್ಣ–ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕರಿಸಿ “ಆಕಾಶಾತ್ಪತಿತಂ ತೋಯಂ…” ಎಂದು ಮುಗಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'सन्ध्यायै नमः । सावित्र्यै नमः ।\nगायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमो नमः ॥',
          meaning: {
            en: 'Salutations to Sandhya, Savitri, Gayatri and Sarasvati, and again and again to all the deities.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ಗಾಯತ್ರೀ, ಸರಸ್ವತೀ ದೇವಿಯರಿಗೂ ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'कामोऽकार्षीन्मन्युरकार्षीन्नमो नमः ॥',
          meaning: {
            en: 'It was desire that did it, it was anger that did it (not my true self): salutations again and again.',
            kn: 'ಆ ತಪ್ಪುಗಳನ್ನು ಮಾಡಿದ್ದು ಕಾಮ, ಮಾಡಿದ್ದು ಕ್ರೋಧ (ನನ್ನ ನಿಜಸ್ವರೂಪವಲ್ಲ); ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'नमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च ।\nजगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥',
          meaning: {
            en: 'Salutations to the Lord devoted to the Veda, who cares for cows and brahmanas and for the good of the whole world; to Krishna, to Govinda, salutations again and again.',
            kn: 'ವೇದಪ್ರಿಯನಾದ ದೇವನಿಗೆ, ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಹಿತಕಾರಿಯಾದವನಿಗೆ, ಜಗತ್ತಿಗೆಲ್ಲ ಹಿತಕಾರಿಯಾದ ಶ್ರೀಕೃಷ್ಣನಿಗೆ, ಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'शङ्खचक्रगदापाणे द्वारकानिलयाच्युत ।\nगोविन्द पुण्डरीकाक्ष रक्ष मां शरणागतम् ॥',
          meaning: {
            en: 'O Achyuta, dweller in Dvaraka, holding conch, discus and mace; O Govinda, lotus-eyed one, protect me, who have come to you for refuge.',
            kn: 'ಶಂಖ-ಚಕ್ರ-ಗದೆಗಳನ್ನು ಹಿಡಿದಿರುವ, ದ್ವಾರಕೆಯಲ್ಲಿ ನೆಲೆಸಿರುವ ಅಚ್ಯುತನೇ, ಗೋವಿಂದ, ಪುಂಡರೀಕಾಕ್ಷ, ನಿನ್ನಲ್ಲಿ ಶರಣು ಬಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸು.',
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
          text: 'सर्ववेदेषु यत्पुण्यं सर्वतीर्थेषु यत्फलम् ।\nतत्फलं समवाप्नोति स्तुत्वा देवं जनार्दनम् ॥',
          meaning: {
            en: 'Whatever merit lies in all the Vedas and whatever fruit in all the holy places, that fruit one gains by praising the Lord Janardana.',
            kn: 'ಎಲ್ಲಾ ವೇದಗಳಲ್ಲಿರುವ ಪುಣ್ಯವೂ ಎಲ್ಲಾ ತೀರ್ಥಗಳ ಫಲವೂ ಜನಾರ್ದನನನ್ನು ಸ್ತುತಿಸುವುದರಿಂದಲೇ ದೊರೆಯುತ್ತದೆ.',
          },
        },
        {
          text: 'नमोऽस्त्वनन्ताय सहस्रमूर्तये सहस्रपादाक्षिशिरोरुबाहवे ।\nसहस्रनाम्ने पुरुषाय शाश्वते सहस्रकोटियुगधारिणे नमः ॥',
          meaning: {
            en: 'Salutation to the Endless One of a thousand forms, with a thousand feet, eyes, heads, thighs and arms; to the eternal Person of a thousand names, who sustains thousands of crores of ages.',
            kn: 'ಸಾವಿರಾರು ರೂಪಗಳುಳ್ಳ, ಸಾವಿರಾರು ಪಾದ, ಕಣ್ಣು, ತಲೆ, ತೊಡೆ, ಭುಜಗಳುಳ್ಳ ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ; ಸಾವಿರ ನಾಮಗಳುಳ್ಳ, ಸಾವಿರ ಕೋಟಿ ಯುಗಗಳನ್ನು ಧರಿಸುವ ಶಾಶ್ವತ ಪುರುಷನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'गायत्र्युद्वासनम्',
      titleEn: 'Gayatri udvasana (farewell)',
      note: 'With folded hands bid farewell to the Gayatri: the Lord meditated upon in the heart remains there as you close the japa.',
      noteKn: 'ಕೈಮುಗಿದು ಗಾಯತ್ರಿಯನ್ನು ಬೀಳ್ಕೊಡಿ — ಹೃದಯದಲ್ಲಿ ಧ್ಯಾನಿಸಿದ ಭಗವಂತನು ಅಲ್ಲಿಯೇ ನೆಲೆಸಿರಲೆಂದು ಭಾವಿಸಿ ಜಪವನ್ನು ಮುಗಿಸಿ.',
      when: { tradition: ['madhva'] },
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
            en: 'O Goddess, born on the highest peak, on the mountain summit upon the earth: with the leave of the brahmanas, go as you please.',
            kn: 'ಭೂಮಿಯ ಮೇಲಿನ ಪರ್ವತದ ಉನ್ನತ ಶಿಖರದಲ್ಲಿ ಜನಿಸಿದ ದೇವಿಯೇ, ಬ್ರಾಹ್ಮಣರ ಅನುಮತಿಯೊಂದಿಗೆ ನಿನಗೆ ಸುಖವಾದಂತೆ ತೆರಳು.',
          },
        },
        {
          text: 'स्तुतो मया वरदा वेदमाता प्रचोदयन्ती पवने द्विजाता ।\nआयुः पृथिव्यां द्रविणं ब्रह्मवर्चसं मह्यं दत्त्वा प्रजातुं ब्रह्मलोकम् ॥',
          meaning: {
            en: 'Praised by me is the boon-giving Mother of the Vedas, who inspires, who dwells in the purifying air, who gives the second birth. Having given me long life on earth, wealth and the radiance of Vedic learning, may she go to the world of Brahman.',
            kn: 'ನನ್ನಿಂದ ಸ್ತುತಿಸಲ್ಪಟ್ಟ, ವರಕೊಡುವ, ಪ್ರೇರೇಪಿಸುವ, ಪವಿತ್ರ ವಾಯುವಿನಲ್ಲಿರುವ, ದ್ವಿಜತ್ವವನ್ನು ಕೊಡುವ ವೇದಮಾತೆಯು ನನಗೆ ಭೂಮಿಯಲ್ಲಿ ಆಯುಸ್ಸು, ಸಂಪತ್ತು, ಬ್ರಹ್ಮವರ್ಚಸ್ಸುಗಳನ್ನು ಕೊಟ್ಟು ಬ್ರಹ್ಮಲೋಕಕ್ಕೆ ತೆರಳಲಿ.',
          },
        },
      ],
    },
    {
      title: 'अभिवादनम्',
      titleEn: 'Abhivadana (formal salutation)',
      note: 'Recite the peace prayer and the blessing. Then hold the tip of the left ear with the tips of the right index and middle fingers and the right ear with the left hand (arms crossed), say your pravara, gotra, sutra, shakha and name, and bow, touching the feet (or the ground). Replace अमुक with your own details: the names of the three (or five) rishis of your pravara, your gotra and your name; Kshatriyas say वर्मा and Vaishyas गुप्तः in place of शर्मा. Taittiriyas normally say आपस्तम्बसूत्रः and यजुश्शाखाध्यायी; change these if your sutra differs (for example Bodhayana). If you do not know your pravara, ask your elders or purohita.',
      noteKn: 'ಶಾಂತಿಮಂತ್ರ ಮತ್ತು ಆಶೀರ್ವಾದ ವಾಕ್ಯ ಹೇಳಿ. ನಂತರ ಬಲಗೈಯ ತೋರು–ನಡುಬೆರಳ ತುದಿಯಿಂದ ಎಡಗಿವಿಯ ತುದಿಯನ್ನೂ ಎಡಗೈಯಿಂದ ಬಲಗಿವಿಯನ್ನೂ (ಕೈಗಳನ್ನು ಅಡ್ಡಹಾಕಿ) ಹಿಡಿದು ಪ್ರವರ, ಗೋತ್ರ, ಸೂತ್ರ, ಶಾಖೆ, ಹೆಸರು ಹೇಳಿ, ಪಾದಗಳನ್ನು (ಅಥವಾ ನೆಲವನ್ನು) ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಿ. “ಅಮುಕ” ಬದಲು ನಿಮ್ಮ ವಿವರ ಹೇಳಿ: ನಿಮ್ಮ ಪ್ರವರದ ಮೂರು (ಅಥವಾ ಐದು) ಋಷಿಗಳ ಹೆಸರು, ಗೋತ್ರ ಮತ್ತು ನಿಮ್ಮ ಹೆಸರು; ಕ್ಷತ್ರಿಯರು “ಶರ್ಮಾ” ಬದಲು “ವರ್ಮಾ”, ವೈಶ್ಯರು “ಗುಪ್ತಃ” ಎನ್ನುತ್ತಾರೆ. ತೈತ್ತಿರೀಯರು ಸಾಮಾನ್ಯವಾಗಿ “ಆಪಸ್ತಂಬಸೂತ್ರಃ”, “ಯಜುಶ್ಶಾಖಾಧ್ಯಾಯೀ” ಎನ್ನುತ್ತಾರೆ; ಸೂತ್ರ ಬೇರೆಯಾದರೆ (ಉದಾ: ಬೋಧಾಯನ) ಬದಲಿಸಿ. ಪ್ರವರ ತಿಳಿಯದಿದ್ದರೆ ಹಿರಿಯರನ್ನು ಅಥವಾ ಪುರೋಹಿತರನ್ನು ಕೇಳಿ.',
      when: { tradition: ['madhva'] },
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
          text: 'अमुक अमुक अमुक त्रयार्षेयप्रवरान्वित अमुकगोत्रः\nआपस्तम्बसूत्रः यजुश्शाखाध्यायी\nअमुकशर्मा अहं भो अभिवादये ॥',
          meaning: {
            en: 'I, so-and-so Sharma, of such-and-such gotra, with a pravara of three such rishis, of the Apastamba sutra, a student of the Yajurveda shakha, offer my respectful salutation.',
            kn: 'ಇಂತಹ ಮೂರು ಋಷಿಗಳ ಪ್ರವರವುಳ್ಳ, ಇಂತಹ ಗೋತ್ರದ, ಆಪಸ್ತಂಬಸೂತ್ರದ, ಯಜುಶ್ಶಾಖೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಇಂತಹ ಶರ್ಮನಾದ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'अभिवादनम्',
      titleEn: 'Abhivadana (formal salutation)',
      note: 'Cover or touch both ears with the palms (Kanchi manual), bow and recite your pravara, gotra, sutra, shakha and name; then prostrate, touching the ground. Replace अमुक with your own details: the names of the three (or five) rishis of your pravara, your gotra and your name; Kshatriyas say वर्मा and Vaishyas गुप्तः in place of शर्मा. Taittiriyas normally say आपस्तम्बसूत्रः and यजुश्शाखाध्यायी; change these if your sutra differs (for example Bodhayana). If you do not know your pravara, ask your elders or purohita.',
      noteKn: 'ಎರಡೂ ಅಂಗೈಗಳಿಂದ ಕಿವಿಗಳನ್ನು ಮುಟ್ಟಿ (ಕಂಚಿ ಪುಸ್ತಕ) ತಲೆಬಾಗಿ ಪ್ರವರ, ಗೋತ್ರ, ಸೂತ್ರ, ಶಾಖೆ, ಹೆಸರು ಹೇಳಿ; ನಂತರ ನೆಲ ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಿ. “ಅಮುಕ” ಬದಲು ನಿಮ್ಮ ವಿವರ ಹೇಳಿ: ನಿಮ್ಮ ಪ್ರವರದ ಮೂರು (ಅಥವಾ ಐದು) ಋಷಿಗಳ ಹೆಸರು, ಗೋತ್ರ ಮತ್ತು ನಿಮ್ಮ ಹೆಸರು; ಕ್ಷತ್ರಿಯರು “ಶರ್ಮಾ” ಬದಲು “ವರ್ಮಾ”, ವೈಶ್ಯರು “ಗುಪ್ತಃ” ಎನ್ನುತ್ತಾರೆ. ತೈತ್ತಿರೀಯರು ಸಾಮಾನ್ಯವಾಗಿ “ಆಪಸ್ತಂಬಸೂತ್ರಃ”, “ಯಜುಶ್ಶಾಖಾಧ್ಯಾಯೀ” ಎನ್ನುತ್ತಾರೆ; ಸೂತ್ರ ಬೇರೆಯಾದರೆ (ಉದಾ: ಬೋಧಾಯನ) ಬದಲಿಸಿ. ಪ್ರವರ ತಿಳಿಯದಿದ್ದರೆ ಹಿರಿಯರನ್ನು ಅಥವಾ ಪುರೋಹಿತರನ್ನು ಕೇಳಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'चतुस्सागरपर्यन्तं गोब्राह्मणेभ्यः शुभं भवतु ।\nअमुक अमुक अमुक त्रयार्षेयप्रवरान्वित अमुकगोत्रः\nआपस्तम्बसूत्रः यजुश्शाखाध्यायी\nअमुकशर्मा अहं भो अभिवादये ॥',
          meaning: {
            en: 'May there be welfare to cows and brahmanas as far as the four oceans. I, so-and-so Sharma, of such-and-such gotra, with a pravara of three such rishis, of the Apastamba sutra, a student of the Yajurveda shakha, offer my respectful salutation.',
            kn: 'ನಾಲ್ಕು ಸಮುದ್ರಗಳವರೆಗಿನ ಭೂಮಿಯಲ್ಲಿ ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಶುಭವಾಗಲಿ. ಇಂತಹ ಮೂರು ಋಷಿಗಳ ಪ್ರವರದಿಂದ ಕೂಡಿದ, ಇಂತಹ ಗೋತ್ರದ, ಆಪಸ್ತಂಬ ಸೂತ್ರದ, ಯಜುಶ್ಶಾಖೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಇಂತಹ ಹೆಸರಿನ ಶರ್ಮನಾದ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Samarpana (offering the whole rite)',
      note: 'Take water in the right hand and recite यस्य स्मृत्या… and मन्त्रहीनं…, then the offering for the time of day, and pour the water into the plate. Do achamana twice. To make good any fault in mantra, tone or syllable, make the resolve and say the three names Achyuta, Ananta, Govinda three times. Close with कायेन वाचा… (Madhva manuals read the second line बुद्ध्यात्मना वानुसृतस्वभावात्).',
      noteKn: 'ಬಲಗೈಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು “ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ…”, “ಮಂತ್ರಹೀನಂ…” ಹಾಗೂ ಆ ಕಾಲದ ಸಮರ್ಪಣ ವಾಕ್ಯ ಹೇಳಿ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. ಮಂತ್ರ, ಸ್ವರ, ವರ್ಣಗಳ ಲೋಪ ಪರಿಹಾರಕ್ಕಾಗಿ ಸಂಕಲ್ಪಿಸಿ ಅಚ್ಯುತ, ಅನಂತ, ಗೋವಿಂದ ನಾಮಗಳನ್ನು ಮೂರು ಬಾರಿ ಹೇಳಿ. “ಕಾಯೇನ ವಾಚಾ…” ಎಂದು ಮುಗಿಸಿ (ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ ಎರಡನೆಯ ಸಾಲು “ಬುದ್ಧ್ಯಾತ್ಮನಾ ವಾನುಸೃತಸ್ವಭಾವಾತ್”).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपःसन्ध्याक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'I bow to Achyuta, by remembering whom and uttering whose name whatever is lacking in austerity, sandhya and other rites at once becomes complete. O Lord of Rama, whatever I have done, lacking in mantra, in action or in devotion, let it be complete, O God.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸುವುದರಿಂದ, ಯಾರ ನಾಮವನ್ನು ಹೇಳುವುದರಿಂದ ತಪಸ್ಸು, ಸಂಧ್ಯೆ ಮೊದಲಾದ ಕರ್ಮಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ತುಂಬಿ ಪೂರ್ಣವಾಗುತ್ತದೋ ಆ ಅಚ್ಯುತನಿಗೆ ವಂದಿಸುತ್ತೇನೆ. ರಮಾಪತಿಯೇ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿದ್ದರೂ ನಾನು ಮಾಡಿದ ಕರ್ಮ ಪರಿಪೂರ್ಣವಾಗಲಿ, ದೇವಾ.',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['morning'] },
          text: 'अनेन प्रातःसन्ध्यावन्दनेन भगवान् श्रीमन्मध्वाचार्याणां हृत्कमलमध्यनिवासी\nअनन्तकल्याणगुणगणपरिपूर्णः सच्चिदानन्दात्मकः सर्वकर्मकर्ता सर्वकर्मकारयिता\nश्रीक्षीराब्धिशायी भारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकः श्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु ॥',
          meaning: {
            en: 'By this morning sandhyavandana may the Lord Sri Lakshminarayana be pleased and, well pleased, grant boons: he who dwells in the lotus of Sri Madhvacharya’s heart, full of endless auspicious qualities, whose nature is being, consciousness and bliss, the doer of all acts and the one who makes all act, who reclines on the ocean of milk, who dwells in Mukhyaprana the beloved of Bharati, and who is called Savitri.',
            kn: 'ಈ ಪ್ರಾತಃಸಂಧ್ಯಾವಂದನೆಯಿಂದ — ಶ್ರೀಮನ್ಮಧ್ವಾಚಾರ್ಯರ ಹೃದಯಕಮಲದಲ್ಲಿ ವಾಸಿಸುವ, ಅನಂತ ಕಲ್ಯಾಣಗುಣಪೂರ್ಣನಾದ, ಸಚ್ಚಿದಾನಂದಸ್ವರೂಪನಾದ, ಎಲ್ಲಾ ಕರ್ಮಗಳನ್ನು ಮಾಡುವ ಹಾಗೂ ಮಾಡಿಸುವ, ಕ್ಷೀರಸಾಗರಶಾಯಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ, ಸುಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['midday'] },
          text: 'अनेन माध्याह्नसन्ध्यावन्दनेन भगवान् श्रीमन्मध्वाचार्याणां हृत्कमलमध्यनिवासी\nअनन्तकल्याणगुणगणपरिपूर्णः सच्चिदानन्दात्मकः सर्वकर्मकर्ता सर्वकर्मकारयिता\nश्रीक्षीराब्धिशायी भारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकः श्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु ॥',
          meaning: {
            en: 'By this midday sandhyavandana may the Lord Sri Lakshminarayana, called Savitri, who dwells in the heart of Sri Madhvacharya and within Mukhyaprana, full of endless auspicious qualities, the doer and inspirer of all acts, be pleased and grant boons.',
            kn: 'ಈ ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯಾವಂದನೆಯಿಂದ ಶ್ರೀಮನ್ಮಧ್ವಾಚಾರ್ಯರ ಹೃದಯಕಮಲವಾಸಿಯೂ ಅನಂತಕಲ್ಯಾಣಗುಣಪೂರ್ಣನೂ ಸರ್ವಕರ್ಮಕರ್ತನೂ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನೂ ಆದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          when: { tradition: ['madhva'], time: ['evening'] },
          text: 'अनेन सायंसन्ध्यावन्दनेन भगवान् श्रीमन्मध्वाचार्याणां हृत्कमलमध्यनिवासी\nअनन्तकल्याणगुणगणपरिपूर्णः सच्चिदानन्दात्मकः सर्वकर्मकर्ता सर्वकर्मकारयिता\nश्रीक्षीराब्धिशायी भारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकः श्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु ॥',
          meaning: {
            en: 'By this evening sandhyavandana may the Lord Sri Lakshminarayana, called Savitri, who dwells in the heart of Sri Madhvacharya and within Mukhyaprana, full of endless auspicious qualities, the doer and inspirer of all acts, be pleased and grant boons.',
            kn: 'ಈ ಸಾಯಂಸಂಧ್ಯಾವಂದನೆಯಿಂದ ಶ್ರೀಮನ್ಮಧ್ವಾಚಾರ್ಯರ ಹೃದಯಕಮಲವಾಸಿಯೂ ಅನಂತಕಲ್ಯಾಣಗುಣಪೂರ್ಣನೂ ಸರ್ವಕರ್ಮಕರ್ತನೂ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನೂ ಆದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ.',
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
      titleEn: 'Samarpana (offering the whole rite)',
      note: 'Offer the whole sandhyavandana to the Lord with the offering for the time of day, letting water fall into the plate, then recite कायेन वाचा… and do achamana.',
      noteKn: 'ಆ ಕಾಲದ ಸಮರ್ಪಣ ವಾಕ್ಯದಿಂದ ಸಂಪೂರ್ಣ ಸಂಧ್ಯಾವಂದನೆಯನ್ನು ಭಗವಂತನಿಗೆ ಅರ್ಪಿಸಿ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಿ; ನಂತರ “ಕಾಯೇನ ವಾಚಾ…” ಹೇಳಿ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          when: { tradition: ['smarta'], time: ['morning'] },
          text: 'अनेन प्रातःसन्ध्यावन्दनकर्मणा भगवान् सर्वात्मकः श्रीपरमेश्वरः प्रीयताम् ॥',
          meaning: {
            en: 'By this rite of morning sandhyavandana may the Lord, Sri Parameshvara, the Self of all, be pleased.',
            kn: 'ಈ ಪ್ರಾತಃಸಂಧ್ಯಾವಂದನ ಕರ್ಮದಿಂದ ಸರ್ವಾತ್ಮಕನಾದ ಭಗವಾನ್ ಶ್ರೀಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ.',
          },
        },
        {
          when: { tradition: ['smarta'], time: ['midday'] },
          text: 'अनेन माध्याह्निककर्मणा भगवान् सर्वात्मकः श्रीपरमेश्वरः प्रीयताम् ॥',
          meaning: {
            en: 'By this rite of midday worship may the Lord, Sri Parameshvara, the Self of all, be pleased.',
            kn: 'ಈ ಮಾಧ್ಯಾಹ್ನಿಕ ಕರ್ಮದಿಂದ ಸರ್ವಾತ್ಮಕನಾದ ಭಗವಾನ್ ಶ್ರೀಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ.',
          },
        },
        {
          when: { tradition: ['smarta'], time: ['evening'] },
          text: 'अनेन सायंसन्ध्यावन्दनकर्मणा भगवान् सर्वात्मकः श्रीपरमेश्वरः प्रीयताम् ॥',
          meaning: {
            en: 'By this rite of evening sandhyavandana may the Lord, Sri Parameshvara, the Self of all, be pleased.',
            kn: 'ಈ ಸಾಯಂಸಂಧ್ಯಾವಂದನ ಕರ್ಮದಿಂದ ಸರ್ವಾತ್ಮಕನಾದ ಭಗವಾನ್ ಶ್ರೀಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ.',
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
          text: 'आचम्य ॥',
          meaning: {
            en: 'Do achamana: sip water three times and touch the limbs with the names of the Lord, as at the beginning.',
            kn: 'ಆಚಮನ ಮಾಡಿ: ಆರಂಭದಲ್ಲಿ ಮಾಡಿದಂತೆ ಭಗವನ್ನಾಮಗಳೊಂದಿಗೆ ಮೂರು ಬಾರಿ ನೀರು ಸೇವಿಸಿ ಅಂಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
          },
        },
      ],
    },
    {
      title: 'जपस्थानप्रोक्षणम्',
      titleEn: 'Sprinkling the place of japa and conclusion',
      note: 'Sprinkle water on the place where you did japa with अद्या नो देव सवितः…, touch that spot with the right ring finger and then touch your heart. Ask forgiveness for any syllable dropped with यदक्षरपदभ्रष्टम्…, and finish with सर्वं श्रीकृष्णार्पणमस्तु.',
      noteKn: 'ಜಪ ಮಾಡಿದ ಸ್ಥಳದ ಮೇಲೆ “ಅದ್ಯಾ ನೋ ದೇವ ಸವಿತಃ…” ಎಂದು ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಆ ಜಾಗವನ್ನು ಮುಟ್ಟಿ ಹೃದಯವನ್ನು ಮುಟ್ಟಿಕೊಳ್ಳಿ. “ಯದಕ್ಷರಪದಭ್ರಷ್ಟಂ…” ಎಂದು ಲೋಪಗಳಿಗೆ ಕ್ಷಮೆ ಕೇಳಿ, “ಸರ್ವಂ ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು” ಎಂದು ಮುಗಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अद्या नो देव सवितः प्रजावत्सावीः सौभगम् । परा दुष्ष्वप्नियं सुव ।\nविश्वानि देव सवितर्दुरितानि परा सुव । यद्भद्रं तन्म आ सुव ॥',
          meaning: {
            en: 'O god Savitri, today bring us good fortune with offspring, and drive away bad dreams. O god Savitri, drive away all evils, and bring to me whatever is good.',
            kn: 'ಓ ಸವಿತೃದೇವ, ಇಂದು ನಮಗೆ ಸಂತಾನಸಹಿತವಾದ ಸೌಭಾಗ್ಯವನ್ನು ಕೊಡು, ಕೆಟ್ಟ ಕನಸುಗಳನ್ನು ದೂರಮಾಡು. ಓ ಸವಿತೃದೇವ, ಎಲ್ಲಾ ಪಾಪ-ಕಷ್ಟಗಳನ್ನು ದೂರಮಾಡಿ, ಯಾವುದು ಮಂಗಳಕರವೋ ಅದನ್ನು ನನಗೆ ಕೊಡು.',
          },
        },
        {
          text: 'यदक्षरपदभ्रष्टं मात्राहीनं च यद्भवेत् ।\nतत्सर्वं क्षम्यतां देव नारायण नमोऽस्तु ते ॥',
          meaning: {
            en: 'Whatever syllable or word has slipped, whatever has fallen short in length of sound: forgive it all, O God Narayana; salutation to you.',
            kn: 'ಅಕ್ಷರ, ಪದಗಳು ತಪ್ಪಿದ್ದರೆ, ಮಾತ್ರೆಗಳು ಕಡಿಮೆಯಾಗಿದ್ದರೆ, ಅದೆಲ್ಲವನ್ನೂ ಕ್ಷಮಿಸು, ದೇವಾ ನಾರಾಯಣ; ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'सर्वं श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'May all this be an offering to Sri Krishna.',
            kn: 'ಎಲ್ಲವೂ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'जपस्थानप्रोक्षणम्',
      titleEn: 'Sprinkling the place of japa and conclusion',
      note: 'Sprinkle water on the place where you did japa with अद्या नो देव सवितः…, touch that spot with the right ring finger and then the middle of the brows (Kanchi manual). Say the three names Achyuta, Ananta, Govinda three times to make good any omission, and finish with सर्वं श्रीकृष्णार्पणमस्तु. Do achamana.',
      noteKn: 'ಜಪ ಮಾಡಿದ ಸ್ಥಳದ ಮೇಲೆ “ಅದ್ಯಾ ನೋ ದೇವ ಸವಿತಃ…” ಎಂದು ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಆ ಜಾಗವನ್ನು ಮುಟ್ಟಿ ಹುಬ್ಬುಗಳ ನಡುವೆ ಮುಟ್ಟಿಕೊಳ್ಳಿ (ಕಂಚಿ ಪುಸ್ತಕ). ಲೋಪ ಪರಿಹಾರಕ್ಕಾಗಿ ಅಚ್ಯುತ, ಅನಂತ, ಗೋವಿಂದ ನಾಮಗಳನ್ನು ಮೂರು ಬಾರಿ ಹೇಳಿ, “ಸರ್ವಂ ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು” ಎಂದು ಮುಗಿಸಿ ಆಚಮನ ಮಾಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अद्या नो देव सवितः प्रजावत्सावीः सौभगम् । परा दुष्ष्वप्नियं सुव ।\nविश्वानि देव सवितर्दुरितानि परा सुव । यद्भद्रं तन्म आ सुव ॥',
          meaning: {
            en: 'O god Savitri, today bring us good fortune with offspring, and drive away bad dreams. O god Savitri, drive away all evils, and bring to me whatever is good.',
            kn: 'ಓ ಸವಿತೃದೇವ, ಇಂದು ನಮಗೆ ಸಂತಾನಸಹಿತವಾದ ಸೌಭಾಗ್ಯವನ್ನು ಕೊಡು, ಕೆಟ್ಟ ಕನಸುಗಳನ್ನು ದೂರಮಾಡು. ಓ ಸವಿತೃದೇವ, ಎಲ್ಲಾ ಪಾಪ-ಕಷ್ಟಗಳನ್ನು ದೂರಮಾಡಿ, ಯಾವುದು ಮಂಗಳಕರವೋ ಅದನ್ನು ನನಗೆ ಕೊಡು.',
          },
        },
        {
          text: 'अच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ॥',
          meaning: {
            en: 'Salutations to Achyuta, to Ananta and to Govinda (said three times, to make good any omission in the rite).',
            kn: 'ಅಚ್ಯುತನಿಗೆ, ಅನಂತನಿಗೆ, ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ (ಕರ್ಮದಲ್ಲಿನ ಲೋಪಗಳ ಪರಿಹಾರಕ್ಕಾಗಿ ಮೂರು ಬಾರಿ ಹೇಳುವುದು).',
          },
        },
        {
          text: 'सर्वं श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'May all this be an offering to Sri Krishna.',
            kn: 'ಎಲ್ಲವೂ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
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
  ],
};
