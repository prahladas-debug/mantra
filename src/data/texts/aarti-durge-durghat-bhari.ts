/**
 * Durge Durghat Bhari, the Marathi Durga aarti sung in every Maharashtrian home during Navaratri and at Devi puja, in Devanagari. The third
 * stanza ends "नरहरि तल्लिन झाला", naming the poet Narahari.
 *
 * Collated Nov 2026 against two typed copies: shubhpanchang.com (S) and drikpanchang.com "Durga Mata Aarti" in Marathi (D). They agree apart
 * from spelling and one word-break: "अनाथनाथे" (S) / "अनाथ नाथे" (D), "त्रिभुवनभुवनी" (S) / "त्रिभुवन-भुवनी" (D). The refrain "जय देवी जय
 * देवी महिषासुरमथिनी । सुरवर ईश्वर वरदे तारक संजीवनी" is sung after every stanza and is given once, as the opening. Nukta letters are
 * written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiDurgeDurghatBhari: Mantra = {
  id: 'aarti-durge-durghat-bhari',
  title: 'दुर्गेदुर्घटभारीआरती',
  titleEn: 'Durge Durghat Bhari (Durga Aarti)',
  category: 'aarti',
  order: 9,
  deity: 'Śrī Durgā',
  source: 'Narahari (Marathi); the last stanza names Narahari',
  summary: 'The Marathi Durga aarti sung in Maharashtrian homes in Navaratri and at Devi puja. It calls the Mother the only refuge in a hard world, the slayer of Mahishasura and revivifier of the gods, beyond what the Vedas can say, who frees her devotees from the noose of birth and death; the poet Narahari says he is absorbed in her lotus feet.',
  summaryKn: 'ನವರಾತ್ರಿ ಮತ್ತು ದೇವೀ ಪೂಜೆಯಲ್ಲಿ ಮರಾಠಿ ಮನೆಗಳಲ್ಲಿ ಹಾಡುವ ದುರ್ಗೆಯ ಆರತಿ. ಕಠಿಣ ಸಂಸಾರದಲ್ಲಿ ತಾಯಿಯೇ ಏಕೈಕ ಆಶ್ರಯ, ಮಹಿಷಾಸುರ ಮರ್ದಿನಿ, ದೇವತೆಗಳಿಗೆ ಸಂಜೀವಿನಿ, ವೇದಗಳೂ ಹೇಳಲಾರದವಳು, ಭಕ್ತರ ಭವಪಾಶ ಕಳೆಯುವವಳು ಎನ್ನುತ್ತದೆ; ಕವಿ ನರಹರಿ ಅವಳ ಪಾದಕಮಲದಲ್ಲಿ ಲೀನನಾದೆನೆನ್ನುತ್ತಾನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain, sung after each stanza.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಹಾಡುವ ಪಲ್ಲವಿ.',
      verses: [
        {
          text: 'जय देवी जय देवी महिषासुरमथिनी ।\nसुरवर ईश्वर वरदे तारक संजीवनी ॥',
          meaning: { en: 'Victory, victory, Goddess, crusher of Mahishasura; giver of boons to the best of gods and to Ishvara, saviour and life-restorer.', kn: 'ದೇವಿಗೆ ಜಯ ಜಯ, ಮಹಿಷಾಸುರಮರ್ದಿನಿ; ಶ್ರೇಷ್ಠ ದೇವತೆಗಳಿಗೆ, ಈಶ್ವರನಿಗೆ ವರ ನೀಡುವವಳೇ, ರಕ್ಷಕಿ, ಸಂಜೀವಿನಿ.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'दुर्गे दुर्घट भारी तुजविण संसारी ।\nअनाथनाथे अंबे करुणा विस्तारी ॥\nवारी वारी जन्ममरणाते वारी ।\nहारी पडलो आता संकट निवारी ॥',
          meaning: { en: 'O Durga, without you life in the world is very hard. Mother, lord of the helpless, spread your compassion. Again and again ward off birth and death; I have fallen defeated, remove the trouble now.', kn: 'ದುರ್ಗೆ, ನೀನಿಲ್ಲದೆ ಸಂಸಾರ ಬಹಳ ಕಠಿಣ. ಅಂಬೆ, ಅನಾಥರ ನಾಥೆ, ಕರುಣೆಯನ್ನು ಹರಡು. ಜನ್ಮಮರಣವನ್ನು ಮತ್ತೆ ಮತ್ತೆ ತಡೆ; ಸೋತು ಬಿದ್ದಿದ್ದೇನೆ, ಈಗ ಸಂಕಟ ನಿವಾರಿಸು.' },
        },
        {
          n: 2,
          text: 'त्रिभुवनभुवनी पाहता तुज ऐसी नाही ।\nचारी श्रमले परंतु न बोलवे काही ॥\nसाही विवाद करिता पडले प्रवाही ।\nते तू भक्तांलागी पावसि लवलाही ॥',
          meaning: { en: 'Look through the worlds of the three worlds: there is none like you. The four Vedas grew weary and could say nothing. The six schools, arguing, were swept along; yet you come quickly to your devotees.', kn: 'ಮೂರು ಲೋಕಗಳ ಭವನಗಳಲ್ಲಿ ನೋಡಿದರೂ ನಿನ್ನಂಥವರು ಇಲ್ಲ. ನಾಲ್ಕು ವೇದಗಳು ಬಳಲಿದರೂ ಏನನ್ನೂ ಹೇಳಲಾಗಲಿಲ್ಲ. ಆರು ದರ್ಶನಗಳು ವಾದಿಸುತ್ತ ಪ್ರವಾಹದಲ್ಲಿ ಬಿದ್ದವು; ಆದರೂ ನೀನು ಭಕ್ತರಿಗೆ ಬೇಗ ಒಲಿಯುತ್ತೀಯೆ.' },
        },
        {
          n: 3,
          text: 'प्रसन्नवदने प्रसन्न होसी निजदासा ।\nक्लेशांपासुनि सोडवि तोडी भवपाशा ॥\nअंबे तुजवाचून कोण पुरविल आशा ।\nनरहरि तल्लिन झाला पदपंकजलेशा ॥',
          meaning: { en: 'Gracious-faced, you are pleased with your servant; free him from afflictions and cut the noose of worldly bondage. Mother, who but you can fulfil our hopes? Narahari is absorbed in a particle of your lotus feet.', kn: 'ಪ್ರಸನ್ನವದನೆ, ನಿನ್ನ ದಾಸನ ಮೇಲೆ ಪ್ರಸನ್ನಳಾಗುತ್ತೀಯೆ; ಕ್ಲೇಶಗಳಿಂದ ಬಿಡಿಸು, ಭವಪಾಶವನ್ನು ಕಡಿ. ಅಂಬೆ, ನೀನಲ್ಲದೆ ಯಾರು ಆಸೆಗಳನ್ನು ಈಡೇರಿಸುವರು? ನರಹರಿ ನಿನ್ನ ಪಾದಕಮಲದ ಕಣದಲ್ಲಿ ಲೀನನಾದ.' },
        },
      ],
    },
  ],
};
