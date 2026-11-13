/**
 * Śrī Rāghavendra Stotram of Śrī Appaṇṇācārya.
 * Collated (Nov 2026) against stotranidhi.com and the two copies (Devanagari and
 * Kannada) on raocollectionsstotra.blogspot.com; no word changes were needed.
 * Verse division follows the sense-based grouping those copies share: 15 and 20
 * (and 26, 27 in the phala-śruti) are three-line ślokas, giving 31 verses plus
 * the colophon (32). Stotranidhi groups 20–31 as plain couplets instead.
 * Not yet checked against a printed Maṭha edition.
 */
import type { Mantra } from '../types';

export const raghavendraStotram: Mantra = {
  id: 'raghavendra-stotram',
  title: 'श्रीराघवेन्द्रस्तोत्रम्',
  titleEn: 'Sri Raghavendra Stotram',
  category: 'madhva',
  deity: 'Śrī Rāghavendra Tīrtha',
  source: 'Composed by Śrī Appaṇṇācārya, disciple of Śrī Rāghavendra Tīrtha',
  summary:
    'The celebrated hymn to Śrī Rāghavendra Tīrtha (Guru Rāyaru) of Mantrālaya, composed by his disciple Appaṇṇācārya. It praises the Guru\'s learning, devotion to Śrī Hari and compassion, and ends with a phala-śruti; it is followed by the short prayer "Pūjyāya Rāghavendrāya".',
  summaryKn:
    'ಮಂತ್ರಾಲಯದ ಶ್ರೀರಾಘವೇಂದ್ರತೀರ್ಥರನ್ನು (ಗುರುರಾಯರನ್ನು) ಕುರಿತು ಅವರ ಶಿಷ್ಯರಾದ ಶ್ರೀಅಪ್ಪಣ್ಣಾಚಾರ್ಯರು ರಚಿಸಿದ ಪ್ರಸಿದ್ಧ ಸ್ತೋತ್ರ. ಇದು ಗುರುಗಳ ವಿದ್ಯೆ, ಶ್ರೀಹರಿಭಕ್ತಿ ಮತ್ತು ಕರುಣೆಯನ್ನು ಕೊಂಡಾಡಿ ಫಲಶ್ರುತಿಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ; ನಂತರ “ಪೂಜ್ಯಾಯ ರಾಘವೇಂದ್ರಾಯ” ಎಂಬ ಚಿಕ್ಕ ಪ್ರಾರ್ಥನೆಯನ್ನು ಹೇಳುತ್ತಾರೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'स्तोत्रम्',
      titleEn: 'Stotram',
      verses: [
        {
          n: 1,
          text:
            'श्रीपूर्णबोधगुरुतीर्थपयोब्धिपारा\nकामारिमाक्षविषमाक्षशिरःस्पृशन्ती ।\nपूर्वोत्तरामिततरङ्गचरत्सुहंसा\nदेवालिसेवितपराङ्घ्रिपयोजलग्ना ॥',
          meaning: {
            en: 'Guru Rāghavendra\'s speech is like a sacred river that flows on to the ocean of the teaching of Śrī Pūrṇabodha (Madhvācārya). In its countless waves of objection and reply the wise move like noble swans, and, like the Gaṅgā, it clings to the lotus feet of the Supreme Lord, served by hosts of gods.',
            kn: 'ಗುರು ರಾಘವೇಂದ್ರರ ವಾಣಿಯು ಶ್ರೀಪೂರ್ಣಬೋಧರ (ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರ) ಶಾಸ್ತ್ರವೆಂಬ ಸಮುದ್ರವನ್ನು ಸೇರುವ ಪವಿತ್ರ ನದಿಯಂತಿದೆ. ಪೂರ್ವಪಕ್ಷ-ಉತ್ತರಪಕ್ಷಗಳೆಂಬ ಅದರ ಅಸಂಖ್ಯ ಅಲೆಗಳಲ್ಲಿ ಜ್ಞಾನಿಗಳು ಹಂಸಗಳಂತೆ ಸಂಚರಿಸುತ್ತಾರೆ; ಗಂಗೆಯಂತೆ ಅದು ದೇವತೆಗಳು ಸೇವಿಸುವ ಪರಮಾತ್ಮನ ಪಾದಕಮಲಗಳನ್ನು ಆಶ್ರಯಿಸಿದೆ.',
          },
        },
        {
          n: 2,
          text:
            'जीवेशभेदगुणपूर्तिजगत्सुसत्त्व-\nनीचोच्चभावमुखनक्रगणैः समेता ।\nदुर्वाद्यजापतिगिलैर्गुरुराघवेन्द्र-\nवाग्देवतासरिदमुं विमलीकरोतु ॥',
          meaning: {
            en: 'Its crocodiles are the great truths: the difference between the jīva and the Lord, the fullness of His qualities, the reality of the world, and the gradation of high and low; and they swallow the goat-like proponents of false doctrines. May this river, the speech of Guru Rāghavendra, purify me.',
            kn: 'ಜೀವ-ಈಶ್ವರರ ಭೇದ, ಭಗವಂತನ ಗುಣಪೂರ್ಣತೆ, ಜಗತ್ತಿನ ಸತ್ಯತ್ವ, ಉಚ್ಚ-ನೀಚ ತಾರತಮ್ಯ ಮೊದಲಾದ ತತ್ತ್ವಗಳೇ ಆ ನದಿಯಲ್ಲಿರುವ ಮೊಸಳೆಗಳು; ಅವು ಆಡುಗಳಂತಿರುವ ದುರ್ವಾದಿಗಳನ್ನು ನುಂಗಿಹಾಕುತ್ತವೆ. ಗುರು ರಾಘವೇಂದ್ರರ ವಾಣಿಯೆಂಬ ಈ ನದಿಯು ನನ್ನನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ.',
          },
        },
        {
          n: 3,
          text:
            'श्रीराघवेन्द्रः सकलप्रदाता\nस्वपादकञ्जद्वयभक्तिमद्भ्यः ।\nअघाद्रिसम्भेदनदृष्टिवज्रः\nक्षमासुरेन्द्रोऽवतु मां सदायम् ॥',
          meaning: {
            en: 'Śrī Rāghavendra grants everything to those devoted to his two lotus feet, and his glance is a thunderbolt that shatters mountains of sin. May he, foremost among brāhmaṇas, always protect me.',
            kn: 'ತಮ್ಮ ಪಾದಕಮಲಗಳಲ್ಲಿ ಭಕ್ತಿಯುಳ್ಳವರಿಗೆ ಎಲ್ಲವನ್ನೂ ಕೊಡುವ, ಪಾಪಗಳೆಂಬ ಪರ್ವತಗಳನ್ನು ಸೀಳುವ ವಜ್ರಾಯುಧದಂತಹ ದೃಷ್ಟಿಯುಳ್ಳ, ಭೂಸುರರಲ್ಲಿ (ಬ್ರಾಹ್ಮಣರಲ್ಲಿ) ಶ್ರೇಷ್ಠರಾದ ಶ್ರೀರಾಘವೇಂದ್ರರು ನನ್ನನ್ನು ಸದಾ ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 4,
          text:
            'श्रीराघवेन्द्रो हरिपादकञ्ज-\nनिषेवणाल्लब्धसमस्तसम्पत् ।\nदेवस्वभावो दिविजद्रुमोऽय-\nमिष्टप्रदो मे सततं स भूयात् ॥',
          meaning: {
            en: 'Śrī Rāghavendra has gained every treasure by serving the lotus feet of Hari. Divine in nature, he is like the wish-fulfilling tree of heaven; may he always grant my wishes.',
            kn: 'ಶ್ರೀಹರಿಯ ಪಾದಕಮಲಗಳ ಸೇವೆಯಿಂದ ಸಮಸ್ತ ಸಂಪತ್ತನ್ನೂ ಪಡೆದ, ದೈವಸ್ವಭಾವದ, ಕಲ್ಪವೃಕ್ಷದಂತಿರುವ ಶ್ರೀರಾಘವೇಂದ್ರರು ಸದಾ ನನ್ನ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಕೊಡುವವರಾಗಲಿ.',
          },
        },
        {
          n: 5,
          text:
            'भव्यस्वरूपो भवदुःखतूल-\nसङ्घाग्निचर्यः सुखधैर्यशाली ।\nसमस्तदुष्टग्रहनिग्रहेशो\nदुरत्ययोपप्लवसिन्धुसेतुः ॥',
          meaning: {
            en: 'His form is auspicious; he is a fire that burns up the cotton-heaps of worldly sorrow, and he is rich in bliss and steadiness. He is the master who restrains all evil planetary influences, and a bridge across the ocean of calamities that is so hard to cross.',
            kn: 'ಅವರು ಮಂಗಳಕರ ರೂಪವುಳ್ಳವರು; ಸಂಸಾರದುಃಖವೆಂಬ ಹತ್ತಿಯ ರಾಶಿಯನ್ನು ಸುಡುವ ಬೆಂಕಿಯಂತಿರುವವರು; ಆನಂದ ಮತ್ತು ಧೈರ್ಯದಿಂದ ಶೋಭಿಸುವವರು. ಎಲ್ಲ ದುಷ್ಟಗ್ರಹಗಳನ್ನು ನಿಗ್ರಹಿಸುವ ಸಾಮರ್ಥ್ಯವುಳ್ಳವರು; ದಾಟಲು ಕಷ್ಟವಾದ ಆಪತ್ತುಗಳ ಸಮುದ್ರಕ್ಕೆ ಸೇತುವೆಯಂತಿರುವವರು.',
          },
        },
        {
          n: 6,
          text:
            'निरस्तदोषो निरवद्यवेषः\nप्रत्यर्थिमूकत्वनिदानभाषः ।\nविद्वत्परिज्ञेयमहाविशेषो\nवाग्वैखरीनिर्जितभव्यशेषः ॥',
          meaning: {
            en: 'He is free of all faults and blameless in appearance, and his words leave opponents speechless. His great excellence can be grasped only by the learned, and his eloquence surpasses even that of Śeṣa.',
            kn: 'ಅವರು ದೋಷರಹಿತರು, ನಿರ್ದೋಷವಾದ ವೇಷವುಳ್ಳವರು; ಅವರ ಮಾತು ಪ್ರತಿವಾದಿಗಳನ್ನು ಮೂಕರನ್ನಾಗಿಸುತ್ತದೆ. ಅವರ ಮಹಾಮಹಿಮೆಯನ್ನು ವಿದ್ವಾಂಸರು ಮಾತ್ರ ಅರಿಯಬಲ್ಲರು; ಅವರ ವಾಕ್ಚಾತುರ್ಯವು ಶೇಷದೇವರನ್ನೂ ಮೀರಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 7,
          text:
            'सन्तानसम्पत्परिशुद्धभक्ति-\nविज्ञानवाग्देहसुपाटवादीन् ।\nदत्त्वा शरीरोत्थसमस्तदोषान्\nहत्वा स नोऽव्याद्गुरुराघवेन्द्रः ॥',
          meaning: {
            en: 'Granting children, wealth, pure devotion, wisdom, good speech, bodily health and more, and destroying all the ills that arise in the body, may Guru Rāghavendra protect us.',
            kn: 'ಸಂತಾನ, ಸಂಪತ್ತು, ಶುದ್ಧಭಕ್ತಿ, ವಿಜ್ಞಾನ, ವಾಕ್ಪಟುತ್ವ, ದೇಹಾರೋಗ್ಯ ಮೊದಲಾದವುಗಳನ್ನು ಕೊಟ್ಟು, ದೇಹದಲ್ಲಿ ಉಂಟಾಗುವ ಎಲ್ಲ ದೋಷಗಳನ್ನೂ ನಾಶಮಾಡಿ ಗುರು ರಾಘವೇಂದ್ರರು ನಮ್ಮನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 8,
          text:
            'यत्पादोदकसञ्चयः सुरनदीमुख्यापगासादिता-\nसङ्ख्यानुत्तमपुण्यसङ्घविलसत्प्रख्यातपुण्यावहः ।\nदुस्तापत्रयनाशनो भुवि महावन्ध्यासुपुत्रप्रदो\nव्यङ्गस्वङ्गसमृद्धिदो ग्रहमहापापापहस्तं श्रये ॥',
          meaning: {
            en: 'I take refuge in him whose gathered foot-water brings renowned merit beyond the countless merits gained from the Gaṅgā and the other great rivers. It removes the three kinds of suffering, grants good sons even to the childless, gives sound limbs to the disabled, and drives away the afflictions of the planets and even grave sins.',
            kn: 'ಗಂಗೆ ಮೊದಲಾದ ಮುಖ್ಯ ನದಿಗಳಿಂದ ದೊರೆಯುವ ಅಸಂಖ್ಯ ಪುಣ್ಯಕ್ಕಿಂತಲೂ ಶ್ರೇಷ್ಠವಾದ ಪುಣ್ಯವನ್ನು ಕೊಡುವ ಅವರ ಪಾದೋದಕವು ಮೂರು ಬಗೆಯ ತಾಪಗಳನ್ನು ಕಳೆಯುತ್ತದೆ, ಮಕ್ಕಳಿಲ್ಲದವರಿಗೆ ಸತ್ಪುತ್ರರನ್ನು ಕೊಡುತ್ತದೆ, ಅಂಗವಿಕಲರಿಗೆ ಅಂಗಪುಷ್ಟಿಯನ್ನು ಕೊಡುತ್ತದೆ, ಗ್ರಹಪೀಡೆಗಳನ್ನೂ ಮಹಾಪಾಪಗಳನ್ನೂ ಹೋಗಲಾಡಿಸುತ್ತದೆ. ಅಂತಹ ಗುರುಗಳನ್ನು ನಾನು ಆಶ್ರಯಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 9,
          text:
            'यत्पादकञ्जरजसा परिभूषिताङ्गा\nयत्पादपद्ममधुपायितमानसा ये ।\nयत्पादपद्मपरिकीर्तनजीर्णवाच-\nस्तद्दर्शनं दुरितकाननदावभूतम् ॥',
          meaning: {
            en: 'There are those whose bodies are adorned with the dust of his lotus feet, whose minds, like bees, drink the honey of those feet, and whose speech is spent in praising them. The very sight of such devotees is a forest fire to the forest of sins.',
            kn: 'ಗುರುಗಳ ಪಾದಧೂಳಿಯಿಂದ ಅಲಂಕೃತವಾದ ದೇಹವುಳ್ಳ, ಅವರ ಪಾದಕಮಲಗಳ ಮಧುವನ್ನು ದುಂಬಿಗಳಂತೆ ಸವಿಯುವ ಮನಸ್ಸುಳ್ಳ, ಅವರ ಪಾದಗಳ ಕೀರ್ತನೆಯಲ್ಲೇ ಮಾತನ್ನು ಸವೆಸಿದ ಭಕ್ತರಿದ್ದಾರೆ. ಇಂತಹ ಭಕ್ತರ ದರ್ಶನವೇ ಪಾಪಗಳೆಂಬ ಕಾಡಿಗೆ ಕಾಳ್ಗಿಚ್ಚಿನಂತೆ.',
          },
        },
        {
          n: 10,
          text: 'सर्वतन्त्रस्वतन्त्रोऽसौ श्रीमध्वमतवर्धनः ।\nविजयीन्द्रकराब्जोत्थसुधीन्द्रवरपुत्रकः ॥',
          meaning: {
            en: 'He is a master of every system of thought and the one who made Śrī Madhva\'s doctrine flourish; he is the excellent disciple-son of Sudhīndra Tīrtha, who himself arose from the lotus hand of Vijayīndra Tīrtha.',
            kn: 'ಅವರು ಎಲ್ಲ ಶಾಸ್ತ್ರಗಳಲ್ಲೂ ಸ್ವತಂತ್ರ ಪಾಂಡಿತ್ಯವುಳ್ಳವರು, ಶ್ರೀಮಧ್ವಮತವನ್ನು ಬೆಳೆಸಿದವರು; ಶ್ರೀವಿಜಯೀಂದ್ರತೀರ್ಥರ ಕರಕಮಲದಿಂದ ಅನುಗ್ರಹಿತರಾದ ಶ್ರೀಸುಧೀಂದ್ರತೀರ್ಥರ ಶ್ರೇಷ್ಠ ಶಿಷ್ಯಪುತ್ರರು.',
          },
        },
        {
          n: 11,
          text: 'श्रीराघवेन्द्रो यतिराड् गुरुर्मे स्याद्भयापहः ।\nज्ञानभक्तिसुपुत्रायुर्यशःश्रीपुण्यवर्धनः ॥',
          meaning: {
            en: 'May Śrī Rāghavendra, king of ascetics and my guru, remove my fears and increase my knowledge, devotion, good children, long life, fame, prosperity and merit.',
            kn: 'ಯತಿರಾಜರೂ ನನ್ನ ಗುರುಗಳೂ ಆದ ಶ್ರೀರಾಘವೇಂದ್ರರು ನನ್ನ ಭಯವನ್ನು ಕಳೆದು, ಜ್ಞಾನ, ಭಕ್ತಿ, ಸತ್ಪುತ್ರರು, ಆಯುಸ್ಸು, ಕೀರ್ತಿ, ಸಂಪತ್ತು ಮತ್ತು ಪುಣ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲಿ.',
          },
        },
        {
          n: 12,
          text: 'प्रतिवादिजयस्वान्तभेदचिह्नादरो गुरुः ।\nसर्वविद्याप्रवीणोऽन्यो राघवेन्द्रान्न विद्यते ॥',
          meaning: {
            en: 'This guru delights in victory over opposing debaters and holds the truth of difference (bheda) dear in his heart. There is no one other than Rāghavendra so accomplished in every branch of learning.',
            kn: 'ಪ್ರತಿವಾದಿಗಳ ಮೇಲಿನ ವಿಜಯದಲ್ಲಿಯೂ, ಭೇದತತ್ತ್ವವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ನೆಲೆಗೊಳಿಸುವುದರಲ್ಲಿಯೂ ಆದರವುಳ್ಳ ಗುರುಗಳು ಅವರು. ಸಕಲ ವಿದ್ಯೆಗಳಲ್ಲಿ ಪ್ರವೀಣರಾದವರು ರಾಘವೇಂದ್ರರನ್ನು ಬಿಟ್ಟು ಬೇರೆ ಯಾರೂ ಇಲ್ಲ.',
          },
        },
        {
          n: 13,
          text: 'अपरोक्षीकृतश्रीशः समुपेक्षितभावजः ।\nअपेक्षितप्रदाताऽन्यो राघवेन्द्रान्न विद्यते ॥',
          meaning: {
            en: 'He has directly seen the Lord of Śrī and has set desire aside; there is no one other than Rāghavendra who so grants what is sought.',
            kn: 'ಲಕ್ಷ್ಮೀಪತಿಯಾದ ಶ್ರೀಹರಿಯನ್ನು ಅಪರೋಕ್ಷವಾಗಿ ಕಂಡವರು, ಕಾಮವನ್ನು ದೂರವಿಟ್ಟವರು; ಬೇಡಿದ್ದನ್ನು ಕೊಡುವವರು ರಾಘವೇಂದ್ರರನ್ನು ಬಿಟ್ಟು ಬೇರೆ ಯಾರೂ ಇಲ್ಲ.',
          },
        },
        {
          n: 14,
          text: 'दयादाक्षिण्यवैराग्यवाक्पाटवमुखाङ्कितः ।\nशापानुग्रहशक्तोऽन्यो राघवेन्द्रान्न विद्यते ॥',
          meaning: {
            en: 'He is marked by compassion, kindness, dispassion and mastery of speech, and has the power both to curse and to bless; there is no one other than Rāghavendra like this.',
            kn: 'ದಯೆ, ದಾಕ್ಷಿಣ್ಯ, ವೈರಾಗ್ಯ, ವಾಕ್ಚಾತುರ್ಯ ಮೊದಲಾದ ಗುಣಗಳಿಂದ ಕೂಡಿದವರು; ಶಾಪ ಮತ್ತು ಅನುಗ್ರಹ ಎರಡನ್ನೂ ಮಾಡಬಲ್ಲವರು ರಾಘವೇಂದ್ರರನ್ನು ಬಿಟ್ಟು ಬೇರೆ ಯಾರೂ ಇಲ್ಲ.',
          },
        },
        {
          n: 15,
          text: 'अज्ञानविस्मृतिभ्रान्तिसंशयापस्मृतिक्षयाः ।\nतन्द्राकम्पवचःकौण्ठ्यमुखा ये चेन्द्रियोद्भवाः ।\nदोषास्ते नाशमायान्ति राघवेन्द्रप्रसादतः ॥',
          meaning: {
            en: 'Ignorance, forgetfulness, confusion, doubt, failing memory and decline, drowsiness, trembling, faltering speech and the other defects that arise from the senses: all these are destroyed by the grace of Rāghavendra.',
            kn: 'ಅಜ್ಞಾನ, ಮರೆವು, ಭ್ರಾಂತಿ, ಸಂಶಯ, ಸ್ಮೃತಿಭ್ರಂಶ, ಕ್ಷಯ, ಆಲಸ್ಯ, ನಡುಕ, ಮಾತಿನ ತೊದಲು ಮೊದಲಾದ, ಇಂದ್ರಿಯಗಳಿಂದ ಹುಟ್ಟುವ ದೋಷಗಳೆಲ್ಲವೂ ಶ್ರೀರಾಘವೇಂದ್ರರ ಅನುಗ್ರಹದಿಂದ ನಾಶವಾಗುತ್ತವೆ.',
          },
        },
        {
          n: 16,
          text: 'ॐ श्रीराघवेन्द्राय नमः इत्यष्टाक्षरमन्त्रतः ।\nजपिताद्भावितान्नित्यमिष्टार्थाः स्युर्न संशयः ॥',
          meaning: {
            en: 'By the eight-syllable mantra \'Oṁ Śrī Rāghavendrāya namaḥ\', chanted and meditated upon every day, all desired goals are attained; of this there is no doubt.',
            kn: '“ಓಂ ಶ್ರೀರಾಘವೇಂದ್ರಾಯ ನಮಃ” ಎಂಬ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರವನ್ನು ನಿತ್ಯವೂ ಜಪಿಸಿ ಧ್ಯಾನಿಸುವುದರಿಂದ ಇಷ್ಟಾರ್ಥಗಳೆಲ್ಲ ಸಿದ್ಧಿಸುತ್ತವೆ; ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.',
          },
        },
        {
          n: 17,
          text: 'हन्तु नः कायजान्दोषानात्मात्मीयसमुद्भवान् ।\nसर्वानपि पुमर्थांश्च ददातु गुरुरात्मवित् ॥',
          meaning: {
            en: 'May the guru who knows the Supreme Self destroy our bodily ills, whether they arise from ourselves or from those who are ours, and grant us all the goals of human life.',
            kn: 'ಪರಮಾತ್ಮತತ್ತ್ವವನ್ನು ಅರಿತ ಗುರುಗಳು ನಮ್ಮಿಂದಲೂ ನಮ್ಮವರಿಂದಲೂ ಉಂಟಾಗುವ ದೇಹದೋಷಗಳನ್ನು ನಾಶಮಾಡಲಿ; ನಮಗೆ ಎಲ್ಲ ಪುರುಷಾರ್ಥಗಳನ್ನೂ ಕೊಡಲಿ.',
          },
        },
        {
          n: 18,
          text: 'इति कालत्रये नित्यं प्रार्थनां यः करोति सः ।\nइहामुत्राप्तसर्वेष्टो मोदते नात्र संशयः ॥',
          meaning: {
            en: 'Whoever offers this prayer daily at the three times of the day (dawn, noon and dusk) gains all he desires in this world and the next, and rejoices; there is no doubt of it.',
            kn: 'ಹೀಗೆ ಮೂರು ಕಾಲಗಳಲ್ಲೂ (ಬೆಳಿಗ್ಗೆ, ಮಧ್ಯಾಹ್ನ, ಸಂಜೆ) ನಿತ್ಯವೂ ಪ್ರಾರ್ಥಿಸುವವನು ಇಹದಲ್ಲೂ ಪರದಲ್ಲೂ ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಪಡೆದು ಆನಂದಿಸುತ್ತಾನೆ; ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.',
          },
        },
        {
          n: 19,
          text: 'अगम्यमहिमा लोके राघवेन्द्रो महायशाः ।\nश्रीमध्वमतदुग्धाब्धिचन्द्रोऽवतु सदानघः ॥',
          meaning: {
            en: 'May Rāghavendra, of great fame, whose greatness is beyond the world\'s grasp, the moon risen from the milk-ocean of Śrī Madhva\'s doctrine, ever sinless, always protect us.',
            kn: 'ಲೋಕಕ್ಕೆ ಅಳೆಯಲಾಗದ ಮಹಿಮೆಯುಳ್ಳ, ಮಹಾಕೀರ್ತಿಶಾಲಿಗಳಾದ, ಶ್ರೀಮಧ್ವಮತವೆಂಬ ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಉದಿಸಿದ ಚಂದ್ರನಂತಿರುವ, ಪಾಪರಹಿತರಾದ ಶ್ರೀರಾಘವೇಂದ್ರರು ಸದಾ ನಮ್ಮನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 20,
          text: 'सर्वयात्राफलावाप्त्यै यथाशक्ति प्रदक्षिणम् ।\nकरोमि तव सिद्धस्य वृन्दावनगतं जलम् ।\nशिरसा धारयाम्यद्य सर्वतीर्थफलाप्तये ॥',
          meaning: {
            en: 'To gain the fruit of all pilgrimages I walk in pradakṣiṇa around you, the perfected one, as best I can. Today I place on my head the water from your Vṛndāvana, to gain the merit of all holy waters.',
            kn: 'ಎಲ್ಲ ತೀರ್ಥಯಾತ್ರೆಗಳ ಫಲವನ್ನು ಪಡೆಯಲು ಸಿದ್ಧಪುರುಷರಾದ ನಿಮಗೆ ನನ್ನ ಶಕ್ತಿಯಿದ್ದಷ್ಟು ಪ್ರದಕ್ಷಿಣೆ ಮಾಡುತ್ತೇನೆ. ಎಲ್ಲ ತೀರ್ಥಗಳ ಫಲ ದೊರೆಯಲೆಂದು ನಿಮ್ಮ ವೃಂದಾವನದ ಜಲವನ್ನು ಇಂದು ತಲೆಯ ಮೇಲೆ ಧರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 21,
          text: 'सर्वाभीष्टार्थसिद्ध्यर्थं नमस्कारं करोम्यहम् ।\nतव सङ्कीर्तनं वेदशास्त्रार्थज्ञानसिद्धये ॥',
          meaning: {
            en: 'To fulfil all my wishes I bow to you, and I sing your praise to gain understanding of the meaning of the Vedas and śāstras.',
            kn: 'ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳ ಸಿದ್ಧಿಗಾಗಿ ನಿಮಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ; ವೇದ-ಶಾಸ್ತ್ರಗಳ ಅರ್ಥಜ್ಞಾನ ದೊರೆಯಲೆಂದು ನಿಮ್ಮ ಸಂಕೀರ್ತನೆ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          n: 22,
          text:
            'संसारेऽक्षयसागरे प्रकृतितोऽगाधे सदा दुस्तरे\nसर्वावद्यजलग्रहैरनुपमैः कामादिभङ्गाकुले ।\nनानाविभ्रमदुर्भ्रमेऽमितभयस्तोमादिफेनोत्कटे\nदुःखोत्कृष्टविषे समुद्धर गुरो मा मग्नरूपं सदा ॥',
          meaning: {
            en: 'O Guru, always lift me out, for I am sinking in the ocean of saṃsāra: endless, unfathomable by nature and ever hard to cross, full of the fearsome crocodiles of every fault, tossed by the waves of desire and the rest, swirling with countless delusions, foaming with endless fears, and poisoned with the worst of sorrows.',
            kn: 'ಗುರುಗಳೇ, ಕೊನೆಯಿಲ್ಲದ, ಸ್ವಭಾವತಃ ಆಳ ತಿಳಿಯದ, ಸದಾ ದಾಟಲು ಕಷ್ಟವಾದ, ಎಲ್ಲ ದೋಷಗಳೆಂಬ ಭಯಂಕರ ಮೊಸಳೆಗಳಿಂದ ತುಂಬಿದ, ಕಾಮಾದಿಗಳೆಂಬ ಅಲೆಗಳಿಂದ ಕ್ಷೋಭೆಗೊಂಡ, ನಾನಾ ಭ್ರಮೆಗಳೆಂಬ ಸುಳಿಗಳುಳ್ಳ, ಅಪಾರ ಭಯಗಳೆಂಬ ನೊರೆಯಿಂದ ಕೂಡಿದ, ದುಃಖವೆಂಬ ಘೋರ ವಿಷವುಳ್ಳ ಈ ಸಂಸಾರಸಾಗರದಲ್ಲಿ ಮುಳುಗಿರುವ ನನ್ನನ್ನು ಸದಾ ಮೇಲಕ್ಕೆತ್ತಿ ಕಾಪಾಡಿರಿ.',
          },
        },
      ],
    },
    {
      title: 'फलश्रुतिः',
      titleEn: 'Phala-śruti',
      verses: [
        {
          n: 23,
          text: 'राघवेन्द्रगुरुस्तोत्रं यः पठेद्भक्तिपूर्वकम् ।\nतस्य कुष्ठादिरोगाणां निवृत्तिस्त्वरया भवेत् ॥',
          meaning: {
            en: 'Whoever recites this hymn to Guru Rāghavendra with devotion is quickly freed from leprosy and other diseases.',
            kn: 'ಈ ಗುರು ರಾಘವೇಂದ್ರ ಸ್ತೋತ್ರವನ್ನು ಭಕ್ತಿಯಿಂದ ಪಠಿಸುವವರ ಕುಷ್ಠ ಮೊದಲಾದ ರೋಗಗಳು ಬೇಗನೆ ನಿವಾರಣೆಯಾಗುತ್ತವೆ.',
          },
        },
        {
          n: 24,
          text: 'अन्धोऽपि दिव्यदृष्टिः स्यादेडमूकोऽपि वाक्पतिः ।\nपूर्णायुः पूर्णसम्पत्तिः स्तोत्रस्यास्य जपाद्भवेत् ॥',
          meaning: {
            en: 'By chanting this hymn even the blind may gain divine sight and the deaf-mute become a master of speech; one gains a full span of life and full prosperity.',
            kn: 'ಈ ಸ್ತೋತ್ರದ ಜಪದಿಂದ ಕುರುಡನಿಗೂ ದಿವ್ಯದೃಷ್ಟಿ ಬರುತ್ತದೆ, ಕಿವುಡ-ಮೂಕನೂ ವಾಕ್ಪತಿಯಾಗುತ್ತಾನೆ; ಪೂರ್ಣಾಯುಸ್ಸು, ಪೂರ್ಣಸಂಪತ್ತು ದೊರೆಯುತ್ತವೆ.',
          },
        },
        {
          n: 25,
          text: 'यः पिबेज्जलमेतेन स्तोत्रेणैवाभिमन्त्रितम् ।\nतस्य कुक्षिगता दोषाः सर्वे नश्यन्ति तत्क्षणात् ॥',
          meaning: {
            en: 'Whoever drinks water sanctified with this hymn finds all the ailments of the stomach destroyed at once.',
            kn: 'ಈ ಸ್ತೋತ್ರದಿಂದ ಅಭಿಮಂತ್ರಿಸಿದ ನೀರನ್ನು ಕುಡಿಯುವವರ ಹೊಟ್ಟೆಯ ಎಲ್ಲ ದೋಷಗಳೂ ತಕ್ಷಣವೇ ನಾಶವಾಗುತ್ತವೆ.',
          },
        },
        {
          n: 26,
          text:
            'यद्वृन्दावनमासाद्य पङ्गुः खञ्जोऽपि वा जनः ।\nस्तोत्रेणानेन यः कुर्यात्प्रदक्षिणनमस्कृती ।\nस जङ्घालो भवेदेव गुरुराजप्रसादतः ॥',
          meaning: {
            en: 'If a lame or crippled person comes to his Vṛndāvana and, reciting this hymn, performs pradakṣiṇa and namaskāra, he will surely become able to walk swiftly by the grace of Gururāja.',
            kn: 'ಕುಂಟನಾಗಲಿ ಹೆಳವನಾಗಲಿ, ಗುರುಗಳ ವೃಂದಾವನಕ್ಕೆ ಬಂದು ಈ ಸ್ತೋತ್ರದೊಡನೆ ಪ್ರದಕ್ಷಿಣೆ-ನಮಸ್ಕಾರಗಳನ್ನು ಮಾಡಿದರೆ, ಗುರುರಾಜರ ಅನುಗ್ರಹದಿಂದ ಖಂಡಿತವಾಗಿ ಚುರುಕಾಗಿ ನಡೆಯುವವನಾಗುತ್ತಾನೆ.',
          },
        },
        {
          n: 27,
          text:
            'सोमसूर्योपरागे च पुष्यार्कादिसमागमे ।\nयोऽनुत्तममिदं स्तोत्रमष्टोत्तरशतं जपेत् ।\nभूतप्रेतपिशाचादिपीडा तस्य न जायते ॥',
          meaning: {
            en: 'Whoever chants this peerless hymn 108 times during an eclipse of the moon or sun, or on a conjunction such as Puṣyārka, is never troubled by ghosts, spirits, piśācas and the like.',
            kn: 'ಚಂದ್ರಗ್ರಹಣ, ಸೂರ್ಯಗ್ರಹಣಗಳ ಕಾಲದಲ್ಲೂ ಪುಷ್ಯಾರ್ಕ ಮೊದಲಾದ ಯೋಗಗಳಲ್ಲೂ ಈ ಶ್ರೇಷ್ಠ ಸ್ತೋತ್ರವನ್ನು ನೂರೆಂಟು ಬಾರಿ ಜಪಿಸುವವನಿಗೆ ಭೂತ, ಪ್ರೇತ, ಪಿಶಾಚ ಮೊದಲಾದವುಗಳ ಪೀಡೆ ಉಂಟಾಗುವುದಿಲ್ಲ.',
          },
        },
        {
          n: 28,
          text: 'एतत्स्तोत्रं समुच्चार्य गुरोर्वृन्दावनान्तिके ।\nदीपसंयोजनाज्ज्ञानं पुत्रलाभो भवेद्ध्रुवम् ॥',
          meaning: {
            en: 'Reciting this hymn near the Guru\'s Vṛndāvana and lighting a lamp there, one surely gains knowledge and the blessing of a son.',
            kn: 'ಗುರುಗಳ ವೃಂದಾವನದ ಬಳಿ ಈ ಸ್ತೋತ್ರವನ್ನು ಪಠಿಸಿ ದೀಪವನ್ನು ಹಚ್ಚಿದರೆ ಜ್ಞಾನವೂ ಪುತ್ರಲಾಭವೂ ಖಂಡಿತವಾಗಿ ಆಗುತ್ತವೆ.',
          },
        },
        {
          n: 29,
          text: 'परवादिजयो दिव्यज्ञानभक्त्यादिवर्धनम् ।\nसर्वाभीष्टप्रवृद्धिः स्यान्नात्र कार्या विचारणा ॥',
          meaning: {
            en: 'Victory over opponents in debate, growth of divine knowledge, devotion and the like, and the increase of every cherished wish will follow; there is no need to doubt it.',
            kn: 'ಪ್ರತಿವಾದಿಗಳ ಮೇಲೆ ಜಯ, ದಿವ್ಯಜ್ಞಾನ-ಭಕ್ತಿ ಮೊದಲಾದವುಗಳ ವೃದ್ಧಿ, ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳ ಅಭಿವೃದ್ಧಿ — ಇವೆಲ್ಲವೂ ಆಗುತ್ತವೆ; ಇದರ ಬಗ್ಗೆ ಸಂದೇಹ ಪಡಬೇಕಿಲ್ಲ.',
          },
        },
        {
          n: 30,
          text: 'राजचोरमहाव्याघ्रसर्पनक्रादिपीडनम् ।\nन जायतेऽस्य स्तोत्रस्य प्रभावान्नात्र संशयः ॥',
          meaning: {
            en: 'By the power of this hymn no harm comes from kings, thieves, tigers, snakes, crocodiles and the like; of this there is no doubt.',
            kn: 'ಈ ಸ್ತೋತ್ರದ ಪ್ರಭಾವದಿಂದ ರಾಜರು, ಕಳ್ಳರು, ಹುಲಿಗಳು, ಹಾವುಗಳು, ಮೊಸಳೆಗಳು ಮೊದಲಾದವುಗಳಿಂದ ಯಾವ ಪೀಡೆಯೂ ಉಂಟಾಗುವುದಿಲ್ಲ; ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.',
          },
        },
        {
          n: 31,
          text:
            'यो भक्त्या गुरुराघवेन्द्रचरणद्वन्द्वं स्मरन् यः पठेत्\nस्तोत्रं दिव्यमिदं सदा न हि भवेत्तस्यासुखं किञ्चन ।\nकिं त्विष्टार्थसमृद्धिरेव कमलानाथप्रसादोदयात्\nकीर्तिर्दिग्विदिता विभूतिरतुला साक्षी हयास्योऽत्र हि ॥',
          meaning: {
            en: 'Whoever, remembering the two feet of Guru Rāghavendra with devotion, always recites this divine hymn will know no unhappiness at all. Rather, by the grace of the Lord of Kamalā (Lakṣmī), his wishes will be richly fulfilled, his fame will spread in every direction and his prosperity will be unequalled; Lord Hayagrīva is witness to this.',
            kn: 'ಗುರು ರಾಘವೇಂದ್ರರ ಪಾದದ್ವಯವನ್ನು ಭಕ್ತಿಯಿಂದ ಸ್ಮರಿಸುತ್ತಾ ಈ ದಿವ್ಯ ಸ್ತೋತ್ರವನ್ನು ಸದಾ ಪಠಿಸುವವನಿಗೆ ಯಾವ ದುಃಖವೂ ಇರುವುದಿಲ್ಲ. ಬದಲಾಗಿ ಲಕ್ಷ್ಮೀಪತಿಯಾದ ಶ್ರೀಹರಿಯ ಅನುಗ್ರಹದಿಂದ ಇಷ್ಟಾರ್ಥಗಳೆಲ್ಲ ಸಮೃದ್ಧವಾಗಿ ಈಡೇರುತ್ತವೆ, ದಿಕ್ಕುದಿಕ್ಕುಗಳಲ್ಲಿ ಕೀರ್ತಿ ಹಬ್ಬುತ್ತದೆ, ಅಸಾಮಾನ್ಯ ಐಶ್ವರ್ಯ ದೊರೆಯುತ್ತದೆ. ಇದಕ್ಕೆ ಶ್ರೀಹಯಗ್ರೀವದೇವರೇ ಸಾಕ್ಷಿ.',
          },
        },
        {
          n: 32,
          text: 'इति श्रीराघवेन्द्रार्यगुरुराजप्रसादतः ।\nकृतं स्तोत्रमिदं पुण्यं श्रीमद्भिर्ह्यप्पणाभिधैः ॥',
          meaning: {
            en: 'Thus, by the grace of the noble Śrī Rāghavendra, king among gurus, this sacred hymn was composed by the revered one named Appaṇṇa (Appaṇṇācārya).',
            kn: 'ಹೀಗೆ ಶ್ರೀರಾಘವೇಂದ್ರ ಗುರುರಾಜರ ಅನುಗ್ರಹದಿಂದ, ಅಪ್ಪಣ್ಣ ಎಂಬ ಹೆಸರಿನ ಪೂಜ್ಯರು (ಶ್ರೀಅಪ್ಪಣ್ಣಾಚಾರ್ಯರು) ಈ ಪುಣ್ಯಕರವಾದ ಸ್ತೋತ್ರವನ್ನು ರಚಿಸಿದರು.',
          },
        },
      ],
    },
    {
      title: 'प्रार्थना',
      titleEn: 'Prārthanā (prayer)',
      note: 'This short prayer is recited after the stotram, and also on its own daily.',
      verses: [
        {
          text: 'पूज्याय राघवेन्द्राय सत्यधर्मरताय च ।\nभजतां कल्पवृक्षाय नमतां कामधेनवे ॥',
          meaning: {
            en: 'Salutations to the venerable Rāghavendra, devoted to truth and dharma; a wish-fulfilling tree to those who worship him and a wish-granting cow to those who bow to him.',
            kn: 'ಪೂಜ್ಯರಾದ, ಸತ್ಯ ಮತ್ತು ಧರ್ಮದಲ್ಲಿ ನಿರತರಾದ, ಭಜಿಸುವವರಿಗೆ ಕಲ್ಪವೃಕ್ಷದಂತೆಯೂ ನಮಿಸುವವರಿಗೆ ಕಾಮಧೇನುವಿನಂತೆಯೂ ಇರುವ ಶ್ರೀರಾಘವೇಂದ್ರರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
  ],
};
