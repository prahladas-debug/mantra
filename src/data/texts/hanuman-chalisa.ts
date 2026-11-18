// Śrī Hanumān Cālīsā of Gosvāmī Tulasīdāsa (Awadhi). Collated Nov 2026; not
// yet checked line by line against a printed edition.
//
// Sources (independent digital witnesses):
//   A. Gita Press "Śrī Hanumān Cālīsā" (sanskrit/raw_etexts, misc-gp,
//      sri-hanumanchalisa.html): base text, in Tulasīdāsa's Awadhi spelling.
//   B. stotranidhi.com, Devanagari page (from the printed "Prabhāta Stotranidhi").
//   C. stotrasamhita/stotra-sangrahah (GitHub), HanumanChalisa.tex.
//
// B and C respell the Awadhi in Sanskrit fashion (गुण, यश, विमल, शरणा for
// गुन, जसु, बिमल, सरना). Those are spelling differences only; this file keeps
// the Gita Press (Awadhi) spelling throughout. Wording differences, resolved
// by majority:
//   dohā 1 मनु मुकुरु (A C) / मन मुकुर (B); सुधारि … चारि (A B) / सुधार … चार (C)
//   c.5 हाथ बज्र औ ध्वजा (A C) / औरु (B)
//   c.12 भरतहि सम भाई (A) / भरत सम (B C): A kept, as the caupāī needs 16 mātrās
//   c.17 लंकेस्वर भए (A C) / भय (B)
//   c.22 तुम रच्छक काहू को डर ना (all three; B writes डरना)
//   c.23 आपन तेज सम्हारो आपै (A C) / संहारो (B)
//   c.36 संकट कटै (A C) / हरै (B); c.21 आज्ञा बिनु (A B) / बिना (C)
// Kept from A where the others differ (Gita Press dialect forms):
//   c.26 संकट तें (A) / संकट से (B C)
//   c.28 सोइ अमित (A, and B as a variant) / तासु (B) / दासु (C)
//   c.39 हनुमान चलीसा (A) / चालीसा (B C)
// Nukta letters are written without the dot (बडाई, छुडावै, पढै), as in B: the
// app's transliteration into other scripts has no nukta.
// The 40 caupāīs are numbered; the dohās are not.
import type { Mantra } from '../types';

