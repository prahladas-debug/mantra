/**
 * Śrī Madhvācārya's Dvādaśa Stotra — twelve hymns, one Mantra per stotra.
 *
 * Collated (Nov 2026) from four digital witnesses:
 *  - sa.wikisource.org, "द्वादशस्तोत्राणि": typed from the Sarvamūla-granthāḥ
 *    edition, with footnotes recording the Hṛṣīkeśatīrtha (हृ.) readings. Base text.
 *  - raocollectionssongs.blogspot.com, "Dwadasha stotras by Madhwacharyaru":
 *    independently typed Devanagari (and a Kannada copy).
 *  - transliteral.org, "द्वादश स्तोत्राणि" (typed Devanagari, the same family as
 *    the sanskritdocuments.org text) and harithasya.wordpress.com (Unicode Kannada):
 *    both follow the Hṛṣīkeśatīrtha recension.
 *  - shivallibrahmins.com / madhwabrahmanas.blogspot.com: the dvaita.org Kannada
 *    text (stotras 1–6), used as a check only. No translation was copied.
 *
 * The Wikisource typing has many keying slips (इन्दिरातिमाद्यादि…वप्रदम्,
 * जम्बूनद, परसंस्मरणे, नस हि, प्रणातान्, नन्दर, स्यान्दक …); each was corrected
 * where the other witnesses agree. Readings resolved by majority of witnesses:
 *  - 2.3 अव्याकृतगुहस्थाय (rao: गृहस्थाय)
 *  - 5.1 / 6.6 सुन्दरिकान्त, सुन्दरिनाथ (short i, as the dodhaka metre needs)
 *  - 5.5 सुक्रम सङ्क्रम (Wikisource main text सङ्क्रम सुक्रम)
 *  - 5.6 शामन (Wikisource सामन, apparently a repeat)
 *  - 12.10 आनन्दचन्द्रिकास्पन्दन (rao स्यन्दन; Hṛ. स्यन्दक)
 * The prevalent (Wikisource + rao) recension is followed where the Hṛṣīkeśatīrtha
 * text differs: stotra 6 verse order (रुक्मिणिवल्लभ in v4), 11.9 पठन्नानन्दतामियात्,
 * stotra 12 with ten verses (मन्दारस्यन्दकस्यन्दन, मन्दारस्यन्दितमन्दिर). These
 * variants are listed in each stotra's contentNote. Metres checked: anuṣṭubh
 * (1, 2, 11), toṭaka (3, 4), dodhaka (5, 6), vasantatilakā (7), sragviṇī (8).
 * Not yet checked against a printed maṭha edition.
 */
import type { Mantra, Verse } from '../types';

const v = (n: number, text: string, en: string, kn: string): Verse => ({ n, text, meaning: { en, kn } });
const colophon = (ordinal: string, extra = ''): Verse => ({
  text: `इति श्रीमदानन्दतीर्थभगवत्पादाचार्यविरचितेषु\nद्वादशस्तोत्रेषु ${ordinal} स्तोत्रं सम्पूर्णम् ॥${extra}`,
});

const SOURCE = 'Śrī Madhvācārya (Ānandatīrtha), Dvādaśa Stotra';
const NOTE_NAIVEDYA =
  'Traditionally sung in Mādhva temples and homes while naivedya is offered to Śrī Hari.';
const NOTE_NAIVEDYA_KN = 'ಮಾಧ್ವ ದೇವಾಲಯಗಳಲ್ಲಿ ಮತ್ತು ಮನೆಗಳಲ್ಲಿ ಶ್ರೀಹರಿಗೆ ನೈವೇದ್ಯ ಸಮರ್ಪಿಸುವಾಗ ಹಾಡುವುದು ಸಂಪ್ರದಾಯ.';

export const dvadashaStotra01: Mantra = {
  id: 'dvadasha-stotra-01',
  title: 'द्वादशस्तोत्रम् — प्रथमोऽध्यायः',
  titleEn: 'Dvadasha Stotra 1 · Vande Vandyam',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 1,
  deity: 'Śrī Hari (Vāsudeva)',
  source: SOURCE,
  summary:
    'The first stotra is a meditation on the Lord\'s form from the feet upward: His feet, waist, belly, chest, arms, neck, face, smile, glance and brow, ending with the prayer to remember the Infinite One above all at the time of death.',
  summaryKn:
    'ಮೊದಲ ಸ್ತೋತ್ರವು ಭಗವಂತನ ರೂಪವನ್ನು ಪಾದದಿಂದ ಮೇಲಕ್ಕೆ ಧ್ಯಾನಿಸುತ್ತದೆ: ಪಾದ, ಸೊಂಟ, ಹೊಟ್ಟೆ, ಎದೆ, ಭುಜಗಳು, ಕಂಠ, ಮುಖ, ಮಂದಹಾಸ, ನೋಟ ಮತ್ತು ಹುಬ್ಬು. ಕೊನೆಗೆ ಅನಂತನಾದ ಶ್ರೀಹರಿಯನ್ನು ವಿಶೇಷವಾಗಿ ಅಂತ್ಯಕಾಲದಲ್ಲಿ ಸ್ಮರಿಸಬೇಕು ಎನ್ನುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote: 'Variant: v5 इन्दिरावासमुत्तमैः / इन्दिरावासमुत्तमम् (for इन्दिरावासमीशितुः); v4 आरूढं (for उपगूढं).',
  sections: [
    {
      title: 'प्रथमं स्तोत्रम्',
      titleEn: 'Stotra 1',
      note: NOTE_NAIVEDYA,
      noteKn: NOTE_NAIVEDYA_KN,
      verses: [
        v(1, 'वन्दे वन्द्यं सदानन्दं वासुदेवं निरञ्जनम् ।\nइन्दिरापतिमाद्यादिवरदेशवरप्रदम् ॥',
          'I bow to Vāsudeva, who alone is worthy of worship, ever blissful and free of every blemish; the Lord of Indirā (Lakṣmī), who grants boons even to Brahmā and the other first gods, themselves the givers of boons.',
          'ವಂದನೀಯನೂ, ಸದಾ ಆನಂದಸ್ವರೂಪನೂ, ಯಾವ ದೋಷವೂ ಇಲ್ಲದವನೂ, ಲಕ್ಷ್ಮೀಪತಿಯೂ, ವರಕೊಡುವ ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳಿಗೂ ವರವನ್ನು ಕೊಡುವವನೂ ಆದ ವಾಸುದೇವನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(2, 'नमामि निखिलाधीशकिरीटाघृष्टपीठवत् ।\nहृत्तमःशमनेऽर्काभं श्रीपतेः पादपङ्कजम् ॥',
          'I bow to the lotus feet of the Lord of Śrī, whose footstool is rubbed by the crowns of all the lords of the worlds as they bow, and which, like the sun, dispel the darkness of the heart.',
          'ಲೋಕಾಧಿಪತಿಗಳೆಲ್ಲರೂ ನಮಸ್ಕರಿಸುವಾಗ ಅವರ ಕಿರೀಟಗಳು ಉಜ್ಜುವ ಪಾದಪೀಠವುಳ್ಳ, ಹೃದಯದ ಅಜ್ಞಾನಾಂಧಕಾರವನ್ನು ಸೂರ್ಯನಂತೆ ನಿವಾರಿಸುವ ಶ್ರೀಪತಿಯ ಪಾದಕಮಲಗಳಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(3, 'जाम्बूनदाम्बराधारं नितम्बं चिन्त्यमीशितुः ।\nस्वर्णमञ्जीरसंवीतमारूढं जगदम्बया ॥',
          'One should meditate on the Lord\'s waist, clothed in golden silk, encircled by a golden girdle, and where the Mother of the world is seated.',
          'ಚಿನ್ನದ ಪೀತಾಂಬರವನ್ನು ಧರಿಸಿದ, ಚಿನ್ನದ ಒಡ್ಯಾಣದಿಂದ ಸುತ್ತುವರಿದ, ಜಗನ್ಮಾತೆಯಾದ ಲಕ್ಷ್ಮಿಯು ಕುಳಿತಿರುವ ಭಗವಂತನ ಸೊಂಟವನ್ನು ಧ್ಯಾನಿಸಬೇಕು.'),
        v(4, 'उदरं चिन्त्यमीशस्य तनुत्वेऽप्यखिलम्भरम् ।\nवलित्रयाङ्कितं नित्यमुपगूढं श्रियैकया ॥',
          'Meditate on the Lord\'s belly: slender, yet holding the whole universe; marked with three folds, and ever embraced by Śrī alone.',
          'ತೆಳುವಾಗಿದ್ದರೂ ಇಡೀ ಜಗತ್ತನ್ನು ಧರಿಸಿರುವ, ಮೂರು ಮಡಿಕೆಗಳಿಂದ ಶೋಭಿಸುವ, ಸದಾ ಶ್ರೀದೇವಿಯೊಬ್ಬಳೇ ಆಲಿಂಗಿಸಿರುವ ಭಗವಂತನ ಉದರವನ್ನು ಧ್ಯಾನಿಸಬೇಕು.'),
        v(5, 'स्मरणीयमुरो विष्णोरिन्दिरावासमीशितुः ।\nअनन्तमन्तवदिव भुजयोरन्तरं गतम् ॥',
          'Remember the chest of Viṣṇu, the dwelling of Indirā: limitless, yet seeming bounded as it lies between His two arms.',
          'ಲಕ್ಷ್ಮಿಯ ನಿವಾಸವಾದ ವಿಷ್ಣುವಿನ ಎದೆಯನ್ನು ಸ್ಮರಿಸಬೇಕು. ಅದು ಅನಂತವಾದರೂ ಎರಡು ಭುಜಗಳ ನಡುವೆ ಇರುವುದರಿಂದ ಮಿತವಾದಂತೆ ಕಾಣುತ್ತದೆ.'),
        v(6, 'शङ्खचक्रगदापद्मधराश्चिन्त्या हरेर्भुजाः ।\nपीनवृत्ता जगद्रक्षाकेवलोद्योगिनोऽनिशम् ॥',
          'Meditate on Hari\'s arms, holding the conch, discus, mace and lotus: strong and rounded, and ever engaged in one task alone, the protection of the world.',
          'ಶಂಖ, ಚಕ್ರ, ಗದೆ, ಪದ್ಮಗಳನ್ನು ಹಿಡಿದಿರುವ, ದುಂಡಾಗಿ ಬಲಿಷ್ಠವಾಗಿರುವ, ಹಗಲಿರುಳೂ ಜಗತ್ತಿನ ರಕ್ಷಣೆಯಲ್ಲೇ ತೊಡಗಿರುವ ಶ್ರೀಹರಿಯ ಭುಜಗಳನ್ನು ಧ್ಯಾನಿಸಬೇಕು.'),
        v(7, 'सन्ततं चिन्तयेत्कण्ठं भास्वत्कौस्तुभभासकम् ।\nवैकुण्ठस्याखिला वेदा उद्गीर्यन्तेऽनिशं यतः ॥',
          'Ever meditate on the neck of Vaikuṇṭha, which makes the bright Kaustubha gem shine, and from which all the Vedas are always sung forth.',
          'ಹೊಳೆಯುವ ಕೌಸ್ತುಭಮಣಿಗೆ ಕಾಂತಿಯನ್ನು ಕೊಡುವ, ಸಮಸ್ತ ವೇದಗಳು ನಿರಂತರವಾಗಿ ಹೊರಹೊಮ್ಮುವ ವೈಕುಂಠನ ಕಂಠವನ್ನು ಸದಾ ಧ್ಯಾನಿಸಬೇಕು.'),
        v(8, 'स्मरेत यामिनीनाथसहस्रामितकान्तिमत् ।\nभवतापापनोदीड्यं श्रीपतेर्मुखपङ्कजम् ॥',
          'Remember the lotus face of the Lord of Śrī, more radiant than a thousand moons beyond measure, worthy of praise, which removes the burning pain of saṃsāra.',
          'ಸಾವಿರಾರು ಚಂದ್ರರಿಗಿಂತಲೂ ಅಳೆಯಲಾಗದ ಕಾಂತಿಯುಳ್ಳ, ಸಂಸಾರತಾಪವನ್ನು ಹೋಗಲಾಡಿಸುವ, ಸ್ತುತ್ಯವಾದ ಶ್ರೀಪತಿಯ ಮುಖಕಮಲವನ್ನು ಸ್ಮರಿಸಬೇಕು.'),
        v(9, 'पूर्णानन्यसुखोद्भासि मन्दस्मितमधीशितुः ।\nगोविन्दस्य सदा चिन्त्यं नित्यानन्दपदप्रदम् ॥',
          'Always meditate on the gentle smile of Govinda, the supreme Ruler, which shines with full and peerless bliss and grants the state of eternal joy.',
          'ಪೂರ್ಣವೂ ಅನನ್ಯವೂ ಆದ ಆನಂದದಿಂದ ಹೊಳೆಯುವ, ನಿತ್ಯಾನಂದಪದವನ್ನು (ಮೋಕ್ಷವನ್ನು) ಕೊಡುವ ಗೋವಿಂದನ ಮಂದಹಾಸವನ್ನು ಸದಾ ಧ್ಯಾನಿಸಬೇಕು.'),
        v(10, 'स्मरामि भवसन्तापहानिदामृतसागरम् ।\nपूर्णानन्दस्य रामस्य सानुरागावलोकनम् ॥',
          'I remember the loving glance of Rāma, full of bliss: an ocean of nectar that ends the burning sorrow of worldly life.',
          'ಸಂಸಾರತಾಪವನ್ನು ನಾಶಮಾಡುವ ಅಮೃತಸಾಗರದಂತಿರುವ, ಪೂರ್ಣಾನಂದನಾದ ಶ್ರೀರಾಮನ ಪ್ರೀತಿತುಂಬಿದ ಕಟಾಕ್ಷವನ್ನು ಸ್ಮರಿಸುತ್ತೇನೆ.'),
        v(11, 'ध्यायेदजस्रमीशस्य पद्मजादिप्रतीक्षितम् ।\nभ्रूभङ्गं पारमेष्ठ्यादिपददायि विमुक्तिदम् ॥',
          'Constantly meditate on the movement of the Lord\'s brow, awaited eagerly by Brahmā and the gods, which bestows the rank of Brahmā and other high offices, and liberation itself.',
          'ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳು ಕಾತರದಿಂದ ಕಾಯುವ, ಬ್ರಹ್ಮಪದವೇ ಮೊದಲಾದ ಪದವಿಗಳನ್ನೂ ಮೋಕ್ಷವನ್ನೂ ಕೊಡುವ ಭಗವಂತನ ಹುಬ್ಬಿನ ಚಲನೆಯನ್ನು ನಿರಂತರ ಧ್ಯಾನಿಸಬೇಕು.'),
        v(12, 'सन्ततं चिन्तयेऽनन्तमन्तकाले विशेषतः ।\nनैवोदापुर्गृणन्तोऽन्तं यद्गुणानामजादयः ॥',
          'I meditate always on the Infinite One, and above all at the hour of death: the Lord whose qualities Brahmā and the gods, praising them, have never reached the end of.',
          'ಬ್ರಹ್ಮಾದಿಗಳು ಸ್ತುತಿಸುತ್ತಿದ್ದರೂ ಯಾರ ಗುಣಗಳ ಕೊನೆಯನ್ನು ಮುಟ್ಟಲಾಗಲಿಲ್ಲವೋ ಆ ಅನಂತನನ್ನು ಸದಾ, ವಿಶೇಷವಾಗಿ ಅಂತ್ಯಕಾಲದಲ್ಲಿ, ಚಿಂತಿಸುತ್ತೇನೆ.'),
        colophon('प्रथमं'),
      ],
    },
  ],
};

