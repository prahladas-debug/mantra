/**
 * Koṇḍalalō nelakonna kōnēṭi rāyaḍu vāḍu: Annamācārya saṅkīrtana (Telugu), in Telugu script.
 * Sources (Nov 2026): A. annamacharya-lyrics.blogspot.com no. 23 (typed Telugu following the TTD edition, three stanzas);
 * K. karnatik.com c1569 (Roman, typed independently; raga Hindolam). K has two stanzas only: the middle stanza of A
 * ("అచ్చపు వేడుకతోడ ననంతాళు వారికి …") is missing in K; A's three stanzas are given (the song is sung with all three).
 * K reads "guruvarati" for A "కురువరతినంబి" (Kuruva-Rati Nambi); A kept. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaKondalaloNelakonna: Mantra = {
  id: 'annamacharya-kondalalo-nelakonna',
  title: 'కొండలలో నెలకొన్న కోనేటి రాయడు',
  titleEn: 'Kondalalo Nelakonna Koneti Rayadu (Annamacharya)',
  category: 'kirtana',
  order: 19,
  sourceScript: 'telugu',
  deity: 'Śrī Veṅkaṭeśvara',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), saṅkīrtana',
  summary: 'A song of devotion to the Lord of the Koneru, who lives on the hills: he gives boons as big as the hills, granted what the potter-devotee Kurava Nambi asked, came to the place where the king Tondaman called him, carried earth in service for Anantalvar, spoke warmly with Tirumala Nambi and sent for Kanchi Nambi. Sung in raga Hindolam.',
  summaryKn: 'ಬೆಟ್ಟಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ಕೋನೇಟಿ ರಾಯನ ಭಕ್ತಿಗೀತೆ: ಬೆಟ್ಟದಷ್ಟು ವರಗಳನ್ನು ಕೊಡುವವನು, ಕುಂಬಾರ ಭಕ್ತ ಕುರವ ನಂಬಿ ಕೇಳಿದ ವರಗಳನ್ನು ಕೊಟ್ಟವನು, ರಾಜ ತೊಂಡಮಾನ್ ಕರೆದ ಸ್ಥಳಕ್ಕೆ ಬಂದವನು, ಅನಂತಾಳ್ವಾರರಿಗಾಗಿ ಮಣ್ಣು ಹೊತ್ತವನು, ತಿರುಮಲ ನಂಬಿಯೊಂದಿಗೆ ಪ್ರೀತಿಯಿಂದ ಮಾತಾಡಿದವನು, ಕಾಂಚಿ ನಂಬಿಯನ್ನು ಕರೆಸಿಕೊಂಡವನು. ಹಿಂದೋಳ ರಾಗದಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'పల్లవి',
      titleEn: 'Pallavi',
      note: 'The refrain.',
      noteKn: 'ಪಲ್ಲವಿ (ಧ್ರುವಪದ).',
      verses: [
        {
          text: 'కొండలలో నెలకొన్న కోనేటి రాయడు వాడు\nకొండలంత వరములు గుప్పెడు వాడు',
          meaning: { en: 'He is the Lord of the Koneru, who dwells in the hills; he scatters boons as big as hills.', kn: 'ಬೆಟ್ಟಗಳಲ್ಲಿ ನೆಲೆಸಿದ ಕೋನೇಟಿ ರಾಯ ಅವನು; ಬೆಟ್ಟದಷ್ಟು ವರಗಳನ್ನು ಸುರಿಸುವವನು.' },
        },
      ],
    },
    {
      title: 'చరణాలు',
      titleEn: 'Charanams',
      note: 'The three stanzas.',
      noteKn: 'ಮೂರು ಚರಣಗಳು.',
      verses: [
        {
          n: 1,
          text: 'కుమ్మర దాసుడైన కురువరతినంబి\nయిమ్మన్న వరములెల్ల నిచ్చిన వాడు\nదొమ్ములు సేసిన యట్టి తొండ మాం చక్కుర వర్తి\nరమ్మన్న చోటికి వచ్చి నమ్మిన వాడు',
          meaning: { en: 'He gave all the boons that his potter-devotee Kuruva Rati Nambi asked for; he came, trusting the word, to the place where the emperor Tondaman, who had waged battles, called him.', kn: 'ಕುಂಬಾರ ದಾಸನಾದ ಕುರವರತಿ ನಂಬಿ “ಕೊಡು” ಎಂದ ವರಗಳನ್ನೆಲ್ಲ ಕೊಟ್ಟವನು; ಯುದ್ಧ ಮಾಡಿದ ತೊಂಡಮಾನ್ ಚಕ್ರವರ್ತಿ “ಬಾ” ಎಂದ ಸ್ಥಳಕ್ಕೆ ಬಂದು ಅವನನ್ನು ನಂಬಿದವನು.' },
        },
        {
          n: 2,
          text: 'అచ్చపు వేడుకతోడ ననంతాళు వారికి\nముచ్చిలి వెట్టికి మన్ను మోచిన వాడు\nమచ్చిక దొలక దిరుమలనంబి తోడుత\nనిచ్చనిచ్చ మాటలాడి నొచ్చిన వాడు',
          meaning: { en: 'With genuine delight he carried earth for Anantalvar as his forced labour; and in friendly warmth he talked with Tirumala Nambi day after day, and even took offence.', kn: 'ನಿಜವಾದ ಉತ್ಸಾಹದಿಂದ ಅನಂತಾಳ್ವಾರರಿಗಾಗಿ ಬಿಟ್ಟಿ ಸೇವೆಗೆ ಮಣ್ಣು ಹೊತ್ತವನು; ಪ್ರೀತಿ ತುಳುಕುವಂತೆ ತಿರುಮಲ ನಂಬಿಯೊಡನೆ ದಿನ ದಿನ ಮಾತಾಡಿ ನೊಂದವನು.' },
        },
        {
          n: 3,
          text: 'కంచిలోనుండ తిరుకచ్చినంబి మీద\nకరుణించి తనయెడకు రప్పించిన వాడు\nఎంచి యెక్కుడైన వేంకటేశుడు మనలకు\nమంచివాడై కరుణ బాలించినవాడు',
          meaning: { en: 'When Tirukkachchi Nambi was in Kanchi he took pity and called him to himself; Venkatesha, who thinks well of us and is the greatest, is good and rules us in mercy.', kn: 'ಕಾಂಚಿಯಲ್ಲಿದ್ದ ತಿರುಕಚ್ಚಿ ನಂಬಿಯ ಮೇಲೆ ಕರುಣೆ ತೋರಿ ತನ್ನ ಬಳಿಗೆ ಕರೆಸಿಕೊಂಡವನು; ಗಣಿಸಿ ಶ್ರೇಷ್ಠನಾದ ವೆಂಕಟೇಶನು ನಮಗೆ ಒಳ್ಳೆಯವನಾಗಿ ಕರುಣೆಯಿಂದ ಪಾಲಿಸುವವನು.' },
        },
      ],
    },
  ],
};
