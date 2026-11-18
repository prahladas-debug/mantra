/**
 * Śrī Bajaraṅga Bāṇa, attributed to Tulasīdāsa (Hindi/Awadhi), in Devanagari.
 *
 * Collated Nov 2026 against two typed copies of the widely printed text: shubhpanchang.com
 * "Bajrang Baan" (base, line by line) and navbharatlive.com "Shri Bajrang Baan" (the full text with the
 * opening and closing dohas). The two agree in every line (spelling only); amitray.com's copy of the opening doha
 * reads "विनय करैं … सिद्ध करें" (spelling). The authorship (Tulasidasa) is traditional and not certain.
 * The text has an opening doha, 35 chaupai couplets (the 35th is "धूप देय अरु जपै हमेशा …", joined on one
 * line in the copies) and a closing doha. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bajrangBaan: Mantra = {
  id: 'bajrang-baan',
  title: 'श्रीबजरंगबाण',
  titleEn: 'Sri Bajrang Baan',
  category: 'chalisa',
  order: 26,
  deity: 'Śrī Hanumān',
  source: 'Attributed to Tulasīdāsa (Hindi/Awadhi)',
  summary: 'A fervent Hindi prayer to Hanuman, written as an "arrow" shot against fear and trouble: it remembers his leap over the sea, his meeting with Surasa and Lankini, the burning of Lanka and the saving of Lakshmana, then pleads with him in the name of Rama to come at once and drive away spirits, enemies and sorrow. It ends with the promise to those who recite it with faith.',
  summaryKn: 'ಭಯ-ಕಷ್ಟಗಳ ವಿರುದ್ಧ ಬಿಡುವ “ಬಾಣ”ದಂತೆ ಹನುಮಂತನಿಗೆ ಹಿಂದಿಯಲ್ಲಿ ಮಾಡಿದ ತೀವ್ರ ಪ್ರಾರ್ಥನೆ: ಅವನ ಸಮುದ್ರೋಲ್ಲಂಘನ, ಸುರಸೆ-ಲಂಕಿಣಿಯರ ಭೇಟಿ, ಲಂಕಾದಹನ, ಲಕ್ಷ್ಮಣನ ರಕ್ಷಣೆ ನೆನಪಿಸಿ, ರಾಮನ ಹೆಸರಿನಲ್ಲಿ ಕೂಡಲೇ ಬಂದು ಭೂತ-ಶತ್ರು-ದುಃಖಗಳನ್ನು ಓಡಿಸು ಎಂದು ಬೇಡುತ್ತದೆ. ನಂಬಿಕೆಯಿಂದ ಪಠಿಸುವವರಿಗೆ ಅಭಯದೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'निश्चय प्रेम प्रतीति ते, बिनय करै सनमान ।\nतेहि के कारज सकल शुभ, सिद्ध करै हनुमान ॥',
          meaning: { en: 'Whoever, with firm love and faith, serves him with humility, all his tasks Hanuman brings to a good end.', kn: 'ದೃಢ ಪ್ರೇಮ ವಿಶ್ವಾಸದಿಂದ ವಿನಯದಿಂದ ಸೇವಿಸುವವನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನು ಹನುಮಂತ ಶುಭವಾಗಿ ಪೂರೈಸುತ್ತಾನೆ.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय हनुमन्त सन्त हितकारी ।\nसुनि लीजै प्रभु अरज हमारी ॥',
          meaning: { en: 'Victory to Hanuman, friend of saints: listen to our petition, Lord.', kn: 'ಸಂತರ ಹಿತಕಾರಿ ಹನುಮಂತನಿಗೆ ಜಯ; ಪ್ರಭುವೇ, ನಮ್ಮ ಅರಿಕೆ ಕೇಳು.' },
        },
        {
          n: 2,
          text: 'जन के काज विलम्ब न कीजै ।\nआतुर दौरि महा सुख दीजै ॥',
          meaning: { en: 'Do not delay in your servant\'s work; run and give great happiness.', kn: 'ಸೇವಕನ ಕೆಲಸದಲ್ಲಿ ವಿಳಂಬ ಮಾಡಬೇಡ; ಓಡಿ ಬಂದು ಮಹಾಸುಖ ಕೊಡು.' },
        },
        {
          n: 3,
          text: 'जैसे कूदि सिन्धु वहि पारा ।\nसुरसा बदन पैठि बिस्तारा ॥',
          meaning: { en: 'As you leapt across the sea and entered Surasa\'s widening mouth,', kn: 'ಸಮುದ್ರ ದಾಟಿ ಹಾರಿದಂತೆ, ಹಿಗ್ಗುತ್ತಿದ್ದ ಸುರಸೆಯ ಬಾಯಿಯಲ್ಲಿ ಪ್ರವೇಶಿಸಿದಂತೆ,' },
        },
        {
          n: 4,
          text: 'आगे जाय लंकिनी रोका ।\nमारेहु लात गई सुर लोका ॥',
          meaning: { en: 'and went on, stopped by Lankini, and kicked her so that she went to the world of the gods,', kn: 'ಮುಂದೆ ಹೋಗಿ ಲಂಕಿಣಿ ತಡೆದಾಗ ಒದ್ದು ಅವಳನ್ನು ದೇವಲೋಕಕ್ಕೆ ಕಳುಹಿಸಿದಂತೆ,' },
        },
        {
          n: 5,
          text: 'जाय विभीषण को सुख दीन्हा ।\nसीता निरखि परम पद लीन्हा ॥',
          meaning: { en: 'and went and gave Vibhishana comfort, and on seeing Sita reached the highest joy,', kn: 'ವಿಭೀಷಣನಿಗೆ ಹೋಗಿ ಸುಖ ಕೊಟ್ಟು, ಸೀತೆಯನ್ನು ಕಂಡು ಪರಮ ಆನಂದ ಪಡೆದಂತೆ,' },
        },
        {
          n: 6,
          text: 'बाग उजारि सिन्धु महं बोरा ।\nअति आतुर यम कातर तोरा ॥',
          meaning: { en: 'you uprooted the garden and drowned it in the sea, and in great haste struck terror even into Death,', kn: 'ಉದ್ಯಾನ ಕಿತ್ತು ಸಮುದ್ರದಲ್ಲಿ ಮುಳುಗಿಸಿ, ಬಹು ಆತುರದಿಂದ ಯಮನನ್ನೂ ಕಂಗೆಡಿಸಿದಂತೆ,' },
        },
        {
          n: 7,
          text: 'अक्षय कुमार मारि संहारा ।\nलूम लपेटि लंक को जारा ॥',
          meaning: { en: 'you killed Akshaya Kumar, and wrapping Lanka in your tail you burned it,', kn: 'ಅಕ್ಷಯಕುಮಾರನನ್ನು ಕೊಂದು, ಬಾಲ ಸುತ್ತಿ ಲಂಕೆಯನ್ನು ಸುಟ್ಟಂತೆ,' },
        },
        {
          n: 8,
          text: 'लाह समान लंक जरि गई ।\nजय जय धुनि सुर पुर महं भई ॥',
          meaning: { en: 'Lanka burned like lac, and cries of victory arose in the city of the gods,', kn: 'ಲಂಕೆ ಲಾಕ್ಷೆಯಂತೆ ಉರಿದು ಹೋಯಿತು; ದೇವಲೋಕದಲ್ಲಿ ಜಯಜಯಕಾರ ಮೊಳಗಿತು,' },
        },
        {
          n: 9,
          text: 'अब विलम्ब केहि कारण स्वामी ।\nकृपा करहुं उर अन्तर्यामी ॥',
          meaning: { en: 'now why delay, Lord? Show grace, dweller in the hearts of all.', kn: 'ಈಗ ಸ್ವಾಮಿ, ವಿಳಂಬ ಏಕೆ? ಅಂತರ್ಯಾಮಿಯೇ, ಕೃಪೆ ಮಾಡು.' },
        },
        {
          n: 10,
          text: 'जय जय लक्ष्मण प्राण के दाता ।\nआतुर होइ दुःख करहुं निपाता ॥',
          meaning: { en: 'Victory, victory to the giver of life to Lakshmana: quickly put an end to my sorrow.', kn: 'ಲಕ್ಷ್ಮಣನ ಪ್ರಾಣದಾತನಿಗೆ ಜಯ ಜಯ; ಬೇಗ ನನ್ನ ದುಃಖವನ್ನು ನಾಶಮಾಡು.' },
        },
        {
          n: 11,
          text: 'जय गिरिधर जय जय सुख सागर ।\nसुर समूह समरथ भटनागर ॥',
          meaning: { en: 'Victory to the lifter of the mountain, ocean of happiness, champion of the host of gods.', kn: 'ಗಿರಿಧರನಿಗೆ ಜಯ; ಸುಖಸಾಗರನಿಗೆ ಜಯ; ದೇವಸಮೂಹದ ಸಮರ್ಥ ವೀರನಿಗೆ ಜಯ.' },
        },
        {
          n: 12,
          text: 'ॐ हनु हनु हनु हनु हनुमन्त हठीले ।\nबैरिहिं मारू बज्र की कीले ॥',
          meaning: { en: 'Om, Hanu, Hanu, Hanu, stubborn Hanuman: strike the enemies with the nails of the thunderbolt.', kn: 'ಓಂ ಹನು ಹನು ಹನು ಹನುಮಂತ ಹಠಮಾರಿ; ಶತ್ರುಗಳನ್ನು ವಜ್ರದ ಮೊಳೆಗಳಿಂದ ಹೊಡೆ.' },
        },
        {
          n: 13,
          text: 'गदा बज्र लै बैरिहिं मारो ।\nमहाराज प्रभु दास उबारो ॥',
          meaning: { en: 'Take the mace and thunderbolt and kill the enemies; great Lord, rescue your servant.', kn: 'ಗದೆ, ವಜ್ರ ಹಿಡಿದು ಶತ್ರುಗಳನ್ನು ಕೊಲ್ಲು; ಮಹಾರಾಜ ಪ್ರಭುವೇ, ದಾಸನನ್ನು ಉದ್ಧರಿಸು.' },
        },
        {
          n: 14,
          text: 'ॐकार हुंकार महाप्रभु धावो ।\nबज्र गदा हनु विलम्ब न लावो ॥',
          meaning: { en: 'Great Lord of Omkara and Hunkara, run; do not delay with the thunderbolt and mace.', kn: 'ಓಂಕಾರ ಹುಂಕಾರ ಮಹಾಪ್ರಭುವೇ, ಓಡಿ ಬಾ; ವಜ್ರ-ಗದೆಯೊಂದಿಗೆ ವಿಳಂಬ ಮಾಡಬೇಡ.' },
        },
        {
          n: 15,
          text: 'ॐ ह्रीं ह्रीं ह्रीं हनुमन्त कपीसा ।\nॐ हुं हुं हुं हनु अरि उर शीशा ॥',
          meaning: { en: 'Om hrim hrim hrim, lord of the monkeys; om hum hum hum, strike the enemy on the chest and head.', kn: 'ಓಂ ಹ್ರೀಂ ಹ್ರೀಂ ಹ್ರೀಂ ಕಪೀಶ; ಓಂ ಹುಂ ಹುಂ ಹುಂ, ಶತ್ರುವಿನ ಎದೆ ಮತ್ತು ತಲೆಗೆ ಹೊಡೆ.' },
        },
        {
          n: 16,
          text: 'सत्य होउ हरि शपथ पायके ।\nरामदूत धरु मारु धाय के ॥',
          meaning: { en: 'Let it be true by the oath of Hari; messenger of Rama, run and kill.', kn: 'ಹರಿಯ ಶಪಥದಿಂದ ಸತ್ಯವಾಗಲಿ; ರಾಮದೂತನೇ, ಓಡಿ ಕೊಲ್ಲು.' },
        },
        {
          n: 17,
          text: 'जय जय जय हनुमन्त अगाधा ।\nदुःख पावत जन केहि अपराधा ॥',
          meaning: { en: 'Victory, victory, victory to the unfathomable Hanuman; for what fault does your servant suffer?', kn: 'ಅಗಾಧ ಹನುಮಂತನಿಗೆ ಜಯ ಜಯ ಜಯ; ದಾಸನು ಯಾವ ಅಪರಾಧಕ್ಕಾಗಿ ದುಃಖಪಡುತ್ತಾನೆ?' },
        },
        {
          n: 18,
          text: 'पूजा जप तप नेम अचारा ।\nनहिं जानत कछु दास तुम्हारा ॥',
          meaning: { en: 'Worship, japa, austerity, rules and conduct: your servant knows none of them.', kn: 'ಪೂಜೆ, ಜಪ, ತಪ, ನೇಮ, ಆಚಾರ; ನಿನ್ನ ದಾಸನಿಗೆ ಏನೂ ತಿಳಿಯದು.' },
        },
        {
          n: 19,
          text: 'वन उपवन मग गिरि गृह माहीं ।\nतुमरे बल हम डरपत नाहीं ॥',
          meaning: { en: 'In forest, garden, road, mountain or house, by your strength we have no fear.', kn: 'ವನ, ಉಪವನ, ದಾರಿ, ಬೆಟ್ಟ, ಮನೆ ಎಲ್ಲೆಡೆ ನಿನ್ನ ಬಲದಿಂದ ನಾವು ಹೆದರುವುದಿಲ್ಲ.' },
        },
        {
          n: 20,
          text: 'पाय परौं कर जोरि मनावों ।\nयह अवसर अब केहि गोहरावों ॥',
          meaning: { en: 'I fall at your feet with folded hands; whom else can I call at this time?', kn: 'ಕೈ ಜೋಡಿಸಿ ಪಾದಕ್ಕೆ ಬೀಳುತ್ತೇನೆ; ಈ ಹೊತ್ತಿನಲ್ಲಿ ಯಾರನ್ನು ಕರೆಯಲಿ?' },
        },
        {
          n: 21,
          text: 'जय अंजनि कुमार बलवन्ता ।\nशंकर सुवन धीर हनुमन्ता ॥',
          meaning: { en: 'Victory to Anjani\'s son, the strong, Shankara\'s son, the steady Hanuman.', kn: 'ಅಂಜನಿಕುಮಾರ, ಬಲವಂತ, ಶಂಕರಸುತ, ಧೀರ ಹನುಮಂತನಿಗೆ ಜಯ.' },
        },
        {
          n: 22,
          text: 'बदन कराल काल कुल घालक ।\nराम सहाय सदा प्रतिपालक ॥',
          meaning: { en: 'With a fearsome face, destroyer of the clan of Death, always the protector with Rama\'s help.', kn: 'ಭಯಂಕರ ಮುಖ, ಕಾಲಕುಲ ನಾಶಕ, ರಾಮನ ಸಹಾಯದಿಂದ ಸದಾ ಪ್ರತಿಪಾಲಕ.' },
        },
        {
          n: 23,
          text: 'भूत प्रेत पिशाच निशाचर ।\nअग्नि बैताल काल मारीमर ॥',
          meaning: { en: 'Ghosts, spirits, pishachas, night-roamers, fire, vetala, death, plague:', kn: 'ಭೂತ, ಪ್ರೇತ, ಪಿಶಾಚ, ನಿಶಾಚರ, ಅಗ್ನಿ, ಬೇತಾಳ, ಕಾಲ, ಮಾರಿಯ ಉಪದ್ರವ:' },
        },
        {
          n: 24,
          text: 'इन्हें मारु तोहि शपथ राम की ।\nराखु नाथ मरजाद नाम की ॥',
          meaning: { en: 'kill them, by Rama\'s oath; keep the honour of your name, Lord.', kn: 'ಇವರನ್ನು ಕೊಲ್ಲು, ರಾಮನ ಆಣೆ; ನಾಥನೇ, ನಿನ್ನ ಹೆಸರಿನ ಮರ್ಯಾದೆ ಕಾಯಿ.' },
        },
        {
          n: 25,
          text: 'जनकसुता हरि दास कहावो ।\nताकी शपथ विलम्ब न लावो ॥',
          meaning: { en: 'Janaka\'s daughter called you Hari\'s servant; by her oath, do not delay.', kn: 'ಜನಕಸುತೆ ನಿನ್ನನ್ನು ಹರಿಯ ದಾಸನೆಂದು ಕರೆದಳು; ಅವಳ ಆಣೆ, ವಿಳಂಬ ಮಾಡಬೇಡ.' },
        },
        {
          n: 26,
          text: 'जय जय जय धुनि होत अकाशा ।\nसुमिरत होत दुसह दुःख नाशा ॥',
          meaning: { en: 'Cries of victory sound in the sky; remembering you ends unbearable sorrow.', kn: 'ಆಕಾಶದಲ್ಲಿ ಜಯಜಯ ಧ್ವನಿ ಕೇಳುತ್ತದೆ; ಸ್ಮರಿಸಿದರೆ ಸಹಿಸಲಾಗದ ದುಃಖ ನಾಶವಾಗುತ್ತದೆ.' },
        },
        {
          n: 27,
          text: 'चरण शरण करि जोरि मनावों ।\nयहि अवसर अब केहि गोहरावों ॥',
          meaning: { en: 'I take refuge at your feet and pray with folded hands: whom else can I call at this time?', kn: 'ಚರಣ ಶರಣು, ಕೈ ಜೋಡಿಸಿ ಪ್ರಾರ್ಥಿಸುತ್ತೇನೆ; ಈ ಹೊತ್ತಿನಲ್ಲಿ ಇನ್ನಾರನ್ನು ಕರೆಯಲಿ?' },
        },
        {
          n: 28,
          text: 'उठु उठु चलु तोहिं राम दुहाई ।\nपांय परौं कर जोरि मनाई ॥',
          meaning: { en: 'Get up, get up, go; I swear by Rama; I fall at your feet with folded hands.', kn: 'ಏಳು ಏಳು, ಹೊರಡು; ರಾಮನ ಆಣೆ; ಕೈ ಜೋಡಿಸಿ ಪಾದಕ್ಕೆ ಬೀಳುತ್ತೇನೆ.' },
        },
        {
          n: 29,
          text: 'ॐ चं चं चं चं चपल चलन्ता ।\nॐ हनु हनु हनु हनु हनुमन्ता ॥',
          meaning: { en: 'Om chan chan chan chan, swift-moving Om hanu hanu hanu Hanuman.', kn: 'ಓಂ ಚಂ ಚಂ ಚಂ ಚಂ ಚಪಲ ಚಲನೆಯವನೇ; ಓಂ ಹನು ಹನು ಹನು ಹನುಮಂತ.' },
        },
        {
          n: 30,
          text: 'ॐ हं हं हांक देत कपि चञ्चल ।\nॐ सं सं सहम पराने खल दल ॥',
          meaning: { en: 'Om ham ham, the restless monkey roars; om sam sam, the wicked hosts flee in terror.', kn: 'ಓಂ ಹಂ ಹಂ ಕಪಿ ಗರ್ಜಿಸುತ್ತಾನೆ; ಓಂ ಸಂ ಸಂ ದುಷ್ಟ ದಳ ಭಯದಿಂದ ಓಡುತ್ತದೆ.' },
        },
        {
          n: 31,
          text: 'अपने जन को तुरत उबारो ।\nसुमिरत होय आनन्द हमारो ॥',
          meaning: { en: 'Quickly save your own people; remembering you brings us joy.', kn: 'ನಿನ್ನ ಜನರನ್ನು ಕೂಡಲೇ ಉಳಿಸು; ಸ್ಮರಿಸಿದರೆ ನಮಗೆ ಆನಂದ.' },
        },
        {
          n: 32,
          text: 'यहि बजरंग बाण जेहि मारो ।\nताहि कहो फिर कौन उबारो ॥',
          meaning: { en: 'Whom this Bajrang Baan strikes, who can then save him?', kn: 'ಈ ಬಜರಂಗ ಬಾಣ ಯಾರನ್ನು ಹೊಡೆಯುವುದೋ ಅವನನ್ನು ಬಳಿಕ ಯಾರು ಉಳಿಸುವರು?' },
        },
        {
          n: 33,
          text: 'पाठ करै बजरंग बाण की ।\nहनुमत रक्षा करै प्राण की ॥',
          meaning: { en: 'Whoever recites the Bajrang Baan, Hanuman protects his life.', kn: 'ಬಜರಂಗ ಬಾಣ ಪಠಿಸುವವನ ಪ್ರಾಣವನ್ನು ಹನುಮಂತ ಕಾಯುತ್ತಾನೆ.' },
        },
        {
          n: 34,
          text: 'यह बजरंग बाण जो जापै ।\nतेहि ते भूत प्रेत सब कांपे ॥',
          meaning: { en: 'Whoever repeats this Bajrang Baan, ghosts and spirits all tremble before him.', kn: 'ಈ ಬಜರಂಗ ಬಾಣ ಜಪಿಸುವವನನ್ನು ಕಂಡು ಭೂತ-ಪ್ರೇತಗಳೆಲ್ಲ ನಡುಗುತ್ತವೆ.' },
        },
        {
          n: 35,
          text: 'धूप देय अरु जपै हमेशा ।\nताके तन नहिं रहे कलेशा ॥',
          meaning: { en: 'Whoever offers incense and recites it always has no suffering in his body.', kn: 'ಧೂಪ ಹಾಕಿ ಸದಾ ಜಪಿಸುವವನ ದೇಹದಲ್ಲಿ ಕ್ಲೇಶ ಇರುವುದಿಲ್ಲ.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'प्रेम प्रतीतिहिं कपि भजै सदा धरै उर ध्यान ।\nतेहि के कारज सकल शुभ सिद्ध करै हनुमान ॥',
          meaning: { en: 'Whoever worships the monkey Lord with firm love and always keeps him in the heart in meditation, all his works become auspicious, and Hanuman brings them to success.', kn: 'ದೃಢ ಪ್ರೇಮದಿಂದ ಕಪಿಯನ್ನು ಭಜಿಸಿ ಸದಾ ಹೃದಯದಲ್ಲಿ ಧ್ಯಾನವಿಡುವವನ ಎಲ್ಲ ಕಾರ್ಯಗಳು ಶುಭವಾಗಿ ಹನುಮಂತನಿಂದ ಸಿದ್ಧಿಸುತ್ತವೆ.' },
        },
      ],
    },
  ],
};
