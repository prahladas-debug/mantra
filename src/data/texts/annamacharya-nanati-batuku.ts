/**
 * Nānāṭi baduku nāṭakamu: Annamācārya saṅkīrtana (Telugu), in Telugu script.
 * Sources (Nov 2026): A. annamacharya-lyrics.blogspot.com no. 34 (typed Telugu following the TTD edition); K. karnatik.com
 * c13227 (lyrics with English glosses, typed by another contributor; the glosses agree with A line by line,
 * e.g. "puTTuTayu nijamu, pOvuTayu nijamu", "tegadu pApamu tIradu puNyamu"). Raga Revati. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaNanatiBatuku: Mantra = {
  id: 'annamacharya-nanati-batuku',
  title: 'నానాటి బదుకు నాటకము',
  titleEn: 'Nanati Baduku Natakamu (Annamacharya)',
  category: 'kirtana',
  order: 15,
  sourceScript: 'telugu',
  deity: 'Śrī Veṅkaṭeśvara',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), saṅkīrtana (adhyātma)',
  summary: 'A song of detachment: daily life is a play; birth and death alone are real; eating and dressing, the doing of good and evil, the passing of time are all part of the drama; liberation lies beyond the sky, under the Lord Venkateshvara. Sung in raga Revati.',
  summaryKn: 'ವೈರಾಗ್ಯದ ಹಾಡು: ದಿನನಿತ್ಯದ ಬದುಕು ನಾಟಕ; ಹುಟ್ಟು ಸಾವು ಮಾತ್ರ ನಿಜ; ಉಣ್ಣುವುದು, ಉಡುವುದು, ಪಾಪ-ಪುಣ್ಯ, ಕಾಲ ಸರಿಯುವುದು ಎಲ್ಲವೂ ನಾಟಕದ ಭಾಗ; ವೆಂಕಟೇಶ್ವರನ ಅಡಿಯಲ್ಲಿ ಆಕಾಶಕ್ಕೂ ಆಚೆ ಇರುವುದೇ ಮೋಕ್ಷ. ರೇವತಿ ರಾಗದಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
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
          text: 'నానాటి బదుకు నాటకము\nకానక కన్నది కైవల్యము',
          meaning: { en: 'Daily life is a play; what is seen without being fully seen is liberation.', kn: 'ನಿತ್ಯದ ಬದುಕು ನಾಟಕ; ಕಾಣದೆ ಕಂಡದ್ದೇ ಕೈವಲ್ಯ.' },
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
          text: 'పుట్టుటయు నిజము పోవుటయు నిజము\nనట్టనడిమి పని నాటకము\nయెట్ట నెదుట గల దీ ప్రపంచము\nకట్ట గడపటిది కైవల్యము',
          meaning: { en: 'Birth is real, departure is real; the work between is a play. What stands before us is the world; the very last thing is liberation.', kn: 'ಹುಟ್ಟು ನಿಜ, ಸಾವು ನಿಜ; ನಡುವಿನ ಕೆಲಸ ನಾಟಕ. ಎದುರಿಗಿರುವುದು ಪ್ರಪಂಚ; ಕೊನೆಯ ಕೊನೆಯದು ಕೈವಲ್ಯ.' },
        },
        {
          n: 2,
          text: 'కుడిచే దన్నము కోక చుట్టెడిది\nనడ మంత్రపు పని నాటకము\nవొడి గట్టుకొనిన వుభయ కర్మములు\nగడి దాటినపుడె కైవల్యము',
          meaning: { en: 'The rice we eat and the cloth we wrap are the work of the middle, a play. Only when the two kinds of karma we tie into our lap are crossed is there liberation.', kn: 'ಉಣ್ಣುವ ಅನ್ನ, ಸುತ್ತುವ ಬಟ್ಟೆ ನಡುವಿನ ಕೆಲಸ, ನಾಟಕ. ಒಡಿಲಿಗೆ ಕಟ್ಟಿಕೊಂಡ ಎರಡು ಬಗೆಯ ಕರ್ಮಗಳ ಗಡಿ ದಾಟಿದಾಗಲೇ ಕೈವಲ್ಯ.' },
        },
        {
          n: 3,
          text: 'తెగదు పాపము తీరదు పుణ్యము\nనగి నగి కాలము నాటకము\nయెగువనె శ్రీ వేంకటేశ్వరుడేలిక\nగగనము మీదిది కైవల్యము',
          meaning: { en: 'Sin does not end and merit is not exhausted; time that laughs on and on is a play. Above, Lord Venkateshvara rules; what is beyond the sky is liberation.', kn: 'ಪಾಪ ತೆಗೆಯದು, ಪುಣ್ಯ ತೀರದು; ನಗುತ್ತ ಸರಿಯುವ ಕಾಲ ನಾಟಕ. ಮೇಲೆ ಶ್ರೀ ವೆಂಕಟೇಶ್ವರನ ಆಳ್ವಿಕೆ; ಆಕಾಶದ ಮೇಲಿನದು ಕೈವಲ್ಯ.' },
        },
      ],
    },
  ],
};
