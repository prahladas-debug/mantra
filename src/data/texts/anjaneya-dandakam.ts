/**
 * Śrī Āñjaneya Daṇḍakaṃ (Telugu), in Telugu script.
 *
 * The Daṇḍaka circulates in several recensions and the author is not named in the copies;
 * this is the version found, with the same wording, on hindupad.com, mantrapdf.com and hariome.com
 * (three copies of one text, in the "Vignanam / sanskritdocuments" form). It was collated, Nov 2026,
 * against four other typed copies:
 *  S. shlokam.org (a fuller copy; it puts the alternative words in [ ] and has a few extra phrases);
 *  P. poojalu.com, W. kamthasthabharathi.wordpress.com and M. stotramanjari.com (another
 *     recension: "దయాశాలివై జూచితే దాతవై బ్రోచితే", "శ్రీరామునింజూచి", "భూమిజంజూచి", "యుగ్రుడై").
 * (The DLI scans of the 1921-22 booklets on archive.org have unusable OCR; sanskritdocuments.org
 *  and vignanam.org could not be read from here.)
 * Typing slips of the base copy mended against S, P, W, M: "దాసుండవై" -> "దాసుండనై";
 *  "కాకుత్థ్స" -> "కాకుత్స్థ"; "విభీషుణున్" -> "విభీషణున్"; "యాలక్షణున్" -> "యా లక్ష్మణున్";
 *  "పాపముల్ల్బాయునే" -> "పాపముల్ బాయునే". Where the copies divide, these readings were chosen:
 *  "సుగ్రీవుకున్" (S, P, base); "శ్రీరామభక్తి ప్రశస్తంబుగా" (S, W, M; base "భక్త");
 *  "మన్నించి" (base; S, W, M "మన్నించినన్"); "రారా నా ముద్దు నరసింహ" (S, P, M; base "రారోరి");
 *  "కృపాదృష్టి" (base; the other copies "దయాదృష్టి"); "నమస్తే నమో వాయుపుత్రా" (base; the others
 *  "నమస్తే వాయుపుత్రా … నమస్తే నమః"). Variation of this kind is normal for this text; readers who
 *  learnt another recension will find small differences of wording.
 * The daṇḍaka is one long sentence; it is cut here at points of sense. Meanings are original.
 */
import type { Mantra } from '../types';

