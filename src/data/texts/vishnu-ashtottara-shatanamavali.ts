// Śrī Viṣṇu Aṣṭottara Śatanāmāvalī (ॐ विष्णवे नमः …), the nāmāvalī of the
// Padma Purāṇa hymn विष्णुर्जिष्णुर्वषट्कारो… Collated Nov 2026; not yet
// checked line by line against a printed edition.
//
// Sources (independent digital witnesses):
//   A. stotranidhi.com, Devanagari nāmāvalī (from the printed "Prabhāta
//      Stotranidhi"), with its companion stotram page: base order.
//   B. Gita Press "Śatanāma Stotra Saṅgraha" (sanskrit/raw_etexts, misc-gp):
//      the stotram and the nāmāvalī, numbered 1–108.
//   C. vishvAsa/purANam_vaiShNavam (GitHub), nAmAvalayaH/viShNuH/108.md. C is
//      incomplete (about ten names are missing and others are filled in from
//      the phala-śruti), so it is used only where it is legible.
//
// A and C (and A's stotram) follow the southern recension; B is the Gita Press
// recension. Where they differ the majority is followed:
//   37 विरजाय (A and A's stotram) / विरताय (B); 54–55 सर्वाय, शरण्याय (A C) /
//   सर्वशरण्याय (B); 75 मुकुन्दाय (A C) / मोहदाय (B); 81 सोमसूर्याग्निनयनाय
//   (A C) / सोमाय, सूर्याग्निनयनाय (B); 17 कलिमलापहारिणे (A C) / कलिमलापहाय (B);
//   48 सहस्रशीर्षाय (A C) / सहस्रशीर्षे (B); 61 जगद्धर्त्रे (dhartṛ, A C) /
//   जगद्भर्त्रे (B); 63 जनार्तिहराय (A C) / जनार्तिघ्ने (B);
//   59 रक्षःकुलविनाशकाय (B C) / रक्षसःकुलनाशकाय (A)
//   9 अदितेः सुताय (B, C, and both stotrams) / अदितेस्तुताय (A)
// Grammatical datives are taken from B where A and C have irregular forms:
//   32 वेदवक्त्रे (वेदवक्ताय), 60 जगत्कर्त्रे (जगत्कर्ताय), 61 जगद्धर्त्रे
//   (जगद्धर्ताय), 62 जगज्जेत्रे (जगज्जेताय), 77 दैत्यारये (दैत्यारिणे),
//   99 स्रष्ट्रे (A स्रष्टे).
// ॐ with B and C (A writes ओं).
import type { Mantra } from '../types';

