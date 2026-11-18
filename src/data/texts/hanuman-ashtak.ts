/**
 * Saṅkaṭamocana Hanumānāṣṭaka (Awadhi/Hindi), in Devanagari. Traditionally ascribed to Tulasīdāsa.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com "Sankatmochan Hanuman Ashtak" and
 * hindu-blog.com "Hanuman Ashtak lyrics in Hindi". They agree word for word (spelling aside: "भक्षी/भक्षि",
 * "तीनहुं/तीनहुँ", "द्रोण/द्रोन", "चाहिए/चाहिय"; the second spelling is kept except "भक्षि"). The Bhaktibharat copy omits
 * the refrain "को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो" after stanzas 2 to 8, which the other copy
 * and the printed texts give at the end of every stanza: the refrain is given in all eight. The closing doha
 * ("लाल देह लाली लसे …") is found in both copies. Nukta letters are written without the dot.
 * The ascription to Tulasidasa is traditional and is not certain. Meanings are original.
 */
import type { Mantra } from '../types';

export const hanumanAshtak: Mantra = {
  id: 'hanuman-ashtak',
  title: 'संकटमोचन हनुमानाष्टक',
  titleEn: 'Sankatmochan Hanuman Ashtak',
  category: 'chalisa',
  order: 23,
  deity: 'Śrī Hanumān',
  source: 'Ascribed to Tulasīdāsa (Awadhi/Hindi)',
  summary: 'Eight stanzas in Hindi, each ending in the refrain "Who in the world does not know, Hanuman, that your name is Sankatmochan, the remover of troubles?" They recall how he swallowed the sun, saved Sugriva, found Sita, brought the Sanjivani herb for Lakshmana, freed Rama and Lakshmana from the serpent noose, killed Ahiravana, and end by asking him to remove whatever trouble may be ours. Recited on Tuesdays and Saturdays, often after the Hanuman Chalisa.',
  summaryKn: 'ಹಿಂದಿಯ ಎಂಟು ಪದ್ಯಗಳು; ಪ್ರತಿಯೊಂದರ ಕೊನೆಯಲ್ಲಿ “ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?” ಎಂಬ ಪಲ್ಲವಿ. ಸೂರ್ಯನನ್ನು ನುಂಗಿದ್ದು, ಸುಗ್ರೀವನನ್ನು ಕಾಪಾಡಿದ್ದು, ಸೀತೆಯನ್ನು ಹುಡುಕಿದ್ದು, ಲಕ್ಷ್ಮಣನಿಗಾಗಿ ಸಂಜೀವಿನಿ ತಂದದ್ದು, ನಾಗಪಾಶದಿಂದ ರಾಮಲಕ್ಷ್ಮಣರನ್ನು ಬಿಡಿಸಿದ್ದು, ಅಹಿರಾವಣನನ್ನು ಕೊಂದದ್ದು ನೆನಪಿಸಿ, ನಮ್ಮ ಎಲ್ಲ ಸಂಕಟಗಳನ್ನು ಹರಿಸು ಎಂದು ಬೇಡುತ್ತದೆ. ಮಂಗಳವಾರ, ಶನಿವಾರಗಳಂದು, ಹನುಮಾನ್ ಚಾಲೀಸಾದ ನಂತರ ಹೆಚ್ಚಾಗಿ ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'अष्टक',
      titleEn: 'Ashtak',
      note: 'The eight stanzas.',
      noteKn: 'ಎಂಟು ಪದ್ಯಗಳು.',
      verses: [
        {
          n: 1,
          text: 'बाल समय रवि भक्षि लियो तब, तीनहुँ लोक भयो अँधियारो ।\nताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो ॥\nदेवन आनि करी बिनती तब, छाँड़ि दियो रवि कष्ट निवारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥',
          meaning: { en: 'In childhood you swallowed the sun, and the three worlds went dark; the world was terrified, for this trouble could be removed by no one. The gods came and prayed, and you released the sun and ended the distress. Who in the world does not know, Hanuman, that your name is Sankatmochan?', kn: 'ಬಾಲ್ಯದಲ್ಲಿ ನೀನು ಸೂರ್ಯನನ್ನು ನುಂಗಿದಾಗ ಮೂರು ಲೋಕಗಳು ಕತ್ತಲಾದವು; ಜಗತ್ತು ಭಯಗೊಂಡಿತು, ಈ ಸಂಕಟವನ್ನು ಯಾರಿಂದಲೂ ನೀಗಲಾಗಲಿಲ್ಲ. ದೇವತೆಗಳು ಬಂದು ಬೇಡಿದಾಗ ಸೂರ್ಯನನ್ನು ಬಿಟ್ಟು ಕಷ್ಟ ನೀಗಿಸಿದೆ. ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?' },
        },
        {
          n: 2,
          text: 'बालि की त्रास कपीस बसै गिरि, जात महाप्रभु पंथ निहारो ।\nचौंकि महामुनि साप दियो तब, चाहिय कौन बिचार बिचारो ॥\nकै द्विज रूप लिवाय महाप्रभु, सो तुम दास के सोक निवारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥',
          meaning: { en: 'In fear of Vali, the monkey king lived on the mountain and watched the road for the great Lord\'s coming. Startled, the great sage (Matanga) had once cursed Vali, which kept Sugriva safe there; what was he to do now? You took the form of a brahmin, brought the Lord there, and removed your servant\'s grief. Who in the world does not know, Hanuman, that your name is Sankatmochan?', kn: 'ವಾಲಿಯ ಭಯದಿಂದ ಕಪಿರಾಜ ಬೆಟ್ಟದಲ್ಲಿ ವಾಸಿಸುತ್ತ ಮಹಾಪ್ರಭುವಿನ ದಾರಿ ಕಾಯುತ್ತಿದ್ದ. ಮಹಾಮುನಿ ಬೆಚ್ಚಿ ಶಾಪ ಕೊಟ್ಟಿದ್ದರು; ಏನು ಯೋಚಿಸಬೇಕು? ನೀನು ಬ್ರಾಹ್ಮಣ ರೂಪ ಧರಿಸಿ ಮಹಾಪ್ರಭುವನ್ನು ಕರೆತಂದು ದಾಸನ ದುಃಖ ನೀಗಿಸಿದೆ. ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?' },
        },
        {
          n: 3,
          text: 'अंगद के संग लेन गये सिय, खोज कपीस यह बैन उचारो ।\nजीवत ना बचिहौ हम सो जु, बिना सुधि लाए इहाँ पगु धारो ॥\nहेरि थके तट सिंधु सबै तब, लाय सिया सुधि प्रान उबारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥',
          meaning: { en: 'The monkey king said to those who went with Angada to search for Sita: "If you return here without news you will not survive." All were tired of searching at the shore of the ocean; then you brought news of Sita and saved their lives. Who in the world does not know, Hanuman, that your name is Sankatmochan?', kn: 'ಅಂಗದನ ಜೊತೆ ಸೀತೆಯನ್ನು ಹುಡುಕಲು ಹೋದವರಿಗೆ ಕಪಿರಾಜ: “ಸುದ್ದಿ ತರದೆ ಇಲ್ಲಿಗೆ ಬಂದರೆ ಬದುಕುಳಿಯಲಾರಿರಿ” ಎಂದು ಹೇಳಿದ. ಸಮುದ್ರತೀರದಲ್ಲಿ ಎಲ್ಲರೂ ಹುಡುಕಿ ದಣಿದರು; ಆಗ ನೀನು ಸೀತೆಯ ಸುದ್ದಿ ತಂದು ಪ್ರಾಣ ಉಳಿಸಿದೆ. ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?' },
        },
        {
          n: 4,
          text: 'रावन त्रास दई सिय को सब, राक्षसि सों कहि सोक निवारो ।\nताहि समय हनुमान महाप्रभु, जाय महा रजनीचर मारो ॥\nचाहत सीय असोक सों आगिसु, दै प्रभु मुद्रिका सोक निवारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥',
          meaning: { en: 'Ravana tormented Sita through the demonesses, who made her weep; at that time you, great Hanuman, went and killed the great night-wanderers. Sita asked the Ashoka tree for fire; you gave her the Lord\'s ring and ended her grief. Who in the world does not know, Hanuman, that your name is Sankatmochan?', kn: 'ರಾವಣನು ರಾಕ್ಷಸಿಯರ ಮೂಲಕ ಸೀತೆಯನ್ನು ಹಿಂಸಿಸಿದ್ದ; ಆಗ ಮಹಾಪ್ರಭು ಹನುಮಂತ, ನೀನು ಹೋಗಿ ಮಹಾ ರಾಕ್ಷಸರನ್ನು ಕೊಂದೆ. ಸೀತೆ ಅಶೋಕ ವೃಕ್ಷದಿಂದ ಬೆಂಕಿ ಬೇಡಿದಾಗ ನೀನು ಪ್ರಭುವಿನ ಉಂಗುರ ಕೊಟ್ಟು ಅವಳ ದುಃಖ ನೀಗಿಸಿದೆ. ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?' },
        },
        {
          n: 5,
          text: 'बान लग्यो उर लछिमन के तब, प्रान तजे सुत रावन मारो ।\nलै गृह वैद्य सुषेन समेत, तबै गिरि द्रोन सुबीर उपारो ॥\nआनि सजीवन हाथ दई तब, लछिमन के तुम प्रान उबारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥',
          meaning: { en: 'When Ravana\'s son\'s arrow struck Lakshmana\'s chest and he gave up his breath, you took the physician Sushena with his house, and tore up the Drona mountain; bringing the Sanjivani herb you gave it into his hand and saved Lakshmana\'s life. Who in the world does not know, Hanuman, that your name is Sankatmochan?', kn: 'ರಾವಣನ ಮಗನ ಬಾಣ ಲಕ್ಷ್ಮಣನ ಎದೆಗೆ ತಾಗಿ ಅವನು ಪ್ರಾಣ ತ್ಯಜಿಸಿದಾಗ, ನೀನು ವೈದ್ಯ ಸುಷೇಣನನ್ನು ಮನೆ ಸಹಿತ ಕರೆತಂದು, ದ್ರೋಣ ಪರ್ವತವನ್ನೇ ಕಿತ್ತೆ; ಸಂಜೀವಿನಿ ತಂದು ಕೈಯಲ್ಲಿ ಕೊಟ್ಟು ಲಕ್ಷ್ಮಣನ ಪ್ರಾಣ ಉಳಿಸಿದೆ. ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?' },
        },
        {
          n: 6,
          text: 'रावन जुद्ध अजान कियो तब, नाग कि फाँस सबै सिर डारो ।\nश्री रघुनाथ समेत सबै दल, मोह भयो यह संकट भारो ॥\nआनि खगेस तबै हनुमान जु, बंधन काटि सुत्रास निवारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥',
          meaning: { en: 'Then Ravana waged war unseen, and threw the serpent noose over all heads; the whole army with Sri Raghunatha fell into a stupor, a great trouble. Hanuman, you brought Garuda, the king of birds, cut the bonds and removed the great terror. Who in the world does not know, Hanuman, that your name is Sankatmochan?', kn: 'ಆಗ ರಾವಣ ಕಾಣದಂತೆ ಯುದ್ಧ ಮಾಡಿ ಎಲ್ಲರ ತಲೆಗೆ ನಾಗಪಾಶ ಹಾಕಿದ; ಶ್ರೀ ರಘುನಾಥನ ಸಹಿತ ಇಡೀ ಸೇನೆ ಮೂರ್ಛೆಗೊಂಡಿತು, ಇದು ದೊಡ್ಡ ಸಂಕಟ. ಹನುಮಂತ, ನೀನು ಪಕ್ಷಿರಾಜ ಗರುಡನನ್ನು ಕರೆತಂದು ಬಂಧನ ಕತ್ತರಿಸಿ ಮಹಾಭಯ ನೀಗಿಸಿದೆ. ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?' },
        },
        {
          n: 7,
          text: 'बंधु समेत जबै अहिरावन, लै रघुनाथ पताल सिधारो ।\nदेवहिं पूजि भली बिधि सों बलि, देउ सबै मिलि मंत्र विचारो ॥\nजाय सहाय भयो तब ही, अहिरावन सैन्य समेत संहारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥',
          meaning: { en: 'When Ahiravana took Raghunatha with his brother to Patala and the demons agreed together to offer them as a sacrifice to the goddess, you went to their aid then and destroyed Ahiravana with his army. Who in the world does not know, Hanuman, that your name is Sankatmochan?', kn: 'ಅಹಿರಾವಣ ಅಣ್ಣ-ತಮ್ಮರಾದ ರಘುನಾಥರನ್ನು ಪಾತಾಳಕ್ಕೆ ಕೊಂಡೊಯ್ದು, ದೇವಿಗೆ ಬಲಿ ಕೊಡಲು ಎಲ್ಲರೂ ಸೇರಿ ಯೋಜಿಸಿದಾಗ, ನೀನು ಅಲ್ಲಿಗೆ ಹೋಗಿ ಸಹಾಯ ಮಾಡಿ ಅಹಿರಾವಣನನ್ನು ಸೇನೆ ಸಹಿತ ಸಂಹರಿಸಿದೆ. ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?' },
        },
        {
          n: 8,
          text: 'काज किये बड़ देवन के तुम, बीर महाप्रभु देखि बिचारो ।\nकौन सो संकट मोर गरीब को, जो तुमसों नहिं जात है टारो ॥\nबेगि हरो हनुमान महाप्रभु, जो कछु संकट होय हमारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥',
          meaning: { en: 'You have done great deeds for the gods; great hero, consider: what trouble of mine, a poor man, is there that you cannot remove? Quickly remove, Hanuman, great Lord, whatever trouble may be ours. Who in the world does not know, Hanuman, that your name is Sankatmochan?', kn: 'ದೇವತೆಗಳ ದೊಡ್ಡ ಕಾರ್ಯಗಳನ್ನು ನೀನು ಮಾಡಿದ್ದೀಯೆ; ವೀರ ಮಹಾಪ್ರಭುವೇ, ಯೋಚಿಸು: ನಿನ್ನಿಂದ ನೀಗಲಾಗದ ಯಾವ ಸಂಕಟ ನನ್ನ ಬಡವನಿಗಿದೆ? ಹನುಮಂತ, ನಮಗೆ ಏನೇ ಸಂಕಟ ಇದ್ದರೂ ಬೇಗ ಹರಿಸು. ಹನುಮಂತ, ನಿನ್ನ ಹೆಸರು ಸಂಕಟಮೋಚನ ಎಂದು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೆ ತಿಳಿಯದು?' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Doha',
      note: 'The closing doha.',
      noteKn: 'ಮುಕ್ತಾಯದ ದೋಹಾ.',
      verses: [
        {
          text: 'लाल देह लाली लसे, अरु धरि लाल लंगूर ।\nबज्र देह दानव दलन, जय जय जय कपि सूर ॥',
          meaning: { en: 'Red body, shining in red, with a red tail; with a body hard as the thunderbolt, destroyer of demons: victory, victory, victory to the heroic monkey.', kn: 'ಕೆಂಪು ದೇಹ, ಕೆಂಪಾಗಿ ಹೊಳೆಯುವ, ಕೆಂಪು ಬಾಲ ಹೊತ್ತವನೇ, ವಜ್ರದೇಹಿ, ದಾನವರನ್ನು ಸಂಹರಿಸುವ ಶೂರ ಕಪಿಗೆ ಜಯ ಜಯ ಜಯ.' },
        },
      ],
    },
  ],
};
