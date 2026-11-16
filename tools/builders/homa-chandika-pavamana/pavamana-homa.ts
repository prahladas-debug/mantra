/**
 * Pavamana Homa (Madhva): the main offerings, with the shared steps in "Homa: Common
 * Procedure" (homa-purvanga). NOT YET PROOFREAD against one printed edition.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012, chapter "Pavamana
 *    Homa" (the Pavamana mantras of Rigveda mandala 9 and the five deities in them, the five
 *    kalashas, the three purposes and the three names of the fire, the sesame offering with
 *    the mrigi mudra, the Pavamana Khila, the 610 mantras). archive.org: 20230827_20230827_0721.
 *  - Rigveda Khilani 3.10.7-9 and 3.10.15-20 (GRETIL, Rgvedakhilani): the Pavamana-khila
 *    (the sins the Pavamana mantras remove; "six hundred and ten rks of the Pavamani").
 *  - Rigveda 9.1.1-2 checked against GRETIL (Aufrecht).
 *  - "Pavamana Pancha Suktam" (Shrimanmadhwa Siddhanta Granthalaya, Udupi 2003; archive.org
 *    PavamAnaHoma_201810) is the printed Udupi book of the Pavamana hymns; its scan could not be
 *    read and is not quoted.
 */
import type { Mantra } from '../types';

