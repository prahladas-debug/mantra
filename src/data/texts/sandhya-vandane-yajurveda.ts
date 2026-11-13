/**
 * Yajurveda Sandhyāvandanam (Kṛṣṇa-Yajurveda, Taittirīya śākhā, Āpastamba sūtra):
 * morning, midday and evening, with Mādhva and Smārta wordings as reader-selectable
 * variants. Collated from the witnesses below; NOT YET PROOFREAD page by page against
 * one printed edition.
 *
 * Sandhyā manuals used:
 * - Mādhva (primary): Pt. Vādirājācārya Karaṇam (comp.), "Yajurvedīya Trikāla
 *   Sandhyāvandane", Vishva Madhva Maha Parishat / Sri Uttarādi Maṭha, Bengaluru, 2011
 *   (Kannada script). archive.org: Yajurveda_Trikala_Sandhyavandana_-_Vadirajacharya_Karnam
 * - Mādhva: P. Vedavyāsācārya (pub.), "Yajurveda Trikāla Sandhyāvandanamu", Sri Uttarādi
 *   Maṭha, Hyderabad (Telugu script). archive.org: madhwa-yajurveda-sandhyavidhi
 * - Smārta (primary): Paiṅgānāḍu Veṅkaṭarāma Śāstrī, "Smārta Yajurveda Sandhyāvandanam"
 *   (Tamil script, Kanchi tradition, 1986/1997). archive.org: SandhyaVandanam_201802
 * - Smārta: B. V. Kamesvara Aiyar, "The Sandhyavandanam of Rig, Yajus and Sāma Vedins"
 *   (Madras). archive.org: sv-bvka-ao (procedure, arghya counts, saṅkalpa).
 * - Smārta (Karnataka): "Ṛgvedīya Smārta Nityāhnika Vidhiḥ" (Kannada script).
 *   archive.org: sandhyavandane-balkur-copys (saṅkalpa / samarpaṇa wording, nāmatraya).
 * - Sudhārthi (Hassan), "Trimatastha Sandhyāvandane", Gāyatrī Sevā Pratiṣṭhāna, Bengaluru,
 *   1992 (Kannada script). archive.org: gqra_thrimatastha-sandhyavandane-... (Smārta
 *   saṅkalpa and Gāyatrī dhyāna cross-check).
 * - Cross-check only (Śrīvaiṣṇava): Nārāyaṇa Yati, Yajurveda Sandhyāvandana Bhāṣya with
 *   prayoga, tr. V. Sadagopan (sadagopan.org; vishvAsa.github.io/vedAH_yajuH).
 * - Wikipedia, "Sandhyavandanam" (Taittirīya Smārta section): order of steps.
 *
 * Vedic mantras were checked (accents removed) against the vishvAsa/vedAH_yajuH texts of
 * the Taittirīya Saṃhitā (1.4, 1.5, 1.8, 2.1, 3.4, 4.1, 5.6; Sāyaṇa text for 5.6.1),
 * Taittirīya Brāhmaṇa 2.4.4 and 2.6.6, and Taittirīya Āraṇyaka 2.2, 2.12, 2.20, 4.42 and
 * prapāṭhaka 10 (Mahānārāyaṇa, Āndhra recension: prāśana, āvāhana and udvāsana mantras).
 * Where the manuals differ, the reading backed by two witnesses or by the Vedic text is used.
 */
import type { Mantra } from '../types';

const M = ['madhva'];
const S = ['smarta'];

