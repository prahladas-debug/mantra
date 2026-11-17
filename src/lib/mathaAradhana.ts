/**
 * Matha-specific observances: the ārādhanās (puṇyadinas) of the yatis of the Mādhva maṭhas.
 *
 * A Mādhva follows the pañcāṅga of his own maṭha. The festival rules are the same across the
 * maṭhas we could compare (Uttarādi, Rāghavendra / Mantrālaya and Vyāsarāja / Sosale give the
 * same dates for Kṛṣṇa Jayantī, Gaṇeśa Caturthī, Rāmanavamī, Akṣaya Tṛtīyā and Madhva Navamī
 * for 2025–27), so the visible difference is whose ārādhanā is listed: the pontiffs of one's
 * own maṭha and the Haridāsas of its tradition. Ārādhanās of everyone venerated alike
 * (Padmanābha Tīrtha, Jayatīrtha, Rāghavendra, Vyāsarāja, Purandara Dāsa …) stay in the
 * general list in festivals.ts; the entries below show only when that maṭha is chosen
 * (settings → Tradition → Maṭha). The default, 'all', shows the common ones only.
 *
 * Each entry is a tithi of the amānta lunar month, placed like the other ārādhanās (the day
 * the tithi prevails at sunrise; nija months only; a kṣaya tithi falls on the day it begins).
 * Only entries confirmed by two sources, or by the maṭha's own published pañcāṅga, are
 * listed. Sources (read in November 2026):
 *   UM  uttaradimath.org/parampara/<yati>, the Uttarādi Maṭha's Guru Parampara pages
 *   SRS srsmatha.org news: the Mantrālaya maṭha's reports of each ārādhanā, with its date
 *       (converted to tithi with this app's pañcāṅga, Sūrya Siddhānta, at Mantrālaya)
 *   VM  vyasarajamatha.org/panchanga.php, the Vyāsarāja Maṭha's official daily pañcāṅga
 *       (Viśvāvasu 2025–26 and Parābhava 2026–27, listing each ārādhanā by date)
 *   PAL sripalimarumatha.org, notices of the 18th and 19th ārādhanā of Vidyāmānya Tīrtha
 *   MS  madhwasakha.com/ritual/<id>, ārādhanā month, pakṣa and tithi of each yati
 * Where UM and MS (or SRS and MS, or VM and MS) give the same tithi it is used; where they
 * differed the entry was left out (e.g. Satyavara Tīrtha, Akṣobhya Tīrtha, Vidyāprasanna).
 */

export type MathaId = 'all' | 'uttaradi' | 'raghavendra' | 'vyasaraja' | 'udupi';

export const MATHA_IDS: MathaId[] = ['all', 'uttaradi', 'raghavendra', 'vyasaraja', 'udupi'];

/** Options of the Maṭha setting (labels are English UI strings: pass them through tr()). */
export const MATHA_OPTIONS: { id: MathaId; label: string; hint: string }[] = [
  { id: 'all', label: 'Any', hint: 'Common observances only' },
  { id: 'uttaradi', label: 'Uttaradi', hint: 'Śrī Uttarādi Maṭha' },
  { id: 'raghavendra', label: 'Raghavendra', hint: 'Śrī Rāghavendra Svāmi Maṭha, Mantrālaya' },
  { id: 'vyasaraja', label: 'Vyasaraja', hint: 'Śrī Vyāsarāja Maṭha, Sosale' },
  { id: 'udupi', label: 'Udupi Ashta Matha', hint: 'Aṣṭa Maṭhas of Udupi' },
];

export const isMathaId = (s: string | undefined): s is MathaId => !!s && (MATHA_IDS as string[]).includes(s);

/** The reader's matha from settings.variants (only a Mādhva has one; anything unknown is 'all'). */
export const mathaOf = (variants: Partial<Record<string, string>>): MathaId =>
  variants.tradition === 'smarta' ? 'all' : isMathaId(variants.matha) ? variants.matha : 'all';

