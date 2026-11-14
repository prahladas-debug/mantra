/**
 * Śrī Veṅkaṭeśa Suprabhātam set (Prativādi Bhayaṅkaram Aṇṇan, 15th c., disciple
 * of Maṇavāḷa Māmuni), as recited at Tirumala: Suprabhātam (29), Prapatti (16),
 * Maṅgalāśāsanam (14). The Stotram (order 2) is in venkatesha-stotram.ts.
 *
 * Sources (collated with scripts/collate.ts, Nov 2026):
 * - Base: stotrasamhita/stotra-sangrahah (GitHub, typed LaTeX; derived from
 *   sanskritdocuments/prapatti.com).
 * - sa.wikisource.org, श्रीवेङ्कटेशसुप्रभातम् (two page versions) and
 *   श्रीवेङ्कटेशप्रपत्तिः (via the con-jo-ry/ilx_skt mirror).
 * - vishvAsa/purANam_vaiShNavam: OCR of a printed Tirumala pūjā-vidhāna
 *   (Rāmakṛṣṇa Dīkṣita) with all three parts; and vishvAsa/devaH (Prapatti).
 * - Maṅgalāśāsanam also against nandashyamrao/navagraha (typed).
 * All verse counts agree across witnesses; every verse scans (anuṣṭubh,
 * vasantatilakā; Suprabhātam 4 mañjubhāṣiṇī; Prapatti 1 śārdūlavikrīḍita).
 *
 * Resolved against the base, by majority:
 * - Suprabhātam: स्स for ः before स in 3, 5, 7, 26, 27 (all three witnesses,
 *   TTD style); 14 हरविरिञ्चि (2:2, the usual form of the name); 23 कुट्मल
 *   (all witnesses); 27 सनन्दनमुखास्त्वथ (all witnesses; base मुखास्तव).
 *   Kept base: 9 करचाररम्यं (one witness चारु), 16 धनाधिनाथाः.
 * - Prapatti: 9 उपादधानौ (base उपाददानौ); 10 इत्युदितप्रशंसौ (base and
 *   Wikisource have the slip इत्युतिद°); 15 सौम्योपयन्तृमुनिना (base सौम्यौ पयन्तृ°).
 *   Kept base: 9 नित्यानमद् (one witness नित्यान्नमद्).
 * - Maṅgalāśāsanam: no changes; 14 पूर्वैराचार्यैः kept (metre).
 * Pāda-final words are left without cross-line sandhi. Not yet checked
 * against the printed TTD booklet.
 */
import type { Mantra } from '../types';