export const dvadashaStotra02: Mantra = {
  id: 'dvadasha-stotra-02',
  title: 'द्वादशस्तोत्रम् — द्वितीयोऽध्यायः',
  titleEn: 'Dvadasha Stotra 2 · Sujanodadhi',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 2,
  deity: 'Śrī Hari (Nārāyaṇa)',
  source: SOURCE,
  summary:
    'Salutations to Nārāyaṇa, the full moon that makes the ocean of the good swell: the independent Lord who controls all and is controlled by none, beyond the guṇas of matter yet full of all good qualities, ever gladdened by Lakṣmī\'s glance.',
  summaryKn:
    'ಸಜ್ಜನರೆಂಬ ಸಮುದ್ರವನ್ನು ಉಕ್ಕಿಸುವ ಪೂರ್ಣಚಂದ್ರನಾದ ನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರಗಳು. ಎಲ್ಲರನ್ನೂ ವಶದಲ್ಲಿಟ್ಟುಕೊಂಡು ಯಾರ ವಶಕ್ಕೂ ಒಳಗಾಗದ ಸ್ವತಂತ್ರನು, ಪ್ರಾಕೃತ ಗುಣರಹಿತನಾದರೂ ಸಕಲ ಸದ್ಗುಣಪೂರ್ಣನು, ಲಕ್ಷ್ಮಿಯ ಕಟಾಕ್ಷದಿಂದ ಸದಾ ಆನಂದಿಸುವವನು ಎಂದು ಈ ಸ್ತೋತ್ರ ಕೊಂಡಾಡುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote:
    'Variants (Hṛṣīkeśatīrtha recension): v1 स्वजनोदधि… and सदाव्यादिन्दिरापतिः; v2 दुष्टसर्पोदवह्नये; v7 नमः पारावराश्रय. That recension recites this stotra after the Tattvasaṅkhyāna and adds two further verses.',
  sections: [
    {
      title: 'द्वितीयं स्तोत्रम्',
      titleEn: 'Stotra 2',
      verses: [
        v(1, 'सुजनोदधिसंवृद्धिपूर्णचन्द्रो गुणार्णवः ।\nअमन्दानन्दसान्द्रो नः प्रीयतामिन्दिरापतिः ॥',
          'May the Lord of Indirā be pleased with us: the full moon that makes the ocean of good souls swell, an ocean of virtues, dense with boundless bliss.',
          'ಸಜ್ಜನರೆಂಬ ಸಮುದ್ರವನ್ನು ಉಕ್ಕಿಸುವ ಪೂರ್ಣಚಂದ್ರನೂ, ಗುಣಗಳ ಸಾಗರನೂ, ಅಪಾರ ಆನಂದದಿಂದ ತುಂಬಿದವನೂ ಆದ ಲಕ್ಷ್ಮೀಪತಿಯು ನಮ್ಮ ಮೇಲೆ ಪ್ರಸನ್ನನಾಗಲಿ.'),
        v(2, 'रमाचकोरीविधवे दुष्टदर्पोदवह्नये ।\nसत्पान्थजनगेहाय नमो नारायणाय ते ॥',
          'Salutations to you, Nārāyaṇa: the moon for the cakorī bird that is Ramā, the submarine fire that dries up the ocean of the wicked\'s pride, the home where good travellers find rest.',
          'ರಮಾದೇವಿಯೆಂಬ ಚಕೋರಪಕ್ಷಿಗೆ ಚಂದ್ರನಂತಿರುವ, ದುಷ್ಟರ ಗರ್ವವೆಂಬ ಜಲರಾಶಿಗೆ ಬಡಬಾಗ್ನಿಯಂತಿರುವ, ಸಜ್ಜನರೆಂಬ ಪ್ರಯಾಣಿಕರಿಗೆ ಆಶ್ರಯಮನೆಯಂತಿರುವ ನಾರಾಯಣನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.'),
        v(3, 'चिदचिद्भेदमखिलं विधायाधाय भुञ्जते ।\nअव्याकृतगुहस्थाय रमाप्रणयिने नमः ॥',
          'Salutations to the beloved of Ramā, who creates the whole world of conscious and unconscious beings in all its distinctness, sustains it and draws it back into Himself, and who dwells in the cave of unmanifest matter.',
          'ಚೇತನ-ಅಚೇತನಗಳೆಂಬ ಭೇದದಿಂದ ಕೂಡಿದ ಸಮಸ್ತ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸಿ, ಧರಿಸಿ, ತನ್ನಲ್ಲಿ ಲಯಗೊಳಿಸಿಕೊಳ್ಳುವ, ಅವ್ಯಾಕೃತವೆಂಬ ಗುಹೆಯಲ್ಲಿ ನೆಲೆಸಿರುವ ರಮಾಪ್ರಿಯನಿಗೆ ನಮಸ್ಕಾರ.'),
        v(4, 'अमन्दगुणसारोऽपि मन्दहासेन वीक्षितः ।\nनित्यमिन्दिरयाऽऽनन्दसान्द्रो यो नौमि तं हरिम् ॥',
          'I praise Hari who, though Himself the essence of boundless virtues and dense with bliss, is ever looked upon by Indirā with a gentle smile.',
          'ಅಪಾರ ಗುಣಗಳ ಸಾರನೂ ಆನಂದಘನನೂ ಆಗಿದ್ದರೂ, ಲಕ್ಷ್ಮಿಯು ಸದಾ ಮಂದಹಾಸದಿಂದ ನೋಡುವ ಶ್ರೀಹರಿಯನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ.'),
        v(5, 'वशी वशे न कस्यापि योऽजितो विजिताखिलः ।\nसर्वकर्ता न क्रियते तं नमामि रमापतिम् ॥',
          'I bow to the Lord of Ramā, who controls all and is under no one\'s control; unconquered, He has conquered all; He is the doer of everything, yet is Himself made by none.',
          'ಎಲ್ಲರನ್ನೂ ನಿಯಂತ್ರಿಸುವ, ಯಾರ ವಶಕ್ಕೂ ಒಳಗಾಗದ, ಯಾರಿಂದಲೂ ಜಯಿಸಲ್ಪಡದೆ ಎಲ್ಲರನ್ನೂ ಜಯಿಸಿರುವ, ಎಲ್ಲವನ್ನೂ ಮಾಡುವವನಾದರೂ ಯಾರಿಂದಲೂ ಮಾಡಲ್ಪಡದ ರಮಾಪತಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(6, 'अगुणाय गुणोद्रेकस्वरूपायादिकारिणे ।\nविदारितारिसङ्घाय वासुदेवाय ते नमः ॥',
          'Salutations to you, Vāsudeva: free of the guṇas of matter, yet in your very nature an abundance of virtues; the first cause, who has torn apart the hosts of your enemies.',
          'ಪ್ರಾಕೃತ ಗುಣಗಳಿಲ್ಲದವನೂ, ಸದ್ಗುಣಗಳ ಸಮೃದ್ಧಿಯೇ ಸ್ವರೂಪವಾಗಿರುವವನೂ, ಆದಿಕಾರಣನೂ, ಶತ್ರುಸಮೂಹವನ್ನು ಸೀಳಿಹಾಕಿದವನೂ ಆದ ವಾಸುದೇವನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.'),
        v(7, 'आदिदेवाय देवानां पतये सादितारये ।\nअनाद्यज्ञानपाराय नमो वरवराय ते ॥',
          'Salutations to you, the first God, Lord of the gods, who destroys the enemies of the gods; who takes souls beyond beginningless ignorance; the best of all who are excellent.',
          'ಆದಿದೇವನೂ, ದೇವತೆಗಳ ಒಡೆಯನೂ, ದೈತ್ಯರನ್ನು ನಾಶಮಾಡುವವನೂ, ಅನಾದಿಯಾದ ಅಜ್ಞಾನದಿಂದ ಪಾರುಮಾಡುವವನೂ, ಶ್ರೇಷ್ಠರಲ್ಲಿ ಶ್ರೇಷ್ಠನೂ ಆದ ನಿನಗೆ ನಮಸ್ಕಾರ.'),
        v(8, 'अजाय जनयित्रेऽस्य विजिताखिलदानव ।\nअजादिपूज्यपादाय नमस्ते गरुडध्वज ॥',
          'O Lord with Garuḍa on your banner, conqueror of all the dānavas: salutations to you, the unborn creator of this world, whose feet are worshipped by Brahmā and the gods.',
          'ಸಮಸ್ತ ದಾನವರನ್ನು ಜಯಿಸಿದ ಗರುಡಧ್ವಜನೇ, ಜನ್ಮರಹಿತನಾಗಿ ಈ ಜಗತ್ತನ್ನು ಹುಟ್ಟಿಸುವ, ಬ್ರಹ್ಮಾದಿಗಳು ಪೂಜಿಸುವ ಪಾದಗಳುಳ್ಳ ನಿನಗೆ ನಮಸ್ಕಾರ.'),
        v(9, 'इन्दिरामन्दसान्द्राग्र्यकटाक्षप्रेक्षितात्मने ।\nअस्मदिष्टैककार्याय पूर्णाय हरये नमः ॥',
          'Salutations to Hari, the Complete One, who is gazed upon by Indirā\'s deep and loving sidelong glances, and whose one concern is to fulfil what is good for us.',
          'ಇಂದಿರೆಯ ಗಾಢವಾದ ಶ್ರೇಷ್ಠ ಕಟಾಕ್ಷಗಳಿಗೆ ಪಾತ್ರನಾದ, ನಮ್ಮ ಹಿತವನ್ನು ಮಾಡುವುದೇ ತನ್ನ ಒಂದೇ ಕಾರ್ಯವಾಗಿರುವ ಪೂರ್ಣನಾದ ಶ್ರೀಹರಿಗೆ ನಮಸ್ಕಾರ.'),
        colophon('द्वितीयं'),
      ],
    },
  ],
};

export const dvadashaStotra03: Mantra = {
  id: 'dvadasha-stotra-03',
  title: 'द्वादशस्तोत्रम् — तृतीयोऽध्यायः',
  titleEn: 'Dvadasha Stotra 3 · Kuru Bhunkshva',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 3,
  deity: 'Śrī Hari',
  source: SOURCE,
  summary:
    'The best known of the twelve, often called the summary of Tattvavāda: do your own duty with devotion to Hari; Hari alone is supreme, with none equal or higher; the world is real and under His control; souls are many and remain graded even in liberation.',
  summaryKn:
    'ಹನ್ನೆರಡು ಸ್ತೋತ್ರಗಳಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧವಾದದ್ದು; ತತ್ತ್ವವಾದದ ಸಾರಸಂಗ್ರಹವೆಂದು ಹೇಳುತ್ತಾರೆ. ಹರಿಭಕ್ತಿಯಿಂದ ಸ್ವಧರ್ಮವನ್ನು ಮಾಡು; ಶ್ರೀಹರಿಯೇ ಸರ್ವೋತ್ತಮ, ಅವನಿಗೆ ಸಮರೂ ಮೇಲಿನವರೂ ಇಲ್ಲ; ಜಗತ್ತು ಸತ್ಯ, ಅವನ ವಶದಲ್ಲಿದೆ; ಜೀವರು ಅನೇಕರು, ಮುಕ್ತಿಯಲ್ಲಿಯೂ ಅವರಲ್ಲಿ ತಾರತಮ್ಯ ಇರುತ್ತದೆ ಎಂದು ಸಾರುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote: 'Variants: v2 जगदीड्यतमं (for जगतीड्यतमं); v5 न भवेत हरिः.',
  sections: [
    {
      title: 'तृतीयं स्तोत्रम्',
      titleEn: 'Stotra 3',
      verses: [
        v(1, 'कुरु भुङ्क्ष्व च कर्म निजं नियतं\nहरिपादविनम्रधिया सततम् ।\nहरिरेव परो हरिरेव गुरु-\nर्हरिरेव जगत्पितृमातृगतिः ॥',
          'Always do the duty assigned to you, and live by it, with a mind bowed at Hari\'s feet. Hari alone is supreme, Hari alone is the teacher; Hari alone is the father, mother and refuge of the world.',
          'ಶ್ರೀಹರಿಯ ಪಾದಗಳಲ್ಲಿ ವಿನಯದಿಂದ ಬಾಗಿದ ಮನಸ್ಸಿನಿಂದ ನಿನಗೆ ವಿಧಿಸಿದ ಕರ್ಮವನ್ನು ಸದಾ ಮಾಡು, ಅದರ ಫಲವನ್ನು ಉಣ್ಣು. ಹರಿಯೇ ಸರ್ವೋತ್ತಮ, ಹರಿಯೇ ಗುರು, ಹರಿಯೇ ಜಗತ್ತಿಗೆ ತಂದೆ, ತಾಯಿ ಮತ್ತು ಗತಿ.'),
        v(2, 'न ततोऽस्त्यपरं जगतीड्यतमं\nपरमात्परतः पुरुषोत्तमतः ।\nतदलं बहुलोकविचिन्तनया\nप्रवणं कुरु मानसमीशपदे ॥',
          'In this world there is nothing more worthy of praise than Him, the Supreme Person, higher than the highest. So enough of brooding on many worldly things: turn your mind towards the feet of the Lord.',
          'ಉತ್ತಮರಿಗಿಂತಲೂ ಉತ್ತಮನಾದ ಆ ಪುರುಷೋತ್ತಮನಿಗಿಂತ ಹೆಚ್ಚು ಸ್ತುತ್ಯವಾದದ್ದು ಜಗತ್ತಿನಲ್ಲಿ ಬೇರೆ ಇಲ್ಲ. ಆದ್ದರಿಂದ ಲೌಕಿಕ ವಿಷಯಗಳ ಬಗ್ಗೆ ಹೆಚ್ಚು ಚಿಂತಿಸುವುದು ಸಾಕು; ಮನಸ್ಸನ್ನು ಭಗವಂತನ ಪಾದಗಳತ್ತ ತಿರುಗಿಸು.'),
        v(3, 'यततोऽपि हरेः पदसंस्मरणे\nसकलं ह्यघमाशु लयं व्रजति ।\nस्मरतस्तु विमुक्तिपदं परमं\nस्फुटमेष्यति तत्किमपाक्रियते ॥',
          'For one who merely strives to remember Hari\'s feet, all sin quickly melts away; and one who truly remembers Him will surely reach the supreme state of liberation. Why then turn away from it?',
          'ಹರಿಯ ಪಾದಗಳನ್ನು ಸ್ಮರಿಸಲು ಪ್ರಯತ್ನಿಸುವವನ ಪಾಪಗಳೆಲ್ಲ ಬೇಗನೆ ನಾಶವಾಗುತ್ತವೆ; ನಿಜವಾಗಿ ಸ್ಮರಿಸುವವನಿಗೆ ಪರಮವಾದ ಮೋಕ್ಷಪದವು ನಿಶ್ಚಯವಾಗಿ ದೊರೆಯುತ್ತದೆ. ಹೀಗಿರುವಾಗ ಅದನ್ನೇಕೆ ಬಿಡುತ್ತೀರಿ?'),
        v(4, 'शृणुतामलसत्यवचः परमं\nशपथेरितमुच्छ्रितबाहुयुगम् ।\nन हरेः परमो न हरेः सदृशः\nपरमः स तु सर्वचिदात्मगणात् ॥',
          'Hear this pure and supreme truth, declared on oath with both arms raised: there is none higher than Hari, none equal to Hari; He is above the whole host of conscious beings.',
          'ಎರಡೂ ಕೈಗಳನ್ನೆತ್ತಿ ಆಣೆಯಿಟ್ಟು ಹೇಳುವ ಈ ನಿರ್ಮಲವಾದ ಪರಮಸತ್ಯವನ್ನು ಕೇಳಿರಿ: ಹರಿಗಿಂತ ಶ್ರೇಷ್ಠರಿಲ್ಲ, ಹರಿಗೆ ಸಮಾನರಿಲ್ಲ; ಅವನು ಸಮಸ್ತ ಚೇತನವರ್ಗಕ್ಕಿಂತಲೂ ಉತ್ತಮನು.'),
        v(5, 'यदि नाम परो न भवेत्स हरिः\nकथमस्य वशे जगदेतदभूत् ।\nयदि नाम न तस्य वशे सकलं\nकथमेव तु नित्यसुखं न भवेत् ॥',
          'If Hari were not supreme, how could this world have come under His control? And if all were not under His control, why would everyone not be happy always?',
          'ಹರಿಯು ಸರ್ವೋತ್ತಮನಲ್ಲದಿದ್ದರೆ ಈ ಜಗತ್ತು ಅವನ ವಶದಲ್ಲಿ ಹೇಗೆ ಇರುತ್ತಿತ್ತು? ಎಲ್ಲವೂ ಅವನ ವಶದಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ (ಸ್ವತಂತ್ರರಾದ) ಎಲ್ಲರಿಗೂ ನಿತ್ಯಸುಖವೇಕೆ ಇರುತ್ತಿರಲಿಲ್ಲ?'),
        v(6, 'न च कर्मविमामलकालगुण-\nप्रभृतीशमचित्तनु तद्धि यतः ।\nचिदचित्तनु सर्वमसौ तु हरि-\nर्यमयेदिति वैदिकमस्ति वचः ॥',
          'Nor are karma, ignorance, time, the guṇas and the rest the rulers, for they are insentient, the body of the Lord. The Vedic word declares that Hari, whose body is the whole of the sentient and insentient, controls all.',
          'ಕರ್ಮ, ಅಜ್ಞಾನ, ಕಾಲ, ಗುಣಗಳು ಮೊದಲಾದವು ಜಗತ್ತಿನ ಒಡೆಯರಲ್ಲ; ಅವು ಜಡವಾಗಿದ್ದು ಭಗವಂತನಿಗೆ ಶರೀರದಂತಿವೆ. ಚೇತನ-ಅಚೇತನಗಳೆಲ್ಲವನ್ನೂ ಶರೀರವನ್ನಾಗಿ ಹೊಂದಿರುವ ಶ್ರೀಹರಿಯೇ ಎಲ್ಲವನ್ನೂ ನಿಯಮಿಸುತ್ತಾನೆ ಎಂದು ವೇದವಾಕ್ಯ ಹೇಳುತ್ತದೆ.'),
        v(7, 'व्यवहारभिदाऽपि गुरोर्जगतां\nन तु चित्तगता स हि चोद्यपरम् ।\nबहवः पुरुषाः पुरुषप्रवरो\nहरिरित्यवदत्स्वयमेव हरिः ॥',
          'The difference between the Teacher of the worlds and the souls is not a mere practical convention, nor something imagined by the mind; to say so invites refutation. Hari Himself has declared: "The souls are many, and Hari is the highest of them."',
          'ಜಗದ್ಗುರುವಾದ ಹರಿಗೂ ಜೀವರಿಗೂ ಇರುವ ಭೇದವು ಕೇವಲ ವ್ಯವಹಾರಕ್ಕಾಗಿ ಕಲ್ಪಿಸಿದ್ದಲ್ಲ, ಮನಸ್ಸಿನ ಕಲ್ಪನೆಯೂ ಅಲ್ಲ; ಹಾಗೆ ಹೇಳುವುದು ಆಕ್ಷೇಪಕ್ಕೆ ಗುರಿಯಾಗುತ್ತದೆ. "ಜೀವರು ಅನೇಕರು, ಅವರಲ್ಲಿ ಹರಿಯೇ ಉತ್ತಮನು" ಎಂದು ಸ್ವತಃ ಹರಿಯೇ ಹೇಳಿದ್ದಾನೆ.'),
        v(8, 'चतुराननपूर्वविमुक्तगणा\nहरिमेत्य तु पूर्ववदेव सदा ।\nनियतोच्चविनीचतयैव निजां\nस्थितिमापुरिति स्म परं वचनम् ॥',
          'The hosts of the liberated, with four-faced Brahmā first, on reaching Hari keep forever, as before, their own fixed rank, higher and lower: so says the highest scripture.',
          'ಚತುರ್ಮುಖ ಬ್ರಹ್ಮನೇ ಮೊದಲಾದ ಮುಕ್ತರ ಸಮೂಹವು ಶ್ರೀಹರಿಯನ್ನು ಸೇರಿದ ಮೇಲೆಯೂ ಹಿಂದಿನಂತೆಯೇ ತಮ್ಮ ನಿಯತವಾದ ಉಚ್ಚ-ನೀಚ ಸ್ಥಾನದಲ್ಲೇ ಸದಾ ಇರುತ್ತದೆ ಎಂದು ಶ್ರೇಷ್ಠ ಪ್ರಮಾಣವಾಕ್ಯ ಹೇಳುತ್ತದೆ.'),
        v(9, 'आनन्दतीर्थसन्नाम्ना पूर्णप्रज्ञाभिधायुजा ।\nकृतं हर्यष्टकं भक्त्या पठतः प्रीयते हरिः ॥',
          'Hari is pleased with one who devoutly recites this octet on Hari, composed by the one who bears the holy name Ānandatīrtha and the name Pūrṇaprajña.',
          'ಆನಂದತೀರ್ಥ ಎಂಬ ಶ್ರೇಷ್ಠ ನಾಮವನ್ನೂ ಪೂರ್ಣಪ್ರಜ್ಞ ಎಂಬ ಹೆಸರನ್ನೂ ಹೊಂದಿದವರು ರಚಿಸಿದ ಈ ಹರ್ಯಷ್ಟಕವನ್ನು ಭಕ್ತಿಯಿಂದ ಪಠಿಸುವವನ ಮೇಲೆ ಶ್ರೀಹರಿ ಪ್ರಸನ್ನನಾಗುತ್ತಾನೆ.'),
        colophon('तृतीयं'),
      ],
    },
  ],
};

