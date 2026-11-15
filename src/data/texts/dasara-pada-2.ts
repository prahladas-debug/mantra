/**
 * Dāsara padagaḷu, second set: further widely sung Kannada songs of the Haridāsas, one Mantra
 * per song (pallavi, anupallavi where there is one, caraṇas). Same conventions as dasara-pada.ts.
 *
 * Every song was collated (Nov 2026) against at least two independent copies; the reading kept is
 * the one found in two witnesses, and only stanzas present in the witnesses are given.
 * Witnesses:
 *  DV   dasavani.blogspot.com (typed Kannada)
 *  CSOT "Śrī Purandara Dāsara Padagaḷu", ed. H. T. Mahantesh Shastri, archive.org (CC0 scan; OCR)
 *  PDP  "Purandara Dāsara Padagaḷu" (S. S. Karant, Hubli), archive.org (OCR)
 *  BK3, BK4  "Bhajana Kaustubha" vols 3 and 4 (Haridasa Sahitya Prachara Granthamale), archive.org (OCR)
 * The ankita is spelled ಪುರಂದರವಿಠಲ throughout (copies vary: ವಿಠ್ಠಲ, ವಿಟ್ಠಲ). Rāgas are not given:
 * the copies rarely agree on them. Where a typed copy and the printed copies differ in the order of
 * stanzas, the printed order is followed. Meanings are original; no published translation was used.
 *
 * Differences resolved, song by song:
 *  kandu-kandu [DV, CSOT]: c2 ಪ್ರಹ್ಲಾದಗೊಲಿದ (CSOT; DV ಪ್ರಹ್ಲಾದವರದ); c3 last line ಶ್ರೀಕೃಷ್ಣ added as in CSOT.
 *  sanditayya-prayavu [DV, CSOT, PDP]: c1 ತಂದೆಯುದರದಿ (DV CSOT), ಬೆಂದೆ (DV PDP; CSOT ಬಂದೆ), ಗರ್ಭದೆ (DV PDP; CSOT ಗರ್ಭದಿ); c1 line 1 ಕಷ್ಟದಿಂದ (DV PDP).
 *  srinivasa-neene-paaliso [DV, PDP, CSOT]: the books put the stanza “endige ninna pādābjava” before “eṣṭu dina”; their order is followed (DV reverses). anupallavi ಮಾನದಿಂ ಪರಿಪಾಲಿಪ (PDP CSOT; DV ಮಾನದಿಂದ ಪರಿಪಾಲಿಸುವ), ಮುಕುಂದ (PDP CSOT; DV ಗೋವಿಂದ); c1 ಮಿಂದು ನೊಂದೆನೊ ಮುಕುಂದ (PDP CSOT; DV ನಿಂದು … ಗೋವಿಂದ); c3 ಸಲಹುವ ಹನುಮದೀಶ (PDP CSOT; DV ಸಲಹೊ ಎನ್ನ). DV ಭಸಿಸಲಾರೆ corrected to ಭಜಿಸಲಾರೆ.
 *  barayya-venkataramana [DV, PDP, CSOT]: DV has an extra line ಬಾರೋ ವಿಶ್ವಂಭರಣ after the pallavi, found in neither printed copy, and is not given; ಮೋದಸೂಕರ (PDP CSOT; DV ಮೋದಗೋಚರ), ಸದಯ ನರಸಿಂಹ; stanza division as in PDP.
 *  talu-talelo-rangayya [BK3, DV, CSOT]: c1 ಮಗನೆಂಬುದಕೇನೋ (BK3; DV ಮಗನೆಂಬುದದೇನೊ, CSOT ಮಗನೆಂದಕೇನೊ); c2 ಹಿಡಿ ಹಿಡಿ ಎಂದರೆ (BK3 CSOT; DV ಹಿಡಿಯೆಂದರೆ); c3 ಹೇಳುವುದೇನೆಲೊ (BK3 DV; CSOT ಹೋಗುವುದೇನೆಲೊ).
 *  yare-rangana [DV, CSOT]: DV and CSOT agree in wording (CSOT OCR ಪ್ರೀಯನ for ಪ್ರಿಯನ); the stanzas are of two lines each, as in CSOT.
 *  jo-jo-sri-krishna [CSOT, DV]: pallavi as in CSOT (ನಂದಗೋಪಿಯ ಕಂದ ಮುಕುಂದ; DV omits ನಂದ and splits the lines differently); c1 ಶ್ರೀಲತಾಂಗಿಯಳ (DV; CSOT ಶ್ರೀಲಲಿತಾಂಗಿಯರ); c2 ಗುಲಗಂಜಿಯ (DV; CSOT ಗುರುಗುಂಜೆಯ), ಆಲದೆಲೆಯ (DV; CSOT ಒಂದಾಲದೆಲೆಯ); c3 ಪೋರ (DV; CSOT ಪೊರೆ).
 *  neene-dayalo [DV, CSOT]: pallavi ಮುಕುಂದ (DV; CSOT OCR ಮುಖದ); c2 ನಗುತ ಕೇಳಿ ನೀನು (CSOT; DV ನಗುತ ಕೇಳುತ ಬಂದೆ); anupallavi ಕಾವ (DV; CSOT ಕಾಯ್ದ); c2 ತುತಿಪೆನೊ (DV; CSOT OCR unclear).
 *  na-maadida-karma [DV, CSOT, PDP]: the printed copies give the stanzas in the order ಅತಿಥಿಗಳಿಗೆ, ಅನ್ನಪಾನಂಗಳಿಗೆ, ಇನ್ನಾದರೂ (DV puts ಅನ್ನಪಾನಂಗಳಿಗೆ first); c1 ಗತಿ ಯಾವುದಿನ್ನು, ಸಂಗಗಳ (CSOT PDP; DV ಗತಿ ಯಾವುದೆನಗಿನ್ನು, ಸಂಗ ಅರಘಳಿಗೆ); c2 ಸ್ನಾನ ಜಪ ಸಂಧ್ಯಾನ ತಪವ ನೀಗಿ (CSOT PDP; DV ಸ್ನಾನ ಸಂಧ್ಯಾನ ಜಪತಪ ನೀಗಿ), ಶ್ವಾನನಂತೆ (DV PDP; CSOT ಶ್ವಾನದಂತೆ); anupallavi ಬರೆದುದಕೆ (DV PDP; CSOT ಬರೆದುದೇಕೆ).
 *  palisemma-muddu-sharade [DV, CSOT, PDP]: stanza division as in PDP and CSOT (the anupallavi is the single line ಲೋಲಲೋಚನೆ …); c1 ಅಕ್ಷರಕ್ಷರ ವಿವೇಕದ (CSOT; PDP ವಿವೇಕನ, DV ವಿವೇಕವಾ), ಕುಕ್ಷಿಯೊಳೀರೇಳು ಲೋಕವ (CSOT PDP; DV ಏಳು ಲೋಕವ); c2 ಮಂಗಳಗಾತ್ರಳೆ (CSOT PDP; DV ಮಂಗಳಗಾತ್ರೆ ತಾಯೆ); c3 ಸ್ತುತಿಸುವೆ (CSOT PDP; DV ಸ್ಮರಿಸುವೆ).
 *  jaya-mangalam-nitya [DV, CSOT, PDP]: stanzas as in PDP; c2 ವಾಸಿತಾನಂತಪದ (DV PDP; CSOT ವಾಸಿತಾನಂದಪದ); c3 ವಾಸುದೇವಮೂರ್ತಿ (CSOT, PDP; DV ವಾಸುದೇವನ ಮೂರ್ತಿ), ದಾಸರನು ಕಾಯ್ದ (PDP, CSOT; DV ಕಾಯ್ವ). Other songs with the same first line (Hayavadana, Ramakanta-Nirmala ankita) exist in BK3 and were not used.
 *  mandagamane-ivanare [DV, CSOT, PDP]: the printed copies are poorly legible in places (PDP especially), so DV is followed where they cannot be read; pallavi ಮಂದರಧರ (CSOT; DV ಮಂದರಧರೆ is a slip), ಹೊನ್ನುಡದಾರ (CSOT; DV ಹೊನ್ನುಡುದಾರ). Stanzas are of four lines (two question-and-answer pairs).
 *  narasimhana-pada-bhajaneya [DV, BK4, CSOT, PDP]: stanza division as in BK4; c2 ವೈಕುಂಠಪತಿ (DV BK4; CSOT PDP ಸಿರಿನರಹರಿ); c1 ಕರುಳನು ತನ್ನ (BK4; DV ಕರುಳ ತನ್ನ).
 *  devaki-kanda-mukunda [DV, BK3, PDP]: all three agree apart from OCR noise; ಮೋಹನವೇಷ (DV; illegible in BK3 and PDP).
 *  enu-barede-brahma [DV, CSOT, PDP]: the three agree apart from spelling and OCR noise; the last two lines as in DV and CSOT (ಸಂದೇಹಿಸಲು ಬೇಡ, CSOT).
 *  eke-chintisuve [DV, CSOT, PDP]: the three agree apart from spelling and OCR noise.
 *  elli-harikatha-prasangavo [DV, CSOT, PDP]: ಜಯ ಹರಿ ಹರಿಯೆಂಬುವುದೆ (CSOT PDP; DV ಜಯ ಹರಿಯೆಂಬುದೆ); stanzas not marked in the printed copies, so the song is divided pallavi, anupallavi and one caraṇa.
 *  ide-samaya-ranga [DV, CSOT]: the two agree in wording; stanzas of four lines as in CSOT.
 *  aru-badukidarayya [DV, CSOT, PDP]: c2 ಕಲಹ ಬಾರದ ಹಾಗೆ (CSOT PDP; DV ಕಲಹ ಬಾರದ ಮುನ್ನ); otherwise DV, CSOT and PDP agree apart from OCR noise.
 *  ootakke-bandevu [DV, CSOT, PDP]: c1 line 2 ಕಣ್ಣು ಬಾಯಿ ಬತ್ತಿ ಬರುತಲಿದೆ ಕೈಕಾಲು ಝಮ್ಮು (CSOT PDP; DV ಒತ್ತಿ ಬರುತಲಿದೆ).
 *  gummana-kareyadire [BK3, DV, CSOT]: c2 ಠಾವಿನಲಿ (BK3; DV ಠಾವಿಲಿ; CSOT OCR ಬಂದು).
 *  tala-beku-takka-mela [DV, PDP, CSOT]: anupallavi ಗಾನವನ್ನು ಕೇಳಬೇಕೆಂಬುವರಿಗೆ (DV PDP; CSOT unreadable), ತಿಳಿದು ಪೇಳಲು ಬೇಕು (DV PDP); ರತಿಪತಿಪಿತನೊಳು (DV CSOT; PDP OCR ರತಿಸತಿಪಿತ).
 *  keleno-hari-talano [DV, PDP, CSOT]: the opening is spelled ಕೇಳನೊ (PDP CSOT; DV ಕೇಳೆನೊ); c1 ಡಂಭಕರ (PDP CSOT; DV ಡಂಭಕದ); the three agree elsewhere (apart from OCR noise).
 *  bharatidevi-nene-nene [DV, CSOT]: ಸುಚರಿತೆ (CSOT; DV ಸುಚರಿತ); the printed copy breaks off at the end of the last line (ಕಿಂಕರಿ ಪುರಂದರವಿಠಲ), and ಕರುಣೆ is from DV only and is omitted.
 *  dharmave-jayavemba [DV, CSOT, PDP]: ಮಾಡಲು ಬೇಕು ತಂತ್ರ, ಉಣಿಸಲು ಬೇಕು, ಪೋಷಿಸಲು ಬೇಕು (CSOT; DV ಮಾಡಲಿಬೇಕು etc.), ಪುಸಿಯಾಡಿ (CSOT; DV ಪುಸಿ ಮಾಡಿ); the printed copies do not mark the stanzas, so the lines are grouped in fours here.
 *  buddhi-matu-helidare [DV, CSOT, PDP]: the three agree apart from OCR noise.
 *  neene-anathabandhu [DV, CSOT, PDP]: ಮದಗಜವೆಲ್ಲ (DV PDP; CSOT ಮೂಜಗವೆಲ್ಲ), ಅದರ ವೇಳೆಗೆ (CSOT PDP; DV ವ್ಯಾಳ್ಯಕೆ); c2 ಗತಿ ಮುಕುಂದ ಎನ್ನಲು (CSOT PDP; DV ಗತಿ ನೀನೇ ಮುಕುಂದ).
 *  dharanige-doreyendu-nambide [DV, CSOT, PDP]: DV and CSOT agree in wording (PDP is too damaged to read in several lines); the allusions in c1 and c2 are glossed by their literal sense.
 *  yadava-nee-ba [DV, CSOT, PDP]: CSOT lacks the four lines ಕಣಕಾಲಂದುಗೆ … ಗೋವಳರೊಡಗೂಡಿ, found in DV and PDP; ಮಹಿಮನೆ (CSOT PDP; DV ಚರಿತನೆ). The printed copies do not mark the stanzas; the division here follows the sense (pallavi, anupallavi, two caraṇas).
 *  bannisi-gopi-harasidalu [DV, CSOT, PDP]: the three agree apart from OCR noise (CSOT line 5 ವಾಯುಸುತನೆ ನಿನ್ನೊಡೆಯನಾಗೆನುತ is garbled; DV ವಾಯುಸುತಗೆ ನೀನೊಡೆಯನಾಗೆನುತ is followed).
 *  mangala-maramanage [DV, PDP]: the two agree (PDP is the only printed copy found, and its line breaks are used for the stanza division); ಕಕ್ಷಕ್ಕೆ (PDP; DV ಕಕ್ಷೆಗೆ), pallavi ಮಂಗಳ ಮಾರಮಣನಿಗೆ … ಶುಭಮಂಗಳ (DV; PDP ಮಂಗಳ ಮಾರಮಣಗೆ ಮಂಗಳ ಭೂರಮಣಗೆ).
 *  indu-ninna-mareya-hokke [DV, CSOT]: line 5 ಕಮಲನಯನ (DV; CSOT ಕಮಲಜನಕ); otherwise they agree apart from OCR noise.
 *  ninna-nodi-dhanyanadeno [DV, BK3, CSOT]: DV is followed throughout; BK3 differs in c2 (ದಾಸನೆನಿಸಿ ಎನ್ನ ಜಗದೀಶ for ದಾಸನು ನಾನಲ್ಲವೆ ಜಗದೀಶ), where CSOT supports DV; CSOT is badly damaged in this song.
 *  nillabekayya-krishnayya [DV, PDP, CSOT]: ಸುಪ್ಪಾಣಿ (PDP CSOT; DV ಚುಪ್ಪಾಣಿ); line ಅಂದದಿ/ತಂದು ಮುದದಿ ಮುತ್ತಿನ ಹಾರ (DV ತಂದು ಮುದದಿ; PDP ಅಂದದಿ; CSOT unreadable): DV followed.
 */
import type { Mantra } from '../types';

export const dpKanduKandu: Mantra = {
  id: 'dasara-pada-kandu-kandu',
  title: 'ಕಂಡು ಕಂಡು ನೀ ಎನ್ನ ಕೈ ಬಿಡುವರೇ',
  titleEn: 'Purandara Dasa · Kandu Kandu Nee Enna Kai Biduvare',
  category: 'dasara-pada',
  order: 27,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A plaintive song to Krishna: “Seeing me suffer, will you let go of my hand? You are my father, mother and kin; having taken the title Lover of Devotees, should you not yield to your devotee?”',
  summaryKn: 'ಕೃಷ್ಣನಿಗೆ ಮೊರೆಯಿಡುವ ಹಾಡು: “ನನ್ನ ಕಷ್ಟವನ್ನು ಕಂಡೂ ಕೈ ಬಿಡುವೆಯಾ? ನೀನೇ ನನಗೆ ತಂದೆ, ತಾಯಿ, ಬಂಧು; ಭಕ್ತವತ್ಸಲನೆಂಬ ಬಿರುದು ಹೊತ್ತ ಮೇಲೆ ಭಕ್ತರಿಗೆ ಅಧೀನನಾಗಬೇಡವೆ?”',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಕಂಡು ಕಂಡು ನೀ ಎನ್ನ ಕೈ ಬಿಡುವರೇ ।\nಪುಂಡರೀಕಾಕ್ಷ ಪುರುಷೋತ್ತಮ ಹರೇ ॥',
          meaning: {
            en: 'Seeing and knowing my plight, will you let go of my hand, lotus-eyed Purushottama Hari?',
            kn: 'ನನ್ನ ಪಾಡನ್ನು ಕಂಡೂ ಕಂಡೂ ನೀನು ನನ್ನ ಕೈ ಬಿಡುವೆಯಾ? ಕಮಲನಯನನೇ, ಪುರುಷೋತ್ತಮನೇ, ಹರಿಯೇ!',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಬಂಧುಗಳು ಎನಗಿಲ್ಲ ಬದುಕಿನಲಿ ಸುಖವಿಲ್ಲ ।\nನಿಂದೆಯಲಿ ನೊಂದೆನೈ ನೀರಜಾಕ್ಷ ।\nತಂದೆತಾಯಿಯು ನೀನೆ ಬಂಧುಬಳಗವು ನೀನೆ\nಎಂದೆಂದಿಗೂ ನಿನ್ನ ನಂಬಿದೆನೋ ಕೃಷ್ಣಾ ॥',
          meaning: {
            en: 'I have no kin and no joy in life; I suffer under blame, lotus-eyed one. You are my father and mother, you are all my kin; I trust you for ever, Krishna.',
            kn: 'ನನಗೆ ಬಂಧುಗಳಿಲ್ಲ, ಬದುಕಿನಲ್ಲಿ ಸುಖವಿಲ್ಲ; ನಿಂದೆಯಿಂದ ನೊಂದಿದ್ದೇನೆ, ಕಮಲನಯನನೇ. ತಂದೆತಾಯಿ ನೀನೇ, ಬಂಧುಬಳಗವೂ ನೀನೇ; ಎಂದೆಂದಿಗೂ ನಿನ್ನನ್ನೇ ನಂಬಿದ್ದೇನೆ, ಕೃಷ್ಣಾ.',
          },
        },
        {
          n: 2,
          text: 'ಕ್ಷಣವೊಂದು ಯುಗವಾಗಿ ತೃಣಕಿಂತ ಕಡೆಯಾಗಿ\nಎಣಿಸಲಾರದ ಭವದಿ ನೊಂದೆ ನಾನು ।\nಸನಕಾದಿಮುನಿವಂದ್ಯ ವನಜಸಂಭವ ಜನಕ\nಫಣಿಶಾಯಿ ಪ್ರಹ್ಲಾದಗೊಲಿದ ಶ್ರೀಕೃಷ್ಣಾ ॥',
          meaning: {
            en: 'Each moment felt like an age; I became lower than a blade of grass and suffered in countless births. Krishna, worshipped by Sanaka and the sages, father of Brahma, who rests on the serpent and favoured Prahlada.',
            kn: 'ಒಂದೊಂದು ಕ್ಷಣವೂ ಒಂದು ಯುಗದಂತಾಗಿ, ಹುಲ್ಲುಕಡ್ಡಿಗಿಂತ ಕೀಳಾಗಿ, ಲೆಕ್ಕವಿಲ್ಲದಷ್ಟು ಜನ್ಮಗಳಲ್ಲಿ ನಾನು ನೊಂದೆ. ಸನಕಾದಿ ಮುನಿಗಳಿಂದ ವಂದಿತನೇ, ಬ್ರಹ್ಮನ ತಂದೆಯೇ, ಶೇಷಶಯನನೇ, ಪ್ರಹ್ಲಾದನಿಗೆ ಒಲಿದ ಶ್ರೀಕೃಷ್ಣಾ.',
          },
        },
        {
          n: 3,
          text: 'ಭಕ್ತವತ್ಸಲನೆಂಬೊ ಬಿರುದು ಪೊತ್ತಾ ಮೇಲೆ\nಭಕ್ತರಾಧೀನನಾಗಿರಬೇಡವೆ ।\nಮುಕ್ತಿದಾಯಕ ನೀನು ಹೊನ್ನೂರುಪುರವಾಸ\nಶಕ್ತಗುರು ಪುರಂದರವಿಠಲ ಶ್ರೀಕೃಷ್ಣ ॥',
          meaning: {
            en: 'Once you have taken the title Lover of Devotees, should you not be subject to your devotees? You give liberation, you dwell at Honnurupura; mighty Guru, Purandara Vitthala, Sri Krishna.',
            kn: 'ಭಕ್ತವತ್ಸಲನೆಂಬ ಬಿರುದನ್ನು ಹೊತ್ತ ಮೇಲೆ ಭಕ್ತರಿಗೆ ಅಧೀನನಾಗಿರಬೇಡವೆ? ಮುಕ್ತಿಯನ್ನು ಕೊಡುವವನು ನೀನು, ಹೊನ್ನೂರುಪುರದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಶಕ್ತನಾದ ಗುರುವೇ ಪುರಂದರವಿಠಲ, ಶ್ರೀಕೃಷ್ಣ.',
          },
        },
      ],
    },
  ],
};

export const dpSanditayyaPrayavu: Mantra = {
  id: 'dasara-pada-sanditayya-prayavu',
  title: 'ಸಂದಿತಯ್ಯ ಪ್ರಾಯವು ಸಂದಿತಯ್ಯ',
  titleEn: 'Purandara Dasa · Sanditayya Prayavu',
  category: 'dasara-pada',
  order: 28,
  sourceScript: 'kannada',
  deity: 'Sri Hari',
  source: 'Purandara Dasa',
  summary: 'A song of repentance: a whole youth has slipped away in suffering, from the womb to the sea of sin, and the singer asks Purandara Vitthala to ferry him across in the boat of meditation on his feet.',
  summaryKn: 'ಪಶ್ಚಾತ್ತಾಪದ ಹಾಡು: ಗರ್ಭದಿಂದ ಹಿಡಿದು ಪಾಪದ ಕಡಲಿನವರೆಗೆ ಕಷ್ಟದಲ್ಲೇ ಪ್ರಾಯ ಕಳೆದುಹೋಯಿತು; ಧ್ಯಾನವೆಂಬ ಹಡಗಿನಲ್ಲಿ ಹತ್ತಿಸಿ ಪಾದ ಸೇರಿಸು ಎಂದು ಪುರಂದರವಿಠಲನನ್ನು ಬೇಡುವ ಹಾಡು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಸಂದಿತಯ್ಯ ಪ್ರಾಯವು ಸಂದಿತಯ್ಯ ॥',
          meaning: {
            en: 'My youth has passed away, alas, it has passed.',
            kn: 'ನನ್ನ ಪ್ರಾಯವು ಕಳೆದುಹೋಯಿತಯ್ಯ, ಕಳೆದುಹೋಯಿತು.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಒಂದು ದಿನವು ಸುಖವು ಇಲ್ಲ ಕುಂದಿಹೋದೆ ಕಷ್ಟದಿಂದ ।\nಬಂಧನವನು ಬಿಡಿಸುತೆನ್ನ ತಂದೆ ನೀನೆ ರಕ್ಷಿಸಯ್ಯ ॥',
          meaning: {
            en: 'There was not a single happy day; I wasted away with hardship. Free me from this bondage and protect me, my father.',
            kn: 'ಒಂದು ದಿನವೂ ಸುಖವಿಲ್ಲ; ಕಷ್ಟದಿಂದ ಕುಂದಿಹೋದೆ. ಬಂಧನದಿಂದ ಬಿಡಿಸಿ, ತಂದೆಯೇ, ನೀನೇ ನನ್ನನ್ನು ರಕ್ಷಿಸು.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ತಂದೆಯುದರದಿ ಮೂರು ತಿಂಗಳು ಸಂದು ಹೋಯಿತು ತಿಳಿಯದೆ ।\nಬೆಂದೆ ನವಮಾಸದೊಳು ಗರ್ಭದಿ ನಿಂದು ತಾಯಿಯ ಗರ್ಭದೆ ।\nಕುಂದಿತಾಯುವು ಒಂದು ವರುಷ ಇಂದಿರೇಶನೆ ಕೇಳು ದುಃಖವ ।\nಬಂಧನದೊಳಗೆ ನಿಂದೆನನುದಿನ ಮುಂದೆ ಮೋಕ್ಷದ ಮಾರ್ಗ ಕಾಣದೆ ॥',
          meaning: {
            en: 'Three months passed in my father’s body without my knowing; I was cooked for nine months, standing in my mother’s womb. A year of my life was lost. Lord of Lakshmi, hear my sorrow: I stood in bondage day after day, seeing no way ahead to liberation.',
            kn: 'ತಂದೆಯ ಉದರದಲ್ಲಿ ಮೂರು ತಿಂಗಳು ತಿಳಿಯದೆ ಕಳೆದುಹೋದವು; ತಾಯಿಯ ಗರ್ಭದಲ್ಲಿ ನಿಂತು ಒಂಬತ್ತು ತಿಂಗಳು ಬೆಂದೆ. ಒಂದು ವರ್ಷ ಆಯುಸ್ಸು ಕುಂದಿತು. ಇಂದಿರೇಶನೇ, ನನ್ನ ದುಃಖವನ್ನು ಕೇಳು; ದಿನದಿನವೂ ಬಂಧನದಲ್ಲೇ ನಿಂತಿದ್ದೇನೆ, ಮುಂದೆ ಮೋಕ್ಷದ ದಾರಿ ಕಾಣುತ್ತಿಲ್ಲ.',
          },
        },
        {
          n: 2,
          text: 'ಕತ್ತಲೆಯೊಳಿರಲಾರೆನೆನುತಲಿ ಹೊತ್ತೆ ಹರಕೆಯ ನಿನ್ನೊಳು ।\nನಿತ್ಯದಲಿ ಮಲಮೂತ್ರ ಬಾಲ್ಯದಿ ಹೊತ್ತುಗಳೆದೆನು ಎನ್ನೊಳು ।\nಮತ್ತೆ ಹದಿನಾರರ ಪ್ರಾಯದಿ ಉಕ್ಕಿ ನಡೆದೆನು ಧರೆಯೊಳು ।\nಹತ್ತಿ ಸಂಸಾರದ ಮಾಯೆಯು ಸಿಕ್ಕಿದೆನು ಭವಬಲೆಯೊಳು ॥',
          meaning: {
            en: '“I cannot stay in this darkness,” I said, and made a vow to you. In childhood I wasted my time in dirt and filth. Then at sixteen I walked the earth brimming with pride, and the spell of worldly life caught me in the net of rebirth.',
            kn: '“ಈ ಕತ್ತಲೆಯಲ್ಲಿ ಇರಲಾರೆ” ಎನ್ನುತ್ತ ನಿನ್ನಲ್ಲಿ ಹರಕೆ ಹೊತ್ತೆ. ಬಾಲ್ಯದಲ್ಲಿ ಮಲಮೂತ್ರದಲ್ಲೇ ಹೊತ್ತು ಕಳೆದೆ. ಮತ್ತೆ ಹದಿನಾರರ ಪ್ರಾಯದಲ್ಲಿ ಉಬ್ಬಿ ಭೂಮಿಯ ಮೇಲೆ ನಡೆದೆ; ಸಂಸಾರದ ಮಾಯೆ ಹತ್ತಿ ಭವದ ಬಲೆಯಲ್ಲಿ ಸಿಕ್ಕಿಕೊಂಡೆ.',
          },
        },
        {
          n: 3,
          text: 'ಎಡೆಬಿಡದೆ ಅನುದಿನದಿ ಪಾಪದ ಕಡಲೊಳಗೆ ನಾ ಬಿದ್ದೆನೋ ।\nದಡವ ಕಾಣದೆ ದುಃಖದೊಳು ಬೆಂದೊಡಲೊಳಗೆ ನಾ ನೊಂದೆನೋ ।\nಬಿಡದೆ ನಿನ್ನಯ ಧ್ಯಾನವೆಂಬಾ ಹಡಗವೇರಿಸು ಎಂದೆನೋ ।\nದೃಢದಿ ನಿನ್ನಯ ಪಾದ ಸೇರಿಸೊ ಒಡೆಯ ಪುರಂದರವಿಠಲ ॥',
          meaning: {
            en: 'Without a break, day after day, I fell into the sea of sin; seeing no shore, I burnt and ached inside with sorrow. I beg you: put me aboard the ship of unbroken meditation on you, and firmly bring me to your feet, my Lord Purandara Vitthala.',
            kn: 'ಬಿಡುವಿಲ್ಲದೆ ದಿನದಿನವೂ ಪಾಪದ ಕಡಲಿನಲ್ಲಿ ಬಿದ್ದೆ; ದಡ ಕಾಣದೆ ದುಃಖದಲ್ಲಿ ಒಳಗೊಳಗೇ ಬೆಂದು ನೊಂದೆ. ಬಿಡದೆ ನಿನ್ನ ಧ್ಯಾನವೆಂಬ ಹಡಗನ್ನು ಹತ್ತಿಸು ಎಂದು ಬೇಡುತ್ತೇನೆ; ದೃಢವಾಗಿ ನಿನ್ನ ಪಾದ ಸೇರಿಸು, ಒಡೆಯನೇ ಪುರಂದರವಿಠಲ.',
          },
        },
      ],
    },
  ],
};