export const pavamanaHoma: Mantra = {
  id: 'pavamana-homa',
  title: 'पवमानहोमः',
  titleEn: 'Pavamana Homa (Madhva)',
  category: 'homa',
  order: 9,
  deity: 'Hari and Vayu, with Agni, Chandra and Bharati (the five Pavamana deities)',
  source: 'Rigveda mandala 9 (Pavamana mandala) and Rigveda Khila 3.10; Madhva: Homa-Havana (Satyanarayanacharya)',
  summary: 'The Pavamana homa, done by Madhvas for purification, nourishment and peace and on shraddha days: the Pavamana mantras of the ninth mandala of the Rigveda offered as ghee oblations together with the Purusha Sukta, the five kalashas for the five Pavamana deities, the three kinds of purpose and the fire for each, and what the Pavamana Khila says the mantras remove. The common steps are in "Homa: Common Procedure".',
  summaryKn: 'ಮಾಧ್ವರು ಶುದ್ಧಿ, ಪುಷ್ಟಿ, ಶಾಂತಿಗಾಗಿ ಮತ್ತು ಶ್ರಾದ್ಧದಂದು ಮಾಡುವ ಪವಮಾನ ಹೋಮ: ಋಗ್ವೇದದ ಒಂಬತ್ತನೆಯ ಮಂಡಲದ ಪವಮಾನ ಮಂತ್ರಗಳನ್ನು ಪುರುಷಸೂಕ್ತದೊಡನೆ ಆಜ್ಯಾಹುತಿಯಾಗಿ ನೀಡುವುದು, ಐದು ಪವಮಾನ ದೇವತೆಗಳ ಐದು ಕಲಶಗಳು, ಮೂರು ಬಗೆಯ ಉದ್ದೇಶ ಮತ್ತು ಅದಕ್ಕೆ ತಕ್ಕ ಅಗ್ನಿ, ಪವಮಾನ ಖಿಲವು ಈ ಮಂತ್ರಗಳು ನಾಶಮಾಡುತ್ತವೆ ಎಂದು ಹೇಳುವುದು. ಸಾಮಾನ್ಯ ಹಂತಗಳು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿವೆ.',
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'A guide for understanding and following along; homas are traditionally done with a trained priest. Do the common steps first (see "Homa: Common Procedure"), then the offerings here. The 610 Pavamana mantras are not copied here: they are the first 610 of the 1,108 mantras of the ninth mandala of the Rigveda, recited by the priests; the Pavamana Sukta of the library is the Taittiriya form chanted in South India and is a different text. Only the opening verses and the Khila verses that prove the rite are given. The Purusha Sukta (library) is offered with ghee, one verse per oblation. Left out: the full Pavamana mantras, the Pavamana Khila in all its twenty-one verses, the ritual of the five kalashas in detail, and the Puyamana homa mentioned at the end of the chapter.',
  sections: [
    {
      title: 'पवमानहोमप्रयोजनम्',
      titleEn: 'The aim, the deities and the fire',
      note: 'The Pavamana mantras (Svadishthaya madishthaya…) are known to all. The ninth mandala of the Rigveda has 1,108 mantras addressed to Soma Pavamana; by custom the first 610 are the Pavamana Sukta used for recitation and homa. They praise five: Agni, the Moon, Bharati, Vayu, and Hari; all five are called Pavamana Soma, "the one who purifies and carries across". Hence five kalashas are installed, or the five worshipped in one kalasha, with the five forms of prana (prana, apana and the rest) and the five forms of the Lord within them (Narayana, Vasudeva, Sankarshana, Pradyumna, Aniruddha). The fire is installed to the south-west of the kalasha; the Purusha Sukta and the Pavamana Sukta are offered with ghee. The aim is the pleasure of Hari and Vayu; the occasions are three: expiation (prayaschitta, the usual purpose on shraddha days; the fire is Vitapa), peace (shantika, at graha-sandhi, panchama-shani and shashtipurti; the fire is Varada) and prosperity (paushtika; the fire is Balavardhana). In a prayaschitta homa til may be offered instead of ghee, a pinch taken with the mrigi mudra (the thumb joined to the middle and ring fingers, the index and little fingers held apart).',
      noteKn: '“ಸ್ವಾದಿಷ್ಠಯಾ ಮದಿಷ್ಠಯಾ…” ಎಂಬ ಪವಮಾನ ಮಂತ್ರಗಳನ್ನು ಎಲ್ಲರೂ ಬಲ್ಲರು. ಋಗ್ವೇದದ ಒಂಬತ್ತನೆಯ ಮಂಡಲದಲ್ಲಿ ಪವಮಾನ ಸೋಮನನ್ನು ಕುರಿತ ೧,೧೦೮ ಮಂತ್ರಗಳಿವೆ; ಸಂಪ್ರದಾಯದಂತೆ ಮೊದಲ ೬೧೦ ಮಂತ್ರಗಳು ಪಾರಾಯಣ–ಹೋಮಗಳಲ್ಲಿ ಬಳಸುವ ಪವಮಾನ ಸೂಕ್ತ. ಇವು ಐವರನ್ನು ಸ್ತುತಿಸುತ್ತವೆ: ಅಗ್ನಿ, ಚಂದ್ರ, ಭಾರತೀ, ವಾಯು, ಹರಿ; ಐವರಿಗೂ ಪವಮಾನ ಸೋಮ — ಪವಿತ್ರಗೊಳಿಸಿ ದಾಟಿಸುವವರು — ಎಂದೇ ಹೆಸರು. ಆದ್ದರಿಂದ ಐದು ಕಲಶಗಳ (ಅಥವಾ ಒಂದೇ ಕಲಶದಲ್ಲಿ ಐದರ) ಪ್ರತಿಷ್ಠೆ; ಅವುಗಳಲ್ಲಿ ಪ್ರಾಣಾಪಾನಾದಿ ಐದು ಪ್ರಾಣರೂಪಗಳು ಮತ್ತು ಅವುಗಳೊಳಗಿನ ಭಗವಂತನ ಐದು ರೂಪಗಳು (ನಾರಾಯಣ, ವಾಸುದೇವ, ಸಂಕರ್ಷಣ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧ). ಕಲಶದ ನೈರುತ್ಯದಲ್ಲಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ; ಪುರುಷಸೂಕ್ತ ಮತ್ತು ಪವಮಾನಸೂಕ್ತಗಳನ್ನು ಆಜ್ಯದಿಂದ ಹೋಮಿಸಿ. ಉದ್ದೇಶ ಹರಿ–ವಾಯು ಪ್ರೀತಿ; ಸಂದರ್ಭಗಳು ಮೂರು: ಪ್ರಾಯಶ್ಚಿತ್ತ (ಶ್ರಾದ್ಧದ ದಿನ ಸಾಮಾನ್ಯ; ಅಗ್ನಿ ವಿಟಪ), ಶಾಂತಿಕ (ಗ್ರಹಸಂಧಿ, ಪಂಚಮ ಶನಿ, ಷಷ್ಠಿಪೂರ್ತಿ; ಅಗ್ನಿ ವರದ), ಪೌಷ್ಟಿಕ (ಅಗ್ನಿ ಬಲವರ್ಧನ). ಪ್ರಾಯಶ್ಚಿತ್ತ ಹೋಮದಲ್ಲಿ ಆಜ್ಯದ ಬದಲು ಎಳ್ಳನ್ನೂ ಹೋಮಿಸಬಹುದು, ಮೃಗೀಮುದ್ರೆಯಿಂದ (ಹೆಬ್ಬೆರಳಿಗೆ ನಡು–ಉಂಗುರದ ಬೆರಳುಗಳನ್ನು ಜೋಡಿಸಿ, ತೋರು–ಕಿರುಬೆರಳುಗಳನ್ನು ದೂರವಿಟ್ಟು) ಚಿಟಿಕೆ ಎಳ್ಳು.',
      verses: [
        {
          text: 'स्वादिष्ठया मदिष्ठया पवस्व सोम धारया ।\nइन्द्राय पातवे सुतः ॥',
          meaning: {
            en: 'With your sweetest, most exhilarating stream flow purified, O Soma, pressed for Indra to drink. (Rigveda 9.1.1, the first Pavamana verse)',
            kn: 'ಓ ಸೋಮನೇ, ನಿನ್ನ ಅತಿ ಮಧುರವೂ ಹರ್ಷದಾಯಕವೂ ಆದ ಧಾರೆಯಿಂದ ಪವಿತ್ರನಾಗಿ ಹರಿ; ಇಂದ್ರನ ಪಾನಕ್ಕಾಗಿ ಹಿಂಡಲ್ಪಟ್ಟಿರುವೆ. (ಋಗ್ವೇದ ೯.೧.೧, ಮೊದಲ ಪವಮಾನ ಮಂತ್ರ)',
          },
        },
        {
          text: 'रक्षोहा विश्वचर्षणिरभि योनिमयोहतम् ।\nद्रुणा सधस्थमासदत् ॥',
          meaning: {
            en: 'The slayer of demons, who sees all men, has settled into his golden seat, his wooden place. (Rigveda 9.1.2)',
            kn: 'ರಾಕ್ಷಸರನ್ನು ಕೊಲ್ಲುವ, ಎಲ್ಲ ಮನುಷ್ಯರನ್ನು ನೋಡುವ ಸೋಮನು ಚಿನ್ನದ ಆಸನವಾದ ಮರದ ಪಾತ್ರೆಯಲ್ಲಿ ಕುಳಿತಿದ್ದಾನೆ. (ಋಗ್ವೇದ ೯.೧.೨)',
          },
        },
      ],
    },
    {
      title: 'पवमानखिलम्',
      titleEn: 'The Pavamana Khila: what the mantras do',
      note: 'The Khila (supplement) to the Rigveda on the Pavamana mantras lists the sins that one washes away by reciting and offering them, and ends with the promise below. In Homa-Havana: these mantras give the fruit of the hard expiations such as Prajapatya-krichchhra and Chandrayana without their suffering; sins done in the womb, in childhood, knowingly or not, offerings accepted from sinners, and food eaten alone or wrongly are all expiated. The texts speak of killing a cow, a brahmana or wine-drinking in a figurative sense, as the manual explains (striking a cow in anger, starving it, selling it to the butcher; insulting a parent before others; standing and drinking with the left hand are the examples it gives).',
      noteKn: 'ಋಗ್ವೇದದ ಖಿಲಭಾಗದಲ್ಲಿ ಪವಮಾನ ಮಂತ್ರಗಳ ಪಾರಾಯಣ–ಹೋಮದಿಂದ ತೊಳೆದುಹೋಗುವ ಪಾಪಗಳ ಪಟ್ಟಿಯಿದೆ; ಕೊನೆಯಲ್ಲಿ ಕೆಳಗಿನ ಫಲಶ್ರುತಿ. ಹೋಮ–ಹವನದಲ್ಲಿ: ಪ್ರಾಜಾಪತ್ಯಕೃಚ್ಛ, ಚಾಂದ್ರಾಯಣ ಮೊದಲಾದ ಕಠಿಣ ಪ್ರಾಯಶ್ಚಿತ್ತಗಳ ಫಲ ಅವುಗಳ ಕಷ್ಟವಿಲ್ಲದೆ ಈ ಮಂತ್ರಗಳಿಂದ ಲಭಿಸುತ್ತದೆ; ಗರ್ಭದಲ್ಲಿ, ಬಾಲ್ಯದಲ್ಲಿ, ತಿಳಿದೋ ತಿಳಿಯದೆಯೋ ಮಾಡಿದ ಪಾಪಗಳು, ಪಾಪಿಗಳಿಂದ ಪ್ರತಿಗ್ರಹಿಸಿದ ದಾನ, ಒಬ್ಬನೇ ತಿಂದ ಅಥವಾ ತಿನ್ನಬಾರದ ಅನ್ನ — ಎಲ್ಲವುಗಳಿಗೆ ಪ್ರಾಯಶ್ಚಿತ್ತ. ಗೋವಧೆ, ಬ್ರಹ್ಮಹತ್ಯೆ, ಸುರಾಪಾನ ಮೊದಲಾದವನ್ನು ಇಲ್ಲಿ ಗ್ರಂಥ ಲಾಕ್ಷಣಿಕವಾಗಿ ವಿವರಿಸುತ್ತದೆ (ಸಿಟ್ಟಿನಿಂದ ಗೋವನ್ನು ಹೊಡೆಯುವುದು, ಉಪವಾಸ ಹಾಕುವುದು, ಕಟುಕರಿಗೆ ಮಾರುವುದು; ಹತ್ತು ಜನರ ಮುಂದೆ ತಂದೆ–ತಾಯಿಯನ್ನು ಅಪಮಾನಿಸುವುದು; ನಿಂತು ಎಡಗೈಯಿಂದ ನೀರು ಕುಡಿಯುವುದು).',
      verses: [
        {
          text: 'दुर्यष्टं दुरधीतं पापं यच्च अज्ञानतः कृतम् ।\nअयाजिताश्चासम्याज्यास्तत्पावमानीभिरहं पुनामि ॥',
          meaning: {
            en: 'Ill-sacrificed and ill-studied wrong, and whatever was done through ignorance, and offerings to the unfit: all that I cleanse with the Pavamani mantras. (Rigveda Khila 3.10.8)',
            kn: 'ಕೆಟ್ಟದಾಗಿ ಮಾಡಿದ ಯಜ್ಞ, ಕೆಟ್ಟದಾಗಿ ಓದಿದ ಅಧ್ಯಯನ, ಅಜ್ಞಾನದಿಂದ ಮಾಡಿದ ಪಾಪ, ಅಯೋಗ್ಯರಿಗಾಗಿ ಮಾಡಿದ ಯಾಜನ — ಇವನ್ನೆಲ್ಲ ಪವಮಾನೀ ಮಂತ್ರಗಳಿಂದ ನಾನು ಶುದ್ಧಗೊಳಿಸುತ್ತೇನೆ. (ಋಗ್ವೇದ ಖಿಲ ೩.೧೦.೮)',
          },
        },
        {
          text: 'पावमानं परं ब्रह्म ये पठन्ति मनीषिणः ।\nसप्त जन्म भवेद्विप्रो धनाढ्यो वेदपारगः ॥',
          meaning: {
            en: 'The wise who recite the Pavamana, the supreme Brahman, become for seven births a learned and wealthy master of the Veda. (Rigveda Khila 3.10.18)',
            kn: 'ಪರಬ್ರಹ್ಮಸ್ವರೂಪವಾದ ಪವಮಾನವನ್ನು ಪಠಿಸುವ ವಿದ್ವಾಂಸರು ಏಳು ಜನ್ಮಗಳಲ್ಲಿ ಧನಿಕರೂ ವೇದಪಾರಂಗತರೂ ವಿಪ್ರರೂ ಆಗುತ್ತಾರೆ. (ಋಗ್ವೇದ ಖಿಲ ೩.೧೦.೧೮)',
          },
        },
        {
          text: 'दशोत्तराण्यृचां चैतत्पावमानीः शतानि षट् ।\nएतज्जुह्वञ्जपंश्चैव घोरं मृत्युभयं जयेत् ॥',
          meaning: {
            en: 'These are six hundred and ten verses, the Pavamani verses; one who offers them and recites them overcomes even the dreadful fear of death. (Rigveda Khila 3.10.19)',
            kn: 'ಪವಮಾನೀ ಋಕ್ಕುಗಳು ಆರುನೂರ ಹತ್ತು; ಇವನ್ನು ಹೋಮಿಸುತ್ತಾ ಮತ್ತು ಜಪಿಸುತ್ತಾ ಮಾಡುವವನು ಘೋರ ಮೃತ್ಯುಭಯವನ್ನೂ ಜಯಿಸುತ್ತಾನೆ. (ಋಗ್ವೇದ ಖಿಲ ೩.೧೦.೧೯)',
          },
        },
      ],
    },
    {
      title: 'होमक्रमः',
      titleEn: 'The order of the homa',
      note: 'Do the common steps, install the five kalashas (or the one kalasha) to the north-east and the fire to their south-west, and worship the Lord in them. Then: offer ghee with each verse of the Purusha Sukta (sixteen in the Rigveda form, each offered sixteen times in the Sukrita homa; in the Pavamana homa once each), and ghee (or sesame in a prayaschitta rite) with the Pavamana mantras, one oblation for each of the 610 mantras. Others recite the Pavamana Khila and the Purusha Sukta, keep the kalasha touched and do tarpana to the five deities with milk, honey and coconut water. At the end the family is sprinkled with the kalasha water, then complete the homa with the purnahuti of the Common Procedure and pour out the pranita water.',
      noteKn: 'ಸಾಮಾನ್ಯ ಹಂತಗಳನ್ನು ಮಾಡಿ, ಈಶಾನ್ಯದಲ್ಲಿ ಐದು ಕಲಶಗಳನ್ನು (ಅಥವಾ ಒಂದೇ ಕಲಶವನ್ನು) ಸ್ಥಾಪಿಸಿ, ಅವುಗಳ ನೈರುತ್ಯದಲ್ಲಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡಿ, ಅವುಗಳಲ್ಲಿ ಭಗವಂತನನ್ನು ಪೂಜಿಸಿ. ನಂತರ: ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಆಜ್ಯಾಹುತಿ (ಋಗ್ವೇದ ರೂಪದಲ್ಲಿ ಹದಿನಾರು; ಸುಕೃತ ಹೋಮದಲ್ಲಿ ಪ್ರತಿಯೊಂದನ್ನೂ ಹದಿನಾರು ಬಾರಿ; ಪವಮಾನ ಹೋಮದಲ್ಲಿ ಒಂದೊಂದು ಬಾರಿ), ಪವಮಾನ ಮಂತ್ರಗಳಿಂದ ೬೧೦ ಮಂತ್ರಗಳಿಗೆ ಒಂದೊಂದು ಆಹುತಿ (ಆಜ್ಯ, ಪ್ರಾಯಶ್ಚಿತ್ತದಲ್ಲಿ ಎಳ್ಳು). ಇತರರು ಪವಮಾನ ಖಿಲ, ಪುರುಷಸೂಕ್ತ ಪಾರಾಯಣ ಮಾಡುತ್ತಾರೆ, ಕಲಶವನ್ನು ಮುಟ್ಟಿಕೊಂಡಿರುತ್ತಾರೆ, ಹಾಲು–ಜೇನು–ತೆಂಗಿನಕಾಯಿ ನೀರಿನಿಂದ ಐವರಿಗೆ ತರ್ಪಣ ನೀಡುತ್ತಾರೆ. ಕೊನೆಯಲ್ಲಿ ಕಲಶಜಲವನ್ನು ಮನೆಯವರಿಗೆ ಪ್ರೋಕ್ಷಿಸಿ, ಸಾಮಾನ್ಯ ವಿಧಿಯ ಪೂರ್ಣಾಹುತಿಯಿಂದ ಹೋಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ, ಪ್ರಣೀತಾಜಲವನ್ನು ಸುರಿಯಿರಿ.',
      verses: [
        {
          text: 'अथ प्रधानहोमः ॥ पुरुषसूक्तेन प्रत्यृचम् । पवमानमन्त्रैः प्रत्यृचम् ॥',
          meaning: {
            en: 'Now the main homa: one oblation of ghee with each verse of the Purusha Sukta, then one with each of the Pavamana mantras. (The mantras themselves are read from the Rigveda and the Purusha Sukta in the library.)',
            kn: 'ಈಗ ಪ್ರಧಾನ ಹೋಮ: ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿಗೂ ಒಂದು ಆಜ್ಯಾಹುತಿ, ನಂತರ ಪವಮಾನ ಮಂತ್ರಗಳ ಪ್ರತಿ ಮಂತ್ರಕ್ಕೂ ಒಂದು. (ಮಂತ್ರಗಳನ್ನು ಋಗ್ವೇದದಿಂದ ಮತ್ತು ಗ್ರಂಥಾಲಯದ ಪುರುಷಸೂಕ್ತದಿಂದ ಓದಿ.)',
          },
        },
      ],
    },
  ],
};
