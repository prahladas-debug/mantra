// Śrī Lalitā Aṣṭottara Śatanāmāvalī (रजताचलशृङ्गाग्रमध्यस्थायै नमो नमः …).
// Collated Nov 2026; not yet checked line by line against a printed edition.
//
// Sources (independent digital witnesses):
//   A. stotranidhi.com, Devanagari page (from the printed "Prabhāta Stotranidhi"):
//      base text.
//   B. swamioremmurti/swadhyay (GitHub), books/lalita_sahasranama_stotram.html:
//      a typed copy of a Gita Press-style edition (Hindi notes, numbered 1–108,
//      each name prefixed ॐ ऐं ह्रीं श्रीं).
// A third copy found online (mallesh120/DivinePath) agrees with A letter for
// letter and was treated as a copy of A, not as a witness.
//
// With two witnesses, differences were resolved by grammar and sense; where
// both readings are good, A is kept:
//   62 समस्तदेवदनुजप्रेरिकायै (B, feminine) / प्रेरकायै (A)
//   81 षोडशाक्षरी (A) / षोडशक्षरी (B, typo); 86 शिरश्छेद (A) / शिरच्छेद (B)
//   85 महासत्त्व (A) / महासत्व (B); 104 वेषाढ्यायै (A; B has a broken glyph)
// Kept from A, B's reading noted:
//   9 निटिलायै / निटलायै; 48 मकुटायै / मुकुटायै
//   54 नितान्तसच्चिदानन्दसंयुक्तायै / निरञ्जनचिदानन्दसंयुक्तायै
//   73 श्रीलोचनकृतोल्लासफलदायै / त्रिलोचनकृतोल्लासफलदायै
//   87 धात्र्यच्युतसुराधीशसुखदायै / धाराच्युतसुराधीशसुखदायै
// B prefixes ऐं ह्रीं श्रीं to every name; A gives ॐ ऐं ह्रीं श्रीम् once at the
// start. This file gives that line once and writes each name as ॐ … नमो नमः.
import type { Mantra } from '../types';