export const dpSrinivasaNeenePaaliso: Mantra = {
  id: 'dasara-pada-srinivasa-neene-paaliso',
  title: 'ಶ್ರೀನಿವಾಸ ನೀನೆ ಪಾಲಿಸೊ',
  titleEn: 'Purandara Dasa · Srinivasa Neene Paaliso',
  category: 'dasara-pada',
  order: 29,
  sourceScript: 'kannada',
  deity: 'Sri Srinivasa (Venkateshvara)',
  source: 'Purandara Dasa',
  summary: 'A prayer to Srinivasa, the protector of those who take refuge, for rescue from the wilderness of worldly life and the weakness of body and mind, by a devotee who feels unworthy yet asks to be held by the hand.',
  summaryKn: 'ಆಶ್ರಿತರನ್ನು ಪಾಲಿಸುವ ಶ್ರೀನಿವಾಸನಿಗೆ ಮೊರೆ: ಸಂಸಾರದ ಕಾಡಿನಿಂದ, ದೇಹ-ಮನಸ್ಸುಗಳ ದೌರ್ಬಲ್ಯದಿಂದ ಪಾರುಮಾಡಿ ಕೈ ಹಿಡಿಯೆಂದು, ತನ್ನನ್ನು ಅಯೋಗ್ಯನೆಂದುಕೊಂಡ ಭಕ್ತನ ಪ್ರಾರ್ಥನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಶ್ರೀನಿವಾಸ ನೀನೆ ಪಾಲಿಸೊ ಶ್ರಿತಜನಪಾಲ ।\nಗಾನಲೋಲ ಶ್ರೀ ಮುಕುಂದನೆ ॥',
          meaning: {
            en: 'Srinivasa, you alone must protect me, guardian of those who take refuge, lover of music, Sri Mukunda.',
            kn: 'ಶ್ರೀನಿವಾಸನೇ, ನೀನೇ ನನ್ನನ್ನು ಪಾಲಿಸು, ಆಶ್ರಿತರ ಪಾಲಕನೇ, ಸಂಗೀತಪ್ರಿಯನೇ, ಶ್ರೀ ಮುಕುಂದನೇ.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಧ್ಯಾನಮಾಳ್ಪ ಸಜ್ಜನರ ಮಾನದಿಂ ಪರಿಪಾಲಿಪ\nವೇಣುಗೋಪಾಲ ಮುಕುಂದ ವೇದವೇದ್ಯ ನಿತ್ಯಾನಂದ ॥',
          meaning: {
            en: 'You protect with honour the good people who meditate on you, flute-playing Gopala, Mukunda, known through the Vedas, ever blissful.',
            kn: 'ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುವ ಸಜ್ಜನರನ್ನು ಗೌರವದಿಂದ ಪರಿಪಾಲಿಸುವ ವೇಣುಗೋಪಾಲನೇ, ಮುಕುಂದನೇ, ವೇದಗಳಿಂದ ತಿಳಿಯಲ್ಪಡುವವನೇ, ನಿತ್ಯಾನಂದನೇ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಎಂದಿಗೆ ನಿನ್ನ ಪಾದಾಬ್ಜವ ಪೊಂದುವ ಸುಖ ।\nಎಂದಿಗೆ ಲಭ್ಯವೊ ಮಾಧವ ।\nಅಂಧಕಾರಣ್ಯದಲಿ ನಿಂದು ತತ್ತರಿಸುತಿಹೆನೊ\nಅಂದದಿಂ ಭವಾಬ್ಧಿಯೊಳು ಮಿಂದು ನೊಂದೆನೊ ಮುಕುಂದ ॥',
          meaning: {
            en: 'When shall I win the joy of reaching your lotus feet? When will it come to me, Madhava? I stand trembling in a forest of darkness; I have bathed in the ocean of worldly life and suffered, Mukunda.',
            kn: 'ನಿನ್ನ ಪಾದಕಮಲವನ್ನು ಸೇರುವ ಸುಖ ಎಂದಿಗೆ ದೊರೆಯುವುದೋ, ಮಾಧವ? ಅಜ್ಞಾನದ ಕತ್ತಲೆಕಾಡಿನಲ್ಲಿ ನಿಂತು ತತ್ತರಿಸುತ್ತಿದ್ದೇನೆ; ಸಂಸಾರಸಾಗರದಲ್ಲಿ ಮುಳುಗಿ ನೊಂದಿದ್ದೇನೆ, ಮುಕುಂದ.',
          },
        },
        {
          n: 2,
          text: 'ಎಷ್ಟು ದಿನ ಕಷ್ಟಪಡುವುದೋ ಯಶೋದೆ ಕಂದ ।\nದೃಷ್ಟಿಯಿಂದ ನೋಡಲಾಗದೆ ।\nಮುಟ್ಟಿ ನಿನ್ನ ಭಜಿಸಲಾರೆ ಕೆಟ್ಟ ನರಜನ್ಮದವ\nದುಷ್ಟ ಕಾರ್ಯ ಮಾಡಿದಾಗ್ಯೂ ಇಷ್ಟನಾಗಿ ಕೈಯ ಪಿಡಿಯೋ ॥',
          meaning: {
            en: 'How many days must I suffer, child of Yashoda? I cannot even see you; I cannot worship you by touching your feet, I who am born in a wretched human body. Though I have done wicked deeds, accept me as your own and take my hand.',
            kn: 'ಯಶೋದೆಯ ಕಂದನೇ, ಇನ್ನೂ ಎಷ್ಟು ದಿನ ಕಷ್ಟಪಡಬೇಕೋ? ನಿನ್ನನ್ನು ಕಣ್ಣಾರೆ ನೋಡಲಾಗುತ್ತಿಲ್ಲ; ಕೆಟ್ಟ ನರಜನ್ಮದ ನಾನು ನಿನ್ನನ್ನು ಮುಟ್ಟಿ ಭಜಿಸಲಾರೆ. ದುಷ್ಟ ಕೆಲಸಗಳನ್ನು ಮಾಡಿದ್ದರೂ ನನ್ನನ್ನು ಇಷ್ಟನನ್ನಾಗಿ ಮಾಡಿಕೊಂಡು ಕೈ ಹಿಡಿ.',
          },
        },
        {
          n: 3,
          text: 'ಅನುದಿನ ಅನೇಕ ರೋಗಗಳ ಅನುಭವಿಸಿದೆನು ।\nಘನ ಮಹಿಮನೆ ಕೇಳಯ್ಯ ।\nತನುವಿನಲಿ ಬಲವಿಲ್ಲ ನೆನೆದ ಮಾತ್ರ ಸಲಹುವ\nಹನುಮದೀಶ ಪುರಂದರವಿಠಲನೆ ಕೈಯ ಪಿಡಿದು ॥',
          meaning: {
            en: 'Day after day I have suffered many illnesses; hear me, Lord of great glory. There is no strength in my body. Lord of Hanuman, Purandara Vitthala, who protect the moment you are remembered, take my hand.',
            kn: 'ದಿನದಿನವೂ ಹಲವಾರು ರೋಗಗಳನ್ನು ಅನುಭವಿಸಿದೆ; ಮಹಿಮನೇ, ಕೇಳು. ದೇಹದಲ್ಲಿ ಬಲವಿಲ್ಲ. ನೆನೆದ ಮಾತ್ರಕ್ಕೆ ಸಲಹುವ, ಹನುಮಂತನ ಒಡೆಯನಾದ ಪುರಂದರವಿಠಲನೇ, ಕೈ ಹಿಡಿ.',
          },
        },
      ],
    },
  ],
};

export const dpBarayyaVenkataramana: Mantra = {
  id: 'dasara-pada-barayya-venkataramana',
  title: 'ಬಾರಯ್ಯ ವೆಂಕಟರಮಣ',
  titleEn: 'Purandara Dasa · Barayya Venkataramana',
  category: 'dasara-pada',
  order: 30,
  sourceScript: 'kannada',
  deity: 'Sri Venkataramana (Vishnu)',
  source: 'Purandara Dasa',
  summary: 'A song of invitation in which each line calls Venkataramana to come in one of his ten avataras: Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha and Kalki.',
  summaryKn: 'ವೆಂಕಟರಮಣನನ್ನು “ಬಾರೋ” ಎಂದು ಕರೆಯುವ ಹಾಡು; ಮತ್ಸ್ಯ, ಕೂರ್ಮ, ವರಾಹ, ನರಸಿಂಹ, ವಾಮನ, ಪರಶುರಾಮ, ರಾಮ, ಕೃಷ್ಣ, ಬುದ್ಧ, ಕಲ್ಕಿ ಎಂಬ ದಶಾವತಾರಗಳ ಹೆಸರಿನಲ್ಲಿ ಕರೆಯುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಬಾರಯ್ಯ ವೆಂಕಟರಮಣ ಭಕ್ತರ ನಿಧಿಯೆ ॥',
          meaning: {
            en: 'Come, Venkataramana, treasure of your devotees.',
            kn: 'ಬಾರಯ್ಯ ವೆಂಕಟರಮಣ, ಭಕ್ತರ ನಿಧಿಯೇ.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ತೋರೋ ನಿನ್ನಯ ದಯೆ ತೋಯಜಾಂಬಕನೆ ॥',
          meaning: {
            en: 'Show me your mercy, lotus-eyed Lord.',
            kn: 'ಕಮಲನಯನನೇ, ನಿನ್ನ ದಯೆಯನ್ನು ತೋರು.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ವೇದಗೋಚರ ಬಾರೋ ಆದಿಕಚ್ಛಪ ಬಾರೋ ।\nಮೋದಸೂಕರ ಬಾರೋ ಸದಯ ನರಸಿಂಹ ಬಾರೋ ॥',
          meaning: {
            en: 'Come, Lord of the Vedas, who came as the fish; come, first Tortoise; come, joyful Boar; come, merciful Narasimha.',
            kn: 'ವೇದಗಳಿಗೆ ಗೋಚರನಾದ (ಮತ್ಸ್ಯ) ಬಾರೋ; ಆದಿಕೂರ್ಮನೇ ಬಾರೋ; ಆನಂದದ ವರಾಹನೇ ಬಾರೋ; ದಯಾಮಯ ನರಸಿಂಹನೇ ಬಾರೋ.',
          },
        },
        {
          n: 2,
          text: 'ವಾಮನ ಭಾರ್ಗವ ಬಾರೋ ರಾಮ ಕೃಷ್ಣನೆ ಬಾರೋ ।\nಪ್ರೇಮದ ಬುದ್ಧನೆ ಬಾರೋ ಸ್ವಾಮಿ ಕಲ್ಕಿಯೆ ಬಾರೋ ॥',
          meaning: {
            en: 'Come, Vamana; come, Parashurama; come, Rama and Krishna; come, loving Buddha; come, Lord Kalki.',
            kn: 'ವಾಮನನೇ, ಭಾರ್ಗವನೇ ಬಾರೋ; ರಾಮನೇ, ಕೃಷ್ಣನೇ ಬಾರೋ; ಪ್ರೇಮಮಯ ಬುದ್ಧನೇ ಬಾರೋ; ಸ್ವಾಮಿ ಕಲ್ಕಿಯೇ ಬಾರೋ.',
          },
        },
        {
          n: 3,
          text: 'ಅರವಿಂದನಾಭ ಬಾರೋ ಸುರರ ಪ್ರಭುವೆ ಬಾರೋ ।\nಪುರುಹೂತವಂದ್ಯ ಬಾರೋ ಪುರಂದರವಿಠಲ ಬಾರೋ ॥',
          meaning: {
            en: 'Come, lotus-navelled Lord; come, master of the gods; come, you whom Indra worships; come, Purandara Vitthala.',
            kn: 'ಕಮಲನಾಭನೇ ಬಾರೋ; ದೇವತೆಗಳ ಒಡೆಯನೇ ಬಾರೋ; ಇಂದ್ರನಿಂದ ವಂದಿತನೇ ಬಾರೋ; ಪುರಂದರವಿಠಲನೇ ಬಾರೋ.',
          },
        },
      ],
    },
  ],
};

export const dpTaluTaleloRangayya: Mantra = {
  id: 'dasara-pada-talu-talelo-rangayya',
  title: 'ತಾಳು ತಾಳೆಲೊ ರಂಗಯ್ಯ',
  titleEn: 'Purandara Dasa · Talu Talelo Rangayya',
  category: 'dasara-pada',
  order: 31,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A gopi scolds the butter-stealing child Krishna playfully: “Wait, Ranga! If you come to our house tomorrow I will tie you to a pillar and tell Yashoda,” and wonders what he is doing, caught in the bonds.',
  summaryKn: 'ಬೆಣ್ಣೆ ಕದಿಯುವ ಕೃಷ್ಣನನ್ನು ಗೋಪಿಯು ಪ್ರೀತಿಯಿಂದ ಗದರಿಸುವ ಹಾಡು: “ತಾಳು ರಂಗಯ್ಯ! ನಾಳೆ ನಮ್ಮ ಮನೆಗೆ ಬಂದರೆ ಕಂಬಕ್ಕೆ ಕಟ್ಟಿ ಯಶೋದೆಗೆ ಹೇಳುವೆ.”',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ತಾಳು ತಾಳೆಲೊ ರಂಗಯ್ಯ ನೀ\nತಾಳು ತಾಳೆಲೊ ಕೃಷ್ಣಯ್ಯ ॥',
          meaning: {
            en: 'Wait, wait, Rangayya! Wait, wait, Krishnayya!',
            kn: 'ತಾಳೋ ತಾಳೋ ರಂಗಯ್ಯ, ನೀನು ತಾಳೋ ತಾಳೋ ಕೃಷ್ಣಯ್ಯ.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ನಾಳೆ ನಮ್ಮನೆಗೆ ಬಂದರೆ ನಿನ್ನ\nಕಾಲ ಕಂಭಕೆ ಕಟ್ಟಿ ಪೇಳುವೆ ಗೋಪಿಗೆ ॥',
          meaning: {
            en: 'If you come to our house tomorrow, I will tie your feet to a pillar and tell the gopi, your mother.',
            kn: 'ನಾಳೆ ನಮ್ಮ ಮನೆಗೆ ಬಂದರೆ ನಿನ್ನ ಕಾಲನ್ನು ಕಂಬಕ್ಕೆ ಕಟ್ಟಿ ನಿನ್ನ ತಾಯಿ ಗೋಪಿಗೆ (ಯಶೋದೆಗೆ) ಹೇಳುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ದೊರೆಗಳ ಮಗನೆಂಬುದಕೇನೊ ಆ-\nತುರದಿ ಮನೆ ಪೊಕ್ಕ ಪರಿಯೇನೊ ।\nದುರುಳಬುದ್ಧಿ ನಿನಗೆ ತರವೇನೊ ಹಿಂದೆ\nತಿರುಗಿ ಬೇಡ್ಯುಂಡದ್ದು ಮರೆತ್ಯೇನೊ ॥',
          meaning: {
            en: 'Is it because you are a king’s son? What is this, rushing into the house? Is such wicked behaviour right for you? Have you forgotten how you went about begging and eating before?',
            kn: 'ರಾಜನ ಮಗನೆಂದೇ? ಅವಸರದಿಂದ ಮನೆಯೊಳಗೆ ನುಗ್ಗಿದ ರೀತಿ ಏನು? ಈ ಕೆಟ್ಟ ಬುದ್ಧಿ ನಿನಗೆ ತಕ್ಕದೇ? ಹಿಂದೆ ಬೇಡಿ ಉಂಡದ್ದನ್ನು ಮರೆತೆಯಾ?',
          },
        },
        {
          n: 2,
          text: 'ಚಿಕ್ಕ ಮಕ್ಕಳು ಹೋದರು ಎಂದು ನೀ ಬಂದು\nಕಕ್ಕುಲತೆಯ ಮಾಡುವರೇನೊ ।\nಸಿಕ್ಕಿದ ಗೋಪಾಲ ಹಿಡಿ ಹಿಡಿ ಎಂದರೆ ನೀ\nಬಿಕ್ಕಿ ಬಿಕ್ಕಿ ಅತ್ತರೆ ಬಿಡುವರೇನೊ ॥',
          meaning: {
            en: 'Do people show such tenderness, coming in just because the little children have gone? And when the gopala is caught and they cry “Hold him, hold him!”, will they let him go because he sobs and sobs?',
            kn: 'ಚಿಕ್ಕ ಮಕ್ಕಳು ಹೋದರೆಂದು ನೀನು ಬಂದು ಹೀಗೆ ಮಮಕಾರ ತೋರುವರೇ? ಸಿಕ್ಕಿಬಿದ್ದ ಗೋಪಾಲನನ್ನು “ಹಿಡಿ, ಹಿಡಿ” ಎಂದರೆ ನೀನು ಬಿಕ್ಕಿಬಿಕ್ಕಿ ಅತ್ತರೆ ಬಿಟ್ಟುಬಿಡುವರೇ?',
          },
        },
        {
          n: 3,
          text: 'ಕಟ್ಟಿದಾಕಳ ಮೊಲೆಗಳನುಂಡು ಕರು\nಬಿಟ್ಟು ಹೇಳುವುದೇನೆಲೊ ರಂಗ ।\nಸೃಷ್ಟಿಗೊಡೆಯ ಶ್ರೀ ಪುರಂದರವಿಠಲ ನೀ\nಕಟ್ಟಲ್ಲಿ ನಿಂತ ಕಾರಣವೇನೊ ರಂಗ ॥',
          meaning: {
            en: 'You drink from the tied cow’s udder, release the calf and then tell tales, Ranga! Lord of creation, Purandara Vitthala, why are you standing there, bound?',
            kn: 'ಕಟ್ಟಿದ ಹಸುವಿನ ಮೊಲೆಯನ್ನು ಉಂಡು, ಕರುವನ್ನು ಬಿಟ್ಟು ಬೇರೆ ಏನೇನೋ ಹೇಳುವುದೇಕೋ ರಂಗ? ಸೃಷ್ಟಿಗೊಡೆಯನಾದ ಪುರಂದರವಿಠಲನೇ, ನೀನು ಕಟ್ಟಿನಲ್ಲಿ ನಿಂತ ಕಾರಣವೇನು ರಂಗ?',
          },
        },
      ],
    },
  ],
};

export const dpYareRangana: Mantra = {
  id: 'dasara-pada-yare-rangana',
  title: 'ಯಾರೆ ರಂಗನ ಯಾರೆ ಕೃಷ್ಣನ',
  titleEn: 'Purandara Dasa · Yare Rangana Yare Krishnana',
  category: 'dasara-pada',
  order: 32,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A short song in which the gopis ask who has come to call Krishna out to play, naming him lover of the flute, beloved of the clever women, saviour of the elephant and Purandara Vitthala.',
  summaryKn: 'ರಂಗನನ್ನು ಕರೆಯಲು ಬಂದವರು ಯಾರು ಎಂದು ಗೋಪಿಕೆಯರು ವಿಚಾರಿಸುವ ಚಿಕ್ಕ ಹಾಡು; ಕೃಷ್ಣನನ್ನು ವೇಣುವಿನೋದ, ಜಾಣೆಯರ ಅರಸ, ಗಜರಾಜವರದ, ಪುರಂದರವಿಠಲ ಎಂದು ಕೊಂಡಾಡುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಯಾರೆ ರಂಗನ ಯಾರೆ ಕೃಷ್ಣನ ।\nಯಾರೆ ರಂಗನ ಕರೆಯ ಬಂದವರು ॥',
          meaning: {
            en: 'Who is it? Who has come to call Ranga, to call Krishna?',
            kn: 'ಯಾರವರು? ರಂಗನನ್ನು, ಕೃಷ್ಣನನ್ನು ಕರೆಯಲು ಬಂದವರು ಯಾರು?',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಗೋಪಾಲಕೃಷ್ಣನ ಪಾಪವಿನಾಶನ ।\nಈ ಪರಿಯಿಂದಲಿ ಕರೆಯ ಬಂದವರು ॥',
          meaning: {
            en: 'Who has come in this way to call Gopalakrishna, destroyer of sin?',
            kn: 'ಪಾಪವಿನಾಶನಾದ ಗೋಪಾಲಕೃಷ್ಣನನ್ನು ಹೀಗೆ ಕರೆಯಲು ಬಂದವರು ಯಾರು?',
          },
        },
        {
          n: 2,
          text: 'ವೇಣುವಿನೋದನ ಪ್ರಾಣಪ್ರಿಯನ ।\nಜಾಣೆಯರರಸನ ಕರೆಯ ಬಂದವರು ॥',
          meaning: {
            en: 'Who has come to call the one who delights in the flute, dear as life, king of the clever women?',
            kn: 'ಕೊಳಲಿನ ವಿನೋದದ, ಪ್ರಾಣಪ್ರಿಯನಾದ, ಜಾಣೆಯರ ಅರಸನನ್ನು ಕರೆಯಲು ಬಂದವರು ಯಾರು?',
          },
        },
        {
          n: 3,
          text: 'ಕರಿರಾಜವರದನ ಪರಮಪುರುಷನ ।\nಪುರಂದರವಿಠಲನ ಕರೆಯ ಬಂದವರು ॥',
          meaning: {
            en: 'Who has come to call the giver of grace to the king of elephants, the Supreme Person, Purandara Vitthala?',
            kn: 'ಗಜರಾಜನಿಗೆ ವರವಿತ್ತವನನ್ನು, ಪರಮಪುರುಷನಾದ ಪುರಂದರವಿಠಲನನ್ನು ಕರೆಯಲು ಬಂದವರು ಯಾರು?',
          },
        },
      ],
    },
  ],
};