/** [name in the dative, English gloss, Kannada gloss] */
const NAMES: [string, string, string][] = [
  ['विष्णवे', 'Viṣṇu, the all-pervading', 'ಸರ್ವವ್ಯಾಪಿಯಾದ ವಿಷ್ಣು'],
  ['जिष्णवे', 'the ever-victorious', 'ಸದಾ ಜಯಶೀಲನು'],
  ['वषट्काराय', 'the sacred call "vaṣaṭ" at which offerings are made: the sacrifice itself', 'ಆಹುತಿ ನೀಡುವಾಗ ಹೇಳುವ "ವಷಟ್" ಕಾರಸ್ವರೂಪನು, ಯಜ್ಞಸ್ವರೂಪನು'],
  ['देवदेवाय', 'the God of gods', 'ದೇವತೆಗಳಿಗೂ ದೇವನು'],
  ['वृषाकपये', 'Vṛṣākapi, dharma itself, who lifted the earth as the Boar', 'ಧರ್ಮಸ್ವರೂಪನಾಗಿ ವರಾಹರೂಪದಿಂದ ಭೂಮಿಯನ್ನೆತ್ತಿದ ವೃಷಾಕಪಿ'],
  ['दामोदराय', 'Dāmodara, bound at the waist with a cord by Yaśodā', 'ಯಶೋದೆಯಿಂದ ಹಗ್ಗದಿಂದ ಹೊಟ್ಟೆಗೆ ಕಟ್ಟಲ್ಪಟ್ಟ ದಾಮೋದರ'],
  ['दीनबन्धवे', 'the friend of the helpless', 'ದೀನರ ಬಂಧು'],
  ['आदिदेवाय', 'the primal God', 'ಆದಿದೇವನು'],
  ['अदितेः सुताय', 'the son of Aditi (as Vāmana)', 'ಅದಿತಿಯ ಮಗನಾದ ವಾಮನ'],
  ['पुण्डरीकाय', 'pure as the white lotus', 'ಬಿಳಿಯ ಕಮಲದಂತೆ ನಿರ್ಮಲನು'],
  ['परानन्दाय', 'supreme bliss', 'ಪರಮಾನಂದಸ್ವರೂಪನು'],
  ['परमात्मने', 'the Supreme Self', 'ಪರಮಾತ್ಮನು'],
  ['परात्पराय', 'higher than the highest', 'ಶ್ರೇಷ್ಠರಿಗಿಂತಲೂ ಶ್ರೇಷ್ಠನು'],
  ['परशुधारिणे', 'the bearer of the axe (Paraśurāma)', 'ಕೊಡಲಿಯನ್ನು ಧರಿಸಿದ ಪರಶುರಾಮ'],
  ['विश्वात्मने', 'the soul of the universe', 'ವಿಶ್ವದ ಅಂತರಾತ್ಮನು'],
  ['कृष्णाय', 'Kṛṣṇa, the dark one who draws all hearts', 'ಎಲ್ಲರ ಮನಸ್ಸನ್ನು ಸೆಳೆಯುವ ಶ್ರೀಕೃಷ್ಣ'],
  ['कलिमलापहारिणे', 'who takes away the impurities of the Kali age', 'ಕಲಿಯುಗದ ಕಲ್ಮಷಗಳನ್ನು ಕಳೆಯುವವನು'],
  ['कौस्तुभोद्भासितोरस्काय', 'whose chest shines with the Kaustubha gem', 'ಕೌಸ್ತುಭಮಣಿಯಿಂದ ಹೊಳೆಯುವ ಎದೆಯುಳ್ಳವನು'],
  ['नराय', 'Nara, the sage who is Nārāyaṇa’s eternal companion', 'ನಾರಾಯಣನ ಜೊತೆಗಾರನಾದ ನರಋಷಿ'],
  ['नारायणाय', 'Nārāyaṇa, the refuge of all beings', 'ಎಲ್ಲ ಜೀವಿಗಳ ಆಶ್ರಯನಾದ ನಾರಾಯಣ'],
  ['हरये', 'Hari, who takes away sin', 'ಪಾಪಗಳನ್ನು ಹರಿಸುವ ಹರಿ'],
  ['हराय', 'the remover, who withdraws all things into himself', 'ಎಲ್ಲವನ್ನೂ ತನ್ನಲ್ಲಿ ಲಯಗೊಳಿಸುವವನು'],
  ['हरप्रियाय', 'dear to Hara (Śiva)', 'ಶಿವನಿಗೆ ಪ್ರಿಯನು'],
  ['स्वामिने', 'the Master', 'ಸ್ವಾಮಿ, ಎಲ್ಲರ ಒಡೆಯ'],
  ['वैकुण्ठाय', 'Vaikuṇṭha, whose power is unhindered', 'ತಡೆಯಿಲ್ಲದ ಶಕ್ತಿಯುಳ್ಳ ವೈಕುಂಠ'],
  ['विश्वतोमुखाय', 'whose faces are everywhere', 'ಎಲ್ಲೆಡೆಯೂ ಮುಖಗಳುಳ್ಳವನು'],
  ['हृषीकेशाय', 'the lord of the senses', 'ಇಂದ್ರಿಯಗಳ ಒಡೆಯ ಹೃಷೀಕೇಶ'],
  ['अप्रमेयात्मने', 'whose nature is beyond measure', 'ಅಳೆಯಲಾಗದ ಸ್ವರೂಪದವನು'],
  ['वराहाय', 'the Boar incarnation', 'ವರಾಹಾವತಾರಿ'],
  ['धरणीधराय', 'the upholder of the earth', 'ಭೂಮಿಯನ್ನು ಎತ್ತಿಹಿಡಿದವನು'],
  ['वामनाय', 'the Dwarf incarnation', 'ವಾಮನಾವತಾರಿ'],
  ['वेदवक्त्रे', 'the teacher of the Vedas', 'ವೇದಗಳನ್ನು ಉಪದೇಶಿಸುವವನು'],
  ['वासुदेवाय', 'Vāsudeva, who dwells in all beings', 'ಎಲ್ಲ ಜೀವಿಗಳಲ್ಲೂ ನೆಲೆಸಿರುವ ವಾಸುದೇವ'],
  ['सनातनाय', 'the eternal', 'ಸನಾತನನು'],
  ['रामाय', 'Rāma, who delights all', 'ಎಲ್ಲರನ್ನೂ ಆನಂದಗೊಳಿಸುವ ಶ್ರೀರಾಮ'],
  ['विरामाय', 'the final resting place of all', 'ಎಲ್ಲಕ್ಕೂ ಅಂತಿಮ ವಿಶ್ರಾಂತಿಸ್ಥಾನನು'],
  ['विरजाय', 'free from all passion and impurity', 'ರಜೋಗುಣವೂ ಕಲ್ಮಷವೂ ಇಲ್ಲದವನು'],
  ['रावणारये', 'the foe of Rāvaṇa', 'ರಾವಣನ ಶತ್ರು'],
  ['रमापतये', 'the lord of Ramā (Lakṣmī)', 'ರಮೆಯ (ಲಕ್ಷ್ಮಿಯ) ಪತಿ'],
  ['वैकुण्ठवासिने', 'who dwells in Vaikuṇṭha', 'ವೈಕುಂಠದಲ್ಲಿ ವಾಸಿಸುವವನು'],
  ['वसुमते', 'rich in every treasure', 'ಎಲ್ಲ ಸಂಪತ್ತುಗಳುಳ್ಳವನು'],
  ['धनदाय', 'the giver of wealth', 'ಧನವನ್ನು ಕೊಡುವವನು'],
  ['धरणीधराय', 'the bearer of the earth (the name returns)', 'ಭೂಮಿಯನ್ನು ಧರಿಸಿದವನು (ಈ ನಾಮ ಮತ್ತೆ ಬರುತ್ತದೆ)'],
  ['धर्मेशाय', 'the lord of dharma', 'ಧರ್ಮದ ಒಡೆಯ'],
  ['धरणीनाथाय', 'the lord of the Earth goddess', 'ಭೂದೇವಿಯ ಪತಿ'],
  ['ध्येयाय', 'the one to be meditated on', 'ಧ್ಯಾನಿಸಲು ಯೋಗ್ಯನು'],
  ['धर्मभृतां वराय', 'the best of those who uphold dharma', 'ಧರ್ಮವನ್ನು ಪಾಲಿಸುವವರಲ್ಲಿ ಶ್ರೇಷ್ಠನು'],
  ['सहस्रशीर्षाय', 'the thousand-headed', 'ಸಾವಿರ ತಲೆಗಳುಳ್ಳವನು'],
  ['पुरुषाय', 'the Cosmic Person', 'ಪರಮಪುರುಷನು'],
  ['सहस्राक्षाय', 'the thousand-eyed', 'ಸಾವಿರ ಕಣ್ಣುಗಳುಳ್ಳವನು'],
  ['सहस्रपादे', 'the thousand-footed', 'ಸಾವಿರ ಪಾದಗಳುಳ್ಳವನು'],
  ['सर्वगाय', 'present everywhere', 'ಎಲ್ಲೆಡೆಯೂ ಇರುವವನು'],
  ['सर्वविदे', 'the all-knowing', 'ಸರ್ವಜ್ಞನು'],
  ['सर्वाय', 'who is everything', 'ಎಲ್ಲವೂ ತಾನೇ ಆಗಿರುವವನು'],
  ['शरण्याय', 'the refuge', 'ಶರಣಾಗತರಿಗೆ ಆಶ್ರಯನು'],
  ['साधुवल्लभाय', 'dear to the good', 'ಸಜ್ಜನರಿಗೆ ಪ್ರಿಯನು'],
  ['कौसल्यानन्दनाय', 'the son of Kausalyā', 'ಕೌಸಲ್ಯೆಯ ಮಗ'],
  ['श्रीमते', 'the glorious, ever with Śrī', 'ಶ್ರೀದೇವಿಯೊಡನೆ ಕೂಡಿದ ಶ್ರೀಮಂತನು'],
  ['रक्षःकुलविनाशकाय', 'the destroyer of the demon race', 'ರಾಕ್ಷಸಕುಲವನ್ನು ನಾಶಮಾಡಿದವನು'],
  ['जगत्कर्त्रे', 'the maker of the world', 'ಜಗತ್ತಿನ ಕರ್ತೃ'],
  ['जगद्धर्त्रे', 'the upholder of the world', 'ಜಗತ್ತನ್ನು ಧರಿಸಿರುವವನು'],
  ['जगज्जेत्रे', 'the conqueror of the world', 'ಜಗತ್ತನ್ನು ಗೆದ್ದವನು'],
  ['जनार्तिहराय', 'who takes away people’s suffering', 'ಜನರ ಸಂಕಟವನ್ನು ಹೋಗಲಾಡಿಸುವವನು'],
  ['जानकीवल्लभाय', 'the beloved of Jānakī', 'ಜಾನಕಿಯ ಪ್ರಿಯನು'],
  ['देवाय', 'the shining God', 'ಪ್ರಕಾಶಮಾನನಾದ ದೇವನು'],
  ['जयरूपाय', 'victory itself', 'ಜಯಸ್ವರೂಪನು'],
  ['जलेश्वराय', 'the lord of the waters', 'ಜಲದ ಒಡೆಯ'],
  ['क्षीराब्धिवासिने', 'who dwells in the ocean of milk', 'ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ವಾಸಿಸುವವನು'],
  ['क्षीराब्धितनयावल्लभाय', 'beloved of Lakṣmī, daughter of the milk ocean', 'ಕ್ಷೀರಸಾಗರದ ಮಗಳಾದ ಲಕ್ಷ್ಮಿಯ ಪ್ರಿಯನು'],
  ['शेषशायिने', 'who reclines on the serpent Śeṣa', 'ಆದಿಶೇಷನ ಮೇಲೆ ಪವಡಿಸಿರುವವನು'],
  ['पन्नगारिवाहनाय', 'whose mount is Garuḍa, the foe of serpents', 'ಸರ್ಪಗಳ ಶತ್ರುವಾದ ಗರುಡನನ್ನು ವಾಹನವಾಗಿ ಉಳ್ಳವನು'],
  ['विष्टरश्रवसे', 'Viṣṭaraśravas, whose fame spreads everywhere', 'ಎಲ್ಲೆಡೆ ಹರಡಿದ ಕೀರ್ತಿಯುಳ್ಳ ವಿಷ್ಟರಶ್ರವಸ್'],
  ['माधवाय', 'Mādhava, the consort of Mā (Lakṣmī)', 'ಲಕ್ಷ್ಮೀಪತಿಯಾದ ಮಾಧವ'],
  ['मथुरानाथाय', 'the lord of Mathurā', 'ಮಥುರೆಯ ಒಡೆಯ'],
  ['मुकुन्दाय', 'Mukunda, the giver of liberation', 'ಮೋಕ್ಷವನ್ನು ಕೊಡುವ ಮುಕುಂದ'],
  ['मोहनाशनाय', 'the destroyer of delusion', 'ಮೋಹವನ್ನು ನಾಶಮಾಡುವವನು'],
  ['दैत्यारये', 'the foe of the Daityas', 'ದೈತ್ಯರ ಶತ್ರು'],
  ['पुण्डरीकाक्षाय', 'the lotus-eyed', 'ಕಮಲದಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವನು'],
  ['अच्युताय', 'Acyuta, who never falls from his nature', 'ತನ್ನ ಸ್ವರೂಪದಿಂದ ಎಂದೂ ಚ್ಯುತನಾಗದ ಅಚ್ಯುತ'],
  ['मधुसूदनाय', 'the slayer of the demon Madhu', 'ಮಧುವೆಂಬ ದೈತ್ಯನನ್ನು ಸಂಹರಿಸಿದವನು'],
  ['सोमसूर्याग्निनयनाय', 'whose eyes are the moon, the sun and fire', 'ಚಂದ್ರ, ಸೂರ್ಯ, ಅಗ್ನಿಗಳನ್ನೇ ಕಣ್ಣುಗಳಾಗಿ ಉಳ್ಳವನು'],
  ['नृसिंहाय', 'the Man-Lion', 'ನರಸಿಂಹನು'],
  ['भक्तवत्सलाय', 'tender towards his devotees', 'ಭಕ್ತರ ಮೇಲೆ ವಾತ್ಸಲ್ಯವುಳ್ಳವನು'],
  ['नित्याय', 'the eternal', 'ನಿತ್ಯನು'],
  ['निरामयाय', 'free from every ill', 'ಯಾವ ದೋಷವೂ ಇಲ್ಲದವನು'],
  ['शुद्धाय', 'the pure', 'ಪರಿಶುದ್ಧನು'],
  ['नरदेवाय', 'a god among men, the ideal king', 'ಮನುಷ್ಯರಲ್ಲಿ ದೇವನಾದ ರಾಜ'],
  ['जगत्प्रभवे', 'the lord of the world', 'ಜಗತ್ತಿನ ಪ್ರಭು'],
  ['हयग्रीवाय', 'Hayagrīva, the horse-headed, who restored the Vedas', 'ವೇದಗಳನ್ನು ಉದ್ಧರಿಸಿದ ಹಯಗ್ರೀವ'],
  ['जितरिपवे', 'who has conquered his foes', 'ಶತ್ರುಗಳನ್ನು ಗೆದ್ದವನು'],
  ['उपेन्द्राय', 'Upendra, Indra’s younger brother (Vāmana)', 'ಇಂದ್ರನ ತಮ್ಮನಾದ ಉಪೇಂದ್ರ'],
  ['रुक्मिणीपतये', 'the husband of Rukmiṇī', 'ರುಕ್ಮಿಣೀಪತಿ'],
  ['सर्वदेवमयाय', 'in whom all the gods are contained', 'ಎಲ್ಲ ದೇವತೆಗಳನ್ನೂ ತನ್ನಲ್ಲಿ ಹೊಂದಿರುವವನು'],
  ['श्रीशाय', 'the lord of Śrī', 'ಶ್ರೀದೇವಿಯ ಒಡೆಯ'],
  ['सर्वाधाराय', 'the support of all', 'ಎಲ್ಲಕ್ಕೂ ಆಧಾರನು'],
  ['सनातनाय', 'the eternal (the name returns)', 'ಸನಾತನನು (ಈ ನಾಮ ಮತ್ತೆ ಬರುತ್ತದೆ)'],
  ['सौम्याय', 'the gentle', 'ಸೌಮ್ಯನು'],
  ['सौम्यप्रदाय', 'who grants gentleness and peace', 'ಶಾಂತಿಯನ್ನು ನೀಡುವವನು'],
  ['स्रष्ट्रे', 'the creator', 'ಸೃಷ್ಟಿಕರ್ತನು'],
  ['विष्वक्सेनाय', 'whose hosts spread everywhere', 'ಎಲ್ಲೆಡೆ ಹರಡಿದ ಸೇನೆಯುಳ್ಳವನು'],
  ['जनार्दनाय', 'Janārdana, who punishes the wicked and is sought by all', 'ದುಷ್ಟರನ್ನು ದಂಡಿಸುವ, ಎಲ್ಲರೂ ಬೇಡುವ ಜನಾರ್ದನ'],
  ['यशोदातनयाय', 'the son of Yaśodā', 'ಯಶೋದೆಯ ಮಗ'],
  ['योगिने', 'the master of yoga', 'ಯೋಗೀಶ್ವರನು'],
  ['योगशास्त्रपरायणाय', 'devoted to the teaching of yoga', 'ಯೋಗಶಾಸ್ತ್ರದಲ್ಲಿ ನಿರತನು'],
  ['रुद्रात्मकाय', 'whose self includes Rudra', 'ರುದ್ರನನ್ನೂ ತನ್ನಲ್ಲಿ ಒಳಗೊಂಡವನು'],
  ['रुद्रमूर्तये', 'who takes the form of Rudra', 'ರುದ್ರರೂಪವನ್ನು ಧರಿಸುವವನು'],
  ['राघवाय', 'Rāghava, of the line of Raghu', 'ರಘುವಂಶದ ರಾಘವ'],
  ['मधुसूदनाय', 'the slayer of Madhu (the name returns)', 'ಮಧುಸೂದನ (ಈ ನಾಮ ಮತ್ತೆ ಬರುತ್ತದೆ)'],
];

