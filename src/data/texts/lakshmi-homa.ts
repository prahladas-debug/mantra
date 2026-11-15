/**
 * Sri Sukta Homa (Lakshmi Homa; in the Madhva manual the Sukrita homa with the Purusha Sukta and
 * Sri Sukta): the main offerings, with the shared steps in "Homa: Common Procedure"
 * (homa-purvanga). NOT YET PROOFREAD against one printed edition.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012, chapter "Sukrita
 *    Homa" (the Purusha Sukta and the Sri Sukta, the number of oblations, the occasions).
 *    archive.org: 20230827_20230827_0721. This is the only source found for the counts.
 *  - The mantras: Sri Sukta and Purusha Sukta as in this app (collated there against several
 *    editions); Rigveda 10.90.1 checked against GRETIL (Aufrecht).
 * No second source for the Smarta Lakshmi homa (with lotus flowers, bilva or payasa) could be
 * read, so that form is not given.
 */
import type { Mantra } from '../types';

export const lakshmiHoma: Mantra = {
  id: 'lakshmi-homa',
  title: 'श्रीसूक्तहोमः (सुकृतहोमः)',
  titleEn: 'Sri Sukta Homa (Lakshmi Homa, Sukrita Homa)',
  category: 'homa',
  order: 7,
  deity: 'Sri Lakshmi (with Narayana, by the Purusha Sukta)',
  source: 'Madhva: Homa-Havana (Satyanarayanacharya), chapter on the Sukrita homa; Rigveda 10.90 and the Sri Sukta',
  summary: 'The homa to Lakshmi and Narayana with the Sri Sukta (fifteen verses) and the Purusha Sukta (sixteen), as the Madhva manuals give it: ghee oblations, the counts (16 times each Purusha Sukta verse, 15 times each Sri Sukta verse), and what the rite is done for. The common steps are in "Homa: Common Procedure".',
  summaryKn: 'ಮಾಧ್ವ ಗ್ರಂಥಗಳಲ್ಲಿ ಹೇಳಿದಂತೆ ಶ್ರೀಸೂಕ್ತ (ಹದಿನೈದು ಋಕ್ಕು) ಮತ್ತು ಪುರುಷಸೂಕ್ತ (ಹದಿನಾರು)ಗಳಿಂದ ಲಕ್ಷ್ಮೀ–ನಾರಾಯಣರಿಗೆ ಮಾಡುವ ಹೋಮ: ಆಜ್ಯಾಹುತಿ, ಸಂಖ್ಯೆ (ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕು ೧೬ ಬಾರಿ, ಶ್ರೀಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕು ೧೫ ಬಾರಿ), ಈ ಹೋಮ ಯಾವುದಕ್ಕೆ. ಸಾಮಾನ್ಯ ಹಂತಗಳು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿವೆ.',
  difficulty: 'medium',
  completeness: 'partial',
  contentNote: 'A guide for understanding and following along; homas are traditionally done with a trained priest. Do the common steps first (see "Homa: Common Procedure"), then the offerings given here. The Sri Sukta and the Purusha Sukta open as separate texts in the library; they are not copied here (only the opening verse of each). The counts come from one manual (Homa-Havana). The Smarta form of the Lakshmi homa (with lotus flowers, bilva leaves or payasa, and the 108 or 1008 counts some manuals give) could not be confirmed from a source and is left out; follow your family manual and purohita.',
  sections: [
    {
      title: 'सुकृतहोमः',
      titleEn: 'The Sukrita homa and how it is counted',
      note: 'The Purusha Sukta praises the Father of the world, Sri Hari; the Sri Sukta praises the Mother of the world, Lakshmi. Whoever praises the parents of the world with them is blessed, whoever worships with them is fulfilled, and whoever offers the homa with them is a man of great merit (sukrita); so this homa is called the Sukrita homa (Homa-Havana). The Purusha Sukta has sixteen verses in the Rigveda (the Yajurveda forms have eighteen or twenty-one); the homa uses the Rigveda form. Count: with each of the sixteen verses of the Purusha Sukta, sixteen ghee oblations (256 in all); with each of the fifteen verses of the Sri Sukta, fifteen ghee oblations (225 in all). The Sri Sukta asks Lakshmi to drive away Alakshmi, settle in the house and lead one to the Lord. It is done without any wish, for the pleasure of the Lord; sometimes for success in marriage and other fortune, for the release of a departed one, or for expiation.',
      noteKn: 'ಪುರುಷಸೂಕ್ತ ಜಗತ್ಪಿತನಾದ ಶ್ರೀಹರಿಯನ್ನು, ಶ್ರೀಸೂಕ್ತ ಜಗನ್ಮಾತೆಯಾದ ಲಕ್ಷ್ಮಿಯನ್ನು ಕೊಂಡಾಡುತ್ತವೆ. ಇವುಗಳಿಂದ ಜಗದ ತಂದೆ–ತಾಯಿಯರನ್ನು ಸ್ತುತಿಸುವವನು ಧನ್ಯ, ಅರ್ಚಿಸುವವನು ಕೃತಾರ್ಥ, ಹೋಮಿಸುವವನು ಸುಕೃತಿ; ಆದ್ದರಿಂದ ಈ ಹೋಮ ಸುಕೃತಹೋಮ (ಹೋಮ–ಹವನ). ಋಗ್ವೇದದಲ್ಲಿ ಪುರುಷಸೂಕ್ತಕ್ಕೆ ಹದಿನಾರು ಮಂತ್ರಗಳು (ಯಜುರ್ವೇದ ರೂಪಗಳಲ್ಲಿ ಹದಿನೆಂಟು ಅಥವಾ ಇಪ್ಪತ್ತೊಂದು); ಹೋಮದಲ್ಲಿ ಋಗ್ವೇದ ರೂಪ. ಸಂಖ್ಯೆ: ಪುರುಷಸೂಕ್ತದ ಹದಿನಾರು ಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹದಿನಾರು ಆಜ್ಯಾಹುತಿ (ಒಟ್ಟು ೨೫೬); ಶ್ರೀಸೂಕ್ತದ ಹದಿನೈದು ಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಹದಿನೈದು ಆಜ್ಯಾಹುತಿ (ಒಟ್ಟು ೨೨೫). ಶ್ರೀಸೂಕ್ತವು ಅಲಕ್ಷ್ಮಿಯನ್ನು ಓಡಿಸಿ, ಮನೆಯಲ್ಲಿ ನೆಲೆಸಿ, ಭಗವಂತನ ಸನಿಹಕ್ಕೆ ಕರೆದೊಯ್ಯೆಂದು ಲಕ್ಷ್ಮಿಯನ್ನು ಬೇಡುತ್ತದೆ. ನಿಷ್ಕಾಮವಾಗಿ ಭಗವತ್ಪ್ರೀತಿಗಾಗಿ ಮಾಡುತ್ತಾರೆ; ಕೆಲವೊಮ್ಮೆ ವಿವಾಹಾದಿ ಭಾಗ್ಯಸಿದ್ಧಿಗಾಗಿ, ಪ್ರೇತಮೋಕ್ಷಕ್ಕಾಗಿ, ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿಯೂ.',
      verses: [
        {
          text: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥',
          meaning: {
            en: 'The Person has a thousand heads, a thousand eyes, a thousand feet; he pervades the earth on every side and stands beyond it by ten fingers’ breadth. (Purusha Sukta 1, Rigveda 10.90.1; the first of the sixteen verses, each offered with ghee sixteen times.)',
            kn: 'ಆ ಪುರುಷನಿಗೆ ಸಾವಿರ ತಲೆ, ಸಾವಿರ ಕಣ್ಣು, ಸಾವಿರ ಪಾದಗಳು; ಅವನು ಭೂಮಿಯನ್ನು ಎಲ್ಲ ಕಡೆಯಿಂದ ಆವರಿಸಿ ಹತ್ತು ಬೆರಳಿನಷ್ಟು ಮೀರಿ ನಿಂತಿದ್ದಾನೆ. (ಪುರುಷಸೂಕ್ತ ೧, ಋಗ್ವೇದ ೧೦.೯೦.೧; ಹದಿನಾರರಲ್ಲಿ ಮೊದಲನೆಯದು, ಪ್ರತಿಯೊಂದನ್ನೂ ಹದಿನಾರು ಬಾರಿ ಆಜ್ಯದಿಂದ ಹೋಮಿಸಬೇಕು.)',
          },
        },
        {
          text: 'हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम् ।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥',
          meaning: {
            en: 'O Jatavedas (Agni), bring to me Lakshmi: golden in hue, the remover of sorrow, wearing garlands of gold and silver, delightful as the moon and radiant as gold. (Sri Sukta 1; the first of the fifteen verses, each offered with ghee fifteen times.)',
            kn: 'ಓ ಜಾತವೇದನೇ (ಅಗ್ನಿದೇವನೇ), ಬಂಗಾರದ ಬಣ್ಣದವಳು, ದುಃಖಗಳನ್ನು ಹರಿಸುವವಳು, ಚಿನ್ನ ಬೆಳ್ಳಿಯ ಹಾರಗಳನ್ನು ಧರಿಸಿದವಳು, ಚಂದ್ರನಂತೆ ಆಹ್ಲಾದಕರಳು, ಸುವರ್ಣಮಯಿಯಾದ ಲಕ್ಷ್ಮಿಯನ್ನು ನನ್ನ ಬಳಿಗೆ ಕರೆತಾ. (ಶ್ರೀಸೂಕ್ತ ೧; ಹದಿನೈದರಲ್ಲಿ ಮೊದಲನೆಯದು, ಪ್ರತಿಯೊಂದನ್ನೂ ಹದಿನೈದು ಬಾರಿ ಆಜ್ಯದಿಂದ ಹೋಮಿಸಬೇಕು.)',
          },
        },
        {
          text: 'महालक्ष्मी च विद्महे विष्णुपत्नी च धीमहि ।\nतन्नो लक्ष्मीः प्रचोदयात् ॥',
          meaning: {
            en: 'We know Mahalakshmi; we meditate on the consort of Vishnu. May that Lakshmi inspire and guide us. (The Lakshmi Gayatri, as in the Sri Sukta of the library.)',
            kn: 'ಮಹಾಲಕ್ಷ್ಮಿಯನ್ನು ನಾವು ಅರಿಯುತ್ತೇವೆ; ವಿಷ್ಣುಪತ್ನಿಯನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಆ ಲಕ್ಷ್ಮೀ ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಲಕ್ಷ್ಮೀ ಗಾಯತ್ರಿ; ಗ್ರಂಥಾಲಯದ ಶ್ರೀಸೂಕ್ತದಲ್ಲಿರುವಂತೆ.)',
          },
        },
      ],
    },
    {
      title: 'होमक्रमः',
      titleEn: 'The order of the homa',
      note: 'Do the common steps up to the vyahriti offerings and the Vaishnava offerings (Madhva). Worship Lakshmi-Narayana on the kalasha or the saligrama as in the daily puja. Then offer ghee with the Purusha Sukta (256 oblations) and the Sri Sukta (225), reading the verses from the library texts "Purusha Suktam" and "Sri Suktam"; others recite the Sri Sukta’s remaining verses and the Lakshmi stotras as the manual allows. Close with the svishtakrit, prayaschitta, purnahuti, vasordhara and the rest of the Common Procedure, and sprinkle the family with the kalasha water.',
      noteKn: 'ಸಾಮಾನ್ಯ ಹಂತಗಳನ್ನು ವ್ಯಾಹೃತಿ ಆಹುತಿಗಳವರೆಗೂ (ಮಾಧ್ವ: ವೈಷ್ಣವ ಆಹುತಿಗಳವರೆಗೂ) ಮಾಡಿ. ಕಲಶ ಅಥವಾ ಸಾಲಿಗ್ರಾಮದಲ್ಲಿ ನಿತ್ಯಪೂಜೆಯಂತೆ ಲಕ್ಷ್ಮೀ–ನಾರಾಯಣರನ್ನು ಪೂಜಿಸಿ. ನಂತರ ಪುರುಷಸೂಕ್ತದಿಂದ (೨೫೬ ಆಹುತಿ) ಮತ್ತು ಶ್ರೀಸೂಕ್ತದಿಂದ (೨೨೫) ಆಜ್ಯಾಹುತಿ ನೀಡಿ; ಋಕ್ಕುಗಳನ್ನು ಗ್ರಂಥಾಲಯದ “ಪುರುಷಸೂಕ್ತ” ಮತ್ತು “ಶ್ರೀಸೂಕ್ತ” ಪಠ್ಯಗಳಿಂದ ಓದಿ; ಇತರರು ಶ್ರೀಸೂಕ್ತದ ಉಳಿದ ಮಂತ್ರಗಳನ್ನು ಮತ್ತು ಲಕ್ಷ್ಮೀ ಸ್ತೋತ್ರಗಳನ್ನು ಗ್ರಂಥದಲ್ಲಿ ಹೇಳಿದಂತೆ ಪಠಿಸುತ್ತಾರೆ. ಸ್ವಿಷ್ಟಕೃತ್, ಪ್ರಾಯಶ್ಚಿತ್ತ, ಪೂರ್ಣಾಹುತಿ, ವಸೋರ್ಧಾರಾ ಇತ್ಯಾದಿ ಸಾಮಾನ್ಯ ವಿಧಿಯಿಂದ ಮುಗಿಸಿ, ಕಲಶಜಲವನ್ನು ಮನೆಯವರಿಗೆ ಪ್ರೋಕ್ಷಿಸಿ.',
      verses: [
        {
          text: 'अथ प्रधानहोमः ॥ पुरुषसूक्तेन प्रत्यृचं षोडशवारम् । श्रीसूक्तेन प्रत्यृचं पञ्चदशवारम् ॥',
          meaning: {
            en: 'Now the main homa: with each verse of the Purusha Sukta sixteen times, with each verse of the Sri Sukta fifteen times. (An instruction, as the manual gives the count.)',
            kn: 'ಈಗ ಪ್ರಧಾನ ಹೋಮ: ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಹದಿನಾರು ಬಾರಿ, ಶ್ರೀಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಹದಿನೈದು ಬಾರಿ. (ಗ್ರಂಥ ಕೊಡುವ ಸಂಖ್ಯೆಯನ್ನು ಹೇಳುವ ಸೂಚನೆ.)',
          },
        },
      ],
    },
  ],
};