export const dpJoJoSriKrishna: Mantra = {
  id: 'dasara-pada-jo-jo-sri-krishna',
  title: 'ಜೋ ಜೋ ಶ್ರೀಕೃಷ್ಣ ಪರಮಾನಂದ',
  titleEn: 'Purandara Dasa · Jo Jo Sri Krishna Paramananda',
  category: 'dasara-pada',
  order: 33,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A cradle song for baby Krishna: lullaby verses addressed to the infant who lay on the banyan leaf on the milk ocean, rocked in a jewelled cradle while the singer wonders whose child this treasure is.',
  summaryKn: 'ಶಿಶು ಕೃಷ್ಣನನ್ನು ತೊಟ್ಟಿಲಲ್ಲಿ ತೂಗುವ ಜೋಗುಳ: ಹಾಲಿನ ಕಡಲಿನಲ್ಲಿ ಆಲದೆಲೆಯ ಮೇಲೆ ಮಲಗಿದ ಮಗುವನ್ನು ರತ್ನದ ತೊಟ್ಟಿಲಲ್ಲಿ ತೂಗುತ್ತ “ಇದು ಯಾರ ನಿಧಿ?” ಎಂದು ಅಚ್ಚರಿಪಡುವ ಹಾಡು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಜೋ ಜೋ ಶ್ರೀಕೃಷ್ಣ ಪರಮಾನಂದ ।\nನಂದಗೋಪಿಯ ಕಂದ ಮುಕುಂದ ಜೋ ಜೋ ॥',
          meaning: {
            en: 'Jo jo, Sri Krishna, supreme bliss; jo jo, Mukunda, child of Nanda and Gopi.',
            kn: 'ಜೋ ಜೋ ಶ್ರೀಕೃಷ್ಣ ಪರಮಾನಂದನೇ; ನಂದ-ಗೋಪಿಯರ ಕಂದ ಮುಕುಂದನೇ, ಜೋ ಜೋ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಪಾಲಗಡಲೊಳು ಪವಡಿಸಿದವನೆ\nಆಲದೆಲೆಯ ಮೇಲೆ ಮಲಗಿದ ಶಿಶುವೆ ।\nಶ್ರೀಲತಾಂಗಿಯಳ ಚಿತ್ತದೊಲ್ಲಭನೆ\nಬಾಲ ನಿನ್ನನು ಪಾಡಿ ತೂಗುವೆನಯ್ಯ ಜೋ ಜೋ ॥',
          meaning: {
            en: 'You who lay on the ocean of milk, the child asleep on a banyan leaf, beloved of Lakshmi: I sing and rock you, child. Jo jo.',
            kn: 'ಹಾಲ್ಗಡಲಿನಲ್ಲಿ ಪವಡಿಸಿದವನೇ, ಆಲದೆಲೆಯ ಮೇಲೆ ಮಲಗಿದ ಶಿಶುವೇ, ಲಕ್ಷ್ಮಿಯ ಮನದ ವಲ್ಲಭನೇ, ಬಾಲನೇ, ನಿನ್ನನ್ನು ಹಾಡಿ ತೂಗುತ್ತೇನೆ. ಜೋ ಜೋ.',
          },
        },
        {
          n: 2,
          text: 'ಹೊಳೆವಂಥ ರನ್ನದ ತೊಟ್ಟಿಲ ಮೇಲೆ\nಥಳಥಳಿಸುವ ಗುಲಗಂಜಿಯ ಮಾಲೆ ।\nಅಳದೆ ನೀ ಪಿಡಿದಾಡೆನ್ನಯ ಮುದ್ದು ಬಾಲ\nನಳಿನನಾಭನೆ ನಿನ್ನ ಪಾಡಿ ತೂಗುವೆನಯ್ಯ ಜೋ ಜೋ ॥',
          meaning: {
            en: 'On a shining jewelled cradle hangs a glittering garland of gunja seeds; do not cry, take hold of it and play, my darling child. Lotus-navelled Lord, I sing and rock you. Jo jo.',
            kn: 'ಹೊಳೆಯುವ ರನ್ನದ ತೊಟ್ಟಿಲಿನ ಮೇಲೆ ಥಳಥಳಿಸುವ ಗುಲಗಂಜಿಯ ಮಾಲೆ ಇದೆ; ಅಳದೆ ಅದನ್ನು ಹಿಡಿದು ಆಡು, ನನ್ನ ಮುದ್ದು ಬಾಲ. ಕಮಲನಾಭನೇ, ನಿನ್ನನ್ನು ಹಾಡಿ ತೂಗುತ್ತೇನೆ. ಜೋ ಜೋ.',
          },
        },
        {
          n: 3,
          text: 'ಯಾರ ಕಂದ ನೀನಾರ ನಿಧಾನಿ\nಯಾರ ರತ್ನವೊ ನೀನಾರ ಮಾಣಿಕವೊ ।\nಸೇರಿತು ಎನಗೊಂದು ಚಿಂತಾಮಣಿಯೆಂದು\nಪೋರ ನಿನ್ನನು ಪಾಡಿ ತೂಗುವೆನಯ್ಯ ಜೋ ಜೋ ॥',
          meaning: {
            en: 'Whose child are you, whose treasure, whose gem, whose ruby? You have come to me as a wish-fulfilling jewel, so, little one, I sing and rock you. Jo jo.',
            kn: 'ನೀನು ಯಾರ ಕಂದ? ಯಾರ ನಿಧಿ? ಯಾರ ರತ್ನ, ಯಾರ ಮಾಣಿಕ್ಯ? ನನಗೆ ಚಿಂತಾಮಣಿಯೇ ಸಿಕ್ಕಿತೆಂದು, ಪೋರನೇ, ನಿನ್ನನ್ನು ಹಾಡಿ ತೂಗುತ್ತೇನೆ. ಜೋ ಜೋ.',
          },
        },
        {
          n: 4,
          text: 'ಗುಣನಿಧಿಯೆ ನಿನ್ನನೆತ್ತಿಕೊಂಡಿದ್ದರೆ\nಮನೆಯ ಕೆಲಸವಾರು ಮಾಡುವರಯ್ಯ ।\nಮನಕೆ ಸುಖನಿದ್ರೆಯ ತಂದುಕೊ ಬೇಗ\nಫಣಿಶಯನನೆ ನಿನ್ನ ಪಾಡಿ ತೂಗುವೆನು ಜೋ ಜೋ ॥',
          meaning: {
            en: 'Treasure of virtues, if I keep carrying you, who will do the housework? Bring a peaceful sleep to your mind quickly, Lord who sleeps on the serpent; I sing and rock you. Jo jo.',
            kn: 'ಗುಣನಿಧಿಯೇ, ನಿನ್ನನ್ನೇ ಎತ್ತಿಕೊಂಡಿದ್ದರೆ ಮನೆಯ ಕೆಲಸವನ್ನು ಯಾರು ಮಾಡುವರು? ಬೇಗ ಮನಸ್ಸಿಗೆ ಸುಖನಿದ್ರೆ ತಂದುಕೋ; ಶೇಷಶಯನನೇ, ನಿನ್ನನ್ನು ಹಾಡಿ ತೂಗುತ್ತೇನೆ. ಜೋ ಜೋ.',
          },
        },
        {
          n: 5,
          text: 'ಅಂಡಜವಾಹನ ಅನಂತಮಹಿಮ\nಪುಂಡರೀಕಾಕ್ಷ ಶ್ರೀ ಪರಮ ಪಾವನ ।\nಹಿಂಡು ದೈವದ ಗಂಡ ಉದ್ದಂಡನೆ\nಪಾಂಡುರಂಗ ಶ್ರೀ ಪುರಂದರವಿಠಲ ಜೋ ಜೋ ॥',
          meaning: {
            en: 'Lord who rides the Garuda, of endless glory, lotus-eyed, supremely pure; mighty master of all the hosts of gods, Panduranga, Purandara Vitthala. Jo jo.',
            kn: 'ಗರುಡವಾಹನನೇ, ಅನಂತಮಹಿಮನೇ, ಕಮಲನಯನನೇ, ಪರಮಪಾವನನೇ; ದೇವತೆಗಳ ಹಿಂಡಿಗೆ ಒಡೆಯನೇ, ಪ್ರತಾಪಶಾಲಿಯೇ, ಪಾಂಡುರಂಗನೇ, ಶ್ರೀ ಪುರಂದರವಿಠಲನೇ, ಜೋ ಜೋ.',
          },
        },
      ],
    },
  ],
};

export const dpNeeneDayalo: Mantra = {
  id: 'dasara-pada-neene-dayalo',
  title: 'ನೀನೆ ದಯಾಳೊ ನಿರ್ಮಲಚಿತ್ತ ಗೋವಿಂದ',
  titleEn: 'Purandara Dasa · Neene Dayalo Nirmalachitta Govinda',
  category: 'dasara-pada',
  order: 34,
  sourceScript: 'kannada',
  deity: 'Sri Govinda (Vishnu)',
  source: 'Purandara Dasa',
  summary: 'A song of surrender to Govinda, the only merciful lord for the singer, who asks him to protect him like a child, hearing his childish words with a smile.',
  summaryKn: 'ಗೋವಿಂದನೇ ತನಗೆ ಏಕೈಕ ದಯಾಳು ಎಂದು ಶರಣಾಗುವ ಹಾಡು; ಮಗುವಿನ ಮಾತೆಂದು ನಗುತ ಕೇಳಿ ತನ್ನನ್ನು ಬೇಗ ಕಾಯಬೇಕೆಂದು ಬೇಡುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ನೀನೆ ದಯಾಳೊ ನಿರ್ಮಲಚಿತ್ತ ಗೋವಿಂದ ।\nನಿಗಮಗೋಚರ ಮುಕುಂದ ॥',
          meaning: {
            en: 'You alone are merciful, Govinda of spotless heart, Mukunda whom the Vedas reveal.',
            kn: 'ನಿರ್ಮಲ ಮನಸ್ಸಿನ ಗೋವಿಂದನೇ, ನೀನೇ ದಯಾಳು; ವೇದಗಳಿಗೆ ಗೋಚರನಾದ ಮುಕುಂದನೇ.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಜ್ಞಾನಿಗಳರಸ ನೀನಲ್ಲದೆ ಜಗಕಿನ್ನು\nಮಾನದಿಂದಲಿ ಕಾವ ಧೊರೆಗಳ ನಾ ಕಾಣೆ ॥',
          meaning: {
            en: 'King of the wise, apart from you I see no other lord in the world who protects with honour.',
            kn: 'ಜ್ಞಾನಿಗಳ ಒಡೆಯನೇ, ನೀನಲ್ಲದೆ ಜಗತ್ತಿನಲ್ಲಿ ಗೌರವದಿಂದ ಕಾಯುವ ಬೇರೆ ಒಡೆಯನನ್ನು ನಾನು ಕಾಣೆ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ದಾನವಾಂತಕ ದೀನಜನಮಂದಾರನೆ\nಧ್ಯಾನಿಪರ ಮನಸಂಚಾರನೆ ।\nಮೌನವಾದೆನು ನಿನ್ನ ಧ್ಯಾನಾನಂದದಿ ಈಗ\nಸಾನುರಾಗದಿ ಕಾಯೊ ಸನಕಾದಿವಂದ್ಯನೆ ॥',
          meaning: {
            en: 'Destroyer of demons, wish-tree of the lowly, you who move in the minds of those who meditate: I have fallen silent in the joy of meditating on you. Protect me with affection, you whom Sanaka and the sages worship.',
            kn: 'ದಾನವರನ್ನು ಕೊನೆಗಾಣಿಸುವವನೇ, ದೀನರಿಗೆ ಕಲ್ಪವೃಕ್ಷವಾದವನೇ, ಧ್ಯಾನಿಸುವವರ ಮನಸ್ಸಿನಲ್ಲಿ ಸಂಚರಿಸುವವನೇ, ನಿನ್ನ ಧ್ಯಾನದ ಆನಂದದಲ್ಲಿ ನಾನೀಗ ಮೌನವಾದೆ. ಸನಕಾದಿಗಳಿಂದ ವಂದಿತನೇ, ಪ್ರೀತಿಯಿಂದ ಕಾಯೋ.',
          },
        },
        {
          n: 2,
          text: 'ಬಗೆ ಬಗೆಯಲಿ ನಿನ್ನ ತುತಿಪೆನೊ ನಗಧರ\nಖಗಪತಿವಾಹನನೆ ।\nಮಗುವಿನ ಮಾತೆಂದು ನಗುತ ಕೇಳಿ ನೀನು\nಬೇಗದಿಂದಲಿ ಕಾಯೊ ಸಾಗರಶಯನನೆ ॥',
          meaning: {
            en: 'I shall praise you in many ways, mountain-holder, rider of the king of birds. Hearing my words with a smile, as the babble of a child, protect me quickly, Lord who rests on the ocean.',
            kn: 'ಬಗೆಬಗೆಯಲ್ಲಿ ನಿನ್ನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ, ಗಿರಿಧರನೇ, ಗರುಡವಾಹನನೇ. ಮಗುವಿನ ಮಾತೆಂದು ನಗುತ್ತ ಕೇಳಿ ಬೇಗ ಕಾಯೋ, ಸಾಗರಶಯನನೇ.',
          },
        },
        {
          n: 3,
          text: 'ಮಂದರಧರ ಅರವಿಂದಲೋಚನ ನಿನ್ನ\nಕಂದನೆಂದೆಣಿಸೊ ಎನ್ನ ।\nಸಂದೇಹವೇಕಿನ್ನು ಸ್ವಾಮಿ ಮುಕುಂದನೆ\nಬಂದೆನ್ನ ಕಾಯೊ ಶ್ರೀಪುರಂದರವಿಠಲ ॥',
          meaning: {
            en: 'Bearer of Mount Mandara, lotus-eyed Lord, think of me as your own child. Why any more doubt, Lord Mukunda? Come and protect me, Sri Purandara Vitthala.',
            kn: 'ಮಂದರಗಿರಿಧರನೇ, ಕಮಲನಯನನೇ, ನನ್ನನ್ನು ನಿನ್ನ ಕಂದನೆಂದು ಎಣಿಸು. ಇನ್ನು ಸಂದೇಹವೇಕೆ, ಸ್ವಾಮಿ ಮುಕುಂದನೇ? ಬಂದು ನನ್ನನ್ನು ಕಾಯೋ, ಶ್ರೀ ಪುರಂದರವಿಠಲ.',
          },
        },
      ],
    },
  ],
};

export const dpNaMaadidaKarma: Mantra = {
  id: 'dasara-pada-na-maadida-karma',
  title: 'ನಾ ಮಾಡಿದ ಕರ್ಮ ಬಲವಂತವಾದರೆ',
  titleEn: 'Purandara Dasa · Na Maadida Karma Balavantavadare',
  category: 'dasara-pada',
  order: 35,
  sourceScript: 'kannada',
  deity: 'Sri Hari (Vishnu)',
  source: 'Purandara Dasa',
  summary: 'A confession: if my own deeds are stronger than your grace, Lord, what can you do? The singer admits his failings, asks for the company of your devotees, and says he sees no other protector than Purandara Vitthala.',
  summaryKn: 'ತಪ್ಪೊಪ್ಪಿಗೆಯ ಹಾಡು: “ನಾ ಮಾಡಿದ ಕರ್ಮವೇ ಬಲವಾದರೆ ನೀನು ಏನು ಮಾಡುವೆ ದೇವ?” ಎಂದು ತನ್ನ ದೋಷಗಳನ್ನು ಹೇಳಿಕೊಂಡು, ದಾಸರ ಸಂಗವನ್ನು ಕೊಟ್ಟು ಕಾಯಬೇಕೆಂದು ಪುರಂದರವಿಠಲನನ್ನು ಬೇಡುತ್ತಾನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ನಾ ಮಾಡಿದ ಕರ್ಮ ಬಲವಂತವಾದರೆ\nನೀ ಮಾಡುವದೇನೊ ದೇವ ॥',
          meaning: {
            en: 'If the karma I have made is strong, Lord, what can you do?',
            kn: 'ನಾನು ಮಾಡಿದ ಕರ್ಮವೇ ಬಲವಾದರೆ, ದೇವಾ, ನೀನು ಏನು ಮಾಡುವೆ?',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಸಾಮಾನ್ಯವಲ್ಲವಿದು ಬ್ರಹ್ಮ ಬರೆದ ಬರಹ\nನೇಮದಿಂದಲಿ ಎನ್ನ ಫಣೆಯಲಿ ಬರೆದುದಕೆ ॥',
          meaning: {
            en: 'This is no ordinary matter: it is what Brahma wrote, by the rule of fate, on my forehead.',
            kn: 'ಇದು ಸಾಮಾನ್ಯವಲ್ಲ; ಬ್ರಹ್ಮನು ನಿಯಮದಂತೆ ನನ್ನ ಹಣೆಯಲ್ಲಿ ಬರೆದ ಬರಹ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಅತಿಥಿಗಳಿಗೆ ಅನ್ನ ಕೊಟ್ಟವನಲ್ಲ ಪರ-\nಸತಿಯರ ಸಂಗಗಳ ಬಿಟ್ಟವನಲ್ಲ ।\nಮತಿಹೀನ ನಾನಾಗಿ ಮರುಳಾಗಿದ್ದೆನೊ ದೇವ\nಗತಿ ಯಾವುದಿನ್ನು ಗರುಡಗಮನ ಕೃಷ್ಣ ॥',
          meaning: {
            en: 'I never fed guests, and I never gave up the company of other men’s wives. Senseless, I went mad, Lord; what refuge is left now, Krishna who rides Garuda?',
            kn: 'ಅತಿಥಿಗಳಿಗೆ ಅನ್ನ ಕೊಟ್ಟವನಲ್ಲ; ಪರಸತಿಯರ ಸಂಗವನ್ನು ಬಿಟ್ಟವನಲ್ಲ. ಬುದ್ಧಿಹೀನನಾಗಿ ಮರುಳನಾದೆ, ದೇವಾ; ಇನ್ನು ನನಗೆ ಗತಿ ಯಾವುದು, ಗರುಡಗಮನ ಕೃಷ್ಣ?',
          },
        },
        {
          n: 2,
          text: 'ಅನ್ನಪಾನಂಗಳಿಗೆ ಅಗ್ರಗಣ್ಯನಾಗಿ\nಸ್ನಾನ ಜಪ ಸಂಧ್ಯಾನ ತಪವ ನೀಗಿ ।\nದಾನವಾಂತಕ ನಿನ್ನ ಧ್ಯಾನವ ಮಾಡದೆ\nಶ್ವಾನನಂತೆ ಮನೆಮನೆಯ ತಿರುಗುತಲಿದ್ದೆ ॥',
          meaning: {
            en: 'First in line for food and drink, I gave up bathing, japa, sandhya and austerity. Without meditating on you, destroyer of demons, I wandered from house to house like a dog.',
            kn: 'ಅನ್ನಪಾನಗಳಿಗೆ ಮೊದಲಿಗನಾಗಿ, ಸ್ನಾನ, ಜಪ, ಸಂಧ್ಯಾವಂದನೆ, ತಪಸ್ಸುಗಳನ್ನು ಬಿಟ್ಟು, ದಾನವಾಂತಕನೇ, ನಿನ್ನ ಧ್ಯಾನ ಮಾಡದೆ ನಾಯಿಯಂತೆ ಮನೆಮನೆ ತಿರುಗುತ್ತಿದ್ದೆ.',
          },
        },
        {
          n: 3,
          text: 'ಇನ್ನಾದರು ನಿನ್ನ ದಾಸರ ಸಂಗವಿತ್ತು\nಮನ್ನಿಸಿ ಸಲಹಯ್ಯ ಮನ್ಮಥಜನಕ ।\nಅನ್ಯರೊಬ್ಬರ ಕಾಣೆ ಆದರಿಸುವರಿಲ್ಲ\nಪನ್ನಂಗಶಯನ ಶ್ರೀ ಪುರಂದರವಿಠಲ ॥',
          meaning: {
            en: 'Now at least grant me the company of your devotees; forgive and protect me, father of Manmatha. I see no one else; there is none to care for me, Lord who rests on the serpent, Sri Purandara Vitthala.',
            kn: 'ಈಗಲಾದರೂ ನಿನ್ನ ದಾಸರ ಸಂಗವನ್ನು ಕೊಟ್ಟು ಮನ್ನಿಸಿ ಸಲಹಯ್ಯ, ಮನ್ಮಥನ ತಂದೆಯೇ. ಬೇರೆ ಯಾರನ್ನೂ ಕಾಣೆ, ಆದರಿಸುವವರಿಲ್ಲ, ಶೇಷಶಯನನೇ, ಶ್ರೀ ಪುರಂದರವಿಠಲ.',
          },
        },
      ],
    },
  ],
};

export const dpPalisemmaMudduSharade: Mantra = {
  id: 'dasara-pada-palisemma-muddu-sharade',
  title: 'ಪಾಲಿಸೆಮ್ಮ ಮುದ್ದು ಶಾರದೆ',
  titleEn: 'Purandara Dasa · Palisemma Muddu Sharade',
  category: 'dasara-pada',
  order: 36,
  sourceScript: 'kannada',
  deity: 'Sri Sharada (Sarasvati)',
  source: 'Purandara Dasa',
  summary: 'A prayer to Sharada, the beloved goddess of speech, asking her to dwell on the singer’s tongue; she holds the fourteen worlds in her womb, lives at Shringeri and delights in music.',
  summaryKn: 'ವಾಗ್ದೇವಿ ಮುದ್ದು ಶಾರದೆಯನ್ನು ತನ್ನ ನಾಲಿಗೆಯಲ್ಲಿ ನೆಲೆಸಲು ಬೇಡುವ ಹಾಡು; ಹದಿನಾಲ್ಕು ಲೋಕಗಳನ್ನು ಉದರದಲ್ಲಿ ಧರಿಸಿದ, ಶೃಂಗಾರಪುರವಾಸಿನಿ, ಸಂಗೀತಪ್ರಿಯೆಯ ಸ್ತುತಿ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಪಾಲಿಸೆಮ್ಮ ಮುದ್ದು ಶಾರದೆ ಎನ್ನ\nನಾಲಿಗೆಯಲಿ ನಿಲ್ಲಬಾರದೆ ॥',
          meaning: {
            en: 'Protect us, dear Sharada; will you not stay on my tongue?',
            kn: 'ಮುದ್ದು ಶಾರದೆಯೇ, ನಮ್ಮನ್ನು ಪಾಲಿಸು; ನನ್ನ ನಾಲಿಗೆಯಲ್ಲಿ ನೆಲೆಸಬಾರದೆ?',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಲೋಲಲೋಚನೆ ತಾಯೆ ನಿರುತ ನಂಬಿದೆ ನಿನ್ನ ॥',
          meaning: {
            en: 'Mother with tender eyes, I have always trusted you.',
            kn: 'ಚಂಚಲ ಕಣ್ಣುಗಳ ತಾಯೇ, ಯಾವಾಗಲೂ ನಿನ್ನನ್ನೇ ನಂಬಿದ್ದೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಅಕ್ಷರಕ್ಷರ ವಿವೇಕದ ನಿನ್ನ\nಕುಕ್ಷಿಯೊಳೀರೇಳು ಲೋಕವ ।\nಸಾಕ್ಷಾತ್ ರೂಪದಿಂದ\nಒಲಿದು ರಕ್ಷಿಸು ತಾಯೆ ॥',
          meaning: {
            en: 'You hold the fourteen worlds in your womb, with the discernment of every letter. Come in person and, in your favour, protect me, Mother.',
            kn: 'ಪ್ರತಿ ಅಕ್ಷರದ ವಿವೇಕವನ್ನು ಕರುಣಿಸುವ ನಿನ್ನ ಉದರದಲ್ಲಿ ಹದಿನಾಲ್ಕು ಲೋಕಗಳಿವೆ. ಸಾಕ್ಷಾತ್ ರೂಪದಿಂದ ಒಲಿದು ರಕ್ಷಿಸು, ತಾಯೇ.',
          },
        },
        {
          n: 2,
          text: 'ಶೃಂಗಾರಪುರ ನೆಲೆವಾಸಿನೀ ದೇವಿ\nಸಂಗೀತಗಾನ ವಿಲಾಸಿನೀ ।\nಮಂಗಳಗಾತ್ರಳೆ ಭಳಿರೆ ಬ್ರಹ್ಮನ ರಾಣಿ ॥',
          meaning: {
            en: 'Goddess who dwells in Shringarapura, who delights in song and music, auspicious of form, wonderful queen of Brahma.',
            kn: 'ಶೃಂಗಾರಪುರದಲ್ಲಿ ನೆಲೆಸಿದ ದೇವಿಯೇ, ಸಂಗೀತಗಾನದಲ್ಲಿ ವಿಲಾಸಿನಿಯೇ, ಮಂಗಳಮೂರ್ತಿಯೇ, ಭಳಿರೇ ಬ್ರಹ್ಮನ ರಾಣಿಯೇ.',
          },
        },
        {
          n: 3,
          text: 'ಸರ್ವಾಲಂಕಾರ ದಯಾಮೂರುತಿ ನಿನ್ನ\nಚರಣವ ಸ್ತುತಿಸುವೆ ಕೀರುತಿ ।\nಗುರುಮೂರ್ತಿ ಪುರಂದರವಿಠಲನ್ನ ಸ್ತುತಿಸುವೆ ॥',
          meaning: {
            en: 'Adorned in every way, embodiment of compassion, I praise your feet and your fame. I praise Purandara Vitthala, the Guru.',
            kn: 'ಸರ್ವಾಲಂಕಾರಭೂಷಿತೆಯೇ, ದಯಾಮೂರ್ತಿಯೇ, ನಿನ್ನ ಚರಣವನ್ನೂ ಕೀರ್ತಿಯನ್ನೂ ಸ್ತುತಿಸುತ್ತೇನೆ; ಗುರುಮೂರ್ತಿ ಪುರಂದರವಿಠಲನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
  ],
};

export const dpJayaMangalamNitya: Mantra = {
  id: 'dasara-pada-jaya-mangalam-nitya',
  title: 'ಜಯಮಂಗಳಂ ನಿತ್ಯ ಶುಭಮಂಗಳಂ',
  titleEn: 'Purandara Dasa · Jaya Mangalam Nitya Shubha Mangalam',
  category: 'dasara-pada',
  order: 37,
  sourceScript: 'kannada',
  deity: 'Sri Krishna (Udupi)',
  source: 'Purandara Dasa',
  summary: 'A mangalarati song sung at the close of worship: auspiciousness to the lotus-eyed Krishna of Udupi, the butter thief, rescuer of the elephant, who bears the Kaustubha jewel and protects his devotees.',
  summaryKn: 'ಪೂಜೆಯ ಕೊನೆಯಲ್ಲಿ ಹಾಡುವ ಮಂಗಳಾರತಿ ಪದ: ಕಮಲನಯನ, ಬೆಣ್ಣೆಕಳ್ಳ, ಗಜರಾಜವರದ, ಕೌಸ್ತುಭಧಾರಿ ಉಡುಪಿಯ ಕೃಷ್ಣನಿಗೆ, ದಾಸರನ್ನು ಕಾಯ್ದ ರುಕ್ಮಿಣಿರಮಣನಿಗೆ ಮಂಗಳವಾಗಲಿ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಜಯಮಂಗಳಂ ನಿತ್ಯ ಶುಭಮಂಗಳಂ ॥',
          meaning: {
            en: 'Victory and auspiciousness, ever-auspicious blessings.',
            kn: 'ಜಯವಾಗಲಿ, ಮಂಗಳವಾಗಲಿ; ನಿತ್ಯವೂ ಶುಭಮಂಗಳವಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಇಂದೀವರಾಕ್ಷಗೆ ಇಭರಾಜವರದಗೆ\nಇಂದಿರಾರಮಣ ಗೋವಿಂದ ಹರಿಗೆ ।\nನಂದನ ಕಂದಗೆ ನವನೀತ ಚೋರಗೆ\nವೃಂದಾರಕೇಂದ್ರ ಉಡುಪಿಯ ಕೃಷ್ಣಗೆ ॥',
          meaning: {
            en: 'Blessings to the lotus-eyed one, giver of grace to the king of elephants, Hari Govinda, Lord of Lakshmi; to the child of Nanda, the butter thief, Krishna of Udupi, chief of the gods.',
            kn: 'ನೀಲಕಮಲನಯನನಿಗೆ, ಗಜರಾಜವರದನಿಗೆ, ಇಂದಿರಾರಮಣ ಗೋವಿಂದ ಹರಿಗೆ; ನಂದನ ಕಂದನಿಗೆ, ಬೆಣ್ಣೆಕಳ್ಳನಿಗೆ, ದೇವೇಂದ್ರನಾದ ಉಡುಪಿಯ ಕೃಷ್ಣನಿಗೆ ಮಂಗಳ.',
          },
        },
        {
          n: 2,
          text: 'ಕ್ಷೀರಾಬ್ಧಿವಾಸಗೆ ಕ್ಷಿತಿಜನ ಪಾಲಗೆ\nಮಾರನನು ಪಡೆದ ಮಂಗಲಮೂರ್ತಿಗೆ ।\nಚಾರುಚರಣದಿಂದ ಚೆಲುವ ಗಂಗೆಯ ಪಡೆದ\nಕಾರುಣ್ಯಮೂರ್ತಿ ಕೌಸ್ತುಭಧಾರಿಗೆ ॥',
          meaning: {
            en: 'Blessings to him who dwells in the ocean of milk and protects the earth’s people; to the auspicious one who fathered Manmatha; to the merciful one who bears the Kaustubha, from whose beautiful feet the lovely Ganga sprang.',
            kn: 'ಕ್ಷೀರಸಾಗರವಾಸಿಗೆ, ಭೂಮಿಯ ಜನರನ್ನು ಪಾಲಿಸುವವನಿಗೆ, ಮನ್ಮಥನನ್ನು ಪಡೆದ ಮಂಗಳಮೂರ್ತಿಗೆ; ಸುಂದರ ಪಾದಗಳಿಂದ ಗಂಗೆಯನ್ನು ಹುಟ್ಟಿಸಿದ ಕರುಣಾಮೂರ್ತಿ, ಕೌಸ್ತುಭಧಾರಿಗೆ ಮಂಗಳ.',
          },
        },
        {
          n: 3,
          text: 'ವ್ಯಾಸಾವತಾರಗೆ ವೇದ ಉದ್ಧಾರಗೆ\nವಾಸಿತಾನಂತಪದ ಸಕಲೇಶಗೆ ।\nವಾಸುದೇವಮೂರ್ತಿ ಪುರಂದರವಿಠಲಗೆ\nದಾಸರನು ಕಾಯ್ದ ರುಕ್ಮಿಣಿರಮಣಗೆ ॥',
          meaning: {
            en: 'Blessings to him who came as Vyasa and rescued the Vedas, to the Lord of all whose endless feet are fragrant; to Vasudeva, Purandara Vitthala, husband of Rukmini, who protects his devotees.',
            kn: 'ವ್ಯಾಸಾವತಾರನಿಗೆ, ವೇದೋದ್ಧಾರಕನಿಗೆ, ಅನಂತ ಪದಗಳ ಸುವಾಸನೆಯುಳ್ಳ ಸಕಲೇಶನಿಗೆ; ವಾಸುದೇವಮೂರ್ತಿ ಪುರಂದರವಿಠಲನಿಗೆ, ದಾಸರನ್ನು ಕಾಯ್ದ ರುಕ್ಮಿಣಿರಮಣನಿಗೆ ಮಂಗಳ.',
          },
        },
      ],
    },
  ],
};

