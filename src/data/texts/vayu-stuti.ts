/**
 * Śrī Hari-Vāyu Stuti of Trivikrama Paṇḍitācārya, with Śrī Narasiṃha Nakha Stuti
 * of Śrī Madhvācārya.
 *
 * Collated (Nov 2026) from three independent digital witnesses:
 *  - raocollectionsstotra.blogspot.com (typed Devanagari; base text)
 *  - ambuda.org, "Harivayustuti with English translation" (OCR of a printed edition)
 *  - sites.google.com/site/harshalarajesh (typed ITRANS)
 * Every disagreement was resolved by majority and grammar, and every pāda was
 * checked against its metre (sragdharā; Nakha Stuti 1 = 2 × śārdūlavikrīḍita +
 * 2 × sragdharā, Nakha Stuti 2 = śārdūlavikrīḍita). Details: PROOFREADING.md.
 * Still to be confirmed against a math publication before a store release.
 */
import type { Mantra } from '../types';

const nakhaStuti = () => [
      {
        n: 1,
        text: 'पान्त्वस्मान् पुरुहूतवैरिबलवन्मातङ्गमाद्यद्घटा-\nकुम्भोच्चाद्रिविपाटनाधिकपटुप्रत्येकवज्रायिताः ।\nश्रीमत्कण्ठीरवास्य प्रततसुनखरा दारितारातिदूर-\nप्रध्वस्तध्वान्तशान्तप्रविततमनसा भाविता नाकिवृन्दैः ॥',
        meaning: {
          en: 'May the long, sharp claws of the glorious lion-faced Lord, Śrī Narasiṃha, protect us. Each of them is like a thunderbolt, and even more skilled than the thunderbolt at splitting the mountain-like brow of that mighty, rutting elephant, Hiraṇyakaśipu, the enemy of Indra. Those claws tore the foe apart; and the hosts of gods, their darkness of fear driven far away and their minds now calm and expansive, meditate upon them.',
          kn: 'ಶ್ರೀನರಸಿಂಹದೇವರ ಉದ್ದವಾದ ಹರಿತ ಉಗುರುಗಳು ನಮ್ಮನ್ನು ಕಾಪಾಡಲಿ. ಇಂದ್ರನ ಶತ್ರುವಾದ ಹಿರಣ್ಯಕಶಿಪು ಎಂಬ ಮದಿಸಿದ ಬಲಿಷ್ಠ ಆನೆಯ ಪರ್ವತದಂತಹ ಕುಂಭಸ್ಥಳವನ್ನು ಸೀಳುವುದರಲ್ಲಿ ಅವುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದೂ ವಜ್ರಾಯುಧಕ್ಕಿಂತಲೂ ಸಮರ್ಥವಾಗಿದೆ. ಶತ್ರುವನ್ನು ಸೀಳಿದ ಆ ಉಗುರುಗಳನ್ನು, ಭಯದ ಕತ್ತಲೆ ದೂರವಾಗಿ ಶಾಂತವೂ ವಿಶಾಲವೂ ಆದ ಮನಸ್ಸಿನಿಂದ ದೇವತೆಗಳ ಸಮೂಹವು ಧ್ಯಾನಿಸುತ್ತದೆ.',
        },
      },
      {
        n: 2,
        text: 'लक्ष्मीकान्त समन्ततो विकलयन्नैवेशितुस्ते समं\nपश्याम्युत्तमवस्तु दूरतरतोऽपास्तं रसो योऽष्टमः ।\nयद्रोषोत्करदक्षनेत्रकुटिलप्रान्तोत्थिताग्निस्फुरत्-\nखद्योतोपमविस्फुलिङ्गभसिता ब्रह्मेशशक्रोत्कराः ॥',
        meaning: {
          en: 'O Lord of Lakṣmī, though I search on every side, I see nothing equal to you, the supreme Ruler; anything higher than you is utterly out of the question. Sparks fly like tiny fireflies from the fire that flashes out of the corner of your eye, curved in fierce anger, and by those sparks alone the hosts of Brahmā, Śiva and Indra are reduced to ash.',
          kn: 'ಲಕ್ಷ್ಮೀಪತಿಯೇ, ಎಲ್ಲ ಕಡೆ ಹುಡುಕಿದರೂ ಸರ್ವೇಶ್ವರನಾದ ನಿನಗೆ ಸಮನಾದದ್ದು ಯಾವುದೂ ನನಗೆ ಕಾಣುವುದಿಲ್ಲ; ನಿನಗಿಂತ ಶ್ರೇಷ್ಠವಾದದ್ದು ಇರುವುದಂತೂ ದೂರದ ಮಾತು. ಕೋಪದಿಂದ ಕೊಂಕಿದ ನಿನ್ನ ಕಣ್ಣಿನ ಅಂಚಿನಿಂದ ಹೊರಡುವ ಬೆಂಕಿಯ, ಮಿಂಚುಹುಳುಗಳಂತಹ ಸಣ್ಣ ಕಿಡಿಗಳಿಂದಲೇ ಬ್ರಹ್ಮ, ರುದ್ರ, ಇಂದ್ರಾದಿಗಳ ಸಮೂಹಗಳು ಭಸ್ಮವಾಗುತ್ತವೆ.',
        },
      },
];