export const vishnuAshtottaraShatanamavali: Mantra = {
  id: 'vishnu-ashtottara-shatanamavali',
  title: 'श्रीविष्ण्वष्टोत्तरशतनामावलिः',
  titleEn: 'Sri Vishnu Ashtottara Shatanamavali',
  category: 'sahasranama',
  deity: 'Śrī Viṣṇu',
  source: 'Padma Purāṇa, Uttara Khaṇḍa (the nāmāvalī of the hymn विष्णुर्जिष्णुर्वषट्कारो…)',
  summary:
    'One hundred and eight names of Viṣṇu, each offered as "oṃ … namaḥ", for use in pūjā and archana. The names recall his avatāras (Varāha, Vāmana, Paraśurāma, Rāma, Kṛṣṇa, Nṛsiṃha, Hayagrīva) and his nature as the all-pervading Lord.',
  summaryKn:
    'ಪೂಜೆ ಮತ್ತು ಅರ್ಚನೆಗಾಗಿ "ಓಂ … ನಮಃ" ಎಂದು ಸಮರ್ಪಿಸುವ ಶ್ರೀವಿಷ್ಣುವಿನ ನೂರೆಂಟು ನಾಮಗಳು. ವರಾಹ, ವಾಮನ, ಪರಶುರಾಮ, ರಾಮ, ಕೃಷ್ಣ, ನರಸಿಂಹ, ಹಯಗ್ರೀವ ಮೊದಲಾದ ಅವತಾರಗಳನ್ನೂ ಸರ್ವವ್ಯಾಪಿಯಾದ ಅವನ ಸ್ವರೂಪವನ್ನೂ ಈ ನಾಮಗಳು ನೆನಪಿಸುತ್ತವೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'नामावलिः',
      titleEn: 'Namavali',
      note: 'In archana, offer a flower, tulasī leaf or akṣata at each name.',
      noteKn: 'ಅರ್ಚನೆಯಲ್ಲಿ ಪ್ರತಿ ನಾಮಕ್ಕೂ ಒಂದು ಹೂವು, ತುಳಸಿದಳ ಅಥವಾ ಅಕ್ಷತೆಯನ್ನು ಸಮರ್ಪಿಸಬೇಕು.',
      verses: [
        ...NAMES.map(([name, en, kn], i) => ({
          n: i + 1,
          text: `ॐ ${name} नमः ॥`,
          meaning: { en: en[0].toUpperCase() + en.slice(1) + '.', kn: kn + '.' },
        })),
        { text: 'इति श्रीविष्ण्वष्टोत्तरशतनामावलिः सम्पूर्णा ॥' },
      ],
    },
  ],
};