export const dpMandagamaneIvanare: Mantra = {
  id: 'dasara-pada-mandagamane-ivanare',
  title: 'ಮಂದಗಮನೆ ಇವನಾರೆ ಪೇಳಮ್ಮ',
  titleEn: 'Purandara Dasa · Mandagamane Ivanare Pelamma',
  category: 'dasara-pada',
  order: 38,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A song in the form of questions and answers between two women: “Who is this, tell me?” “This is Govinda, the lifter of the mountain”, describing Krishna’s anklets, yellow garment, ornaments, weapons and face, and ending: “Rambha, he is Purandara Vitthala, the family man of his devotees.”',
  summaryKn: 'ಇಬ್ಬರು ಸ್ತ್ರೀಯರ ಪ್ರಶ್ನೋತ್ತರ ರೂಪದ ಹಾಡು: “ಇವನಾರು ಹೇಳಮ್ಮ?” – “ಇವನೇ ಗೋವಿಂದ, ನೋಡು”; ಕೃಷ್ಣನ ಅಂದುಗೆ, ಪೀತಾಂಬರ, ಆಭರಣ, ಶಂಖಚಕ್ರ, ಮುಖವನ್ನು ವರ್ಣಿಸಿ, ಕೊನೆಗೆ “ಭಕ್ತರ ಕುಟುಂಬಿ ಪುರಂದರವಿಠಲ” ಎಂದು ಮುಗಿಯುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಮಂದಗಮನೆ ಇವನಾರೆ ಪೇಳಮ್ಮ\nಮಂದರಧರ ಗೋವಿಂದ ಕಾಣಮ್ಮ ॥',
          meaning: {
            en: '“Slow-gaited lady, who is this? Tell me.” “Look, this is Govinda, the bearer of Mount Mandara.”',
            kn: '“ಮಂದಗಮನೆಯೇ, ಇವನಾರು ಹೇಳಮ್ಮ?” “ಮಂದರಗಿರಿಧರ ಗೋವಿಂದನೇ ಇವನು, ನೋಡಮ್ಮ.”',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಕೆಂದಳಿರು ನಖ ಶಶಿಬಿಂಬ ಪದಪದ್ಮ\nಅಂದುಗೆ ಇಟ್ಟವನಾರೆ ಪೇಳಮ್ಮ ।\nಅಂದು ಕಾಳಿಂಗನ ಹೆಡೆಯ ತುಳಿದ ದಿಟ್ಟ\nನಂದನ ಕಂದ ಮುಕುಂದ ಕಾಣಮ್ಮ ॥',
          meaning: {
            en: '“Who is this with feet like lotuses, nails like moon discs, wearing anklets?” “He is the bold one who trampled Kaliya’s hoods, the child of Nanda, Mukunda.”',
            kn: '“ಕೆಂದಳಿರಿನಂತಹ ಪಾದಪದ್ಮ, ಚಂದ್ರಬಿಂಬದಂತಹ ಉಗುರು, ಅಂದುಗೆ ಇಟ್ಟ ಇವನಾರು?” “ಅಂದು ಕಾಳಿಂಗನ ಹೆಡೆಯನ್ನು ತುಳಿದ ದಿಟ್ಟ, ನಂದನ ಕಂದ ಮುಕುಂದನೇ ಇವನು.”',
          },
        },
        {
          n: 2,
          text: 'ಉಡುಗೆ ಪೀತಾಂಬರ ನಡುಗೆ ಹೊನ್ನುಡದಾರ\nಕಡಗ ಕಂಕಣವಿಟ್ಟವನಾರಮ್ಮ ।\nಮಡದಿ ಕೇಳ್ ಸಕಲ ಲೋಕಂಗಳ ಕುಕ್ಷಿಯೊ-\nಳೊಡನೆ ತೋರಿದ ಜಗದೊಡೆಯ ಕಾಣಮ್ಮ ॥',
          meaning: {
            en: '“Who is this in a yellow garment, golden girdle, bracelets and bangles?” “Listen, lady: he is the Lord of the world who showed all the worlds together in his belly.”',
            kn: '“ಪೀತಾಂಬರ ಉಟ್ಟು, ನಡುವಿಗೆ ಹೊನ್ನ ಉಡದಾರ, ಕಡಗ ಕಂಕಣ ತೊಟ್ಟ ಇವನಾರಮ್ಮ?” “ಕೇಳು ಮಡದಿ, ಸಕಲ ಲೋಕಗಳನ್ನೂ ತನ್ನ ಉದರದಲ್ಲಿ ಒಟ್ಟಿಗೆ ತೋರಿಸಿದ ಜಗದೊಡೆಯನೇ ಇವನು.”',
          },
        },
        {
          n: 3,
          text: 'ನೀರದ ನೀಲದಂತೆಸೆವ ವಕ್ಷದಿ ಕೇ-\nಯೂರ ಹಾರನಿಟ್ಟವನಾರಮ್ಮ ।\nನೀರೆ ಕೇಳು ನಿರ್ಜರರಾದವರಿಗೆ\nಪ್ರೇರಿಸಿ ಫಲವಿತ್ತುದಾರಿ ಕಾಣಮ್ಮ ॥',
          meaning: {
            en: '“Who is this, with a chest dark as a rain-cloud or sapphire, wearing armlets and garlands?” “Listen, lady: he is the one who inspires the gods and gives them their reward.”',
            kn: '“ಮೋಡ, ನೀಲಮಣಿಯಂತೆ ಹೊಳೆಯುವ ಎದೆಯಲ್ಲಿ ತೋಳಬಂದಿ, ಹಾರ ಧರಿಸಿದ ಇವನಾರಮ್ಮ?” “ಕೇಳು ನೀರೆ, ದೇವತೆಗಳಿಗೆ ಪ್ರೇರಣೆ ನೀಡಿ ಫಲವನ್ನು ಕೊಡುವವನೇ ಇವನು.”',
          },
        },
        {
          n: 4,
          text: 'ಶಂಖ ಚಕ್ರವು ಗದೆ ಪದ್ಮ ಕೈಯೊಳಗಿಟ್ಟ-\nಲಂಕರಿಸುವನೀತನಾರಮ್ಮ ।\nಪಂಕಜಮುಖಿ ಶ್ರೀ ಭೂದೇವಿಯರಸನು\nಶಂಕೆಯಿಲ್ಲದೆ ಗೋಪಿತನಯ ಕಾಣಮ್ಮ ॥',
          meaning: {
            en: '“Who is this who adorns himself with conch, discus, mace and lotus in his hands?” “Without doubt, lotus-faced lady, he is the husband of Sri and Bhudevi, the son of the gopi.”',
            kn: '“ಶಂಖ, ಚಕ್ರ, ಗದೆ, ಪದ್ಮಗಳನ್ನು ಕೈಯಲ್ಲಿ ಧರಿಸಿ ಅಲಂಕರಿಸಿಕೊಂಡ ಇವನಾರಮ್ಮ?” “ಕಮಲಮುಖಿಯೇ, ಶ್ರೀ ಮತ್ತು ಭೂದೇವಿಯರ ಒಡೆಯನೇ, ಸಂಶಯವಿಲ್ಲದೆ ಗೋಪಿಯ ಮಗನೇ ಇವನು.”',
          },
        },
        {
          n: 5,
          text: 'ಕಂಬುಕಂಧರ ಕರ್ಣಾಲಂಬಿತಕುಂಡಲ\nಅಂಬುಜ ಮುಖದವನಾರೆ ಪೇಳಮ್ಮ ।\nರಂಭೆ ಕೇಳೀತ ಪುರಂದರವಿಟ್ಠಲ\nನಂಬಿದ ಭಕ್ತಕುಟುಂಬಿ ಕಾಣಮ್ಮ ॥',
          meaning: {
            en: '“Who is this with a conch-like neck, earrings hanging from his ears, and a lotus face?” “Listen, Rambha: he is Purandara Vitthala, the family man of the devotees who trust him.”',
            kn: '“ಶಂಖದಂತಹ ಕತ್ತು, ಕಿವಿಗೆ ಜೋಲುವ ಕುಂಡಲ, ಕಮಲದಂತಹ ಮುಖದ ಇವನಾರೆ ಹೇಳಮ್ಮ?” “ಕೇಳು ರಂಭೆ, ನಂಬಿದ ಭಕ್ತರ ಕುಟುಂಬಿಯಾದ ಪುರಂದರವಿಠಲನೇ ಇವನು.”',
          },
        },
      ],
    },
  ],
};

export const dpNarasimhanaPadaBhajaneya: Mantra = {
  id: 'dasara-pada-narasimhana-pada-bhajaneya',
  title: 'ನರಸಿಂಹನ ಪಾದ ಭಜನೆಯ ಮಾಡೋ',
  titleEn: 'Purandara Dasa · Narasimhana Pada Bhajaneya Maado',
  category: 'dasara-pada',
  order: 39,
  sourceScript: 'kannada',
  deity: 'Sri Narasimha',
  source: 'Purandara Dasa',
  summary: 'A song urging the mind to worship the feet of Narasimha, which break the mountain of sin like a thunderbolt; it recalls how he came from the pillar at Prahlada’s cry and wore the demon’s entrails as a garland.',
  summaryKn: 'ನರಸಿಂಹನ ಪಾದಗಳನ್ನು ಭಜಿಸೆಂದು ಹೇಳುವ ಹಾಡು; ಅವು ಪಾಪದ ಬೆಟ್ಟವನ್ನು ವಜ್ರದಂತೆ ಪುಡಿಮಾಡುತ್ತವೆ. ಪ್ರಹ್ಲಾದನ ಮೊರೆಗೆ ಕಂಭದಿಂದ ಬಂದು ದುರುಳನ ಕರುಳನ್ನು ಕೊರಳಲ್ಲಿ ಧರಿಸಿದ ಲೀಲೆಯನ್ನು ನೆನೆಯುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ನರಸಿಂಹನ ಪಾದ ಭಜನೆಯ ಮಾಡೋ ॥',
          meaning: {
            en: 'Worship the feet of Narasimha.',
            kn: 'ನರಸಿಂಹನ ಪಾದಗಳ ಭಜನೆಯನ್ನು ಮಾಡು.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ನರಸಿಂಹನ ಪಾದ ಭಜನೆಯ ಮಾಡಲು\nದುರಿತ ಪರ್ವತವ ಖಂಡಿಸುವ ಕುಲಿಶದಂತೆ ॥',
          meaning: {
            en: 'Worshipping Narasimha’s feet shatters the mountain of sin like a thunderbolt.',
            kn: 'ನರಸಿಂಹನ ಪಾದಗಳನ್ನು ಭಜಿಸಿದರೆ ಅದು ಪಾಪದ ಪರ್ವತವನ್ನು ವಜ್ರದಂತೆ ಒಡೆದುಹಾಕುತ್ತದೆ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ತರಳನ ಮೊರೆ ಕೇಳಿ ತವಕದಿಂದಲಿ ಬಂದು\nದುರುಳನ ಕರುಳನು ತನ್ನ ಕೊರಳಲಿ ಧರಿಸಿದ ॥',
          meaning: {
            en: 'Hearing the child’s cry, he came in haste and wore the wicked one’s entrails around his neck.',
            kn: 'ಬಾಲಕನ ಮೊರೆಯನ್ನು ಕೇಳಿ ತವಕದಿಂದ ಬಂದು ದುರುಳನ ಕರುಳನ್ನು ತನ್ನ ಕೊರಳಲ್ಲಿ ಧರಿಸಿದವನ (ಪಾದ ಭಜಿಸು).',
          },
        },
        {
          n: 2,
          text: 'ಸುರರೆಲ್ಲ ನಡುಗಲು ಸಿರಿದೇವಿ ಮೊರೆಯಿಡೆ\nವರ ಕಂಭದಿಂದ ಬಂದ ವೈಕುಂಠಪತಿ ನಮ್ಮ ॥',
          meaning: {
            en: 'When the gods trembled and Lakshmi cried out, our Lord of Vaikuntha came out of the fine pillar.',
            kn: 'ದೇವತೆಗಳೆಲ್ಲ ನಡುಗಲು, ಲಕ್ಷ್ಮೀದೇವಿ ಮೊರೆಯಿಡಲು, ಶ್ರೇಷ್ಠ ಕಂಭದಿಂದ ಬಂದ ನಮ್ಮ ವೈಕುಂಠಪತಿಯ (ಪಾದ ಭಜಿಸು).',
          },
        },
        {
          n: 3,
          text: 'ಹರವಿರಿಂಚಾದಿಗಳು ಕರವೆತ್ತಿ ಮುಗಿಯಲು\nಪರಮ ಶಾಂತನಾದ ಪುರಂದರವಿಠಲ ॥',
          meaning: {
            en: 'When Shiva, Brahma and the others raised their hands in worship, he became calm: Purandara Vitthala.',
            kn: 'ಹರ, ವಿರಿಂಚಿ ಮೊದಲಾದವರು ಕೈ ಎತ್ತಿ ಮುಗಿಯಲು ಪರಮಶಾಂತನಾದ ಪುರಂದರವಿಠಲನ (ಪಾದ ಭಜಿಸು).',
          },
        },
      ],
    },
  ],
};

export const dpDevakiKandaMukunda: Mantra = {
  id: 'dasara-pada-devaki-kanda-mukunda',
  title: 'ದೇವಕಿ ಕಂದ ಮುಕುಂದ',
  titleEn: 'Purandara Dasa · Devaki Kanda Mukunda',
  category: 'dasara-pada',
  order: 40,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A short litany of Krishna’s names and qualities in rhyming couplets: child of Devaki, butter thief, rider of Garuda, holder of conch and discus, husband of Rukmini, protector of the Pandavas, ending with Purandara Vitthala.',
  summaryKn: 'ಕೃಷ್ಣನ ಹೆಸರು, ಗುಣಗಳನ್ನು ಪ್ರಾಸದ ಜೋಡಿ ಸಾಲುಗಳಲ್ಲಿ ಹೇಳುವ ಚಿಕ್ಕ ಹಾಡು: ದೇವಕಿಕಂದ, ನವನೀತಚೋರ, ಗರುಡವಾಹನ, ಶಂಖಚಕ್ರಧರ, ರುಕ್ಮಿಣೀವಲ್ಲಭ, ಪಾಂಡವಪೋಷಕ, ಕೊನೆಗೆ ಪುರಂದರವಿಠಲ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ದೇವಕಿ ಕಂದ ಮುಕುಂದ ॥',
          meaning: {
            en: 'Mukunda, child of Devaki.',
            kn: 'ದೇವಕಿಯ ಕಂದನೇ, ಮುಕುಂದನೇ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ನಿಗಮೋದ್ಧಾರ ನವನೀತ ಚೋರ\nಖಗಪತಿ ವಾಹನ ಜಗದೋದ್ಧಾರ ॥',
          meaning: {
            en: 'Rescuer of the Vedas, butter thief, rider of the king of birds, uplifter of the world.',
            kn: 'ವೇದಗಳನ್ನು ಉದ್ಧರಿಸಿದವನೇ, ಬೆಣ್ಣೆಕಳ್ಳನೇ, ಗರುಡವಾಹನನೇ, ಜಗತ್ತನ್ನು ಉದ್ಧರಿಸುವವನೇ.',
          },
        },
        {
          n: 2,
          text: 'ಶಂಖ ಚಕ್ರಧರ ಶ್ರೀ ಗೋವಿಂದ\nಪಂಕಜಲೋಚನ ಪರಮಾನಂದ ॥',
          meaning: {
            en: 'Holder of conch and discus, Sri Govinda, lotus-eyed, supreme bliss.',
            kn: 'ಶಂಖಚಕ್ರಧರನೇ, ಶ್ರೀ ಗೋವಿಂದನೇ, ಕಮಲನಯನನೇ, ಪರಮಾನಂದನೇ.',
          },
        },
        {
          n: 3,
          text: 'ಮಕರಕುಂಡಲಧರ ಮೋಹನವೇಷ\nರುಕುಮಿಣಿ ವಲ್ಲಭ ಪಾಂಡವ ಪೋಷ ॥',
          meaning: {
            en: 'Wearer of shark-shaped earrings, of enchanting form, beloved of Rukmini, protector of the Pandavas.',
            kn: 'ಮಕರಕುಂಡಲಧಾರಿಯೇ, ಮೋಹನವೇಷನೇ, ರುಕ್ಮಿಣೀವಲ್ಲಭನೇ, ಪಾಂಡವಪೋಷಕನೇ.',
          },
        },
        {
          n: 4,
          text: 'ಕಂಸಮರ್ದನ ಕೌಸ್ತುಭಾಭರಣ\nಹಂಸವಾಹನ ಪೂಜಿತ ಚರಣ ॥',
          meaning: {
            en: 'Crusher of Kamsa, wearer of the Kaustubha jewel, whose feet are worshipped by Brahma.',
            kn: 'ಕಂಸನನ್ನು ಮರ್ದಿಸಿದವನೇ, ಕೌಸ್ತುಭಾಭರಣನೇ, ಬ್ರಹ್ಮನಿಂದ ಪೂಜಿತ ಚರಣನೇ.',
          },
        },
        {
          n: 5,
          text: 'ವರ ವೇಲಾಪುರ ಚೆನ್ನಪ್ರಸನ್ನ\nಪುರಂದರವಿಠಲ ಸಕಲ ಗುಣಪೂರ್ಣ ॥',
          meaning: {
            en: 'Gracious Channa Prasanna of holy Velapura, Purandara Vitthala, full of all virtues.',
            kn: 'ಶ್ರೇಷ್ಠ ವೇಲಾಪುರದ ಚೆನ್ನಪ್ರಸನ್ನನೇ, ಸರ್ವಗುಣಪೂರ್ಣನಾದ ಪುರಂದರವಿಠಲನೇ.',
          },
        },
      ],
    },
  ],
};

export const dpEnuBaredeBrahma: Mantra = {
  id: 'dasara-pada-enu-barede-brahma',
  title: 'ಏನು ಬರೆದೆಯೊ ಬ್ರಹ್ಮ ನೀನೆಷ್ಟು ನಿರ್ದಯನೊ',
  titleEn: 'Purandara Dasa · Enu Barede Brahma',
  category: 'dasara-pada',
  order: 41,
  sourceScript: 'kannada',
  deity: 'Sri Krishna (Udupi)',
  source: 'Purandara Dasa',
  summary: 'A complaint to Brahma, the writer of fate: what have you written, how cruel you are, that I must give up self-respect and beg from others, wait at rich men’s doors and be turned away; yet the singer asks Krishna of Udupi to protect those who will be born in his line.',
  summaryKn: 'ವಿಧಿ ಬರೆಯುವ ಬ್ರಹ್ಮನಿಗೆ ಮೊರೆ: “ಏನು ಬರೆದೆಯೋ, ಎಷ್ಟು ನಿರ್ದಯನೋ! ಅಭಿಮಾನ ತೊರೆದು ಪರರನ್ನು ಬೇಡುವಂತೆ, ಬಲ್ಲಿದರ ಬಾಗಿಲು ಕಾಯುವಂತೆ ಮಾಡಿದೆ.” ಕೊನೆಗೆ ಉಡುಪಿಯ ಕೃಷ್ಣನನ್ನು ತನ್ನ ವಂಶದವರನ್ನು ಕಾಯಬೇಕೆಂದು ಬೇಡುತ್ತಾನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಏನು ಬರೆದೆಯೊ ಬ್ರಹ್ಮ ನೀನೆಷ್ಟು ನಿರ್ದಯನೊ ॥',
          meaning: {
            en: 'What have you written, Brahma? How cruel you are!',
            kn: 'ಬ್ರಹ್ಮನೇ, ಏನು ಬರೆದೆಯೋ! ನೀನೆಷ್ಟು ನಿರ್ದಯನೋ!',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಅಭಿಮಾನವನು ತೊರೆದು ಪರರನ್ನು ಬೇಡುವುದ ॥',
          meaning: {
            en: 'Giving up self-respect and begging from others.',
            kn: 'ಅಭಿಮಾನವನ್ನು ತೊರೆದು ಪರರನ್ನು ಬೇಡುವಂತೆ (ಬರೆದೆಯಲ್ಲ).',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಗೇಣೊಡಲು ಪೊರೆವುದಕೆ ಪೋಗಿ ಪರರನು ಪಂಚ-\nಬಾಣಸಮ ರೂಪ ನೀನೆಂದು ಪೊಗಳೆ ।\nಆಣೆ ನಿನ್ನಾಣಿಲ್ಲ ನಾಳೆ ಬಾರೆಂದೆನಲು\nಗಾಣ ತಿರುಗುವ ಎತ್ತಿನಂತೆ ಬಳಲುವುದ ॥',
          meaning: {
            en: 'To feed this span-long belly I go to others and praise them as handsome as Manmatha; they say “I swear I have nothing, come tomorrow”, and I toil like an ox turning the oil press.',
            kn: 'ಗೇಣುದ್ದದ ಹೊಟ್ಟೆಯನ್ನು ಪೊರೆಯಲು ಪರರ ಬಳಿಗೆ ಹೋಗಿ “ನೀನು ಮನ್ಮಥನಂತೆ ಸುಂದರ” ಎಂದು ಹೊಗಳಿದರೆ, “ಆಣೆ, ಇಲ್ಲ, ನಾಳೆ ಬಾ” ಎನ್ನುತ್ತಾರೆ; ಗಾಣದ ಎತ್ತಿನಂತೆ ಬಳಲುವಂತೆ (ಬರೆದೆಯಲ್ಲ).',
          },
        },
        {
          n: 2,
          text: 'ಬಲ್ಲಿದರ ಮನೆಯ ಬಾಗಿಲ ಕಾಯ್ದು ಬೇಸತ್ತು\nಸೊಲ್ಲು ಸೊಲ್ಲಿಗೆ ಅವರ ಕೊಂಡಾಡುತ ।\nಇಲ್ಲ ಈ ವೇಳೆಯಲಿ ತಿರುಗಿ ಬಾರೆಂದೆನಲು\nಅಲ್ಲವನು ತಿಂದ ಇಲಿಯಂತೆ ಕೊರಗುವುದ ॥',
          meaning: {
            en: 'Waiting wearily at the doors of the powerful, praising them at every word; when they say “Not now, come back later”, I pine like a rat that has eaten ginger.',
            kn: 'ಬಲ್ಲಿದರ ಮನೆಯ ಬಾಗಿಲು ಕಾದು ಬೇಸತ್ತು, ಮಾತುಮಾತಿಗೂ ಅವರನ್ನು ಹೊಗಳುತ್ತ, “ಈಗ ಇಲ್ಲ, ಮತ್ತೆ ಬಾ” ಎಂದಾಗ ಶುಂಠಿ ತಿಂದ ಇಲಿಯಂತೆ ಕೊರಗುವಂತೆ (ಬರೆದೆಯಲ್ಲ).',
          },
        },
        {
          n: 3,
          text: 'ಹಿಂದೆ ಬರೆದ ಬರಹ ಹೇಗಾದರಾಗಲಿ\nಮುಂದೆನ್ನ ವಂಶದಲಿ ಜನಿಸುವರ ಕಾಯೊ ।\nಸಂದೇಹಿಸಲು ಬೇಡ ಪುರಂದರವಿಠಲ\nಕಂದರ್ಪ ಜನಕ ಉಡುಪಿಯ ಕೃಷ್ಣನಾಣೆ ॥',
          meaning: {
            en: 'Whatever was written before, let it be; but protect those who will be born in my line hereafter. Do not doubt it: I swear by Krishna of Udupi, father of Manmatha, Purandara Vitthala.',
            kn: 'ಹಿಂದೆ ಬರೆದ ಬರಹ ಹೇಗೋ ಆಗಲಿ; ಮುಂದೆ ನನ್ನ ವಂಶದಲ್ಲಿ ಹುಟ್ಟುವವರನ್ನು ಕಾಪಾಡು. ಸಂದೇಹಪಡಬೇಡ, ಪುರಂದರವಿಠಲ; ಕಂದರ್ಪಜನಕನಾದ ಉಡುಪಿಯ ಕೃಷ್ಣನ ಆಣೆ.',
          },
        },
      ],
    },
  ],
};