/** [name in the dative, English gloss, Kannada gloss]; an empty gloss means none is given. */
const NAMES: [string, string, string][] = [
  ['रजताचलशृङ्गाग्रमध्यस्थायै', 'who dwells on the summit of the silver mountain, Kailāsa', 'ಬೆಳ್ಳಿಬೆಟ್ಟವಾದ ಕೈಲಾಸದ ಶಿಖರದಲ್ಲಿ ನೆಲೆಸಿರುವವಳು'],
  ['हिमाचलमहावंशपावनायै', 'who sanctifies the great line of Himavān', 'ಹಿಮವಂತನ ಮಹಾವಂಶವನ್ನು ಪಾವನಗೊಳಿಸಿದವಳು'],
  ['शङ्करार्धाङ्गसौन्दर्यशरीरायै', 'whose beautiful body forms half of Śaṅkara', 'ಶಂಕರನ ಅರ್ಧಾಂಗವಾದ ಸುಂದರ ದೇಹವುಳ್ಳವಳು'],
  ['लसन्मरकतस्वच्छविग्रहायै', 'whose clear form shines like emerald', 'ಹೊಳೆಯುವ ಮರಕತಮಣಿಯಂತೆ ನಿರ್ಮಲ ರೂಪದವಳು'],
  ['महातिशयसौन्दर्यलावण्यायै', 'of surpassing beauty and grace', 'ಅತಿಶಯವಾದ ಸೌಂದರ್ಯ ಲಾವಣ್ಯಗಳುಳ್ಳವಳು'],
  ['शशाङ्कशेखरप्राणवल्लभायै', 'dear as life to the moon-crested Śiva', 'ಚಂದ್ರಶೇಖರನಾದ ಶಿವನಿಗೆ ಪ್ರಾಣಪ್ರಿಯಳು'],
  ['सदापञ्चदशात्मैक्यस्वरूपायै', 'ever one in nature with the fifteen-syllabled (Pañcadaśī) mantra', 'ಸದಾ ಪಂಚದಶೀ ಮಂತ್ರದೊಡನೆ ಏಕರೂಪಳಾಗಿರುವವಳು'],
  ['वज्रमाणिक्यकटककिरीटायै', 'wearing bracelets and a crown of diamonds and rubies', 'ವಜ್ರ ಮಾಣಿಕ್ಯಗಳ ಕಡಗ ಕಿರೀಟಗಳನ್ನು ಧರಿಸಿದವಳು'],
  ['कस्तूरीतिलकोल्लासिनिटिलायै', 'whose forehead shines with a musk tilaka', 'ಕಸ್ತೂರಿ ತಿಲಕದಿಂದ ಶೋಭಿಸುವ ಹಣೆಯುಳ್ಳವಳು'],
  ['भस्मरेखाङ्कितलसन्मस्तकायै', 'whose shining head is marked with lines of sacred ash', 'ಭಸ್ಮರೇಖೆಗಳಿಂದ ಶೋಭಿಸುವ ತಲೆಯುಳ್ಳವಳು'],
  ['विकचाम्भोरुहदललोचनायै', 'whose eyes are like the petals of a blooming lotus', 'ಅರಳಿದ ಕಮಲದಳದಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವಳು'],
  ['शरच्चाम्पेयपुष्पाभनासिकायै', 'whose nose is like an autumn campaka flower', 'ಶರತ್ಕಾಲದ ಸಂಪಿಗೆ ಹೂವಿನಂತಹ ಮೂಗುಳ್ಳವಳು'],
  ['लसत्काञ्चनताटङ्कयुगलायै', 'wearing a pair of shining golden ear ornaments', 'ಹೊಳೆಯುವ ಚಿನ್ನದ ಓಲೆಗಳ ಜೋಡಿಯನ್ನು ಧರಿಸಿದವಳು'],
  ['मणिदर्पणसङ्काशकपोलायै', 'whose cheeks are like jewelled mirrors', 'ರತ್ನದರ್ಪಣದಂತಹ ಕೆನ್ನೆಗಳುಳ್ಳವಳು'],
  ['ताम्बूलपूरितस्मेरवदनायै', 'whose smiling mouth is filled with betel', 'ತಾಂಬೂಲದಿಂದ ತುಂಬಿದ ನಗುಮುಖದವಳು'],
  ['सुपक्वदाडिमीबीजरदनायै', 'whose teeth are like the seeds of a ripe pomegranate', 'ಚೆನ್ನಾಗಿ ಮಾಗಿದ ದಾಳಿಂಬೆ ಬೀಜಗಳಂತಹ ಹಲ್ಲುಗಳುಳ್ಳವಳು'],
  ['कम्बुपूगसमच्छायकन्धरायै', 'whose neck has the sheen of a conch and the grace of an areca palm', 'ಶಂಖದ ಹೊಳಪು ಮತ್ತು ಅಡಿಕೆಮರದ ಸೊಬಗಿನ ಕಂಠವುಳ್ಳವಳು'],
  ['स्थूलमुक्ताफलोदारसुहारायै', 'wearing a splendid necklace of large pearls', 'ದೊಡ್ಡ ಮುತ್ತುಗಳ ಸುಂದರ ಹಾರವನ್ನು ಧರಿಸಿದವಳು'],
  ['गिरीशबद्धमाङ्गल्यमङ्गलायै', 'auspicious with the marriage thread tied by Girīśa (Śiva)', 'ಗಿರೀಶನು ಕಟ್ಟಿದ ಮಾಂಗಲ್ಯದಿಂದ ಮಂಗಳಕರಳಾದವಳು'],
  ['पद्मपाशाङ्कुशलसत्कराब्जायै', 'whose lotus hands hold the lotus, the noose and the goad', 'ಕಮಲ, ಪಾಶ, ಅಂಕುಶಗಳಿಂದ ಶೋಭಿಸುವ ಕರಕಮಲಗಳುಳ್ಳವಳು'],
  ['पद्मकैरवमन्दारसुमालिन्यै', 'garlanded with lotus, water-lily and mandāra flowers', 'ಕಮಲ, ನೈದಿಲೆ, ಮಂದಾರ ಹೂಗಳ ಮಾಲೆಯನ್ನು ಧರಿಸಿದವಳು'],
  ['सुवर्णकुम्भयुग्माभसुकुचायै', 'whose bosom is like a pair of golden pots', 'ಚಿನ್ನದ ಕಲಶಗಳ ಜೋಡಿಯಂತಹ ಸ್ತನಗಳುಳ್ಳವಳು'],
  ['रमणीयचतुर्बाहुसंयुक्तायै', 'with four lovely arms', 'ನಾಲ್ಕು ಮನೋಹರ ಬಾಹುಗಳುಳ್ಳವಳು'],
  ['कनकाङ्गदकेयूरभूषितायै', 'adorned with golden armlets', 'ಚಿನ್ನದ ತೋಳ್ಬಂದಿ ಕೇಯೂರಗಳಿಂದ ಅಲಂಕೃತಳಾದವಳು'],
  ['बृहत्सौवर्णसौन्दर्यवसनायै', 'dressed in rich and beautiful garments of gold', 'ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವ ಸುಂದರ ವಸ್ತ್ರವನ್ನು ಧರಿಸಿದವಳು'],
  ['बृहन्नितम्बविलसज्जघनायै', 'with broad and graceful hips', 'ವಿಶಾಲವಾದ ನಿತಂಬಗಳಿಂದ ಶೋಭಿಸುವವಳು'],
  ['सौभाग्यजातशृङ्गारमध्यमायै', 'whose waist bears the charm that comes from good fortune', 'ಸೌಭಾಗ್ಯದಿಂದ ಹುಟ್ಟಿದ ಸೊಬಗಿನ ನಡುವುಳ್ಳವಳು'],
  ['दिव्यभूषणसन्दोहरञ्जितायै', 'resplendent with a wealth of divine ornaments', 'ದಿವ್ಯಾಭರಣಗಳ ರಾಶಿಯಿಂದ ಶೋಭಿಸುವವಳು'],
  ['पारिजातगुणाधिक्यपदाब्जायै', 'whose lotus feet surpass the pārijāta flower', 'ಪಾರಿಜಾತಕ್ಕಿಂತಲೂ ಮಿಗಿಲಾದ ಪಾದಕಮಲಗಳುಳ್ಳವಳು'],
  ['सुपद्मरागसङ्काशचरणायै', 'whose feet glow like fine rubies', 'ಉತ್ತಮ ಪದ್ಮರಾಗಮಣಿಯಂತೆ ಹೊಳೆಯುವ ಪಾದಗಳುಳ್ಳವಳು'],
  ['कामकोटिमहापद्मपीठस्थायै', 'seated on the great lotus throne of Kāmakoṭi', 'ಕಾಮಕೋಟಿ ಎಂಬ ಮಹಾಪದ್ಮಪೀಠದಲ್ಲಿ ಕುಳಿತಿರುವವಳು'],
  ['श्रीकण्ठनेत्रकुमुदचन्द्रिकायै', 'moonlight to the lily-like eyes of Śrīkaṇṭha (Śiva)', 'ಶ್ರೀಕಂಠನ ಕಣ್ಣುಗಳೆಂಬ ನೈದಿಲೆಗಳಿಗೆ ಬೆಳದಿಂಗಳಂತಿರುವವಳು'],
  ['सचामररमावाणीवीजितायै', 'fanned with chowries by Ramā (Lakṣmī) and Vāṇī (Sarasvatī)', 'ಲಕ್ಷ್ಮಿ ಸರಸ್ವತಿಯರಿಂದ ಚಾಮರ ಬೀಸಲ್ಪಡುವವಳು'],
  ['भक्तरक्षणदाक्षिण्यकटाक्षायै', 'whose kind glance is set on protecting her devotees', 'ಭಕ್ತರನ್ನು ರಕ್ಷಿಸುವ ದಾಕ್ಷಿಣ್ಯಪೂರ್ಣ ಕಟಾಕ್ಷವುಳ್ಳವಳು'],
  ['भूतेशालिङ्गनोद्भूतपुलकाङ्ग्यै', 'whose limbs thrill at the embrace of Bhūteśa (Śiva)', 'ಭೂತೇಶನ ಆಲಿಂಗನದಿಂದ ರೋಮಾಂಚನಗೊಂಡ ಅಂಗಗಳುಳ್ಳವಳು'],
  ['अनङ्गजनकापाङ्गवीक्षणायै', 'whose sidelong glance gave Anaṅga (Kāma) new birth', 'ಅನಂಗನಿಗೆ (ಮನ್ಮಥನಿಗೆ) ಮರುಜನ್ಮ ನೀಡಿದ ಕಡೆಗಣ್ಣ ನೋಟವುಳ್ಳವಳು'],
  ['ब्रह्मोपेन्द्रशिरोरत्नरञ्जितायै', 'whose feet are lit by the crown jewels of Brahmā and Viṣṇu bowing to her', 'ನಮಿಸುವ ಬ್ರಹ್ಮ ಉಪೇಂದ್ರರ ಕಿರೀಟರತ್ನಗಳಿಂದ ಶೋಭಿಸುವವಳು'],
  ['शचीमुख्यामरवधूसेवितायै', 'served by Śacī and the other wives of the gods', 'ಶಚಿ ಮೊದಲಾದ ದೇವಪತ್ನಿಯರಿಂದ ಸೇವಿತಳಾದವಳು'],
  ['लीलाकल्पितब्रह्माण्डमण्डलायै', 'who fashions the spheres of the universe in play', 'ಲೀಲೆಯಿಂದಲೇ ಬ್ರಹ್ಮಾಂಡಮಂಡಲಗಳನ್ನು ರಚಿಸಿದವಳು'],
  ['अमृतादिमहाशक्तिसंवृतायै', 'surrounded by Amṛtā and the other great powers', 'ಅಮೃತಾ ಮೊದಲಾದ ಮಹಾಶಕ್ತಿಗಳಿಂದ ಸುತ್ತುವರಿದವಳು'],
  ['एकातपत्रसाम्राज्यदायिकायै', 'who grants sole sovereignty under a single royal umbrella', 'ಏಕಚ್ಛತ್ರ ಸಾಮ್ರಾಜ್ಯವನ್ನು ನೀಡುವವಳು'],
  ['सनकादिसमाराध्यपादुकायै', 'whose sandals are worshipped by Sanaka and the other sages', 'ಸನಕಾದಿ ಮುನಿಗಳಿಂದ ಆರಾಧಿಸಲ್ಪಡುವ ಪಾದುಕೆಗಳುಳ್ಳವಳು'],
  ['देवर्षिभिः स्तूयमानवैभवायै', 'whose glory is praised by the divine seers', 'ದೇವರ್ಷಿಗಳಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವ ವೈಭವವುಳ್ಳವಳು'],
  ['कलशोद्भवदुर्वासःपूजितायै', 'worshipped by Agastya, the pot-born, and by Durvāsas', 'ಕಲಶದಲ್ಲಿ ಜನಿಸಿದ ಅಗಸ್ತ್ಯರಿಂದಲೂ ದುರ್ವಾಸರಿಂದಲೂ ಪೂಜಿತಳಾದವಳು'],
  ['मत्तेभवक्त्रषड्वक्त्रवत्सलायै', 'loving mother of elephant-faced Gaṇeśa and six-faced Skanda', 'ಗಜಮುಖ ಗಣಪತಿ ಮತ್ತು ಷಣ್ಮುಖನಿಗೆ ವಾತ್ಸಲ್ಯಮಯಿಯಾದ ತಾಯಿ'],
  ['चक्रराजमहायन्त्रमध्यवर्त्यै', 'who dwells at the centre of the Śrīcakra, king of yantras', 'ಶ್ರೀಚಕ್ರವೆಂಬ ಮಹಾಯಂತ್ರದ ಮಧ್ಯದಲ್ಲಿ ನೆಲೆಸಿರುವವಳು'],
  ['चिदग्निकुण्डसम्भूतसुदेहायै', 'whose lovely form rose from the fire-altar of consciousness', 'ಚಿದಗ್ನಿಕುಂಡದಿಂದ ಉದ್ಭವಿಸಿದ ಸುಂದರ ದೇಹವುಳ್ಳವಳು'],
  ['शशाङ्कखण्डसंयुक्तमकुटायै', 'whose crown bears the crescent moon', 'ಚಂದ್ರಕಲೆಯಿಂದ ಕೂಡಿದ ಕಿರೀಟವುಳ್ಳವಳು'],
  ['मत्तहंसवधूमन्दगमनायै', 'whose slow gait is like that of a joyful she-swan', 'ಮದಿಸಿದ ಹೆಣ್ಣುಹಂಸದಂತೆ ಮಂದಗಮನವುಳ್ಳವಳು'],
  ['वन्दारुजनसन्दोहवन्दितायै', 'saluted by throngs of worshippers', 'ವಂದಿಸುವ ಭಕ್ತಸಮೂಹದಿಂದ ವಂದಿತಳಾದವಳು'],
  ['अन्तर्मुखजनानन्दफलदायै', 'who gives the fruit of bliss to those whose minds are turned within', 'ಅಂತರ್ಮುಖರಾದವರಿಗೆ ಆನಂದಫಲವನ್ನು ನೀಡುವವಳು'],
  ['पतिव्रताङ्गनाभीष्टफलदायै', 'who fulfils the wishes of devoted wives', 'ಪತಿವ್ರತೆಯರ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಈಡೇರಿಸುವವಳು'],
  ['अव्याजकरुणापूरपूरितायै', 'brimming with a flood of compassion that needs no reason', 'ಕಾರಣವಿಲ್ಲದ ಕರುಣೆಯ ಪ್ರವಾಹದಿಂದ ತುಂಬಿರುವವಳು'],
  ['नितान्तसच्चिदानन्दसंयुक्तायै', 'wholly one with being, consciousness and bliss', 'ಸಂಪೂರ್ಣವಾಗಿ ಸಚ್ಚಿದಾನಂದದಿಂದ ಕೂಡಿದವಳು'],
  ['सहस्रसूर्यसंयुक्तप्रकाशायै', 'radiant as a thousand suns together', 'ಸಾವಿರ ಸೂರ್ಯರು ಒಟ್ಟಿಗೆ ಬೆಳಗಿದಂತಹ ಪ್ರಕಾಶವುಳ್ಳವಳು'],
  ['रत्नचिन्तामणिगृहमध्यस्थायै', 'seated within the mansion of wish-granting cintāmaṇi gems', 'ಚಿಂತಾಮಣಿರತ್ನಗಳ ಗೃಹದ ಮಧ್ಯದಲ್ಲಿರುವವಳು'],
  ['हानिवृद्धिगुणाधिक्यरहितायै', 'beyond decline, growth and excess of qualities', 'ಕ್ಷಯ, ವೃದ್ಧಿ, ಗುಣಾಧಿಕ್ಯಗಳಿಲ್ಲದವಳು'],
  ['महापद्माटवीमध्यनिवासायै', 'who lives in the midst of the great lotus forest', 'ಮಹಾಪದ್ಮವನದ ಮಧ್ಯದಲ್ಲಿ ವಾಸಿಸುವವಳು'],
  ['जाग्रत्स्वप्नसुषुप्तीनां साक्षिभूत्यै', 'the witness of waking, dream and deep sleep', 'ಜಾಗ್ರತ್, ಸ್ವಪ್ನ, ಸುಷುಪ್ತಿಗಳಿಗೆ ಸಾಕ್ಷಿಯಾದವಳು'],
  ['महापापौघपापानां विनाशिन्यै', 'who destroys even floods of great sins', 'ಮಹಾಪಾಪಗಳ ಪ್ರವಾಹವನ್ನೂ ನಾಶಮಾಡುವವಳು'],
  ['दुष्टभीतिमहाभीतिभञ्जनायै', 'who breaks the fear caused by the wicked and every great terror', 'ದುಷ್ಟರಿಂದಾಗುವ ಭಯವನ್ನೂ ಮಹಾಭಯಗಳನ್ನೂ ನಾಶಮಾಡುವವಳು'],
  ['समस्तदेवदनुजप्रेरिकायै', 'who moves all gods and demons to act', 'ಎಲ್ಲ ದೇವತೆಗಳನ್ನೂ ದಾನವರನ್ನೂ ಪ್ರೇರಿಸುವವಳು'],
  ['समस्तहृदयाम्भोजनिलयायै', 'who dwells in the lotus of every heart', 'ಎಲ್ಲರ ಹೃದಯಕಮಲದಲ್ಲಿ ನೆಲೆಸಿರುವವಳು'],
  ['अनाहतमहापद्ममन्दिरायै', 'whose temple is the great lotus of the heart (anāhata)', 'ಅನಾಹತವೆಂಬ ಹೃದಯಪದ್ಮವನ್ನೇ ಮಂದಿರವಾಗಿಸಿಕೊಂಡವಳು'],
  ['सहस्रारसरोजातवासितायै', 'who dwells in the thousand-petalled lotus', 'ಸಹಸ್ರಾರ ಕಮಲದಲ್ಲಿ ವಾಸಿಸುವವಳು'],
  ['पुनरावृत्तिरहितपुरस्थायै', 'who lives in the city from which there is no return to rebirth', 'ಮರುಜನ್ಮವಿಲ್ಲದ ಧಾಮದಲ್ಲಿ ನೆಲೆಸಿರುವವಳು'],
  ['वाणीगायत्रीसावित्रीसन्नुतायै', 'praised by Vāṇī, Gāyatrī and Sāvitrī', 'ವಾಣಿ, ಗಾಯತ್ರಿ, ಸಾವಿತ್ರಿಯರಿಂದ ಸ್ತುತಳಾದವಳು'],
  ['रमाभूमिसुताराध्यपदाब्जायै', 'whose lotus feet are worshipped by Ramā and by Sītā, daughter of the Earth', 'ಲಕ್ಷ್ಮಿಯಿಂದಲೂ ಭೂಸುತೆ ಸೀತೆಯಿಂದಲೂ ಆರಾಧಿತ ಪಾದಕಮಲಗಳುಳ್ಳವಳು'],
  ['लोपामुद्रार्चितश्रीमच्चरणायै', 'whose holy feet are worshipped by Lopāmudrā', 'ಲೋಪಾಮುದ್ರೆಯಿಂದ ಪೂಜಿತವಾದ ಶ್ರೀಪಾದಗಳುಳ್ಳವಳು'],
  ['सहस्ररतिसौन्दर्यशरीरायै', 'whose form has the beauty of a thousand Ratis', 'ಸಾವಿರ ರತಿಯರ ಸೌಂದರ್ಯದ ದೇಹವುಳ್ಳವಳು'],
  ['भावनामात्रसन्तुष्टहृदयायै', 'whose heart is pleased by devout contemplation alone', 'ಕೇವಲ ಭಕ್ತಿಯ ಭಾವನೆಯಿಂದಲೇ ಸಂತುಷ್ಟಳಾಗುವ ಹೃದಯದವಳು'],
  ['सत्यसम्पूर्णविज्ञानसिद्धिदायै', 'who grants the attainment of true and complete knowledge', 'ಸತ್ಯವಾದ ಪೂರ್ಣ ವಿಜ್ಞಾನದ ಸಿದ್ಧಿಯನ್ನು ನೀಡುವವಳು'],
  ['श्रीलोचनकृतोल्लासफलदायै', '', ''],
  ['श्रीसुधाब्धिमणिद्वीपमध्यगायै', 'who dwells on the jewelled island in the ocean of nectar', 'ಅಮೃತಸಾಗರದ ನಡುವಿನ ಮಣಿದ್ವೀಪದಲ್ಲಿರುವವಳು'],
  ['दक्षाध्वरविनिर्भेदसाधनायै', 'the cause of the destruction of Dakṣa’s sacrifice', 'ದಕ್ಷಯಜ್ಞದ ನಾಶಕ್ಕೆ ಕಾರಣಳಾದವಳು'],
  ['श्रीनाथसोदरीभूतशोभितायै', 'who shines as the sister of Śrīnātha (Viṣṇu)', 'ಶ್ರೀನಾಥನಾದ ವಿಷ್ಣುವಿನ ಸಹೋದರಿಯಾಗಿ ಶೋಭಿಸುವವಳು'],
  ['चन्द्रशेखरभक्तार्तिभञ्जनायै', 'who ends the distress of Candraśekhara’s devotees', 'ಚಂದ್ರಶೇಖರನ ಭಕ್ತರ ಸಂಕಟವನ್ನು ಹೋಗಲಾಡಿಸುವವಳು'],
  ['सर्वोपाधिविनिर्मुक्तचैतन्यायै', 'pure consciousness, free of every limiting condition', 'ಎಲ್ಲ ಉಪಾಧಿಗಳಿಂದ ಮುಕ್ತವಾದ ಚೈತನ್ಯಸ್ವರೂಪಳು'],
  ['नामपारायणाभीष्टफलदायै', 'who fulfils the wishes of those who recite her names', 'ನಾಮಪಾರಾಯಣ ಮಾಡುವವರಿಗೆ ಇಷ್ಟಫಲವನ್ನು ನೀಡುವವಳು'],
  ['सृष्टिस्थितितिरोधानसङ्कल्पायै', 'by whose mere will creation, preservation and dissolution take place', 'ಸೃಷ್ಟಿ, ಸ್ಥಿತಿ, ತಿರೋಧಾನಗಳು ಯಾರ ಸಂಕಲ್ಪಮಾತ್ರದಿಂದ ನಡೆಯುತ್ತವೆಯೋ ಅವಳು'],
  ['श्रीषोडशाक्षरीमन्त्रमध्यगायै', 'who abides at the heart of the sixteen-syllabled Śrīvidyā mantra', 'ಶ್ರೀಷೋಡಶಾಕ್ಷರೀ ಮಂತ್ರದ ಮಧ್ಯದಲ್ಲಿ ನೆಲೆಸಿರುವವಳು'],
  ['अनाद्यन्तस्वयम्भूतदिव्यमूर्त्यै', 'a divine, self-existent form without beginning or end', 'ಆದಿ ಅಂತ್ಯಗಳಿಲ್ಲದ ಸ್ವಯಂಭೂ ದಿವ್ಯಮೂರ್ತಿ'],
  ['भक्तहंसपरीमुख्यवियोगायै', '', ''],
  ['मातृमण्डलसंयुक्तललितायै', 'Lalitā, attended by the circle of Mother goddesses', 'ಮಾತೃಕಾಮಂಡಲದೊಡನೆ ಕೂಡಿದ ಲಲಿತೆ'],
  ['भण्डदैत्यमहासत्त्वनाशनायै', 'who crushed the great might of the demon Bhaṇḍa', 'ಭಂಡಾಸುರನ ಮಹಾಬಲವನ್ನು ನಾಶಮಾಡಿದವಳು'],
  ['क्रूरभण्डशिरश्छेदनिपुणायै', 'who skilfully cut off the head of cruel Bhaṇḍa', 'ಕ್ರೂರನಾದ ಭಂಡನ ತಲೆಯನ್ನು ಕಡಿಯುವುದರಲ್ಲಿ ನಿಪುಣಳು'],
  ['धात्र्यच्युतसुराधीशसुखदायै', 'who brings happiness to Brahmā, Viṣṇu and Indra', 'ಬ್ರಹ್ಮ, ಅಚ್ಯುತ, ದೇವೇಂದ್ರರಿಗೆ ಸುಖವನ್ನು ನೀಡುವವಳು'],
  ['चण्डमुण्डनिशुम्भादिखण्डनायै', 'who cut down Caṇḍa, Muṇḍa, Niśumbha and the rest', 'ಚಂಡ, ಮುಂಡ, ನಿಶುಂಭ ಮೊದಲಾದವರನ್ನು ಸಂಹರಿಸಿದವಳು'],
  ['रक्ताक्षरक्तजिह्वादिशिक्षणायै', 'who punished Raktākṣa, Raktajihva and other demons', 'ರಕ್ತಾಕ್ಷ, ರಕ್ತಜಿಹ್ವ ಮೊದಲಾದ ರಾಕ್ಷಸರನ್ನು ದಂಡಿಸಿದವಳು'],
  ['महिषासुरदोर्वीर्यनिग्रहायै', 'who subdued the strength of Mahiṣāsura’s arms', 'ಮಹಿಷಾಸುರನ ಭುಜಬಲವನ್ನು ಅಡಗಿಸಿದವಳು'],
  ['अभ्रकेशमहोत्साहकारणायै', 'the source of great joy to Śiva, whose hair is the sky', 'ಆಕಾಶವನ್ನೇ ಕೇಶವಾಗಿ ಉಳ್ಳ ಶಿವನಿಗೆ ಮಹಾನಂದಕ್ಕೆ ಕಾರಣಳಾದವಳು'],
  ['महेशयुक्तनटनतत्परायै', 'absorbed in dancing together with Maheśa', 'ಮಹೇಶನೊಡನೆ ನರ್ತನದಲ್ಲಿ ತೊಡಗಿರುವವಳು'],
  ['निजभर्तृमुखाम्भोजचिन्तनायै', 'who contemplates the lotus face of her own Lord', 'ತನ್ನ ಪತಿಯ ಮುಖಕಮಲವನ್ನು ಧ್ಯಾನಿಸುವವಳು'],
  ['वृषभध्वजविज्ञानभावनायै', 'who dwells on the wisdom of the bull-bannered Śiva', 'ವೃಷಭಧ್ವಜನಾದ ಶಿವನ ಜ್ಞಾನವನ್ನು ಭಾವಿಸುವವಳು'],
  ['जन्ममृत्युजरारोगभञ्जनायै', 'who breaks the bonds of birth, death, old age and disease', 'ಜನ್ಮ, ಮೃತ್ಯು, ಮುಪ್ಪು, ರೋಗಗಳನ್ನು ನಾಶಮಾಡುವವಳು'],
  ['विधेयमुक्तविज्ञानसिद्धिदायै', 'who grants the realised knowledge that is beyond all rules and duties', 'ವಿಧಿನಿಷೇಧಗಳನ್ನು ಮೀರಿದ ಜ್ಞಾನಸಿದ್ಧಿಯನ್ನು ನೀಡುವವಳು'],
  ['कामक्रोधादिषड्वर्गनाशनायै', 'who destroys the six inner enemies, desire, anger and the rest', 'ಕಾಮಕ್ರೋಧಾದಿ ಅರಿಷಡ್ವರ್ಗಗಳನ್ನು ನಾಶಮಾಡುವವಳು'],
  ['राजराजार्चितपदसरोजायै', 'whose lotus feet are worshipped by Kubera, king of kings', 'ರಾಜರಾಜನಾದ ಕುಬೇರನಿಂದ ಪೂಜಿತ ಪಾದಕಮಲಗಳುಳ್ಳವಳು'],
  ['सर्ववेदान्तसंसिद्धसुतत्त्वायै', 'the true reality established by all the Upaniṣads', 'ಎಲ್ಲ ವೇದಾಂತಗಳಿಂದ ಸಿದ್ಧವಾದ ಪರಮತತ್ತ್ವ'],
  ['श्रीवीरभक्तविज्ञाननिधानायै', 'a treasury of wisdom for her steadfast devotees', 'ಧೀರ ಭಕ್ತರಿಗೆ ಜ್ಞಾನದ ನಿಧಿಯಾದವಳು'],
  ['अशेषदुष्टदनुजसूदनायै', 'who slays all the wicked demons', 'ಎಲ್ಲ ದುಷ್ಟ ದಾನವರನ್ನು ಸಂಹರಿಸಿದವಳು'],
  ['साक्षाच्छ्रीदक्षिणामूर्तिमनोज्ञायै', 'who delights the heart of Śrī Dakṣiṇāmūrti himself', 'ಸಾಕ್ಷಾತ್ ಶ್ರೀದಕ್ಷಿಣಾಮೂರ್ತಿಗೆ ಮನೋಹರಳಾದವಳು'],
  ['हयमेधाग्रसम्पूज्यमहिमायै', 'whose greatness is honoured in the foremost of sacrifices, the horse sacrifice', 'ಯಜ್ಞಶ್ರೇಷ್ಠವಾದ ಅಶ್ವಮೇಧದಲ್ಲಿ ಪೂಜಿಸಲ್ಪಡುವ ಮಹಿಮೆಯುಳ್ಳವಳು'],
  ['दक्षप्रजापतिसुतावेषाढ्यायै', 'who took the form of Satī, daughter of Dakṣa Prajāpati', 'ದಕ್ಷಪ್ರಜಾಪತಿಯ ಮಗಳಾದ ಸತಿಯ ರೂಪವನ್ನು ಧರಿಸಿದವಳು'],
  ['सुमबाणेक्षुकोदण्डमण्डितायै', 'adorned with flower arrows and a sugarcane bow', 'ಹೂಬಾಣಗಳು ಮತ್ತು ಕಬ್ಬಿನ ಬಿಲ್ಲಿನಿಂದ ಅಲಂಕೃತಳಾದವಳು'],
  ['नित्ययौवनमाङ्गल्यमङ्गलायै', 'auspicious with ever-young, unfading auspiciousness', 'ನಿತ್ಯಯೌವನ ಮತ್ತು ಮಾಂಗಲ್ಯದಿಂದ ಮಂಗಳಕರಳಾದವಳು'],
  ['महादेवसमायुक्तशरीरायै', 'whose body is one with Mahādeva', 'ಮಹಾದೇವನೊಡನೆ ಒಂದಾದ ದೇಹವುಳ್ಳವಳು'],
  ['महादेवरतौत्सुक्यमहादेव्यै', 'the great Goddess, eager in her love for Mahādeva', 'ಮಹಾದೇವನಲ್ಲಿ ಅನುರಾಗದಿಂದ ಉತ್ಸುಕಳಾದ ಮಹಾದೇವಿ'],
];