export const dvadashaStotra04: Mantra = {
  id: 'dvadasha-stotra-04',
  title: 'द्वादशस्तोत्रम् — चतुर्थोऽध्यायः',
  titleEn: 'Dvadasha Stotra 4 · Nijapurnasukha',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 4,
  deity: 'Śrī Hari',
  source: SOURCE,
  summary:
    'Hari\'s very body is bliss and knowledge; He creates, protects and destroys even Brahmā, Śiva and Indra, and none has ever been or will be His equal. The seeker is urged to cut down the inner enemy, ignorance, with the sharpened sword of scripture and worship Him.',
  summaryKn:
    'ಶ್ರೀಹರಿಯ ದೇಹವೇ ಆನಂದ-ಜ್ಞಾನಸ್ವರೂಪ; ಬ್ರಹ್ಮ, ಶಿವ, ಇಂದ್ರಾದಿಗಳನ್ನೂ ಅವನೇ ಸೃಷ್ಟಿಸಿ, ರಕ್ಷಿಸಿ, ಸಂಹರಿಸುತ್ತಾನೆ; ಅವನಿಗೆ ಸಮನಾದವರು ಹಿಂದೆ ಇರಲಿಲ್ಲ, ಮುಂದೆಯೂ ಇರುವುದಿಲ್ಲ. ಶಾಸ್ತ್ರವೆಂಬ ಹರಿತ ಖಡ್ಗದಿಂದ ಅಜ್ಞಾನವೆಂಬ ಒಳಶತ್ರುವನ್ನು ಕತ್ತರಿಸಿ ಅವನನ್ನು ಉಪಾಸಿಸು ಎಂದು ಸಾಧಕನಿಗೆ ಉಪದೇಶಿಸುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote: 'Variants: v2 सुमतिप्रभवं; v6 अपरानमरान् (for अपरानपरान्) and प्रणतां स्वधिया.',
  sections: [
    {
      title: 'चतुर्थं स्तोत्रम्',
      titleEn: 'Stotra 4',
      verses: [
        v(1, 'निजपूर्णसुखामितबोधतनुः\nपरशक्तिरनन्तगुणः परमः ।\nअजरामरणः सकलार्तिहरः\nकमलापतिरीड्यतमोऽवतु नः ॥',
          'May the Lord of Kamalā protect us, most worthy of praise: His body is His own full bliss and boundless knowledge; supreme in power, of endless virtues, the Highest; free of age and death, the remover of every sorrow.',
          'ತನ್ನದೇ ಆದ ಪೂರ್ಣ ಆನಂದ ಮತ್ತು ಅಪಾರ ಜ್ಞಾನವೇ ದೇಹವಾಗಿರುವ, ಪರಮಶಕ್ತನೂ ಅನಂತಗುಣನೂ ಸರ್ವೋತ್ತಮನೂ, ಮುಪ್ಪು-ಸಾವುಗಳಿಲ್ಲದವನೂ, ಸಕಲ ದುಃಖಗಳನ್ನು ಹೋಗಲಾಡಿಸುವವನೂ, ಅತ್ಯಂತ ಸ್ತುತ್ಯನೂ ಆದ ಕಮಲಾಪತಿಯು ನಮ್ಮನ್ನು ಕಾಪಾಡಲಿ.'),
        v(2, 'यदसुप्तिगतोऽपि हरिः सुखवान्\nसुखरूपिणमाहुरतो निगमाः ।\nस्वमतिप्रभवं जगदस्य यतः\nपरबोधतनुं च ततः खपतिम् ॥',
          'Because Hari is blissful even without sleep (unlike us, who find rest only in deep sleep), the Vedas call Him bliss itself; and because this world springs from His own will and knowledge, they call Him the Lord whose body is supreme knowledge.',
          'ನಿದ್ರೆಯಿಲ್ಲದೆಯೂ ಹರಿಯು ಸದಾ ಸುಖಿಯಾಗಿರುವುದರಿಂದ ವೇದಗಳು ಅವನನ್ನು ಸುಖಸ್ವರೂಪನೆಂದು ಹೇಳುತ್ತವೆ; ಈ ಜಗತ್ತು ಅವನ ಸಂಕಲ್ಪ-ಜ್ಞಾನದಿಂದಲೇ ಹುಟ್ಟಿರುವುದರಿಂದ ಅವನನ್ನು ಪರಮಜ್ಞಾನದೇಹನಾದ ಒಡೆಯನೆಂದು ಹೇಳುತ್ತವೆ.'),
        v(3, 'बहुचित्रजगद्बहुधाकरणा-\nत्परशक्तिरनन्तगुणः परमः ।\nसुखरूपममुष्य पदं परमं\nस्मरतस्तु भविष्यति तत्सततम् ॥',
          'Since He makes this wondrous, manifold world in many ways, He is supreme in power, endless in virtues, the Highest. For one who remembers Him, His supreme abode, which is bliss itself, will be his forever.',
          'ಬಹುವಿಚಿತ್ರವಾದ ಈ ಜಗತ್ತನ್ನು ಅನೇಕ ರೀತಿಯಲ್ಲಿ ಸೃಷ್ಟಿಸುವುದರಿಂದ ಅವನು ಪರಮಶಕ್ತನೂ ಅನಂತಗುಣನೂ ಸರ್ವೋತ್ತಮನೂ ಆಗಿದ್ದಾನೆ. ಅವನನ್ನು ಸ್ಮರಿಸುವವನಿಗೆ ಸುಖರೂಪವಾದ ಅವನ ಪರಮಪದವು ಶಾಶ್ವತವಾಗಿ ದೊರೆಯುತ್ತದೆ.'),
        v(4, 'स्मरणे हि परेशितुरस्य विभो-\nर्मलिनानि मनांसि कुतः करणम् ।\nविमलं हि पदं परमं स्वरतं\nतरुणार्कसवर्णमजस्य हरेः ॥',
          'How can impure minds serve as the means to remember this all-pervading supreme Lord? For the supreme abode of the unborn Hari is spotless, delighting in itself, radiant as the rising sun.',
          'ಸರ್ವವ್ಯಾಪಿಯಾದ ಈ ಪರಮೇಶ್ವರನ ಸ್ಮರಣೆಗೆ ಮಲಿನವಾದ ಮನಸ್ಸುಗಳು ಹೇಗೆ ಸಾಧನವಾದಾವು? ಜನ್ಮರಹಿತನಾದ ಹರಿಯ ಪರಮಪದವು ನಿರ್ಮಲವೂ, ಸ್ವಾನಂದದಲ್ಲಿ ರಮಿಸುವಂಥದ್ದೂ, ಉದಯಿಸುವ ಸೂರ್ಯನಂತೆ ಹೊಳೆಯುವಂಥದ್ದೂ ಆಗಿದೆ.'),
        v(5, 'विमलैः श्रुतिशाणनिशाततमैः\nसुमनोऽसिभिराशु निहत्य दृढम् ।\nबलिनं निजवैरिणमात्मतमो-\nभिदमीशमनन्तमुपास्व हरिम् ॥',
          'With the bright swords of a pure mind, honed sharp on the whetstone of scripture, quickly and firmly slay your mighty inner enemy, the darkness of ignorance, and worship Hari, the infinite Lord.',
          'ಶ್ರುತಿಯೆಂಬ ಸಾಣೆಕಲ್ಲಿನಲ್ಲಿ ಮಸೆದು ಹರಿತಗೊಳಿಸಿದ ನಿರ್ಮಲ ಮನಸ್ಸೆಂಬ ಖಡ್ಗಗಳಿಂದ, ಅಜ್ಞಾನಾಂಧಕಾರವೆಂಬ ಬಲಿಷ್ಠವಾದ ಒಳಶತ್ರುವನ್ನು ಬೇಗನೆ ದೃಢವಾಗಿ ಕೊಂದು, ಅನಂತನಾದ ಈಶ್ವರ ಶ್ರೀಹರಿಯನ್ನು ಉಪಾಸಿಸು.'),
        v(6, 'स हि विश्वसृजो विभुशम्भुपुर-\nन्दरसूर्यमुखानपरानपरान् ।\nसृजतीड्यतमोऽवति हन्ति निजं\nपदमापयति प्रणतान्सुधिया ॥',
          'For He, most worthy of praise, creates, protects and destroys Brahmā the world-maker, Śiva, Indra, Sūrya and the other gods one after another; and to those who bow to Him with right understanding He grants His own abode.',
          'ಅತ್ಯಂತ ಸ್ತುತ್ಯನಾದ ಅವನೇ ಜಗತ್ಸ್ರಷ್ಟನಾದ ಬ್ರಹ್ಮ, ಶಿವ, ಇಂದ್ರ, ಸೂರ್ಯ ಮೊದಲಾದ ಇತರ ದೇವತೆಗಳೆಲ್ಲರನ್ನೂ ಸೃಷ್ಟಿಸುತ್ತಾನೆ, ರಕ್ಷಿಸುತ್ತಾನೆ, ಸಂಹರಿಸುತ್ತಾನೆ; ಸರಿಯಾದ ತಿಳಿವಳಿಕೆಯಿಂದ ನಮಿಸುವವರಿಗೆ ತನ್ನ ಪದವನ್ನು ಕೊಡುತ್ತಾನೆ.'),
        v(7, 'परमोऽपि रमेशितुरस्य समो\nन हि कश्चिदभून्न भविष्यति च ।\nक्वचिदद्यतनोऽपि न पूर्णसदा-\nगणितेड्यगुणानुभवैकतनोः ॥',
          'No one, however exalted, has ever been, or will ever be, or is now anywhere, equal to this Lord of Ramā, whose sole body is the enjoyment of His full, eternal, countless and praiseworthy virtues.',
          'ಪೂರ್ಣವೂ ನಿತ್ಯವೂ ಅಸಂಖ್ಯವೂ ಸ್ತುತ್ಯವೂ ಆದ ಗುಣಗಳ ಅನುಭವವೇ ದೇಹವಾಗಿರುವ ಈ ರಮಾಪತಿಗೆ ಸಮನಾದವನು, ಎಷ್ಟೇ ಶ್ರೇಷ್ಠನಾದರೂ, ಹಿಂದೆ ಇರಲಿಲ್ಲ, ಮುಂದೆ ಇರುವುದಿಲ್ಲ, ಈಗಲೂ ಎಲ್ಲಿಯೂ ಇಲ್ಲ.'),
        v(8, 'इति देववरस्य हरेः स्तवनं\nकृतवान्मुनिरुत्तममादरतः ।\nसुखतीर्थपदाभिहितः पठत-\nस्तदिदं भवति ध्रुवमुच्चसुखम् ॥',
          'Thus the sage called Sukhatīrtha (Ānandatīrtha) devoutly composed this excellent hymn to Hari, the best of gods. For one who recites it, the highest bliss is certain.',
          'ಹೀಗೆ ಸುಖತೀರ್ಥ (ಆನಂದತೀರ್ಥ) ಎಂಬ ಹೆಸರಿನ ಮುನಿಗಳು ದೇವಶ್ರೇಷ್ಠನಾದ ಹರಿಯ ಈ ಉತ್ತಮ ಸ್ತೋತ್ರವನ್ನು ಭಕ್ತಿಯಿಂದ ರಚಿಸಿದರು. ಇದನ್ನು ಪಠಿಸುವವನಿಗೆ ಪರಮಸುಖವು ನಿಶ್ಚಿತ.'),
        colophon('चतुर्थं'),
      ],
    },
  ],
};