export const dpEkeChintisuve: Mantra = {
  id: 'dasara-pada-eke-chintisuve',
  title: 'ಏಕೆ ಚಿಂತಿಸುವೆ ಬರಿದೆ ಮರುಳೆ',
  titleEn: 'Purandara Dasa · Eke Chintisuve Baride Marule',
  category: 'dasara-pada',
  order: 42,
  sourceScript: 'kannada',
  deity: 'Sri Hari',
  source: 'Purandara Dasa',
  summary: 'A song of consolation: why worry in vain, fool? What fate has written does not fail. Before birth you drank your mother’s milk; the dangers of snakes, scorpions, fire, tigers and thieves come only by the will of Hari; so worship Purandara Vitthala with joy.',
  summaryKn: 'ಸಮಾಧಾನದ ಹಾಡು: “ಮರುಳೇ, ಏಕೆ ಬರಿದೇ ಚಿಂತಿಸುವೆ? ವಿಧಿ ಬರೆದ ಮಾತು ತಪ್ಪದು.” ಹುಟ್ಟುವ ಮೊದಲೇ ತಾಯಿಯ ಹಾಲು ಉಂಡವನು; ಹಾವು, ಚೇಳು, ಬೆಂಕಿ, ಹುಲಿ, ಕಳ್ಳರ ಭಯ ಹರಿಯಾಜ್ಞೆಯಂತೆಯೇ ಬರುವುದು; ಸಂತೋಷದಿಂದ ಹರಿಯನ್ನು ಪೂಜಿಸು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಏಕೆ ಚಿಂತಿಸುವೆ ಬರಿದೆ ಮರುಳೆ\nವಿಧಿ ಬರೆದ ವಾಕು ತಪ್ಪದು ಎಂದಿಗೂ ಮರುಳೆ ॥',
          meaning: {
            en: 'Why do you worry for nothing, fool? What fate has written never fails, fool.',
            kn: 'ಮರುಳೇ, ಏಕೆ ಬರಿದೆ ಚಿಂತಿಸುವೆ? ವಿಧಿ ಬರೆದ ಮಾತು ಎಂದಿಗೂ ತಪ್ಪದು, ಮರುಳೇ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಹುಟ್ಟುವುದಕಿಂತ ಮೊದಲೆ ತಾಯ ಸ್ತನ\nದಿಟ್ಟ ಕ್ಷೀರವನು ಉಂಡು ।\nತೊಟ್ಟಿಲೊಳು ಮಲಗುವಾಗ ಗಳಿಸಿ ತಂ-\nದಿಟ್ಟು ನೀನುಣುತಿದ್ದೆಯೊ ಮರುಳೆ ॥',
          meaning: {
            en: 'Before you were even born, your mother’s breast held ready its rich milk for you to drink. Did you earn and bring food and eat it while you lay in the cradle, fool?',
            kn: 'ಹುಟ್ಟುವ ಮೊದಲೇ ತಾಯಿಯ ಸ್ತನದಲ್ಲಿ ಹಾಲು ಸಿದ್ಧವಾಗಿತ್ತು, ನೀನದನ್ನು ಉಂಡೆ. ತೊಟ್ಟಿಲಲ್ಲಿ ಮಲಗಿದ್ದಾಗ ನೀನೇ ಗಳಿಸಿ ತಂದಿಟ್ಟು ಉಣ್ಣುತ್ತಿದ್ದೆಯಾ, ಮರುಳೇ?',
          },
        },
        {
          n: 2,
          text: 'ಉರಗ ವೃಶ್ಚಿಕ ಪಾವಕ ಕರಿ ನಂಜು\nಅರಸು ಹುಲಿ ಚೋರಭಯವು ।\nಹರಿಯಾಜ್ಞೆಯಿಂದಲೇನೆ ನೀನು ಮಹಾ\nಶರಧಿ ಪೊಕ್ಕರು ಬಿಡದು ಮರುಳೆ ॥',
          meaning: {
            en: 'The fear of snakes, scorpions, fire, elephants, poison, kings, tigers and thieves comes only by Hari’s command; even if you plunged into the great ocean it would not leave you, fool.',
            kn: 'ಹಾವು, ಚೇಳು, ಬೆಂಕಿ, ಆನೆ, ವಿಷ, ಅರಸ, ಹುಲಿ, ಕಳ್ಳರ ಭಯಗಳು ಹರಿಯಾಜ್ಞೆಯಿಂದಲೇ ಬರುತ್ತವೆ; ನೀನು ಮಹಾಸಾಗರವನ್ನು ಹೊಕ್ಕರೂ ಅದು ಬಿಡುವುದಿಲ್ಲ, ಮರುಳೇ.',
          },
        },
        {
          n: 3,
          text: 'ಇಂತು ಸುಖದುಃಖಂಗಳಿಗೆ ಸಿಲುಕಿ ನೀ\nಭ್ರಾಂತನಾಗಿ ಕೆಡಲು ಬೇಡ ।\nಸಂತೋಷದಿಂದರ್ಚಿಸಿ ಪೂಜಿಸು\nಕಂತುಪಿತ ಶ್ರೀಪುರಂದರವಿಠಲನ ॥',
          meaning: {
            en: 'Do not be caught in pleasure and pain like this and be ruined by confusion. Worship with joy Sri Purandara Vitthala, father of Manmatha.',
            kn: 'ಹೀಗೆ ಸುಖದುಃಖಗಳಲ್ಲಿ ಸಿಲುಕಿ ಭ್ರಾಂತನಾಗಿ ಕೆಡಬೇಡ. ಸಂತೋಷದಿಂದ ಕಂತುಪಿತ ಶ್ರೀ ಪುರಂದರವಿಠಲನನ್ನು ಅರ್ಚಿಸಿ ಪೂಜಿಸು.',
          },
        },
      ],
    },
  ],
};

export const dpElliHarikathaPrasangavo: Mantra = {
  id: 'dasara-pada-elli-harikatha-prasangavo',
  title: 'ಎಲ್ಲಿ ಹರಿಕಥಾ ಪ್ರಸಂಗವೋ',
  titleEn: 'Purandara Dasa · Elli Harikatha Prasangavo',
  category: 'dasara-pada',
  order: 43,
  sourceScript: 'kannada',
  deity: 'Sri Hari',
  source: 'Purandara Dasa',
  summary: 'A short song in praise of hearing the story of Hari: wherever it is told, all the holy rivers come and stand there, and the very words “Jaya Hari” are the best day, star-strength, moon-strength, learning and divine strength.',
  summaryKn: 'ಹರಿಕಥೆಯ ಶ್ರವಣದ ಮಹಿಮೆಯ ಚಿಕ್ಕ ಹಾಡು: ಹರಿಕಥೆ ಎಲ್ಲಿ ನಡೆಯುವುದೋ ಅಲ್ಲಿ ಎಲ್ಲ ತೀರ್ಥಗಳೂ ಬಂದು ನಿಲ್ಲುತ್ತವೆ; “ಜಯ ಹರಿ” ಎನ್ನುವುದೇ ಸುದಿನ, ತಾರಾಬಲ, ಚಂದ್ರಬಲ, ವಿದ್ಯಾಬಲ, ದೈವಬಲ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಎಲ್ಲಿ ಹರಿಕಥಾ ಪ್ರಸಂಗವೋ ॥',
          meaning: {
            en: 'Wherever there is a telling of Hari’s story,',
            kn: 'ಎಲ್ಲಿ ಹರಿಕಥಾಪ್ರಸಂಗ ನಡೆಯುತ್ತದೋ (ಅಲ್ಲಿ).',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಅಲ್ಲಿ ಗಂಗೆ-ಯಮುನೆ-ಗೋದಾ-ಸರಸ್ವತಿ ಸಿಂಧು\nಎಲ್ಲ ತೀರ್ಥಗಳು ಬಂದು ಎಣೆಯಾಗಿ ನಿಲ್ಲುವವು ।\nವಲ್ಲಭ ಶ್ರೀಪುರಂದರ ವಿಠಲ ಮೆಚ್ಚುವನು ॥',
          meaning: {
            en: 'there the Ganga, Yamuna, Godavari, Sarasvati, Sindhu and all the holy waters come and stand in line, and the beloved Purandara Vitthala is pleased.',
            kn: 'ಅಲ್ಲಿ ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ಸಿಂಧು ಮೊದಲಾದ ಎಲ್ಲ ತೀರ್ಥಗಳೂ ಬಂದು ಸಾಲಾಗಿ ನಿಲ್ಲುತ್ತವೆ; ಪ್ರಿಯನಾದ ಶ್ರೀ ಪುರಂದರವಿಠಲ ಮೆಚ್ಚುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಜಯ ಜಯ ಹರಿಯೆಂಬುದೆ ಸುದಿನವು ।\nಜಯ ಹರಿ ಹರಿಯೆಂಬುವುದೆ ತಾರಾಬಲವು ।\nಜಯ ಹರಿ ಹರಿಯೆಂಬುವುದೆ ಚಂದ್ರಬಲವು ।\nಜಯ ಹರಿ ಹರಿಯೆಂಬುವುದೆ ವಿದ್ಯಾಬಲವು ।\nಜಯ ಹರಿ ಹರಿಯೆಂಬುವುದೆ ದೈವಬಲವು ।\nಜಯಹರಿ ಪುರಂದರವಿಠಲನ ಬಲವಯ್ಯ ಸುಜನರಿಗೆ ॥',
          meaning: {
            en: '“Jaya Jaya Hari” is the auspicious day; “Jaya Hari” is the strength of the stars, the strength of the moon, the strength of learning, the strength of the gods. Victory to Hari: Purandara Vitthala is the strength of good people.',
            kn: '“ಜಯ ಜಯ ಹರಿ” ಎನ್ನುವುದೇ ಸುದಿನ; “ಜಯ ಹರಿ” ಎನ್ನುವುದೇ ತಾರಾಬಲ, ಚಂದ್ರಬಲ, ವಿದ್ಯಾಬಲ, ದೈವಬಲ. ಜಯ ಹರಿ! ಪುರಂದರವಿಠಲನೇ ಸಜ್ಜನರಿಗೆ ಬಲ.',
          },
        },
      ],
    },
  ],
};

export const dpIdeSamayaRanga: Mantra = {
  id: 'dasara-pada-ide-samaya-ranga',
  title: 'ಇದೇ ಸಮಯ ರಂಗ ಬಾರೆಲೊ',
  titleEn: 'Purandara Dasa · Ide Samaya Ranga Barelo',
  category: 'dasara-pada',
  order: 44,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A gopi’s secret invitation to Krishna: “This is the very time, come!” Her sister-in-law, mother-in-law, father-in-law, husband and brother-in-law are all busy or indifferent; she cares nothing for parents or child, and will serve his feet if he comes.',
  summaryKn: 'ಗೋಪಿಕೆಯು ಕೃಷ್ಣನನ್ನು ಗುಟ್ಟಾಗಿ ಕರೆಯುವ ಹಾಡು: “ಇದೇ ಸಮಯ, ಬಾ!” ಅತ್ತಿಗೆ, ಅತ್ತೆ, ಮಾವ, ಗಂಡ, ಭಾವ ಎಲ್ಲರೂ ತಮ್ಮ ತಮ್ಮ ಕೆಲಸದಲ್ಲಿ ಇದ್ದಾರೆ; ತಂದೆತಾಯಿ, ಮಗುವಿನ ಆಸೆಯನ್ನೂ ಬಿಟ್ಟು ಬಂದರೆ ನಿನ್ನ ಚರಣಸೇವೆ ಮಾಡುತ್ತೇನೆ ಎನ್ನುತ್ತಾಳೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಇದೇ ಸಮಯ ರಂಗ ಬಾರೆಲೊ\nಇದೇ ಸಮಯ ಕೃಷ್ಣ ಬಾರೆಲೊ ॥',
          meaning: {
            en: 'This is the very moment, Ranga; come! This is the very moment, Krishna; come!',
            kn: 'ಇದೇ ಸಮಯ, ರಂಗ, ಬಾರೋ! ಇದೇ ಸಮಯ, ಕೃಷ್ಣ, ಬಾರೋ!',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಅತ್ತಿಗೆ ಲಕ್ಷಬತ್ತಿ ಶೀಲಳೋ\nಅಷ್ಟು ಆಗದೆ ಅವಳೇಳಳೋ ।\nಅತ್ತೆ ಪುರಾಣದಿ ಲೋಲಳೊ ಸರಿ\nಹೊತ್ತಿನ ವೇಳೆಗೆ ಬರುವಳೊ ॥',
          meaning: {
            en: 'My sister-in-law is absorbed in her lakh-wicks lamp vow and will not rise until it is done. My mother-in-law is lost in the Purana and will come only at the proper time.',
            kn: 'ಅತ್ತಿಗೆ ಲಕ್ಷಬತ್ತಿಯ ವ್ರತದಲ್ಲಿ ನಿರತಳು; ಅದು ಮುಗಿಯದೆ ಏಳಳು. ಅತ್ತೆ ಪುರಾಣದಲ್ಲಿ ಮುಳುಗಿದ್ದಾಳೆ; ಸರಿಯಾದ ಹೊತ್ತಿಗೇ ಬರುವಳು.',
          },
        },
        {
          n: 2,
          text: 'ಮಾವ ಎನ್ನಲಿ ಅವಿಶ್ವಾಸಿಯೊ\nಮದುವೆಯಾದ ಗಂಡ ಉದಾಸಿಯೊ ।\nಭಾವನು ಎನ್ನ ಸೇರ ಹೇಸಿಯೊ ನೀ-\nನೀವೇಳೆಗೆ ಬಂದರೆ ವಾಸಿಯೊ ॥',
          meaning: {
            en: 'My father-in-law does not trust me; my husband is indifferent; my brother-in-law shrinks from coming near me. It would be best if you came at this very hour.',
            kn: 'ಮಾವನಿಗೆ ನನ್ನಲ್ಲಿ ನಂಬಿಕೆಯಿಲ್ಲ; ಮದುವೆಯಾದ ಗಂಡ ಉದಾಸೀನ; ಭಾವ ನನ್ನ ಬಳಿ ಬರಲು ಹೇಸುತ್ತಾನೆ. ನೀನು ಈ ವೇಳೆಗೆ ಬಂದರೆ ಒಳ್ಳೆಯದು.',
          },
        },
        {
          n: 3,
          text: 'ತಂದೆ ತಾಯ ಆಸೆ ಮಾಡೆನೊ ಎನ್ನ\nಕಂದನ ಮೇಲೆ ಮನಸಿಡೆನೊ ।\nಮಂದರಧರ ಪುರಂದರವಿಠಲ ನೀ\nಬಂದರೆ ಚರಣಸೇವೆ ಮಾಳ್ಪೆನೊ ॥',
          meaning: {
            en: 'I will not long for father or mother, nor set my heart on my child. Bearer of Mount Mandara, Purandara Vitthala, if you come I will serve your feet.',
            kn: 'ತಂದೆತಾಯಿಯ ಆಸೆಯನ್ನು ಮಾಡೆನು, ನನ್ನ ಕಂದನ ಮೇಲೂ ಮನಸ್ಸಿಡೆನು. ಮಂದರಧರ ಪುರಂದರವಿಠಲ, ನೀನು ಬಂದರೆ ನಿನ್ನ ಚರಣಸೇವೆ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
  ],
};

export const dpAruBadukidarayya: Mantra = {
  id: 'dasara-pada-aru-badukidarayya',
  title: 'ಆರು ಬದುಕಿದರಯ್ಯ ಹರಿ ನಿನ್ನ ನಂಬಿ',
  titleEn: 'Purandara Dasa · Aru Badukidarayya Hari Ninna Nambi',
  category: 'dasara-pada',
  order: 45,
  sourceScript: 'kannada',
  deity: 'Sri Hari',
  source: 'Purandara Dasa',
  summary: 'A song of loving complaint in the manner of the Haridasas: “Who has lived well by trusting you, Hari? Show me one.” It recalls, with playful reproach, how the Lord tested and troubled devotees and others in the old stories, and ends: those who trust you cannot even find alms.',
  summaryKn: 'ದಾಸರ ಶೈಲಿಯ ಪ್ರೀತಿಯ ಮುನಿಸಿನ ಹಾಡು: “ಹರಿಯೇ, ನಿನ್ನ ನಂಬಿ ಯಾರು ಬದುಕಿದರು? ಒಬ್ಬರನ್ನು ತೋರಿಸು.” ಪುರಾಣಕಥೆಗಳಲ್ಲಿ ಭಗವಂತ ಭಕ್ತರನ್ನೂ ಇತರರನ್ನೂ ಪರೀಕ್ಷಿಸಿ ಕಾಡಿದ ಪ್ರಸಂಗಗಳನ್ನು ತಮಾಷೆಯ ಆಕ್ಷೇಪದಿಂದ ನೆನೆಯುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಆರು ಬದುಕಿದರಯ್ಯ ಹರಿ ನಿನ್ನ ನಂಬಿ\nತೋರು ಈ ಜಗದೊಳಗೆ ಒಬ್ಬರನು ಕಾಣೆ ॥',
          meaning: {
            en: 'Who has lived well by trusting you, Hari? I see no one in this world; show me one.',
            kn: 'ಹರಿಯೇ, ನಿನ್ನನ್ನು ನಂಬಿ ಯಾರು ಬದುಕಿದರು? ಈ ಜಗತ್ತಿನಲ್ಲಿ ಒಬ್ಬರನ್ನೂ ಕಾಣೆ; ತೋರಿಸು.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಕರಪತ್ರದಿಂದ ತಾಮ್ರಧ್ವಜನ ತಂದೆಯ\nಕೊರಳ ಕೊಯಿಸಿದೆ ನೀನು ಕುಂದಿಲ್ಲದೆ ।\nಮರುಳನಂದದಿ ಪೋಗಿ ಭೃಗುಮುನಿಯ ಕಣ್ಣೊಡೆದೆ\nಅರಿತು ತ್ರಿಪುರಾಸುರನ ಹೆಂಡಿರನು ಬೆರೆದೆ ॥',
          meaning: {
            en: 'You had Tamradhvaja’s father’s throat cut with a saw, without a flaw in your resolve; like a madman you went and broke the sage Bhrigu’s eye; knowingly you joined the wives of Tripurasura.',
            kn: 'ಕರಪತ್ರ(ಗರಗಸ)ದಿಂದ ತಾಮ್ರಧ್ವಜನ ತಂದೆಯ ಕೊರಳನ್ನು ನೀನು ಕುಂದಿಲ್ಲದೆ ಕೊಯಿಸಿದೆ; ಹುಚ್ಚನಂತೆ ಹೋಗಿ ಭೃಗುಮುನಿಯ ಕಣ್ಣನ್ನು ಒಡೆದೆ; ತಿಳಿದೂ ತ್ರಿಪುರಾಸುರನ ಹೆಂಡಿರನ್ನು ಕೂಡಿದೆ.',
          },
        },
        {
          n: 2,
          text: 'ಕಲಹ ಬಾರದ ಹಾಗೆ ಕರ್ಣನನು ನೀ ಕೊಂದೆ\nಸುಲಭದಲಿ ಕೌರವರ ಮನೆಯ ಮುರಿದೆ ।\nನೆಲವ ಬೇಡುತ ಹೋಗಿ ಬಲಿಯ ತನುವನು ತುಳಿದೆ\nಮೊಲೆಯನುಣಿಸಲು ಬಂದ ಪೂತನಿಯ ಕೊಂದೆ ॥',
          meaning: {
            en: 'You had Karna killed so that no quarrel would come; you easily broke up the Kauravas’ house; you went begging for land and pressed Bali down; you killed Putana who came to nurse you.',
            kn: 'ಕಲಹ ಬಾರದಂತೆ ಕರ್ಣನನ್ನು ನೀನು ಕೊಂದೆ; ಕೌರವರ ಮನೆಯನ್ನು ಸುಲಭವಾಗಿ ಮುರಿದೆ; ನೆಲವನ್ನು ಬೇಡುತ್ತ ಹೋಗಿ ಬಲಿಯ ಮೈಯನ್ನು ತುಳಿದೆ; ಮೊಲೆಯುಣಿಸಲು ಬಂದ ಪೂತನಿಯನ್ನು ಕೊಂದೆ.',
          },
        },
        {
          n: 3,
          text: 'ತಿರಿದುಂಬ ದಾಸರ ಕೈಲಿ ಕಪ್ಪವ ಕೊಂಬೆ\nಗರುಡವಾಹನ ನಿನ್ನ ಚರಿಯವರಿಯೆ ।\nದೊರೆ ಪುರಂದರವಿಠಲ ನಿನ್ನನ್ನು ನಂಬಿದರೆ\nತಿರುಪೆಯೂ ಹುಟ್ಟಲೊಲ್ಲದು ಕೇಳೊ ಹರಿಯೆ ॥',
          meaning: {
            en: 'You take tribute even from the devotees who live on alms; Garuda-rider, I cannot fathom your ways. Lord Purandara Vitthala, listen: for those who trust you even alms will not come.',
            kn: 'ಭಿಕ್ಷೆ ಬೇಡಿ ಉಣ್ಣುವ ದಾಸರಿಂದಲೂ ಕಪ್ಪ ತೆಗೆದುಕೊಳ್ಳುವೆ; ಗರುಡವಾಹನನೇ, ನಿನ್ನ ನಡೆ ನನಗೆ ತಿಳಿಯದು. ದೊರೆ ಪುರಂದರವಿಠಲ, ನಿನ್ನನ್ನು ನಂಬಿದರೆ ತಿರುಪೆಯೂ ಹುಟ್ಟದು, ಕೇಳು ಹರಿಯೇ.',
          },
        },
      ],
    },
  ],
};

export const dpOotakkeBandevu: Mantra = {
  id: 'dasara-pada-ootakke-bandevu',
  title: 'ಊಟಕ್ಕೆ ಬಂದೆವು ನಾವು ನಿಮ್ಮ',
  titleEn: 'Purandara Dasa · Ootakke Bandevu Naavu',
  category: 'dasara-pada',
  order: 46,
  sourceScript: 'kannada',
  deity: 'Sri Krishna (Prasanna Purandara Vitthala)',
  source: 'Purandara Dasa',
  summary: 'A playful song of hungry guests who ask the lady of the house to leave her chores and cook: their eyes darken and their mouths dry, and no gold or gift of brides equals the gift of food, says Prasanna Purandara Vitthala.',
  summaryKn: 'ಹಸಿದ ಅತಿಥಿಗಳು ಮನೆಯೊಡತಿಗೆ “ಆಟಪಾಟ ಬಿಟ್ಟು ಅಡುಗೆ ಮಾಡಮ್ಮ” ಎಂದು ಕೇಳುವ ತಮಾಷೆಯ ಹಾಡು; ಅನ್ನದಾನಕ್ಕೆ ಸಮನಾದುದು ಹೊನ್ನರಾಶಿಯಾಗಲಿ ಕನ್ಯಾದಾನವಾಗಲಿ ಇಲ್ಲ ಎನ್ನುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಊಟಕ್ಕೆ ಬಂದೆವು ನಾವು ನಿಮ್ಮ\nಆಟ ಪಾಟವ ಬಿಟ್ಟು ಅಡುಗೆ ಮಾಡಮ್ಮ ॥',
          meaning: {
            en: 'We have come for a meal: leave your play and chatter and cook, lady.',
            kn: 'ನಾವು ನಿಮ್ಮ ಮನೆಗೆ ಊಟಕ್ಕೆ ಬಂದಿದ್ದೇವೆ; ಆಟಪಾಟ ಬಿಟ್ಟು ಅಡುಗೆ ಮಾಡಮ್ಮ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಕತ್ತಲಿಟ್ಟಾವಮ್ಮ ಕಣ್ಣು\nಬಾಯಿ ಬತ್ತಿ ಬರುತಲಿದೆ ಕೈಕಾಲು ಝಮ್ಮು ।\nಹೊತ್ತು ಹೋಗಿಸಬೇಡವಮ್ಮ ಒಂದು\nತುತ್ತಾದರು ಇತ್ತು ಸಲಹು ನಮ್ಮಮ್ಮ ॥',
          meaning: {
            en: 'Darkness has come over our eyes, our mouths are drying and our hands and feet are tingling. Do not waste time; give us even a single morsel and look after us, mother.',
            kn: 'ಕಣ್ಣುಗಳಿಗೆ ಕತ್ತಲೆ ಕವಿದಿದೆ, ಬಾಯಿ ಒಣಗುತ್ತಿದೆ, ಕೈಕಾಲು ಝುಮ್ಮೆನ್ನುತ್ತಿದೆ. ಹೊತ್ತು ಕಳೆಯಬೇಡ, ತಾಯೇ; ಒಂದು ತುತ್ತಾದರೂ ಕೊಟ್ಟು ಸಲಹು.',
          },
        },
        {
          n: 2,
          text: 'ಒಡಲೊಳಗೆ ಉಸಿರಿಲ್ಲ ಒಂದು\nಕ್ಷಣವಾದರೆ ಜೀವ ನಿಲ್ಲುವುದಿಲ್ಲ ।\nಮಡಿದರೆ ದೋಷ ತಟ್ಟುವುದು ಒಂದು\nಹಿಡಿ ಅಕ್ಕಿಯಿಂದಲೆ ಕೀರ್ತಿ ಬಾಹೋದು ॥',
          meaning: {
            en: 'There is no breath left in the body; in a moment life will not stay. If we die the blame will fall on you; but with a handful of rice, fame will come.',
            kn: 'ಉಸಿರು ಹೋಗುತ್ತಿದೆ, ಒಂದು ಕ್ಷಣವಾದರೆ ಜೀವ ನಿಲ್ಲದು. ಸತ್ತರೆ ದೋಷ ತಟ್ಟುವುದು; ಒಂದು ಹಿಡಿ ಅಕ್ಕಿಯಿಂದಲೇ ಕೀರ್ತಿ ಬರುವುದು.',
          },
        },
        {
          n: 3,
          text: 'ಹೊನ್ನರಾಶಿಯ ತಂದು ಸುರಿಯೆ ಕೋಟಿ\nಕನ್ನಿಕೆಯರ ತಂದು ಧಾರೆಯನೆರೆಯೆ ।\nಅನ್ನದಾನಕ್ಕಿನ್ನು ಸರಿಯೆ ಪ್ರ-\nಸನ್ನ ಪುರಂದರವಿಠಲ ದೊರೆಯೆ ॥',
          meaning: {
            en: 'Pouring out heaps of gold, or giving millions of maidens in marriage, is no match for the gift of food, says the gracious Lord Purandara Vitthala.',
            kn: 'ಚಿನ್ನದ ರಾಶಿ ತಂದು ಸುರಿದರೂ, ಕೋಟಿ ಕನ್ಯೆಯರನ್ನು ತಂದು ಧಾರೆಯೆರೆದರೂ ಅನ್ನದಾನಕ್ಕೆ ಸರಿಯಾಗದು, ಪ್ರಸನ್ನ ಪುರಂದರವಿಠಲ ದೊರೆಯೇ.',
          },
        },
      ],
    },
  ],
};