export const lalithaAshtottaraShatanamavali: Mantra = {
  id: 'lalitha-ashtottara-shatanamavali',
  title: 'श्रीललिताष्टोत्तरशतनामावलिः',
  titleEn: 'Sri Lalitha Ashtottara Shatanamavali',
  category: 'sahasranama',
  deity: 'Śrī Lalitā Tripurasundarī',
  source: 'Śrīvidyā tradition',
  summary:
    'One hundred and eight names of the Goddess Lalitā, each offered as "oṃ … namo namaḥ", used in kuṅkuma-arcana and Devī pūjā. The names describe her beauty from head to foot, her seat in Maṇidvīpa and the Śrīcakra, her union with Śiva, and her victory over Bhaṇḍa and the other demons.',
  summaryKn:
    'ಕುಂಕುಮಾರ್ಚನೆ ಮತ್ತು ದೇವೀಪೂಜೆಯಲ್ಲಿ "ಓಂ … ನಮೋ ನಮಃ" ಎಂದು ಸಮರ್ಪಿಸುವ ಶ್ರೀಲಲಿತಾದೇವಿಯ ನೂರೆಂಟು ನಾಮಗಳು. ತಲೆಯಿಂದ ಪಾದದವರೆಗಿನ ಅವಳ ಸೌಂದರ್ಯ, ಮಣಿದ್ವೀಪ ಮತ್ತು ಶ್ರೀಚಕ್ರದಲ್ಲಿನ ಅವಳ ನೆಲೆ, ಶಿವನೊಡನೆ ಅವಳ ಐಕ್ಯ ಹಾಗೂ ಭಂಡಾಸುರಾದಿಗಳ ಮೇಲಿನ ಜಯವನ್ನು ಈ ನಾಮಗಳು ವರ್ಣಿಸುತ್ತವೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'नामावलिः',
      titleEn: 'Namavali',
      note: 'In kuṅkuma-arcana, offer a pinch of kuṅkuma or a flower at each name. Some traditions add "aiṃ hrīṃ śrīṃ" after "oṃ" in every name.',
      noteKn: 'ಕುಂಕುಮಾರ್ಚನೆಯಲ್ಲಿ ಪ್ರತಿ ನಾಮಕ್ಕೂ ಚಿಟಿಕೆ ಕುಂಕುಮ ಅಥವಾ ಒಂದು ಹೂವನ್ನು ಸಮರ್ಪಿಸಬೇಕು. ಕೆಲವು ಸಂಪ್ರದಾಯಗಳಲ್ಲಿ ಪ್ರತಿ ನಾಮದಲ್ಲೂ ಓಂ ನಂತರ ಐಂ ಹ್ರೀಂ ಶ್ರೀಂ ಸೇರಿಸುತ್ತಾರೆ.',
      verses: [
        { text: 'ॐ ऐं ह्रीं श्रीम् ॥' },
        ...NAMES.map(([name, en, kn], i) => ({
          n: i + 1,
          text: `ॐ ${name} नमो नमः ॥`,
          ...(en ? { meaning: { en: en[0].toUpperCase() + en.slice(1) + '.', kn: kn + '.' } } : {}),
        })),
        { text: 'इति श्रीललिताष्टोत्तरशतनामावलिः सम्पूर्णा ॥' },
      ],
    },
  ],
};