export const hanumanChalisa: Mantra = {
  id: 'hanuman-chalisa',
  title: 'श्री हनुमान चालीसा',
  titleEn: 'Sri Hanuman Chalisa',
  category: 'chalisa',
  deity: 'Śrī Hanumān',
  source: 'Gosvāmī Tulasīdāsa (Awadhi)',
  summary:
    'Tulasīdāsa’s forty caupāīs in praise of Hanumān, framed by dohās, written in Awadhi. They recall Hanumān’s strength and wisdom, his service to Rāma in the Rāmāyaṇa (finding Sītā, burning Laṅkā, bringing the herb that revived Lakṣmaṇa) and his power to remove fear, illness and trouble from those who remember him.',
  summaryKn:
    'ತುಲಸೀದಾಸರು ಅವಧೀ ಭಾಷೆಯಲ್ಲಿ ರಚಿಸಿದ, ದೋಹೆಗಳ ನಡುವೆ ಹೆಣೆದ ನಲವತ್ತು ಚೌಪಾಯಿಗಳ ಹನುಮಂತನ ಸ್ತುತಿ. ಹನುಮಂತನ ಬಲ, ಬುದ್ಧಿ, ರಾಮಾಯಣದಲ್ಲಿ ಶ್ರೀರಾಮನಿಗೆ ಸಲ್ಲಿಸಿದ ಸೇವೆ (ಸೀತೆಯನ್ನು ಹುಡುಕಿದ್ದು, ಲಂಕೆಯನ್ನು ಸುಟ್ಟಿದ್ದು, ಸಂಜೀವಿನಿಯನ್ನು ತಂದು ಲಕ್ಷ್ಮಣನನ್ನು ಬದುಕಿಸಿದ್ದು) ಹಾಗೂ ಸ್ಮರಿಸುವವರ ಭಯ, ರೋಗ, ಸಂಕಟಗಳನ್ನು ಪರಿಹರಿಸುವ ಅವನ ಶಕ್ತಿಯನ್ನು ಇದು ವರ್ಣಿಸುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening Dohas',
      verses: [
        {
          text: 'श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।\nबरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥',
          meaning: {
            en: 'Cleaning the mirror of my mind with the dust of my Guru’s lotus feet, I describe the spotless glory of the best of the Raghus, which grants the four fruits of life.',
            kn: 'ಶ್ರೀಗುರುವಿನ ಪಾದಕಮಲಗಳ ಧೂಳಿನಿಂದ ನನ್ನ ಮನಸ್ಸೆಂಬ ಕನ್ನಡಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸಿಕೊಂಡು, ಧರ್ಮ ಅರ್ಥ ಕಾಮ ಮೋಕ್ಷಗಳೆಂಬ ನಾಲ್ಕು ಫಲಗಳನ್ನು ಕೊಡುವ ರಘುವರನ ನಿರ್ಮಲ ಕೀರ್ತಿಯನ್ನು ವರ್ಣಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार ।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार ॥',
          meaning: {
            en: 'Knowing myself to be lacking in understanding, I remember you, son of the Wind. Grant me strength, wisdom and learning, and take away my troubles and faults.',
            kn: 'ನನ್ನನ್ನು ಬುದ್ಧಿಹೀನನೆಂದು ತಿಳಿದು ಪವನಕುಮಾರನಾದ ನಿನ್ನನ್ನು ಸ್ಮರಿಸುತ್ತೇನೆ. ನನಗೆ ಬಲ, ಬುದ್ಧಿ, ವಿದ್ಯೆಗಳನ್ನು ಕೊಡು; ನನ್ನ ಕ್ಲೇಶಗಳನ್ನೂ ದೋಷಗಳನ್ನೂ ಹೋಗಲಾಡಿಸು.',
          },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupais',
      verses: [
        {
          n: 1,
          text: 'जय हनुमान ज्ञान गुन सागर ।\nजय कपीस तिहुँ लोक उजागर ॥',
          meaning: {
            en: 'Victory to Hanumān, ocean of wisdom and virtue! Victory to the lord of the monkeys, who lights up the three worlds!',
            kn: 'ಜ್ಞಾನ ಗುಣಗಳ ಸಾಗರನಾದ ಹನುಮಂತನಿಗೆ ಜಯವಾಗಲಿ! ಮೂರು ಲೋಕಗಳನ್ನೂ ಬೆಳಗುವ ಕಪೀಶ್ವರನಿಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 2,
          text: 'राम दूत अतुलित बल धामा ।\nअंजनि-पुत्र पवनसुत नामा ॥',
          meaning: {
            en: 'You are Rāma’s messenger, the home of matchless strength, known as the son of Añjanā and the son of the Wind.',
            kn: 'ನೀನು ಶ್ರೀರಾಮನ ದೂತನು, ಹೋಲಿಕೆಯಿಲ್ಲದ ಬಲದ ನೆಲೆಯು; ಅಂಜನೀಪುತ್ರ, ಪವನಸುತ ಎಂಬ ಹೆಸರುಗಳಿಂದ ಪ್ರಸಿದ್ಧನು.',
          },
        },
        {
          n: 3,
          text: 'महाबीर बिक्रम बजरंगी ।\nकुमति निवार सुमति के संगी ॥',
          meaning: {
            en: 'Great hero, mighty one with a body hard as a thunderbolt, you drive away evil thoughts and are the companion of good sense.',
            kn: 'ಮಹಾವೀರನೇ, ಪರಾಕ್ರಮಿಯೇ, ವಜ್ರದಂತಹ ದೇಹವುಳ್ಳವನೇ, ನೀನು ದುರ್ಬುದ್ಧಿಯನ್ನು ದೂರಮಾಡಿ ಸದ್ಬುದ್ಧಿಗೆ ಜೊತೆಗಾರನಾಗುವೆ.',
          },
        },
        {
          n: 4,
          text: 'कंचन बरन बिराज सुबेसा ।\nकानन कुंडल कुंचित केसा ॥',
          meaning: {
            en: 'Golden in colour, you shine in fine attire, with earrings in your ears and curly hair.',
            kn: 'ಚಿನ್ನದ ಬಣ್ಣದವನಾಗಿ ಸುಂದರ ವೇಷದಲ್ಲಿ ಶೋಭಿಸುವೆ; ಕಿವಿಗಳಲ್ಲಿ ಕುಂಡಲಗಳು, ಗುಂಗುರು ಕೂದಲು ನಿನ್ನನ್ನು ಅಲಂಕರಿಸಿವೆ.',
          },
        },
        {
          n: 5,
          text: 'हाथ बज्र औ ध्वजा बिराजै ।\nकाँधे मूँज जनेऊ साजै ॥',
          meaning: {
            en: 'In your hands shine the thunderbolt-mace and the banner, and a sacred thread of muñja grass adorns your shoulder.',
            kn: 'ನಿನ್ನ ಕೈಗಳಲ್ಲಿ ವಜ್ರಾಯುಧವೂ ಧ್ವಜವೂ ಶೋಭಿಸುತ್ತವೆ; ಹೆಗಲ ಮೇಲೆ ಮುಂಜಿ ಹುಲ್ಲಿನ ಜನಿವಾರ ಒಪ್ಪುತ್ತದೆ.',
          },
        },
        {
          n: 6,
          text: 'संकर सुवन केसरीनंदन ।\nतेज प्रताप महा जग बंदन ॥',
          meaning: {
            en: 'Born of Śaṅkara’s grace, son of Kesarī, your radiance and might are great, and the whole world honours you.',
            kn: 'ಶಂಕರನ ಅಂಶದಿಂದ ಹುಟ್ಟಿದವನೇ, ಕೇಸರಿಯ ಮಗನೇ, ನಿನ್ನ ತೇಜಸ್ಸೂ ಪ್ರತಾಪವೂ ಮಹತ್ತರವಾದುವು; ಇಡೀ ಜಗತ್ತು ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 7,
          text: 'बिद्यावान गुनी अति चातुर ।\nराम काज करिबे को आतुर ॥',
          meaning: {
            en: 'Learned, virtuous and very wise, you are always eager to do Rāma’s work.',
            kn: 'ವಿದ್ಯಾವಂತನೂ ಗುಣಶಾಲಿಯೂ ಅತಿ ಚತುರನೂ ಆದ ನೀನು ಶ್ರೀರಾಮನ ಕಾರ್ಯವನ್ನು ಮಾಡಲು ಸದಾ ಉತ್ಸುಕನಾಗಿರುವೆ.',
          },
        },
        {
          n: 8,
          text: 'प्रभु चरित्र सुनिबे को रसिया ।\nराम लखन सीता मन बसिया ॥',
          meaning: {
            en: 'You delight in hearing the Lord’s story, and Rāma, Lakṣmaṇa and Sītā dwell in your heart.',
            kn: 'ಪ್ರಭುವಿನ ಚರಿತ್ರೆಯನ್ನು ಕೇಳುವುದರಲ್ಲಿ ನಿನಗೆ ಆನಂದ; ರಾಮ, ಲಕ್ಷ್ಮಣ, ಸೀತೆಯರು ನಿನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ನೆಲೆಸಿದ್ದಾರೆ.',
          },
        },
        {
          n: 9,
          text: 'सूक्ष्म रूप धरि सियहिं दिखावा ।\nबिकट रूप धरि लंक जरावा ॥',
          meaning: {
            en: 'Taking a tiny form you appeared before Sītā; taking a terrifying form you set Laṅkā on fire.',
            kn: 'ಸೂಕ್ಷ್ಮರೂಪವನ್ನು ಧರಿಸಿ ಸೀತೆಗೆ ಕಾಣಿಸಿಕೊಂಡೆ; ಭಯಂಕರ ರೂಪವನ್ನು ಧರಿಸಿ ಲಂಕೆಯನ್ನು ಸುಟ್ಟೆ.',
          },
        },
        {
          n: 10,
          text: 'भीम रूप धरि असुर सँहारे ।\nरामचंद्र के काज सँवारे ॥',
          meaning: {
            en: 'Taking a fearsome form you destroyed the demons and brought Rāmacandra’s tasks to success.',
            kn: 'ಭೀಮರೂಪವನ್ನು ಧರಿಸಿ ಅಸುರರನ್ನು ಸಂಹರಿಸಿದೆ; ಶ್ರೀರಾಮಚಂದ್ರನ ಕಾರ್ಯಗಳನ್ನು ಸಫಲಗೊಳಿಸಿದೆ.',
          },
        },
        {
          n: 11,
          text: 'लाय सजीवन लखन जियाये ।\nश्रीरघुबीर हरषि उर लाये ॥',
          meaning: {
            en: 'You brought the life-giving herb and revived Lakṣmaṇa, and the hero of the Raghus joyfully clasped you to his heart.',
            kn: 'ಸಂಜೀವಿನಿಯನ್ನು ತಂದು ಲಕ್ಷ್ಮಣನನ್ನು ಬದುಕಿಸಿದೆ; ಶ್ರೀರಘುವೀರನು ಹರ್ಷದಿಂದ ನಿನ್ನನ್ನು ಎದೆಗಪ್ಪಿಕೊಂಡನು.',
          },
        },
        {
          n: 12,
          text: 'रघुपति कीन्ही बहुत बडाई ।\nतुम मम प्रिय भरतहि सम भाई ॥',
          meaning: {
            en: 'The lord of the Raghus praised you greatly: "You are as dear to me as my brother Bharata."',
            kn: 'ರಘುಪತಿಯು ನಿನ್ನನ್ನು ಬಹಳವಾಗಿ ಹೊಗಳಿದನು: "ನೀನು ನನಗೆ ತಮ್ಮ ಭರತನಷ್ಟೇ ಪ್ರಿಯನು."',
          },
        },
        {
          n: 13,
          text: 'सहस बदन तुम्हरो जस गावैं ।\nअस कहि श्रीपति कंठ लगावैं ॥',
          meaning: {
            en: '"May the thousand-mouthed Śeṣa sing your glory," said the Lord of Śrī, and embraced you.',
            kn: '"ಸಾವಿರ ಮುಖಗಳ ಆದಿಶೇಷನು ನಿನ್ನ ಕೀರ್ತಿಯನ್ನು ಹಾಡಲಿ" ಎಂದು ಹೇಳಿ ಶ್ರೀಪತಿಯು ನಿನ್ನನ್ನು ಅಪ್ಪಿಕೊಂಡನು.',
          },
        },
        {
          n: 14,
          text: 'सनकादिक ब्रह्मादि मुनीसा ।\nनारद सारद सहित अहीसा ॥',
          meaning: {
            en: 'Sanaka and the other sages, Brahmā and the gods, the great seers, Nārada, Śāradā and the king of serpents…',
            kn: 'ಸನಕಾದಿ ಮುನಿಗಳು, ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳು, ಮಹರ್ಷಿಗಳು, ನಾರದರು, ಶಾರದೆ ಹಾಗೂ ಸರ್ಪರಾಜನಾದ ಆದಿಶೇಷನು…',
          },
        },
        {
          n: 15,
          text: 'जम कुबेर दिगपाल जहाँ ते ।\nकबि कोबिद कहि सके कहाँ ते ॥',
          meaning: {
            en: '…Yama, Kubera and the guardians of the directions cannot fully tell your glory; how then could poets and scholars?',
            kn: '…ಯಮ, ಕುಬೇರ, ದಿಕ್ಪಾಲಕರು ಕೂಡ ನಿನ್ನ ಮಹಿಮೆಯನ್ನು ಪೂರ್ತಿಯಾಗಿ ಹೇಳಲಾರರು; ಕವಿಗಳೂ ಪಂಡಿತರೂ ಹೇಗೆ ಹೇಳಿಯಾರು?',
          },
        },
        {
          n: 16,
          text: 'तुम उपकार सुग्रीवहिं कीन्हा ।\nराम मिलाय राज पद दीन्हा ॥',
          meaning: {
            en: 'You did Sugrīva a great service: you brought him to Rāma and so gave him back his throne.',
            kn: 'ನೀನು ಸುಗ್ರೀವನಿಗೆ ದೊಡ್ಡ ಉಪಕಾರ ಮಾಡಿದೆ; ಅವನನ್ನು ಶ್ರೀರಾಮನೊಡನೆ ಸೇರಿಸಿ ರಾಜಪದವಿಯನ್ನು ದೊರಕಿಸಿಕೊಟ್ಟೆ.',
          },
        },
        {
          n: 17,
          text: 'तुम्हरो मंत्र बिभीषन माना ।\nलंकेस्वर भए सब जग जाना ॥',
          meaning: {
            en: 'Vibhīṣaṇa followed your counsel and became king of Laṅkā, as the whole world knows.',
            kn: 'ವಿಭೀಷಣನು ನಿನ್ನ ಸಲಹೆಯನ್ನು ಪಾಲಿಸಿ ಲಂಕೇಶ್ವರನಾದನು; ಇದು ಜಗತ್ತಿಗೆಲ್ಲ ತಿಳಿದಿದೆ.',
          },
        },
        {
          n: 18,
          text: 'जुग सहस्र जोजन पर भानू ।\nलील्यो ताहि मधुर फल जानू ॥',
          meaning: {
            en: 'The sun, thousands of yojanas away, you swallowed, taking it for a sweet fruit.',
            kn: 'ಸಾವಿರಾರು ಯೋಜನಗಳ ದೂರದಲ್ಲಿರುವ ಸೂರ್ಯನನ್ನು ಸಿಹಿಯಾದ ಹಣ್ಣೆಂದು ತಿಳಿದು ನುಂಗಿಬಿಟ್ಟೆ.',
          },
        },
        {
          n: 19,
          text: 'प्रभु मुद्रिका मेलि मुख माहीं ।\nजलधि लाँघि गये अचरज नाहीं ॥',
          meaning: {
            en: 'Holding the Lord’s ring in your mouth you leapt across the ocean; no wonder at all for you.',
            kn: 'ಪ್ರಭುವಿನ ಉಂಗುರವನ್ನು ಬಾಯಲ್ಲಿಟ್ಟುಕೊಂಡು ಸಮುದ್ರವನ್ನು ದಾಟಿದೆ; ನಿನಗೆ ಇದು ಆಶ್ಚರ್ಯವೇನಲ್ಲ.',
          },
        },
        {
          n: 20,
          text: 'दुर्गम काज जगत के जेते ।\nसुगम अनुग्रह तुम्हरे तेते ॥',
          meaning: {
            en: 'Every hard task in the world becomes easy by your grace.',
            kn: 'ಜಗತ್ತಿನಲ್ಲಿ ಎಷ್ಟೆಲ್ಲ ಕಠಿಣ ಕಾರ್ಯಗಳಿವೆಯೋ ಅವೆಲ್ಲವೂ ನಿನ್ನ ಅನುಗ್ರಹದಿಂದ ಸುಲಭವಾಗುತ್ತವೆ.',
          },
        },
        {
          n: 21,
          text: 'राम दुआरे तुम रखवारे ।\nहोत न आज्ञा बिनु पैसारे ॥',
          meaning: {
            en: 'You guard Rāma’s door; no one may enter without your leave.',
            kn: 'ಶ್ರೀರಾಮನ ಬಾಗಿಲಿಗೆ ನೀನೇ ಕಾವಲುಗಾರ; ನಿನ್ನ ಅಪ್ಪಣೆಯಿಲ್ಲದೆ ಯಾರಿಗೂ ಒಳಗೆ ಪ್ರವೇಶವಿಲ್ಲ.',
          },
        },
        {
          n: 22,
          text: 'सब सुख लहै तुम्हारी सरना ।\nतुम रच्छक काहू को डर ना ॥',
          meaning: {
            en: 'Whoever takes refuge in you gains every happiness; with you as protector, there is nothing to fear.',
            kn: 'ನಿನ್ನಲ್ಲಿ ಶರಣಾದವನು ಎಲ್ಲ ಸುಖಗಳನ್ನೂ ಪಡೆಯುತ್ತಾನೆ; ನೀನು ರಕ್ಷಕನಾಗಿರುವಾಗ ಯಾರಿಗೂ ಭಯವಿಲ್ಲ.',
          },
        },
        {
          n: 23,
          text: 'आपन तेज सम्हारो आपै ।\nतीनों लोक हाँक तें काँपै ॥',
          meaning: {
            en: 'Only you can hold back your own might; at your roar the three worlds tremble.',
            kn: 'ನಿನ್ನ ತೇಜಸ್ಸನ್ನು ನೀನೇ ತಡೆದುಕೊಳ್ಳಬಲ್ಲೆ; ನಿನ್ನ ಗರ್ಜನೆಗೆ ಮೂರು ಲೋಕಗಳೂ ನಡುಗುತ್ತವೆ.',
          },
        },
        {
          n: 24,
          text: 'भूत पिसाच निकट नहिं आवै ।\nमहाबीर जब नाम सुनावै ॥',
          meaning: {
            en: 'Ghosts and evil spirits do not come near when one utters the name of the great hero.',
            kn: 'ಮಹಾವೀರನ ಹೆಸರನ್ನು ಉಚ್ಚರಿಸಿದಾಗ ಭೂತ ಪಿಶಾಚಿಗಳು ಹತ್ತಿರ ಸುಳಿಯುವುದಿಲ್ಲ.',
          },
        },
        {
          n: 25,
          text: 'नासै रोग हरै सब पीरा ।\nजपत निरंतर हनुमत बीरा ॥',
          meaning: {
            en: 'Disease is destroyed and every pain removed for one who constantly repeats the name of the hero Hanumān.',
            kn: 'ವೀರ ಹನುಮಂತನ ನಾಮವನ್ನು ನಿರಂತರವಾಗಿ ಜಪಿಸುವವನ ರೋಗಗಳು ನಾಶವಾಗುತ್ತವೆ, ಎಲ್ಲ ನೋವುಗಳೂ ದೂರವಾಗುತ್ತವೆ.',
          },
        },
        {
          n: 26,
          text: 'संकट तें हनुमान छुडावै ।\nमन क्रम बचन ध्यान जो लावै ॥',
          meaning: {
            en: 'Hanumān frees from distress anyone who fixes on him in thought, deed and word.',
            kn: 'ಮನಸ್ಸು, ಕರ್ಮ, ಮಾತುಗಳಿಂದ ತನ್ನನ್ನು ಧ್ಯಾನಿಸುವವನನ್ನು ಹನುಮಂತನು ಸಂಕಟಗಳಿಂದ ಬಿಡಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 27,
          text: 'सब पर राम तपस्वी राजा ।\nतिन के काज सकल तुम साजा ॥',
          meaning: {
            en: 'Rāma, the ascetic king, is above all; yet it was you who carried out all his tasks.',
            kn: 'ತಪಸ್ವಿ ರಾಜನಾದ ಶ್ರೀರಾಮನು ಎಲ್ಲರಿಗಿಂತ ಶ್ರೇಷ್ಠನು; ಅವನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನೂ ನೀನೇ ನೆರವೇರಿಸಿದೆ.',
          },
        },
        {
          n: 28,
          text: 'और मनोरथ जो कोइ लावै ।\nसोइ अमित जीवन फल पावै ॥',
          meaning: {
            en: 'And whoever comes to you with any wish receives its fruit in abundance in this life.',
            kn: 'ಯಾರು ಯಾವುದೇ ಬಯಕೆಯೊಡನೆ ನಿನ್ನ ಬಳಿಗೆ ಬರುತ್ತಾರೋ ಅವರು ಜೀವನದಲ್ಲಿ ಅಪಾರವಾದ ಫಲವನ್ನು ಪಡೆಯುತ್ತಾರೆ.',
          },
        },
        {
          n: 29,
          text: 'चारों जुग परताप तुम्हारा ।\nहै परसिद्ध जगत उजियारा ॥',
          meaning: {
            en: 'Your glory shines through all four ages; it is renowned and lights up the world.',
            kn: 'ನಾಲ್ಕು ಯುಗಗಳಲ್ಲೂ ನಿನ್ನ ಪ್ರತಾಪ ಪ್ರಸಿದ್ಧವಾಗಿದೆ; ಅದು ಜಗತ್ತನ್ನು ಬೆಳಗುತ್ತದೆ.',
          },
        },
        {
          n: 30,
          text: 'साधु संत के तुम रखवारे ।\nअसुर निकंदन राम दुलारे ॥',
          meaning: {
            en: 'You are the protector of holy men and saints, the destroyer of demons, the darling of Rāma.',
            kn: 'ಸಾಧುಸಂತರ ರಕ್ಷಕನು ನೀನು, ಅಸುರರನ್ನು ನಿರ್ಮೂಲಮಾಡುವವನು, ಶ್ರೀರಾಮನ ಮುದ್ದಿನವನು.',
          },
        },
        {
          n: 31,
          text: 'अष्ट सिद्धि नौ निधि के दाता ।\nअस बर दीन जानकी माता ॥',
          meaning: {
            en: 'Mother Jānakī granted you the boon of being the giver of the eight powers and the nine treasures.',
            kn: 'ಎಂಟು ಸಿದ್ಧಿಗಳನ್ನೂ ಒಂಬತ್ತು ನಿಧಿಗಳನ್ನೂ ಕೊಡುವವನಾಗು ಎಂದು ಜಾನಕೀಮಾತೆ ನಿನಗೆ ವರವಿತ್ತಳು.',
          },
        },
        {
          n: 32,
          text: 'राम रसायन तुम्हरे पासा ।\nसदा रहो रघुपति के दासा ॥',
          meaning: {
            en: 'You hold the elixir of Rāma’s name; may you remain for ever the servant of the lord of the Raghus.',
            kn: 'ರಾಮನಾಮವೆಂಬ ರಸಾಯನ ನಿನ್ನ ಬಳಿ ಇದೆ; ನೀನು ಸದಾ ರಘುಪತಿಯ ದಾಸನಾಗಿರುವೆ.',
          },
        },
        {
          n: 33,
          text: 'तुम्हरे भजन राम को पावै ।\nजनम जनम के दुख बिसरावै ॥',
          meaning: {
            en: 'Through devotion to you one reaches Rāma and forgets the sorrows of birth after birth.',
            kn: 'ನಿನ್ನ ಭಜನೆಯಿಂದ ಶ್ರೀರಾಮನನ್ನು ಪಡೆಯಬಹುದು; ಜನ್ಮಜನ್ಮಾಂತರಗಳ ದುಃಖವನ್ನು ಮರೆಯಬಹುದು.',
          },
        },
        {
          n: 34,
          text: 'अंत काल रघुबर पुर जाई ।\nजहाँ जन्म हरि-भक्त कहाई ॥',
          meaning: {
            en: 'At the end such a person goes to the city of the Raghu hero, and wherever born again, is known as a devotee of Hari.',
            kn: 'ಅಂತ್ಯಕಾಲದಲ್ಲಿ ಅವನು ರಘುವರನ ಧಾಮವನ್ನು ಸೇರುತ್ತಾನೆ; ಮತ್ತೆ ಎಲ್ಲಿ ಹುಟ್ಟಿದರೂ ಹರಿಭಕ್ತನೆಂದೇ ಕರೆಯಲ್ಪಡುತ್ತಾನೆ.',
          },
        },
        {
          n: 35,
          text: 'और देवता चित्त न धरई ।\nहनुमत सेइ सर्ब सुख करई ॥',
          meaning: {
            en: 'Even one who keeps no other deity in mind gains every happiness by serving Hanumān.',
            kn: 'ಬೇರೆ ದೇವತೆಗಳನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಧರಿಸದಿದ್ದರೂ, ಹನುಮಂತನ ಸೇವೆಯಿಂದಲೇ ಎಲ್ಲ ಸುಖಗಳನ್ನೂ ಪಡೆಯಬಹುದು.',
          },
        },
        {
          n: 36,
          text: 'संकट कटै मिटै सब पीरा ।\nजो सुमिरै हनुमत बलबीरा ॥',
          meaning: {
            en: 'Troubles are cut away and every pain is wiped out for one who remembers the mighty hero Hanumān.',
            kn: 'ಬಲಶಾಲಿಯಾದ ವೀರ ಹನುಮಂತನನ್ನು ಸ್ಮರಿಸುವವನ ಸಂಕಟಗಳು ಕಳೆಯುತ್ತವೆ, ಎಲ್ಲ ನೋವುಗಳೂ ಅಳಿಯುತ್ತವೆ.',
          },
        },
        {
          n: 37,
          text: 'जै जै जै हनुमान गोसाईं ।\nकृपा करहु गुरु देव की नाईं ॥',
          meaning: {
            en: 'Victory, victory, victory to you, Lord Hanumān! Be gracious to me as a divine Guru is.',
            kn: 'ಜಯ ಜಯ ಜಯ ಹನುಮಂತ ಸ್ವಾಮಿ! ಗುರುದೇವನಂತೆ ನನ್ನ ಮೇಲೆ ಕೃಪೆ ತೋರು.',
          },
        },
        {
          n: 38,
          text: 'जो सत बार पाठ कर कोई ।\nछूटहि बंदि महा सुख होई ॥',
          meaning: {
            en: 'Whoever recites this a hundred times is released from bondage and gains great happiness.',
            kn: 'ಇದನ್ನು ನೂರು ಬಾರಿ ಪಠಿಸುವವನು ಬಂಧನದಿಂದ ಬಿಡುಗಡೆ ಹೊಂದಿ ಮಹಾಸುಖವನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 39,
          text: 'जो यह पढै हनुमान चलीसा ।\nहोय सिद्धि साखी गौरीसा ॥',
          meaning: {
            en: 'Whoever reads this Hanumān Cālīsā attains success; Gaurī’s lord, Śiva, is witness to this.',
            kn: 'ಈ ಹನುಮಾನ್ ಚಾಲೀಸವನ್ನು ಓದುವವನಿಗೆ ಸಿದ್ಧಿ ದೊರೆಯುತ್ತದೆ; ಇದಕ್ಕೆ ಗೌರೀಪತಿಯಾದ ಶಿವನೇ ಸಾಕ್ಷಿ.',
          },
        },
        {
          n: 40,
          text: 'तुलसीदास सदा हरि चेरा ।\nकीजै नाथ हृदय महँ डेरा ॥',
          meaning: {
            en: 'Tulasīdāsa is for ever Hari’s servant. O Lord, make your dwelling in my heart.',
            kn: 'ತುಲಸೀದಾಸನು ಸದಾ ಹರಿಯ ಸೇವಕನು. ನಾಥಾ, ನನ್ನ ಹೃದಯದಲ್ಲಿ ನೆಲೆಸು.',
          },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing Doha',
      verses: [
        {
          text: 'पवनतनय संकट हरन मंगल मूरति रूप ।\nराम लखन सीता सहित हृदय बसहु सुर भूप ॥',
          meaning: {
            en: 'Son of the Wind, remover of troubles, embodiment of all that is auspicious: O king of the gods, dwell in my heart together with Rāma, Lakṣmaṇa and Sītā.',
            kn: 'ಪವನತನಯನೇ, ಸಂಕಟಹರನೇ, ಮಂಗಳಮೂರ್ತಿಯೇ, ದೇವತೆಗಳ ರಾಜನೇ, ರಾಮ ಲಕ್ಷ್ಮಣ ಸೀತೆಯರೊಡನೆ ನನ್ನ ಹೃದಯದಲ್ಲಿ ನೆಲೆಸು.',
          },
        },
      ],
    },
  ],
};