export const dpGummanaKareyadire: Mantra = {
  id: 'dasara-pada-gummana-kareyadire',
  title: 'ಗುಮ್ಮನ ಕರೆಯದಿರೆ ಅಮ್ಮ ನೀನು',
  titleEn: 'Purandara Dasa · Gummana Kareyadire Amma Neenu',
  category: 'dasara-pada',
  order: 47,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'Baby Krishna promises his mother Yashoda to be good if she will not call the bogeyman: he will not hit the children, steal butter, eat mud or go near the well and the snake, and the gopi, hearing him, hugs him with love.',
  summaryKn: '“ಅಮ್ಮಾ, ಗುಮ್ಮನನ್ನು ಕರೆಯಬೇಡ” ಎಂದು ಬಾಲಕೃಷ್ಣನು ತಾಯಿ ಯಶೋದೆಗೆ ಮಾತು ಕೊಡುವ ಹಾಡು: ಮಕ್ಕಳನ್ನು ಹೊಡೆಯೆ, ಬೆಣ್ಣೆ ಬೇಡೆ, ಮಣ್ಣು ತಿನ್ನೆ, ಬಾವಿ-ಹಾವಿನ ಬಳಿ ಹೋಗೆ; ಮಗನ ಮಾತು ಕೇಳಿ ಗೋಪಿ ಮೋಹದಿಂದ ಬಿಗಿದಪ್ಪಿಕೊಂಡಳು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಗುಮ್ಮನ ಕರೆಯದಿರೆ ಅಮ್ಮ ನೀನು ॥',
          meaning: {
            en: 'Mother, do not call the bogeyman.',
            kn: 'ಅಮ್ಮಾ, ನೀನು ಗುಮ್ಮನನ್ನು ಕರೆಯಬೇಡ.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಸುಮ್ಮನೆ ಇದ್ದೇನು ಅಮ್ಮಿಯ ಬೇಡೆನು\nಮಮ್ಮು ಉಣ್ಣುತೇನೆ ಅಮ್ಮ ಅಳುವುದಿಲ್ಲ ॥',
          meaning: {
            en: 'I will stay quiet, I will not ask for milk; I will eat my food, mother, and I will not cry.',
            kn: 'ಸುಮ್ಮನೆ ಇರುತ್ತೇನೆ, ಅಮ್ಮಿ (ಹಾಲು) ಬೇಡೆನು; ಮಮ್ಮು ಉಣ್ಣುತ್ತೇನೆ, ಅಮ್ಮಾ, ಅಳುವುದಿಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಹೆಣ್ಣುಗಳಿರುವಲ್ಲಿ ಪೋಗಿ ಅವರ\nಕಣ್ಣು ಮುಚ್ಚುವದಿಲ್ಲವೆ ।\nಚಿಣ್ಣರ ಬಡಿಯೆನು ಅಣ್ಣನ ಬೈಯೆನು\nಬೆಣ್ಣೆಯ ಬೇಡೆನು ಮಣ್ಣು ತಿನ್ನುವುದಿಲ್ಲ ॥',
          meaning: {
            en: 'I will not go where the women are and cover their eyes in play. I will not beat the little ones, I will not scold my elder brother, I will not ask for butter, and I will not eat mud.',
            kn: 'ಹೆಣ್ಣುಗಳಿರುವಲ್ಲಿ ಹೋಗಿ ಅವರ ಕಣ್ಣು ಮುಚ್ಚುವುದಿಲ್ಲ. ಚಿಕ್ಕ ಮಕ್ಕಳನ್ನು ಬಡಿಯೆನು, ಅಣ್ಣನನ್ನು ಬೈಯೆನು, ಬೆಣ್ಣೆ ಬೇಡೆನು, ಮಣ್ಣು ತಿನ್ನುವುದಿಲ್ಲ.',
          },
        },
        {
          n: 2,
          text: 'ಬಾವಿಗೆ ಪೋಗೆ ಕಾಣೆ ಅಮ್ಮ ನಾನು\nಹಾವಿನೊಳಾಡೆ ಕಾಣೆ ।\nಆವಿನ ಮೊಲೆಯೂಡೆ ಕರುಗಳ ಬಿಡೆ ನೋಡೆ\nದೇವರಂತೆ ಒಂದು ಠಾವಿನಲಿ ಕೂಡುವೆ ॥',
          meaning: {
            en: 'I will not go to the well, mother, and I will not play with snakes. I will not suck the cow’s udder or let the calves loose; I will sit in one place like a god.',
            kn: 'ಅಮ್ಮಾ, ನಾನು ಬಾವಿಗೆ ಹೋಗೆನು, ಹಾವಿನೊಂದಿಗೆ ಆಡೆನು. ಹಸುವಿನ ಮೊಲೆ ಕುಡಿಯೆನು, ಕರುಗಳನ್ನು ಬಿಡೆನು; ದೇವರಂತೆ ಒಂದೇ ಕಡೆ ಕುಳಿತಿರುವೆನು.',
          },
        },
        {
          n: 3,
          text: 'ಮಗನ ಮಾತ ಕೇಳಿ ಗೋಪಿದೇವಿ\nಮುಗುಳು ನಗೆ ನಗುತ ।\nಜಗದೊಡೆಯನ ಶ್ರೀ ಪುರಂದರವಿಠಲನ\nಬಿಗಿದಪ್ಪಿಕೊಂಡಳು ಮೋಹದಿಂದಲಾಗ ॥',
          meaning: {
            en: 'Hearing her son’s words, the lady Gopi smiled gently, and then, filled with love, she hugged Sri Purandara Vitthala, the Lord of the world, tight.',
            kn: 'ಮಗನ ಮಾತನ್ನು ಕೇಳಿ ಗೋಪಿದೇವಿ ಮುಗುಳುನಗೆ ನಕ್ಕು, ಜಗದೊಡೆಯನಾದ ಶ್ರೀ ಪುರಂದರವಿಠಲನನ್ನು ಮೋಹದಿಂದ ಬಿಗಿದಪ್ಪಿಕೊಂಡಳು.',
          },
        },
      ],
    },
  ],
};

export const dpTalaBekuTakkaMela: Mantra = {
  id: 'dasara-pada-tala-beku-takka-mela',
  title: 'ತಾಳ ಬೇಕು ತಕ್ಕ ಮೇಳ ಬೇಕು',
  titleEn: 'Purandara Dasa · Tala Beku Takka Mela Beku',
  category: 'dasara-pada',
  order: 48,
  sourceScript: 'kannada',
  deity: 'Sri Hari (Purandara Vitthala)',
  source: 'Purandara Dasa',
  summary: 'A song on what true singing of God’s praise needs: rhythm and the right accompaniment, a calm time, correct rhyme and metre, deep love for the father of Manmatha (Vishnu), pure voice and a cheerful face, and the knowledge that Purandara Vitthala is the supreme God.',
  summaryKn: 'ಭಗವಂತನ ಗಾನಕ್ಕೆ ಏನು ಬೇಕೆಂದು ಹೇಳುವ ಹಾಡು: ತಾಳ, ತಕ್ಕ ಮೇಳ, ಶಾಂತ ವೇಳೆ, ಯತಿಪ್ರಾಸ, ಗತಿ, ರತಿಪತಿಪಿತನ ಮೇಲೆ ಅತಿ ಪ್ರೇಮ, ಶುದ್ಧ ಕಂಠ, ಕಳೆಮುಖ, ಮತ್ತು ಪುರಂದರವಿಠಲನೇ ಪರದೈವವೆಂಬ ತಿಳಿವು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ತಾಳ ಬೇಕು ತಕ್ಕ ಮೇಳ ಬೇಕು ॥',
          meaning: {
            en: 'You need rhythm and a fitting accompaniment.',
            kn: 'ತಾಳ ಬೇಕು, ತಕ್ಕ ಮೇಳ ಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಶಾಂತ ವೇಳೆ ಬೇಕು ಗಾನವನ್ನು\nಕೇಳಬೇಕೆಂಬುವರಿಗೆ ॥',
          meaning: {
            en: 'For those who wish to hear the song, a calm hour is needed.',
            kn: 'ಗಾನವನ್ನು ಕೇಳಬೇಕೆನ್ನುವವರಿಗೆ ಶಾಂತವಾದ ವೇಳೆ ಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಯತಿಪ್ರಾಸವಿರಬೇಕು ಗತಿಗೆ ನಿಲ್ಲಿಸಬೇಕು\nರತಿಪತಿಪಿತನೊಳು ಅತಿ ಪ್ರೇಮವಿರಬೇಕು ।\nಗಳ ಶುದ್ಧವಿರಬೇಕು ತಿಳಿದು ಪೇಳಲು ಬೇಕು\nಕಳವಳ ಬಿಡಬೇಕು ಕಳೆಮುಖವಿರಬೇಕು ।\nಅರಿತವರಿರಬೇಕು ಹರುಷ ಹೆಚ್ಚಲಿ ಬೇಕು\nಪುರಂದರವಿಠಲನೆ ಪರದೈವವೆನಬೇಕು ॥',
          meaning: {
            en: 'There must be metre and rhyme, and the song must end firmly on the beat; there must be deep love for Vishnu, the father of Manmatha. The voice must be pure, and one must sing with understanding; give up anxiety and keep a cheerful face. There must be those who know, joy must grow, and one must say that Purandara Vitthala alone is the supreme God.',
            kn: 'ಯತಿಪ್ರಾಸವಿರಬೇಕು, ಗತಿಗೆ ನಿಲ್ಲಿಸಬೇಕು; ರತಿಪತಿಪಿತನಾದ ವಿಷ್ಣುವಿನಲ್ಲಿ ಅತಿ ಪ್ರೇಮವಿರಬೇಕು. ಗಂಟಲು ಶುದ್ಧವಿರಬೇಕು, ತಿಳಿದು ಹೇಳಬೇಕು; ಕಳವಳ ಬಿಡಬೇಕು, ಮುಖದಲ್ಲಿ ಕಳೆ ಇರಬೇಕು. ಅರಿತವರು ಇರಬೇಕು, ಹರ್ಷ ಹೆಚ್ಚಬೇಕು; ಪುರಂದರವಿಠಲನೇ ಪರದೈವ ಎನ್ನಬೇಕು.',
          },
        },
      ],
    },
  ],
};

export const dpKelenoHariTalano: Mantra = {
  id: 'dasara-pada-keleno-hari-talano',
  title: 'ಕೇಳನೊ ಹರಿ ತಾಳನೊ',
  titleEn: 'Purandara Dasa · Kelano Hari Talano',
  category: 'dasara-pada',
  order: 49,
  sourceScript: 'kannada',
  deity: 'Sri Hari',
  source: 'Purandara Dasa',
  summary: 'A song on the heart of devotional music: Hari, who listens to the song of Tumburu and Narada, will not accept the noise of hypocrites; without love, even many instruments and learned skill are empty, but with joyful tears and firm devotion, even the name of Purandara Vitthala is heard.',
  summaryKn: 'ಭಕ್ತಿಗಾನದ ಸಾರವನ್ನು ಹೇಳುವ ಹಾಡು: ತುಂಬುರು-ನಾರದರ ಗಾನ ಕೇಳುವ ಹರಿ ಡಂಭಕರ ಕೂಗಾಟವನ್ನು ನಂಬಲಾರ; ಪ್ರೇಮವಿಲ್ಲದ ತಾಳಮೇಳ, ವಾದ್ಯ, ಪಾಂಡಿತ್ಯ ವ್ಯರ್ಥ; ಆನಂದಬಾಷ್ಪ, ದೃಢಭಕ್ತಿಯಿಂದ ಹಾಡಿದರೆ ಹರಿ ಕೇಳುವನು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಕೇಳನೊ ಹರಿ ತಾಳನೊ ॥',
          meaning: {
            en: 'Will Hari listen? Will he put up with it?',
            kn: 'ಹರಿ ಕೇಳುವನೇ? ಸಹಿಸುವನೇ?',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ತಾಳ ಮೇಳಗಳಿದ್ದು ಪ್ರೇಮವಿಲ್ಲದ ಗಾನ ॥',
          meaning: {
            en: 'A song with rhythm and accompaniment but without love.',
            kn: 'ತಾಳಮೇಳಗಳಿದ್ದರೂ ಪ್ರೇಮವಿಲ್ಲದ ಗಾನ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ತಂಬೂರಿ ಮೊದಲಾದ ಅಖಿಳ ವಾದ್ಯಗಳಿದ್ದು\nಕೊಂಬು ಕೊಳಲು ಧ್ವನಿ ಸ್ವರಗಳಿದ್ದು ।\nತುಂಬುರು ನಾರದರ ಗಾನ ಕೇಳುವ ಹರಿ\nನಂಬಲಾರ ಈ ಡಂಭಕರ ಕೂಗಾಟ ॥',
          meaning: {
            en: 'Even with tambura and all the instruments, horn and flute, sound and notes in place, Hari, who listens to the song of Tumburu and Narada, will not believe the shouting of these show-offs.',
            kn: 'ತಂಬೂರಿ ಮೊದಲಾದ ಎಲ್ಲ ವಾದ್ಯಗಳು, ಕೊಂಬು, ಕೊಳಲು, ಧ್ವನಿ, ಸ್ವರಗಳು ಇದ್ದರೂ, ತುಂಬುರು-ನಾರದರ ಗಾನ ಕೇಳುವ ಹರಿ ಈ ಡಂಭಕರ ಕೂಗಾಟವನ್ನು ನಂಬಲಾರ.',
          },
        },
        {
          n: 2,
          text: 'ನಾನಾ ಬಗೆಯ ರಾಗ ಭಾವ ತಿಳಿದು ಸ್ವರ\nಜ್ಞಾನ ಮನೋಧರ್ಮ ಜಾತಿಯಿದ್ದು ।\nದಾನವಾರಿಯ ದಿವ್ಯನಾಮರಹಿತವಾದ\nಹೀನ ಸಂಗೀತ ಸಾಹಿತ್ಯಕ್ಕೆ ಮನವಿತ್ತು ॥',
          meaning: {
            en: 'Though one knows many ragas and moods, has knowledge of notes, creative imagination and fine form, one gives one’s mind to a poor music and verse that lacks the divine name of the enemy of demons.',
            kn: 'ನಾನಾ ಬಗೆಯ ರಾಗ, ಭಾವಗಳನ್ನು ತಿಳಿದು, ಸ್ವರಜ್ಞಾನ, ಮನೋಧರ್ಮ, ಜಾತಿ ಇದ್ದರೂ, ದಾನವಾರಿಯ ದಿವ್ಯನಾಮವಿಲ್ಲದ ಹೀನ ಸಂಗೀತ-ಸಾಹಿತ್ಯಕ್ಕೆ ಮನಸ್ಸು ಕೊಟ್ಟು (ಏನು ಫಲ?).',
          },
        },
        {
          n: 3,
          text: 'ಅಡಿಗಡಿಗಾನಂದ ಬಾಷ್ಪಪುಳಕದಿಂದ\nನಡೆ ನುಡಿಗೆ ಶ್ರೀಹರಿಯೆನ್ನುತ ।\nದೃಢಭಕ್ತರನು ಕೂಡಿ ಹರಿಕೀರ್ತನೆ ಪಾಡಿ\nಕಡೆಗೆ ಪುರಂದರವಿಠಲನೆಂದರೆ ಕೇಳ್ವ ॥',
          meaning: {
            en: 'But with tears of joy and thrill at every step, saying “Sri Hari” with every step and word, joining firm devotees and singing Hari’s kirtana, and finally saying “Purandara Vitthala”, he listens.',
            kn: 'ಹೆಜ್ಜೆಹೆಜ್ಜೆಗೂ ಆನಂದಬಾಷ್ಪ, ಪುಳಕದಿಂದ, ನಡೆನುಡಿಗೆ “ಶ್ರೀಹರಿ” ಎನ್ನುತ್ತ, ದೃಢಭಕ್ತರೊಂದಿಗೆ ಸೇರಿ ಹರಿಕೀರ್ತನೆ ಹಾಡಿ, ಕೊನೆಗೆ “ಪುರಂದರವಿಠಲ” ಎಂದರೆ ಅವನು ಕೇಳುವನು.',
          },
        },
      ],
    },
  ],
};

export const dpBharatideviNeneNene: Mantra = {
  id: 'dasara-pada-bharatidevi-nene-nene',
  title: 'ಭಾರತಿದೇವಿಯ ನೆನೆ ನೆನೆ',
  titleEn: 'Purandara Dasa · Bharatidevi Nene Nene',
  category: 'dasara-pada',
  order: 50,
  sourceScript: 'kannada',
  deity: 'Sri Bharati Devi',
  source: 'Purandara Dasa',
  summary: 'A short hymn to Bharati Devi, the wife of Vayu (Marut): “Remember Bharati Devi; to a steady devotee she is a home.” It describes her anklets, bangles and earrings and ends by calling her the servant of Purandara Vitthala.',
  summaryKn: 'ವಾಯುದೇವರ ಪತ್ನಿ ಭಾರತೀದೇವಿಯ ಸ್ತುತಿ: “ಭಾರತಿದೇವಿಯನ್ನು ನೆನೆ ನೆನೆ; ನಿರಂತರ ಭಕ್ತಿಗೆ ಇದು ಮನೆ.” ಅವಳ ಗೆಜ್ಜೆ, ಕಂಕಣ, ಕುಂಡಲಗಳ ವರ್ಣನೆ, ಕೊನೆಗೆ ಪುರಂದರವಿಠಲನ ಕಿಂಕರಿ ಎಂಬ ನುಡಿ.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'The last line is given as far as the printed copy has it (the closing word करुणॆ, found only in the typed copy, is left out).',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಭಾರತಿದೇವಿಯ ನೆನೆ ನೆನೆ\nನಿರುತ ಭಕುತಿಗಿದು ಮನೆ ಮನೆ ॥',
          meaning: {
            en: 'Remember, remember Bharati Devi; to constant devotion she is the home.',
            kn: 'ಭಾರತೀದೇವಿಯನ್ನು ನೆನೆ ನೆನೆ; ನಿರಂತರ ಭಕ್ತಿಗೆ ಇದು ಮನೆ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಮಾರುತನರ್ಧಾಂಗಿ ಸುಚರಿತೆ ಕೋಮಲಾಂಗಿ\nಸಾರಸಾಕ್ಷಿ ಕೃಪಾಂಗಿ ಅಪಾಂಗಿ ॥',
          meaning: {
            en: 'Half of Vayu, of pure conduct, delicate of form, lotus-eyed, merciful, with a gracious glance.',
            kn: 'ವಾಯುದೇವರ ಅರ್ಧಾಂಗಿ, ಸುಚರಿತೆ, ಕೋಮಲಾಂಗಿ, ಕಮಲನಯನೆ, ಕೃಪಾಂಗಿ, ಕಟಾಕ್ಷವುಳ್ಳವಳು.',
          },
        },
        {
          n: 2,
          text: 'ಕಿಂಕಿಣಿ ಕಿಣಿಪಾದ ಪಂಕಜನೂಪುರ\nಕಂಕಣ ಕುಂಡಲಾಲಂಕೃತ ದೇಹ ॥',
          meaning: {
            en: 'Her lotus feet jingle with anklet bells, and her body is adorned with bangles and earrings.',
            kn: 'ಕಿಣಿಕಿಣಿ ಸದ್ದಿನ ಗೆಜ್ಜೆ ತೊಟ್ಟ ಪಾದಪದ್ಮ; ಕಂಕಣ, ಕುಂಡಲಗಳಿಂದ ಅಲಂಕೃತ ದೇಹ.',
          },
        },
        {
          n: 3,
          text: 'ಶಂಕರ ಸುರವರ ವಂದಿತ ಚರಣೆ\nಕಿಂಕರಿ ಪುರಂದರವಿಠಲ ॥',
          meaning: {
            en: 'Your feet are worshipped by Shankara and the chief gods; you are the servant of Purandara Vitthala.',
            kn: 'ಶಂಕರ ಮೊದಲಾದ ಶ್ರೇಷ್ಠ ದೇವತೆಗಳಿಂದ ವಂದಿತವಾದ ಚರಣಗಳುಳ್ಳವಳು; ಪುರಂದರವಿಠಲನ ಕಿಂಕರಿ.',
          },
        },
      ],
    },
  ],
};

export const dpDharmaveJayavemba: Mantra = {
  id: 'dasara-pada-dharmave-jayavemba',
  title: 'ಧರ್ಮವೇ ಜಯವೆಂಬ ದಿವ್ಯಮಂತ್ರ',
  titleEn: 'Purandara Dasa · Dharmave Jayavemba Divyamantra',
  category: 'dasara-pada',
  order: 51,
  sourceScript: 'kannada',
  deity: 'Sri Hari',
  source: 'Purandara Dasa',
  summary: 'A song on the divine mantra that dharma alone wins: one must return good for harm, feed with a six-flavoured meal the one who gave poison, bless those who slander, honour those who revile, and so become blessed by praising Purandara Vitthala.',
  summaryKn: '“ಧರ್ಮವೇ ಜಯ” ಎಂಬ ದಿವ್ಯಮಂತ್ರದ ಹಾಡು: ವಿಷವಿಕ್ಕಿದವನಿಗೆ ಷಡ್ರಸಾನ್ನ ಉಣಿಸಬೇಕು, ದ್ವೇಷಿಸಿದವನನ್ನು ಪೋಷಿಸಬೇಕು, ನಿಂದಿಸುವವರಿಗೆ ವಂದಿಸಬೇಕು; ಕೊನೆಗೆ ಪುರಂದರವಿಠಲನನ್ನು ಕೊಂಡಾಡಿ ಧನ್ಯನಾಗಬೇಕು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಧರ್ಮವೇ ಜಯವೆಂಬ ದಿವ್ಯಮಂತ್ರ\nಮರ್ಮವನರಿತು ಮಾಡಲು ಬೇಕು ತಂತ್ರ ॥',
          meaning: {
            en: 'Dharma wins: this is the divine mantra, and one must apply it as a skill, knowing its secret.',
            kn: '“ಧರ್ಮವೇ ಜಯ” ಎಂಬುದು ದಿವ್ಯಮಂತ್ರ; ಅದರ ಮರ್ಮವನ್ನು ಅರಿತು ತಂತ್ರವಾಗಿ ಆಚರಿಸಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ವಿಷವಿಕ್ಕಿದವಗೆ ಷಡ್ರಸವನುಣಿಸಲು ಬೇಕು\nದ್ವೇಷ ಮಾಡಿದವನ ಪೋಷಿಸಲು ಬೇಕು ।\nಪುಸಿಯಾಡಿ ಕೆಡಿಸುವನ ಹಾಡಿ ಹರಸಲು ಬೇಕು\nಮೋಸ ಮಾಡುವನ ಹೆಸರು ಮಗನಿಗಿಡಬೇಕು ॥',
          meaning: {
            en: 'One must feed a six-flavoured meal to the one who gave poison, support the one who hated, praise and bless the one who lied and ruined, and even name one’s son after the one who deceived.',
            kn: 'ವಿಷ ಹಾಕಿದವನಿಗೆ ಷಡ್ರಸಾನ್ನ ಉಣಿಸಬೇಕು; ದ್ವೇಷ ಮಾಡಿದವನನ್ನು ಪೋಷಿಸಬೇಕು; ಸುಳ್ಳಾಡಿ ಕೆಡಿಸುವವನನ್ನು ಹಾಡಿ ಹರಸಬೇಕು; ಮೋಸ ಮಾಡುವವನ ಹೆಸರನ್ನು ಮಗನಿಗೆ ಇಡಬೇಕು.',
          },
        },
        {
          n: 2,
          text: 'ಹಿಂದೆ ನಿಂದಿಪರನ್ನು ವಂದಿಸುತಲಿರಬೇಕು\nಬಂಧನದೊಳಿಟ್ಟವರ ಬೆರೆಯಬೇಕು ।\nಕೊಂದ ವೈರಿಯ ಮನೆಗೆ ನಡೆದು ಹೋಗಲು ಬೇಕು\nಕುಂದೆಣಿಸುವವರ ಗೆಳೆತನ ಮಾಡಬೇಕು ॥',
          meaning: {
            en: 'One must keep bowing to those who slander behind one’s back, mix with those who imprisoned one, walk to the house of the enemy who killed, and befriend those who find fault.',
            kn: 'ಹಿಂದೆ ನಿಂದಿಸುವವರಿಗೆ ವಂದಿಸುತ್ತಿರಬೇಕು; ಬಂಧನದಲ್ಲಿಟ್ಟವರೊಂದಿಗೆ ಬೆರೆಯಬೇಕು; ಕೊಂದ ವೈರಿಯ ಮನೆಗೆ ನಡೆದು ಹೋಗಬೇಕು; ಕುಂದು ಎಣಿಸುವವರ ಗೆಳೆತನ ಮಾಡಬೇಕು.',
          },
        },
        {
          n: 3,
          text: 'ಕೊಂಡೊಯ್ದು ಬಡಿಯುವರ ಕೊಂಡಾಡುತಿರಬೇಕು\nಕಂಡು ಸಹಿಸದವರ ಕರೆಯಬೇಕು ।\nಪುಂಡರೀಕಾಕ್ಷ ಶ್ರೀಪುರಂದರವಿಟ್ಠಲನ\nಕೊಂಡಾಡಿ ತಾ ಧನ್ಯನಾಗಬೇಕು ॥',
          meaning: {
            en: 'One must keep praising those who take one away and beat one, and call those who cannot bear the sight of one. And by praising the lotus-eyed Sri Purandara Vitthala, one must become blessed.',
            kn: 'ಕರೆದೊಯ್ದು ಬಡಿಯುವವರನ್ನು ಕೊಂಡಾಡುತ್ತಿರಬೇಕು; ಕಂಡು ಸಹಿಸದವರನ್ನು ಕರೆಯಬೇಕು. ಕಮಲನಯನ ಶ್ರೀ ಪುರಂದರವಿಠಲನನ್ನು ಕೊಂಡಾಡಿ ತಾನು ಧನ್ಯನಾಗಬೇಕು.',
          },
        },
      ],
    },
  ],
};

