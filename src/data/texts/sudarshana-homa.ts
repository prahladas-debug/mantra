/**
 * Sudarshana Homa: the whole rite in order, with the Common Procedure (homa-purvanga) for the
 * agnimukha and the uttaranga.
 *
 * Sources:
 *  - "Sri Mahasudarshana Kalpa" (Sri Mahasudarshana puja, homa, stotra, mantra, yantra, kavacha),
 *    ed. Ve. Bra. Sri Dr. S. R. Narasimha Murthy, Bangalore (Kannada script; archive.org:
 *    mahasudarshanakalpa), following the Pancharatra (Padma Samhita, Charyapada ch. 32): the
 *    sankalpa, punyahavachana and nandi, the varana of acharya and Brahma (Rigveda 2.23.15, 3.35.4),
 *    the sarvatobhadra mandala, the yantra and image on the purna-patra, the japa of the Sudarshana
 *    ashtakshari (ॐ सहस्रार हुं फट् स्वाहा) with its dhyana, the homa-vidhi (Rigvedi agnimukha and
 *    anvadhana, the pitha deities, the main deity with its count, the avarana deities: the six
 *    chakras, the weapons, the ten guardians, Brahma and Ananta), svishtakrit and prayaschitta, the
 *    bali of payasa and the bali prayer, śāntā pṛthivī, the purnahuti with yāḥ phalinīḥ and
 *    samudrād ūrmiḥ, the abhisheka of the yajamana with the kalasha water, the kavacha marjana, the
 *    gifts. The scan is partly unreadable; only clear lines are printed, and where a word had to be
 *    supplied from the common printed form it is said so in the note.
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012 (archive.org:
 *    20230827_20230827_0721), chapter "Sudarshana Homa": the three purposes, the two dhyana verses,
 *    the eight materials with 126 oblations each (1008), the Sudarshana mantras of the
 *    Madhva-mantra-ratnakara (astra and mala mantra), the yantra; and the prayer verse.
 *  - Rigveda (GRETIL, Aufrecht) 2.23.15, 3.35.4, 10.97.15 checked; the uttaranga mantras are in the
 *    Common Procedure.
 */
import type { Mantra } from '../types';

