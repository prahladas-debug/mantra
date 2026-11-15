/**
 * Tandanāna ahi: Annamācārya saṅkīrtana (Telugu), in Telugu script.
 * Sources (Nov 2026): T. the printed TTD edition, vol. 2 p. 258 (archive.org OCR of "Sri Tallapaka Annamacharya Adhyatma
 * Sankeertanalu", ed. G. Ramasubba Sarma; legible but with OCR slips, read line by line); K. karnatik.com c1107
 * ("thandanana abi", Roman, typed independently). The five stanzas of T and K agree in wording; spelling mended
 * (T "వొక్కటె", K "okaTE"); K "ninDAra", T "విండార" > "నిండార". Raga Bowli. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaTandananaAhi: Mantra = {
  id: 'annamacharya-tandanana-ahi',
  title: 'తందనాన అహి',
  titleEn: 'Tandanana Ahi (Annamacharya)',
  category: 'kirtana',
  order: 16,
  sourceScript: 'telugu',
  deity: 'Śrī Veṅkaṭeśvara',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), saṅkīrtana (adhyātma)',
  summary: '"Brahman is one": the refrain "tandanana" sung to a dance rhythm leads into stanzas which say that king and servant sleep alike, the brahmin and the outcaste stand on the same earth, gods and insects feel the same pleasure, hunger is the same on rich and poor food, the sun shines alike on elephant and dog, and the name of Venkateshvara is the same for the merited and the sinners. Sung in raga Bowli.',
  summaryKn: '“ಬ್ರಹ್ಮವೊಂದೇ”: ತಂದನಾನ ಎಂಬ ನೃತ್ಯಲಯದ ಪಲ್ಲವಿಯ ನಂತರದ ಚರಣಗಳು ರಾಜನೂ ಸೇವಕನೂ ಸಮಾನವಾಗಿ ನಿದ್ರಿಸುವರು, ಬ್ರಾಹ್ಮಣನೂ ಚಾಂಡಾಲನೂ ಒಂದೇ ಭೂಮಿಯ ಮೇಲೆ ನಿಂತಿದ್ದಾರೆ, ದೇವತೆಗಳಿಗೂ ಕ್ರಿಮಿಗಳಿಗೂ ಸುಖ ಒಂದೇ, ಹಸಿವು ಒಂದೇ, ಬಿಸಿಲು ಆನೆ ನಾಯಿಗಳ ಮೇಲೆ ಒಂದೇ, ಪುಣ್ಯವಂತ-ಪಾಪಿಗಳಿಗೆ ವೆಂಕಟೇಶ್ವರನ ನಾಮ ಒಂದೇ ಎಂದು ಹೇಳುತ್ತವೆ. ಬೌಳಿ ರಾಗದಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
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
          text: 'తందనాన ఆహి తందనాన పురె\nతందనాన భళా తందనాన\nబ్రహ్మమొకటె పరబ్రహ్మమొకటె\nబ్రహ్మమొకటె పరబ్రహ్మమొకటె',
          meaning: { en: 'Tandanana, ahi, tandanana, pure, tandanana, bhala, tandanana (dance syllables). Brahman is one, the Supreme Brahman is one.', kn: 'ತಂದನಾನ, ಆಹಿ, ತಂದನಾನ, ಪುರೆ, ತಂದನಾನ, ಭಳಾ, ತಂದನಾನ (ನೃತ್ಯಾಕ್ಷರಗಳು). ಬ್ರಹ್ಮ ಒಂದೇ, ಪರಬ್ರಹ್ಮ ಒಂದೇ.' },
        },
      ],
    },
    {
      title: 'చరణాలు',
      titleEn: 'Charanams',
      note: 'The five stanzas.',
      noteKn: 'ಐದು ಚರಣಗಳು.',
      verses: [
        {
          n: 1,
          text: 'కందువగు హీనాధికము లిందు లేవు\nఅందరికి శ్రీహరే అంతరాత్మ\nఇందులో జంతుకులమింతా నొకటె\nఅందరికి శ్రీహరే అంతరాత్మ',
          meaning: { en: 'There is no fixed high and low in this: Sri Hari is the inner Self of everyone. All the families of beings in it are one; Sri Hari is the inner Self of all.', kn: 'ಇದರಲ್ಲಿ ನಿಶ್ಚಿತವಾದ ಹೆಚ್ಚು ಕಡಿಮೆ ಇಲ್ಲ; ಎಲ್ಲರಿಗೂ ಶ್ರೀಹರಿಯೇ ಅಂತರಾತ್ಮ. ಇದರಲ್ಲಿರುವ ಜೀವಕುಲವೆಲ್ಲ ಒಂದೇ; ಎಲ್ಲರಿಗೂ ಶ್ರೀಹರಿಯೇ ಅಂತರಾತ್ಮ.' },
        },
        {
          n: 2,
          text: 'నిండార రాజు నిద్రించు నిద్రయు నొకటె\nఅండనే బంటు నిద్ర యదియు నొకటె\nమెండైన బ్రాహ్మణుండు మెట్టు భూమి యొకటె\nచండాలుం డేటి సరి భూమి యొకటె',
          meaning: { en: 'The sleep that the full-fledged king sleeps is one; the sleep of the servant at his side is the same. The ground that the great brahmin treads is one; the ground the outcaste walks on is the same.', kn: 'ತುಂಬು ವೈಭವದ ರಾಜ ನಿದ್ರಿಸುವ ನಿದ್ರೆ ಒಂದೇ; ಪಕ್ಕದ ಸೇವಕನ ನಿದ್ರೆಯೂ ಅದೇ. ಶ್ರೇಷ್ಠ ಬ್ರಾಹ್ಮಣ ತುಳಿಯುವ ಭೂಮಿ ಒಂದೇ; ಚಾಂಡಾಲ ತುಳಿಯುವ ಭೂಮಿಯೂ ಅದೇ.' },
        },
        {
          n: 3,
          text: 'అనుగు దేవతలకును అలకామసుఖ మొకటె\nఘనకీట పశువులకు కామసుఖ మొకటె\nదినమహోరాత్రములు తెగి ధనాఢ్యున కొకటె\nఒనర నిరుపేదకును ఒకటె అవియు',
          meaning: { en: 'The pleasure of the beloved gods and the pleasure of the great insects and beasts is one; day and night are one for the rich man and one for the poor.', kn: 'ಪ್ರಿಯ ದೇವತೆಗಳ ಸುಖ ಮತ್ತು ದೊಡ್ಡ ಕ್ರಿಮಿ ಪಶುಗಳ ಸುಖ ಒಂದೇ; ಹಗಲು ರಾತ್ರಿ ಧನಿಕನಿಗೂ ಒಂದೇ, ಬಡವನಿಗೂ ಒಂದೇ.' },
        },
        {
          n: 4,
          text: 'కొరలి శిష్టాన్నములు గొను నాకలొకటె\nతిరుగు దుష్టాన్నములు దిను నాకలొకటె\nపరగ దుర్గంధముల పై వాయువొకటె\nవరుస పరిమళముపై వాయువొకటె',
          meaning: { en: 'The hunger that takes fine food is one, and the hunger that eats rough food is the same; the air that blows over foul smells is one, and the air over fragrance is the same.', kn: 'ಒಳ್ಳೆಯ ಅನ್ನವನ್ನು ಕೊಳ್ಳುವ ಹಸಿವು ಒಂದೇ; ಕೆಟ್ಟ ಅನ್ನ ತಿನ್ನುವ ಹಸಿವೂ ಅದೇ. ದುರ್ಗಂಧದ ಮೇಲೆ ಬೀಸುವ ಗಾಳಿ ಒಂದೇ; ಪರಿಮಳದ ಮೇಲೆ ಬೀಸುವ ಗಾಳಿಯೂ ಅದೇ.' },
        },
        {
          n: 5,
          text: 'కడగి యేనుగు మీద గాయు నెండొకటె\nపుడమి శునకము మీద బొలయు నెండొకటె\nకడు పుణ్యులను పాపకర్ములను సరిగావ\nజడియు శ్రీవేంకటేశ్వరు నామమొకటె',
          meaning: { en: 'The sun that shines on the elephant is one, and the sun that falls on the dog on the earth is the same. To protect the very meritorious and the sinful alike, the name of Sri Venkateshvara is the one.', kn: 'ಆನೆಯ ಮೇಲೆ ಬೀಳುವ ಬಿಸಿಲು ಒಂದೇ; ಭೂಮಿಯ ನಾಯಿಯ ಮೇಲೆ ಬೀಳುವ ಬಿಸಿಲೂ ಅದೇ. ಅತಿ ಪುಣ್ಯವಂತರನ್ನೂ ಪಾಪಕರ್ಮಿಗಳನ್ನೂ ಸಮನಾಗಿ ಕಾಯುವ ಶ್ರೀ ವೆಂಕಟೇಶ್ವರನ ನಾಮ ಒಂದೇ.' },
        },
      ],
    },
  ],
};
