/**
 * Sudarshana Homa: the main offerings, with the shared steps in "Homa: Common Procedure"
 * (homa-purvanga). NOT YET PROOFREAD against one printed edition.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012, chapter "Sudarshana
 *    Homa" (the three purposes, the dhyana verses, the eight materials with 126 oblations each,
 *    the Sudarshana mantras of the Madhva-mantra-ratnakara, the yantra). archive.org:
 *    20230827_20230827_0721.
 *  - "Sri Mahasudarshana Kalpa", ed. S. R. Narasimha Murthy (Bangalore; archive.org:
 *    mahasudarshanakalpa): the homa-vidhi with the anvadhana list (sarvatobhadra deities, pitha
 *    deities, the main deity with its count, avarana deities, svishtakrit, bali with payasa,
 *    purnahuti with a fruit), the Sudarshana Gayatri, the mantra "sahasrara hum phat svaha".
 *    The Kalpa follows the Pancharatra (Padma Samhita, Charyapada ch. 32); its scan is partly
 *    unreadable and only clear lines are used.
 *  - Madhva: Tantrasara-sangraha of Sri Madhvacharya, Mysore 2003, on the Sudarshana yantra
 *    and the Mukhyaprana-dhyana in the closing.
 * The Sudarshana dhyana verses and the prayer verse are given from Homa-Havana (one witness,
 * text clear); the Gayatri from the Kalpa (two places in the scan).
 */
import type { Mantra } from '../types';

