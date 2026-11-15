/**
 * Tiruppāvai of Āṇḍāḷ (Nālāyira Divya Prabandham 474-503), Tamil, in Tamil script.
 *
 * Collated Nov 2026 against:
 *  A. Tiruppāvai (Caṅkat tamiḻ mālai muppatu), Sri S. Krishnaswami Iyengar, Sri Vaishnava
 *     Sudarsanam, Chennai (archive.org tpv-pki-ao, OCR): the Vaishnava text, base for
 *     wording and for the sandhi spellings kept here (uṉṟaṉṉai, naṅkāmaṅkaḷ, pirivāṟṟa).
 *  B. "Āṇḍāḷ aruḷicceyta Tiruppāvai: mūlamum", Tamil Digital Library 1954 print
 *     (archive.org tdl.44209) and "Tiruppāvai" 1960 print (acc.-no.-18584), both OCR,
 *     used for the taniyans and the vāḻi tirunāmam and to settle A's OCR errors.
 *  C. Project Madurai e-text of the Nālāyira Divya Prabandham (pm0005_02) and
 *     Tamil Wikisource "திருப்பாவை", two typed copies of one text.
 * The word division is ours; the words follow A. Wording differences resolved:
 *  17.1 "சோறே" is in A and the 1960 print, absent in C ("அம்பரமே தண்ணீரே அறஞ்செய்யும்"): kept.
 *  6.1 "கோயிலில்" (C) / "கோயில்" (A, OCR): "கோயிலில்" kept.
 *  9.3 "தாள் திறவாய்" (A, B) / "தாழ் திறவாய்" (C). 14.4 "போதந்தார்" (A, B) / "போதன்றார்" (C, a slip).
 *  14.1 "புழைக்கடை" (A) / "புழக்கடை" (C). 15.2 "நங்கைமீர்" (A) / "நங்கையீர்" (C).
 *  19.7 "கில்லாயால்" (A) / "கில்லாயேல்" (C). 26.4 "வண்ணத்து உன்" (A, B) / "வண்ணத்துள்" (C).
 *  28.3 "பிறவி பெறுந்தனை" (A) / "பிறவிப் பெறுந்தனை" (C). 29.5 "இற்றைப்" (A, B) / "அறைப்" (C, a slip).
 *  1.5 "இளஞ்சிங்கம்" (A, Wikisource) / "இளம்சிங்கம்" (Madurai).
 * The Sanskrit taniyan of Parāśara Bhaṭṭar ("nīḷā-tuṅga-stana-giri…") is not included.
 * Meanings are original; no published translation was used.
 */
import type { Mantra } from '../types';