export const venkateshaSuprabhatam: Mantra = {
  id: 'venkatesha-suprabhatam',
  title: 'श्रीवेङ्कटेशसुप्रभातम्',
  titleEn: 'Sri Venkatesha Suprabhatam',
  category: 'stotra',
  order: 1,
  series: 'venkatesha',
  deity: 'Śrī Veṅkaṭeśvara',
  source: 'Prativādi Bhayaṅkaram Aṇṇan (15th c.), as recited at Tirumala',
  summary: 'The dawn hymn sung daily at Tirumala to wake Lord Veṅkaṭeśvara. Opening with Viśvāmitra’s call to young Rāma, it greets the Lord and Lakṣmī as sages, gods, birds and devotees gather at His door with offerings at daybreak. It is followed by the Stotram, the Prapatti and the Maṅgalāśāsanam.',
  summaryKn: 'ತಿರುಮಲೆಯಲ್ಲಿ ಪ್ರತಿದಿನ ಬೆಳಗಿನ ಜಾವ ಶ್ರೀ ವೇಂಕಟೇಶ್ವರನನ್ನು ಎಬ್ಬಿಸಲು ಹಾಡುವ ಸುಪ್ರಭಾತ. ಬಾಲಕ ಶ್ರೀರಾಮನನ್ನು ವಿಶ್ವಾಮಿತ್ರರು ಎಬ್ಬಿಸಿದ ಮಾತುಗಳಿಂದ ಆರಂಭವಾಗಿ, ಋಷಿಗಳು, ದೇವತೆಗಳು, ಪಕ್ಷಿಗಳು ಮತ್ತು ಭಕ್ತರು ಉಷಃಕಾಲದಲ್ಲಿ ಕಾಣಿಕೆಗಳೊಂದಿಗೆ ಬಾಗಿಲಲ್ಲಿ ಕಾದಿರುವುದನ್ನು ವರ್ಣಿಸಿ ಸ್ವಾಮಿಗೂ ಲಕ್ಷ್ಮೀದೇವಿಗೂ ಶುಭೋದಯವನ್ನು ಕೋರುತ್ತದೆ. ಇದರ ನಂತರ ಸ್ತೋತ್ರ, ಪ್ರಪತ್ತಿ ಮತ್ತು ಮಂಗಳಾಶಾಸನವನ್ನು ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'सुप्रभातम्',
      titleEn: 'Suprabhatam',
      note: 'Recited at dawn; at Tirumala it is sung before the sanctum door before the Lord is woken. Followed by the Venkatesha Stotram.',
      noteKn: 'ಉಷಃಕಾಲದಲ್ಲಿ ಪಠಿಸುವುದು; ತಿರುಮಲೆಯಲ್ಲಿ ಗರ್ಭಗುಡಿಯ ಬಾಗಿಲ ಮುಂದೆ ಸ್ವಾಮಿಯನ್ನು ಎಬ್ಬಿಸುವ ಮೊದಲು ಹಾಡುತ್ತಾರೆ. ಇದರ ನಂತರ ವೇಂಕಟೇಶ ಸ್ತೋತ್ರ.',
      verses: [
        {
          n: 1,
          text: 'कौसल्या सुप्रजा राम पूर्वा सन्ध्या प्रवर्तते ।\nउत्तिष्ठ नरशार्दूल कर्तव्यं दैवमाह्निकम् ॥',
          meaning: {
            en: 'O Rāma, noble son of Kausalyā, the eastern dawn is breaking. Arise, tiger among men: the sacred duties of the day are waiting. (These are Viśvāmitra’s words to young Rāma in the Rāmāyaṇa.)',
            kn: 'ಕೌಸಲ್ಯೆಯ ಸುಪುತ್ರನಾದ ಶ್ರೀರಾಮನೇ, ಪೂರ್ವದಿಕ್ಕಿನಲ್ಲಿ ಉಷಃಕಾಲ ಆರಂಭವಾಗುತ್ತಿದೆ. ನರಶ್ರೇಷ್ಠನೇ, ಏಳು; ದಿನದ ದೇವಕಾರ್ಯಗಳನ್ನು ಮಾಡಬೇಕಾಗಿದೆ. (ರಾಮಾಯಣದಲ್ಲಿ ವಿಶ್ವಾಮಿತ್ರರು ಬಾಲಕ ಶ್ರೀರಾಮನನ್ನು ಎಬ್ಬಿಸುವ ಮಾತುಗಳಿವು.)',
          },
        },
        {
          n: 2,
          text: 'उत्तिष्ठोत्तिष्ठ गोविन्द उत्तिष्ठ गरुडध्वज ।\nउत्तिष्ठ कमलाकान्त त्रैलोक्यं मङ्गलं कुरु ॥',
          meaning: {
            en: 'Arise, arise, O Govinda; arise, O Lord whose banner bears Garuḍa; arise, O beloved of Kamalā, and make the three worlds auspicious.',
            kn: 'ಗೋವಿಂದನೇ, ಏಳು, ಏಳು; ಗರುಡಧ್ವಜನೇ, ಏಳು; ಕಮಲಾಕಾಂತನೇ, ಏಳು; ಮೂರು ಲೋಕಗಳಿಗೂ ಮಂಗಳವನ್ನುಂಟುಮಾಡು.',
          },
        },
        {
          n: 3,
          text: 'मातस्समस्तजगतां मधुकैटभारेः\nवक्षोविहारिणि मनोहरदिव्यमूर्ते ।\nश्रीस्वामिनि श्रितजनप्रियदानशीले\nश्रीवेङ्कटेशदयिते तव सुप्रभातम् ॥',
          meaning: {
            en: 'O Mother of all the worlds, who dwells joyfully on the chest of Viṣṇu, slayer of Madhu and Kaiṭabha; O Lady of enchanting divine form, our sovereign, ever generous to those who seek you; O beloved of Śrī Veṅkaṭeśa, may your dawn be blessed.',
            kn: 'ಮಧುಕೈಟಭರನ್ನು ಸಂಹರಿಸಿದ ಶ್ರೀಹರಿಯ ವಕ್ಷಸ್ಥಳದಲ್ಲಿ ವಿಹರಿಸುವ ಸಕಲ ಜಗತ್ತಿನ ತಾಯಿಯೇ, ಮನೋಹರವಾದ ದಿವ್ಯರೂಪವುಳ್ಳವಳೇ, ಸ್ವಾಮಿನಿಯೇ, ಆಶ್ರಯಿಸಿದವರಿಗೆ ಪ್ರಿಯವಾದುದನ್ನು ಕೊಡುವ ಸ್ವಭಾವದವಳೇ, ಶ್ರೀ ವೇಂಕಟೇಶನ ಪ್ರಿಯಳೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 4,
          text: 'तव सुप्रभातमरविन्दलोचने\nभवतु प्रसन्नमुखचन्द्रमण्डले ।\nविधिशङ्करेन्द्रवनिताभिरर्चिते\nवृषशैलनाथदयिते दयानिधे ॥',
          meaning: {
            en: 'O lotus-eyed Lady, whose moon-like face is full of grace, worshipped by the consorts of Brahmā, Śiva and Indra; O beloved of the Lord of the Vṛṣa hill, ocean of compassion, may your dawn be blessed.',
            kn: 'ಕಮಲದಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವಳೇ, ಪ್ರಸನ್ನವಾದ ಚಂದ್ರಬಿಂಬದಂತಹ ಮುಖವುಳ್ಳವಳೇ, ಬ್ರಹ್ಮ, ಶಿವ, ಇಂದ್ರರ ಪತ್ನಿಯರಿಂದ ಪೂಜಿತಳೇ, ವೃಷಾಚಲಪತಿಯ ಪ್ರಿಯಳೇ, ದಯಾನಿಧಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 5,
          text: 'अत्र्यादिसप्तऋषयस्समुपास्य सन्ध्याम्\nआकाशसिन्धुकमलानि मनोहराणि ।\nआदाय पादयुगमर्चयितुं प्रपन्नाः\nशेषाद्रिशेखरविभो तव सुप्रभातम् ॥',
          meaning: {
            en: 'Atri and the other Seven Sages, their dawn worship done, have gathered lovely lotuses from the heavenly Gaṅgā and come to worship your feet. O Lord who crowns the Śeṣa hill, may your dawn be blessed.',
            kn: 'ಅತ್ರಿ ಮೊದಲಾದ ಸಪ್ತರ್ಷಿಗಳು ಸಂಧ್ಯಾವಂದನೆಯನ್ನು ಮುಗಿಸಿ, ಆಕಾಶಗಂಗೆಯ ಮನೋಹರ ಕಮಲಗಳನ್ನು ತಂದು ನಿನ್ನ ಪಾದಗಳನ್ನು ಪೂಜಿಸಲು ಬಂದಿದ್ದಾರೆ. ಶೇಷಾದ್ರಿಶಿಖರದ ಒಡೆಯನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 6,
          text: 'पञ्चाननाब्जभवषण्मुखवासवाद्याः\nत्रैविक्रमादिचरितं विबुधाः स्तुवन्ति ।\nभाषापतिः पठति वासरशुद्धिमारात्\nशेषाद्रिशेखरविभो तव सुप्रभातम् ॥',
          meaning: {
            en: 'Five-faced Śiva, lotus-born Brahmā, six-faced Skanda, Indra and the other gods sing of your deeds, such as your three strides as Trivikrama, and Bṛhaspati, lord of speech, reads out the almanac of the day close by. O Lord who crowns the Śeṣa hill, may your dawn be blessed.',
            kn: 'ಪಂಚಮುಖ ಶಿವ, ಕಮಲಜ ಬ್ರಹ್ಮ, ಷಣ್ಮುಖ, ಇಂದ್ರ ಮೊದಲಾದ ದೇವತೆಗಳು ನಿನ್ನ ತ್ರಿವಿಕ್ರಮಾವತಾರ ಮೊದಲಾದ ಚರಿತ್ರೆಗಳನ್ನು ಸ್ತುತಿಸುತ್ತಿದ್ದಾರೆ; ವಾಕ್ಪತಿ ಬೃಹಸ್ಪತಿಯು ಹತ್ತಿರದಲ್ಲೇ ಇಂದಿನ ದಿನದ ಪಂಚಾಂಗವನ್ನು ಓದುತ್ತಿದ್ದಾನೆ. ಶೇಷಾದ್ರಿಶಿಖರದ ಒಡೆಯನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 7,
          text: 'ईषत्प्रफुल्लसरसीरुहनारिकेल-\nपूगद्रुमादिसुमनोहरपालिकानाम् ।\nआवाति मन्दमनिलस्सह दिव्यगन्धैः\nशेषाद्रिशेखरविभो तव सुप्रभातम् ॥',
          meaning: {
            en: 'A gentle breeze is blowing, carrying the divine fragrance of half-opened lotuses and of the lovely groves of coconut, areca and other trees. O Lord who crowns the Śeṣa hill, may your dawn be blessed.',
            kn: 'ಅರಳುತ್ತಿರುವ ಕಮಲಗಳ ಮತ್ತು ತೆಂಗು, ಅಡಿಕೆ ಮೊದಲಾದ ಮರಗಳ ಸುಂದರ ತೋಪುಗಳ ದಿವ್ಯ ಸುಗಂಧವನ್ನು ಹೊತ್ತು ಮಂದಮಾರುತ ಬೀಸುತ್ತಿದೆ. ಶೇಷಾದ್ರಿಶಿಖರದ ಒಡೆಯನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 8,
          text: 'उन्मील्य नेत्रयुगमुत्तमपञ्जरस्थाः\nपात्रावशिष्टकदलीफलपायसानि ।\nभुक्त्वा सलीलमथ केलिशुकाः पठन्ति\nशेषाद्रिशेखरविभो तव सुप्रभातम् ॥',
          meaning: {
            en: 'The pet parrots in their fine cages open their eyes, playfully eat the bananas and sweet pāyasa left in their bowls, and begin to recite. O Lord who crowns the Śeṣa hill, may your dawn be blessed.',
            kn: 'ಸುಂದರ ಪಂಜರಗಳಲ್ಲಿರುವ ಸಾಕುಗಿಳಿಗಳು ಕಣ್ಣು ತೆರೆದು, ಬಟ್ಟಲುಗಳಲ್ಲಿ ಉಳಿದ ಬಾಳೆಹಣ್ಣು ಮತ್ತು ಪಾಯಸವನ್ನು ಲೀಲೆಯಿಂದ ತಿಂದು, ಮಾತನಾಡತೊಡಗಿವೆ. ಶೇಷಾದ್ರಿಶಿಖರದ ಒಡೆಯನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 9,
          text: 'तन्त्रीप्रकर्षमधुरस्वनया विपञ्च्या\nगायत्यनन्तचरितं तव नारदोऽपि ।\nभाषासमग्रमसकृत्करचाररम्यं\nशेषाद्रिशेखरविभो तव सुप्रभातम् ॥',
          meaning: {
            en: 'Nārada too sings of your endless deeds on his vīṇā, sweet with the finest notes of its strings, again and again, in words full of meaning, his hand moving gracefully over it. O Lord who crowns the Śeṣa hill, may your dawn be blessed.',
            kn: 'ತಂತಿಗಳ ಮಧುರನಾದವುಳ್ಳ ವೀಣೆಯನ್ನು ಸುಂದರವಾಗಿ ಮತ್ತೆ ಮತ್ತೆ ನುಡಿಸುತ್ತಾ, ನಾರದರೂ ಅರ್ಥಪೂರ್ಣವಾದ ವಾಣಿಯಿಂದ ನಿನ್ನ ಅನಂತ ಚರಿತ್ರೆಯನ್ನು ಹಾಡುತ್ತಿದ್ದಾರೆ. ಶೇಷಾದ್ರಿಶಿಖರದ ಒಡೆಯನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 10,
          text: 'भृङ्गावली च मकरन्दरसानुविद्ध-\nझङ्कारगीतनिनदैः सह सेवनाय ।\nनिर्यात्युपान्तसरसीकमलोदरेभ्यः\nशेषाद्रिशेखरविभो तव सुप्रभातम् ॥',
          meaning: {
            en: 'Swarms of bees, steeped in the nectar of flowers, come out of the lotuses in the nearby lakes to serve you with their humming song. O Lord who crowns the Śeṣa hill, may your dawn be blessed.',
            kn: 'ಮಕರಂದದ ರಸದಲ್ಲಿ ಮುಳುಗಿದ ದುಂಬಿಗಳ ಸಾಲು ಝೇಂಕಾರದ ಗೀತೆಯೊಂದಿಗೆ ನಿನ್ನ ಸೇವೆಗಾಗಿ ಹತ್ತಿರದ ಸರೋವರಗಳ ಕಮಲಗಳ ಒಳಗಿನಿಂದ ಹೊರಬರುತ್ತಿದೆ. ಶೇಷಾದ್ರಿಶಿಖರದ ಒಡೆಯನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 11,
          text: 'योषागणेन वरदध्निविमथ्यमाने\nघोषालयेषु दधिमन्थनतीव्रघोषाः ।\nरोषात्कलिं विदधते ककुभश्च कुम्भाः\nशेषाद्रिशेखरविभो तव सुप्रभातम् ॥',
          meaning: {
            en: 'In the cowherd homes, as the women churn the rich curd, the loud sound of churning rises from the pots and fills the quarters, as if the two were quarrelling. O Lord who crowns the Śeṣa hill, may your dawn be blessed.',
            kn: 'ಗೊಲ್ಲರ ಮನೆಗಳಲ್ಲಿ ಹೆಂಗಸರು ಉತ್ತಮ ಮೊಸರನ್ನು ಕಡೆಯುತ್ತಿರುವಾಗ, ಕಡೆಯುವ ಜೋರಾದ ಸದ್ದಿನಿಂದ ಗಡಿಗೆಗಳೂ ದಿಕ್ಕುಗಳೂ ಸಿಟ್ಟಿನಿಂದ ಪರಸ್ಪರ ಜಗಳವಾಡುತ್ತಿರುವಂತೆ ತೋರುತ್ತಿದೆ. ಶೇಷಾದ್ರಿಶಿಖರದ ಒಡೆಯನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 12,
          text: 'पद्मेशमित्रशतपत्रगतालिवर्गाः\nहर्तुं श्रियं कुवलयस्य निजाङ्गलक्ष्म्या ।\nभेरीनिनादमिव बिभ्रति तीव्रनादं\nशेषाद्रिशेखरविभो तव सुप्रभातम् ॥',
          meaning: {
            en: 'The bees in the lotuses, friends of the sun, hum loudly like the beating of drums, as if to win for themselves, by their own dark beauty, the splendour of the blue water-lily. O Lord who crowns the Śeṣa hill, may your dawn be blessed.',
            kn: 'ಸೂರ್ಯನ ಮಿತ್ರರಾದ ಕಮಲಗಳಲ್ಲಿರುವ ದುಂಬಿಗಳು, ತಮ್ಮ ಮೈಯ ಕಪ್ಪು ಕಾಂತಿಯಿಂದ ನೀಲಕಮಲದ ಸೊಬಗನ್ನು ಸೆಳೆದುಕೊಳ್ಳಲೋ ಎಂಬಂತೆ, ಭೇರಿಯ ನಾದದಂತೆ ಜೋರಾಗಿ ಝೇಂಕರಿಸುತ್ತಿವೆ. ಶೇಷಾದ್ರಿಶಿಖರದ ಒಡೆಯನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 13,
          text: 'श्रीमन्नभीष्टवरदाखिललोकबन्धो\nश्रीश्रीनिवास जगदेकदयैकसिन्धो ।\nश्रीदेवतागृहभुजान्तरदिव्यमूर्ते\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'O glorious one, giver of the boons we long for, friend of all the worlds; O Śrīnivāsa, the one ocean of compassion for the universe; O Lord of divine form, on whose chest Śrī makes her home. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಶ್ರೀಮಂತನೇ, ಬಯಸಿದ ವರಗಳನ್ನು ಕೊಡುವವನೇ, ಸಕಲ ಲೋಕಗಳ ಬಂಧುವೇ, ಶ್ರೀನಿವಾಸನೇ, ಜಗತ್ತಿಗೆ ಏಕೈಕ ದಯಾಸಾಗರನೇ, ಲಕ್ಷ್ಮೀದೇವಿಯ ನೆಲೆಯಾದ ವಕ್ಷಸ್ಥಳವುಳ್ಳ ದಿವ್ಯಮೂರ್ತಿಯೇ, ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 14,
          text: 'श्रीस्वामिपुष्करिणिकाप्लवनिर्मलाङ्गाः\nश्रेयोऽर्थिनो हरविरिञ्चिसनन्दनाद्याः ।\nद्वारे वसन्ति वरवेत्रहतोत्तमाङ्गाः\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'Śiva, Brahmā, Sanandana and others who seek the highest good, purified by bathing in the Svāmi Puṣkariṇī, wait at your door, though the door-keepers’ canes strike their heads. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಸ್ವಾಮಿ ಪುಷ್ಕರಿಣಿಯಲ್ಲಿ ಸ್ನಾನಮಾಡಿ ಶುದ್ಧರಾದ, ಶ್ರೇಯಸ್ಸನ್ನು ಬಯಸುವ ಶಿವ, ಬ್ರಹ್ಮ, ಸನಂದನ ಮೊದಲಾದವರು, ದ್ವಾರಪಾಲಕರ ಬೆತ್ತ ತಲೆಗೆ ತಾಗುತ್ತಿದ್ದರೂ ನಿನ್ನ ಬಾಗಿಲಲ್ಲಿ ಕಾದು ನಿಂತಿದ್ದಾರೆ. ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 15,
          text: 'श्रीशेषशैलगरुडाचलवेङ्कटाद्रि-\nनारायणाद्रिवृषभाद्रिवृषाद्रिमुख्याम् ।\nआख्यां त्वदीय वसतेरनिशं वदन्ति\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'People ceaselessly speak the names of your dwelling: Śeṣaśaila, Garuḍācala, Veṅkaṭādri, Nārāyaṇādri, Vṛṣabhādri, Vṛṣādri and others. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಶೇಷಶೈಲ, ಗರುಡಾಚಲ, ವೇಂಕಟಾದ್ರಿ, ನಾರಾಯಣಾದ್ರಿ, ವೃಷಭಾದ್ರಿ, ವೃಷಾದ್ರಿ ಮೊದಲಾದ ನಿನ್ನ ನೆಲೆಯ ಹೆಸರುಗಳನ್ನು ಜನರು ಸದಾ ಹೇಳುತ್ತಿರುತ್ತಾರೆ. ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 16,
          text: 'सेवापराः शिवसुरेशकृशानुधर्म-\nरक्षोऽम्बुनाथपवमानधनाधिनाथाः ।\nबद्धाञ्जलिप्रविलसन्निजशीर्षदेशाः\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'Śiva, Indra, Agni, Yama, Nirṛti, Varuṇa, Vāyu and Kubera, eager to serve you, stand with folded hands raised above their heads. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ನಿನ್ನ ಸೇವೆಯಲ್ಲಿ ನಿರತರಾದ ಶಿವ, ಇಂದ್ರ, ಅಗ್ನಿ, ಯಮ, ನಿರ್ಋತಿ, ವರುಣ, ವಾಯು, ಕುಬೇರರು ಕೈಮುಗಿದು ಅಂಜಲಿಯನ್ನು ತಲೆಯ ಮೇಲೆ ಎತ್ತಿ ನಿಂತಿದ್ದಾರೆ. ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 17,
          text: 'धाटीषु ते विहगराजमृगाधिराज-\nनागाधिराजगजराजहयाधिराजाः ।\nस्वस्वाधिकारमहिमाधिकमर्थयन्ते\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'Garuḍa king of birds, the king of beasts, the king of serpents, the king of elephants and the king of horses, who carry you in your processions, each pray for still greater glory in their own service. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ನಿನ್ನ ಉತ್ಸವಗಳಲ್ಲಿ ನಿನ್ನನ್ನು ಹೊರುವ ಪಕ್ಷಿರಾಜ ಗರುಡ, ಮೃಗರಾಜ ಸಿಂಹ, ನಾಗರಾಜ, ಗಜರಾಜ ಮತ್ತು ಅಶ್ವರಾಜರು ತಮ್ಮ ತಮ್ಮ ಸೇವೆಯಲ್ಲಿ ಇನ್ನೂ ಹೆಚ್ಚಿನ ಹಿರಿಮೆಯನ್ನು ಬೇಡುತ್ತಿದ್ದಾರೆ. ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 18,
          text: 'सूर्येन्दुभौमबुधवाक्पतिकाव्यसौरि-\nस्वर्भानुकेतुदिविषत्परिषत्प्रधानाः ।\nत्वद्दासदासचरमावधिदासदासाः\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'The Sun, the Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rāhu and Ketu, leaders in the assembly of the gods, are servants of your servants, down to the very last degree. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಸೂರ್ಯ, ಚಂದ್ರ, ಕುಜ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು ಎಂಬ ದೇವಸಭೆಯ ಪ್ರಮುಖರು ನಿನ್ನ ದಾಸರ ದಾಸರ ದಾಸರು, ಕೊನೆಯ ಹಂತದವರೆಗಿನ ದಾಸಾನುದಾಸರು. ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 19,
          text: 'त्वत्पादधूलिभरितस्फुरितोत्तमाङ्गाः\nस्वर्गापवर्गनिरपेक्षनिजान्तरङ्गाः ।\nकल्पागमाकलनयाकुलतां लभन्ते\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'Your devotees, their heads shining with the dust of your feet, their hearts wanting neither heaven nor liberation, grow anxious when they think of the age coming to an end and their service ceasing. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ನಿನ್ನ ಪಾದಧೂಳಿಯಿಂದ ತುಂಬಿ ಬೆಳಗುವ ತಲೆಯುಳ್ಳ, ಸ್ವರ್ಗವನ್ನಾಗಲಿ ಮೋಕ್ಷವನ್ನಾಗಲಿ ಬಯಸದ ಮನಸ್ಸುಳ್ಳ ಭಕ್ತರು, ಕಲ್ಪವು ಮುಗಿದು ಈ ಸೇವೆ ನಿಂತುಹೋದೀತೆಂದು ನೆನೆದು ಆತಂಕಪಡುತ್ತಾರೆ. ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 20,
          text: 'त्वद्गोपुराग्रशिखराणि निरीक्षमाणाः\nस्वर्गापवर्गपदवीं परमां श्रयन्तः ।\nमर्त्या मनुष्यभुवने मतिमाश्रयन्ते\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'Mortals who behold the tall tops of your temple towers, though they gain the supreme path to heaven and liberation, still long to stay in this human world. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ನಿನ್ನ ಗೋಪುರಗಳ ಶಿಖರಗಳನ್ನು ನೋಡುವ ಮನುಷ್ಯರು ಸ್ವರ್ಗ, ಮೋಕ್ಷಗಳ ಪರಮಮಾರ್ಗವನ್ನು ಪಡೆದರೂ, ಇದೇ ಮನುಷ್ಯಲೋಕದಲ್ಲಿ ಇರಲು ಬಯಸುತ್ತಾರೆ. ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 21,
          text: 'श्रीभूमिनायक दयादिगुणामृताब्धे\nदेवाधिदेव जगदेकशरण्यमूर्ते ।\nश्रीमन्ननन्तगरुडादिभिरर्चिताङ्घ्रे\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'O Lord of Śrī and Bhū, ocean of the nectar of compassion and every virtue; God of gods, the one refuge of the world; O glorious one, whose feet are worshipped by Ananta, Garuḍa and others. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಶ್ರೀದೇವಿ, ಭೂದೇವಿಯರ ನಾಯಕನೇ, ದಯೆ ಮೊದಲಾದ ಗುಣಗಳೆಂಬ ಅಮೃತದ ಸಾಗರನೇ, ದೇವಾಧಿದೇವನೇ, ಜಗತ್ತಿಗೆ ಏಕೈಕ ಶರಣ್ಯನೇ, ಅನಂತ, ಗರುಡ ಮೊದಲಾದವರಿಂದ ಪೂಜಿತವಾದ ಪಾದಗಳುಳ್ಳ ಶ್ರೀಮಂತನೇ, ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 22,
          text: 'श्रीपद्मनाभ पुरुषोत्तम वासुदेव\nवैकुण्ठ माधव जनार्दन चक्रपाणे ।\nश्रीवत्सचिह्न शरणागतपारिजात\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'O Padmanābha, Puruṣottama, Vāsudeva, Vaikuṇṭha, Mādhava, Janārdana, bearer of the discus; O Lord marked with the Śrīvatsa, wish-granting tree to all who seek refuge. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಪದ್ಮನಾಭನೇ, ಪುರುಷೋತ್ತಮನೇ, ವಾಸುದೇವನೇ, ವೈಕುಂಠನೇ, ಮಾಧವನೇ, ಜನಾರ್ದನನೇ, ಚಕ್ರಪಾಣಿಯೇ, ಶ್ರೀವತ್ಸ ಚಿಹ್ನೆಯುಳ್ಳವನೇ, ಶರಣಾಗತರಿಗೆ ಕಲ್ಪವೃಕ್ಷನೇ, ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 23,
          text: 'कन्दर्पदर्पहरसुन्दरदिव्यमूर्ते\nकान्ताकुचाम्बुरुहकुट्मललोलदृष्टे ।\nकल्याणनिर्मलगुणाकर दिव्यकीर्ते\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'O Lord whose beautiful divine form humbles the pride of Kāma, whose eyes rest lovingly on His beloved Lakṣmī; treasury of auspicious, spotless virtues, of divine renown. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಮನ್ಮಥನ ಗರ್ವವನ್ನು ಅಡಗಿಸುವ ಸುಂದರ ದಿವ್ಯರೂಪವುಳ್ಳವನೇ, ಪ್ರಿಯೆಯಾದ ಲಕ್ಷ್ಮಿಯ ಮೇಲೆ ಪ್ರೇಮದಿಂದ ನೆಟ್ಟ ದೃಷ್ಟಿಯುಳ್ಳವನೇ, ಮಂಗಳಕರವಾದ ನಿರ್ಮಲ ಗುಣಗಳ ಆಕರನೇ, ದಿವ್ಯಕೀರ್ತಿಯುಳ್ಳವನೇ, ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 24,
          text: 'मीनाकृते कमठ कोल नृसिंह वर्णिन्\nस्वामिन् परश्वथ तपोधन रामचन्द्र ।\nशेषांशराम यदुनन्दन कल्किरूप\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'O Lord who took the forms of the Fish, the Tortoise, the Boar, Narasiṁha and the young Brahmin Vāmana; O Paraśurāma, ascetic with the axe; O Rāmacandra; O Balarāma, born of Śeṣa; O Kṛṣṇa, delight of the Yadus; O Kalki. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಮತ್ಸ್ಯ, ಕೂರ್ಮ, ವರಾಹ, ನೃಸಿಂಹ, ವಟು ವಾಮನ ರೂಪಗಳನ್ನು ಧರಿಸಿದವನೇ, ಕೊಡಲಿ ಹಿಡಿದ ತಪಸ್ವಿ ಪರಶುರಾಮನೇ, ಶ್ರೀರಾಮಚಂದ್ರನೇ, ಶೇಷಾಂಶನಾದ ಬಲರಾಮನೇ, ಯದುನಂದನ ಶ್ರೀಕೃಷ್ಣನೇ, ಕಲ್ಕಿರೂಪನೇ, ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 25,
          text: 'एलालवङ्गघनसारसुगन्धितीर्थं\nदिव्यं वियत्सरिति हेमघटेषु पूर्णम् ।\nधृत्वाद्य वैदिकशिखामणयः प्रहृष्टाः\nतिष्ठन्ति वेङ्कटपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'The foremost of Vedic scholars stand here now, full of joy, holding golden pots filled with holy water from the heavenly river, fragrant with cardamom, clove and camphor. O Lord of Veṅkaṭa, may your dawn be blessed.',
            kn: 'ಏಲಕ್ಕಿ, ಲವಂಗ, ಕರ್ಪೂರಗಳಿಂದ ಸುಗಂಧಿತವಾದ ಆಕಾಶಗಂಗೆಯ ದಿವ್ಯತೀರ್ಥವನ್ನು ಚಿನ್ನದ ಕಲಶಗಳಲ್ಲಿ ತುಂಬಿ ಹಿಡಿದು, ವೇದವಿದ್ವಾಂಸರಲ್ಲಿ ಶ್ರೇಷ್ಠರು ಸಂತೋಷದಿಂದ ಈಗ ಕಾದು ನಿಂತಿದ್ದಾರೆ. ವೇಂಕಟಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 26,
          text: 'भास्वानुदेति विकचानि सरोरुहाणि\nसम्पूरयन्ति निनदैः ककुभो विहङ्गाः ।\nश्रीवैष्णवास्सततमर्थितमङ्गलास्ते\nधामाश्रयन्ति तव वेङ्कट सुप्रभातम् ॥',
          meaning: {
            en: 'The sun is rising, the lotuses have opened, the birds fill every quarter with their calls; the Śrīvaiṣṇavas, who ever pray for your welfare, are coming to your shrine. O Veṅkaṭa, may your dawn be blessed.',
            kn: 'ಸೂರ್ಯ ಉದಯಿಸುತ್ತಿದ್ದಾನೆ, ಕಮಲಗಳು ಅರಳಿವೆ, ಪಕ್ಷಿಗಳು ತಮ್ಮ ಕಲರವದಿಂದ ದಿಕ್ಕುಗಳನ್ನು ತುಂಬುತ್ತಿವೆ; ಸದಾ ನಿನ್ನ ಮಂಗಳವನ್ನು ಬಯಸುವ ಶ್ರೀವೈಷ್ಣವರು ನಿನ್ನ ಸನ್ನಿಧಿಗೆ ಬರುತ್ತಿದ್ದಾರೆ. ವೇಂಕಟೇಶನೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 27,
          text: 'ब्रह्मादयः सुरवरास्समहर्षयस्ते\nसन्तस्सनन्दनमुखास्त्वथ योगिवर्याः ।\nधामान्तिके तव हि मङ्गलवस्तुहस्ताः\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'Brahmā and the foremost gods, the great sages, the saints, and the best of yogis led by Sanandana stand near your shrine with auspicious offerings in their hands. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಬ್ರಹ್ಮ ಮೊದಲಾದ ಶ್ರೇಷ್ಠ ದೇವತೆಗಳು, ಮಹರ್ಷಿಗಳು, ಸಂತರು ಹಾಗೂ ಸನಂದನ ಮೊದಲಾದ ಯೋಗಿಶ್ರೇಷ್ಠರು ಮಂಗಳದ್ರವ್ಯಗಳನ್ನು ಕೈಯಲ್ಲಿ ಹಿಡಿದು ನಿನ್ನ ಸನ್ನಿಧಿಯ ಬಳಿ ನಿಂತಿದ್ದಾರೆ. ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 28,
          text: 'लक्ष्मीनिवास निरवद्यगुणैकसिन्धो\nसंसारसागरसमुत्तरणैकसेतो ।\nवेदान्तवेद्य निजवैभव भक्तभोग्य\nश्रीवेङ्कटाचलपते तव सुप्रभातम् ॥',
          meaning: {
            en: 'O abode of Lakṣmī, sole ocean of flawless virtues, the one bridge across the ocean of saṁsāra; O Lord known through Vedānta, glorious by your own nature, the delight of your devotees. O Lord of the Veṅkaṭa hill, may your dawn be blessed.',
            kn: 'ಲಕ್ಷ್ಮೀನಿವಾಸನೇ, ದೋಷರಹಿತ ಗುಣಗಳ ಏಕೈಕ ಸಾಗರನೇ, ಸಂಸಾರಸಾಗರವನ್ನು ದಾಟಿಸುವ ಏಕೈಕ ಸೇತುವೆಯೇ, ವೇದಾಂತಗಳಿಂದ ತಿಳಿಯಲ್ಪಡುವವನೇ, ಸ್ವಾಭಾವಿಕ ವೈಭವವುಳ್ಳವನೇ, ಭಕ್ತರಿಗೆ ಆನಂದದಾಯಕನೇ, ಶ್ರೀ ವೇಂಕಟಾಚಲಪತಿಯೇ, ನಿನಗೆ ಸುಪ್ರಭಾತವಾಗಲಿ.',
          },
        },
        {
          n: 29,
          text: 'इत्थं वृषाचलपतेरिह सुप्रभातं\nये मानवाः प्रतिदिनं पठितुं प्रवृत्ताः ।\nतेषां प्रभातसमये स्मृतिरङ्गभाजां\nप्रज्ञां परार्थसुलभां परमां प्रसूते ॥',
          meaning: {
            en: 'Those who set themselves to recite this Suprabhātam of the Lord of the Vṛṣa hill every day will, by remembering it at dawn, gain the highest wisdom, through which the supreme goal is easily reached.',
            kn: 'ವೃಷಾಚಲಪತಿಯ ಈ ಸುಪ್ರಭಾತವನ್ನು ಪ್ರತಿದಿನ ಪಠಿಸಲು ತೊಡಗುವ ಮಾನವರಿಗೆ, ಉಷಃಕಾಲದಲ್ಲಿ ಮಾಡುವ ಇದರ ಸ್ಮರಣೆಯು ಪರಮಾರ್ಥವನ್ನು ಸುಲಭವಾಗಿಸುವ ಶ್ರೇಷ್ಠ ಪ್ರಜ್ಞೆಯನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.',
          },
        },
      ],
    },
  ],
};

export const venkateshaPrapatti: Mantra = {
  id: 'venkatesha-prapatti',
  title: 'श्रीवेङ्कटेशप्रपत्तिः',
  titleEn: 'Sri Venkatesha Prapatti',
  category: 'stotra',
  order: 3,
  series: 'venkatesha',
  deity: 'Śrī Veṅkaṭeśvara',
  source: 'Prativādi Bhayaṅkaram Aṇṇan (15th c.), as recited at Tirumala',
  summary: 'The act of surrender (prapatti) in the Suprabhātam set. After saluting Lakṣmī as the mediator, each verse describes the feet of Lord Veṅkaṭeśa, their beauty, their marks and their praise in the Veda, and ends with the refrain “I take refuge in the feet of Śrī Veṅkaṭeśa”.',
  summaryKn: 'ಸುಪ್ರಭಾತದ ಸರಣಿಯಲ್ಲಿ ಶರಣಾಗತಿಯ ಸ್ತೋತ್ರ. ಮೊದಲು ಪುರುಷಕಾರಳಾದ ಲಕ್ಷ್ಮೀದೇವಿಗೆ ನಮಸ್ಕರಿಸಿ, ನಂತರ ಪ್ರತಿ ಶ್ಲೋಕದಲ್ಲೂ ಶ್ರೀ ವೇಂಕಟೇಶನ ಪಾದಗಳ ಸೌಂದರ್ಯ, ರೇಖೆಗಳು ಮತ್ತು ವೇದಗಳಲ್ಲಿ ಅವುಗಳ ಮಹಿಮೆಯನ್ನು ವರ್ಣಿಸಿ “ಶ್ರೀ ವೇಂಕಟೇಶನ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ” ಎಂದು ಮುಗಿಸುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'प्रपत्तिः',
      titleEn: 'Prapatti',
      note: 'Recited after the Venkatesha Stotram.',
      noteKn: 'ವೇಂಕಟೇಶ ಸ್ತೋತ್ರದ ನಂತರ ಪಠಿಸುವುದು.',
      verses: [
        {
          n: 1,
          text: 'ईशानां जगतोऽस्य वेङ्कटपतेर्विष्णोः परां प्रेयसीं\nतद्वक्षःस्थलनित्यवासरसिकां तत्क्षान्तिसंवर्धिनीम् ।\nपद्मालङ्कृतपाणिपल्लवयुगां पद्मासनस्थां श्रियं\nवात्सल्यादिगुणोज्ज्वलां भगवतीं वन्दे जगन्मातरम् ॥',
          meaning: {
            en: 'I bow to Śrī, the Mother of the world: ruler of this universe and supreme beloved of Viṣṇu, Lord of Veṅkaṭa; who delights to dwell for ever on His chest and makes His forbearance grow; whose tender hands hold lotuses, who is seated on a lotus, and who shines with motherly love and every virtue.',
            kn: 'ಈ ಜಗತ್ತಿನ ಒಡತಿಯೂ, ವೇಂಕಟಪತಿಯಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಪರಮಪ್ರಿಯೆಯೂ, ಆತನ ವಕ್ಷಸ್ಥಳದಲ್ಲಿ ಸದಾ ನೆಲೆಸುವುದರಲ್ಲಿ ಆನಂದಪಡುವವಳೂ, ಆತನ ಕ್ಷಮಾಗುಣವನ್ನು ಹೆಚ್ಚಿಸುವವಳೂ, ಕಮಲಗಳಿಂದ ಅಲಂಕೃತವಾದ ಚಿಗುರಿನಂತಹ ಕೈಗಳುಳ್ಳವಳೂ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತವಳೂ, ವಾತ್ಸಲ್ಯ ಮೊದಲಾದ ಗುಣಗಳಿಂದ ಬೆಳಗುವವಳೂ ಆದ ಜಗನ್ಮಾತೆ ಶ್ರೀಲಕ್ಷ್ಮೀದೇವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 2,
          text: 'श्रीमन् कृपाजलनिधे कृतसर्वलोक\nसर्वज्ञ शक्त नतवत्सल सर्वशेषिन् ।\nस्वामिन् सुशील सुलभाश्रितपारिजात\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'O glorious Lord, ocean of compassion, maker of all the worlds; all-knowing, all-powerful, tender to those who bow, master of all; O Lord, good-natured and easy to reach, wish-granting tree to those who depend on you: I take refuge in the feet of Śrī Veṅkaṭeśa.',
            kn: 'ಶ್ರೀಮಂತನೇ, ಕೃಪಾಸಾಗರನೇ, ಸಕಲ ಲೋಕಗಳನ್ನು ಸೃಷ್ಟಿಸಿದವನೇ, ಸರ್ವಜ್ಞನೇ, ಸರ್ವಶಕ್ತನೇ, ನಮಿಸುವವರ ಮೇಲೆ ವಾತ್ಸಲ್ಯವುಳ್ಳವನೇ, ಸರ್ವಸ್ವಾಮಿಯೇ, ಒಡೆಯನೇ, ಸುಶೀಲನೇ, ಸುಲಭನೇ, ಆಶ್ರಿತರಿಗೆ ಕಲ್ಪವೃಕ್ಷನೇ, ಶ್ರೀ ವೇಂಕಟೇಶನ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 3,
          text: 'आनूपुरार्पितसुजातसुगन्धिपुष्प-\nसौरभ्यसौरभकरौ समसन्निवेशौ ।\nसौम्यौ सदानुभवनेऽपि नवानुभाव्यौ\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'His feet lend their own fragrance to the sweet flowers heaped on them up to the anklets; they are perfectly shaped and gentle, and ever new however long one enjoys them. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಕಾಲ್ಗೆಜ್ಜೆಯವರೆಗೂ ಅರ್ಪಿಸಿದ ಸುಗಂಧಪುಷ್ಪಗಳಿಗೂ ಪರಿಮಳವನ್ನು ನೀಡುವ, ಸುಂದರವಾದ ಸಮ ಆಕಾರವುಳ್ಳ, ಸೌಮ್ಯವಾದ, ಎಷ್ಟು ಅನುಭವಿಸಿದರೂ ಹೊಸದಾಗಿಯೇ ತೋರುವ ಪಾದಗಳವು. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 4,
          text: 'सद्योविकासिसमुदित्वरसान्द्रराग-\nसौरभ्यनिर्भरसरोरुहसाम्यवार्ताम् ।\nसम्यक्षु साहसपदेषु विलेखयन्तौ\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'To compare them with lotuses just opened, deep red and full of fragrance, would be a rash claim; so they show. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಈಗ ತಾನೇ ಅರಳಿದ, ಗಾಢ ಕೆಂಪು ಬಣ್ಣದ, ಸುಗಂಧಭರಿತ ಕಮಲಗಳಿಗೆ ಅವುಗಳನ್ನು ಹೋಲಿಸುವ ಮಾತೇ ದುಸ್ಸಾಹಸದ ಮಾತೆಂದು ಆ ಪಾದಗಳು ತೋರಿಸುತ್ತವೆ. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 5,
          text: 'रेखामयध्वजसुधाकलशातपत्र-\nवज्राङ्कुशाम्बुरुहकल्पकशङ्खचक्रैः ।\nभव्यैरलङ्कृततलौ परतत्त्वचिह्नैः\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'Their soles are adorned with lines in the shape of the flag, the nectar-pot, the umbrella, the thunderbolt, the goad, the lotus, the wish-granting tree, the conch and the discus, the auspicious marks of the Supreme. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಧ್ವಜ, ಅಮೃತಕಲಶ, ಛತ್ರ, ವಜ್ರ, ಅಂಕುಶ, ಕಮಲ, ಕಲ್ಪವೃಕ್ಷ, ಶಂಖ, ಚಕ್ರಗಳ ಆಕಾರದ ರೇಖೆಗಳೆಂಬ ಪರತತ್ತ್ವದ ಶುಭಚಿಹ್ನೆಗಳಿಂದ ಆ ಪಾದಗಳ ಅಂಗಾಲುಗಳು ಅಲಂಕೃತವಾಗಿವೆ. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 6,
          text: 'ताम्रोदरद्युतिपराजितपद्मरागौ\nबाह्यैर्महोभिरभिभूतमहेन्द्रनीलौ ।\nउद्यन्नखांशुभिरुदस्तशशाङ्कभासौ\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'Their coppery soles outshine rubies, their upper sides outshine sapphires, and the rays rising from their toenails put the moon’s light to shame. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ತಾಮ್ರವರ್ಣದ ಅಂಗಾಲಿನ ಕಾಂತಿಯಿಂದ ಪದ್ಮರಾಗಮಣಿಯನ್ನು, ಮೇಲ್ಭಾಗದ ಕಾಂತಿಯಿಂದ ಇಂದ್ರನೀಲಮಣಿಯನ್ನು ಮೀರಿಸುವ, ಉಗುರುಗಳ ಕಿರಣಗಳಿಂದ ಚಂದ್ರನ ಕಾಂತಿಯನ್ನೂ ತಳ್ಳಿಹಾಕುವ ಪಾದಗಳವು. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 7,
          text: 'सप्रेमभीति कमलाकरपल्लवाभ्यां\nसंवाहनेऽपि सपदि क्लममादधानौ ।\nकान्ताववाङ्मनसगोचरसौकुमार्यौ\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'So delicate that no word or thought can reach it, these lovely feet grow tired at once even when Lakṣmī presses them with her tender hands, with love and with fear of hurting them. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಪ್ರೇಮದಿಂದಲೂ, ನೋವಾದೀತೆಂಬ ಭಯದಿಂದಲೂ ಲಕ್ಷ್ಮೀದೇವಿ ತನ್ನ ಚಿಗುರಿನಂತಹ ಕೈಗಳಿಂದ ಮೃದುವಾಗಿ ಒತ್ತುವಾಗಲೂ ಕೂಡಲೇ ಬಳಲುವ, ಮಾತಿಗೂ ಮನಸ್ಸಿಗೂ ನಿಲುಕದ ಕೋಮಲತೆಯುಳ್ಳ ಸುಂದರ ಪಾದಗಳವು. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 8,
          text: 'लक्ष्मीमहीतदनुरूपनिजानुभाव-\nनीलादिदिव्यमहिषीकरपल्लवानाम् ।\nआरुण्यसङ्क्रमणतः किल सान्द्ररागौ\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'They are deep red, it seems, from the colour passed to them by the tender hands of Lakṣmī, Bhūmi, Nīlā and the other divine queens, each of a glory worthy of Him. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಲಕ್ಷ್ಮಿ, ಭೂದೇವಿ ಹಾಗೂ ಆತನಿಗೆ ತಕ್ಕ ಮಹಿಮೆಯುಳ್ಳ ನೀಳಾದೇವಿ ಮೊದಲಾದ ದಿವ್ಯ ಮಹಿಷಿಯರ ಚಿಗುರಿನಂತಹ ಕೈಗಳ ಕೆಂಪು ಬಣ್ಣ ತಾಗಿಯೋ ಎಂಬಂತೆ ಆ ಪಾದಗಳು ಗಾಢವಾಗಿ ಕೆಂಪಾಗಿವೆ. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 9,
          text: 'नित्यानमद्विधिशिवादिकिरीटकोटि-\nप्रत्युप्तदीप्तनवरत्नमहःप्ररोहैः ।\nनीराजनाविधिमुदारमुपादधानौ\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'They receive a grand ārati from the shoots of light rising from the bright gems set in the crowns of Brahmā, Śiva and the others who bow to them at all times. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಸದಾ ನಮಿಸುವ ಬ್ರಹ್ಮ, ಶಿವ ಮೊದಲಾದವರ ಕಿರೀಟಗಳ ತುದಿಯಲ್ಲಿ ಕೆತ್ತಿದ ಹೊಳೆಯುವ ನವರತ್ನಗಳ ಕಾಂತಿಕಿರಣಗಳಿಂದ ಆ ಪಾದಗಳು ಭವ್ಯವಾದ ನೀರಾಜನವನ್ನು ಪಡೆಯುತ್ತವೆ. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 10,
          text: 'विष्णोः पदे परम इत्युदितप्रशंसौ\nयौ मध्व उत्स इति भोग्यतयाप्युपात्तौ ।\nभूयस्तथेति तव पाणितलप्रदिष्टौ\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'The Veda praises them as “the supreme step of Viṣṇu” and cherishes them as “the fountain of honey”, and your own hand points to them again as that very refuge. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: '“ವಿಷ್ಣುವಿನ ಪರಮಪದ” ಎಂದು ವೇದಗಳು ಸ್ತುತಿಸುವ, “ಮಧುವಿನ ಚಿಲುಮೆ” ಎಂದು ಆನಂದದಾಯಕವೆಂದು ಹೇಳುವ, ಅದೇ ಇವು ಎಂದು ಮತ್ತೆ ನಿನ್ನ ಅಂಗೈ ತೋರಿಸುತ್ತಿರುವ ಪಾದಗಳವು. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 11,
          text: 'पार्थाय तत्सदृशसारथिना त्वयैव\nयौ दर्शितौ स्वचरणौ शरणं व्रजेति ।\nभूयोऽपि मह्यमिह तौ करदर्शितौ ते\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'As Pārtha’s charioteer you yourself showed him your feet, saying “Take refuge in Me”; here you show those same feet to me again with your hand. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಪಾರ್ಥನ ಸಾರಥಿಯಾಗಿದ್ದ ನೀನೇ “ನನಗೆ ಶರಣಾಗು” ಎಂದು ಅವನಿಗೆ ತೋರಿಸಿದ ನಿನ್ನ ಪಾದಗಳನ್ನು ಇಲ್ಲಿ ಮತ್ತೆ ನನಗೂ ನಿನ್ನ ಕೈಯಿಂದ ತೋರಿಸುತ್ತಿರುವೆ. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 12,
          text: 'मन्मूर्ध्नि कालियफणे विकटाटवीषु\nश्रीवेङ्कटाद्रिशिखरे शिरसि श्रुतीनाम् ।\nचित्तेऽप्यनन्यमनसां सममाहितौ ते\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'Your feet rest alike on my head, on the hood of Kāliya, in the wild forests, on the summit of the Veṅkaṭa hill, on the crown of the Vedas, and in the hearts of those devoted to you alone. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ನನ್ನ ತಲೆಯ ಮೇಲೂ, ಕಾಳಿಂಗನ ಹೆಡೆಯ ಮೇಲೂ, ದಟ್ಟ ಕಾಡುಗಳಲ್ಲೂ, ವೇಂಕಟಾದ್ರಿಶಿಖರದಲ್ಲೂ, ವೇದಗಳ ಶಿರಸ್ಸಾದ ಉಪನಿಷತ್ತುಗಳಲ್ಲೂ, ಅನನ್ಯಭಕ್ತರ ಮನಸ್ಸಿನಲ್ಲೂ ಸಮಾನವಾಗಿ ನಿನ್ನ ಪಾದಗಳು ನೆಲೆಸಿವೆ. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 13,
          text: 'अम्लानहृष्यदवनीतलकीर्णपुष्पौ\nश्रीवेङ्कटाद्रिशिखराभरणायमानौ ।\nआनन्दिताखिलमनोनयनौ तवैतौ\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'These feet of yours are like unfading, joyful flowers strewn on the earth; they are the ornaments of the Veṅkaṭa summit and delight every mind and every eye. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಬಾಡದ, ಆನಂದ ನೀಡುವ, ಭೂಮಿಯ ಮೇಲೆ ಹರಡಿದ ಹೂವುಗಳಂತಿರುವ, ವೇಂಕಟಾದ್ರಿಶಿಖರಕ್ಕೆ ಆಭರಣದಂತಿರುವ, ಎಲ್ಲರ ಮನಸ್ಸನ್ನೂ ಕಣ್ಣುಗಳನ್ನೂ ಆನಂದಗೊಳಿಸುವ ನಿನ್ನ ಪಾದಗಳಿವು. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 14,
          text: 'प्रायः प्रपन्नजनताप्रथमावगाह्यौ\nमातुः स्तनाविव शिशोरमृतायमानौ ।\nप्राप्तौ परस्परतुलामतुलान्तरौ ते\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'Those who surrender turn to your feet first of all; to them they are nectar, like a mother’s breast to her child; they have no equal, and are matched only by each other. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಶರಣಾಗತರು ಎಲ್ಲಕ್ಕಿಂತ ಮೊದಲು ಆಶ್ರಯಿಸುವ, ಮಗುವಿಗೆ ತಾಯಿಯ ಎದೆಹಾಲಿನಂತೆ ಅಮೃತಸಮಾನವಾದ, ಅನುಪಮವಾಗಿದ್ದು ಒಂದಕ್ಕೊಂದೇ ಸಮವಾಗಿರುವ ಪಾದಗಳವು. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 15,
          text: 'सत्त्वोत्तरैः सततसेव्यपदाम्बुजेन\nसंसारतारकदयार्द्रदृगञ्चलेन ।\nसौम्योपयन्तृमुनिना मम दर्शितौ ते\nश्रीवेङ्कटेश चरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'Your feet were shown to me by the sage Saumya Jāmātṛ (Maṇavāḷa Māmuni), whose lotus feet the pure-hearted ever serve and whose glance, moist with compassion, carries souls across saṁsāra. In those feet of Śrī Veṅkaṭeśa I take refuge.',
            kn: 'ಸತ್ತ್ವಗುಣಸಂಪನ್ನರು ಸದಾ ಸೇವಿಸುವ ಪಾದಕಮಲಗಳುಳ್ಳ, ಸಂಸಾರದಿಂದ ಪಾರುಮಾಡುವ ದಯಾರ್ದ್ರ ದೃಷ್ಟಿಯುಳ್ಳ ಸೌಮ್ಯಜಾಮಾತೃ ಮುನಿಗಳು (ಮಣವಾಳ ಮಾಮುನಿಗಳು) ನನಗೆ ನಿನ್ನ ಪಾದಗಳನ್ನು ತೋರಿಸಿದರು. ಶ್ರೀ ವೇಂಕಟೇಶನ ಆ ಚರಣಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 16,
          text: 'श्रीश श्रिया घटिकया त्वदुपायभावे\nप्राप्ये त्वयि स्वयमुपेयतया स्फुरन्त्या ।\nनित्याश्रिताय निरवद्यगुणाय तुभ्यं\nस्यां किङ्करो वृषगिरीश न जातु मह्यम् ॥',
          meaning: {
            en: 'O Lord of Śrī, Lord of the Vṛṣa hill: Śrī brings us to you when you are the means, and shines as the goal herself when you are the goal to be reached. May I be the servant only of you, ever united with her and flawless in virtue, and never serve myself.',
            kn: 'ಶ್ರೀಶನೇ, ವೃಷಗಿರೀಶನೇ, ನೀನು ಉಪಾಯವಾಗಿರುವಾಗ ನಮ್ಮನ್ನು ನಿನ್ನೊಡನೆ ಜೋಡಿಸುವವಳೂ, ನೀನು ಪಡೆಯಬೇಕಾದ ಗುರಿಯಾಗಿರುವಾಗ ತಾನೂ ಗುರಿಯಾಗಿ ಬೆಳಗುವವಳೂ ಆದ ಶ್ರೀದೇವಿಯೊಡನೆ ಸದಾ ಕೂಡಿರುವ, ದೋಷರಹಿತ ಗುಣಗಳುಳ್ಳ ನಿನಗೇ ನಾನು ಕಿಂಕರನಾಗಿರುವೆನು; ಎಂದಿಗೂ ನನ್ನ ಸ್ವಾರ್ಥಕ್ಕಾಗಿ ಅಲ್ಲ.',
          },
        },
      ],
    },
  ],
};

export const venkateshaMangalashasanam: Mantra = {
  id: 'venkatesha-mangalashasanam',
  title: 'श्रीवेङ्कटेशमङ्गलाशासनम्',
  titleEn: 'Sri Venkatesha Mangalasasanam',
  category: 'stotra',
  order: 4,
  series: 'venkatesha',
  deity: 'Śrī Veṅkaṭeśvara',
  source: 'Prativādi Bhayaṅkaram Aṇṇan (15th c.), as recited at Tirumala',
  summary: 'The closing benediction of the Suprabhātam set: verse after verse wishes auspiciousness (maṅgalam) to Śrīnivāsa, the Lord of the Veṅkaṭa hill, recalling His beauty, His grace and the ācāryas who sang His glory.',
  summaryKn: 'ಸುಪ್ರಭಾತ ಸರಣಿಯ ಕೊನೆಯ ಮಂಗಳ ಸ್ತೋತ್ರ. ವೇಂಕಟಾಚಲವಾಸಿಯಾದ ಶ್ರೀನಿವಾಸನ ಸೌಂದರ್ಯ, ಕರುಣೆ ಮತ್ತು ಆತನನ್ನು ಸ್ತುತಿಸಿದ ಆಚಾರ್ಯರನ್ನು ನೆನೆಯುತ್ತಾ ಪ್ರತಿ ಶ್ಲೋಕದಲ್ಲೂ ಆತನಿಗೆ ಮಂಗಳವನ್ನು ಹಾರೈಸುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'मङ्गलाशासनम्',
      titleEn: 'Mangalasasanam',
      note: 'Recited last, after the Prapatti.',
      noteKn: 'ಪ್ರಪತ್ತಿಯ ನಂತರ ಕೊನೆಯಲ್ಲಿ ಪಠಿಸುವುದು.',
      verses: [
        {
          n: 1,
          text: 'श्रियः कान्ताय कल्याणनिधये निधयेऽर्थिनाम् ।\nश्रीवेङ्कटनिवासाय श्रीनिवासाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Śrīnivāsa, beloved of Śrī, treasury of every good, the treasure of those who ask, who dwells on the Veṅkaṭa hill.',
            kn: 'ಶ್ರೀದೇವಿಯ ಪತಿಯೂ, ಕಲ್ಯಾಣಗುಣಗಳ ನಿಧಿಯೂ, ಬೇಡುವವರಿಗೆ ನಿಧಿಯೂ, ಶ್ರೀ ವೇಂಕಟಾಚಲದಲ್ಲಿ ನೆಲೆಸಿರುವವನೂ ಆದ ಶ್ರೀನಿವಾಸನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 2,
          text: 'लक्ष्मीसविभ्रमालोकसुभ्रूविभ्रमचक्षुषे ।\nचक्षुषे सर्वलोकानां वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Veṅkaṭeśa, whose eyes and lovely brows play in answer to Lakṣmī’s graceful glances, and who is the eye of all the worlds.',
            kn: 'ಲಕ್ಷ್ಮೀದೇವಿಯ ವಿಲಾಸಪೂರ್ಣ ನೋಟಕ್ಕೆ ಸುಂದರ ಹುಬ್ಬುಗಳೊಡನೆ ವಿಲಾಸದಿಂದ ಸ್ಪಂದಿಸುವ ಕಣ್ಣುಗಳುಳ್ಳವನೂ, ಸಕಲ ಲೋಕಗಳಿಗೆ ಕಣ್ಣಾಗಿರುವವನೂ ಆದ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 3,
          text: 'श्रीवेङ्कटाद्रिशृङ्गाग्रमङ्गलाभरणाङ्घ्रये ।\nमङ्गलानां निवासाय श्रीनिवासाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Śrīnivāsa, whose feet are the auspicious ornament of the summit of the Veṅkaṭa hill, and who is the home of all that is auspicious.',
            kn: 'ಶ್ರೀ ವೇಂಕಟಾದ್ರಿಯ ಶಿಖರಕ್ಕೆ ಮಂಗಳಾಭರಣವಾದ ಪಾದಗಳುಳ್ಳವನೂ, ಸಕಲ ಮಂಗಳಗಳ ನೆಲೆಯೂ ಆದ ಶ್ರೀನಿವಾಸನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 4,
          text: 'सर्वावयवसौन्दर्यसम्पदा सर्वचेतसाम् ।\nसदा सम्मोहनायास्तु वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Veṅkaṭeśa, who by the beauty of every limb forever enchants the hearts of all.',
            kn: 'ತನ್ನ ಪ್ರತಿಯೊಂದು ಅವಯವದ ಸೌಂದರ್ಯಸಂಪತ್ತಿನಿಂದ ಎಲ್ಲರ ಮನಸ್ಸನ್ನೂ ಸದಾ ಮೋಹಗೊಳಿಸುವ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 5,
          text: 'नित्याय निरवद्याय सत्यानन्दचिदात्मने ।\nसर्वान्तरात्मने श्रीमद्वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to glorious Veṅkaṭeśa, eternal and flawless, whose nature is truth, bliss and consciousness, the inner Self of all.',
            kn: 'ನಿತ್ಯನೂ, ದೋಷರಹಿತನೂ, ಸತ್ಯ, ಆನಂದ, ಜ್ಞಾನಸ್ವರೂಪನೂ, ಎಲ್ಲರ ಅಂತರಾತ್ಮನೂ ಆದ ಶ್ರೀಮದ್ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 6,
          text: 'स्वतस्सर्वविदे सर्वशक्तये सर्वशेषिणे ।\nसुलभाय सुशीलाय वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Veṅkaṭeśa, who knows all by His very nature, all-powerful and master of all, easy to reach and gracious to all.',
            kn: 'ಸ್ವಭಾವತಃ ಸರ್ವಜ್ಞನೂ, ಸರ್ವಶಕ್ತನೂ, ಸರ್ವಸ್ವಾಮಿಯೂ, ಸುಲಭನೂ, ಸುಶೀಲನೂ ಆದ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 7,
          text: 'परस्मै ब्रह्मणे पूर्णकामाय परमात्मने ।\nप्रयुञ्जे परतत्त्वाय वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'I offer auspiciousness to Veṅkaṭeśa, the supreme Brahman, whose every wish is fulfilled, the Supreme Self, the highest reality.',
            kn: 'ಪರಬ್ರಹ್ಮನೂ, ಪೂರ್ಣಕಾಮನೂ, ಪರಮಾತ್ಮನೂ, ಪರತತ್ತ್ವನೂ ಆದ ವೇಂಕಟೇಶನಿಗೆ ನಾನು ಮಂಗಳವನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 8,
          text: 'आकालतत्त्वमश्रान्तमात्मनामनुपश्यताम् ।\nअतृप्त्यमृतरूपाय वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Veṅkaṭeśa, a nectar that never cloys, though souls behold His nature without pause for all time.',
            kn: 'ಎಲ್ಲ ಕಾಲದಲ್ಲೂ ಬಿಡುವಿಲ್ಲದೆ ಆತನ ಸ್ವರೂಪವನ್ನು ಕಾಣುತ್ತಿದ್ದರೂ ಜೀವರಿಗೆ ತೃಪ್ತಿ ತೀರದ ಅಮೃತಸ್ವರೂಪನಾದ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 9,
          text: 'प्रायः स्वचरणौ पुंसां शरण्यत्वेन पाणिना ।\nकृपयादिशते श्रीमद्वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to glorious Veṅkaṭeśa, who in His compassion points with His own hand to His feet as the refuge of all.',
            kn: 'ಕರುಣೆಯಿಂದ ತನ್ನ ಕೈಯಿಂದಲೇ ತನ್ನ ಪಾದಗಳನ್ನು ಜನರಿಗೆ ಶರಣ್ಯವೆಂದು ತೋರಿಸುವ ಶ್ರೀಮದ್ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 10,
          text: 'दयामृततरङ्गिण्यास्तरङ्गैरिव शीतलैः ।\nअपाङ्गैः सिञ्चते विश्वं वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Veṅkaṭeśa, who bathes the universe in His side-glances, cool as the waves of a river of the nectar of compassion.',
            kn: 'ದಯಾಮೃತದ ನದಿಯ ತಂಪಾದ ಅಲೆಗಳಂತಿರುವ ಕಡೆಗಣ್ಣ ನೋಟಗಳಿಂದ ಜಗತ್ತನ್ನು ತಣಿಸುವ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 11,
          text: 'स्रग्भूषाम्बरहेतीनां सुषमावहमूर्तये ।\nसर्वार्तिशमनायास्तु वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Veṅkaṭeśa, whose form lends beauty to His garlands, ornaments, garments and weapons, and who ends all suffering.',
            kn: 'ತನ್ನ ಹಾರ, ಆಭರಣ, ವಸ್ತ್ರ, ಆಯುಧಗಳಿಗೇ ಸೊಬಗನ್ನು ನೀಡುವ ರೂಪವುಳ್ಳವನೂ, ಎಲ್ಲ ದುಃಖಗಳನ್ನು ಶಮನಗೊಳಿಸುವವನೂ ಆದ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 12,
          text: 'श्रीवैकुण्ठविरक्ताय स्वामिपुष्करिणीतटे ।\nरमया रममाणाय वेङ्कटेशाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Veṅkaṭeśa, who, caring less even for Vaikuṇṭha, delights with Ramā on the bank of the Svāmi Puṣkariṇī.',
            kn: 'ಶ್ರೀವೈಕುಂಠದಲ್ಲೂ ಆಸಕ್ತಿ ತೊರೆದು ಸ್ವಾಮಿ ಪುಷ್ಕರಿಣಿಯ ತೀರದಲ್ಲಿ ರಮಾದೇವಿಯೊಡನೆ ವಿಹರಿಸುವ ವೇಂಕಟೇಶನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 13,
          text: 'श्रीमत्सुन्दरजामातृमुनिमानसवासिने ।\nसर्वलोकनिवासाय श्रीनिवासाय मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to Śrīnivāsa, who dwells in the heart of the revered sage Sundara Jāmātṛ (Maṇavāḷa Māmuni), and in whom all the worlds dwell.',
            kn: 'ಶ್ರೀಮಾನ್ ಸುಂದರಜಾಮಾತೃ ಮುನಿಗಳ (ಮಣವಾಳ ಮಾಮುನಿಗಳ) ಮನಸ್ಸಿನಲ್ಲಿ ನೆಲೆಸಿರುವವನೂ, ಸಕಲ ಲೋಕಗಳಿಗೆ ನೆಲೆಯಾದವನೂ ಆದ ಶ್ರೀನಿವಾಸನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
        {
          n: 14,
          text: 'मङ्गलाशासनपरैर्मदाचार्यपुरोगमैः ।\nसर्वैश्च पूर्वैराचार्यैः सत्कृतायास्तु मङ्गलम् ॥',
          meaning: {
            en: 'Auspiciousness to the Lord who is honoured by my own ācārya and by all the earlier ācāryas, whose delight was to sing His auspiciousness.',
            kn: 'ಮಂಗಳಾಶಾಸನದಲ್ಲೇ ನಿರತರಾದ ನನ್ನ ಆಚಾರ್ಯರು ಮೊದಲಾದ ಎಲ್ಲ ಪೂರ್ವಾಚಾರ್ಯರಿಂದ ಸತ್ಕರಿಸಲ್ಪಟ್ಟ ಸ್ವಾಮಿಗೆ ಮಂಗಳವಾಗಲಿ.',
          },
        },
      ],
    },
  ],
};