export interface MathaAradhana {
  key: string;
  /** Devanagari name of the yati (without 'ārādhanā'). */
  name: string;
  /** IAST name (without 'Ārādhanā'). */
  en: string;
  /** Amānta month 0 Caitra … 11 Phālguna. */
  masa: number;
  /** Tithi 1–30 (16–30 kṛṣṇa). */
  tithi: number;
  /** Maṭhas that keep it. */
  mathas: MathaId[];
  /** Place of the vṛndāvana. */
  place: string;
}

const U: MathaId[] = ['uttaradi'];
const R: MathaId[] = ['raghavendra'];
const V: MathaId[] = ['vyasaraja'];

// masa, tithi: S = śukla 1–15, K = kṛṣṇa 16–30 (kṛṣṇa n = 15 + n; amāvāsyā 30).
export const MATHA_ARADHANAS: MathaAradhana[] = [
  // ---- Uttarādi Maṭha (UM + MS) ----
  { key: 'kavindra-tirtha-aradhana', name: 'श्रीकवीन्द्रतीर्थ', en: 'Śrī Kavīndra Tīrtha', masa: 0, tithi: 9, mathas: ['uttaradi', 'raghavendra'], place: 'Nava Bṛndāvana, Ānegondi' },
  { key: 'satyapriya-tirtha-aradhana', name: 'श्रीसत्यप्रियतीर्थ', en: 'Śrī Satyapriya Tīrtha', masa: 0, tithi: 13, mathas: U, place: 'Manamadurai' },
  { key: 'satyavijaya-tirtha-aradhana', name: 'श्रीसत्यविजयतीर्थ', en: 'Śrī Satyavijaya Tīrtha', masa: 0, tithi: 26, mathas: U, place: 'Satyavijayanagara, Arani' },
  { key: 'vageesha-tirtha-aradhana', name: 'श्रीवागीशतीर्थ', en: 'Śrī Vāgīśa Tīrtha', masa: 0, tithi: 18, mathas: ['uttaradi', 'raghavendra'], place: 'Nava Bṛndāvana, Ānegondi' },
  { key: 'raghuvarya-tirtha-aradhana', name: 'श्रीरघुवर्यतीर्थ', en: 'Śrī Raghuvarya Tīrtha', masa: 2, tithi: 18, mathas: U, place: 'Nava Bṛndāvana, Ānegondi' },
  { key: 'satyapurna-tirtha-aradhana', name: 'श्रीसत्यपूर्णतीर्थ', en: 'Śrī Satyapūrṇa Tīrtha', masa: 2, tithi: 17, mathas: U, place: 'Kolpur (Maktal)' },
  { key: 'satyadheera-tirtha-aradhana', name: 'श्रीसत्यधीरतीर्थ', en: 'Śrī Satyadhīra Tīrtha', masa: 2, tithi: 24, mathas: U, place: 'Atkur' },
  { key: 'satyasankalpa-tirtha-aradhana', name: 'श्रीसत्यसङ्कल्पतीर्थ', en: 'Śrī Satyasaṅkalpa Tīrtha', masa: 3, tithi: 15, mathas: U, place: 'Mysuru' },
  { key: 'satyeshta-tirtha-aradhana', name: 'श्रीसत्येष्टतीर्थ', en: 'Śrī Satyeṣṭa Tīrtha', masa: 5, tithi: 11, mathas: U, place: 'Atkur' },
  { key: 'madhava-tirtha-aradhana', name: 'श्रीमाधवतीर्थ', en: 'Śrī Mādhava Tīrtha', masa: 5, tithi: 30, mathas: ['uttaradi', 'vyasaraja'], place: 'Mannur (Mahālaya amāvāsyā)' },
  { key: 'satyaparayana-tirtha-aradhana', name: 'श्रीसत्यपरायणतीर्थ', en: 'Śrī Satyaparāyaṇa Tīrtha', masa: 6, tithi: 7, mathas: U, place: 'Hosur' },
  { key: 'satyaparakrama-tirtha-aradhana', name: 'श्रीसत्यपराक्रमतीर्थ', en: 'Śrī Satyaparākrama Tīrtha', masa: 6, tithi: 8, mathas: U, place: 'Chittapur' },
  { key: 'satyapramoda-tirtha-aradhana', name: 'श्रीसत्यप्रमोदतीर्थ', en: 'Śrī Satyapramoda Tīrtha (mahāsamārādhanā)', masa: 7, tithi: 3, mathas: U, place: 'Bengaluru' },
  { key: 'satyaveera-tirtha-aradhana', name: 'श्रीसत्यवीरतीर्थ', en: 'Śrī Satyavīra Tīrtha', masa: 7, tithi: 10, mathas: U, place: 'Korlahalli' },
  { key: 'vedanidhi-tirtha-aradhana', name: 'श्रीवेदनिधितीर्थ', en: 'Śrī Vedanidhi Tīrtha', masa: 7, tithi: 11, mathas: U, place: 'Pandharpur' },
  { key: 'vidyanidhi-uttaradi-aradhana', name: 'श्रीविद्यानिधितीर्थ', en: 'Śrī Vidyānidhi Tīrtha (Uttarādi)', masa: 7, tithi: 19, mathas: U, place: 'Yaragola' },
  { key: 'satyanidhi-tirtha-aradhana', name: 'श्रीसत्यनिधितीर्थ', en: 'Śrī Satyanidhi Tīrtha', masa: 8, tithi: 10, mathas: U, place: 'Nivṛtti Saṅgama' },
  { key: 'satyanatha-tirtha-aradhana', name: 'श्रीसत्यनाथतीर्थ', en: 'Śrī Satyanātha Tīrtha', masa: 8, tithi: 11, mathas: U, place: 'Veeracholapuram' },
  { key: 'raghuttama-tirtha-aradhana', name: 'श्रीरघूत्तमतीर्थ', en: 'Śrī Raghūttama Tīrtha', masa: 9, tithi: 11, mathas: U, place: 'Tirukoilur (Vaikuṇṭha ekādaśī)' },
  { key: 'satyakama-tirtha-aradhana', name: 'श्रीसत्यकामतीर्थ', en: 'Śrī Satyakāma Tīrtha', masa: 9, tithi: 21, mathas: U, place: 'Atkur' },
  { key: 'satyabhijna-tirtha-aradhana', name: 'श्रीसत्याभिज्ञतीर्थ', en: 'Śrī Satyābhijña Tīrtha', masa: 9, tithi: 23, mathas: U, place: 'Ranebennur' },
  { key: 'satyajnana-tirtha-aradhana', name: 'श्रीसत्यज्ञानतीर्थ', en: 'Śrī Satyajñāna Tīrtha', masa: 10, tithi: 11, mathas: U, place: 'Rajahmundry' },
  { key: 'satyabodha-tirtha-aradhana', name: 'श्रीसत्यबोधतीर्थ', en: 'Śrī Satyabodha Tīrtha', masa: 11, tithi: 16, mathas: U, place: 'Savanur' },
  { key: 'satyasanthushta-tirtha-aradhana', name: 'श्रीसत्यसन्तुष्टतीर्थ', en: 'Śrī Satyasantuṣṭa Tīrtha', masa: 11, tithi: 30, mathas: U, place: 'Mysuru' },

  // ---- Rāghavendra Svāmi Maṭha, Mantrālaya (SRS + MS) ----
  { key: 'sushameendra-tirtha-aradhana', name: 'श्रीसुशमीन्द्रतीर्थ', en: 'Śrī Suśamīndra Tīrtha', masa: 0, tithi: 17, mathas: R, place: 'Mantrālaya' },
  { key: 'vadeendra-tirtha-aradhana', name: 'श्रीवादीन्द्रतीर्थ', en: 'Śrī Vādīndra Tīrtha', masa: 2, tithi: 9, mathas: R, place: 'Mantrālaya' },
  { key: 'susheelendra-tirtha-aradhana', name: 'श्रीसुशीलेन्द्रतीर्थ', en: 'Śrī Suśīlendra Tīrtha', masa: 3, tithi: 3, mathas: R, place: 'Mantrālaya' },
  { key: 'varadendra-tirtha-aradhana', name: 'श्रीवरदेन्द्रतीर्थ', en: 'Śrī Varadendra Tīrtha', masa: 3, tithi: 6, mathas: R, place: 'Pune' },
  { key: 'vasudhendra-tirtha-aradhana', name: 'श्रीवसुधेन्द्रतीर्थ', en: 'Śrī Vasudhendra Tīrtha', masa: 6, tithi: 22, mathas: R, place: 'Kenchangudda' },
  { key: 'raghunandana-tirtha-aradhana', name: 'श्रीरघुनन्दनतीर्थ', en: 'Śrī Raghunandana Tīrtha', masa: 7, tithi: 23, mathas: R, place: 'Hampi' },
  { key: 'jitamitra-tirtha-aradhana', name: 'श्रीजितामित्रतीर्थ', en: 'Śrī Jitāmitra Tīrtha', masa: 8, tithi: 30, mathas: R, place: 'Jitāmitra Gaḍḍe' },
  { key: 'sugunendra-tirtha-aradhana', name: 'श्रीसुगुणेन्द्रतीर्थ', en: 'Śrī Suguṇendra Tīrtha', masa: 8, tithi: 15, mathas: R, place: 'Chittoor' },
  { key: 'suyameendra-tirtha-aradhana', name: 'श्रीसुयमीन्द्रतीर्थ', en: 'Śrī Suyamīndra Tīrtha', masa: 9, tithi: 2, mathas: R, place: 'Mantrālaya' },
  { key: 'sudharmendra-tirtha-aradhana', name: 'श्रीसुधर्मेन्द्रतीर्थ', en: 'Śrī Sudharmendra Tīrtha', masa: 9, tithi: 20, mathas: R, place: 'Mantrālaya' },
  { key: 'sujayeendra-tirtha-aradhana', name: 'श्रीसुजयीन्द्रतीर्थ', en: 'Śrī Sujayīndra Tīrtha', masa: 10, tithi: 4, mathas: R, place: 'Mantrālaya' },
  { key: 'dheerendra-tirtha-aradhana', name: 'श्रीधीरेन्द्रतीर्थ', en: 'Śrī Dhīrendra Tīrtha', masa: 11, tithi: 13, mathas: R, place: 'Hosaritti' },
  { key: 'sudheendra-tirtha-aradhana', name: 'श्रीसुधीन्द्रतीर्थ', en: 'Śrī Sudhīndra Tīrtha (guru of Śrī Rāghavendra)', masa: 11, tithi: 17, mathas: R, place: 'Nava Bṛndāvana, Ānegondi' },
  { key: 'suyateendra-tirtha-aradhana', name: 'श्रीसुयतीन्द्रतीर्थ', en: 'Śrī Suyatīndra Tīrtha (mahāsamārādhanā)', masa: 11, tithi: 20, mathas: R, place: 'Mantrālaya' },

  // ---- Vyāsarāja Maṭha, Sosale (VM + MS) ----
  { key: 'vidyashreedhara-tirtha-aradhana', name: 'श्रीविद्याश्रीधरतीर्थ', en: 'Śrī Vidyāśrīdhara Tīrtha', masa: 0, tithi: 29, mathas: V, place: 'Śrīraṅga' },
  { key: 'vidyadhiraja-tirtha-aradhana', name: 'श्रीविद्याधिराजतीर्थ', en: 'Śrī Vidyādhirāja Tīrtha', masa: 1, tithi: 3, mathas: ['uttaradi', 'vyasaraja'], place: 'Yaragola' },
  { key: 'vidyashreenivasa-tirtha-aradhana', name: 'श्रीविद्याश्रीनिवासतीर्थ', en: 'Śrī Vidyāśrīnivāsa Tīrtha', masa: 1, tithi: 4, mathas: V, place: 'Sosale' },
  { key: 'sheshadasa-aradhana', name: 'श्रीशेषदास', en: 'Śrī Śeṣa Dāsa', masa: 1, tithi: 8, mathas: V, place: 'Modalakallu' },
  { key: 'vidyanatha-tirtha-aradhana', name: 'श्रीविद्यानाथतीर्थ', en: 'Śrī Vidyānātha Tīrtha', masa: 1, tithi: 11, mathas: V, place: 'Kumbhakoṇam' },
  { key: 'rajendra-tirtha-aradhana', name: 'श्रीराजेन्द्रतीर्थ', en: 'Śrī Rājendra Tīrtha', masa: 1, tithi: 15, mathas: V, place: 'Yaragola' },
  { key: 'shrinivasa-tirtha-aradhana', name: 'श्रीश्रीनिवासतीर्थ', en: 'Śrī Śrīnivāsa Tīrtha', masa: 1, tithi: 20, mathas: V, place: 'Nava Bṛndāvana, Ānegondi' },
  { key: 'vidyaratnakara-tirtha-aradhana', name: 'श्रीविद्यारत्नाकरतीर्थ', en: 'Śrī Vidyāratnākara Tīrtha', masa: 1, tithi: 24, mathas: V, place: 'Sosale' },
  { key: 'brahmanya-tirtha-aradhana', name: 'श्रीब्रह्मण्यतीर्थ', en: 'Śrī Brahmaṇya Tīrtha', masa: 1, tithi: 26, mathas: V, place: 'Abbur' },
  { key: 'vidyakanta-tirtha-aradhana', name: 'श्रीविद्याकान्ततीर्थ', en: 'Śrī Vidyākānta Tīrtha', masa: 2, tithi: 9, mathas: V, place: 'Sosale' },
  { key: 'raghunatha-sheshachandrika-aradhana', name: 'श्रीरघुनाथतीर्थ (शेषचन्द्रिकाचार्य)', en: 'Śrī Raghunātha Tīrtha (Śeṣacandrikācārya)', masa: 3, tithi: 4, mathas: V, place: 'Tirumakūḍalu' },
  { key: 'vidyashreesindhu-tirtha-aradhana', name: 'श्रीविद्याश्रीसिन्धुतीर्थ', en: 'Śrī Vidyāśrīsindhu Tīrtha', masa: 3, tithi: 9, mathas: V, place: 'Sosale' },
  { key: 'vidyanidhi-sosale-aradhana', name: 'श्रीविद्यानिधितीर्थ', en: 'Śrī Vidyānidhi Tīrtha (Sosale)', masa: 3, tithi: 26, mathas: V, place: 'Sosale' },
  { key: 'vidyapurna-tirtha-aradhana', name: 'श्रीविद्यापूर्णतीर्थ', en: 'Śrī Vidyāpūrṇa Tīrtha', masa: 4, tithi: 6, mathas: V, place: 'Sosale' },
  { key: 'lakshmikanta-tirtha-aradhana', name: 'श्रीलक्ष्मीकान्ततीर्थ', en: 'Śrī Lakṣmīkānta Tīrtha', masa: 4, tithi: 7, mathas: V, place: 'Penukonda' },
  { key: 'lakshminatha-tirtha-aradhana', name: 'श्रीलक्ष्मीनाथतीर्थ', en: 'Śrī Lakṣmīnātha Tīrtha', masa: 4, tithi: 13, mathas: V, place: 'Śrīraṅga' },
  { key: 'vidyavaridhi-tirtha-aradhana', name: 'श्रीविद्यावारिधितीर्थ', en: 'Śrī Vidyāvāridhi Tīrtha', masa: 5, tithi: 5, mathas: V, place: 'Śrīraṅga' },
  { key: 'vidyapayonidhi-tirtha-aradhana', name: 'श्रीविद्यापयोनिधितीर्थ', en: 'Śrī Vidyāpayonidhi Tīrtha', masa: 5, tithi: 25, mathas: V, place: 'Tirumakūḍalu' },
  { key: 'rama-tirtha-aradhana', name: 'श्रीरामतीर्थ', en: 'Śrī Rāma Tīrtha', masa: 6, tithi: 14, mathas: V, place: 'Nava Bṛndāvana, Ānegondi' },
  { key: 'vidyasamudra-tirtha-aradhana', name: 'श्रीविद्यासमुद्रतीर्थ', en: 'Śrī Vidyāsamudra Tīrtha', masa: 7, tithi: 2, mathas: V, place: 'Sosale' },
  { key: 'lakshmipati-tirtha-aradhana', name: 'श्रीलक्ष्मीपतितीर्थ', en: 'Śrī Lakṣmīpati Tīrtha', masa: 7, tithi: 11, mathas: V, place: 'Śrīraṅga' },
  { key: 'jayadhvaja-tirtha-aradhana', name: 'श्रीजयध्वजतीर्थ', en: 'Śrī Jayadhvaja Tīrtha', masa: 7, tithi: 15, mathas: V, place: 'Yaragola' },
  { key: 'kambaluru-ramachandra-aradhana', name: 'श्रीकम्बळूररामचन्द्रतीर्थ', en: 'Śrī Kambalūru Rāmacandra Tīrtha', masa: 8, tithi: 3, mathas: V, place: 'Rāyaveḷūru' },
  { key: 'vidyavallabha-tirtha-aradhana', name: 'श्रीविद्यावल्लभतीर्थ', en: 'Śrī Vidyāvallabha Tīrtha', masa: 8, tithi: 9, mathas: V, place: 'Tirumakūḍalu' },
  { key: 'vidyaprasanna-tirtha-aradhana', name: 'श्रीविद्याप्रसन्नतीर्थ', en: 'Śrī Vidyāprasanna Tīrtha', masa: 8, tithi: 15, mathas: V, place: 'Sosale' },
  { key: 'vibudhendra-tirtha-aradhana', name: 'श्रीविबुधेन्द्रतीर्थ', en: 'Śrī Vibudhendra Tīrtha', masa: 8, tithi: 10, mathas: ['vyasaraja', 'raghavendra'], place: 'Tirunelveli' },
  { key: 'jagannatha-bhashyadipika-aradhana', name: 'श्रीजगन्नाथतीर्थ (भाष्यदीपिकाचार्य)', en: 'Śrī Jagannātha Tīrtha (Bhāṣyadīpikācārya)', masa: 9, tithi: 2, mathas: V, place: 'Kumbhakoṇam' },
  { key: 'shreenatha-tirtha-aradhana', name: 'श्रीश्रीनाथतीर्थ', en: 'Śrī Śrīnātha Tīrtha', masa: 9, tithi: 4, mathas: V, place: 'Tirumakūḍalu' },
  { key: 'lakshmivallabha-tirtha-aradhana', name: 'श्रीलक्ष्मीवल्लभतीर्थ', en: 'Śrī Lakṣmīvallabha Tīrtha', masa: 9, tithi: 5, mathas: V, place: 'Beluru' },
  { key: 'vishnu-tirtha-aradhana', name: 'श्रीविष्णुतीर्थ', en: 'Śrī Viṣṇu Tīrtha', masa: 10, tithi: 28, mathas: V, place: 'Madanur' },

  // ---- Aṣṭa Maṭhas of Udupi (PAL + MS) ----
  { key: 'vidyamanya-tirtha-aradhana', name: 'श्रीविद्यामान्यतीर्थ', en: 'Śrī Vidyāmānya Tīrtha (Palimāru Maṭha)', masa: 1, tithi: 11, mathas: ['udupi'], place: 'Palimāru' },
];
