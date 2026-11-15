/**
 * Vinarō bhāgyamu viṣṇukatha: Annamācārya saṅkīrtana (Telugu), in Telugu script.
 * Sources (Nov 2026): A. annamacharya-lyrics.blogspot.com no. 20 (typed Telugu following the TTD edition); K. karnatik.com
 * c14708 (Roman, typed independently); T. TTD printed edition vol. 3 (archive.org OCR, line "వినరో భాగ్యము విష్ణుకథ", with
 * "సదనం బై నది సంకీర్తనయై వెదకినచోటనే"). A and K agree except K "sakalambainadi" for A "సదనంబైనది": A is kept
 * (T supports it). Raga Shuddha Dhanyasi. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaVinaroBhagyamu: Mantra = {
  id: 'annamacharya-vinaro-bhagyamu',
  title: 'వినరో భాగ్యము విష్ణుకథ',
  titleEn: 'Vinaro Bhagyamu Vishnu Katha (Annamacharya)',
  category: 'kirtana',
  order: 17,
  sourceScript: 'telugu',
  deity: 'Śrī Viṣṇu · Śrī Veṅkaṭeśvara',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), saṅkīrtana',
  summary: '"Listen, what good fortune: the story of Vishnu!" The Vishnu story is the Veda in the daily rites, sung by Narada in every street, praised by Vyasa, a home in the form of kirtana, and now the name of Venkateshvara which the cowherd women spread with their churning. Sung in raga Shuddha Dhanyasi.',
  summaryKn: '“ಕೇಳಿರೋ ಭಾಗ್ಯ, ವಿಷ್ಣುಕಥೆ!” ವಿಷ್ಣುಕಥೆಯೇ ನಿತ್ಯವಿಧಿಗಳಲ್ಲಿನ ವೇದ, ನಾರದಾದಿಗಳು ಬೀದಿಬೀದಿಗಳಲ್ಲಿ ಹಾಡಿದ್ದು, ವ್ಯಾಸರು ಹೊಗಳಿದ್ದು, ಕೀರ್ತನೆಯ ರೂಪದ ವಾಸಸ್ಥಾನ, ಮತ್ತು ಈಗ ಗೊಲ್ಲತಿಯರು ಮಜ್ಜಿಗೆ ಕಡೆಯುವಾಗ ಹರಡಿದ ವೆಂಕಟೇಶ್ವರನ ನಾಮ. ಶುದ್ಧ ಧನ್ಯಾಸಿ ರಾಗದಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
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
          text: 'వినరో భాగ్యము విష్ణుకథ\nవెనుబలమిదివో విష్ణు కథ',
          meaning: { en: 'Listen to this good fortune, the story of Vishnu; here is the strength at our back, the story of Vishnu.', kn: 'ಕೇಳಿರೋ ಭಾಗ್ಯವನ್ನು, ವಿಷ್ಣುಕಥೆ; ಇದೇ ಹಿಂಬಲ, ವಿಷ್ಣುಕಥೆ.' },
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
          text: 'ఆదినుండి సంధ్యాదివిధులలో\nవేదంబయినది విష్ణుకథ\nనాదించీనిదె నారదాదులచే\nవీదివీధులనే విష్ణుకథ',
          meaning: { en: 'From the beginning, in the rites that start with the sandhya, the Vishnu story has been the Veda; it resounds through the voice of Narada and others, in street after street.', kn: 'ಆದಿಯಿಂದಲೂ ಸಂಧ್ಯಾದಿ ವಿಧಿಗಳಲ್ಲಿ ವೇದವಾದದ್ದು ವಿಷ್ಣುಕಥೆ; ನಾರದಾದಿಗಳಿಂದ ಬೀದಿ ಬೀದಿಗಳಲ್ಲಿ ಮೊಳಗಿದ್ದು ವಿಷ್ಣುಕಥೆ.' },
        },
        {
          n: 2,
          text: 'వదలక వేదవ్యాసులు నుడిగిన\nవిదితపావనము విష్ణుకథ\nసదనంబైనది సంకీర్తనయై\nవెదకినచోటనే విష్ణుకథ',
          meaning: { en: 'The famous and purifying Vishnu story that Vedavyasa tirelessly told; the one which has become a home as kirtana: wherever one looks, the Vishnu story is there.', kn: 'ವೇದವ್ಯಾಸರು ಬಿಡದೆ ಹೇಳಿದ ಪ್ರಸಿದ್ಧ ಪಾವನ ವಿಷ್ಣುಕಥೆ; ಸಂಕೀರ್ತನೆಯಾಗಿ ನೆಲೆಸಿದ ವಿಷ್ಣುಕಥೆ; ಹುಡುಕಿದಲ್ಲೆಲ್ಲ ಇರುವುದು ವಿಷ್ಣುಕಥೆ.' },
        },
        {
          n: 3,
          text: 'గొల్లెతలు చల్ల గొనకొని చిలుకగ\nవెల్లవిరియాయ విష్ణుకథ\nయిల్లిదె శ్రీ వేంకటేశ్వరునామము\nవెల్లిగొలిపె నీవిష్ణుకథ',
          meaning: { en: 'When the cowherd women eagerly churned the buttermilk, the Vishnu story spread everywhere in the open; and now this very story of Vishnu, the name of Sri Venkateshvara, overflows here.', kn: 'ಗೊಲ್ಲತಿಯರು ಉತ್ಸಾಹದಿಂದ ಮಜ್ಜಿಗೆ ಕಡೆಯುವಾಗ ಎಲ್ಲೆಡೆ ಹರಡಿದ ವಿಷ್ಣುಕಥೆ; ಇದೋ ಶ್ರೀ ವೆಂಕಟೇಶ್ವರನ ನಾಮವೇ ಆದ ಈ ವಿಷ್ಣುಕಥೆ ಉಕ್ಕಿ ಹರಿದಿದೆ.' },
        },
      ],
    },
  ],
};