export const dvadashaStotra05: Mantra = {
  id: 'dvadasha-stotra-05',
  title: 'द्वादशस्तोत्रम् — पञ्चमोऽध्यायः',
  titleEn: 'Dvadasha Stotra 5 · Vasudevaparimeya',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 5,
  deity: 'Śrī Hari (the twelve forms, Keśava to Dāmodara)',
  source: SOURCE,
  summary:
    'A dense, musical hymn that salutes the Lord in His twelve forms, Keśava, Nārāyaṇa, Mādhava, Govinda, Viṣṇu, Madhusūdana, Trivikrama, Vāmana, Śrīdhara, Hṛṣīkeśa, Padmanābha and Dāmodara, each name echoed by words of the same sound. It prays that the bondage of ignorance be cut away by knowledge.',
  summaryKn:
    'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ, ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ, ತ್ರಿವಿಕ್ರಮ, ವಾಮನ, ಶ್ರೀಧರ, ಹೃಷೀಕೇಶ, ಪದ್ಮನಾಭ, ದಾಮೋದರ ಎಂಬ ಹನ್ನೆರಡು ರೂಪಗಳಲ್ಲಿ ಭಗವಂತನಿಗೆ ವಂದಿಸುವ, ಪ್ರತಿ ನಾಮಕ್ಕೂ ಅದೇ ಧ್ವನಿಯ ಪದಗಳನ್ನು ಜೋಡಿಸಿದ ಸಂಗೀತಮಯ ಸ್ತೋತ್ರ. ಅಜ್ಞಾನದ ಬಂಧನವನ್ನು ಜ್ಞಾನದಿಂದ ಕತ್ತರಿಸು ಎಂದು ಪ್ರಾರ್ಥಿಸುತ್ತದೆ.',
  difficulty: 'advanced',
  completeness: 'complete',
  contentNote:
    'The wordplay of this stotra allows several meanings; the meanings given are the plain sense only. Variants: v2 शूरपरेश; v3 नारायणामरतारण; v4 विष्णु सृजिष्णु ग्रसिष्णु … वधिष्ण; v5 दैवतमोदन, सङ्क्रम सुक्रम; v6 सामन; v7 दारितपारक पार; v8 आनन्दसुतीर्थ. The Hṛṣīkeśatīrtha recension omits verse 2.',
  sections: [
    {
      title: 'पञ्चमं स्तोत्रम्',
      titleEn: 'Stotra 5',
      verses: [
        v(1, 'वासुदेवापरिमेयसुधामन्\nशुद्धसदोदित सुन्दरिकान्त ।\nधराधरधारण वेधुरधर्तः\nसौधृतिदीधितिवेधृविधातः ॥',
          'O Vāsudeva, immeasurable, of glorious abode; pure and ever risen, beloved of the beautiful Lakṣmī; bearer of the mountain, upholder of the wise; radiant with perfect steadiness, maker even of Brahmā the creator.',
          'ಅಳೆಯಲಾಗದವನೂ ಶ್ರೇಷ್ಠ ಧಾಮವುಳ್ಳವನೂ ಆದ ವಾಸುದೇವನೇ, ಶುದ್ಧನೂ ಸದಾ ಪ್ರಕಾಶಿಸುವವನೂ ಸುಂದರಿಯಾದ ಲಕ್ಷ್ಮಿಯ ಕಾಂತನೂ ಆದವನೇ, ಪರ್ವತವನ್ನು ಎತ್ತಿಹಿಡಿದವನೇ, ಜ್ಞಾನಿಗಳನ್ನು ಪೋಷಿಸುವವನೇ, ಉತ್ತಮ ಧೈರ್ಯದ ಕಾಂತಿಯುಳ್ಳವನೇ, ಸೃಷ್ಟಿಕರ್ತ ಬ್ರಹ್ಮನನ್ನೂ ಸೃಷ್ಟಿಸಿದವನೇ!'),
        v(2, 'अधिकबन्धं रन्धय बोधा-\nच्छिन्धि पिधानं बन्धुरमद्धा ।\nकेशव केशव शासक वन्दे\nपाशधरार्चित शूरवरेश ॥',
          'Destroy my heavy bondage; with knowledge cut away at once the covering of ignorance, attractive though it seems. O Keśava, Keśava, ruler of all, I bow to you, worshipped by Varuṇa the noose-bearer, Lord of the best of heroes.',
          'ನನ್ನ ಗಾಢವಾದ ಬಂಧನವನ್ನು ನಾಶಮಾಡು; ಮನೋಹರವಾಗಿ ಕಾಣುವ ಅಜ್ಞಾನದ ಆವರಣವನ್ನು ಜ್ಞಾನದಿಂದ ಈಗಲೇ ಕತ್ತರಿಸು. ಕೇಶವಾ, ಕೇಶವಾ, ಎಲ್ಲರನ್ನೂ ಶಾಸಿಸುವವನೇ, ಪಾಶಧಾರಿ ವರುಣನಿಂದ ಪೂಜಿತನೇ, ವೀರಶ್ರೇಷ್ಠರ ಒಡೆಯನೇ, ನಿನಗೆ ವಂದಿಸುತ್ತೇನೆ.'),
        v(3, 'नारायणामलकारण वन्दे\nकारणकारण पूर्णवरेण्य ।\nमाधव माधव साधक वन्दे\nबाधक बोधक शुद्धसमाधे ॥',
          'O Nārāyaṇa, the pure cause, I bow to you; cause of all causes, full and most worthy to be chosen. O Mādhava, Mādhava, who brings the seeker to fulfilment, I bow to you; who restrains the wicked, gives knowledge, and is reached in pure meditation.',
          'ನಿರ್ಮಲ ಕಾರಣನಾದ ನಾರಾಯಣನೇ, ಕಾರಣಗಳಿಗೂ ಕಾರಣನೇ, ಪೂರ್ಣನೇ, ವರಣೀಯನೇ, ನಿನಗೆ ವಂದನೆ. ಮಾಧವಾ, ಮಾಧವಾ, ಸಾಧಕರಿಗೆ ಸಿದ್ಧಿಯನ್ನು ಕೊಡುವವನೇ, ದುಷ್ಟರನ್ನು ತಡೆಯುವವನೇ, ಜ್ಞಾನವನ್ನು ಕೊಡುವವನೇ, ಶುದ್ಧ ಸಮಾಧಿಯಲ್ಲಿ ಕಾಣಲ್ಪಡುವವನೇ, ನಿನಗೆ ವಂದನೆ.'),
        v(4, 'गोविन्द गोविन्द पुरन्दर वन्दे\nस्कन्दसनन्दनवन्दितपाद ।\nविष्णो सृजिष्णो ग्रसिष्णो विवन्दे\nकृष्ण सदुष्णवधिष्णो सुधृष्णो ॥',
          'O Govinda, Govinda, destroyer of the demons\' cities, I bow to you, whose feet are honoured by Skanda and Sanandana. O Viṣṇu, who creates and who withdraws all, I bow deeply to you; O Kṛṣṇa, slayer of those who torment the good, ever bold.',
          'ಗೋವಿಂದಾ, ಗೋವಿಂದಾ, ದೈತ್ಯರ ಪುರಗಳನ್ನು ನಾಶಮಾಡಿದವನೇ, ಸ್ಕಂದ-ಸನಂದನರು ವಂದಿಸುವ ಪಾದಗಳುಳ್ಳವನೇ, ನಿನಗೆ ವಂದನೆ. ಸೃಷ್ಟಿಸುವವನೂ ಲಯಗೊಳಿಸುವವನೂ ಆದ ವಿಷ್ಣುವೇ, ನಿನಗೆ ವಿಶೇಷ ವಂದನೆ; ಸಜ್ಜನರನ್ನು ಪೀಡಿಸುವವರನ್ನು ಕೊಲ್ಲುವ, ಮಹಾಧೈರ್ಯಶಾಲಿಯಾದ ಕೃಷ್ಣನೇ!'),
        v(5, 'मधुसूदन दानवसादन वन्दे\nदैवतमोदित वेदितपाद ।\nत्रिविक्रम निष्क्रम विक्रम वन्दे\nसुक्रम सङ्क्रमहुङ्कृतवक्त्र ॥',
          'O Madhusūdana, crusher of the dānavas, I bow to you, whose feet gladden the gods and are made known by the Vedas. O Trivikrama, who strode forth with mighty strides, I bow to you, of graceful steps, whose mouth roared as you crossed the worlds.',
          'ದಾನವರನ್ನು ಸಂಹರಿಸಿದ ಮಧುಸೂದನನೇ, ದೇವತೆಗಳಿಗೆ ಆನಂದ ನೀಡುವ, ವೇದಗಳು ತಿಳಿಸುವ ಪಾದಗಳುಳ್ಳವನೇ, ನಿನಗೆ ವಂದನೆ. ಮಹಾಹೆಜ್ಜೆಗಳನ್ನಿಟ್ಟು ಮುನ್ನಡೆದ ತ್ರಿವಿಕ್ರಮನೇ, ಸುಂದರ ಹೆಜ್ಜೆಯವನೇ, ಲೋಕಗಳನ್ನು ದಾಟುವಾಗ ಹುಂಕಾರಗೈದ ಮುಖವುಳ್ಳವನೇ, ನಿನಗೆ ವಂದನೆ.'),
        v(6, 'वामन वामन भामन वन्दे\nसामन सीमन शामन सानो ।\nश्रीधर श्रीधर शन्धर वन्दे\nभूधर वार्धर कन्धरधारिन् ॥',
          'O Vāmana, Vāmana, radiant one, I bow to you: praised by the Sāman, the bound of all, the pacifier, the summit. O Śrīdhara, Śrīdhara, bearer of bliss, I bow to you, upholder of the earth, of the waters and of the clouds.',
          'ವಾಮನಾ, ವಾಮನಾ, ತೇಜಸ್ವಿಯೇ, ಸಾಮವೇದದಿಂದ ಸ್ತುತನೇ, ಎಲ್ಲಕ್ಕೂ ಮೇರೆಯಾದವನೇ, ಶಾಂತಿ ನೀಡುವವನೇ, ಶಿಖರಪ್ರಾಯನೇ, ನಿನಗೆ ವಂದನೆ. ಶ್ರೀಧರಾ, ಶ್ರೀಧರಾ, ಸುಖವನ್ನು ಧರಿಸಿದವನೇ, ಭೂಮಿಯನ್ನೂ ಜಲವನ್ನೂ ಮೇಘಗಳನ್ನೂ ಧರಿಸಿದವನೇ, ನಿನಗೆ ವಂದನೆ.'),
        v(7, 'हृषीकेश सुकेश परेश विवन्दे\nशरणेश कलेश बलेश सुखेश ।\nपद्मनाभ शुभोद्भव वन्दे\nसम्भृतलोकभराभर भूरे ।\nदामोदर दूरतरान्तर वन्दे\nदारितपारगपार परस्मात् ॥',
          'O Hṛṣīkeśa, Lord of the senses, of beautiful hair, supreme Lord, I bow deeply to you: Lord of refuge, of the arts, of strength, of bliss. O Padmanābha, source of all that is auspicious, I bow to you, O vast one who bears the burden of the worlds you sustain. O Dāmodara, farthest of all yet within, I bow to you, who tear down bonds and carry souls across to the far shore, beyond the highest.',
          'ಇಂದ್ರಿಯಗಳ ಒಡೆಯನಾದ ಹೃಷೀಕೇಶನೇ, ಸುಂದರ ಕೇಶವುಳ್ಳವನೇ, ಪರಮೇಶನೇ, ಆಶ್ರಯದಾತನೇ, ಕಲೆಗಳ ಒಡೆಯನೇ, ಬಲದ ಒಡೆಯನೇ, ಸುಖದ ಒಡೆಯನೇ, ನಿನಗೆ ವಿಶೇಷ ವಂದನೆ. ಶುಭಗಳಿಗೆ ಮೂಲನಾದ ಪದ್ಮನಾಭನೇ, ನೀನೇ ಪೋಷಿಸುವ ಲೋಕಗಳ ಭಾರವನ್ನು ಹೊರುವ ಮಹಾಮಹಿಮನೇ, ನಿನಗೆ ವಂದನೆ. ಎಲ್ಲಕ್ಕಿಂತ ದೂರದಲ್ಲಿದ್ದರೂ ಒಳಗೇ ಇರುವ ದಾಮೋದರನೇ, ಬಂಧನಗಳನ್ನು ಸೀಳಿ ಜೀವರನ್ನು ಆಚೆಯ ದಡಕ್ಕೆ ಸೇರಿಸುವವನೇ, ಶ್ರೇಷ್ಠರಿಗಿಂತಲೂ ಶ್ರೇಷ್ಠನೇ, ನಿನಗೆ ವಂದನೆ.'),
        v(8, 'आनन्दतीर्थमुनीन्द्रकृता\nहरिगीतिरियं परमादरतः ।\nपरलोकविलोकनसूर्यनिभा\nहरिभक्तिविवर्धनशौण्डतमा ॥',
          'This song of Hari, composed with deep devotion by Ānandatīrtha, king among sages, is like the sun that lets one see the world beyond, and is supremely able to make devotion to Hari grow.',
          'ಮುನೀಂದ್ರರಾದ ಆನಂದತೀರ್ಥರು ಪರಮಭಕ್ತಿಯಿಂದ ರಚಿಸಿದ ಈ ಹರಿಗೀತೆಯು ಪರಲೋಕವನ್ನು ಕಾಣಿಸುವ ಸೂರ್ಯನಂತಿದೆ; ಹರಿಭಕ್ತಿಯನ್ನು ಬೆಳೆಸುವುದರಲ್ಲಿ ಅತ್ಯಂತ ಸಮರ್ಥವಾಗಿದೆ.'),
        colophon('पञ्चमं'),
      ],
    },
  ],
};

export const dvadashaStotra06: Mantra = {
  id: 'dvadasha-stotra-06',
  title: 'द्वादशस्तोत्रम् — षष्ठोऽध्यायः',
  titleEn: 'Dvadasha Stotra 6 · Matsyakarupa',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 6,
  deity: 'Śrī Hari (the ten avatāras)',
  source: SOURCE,
  summary:
    'A hymn on the avatāras: Matsya, Kūrma, Varāha, Narasiṃha, Vāmana, Paraśurāma, Rāma, Kṛṣṇa, Buddha and Kalki, dwelling especially on Kṛṣṇa of Gokula. Tradition holds that this stotra and those after it were composed after the image of Śrī Kṛṣṇa at Udupi was found.',
  summaryKn:
    'ಮತ್ಸ್ಯ, ಕೂರ್ಮ, ವರಾಹ, ನರಸಿಂಹ, ವಾಮನ, ಪರಶುರಾಮ, ಶ್ರೀರಾಮ, ಶ್ರೀಕೃಷ್ಣ, ಬುದ್ಧ, ಕಲ್ಕಿ ಎಂಬ ಅವತಾರಗಳನ್ನು ಕೊಂಡಾಡುವ ಸ್ತೋತ್ರ; ಗೋಕುಲದ ಕೃಷ್ಣನನ್ನು ವಿಶೇಷವಾಗಿ ವರ್ಣಿಸುತ್ತದೆ. ಉಡುಪಿಯ ಶ್ರೀಕೃಷ್ಣನ ವಿಗ್ರಹ ದೊರೆತ ನಂತರ ಈ ಸ್ತೋತ್ರ ಮತ್ತು ಮುಂದಿನವು ರಚಿತವಾದವು ಎಂದು ಸಂಪ್ರದಾಯ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote:
    'The order of verses 4–7 follows the Sarvamūla text. The Hṛṣīkeśatīrtha recension (sanskritdocuments and dvaita.org copies) places देवकिनन्दन नन्दकुमार… in verse 4 and देवकिनन्दन सुन्दररूप रुक्मिणिवल्लभ… in verse 7, reads देवविबोधक in verse 7, and has the closing line as आनन्दतीर्थकृता हरिगाथा पापहरा शुभनित्यसुखार्था.',
  sections: [
    {
      title: 'षष्ठं स्तोत्रम्',
      titleEn: 'Stotra 6',
      verses: [
        v(1, 'मत्स्यकरूप लयोदविहारिन्\nवेदविनेत्र चतुर्मुखवन्द्य ।\nकूर्मस्वरूपक मन्दरधारिन्\nलोकविधारक देववरेण्य ॥',
          'O Lord in the form of the Fish, sporting in the waters of the deluge, guide who brought back the Vedas, worshipped by four-faced Brahmā; O Lord in the form of the Tortoise, bearer of Mount Mandara, upholder of the worlds, best among the gods.',
          'ಪ್ರಳಯಜಲದಲ್ಲಿ ವಿಹರಿಸಿದ, ವೇದಗಳನ್ನು ಮರಳಿ ತಂದ, ಚತುರ್ಮುಖ ಬ್ರಹ್ಮನಿಂದ ವಂದಿತನಾದ ಮತ್ಸ್ಯರೂಪನೇ; ಮಂದರಪರ್ವತವನ್ನು ಧರಿಸಿದ, ಲೋಕಗಳನ್ನು ಎತ್ತಿಹಿಡಿದ, ದೇವಶ್ರೇಷ್ಠನಾದ ಕೂರ್ಮರೂಪನೇ!'),
        v(2, 'सूकररूपक दानवशत्रो\nभूमिविधारक यज्ञवराङ्ग ।\nदेव नृसिंह हिरण्यकशत्रो\nसर्वभयान्तक दैवतबन्धो ॥',
          'O Lord in the form of the Boar, enemy of the dānavas, who lifted up the earth, whose noble body is sacrifice itself; O divine Narasiṃha, foe of Hiraṇyaka, ender of every fear, kinsman of the gods.',
          'ದಾನವಶತ್ರುವೇ, ಭೂಮಿಯನ್ನು ಎತ್ತಿಹಿಡಿದವನೇ, ಯಜ್ಞವೇ ಶ್ರೇಷ್ಠ ದೇಹವಾಗಿರುವ ವರಾಹರೂಪನೇ; ಹಿರಣ್ಯಕಶಿಪುವಿನ ಶತ್ರುವೇ, ಸಮಸ್ತ ಭಯಗಳನ್ನು ಕೊನೆಗಾಣಿಸುವವನೇ, ದೇವತೆಗಳ ಬಂಧುವೇ, ನರಸಿಂಹದೇವನೇ!'),
        v(3, 'वामन वामन माणववेष\nदैत्यवरान्तक कारणरूप ।\nराम भृगूद्वह सूर्जितदीप्ते\nक्षत्रकुलान्तक शम्भुवरेण्य ॥',
          'O Vāmana, Vāmana, in the guise of a young brahmacārin, who brought low the chief of the daityas, whose form is the cause of all; O Rāma, glory of the Bhṛgus, of mighty splendour, destroyer of the warrior clans, honoured by Śambhu.',
          'ವಟುವೇಷಧಾರಿಯಾದ ವಾಮನಾ, ವಾಮನಾ, ದೈತ್ಯಶ್ರೇಷ್ಠನನ್ನು (ಬಲಿಯನ್ನು) ಅಡಗಿಸಿದವನೇ, ಜಗತ್ಕಾರಣ ರೂಪನೇ; ಭೃಗುವಂಶಶ್ರೇಷ್ಠನಾದ ಪರಶುರಾಮನೇ, ಮಹಾತೇಜಸ್ವಿಯೇ, ದುಷ್ಟಕ್ಷತ್ರಿಯಕುಲವನ್ನು ನಾಶಮಾಡಿದವನೇ, ಶಂಭುವಿನಿಂದ ಆರಾಧಿತನೇ!'),
        v(4, 'राघव राघव राक्षसशत्रो\nमारुतिवल्लभ जानकिकान्त ।\nदेवकिनन्दन सुन्दररूप\nरुक्मिणिवल्लभ पाण्डवबन्धो ॥',
          'O Rāghava, Rāghava, enemy of the rākṣasas, dear to Māruti (Hanumān), beloved of Jānakī; O son of Devakī, of beautiful form, beloved of Rukmiṇī, friend of the Pāṇḍavas.',
          'ರಾಘವಾ, ರಾಘವಾ, ರಾಕ್ಷಸಶತ್ರುವೇ, ಹನುಮಂತನಿಗೆ ಪ್ರಿಯನೇ, ಜಾನಕೀಕಾಂತನೇ; ದೇವಕೀನಂದನನೇ, ಸುಂದರರೂಪನೇ, ರುಕ್ಮಿಣೀವಲ್ಲಭನೇ, ಪಾಂಡವರ ಬಂಧುವೇ!'),
        v(5, 'देवकिनन्दन नन्दकुमार\nवृन्दावनाञ्चन गोकुलचन्द्र ।\nकन्दफलाशन सुन्दररूप\nनन्दितगोकुलवन्दितपाद ॥',
          'O son of Devakī, darling of Nanda, who roamed Vṛndāvana, moon of Gokula; who ate roots and fruits (in the forest), of beautiful form, whose feet are honoured by the delighted folk of Gokula.',
          'ದೇವಕೀನಂದನನೇ, ನಂದಕುಮಾರನೇ, ವೃಂದಾವನದಲ್ಲಿ ಸಂಚರಿಸಿದವನೇ, ಗೋಕುಲದ ಚಂದ್ರನೇ; ಗೆಡ್ಡೆ-ಹಣ್ಣುಗಳನ್ನು ತಿಂದವನೇ, ಸುಂದರರೂಪನೇ, ಆನಂದಗೊಂಡ ಗೋಕುಲವಾಸಿಗಳು ವಂದಿಸುವ ಪಾದಗಳುಳ್ಳವನೇ!'),
        v(6, 'इन्द्रसुतावक नन्दकहस्त\nचन्दनचर्चित सुन्दरिनाथ ।\nइन्दीवरोदरदलनयन\nमन्दरधारिन् गोविन्द वन्दे ॥',
          'O protector of Arjuna, son of Indra, holding the sword Nandaka, anointed with sandal paste, Lord of the beautiful Lakṣmī; with eyes like the inner petals of the blue lotus, bearer of the mountain: Govinda, I bow to you.',
          'ಇಂದ್ರಪುತ್ರನಾದ ಅರ್ಜುನನನ್ನು ಕಾಪಾಡಿದವನೇ, ನಂದಕ ಖಡ್ಗವನ್ನು ಹಿಡಿದವನೇ, ಚಂದನ ಲೇಪಿತನೇ, ಸುಂದರಿಯಾದ ಲಕ್ಷ್ಮಿಯ ನಾಥನೇ, ನೀಲಕಮಲದ ಒಳದಳದಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವನೇ, ಪರ್ವತವನ್ನು ಎತ್ತಿದವನೇ, ಗೋವಿಂದಾ, ನಿನಗೆ ವಂದನೆ.'),
        v(7, 'चन्द्रशतानन कुन्दसुहास\nनन्दितदैवतानन्दसुपूर्ण ।\nदैत्यविमोहक नित्यसुखादे\nदेवसुबोधक बुद्धस्वरूप ॥',
          'O you whose face is like a hundred moons, whose smile is white as jasmine, full of the bliss that delights the gods; O Buddha, who bewildered the daityas, source of eternal bliss, who gave true understanding to the gods.',
          'ನೂರು ಚಂದ್ರರಂತಹ ಮುಖವುಳ್ಳವನೇ, ಮಲ್ಲಿಗೆಯಂತೆ ಬಿಳುಪಾದ ಮಂದಹಾಸವುಳ್ಳವನೇ, ದೇವತೆಗಳನ್ನು ಆನಂದಪಡಿಸುವ ಆನಂದದಿಂದ ಪೂರ್ಣನೇ; ದೈತ್ಯರನ್ನು ಮೋಹಗೊಳಿಸಿದ, ನಿತ್ಯಸುಖಕ್ಕೆ ಮೂಲನಾದ, ದೇವತೆಗಳಿಗೆ ಸರಿಯಾದ ಜ್ಞಾನ ನೀಡಿದ ಬುದ್ಧರೂಪನೇ!'),
        v(8, 'दुष्टकुलान्तक कल्किस्वरूप\nधर्मविवर्धन मूलयुगादे ।\nनारायणामलकारणमूर्ते\nपूर्णगुणार्णव नित्यसुबोध ॥',
          'O Kalki, destroyer of the wicked clans, who makes dharma grow again, bringing in the first age (Kṛta); O Nārāyaṇa, pure cause in embodied form, ocean of full virtues, of eternal perfect knowledge.',
          'ದುಷ್ಟಕುಲವನ್ನು ನಾಶಮಾಡುವ, ಧರ್ಮವನ್ನು ಬೆಳೆಸುವ, ಮೊದಲ ಯುಗವನ್ನು (ಕೃತಯುಗವನ್ನು) ಆರಂಭಿಸುವ ಕಲ್ಕಿರೂಪನೇ; ನಿರ್ಮಲ ಕಾರಣವೇ ಮೂರ್ತಿವೆತ್ತಂತಿರುವ ನಾರಾಯಣನೇ, ಪೂರ್ಣಗುಣಸಾಗರನೇ, ನಿತ್ಯಜ್ಞಾನಿಯೇ!'),
        v(9, 'आनन्दतीर्थमुनीन्द्रकृता हरिगाथा ।\nपापहरा शुभा नित्यसुखार्था ॥',
          'This song of Hari, composed by Ānandatīrtha, king among sages, takes away sin, is auspicious, and leads to eternal bliss.',
          'ಮುನೀಂದ್ರರಾದ ಆನಂದತೀರ್ಥರು ರಚಿಸಿದ ಈ ಹರಿಗಾಥೆಯು ಪಾಪವನ್ನು ಹೋಗಲಾಡಿಸುತ್ತದೆ, ಶುಭಕರವಾಗಿದೆ, ನಿತ್ಯಸುಖವನ್ನು ಕೊಡುತ್ತದೆ.'),
        colophon('षष्ठं'),
      ],
    },
  ],
};