export const vayuStuti: Mantra = {
  id: 'vayu-stuti',
  title: 'श्रीहरिवायुस्तुतिः',
  titleEn: 'Sri Hari Vayu Stuti',
  category: 'madhva',
  deity: 'Vāyu (Mukhyaprāṇa) and Śrī Narasiṃha',
  source: 'Composed by Trivikrama Paṇḍitācārya; Nakha Stuti by Śrī Madhvācārya',
  summary:
    'A hymn of 41 sragdharā verses praising Vāyu in his three avatāras, Hanumān, Bhīma and Madhvācārya, and through them Śrī Hari. It is recited enclosed by the two Nakha Stuti verses to Lord Narasiṃha, said at the beginning and again at the end.',
  summaryKn:
    'ತ್ರಿವಿಕ್ರಮ ಪಂಡಿತಾಚಾರ್ಯರು ರಚಿಸಿದ, ಸ್ರಗ್ಧರಾ ಛಂದಸ್ಸಿನ 41 ಶ್ಲೋಕಗಳ ಈ ಸ್ತೋತ್ರವು ಹನುಮಂತ, ಭೀಮಸೇನ, ಶ್ರೀಮಧ್ವಾಚಾರ್ಯ ಎಂಬ ಮೂರು ಅವತಾರಗಳಲ್ಲಿ ವಾಯುದೇವರನ್ನು, ಅವರ ಮೂಲಕ ಶ್ರೀಹರಿಯನ್ನು ಸ್ತುತಿಸುತ್ತದೆ. ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು ರಚಿಸಿದ ಶ್ರೀನರಸಿಂಹ ನಖಸ್ತುತಿಯ ಎರಡು ಶ್ಲೋಕಗಳನ್ನು ಇದರ ಮೊದಲಲ್ಲೂ ಕೊನೆಯಲ್ಲೂ ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'advanced',
  completeness: 'complete',
  contentNote:
    'Some families recite variant readings: Nakha Stuti 1 भाविता भूरिभागैः (for नाकिवृन्दैः); verse 15 आश्लिष्टे (for संश्लिष्टे); verse 8 भ्रूविभ्रमः (for भ्रोविभ्रमः).',
  sections: [
    {
      title: 'श्रीनरसिंहनखस्तुतिः',
      titleEn: 'Nakha Stuti',
      note: 'Composed by Śrī Madhvācārya. Recited before the Vāyu Stuti, and repeated at the end.',
      verses: nakhaStuti(),
    },
    {
      title: 'श्रीहरिवायुस्तुतिः',
      titleEn: 'Vayu Stuti',
      verses: [
      {
        n: 1,
        text: 'श्रीमद्विष्ण्वङ्घ्रिनिष्ठातिगुणगुरुतमश्रीमदानन्दतीर्थ-\nत्रैलोक्याचार्यपादोज्ज्वलजलजलसत्पांसवोऽस्मान् पुनन्तु ।\nवाचां यत्र प्रणेत्री त्रिभुवनमहिता शारदा शारदेन्दु-\nज्योत्स्नाभद्रस्मितश्रीधवलितककुभा प्रेमभारं बभार ॥',
        meaning: {
          en: 'May the shining dust from the lotus feet of Śrīmad Ānandatīrtha (Madhvācārya) purify us. He is the teacher of the three worlds, the greatest of gurus, with virtues beyond measure, firmly devoted to the feet of Viṣṇu. Śāradā, the goddess who guides all speech, honoured in the three worlds, whose gentle smile brightens the quarters like autumn moonlight, bore great love for him.',
          kn: 'ಶ್ರೀವಿಷ್ಣುವಿನ ಪಾದಗಳಲ್ಲಿ ದೃಢಭಕ್ತಿಯುಳ್ಳವರೂ, ಅಪಾರ ಗುಣಗಳಿಂದ ಕೂಡಿದ ಗುರುಶ್ರೇಷ್ಠರೂ, ಮೂರು ಲೋಕಗಳಿಗೂ ಆಚಾರ್ಯರೂ ಆದ ಶ್ರೀಮದಾನಂದತೀರ್ಥರ (ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರ) ಪಾದಕಮಲಗಳ ಹೊಳೆಯುವ ಧೂಳಿ ನಮ್ಮನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ. ಮಾತುಗಳಿಗೆ ಒಡತಿಯಾದ, ಮೂರು ಲೋಕಗಳಿಂದಲೂ ಪೂಜಿತಳಾದ, ಶರತ್ಕಾಲದ ಬೆಳದಿಂಗಳಂತಹ ಮಂದಹಾಸದಿಂದ ದಿಕ್ಕುಗಳನ್ನು ಬೆಳಗಿಸುವ ಶಾರದಾದೇವಿಯು ಆಚಾರ್ಯರ ಮೇಲೆ ಅಪಾರ ಪ್ರೀತಿಯನ್ನು ತೋರಿದಳು.',
        },
      },
      {
        n: 2,
        text: 'उत्कण्ठाकुण्ठकोलाहलजवविदिताजस्रसेवानुवृद्ध-\nप्राज्ञात्मज्ञानधूतान्धतमससुमनोमौलिरत्नावलीनाम् ।\nभक्त्युद्रेकावगाढप्रघटनसघटात्कारसङ्घृष्यमाण-\nप्रान्तप्राग्र्याङ्घ्रिपीठोत्थितकनकरजःपिञ्जरारञ्जिताशाः ॥',
        meaning: {
          en: 'That dust rises from Madhvācārya\'s footstool, which is rubbed by the jewelled crowns of gods and wise devotees as they crowd forward, jostling one another in an overflow of devotion. Their darkness of ignorance has been shaken off by knowledge of the Lord that grew through constant service, and their eager, joyful clamour is heard all around. The golden dust lifted from that footstool tints all the directions with its glow.',
          kn: 'ನಿರಂತರ ಸೇವೆಯಿಂದ ಬೆಳೆದ ಪರಮಾತ್ಮಜ್ಞಾನದಿಂದ ಅಜ್ಞಾನದ ಕತ್ತಲೆಯನ್ನು ಕಳೆದುಕೊಂಡ ದೇವತೆಗಳೂ ಜ್ಞಾನಿಗಳೂ ಉತ್ಕಂಠೆಯಿಂದ ಕೋಲಾಹಲ ಮಾಡುತ್ತಾ ನಮಸ್ಕರಿಸಲು ಮುನ್ನುಗ್ಗುತ್ತಾರೆ. ಭಕ್ತಿಯ ಉಕ್ಕಿನಲ್ಲಿ ಒಬ್ಬರನ್ನೊಬ್ಬರು ಒತ್ತುತ್ತಾ ಬಾಗಿದಾಗ ಅವರ ರತ್ನಕಿರೀಟಗಳು ಆಚಾರ್ಯರ ಪಾದಪೀಠಕ್ಕೆ ಉಜ್ಜುತ್ತವೆ. ಆ ಪಾದಪೀಠದಿಂದ ಏಳುವ ಚಿನ್ನದ ಬಣ್ಣದ ಧೂಳಿ ಎಲ್ಲ ದಿಕ್ಕುಗಳನ್ನೂ ರಂಗುಗೊಳಿಸುತ್ತದೆ.',
        },
      },
      {
        n: 3,
        text: 'जन्माधिव्याध्युपाधिप्रतिहतिविरहप्रापकाणां गुणानां\nअग्र्याणामर्पकाणां चिरमुदितचिदानन्दसन्दोहदानाम् ।\nएतेषामेष दोषप्रमुषितमनसां द्वेषिणां दूषकाणां\nदैत्यानामार्तिमन्धे तमसि विदधतां संस्तवे नास्मि शक्तः ॥',
        meaning: {
          en: 'His virtues free one from birth, from sorrows of mind and body and from every limitation; they are supreme, and they bestow lasting bliss of knowledge. Yet those same virtues cast into blind darkness the demonic ones who hate and revile them, their minds corrupted by their own faults. I am not able to praise such virtues as they deserve.',
          kn: 'ಆಚಾರ್ಯರ ಗುಣಗಳು ಹುಟ್ಟು, ಮಾನಸಿಕ ಮತ್ತು ದೈಹಿಕ ವ್ಯಾಧಿಗಳು ಹಾಗೂ ಎಲ್ಲ ಉಪಾಧಿಗಳಿಂದ ಬಿಡುಗಡೆ ಕೊಡುವಂಥವು; ಶ್ರೇಷ್ಠವಾದವು; ಶಾಶ್ವತವಾದ ಜ್ಞಾನಾನಂದವನ್ನು ಕರುಣಿಸುವಂಥವು. ದೋಷಗಳಿಂದ ಕೆಟ್ಟ ಮನಸ್ಸುಳ್ಳ, ಈ ಗುಣಗಳನ್ನು ದ್ವೇಷಿಸಿ ನಿಂದಿಸುವ ದೈತ್ಯಸ್ವಭಾವದವರನ್ನು ಇವೇ ಗುಣಗಳು ಅಂಧತಮಸ್ಸಿನ ದುಃಖಕ್ಕೆ ತಳ್ಳುತ್ತವೆ. ಇಂತಹ ಗುಣಗಳನ್ನು ಸ್ತುತಿಸಲು ನಾನು ಸಮರ್ಥನಲ್ಲ.',
        },
      },
      {
        n: 4,
        text: 'अस्याविष्कर्तुकामं कलिमलकलुषेऽस्मिन् जने ज्ञानमार्गं\nवन्द्यं चन्द्रेन्द्ररुद्रद्युमणिफणिवयोनायकाद्यैरिहाद्य ।\nमध्वाख्यं मन्त्रसिद्धं किमुत कृतवतो मारुतस्यावतारं\nपातारं पारमेष्ठ्यं पदमपविपदः प्राप्तुरापन्नपुंसाम् ॥',
        meaning: {
          en: 'How much less, then, can I praise Vāyu himself? Wishing to reveal the path of true knowledge to people stained by the impurities of Kali, he took the avatāra named Madhva, which is proclaimed in the Vedic mantras and is revered even now by Chandra, Indra, Rudra, Sūrya, Śeṣa, Garuḍa and others. He protects those who take refuge in him, and he is to attain the exalted position of Brahmā, free from all misfortune.',
          kn: 'ಹಾಗಿರುವಾಗ ವಾಯುದೇವರನ್ನೇ ಸ್ತುತಿಸುವುದು ಹೇಗೆ? ಕಲಿಯ ಕಲ್ಮಷದಿಂದ ಕಲುಷಿತರಾದ ಜನರಿಗೆ ಜ್ಞಾನಮಾರ್ಗವನ್ನು ತೋರಿಸಬೇಕೆಂದು ಅವರು ‘ಮಧ್ವ’ ಎಂಬ ಅವತಾರವನ್ನು ತಾಳಿದರು; ಆ ಅವತಾರವು ವೇದಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರಸಿದ್ಧವಾದುದು, ಚಂದ್ರ, ಇಂದ್ರ, ರುದ್ರ, ಸೂರ್ಯ, ಶೇಷ, ಗರುಡ ಮೊದಲಾದ ದೇವತೆಗಳಿಂದ ವಂದಿತವಾದುದು. ಶರಣು ಬಂದವರನ್ನು ಕಾಪಾಡುವ ವಾಯುದೇವರು ಯಾವ ಆಪತ್ತೂ ಇಲ್ಲದ ಬ್ರಹ್ಮಪದವಿಯನ್ನು ಪಡೆಯಲಿರುವವರು.',
        },
      },
      {
        n: 5,
        text: 'उद्यद्विद्युत्प्रचण्डां निजरुचिनिकरव्याप्तलोकावकाशो\nबिभ्रद्भीमो भुजे योऽभ्युदितदिनकराभाङ्गदाढ्यप्रकाण्डे ।\nवीर्योद्धार्यां गदाग्र्यामयमिह सुमतिं वायुदेवो विदध्यात्\nअध्यात्मज्ञाननेता यतिवरमहितो भूमिभूषामणिर्मे ॥',
        meaning: {
          en: 'As Bhīma, Vāyudeva fills the expanse of the worlds with his own radiance. On his mighty arm, bright with armlets like the rising sun, he carries the foremost of maces, fierce as flashing lightning, which only his strength can lift. May that Vāyudeva, the guide to spiritual knowledge, honoured by the best of ascetics, the crest-jewel of the earth, grant me a good mind.',
          kn: 'ಭೀಮಸೇನರಾಗಿ ವಾಯುದೇವರು ತಮ್ಮ ತೇಜಸ್ಸಿನಿಂದ ಲೋಕಗಳನ್ನೆಲ್ಲ ವ್ಯಾಪಿಸಿದ್ದಾರೆ. ಉದಯಿಸುವ ಸೂರ್ಯನಂತೆ ಹೊಳೆಯುವ ತೋಳ್ಬಂದಿಯಿಂದ ಶೋಭಿಸುವ ತಮ್ಮ ಬಲಿಷ್ಠ ಭುಜದಲ್ಲಿ, ಮಿಂಚಿನಂತೆ ಪ್ರಚಂಡವಾದ, ತಮ್ಮ ಪರಾಕ್ರಮದಿಂದ ಮಾತ್ರ ಎತ್ತಬಹುದಾದ ಶ್ರೇಷ್ಠ ಗದೆಯನ್ನು ಧರಿಸಿದ್ದಾರೆ. ಅಧ್ಯಾತ್ಮಜ್ಞಾನಕ್ಕೆ ದಾರಿ ತೋರುವ, ಯತಿಶ್ರೇಷ್ಠರಿಂದ ಪೂಜಿತರಾದ, ಭೂಮಿಗೆ ಚೂಡಾಮಣಿಯಂತಿರುವ ಆ ವಾಯುದೇವರು ನನಗೆ ಸದ್ಬುದ್ಧಿಯನ್ನು ಕೊಡಲಿ.',
        },
      },
      {
        n: 6,
        text: 'संसारोत्तापनित्योपशमदसदयस्नेहहासाम्बुपूर-\nप्रोद्यद्विद्यानवद्यद्युतिमणिकिरणश्रेणिसम्पूरिताशः ।\nश्रीवत्साङ्काधिवासोचिततरसरलश्रीमदानन्दतीर्थ-\nक्षीराम्भोधिर्विभिन्द्याद्भवदनभिमतं भूरि मे भूतिहेतुः ॥',
        meaning: {
          en: 'Śrīmad Ānandatīrtha is like the ocean of milk: a fitting home for the Lord who bears the Śrīvatsa mark, gentle and straightforward. His compassion, affection and smile are its waters, ever cooling the burning heat of saṃsāra, and the rays of his flawless learning fill all directions like the light of gems rising from that ocean. May he break apart whatever in me is displeasing to you, and be the cause of my abundant good.',
          kn: 'ಶ್ರೀಮದಾನಂದತೀರ್ಥರು ಕ್ಷೀರಸಾಗರದಂತಿದ್ದಾರೆ: ಶ್ರೀವತ್ಸಲಾಂಛನನಾದ ಶ್ರೀಹರಿಗೆ ಯೋಗ್ಯವಾದ ನೆಲೆಯಾಗಿದ್ದಾರೆ, ಸೌಮ್ಯರೂ ಸರಳರೂ ಆಗಿದ್ದಾರೆ. ಸಂಸಾರದ ತಾಪವನ್ನು ಸದಾ ತಣಿಸುವ ಅವರ ದಯೆ, ಪ್ರೀತಿ, ಮಂದಹಾಸಗಳೇ ಆ ಸಾಗರದ ನೀರು; ಅವರ ನಿರ್ದೋಷವಾದ ವಿದ್ಯೆಯ ಕಿರಣಗಳು ಆ ಸಾಗರದಿಂದ ಹುಟ್ಟಿದ ರತ್ನಗಳ ಕಾಂತಿಯಂತೆ ಎಲ್ಲ ದಿಕ್ಕುಗಳನ್ನೂ ತುಂಬಿವೆ. ನನ್ನಲ್ಲಿರುವ, ನಿಮಗೆ ಒಪ್ಪದ ಎಲ್ಲವನ್ನೂ ಅವರು ಒಡೆದುಹಾಕಿ ನನ್ನ ಶ್ರೇಯಸ್ಸಿಗೆ ಕಾರಣರಾಗಲಿ.',
        },
      },
      {
        n: 7,
        text: 'मूर्धन्येषोऽञ्जलिर्मे दृढतरमिह ते बध्यते बन्धपाश-\nच्छेत्रे दात्रे सुखानां भजति भुवि भविष्यद्विधात्रे द्युभर्त्रे ।\nअत्यन्तं सन्ततं त्वं प्रदिश पदयुगे हन्त सन्तापभाजां\nअस्माकं भक्तिमेकां भगवत उत ते माधवस्याथ वायोः ॥',
        meaning: {
          en: 'Here I fold my hands firmly upon my head before you, who cut the noose of bondage, give happiness to those who worship you on earth, are the Creator (Brahmā) to come, and are the sustainer of heaven. We are suffering; grant us, endlessly and without a break, single-minded devotion to the feet of Lord Mādhava and to your own, O Vāyu.',
          kn: 'ಸಂಸಾರಬಂಧನದ ಪಾಶವನ್ನು ಕತ್ತರಿಸುವ, ಭೂಮಿಯಲ್ಲಿ ನಿಮ್ಮನ್ನು ಭಜಿಸುವವರಿಗೆ ಸುಖವನ್ನು ಕೊಡುವ, ಮುಂದೆ ಬ್ರಹ್ಮರಾಗಲಿರುವ, ಸ್ವರ್ಗಲೋಕವನ್ನು ಪೊರೆಯುವ ನಿಮಗೆ ತಲೆಯ ಮೇಲೆ ಕೈಮುಗಿದು ದೃಢವಾಗಿ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. ಸಂತಾಪದಿಂದ ಬಳಲುತ್ತಿರುವ ನಮಗೆ ಭಗವಂತನಾದ ಮಾಧವನ ಪಾದಗಳಲ್ಲಿಯೂ, ವಾಯುದೇವರೇ, ನಿಮ್ಮ ಪಾದಗಳಲ್ಲಿಯೂ ನಿರಂತರವಾದ, ಅನನ್ಯವಾದ ಭಕ್ತಿಯನ್ನು ಕರುಣಿಸಿರಿ.',
        },
      },
      {
        n: 8,
        text: 'साभ्रोष्णाभीशुशुभ्रप्रभमभय नभो भूरिभूभृद्विभूति-\nभ्राजिष्णुर्भूर्ऋभूणां भवनमपि विभोऽभेदि बभ्रे बभूवे ।\nयेन भ्रोविभ्रमस्ते भ्रमयतु सुभृशं बभ्रुवद्दुर्भृताशान्\nभ्रान्तिर्भेदावभासस्त्विति भयमभिभोर्भूक्ष्यतो मायिभिक्षून् ॥',
        meaning: {
          en: 'O fearless, all-pervading Lord, by the mere play of your eyebrow the sky, bright with clouds and the radiant sun, the earth, splendid with its many mountains, and even the dwelling of the gods are created, sustained and dissolved. May that same movement of your brow toss about and confound the greedy mendicants of the doctrine of māyā, who claim that the perception of difference is only an illusion.',
          kn: 'ಅಭಯರೇ, ಸರ್ವವ್ಯಾಪಿಯಾದ ಪ್ರಭುವೇ, ಮೋಡಗಳಿಂದಲೂ ಸೂರ್ಯನಿಂದಲೂ ಹೊಳೆಯುವ ಆಕಾಶ, ಅನೇಕ ಪರ್ವತಗಳಿಂದ ಶೋಭಿಸುವ ಭೂಮಿ, ದೇವತೆಗಳ ವಾಸಸ್ಥಾನವಾದ ಸ್ವರ್ಗ — ಇವೆಲ್ಲವೂ ನಿಮ್ಮ ಹುಬ್ಬಿನ ಒಂದು ಚಲನೆಯಿಂದಲೇ ಸೃಷ್ಟಿಯಾಗುತ್ತವೆ, ಪಾಲಿಸಲ್ಪಡುತ್ತವೆ, ಲಯವಾಗುತ್ತವೆ. “ಭೇದವು ಕಾಣುವುದೆಲ್ಲ ಭ್ರಾಂತಿ ಮಾತ್ರ” ಎಂದು ಹೇಳುವ, ಆಸೆಬುರುಕರಾದ ಮಾಯಾವಾದಿ ಸನ್ಯಾಸಿಗಳನ್ನು ನಿಮ್ಮ ಆ ಹುಬ್ಬಿನ ಚಲನೆಯೇ ಚೆನ್ನಾಗಿ ತಿರುಗಿಸಿ ಕಂಗೆಡಿಸಲಿ.',
        },
      },
      {
        n: 9,
        text: 'येऽमुं भावं भजन्ते सुरमुखसुजनाराधितं ते तृतीयं\nभासन्ते भासुरैस्ते सहचरचलितैश्चामरैश्चारुवेषाः ।\nवैकुण्ठे कण्ठलग्नस्थिरशुचिविलसत्कान्तितारुण्यलीला-\nलावण्यापूर्णकान्ताकुचभरसुलभाश्लेषसम्मोदसान्द्राः ॥',
        meaning: {
          en: 'Those who worship this third form of yours (Madhvācārya), revered by the gods and by good people, shine in Vaikuṇṭha in beautiful attire, fanned by radiant chāmaras waved by their companions. Steeped in joy, they delight in the easily won embrace of the full bosoms of their radiant, ever-youthful consorts, who cling to their necks and whose charm never fades.',
          kn: 'ದೇವತೆಗಳಿಂದಲೂ ಸಜ್ಜನರಿಂದಲೂ ಆರಾಧಿತವಾದ ನಿಮ್ಮ ಈ ಮೂರನೆಯ ರೂಪವನ್ನು (ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರ ಅವತಾರವನ್ನು) ಭಜಿಸುವವರು ವೈಕುಂಠದಲ್ಲಿ ಸುಂದರ ವೇಷದಿಂದ ಶೋಭಿಸುತ್ತಾರೆ; ಸಂಗಡಿಗರು ಬೀಸುವ ಹೊಳೆಯುವ ಚಾಮರಗಳಿಂದ ಸೇವಿತರಾಗುತ್ತಾರೆ. ಕೊರಳನ್ನು ಅಪ್ಪಿಕೊಂಡಿರುವ, ಎಂದೂ ಮಾಸದ ಕಾಂತಿ, ಯೌವನ, ಲಾವಣ್ಯಗಳಿಂದ ಕೂಡಿದ ತಮ್ಮ ಪತ್ನಿಯರ ಪುಷ್ಟ ಸ್ತನಗಳ ಸುಲಭವಾದ ಆಲಿಂಗನದ ಆನಂದದಲ್ಲಿ ಅವರು ಮುಳುಗಿರುತ್ತಾರೆ.',
        },
      },
      {
        n: 10,
        text: 'आनन्दान् मन्दमन्दा ददति हि मरुतः कुन्दमन्दारनन्द्या-\nवर्तामोदान् दधाना मृदुपदमुदितोद्गीतकैः सुन्दरीणाम् ।\nवृन्दैरावन्द्यमुक्तेन्द्वहिमगुमदनाहीन्द्रदेवेन्द्रसेव्ये\nमौकुन्दे मन्दिरेऽस्मिन्नविरतमुदयन् मोदिनां देवदेव ॥',
        meaning: {
          en: 'O God of gods, in this abode of Mukunda (Vaikuṇṭha), served by the liberated souls, by the Moon and the Sun, by Kāma, Śeṣa and Indra, you shine forth unceasingly for those who rejoice there. Gentle breezes carrying the fragrance of kunda, mandāra and nandyāvarta flowers give them delight, together with the sweet songs of graceful women stepping softly.',
          kn: 'ದೇವದೇವರೇ, ಮುಕ್ತರು, ಚಂದ್ರ, ಸೂರ್ಯ, ಮನ್ಮಥ, ಶೇಷ, ದೇವೇಂದ್ರ ಮೊದಲಾದವರಿಂದ ಸೇವಿತವಾದ ಮುಕುಂದನ ಈ ಮಂದಿರದಲ್ಲಿ (ವೈಕುಂಠದಲ್ಲಿ) ಆನಂದದಲ್ಲಿರುವವರಿಗಾಗಿ ನೀವು ಸದಾ ಪ್ರಕಾಶಿಸುತ್ತಿರುವಿರಿ. ಅಲ್ಲಿ ಕುಂದ, ಮಂದಾರ, ನಂದ್ಯಾವರ್ತ ಹೂವುಗಳ ಸುಗಂಧವನ್ನು ಹೊತ್ತ ಮಂದಮಾರುತಗಳು, ಮೃದುವಾಗಿ ಹೆಜ್ಜೆಯಿಡುತ್ತಾ ಹಾಡುವ ಸುಂದರಿಯರ ಮಧುರಗೀತೆಗಳೊಡನೆ ಅವರಿಗೆ ಆನಂದವನ್ನು ಕೊಡುತ್ತವೆ.',
        },
      },
      {
        n: 11,
        text: 'उत्तप्तात्युत्कटत्विट्प्रकटकटकटध्वानसङ्घट्टनोद्यद्-\nविद्युद्व्यूढस्फुलिङ्गप्रकरविकिरणोत्क्वाथिते बाधिताङ्गान् ।\nउद्गाढं पात्यमाना तमसि तत इतः किङ्करैः पङ्किले ते\nपङ्क्तिर्ग्राव्णां गरिम्णां ग्लपयति हि भवद्द्वेषिणो विद्वदाद्य ॥',
        meaning: {
          en: 'O first among the wise, those who hate you are dragged here and there by Yama\'s servants and hurled down into a dark, miry hell. There, amid a seething blaze that scatters showers of lightning-like sparks with terrible crackling crashes, their tormented bodies are crushed under rows of heavy stones.',
          kn: 'ಜ್ಞಾನಿಗಳಲ್ಲಿ ಮೊದಲಿಗರೇ, ನಿಮ್ಮನ್ನು ದ್ವೇಷಿಸುವವರನ್ನು ಯಮಕಿಂಕರರು ಅತ್ತಿತ್ತ ಎಳೆದಾಡಿ ಕತ್ತಲೆಯ, ಕೆಸರು ತುಂಬಿದ ನರಕಕ್ಕೆ ಬಲವಾಗಿ ತಳ್ಳುತ್ತಾರೆ. ಅಲ್ಲಿ ‘ಕಟಕಟ’ ಎಂಬ ಭಯಂಕರ ಸದ್ದಿನೊಡನೆ ಮಿಂಚಿನಂತಹ ಕಿಡಿಗಳನ್ನು ಸುರಿಸುವ ಕುದಿಯುವ ಬೆಂಕಿಯಲ್ಲಿ ಬಳಲಿದ ಅವರ ದೇಹಗಳನ್ನು ಭಾರವಾದ ಕಲ್ಲುಗಳ ಸಾಲುಗಳು ಜಜ್ಜಿ ನೋಯಿಸುತ್ತವೆ.',
        },
      },
      {
        n: 12,
        text: 'अस्मिन्नस्मद्गुरूणां हरिचरणचिरध्यानसन्मङ्गलानां\nयुष्माकं पार्श्वभूमिं धृतरणरणिकः स्वर्गिसेव्यां प्रपन्नः ।\nयस्तूदास्ते स आस्तेऽधिभवमसुलभक्लेशनिर्मोकमस्त-\nप्रायानन्दं कथञ्चिन्न वसति सततं पञ्चकष्टेऽतिकष्टे ॥',
        meaning: {
          en: 'Whoever in this world longingly takes refuge at your side, the place served by the gods (you, our guru, whose blessedness is long meditation on Hari\'s feet), reaches it. But one who stays indifferent to you remains in saṃsāra, where release from suffering is hard to win and joy is almost absent; still, such a person does not dwell forever in the most painful hell.',
          kn: 'ಶ್ರೀಹರಿಯ ಪಾದಗಳ ದೀರ್ಘಧ್ಯಾನವೇ ಮಂಗಳವಾಗಿರುವ ನಮ್ಮ ಗುರುಗಳಾದ ನಿಮ್ಮ ಸನ್ನಿಧಿಯನ್ನು — ದೇವತೆಗಳೂ ಸೇವಿಸುವ ಆ ಸ್ಥಾನವನ್ನು — ಹಂಬಲದಿಂದ ಶರಣು ಹೊಂದಿದವನು ಅದನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಆದರೆ ನಿಮ್ಮ ವಿಷಯದಲ್ಲಿ ಉದಾಸೀನನಾಗಿರುವವನು, ದುಃಖದಿಂದ ಬಿಡುಗಡೆ ಸುಲಭವಲ್ಲದ, ಆನಂದವೇ ಇಲ್ಲವೆನ್ನುವಂತಹ ಸಂಸಾರದಲ್ಲೇ ಉಳಿಯುತ್ತಾನೆ; ಆದರೂ ಅತ್ಯಂತ ಕಷ್ಟಕರವಾದ ನರಕದಲ್ಲಿ ಅವನು ಶಾಶ್ವತವಾಗಿ ವಾಸಿಸುವುದಿಲ್ಲ.',
        },
      },
      {
        n: 13,
        text: 'क्षुत्क्षामान् रूक्षरक्षोरदखरनखरक्षुण्णविक्षोभिताक्षान्\nआमग्नानन्धकूपे क्षुरमुखमुखरैः पक्षिभिर्विक्षताङ्गान् ।\nपूयासृङ्मूत्रविष्ठाकृमिकुलकलिले तत्क्षणाक्षिप्तशक्त्या-\nद्यस्त्रव्रातार्दितांस्त्वद्द्विष उपजिहते वज्रकल्पा जलूकाः ॥',
        meaning: {
          en: 'Those who hate you are wasted by hunger; their eyes are torn and terrified by the rough teeth and sharp claws of cruel demons; sunk in a blind well, their bodies are pecked by birds with razor-sharp beaks. Struck all at once by volleys of spears and other weapons, they lie in a pit seething with pus, blood, urine, filth and swarms of worms, where leeches hard as diamond fasten upon them.',
          kn: 'ನಿಮ್ಮನ್ನು ದ್ವೇಷಿಸುವವರು ಹಸಿವಿನಿಂದ ಕೃಶರಾಗುತ್ತಾರೆ; ಕ್ರೂರ ರಾಕ್ಷಸರ ಒರಟು ಹಲ್ಲು ಮತ್ತು ಹರಿತ ಉಗುರುಗಳಿಂದ ಅವರ ಕಣ್ಣುಗಳು ಗಾಯಗೊಂಡು ಕಂಗೆಡುತ್ತವೆ; ಕುರುಡುಬಾವಿಯಲ್ಲಿ ಮುಳುಗಿದ ಅವರ ದೇಹಗಳನ್ನು ಕತ್ತಿಯಂತೆ ಹರಿತವಾದ ಕೊಕ್ಕುಗಳ ಪಕ್ಷಿಗಳು ಕುಕ್ಕುತ್ತವೆ. ಒಮ್ಮೆಲೇ ಎಸೆದ ಈಟಿ ಮೊದಲಾದ ಆಯುಧಗಳ ಹೊಡೆತಕ್ಕೆ ಒಳಗಾಗಿ, ಕೀವು, ರಕ್ತ, ಮೂತ್ರ, ಮಲ, ಹುಳುಗಳಿಂದ ತುಂಬಿದ ಗುಂಡಿಯಲ್ಲಿ ಬಿದ್ದಿರುವ ಅವರನ್ನು ವಜ್ರದಂತೆ ಕಠಿಣವಾದ ಜಿಗಣೆಗಳು ಮುತ್ತಿಕೊಳ್ಳುತ್ತವೆ.',
        },
      },
      {
        n: 14,
        text: 'मातर्मे मातरिश्वन् पितरतुलगुरो भ्रातरिष्टाप्तबन्धो\nस्वामिन् सर्वान्तरात्मन्नजर जरयितर्जन्ममृत्यामयानाम् ।\nगोविन्दे देहि भक्तिं भवति च भगवन्नूर्जितां निर्निमित्तां\nनिर्व्याजां निश्चलां सद्गुणगणबृहतीं शाश्वतीमाशु देव ॥',
        meaning: {
          en: 'O Mātariśvan (Vāyu), you are my mother and my father, my peerless guru, my brother, my dear friend and kinsman, my master, the inner self of all; you are ageless, and you wear away birth, death and disease. O Lord, quickly grant me devotion to Govinda and to yourself: strong, free of selfish motive and pretence, unwavering, rich in knowledge of His countless virtues, and everlasting.',
          kn: 'ಮಾತರಿಶ್ವರೇ (ವಾಯುದೇವರೇ), ನೀವೇ ನನ್ನ ತಾಯಿ, ನೀವೇ ತಂದೆ, ಸಾಟಿಯಿಲ್ಲದ ಗುರು, ಅಣ್ಣ, ಪ್ರಿಯ ಸ್ನೇಹಿತ, ಬಂಧು, ಒಡೆಯ; ಎಲ್ಲರ ಅಂತರ್ಯಾಮಿಯೂ ನೀವೇ. ಮುಪ್ಪಿಲ್ಲದ ನೀವು ಹುಟ್ಟು, ಸಾವು, ರೋಗಗಳನ್ನು ಕಳೆಯುವವರು. ದೇವರೇ, ಗೋವಿಂದನಲ್ಲಿಯೂ ನಿಮ್ಮಲ್ಲಿಯೂ ದೃಢವಾದ, ಸ್ವಾರ್ಥವಿಲ್ಲದ, ಕಪಟವಿಲ್ಲದ, ಚಂಚಲವಾಗದ, ಸದ್ಗುಣಗಳ ತಿಳಿವಳಿಕೆಯಿಂದ ಬೆಳೆದ, ಶಾಶ್ವತವಾದ ಭಕ್ತಿಯನ್ನು ನನಗೆ ಬೇಗನೆ ಕರುಣಿಸಿರಿ.',
        },
      },
      {
        n: 15,
        text: 'विष्णोरत्युत्तमत्वादखिलगुणगणैस्तत्र भक्तिं गरिष्ठां\nसंश्लिष्टे श्रीधराभ्याममुमथ परिवारात्मना सेवकेषु ।\nयः सन्धत्ते विरिञ्चिश्वसनविहगपानन्तरुद्रेन्द्रपूर्वे-\nष्वाध्यायंस्तारतम्यं स्फुटमवति सदा वायुरस्मद्गुरुस्तम् ॥',
        meaning: {
          en: 'Vāyu, our guru, always clearly protects the one who knows Viṣṇu to be supreme in every perfection and holds the highest devotion to Him; then to Him as embraced by Śrī and Bhū; and then to His servants who form His retinue, Brahmā, Vāyu, Garuḍa, Śeṣa, Rudra, Indra and the rest, while contemplating the gradation (tāratamya) among them.',
          kn: 'ಸಮಸ್ತ ಗುಣಗಳಲ್ಲಿ ಶ್ರೀವಿಷ್ಣುವೇ ಸರ್ವೋತ್ತಮನೆಂದು ತಿಳಿದು ಅವನಲ್ಲಿ ಅತ್ಯಂತ ಶ್ರೇಷ್ಠವಾದ ಭಕ್ತಿಯನ್ನಿಟ್ಟು, ನಂತರ ಶ್ರೀದೇವಿ-ಭೂದೇವಿಯರಿಂದ ಆಲಿಂಗಿತನಾದ ಅವನಲ್ಲಿಯೂ, ಅವನ ಪರಿವಾರವಾಗಿರುವ ಸೇವಕರಾದ ಬ್ರಹ್ಮ, ವಾಯು, ಗರುಡ, ಶೇಷ, ರುದ್ರ, ಇಂದ್ರ ಮೊದಲಾದವರಲ್ಲಿಯೂ ಅವರ ತಾರತಮ್ಯವನ್ನು ಚಿಂತಿಸುತ್ತಾ ಯಾರು ಭಕ್ತಿಯನ್ನಿಡುತ್ತಾನೋ, ಅವನನ್ನು ನಮ್ಮ ಗುರುಗಳಾದ ವಾಯುದೇವರು ಸದಾ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಪಾಡುತ್ತಾರೆ.',
        },
      },
      {
        n: 16,
        text: 'तत्त्वज्ञान् मुक्तिभाजः सुखयसि हि गुरो योग्यतातारतम्या-\nदाधत्से मिश्रबुद्धींस्त्रिदिवनिरयभूगोचरान् नित्यबद्धान् ।\nतामिस्रान्धादिकाख्ये तमसि सुबहुलं दुःखयस्यन्यथाज्ञान्\nविष्णोराज्ञाभिरित्थं श्रुतिशतमितिहासादि चाऽकर्णयामः ॥',
        meaning: {
          en: 'O Guru, by Viṣṇu\'s command you give bliss to the liberated knowers of truth according to the gradation of their fitness. Those of mixed understanding you keep forever bound, moving through heaven, hell and earth; and those of perverse knowledge you cause to suffer intensely in the darkness called Andhatāmisra and the like. This is what we hear from hundreds of Vedic texts and from the Itihāsas and other scriptures.',
          kn: 'ಗುರುಗಳೇ, ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಂತೆ ನೀವು ತತ್ತ್ವಜ್ಞಾನಿಗಳಾದ ಮುಕ್ತರಿಗೆ ಅವರವರ ಯೋಗ್ಯತೆಯ ತಾರತಮ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಆನಂದವನ್ನು ಕೊಡುತ್ತೀರಿ. ಮಿಶ್ರಬುದ್ಧಿಯುಳ್ಳವರನ್ನು ಸ್ವರ್ಗ, ನರಕ, ಭೂಲೋಕಗಳಲ್ಲಿ ಸುತ್ತುವ ನಿತ್ಯಬದ್ಧರನ್ನಾಗಿ ಇರಿಸುತ್ತೀರಿ. ವಿಪರೀತಜ್ಞಾನಿಗಳಿಗೆ ಅಂಧತಾಮಿಸ್ರವೇ ಮೊದಲಾದ ತಮಸ್ಸಿನಲ್ಲಿ ಅಪಾರ ದುಃಖವನ್ನು ಉಂಟುಮಾಡುತ್ತೀರಿ. ಇದನ್ನು ನೂರಾರು ಶ್ರುತಿವಾಕ್ಯಗಳಿಂದಲೂ ಇತಿಹಾಸ-ಪುರಾಣಗಳಿಂದಲೂ ನಾವು ಕೇಳುತ್ತೇವೆ.',
        },
      },
      {
        n: 17,
        text: 'वन्देऽहं तं हनूमानिति महितमहापौरुषो बाहुशाली\nख्यातस्तेऽग्र्योऽवतारः सहित इह बहुब्रह्मचर्यादिधर्मैः ।\nसस्नेहानां सहस्वानहरहरहितं निर्दहन् देहभाजां\nअंहोमोहापहो यः स्पृहयति महतीं भक्तिमद्यापि रामे ॥',
        meaning: {
          en: 'I bow to you, renowned as Hanumān, your foremost avatāra, mighty-armed and of great valour, endowed with strict brahmacharya and other virtues. Day after day you burn away the misfortunes of embodied beings who love you, removing their sin and delusion; and even today you long for ever-greater devotion to Rāma.',
          kn: 'ಹನುಮಂತ ಎಂಬ ಹೆಸರಿನಿಂದ ಪ್ರಸಿದ್ಧವಾದ, ಮಹಾಪರಾಕ್ರಮಿಯೂ ಬಲಿಷ್ಠ ಭುಜಗಳುಳ್ಳವರೂ, ಬ್ರಹ್ಮಚರ್ಯವೇ ಮೊದಲಾದ ಧರ್ಮಗಳಿಂದ ಕೂಡಿದವರೂ ಆದ ನಿಮ್ಮ ಮೊದಲ ಅವತಾರಕ್ಕೆ ನಾನು ವಂದಿಸುತ್ತೇನೆ. ನಿಮ್ಮನ್ನು ಪ್ರೀತಿಸುವ ಜೀವರ ಕೇಡುಗಳನ್ನು ನೀವು ದಿನದಿನವೂ ಸುಟ್ಟುಹಾಕುತ್ತಾ ಅವರ ಪಾಪ-ಮೋಹಗಳನ್ನು ಕಳೆಯುತ್ತೀರಿ; ಇಂದಿಗೂ ಶ್ರೀರಾಮನಲ್ಲಿ ಮಹತ್ತರವಾದ ಭಕ್ತಿಯನ್ನೇ ಬಯಸುತ್ತೀರಿ.',
        },
      },
      {
        n: 18,
        text: 'प्राक्पञ्चाशत्सहस्रैर्व्यवहितममितं योजनैः पर्वतं त्वं\nयावत्सञ्जीवनाद्यौषधनिधिमधिक प्राण लङ्कामनैषीः ।\nअद्राक्षीदुत्पतन्तं तत उत गिरिमुत्पाटयन्तं गृहीत्वाऽऽ-\nयान्तं खे राघवाङ्घ्रौ प्रणतमपि तदैकक्षणे त्वां हि लोकः ॥',
        meaning: {
          en: 'O Prāṇa, mighty beyond all, you brought to Laṅkā the immense mountain that held Sañjīvanī and the other healing herbs, though it stood fifty thousand yojanas away. The world saw you, all in a single moment, leap up, uproot the mountain, come through the sky carrying it, and bow at the feet of Rāghava.',
          kn: 'ಎಲ್ಲರಿಗಿಂತ ಅಧಿಕ ಬಲಶಾಲಿಗಳಾದ ಪ್ರಾಣದೇವರೇ, ಐವತ್ತು ಸಾವಿರ ಯೋಜನ ದೂರದಲ್ಲಿದ್ದ, ಸಂಜೀವಿನಿ ಮೊದಲಾದ ಔಷಧಿಗಳ ನಿಧಿಯಾದ ಅಪಾರ ಪರ್ವತವನ್ನು ನೀವು ಲಂಕೆಗೆ ತಂದಿರಿ. ನೀವು ಹಾರಿದ್ದು, ಪರ್ವತವನ್ನು ಕಿತ್ತದ್ದು, ಅದನ್ನು ಹಿಡಿದು ಆಕಾಶಮಾರ್ಗವಾಗಿ ಬಂದದ್ದು, ಶ್ರೀರಾಮನ ಪಾದಗಳಿಗೆ ನಮಸ್ಕರಿಸಿದ್ದು — ಎಲ್ಲವನ್ನೂ ಜನರು ಒಂದೇ ಕ್ಷಣದಲ್ಲಿ ಕಂಡರು.',
        },
      },
      {
        n: 19,
        text: 'क्षिप्तः पश्चात् सलीलं शतमतुलमते योजनानां स उच्चः\nतावद्विस्तारवांश्चाप्युपललव इव व्यग्रबुध्द्या त्वयाऽतः ।\nस्वस्वस्थानस्थितातिस्थिरशकलशिलाजालसंश्लेषनष्ट-\nच्छेदाङ्कः प्रागिवाभूत् कपिवरवपुषस्ते नमः कौशलाय ॥',
        meaning: {
          en: 'Afterwards, O one of matchless wisdom, you casually tossed that mountain back from Laṅkā as if it were a pebble, though it was a hundred yojanas high and as many wide. Every fragment of rock settled firmly back into its own place, so that no trace of the break remained and it stood as before. Salutations to your skill, O best of Vānaras.',
          kn: 'ಅಸಾಮಾನ್ಯ ಬುದ್ಧಿಶಾಲಿಗಳೇ, ನೂರು ಯೋಜನ ಎತ್ತರವೂ ಅಷ್ಟೇ ಅಗಲವೂ ಇದ್ದ ಆ ಪರ್ವತವನ್ನು ನಂತರ ನೀವು ಲೀಲಾಜಾಲವಾಗಿ ಒಂದು ಸಣ್ಣ ಕಲ್ಲಿನ ಚೂರಿನಂತೆ ಲಂಕೆಯಿಂದಲೇ ಹಿಂದಕ್ಕೆ ಎಸೆದಿರಿ. ಅದರ ಪ್ರತಿಯೊಂದು ಬಂಡೆಯ ತುಂಡೂ ತನ್ನ ತನ್ನ ಸ್ಥಳದಲ್ಲಿ ದೃಢವಾಗಿ ಕೂಡಿಕೊಂಡು, ಮುರಿದ ಗುರುತೇ ಇಲ್ಲದೆ ಮೊದಲಿನಂತೆಯೇ ಆಯಿತು. ಕಪಿಶ್ರೇಷ್ಠ ರೂಪದ ನಿಮ್ಮ ಈ ಕೌಶಲಕ್ಕೆ ನಮಸ್ಕಾರ.',
        },
      },
      {
        n: 20,
        text: 'दृष्ट्वा दुष्टाधिपोरः स्फुटितकनकसद्वर्मघृष्टास्थिकूटं\nनिष्पिष्टं हाटकाद्रिप्रकटतटतटाकातिशङ्को जनोऽभूत् ।\nयेनाऽजौ रावणारिप्रियनटनपटुर्मुष्टिरिष्टं प्रदेष्टुं\nकिं नेष्टे मे स तेऽष्टापदकटकतटित्कोटिभामृष्टकाष्ठः ॥',
        meaning: {
          en: 'When people saw the chest of Rāvaṇa, the wicked king, crushed by you, its bones ground against his shattered golden armour, they took it for a lake on the slopes of the golden mountain Meru. You did this in battle with your fist, skilled in the battle-dance that pleased Rāma, while the flash of your golden bracelet, like countless lightnings, lit up the directions. Can that fist of yours not grant me what I seek?',
          kn: 'ದುಷ್ಟರಾಜನಾದ ರಾವಣನ ಎದೆಯು, ಒಡೆದ ಚಿನ್ನದ ಕವಚಕ್ಕೆ ಮೂಳೆಗಳು ಉಜ್ಜಿ, ನುಚ್ಚುನೂರಾಗಿದ್ದುದನ್ನು ಕಂಡು ಜನರು ಅದನ್ನು ಮೇರುಪರ್ವತದ ತಪ್ಪಲಿನ ಸರೋವರವೇನೋ ಎಂದು ಶಂಕಿಸಿದರು. ಯುದ್ಧದಲ್ಲಿ ಶ್ರೀರಾಮನಿಗೆ ಪ್ರಿಯವಾದ ರಣನೃತ್ಯದಲ್ಲಿ ನಿಪುಣವಾದ ನಿಮ್ಮ ಮುಷ್ಟಿಯೇ ಇದನ್ನು ಮಾಡಿತು; ಚಿನ್ನದ ಕಡಗದ ಕೋಟಿ ಮಿಂಚುಗಳಂತಹ ಕಾಂತಿಯಿಂದ ಅದು ದಿಕ್ಕುಗಳನ್ನು ಬೆಳಗಿಸುತ್ತದೆ. ನನಗೆ ಬೇಕಾದುದನ್ನು ಕೊಡಲು ಆ ಮುಷ್ಟಿಗೆ ಸಾಧ್ಯವಿಲ್ಲವೇ?',
        },
      },
      {
        n: 21,
        text: 'देव्यादेशप्रणीतिद्रुहिणहरवरावध्यरक्षोविघाता-\nद्यासेवोद्यद्दयार्द्रः सहभुजमकरोद्रामनामा मुकुन्दः ।\nदुष्प्रापे पारमेष्ठ्ये करतलमतुलं मूर्ध्नि विन्यस्य धन्यं\nतन्वन् भूयः प्रभूतप्रणयविकसिताब्जेक्षणस्त्वेक्षमाणः ॥',
        meaning: {
          en: 'Moved to compassion by your services, such as bringing word of Sītā and slaying the demons whom the boons of Brahmā and Śiva had made unkillable, Mukunda, who was named Rāma, embraced you in his arms. He placed his blessed, incomparable palm on your head, granting you the position of Brahmā that is so hard to attain, and gazed at you again and again with lotus eyes blossoming with deep love.',
          kn: 'ಸೀತಾದೇವಿಯ ಸಂದೇಶವನ್ನು ತಂದದ್ದು, ಬ್ರಹ್ಮ-ರುದ್ರರ ವರಗಳಿಂದ ಅವಧ್ಯರಾಗಿದ್ದ ರಾಕ್ಷಸರನ್ನು ಸಂಹರಿಸಿದ್ದು ಮೊದಲಾದ ನಿಮ್ಮ ಸೇವೆಗಳಿಂದ ದಯೆಯಿಂದ ಕರಗಿದ, ರಾಮನೆಂಬ ಹೆಸರಿನ ಮುಕುಂದನು ನಿಮ್ಮನ್ನು ತೋಳುಗಳಿಂದ ಅಪ್ಪಿಕೊಂಡನು. ಪಡೆಯಲು ಅತಿ ಕಷ್ಟವಾದ ಬ್ರಹ್ಮಪದವಿಗಾಗಿ ತನ್ನ ಅನುಪಮವಾದ, ಪವಿತ್ರವಾದ ಅಂಗೈಯನ್ನು ನಿಮ್ಮ ತಲೆಯ ಮೇಲಿಟ್ಟು ಅನುಗ್ರಹಿಸಿದನು; ಅಪಾರ ಪ್ರೇಮದಿಂದ ಅರಳಿದ ಕಮಲನಯನಗಳಿಂದ ನಿಮ್ಮನ್ನು ಮತ್ತೆ ಮತ್ತೆ ನೋಡಿದನು.',
        },
      },
      {
        n: 22,
        text: 'जघ्ने निघ्नेन विघ्नो बहुलबलबकध्वंसनाद्येन शोचत्\nविप्रानुक्रोशपाशैरसुविधृतिसुखस्यैकचक्राजनानाम् ।\nतस्मै ते देव कुर्मः कुरुकुलपतये कर्मणा च प्रणामान्\nकिर्मीरं दुर्मतीनां प्रथममथ च यो नर्मणा निर्ममाथ ॥',
        meaning: {
          en: 'Bound by the cords of compassion for a grieving brahmin, you slew the mighty demon Baka and others, and so removed the threat to the lives and happiness of the people of Ekacakrā. O God, lord of the Kuru line, who also crushed the wicked Kirmīra as if in sport, we bow to you in word and in deed.',
          kn: 'ದುಃಖಿತನಾದ ಬ್ರಾಹ್ಮಣನ ಮೇಲಿನ ಕರುಣೆಯ ಬಂಧನಕ್ಕೆ ಒಳಗಾಗಿ, ಮಹಾಬಲಶಾಲಿಯಾದ ಬಕಾಸುರನನ್ನೂ ಇತರರನ್ನೂ ಸಂಹರಿಸಿ, ಏಕಚಕ್ರಾನಗರದ ಜನರ ಪ್ರಾಣಕ್ಕೂ ಸುಖಕ್ಕೂ ಇದ್ದ ವಿಘ್ನವನ್ನು ನೀವು ನಿವಾರಿಸಿದಿರಿ. ದುಷ್ಟಬುದ್ಧಿಯ ಕಿರ್ಮೀರನನ್ನು ಆಟವಾಡುವಂತೆ ಹೊಸಕಿಹಾಕಿದ, ಕುರುಕುಲಕ್ಕೆ ಒಡೆಯರಾದ ದೇವರೇ, ನಿಮಗೆ ಮಾತಿನಿಂದಲೂ ಕೃತಿಯಿಂದಲೂ ನಮಸ್ಕರಿಸುತ್ತೇವೆ.',
        },
      },
      {
        n: 23,
        text: 'निर्मृद्नन्नत्ययत्नं विजरवर जरासन्धकायास्थिसन्धीन्\nयुद्धे त्वं स्वध्वरे वा पशुमिव दमयन् विष्णुपक्षद्विडीशम् ।\nयावत् प्रत्यक्षभूतं निखिलमखभुजं तर्पयामासिथासौ\nतावत्याऽयोजि तृप्त्या किमु वद भगवन् राजसूयाश्वमेधे ॥',
        meaning: {
          en: 'O best of the ageless, in battle you crushed with hardly any effort the joints of Jarāsandha\'s bones, subduing that chief of Viṣṇu\'s enemies like the victim in a sacred offering. Tell us, O Lord: did even the Rājasūya and Aśvamedha sacrifices give all the gods who receive sacrificial offerings as much satisfaction as this deed, which they enjoyed as if it were before their eyes?',
          kn: 'ಮುಪ್ಪಿಲ್ಲದವರಲ್ಲಿ ಶ್ರೇಷ್ಠರೇ, ಯುದ್ಧದಲ್ಲಿ ನೀವು ಯಾವ ಪ್ರಯತ್ನವೂ ಇಲ್ಲದೆ ಜರಾಸಂಧನ ದೇಹದ ಮೂಳೆಗಳ ಕೀಲುಗಳನ್ನು ಜಜ್ಜಿ, ಶ್ರೀವಿಷ್ಣುವಿನ ವೈರಿಗಳ ನಾಯಕನಾದ ಅವನನ್ನು ಯಜ್ಞದ ಪಶುವಿನಂತೆ ಅಡಗಿಸಿದಿರಿ. ಇದರಿಂದ ಯಜ್ಞಭೋಕ್ತರಾದ ಸಮಸ್ತ ದೇವತೆಗಳು ಕಣ್ಣಿಗೆ ಕಾಣುವಂತೆ ಎಷ್ಟು ತೃಪ್ತರಾದರೋ, ಅಷ್ಟು ತೃಪ್ತಿ ರಾಜಸೂಯ, ಅಶ್ವಮೇಧ ಯಾಗಗಳಲ್ಲಾದರೂ ದೊರೆಯಿತೇ? ಪ್ರಭುಗಳೇ, ನೀವೇ ಹೇಳಿ.',
        },
      },
      {
        n: 24,
        text: 'क्ष्वेलाक्षीणाट्टहासं तव रणमरिहन्नुद्गदोद्दामबाहो\nबह्वक्षौहिण्यनीकक्षपणसुनिपुणं यस्य सर्वोत्तमस्य ।\nशुश्रूषार्थं चकर्थ स्वयमयमथ संवक्तुमानन्दतीर्थ-\nश्रीमन्नामन् समर्थस्त्वमपि हि युवयोः पादपद्मं प्रपद्ये ॥',
        meaning: {
          en: 'O slayer of foes, raising the mace in your mighty arms, you fought a battle full of thunderous roars and laughter that destroyed many akṣauhiṇī armies, and you did it as service to Him, the Supreme, Śrī Kṛṣṇa. Only He, and you yourself, O Śrīmad Ānandatīrtha, are able to describe it fully. I take refuge at the lotus feet of you both.',
          kn: 'ಶತ್ರುಸಂಹಾರಕರೇ, ಗದೆಯನ್ನೆತ್ತಿದ ಬಲಿಷ್ಠ ಭುಜಗಳುಳ್ಳವರೇ, ಸಿಂಹನಾದ ಮತ್ತು ಅಟ್ಟಹಾಸಗಳಿಂದ ತುಂಬಿದ, ಅನೇಕ ಅಕ್ಷೌಹಿಣಿ ಸೇನೆಗಳನ್ನು ನಾಶಮಾಡಿದ ಆ ಯುದ್ಧವನ್ನು ನೀವು ಸರ್ವೋತ್ತಮನಾದ ಶ್ರೀಕೃಷ್ಣನ ಸೇವೆಗಾಗಿಯೇ ಮಾಡಿದಿರಿ. ಅದನ್ನು ಪೂರ್ಣವಾಗಿ ವರ್ಣಿಸಲು ಶ್ರೀಕೃಷ್ಣನೂ, ಶ್ರೀಮದಾನಂದತೀರ್ಥರೇ, ನೀವೂ ಮಾತ್ರ ಸಮರ್ಥರು. ನಿಮ್ಮಿಬ್ಬರ ಪಾದಕಮಲಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
        },
      },
      {
        n: 25,
        text: 'द्रुह्यन्तीं हृद्रुहं मां द्रुतमनिलबलाद्द्रावयन्तीमविद्या-\nनिद्रां विद्राव्य सद्योरचनपटुमथाऽपाद्य विद्यासमुद्र ।\nवाग्देवी सा सुविद्याद्रविणदविदिता द्रौपदी रुद्रपत्न्यात्\nद्युद्रिक्ता द्रागभद्राद्रहयतु दयिता पूर्वभीमाज्ञया ते ॥',
        meaning: {
          en: 'O ocean of learning, O Anila, by your strength quickly drive away the sleep of ignorance that harms me and keeps me wandering, and make me able to compose (your praise) at once. And may Vāgdevī (Bhāratī), your beloved, renowned as the giver of the wealth of true knowledge, who was born as Draupadī and who stands above Rudra\'s consort in heaven, at the command of you who were Bhīma, swiftly free me from all that is inauspicious.',
          kn: 'ವಿದ್ಯಾಸಮುದ್ರರೇ, ಅನಿಲದೇವರೇ, ನನಗೆ ಕೇಡುಮಾಡುತ್ತಾ ನನ್ನನ್ನು ಅಲೆದಾಡಿಸುತ್ತಿರುವ ಅಜ್ಞಾನವೆಂಬ ನಿದ್ರೆಯನ್ನು ನಿಮ್ಮ ಬಲದಿಂದ ಬೇಗನೆ ಓಡಿಸಿ, ತಕ್ಷಣವೇ ಸ್ತೋತ್ರರಚನೆ ಮಾಡುವ ಸಾಮರ್ಥ್ಯವನ್ನು ನನಗೆ ಕೊಡಿ. ಸದ್ವಿದ್ಯೆಯೆಂಬ ಸಂಪತ್ತನ್ನು ಕೊಡುವವಳೆಂದು ಪ್ರಸಿದ್ಧಳಾದ, ದ್ರೌಪದಿಯಾಗಿ ಅವತರಿಸಿದ, ಸ್ವರ್ಗದಲ್ಲಿ ರುದ್ರಪತ್ನಿಗಿಂತಲೂ ಶ್ರೇಷ್ಠಳಾದ ನಿಮ್ಮ ಪ್ರಿಯಪತ್ನಿ ಭಾರತೀದೇವಿಯು, ಭೀಮಸೇನರಾಗಿದ್ದ ನಿಮ್ಮ ಆಜ್ಞೆಯಂತೆ, ನನ್ನನ್ನು ಬೇಗನೆ ಅಮಂಗಳದಿಂದ ಪಾರುಮಾಡಲಿ.',
        },
      },
      {
        n: 26,
        text: 'याभ्यां शुश्रूषुरासीः कुरुकुलजनने क्षत्रविप्रोदिताभ्यां\nब्रह्मभ्यां बृंहिताभ्यां चितिसुखवपुषा कृष्णनामास्पदाभ्याम् ।\nनिर्भेदाभ्यां विशेषाद्द्विवचनविषयाभ्यामुभाभ्याममूभ्यां\nतुभ्यं च क्षेमदेभ्यः सरसिजविलसल्लोचनेभ्यो नमोऽस्तु ॥',
        meaning: {
          en: 'When you were born in the Kuru line, you served two forms of the Supreme Brahman who both bear the name Kṛṣṇa: one who appeared among the Kṣatriyas (Śrī Kṛṣṇa) and one who appeared among the brāhmaṇas (Kṛṣṇa Dvaipāyana Vedavyāsa). Their bodies are knowledge and bliss, they are full in every way, and there is no difference at all between them; only by a special distinction are they spoken of as two. Salutations to them both and to you: to all three, givers of welfare, with eyes as lovely as lotuses.',
          kn: 'ಕುರುವಂಶದಲ್ಲಿ ಜನಿಸಿದಾಗ ನೀವು ‘ಕೃಷ್ಣ’ ಎಂಬ ಹೆಸರನ್ನೇ ಹೊಂದಿದ ಪರಬ್ರಹ್ಮನ ಎರಡು ರೂಪಗಳನ್ನು ಸೇವಿಸಿದಿರಿ — ಕ್ಷತ್ರಿಯರಲ್ಲಿ ಅವತರಿಸಿದ ಶ್ರೀಕೃಷ್ಣನನ್ನೂ, ಬ್ರಾಹ್ಮಣರಲ್ಲಿ ಅವತರಿಸಿದ ಕೃಷ್ಣದ್ವೈಪಾಯನ ಶ್ರೀವೇದವ್ಯಾಸದೇವರನ್ನೂ. ಜ್ಞಾನಾನಂದಮಯ ದೇಹವುಳ್ಳ, ಪರಿಪೂರ್ಣರಾದ ಅವರಿಬ್ಬರಲ್ಲಿ ಯಾವ ಭೇದವೂ ಇಲ್ಲ; ವಿಶೇಷದಿಂದ ಮಾತ್ರ ಅವರನ್ನು ‘ಇಬ್ಬರು’ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ. ಆ ಇಬ್ಬರಿಗೂ ನಿಮಗೂ — ಕ್ಷೇಮವನ್ನು ಕೊಡುವ, ಕಮಲದಂತೆ ಶೋಭಿಸುವ ಕಣ್ಣುಗಳುಳ್ಳ ಮೂವರಿಗೂ — ನಮಸ್ಕಾರ.',
        },
      },
      {
        n: 27,
        text: 'गच्छन् सौगन्धिकार्थं पथि स हनुमतः पुच्छमच्छस्य भीमः\nप्रोद्धर्तुं नाशकत् स त्वमुमुरुवपुषा भीषयामास चेति ।\nपूर्णज्ञानौजसोस्ते गुरुतमवपुषोः श्रीमदानन्दतीर्थ\nक्रीडामात्रं तदेतत्प्रमदद सुधियां मोहक द्वेषभाजाम् ॥',
        meaning: {
          en: 'It is told that Bhīma, going in search of the Saugandhika flower, could not lift the tail of Hanumān lying across his path, and that Hanumān frightened him by showing his vast form. But for you, O Śrīmad Ānandatīrtha, who in both those mighty forms are full of knowledge and strength, this was mere play: it delights the wise and deludes those who bear hatred.',
          kn: 'ಸೌಗಂಧಿಕಾ ಪುಷ್ಪಕ್ಕಾಗಿ ಹೋಗುತ್ತಿದ್ದ ಭೀಮನು ದಾರಿಯಲ್ಲಿದ್ದ ಹನುಮಂತನ ಬಾಲವನ್ನು ಎತ್ತಲಾರದೆ ಹೋದನು, ಹನುಮಂತನು ತನ್ನ ಬೃಹತ್ ರೂಪವನ್ನು ತೋರಿ ಅವನನ್ನು ಹೆದರಿಸಿದನು — ಎಂದು ಕಥೆ ಹೇಳುತ್ತದೆ. ಆದರೆ ಶ್ರೀಮದಾನಂದತೀರ್ಥರೇ, ಆ ಎರಡೂ ಮಹಾರೂಪಗಳಲ್ಲಿ ಪೂರ್ಣಜ್ಞಾನ ಮತ್ತು ಪೂರ್ಣಬಲವುಳ್ಳ ನಿಮಗೆ ಇದು ಕೇವಲ ಒಂದು ಆಟ; ಇದು ಸಜ್ಜನರಿಗೆ ಆನಂದವನ್ನೂ ದ್ವೇಷಿಗಳಿಗೆ ಮೋಹವನ್ನೂ ಉಂಟುಮಾಡುತ್ತದೆ.',
        },
      },
      {
        n: 28,
        text: 'बह्वीः कोटीरटीकः कुटिलकटुमतीनुत्कटाटोपकोपान्\nद्राक् च त्वं सत्वरत्वाच्छरणद गदया पोथयामासिथारीन् ।\nउन्मथ्यातथ्यमिथ्यात्ववचनवचनानुत्पथस्थांस्तथाऽन्यान्\nप्रायच्छः स्वप्रियायै प्रियतम कुसुमं प्राण तस्मै नमस्ते ॥',
        meaning: {
          en: 'O giver of refuge, with your mace you swiftly struck down many crores of enemies, crooked and harsh in mind, swollen with fierce pride and anger. In the same way you crushed those others who stray from the right path and proclaim the false doctrine that the world is unreal. O dearest Prāṇa, who brought the flower to your beloved (Draupadī), salutations to you.',
          kn: 'ಶರಣು ಬಂದವರಿಗೆ ಆಶ್ರಯ ಕೊಡುವವರೇ, ಕುಟಿಲವೂ ಕಟುವೂ ಆದ ಬುದ್ಧಿಯುಳ್ಳ, ಉಗ್ರವಾದ ಗರ್ವ-ಕೋಪಗಳಿಂದ ಕೂಡಿದ ಕೋಟಿಗಟ್ಟಲೆ ಶತ್ರುಗಳನ್ನು ನೀವು ಗದೆಯಿಂದ ಕ್ಷಣಮಾತ್ರದಲ್ಲಿ ಬಡಿದು ಉರುಳಿಸಿದಿರಿ. ಹಾಗೆಯೇ ಸನ್ಮಾರ್ಗವನ್ನು ಬಿಟ್ಟು ‘ಜಗತ್ತು ಮಿಥ್ಯೆ’ ಎಂಬ ಸುಳ್ಳು ವಾದವನ್ನು ಹೇಳುವ ಇತರರನ್ನೂ ಮಣಿಸಿದಿರಿ. ನಿಮ್ಮ ಪ್ರಿಯಪತ್ನಿಗೆ (ದ್ರೌಪದಿಗೆ) ಹೂವನ್ನು ತಂದುಕೊಟ್ಟ ಪ್ರಿಯತಮ ಪ್ರಾಣದೇವರೇ, ನಿಮಗೆ ನಮಸ್ಕಾರ.',
        },
      },
      {
        n: 29,
        text: 'देहादुत्क्रामितानामधिपतिरसतामक्रमाद्वक्रबुद्धिः\nक्रुद्धः क्रोधैकवश्यः कृमिरिव मणिमान् दुष्कृती निष्क्रियार्थम् ।\nचक्रे भूचक्रमेत्य क्रकचमिव सतां चेतसः कष्टशास्त्रं\nदुस्तर्कं चक्रपाणेर्गुणगणविरहं जीवतां चाधिकृत्य ॥',
        meaning: {
          en: 'Maṇimān, leader of the wicked who had been slain in battle, crooked in mind and wholly ruled by anger, came to the earth like a worm, full of evil deeds. Like a saw cutting into the hearts of the good, he produced a painful doctrine of false reasoning, teaching that Hari, the bearer of the discus, has no qualities, and spreading wrong ideas about living beings.',
          kn: 'ಯುದ್ಧದಲ್ಲಿ ದೇಹವನ್ನು ಕಳೆದುಕೊಂಡ ದುಷ್ಟರ ನಾಯಕನಾದ, ವಕ್ರಬುದ್ಧಿಯ, ಕೋಪಕ್ಕೇ ವಶನಾದ ಪಾಪಿ ಮಣಿಮಂತನು ಹುಳುವಿನಂತೆ ಭೂಮಿಗೆ ಬಂದನು. ಸಜ್ಜನರ ಮನಸ್ಸನ್ನು ಗರಗಸದಂತೆ ಕೊಯ್ಯುವ ಕಷ್ಟಕರವಾದ ಶಾಸ್ತ್ರವನ್ನು — ಚಕ್ರಪಾಣಿಯಾದ ಶ್ರೀಹರಿಗೆ ಗುಣಗಳೇ ಇಲ್ಲವೆಂದು ಹೇಳುವ, ಜೀವರ ವಿಷಯದಲ್ಲಿಯೂ ತಪ್ಪಾದ ಕುತರ್ಕವನ್ನು — ಅವನು ರಚಿಸಿದನು.',
        },
      },
      {
        n: 30,
        text: 'तद्दुष्प्रेक्षानुसारात् कतिपयकुनरैरादृतोऽन्यैर्विसृष्टो\nब्रह्माऽहं निर्गुणोऽहं वितथमिदमिति ह्येष पाषण्डवादः ।\nतद्युक्त्याभासजालप्रसरविषतरूद्दाहदक्षप्रमाण-\nज्वालामालाधरोऽग्निः पवन विजयते तेऽवतारस्तृतीयः ॥',
        meaning: {
          en: 'Following his wrong view, this heretical doctrine, \'I am Brahman, I am without attributes, this world is unreal\', was accepted by a few misguided people and rejected by others. O Pavana, your third avatāra (Madhvācārya) is victorious: a fire wreathed in flames of valid proof (pramāṇa), able to burn down the poison-tree of that doctrine, which spreads as a net of mere semblances of reasoning.',
          kn: 'ಅವನ ಕೆಟ್ಟ ದೃಷ್ಟಿಯನ್ನು ಅನುಸರಿಸಿ ಹುಟ್ಟಿದ ‘ನಾನೇ ಬ್ರಹ್ಮ, ನಾನು ನಿರ್ಗುಣ, ಈ ಜಗತ್ತು ಮಿಥ್ಯೆ’ ಎಂಬ ಪಾಷಂಡವಾದವನ್ನು ಕೆಲವು ಕುಜನರು ಆದರಿಸಿದರು, ಇತರರು ತಿರಸ್ಕರಿಸಿದರು. ಪವನದೇವರೇ, ತರ್ಕದಂತೆ ಕಾಣುವ ಹುಸಿವಾದಗಳ ಜಾಲವಾಗಿ ಹರಡಿದ ಆ ವಿಷವೃಕ್ಷವನ್ನು ಸುಟ್ಟುಹಾಕಬಲ್ಲ, ಪ್ರಮಾಣಗಳೆಂಬ ಜ್ವಾಲೆಗಳ ಮಾಲೆಯನ್ನು ಧರಿಸಿದ ಅಗ್ನಿಯಂತಿರುವ ನಿಮ್ಮ ಮೂರನೆಯ ಅವತಾರವು (ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು) ವಿಜಯಶಾಲಿಯಾಗಿದೆ.',
        },
      },
      {
        n: 31,
        text: 'आक्रोशन्तो निराशा भयभरविवशस्वाशयाश्छिन्नदर्पा\nवाशन्तो देशनाशस्त्विति बत कुधियां नाशमाशादशाशु ।\nधावन्तोऽश्लीलशीला वितथशपथशापाशिवाः शान्तशौर्याः\nत्वद्व्याख्यासिंहनादे सपदि ददृशिरे मायिगोमायवस्ते ॥',
        meaning: {
          en: 'When your commentary resounded like a lion\'s roar, the jackals of the māyā doctrine were at once seen crying out in despair, overcome by fear, their pride broken, wailing \'our land is lost!\', as the ruin of the ill-minded spread swiftly through the ten directions. They fled, unseemly in conduct, uttering false oaths and evil curses, their courage gone.',
          kn: 'ನಿಮ್ಮ ವ್ಯಾಖ್ಯಾನವೆಂಬ ಸಿಂಹನಾದ ಮೊಳಗಿದ ತಕ್ಷಣ ಮಾಯಾವಾದಿಗಳೆಂಬ ನರಿಗಳು ನಿರಾಶರಾಗಿ ಕೂಗಿಕೊಳ್ಳುತ್ತಾ, ಭಯದಿಂದ ಮನಸ್ಸು ಕಂಗೆಟ್ಟು, ಗರ್ವ ಮುರಿದು, ‘ಅಯ್ಯೋ, ನಮ್ಮ ನೆಲೆಯೇ ನಾಶವಾಯಿತು’ ಎಂದು ಊಳಿಡುತ್ತಿರುವುದು ಕಂಡುಬಂತು; ದುರ್ಬುದ್ಧಿಗಳ ನಾಶ ಹತ್ತು ದಿಕ್ಕುಗಳಿಗೂ ಬೇಗನೆ ಹಬ್ಬಿತು. ಅಸಭ್ಯ ನಡತೆಯ ಅವರು ಸುಳ್ಳು ಆಣೆಗಳನ್ನೂ ಅಮಂಗಳವಾದ ಶಾಪಗಳನ್ನೂ ಹಾಕುತ್ತಾ, ಶೌರ್ಯವನ್ನು ಕಳೆದುಕೊಂಡು ಓಡಿಹೋದರು.',
        },
      },
      {
        n: 32,
        text: 'त्रिष्वप्येवावतारेष्वरिभिरपघृणं हिंसितो निर्विकारः\nसर्वज्ञः सर्वशक्तिः सकलगुणगणापूर्णरूपप्रगल्भः ।\nस्वच्छः स्वच्छन्दमृत्युः सुखयसि सुजनं देव किं चित्रमत्र\nत्राता यस्य त्रिधामा जगदुत वशगं किङ्कराः शङ्कराद्याः ॥',
        meaning: {
          en: 'In all three avatāras enemies attacked you without mercy, yet you remained untouched: all-knowing, all-powerful, full of every excellence, pure, and dying only by your own will. O God, what wonder is it that you give happiness to the good, when Hari Himself is your protector, the whole world is under your control, and Śiva (Śaṅkara) and the other gods are your servants?',
          kn: 'ಮೂರೂ ಅವತಾರಗಳಲ್ಲಿ ಶತ್ರುಗಳು ನಿಮ್ಮನ್ನು ಕರುಣೆಯಿಲ್ಲದೆ ಹಿಂಸಿಸಲು ಯತ್ನಿಸಿದರೂ ನೀವು ಯಾವ ವಿಕಾರವೂ ಇಲ್ಲದೆ ಉಳಿದಿರಿ. ನೀವು ಸರ್ವಜ್ಞರು, ಸರ್ವಶಕ್ತರು, ಸಕಲಗುಣಪೂರ್ಣರು, ನಿರ್ಮಲರು, ಸ್ವೇಚ್ಛೆಯಿಂದಲ್ಲದೆ ಮರಣವಿಲ್ಲದವರು. ಶ್ರೀಹರಿಯೇ ನಿಮ್ಮನ್ನು ಕಾಪಾಡುವವನು, ಜಗತ್ತೆಲ್ಲ ನಿಮ್ಮ ವಶದಲ್ಲಿದೆ, ರುದ್ರದೇವರೇ ಮೊದಲಾದ ದೇವತೆಗಳು ನಿಮ್ಮ ಕಿಂಕರರು; ಹೀಗಿರುವಾಗ, ದೇವರೇ, ನೀವು ಸಜ್ಜನರಿಗೆ ಸುಖ ಕೊಡುವುದರಲ್ಲಿ ಆಶ್ಚರ್ಯವೇನಿದೆ?',
        },
      },
      {
        n: 33,
        text: 'उद्यन्मन्दस्मितश्रीमृदुमधुमधुरालापपीयूषधारा-\nपूरासेकोपशान्तासुखसुजनमनोलोचनापीयमानम् ।\nसन्द्रक्ष्ये सुन्दरं सन्दुहदिह महदानन्दमानन्दतीर्थ\nश्रीमद्वक्त्रेन्दुबिम्बं दुरितनुदुदितं नित्यदाऽहं कदा नु ॥',
        meaning: {
          en: 'When shall I behold, and behold always, the beautiful moon-like face of Śrīmad Ānandatīrtha, which grants great bliss even here and dispels all sin? It glows with a gentle smile, and the minds and eyes of good people, their sorrows soothed by the flowing nectar of his soft, sweet speech, drink in its beauty.',
          kn: 'ಮೃದುವೂ ಮಧುರವೂ ಆದ ಮಾತುಗಳೆಂಬ ಅಮೃತಧಾರೆಯ ಸಿಂಚನದಿಂದ ದುಃಖ ಶಮನಗೊಂಡ ಸಜ್ಜನರ ಮನಸ್ಸು ಮತ್ತು ಕಣ್ಣುಗಳು ಸವಿಯುವ, ಮಂದಹಾಸದ ಶೋಭೆಯಿಂದ ಹೊಳೆಯುವ, ಪಾಪಗಳನ್ನು ಕಳೆಯುವ, ಇಲ್ಲಿಯೇ ಮಹದಾನಂದವನ್ನು ಕೊಡುವ ಶ್ರೀಮದಾನಂದತೀರ್ಥರ ಸುಂದರವಾದ ಚಂದ್ರನಂತಹ ಮುಖವನ್ನು ನಾನು ಯಾವಾಗ ನಿತ್ಯವೂ ನೋಡುವೆನೋ!',
        },
      },
      {
        n: 34,
        text: 'प्राचीनाचीर्णपुण्योच्चयचतुरतराचारतश्चारुचित्तान्\nअत्युच्चां रोचयन्तीं श्रुतिचितवचनाञ्छ्रावकांश्चोद्यचञ्चून् ।\nव्याख्यामुत्खातदुःखां चिरमुचितमहाचार्य चिन्तारतांस्ते\nचित्रां सच्छास्त्रकर्तश्चरणपरिचरान् श्रावयास्मांश्च किञ्चित् ॥',
        meaning: {
          en: 'O great Ācārya, author of true śāstras, you teach your lofty and wonderful commentary, which removes sorrow, to worthy listeners: pure-hearted through good conduct earned by merit in past lives, their speech rich with the Vedas, keen in raising questions, and long devoted to reflection. Let us too, who serve at your feet, hear at least a little of it.',
          kn: 'ಸಚ್ಛಾಸ್ತ್ರಗಳನ್ನು ರಚಿಸಿದ ಮಹಾಚಾರ್ಯರೇ, ಹಿಂದಿನ ಜನ್ಮಗಳ ಪುಣ್ಯದಿಂದ ಬಂದ ಸದಾಚಾರದಿಂದ ಶುದ್ಧಮನಸ್ಸುಳ್ಳ, ವೇದದಿಂದ ಸಮೃದ್ಧವಾದ ಮಾತುಗಳುಳ್ಳ, ಪ್ರಶ್ನೆ ಕೇಳುವುದರಲ್ಲಿ ಚತುರರಾದ, ದೀರ್ಘಕಾಲ ತತ್ತ್ವಚಿಂತನೆಯಲ್ಲಿ ನಿರತರಾದ ಶಿಷ್ಯರಿಗೆ ನೀವು ದುಃಖವನ್ನು ಕಳೆಯುವ ಉನ್ನತವೂ ಅದ್ಭುತವೂ ಆದ ವ್ಯಾಖ್ಯಾನವನ್ನು ಕೇಳಿಸುತ್ತೀರಿ. ನಿಮ್ಮ ಪಾದಸೇವಕರಾದ ನಮಗೂ ಅದರಲ್ಲಿ ಸ್ವಲ್ಪವಾದರೂ ಕೇಳಿಸಿರಿ.',
        },
      },
      {
        n: 35,
        text: 'पीठे रत्नोपक्लृप्ते रुचिररुचिमणिज्योतिषा सन्निषण्णं\nब्रह्माणं भाविनं त्वां ज्वलति निजपदे वैदिकाद्या हि विद्याः ।\nसेवन्ते मूर्तिमत्यः सुचरित चरितं भाति गन्धर्वगीतं\nप्रत्येकं देवसंसत्स्वपि तव भगवन् नर्तितद्योवधूषु ॥',
        meaning: {
          en: 'O Lord, in your own radiant abode you, the future Brahmā, sit on a throne set with gems amid the glow of brilliant jewels, and the Vedas and the other branches of knowledge, taking embodied form, wait upon you. O you of pure conduct, your deeds, sung by the Gandharvas, shine in every assembly of the gods, where celestial maidens dance.',
          kn: 'ಸ್ವಾಮೀ, ಮುಂದೆ ಬ್ರಹ್ಮರಾಗಲಿರುವ ನೀವು ತೇಜಸ್ಸಿನಿಂದ ಬೆಳಗುವ ನಿಮ್ಮ ಸ್ಥಾನದಲ್ಲಿ, ಹೊಳೆಯುವ ಮಣಿಗಳ ಕಾಂತಿಯ ನಡುವೆ, ರತ್ನಖಚಿತ ಸಿಂಹಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವಿರಿ; ವೇದಾದಿ ವಿದ್ಯೆಗಳು ರೂಪತಾಳಿ ನಿಮ್ಮನ್ನು ಸೇವಿಸುತ್ತವೆ. ಸಚ್ಚರಿತರೇ, ಗಂಧರ್ವರು ಹಾಡುವ ನಿಮ್ಮ ಚರಿತ್ರೆಯು, ಅಪ್ಸರೆಯರು ನರ್ತಿಸುವ ಪ್ರತಿಯೊಂದು ದೇವಸಭೆಯಲ್ಲಿಯೂ ಬೆಳಗುತ್ತದೆ.',
        },
      },
      {
        n: 36,
        text: 'सानुक्रोशैरजस्रं जनिमृतिनिरयाद्यूर्मिमालाविलेऽस्मिन्\nसंसाराब्धौ निमग्नान् शरणमशरणानिच्छतो वीक्ष्य जन्तून् ।\nयुष्माभिः प्रार्थितः सन् जलनिधिशयनः सत्यवत्यां महर्षेः\nव्यक्तश्चिन्मात्रमूर्तिर्न खलु भगवतः प्राकृतो जातु देहः ॥',
        meaning: {
          en: 'Seeing beings sunk helpless in this ocean of saṃsāra, churned by waves of birth, death, hell and more, yet longing for refuge, you and the other gods, ever compassionate, prayed to the Lord. In answer to your prayer, He who rests upon the ocean appeared through Satyavatī as the son of the great sage (Parāśara), as Vedavyāsa. His form is pure consciousness; the Lord never has a material body.',
          kn: 'ಹುಟ್ಟು, ಸಾವು, ನರಕ ಮೊದಲಾದ ಅಲೆಗಳಿಂದ ಕದಡಿದ ಈ ಸಂಸಾರಸಾಗರದಲ್ಲಿ ಮುಳುಗಿ, ಆಶ್ರಯವಿಲ್ಲದೆ ಆಶ್ರಯವನ್ನು ಬಯಸುತ್ತಿರುವ ಜೀವಿಗಳನ್ನು ಕಂಡು, ಸದಾ ಕರುಣೆಯುಳ್ಳ ನೀವು ದೇವತೆಗಳೊಡನೆ ಪ್ರಾರ್ಥಿಸಿದಿರಿ. ಆ ಪ್ರಾರ್ಥನೆಗೆ ಒಲಿದು ಸಾಗರಶಯನನಾದ ಶ್ರೀಹರಿಯು ಸತ್ಯವತಿಯಲ್ಲಿ ಪರಾಶರಮಹರ್ಷಿಗಳ ಮಗನಾಗಿ, ಶ್ರೀವೇದವ್ಯಾಸದೇವರಾಗಿ ಅವತರಿಸಿದನು. ಅವನ ರೂಪ ಶುದ್ಧ ಜ್ಞಾನಮಯ; ಭಗವಂತನಿಗೆ ಎಂದಿಗೂ ಪ್ರಾಕೃತ ದೇಹವಿಲ್ಲ.',
        },
      },
      {
        n: 37,
        text: 'अस्तव्यस्तं समस्तश्रुतिगतमधमै रत्नपूगं यथान्धैः\nअर्थं लोकोपकृत्यै गुणगणनिलयः सूत्रयामास कृत्स्नम् ।\nयोऽसौ व्यासाभिधानस्तमहमहरहर्भक्तितस्त्वत्प्रसादात्\nसद्यो विद्योपलब्ध्यै गुरुतममगुरुं देवदेवं नमामि ॥',
        meaning: {
          en: 'The meaning of all the śrutis had been scattered and thrown into disorder by the unworthy, like a heap of gems in the hands of the blind. For the good of the world, the abode of all virtues, known as Vyāsa, set down that entire meaning in the Sūtras. So that true knowledge may dawn in me quickly by your grace, I bow day after day with devotion to Him, the greatest Guru, who has no guru, the God of gods.',
          kn: 'ಕುರುಡರ ಕೈಯಲ್ಲಿ ರತ್ನಗಳ ರಾಶಿ ಚೆಲ್ಲಾಪಿಲ್ಲಿಯಾಗುವಂತೆ, ಸಮಸ್ತ ವೇದಗಳ ಅರ್ಥವು ಅಧಮರಿಂದ ಅಸ್ತವ್ಯಸ್ತವಾಗಿತ್ತು. ಲೋಕೋಪಕಾರಕ್ಕಾಗಿ ಸಕಲ ಗುಣಗಳ ನೆಲೆಯಾದ, ವ್ಯಾಸನೆಂಬ ಹೆಸರಿನ ಭಗವಂತನು ಆ ಸಂಪೂರ್ಣ ಅರ್ಥವನ್ನು ಸೂತ್ರಗಳಲ್ಲಿ ಹಿಡಿದಿಟ್ಟನು. ಗುರುಗಳಿಗೂ ಗುರುವಾದ, ತನಗೆ ಗುರುವಿಲ್ಲದ, ದೇವದೇವನಾದ ಆ ಶ್ರೀವೇದವ್ಯಾಸದೇವರಿಗೆ, ನಿಮ್ಮ ಅನುಗ್ರಹದಿಂದ ಬೇಗನೆ ಜ್ಞಾನ ದೊರೆಯಲೆಂದು, ದಿನದಿನವೂ ಭಕ್ತಿಯಿಂದ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
        },
      },
      {
        n: 38,
        text: 'आज्ञामन्यैरधार्यां शिरसि परिसरद्रश्मिकोटीरकोटौ\nकृष्णस्याक्लिष्टकर्मा दधदनुसरणादर्थितो देवसङ्घैः ।\nभूमावागत्य भूमन्नसुकरमकरोब्रह्मसूत्रस्य भाष्यं\nदुर्भाष्यं व्यस्य दस्योर्मणिमत उदितं वेद सद्युक्तिभिस्त्वम् ॥',
        meaning: {
          en: 'O great one of tireless deeds, you bore upon your crown, radiant with countless rays, the command of Kṛṣṇa which no one else could bear, and at the request of the hosts of gods you came down to earth. There you wrote the commentary on the Brahma-sūtras, a task hard to accomplish, and with the Vedas and sound reasoning you cast aside the false commentary put forth by the robber Maṇimān.',
          kn: 'ಆಯಾಸವಿಲ್ಲದೆ ಮಹತ್ಕಾರ್ಯಗಳನ್ನು ಮಾಡುವ ಮಹಾತ್ಮರೇ, ಬೇರೆ ಯಾರಿಂದಲೂ ಧರಿಸಲಾಗದ ಶ್ರೀಕೃಷ್ಣನ ಆಜ್ಞೆಯನ್ನು ಕಿರಣಗಳನ್ನು ಸೂಸುವ ನಿಮ್ಮ ಕಿರೀಟದ ಮೇಲೆ ಧರಿಸಿ, ದೇವತೆಗಳ ಪ್ರಾರ್ಥನೆಯಂತೆ ನೀವು ಭೂಮಿಗೆ ಬಂದಿರಿ. ಇಲ್ಲಿ ಮಾಡಲು ಅತಿ ಕಷ್ಟವಾದ ಬ್ರಹ್ಮಸೂತ್ರಭಾಷ್ಯವನ್ನು ರಚಿಸಿದಿರಿ; ಕಳ್ಳನಾದ ಮಣಿಮಂತನು ಹೇಳಿದ ದುರ್ಭಾಷ್ಯವನ್ನು ವೇದಗಳಿಂದಲೂ ಸದ್ಯುಕ್ತಿಗಳಿಂದಲೂ ಖಂಡಿಸಿದಿರಿ.',
        },
      },
      {
        n: 39,
        text: 'भूत्वा क्षेत्रे विशुद्धे द्विजगणनिलये रूप्यपीठाभिधाने\nतत्रापि ब्रह्मजातिस्त्रिभुवनविशदे मध्यगेहाख्यगेहे ।\nपारिव्राज्याधिराजः पुनरपि बदरीं प्राप्य कृष्णं च नत्वा\nकृत्वा भाष्याणि सम्यग् व्यतनुत च भवान् भारतार्थप्रकाशम् ॥',
        meaning: {
          en: 'You were born in the pure holy land called Rūpyapīṭha (Rajatapīṭha, the Udupi region), home of many brāhmaṇas, as a brāhmaṇa in the family known as Madhyageha, renowned in the three worlds. Becoming the king of sannyāsins, you went once more to Badarī and bowed to Kṛṣṇa (Vedavyāsa); and having rightly composed the commentaries, you also wrote the work that brings to light the meaning of the Mahābhārata.',
          kn: 'ಬ್ರಾಹ್ಮಣರ ನೆಲೆಯಾದ, ರಜತಪೀಠವೆಂದು ಹೆಸರಾದ ಪವಿತ್ರ ಕ್ಷೇತ್ರದಲ್ಲಿ (ಉಡುಪಿಯ ಪ್ರದೇಶದಲ್ಲಿ), ಮೂರು ಲೋಕಗಳಲ್ಲೂ ಪ್ರಸಿದ್ಧವಾದ ‘ಮಧ್ಯಗೇಹ’ರ ಮನೆತನದಲ್ಲಿ ನೀವು ಬ್ರಾಹ್ಮಣರಾಗಿ ಜನಿಸಿದಿರಿ. ಯತಿರಾಜರಾಗಿ, ಮತ್ತೆ ಬದರಿಗೆ ಹೋಗಿ ಶ್ರೀವೇದವ್ಯಾಸದೇವರಿಗೆ ನಮಸ್ಕರಿಸಿ, ಭಾಷ್ಯಗಳನ್ನು ಸರಿಯಾಗಿ ರಚಿಸಿದಿರಿ; ಮಹಾಭಾರತದ ಅರ್ಥವನ್ನು ಬೆಳಗಿಸುವ ಗ್ರಂಥವನ್ನೂ ರಚಿಸಿದಿರಿ.',
        },
      },
      {
        n: 40,
        text: 'वन्दे तं त्वा सुपूर्णप्रमतिमनुदिनासेवितं देववृन्दैः\nवन्दे वन्दारुमीशे श्रिय उत नियतं श्रीमदानन्दतीर्थम् ।\nवन्दे मन्दाकिनीसत्सरिदमलजलासेकसाधिक्यसङ्गं\nवन्देऽहं देव भक्त्या भवभयदहनं सज्जनान्मोदयन्तम् ॥',
        meaning: {
          en: 'I salute you, of perfect wisdom (Pūrṇaprajña), served daily by hosts of gods. I salute Śrīmad Ānandatīrtha, who ever bows at the feet of the Lord of Śrī. I salute him whose company purifies more than bathing in the clear waters of the Gaṅgā and the other sacred rivers. With devotion I salute you, O God, who burn away the fear of saṃsāra and bring joy to the good.',
          kn: 'ದೇವತೆಗಳ ಸಮೂಹದಿಂದ ಪ್ರತಿದಿನವೂ ಸೇವಿತರಾದ, ಪರಿಪೂರ್ಣ ಪ್ರಜ್ಞೆಯುಳ್ಳ (ಪೂರ್ಣಪ್ರಜ್ಞರಾದ) ನಿಮಗೆ ವಂದಿಸುತ್ತೇನೆ. ಲಕ್ಷ್ಮೀಪತಿಯಾದ ಶ್ರೀಹರಿಗೆ ಸದಾ ನಮಸ್ಕರಿಸುವ ಶ್ರೀಮದಾನಂದತೀರ್ಥರಿಗೆ ವಂದಿಸುತ್ತೇನೆ. ಗಂಗೆ ಮೊದಲಾದ ಪುಣ್ಯನದಿಗಳ ನಿರ್ಮಲ ಜಲದಲ್ಲಿ ಸ್ನಾನ ಮಾಡುವುದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚು ಪಾವನವಾದ ಸಂಗವುಳ್ಳವರಿಗೆ ವಂದಿಸುತ್ತೇನೆ. ದೇವರೇ, ಸಂಸಾರಭಯವನ್ನು ಸುಡುವ, ಸಜ್ಜನರಿಗೆ ಆನಂದ ಕೊಡುವ ನಿಮಗೆ ಭಕ್ತಿಯಿಂದ ವಂದಿಸುತ್ತೇನೆ.',
        },
      },
      {
        n: 41,
        text: 'सुब्रह्मण्याख्यसूरेः सुत इति सुभृशं केशवानन्दतीर्थ-\nश्रीमत्पादाब्जभक्तः स्तुतिमकृत हरेर्वायुदेवस्य चास्य ।\nतत्पादार्चादरेण ग्रथितपदलसन्मालया त्वेतया ये\nसंराध्यामू नमन्ति प्रततमतिगुणा मुक्तिमेते व्रजन्ति ॥',
        meaning: {
          en: 'The son of the learned Subrahmaṇya (Trivikrama Paṇḍitācārya), deeply devoted to the lotus feet of Keśava and of Śrīmad Ānandatīrtha, composed this hymn to Hari and to Vāyudeva. Those who, eager to worship their feet, honour these two with this garland of well-woven words and bow to them, grow great in wisdom and virtue and attain liberation (mukti).',
          kn: 'ಸುಬ್ರಹ್ಮಣ್ಯ ಎಂಬ ವಿದ್ವಾಂಸರ ಮಗನಾದ, ಶ್ರೀಕೇಶವನ ಮತ್ತು ಶ್ರೀಮದಾನಂದತೀರ್ಥರ ಪಾದಕಮಲಗಳಲ್ಲಿ ಅಪಾರ ಭಕ್ತಿಯುಳ್ಳವರು (ತ್ರಿವಿಕ್ರಮ ಪಂಡಿತಾಚಾರ್ಯರು) ಶ್ರೀಹರಿಯ ಮತ್ತು ವಾಯುದೇವರ ಈ ಸ್ತುತಿಯನ್ನು ರಚಿಸಿದರು. ಅವರ ಪಾದಪೂಜೆಯ ಆಸಕ್ತಿಯಿಂದ, ಸುಂದರ ಪದಗಳಿಂದ ಹೆಣೆದ ಈ ಸ್ತೋತ್ರಮಾಲೆಯಿಂದ ಅವರಿಬ್ಬರನ್ನೂ ಆರಾಧಿಸಿ ನಮಸ್ಕರಿಸುವವರು ವಿಶಾಲವಾದ ಬುದ್ಧಿಯನ್ನೂ ಸದ್ಗುಣಗಳನ್ನೂ ಪಡೆದು ಮೋಕ್ಷವನ್ನು ಹೊಂದುತ್ತಾರೆ.',
        },
      },
      ],
    },
    {
      title: 'श्रीनरसिंहनखस्तुतिः',
      titleEn: 'Nakha Stuti (repeated)',
      note: 'The Nakha Stuti is recited again at the end.',
      verses: nakhaStuti(),
    },
  ],
};
