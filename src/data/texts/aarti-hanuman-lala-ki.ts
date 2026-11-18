/**
 * Aarti Kije Hanuman Lala Ki, Hindi (Braj/Awadhi mixed), in Devanagari. The closing stanza names "Tulasidasa Swami"; the aarti is
 * traditionally attributed to him, which is not proved.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com "Hanuman Aarti" (B) and shubhpanchang.com "Aarti Kije Hanuman
 * Lala Ki" (S); The two agree stanza by stanza; they differ in a few words and in
 * the order of the last two couplets. Choices: "दे बीरा" (B, S; "वीरा" in one printing of B) is the betel-roll sent as a token;
 * "आनि संजीवन" (S) against "लाये संजिवन" (B); "बसि बैकुंठ" (S) against "बसहिं बैकुंठ" (B); "बाईं भुजा" (B) and "बाएं भुजा" (S)
 * are the same; the order "जो हनुमानजी की आरती गावे" before "लंक विध्वंस किये रघुराई" follows B. The refrain "आरती कीजै हनुमान
 * लला की" is sung after every couplet and is given once, as the opening. Two couplets are given as one verse. Nukta letters are
 * written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiHanumanLalaKi: Mantra = {
  id: 'aarti-hanuman-lala-ki',
  title: 'आरती कीजै हनुमान लला की',
  titleEn: 'Aarti Kije Hanuman Lala Ki',
  category: 'aarti',
  order: 1,
  deity: 'Śrī Hanumān',
  source: 'Traditional Hindi aarti; the last stanza names Tulasīdāsa, which is the usual ascription',
  summary: 'The most sung aarti to Hanuman, usual after the Hanuman Chalisa on Tuesdays and Saturdays. It praises Anjani\'s son at whose strength the mountains shake and disease keeps away, recalls his burning of Lanka, the Sanjivani herb for Lakshmana and the killing of Ahiravana in Patala, and promises the highest abode to whoever sings it.',
  summaryKn: 'ಮಂಗಳವಾರ, ಶನಿವಾರ ಹನುಮಾನ್ ಚಾಲೀಸಾ ನಂತರ ಹೆಚ್ಚಾಗಿ ಹಾಡುವ ಹನುಮಂತನ ಆರತಿ. ಯಾರ ಬಲಕ್ಕೆ ಪರ್ವತಗಳೂ ನಡುಗುವುವೋ, ರೋಗದೋಷ ಹತ್ತಿರ ಸುಳಿಯುವುದಿಲ್ಲವೋ ಆ ಅಂಜನಿಪುತ್ರನನ್ನು ಹೊಗಳಿ, ಲಂಕಾದಹನ, ಲಕ್ಷ್ಮಣನಿಗಾಗಿ ಸಂಜೀವಿನಿ, ಪಾತಾಳದಲ್ಲಿ ಅಹಿರಾವಣನ ವಧೆಯನ್ನು ಸ್ಮರಿಸಿ, ಹಾಡುವವನಿಗೆ ಪರಮಪದ ಸಿಗುವುದೆನ್ನುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain, sung after each couplet.',
      noteKn: 'ಪ್ರತಿ ಜೋಡಿ ಸಾಲುಗಳ ನಂತರ ಹಾಡುವ ಪಲ್ಲವಿ.',
      verses: [
        {
          text: 'आरती कीजै हनुमान लला की ।\nदुष्ट दलन रघुनाथ कला की ॥',
          meaning: { en: 'Perform the aarti of Hanuman, the beloved child, the destroyer of the wicked, a ray of the power of Raghunatha.', kn: 'ಹನುಮಂತನ ಆರತಿ ಮಾಡಿ; ದುಷ್ಟರನ್ನು ಸಂಹರಿಸುವ, ರಘುನಾಥನ ಶಕ್ತಿಯ ಕಲೆಯಾದ ಪ್ರಿಯ ಬಾಲಕನಿಗೆ.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each verse the refrain is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'जाके बल से गिरवर काँपे ।\nरोग-दोष जाके निकट न झाँके ॥\nअंजनि पुत्र महा बलदाई ।\nसंतन के प्रभु सदा सहाई ॥',
          meaning: { en: 'At whose strength the great mountains tremble, and disease and fault do not even peep near him: Anjani\'s son, giver of great strength, always the helper of the saints.', kn: 'ಯಾರ ಬಲಕ್ಕೆ ದೊಡ್ಡ ಪರ್ವತಗಳು ನಡುಗುತ್ತವೆಯೋ, ರೋಗದೋಷಗಳು ಯಾರ ಬಳಿ ಇಣುಕುವುದೂ ಇಲ್ಲವೋ; ಮಹಾಬಲ ನೀಡುವ ಅಂಜನಿಪುತ್ರ, ಸಂತರಿಗೆ ಸದಾ ಸಹಾಯಕ.' },
        },
        {
          n: 2,
          text: 'दे बीरा रघुनाथ पठाए ।\nलंका जारि सिया सुधि लाये ॥\nलंका सो कोट समुद्र सी खाई ।\nजात पवनसुत बार न लाई ॥',
          meaning: { en: 'Raghunatha sent him with the betel-roll as his token; he burned Lanka and brought news of Sita. Lanka\'s fort with the sea for its moat: the wind\'s son crossed it without delay.', kn: 'ರಘುನಾಥ ವೀಳ್ಯದ ಗುರುತನ್ನು ಕೊಟ್ಟು ಕಳುಹಿಸಿದನು; ಅವನು ಲಂಕೆಯನ್ನು ಸುಟ್ಟು ಸೀತೆಯ ಸುದ್ದಿ ತಂದನು. ಸಮುದ್ರವೇ ಕಂದಕವಾದ ಲಂಕೆಯ ಕೋಟೆಯನ್ನು ವಾಯುಪುತ್ರ ತಡವಿಲ್ಲದೆ ದಾಟಿದನು.' },
        },
        {
          n: 3,
          text: 'लंका जारि असुर संहारे ।\nसियाराम जी के काज सँवारे ॥\nलक्ष्मण मुर्छित पड़े सकारे ।\nआनि संजीवन प्राण उबारे ॥',
          meaning: { en: 'Having burned Lanka he slew demons and set right the work of Sita and Rama. When Lakshmana lay unconscious at dawn, he brought the Sanjivani herb and saved his life.', kn: 'ಲಂಕೆಯನ್ನು ಸುಟ್ಟು ರಾಕ್ಷಸರನ್ನು ಸಂಹರಿಸಿ ಸೀತಾರಾಮರ ಕಾರ್ಯವನ್ನು ಸಾಧಿಸಿದನು. ಲಕ್ಷ್ಮಣ ಮುಂಜಾನೆ ಮೂರ್ಛೆ ಬಿದ್ದಾಗ ಸಂಜೀವಿನಿ ತಂದು ಪ್ರಾಣ ಉಳಿಸಿದನು.' },
        },
        {
          n: 4,
          text: 'पैठि पताल तोरि जमकारे ।\nअहिरावण की भुजा उखारे ॥\nबाईं भुजा असुर दल मारे ।\nदाहिने भुजा संतजन तारे ॥',
          meaning: { en: 'Entering Patala he broke Yama\'s snares and tore off Ahiravana\'s arms. With the left arm he struck down the demon host; with the right he rescues the saints.', kn: 'ಪಾತಾಳವನ್ನು ಹೊಕ್ಕು ಯಮಪಾಶಗಳನ್ನು ಮುರಿದು ಅಹಿರಾವಣನ ತೋಳುಗಳನ್ನು ಕಿತ್ತನು. ಎಡತೋಳಿನಿಂದ ರಾಕ್ಷಸ ಸೈನ್ಯವನ್ನು ಸಂಹರಿಸಿದನು; ಬಲತೋಳಿನಿಂದ ಸಂತರನ್ನು ಉದ್ಧರಿಸುತ್ತಾನೆ.' },
        },
        {
          n: 5,
          text: 'सुर-नर-मुनि जन आरती उतरें ।\nजय जय जय हनुमान उचारें ॥\nकंचन थार कपूर लौ छाई ।\nआरती करत अंजना माई ॥',
          meaning: { en: 'Gods, men and sages wave the lamp and cry "Victory, victory, victory, Hanuman!" On a golden plate the camphor flame glows as Mother Anjana herself performs the aarti.', kn: 'ದೇವತೆಗಳು, ಮನುಷ್ಯರು, ಮುನಿಗಳು ಆರತಿ ಬೆಳಗಿ "ಜಯ ಜಯ ಜಯ ಹನುಮಾನ್" ಎನ್ನುತ್ತಾರೆ. ಚಿನ್ನದ ತಟ್ಟೆಯಲ್ಲಿ ಕರ್ಪೂರದ ಜ್ವಾಲೆ ಬೆಳಗಲು ತಾಯಿ ಅಂಜನಾ ಆರತಿ ಮಾಡುತ್ತಾಳೆ.' },
        },
        {
          n: 6,
          text: 'जो हनुमानजी की आरती गावे ।\nबसि बैकुंठ परम पद पावे ॥\nलंक विध्वंस किये रघुराई ।\nतुलसीदास स्वामी कीर्ति गाई ॥',
          meaning: { en: 'Whoever sings the aarti of Hanuman dwells in Vaikuntha and gains the highest state. Raghurai had Lanka destroyed; Tulasidasa sings the glory of his master.', kn: 'ಹನುಮಂತನ ಆರತಿಯನ್ನು ಹಾಡುವವನು ವೈಕುಂಠದಲ್ಲಿ ನೆಲೆಸಿ ಪರಮಪದವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ರಘುರಾಯ ಲಂಕೆಯನ್ನು ಧ್ವಂಸ ಮಾಡಿದನು; ತುಲಸೀದಾಸ ಸ್ವಾಮಿಯ ಕೀರ್ತಿಯನ್ನು ಹಾಡಿದ.' },
        },
      ],
    },
  ],
};