export const sandhyaVandaneYajurveda: Mantra = {
  id: 'sandhya-vandane-yajurveda',
  title: 'यजुर्वेदसन्ध्यावन्दनम्',
  titleEn: 'Yajurveda Sandhyavandane',
  category: 'sandhya',
  order: 2,
  deity: 'Savitṛ / Gāyatrī (Śrī Lakṣmīnārāyaṇa in the solar orb)',
  source: 'Taittirīya Saṃhitā, Brāhmaṇa and Āraṇyaka (Mahānārāyaṇa); Āpastamba practice',
  summary:
    'The complete daily twilight worship of Kṛṣṇa-Yajurvedins of the Taittirīya śākhā, step by step: ācamana, prāṇāyāma, saṅkalpa, mārjana, prāśana, punar-mārjana, aghamarṣaṇa, arghya to the Sun, Gāyatrī āvāhana, japa and udvāsana, upasthāna, salutations, abhivādana and samarpaṇa. Choose Mādhva or Smārta and the time of day at the top; the mantras and instructions change accordingly.',
  summaryKn:
    'ತೈತ್ತಿರೀಯ ಶಾಖೆಯ ಕೃಷ್ಣಯಜುರ್ವೇದಿಗಳು ಪ್ರತಿದಿನ ಮಾಡುವ ಸಂಧ್ಯಾವಂದನೆಯ ಪೂರ್ಣ ಕ್ರಮ: ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ಸಂಕಲ್ಪ, ಮಾರ್ಜನ, ಪ್ರಾಶನ, ಪುನರ್ಮಾರ್ಜನ, ಅಘಮರ್ಷಣ, ಸೂರ್ಯನಿಗೆ ಅರ್ಘ್ಯ, ಗಾಯತ್ರೀ ಆವಾಹನ, ಜಪ, ಉದ್ವಾಸನ, ಉಪಸ್ಥಾನ, ನಮಸ್ಕಾರಗಳು, ಅಭಿವಾದನ ಮತ್ತು ಸಮರ್ಪಣೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಸಂಪ್ರದಾಯವನ್ನೂ ಕಾಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ; ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ಮಂತ್ರಗಳು ಮತ್ತು ಸೂಚನೆಗಳು ಬದಲಾಗುತ್ತವೆ.',
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
    'Collated from Uttarādi Maṭha (Mādhva) and Kanchi / Karnataka Smārta manuals; not yet proofread against a single printed edition. Left out because the sources disagree or could not be read reliably: the pavamānaḥ suvarjanaḥ… mantras (not prescribed for punar-mārjana in the sandhyā manuals consulted; they belong to snāna); the Mādhva short prayers after arghya (hṛdayasthā tu gāyatrī…, ehi tvaṃ devi…, uttiṣṭhottiṣṭha…) and the closing ślokas akṣayaṃ karma… and nāhaṃ kartā hariḥ kartā…; the time-specific Smārta Gāyatrī dhyāna ślokas (prātar bālārka… etc.); the Smārta Yama, Narmadā, Āstīka and namaḥ savitre… salutations; the Smārta 24 + 8 mudrā-pradarśana; the gopīcandana / mudrā-dhāraṇa mantras; and the ṛṣi–chandas–devatā lines of mantras on which the manuals disagree. Brahmayajña and agnikārya are separate rites and are not included. Families differ in small details; follow your elders or purohita.',
  sections: [
    // 1 ─────────────────────────────────────────────────────────────
    {
      title: 'पूर्वाङ्गम्',
      titleEn: 'Preparation',
      note:
        'Bathe (or at least wash hands, feet and face, and rinse the mouth) and wear clean, washed clothes: a dhoti in kaccha style and an upper cloth, with the yajñopavīta over the left shoulder. Sit on a clean seat (darbha, wool or wood), never on the bare floor. Face east in the morning, east or north at midday, and west in the evening (some families face north in the evening). Keep a vessel of fresh water with a small spoon (uddharaṇī) and a plate to receive offered water, and wear a darbha pavitra ring on the right ring finger. Mādhva: apply gopīcandana ūrdhvapuṇḍra (the twelve vertical marks with the names Keśava … Dāmodara) and the mudrā marks (śaṅkha, cakra, gadā, padma, Nārāyaṇa) as taught by your guru. Smārta: apply bhasma or the family tilaka. Then remember Viṣṇu with the verse below and sprinkle a little water on your head.',
      noteKn:
        'ಸ್ನಾನಮಾಡಿ (ಅಥವಾ ಕನಿಷ್ಠ ಕೈಕಾಲು ಮುಖ ತೊಳೆದು, ಬಾಯಿ ಮುಕ್ಕಳಿಸಿ) ಮಡಿಯಾದ ಬಟ್ಟೆ ಧರಿಸಬೇಕು: ಕಚ್ಚೆ ಹಾಕಿದ ಪಂಚೆ, ಉತ್ತರೀಯ; ಯಜ್ಞೋಪವೀತ ಎಡಭುಜದ ಮೇಲಿರಲಿ. ದರ್ಭೆ, ಕಂಬಳಿ ಅಥವಾ ಮರದ ಮಣೆಯ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಬೇಕು; ಬರೀ ನೆಲದ ಮೇಲೆ ಬೇಡ. ಬೆಳಿಗ್ಗೆ ಪೂರ್ವಕ್ಕೆ, ಮಧ್ಯಾಹ್ನ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ, ಸಂಜೆ ಪಶ್ಚಿಮಕ್ಕೆ ಮುಖಮಾಡಿ ಕುಳಿತುಕೊಳ್ಳಿ (ಕೆಲವು ಮನೆತನಗಳಲ್ಲಿ ಸಂಜೆ ಉತ್ತರಾಭಿಮುಖ). ಶುದ್ಧಜಲವಿರುವ ಪಂಚಪಾತ್ರೆ, ಉದ್ಧರಣೆ, ನೀರು ಬಿಡಲು ಒಂದು ತಟ್ಟೆ ಇಟ್ಟುಕೊಳ್ಳಿ; ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿಗೆ ದರ್ಭೆಯ ಪವಿತ್ರ ಧರಿಸಿ. ಮಾಧ್ವರು: ಕೇಶವಾದಿ ದ್ವಾದಶನಾಮಗಳಿಂದ ಗೋಪೀಚಂದನದ ಊರ್ಧ್ವಪುಂಡ್ರಗಳನ್ನೂ, ಗುರೂಪದೇಶದಂತೆ ಶಂಖ-ಚಕ್ರ-ಗದಾ-ಪದ್ಮ-ನಾರಾಯಣ ಮುದ್ರೆಗಳನ್ನೂ ಧರಿಸಬೇಕು. ಸ್ಮಾರ್ತರು: ಭಸ್ಮ ಅಥವಾ ಮನೆತನದ ತಿಲಕ ಧರಿಸಬೇಕು. ನಂತರ ಈ ಶ್ಲೋಕದಿಂದ ಶ್ರೀಹರಿಯನ್ನು ಸ್ಮರಿಸಿ ತಲೆಯ ಮೇಲೆ ಸ್ವಲ್ಪ ನೀರು ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
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
    // 2 ─────────────────────────────────────────────────────────────
    {
      title: 'आचमनम्',
      titleEn: 'Ācamana (sipping water)',
      note:
        'Hold the right palm in the shape of a cow’s ear (gokarṇa), take only as much water as would cover a grain of urad dal, and sip it from the base of the palm, without noise, at each of the first three names. Then touch the body with the right hand as each name is said. Mādhva (Uttarādi Maṭha manual): Govinda — wash the left hand; Viṣṇu — wash the right hand; Madhusūdana — upper lip; Trivikrama — lower lip; Vāmana — right cheek; Śrīdhara — left cheek; Hṛṣīkeśa — join both hands; Padmanābha — both feet; Dāmodara — head; Saṅkarṣaṇa — just below the nose; Vāsudeva — right nostril; Pradyumna — left nostril; Aniruddha — right eye; Puruṣottama — left eye; Adhokṣaja — right ear; Nārasiṃha — left ear; Acyuta — navel; Janārdana — heart; Upendra — head; Hari — right arm; Śrīkṛṣṇa — left arm. Many manuals do ācamana twice in succession at the start (dvirācamana), and it is repeated wherever a step below says so. Smārta: many families use the same twenty-four names; the Kanchi (Tamil) manual instead sips with Acyuta, Ananta and Govinda, wipes the lips twice, washes the hand and then touches with Keśava and Nārāyaṇa — right and left cheek (thumb); Mādhava, Govinda — right and left eye (ring finger); Viṣṇu, Madhusūdana — right and left nostril (index finger); Trivikrama, Vāmana — right and left ear (little finger); Śrīdhara, Hṛṣīkeśa — right and left shoulder (middle finger); Padmanābha — chest and Dāmodara — head (all fingers). Follow your family.',
      noteKn:
        'ಬಲಗೈಯನ್ನು ಆಕಳಿನ ಕಿವಿಯ ಆಕಾರದಲ್ಲಿ (ಗೋಕರ್ಣ) ಮಾಡಿ, ಉದ್ದಿನಕಾಳು ಮುಳುಗುವಷ್ಟು ಮಾತ್ರ ನೀರು ಹಾಕಿಕೊಂಡು, ಮೊದಲ ಮೂರು ನಾಮಗಳಿಗೆ ಒಂದೊಂದು ಬಾರಿ ಶಬ್ದಮಾಡದೆ ಅಂಗೈಯ ಬುಡದಿಂದ ಆಚಮನ ಮಾಡಬೇಕು. ಉಳಿದ ನಾಮಗಳಿಗೆ ಅವಯವಗಳನ್ನು ಮುಟ್ಟಬೇಕು. ಮಾಧ್ವರು (ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕದಂತೆ): ಗೋವಿಂದ — ಎಡಗೈ ತೊಳೆಯುವುದು; ವಿಷ್ಣು — ಬಲಗೈ ತೊಳೆಯುವುದು; ಮಧುಸೂದನ — ಮೇಲಿನ ತುಟಿ; ತ್ರಿವಿಕ್ರಮ — ಕೆಳಗಿನ ತುಟಿ; ವಾಮನ — ಬಲಕೆನ್ನೆ; ಶ್ರೀಧರ — ಎಡಕೆನ್ನೆ; ಹೃಷೀಕೇಶ — ಎರಡೂ ಕೈ ಜೋಡಿಸುವುದು; ಪದ್ಮನಾಭ — ಎರಡೂ ಪಾದ; ದಾಮೋದರ — ತಲೆ; ಸಂಕರ್ಷಣ — ಮೂಗಿನ ಕೆಳಭಾಗ; ವಾಸುದೇವ — ಬಲಮೂಗು; ಪ್ರದ್ಯುಮ್ನ — ಎಡಮೂಗು; ಅನಿರುದ್ಧ — ಬಲಗಣ್ಣು; ಪುರುಷೋತ್ತಮ — ಎಡಗಣ್ಣು; ಅಧೋಕ್ಷಜ — ಬಲಕಿವಿ; ನಾರಸಿಂಹ — ಎಡಕಿವಿ; ಅಚ್ಯುತ — ನಾಭಿ; ಜನಾರ್ದನ — ಹೃದಯ; ಉಪೇಂದ್ರ — ತಲೆ; ಹರಿ — ಬಲಭುಜ; ಶ್ರೀಕೃಷ್ಣ — ಎಡಭುಜ. ಆರಂಭದಲ್ಲಿ ಹೀಗೆ ಎರಡು ಬಾರಿ ಆಚಮನ (ದ್ವಿರಾಚಮನ) ಮಾಡುವ ಪದ್ಧತಿ ಹಲವು ಪುಸ್ತಕಗಳಲ್ಲಿದೆ; ಮುಂದೆ ಸೂಚಿಸಿದಲ್ಲೆಲ್ಲಾ ಮತ್ತೆ ಆಚಮನ ಮಾಡಬೇಕು. ಸ್ಮಾರ್ತರು: ಅನೇಕರು ಇದೇ ಇಪ್ಪತ್ತನಾಲ್ಕು ನಾಮಗಳನ್ನು ಬಳಸುತ್ತಾರೆ; ಕಂಚಿ (ತಮಿಳು) ಪದ್ಧತಿಯಲ್ಲಿ ಅಚ್ಯುತ, ಅನಂತ, ಗೋವಿಂದ ನಾಮಗಳಿಂದ ಆಚಮನ ಮಾಡಿ, ತುಟಿಗಳನ್ನು ಎರಡು ಬಾರಿ ಒರೆಸಿ, ಕೈತೊಳೆದು, ಕೇಶವ-ನಾರಾಯಣ — ಬಲ-ಎಡ ಕೆನ್ನೆ (ಹೆಬ್ಬೆರಳು); ಮಾಧವ-ಗೋವಿಂದ — ಬಲ-ಎಡ ಕಣ್ಣು (ಉಂಗುರದ ಬೆರಳು); ವಿಷ್ಣು-ಮಧುಸೂದನ — ಬಲ-ಎಡ ಮೂಗು (ತೋರುಬೆರಳು); ತ್ರಿವಿಕ್ರಮ-ವಾಮನ — ಬಲ-ಎಡ ಕಿವಿ (ಕಿರುಬೆರಳು); ಶ್ರೀಧರ-ಹೃಷೀಕೇಶ — ಬಲ-ಎಡ ಭುಜ (ನಡುಬೆರಳು); ಪದ್ಮನಾಭ — ಎದೆ, ದಾಮೋದರ — ತಲೆ (ಎಲ್ಲ ಬೆರಳು) ಮುಟ್ಟುತ್ತಾರೆ. ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿಯನ್ನು ಅನುಸರಿಸಿ.',
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
            'ॐ गोविन्दाय नमः ।\nॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः ।\nॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः ।\nॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः ।\nॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः ।\nॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः ।\nॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः ।\nॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः ।\nॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः ।\nॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord by his holy names, from Govinda, Viṣṇu and Madhusūdana through to Hari and Śrī Kṛṣṇa; with each name a part of the body is touched, offering it to him.',
            kn: 'ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ ಮೊದಲ್ಗೊಂಡು ಹರಿ, ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಭಗವಂತನ ಪವಿತ್ರ ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಒಂದೊಂದು ಅವಯವವನ್ನು ಮುಟ್ಟಿ ಅವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S },
          text: 'ॐ अच्युताय नमः ।\nॐ अनन्ताय नमः ।\nॐ गोविन्दाय नमः ॥',
          meaning: {
            en: 'Salutations to Acyuta, the never-falling; to Ananta, the endless; and to Govinda. (Kanchi form: a sip is taken with each name.)',
            kn: 'ಎಂದೂ ಚ್ಯುತನಾಗದ ಅಚ್ಯುತನಿಗೆ, ಕೊನೆಯಿಲ್ಲದ ಅನಂತನಿಗೆ, ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ. (ಕಂಚಿ ಪದ್ಧತಿ: ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಆಚಮನ.)',
          },
        },
        {
          when: { tradition: S },
          text: 'केशव । नारायण । माधव । गोविन्द ।\nविष्णो । मधुसूदन । त्रिविक्रम । वामन ।\nश्रीधर । हृषीकेश । पद्मनाभ । दामोदर ॥',
          meaning: {
            en: 'The twelve names of Viṣṇu, from Keśava to Dāmodara, said while touching cheeks, eyes, nostrils, ears, shoulders, chest and head as described above (Kanchi form).',
            kn: 'ಕೇಶವನಿಂದ ದಾಮೋದರನವರೆಗಿನ ವಿಷ್ಣುವಿನ ಹನ್ನೆರಡು ನಾಮಗಳು; ಮೇಲೆ ಹೇಳಿದಂತೆ ಕೆನ್ನೆ, ಕಣ್ಣು, ಮೂಗು, ಕಿವಿ, ಭುಜ, ಎದೆ, ತಲೆಗಳನ್ನು ಮುಟ್ಟುತ್ತಾ ಹೇಳಬೇಕು (ಕಂಚಿ ಪದ್ಧತಿ).',
          },
        },
      ],
    },
    // 3 ─────────────────────────────────────────────────────────────
    {
      title: 'प्राणायामः',
      titleEn: 'Prāṇāyāma (breath control)',
      note:
        'First recite the ṛṣi–chandas–devatā statement (touch the head for the ṛṣi, the mouth or nose-tip for the metre and the chest for the deity). Then do prāṇāyāma, mentally reciting the mantra with its ten Oṃs, keeping its meaning in mind. Hold the nose with the right hand: a brahmacārī uses the thumb, ring and little fingers; a householder uses all five fingers (index and middle fingers folded in). Mādhva (Uttarādi Maṭha manual): recaka — breathe out through the right nostril while reciting once (deity Rudra); pūraka — breathe in through the left while reciting twice (deity Brahmā); kumbhaka — hold the breath while reciting three times (the Lord himself is the deity), remembering Vāyu and Hari throughout; this is sagarbha prāṇāyāma. Smārta (Kanchi manual): close the right nostril with the thumb and breathe in through the left while reciting; close the left with the ring and little fingers, hold, then breathe out slowly through the right; afterwards touch the right ear. Do it once or three times as your family does.',
      noteKn:
        'ಮೊದಲು ಋಷಿ-ಛಂದಸ್ಸು-ದೇವತೆಗಳನ್ನು ಹೇಳಬೇಕು (ಋಷಿಗೆ ತಲೆ, ಛಂದಸ್ಸಿಗೆ ಬಾಯಿ ಅಥವಾ ಮೂಗಿನ ತುದಿ, ದೇವತೆಗೆ ಹೃದಯ ಮುಟ್ಟುವುದು). ನಂತರ ಹತ್ತು ಓಂಕಾರಗಳಿಂದ ಕೂಡಿದ ಮಂತ್ರವನ್ನು ಅರ್ಥಚಿಂತನೆಯೊಂದಿಗೆ ಮನಸ್ಸಿನಲ್ಲಿ ಜಪಿಸುತ್ತಾ ಪ್ರಾಣಾಯಾಮ ಮಾಡಬೇಕು. ಬಲಗೈಯಿಂದ ಮೂಗನ್ನು ಹಿಡಿಯಬೇಕು: ಬ್ರಹ್ಮಚಾರಿಗಳು ಹೆಬ್ಬೆರಳು, ಉಂಗುರದ ಬೆರಳು, ಕಿರುಬೆರಳುಗಳಿಂದ; ಗೃಹಸ್ಥರು ಐದೂ ಬೆರಳುಗಳಿಂದ (ತೋರು-ನಡುಬೆರಳು ಮಡಿಸಿ). ಮಾಧ್ವರು (ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕದಂತೆ): ರೇಚಕ — ಮಂತ್ರವನ್ನು ಒಮ್ಮೆ ಜಪಿಸುತ್ತಾ ಬಲಮೂಗಿನಿಂದ ಉಸಿರು ಬಿಡುವುದು (ದೇವತೆ ರುದ್ರದೇವರು); ಪೂರಕ — ಎರಡು ಬಾರಿ ಜಪಿಸುತ್ತಾ ಎಡಮೂಗಿನಿಂದ ಉಸಿರು ಎಳೆದುಕೊಳ್ಳುವುದು (ದೇವತೆ ಬ್ರಹ್ಮದೇವರು); ಕುಂಭಕ — ಮೂರು ಬಾರಿ ಜಪಿಸುತ್ತಾ ಉಸಿರು ತಡೆದು ಹಿಡಿಯುವುದು (ದೇವತೆ ಸ್ವಯಂ ಪರಮಾತ್ಮ); ವಾಯುದೇವರನ್ನೂ ಶ್ರೀಹರಿಯನ್ನೂ ಸ್ಮರಿಸಬೇಕು — ಇದೇ ಸಗರ್ಭ ಪ್ರಾಣಾಯಾಮ. ಸ್ಮಾರ್ತರು (ಕಂಚಿ ಪುಸ್ತಕದಂತೆ): ಹೆಬ್ಬೆರಳಿನಿಂದ ಬಲಮೂಗು ಮುಚ್ಚಿ ಎಡಮೂಗಿನಿಂದ ಉಸಿರೆಳೆದು, ಉಂಗುರ-ಕಿರುಬೆರಳುಗಳಿಂದ ಎಡಮೂಗು ಮುಚ್ಚಿ ತಡೆದು, ಬಲಮೂಗಿನಿಂದ ನಿಧಾನವಾಗಿ ಬಿಡಬೇಕು; ನಂತರ ಬಲಕಿವಿ ಮುಟ್ಟಬೇಕು. ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ ಒಂದು ಅಥವಾ ಮೂರು ಬಾರಿ ಮಾಡಿ.',
      verses: [
        {
          when: { tradition: M },
          text:
            'प्रणवस्य परब्रह्म ऋषिः । परमात्मा देवता । दैवी गायत्री छन्दः ।\nसप्तानां व्याहृतीनां विश्वामित्रजमदग्निभरद्वाजगौतमात्रिवसिष्ठकश्यपा ऋषयः ।\nअग्निवाय्वादित्यबृहस्पतिवरुणेन्द्रविश्वेदेवा देवताः ।\nगायत्र्युष्णिगनुष्टुब्बृहतीपङ्क्तित्रिष्टुब्जगत्यश्छन्दांसि ।\nगायत्रीशिरसः प्रजापतिरृषिः । ब्रह्माग्निवाय्वादित्या देवताः । यजुश्छन्दः ।\nप्राणायामे विनियोगः ॥',
          meaning: {
            en: 'Of Oṃ, the seer is the Supreme Brahman, the deity the Supreme Self, the metre daivī gāyatrī. Of the seven vyāhṛtis the seers are Viśvāmitra, Jamadagni, Bharadvāja, Gautama, Atri, Vasiṣṭha and Kaśyapa; the deities Agni, Vāyu, Āditya, Bṛhaspati, Varuṇa, Indra and the Viśvedevas; the metres gāyatrī to jagatī. Of the Gāyatrī-śiras the seer is Prajāpati, the deities Brahman, Agni, Vāyu and Āditya, the metre yajus. These are applied in prāṇāyāma.',
            kn: 'ಓಂಕಾರಕ್ಕೆ ಪರಬ್ರಹ್ಮನೇ ಋಷಿ, ಪರಮಾತ್ಮನೇ ದೇವತೆ, ದೈವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು. ಏಳು ವ್ಯಾಹೃತಿಗಳಿಗೆ ವಿಶ್ವಾಮಿತ್ರ, ಜಮದಗ್ನಿ, ಭರದ್ವಾಜ, ಗೌತಮ, ಅತ್ರಿ, ವಸಿಷ್ಠ, ಕಶ್ಯಪರು ಋಷಿಗಳು; ಅಗ್ನಿ, ವಾಯು, ಆದಿತ್ಯ, ಬೃಹಸ್ಪತಿ, ವರುಣ, ಇಂದ್ರ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆಗಳು; ಗಾಯತ್ರಿಯಿಂದ ಜಗತಿಯವರೆಗಿನವು ಛಂದಸ್ಸುಗಳು. ಗಾಯತ್ರೀಶಿರಸ್ಸಿಗೆ ಪ್ರಜಾಪತಿ ಋಷಿ, ಬ್ರಹ್ಮ-ಅಗ್ನಿ-ವಾಯು-ಆದಿತ್ಯರು ದೇವತೆಗಳು, ಯಜುಸ್ಸು ಛಂದಸ್ಸು. ಇವನ್ನು ಪ್ರಾಣಾಯಾಮದಲ್ಲಿ ವಿನಿಯೋಗಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S },
          text:
            'प्रणवस्य ऋषिर्ब्रह्मा । देवी गायत्री छन्दः । परमात्मा देवता ।\nभूरादिसप्तव्याहृतीनाम् अत्रिभृगुकुत्सवसिष्ठगौतमकाश्यपाङ्गिरस ऋषयः ।\nगायत्र्युष्णिगनुष्टुब्बृहतीपङ्क्तित्रिष्टुब्जगत्यश्छन्दांसि ।\nअग्निवाय्वर्कवागीशवरुणेन्द्रविश्वेदेवा देवताः ॥',
          meaning: {
            en: 'Of Oṃ the seer is Brahmā, the metre devī gāyatrī, the deity the Supreme Self. Of the seven vyāhṛtis from bhūḥ, the seers are Atri, Bhṛgu, Kutsa, Vasiṣṭha, Gautama, Kāśyapa and Āṅgirasa; the metres gāyatrī, uṣṇik, anuṣṭubh, bṛhatī, paṅkti, triṣṭubh and jagatī; the deities Agni, Vāyu, Arka (the Sun), Vāgīśa, Varuṇa, Indra and the Viśvedevas.',
            kn: 'ಓಂಕಾರಕ್ಕೆ ಬ್ರಹ್ಮ ಋಷಿ, ದೇವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಪರಮಾತ್ಮ ದೇವತೆ. ಭೂಃ ಮೊದಲಾದ ಏಳು ವ್ಯಾಹೃತಿಗಳಿಗೆ ಅತ್ರಿ, ಭೃಗು, ಕುತ್ಸ, ವಸಿಷ್ಠ, ಗೌತಮ, ಕಾಶ್ಯಪ, ಆಂಗಿರಸರು ಋಷಿಗಳು; ಗಾಯತ್ರೀ, ಉಷ್ಣಿಕ್, ಅನುಷ್ಟುಪ್, ಬೃಹತೀ, ಪಂಕ್ತಿ, ತ್ರಿಷ್ಟುಪ್, ಜಗತೀ ಛಂದಸ್ಸುಗಳು; ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ವಾಗೀಶ, ವರುಣ, ಇಂದ್ರ, ವಿಶ್ವೇದೇವತೆಗಳು ದೇವತೆಗಳು.',
          },
        },
        {
          text:
            'ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhūḥ up to Satya. We meditate on the excellent radiance of the divine Savitṛ, who inspires our minds. Om: he is the waters, the light, the essence, the immortal, Brahman, pervading earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಆಗಿರುವ ಅವನೇ ಮೂರು ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮ.',
          },
        },
      ],
    },
    // 4 ─────────────────────────────────────────────────────────────
    {
      title: 'सङ्कल्पः',
      titleEn: 'Saṅkalpa (resolve)',
      note:
        'Place the left hand, palm up, on the right thigh and cover it with the right hand (or hold a little water or akṣatā in the right hand). Replace each अमुक (“such-and-such”) with the current saṃvatsara, ayana (uttarāyaṇa / dakṣiṇāyana), ṛtu, māsa, pakṣa, tithi, weekday and nakṣatra from the pañcāṅga, and change the place words if you live elsewhere, as taught in your family. Mādhva: say the full deśa-kāla and the Mādhva closing for the time chosen. Smārta: the Kanchi and Madras manuals use only the short resolve (the last line); families that recite the full deśa-kāla often add अष्टाविंशतितमे before कलियुगे, say प्रथमे पादे, and say प्रभवादिषष्टिसंवत्सराणां मध्ये before the year. At the end let the water go into the plate (Smārta Kanchi manual: write ॐ on the water with the ring finger and touch the forehead saying श्रीकेशवाय नमः).',
      noteKn:
        'ಎಡ ಅಂಗೈಯನ್ನು ಮೇಲ್ಮುಖವಾಗಿ ಬಲತೊಡೆಯ ಮೇಲಿಟ್ಟು ಅದರ ಮೇಲೆ ಬಲಗೈಯನ್ನು ಮುಚ್ಚಿಡಿ (ಅಥವಾ ಬಲಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು/ಅಕ್ಷತೆ ಹಿಡಿಯಿರಿ). "ಅಮುಕ" ಎಂಬಲ್ಲಿ ಪಂಚಾಂಗದಿಂದ ಆ ದಿನದ ಸಂವತ್ಸರ, ಅಯನ (ಉತ್ತರಾಯಣ/ದಕ್ಷಿಣಾಯನ), ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳ ಹೆಸರನ್ನು ಹೇಳಬೇಕು; ಬೇರೆ ಪ್ರದೇಶದಲ್ಲಿದ್ದರೆ ಮನೆತನದಲ್ಲಿ ಕಲಿಸಿದಂತೆ ದೇಶವಾಚಕ ಪದಗಳನ್ನು ಬದಲಿಸಬೇಕು. ಮಾಧ್ವರು: ಪೂರ್ಣ ದೇಶಕಾಲಸಂಕೀರ್ತನೆ ಮತ್ತು ಆಯಾ ಕಾಲದ ಮಾಧ್ವ ಸಂಕಲ್ಪವಾಕ್ಯವನ್ನು ಹೇಳಬೇಕು. ಸ್ಮಾರ್ತರು: ಕಂಚಿ ಹಾಗೂ ಮದ್ರಾಸಿನ ಪುಸ್ತಕಗಳಲ್ಲಿ ಕೊನೆಯ ಚಿಕ್ಕ ಸಂಕಲ್ಪವಾಕ್ಯ ಮಾತ್ರ ಇದೆ; ಪೂರ್ಣ ದೇಶಕಾಲ ಹೇಳುವವರು "ಅಷ್ಟಾವಿಂಶತಿತಮೇ ಕಲಿಯುಗೇ ಪ್ರಥಮೇ ಪಾದೇ", "ಪ್ರಭವಾದಿ ಷಷ್ಟಿಸಂವತ್ಸರಾಣಾಂ ಮಧ್ಯೇ" ಎಂದು ಸೇರಿಸುವುದುಂಟು. ಕೊನೆಯಲ್ಲಿ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ (ಕಂಚಿ ಸ್ಮಾರ್ತ ಪದ್ಧತಿ: ಉಂಗುರದ ಬೆರಳಿನಿಂದ ನೀರಿನ ಮೇಲೆ ಓಂ ಎಂದು ಬರೆದು "ಶ್ರೀಕೇಶವಾಯ ನಮಃ" ಎಂದು ಹಣೆಗೆ ಹಚ್ಚಿಕೊಳ್ಳುವುದು).',
      verses: [
        {
          when: { tradition: M },
          text: 'श्रीगोविन्द गोविन्द ।\nश्रीमद्भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य',
          meaning: {
            en: 'Śrī Govinda, Govinda! In the age that moves on by the command of the glorious Lord Viṣṇu, the Supreme Person…',
            kn: 'ಶ್ರೀಗೋವಿಂದ, ಗೋವಿಂದ! ಮಹಾಪುರುಷನಾದ ಭಗವಾನ್ ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ…',
          },
        },
        {
          text:
            'आद्यब्रह्मणः द्वितीयपरार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nकलियुगे प्रथमचरणे भरतवर्षे भरतखण्डे जम्बूद्वीपे\nदण्डकारण्ये देशे गोदावर्याः दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने चान्द्रमानेन व्यावहारिके अमुकनामसंवत्सरे\nअमुकायने अमुकर्तौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'In the second half of the life of the first Brahmā, in the Śveta-varāha kalpa, in the Vaivasvata manvantara, in the first quarter of Kali-yuga, in Bhāratavarṣa of Jambūdvīpa, in the Daṇḍaka forest region south of the Godāvarī, in the Śālivāhana era, in the time of the Buddha avatāra, in the field of Rāma; in the present year of such-and-such name by the lunar reckoning, in such ayana, season, month, fortnight, tithi, weekday and star, with auspicious yoga and karaṇa: on this auspicious day so qualified…',
            kn: 'ಮೊದಲ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದಲ್ಲಿ, ಶ್ವೇತವರಾಹ ಕಲ್ಪದಲ್ಲಿ, ವೈವಸ್ವತ ಮನ್ವಂತರದಲ್ಲಿ, ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಜಂಬೂದ್ವೀಪದ ಭರತವರ್ಷದಲ್ಲಿ, ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯ ಪ್ರದೇಶದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕೆಯಲ್ಲಿ, ಬೌದ್ಧಾವತಾರದ ಕಾಲದಲ್ಲಿ, ರಾಮಕ್ಷೇತ್ರದಲ್ಲಿ; ಚಾಂದ್ರಮಾನದಂತೆ ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಹೆಸರಿನ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ಶುಭಯೋಗ, ಶುಭಕರಣಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          when: { tradition: M, time: ['morning'] },
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं प्रातःसन्ध्योपास्तिं करिष्ये ॥',
          meaning: {
            en: 'Moved by Śrī Lakṣmīnārāyaṇa, called Savitṛ, who dwells within Mukhyaprāṇa, the beloved of Bhāratī, and for his pleasure, I shall perform the morning sandhyā worship.',
            kn: 'ಭಾರತೀರಮಣರಾದ ಮುಖ್ಯಪ್ರಾಣದೇವರಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯಾಗಿರುವ, ಸವಿತೃನಾಮಕನಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: M, time: ['midday'] },
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया\nश्रीविष्णुप्रीत्यर्थं माध्याह्नसन्ध्योपास्तिं करिष्ये ॥',
          meaning: {
            en: 'Moved by Śrī Viṣṇu who dwells within Mukhyaprāṇa, the beloved of Bhāratī, and for his pleasure, I shall perform the midday sandhyā worship.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: M, time: ['evening'] },
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया\nश्रीविष्णुप्रीत्यर्थं सायंसन्ध्योपास्तिं करिष्ये ॥',
          meaning: {
            en: 'Moved by Śrī Viṣṇu who dwells within Mukhyaprāṇa, the beloved of Bhāratī, and for his pleasure, I shall perform the evening sandhyā worship.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಸಾಯಂಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S, time: ['morning'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nप्रातःसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'For the destruction of all the sins I have gathered, and so for the pleasure of the Supreme Lord, I shall worship the morning sandhyā.',
            kn: 'ನಾನು ಸಂಪಾದಿಸಿರುವ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೆಯನ್ನು ಉಪಾಸಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S, time: ['midday'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nमाध्याह्निकं करिष्ये ॥',
          meaning: {
            en: 'For the destruction of all the sins I have gathered, and so for the pleasure of the Supreme Lord, I shall perform the midday worship (mādhyāhnika).',
            kn: 'ನಾನು ಸಂಪಾದಿಸಿರುವ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಮಾಧ್ಯಾಹ್ನಿಕವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S, time: ['evening'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nसायंसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'For the destruction of all the sins I have gathered, and so for the pleasure of the Supreme Lord, I shall worship the evening sandhyā.',
            kn: 'ನಾನು ಸಂಪಾದಿಸಿರುವ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಸಾಯಂಸಂಧ್ಯೆಯನ್ನು ಉಪಾಸಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 5 ─────────────────────────────────────────────────────────────
    {
      title: 'मार्जनम्',
      titleEn: 'Mārjana (sprinkling)',
      note:
        'Say the viniyoga, then sprinkle water at the end of each of the nine pādas (lines), with the fingers of the right hand (Mādhva: with a nirmālya tulasī leaf if available). Pādas 1–7 (up to तस्मा अरं गमाम वः): on the head. Pāda 8 (यस्य क्षयाय जिन्वथ): on the feet (some sprinkle the knees). Pāda 9 (आपो जनयथा च नः): on the head again. Smārta: then take water and, saying ॐ भूर्भुवस्सुवः, circle it clockwise round the head.',
      noteKn:
        'ವಿನಿಯೋಗ ಹೇಳಿ, ಒಂಬತ್ತು ಪಾದಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರ ಕೊನೆಯಲ್ಲಿ ಬಲಗೈ ಬೆರಳುಗಳಿಂದ ನೀರು ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಬೇಕು (ಮಾಧ್ವರು: ಸಾಧ್ಯವಾದರೆ ನಿರ್ಮಾಲ್ಯ ತುಳಸೀದಳದಿಂದ). ಮೊದಲ ಏಳು ಪಾದಗಳು ("ತಸ್ಮಾ ಅರಂ ಗಮಾಮ ವಃ" ವರೆಗೆ) — ತಲೆಯ ಮೇಲೆ; ಎಂಟನೆಯದು ("ಯಸ್ಯ ಕ್ಷಯಾಯ ಜಿನ್ವಥ") — ಪಾದಗಳ ಮೇಲೆ (ಕೆಲವರು ಮೊಣಕಾಲಿಗೆ); ಒಂಬತ್ತನೆಯದು ("ಆಪೋ ಜನಯಥಾ ಚ ನಃ") — ಮತ್ತೆ ತಲೆಯ ಮೇಲೆ. ಸ್ಮಾರ್ತರು: ನಂತರ "ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ" ಎಂದು ನೀರನ್ನು ತಲೆಯ ಸುತ್ತ ಪ್ರದಕ್ಷಿಣವಾಗಿ ಸುತ್ತಿಸಬೇಕು.',
      verses: [
        {
          text: 'आपो हि ष्ठेत्यस्य मन्त्रस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।\nआपो देवता । गायत्री छन्दः । मार्जने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “āpo hi ṣṭhā” the seer is Sindhudvīpa son of Ambarīṣa, the deity the Waters, the metre gāyatrī; it is applied in sprinkling.',
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
          when: { tradition: S },
          text: 'ॐ भूर्भुवस्सुवः ॥',
          meaning: {
            en: 'Om, earth, sky and heaven: water is circled round the head with this, enclosing oneself in purity.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ — ಈ ಮಂತ್ರದಿಂದ ತಲೆಯ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತಿಸಿ ತನ್ನನ್ನು ಪವಿತ್ರತೆಯಿಂದ ಆವರಿಸಿಕೊಳ್ಳುವುದು.',
          },
        },
      ],
    },
    // 6 ─────────────────────────────────────────────────────────────
    {
      title: 'प्राशनम्',
      titleEn: 'Prāśana (sipping consecrated water)',
      note:
        'Take a little water in the right palm held like a cow’s ear, consecrate it with the mantra for the time of day, and sip it at स्वाहा. Then do ācamana. Morning: सूर्यश्च मा…; midday: आपः पुनन्तु…; evening: अग्निश्च मा… (Mādhva manuals first say the viniyoga line.)',
      noteKn:
        'ಬಲಗೈಯನ್ನು ಗೋಕರ್ಣಾಕಾರ ಮಾಡಿ ಸ್ವಲ್ಪ ನೀರು ಹಾಕಿಕೊಂಡು, ಆಯಾ ಕಾಲದ ಮಂತ್ರದಿಂದ ಅಭಿಮಂತ್ರಿಸಿ "ಸ್ವಾಹಾ" ಎನ್ನುವಾಗ ಕುಡಿಯಬೇಕು. ನಂತರ ಆಚಮನ ಮಾಡಬೇಕು. ಬೆಳಿಗ್ಗೆ "ಸೂರ್ಯಶ್ಚ ಮಾ…", ಮಧ್ಯಾಹ್ನ "ಆಪಃ ಪುನಂತು…", ಸಂಜೆ "ಅಗ್ನಿಶ್ಚ ಮಾ…". (ಮಾಧ್ವರು ಮೊದಲು ವಿನಿಯೋಗವಾಕ್ಯ ಹೇಳುತ್ತಾರೆ.)',
      verses: [
        {
          when: { tradition: M, time: ['morning'] },
          text: 'सूर्यश्चेति मन्त्रस्य हिरण्यगर्भ ऋषिः ।\nसूर्यमन्युमन्युपतिरात्रयो देवताः । प्रकृतिश्छन्दः ।\nमन्त्राचमने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “sūryaś ca” the seer is Hiraṇyagarbha; the deities are the Sun, Manyu, the lords of Manyu and Night; the metre prakṛti; it is applied in sipping water with mantra.',
            kn: '"ಸೂರ್ಯಶ್ಚ" ಮಂತ್ರಕ್ಕೆ ಹಿರಣ್ಯಗರ್ಭ ಋಷಿ; ಸೂರ್ಯ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ರಾತ್ರಿ ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಮಂತ್ರಾಚಮನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { time: ['morning'] },
          text:
            'सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयद्रात्रिया पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nरात्रिस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसूर्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May the Sun, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the night with mind, speech, hands, feet, belly or organ, may the night wipe it away; whatever wrong is in me, I offer it, and myself, into the Sun, the light that is the source of immortality. Svāhā.',
            kn: 'ಸೂರ್ಯನೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ರಾತ್ರಿಯಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ ಮತ್ತು ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ರಾತ್ರಿದೇವತೆಯು ಅಳಿಸಲಿ; ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸೂರ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
        },
        {
          when: { tradition: M, time: ['midday'] },
          text: 'आपः पुनन्त्विति मन्त्रस्य पूतनामको नारायण ऋषिः ।\nआपो देवता । अष्टिश्छन्दः । अपां प्राशने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “āpaḥ punantu” the seer is Nārāyaṇa called Pūta, the deity the Waters, the metre aṣṭi; it is applied in sipping water.',
            kn: '"ಆಪಃ ಪುನಂತು" ಮಂತ್ರಕ್ಕೆ ಪೂತನಾಮಕ ನಾರಾಯಣ ಋಷಿ, ಜಲದೇವತೆಗಳು ದೇವತೆ, ಅಷ್ಟಿ ಛಂದಸ್ಸು; ಜಲಪ್ರಾಶನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { time: ['midday'] },
          text:
            'आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् ।\nपुनन्तु ब्रह्मणस्पतिर्ब्रह्मपूता पुनातु माम् ।\nयदुच्छिष्टमभोज्यं यद्वा दुश्चरितं मम ।\nसर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहं स्वाहा ॥',
          meaning: {
            en: 'May the waters purify the earth, and the purified earth purify me; may Brahmaṇaspati, and what is made pure by the Veda, purify me. From leftover or forbidden food, from my misdeeds and from gifts taken from the unworthy, may the waters purify me entirely. Svāhā.',
            kn: 'ಜಲವು ಭೂಮಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ, ಶುದ್ಧವಾದ ಭೂಮಿ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಬ್ರಹ್ಮಣಸ್ಪತಿಯೂ ವೇದದಿಂದ ಪವಿತ್ರವಾದುದೂ ನನ್ನನ್ನು ಪಾವನಗೊಳಿಸಲಿ. ಎಂಜಲು, ತಿನ್ನಬಾರದ ಆಹಾರ, ನನ್ನ ದುರಾಚಾರ, ಅಯೋಗ್ಯರಿಂದ ಪಡೆದ ದಾನ ಇವೆಲ್ಲದರಿಂದ ಜಲವು ನನ್ನನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಶುದ್ಧಗೊಳಿಸಲಿ, ಸ್ವಾಹಾ.',
          },
        },
        {
          when: { tradition: M, time: ['evening'] },
          text: 'अग्निश्चेति मन्त्रस्य हिरण्यगर्भ ऋषिः ।\nअग्निमन्युमन्युपत्यहानि देवताः । प्रकृतिश्छन्दः ।\nमन्त्राचमने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “agniś ca” the seer is Hiraṇyagarbha; the deities are Agni, Manyu, the lords of Manyu and Day; the metre prakṛti; it is applied in sipping water with mantra.',
            kn: '"ಅಗ್ನಿಶ್ಚ" ಮಂತ್ರಕ್ಕೆ ಹಿರಣ್ಯಗರ್ಭ ಋಷಿ; ಅಗ್ನಿ, ಮನ್ಯು, ಮನ್ಯುಪತಿಗಳು, ಹಗಲು ದೇವತೆಗಳು; ಪ್ರಕೃತಿ ಛಂದಸ್ಸು; ಮಂತ್ರಾಚಮನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { time: ['evening'] },
          text:
            'अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयदह्ना पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nअहस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसत्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May Agni, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the day with mind, speech, hands, feet, belly or organ, may the day wipe it away; whatever wrong is in me, I offer it, and myself, into the light of Truth, the source of immortality. Svāhā.',
            kn: 'ಅಗ್ನಿಯೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ಹಗಲಿನಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ ಮತ್ತು ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ಹಗಲಿನ ದೇವತೆಯು ಅಳಿಸಲಿ; ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸತ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    // 7 ─────────────────────────────────────────────────────────────
    {
      title: 'पुनर्मार्जनम्',
      titleEn: 'Punar-mārjana (second sprinkling)',
      note:
        'Sprinkle water on the head again, at each pāda. The seer of दधिक्राव्णो… is Vāmadeva and its metre anuṣṭubh. Then recite the nine pādas of āpo hi ṣṭhā as in mārjana (eighth pāda on the feet, ninth on the head). Mādhva (Uttarādi Maṭha manuals): continue with the four Taittirīya ṛks हिरण्यवर्णाः… (Taittirīya Saṃhitā 5.6.1), sprinkling at each. Smārta: the Kanchi manual stops after āpo hi ṣṭhā and circles water round the head with ॐ भूर्भुवस्सुवः. (The pavamānaḥ suvarjanaḥ… mantras are not used here in the manuals consulted.)',
      noteKn:
        'ಮತ್ತೆ ಪ್ರತಿಯೊಂದು ಪಾದಕ್ಕೂ ತಲೆಯ ಮೇಲೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಬೇಕು. "ದಧಿಕ್ರಾವ್ಣೋ" ಮಂತ್ರಕ್ಕೆ ವಾಮದೇವ ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು. ನಂತರ ಮಾರ್ಜನದಂತೆಯೇ "ಆಪೋ ಹಿ ಷ್ಠಾ"ದ ಒಂಬತ್ತು ಪಾದಗಳು (ಎಂಟನೆಯದು ಪಾದಗಳಿಗೆ, ಒಂಬತ್ತನೆಯದು ತಲೆಗೆ). ಮಾಧ್ವರು (ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕಗಳಂತೆ): ಮುಂದೆ "ಹಿರಣ್ಯವರ್ಣಾಃ…" ಎಂಬ ನಾಲ್ಕು ತೈತ್ತಿರೀಯ ಋಕ್ಕುಗಳಿಂದಲೂ ಪ್ರೋಕ್ಷಣೆ ಮಾಡಿಕೊಳ್ಳಬೇಕು. ಸ್ಮಾರ್ತರು: ಕಂಚಿ ಪುಸ್ತಕದಲ್ಲಿ "ಆಪೋ ಹಿ ಷ್ಠಾ"ದೊಂದಿಗೆ ಮುಗಿಸಿ "ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ" ಎಂದು ತಲೆಯ ಸುತ್ತ ನೀರು ಸುತ್ತಿಸುತ್ತಾರೆ. ("ಪವಮಾನಃ ಸುವರ್ಜನಃ…" ಮಂತ್ರಗಳು ನೋಡಿದ ಪುಸ್ತಕಗಳಲ್ಲಿ ಇಲ್ಲಿ ಇಲ್ಲ.)',
      verses: [
        {
          text: 'दधिक्राव्णो अकारिषं जिष्णोरश्वस्य वाजिनः ।\nसुरभि नो मुखा करत्प्र ण आयूंषि तारिषत् ॥',
          meaning: {
            en: 'I have praised Dadhikrāvan, the victorious, swift and mighty divine steed. May he make our mouths fragrant and lengthen our lives.',
            kn: 'ಜಯಶಾಲಿಯೂ ವೇಗಶಾಲಿಯೂ ಬಲಶಾಲಿಯೂ ಆದ ದಧಿಕ್ರಾವನೆಂಬ ದಿವ್ಯಾಶ್ವವನ್ನು ಸ್ತುತಿಸಿದ್ದೇನೆ. ಅವನು ನಮ್ಮ ಮುಖಗಳನ್ನು ಸುಗಂಧಮಯವಾಗಿಸಲಿ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲಿ.',
          },
        },
        {
          text:
            'आपो हि ष्ठा मयोभुवः । ता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे । यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः । उशतीरिव मातरः ।\nतस्मा अरं गमाम वः । यस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'The three ṛks to the Waters, as in mārjana: bringers of happiness, give us strength and joy, share with us your most auspicious essence like loving mothers, and bring us to new life.',
            kn: 'ಮಾರ್ಜನದಲ್ಲಿ ಹೇಳಿದ ಜಲದೇವತೆಗಳ ಮೂರು ಋಕ್ಕುಗಳು: ಸುಖಕೊಡುವ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಶಕ್ತಿಯನ್ನೂ ಆನಂದವನ್ನೂ ಕೊಡಿ; ತಾಯಂದಿರಂತೆ ನಿಮ್ಮ ಮಂಗಳಕರ ರಸವನ್ನು ಉಣಿಸಿ; ನಮಗೆ ಹೊಸ ಚೈತನ್ಯ ಕೊಡಿ.',
          },
        },
        {
          when: { tradition: M },
          text: 'हिरण्यवर्णाः शुचयः पावका यासु जातः कश्यपो यास्विन्द्रः ।\nअग्निं या गर्भं दधिरे विरूपास्ता न आपः शं स्योना भवन्तु ॥',
          meaning: {
            en: 'The golden-hued, pure and purifying waters, in which Kaśyapa and Indra were born, which of many forms bore Agni as their child: may those waters be gracious and kind to us.',
            kn: 'ಚಿನ್ನದ ಬಣ್ಣದ, ಶುಚಿಯಾದ, ಪಾವನಗೊಳಿಸುವ ಜಲಗಳು — ಅವುಗಳಲ್ಲಿ ಕಶ್ಯಪನೂ ಇಂದ್ರನೂ ಜನಿಸಿದರು; ನಾನಾ ರೂಪಗಳ ಆ ಜಲಗಳು ಅಗ್ನಿಯನ್ನು ಗರ್ಭದಲ್ಲಿ ಧರಿಸಿದವು. ಆ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.',
          },
        },
        {
          when: { tradition: M },
          text: 'यासां राजा वरुणो याति मध्ये सत्यानृते अवपश्यञ्जनानाम् ।\nमधुश्चुतः शुचयो याः पावकास्ता न आपः शं स्योना भवन्तु ॥',
          meaning: {
            en: 'The waters in whose midst King Varuṇa moves, looking down on the truth and falsehood of men; the honey-dripping, pure and purifying waters: may they be gracious and kind to us.',
            kn: 'ಜನರ ಸತ್ಯ-ಅಸತ್ಯಗಳನ್ನು ನೋಡುತ್ತಾ ರಾಜನಾದ ವರುಣನು ಯಾವ ಜಲಗಳ ಮಧ್ಯೆ ಸಂಚರಿಸುತ್ತಾನೋ, ಜೇನು ಸುರಿಸುವ, ಶುಚಿಯಾದ, ಪಾವನಗೊಳಿಸುವ ಆ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.',
          },
        },
        {
          when: { tradition: M },
          text: 'यासां देवा दिवि कृण्वन्ति भक्षं या अन्तरिक्षे बहुधा भवन्ति ।\nयाः पृथिवीं पयसोऽन्दन्ति शुक्रास्ता न आपः शं स्योना भवन्तु ॥',
          meaning: {
            en: 'The waters that the gods drink in heaven, that take many forms in the sky, and that drench the earth with their milk: may those bright waters be gracious and kind to us.',
            kn: 'ದೇವತೆಗಳು ಸ್ವರ್ಗದಲ್ಲಿ ಪಾನಮಾಡುವ, ಅಂತರಿಕ್ಷದಲ್ಲಿ ಅನೇಕ ರೂಪಗಳಲ್ಲಿರುವ, ತಮ್ಮ ಸಾರದಿಂದ ಭೂಮಿಯನ್ನು ತೋಯಿಸುವ ಆ ಉಜ್ವಲ ಜಲಗಳು ನಮಗೆ ಮಂಗಳಕರವೂ ಸುಖಕರವೂ ಆಗಲಿ.',
          },
        },
        {
          when: { tradition: M },
          text: 'शिवेन मा चक्षुषा पश्यतापः शिवया तनुवोप स्पृशत त्वचं मे ।\nसर्वाँ अग्नीँरप्सुषदो हुवे वो मयि वर्चो बलमोजो नि धत्त ॥',
          meaning: {
            en: 'O Waters, look on me with a kindly eye and touch my skin with your gracious body. I call on all the fires that dwell in you: place in me radiance, strength and vigour.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ಮಂಗಳಕರವಾದ ಕಣ್ಣಿನಿಂದ ನನ್ನನ್ನು ನೋಡಿ, ಮಂಗಳಕರವಾದ ದೇಹದಿಂದ ನನ್ನ ಚರ್ಮವನ್ನು ಸ್ಪರ್ಶಿಸಿ. ನಿಮ್ಮಲ್ಲಿ ನೆಲೆಸಿರುವ ಎಲ್ಲಾ ಅಗ್ನಿಗಳನ್ನು ಕರೆಯುತ್ತೇನೆ; ನನ್ನಲ್ಲಿ ತೇಜಸ್ಸು, ಬಲ, ಓಜಸ್ಸುಗಳನ್ನು ಇರಿಸಿ.',
          },
        },
        {
          when: { tradition: S },
          text: 'ॐ भूर्भुवस्सुवः ॥',
          meaning: {
            en: 'Om, earth, sky and heaven: water is circled round the head with this.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ — ಈ ಮಂತ್ರದಿಂದ ತಲೆಯ ಸುತ್ತ ನೀರನ್ನು ಸುತ್ತಿಸುವುದು.',
          },
        },
      ],
    },
    // 8 ─────────────────────────────────────────────────────────────
    {
      title: 'अघमर्षणम्',
      titleEn: 'Aghamarṣaṇa (expelling sin)',
      note:
        'Taittirīya aghamarṣaṇa (Taittirīya Brāhmaṇa 2.4.4 / 2.6.6), prescribed in the Mādhva manuals; many Smārta Yajurvedins also do it, while the Kanchi manual omits it. Take water in the right palm (cow’s-ear shape) and bring it near the nose without looking at it. Reciting the mantra, think that the sin-person (pāpapuruṣa) leaves through the right nostril with the breath and enters the water. Imagining a glowing diamond-hard rock on your left, throw the water onto it and think the sin destroyed. Then do ācamana and prāṇāyāma.',
      noteKn:
        'ತೈತ್ತಿರೀಯ ಅಘಮರ್ಷಣ ಮಂತ್ರ — ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ ವಿಧಿಸಿದೆ; ಅನೇಕ ಸ್ಮಾರ್ತ ಯಜುರ್ವೇದಿಗಳೂ ಮಾಡುತ್ತಾರೆ, ಕಂಚಿ ಪುಸ್ತಕದಲ್ಲಿ ಇಲ್ಲ. ಗೋಕರ್ಣಾಕಾರದ ಬಲಗೈಯಲ್ಲಿ ನೀರು ತೆಗೆದುಕೊಂಡು, ಅದನ್ನು ನೋಡದೆ ಮೂಗಿನ ಬಳಿ ತರಬೇಕು. ಮಂತ್ರ ಹೇಳುತ್ತಾ ಪಾಪಪುರುಷನು ಬಲಮೂಗಿನಿಂದ ಉಸಿರಿನೊಂದಿಗೆ ಹೊರಬಂದು ನೀರನ್ನು ಸೇರಿದನೆಂದು ಭಾವಿಸಬೇಕು. ಎಡಭಾಗದಲ್ಲಿ ಉರಿಯುತ್ತಿರುವ ವಜ್ರಶಿಲೆಯನ್ನು ಕಲ್ಪಿಸಿ ಆ ನೀರನ್ನು ಅದರ ಮೇಲೆ ಎಸೆದು, ಪಾಪ ನಾಶವಾಯಿತೆಂದು ಭಾವಿಸಬೇಕು. ನಂತರ ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಬೇಕು.',
      verses: [
        {
          text: 'द्रुपदादिव मुञ्चतु । द्रुपदादिवेन्मुमुचानः ।\nस्विन्नः स्नात्वी मलादिव ।\nपूतं पवित्रेणेवाज्यम् । आपः शुन्धन्तु मैनसः ॥',
          meaning: {
            en: 'As one is freed from a post one was tied to, as a sweating man after bathing is freed from dirt, as ghee is made clean through a strainer, so may the waters cleanse me of sin.',
            kn: 'ಕಟ್ಟಿಹಾಕಿದ ಕಂಬದಿಂದ ಬಿಡುಗಡೆಯಾದಂತೆ, ಬೆವರಿದವನು ಸ್ನಾನದಿಂದ ಕೊಳೆಯಿಂದ ಮುಕ್ತನಾದಂತೆ, ಶೋಧಕದಿಂದ ತುಪ್ಪ ಶುದ್ಧವಾದಂತೆ, ಜಲದೇವತೆಗಳು ನನ್ನನ್ನು ಪಾಪದಿಂದ ಶುದ್ಧಗೊಳಿಸಲಿ.',
          },
        },
      ],
    },
    // 9 ─────────────────────────────────────────────────────────────
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya (water offering to the Sun)',
      note:
        'Stand facing the Sun (morning east, midday north or east, evening west) with feet together. Take water in both hands joined like a boat, thumbs kept apart from the index fingers, lift to the level of the brows and, reciting the Gāyatrī with Oṃ and the vyāhṛtis, pour it out over the fingertips. Give the morning arghya before sunrise and the evening one before sunset. Mādhva (Uttarādi Maṭha): say the arghya saṅkalpa; draw the Gāyatrī yantra (as taught) on water not used for ācamana; offer three arghyas at every sandhyā into a clean vessel or on clean ground (in a river or tank, pour upwards towards the Sun), saying सूर्यनारायणाय इदमर्घ्यं… after each; at midday the first arghya is given with हंसः शुचिषत्… (seer Vāmadeva son of Gautama, deity Sūrya, metre jagatī) and the other two with the Gāyatrī. Smārta (Kanchi manual and Kamesvara Aiyar): three arghyas in the morning, two at midday, three in the evening, all with the Gāyatrī, rising slightly on the heels. If the proper time has passed, do one prāṇāyāma and give one more (fourth) arghya as prāyaścitta for the delay (kālātīta).',
      noteKn:
        'ಸೂರ್ಯನಿಗೆ ಎದುರಾಗಿ (ಬೆಳಿಗ್ಗೆ ಪೂರ್ವ, ಮಧ್ಯಾಹ್ನ ಉತ್ತರ ಅಥವಾ ಪೂರ್ವ, ಸಂಜೆ ಪಶ್ಚಿಮ) ಪಾದಗಳನ್ನು ಜೋಡಿಸಿ ನಿಲ್ಲಬೇಕು. ಎರಡೂ ಕೈಗಳನ್ನು ದೋಣಿಯಂತೆ ಜೋಡಿಸಿ, ಹೆಬ್ಬೆರಳುಗಳು ತೋರುಬೆರಳಿಗೆ ತಾಗದಂತೆ ಇಟ್ಟು, ಬೊಗಸೆಯಲ್ಲಿ ನೀರು ತುಂಬಿ ಹುಬ್ಬಿನ ಎತ್ತರಕ್ಕೆ ಎತ್ತಿ, ಪ್ರಣವ-ವ್ಯಾಹೃತಿ ಸಹಿತ ಗಾಯತ್ರಿಯನ್ನು ಹೇಳಿ ಬೆರಳ ತುದಿಯಿಂದ ನೀರು ಬಿಡಬೇಕು. ಪ್ರಾತಃ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯೋದಯಕ್ಕೆ ಮೊದಲು, ಸಾಯಂ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯಾಸ್ತಕ್ಕೆ ಮೊದಲು ಕೊಡಬೇಕು. ಮಾಧ್ವರು (ಉತ್ತರಾದಿಮಠ): ಅರ್ಘ್ಯಸಂಕಲ್ಪ ಹೇಳಿ, ಆಚಮನಕ್ಕೆ ಬಳಸದ ನೀರಿನಲ್ಲಿ ಗುರೂಪದೇಶದಂತೆ ಗಾಯತ್ರೀ ಯಂತ್ರ ಬರೆದು, ಪ್ರತಿ ಸಂಧ್ಯೆಯಲ್ಲೂ ಮೂರು ಅರ್ಘ್ಯಗಳನ್ನು ಶುದ್ಧ ಪಾತ್ರೆಗೆ ಅಥವಾ ಶುದ್ಧ ಸ್ಥಳಕ್ಕೆ ಕೊಡಬೇಕು (ನದಿ-ಕೆರೆಯಲ್ಲಿದ್ದರೆ ಸೂರ್ಯನ ಕಡೆಗೆ ಮೇಲಕ್ಕೆ); ಪ್ರತಿಯೊಂದರ ನಂತರ "ಸೂರ್ಯನಾರಾಯಣಾಯ ಇದಮರ್ಘ್ಯಂ…" ಎನ್ನಬೇಕು. ಮಧ್ಯಾಹ್ನ ಮೊದಲ ಅರ್ಘ್ಯ "ಹಂಸಃ ಶುಚಿಷತ್…" ಮಂತ್ರದಿಂದ (ಗೌತಮಪುತ್ರ ವಾಮದೇವ ಋಷಿ, ಸೂರ್ಯ ದೇವತೆ, ಜಗತೀ ಛಂದಸ್ಸು), ಉಳಿದೆರಡು ಗಾಯತ್ರಿಯಿಂದ. ಸ್ಮಾರ್ತರು (ಕಂಚಿ ಪುಸ್ತಕ, ಕಾಮೇಶ್ವರ ಅಯ್ಯರ್): ಬೆಳಿಗ್ಗೆ ಮೂರು, ಮಧ್ಯಾಹ್ನ ಎರಡು, ಸಂಜೆ ಮೂರು ಅರ್ಘ್ಯ — ಎಲ್ಲವೂ ಗಾಯತ್ರಿಯಿಂದ; ಹಿಮ್ಮಡಿಗಳನ್ನು ಸ್ವಲ್ಪ ಎತ್ತಿ ಕೊಡಬೇಕು. ಕಾಲ ಮೀರಿದ್ದರೆ ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಪ್ರಾಯಶ್ಚಿತ್ತವಾಗಿ ಇನ್ನೊಂದು (ನಾಲ್ಕನೆಯ) ಅರ್ಘ್ಯವನ್ನು ಕೊಡಬೇಕು.',
      verses: [
        {
          when: { tradition: M, time: ['morning'] },
          text: 'पूर्वोक्त एवंगुणविशेषणविशिष्टायां शुभतिथौ\nसवितृनामकसूर्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं प्रातःसन्ध्याङ्गार्घ्यप्रदानमहं करिष्ये ॥',
          meaning: {
            en: 'On this auspicious day described before, moved by Śrī Lakṣmīnārāyaṇa who dwells in Mukhyaprāṇa, the beloved of Bhāratī, within the Sun called Savitṛ, and for his pleasure, I shall offer the arghya that is part of the morning sandhyā.',
            kn: 'ಹಿಂದೆ ಹೇಳಿದ ಈ ಶುಭದಿನದಂದು, ಸವಿತೃನಾಮಕ ಸೂರ್ಯನಲ್ಲಿರುವ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣರಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: M, time: ['midday'] },
          text: 'पूर्वोक्त एवंगुणविशेषणविशिष्टायां शुभतिथौ\nसवितृनामकसूर्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं माध्याह्नसन्ध्याङ्गार्घ्यप्रदानमहं करिष्ये ॥',
          meaning: {
            en: 'On this auspicious day described before, moved by Śrī Lakṣmīnārāyaṇa who dwells in Mukhyaprāṇa within the Sun called Savitṛ, and for his pleasure, I shall offer the arghya that is part of the midday sandhyā.',
            kn: 'ಹಿಂದೆ ಹೇಳಿದ ಈ ಶುಭದಿನದಂದು, ಸವಿತೃನಾಮಕ ಸೂರ್ಯಾಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಮಾಧ್ಯಾಹ್ನ ಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: M, time: ['evening'] },
          text: 'पूर्वोक्त एवंगुणविशेषणविशिष्टायां शुभतिथौ\nसवितृनामकसूर्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गत श्रीलक्ष्मीनारायणप्रेरणया\nश्रीलक्ष्मीनारायणप्रीत्यर्थं सायंसन्ध्याङ्गार्घ्यप्रदानमहं करिष्ये ॥',
          meaning: {
            en: 'On this auspicious day described before, moved by Śrī Lakṣmīnārāyaṇa who dwells in Mukhyaprāṇa within the Sun called Savitṛ, and for his pleasure, I shall offer the arghya that is part of the evening sandhyā.',
            kn: 'ಹಿಂದೆ ಹೇಳಿದ ಈ ಶುಭದಿನದಂದು, ಸವಿತೃನಾಮಕ ಸೂರ್ಯಾಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ ಸಾಯಂಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nअर्घ्यप्रदाने विनियोगः ॥',
          meaning: {
            en: 'Of the Gāyatrī the seer is Viśvāmitra, the deity Savitṛ, the metre gāyatrī; it is applied in offering arghya.',
            kn: 'ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಅರ್ಘ್ಯಪ್ರದಾನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { tradition: M, time: ['midday'] },
          text: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।\nनृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतं बृहत् ॥',
          meaning: {
            en: 'He is the Swan dwelling in the bright heaven, the Vasu dwelling in the sky, the priest seated at the altar, the guest in the house; he dwells in men, in the best, in truth and in the vault of heaven; born of the waters, of rays, of truth and of the mountain, he is the great Truth. (Mādhva: first midday arghya.)',
            kn: 'ಅವನು ಪ್ರಕಾಶಮಯ ಸ್ವರ್ಗದಲ್ಲಿರುವ ಹಂಸ, ಅಂತರಿಕ್ಷದಲ್ಲಿರುವ ವಸು, ವೇದಿಯಲ್ಲಿ ಕುಳಿತ ಹೋತೃ, ಮನೆಯಲ್ಲಿರುವ ಅತಿಥಿ; ಮನುಷ್ಯರಲ್ಲಿ, ಶ್ರೇಷ್ಠರಲ್ಲಿ, ಸತ್ಯದಲ್ಲಿ, ಆಕಾಶದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಜಲ, ಕಿರಣ, ಸತ್ಯ, ಪರ್ವತಗಳಿಂದ ಹುಟ್ಟಿದವನು; ಅವನೇ ಮಹಾ ಸತ್ಯ. (ಮಾಧ್ವರ ಮಧ್ಯಾಹ್ನದ ಮೊದಲ ಅರ್ಘ್ಯ.)',
          },
        },
        {
          text: 'ॐ भूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitṛ; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          when: { tradition: M },
          text: 'सूर्यनारायणाय इदमर्घ्यं समर्पयामि दत्तं न मम ॥',
          meaning: {
            en: 'I offer this arghya to Sūryanārāyaṇa; it is given, it is no longer mine.',
            kn: 'ಈ ಅರ್ಘ್ಯವನ್ನು ಸೂರ್ಯನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ; ಇದು ಕೊಡಲ್ಪಟ್ಟಿದೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          when: { tradition: M, time: ['morning'] },
          text: 'अर्घ्यत्रयान्ते प्रातःसन्ध्याकालातिक्रमदोषपरिहारार्थं\nचतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'After the three arghyas, to remove the fault of letting the time of the morning sandhyā pass, I shall give a fourth arghya. (Then offer it with the Gāyatrī above.)',
            kn: 'ಮೂರು ಅರ್ಘ್ಯಗಳ ನಂತರ, ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಕಾಲ ಮೀರಿದ ದೋಷದ ಪರಿಹಾರಕ್ಕಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ. (ಮೇಲಿನ ಗಾಯತ್ರಿಯಿಂದ ಕೊಡಬೇಕು.)',
          },
        },
        {
          when: { tradition: M, time: ['midday'] },
          text: 'अर्घ्यत्रयान्ते माध्याह्नसन्ध्याकालातिक्रमदोषपरिहारार्थं\nचतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'After the three arghyas, to remove the fault of letting the time of the midday sandhyā pass, I shall give a fourth arghya.',
            kn: 'ಮೂರು ಅರ್ಘ್ಯಗಳ ನಂತರ, ಮಾಧ್ಯಾಹ್ನ ಸಂಧ್ಯೆಯ ಕಾಲ ಮೀರಿದ ದೋಷದ ಪರಿಹಾರಕ್ಕಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: M, time: ['evening'] },
          text: 'अर्घ्यत्रयान्ते सायंसन्ध्याकालातिक्रमदोषपरिहारार्थं\nचतुर्थार्घ्यप्रदानं करिष्ये ॥',
          meaning: {
            en: 'After the three arghyas, to remove the fault of letting the time of the evening sandhyā pass, I shall give a fourth arghya.',
            kn: 'ಮೂರು ಅರ್ಘ್ಯಗಳ ನಂತರ, ಸಾಯಂಸಂಧ್ಯೆಯ ಕಾಲ ಮೀರಿದ ದೋಷದ ಪರಿಹಾರಕ್ಕಾಗಿ ನಾಲ್ಕನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S },
          text: 'कालातीतप्रायश्चित्तार्घ्यं करिष्ये ॥',
          meaning: {
            en: 'I shall give the expiatory arghya for the time that has passed. (Do one prāṇāyāma, say this, and offer one more arghya with the Gāyatrī.)',
            kn: 'ಕಾಲ ಮೀರಿದ್ದಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಅರ್ಘ್ಯವನ್ನು ಕೊಡುತ್ತೇನೆ. (ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಇದನ್ನು ಹೇಳಿ, ಗಾಯತ್ರಿಯಿಂದ ಇನ್ನೊಂದು ಅರ್ಘ್ಯ ಕೊಡಬೇಕು.)',
          },
        },
      ],
    },
    // 10 ────────────────────────────────────────────────────────────
    {
      title: 'आत्मप्रदक्षिणम्',
      titleEn: 'Ātma-pradakṣiṇa (meditating on the Sun as Brahman)',
      note:
        'Take a little water in the right hand, turn round once clockwise where you stand, and pour the water around yourself saying असावादित्यो ब्रह्म (Taittirīya Āraṇyaka 2.2: walking round clockwise shakes off sin). Mādhva: meditate that Śrī Lakṣmīnārāyaṇa, present in the Sun through Mukhyaprāṇa, is Brahman. Smārta: add ब्रह्मैवाहमस्मि, touch the chest with both hands, and meditate on the Sun as Brahman and on oneself as one with it. Then sit down and do ācamana twice.',
      noteKn:
        'ಬಲಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ತೆಗೆದುಕೊಂಡು, ನಿಂತಲ್ಲೇ ಒಮ್ಮೆ ಪ್ರದಕ್ಷಿಣವಾಗಿ ತಿರುಗಿ, "ಅಸಾವಾದಿತ್ಯೋ ಬ್ರಹ್ಮ" ಎಂದು ತನ್ನ ಸುತ್ತ ನೀರು ಬಿಡಬೇಕು (ಪ್ರದಕ್ಷಿಣೆಯಿಂದ ಪಾಪ ಕಳೆಯುತ್ತದೆ ಎಂದು ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ ಹೇಳುತ್ತದೆ). ಮಾಧ್ವರು: ಮುಖ್ಯಪ್ರಾಣರ ಮೂಲಕ ಸೂರ್ಯನಲ್ಲಿರುವ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನೇ ಬ್ರಹ್ಮನೆಂದು ಧ್ಯಾನಿಸಬೇಕು. ಸ್ಮಾರ್ತರು: "ಬ್ರಹ್ಮೈವಾಹಮಸ್ಮಿ" ಎಂದು ಸೇರಿಸಿ, ಎರಡೂ ಕೈಗಳಿಂದ ಎದೆ ಮುಟ್ಟಿ, ಸೂರ್ಯನನ್ನು ಬ್ರಹ್ಮನೆಂದೂ ತಾನು ಅದರೊಡನೆ ಒಂದೆಂದೂ ಧ್ಯಾನಿಸುತ್ತಾರೆ. ನಂತರ ಕುಳಿತು ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಬೇಕು.',
      verses: [
        {
          text: 'असावादित्यो ब्रह्म ॥',
          meaning: {
            en: 'That Āditya, the Sun, is Brahman. (Mādhva: the Lord within the Sun is the Supreme Brahman.)',
            kn: 'ಆ ಆದಿತ್ಯನೇ ಬ್ರಹ್ಮ. (ಮಾಧ್ವರು: ಸೂರ್ಯನಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯಾಗಿರುವ ಭಗವಂತನೇ ಪರಬ್ರಹ್ಮ.)',
          },
        },
        {
          when: { tradition: S },
          text: 'ब्रह्मैवाहमस्मि ॥',
          meaning: {
            en: 'I am indeed that Brahman.',
            kn: 'ನಾನೇ ಆ ಬ್ರಹ್ಮನಾಗಿದ್ದೇನೆ.',
          },
        },
      ],
    },
    // 11 ────────────────────────────────────────────────────────────
    {
      title: 'तर्पणम्',
      titleEn: 'Tarpaṇa (water offerings)',
      note:
        'Seated, offer water from the right hand over the fingertips (deva-tīrtha) into the plate, once for each name, looking towards the Sun. Mādhva (Uttarādi Maṭha manual): in the bright fortnight offer to the twelve forms Keśava … Dāmodara; in the dark fortnight to Saṅkarṣaṇa … Śrīkṛṣṇa; then to the nine planets every day, except on Ekādaśī, when only the twelve forms are offered. Smārta (Kanchi manual): first the nine planets (Āditya …), then Keśava … Dāmodara. Afterwards do ācamana once, then ācamana and prāṇāyāma as your manual says.',
      noteKn:
        'ಕುಳಿತುಕೊಂಡು, ಬಲಗೈ ಬೆರಳ ತುದಿಯಿಂದ (ದೇವತೀರ್ಥ) ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ಒಮ್ಮೆ ಸೂರ್ಯನ ಕಡೆ ನೋಡುತ್ತಾ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಬೇಕು. ಮಾಧ್ವರು (ಉತ್ತರಾದಿಮಠ): ಶುಕ್ಲಪಕ್ಷದಲ್ಲಿ ಕೇಶವಾದಿ ದಾಮೋದರಾಂತ ಹನ್ನೆರಡು ರೂಪಗಳಿಗೆ, ಕೃಷ್ಣಪಕ್ಷದಲ್ಲಿ ಸಂಕರ್ಷಣಾದಿ ಶ್ರೀಕೃಷ್ಣಾಂತ ಹನ್ನೆರಡು ರೂಪಗಳಿಗೆ; ನಂತರ ಪ್ರತಿದಿನ ನವಗ್ರಹಗಳಿಗೆ — ಏಕಾದಶಿಯಂದು ಮಾತ್ರ ನವಗ್ರಹ ತರ್ಪಣ ಬೇಡ, ಹನ್ನೆರಡು ರೂಪಗಳಿಗೆ ಮಾತ್ರ. ಸ್ಮಾರ್ತರು (ಕಂಚಿ ಪುಸ್ತಕ): ಮೊದಲು ಆದಿತ್ಯಾದಿ ನವಗ್ರಹಗಳಿಗೆ, ನಂತರ ಕೇಶವಾದಿ ದಾಮೋದರಾಂತಕ್ಕೆ. ಬಳಿಕ ಒಮ್ಮೆ ಆಚಮನ, ಮತ್ತು ಪುಸ್ತಕದಲ್ಲಿ ಹೇಳಿದಂತೆ ಆಚಮನ-ಪ್ರಾಣಾಯಾಮ.',
      verses: [
        {
          when: { tradition: S },
          text: 'आदित्यं तर्पयामि । सोमं तर्पयामि । अङ्गारकं तर्पयामि ।\nबुधं तर्पयामि । बृहस्पतिं तर्पयामि । शुक्रं तर्पयामि ।\nशनैश्चरं तर्पयामि । राहुं तर्पयामि । केतुं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water the Sun, the Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rāhu and Ketu.',
            kn: 'ಸೂರ್ಯ, ಚಂದ್ರ, ಅಂಗಾರಕ, ಬುಧ, ಬೃಹಸ್ಪತಿ, ಶುಕ್ರ, ಶನೈಶ್ಚರ, ರಾಹು, ಕೇತುಗಳನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'केशवं तर्पयामि । नारायणं तर्पयामि । माधवं तर्पयामि ।\nगोविन्दं तर्पयामि । विष्णुं तर्पयामि । मधुसूदनं तर्पयामि ।\nत्रिविक्रमं तर्पयामि । वामनं तर्पयामि । श्रीधरं तर्पयामि ।\nहृषीकेशं तर्पयामि । पद्मनाभं तर्पयामि । दामोदरं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water the twelve forms of the Lord: Keśava, Nārāyaṇa, Mādhava, Govinda, Viṣṇu, Madhusūdana, Trivikrama, Vāmana, Śrīdhara, Hṛṣīkeśa, Padmanābha and Dāmodara. (Mādhva: in the bright fortnight.)',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ, ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ, ತ್ರಿವಿಕ್ರಮ, ವಾಮನ, ಶ್ರೀಧರ, ಹೃಷೀಕೇಶ, ಪದ್ಮನಾಭ, ದಾಮೋದರ ಎಂಬ ಭಗವಂತನ ಹನ್ನೆರಡು ರೂಪಗಳನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ. (ಮಾಧ್ವರು: ಶುಕ್ಲಪಕ್ಷದಲ್ಲಿ.)',
          },
        },
        {
          when: { tradition: M },
          text: 'सङ्कर्षणं तर्पयामि । वासुदेवं तर्पयामि । प्रद्युम्नं तर्पयामि ।\nअनिरुद्धं तर्पयामि । पुरुषोत्तमं तर्पयामि । अधोक्षजं तर्पयामि ।\nनारसिंहं तर्पयामि । अच्युतं तर्पयामि । जनार्दनं तर्पयामि ।\nउपेन्द्रं तर्पयामि । हरिं तर्पयामि । श्रीकृष्णं तर्पयामि ॥',
          meaning: {
            en: 'In the dark fortnight, in place of the above: I satisfy with water Saṅkarṣaṇa, Vāsudeva, Pradyumna, Aniruddha, Puruṣottama, Adhokṣaja, Nārasiṃha, Acyuta, Janārdana, Upendra, Hari and Śrī Kṛṣṇa.',
            kn: 'ಕೃಷ್ಣಪಕ್ಷದಲ್ಲಿ ಮೇಲಿನವುಗಳ ಬದಲು: ಸಂಕರ್ಷಣ, ವಾಸುದೇವ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧ, ಪುರುಷೋತ್ತಮ, ಅಧೋಕ್ಷಜ, ನಾರಸಿಂಹ, ಅಚ್ಯುತ, ಜನಾರ್ದನ, ಉಪೇಂದ್ರ, ಹರಿ, ಶ್ರೀಕೃಷ್ಣರನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: M },
          text: 'सूर्यं तर्पयामि । चन्द्रं तर्पयामि । अङ्गारकं तर्पयामि ।\nबुधं तर्पयामि । बृहस्पतिं तर्पयामि । शुक्रं तर्पयामि ।\nशनैश्चरं तर्पयामि । राहुं तर्पयामि । केतुं तर्पयामि ॥',
          meaning: {
            en: 'I satisfy with water the nine planets: the Sun, the Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rāhu and Ketu. (Not on Ekādaśī.)',
            kn: 'ಸೂರ್ಯ, ಚಂದ್ರ, ಅಂಗಾರಕ, ಬುಧ, ಬೃಹಸ್ಪತಿ, ಶುಕ್ರ, ಶನೈಶ್ಚರ, ರಾಹು, ಕೇತು — ನವಗ್ರಹಗಳನ್ನು ಜಲದಿಂದ ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ. (ಏಕಾದಶಿಯಂದು ಬೇಡ.)',
          },
        },
      ],
    },
    // 12 ────────────────────────────────────────────────────────────
    {
      title: 'भूतोच्चाटनम् आसनशुद्धिश्च',
      titleEn: 'Removing obstacles and purifying the seat for japa',
      note:
        'Before japa, choose a quiet, clean place, sprinkle it with water and sit (facing east, or west in the evening as your family does). Mādhva: recite अपसर्पन्तु… snapping the fingers (choṭikā mudrā) towards the left to drive away obstructing beings; then, touching the seat, pray to Mother Earth with पृथ्वि त्वया…, think of the seat as resting on Ananta and Kūrma and say अनन्तासनाय नमः; then do prāṇāyāma three times. Smārta: pray to the Earth with पृथ्वि त्वया…, remember Gaṇeśa with शुक्लाम्बरधरम्… (tapping the temples), and do prāṇāyāma.',
      noteKn:
        'ಜಪಕ್ಕೆ ಮೊದಲು ಶಾಂತವಾದ ಶುದ್ಧ ಸ್ಥಳವನ್ನು ಆರಿಸಿ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ ಕುಳಿತುಕೊಳ್ಳಿ (ಪೂರ್ವಾಭಿಮುಖವಾಗಿ; ಸಂಜೆ ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ ಪಶ್ಚಿಮಾಭಿಮುಖ). ಮಾಧ್ವರು: "ಅಪಸರ್ಪಂತು…" ಹೇಳುತ್ತಾ ಎಡಭಾಗಕ್ಕೆ ಚಿಟಿಕೆ ಹೊಡೆದು ವಿಘ್ನಕಾರಿ ಭೂತಗಳನ್ನು ದೂರಮಾಡಬೇಕು; ನಂತರ ಆಸನವನ್ನು ಮುಟ್ಟಿ "ಪೃಥ್ವಿ ತ್ವಯಾ…" ಎಂದು ಭೂದೇವಿಯನ್ನು ಪ್ರಾರ್ಥಿಸಿ, ಆಸನವು ಅನಂತ-ಕೂರ್ಮರ ಮೇಲಿದೆ ಎಂದು ಭಾವಿಸಿ "ಅನಂತಾಸನಾಯ ನಮಃ" ಎನ್ನಬೇಕು; ಆಮೇಲೆ ಮೂರು ಬಾರಿ ಪ್ರಾಣಾಯಾಮ. ಸ್ಮಾರ್ತರು: "ಪೃಥ್ವಿ ತ್ವಯಾ…" ಎಂದು ಭೂಮಿಯನ್ನು ಪ್ರಾರ್ಥಿಸಿ, "ಶುಕ್ಲಾಂಬರಧರಂ…" ಎಂದು ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸಿ (ಹಣೆಯ ಎರಡೂ ಬದಿ ಮೆಲ್ಲನೆ ತಟ್ಟಿಕೊಂಡು), ಪ್ರಾಣಾಯಾಮ ಮಾಡಬೇಕು.',
      verses: [
        {
          when: { tradition: M },
          text:
            'अपसर्पन्तु ते भूता ये भूता भुवि संस्थिताः ।\nये भूता विघ्नकर्तारस्ते नश्यन्तु शिवाज्ञया ॥\nअपक्रामन्तु ये भूताः क्रूराश्चैव तु राक्षसाः ।\nये चात्र निवसन्त्येव देवता भुवि सन्ततम् ।\nतेषामप्यविरोधेन ब्रह्मकर्म समारभे ॥',
          meaning: {
            en: 'May the beings that dwell on this ground move away; may those that create obstacles perish by auspicious command. May cruel beings and rākṣasas depart. Without offending the deities who always dwell here, I begin this sacred Vedic rite.',
            kn: 'ಈ ನೆಲದಲ್ಲಿರುವ ಭೂತಗಳು ದೂರ ಸರಿಯಲಿ; ವಿಘ್ನ ಮಾಡುವವು ಮಂಗಳಕರವಾದ ಆಜ್ಞೆಯಿಂದ ನಾಶವಾಗಲಿ. ಕ್ರೂರ ಭೂತಗಳೂ ರಾಕ್ಷಸರೂ ತೊಲಗಲಿ. ಇಲ್ಲಿ ಸದಾ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೆ ವಿರೋಧವಾಗದಂತೆ ಈ ಬ್ರಹ್ಮಕರ್ಮವನ್ನು ಆರಂಭಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'पृथ्वि त्वया धृता लोका देवि त्वं विष्णुना धृता ।\nत्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥',
          meaning: {
            en: 'O Earth, the worlds are borne by you, and you are borne by Viṣṇu. O Goddess, bear me too, and make this seat pure.',
            kn: 'ಓ ಭೂದೇವಿ, ಲೋಕಗಳನ್ನು ನೀನು ಧರಿಸಿರುವೆ; ನಿನ್ನನ್ನು ಶ್ರೀವಿಷ್ಣು ಧರಿಸಿದ್ದಾನೆ. ದೇವಿ, ನನ್ನನ್ನೂ ಧರಿಸು; ಈ ಆಸನವನ್ನು ಪವಿತ್ರಗೊಳಿಸು.',
          },
        },
        {
          when: { tradition: S },
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत्सर्वविघ्नोपशान्तये ॥',
          meaning: {
            en: 'To remove all obstacles, one should meditate on the all-pervading one clad in white, moon-coloured, four-armed, with a gracious face.',
            kn: 'ಎಲ್ಲಾ ವಿಘ್ನಗಳ ಶಾಂತಿಗಾಗಿ, ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಚಂದ್ರನಂತೆ ಬಿಳುಪಾದ, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳ, ಪ್ರಸನ್ನಮುಖನಾದ ಸರ್ವವ್ಯಾಪಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
      ],
    },
    // 13 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्र्यावाहनम्',
      titleEn: 'Gāyatrī āvāhana (invocation)',
      note:
        'With folded hands (añjali), invoke the Gāyatrī with the Taittirīya mantras (Mahānārāyaṇa / Taittirīya Āraṇyaka 10). Smārta: say the viniyoga आयात्वित्यनुवाकस्य… touching head, nose and chest; at आवाहयामि move the folded hands towards the chest; many Smārta manuals stop at सरस्वतीमावाहयामि. Mādhva: begin with ओमित्येकाक्षरं ब्रह्म…, recite the whole anuvāka through …पञ्चशीर्षोपनयने विनियोगः, then do prāṇāyāma, and after the nyāsa (next step) invite the Lord into the heart with आगच्छ वरदे देवि…. Some manuals read जुषस्व नः for जुषस्व मे.',
      noteKn:
        'ಕೈಮುಗಿದು (ಅಂಜಲಿ) ತೈತ್ತಿರೀಯ ಮಂತ್ರಗಳಿಂದ ಗಾಯತ್ರಿಯನ್ನು ಆವಾಹಿಸಬೇಕು. ಸ್ಮಾರ್ತರು: "ಆಯಾತ್ವಿತ್ಯನುವಾಕಸ್ಯ…" ಎಂದು ತಲೆ, ಮೂಗು, ಎದೆ ಮುಟ್ಟಿ ವಿನಿಯೋಗ ಹೇಳಬೇಕು; "ಆವಾಹಯಾಮಿ" ಎನ್ನುವಾಗ ಮುಗಿದ ಕೈಗಳನ್ನು ಎದೆಯ ಕಡೆಗೆ ತರಬೇಕು; ಅನೇಕ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ "ಸರಸ್ವತೀಮಾವಾಹಯಾಮಿ" ವರೆಗೆ ಮಾತ್ರ. ಮಾಧ್ವರು: "ಓಮಿತ್ಯೇಕಾಕ್ಷರಂ ಬ್ರಹ್ಮ…" ಇಂದ ಆರಂಭಿಸಿ "…ಪಂಚಶೀರ್ಷೋಪನಯನೇ ವಿನಿಯೋಗಃ" ವರೆಗೆ ಪೂರ್ಣ ಅನುವಾಕ ಹೇಳಿ ಪ್ರಾಣಾಯಾಮ ಮಾಡಬೇಕು; ಮುಂದಿನ ನ್ಯಾಸದ ನಂತರ "ಆಗಚ್ಛ ವರದೇ ದೇವಿ…" ಎಂದು ಭಗವಂತನನ್ನು ಹೃದಯಕ್ಕೆ ಆಹ್ವಾನಿಸಬೇಕು. ಕೆಲವು ಪುಸ್ತಕಗಳಲ್ಲಿ "ಜುಷಸ್ವ ಮೇ" ಬದಲು "ಜುಷಸ್ವ ನಃ" ಇದೆ.',
      verses: [
        {
          when: { tradition: S },
          text: 'आयात्वित्यनुवाकस्य वामदेव ऋषिः । अनुष्टुप् छन्दः ।\nगायत्री देवता । गायत्र्यावाहने विनियोगः ॥',
          meaning: {
            en: 'Of the anuvāka “āyātu” the seer is Vāmadeva, the metre anuṣṭubh, the deity Gāyatrī; it is applied in invoking the Gāyatrī.',
            kn: '"ಆಯಾತು" ಅನುವಾಕಕ್ಕೆ ವಾಮದೇವ ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ಗಾಯತ್ರೀ ದೇವತೆ; ಗಾಯತ್ರೀ ಆವಾಹನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { tradition: M },
          text: 'ओमित्येकाक्षरं ब्रह्म । अग्निर्देवता ब्रह्म इत्यार्षम् ।\nगायत्रं छन्दं परमात्मं सरूपम् । सायुज्यं विनियोगम् ॥',
          meaning: {
            en: 'Om, the single syllable, is Brahman. Its deity is Agni; its seer is Brahman; its metre is gāyatrī; its form is the Supreme Self; its use is to attain union with him.',
            kn: 'ಓಂ ಎಂಬ ಏಕಾಕ್ಷರವೇ ಬ್ರಹ್ಮ. ಅದಕ್ಕೆ ಅಗ್ನಿ ದೇವತೆ, ಬ್ರಹ್ಮ ಋಷಿ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಪರಮಾತ್ಮನೇ ಅದರ ಸ್ವರೂಪ; ಅವನ ಸಾಯುಜ್ಯವೇ ಅದರ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'आयातु वरदा देवी अक्षरं ब्रह्मसम्मितम् ।\nगायत्रीं छन्दसां मातेदं ब्रह्म जुषस्व मे ॥',
          meaning: {
            en: 'May the boon-giving Goddess come, the imperishable one, equal to the Veda. O Gāyatrī, mother of the metres, accept this prayer of mine.',
            kn: 'ವರವನ್ನು ಕೊಡುವ, ಅಕ್ಷರಸ್ವರೂಪಳೂ ವೇದಕ್ಕೆ ಸಮಾನಳೂ ಆದ ದೇವಿಯು ಬರಲಿ. ಛಂದಸ್ಸುಗಳ ತಾಯಿಯಾದ ಓ ಗಾಯತ್ರೀದೇವಿ, ನನ್ನ ಈ ಪ್ರಾರ್ಥನೆಯನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          text: 'यदह्नात्कुरुते पापं तदह्नात्प्रतिमुच्यते ।\nयद्रात्रियात्कुरुते पापं तद्रात्रियात्प्रतिमुच्यते ।\nसर्ववर्णे महादेवि सन्ध्याविद्ये सरस्वति ॥',
          meaning: {
            en: 'The sin one commits by day is released that very day, and the sin one commits by night is released that very night (through this worship). O great Goddess of all colours, knowledge of the sandhyā, Sarasvatī!',
            kn: 'ಹಗಲಿನಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಆ ಹಗಲಿನಲ್ಲೇ, ರಾತ್ರಿಯಲ್ಲಿ ಮಾಡಿದ ಪಾಪ ಆ ರಾತ್ರಿಯಲ್ಲೇ (ಈ ಉಪಾಸನೆಯಿಂದ) ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ. ಎಲ್ಲಾ ವರ್ಣಗಳುಳ್ಳ ಮಹಾದೇವಿ, ಸಂಧ್ಯಾವಿದ್ಯೆಯೇ, ಸರಸ್ವತಿ!',
          },
        },
        {
          text:
            'ओजोऽसि सहोऽसि बलमसि भ्राजोऽसि देवानां धामनामासि ।\nविश्वमसि विश्वायुः सर्वमसि सर्वायुरभिभूरोम् ।\nगायत्रीमावाहयामि सावित्रीमावाहयामि सरस्वतीमावाहयामि ॥',
          meaning: {
            en: 'You are vigour, you are endurance, you are strength, you are splendour; you are the abode and name of the gods; you are the universe and the life of the universe, you are all and the life of all, the conqueror, Om. I invoke Gāyatrī, I invoke Sāvitrī, I invoke Sarasvatī.',
            kn: 'ನೀನು ಓಜಸ್ಸು, ಸಹನೆ, ಬಲ, ತೇಜಸ್ಸು; ದೇವತೆಗಳ ಧಾಮವೂ ನಾಮವೂ ನೀನೇ; ವಿಶ್ವವೂ ವಿಶ್ವದ ಆಯುಸ್ಸೂ, ಸರ್ವವೂ ಸರ್ವರ ಆಯುಸ್ಸೂ, ಎಲ್ಲವನ್ನೂ ಮೀರಿದವಳೂ ನೀನೇ, ಓಂ. ಗಾಯತ್ರಿಯನ್ನು, ಸಾವಿತ್ರಿಯನ್ನು, ಸರಸ್ವತಿಯನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'छन्दर्षीनावाहयामि श्रियमावाहयामि ।\nगायत्रिया गायत्रीच्छन्दो विश्वामित्र ऋषिः सविता देवता ।\nअग्निर्मुखं ब्रह्मा शिरो विष्णुर्हृदयं रुद्रः शिखा पृथिवी योनिः ।\nप्राणापानव्यानोदानसमाना सप्राणा श्वेतवर्णा सांख्यायनसगोत्रा ।\nगायत्री चतुर्विंशत्यक्षरा त्रिपदा षट्कुक्षिः पञ्चशीर्षोपनयने विनियोगः ॥',
          meaning: {
            en: 'I invoke the metres and seers, I invoke Śrī. Of the Gāyatrī, the metre is gāyatrī, the seer Viśvāmitra, the deity Savitṛ. Agni is her mouth, Brahmā her head, Viṣṇu her heart, Rudra her topknot, the Earth her source; she is endowed with the five vital breaths, white in colour, of the Sāṃkhyāyana gotra, of twenty-four syllables, three feet, six bellies and five heads; she is employed at the upanayana.',
            kn: 'ಛಂದಸ್ಸು-ಋಷಿಗಳನ್ನೂ ಶ್ರೀಯನ್ನೂ ಆವಾಹಿಸುತ್ತೇನೆ. ಗಾಯತ್ರಿಗೆ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ. ಅಗ್ನಿ ಅವಳ ಮುಖ, ಬ್ರಹ್ಮ ತಲೆ, ವಿಷ್ಣು ಹೃದಯ, ರುದ್ರ ಶಿಖೆ, ಭೂಮಿ ಯೋನಿ; ಪ್ರಾಣ-ಅಪಾನ-ವ್ಯಾನ-ಉದಾನ-ಸಮಾನಗಳಿಂದ ಕೂಡಿದವಳು, ಬಿಳಿಯ ಬಣ್ಣದವಳು, ಸಾಂಖ್ಯಾಯನ ಗೋತ್ರದವಳು, ಇಪ್ಪತ್ನಾಲ್ಕು ಅಕ್ಷರ, ಮೂರು ಪಾದ, ಆರು ಕುಕ್ಷಿ, ಐದು ಶಿರಸ್ಸುಗಳುಳ್ಳವಳು; ಉಪನಯನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { tradition: M },
          text: 'आगच्छ वरदे देवि जपे मे सन्निधौ भव ।\nगायन्तं त्रायसे यस्माद्गायत्री त्वं ततः स्मृता ॥',
          meaning: {
            en: 'Come, O boon-giver, and be present with me in my japa. Because you protect the one who sings you, you are called Gāyatrī. (Mādhva: the Lord is thought of as the Gāyatrī and invited into the heart.)',
            kn: 'ವರವನ್ನು ಕೊಡುವವನೇ, ಬಾ; ನನ್ನ ಜಪದಲ್ಲಿ ಸನ್ನಿಹಿತನಾಗು. ನಿನ್ನನ್ನು ಗಾನಮಾಡುವವನನ್ನು ರಕ್ಷಿಸುವುದರಿಂದ ನೀನು ಗಾಯತ್ರೀ ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತೀಯೆ. (ಮಾಧ್ವರು: ಭಗವಂತನನ್ನೇ ಗಾಯತ್ರೀಪ್ರತಿಪಾದ್ಯನೆಂದು ಚಿಂತಿಸಿ ಹೃದಯಮಂದಿರಕ್ಕೆ ಆಹ್ವಾನಿಸಬೇಕು.)',
          },
        },
      ],
    },
    // 14 ────────────────────────────────────────────────────────────
    {
      title: 'न्यासः',
      titleEn: 'Ṛṣi–chandas–devatā and nyāsa',
      note:
        'Mādhva (Uttarādi Maṭha manual): karanyāsa — with both index fingers touch both thumbs (tat savituḥ), then with the thumbs touch the index, middle, ring and little fingers in turn, and finally the front and back of the hands; aṅganyāsa — touch the chest, head, topknot, upper chest (kavaca) and eyes, and at अस्त्राय फट् snap the fingers and clap; then digbandha (sealing the directions). Then say the ṛṣi–chandas–devatā for the japa. Smārta (Kanchi manual): repeat the praṇava and vyāhṛti nyāsa of step 3 touching head, nose-tip and chest, and say the Sāvitrī nyāsa below in the same way. Nyāsa is optional in some families.',
      noteKn:
        'ಮಾಧ್ವರು (ಉತ್ತರಾದಿಮಠ): ಕರನ್ಯಾಸ — ಎರಡೂ ತೋರುಬೆರಳುಗಳಿಂದ ಹೆಬ್ಬೆರಳುಗಳನ್ನು ("ತತ್ಸವಿತುಃ"), ನಂತರ ಹೆಬ್ಬೆರಳುಗಳಿಂದ ಕ್ರಮವಾಗಿ ತೋರು, ನಡು, ಉಂಗುರ, ಕಿರು ಬೆರಳುಗಳನ್ನು, ಕೊನೆಗೆ ಅಂಗೈ-ಮುಂಗೈಗಳನ್ನು ಮುಟ್ಟಬೇಕು; ಅಂಗನ್ಯಾಸ — ಎದೆ, ತಲೆ, ಶಿಖೆ, ಉರಸ್ಸು (ಕವಚ), ಕಣ್ಣುಗಳನ್ನು ಮುಟ್ಟಿ, "ಅಸ್ತ್ರಾಯ ಫಟ್" ಎನ್ನುವಾಗ ಚಿಟಿಕೆ ಹೊಡೆದು ಚಪ್ಪಾಳೆ ತಟ್ಟಬೇಕು; ನಂತರ ದಿಗ್ಬಂಧ. ಬಳಿಕ ಜಪಕ್ಕೆ ಋಷಿ-ಛಂದಸ್ಸು-ದೇವತೆಗಳನ್ನು ಹೇಳಬೇಕು. ಸ್ಮಾರ್ತರು (ಕಂಚಿ ಪುಸ್ತಕ): ೩ನೇ ಹಂತದ ಪ್ರಣವ-ವ್ಯಾಹೃತಿ ನ್ಯಾಸವನ್ನು ತಲೆ, ಮೂಗಿನ ತುದಿ, ಎದೆ ಮುಟ್ಟುತ್ತಾ ಮತ್ತೆ ಹೇಳಿ, ಕೆಳಗಿನ ಸಾವಿತ್ರೀ ನ್ಯಾಸವನ್ನೂ ಹಾಗೆಯೇ ಹೇಳಬೇಕು. ಕೆಲವು ಮನೆತನಗಳಲ್ಲಿ ನ್ಯಾಸ ಐಚ್ಛಿಕ.',
      verses: [
        {
          when: { tradition: M },
          text:
            'तत्सवितुः अङ्गुष्ठाभ्यां नमः । वरेण्यं तर्जनीभ्यां नमः ।\nभर्गो देवस्य मध्यमाभ्यां नमः । धीमहि अनामिकाभ्यां नमः ।\nधियो यो नः कनिष्ठिकाभ्यां नमः । प्रचोदयात् करतलकरपृष्ठाभ्यां नमः ॥',
          meaning: {
            en: 'Karanyāsa: the parts of the Gāyatrī are placed on the thumbs, index, middle, ring and little fingers, and on the palms and backs of the hands, with salutation.',
            kn: 'ಕರನ್ಯಾಸ: ಗಾಯತ್ರಿಯ ಭಾಗಗಳನ್ನು ಹೆಬ್ಬೆರಳು, ತೋರು, ನಡು, ಉಂಗುರ, ಕಿರು ಬೆರಳುಗಳಲ್ಲೂ ಅಂಗೈ-ಮುಂಗೈಗಳಲ್ಲೂ ನಮಸ್ಕಾರದೊಂದಿಗೆ ಇರಿಸುವುದು.',
          },
        },
        {
          when: { tradition: M },
          text:
            'तत्सवितुः हृदयाय नमः । वरेण्यं शिरसे स्वाहा ।\nभर्गो देवस्य शिखायै वषट् । धीमहि कवचाय हुम् ।\nधियो यो नः नेत्राभ्यां वौषट् । प्रचोदयात् अस्त्राय फट् ।\nभूर्भुवस्सुवरोमिति दिग्बन्धः ॥',
          meaning: {
            en: 'Aṅganyāsa: the parts of the Gāyatrī are placed on the heart, head, topknot, the chest as armour and the eyes, and as a weapon; with “bhūr bhuvas suvar om” the directions are sealed against evil influences.',
            kn: 'ಅಂಗನ್ಯಾಸ: ಗಾಯತ್ರಿಯ ಭಾಗಗಳನ್ನು ಹೃದಯ, ತಲೆ, ಶಿಖೆ, ಕವಚರೂಪವಾಗಿ ಉರಸ್ಸು, ಕಣ್ಣುಗಳಲ್ಲೂ ಅಸ್ತ್ರರೂಪವಾಗಿಯೂ ಇರಿಸುವುದು; "ಭೂರ್ಭುವಸ್ಸುವರೋಮ್" ಎಂದು ದುಷ್ಟಶಕ್ತಿಗಳು ಪ್ರವೇಶಿಸದಂತೆ ದಿಕ್ಕುಗಳನ್ನು ಬಂಧಿಸುವುದು.',
          },
        },
        {
          when: { tradition: M },
          text:
            'प्रणवस्य परब्रह्म ऋषिः । परमात्मा देवता । दैवी गायत्री छन्दः ।\nव्याहृतीनां प्रजापतिरृषिः । अग्निवायुसूर्या देवताः । गायत्र्युष्णिगनुष्टुभश्छन्दांसि ।\nअस्य श्रीगायत्रीमन्त्रस्य विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।\nजपे विनियोगः ॥',
          meaning: {
            en: 'Of Oṃ the seer is the Supreme Brahman, the deity the Supreme Self, the metre daivī gāyatrī; of the vyāhṛtis the seer is Prajāpati, the deities Agni, Vāyu and Sūrya, the metres gāyatrī, uṣṇik and anuṣṭubh; of this Gāyatrī mantra the seer is Viśvāmitra, the deity Savitṛ, the metre gāyatrī; it is applied in japa.',
            kn: 'ಓಂಕಾರಕ್ಕೆ ಪರಬ್ರಹ್ಮ ಋಷಿ, ಪರಮಾತ್ಮ ದೇವತೆ, ದೈವೀ ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ವ್ಯಾಹೃತಿಗಳಿಗೆ ಪ್ರಜಾಪತಿ ಋಷಿ, ಅಗ್ನಿ-ವಾಯು-ಸೂರ್ಯರು ದೇವತೆಗಳು, ಗಾಯತ್ರೀ-ಉಷ್ಣಿಕ್-ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸುಗಳು; ಈ ಗಾಯತ್ರೀ ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ಸವಿತೃ ದೇವತೆ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು; ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          when: { tradition: S },
          text: 'सावित्र्या ऋषिर्विश्वामित्रः । निचृद्गायत्री छन्दः । सविता देवता ॥',
          meaning: {
            en: 'Of the Sāvitrī (Gāyatrī) the seer is Viśvāmitra, the metre nicṛd gāyatrī, the deity Savitṛ.',
            kn: 'ಸಾವಿತ್ರೀ (ಗಾಯತ್ರೀ) ಮಂತ್ರಕ್ಕೆ ವಿಶ್ವಾಮಿತ್ರ ಋಷಿ, ನಿಚೃದ್ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಸವಿತೃ ದೇವತೆ.',
          },
        },
      ],
    },
    // 15 ────────────────────────────────────────────────────────────
    {
      title: 'जपसङ्कल्पः',
      titleEn: 'Japa saṅkalpa',
      note:
        'Do prāṇāyāma again (Mādhva: three times; Smārta: once, or ten times as in the Kanchi manual), then make the resolve for japa for the time of day. The Mādhva manual places this resolve right after the dhyāna śloka of the next step; the Smārta manual places it before the nyāsa.',
      noteKn:
        'ಮತ್ತೆ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ (ಮಾಧ್ವರು ಮೂರು ಬಾರಿ; ಸ್ಮಾರ್ತರು ಒಮ್ಮೆ, ಕಂಚಿ ಪುಸ್ತಕದಂತೆ ಹತ್ತು ಬಾರಿ), ಆಯಾ ಕಾಲದ ಜಪಸಂಕಲ್ಪ ಮಾಡಬೇಕು. ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿ ಈ ಸಂಕಲ್ಪ ಮುಂದಿನ ಧ್ಯಾನಶ್ಲೋಕದ ನಂತರ ಬರುತ್ತದೆ; ಸ್ಮಾರ್ತ ಪುಸ್ತಕದಲ್ಲಿ ನ್ಯಾಸಕ್ಕೆ ಮೊದಲು.',
      verses: [
        {
          when: { tradition: M, time: ['morning'] },
          text: 'अद्य पूर्वोच्चरित एवंगुणविशेषणविशिष्टायां शुभतिथौ\nभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति प्रातःसन्ध्याङ्गगायत्रीमन्त्रजपमहं करिष्ये ॥',
          meaning: {
            en: 'Today, on the auspicious day described before, moved by Śrī Lakṣmīnārāyaṇa called Savitṛ, who dwells in Mukhyaprāṇa the beloved of Bhāratī, and for his pleasure, I shall do japa of the Gāyatrī mantra, as part of the morning sandhyā, as far as I am able.',
            kn: 'ಇಂದು, ಹಿಂದೆ ಹೇಳಿದ ಈ ಶುಭದಿನದಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಯಥಾಶಕ್ತಿ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: M, time: ['midday'] },
          text: 'अद्य पूर्वोच्चरित एवंगुणविशेषणविशिष्टायां शुभतिथौ\nभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति माध्याह्नसन्ध्याङ्गगायत्रीमन्त्रजपमहं करिष्ये ॥',
          meaning: {
            en: 'Today, moved by Śrī Lakṣmīnārāyaṇa called Savitṛ, who dwells in Mukhyaprāṇa, and for his pleasure, I shall do japa of the Gāyatrī mantra as part of the midday sandhyā, as far as I am able.',
            kn: 'ಇಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಮಾಧ್ಯಾಹ್ನ ಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಯಥಾಶಕ್ತಿ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: M, time: ['evening'] },
          text: 'अद्य पूर्वोच्चरित एवंगुणविशेषणविशिष्टायां शुभतिथौ\nभारतीरमणमुख्यप्राणान्तर्गत सवितृनामक श्रीलक्ष्मीनारायणप्रेरणया\nसवितृनामक श्रीलक्ष्मीनारायणप्रीत्यर्थं\nयथाशक्ति सायंसन्ध्याङ्गगायत्रीमन्त्रजपमहं करिष्ये ॥',
          meaning: {
            en: 'Today, moved by Śrī Lakṣmīnārāyaṇa called Savitṛ, who dwells in Mukhyaprāṇa, and for his pleasure, I shall do japa of the Gāyatrī mantra as part of the evening sandhyā, as far as I am able.',
            kn: 'ಇಂದು, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಸಾಯಂಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಗಾಯತ್ರೀ ಮಂತ್ರಜಪವನ್ನು ಯಥಾಶಕ್ತಿ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S, time: ['morning'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nप्रातःसन्ध्यागायत्रीमहामन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'For the destruction of all my sins, and so for the pleasure of the Supreme Lord, I shall do japa of the great Gāyatrī mantra of the morning sandhyā.',
            kn: 'ನನ್ನ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S, time: ['midday'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nमाध्याह्निकगायत्रीमहामन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'For the destruction of all my sins, and so for the pleasure of the Supreme Lord, I shall do japa of the great Gāyatrī mantra of the midday worship.',
            kn: 'ನನ್ನ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಮಾಧ್ಯಾಹ್ನಿಕದ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          when: { tradition: S, time: ['evening'] },
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nसायंसन्ध्यागायत्रीमहामन्त्रजपं करिष्ये ॥',
          meaning: {
            en: 'For the destruction of all my sins, and so for the pleasure of the Supreme Lord, I shall do japa of the great Gāyatrī mantra of the evening sandhyā.',
            kn: 'ನನ್ನ ಎಲ್ಲಾ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಸಾಯಂಸಂಧ್ಯೆಯ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 16 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्रीध्यानम्',
      titleEn: 'Gāyatrī dhyāna (meditation)',
      note:
        'Mādhva: meditate on Śrī Lakṣmīnārāyaṇa shining in the middle of the solar orb, seated on a lotus, wearing armlets, makara earrings, a crown and a necklace, golden in colour, holding conch and discus; the same śloka is used at all three times. Smārta (Kanchi manual): meditate on the five-faced Goddess Gāyatrī; the manual pictures her as Gāyatrī (Brahmā’s form) in the morning, Sāvitrī (Rudra’s form) at midday and Sarasvatī (Viṣṇu’s form) in the evening. Separate time-specific dhyāna ślokas are used in some families; they are not given here.',
      noteKn:
        'ಮಾಧ್ವರು: ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿ ರಾರಾಜಿಸುವ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತ, ತೋಳುಬಳೆ, ಮಕರಕುಂಡಲ, ಕಿರೀಟ, ಹಾರಗಳಿಂದ ಅಲಂಕೃತನಾದ, ಬಂಗಾರದ ಬಣ್ಣದ, ಶಂಖ-ಚಕ್ರಧಾರಿಯಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನನ್ನು ಧ್ಯಾನಿಸಬೇಕು; ಮೂರು ಕಾಲಕ್ಕೂ ಇದೇ ಶ್ಲೋಕ. ಸ್ಮಾರ್ತರು (ಕಂಚಿ ಪುಸ್ತಕ): ಐದು ಮುಖಗಳ ಗಾಯತ್ರೀದೇವಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು; ಬೆಳಿಗ್ಗೆ ಗಾಯತ್ರೀ (ಬ್ರಹ್ಮಸ್ವರೂಪಿಣಿ), ಮಧ್ಯಾಹ್ನ ಸಾವಿತ್ರೀ (ರುದ್ರರೂಪಿಣಿ), ಸಂಜೆ ಸರಸ್ವತೀ (ವಿಷ್ಣುಸ್ವರೂಪಿಣಿ) ಎಂದು ಆ ಪುಸ್ತಕ ಚಿತ್ರಿಸುತ್ತದೆ. ಕೆಲವು ಮನೆತನಗಳಲ್ಲಿ ಕಾಲಕ್ಕೆ ತಕ್ಕ ಬೇರೆ ಧ್ಯಾನಶ್ಲೋಕಗಳಿವೆ; ಅವನ್ನು ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ.',
      verses: [
        {
          when: { tradition: M },
          text: 'ध्येयः सदा सवितृमण्डलमध्यवर्ती\nनारायणः सरसिजासनसन्निविष्टः ।\nकेयूरवान् मकरकुण्डलवान् किरीटी\nहारी हिरण्मयवपुर्धृतशङ्खचक्रः ॥',
          meaning: {
            en: 'Nārāyaṇa should always be meditated upon, abiding in the middle of the orb of the Sun, seated on a lotus, wearing armlets, makara-shaped earrings, a crown and a necklace, golden in form, holding the conch and the discus.',
            kn: 'ಸೂರ್ಯಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿರುವ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ತೋಳುಬಳೆ, ಮಕರಕುಂಡಲ, ಕಿರೀಟ, ಹಾರಗಳನ್ನು ಧರಿಸಿರುವ, ಬಂಗಾರದ ದೇಹಕಾಂತಿಯುಳ್ಳ, ಶಂಖ-ಚಕ್ರಗಳನ್ನು ಹಿಡಿದಿರುವ ಶ್ರೀನಾರಾಯಣನನ್ನು ಸದಾ ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          when: { tradition: S },
          text: 'मुक्ताविद्रुमहेमनीलधवलच्छायैर्मुखैस्त्रीक्षणैः\nयुक्तामिन्दुकलानिबद्धरत्नमुकुटां तत्त्वार्थवर्णात्मिकाम् ।\nगायत्रीं वरदाभयाङ्कुशकशाः शुभ्रं कपालं गुणं\nशङ्खं चक्रमथारविन्दयुगलं हस्तैर्वहन्तीं भजे ॥',
          meaning: {
            en: 'I worship Gāyatrī, whose faces have the hues of pearl, coral, gold, sapphire and white, each with three eyes; whose jewelled crown bears the crescent moon; whose very letters embody the meaning of reality; who holds in her hands the gestures of boon and fearlessness, a goad, a whip, a white skull, a rope, a conch, a discus and a pair of lotuses.',
            kn: 'ಮುತ್ತು, ಹವಳ, ಚಿನ್ನ, ನೀಲ, ಬಿಳುಪಿನ ಬಣ್ಣಗಳ ಐದು ಮುಖಗಳುಳ್ಳ, ಪ್ರತಿ ಮುಖಕ್ಕೂ ಮೂರು ಕಣ್ಣುಗಳಿರುವ, ಚಂದ್ರಕಲೆಯಿಂದ ಕೂಡಿದ ರತ್ನಕಿರೀಟವುಳ್ಳ, ತತ್ತ್ವಾರ್ಥವನ್ನು ತಿಳಿಸುವ ಅಕ್ಷರಸ್ವರೂಪಳಾದ, ಕೈಗಳಲ್ಲಿ ವರದ-ಅಭಯ ಮುದ್ರೆಗಳು, ಅಂಕುಶ, ಚಾವಟಿ, ಬಿಳಿಯ ಕಪಾಲ, ಪಾಶ, ಶಂಖ, ಚಕ್ರ, ಎರಡು ಕಮಲಗಳನ್ನು ಧರಿಸಿರುವ ಗಾಯತ್ರೀದೇವಿಯನ್ನು ಭಜಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 17 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्रीजपः',
      titleEn: 'Gāyatrī japa',
      note:
        'Recite the Gāyatrī silently or in a whisper with the mind on its meaning, pausing at the five places shown (Oṃ / vyāhṛtis / each of the three pādas). Number: 1008 (best), 108 (middle), 28, or at least 10. Mādhva (Uttarādi Maṭha manual): count on the finger joints, starting at the lowest joint of the ring finger and moving clockwise to the lowest joint of the middle finger (ten per round), treating the middle joints of the ring and middle fingers as the meru; no mālā is used for sandhyā japa; householders and brahmacārīs say Oṃ only at the beginning; hold the hand level with the navel in the morning, the heart at midday and the face in the evening. Smārta (Kanchi manual): stand in the morning with hands level with the face, sit at midday with hands at the chest, and sit in the evening with hands at the navel; the fingers are kept together and covered with the upper cloth; that manual gives 108 in the morning, 32 at midday and 64 in the evening. Follow your family.',
      noteKn:
        'ಅರ್ಥವನ್ನು ಚಿಂತಿಸುತ್ತಾ ಮನಸ್ಸಿನಲ್ಲಿ ಅಥವಾ ಮೆಲ್ಲನೆ ಗಾಯತ್ರಿಯನ್ನು ಜಪಿಸಬೇಕು; ತೋರಿಸಿದ ಐದು ಕಡೆ (ಓಂ / ವ್ಯಾಹೃತಿ / ಮೂರು ಪಾದಗಳು) ನಿಲ್ಲಿಸಬೇಕು. ಸಂಖ್ಯೆ: ಸಾವಿರದ ಎಂಟು (ಉತ್ತಮ), ನೂರೆಂಟು (ಮಧ್ಯಮ), ಇಪ್ಪತ್ತೆಂಟು, ಕನಿಷ್ಠ ಹತ್ತು. ಮಾಧ್ವರು (ಉತ್ತರಾದಿಮಠ): ಬೆರಳ ಪರ್ವಗಳಿಂದ ಎಣಿಸಬೇಕು — ಉಂಗುರದ ಬೆರಳಿನ ಕೆಳಗಿನ ಪರ್ವದಿಂದ ಆರಂಭಿಸಿ ಪ್ರದಕ್ಷಿಣವಾಗಿ ನಡುಬೆರಳಿನ ಕೆಳಗಿನ ಪರ್ವದವರೆಗೆ ಹತ್ತು; ಉಂಗುರ ಮತ್ತು ನಡು ಬೆರಳುಗಳ ಮಧ್ಯದ ಪರ್ವಗಳೇ ಮೇರು; ಸಂಧ್ಯಾಂಗ ಜಪಕ್ಕೆ ಜಪಮಾಲೆ ಬೇಡ; ಗೃಹಸ್ಥರೂ ಬ್ರಹ್ಮಚಾರಿಗಳೂ ಆರಂಭದಲ್ಲಿ ಮಾತ್ರ ಓಂಕಾರ ಹೇಳಬೇಕು; ಕೈಯನ್ನು ಬೆಳಿಗ್ಗೆ ನಾಭಿಯ ಎತ್ತರದಲ್ಲಿ, ಮಧ್ಯಾಹ್ನ ಹೃದಯದ ಎತ್ತರದಲ್ಲಿ, ಸಂಜೆ ಮುಖದ ಎತ್ತರದಲ್ಲಿ ಹಿಡಿಯಬೇಕು. ಸ್ಮಾರ್ತರು (ಕಂಚಿ ಪುಸ್ತಕ): ಬೆಳಿಗ್ಗೆ ನಿಂತು ಕೈಗಳನ್ನು ಮುಖಕ್ಕೆ ನೇರವಾಗಿ, ಮಧ್ಯಾಹ್ನ ಕುಳಿತು ಎದೆಗೆ ನೇರವಾಗಿ, ಸಂಜೆ ಕುಳಿತು ನಾಭಿಗೆ ನೇರವಾಗಿ; ಬೆರಳುಗಳು ಸೇರಿರಲಿ, ಉತ್ತರೀಯದಿಂದ ಮುಚ್ಚಿರಲಿ; ಆ ಪುಸ್ತಕದಲ್ಲಿ ಬೆಳಿಗ್ಗೆ ೧೦೮, ಮಧ್ಯಾಹ್ನ ೩೨, ಸಂಜೆ ೬೪. ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿಯನ್ನು ಅನುಸರಿಸಿ.',
      verses: [
        {
          text: 'ॐ ।\nभूर्भुवस्सुवः ।\nतत्सवितुर्वरेण्यम् ।\nभर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om. Earth, sky and heaven. We meditate on that excellent radiance of the divine Savitṛ; may he stir and guide our minds. (Mādhva: we meditate on the adorable splendour of the Lord, the creator, who is full, all-pervading and bliss itself, and who moves our minds and deeds.)',
            kn: 'ಓಂ. ಭೂರ್ಭುವಸ್ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಮಾಧ್ವರು: ಪರಿಪೂರ್ಣನೂ ಸರ್ವವ್ಯಾಪ್ತನೂ ಆನಂದಸ್ವರೂಪನೂ ಆದ, ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನೂ ಕರ್ಮಗಳನ್ನೂ ಪ್ರೇರಿಸುವ ಸೃಷ್ಟಿಕರ್ತನಾದ ಪರಮಾತ್ಮನ ಶ್ರೇಷ್ಠರಿಂದಲೂ ಭಜನೀಯವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ.)',
          },
        },
      ],
    },
    // 18 ────────────────────────────────────────────────────────────
    {
      title: 'जपसमर्पणम्',
      titleEn: 'Japa-samarpaṇa (offering the japa)',
      when: { tradition: M },
      note:
        'After japa do prāṇāyāma, repeat the karanyāsa and aṅganyāsa and the digbandha (now releasing the directions), and recite the dhyāna śloka again. Then offer the japa to the Lord in the words below and say श्रीकृष्णार्पणमस्तु, thinking that the Lord within the Sun, within Mukhyaprāṇa, is pleased.',
      noteKn:
        'ಜಪದ ನಂತರ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಕರನ್ಯಾಸ-ಅಂಗನ್ಯಾಸ ಮತ್ತು ದಿಗ್ಬಂಧವನ್ನು (ಈಗ ದಿಕ್ಕುಗಳ ವಿಮೋಚನೆ) ಮತ್ತೆ ಮಾಡಿ, ಧ್ಯಾನಶ್ಲೋಕವನ್ನು ಪುನಃ ಹೇಳಬೇಕು. ನಂತರ ಈ ವಾಕ್ಯದಿಂದ ಜಪವನ್ನು ಭಗವಂತನಿಗೆ ಅರ್ಪಿಸಿ, ಸೂರ್ಯಾಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀಪತಿ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಯಾಮಿಯಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ ಎಂದು ಚಿಂತಿಸಿ "ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು" ಎನ್ನಬೇಕು.',
      verses: [
        {
          when: { time: ['morning'] },
          text: 'अनेन प्रातःसन्ध्याङ्गगायत्रीमन्त्रजपेन गायत्रीमन्त्रप्रतिपाद्यः\nश्रीभारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकश्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this Gāyatrī japa, part of the morning sandhyā, may Śrī Lakṣmīnārāyaṇa called Savitṛ, the one the Gāyatrī speaks of, who dwells in Mukhyaprāṇa the beloved of Bhāratī, be pleased; being well pleased, may he grant boons. May it be an offering to Śrī Kṛṣṇa.',
            kn: 'ಪ್ರಾತಃಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಈ ಗಾಯತ್ರೀಜಪದಿಂದ, ಗಾಯತ್ರೀಮಂತ್ರಪ್ರತಿಪಾದ್ಯನಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ, ಸುಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'अनेन माध्याह्नसन्ध्याङ्गगायत्रीमन्त्रजपेन गायत्रीमन्त्रप्रतिपाद्यः\nश्रीभारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकश्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this Gāyatrī japa, part of the midday sandhyā, may Śrī Lakṣmīnārāyaṇa called Savitṛ, the one the Gāyatrī speaks of, who dwells in Mukhyaprāṇa, be pleased and grant boons. May it be an offering to Śrī Kṛṣṇa.',
            kn: 'ಮಾಧ್ಯಾಹ್ನ ಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಈ ಗಾಯತ್ರೀಜಪದಿಂದ, ಗಾಯತ್ರೀಮಂತ್ರಪ್ರತಿಪಾದ್ಯನಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'अनेन सायंसन्ध्याङ्गगायत्रीमन्त्रजपेन गायत्रीमन्त्रप्रतिपाद्यः\nश्रीभारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकश्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this Gāyatrī japa, part of the evening sandhyā, may Śrī Lakṣmīnārāyaṇa called Savitṛ, the one the Gāyatrī speaks of, who dwells in Mukhyaprāṇa, be pleased and grant boons. May it be an offering to Śrī Kṛṣṇa.',
            kn: 'ಸಾಯಂಸಂಧ್ಯೆಯ ಅಂಗವಾದ ಈ ಗಾಯತ್ರೀಜಪದಿಂದ, ಗಾಯತ್ರೀಮಂತ್ರಪ್ರತಿಪಾದ್ಯನಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ. ಇದು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
      ],
    },
    // 19 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्र्युद्वासनम्',
      titleEn: 'Gāyatrī udvāsana (farewell) — Smārta',
      when: { tradition: S },
      note:
        'Smārta order: after japa do one prāṇāyāma and stand up. With folded hands, touching the ground at the first verse (Kanchi manual), bid farewell to the Gāyatrī. Then continue with the upasthāna.',
      noteKn:
        'ಸ್ಮಾರ್ತ ಕ್ರಮ: ಜಪದ ನಂತರ ಒಂದು ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಎದ್ದು ನಿಲ್ಲಬೇಕು. ಕೈಮುಗಿದು, ಮೊದಲ ಶ್ಲೋಕ ಹೇಳುವಾಗ ಭೂಮಿಯನ್ನು ಮುಟ್ಟಿ (ಕಂಚಿ ಪುಸ್ತಕ), ಗಾಯತ್ರಿಯನ್ನು ಬೀಳ್ಕೊಡಬೇಕು. ನಂತರ ಉಪಸ್ಥಾನ.',
      verses: [
        {
          text: 'उत्तमे इत्यनुवाकस्य वामदेव ऋषिः । अनुष्टुप् छन्दः ।\nगायत्री देवता । गायत्र्युद्वासने विनियोगः ॥',
          meaning: {
            en: 'Of the anuvāka “uttame” the seer is Vāmadeva, the metre anuṣṭubh, the deity Gāyatrī; it is applied in bidding farewell to the Gāyatrī.',
            kn: '"ಉತ್ತಮೇ" ಅನುವಾಕಕ್ಕೆ ವಾಮದೇವ ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ಗಾಯತ್ರೀ ದೇವತೆ; ಗಾಯತ್ರೀ ಉದ್ವಾಸನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'उत्तमे शिखरे जाते भूम्यां पर्वतमूर्धनि ।\nब्राह्मणेभ्योऽभ्यनुज्ञाता गच्छ देवि यथासुखम् ॥',
          meaning: {
            en: 'O Goddess, born on the highest peak, on the mountain summit upon the earth: with the leave of the brāhmaṇas, go as you please.',
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
    // 20 ────────────────────────────────────────────────────────────
    {
      title: 'सूर्योपस्थानम्',
      titleEn: 'Sūryopasthāna (standing worship of the Sun)',
      note:
        'Stand facing the Sun with folded hands: east in the morning, north (or east) at midday, west in the evening. Morning: the three ṛks to Mitra (Taittirīya Saṃhitā 3.4.11). Midday: āsatyena…, udvayaṃ…, udu tyaṃ…, citraṃ devānām… and taccakṣuḥ…; at पश्येम शरदः शतम्… look at the Sun through the gap made by the curled fingers of both hands (vyoma mudrā, learn it from elders). Evening: the five ṛks to Varuṇa. Mādhva: at midday add हंसः शुचिषत्…; after the morning upasthāna say नमो ब्रह्मणे…; then turn round three times (morning and midday starting from the east, evening from the west) and salute the directions. Smārta: at midday add य उदगान्महतोऽर्णवात्… with folded hands.',
      noteKn:
        'ಸೂರ್ಯನಿಗೆ ಎದುರಾಗಿ ಕೈಮುಗಿದು ನಿಲ್ಲಬೇಕು: ಬೆಳಿಗ್ಗೆ ಪೂರ್ವ, ಮಧ್ಯಾಹ್ನ ಉತ್ತರ (ಅಥವಾ ಪೂರ್ವ), ಸಂಜೆ ಪಶ್ಚಿಮ. ಬೆಳಿಗ್ಗೆ: ಮಿತ್ರದೇವನ ಮೂರು ಋಕ್ಕುಗಳು. ಮಧ್ಯಾಹ್ನ: "ಆಸತ್ಯೇನ…", "ಉದ್ವಯಂ…", "ಉದು ತ್ಯಂ…", "ಚಿತ್ರಂ ದೇವಾನಾಂ…", "ತಚ್ಚಕ್ಷುಃ…"; "ಪಶ್ಯೇಮ ಶರದಃ ಶತಂ…" ಎನ್ನುವಾಗ ಎರಡೂ ಕೈಬೆರಳುಗಳನ್ನು ಮಡಿಸಿ ಮಾಡಿದ ರಂಧ್ರದ ಮೂಲಕ ಸೂರ್ಯನನ್ನು ನೋಡಬೇಕು (ವ್ಯೋಮಮುದ್ರೆ — ಹಿರಿಯರಿಂದ ಕಲಿಯಿರಿ). ಸಂಜೆ: ವರುಣದೇವನ ಐದು ಋಕ್ಕುಗಳು. ಮಾಧ್ವರು: ಮಧ್ಯಾಹ್ನ "ಹಂಸಃ ಶುಚಿಷತ್…" ಸೇರಿಸಬೇಕು; ಪ್ರಾತರುಪಸ್ಥಾನದ ನಂತರ "ನಮೋ ಬ್ರಹ್ಮಣೇ…" ಹೇಳಬೇಕು; ನಂತರ ತನ್ನ ಸುತ್ತ ಮೂರು ಬಾರಿ ತಿರುಗಿ (ಬೆಳಿಗ್ಗೆ-ಮಧ್ಯಾಹ್ನ ಪೂರ್ವದಿಂದ, ಸಂಜೆ ಪಶ್ಚಿಮದಿಂದ) ದಿಕ್ಕುಗಳಿಗೆ ನಮಸ್ಕರಿಸಬೇಕು. ಸ್ಮಾರ್ತರು: ಮಧ್ಯಾಹ್ನ ಕೈಮುಗಿದು "ಯ ಉದಗಾನ್ಮಹತೋಽರ್ಣವಾತ್…" ಸೇರಿಸುತ್ತಾರೆ.',
      verses: [
        {
          when: { time: ['morning'] },
          text: 'मित्रस्य चर्षणीधृतः श्रवो देवस्य सानसिम् ।\nसत्यं चित्रश्रवस्तमम् ॥',
          meaning: {
            en: 'We praise the glory of the god Mitra, upholder of all people: a glory that is true, bountiful and most wonderfully renowned.',
            kn: 'ಎಲ್ಲಾ ಜನರನ್ನು ಪೋಷಿಸುವ ಮಿತ್ರದೇವನ ಕೀರ್ತಿಯನ್ನು ಸ್ತುತಿಸುತ್ತೇವೆ; ಅದು ಸತ್ಯವಾದುದು, ಫಲವನ್ನು ಕೊಡುವಂಥದ್ದು, ಅತ್ಯಂತ ಅದ್ಭುತವಾಗಿ ಪ್ರಸಿದ್ಧವಾದುದು.',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'मित्रो जनान् यातयति प्रजानन् मित्रो दाधार पृथिवीमुत द्याम् ।\nमित्रः कृष्टीरनिमिषाभि चष्टे सत्याय हव्यं घृतवद्विधेम ॥',
          meaning: {
            en: 'Mitra, knowing all, sets people to their work; Mitra upholds the earth and the sky; Mitra watches over all beings without closing his eyes. To him, the true one, let us offer oblations rich with ghee.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಮಿತ್ರನು ಜನರನ್ನು ಅವರವರ ಕಾರ್ಯಗಳಿಗೆ ಪ್ರೇರಿಸುತ್ತಾನೆ; ಮಿತ್ರನು ಭೂಮಿಯನ್ನೂ ಆಕಾಶವನ್ನೂ ಧರಿಸಿದ್ದಾನೆ; ಮಿತ್ರನು ರೆಪ್ಪೆ ಮುಚ್ಚದೆ ಎಲ್ಲಾ ಜೀವಿಗಳನ್ನು ನೋಡುತ್ತಾನೆ. ಸತ್ಯಸ್ವರೂಪನಾದ ಅವನಿಗೆ ತುಪ್ಪದಿಂದ ಕೂಡಿದ ಹವಿಸ್ಸನ್ನು ಅರ್ಪಿಸೋಣ.',
          },
        },
        {
          when: { time: ['morning'] },
          text: 'प्र स मित्र मर्तो अस्तु प्रयस्वान् यस्त आदित्य शिक्षति व्रतेन ।\nन हन्यते न जीयते त्वोतो नैनमंहो अश्नोत्यन्तितो न दूरात् ॥',
          meaning: {
            en: 'O Mitra, O Āditya, may that mortal prosper who serves you by keeping your law. Protected by you, he is neither slain nor overcome; no distress reaches him, from near or from afar.',
            kn: 'ಓ ಮಿತ್ರ, ಓ ಆದಿತ್ಯ, ನಿನ್ನ ವ್ರತವನ್ನು ಪಾಲಿಸುತ್ತಾ ನಿನ್ನನ್ನು ಸೇವಿಸುವ ಮನುಷ್ಯನು ಸಮೃದ್ಧನಾಗಲಿ. ನಿನ್ನಿಂದ ರಕ್ಷಿತನಾದ ಅವನು ಕೊಲ್ಲಲ್ಪಡುವುದಿಲ್ಲ, ಸೋಲುವುದಿಲ್ಲ; ಹತ್ತಿರದಿಂದಾಗಲೀ ದೂರದಿಂದಾಗಲೀ ಯಾವ ಕಷ್ಟವೂ ಅವನನ್ನು ತಲುಪುವುದಿಲ್ಲ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'आसत्येन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।\nहिरण्ययेन सविता रथेना देवो याति भुवना विपश्यन् ॥',
          meaning: {
            en: 'Moving through the region of light, laying to rest both the immortal and the mortal, the god Savitṛ comes in his golden chariot, beholding all the worlds.',
            kn: 'ಪ್ರಕಾಶಮಯ ಲೋಕದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಾ, ಅಮರರನ್ನೂ ಮರ್ತ್ಯರನ್ನೂ ಅವರವರ ಸ್ಥಾನದಲ್ಲಿ ನೆಲೆಗೊಳಿಸುತ್ತಾ, ಸವಿತೃದೇವನು ಎಲ್ಲಾ ಲೋಕಗಳನ್ನು ನೋಡುತ್ತಾ ಚಿನ್ನದ ರಥದಲ್ಲಿ ಬರುತ್ತಾನೆ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'उद्वयं तमसस्परि पश्यन्तो ज्योतिरुत्तरम् ।\nदेवं देवत्रा सूर्यमगन्म ज्योतिरुत्तमम् ॥',
          meaning: {
            en: 'Rising above the darkness and beholding the higher light, we have come to the Sun, god among the gods, the highest light.',
            kn: 'ಕತ್ತಲೆಯನ್ನು ದಾಟಿ ಮೇಲಿನ ಬೆಳಕನ್ನು ನೋಡುತ್ತಾ, ದೇವತೆಗಳಲ್ಲಿ ದೇವನಾದ, ಉತ್ತಮ ಜ್ಯೋತಿಯಾದ ಸೂರ್ಯನನ್ನು ನಾವು ತಲುಪಿದ್ದೇವೆ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'उदु त्यं जातवेदसं देवं वहन्ति केतवः ।\nदृशे विश्वाय सूर्यम् ॥',
          meaning: {
            en: 'His rays bear aloft the god Sūrya, knower of all that is born, so that all may see him.',
            kn: 'ಹುಟ್ಟಿದ ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಸೂರ್ಯದೇವನನ್ನು ಎಲ್ಲರೂ ಕಾಣುವಂತೆ ಅವನ ಕಿರಣಗಳು ಮೇಲಕ್ಕೆ ಹೊತ್ತೊಯ್ಯುತ್ತವೆ.',
          },
        },
        {
          when: { time: ['midday'] },
          text: 'चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः ।\nआप्रा द्यावापृथिवी अन्तरिक्षं सूर्य आत्मा जगतस्तस्थुषश्च ॥',
          meaning: {
            en: 'The wondrous face of the gods has risen, the eye of Mitra, Varuṇa and Agni. He has filled heaven, earth and the sky between; Sūrya is the self of all that moves and all that stands still.',
            kn: 'ದೇವತೆಗಳ ಅದ್ಭುತ ಮುಖವೂ ಮಿತ್ರ, ವರುಣ, ಅಗ್ನಿಗಳ ಕಣ್ಣೂ ಆದ ಸೂರ್ಯನು ಉದಯಿಸಿದ್ದಾನೆ. ಅವನು ಸ್ವರ್ಗ, ಭೂಮಿ, ಅಂತರಿಕ್ಷಗಳನ್ನು ತುಂಬಿದ್ದಾನೆ; ಚರಾಚರ ಜಗತ್ತಿನ ಆತ್ಮ ಸೂರ್ಯನೇ.',
          },
        },
        {
          when: { time: ['midday'] },
          text:
            'तच्चक्षुर्देवहितं पुरस्ताच्छुक्रमुच्चरत् ।\nपश्येम शरदः शतं जीवेम शरदः शतं\nनन्दाम शरदः शतं मोदाम शरदः शतं\nभवाम शरदः शतं शृणवाम शरदः शतं\nप्रब्रवाम शरदः शतमजीतास्स्याम शरदः शतं\nज्योक्च सूर्यं दृशे ॥',
          meaning: {
            en: 'That bright eye, dear to the gods, rises in the east. May we see for a hundred autumns, live a hundred autumns, rejoice, be glad, flourish, hear and speak for a hundred autumns, and remain unconquered for a hundred autumns; and long may we behold the Sun.',
            kn: 'ದೇವತೆಗಳಿಗೆ ಹಿತವಾದ ಆ ಉಜ್ವಲ ಕಣ್ಣು ಪೂರ್ವದಲ್ಲಿ ಉದಯಿಸುತ್ತಿದೆ. ನಾವು ನೂರು ವರ್ಷ ನೋಡೋಣ, ನೂರು ವರ್ಷ ಬಾಳೋಣ, ನೂರು ವರ್ಷ ಸಂತೋಷಪಡೋಣ, ಆನಂದಿಸೋಣ, ಸಮೃದ್ಧರಾಗೋಣ, ಕೇಳೋಣ, ಮಾತನಾಡೋಣ, ನೂರು ವರ್ಷ ಸೋಲದವರಾಗಿರೋಣ; ಬಹುಕಾಲ ಸೂರ್ಯನನ್ನು ಕಾಣೋಣ.',
          },
        },
        {
          when: { tradition: S, time: ['midday'] },
          text: 'य उदगान्महतोऽर्णवाद्विभ्राजमानस्सरिरस्य मध्यात् ।\nस मा वृषभो लोहिताक्षस्सूर्यो विपश्चिन्मनसा पुनातु ॥',
          meaning: {
            en: 'He who has risen shining from the great ocean, from the midst of the waters: may that mighty, red-eyed, wise Sūrya purify me in mind.',
            kn: 'ಮಹಾಸಮುದ್ರದಿಂದ, ಜಲರಾಶಿಯ ಮಧ್ಯದಿಂದ ಪ್ರಕಾಶಿಸುತ್ತಾ ಉದಯಿಸಿದ, ಶ್ರೇಷ್ಠನೂ ಕೆಂಗಣ್ಣಿನವನೂ ಜ್ಞಾನಿಯೂ ಆದ ಸೂರ್ಯನು ನನ್ನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಪವಿತ್ರಗೊಳಿಸಲಿ.',
          },
        },
        {
          when: { tradition: M, time: ['midday'] },
          text: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।\nनृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतं बृहत् ॥',
          meaning: {
            en: 'The Swan in the bright heaven, the Vasu in the sky, the priest at the altar, the guest in the house, dwelling in men, in the best, in truth and in the heavens, born of waters, rays, truth and mountain: he is the great Truth.',
            kn: 'ಪ್ರಕಾಶಮಯ ಸ್ವರ್ಗದಲ್ಲಿರುವ ಹಂಸ, ಅಂತರಿಕ್ಷದ ವಸು, ವೇದಿಯ ಹೋತೃ, ಮನೆಯ ಅತಿಥಿ; ಮನುಷ್ಯರಲ್ಲಿ, ಶ್ರೇಷ್ಠರಲ್ಲಿ, ಸತ್ಯದಲ್ಲಿ, ಆಕಾಶದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಜಲ, ಕಿರಣ, ಸತ್ಯ, ಪರ್ವತಗಳಿಂದ ಹುಟ್ಟಿದವನು — ಅವನೇ ಮಹಾ ಸತ್ಯ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'इमं मे वरुण श्रुधी हवमद्या च मृडय ।\nत्वामवस्युरा चके ॥',
          meaning: {
            en: 'O Varuṇa, hear this call of mine and be gracious to me today; seeking your protection, I call upon you.',
            kn: 'ಓ ವರುಣದೇವ, ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳು, ಇಂದು ನನ್ನ ಮೇಲೆ ಕರುಣೆ ತೋರು. ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬಯಸಿ ನಿನ್ನನ್ನು ಪ್ರಾರ್ಥಿಸುತ್ತೇನೆ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेडमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
          meaning: {
            en: 'Praising you with this hymn, I ask of you what the worshipper seeks with his offerings. Without anger, O Varuṇa, be attentive to us here; O widely praised one, do not take away our life.',
            kn: 'ಸ್ತೋತ್ರದಿಂದ ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತಾ, ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳ ಮೂಲಕ ಬಯಸುವುದನ್ನೇ ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ. ಓ ವರುಣ, ಕೋಪಗೊಳ್ಳದೆ ಇಲ್ಲಿ ನಮ್ಮ ಪ್ರಾರ್ಥನೆಯನ್ನು ಗಮನಿಸು; ಎಲ್ಲರಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವವನೇ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಬೇಡ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'यच्चिद्धि ते विशो यथा प्र देव वरुण व्रतम् ।\nमिनीमसि द्यविद्यवि ॥',
          meaning: {
            en: 'O god Varuṇa, whatever law of yours we, like ordinary folk, break day after day, (forgive us).',
            kn: 'ಓ ವರುಣದೇವ, ಸಾಮಾನ್ಯ ಜನರಂತೆ ನಾವು ದಿನದಿನವೂ ನಿನ್ನ ವ್ರತವನ್ನು ಯಾವುದಾದರೂ ರೀತಿಯಲ್ಲಿ ಮೀರುತ್ತೇವೆ; (ಅದನ್ನು ಕ್ಷಮಿಸು).',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'यत्किञ्चेदं वरुण दैव्ये जनेऽभिद्रोहं मनुष्याश्चरामसि ।\nअचित्ती यत्तव धर्मा युयोपिम मा नस्तस्मादेनसो देव रीरिषः ॥',
          meaning: {
            en: 'Whatever wrong we humans do against the divine host, O Varuṇa, whatever of your laws we have broken through ignorance, do not harm us, O god, for that sin.',
            kn: 'ಓ ವರುಣ, ಮನುಷ್ಯರಾದ ನಾವು ದೇವತೆಗಳ ವಿಷಯದಲ್ಲಿ ಮಾಡುವ ಯಾವುದೇ ದ್ರೋಹಕ್ಕಾಗಿ, ಅಜ್ಞಾನದಿಂದ ನಿನ್ನ ಧರ್ಮಗಳನ್ನು ಮೀರಿದ್ದಕ್ಕಾಗಿ, ಆ ಪಾಪದಿಂದ ನಮ್ಮನ್ನು ಹಿಂಸಿಸಬೇಡ, ದೇವಾ.',
          },
        },
        {
          when: { time: ['evening'] },
          text: 'कितवासो यद्रिरिपुर्न दीवि यद्वा घा सत्यमुत यन्न विद्म ।\nसर्वा ता विष्य शिथिरेव देवाथा ते स्याम वरुण प्रियासः ॥',
          meaning: {
            en: 'Whatever sins have been laid on us falsely, as by cheats at dice, or committed by us knowingly or unknowingly: loosen them all like slack bonds, O god, and may we then be dear to you, O Varuṇa.',
            kn: 'ಜೂಜುಕೋರರಂತೆ ಮೋಸದಿಂದ ನಮ್ಮ ಮೇಲೆ ಹೊರಿಸಿದ ದೋಷಗಳು, ತಿಳಿದೋ ತಿಳಿಯದೆಯೋ ನಾವು ಮಾಡಿದ ಪಾಪಗಳು — ಇವೆಲ್ಲವನ್ನೂ ಸಡಿಲವಾದ ಬಂಧನಗಳಂತೆ ಬಿಡಿಸು, ದೇವಾ; ಅನಂತರ ನಾವು ನಿನಗೆ ಪ್ರಿಯರಾಗೋಣ, ಓ ವರುಣ.',
          },
        },
        {
          when: { tradition: M, time: ['morning'] },
          text: 'नमो ब्रह्मणे नमो अस्त्वग्नये नमः पृथिव्यै नम ओषधीभ्यः ।\nनमो वाचे नमो वाचस्पतये नमो विष्णवे महते करोमि ॥',
          meaning: {
            en: 'Salutation to Brahman, salutation to Agni, to the Earth and to the plants; salutation to Speech and to the lord of Speech; I offer salutation to the great Viṣṇu.',
            kn: 'ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ, ಅಗ್ನಿಗೆ ನಮಸ್ಕಾರ, ಭೂಮಿಗೂ ಸಸ್ಯಗಳಿಗೂ ನಮಸ್ಕಾರ; ವಾಕ್ಕಿಗೂ ವಾಚಸ್ಪತಿಗೂ ನಮಸ್ಕಾರ; ಮಹಾನ್ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 21 ────────────────────────────────────────────────────────────
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Digdevatā namaskāra (salutation to the directions)',
      note:
        'Mādhva: after turning round three times, salute each direction with the Taittirīya formula (Taittirīya Āraṇyaka 2.20), turning to it — in the morning and at midday from the east (east, south, west, north, up, down, the space between); in the evening start from the west (west, north, east, south, up, down, between). The Uttarādi manual explains that one salutes the presiding deities of each direction with their consorts (Indra with Śacī in the east, Agni with Svāhā in the south-east, Yama, Nirṛti, Varuṇa, Vāyu, Candra and Kubera, Rudra, Garuḍa, Śeṣa and others) and the form of the Lord each of them worships. Then salute the sages who dwell between the Gaṅgā and the Yamunā. Smārta (Kanchi manual): turning to each direction, say the short salutations below (in the evening start from the west), and facing west recite ऋतं सत्यम्… remembering the oneness of Hari and Hara.',
      noteKn:
        'ಮಾಧ್ವರು: ಮೂರು ಬಾರಿ ತಿರುಗಿದ ನಂತರ, ಆಯಾ ದಿಕ್ಕಿಗೆ ತಿರುಗಿ ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕದ ಮಂತ್ರದಿಂದ ನಮಸ್ಕರಿಸಬೇಕು — ಬೆಳಿಗ್ಗೆ ಹಾಗೂ ಮಧ್ಯಾಹ್ನ ಪೂರ್ವದಿಂದ (ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ಮೇಲೆ, ಕೆಳಗೆ, ಅಂತರಿಕ್ಷ); ಸಂಜೆ ಪಶ್ಚಿಮದಿಂದ (ಪಶ್ಚಿಮ, ಉತ್ತರ, ಪೂರ್ವ, ದಕ್ಷಿಣ, ಮೇಲೆ, ಕೆಳಗೆ, ಅಂತರಿಕ್ಷ). ಉತ್ತರಾದಿಮಠದ ಪುಸ್ತಕದಂತೆ, ಆಯಾ ದಿಕ್ಕಿನ ಅಭಿಮಾನಿ ದೇವತೆಗಳಿಗೆ ಅವರ ಪತ್ನಿಯರೊಡನೆ (ಪೂರ್ವದಲ್ಲಿ ಶಚೀಸಹಿತ ಇಂದ್ರ, ಆಗ್ನೇಯದಲ್ಲಿ ಸ್ವಾಹಾಸಹಿತ ಅಗ್ನಿ, ಯಮ, ನಿರ್ಋತಿ, ವರುಣ, ವಾಯು, ಚಂದ್ರ-ಕುಬೇರ, ರುದ್ರ, ಗರುಡ, ಶೇಷ ಮೊದಲಾದವರು) ಮತ್ತು ಅವರು ಉಪಾಸಿಸುವ ಭಗವದ್ರೂಪಗಳಿಗೆ ನಮಸ್ಕಾರ. ನಂತರ ಗಂಗಾ-ಯಮುನೆಯರ ಮಧ್ಯೆ ವಾಸಿಸುವ ಮುನಿಗಳಿಗೆ ನಮಸ್ಕಾರ. ಸ್ಮಾರ್ತರು (ಕಂಚಿ ಪುಸ್ತಕ): ಆಯಾ ದಿಕ್ಕಿಗೆ ತಿರುಗಿ ಕೆಳಗಿನ ಚಿಕ್ಕ ನಮಸ್ಕಾರಗಳನ್ನು ಹೇಳಬೇಕು (ಸಂಜೆ ಪಶ್ಚಿಮದಿಂದ ಆರಂಭ); ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ "ಋತಂ ಸತ್ಯಂ…" ಎಂದು ಹರಿಹರರ ಅಭೇದವನ್ನು ಸ್ಮರಿಸಬೇಕು.',
      verses: [
        {
          when: { tradition: M },
          text:
            'ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।\nनमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ॥',
          meaning: {
            en: 'Salutation to the eastern direction and to the deities who dwell in it; likewise to the south, the west, the north, the direction above, the direction below and the intermediate space, and to the deities who dwell in each.',
            kn: 'ಪೂರ್ವ ದಿಕ್ಕಿಗೂ ಅಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ; ಹಾಗೆಯೇ ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ಮೇಲಿನ, ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ ಮಧ್ಯದ ಅವಕಾಶಕ್ಕೂ ಅಲ್ಲಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: M },
          text:
            'नमो गङ्गायमुनयोर्मध्ये ये वसन्ति ते मे प्रसन्नात्मानश्चिरं जीवितं वर्धयन्ति ।\nनमो गङ्गायमुनयोर्मुनिभ्यश्च नमो नमो गङ्गायमुनयोर्मुनिभ्यश्च नमः ॥',
          meaning: {
            en: 'Salutation to those who dwell between the Gaṅgā and the Yamunā; may they, gracious in heart, lengthen my life. Salutation again and again to the sages of the Gaṅgā and the Yamunā.',
            kn: 'ಗಂಗಾ-ಯಮುನೆಯರ ಮಧ್ಯೆ ವಾಸಿಸುವವರಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರಸನ್ನಮನಸ್ಕರಾದ ಅವರು ನನ್ನ ಆಯುಸ್ಸನ್ನು ವೃದ್ಧಿಸಲಿ. ಗಂಗಾ-ಯಮುನೆಯರ ಮುನಿಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: S },
          text:
            'प्राच्यै दिशे नमः । दक्षिणायै दिशे नमः ।\nप्रतीच्यै दिशे नमः । उदीच्यै दिशे नमः ।\nऊर्ध्वाय नमः । अधराय नमः ।\nअन्तरिक्षाय नमः । भूम्यै नमः ।\nब्रह्मणे नमः । विष्णवे नमः । यमाय नमः ॥',
          meaning: {
            en: 'Salutations to the east, south, west and north; to the region above and below; to the sky and the earth; to Brahmā and to Viṣṇu; and, facing south, to Yama.',
            kn: 'ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ ದಿಕ್ಕುಗಳಿಗೆ; ಮೇಲಿನ ಮತ್ತು ಕೆಳಗಿನ ಭಾಗಗಳಿಗೆ; ಅಂತರಿಕ್ಷಕ್ಕೂ ಭೂಮಿಗೂ; ಬ್ರಹ್ಮನಿಗೂ ವಿಷ್ಣುವಿಗೂ ನಮಸ್ಕಾರ; ದಕ್ಷಿಣಕ್ಕೆ ತಿರುಗಿ ಯಮನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: S },
          text: 'ऋतं सत्यं परं ब्रह्म पुरुषं कृष्णपिङ्गलम् ।\nऊर्ध्वरेतं विरूपाक्षं विश्वरूपाय वै नमो नमः ॥',
          meaning: {
            en: 'To him who is Order and Truth, the Supreme Brahman, the Person dark and tawny, of upward-flowing vigour, of uncommon eyes, whose form is the universe: salutations again and again.',
            kn: 'ಋತವೂ ಸತ್ಯವೂ ಪರಬ್ರಹ್ಮವೂ ಆದ, ಕಪ್ಪು-ಕಂದು ವರ್ಣದ ಪುರುಷನಾದ, ಊರ್ಧ್ವರೇತಸ್ಕನಾದ, ವಿಶಿಷ್ಟ ನೇತ್ರಗಳುಳ್ಳ, ವಿಶ್ವರೂಪನಾದ ಪರಮಾತ್ಮನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    // 22 ────────────────────────────────────────────────────────────
    {
      title: 'सन्ध्यादिदेवतानमस्कारः',
      titleEn: 'Salutations to Sandhyā and the deities',
      note:
        'With folded hands salute Sandhyā and the other deities. Smārta (Kanchi manual): Sandhyā towards the east, Sāvitrī south, Gāyatrī west, Sarasvatī north, then all deities, and then say कामोऽकार्षीत्…. Mādhva: recite the fuller list below, the Sandhyā prayer, the verses to the Lord and to Durgā, and finish with आकाशात्पतितं तोयम्…, then offer full prostration (sāṣṭāṅga namaskāra).',
      noteKn:
        'ಕೈಮುಗಿದು ಸಂಧ್ಯಾದೇವಿಗೂ ಇತರ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕರಿಸಬೇಕು. ಸ್ಮಾರ್ತರು (ಕಂಚಿ ಪುಸ್ತಕ): ಸಂಧ್ಯೆಗೆ ಪೂರ್ವಕ್ಕೆ, ಸಾವಿತ್ರಿಗೆ ದಕ್ಷಿಣಕ್ಕೆ, ಗಾಯತ್ರಿಗೆ ಪಶ್ಚಿಮಕ್ಕೆ, ಸರಸ್ವತಿಗೆ ಉತ್ತರಕ್ಕೆ, ನಂತರ ಎಲ್ಲಾ ದೇವತೆಗಳಿಗೆ, ಆಮೇಲೆ "ಕಾಮೋಽಕಾರ್ಷೀತ್…". ಮಾಧ್ವರು: ಕೆಳಗಿನ ವಿಸ್ತೃತ ಪಟ್ಟಿ, ಸಂಧ್ಯಾಪ್ರಾರ್ಥನೆ, ಭಗವಂತನ ಹಾಗೂ ದುರ್ಗೆಯ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ "ಆಕಾಶಾತ್ಪತಿತಂ ತೋಯಂ…" ಇಂದ ಮುಗಿಸಿ ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕಾರ ಮಾಡಬೇಕು.',
      verses: [
        {
          text: 'सन्ध्यायै नमः । सावित्र्यै नमः ।\nगायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमो नमः ॥',
          meaning: {
            en: 'Salutations to Sandhyā, Sāvitrī, Gāyatrī and Sarasvatī, and again and again to all the deities.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ಗಾಯತ್ರೀ, ಸರಸ್ವತೀ ದೇವಿಯರಿಗೂ ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: M },
          text: 'देवीभ्यो नमः । ऋषिभ्यो नमः । गुरुभ्यो नमः ।\nमातृभ्यो नमः । पितृभ्यो नमः । आचार्येभ्यो नमः ॥',
          meaning: {
            en: 'Salutations to the goddesses, the sages, the gurus, the mothers, the fathers and the ācāryas.',
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
          when: { tradition: M },
          text: 'पृथिव्यापस्तेजोवायुराकाशेभ्यो नमो नमः ।\nॐ नमो भगवते वासुदेवाय ॥',
          meaning: {
            en: 'Salutations again and again to earth, water, fire, air and space. Om, salutation to Lord Vāsudeva.',
            kn: 'ಪೃಥ್ವಿ, ಜಲ, ತೇಜಸ್ಸು, ವಾಯು, ಆಕಾಶಗಳಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. ಓಂ, ಭಗವಾನ್ ವಾಸುದೇವನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: M },
          text: 'यां सदा सर्वभूतानि स्थावराणि चराणि च ।\nसायं प्रातर्नमस्यन्ति सा मा सन्ध्याभिरक्षतु ॥',
          meaning: {
            en: 'May Sandhyā, to whom all beings, moving and unmoving, bow at dusk and at dawn, protect me.',
            kn: 'ಚರಾಚರಗಳಾದ ಎಲ್ಲಾ ಜೀವಿಗಳೂ ಸಾಯಂಕಾಲ-ಪ್ರಾತಃಕಾಲಗಳಲ್ಲಿ ಸದಾ ನಮಸ್ಕರಿಸುವ ಆ ಸಂಧ್ಯಾದೇವಿ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        {
          when: { tradition: M },
          text: 'ब्रह्मण्यो देवकीपुत्रो ब्रह्मण्यो मधुसूदनः ।\nब्रह्मण्यः पुण्डरीकाक्षो ब्रह्मण्यो विष्णुरच्युतः ॥',
          meaning: {
            en: 'The son of Devakī is devoted to the Veda and its followers; so is Madhusūdana, so is the lotus-eyed one, so is Viṣṇu, the unfailing.',
            kn: 'ದೇವಕೀಪುತ್ರನು ಬ್ರಹ್ಮಣ್ಯ (ವೇದಕ್ಕೂ ವೇದನಿಷ್ಠರಿಗೂ ಹಿತಕಾರಿ); ಮಧುಸೂದನನೂ, ಪುಂಡರೀಕಾಕ್ಷನೂ, ಅಚ್ಯುತನಾದ ವಿಷ್ಣುವೂ ಬ್ರಹ್ಮಣ್ಯರೇ.',
          },
        },
        {
          text: 'नमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च ।\nजगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥',
          meaning: {
            en: 'Salutations to the Lord devoted to the Veda, who cares for cows and brāhmaṇas and for the good of the whole world; to Kṛṣṇa, to Govinda, salutations again and again.',
            kn: 'ವೇದಪ್ರಿಯನಾದ ದೇವನಿಗೆ, ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಹಿತಕಾರಿಯಾದವನಿಗೆ, ಜಗತ್ತಿಗೆಲ್ಲ ಹಿತಕಾರಿಯಾದ ಶ್ರೀಕೃಷ್ಣನಿಗೆ, ಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          when: { tradition: S },
          text: 'शङ्खचक्रगदापाणे द्वारकानिलयाच्युत ।\nगोविन्द पुण्डरीकाक्ष रक्ष मां शरणागतम् ॥',
          meaning: {
            en: 'O Acyuta, dweller in Dvārakā, holding conch, discus and mace; O Govinda, lotus-eyed one, protect me, who have come to you for refuge.',
            kn: 'ಶಂಖ-ಚಕ್ರ-ಗದೆಗಳನ್ನು ಹಿಡಿದಿರುವ, ದ್ವಾರಕೆಯಲ್ಲಿ ನೆಲೆಸಿರುವ ಅಚ್ಯುತನೇ, ಗೋವಿಂದ, ಪುಂಡರೀಕಾಕ್ಷ, ನಿನ್ನಲ್ಲಿ ಶರಣು ಬಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸು.',
          },
        },
        {
          when: { tradition: M },
          text: 'क्षीरेण स्नापिते देवि चन्दनेन विलेपिते ।\nबिल्वपत्रार्चिते देवि दुर्गेऽहं शरणं गतः ॥',
          meaning: {
            en: 'O Goddess bathed in milk and anointed with sandal paste, worshipped with bilva leaves: O Durgā, I have come to you for refuge.',
            kn: 'ಹಾಲಿನಿಂದ ಅಭಿಷೇಕಗೊಂಡ, ಚಂದನದಿಂದ ಲೇಪಿತಳಾದ, ಬಿಲ್ವಪತ್ರಗಳಿಂದ ಪೂಜಿತಳಾದ ದುರ್ಗಾದೇವಿಯೇ, ನಿನ್ನಲ್ಲಿ ಶರಣು ಬಂದಿದ್ದೇನೆ.',
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
          text: 'सर्ववेदेषु यत्पुण्यं सर्वतीर्थेषु यत्फलम् ।\nतत्फलं समवाप्नोति स्तुत्वा देवं जनार्दनम् ॥',
          meaning: {
            en: 'Whatever merit lies in all the Vedas and whatever fruit in all the holy places, that fruit one gains by praising the Lord Janārdana.',
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
    // 23 ────────────────────────────────────────────────────────────
    {
      title: 'गायत्र्युद्वासनम्',
      titleEn: 'Gāyatrī udvāsana (farewell) — Mādhva',
      when: { tradition: M },
      note:
        'Mādhva order (Uttarādi Maṭha manual): after the salutations, with folded hands, bid farewell to the Gāyatrī, i.e. let the Lord meditated on in the heart remain there as you close the japa.',
      noteKn:
        'ಮಾಧ್ವ ಕ್ರಮ (ಉತ್ತರಾದಿಮಠ): ನಮಸ್ಕಾರಗಳ ನಂತರ ಕೈಮುಗಿದು ಗಾಯತ್ರಿಯನ್ನು ವಿಸರ್ಜಿಸಬೇಕು — ಹೃದಯದಲ್ಲಿ ಧ್ಯಾನಿಸಿದ ಭಗವಂತನು ಅಲ್ಲೇ ನೆಲೆಸಲೆಂದು ಭಾವಿಸುತ್ತಾ ಜಪವನ್ನು ಮುಗಿಸಬೇಕು.',
      verses: [
        {
          text: 'उत्तम इत्यस्य वामदेव ऋषिः । गायत्री देवता । अनुष्टुप् छन्दः ।\nगायत्र्युद्वासने विनियोगः ॥',
          meaning: {
            en: 'Of the mantra “uttame” the seer is Vāmadeva, the deity Gāyatrī, the metre anuṣṭubh; it is applied in bidding farewell to the Gāyatrī.',
            kn: '"ಉತ್ತಮೇ" ಮಂತ್ರಕ್ಕೆ ವಾಮದೇವ ಋಷಿ, ಗಾಯತ್ರೀ ದೇವತೆ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು; ಗಾಯತ್ರೀ ಉದ್ವಾಸನದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'उत्तमे शिखरे जाते भूम्यां पर्वतमूर्धनि ।\nब्राह्मणेभ्योऽभ्यनुज्ञाता गच्छ देवि यथासुखम् ॥',
          meaning: {
            en: 'O Goddess, born on the highest peak, on the mountain summit upon the earth: with the leave of the brāhmaṇas, go as you please.',
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
    // 24 ────────────────────────────────────────────────────────────
    {
      title: 'अभिवादनम्',
      titleEn: 'Abhivādana (formal salutation)',
      note:
        'Touch both ears with the palms (Smārta Kanchi manual) and recite your pravara, gotra, sūtra, śākhā and name; then bow, touching the ground (Mādhva manual) or the toes and the ground with both hands. Replace अमुक with your own details: the three (or five) ṛṣis of your pravara, your gotra and your name; Kṣatriyas say वर्मा and Vaiśyas गुप्तः in place of शर्मा. Taittirīyas normally say आपस्तम्बसूत्रः and यजुश्शाखाध्यायी; change these if your sūtra differs (e.g. Bodhāyana).',
      noteKn:
        'ಎರಡೂ ಅಂಗೈಗಳಿಂದ ಕಿವಿಗಳನ್ನು ಮುಟ್ಟಿ (ಕಂಚಿ ಸ್ಮಾರ್ತ ಪುಸ್ತಕ), ನಿಮ್ಮ ಪ್ರವರ, ಗೋತ್ರ, ಸೂತ್ರ, ಶಾಖೆ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ, ಭೂಮಿಯನ್ನು ಮುಟ್ಟಿ (ಮಾಧ್ವ ಪುಸ್ತಕ) ಅಥವಾ ಎರಡೂ ಕೈಗಳಿಂದ ಕಾಲ್ಬೆರಳುಗಳನ್ನೂ ನೆಲವನ್ನೂ ಮುಟ್ಟಿ ನಮಸ್ಕರಿಸಬೇಕು. "ಅಮುಕ" ಎಂಬಲ್ಲಿ ನಿಮ್ಮ ಪ್ರವರದ ಮೂರು (ಅಥವಾ ಐದು) ಋಷಿಗಳು, ಗೋತ್ರ, ಹೆಸರು ಹೇಳಬೇಕು; ಕ್ಷತ್ರಿಯರು "ಶರ್ಮಾ" ಬದಲು "ವರ್ಮಾ", ವೈಶ್ಯರು "ಗುಪ್ತಃ" ಎನ್ನುತ್ತಾರೆ. ತೈತ್ತಿರೀಯರು ಸಾಮಾನ್ಯವಾಗಿ "ಆಪಸ್ತಂಬಸೂತ್ರಃ", "ಯಜುಶ್ಶಾಖಾಧ್ಯಾಯೀ" ಎನ್ನುತ್ತಾರೆ; ನಿಮ್ಮ ಸೂತ್ರ ಬೇರೆಯಾದರೆ (ಉದಾ: ಬೋಧಾಯನ) ಅದನ್ನು ಹೇಳಿ.',
      verses: [
        {
          text:
            'चतुस्सागरपर्यन्तं गोब्राह्मणेभ्यः शुभं भवतु ।\nअमुक अमुक अमुक त्रयार्षेयप्रवरान्वित अमुकगोत्रः\nआपस्तम्बसूत्रः यजुश्शाखाध्यायी\nअमुकशर्मा अहं भो अभिवादये ॥',
          meaning: {
            en: 'May there be welfare to cows and brāhmaṇas as far as the four oceans. I, so-and-so Śarmā, of such-and-such gotra, with a pravara of three such ṛṣis, of the Āpastamba sūtra, a student of the Yajurveda śākhā, offer my respectful salutation.',
            kn: 'ನಾಲ್ಕು ಸಮುದ್ರಗಳವರೆಗಿನ ಭೂಮಿಯಲ್ಲಿ ಗೋವುಗಳಿಗೂ ಬ್ರಾಹ್ಮಣರಿಗೂ ಶುಭವಾಗಲಿ. ಇಂತಹ ಮೂರು ಋಷಿಗಳ ಪ್ರವರದಿಂದ ಕೂಡಿದ, ಇಂತಹ ಗೋತ್ರದ, ಆಪಸ್ತಂಬ ಸೂತ್ರದ, ಯಜುಶ್ಶಾಖೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಇಂತಹ ಹೆಸರಿನ ಶರ್ಮನಾದ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    // 25 ────────────────────────────────────────────────────────────
    {
      title: 'समर्पणम्',
      titleEn: 'Samarpaṇa (offering the whole rite)',
      note:
        'Offer the whole sandhyāvandana to the Lord. Mādhva: recite यस्य स्मृत्या…, then the offering for the time of day, do ācamana twice, and recite कायेन वाचा… (Mādhva manuals read the second line बुद्ध्यात्मना वानुसृतस्वभावात्). Smārta: the Karnataka Smārta manual uses the offering to Parameśvara below; then recite कायेन वाचा… and do ācamana.',
      noteKn:
        'ಸಂಪೂರ್ಣ ಸಂಧ್ಯಾವಂದನೆಯನ್ನು ಭಗವಂತನಿಗೆ ಅರ್ಪಿಸಬೇಕು. ಮಾಧ್ವರು: "ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ…" ಹೇಳಿ, ಆಯಾ ಕಾಲದ ಸಮರ್ಪಣವಾಕ್ಯ ಹೇಳಿ, ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ, "ಕಾಯೇನ ವಾಚಾ…" ಹೇಳಬೇಕು (ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ ಎರಡನೆಯ ಸಾಲು "ಬುದ್ಧ್ಯಾತ್ಮನಾ ವಾನುಸೃತಸ್ವಭಾವಾತ್"). ಸ್ಮಾರ್ತರು: ಕರ್ನಾಟಕದ ಸ್ಮಾರ್ತ ಪುಸ್ತಕದಂತೆ ಕೆಳಗಿನ ಪರಮೇಶ್ವರಾರ್ಪಣ ವಾಕ್ಯ; ನಂತರ "ಕಾಯೇನ ವಾಚಾ…" ಹೇಳಿ ಆಚಮನ ಮಾಡಬೇಕು.',
      verses: [
        {
          when: { tradition: M },
          text:
            'यस्य स्मृत्या च नामोक्त्या तपःसन्ध्याक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'I bow to Acyuta, by remembering whom and uttering whose name whatever is lacking in austerity, sandhyā and other rites at once becomes complete. O Lord of Ramā, whatever I have done, lacking in mantra, in action or in devotion, let it be complete, O God.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸುವುದರಿಂದ, ಯಾರ ನಾಮವನ್ನು ಹೇಳುವುದರಿಂದ ತಪಸ್ಸು, ಸಂಧ್ಯೆ ಮೊದಲಾದ ಕರ್ಮಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ತುಂಬಿ ಪೂರ್ಣವಾಗುತ್ತದೋ ಆ ಅಚ್ಯುತನಿಗೆ ವಂದಿಸುತ್ತೇನೆ. ರಮಾಪತಿಯೇ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿದ್ದರೂ ನಾನು ಮಾಡಿದ ಕರ್ಮ ಪರಿಪೂರ್ಣವಾಗಲಿ, ದೇವಾ.',
          },
        },
        {
          when: { tradition: M, time: ['morning'] },
          text:
            'अनेन प्रातःसन्ध्यावन्दनेन भगवान् श्रीमन्मध्वाचार्याणां हृत्कमलमध्यनिवासी\nअनन्तकल्याणगुणगणपरिपूर्णः सच्चिदानन्दात्मकः सर्वकर्मकर्ता सर्वकर्मकारयिता\nश्रीक्षीराब्धिशायी भारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकः श्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु ॥',
          meaning: {
            en: 'By this morning sandhyāvandana may the Lord Śrī Lakṣmīnārāyaṇa be pleased and, well pleased, grant boons: he who dwells in the lotus of Śrī Madhvācārya’s heart, full of endless auspicious qualities, whose nature is being, consciousness and bliss, the doer of all acts and the one who makes all act, who reclines on the ocean of milk, who dwells in Mukhyaprāṇa the beloved of Bhāratī, and who is called Savitṛ.',
            kn: 'ಈ ಪ್ರಾತಃಸಂಧ್ಯಾವಂದನೆಯಿಂದ — ಶ್ರೀಮನ್ಮಧ್ವಾಚಾರ್ಯರ ಹೃದಯಕಮಲದಲ್ಲಿ ವಾಸಿಸುವ, ಅನಂತ ಕಲ್ಯಾಣಗುಣಪೂರ್ಣನಾದ, ಸಚ್ಚಿದಾನಂದಸ್ವರೂಪನಾದ, ಎಲ್ಲಾ ಕರ್ಮಗಳನ್ನು ಮಾಡುವ ಹಾಗೂ ಮಾಡಿಸುವ, ಕ್ಷೀರಸಾಗರಶಾಯಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ, ಸುಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          when: { tradition: M, time: ['midday'] },
          text:
            'अनेन माध्याह्नसन्ध्यावन्दनेन भगवान् श्रीमन्मध्वाचार्याणां हृत्कमलमध्यनिवासी\nअनन्तकल्याणगुणगणपरिपूर्णः सच्चिदानन्दात्मकः सर्वकर्मकर्ता सर्वकर्मकारयिता\nश्रीक्षीराब्धिशायी भारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकः श्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु ॥',
          meaning: {
            en: 'By this midday sandhyāvandana may the Lord Śrī Lakṣmīnārāyaṇa, called Savitṛ, who dwells in the heart of Śrī Madhvācārya and within Mukhyaprāṇa, full of endless auspicious qualities, the doer and inspirer of all acts, be pleased and grant boons.',
            kn: 'ಈ ಮಾಧ್ಯಾಹ್ನಿಕ ಸಂಧ್ಯಾವಂದನೆಯಿಂದ ಶ್ರೀಮನ್ಮಧ್ವಾಚಾರ್ಯರ ಹೃದಯಕಮಲವಾಸಿಯೂ ಅನಂತಕಲ್ಯಾಣಗುಣಪೂರ್ಣನೂ ಸರ್ವಕರ್ಮಕರ್ತನೂ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನೂ ಆದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          when: { tradition: M, time: ['evening'] },
          text:
            'अनेन सायंसन्ध्यावन्दनेन भगवान् श्रीमन्मध्वाचार्याणां हृत्कमलमध्यनिवासी\nअनन्तकल्याणगुणगणपरिपूर्णः सच्चिदानन्दात्मकः सर्वकर्मकर्ता सर्वकर्मकारयिता\nश्रीक्षीराब्धिशायी भारतीरमणमुख्यप्राणान्तर्गतः सवितृनामकः श्रीलक्ष्मीनारायणः\nप्रीयतां सुप्रीतो वरदो भवतु ॥',
          meaning: {
            en: 'By this evening sandhyāvandana may the Lord Śrī Lakṣmīnārāyaṇa, called Savitṛ, who dwells in the heart of Śrī Madhvācārya and within Mukhyaprāṇa, full of endless auspicious qualities, the doer and inspirer of all acts, be pleased and grant boons.',
            kn: 'ಈ ಸಾಯಂಸಂಧ್ಯಾವಂದನೆಯಿಂದ ಶ್ರೀಮನ್ಮಧ್ವಾಚಾರ್ಯರ ಹೃದಯಕಮಲವಾಸಿಯೂ ಅನಂತಕಲ್ಯಾಣಗುಣಪೂರ್ಣನೂ ಸರ್ವಕರ್ಮಕರ್ತನೂ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನೂ ಆದ ಸವಿತೃನಾಮಕ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಿ ವರವನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          when: { tradition: S, time: ['morning'] },
          text: 'अनेन प्रातःसन्ध्यावन्दनकर्मणा भगवान् सर्वात्मकः श्रीपरमेश्वरः प्रीयताम् ॥',
          meaning: {
            en: 'By this rite of morning sandhyāvandana may the Lord, Śrī Parameśvara, the Self of all, be pleased.',
            kn: 'ಈ ಪ್ರಾತಃಸಂಧ್ಯಾವಂದನ ಕರ್ಮದಿಂದ ಸರ್ವಾತ್ಮಕನಾದ ಭಗವಾನ್ ಶ್ರೀಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ.',
          },
        },
        {
          when: { tradition: S, time: ['midday'] },
          text: 'अनेन माध्याह्निककर्मणा भगवान् सर्वात्मकः श्रीपरमेश्वरः प्रीयताम् ॥',
          meaning: {
            en: 'By this rite of midday worship may the Lord, Śrī Parameśvara, the Self of all, be pleased.',
            kn: 'ಈ ಮಾಧ್ಯಾಹ್ನಿಕ ಕರ್ಮದಿಂದ ಸರ್ವಾತ್ಮಕನಾದ ಭಗವಾನ್ ಶ್ರೀಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ.',
          },
        },
        {
          when: { tradition: S, time: ['evening'] },
          text: 'अनेन सायंसन्ध्यावन्दनकर्मणा भगवान् सर्वात्मकः श्रीपरमेश्वरः प्रीयताम् ॥',
          meaning: {
            en: 'By this rite of evening sandhyāvandana may the Lord, Śrī Parameśvara, the Self of all, be pleased.',
            kn: 'ಈ ಸಾಯಂಸಂಧ್ಯಾವಂದನ ಕರ್ಮದಿಂದ ಸರ್ವಾತ್ಮಕನಾದ ಭಗವಾನ್ ಶ್ರೀಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ.',
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
    // 26 ────────────────────────────────────────────────────────────
    {
      title: 'जपस्थानप्रोक्षणम्',
      titleEn: 'Sprinkling the place of japa and conclusion',
      note:
        'Sprinkle water on the place where you did japa with अद्या नो देव सवितः…; touch that spot with the right ring finger and then touch your heart (Mādhva) or the middle of the brows (Smārta Kanchi manual). To make good any omissions in mantra or action, recite the three names Acyuta, Ananta, Govinda three times. Mādhva add यदक्षरपदभ्रष्टम्…. Finally say सर्वं श्रीकृष्णार्पणमस्तु and do ācamana.',
      noteKn:
        'ಜಪ ಮಾಡಿದ ಸ್ಥಳದ ಮೇಲೆ "ಅದ್ಯಾ ನೋ ದೇವ ಸವಿತಃ…" ಎಂದು ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಆ ಸ್ಥಳವನ್ನು ಮುಟ್ಟಿ ಹೃದಯವನ್ನು (ಮಾಧ್ವರು) ಅಥವಾ ಹುಬ್ಬುಗಳ ಮಧ್ಯವನ್ನು (ಕಂಚಿ ಸ್ಮಾರ್ತ ಪುಸ್ತಕ) ಮುಟ್ಟಬೇಕು. ಮಂತ್ರ-ಕ್ರಿಯೆಗಳಲ್ಲಿ ಆದ ಲೋಪಗಳ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ ಅಚ್ಯುತ, ಅನಂತ, ಗೋವಿಂದ ನಾಮತ್ರಯವನ್ನು ಮೂರು ಬಾರಿ ಹೇಳಬೇಕು. ಮಾಧ್ವರು "ಯದಕ್ಷರಪದಭ್ರಷ್ಟಂ…" ಸೇರಿಸುತ್ತಾರೆ. ಕೊನೆಯಲ್ಲಿ "ಸರ್ವಂ ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು" ಎಂದು ಆಚಮನ ಮಾಡಬೇಕು.',
      verses: [
        {
          text: 'अद्या नो देव सवितः प्रजावत्सावीः सौभगम् । परा दुष्ष्वप्नियं सुव ।\nविश्वानि देव सवितर्दुरितानि परा सुव । यद्भद्रं तन्म आ सुव ॥',
          meaning: {
            en: 'O god Savitṛ, today bring us good fortune with offspring, and drive away bad dreams. O god Savitṛ, drive away all evils, and bring to me whatever is good.',
            kn: 'ಓ ಸವಿತೃದೇವ, ಇಂದು ನಮಗೆ ಸಂತಾನಸಹಿತವಾದ ಸೌಭಾಗ್ಯವನ್ನು ಕೊಡು, ಕೆಟ್ಟ ಕನಸುಗಳನ್ನು ದೂರಮಾಡು. ಓ ಸವಿತೃದೇವ, ಎಲ್ಲಾ ಪಾಪ-ಕಷ್ಟಗಳನ್ನು ದೂರಮಾಡಿ, ಯಾವುದು ಮಂಗಳಕರವೋ ಅದನ್ನು ನನಗೆ ಕೊಡು.',
          },
        },
        {
          when: { tradition: M },
          text: 'यदक्षरपदभ्रष्टं मात्राहीनं च यद्भवेत् ।\nतत्सर्वं क्षम्यतां देव नारायण नमोऽस्तु ते ॥',
          meaning: {
            en: 'Whatever syllable or word has slipped, whatever has fallen short in length of sound: forgive it all, O God Nārāyaṇa; salutation to you.',
            kn: 'ಅಕ್ಷರ, ಪದಗಳು ತಪ್ಪಿದ್ದರೆ, ಮಾತ್ರೆಗಳು ಕಡಿಮೆಯಾಗಿದ್ದರೆ, ಅದೆಲ್ಲವನ್ನೂ ಕ್ಷಮಿಸು, ದೇವಾ ನಾರಾಯಣ; ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'अच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ॥',
          meaning: {
            en: 'Salutations to Acyuta, to Ananta and to Govinda (said three times, to make good any omission in the rite).',
            kn: 'ಅಚ್ಯುತನಿಗೆ, ಅನಂತನಿಗೆ, ಗೋವಿಂದನಿಗೆ ನಮಸ್ಕಾರ (ಕರ್ಮದಲ್ಲಿನ ಲೋಪಗಳ ಪರಿಹಾರಕ್ಕಾಗಿ ಮೂರು ಬಾರಿ ಹೇಳುವುದು).',
          },
        },
        {
          text: 'सर्वं श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'May all this be an offering to Śrī Kṛṣṇa.',
            kn: 'ಎಲ್ಲವೂ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
      ],
    },
  ],
};
