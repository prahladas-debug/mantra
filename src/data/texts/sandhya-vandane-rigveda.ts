/**
 * Ṛgvedīya (Āśvalāyana, Śākala) Sandhyāvandanam — morning, midday and
 * evening, with Mādhva and Smārta forms as practised in Karnataka.
 * NOT YET PROOFREAD against a printed manual.
 *
 * Sources collated (with scripts/collate.ts; readings supported by two
 * sources, by the Ṛgveda saṃhitā or by grammar were preferred):
 *  - Ṛgvedīya Āśvalāyana Prātaḥ Sandhyāvandanam (Mādhva), A. Basargekar,
 *    sanskritdocuments.org "rgsandhya" — Devanagari copy in the Sanchaya
 *    archive (github.com/cahcblr/sanchaya, Vedic texts/RV/
 *    rgvediya-sandhya-English.txt), the author's PDF (keshavashram.yolasite.com
 *    /resources/rgsandhya.pdf) and the jainqq.org scan.
 *  - Śrī Madhwamrutha, "Rigveda Pratha / Sayam Sandhyavandhane" (Mādhva,
 *    madhwamrutha.org, Kannada page and PDF).
 *  - Ashwathavruksha blog, "Rugvediya Sandhyaavandana" (Mādhva family
 *    lesson of Śrīdharācārya Katti; Kannada), 2018.
 *  - Samskara blog (satishharitasa.blogspot.com), "Ṛgveda (Āśvalāyana)
 *    prātaḥ/sāyaṃ sandhyāvandanam" (Smārta, Kannada), based on Ṛgveda
 *    Sandhyādi Nityakarma (Sāmaka Gaṇeśa Śāstrī, Śṛṅgeri, 1973) and Ṛgveda
 *    Prayoga Dīpikā (Dhāḷī Lakṣmīnarasiṃha Bhaṭṭa, Bengaluru, 1999).
 *  - "Ṛgveda Trikāla Sandhyopāsanam" data of github.com/saianirudh15/
 *    sandhyavandanam-app (Smārta, Āndhra; Devanagari) — the only source here
 *    for the Smārta midday arghya/upasthāna and sandhyā-tarpaṇa.
 *  - Sadācāra-smṛti of Śrī Madhvācārya with commentaries
 *    (github.com/sanskrit/raw_etexts, vedAntam/dvaitam/mAdhvam/...) for the
 *    Mādhva order of steps, three arghyas at every sandhyā, Keśavādi
 *    tarpaṇa and Gāyatrī/aṣṭākṣara japa.
 *  - Ṛgveda Śākala saṃhitā (github.com/sanskrit/raw_etexts, vedaH/Rg/shakala)
 *    for the text of every ṛk (svaras removed).
 */
import type { Mantra } from '../types';

const MADHVA = ['madhva'];
const SMARTA = ['smarta'];

const GAYATRI_MEANING = {
  en: 'Om, earth, sky and heaven. We meditate on that adorable radiance of the divine Savitṛ — for Mādhvas, Śrī Nārāyaṇa dwelling in the sun; may he move our minds.',
  kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಸವಿತೃದೇವನ (ಮಾಧ್ವರಿಗೆ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಶ್ರೀನಾರಾಯಣನ) ಪೂಜನೀಯವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
};