export const sudarshanaHoma: Mantra = {
  id: 'sudarshana-homa',
  title: 'सुदर्शनहोमः',
  titleEn: 'Sudarshana Homa',
  category: 'homa',
  order: 5,
  deity: 'Sudarshana (the discus of Vishnu)',
  source: 'Sri Mahasudarshana Kalpa (Pancharatra), ed. S. R. Narasimha Murthy; Madhva: H. Satyanarayanacharya, Homa-Havana',
  summary: 'The Sudarshana homa from start to end, done to protect a home, to remove the effect of sorcery and for taking the Vaishnava mudras: the materials and the count (eight materials, 126 oblations each), the sankalpa, choosing the acharya and Brahma, the yantra, dhyana and japa of the Sudarshana mantra, the agnimukha from the Common Procedure, the offerings to the pitha deities, the main offerings, the offerings to the avarana deities, the bali, the purnahuti with a fruit, the abhisheka of the yajamana with the kalasha water, the gifts, raksha and samarpana.',
  summaryKn: 'ಮನೆಯ ರಕ್ಷೆ, ಅಭಿಚಾರ ನಿವಾರಣೆ, ವೈಷ್ಣವ ಮುದ್ರಾಧಾರಣೆಗಾಗಿ ಮಾಡುವ ಸುದರ್ಶನ ಹೋಮ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ದ್ರವ್ಯ–ಸಂಖ್ಯೆ (ಎಂಟು ದ್ರವ್ಯಗಳು, ಒಂದೊಂದರಿಂದ ೧೨೬), ಸಂಕಲ್ಪ, ಆಚಾರ್ಯ–ಬ್ರಹ್ಮವರಣ, ಯಂತ್ರ, ಧ್ಯಾನ, ಸುದರ್ಶನ ಮಂತ್ರ ಜಪ, ಸಾಮಾನ್ಯ ಕ್ರಮದ ಅಗ್ನಿಮುಖ, ಪೀಠದೇವತಾ ಹೋಮ, ಪ್ರಧಾನಾಹುತಿ, ಆವರಣದೇವತಾ ಹೋಮ, ಬಲಿ, ಫಲದೊಡನೆ ಪೂರ್ಣಾಹುತಿ, ಕಲಶಜಲದಿಂದ ಯಜಮಾನಾಭಿಷೇಕ, ದಾನ, ರಕ್ಷೆ, ಸಮರ್ಪಣೆ.',
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'The rite in order from sankalpa to samarpana, with the agnimukha and uttaranga in “Homa: Common Procedure” (Madhva or Smarta). Not printed: the Sudarshana mula and mala mantras, which are initiation mantras taken from a guru (they are described, and the open eight-syllable mantra of the Kalpa is given for the offerings); the deities of the sarvatobhadra mandala and the full list of pitha deities, which the one printed Kalpa gives in a scan that is partly unreadable (the first pitha offerings are printed as examples); the Sudarshana Kavacha used for the marjana, the rest of the abhisheka verses and the verse for the gift of the kalasha, for the same reason; the yantra drawing. Homas are traditionally done with a trained priest; follow your guru and family manual.',
  sections: [
    {
      title: 'सुदर्शनहोमविधानम्',
      titleEn: 'Aim, materials and count',
      note: 'The Sudarshana homa is done for three purposes: protection of the house (especially a new one), removal of sorcery and the like, and taking the Vaishnava chakra mudra (Homa-Havana). Sudarshana is the discus in the Lord’s right hand, who protects devotees and subdues the wicked; Durga is its presiding deity, and the form of the Lord in it is fearsome to enemies, three-eyed, like Ugra-Narasimha. Keep ready: a kalasha and purna-patra with the Sudarshana yantra drawn on a copper plate (or a five-coloured mandala) and an image, the sarvatobhadra mandala if the Kalpa’s full form is done, and the eight materials, each for 126 oblations (1008 in all): ghee at the beginning (for well-being), apamarga sticks (against sorcery), sesame (against sin), mustard (to drive off ghosts and evil retinues), payasa (for enjoyment), panchagavya (for purification of the body), rice or puffed rice (for children and prosperity), and ghee again at the end; black-gram food and a lamp for the bali to the directions, payasa for the bali to Sudarshana, a fruit for the purnahuti. The homa may also be done after a japa of the Sudarshana mantra, with a tenth of the japa count (Kalpa).',
      noteKn: 'ಸುದರ್ಶನ ಹೋಮವನ್ನು ಮೂರು ಉದ್ದೇಶಗಳಿಗೆ ಮಾಡುತ್ತಾರೆ: ಮನೆಯ (ವಿಶೇಷವಾಗಿ ಹೊಸ ಮನೆಯ) ರಕ್ಷೆ, ಅಭಿಚಾರಾದಿ ದೋಷ ನಿವಾರಣೆ, ವೈಷ್ಣವ ಚಕ್ರಮುದ್ರಾಧಾರಣೆ (ಹೋಮ–ಹವನ). ಭಗವಂತನ ಬಲಗೈಯಲ್ಲಿರುವ ಚಕ್ರ ಸುದರ್ಶನ, ಭಕ್ತರನ್ನು ಪೊರೆಯುವ ದುಷ್ಟರನ್ನು ನಿಗ್ರಹಿಸುವ; ದುರ್ಗಾದೇವಿ ಅದರ ಅಭಿಮಾನಿನಿ; ಅದರಲ್ಲಿರುವ ಭಗವದ್ರೂಪ ಉಗ್ರನರಸಿಂಹನಂತೆ ತ್ರಿನೇತ್ರ, ಶತ್ರುಭಯಂಕರ. ಸಿದ್ಧಪಡಿಸಿ: ಕಲಶ ಮತ್ತು ಪೂರ್ಣಪಾತ್ರ, ತಾಮ್ರದ ಹಲಗೆಯಲ್ಲಿ (ಅಥವಾ ಪಂಚವರ್ಣ ಮಂಡಲದಲ್ಲಿ) ಬರೆದ ಸುದರ್ಶನ ಯಂತ್ರ ಮತ್ತು ಪ್ರತಿಮೆ, ಕಲ್ಪದ ಪೂರ್ಣ ರೂಪಕ್ಕೆ ಸರ್ವತೋಭದ್ರ ಮಂಡಲ, ಮತ್ತು ಎಂಟು ದ್ರವ್ಯಗಳು ಒಂದೊಂದೂ ೧೨೬ ಆಹುತಿಗೆ (ಒಟ್ಟು ೧೦೦೮): ಆರಂಭದಲ್ಲಿ ತುಪ್ಪ (ಯೋಗಕ್ಷೇಮಕ್ಕೆ), ಉತ್ತರಣೆ ಕಡ್ಡಿ (ಅಭಿಚಾರ ನಿವಾರಣೆಗೆ), ಎಳ್ಳು (ದುರಿತಕ್ಕೆ), ಸಾಸಿವೆ (ಭೂತಪ್ರೇತಾದಿ ನಿಗ್ರಹಕ್ಕೆ), ಪಾಯಸ (ಭೋಗಕ್ಕೆ), ಪಂಚಗವ್ಯ (ಶರೀರಶುದ್ಧಿಗೆ), ಅಕ್ಕಿ ಅಥವಾ ಅರಳು (ಸಂತಾನ–ಅಭ್ಯುದಯಕ್ಕೆ), ಕೊನೆಯಲ್ಲಿ ಮತ್ತೆ ತುಪ್ಪ; ದಿಗ್ಬಲಿಗೆ ಉದ್ದಿನ ಅನ್ನ ಮತ್ತು ದೀಪ, ಸುದರ್ಶನ ಬಲಿಗೆ ಪಾಯಸ, ಪೂರ್ಣಾಹುತಿಗೆ ಫಲ. ಸುದರ್ಶನ ಮಂತ್ರ ಜಪದ ನಂತರ ಅದರ ದಶಾಂಶ ಹೋಮವಾಗಿಯೂ ಮಾಡಬಹುದು (ಕಲ್ಪ).',
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
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa',
      note: 'Do achamana, pranayama and the deshakala as in the Common Procedure (Madhvas add the यज्ञपुरुषान्तर्यामि… प्रेरणया of their sankalpa). Holding akshata and water, make the sankalpa; then do the short punyahavachana of the Common Procedure, saying महासुदर्शनहोमे कर्मणि पुण्याहं भवन्तो ब्रुवन्तु and so on, and the nandi if the family does it (Kalpa).',
      noteKn: 'ಸಾಮಾನ್ಯ ಕ್ರಮದಂತೆ ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ದೇಶಕಾಲ ಹೇಳಿ (ಮಾಧ್ವರು ತಮ್ಮ ಸಂಕಲ್ಪದ “ಯಜ್ಞಪುರುಷಾಂತರ್ಯಾಮಿ… ಪ್ರೇರಣಯಾ” ಸೇರಿಸುತ್ತಾರೆ). ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಸಂಕಲ್ಪ ಮಾಡಿ; ನಂತರ “ಮಹಾಸುದರ್ಶನಹೋಮೇ ಕರ್ಮಣಿ ಪುಣ್ಯಾಹಂ ಭವಂತೋ ಬ್ರುವಂತು” ಇತ್ಯಾದಿಯಾಗಿ ಸಾಮಾನ್ಯ ಕ್ರಮದ ಸಂಕ್ಷಿಪ್ತ ಪುಣ್ಯಾಹವಾಚನ, ಮನೆತನದಲ್ಲಿ ರೂಢಿಯಿದ್ದರೆ ನಾಂದೀ (ಕಲ್ಪ).',
      verses: [
        {
          text: 'मम सकुटुम्बस्य गृहस्य च रक्षार्थं शत्रुकृतदुर्मन्त्रदुरुपद्रवादीनां समूलोन्मूलनद्वारा सर्वशत्रुपलायनार्थं\nसर्वग्रहबाधानिवारणार्थं श्रुतिस्मृत्यागमपुराणोक्तफलावाप्तये\nअखिलपापक्षयपूर्वकं धर्मार्थकाममोक्षचतुर्विधपुरुषार्थसिद्धिद्वारा\nसर्वदेवतात्मकश्रीमहासुदर्शनप्रीत्यर्थं यथासम्भवद्रव्यैः सम्भवद्भिरुपचारैश्च\nपाञ्चरात्रागमोक्तविधानेन श्रीमहासुदर्शनहोमाख्यं कर्म करिष्ये ।\nतदङ्गतया विहितं स्वस्तिपुण्याहवाचनम् आचार्यादिवरणं च करिष्ये ॥',
          meaning: {
            en: 'For the protection of myself, my family and my house; for uprooting the evil mantras and troubles caused by enemies, so that all enemies flee; for the removal of all affliction by the planets and spirits; for the fruit told in the Shruti, Smriti, Agamas and Puranas; through the destruction of all sins and the attainment of the four aims of life; for the pleasure of Sri Mahasudarshana, in whom all the gods are present: with such materials and honours as I can, by the rule of the Pancharatra Agama I shall perform the rite called the Sri Mahasudarshana homa; as its part I shall do the svasti-punyahavachana and choose the acharya and the others. (Abridged from the Kalpa’s sankalpa.)',
            kn: 'ನನ್ನ, ನನ್ನ ಕುಟುಂಬದ, ಮನೆಯ ರಕ್ಷೆಗಾಗಿ; ಶತ್ರುಗಳು ಮಾಡಿದ ದುರ್ಮಂತ್ರ–ದುರುಪದ್ರವಗಳ ಸಮೂಲ ನಿರ್ಮೂಲನದ ಮೂಲಕ ಎಲ್ಲ ಶತ್ರುಗಳ ಪಲಾಯನಕ್ಕಾಗಿ; ಎಲ್ಲ ಗ್ರಹಬಾಧೆಗಳ ನಿವಾರಣೆಗಾಗಿ; ಶ್ರುತಿ, ಸ್ಮೃತಿ, ಆಗಮ, ಪುರಾಣೋಕ್ತ ಫಲಪ್ರಾಪ್ತಿಗಾಗಿ; ಅಖಿಲ ಪಾಪಕ್ಷಯ ಪೂರ್ವಕ ಚತುರ್ವಿಧ ಪುರುಷಾರ್ಥ ಸಿದ್ಧಿಯ ಮೂಲಕ ಸರ್ವದೇವತಾತ್ಮಕ ಶ್ರೀಮಹಾಸುದರ್ಶನನ ಪ್ರೀತಿಗಾಗಿ ಯಥಾಸಂಭವ ದ್ರವ್ಯ–ಉಪಚಾರಗಳಿಂದ ಪಾಂಚರಾತ್ರಾಗಮೋಕ್ತ ವಿಧಾನದಿಂದ ಶ್ರೀಮಹಾಸುದರ್ಶನ ಹೋಮವೆಂಬ ಕರ್ಮ ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ವಸ್ತಿಪುಣ್ಯಾಹವಾಚನ, ಆಚಾರ್ಯಾದಿ ವರಣ ಮಾಡುತ್ತೇನೆ. (ಕಲ್ಪದ ಸಂಕಲ್ಪದ ಸಂಕ್ಷೇಪ.)',
          },
        },
      ],
    },
    {
      title: 'आचार्यवरणं ब्रह्मवरणं च',
      titleEn: 'Choosing the acharya and the Brahma',
      note: 'With gandha, akshata, betel, a ring and cloth, choose the acharya (अमुकगोत्रम् अमुकशर्माणं ब्राह्मणम् … आचार्यत्वेन त्वामहं वृणे) with the Brihaspati verse and the prayer, and the Brahma with the Rigvedic verse to Indra; honour the other priests with the upacharas. The acharya does a nyasa of the Purusha Sukta on his body for purity (Kalpa).',
      noteKn: 'ಗಂಧ, ಅಕ್ಷತೆ, ತಾಂಬೂಲ, ಉಂಗುರ, ವಸ್ತ್ರಗಳಿಂದ ಬೃಹಸ್ಪತಿ ಮಂತ್ರ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯೊಡನೆ ಆಚಾರ್ಯವರಣ (ಅಮುಕಗೋತ್ರಮ್ ಅಮುಕಶರ್ಮಾಣಂ ಬ್ರಾಹ್ಮಣಮ್ … ಆಚಾರ್ಯತ್ವೇನ ತ್ವಾಮಹಂ ವೃಣೇ), ಇಂದ್ರನ ಋಙ್ಮಂತ್ರದಿಂದ ಬ್ರಹ್ಮವರಣ; ಇತರ ಋತ್ವಿಜರನ್ನು ಉಪಚಾರಗಳಿಂದ ಗೌರವಿಸಿ. ಆಚಾರ್ಯರು ಶುದ್ಧಿಗಾಗಿ ಪುರುಷಸೂಕ್ತ ನ್ಯಾಸ ಮಾಡುತ್ತಾರೆ (ಕಲ್ಪ).',
      verses: [
        {
          text: 'बृहस्पते अति यदर्यो अर्हाद्द्युमद्विभाति क्रतुमज्जनेषु ।\nयद्दीदयच्छवस ऋतप्रजात तदस्मासु द्रविणं धेहि चित्रम् ॥\nआचार्यस्तु यथा स्वर्गे शक्रादीनां बृहस्पतिः ।\nमहासुदर्शनहोमेऽस्मिन्नाचार्यो भव सुव्रत ॥',
          meaning: {
            en: 'O Brihaspati, the wealth that the noble deserve, that shines bright and powerful among men, that blazes with strength, O you born of the cosmic order, give us that wonderful wealth. (Rigveda 2.23.15.) As Brihaspati is the teacher of Indra and the gods in heaven, so be the acharya in this Mahasudarshana homa, O you of good vows. (Kalpa.)',
            kn: 'ಓ ಬೃಹಸ್ಪತಿಯೇ, ಶ್ರೇಷ್ಠರಿಗೆ ಯೋಗ್ಯವಾದ, ಜನರಲ್ಲಿ ತೇಜಸ್ಸಿನಿಂದ ಶಕ್ತಿಯಿಂದ ಹೊಳೆಯುವ, ಬಲದಿಂದ ಬೆಳಗುವ ಸಂಪತ್ತನ್ನು, ಓ ಋತದಿಂದ ಹುಟ್ಟಿದವನೇ, ನಮಗೆ ಕೊಡು. (ಋಗ್ವೇದ ೨.೨೩.೧೫) ಸ್ವರ್ಗದಲ್ಲಿ ಇಂದ್ರಾದಿಗಳಿಗೆ ಬೃಹಸ್ಪತಿ ಆಚಾರ್ಯನಾಗಿರುವಂತೆ, ಓ ಸುವ್ರತನೇ, ಈ ಮಹಾಸುದರ್ಶನ ಹೋಮದಲ್ಲಿ ಆಚಾರ್ಯನಾಗು. (ಕಲ್ಪ)',
          },
        },
        {
          text: 'ब्रह्मणा ते ब्रह्मयुजा युनज्मि हरी सखाया सधमाद आशू ।\nस्थिरं रथं सुखमिन्द्राधितिष्ठन्प्रजानन्विद्वाँ उप याहि सोमम् ॥',
          meaning: {
            en: 'With the prayer I yoke your two swift bay horses, companions in joy, yoked by the prayer; mounting the firm and easy chariot, O Indra, knowing and wise, come to the Soma. (Rigveda 3.35.4, said choosing the Brahma.)',
            kn: 'ಮಂತ್ರದಿಂದ ಕೂಡಿದ, ಸಂತೋಷದಲ್ಲಿ ಸಂಗಾತಿಗಳಾದ ನಿನ್ನ ಎರಡು ವೇಗದ ಕುದುರೆಗಳನ್ನು ಮಂತ್ರದಿಂದ ಹೂಡುತ್ತೇನೆ; ಓ ಇಂದ್ರನೇ, ದೃಢವಾದ ಸುಖಕರ ರಥವನ್ನೇರಿ, ತಿಳಿದವನಾಗಿ ಸೋಮದ ಬಳಿಗೆ ಬಾ. (ಋಗ್ವೇದ ೩.೩೫.೪; ಬ್ರಹ್ಮವರಣದಲ್ಲಿ.)',
          },
        },
      ],
    },
    {
      title: 'यन्त्रपूजा ध्यानं जपश्च',
      titleEn: 'The yantra, dhyana and the Sudarshana japa',
      note: 'On the purna-patra over the kalasha place the Sudarshana yantra and the image and invoke Mahasudarshana into them with the mantra; meditate on him with the dhyana verses (Homa-Havana) and the Kalpa’s dhyana for the japa, offer the five upacharas (gandha, flowers, incense, lamp, naivedya) and do japa of the eight-syllable mantra as many times as you have resolved (Kalpa: the seer Ahirbudhnya, the metre Gayatri, the deity Sudarshana, svaha the power, hum the pin). The Kalpa also worships the pitha deities and the sarvatobhadra mandala here, and recites the 108 names of Sudarshana; the purohita does these. The Sudarshana Gayatri is said at the invocation.',
      noteKn: 'ಕಲಶದ ಮೇಲಿನ ಪೂರ್ಣಪಾತ್ರೆಯಲ್ಲಿ ಸುದರ್ಶನ ಯಂತ್ರ ಮತ್ತು ಪ್ರತಿಮೆ ಇಟ್ಟು ಮಂತ್ರದಿಂದ ಮಹಾಸುದರ್ಶನನನ್ನು ಆವಾಹಿಸಿ; ಧ್ಯಾನಶ್ಲೋಕಗಳಿಂದ (ಹೋಮ–ಹವನ) ಮತ್ತು ಜಪದ ಕಲ್ಪೋಕ್ತ ಧ್ಯಾನದಿಂದ ಧ್ಯಾನಿಸಿ, ಪಂಚೋಪಚಾರ (ಗಂಧ, ಪುಷ್ಪ, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ) ಅರ್ಪಿಸಿ, ಸಂಕಲ್ಪಿಸಿದಷ್ಟು ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರ ಜಪ ಮಾಡಿ (ಕಲ್ಪ: ಅಹಿರ್ಬುಧ್ನ್ಯ ಋಷಿ, ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಸುದರ್ಶನ ದೇವತೆ, ಸ್ವಾಹಾ ಶಕ್ತಿ, ಹುಂ ಕೀಲಕ). ಕಲ್ಪದಲ್ಲಿ ಇಲ್ಲಿ ಪೀಠದೇವತೆಗಳ, ಸರ್ವತೋಭದ್ರ ಮಂಡಲದ ಪೂಜೆ ಮತ್ತು ಸುದರ್ಶನ ಅಷ್ಟೋತ್ತರವೂ ಇವೆ; ಪುರೋಹಿತರು ಮಾಡುತ್ತಾರೆ. ಆವಾಹನೆಯಲ್ಲಿ ಸುದರ್ಶನ ಗಾಯತ್ರಿ.',
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
        {
          text: 'ध्यायेच्चतुर्भुजं देवं शङ्खचक्रवराभयम् ।\nध्यायेत्सुदर्शनं वीरं सर्वकार्यार्थसिद्धये ॥\nसुदर्शन नमस्तेऽस्तु नमस्ते शत्रुसंहर ।\nअर्चयाम्युपचारेण विष्णुरूपाय ते नमः ॥',
          meaning: {
            en: 'For success in every undertaking one should meditate on the four-armed god, the hero Sudarshana, holding conch and discus and showing boons and fearlessness. O Sudarshana, salutation to you; salutation to you, destroyer of enemies; I worship you with the upacharas; salutation to you, the form of Vishnu. (Dhyana for the japa, Kalpa.)',
            kn: 'ಎಲ್ಲ ಕಾರ್ಯಸಿದ್ಧಿಗಾಗಿ ಶಂಖ–ಚಕ್ರ–ವರ–ಅಭಯಗಳುಳ್ಳ ಚತುರ್ಭುಜ ದೇವ, ವೀರ ಸುದರ್ಶನನನ್ನು ಧ್ಯಾನಿಸಬೇಕು. ಓ ಸುದರ್ಶನನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಶತ್ರುಸಂಹಾರಕನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಉಪಚಾರಗಳಿಂದ ನಿನ್ನನ್ನು ಅರ್ಚಿಸುತ್ತೇನೆ; ವಿಷ್ಣುರೂಪನಾದ ನಿನಗೆ ನಮಸ್ಕಾರ. (ಜಪಧ್ಯಾನ, ಕಲ್ಪ)',
          },
        },
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
      title: 'अग्निमुखम्',
      titleEn: 'The agnimukha: go to the Common Procedure',
      note: 'Do the purvanga (Homa: Common Procedure) up to the ajyabhaga, in your own tradition (Madhvas with the samskaras of Agni and the Vaishnava offerings). In the anvadhana name as the main offerings, in this order: the sarvatobhadra mandala deities once each with ghee by their name mantras, the pitha deities once each with ghee, Mahasudarshana with the chosen count with ghee and with each of the eight materials, and the avarana deities once each with ghee; then svishtakrit and the rest (Kalpa). Then come back here.',
      noteKn: 'ಪೂರ್ವಾಂಗವನ್ನು (ಹೋಮವಿಧಿ — ಸಾಮಾನ್ಯ ಕ್ರಮ) ನಿಮ್ಮ ಸಂಪ್ರದಾಯದಂತೆ ಆಜ್ಯಭಾಗದವರೆಗೆ ಮಾಡಿ (ಮಾಧ್ವರು ಅಗ್ನಿಸಂಸ್ಕಾರ ಮತ್ತು ವೈಷ್ಣವಾಹುತಿಗಳೊಡನೆ). ಅನ್ವಾಧಾನದಲ್ಲಿ ಪ್ರಧಾನವಾಗಿ ಈ ಕ್ರಮದಲ್ಲಿ ಹೆಸರಿಸಿ: ಸರ್ವತೋಭದ್ರ ಮಂಡಲ ದೇವತೆಗಳಿಗೆ ನಾಮಮಂತ್ರದಿಂದ ಒಂದೊಂದು ಆಜ್ಯಾಹುತಿ, ಪೀಠದೇವತೆಗಳಿಗೆ ಒಂದೊಂದು, ಮಹಾಸುದರ್ಶನನಿಗೆ ಸಂಕಲ್ಪಿತ ಸಂಖ್ಯೆಯಲ್ಲಿ ಆಜ್ಯ ಮತ್ತು ಎಂಟು ದ್ರವ್ಯಗಳಿಂದ, ಆವರಣ ದೇವತೆಗಳಿಗೆ ಒಂದೊಂದು; ನಂತರ ಸ್ವಿಷ್ಟಕೃತ್ ಇತ್ಯಾದಿ (ಕಲ್ಪ). ನಂತರ ಇಲ್ಲಿಗೆ ಮರಳಿ.',
      verses: [
        {
          text: 'इति पूर्वाङ्गम् ॥',
          meaning: {
            en: 'Thus the purvanga (from the Common Procedure).',
            kn: 'ಹೀಗೆ ಪೂರ್ವಾಂಗ (ಸಾಮಾನ್ಯ ಕ್ರಮದಿಂದ).',
          },
        },
      ],
    },
    {
      title: 'पीठदेवताहोमः',
      titleEn: 'Offerings to the pitha deities',
      note: 'Offer ghee once to each of the deities of the seat (pitha) on which Sudarshana is worshipped, with ॐ, its seed syllable, its name and स्वाहा, in the order of the Kalpa: the frog (Manduka), Kalagni-Rudra, the supporting power (Adhara-shakti), the Earth, the ocean of nectar, the white island, the wish-tree, the jewelled pavilion, the golden seat; dharma, jnana, vairagya and aishvarya and their opposites; the lotus of all principles, its bulb, stalk, petals, filaments and pericarp; the orbs of the sun, moon and fire; sattva, rajas and tamas; maya and vidya; the self, the inner self, the supreme self and the self of all principles. The Kalpa’s scan of this list is partly unreadable; the purohita says the full list. The first offerings are given here as examples.',
      noteKn: 'ಸುದರ್ಶನನನ್ನು ಪೂಜಿಸುವ ಪೀಠದ ದೇವತೆಗಳಿಗೆ ಓಂ, ಬೀಜಾಕ್ಷರ, ನಾಮ, ಸ್ವಾಹಾ ಸೇರಿಸಿ ಒಂದೊಂದು ಆಜ್ಯಾಹುತಿ, ಕಲ್ಪದ ಕ್ರಮದಲ್ಲಿ: ಮಂಡೂಕ, ಕಾಲಾಗ್ನಿರುದ್ರ, ಆಧಾರಶಕ್ತಿ, ಧರಾ, ಸುಧಾಸಿಂಧು, ಶ್ವೇತದ್ವೀಪ, ಸುರದ್ರುಮ, ಮಣಿಹರ್ಮ್ಯ, ಹೇಮಪೀಠ; ಧರ್ಮ, ಜ್ಞಾನ, ವೈರಾಗ್ಯ, ಐಶ್ವರ್ಯ ಮತ್ತು ಅವುಗಳ ವಿರುದ್ಧಗಳು; ಸರ್ವತತ್ತ್ವಪದ್ಮ, ಆನಂದಕಂದ, ಸಂವಿನ್ನಾಳ, ದಳಗಳು, ಕೇಸರಗಳು, ಕರ್ಣಿಕೆ; ಸೂರ್ಯ–ಸೋಮ–ವಹ್ನಿ ಮಂಡಲಗಳು; ಸತ್ತ್ವ, ರಜಸ್ಸು, ತಮಸ್ಸು; ಮಾಯಾ, ವಿದ್ಯಾ; ಆತ್ಮ, ಅಂತರಾತ್ಮ, ಪರಮಾತ್ಮ, ಸರ್ವತತ್ತ್ವಾತ್ಮ. ಕಲ್ಪದ ಈ ಪಟ್ಟಿಯ ಸ್ಕ್ಯಾನ್ ಭಾಗಶಃ ಓದಲಾಗದು; ಪೂರ್ಣ ಪಟ್ಟಿಯನ್ನು ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ. ಮೊದಲ ಆಹುತಿಗಳನ್ನು ಉದಾಹರಣೆಯಾಗಿ ಕೊಡಲಾಗಿದೆ.',
      verses: [
        {
          text: 'ॐ मं मण्डूकपीठात्मने स्वाहा । ॐ कं कालाग्निरुद्रपीठात्मने स्वाहा ।\nॐ आं आधारशक्तिपीठात्मने स्वाहा । ॐ धं धरापीठात्मने स्वाहा ।\nॐ सं सुधासिन्धुपीठात्मने स्वाहा ॥',
          meaning: {
            en: 'Om mam, to the frog-seat, svaha; om kam, to the seat of Kalagni-Rudra, svaha; om am, to the seat of the supporting power, svaha; om dham, to the earth-seat, svaha; om sam, to the seat of the ocean of nectar, svaha. (The first of the pitha offerings, Kalpa.)',
            kn: 'ಓಂ ಮಂ ಮಂಡೂಕಪೀಠಕ್ಕೆ ಸ್ವಾಹಾ; ಓಂ ಕಂ ಕಾಲಾಗ್ನಿರುದ್ರಪೀಠಕ್ಕೆ ಸ್ವಾಹಾ; ಓಂ ಆಂ ಆಧಾರಶಕ್ತಿಪೀಠಕ್ಕೆ ಸ್ವಾಹಾ; ಓಂ ಧಂ ಧರಾಪೀಠಕ್ಕೆ ಸ್ವಾಹಾ; ಓಂ ಸಂ ಸುಧಾಸಿಂಧುಪೀಠಕ್ಕೆ ಸ್ವಾಹಾ. (ಪೀಠದೇವತಾ ಆಹುತಿಗಳ ಆರಂಭ, ಕಲ್ಪ)',
          },
        },
      ],
    },
    {
      title: 'प्रधानहोमः',
      titleEn: 'The main offerings (pradhana homa)',
      note: 'Meditate on Sudarshana in the fire with the dhyana verses and invoke him with the Sudarshana Gayatri. Then offer 126 oblations of each of the eight materials in turn (Homa-Havana). Those initiated offer with the mula mantra received from the guru: the Madhva-mantra-ratnakara gives the astra mantra and the mala mantra for use in yajnas; the 108-letter mala mantra begins with three seed syllables, salutes Krishna, Govinda, the beloved of the gopis, asks protection from the mantras, yantras, poisons and weapons of enemies and release from death, and ends saluting the blazing Mahasudarshana with हुं फट् (Homa-Havana; the Kalpa prints a Sudarshana-Narasimha form of it). These are not printed here. Others use the eight-syllable mantra below, which the Kalpa gives for japa and homa.',
      noteKn: 'ಧ್ಯಾನಶ್ಲೋಕಗಳಿಂದ ಅಗ್ನಿಯಲ್ಲಿ ಸುದರ್ಶನನನ್ನು ಧ್ಯಾನಿಸಿ ಸುದರ್ಶನ ಗಾಯತ್ರಿಯಿಂದ ಆವಾಹಿಸಿ. ನಂತರ ಎಂಟು ದ್ರವ್ಯಗಳನ್ನು ಕ್ರಮವಾಗಿ ಒಂದೊಂದರಿಂದ ೧೨೬ ಆಹುತಿ (ಹೋಮ–ಹವನ). ದೀಕ್ಷಿತರು ಗುರೂಪದಿಷ್ಟ ಮೂಲಮಂತ್ರದಿಂದ ನೀಡುತ್ತಾರೆ: ಮಧ್ವಮಂತ್ರರತ್ನಾಕರವು ಯಜ್ಞಗಳಲ್ಲಿ ಅಸ್ತ್ರಮಂತ್ರ ಮತ್ತು ಮಾಲಾಮಂತ್ರವನ್ನು ಕೊಡುತ್ತದೆ; ನೂರೆಂಟು ಅಕ್ಷರದ ಮಾಲಾಮಂತ್ರ ಮೂರು ಬೀಜಗಳಿಂದ ಆರಂಭಿಸಿ ಗೋಪೀಜನವಲ್ಲಭ ಗೋವಿಂದ ಕೃಷ್ಣನನ್ನು ನಮಿಸಿ, ಶತ್ರುಪ್ರಯುಕ್ತ ಮಂತ್ರ, ಯಂತ್ರ, ವಿಷೌಷಧ, ಶಸ್ತ್ರಗಳಿಂದ ರಕ್ಷೆಯನ್ನೂ ಮೃತ್ಯುಭೀತಿಯಿಂದ ಮುಕ್ತಿಯನ್ನೂ ಬೇಡಿ, ಜ್ವಲಿಸುವ ಮಹಾಸುದರ್ಶನನಿಗೆ ನಮಿಸಿ “ಹುಂ ಫಟ್”ನಿಂದ ಮುಗಿಯುತ್ತದೆ (ಹೋಮ–ಹವನ; ಕಲ್ಪದಲ್ಲಿ ಅದರ ಸುದರ್ಶನ–ನೃಸಿಂಹ ರೂಪ). ಇವನ್ನು ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ. ಇತರರು ಕಲ್ಪವು ಜಪ–ಹೋಮಕ್ಕೆ ಕೊಡುವ ಕೆಳಗಿನ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರವನ್ನು ಬಳಸುತ್ತಾರೆ.',
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
        {
          text: 'ॐ सुदर्शनाय विद्महे हेतिराजाय धीमहि ।\nतन्नश्चक्रः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, we know Sudarshana; we meditate on the king of weapons; may the Discus move us. (Sudarshana Gayatri, Sri Mahasudarshana Kalpa)',
            kn: 'ಓಂ, ಸುದರ್ಶನನನ್ನು ತಿಳಿಯುತ್ತೇವೆ; ಆಯುಧರಾಜನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಆ ಚಕ್ರವು ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. (ಸುದರ್ಶನ ಗಾಯತ್ರೀ, ಶ್ರೀಮಹಾಸುದರ್ಶನ ಕಲ್ಪ)',
          },
        },
        {
          text: 'ॐ सहस्रार हुं फट् स्वाहा ।\nश्रीसुदर्शनायेदं न मम ॥',
          meaning: {
            en: 'Om, O thousand-spoked one, hum phat, svaha; this is for Sri Sudarshana, not mine. (The eight-syllable Sudarshana mantra of the Kalpa, with which those who have not received the mula or mala mantra from a guru make the offerings: 126 with each of the eight materials in the order given — ghee, apamarga sticks, sesame, mustard, payasa, panchagavya, rice or puffed rice, and ghee again — 1008 in all.)',
            kn: 'ಓಂ, ಸಾವಿರ ಅರಗಳುಳ್ಳವನೇ, ಹುಂ ಫಟ್ ಸ್ವಾಹಾ; ಇದು ಶ್ರೀಸುದರ್ಶನನಿಗೆ, ನನ್ನದಲ್ಲ. (ಕಲ್ಪದ ಸುದರ್ಶನ ಅಷ್ಟಾಕ್ಷರ ಮಂತ್ರ; ಗುರುವಿನಿಂದ ಮೂಲ/ಮಾಲಾ ಮಂತ್ರ ಪಡೆಯದವರು ಇದರಿಂದ ಆಹುತಿ ನೀಡುತ್ತಾರೆ: ಕೊಟ್ಟ ಕ್ರಮದಲ್ಲಿ ಎಂಟು ದ್ರವ್ಯಗಳಲ್ಲಿ ಒಂದೊಂದರಿಂದ ೧೨೬ — ತುಪ್ಪ, ಉತ್ತರಣೆ ಕಡ್ಡಿ, ಎಳ್ಳು, ಸಾಸಿವೆ, ಪಾಯಸ, ಪಂಚಗವ್ಯ, ಅಕ್ಕಿ ಅಥವಾ ಅರಳು, ಮತ್ತೆ ತುಪ್ಪ — ಒಟ್ಟು ೧೦೦೮.)',
          },
        },
      ],
    },
    {
      title: 'आवरणदेवताहोमः',
      titleEn: 'Offerings to the avarana deities',
      note: 'Offer ghee once to each deity of the circles round Sudarshana: Sudarshana and the six limbs of the discus, the eight weapons, and the guardians of the ten directions with Brahma and Ananta (Kalpa).',
      noteKn: 'ಸುದರ್ಶನನ ಸುತ್ತಲಿನ ಆವರಣ ದೇವತೆಗಳಿಗೆ ಒಂದೊಂದು ಆಜ್ಯಾಹುತಿ: ಸುದರ್ಶನ ಮತ್ತು ಚಕ್ರದ ಆರು ಅಂಗಗಳು, ಎಂಟು ಆಯುಧಗಳು, ಬ್ರಹ್ಮ–ಅನಂತರೊಡನೆ ದಶದಿಕ್ಪಾಲಕರು (ಕಲ್ಪ).',
      verses: [
        {
          text: 'ॐ श्रीसुदर्शनाय स्वाहा ।\nॐ आचक्राय स्वाहा । ॐ विचक्राय स्वाहा । ॐ सुचक्राय स्वाहा ।\nॐ धीचक्राय स्वाहा । ॐ सञ्चक्राय स्वाहा । ॐ ज्वालाचक्राय स्वाहा ॥',
          meaning: {
            en: 'Om, to Sri Sudarshana, svaha; to Achakra, Vichakra, Suchakra, Dhichakra, Sanchakra and Jvalachakra (the six limbs of the discus), svaha. (The Kalpa prefixes each with its seed syllable.)',
            kn: 'ಓಂ ಶ್ರೀಸುದರ್ಶನನಿಗೆ ಸ್ವಾಹಾ; ಆಚಕ್ರ, ವಿಚಕ್ರ, ಸುಚಕ್ರ, ಧೀಚಕ್ರ, ಸಂಚಕ್ರ, ಜ್ವಾಲಾಚಕ್ರ (ಚಕ್ರದ ಆರು ಅಂಗಗಳು) — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸ್ವಾಹಾ. (ಕಲ್ಪದಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಬೀಜಾಕ್ಷರ ಸೇರಿದೆ.)',
          },
        },
        {
          text: 'ॐ चक्राय स्वाहा । ॐ शङ्खाय स्वाहा । ॐ गदायै स्वाहा । ॐ पद्माय स्वाहा ।\nॐ मुसलाय स्वाहा । ॐ चापाय स्वाहा । ॐ पाशाय स्वाहा । ॐ अङ्कुशाय स्वाहा ॥',
          meaning: {
            en: 'Om, to the discus, the conch, the mace, the lotus, the pestle, the bow, the noose and the goad, svaha. (The eight weapons of the dhyana; the Kalpa’s scan is clear for the first two and the rest follow the dhyana.)',
            kn: 'ಓಂ ಚಕ್ರ, ಶಂಖ, ಗದೆ, ಪದ್ಮ, ಮುಸಲ, ಚಾಪ, ಪಾಶ, ಅಂಕುಶಗಳಿಗೆ ಸ್ವಾಹಾ. (ಧ್ಯಾನದಲ್ಲಿನ ಎಂಟು ಆಯುಧಗಳು; ಕಲ್ಪದ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಮೊದಲೆರಡು ಸ್ಪಷ್ಟ, ಉಳಿದವು ಧ್ಯಾನದಂತೆ.)',
          },
        },
        {
          text: 'ॐ इन्द्राय स्वाहा । ॐ अग्नये स्वाहा । ॐ यमाय स्वाहा । ॐ निरृतये स्वाहा । ॐ वरुणाय स्वाहा ।\nॐ वायवे स्वाहा । ॐ कुबेराय स्वाहा । ॐ ईशानाय स्वाहा । ॐ ब्रह्मणे स्वाहा । ॐ अनन्ताय स्वाहा ॥',
          meaning: {
            en: 'Om, to Indra, Agni, Yama, Nirriti, Varuna, Vayu, Kubera, Ishana, Brahma (above) and Ananta (below), svaha. (The guardians of the ten directions, Kalpa.)',
            kn: 'ಓಂ ಇಂದ್ರ, ಅಗ್ನಿ, ಯಮ, ನಿರ್ಋತಿ, ವರುಣ, ವಾಯು, ಕುಬೇರ, ಈಶಾನ, ಬ್ರಹ್ಮ (ಮೇಲೆ), ಅನಂತ (ಕೆಳಗೆ) — ಇವರಿಗೆ ಸ್ವಾಹಾ. (ದಶದಿಕ್ಪಾಲಕರು, ಕಲ್ಪ)',
          },
        },
      ],
    },
    {
      title: 'स्विष्टकृत्प्रायश्चित्तं बलिदानं च',
      titleEn: 'Svishtakrit, prayaschitta and the bali',
      note: 'Do the svishtakrit and the prayaschitta offerings of the Common Procedure (your tradition). Then the bali: the yajamana with his wife makes the bali sankalpa for each and releases water with akshata — black-gram food with a lamp to the guardians of the directions, each by name, and the bali of payasa to Sudarshana with his weapons and retinue; then prays that all beings accept the bali. Sprinkle the place with शान्ता पृथिवी…, and all wash their hands and feet, sip water and return to the fire (Kalpa).',
      noteKn: 'ಸಾಮಾನ್ಯ ಕ್ರಮದ (ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ) ಸ್ವಿಷ್ಟಕೃತ್ ಮತ್ತು ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳನ್ನು ಮಾಡಿ. ನಂತರ ಬಲಿ: ಯಜಮಾನನು ಪತ್ನಿಯೊಡನೆ ಪ್ರತಿ ಬಲಿಗೂ ಸಂಕಲ್ಪ ಮಾಡಿ ಅಕ್ಷತೆ–ನೀರು ಬಿಡುತ್ತಾನೆ — ದಿಕ್ಪಾಲಕರಿಗೆ ಹೆಸರಿಸಿ ದೀಪಸಹಿತ ಉದ್ದಿನ ಅನ್ನ, ಆಯುಧ–ಪರಿವಾರಸಹಿತ ಸುದರ್ಶನನಿಗೆ ಪಾಯಸಬಲಿ; ನಂತರ ಎಲ್ಲ ಜೀವಿಗಳೂ ಬಲಿ ಸ್ವೀಕರಿಸಲೆಂದು ಪ್ರಾರ್ಥನೆ. “ಶಾಂತಾ ಪೃಥಿವೀ…” ಎಂದು ಸ್ಥಳಕ್ಕೆ ಪ್ರೋಕ್ಷಿಸಿ, ಎಲ್ಲರೂ ಕೈಕಾಲು ತೊಳೆದು ಆಚಮಿಸಿ ಯಾಗಶಾಲೆಗೆ ಮರಳಿ (ಕಲ್ಪ).',
      verses: [
        {
          text: 'ॐ नमो भगवते महासुदर्शनाय साङ्गाय सायुधाय सपरिवाराय सशक्तिकाय ।\nइमं पायसबलिं गृहाण । मम आयुष्कर्ता शान्तिकर्ता पुष्टिकर्ता कल्याणकर्ता\nसर्वशत्रुसंहारकर्ता वरदो भव ॥\nअनेन बलिदानेन महासुदर्शनः प्रीयताम् ॥',
          meaning: {
            en: 'Om, salutation to the Lord Mahasudarshana with his limbs, weapons, retinue and powers: accept this bali of payasa; be the giver of long life, peace, nourishment and welfare to me, the destroyer of all enemies, the giver of boons. By this bali may Mahasudarshana be pleased. (Kalpa; the word grihana, accept, is supplied where the scan is unclear.)',
            kn: 'ಓಂ, ಅಂಗ, ಆಯುಧ, ಪರಿವಾರ, ಶಕ್ತಿಗಳೊಡನೆ ಕೂಡಿದ ಭಗವಂತ ಮಹಾಸುದರ್ಶನನಿಗೆ ನಮಸ್ಕಾರ: ಈ ಪಾಯಸಬಲಿಯನ್ನು ಸ್ವೀಕರಿಸು; ನನಗೆ ಆಯುಸ್ಸು, ಶಾಂತಿ, ಪುಷ್ಟಿ, ಕಲ್ಯಾಣಗಳನ್ನು ಕೊಡುವವನೂ ಎಲ್ಲ ಶತ್ರುಗಳ ಸಂಹಾರಕನೂ ವರದನೂ ಆಗು. ಈ ಬಲಿದಾನದಿಂದ ಮಹಾಸುದರ್ಶನನು ಪ್ರೀತನಾಗಲಿ. (ಕಲ್ಪ; ಸ್ಕ್ಯಾನ್ ಅಸ್ಪಷ್ಟವಾದಲ್ಲಿ “ಗೃಹಾಣ” ಸೇರಿಸಲಾಗಿದೆ.)',
          },
        },
        {
          text: 'बलिं गृह्णन्त्विमं देवा आदित्या वसवस्तथा ।\nमरुतश्चाश्विनौ रुद्राः सुपर्णाः पन्नगाः खगाः ॥\nअसुरा यातुधानाश्च पिशाचोरगराक्षसाः ।\nडाकिन्यो यक्षवेतालाः योगिन्यः पूतनाः शिवाः ॥\nजृम्भकाः सिद्धगन्धर्वा नागा विद्याधरा नगाः ।\nदिक्पाला लोकपालाश्च ये च विघ्नविनायकाः ॥\nजगतां शान्तिकर्तारो ब्रह्माद्याश्च महर्षयः ।\nमा विघ्नं मा च मे पापं मा सन्तु परिपन्थिनः ।\nसौम्या भवन्तु तृप्ताश्च भूतप्रेताः सुखावहाः ॥',
          meaning: {
            en: 'May the gods accept this bali, and the Adityas and Vasus, the Maruts, the Ashvins, the Rudras, the eagles, serpents and birds; the asuras, yatudhanas, pishachas, serpents and rakshasas; the dakinis, yakshas, vetalas, yoginis, putanas and jackals; the jrimbhakas, siddhas, gandharvas, nagas, vidyadharas and mountains; the guardians of the directions and of the worlds and the lords of obstacles; Brahma and the great seers who bring peace to the worlds. Let there be no obstacle, no sin for me, no enemy; may the spirits and ghosts be gentle, satisfied and bringers of happiness. (Kalpa; the half-line dikpala lokapalash ca, unreadable in the scan, is given as the common printed form has it.)',
            kn: 'ದೇವತೆಗಳು, ಆದಿತ್ಯರು, ವಸುಗಳು, ಮರುತ್ತುಗಳು, ಅಶ್ವಿನಿಗಳು, ರುದ್ರರು, ಸುಪರ್ಣರು, ಪನ್ನಗರು, ಪಕ್ಷಿಗಳು; ಅಸುರರು, ಯಾತುಧಾನರು, ಪಿಶಾಚ–ಉರಗ–ರಾಕ್ಷಸರು; ಡಾಕಿನಿಯರು, ಯಕ್ಷ–ವೇತಾಳರು, ಯೋಗಿನಿಯರು, ಪೂತನೆಯರು, ಶಿವೆಗಳು; ಜೃಂಭಕರು, ಸಿದ್ಧ–ಗಂಧರ್ವರು, ನಾಗರು, ವಿದ್ಯಾಧರರು, ಪರ್ವತಗಳು; ದಿಕ್ಪಾಲಕ–ಲೋಕಪಾಲಕರು, ವಿಘ್ನವಿನಾಯಕರು; ಲೋಕಶಾಂತಿಕರ್ತರಾದ ಬ್ರಹ್ಮಾದಿ ಮಹರ್ಷಿಗಳು — ಈ ಬಲಿಯನ್ನು ಸ್ವೀಕರಿಸಲಿ. ವಿಘ್ನವಾಗದಿರಲಿ, ನನಗೆ ಪಾಪವಾಗದಿರಲಿ, ಶತ್ರುಗಳಿರದಿರಲಿ; ಭೂತಪ್ರೇತಗಳು ಸೌಮ್ಯರೂ ತೃಪ್ತರೂ ಸುಖಕರರೂ ಆಗಲಿ. (ಕಲ್ಪ; ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಓದಲಾಗದ “ದಿಕ್ಪಾಲಾ ಲೋಕಪಾಲಾಶ್ಚ” ಅರ್ಧಪಂಕ್ತಿಯನ್ನು ಸಾಮಾನ್ಯ ಮುದ್ರಿತ ಪಾಠದಂತೆ ಕೊಡಲಾಗಿದೆ.)',
          },
        },
        {
          text: 'शान्ता पृथिवी शिवमन्तरिक्षं द्यौर्नो देव्यभयं नो अस्तु ।\nशिवा दिशः प्रदिशो दिशो न आपो विद्युतः परिपान्तु विश्वतः ॥\nशान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'May the earth be peaceful and the air auspicious; may the divine heaven give us freedom from fear; may the directions and the intermediate directions, the waters and the lightnings be kind and protect us on every side. Peace, peace, peace. (As read in the Sudarshana Kalpa.)',
            kn: 'ಭೂಮಿ ಶಾಂತವಾಗಿರಲಿ, ಅಂತರಿಕ್ಷ ಶುಭವಾಗಿರಲಿ; ದಿವ್ಯ ದ್ಯುಲೋಕ ನಮಗೆ ಅಭಯ ನೀಡಲಿ; ದಿಕ್ಕುಗಳು, ಉಪದಿಕ್ಕುಗಳು, ಜಲಗಳು, ಮಿಂಚುಗಳು ಮಂಗಳಕರವಾಗಿ ಎಲ್ಲ ಕಡೆಯಿಂದ ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ. ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ. (ಸುದರ್ಶನ ಕಲ್ಪದಲ್ಲಿರುವಂತೆ.)',
          },
        },
      ],
    },
    {
      title: 'पूर्णाहुतिः',
      titleEn: 'Purnahuti and the rest of the uttaranga',
      note: 'The yajamana offers the purnahuti, which completes every rite and gives what is wished for: first the whole fruit with याः फलिनीः…, then the sruk filled with ghee, with the sruva laid on it face down and flowers and akshata at its tip, standing to the north-west, holding them with the conch mudra, eyes on the tip of the sruva, with समुद्रादूर्मिः… (Kalpa; the verses are in the Common Procedure, Madhva purnahuti). Then do the rest of the uttaranga of the Common Procedure in your tradition (samsrava, marjana, upasthana). Say आवाहितदेवताः प्रीयन्ताम्, release akshata-water and bid the invoked deities farewell.',
      noteKn: 'ಯಜಮಾನನು ಎಲ್ಲ ಕರ್ಮಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸುವ, ಇಷ್ಟಾರ್ಥ ಕೊಡುವ ಪೂರ್ಣಾಹುತಿ ನೀಡುತ್ತಾನೆ: ಮೊದಲು “ಯಾಃ ಫಲಿನೀಃ…” ಎಂದು ಪೂರ್ಣಫಲ, ನಂತರ ತುಪ್ಪ ತುಂಬಿದ ಸ್ರುಕ್, ಅದರ ಮೇಲೆ ಬೋರಲಾಗಿ ಸ್ರುವ, ತುದಿಯಲ್ಲಿ ಹೂವು–ಅಕ್ಷತೆ, ವಾಯವ್ಯದಲ್ಲಿ ನಿಂತು ಶಂಖಮುದ್ರೆಯಿಂದ ಹಿಡಿದು, ಸ್ರುವದ ತುದಿಯಲ್ಲಿ ದೃಷ್ಟಿಯಿಟ್ಟು, “ಸಮುದ್ರಾದೂರ್ಮಿಃ…” (ಕಲ್ಪ; ಮಂತ್ರಗಳು ಸಾಮಾನ್ಯ ಕ್ರಮದ ಮಾಧ್ವ ಪೂರ್ಣಾಹುತಿಯಲ್ಲಿವೆ). ನಂತರ ನಿಮ್ಮ ಸಂಪ್ರದಾಯದಂತೆ ಸಾಮಾನ್ಯ ಕ್ರಮದ ಉಳಿದ ಉತ್ತರಾಂಗ (ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ಉಪಸ್ಥಾನ). “ಆವಾಹಿತದೇವತಾಃ ಪ್ರೀಯಂತಾಮ್” ಎಂದು ಅಕ್ಷತೆ–ನೀರು ಬಿಟ್ಟು ಆವಾಹಿತ ದೇವತೆಗಳನ್ನು ಬೀಳ್ಕೊಡಿ.',
      verses: [
        {
          text: 'याः फलिनीर्या अफला अपुष्पा याश्च पुष्पिणीः ।\nबृहस्पतिप्रसूतास्ता नो मुञ्चन्त्वंहसः स्वाहा ॥',
          meaning: {
            en: 'The plants that bear fruit and those that bear none, the flowerless and the flowering, quickened by Brihaspati, may they free us from distress, svaha. (Rigveda 10.97.15; the whole fruit is offered with it, Kalpa.)',
            kn: 'ಫಲ ಕೊಡುವ, ಫಲ ಕೊಡದ, ಹೂವಿಲ್ಲದ, ಹೂವುಳ್ಳ, ಬೃಹಸ್ಪತಿಯಿಂದ ಪ್ರೇರಿತವಾದ ಓಷಧಿಗಳು ನಮ್ಮನ್ನು ಸಂಕಟದಿಂದ ಬಿಡಿಸಲಿ, ಸ್ವಾಹಾ. (ಋಗ್ವೇದ ೧೦.೯೭.೧೫; ಇದರಿಂದ ಪೂರ್ಣಫಲವನ್ನು ಅರ್ಪಿಸುತ್ತಾರೆ, ಕಲ್ಪ.)',
          },
        },
        {
          text: 'आवाहितदेवताः प्रीयन्ताम् ॥',
          meaning: {
            en: 'May the deities invoked be pleased. (Releasing akshata and water, before the farewell; Kalpa.)',
            kn: 'ಆವಾಹಿಸಿದ ದೇವತೆಗಳು ಪ್ರೀತರಾಗಲಿ. (ಅಕ್ಷತೆ–ನೀರು ಬಿಡುತ್ತ, ವಿಸರ್ಜನೆಗೆ ಮೊದಲು; ಕಲ್ಪ)',
          },
        },
      ],
    },
    {
      title: 'यजमानाभिषेकः',
      titleEn: 'Abhisheka of the yajamana with the kalasha water',
      note: 'The acharya and the priests sprinkle the yajamana and his wife, seated facing east, with the water of the main kalasha, using durva and mango leaves, reciting these verses. Then the purohita does marjana of the family with the Sudarshana Kavacha of the Vihagendra Samhita, which the Kalpa prints (not given here) (Kalpa).',
      noteKn: 'ಆಚಾರ್ಯ–ಋತ್ವಿಜರು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕುಳಿತ ಯಜಮಾನ–ಪತ್ನಿಯರಿಗೆ ಪ್ರಧಾನ ಕಲಶಜಲವನ್ನು ಗರಿಕೆ–ಮಾವಿನೆಲೆಗಳಿಂದ ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳುತ್ತ ಪ್ರೋಕ್ಷಿಸುತ್ತಾರೆ. ನಂತರ ಕಲ್ಪದಲ್ಲಿ ಮುದ್ರಿತವಾದ ವಿಹಗೇಂದ್ರಸಂಹಿತೋಕ್ತ ಸುದರ್ಶನ ಕವಚದಿಂದ ಪುರೋಹಿತರು ಮನೆಯವರಿಗೆ ಮಾರ್ಜನ ಮಾಡುತ್ತಾರೆ (ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ) (ಕಲ್ಪ).',
      verses: [
        {
          text: 'सुरास्त्वामभिषिञ्चन्तु ब्रह्मविष्णुमहेश्वराः ।\nवासुदेवो जगन्नाथस्तथा सङ्कर्षणो विभुः ॥\nप्रद्युम्नश्चानिरुद्धश्च भवन्तु विजयाय ते ।\nआखण्डलोऽग्निर्भगवान्यमो वै निरृतिस्तथा ॥\nवरुणः पवनश्चैव धनाध्यक्षस्तथा शिवः ।\nब्रह्मणा सहिताः सर्वे दिक्पालाः पान्तु ते सदा ॥\nआदित्यश्चन्द्रमा भौमो बुधजीवसितार्कजाः ।\nग्रहास्त्वामभिषिञ्चन्तु राहुः केतुश्च पूजिताः ॥',
          meaning: {
            en: 'May the gods Brahma, Vishnu and Maheshvara bathe you; may Vasudeva, lord of the world, the mighty Sankarshana, Pradyumna and Aniruddha be for your victory; may Indra, the lord Agni, Yama, Nirriti, Varuna, Vayu, Kubera and Shiva, all the guardians of the directions with Brahma, protect you always; may the planets — the Sun, the Moon, Mars, Mercury, Jupiter, Venus and Saturn, and Rahu and Ketu, worshipped — bathe you. (Said while the acharya and priests sprinkle the yajamana and his wife, seated facing east, with the water of the main kalasha using durva and mango leaves; Kalpa, which goes on with the mothers, the rivers and all beings and ends with devasya tva … amritabhishekostu.)',
            kn: 'ಬ್ರಹ್ಮ–ವಿಷ್ಣು–ಮಹೇಶ್ವರ ದೇವತೆಗಳು ನಿನಗೆ ಅಭಿಷೇಕ ಮಾಡಲಿ; ಜಗನ್ನಾಥ ವಾಸುದೇವ, ವಿಭು ಸಂಕರ್ಷಣ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧರು ನಿನ್ನ ವಿಜಯಕ್ಕಾಗಿ ಇರಲಿ; ಇಂದ್ರ, ಅಗ್ನಿ, ಯಮ, ನಿರ್ಋತಿ, ವರುಣ, ವಾಯು, ಕುಬೇರ, ಶಿವ — ಬ್ರಹ್ಮನೊಡನೆ ಎಲ್ಲ ದಿಕ್ಪಾಲಕರು ನಿನ್ನನ್ನು ಸದಾ ಕಾಪಾಡಲಿ; ಸೂರ್ಯ, ಚಂದ್ರ, ಮಂಗಳ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು ಗ್ರಹಗಳು ಪೂಜಿತರಾಗಿ ನಿನಗೆ ಅಭಿಷೇಕ ಮಾಡಲಿ. (ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕುಳಿತ ಯಜಮಾನ–ಪತ್ನಿಯರಿಗೆ ಆಚಾರ್ಯ–ಋತ್ವಿಜರು ಪ್ರಧಾನ ಕಲಶಜಲವನ್ನು ಗರಿಕೆ–ಮಾವಿನೆಲೆಗಳಿಂದ ಪ್ರೋಕ್ಷಿಸುವಾಗ; ಕಲ್ಪದಲ್ಲಿ ಮಾತೃಕೆಯರು, ನದಿಗಳು, ಸಮಸ್ತ ಜೀವಿಗಳ ಶ್ಲೋಕಗಳು ಮುಂದುವರಿದು “ದೇವಸ್ಯ ತ್ವಾ … ಅಮೃತಾಭಿಷೇಕೋಸ್ತು” ಎಂದು ಮುಗಿಯುತ್ತದೆ.)',
          },
        },
      ],
    },
    {
      title: 'समर्पणं रक्षा च',
      titleEn: 'Gifts, raksha and samarpana',
      note: 'Honour the acharya and the priests with clothes, betel and dakshina (the Kalpa has the kalasha, cloth and image given to the acharya, and a cow or its value), give gifts to brahmins and feed them as you can (the Kalpa: a tenth of the homa count), and receive their blessings. Pray with सुदर्शन महाज्वाल… (Homa-Havana, given at the beginning). Apply the ash of the homa as raksha and take it to the house; the yantra, touched with the ash, is kept in the house to protect it as an amulet protects the body (Homa-Havana). Finish with the samarpana of the Common Procedure (Madhva: श्रीकृष्णार्पणमस्तु; Smarta: ब्रह्मार्पणमस्तु).',
      noteKn: 'ಆಚಾರ್ಯ–ಋತ್ವಿಜರನ್ನು ವಸ್ತ್ರ, ತಾಂಬೂಲ, ದಕ್ಷಿಣೆಗಳಿಂದ ಗೌರವಿಸಿ (ಕಲ್ಪ: ಕಲಶ, ವಸ್ತ್ರ, ಪ್ರತಿಮೆಗಳನ್ನು ಆಚಾರ್ಯರಿಗೆ ದಾನ, ಗೋವು ಅಥವಾ ಅದರ ಮೌಲ್ಯ), ಯಥಾಶಕ್ತಿ ಬ್ರಾಹ್ಮಣರಿಗೆ ದಾನ, ಭೋಜನ (ಕಲ್ಪ: ಹೋಮಸಂಖ್ಯೆಯ ದಶಾಂಶ), ಅವರ ಆಶೀರ್ವಾದ ಪಡೆಯಿರಿ. “ಸುದರ್ಶನ ಮಹಾಜ್ವಾಲ…” ಶ್ಲೋಕದಿಂದ ಪ್ರಾರ್ಥಿಸಿ (ಹೋಮ–ಹವನ; ಆರಂಭದಲ್ಲಿ ಕೊಟ್ಟಿದೆ). ಹೋಮಭಸ್ಮವನ್ನು ರಕ್ಷೆಯಾಗಿ ಧರಿಸಿ ಮನೆಗೆ ಕೊಂಡೊಯ್ಯಿರಿ; ಭಸ್ಮ ಹಚ್ಚಿದ ಯಂತ್ರವನ್ನು ಮನೆಯಲ್ಲಿಟ್ಟರೆ ದೇಹಕ್ಕೆ ತಾಯಿತದಂತೆ ಮನೆಗೆ ರಕ್ಷೆ (ಹೋಮ–ಹವನ). ಸಾಮಾನ್ಯ ಕ್ರಮದ ಸಮರ್ಪಣೆಯಿಂದ ಮುಗಿಸಿ (ಮಾಧ್ವ: ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು; ಸ್ಮಾರ್ತ: ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು).',
      verses: [
        {
          text: 'अनेन महासुदर्शनहोमकर्मणा श्रीमहासुदर्शनान्तर्गतः परमात्मा प्रीयताम् ॥',
          meaning: {
            en: 'By this Mahasudarshana homa may the Supreme Lord within Sri Mahasudarshana be pleased.',
            kn: 'ಈ ಮಹಾಸುದರ್ಶನ ಹೋಮಕರ್ಮದಿಂದ ಶ್ರೀಮಹಾಸುದರ್ಶನಾಂತರ್ಗತ ಪರಮಾತ್ಮನು ಪ್ರೀತನಾಗಲಿ.',
          },
        },
      ],
    },
  ],
};