const SRI = 'श्रीर्यत्कटाक्षबलवत्यजितं नमामि ॥';

export const dvadashaStotra07: Mantra = {
  id: 'dvadasha-stotra-07',
  title: 'द्वादशस्तोत्रम् — सप्तमोऽध्यायः',
  titleEn: 'Dvadasha Stotra 7 · Vishvasthiti',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 7,
  deity: 'Śrī Hari and Śrī Lakṣmī',
  source: SOURCE,
  summary:
    'Every verse ends: "I bow to the Unconquered One (Ajita), by whose glance Śrī is made mighty." By a mere fraction of Lakṣmī\'s glance Brahmā, Śiva, Indra and all the gods do their great works, and Lakṣmī herself draws that power from Hari\'s glance. Some editions call it the Śrī Stuti.',
  summaryKn:
    'ಪ್ರತಿ ಶ್ಲೋಕವೂ "ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಶ್ರೀದೇವಿಯು ಬಲಶಾಲಿನಿಯಾಗಿದ್ದಾಳೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ" ಎಂದು ಮುಗಿಯುತ್ತದೆ. ಲಕ್ಷ್ಮಿಯ ಕಟಾಕ್ಷದ ಲೇಶಮಾತ್ರದಿಂದ ಬ್ರಹ್ಮ, ಶಿವ, ಇಂದ್ರಾದಿ ದೇವತೆಗಳು ತಮ್ಮ ಮಹಾಕಾರ್ಯಗಳನ್ನು ಮಾಡುತ್ತಾರೆ; ಆ ಲಕ್ಷ್ಮಿಗೂ ಶಕ್ತಿ ಶ್ರೀಹರಿಯ ಕಟಾಕ್ಷದಿಂದಲೇ. ಕೆಲವು ಪ್ರತಿಗಳಲ್ಲಿ ಇದನ್ನು ಶ್ರೀಸ್ತುತಿ ಎನ್ನುತ್ತಾರೆ.',
  difficulty: 'advanced',
  completeness: 'complete',
  contentNote: 'Variant: v8 विष्णुवाहत्वम् (for विष्णोर्वाहत्वम्).',
  sections: [
    {
      title: 'सप्तमं स्तोत्रम्',
      titleEn: 'Stotra 7',
      verses: [
        v(1, 'विश्वस्थितिप्रलयसर्गमहाविभूति-\nवृत्तिप्रकाशनियमावृतिबन्धमोक्षाः ।\nयस्या अपाङ्गलवमात्रत ऊर्जिता सा\n' + SRI,
          'The preservation, dissolution and creation of the world, its great glories, the livelihood of beings, knowledge, control, concealment, bondage and release: all these are empowered by a mere fraction of Śrī\'s sidelong glance. I bow to the Unconquered One by whose glance that Śrī is mighty.',
          'ಜಗತ್ತಿನ ಸ್ಥಿತಿ, ಪ್ರಳಯ, ಸೃಷ್ಟಿ, ಮಹಾವಿಭೂತಿಗಳು, ಜೀವನವೃತ್ತಿ, ಜ್ಞಾನ, ನಿಯಮನ, ಆವರಣ, ಬಂಧ, ಮೋಕ್ಷ ಇವೆಲ್ಲವೂ ಯಾವ ಶ್ರೀದೇವಿಯ ಕಡೆಗಣ್ಣ ನೋಟದ ಲೇಶಮಾತ್ರದಿಂದ ಬಲಗೊಳ್ಳುತ್ತವೆಯೋ, ಆ ಶ್ರೀದೇವಿಯು ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಬಲಶಾಲಿನಿಯಾಗಿದ್ದಾಳೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(2, 'ब्रह्मेशशक्ररविधर्मशशाङ्कपूर्व-\nगीर्वाणसन्ततिरियं यदपाङ्गलेशम् ।\nआश्रित्य विश्वविजयं विसृजत्यचिन्त्या\n' + SRI,
          'Relying on a trace of her glance, this host of gods, Brahmā, Īśa, Indra, Sūrya, Yama, the Moon and the rest, achieves conquest over the universe. I bow to the Unconquered One by whose glance that inconceivable Śrī is mighty.',
          'ಬ್ರಹ್ಮ, ಈಶ, ಇಂದ್ರ, ಸೂರ್ಯ, ಯಮ, ಚಂದ್ರ ಮೊದಲಾದ ಈ ದೇವತಾಸಮೂಹವು ಯಾರ ಕಟಾಕ್ಷಲೇಶವನ್ನು ಆಶ್ರಯಿಸಿ ವಿಶ್ವವಿಜಯವನ್ನು ಸಾಧಿಸುತ್ತದೆಯೋ, ಆ ಅಚಿಂತ್ಯಳಾದ ಶ್ರೀದೇವಿಯು ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಬಲಶಾಲಿನಿಯೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(3, 'धर्मार्थकामसुमतिप्रचयाद्यशेष-\nसन्मङ्गलं विदधते यदपाङ्गलेशम् ।\nआश्रित्य तत्प्रणतसत्प्रणता अपीड्याः\n' + SRI,
          'Relying on a trace of her glance, even those who bow to the good souls who bow to her become worthy of praise and gain every blessing: dharma, wealth, desires fulfilled, wisdom and more. I bow to the Unconquered One by whose glance that Śrī is mighty.',
          'ಶ್ರೀದೇವಿಯ ಕಟಾಕ್ಷಲೇಶವನ್ನು ಆಶ್ರಯಿಸಿ, ಅವಳಿಗೆ ನಮಿಸುವ ಸಜ್ಜನರಿಗೆ ನಮಿಸುವವರೂ ಸ್ತುತ್ಯರಾಗುತ್ತಾರೆ; ಧರ್ಮ, ಅರ್ಥ, ಕಾಮ, ಸದ್ಬುದ್ಧಿ ಮೊದಲಾದ ಸಕಲ ಮಂಗಳಗಳನ್ನು ಪಡೆಯುತ್ತಾರೆ. ಆ ಶ್ರೀದೇವಿಯು ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಬಲಶಾಲಿನಿಯೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(4, 'षड्वर्गनिग्रहनिरस्तसमस्तदोषा\nध्यायन्ति विष्णुमृषयो यदपाङ्गलेशम् ।\nआश्रित्य यानपि समेत्य न याति दुःखं\n' + SRI,
          'Relying on a trace of her glance, the sages, freed of all faults by mastering the six inner enemies, meditate on Viṣṇu; and whoever approaches those sages escapes sorrow. I bow to the Unconquered One by whose glance that Śrī is mighty.',
          'ಕಾಮ-ಕ್ರೋಧಾದಿ ಆರು ಶತ್ರುಗಳನ್ನು ನಿಗ್ರಹಿಸಿ ಸಕಲ ದೋಷಗಳನ್ನು ಕಳೆದುಕೊಂಡ ಋಷಿಗಳು ಶ್ರೀದೇವಿಯ ಕಟಾಕ್ಷಲೇಶವನ್ನು ಆಶ್ರಯಿಸಿ ವಿಷ್ಣುವನ್ನು ಧ್ಯಾನಿಸುತ್ತಾರೆ; ಅಂಥವರನ್ನು ಸೇರಿದವನೂ ದುಃಖವನ್ನು ಹೊಂದುವುದಿಲ್ಲ. ಆ ಶ್ರೀದೇವಿಯು ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಬಲಶಾಲಿನಿಯೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(5, 'शेषाहिवैरिशिवशक्रमनुप्रधान-\nचित्रोरुकर्मरचनं यदपाङ्गलेशम् ।\nआश्रित्य विश्वमखिलं विदधाति धाता\n' + SRI,
          'Relying on a trace of her glance, Brahmā the creator makes the whole universe, with its wondrous and mighty works done by Śeṣa, Garuḍa the enemy of serpents, Śiva, Indra, Manu and the rest. I bow to the Unconquered One by whose glance that Śrī is mighty.',
          'ಶ್ರೀದೇವಿಯ ಕಟಾಕ್ಷಲೇಶವನ್ನು ಆಶ್ರಯಿಸಿ ಬ್ರಹ್ಮದೇವನು ಶೇಷ, ಗರುಡ, ಶಿವ, ಇಂದ್ರ, ಮನು ಮೊದಲಾದವರ ವಿಚಿತ್ರವಾದ ಮಹಾಕಾರ್ಯಗಳಿಂದ ಕೂಡಿದ ಸಮಸ್ತ ವಿಶ್ವವನ್ನು ಸೃಷ್ಟಿಸುತ್ತಾನೆ. ಆ ಶ್ರೀದೇವಿಯು ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಬಲಶಾಲಿನಿಯೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(6, 'शक्रोग्रदीधितिहिमाकरसूर्यसूनु-\nपूर्वं निहत्य निखिलं यदपाङ्गलेशम् ।\nआश्रित्य नृत्यति शिवः प्रकटोरुशक्तिः\n' + SRI,
          'Relying on a trace of her glance, Śiva, his great power revealed, dances after striking down everything, Indra, Agni of the fierce flames, the Moon, Yama son of the Sun, and all the rest. I bow to the Unconquered One by whose glance that Śrī is mighty.',
          'ಶ್ರೀದೇವಿಯ ಕಟಾಕ್ಷಲೇಶವನ್ನು ಆಶ್ರಯಿಸಿ, ಇಂದ್ರ, ಉಗ್ರಜ್ವಾಲೆಯ ಅಗ್ನಿ, ಚಂದ್ರ, ಸೂರ್ಯಪುತ್ರ ಯಮ ಮೊದಲಾದ ಎಲ್ಲವನ್ನೂ (ಪ್ರಳಯದಲ್ಲಿ) ಸಂಹರಿಸಿ, ತನ್ನ ಮಹಾಶಕ್ತಿಯನ್ನು ಪ್ರಕಟಿಸುತ್ತಾ ಶಿವನು ನರ್ತಿಸುತ್ತಾನೆ. ಆ ಶ್ರೀದೇವಿಯು ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಬಲಶಾಲಿನಿಯೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(7, 'तत्पादपङ्कजमहासनतामवाप\nशर्वादिवन्द्यचरणो यदपाङ्गलेशम् ।\nआश्रित्य नागपतिरन्यसुरैर्दुरापां\n' + SRI,
          'Relying on a trace of her glance, Śeṣa, king of serpents, whose feet are honoured even by Śarva and others, became the great seat of the Lord\'s lotus feet, a place other gods can hardly attain. I bow to the Unconquered One by whose glance that Śrī is mighty.',
          'ಶ್ರೀದೇವಿಯ ಕಟಾಕ್ಷಲೇಶವನ್ನು ಆಶ್ರಯಿಸಿ, ಶಿವಾದಿಗಳಿಂದಲೂ ವಂದಿತನಾದ ನಾಗರಾಜ ಶೇಷನು ಇತರ ದೇವತೆಗಳಿಗೆ ದುರ್ಲಭವಾದ, ಭಗವಂತನ ಪಾದಕಮಲಗಳಿಗೆ ಮಹಾಸನವಾಗುವ ಪದವಿಯನ್ನು ಪಡೆದನು. ಆ ಶ್ರೀದೇವಿಯು ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಬಲಶಾಲಿನಿಯೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(8, 'नागारिरुग्रबलपौरुष आप विष्णो-\nर्वाहत्वमुत्तमजवो यदपाङ्गलेशम् ।\nआश्रित्य शक्रमुखदेवगणैरचिन्त्यं\n' + SRI,
          'Relying on a trace of her glance, Garuḍa, enemy of serpents, of fierce strength and valour and supreme speed, became the bearer of Viṣṇu, a rank beyond the imagining of Indra and the hosts of gods. I bow to the Unconquered One by whose glance that Śrī is mighty.',
          'ಶ್ರೀದೇವಿಯ ಕಟಾಕ್ಷಲೇಶವನ್ನು ಆಶ್ರಯಿಸಿ, ಉಗ್ರಬಲ-ಪರಾಕ್ರಮಗಳುಳ್ಳ, ಅತಿವೇಗಶಾಲಿಯಾದ ಗರುಡನು ಇಂದ್ರಾದಿ ದೇವತೆಗಳಿಗೆ ಊಹಿಸಲೂ ಆಗದ ವಿಷ್ಣುವಿನ ವಾಹನಪದವಿಯನ್ನು ಪಡೆದನು. ಆ ಶ್ರೀದೇವಿಯು ಯಾರ ಕಟಾಕ್ಷದಿಂದ ಬಲಶಾಲಿನಿಯೋ ಆ ಅಜಿತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.'),
        v(9, 'आनन्दतीर्थमुनिसन्मुखपङ्कजोत्थं\nसाक्षाद्रमाहरिमनःप्रियमुत्तमार्थम् ।\nभक्त्या पठत्यजितमात्मनि सन्निधाय\nयः स्तोत्रमेतदभियाति तयोरभीष्टम् ॥',
          'This hymn, risen from the lotus mouth of the sage Ānandatīrtha, rich in meaning and dear to the hearts of Ramā and Hari themselves: whoever recites it with devotion, keeping the Unconquered One in his heart, attains what they both wish for him.',
          'ಆನಂದತೀರ್ಥಮುನಿಗಳ ಮುಖಕಮಲದಿಂದ ಹೊರಹೊಮ್ಮಿದ, ಸಾಕ್ಷಾತ್ ರಮಾ-ಹರಿಯರ ಮನಸ್ಸಿಗೆ ಪ್ರಿಯವಾದ, ಉತ್ತಮಾರ್ಥವುಳ್ಳ ಈ ಸ್ತೋತ್ರವನ್ನು ಅಜಿತನನ್ನು ಹೃದಯದಲ್ಲಿ ನೆಲೆಗೊಳಿಸಿಕೊಂಡು ಭಕ್ತಿಯಿಂದ ಪಠಿಸುವವನು ಅವರಿಬ್ಬರಿಗೂ ಪ್ರಿಯವಾದ ಫಲವನ್ನು ಪಡೆಯುತ್ತಾನೆ.'),
        colophon('सप्तमं'),
      ],
    },
  ],
};

const PRINAYAMAH = 'प्रीणयामो वासुदेवं\nदेवतामण्डलाखण्डमण्डनं प्रीणयामो वासुदेवम् ॥';
const PRINAYAMAH_EN = 'let us delight Vāsudeva, the perfect ornament of the whole assembly of gods.';
const PRINAYAMAH_KN = 'ದೇವತಾಮಂಡಲಕ್ಕೆ ಪರಿಪೂರ್ಣ ಅಲಂಕಾರವಾದ ವಾಸುದೇವನನ್ನು ಸಂತೋಷಪಡಿಸೋಣ.';
/** After a full sentence: "such a Vāsudeva", with ಅಂತಹ next to the name it qualifies. */
const PRINAYAMAH_KN_SUCH = 'ದೇವತಾಮಂಡಲಕ್ಕೆ ಪರಿಪೂರ್ಣ ಅಲಂಕಾರವಾದ ಅಂತಹ ವಾಸುದೇವನನ್ನು ಸಂತೋಷಪಡಿಸೋಣ.';
const v8 = (n: number, lines: string, en: string, kn: string) =>
  v(
    n,
    `${lines} ।\n${PRINAYAMAH}`,
    en.endsWith(',') ? `${en} ${PRINAYAMAH_EN}` : `${en} Such is He: ${PRINAYAMAH_EN}`,
    `${kn} ${kn.endsWith(',') ? PRINAYAMAH_KN : PRINAYAMAH_KN_SUCH}`,
  );