export const dpBuddhiMatuHelidare: Mantra = {
  id: 'dasara-pada-buddhi-matu-helidare',
  title: 'ಬುದ್ಧಿ ಮಾತು ಹೇಳಿದರೆ ಕೇಳಬೇಕಮ್ಮ',
  titleEn: 'Purandara Dasa · Buddhi Matu Helidare Kelabekamma',
  category: 'dasara-pada',
  order: 52,
  sourceScript: 'kannada',
  deity: 'Sri Hari (Purandara Vitthala)',
  source: 'Purandara Dasa',
  summary: 'A song of advice to a young bride, as a mother would give: listen to wise words, live with a pure mind beside your husband, respect your in-laws, do the household work in time, speak so that people approve, avoid anger and envy, and never forget Purandara Vitthala.',
  summaryKn: 'ತಾಯಿ ಮಗಳಿಗೆ ಹೇಳುವಂತೆ ಬುದ್ಧಿ ಹೇಳುವ ಹಾಡು: ಬುದ್ಧಿ ಮಾತು ಕೇಳು, ಮನಶುದ್ಧಿಯಿಂದ ಗಂಡನೊಂದಿಗೆ ಬಾಳು, ಅತ್ತೆಮಾವರಿಗೆ ಅಂಜಿ ನಡೆ, ಹೊತ್ತಿಗೆ ಸರಿಯಾಗಿ ಮನೆಗೆಲಸ ಮಾಡು, ಕೋಪ-ಮತ್ಸರ ಬಿಡು, ಪುರಂದರವಿಠಲನ ಸ್ಮರಣೆ ಮರೆಯಬೇಡ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಬುದ್ಧಿ ಮಾತು ಹೇಳಿದರೆ ಕೇಳಬೇಕಮ್ಮ ಮಗಳೆ ಮನ\nಶುದ್ಧಳಾಗಿ ಗಂಡನೊಡನೆ ಬಾಳಬೇಕಮ್ಮ ॥',
          meaning: {
            en: 'Daughter, when wise words are told you, you must listen; with a pure mind you must live with your husband.',
            kn: 'ಮಗಳೇ, ಬುದ್ಧಿ ಮಾತು ಹೇಳಿದರೆ ಕೇಳಬೇಕು; ಮನಶುದ್ಧಿಯಿಂದ ಗಂಡನೊಂದಿಗೆ ಬಾಳಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಅತ್ತೆ ಮಾವಗಂಜಿಕೊಂಡು ನಡೆಯಬೇಕಮ್ಮ ಮಗಳೆ\nಚಿತ್ತದೊಲ್ಲಭನ ಅಕ್ಕರೆಯನ್ನು ಪಡೆಯಬೇಕಮ್ಮ ।\nಹೊತ್ತು ಹೊತ್ತಿಗೆ ಮನೆಯ ಕೆಲಸ ಮಾಡಬೇಕಮ್ಮ ಮಗಳೆ\nಹತ್ತುಮಂದಿ ಒಪ್ಪುವ ಹಾಗೆ ನುಡಿಯಬೇಕಮ್ಮ ॥',
          meaning: {
            en: 'Daughter, behave with respectful fear of your mother-in-law and father-in-law and win the love of your beloved; do the housework on time and speak so that ten people agree.',
            kn: 'ಮಗಳೇ, ಅತ್ತೆಮಾವರಿಗೆ ಅಂಜಿ ನಡೆಯಬೇಕು; ಪ್ರಿಯನ ಅಕ್ಕರೆಯನ್ನು ಪಡೆಯಬೇಕು; ಹೊತ್ತುಹೊತ್ತಿಗೆ ಮನೆಯ ಕೆಲಸ ಮಾಡಬೇಕು; ಹತ್ತು ಮಂದಿ ಒಪ್ಪುವಂತೆ ನುಡಿಯಬೇಕು.',
          },
        },
        {
          n: 2,
          text: 'ಕೊಟ್ಟು ಕೊಂಬುವ ನಂಟರೊಡನೆ ದ್ವೇಷ ಬೇಡಮ್ಮ ಮಗಳೆ\nಅಟ್ಟು ಉಂಬುವ ಕಾಲದಲ್ಲಿ ಆಟ ಬೇಡಮ್ಮ ।\nಹಟ್ಟಿ ಬಾಗಿಲಲ್ಲಿ ಬಂದು ನಿಲ್ಲಬೇಡಮ್ಮ ಮಗಳೆ\nಕಟ್ಟಿ ಆಳುವ ಗಂಡನೊಡನೆ ಸಿಟ್ಟು ಬೇಡಮ್ಮ ॥',
          meaning: {
            en: 'Daughter, do not quarrel with the relatives with whom you exchange gifts; do not play when it is time to cook and eat; do not stand at the door of the yard; do not be angry with the husband who rules and protects you.',
            kn: 'ಮಗಳೇ, ಕೊಟ್ಟುಕೊಳ್ಳುವ ನಂಟರೊಂದಿಗೆ ದ್ವೇಷ ಬೇಡ; ಅಡುಗೆ ಮಾಡಿ ಉಣ್ಣುವ ಹೊತ್ತಿನಲ್ಲಿ ಆಟ ಬೇಡ; ಹಟ್ಟಿಯ ಬಾಗಿಲಲ್ಲಿ ಬಂದು ನಿಲ್ಲಬೇಡ; ಕಟ್ಟಿ ಆಳುವ ಗಂಡನೊಂದಿಗೆ ಸಿಟ್ಟು ಬೇಡ.',
          },
        },
        {
          n: 3,
          text: 'ನೆರೆಹೊರೆಯವರಿಗೆ ನ್ಯಾಯವನ್ನು ಹೇಳಬೇಡಮ್ಮ ಮಗಳೆ\nಗರುವ ಕೋಪ ಮತ್ಸರವನ್ನು ಮಾಡಬೇಡಮ್ಮ ।\nಪರರ ನಿಂದಿಪ ಹೆಂಗಳೊಡನೆ ಸೇರಬೇಡಮ್ಮ ಮಗಳೆ\nವರಪುರಂದರವಿಠಲನ ಸ್ಮರಣೆ ಮರೆಯಬೇಡಮ್ಮ ॥',
          meaning: {
            en: 'Daughter, do not lecture the neighbours on what is right; do not be proud, angry or envious; do not keep company with women who slander others; and never forget to remember the gracious Purandara Vitthala.',
            kn: 'ಮಗಳೇ, ನೆರೆಹೊರೆಯವರಿಗೆ ನ್ಯಾಯ ಹೇಳಬೇಡ; ಗರ್ವ, ಕೋಪ, ಮತ್ಸರ ಮಾಡಬೇಡ; ಪರರನ್ನು ನಿಂದಿಸುವ ಹೆಂಗಸರೊಂದಿಗೆ ಸೇರಬೇಡ; ವರದನಾದ ಪುರಂದರವಿಠಲನ ಸ್ಮರಣೆಯನ್ನು ಮರೆಯಬೇಡ.',
          },
        },
      ],
    },
  ],
};

export const dpNeeneAnathabandhu: Mantra = {
  id: 'dasara-pada-neene-anathabandhu',
  title: 'ನೀನೆ ಅನಾಥಬಂಧು ಕಾರುಣ್ಯಸಿಂಧು',
  titleEn: 'Purandara Dasa · Neene Anathabandhu Karunyasindhu',
  category: 'dasara-pada',
  order: 53,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A song of praise for the Lord who is the friend of the helpless: when all the mighty elephants gathered they could not help Gajendra, but you came at the call “Madhusudana”; when Draupadi’s five husbands could not save her, you gave her endless cloth.',
  summaryKn: 'ಅನಾಥರ ಬಂಧುವಾದ ಕೃಷ್ಣನ ಸ್ತುತಿ: ಮದಗಜಗಳೆಲ್ಲ ಕೂಡಿದರೂ ಗಜೇಂದ್ರನ ವೇಳೆಗೆ ಒದಗಲಿಲ್ಲ, ನೀನು “ಮಧುಸೂದನ” ಎನ್ನಲು ಬಂದೆ; ಐವರು ಪತಿಗಳಿದ್ದರೂ ಸತಿಯ ಭಂಗ ಬಿಡಿಸಲಿಲ್ಲ, ನೀನು ಅಕ್ಷಯ ವಸ್ತ್ರವಿತ್ತೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ನೀನೆ ಅನಾಥಬಂಧು ಕಾರುಣ್ಯಸಿಂಧು ॥',
          meaning: {
            en: 'You alone are the friend of the helpless, an ocean of compassion.',
            kn: 'ನೀನೇ ಅನಾಥರ ಬಂಧು, ಕರುಣೆಯ ಸಮುದ್ರ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಮದಗಜವೆಲ್ಲ ಕೂಡಿದರೇನು ಅದರ ವೇಳೆಗೆ ಒದಗಲಿಲ್ಲ ।\nಮದನನಯ್ಯ ಮಧುಸೂದನ ಎನ್ನಲು\nಮುದದಿಂದಲಿ ಬಂದೊದಗಿದೆ ಕೃಷ್ಣಾ ॥',
          meaning: {
            en: 'What use was it that all the mad elephants gathered? None helped at that hour. But when he cried “Madhusudana, father of Manmatha!”, you came gladly to his aid, Krishna.',
            kn: 'ಮದಗಜಗಳೆಲ್ಲ ಕೂಡಿದರೇನು? ಆ ವೇಳೆಗೆ ಯಾರೂ ಒದಗಲಿಲ್ಲ. “ಮದನನ ತಂದೆಯೇ, ಮಧುಸೂದನ!” ಎನ್ನಲು ನೀನು ಸಂತೋಷದಿಂದ ಬಂದು ಒದಗಿದೆ, ಕೃಷ್ಣಾ.',
          },
        },
        {
          n: 2,
          text: 'ಪತಿಗಳೈವರಿದ್ದರೇನು ಸತಿಯ ಭಂಗ ಬಿಡಿಸಲಿಲ್ಲ ।\nಗತಿ ಮುಕುಂದ ಎನ್ನಲು\nಅತಿವೇಗದಿ ಅಕ್ಷಯವಿತ್ತೆ ಕೃಷ್ಣಾ ॥',
          meaning: {
            en: 'What use were five husbands? They did not save their wife from disgrace. When she cried “Mukunda is my refuge”, you quickly gave her endless cloth, Krishna.',
            kn: 'ಐವರು ಪತಿಗಳಿದ್ದರೇನು? ಸತಿಯ ಅವಮಾನವನ್ನು ತಪ್ಪಿಸಲಿಲ್ಲ. “ಮುಕುಂದನೇ ಗತಿ” ಎನ್ನಲು ನೀನು ಅತಿ ವೇಗದಿಂದ ಅಕ್ಷಯ ವಸ್ತ್ರವನ್ನು ಕೊಟ್ಟೆ, ಕೃಷ್ಣಾ.',
          },
        },
        {
          n: 3,
          text: 'ಶಿಲೆಯ ರಕ್ಷಿಸಿ ಕುಲಕೆ ತಂದೆ\nಬಲಿಗೆ ಒಲಿದು ಪದವಿಯಿತ್ತೆ ।\nಸುಲಭದಿ ಭಕ್ತರ ಸಲುಹುವ ನಮ್ಮ\nಚೆಲುವ ಪುರಂದರವಿಟ್ಠಲರಾಯ ॥',
          meaning: {
            en: 'You rescued the stone (Ahalya) and restored her to her family; you favoured Bali and gave him a high position. Our handsome Lord Purandara Vitthala, who easily protects his devotees.',
            kn: 'ಶಿಲೆಯಾದವಳನ್ನು (ಅಹಲ್ಯೆಯನ್ನು) ರಕ್ಷಿಸಿ ಕುಲಕ್ಕೆ ಮರಳಿ ತಂದೆ; ಬಲಿಗೆ ಒಲಿದು ಪದವಿಯನ್ನು ಕೊಟ್ಟೆ. ಭಕ್ತರನ್ನು ಸುಲಭವಾಗಿ ಕಾಯುವ ನಮ್ಮ ಚೆಲುವ ಪುರಂದರವಿಠಲರಾಯನೇ.',
          },
        },
      ],
    },
  ],
};

export const dpDharanigeDoreyenduNambide: Mantra = {
  id: 'dasara-pada-dharanige-doreyendu-nambide',
  title: 'ಧರಣಿಗೆ ದೊರೆಯೆಂದು ನಂಬಿದೆ',
  titleEn: 'Purandara Dasa · Dharanige Doreyendu Nambide',
  category: 'dasara-pada',
  order: 54,
  sourceScript: 'kannada',
  deity: 'Sri Hari',
  source: 'Purandara Dasa',
  summary: 'A playful song of loving complaint in the Haridasa manner: “I trusted you as lord of the earth, but I did not know you were such a miser, Hari.” It recalls, with teasing, the Lord’s avataras and ends: wherever you go, I will not let you go, Purandara Vitthala.',
  summaryKn: 'ದಾಸರ ಪ್ರೀತಿಯ ತಮಾಷೆಯ ಮುನಿಸಿನ ಹಾಡು: “ಧರಣಿಗೆ ದೊರೆಯೆಂದು ನಂಬಿದೆ; ಇಂಥ ಪರಮಲೋಭಿಯೆಂದು ಅರಿಯೆ, ಶ್ರೀಹರಿಯೇ.” ಅವತಾರಗಳನ್ನು ಕೀಟಲೆಯಿಂದ ನೆನೆದು, “ಎಲ್ಲಿ ಹೋದರೂ ನಿನ್ನನ್ನು ಬಿಡೆನು” ಎಂದು ಮುಗಿಸುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಧರಣಿಗೆ ದೊರೆಯೆಂದು ನಂಬಿದೆ ಇಂಥ\nಪರಮಲೋಭಿ ಎಂಬುದರಿಯೆ ಶ್ರೀಹರಿಯೆ ॥',
          meaning: {
            en: 'I trusted you as the lord of the earth; I did not know you were such a great miser, Sri Hari.',
            kn: 'ನಿನ್ನನ್ನು ಧರಣಿಗೆ ದೊರೆಯೆಂದು ನಂಬಿದೆ; ಇಂಥ ಪರಮಲೋಭಿ ಎಂದು ಅರಿಯೆ, ಶ್ರೀಹರಿಯೇ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಕಾಡಿ ಬೇಡುವರಿಗೆ ಕೊಡಲಾರದೆ ಅಂಜಿ\nಓಡಿ ನೀರೊಳು ಸೇರಿಕೊಂಡೆ ಬೇಗ ।\nಹೇಡಿಯ ತೆರದಲಿ ಮೋರೆಯ ತೋರದೆ\nಓಡಿ ಅರಣ್ಯದಿ ಮೃಗಗಳ ಸೇರ್ದೆ ॥',
          meaning: {
            en: 'Afraid of being unable to give to those who plead and press, you ran and hid in the water. Like a coward, not showing your face, you fled to the forest and joined the beasts.',
            kn: 'ಕಾಡಿಬೇಡುವವರಿಗೆ ಕೊಡಲಾರದೆ ಅಂಜಿ, ಓಡಿ ನೀರಿನೊಳಗೆ ಸೇರಿಕೊಂಡೆ. ಹೇಡಿಯಂತೆ ಮುಖ ತೋರಿಸದೆ ಓಡಿ ಕಾಡಿನಲ್ಲಿ ಮೃಗಗಳೊಂದಿಗೆ ಸೇರಿದೆ.',
          },
        },
        {
          n: 2,
          text: 'ಬಡವರ ಬಿನ್ನಹ ಲಾಲಿಸದೆ ಹಲ್ಲ\nಕಡು ಕೋಪದಲಿ ತೆರೆದಂಜಿಸಿದೆ ।\nತಡೆಯದೆ ಭಿಕ್ಷುಕನಾದರೆ ಬಿಡರೆಂದು\nಕೊಡಲಿಯ ಪಿಡಿದು ಕೋಡಗಹಿಂಡ ಕಾಯ್ದೆ ॥',
          meaning: {
            en: 'Not heeding the poor man’s plea, you bared your teeth in great anger and frightened him. Thinking that if you came as a beggar they would not let you go, you took up an axe and guarded a troop of monkeys.',
            kn: 'ಬಡವರ ಬಿನ್ನಹವನ್ನು ಲಾಲಿಸದೆ ಅತಿ ಕೋಪದಿಂದ ಹಲ್ಲು ತೆರೆದು ಹೆದರಿಸಿದೆ. ಭಿಕ್ಷುಕನಾದರೆ ಬಿಡರೆಂದು ಕೊಡಲಿ ಹಿಡಿದು ಕೋತಿಗಳ ಹಿಂಡನ್ನು ಕಾಯ್ದೆ.',
          },
        },
        {
          n: 3,
          text: 'ಉತ್ತಮನೆಂದರೆ ಮತ್ತೆ ಚೋರನಾದೆ\nಬತ್ತಲೆ ನಿಂತೆ ತೇಜಿಯನೇರಿದೆ ।\nಎತ್ತಹೋದರು ಬಿಡೆ ಮತ್ತೆ ನಿನ್ನನು ದೇವ\nಚಿತ್ತಜಜನಕ ಶ್ರೀ ಪುರಂದರವಿಠಲ ॥',
          meaning: {
            en: 'When people called you the best, you became a thief; you stood bare and mounted a horse. Wherever you go I will not let you go, Lord, father of Manmatha, Sri Purandara Vitthala.',
            kn: '“ಉತ್ತಮ” ಎಂದರೆ ಮತ್ತೆ ಕಳ್ಳನಾದೆ; ಬತ್ತಲೆ ನಿಂತೆ, ಕುದುರೆಯನ್ನು ಏರಿದೆ. ಎಲ್ಲಿ ಹೋದರೂ ನಿನ್ನನ್ನು ಬಿಡೆನು, ದೇವಾ, ಚಿತ್ತಜಜನಕ ಶ್ರೀ ಪುರಂದರವಿಠಲ.',
          },
        },
      ],
    },
  ],
};

export const dpYadavaNeeBa: Mantra = {
  id: 'dasara-pada-yadava-nee-ba',
  title: 'ಯಾದವ ನೀ ಬಾ ಯದುಕುಲ ನಂದನ',
  titleEn: 'Purandara Dasa · Yadava Nee Ba Yadukula Nandana',
  category: 'dasara-pada',
  order: 55,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A song inviting Krishna, the delight of the Yadu clan, to come: the slayer of his uncle at Mathura, son of Yashoda, who comes with ringing anklets, flute, sticks and tops among the little cowherds, holding conch and discus, spotless Adinarayana, rider of Garuda.',
  summaryKn: 'ಯದುಕುಲನಂದನ ಕೃಷ್ಣನನ್ನು ಕರೆಯುವ ಹಾಡು: ಮಥುರೆಯಲ್ಲಿ ಸೋದರಮಾವನನ್ನು ಕೊಂದ ಯಶೋದಾನಂದನೇ, ಗೆಜ್ಜೆ, ವೇಣುನಾದ, ಚಿಣಿಕೋಲು, ಚೆಂಡು, ಬುಗುರಿಯೊಂದಿಗೆ ಬಾ; ಶಂಖಚಕ್ರಧರ, ಅಕಳಂಕ ಮಹಿಮ ಆದಿನಾರಾಯಣ, ಖಗವಾಹನನೇ ಬಾ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಯಾದವ ನೀ ಬಾ ಯದುಕುಲ ನಂದನ\nಮಾಧವ ಮಧುಸೂದನ ಬಾರೊ ॥',
          meaning: {
            en: 'Come, Yadava, delight of the Yadu clan; come, Madhava, Madhusudana.',
            kn: 'ಯಾದವನೇ ಬಾ, ಯದುಕುಲನಂದನನೇ; ಮಾಧವ, ಮಧುಸೂದನ, ಬಾರೋ.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಸೋದರಮಾವನ ಮಧುರೆಲಿ ಮಡುಹಿದ ಯ-\nಶೋದೆ ನಂದನ ನೀ ಬಾರೊ ॥',
          meaning: {
            en: 'Come, son of Yashoda, who killed his maternal uncle at Mathura.',
            kn: 'ಮಥುರೆಯಲ್ಲಿ ಸೋದರಮಾವನನ್ನು ಕೊಂದ ಯಶೋದೆಯ ನಂದನನೇ, ನೀ ಬಾರೋ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಕಣಕಾಲಂದುಗೆ ಘಲುಘಲುರೆನುತಲಿ\nಝಣಝಣ ವೇಣುನಾದದಲಿ ।\nಚಿಣಿಕೋಲ್ ಚೆಂಡು ಬುಗುರಿಯನಾಡುತ\nಸಣ್ಣ ಸಣ್ಣ ಗೋವಳರೊಡಗೂಡಿ ।\nಶಂಖ ಚಕ್ರವು ಕೈಯಲಿ ಹೊಳೆಯುತ\nಬಿಂಕದ ಗೋವಳ ನೀ ಬಾರೊ ॥',
          meaning: {
            en: 'With ankle bells chiming, with the ringing sound of the flute, playing with sticks, ball and tops among the little cowherd boys, with conch and discus shining in your hands, come, proud cowherd.',
            kn: 'ಕಣಕಾಲಿನ ಅಂದುಗೆ ಘಲುಘಲು ಎನ್ನುತ್ತ, ಝಣಝಣ ವೇಣುನಾದದೊಂದಿಗೆ, ಚಿಣಿಕೋಲು, ಚೆಂಡು, ಬುಗುರಿಯನ್ನು ಆಡುತ್ತ, ಪುಟ್ಟ ಗೋವಳರೊಡನೆ ಕೂಡಿ, ಶಂಖಚಕ್ರ ಕೈಯಲ್ಲಿ ಹೊಳೆಯುತ್ತಿರಲು, ಬಿಂಕದ ಗೋವಳನೇ ನೀ ಬಾರೋ.',
          },
        },
        {
          n: 2,
          text: 'ಅಕಳಂಕ ಮಹಿಮನೆ ಆದಿನಾರಾಯಣ\nಬೇಕೆಂಬ ಭಕ್ತರಿಗೊಲಿ ಬಾರೊ ।\nಖಗವಾಹನನೆ ಬಗೆಬಗೆಯಿಂದಲಿ\nನಗೆಮೊಗದರಸನೆ ನೀ ಬಾರೊ ।\nಜಗದೊಳು ನಿನ್ನಯ ಮಹಿಮೆಯ ಪೊಗಳುವೆ\nಪುರಂದರವಿಟ್ಠಲ ನೀ ಬಾರೊ ॥',
          meaning: {
            en: 'Spotless in glory, Adinarayana, come and favour the devotees who long for you; rider of the bird, smiling-faced king, come in many ways. I will praise your greatness in the world: Purandara Vitthala, come.',
            kn: 'ಕಳಂಕವಿಲ್ಲದ ಮಹಿಮನೇ, ಆದಿನಾರಾಯಣನೇ, ನಿನ್ನನ್ನು ಬೇಕೆಂಬ ಭಕ್ತರಿಗೆ ಒಲಿದು ಬಾ; ಖಗವಾಹನನೇ, ಬಗೆಬಗೆಯಿಂದ, ನಗೆಮುಖದ ಅರಸನೇ, ನೀ ಬಾರೋ. ಜಗತ್ತಿನಲ್ಲಿ ನಿನ್ನ ಮಹಿಮೆಯನ್ನು ಹೊಗಳುತ್ತೇನೆ; ಪುರಂದರವಿಠಲ, ನೀ ಬಾರೋ.',
          },
        },
      ],
    },
  ],
};

export const dpBannisiGopiHarasidalu: Mantra = {
  id: 'dasara-pada-bannisi-gopi-harasidalu',
  title: 'ಬಣ್ಣಿಸಿ ಗೋಪಿ ಹರಸಿದಳು',
  titleEn: 'Purandara Dasa · Bannisi Gopi Harasidalu',
  category: 'dasara-pada',
  order: 56,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A song of blessing: while oiling the child Krishna for his bath, the gopi Yashoda praises him and blesses him with a series of wishes (“be long-lived, be mighty, be the destroyer of wicked demons, be the lord of Rukmini and of Dwaraka, be Srinivasa”).',
  summaryKn: 'ಆಶೀರ್ವಾದದ ಹಾಡು: ಎಣ್ಣೆ ಹಚ್ಚುತ್ತ ಗೋಪಿ ಯಶೋದೆ ಬಾಲಕೃಷ್ಣನನ್ನು ಬಣ್ಣಿಸಿ ಹರಸುತ್ತಾಳೆ: “ಆಯುಷ್ಯವಂತನಾಗು, ಬಲ್ಲಿದನಾಗು, ಮಾಯದ ಖಳರ ಮರ್ದನನಾಗು, ರುಕ್ಮಿಣಿಗೆ ಅರಸನಾಗು, ದ್ವಾರಾವತಿಗೆ ದೊರೆಯಾಗು, ಶ್ರೀನಿವಾಸನಾಗು.”',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಬಣ್ಣಿಸಿ ಗೋಪಿ ಹರಸಿದಳು ॥',
          meaning: {
            en: 'Describing him lovingly, the gopi blessed him.',
            kn: 'ಬಣ್ಣಿಸಿ ಗೋಪಿ ಹರಸಿದಳು.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ಎಣ್ಣೆಯನೊತ್ತುತ ಯದುಕುಲ ತಿಲಕಗೆ ॥',
          meaning: {
            en: 'Rubbing oil on the jewel of the Yadu clan.',
            kn: 'ಎಣ್ಣೆ ಹಚ್ಚುತ್ತ ಯದುಕುಲ ತಿಲಕನಿಗೆ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಆಯುಷ್ಯವಂತನಾಗು ಅತಿ ಬಲ್ಲಿದನಾಗು\nಮಾಯದ ಖಳರ ಮರ್ದನನಾಗು ।\nರಾಯರ ಪಾಲಿಸು ರಕ್ಕಸರ ಸೋಲಿಸು\nವಾಯುಸುತಗೆ ನೀನೊಡೆಯನಾಗೆನುತ ॥',
          meaning: {
            en: '“Be long-lived, be exceedingly mighty, be the crusher of wicked deceivers; protect kings and defeat demons; be the master of Vayu’s son,” she said.',
            kn: '“ಆಯುಷ್ಯವಂತನಾಗು, ಅತಿ ಬಲ್ಲಿದನಾಗು, ಮಾಯಾವಿ ಖಳರನ್ನು ಮರ್ದಿಸುವವನಾಗು; ರಾಜರನ್ನು ಪಾಲಿಸು, ರಾಕ್ಷಸರನ್ನು ಸೋಲಿಸು; ವಾಯುಸುತನಿಗೆ ನೀನು ಒಡೆಯನಾಗು” ಎನ್ನುತ್ತ.',
          },
        },
        {
          n: 2,
          text: 'ಧೀರನು ನೀನಾಗು ದಯಾಂಬುಧಿಯಾಗು\nಆ ರುಕ್ಮಿಣಿಗೆ ನೀನರಸನಾಗು ।\nಮಾರನ ಪಿತನಾಗು ಮಧುಸೂದನನಾಗು\nದ್ವಾರಾವತಿಗೆ ನೀ ಧೊರೆಯಾಗೆನುತ ॥',
          meaning: {
            en: '“Be brave, be an ocean of mercy; be the husband of Rukmini; be the father of Manmatha, be Madhusudana; be the lord of Dwaraka,” she said.',
            kn: '“ಧೀರನಾಗು, ದಯಾಸಾಗರನಾಗು; ಆ ರುಕ್ಮಿಣಿಗೆ ಅರಸನಾಗು; ಮಾರನ ಪಿತನಾಗು, ಮಧುಸೂದನನಾಗು; ದ್ವಾರಾವತಿಗೆ ದೊರೆಯಾಗು” ಎನ್ನುತ್ತ.',
          },
        },
        {
          n: 3,
          text: 'ಆನಂದ ನೀನಾಗು ಅಚ್ಯುತ ನೀನಾಗು\nದಾನವಾಂತಕನಾಗು ದಯವಾಗು ।\nಶ್ರೀನಿವಾಸನಾಗು ಶ್ರೀನಿಧಿ ನೀನಾಗು\nಜ್ಞಾನಿ ಪುರಂದರವಿಠಲನಾಗೆನುತ ॥',
          meaning: {
            en: '“Be bliss, be Achyuta; be the destroyer of demons, be mercy; be Srinivasa, be Srinidhi; be the knower, Purandara Vitthala,” she said.',
            kn: '“ಆನಂದನಾಗು, ಅಚ್ಯುತನಾಗು; ದಾನವಾಂತಕನಾಗು, ದಯಾಮಯನಾಗು; ಶ್ರೀನಿವಾಸನಾಗು, ಶ್ರೀನಿಧಿಯಾಗು; ಜ್ಞಾನಿ ಪುರಂದರವಿಠಲನಾಗು” ಎನ್ನುತ್ತ.',
          },
        },
      ],
    },
  ],
};