export const anjaneyaDandakam: Mantra = {
  id: 'anjaneya-dandakam',
  title: 'శ్రీ ఆంజనేయ దండకం',
  titleEn: 'Sri Anjaneya Dandakam',
  category: 'kirtana',
  order: 3,
  sourceScript: 'telugu',
  deity: 'Śrī Āñjaneya (Hanumān)',
  source: 'Telugu daṇḍaka (author not named in the copies)',
  summary: 'A Telugu dandakam, one long unbroken verse, in praise of Hanuman. After the opening salutations the poet recalls Hanuman\'s service to Sugriva and Rama: finding Sita, burning Lanka, bringing the Sanjivani herb, and the coronation at Ayodhya. It ends with a prayer for fearlessness against ghosts and spirits and with repeated salutations. It is widely recited on Tuesdays and Saturdays.',
  summaryKn: 'ಹನುಮಂತನ ಸ್ತುತಿಯಲ್ಲಿ ತೆಲುಗಿನ ಒಂದು ಉದ್ದ ಅವಿರಾಮ ದಂಡಕ. ಆರಂಭದ ನಮನಗಳ ನಂತರ ಸುಗ್ರೀವ-ರಾಮರಿಗೆ ಹನುಮಂತನ ಸೇವೆಯನ್ನು ಸ್ಮರಿಸುತ್ತದೆ: ಸೀತೆಯನ್ನು ಕಂಡದ್ದು, ಲಂಕೆಯನ್ನು ಸುಟ್ಟದ್ದು, ಸಂಜೀವಿನಿಯನ್ನು ತಂದದ್ದು, ಅಯೋಧ್ಯೆಯ ಪಟ್ಟಾಭಿಷೇಕ. ಭೂತಪ್ರೇತ ಭಯದಿಂದ ರಕ್ಷಣೆಗಾಗಿ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಪುನಃ ಪುನಃ ನಮಸ್ಕಾರಗಳೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ. ಮಂಗಳವಾರ ಮತ್ತು ಶನಿವಾರ ಇದನ್ನು ಹೆಚ್ಚಾಗಿ ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ప్రార్థన',
      titleEn: 'Invocation',
      note: 'The salutations and the poet\'s resolve to serve Hanuman.',
      noteKn: 'ಆರಂಭದ ನಮನಗಳು ಮತ್ತು ಹನುಮಂತನ ಸೇವೆ ಮಾಡುವ ಕವಿಯ ಸಂಕಲ್ಪ.',
      verses: [
        {
          text: 'శ్రీ ఆంజనేయం ప్రసన్నాంజనేయం\nప్రభాదివ్యకాయం ప్రకీర్తి ప్రదాయం\nభజే వాయుపుత్రం భజే వాలగాత్రం భజేహం పవిత్రం\nభజే సూర్యమిత్రం భజే రుద్రరూపం\nభజే బ్రహ్మతేజం బటంచున్',
          meaning: { en: 'I worship Anjaneya, the gracious son of Anjana, with the brilliant divine body who grants fame; I worship the son of the Wind, the one whose body ends in a tail; I worship the pure one; I worship the friend of the Sun, the one of Rudra\'s form, the one of Brahma\'s radiance: thus I say.', kn: 'ಪ್ರಸನ್ನನಾದ ಆಂಜನೇಯನನ್ನು, ಕಾಂತಿಯ ದಿವ್ಯ ಶರೀರದ, ಕೀರ್ತಿ ನೀಡುವವನನ್ನು ಭಜಿಸುತ್ತೇನೆ; ವಾಯುಪುತ್ರನನ್ನು, ಬಾಲವುಳ್ಳ ಶರೀರದವನನ್ನು ಭಜಿಸುತ್ತೇನೆ; ಪವಿತ್ರನನ್ನು ಭಜಿಸುತ್ತೇನೆ; ಸೂರ್ಯಮಿತ್ರನನ್ನು, ರುದ್ರರೂಪನನ್ನು, ಬ್ರಹ್ಮತೇಜಸ್ವಿಯನ್ನು ಭಜಿಸುತ್ತೇನೆ, ಎಂದು.' },
        },
        {
          text: 'ప్రభాతంబు సాయంత్రమున్ నీనామసంకీర్తనల్ జేసి\nనీ రూపు వర్ణించి నీమీద నే దండకం బొక్కటిన్ జేయ\nనీ మూర్తిగావించి నీసుందరం బెంచి నీ దాసదాసుండనై\nరామభక్తుండనై నిన్ను నేగొల్చెదన్',
          meaning: { en: 'Morning and evening I sing the praise of your name, describe your form and compose this one dandakam on you; I bring your image before me and think of your beauty; as the servant of your servants and a devotee of Rama, I worship you.', kn: 'ಬೆಳಿಗ್ಗೆ ಸಂಜೆ ನಿನ್ನ ನಾಮಸಂಕೀರ್ತನೆ ಮಾಡಿ, ನಿನ್ನ ರೂಪವನ್ನು ವರ್ಣಿಸಿ, ನಿನ್ನ ಮೇಲೆ ಒಂದು ದಂಡಕವನ್ನು ರಚಿಸಲು, ನಿನ್ನ ಮೂರ್ತಿಯನ್ನು ಕಲ್ಪಿಸಿ ನಿನ್ನ ಸೌಂದರ್ಯವನ್ನು ಧ್ಯಾನಿಸಿ, ನಿನ್ನ ದಾಸರ ದಾಸನಾಗಿ, ರಾಮಭಕ್ತನಾಗಿ ನಿನ್ನನ್ನು ಸೇವಿಸುತ್ತೇನೆ.' },
        },
        {
          text: 'నీ కటాక్షంబునన్ జూచితే వేడుకల్ చేసితే\nనా మొరాలించితే నన్ను రక్షించితే\nఅంజనాదేవి గర్భాన్వయా దేవ\nనిన్నెంచ నేనెంతవాడన్',
          meaning: { en: 'If you look at me with your gracious eye, if you take delight in me, if you hear my cry, if you protect me, O god born of Anjana Devi\'s womb, who am I to think of you?', kn: 'ನೀನು ಕರುಣೆಯ ನೋಟದಿಂದ ನನ್ನನ್ನು ನೋಡಿದರೆ, ಆನಂದಿಸಿದರೆ, ನನ್ನ ಮೊರೆಯನ್ನು ಆಲಿಸಿದರೆ, ನನ್ನನ್ನು ರಕ್ಷಿಸಿದರೆ; ಅಂಜನಾದೇವಿಯ ಗರ್ಭದಲ್ಲಿ ಹುಟ್ಟಿದ ದೇವನೇ, ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸಲು ನಾನು ಎಷ್ಟರವನು?' },
        },
      ],
    },
    {
      title: 'శ్రీరామ సేవ',
      titleEn: 'Service of Sri Rama',
      note: 'The deeds of Hanuman in the Ramayana, from meeting Rama to the coronation.',
      noteKn: 'ರಾಮನನ್ನು ಭೇಟಿಯಾದಂದಿನಿಂದ ಪಟ್ಟಾಭಿಷೇಕದವರೆಗೆ ರಾಮಾಯಣದಲ್ಲಿ ಹನುಮಂತನ ಕಾರ್ಯಗಳು.',
      verses: [
        {
          text: 'దయాశాలివై జూచియున్ దాతవై బ్రోచియున్\nదగ్గరన్ నిల్చియున్ దొల్లి సుగ్రీవుకున్ మంత్రివై\nస్వామి కార్యార్థమై యేగి\nశ్రీరామ సౌమిత్రులం జూచి వారిన్ విచారించి\nసర్వేశు బూజించి యబ్భానుజుం బంటు గావించి',
          meaning: { en: 'Merciful, you looked on me; as a giver you protected me and stood near. Long ago, as minister of Sugriva, you went out on your lord\'s business, saw Rama and Lakshmana and questioned them, worshipped the Lord of all, and made Sugriva, the Sun\'s son, his servant.', kn: 'ದಯಾಶಾಲಿಯಾಗಿ ನೋಡಿ, ದಾತನಾಗಿ ಕಾಪಾಡಿ, ಹತ್ತಿರ ನಿಂತೆ. ಹಿಂದೆ ಸುಗ್ರೀವನ ಮಂತ್ರಿಯಾಗಿ ಒಡೆಯನ ಕಾರ್ಯಕ್ಕಾಗಿ ಹೋಗಿ ರಾಮಲಕ್ಷ್ಮಣರನ್ನು ಕಂಡು ವಿಚಾರಿಸಿ, ಸರ್ವೇಶನನ್ನು ಪೂಜಿಸಿ, ಸೂರ್ಯಪುತ್ರ ಸುಗ್ರೀವನನ್ನು ಅವನ ಸೇವಕನನ್ನಾಗಿ ಮಾಡಿದೆ.' },
        },
        {
          text: 'వాలినిన్ జంపించి కాకుత్స్థ తిలకున్ కృపాదృష్టి వీక్షించి\nకిష్కింధకేతెంచి శ్రీరామ కార్యార్థమై లంక కేతెంచియున్\nలంకిణిన్ జంపియున్ లంకనున్ గాల్చియున్',
          meaning: { en: 'You had Vali killed, and Rama, the crest of the Kakutstha line, looked on you with kindness. You came to Kishkindha, and for Rama\'s work you went to Lanka; you killed Lankini and burnt Lanka.', kn: 'ವಾಲಿಯನ್ನು ಕೊಲ್ಲಿಸಿ, ಕಾಕುತ್ಸ್ಥ ತಿಲಕನಾದ ರಾಮನು ಕೃಪಾದೃಷ್ಟಿಯಿಂದ ನೋಡಿದನು. ಕಿಷ್ಕಿಂಧೆಗೆ ಬಂದು, ಶ್ರೀರಾಮನ ಕಾರ್ಯಕ್ಕಾಗಿ ಲಂಕೆಗೆ ಹೋಗಿ, ಲಂಕಿಣಿಯನ್ನು ಕೊಂದು ಲಂಕೆಯನ್ನು ಸುಟ್ಟೆ.' },
        },
        {
          text: 'యభ్భూమిజం జూచి యానందముప్పొంగి యాయుంగరంబిచ్చి\nయారత్నమున్ దెచ్చి శ్రీరామునకున్నిచ్చి సంతోషమున్ జేసి\nసుగ్రీవునిన్ యంగదున్ జాంబవంతున్ నలున్ నీలులన్ గూడి\nయాసేతువున్ దాటి వానరుల్ మూకలై పెన్మూకలై\nయాదైత్యులన్ ద్రుంచగా',
          meaning: { en: 'You saw Sita, the daughter of the Earth, and rejoiced, and gave her the ring; you brought back her jewel, gave it to Rama and gladdened him. Together with Sugriva, Angada, Jambavan, Nala and Nila, you crossed the bridge, and the monkeys in great hosts crushed the demons.', kn: 'ಭೂಮಿಜೆಯಾದ ಸೀತೆಯನ್ನು ಕಂಡು ಆನಂದ ಉಕ್ಕಿ, ಅವಳಿಗೆ ಉಂಗುರ ಕೊಟ್ಟು, ಆ ರತ್ನವನ್ನು ತಂದು ಶ್ರೀರಾಮನಿಗೆ ಕೊಟ್ಟು ಸಂತೋಷಪಡಿಸಿದೆ. ಸುಗ್ರೀವ, ಅಂಗದ, ಜಾಂಬವಂತ, ನಳ, ನೀಲರೊಂದಿಗೆ ಆ ಸೇತುವೆ ದಾಟಿ, ವಾನರರು ದೊಡ್ಡ ದೊಡ್ಡ ಸೇನೆಗಳಾಗಿ ದೈತ್ಯರನ್ನು ಸಂಹರಿಸಿದರು.' },
        },
        {
          text: 'రావణుండంత కాలాగ్ని రుద్రుండుగా వచ్చి\nబ్రహ్మాండమైనట్టి యా శక్తినిన్ వైచి యా లక్ష్మణున్ మూర్ఛనొందింపగా\nనప్పుడే నీవు సంజీవినిన్ దెచ్చి సౌమిత్రికిన్నిచ్చి ప్రాణంబు రక్షింపగా',
          meaning: { en: 'Then Ravana came like Kalagni Rudra, hurled his immense spear and made Lakshmana faint; at once you brought the Sanjivani herb, gave it to Sumitra\'s son and saved his life.', kn: 'ಆಗ ರಾವಣ ಕಾಲಾಗ್ನಿ ರುದ್ರನಂತೆ ಬಂದು ಬ್ರಹ್ಮಾಂಡದಂತಹ ಆ ಶಕ್ತಿ ಆಯುಧವನ್ನು ಎಸೆದು ಲಕ್ಷ್ಮಣನನ್ನು ಮೂರ್ಛೆಗೊಳಿಸಿದಾಗ, ಆ ಕ್ಷಣವೇ ನೀನು ಸಂಜೀವಿನಿಯನ್ನು ತಂದು ಸೌಮಿತ್ರಿಗೆ ಕೊಟ್ಟು ಪ್ರಾಣವನ್ನು ಉಳಿಸಿದೆ.' },
        },
        {
          text: 'కుంభకర్ణాదులన్ వీరులం బోర శ్రీరామ బాణాగ్ని\nవారందరిన్ రావణున్ జంపగా నంత లోకంబు లానందమై యుండ\nనవ్వేళనున్ విభీషణున్ వేడుకన్ దోడుకన్ వచ్చి పట్టాభిషేకంబు చేయించి',
          meaning: { en: 'When Rama\'s fire-arrows had killed warriors like Kumbhakarna, and all of them and Ravana, and the worlds were full of joy, at that time you joyfully brought Vibhishana and had him crowned.', kn: 'ಕುಂಭಕರ್ಣಾದಿ ವೀರರೊಂದಿಗೆ ಹೋರಾಡಿ, ಶ್ರೀರಾಮನ ಬಾಣಾಗ್ನಿ ಅವರೆಲ್ಲರನ್ನೂ ರಾವಣನನ್ನೂ ಸಂಹರಿಸಲು, ಲೋಕಗಳು ಆನಂದಮಯವಾಗಿರಲು, ಆ ಸಮಯದಲ್ಲಿ ವಿಭೀಷಣನನ್ನು ಸಂತೋಷದಿಂದ ಕರೆತಂದು ಪಟ್ಟಾಭಿಷೇಕ ಮಾಡಿಸಿದೆ.' },
        },
        {
          text: 'సీతామహాదేవినిన్ దెచ్చి శ్రీరాముకున్నిచ్చి\nయంతన్నయోధ్యాపురిన్ జొచ్చి పట్టాభిషేకంబు సంరంభమైయున్న\nనీకన్న నాకెవ్వరున్ గూర్మి లేరంచు మన్నించి',
          meaning: { en: 'You brought the great lady Sita and gave her to Rama. Then, as they entered Ayodhya and the coronation was a great festival, He honoured you, saying, "No one is dearer to me than you."', kn: 'ಸೀತಾಮಹಾದೇವಿಯನ್ನು ತಂದು ಶ್ರೀರಾಮನಿಗೆ ಒಪ್ಪಿಸಿ, ಅನಂತರ ಅಯೋಧ್ಯೆಯನ್ನು ಪ್ರವೇಶಿಸಿ ಪಟ್ಟಾಭಿಷೇಕ ಸಂಭ್ರಮದಲ್ಲಿರಲು, “ನಿನಗಿಂತ ಪ್ರಿಯರು ನನಗೆ ಯಾರೂ ಇಲ್ಲ” ಎಂದು ಅವನು ನಿನ್ನನ್ನು ಗೌರವಿಸಿದನು.' },
        },
      ],
    },
    {
      title: 'ఫలం ప్రార్థన',
      titleEn: 'Fruit and prayer',
      note: 'The devotee asks what the worship of Rama through Hanuman brings, and prays for protection from fear.',
      noteKn: 'ಹನುಮಂತನ ಮೂಲಕ ರಾಮಭಕ್ತಿಯಿಂದ ಏನು ದೊರೆಯುವುದೆಂದು ಕೇಳಿ ಭಯದಿಂದ ರಕ್ಷಣೆಗಾಗಿ ಪ್ರಾರ್ಥಿಸುತ್ತಾನೆ.',
      verses: [
        {
          text: 'శ్రీరామభక్తి ప్రశస్తంబుగా నిన్ను సేవించి నీ కీర్తనల్ చేసినన్\nపాపముల్ బాయునే భయములున్ దీరునే భాగ్యముల్ గల్గునే\nసామ్రాజ్యముల్ గల్గు సంపత్తులున్ కల్గునో',
          meaning: { en: 'If I serve you with praiseworthy devotion to Sri Rama and sing your praises, will my sins go, will fears end, will good fortune come, will I gain empires and wealth?', kn: 'ಶ್ರೀರಾಮಭಕ್ತಿಯು ಶ್ಲಾಘ್ಯವಾಗುವಂತೆ ನಿನ್ನನ್ನು ಸೇವಿಸಿ ನಿನ್ನ ಕೀರ್ತನೆಗಳನ್ನು ಮಾಡಿದರೆ, ಪಾಪಗಳು ಹೋಗುವುವೇ, ಭಯಗಳು ತೀರುವುವೇ, ಭಾಗ್ಯಗಳು ದೊರೆಯುವುವೇ, ಸಾಮ್ರಾಜ್ಯಗಳೂ ಸಂಪತ್ತುಗಳೂ ಲಭಿಸುವುವೇ?' },
        },
        {
          text: 'వానరాకార యో భక్త మందార యో పుణ్య సంచార యో ధీర యో వీర\nనీవే సమస్తంబుగా నొప్పి యాతారక బ్రహ్మ మంత్రంబు పఠియించుచున్ స్థిరమ్ముగన్\nవజ్రదేహంబునున్ దాల్చి శ్రీరామ శ్రీరామయంచున్ మనఃపూతమైన ఎప్పుడున్ తప్పకన్\nతలతునా జిహ్వయందుండి నీ దీర్ఘదేహమ్ము త్రైలోక్య సంచారివై రామ\nనామాంకితధ్యానివై బ్రహ్మతేజంబునన్ రౌద్రనీజ్వాల\nకల్లోల హావీర హనుమంత',
          meaning: { en: 'O monkey-formed one, wish-fulfilling tree of devotees, holy wanderer, steady and heroic: seeing you as everything, I recite the Taraka Brahma mantra firmly and, taking on a body strong as the diamond, think "Sri Rama, Sri Rama" always with a pure heart. Remaining on my tongue, with your tall body roaming the three worlds, absorbed in the name of Rama, with the radiance of Brahma, fiery flames and tumult, O brave Hanuman:', kn: 'ವಾನರಾಕಾರನೇ, ಭಕ್ತರ ಕಲ್ಪವೃಕ್ಷವೇ, ಪುಣ್ಯಸಂಚಾರಿಯೇ, ಧೀರನೇ, ವೀರನೇ; ನೀನೇ ಸಮಸ್ತವೆಂದು ತಿಳಿದು, ತಾರಕ ಬ್ರಹ್ಮ ಮಂತ್ರವನ್ನು ಸ್ಥಿರವಾಗಿ ಪಠಿಸುತ್ತ, ವಜ್ರದೇಹವನ್ನು ಧರಿಸಿ, “ಶ್ರೀರಾಮ ಶ್ರೀರಾಮ” ಎಂದು ಶುದ್ಧ ಮನಸ್ಸಿನಿಂದ ಯಾವಾಗಲೂ ತಪ್ಪದೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನನ್ನ ನಾಲಿಗೆಯಲ್ಲಿದ್ದು, ಮೂರು ಲೋಕ ಸಂಚರಿಸುವ ನಿನ್ನ ಎತ್ತರದ ದೇಹ, ರಾಮನಾಮ ಧ್ಯಾನ, ಬ್ರಹ್ಮತೇಜಸ್ಸು, ರೌದ್ರ ಜ್ವಾಲಾ ಕಲ್ಲೋಲದೊಂದಿಗೆ, ವೀರ ಹನುಮಂತನೇ:' },
        },
        {
          text: 'ఓంకార శబ్దంబులన్ భూత ప్రేతంబులన్ బెన్\nపిశాచంబులన్ శాకినీ ఢాకినీత్యాదులన్ గాలిదయ్యంబులన్\nనీదు వాలంబునన్ జుట్టి నేలంబడం గొట్టి నీముష్టి ఘాతంబులన్\nబాహుదండంబులన్ రోమఖండంబులన్ ద్రుంచి కాలాగ్ని\nరుద్రుండవై నీవు బ్రహ్మప్రభాభాసితంబైన నీదివ్య తేజంబునున్ జూచి\nరారా నా ముద్దు నరసింహ యన్చున్ దయాదృష్టి\nవీక్షించి నన్నేలు నాస్వామియో యాంజనేయా',
          meaning: { en: 'With the sound of Omkara, take the ghosts and spirits, the great pisachas, the shakini and dakini and other beings, the ghost of the wind: wrap them in your tail, dash them to the ground, break them with the blows of your fist, your strong arms and the strands of your hair. As Kalagni Rudra, seeing your divine radiance that shines with the light of Brahma, call "Come, my dear lion-man", look on me with kindness and rule me, my Lord Anjaneya.', kn: 'ಓಂಕಾರ ಶಬ್ದದಿಂದ ಭೂತ-ಪ್ರೇತಗಳನ್ನು, ಮಹಾ ಪಿಶಾಚಗಳನ್ನು, ಶಾಕಿನೀ-ಢಾಕಿನೀ ಮೊದಲಾದವರನ್ನು, ಗಾಳಿದೆವ್ವಗಳನ್ನು ನಿನ್ನ ಬಾಲದಿಂದ ಸುತ್ತಿ, ನೆಲಕ್ಕೆ ಹೊಡೆದು, ಮುಷ್ಟಿಯ ಪೆಟ್ಟು, ಬಾಹುದಂಡ, ರೋಮಖಂಡಗಳಿಂದ ಮುರಿದು, ಕಾಲಾಗ್ನಿ ರುದ್ರನಾಗಿ, ಬ್ರಹ್ಮಪ್ರಭೆಯಿಂದ ಹೊಳೆಯುವ ನಿನ್ನ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ನೋಡಿ “ಬಾರಾ ನನ್ನ ಮುದ್ದು ನರಸಿಂಹ” ಎಂದು ದಯಾದೃಷ್ಟಿಯಿಂದ ನೋಡಿ ನನ್ನನ್ನು ಆಳುವ ನನ್ನ ಒಡೆಯ ಆಂಜನೇಯನೇ.' },
        },
      ],
    },
    {
      title: 'నమస్కారం',
      titleEn: 'Salutation',
      note: 'The closing salutations.',
      noteKn: 'ಮುಕ್ತಾಯದ ನಮಸ್ಕಾರಗಳು.',
      verses: [
        {
          text: 'నమస్తే సదా బ్రహ్మచారీ\nనమస్తే నమో వాయుపుత్రా నమస్తే నమః',
          meaning: { en: 'Salutations ever to you, the celibate; salutations, salutations to the son of the Wind; salutations, salutations to you.', kn: 'ಸದಾ ಬ್ರಹ್ಮಚಾರಿಯಾದ ನಿನಗೆ ನಮಸ್ಕಾರ; ವಾಯುಪುತ್ರನಿಗೆ ನಮೋ ನಮಃ; ನಿನಗೆ ನಮೋ ನಮಃ.' },
        },
      ],
    },
  ],
};
