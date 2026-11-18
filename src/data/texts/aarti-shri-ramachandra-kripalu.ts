/**
 * Shri Ramachandra Kripalu Bhaju Mana, the Ram Stuti of Tulasidasa (1532-1623), in Devanagari (Awadhi). Stanzas 1-5 are the hymn from the
 * Vinaya Patrika; stanzas 6-7 and the closing Soratha are taken from the Ramacaritamanasa, Balakanda (Gauri's blessing to Sita), and are
 * sung with it by tradition.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com "Shri Ram Stuti" (B) and shubhpanchang.com "Shri Ramchandra Kripalu"
 * (S). Choices: "नौमि" (S) against "नोमि" (B); "मनु जाहिं राचेउ मिलिहि सो बरु" (S, the Manasa reading) against "मन जाहि राच्यो मिलहि
 * सो वर" (B); "करुना निधान सुजान सीलु सनेहु जानत रावरो" (S) against "शील स्नेह" (B); "एहि भांति गौरि असीस सुनि सिय सहित हियं हरषीं
 * अली" (S) against "हिय हरषित अली" (B); "पूजि" (S) against "पूजी" (B). The first couplet is sung twice; it is given once.
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiShriRamachandraKripalu: Mantra = {
  id: 'aarti-shri-ramachandra-kripalu',
  title: 'श्रीरामचन्द्र कृपालु भजु मन',
  titleEn: 'Shri Ramachandra Kripalu Bhaju Mana (Ram Stuti)',
  category: 'aarti',
  order: 6,
  deity: 'Śrī Rāma',
  source: 'Tulasīdāsa (1532–1623), Vinaya Patrikā (stanzas 1–5) and Rāmacaritamānasa, Bālakāṇḍa (stanzas 6–7 and the Sorathā)',
  summary: 'Tulasidasa\'s famous hymn to Rama, sung at Rama Navami and at the end of Sundarakanda recitals. It calls the mind to worship the merciful Ramachandra, whose eyes, face, hands and feet are lotuses, who is dark like a fresh cloud and clad in yellow, the destroyer of demons and friend of the lowly; it ends with Gauri\'s blessing to Sita and the joy of the Janaki wedding.',
  summaryKn: 'ರಾಮನವಮಿ ಮತ್ತು ಸುಂದರಕಾಂಡ ಪಾರಾಯಣದ ಕೊನೆಯಲ್ಲಿ ಹಾಡುವ ತುಲಸೀದಾಸರ ಪ್ರಸಿದ್ಧ ರಾಮಸ್ತುತಿ. ಕಣ್ಣು, ಮುಖ, ಕೈ, ಪಾದ ಕಮಲಗಳಂತಿರುವ, ಹೊಸ ಮೇಘದಂತೆ ನೀಲ, ಪೀತಾಂಬರಧಾರಿ, ದೈತ್ಯಸಂಹಾರಿ, ದೀನಬಂಧುವಾದ ಕೃಪಾಳು ರಾಮಚಂದ್ರನನ್ನು ಭಜಿಸೆಂದು ಮನಸ್ಸಿಗೆ ಹೇಳಿ, ಗೌರಿಯ ಆಶೀರ್ವಾದ ಮತ್ತು ಸೀತೆಯ ಸಂತೋಷದಲ್ಲಿ ಮುಗಿಸುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'स्तुतिः',
      titleEn: 'The hymn',
      verses: [
        {
          n: 1,
          text: 'श्री रामचन्द्र कृपालु भजु मन, हरण भवभय दारुणं ।\nनव कंज लोचन, कंज मुख, कर कंज, पद कंजारुणं ॥',
          meaning: { en: 'O mind, worship the merciful Sri Ramachandra, who removes the dreadful fear of worldly existence: his eyes are fresh lotuses, his face a lotus, his hands lotuses and his feet red lotuses.', kn: 'ಮನವೇ, ಭವಭಯದ ದಾರುಣತೆಯನ್ನು ಹರಿಸುವ ಕೃಪಾಳು ಶ್ರೀ ರಾಮಚಂದ್ರನನ್ನು ಭಜಿಸು: ಅವನ ಕಣ್ಣು ಹೊಸ ಕಮಲ, ಮುಖ ಕಮಲ, ಕೈ ಕಮಲ, ಪಾದ ಕೆಂದಾವರೆ.' },
        },
        {
          n: 2,
          text: 'कंदर्प अगणित अमित छवि, नव नील नीरद सुंदरं ।\nपट पीत मानहुं तडित रुचि शुचि, नौमि जनक सुतावरं ॥',
          meaning: { en: 'His beauty outshines countless gods of love, lovely as a fresh dark rain-cloud; his yellow garment shines like lightning. I bow to the husband of Janaka\'s daughter.', kn: 'ಲೆಕ್ಕವಿಲ್ಲದ ಮನ್ಮಥರನ್ನೂ ಮೀರಿದ ಸೌಂದರ್ಯ, ಹೊಸ ನೀಲಮೇಘದಂತೆ ಸುಂದರ; ಪೀತಾಂಬರ ಮಿಂಚಿನ ಕಾಂತಿಯಂತೆ ಶುದ್ಧ. ಜನಕಪುತ್ರಿಯ ಪತಿಗೆ ನಮಿಸುತ್ತೇನೆ.' },
        },
        {
          n: 3,
          text: 'भजु दीनबंधु दिनेश दानव, दैत्य वंश निकंदनं ।\nरघुनंद आनंद कंद कोशल, चंद दशरथ नंदनं ॥',
          meaning: { en: 'Worship the friend of the lowly, the sun, uprooter of the race of demons and daityas: Raghu\'s joy, source of bliss, moon of Kosala, Dasharatha\'s son.', kn: 'ದೀನಬಂಧು, ಸೂರ್ಯನಂತೆ ತೇಜಸ್ವಿ, ದಾನವ ದೈತ್ಯ ವಂಶವನ್ನು ಬೇರುಸಹಿತ ಕಿತ್ತವನನ್ನು ಭಜಿಸು: ರಘುವಂಶದ ಆನಂದ, ಆನಂದದ ಮೂಲ, ಕೋಸಲದ ಚಂದ್ರ, ದಶರಥನಂದನ.' },
        },
        {
          n: 4,
          text: 'सिर मुकुट कुंडल तिलक चारु, उदारु अंग विभूषणं ।\nआजानुभुज शर चाप धर, संग्राम जित खरदूषणं ॥',
          meaning: { en: 'A crown on his head, earrings, a beautiful mark on the brow, and noble ornaments on his limbs; arms reaching to the knees, bearing bow and arrow, conqueror of Khara and Dushana in battle.', kn: 'ತಲೆಯಲ್ಲಿ ಕಿರೀಟ, ಕುಂಡಲ, ಸುಂದರ ತಿಲಕ, ಅಂಗಾಂಗಗಳಲ್ಲಿ ಉದಾರ ಆಭರಣಗಳು; ಮೊಳಕಾಲವರೆಗೆ ತಲುಪುವ ತೋಳುಗಳು, ಬಿಲ್ಲುಬಾಣ ಧರಿಸಿ ಖರದೂಷಣರನ್ನು ಯುದ್ಧದಲ್ಲಿ ಗೆದ್ದವನು.' },
        },
        {
          n: 5,
          text: 'इति वदति तुलसीदास शंकर, शेष मुनि मन रंजनं ।\nमम हृदय कंज निवास कुरु, कामादि खल दल गंजनं ॥',
          meaning: { en: 'So says Tulasidasa: delighter of the minds of Shankara, Shesha and the sages, make your home in the lotus of my heart and crush the wicked host of desire and the rest.', kn: 'ತುಲಸೀದಾಸ ಹೀಗೆ ಹೇಳುತ್ತಾನೆ: ಶಂಕರ, ಶೇಷ, ಮುನಿಗಳ ಮನಸ್ಸನ್ನು ರಂಜಿಸುವವನೇ, ನನ್ನ ಹೃದಯಕಮಲದಲ್ಲಿ ನೆಲೆಸು, ಕಾಮ ಮೊದಲಾದ ದುಷ್ಟ ಪಡೆಯನ್ನು ನಾಶಮಾಡು.' },
        },
      ],
    },
    {
      title: 'गौरीआशीर्वादः',
      titleEn: 'Gauri\'s blessing',
      note: 'From the Ramacharitamanasa; sung with the hymn by tradition.',
      noteKn: 'ರಾಮಚರಿತಮಾನಸದಿಂದ; ಸಂಪ್ರದಾಯದಂತೆ ಸ್ತುತಿಯೊಂದಿಗೆ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 6,
          text: 'मनु जाहिं राचेउ मिलिहि सो बरु, सहज सुंदर सांवरो ।\nकरुना निधान सुजान सीलु, सनेहु जानत रावरो ॥',
          meaning: { en: 'The one your mind is set on will be your husband, naturally beautiful and dark; he is an ocean of compassion, wise, and knows your virtue and love.', kn: 'ನಿನ್ನ ಮನಸ್ಸು ಯಾರಲ್ಲಿ ನೆಟ್ಟಿದೆಯೋ ಅವನೇ ನಿನಗೆ ವರನಾಗುತ್ತಾನೆ, ಸಹಜಸುಂದರ ಶ್ಯಾಮಲ; ಕರುಣಾನಿಧಿ, ಜಾಣ, ನಿನ್ನ ಶೀಲ ಮತ್ತು ಪ್ರೇಮವನ್ನು ಬಲ್ಲವನು.' },
        },
        {
          n: 7,
          text: 'एहि भांति गौरि असीस सुनि सिय, सहित हियं हरषीं अली ।\nतुलसी भवानिहि पूजि पुनि पुनि, मुदित मन मंदिर चली ॥',
          meaning: { en: 'Hearing Gauri\'s blessing in this way, Sita and her companions were glad at heart; Tulasi says that, worshipping Bhavani again and again, she went joyfully back to the palace.', kn: 'ಹೀಗೆ ಗೌರಿಯ ಆಶೀರ್ವಾದ ಕೇಳಿ ಸೀತೆ ಮತ್ತು ಸಖಿಯರು ಹೃದಯದಲ್ಲಿ ಹರ್ಷಿಸಿದರು; ಭವಾನಿಯನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಪೂಜಿಸಿ ಸಂತೋಷದಿಂದ ಅರಮನೆಗೆ ಹೋದಳೆಂದು ತುಲಸೀದಾಸ ಹೇಳುತ್ತಾನೆ.' },
        },
      ],
    },
    {
      title: 'सोरठा',
      titleEn: 'Sortha',
      verses: [
        {
          text: 'जानि गौरि अनुकूल, सिय हिय हरषु न जाइ कहि ।\nमंजुल मंगल मूल, बाम अंग फरकन लगे ॥',
          meaning: { en: 'Knowing Gauri was favourable, Sita\'s joy could not be told; and her left side began to throb, a sweet sign and root of good fortune.', kn: 'ಗೌರಿ ಅನುಕೂಲಳೆಂದು ತಿಳಿದು ಸೀತೆಯ ಹೃದಯದ ಹರ್ಷವನ್ನು ಹೇಳಲಾಗದು; ಮಂಗಳದ ಮೂಲವಾದ ಮಂಜುಲ ಶಕುನವಾಗಿ ಎಡ ಅಂಗ ಅದುರತೊಡಗಿತು.' },
        },
      ],
    },
  ],
};