export const sudarshanaHoma: Mantra = {
  id: 'sudarshana-homa',
  title: 'सुदर्शनहोमः',
  titleEn: 'Sudarshana Homa',
  category: 'homa',
  order: 5,
  deity: 'Sudarshana (the discus of Vishnu)',
  source: 'Madhva: Homa-Havana (Satyanarayanacharya); Sri Mahasudarshana Kalpa (Pancharatra); Tantrasara-sangraha',
  summary: 'The homa to Sudarshana, done to protect a new home, to remove the effect of sorcery and for taking the Vaishnava mudras: the dhyana of the eight-armed three-eyed Sudarshana, the Sudarshana Gayatri and the astra mantra, the eight materials and 126 oblations of each (1008 in all), the yantra, the bali, and the prayers. The common steps are in "Homa: Common Procedure".',
  summaryKn: 'ಹೊಸ ಮನೆಯ ರಕ್ಷೆ, ಅಭಿಚಾರದ ನಿವಾರಣೆ, ವೈಷ್ಣವ ಮುದ್ರಾಧಾರಣೆಗಾಗಿ ಮಾಡುವ ಸುದರ್ಶನ ಹೋಮ: ಎಂಟು ತೋಳುಗಳ, ತ್ರಿನೇತ್ರ ಸುದರ್ಶನನ ಧ್ಯಾನ, ಸುದರ್ಶನ ಗಾಯತ್ರೀ, ಅಸ್ತ್ರಮಂತ್ರ, ಎಂಟು ದ್ರವ್ಯಗಳು ಮತ್ತು ಒಂದೊಂದರಿಂದ ೧೨೬ ಆಹುತಿ (ಒಟ್ಟು ೧೦೦೮), ಯಂತ್ರ, ಬಲಿ, ಪ್ರಾರ್ಥನೆ. ಸಾಮಾನ್ಯ ಹಂತಗಳು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿವೆ.',
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'A guide for understanding and following along; homas are traditionally done with a trained priest. Do the common steps first (see "Homa: Common Procedure"), then the offerings given here. The Sudarshana mantras are initiation mantras and are not printed in full: the Madhva mala-mantra, the shat-akshara and the Sudarshana Ashtakam (Sri Vaishnava) are not given; the mantras here are the open Gayatri, the short astra mantra, and the verses of dhyana and prayer. The Sudarshana yantra, the sarvatobhadra mandala and its deities, the avarana worship and the exact bali formula are left to the purohita and the Kalpa. Follow your guru and family manual.',
  sections: [
    {
      title: 'सुदर्शनहोमविधानम्',
      titleEn: 'Aim, materials and count',
      note: 'The Sudarshana homa is done for three purposes: protection of the house, removal of sorcery and the like, and taking the Vaishnava chakra mudra. Sudarshana is the discus in the Lord’s right hand, who protects devotees and subdues the wicked; the goddess Durga is its presiding deity of the dark side, and the form of the Lord in it is fearsome to enemies, three-eyed, like Ugra-Narasimha. A yantra is drawn and worshipped on a five-coloured mandala; the Sudarshana yantra may also be drawn on a copper plate, touched with the ash of the homa and kept in the house to protect it, as a talisman protects the body. Materials, for a new house or protection: eight, each with 126 oblations, making 1008: ghee, apamarga sticks (against sorcery), sesame (against sin), mustard (to drive off ghosts and evil retinues), payasa (for enjoyment), panchagavya (for purification of the body) and rice or puffed rice (for children and prosperity), and ghee again at the beginning and end (for well-being). In the Kalpa the main deity is Sudarshana, with the sarvatobhadra mandala deities, the pitha deities and the avarana deities (Sudarshana, the other weapons, the ten guardians of the directions, Brahma and Ananta) offered ghee one by one before and after, then svishtakrit, the bali of payasa to Sudarshana and his retinue and to the directions, and the purnahuti with a fruit.',
      noteKn: 'ಸುದರ್ಶನ ಹೋಮವನ್ನು ಮೂರು ಉದ್ದೇಶಗಳಿಂದ ಮಾಡುತ್ತಾರೆ: ಗೃಹರಕ್ಷೆ, ಅಭಿಚಾರ ಮೊದಲಾದವುಗಳ ನಿವಾರಣೆ, ವೈಷ್ಣವ ಚಕ್ರಮುದ್ರಾಧಾರಣೆ. ಸುದರ್ಶನ ಭಗವಂತನ ಬಲಗೈಯಲ್ಲಿರುವ ಚಕ್ರ; ಭಕ್ತರನ್ನು ಪೊರೆಯುವ, ದುರುಳರನ್ನು ಶಿಕ್ಷಿಸುವ ಅಭಯಾಸ್ತ್ರ. ತಮೋಭಿಮಾನಿ ದುರ್ಗಾದೇವಿ ಇದಕ್ಕೆ ಅಭಿಮಾನಿನಿ; ಇದರಲ್ಲಿನ ಭಗವದ್ರೂಪ ಶತ್ರುಭಯಂಕರ, ತ್ರಿನೇತ್ರ, ಉಗ್ರನರಸಿಂಹನಂತೆ. ಪಂಚವರ್ಣದ ಮಂಡಲದಲ್ಲಿ ಯಂತ್ರ ಬರೆದು ಪೂಜಿಸುತ್ತಾರೆ; ತಾಮ್ರದ ಹಲಗೆಯಲ್ಲಿ ಬರೆದು ಹೋಮದ ರಕ್ಷೆಯನ್ನು ಹಚ್ಚಿ ಮನೆಯಲ್ಲಿಟ್ಟರೆ ದೇಹಕ್ಕೆ ತಾಯತದಂತೆ ಗೃಹಕ್ಕೆ ರಕ್ಷೆ. ನೂತನ ಗೃಹ ಅಥವಾ ರಕ್ಷೆಗಾಗಿ ದ್ರವ್ಯಗಳು ಎಂಟು, ಒಂದೊಂದರಿಂದ ೧೨೬ ಆಹುತಿ, ಒಟ್ಟು ೧೦೦೮: ತುಪ್ಪ, ಉತ್ತರಾಣೆ ಕಡ್ಡಿ (ಅಭಿಚಾರ ವಿರುದ್ಧ), ಎಳ್ಳು (ದುರಿತ ನಿವಾರಣೆಗೆ), ಸಾಸಿವೆ (ಭೂತ–ದುಷ್ಟ ಪರಿವಾರ ನಿಗ್ರಹಕ್ಕೆ), ಪಾಯಸ (ಭೋಗಸಿದ್ಧಿಗೆ), ಪಂಚಗವ್ಯ (ದೇಹಶುದ್ಧಿಗೆ), ಅಕ್ಕಿ ಅಥವಾ ಅರಳು (ಸಂತತಿ–ಅಭ್ಯುದಯಕ್ಕೆ), ಆದಿ–ಅಂತ್ಯಗಳಲ್ಲಿ ಯೋಗಕ್ಷೇಮಕ್ಕಾಗಿ ತುಪ್ಪ. ಕಲ್ಪದಲ್ಲಿ ಪ್ರಧಾನ ದೇವತೆ ಸುದರ್ಶನ; ಮೊದಲು ಮತ್ತು ನಂತರ ಸರ್ವತೋಭದ್ರ ಮಂಡಲ ದೇವತೆಗಳು, ಪೀಠ ದೇವತೆಗಳು, ಆವರಣ ದೇವತೆಗಳು (ಸುದರ್ಶನ, ಇತರ ಆಯುಧಗಳು, ಹತ್ತು ದಿಕ್ಪಾಲರು, ಬ್ರಹ್ಮ, ಅನಂತ) ಒಂದೊಂದಾಗಿ ಆಜ್ಯಾಹುತಿ ಪಡೆಯುತ್ತಾರೆ; ನಂತರ ಸ್ವಿಷ್ಟಕೃತ್, ಸುದರ್ಶನ–ಪರಿವಾರಕ್ಕೂ ದಿಕ್ಕುಗಳಿಗೂ ಪಾಯಸಬಲಿ, ಫಲದೊಡನೆ ಪೂರ್ಣಾಹುತಿ.',
      verses: [
        {
          text: 'सुदर्शन महाज्वाल कोटिसूर्यसमप्रभ ।\nअज्ञानान्धस्य मे नित्यं विष्णोर्मार्गं प्रदर्शय ॥',
          meaning: {
            en: 'O Sudarshana of great flame, bright as ten million suns, show me, blind with ignorance, always the way to Vishnu. (Prayer, Homa-Havana)',
            kn: 'ಮಹಾಜ್ವಾಲೆಯ, ಕೋಟಿಸೂರ್ಯ ಪ್ರಭೆಯ ಓ ಸುದರ್ಶನನೇ, ಅಜ್ಞಾನದಿಂದ ಕುರುಡನಾದ ನನಗೆ ಯಾವಾಗಲೂ ವಿಷ್ಣುವಿನ ಮಾರ್ಗವನ್ನು ತೋರು. (ಪ್ರಾರ್ಥನೆ, ಹೋಮ–ಹವನ)',
          },
        },
      ],
    },
    {
      title: 'ध्यानम्',
      titleEn: 'Dhyana of Sudarshana',
      note: 'Meditate on the Lord in the Sudarshana chakra with these two verses before the main offerings and again at the invocation in the fire: the first describes the fierce form (noon-sun bright, tawny-haired, three-eyed, eight-armed), the second the weapons in the eight hands: conch, discus, mace, lotus, pestle, bow, noose and goad.',
      noteKn: 'ಪ್ರಧಾನಾಹುತಿಗಳ ಮೊದಲು ಮತ್ತು ಅಗ್ನಿಯಲ್ಲಿ ಆವಾಹನೆಯ ಸಮಯದಲ್ಲಿ ಈ ಎರಡು ಶ್ಲೋಕಗಳಿಂದ ಸುದರ್ಶನ ಚಕ್ರದಲ್ಲಿರುವ ಭಗವಂತನನ್ನು ಧ್ಯಾನಿಸಿ: ಮೊದಲನೆಯದು ಉಗ್ರರೂಪ (ಮಧ್ಯಾಹ್ನಸೂರ್ಯನ ಪ್ರಭೆ, ಕೆಂಚು ಕೂದಲು, ಮೂರು ಕಣ್ಣು, ಎಂಟು ತೋಳು); ಎರಡನೆಯದು ಎಂಟು ಕೈಗಳ ಆಯುಧಗಳು: ಶಂಖ, ಚಕ್ರ, ಗದೆ, ಪದ್ಮ, ಒನಕೆ, ಧನುಸ್ಸು, ಪಾಶ, ಅಂಕುಶ.',
      verses: [
        {
          text: 'मध्याह्नसूर्यप्रतिमप्रकाशं पिशङ्गकेशं स्फुरदट्टहासम् ।\nत्र्यक्षं प्रदीप्ताम्बरमग्र्यमीडे चक्रस्थितं चक्रिणमष्टबाहुम् ॥',
          meaning: {
            en: 'I praise the foremost one, bright as the noon sun, tawny-haired, with a flashing loud laugh, three-eyed, in blazing garments, standing in the discus, the wielder of the discus, eight-armed.',
            kn: 'ಮಧ್ಯಾಹ್ನದ ಸೂರ್ಯನಂತೆ ಹೊಳೆಯುವ, ಕೆಂಚು ಕೂದಲಿನ, ಮಿಂಚುವ ಅಟ್ಟಹಾಸದ, ತ್ರಿನೇತ್ರನಾದ, ಉರಿಯುವ ವಸ್ತ್ರದ, ಚಕ್ರದಲ್ಲಿ ನೆಲೆಸಿದ, ಚಕ್ರಧಾರಿಯಾದ, ಎಂಟು ತೋಳುಗಳ ಅಗ್ರಗಣ್ಯನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'शङ्खं चक्रं गदाब्जे पृथुतरमुसलं चापपाशाङ्कुशादीन्\nबिभ्राणं दोर्भिराढ्यं मनसि मुररिपुं भावये चक्रराजम् ॥',
          meaning: {
            en: 'In my mind I contemplate the enemy of Mura, the king of discs, rich in arms, who bears the conch, discus, mace, lotus, a great pestle, bow, noose, goad and the rest.',
            kn: 'ಶಂಖ, ಚಕ್ರ, ಗದೆ, ಪದ್ಮ, ದೊಡ್ಡ ಒನಕೆ, ಧನುಸ್ಸು, ಪಾಶ, ಅಂಕುಶ ಮೊದಲಾದವನ್ನು ತೋಳುಗಳಲ್ಲಿ ಧರಿಸಿದ ಮುರಾರಿ, ಚಕ್ರರಾಜನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಧ್ಯಾನಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'मन्त्राः',
      titleEn: 'The Gayatri and the astra mantra',
      note: 'Invoke Sudarshana in the fire and the yantra with the Sudarshana Gayatri; the oblations are made with the guru-given mula mantra, one for each count named above. The short astra mantra of the Kalpa is given for japa and for the homa; the Madhva-mantra-ratnakara has three Sudarshana mantras (the astra mantra, the mala mantra of 108 letters and a third), which are taken only from a guru. The astra mantra of Sudarshana is also used on every homa: with it the kravyada fire is thrown to the south-west before the fire is installed (see the Common Procedure).',
      noteKn: 'ಅಗ್ನಿ–ಯಂತ್ರಗಳಲ್ಲಿ ಸುದರ್ಶನ ಗಾಯತ್ರಿಯಿಂದ ಆವಾಹಿಸಿ; ಆಹುತಿಗಳನ್ನು ಮೇಲೆ ಹೇಳಿದ ಸಂಖ್ಯೆಯಂತೆ ಗುರೂಪದಿಷ್ಟ ಮೂಲಮಂತ್ರದಿಂದ ನೀಡಿ. ಕಲ್ಪದ ಚಿಕ್ಕ ಅಸ್ತ್ರಮಂತ್ರ ಜಪಕ್ಕೂ ಹೋಮಕ್ಕೂ; ಮಧ್ವಮಂತ್ರರತ್ನಾಕರದಲ್ಲಿ ಮೂರು ಸುದರ್ಶನ ಮಂತ್ರಗಳಿವೆ (ಅಸ್ತ್ರಮಂತ್ರ, ೧೦೮ ಅಕ್ಷರದ ಮಾಲಾಮಂತ್ರ ಮತ್ತು ಇನ್ನೊಂದು); ಇವನ್ನು ಗುರುವಿನಿಂದಲೇ ಪಡೆಯಬೇಕು. ಸುದರ್ಶನಾಸ್ತ್ರಮಂತ್ರವನ್ನು ಎಲ್ಲ ಹೋಮಗಳಲ್ಲೂ ಬಳಸುತ್ತಾರೆ: ಅಗ್ನಿಪ್ರತಿಷ್ಠೆಗೆ ಮೊದಲು ಕ್ರವ್ಯಾದ ಅಗ್ನಿಯನ್ನು ನೈರುತ್ಯಕ್ಕೆ ಎಸೆಯುವಾಗ (ಸಾಮಾನ್ಯ ವಿಧಿ ನೋಡಿ).',
      verses: [
        {
          text: 'ॐ सुदर्शनाय विद्महे हेतिराजाय धीमहि ।\nतन्नश्चक्रः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, we know Sudarshana; we meditate on the king of weapons; may the Discus move us. (Sudarshana Gayatri, Sri Mahasudarshana Kalpa)',
            kn: 'ಓಂ, ಸುದರ್ಶನನನ್ನು ತಿಳಿಯುತ್ತೇವೆ; ಆಯುಧರಾಜನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಆ ಚಕ್ರವು ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಸುದರ್ಶನ ಗಾಯತ್ರೀ, ಶ್ರೀಮಹಾಸುದರ್ಶನ ಕಲ್ಪ)',
          },
        },
        {
          text: 'ॐ सहस्रार हुं फट् स्वाहा ॥',
          meaning: {
            en: 'Om, O thousand-spoked one, hum phat, svaha. (The short astra mantra of Sudarshana, Sri Mahasudarshana Kalpa.)',
            kn: 'ಓಂ, ಸಹಸ್ರಾರನೇ, ಹುಂ ಫಟ್ ಸ್ವಾಹಾ. (ಸುದರ್ಶನನ ಚಿಕ್ಕ ಅಸ್ತ್ರಮಂತ್ರ, ಶ್ರೀಮಹಾಸುದರ್ಶನ ಕಲ್ಪ.)',
          },
        },
      ],
    },
    {
      title: 'बलिदानं पूर्णाहुतिश्च',
      titleEn: 'Bali, purnahuti and closing',
      note: 'After the main offerings and the svishtakrit, offer, as the Kalpa gives it, a bali of black-gram food with a lamp to the guardians of the directions and the bali of payasa to Sudarshana with his weapons and retinue: the yajamana with his wife makes the bali sankalpa for each and releases the water; then he prays that the gods, the Adityas, Vasus and Maruts, the Ashvins, Rudras, the nagas, the vidyadharas and all spirits accept the bali, and "let there be no obstacle, no sin and no enemy; may the spirits be pleased and give happiness". Say शान्ता पृथिवी शिवमन्तरिक्षम्…, sprinkle the place and do the purnahuti with a fruit and then the vasordhara as in the Common Procedure. The purohita chants the full Sudarshana stotras. Take the raksha of the homa to the house and give dakshina.',
      noteKn: 'ಪ್ರಧಾನಾಹುತಿ–ಸ್ವಿಷ್ಟಕೃತ್‌ಗಳ ನಂತರ, ಕಲ್ಪದಲ್ಲಿ ಹೇಳಿದಂತೆ ದಿಕ್ಪಾಲಕರಿಗೆ ದೀಪದೊಡನೆ ಉದ್ದಿನ ಅನ್ನದ ಬಲಿಯನ್ನು, ಆಯುಧ–ಪರಿವಾರ ಸಹಿತ ಸುದರ್ಶನನಿಗೆ ಪಾಯಸಬಲಿಯನ್ನು ನೀಡಿ: ಯಜಮಾನ ಪತ್ನಿಯೊಡನೆ ಪ್ರತಿಯೊಬ್ಬರಿಗೆ ಬಲಿಸಂಕಲ್ಪ ಮಾಡಿ ನೀರು ಬಿಡುತ್ತಾನೆ; ನಂತರ ದೇವತೆಗಳು, ಆದಿತ್ಯ, ವಸು, ಮರುತ್ತುಗಳು, ಅಶ್ವಿನೀ ದೇವತೆಗಳು, ರುದ್ರರು, ನಾಗ, ವಿದ್ಯಾಧರ ಮತ್ತು ಸಮಸ್ತ ಭೂತಗಳು ಬಲಿಯನ್ನು ಸ್ವೀಕರಿಸಲಿ, “ವಿಘ್ನವಿಲ್ಲದಿರಲಿ, ಪಾಪವಿಲ್ಲದಿರಲಿ, ವೈರಿಗಳಿಲ್ಲದಿರಲಿ; ಭೂತಗಳು ತೃಪ್ತಿಹೊಂದಿ ಸುಖ ಕೊಡಲಿ” ಎಂದು ಪ್ರಾರ್ಥಿಸುತ್ತಾನೆ. “ಶಾಂತಾ ಪೃಥಿವೀ ಶಿವಮಂತರಿಕ್ಷಮ್…” ಹೇಳಿ, ಸ್ಥಳವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ, ಫಲದೊಡನೆ ಪೂರ್ಣಾಹುತಿ ಮಾಡಿ, ಸಾಮಾನ್ಯ ವಿಧಿಯಂತೆ ವಸೋರ್ಧಾರಾ. ಪುರೋಹಿತರು ಸುದರ್ಶನ ಸ್ತೋತ್ರಗಳನ್ನು ಪೂರ್ಣವಾಗಿ ಪಠಿಸುತ್ತಾರೆ. ಹೋಮದ ರಕ್ಷೆಯನ್ನು ಮನೆಗೆ ಒಯ್ಯಿರಿ; ದಕ್ಷಿಣೆ ಕೊಡಿ.',
      verses: [
        {
          text: 'शान्ता पृथिवी शिवमन्तरिक्षं द्यौर्नो देव्यभयं नो अस्तु ।\nशिवा दिशः प्रदिशो दिशो न आपो विद्युतः परिपान्तु विश्वतः ॥\nशान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'May the earth be peaceful and the air auspicious; may the divine heaven give us freedom from fear; may the directions and the intermediate directions, the waters and the lightnings be kind and protect us on every side. Peace, peace, peace. (As read in the Sudarshana Kalpa.)',
            kn: 'ಭೂಮಿ ಶಾಂತವಾಗಿರಲಿ, ಅಂತರಿಕ್ಷ ಶುಭವಾಗಿರಲಿ; ದಿವ್ಯ ದ್ಯುಲೋಕ ನಮಗೆ ಅಭಯ ನೀಡಲಿ; ದಿಕ್ಕುಗಳು, ಉಪದಿಕ್ಕುಗಳು, ಜಲಗಳು, ಮಿಂಚುಗಳು ಮಂಗಳಕರವಾಗಿ ಎಲ್ಲ ಕಡೆಯಿಂದ ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ. ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ. (ಸುದರ್ಶನ ಕಲ್ಪದಲ್ಲಿರುವಂತೆ.)',
          },
        },
      ],
    },
  ],
};