export const dvadashaStotra08: Mantra = {
  id: 'dvadasha-stotra-08',
  title: 'द्वादशस्तोत्रम् — अष्टमोऽध्यायः',
  titleEn: 'Dvadasha Stotra 8 · Vanditashesha',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 8,
  deity: 'Śrī Hari (Vāsudeva)',
  source: SOURCE,
  summary:
    'With the refrain "Let us delight Vāsudeva, the ornament of the assembly of gods", this stotra praises the Lord who creates and destroys in play, impels all beings according to their karma, is known only through the Vedas, and is worshipped by Brahmā, Rudra and Indra; all one\'s acts are to be offered to Him.',
  summaryKn:
    '"ದೇವತಾಮಂಡಲದ ಅಲಂಕಾರನಾದ ವಾಸುದೇವನನ್ನು ಸಂತೋಷಪಡಿಸೋಣ" ಎಂಬ ಪಲ್ಲವಿಯೊಂದಿಗೆ, ಲೀಲೆಯಿಂದ ಸೃಷ್ಟಿ-ಸಂಹಾರ ಮಾಡುವ, ಕರ್ಮಾನುಸಾರ ಜೀವರನ್ನು ಪ್ರೇರಿಸುವ, ವೇದಗಳಿಂದಲೇ ತಿಳಿಯಲ್ಪಡುವ, ಬ್ರಹ್ಮ-ರುದ್ರ-ಇಂದ್ರಾದಿಗಳು ಪೂಜಿಸುವ ಭಗವಂತನನ್ನು ಈ ಸ್ತೋತ್ರ ಕೊಂಡಾಡುತ್ತದೆ; ಎಲ್ಲ ಕರ್ಮಗಳನ್ನೂ ಅವನಿಗೆ ಅರ್ಪಿಸಬೇಕು ಎನ್ನುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote:
    'Some copies print the refrain only as प्रीणयामो वासुदेवं देवतामण्डलाखण्डमण्डनम्. Variants: v2 हृष्टपुष्टातिशिष्ट; v10 शर्वगुर्वादिनिर्वाण; v12 वन्दिताशेष….',
  sections: [
    {
      title: 'अष्टमं स्तोत्रम्',
      titleEn: 'Stotra 8',
      verses: [
        v8(1, 'वन्दिताशेषवन्द्योरुवृन्दारकं\nचन्दनाचर्चितोदारपीनांसकम् ।\nइन्दिराचञ्चलापाङ्गनीराजितं\nमन्दरोद्धारिवृत्तोद्भुजाभोगिनम्',
          'He is worshipped by the great hosts of gods whom all others worship; His broad, strong shoulders are anointed with sandal paste; He is lit up, as if with waving lamps, by the restless sidelong glances of Indirā; His round, raised arms lifted Mount Mandara.',
          'ಎಲ್ಲರಿಂದ ವಂದಿತರಾದ ದೇವತಾಸಮೂಹವೂ ಅವನನ್ನು ವಂದಿಸುತ್ತದೆ; ಅವನ ವಿಶಾಲ ಬಲಿಷ್ಠ ಭುಜಗಳು ಚಂದನಲೇಪಿತವಾಗಿವೆ; ಲಕ್ಷ್ಮಿಯ ಚಂಚಲ ಕಟಾಕ್ಷಗಳು ಅವನಿಗೆ ಆರತಿ ಬೆಳಗುತ್ತವೆ; ಮಂದರಪರ್ವತವನ್ನು ಎತ್ತಿದ ದುಂಡಾದ ಎತ್ತರದ ಭುಜಗಳು ಅವನವು.'),
        v8(2, 'सृष्टिसंहारलीलाविलासाततं\nपुष्टषाड्गुण्यसद्विग्रहोल्लासिनम् ।\nदुष्टनिश्शेषसंहारकर्मोद्यतं\nहृष्टपुष्टानुशिष्टप्रजासंश्रयम्',
          'He is ever engaged in the sport of creation and destruction; He shines in a perfect form full of the six divine excellences; He is intent on destroying the wicked completely; He is the refuge of His people, whom He keeps joyful, nourished and well guided.',
          'ಸೃಷ್ಟಿ-ಸಂಹಾರಗಳೆಂಬ ಲೀಲಾವಿಲಾಸದಲ್ಲಿ ಸದಾ ತೊಡಗಿರುವ, ಷಡ್ಗುಣಪೂರ್ಣವಾದ ದಿವ್ಯ ವಿಗ್ರಹದಿಂದ ಶೋಭಿಸುವ, ದುಷ್ಟರನ್ನು ನಿಶ್ಶೇಷವಾಗಿ ಸಂಹರಿಸಲು ಸಿದ್ಧನಾದ, ಸಂತೋಷದಿಂದ ಪುಷ್ಟರಾದ ಸುಶಿಕ್ಷಿತ ಪ್ರಜೆಗಳಿಗೆ ಆಶ್ರಯನಾದವನು.'),
        v8(3, 'उन्नतप्रार्थिताशेषसंसाधकं\nसन्नतालौकिकानन्ददश्रीपदम् ।\nभिन्नकर्माशयप्राणिसम्प्रेरकं\nतन्न किं नेति विद्वत्सु मीमांसितम्',
          'He fulfils every prayer of the exalted; His glorious feet give unearthly bliss to those who bow; He impels all beings, each with their different karma and dispositions; the wise inquire into Him, asking "Is it this, or not?"',
          'ಉತ್ತಮರ ಎಲ್ಲ ಪ್ರಾರ್ಥನೆಗಳನ್ನೂ ಸಿದ್ಧಿಸುವ, ನಮಿಸುವವರಿಗೆ ಅಲೌಕಿಕ ಆನಂದವನ್ನು ಕೊಡುವ ಶ್ರೀಪಾದಗಳುಳ್ಳ, ಬೇರೆ ಬೇರೆ ಕರ್ಮ-ಸ್ವಭಾವಗಳುಳ್ಳ ಪ್ರಾಣಿಗಳನ್ನು ಪ್ರೇರಿಸುವ, "ಅದು ಹೀಗೆಯೋ ಅಲ್ಲವೋ" ಎಂದು ಜ್ಞಾನಿಗಳು ವಿಚಾರಿಸುವ ಭಗವಂತನು.'),
        v8(4, 'विप्रमुख्यैः सदा वेदवादोन्मुखैः\nसुप्रतापैः क्षितीशेश्वरैश्चार्चितम् ।\nअप्रतर्क्योरुसंविद्गुणं निर्मलं\nसप्रकाशाजरानन्दरूपं परम्',
          'He is worshipped always by the foremost brāhmaṇas devoted to the Vedas and by mighty emperors; His vast knowledge and virtues are beyond reasoning; He is spotless, supreme, His form self-luminous, ageless bliss.',
          'ವೇದಾಧ್ಯಯನದಲ್ಲಿ ತೊಡಗಿರುವ ಶ್ರೇಷ್ಠ ಬ್ರಾಹ್ಮಣರಿಂದಲೂ ಪ್ರತಾಪಶಾಲಿ ಚಕ್ರವರ್ತಿಗಳಿಂದಲೂ ಸದಾ ಪೂಜಿತನಾದ, ತರ್ಕಕ್ಕೆ ಮೀರಿದ ಅಪಾರ ಜ್ಞಾನ-ಗುಣಗಳುಳ್ಳ, ನಿರ್ಮಲನಾದ, ಸ್ವಪ್ರಕಾಶವೂ ಜರಾರಹಿತವೂ ಆದ ಆನಂದರೂಪನಾದ ಪರಮಾತ್ಮನು.'),
        v8(5, 'अत्ययो यस्य केनापि न क्वापि हि\nप्रत्ययो यद्गुणेषूत्तमानां परः ।\nसत्यसङ्कल्प एको वरेण्यो वशी\nमत्यनूनैः सदा वेदवादोदितः',
          'No one can ever overcome Him anywhere; the best of souls have the firmest faith in His virtues; His will is always true; He is the One, most worthy of choice, the controller; He is ever proclaimed by the Vedas through those of perfect understanding.',
          'ಯಾರಿಂದಲೂ ಎಲ್ಲಿಯೂ ಅವನನ್ನು ಮೀರಲಾಗದು; ಉತ್ತಮರಿಗೆ ಅವನ ಗುಣಗಳಲ್ಲಿ ದೃಢವಾದ ನಂಬಿಕೆ; ಅವನು ಸತ್ಯಸಂಕಲ್ಪನು, ಅದ್ವಿತೀಯನು, ವರಣೀಯನು, ಎಲ್ಲರನ್ನೂ ನಿಯಮಿಸುವವನು; ಪೂರ್ಣಜ್ಞಾನಿಗಳು ವೇದವಾಕ್ಯಗಳಿಂದ ಸದಾ ಅವನನ್ನೇ ಸಾರುತ್ತಾರೆ.'),
        v8(6, 'पश्यतां दुःखसन्ताननिर्मूलनं\nदृश्यतां दृश्यतामित्यजेशार्चितम् ।\nनश्यतां दूरगं सर्वदाप्यात्मगं\nवश्यतां स्वेच्छया सज्जनेष्वागतम्',
          'He uproots the chain of sorrows of those who see Him; Brahmā and Śiva worship Him, longing "May He be seen, may He be seen!"; He is far from those who perish, though He is always within them; of His own will He comes under the sway of the good.',
          'ತನ್ನನ್ನು ಕಾಣುವವರ ದುಃಖಪರಂಪರೆಯನ್ನು ಬೇರುಸಹಿತ ಕಿತ್ತುಹಾಕುವ, "ಕಾಣಲಿ, ಕಾಣಲಿ" ಎಂದು ಬ್ರಹ್ಮ-ಶಿವರು ಹಂಬಲಿಸಿ ಪೂಜಿಸುವ, ನಾಶಹೊಂದುವವರಿಗೆ ಸದಾ ಒಳಗಿದ್ದರೂ ದೂರದಲ್ಲಿರುವ, ತನ್ನ ಇಚ್ಛೆಯಿಂದಲೇ ಸಜ್ಜನರ ವಶನಾಗುವ ಭಗವಂತನು.'),
        v8(7, 'अग्रजं यः ससर्जाजमग्र्याकृतिं\nविग्रहो यस्य सर्वे गुणा एव हि ।\nउग्र आद्योऽपि यस्यात्मजाग्र्यात्मजः\nसद्गृहीतः सदा यः परं दैवतम्',
          'He created first-born Brahmā, of the foremost form; His body is made wholly of virtues; even fierce Rudra, the first among the gods, is the son of His eldest son; the good always hold Him to be the highest deity.',
          'ಶ್ರೇಷ್ಠ ರೂಪನಾದ ಅಗ್ರಜ ಬ್ರಹ್ಮನನ್ನು ಸೃಷ್ಟಿಸಿದವನು; ಅವನ ದೇಹವು ಸಂಪೂರ್ಣ ಗುಣಮಯ; ಉಗ್ರನಾದ ರುದ್ರನೂ ಅವನ ಹಿರಿಯ ಮಗನ ಮಗನು; ಸಜ್ಜನರು ಸದಾ ಅವನನ್ನೇ ಪರದೈವವೆಂದು ಸ್ವೀಕರಿಸುತ್ತಾರೆ.'),
        v8(8, 'अच्युतो यो गुणैर्नित्यमेवाखिलैः\nप्रच्युतोऽशेषदोषैः सदा पूर्तितः ।\nउच्यते सर्ववेदोरुवादैरजः\nस्वर्चितो ब्रह्मरुद्रेन्द्रपूर्वैः सदा',
          'He never falls from any of His virtues, and is ever free of every fault, being always full. The unborn One is proclaimed by the great declarations of all the Vedas and is always worshipped well by Brahmā, Rudra, Indra and the rest.',
          'ತನ್ನ ಸಮಸ್ತ ಗುಣಗಳಿಂದ ಎಂದೂ ಚ್ಯುತನಾಗದ, ಪರಿಪೂರ್ಣನಾಗಿರುವುದರಿಂದ ಸಕಲ ದೋಷಗಳಿಂದ ಸದಾ ದೂರನಾದ, ಎಲ್ಲ ವೇದಗಳ ಮಹಾವಾಕ್ಯಗಳು ಸಾರುವ, ಬ್ರಹ್ಮ-ರುದ್ರ-ಇಂದ್ರಾದಿಗಳಿಂದ ಸದಾ ಚೆನ್ನಾಗಿ ಪೂಜಿತನಾದ ಜನ್ಮರಹಿತನು.'),
        v8(9, 'धार्यते येन विश्वं सदाजादिकं\nवार्यतेऽशेषदुःखं निजध्यायिनाम् ।\nपार्यते सर्वमन्यैर्न यत्पार्यते\nकार्यते चाखिलं सर्वभूतैः सदा',
          'By Him the whole universe, from Brahmā down, is always upheld; by Him every sorrow of those who meditate on Him is warded off; He accomplishes everything, while no one else can accomplish anything (without Him); and by Him all beings are made to do all that they do.',
          'ಬ್ರಹ್ಮಾದಿ ಸಮಸ್ತ ವಿಶ್ವವನ್ನು ಸದಾ ಧರಿಸುವವನು; ತನ್ನನ್ನು ಧ್ಯಾನಿಸುವವರ ಸಕಲ ದುಃಖವನ್ನು ತಡೆಯುವವನು; ಇತರರಿಂದ ಸಾಧಿಸಲಾಗದ ಎಲ್ಲವನ್ನೂ ಸಾಧಿಸುವವನು; ಎಲ್ಲ ಜೀವಿಗಳಿಂದ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನೂ ಮಾಡಿಸುವವನು.'),
        v8(10, 'सर्वपापानि यत्संस्मृतेः सङ्क्षयं\nसर्वदा यान्ति भक्त्या विशुद्धात्मनाम् ।\nशर्वगुर्वादिगीर्वाणसंस्थानदः\nकुर्वते कर्म यत्प्रीतये सज्जनाः',
          'By remembering Him with devotion, all the sins of the pure-hearted are always destroyed; He grants their stations to the gods, Śarva, Bṛhaspati and the rest; and the good do all their works to please Him.',
          'ಭಕ್ತಿಯಿಂದ ಅವನನ್ನು ಸ್ಮರಿಸುವುದರಿಂದ ಶುದ್ಧಮನಸ್ಕರ ಎಲ್ಲ ಪಾಪಗಳೂ ಸದಾ ನಾಶವಾಗುತ್ತವೆ; ಶಿವ, ಬೃಹಸ್ಪತಿ ಮೊದಲಾದ ದೇವತೆಗಳಿಗೆ ಅವರವರ ಸ್ಥಾನವನ್ನು ಕೊಡುವವನು ಅವನು; ಸಜ್ಜನರು ಅವನ ಪ್ರೀತಿಗಾಗಿಯೇ ಕರ್ಮ ಮಾಡುತ್ತಾರೆ.'),
        v8(11, 'अक्षयं कर्म यस्मिन्परे स्वर्पितं\nप्रक्षयं यान्ति दुःखानि यन्नामतः ।\nअक्षरो योऽजरः सर्वदैवामृतः\nकुक्षिगं यस्य विश्वं सदाजादिकम्',
          'Work well offered to Him, the Supreme, becomes imperishable; by His name sorrows are destroyed; He is imperishable, ageless and ever immortal; the whole universe, from Brahmā down, always rests in His belly.',
          'ಪರಮಾತ್ಮನಾದ ಅವನಿಗೆ ಚೆನ್ನಾಗಿ ಅರ್ಪಿಸಿದ ಕರ್ಮವು ಅಕ್ಷಯವಾಗುತ್ತದೆ; ಅವನ ನಾಮದಿಂದ ದುಃಖಗಳು ನಾಶವಾಗುತ್ತವೆ; ಅವನು ಅಕ್ಷರನು, ಜರಾರಹಿತನು, ಸದಾ ಅಮೃತನು; ಬ್ರಹ್ಮಾದಿ ಸಮಸ್ತ ವಿಶ್ವವೂ ಸದಾ ಅವನ ಉದರದಲ್ಲಿದೆ.'),
        v8(12, 'नन्दितीर्थोरुसन्नामिनो नन्दिनः\nसन्दधानाः सदानन्ददेवे मतिम् ।\nमन्दहासारुणापाङ्गदत्तोन्नतिं\nनन्दिताशेषदेवादिवृन्दं सदा',
          'We are the joyful followers of the one who bears the great name Nanditīrtha (Ānandatīrtha). Fixing our minds on the ever-blissful Lord, who grants exaltation with His gentle smile and rosy sidelong glance and always gladdens the whole host of gods,',
          'ನಾವು ನಂದಿತೀರ್ಥ (ಆನಂದತೀರ್ಥ) ಎಂಬ ಶ್ರೇಷ್ಠ ನಾಮಧಾರಿಗಳ ಆನಂದಭರಿತ ಅನುಯಾಯಿಗಳು. ಮಂದಹಾಸ ಮತ್ತು ಕೆಂಪಾದ ಕಟಾಕ್ಷದಿಂದ ಉನ್ನತಿಯನ್ನು ಕೊಡುವ, ಸಮಸ್ತ ದೇವತಾಸಮೂಹವನ್ನು ಸದಾ ಆನಂದಪಡಿಸುವ ಸದಾನಂದ ದೇವನಲ್ಲಿ ಮನಸ್ಸನ್ನು ನೆಲೆಗೊಳಿಸಿ,'),
        colophon('अष्टमं'),
      ],
    },
  ],
};

const RAMA = 'शुभतमकथाशय परम सदोदित\nजगदेककारण राम रमारमण ॥';
const RAMA_EN =
  'O you whose stories are most auspicious, supreme, ever risen, sole cause of the world, Rāma, beloved of Ramā!';
const RAMA_KN =
  'ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ಕಥೆಗಳುಳ್ಳವನೇ, ಪರಮನೇ, ಸದಾ ಪ್ರಕಾಶಿಸುವವನೇ, ಜಗತ್ತಿಗೆ ಏಕಮಾತ್ರ ಕಾರಣನೇ, ರಮಾರಮಣನಾದ ರಾಮನೇ!';
