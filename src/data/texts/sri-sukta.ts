/**
 * Śrī Sūktam. Collated (Nov 2026) against stotranidhi.com, sa.wikisource.org
 * (two texts), the vishvAsa Ṛgveda-khila edition with apparatus, and three other
 * online copies. Not yet checked against a printed edition.
 */
import type { Mantra } from '../types';

export const sriSukta: Mantra = {
  id: 'sri-sukta',
  title: 'श्रीसूक्तम्',
  titleEn: 'Sri Suktam',
  category: 'vedic',
  deity: 'Śrī Lakṣmī',
  source: 'Ṛgveda Khilāni 2.6 (appended to Ṛgveda 5.87)',
  summary:
    'The Vedic hymn to Śrī, the goddess of prosperity, invoked through Jātavedas (Agni) to bring Lakṣmī who never departs, and to drive away Alakṣmī, poverty and misfortune. Chanted in Lakṣmī pūjā, abhiṣeka and on Fridays.',
  summaryKn:
    'ಸಂಪತ್ತಿನ ಅಧಿದೇವತೆಯಾದ ಶ್ರೀ ಲಕ್ಷ್ಮೀದೇವಿಯ ವೈದಿಕ ಸ್ತುತಿ. ಜಾತವೇದನಾದ ಅಗ್ನಿದೇವರ ಮೂಲಕ ಎಂದೂ ಬಿಟ್ಟುಹೋಗದ ಲಕ್ಷ್ಮಿಯನ್ನು ಆಹ್ವಾನಿಸಿ, ಅಲಕ್ಷ್ಮಿ, ದಾರಿದ್ರ್ಯ ಮತ್ತು ದುರದೃಷ್ಟಗಳನ್ನು ದೂರಮಾಡಲು ಪ್ರಾರ್ಥಿಸಲಾಗುತ್ತದೆ. ಲಕ್ಷ್ಮೀಪೂಜೆ, ಅಭಿಷೇಕ ಮತ್ತು ಶುಕ್ರವಾರಗಳಂದು ಇದನ್ನು ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote:
    'The 15 ṛks are followed by the phala-śruti and supplementary verses (16–36) in the order most widely printed today. Traditions differ in this second part: some chant श्रियः पञ्चदशर्चं in 16, end with ॐ महादेव्यै च विद्महे…, or add verses such as आनन्दः कर्दमः श्रीदश्चिक्लीत… and चन्द्राभां लक्ष्मीमीशानां…, which are not included here.',
  sections: [
    {
      title: 'श्रीसूक्तम्',
      titleEn: 'Śrī Sūktam (15 ṛks)',
      verses: [
        {
          n: 1,
          text: 'हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम् ।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥',
          meaning: {
            en: 'O Jātavedas (Agni), bring to me Lakṣmī: golden in hue, the remover of sorrow, wearing garlands of gold and silver, delightful as the moon and radiant as gold.',
            kn: 'ಓ ಜಾತವೇದನೇ (ಅಗ್ನಿದೇವನೇ), ಬಂಗಾರದ ಬಣ್ಣದವಳು, ದುಃಖಗಳನ್ನು ಹರಿಸುವವಳು, ಚಿನ್ನ ಬೆಳ್ಳಿಯ ಹಾರಗಳನ್ನು ಧರಿಸಿದವಳು, ಚಂದ್ರನಂತೆ ಆಹ್ಲಾದಕರಳು, ಸುವರ್ಣಮಯಿಯಾದ ಲಕ್ಷ್ಮೀದೇವಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ.',
          },
        },
        {
          n: 2,
          text: 'तां म आवह जातवेदो लक्ष्मीमनपगामिनीम् ।\nयस्यां हिरण्यं विन्देयं गामश्वं पुरुषानहम् ॥',
          meaning: {
            en: 'O Jātavedas, bring to me that Lakṣmī who never departs, by whose grace I may gain gold, cattle, horses and people around me.',
            kn: 'ಓ ಜಾತವೇದನೇ, ಎಂದೂ ನನ್ನನ್ನು ಬಿಟ್ಟುಹೋಗದ ಆ ಲಕ್ಷ್ಮೀದೇವಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ. ಅವಳ ಕೃಪೆಯಿಂದ ನಾನು ಚಿನ್ನ, ಗೋವುಗಳು, ಕುದುರೆಗಳು ಮತ್ತು ಬಂಧುಜನರನ್ನು ಪಡೆಯುವಂತಾಗಲಿ.',
          },
        },
        {
          n: 3,
          text: 'अश्वपूर्वां रथमध्यां हस्तिनादप्रबोधिनीम् ।\nश्रियं देवीमुपह्वये श्रीर्मा देवी जुषताम् ॥',
          meaning: {
            en: 'I invoke the goddess Śrī, whose procession has horses in front and chariots in the middle, and whose coming is announced by the trumpeting of elephants. May the goddess Śrī be gracious to me.',
            kn: 'ಮುಂದೆ ಕುದುರೆಗಳು, ನಡುವೆ ರಥ, ಆನೆಗಳ ಘೀಳಿಡುವಿಕೆಯಿಂದ ತನ್ನ ಆಗಮನವನ್ನು ಸಾರುವ ಶ್ರೀದೇವಿಯನ್ನು ನಾನು ಆಹ್ವಾನಿಸುತ್ತೇನೆ. ಆ ಶ್ರೀದೇವಿ ನನ್ನ ಮೇಲೆ ಪ್ರಸನ್ನಳಾಗಲಿ.',
          },
        },
        {
          n: 4,
          text: 'कां सोस्मितां हिरण्यप्राकारामार्द्रां ज्वलन्तीं तृप्तां तर्पयन्तीम् ।\nपद्मेस्थितां पद्मवर्णां तामिहोपह्वये श्रियम् ॥',
          meaning: {
            en: 'I invoke here Śrī, who is bliss itself, gently smiling, enclosed in gold, tender with compassion, shining, ever content and contenting her devotees, seated on a lotus and lotus-hued.',
            kn: 'ಆನಂದಸ್ವರೂಪಿಣಿ, ಮಂದಹಾಸ ಬೀರುವವಳು, ಚಿನ್ನದ ಪ್ರಾಕಾರದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಕರುಣೆಯಿಂದ ಆರ್ದ್ರಳಾದವಳು, ತೇಜಸ್ಸಿನಿಂದ ಬೆಳಗುವವಳು, ತಾನು ತೃಪ್ತಳಾಗಿ ಭಕ್ತರನ್ನೂ ತೃಪ್ತಿಪಡಿಸುವವಳು, ಕಮಲದಲ್ಲಿ ಕುಳಿತವಳು, ಕಮಲದ ಬಣ್ಣದವಳು ಆದ ಶ್ರೀದೇವಿಯನ್ನು ನಾನು ಇಲ್ಲಿಗೆ ಆಹ್ವಾನಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 5,
          text: 'चन्द्रां प्रभासां यशसा ज्वलन्तीं श्रियं लोके देवजुष्टामुदाराम् ।\nतां पद्मिनीमीं शरणमहं प्रपद्येऽलक्ष्मीर्मे नश्यतां त्वां वृणे ॥',
          meaning: {
            en: 'I take refuge in Śrī, lovely as the moon, brilliant, blazing with glory, honoured by the gods in the world, generous and holding the lotus. I choose you, Mother; may my misfortune be destroyed.',
            kn: 'ಚಂದ್ರನಂತೆ ಸುಂದರಳು, ಪ್ರಕಾಶಮಾನಳು, ಕೀರ್ತಿಯಿಂದ ಬೆಳಗುವವಳು, ದೇವತೆಗಳಿಂದ ಪೂಜಿತಳು, ಉದಾರಳು, ಕಮಲಧಾರಿಣಿಯಾದ ಶ್ರೀದೇವಿಗೆ ನಾನು ಶರಣಾಗುತ್ತೇನೆ. ತಾಯೇ, ನಿನ್ನನ್ನೇ ಆರಿಸಿಕೊಳ್ಳುತ್ತೇನೆ; ನನ್ನ ದಾರಿದ್ರ್ಯವು (ಅಲಕ್ಷ್ಮಿ) ನಾಶವಾಗಲಿ.',
          },
        },
        {
          n: 6,
          text: 'आदित्यवर्णे तपसोऽधिजातो वनस्पतिस्तव वृक्षोऽथ बिल्वः ।\nतस्य फलानि तपसा नुदन्तु मायान्तरायाश्च बाह्या अलक्ष्मीः ॥',
          meaning: {
            en: 'O Goddess radiant as the sun, from your austerity the bilva, king of trees, was born. By your power may its fruits drive away the obstacles of ignorance within and misfortune without.',
            kn: 'ಸೂರ್ಯನಂತೆ ಪ್ರಕಾಶಿಸುವ ತಾಯೇ, ನಿನ್ನ ತಪಸ್ಸಿನಿಂದ ವೃಕ್ಷರಾಜನಾದ ಬಿಲ್ವವೃಕ್ಷ ಹುಟ್ಟಿತು. ಅದರ ಹಣ್ಣುಗಳು ನಿನ್ನ ಅನುಗ್ರಹದಿಂದ ನನ್ನೊಳಗಿನ ಅಜ್ಞಾನದ ಅಡ್ಡಿಗಳನ್ನೂ ಹೊರಗಿನ ದಾರಿದ್ರ್ಯವನ್ನೂ ದೂರಮಾಡಲಿ.',
          },
        },
        {
          n: 7,
          text: 'उपैतु मां देवसखः कीर्तिश्च मणिना सह ।\nप्रादुर्भूतोऽस्मि राष्ट्रेऽस्मिन् कीर्तिमृद्धिं ददातु मे ॥',
          meaning: {
            en: 'May the friend of the gods (Kubera) come to me together with Kīrti (fame) and precious jewels. I am born in this land; may he grant me fame and prosperity.',
            kn: 'ದೇವತೆಗಳ ಸ್ನೇಹಿತನಾದ ಕುಬೇರನೂ ಕೀರ್ತಿದೇವತೆಯೂ ರತ್ನಸಹಿತವಾಗಿ ನನ್ನ ಬಳಿಗೆ ಬರಲಿ. ನಾನು ಈ ನಾಡಿನಲ್ಲಿ ಹುಟ್ಟಿದ್ದೇನೆ; ನನಗೆ ಕೀರ್ತಿಯನ್ನೂ ಸಮೃದ್ಧಿಯನ್ನೂ ಕರುಣಿಸಲಿ.',
          },
        },
        {
          n: 8,
          text: 'क्षुत्पिपासामलां ज्येष्ठामलक्ष्मीं नाशयाम्यहम् ।\nअभूतिमसमृद्धिं च सर्वां निर्णुद मे गृहात् ॥',
          meaning: {
            en: 'I drive away Alakṣmī, the elder sister, who brings hunger, thirst and impurity. O Goddess, cast out from my home all want and lack of plenty.',
            kn: 'ಹಸಿವು, ಬಾಯಾರಿಕೆ, ಮಾಲಿನ್ಯಗಳನ್ನು ತರುವ ಜ್ಯೇಷ್ಠಾ ಎಂಬ ಅಲಕ್ಷ್ಮಿಯನ್ನು ನಾನು ನಾಶಪಡಿಸುತ್ತೇನೆ. ತಾಯೇ, ಬಡತನವನ್ನೂ ಅಭಾವವನ್ನೂ ನನ್ನ ಮನೆಯಿಂದ ಸಂಪೂರ್ಣವಾಗಿ ಓಡಿಸು.',
          },
        },
        {
          n: 9,
          text: 'गन्धद्वारां दुराधर्षां नित्यपुष्टां करीषिणीम् ।\nईश्वरीं सर्वभूतानां तामिहोपह्वये श्रियम् ॥',
          meaning: {
            en: 'I invoke here Śrī, who is known by her fragrance, who cannot be overcome, who is ever abundant, rich in herds, and the sovereign of all beings.',
            kn: 'ಸುಗಂಧದಿಂದ ಗುರುತಿಸಲ್ಪಡುವವಳು, ಯಾರಿಂದಲೂ ಜಯಿಸಲಾಗದವಳು, ಸದಾ ಸಮೃದ್ಧಳು, ಗೋಸಂಪತ್ತಿನಿಂದ ತುಂಬಿದವಳು, ಸಕಲ ಜೀವಿಗಳಿಗೂ ಒಡತಿಯಾದ ಶ್ರೀದೇವಿಯನ್ನು ನಾನು ಇಲ್ಲಿಗೆ ಆಹ್ವಾನಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 10,
          text: 'मनसः काममाकूतिं वाचः सत्यमशीमहि ।\nपशूनां रूपमन्नस्य मयि श्रीः श्रयतां यशः ॥',
          meaning: {
            en: 'May we attain the wishes and resolves of the mind and truth in our speech. May Śrī dwell in me as thriving herds, plentiful food and good name.',
            kn: 'ಮನಸ್ಸಿನ ಆಸೆಗಳೂ ಸಂಕಲ್ಪಗಳೂ ಈಡೇರಲಿ; ಮಾತಿನಲ್ಲಿ ಸತ್ಯ ನೆಲೆಸಲಿ. ಗೋಸಂಪತ್ತು, ಅನ್ನಸಮೃದ್ಧಿ ಮತ್ತು ಕೀರ್ತಿಯ ರೂಪದಲ್ಲಿ ಶ್ರೀದೇವಿ ನನ್ನಲ್ಲಿ ನೆಲೆಸಲಿ.',
          },
        },
        {
          n: 11,
          text: 'कर्दमेन प्रजाभूता मयि सम्भव कर्दम ।\nश्रियं वासय मे कुले मातरं पद्ममालिनीम् ॥',
          meaning: {
            en: 'O Kardama, through you Lakṣmī is blessed with offspring; dwell with me, O Kardama. Make Śrī, the Mother adorned with a lotus garland, dwell in my family.',
            kn: 'ಓ ಕರ್ದಮನೇ, ನಿನ್ನಿಂದ ಲಕ್ಷ್ಮೀದೇವಿ ಸಂತಾನವತಿಯಾದಳು; ನೀನು ನನ್ನಲ್ಲಿ ನೆಲೆಸು. ಕಮಲಮಾಲೆಯನ್ನು ಧರಿಸಿದ ಜಗನ್ಮಾತೆ ಶ್ರೀದೇವಿಯನ್ನು ನನ್ನ ಕುಲದಲ್ಲಿ ನೆಲೆಸುವಂತೆ ಮಾಡು.',
          },
        },
        {
          n: 12,
          text: 'आपः सृजन्तु स्निग्धानि चिक्लीत वस मे गृहे ।\nनि च देवीं मातरं श्रियं वासय मे कुले ॥',
          meaning: {
            en: 'May the waters bring forth gentle, nourishing abundance. O Ciklīta, dwell in my home, and make the divine Mother Śrī dwell in my family.',
            kn: 'ಜಲದೇವತೆಗಳು ಸ್ನಿಗ್ಧವಾದ, ಪೋಷಕವಾದ ಸಮೃದ್ಧಿಯನ್ನು ಉಂಟುಮಾಡಲಿ. ಓ ಚಿಕ್ಲೀತನೇ, ನನ್ನ ಮನೆಯಲ್ಲಿ ನೆಲೆಸು; ದೇವಿಯಾದ ತಾಯಿ ಶ್ರೀದೇವಿಯನ್ನೂ ನನ್ನ ಕುಲದಲ್ಲಿ ನೆಲೆಸುವಂತೆ ಮಾಡು.',
          },
        },
        {
          n: 13,
          text: 'आर्द्रां पुष्करिणीं पुष्टिं पिङ्गलां पद्ममालिनीम् ।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥',
          meaning: {
            en: 'O Jātavedas, bring to me Lakṣmī: tender with compassion, dwelling in the lotus-pond, giver of nourishment, golden-tawny, garlanded with lotuses, delightful as the moon and radiant as gold.',
            kn: 'ಓ ಜಾತವೇದನೇ, ಕರುಣೆಯಿಂದ ಆರ್ದ್ರಳು, ಕಮಲಸರೋವರದಲ್ಲಿ ನೆಲೆಸಿದವಳು, ಪುಷ್ಟಿಯನ್ನು ಕೊಡುವವಳು, ಹೊಂಬಣ್ಣದವಳು, ಕಮಲಮಾಲೆ ಧರಿಸಿದವಳು, ಚಂದ್ರನಂತೆ ಆಹ್ಲಾದಕರಳು, ಸುವರ್ಣಮಯಿಯಾದ ಲಕ್ಷ್ಮಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ.',
          },
        },
        {
          n: 14,
          text: 'आर्द्रां यः करिणीं यष्टिं सुवर्णां हेममालिनीम् ।\nसूर्यां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥',
          meaning: {
            en: 'O Jātavedas, bring to me Lakṣmī: tender with compassion, a staff of support to her devotees, fair of form, wearing a golden garland, brilliant as the sun and radiant as gold.',
            kn: 'ಓ ಜಾತವೇದನೇ, ಕರುಣೆಯಿಂದ ಆರ್ದ್ರಳು, ಭಕ್ತರಿಗೆ ಊರುಗೋಲಿನಂತೆ ಆಧಾರವಾದವಳು, ಸುಂದರ ವರ್ಣದವಳು, ಚಿನ್ನದ ಹಾರ ಧರಿಸಿದವಳು, ಸೂರ್ಯನಂತೆ ತೇಜಸ್ವಿನಿ, ಸುವರ್ಣಮಯಿಯಾದ ಲಕ್ಷ್ಮಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ.',
          },
        },
        {
          n: 15,
          text: 'तां म आवह जातवेदो लक्ष्मीमनपगामिनीम् ।\nयस्यां हिरण्यं प्रभूतं गावो दास्योऽश्वान्विन्देयं पुरुषानहम् ॥',
          meaning: {
            en: 'O Jātavedas, bring to me that Lakṣmī who never departs, by whose grace I may gain gold in abundance, cows, servants, horses and people around me.',
            kn: 'ಓ ಜಾತವೇದನೇ, ಎಂದೂ ಬಿಟ್ಟುಹೋಗದ ಆ ಲಕ್ಷ್ಮೀದೇವಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ. ಅವಳ ಕೃಪೆಯಿಂದ ನಾನು ಹೇರಳವಾದ ಚಿನ್ನ, ಗೋವುಗಳು, ಸೇವಕರು, ಕುದುರೆಗಳು ಮತ್ತು ಬಂಧುಜನರನ್ನು ಪಡೆಯುವಂತಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'फलश्रुतिः',
      titleEn: 'Phala-śruti and supplementary verses',
      verses: [
        {
          n: 16,
          text: 'यः शुचिः प्रयतो भूत्वा जुहुयादाज्यमन्वहम् ।\nसूक्तं पञ्चदशर्चं च श्रीकामः सततं जपेत् ॥',
          meaning: {
            en: 'One who longs for prosperity should become pure and self-restrained, offer ghee into the fire every day, and constantly recite this hymn of fifteen ṛks.',
            kn: 'ಸಂಪತ್ತನ್ನು ಬಯಸುವವನು ಶುಚಿಯಾಗಿ, ಸಂಯಮದಿಂದ ಇದ್ದು, ಪ್ರತಿದಿನ ಅಗ್ನಿಯಲ್ಲಿ ತುಪ್ಪವನ್ನು ಹೋಮಮಾಡಿ, ಹದಿನೈದು ಋಕ್ಕುಗಳ ಈ ಸೂಕ್ತವನ್ನು ನಿರಂತರವಾಗಿ ಜಪಿಸಬೇಕು.',
          },
        },
        {
          n: 17,
          text: 'पद्मानने पद्म ऊरू पद्माक्षी पद्मसम्भवे ।\nत्वं मां भजस्व पद्माक्षी येन सौख्यं लभाम्यहम् ॥',
          meaning: {
            en: 'O lotus-faced Goddess, lotus-limbed, lotus-eyed, born of the lotus: O lotus-eyed one, turn to me in grace, so that I may find happiness.',
            kn: 'ಕಮಲದಂತಹ ಮುಖವುಳ್ಳವಳೇ, ಕಮಲದಂತಹ ಅಂಗಗಳುಳ್ಳವಳೇ, ಕಮಲನಯನೆಯೇ, ಕಮಲದಲ್ಲಿ ಜನಿಸಿದವಳೇ, ನಾನು ಸುಖವನ್ನು ಪಡೆಯುವಂತೆ ನನ್ನನ್ನು ಅನುಗ್ರಹಿಸು.',
          },
        },
        {
          n: 18,
          text: 'अश्वदायि गोदायि धनदायि महाधने ।\nधनं मे जुषतां देवि सर्वकामांश्च देहि मे ॥',
          meaning: {
            en: 'O giver of horses, of cows and of wealth, O Goddess of great riches: may wealth come to me, and grant me all that I desire.',
            kn: 'ಕುದುರೆಗಳನ್ನೂ ಗೋವುಗಳನ್ನೂ ಧನವನ್ನೂ ಕೊಡುವವಳೇ, ಮಹಾಧನವುಳ್ಳ ದೇವಿಯೇ, ನನಗೆ ಸಂಪತ್ತು ದೊರೆಯಲಿ; ನನ್ನ ಎಲ್ಲ ಬಯಕೆಗಳನ್ನೂ ಈಡೇರಿಸು.',
          },
        },
        {
          n: 19,
          text: 'पुत्रपौत्रधनं धान्यं हस्त्यश्वादिगवे रथम् ।\nप्रजानां भवसि माता आयुष्मन्तं करोतु माम् ॥',
          meaning: {
            en: 'You are the mother of all beings. Grant me children and grandchildren, wealth and grain, elephants, horses, cattle and chariots, and may you make me long-lived.',
            kn: 'ನೀನು ಸಕಲ ಜೀವಿಗಳ ತಾಯಿ. ಮಕ್ಕಳು ಮೊಮ್ಮಕ್ಕಳು, ಧನ ಧಾನ್ಯ, ಆನೆ ಕುದುರೆ ಗೋವುಗಳು ಮತ್ತು ರಥಗಳನ್ನು ಕರುಣಿಸಿ ನನ್ನನ್ನು ದೀರ್ಘಾಯುಷಿಯನ್ನಾಗಿ ಮಾಡು.',
          },
        },
        {
          n: 20,
          text: 'धनमग्निर्धनं वायुर्धनं सूर्यो धनं वसुः ।\nधनमिन्द्रो बृहस्पतिर्वरुणं धनमश्नुते ॥',
          meaning: {
            en: 'Agni is wealth, Vāyu is wealth, Sūrya is wealth, the Vasu is wealth; Indra, Bṛhaspati and Varuṇa are wealth. Through them one obtains wealth.',
            kn: 'ಅಗ್ನಿಯೇ ಧನ, ವಾಯುವೇ ಧನ, ಸೂರ್ಯನೇ ಧನ, ವಸುವೇ ಧನ; ಇಂದ್ರ, ಬೃಹಸ್ಪತಿ, ವರುಣರೂ ಧನವೇ. ಇವರ ಕೃಪೆಯಿಂದ ಮನುಷ್ಯನು ಸಂಪತ್ತನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 21,
          text: 'वैनतेय सोमं पिब सोमं पिबतु वृत्रहा ।\nसोमं धनस्य सोमिनो मह्यं ददातु सोमिनः ॥',
          meaning: {
            en: 'O Vainateya (Garuḍa), drink the Soma; may Indra, the slayer of Vṛtra, drink the Soma. May the Soma-drinkers grant me the Soma of wealth.',
            kn: 'ವೈನತೇಯನೇ (ಗರುಡನೇ), ಸೋಮವನ್ನು ಪಾನಮಾಡು; ವೃತ್ರಾಸುರನನ್ನು ಕೊಂದ ಇಂದ್ರನೂ ಸೋಮವನ್ನು ಪಾನಮಾಡಲಿ. ಸೋಮವನ್ನು ಸ್ವೀಕರಿಸುವ ಆ ದೇವತೆಗಳು ಸಂಪತ್ತೆಂಬ ಸೋಮವನ್ನು ನನಗೆ ಕೊಡಲಿ.',
          },
        },
        {
          n: 22,
          text: 'न क्रोधो न च मात्सर्यं न लोभो नाशुभा मतिः ।\nभवन्ति कृतपुण्यानां भक्तानां श्रीसूक्तं जपेत्सदा ॥',
          meaning: {
            en: 'Anger, envy, greed and evil thoughts do not arise in devotees who have earned merit. Therefore one should always recite the Śrī Sūktam.',
            kn: 'ಪುಣ್ಯವಂತರಾದ ಭಕ್ತರಲ್ಲಿ ಕೋಪ, ಮತ್ಸರ, ಲೋಭ, ಕೆಟ್ಟ ಆಲೋಚನೆಗಳು ಹುಟ್ಟುವುದಿಲ್ಲ. ಆದ್ದರಿಂದ ಶ್ರೀಸೂಕ್ತವನ್ನು ಸದಾ ಜಪಿಸಬೇಕು.',
          },
        },
        {
          n: 23,
          text: 'वर्षन्तु ते विभावरि दिवो अभ्रस्य विद्युतः ।\nरोहन्तु सर्वबीजान्यव ब्रह्मद्विषो जहि ॥',
          meaning: {
            en: 'O radiant Goddess, may the lightning-filled clouds of the sky pour rain for you; may every seed sprout. Strike down those who hate the sacred Veda.',
            kn: 'ಪ್ರಕಾಶಮಾನಳಾದ ದೇವಿಯೇ, ಆಕಾಶದ ಮಿಂಚುಳ್ಳ ಮೋಡಗಳು ನಿನಗಾಗಿ ಮಳೆಗರೆಯಲಿ; ಎಲ್ಲ ಬೀಜಗಳೂ ಮೊಳಕೆಯೊಡೆಯಲಿ. ವೇದವನ್ನು ದ್ವೇಷಿಸುವವರನ್ನು ನಾಶಮಾಡು.',
          },
        },
        {
          n: 24,
          text: 'पद्मप्रिये पद्मिनि पद्महस्ते पद्मालये पद्मदलायताक्षि ।\nविश्वप्रिये विष्णुमनोऽनुकूले त्वत्पादपद्मं मयि सन्निधत्स्व ॥',
          meaning: {
            en: 'O lover of the lotus, lotus-bearer, lotus in hand, dweller in the lotus, with eyes long as lotus petals; beloved of the world, ever pleasing to Viṣṇu’s heart: place your lotus feet within me.',
            kn: 'ಕಮಲಪ್ರಿಯಳೇ, ಕಮಲವನ್ನು ಕೈಯಲ್ಲಿ ಹಿಡಿದವಳೇ, ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿದವಳೇ, ಕಮಲದಳದಂತೆ ವಿಶಾಲವಾದ ಕಣ್ಣುಳ್ಳವಳೇ, ಜಗತ್ತಿಗೆ ಪ್ರಿಯಳೇ, ಶ್ರೀವಿಷ್ಣುವಿನ ಮನಸ್ಸಿಗೆ ಅನುಕೂಲಳೇ, ನಿನ್ನ ಪಾದಕಮಲಗಳನ್ನು ನನ್ನ ಹೃದಯದಲ್ಲಿ ನೆಲೆಗೊಳಿಸು.',
          },
        },
        {
          n: 25,
          text: 'या सा पद्मासनस्था विपुलकटितटी पद्मपत्रायताक्षी ।\nगम्भीरावर्तनाभिः स्तनभरनमिता शुभ्रवस्त्रोत्तरीया ॥',
          meaning: {
            en: 'She who is seated on a lotus, broad of hip, with eyes long as lotus petals, with a deep navel, bowed by the fullness of her bosom, wearing a white upper garment (continued in the next verse).',
            kn: 'ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ವಿಶಾಲವಾದ ಸೊಂಟವುಳ್ಳ, ಕಮಲದಳದಂತೆ ನೀಳವಾದ ಕಣ್ಣುಳ್ಳ, ಆಳವಾದ ನಾಭಿಯುಳ್ಳ, ಸ್ತನಭಾರದಿಂದ ಬಾಗಿದ, ಬಿಳಿಯ ಉತ್ತರೀಯವನ್ನು ಧರಿಸಿದ ಆ ದೇವಿ (ಮುಂದಿನ ಶ್ಲೋಕದೊಂದಿಗೆ ಅರ್ಥ ಪೂರ್ಣವಾಗುತ್ತದೆ).',
          },
        },
        {
          n: 26,
          text: 'लक्ष्मीर्दिव्यैर्गजेन्द्रैर्मणिगणखचितैः स्नापिता हेमकुम्भैः ।\nनित्यं सा पद्महस्ता मम वसतु गृहे सर्वमाङ्गल्ययुक्ता ॥',
          meaning: {
            en: 'that Lakṣmī, bathed by celestial elephants from golden pots set with jewels, holding a lotus and endowed with every auspiciousness: may she dwell in my home for ever.',
            kn: 'ದಿವ್ಯ ಗಜರಾಜರು ರತ್ನಖಚಿತವಾದ ಚಿನ್ನದ ಕಲಶಗಳಿಂದ ಅಭಿಷೇಕ ಮಾಡುವ, ಕೈಯಲ್ಲಿ ಕಮಲ ಹಿಡಿದ, ಸಕಲ ಮಂಗಳಗಳಿಂದ ಕೂಡಿದ ಆ ಲಕ್ಷ್ಮೀದೇವಿಯು ನನ್ನ ಮನೆಯಲ್ಲಿ ಸದಾ ನೆಲೆಸಲಿ.',
          },
        },
        {
          n: 27,
          text: 'लक्ष्मीं क्षीरसमुद्रराजतनयां श्रीरङ्गधामेश्वरीम् ।\nदासीभूतसमस्तदेववनितां लोकैकदीपाङ्कुराम् ॥',
          meaning: {
            en: 'Lakṣmī, daughter of the king of the Ocean of Milk, queen of the abode of Śrīraṅga, whom all the goddesses serve as handmaids, the one flame that lights the worlds (continued in the next verse).',
            kn: 'ಕ್ಷೀರಸಮುದ್ರರಾಜನ ಮಗಳು, ಶ್ರೀರಂಗಧಾಮದ ಒಡತಿ, ಸಮಸ್ತ ದೇವಸ್ತ್ರೀಯರೂ ದಾಸಿಯರಂತೆ ಸೇವಿಸುವವಳು, ಲೋಕಗಳನ್ನು ಬೆಳಗುವ ಏಕೈಕ ದೀಪಜ್ಯೋತಿ ಆದ ಲಕ್ಷ್ಮೀದೇವಿಯನ್ನು (ಮುಂದಿನ ಶ್ಲೋಕದೊಂದಿಗೆ ಅರ್ಥ ಪೂರ್ಣವಾಗುತ್ತದೆ).',
          },
        },
        {
          n: 28,
          text: 'श्रीमन्मन्दकटाक्षलब्धविभवब्रह्मेन्द्रगङ्गाधराम् ।\nत्वां त्रैलोक्यकुटुम्बिनीं सरसिजां वन्दे मुकुन्दप्रियाम् ॥',
          meaning: {
            en: 'by whose gentle, gracious glance Brahmā, Indra and Śiva gained their glory; mother of the household of the three worlds, born of the lotus, beloved of Mukunda: you I worship.',
            kn: 'ಯಾರ ಮಂದವಾದ ಕೃಪಾಕಟಾಕ್ಷದಿಂದ ಬ್ರಹ್ಮ, ಇಂದ್ರ, ಶಿವರು ತಮ್ಮ ವೈಭವವನ್ನು ಪಡೆದರೋ, ಮೂರು ಲೋಕಗಳೆಂಬ ಕುಟುಂಬದ ತಾಯಿಯೂ, ಕಮಲದಲ್ಲಿ ಜನಿಸಿದವಳೂ, ಮುಕುಂದನ ಪ್ರಿಯೆಯೂ ಆದ ನಿನ್ನನ್ನು ನಾನು ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 29,
          text: 'सिद्धलक्ष्मीर्मोक्षलक्ष्मीर्जयलक्ष्मीः सरस्वती ।\nश्रीलक्ष्मीर्वरलक्ष्मीश्च प्रसन्ना मम सर्वदा ॥',
          meaning: {
            en: 'May Siddhi-Lakṣmī, Mokṣa-Lakṣmī, Jaya-Lakṣmī, Sarasvatī, Śrī-Lakṣmī and Vara-Lakṣmī be ever gracious to me.',
            kn: 'ಸಿದ್ಧಿಲಕ್ಷ್ಮಿ, ಮೋಕ್ಷಲಕ್ಷ್ಮಿ, ಜಯಲಕ್ಷ್ಮಿ, ಸರಸ್ವತಿ, ಶ್ರೀಲಕ್ಷ್ಮಿ ಮತ್ತು ವರಲಕ್ಷ್ಮಿ ನನಗೆ ಸದಾ ಪ್ರಸನ್ನರಾಗಿರಲಿ.',
          },
        },
        {
          n: 30,
          text: 'वराङ्कुशौ पाशमभीतिमुद्रां करैर्वहन्तीं कमलासनस्थाम् ।\nबालार्ककोटिप्रतिभां त्रिणेत्रां भजेऽहमाद्यां जगदीश्वरीं ताम् ॥',
          meaning: {
            en: 'I worship that primal Mistress of the universe, seated on a lotus, bearing in her hands the boon-gesture, the goad, the noose and the gesture of fearlessness, three-eyed and radiant as ten million rising suns.',
            kn: 'ವರಮುದ್ರೆ, ಅಂಕುಶ, ಪಾಶ, ಅಭಯಮುದ್ರೆಗಳನ್ನು ಕೈಗಳಲ್ಲಿ ಧರಿಸಿ, ಕಮಲಾಸನದಲ್ಲಿ ಕುಳಿತಿರುವ, ಕೋಟಿ ಉದಯಸೂರ್ಯರಂತೆ ಹೊಳೆಯುವ, ಮೂರು ಕಣ್ಣುಗಳುಳ್ಳ ಆದಿಶಕ್ತಿಯಾದ ಆ ಜಗದೀಶ್ವರಿಯನ್ನು ನಾನು ಭಜಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 31,
          text: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यम्बके देवि नारायणि नमोऽस्तु ते ॥',
          meaning: {
            en: 'O auspiciousness of all that is auspicious, O gracious one who fulfils every aim, O refuge of all, three-eyed Goddess, O Nārāyaṇī: salutations to you.',
            kn: 'ಎಲ್ಲ ಮಂಗಳಗಳಿಗೂ ಮಂಗಳಕರಳೇ, ಕಲ್ಯಾಣಸ್ವರೂಪಿಣಿಯೇ, ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಸಿದ್ಧಿಸುವವಳೇ, ಆಶ್ರಯದಾತೆಯೇ, ತ್ರ್ಯಂಬಕೆಯೇ, ನಾರಾಯಣಿಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 32,
          text: 'सरसिजनिलये सरोजहस्ते धवलतरांशुकगन्धमाल्यशोभे ।\nभगवति हरिवल्लभे मनोज्ञे त्रिभुवनभूतिकरि प्रसीद मह्यम् ॥',
          meaning: {
            en: 'O you who dwell in the lotus, lotus in hand, shining in the whitest garments, with sandal paste and garlands; O Bhagavatī, beloved of Hari, lovely one, bringer of prosperity to the three worlds: be gracious to me.',
            kn: 'ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿದವಳೇ, ಕೈಯಲ್ಲಿ ಕಮಲ ಹಿಡಿದವಳೇ, ಅತ್ಯಂತ ಬಿಳಿಯ ವಸ್ತ್ರ, ಗಂಧ, ಮಾಲೆಗಳಿಂದ ಶೋಭಿಸುವವಳೇ, ಭಗವತಿಯೇ, ಶ್ರೀಹರಿಯ ಪ್ರಿಯೆಯೇ, ಮನೋಹರಳೇ, ಮೂರು ಲೋಕಗಳಿಗೂ ಐಶ್ವರ್ಯವನ್ನು ಕೊಡುವವಳೇ, ನನ್ನ ಮೇಲೆ ಪ್ರಸನ್ನಳಾಗು.',
          },
        },
        {
          n: 33,
          text: 'विष्णुपत्नीं क्षमां देवीं माधवीं माधवप्रियाम् ।\nविष्णोः प्रियसखीं देवीं नमाम्यच्युतवल्लभाम् ॥',
          meaning: {
            en: 'I bow to the Goddess, consort of Viṣṇu, forbearing as the earth, Mādhavī, dear to Mādhava, the beloved companion of Viṣṇu, the darling of Acyuta.',
            kn: 'ಶ್ರೀವಿಷ್ಣುವಿನ ಪತ್ನಿಯೂ, ಭೂಮಿಯಂತೆ ಸಹನಶೀಲೆಯೂ, ಮಾಧವಿಯೂ, ಮಾಧವನ ಪ್ರಿಯೆಯೂ, ವಿಷ್ಣುವಿನ ಪ್ರಿಯಸಖಿಯೂ, ಅಚ್ಯುತನ ವಲ್ಲಭೆಯೂ ಆದ ದೇವಿಗೆ ನಾನು ನಮಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 34,
          text: 'महालक्ष्मी च विद्महे विष्णुपत्नी च धीमहि ।\nतन्नो लक्ष्मीः प्रचोदयात् ॥',
          meaning: {
            en: 'We know Mahālakṣmī; we meditate on the consort of Viṣṇu. May that Lakṣmī inspire and guide us.',
            kn: 'ಮಹಾಲಕ್ಷ್ಮಿಯನ್ನು ನಾವು ಅರಿಯುತ್ತೇವೆ; ವಿಷ್ಣುಪತ್ನಿಯನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಆ ಲಕ್ಷ್ಮೀದೇವಿಯು ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
        {
          n: 35,
          text: 'श्रीवर्चस्यमायुष्यमारोग्यमाविधात् पवमानं महीयते ।\nधनं धान्यं पशुं बहुपुत्रलाभं शतसंवत्सरं दीर्घमायुः ॥',
          meaning: {
            en: 'This hymn bestows the radiance of prosperity, long life and health, and the one who chants it is honoured. It brings wealth, grain, cattle, many children, and a long life of a hundred years.',
            kn: 'ಈ ಸೂಕ್ತವು ಶ್ರೀತೇಜಸ್ಸು, ಆಯುಷ್ಯ, ಆರೋಗ್ಯಗಳನ್ನು ಕೊಡುತ್ತದೆ; ಇದನ್ನು ಜಪಿಸುವವನು ಗೌರವವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಧನ, ಧಾನ್ಯ, ಪಶುಗಳು, ಅನೇಕ ಮಕ್ಕಳು ಮತ್ತು ನೂರು ವರ್ಷಗಳ ದೀರ್ಘಾಯುಷ್ಯವೂ ಲಭಿಸುತ್ತವೆ.',
          },
        },
        {
          n: 36,
          text: 'ऋणरोगादिदारिद्र्यपापक्षुदपमृत्यवः ।\nभयशोकमनस्तापा नश्यन्तु मम सर्वदा ॥',
          meaning: {
            en: 'May debt, disease, poverty, sin, hunger and untimely death, fear, sorrow and anguish of mind be destroyed for me for ever.',
            kn: 'ಸಾಲ, ರೋಗ, ದಾರಿದ್ರ್ಯ, ಪಾಪ, ಹಸಿವು, ಅಕಾಲಮೃತ್ಯು, ಭಯ, ಶೋಕ, ಮನಸ್ತಾಪಗಳು ನನ್ನಿಂದ ಸದಾ ದೂರವಾಗಲಿ.',
          },
        },
      ],
    },
  ],
};