export const dpMangalaMaramanage: Mantra = {
  id: 'dasara-pada-mangala-maramanage',
  title: 'ಮಂಗಳ ಮಾರಮಣನಿಗೆ',
  titleEn: 'Purandara Dasa · Mangala Maramanage',
  category: 'dasara-pada',
  order: 57,
  sourceScript: 'kannada',
  deity: 'Sri Hari (Dashavatara)',
  source: 'Purandara Dasa',
  summary: 'A mangalarati song offering auspiciousness to the Lord limb by limb through his ten avataras: crown to Matsya, face to Kurma, neck to Varaha, nails to Narasimha, chest to Vamana, sides to Parashurama, waist to Rama, belly to Krishna, thighs to Buddha and feet to Kalki.',
  summaryKn: 'ದಶಾವತಾರದ ಮೂಲಕ ಭಗವಂತನ ಅಂಗಾಂಗಗಳಿಗೆ ಮಂಗಳ ಹೇಳುವ ಮಂಗಳಾರತಿ ಪದ: ಮುಕುಟಕ್ಕೆ ಮತ್ಸ್ಯ, ಮುಖಕ್ಕೆ ಕೂರ್ಮ, ಕಂಠಕ್ಕೆ ವರಾಹ, ಉಗುರಿಗೆ ನರಸಿಂಹ, ವಕ್ಷಕ್ಕೆ ವಾಮನ, ಪಕ್ಷಕ್ಕೆ ಭಾರ್ಗವ, ಕಕ್ಷಕ್ಕೆ ರಾಮ, ಕುಕ್ಷಿಗೆ ಕೃಷ್ಣ, ಊರುಗಳಿಗೆ ಬೌದ್ಧ, ಚರಣಕ್ಕೆ ಕಲ್ಕಿ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಮಂಗಳ ಮಾರಮಣನಿಗೆ ಶುಭಮಂಗಳ ಭೂರಮಣನಿಗೆ ।\nಜಯ ಮಂಗಳಂ ನಿತ್ಯ ಶುಭಮಂಗಳಂ ॥',
          meaning: {
            en: 'Auspiciousness to the husband of Lakshmi, blessed auspiciousness to the husband of Bhudevi; victory and ever-new blessings.',
            kn: 'ಲಕ್ಷ್ಮೀರಮಣನಿಗೆ ಮಂಗಳ, ಭೂರಮಣನಿಗೆ ಶುಭಮಂಗಳ; ಜಯ ಮಂಗಳ, ನಿತ್ಯ ಶುಭಮಂಗಳ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಮುಕುಟಕ್ಕೆ ಮಂಗಳ ಮತ್ಸ್ಯಾವತಾರಗೆ\nಮುಖಕೆ ಮಂಗಳ ಮುದ್ದು ಕೂರ್ಮನಿಗೆ ।\nಸುಕಂಠಕ್ಕೆ ಮಂಗಳ ಸೂಕರ ರೂಪಗೆ\nನಖಕೆ ಮಂಗಳ ಮುದ್ದು ನರಸಿಂಹಗೆ ॥',
          meaning: {
            en: 'Blessings on the crown, to the Fish avatara; on the face, to the dear Tortoise; on the fair neck, to the Boar form; on the nails, to the dear Narasimha.',
            kn: 'ಮುಕುಟಕ್ಕೆ ಮತ್ಸ್ಯಾವತಾರನಿಗೆ ಮಂಗಳ; ಮುಖಕ್ಕೆ ಮುದ್ದು ಕೂರ್ಮನಿಗೆ ಮಂಗಳ; ಸುಂದರ ಕಂಠಕ್ಕೆ ವರಾಹರೂಪನಿಗೆ ಮಂಗಳ; ಉಗುರಿಗೆ ಮುದ್ದು ನರಸಿಂಹನಿಗೆ ಮಂಗಳ.',
          },
        },
        {
          n: 2,
          text: 'ವಕ್ಷಕೆ ಮಂಗಳ ವಟುವಾಮನಗೆ\nಪಕ್ಷಕೆ ಮಂಗಳ ಭಾರ್ಗವಗೆ ।\nಕಕ್ಷಕ್ಕೆ ಮಂಗಳ ಕಾಕುತ್ಸ್ಥ ರಾಮನಿಗೆ\nಕುಕ್ಷಿಗೆ ಮಂಗಳ ಸಿರಿಕೃಷ್ಣಗೆ ॥',
          meaning: {
            en: 'Blessings on the chest, to the boy Vamana; on the sides, to Parashurama; on the waist, to Rama of the Kakutstha line; on the belly, to Sri Krishna.',
            kn: 'ವಕ್ಷಕ್ಕೆ ವಟುವಾಮನನಿಗೆ ಮಂಗಳ; ಪಕ್ಷಕ್ಕೆ (ಪಾರ್ಶ್ವಕ್ಕೆ) ಭಾರ್ಗವನಿಗೆ ಮಂಗಳ; ಕಕ್ಷಕ್ಕೆ ಕಾಕುತ್ಸ್ಥ ರಾಮನಿಗೆ ಮಂಗಳ; ಕುಕ್ಷಿಗೆ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಮಂಗಳ.',
          },
        },
        {
          n: 3,
          text: 'ಊರುಗಳಿಗೆ ಮಂಗಳ ಉತ್ತಮ ಬೌದ್ಧಗೆ\nಚರಣಕ್ಕೆ ಮಂಗಳ ಚಲುವ ಶ್ರೀಕಲ್ಕಿಗೆ ।\nಪರಿಪರಿರೂಪಗೆ ಪರಮ ಮಂಗಳ ನಮ್ಮ\nಪುರಂದರವಿಠಲಗೆ ಶುಭಮಂಗಳ ॥',
          meaning: {
            en: 'Blessings on the thighs, to the excellent Buddha; on the feet, to the handsome Sri Kalki; supreme blessings to him of many forms, our Purandara Vitthala: auspiciousness.',
            kn: 'ಊರುಗಳಿಗೆ ಉತ್ತಮ ಬೌದ್ಧನಿಗೆ ಮಂಗಳ; ಚರಣಕ್ಕೆ ಚೆಲುವ ಶ್ರೀಕಲ್ಕಿಗೆ ಮಂಗಳ; ಪರಿಪರಿ ರೂಪಗಳ ಪರಮ ಮಂಗಳಮೂರ್ತಿ, ನಮ್ಮ ಪುರಂದರವಿಠಲನಿಗೆ ಶುಭಮಂಗಳ.',
          },
        },
      ],
    },
  ],
};

export const dpInduNinnaMareyaHokke: Mantra = {
  id: 'dasara-pada-indu-ninna-mareya-hokke',
  title: 'ಇಂದು ನಿನ್ನ ಮರೆಯ ಹೊಕ್ಕೆ ವೆಂಕಟೇಶನೆ',
  titleEn: 'Purandara Dasa · Indu Ninna Mareya Hokke Venkateshane',
  category: 'dasara-pada',
  order: 58,
  sourceScript: 'kannada',
  deity: 'Sri Venkateshvara',
  source: 'Purandara Dasa',
  summary: 'A short song of refuge in Venkateshvara: “Today I have taken shelter in you; protect me whenever you will, Srinivasa.” The singer calls himself the Lord’s servant for ever, asks not to be tormented or sent to Yama’s city, and begs for liberation.',
  summaryKn: 'ವೆಂಕಟೇಶ್ವರನ ಶರಣಾಗತಿಯ ಚಿಕ್ಕ ಹಾಡು: “ಇಂದು ನಿನ್ನ ಮರೆಯ ಹೊಕ್ಕೆ; ಎಂದಿಗಾದರೂ ನನ್ನನ್ನು ಕಾಯೋ, ಶ್ರೀನಿವಾಸನೇ.” ಎಷ್ಟು ದಿನವಾದರೂ ನಿನ್ನ ಪಾದದಾಸ ನಾನು; ಕ್ಲೇಶ ಕೊಡಬೇಡ, ಯಮಪುರದಲ್ಲಿ ಶಿಕ್ಷಿಸಬೇಡ, ಮುಕ್ತಿಯನ್ನು ಕರುಣಿಸು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ಇಂದು ನಿನ್ನ ಮರೆಯ ಹೊಕ್ಕೆ ವೆಂಕಟೇಶನೆ\nಎಂದಿಗಾದರೆನ್ನ ಕಾಯೊ ಶ್ರೀನಿವಾಸನೆ ॥',
          meaning: {
            en: 'Today I have taken shelter in you, Venkatesha; at any time you wish, protect me, Srinivasa.',
            kn: 'ಇಂದು ನಿನ್ನ ಮರೆಯ ಹೊಕ್ಕೆ, ವೆಂಕಟೇಶನೇ; ಎಂದಿಗಾದರೂ ನನ್ನನ್ನು ಕಾಯೋ, ಶ್ರೀನಿವಾಸನೇ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಶೇಷಗಿರಿಯವಾಸ ಶ್ರೀಶ ದೋಷರಹಿತನೆ\nಏಸು ದಿನಕು ನಿನ್ನ ಪಾದದಾಸನು ನಾನೆ ।\nಕ್ಲೇಶಗೈಸದಿರು ಎನ್ನ ಸ್ವಾಮಿಯು ನೀನೆ ॥',
          meaning: {
            en: 'Dweller on Sheshagiri, Lord of Lakshmi, free of all fault: for as many days as there are, I am the servant of your feet; do not torment me, you are my master.',
            kn: 'ಶೇಷಗಿರಿವಾಸನೇ, ಶ್ರೀಶನೇ, ದೋಷರಹಿತನೇ, ಎಷ್ಟು ದಿನವಾದರೂ ನಾನು ನಿನ್ನ ಪಾದದಾಸ. ಕ್ಲೇಶ ಕೊಡಬೇಡ; ನನ್ನ ಸ್ವಾಮಿ ನೀನೇ.',
          },
        },
        {
          n: 2,
          text: 'ಕಮಲನಯನ ಕಾಮಜನಕ ಕರುಣವಾರಿಧೇ\nರಮೆಯನಾಳ್ವ ಕಮಲನಾಭ ಹೇ ದಯಾನಿಧೇ ।\nಯಮನ ಪುರದಿ ಶಿಕ್ಷಿಸದಿರು ಪಾರ್ಥಸಾರಥೇ ॥',
          meaning: {
            en: 'Lotus-eyed father of Manmatha, ocean of mercy, lotus-navelled husband of Rama (Lakshmi), treasure of compassion: do not let me be punished in Yama’s city, charioteer of Partha.',
            kn: 'ಕಮಲನಯನನೇ, ಕಾಮಜನಕನೇ, ಕರುಣೆಯ ಕಡಲೇ, ರಮೆಯನ್ನು ಆಳುವ ಕಮಲನಾಭನೇ, ದಯಾನಿಧಿಯೇ, ಪಾರ್ಥಸಾರಥಿಯೇ, ಯಮನ ಪುರದಲ್ಲಿ ಶಿಕ್ಷಿಸಬೇಡ.',
          },
        },
        {
          n: 3,
          text: 'ಉರಗಶಯನ ಸುರರಿಗೊಡೆಯ ಸಿರಿಯ ರಮಣನೆ\nಶರಣಪಾಲ ಬಿರುದು ತೋರಿ ಪೊರೆವ ದೇವನೆ ।\nಕರುಣಿಸೆನಗೆ ಮುಕುತಿಯ ಪುರಂದರವಿಠಲನೆ ॥',
          meaning: {
            en: 'Lord who rests on the serpent, master of the gods, husband of Sri; God who shows his title of protector of those who surrender and guards them: grant me liberation, Purandara Vitthala.',
            kn: 'ಉರಗಶಯನನೇ, ದೇವತೆಗಳ ಒಡೆಯನೇ, ಸಿರಿರಮಣನೇ, ಶರಣರನ್ನು ಪಾಲಿಸುವ ಬಿರುದನ್ನು ತೋರಿ ಕಾಯುವ ದೇವನೇ, ಪುರಂದರವಿಠಲನೇ, ನನಗೆ ಮುಕ್ತಿಯನ್ನು ಕರುಣಿಸು.',
          },
        },
      ],
    },
  ],
};

export const dpNinnaNodiDhanyanadeno: Mantra = {
  id: 'dasara-pada-ninna-nodi-dhanyanadeno',
  title: 'ನಿನ್ನ ನೋಡಿ ಧನ್ಯನಾದೆನೊ',
  titleEn: 'Purandara Dasa · Ninna Nodi Dhanyanadeno',
  category: 'dasara-pada',
  order: 59,
  sourceScript: 'kannada',
  deity: 'Sri Srinivasa (Panduranga)',
  source: 'Purandara Dasa',
  summary: 'A song of joy at the sight of the Lord: “Seeing you I am blessed, Srinivasa.” The singer, after wandering from land to land and being bound by desire, begs the Lord of Lakshmi to accept him as his servant and grant him unbroken service within his heart.',
  summaryKn: 'ಭಗವಂತನ ದರ್ಶನದಿಂದ ಧನ್ಯನಾದ ಆನಂದದ ಹಾಡು: “ನಿನ್ನ ನೋಡಿ ಧನ್ಯನಾದೆ, ಶ್ರೀನಿವಾಸ.” ದೇಶದೇಶ ತಿರುಗಿ ಆಶೆಯ ಬಂಧನದಲ್ಲಿ ಬಿದ್ದ ನಾನು ನಿನ್ನ ದಾಸನಲ್ಲವೆ ಎಂದು ಅಂತರಂಗದಲ್ಲಿ ನಿರಂತರ ಸೇವೆಯನ್ನು ಕರುಣಿಸಬೇಕೆಂದು ಬೇಡುತ್ತಾನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ನಿನ್ನ ನೋಡಿ ಧನ್ಯನಾದೆನೊ ಹೇ ಶ್ರೀನಿವಾಸ ॥',
          meaning: {
            en: 'Seeing you I am blessed, Sri Srinivasa.',
            kn: 'ನಿನ್ನನ್ನು ನೋಡಿ ಧನ್ಯನಾದೆನು, ಹೇ ಶ್ರೀನಿವಾಸ.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ನಿನ್ನ ನೋಡಿ ಧನ್ಯನಾದೆ ಎನ್ನ ಮನೋನಯನಕೀಗ-\nಇನ್ನು ದಯಮಾಡು ಸುಪ್ರಸನ್ನ ಸ್ವಾಮಿ ಪಾಂಡುರಂಗ ॥',
          meaning: {
            en: 'Seeing you I am blessed; now be kind to my mind’s eye, gracious Lord Panduranga.',
            kn: 'ನಿನ್ನನ್ನು ನೋಡಿ ಧನ್ಯನಾದೆ; ನನ್ನ ಮನೋನಯನಕ್ಕೆ ಈಗ ಇನ್ನು ದಯೆ ಮಾಡು, ಸುಪ್ರಸನ್ನ ಸ್ವಾಮಿ ಪಾಂಡುರಂಗ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಪಕ್ಷಿವಾಹನ ಲಕ್ಷ್ಮೀರಮಣ\nಲಕ್ಷ್ಮಿ ನಿನ್ನ ವಕ್ಷದಲ್ಲಿ ।\nರಕ್ಷ ಶಿಕ್ಷಣದಕ್ಷ ಪಾಂಡವ\nಪಕ್ಷ ರಕ್ಷ ಕಮಲಾಕ್ಷ ॥',
          meaning: {
            en: 'Rider of the bird, husband of Lakshmi, who rests on your chest; protector, expert in correction, guardian of the Pandavas’ side, lotus-eyed.',
            kn: 'ಪಕ್ಷಿವಾಹನನೇ, ಲಕ್ಷ್ಮೀರಮಣನೇ, ಲಕ್ಷ್ಮಿಯು ನಿನ್ನ ವಕ್ಷದಲ್ಲಿದ್ದಾಳೆ; ರಕ್ಷಕನೇ, ಶಿಕ್ಷಣದಲ್ಲಿ ದಕ್ಷನೇ, ಪಾಂಡವಪಕ್ಷರಕ್ಷಕನೇ, ಕಮಲಾಕ್ಷನೇ.',
          },
        },
        {
          n: 2,
          text: 'ದೇಶದೇಶ ತಿರುಗಿ ನಾನು\nಆಶಾಬದ್ಧನಾದೆ ಸ್ವಾಮಿ ।\nದಾಸನು ನಾನಲ್ಲವೆ ಜಗ-\nದೀಶ ಶ್ರೀಶ ಶ್ರೀನಿವಾಸ ॥',
          meaning: {
            en: 'Wandering from country to country I became bound by desire, Lord. Am I not your servant, Lord of the world, Lord of Lakshmi, Srinivasa?',
            kn: 'ದೇಶದೇಶ ತಿರುಗಿ ನಾನು ಆಸೆಗೆ ಬದ್ಧನಾದೆ, ಸ್ವಾಮಿ. ಜಗದೀಶ, ಶ್ರೀಶ, ಶ್ರೀನಿವಾಸ, ನಾನು ನಿನ್ನ ದಾಸನಲ್ಲವೆ?',
          },
        },
        {
          n: 3,
          text: 'ಕಂತುಜನಕ ಕೇಳೊ ನೀ ನಿ-\nರಂತರದಿ ನಿನ್ನ ಸೇವೆ ।\nಅಂತರಂಗದಿ ಪಾಲಿಸಯ್ಯ\nಹೊಂತಕಾರಿ ಪುರಂದರವಿಠಲ ॥',
          meaning: {
            en: 'Father of Manmatha, hear: grant me, inwardly, your service without a break, enemy of the evil, Purandara Vitthala.',
            kn: 'ಕಂತುಜನಕನೇ, ಕೇಳು; ನಿರಂತರವಾಗಿ ನಿನ್ನ ಸೇವೆಯನ್ನು ಅಂತರಂಗದಲ್ಲಿ ಪಾಲಿಸಯ್ಯ, ಹೊಂತಕಾರಿ ಪುರಂದರವಿಠಲ.',
          },
        },
      ],
    },
  ],
};

export const dpNillabekayyaKrishnayya: Mantra = {
  id: 'dasara-pada-nillabekayya-krishnayya',
  title: 'ನಿಲ್ಲಬೇಕಯ್ಯ ಕೃಷ್ಣಯ್ಯ',
  titleEn: 'Purandara Dasa · Nillabekayya Krishnayya',
  category: 'dasara-pada',
  order: 60,
  sourceScript: 'kannada',
  deity: 'Sri Krishna',
  source: 'Purandara Dasa',
  summary: 'A tender song asking baby Krishna to stay in the singer’s heart: “Stay, Krishnayya, stay, husband of Lakshmi”; the singer promises to kiss him, clap and sing, make a soft bed, anoint him with musk and put on him a pearl garland and a sapphire crown.',
  summaryKn: 'ಬಾಲಕೃಷ್ಣನನ್ನು ತನ್ನ ಹೃದಯದಲ್ಲಿ ನಿಲ್ಲಬೇಕೆಂದು ಬೇಡುವ ಮೃದುವಾದ ಹಾಡು: “ನಿಲ್ಲಬೇಕಯ್ಯ ಕೃಷ್ಣಯ್ಯ”; ಮುತ್ತಿಟ್ಟು, ಚಪ್ಪಾಳೆ ತಟ್ಟಿ ಹಾಡುವೆ, ಹಾಸಿಗೆ ಹಾಸುವೆ, ಕಸ್ತೂರಿ ಪೂಸುವೆ, ಮುತ್ತಿನ ಹಾರ, ನೀಲದ ಕಿರೀಟ ತೊಡಿಸುವೆ ಎನ್ನುತ್ತಾನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'ಪಲ್ಲವಿ',
      titleEn: 'Pallavi',
      verses: [
        {
          text: 'ನಿಲ್ಲಬೇಕಯ್ಯ ಕೃಷ್ಣಯ್ಯ ನೀ ॥',
          meaning: {
            en: 'You must stay, Krishnayya.',
            kn: 'ಕೃಷ್ಣಯ್ಯ, ನೀನು ನಿಲ್ಲಬೇಕಯ್ಯ.',
          },
        },
      ],
    },
    {
      title: 'ಅನುಪಲ್ಲವಿ',
      titleEn: 'Anupallavi',
      verses: [
        {
          text: 'ನಿಲ್ಲಬೇಕಯ್ಯ ಮಲ್ಲಮರ್ದನ ಸಿರಿ\nವಲ್ಲಭ ಎನ್ನ ಹೃದಯದಲ್ಲಿ ಸತತ ನೀ ॥',
          meaning: {
            en: 'You must stay, destroyer of the wrestlers, beloved of Lakshmi, always in my heart.',
            kn: 'ನಿಲ್ಲಬೇಕಯ್ಯ, ಮಲ್ಲಮರ್ದನನೇ, ಸಿರಿವಲ್ಲಭನೇ, ನೀನು ಸತತ ನನ್ನ ಹೃದಯದಲ್ಲಿ.',
          },
        },
      ],
    },
    {
      title: 'ಚರಣಗಳು',
      titleEn: 'Charanas',
      verses: [
        {
          n: 1,
          text: 'ಸುಪ್ಪಾಣಿ ಮುತ್ತಿಟ್ಟು ನೋಡುವೆ ನಿನ್ನ\nಚಪ್ಪಾಳಿ ತಟ್ಟಿ ನಾ ಪಾಡುವೆ ।\nಅಪ್ಪ ಶ್ರೀಕೃಷ್ಣ ನಿನ್ನೆತ್ತಿ ಮುದ್ದಿಸಿಕೊಂಬೆ\nಸರ್ಪಶಯನ ಕೃಪೆ ಮಾಡೆಂದು ಬೇಡುವೆ ॥',
          meaning: {
            en: 'I will kiss you tenderly and gaze at you, and clap my hands as I sing. Dear Sri Krishna, I will lift you up and fondle you; Lord who sleeps on the serpent, I beg: be gracious.',
            kn: 'ಮೃದುವಾಗಿ ಮುತ್ತಿಟ್ಟು ನಿನ್ನನ್ನು ನೋಡುವೆ, ಚಪ್ಪಾಳೆ ತಟ್ಟಿ ಹಾಡುವೆ. ಅಪ್ಪಾ ಶ್ರೀಕೃಷ್ಣ, ನಿನ್ನನ್ನು ಎತ್ತಿ ಮುದ್ದಿಸಿಕೊಳ್ಳುವೆ; ಸರ್ಪಶಯನನೇ, ಕೃಪೆ ಮಾಡೆಂದು ಬೇಡುವೆ.',
          },
        },
        {
          n: 2,
          text: 'ಚಂದದ ಹಾಸಿಗೆ ಹಾಸುವೆ ಪುನುಗು\nಗಂಧ ಕಸ್ತೂರಿಯ ಪೂಸುವೆ ।\nತಂದು ಮುದದಿ ಮುತ್ತಿನ ಹಾರ ಹಾಕುವೆ ಆ-\nನಂದದಿಂದಲಿ ನಿನ್ನ ಎತ್ತಿ ಮುದ್ದಿಸಿಕೊಂಬೆ ॥',
          meaning: {
            en: 'I will spread a beautiful bed and rub on civet, sandal and musk; I will bring a pearl garland and put it on you with joy, and lift you up and fondle you happily.',
            kn: 'ಚಂದದ ಹಾಸಿಗೆ ಹಾಸುವೆ; ಪುನುಗು, ಗಂಧ, ಕಸ್ತೂರಿಯನ್ನು ಪೂಸುವೆ; ಮುತ್ತಿನ ಹಾರವನ್ನು ತಂದು ಸಂತೋಷದಿಂದ ಹಾಕುವೆ; ಆನಂದದಿಂದ ನಿನ್ನನ್ನು ಎತ್ತಿ ಮುದ್ದಿಸಿಕೊಳ್ಳುವೆ.',
          },
        },
        {
          n: 3,
          text: 'ನೀಲದ ಕಿರೀಟವನಿಡುವೆ ಬಲು\nಬಾಲಲೀಲೆಗಳ ಪಾಡುವೆ ।\nಚೆಲುವ ಶ್ರೀ ಪುರಂದರವಿಠಲರಾಯನೆ\nನಿಲ್ಲು ಎನ್ನ ಮನದಲ್ಲಿ ಒಂದೆ ಘಳಿಗೆ ॥',
          meaning: {
            en: 'I will place a sapphire crown on you and sing of your many childhood sports. Handsome Lord Sri Purandara Vitthala, stay in my mind for even a single moment.',
            kn: 'ನೀಲಮಣಿಯ ಕಿರೀಟವನ್ನಿಡುವೆ; ನಿನ್ನ ಅನೇಕ ಬಾಲಲೀಲೆಗಳನ್ನು ಹಾಡುವೆ. ಚೆಲುವ ಶ್ರೀ ಪುರಂದರವಿಠಲರಾಯನೇ, ನನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ಒಂದೇ ಒಂದು ಘಳಿಗೆ ನಿಲ್ಲು.',
          },
        },
      ],
    },
  ],
};