const v9 = (n: number, lines: string, en: string, kn: string) =>
  v(n, `${lines} ।\n${RAMA}`, `${en} ${RAMA_EN}`, `${kn} ${RAMA_KN}`);

export const dvadashaStotra09: Mantra = {
  id: 'dvadasha-stotra-09',
  title: 'द्वादशस्तोत्रम् — नवमोऽध्यायः',
  titleEn: 'Dvadasha Stotra 9 · Atimatatamogiri',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 9,
  deity: 'Śrī Hari (Rāma, Ramāramaṇa)',
  source: SOURCE,
  summary:
    'A prayer for refuge, "be my refuge", addressed to the Lord in each of His avatāras from Matsya to Kalki, with the refrain hailing Him as Rāma, beloved of Ramā, the sole cause of the world.',
  summaryKn:
    'ಮತ್ಸ್ಯದಿಂದ ಕಲ್ಕಿಯವರೆಗಿನ ಪ್ರತಿಯೊಂದು ಅವತಾರದಲ್ಲಿಯೂ ಭಗವಂತನನ್ನು "ನನಗೆ ಶರಣಾಗು" ಎಂದು ಪ್ರಾರ್ಥಿಸುವ ಸ್ತೋತ್ರ. ಜಗತ್ತಿಗೆ ಏಕಮಾತ್ರ ಕಾರಣನಾದ ರಮಾರಮಣ ರಾಮನೆಂದು ಪಲ್ಲವಿಯಲ್ಲಿ ಕೊಂಡಾಡುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote: 'Variant: v13 दितिसुतविमोहन.',
  sections: [
    {
      title: 'नवमं स्तोत्रम्',
      titleEn: 'Stotra 9',
      verses: [
        v9(1, 'अतिमततमोगिरिसमितिविभेदन\nपितामहभूतिद गुणगणनिलय',
          'O you who shatter the mountain ranges of darkness, the false doctrines; who give Brahmā his glory; abode of all virtues!',
          'ಅತಿಮತಗಳೆಂಬ (ದುರ್ಮತಗಳೆಂಬ) ಅಂಧಕಾರಪರ್ವತಗಳ ಸಮೂಹವನ್ನು ಭೇದಿಸುವವನೇ, ಬ್ರಹ್ಮನಿಗೆ ಐಶ್ವರ್ಯವನ್ನು ಕೊಡುವವನೇ, ಗುಣಗಳ ಆಗರನೇ!'),
        v9(2, 'विधिभवमुखसुरसततसुवन्दित\nरमामनोवल्लभ भव मम शरणम्',
          'O you who are always worshipped by Brahmā, Śiva and the gods, darling of Ramā\'s heart, be my refuge!',
          'ಬ್ರಹ್ಮ-ಶಿವಾದಿ ದೇವತೆಗಳಿಂದ ಸದಾ ವಂದಿತನೇ, ರಮೆಯ ಮನಸ್ಸಿಗೆ ಪ್ರಿಯನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(3, 'अगणितगुणगणमयशरीर हे\nविगतगुणेतर भव मम शरणम्',
          'O you whose body is made of countless virtues, in whom there is nothing but virtue, be my refuge!',
          'ಅಸಂಖ್ಯ ಗುಣಗಳಿಂದಲೇ ಕೂಡಿದ ದೇಹವುಳ್ಳವನೇ, ದೋಷಗಳೇ ಇಲ್ಲದವನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(4, 'अपरिमितसुखनिधिविमलसुदेह हे\nविगतसुखेतर भव मम शरणम्',
          'O you whose pure and lovely body is a treasure of boundless bliss, in whom there is no trace of sorrow, be my refuge!',
          'ಅಪರಿಮಿತ ಸುಖದ ನಿಧಿಯಾದ ನಿರ್ಮಲ ಸುಂದರ ದೇಹವುಳ್ಳವನೇ, ದುಃಖವೇ ಇಲ್ಲದವನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(5, 'प्रचलितलयजलविहरण शाश्वत\nसुखमय मीन हे भव मम शरणम्',
          'O eternal Fish, full of bliss, sporting in the surging waters of the deluge, be my refuge!',
          'ಉಕ್ಕುವ ಪ್ರಳಯಜಲದಲ್ಲಿ ವಿಹರಿಸುವ ಶಾಶ್ವತ ಸುಖಮಯ ಮತ್ಸ್ಯನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(6, 'सुरदितिजसुबलविलुलितमन्दर-\nधर परकूर्म हे भव मम शरणम्',
          'O supreme Tortoise, who bore Mount Mandara as it was churned by the mighty gods and daityas, be my refuge!',
          'ದೇವ-ದೈತ್ಯರ ಮಹಾಬಲದಿಂದ ಕಡೆಯಲ್ಪಟ್ಟ ಮಂದರಪರ್ವತವನ್ನು ಧರಿಸಿದ ಶ್ರೇಷ್ಠ ಕೂರ್ಮನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(7, 'सगिरिवरधरातलवह सुसूकर\nपरम विबोध हे भव मम शरणम्',
          'O noble Boar, who bore up the earth with its great mountains, supreme, all-knowing, be my refuge!',
          'ಮಹಾಪರ್ವತಗಳ ಸಹಿತ ಭೂಮಂಡಲವನ್ನು ಹೊತ್ತ ಸುಂದರ ವರಾಹನೇ, ಪರಮನೇ, ಜ್ಞಾನಸ್ವರೂಪನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(8, 'अतिबलदितिसुतहृदयविभेदन\nजय नृहरेऽमल भव मम शरणम्',
          'O you who tore open the heart of the mighty son of Diti, victory to you, pure Narahari; be my refuge!',
          'ಮಹಾಬಲಶಾಲಿಯಾದ ದಿತಿಪುತ್ರನ (ಹಿರಣ್ಯಕಶಿಪುವಿನ) ಎದೆಯನ್ನು ಸೀಳಿದವನೇ, ನಿರ್ಮಲನಾದ ನರಹರಿಯೇ, ಜಯವಾಗಲಿ; ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(9, 'बलिमुखदितिसुतविजयविनाशन\nजगदवनाजित भव मम शरणम्',
          'O you who undid the conquests of Bali and the other sons of Diti, protector of the world, unconquered one (Vāmana), be my refuge!',
          'ಬಲಿಯೇ ಮೊದಲಾದ ದೈತ್ಯರ ವಿಜಯವನ್ನು ನಾಶಮಾಡಿದ, ಜಗತ್ತನ್ನು ರಕ್ಷಿಸುವ ಅಜಿತನೇ (ವಾಮನನೇ), ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(10, 'अविजितकुनृपतिसमितिविखण्डन\nरमावर वीरप भव मम शरणम्',
          'O you who cut down the hosts of wicked kings no one else could conquer (Paraśurāma), beloved of Ramā, protector of heroes, be my refuge!',
          'ಯಾರಿಂದಲೂ ಜಯಿಸಲಾಗದ ದುಷ್ಟರಾಜರ ಸಮೂಹವನ್ನು ಖಂಡಿಸಿದವನೇ (ಪರಶುರಾಮನೇ), ರಮಾಪತಿಯೇ, ವೀರರನ್ನು ಕಾಪಾಡುವವನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(11, 'खरतरनिशिचरदहन परामृत\nरघुवर मानद भव मम शरणम्',
          'O consumer of the fierce night-roaming rākṣasas, supreme nectar, best of the Raghus, giver of honour, be my refuge!',
          'ಕ್ರೂರರಾದ ರಾಕ್ಷಸರನ್ನು ಸುಟ್ಟುಹಾಕಿದವನೇ, ಪರಮಾಮೃತನೇ, ರಘುಶ್ರೇಷ್ಠನೇ, ಗೌರವ ನೀಡುವವನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(12, 'सुललिततनुवर वरद महाबल\nयदुवर पार्थप भव मम शरणम्',
          'O you of most graceful form, giver of boons, of great strength, best of the Yadus, protector of Pārtha, be my refuge!',
          'ಅತಿಸುಂದರ ದೇಹವುಳ್ಳವನೇ, ವರದನೇ, ಮಹಾಬಲನೇ, ಯದುಶ್ರೇಷ್ಠನೇ, ಪಾರ್ಥನನ್ನು (ಅರ್ಜುನನನ್ನು) ಕಾಪಾಡಿದವನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(13, 'दितिसुतमोहन विमलविबोधन\nपरगुण बुद्ध हे भव मम शरणम्',
          'O Buddha, who deluded the sons of Diti and gave pure understanding (to the good), of supreme virtues, be my refuge!',
          'ದೈತ್ಯರನ್ನು ಮೋಹಗೊಳಿಸಿದ, (ಸಜ್ಜನರಿಗೆ) ನಿರ್ಮಲ ಜ್ಞಾನ ನೀಡಿದ, ಶ್ರೇಷ್ಠಗುಣಗಳುಳ್ಳ ಬುದ್ಧನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(14, 'कलिमलहुतवह सुभग महोत्सव\nशरणद कल्कीश हे भव मम शरणम्',
          'O Lord Kalki, fire that burns away the filth of Kali, lovely one, great festival (of the good), giver of refuge, be my refuge!',
          'ಕಲಿಯುಗದ ಕೊಳೆಯನ್ನು ಸುಡುವ ಅಗ್ನಿಯೇ, ಸುಂದರನೇ, ಮಹೋತ್ಸವಸ್ವರೂಪನೇ, ಶರಣು ನೀಡುವ ಕಲ್ಕಿದೇವನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(15, 'अखिलजनिविलय परसुखकारण\nपर पुरुषोत्तम भव मम शरणम्',
          'O cause of the birth and dissolution of all, and of supreme bliss; supreme Puruṣottama, be my refuge!',
          'ಸಮಸ್ತದ ಹುಟ್ಟು-ಲಯಗಳಿಗೂ ಪರಮಸುಖಕ್ಕೂ ಕಾರಣನೇ, ಪರಮನಾದ ಪುರುಷೋತ್ತಮನೇ, ನನಗೆ ಆಶ್ರಯನಾಗು!'),
        v9(16, 'इति तव नुतिवरसततरतेर्भव\nसुशरणमुरुसुखतीर्थमुनेर्भगवन्',
          'O Lord, be the sure refuge of the sage Urusukhatīrtha (Ānandatīrtha), who ever delights in this excellent praise of you!',
          'ಭಗವಂತನೇ, ಹೀಗೆ ನಿನ್ನ ಶ್ರೇಷ್ಠ ಸ್ತುತಿಯಲ್ಲಿ ಸದಾ ರಮಿಸುವ ಉರುಸುಖತೀರ್ಥ (ಆನಂದತೀರ್ಥ) ಮುನಿಗೆ ಉತ್ತಮ ಆಶ್ರಯನಾಗು!'),
        colophon('नवमं'),
      ],
    },
  ],
};

const KARUNA = 'करुणापूर्ण वरप्रद चरितं ज्ञापय मे ते ॥';
const KARUNA_EN = 'O you who are full of compassion, giver of boons, make your deeds known to me.';
const KARUNA_KN = 'ಕರುಣಾಪೂರ್ಣನೇ, ವರಪ್ರದನೇ, ನಿನ್ನ ಚರಿತೆಯನ್ನು ನನಗೆ ತಿಳಿಯಪಡಿಸು.';
const v10 = (n: number, line: string, en: string, kn: string) =>
  v(n, `${line} ।\n${KARUNA}`, `${en} ${KARUNA_EN}`, `${kn} ${KARUNA_KN}`);

export const dvadashaStotra10: Mantra = {
  id: 'dvadasha-stotra-10',
  title: 'द्वादशस्तोत्रम् — दशमोऽध्यायः',
  titleEn: 'Dvadasha Stotra 10 · Ava Nah Shripati',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 10,
  deity: 'Śrī Hari',
  source: SOURCE,
  summary:
    'With the refrain "O compassionate giver of boons, make your deeds known to me", the hymn prays for protection and devotion and then describes the Lord\'s form from the feet up: feet, nails, shanks, thighs, garment, navel, belly, chest, arms, face and glance.',
  summaryKn:
    '"ಕರುಣಾಪೂರ್ಣನೇ, ವರಪ್ರದನೇ, ನಿನ್ನ ಚರಿತೆಯನ್ನು ನನಗೆ ತಿಳಿಸು" ಎಂಬ ಪಲ್ಲವಿಯೊಂದಿಗೆ ರಕ್ಷಣೆ ಮತ್ತು ಭಕ್ತಿಯನ್ನು ಬೇಡಿ, ನಂತರ ಭಗವಂತನ ರೂಪವನ್ನು ಪಾದದಿಂದ ಮೇಲಕ್ಕೆ ವರ್ಣಿಸುತ್ತದೆ: ಪಾದ, ಉಗುರು, ಕಣಕಾಲು, ತೊಡೆ, ವಸ್ತ್ರ, ನಾಭಿ, ಉದರ, ಎದೆ, ಭುಜ, ಮುಖ, ನೋಟ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote:
    'Variants: v3, v18 …विनाशन; v10 कजतूणी…; v15 …सुन्दरिगृह…; v16 चक्रधर…; v19 …पदैषिन्. The meanings of v1, v10 and v12 are tentative.',
  sections: [
    {
      title: 'दशमं स्तोत्रम्',
      titleEn: 'Stotra 10',
      verses: [
        v10(1, 'अव नः श्रीपतिरप्रतिरधिकेशादिभवादे',
          'Protect us, Lord of Śrī, without equal, O first source of Brahmā, Śiva and the other lords!',
          'ಶ್ರೀಪತಿಯೇ, ಸಾಟಿಯಿಲ್ಲದವನೇ, ಬ್ರಹ್ಮ-ಶಿವಾದಿ ಒಡೆಯರ ಹುಟ್ಟಿಗೂ ಮೂಲಕಾರಣನೇ, ನಮ್ಮನ್ನು ಕಾಪಾಡು!'),
        v10(2, 'सुरवन्द्याधिप सद्वर भरिताशेषगुणालम्',
          'O sovereign worshipped by the gods, best of the good, completely filled with every virtue!',
          'ದೇವತೆಗಳು ವಂದಿಸುವ ಒಡೆಯನೇ, ಸಜ್ಜನಶ್ರೇಷ್ಠನೇ, ಸಮಸ್ತ ಗುಣಗಳಿಂದ ಪರಿಪೂರ್ಣನೇ!'),
        v10(3, 'सकलध्वान्तविनाशक परमानन्दसुधाहो',
          'O destroyer of all darkness, O nectar of supreme bliss!',
          'ಸಕಲ ಅಜ್ಞಾನಾಂಧಕಾರವನ್ನು ನಾಶಮಾಡುವವನೇ, ಪರಮಾನಂದದ ಅಮೃತಸ್ವರೂಪನೇ!'),
        v10(4, 'त्रिजगत्पोत सदार्चितचरणाशापतिधातो',
          'O boat that carries the three worlds across, whose feet are always worshipped by the guardians of the quarters and by Brahmā!',
          'ಮೂರು ಲೋಕಗಳನ್ನು ದಾಟಿಸುವ ದೋಣಿಯೇ, ದಿಕ್ಪಾಲಕರಿಂದಲೂ ಬ್ರಹ್ಮನಿಂದಲೂ ಸದಾ ಪೂಜಿತವಾದ ಪಾದಗಳುಳ್ಳವನೇ!'),
        v10(5, 'त्रिगुणातीत विधारक परितो देहि सुभक्तिम्',
          'O you who are beyond the three guṇas, upholder of all, grant me true devotion in full!',
          'ತ್ರಿಗುಣಾತೀತನೇ, ಎಲ್ಲವನ್ನೂ ಧರಿಸುವವನೇ, ನನಗೆ ಪರಿಪೂರ್ಣವಾದ ಉತ್ತಮ ಭಕ್ತಿಯನ್ನು ಕೊಡು!'),
        v10(6, 'शरणं कारणभावन भव मे तात सदालम्',
          'O cause and sustainer of all, dear father, be always and fully my refuge!',
          'ಕಾರಣನೇ, ಪೋಷಕನೇ, ತಂದೆಯೇ, ಸದಾ ಸಂಪೂರ್ಣವಾಗಿ ನನಗೆ ಶರಣನಾಗು!'),
        v10(7, 'मरणप्राणद पालक जगदीशाव सुभक्तिम्',
          'O giver of death and of life, protector, Lord of the world, guard my devotion!',
          'ಮರಣವನ್ನೂ ಪ್ರಾಣವನ್ನೂ ಕೊಡುವವನೇ, ಪಾಲಕನೇ, ಜಗದೀಶನೇ, ನನ್ನ ಭಕ್ತಿಯನ್ನು ಕಾಪಾಡು!'),
        v10(8, 'तरुणादित्यसवर्णकचरणाब्जामलकीर्ते',
          'O you whose lotus feet have the colour of the rising sun, of spotless fame!',
          'ಉದಯಿಸುವ ಸೂರ್ಯನ ಬಣ್ಣದ ಪಾದಕಮಲಗಳುಳ್ಳವನೇ, ನಿರ್ಮಲ ಕೀರ್ತಿಯುಳ್ಳವನೇ!'),
        v10(9, 'सलिलप्रोत्थसरागकमणिवर्णोच्चनखादे',
          'O you whose raised toenails and the rest glow with the colour of red lotuses and rubies!',
          'ಕೆಂಪು ಕಮಲ ಮತ್ತು ಮಾಣಿಕ್ಯದ ಬಣ್ಣದಂತೆ ಹೊಳೆಯುವ ಉಬ್ಬಿದ ಉಗುರುಗಳುಳ್ಳವನೇ!'),
        v10(10, 'खजतूणीनिभपावनवरजङ्घामितशक्ते',
          'O you of boundless power, whose pure and lovely shanks are shaped like a quiver!',
          'ಬತ್ತಳಿಕೆಯಂತೆ ಸುಂದರವಾದ ಪಾವನ ಕಣಕಾಲುಗಳುಳ್ಳವನೇ, ಅಪರಿಮಿತ ಶಕ್ತನೇ!'),
        v10(11, 'इभहस्तप्रभशोभनपरमोरुस्थरमाले',
          'O you whose splendid thighs are like an elephant\'s trunk, on which Ramā sits!',
          'ಆನೆಯ ಸೊಂಡಿಲಿನಂತೆ ಶೋಭಿಸುವ ಶ್ರೇಷ್ಠ ತೊಡೆಗಳುಳ್ಳವನೇ, ಆ ತೊಡೆಯ ಮೇಲೆ ರಮಾದೇವಿ ಕುಳಿತಿರುವವನೇ!'),
        v10(12, 'असनोत्फुल्लसुपुष्पकसमवर्णावरणान्ते',
          'O you whose garment\'s hem is the colour of the full-blown flowers of the asana tree!',
          'ಅರಳಿದ ಅಸನ (ಹೊನ್ನೆ) ಹೂಗಳ ಬಣ್ಣದ ವಸ್ತ್ರದ ಅಂಚುಳ್ಳವನೇ!'),
        v10(13, 'शतमोदोद्भवसुन्दरवरपद्मोत्थितनाभे',
          'O you from whose navel rose the beautiful, excellent lotus, the birthplace of Brahmā!',
          'ಬ್ರಹ್ಮನಿಗೆ ಜನ್ಮಸ್ಥಾನವಾದ ಸುಂದರ ಶ್ರೇಷ್ಠ ಕಮಲ ಹುಟ್ಟಿದ ನಾಭಿಯುಳ್ಳವನೇ!'),
        v10(14, 'जगदागूहकपल्लवसमकुक्षे शरणादे',
          'O you whose belly, soft as a tender leaf, holds the world hidden within; O first refuge!',
          'ಜಗತ್ತನ್ನು ತನ್ನೊಳಗೆ ಅಡಗಿಸಿಕೊಳ್ಳುವ, ಚಿಗುರೆಲೆಯಂತೆ ಕೋಮಲವಾದ ಉದರವುಳ್ಳವನೇ, ಮೊದಲ ಆಶ್ರಯನೇ!'),
        v10(15, 'जगदम्बामलसुन्दरगृहवक्षोवरयोगिन्',
          'O you whose noble chest is the pure and beautiful home of the Mother of the world!',
          'ಜಗನ್ಮಾತೆಗೆ ನಿರ್ಮಲ ಸುಂದರ ಮನೆಯಾದ ಶ್ರೇಷ್ಠ ಎದೆಯುಳ್ಳವನೇ!'),
        v10(16, 'दितिजान्तप्रद चक्रदरगदायुग्वरबाहो',
          'O you who bring the daityas to their end, whose mighty arms hold the discus, conch and mace!',
          'ದೈತ್ಯರಿಗೆ ಅಂತ್ಯವನ್ನು ತರುವವನೇ, ಚಕ್ರ-ಶಂಖ-ಗದೆಗಳನ್ನು ಹಿಡಿದ ಶ್ರೇಷ್ಠ ಭುಜಗಳುಳ್ಳವನೇ!'),
        v10(17, 'परमज्ञानमहानिधिवदनश्रीरमणेन्दो',
          'O you whose face is a great treasure of supreme knowledge, O moon (delight) of Śrī!',
          'ಪರಮಜ್ಞಾನದ ಮಹಾನಿಧಿಯಾದ ಮುಖವುಳ್ಳವನೇ, ಶ್ರೀದೇವಿಗೆ ಆನಂದ ನೀಡುವ ಚಂದ್ರನೇ!'),
        v10(18, 'निखिलाघौघविनाशक परसौख्यप्रददृष्टे',
          'O you whose glance destroys the whole flood of sins and grants supreme bliss!',
          'ಸಮಸ್ತ ಪಾಪರಾಶಿಯನ್ನು ನಾಶಮಾಡುವ, ಪರಮಸುಖವನ್ನು ಕೊಡುವ ದೃಷ್ಟಿಯುಳ್ಳವನೇ!'),
        v(19, 'परमानन्दसुतीर्थसुमुनिराजो हरिगाथाम् ।\nकृतवान्नित्यसुपूर्णकपरमानन्दपदैषी ॥',
          'The king of sages, Paramānandatīrtha (Ānandatīrtha), seeking the supreme state of eternal and perfect bliss, composed this song of Hari.',
          'ನಿತ್ಯವೂ ಪರಿಪೂರ್ಣವೂ ಆದ ಪರಮಾನಂದಪದವನ್ನು ಬಯಸಿ, ಮುನಿರಾಜರಾದ ಪರಮಾನಂದತೀರ್ಥರು (ಆನಂದತೀರ್ಥರು) ಈ ಹರಿಗಾಥೆಯನ್ನು ರಚಿಸಿದರು.'),
        colophon('दशमं'),
      ],
    },
  ],
};