export const tiruppavai: Mantra = {
  id: 'tiruppavai',
  title: 'திருப்பாவை',
  titleEn: 'Tiruppavai of Andal',
  category: 'kirtana',
  order: 1,
  sourceScript: 'tamil',
  deity: 'Śrī Āṇḍāḷ · Śrī Raṅganātha',
  source: 'Āṇḍāḷ (Goda Devi), Nālāyira Divya Prabandham',
  summary: 'Andal\'s thirty Tamil songs for the Margali vow (pavai nonbu). The girls of Aypadi wake one another before dawn, go to Nandagopa\'s house, rouse Krishna and Nappinnai and ask for the "parai", which means service to Him. One pasuram is sung on each day of Margali; the thirtieth names the author and the fruit of singing the thirty.',
  summaryKn: 'ಮಾರ್ಗಳಿ ವ್ರತಕ್ಕಾಗಿ ಆಂಡಾಳ್ ರಚಿಸಿದ ಮೂವತ್ತು ತಮಿಳು ಗೀತೆಗಳು. ಆಯ್ಪಾಡಿಯ ಹುಡುಗಿಯರು ಬೆಳಗಿನ ಮುನ್ನ ಒಬ್ಬರನ್ನೊಬ್ಬರು ಎಬ್ಬಿಸಿ, ನಂದಗೋಪನ ಮನೆಗೆ ಹೋಗಿ, ಕೃಷ್ಣನನ್ನೂ ನಪ್ಪಿನ್ನೈಯನ್ನೂ ಎಬ್ಬಿಸಿ, ಅವನ ಸೇವೆಯೆಂಬ “ಪರೈ”ಯನ್ನು ಬೇಡುತ್ತಾರೆ. ಮಾರ್ಗಳಿ ತಿಂಗಳ ಪ್ರತಿದಿನ ಒಂದೊಂದು ಪಾಸುರವನ್ನು ಹಾಡುತ್ತಾರೆ; ಮೂವತ್ತನೆಯದು ಕರ್ತೃವಿನ ಹೆಸರನ್ನೂ ಫಲವನ್ನೂ ಹೇಳುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'தனியன்கள்',
      titleEn: 'Taniyans',
      note: 'Two Tamil taniyans (verses of praise), said before the Tiruppavai in the Vaishnava tradition; they are attributed to Uyyakkondar.',
      noteKn: 'ವೈಷ್ಣವ ಸಂಪ್ರದಾಯದಲ್ಲಿ ತಿರುಪ್ಪಾವೈಗೆ ಮುನ್ನ ಹೇಳುವ ಎರಡು ತಮಿಳು ತನಿಯನ್ ಪದ್ಯಗಳು; ಇವು ಉಯ್ಯಕ್ಕೊಂಡಾರರದು ಎಂದು ಪ್ರತೀತಿ.',
      verses: [
        {
          text: 'அன்ன வயற்புதுவை ஆண்டாள் அரங்கற்குப்\nபன்னு திருப்பாவைப் பல்பதியம் இன்னிசையால்\nபாடிக் கொடுத்தாள் நற்பாமாலை பூமாலை\nசூடிக் கொடுத்தாளைச் சொல்லு',
          meaning: { en: 'Say the name of Andal of Srivilliputtur, with its swan-filled fields, who sang the many sweet verses of the Tiruppavai to Ranganatha, and gave him both the fine garland of song and the garland of flowers she had worn.', kn: 'ಹಂಸಗಳಿಂದ ತುಂಬಿದ ಗದ್ದೆಗಳ ಶ್ರೀವಿಲ್ಲಿಪುತ್ತೂರಿನ ಆಂಡಾಳನ್ನು ಸ್ಮರಿಸು. ರಂಗನಾಥನಿಗಾಗಿ ತಿರುಪ್ಪಾವೈಯ ಹಲವು ಪದ್ಯಗಳನ್ನು ಇಂಪಾಗಿ ಹಾಡಿ, ಹಾಡಿನ ಮಾಲೆಯನ್ನೂ ತಾನು ಮುಡಿದ ಹೂಮಾಲೆಯನ್ನೂ ಅವನಿಗೆ ಅರ್ಪಿಸಿದವಳು ಅವಳು.' },
        },
        {
          text: 'சூடிக் கொடுத்த சுடர்க்கொடியே தொல்பாவை\nபாடி அருளவல்ல பல்வளையாய் நாடி நீ\nவேங்கடவற்கு என்னை விதி என்ற இம்மாற்றம்\nநாங்கடவா வண்ணமே நல்கு',
          meaning: { en: 'O radiant creeper who gave the garland after wearing it, bangled lady able to sing the ancient pavai: please grant that the word you spoke, "ordain me for Venkatesa", is never broken by us.', kn: 'ತಾನು ಮುಡಿದು ಮಾಲೆಯನ್ನು ಕೊಟ್ಟ ಕಾಂತಿಮಯ ಬಳ್ಳಿಯೇ, ಪುರಾತನ ಪಾವೈಯನ್ನು ಹಾಡಿದ ಬಳೆಗಳ ಮಹಿಳೆಯೇ, “ನನ್ನನ್ನು ವೆಂಕಟೇಶನಿಗೆ ವಿಧಿಸು” ಎಂದು ನೀನು ಆಡಿದ ಮಾತನ್ನು ನಾವು ಮೀರದಂತೆ ಅನುಗ್ರಹಿಸು.' },
        },
      ],
    },
    {
      title: 'பாவை நோன்பின் தொடக்கம்',
      titleEn: 'Beginning of the vow (1-5)',
      note: 'Verses 1 to 5 announce the Margali vow, its rules and its fruit. In the Vaishnava tradition one pasuram is recited on each of the thirty days of Margali (mid-December to mid-January), and many households and temples recite all thirty every day of the month. On the 27th day, the day of "Koodarai", sweet rice with ghee (akkaravadisal) is offered.',
      noteKn: '1 ರಿಂದ 5ನೇ ಪಾಸುರಗಳು ಮಾರ್ಗಳಿ ವ್ರತವನ್ನೂ ಅದರ ನಿಯಮ ಮತ್ತು ಫಲವನ್ನೂ ಹೇಳುತ್ತವೆ. ವೈಷ್ಣವ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಮಾರ್ಗಳಿಯ (ಡಿಸೆಂಬರ್ ಮಧ್ಯದಿಂದ ಜನವರಿ ಮಧ್ಯದವರೆಗೆ) ಮೂವತ್ತು ದಿನಗಳಲ್ಲಿ ಪ್ರತಿದಿನ ಒಂದೊಂದು ಪಾಸುರವನ್ನು ಪಠಿಸುತ್ತಾರೆ; ಹಲವು ಮನೆ-ದೇವಾಲಯಗಳಲ್ಲಿ ಇಡೀ ಮೂವತ್ತನ್ನು ಪ್ರತಿದಿನ ಪಠಿಸುತ್ತಾರೆ. ಇಪ್ಪತ್ತೇಳನೆಯ ದಿನ “ಕೂಡಾರೈ”ಯಂದು ತುಪ್ಪದ ಸಿಹಿ ಅನ್ನ (ಅಕ್ಕಾರವಡಿಶಲ್) ಅರ್ಪಿಸುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'மார்கழித் திங்கள் மதிநிறைந்த நன்னாளால்\nநீராடப் போதுவீர் போதுமினோ நேரிழையீர்\nசீர்மல்கும் ஆய்ப்பாடிச் செல்வச் சிறுமீர்காள்\nகூர்வேல் கொடுந்தொழிலன் நந்தகோபன் குமரன்\nஏரார்ந்த கண்ணி யசோதை இளஞ்சிங்கம்\nகார்மேனிச் செங்கண் கதிர்மதியம் போல்முகத்தான்\nநாராயணனே நமக்கே பறைதருவான்\nபாரோர் புகழப் படிந்தேலோர் எம்பாவாய்',
          meaning: { en: 'On this good day of the month of Margali, when the moon is full, come to bathe, you with fine jewels, rich young girls of prosperous Aypadi. Nandagopa, with his sharp spear and fierce deeds, has a son, the young lion of beautiful-eyed Yashoda, dark of body, red of eye, his face like sun and moon. That Narayana will give us the parai. Join the vow so that the world praises us.', kn: 'ಮಾರ್ಗಳಿ ತಿಂಗಳ ಹುಣ್ಣಿಮೆಯ ಈ ಶುಭದಿನ ಸ್ನಾನಕ್ಕೆ ಬನ್ನಿ, ಒಳ್ಳೆಯ ಒಡವೆಗಳ ಹುಡುಗಿಯರೇ, ಸಮೃದ್ಧ ಆಯ್ಪಾಡಿಯ ಸಿರಿವಂತ ಬಾಲೆಯರೇ. ಹರಿತ ಭಲ್ಲೆಯ ಉಗ್ರಕರ್ಮಿ ನಂದಗೋಪನ ಮಗ, ಚೆಲುವಾದ ಕಣ್ಣಿನ ಯಶೋದೆಯ ಎಳೆಸಿಂಹ, ಕಾರ್ಮುಗಿಲ ಮೈಯವ, ಕೆಂಗಣ್ಣವ, ಸೂರ್ಯಚಂದ್ರರಂತೆ ಮುಖವುಳ್ಳವ, ಆ ನಾರಾಯಣನೇ ನಮಗೆ ಪರೈ ಕೊಡುವನು. ಲೋಕ ಹೊಗಳುವಂತೆ ವ್ರತದಲ್ಲಿ ಸೇರಿರಿ.' },
        },
        {
          n: 2,
          text: 'வையத்து வாழ்வீர்காள் நாமும் நம் பாவைக்குச்\nசெய்யும் கிரிசைகள் கேளீரோ பாற்கடலுள்\nபையத் துயின்ற பரமன் அடிபாடி\nநெய்யுண்ணோம் பாலுண்ணோம் நாட்காலே நீராடி\nமையிட்டு எழுதோம் மலரிட்டு நாம் முடியோம்\nசெய்யாதன செய்யோம் தீக்குறளைச் சென்றோதோம்\nஐயமும் பிச்சையும் ஆந்தனையும் கைகாட்டி\nஉய்யுமாறு எண்ணி உகந்தேலோர் எம்பாவாய்',
          meaning: { en: 'You who live in this world, hear the rites we shall keep for our vow. We sing the feet of the Supreme One who rests gently on the ocean of milk. We will not eat ghee or drink milk; we bathe early in the morning; we will not paint our eyes or put flowers in our hair; we will not do what should not be done or carry tales of malice; we will give alms and food as far as we can, thinking only of how to be saved, and rejoice.', kn: 'ಈ ಲೋಕದಲ್ಲಿ ಬಾಳುವವರೇ, ನಮ್ಮ ವ್ರತಕ್ಕಾಗಿ ನಾವು ಮಾಡುವ ನಿಯಮಗಳನ್ನು ಕೇಳಿರಿ. ಹಾಲಿನ ಕಡಲಲ್ಲಿ ಮೆಲ್ಲನೆ ಮಲಗಿರುವ ಪರಮನ ಪಾದಗಳನ್ನು ಹಾಡುತ್ತೇವೆ. ತುಪ್ಪ ತಿನ್ನೆವು, ಹಾಲು ಕುಡಿಯೆವು; ಬೆಳಗಿನಲ್ಲೇ ಸ್ನಾನ ಮಾಡುವೆವು; ಕಣ್ಣಿಗೆ ಕಾಡಿಗೆ ಹಚ್ಚೆವು, ಹೂ ಮುಡಿಯೆವು; ಮಾಡಬಾರದ್ದನ್ನು ಮಾಡೆವು, ಚಾಡಿ ಹೇಳೆವು; ಭಿಕ್ಷೆ ದಾನಗಳನ್ನು ಸಾಧ್ಯವಾದಷ್ಟು ಕೊಟ್ಟು, ಉದ್ಧಾರದ ದಾರಿಯನ್ನೇ ಯೋಚಿಸಿ ಸಂತೋಷಪಡುವೆವು.' },
        },
        {
          n: 3,
          text: 'ஓங்கி உலகளந்த உத்தமன் பேர்பாடி\nநாங்கள் நம் பாவைக்குச் சாற்றி நீராடினால்\nதீங்கின்றி நாடெல்லாம் திங்கள் மும்மாரி பெய்து\nஓங்கு பெருஞ்செந்நெல் ஊடு கயலுகளப்\nபூங்குவளைப் போதில் பொறிவண்டு கண்படுப்பத்\nதேங்காதே புக்கிருந்து சீர்த்த முலை பற்றி\nவாங்கக் குடம் நிறைக்கும் வள்ளல் பெரும்பசுக்கள்\nநீங்காத செல்வம் நிறைந்தேலோர் எம்பாவாய்',
          meaning: { en: 'If we sing the name of the Supreme One who grew tall and measured the worlds, and bathe, offering this to our vow, then without harm the whole land will have three rains a month; carp will leap among the tall red rice; bees will sleep in the flowers of the blue water lily; the bountiful great cows will stand without stirring and fill the pots as soon as their full udders are held; wealth that never leaves will fill the land.', kn: 'ಬೆಳೆದು ಲೋಕವನ್ನು ಅಳೆದ ಉತ್ತಮನ ಹೆಸರನ್ನು ಹಾಡಿ, ನಮ್ಮ ವ್ರತಕ್ಕೆ ಅರ್ಪಿಸಿ ಸ್ನಾನ ಮಾಡಿದರೆ, ಹಾನಿಯಿಲ್ಲದೆ ನಾಡಿನಲ್ಲೆಲ್ಲ ತಿಂಗಳಿಗೆ ಮೂರು ಮಳೆ ಬೀಳುವುದು; ಎತ್ತರದ ಕೆಂಬತ್ತದ ನಡುವೆ ಮೀನುಗಳು ಜಿಗಿಯುವುವು; ನೈದಿಲೆಯ ಹೂವಿನಲ್ಲಿ ದುಂಬಿಗಳು ಮಲಗುವುವು; ಉದಾರ ಹಸುಗಳು ಅಲುಗದೆ ನಿಂತು ತುಂಬಿದ ಕೆಚ್ಚಲನ್ನು ಹಿಡಿದಾಕ್ಷಣ ಕೊಡಗಳನ್ನು ತುಂಬುವುವು; ಎಂದೂ ಕುಂದದ ಸಂಪತ್ತು ತುಂಬಿರುವುದು.' },
        },
        {
          n: 4,
          text: 'ஆழிமழைக் கண்ணா ஒன்று நீ கைகரவேல்\nஆழியுள் புக்கு முகந்துகொடு ஆர்த்தேறி\nஊழி முதல்வன் உருவம்போல் மெய்கறுத்துப்\nபாழியந் தோளுடைப் பற்பநாபன் கையில்\nஆழிபோல் மின்னி வலம்புரிபோல் நின்றதிர்ந்து\nதாழாதே சார்ங்கம் உதைத்த சரமழைபோல்\nவாழ உலகினில் பெய்திடாய் நாங்களும்\nமார்கழி நீராட மகிழ்ந்தேலோர் எம்பாவாய்',
          meaning: { en: 'O Lord of the rain, deep as the sea, hold nothing back. Enter the ocean, take up its water and rise roaring; turn dark in body like the Primal One of the cosmic dissolution; flash like the discus in the hand of the strong-shouldered Padmanabha and thunder like his right-whorled conch; without delay pour down like the shower of arrows from his Sarnga bow, so that the world may live and we may bathe happily in Margali.', kn: 'ಕಡಲಂತೆ ಗಂಭೀರನಾದ ಮಳೆಯ ದೇವನೇ, ಏನನ್ನೂ ಬಚ್ಚಿಡಬೇಡ. ಕಡಲಿಗೆ ಹೊಕ್ಕು ನೀರನ್ನು ಮೊಗೆದುಕೊಂಡು ಗರ್ಜಿಸುತ್ತ ಮೇಲೇರು; ಪ್ರಳಯಕಾಲದ ಆದಿಪುರುಷನ ರೂಪದಂತೆ ಕಪ್ಪಾಗು; ಬಲಿಷ್ಠ ಭುಜದ ಪದ್ಮನಾಭನ ಕೈಯ ಚಕ್ರದಂತೆ ಮಿಂಚಿ, ಬಲಮುರಿ ಶಂಖದಂತೆ ಗುಡುಗು; ತಡಮಾಡದೆ ಅವನ ಶಾರ್ಙ್ಗ ಬಿಲ್ಲಿನ ಬಾಣದ ಮಳೆಯಂತೆ ಲೋಕ ಬದುಕುವಂತೆ ಸುರಿ; ನಾವೂ ಮಾರ್ಗಳಿಯಲ್ಲಿ ಸಂತೋಷದಿಂದ ಸ್ನಾನ ಮಾಡುವೆವು.' },
        },
        {
          n: 5,
          text: 'மாயனை மன்னு வடமதுரை மைந்தனைத்\nதூயபெருநீர் யமுனைத் துறைவனை\nஆயர் குலத்தினில் தோன்றும் அணிவிளக்கைத்\nதாயைக் குடல்விளக்கம் செய்த தாமோதரனைத்\nதூயோமாய் வந்து நாம் தூமலர் தூவித் தொழுது\nவாயினால் பாடி மனத்தினால் சிந்திக்கப்\nபோய பிழையும் புகுதருவான் நின்றனவும்\nதீயினில் தூசாகும் செப்பேலோர் எம்பாவாய்',
          meaning: { en: 'Let us come pure, scatter pure flowers and worship the wonderful Lord, the son of ancient Northern Mathura, the dweller on the banks of the clear, great river Yamuna, the shining lamp of the cowherd race, Damodara who honoured his mother\'s womb. Sing with the mouth, think with the mind: the sins done in the past and those that were about to come will turn to dust in fire. So say His name.', kn: 'ಶುದ್ಧರಾಗಿ ಬಂದು, ಶುದ್ಧ ಹೂಗಳನ್ನು ಚೆಲ್ಲಿ ಆ ಮಾಯಾವಿಯನ್ನು ಪೂಜಿಸೋಣ: ಪುರಾತನ ಉತ್ತರ ಮಥುರೆಯ ಮಗ, ನಿರ್ಮಲ ಯಮುನೆಯ ತೀರದಲ್ಲಿ ವಿಹರಿಸುವವ, ಗೊಲ್ಲರ ಕುಲದಲ್ಲಿ ಹುಟ್ಟಿದ ಮಂಗಳದೀಪ, ತಾಯಿಯ ಗರ್ಭವನ್ನು ಬೆಳಗಿಸಿದ ದಾಮೋದರ. ಬಾಯಿಂದ ಹಾಡಿ ಮನಸ್ಸಿನಿಂದ ಧ್ಯಾನಿಸಿದರೆ, ಹಿಂದೆ ಮಾಡಿದ ಮತ್ತು ಇನ್ನು ಬರಲಿರುವ ಪಾಪಗಳು ಬೆಂಕಿಯಲ್ಲಿ ಧೂಳಾಗುತ್ತವೆ. ಅವನ ಹೆಸರನ್ನು ಹೇಳಿರಿ.' },
        },
      ],
    },
    {
      title: 'பத்துத் தோழியரை எழுப்புதல்',
      titleEn: 'Waking ten friends (6-15)',
      note: 'In these ten verses the girls go from house to house and wake their sleeping friends.',
      noteKn: 'ಈ ಹತ್ತು ಪಾಸುರಗಳಲ್ಲಿ ಹುಡುಗಿಯರು ಮನೆಮನೆಗೆ ಹೋಗಿ ಮಲಗಿದ್ದ ಗೆಳತಿಯರನ್ನು ಎಬ್ಬಿಸುತ್ತಾರೆ.',
      verses: [
        {
          n: 6,
          text: 'புள்ளும் சிலம்பினகாண் புள்ளரையன் கோயிலில்\nவெள்ளை விளிசங்கின் பேரரவம் கேட்டிலையோ\nபிள்ளாய் எழுந்திராய் பேய்முலை நஞ்சுண்டு\nகள்ளச் சகடம் கலக்கழியக் காலோச்சி\nவெள்ளத்தரவில் துயிலமர்ந்த வித்தினை\nஉள்ளத்துக்கொண்டு முனிவர்களும் யோகிகளும்\nமெள்ள எழுந்து அரியென்ற பேரரவம்\nஉள்ளம் புகுந்து குளிர்ந்தேலோர் எம்பாவாய்',
          meaning: { en: 'The birds are calling; do you not hear the great sound of the white conch in the temple of the Lord of Garuda? Get up, girl! He drank the poison from the demoness\'s breast and kicked the trick-cart to pieces; he is the seed of all, asleep on the serpent in the flood. Sages and yogis rise slowly with Him in their hearts, and the great cry "Hari!" enters our hearts and cools them.', kn: 'ಹಕ್ಕಿಗಳು ಕೂಗುತ್ತಿವೆ; ಗರುಡನ ಒಡೆಯನ ದೇವಾಲಯದಲ್ಲಿ ಬಿಳಿ ಶಂಖದ ಮಹಾನಾದ ನಿನಗೆ ಕೇಳಿಸುತ್ತಿಲ್ಲವೇ? ಎದ್ದೇಳು ಹುಡುಗಿ! ರಕ್ಕಸಿಯ ಮೊಲೆಯ ವಿಷವನ್ನು ಕುಡಿದು, ಮೋಸದ ಗಾಡಿಯನ್ನು ಒದೆದು ಮುರಿದವನನ್ನು, ಪ್ರಳಯಜಲದಲ್ಲಿ ಸರ್ಪದ ಮೇಲೆ ಮಲಗಿದ ಮೂಲಬೀಜವನ್ನು ಹೃದಯದಲ್ಲಿಟ್ಟುಕೊಂಡು ಋಷಿಗಳೂ ಯೋಗಿಗಳೂ ಮೆಲ್ಲನೆ ಎದ್ದು “ಹರಿ” ಎನ್ನುವ ಮಹಾಘೋಷ ನಮ್ಮ ಹೃದಯ ಪ್ರವೇಶಿಸಿ ತಂಪು ನೀಡುತ್ತದೆ.' },
        },
        {
          n: 7,
          text: 'கீசுகீசு என்று எங்கும் ஆனைச்சாத்தன் கலந்து\nபேசின பேச்சரவம் கேட்டிலையோ பேய்ப்பெண்ணே\nகாசும் பிறப்பும் கலகலப்பக் கைபேர்த்து\nவாச நறுங்குழல் ஆய்ச்சியர் மத்தினால்\nஓசைப்படுத்தத் தயிரரவம் கேட்டிலையோ\nநாயகப் பெண்பிள்ளாய் நாராயணன் மூர்த்தி\nகேசவனைப் பாடவும் நீ கேட்டே கிடத்தியோ\nதேசமுடையாய் திறவேலோர் எம்பாவாய்',
          meaning: { en: 'Everywhere the black drongo birds call "kicu, kicu" together; do you not hear their chatter, mad girl? The fragrant-haired cowherd women swing their hands so that their coin necklaces jingle and churn the curds with the churning stick; do you not hear the sound of the curd? Leader among girls! You lie there even as we sing of Kesava, the form of Narayana. Radiant one, open the door.', kn: 'ಭಾರದ್ವಾಜ ಹಕ್ಕಿಗಳು ಎಲ್ಲೆಡೆ “ಕೀಚು ಕೀಚು” ಎಂದು ಕೂಡಿ ಕೂಗುವ ಸದ್ದು ನಿನಗೆ ಕೇಳಿಸುತ್ತಿಲ್ಲವೇ, ಹುಚ್ಚು ಹುಡುಗಿ? ಪರಿಮಳದ ಕೂದಲಿನ ಗೊಲ್ಲತಿಯರು ಕೈ ಬೀಸಿ ಕಾಸಿನ ಸರಗಳು ಝಣಝಣಿಸುವಂತೆ ಕಡೆಗೋಲಿನಿಂದ ಮೊಸರು ಕಡೆಯುವ ಸದ್ದು ಕೇಳಿಸುತ್ತಿಲ್ಲವೇ? ನಾಯಕಿಯೇ! ನಾರಾಯಣಮೂರ್ತಿ ಕೇಶವನನ್ನು ಹಾಡುತ್ತಿದ್ದರೂ ನೀನು ಕೇಳುತ್ತ ಮಲಗಿರುವೆಯಾ? ತೇಜಸ್ವಿನಿಯೇ, ಬಾಗಿಲು ತೆರೆ.' },
        },
        {
          n: 8,
          text: 'கீழ்வானம் வெள்ளென்று எருமை சிறுவீடு\nமேய்வான் பரந்தனகாண் மிக்குள்ள பிள்ளைகளும்\nபோவான் போகின்றாரைப் போகாமல் காத்துன்னைக்\nகூவுவான் வந்துநின்றோம் கோதுகலமுடைய\nபாவாய் எழுந்திராய் பாடிப் பறைகொண்டு\nமாவாய் பிளந்தானை மல்லரை மாட்டிய\nதேவாதிதேவனைச் சென்றுநாம் சேவித்தால்\nஆவாவென்று ஆராய்ந்து அருளேலோர் எம்பாவாய்',
          meaning: { en: 'The eastern sky is turning white; the buffaloes have spread out to graze in the small pasture, and the other girls who were on their way we have held back and come to call you. Lively girl, get up, sing and take the parai. If we go and serve the God of gods who tore open the horse demon\'s mouth and destroyed the wrestlers, He will say "Ah!", look into our need, and show us grace.', kn: 'ಪೂರ್ವದ ಆಕಾಶ ಬೆಳ್ಳಗಾಗಿದೆ; ಎಮ್ಮೆಗಳು ಚಿಕ್ಕ ಹುಲ್ಲುಗಾವಲಲ್ಲಿ ಮೇಯಲು ಹರಡಿವೆ; ಹೊರಟು ಹೋಗುತ್ತಿದ್ದ ಉಳಿದ ಹುಡುಗಿಯರನ್ನು ತಡೆದು ನಿನ್ನನ್ನು ಕರೆಯಲು ಬಂದು ನಿಂತಿದ್ದೇವೆ. ಉತ್ಸಾಹಿಯೇ, ಎದ್ದೇಳು; ಹಾಡಿ ಪರೈ ಪಡೆಯೋಣ. ಕುದುರೆ ರಕ್ಕಸನ ಬಾಯಿ ಸೀಳಿ, ಮಲ್ಲರನ್ನು ಸಂಹರಿಸಿದ ದೇವಾದಿದೇವನನ್ನು ಹೋಗಿ ಸೇವಿಸಿದರೆ, ಅವನು “ಅಯ್ಯೋ” ಎಂದು ನಮ್ಮ ಅಗತ್ಯವನ್ನು ವಿಚಾರಿಸಿ ಕೃಪೆ ಮಾಡುವನು.' },
        },
        {
          n: 9,
          text: 'தூமணி மாடத்துச் சுற்றும் விளக்கெரியத்\nதூபம் கமழத் துயிலணைமேல் கண்வளரும்\nமாமான் மகளே மணிக்கதவம் தாள்திறவாய்\nமாமீர் அவளை எழுப்பீரோ உன் மகள்தான்\nஊமையோ அன்றிச் செவிடோ அனந்தலோ\nஏமப் பெருந்துயில் மந்திரப்பட்டாளோ\nமாமாயன் மாதவன் வைகுந்தன் என்றென்று\nநாமம் பலவும் நவின்றேலோர் எம்பாவாய்',
          meaning: { en: 'Daughter of my uncle, sleeping on a soft bed in a mansion of pure gems, with lamps burning all around and incense rising: open the bolt of your jewelled door. Aunt, will you not wake her? Is your daughter dumb, deaf, or only drowsy? Has she been guarded into deep sleep, or put under a spell? Let us utter His many names: "Mamayan", "Madhava", "Vaikunthan".', kn: 'ಶುದ್ಧ ರತ್ನಗಳ ಮಾಳಿಗೆಯಲ್ಲಿ ಸುತ್ತಲೂ ದೀಪ ಉರಿಯುತ್ತಿರಲು, ಧೂಪ ಪರಿಮಳಿಸುತ್ತಿರಲು ಹಾಸಿಗೆಯ ಮೇಲೆ ಮಲಗಿರುವ ಸೋದರಮಾವನ ಮಗಳೇ, ಮಣಿಬಾಗಿಲ ಅಗುಳಿ ತೆರೆ. ಅತ್ತೆಯೇ, ಅವಳನ್ನು ಎಬ್ಬಿಸಬಾರದೇ? ನಿಮ್ಮ ಮಗಳು ಮೂಕಿಯೋ, ಕಿವುಡಿಯೋ, ಮೈಮರೆತವಳೋ? ಗಾಢನಿದ್ರೆಯನ್ನು ಕಾವಲು ಕಾಯಲಾಗಿದೆಯೋ, ಮಂತ್ರಕ್ಕೆ ಒಳಗಾಗಿದ್ದಾಳೋ? “ಮಾಮಾಯನ್, ಮಾಧವ, ವೈಕುಂಠ” ಎಂದು ಅವನ ಹೆಸರುಗಳನ್ನು ಹಲವು ಹೇಳೋಣ.' },
        },
        {
          n: 10,
          text: 'நோற்றுச் சுவர்க்கம் புகுகின்ற அம்மனாய்\nமாற்றமும் தாராரோ வாசல் திறவாதார்\nநாற்றத் துழாய்முடி நாராயணன் நம்மால்\nபோற்றப் பறைதரும் புண்ணியனால் பண்டொருநாள்\nகூற்றத்தின் வாய்வீழ்ந்த கும்பகரணனும்\nதோற்றும் உனக்கே பெருந்துயில்தான் தந்தானோ\nஆற்ற அனந்தல் உடையாய் அருங்கலமே\nதேற்றமாய் வந்து திறவேலோர் எம்பாவாய்',
          meaning: { en: 'Lady who will enter heaven by her vow! Will those who do not open the door not even answer us? Narayana, with the fragrant tulasi on his head, is the blessed One who gives the parai to those who praise him. Long ago Kumbhakarna fell into the mouth of death; did he lose to you and hand you his great sleep? You who sleep so deeply, precious jewel, come clearly and open the door.', kn: 'ವ್ರತದಿಂದ ಸ್ವರ್ಗ ಪ್ರವೇಶಿಸುವ ಅಮ್ಮಾ! ಬಾಗಿಲು ತೆರೆಯದವರು ಒಂದು ಉತ್ತರವನ್ನೂ ಕೊಡರೇ? ಪರಿಮಳದ ತುಳಸಿ ಮುಡಿದ ನಾರಾಯಣ, ನಾವು ಸ್ತುತಿಸಿದರೆ ಪರೈ ಕೊಡುವ ಪುಣ್ಯಮೂರ್ತಿ. ಹಿಂದೊಮ್ಮೆ ಯಮನ ಬಾಯಿಗೆ ಬಿದ್ದ ಕುಂಭಕರ್ಣನು ತನ್ನ ಮಹಾನಿದ್ರೆಯನ್ನು ನಿನಗೇ ಕೊಟ್ಟು ಸೋತನೋ? ಇಷ್ಟು ಗಾಢ ನಿದ್ರೆಯವಳೇ, ಅಮೂಲ್ಯ ರತ್ನವೇ, ಸ್ಪಷ್ಟವಾಗಿ ಬಂದು ಬಾಗಿಲು ತೆರೆ.' },
        },
        {
          n: 11,
          text: 'கற்றுக் கறவைக் கணங்கள் பலகறந்து\nசெற்றார் திறலழியச் சென்று செருச்செய்யும்\nகுற்றம் ஒன்றில்லாத கோவலர்தம் பொற்கொடியே\nபுற்றரவல்குல் புனமயிலே போதராய்\nசுற்றத்துத் தோழிமார் எல்லாரும் வந்துநின்\nமுற்றம் புகுந்து முகில்வண்ணன் பேர்பாட\nசிற்றாதே பேசாதே செல்வப் பெண்டாட்டி நீ\nஎற்றுக்கு உறங்கும் பொருளேலோர் எம்பாவாய்',
          meaning: { en: 'Golden creeper of the faultless cowherds, who milk many herds of cows with their calves and go to fight and destroy the strength of their enemies; peahen of the meadow with a waist like the snake\'s hole: come out. All your relatives and friends have entered your courtyard and sing the name of the cloud-coloured One, yet you do not stir or speak. Rich lady, what is the point of your sleeping?', kn: 'ಕರುಗಳೊಂದಿಗೆ ಹಲವು ಹಸುಗಳ ಹಿಂಡುಗಳನ್ನು ಕರೆದು, ಶತ್ರುಗಳ ಬಲ ನಾಶವಾಗುವಂತೆ ಹೋಗಿ ಯುದ್ಧ ಮಾಡುವ ದೋಷವಿಲ್ಲದ ಗೊಲ್ಲರ ಚಿನ್ನದ ಬಳ್ಳಿಯೇ, ಹುತ್ತದ ಹಾವಿನ ಹೆಡೆಯಂತೆ ನಡುವುಳ್ಳ ಕಾಡುನವಿಲೇ, ಹೊರಬಾ. ನಿನ್ನ ಬಂಧುಗಳೂ ಗೆಳತಿಯರೂ ಎಲ್ಲರೂ ನಿನ್ನ ಅಂಗಳ ಪ್ರವೇಶಿಸಿ ಮೇಘವರ್ಣನ ಹೆಸರನ್ನು ಹಾಡುತ್ತಿರುವಾಗ ನೀನು ಅಲುಗದೆ ಮಾತಾಡದೆ ಇರುವೆ; ಸಿರಿವಂತ ಹೆಣ್ಣೇ, ಏಕೆ ಮಲಗಿರುವೆ?' },
        },
        {
          n: 12,
          text: 'கனைத்திளங் கற்றெருமை கன்றுக்கு இரங்கி\nநினைத்து முலைவழியே நின்று பால்சோர\nநனைத்தில்லம் சேறாக்கும் நற்செல்வன் தங்காய்\nபனித்தலை வீழ நின் வாசற்கடை பற்றிச்\nசினத்தினால் தென்னிலங்கைக் கோமானைச் செற்ற\nமனத்துக்கு இனியானைப் பாடவும் நீ வாய்திறவாய்\nஇனித்தான் எழுந்திராய் ஈதென்ன பேருறக்கம்\nஅனைத்தில்லத்தாரும் அறிந்தேலோர் எம்பாவாய்',
          meaning: { en: 'Younger sister of the good and wealthy man whose young buffalo cows low, pity their calves and let the milk flow from their udders, wetting the house into mud: dew is falling on our heads as we hold your gate, and we sing of the One dear to the heart who in anger destroyed the lord of southern Lanka, yet you will not open your mouth. Get up now. What is this great sleep? The whole household knows.', kn: 'ಕರುಗಳ ಮೇಲೆ ಮರುಗಿ ಕೂಗುವ ಎಳೆ ಎಮ್ಮೆಗಳ ಕೆಚ್ಚಲಿನಿಂದ ಹಾಲು ಸುರಿದು ಮನೆಯ ಅಂಗಳವನ್ನೇ ಕೆಸರು ಮಾಡುವ ಸಿರಿವಂತನ ತಂಗಿಯೇ, ಇಬ್ಬನಿ ನಮ್ಮ ತಲೆಯ ಮೇಲೆ ಬೀಳುತ್ತಿರಲು ನಿನ್ನ ಬಾಗಿಲು ಹಿಡಿದು ನಿಂತು, ಕೋಪದಿಂದ ದಕ್ಷಿಣ ಲಂಕೆಯ ರಾಜನನ್ನು ಸಂಹರಿಸಿದ ಮನಕ್ಕೆ ಪ್ರಿಯನನ್ನು ಹಾಡುತ್ತಿದ್ದರೂ ನೀನು ಬಾಯಿ ತೆರೆಯುವುದಿಲ್ಲ. ಈಗಲಾದರೂ ಎದ್ದೇಳು; ಇದೇನು ಇಷ್ಟು ನಿದ್ರೆ? ಮನೆಯವರೆಲ್ಲರಿಗೂ ತಿಳಿದಿದೆ.' },
        },
        {
          n: 13,
          text: 'புள்ளின்வாய் கீண்டானைப் பொல்லா அரக்கனைக்\nகிள்ளிக் களைந்தானைக் கீர்த்திமை பாடிப்போய்ப்\nபிள்ளைகள் எல்லாரும் பாவைக்களம் புக்கார்\nவெள்ளி எழுந்து வியாழம் உறங்கிற்று\nபுள்ளும் சிலம்பினகாண் போதரிக் கண்ணினாய்\nகுள்ளக் குளிரக் குடைந்து நீராடாதே\nபள்ளிக் கிடத்தியோ பாவாய் நீ நன்னாளால்\nகள்ளம் தவிர்ந்து கலந்தேலோர் எம்பாவாய்',
          meaning: { en: 'All the girls have gone singing the glory of the One who split the mouth of the bird demon and plucked off the wicked Ravana\'s heads, and have entered the place of the vow. Venus has risen and Jupiter has gone to sleep; the birds are calling. Girl with eyes like a doe\'s, will you lie in bed instead of plunging into the cold water to bathe? On this good day give up your deceit and join us.', kn: 'ಹಕ್ಕಿರೂಪದ ರಕ್ಕಸನ ಬಾಯಿ ಸೀಳಿ, ದುಷ್ಟ ರಾವಣನನ್ನು ಚಿವುಟಿ ಎಸೆದವನ ಕೀರ್ತಿಯನ್ನು ಹಾಡುತ್ತ ಹುಡುಗಿಯರೆಲ್ಲರೂ ವ್ರತದ ಸ್ಥಳಕ್ಕೆ ಹೋಗಿದ್ದಾರೆ. ಶುಕ್ರ ಉದಯಿಸಿದ, ಗುರು ಮುಳುಗಿದ; ಹಕ್ಕಿಗಳು ಕೂಗುತ್ತಿವೆ. ಜಿಂಕೆಗಣ್ಣಿನವಳೇ, ತಣ್ಣೀರಲ್ಲಿ ಮುಳುಗಿ ಸ್ನಾನ ಮಾಡದೆ ಹಾಸಿಗೆಯಲ್ಲೇ ಮಲಗುವೆಯಾ? ಈ ಶುಭದಿನ ಕಪಟ ಬಿಟ್ಟು ನಮ್ಮೊಂದಿಗೆ ಸೇರು.' },
        },
        {
          n: 14,
          text: 'உங்கள் புழைக்கடைத் தோட்டத்து வாவியுள்\nசெங்கழுநீர் வாய்நெகிழ்ந்து ஆம்பல்வாய் கூம்பினகாண்\nசெங்கற்பொடிக் கூறை வெண்பல் தவத்தவர்\nதங்கள் திருக்கோயில் சங்கிடுவான் போதந்தார்\nஎங்களை முன்னம் எழுப்புவான் வாய்பேசும்\nநங்காய் எழுந்திராய் நாணாதாய் நாவுடையாய்\nசங்கொடு சக்கரம் ஏந்தும் தடக்கையன்\nபங்கயக் கண்ணானைப் பாடேலோர் எம்பாவாய்',
          meaning: { en: 'In the pond in your back garden the red lilies have opened and the white lilies have closed. The ascetics with red-ochre robes and white teeth are coming to blow the conch at their temple. You who promised to wake us first and talk big, have you no shame? Fine girl with a ready tongue, get up and sing of the lotus-eyed One, whose long hands hold conch and discus.', kn: 'ನಿಮ್ಮ ಹಿತ್ತಲ ತೋಟದ ಕೊಳದಲ್ಲಿ ಕೆಂಪು ನೈದಿಲೆ ಅರಳಿ ಬಿಳಿ ನೈದಿಲೆ ಮುಚ್ಚಿದೆ. ಕಾವಿ ವಸ್ತ್ರದ, ಬಿಳಿ ಹಲ್ಲಿನ ತಪಸ್ವಿಗಳು ತಮ್ಮ ದೇವಾಲಯದಲ್ಲಿ ಶಂಖ ಊದಲು ಬರುತ್ತಿದ್ದಾರೆ. ನಮ್ಮನ್ನು ಮೊದಲು ಎಬ್ಬಿಸುವೆನೆಂದು ಬಡಾಯಿ ಕೊಚ್ಚಿದ ನಿನಗೆ ನಾಚಿಕೆ ಇಲ್ಲವೇ? ಮಾತಿನ ಜಾಣೆಯೇ, ಎದ್ದೇಳು; ಶಂಖ-ಚಕ್ರ ಹಿಡಿದ ದೊಡ್ಡ ಕೈಗಳ ಕಮಲನೇತ್ರನನ್ನು ಹಾಡು.' },
        },
        {
          n: 15,
          text: 'எல்லே இளங்கிளியே இன்னம் உறங்குதியோ\nசில்லென்று அழையேன்மின் நங்கைமீர் போதருகின்றேன்\nவல்லை உன் கட்டுரைகள் பண்டேஉன் வாயறிதும்\nவல்லீர்கள் நீங்களே நானேதான் ஆயிடுக\nஒல்லைநீ போதாய் உனக்கென்ன வேறுடையை\nஎல்லாரும் போந்தாரோ போந்தார் போந்தெண்ணிக்கொள்\nவல்லானை கொன்றானை மாற்றாரை மாற்றழிக்க\nவல்லானை மாயனைப் பாடேலோர் எம்பாவாய்',
          meaning: { en: '"Friend, young parrot, are you still asleep?" "Do not call me with such sharp cries, girls; I am coming." "You are clever with words; we have known your talk for ages." "No, you are the clever ones; let it be me, then." "Come quickly. What is special about you?" "Have all come?" "They have come; come and count them yourself." Let us sing of the wonderful One who killed the mighty elephant and can destroy his enemies.', kn: '“ಅಯ್ಯೋ ಎಳೆಗಿಣಿಯೇ, ಇನ್ನೂ ಮಲಗಿರುವೆಯಾ?” “ಹುಡುಗಿಯರೇ, ಹೀಗೆ ಚುಚ್ಚಿ ಕೂಗಿ ಕರೆಯಬೇಡಿ; ಬರುತ್ತಿದ್ದೇನೆ.” “ನಿನ್ನ ಮಾತಿನ ಜಾಣ್ಮೆ ಮೊದಲಿನಿಂದಲೂ ನಮಗೆ ಗೊತ್ತು.” “ಜಾಣರು ನೀವೇ; ನಾನೇ ಆಗಲಿ.” “ಬೇಗ ಬಾ; ನಿನಗೆ ವಿಶೇಷವೇನು?” “ಎಲ್ಲರೂ ಬಂದರೇ?” “ಬಂದಿದ್ದಾರೆ; ಬಂದು ಎಣಿಸಿಕೋ.” ಬಲಿಷ್ಠ ಆನೆಯನ್ನು ಕೊಂದವನನ್ನು, ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡಬಲ್ಲ ಮಾಯಾವಿಯನ್ನು ಹಾಡೋಣ.' },
        },
      ],
    },
    {
      title: 'நந்தகோபன் மாளிகையில்',
      titleEn: 'At Nandagopa\'s house (16-22)',
      note: 'The girls reach the palace of Nandagopa, ask the gatekeepers to open and wake the household.',
      noteKn: 'ಹುಡುಗಿಯರು ನಂದಗೋಪನ ಅರಮನೆ ತಲುಪಿ, ದ್ವಾರಪಾಲಕರಿಂದ ಬಾಗಿಲು ತೆರೆಸಿ ಮನೆಯವರನ್ನು ಎಬ್ಬಿಸುತ್ತಾರೆ.',
      verses: [
        {
          n: 16,
          text: 'நாயகனாய் நின்ற நந்தகோபனுடைய\nகோயில் காப்பானே கொடித்தோன்றும் தோரண\nவாயில் காப்பானே மணிக்கதவம் தாள்திறவாய்\nஆயர் சிறுமியரோமுக்கு அறைபறை\nமாயன் மணிவண்ணன் நென்னலே வாய்நேர்ந்தான்\nதூயோமாய் வந்தோம் துயிலெழப் பாடுவான்\nவாயால் முன்னமுன்னம் மாற்றாதே அம்மா நீ\nநேய நிலைக்கதவம் நீக்கேலோர் எம்பாவாய்',
          meaning: { en: 'Guard of the palace of Nandagopa, our chief; keeper of the gate with its banner and arch: open the bolt of the jewelled door. We are cowherd girls, and the wonderful One, the colour of sapphire, promised us the sounding parai yesterday. We have come pure to sing and wake Him. Do not refuse us with your mouth first, good sir; slide back the loving fastened door.', kn: 'ನಮ್ಮ ನಾಯಕನಾದ ನಂದಗೋಪನ ಅರಮನೆಯ ಕಾವಲುಗಾರನೇ, ಧ್ವಜ-ತೋರಣಗಳ ಬಾಗಿಲು ಕಾಯುವವನೇ, ಮಣಿಬಾಗಿಲ ಅಗುಳಿಯನ್ನು ತೆರೆ. ನಾವು ಗೊಲ್ಲರ ಬಾಲೆಯರು; ನೀಲಮಣಿವರ್ಣನಾದ ಮಾಯಾವಿ ನಿನ್ನೆಯೇ ನಮಗೆ ಧ್ವನಿಸುವ ಪರೈ ಕೊಡುವೆನೆಂದು ಮಾತು ಕೊಟ್ಟಿದ್ದಾನೆ. ಶುದ್ಧರಾಗಿ ಬಂದಿದ್ದೇವೆ, ಅವನನ್ನು ಹಾಡಿ ಎಬ್ಬಿಸಲು. ಮೊದಲೇ ಬಾಯಿಂದ ಬೇಡವೆನ್ನಬೇಡ; ಪ್ರೀತಿಯಿಂದ ಅಗುಳಿ ತೆಗೆದು ಬಾಗಿಲು ತೆರೆ.' },
        },
        {
          n: 17,
          text: 'அம்பரமே தண்ணீரே சோறே அறஞ்செய்யும்\nஎம்பெருமான் நந்தகோபாலா எழுந்திராய்\nகொம்பனார்க்கெல்லாம் கொழுந்தே குலவிளக்கே\nஎம்பெருமாட்டி யசோதாய் அறிவுறாய்\nஅம்பரம் ஊடறுத்து ஓங்கி உலகளந்த\nஉம்பர் கோமானே உறங்காது எழுந்திராய்\nசெம்பொற் கழலடிச் செல்வா பலதேவா\nஉம்பியும் நீயும் உறங்கேலோர் எம்பாவாய்',
          meaning: { en: 'Our Lord Nandagopala, who gives clothes, water and food in charity, wake up. Tender shoot among all slender women, lamp of the family, our lady Yashoda, wake up. Lord of the gods, who rose and pierced the sky and measured the worlds, do not sleep: get up. Wealthy Balarama of the golden anklets, you and your younger brother must not sleep any more.', kn: 'ವಸ್ತ್ರ, ನೀರು, ಅನ್ನವನ್ನು ದಾನ ಮಾಡುವ ನಮ್ಮ ಒಡೆಯ ನಂದಗೋಪಾಲನೇ, ಎದ್ದೇಳು. ಎಲ್ಲ ಸುಂದರಿಯರಲ್ಲಿ ಚಿಗುರಾದವಳೇ, ಕುಲದ ದೀಪವೇ, ನಮ್ಮ ಒಡತಿ ಯಶೋದೆಯೇ, ಎಚ್ಚರಗೊಳ್ಳು. ಆಕಾಶವನ್ನು ಸೀಳಿ ಬೆಳೆದು ಲೋಕ ಅಳೆದ ದೇವಾಧಿಪನೇ, ನಿದ್ರಿಸದೆ ಎದ್ದೇಳು. ಚಿನ್ನದ ಕಾಲ್ಗಡಗದ ಸಿರಿವಂತ ಬಲದೇವನೇ, ನೀನೂ ನಿನ್ನ ತಮ್ಮನೂ ಇನ್ನು ಮಲಗಬೇಡಿ.' },
        },
        {
          n: 18,
          text: 'உந்துமதகளிற்றன் ஓடாத தோள்வலியன்\nநந்தகோபாலன் மருமகளே நப்பின்னாய்\nகந்தம் கமழும் குழலீ கடைதிறவாய்\nவந்தெங்கும் கோழி அழைத்தனகாண் மாதவிப்\nபந்தல்மேல் பல்கால் குயிலினங்கள் கூவினகாண்\nபந்தார் விரலி உன் மைத்துனன் பேர்பாடச்\nசெந்தாமரைக் கையால் சீரார் வளையொலிப்ப\nவந்து திறவாய் மகிழ்ந்தேலோர் எம்பாவாய்',
          meaning: { en: 'Daughter-in-law of Nandagopala, who has the strength of a rutting elephant that never turns back: Nappinnai, fragrant-haired lady, open the gate. The cocks are crying everywhere; the cuckoos sing again and again on the madhavi arbour. You with fingers holding a ball, come to sing the name of your cousin-husband, with your red lotus hand so that your bangles ring; come and open the door, with joy.', kn: 'ಮದ್ದಾನೆಯಂತೆ ಹಿಂದೆ ಸರಿಯದ ತೋಳ್ಬಲದ ನಂದಗೋಪಾಲನ ಸೊಸೆಯೇ, ನಪ್ಪಿನ್ನೈಯೇ, ಸುಗಂಧ ಕೂದಲಿನವಳೇ, ಬಾಗಿಲು ತೆರೆ. ಎಲ್ಲೆಡೆ ಕೋಳಿಗಳು ಕೂಗುತ್ತಿವೆ; ಮಾಧವಿ ಚಪ್ಪರದ ಮೇಲೆ ಕೋಗಿಲೆಗಳು ಮತ್ತೆ ಮತ್ತೆ ಕೂಗುತ್ತಿವೆ. ಚೆಂಡು ಹಿಡಿದ ಬೆರಳಿನವಳೇ, ನಿನ್ನ ಅತ್ತೆಮಗನ ಹೆಸರನ್ನು ಹಾಡಲು, ಕೆಂದಾವರೆಯಂಥ ಕೈಯಿಂದ ಬಳೆಗಳು ಸದ್ದಾಗುವಂತೆ ಬಂದು ಬಾಗಿಲು ತೆರೆ, ಸಂತೋಷದಿಂದ.' },
        },
        {
          n: 19,
          text: 'குத்துவிளக்கெரியக் கோட்டுக்கால் கட்டில்மேல்\nமெத்தென்ற பஞ்சசயனத்தின் மேலேறிக்\nகொத்தலர் பூங்குழல் நப்பின்னை கொங்கைமேல்\nவைத்துக்கிடந்த மலர்மார்பா வாய்திறவாய்\nமைத்தடங்கண்ணினாய் நீ உன் மணாளனை\nஎத்தனைபோதும் துயிலெழ ஒட்டாய்காண்\nஎத்தனையேலும் பிரிவாற்ற கில்லாயால்\nதத்துவம் அன்று தகவேலோர் எம்பாவாய்',
          meaning: { en: 'Lord with a flowery chest, who lie on a soft five-layered bed on a cot with ivory legs, with a standing lamp burning, resting your chest on the bosom of Nappinnai whose hair is crowned with clusters of flowers: speak to us. Lady with large eyes darkened with kohl, you will not let your husband wake even for a moment, and cannot bear to be parted from Him for a moment. That is not right, nor is it kind.', kn: 'ಕುತ್ತುದೀಪ ಉರಿಯುತ್ತಿರಲು, ದಂತದ ಕಾಲಿನ ಮಂಚದ ಮೇಲೆ ಮೃದುವಾದ ಪಂಚಶಯನ ಹಾಸಿಗೆಯನ್ನೇರಿ, ಗೊಂಚಲು ಹೂ ಮುಡಿದ ನಪ್ಪಿನ್ನೈಯ ಎದೆಯ ಮೇಲೆ ಮಲಗಿರುವ ಹೂವಿನ ಎದೆಯವನೇ, ಮಾತಾಡು. ಕಾಡಿಗೆ ಹಚ್ಚಿದ ವಿಶಾಲ ಕಣ್ಣಿನವಳೇ, ನಿನ್ನ ಪತಿಯನ್ನು ಒಂದು ಕ್ಷಣವೂ ಎದ್ದೇಳಲು ಬಿಡುವುದಿಲ್ಲ, ಒಂದು ಕ್ಷಣವೂ ಅಗಲಿರಲಾರೆ. ಅದು ಧರ್ಮವಲ್ಲ, ಕರುಣೆಯೂ ಅಲ್ಲ.' },
        },
        {
          n: 20,
          text: 'முப்பத்து மூவர் அமரர்க்கு முன்சென்று\nகப்பம் தவிர்க்கும் கலியே துயிலெழாய்\nசெப்பம் உடையாய் திறலுடையாய் செற்றார்க்கு\nவெப்பம் கொடுக்கும் விமலா துயிலெழாய்\nசெப்பன்ன மென்முலைச் செவ்வாய்ச் சிறுமருங்குல்\nநப்பின்னை நங்காய் திருவே துயிலெழாய்\nஉக்கமும் தட்டொளியும் தந்து உன் மணாளனை\nஇப்போதே எம்மை நீராட்டேலோர் எம்பாவாய்',
          meaning: { en: 'Strong One, who goes ahead of the thirty-three crore gods and removes their trembling, wake up. Upright and mighty Pure One, who burn the enemies, wake up. Nappinnai, with soft breasts like caskets, red lips and slender waist, Lakshmi herself, wake up. Give us the fan and the mirror, and let your husband bathe us now.', kn: 'ಮುವತ್ತಮೂರು ಕೋಟಿ ದೇವತೆಗಳ ಮುಂದೆ ಹೋಗಿ ಅವರ ನಡುಕವನ್ನು ನೀಗಿಸುವ ಶೂರನೇ, ಎದ್ದೇಳು. ನೇರ ನಡೆಯ, ಪರಾಕ್ರಮಿಯೇ, ಶತ್ರುಗಳಿಗೆ ತಾಪ ನೀಡುವ ನಿರ್ಮಲನೇ, ಎದ್ದೇಳು. ಭರಣಿಯಂತೆ ಮೃದು ಮೊಲೆಗಳ, ಕೆಂಬಾಯಿಯ, ತೆಳು ನಡುವಿನ ನಪ್ಪಿನ್ನೈ ಲಕ್ಷ್ಮಿಯೇ, ಎದ್ದೇಳು. ಬೀಸಣಿಗೆ ಮತ್ತು ಕನ್ನಡಿ ಕೊಟ್ಟು, ನಿನ್ನ ಪತಿಯಿಂದ ಈಗಲೇ ನಮಗೆ ಸ್ನಾನ ಮಾಡಿಸು.' },
        },
        {
          n: 21,
          text: 'ஏற்ற கலங்கள் எதிர்பொங்கி மீதளிப்ப\nமாற்றாதே பால்சொரியும் வள்ளல் பெரும்பசுக்கள்\nஆற்றப் படைத்தான் மகனே அறிவுறாய்\nஊற்றம் உடையாய் பெரியாய் உலகினில்\nதோற்றமாய் நின்ற சுடரே துயிலெழாய்\nமாற்றார் உனக்கு வலிதொலைந்து உன் வாசற்கண்\nஆற்றாது வந்து உன் அடிபணியுமாபோலே\nபோற்றியாம் வந்தோம் புகழ்ந்தேலோர் எம்பாவாய்',
          meaning: { en: 'You, son of him who has so much, whose generous great cows pour out their milk without stopping until the pots held to them overflow: wake up. Steadfast and great One, light that appeared in the world, wake up. As enemies who have lost their strength come helpless to your door and fall at your feet, so we have come praising you.', kn: 'ಹಿಡಿದ ಪಾತ್ರೆಗಳು ಉಕ್ಕಿ ಹರಿಯುವಂತೆ ಎಡೆಬಿಡದೆ ಹಾಲು ಸುರಿಸುವ ಉದಾರ ಹಸುಗಳನ್ನು ಬಹಳ ಹೊಂದಿದವನ ಮಗನೇ, ಎಚ್ಚರಗೊಳ್ಳು. ದೃಢನೇ, ಮಹಾನ್ ಪುರುಷನೇ, ಲೋಕದಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡ ಜ್ಯೋತಿಯೇ, ಎದ್ದೇಳು. ಬಲ ಕಳೆದುಕೊಂಡ ಶತ್ರುಗಳು ನಿನ್ನ ಬಾಗಿಲಿಗೆ ಬಂದು ನಿನ್ನ ಪಾದಕ್ಕೆ ಬೀಳುವಂತೆ, ನಾವೂ ಸ್ತುತಿಸುತ್ತ ಬಂದಿದ್ದೇವೆ.' },
        },
        {
          n: 22,
          text: 'அங்கண் மாஞாலத்து அரசர் அபிமான\nபங்கமாய் வந்துநின் பள்ளிக்கட்டிற் கீழே\nசங்கம் இருப்பார்போல் வந்து தலைப்பெய்தோம்\nகிங்கிணி வாய்ச்செய்த தாமரைப்பூப் போலே\nசெங்கண் சிறுச்சிறிதே எம்மேல் விழியாவோ\nதிங்களும் ஆதித்தியனும் எழுந்தாற்போல்\nஅங்கண் இரண்டுங்கொண்டு எங்கள்மேல் நோக்குதியேல்\nஎங்கள்மேல் சாபம் இழிந்தேலோர் எம்பாவாய்',
          meaning: { en: 'Kings of this wide earth whose pride was broken have come and sit in crowds under your couch; we too have come and gathered. Will your red eyes, like the opening of a lotus-shaped bell, not open a little over us? If you look at us with both your lovely eyes, as if the moon and the sun had risen together, our curse will go away.', kn: 'ಈ ವಿಶಾಲ ಭೂಮಿಯ ಅರಸರು ಅಭಿಮಾನ ಭಂಗವಾಗಿ ಬಂದು ನಿನ್ನ ಮಂಚದ ಕೆಳಗೆ ಗುಂಪಾಗಿ ಕುಳಿತಿರುವಂತೆ ನಾವೂ ಬಂದು ಸೇರಿದ್ದೇವೆ. ಕಿಂಕಿಣಿಯ ಬಾಯಿಯಂತೆ ಅರಳಿದ ತಾವರೆಯಂತಿರುವ ನಿನ್ನ ಕೆಂಗಣ್ಣುಗಳು ನಮ್ಮ ಮೇಲೆ ಸ್ವಲ್ಪವಾದರೂ ತೆರೆಯವೇ? ಚಂದ್ರ ಸೂರ್ಯರು ಒಟ್ಟಿಗೆ ಉದಯಿಸಿದಂತೆ ಆ ಎರಡೂ ಕಣ್ಣುಗಳಿಂದ ನಮ್ಮನ್ನು ನೋಡಿದರೆ ನಮ್ಮ ಶಾಪ ಇಳಿಯುವುದು.' },
        },
      ],
    },
    {
      title: 'பறை வேண்டுதலும் பலனும்',
      titleEn: 'Asking for the parai and its fruit (23-30)',
      note: 'Krishna rises, the girls praise Him and state what they ask; the closing verse gives the fruit of reciting the thirty.',
      noteKn: 'ಕೃಷ್ಣ ಎದ್ದು ಬರುತ್ತಾನೆ; ಹುಡುಗಿಯರು ಅವನನ್ನು ಸ್ತುತಿಸಿ ತಮ್ಮ ಬೇಡಿಕೆಯನ್ನು ಹೇಳುತ್ತಾರೆ; ಕೊನೆಯ ಪಾಸುರ ಮೂವತ್ತು ಪದ್ಯಗಳನ್ನು ಪಠಿಸಿದ ಫಲವನ್ನು ಹೇಳುತ್ತದೆ.',
      verses: [
        {
          n: 23,
          text: 'மாரிமலை முழைஞ்சில் மன்னிக் கிடந்துறங்கும்\nசீரிய சிங்கம் அறிவுற்றுத் தீவிழித்து\nவேரிமயிர் பொங்க எப்பாடும் பேர்ந்துதறி\nமூரி நிமிர்ந்து முழங்கிப் புறப்பட்டுப்\nபோதருமா போலே நீ பூவைப்பூவண்ணா உன்\nகோயில்நின்று இங்ஙனே போந்தருளிக் கோப்புடைய\nசீரிய சிங்காசனத்திருந்து யாம்வந்த\nகாரியம் ஆராய்ந்து அருளேலோர் எம்பாவாய்',
          meaning: { en: 'Like a noble lion that has slept in its cave in the rainy season, wakes, opens fiery eyes, shakes its fragrant mane on all sides, stretches, roars and comes out, come out, O One of the colour of the kaya flower, from your temple and come here. Sit on the fine throne in your court, look into the matter for which we have come, and grant it.', kn: 'ಮಳೆಗಾಲದಲ್ಲಿ ಗುಹೆಯಲ್ಲಿ ಮಲಗಿದ ಶ್ರೇಷ್ಠ ಸಿಂಹ ಎಚ್ಚರಗೊಂಡು, ಬೆಂಕಿಯಂತೆ ಕಣ್ಣು ತೆರೆದು, ಪರಿಮಳದ ಕೇಸರ ನಿಮಿರಿ ಎಲ್ಲ ಕಡೆ ಕೊಡವಿ, ಮೈ ಮುರಿದು ಗರ್ಜಿಸುತ್ತ ಹೊರಬರುವಂತೆ, ಕಾಯಾಂಬೂ ಹೂವಿನ ಬಣ್ಣದವನೇ, ನೀನು ನಿನ್ನ ಮಂದಿರದಿಂದ ಇಲ್ಲಿಗೆ ಬಂದು, ಶ್ರೇಷ್ಠ ಸಿಂಹಾಸನದಲ್ಲಿ ಕುಳಿತು, ನಾವು ಬಂದ ಕಾರ್ಯವನ್ನು ವಿಚಾರಿಸಿ ಅನುಗ್ರಹಿಸು.' },
        },
        {
          n: 24,
          text: 'அன்று இவ்வுலகம் அளந்தாய் அடிபோற்றி\nசென்றங்குத் தென்னிலங்கை செற்றாய் திறல்போற்றி\nபொன்றச் சகடம் உதைத்தாய் புகழ்போற்றி\nகன்று குணிலா எறிந்தாய் கழல்போற்றி\nகுன்று குடையா எடுத்தாய் குணம்போற்றி\nவென்று பகைகெடுக்கும் நின்கையில் வேல்போற்றி\nஎன்றென்றுன் சேவகமே ஏத்திப் பறைகொள்வான்\nஇன்று யாம் வந்தோம் இரங்கேலோர் எம்பாவாய்',
          meaning: { en: 'Praise to the feet that measured this world then; praise to the might that went and destroyed southern Lanka; praise to the glory that kicked the cart to death; praise to the anklet that threw the calf-demon as a missile; praise to the quality that lifted the mountain as an umbrella; praise to the spear in your hand that wins and destroys foes. Praising your valour in this way, we have come today to take the parai; have mercy.', kn: 'ಅಂದು ಈ ಲೋಕವನ್ನು ಅಳೆದ ನಿನ್ನ ಪಾದಕ್ಕೆ ಜಯ; ಅಲ್ಲಿ ಹೋಗಿ ದಕ್ಷಿಣ ಲಂಕೆಯನ್ನು ನಾಶಮಾಡಿದ ನಿನ್ನ ಪರಾಕ್ರಮಕ್ಕೆ ಜಯ; ಗಾಡಿಯನ್ನು ಒದ್ದು ಸಾಯಿಸಿದ ನಿನ್ನ ಕೀರ್ತಿಗೆ ಜಯ; ಕರುರೂಪಿ ರಕ್ಕಸನನ್ನು ಎಸೆಯುವ ಕೋಲಾಗಿ ಬಳಸಿದ ನಿನ್ನ ಕಾಲ್ಗಡಗಕ್ಕೆ ಜಯ; ಗೋವರ್ಧನ ಬೆಟ್ಟವನ್ನು ಕೊಡೆಯಾಗಿ ಎತ್ತಿದ ನಿನ್ನ ಗುಣಕ್ಕೆ ಜಯ; ಗೆದ್ದು ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡುವ ನಿನ್ನ ಕೈಯ ವೇಲಿಗೆ ಜಯ. ಹೀಗೆ ನಿನ್ನ ಶೌರ್ಯವನ್ನು ಸ್ತುತಿಸಿ ಪರೈ ಪಡೆಯಲು ಇಂದು ಬಂದಿದ್ದೇವೆ; ಕರುಣಿಸು.' },
        },
        {
          n: 25,
          text: 'ஒருத்தி மகனாய்ப் பிறந்து ஓரிரவில்\nஒருத்தி மகனாய் ஒளித்து வளரத்\nதரிக்கிலானாகித் தான்தீங்கு நினைந்த\nகருத்தைப் பிழைப்பித்துக் கஞ்சன் வயிற்றில்\nநெருப்பென்ன நின்ற நெடுமாலே உன்னை\nஅருத்தித்து வந்தோம் பறைதருதி யாகில்\nதிருத்தக்க செல்வமும் சேவகமும் யாம்பாடி\nவருத்தமும் தீர்ந்து மகிழ்ந்தேலோர் எம்பாவாய்',
          meaning: { en: 'Born as one woman\'s son, you were that same night hidden and raised as another woman\'s son. Kamsa could not bear it and planned harm, but you foiled his purpose and stood like fire in his belly, O Tall One. We have come begging you: if you give us the parai, we shall sing of your splendid wealth and valour, be rid of our sorrow, and rejoice.', kn: 'ಒಬ್ಬಳ ಮಗನಾಗಿ ಹುಟ್ಟಿ ಅದೇ ರಾತ್ರಿ ಇನ್ನೊಬ್ಬಳ ಮಗನಾಗಿ ಅಡಗಿ ಬೆಳೆದವನೇ, ಸಹಿಸದೆ ಕೇಡನ್ನು ಬಯಸಿದ ಕಂಸನ ಉದ್ದೇಶವನ್ನು ಭಂಗಗೊಳಿಸಿ ಅವನ ಹೊಟ್ಟೆಯಲ್ಲಿ ಬೆಂಕಿಯಂತೆ ನಿಂತ ನೆಡುಮಾಲನೇ, ನಿನ್ನನ್ನು ಬೇಡಿ ಬಂದಿದ್ದೇವೆ. ಪರೈ ಕೊಟ್ಟರೆ ನಿನ್ನ ಶ್ರೇಷ್ಠ ಸಂಪತ್ತನ್ನೂ ಶೌರ್ಯವನ್ನೂ ಹಾಡಿ ದುಃಖ ನೀಗಿ ಸಂತೋಷಪಡುವೆವು.' },
        },
        {
          n: 26,
          text: 'மாலே மணிவண்ணா மார்கழி நீராடுவான்\nமேலையார் செய்வனகள் வேண்டுவன கேட்டியேல்\nஞாலத்தை எல்லாம் நடுங்க முரல்வன\nபாலன்ன வண்ணத்து உன் பாஞ்சசன்னியமே\nபோல்வன சங்கங்கள் போய்ப்பாடு உடையனவே\nசாலப் பெரும்பறையே பல்லாண்டு இசைப்பாரே\nகோல விளக்கே கொடியே விதானமே\nஆலினிலையாய் அருளேலோர் எம்பாவாய்',
          meaning: { en: 'Lord, sapphire-coloured One! If you ask what is needed for the elder ones\' rite of bathing in Margali, we need conches like your milk-white Panchajanya that makes the whole world tremble with its sound, a very great drum, singers to sing "Pallandu", a beautiful lamp, a banner and a canopy. O One of the banyan leaf, grant us these.', kn: 'ಮಾರ್ಗಳಿ ಸ್ನಾನಕ್ಕೆ ಹಿರಿಯರು ಮಾಡುವ ವಿಧಿಗೆ ಬೇಕಾದುದನ್ನು ನೀನು ಕೇಳಿದರೆ ಹೇಳುವೆವು: ಲೋಕವೆಲ್ಲ ನಡುಗುವಂತೆ ಮೊಳಗುವ, ಹಾಲಿನ ಬಣ್ಣದ ನಿನ್ನ ಪಾಂಚಜನ್ಯದಂಥ ಶಂಖಗಳು, ದೊಡ್ಡ ಪರೈ ವಾದ್ಯ, “ಪಲ್ಲಾಂಡು” ಹಾಡುವವರು, ಅಂದದ ದೀಪ, ಧ್ವಜ, ಮೇಲ್ಕಟ್ಟು. ಆಲದೆಲೆಯ ಮೇಲೆ ಮಲಗಿದವನೇ, ಅನುಗ್ರಹಿಸು.' },
        },
        {
          n: 27,
          text: 'கூடாரை வெல்லும் சீர்க் கோவிந்தா உன்றன்னைப்\nபாடிப் பறைகொண்டு யாம்பெறு சம்மானம்\nநாடு புகழும் பரிசினால் நன்றாகச்\nசூடகமே தோள்வளையே தோடே செவிப்பூவே\nபாடகமே என்றனைய பல்கலனும் யாமணிவோம்\nஆடை உடுப்போம் அதன்பின்னே பால்சோறு\nமூடநெய் பெய்து முழங்கைவழி வாரக்\nகூடியிருந்து குளிர்ந்தேலோர் எம்பாவாய்',
          meaning: { en: 'Govinda, whose glory conquers those who do not join him: the reward we shall receive after singing to you and taking the parai is a gift the whole land will praise. We shall wear bangles, armlets, earrings, ear flowers and anklets, and many such ornaments, and put on new clothes. Then we shall sit together and eat milk rice, covered in ghee that runs down to the elbow, and be cool with joy.', kn: 'ಒಟ್ಟಿಗೆ ಬಾರದವರನ್ನೂ ಗೆಲ್ಲುವ ಕೀರ್ತಿಯ ಗೋವಿಂದನೇ, ನಿನ್ನನ್ನು ಹಾಡಿ ಪರೈ ಪಡೆದು ನಾವು ಪಡೆಯುವ ಬಹುಮಾನ ನಾಡೆಲ್ಲ ಹೊಗಳುವಂಥದು. ಕಡಗ, ತೋಳ್ಬಳೆ, ಕಿವಿಯೋಲೆ, ಕಿವಿಹೂ, ಕಾಲ್ಗಡಗ ಮುಂತಾದ ಅನೇಕ ಒಡವೆಗಳನ್ನು ಧರಿಸುವೆವು; ಹೊಸ ಬಟ್ಟೆ ಉಡುವೆವು. ಬಳಿಕ ತುಪ್ಪ ಮುಚ್ಚುವಂತೆ ಹಾಕಿ ಮೊಳಕೈಯಿಂದ ಸುರಿಯುವ ಹಾಲನ್ನವನ್ನು ಕೂಡಿ ಕುಳಿತು ತಿಂದು ಹರ್ಷದಿಂದ ತಂಪಾಗುವೆವು.' },
        },
        {
          n: 28,
          text: 'கறவைகள் பின்சென்று கானம் சேர்ந்துண்போம்\nஅறிவொன்றும் இல்லாத ஆய்க்குலத்து உன்றன்னைப்\nபிறவி பெறுந்தனைப் புண்ணியம் யாமுடையோம்\nகுறைவொன்றும் இல்லாத கோவிந்தா உன்றன்னோடு\nஉறவேல் நமக்கு இங்கு ஒழிக்க ஒழியாது\nஅறியாத பிள்ளைகளோம் அன்பினால் உன்றன்னைச்\nசிறுபேர் அழைத்தனவும் சீறி அருளாதே\nஇறைவா நீ தாராய் பறையேலோர் எம்பாவாய்',
          meaning: { en: 'We follow the cows and go into the forest to eat there. We are of a cowherd race that knows nothing, yet we have the merit that you were born among us. Govinda, who lack nothing: the bond between you and us cannot be broken though you try to break it. We are ignorant girls, and if out of love we called you by little names, do not be angry; Lord, give us the parai.', kn: 'ದನಗಳ ಹಿಂದೆ ಹೋಗಿ ಕಾಡು ಸೇರಿ ಅಲ್ಲಿಯೇ ಉಣ್ಣುವೆವು. ಏನೂ ತಿಳಿಯದ ಗೊಲ್ಲರ ಕುಲದಲ್ಲಿ ನೀನು ಹುಟ್ಟಿದ ಪುಣ್ಯ ನಮಗಿದೆ. ಯಾವ ಕೊರತೆಯೂ ಇಲ್ಲದ ಗೋವಿಂದನೇ, ನಿನ್ನೊಂದಿಗಿನ ನಮ್ಮ ಬಾಂಧವ್ಯವನ್ನು ಕಡಿದರೂ ಕಡಿಯಲಾಗದು. ಏನೂ ಅರಿಯದ ಹುಡುಗಿಯರಾದ ನಾವು ಪ್ರೀತಿಯಿಂದ ನಿನ್ನನ್ನು ಸಣ್ಣ ಹೆಸರುಗಳಿಂದ ಕರೆದಿದ್ದರೂ ಕೋಪಿಸಬೇಡ; ಒಡೆಯನೇ, ಪರೈ ಕೊಡು.' },
        },
        {
          n: 29,
          text: 'சிற்றஞ் சிறுகாலே வந்துன்னைச் சேவித்து உன்\nபொற்றாமரை அடியே போற்றும் பொருள் கேளாய்\nபெற்றம் மேய்த்துண்ணும் குலத்திற் பிறந்து நீ\nகுற்றேவல் எங்களைக் கொள்ளாமற் போகாது\nஇற்றைப் பறைகொள்வான் அன்றுகாண் கோவிந்தா\nஎற்றைக்கும் ஏழேழ் பிறவிக்கும் உன்றன்னோடு\nஉற்றோமே யாவோம் உனக்கேநாம் ஆட்செய்வோம்\nமற்றை நங்காமங்கள் மாற்றேலோர் எம்பாவாய்',
          meaning: { en: 'Listen to why we come at the very first light of dawn to serve you and praise your golden lotus feet. Born in a race that tends cattle and lives on them, you cannot leave without accepting our service. Govinda, we have not come only to take today\'s parai. For all time, for seven times seven births, we shall be yours alone and serve only you. Change our other desires.', kn: 'ಮುಂಜಾನೆಯ ಮುಂಜಾನೆ ಬಂದು ನಿನ್ನನ್ನು ಸೇವಿಸಿ ನಿನ್ನ ಚಿನ್ನದ ತಾವರೆ ಪಾದಗಳನ್ನು ಸ್ತುತಿಸುವ ಕಾರಣವನ್ನು ಕೇಳು. ದನ ಕಾಯ್ದು ಬದುಕುವ ಕುಲದಲ್ಲಿ ಹುಟ್ಟಿದ ನೀನು ನಮ್ಮ ಸೇವೆಯನ್ನು ಸ್ವೀಕರಿಸದೆ ಹೋಗಬಾರದು. ಗೋವಿಂದ, ನಾವು ಬಂದದ್ದು ಇಂದಿನ ಪರೈ ಪಡೆಯಲು ಮಾತ್ರವಲ್ಲ. ಎಂದೆಂದಿಗೂ, ಏಳೇಳು ಜನ್ಮಗಳಿಗೂ ನಿನ್ನವರೇ ಆಗಿರುವೆವು, ನಿನಗೇ ಸೇವೆ ಮಾಡುವೆವು. ನಮ್ಮ ಇತರ ಆಸೆಗಳನ್ನು ಬದಲಿಸು.' },
        },
        {
          n: 30,
          text: 'வங்கக் கடல்கடைந்த மாதவனைக் கேசவனை\nதிங்கள் திருமுகத்துச் சேயிழையார் சென்றிறைஞ்சி\nஅங்கப் பறைகொண்ட ஆற்றை அணிபுதுவைப்\nபைங்கமலத் தண்டெரியல் பட்டர்பிரான் கோதைசொன்ன\nசங்கத் தமிழ்மாலை முப்பதும் தப்பாமே\nஇங்கிப் பரிசுரைப்பார் ஈரிரண்டு மால்வரைத்தோள்\nசெங்கண் திருமுகத்துச் செல்வத் திருமாலால்\nஎங்கும் திருவருள் பெற்று இன்புறுவர் எம்பாவாய்',
          meaning: { en: 'These thirty verses, a Tamil garland worthy of the old sangam, were spoken by Kodai, daughter of Bhattarpiran of beautiful Puduvai who wears a cool green garland of lotus: how the moon-faced, jewelled girls went and worshipped Madhava, Kesava, who churned the ship-bearing ocean, and gained the parai. Those who recite them without fault will get the grace of Tirumal, with four mountain-like shoulders, red eyes and a beautiful face, everywhere, and be happy.', kn: 'ಹಡಗುಗಳಿರುವ ಕಡಲನ್ನು ಕಡೆದ ಮಾಧವ, ಕೇಶವನನ್ನು ಚಂದ್ರಮುಖದ ಆಭರಣದ ಹುಡುಗಿಯರು ಹೋಗಿ ನಮಸ್ಕರಿಸಿ ಪರೈ ಪಡೆದ ಬಗೆಯನ್ನು, ಸುಂದರ ಪುದುವೈಯ ತಂಪಾದ ಹಸಿರು ತಾವರೆ ಮಾಲೆ ಧರಿಸಿದ ಭಟ್ಟರ್‌ಪಿರಾನನ ಮಗಳು ಕೋದೈ ಹೇಳಿದ ಸಂಗಮ ಕಾಲದ ತಮಿಳು ಮಾಲೆಯ ಮೂವತ್ತು ಪದ್ಯಗಳನ್ನು ತಪ್ಪದೆ ಪಠಿಸುವವರು, ನಾಲ್ಕು ಬೆಟ್ಟದಂಥ ಭುಜಗಳ, ಕೆಂಗಣ್ಣಿನ, ಸುಂದರ ಮುಖದ ಸಿರಿವಂತ ತಿರುಮಾಲನ ಕೃಪೆಯನ್ನು ಎಲ್ಲೆಡೆ ಪಡೆದು ಸಂತೋಷದಿಂದಿರುವರು.' },
        },
      ],
    },
    {
      title: 'ஆண்டாள் வாழித் திருநாமம்',
      titleEn: 'Vazhi Tirunamam of Andal',
      note: 'The closing benediction (mangalam) recited after the Tiruppavai. It reads the same in the three printings and the e-text consulted.',
      noteKn: 'ತಿರುಪ್ಪಾವೈಯ ನಂತರ ಹೇಳುವ ಮಂಗಳ ಪದ್ಯ (ವಾಳಿ ತಿರುನಾಮ). ಪರಿಶೀಲಿಸಿದ ಮುದ್ರಿತ ಪ್ರತಿಗಳು ಮತ್ತು ಇ-ಪಠ್ಯದಲ್ಲಿ ಇದು ಒಂದೇ ರೀತಿ ಇದೆ.',
      verses: [
        {
          text: 'திருவாடிப் பூரத்துச் செகத்துதித்தாள் வாழியே\nதிருப்பாவை முப்பதும் செப்பினாள் வாழியே\nபெரியாழ்வார் பெற்றெடுத்த பெண்பிள்ளை வாழியே\nபெரும்பூதூர் மாமுனிக்குப் பின்னானாள் வாழியே\nஒருநூற்று நாற்பத்து மூன்றுரைத்தாள் வாழியே\nஉயரரங்கர்க்கே கண்ணி உகந்தளித்தாள் வாழியே\nமருவாரும் திருமல்லி வளநாடி வாழியே\nவண்புதுவை நகர்க்கோதை மலர்ப்பதங்கள் வாழியே',
          meaning: { en: 'Long live her who was born in the world on the star Pooram in Adi; long live her who sang the thirty verses of the Tiruppavai; long live the daughter raised by Periyalvar; long live her who came after the great sage of Perumbudur (Ramanuja); long live her who spoke the one hundred and forty-three verses (of the Nachiyar Tirumozhi); long live her who gladly gave her garland to the high Ranganatha; long live the lady of the fragrant, fertile land of Tirumalli; long live the lotus feet of Kodai of generous Puduvai.', kn: 'ಆಡಿ ತಿಂಗಳ ಪೂರಂ ನಕ್ಷತ್ರದಲ್ಲಿ ಜಗತ್ತಿನಲ್ಲಿ ಅವತರಿಸಿದವಳು ಚಿರಂಜೀವಿಯಾಗಲಿ; ತಿರುಪ್ಪಾವೈಯ ಮೂವತ್ತು ಪಾಸುರಗಳನ್ನು ಹೇಳಿದವಳು ಚಿರಂಜೀವಿಯಾಗಲಿ; ಪೆರಿಯಾಳ್ವಾರರು ಪಡೆದ ಮಗಳು ಚಿರಂಜೀವಿಯಾಗಲಿ; ಪೆರುಂಬೂದೂರಿನ ಮಹಾಮುನಿ (ರಾಮಾನುಜ) ಅವರ ನಂತರ ಬಂದವಳು ಚಿರಂಜೀವಿಯಾಗಲಿ; ನೂರ ನಲವತ್ತ ಮೂರು ಪದ್ಯಗಳನ್ನು ಹೇಳಿದವಳು ಚಿರಂಜೀವಿಯಾಗಲಿ; ಎತ್ತರದ ರಂಗನಾಥನಿಗೆ ಸಂತೋಷದಿಂದ ತನ್ನ ಮಾಲೆಯನ್ನು ಕೊಟ್ಟವಳು ಚಿರಂಜೀವಿಯಾಗಲಿ; ಪರಿಮಳದ ತಿರುಮಲ್ಲಿ ನಾಡಿನ ಒಡತಿ ಚಿರಂಜೀವಿಯಾಗಲಿ; ವಳನಾಡಿನ ಪುದುವೈ ನಗರದ ಕೋದೈಯ ಹೂವಿನಂಥ ಪಾದಗಳು ಚಿರಂಜೀವಿಯಾಗಲಿ.' },
        },
      ],
    },
  ],
};
