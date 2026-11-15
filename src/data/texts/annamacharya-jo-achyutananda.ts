/**
 * Jō acyutānanda (lāli): Annamācārya saṅkīrtana (Telugu), in Telugu script.
 * Sources (Nov 2026): A. annamacharya-lyrics.blogspot.com no. 2 (typed Telugu); K. karnatik.com c12541 (Roman, typed
 * independently, 10 stanzas). Order of stanzas differs: A puts "గోవర్థనంబెల్ల" before "అంగజునిగన్న" and has nine
 * stanzas; K has "అంగజునిగన్న" first, "గోవర్ధనంబెల్ల" next, and repeats the first stanza at the end (as
 * stanza 10): A's order is followed. Wording agrees except spelling. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaJoAchyutananda: Mantra = {
  id: 'annamacharya-jo-achyutananda',
  title: 'జో అచ్యుతానంద',
  titleEn: 'Jo Achyutananda (Annamacharya)',
  category: 'kirtana',
  order: 14,
  sourceScript: 'telugu',
  deity: 'Śrī Kṛṣṇa',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), saṅkīrtana (lāli, lullaby)',
  summary: 'The best-known lullaby of Annamacharya. The refrain "Jo, jo" lulls Krishna, while the stanzas tell his childhood and later deeds: butter-stealing, complaints of the cowherd women, the lifting of Govardhana, the killing of Kamsa. The last stanza names Tallapaka Annamayya as the singer and blesses all. Sung in raga Kapi.',
  summaryKn: 'ಅನ್ನಮಾಚಾರ್ಯರ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಜೋಗುಳ. “ಜೋ ಜೋ” ಎಂಬ ಪಲ್ಲವಿ ಕೃಷ್ಣನನ್ನು ಮಲಗಿಸುತ್ತದೆ; ಚರಣಗಳು ಅವನ ಬಾಲ್ಯವನ್ನೂ ಮುಂದಿನ ಕಾರ್ಯಗಳನ್ನೂ ಹೇಳುತ್ತವೆ: ಬೆಣ್ಣೆ ಕದಿಯುವುದು, ಗೊಲ್ಲತಿಯರ ದೂರು, ಗೋವರ್ಧನ ಎತ್ತುವುದು, ಕಂಸವಧೆ. ಕೊನೆಯ ಚರಣ ತಾಳ್ಳಪಾಕ ಅನ್ನಮಯ್ಯನ ಹೆಸರನ್ನು ಹೇಳಿ ಎಲ್ಲರಿಗೂ ಮಂಗಳ ಹಾರೈಸುತ್ತದೆ. ಕಾಪಿ ರಾಗದಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
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
          text: 'జో అచ్యుతానంద జోజో ముకుందా\nరావె పరమానంద రామ గోవిందా జోజో జోజో',
          meaning: { en: 'Jo, Achyutananda, Jo jo, Mukunda; come, supreme bliss, Rama, Govinda: jo jo, jo jo.', kn: 'ಜೋ ಅಚ್ಯುತಾನಂದ, ಜೋ ಜೋ ಮುಕುಂದ; ಬಾ ಪರಮಾನಂದ, ರಾಮ, ಗೋವಿಂದ; ಜೋ ಜೋ, ಜೋ ಜೋ.' },
        },
      ],
    },
    {
      title: 'చరణాలు',
      titleEn: 'Charanams',
      note: 'The stanzas of the lullaby.',
      noteKn: 'ಜೋಗುಳದ ಚರಣಗಳು.',
      verses: [
        {
          n: 1,
          text: 'నందునింటనుజేరి నయముమీరంగా\nచంద్రవదనలు నీకు సేవచేయంగా\nఅందముగ వారిండ్ల ఆడుచుండంగా\nమందలకు దొంగ మా ముద్దురంగా జోజో జోజో',
          meaning: { en: 'You came to Nanda\'s house with great charm; moon-faced women served you; you played in their houses beautifully, thief of the herds, our darling Ranga: jo jo, jo jo.', kn: 'ನಂದನ ಮನೆ ಸೇರಿ ಬಹಳ ಚೆಲುವಾಗಿ, ಚಂದ್ರಮುಖಿಯರು ನಿನಗೆ ಸೇವೆ ಮಾಡುತ್ತಿರಲು, ಅವರ ಮನೆಗಳಲ್ಲಿ ಅಂದವಾಗಿ ಆಡುತ್ತ, ದನದ ಹಿಂಡುಗಳ ಕಳ್ಳನೇ, ನಮ್ಮ ಮುದ್ದು ರಂಗನೇ, ಜೋ ಜೋ.' },
        },
        {
          n: 2,
          text: 'పాలవారాశిలో పవళించినావు\nబాలుగా మునులుకు అభయమిచ్చినావు\nమేలుగా వసుదేవుకుదయించినావు\nబాలుడై ఉండి గోపాలుడైనావు',
          meaning: { en: 'You reclined on the ocean of milk; you gave fearlessness to the sages; you were born as Vasudeva\'s good fortune; though a child, you became the cowherd.', kn: 'ಹಾಲ್ಗಡಲಲ್ಲಿ ಮಲಗಿದೆ; ಮುನಿಗಳಿಗೆ ಅಭಯ ಕೊಟ್ಟೆ; ವಸುದೇವನಿಗೆ ಮಂಗಳಕರವಾಗಿ ಜನಿಸಿದೆ; ಬಾಲಕನಾಗಿದ್ದರೂ ಗೋಪಾಲನಾದೆ.' },
        },
        {
          n: 3,
          text: 'అట్టుగట్టిన మీగడట్టె తిన్నాడే\nపట్టి కోడలు మూతిపై రాసినాడే\nఅట్టే తినెనని యత్త యడుగ విన్నాడే\nగట్టిగా నిది దొంగ కొట్టుమన్నాడే',
          meaning: { en: 'He ate the cream that had set on the pot and smeared it on the face of the new daughter-in-law; when her mother-in-law asked whether she had eaten it, he heard her and said firmly, "She is the thief, beat her!"', kn: 'ಕಟ್ಟಿಕೊಂಡ ಮೀಸಲನ್ನೇ ಮೆದ್ದು, ಮೂತಿಗೆ ಸೊಸೆಯ ಮೇಲೆ ಬಳಿದನು; ಅತ್ತೆ “ತಿಂದೆಯಾ?” ಎಂದು ಕೇಳಲು ಕೇಳಿಸಿಕೊಂಡು, “ಇವಳೇ ಕಳ್ಳಿ, ಹೊಡೆ” ಎಂದು ಗಟ್ಟಿಯಾಗಿ ಹೇಳಿದನು.' },
        },
        {
          n: 4,
          text: 'గొల్లవారిండ్లకు గొబ్బునకు బోయి\nకొల్లలుగా త్రావి కుండలను నేయి\nచెల్లునా మగనాండ్ర జెలిగి యీశాయీ\nచిల్లతనములు సేయ జెల్లునటవోయి',
          meaning: { en: 'Hurrying to the cowherds\' houses, you drank ghee from the pots in plenty. Is it right to play such mischief on the women, to tease and trouble them? Is this petty mischief right?', kn: 'ಗೊಲ್ಲರ ಮನೆಗಳಿಗೆ ಥಟ್ಟನೆ ಹೋಗಿ ಕುಂಡಗಳ ತುಪ್ಪವನ್ನು ಹೇರಳವಾಗಿ ಕುಡಿದೆ. ಹೆಂಗಸರನ್ನು ಹೀಗೆ ರೇಗಿಸಿ ತೊಂದರೆ ಕೊಡುವುದು ಸರಿಯೇ? ಇಂಥ ಕುಚೇಷ್ಟೆ ಮಾಡುವುದು ಯೋಗ್ಯವೇ?' },
        },
        {
          n: 5,
          text: 'రేపల్లె సతులెల్ల గోపంబుతోను\nగోపమ్మ మీకొడుకు మాయిండ్లలోను\nమాపుగానే వచ్చి మా మానములను\nనీ పాపడే చెరిచె నేమందుమమ్మ',
          meaning: { en: 'The women of Repalle come in anger: "Gopamma, your son in our houses has come in the evening and spoiled our honour; what can we say, mother?"', kn: 'ರೇಪಲ್ಲೆಯ ಗೊಲ್ಲತಿಯರೆಲ್ಲ ಕೋಪದಿಂದ: “ಗೋಪಮ್ಮ, ನಿನ್ನ ಮಗ ನಮ್ಮ ಮನೆಗಳಲ್ಲಿ ಸಂಜೆಯೇ ಬಂದು ನಮ್ಮ ಮಾನವನ್ನು ಕೆಡಿಸಿದ; ಏನೆನ್ನೋಣ ಅಮ್ಮ?”' },
        },
        {
          n: 6,
          text: 'ఒకనియాలిని దెచ్చి నొకని కడబెట్టి\nజగడములు కలిపించి సతిపతుల బట్టి\nపగలు నలుజాములును బాలుడై నట్టి\nమగనాండ్ర చేపట్టి మదనుడై నట్టి',
          meaning: { en: 'Bringing one man\'s wife and setting her by another, stirring quarrels, seizing wives and husbands; as a child through the four watches of the day, taking the women\'s hands like Kama himself.', kn: 'ಒಬ್ಬನ ಹೆಂಡತಿಯನ್ನು ತಂದು ಇನ್ನೊಬ್ಬನ ಬಳಿ ಇಟ್ಟು, ಜಗಳ ಹುಟ್ಟಿಸಿ, ದಂಪತಿಗಳನ್ನು ಹಿಡಿದು, ಹಗಲಿನ ನಾಲ್ಕು ಯಾಮ ಬಾಲಕನಾಗಿ, ಮನ್ಮಥನಂತೆ ಹೆಂಗಸರ ಕೈ ಹಿಡಿದು.' },
        },
        {
          n: 7,
          text: 'గోవర్థనంబెల్ల గొడుగుగాగ పట్టి\nకావరమ్మున నున్న కంసు పడకొట్టి\nనీవుమధురాపురము నేల చేబట్టి\nఠీవితో నేలిన దేవకీ పట్టి',
          meaning: { en: 'You held up the whole of Govardhana as an umbrella, struck down the arrogant Kamsa, took the city of Mathura and ruled it in majesty: son of Devaki.', kn: 'ಗೋವರ್ಧನ ಬೆಟ್ಟವನ್ನೇ ಕೊಡೆಯಾಗಿ ಹಿಡಿದು, ಸೊಕ್ಕಿನ ಕಂಸನನ್ನು ಕೆಡವಿ, ಮಧುರಾಪುರವನ್ನು ವಶಪಡಿಸಿಕೊಂಡು ವೈಭವದಿಂದ ಆಳಿದ ದೇವಕೀ ಕುಮಾರನೇ.' },
        },
        {
          n: 8,
          text: 'అంగజునిగన్న మాయన్నయిటు రారా\nబంగారుగిన్నెలో పాలుపోసేరా\nదొంగనీవని సతులు పొంగుచున్నరా\nముంగిటానాడరా మొహనాకారా జోజో జోజో',
          meaning: { en: 'Come here, our dear one, father of Kama; they have poured milk in a golden cup. The women are in a fury, saying you are the thief; play in the courtyard, charming One: jo jo, jo jo.', kn: 'ಮನ್ಮಥನ ತಂದೆಯಾದ ನಮ್ಮ ಪ್ರೀತಿಯವನೇ, ಇಲ್ಲಿ ಬಾ; ಬಂಗಾರದ ಬಟ್ಟಲಲ್ಲಿ ಹಾಲು ಹಾಕಿದ್ದಾರೆ. ನೀನು ಕಳ್ಳನೆಂದು ಹೆಂಗಸರು ಉಕ್ಕುತ್ತಿದ್ದಾರೆ; ಮುಂಗಟ್ಟಿನಲ್ಲಿ ಆಡು, ಮೋಹನಾಕಾರನೇ, ಜೋ ಜೋ.' },
        },
        {
          n: 9,
          text: 'అంగుగా తాళ్ళాపాకనయ్య చాలా\nశృంగార రచనగా చెప్పెనీ జోల\nసంగతిగ సకల సంపదలు నీవేలా\nమంగళము తిరుపట్ల మదనగోపాల జోజో జోజో',
          meaning: { en: 'Tallapaka Annamayya has sung this lullaby in a loving, ornamented style; may all wealth come to you duly, and may there be auspiciousness, Tirupati\'s Madana Gopala: jo jo, jo jo.', kn: 'ತಾಳ್ಳಪಾಕ ಅನ್ನಮಯ್ಯ ಬಹು ಪ್ರೀತಿಯಿಂದ ಶೃಂಗಾರ ರಚನೆಯಾಗಿ ಹೇಳಿದ ಈ ಜೋಗುಳ; ಸಕಲ ಸಂಪತ್ತೂ ನಿನ್ನದಾಗಲಿ; ತಿರುಪತಿಯ ಮದನಗೋಪಾಲನಿಗೆ ಮಂಗಳ, ಜೋ ಜೋ.' },
        },
      ],
    },
  ],
};