const ANANDA = 'आनन्दस्य पदं वन्दे ब्रह्मेन्द्राद्यभिवन्दितम् ॥';
const ANANDA_EN = 'I bow to the feet of the Blissful One, worshipped by Brahmā, Indra and the gods.';
const ANANDA_KN = 'ಬ್ರಹ್ಮ-ಇಂದ್ರಾದಿಗಳಿಂದ ವಂದಿತವಾದ ಆನಂದಮಯನ ಪಾದಕ್ಕೆ ವಂದಿಸುತ್ತೇನೆ.';
const v11 = (n: number, line: string, en: string, kn: string) =>
  v(n, `${line} ।\n${ANANDA}`, `${en} ${ANANDA_EN}`, `${kn} ${ANANDA_KN}`);

export const dvadashaStotra11: Mantra = {
  id: 'dvadasha-stotra-11',
  title: 'द्वादशस्तोत्रम् — एकादशोऽध्यायः',
  titleEn: 'Dvadasha Stotra 11 · Udirnamajaram',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 11,
  deity: 'Śrī Hari',
  source: SOURCE,
  summary:
    'A short hymn on the Lord\'s feet (pada), "I bow to the feet of the Blissful One": exalted, ageless, flowing with nectar, sung by all the Vedas, the support of Indirā, far beyond the farthest yet nearer than the nearest.',
  summaryKn:
    '"ಆನಂದಮಯನ ಪಾದಕ್ಕೆ ವಂದಿಸುತ್ತೇನೆ" ಎಂದು ಭಗವಂತನ ಪಾದಗಳನ್ನು (ಪದವನ್ನು) ಕೊಂಡಾಡುವ ಚಿಕ್ಕ ಸ್ತೋತ್ರ: ಅವು ಶ್ರೇಷ್ಠ, ಜರಾರಹಿತ, ಅಮೃತವನ್ನು ಸುರಿಸುವಂಥವು, ಎಲ್ಲ ವೇದಗಳು ಹಾಡುವಂಥವು, ಲಕ್ಷ್ಮಿಗೆ ಆಧಾರ, ದೂರಕ್ಕಿಂತ ದೂರವಾದರೂ ಹತ್ತಿರಕ್ಕಿಂತ ಹತ್ತಿರ.',
  difficulty: 'easy',
  completeness: 'complete',
  contentNote: 'Variants: v2 इन्दिरावासमुत्तमम्; v5 वादिमोहनम्; v6 …अहो परम्; v9 पठन्नानन्दमाप्नुयात्.',
  sections: [
    {
      title: 'एकादशं स्तोत्रम्',
      titleEn: 'Stotra 11',
      verses: [
        v11(1, 'उदीर्णमजरं दिव्यममृतस्यन्द्यधीशितुः',
          'The supreme Ruler\'s feet are exalted, ageless, divine, and flow with nectar.',
          'ಪರಮೇಶ್ವರನ ಪಾದವು ಶ್ರೇಷ್ಠವೂ ಜರಾರಹಿತವೂ ದಿವ್ಯವೂ ಅಮೃತವನ್ನು ಸುರಿಸುವಂಥದ್ದೂ ಆಗಿದೆ.'),
        v11(2, 'सर्ववेदपदोद्गीतमिन्दिराधारमुत्तमम्',
          'They are sung by every word of the Vedas, the highest, the support of Indirā.',
          'ಅದು ಎಲ್ಲ ವೇದಪದಗಳಿಂದ ಹಾಡಲ್ಪಟ್ಟದ್ದು, ಲಕ್ಷ್ಮಿಗೆ ಆಧಾರವಾದದ್ದು, ಉತ್ತಮವಾದದ್ದು.'),
        v11(3, 'सर्वदेवादिदेवस्य विदारितमहत्तमः',
          'The feet of the first God of all gods, which tear apart the great darkness (of ignorance).',
          'ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ ಆದಿದೇವನಾದವನ ಪಾದವು ಅಜ್ಞಾನದ ಮಹಾಂಧಕಾರವನ್ನು ಸೀಳಿಹಾಕುತ್ತದೆ.'),
        v11(4, 'उदारमादरान्नित्यमनिन्द्यं सुन्दरीपतेः',
          'The generous, faultless feet of the Lord of the beautiful Lakṣmī, (which I always worship) with reverence.',
          'ಸುಂದರಿಯಾದ ಲಕ್ಷ್ಮಿಯ ಪತಿಯ ಉದಾರವೂ ನಿರ್ದೋಷವೂ ಆದ ಪಾದವನ್ನು ಸದಾ ಆದರದಿಂದ (ಪೂಜಿಸುತ್ತೇನೆ).'),
        v11(5, 'इन्दीवरोदरनिभं सुपूर्णं वादिमोहदम्',
          'Like the heart of a blue lotus, perfectly full, bewildering to those who argue falsely.',
          'ನೀಲಕಮಲದ ಒಳಭಾಗದಂತೆ ಶೋಭಿಸುವ, ಪರಿಪೂರ್ಣವಾದ, ದುರ್ವಾದಿಗಳನ್ನು ಮೋಹಗೊಳಿಸುವ ಪಾದ.'),
        v11(6, 'दातृसर्वामरैश्वर्यविमुक्त्यादेरहो वरम्',
          'Wonderful and excellent, they give all the gods their lordship, and give liberation and every other good.',
          'ಆಹಾ! ಎಲ್ಲ ದೇವತೆಗಳಿಗೆ ಐಶ್ವರ್ಯವನ್ನೂ ಮೋಕ್ಷವೇ ಮೊದಲಾದವನ್ನೂ ಕೊಡುವ ಶ್ರೇಷ್ಠವಾದ ಪಾದ.'),
        v11(7, 'दूराद्दूरतरं यत्तु तदेवान्तिकमन्तिकात्',
          'That which is farther than the farthest is also nearer than the nearest.',
          'ಯಾವುದು ದೂರಕ್ಕಿಂತಲೂ ಬಹುದೂರವೋ ಅದೇ ಹತ್ತಿರಕ್ಕಿಂತಲೂ ಹತ್ತಿರವಾಗಿದೆ.'),
        v11(8, 'पूर्णसर्वगुणैकार्णमनाद्यन्तं सुरेशितुः',
          'The feet of the Lord of the gods, a single ocean of all full virtues, without beginning or end.',
          'ದೇವೇಶನ ಪಾದವು ಎಲ್ಲ ಪೂರ್ಣಗುಣಗಳ ಏಕಮಾತ್ರ ಸಾಗರ, ಆದಿ-ಅಂತ್ಯಗಳಿಲ್ಲದ್ದು.'),
        v(9, 'आनन्दतीर्थमुनिना हरेरानन्दरूपिणः ।\nकृतं स्तोत्रमिदं पुण्यं पठन्नानन्दतामियात् ॥',
          'One who recites this holy hymn to Hari, whose form is bliss, composed by the sage Ānandatīrtha, will attain bliss.',
          'ಆನಂದರೂಪನಾದ ಶ್ರೀಹರಿಯನ್ನು ಕುರಿತು ಆನಂದತೀರ್ಥಮುನಿಗಳು ರಚಿಸಿದ ಈ ಪುಣ್ಯಸ್ತೋತ್ರವನ್ನು ಪಠಿಸುವವನು ಆನಂದವನ್ನು ಹೊಂದುತ್ತಾನೆ.'),
        colophon('एकादशं'),
      ],
    },
  ],
};

const VARADA = 'आनन्दतीर्थपरानन्दवरद ॥';
const VARADA_EN = 'O you who grant supreme bliss to Ānandatīrtha!';
const VARADA_KN = 'ಆನಂದತೀರ್ಥರಿಗೆ ಪರಮಾನಂದವನ್ನು ಕರುಣಿಸುವವನೇ!';
const v12 = (n: number, line: string, en: string, kn: string) =>
  v(n, `${line} ।\n${VARADA}`, `${en} ${VARADA_EN}`, `${kn} ${VARADA_KN}`);

export const dvadashaStotra12: Mantra = {
  id: 'dvadasha-stotra-12',
  title: 'द्वादशस्तोत्रम् — द्वादशोऽध्यायः',
  titleEn: 'Dvadasha Stotra 12 · Ananda Mukunda',
  category: 'madhva',
  series: 'dvadasha-stotra',
  order: 12,
  deity: 'Śrī Kṛṣṇa (Mukunda)',
  source: SOURCE,
  summary:
    'The closing stotra, a joyful chant to Mukunda, lotus-eyed Lord of bliss, with the refrain "O you who grant supreme bliss to Ānandatīrtha". It is followed by the dedication "Bhāratīramaṇa-mukhyaprāṇāntargata Śrīkṛṣṇārpaṇamastu".',
  summaryKn:
    'ಕೊನೆಯ ಸ್ತೋತ್ರ: ಆನಂದಸ್ವರೂಪನೂ ಕಮಲನಯನನೂ ಆದ ಮುಕುಂದನನ್ನು "ಆನಂದತೀರ್ಥರಿಗೆ ಪರಮಾನಂದ ಕರುಣಿಸುವವನೇ" ಎಂಬ ಪಲ್ಲವಿಯೊಂದಿಗೆ ಸಂತೋಷದಿಂದ ಹಾಡುವ ಸ್ತೋತ್ರ. ಕೊನೆಗೆ "ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು" ಎಂದು ಸಮರ್ಪಿಸುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  contentNote:
    'The Hṛṣīkeśatīrtha recension has nine verses: it reads मन्दारसूनसुचर्चित in v5, omits मन्दारस्यन्दितमन्दिर (v7), and ends आनन्दचन्द्रिकास्यन्दक. Some copies place v3 and v4 in the other order. The meanings of v5, v7, v8 and v10 are tentative.',
  sections: [
    {
      title: 'द्वादशं स्तोत्रम्',
      titleEn: 'Stotra 12',
      verses: [
        v12(1, 'आनन्द मुकुन्द अरविन्दनयन',
          'O Bliss itself, Mukunda, lotus-eyed Lord,',
          'ಆನಂದಸ್ವರೂಪನೇ, ಮುಕುಂದನೇ, ಕಮಲನಯನನೇ,'),
        v12(2, 'सुन्दरिमन्दिर गोविन्द वन्दे',
          'Govinda, home of the beautiful Lakṣmī, I bow to you,',
          'ಸುಂದರಿಯಾದ ಲಕ್ಷ್ಮಿಗೆ ನೆಲೆಯಾದ ಗೋವಿಂದನೇ, ನಿನಗೆ ವಂದನೆ,'),
        v12(3, 'चन्द्रकमन्दिरनन्दक वन्दे',
          'You who delight those whose home is the moon (the gods), I bow to you,',
          'ಚಂದ್ರಲೋಕವಾಸಿಗಳನ್ನೂ (ದೇವತೆಗಳನ್ನೂ) ಆನಂದಪಡಿಸುವವನೇ, ನಿನಗೆ ವಂದನೆ,'),
        v12(4, 'चन्द्रसुरेन्द्रसुवन्दित वन्दे',
          'You who are worshipped by the Moon and by Indra, I bow to you,',
          'ಚಂದ್ರನಿಂದಲೂ ದೇವೇಂದ್ರನಿಂದಲೂ ವಂದಿತನೇ, ನಿನಗೆ ವಂದನೆ,'),
        v12(5, 'मन्दारस्यन्दकस्यन्दन वन्दे',
          'You whose chariot showers mandāra blossoms, I bow to you,',
          'ಮಂದಾರ ಪುಷ್ಪಗಳನ್ನು ಸುರಿಸುವ ರಥವುಳ್ಳವನೇ, ನಿನಗೆ ವಂದನೆ,'),
        v12(6, 'वृन्दारकवृन्दसुवन्दित वन्दे',
          'You who are worshipped by the hosts of gods, I bow to you,',
          'ದೇವತಾಸಮೂಹದಿಂದ ಚೆನ್ನಾಗಿ ವಂದಿತನೇ, ನಿನಗೆ ವಂದನೆ,'),
        v12(7, 'मन्दारस्यन्दितमन्दिर वन्दे',
          'You whose abode is showered with mandāra flowers, I bow to you,',
          'ಮಂದಾರ ಪುಷ್ಪಗಳು ಸುರಿಯುವ ಮಂದಿರವುಳ್ಳವನೇ, ನಿನಗೆ ವಂದನೆ,'),
        v12(8, 'मन्दिरस्यन्दनस्यन्दक वन्दे',
          'You who make the chariots and dwellings (of the gods) move, I bow to you,',
          'ದೇವತೆಗಳ ಮಂದಿರ-ರಥಗಳನ್ನು ಚಲಿಸುವಂತೆ ಮಾಡುವವನೇ, ನಿನಗೆ ವಂದನೆ,'),
        v12(9, 'इन्दिरानन्दकसुन्दर वन्दे',
          'Beautiful one who delights Indirā, I bow to you,',
          'ಲಕ್ಷ್ಮಿಯನ್ನು ಆನಂದಪಡಿಸುವ ಸುಂದರನೇ, ನಿನಗೆ ವಂದನೆ,'),
        v12(10, 'आनन्दचन्द्रिकास्पन्दन वन्दे',
          'You from whom the moonlight of bliss streams forth, I bow to you,',
          'ಆನಂದವೆಂಬ ಬೆಳದಿಂಗಳನ್ನು ಹೊರಸೂಸುವವನೇ, ನಿನಗೆ ವಂದನೆ,'),
        colophon('द्वादशं', '\nभारतीरमणमुख्यप्राणान्तर्गत श्रीकृष्णार्पणमस्तु ॥'),
      ],
    },
  ],
};