export const sandhyaVandaneRigveda: Mantra = {
  id: 'sandhya-vandane-rigveda',
  title: 'ऋग्वेदसन्ध्यावन्दनम्',
  titleEn: 'Rigveda Sandhyavandane',
  category: 'sandhya',
  order: 1,
  deity: 'Savitṛ — Śrī Lakṣmīnārāyaṇa in the solar orb',
  source: 'Ṛgveda (Śākala) mantras, Āśvalāyana practice; Taittirīya Āraṇyaka (prāśana); Sadācāra-smṛti',
  summary:
    'The complete daily sandhyā worship of Ṛgvedins (Āśvalāyana sūtra, Śākala śākhā) for morning, midday and evening, step by step: ācamana, prāṇāyāma, saṅkalpa, mārjana, prāśana, aghamarṣaṇa, arghya, Gāyatrī japa, upasthāna and the closing salutations. Choose Mādhva or Smārta and the time of day at the top; only the steps and words for that choice are shown. Families differ in small details, so follow the lesson of your elders where it differs.',
  summaryKn:
    'ಋಗ್ವೇದಿಗಳ (ಆಶ್ವಲಾಯನ ಸೂತ್ರ, ಶಾಕಲ ಶಾಖೆ) ಪ್ರಾತಃ, ಮಾಧ್ಯಾಹ್ನಿಕ ಮತ್ತು ಸಾಯಂ ಸಂಧ್ಯಾವಂದನೆಯ ಸಂಪೂರ್ಣ ಕ್ರಮ: ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ಸಂಕಲ್ಪ, ಮಾರ್ಜನ, ಪ್ರಾಶನ, ಅಘಮರ್ಷಣ, ಅರ್ಘ್ಯ, ಗಾಯತ್ರೀ ಜಪ, ಉಪಸ್ಥಾನ ಮತ್ತು ಕೊನೆಯ ನಮಸ್ಕಾರಗಳು. ಮೇಲೆ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಸಂಪ್ರದಾಯವನ್ನೂ ಕಾಲವನ್ನೂ ಆರಿಸಿಕೊಂಡರೆ ಅದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಹಂತಗಳು ಮತ್ತು ಮಂತ್ರಗಳು ಮಾತ್ರ ಕಾಣಿಸುತ್ತವೆ. ಮನೆತನಗಳಲ್ಲಿ ಸಣ್ಣಪುಟ್ಟ ವ್ಯತ್ಯಾಸಗಳಿರುವುದರಿಂದ, ಭಿನ್ನವಾದಲ್ಲಿ ಹಿರಿಯರು ಹೇಳಿಕೊಟ್ಟ ಪಾಠವನ್ನೇ ಅನುಸರಿಸಿ.',
  variants: [
    { key: 'tradition', title: 'Tradition', titleKn: 'ಸಂಪ್ರದಾಯ', options: [
      { id: 'madhva', label: 'Mādhva', labelKn: 'ಮಾಧ್ವ' },
      { id: 'smarta', label: 'Smārta', labelKn: 'ಸ್ಮಾರ್ತ' } ] },
    { key: 'time', title: 'Time of day', titleKn: 'ಕಾಲ', options: [
      { id: 'morning', label: 'Morning (Prātaḥ)', labelKn: 'ಪ್ರಾತಃಕಾಲ' },
      { id: 'midday', label: 'Midday (Mādhyāhnika)', labelKn: 'ಮಾಧ್ಯಾಹ್ನಿಕ' },
      { id: 'evening', label: 'Evening (Sāyaṃ)', labelKn: 'ಸಾಯಂಕಾಲ' } ] },
  ],
  difficulty: 'medium',
  completeness: 'partial',
  contentNote:
    'Not yet proofread against a printed manual. Left out because no two reliable sources agreed or the text could not be verified: separate morning / midday / evening Gāyatrī dhyāna ślokas; the Mādhva midday upasthāna (the Mādhva manuals consulted give only the morning one, used again in the evening — the same mantras are shown for midday); the praticakṣva… ṛk and Gāyatrī-śiras viniyoga before the Mādhva prāyaścitta arghya; the navagraha / dikpāla tarpaṇa list; the viniyoga for the midday prāśana; tattva-nyāsa and mātṛkā-nyāsa (only for those initiated into them); the 24 and 8 Gāyatrī mudrās; Smārta additions such as tryambakam…, drupadād iva…, syonā pṛthivi… and stuto mayā varadā…. Follow your family manual for these.',
  sections: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      title: 'शुद्धिः',
      titleEn: 'Preparation and purification',
      note:
        'Bathe before the morning sandhyā; for midday and evening at least wash the feet, hands and face. Wear clean dry clothes (dhoti worn with kaccha and an upper cloth) with the sacred thread over the left shoulder. Sit on a darbha mat, deer-skin or wooden plank in a clean place: in the morning facing east (or north), at midday facing east or north, in the evening facing north (the evening arghya and japa are then done facing west). Keep ready a pañcapātre of water with an uddharaṇe (ladle) for ācamana, a second vessel of clean water for arghya, and an empty plate (arghya-pātre) to receive offered water. If your family wears a darbha pavitra, put it on the right ring finger now. Then take a little water in the right palm, recite this verse and sprinkle it over your head and body.',
      noteKn:
        'ಪ್ರಾತಃಸಂಧ್ಯೆಗೆ ಮೊದಲು ಸ್ನಾನ ಮಾಡಬೇಕು; ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಾಯಂಕಾಲಗಳಲ್ಲಿ ಕನಿಷ್ಠ ಕೈ, ಕಾಲು, ಮುಖ ತೊಳೆದುಕೊಳ್ಳಬೇಕು. ಶುಭ್ರವಾದ ಒಣ ವಸ್ತ್ರಗಳನ್ನು (ಕಚ್ಚೆ ಹಾಕಿದ ಪಂಚೆ ಮತ್ತು ಉತ್ತರೀಯ) ಧರಿಸಿ, ಯಜ್ಞೋಪವೀತವು ಎಡ ಭುಜದ ಮೇಲಿರಲಿ. ಶುದ್ಧವಾದ ಸ್ಥಳದಲ್ಲಿ ದರ್ಭಾಸನ, ಕೃಷ್ಣಾಜಿನ ಅಥವಾ ಮಣೆಯ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಿ: ಬೆಳಗ್ಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ (ಅಥವಾ ಉತ್ತರಾಭಿಮುಖವಾಗಿ), ಮಧ್ಯಾಹ್ನ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ, ಸಾಯಂಕಾಲ ಉತ್ತರಾಭಿಮುಖವಾಗಿ (ಸಾಯಂಕಾಲದ ಅರ್ಘ್ಯ ಮತ್ತು ಜಪವನ್ನು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಮಾಡಬೇಕು). ಆಚಮನಕ್ಕೆ ಉದ್ಧರಣೆಯೊಂದಿಗೆ ನೀರಿನ ಪಂಚಪಾತ್ರೆ, ಅರ್ಘ್ಯಕ್ಕೆ ಶುದ್ಧ ನೀರಿನ ಇನ್ನೊಂದು ಪಾತ್ರೆ, ಅರ್ಪಿಸಿದ ನೀರನ್ನು ಬಿಡಲು ಖಾಲಿ ತಟ್ಟೆ (ಅರ್ಘ್ಯಪಾತ್ರೆ) ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ. ಮನೆತನದಲ್ಲಿ ದರ್ಭೆಯ ಪವಿತ್ರ ಧರಿಸುವ ಪದ್ಧತಿಯಿದ್ದರೆ ಈಗ ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿಗೆ ಧರಿಸಿ. ನಂತರ ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ಈ ಶ್ಲೋಕ ಹೇಳಿ ತಲೆ ಮತ್ತು ಮೈಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
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
    // 2 ─────────────────────────────────────────────────────────────
    {
      title: 'ऊर्ध्वपुण्ड्रधारणम्',
      titleEn: 'Ūrdhvapuṇḍra and mudrās (Mādhva)',
      when: { tradition: MADHVA },
      note:
        'Put a spoonful of water (nirmālya tīrtha from the day’s pūjā if available, otherwise clean water) in the left palm and rub gopīcandana into a paste while reciting the first verse. Apply it at twelve places, saying one of the twelve names for each: forehead — Keśava; middle of the abdomen — Nārāyaṇa; chest — Mādhava; front of the neck — Govinda; right side of the abdomen — Viṣṇu; right arm/shoulder — Madhusūdana; right side of the neck — Trivikrama; left side of the abdomen — Vāmana; left arm/shoulder — Śrīdhara; left side of the neck — Hṛṣīkeśa; lower back — Padmanābha; back of the neck — Dāmodara; then touch the top of the head with what remains. On the forehead draw two upright parallel lines (ūrdhvapuṇḍra) with the finger. In the morning, then stamp the mudrās with gopīcandana — cakra, śaṅkha, gadā, padma and finally Nārāyaṇa mudrā over them — in the places your family follows (cakra on the right side, śaṅkha on the left).',
      noteKn:
        'ಎಡ ಅಂಗೈಯಲ್ಲಿ ಒಂದು ಉದ್ಧರಣೆ ನೀರು (ದೇವರ ಪೂಜೆಯ ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥ ಇದ್ದರೆ ಅದು, ಇಲ್ಲವಾದರೆ ಶುದ್ಧ ನೀರು) ಹಾಕಿಕೊಂಡು ಮೊದಲ ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ಗೋಪೀಚಂದನವನ್ನು ತೇಯ್ದು ಗಂಧ ಮಾಡಿಕೊಳ್ಳಿ. ಹನ್ನೆರಡು ನಾಮಗಳನ್ನು ಒಂದೊಂದಾಗಿ ಹೇಳುತ್ತಾ ಹನ್ನೆರಡು ಸ್ಥಳಗಳಲ್ಲಿ ಧರಿಸಿ: ಹಣೆ — ಕೇಶವ; ಹೊಟ್ಟೆಯ ಮಧ್ಯ — ನಾರಾಯಣ; ಎದೆ — ಮಾಧವ; ಕಂಠದ ಮುಂಭಾಗ — ಗೋವಿಂದ; ಹೊಟ್ಟೆಯ ಬಲಭಾಗ — ವಿಷ್ಣು; ಬಲ ಭುಜ — ಮಧುಸೂದನ; ಕುತ್ತಿಗೆಯ ಬಲಭಾಗ — ತ್ರಿವಿಕ್ರಮ; ಹೊಟ್ಟೆಯ ಎಡಭಾಗ — ವಾಮನ; ಎಡ ಭುಜ — ಶ್ರೀಧರ; ಕುತ್ತಿಗೆಯ ಎಡಭಾಗ — ಹೃಷೀಕೇಶ; ಬೆನ್ನಿನ ಕೆಳಭಾಗ — ಪದ್ಮನಾಭ; ಕುತ್ತಿಗೆಯ ಹಿಂಭಾಗ — ದಾಮೋದರ; ಉಳಿದ ಗಂಧವನ್ನು ನೆತ್ತಿಗೆ ಮುಟ್ಟಿಸಿ. ಹಣೆಯಲ್ಲಿ ಬೆರಳಿನಿಂದ ಮೇಲ್ಮುಖವಾದ ಎರಡು ಸಮಾನಾಂತರ ರೇಖೆಗಳನ್ನು (ಊರ್ಧ್ವಪುಂಡ್ರ) ಎಳೆಯಿರಿ. ಬೆಳಗ್ಗೆ ನಂತರ ಗೋಪೀಚಂದನದಿಂದ ಚಕ್ರ, ಶಂಖ, ಗದಾ, ಪದ್ಮ ಮುದ್ರೆಗಳನ್ನೂ ಕೊನೆಗೆ ಅವುಗಳ ಮೇಲೆ ನಾರಾಯಣ ಮುದ್ರೆಯನ್ನೂ ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ ಧರಿಸಿ (ಚಕ್ರ ಬಲಭಾಗದಲ್ಲಿ, ಶಂಖ ಎಡಭಾಗದಲ್ಲಿ).',
      verses: [
        {
          text: 'गोपीचन्दन पापघ्न विष्णुदेहसमुद्भव ।\nचक्राङ्कित नमस्तेऽस्तु धारणान्मुक्तिदो भव ॥',
          meaning: {
            en: 'O gopīcandana, destroyer of sin, sprung from Viṣṇu’s own body and marked with his discus: salutations to you. Worn on my body, become the giver of liberation.',
            kn: 'ಪಾಪವನ್ನು ನಾಶಮಾಡುವ, ವಿಷ್ಣುವಿನ ದೇಹದಿಂದ ಉದ್ಭವಿಸಿದ, ಚಕ್ರಚಿಹ್ನೆಯುಳ್ಳ ಓ ಗೋಪೀಚಂದನವೇ, ನಿನಗೆ ನಮಸ್ಕಾರ. ನಿನ್ನನ್ನು ಧರಿಸುವುದರಿಂದ ನನಗೆ ಮೋಕ್ಷವನ್ನು ಕೊಡುವಂಥದ್ದಾಗು.',
          },
        },
        {
          text:
            'ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ।\nॐ गोविन्दाय नमः । ॐ विष्णवे नमः । ॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः । ॐ वामनाय नमः । ॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः । ॐ दामोदराय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord in his twelve forms, Keśava to Dāmodara, one placed on each of the twelve marks of the body.',
            kn: 'ಕೇಶವನಿಂದ ದಾಮೋದರನವರೆಗಿನ ಭಗವಂತನ ಹನ್ನೆರಡು ರೂಪಗಳಿಗೆ ನಮಸ್ಕಾರ; ಒಂದೊಂದು ರೂಪವನ್ನೂ ದೇಹದ ಒಂದೊಂದು ಊರ್ಧ್ವಪುಂಡ್ರದಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      title: 'आचमनम्',
      titleEn: 'Ācamana (do it twice)',
      note:
        'Hollow the right palm into the gokarṇa shape (like a cow’s ear) and pour into it, from the uddharaṇe, water enough to cover a grain of black gram. With Keśava, Nārāyaṇa and Mādhava sip it three times from the base of the palm (brahma-tīrtha), without noise. Then, with the remaining names: Govinda — wash the right palm with the left; Viṣṇu — wash the left palm with the right; Madhusūdana — touch the upper lip; Trivikrama — the lower lip; Vāmana — the right cheek; Śrīdhara — the left cheek; Hṛṣīkeśa — wash both hands; Padmanābha — touch the feet; Dāmodara — the crown of the head with the middle finger; Saṅkarṣaṇa — the tip of the nose with the middle finger; Vāsudeva and Pradyumna — the right and left nostril with thumb and index finger; Aniruddha and Puruṣottama — the right and left eye; Adhokṣaja and Nārasiṃha — the right and left ear; Acyuta — the navel; Janārdana — the heart with the palm; Upendra — the head; Hari and Śrī Kṛṣṇa — the right and left shoulder with all the fingers. (This is the order in the Mādhva Āśvalāyana manual; Smārta manuals follow the same names with small differences in the touches — follow what you were taught.) At the start of sandhyā go through the whole ācamana twice (dvirācamana). Later, “ācamana” means once through, unless twice is said.',
      noteKn:
        'ಬಲ ಅಂಗೈಯನ್ನು ಹಸುವಿನ ಕಿವಿಯಂತೆ ಗೋಕರ್ಣಾಕಾರದಲ್ಲಿ ಮಡಚಿ, ಉದ್ಧರಣೆಯಿಂದ ಒಂದು ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ನೀರು ಹಾಕಿಕೊಳ್ಳಿ. ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಮೂರು ನಾಮಗಳಿಂದ ಅಂಗೈಯ ಬುಡದಿಂದ (ಬ್ರಹ್ಮತೀರ್ಥ) ಶಬ್ದ ಮಾಡದೆ ಮೂರು ಬಾರಿ ಪ್ರಾಶನ ಮಾಡಿ. ಉಳಿದ ನಾಮಗಳಿಗೆ: ಗೋವಿಂದ — ಎಡಗೈಯಿಂದ ಬಲ ಅಂಗೈ ತೊಳೆಯುವುದು; ವಿಷ್ಣು — ಬಲಗೈಯಿಂದ ಎಡ ಅಂಗೈ ತೊಳೆಯುವುದು; ಮಧುಸೂದನ — ಮೇಲಿನ ತುಟಿ; ತ್ರಿವಿಕ್ರಮ — ಕೆಳಗಿನ ತುಟಿ; ವಾಮನ — ಬಲ ಕೆನ್ನೆ; ಶ್ರೀಧರ — ಎಡ ಕೆನ್ನೆ; ಹೃಷೀಕೇಶ — ಎರಡೂ ಕೈ ತೊಳೆಯುವುದು; ಪದ್ಮನಾಭ — ಪಾದಗಳು; ದಾಮೋದರ — ನಡುಬೆರಳಿನಿಂದ ನೆತ್ತಿ; ಸಂಕರ್ಷಣ — ನಡುಬೆರಳಿನಿಂದ ಮೂಗಿನ ತುದಿ; ವಾಸುದೇವ, ಪ್ರದ್ಯುಮ್ನ — ಹೆಬ್ಬೆರಳು ಮತ್ತು ತೋರುಬೆರಳಿನಿಂದ ಬಲ, ಎಡ ಮೂಗಿನ ಹೊಳ್ಳೆ; ಅನಿರುದ್ಧ, ಪುರುಷೋತ್ತಮ — ಬಲ, ಎಡ ಕಣ್ಣು; ಅಧೋಕ್ಷಜ, ನಾರಸಿಂಹ — ಬಲ, ಎಡ ಕಿವಿ; ಅಚ್ಯುತ — ನಾಭಿ; ಜನಾರ್ದನ — ಅಂಗೈಯಿಂದ ಹೃದಯ; ಉಪೇಂದ್ರ — ತಲೆ; ಹರಿ, ಶ್ರೀಕೃಷ್ಣ — ಎಲ್ಲ ಬೆರಳುಗಳಿಂದ ಬಲ, ಎಡ ಭುಜ. (ಇದು ಮಾಧ್ವ ಆಶ್ವಲಾಯನ ಕೈಪಿಡಿಯ ಕ್ರಮ; ಸ್ಮಾರ್ತರಲ್ಲಿ ನಾಮಗಳು ಇವೇ, ಸ್ಪರ್ಶಿಸುವ ಸ್ಥಳಗಳಲ್ಲಿ ಸ್ವಲ್ಪ ವ್ಯತ್ಯಾಸವಿರಬಹುದು — ಹೇಳಿಕೊಟ್ಟಂತೆ ಮಾಡಿ.) ಸಂಧ್ಯೆಯ ಆರಂಭದಲ್ಲಿ ಈ ಆಚಮನವನ್ನು ಎರಡು ಬಾರಿ ಮಾಡಬೇಕು (ದ್ವಿರಾಚಮನ). ಮುಂದೆ “ಆಚಮನ” ಎಂದರೆ ಒಂದು ಬಾರಿ, ಎರಡು ಎಂದು ಹೇಳಿದಲ್ಲಿ ಮಾತ್ರ ಎರಡು ಬಾರಿ.',
      verses: [
        {
          text: 'ॐ केशवाय स्वाहा ।\nॐ नारायणाय स्वाहा ।\nॐ माधवाय स्वाहा ॥',
          meaning: {
            en: 'Offering to Keśava, to Nārāyaṇa and to Mādhava: with each of these names of the Lord a sip of water is taken.',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಭಗವಂತನ ನಾಮಗಳನ್ನು ಹೇಳಿ, ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಜಲವನ್ನು ಅರ್ಪಿಸಿ ಆಚಮನ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'ॐ गोविन्दाय नमः । ॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः । ॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः । ॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः । ॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः । ॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः । ॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः । ॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः । ॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः । ॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord by his holy names, from Govinda and Viṣṇu to Hari and Śrī Kṛṣṇa; with each, the Lord is remembered as present in the part of the body that is touched.',
            kn: 'ಗೋವಿಂದ, ವಿಷ್ಣು ಮೊದಲ್ಗೊಂಡು ಹರಿ, ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಭಗವಂತನ ಪವಿತ್ರ ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ; ಒಂದೊಂದು ನಾಮ ಹೇಳುವಾಗಲೂ ಮುಟ್ಟಿದ ಅಂಗದಲ್ಲಿ ಆ ರೂಪದ ಭಗವಂತನಿದ್ದಾನೆಂದು ಸ್ಮರಿಸಬೇಕು.',
          },
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      title: 'प्राणायामः',
      titleEn: 'Prāṇāyāma (three times)',
      note:
        'Say the viniyoga line first, touching the head (ṛṣi), the mouth (chandas) and the heart (devatā). Then with the right hand close the right nostril with the thumb and the left nostril with the ring and little fingers, keeping the index and middle fingers folded. Breathe out through the right nostril, breathe in slowly through the left (pūraka), close both and hold the breath (kumbhaka) while reciting the whole mantra mentally, then breathe out slowly through the right nostril (recaka). Do this three times. Ṛgvedins say स्वः and स्वरोम् (not सुवः / सुवरोम्).',
      noteKn:
        'ಮೊದಲು ವಿನಿಯೋಗವನ್ನು ಹೇಳುತ್ತಾ ತಲೆ (ಋಷಿ), ಬಾಯಿ (ಛಂದಸ್ಸು), ಹೃದಯ (ದೇವತೆ) ಮುಟ್ಟಿಕೊಳ್ಳಿ. ನಂತರ ಬಲಗೈಯ ತೋರುಬೆರಳು ಮತ್ತು ನಡುಬೆರಳನ್ನು ಮಡಚಿ, ಹೆಬ್ಬೆರಳಿನಿಂದ ಬಲ ಮೂಗಿನ ಹೊಳ್ಳೆಯನ್ನೂ ಉಂಗುರದ ಬೆರಳು ಮತ್ತು ಕಿರುಬೆರಳಿನಿಂದ ಎಡ ಹೊಳ್ಳೆಯನ್ನೂ ಮುಚ್ಚಿ. ಬಲ ಹೊಳ್ಳೆಯಿಂದ ಉಸಿರು ಹೊರಬಿಟ್ಟು, ಎಡ ಹೊಳ್ಳೆಯಿಂದ ನಿಧಾನವಾಗಿ ಒಳಗೆಳೆದು (ಪೂರಕ), ಎರಡನ್ನೂ ಮುಚ್ಚಿ ಉಸಿರು ಹಿಡಿದಿರುವಾಗ (ಕುಂಭಕ) ಪೂರ್ಣ ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲೇ ಹೇಳಿ, ನಂತರ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ನಿಧಾನವಾಗಿ ಹೊರಬಿಡಿ (ರೇಚಕ). ಹೀಗೆ ಮೂರು ಬಾರಿ ಮಾಡಿ. ಋಗ್ವೇದಿಗಳು “ಸ್ವಃ”, “ಸ್ವರೋಂ” ಎನ್ನುತ್ತಾರೆ (“ಸುವಃ”, “ಸುವರೋಂ” ಅಲ್ಲ).',
      verses: [
        {
          text: 'प्रणवस्य परब्रह्म ऋषिः । परमात्मा देवता ।\nदैवी गायत्री छन्दः । प्राणायामे विनियोगः ॥',
          meaning: {
            en: 'For the praṇava (Om): the seer is the Supreme Brahman, the deity is the Supreme Self, the metre is the divine Gāyatrī; it is used for prāṇāyāma.',
            kn: 'ಪ್ರಣವಕ್ಕೆ (ಓಂಕಾರಕ್ಕೆ) ಪರಬ್ರಹ್ಮನೇ ಋಷಿ, ಪರಮಾತ್ಮನೇ ದೇವತೆ, ದೈವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಇದನ್ನು ಪ್ರಾಣಾಯಾಮಕ್ಕೆ ವಿನಿಯೋಗಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'ॐ भूः । ॐ भुवः । ॐ स्वः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhūḥ to Satya. We meditate on the adorable radiance of the divine Savitṛ, who moves our minds. Om — he is the waters, the light, the essence, the immortal, Brahman; he fills earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಪೂಜನೀಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಅವನೇ; ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮನೂ ಅವನೇ.',
          },
        },
      ],
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      title: 'सङ्कल्पः',
      titleEn: 'Saṅkalpa (resolve)',
      note:
        'Place the right palm over the left palm (some hold akṣata or touch the water vessel) and rest them on the right thigh. Replace each अमुक (“such-and-such”) with the current saṃvatsara, ayana (uttarāyaṇa / dakṣiṇāyana), ṛtu, māsa, pakṣa (śukla / kṛṣṇa), tithi, weekday (vāsara) and nakṣatra from the pañcāṅga; the place words (south bank of the Godāvarī, Daṇḍakāraṇya) are those used in Karnataka. Mādhvas and Smārtas then say their own purpose phrase, followed by the line for the time of day. At the end let a ladle of water fall into the plate.',
      noteKn:
        'ಬಲ ಅಂಗೈಯನ್ನು ಎಡ ಅಂಗೈಯ ಮೇಲಿಟ್ಟು (ಕೆಲವರು ಅಕ್ಷತೆ ಹಿಡಿಯುತ್ತಾರೆ ಅಥವಾ ಜಲಪಾತ್ರೆಯನ್ನು ಮುಟ್ಟುತ್ತಾರೆ) ಬಲ ತೊಡೆಯ ಮೇಲಿರಿಸಿ. “ಅಮುಕ” ಎಂದಿರುವಲ್ಲೆಲ್ಲ ಪಂಚಾಂಗದಿಂದ ಈಗಿನ ಸಂವತ್ಸರ, ಅಯನ (ಉತ್ತರಾಯಣ / ದಕ್ಷಿಣಾಯನ), ಋತು, ಮಾಸ, ಪಕ್ಷ (ಶುಕ್ಲ / ಕೃಷ್ಣ), ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳ ಹೆಸರು ಹೇಳಿ; ಸ್ಥಳದ ವಾಕ್ಯ (ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರ, ದಂಡಕಾರಣ್ಯ) ಕರ್ನಾಟಕದಲ್ಲಿ ಹೇಳುವಂಥದ್ದು. ಬಳಿಕ ಮಾಧ್ವರು, ಸ್ಮಾರ್ತರು ತಮ್ಮ ತಮ್ಮ ಉದ್ದೇಶವಾಕ್ಯವನ್ನೂ, ನಂತರ ಆ ಕಾಲದ ವಾಕ್ಯವನ್ನೂ ಹೇಳಬೇಕು. ಕೊನೆಯಲ್ಲಿ ಒಂದು ಉದ್ಧರಣೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      verses: [
        {
          text:
            'शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य\nअद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nअष्टाविंशतितमे कलियुगे प्रथमपादे\nजम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे\nअमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'At this good and auspicious moment, today, in the age that runs by the command of Viṣṇu — the second half of Brahmā’s life, the Śveta-varāha kalpa, the Vaivasvata manvantara, the first quarter of the twenty-eighth Kali-yuga — in Bhāratavarṣa, in Daṇḍakāraṇya south of the Godāvarī, in the Śālivāhana era, in the present year, ayana, season, month, fortnight, tithi, weekday and star so named, on this auspicious day so marked…',
            kn: 'ಶುಭವೂ ಮಂಗಳಕರವೂ ಆದ ಈ ಮುಹೂರ್ತದಲ್ಲಿ, ಇಂದು, ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದ ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಇಪ್ಪತ್ತೆಂಟನೆಯ ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಭರತವರ್ಷದಲ್ಲಿ ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          when: { tradition: MADHVA },
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं',
          meaning: {
            en: 'prompted by Śrī Lakṣmīnārāyaṇa, who dwells within Mukhyaprāṇa (Vāyu), the consort of Bhāratī, and for the pleasure of Śrī Lakṣmīnārāyaṇa,',
            kn: 'ಭಾರತೀರಮಣರಾದ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'मम उपात्तसमस्तदुरितक्षयद्वारा\nश्रीपरमेश्वरप्रीत्यर्थं',
          meaning: {
            en: 'for the destruction of all the sins I have gathered, and through that for the pleasure of the Supreme Lord,',
            kn: 'ನಾನು ಗಳಿಸಿಕೊಂಡಿರುವ ಸಮಸ್ತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'प्रातःसन्ध्यामुपासिष्ये ॥',
          meaning: { en: 'I shall perform the morning sandhyā worship.', kn: 'ಪ್ರಾತಃಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
        {
          when: { time: ['midday'] },
          text: 'माध्याह्निकसन्ध्यामुपासिष्ये ॥',
          meaning: { en: 'I shall perform the midday sandhyā worship.', kn: 'ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
        {
          when: { time: ['evening'] },
          text: 'सायंसन्ध्यामुपासिष्ये ॥',
          meaning: { en: 'I shall perform the evening sandhyā worship.', kn: 'ಸಾಯಂಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      title: 'मार्जनम्',
      titleEn: 'Mārjana (sprinkling)',
      note:
        'Say the viniyoga. Take water in the left palm or in the uddharaṇe held in the left hand, and with the fingers of the right hand (Mādhvas often use a tulasī leaf, others a darbha blade) sprinkle yourself at the end of each of the nine pādas (lines). The Mādhva manual sprinkles in three rounds — feet, head, heart; heart, feet, head; head, heart, feet — nine sprinklings in all.',
      noteKn:
        'ವಿನಿಯೋಗ ಹೇಳಿ. ಎಡ ಅಂಗೈಯಲ್ಲಿ ಅಥವಾ ಎಡಗೈಯಲ್ಲಿ ಹಿಡಿದ ಉದ್ಧರಣೆಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು, ಬಲಗೈ ಬೆರಳುಗಳಿಂದ (ಮಾಧ್ವರು ಹೆಚ್ಚಾಗಿ ತುಳಸೀದಳದಿಂದ, ಇತರರು ದರ್ಭೆಯಿಂದ) ಒಂಬತ್ತು ಪಾದಗಳಲ್ಲಿ ಒಂದೊಂದರ ಕೊನೆಗೂ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ. ಮಾಧ್ವ ಕೈಪಿಡಿಯಲ್ಲಿ ಮೂರು ಸುತ್ತು — ಪಾದ, ತಲೆ, ಹೃದಯ; ಹೃದಯ, ಪಾದ, ತಲೆ; ತಲೆ, ಹೃದಯ, ಪಾದ — ಒಟ್ಟು ಒಂಬತ್ತು ಬಾರಿ ಪ್ರೋಕ್ಷಣೆ.',
      verses: [
        {
          text: 'आपो हि ष्ठेति तृचस्य सूक्तस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।\nआपो देवता । गायत्री छन्दः । मार्जने विनियोगः ॥',
          meaning: {
            en: 'For the three ṛks beginning “āpo hi ṣṭhā”: the seer is Sindhudvīpa son of Ambarīṣa, the deity is the Waters, the metre is Gāyatrī; they are used for sprinkling.',
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
    // 7 ─────────────────────────────────────────────────────────────
    {
      title: 'जलाभिमन्त्रणम् — प्रातः',
      titleEn: 'Jalābhimantraṇa / prāśana — morning',
      when: { time: ['morning'] },
      note:
        'Take a little water (from the arghya vessel) in the right palm, say the viniyoga and the mantra over it, and sip it at स्वाहा. Then do ācamana once.',
      noteKn:
        'ಬಲ ಅಂಗೈಯಲ್ಲಿ (ಅರ್ಘ್ಯದ ಪಾತ್ರೆಯಿಂದ) ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ವಿನಿಯೋಗ ಮತ್ತು ಮಂತ್ರವನ್ನು ಹೇಳಿ, “ಸ್ವಾಹಾ” ಎನ್ನುವಾಗ ಆ ನೀರನ್ನು ಪ್ರಾಶನ ಮಾಡಿ. ನಂತರ ಒಂದು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      verses: [
        {
          when: { tradition: MADHVA },
          text: 'सूर्यश्चेत्यस्य मन्त्रस्य नारायण ऋषिः ।\nसूर्यमामन्युमन्युपतयो रात्रिर्देवताः ।\nप्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “sūryaś ca”: the seer is Nārāyaṇa; the deities are Sūrya, Manyu, the lords of Manyu and Night; the metre is Prakṛti; it is used to consecrate the water.',
            kn: '“ಸೂರ್ಯಶ್ಚ” ಮಂತ್ರಕ್ಕೆ ನಾರಾಯಣ ಋಷಿ; ಸೂರ್ಯ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ರಾತ್ರಿ ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಜಲಾಭಿಮಂತ್ರಣಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'सूर्यश्चेत्यस्य मन्त्रस्य याज्ञवल्क्य उपनिषद् ऋषिः ।\nसूर्यमन्युमन्युपतिरात्रयो देवताः ।\nप्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “sūryaś ca”: the seer is the Upaniṣad of Yājñavalkya; the deities are Sūrya, Manyu, the lords of Manyu and Night; the metre is Prakṛti; it is used to consecrate the water.',
            kn: '“ಸೂರ್ಯಶ್ಚ” ಮಂತ್ರಕ್ಕೆ ಯಾಜ್ಞವಲ್ಕ್ಯ ಉಪನಿಷತ್ ಋಷಿ; ಸೂರ್ಯ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ರಾತ್ರಿ ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಜಲಾಭಿಮಂತ್ರಣಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text:
            'सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयद्रात्रिया पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nरात्रिस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसूर्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May the Sun, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the night with mind, speech, hands, feet, belly or organ, may the night wipe it away. Whatever wrong is in me, I offer it, and myself, into the Sun, the light that is the source of immortality. Svāhā.',
            kn: 'ಸೂರ್ಯನೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ರಾತ್ರಿಯಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ, ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ರಾತ್ರಿದೇವತೆಯು ಅಳಿಸಲಿ. ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸೂರ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'जलाभिमन्त्रणम् — माध्याह्निकम्',
      titleEn: 'Jalābhimantraṇa / prāśana — midday',
      when: { time: ['midday'] },
      note:
        'Take a little water in the right palm, recite the mantra over it and sip it at स्वाहा. Then do ācamana once.',
      noteKn:
        'ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ಮಂತ್ರ ಹೇಳಿ, “ಸ್ವಾಹಾ” ಎನ್ನುವಾಗ ಪ್ರಾಶನ ಮಾಡಿ. ನಂತರ ಒಂದು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      verses: [
        {
          text:
            'आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् ।\nपुनन्तु ब्रह्मणस्पतिर्ब्रह्मपूता पुनातु माम् ।\nयदुच्छिष्टमभोज्यं यद्वा दुश्चरितं मम ।\nसर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहं स्वाहा ॥',
          meaning: {
            en: 'May the waters purify the earth, and the purified earth purify me; may Brahmaṇaspati, and the Veda-purified earth, purify me. From leftover or forbidden food, from my misdeeds and from gifts taken from the unworthy, may the waters purify me entirely. Svāhā.',
            kn: 'ಜಲವು ಭೂಮಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ, ಶುದ್ಧವಾದ ಭೂಮಿ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಬ್ರಹ್ಮಣಸ್ಪತಿಯೂ ವೇದದಿಂದ ಪವಿತ್ರವಾದ ಭೂಮಿಯೂ ನನ್ನನ್ನು ಪಾವನಗೊಳಿಸಲಿ. ಎಂಜಲು, ತಿನ್ನಬಾರದ ಆಹಾರ, ನನ್ನ ದುರಾಚಾರ, ಅಯೋಗ್ಯರಿಂದ ಪಡೆದ ದಾನ — ಇವೆಲ್ಲದರಿಂದ ಜಲವು ನನ್ನನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಶುದ್ಧಗೊಳಿಸಲಿ, ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'जलाभिमन्त्रणम् — सायम्',
      titleEn: 'Jalābhimantraṇa / prāśana — evening',
      when: { time: ['evening'] },
      note:
        'Take a little water in the right palm, say the viniyoga and the mantra over it, and sip it at स्वाहा. Then do ācamana once.',
      noteKn:
        'ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು ವಿನಿಯೋಗ ಮತ್ತು ಮಂತ್ರ ಹೇಳಿ, “ಸ್ವಾಹಾ” ಎನ್ನುವಾಗ ಪ್ರಾಶನ ಮಾಡಿ. ನಂತರ ಒಂದು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      verses: [
        {
          when: { tradition: MADHVA },
          text: 'अग्निश्चेत्यस्य मन्त्रस्य हिरण्यगर्भ ऋषिः ।\nअग्निर्मामन्युमन्युपतयोऽहर्देवताः ।\nप्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “agniś ca”: the seer is Hiraṇyagarbha; the deities are Agni, Manyu, the lords of Manyu and Day; the metre is Prakṛti; it is used to consecrate the water.',
            kn: '“ಅಗ್ನಿಶ್ಚ” ಮಂತ್ರಕ್ಕೆ ಹಿರಣ್ಯಗರ್ಭ ಋಷಿ; ಅಗ್ನಿ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ಹಗಲು ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಜಲಾಭಿಮಂತ್ರಣಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'अग्निश्चेत्यस्य मन्त्रस्य याज्ञवल्क्य उपनिषद् ऋषिः ।\nअग्निमन्युमन्युपतयोऽहश्च देवताः ।\nप्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “agniś ca”: the seer is the Upaniṣad of Yājñavalkya; the deities are Agni, Manyu, the lords of Manyu and Day; the metre is Prakṛti; it is used to consecrate the water.',
            kn: '“ಅಗ್ನಿಶ್ಚ” ಮಂತ್ರಕ್ಕೆ ಯಾಜ್ಞವಲ್ಕ್ಯ ಉಪನಿಷತ್ ಋಷಿ; ಅಗ್ನಿ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ಹಗಲು ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಜಲಾಭಿಮಂತ್ರಣಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text:
            'अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयदह्ना पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nअहस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसत्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May Agni, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the day with mind, speech, hands, feet, belly or organ, may the day wipe it away. Whatever wrong is in me, I offer it, and myself, into the light of Truth, the source of immortality. Svāhā.',
            kn: 'ಅಗ್ನಿಯೂ, ಮನ್ಯುವೂ, ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ಹಗಲಿನಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ, ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ಹಗಲಿನ ದೇವತೆಯು ಅಳಿಸಲಿ. ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸತ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      title: 'पुनर्मार्जनम्',
      titleEn: 'Punar-mārjana (second sprinkling, nine ṛks)',
      note:
        'Say the viniyoga, then sprinkle water on yourself as in Mārjana while reciting the whole sūkta of nine ṛks (Ṛgveda 10.9) and the closing ṛk सस्रुषीः…: sprinkle the head at the end of each pāda (line). Then do ācamana once.',
      noteKn:
        'ವಿನಿಯೋಗ ಹೇಳಿ, ಮಾರ್ಜನದಲ್ಲಿ ಮಾಡಿದಂತೆಯೇ ಒಂಬತ್ತು ಋಕ್ಕುಗಳ ಪೂರ್ಣ ಸೂಕ್ತವನ್ನೂ (ಋಗ್ವೇದ ೧೦.೯) ಕೊನೆಯ “ಸಸ್ರುಷೀಃ” ಋಕ್ಕನ್ನೂ ಹೇಳುತ್ತಾ ಪ್ರತಿಯೊಂದು ಪಾದದ ಕೊನೆಯಲ್ಲಿ ತಲೆಗೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ. ನಂತರ ಒಂದು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      verses: [
        {
          text:
            'आपो हि ष्ठेति नवर्चस्य सूक्तस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।\nआपो देवता । गायत्री छन्दः । पञ्चमी वर्धमाना । सप्तमी प्रतिष्ठा ।\nअन्त्ये द्वे अनुष्टुभौ । पुनर्मार्जने विनियोगः ॥',
          meaning: {
            en: 'For the sūkta of nine ṛks “āpo hi ṣṭhā”: the seer is Sindhudvīpa son of Ambarīṣa, the deity is the Waters, the metre is Gāyatrī — the fifth ṛk in Vardhamānā, the seventh in Pratiṣṭhā, the last two in Anuṣṭubh; used for the second sprinkling.',
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
      ],
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      title: 'अघमर्षणम्',
      titleEn: 'Aghamarṣaṇa (casting out sin)',
      note:
        'Take water in the right palm, held in the gokarṇa shape near the nose. Say the viniyoga and the three ṛks (Ṛgveda 10.190). Then, closing the left nostril, breathe out through the right nostril onto the water, thinking that the pāpa-puruṣa (the sin within) leaves you into it; throw the water away to your left onto the ground and do not look at it again. Then do ācamana once.',
      noteKn:
        'ಬಲ ಅಂಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರದಲ್ಲಿ ಮೂಗಿನ ಬಳಿ ಹಿಡಿದು ಅದರಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಳ್ಳಿ. ವಿನಿಯೋಗವನ್ನೂ ಮೂರು ಋಕ್ಕುಗಳನ್ನೂ (ಋಗ್ವೇದ ೧೦.೧೯೦) ಹೇಳಿ. ನಂತರ ಎಡ ಹೊಳ್ಳೆಯನ್ನು ಮುಚ್ಚಿ ಬಲ ಹೊಳ್ಳೆಯಿಂದ ಆ ನೀರಿನ ಮೇಲೆ ಉಸಿರು ಬಿಡುತ್ತಾ, ನನ್ನೊಳಗಿನ ಪಾಪಪುರುಷನು ಆ ನೀರಿಗೆ ಹೊರಟುಹೋದನೆಂದು ಭಾವಿಸಿ; ಆ ನೀರನ್ನು ಎಡಭಾಗಕ್ಕೆ ನೆಲದ ಮೇಲೆ ಚೆಲ್ಲಿ, ಮತ್ತೆ ಅದನ್ನು ನೋಡಬೇಡಿ. ನಂತರ ಒಂದು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      verses: [
        {
          text: 'ऋतं चेत्यस्य सूक्तस्य अघमर्षण ऋषिः ।\nभाववृत्तं देवता । अनुष्टुप् छन्दः । पापपुरुषविसर्जने विनियोगः ॥',
          meaning: {
            en: 'For the sūkta “ṛtaṃ ca”: the seer is Aghamarṣaṇa, the deity is Bhāvavṛtta (the course of creation), the metre is Anuṣṭubh; it is used for casting out the person of sin.',
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
      ],
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya-pradāna (offering water to the Sun)',
      note:
        'Do ācamana and one prāṇāyāma, then say the arghya saṅkalpa and viniyoga. Three arghyas are offered at every sandhyā. Morning: stand facing east, before sunrise, looking towards the sun. Midday: stand facing the sun. Evening: sit facing west, before sunset, and let the water fall on the ground or a stone (not into a river). Fill both joined palms with clean water from the arghya vessel (not the ācamana water), raise them to the height of the nose, recite the Gāyatrī with Om and the vyāhṛtis, and pour the water out over the fingertips — once for each recitation. Mādhvas meditate on Śrī Nārāyaṇa (Savitṛ-nāmaka Lakṣmīnārāyaṇa) seated in the sun while offering. In the Smārta midday arghya many manuals offer the first arghya with हंसः शुचिषत्…, the second with आकृष्णेन…, and the third with the Gāyatrī.',
      noteKn:
        'ಆಚಮನ ಮತ್ತು ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಅರ್ಘ್ಯದ ಸಂಕಲ್ಪ ಮತ್ತು ವಿನಿಯೋಗವನ್ನು ಹೇಳಿ. ಪ್ರತಿ ಸಂಧ್ಯೆಯಲ್ಲೂ ಮೂರು ಅರ್ಘ್ಯ ಕೊಡಬೇಕು. ಬೆಳಗ್ಗೆ: ಸೂರ್ಯೋದಯಕ್ಕೆ ಮೊದಲು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ನಿಂತು ಸೂರ್ಯನ ಕಡೆ ನೋಡುತ್ತಾ. ಮಧ್ಯಾಹ್ನ: ಸೂರ್ಯನ ಕಡೆ ನಿಂತು. ಸಾಯಂಕಾಲ: ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಮೊದಲು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ನೀರನ್ನು ನೆಲದ ಮೇಲೆ ಅಥವಾ ಕಲ್ಲಿನ ಮೇಲೆ ಬಿಡಬೇಕು (ನದಿಯೊಳಗೆ ಅಲ್ಲ). ಅರ್ಘ್ಯದ ಪಾತ್ರೆಯ ಶುದ್ಧ ನೀರನ್ನು (ಆಚಮನದ ನೀರನ್ನಲ್ಲ) ಜೋಡಿಸಿದ ಎರಡೂ ಅಂಗೈಗಳಲ್ಲಿ ತುಂಬಿಕೊಂಡು ಮೂಗಿನ ಎತ್ತರಕ್ಕೆ ಎತ್ತಿ, ಓಂಕಾರ ಮತ್ತು ವ್ಯಾಹೃತಿಗಳೊಂದಿಗೆ ಗಾಯತ್ರಿಯನ್ನು ಹೇಳಿ ಬೆರಳ ತುದಿಗಳಿಂದ ನೀರನ್ನು ಬಿಡಿ — ಒಂದೊಂದು ಪಠಣಕ್ಕೆ ಒಂದೊಂದು ಅರ್ಘ್ಯ. ಮಾಧ್ವರು ಅರ್ಘ್ಯ ಕೊಡುವಾಗ ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾರೆ. ಸ್ಮಾರ್ತರ ಮಾಧ್ಯಾಹ್ನಿಕದಲ್ಲಿ ಅನೇಕ ಕೈಪಿಡಿಗಳಂತೆ ಮೊದಲ ಅರ್ಘ್ಯ “ಹಂಸಃ ಶುಚಿಷತ್” ಮಂತ್ರದಿಂದ, ಎರಡನೆಯದು “ಆಕೃಷ್ಣೇನ” ಮಂತ್ರದಿಂದ, ಮೂರನೆಯದು ಗಾಯತ್ರಿಯಿಂದ.',
      verses: [
        {
          when: { tradition: MADHVA },
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nश्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, prompted by Śrī Lakṣmīnārāyaṇa named Savitṛ, who dwells within Mukhyaprāṇa, the consort of Bhāratī, and for his pleasure,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ\nमम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं',
          meaning: {
            en: 'On this auspicious day with the qualities stated before, for the destruction of all my sins and the pleasure of the Supreme Lord,',
            kn: 'ಮೊದಲೇ ಹೇಳಿದ ಗುಣವಿಶೇಷಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು, ನನ್ನ ಸಮಸ್ತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ,',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'प्रातःसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: { en: 'I shall offer the arghya of the morning sandhyā.', kn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
        {
          when: { time: ['midday'] },
          text: 'माध्याह्निकसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: { en: 'I shall offer the arghya of the midday sandhyā.', kn: 'ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
        {
          when: { time: ['evening'] },
          text: 'सायंसन्ध्यार्घ्यप्रदानं करिष्ये ॥',
          meaning: { en: 'I shall offer the arghya of the evening sandhyā.', kn: 'ಸಾಯಂಸಂಧ್ಯೆಯ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'For the Gāyatrī: the seer is Viśvāmitra, the deity is Savitṛ, the metre is Gāyatrī; it is used for offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।\nनृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतम् ॥',
          meaning: {
            en: 'The Sun is the swan dwelling in brightness, the Vasu in the mid-region, the priest at the altar, the guest in the house; he dwells in men, in the highest, in the order of the world and in the sky; born of the waters, of the rays, of truth and of the mountain — he is the cosmic order itself. (First midday arghya.)',
            kn: 'ಸೂರ್ಯನು ಪ್ರಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವ ಹಂಸ, ಅಂತರಿಕ್ಷದಲ್ಲಿರುವ ವಸು, ವೇದಿಯಲ್ಲಿರುವ ಹೋತೃ, ಮನೆಯಲ್ಲಿರುವ ಅತಿಥಿ; ಮನುಷ್ಯರಲ್ಲೂ ಶ್ರೇಷ್ಠಸ್ಥಾನದಲ್ಲೂ ಋತದಲ್ಲೂ ಆಕಾಶದಲ್ಲೂ ನೆಲೆಸಿದ್ದಾನೆ; ಜಲ, ಕಿರಣ, ಸತ್ಯ, ಪರ್ವತಗಳಿಂದ ಹುಟ್ಟಿದವನು — ಅವನೇ ಋತಸ್ವರೂಪ. (ಮಧ್ಯಾಹ್ನದ ಮೊದಲ ಅರ್ಘ್ಯ.)',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'आ कृष्णेन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवनानि पश्यन् ॥',
          meaning: {
            en: 'Moving through the dark space, laying to rest both immortal and mortal, the god Savitṛ comes in his golden chariot, beholding all the worlds. (Second midday arghya.)',
            kn: 'ಕತ್ತಲೆಯ ಅಂತರಿಕ್ಷದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ದೇವತೆಗಳನ್ನೂ ಮನುಷ್ಯರನ್ನೂ ಅವರವರ ಸ್ಥಾನದಲ್ಲಿರಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಚಿನ್ನದ ರಥದಲ್ಲಿ ಎಲ್ಲ ಲೋಕಗಳನ್ನೂ ನೋಡುತ್ತಾ ಬರುತ್ತಾನೆ. (ಮಧ್ಯಾಹ್ನದ ಎರಡನೆಯ ಅರ್ಘ್ಯ.)',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: GAYATRI_MEANING,
        },
      ],
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      title: 'प्रायश्चित्तार्घ्यम्',
      titleEn: 'Kālātikrama-prāyaścitta arghya (if late)',
      note:
        'Only if the proper time has passed — the morning arghya after sunrise, the evening arghya after sunset, the midday arghya well past noon. After the three arghyas, say the saṅkalpa and offer a fourth arghya as expiation. Mādhvas offer it with the Gāyatrī followed by its śiras (आपो ज्योती…). Smārta manuals offer it with the Gāyatrī; many also add the ṛk for the time of day given below.',
      noteKn:
        'ಸರಿಯಾದ ಕಾಲ ಮೀರಿದ್ದರೆ ಮಾತ್ರ — ಬೆಳಗ್ಗೆ ಸೂರ್ಯೋದಯದ ನಂತರ, ಸಂಜೆ ಸೂರ್ಯಾಸ್ತದ ನಂತರ, ಮಧ್ಯಾಹ್ನ ಬಹಳ ತಡವಾದಾಗ. ಮೂರು ಅರ್ಘ್ಯಗಳ ನಂತರ ಸಂಕಲ್ಪ ಹೇಳಿ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯ ಕೊಡಿ. ಮಾಧ್ವರು ಗಾಯತ್ರಿಯನ್ನೂ ಅದರ ಶಿರಸ್ಸನ್ನೂ (“ಆಪೋ ಜ್ಯೋತೀ…”) ಹೇಳಿ ಕೊಡುತ್ತಾರೆ. ಸ್ಮಾರ್ತ ಕೈಪಿಡಿಗಳಲ್ಲಿ ಗಾಯತ್ರಿಯಿಂದ ಕೊಡುತ್ತಾರೆ; ಅನೇಕರು ಕೆಳಗೆ ಕೊಟ್ಟಿರುವ ಆ ಕಾಲದ ಋಕ್ಕನ್ನೂ ಸೇರಿಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'To expiate the fault of letting the proper time pass, I shall offer a fourth arghya.',
            kn: 'ಸರಿಯಾದ ಕಾಲವನ್ನು ಮೀರಿದ ದೋಷಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: MADHVA },
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
          meaning: {
            en: 'The Gāyatrī with Om and the vyāhṛtis, followed by its śiras: Om — he is the waters, the light, the essence, the immortal, Brahman, filling earth, sky and heaven.',
            kn: 'ಓಂಕಾರ, ವ್ಯಾಹೃತಿಗಳೊಂದಿಗೆ ಗಾಯತ್ರೀ ಮಂತ್ರ, ನಂತರ ಅದರ ಶಿರಸ್ಸು: ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ, ಪರಬ್ರಹ್ಮ ಎಲ್ಲವೂ ಅವನೇ; ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗಗಳನ್ನು ವ್ಯಾಪಿಸಿದ್ದಾನೆ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: GAYATRI_MEANING,
        },
        {
          when: { tradition: SMARTA, time: ['morning'] },
          text: 'यदद्य कच्च वृत्रहन्नुदगा अभि सूर्य ।\nसर्वं तदिन्द्र ते वशे ॥',
          meaning: {
            en: 'O slayer of Vṛtra, O Sun, whatever you have risen upon today — all of it, O Indra, is under your control.',
            kn: 'ವೃತ್ರನನ್ನು ಕೊಂದವನೇ, ಓ ಸೂರ್ಯನೇ, ಇಂದು ನೀನು ಯಾವುದರ ಮೇಲೆ ಉದಯಿಸಿರುವೆಯೋ ಅದೆಲ್ಲವೂ, ಓ ಇಂದ್ರನೇ, ನಿನ್ನ ವಶದಲ್ಲಿದೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'प्रातर्देवीमदितिं जोहवीमि मध्यन्दिन उदिता सूर्यस्य ।\nराये मित्रावरुणा सर्वतातेळे तोकाय तनयाय शं योः ॥',
          meaning: {
            en: 'At dawn I call on the goddess Aditi, and at noon when the sun is high; I praise Mitra and Varuṇa everywhere for wealth, and for health and welfare for our children and descendants.',
            kn: 'ಬೆಳಗಿನ ಜಾವದಲ್ಲೂ ಸೂರ್ಯನು ಮೇಲೇರಿದ ಮಧ್ಯಾಹ್ನದಲ್ಲೂ ಅದಿತಿದೇವಿಯನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇನೆ; ಸಂಪತ್ತಿಗಾಗಿಯೂ ಮಕ್ಕಳು ಮೊಮ್ಮಕ್ಕಳ ಆರೋಗ್ಯ, ಕ್ಷೇಮಕ್ಕಾಗಿಯೂ ಮಿತ್ರಾವರುಣರನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'उद्घेदभि श्रुतामघं वृषभं नर्यापसम् ।\nअस्तारमेषि सूर्य ॥',
          meaning: {
            en: 'O Sun, you rise towards Indra, famed for his bounty, the mighty bull whose deeds benefit men, the hurler of weapons.',
            kn: 'ಓ ಸೂರ್ಯನೇ, ದಾನಕ್ಕೆ ಪ್ರಸಿದ್ಧನಾದ, ಬಲಿಷ್ಠನಾದ, ಮನುಷ್ಯರಿಗೆ ಹಿತಕರ ಕಾರ್ಯ ಮಾಡುವ, ಆಯುಧ ಪ್ರಯೋಗಿಸುವ ಇಂದ್ರನ ಕಡೆಗೆ ನೀನು ಉದಯಿಸುತ್ತೀಯೆ.',
          },
        },
      ],
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      title: 'आत्मप्रदक्षिणा',
      titleEn: 'Ātma-pradakṣiṇa (turning round in meditation)',
      note:
        'Take a little water in the right hand, say असावादित्यो ब्रह्म — meditating that the Lord within the sun is Brahman — and turn round once clockwise where you stand, sprinkling the water around you. Then do ācamana twice and sit down.',
      noteKn:
        'ಬಲಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು, ಸೂರ್ಯನೊಳಗಿರುವ ಭಗವಂತನೇ ಪರಬ್ರಹ್ಮನೆಂದು ಧ್ಯಾನಿಸುತ್ತಾ “ಅಸಾವಾದಿತ್ಯೋ ಬ್ರಹ್ಮ” ಎಂದು ಹೇಳಿ, ನಿಂತಲ್ಲೇ ಒಂದು ಸುತ್ತು ಪ್ರದಕ್ಷಿಣೆಯಾಗಿ ತಿರುಗಿ ಸುತ್ತಲೂ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ. ನಂತರ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ ಕುಳಿತುಕೊಳ್ಳಿ.',
      verses: [
        {
          text: 'असावादित्यो ब्रह्म ॥',
          meaning: {
            en: 'That one in the sun is Brahman — the Supreme Lord shining within the solar orb.',
            kn: 'ಸೂರ್ಯನಲ್ಲಿರುವ ಅವನೇ ಬ್ರಹ್ಮ — ಸೂರ್ಯಮಂಡಲದೊಳಗೆ ಬೆಳಗುವ ಪರಮಾತ್ಮ.',
          },
        },
      ],
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      title: 'केशवादितर्पणम्',
      titleEn: 'Keśavādi tarpaṇa (Mādhva)',
      when: { tradition: MADHVA },
      note:
        'After the arghyas, offer tarpaṇa to the Lord’s forms. Take water from the arghya vessel in the uddharaṇe with the left hand, pour it onto the fingers of the right hand and let it run off the fingertips (deva-tīrtha) into the plate, once for each name. In the bright fortnight (śukla pakṣa) use the twelve names from Keśava to Dāmodara; in the dark fortnight (kṛṣṇa pakṣa) the twelve from Saṅkarṣaṇa to Śrī Kṛṣṇa. Manuals say it is not done on Ekādaśī and similar days; follow your family practice.',
      noteKn:
        'ಅರ್ಘ್ಯದ ನಂತರ ಭಗವಂತನ ರೂಪಗಳಿಗೆ ತರ್ಪಣ ಕೊಡಬೇಕು. ಎಡಗೈಯಲ್ಲಿ ಉದ್ಧರಣೆಯಿಂದ ಅರ್ಘ್ಯದ ನೀರು ತೆಗೆದು ಬಲಗೈ ಬೆರಳುಗಳ ಮೇಲೆ ಹಾಕಿ, ಬೆರಳ ತುದಿಗಳಿಂದ (ದೇವತೀರ್ಥ) ತಟ್ಟೆಗೆ ಬಿಡಿ — ಒಂದೊಂದು ನಾಮಕ್ಕೆ ಒಮ್ಮೆ. ಶುಕ್ಲಪಕ್ಷದಲ್ಲಿ ಕೇಶವನಿಂದ ದಾಮೋದರನವರೆಗಿನ ಹನ್ನೆರಡು ನಾಮಗಳು; ಕೃಷ್ಣಪಕ್ಷದಲ್ಲಿ ಸಂಕರ್ಷಣನಿಂದ ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಹನ್ನೆರಡು ನಾಮಗಳು. ಏಕಾದಶಿ ಮುಂತಾದ ದಿನಗಳಲ್ಲಿ ಮಾಡಬಾರದೆಂದು ಕೈಪಿಡಿಗಳು ಹೇಳುತ್ತವೆ; ಮನೆತನದ ಪದ್ಧತಿ ಅನುಸರಿಸಿ.',
      verses: [
        {
          text:
            'केशवं तर्पयामि । नारायणं तर्पयामि । माधवं तर्पयामि ।\nगोविन्दं तर्पयामि । विष्णुं तर्पयामि । मधुसूदनं तर्पयामि ।\nत्रिविक्रमं तर्पयामि । वामनं तर्पयामि । श्रीधरं तर्पयामि ।\nहृषीकेशं तर्पयामि । पद्मनाभं तर्पयामि । दामोदरं तर्पयामि ॥',
          meaning: {
            en: 'Bright fortnight: I offer water to please the Lord as Keśava, Nārāyaṇa, Mādhava, Govinda, Viṣṇu, Madhusūdana, Trivikrama, Vāmana, Śrīdhara, Hṛṣīkeśa, Padmanābha and Dāmodara.',
            kn: 'ಶುಕ್ಲಪಕ್ಷ: ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ, ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ, ತ್ರಿವಿಕ್ರಮ, ವಾಮನ, ಶ್ರೀಧರ, ಹೃಷೀಕೇಶ, ಪದ್ಮನಾಭ, ದಾಮೋದರ ರೂಪಗಳ ಭಗವಂತನನ್ನು ಜಲತರ್ಪಣದಿಂದ ಸಂತೋಷಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'सङ्कर्षणं तर्पयामि । वासुदेवं तर्पयामि । प्रद्युम्नं तर्पयामि ।\nअनिरुद्धं तर्पयामि । पुरुषोत्तमं तर्पयामि । अधोक्षजं तर्पयामि ।\nनारसिंहं तर्पयामि । अच्युतं तर्पयामि । जनार्दनं तर्पयामि ।\nउपेन्द्रं तर्पयामि । हरिं तर्पयामि । श्रीकृष्णं तर्पयामि ॥',
          meaning: {
            en: 'Dark fortnight: I offer water to please the Lord as Saṅkarṣaṇa, Vāsudeva, Pradyumna, Aniruddha, Puruṣottama, Adhokṣaja, Nārasiṃha, Acyuta, Janārdana, Upendra, Hari and Śrī Kṛṣṇa.',
            kn: 'ಕೃಷ್ಣಪಕ್ಷ: ಸಂಕರ್ಷಣ, ವಾಸುದೇವ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧ, ಪುರುಷೋತ್ತಮ, ಅಧೋಕ್ಷಜ, ನಾರಸಿಂಹ, ಅಚ್ಯುತ, ಜನಾರ್ದನ, ಉಪೇಂದ್ರ, ಹರಿ, ಶ್ರೀಕೃಷ್ಣ ರೂಪಗಳ ಭಗವಂತನನ್ನು ಜಲತರ್ಪಣದಿಂದ ಸಂತೋಷಪಡಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सन्ध्याङ्गतर्पणम्',
      titleEn: 'Sandhyāṅga tarpaṇa (Smārta, where practised)',
      when: { tradition: SMARTA },
      note:
        'Practised in some Ṛgvedin Smārta families (it is not in every Karnataka manual). Pour water from the right hand into the plate once with each name, then do ācamana.',
      noteKn:
        'ಕೆಲವು ಋಗ್ವೇದಿ ಸ್ಮಾರ್ತ ಮನೆತನಗಳಲ್ಲಿ ಮಾತ್ರ ಆಚರಣೆಯಲ್ಲಿದೆ (ಎಲ್ಲ ಕರ್ನಾಟಕದ ಕೈಪಿಡಿಗಳಲ್ಲೂ ಇಲ್ಲ). ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಬಲಗೈಯಿಂದ ತಟ್ಟೆಗೆ ನೀರು ಬಿಟ್ಟು, ನಂತರ ಆಚಮನ ಮಾಡಿ.',
      verses: [
        {
          when: { time: ['morning'] },
          text: 'सन्ध्यां तर्पयामि । गायत्रीं तर्पयामि ।\nब्राह्मीं तर्पयामि । निमृजीं तर्पयामि ॥',
          meaning: {
            en: 'I offer water to Sandhyā, to Gāyatrī, to Brāhmī and to Nimṛjī, the purifying one — the deity of the morning sandhyā.',
            kn: 'ಸಂಧ್ಯಾ, ಗಾಯತ್ರೀ, ಬ್ರಾಹ್ಮೀ, ಶುದ್ಧಿಗೊಳಿಸುವ ನಿಮೃಜೀ — ಪ್ರಾತಃಸಂಧ್ಯೆಯ ದೇವತೆಗೆ ತರ್ಪಣ ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'सन्ध्यां तर्पयामि । सावित्रीं तर्पयामि ।\nरौद्रीं तर्पयामि । निमृजीं तर्पयामि ॥',
          meaning: {
            en: 'I offer water to Sandhyā, to Sāvitrī, to Raudrī and to Nimṛjī, the purifying one — the deity of the midday sandhyā.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ರೌದ್ರೀ, ಶುದ್ಧಿಗೊಳಿಸುವ ನಿಮೃಜೀ — ಮಧ್ಯಾಹ್ನದ ಸಂಧ್ಯಾದೇವತೆಗೆ ತರ್ಪಣ ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'सन्ध्यां तर्पयामि । सरस्वतीं तर्पयामि ।\nवैष्णवीं तर्पयामि । निमृजीं तर्पयामि ॥',
          meaning: {
            en: 'I offer water to Sandhyā, to Sarasvatī, to Vaiṣṇavī and to Nimṛjī, the purifying one — the deity of the evening sandhyā.',
            kn: 'ಸಂಧ್ಯಾ, ಸರಸ್ವತೀ, ವೈಷ್ಣವೀ, ಶುದ್ಧಿಗೊಳಿಸುವ ನಿಮೃಜೀ — ಸಾಯಂಸಂಧ್ಯೆಯ ದೇವತೆಗೆ ತರ್ಪಣ ಕೊಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      title: 'भूतोच्चाटनम् आसनशुद्धिश्च',
      titleEn: 'Bhūtoccāṭana and āsana-śuddhi (before japa)',
      note:
        'Before sitting for japa, recite अपसर्पन्तु… to send away obstructing beings, sprinkling a little water around you (some also throw a few grains of akṣata). Then sprinkle the seat, touch it with the right hand, recite the prayer to the Earth, bow to the seat (अनन्तासनाय नमः, कूर्मासनाय नमः) and sit down firmly, facing as described in step 1.',
      noteKn:
        'ಜಪಕ್ಕೆ ಕುಳಿತುಕೊಳ್ಳುವ ಮೊದಲು, ವಿಘ್ನಕಾರಕ ಭೂತಗಳನ್ನು ಓಡಿಸಲು “ಅಪಸರ್ಪಂತು” ಹೇಳುತ್ತಾ ಸುತ್ತಲೂ ಸ್ವಲ್ಪ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ (ಕೆಲವರು ಅಕ್ಷತೆಯನ್ನೂ ಎಸೆಯುತ್ತಾರೆ). ನಂತರ ಆಸನಕ್ಕೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ಬಲಗೈಯಿಂದ ಅದನ್ನು ಮುಟ್ಟಿ ಭೂದೇವಿಯ ಪ್ರಾರ್ಥನೆ ಹೇಳಿ, “ಅನಂತಾಸನಾಯ ನಮಃ, ಕೂರ್ಮಾಸನಾಯ ನಮಃ” ಎಂದು ಆಸನಕ್ಕೆ ನಮಸ್ಕರಿಸಿ, ಮೊದಲ ಹಂತದಲ್ಲಿ ಹೇಳಿದ ದಿಕ್ಕಿಗೆ ಮುಖಮಾಡಿ ಸ್ಥಿರವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಿ.',
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
            en: 'For the mantra “pṛthvi”: the seer is Merupṛṣṭha, the deity is Kūrma (the Lord as the tortoise), the metre is Sutala; it is used for the seat.',
            kn: '“ಪೃಥ್ವಿ” ಮಂತ್ರಕ್ಕೆ ಮೇರುಪೃಷ್ಠ ಋಷಿ, ಕೂರ್ಮ (ಕೂರ್ಮರೂಪಿ ಭಗವಂತ) ದೇವತೆ, ಸುತಲ ಛಂದಸ್ಸು; ಆಸನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'पृथ्वि त्वया धृता लोका देवि त्वं विष्णुना धृता ।\nत्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥',
          meaning: {
            en: 'O Earth, the worlds are held up by you, and you, O Goddess, are held up by Viṣṇu. Hold me up too, O Goddess, and make this seat pure.',
            kn: 'ಓ ಭೂದೇವಿ, ಲೋಕಗಳನ್ನು ನೀನು ಧರಿಸಿರುವೆ; ನಿನ್ನನ್ನು ಶ್ರೀವಿಷ್ಣುವು ಧರಿಸಿದ್ದಾನೆ. ಓ ದೇವಿ, ನನ್ನನ್ನೂ ಧರಿಸು, ಈ ಆಸನವನ್ನು ಪವಿತ್ರಗೊಳಿಸು.',
          },
        },
        {
          text: 'अनन्तासनाय नमः । कूर्मासनाय नमः ॥',
          meaning: {
            en: 'Salutations to the seat that is Ananta; salutations to the seat that is Kūrma.',
            kn: 'ಅನಂತನೆಂಬ ಆಸನಕ್ಕೆ ನಮಸ್ಕಾರ; ಕೂರ್ಮನೆಂಬ ಆಸನಕ್ಕೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्र्यावाहनम्',
      titleEn: 'Gāyatrī āvāhana (invocation)',
      note:
        'Seated, with folded hands, invoke Gāyatrī. Say the praṇava viniyoga, then आयातु… and ओजोऽसि…, and the āvāhana names. With the last passage (ṛṣi, chandas, devatā and the limbs of Gāyatrī) touch, as you name them: the mouth (Agni), the head (Brahmā), the heart (Viṣṇu), the tuft of hair (Rudra), and the feet / ground (Pṛthivī).',
      noteKn:
        'ಕುಳಿತು ಕೈಮುಗಿದು ಗಾಯತ್ರಿಯನ್ನು ಆಹ್ವಾನಿಸಿ. ಪ್ರಣವದ ವಿನಿಯೋಗ, ನಂತರ “ಆಯಾತು”, “ಓಜೋಽಸಿ” ಮತ್ತು ಆವಾಹನ ನಾಮಗಳನ್ನು ಹೇಳಿ. ಕೊನೆಯ ಭಾಗದಲ್ಲಿ (ಋಷಿ, ಛಂದಸ್ಸು, ದೇವತೆ ಮತ್ತು ಗಾಯತ್ರಿಯ ಅಂಗಗಳು) ಹೆಸರು ಹೇಳುವಾಗ ಕ್ರಮವಾಗಿ ಬಾಯಿ (ಅಗ್ನಿ), ತಲೆ (ಬ್ರಹ್ಮ), ಹೃದಯ (ವಿಷ್ಣು), ಶಿಖೆ (ರುದ್ರ), ಪಾದ / ನೆಲ (ಪೃಥಿವೀ) ಮುಟ್ಟಿಕೊಳ್ಳಿ.',
      verses: [
        {
          text: 'ओमित्येकाक्षरं ब्रह्म । अग्निर्देवता । ब्रह्म इत्यार्षम् ।\nगायत्रं छन्दम् । परमात्मं सरूपम् । सायुज्यं विनियोगम् ॥',
          meaning: {
            en: 'Om, the single syllable, is Brahman; its deity is Agni, its seer is Brahman, its metre Gāyatrī; its form is the Supreme Self, and it is used for union with him.',
            kn: 'ಓಂ ಎಂಬ ಏಕಾಕ್ಷರವೇ ಬ್ರಹ್ಮ; ಅದಕ್ಕೆ ಅಗ್ನಿ ದೇವತೆ, ಬ್ರಹ್ಮ ಋಷಿ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಪರಮಾತ್ಮನೇ ಅದರ ಸ್ವರೂಪ; ಅವನ ಸಾನ್ನಿಧ್ಯಕ್ಕಾಗಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text:
            'आयातु वरदा देवी अक्षरं ब्रह्मसम्मितम् ।\nगायत्री छन्दसां मातेदं ब्रह्म जुषस्व मे ॥\nयदह्नात्कुरुते पापं तदह्नात्प्रतिमुच्यते ।\nयद्रात्रियात्कुरुते पापं तद्रात्रियात्प्रतिमुच्यते ।\nसर्ववर्णे महादेवि सन्ध्याविद्ये सरस्वति ॥',
          meaning: {
            en: 'May the boon-giving Goddess come, imperishable, equal to the Veda. O Gāyatrī, mother of the metres, accept this prayer of mine. The sin one commits by day is released that very day, the sin of the night that very night. O great Goddess of all syllables, knowledge of the sandhyā, Sarasvatī!',
            kn: 'ವರವನ್ನು ಕೊಡುವ, ಅಕ್ಷರಸ್ವರೂಪಳೂ ವೇದಕ್ಕೆ ಸಮಾನಳೂ ಆದ ದೇವಿಯು ಬರಲಿ. ಛಂದಸ್ಸುಗಳ ತಾಯಿಯಾದ ಓ ಗಾಯತ್ರೀ, ನನ್ನ ಈ ಪ್ರಾರ್ಥನೆಯನ್ನು ಸ್ವೀಕರಿಸು. ಹಗಲಿನಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಅಂದೇ, ರಾತ್ರಿಯಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಆ ರಾತ್ರಿಯೇ ಪರಿಹಾರವಾಗುತ್ತದೆ. ಎಲ್ಲ ಅಕ್ಷರಗಳ ಸ್ವರೂಪಳಾದ ಮಹಾದೇವಿ, ಸಂಧ್ಯಾವಿದ್ಯೆಯೇ, ಸರಸ್ವತೀ!',
          },
        },
        {
          text:
            'ओजोऽसि सहोऽसि बलमसि भ्राजोऽसि ।\nदेवानां धामनामासि विश्वमसि विश्वायुः ।\nसर्वमसि सर्वायुरभिभूरोम् ॥',
          meaning: {
            en: 'You are vigour, you are endurance, you are strength, you are radiance; you are the abode and the name of the gods; you are the universe and the life of the universe; you are all and the life of all; you are the conqueror — Om.',
            kn: 'ನೀನು ಓಜಸ್ಸು, ಸಹನೆ, ಬಲ, ತೇಜಸ್ಸು; ದೇವತೆಗಳ ನೆಲೆಯೂ ನಾಮವೂ ನೀನೇ; ವಿಶ್ವವೂ ವಿಶ್ವದ ಆಯುಸ್ಸೂ ನೀನೇ; ಎಲ್ಲವೂ ಎಲ್ಲರ ಜೀವವೂ ನೀನೇ; ಎಲ್ಲವನ್ನೂ ಗೆಲ್ಲುವವನು ನೀನೇ — ಓಂ.',
          },
        },
        {
          text: 'गायत्रीमावाहयामि । सावित्रीमावाहयामि ।\nसरस्वतीमावाहयामि । छन्दर्षीनावाहयामि ।\nश्रियमावाहयामि । बलमावाहयामि ॥',
          meaning: {
            en: 'I invoke Gāyatrī, Sāvitrī and Sarasvatī; I invoke the metres and seers, Śrī (Lakṣmī) and Bala (strength).',
            kn: 'ಗಾಯತ್ರೀ, ಸಾವಿತ್ರೀ, ಸರಸ್ವತಿಯರನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ; ಛಂದಸ್ಸುಗಳನ್ನೂ ಋಷಿಗಳನ್ನೂ, ಶ್ರೀ (ಲಕ್ಷ್ಮೀ) ಮತ್ತು ಬಲವನ್ನೂ ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'गायत्र्या गायत्री छन्दः । विश्वामित्र ऋषिः । सविता देवता ।\nअग्निर्मुखम् । ब्रह्मा शिरः । विष्णुर्हृदयम् । रुद्रः शिखा । पृथिवी योनिः ।\nप्राणापानव्यानोदानसमाना सप्राणा श्वेतवर्णा साङ्ख्यायनसगोत्रा\nगायत्री चतुर्विंशत्यक्षरा त्रिपदा षट्कुक्षिः पञ्चशीर्षोपनयने विनियोगः ॥',
          meaning: {
            en: 'Of the Gāyatrī the metre is Gāyatrī, the seer Viśvāmitra, the deity Savitṛ. Agni is her mouth, Brahmā her head, Viṣṇu her heart, Rudra her tuft, the Earth her source. She has the five vital breaths, is white in colour, of the Sāṅkhyāyana gotra, of twenty-four syllables, three feet, six divisions and five heads; she is used at the upanayana (and in daily japa).',
            kn: 'ಗಾಯತ್ರಿಗೆ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ. ಅಗ್ನಿಯೇ ಅವಳ ಮುಖ, ಬ್ರಹ್ಮನೇ ತಲೆ, ವಿಷ್ಣುವೇ ಹೃದಯ, ರುದ್ರನೇ ಶಿಖೆ, ಪೃಥಿವಿಯೇ ಉತ್ಪತ್ತಿಸ್ಥಾನ. ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಉದಾನ, ಸಮಾನಗಳೆಂಬ ಐದು ಪ್ರಾಣಗಳಿಂದ ಕೂಡಿದವಳು, ಬಿಳಿಯ ಬಣ್ಣದವಳು, ಸಾಂಖ್ಯಾಯನ ಗೋತ್ರದವಳು, ಇಪ್ಪತ್ತನಾಲ್ಕು ಅಕ್ಷರ, ಮೂರು ಪಾದ, ಆರು ಕುಕ್ಷಿ, ಐದು ಶಿರಸ್ಸುಗಳುಳ್ಳವಳು; ಉಪನಯನದಲ್ಲಿ (ಮತ್ತು ನಿತ್ಯಜಪದಲ್ಲಿ) ವಿನಿಯೋಗ.',
          },
        },
      ],
    },
    // 16 ────────────────────────────────────────────────────────────
    {
      title: 'जपसङ्कल्पः',
      titleEn: 'Prāṇāyāma and japa-saṅkalpa (Smārta)',
      when: { tradition: SMARTA },
      note:
        'Do ācamana and three prāṇāyāmas (step 4), then say this saṅkalpa with the hands on the right thigh and let a ladle of water fall into the plate.',
      noteKn:
        'ಆಚಮನ ಮತ್ತು ಮೂರು ಪ್ರಾಣಾಯಾಮ (ನಾಲ್ಕನೆಯ ಹಂತ) ಮಾಡಿ, ಕೈಗಳನ್ನು ಬಲ ತೊಡೆಯ ಮೇಲಿಟ್ಟು ಈ ಸಂಕಲ್ಪ ಹೇಳಿ, ಒಂದು ಉದ್ಧರಣೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      verses: [
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
          meaning: { en: 'I shall do japa of the Gāyatrī mantra, as part of the morning sandhyā, as much as I am able.', kn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅಂಗವಾಗಿ ಯಥಾಶಕ್ತಿ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
        {
          when: { time: ['midday'] },
          text: 'माध्याह्निकसन्ध्याङ्ग यथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥',
          meaning: { en: 'I shall do japa of the Gāyatrī mantra, as part of the midday sandhyā, as much as I am able.', kn: 'ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೆಯ ಅಂಗವಾಗಿ ಯಥಾಶಕ್ತಿ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
        {
          when: { time: ['evening'] },
          text: 'सायंसन्ध्याङ्ग यथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥',
          meaning: { en: 'I shall do japa of the Gāyatrī mantra, as part of the evening sandhyā, as much as I am able.', kn: 'ಸಾಯಂಸಂಧ್ಯೆಯ ಅಂಗವಾಗಿ ಯಥಾಶಕ್ತಿ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.' },
        },
      ],
    },
    // 17 ────────────────────────────────────────────────────────────
    {
      title: 'करन्यासः अङ्गन्यासश्च',
      titleEn: 'Kara-nyāsa and aṅga-nyāsa (Mādhva)',
      when: { tradition: MADHVA },
      note:
        'First do ācamana and three prāṇāyāmas (step 4). Kara-nyāsa: with each line touch the named finger with the thumb (and the thumb with the index finger), and at the last line rub the palms and backs of the hands together. Aṅga-nyāsa: touch the heart, the top of the head and the tuft with the right hand; cross the arms to touch both shoulders (kavaca); touch both eyes; for astrāya phaṭ circle the right hand round the head and clap; with the last line snap the fingers around you in the ten directions (digbandha).',
      noteKn:
        'ಮೊದಲು ಆಚಮನ ಮತ್ತು ಮೂರು ಪ್ರಾಣಾಯಾಮ (ನಾಲ್ಕನೆಯ ಹಂತ) ಮಾಡಿ. ಕರನ್ಯಾಸ: ಒಂದೊಂದು ವಾಕ್ಯಕ್ಕೂ ಹೆಸರಿಸಿದ ಬೆರಳನ್ನು ಹೆಬ್ಬೆರಳಿನಿಂದ (ಹೆಬ್ಬೆರಳನ್ನು ತೋರುಬೆರಳಿನಿಂದ) ಮುಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯಕ್ಕೆ ಅಂಗೈ ಮತ್ತು ಕೈಹಿಂಭಾಗಗಳನ್ನು ಉಜ್ಜಿ. ಅಂಗನ್ಯಾಸ: ಬಲಗೈಯಿಂದ ಹೃದಯ, ನೆತ್ತಿ, ಶಿಖೆಯನ್ನು ಮುಟ್ಟಿ; ಕೈಗಳನ್ನು ಅಡ್ಡವಾಗಿಸಿ ಎರಡೂ ಭುಜ ಮುಟ್ಟಿ (ಕವಚ); ಎರಡೂ ಕಣ್ಣು ಮುಟ್ಟಿ; “ಅಸ್ತ್ರಾಯ ಫಟ್” ಎನ್ನುವಾಗ ಬಲಗೈಯನ್ನು ತಲೆಯ ಸುತ್ತ ತಿರುಗಿಸಿ ಚಪ್ಪಾಳೆ ತಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯದಿಂದ ಹತ್ತು ದಿಕ್ಕುಗಳಲ್ಲೂ ಚಿಟಿಕೆ ಹೊಡೆಯಿರಿ (ದಿಗ್ಬಂಧ).',
      verses: [
        {
          text:
            'ॐ तत्सवितुरङ्गुष्ठाभ्यां नमः ।\nॐ वरेण्यं तर्जनीभ्यां नमः ।\nॐ भर्गो देवस्य मध्यमाभ्यां नमः ।\nॐ धीमहि अनामिकाभ्यां नमः ।\nॐ धियो यो नः कनिष्ठिकाभ्यां नमः ।\nॐ प्रचोदयात् करतलकरपृष्ठाभ्यां नमः ॥',
          meaning: {
            en: 'The six parts of the Gāyatrī are placed, with salutation, on the thumbs, index fingers, middle fingers, ring fingers, little fingers, and the palms and backs of the hands.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು ನಮಸ್ಕಾರಪೂರ್ವಕವಾಗಿ ಹೆಬ್ಬೆರಳು, ತೋರುಬೆರಳು, ನಡುಬೆರಳು, ಉಂಗುರದ ಬೆರಳು, ಕಿರುಬೆರಳು ಮತ್ತು ಅಂಗೈ–ಕೈಹಿಂಭಾಗಗಳಲ್ಲಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'ॐ तत्सवितुर्हृदयाय नमः ।\nॐ वरेण्यं शिरसे स्वाहा ।\nॐ भर्गो देवस्य शिखायै वषट् ।\nॐ धीमहि कवचाय हुम् ।\nॐ धियो यो नः नेत्राभ्यां वौषट् ।\nॐ प्रचोदयात् अस्त्राय फट् ।\nॐ भूर्भुवः स्वरोमिति दिग्बन्धः ॥',
          meaning: {
            en: 'The six parts of the Gāyatrī are placed on the heart, the head, the tuft, the shoulders as armour, the eyes, and as a weapon around oneself; with “bhūr bhuvaḥ svar om” the directions are sealed.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು ಹೃದಯ, ತಲೆ, ಶಿಖೆ, ಕವಚವಾಗಿ ಭುಜಗಳು, ಕಣ್ಣುಗಳು ಮತ್ತು ಸುತ್ತಲೂ ಅಸ್ತ್ರವಾಗಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ; “ಭೂರ್ಭುವಃ ಸ್ವರೋಂ” ಎಂದು ದಿಕ್ಕುಗಳನ್ನು ಬಂಧಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'करन्यासः अङ्गन्यासश्च',
      titleEn: 'Kara-nyāsa and aṅga-nyāsa (Smārta)',
      when: { tradition: SMARTA },
      note:
        'Kara-nyāsa: with each line touch the named finger with the thumb (the thumb with the index finger), and at the last line rub the palms and backs of the hands together. Aṅga-nyāsa: touch the heart, the top of the head and the tuft; touch the shoulders crosswise (kavaca); touch the eyes (and the middle of the brow); for astrāya phaṭ circle the right hand round the head and clap; with the last line snap the fingers in the ten directions (digbandha). The same nyāsa is repeated after japa, ending with “digvimokaḥ” instead of “digbandhaḥ”.',
      noteKn:
        'ಕರನ್ಯಾಸ: ಒಂದೊಂದು ವಾಕ್ಯಕ್ಕೂ ಹೆಸರಿಸಿದ ಬೆರಳನ್ನು ಹೆಬ್ಬೆರಳಿನಿಂದ (ಹೆಬ್ಬೆರಳನ್ನು ತೋರುಬೆರಳಿನಿಂದ) ಮುಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯಕ್ಕೆ ಅಂಗೈ ಮತ್ತು ಕೈಹಿಂಭಾಗಗಳನ್ನು ಉಜ್ಜಿ. ಅಂಗನ್ಯಾಸ: ಹೃದಯ, ನೆತ್ತಿ, ಶಿಖೆ ಮುಟ್ಟಿ; ಅಡ್ಡಗೈಯಿಂದ ಭುಜಗಳನ್ನು ಮುಟ್ಟಿ (ಕವಚ); ಕಣ್ಣುಗಳನ್ನು (ಮತ್ತು ಹುಬ್ಬುಗಳ ಮಧ್ಯವನ್ನು) ಮುಟ್ಟಿ; “ಅಸ್ತ್ರಾಯ ಫಟ್” ಎನ್ನುವಾಗ ಬಲಗೈಯನ್ನು ತಲೆಯ ಸುತ್ತ ತಿರುಗಿಸಿ ಚಪ್ಪಾಳೆ ತಟ್ಟಿ; ಕೊನೆಯ ವಾಕ್ಯದಿಂದ ಹತ್ತು ದಿಕ್ಕುಗಳಲ್ಲಿ ಚಿಟಿಕೆ ಹೊಡೆಯಿರಿ (ದಿಗ್ಬಂಧ). ಜಪದ ನಂತರ ಇದೇ ನ್ಯಾಸವನ್ನು ಮತ್ತೆ ಮಾಡಿ, ಕೊನೆಯಲ್ಲಿ “ದಿಗ್ಬಂಧಃ” ಬದಲು “ದಿಗ್ವಿಮೋಕಃ” ಎನ್ನಬೇಕು.',
      verses: [
        {
          text:
            'तत्सवितुः ब्रह्मात्मने अङ्गुष्ठाभ्यां नमः ।\nवरेण्यं विष्ण्वात्मने तर्जनीभ्यां नमः ।\nभर्गो देवस्य रुद्रात्मने मध्यमाभ्यां नमः ।\nधीमहि सत्यात्मने अनामिकाभ्यां नमः ।\nधियो यो नः ज्ञानात्मने कनिष्ठिकाभ्यां नमः ।\nप्रचोदयात् सर्वात्मने करतलकरपृष्ठाभ्यां नमः ॥',
          meaning: {
            en: 'The six parts of the Gāyatrī — as Brahmā, Viṣṇu, Rudra, Truth, Knowledge and the Self of all — are placed on the thumbs, index, middle, ring and little fingers, and the palms and backs of the hands.',
            kn: 'ಗಾಯತ್ರಿಯ ಆರು ಭಾಗಗಳನ್ನು — ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಸತ್ಯ, ಜ್ಞಾನ, ಸರ್ವಾತ್ಮ ಸ್ವರೂಪವಾಗಿ — ಹೆಬ್ಬೆರಳು, ತೋರುಬೆರಳು, ನಡುಬೆರಳು, ಉಂಗುರದ ಬೆರಳು, ಕಿರುಬೆರಳು ಮತ್ತು ಅಂಗೈ–ಕೈಹಿಂಭಾಗಗಳಲ್ಲಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'तत्सवितुः ब्रह्मात्मने हृदयाय नमः ।\nवरेण्यं विष्ण्वात्मने शिरसे स्वाहा ।\nभर्गो देवस्य रुद्रात्मने शिखायै वषट् ।\nधीमहि सत्यात्मने कवचाय हुम् ।\nधियो यो नः ज्ञानात्मने नेत्रत्रयाय वौषट् ।\nप्रचोदयात् सर्वात्मने अस्त्राय फट् ।\nभूर्भुवः स्वरोमिति दिग्बन्धः ॥',
          meaning: {
            en: 'The same six parts are placed on the heart, head, tuft, shoulders as armour, the three eyes, and as a weapon around oneself; with “bhūr bhuvaḥ svar om” the directions are sealed.',
            kn: 'ಅದೇ ಆರು ಭಾಗಗಳನ್ನು ಹೃದಯ, ತಲೆ, ಶಿಖೆ, ಕವಚವಾಗಿ ಭುಜಗಳು, ಮೂರು ಕಣ್ಣುಗಳು ಮತ್ತು ಸುತ್ತಲೂ ಅಸ್ತ್ರವಾಗಿ ನ್ಯಾಸಮಾಡುತ್ತೇನೆ; “ಭೂರ್ಭುವಃ ಸ್ವರೋಂ” ಎಂದು ದಿಕ್ಕುಗಳನ್ನು ಬಂಧಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 18 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्र्याह्वानम्',
      titleEn: 'Gāyatrī-āhvāna for japa (Mādhva)',
      when: { tradition: MADHVA },
      note: 'With folded hands, invite Gāyatrī to be present for the japa.',
      noteKn: 'ಕೈಮುಗಿದು, ಜಪಕ್ಕೆ ಸನ್ನಿಹಿತಳಾಗಲು ಗಾಯತ್ರಿಯನ್ನು ಆಹ್ವಾನಿಸಿ.',
      verses: [
        {
          text: 'आगच्छ वरदे देवि जपे मे सन्निधौ भव ।\nगायन्तं त्रायसे यस्माद्गायत्री त्वं ततः स्मृता ॥',
          meaning: {
            en: 'Come, boon-giving Goddess, be present in my japa. Because you protect the one who chants you, you are known as Gāyatrī.',
            kn: 'ವರವನ್ನು ಕೊಡುವ ಓ ದೇವಿ, ಬಾ, ನನ್ನ ಜಪದಲ್ಲಿ ಸನ್ನಿಹಿತಳಾಗು. ನಿನ್ನನ್ನು ಗಾಯನ ಮಾಡುವವನನ್ನು ರಕ್ಷಿಸುವುದರಿಂದ ನೀನು ಗಾಯತ್ರೀ ಎಂದು ಪ್ರಸಿದ್ಧಳಾಗಿರುವೆ.',
          },
        },
      ],
    },
    // 19 ────────────────────────────────────────────────────────────
    {
      title: 'ध्यानम्',
      titleEn: 'Gāyatrī dhyāna',
      note:
        'Before japa meditate on the deity of the Gāyatrī. Mādhvas meditate on Śrī Nārāyaṇa seated on a lotus in the middle of the solar orb (the Sadācāra-smṛti explains that Gāyatrī in the morning, Sāvitrī at midday and Sarasvatī in the evening are all names of Nārāyaṇa). Smārtas usually meditate on the five-faced Goddess Gāyatrī (मुक्ताविद्रुम…), and many also recite ध्येयः सदा….',
      noteKn:
        'ಜಪಕ್ಕೆ ಮೊದಲು ಗಾಯತ್ರಿಯ ದೇವತೆಯನ್ನು ಧ್ಯಾನಿಸಿ. ಮಾಧ್ವರು ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿ ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ ಶ್ರೀನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾರೆ (ಬೆಳಗ್ಗೆ ಗಾಯತ್ರೀ, ಮಧ್ಯಾಹ್ನ ಸಾವಿತ್ರೀ, ಸಂಜೆ ಸರಸ್ವತೀ — ಈ ಮೂರೂ ನಾರಾಯಣನದೇ ಹೆಸರುಗಳು ಎಂದು ಸದಾಚಾರಸ್ಮೃತಿ ವಿವರಿಸುತ್ತದೆ). ಸ್ಮಾರ್ತರು ಸಾಮಾನ್ಯವಾಗಿ ಐದು ಮುಖಗಳ ಗಾಯತ್ರೀದೇವಿಯನ್ನು (“ಮುಕ್ತಾವಿದ್ರುಮ…”) ಧ್ಯಾನಿಸುತ್ತಾರೆ; ಅನೇಕರು “ಧ್ಯೇಯಃ ಸದಾ…” ಶ್ಲೋಕವನ್ನೂ ಹೇಳುತ್ತಾರೆ.',
      verses: [
        {
          when: { tradition: SMARTA },
          text:
            'मुक्ताविद्रुमहेमनीलधवलच्छायैर्मुखैस्त्रीक्षणैः\nयुक्तामिन्दुनिबद्धरत्नमुकुटां तत्त्वार्थवर्णात्मिकाम् ।\nगायत्रीं वरदाभयाङ्कुशकशाः शुभ्रं कपालं गदां\nशङ्खं चक्रमथारविन्दयुगलं हस्तैर्वहन्तीं भजे ॥',
          meaning: {
            en: 'I worship Gāyatrī, whose five faces shine with the hues of pearl, coral, gold, sapphire and white, each with three eyes; whose jewelled crown bears the crescent moon; whose syllables are the essence of truth; who holds in her hands the gestures of boon and fearlessness, the goad, the whip, a white skull-bowl, the mace, the conch, the discus and a pair of lotuses.',
            kn: 'ಮುತ್ತು, ಹವಳ, ಚಿನ್ನ, ನೀಲಮಣಿ, ಬಿಳುಪಿನ ಕಾಂತಿಯುಳ್ಳ, ಮೂರು ಕಣ್ಣುಗಳ ಐದು ಮುಖಗಳಿಂದ ಕೂಡಿದ, ಚಂದ್ರಕಲೆಯುಳ್ಳ ರತ್ನಕಿರೀಟ ಧರಿಸಿದ, ತತ್ತ್ವಾರ್ಥವೇ ಅಕ್ಷರರೂಪವಾದ, ವರ–ಅಭಯ ಮುದ್ರೆಗಳು, ಅಂಕುಶ, ಚಾವಟಿ, ಬಿಳಿಯ ಕಪಾಲ, ಗದೆ, ಶಂಖ, ಚಕ್ರ ಮತ್ತು ಎರಡು ಕಮಲಗಳನ್ನು ಕೈಗಳಲ್ಲಿ ಹಿಡಿದಿರುವ ಗಾಯತ್ರೀದೇವಿಯನ್ನು ಭಜಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'ध्येयः सदा सवितृमण्डलमध्यवर्ती\nनारायणः सरसिजासनसन्निविष्टः ।\nकेयूरवान् मकरकुण्डलवान् किरीटी\nहारी हिरण्मयवपुर्धृतशङ्खचक्रः ॥',
          meaning: {
            en: 'Always to be meditated upon is Nārāyaṇa in the centre of the sun’s orb, seated on a lotus, wearing armlets, fish-shaped earrings, a crown and necklaces, golden of form, holding the conch and the discus.',
            kn: 'ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿರುವ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ಕೇಯೂರ, ಮಕರಕುಂಡಲ, ಕಿರೀಟ, ಹಾರಗಳನ್ನು ಧರಿಸಿರುವ, ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವ ದೇಹವುಳ್ಳ, ಶಂಖಚಕ್ರಧಾರಿಯಾದ ಶ್ರೀನಾರಾಯಣನನ್ನು ಸದಾ ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
      ],
    },
    // 20 ────────────────────────────────────────────────────────────
    {
      title: 'जपसङ्कल्पः',
      titleEn: 'Japa-saṅkalpa (Mādhva)',
      when: { tradition: MADHVA },
      note: 'Say this resolve just before beginning the japa, and let a ladle of water fall into the plate.',
      noteKn: 'ಜಪ ಆರಂಭಿಸುವ ಸ್ವಲ್ಪ ಮೊದಲು ಈ ಸಂಕಲ್ಪ ಹೇಳಿ, ಒಂದು ಉದ್ಧರಣೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      verses: [
        {
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'Prompted by Śrī Lakṣmīnārāyaṇa named Savitṛ, who dwells within Mukhyaprāṇa, the consort of Bhāratī, and for his pleasure, I shall do japa of the Gāyatrī mantra as much as I am able.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಯಥಾಶಕ್ತಿ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 21 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gāyatrī japa',
      note:
        'Recite the Gāyatrī 108 times (best), 28 times (middle) or at least 10 times, keeping count on the finger joints of the right hand or with a mālā, the counting hand covered with the upper cloth. Morning: stand facing east until the sun has risen (after that you may sit), hands held near the navel. Midday: sit facing east or north, hands at the chest. Evening: sit facing west, hands at the level of the nose. Recite without moving the lips if you can (mānasa), or in a whisper (upāṃśu), dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Mādhvas then do the aṣṭākṣara japa (next step).',
      noteKn:
        'ಗಾಯತ್ರಿಯನ್ನು ೧೦೮ ಬಾರಿ (ಉತ್ತಮ), ೨೮ ಬಾರಿ (ಮಧ್ಯಮ) ಅಥವಾ ಕನಿಷ್ಠ ೧೦ ಬಾರಿ ಜಪಿಸಿ; ಬಲಗೈ ಬೆರಳ ಗೆರೆಗಳಲ್ಲಿ ಅಥವಾ ಜಪಮಾಲೆಯಿಂದ ಎಣಿಸಿ, ಎಣಿಸುವ ಕೈಯನ್ನು ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿಕೊಳ್ಳಿ. ಬೆಳಗ್ಗೆ: ಸೂರ್ಯೋದಯವಾಗುವವರೆಗೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ನಿಂತು (ನಂತರ ಕುಳಿತುಕೊಳ್ಳಬಹುದು), ಕೈಗಳು ನಾಭಿಯ ಬಳಿ. ಮಧ್ಯಾಹ್ನ: ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ ಕುಳಿತು, ಕೈಗಳು ಎದೆಯ ಬಳಿ. ಸಂಜೆ: ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಕೈಗಳು ಮೂಗಿನ ಎತ್ತರದಲ್ಲಿ. ಸಾಧ್ಯವಾದರೆ ತುಟಿ ಅಲುಗಿಸದೆ ಮನಸ್ಸಿನಲ್ಲಿ (ಮಾನಸ), ಇಲ್ಲವಾದರೆ ಪಿಸುಮಾತಿನಲ್ಲಿ (ಉಪಾಂಶು), ಅರ್ಥವನ್ನು ಚಿಂತಿಸುತ್ತಾ ಜಪಿಸಿ; ಕೆಲವು ಬಾರಿಗೊಮ್ಮೆ ಸ್ವಲ್ಪ ನಿಲ್ಲಿಸಿ; ಮಾತನಾಡುವುದು, ಅತ್ತಿತ್ತ ನೋಡುವುದು, ನಾಭಿಯ ಕೆಳಗಿನ ದೇಹಭಾಗ ಮುಟ್ಟುವುದು ಮಾಡಬೇಡಿ. ಮಾಧ್ವರು ನಂತರ ಅಷ್ಟಾಕ್ಷರ ಜಪ ಮಾಡುತ್ತಾರೆ (ಮುಂದಿನ ಹಂತ).',
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: GAYATRI_MEANING,
        },
      ],
    },
    // 22 ────────────────────────────────────────────────────────────
    {
      title: 'जपसमर्पणम् अष्टाक्षरजपश्च',
      titleEn: 'Japa-samarpaṇa and aṣṭākṣara japa (Mādhva)',
      when: { tradition: MADHVA },
      note:
        'Offer the Gāyatrī japa to the Lord with the first formula and let water fall into the plate. Then do prāṇāyāma, say the aṣṭākṣara saṅkalpa and recite ॐ नमो नारायणाय — the Sadācāra-smṛti prescribes three times as many as the Gāyatrī japa (e.g. 30 for 10). Close by offering this japa too with the last line.',
      noteKn:
        'ಮೊದಲ ವಾಕ್ಯದಿಂದ ಗಾಯತ್ರೀ ಜಪವನ್ನು ಭಗವಂತನಿಗೆ ಸಮರ್ಪಿಸಿ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಿ. ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಅಷ್ಟಾಕ್ಷರದ ಸಂಕಲ್ಪ ಹೇಳಿ “ಓಂ ನಮೋ ನಾರಾಯಣಾಯ” ಜಪಿಸಿ — ಗಾಯತ್ರೀ ಜಪದ ಮೂರರಷ್ಟು (ಉದಾ. ೧೦ಕ್ಕೆ ೩೦) ಎಂದು ಸದಾಚಾರಸ್ಮೃತಿ ಹೇಳುತ್ತದೆ. ಕೊನೆಯ ವಾಕ್ಯದಿಂದ ಈ ಜಪವನ್ನೂ ಸಮರ್ಪಿಸಿ.',
      verses: [
        {
          text: 'सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया सवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nकृतः श्रीगायत्रीमन्त्रजपः सम्पूर्णः । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'This japa of the Gāyatrī mantra, done prompted by Śrī Lakṣmīnārāyaṇa named Savitṛ and for his pleasure, is complete. May it be an offering to Śrī Kṛṣṇa.',
            kn: 'ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ ಅವನ ಪ್ರೀತಿಗಾಗಿ ಮಾಡಿದ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪ ಸಂಪೂರ್ಣವಾಯಿತು. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति नारायणाष्टाक्षरमन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'Prompted by Śrī Lakṣmīnārāyaṇa named Savitṛ, who dwells within Mukhyaprāṇa, and for his pleasure, I shall do japa of the eight-syllabled Nārāyaṇa mantra as much as I am able.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಯಥಾಶಕ್ತಿ ನಾರಾಯಣ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ नमो नारायणाय ॥',
          meaning: {
            en: 'Om, salutations to Nārāyaṇa.',
            kn: 'ಓಂ, ಶ್ರೀನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'नारायणाष्टाक्षरमन्त्रजपः सम्पूर्णः । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'The japa of the eight-syllabled Nārāyaṇa mantra is complete. May it be an offering to Śrī Kṛṣṇa.',
            kn: 'ನಾರಾಯಣ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರಜಪ ಸಂಪೂರ್ಣವಾಯಿತು. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
      ],
    },
    // 23 ────────────────────────────────────────────────────────────
    {
      title: 'सन्ध्योपस्थानम्',
      titleEn: 'Sandhyopasthāna (worship of the Sun)',
      note:
        'Stand with folded hands facing the sun — east in the morning and at midday, west in the evening. Karnataka Ṛgveda manuals (Mādhva and Smārta alike) use जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे… at every sandhyā; with नमो ब्रह्मणे… turn round clockwise three times where you stand (ātma-pradakṣiṇa). Many Smārta manuals (especially Āndhra ones) first recite the time-specific ṛks shown at the top for Smārta — morning: मित्रस्य… (Ṛgveda 3.59.6–9); midday: उदु त्यं… (1.50) and चित्रं देवानाम्… (1.115); evening: यच्चिद्धि ते… (1.25.1–10). Recite those only if your family does.',
      noteKn:
        'ಸೂರ್ಯನ ಕಡೆಗೆ — ಬೆಳಗ್ಗೆ ಮತ್ತು ಮಧ್ಯಾಹ್ನ ಪೂರ್ವಕ್ಕೆ, ಸಂಜೆ ಪಶ್ಚಿಮಕ್ಕೆ — ನಿಂತು ಕೈಮುಗಿಯಿರಿ. ಕರ್ನಾಟಕದ ಋಗ್ವೇದ ಕೈಪಿಡಿಗಳಲ್ಲಿ (ಮಾಧ್ವ, ಸ್ಮಾರ್ತ ಎರಡರಲ್ಲೂ) ಎಲ್ಲ ಸಂಧ್ಯೆಗಳಲ್ಲೂ “ಜಾತವೇದಸೇ”, “ತಚ್ಛಂಯೋಃ”, “ನಮೋ ಬ್ರಹ್ಮಣೇ” ಮಂತ್ರಗಳು; “ನಮೋ ಬ್ರಹ್ಮಣೇ” ಹೇಳುತ್ತಾ ನಿಂತಲ್ಲೇ ಮೂರು ಬಾರಿ ಪ್ರದಕ್ಷಿಣೆಯಾಗಿ ತಿರುಗಿ (ಆತ್ಮಪ್ರದಕ್ಷಿಣೆ). ಅನೇಕ ಸ್ಮಾರ್ತ ಕೈಪಿಡಿಗಳಲ್ಲಿ (ವಿಶೇಷವಾಗಿ ಆಂಧ್ರದವುಗಳಲ್ಲಿ) ಮೊದಲು ಆ ಕಾಲದ ಋಕ್ಕುಗಳನ್ನು ಹೇಳುತ್ತಾರೆ — ಬೆಳಗ್ಗೆ “ಮಿತ್ರಸ್ಯ” (ಋಗ್ವೇದ ೩.೫೯.೬–೯); ಮಧ್ಯಾಹ್ನ “ಉದು ತ್ಯಂ” (೧.೫೦) ಮತ್ತು “ಚಿತ್ರಂ ದೇವಾನಾಂ” (೧.೧೧೫); ಸಂಜೆ “ಯಚ್ಚಿದ್ಧಿ ತೇ” (೧.೨೫.೧–೧೦). ನಿಮ್ಮ ಮನೆತನದಲ್ಲಿ ಹೇಳುವ ಪದ್ಧತಿಯಿದ್ದರೆ ಮಾತ್ರ ಅವನ್ನು ಹೇಳಿ.',
      verses: [
        // Smārta, morning: Mitra ṛks (RV 3.59.6–9)
        {
          when: { tradition: SMARTA, time: ['morning'] },
          text: 'मित्रस्य चर्षणीधृतोऽवो देवस्य सानसि ।\nद्युम्नं चित्रश्रवस्तमम् ॥',
          meaning: {
            en: 'The protection of the god Mitra, upholder of men, wins blessings; his splendour is most wonderfully renowned.',
            kn: 'ಜನರನ್ನು ಪೋಷಿಸುವ ಮಿತ್ರದೇವನ ರಕ್ಷಣೆ ಶ್ರೇಯಸ್ಸನ್ನು ತರುತ್ತದೆ; ಅವನ ತೇಜಸ್ಸು ಅತ್ಯಂತ ಅದ್ಭುತವಾಗಿ ಪ್ರಸಿದ್ಧವಾದುದು.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['morning'] },
          text: 'अभि यो महिना दिवं मित्रो बभूव सप्रथाः ।\nअभि श्रवोभिः पृथिवीम् ॥',
          meaning: {
            en: 'Far-famed Mitra surpasses the heavens by his greatness, and the earth by his glories.',
            kn: 'ವಿಸ್ತಾರವಾದ ಕೀರ್ತಿಯುಳ್ಳ ಮಿತ್ರನು ತನ್ನ ಮಹಿಮೆಯಿಂದ ದ್ಯುಲೋಕವನ್ನೂ, ತನ್ನ ಕೀರ್ತಿಯಿಂದ ಭೂಮಿಯನ್ನೂ ಮೀರಿ ನಿಂತಿದ್ದಾನೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['morning'] },
          text: 'मित्राय पञ्च येमिरे जना अभिष्टिशवसे ।\nस देवान्विश्वान्बिभर्ति ॥',
          meaning: {
            en: 'To Mitra, mighty to help, the five peoples have offered worship; he sustains all the gods.',
            kn: 'ಸಹಾಯ ಮಾಡುವ ಶಕ್ತಿಯುಳ್ಳ ಮಿತ್ರನಿಗೆ ಐದು ಜನವರ್ಗಗಳೂ ಪೂಜೆ ಸಲ್ಲಿಸಿವೆ; ಅವನು ಎಲ್ಲ ದೇವತೆಗಳನ್ನೂ ಪೋಷಿಸುತ್ತಾನೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['morning'] },
          text: 'मित्रो देवेष्वायुषु जनाय वृक्तबर्हिषे ।\nइष इष्टव्रता अकः ॥',
          meaning: {
            en: 'Mitra, among gods and men, has granted nourishment to the worshipper who spreads the sacred grass — nourishment that fulfils holy vows.',
            kn: 'ದೇವತೆಗಳಲ್ಲೂ ಮನುಷ್ಯರಲ್ಲೂ ಇರುವ ಮಿತ್ರನು ದರ್ಭೆ ಹಾಸಿ ಪೂಜಿಸುವವನಿಗೆ ವ್ರತಗಳನ್ನು ಪೂರೈಸುವ ಅನ್ನವನ್ನು ಕರುಣಿಸಿದ್ದಾನೆ.',
          },
        },
        // Smārta, midday: RV 1.50.1–13 and 1.115.1–6
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'उदु त्यं जातवेदसं देवं वहन्ति केतवः ।\nदृशे विश्वाय सूर्यम् ॥',
          meaning: {
            en: 'His rays bear aloft the god Sūrya, knower of all beings, so that all may see him.',
            kn: 'ಎಲ್ಲ ಜೀವಿಗಳನ್ನೂ ಬಲ್ಲ ಸೂರ್ಯದೇವನನ್ನು, ಎಲ್ಲರೂ ಕಾಣುವಂತೆ, ಅವನ ಕಿರಣಗಳು ಮೇಲಕ್ಕೆ ಹೊತ್ತೊಯ್ಯುತ್ತವೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'अप त्ये तायवो यथा नक्षत्रा यन्त्यक्तुभिः ।\nसूराय विश्वचक्षसे ॥',
          meaning: {
            en: 'Before the all-seeing Sun the stars slip away with the night, like thieves.',
            kn: 'ಎಲ್ಲವನ್ನೂ ನೋಡುವ ಸೂರ್ಯನ ಮುಂದೆ ನಕ್ಷತ್ರಗಳು ರಾತ್ರಿಯೊಂದಿಗೆ ಕಳ್ಳರಂತೆ ಸರಿದುಹೋಗುತ್ತವೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'अदृश्रमस्य केतवो वि रश्मयो जनाँ अनु ।\nभ्राजन्तो अग्नयो यथा ॥',
          meaning: {
            en: 'His beams have been seen spreading over the peoples, blazing like fires.',
            kn: 'ಅವನ ಕಿರಣಗಳು ಬೆಂಕಿಯಂತೆ ಹೊಳೆಯುತ್ತಾ ಜನರೆಲ್ಲರ ಮೇಲೆ ಹರಡಿರುವುದು ಕಾಣುತ್ತಿದೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'तरणिर्विश्वदर्शतो ज्योतिष्कृदसि सूर्य ।\nविश्वमा भासि रोचनम् ॥',
          meaning: {
            en: 'O Sun, swift and seen by all, maker of light, you illumine the whole bright realm.',
            kn: 'ಓ ಸೂರ್ಯನೇ, ನೀನು ವೇಗಶಾಲಿ, ಎಲ್ಲರಿಗೂ ಕಾಣುವವನು, ಬೆಳಕನ್ನು ಸೃಷ್ಟಿಸುವವನು; ಪ್ರಕಾಶಮಾನವಾದ ಸಮಸ್ತ ಲೋಕವನ್ನೂ ಬೆಳಗುತ್ತೀಯೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'प्रत्यङ्देवानां विशः प्रत्यङ्ङुदेषि मानुषान् ।\nप्रत्यङ्विश्वं स्वर्दृशे ॥',
          meaning: {
            en: 'You rise facing the hosts of gods, facing mankind, facing all, so that the light may be seen.',
            kn: 'ದೇವತೆಗಳ ಸಮೂಹಕ್ಕೂ, ಮನುಷ್ಯರಿಗೂ, ಸಮಸ್ತಕ್ಕೂ ಎದುರಾಗಿ ಬೆಳಕು ಕಾಣುವಂತೆ ನೀನು ಉದಯಿಸುತ್ತೀಯೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'येना पावक चक्षसा भुरण्यन्तं जनाँ अनु ।\nत्वं वरुण पश्यसि ॥',
          meaning: {
            en: 'With that eye, O purifying Varuṇa, with which you watch the busy one moving among men —',
            kn: 'ಓ ಪಾವನನಾದ ವರುಣನೇ, ಜನರ ನಡುವೆ ಸಂಚರಿಸುವವನನ್ನು ನೀನು ಯಾವ ಕಣ್ಣಿನಿಂದ ನೋಡುತ್ತೀಯೋ ಆ ಕಣ್ಣಿನಿಂದ —',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'वि द्यामेषि रजस्पृथ्वहा मिमानो अक्तुभिः ।\nपश्यञ्जन्मानि सूर्य ॥',
          meaning: {
            en: '— you cross the sky and the wide mid-region, O Sun, measuring out the days with the nights, watching over all that is born.',
            kn: '— ಓ ಸೂರ್ಯನೇ, ರಾತ್ರಿಗಳೊಂದಿಗೆ ಹಗಲುಗಳನ್ನು ಅಳೆಯುತ್ತಾ, ಹುಟ್ಟಿದ ಎಲ್ಲ ಜೀವಿಗಳನ್ನೂ ನೋಡುತ್ತಾ, ದ್ಯುಲೋಕವನ್ನೂ ವಿಶಾಲ ಅಂತರಿಕ್ಷವನ್ನೂ ದಾಟುತ್ತೀಯೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'सप्त त्वा हरितो रथे वहन्ति देव सूर्य ।\nशोचिष्केशं विचक्षण ॥',
          meaning: {
            en: 'Seven bay mares draw you in your chariot, O god Sūrya, far-seeing one with hair of flame.',
            kn: 'ಓ ಸೂರ್ಯದೇವ, ಜ್ವಾಲೆಯಂತಹ ಕೇಶವುಳ್ಳ ದೂರದರ್ಶಿಯೇ, ಏಳು ಕುದುರೆಗಳು ನಿನ್ನನ್ನು ರಥದಲ್ಲಿ ಎಳೆಯುತ್ತವೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'अयुक्त सप्त शुन्ध्युवः सूरो रथस्य नप्त्यः ।\nताभिर्याति स्वयुक्तिभिः ॥',
          meaning: {
            en: 'The Sun has yoked the seven bright daughters of his chariot; with them, self-yoked, he goes on his way.',
            kn: 'ಸೂರ್ಯನು ತನ್ನ ರಥದ ಏಳು ಹೊಳೆಯುವ ಕುದುರೆಗಳನ್ನು ಹೂಡಿದ್ದಾನೆ; ತಾವಾಗಿಯೇ ಹೂಡಿಕೊಂಡ ಅವುಗಳೊಂದಿಗೆ ಸಾಗುತ್ತಾನೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'उद्वयं तमसस्परि ज्योतिष्पश्यन्त उत्तरम् ।\nदेवं देवत्रा सूर्यमगन्म ज्योतिरुत्तमम् ॥',
          meaning: {
            en: 'Rising above the darkness and seeing the higher light, we have come to Sūrya, god among gods, the highest light.',
            kn: 'ಕತ್ತಲೆಯನ್ನು ದಾಟಿ ಮೇಲಿನ ಬೆಳಕನ್ನು ಕಾಣುತ್ತಾ, ದೇವತೆಗಳಲ್ಲಿ ದೇವನಾದ, ಉತ್ತಮ ಜ್ಯೋತಿಯಾದ ಸೂರ್ಯನನ್ನು ನಾವು ಸೇರಿದ್ದೇವೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'उद्यन्नद्य मित्रमह आरोहन्नुत्तरां दिवम् ।\nहृद्रोगं मम सूर्य हरिमाणं च नाशय ॥',
          meaning: {
            en: 'Rising today, O Sun rich in friendship, and climbing the higher heaven, destroy my heart’s disease and my pallor.',
            kn: 'ಸ್ನೇಹಪೂರ್ಣ ತೇಜಸ್ಸುಳ್ಳ ಓ ಸೂರ್ಯನೇ, ಇಂದು ಉದಯಿಸಿ ಮೇಲಿನ ಆಕಾಶವನ್ನೇರುತ್ತಾ ನನ್ನ ಹೃದ್ರೋಗವನ್ನೂ ಮೈಬಣ್ಣ ಕಳೆಗುಂದುವ ರೋಗವನ್ನೂ ನಾಶಮಾಡು.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'शुकेषु मे हरिमाणं रोपणाकासु दध्मसि ।\nअथो हारिद्रवेषु मे हरिमाणं नि दध्मसि ॥',
          meaning: {
            en: 'Let us put my pallor into the parrots and the thrushes; let us put my pallor into the yellow birds.',
            kn: 'ನನ್ನ ಈ ಹಳದಿ ರೋಗವನ್ನು ಗಿಳಿಗಳಿಗೂ ರೋಪಣಾಕ ಹಕ್ಕಿಗಳಿಗೂ ವರ್ಗಾಯಿಸೋಣ; ಹಳದಿ ಬಣ್ಣದ ಹಕ್ಕಿಗಳಿಗೂ ಅದನ್ನು ಬಿಟ್ಟುಬಿಡೋಣ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'उदगादयमादित्यो विश्वेन सहसा सह ।\nद्विषन्तं मह्यं रन्धयन्मो अहं द्विषते रधम् ॥',
          meaning: {
            en: 'This Āditya has risen with all his might, subduing for me the one who hates me; may I never fall into the power of my enemy.',
            kn: 'ಈ ಆದಿತ್ಯನು ತನ್ನ ಸಮಸ್ತ ಬಲದೊಂದಿಗೆ ಉದಯಿಸಿದ್ದಾನೆ, ನನ್ನನ್ನು ದ್ವೇಷಿಸುವವನನ್ನು ನನಗೆ ವಶಪಡಿಸುತ್ತಾ; ನಾನೆಂದೂ ಶತ್ರುವಿನ ವಶಕ್ಕೆ ಬೀಳದಿರಲಿ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः ।\nआप्रा द्यावापृथिवी अन्तरिक्षं सूर्य आत्मा जगतस्तस्थुषश्च ॥',
          meaning: {
            en: 'The bright face of the gods has risen, the eye of Mitra, Varuṇa and Agni. He has filled heaven, earth and the mid-region; the Sun is the soul of all that moves and all that stands still.',
            kn: 'ದೇವತೆಗಳ ಅದ್ಭುತವಾದ ಮುಖ, ಮಿತ್ರ, ವರುಣ, ಅಗ್ನಿಯರ ಕಣ್ಣು ಉದಯಿಸಿದೆ. ಅವನು ದ್ಯುಲೋಕ, ಭೂಮಿ, ಅಂತರಿಕ್ಷಗಳನ್ನು ತುಂಬಿದ್ದಾನೆ; ಚರಾಚರ ಜಗತ್ತಿನ ಆತ್ಮ ಸೂರ್ಯನೇ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'सूर्यो देवीमुषसं रोचमानां मर्यो न योषामभ्येति पश्चात् ।\nयत्रा नरो देवयन्तो युगानि वितन्वते प्रति भद्राय भद्रम् ॥',
          meaning: {
            en: 'The Sun follows the shining goddess Dawn as a young man follows a maiden, there where devout men perform their rites age after age, each blessing answered with blessing.',
            kn: 'ಯುವಕನು ಕನ್ಯೆಯನ್ನು ಹಿಂಬಾಲಿಸುವಂತೆ ಸೂರ್ಯನು ಪ್ರಕಾಶಿಸುವ ಉಷಾದೇವಿಯನ್ನು ಹಿಂಬಾಲಿಸುತ್ತಾನೆ; ಅಲ್ಲಿ ದೇವಭಕ್ತರು ಯುಗಯುಗಗಳಿಂದ ಮಂಗಳಕ್ಕಾಗಿ ಮಂಗಳಕರ ಕರ್ಮಗಳನ್ನು ವಿಸ್ತರಿಸುತ್ತಾರೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'भद्रा अश्वा हरितः सूर्यस्य चित्रा एतग्वा अनुमाद्यासः ।\nनमस्यन्तो दिव आ पृष्ठमस्थुः परि द्यावापृथिवी यन्ति सद्यः ॥',
          meaning: {
            en: 'The Sun’s auspicious bay horses, bright, swift and worthy of praise, bowing low, have climbed the ridge of heaven; in a day they circle heaven and earth.',
            kn: 'ಸೂರ್ಯನ ಮಂಗಳಕರವಾದ, ವಿಚಿತ್ರ ಬಣ್ಣದ, ವೇಗಶಾಲಿಯಾದ, ಸ್ತುತ್ಯವಾದ ಕುದುರೆಗಳು ನಮಸ್ಕರಿಸುತ್ತಾ ಆಕಾಶದ ಶಿಖರವನ್ನೇರಿವೆ; ಒಂದೇ ದಿನದಲ್ಲಿ ದ್ಯಾವಾಪೃಥಿವಿಗಳನ್ನು ಸುತ್ತುತ್ತವೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'तत्सूर्यस्य देवत्वं तन्महित्वं मध्या कर्तोर्विततं सं जभार ।\nयदेदयुक्त हरितः सधस्थादाद्रात्री वासस्तनुते सिमस्मै ॥',
          meaning: {
            en: 'This is the divinity, this the greatness of the Sun: in the midst of work he draws in the spread-out light; when he unyokes his horses from their stall, Night spreads her garment over all.',
            kn: 'ಇದೇ ಸೂರ್ಯನ ದೇವತ್ವ, ಇದೇ ಅವನ ಮಹಿಮೆ: ಕೆಲಸ ನಡೆಯುತ್ತಿರುವಾಗಲೇ ಹರಡಿದ ಬೆಳಕನ್ನು ಹಿಂದೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ; ಅವನು ಕುದುರೆಗಳನ್ನು ಬಿಚ್ಚಿದಾಗ ರಾತ್ರಿಯು ಎಲ್ಲದರ ಮೇಲೆ ತನ್ನ ವಸ್ತ್ರವನ್ನು ಹರಡುತ್ತಾಳೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'तन्मित्रस्य वरुणस्याभिचक्षे सूर्यो रूपं कृणुते द्योरुपस्थे ।\nअनन्तमन्यद्रुशदस्य पाजः कृष्णमन्यद्धरितः सं भरन्ति ॥',
          meaning: {
            en: 'In the lap of heaven the Sun takes on a form for Mitra and Varuṇa to behold: his bay horses bring now his endless shining power, now its dark counterpart.',
            kn: 'ಮಿತ್ರಾವರುಣರು ನೋಡುವಂತೆ ಸೂರ್ಯನು ಆಕಾಶದ ಮಡಿಲಲ್ಲಿ ರೂಪ ಧರಿಸುತ್ತಾನೆ; ಅವನ ಕುದುರೆಗಳು ಒಮ್ಮೆ ಅನಂತವಾದ ಹೊಳೆಯುವ ತೇಜಸ್ಸನ್ನೂ, ಒಮ್ಮೆ ಕಪ್ಪಾದ ಇನ್ನೊಂದು ರೂಪವನ್ನೂ ತರುತ್ತವೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['midday'] },
          text: 'अद्या देवा उदिता सूर्यस्य निरंहसः पिपृता निरवद्यात् ।\nतन्नो मित्रो वरुणो मामहन्तामदितिः सिन्धुः पृथिवी उत द्यौः ॥',
          meaning: {
            en: 'Today, O gods, at the rising of the Sun, deliver us from sin and from blame. May Mitra and Varuṇa, Aditi, the river, earth and heaven grant us this.',
            kn: 'ಓ ದೇವತೆಗಳೇ, ಇಂದು ಸೂರ್ಯೋದಯದಲ್ಲಿ ನಮ್ಮನ್ನು ಪಾಪದಿಂದಲೂ ನಿಂದೆಯಿಂದಲೂ ಪಾರುಮಾಡಿ. ಮಿತ್ರ, ವರುಣ, ಅದಿತಿ, ಸಿಂಧು, ಭೂಮಿ, ದ್ಯುಲೋಕ ಇವರೆಲ್ಲರೂ ಇದನ್ನು ನಮಗೆ ಕರುಣಿಸಲಿ.',
          },
        },
        // Smārta, evening: Varuṇa ṛks (RV 1.25.1–10)
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'यच्चिद्धि ते विशो यथा प्र देव वरुण व्रतम् ।\nमिनीमसि द्यविद्यवि ॥',
          meaning: {
            en: 'O god Varuṇa, as people do, we too break your laws day after day —',
            kn: 'ಓ ವರುಣದೇವ, ಸಾಮಾನ್ಯ ಜನರಂತೆ ನಾವೂ ದಿನದಿನವೂ ನಿನ್ನ ನಿಯಮಗಳನ್ನು ಮೀರುತ್ತೇವೆ —',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'मा नो वधाय हत्नवे जिहीळानस्य रीरधः ।\nमा हृणानस्य मन्यवे ॥',
          meaning: {
            en: '— yet do not hand us over to death, to the weapon of the angry one, nor to the wrath of the offended.',
            kn: '— ಆದರೂ ಕೋಪಗೊಂಡವನ ಮಾರಕ ಆಯುಧಕ್ಕೂ, ಕ್ರುದ್ಧನ ರೋಷಕ್ಕೂ ನಮ್ಮನ್ನು ಒಪ್ಪಿಸಬೇಡ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'वि मृळीकाय ते मनो रथीरश्वं न सन्दितम् ।\nगीर्भिर्वरुण सीमहि ॥',
          meaning: {
            en: 'As a charioteer loosens a tethered horse, O Varuṇa, we loosen your mind with our hymns, to win your mercy.',
            kn: 'ಸಾರಥಿಯು ಕಟ್ಟಿದ ಕುದುರೆಯನ್ನು ಬಿಚ್ಚುವಂತೆ, ಓ ವರುಣ, ನಿನ್ನ ಕರುಣೆಗಾಗಿ ನಮ್ಮ ಸ್ತುತಿಗಳಿಂದ ನಿನ್ನ ಮನಸ್ಸನ್ನು ಸಡಿಲಿಸುತ್ತೇವೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'परा हि मे विमन्यवः पतन्ति वस्य इष्टये ।\nवयो न वसतीरुप ॥',
          meaning: {
            en: 'My thoughts, free of anger, fly out in search of good, as birds fly to their nests.',
            kn: 'ಹಕ್ಕಿಗಳು ಗೂಡಿನ ಕಡೆಗೆ ಹಾರುವಂತೆ, ಕೋಪವಿಲ್ಲದ ನನ್ನ ಮನಸ್ಸುಗಳು ಶ್ರೇಯಸ್ಸನ್ನು ಅರಸಿ ನಿನ್ನೆಡೆಗೆ ಹಾರುತ್ತವೆ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'कदा क्षत्रश्रियं नरमा वरुणं करामहे ।\nमृळीकायोरुचक्षसम् ॥',
          meaning: {
            en: 'When shall we bring here, for our mercy, Varuṇa, the hero glorious in power, the far-seeing one?',
            kn: 'ಕ್ಷಾತ್ರತೇಜಸ್ಸಿನಿಂದ ಶೋಭಿಸುವ, ದೂರದರ್ಶಿಯಾದ ವೀರ ವರುಣನನ್ನು ನಮ್ಮ ಮೇಲಿನ ಕರುಣೆಗಾಗಿ ಎಂದು ಇಲ್ಲಿಗೆ ಬರಮಾಡಿಕೊಳ್ಳುವೆವು?',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'तदित्समानमाशाते वेनन्ता न प्र युच्छतः ।\nधृतव्रताय दाशुषे ॥',
          meaning: {
            en: 'Mitra and Varuṇa, longing for it, share this offering together and never neglect the giver who keeps his vows.',
            kn: 'ಮಿತ್ರಾವರುಣರು ಬಯಸಿ ಈ ಹವಿಸ್ಸನ್ನು ಒಟ್ಟಾಗಿ ಸ್ವೀಕರಿಸುತ್ತಾರೆ; ವ್ರತನಿಷ್ಠನಾದ ದಾನಿಯನ್ನು ಎಂದೂ ಕೈಬಿಡುವುದಿಲ್ಲ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'वेदा यो वीनां पदमन्तरिक्षेण पतताम् ।\nवेद नावः समुद्रियः ॥',
          meaning: {
            en: 'He knows the path of the birds that fly through the air; dwelling in the ocean, he knows the course of ships.',
            kn: 'ಆಕಾಶದಲ್ಲಿ ಹಾರುವ ಹಕ್ಕಿಗಳ ದಾರಿಯನ್ನು ಅವನು ಬಲ್ಲ; ಸಮುದ್ರದಲ್ಲಿರುವ ಅವನು ಹಡಗುಗಳ ದಾರಿಯನ್ನೂ ಬಲ್ಲ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'वेद मासो धृतव्रतो द्वादश प्रजावतः ।\nवेदा य उपजायते ॥',
          meaning: {
            en: 'Keeper of the law, he knows the twelve months with their offspring, and he knows the month that is born in addition.',
            kn: 'ನಿಯಮಪಾಲಕನಾದ ಅವನು ತಮ್ಮ ಸಂತತಿಯೊಡನೆ ಹನ್ನೆರಡು ತಿಂಗಳುಗಳನ್ನೂ ಬಲ್ಲ; ಹೆಚ್ಚುವರಿಯಾಗಿ ಹುಟ್ಟುವ ಅಧಿಕಮಾಸವನ್ನೂ ಬಲ್ಲ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'वेद वातस्य वर्तनिमुरोरृष्वस्य बृहतः ।\nवेदा ये अध्यासते ॥',
          meaning: {
            en: 'He knows the track of the wind, wide, high and mighty, and he knows those who dwell above.',
            kn: 'ವಿಶಾಲವೂ ಉನ್ನತವೂ ಮಹತ್ತೂ ಆದ ಗಾಳಿಯ ಮಾರ್ಗವನ್ನು ಅವನು ಬಲ್ಲ; ಮೇಲೆ ನೆಲೆಸಿರುವವರನ್ನೂ ಬಲ್ಲ.',
          },
        },
        {
          when: { tradition: SMARTA, time: ['evening'] },
          text: 'नि षसाद धृतव्रतो वरुणः पस्त्यास्वा ।\nसाम्राज्याय सुक्रतुः ॥',
          meaning: {
            en: 'Varuṇa, keeper of the law, wise in action, has taken his seat among his people to rule as sovereign.',
            kn: 'ನಿಯಮಪಾಲಕನೂ ಸತ್ಕರ್ಮಿಯೂ ಆದ ವರುಣನು ಸಾಮ್ರಾಜ್ಯವನ್ನಾಳಲು ತನ್ನ ಪ್ರಜೆಗಳ ನಡುವೆ ಆಸೀನನಾಗಿದ್ದಾನೆ.',
          },
        },
        // Common to all
        {
          text: 'जातवेदस इत्यस्य मन्त्रस्य कश्यप ऋषिः । दुर्गा जातवेदा अग्निर्देवता ।\nत्रिष्टुप् छन्दः । सन्ध्योपस्थाने विनियोगः ॥',
          meaning: {
            en: 'For the mantra “jātavedase”: the seer is Kaśyapa, the deity is Agni Jātavedas (also named as Durgā), the metre is Triṣṭubh; it is used for the sandhyā upasthāna.',
            kn: '“ಜಾತವೇದಸೇ” ಮಂತ್ರಕ್ಕೆ ಕಶ್ಯಪ ಋಷಿ, ಜಾತವೇದ ಅಗ್ನಿ (ದುರ್ಗಾ ಎಂದೂ ಹೇಳುತ್ತಾರೆ) ದೇವತೆ, ತ್ರಿಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಸಂಧ್ಯೋಪಸ್ಥಾನಕ್ಕೆ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।\nस नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥',
          meaning: {
            en: 'For Jātavedas, the knower of all, let us press the Soma; may he burn away the hoard of those who are hostile. As a boat carries across a river, may Agni — for Mādhvas, the Lord within him — carry us beyond all difficulties and wrongs.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಜಾತವೇದನಿಗಾಗಿ ಸೋಮವನ್ನು ಅರ್ಪಿಸೋಣ; ಅವನು ಶತ್ರುಗಳ ಸಂಪತ್ತನ್ನು ಸುಟ್ಟುಹಾಕಲಿ. ದೋಣಿಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಅಗ್ನಿಯು (ಮಾಧ್ವರಿಗೆ ಅಗ್ನಿಯ ಅಂತರ್ಯಾಮಿಯಾದ ಭಗವಂತನು) ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದಲೂ ಪಾಪಗಳಿಂದಲೂ ಪಾರುಮಾಡಲಿ.',
          },
        },
        {
          text: 'तच्छंयोरित्यस्य मन्त्रस्य शंयुरृषिः । विश्वे देवा देवताः ।\nशक्वरी छन्दः । शान्त्यर्थे जपे विनियोगः ॥',
          meaning: {
            en: 'For the mantra “tac chaṃyoḥ”: the seer is Śaṃyu, the deities are the Viśvedevas, the metre is Śakvarī; it is recited for peace.',
            kn: '“ತಚ್ಛಂಯೋಃ” ಮಂತ್ರಕ್ಕೆ ಶಂಯು ಋಷಿ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆ, ಶಕ್ವರೀ ಛಂದಸ್ಸು; ಶಾಂತಿಗಾಗಿ ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text:
            'तच्छंयोरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥',
          meaning: {
            en: 'We pray for that health and happiness: for the success of the sacrifice and of the one who offers it. May divine well-being be ours, and well-being for all people; may healing rise ever higher; may there be welfare for our two-footed and four-footed beings.',
            kn: 'ಆ ಆರೋಗ್ಯ ಸುಖಗಳನ್ನು ಬೇಡುತ್ತೇವೆ: ಯಜ್ಞಕ್ಕೂ ಯಜ್ಞಮಾಡುವವನಿಗೂ ಸಫಲತೆಯಾಗಲಿ. ನಮಗೆ ದೈವಿಕ ಕ್ಷೇಮವೂ ಎಲ್ಲ ಮನುಷ್ಯರಿಗೆ ಕ್ಷೇಮವೂ ಆಗಲಿ; ಔಷಧಶಕ್ತಿ ಮೇಲ್ಮುಖವಾಗಿ ವೃದ್ಧಿಯಾಗಲಿ; ಎರಡು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ನಾಲ್ಕು ಕಾಲಿನ ಜೀವಿಗಳಿಗೂ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          text: 'नमो ब्रह्मणे । नमो अस्त्वग्नये । नमः पृथिव्यै । नम ओषधीभ्यः ।\nनमो वाचे । नमो वाचस्पतये । नमो विष्णवे महते करोमि ॥',
          meaning: {
            en: 'Salutations to Brahman; salutations to Agni; to the Earth; to the healing plants; to Speech and to the Lord of Speech; to the great Viṣṇu I offer my salutation.',
            kn: 'ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಅಗ್ನಿಗೆ, ಭೂಮಿಗೆ, ಓಷಧಿಗಳಿಗೆ, ವಾಗ್ದೇವಿಗೆ, ವಾಚಸ್ಪತಿಗೆ ನಮಸ್ಕಾರ; ಮಹಾನ್ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 24 ────────────────────────────────────────────────────────────
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Digdevatā namaskāra (salutation to the directions)',
      note:
        'Standing, turn to each direction in turn and bow with folded hands: east, south, west, north; then look up (ūrdhvā), down (adharā), into the space around (antarikṣa) and to the intermediate directions (avāntarā). In the morning and at midday begin with the east; the Mādhva manual begins the evening salutation with the west and goes round in order. Mādhvas then salute the guardians of the directions by name. Karnataka Smārta manuals also recite one Ṛgvedic ṛk to the guardian of each direction — east (Indra), south-east (Agni), south (Yama), south-west (Nirṛti), west (Varuṇa), north-west (Vāyu), north (Soma), north-east (Īśāna) — bowing towards it.',
      noteKn:
        'ನಿಂತುಕೊಂಡು ಪ್ರತಿಯೊಂದು ದಿಕ್ಕಿಗೂ ತಿರುಗಿ ಕೈಮುಗಿದು ನಮಸ್ಕರಿಸಿ: ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ; ನಂತರ ಮೇಲೆ (ಊರ್ಧ್ವ), ಕೆಳಗೆ (ಅಧರ), ಸುತ್ತಲಿನ ಅಂತರಿಕ್ಷಕ್ಕೆ ಮತ್ತು ಉಪದಿಕ್ಕುಗಳಿಗೆ (ಅವಾಂತರ). ಬೆಳಗ್ಗೆ ಮತ್ತು ಮಧ್ಯಾಹ್ನ ಪೂರ್ವದಿಂದ ಆರಂಭಿಸಿ; ಮಾಧ್ವ ಕೈಪಿಡಿಯಂತೆ ಸಂಜೆ ಪಶ್ಚಿಮ ದಿಕ್ಕಿನಿಂದ ಆರಂಭಿಸಿ ಕ್ರಮವಾಗಿ ನಮಸ್ಕರಿಸಬೇಕು. ಮಾಧ್ವರು ನಂತರ ದಿಕ್ಪಾಲಕರನ್ನು ಹೆಸರಿಸಿ ನಮಸ್ಕರಿಸುತ್ತಾರೆ. ಕರ್ನಾಟಕದ ಸ್ಮಾರ್ತ ಕೈಪಿಡಿಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದು ದಿಕ್ಕಿನ ಅಧಿಪತಿಗೂ ಒಂದೊಂದು ಋಗ್ವೇದ ಋಕ್ಕನ್ನು ಹೇಳಿ ಆ ದಿಕ್ಕಿಗೆ ನಮಸ್ಕರಿಸುತ್ತಾರೆ — ಪೂರ್ವ (ಇಂದ್ರ), ಆಗ್ನೇಯ (ಅಗ್ನಿ), ದಕ್ಷಿಣ (ಯಮ), ನೈರುತ್ಯ (ನಿರೃತಿ), ಪಶ್ಚಿಮ (ವರುಣ), ವಾಯುವ್ಯ (ವಾಯು), ಉತ್ತರ (ಸೋಮ), ಈಶಾನ್ಯ (ಈಶಾನ).',
      verses: [
        {
          text:
            'ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽन्तरिक्षायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ।\nॐ नमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमो नमः ॥',
          meaning: {
            en: 'Salutations to the east, south, west and north, to the direction above, the direction below, the mid-space and the intermediate directions — and salutations again and again to the deities who dwell in each of them.',
            kn: 'ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ ದಿಕ್ಕುಗಳಿಗೂ, ಮೇಲಿನ, ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ, ಅಂತರಿಕ್ಷಕ್ಕೂ, ಉಪದಿಕ್ಕುಗಳಿಗೂ ನಮಸ್ಕಾರ; ಅವುಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: MADHVA },
          text:
            'ॐ इन्द्राय नमः । ॐ अग्नये नमः । ॐ यमाय नमः ।\nॐ निरृतये नमः । ॐ वरुणाय नमः । ॐ वायवे नमः ।\nॐ कुबेराय नमः । ॐ ईशानाय नमः ।\nॐ ब्रह्मणे नमः । ॐ अनन्ताय नमः ॥',
          meaning: {
            en: 'Salutations to the guardians of the directions — Indra, Agni, Yama, Nirṛti, Varuṇa, Vāyu, Kubera and Īśāna — and to Brahmā above and Ananta below.',
            kn: 'ದಿಕ್ಪಾಲಕರಾದ ಇಂದ್ರ, ಅಗ್ನಿ, ಯಮ, ನಿರೃತಿ, ವರುಣ, ವಾಯು, ಕುಬೇರ, ಈಶಾನರಿಗೂ, ಮೇಲಿನ ದಿಕ್ಕಿನ ಬ್ರಹ್ಮದೇವರಿಗೂ ಕೆಳಗಿನ ದಿಕ್ಕಿನ ಅನಂತನಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'इन्द्रं वो विश्वतस्परि हवामहे जनेभ्यः ।\nअस्माकमस्तु केवलः ॥',
          meaning: {
            en: '(East) We call Indra for you from among all peoples; may he be ours alone.',
            kn: '(ಪೂರ್ವ) ಎಲ್ಲ ಜನರ ನಡುವಿನಿಂದ ಇಂದ್ರನನ್ನು ನಿಮಗಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮವನೇ ಆಗಿರಲಿ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'अग्निं दूतं वृणीमहे होतारं विश्ववेदसम् ।\nअस्य यज्ञस्य सुक्रतुम् ॥',
          meaning: {
            en: '(South-east) We choose Agni as our messenger, the priest who possesses all, the skilful performer of this sacrifice.',
            kn: '(ಆಗ್ನೇಯ) ಸರ್ವಸಂಪನ್ನನಾದ ಹೋತೃವೂ ಈ ಯಜ್ಞವನ್ನು ಚೆನ್ನಾಗಿ ನಡೆಸುವವನೂ ಆದ ಅಗ್ನಿಯನ್ನು ದೂತನನ್ನಾಗಿ ವರಿಸುತ್ತೇವೆ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'यमाय सोमं सुनुत यमाय जुहुता हविः ।\nयमं ह यज्ञो गच्छत्यग्निदूतो अरंकृतः ॥',
          meaning: {
            en: '(South) Press Soma for Yama, offer oblations to Yama; to Yama goes the sacrifice, well prepared, with Agni as its messenger.',
            kn: '(ದಕ್ಷಿಣ) ಯಮನಿಗಾಗಿ ಸೋಮವನ್ನು ಅರ್ಪಿಸಿ, ಯಮನಿಗೆ ಹವಿಸ್ಸನ್ನು ಹೋಮಮಾಡಿ; ಚೆನ್ನಾಗಿ ಸಿದ್ಧಗೊಂಡ ಯಜ್ಞವು ಅಗ್ನಿಯನ್ನು ದೂತನನ್ನಾಗಿ ಹೊಂದಿ ಯಮನನ್ನು ಸೇರುತ್ತದೆ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'मो षु णः परापरा निरृतिर्दुर्हणा वधीत् ।\nपदीष्ट तृष्णया सह ॥',
          meaning: {
            en: '(South-west) Let not cruel Nirṛti, hard to overcome, strike us down one after another; let her pass away together with craving.',
            kn: '(ನೈರುತ್ಯ) ಗೆಲ್ಲಲಾಗದ ಕ್ರೂರ ನಿರೃತಿಯು ನಮ್ಮನ್ನು ಒಬ್ಬರ ನಂತರ ಒಬ್ಬರಂತೆ ನಾಶಮಾಡದಿರಲಿ; ದಾಹದೊಂದಿಗೆ ಅವಳು ತೊಲಗಲಿ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेळमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
          meaning: {
            en: '(West) Praising you with this hymn, I ask of you what the worshipper seeks with his offerings. Without anger, O Varuṇa, be attentive to us here; O widely praised one, do not take away our life.',
            kn: '(ಪಶ್ಚಿಮ) ಸ್ತೋತ್ರದಿಂದ ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತಾ, ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳ ಮೂಲಕ ಬಯಸುವುದನ್ನೇ ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ. ಓ ವರುಣ, ಕೋಪಗೊಳ್ಳದೆ ಇಲ್ಲಿ ನಮ್ಮನ್ನು ಗಮನಿಸು; ಎಲ್ಲರಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವವನೇ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಬೇಡ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'तव वायवृतस्पते त्वष्टुर्जामातरद्भुत ।\nअवांस्या वृणीमहे ॥',
          meaning: {
            en: '(North-west) O Vāyu, lord of the cosmic order, wondrous son-in-law of Tvaṣṭṛ, we choose your protection.',
            kn: '(ವಾಯುವ್ಯ) ಋತದ ಒಡೆಯನೇ, ತ್ವಷ್ಟೃವಿನ ಅದ್ಭುತ ಅಳಿಯನೇ, ಓ ವಾಯುವೇ, ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬೇಡುತ್ತೇವೆ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'सोमो धेनुं सोमो अर्वन्तमाशुं सोमो वीरं कर्मण्यं ददाति ।\nसादन्यं विदथ्यं सभेयं पितृश्रवणं यो ददाशदस्मै ॥',
          meaning: {
            en: '(North) To the one who offers to him, Soma gives a milch cow, a swift horse, and a capable son — fit for the home, the assembly and the council, bringing honour to his father.',
            kn: '(ಉತ್ತರ) ತನಗೆ ಅರ್ಪಿಸುವವನಿಗೆ ಸೋಮನು ಹಾಲು ಕೊಡುವ ಹಸು, ವೇಗದ ಕುದುರೆ, ಮನೆಗೂ ಸಭೆಗೂ ಯೋಗ್ಯನಾದ, ತಂದೆಗೆ ಕೀರ್ತಿ ತರುವ ಕರ್ಮಕುಶಲ ಮಗನನ್ನು ಕೊಡುತ್ತಾನೆ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'तमीशानं जगतस्तस्थुषस्पतिं धियंजिन्वमवसे हूमहे वयम् ।\nपूषा नो यथा वेदसामसद्वृधे रक्षिता पायुरदब्धः स्वस्तये ॥',
          meaning: {
            en: '(North-east) We call for protection on Īśāna, lord of all that moves and stands, who quickens our minds, so that Pūṣan may increase our wealth and be our unfailing guardian for our welfare.',
            kn: '(ಈಶಾನ್ಯ) ಚರಾಚರ ಜಗತ್ತಿನ ಒಡೆಯನೂ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವವನೂ ಆದ ಈಶಾನನನ್ನು ರಕ್ಷಣೆಗಾಗಿ ಕರೆಯುತ್ತೇವೆ; ಪೂಷನು ನಮ್ಮ ಸಂಪತ್ತನ್ನು ವೃದ್ಧಿಸಿ, ಸೋಲದ ರಕ್ಷಕನಾಗಿ ನಮ್ಮ ಕ್ಷೇಮವನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
      ],
    },
    // 25 ────────────────────────────────────────────────────────────
    {
      title: 'सन्ध्यादिदेवतानमस्कारः',
      titleEn: 'Salutation to Sandhyā and the deities',
      note:
        'Standing with folded hands, salute Sandhyā and the other deities, the sages, teachers and parents. With कामोऽकार्षीत्… confess that desire and anger, not your true self, drove your wrongs. Then bow to Vāsudeva and Sandhyā, to Kṛṣṇa as the friend of cows and Brāhmaṇas, and take refuge in Durgā.',
      noteKn:
        'ನಿಂತು ಕೈಮುಗಿದು ಸಂಧ್ಯಾದೇವಿ ಮುಂತಾದ ದೇವತೆಗಳಿಗೂ ಋಷಿಮುನಿಗಳಿಗೂ ಗುರುಗಳಿಗೂ ತಂದೆತಾಯಿಯರಿಗೂ ನಮಸ್ಕರಿಸಿ. “ಕಾಮೋಽಕಾರ್ಷೀತ್” ಹೇಳುವಾಗ ನನ್ನ ತಪ್ಪುಗಳಿಗೆ ಕಾಮಕ್ರೋಧಗಳೇ ಕಾರಣ ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು. ನಂತರ ವಾಸುದೇವನಿಗೂ ಸಂಧ್ಯಾದೇವಿಗೂ, ಗೋಬ್ರಾಹ್ಮಣಹಿತನಾದ ಶ್ರೀಕೃಷ್ಣನಿಗೂ ನಮಸ್ಕರಿಸಿ, ದುರ್ಗಾದೇವಿಯಲ್ಲಿ ಶರಣು ಹೋಗಿ.',
      verses: [
        {
          text:
            'ॐ सन्ध्यायै नमः । सावित्र्यै नमः । गायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमः । मुनिभ्यो नमः । ऋषिभ्यो नमः ।\nगुरुभ्यो नमः । मातृभ्यो नमः । पितृभ्यो नमः । आचार्येभ्यो नमः ।\nकामोऽकार्षीन्नमो नमः । मन्युरकार्षीन्नमो नमः ॥',
          meaning: {
            en: 'Salutations to Sandhyā, Sāvitrī, Gāyatrī and Sarasvatī, to all the deities, to the sages and seers, to the gurus, mothers, fathers and teachers. Desire did it, salutations; anger did it, salutations.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ಗಾಯತ್ರೀ, ಸರಸ್ವತೀ ದೇವಿಯರಿಗೂ, ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ, ಮುನಿಗಳಿಗೂ ಋಷಿಗಳಿಗೂ, ಗುರುಗಳಿಗೂ ತಾಯಿತಂದೆಯರಿಗೂ ಆಚಾರ್ಯರಿಗೂ ನಮಸ್ಕಾರ. ಕಾಮವೇ ಮಾಡಿಸಿತು, ನಮಸ್ಕಾರ; ಕ್ರೋಧವೇ ಮಾಡಿಸಿತು, ನಮಸ್ಕಾರ.',
          },
        },
        {
          text:
            'ॐ नमो भगवते वासुदेवाय ।\nयां सदा सर्वभूतानि स्थावराणि चराणि च ।\nसायं प्रातर्नमस्यन्ति सा मां सन्ध्याभिरक्षतु ॥',
          meaning: {
            en: 'Om, salutations to Lord Vāsudeva. May that Sandhyā, to whom all beings, moving and unmoving, bow evening and morning, protect me.',
            kn: 'ಓಂ, ಭಗವಾನ್ ವಾಸುದೇವನಿಗೆ ನಮಸ್ಕಾರ. ಚರಾಚರ ಜೀವಿಗಳೆಲ್ಲವೂ ಸಂಜೆ ಬೆಳಗ್ಗೆ ಯಾರಿಗೆ ನಮಸ್ಕರಿಸುತ್ತವೆಯೋ ಆ ಸಂಧ್ಯಾದೇವತೆ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        {
          text:
            'ब्रह्मण्यो देवकीपुत्रो ब्रह्मण्यो मधुसूदनः ।\nब्रह्मण्यः पुण्डरीकाक्षो ब्रह्मण्यो विष्णुरच्युतः ॥\nनमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च ।\nजगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥',
          meaning: {
            en: 'The son of Devakī, Madhusūdana, the lotus-eyed one, the imperishable Viṣṇu — he is devoted to the Veda and its followers. Salutations again and again to Kṛṣṇa, Govinda, the Lord dear to the Veda-knowers, who works for the good of cows, Brāhmaṇas and the whole world.',
            kn: 'ದೇವಕೀಪುತ್ರನೂ, ಮಧುಸೂದನನೂ, ಪುಂಡರೀಕಾಕ್ಷನೂ, ಅಚ್ಯುತನಾದ ವಿಷ್ಣುವೂ ವೇದಕ್ಕೂ ವೇದನಿಷ್ಠರಿಗೂ ಪ್ರಿಯನಾದವನು. ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಸಮಸ್ತ ಜಗತ್ತಿಗೂ ಹಿತವನ್ನುಂಟುಮಾಡುವ ಬ್ರಹ್ಮಣ್ಯದೇವನಾದ ಶ್ರೀಕೃಷ್ಣ ಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text:
            'शिवाय विष्णुरूपाय शिवरूपाय विष्णवे ।\nशिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः ॥\nयथा शिवमयो विष्णुरेवं विष्णुमयः शिवः ।\nयथान्तरं न पश्यामि तथा मे स्वस्तिरायुषि ॥',
          meaning: {
            en: 'Salutations to Śiva in the form of Viṣṇu and to Viṣṇu in the form of Śiva; Viṣṇu is the heart of Śiva and Śiva the heart of Viṣṇu. As Viṣṇu is full of Śiva and Śiva full of Viṣṇu, and I see no difference between them, so may there be well-being in my life.',
            kn: 'ವಿಷ್ಣುರೂಪನಾದ ಶಿವನಿಗೂ ಶಿವರೂಪನಾದ ವಿಷ್ಣುವಿಗೂ ನಮಸ್ಕಾರ; ಶಿವನ ಹೃದಯ ವಿಷ್ಣು, ವಿಷ್ಣುವಿನ ಹೃದಯ ಶಿವ. ವಿಷ್ಣುವು ಶಿವಮಯನಾಗಿರುವಂತೆ ಶಿವನು ವಿಷ್ಣುಮಯನು; ಅವರಲ್ಲಿ ನಾನು ಭೇದವನ್ನು ಕಾಣದಿರುವಂತೆಯೇ ನನ್ನ ಆಯುಷ್ಯದಲ್ಲಿ ಕ್ಷೇಮವಿರಲಿ.',
          },
        },
        {
          text:
            'क्षीरेण स्नापिते देवि चन्दनेन विलेपिते ।\nबिल्वपत्रार्चिते देवि दुर्गेऽहं शरणं गतः ॥',
          meaning: {
            en: 'O Goddess Durgā, bathed in milk, anointed with sandal and worshipped with bilva leaves — I have come to you for refuge.',
            kn: 'ಹಾಲಿನಿಂದ ಅಭಿಷಿಕ್ತಳಾದ, ಚಂದನದಿಂದ ಲೇಪಿತಳಾದ, ಬಿಲ್ವಪತ್ರಗಳಿಂದ ಪೂಜಿತಳಾದ ಓ ದುರ್ಗಾದೇವಿ, ನಾನು ನಿನ್ನಲ್ಲಿ ಶರಣು ಬಂದಿದ್ದೇನೆ.',
          },
        },
      ],
    },
    // 26 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्र्युद्वासनम्',
      titleEn: 'Gāyatrī udvāsana (farewell)',
      note:
        'With folded hands bid Gāyatrī farewell, then recite the verses offering all salutations to Keśava and bow.',
      noteKn: 'ಕೈಮುಗಿದು ಗಾಯತ್ರಿಯನ್ನು ಬೀಳ್ಕೊಡಿ; ನಂತರ ಎಲ್ಲ ನಮಸ್ಕಾರಗಳನ್ನೂ ಕೇಶವನಿಗೆ ಅರ್ಪಿಸುವ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ ನಮಸ್ಕರಿಸಿ.',
      verses: [
        {
          text: 'उत्तमे शिखरे जाते भूम्यां पर्वतमूर्धनि ।\nब्राह्मणेभ्योऽभ्यनुज्ञाता गच्छ देवि यथासुखम् ॥',
          meaning: {
            en: 'O Goddess, dwelling on the highest peak, on the summit of the mountain on earth: with the leave of the Brāhmaṇas, go now as you please.',
            kn: 'ಭೂಮಿಯ ಮೇಲಿನ ಪರ್ವತದ ಉನ್ನತ ಶಿಖರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಓ ದೇವಿ, ಬ್ರಾಹ್ಮಣರ ಅನುಮತಿಯೊಂದಿಗೆ ನಿನಗೆ ಸುಖವಾಗುವಂತೆ ತೆರಳು.',
          },
        },
        {
          text: 'आकाशात्पतितं तोयं यथा गच्छति सागरम् ।\nसर्वदेवनमस्कारः केशवं प्रति गच्छति ॥',
          meaning: {
            en: 'Just as all water falling from the sky flows on to the ocean, salutations offered to any deity reach Keśava.',
            kn: 'ಆಕಾಶದಿಂದ ಬಿದ್ದ ನೀರೆಲ್ಲವೂ ಕೊನೆಗೆ ಸಮುದ್ರವನ್ನೇ ಸೇರುವಂತೆ, ಯಾವ ದೇವತೆಗೆ ಮಾಡಿದ ನಮಸ್ಕಾರವೂ ಕೇಶವನನ್ನೇ ಸೇರುತ್ತದೆ.',
          },
        },
        {
          text: 'वासनाद्वासुदेवस्य वासितं ते जगत्त्रयम् ।\nसर्वभूतनिवासोऽसि वासुदेव नमोऽस्तु ते ॥',
          meaning: {
            en: 'O Vāsudeva, the three worlds are pervaded by you because you dwell in them; you are the abode of all beings — salutations to you.',
            kn: 'ಓ ವಾಸುದೇವ, ನೀನು ವಾಸಿಸಿರುವುದರಿಂದಲೇ ಮೂರು ಲೋಕಗಳೂ ನಿನ್ನಿಂದ ವ್ಯಾಪ್ತವಾಗಿವೆ; ಸಮಸ್ತ ಜೀವಿಗಳ ನೆಲೆ ನೀನೇ — ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text:
            'नमोऽस्त्वनन्ताय सहस्रमूर्तये\nसहस्रपादाक्षिशिरोरुबाहवे ।\nसहस्रनाम्ने पुरुषाय शाश्वते\nसहस्रकोटियुगधारिणे नमः ॥',
          meaning: {
            en: 'Salutations to the infinite Lord of a thousand forms, with a thousand feet, eyes, heads, thighs and arms; to the eternal Person of a thousand names, who upholds thousands of crores of ages.',
            kn: 'ಸಾವಿರ ರೂಪಗಳ, ಸಾವಿರ ಪಾದ, ಕಣ್ಣು, ತಲೆ, ತೊಡೆ, ತೋಳುಗಳುಳ್ಳ ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ; ಸಾವಿರ ನಾಮಗಳ, ಸಾವಿರಾರು ಕೋಟಿ ಯುಗಗಳನ್ನು ಧರಿಸುವ ಶಾಶ್ವತ ಪುರುಷನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    // 27 ────────────────────────────────────────────────────────────
    {
      title: 'गोत्राभिवादनम्',
      titleEn: 'Abhivādana (formal self-introduction)',
      note:
        'Recite the peace prayer and blessing. Then, for abhivādana, hold the right ear with the left hand and the left ear with the right hand (arms crossed), and give your pravara (the names of the ṛṣis of your gotra), gotra, sūtra, śākhā and name in place of the अमुक words; at the end bow and touch the ground. Do ācamana twice afterwards.',
      noteKn:
        'ಶಾಂತಿಮಂತ್ರ ಮತ್ತು ಆಶೀರ್ವಾದ ವಾಕ್ಯಗಳನ್ನು ಹೇಳಿ. ನಂತರ ಅಭಿವಾದನಕ್ಕೆ ಕೈಗಳನ್ನು ಅಡ್ಡವಾಗಿಸಿ ಎಡಗೈಯಿಂದ ಬಲ ಕಿವಿಯನ್ನೂ ಬಲಗೈಯಿಂದ ಎಡ ಕಿವಿಯನ್ನೂ ಹಿಡಿದು, “ಅಮುಕ” ಎಂದಿರುವಲ್ಲಿ ನಿಮ್ಮ ಪ್ರವರ (ಗೋತ್ರದ ಋಷಿಗಳ ಹೆಸರುಗಳು), ಗೋತ್ರ, ಸೂತ್ರ, ಶಾಖೆ ಮತ್ತು ಹೆಸರನ್ನು ಹೇಳಿ; ಕೊನೆಯಲ್ಲಿ ಬಾಗಿ ನೆಲವನ್ನು ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಿ. ನಂತರ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
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
            en: 'May all misfortunes be stilled; may every blessing be attained. May there be good to cows and Brāhmaṇas as far as the four oceans.',
            kn: 'ಎಲ್ಲ ಅರಿಷ್ಟಗಳೂ ಶಾಂತವಾಗಲಿ; ಸಮಸ್ತ ಮಂಗಳಗಳೂ ಲಭಿಸಲಿ. ನಾಲ್ಕು ಸಮುದ್ರಗಳವರೆಗಿನ ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಶುಭವಾಗಲಿ.',
          },
        },
        {
          text: 'अमुकप्रवरान्वित अमुकगोत्रः आश्वलायनसूत्रः\nऋक्शाखाध्यायी अमुकशर्माहं भो अभिवादये ॥',
          meaning: {
            en: 'I, so-and-so Śarmā, of such-and-such gotra with its pravara, following the Āśvalāyana sūtra and studying the Ṛgveda śākhā, offer my respectful salutation.',
            kn: 'ಇಂತಹ ಪ್ರವರದಿಂದ ಕೂಡಿದ ಇಂತಹ ಗೋತ್ರದ, ಆಶ್ವಲಾಯನ ಸೂತ್ರದ, ಋಕ್‌ಶಾಖೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಇಂತಹ ಶರ್ಮನಾದ ನಾನು ವಿನಯದಿಂದ ಅಭಿವಾದನ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 28 ────────────────────────────────────────────────────────────
    {
      title: 'समर्पणम्',
      titleEn: 'Samarpaṇa (offering the worship to the Lord)',
      note:
        'Take water in the right hand and recite: यस्य स्मृत्या…, मन्त्रहीनं…, then the dedication for the time of day followed by your tradition’s wording, and pour the water into the plate. Do ācamana twice. To make good any fault in mantra, tone or syllable, say the saṅkalpa and the three names Acyuta, Ananta, Govinda (three times). Close with कायेन वाचा….',
      noteKn:
        'ಬಲಗೈಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು “ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ”, “ಮಂತ್ರಹೀನಂ”, ನಂತರ ಆ ಕಾಲದ ಸಮರ್ಪಣ ವಾಕ್ಯ ಮತ್ತು ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ವಾಕ್ಯವನ್ನು ಹೇಳಿ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಿ. ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ. ಮಂತ್ರ, ಸ್ವರ, ಅಕ್ಷರಗಳಲ್ಲಾದ ದೋಷಗಳ ಪರಿಹಾರಕ್ಕೆ ಸಂಕಲ್ಪ ಹೇಳಿ ಅಚ್ಯುತ, ಅನಂತ, ಗೋವಿಂದ ಎಂಬ ಮೂರು ನಾಮಗಳನ್ನು (ಮೂರು ಬಾರಿ) ಜಪಿಸಿ. “ಕಾಯೇನ ವಾಚಾ” ಶ್ಲೋಕದಿಂದ ಮುಗಿಸಿ.',
      verses: [
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपःसन्ध्याक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'By remembering him and uttering his name, whatever is lacking in austerity, sandhyā and other rites is at once made complete: I bow to that Acyuta.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸುವುದರಿಂದಲೂ ಯಾರ ನಾಮವನ್ನು ಉಚ್ಚರಿಸುವುದರಿಂದಲೂ ತಪಸ್ಸು, ಸಂಧ್ಯೆ ಮುಂತಾದ ಕರ್ಮಗಳಲ್ಲಿನ ಕೊರತೆ ತಕ್ಷಣ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: MADHVA },
          text: 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'O Lord of Ramā, whatever I have done lacking in mantra, in action or in devotion — O God, may it be made complete for me.',
            kn: 'ಓ ರಮಾಪತಿ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿಂದ ನಾನು ಏನು ಮಾಡಿದ್ದೇನೋ, ಓ ದೇವ, ಅದು ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'O Janārdana, whatever I have done lacking in mantra, in action or in devotion — O God, may it be made complete for me.',
            kn: 'ಓ ಜನಾರ್ದನ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿಂದ ನಾನು ಏನು ಮಾಡಿದ್ದೇನೋ, ಓ ದೇವ, ಅದು ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'अनेन प्रातःसन्ध्यावन्दनेन',
          meaning: { en: 'By this morning sandhyā worship', kn: 'ಈ ಪ್ರಾತಃಸಂಧ್ಯಾವಂದನೆಯಿಂದ' },
        },
        {
          when: { time: ['midday'] },
          text: 'अनेन माध्याह्निकसन्ध्यावन्दनेन',
          meaning: { en: 'By this midday sandhyā worship', kn: 'ಈ ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯಾವಂದನೆಯಿಂದ' },
        },
        {
          when: { time: ['evening'] },
          text: 'अनेन सायंसन्ध्यावन्दनेन',
          meaning: { en: 'By this evening sandhyā worship', kn: 'ಈ ಸಾಯಂಸಂಧ್ಯಾವಂದನೆಯಿಂದ' },
        },
        {
          when: { tradition: MADHVA },
          text: 'भगवान् भारतीरमणमुख्यप्राणान्तर्गत\nसवितृनामक श्रीलक्ष्मीनारायणः प्रीयताम् ।\nप्रीतो वरदो भवतु । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: '…may Lord Śrī Lakṣmīnārāyaṇa, named Savitṛ, dwelling within Mukhyaprāṇa the consort of Bhāratī, be pleased; being pleased, may he grant his blessings. May it be an offering to Śrī Kṛṣṇa.',
            kn: '…ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ; ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡುವವನಾಗಲಿ. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          when: { tradition: SMARTA },
          text: 'भगवान् सर्वात्मकः प्रीयताम् ।\nसर्वं श्रीपरमेश्वरार्पणमस्तु ॥',
          meaning: {
            en: '…may the Lord, the Self of all, be pleased. May all this be an offering to the Supreme Lord.',
            kn: '…ಸರ್ವಾತ್ಮಕನಾದ ಭಗವಂತನು ಪ್ರೀತನಾಗಲಿ. ಎಲ್ಲವೂ ಪರಮೇಶ್ವರನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          text:
            'मध्ये मन्त्रतन्त्रस्वरवर्णलोपदोषप्रायश्चित्तार्थं नामत्रयमन्त्रजपं करिष्ये ।\nअच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ।\nअच्युतानन्तगोविन्देभ्यो नमः ॥',
          meaning: {
            en: 'To atone for any omission or fault in mantra, procedure, tone or syllable during the rite, I shall recite the three names: salutations to Acyuta, to Ananta, to Govinda; salutations to Acyuta, Ananta and Govinda.',
            kn: 'ಕರ್ಮದ ನಡುವೆ ಮಂತ್ರ, ತಂತ್ರ, ಸ್ವರ, ವರ್ಣಗಳಲ್ಲಾದ ಲೋಪದೋಷಗಳ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ ನಾಮತ್ರಯ ಜಪ ಮಾಡುತ್ತೇನೆ: ಅಚ್ಯುತನಿಗೆ, ಅನಂತನಿಗೆ, ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ; ಅಚ್ಯುತ–ಅನಂತ–ಗೋವಿಂದರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text:
            'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Nārāyaṇa.',
            kn: 'ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 29 ────────────────────────────────────────────────────────────
    {
      title: 'स्थानप्रोक्षणम्',
      titleEn: 'Sprinkling the place (where practised)',
      note:
        'Many Karnataka families finish by sprinkling a ladle of water on the place where they sat, reciting these two ṛks to Savitṛ (Ṛgveda 5.82.4–5), touching the moistened ground and applying a little of it to the forehead — it is said that if the place of japa is not sprinkled, Indra takes away its merit.',
      noteKn:
        'ಕರ್ನಾಟಕದ ಅನೇಕ ಮನೆತನಗಳಲ್ಲಿ ಕೊನೆಯಲ್ಲಿ ಕುಳಿತ ಸ್ಥಳಕ್ಕೆ ಒಂದು ಉದ್ಧರಣೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ಸವಿತೃವಿನ ಈ ಎರಡು ಋಕ್ಕುಗಳನ್ನು (ಋಗ್ವೇದ ೫.೮೨.೪–೫) ಹೇಳುತ್ತಾ ಒದ್ದೆಯಾದ ನೆಲವನ್ನು ಮುಟ್ಟಿ ಸ್ವಲ್ಪವನ್ನು ಹಣೆಗೆ ಹಚ್ಚಿಕೊಳ್ಳುತ್ತಾರೆ — ಜಪಸ್ಥಾನವನ್ನು ಪ್ರೋಕ್ಷಿಸದಿದ್ದರೆ ಅದರ ಫಲವನ್ನು ಇಂದ್ರನು ಕೊಂಡೊಯ್ಯುತ್ತಾನೆ ಎಂಬ ಮಾತಿದೆ.',
      verses: [
        {
          text: 'अद्या नो देव सवितः प्रजावत्सावीः सौभगम् ।\nपरा दुष्ष्वप्न्यं सुव ॥',
          meaning: {
            en: 'O god Savitṛ, today send us good fortune with offspring; drive away bad dreams.',
            kn: 'ಓ ಸವಿತೃದೇವ, ಇಂದು ನಮಗೆ ಸಂತಾನಸಹಿತವಾದ ಸೌಭಾಗ್ಯವನ್ನು ಕರುಣಿಸು; ದುಃಸ್ವಪ್ನಗಳನ್ನು ದೂರಮಾಡು.',
          },
        },
        {
          text: 'विश्वानि देव सवितर्दुरितानि परा सुव ।\nयद्भद्रं तन्न आ सुव ॥',
          meaning: {
            en: 'O god Savitṛ, drive away all evils; send us whatever is good.',
            kn: 'ಓ ಸವಿತೃದೇವ, ಎಲ್ಲ ದುರಿತಗಳನ್ನೂ ದೂರಮಾಡು; ಯಾವುದು ಮಂಗಳಕರವೋ ಅದನ್ನು ನಮಗೆ ಕರುಣಿಸು.',
          },
        },
      ],
    },
  ],
};
