/**
 * Dāsara padagaḷu: the most widely sung Kannada songs of the Haridāsas, one
 * Mantra per song (pallavi, anupallavi where there is one, caraṇas).
 *
 * Every song was collated (Nov 2026) from at least two independent digital
 * copies; only text found in two copies is included.
 * Witnesses:
 *  WS   kn.wikisource.org (typed Kannada; CC BY-SA, text public domain)
 *  DV   dasavani.blogspot.com (typed Kannada)
 *  SMS  sumadhwaseva.com (typed Kannada; editors' notes not used)
 *  BJ   github.com/Karthik-S-Salian/Bhajanamrutha (typed Kannada; no licence,
 *       used for collation only; several of its texts are copies of DV and
 *       were not counted as independent)
 *  CSOT "Śrī Purandara Dāsara Padagaḷu", ed. H. T. Mahantesh Shastri,
 *       archive.org (CC0 scan; OCR)
 *  PDP  "Purandara Dāsara Padagaḷu", archive.org (OCR)
 *  AR   Ānanda Rāo, Śrīraṅgam, lyric files on archive.org
 *       (dasa_sahitya_shri_ananda_rao_srirangam; romanised, converted)
 * The ankita is spelled ಪುರಂದರವಿಠಲ throughout (copies vary: ವಿಠ್ಠಲ, ವಿಟ್ಠಲ).
 * Rāgas are not given: the copies rarely agree on them.
 * Meanings are original; no published translation was used.
 *
 * Sources and the differences resolved, song by song:
 *  bhagyada-lakshmi-baramma [WS, BJ, PDP]: c2 ಮನಕೆ ಮಾನವ (BJ PDP; WS ಮನ ಕಾಮನೆಯ); c3 ಅತ್ತಿತ್ತಗಲದೆ (PDP; WS ಅತ್ತಿತ್ತಳಗದೆ, BJ ಅತ್ತಿತ್ತಲಗದೆ).
 *  jagadoddharana [WS, SMS, BJ]: pallavi word order ಆಡಿಸಿದಳೆಶೋದೆ ಜಗದೋದ್ಧಾರನ (WS SMS; BJ reverses); anupallavi as in SMS BJ (WS pairs the lines differently); c2 ಮಹತೋಮಹೀಯನ (WS; SMS ಮಹತೋಮಹೀಮನ, BJ ಮಹತೋ ಮಹಿಮನ).
 *  kallusakkare-kolliro [DV (BJ is a copy of DV), WS (lacks caraṇa 2), CSOT, PDP]: c1 ಗೋಣಿಯೊಳ್ ತುಂಬುವುದಲ್ಲ (WS PDP CSOT; DV ಗೋಣಿಯೊಳು), ಬರುವಂಥ (DV CSOT PDP; WS ತರುವಂಥ); c2 ಒಯ್ದರು (CSOT PDP; DV ಒಯ್ಡರು), ಕಡಿಮೆ (CSOT PDP; DV ಕಡಮೆ); c3 ಸಂತೆ ಸಂತೆಗೆ (DV CSOT PDP; WS ಸಂತೆ ಕಂತೆಗೆ), ಶ್ರಮಪಡಿಸುವುದಲ್ಲ (WS CSOT PDP; DV ಶ್ರಮಪಡುವುದಲ್ಲ), ನಾಲಿಗೆ (WS CSOT; DV ನಾಲಗೆ).
 *  acharavillada-nalige [DV, BJ, CSOT, PDP (WS has different caraṇas and was not followed)]: pallavi ನೀಚ ಬುದ್ಧಿಯ (DV BJ CSOT PDP; WS ನೀಚಗುಣವ); anupallavi ದೂಷಿಪುದಕ್ಕೆ … ಚಾಚಿಕೊಂಡಿರುವಂಥ (WS CSOT PDP); c2 ಬೇಡಿಕೊಂಬುವೆನು (DV PDP); c3 ಚರಣಕಮಲ (BJ CSOT PDP; DV ಚರಣಕಮಲವ).
 *  gajavadana-beduve [WS, DV, BJ, CSOT]: ಗೌರೀತನಯ (DV BJ CSOT; WS ಗೌರಿ); c1 ಮೂಷಕ (WS DV; BJ ಮೂಷಿಕ); c3 ನಿರುತ … ದಯಮಾಡೋ (DV BJ CSOT; WS ನಿರತ … ವರ ದಯ ಮಾಡೊ).
 *  sharanu-siddhi-vinayaka [WS, DV, BJ, CSOT]: ಮೂಷಕವಾಹನ (DV CSOT; WS BJ ಮೂಷಿಕ); c1 ನಾಗಭೂಷಣಪ್ರಿಯನೆ (WS CSOT; DV BJ ಪ್ರೀಯನೆ), ತಟಿಲ್ಲತಾಂಕಿತ (BJ CSOT; WS ತಟಿಲತಾಂಕಿತ, DV ಕಟಿಕಟಾಂಗದ); c2 ಬಟ್ಟ ಮುತ್ತಿನ ಪದಕಹಾರನೆ (WS BJ CSOT); c3 ಮಹಾಲಂಬೋದರನೆ (WS DV; BJ CSOT ಮಹಲಂಬೋದರನೆ), ಇಕ್ಷುಚಾಪನ (BJ CSOT).
 *  guruvina-gulama [WS, DV, BJ, CSOT]: anupallavi ಶಾಸ್ತ್ರವನೋದಿದರೇನು (WS BJ CSOT), ವ್ಯರ್ಥವಾಯಿತು (DV BJ CSOT); c1 ಮೂರಾರು (DV CSOT; WS ಮೂರು, BJ ನೂರಾರು), ಸಾರ ನ್ಯಾಯ ಕಥೆಗಳ (WS; BJ CSOT similar), ಪೇಳಿದರಿಲ್ಲ (WS CSOT); c2 ಮರುಳನಾಗಿ (WS CSOT); c3 ಶರೀರಕೆ (DV BJ), last line as WS (BJ ಬೆಳೆಯುವ; DV differs).
 *  rama-mantrava-japiso [DV, BJ]: pallavi ಹೇ ಮನುಜ (BJ; DV ಏ ಮನುಜಾ); c1 ಸಲೆ ಬೀದಿ (BJ; DV ಸಭೆ ಭೀದಿ); c3 ಪುರಂದರವಿಠಲನ ಮಂತ್ರ (BJ; DV ಮಾಹಾ ಮಂತ್ರ).
 *  yarige-yaruntu [WS, DV (BJ is a copy of DV)]: none in wording; spelling ಸಾಯೋ … ಕಾಯೋ as in WS (DV ಸಾಯೊ … ಕಾಯೊ).
 *  dasana-madiko-enna [WS, DV, BJ]: pallavi ಸ್ವಾಮಿ ಸಾಸಿರನಾಮದ ವೆಂಕಟರಮಣ (WS BJ; DV ಇಷ್ಟು ಘಾಸಿ ಮಾಡುವರೇನೊ ಕರುಣಾಸಂಪನ್ನ); c1 ಹರಣಕ್ಕೆ (WS DV; BJ ಹಣೆಗೆ), ಅಭಯ ಕರಪುಷ್ಪವ … ಶಿರದಲ್ಲಿ (WS); c2 ಕಡೆಗಣ್ಣಿಲೆನ್ನ (WS ಕಡೆಗಣ್ಣಲೆ ಎನ್ನ, BJ ಕೆಡಗಣ್ಣಿಲೆನ್ನ; DV ಕಡೆಗಣ್ಣಿಲೇಕೆನ್ನ); c3 last two lines WS BJ (DV ದುರಿತ ರಾಶಿಗಳೆಲ್ಲ … ಕರುಣದಿ ಕರೆದು).
 *  manava-janma-doddadu [DV, BJ, CSOT]: pallavi ಮಾಡಲು ಬೇಡಿ ಹುಚ್ಚಪ್ಪಗಳಿರಾ (BJ CSOT); c1 ನಾಲಿಗೆ (DV CSOT), ಮರುಳಾಗುವರೆ (DV, BJ ಮರಳಾಗುವರೆ; CSOT ಹುಚ್ಚರಾಗುವರೆ), ಹೆಣ್ಣು ಮಣ್ಣಿಗಾಗಿ … ಖೋಡಿ (DV CSOT; BJ differs); c2 ಕಾಲನ ದೂತರು … ತಾಳುವರೆ (DV CSOT), ದಾಳಿ ಬಾರದ ಮುನ್ನ … ಗಳಿಸಿರೊ (DV; CSOT ಬರುವ … ಗಳಿಸಿಕೊ), ಸುಳ್ಳಿನ ಸಂಸಾರ (DV BJ; CSOT ಹಾಳು); c3 ಸತಿಸುತರು ಕಾಯುವರೆ (DV; CSOT ಪುತ್ರ), ಏಕೋಭಾವದಿ ಭಜಿಸಿರೊ (DV CSOT; BJ rewrites the last two lines).
 *  toogire-rangana [DV, BJ]: c2 ಚಂದದಿ ಬಂದು (DV; BJ omits ಚಂದದಿ); c4 ಸಾಸಿರನಾಮದ (BJ; DV ಸಾಸಿರನಾಮನೆ); c5 ಪುರಂದರವಿಠಲನೆ (BJ; DV ಪುರಂದವಿಠಲನೆ).
 *  idu-bhagya [DV (BJ is a copy of DV), AR]: c1 ಮನವ ಮೆಚ್ಚಿಸಬೇಕು (AR; DV ಮನದಿ); otherwise DV, with spelling differences in AR ignored.
 *  ramanama-payasakke [WS, DV]: the two copies differ in several words; WS was followed except the pallavi ಬೆರೆಸಿ (DV; WS ಸೇರಿಸಿ). DV readings: c1 ಒಮ್ಮನ, ಸುಮ್ಮನ, ಸಣ್ಣ ಸೇವೆಗೆ ಹೊಸೆದು; c2 ಪಾತ್ರೆಯೊಳಗೆ, ಎಸರು ಇಟ್ಟು, ಪಕ್ವವ ಮಾಡಿ, ಹರಿವಾಣದೊಳಗೆ ನೀಡಿ; c3 ಬಂದ ಪರಿಯಲಿ.
 *  bagilanu-teredu [BJ, AR]: c1 ಕ್ಷೀರವಾರಿಧಿ (AR; BJ ವಾರುಧಿ); c2 ಕೋಪದಲಿ … ಖಡುಗವನು ಹಿಡಿದು (BJ; AR ಕೋಪದಿನ್ … ಪಿಡಿದು); c3 ರಾಣಿಗಕ್ಷಯವಸನವನಿತ್ತೆ (AR; BJ ರಾಣಿಗೆ ಅಕ್ಷಯವಸನವಿತ್ತೆ).
 *  tallanisadiru-kandya [SMS, BJ]: with only two witnesses, SMS was followed where they differ (c1 ಹುಟ್ಟಿಸಿದ ಸ್ವಾಮಿ … ಗಟ್ಯಾಗಿ ಸಲಹುವನು, BJ ಪುಟ್ಟಿಸಿದ ದೇವ … ಗಟ್ಯಾಗೆ ರಕ್ಷಿಪನು; c3 ಕಲ್ಲಿನಲ್ಲಿ ಹುಟ್ಟಿ … ಕಪ್ಪೆಗಳಿಗೆಲ್ಲ), except c2 line 1 ಅಡವಿಯೊಳಗಾಡುವ (BJ; SMS ಅಡವಿಯೊಳಗೆ) and the pallavi ಸಂಶಯವಿಲ್ಲ (BJ; SMS ಸಂಶಯ ಬೇಡ).
 *  bhushanake-bhushana [BJ, AR (attributed to Śrīpādarāja; ankita ರಂಗವಿಠಲ)]: pallavi ಶೇಷಗಿರಿವಾಸ (AR; BJ ಶೇಷಾದ್ರಿವಾಸ); c2 ಮಾನವರಿಗೆ, ಮುನಿಯೋಗಿವರರಿಗೆ (AR; BJ ಮನುಜರಿಗೆ, ಮುನಿಯೋಗಿವರ್ಯರಿಗೆ); c3 ಮಂಗಳಾಂಗಗೆ, ರಂಗವಿಠಲನ ನಾಮ (BJ; AR ಮಂಗಳಾಂಗನ, ರಂಗವಿಠಲ ನಿಮ್ಮ ನಾಮ).
 *  krishna-ni-begane-baro [BJ, AR]: the two copies order the caraṇas differently (BJ order kept); c1 ಬಾವುಲಿ (AR; BJ ಭಾವುಲಿ); c2 ವೈಜಯಂತಿಮಾಲೆ (AR; BJ ಮಾಲ); c3 ಮೈಯೊಳು ಗಮ್ಮ (BJ; AR ಮೈಯೊಳಗಮ್ಮ).
 *  indu-enage-govinda [WS, BJ]: anupallavi as in WS (BJ adds ಮಂದರೋದ್ಧಾರ ಆನಂದ, found in one copy only); c1 ನೊಂದೆನಯ್ಯ (BJ; WS ನೊಂದೆನಯ್ಯ ನಾ); c2 ಮೂಢತನದಿ ಬಹು ಹೇಡಿಜೀವ ನಾನಾಗಿ, c3 ಭೂಭಾರಜೀವ ನಾನಾಗಿ (BJ; WS ಬಲುಹೇಡಿಜೀವನನಾಗಿ, ಬಹುಭಾರ ಜೀವನನಾಗಿ).
 */
import type { Mantra } from '../types';

export const dpBhagyadaLakshmiBaramma: Mantra = {
  id: 'dasara-pada-bhagyada-lakshmi-baramma',
  title: 'ಭಾಗ್ಯದ ಲಕ್ಷ್ಮೀ ಬಾರಮ್ಮ ನಮ್ಮಮ್ಮ ನೀ',
  titleEn: 'Purandara Dasa · Bhagyada Lakshmi Baramma',
  category: 'dasara-pada',
  order: 1,
  sourceScript: 'kannada',
  deity: 'Śrī Lakṣmī',
  source: 'Purandara Dāsa',
  summary: 'Purandara Dāsa’s best-known song of welcome to Lakṣmī, sung at Varamahālakṣmī and Friday pūjās: “Come, Lakṣmī of good fortune, come with tinkling anklets into the homes of your devotees.”',
  summaryKn: 'ವರಮಹಾಲಕ್ಷ್ಮೀ ವ್ರತ ಮತ್ತು ಶುಕ್ರವಾರದ ಪೂಜೆಗಳಲ್ಲಿ ಹಾಡುವ, ಪುರಂದರದಾಸರ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಲಕ್ಷ್ಮೀ ಆಹ್ವಾನ ಗೀತೆ: “ಗೆಜ್ಜೆಯ ನಾದದೊಂದಿಗೆ ಹೆಜ್ಜೆಯಿಟ್ಟು ಭಕ್ತರ ಮನೆಗೆ ಬಾರಮ್ಮ.”',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಭಾಗ್ಯದ ಲಕ್ಷ್ಮೀ ಬಾರಮ್ಮ ನಮ್ಮಮ್ಮ ನೀ ।\nಸೌಭಾಗ್ಯದ ಲಕ್ಷ್ಮೀ ಬಾರಮ್ಮ ॥',
            meaning: {
              en: 'Come, Lakṣmī of good fortune, come, our mother; come, Lakṣmī of every blessing.',
              kn: 'ಭಾಗ್ಯವನ್ನು ತರುವ ಲಕ್ಷ್ಮೀದೇವಿಯೇ, ನಮ್ಮ ತಾಯಿಯೇ, ಬಾರಮ್ಮ; ಸೌಭಾಗ್ಯವನ್ನು ಕರುಣಿಸುವ ಲಕ್ಷ್ಮಿಯೇ ಬಾರಮ್ಮ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಹೆಜ್ಜೆಯ ಮೇಲೆ ಹೆಜ್ಜೆಯನಿಕ್ಕುತ\nಗೆಜ್ಜೆ ಕಾಲ್ಗಳ ಧ್ವನಿಯ ತೋರುತ ।\nಸಜ್ಜನ ಸಾಧು ಪೂಜೆಯ ವೇಳೆಗೆ\nಮಜ್ಜಿಗೆಯೊಳಗಿನ ಬೆಣ್ಣೆಯಂತೆ ॥',
            meaning: {
              en: 'Come step after step, letting us hear the bells on your anklets; come at the hour when good and holy people worship, as butter rises out of buttermilk.',
              kn: 'ಹೆಜ್ಜೆಯ ಮೇಲೆ ಹೆಜ್ಜೆಯಿಡುತ್ತ, ಕಾಲಿನ ಗೆಜ್ಜೆಗಳ ನಾದವನ್ನು ಕೇಳಿಸುತ್ತ ಬಾ. ಸಜ್ಜನರು ಪೂಜೆ ಮಾಡುವ ಹೊತ್ತಿಗೆ, ಮಜ್ಜಿಗೆಯನ್ನು ಕಡೆದಾಗ ಬೆಣ್ಣೆ ಮೇಲೆ ಬರುವಂತೆ ಪ್ರಕಟವಾಗು.',
            },
          },
          {
            n: 2,
            text: 'ಕನಕವೃಷ್ಟಿಯ ಕರೆಯುತ ಬಾರೆ\nಮನಕೆ ಮಾನವ ಸಿದ್ಧಿಯ ತೋರೆ ।\nದಿನಕರ ಕೋಟಿ ತೇಜದಿ ಹೊಳೆಯುವ\nಜನಕರಾಯನ ಕುಮಾರಿ ಬೇಗ ॥',
            meaning: {
              en: 'Come showering gold; grant honour and fulfilment to our hearts. Come quickly, daughter of King Janaka, shining with the light of a million suns.',
              kn: 'ಚಿನ್ನದ ಮಳೆಯನ್ನು ಸುರಿಸುತ್ತ ಬಾ; ನಮ್ಮ ಮನಸ್ಸಿಗೆ ಗೌರವವನ್ನೂ ಸಿದ್ಧಿಯನ್ನೂ ಕರುಣಿಸು. ಕೋಟಿ ಸೂರ್ಯರ ತೇಜಸ್ಸಿನಿಂದ ಹೊಳೆಯುವ ಜನಕರಾಜನ ಮಗಳೇ, ಬೇಗ ಬಾ.',
            },
          },
          {
            n: 3,
            text: 'ಅತ್ತಿತ್ತಗಲದೆ ಭಕ್ತರ ಮನೆಯಲಿ\nನಿತ್ಯ ಮಹೋತ್ಸವ ನಿತ್ಯ ಸುಮಂಗಲಿ ।\nಸತ್ಯವ ತೋರುವ ಸಾಧು ಸಜ್ಜನರ\nಚಿತ್ತದಿ ಹೊಳೆಯುವ ಪುತ್ಥಳಿ ಬೊಂಬೆ ॥',
            meaning: {
              en: 'Stay in your devotees’ homes and do not wander away; you are their festival every day, the ever-auspicious one, the golden image that shines in the hearts of the truthful and the good.',
              kn: 'ಅತ್ತಿತ್ತ ಹೋಗದೆ ಭಕ್ತರ ಮನೆಯಲ್ಲೇ ನೆಲೆಸು. ನೀನು ಅಲ್ಲಿ ದಿನವೂ ಮಹೋತ್ಸವ, ಸದಾ ಸುಮಂಗಲಿ. ಸತ್ಯವನ್ನು ತೋರುವ ಸಾಧುಸಜ್ಜನರ ಮನಸ್ಸಿನಲ್ಲಿ ಹೊಳೆಯುವ ಚಿನ್ನದ ಬೊಂಬೆ ನೀನು.',
            },
          },
          {
            n: 4,
            text: 'ಸಂಖ್ಯೆಯಿಲ್ಲದ ಭಾಗ್ಯವ ಕೊಟ್ಟು\nಕಂಕಣ ಕೈಯ ತಿರುವುತ ಬಾರೆ ।\nಕುಂಕುಮಾಂಕಿತ ಪಂಕಜಲೋಚನೆ\nವೆಂಕಟರಮಣನ ಬಿಂಕದ ರಾಣಿ ॥',
            meaning: {
              en: 'Come turning your bangled hands, giving countless blessings: lotus-eyed one marked with kuṅkuma, proud queen of Veṅkaṭaramaṇa.',
              kn: 'ಎಣಿಸಲಾಗದಷ್ಟು ಭಾಗ್ಯವನ್ನು ಕೊಡುತ್ತ, ಕಂಕಣ ತೊಟ್ಟ ಕೈಗಳನ್ನು ತಿರುಗಿಸುತ್ತ ಬಾ. ಕುಂಕುಮ ಧರಿಸಿದ ಕಮಲನಯನೆಯೇ, ವೆಂಕಟರಮಣನ ಹೆಮ್ಮೆಯ ರಾಣಿಯೇ ಬಾ.',
            },
          },
          {
            n: 5,
            text: 'ಸಕ್ಕರೆ ತುಪ್ಪದ ಕಾಲುವೆ ಹರಿಸಿ\nಶುಕ್ರವಾರದ ಪೂಜೆಯ ವೇಳೆಗೆ ।\nಅಕ್ಕರೆವುಳ್ಳ ಅಳಗಿರಿ ರಂಗನ\nಚೊಕ್ಕ ಪುರಂದರವಿಠಲನ ರಾಣಿ ॥',
            meaning: {
              en: 'Come at the hour of the Friday pūjā, making streams of sugar and ghee flow: beloved queen of the loving Raṅga of Aḻagiri, of the fair Purandara Viṭhala.',
              kn: 'ಶುಕ್ರವಾರದ ಪೂಜೆಯ ಹೊತ್ತಿಗೆ ಸಕ್ಕರೆ-ತುಪ್ಪದ ಕಾಲುವೆಗಳನ್ನು ಹರಿಸುತ್ತ ಬಾ. ಪ್ರೀತಿಯುಳ್ಳ ಅಳಗಿರಿ ರಂಗನ, ಸುಂದರ ಪುರಂದರವಿಠಲನ ರಾಣಿಯೇ ಬಾ.',
            },
          },
        ],
      },
  ],
};

export const dpJagadoddharana: Mantra = {
  id: 'dasara-pada-jagadoddharana',
  title: 'ಆಡಿಸಿದಳೆಶೋದೆ ಜಗದೋದ್ಧಾರನ',
  titleEn: 'Purandara Dasa · Adisidaleshode Jagadoddharana',
  category: 'dasara-pada',
  order: 2,
  sourceScript: 'kannada',
  deity: 'Śrī Kṛṣṇa',
  source: 'Purandara Dāsa',
  summary: 'A lullaby-like song of wonder: Yaśodā plays with the child Kṛṣṇa as her own son, not knowing that he is the uplifter of the world, beyond the reach of the Vedas.',
  summaryKn: 'ಜಗತ್ತನ್ನೇ ಉದ್ಧರಿಸುವ ಶ್ರೀಕೃಷ್ಣನನ್ನು ತನ್ನ ಮಗನೆಂದು ತಿಳಿದು ಯಶೋದೆ ಆಡಿಸಿದಳು ಎಂಬ ಅಚ್ಚರಿಯನ್ನು ಹಾಡುವ ಪ್ರಸಿದ್ಧ ಕೀರ್ತನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಆಡಿಸಿದಳೆಶೋದೆ ಜಗದೋದ್ಧಾರನ ॥',
            meaning: {
              en: 'Yaśodā played with him, the uplifter of the world.',
              kn: 'ಜಗತ್ತನ್ನು ಉದ್ಧರಿಸುವ ಶ್ರೀಹರಿಯನ್ನು ಯಶೋದೆ ಆಡಿಸಿದಳು.',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ಜಗದೋದ್ಧಾರನ ಮಗನೆಂದು ತಿಳಿಯುತ ।\nಸುಗುಣಾಂತರಂಗನ ಆಡಿಸಿದಳೆಶೋದೆ ॥',
            meaning: {
              en: 'Thinking the uplifter of the world was her son, Yaśodā played with Raṅga, the inner self of all good qualities.',
              kn: 'ಜಗದೋದ್ಧಾರಕನನ್ನು ತನ್ನ ಮಗನೆಂದೇ ತಿಳಿದು, ಸದ್ಗುಣಗಳ ಅಂತರಂಗನಾದ ರಂಗನನ್ನು ಯಶೋದೆ ಆಡಿಸಿದಳು.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ನಿಗಮಕೆ ಸಿಲುಕದ ಅಗಣಿತ ಮಹಿಮನ ।\nಮಗುಗಳ ಮಾಣಿಕ್ಯನ ಆಡಿಸಿದಳೆಶೋದೆ ॥',
            meaning: {
              en: 'He whom the Vedas cannot grasp, whose greatness is beyond count, the jewel among children: Yaśodā played with him.',
              kn: 'ವೇದಗಳಿಗೂ ಸಿಲುಕದ, ಎಣಿಸಲಾಗದ ಮಹಿಮೆಯುಳ್ಳ, ಮಕ್ಕಳಲ್ಲಿ ಮಾಣಿಕ್ಯದಂತಿರುವ ಕೃಷ್ಣನನ್ನು ಯಶೋದೆ ಆಡಿಸಿದಳು.',
            },
          },
          {
            n: 2,
            text: 'ಅಣೋರಣೀಯನ ಮಹತೋಮಹೀಯನ ।\nಅಪ್ರಮೇಯನ ಆಡಿಸಿದಳೆಶೋದೆ ॥',
            meaning: {
              en: 'Smaller than the smallest, greater than the greatest, the immeasurable one: Yaśodā played with him.',
              kn: 'ಅಣುವಿಗಿಂತಲೂ ಸೂಕ್ಷ್ಮನಾದ, ಮಹತ್ತಿಗಿಂತಲೂ ಮಹತ್ತಾದ, ಅಳತೆಗೆ ಸಿಲುಕದ ಅಪ್ರಮೇಯನನ್ನು ಯಶೋದೆ ಆಡಿಸಿದಳು.',
            },
          },
          {
            n: 3,
            text: 'ಪರಮ ಪುರುಷನ ಪರವಾಸುದೇವನ ।\nಪುರಂದರವಿಠಲನ ಆಡಿಸಿದಳೆಶೋದೆ ॥',
            meaning: {
              en: 'The Supreme Person, the transcendent Vāsudeva, Purandara Viṭhala: Yaśodā played with him.',
              kn: 'ಪರಮಪುರುಷನಾದ, ಪರವಾಸುದೇವನಾದ ಪುರಂದರವಿಠಲನನ್ನು ಯಶೋದೆ ಆಡಿಸಿದಳು.',
            },
          },
        ],
      },
  ],
};

export const dpKallusakkareKolliro: Mantra = {
  id: 'dasara-pada-kallusakkare-kolliro',
  title: 'ಕಲ್ಲುಸಕ್ಕರೆ ಕೊಳ್ಳಿರೋ ನೀವೆಲ್ಲರು',
  titleEn: 'Purandara Dasa · Kallusakkare Kolliro',
  category: 'dasara-pada',
  order: 3,
  sourceScript: 'kannada',
  deity: 'Śrī Kṛṣṇa',
  source: 'Purandara Dāsa',
  summary: 'The Dāsa as a street vendor crying his wares: the name of Kṛṣṇa is rock-candy that needs no ox-carts, pays no toll, never spoils and costs nothing, and only those who have tasted it know its sweetness.',
  summaryKn: 'ದಾಸರು ಬೀದಿಯ ವ್ಯಾಪಾರಿಯಂತೆ ಕೂಗಿ ಮಾರುವ ಕೃಷ್ಣನಾಮವೆಂಬ ಕಲ್ಲುಸಕ್ಕರೆ: ಇದಕ್ಕೆ ಎತ್ತು-ಗೋಣಿ ಬೇಡ, ಸುಂಕವಿಲ್ಲ, ಕೆಡುವುದಿಲ್ಲ, ಬೆಲೆಯೂ ಇಲ್ಲ; ಸವಿದವರೇ ಇದರ ರುಚಿ ಬಲ್ಲರು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಕಲ್ಲುಸಕ್ಕರೆ ಕೊಳ್ಳಿರೋ ನೀವೆಲ್ಲರು ।\nಕಲ್ಲುಸಕ್ಕರೆ ಕೊಳ್ಳಿರೋ ॥',
            meaning: {
              en: 'Buy rock-candy, all of you; come, buy rock-candy!',
              kn: 'ಎಲ್ಲರೂ ಕಲ್ಲುಸಕ್ಕರೆಯನ್ನು ಕೊಳ್ಳಿರಿ, ಬನ್ನಿ ಕಲ್ಲುಸಕ್ಕರೆ ಕೊಳ್ಳಿರಿ!',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ಕಲ್ಲುಸಕ್ಕರೆ ಸವಿ ಬಲ್ಲವರೆ ಬಲ್ಲರು ।\nಪುಲ್ಲಲೋಚನ ಶ್ರೀಕೃಷ್ಣನಾಮವೆಂಬ ॥',
            meaning: {
              en: 'Only those who have tasted it know the sweetness of this rock-candy, the name of lotus-eyed Śrī Kṛṣṇa.',
              kn: 'ಅರಳಿದ ಕಮಲದಂತಹ ಕಣ್ಣುಳ್ಳ ಶ್ರೀಕೃಷ್ಣನ ನಾಮವೆಂಬ ಈ ಕಲ್ಲುಸಕ್ಕರೆಯ ರುಚಿಯನ್ನು ಸವಿದವರೇ ಬಲ್ಲರು.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಎತ್ತು ಹೇರುಗಳಿಂದ ಹೊತ್ತು ಮಾರುವುದಲ್ಲ\nಒತ್ತೊತ್ತಿ ಗೋಣಿಯೊಳ್ ತುಂಬುವುದಲ್ಲ ।\nಎತ್ತ ಹೋದರು ಬಾಡಿಗೆ ಸುಂಕವಿದಕಿಲ್ಲ\nಉತ್ತಮ ಸರಕಿದು ಅತಿ ಲಾಭ ಬರುವಂಥ ॥',
            meaning: {
              en: 'It is not carried on oxen to be sold, nor pressed down into sacks; wherever you take it there is no freight or toll to pay. It is the finest of goods and brings the greatest gain.',
              kn: 'ಇದನ್ನು ಎತ್ತುಗಳ ಮೇಲೆ ಹೇರಿಕೊಂಡು ಮಾರಬೇಕಿಲ್ಲ, ಗೋಣಿಚೀಲದಲ್ಲಿ ಒತ್ತಿ ತುಂಬಬೇಕಿಲ್ಲ. ಎಲ್ಲಿಗೆ ಹೋದರೂ ಬಾಡಿಗೆಯಾಗಲಿ ಸುಂಕವಾಗಲಿ ಇಲ್ಲ. ಇದು ಅತಿ ಹೆಚ್ಚು ಲಾಭ ತರುವ ಉತ್ತಮ ಸರಕು.',
            },
          },
          {
            n: 2,
            text: 'ನಷ್ಟ ಬೀಳುವುದಲ್ಲ ನಾತ ಹುಟ್ಟುವುದಲ್ಲ\nಎಷ್ಟು ಒಯ್ದರು ಬೆಲೆ ರೊಕ್ಕವಿದಕಿಲ್ಲ ।\nಕಟ್ಟಿರುವೆಯು ತಿಂದು ಕಡಿಮೆಯಾಗುವುದಲ್ಲ\nಪಟ್ಟಣದೊಳಗೆ ಪ್ರಸಿದ್ಧವಾಗಿರುವಂಥ ॥',
            meaning: {
              en: 'There is no loss in it and it never goes stale; take as much as you like, it has no price. Ants cannot eat it away; it is famous all over the town.',
              kn: 'ಇದರಲ್ಲಿ ನಷ್ಟವಿಲ್ಲ, ಹಳಸಿ ನಾರುವುದಿಲ್ಲ. ಎಷ್ಟು ತೆಗೆದುಕೊಂಡು ಹೋದರೂ ಇದಕ್ಕೆ ಬೆಲೆ ಕೊಡಬೇಕಿಲ್ಲ. ಇರುವೆಗಳು ತಿಂದು ಕಡಿಮೆಯಾಗುವುದಿಲ್ಲ. ಪಟ್ಟಣದಲ್ಲೆಲ್ಲ ಪ್ರಸಿದ್ಧವಾದ ಸರಕು ಇದು.',
            },
          },
          {
            n: 3,
            text: 'ಸಂತೆ ಸಂತೆಗೆ ಹೋಗಿ ಶ್ರಮಪಡಿಸುವುದಲ್ಲ\nಸಂತೆಯೊಳಗೆ ಇಟ್ಟು ಮಾರುವುದಲ್ಲ ।\nಸಂತತ ಭಕ್ತರ ನಾಲಿಗೆ ಸವಿಗೊಂಬ\nಕಾಂತ ಪುರಂದರವಿಠಲ ನಾಮವೆಂಬ ॥',
            meaning: {
              en: 'You need not tire yourself going from fair to fair, nor set it out to sell in the market. It is the name of the beloved Purandara Viṭhala, which devotees’ tongues taste for ever.',
              kn: 'ಸಂತೆಯಿಂದ ಸಂತೆಗೆ ಅಲೆದು ಶ್ರಮಪಡಬೇಕಿಲ್ಲ, ಸಂತೆಯಲ್ಲಿಟ್ಟು ಮಾರಬೇಕಿಲ್ಲ. ಭಕ್ತರ ನಾಲಿಗೆ ಸದಾ ಸವಿಯುವ, ಮನೋಹರನಾದ ಪುರಂದರವಿಠಲನ ನಾಮವೇ ಈ ಕಲ್ಲುಸಕ್ಕರೆ.',
            },
          },
        ],
      },
  ],
};

export const dpAcharavilladaNalige: Mantra = {
  id: 'dasara-pada-acharavillada-nalige',
  title: 'ಆಚಾರವಿಲ್ಲದ ನಾಲಿಗೆ ನಿನ್ನ',
  titleEn: 'Purandara Dasa · Acharavillada Nalige',
  category: 'dasara-pada',
  order: 4,
  sourceScript: 'kannada',
  deity: 'Śrī Hari',
  source: 'Purandara Dāsa',
  summary: 'Purandara Dāsa scolds his own tongue: instead of slandering others and telling tales, it should rise at dawn and say the names of Śrīpati, Rāma and Narahari.',
  summaryKn: 'ಪರನಿಂದೆ, ಚಾಡಿಮಾತುಗಳನ್ನು ಬಿಟ್ಟು ಬೆಳಗೆದ್ದು ಶ್ರೀಪತಿ, ರಾಮ, ನರಹರಿಯ ನಾಮವನ್ನು ನುಡಿ ಎಂದು ದಾಸರು ತಮ್ಮ ನಾಲಿಗೆಗೇ ಬುದ್ಧಿ ಹೇಳುವ ಕೀರ್ತನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಆಚಾರವಿಲ್ಲದ ನಾಲಿಗೆ ನಿನ್ನ ।\nನೀಚ ಬುದ್ಧಿಯ ಬಿಡು ನಾಲಿಗೆ ॥',
            meaning: {
              en: 'O tongue without good conduct, give up your low habits.',
              kn: 'ಸದಾಚಾರವಿಲ್ಲದ ನಾಲಿಗೆಯೇ, ನಿನ್ನ ಕೀಳು ಬುದ್ಧಿಯನ್ನು ಬಿಡು.',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ವಿಚಾರವಿಲ್ಲದೆ ಪರರ ದೂಷಿಪುದಕ್ಕೆ ।\nಚಾಚಿಕೊಂಡಿರುವಂಥ ನಾಲಿಗೆ ॥',
            meaning: {
              en: 'You are always stretched out, ready to find fault with others without a thought.',
              kn: 'ಯೋಚಿಸದೆ ಇತರರನ್ನು ದೂಷಿಸಲು ಸದಾ ಚಾಚಿಕೊಂಡಿರುವ ನಾಲಿಗೆಯೇ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಪ್ರಾತಃಕಾಲದೊಳೆದ್ದು ನಾಲಿಗೆ ಸಿರಿ-\nಪತಿಯೆನ್ನಬಾರದೆ ನಾಲಿಗೆ ।\nಪತಿತಪಾವನ ನಮ್ಮ ರತಿಪತಿಜನಕನ\nಸತತವು ನುಡಿ ಕಂಡ್ಯ ನಾಲಿಗೆ ॥',
            meaning: {
              en: 'Can you not rise at dawn and say “Śrīpati”, O tongue? Speak always of our Lord, the purifier of the fallen, the father of Manmatha.',
              kn: 'ನಾಲಿಗೆಯೇ, ಬೆಳಗ್ಗೆ ಎದ್ದು “ಶ್ರೀಪತಿ” ಎನ್ನಬಾರದೆ? ಪತಿತರನ್ನು ಪಾವನಗೊಳಿಸುವ, ಮನ್ಮಥನ ತಂದೆಯಾದ ನಮ್ಮ ಸ್ವಾಮಿಯನ್ನು ಸದಾ ನುಡಿ.',
            },
          },
          {
            n: 2,
            text: 'ಚಾಡಿ ಹೇಳಲು ಬೇಡ ನಾಲಿಗೆ ನಿನ್ನ\nಬೇಡಿಕೊಂಬುವೆನು ನಾಲಿಗೆ ।\nರೂಢಿಗೊಡೆಯ ಶ್ರೀರಾಮನ ನಾಮವ\nಪಾಡುತಲಿರು ಕಂಡ್ಯ ನಾಲಿಗೆ ॥',
            meaning: {
              en: 'Do not carry tales, O tongue, I beg you. Keep singing the name of Śrī Rāma, the lord of the earth.',
              kn: 'ನಾಲಿಗೆಯೇ, ಚಾಡಿ ಹೇಳಬೇಡ, ನಿನ್ನನ್ನು ಬೇಡಿಕೊಳ್ಳುತ್ತೇನೆ. ಭೂಮಿಗೆ ಒಡೆಯನಾದ ಶ್ರೀರಾಮನ ನಾಮವನ್ನು ಹಾಡುತ್ತಲೇ ಇರು.',
            },
          },
          {
            n: 3,
            text: 'ಹರಿಯ ಸ್ಮರಣೆ ಮಾಡು ನಾಲಿಗೆ ನರ-\nಹರಿಯ ಭಜಿಸು ಕಂಡ್ಯ ನಾಲಿಗೆ ।\nವರದ ಪುರಂದರವಿಠಲರಾಯನ\nಚರಣಕಮಲ ನೆನೆ ನಾಲಿಗೆ ॥',
            meaning: {
              en: 'Remember Hari, O tongue; sing the praise of Narahari. Think of the lotus feet of the boon-giving King Purandara Viṭhala.',
              kn: 'ನಾಲಿಗೆಯೇ, ಹರಿಯನ್ನು ಸ್ಮರಿಸು, ನರಹರಿಯನ್ನು ಭಜಿಸು. ವರಗಳನ್ನು ಕೊಡುವ ಪುರಂದರವಿಠಲರಾಯನ ಪಾದಕಮಲಗಳನ್ನು ನೆನೆ.',
            },
          },
        ],
      },
  ],
};

export const dpGajavadanaBeduve: Mantra = {
  id: 'dasara-pada-gajavadana-beduve',
  title: 'ಗಜವದನ ಬೇಡುವೆ ಗೌರೀತನಯ',
  titleEn: 'Purandara Dasa · Gajavadana Beduve',
  category: 'dasara-pada',
  order: 5,
  sourceScript: 'kannada',
  deity: 'Śrī Gaṇeśa',
  source: 'Purandara Dāsa',
  summary: 'The invocation to Gaṇeśa with which many concerts and bhajanas begin: “I pray to you, elephant-faced son of Gaurī: let me always remember Purandara Viṭhala.”',
  summaryKn: 'ಅನೇಕ ಸಂಗೀತ ಕಚೇರಿ, ಭಜನೆಗಳು ಆರಂಭವಾಗುವ ಗಣಪತಿ ಸ್ತುತಿ: “ಗೌರೀಪುತ್ರನೇ, ಪುರಂದರವಿಠಲನನ್ನು ಸದಾ ನೆನೆಯುವಂತೆ ದಯಮಾಡು.”',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಗಜವದನ ಬೇಡುವೆ ಗೌರೀತನಯ ॥',
            meaning: {
              en: 'O elephant-faced one, son of Gaurī, I pray to you.',
              kn: 'ಆನೆಮುಖದ ಗೌರೀಪುತ್ರನೇ, ನಿನ್ನನ್ನು ಬೇಡುತ್ತೇನೆ.',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ತ್ರಿಜಗವಂದಿತನೆ ಸುಜನರ ಪೊರೆವನೆ ॥',
            meaning: {
              en: 'You are honoured by the three worlds and you protect good people.',
              kn: 'ಮೂರು ಲೋಕಗಳಿಂದಲೂ ವಂದಿತನಾದವನೇ, ಸಜ್ಜನರನ್ನು ಕಾಪಾಡುವವನೇ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಪಾಶಾಂಕುಶಧರ ಪರಮಪವಿತ್ರ ।\nಮೂಷಕವಾಹನ ಮುನಿಜನಪ್ರೇಮ ॥',
            meaning: {
              en: 'Bearer of the noose and goad, most holy one, rider of the mouse, beloved of the sages.',
              kn: 'ಪಾಶ ಅಂಕುಶಗಳನ್ನು ಧರಿಸಿದವನೇ, ಪರಮಪವಿತ್ರನೇ, ಇಲಿಯನ್ನು ವಾಹನವಾಗಿ ಉಳ್ಳವನೇ, ಮುನಿಜನರಿಗೆ ಪ್ರಿಯನೇ.',
            },
          },
          {
            n: 2,
            text: 'ಮೋದದಿ ನಿನ್ನಯ ಪಾದವ ತೋರೋ ।\nಸಾಧುವಂದಿತನೆ ಆದರದಿಂದಲಿ ॥',
            meaning: {
              en: 'Lovingly and gladly show me your feet, you whom holy people worship.',
              kn: 'ಸಾಧುಗಳಿಂದ ವಂದಿತನಾದವನೇ, ಸಂತೋಷದಿಂದ, ಆದರದಿಂದ ನಿನ್ನ ಪಾದಗಳನ್ನು ತೋರಿಸು.',
            },
          },
          {
            n: 3,
            text: 'ಸರಸಿಜನಾಭ ಶ್ರೀಪುರಂದರವಿಠಲನ ।\nನಿರುತ ನೆನೆಯುವಂತೆ ದಯಮಾಡೋ ॥',
            meaning: {
              en: 'Be gracious, so that I may always remember the lotus-navelled Śrī Purandara Viṭhala.',
              kn: 'ಕಮಲನಾಭನಾದ ಶ್ರೀಪುರಂದರವಿಠಲನನ್ನು ನಾನು ಸದಾ ನೆನೆಯುವಂತೆ ದಯೆ ತೋರು.',
            },
          },
        ],
      },
  ],
};

export const dpSharanuSiddhiVinayaka: Mantra = {
  id: 'dasara-pada-sharanu-siddhi-vinayaka',
  title: 'ಶರಣು ಸಿದ್ಧಿವಿನಾಯಕ',
  titleEn: 'Purandara Dasa · Sharanu Siddhi Vinayaka',
  category: 'dasara-pada',
  order: 6,
  sourceScript: 'kannada',
  deity: 'Śrī Gaṇeśa',
  source: 'Purandara Dāsa',
  summary: 'A song of surrender to Gaṇeśa, giver of success and learning, describing his three eyes, serpent ornaments, pearl necklace, four arms, noose and goad.',
  summaryKn: 'ಸಿದ್ಧಿಯನ್ನೂ ವಿದ್ಯೆಯನ್ನೂ ಕರುಣಿಸುವ ಗಣಪತಿಗೆ ಶರಣು ಎನ್ನುವ ಕೀರ್ತನೆ; ಅವನ ಮೂರನೆಯ ಕಣ್ಣು, ನಾಗಾಭರಣ, ಮುತ್ತಿನ ಹಾರ, ನಾಲ್ಕು ಕೈಗಳು, ಪಾಶ ಅಂಕುಶಗಳ ವರ್ಣನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಶರಣು ಸಿದ್ಧಿವಿನಾಯಕ ।\nಶರಣು ವಿದ್ಯಾಪ್ರದಾಯಕ ॥',
            meaning: {
              en: 'I take refuge in you, Vināyaka, giver of success; refuge in you, giver of learning.',
              kn: 'ಸಿದ್ಧಿಯನ್ನು ಕೊಡುವ ವಿನಾಯಕನೇ ನಿನಗೆ ಶರಣು; ವಿದ್ಯೆಯನ್ನು ಕರುಣಿಸುವವನೇ ನಿನಗೆ ಶರಣು.',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ಶರಣು ಪಾರ್ವತಿತನಯ ಮೂರುತಿ ।\nಶರಣು ಮೂಷಕವಾಹನ ॥',
            meaning: {
              en: 'Refuge in you, son of Pārvatī; refuge in you, rider of the mouse.',
              kn: 'ಪಾರ್ವತಿಯ ಮಗನೇ ನಿನಗೆ ಶರಣು; ಇಲಿಯನ್ನೇರುವವನೇ ನಿನಗೆ ಶರಣು.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ನಿಟಿಲನೇತ್ರನೆ ದೇವಿಸುತನೆ\nನಾಗಭೂಷಣಪ್ರಿಯನೆ ।\nತಟಿಲ್ಲತಾಂಕಿತ ಕೋಮಲಾಂಗನೆ\nಕರ್ಣಕುಂಡಲಧಾರನೆ ॥',
            meaning: {
              en: 'You with the eye on your forehead, son of the Goddess, beloved of Śiva who wears serpents; soft-limbed one marked with lightning-bright ornaments, wearer of earrings.',
              kn: 'ಹಣೆಗಣ್ಣುಳ್ಳವನೇ, ದೇವಿಯ ಮಗನೇ, ನಾಗಭೂಷಣನಾದ ಶಿವನಿಗೆ ಪ್ರಿಯನೇ, ಮಿಂಚಿನಂತೆ ಹೊಳೆಯುವ ಆಭರಣಗಳಿಂದ ಶೋಭಿಸುವ ಕೋಮಲಾಂಗನೇ, ಕರ್ಣಕುಂಡಲಗಳನ್ನು ಧರಿಸಿದವನೇ.',
            },
          },
          {
            n: 2,
            text: 'ಬಟ್ಟ ಮುತ್ತಿನ ಪದಕಹಾರನೆ\nಬಾಹುಹಸ್ತಚತುಷ್ಟನೆ ।\nಇಟ್ಟ ತೊಡುಗೆಯ ಹೇಮಕಂಕಣ\nಪಾಶ ಅಂಕುಶಧಾರನೆ ॥',
            meaning: {
              en: 'You wear a pendant necklace of round pearls and have four arms; adorned with golden bracelets, you hold the noose and the goad.',
              kn: 'ದುಂಡು ಮುತ್ತಿನ ಪದಕದ ಹಾರ ಧರಿಸಿದವನೇ, ನಾಲ್ಕು ಕೈಗಳುಳ್ಳವನೇ, ಚಿನ್ನದ ಕಂಕಣಗಳನ್ನು ತೊಟ್ಟು ಪಾಶ ಅಂಕುಶಗಳನ್ನು ಹಿಡಿದವನೇ.',
            },
          },
          {
            n: 3,
            text: 'ಕುಕ್ಷಿ ಮಹಾಲಂಬೋದರನೆ\nಇಕ್ಷುಚಾಪನ ಗೆಲಿದನೆ ।\nಪಕ್ಷಿವಾಹನ ಸಿರಿಪುರಂದರ-\nವಿಠಲನ ನಿಜದಾಸನೆ ॥',
            meaning: {
              en: 'Great pot-bellied one, conqueror of Kāma whose bow is sugarcane, true servant of Purandara Viṭhala, Lord of Śrī, who rides the eagle.',
              kn: 'ದೊಡ್ಡ ಹೊಟ್ಟೆಯ ಲಂಬೋದರನೇ, ಕಬ್ಬಿನ ಬಿಲ್ಲಿನ ಮನ್ಮಥನನ್ನು ಗೆದ್ದವನೇ, ಗರುಡವಾಹನನಾದ ಸಿರಿಪುರಂದರವಿಠಲನ ನಿಜವಾದ ದಾಸನೇ.',
            },
          },
        ],
      },
  ],
};

export const dpGuruvinaGulama: Mantra = {
  id: 'dasara-pada-guruvina-gulama',
  title: 'ಗುರುವಿನ ಗುಲಾಮನಾಗುವ ತನಕ',
  titleEn: 'Purandara Dasa · Guruvina Gulamanaguva Tanaka',
  category: 'dasara-pada',
  order: 7,
  sourceScript: 'kannada',
  deity: 'Śrī Hari and the Guru',
  source: 'Purandara Dāsa',
  summary: 'Without becoming the humble servant of a true guru there is no liberation: reading śāstras and purāṇas, wearing rosaries and ash, even giving up pleasures are of no use until one reaches Purandara Viṭhala through him.',
  summaryKn: 'ಸದ್ಗುರುವಿನ ಸೇವಕನಾಗುವವರೆಗೆ ಮುಕ್ತಿ ದೊರೆಯದು: ಶಾಸ್ತ್ರ-ಪುರಾಣಗಳ ಓದು, ಜಪಮಾಲೆ, ಭಸ್ಮಧಾರಣೆ, ಭೋಗತ್ಯಾಗ ಯಾವುದೂ ಗುರುವಿನ ಮೂಲಕ ಪುರಂದರವಿಠಲನನ್ನು ಸೇರದೆ ಫಲ ಕೊಡದು ಎಂದು ಸಾರುವ ಕೀರ್ತನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಗುರುವಿನ ಗುಲಾಮನಾಗುವ ತನಕ ।\nದೊರೆಯದಣ್ಣ ಮುಕುತಿ ॥',
            meaning: {
              en: 'Until you become the servant of the guru, brother, you will not find liberation.',
              kn: 'ಗುರುವಿನ ಸೇವಕನಾಗುವವರೆಗೆ, ಅಣ್ಣಾ, ಮುಕ್ತಿ ದೊರೆಯುವುದಿಲ್ಲ.',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ಪರಿಪರಿ ಶಾಸ್ತ್ರವನೋದಿದರೇನು ।\nವ್ಯರ್ಥವಾಯಿತು ಭಕುತಿ ॥',
            meaning: {
              en: 'What use is reading śāstras of every kind? Such devotion is wasted.',
              kn: 'ಬಗೆಬಗೆಯ ಶಾಸ್ತ್ರಗಳನ್ನು ಓದಿದರೇನು? ಆ ಭಕ್ತಿ ವ್ಯರ್ಥವಾಯಿತು.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಆರು ಶಾಸ್ತ್ರವನೋದಿದರಿಲ್ಲ\nಮೂರಾರು ಪುರಾಣವ ಮುಗಿಸಿದರಿಲ್ಲ ।\nಸಾರ ನ್ಯಾಯ ಕಥೆಗಳ ಕೇಳಿದರಿಲ್ಲ\nಧೀರನಾಗಿ ತಾ ಪೇಳಿದರಿಲ್ಲ ॥',
            meaning: {
              en: 'Not by reading the six śāstras, not by finishing the eighteen purāṇas, not by hearing the essence of logic and the sacred stories, not by boldly expounding them oneself.',
              kn: 'ಆರು ಶಾಸ್ತ್ರಗಳನ್ನು ಓದಿದರೂ ಇಲ್ಲ, ಹದಿನೆಂಟು ಪುರಾಣಗಳನ್ನು ಮುಗಿಸಿದರೂ ಇಲ್ಲ, ನ್ಯಾಯಸಾರ, ಕಥೆಗಳನ್ನು ಕೇಳಿದರೂ ಇಲ್ಲ, ಧೈರ್ಯದಿಂದ ತಾನೇ ಪ್ರವಚನ ಮಾಡಿದರೂ ಇಲ್ಲ.',
            },
          },
          {
            n: 2,
            text: 'ಕೊರಳೊಳು ಮಾಲೆ ಧರಿಸಿದರಿಲ್ಲ\nಬೆರಳೊಳು ಜಪಮಣಿ ಎಣಿಸಿದರಿಲ್ಲ ।\nಮರುಳನಾಗಿ ಶರೀರಕೆ ಬೂದಿ\nಒರೆಸಿಕೊಂಡು ತಾ ತಿರುಗಿದರಿಲ್ಲ ॥',
            meaning: {
              en: 'Not by wearing a rosary round the neck, not by counting beads on the fingers, not by smearing the body with ash and wandering about like a madman.',
              kn: 'ಕೊರಳಲ್ಲಿ ಮಾಲೆ ಧರಿಸಿದರೂ ಇಲ್ಲ, ಬೆರಳಲ್ಲಿ ಜಪಮಣಿ ಎಣಿಸಿದರೂ ಇಲ್ಲ, ಹುಚ್ಚನಂತೆ ಮೈಗೆ ಬೂದಿ ಬಳಿದುಕೊಂಡು ತಿರುಗಿದರೂ ಇಲ್ಲ.',
            },
          },
          {
            n: 3,
            text: 'ನಾರಿಯ ಭೋಗ ಅಳಿಸಿದರಿಲ್ಲ\nಶರೀರಕೆ ಸುಖವ ಬಿಡಿಸಿದರಿಲ್ಲ ।\nನಾರದವರದ ಪುರಂದರವಿಠಲನ\nಸೇರಿಕೊಂಡು ತಾ ಪಡೆಯುವ ತನಕ ॥',
            meaning: {
              en: 'Not by giving up women, not by denying the body its comforts, until one has drawn close to Purandara Viṭhala, who blessed Nārada, and won him.',
              kn: 'ಸ್ತ್ರೀಭೋಗವನ್ನು ತೊರೆದರೂ ಇಲ್ಲ, ದೇಹಕ್ಕೆ ಸುಖವನ್ನು ನಿರಾಕರಿಸಿದರೂ ಇಲ್ಲ; ನಾರದರಿಗೆ ವರವಿತ್ತ ಪುರಂದರವಿಠಲನನ್ನು ಸೇರಿ ಪಡೆಯುವವರೆಗೆ ಮುಕ್ತಿಯಿಲ್ಲ.',
            },
          },
        ],
      },
  ],
};

export const dpRamaMantravaJapiso: Mantra = {
  id: 'dasara-pada-rama-mantrava-japiso',
  title: 'ರಾಮ ಮಂತ್ರವ ಜಪಿಸೋ ಹೇ ಮನುಜ',
  titleEn: 'Purandara Dasa · Rama Mantrava Japiso',
  category: 'dasara-pada',
  order: 8,
  sourceScript: 'kannada',
  deity: 'Śrī Rāma',
  source: 'Purandara Dāsa',
  summary: '“Chant the Rāma mantra, O man”: the mantra Śiva taught Pārvatī, which anyone may chant aloud in the street, which destroys sins, crowned Vibhīṣaṇa and is the essence of all the Vedas.',
  summaryKn: '“ಮನುಜನೇ, ರಾಮಮಂತ್ರವನ್ನು ಜಪಿಸು”: ಶಿವನು ಪಾರ್ವತಿಗೆ ಉಪದೇಶಿಸಿದ, ಯಾರು ಬೇಕಾದರೂ ಬೀದಿಬೀದಿಯಲ್ಲಿ ಕೂಗಿ ಜಪಿಸಬಹುದಾದ, ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವ, ವಿಭೀಷಣನಿಗೆ ಪಟ್ಟ ಕಟ್ಟಿದ, ವೇದಸಾರವಾದ ರಾಮನಾಮದ ಮಹಿಮೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ರಾಮ ಮಂತ್ರವ ಜಪಿಸೋ ಹೇ ಮನುಜ ॥',
            meaning: {
              en: 'Chant the mantra of Rāma, O man.',
              kn: 'ಮನುಜನೇ, ರಾಮಮಂತ್ರವನ್ನು ಜಪಿಸು.',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ಆ ಮಂತ್ರ ಈ ಮಂತ್ರ ನೆಚ್ಚಿ ನೀ ಕೆಡಬೇಡ ।\nಸೋಮಶೇಖರ ತನ್ನ ಸತಿಗೆ ಪೇಳಿದ ಮಂತ್ರ ॥',
            meaning: {
              en: 'Do not ruin yourself trusting this mantra and that; this is the mantra the moon-crested Śiva taught his wife.',
              kn: 'ಆ ಮಂತ್ರ, ಈ ಮಂತ್ರ ಎಂದು ನಂಬಿ ಹಾಳಾಗಬೇಡ. ಚಂದ್ರಶೇಖರನಾದ ಶಿವನು ತನ್ನ ಪತ್ನಿ ಪಾರ್ವತಿಗೆ ಹೇಳಿದ ಮಂತ್ರ ಇದು.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಕುಲಹೀನನಾದರೂ ಕೂಗಿ ಜಪಿಸುವ ಮಂತ್ರ\nಸಲೆ ಬೀದಿ ಬೀದಿಯೊಳು ನುಡಿವ ಮಂತ್ರ ।\nಹಲವು ಪಾಪಂಗಳ ಹತಗೊಳಿಸುವ ಮಂತ್ರ\nಸುಲಭದಿಂದಲಿ ಸ್ವರ್ಗ ಸೂರೆಗೊಂಬುವ ಮಂತ್ರ ॥',
            meaning: {
              en: 'A mantra that even one of low birth may chant aloud, that is spoken freely in every street; a mantra that destroys many sins and easily wins heaven.',
              kn: 'ಕುಲಹೀನನಾದರೂ ಕೂಗಿ ಜಪಿಸಬಹುದಾದ, ಬೀದಿಬೀದಿಯಲ್ಲಿ ನಿರ್ಭಯವಾಗಿ ನುಡಿಯಬಹುದಾದ ಮಂತ್ರ; ಹಲವು ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವ, ಸುಲಭವಾಗಿ ಸ್ವರ್ಗವನ್ನು ಗಳಿಸಿಕೊಡುವ ಮಂತ್ರ.',
            },
          },
          {
            n: 2,
            text: 'ಸ್ನಾನ ಮೌನಂಗಳಿಗೆ ಸಾಧನದ ಮಂತ್ರ\nಜ್ಞಾನಿಗಳು ಮನದಿ ಧ್ಯಾನಿಪ ಮಂತ್ರ ।\nಹೀನಗುಣಂಗಳ ಹಿಂಗಿಸುವ ಮಂತ್ರ\nಏನೆಂಬೆ ವಿಭೀಷಣಗೆ ಪಟ್ಟಗಟ್ಟಿದ ಮಂತ್ರ ॥',
            meaning: {
              en: 'It is the means that makes bathing and silence fruitful; the wise meditate on it in their hearts; it removes low qualities. What shall I say? It is the mantra that crowned Vibhīṣaṇa king.',
              kn: 'ಸ್ನಾನ, ಮೌನ ಮೊದಲಾದ ಸಾಧನೆಗಳಿಗೆ ಫಲ ಕೊಡುವ ಮಂತ್ರ; ಜ್ಞಾನಿಗಳು ಮನಸ್ಸಿನಲ್ಲಿ ಧ್ಯಾನಿಸುವ ಮಂತ್ರ; ಕೀಳುಗುಣಗಳನ್ನು ದೂರಮಾಡುವ ಮಂತ್ರ. ಏನು ಹೇಳಲಿ, ವಿಭೀಷಣನಿಗೆ ಪಟ್ಟ ಕಟ್ಟಿದ ಮಂತ್ರ ಇದು.',
            },
          },
          {
            n: 3,
            text: 'ಸಕಲ ವೇದಂಗಳಿಗೆ ಸಾರವೆನಿಪ ಮಂತ್ರ\nಮುಕುತಿಮಾರ್ಗಕೆ ಇದೇ ಮೂಲಮಂತ್ರ ।\nಭಕುತಿರಸಕೆ ಬಟ್ಟೆ ಒಮ್ಮೆ ತೋರುವ ಮಂತ್ರ\nಸುಖನಿಧಿ ಪುರಂದರವಿಠಲನ ಮಂತ್ರ ॥',
            meaning: {
              en: 'It is the essence of all the Vedas, the root mantra of the path to liberation; it shows at once the way to the joy of devotion. It is the mantra of Purandara Viṭhala, the treasure of bliss.',
              kn: 'ಎಲ್ಲ ವೇದಗಳ ಸಾರವೆನಿಸುವ ಮಂತ್ರ; ಮೋಕ್ಷಮಾರ್ಗಕ್ಕೆ ಇದೇ ಮೂಲಮಂತ್ರ; ಭಕ್ತಿರಸಕ್ಕೆ ದಾರಿ ತೋರುವ ಮಂತ್ರ; ಸುಖನಿಧಿಯಾದ ಪುರಂದರವಿಠಲನ ಮಂತ್ರ.',
            },
          },
        ],
      },
  ],
};

export const dpYarigeYaruntu: Mantra = {
  id: 'dasara-pada-yarige-yaruntu',
  title: 'ಯಾರಿಗೆ ಯಾರುಂಟು ಎರವಿನ ಸಂಸಾರ',
  titleEn: 'Purandara Dasa · Yarige Yaruntu Eravina Samsara',
  category: 'dasara-pada',
  order: 9,
  sourceScript: 'kannada',
  deity: 'Śrī Hari',
  source: 'Purandara Dāsa',
  summary: '“Who belongs to whom in this borrowed household? It is a bubble on water.” The well dries up when one is thirsty, the shade-tree falls on one’s head, the child vanishes from the cradle; only Hari can protect at the hour of death.',
  summaryKn: '“ಎರವಲು ಪಡೆದ ಈ ಸಂಸಾರದಲ್ಲಿ ಯಾರಿಗೆ ಯಾರುಂಟು? ಇದು ನೀರ ಮೇಲಿನ ಗುಳ್ಳೆ.” ಬಾಯಾರಿದಾಗ ಬಾವಿ ಬತ್ತಿತು, ನೆರಳಿಗೆ ಹೋದರೆ ಮರವೇ ತಲೆಯ ಮೇಲೆ ಬಿತ್ತು, ತೊಟ್ಟಿಲ ಮಗು ಮಾಯವಾಯಿತು; ಸಾಯುವ ಹೊತ್ತಿಗೆ ಹರಿಯೊಬ್ಬನೇ ಕಾಯುವವನು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಯಾರಿಗೆ ಯಾರುಂಟು ಎರವಿನ ಸಂಸಾರ ।\nನೀರ ಮೇಲಣ ಗುಳ್ಳೆ ನಿಜವಲ್ಲ ಹರಿಯೇ ॥',
            meaning: {
              en: 'Who has whom? This household is only on loan; like a bubble on water it is not real, O Hari.',
              kn: 'ಯಾರಿಗೆ ಯಾರು ಇದ್ದಾರೆ? ಈ ಸಂಸಾರ ಎರವಲಿನದು; ನೀರಿನ ಮೇಲಿನ ಗುಳ್ಳೆಯಂತೆ ಶಾಶ್ವತವಲ್ಲ, ಹರಿಯೇ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಬಾಯಾರಿತು ಎಂದು ಬಾವಿನೀರಿಗೆ ಪೋದೆ ।\nಬಾವಿಲಿ ಜಲ ಬತ್ತಿ ಬರಿದಾಯ್ತು ಹರಿಯೆ ॥',
            meaning: {
              en: 'I was thirsty and went to the well for water, but the water had dried up and the well was empty, Hari.',
              kn: 'ಬಾಯಾರಿತು ಎಂದು ಬಾವಿಯ ನೀರಿಗೆ ಹೋದೆ; ಬಾವಿಯ ನೀರು ಬತ್ತಿ ಬರಿದಾಗಿತ್ತು, ಹರಿಯೇ.',
            },
          },
          {
            n: 2,
            text: 'ಬಿಸಿಲು ಗಾಳಿಗಾಗಿ ಮರದ ನೆರಳಿಗೆ ಪೋದೆ ।\nಮರ ಬಗ್ಗಿ ಶಿರದ ಮೇಲೊರಗಿತೋ ಹರಿಯೆ ॥',
            meaning: {
              en: 'To escape the sun and wind I went into the shade of a tree, and the tree bent and fell upon my head, Hari.',
              kn: 'ಬಿಸಿಲು-ಗಾಳಿಯಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಮರದ ನೆರಳಿಗೆ ಹೋದೆ; ಆ ಮರವೇ ಬಾಗಿ ನನ್ನ ತಲೆಯ ಮೇಲೆ ಉರುಳಿತು, ಹರಿಯೇ.',
            },
          },
          {
            n: 3,
            text: 'ಅಡವಿಯೊಳ್ಮನೆ ಮಾಡಿ ಗಿಡಕೆ ತೊಟ್ಟಿಲು ಕಟ್ಟಿ ।\nತೊಟ್ಟಿಲಿನ ಶಿಶು ಮಾಯವಾಯಿತು ಹರಿಯೆ ॥',
            meaning: {
              en: 'I made a home in the forest and tied a cradle to a tree, and the baby in the cradle vanished, Hari.',
              kn: 'ಕಾಡಿನಲ್ಲಿ ಮನೆ ಮಾಡಿ ಗಿಡಕ್ಕೆ ತೊಟ್ಟಿಲು ಕಟ್ಟಿದೆ; ತೊಟ್ಟಿಲಿನ ಮಗುವೇ ಮಾಯವಾಯಿತು, ಹರಿಯೇ.',
            },
          },
          {
            n: 4,
            text: 'ತಂದೆ ಶ್ರೀಪುರಂದರವಿಠಲ ನಾರಾಯಣ ।\nನಾ ಸಾಯೋ ಹೊತ್ತಿಗೆ ನೀ ಕಾಯೋ ಹರಿಯೆ ॥',
            meaning: {
              en: 'Father Śrī Purandara Viṭhala, Nārāyaṇa: when the hour of my death comes, protect me, Hari.',
              kn: 'ತಂದೆಯೇ, ಶ್ರೀಪುರಂದರವಿಠಲನೇ, ನಾರಾಯಣನೇ, ನಾನು ಸಾಯುವ ಹೊತ್ತಿಗೆ ನೀನೇ ಕಾಪಾಡು, ಹರಿಯೇ.',
            },
          },
        ],
      },
  ],
};

export const dpDasanaMadikoEnna: Mantra = {
  id: 'dasara-pada-dasana-madiko-enna',
  title: 'ದಾಸನ ಮಾಡಿಕೊ ಎನ್ನ',
  titleEn: 'Purandara Dasa · Dasana Madiko Enna',
  category: 'dasara-pada',
  order: 10,
  sourceScript: 'kannada',
  deity: 'Śrī Veṅkaṭaramaṇa',
  source: 'Purandara Dāsa',
  summary: '“Make me your servant, Lord Veṅkaṭaramaṇa of a thousand names.” Purandara Dāsa asks for the armour of grace, service at the Lord’s feet, his hand of protection on his head, and a pure mind fixed on him.',
  summaryKn: '“ಸಾವಿರ ನಾಮಗಳ ವೆಂಕಟರಮಣನೇ, ನನ್ನನ್ನು ನಿನ್ನ ದಾಸನನ್ನಾಗಿ ಮಾಡಿಕೋ.” ಕರುಣೆಯ ಕವಚ, ಪಾದಸೇವೆ, ತಲೆಯ ಮೇಲೆ ಅಭಯಹಸ್ತ, ನಿನ್ನನ್ನೇ ಧ್ಯಾನಿಸುವ ಶುದ್ಧಮನಸ್ಸು ಕೊಡು ಎಂಬ ಪುರಂದರದಾಸರ ಪ್ರಾರ್ಥನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ದಾಸನ ಮಾಡಿಕೊ ಎನ್ನ ।\nಸ್ವಾಮಿ ಸಾಸಿರನಾಮದ ವೆಂಕಟರಮಣ ॥',
            meaning: {
              en: 'Make me your servant, Lord Veṅkaṭaramaṇa of a thousand names.',
              kn: 'ಸಾವಿರ ನಾಮಗಳ ಸ್ವಾಮಿ ವೆಂಕಟರಮಣನೇ, ನನ್ನನ್ನು ನಿನ್ನ ದಾಸನನ್ನಾಗಿ ಮಾಡಿಕೋ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ದುರುಬುದ್ಧಿಗಳನೆಲ್ಲ ಬಿಡಿಸೊ ನಿನ್ನ\nಕರುಣಕವಚವೆನ್ನ ಹರಣಕ್ಕೆ ತೊಡಿಸೊ ।\nಚರಣಸೇವೆ ಎನಗೆ ಕೊಡಿಸೊ ಅಭಯ\nಕರಪುಷ್ಪವ ಎನ್ನ ಶಿರದಲ್ಲಿ ಮುಡಿಸೊ ॥',
            meaning: {
              en: 'Free me of every evil thought; put the armour of your grace upon my life. Grant me service at your feet, and lay the flower of your protecting hand on my head.',
              kn: 'ನನ್ನ ಕೆಟ್ಟ ಬುದ್ಧಿಗಳನ್ನೆಲ್ಲ ಬಿಡಿಸು; ನಿನ್ನ ಕರುಣೆಯ ಕವಚವನ್ನು ನನ್ನ ಪ್ರಾಣಕ್ಕೆ ತೊಡಿಸು. ನಿನ್ನ ಪಾದಸೇವೆಯನ್ನು ನನಗೆ ಕೊಡು; ಅಭಯಹಸ್ತವೆಂಬ ಹೂವನ್ನು ನನ್ನ ತಲೆಯಲ್ಲಿ ಮುಡಿಸು.',
            },
          },
          {
            n: 2,
            text: 'ದೃಢಭಕ್ತಿ ನಿನ್ನಲ್ಲಿ ಬೇಡಿ ನಾ\nಅಡಿಗೆರಗುವೆನಯ್ಯ ಅನುದಿನ ಪಾಡಿ ।\nಕಡೆಗಣ್ಣಿಲೆನ್ನ ನೋಡಿ ಬಿಡುವೆ\nಕೊಡು ನಿನ್ನ ಧ್ಯಾನವ ಮನಶುಚಿ ಮಾಡಿ ॥',
            meaning: {
              en: 'Asking you for firm devotion, I bow at your feet and sing to you every day. Will you only glance at me sidelong and leave me? Purify my mind and give me meditation on you.',
              kn: 'ನಿನ್ನಲ್ಲಿ ದೃಢಭಕ್ತಿಯನ್ನು ಬೇಡಿ, ದಿನವೂ ಹಾಡುತ್ತ ನಿನ್ನ ಪಾದಗಳಿಗೆ ನಮಿಸುತ್ತೇನೆ. ಕಡೆಗಣ್ಣಿನಿಂದ ನೋಡಿ ಬಿಟ್ಟುಬಿಡುವೆಯಾ? ನನ್ನ ಮನಸ್ಸನ್ನು ಶುದ್ಧಮಾಡಿ ನಿನ್ನ ಧ್ಯಾನವನ್ನು ಕೊಡು.',
            },
          },
          {
            n: 3,
            text: 'ಮೊರೆಹೊಕ್ಕವರ ಕಾಯ್ವ ಬಿರುದು ಎನ್ನ\nಮರೆಯದೆ ರಕ್ಷಣೆ ಮಾಡಯ್ಯ ಪೊರೆದು ।\nದುರಿತಗಳೆಲ್ಲವ ತರಿದು\nಸಿರಿಪುರಂದರವಿಠಲ ಎನ್ನನು ಪೊರೆದು ॥',
            meaning: {
              en: 'Your title is “protector of those who seek refuge”; do not forget me, look after me and keep me safe. Cut away all my sins, Śrī Purandara Viṭhala, and protect me.',
              kn: 'ಮೊರೆಹೊಕ್ಕವರನ್ನು ಕಾಪಾಡುವುದು ನಿನ್ನ ಬಿರುದು; ನನ್ನನ್ನು ಮರೆಯದೆ ಪೊರೆದು ರಕ್ಷಿಸು. ನನ್ನ ಪಾಪಗಳನ್ನೆಲ್ಲ ಕತ್ತರಿಸಿ, ಸಿರಿಪುರಂದರವಿಠಲನೇ, ನನ್ನನ್ನು ಕಾಪಾಡು.',
            },
          },
        ],
      },
  ],
};

export const dpManavaJanmaDoddadu: Mantra = {
  id: 'dasara-pada-manava-janma-doddadu',
  title: 'ಮಾನವ ಜನ್ಮ ದೊಡ್ಡದು ಇದ',
  titleEn: 'Purandara Dasa · Manava Janma Doddadu',
  category: 'dasara-pada',
  order: 11,
  sourceScript: 'kannada',
  deity: 'Śrī Hari',
  source: 'Purandara Dāsa',
  summary: '“Human birth is a great thing; do not waste it, you fools.” With eyes, hands, ears and tongue, why chew dust and starve yourselves of Hari’s nectar-like name? Earn dharma before Yama’s messengers drag you away.',
  summaryKn: '“ಮಾನವಜನ್ಮ ದೊಡ್ಡದು, ಅದನ್ನು ಹಾಳುಮಾಡಬೇಡಿ ಹುಚ್ಚರೇ.” ಕಣ್ಣು, ಕೈ, ಕಿವಿ, ನಾಲಿಗೆಗಳಿದ್ದೂ ಹರಿನಾಮಾಮೃತವನ್ನು ಉಣ್ಣದೆ ಉಪವಾಸವಿರುವುದೇಕೆ? ಯಮದೂತರು ಎಳೆದೊಯ್ಯುವ ಮೊದಲೇ ಧರ್ಮವನ್ನು ಗಳಿಸಿ ಎಂದು ಎಚ್ಚರಿಸುವ ಕೀರ್ತನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಮಾನವ ಜನ್ಮ ದೊಡ್ಡದು ಇದ ।\nಹಾನಿ ಮಾಡಲು ಬೇಡಿ ಹುಚ್ಚಪ್ಪಗಳಿರಾ ॥',
            meaning: {
              en: 'Human birth is a great thing; do not ruin it, you foolish people.',
              kn: 'ಮನುಷ್ಯಜನ್ಮ ಬಹಳ ದೊಡ್ಡದು; ಹುಚ್ಚರೇ, ಇದನ್ನು ಹಾಳುಮಾಡಬೇಡಿ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಕಣ್ಣು ಕೈ ಕಾಲ್ ಕಿವಿ ನಾಲಿಗೆ ಇರಲಿಕ್ಕೆ\nಮಣ್ಣುಮುಕ್ಕಿ ಮರುಳಾಗುವರೆ ।\nಹೆಣ್ಣು ಮಣ್ಣಿಗಾಗಿ ಹರಿನಾಮಾಮೃತ\nಉಣ್ಣದೆ ಉಪವಾಸ ಇರುವರೆ ಖೋಡಿ ॥',
            meaning: {
              en: 'When you have eyes, hands, feet, ears and a tongue, will you eat dirt and lose your senses? For women and land will you go hungry, not tasting the nectar of Hari’s name, you wretches?',
              kn: 'ಕಣ್ಣು, ಕೈ, ಕಾಲು, ಕಿವಿ, ನಾಲಿಗೆ ಇದ್ದೂ ಮಣ್ಣು ಮುಕ್ಕಿ ಮರುಳಾಗುವುದೇ? ಹೆಣ್ಣು-ಮಣ್ಣಿಗಾಗಿ ಹರಿನಾಮವೆಂಬ ಅಮೃತವನ್ನು ಉಣ್ಣದೆ ಉಪವಾಸವಿರುವುದೇ, ಮೂರ್ಖರೇ?',
            },
          },
          {
            n: 2,
            text: 'ಕಾಲನ ದೂತರು ಕಾಲ್ಪಿಡಿದೆಳೆವಾಗ\nತಾಳು ತಾಳೆಂದರೆ ತಾಳುವರೆ ।\nದಾಳಿ ಬಾರದ ಮುನ್ನ ಧರ್ಮವ ಗಳಿಸಿರೊ\nಸುಳ್ಳಿನ ಸಂಸಾರ ಸುಳಿಗೆ ಸಿಕ್ಕಲುಬೇಡಿ ॥',
            meaning: {
              en: 'When Yama’s messengers seize you by the feet and drag you off, will they wait if you cry “Wait, wait”? Earn dharma before that attack comes; do not be caught in the whirlpool of this false household life.',
              kn: 'ಯಮದೂತರು ಕಾಲು ಹಿಡಿದು ಎಳೆಯುವಾಗ “ತಾಳಿ, ತಾಳಿ” ಎಂದರೆ ಅವರು ತಾಳುವರೇ? ಆ ದಾಳಿ ಬರುವ ಮೊದಲೇ ಧರ್ಮವನ್ನು ಗಳಿಸಿರಿ; ಸುಳ್ಳಿನ ಸಂಸಾರದ ಸುಳಿಯಲ್ಲಿ ಸಿಕ್ಕಿಕೊಳ್ಳಬೇಡಿ.',
            },
          },
          {
            n: 3,
            text: 'ಏನು ಕಾರಣ ಯದುಪತಿಯನು ಮರೆತಿರಿ\nಧನ ಧಾನ್ಯ ಸತಿಸುತರು ಕಾಯುವರೆ ।\nಇನ್ನಾದರೂ ಏಕೋಭಾವದಿ ಭಜಿಸಿರೊ\nಚೆನ್ನ ಶ್ರೀಪುರಂದರವಿಠಲರಾಯನ ॥',
            meaning: {
              en: 'Why have you forgotten the Lord of the Yadus? Will wealth, grain, wife and children save you? Even now, worship with a single mind the lovely King Śrī Purandara Viṭhala.',
              kn: 'ಯದುಪತಿಯನ್ನು ಯಾಕೆ ಮರೆತಿರಿ? ಹಣ, ಧಾನ್ಯ, ಹೆಂಡತಿ-ಮಕ್ಕಳು ನಿಮ್ಮನ್ನು ಕಾಪಾಡುವರೇ? ಇನ್ನಾದರೂ ಏಕಮನಸ್ಸಿನಿಂದ ಸುಂದರನಾದ ಶ್ರೀಪುರಂದರವಿಠಲರಾಯನನ್ನು ಭಜಿಸಿರಿ.',
            },
          },
        ],
      },
  ],
};

export const dpToogireRangana: Mantra = {
  id: 'dasara-pada-toogire-rangana',
  title: 'ತೂಗಿರೆ ರಂಗನ ತೂಗಿರೆ ಕೃಷ್ಣನ',
  titleEn: 'Purandara Dasa · Toogire Rangana',
  category: 'dasara-pada',
  order: 12,
  sourceScript: 'kannada',
  deity: 'Śrī Kṛṣṇa',
  source: 'Purandara Dāsa',
  summary: 'A cradle song: the women of the serpent world, of Indra’s heaven and of earth are asked to rock the cradle of Raṅga, Kṛṣṇa, Veṅkaṭeśa of the hills and Raṅganātha of the Kāveri, who sleeps on Śeṣa and on the banyan leaf.',
  summaryKn: 'ತೊಟ್ಟಿಲ ಹಾಡು: ನಾಗಲೋಕ, ಇಂದ್ರಲೋಕ, ಭೂಲೋಕಗಳ ಸ್ತ್ರೀಯರೆಲ್ಲ ಶೇಷಶಾಯಿಯಾದ, ಆಲದೆಲೆಯ ಮೇಲೆ ಮಲಗುವ ರಂಗ, ಕೃಷ್ಣ, ತಿಮ್ಮಪ್ಪ, ಕಾವೇರಿ ರಂಗಯ್ಯನ ತೊಟ್ಟಿಲನ್ನು ತೂಗಿರಿ ಎಂದು ಕರೆಯುವ ಹಾಡು.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ತೂಗಿರೆ ರಂಗನ ತೂಗಿರೆ ಕೃಷ್ಣನ\nತೂಗಿರೆ ಅಚ್ಯುತಾನಂತನ ।\nತೂಗಿರೆ ವರಗಿರಿಯಪ್ಪ ತಿಮ್ಮಪ್ಪನ\nತೂಗಿರೆ ಕಾವೇರಿ ರಂಗಯ್ಯನ ॥',
            meaning: {
              en: 'Rock Raṅga, rock Kṛṣṇa, rock Acyuta, the endless one; rock Timmappa, lord of the sacred hill; rock Raṅgayya of the Kāveri.',
              kn: 'ರಂಗನನ್ನು ತೂಗಿರಿ, ಕೃಷ್ಣನನ್ನು ತೂಗಿರಿ, ಅಚ್ಯುತ ಅನಂತನನ್ನು ತೂಗಿರಿ; ಶ್ರೇಷ್ಠಗಿರಿಯ ಒಡೆಯ ತಿಮ್ಮಪ್ಪನನ್ನು ತೂಗಿರಿ, ಕಾವೇರಿಯ ರಂಗಯ್ಯನನ್ನು ತೂಗಿರಿ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ನಾಗಲೋಕದಲ್ಲಿ ನಾರಾಯಣ ಮಲಗ್ಯಾನೆ\nನಾಗಕನ್ನಿಕೆಯರು ತೂಗಿರೆ ।\nನಾಗವೇಣಿಯರು ನೇಣ ಪಿಡಿದುಕೊಂಡು\nಬೇಗನೆ ತೊಟ್ಟಿಲ ತೂಗಿರೆ ॥',
            meaning: {
              en: 'Nārāyaṇa is sleeping in the serpent world: rock him, daughters of the Nāgas. You with braids like serpents, take hold of the cord and rock the cradle quickly.',
              kn: 'ನಾಗಲೋಕದಲ್ಲಿ ನಾರಾಯಣ ಮಲಗಿದ್ದಾನೆ; ನಾಗಕನ್ಯೆಯರೇ ತೂಗಿರಿ. ಹಾವಿನಂತಹ ಜಡೆಯುಳ್ಳವರೇ, ಹಗ್ಗ ಹಿಡಿದು ಬೇಗನೆ ತೊಟ್ಟಿಲನ್ನು ತೂಗಿರಿ.',
            },
          },
          {
            n: 2,
            text: 'ಇಂದ್ರಲೋಕದಲ್ಲುಪೇಂದ್ರ ಮಲಗ್ಯಾನೆ\nಇಂದುಮುಖಿಯರೆಲ್ಲ ತೂಗಿರೆ ।\nಇಂದ್ರಕನ್ನಿಕೆಯರು ಚಂದದಿ ಬಂದು ಮು-\nಕುಂದನ ತೊಟ್ಟಿಲ ತೂಗಿರೆ ॥',
            meaning: {
              en: 'Upendra is sleeping in Indra’s world: rock him, all you moon-faced ones. Maidens of Indra’s heaven, come gracefully and rock Mukunda’s cradle.',
              kn: 'ಇಂದ್ರಲೋಕದಲ್ಲಿ ಉಪೇಂದ್ರ ಮಲಗಿದ್ದಾನೆ; ಚಂದ್ರಮುಖಿಯರೆಲ್ಲ ತೂಗಿರಿ. ಇಂದ್ರಲೋಕದ ಕನ್ಯೆಯರೇ, ಚಂದವಾಗಿ ಬಂದು ಮುಕುಂದನ ತೊಟ್ಟಿಲನ್ನು ತೂಗಿರಿ.',
            },
          },
          {
            n: 3,
            text: 'ಆಲದೆಲೆಯ ಮೇಲೆ ಶ್ರೀಲೋಲ ಮಲಗ್ಯಾನೆ\nನೀಲಕುಂತಳೆಯರು ತೂಗಿರೆ ।\nವ್ಯಾಳಶಯನ ಹರಿ ಮಲಗು ಮಲಗೆಂದು\nಬಾಲಕೃಷ್ಣನ ತೂಗಿರೆ ॥',
            meaning: {
              en: 'The beloved of Śrī is sleeping on a banyan leaf: rock him, you with dark tresses. Saying “Sleep, sleep, Hari who rests on the serpent”, rock the child Kṛṣṇa.',
              kn: 'ಲಕ್ಷ್ಮೀಪ್ರಿಯನು ಆಲದೆಲೆಯ ಮೇಲೆ ಮಲಗಿದ್ದಾನೆ; ಕಪ್ಪು ಕೂದಲಿನವರೇ ತೂಗಿರಿ. “ಶೇಷಶಯನ ಹರಿಯೇ, ಮಲಗು ಮಲಗು” ಎನ್ನುತ್ತ ಬಾಲಕೃಷ್ಣನನ್ನು ತೂಗಿರಿ.',
            },
          },
          {
            n: 4,
            text: 'ಸಾಸಿರನಾಮದ ಸರ್ವೋತ್ತಮನೆಂದು\nಸೂಸುತ್ತ ತೊಟ್ಟಿಲ ತೂಗಿರೆ ।\nಲೇಸಾಗಿ ಮಡುವಿನೊಳ್ ಶೇಷನ ತುಳಿದಿಟ್ಟ\nದೋಷವಿದೂರನ ತೂಗಿರೆ ॥',
            meaning: {
              en: 'Rock the cradle, singing out that he of a thousand names is the highest of all; rock the flawless one who trampled the serpent in the pool.',
              kn: 'ಸಾವಿರ ನಾಮಗಳ ಸರ್ವೋತ್ತಮನೆಂದು ಹಾಡುತ್ತ ತೊಟ್ಟಿಲನ್ನು ತೂಗಿರಿ; ಮಡುವಿನಲ್ಲಿ ಕಾಳಿಂಗನನ್ನು ಚೆನ್ನಾಗಿ ತುಳಿದ, ದೋಷರಹಿತನಾದವನನ್ನು ತೂಗಿರಿ.',
            },
          },
          {
            n: 5,
            text: 'ಅರಳೆಲೆ ಮಾಗಾಯಿ ಕೊರಳ ಮುತ್ತಿನಹಾರ\nತರಳನ ತೊಟ್ಟಿಲ ತೂಗಿರೆ ।\nಸಿರಿದೇವಿರಮಣನ ಪುರಂದರವಿಠಲನೆ\nಕರುಣದಿ ಮಲಗೆಂದು ತೂಗಿರೆ ॥',
            meaning: {
              en: 'Rock the cradle of the little boy with leaf-shaped ornaments and a pearl necklace at his throat; rock him, saying “Purandara Viṭhala, beloved of Śrī Devī, sleep graciously.”',
              kn: 'ಅರಳೆಲೆ, ಮಾಗಾಯಿ ಆಭರಣಗಳೂ ಕೊರಳಲ್ಲಿ ಮುತ್ತಿನ ಹಾರವೂ ತೊಟ್ಟ ಬಾಲಕನ ತೊಟ್ಟಿಲನ್ನು ತೂಗಿರಿ; “ಸಿರಿದೇವಿಯ ರಮಣನಾದ ಪುರಂದರವಿಠಲನೇ, ಕರುಣೆಯಿಂದ ಮಲಗು” ಎಂದು ತೂಗಿರಿ.',
            },
          },
        ],
      },
  ],
};

export const dpIduBhagya: Mantra = {
  id: 'dasara-pada-idu-bhagya',
  title: 'ಇದು ಭಾಗ್ಯ ಇದು ಭಾಗ್ಯ ಇದು ಭಾಗ್ಯವಯ್ಯ',
  titleEn: 'Purandara Dasa · Idu Bhagya Idu Bhagya',
  category: 'dasara-pada',
  order: 13,
  sourceScript: 'kannada',
  deity: 'Śrī Hari',
  source: 'Purandara Dāsa',
  summary: '“This is good fortune: worship of Padmanābha’s feet.” Be firm as a rock in the river of saṃsāra, sweet as jaggery among kin, a fish in the ocean of Madhva’s teaching, a fire to the straw of sense-pleasure.',
  summaryKn: '“ಪದ್ಮನಾಭನ ಪಾದಭಜನೆಯೇ ನಿಜವಾದ ಭಾಗ್ಯ.” ಸಂಸಾರದ ಹೊಳೆಯಲ್ಲಿ ಕಲ್ಲಿನಂತೆ ಗಟ್ಟಿಯಾಗಿ, ಬಂಧುಗಳಲ್ಲಿ ಬೆಲ್ಲದಂತೆ ಸಿಹಿಯಾಗಿ, ಮಧ್ವಮತಸಾಗರದಲ್ಲಿ ಮೀನಿನಂತೆ, ವಿಷಯಭೋಗದ ಹುಲ್ಲಿಗೆ ಬೆಂಕಿಯಂತೆ ಇರಬೇಕು ಎಂದು ತಿಳಿಸುವ ಕೀರ್ತನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಇದು ಭಾಗ್ಯ ಇದು ಭಾಗ್ಯ ಇದು ಭಾಗ್ಯವಯ್ಯ ।\nಪದುಮನಾಭನ ಪಾದಭಜನೆ ಸುಖವಯ್ಯ ॥',
            meaning: {
              en: 'This is good fortune, this is good fortune indeed: the joy of worshipping the feet of Padmanābha.',
              kn: 'ಇದೇ ಭಾಗ್ಯ, ಇದೇ ನಿಜವಾದ ಭಾಗ್ಯ: ಪದ್ಮನಾಭನ ಪಾದಗಳನ್ನು ಭಜಿಸುವ ಸುಖ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಕಲ್ಲಾಗಿ ಇರಬೇಕು ಕಠಿಣ ಭವತೊರೆಯೊಳಗೆ\nಬಿಲ್ಲಾಗಿ ಇರಬೇಕು ಬಲ್ಲವರೊಳು ।\nಮೆಲ್ಲನೆ ಮಾಧವನ ಮನವ ಮೆಚ್ಚಿಸಬೇಕು\nಬೆಲ್ಲವಾಗಿರಬೇಕು ಬಂಧುಜನರೊಳಗೆ ॥',
            meaning: {
              en: 'Be like a rock in the harsh river of saṃsāra; bend like a bow before the wise. Gently win the heart of Mādhava; be sweet as jaggery among your kin.',
              kn: 'ಕಠಿಣವಾದ ಸಂಸಾರದ ಹೊಳೆಯಲ್ಲಿ ಕಲ್ಲಿನಂತೆ ಅಚಲವಾಗಿರಬೇಕು; ತಿಳಿದವರ ಮುಂದೆ ಬಿಲ್ಲಿನಂತೆ ಬಾಗಿರಬೇಕು. ನಿಧಾನವಾಗಿ ಮಾಧವನ ಮನಸ್ಸನ್ನು ಮೆಚ್ಚಿಸಬೇಕು; ಬಂಧುಗಳ ನಡುವೆ ಬೆಲ್ಲದಂತೆ ಸಿಹಿಯಾಗಿರಬೇಕು.',
            },
          },
          {
            n: 2,
            text: 'ಬುದ್ಧಿಯಲಿ ತನುಮನವ ತಿದ್ದಿಕೊಳುತಿರಬೇಕು\nಮುದ್ದಾಗಿ ಇರಬೇಕು ಮುನಿಯೋಗಿಗಳಿಗೆ ।\nಮಧ್ವಮತಾಬ್ಧಿಯಲಿ ಮೀನಾಗಿ ಇರಬೇಕು\nಶುದ್ಧನಾಗಿರಬೇಕು ಕರಣತ್ರಯಂಗಳಲಿ ॥',
            meaning: {
              en: 'Keep correcting body and mind with understanding; be dear to sages and yogis. Live like a fish in the ocean of Madhva’s teaching; be pure in thought, word and deed.',
              kn: 'ವಿವೇಕದಿಂದ ದೇಹ-ಮನಸ್ಸುಗಳನ್ನು ತಿದ್ದಿಕೊಳ್ಳುತ್ತಿರಬೇಕು; ಮುನಿಗಳಿಗೂ ಯೋಗಿಗಳಿಗೂ ಪ್ರಿಯನಾಗಿರಬೇಕು. ಮಧ್ವಮತವೆಂಬ ಸಾಗರದಲ್ಲಿ ಮೀನಿನಂತೆ ಇರಬೇಕು; ಮನಸ್ಸು, ಮಾತು, ಕೃತಿ ಮೂರರಲ್ಲೂ ಶುದ್ಧನಾಗಿರಬೇಕು.',
            },
          },
          {
            n: 3,
            text: 'ವಿಷಯಭೋಗದ ತೃಣಕೆ ಉರಿಯಾಗಿ ಇರಬೇಕು\nನಿಶಿ ಹಗಲು ಶ್ರೀಹರಿಯ ಭಜಿಸಬೇಕು ।\nವಸುಧೆಯೊಳು ಪುರಂದರವಿಠಲನ ನಾಮವ\nಹಸನಾಗಿ ನೆನೆನೆನೆದು ಸುಖಿಯಾಗಬೇಕು ॥',
            meaning: {
              en: 'Be a flame to the straw of sense-pleasures; worship Śrī Hari night and day. Here on earth, remember the name of Purandara Viṭhala again and again with a clean heart, and be happy.',
              kn: 'ವಿಷಯಭೋಗಗಳೆಂಬ ಹುಲ್ಲಿಗೆ ಬೆಂಕಿಯಾಗಿರಬೇಕು; ಹಗಲು-ರಾತ್ರಿ ಶ್ರೀಹರಿಯನ್ನು ಭಜಿಸಬೇಕು. ಈ ಭೂಮಿಯಲ್ಲಿ ಪುರಂದರವಿಠಲನ ನಾಮವನ್ನು ಶುದ್ಧಮನಸ್ಸಿನಿಂದ ಮತ್ತೆಮತ್ತೆ ನೆನೆದು ಸುಖಿಯಾಗಬೇಕು.',
            },
          },
        ],
      },
  ],
};

export const dpRamanamaPayasakke: Mantra = {
  id: 'dasara-pada-ramanama-payasakke',
  title: 'ರಾಮನಾಮ ಪಾಯಸಕ್ಕೆ ಕೃಷ್ಣನಾಮ ಸಕ್ಕರೆ',
  titleEn: 'Purandara Dasa · Ramanama Payasakke',
  category: 'dasara-pada',
  order: 14,
  sourceScript: 'kannada',
  deity: 'Śrī Rāma, Kṛṣṇa and Viṭhala',
  source: 'Purandara Dāsa',
  summary: 'A kitchen song of devotion: Rāma’s name is the pāyasa, Kṛṣṇa’s name the sugar and Viṭhala’s name the ghee. Grind the wheat of single-mindedness on the stone of detachment, cook it in the pot of the heart, and taste the bliss.',
  summaryKn: 'ಅಡುಗೆಮನೆಯ ರೂಪಕದ ಭಕ್ತಿಗೀತೆ: ರಾಮನಾಮವೇ ಪಾಯಸ, ಕೃಷ್ಣನಾಮವೇ ಸಕ್ಕರೆ, ವಿಠಲನಾಮವೇ ತುಪ್ಪ. ವೈರಾಗ್ಯದ ಕಲ್ಲಿನಲ್ಲಿ ಬೀಸಿ, ಹೃದಯವೆಂಬ ಮಡಕೆಯಲ್ಲಿ ಬೇಯಿಸಿ, ಆನಂದವನ್ನು ಸವಿಯಿರಿ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ರಾಮನಾಮ ಪಾಯಸಕ್ಕೆ ಕೃಷ್ಣನಾಮ ಸಕ್ಕರೆ ।\nವಿಠಲನಾಮ ತುಪ್ಪವ ಬೆರೆಸಿ ಬಾಯಿ ಚಪ್ಪರಿಸಿರೋ ॥',
            meaning: {
              en: 'To the pāyasa of Rāma’s name add the sugar of Kṛṣṇa’s name, mix in the ghee of Viṭhala’s name, and smack your lips!',
              kn: 'ರಾಮನಾಮವೆಂಬ ಪಾಯಸಕ್ಕೆ ಕೃಷ್ಣನಾಮವೆಂಬ ಸಕ್ಕರೆ, ವಿಠಲನಾಮವೆಂಬ ತುಪ್ಪವನ್ನು ಬೆರೆಸಿ ಬಾಯಿ ಚಪ್ಪರಿಸಿ ಸವಿಯಿರಿ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಒಮ್ಮಾನ ಗೋಧಿಯ ತಂದು\nವೈರಾಗ್ಯ ಕಲ್ಲಲಿ ಬೀಸಿ ।\nಸುಮ್ಮಾನೆ ಸಜ್ಜಿಗೆ ತೆಗೆದು\nಗಮ್ಮಾನೆ ಶಾವಿಗೆ ಹೊಸೆದು ॥',
            meaning: {
              en: 'Bring the wheat of a single mind and grind it on the stone of detachment; quietly sift out the semolina and roll fragrant vermicelli.',
              kn: 'ಏಕಾಗ್ರಮನಸ್ಸೆಂಬ ಗೋಧಿಯನ್ನು ತಂದು ವೈರಾಗ್ಯದ ಕಲ್ಲಿನಲ್ಲಿ ಬೀಸಿ, ಮೌನವಾಗಿ ಸಜ್ಜಿಗೆ ತೆಗೆದು, ಘಮಘಮಿಸುವ ಶಾವಿಗೆಯನ್ನು ಹೊಸೆಯಿರಿ.',
            },
          },
          {
            n: 2,
            text: 'ಹೃದಯವೆಂಬೊ ಮಡಕೆಯಲಿ\nಭಾವವೆಂಬೊ ಎಸರಲಿ ।\nಬುದ್ಧಿಯಿಂದ ಪಾಕ ಮಾಡಿ\nಹರಿವಾಣಕೆ ಬಡಿಸಿಕೊಂಡು ॥',
            meaning: {
              en: 'In the pot of the heart, in the boiling water of devotion, cook it with understanding and serve it on the platter.',
              kn: 'ಹೃದಯವೆಂಬ ಮಡಕೆಯಲ್ಲಿ, ಭಕ್ತಿಭಾವವೆಂಬ ಕುದಿನೀರಿನಲ್ಲಿ, ಬುದ್ಧಿಯಿಂದ ಪಾಕ ಮಾಡಿ, ತಟ್ಟೆಗೆ ಬಡಿಸಿಕೊಳ್ಳಿರಿ.',
            },
          },
          {
            n: 3,
            text: 'ಆನಂದ ಆನಂದವೆಂಬೊ ತೇಗು\nಬಂದಿತು ಕಾಣಿರೊ ।\nಆನಂದಮೂರುತಿ ನಮ್ಮ\nಪುರಂದರವಿಠಲನ ನೆನೆಯಿರೊ ॥',
            meaning: {
              en: 'See, a contented belch of “bliss, bliss” has come! Remember our Purandara Viṭhala, the very form of bliss.',
              kn: 'ನೋಡಿರಿ, “ಆನಂದ, ಆನಂದ” ಎಂಬ ತೃಪ್ತಿಯ ತೇಗು ಬಂದಿತು! ಆನಂದಸ್ವರೂಪನಾದ ನಮ್ಮ ಪುರಂದರವಿಠಲನನ್ನು ನೆನೆಯಿರಿ.',
            },
          },
        ],
      },
  ],
};

export const dpBagilanuTeredu: Mantra = {
  id: 'dasara-pada-bagilanu-teredu',
  title: 'ಬಾಗಿಲನು ತೆರೆದು ಸೇವೆಯನು ಕೊಡೋ ಹರಿಯೇ',
  titleEn: 'Kanaka Dasa · Bagilanu Teredu Seveyanu Kodo Hariye',
  category: 'dasara-pada',
  order: 15,
  sourceScript: 'kannada',
  deity: 'Śrī Hari (Narahari)',
  source: 'Kanaka Dāsa',
  summary: 'Kanaka Dāsa’s plea at the closed door of the Uḍupi temple: “Open the door and let me serve you, Hari. You came at once when Gajendra, Prahlāda, Draupadī and Ajāmiḷa called; is there a right and wrong time for you?”',
  summaryKn: 'ಉಡುಪಿಯ ದೇವಾಲಯದ ಬಾಗಿಲ ಬಳಿ ಕನಕದಾಸರ ಮೊರೆ: “ಹರಿಯೇ, ಬಾಗಿಲು ತೆರೆದು ಸೇವೆ ಮಾಡಲು ಅವಕಾಶ ಕೊಡು. ಗಜೇಂದ್ರ, ಪ್ರಹ್ಲಾದ, ದ್ರೌಪದಿ, ಅಜಾಮಿಳರು ಕರೆದಾಗ ತಕ್ಷಣ ಬಂದೆಯಲ್ಲ; ನಿನಗೆ ಸಮಯ-ಅಸಮಯ ಉಂಟೇ?”',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಬಾಗಿಲನು ತೆರೆದು ಸೇವೆಯನು ಕೊಡೋ ಹರಿಯೇ ।\nಕೂಗಿದರೂ ಧ್ವನಿ ಕೇಳಲಿಲ್ಲವೇ ನರಹರಿಯೇ ॥',
            meaning: {
              en: 'Open the door, Hari, and grant me your service. I have called out; did you not hear my voice, Narahari?',
              kn: 'ಹರಿಯೇ, ಬಾಗಿಲು ತೆರೆದು ನಿನ್ನ ಸೇವೆಯ ಭಾಗ್ಯವನ್ನು ಕೊಡು. ನಾನು ಕೂಗಿದರೂ ನನ್ನ ಧ್ವನಿ ನಿನಗೆ ಕೇಳಿಸಲಿಲ್ಲವೇ ನರಹರಿಯೇ?',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಪರಮಪದದೊಳಗೆ ವಿಷಧರನ ತಲ್ಪದಲಿ ನೀ\nಸಿರಿಸಹಿತ ಕ್ಷೀರವಾರಿಧಿಯೊಳಿರಲು ।\nಕರಿರಾಜ ಕಷ್ಟದಲಿ ಆದಿಮೂಲಾ ಎಂದು\nಕರೆಯಲಾಕ್ಷಣ ಬಂದು ಒದಗಿದೆಯೋ ನರಹರಿಯೇ ॥',
            meaning: {
              en: 'While you lay with Śrī on the serpent bed in the Milk Ocean, in your supreme abode, the king of elephants cried “O primal Cause!” in his distress, and that very moment you came to his help, Narahari.',
              kn: 'ಪರಮಪದದಲ್ಲಿ, ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಶೇಷಶಯನದ ಮೇಲೆ ಲಕ್ಷ್ಮಿಯೊಡನೆ ನೀನಿರುವಾಗ, ಕಷ್ಟದಲ್ಲಿದ್ದ ಗಜೇಂದ್ರನು “ಆದಿಮೂಲಾ” ಎಂದು ಕರೆದ ಕ್ಷಣವೇ ಬಂದು ಒದಗಿದೆಯಲ್ಲವೇ ನರಹರಿಯೇ.',
            },
          },
          {
            n: 2,
            text: 'ಕಡು ಕೋಪದಲಿ ಖಳನು ಖಡುಗವನು ಹಿಡಿದು\nನಿನ್ನೊಡೆಯನೆಲ್ಲಿಹನು ಎಂದು ನುಡಿಯೇ ।\nದೃಢಭಕುತಿಯಲಿ ಶಿಶುವು ಬಿಡದೆ ನಿನ್ನನು ಭಜಿಸೆ\nಸಡಗರದಿ ಕಂಭದಿಂದೊಡೆದೆಯೋ ನರಹರಿಯೇ ॥',
            meaning: {
              en: 'When the wicked Hiraṇyakaśipu seized his sword in fury and asked, “Where is your master?”, and the child Prahlāda went on worshipping you with firm devotion, you burst forth eagerly from the pillar, Narahari.',
              kn: 'ದುಷ್ಟ ಹಿರಣ್ಯಕಶಿಪು ಕಡುಕೋಪದಿಂದ ಖಡ್ಗ ಹಿಡಿದು “ನಿನ್ನ ಒಡೆಯನೆಲ್ಲಿ?” ಎಂದು ಕೇಳಿದಾಗ, ಬಾಲಕ ಪ್ರಹ್ಲಾದನು ದೃಢಭಕ್ತಿಯಿಂದ ನಿನ್ನನ್ನು ಬಿಡದೆ ಭಜಿಸಲು, ಸಡಗರದಿಂದ ಕಂಬವನ್ನು ಸೀಳಿ ಪ್ರಕಟನಾದೆಯಲ್ಲವೇ ನರಹರಿಯೇ.',
            },
          },
          {
            n: 3,
            text: 'ಯಮಸುತನ ರಾಣಿಗಕ್ಷಯವಸನವನಿತ್ತೆ\nಸಮಯದಲಿ ಅಜಮಿಳನ ಪೊರೆದೆ ।\nಸಮಯಾಸಮಯವುಂಟೆ ಭಕ್ತವತ್ಸಲ ನಿನಗೆ\nಕಮಲಾಕ್ಷ ಕಾಗಿನೆಲೆಯಾದಿಕೇಶವನೆ ॥',
            meaning: {
              en: 'You gave unending cloth to Draupadī, queen of Yama’s son Yudhiṣṭhira; you saved Ajāmiḷa at the last moment. Is there any right or wrong time for you, lover of devotees, lotus-eyed Ādikeśava of Kāginele?',
              kn: 'ಯಮಧರ್ಮನ ಮಗ ಧರ್ಮರಾಯನ ರಾಣಿ ದ್ರೌಪದಿಗೆ ಅಕ್ಷಯವಸ್ತ್ರವನ್ನು ಕೊಟ್ಟೆ; ಅಂತ್ಯಕಾಲದಲ್ಲಿ ಅಜಾಮಿಳನನ್ನು ಕಾಪಾಡಿದೆ. ಭಕ್ತವತ್ಸಲನೇ, ಕಮಲಾಕ್ಷನೇ, ಕಾಗಿನೆಲೆಯ ಆದಿಕೇಶವನೇ, ನಿನಗೆ ಸಮಯ-ಅಸಮಯ ಎಂಬುದುಂಟೇ?',
            },
          },
        ],
      },
  ],
};

export const dpTallanisadiruKandya: Mantra = {
  id: 'dasara-pada-tallanisadiru-kandya',
  title: 'ತಲ್ಲಣಿಸದಿರು ಕಂಡ್ಯ ತಾಳು ಮನವೇ',
  titleEn: 'Kanaka Dasa · Tallanisadiru Kandya Talu Maname',
  category: 'dasara-pada',
  order: 16,
  sourceScript: 'kannada',
  deity: 'Śrī Hari',
  source: 'Kanaka Dāsa',
  summary: '“Do not panic, my mind; be patient. He looks after everyone.” Kanaka Dāsa points to the tree on a hilltop, the beasts of the forest and the frog in the rock, all fed by the Lord who made them.',
  summaryKn: '“ಮನವೇ, ತಲ್ಲಣಿಸಬೇಡ, ತಾಳ್ಮೆಯಿಂದಿರು; ಎಲ್ಲರನ್ನೂ ಅವನು ಸಲಹುತ್ತಾನೆ.” ಬೆಟ್ಟದ ತುದಿಯ ಮರ, ಕಾಡಿನ ಮೃಗಪಕ್ಷಿಗಳು, ಕಲ್ಲಿನೊಳಗಿನ ಕಪ್ಪೆ ಎಲ್ಲಕ್ಕೂ ಆಹಾರ ಕೊಡುವವನು ಸೃಷ್ಟಿಸಿದ ಸ್ವಾಮಿಯೇ ಎಂದು ಕನಕದಾಸರು ಧೈರ್ಯ ತುಂಬುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'SMS has a further caraṇa (ನವಿಲಿಗೆ ಚಿತ್ರ ಬರೆದವರು ಯಾರು …) that is missing from BJ; it is left out until a second copy is found.',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ತಲ್ಲಣಿಸದಿರು ಕಂಡ್ಯ ತಾಳು ಮನವೇ ।\nಎಲ್ಲರನು ಸಲಹುವನು ಇದಕೆ ಸಂಶಯವಿಲ್ಲ ॥',
            meaning: {
              en: 'Do not tremble, my mind; be patient. He protects everyone; of this there is no doubt.',
              kn: 'ಮನವೇ, ತಲ್ಲಣಿಸಬೇಡ, ತಾಳ್ಮೆಯಿಂದಿರು. ಅವನು ಎಲ್ಲರನ್ನೂ ಕಾಪಾಡುತ್ತಾನೆ; ಇದರಲ್ಲಿ ಸಂಶಯವೇ ಇಲ್ಲ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಬೆಟ್ಟದ ತುದಿಯಲ್ಲಿ ಹುಟ್ಟಿದ ವೃಕ್ಷಕ್ಕೆ\nಕಟ್ಟೆಯನು ಕಟ್ಟಿ ನೀರೆರೆದವರು ಯಾರೋ ।\nಹುಟ್ಟಿಸಿದ ಸ್ವಾಮಿ ತಾ ಹೊಣೆಗಾರನಾಗಿರಲು\nಗಟ್ಯಾಗಿ ಸಲಹುವನು ಇದಕೆ ಸಂಶಯವಿಲ್ಲ ॥',
            meaning: {
              en: 'Who built a basin and watered the tree that grew on the hilltop? The Lord who made it takes responsibility for it and looks after it firmly; there is no doubt of this.',
              kn: 'ಬೆಟ್ಟದ ತುದಿಯಲ್ಲಿ ಬೆಳೆದ ಮರಕ್ಕೆ ಪಾತಿ ಕಟ್ಟಿ ನೀರೆರೆದವರು ಯಾರು? ಅದನ್ನು ಹುಟ್ಟಿಸಿದ ಸ್ವಾಮಿಯೇ ಹೊಣೆಗಾರನಾಗಿದ್ದು ಗಟ್ಟಿಯಾಗಿ ಕಾಪಾಡುತ್ತಾನೆ; ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.',
            },
          },
          {
            n: 2,
            text: 'ಅಡವಿಯೊಳಗಾಡುವ ಮೃಗಪಕ್ಷಿಗಳಿಗೆಲ್ಲ\nಅಡಿಗಡಿಗೆ ಆಹಾರವಿತ್ತವರು ಯಾರೋ ।\nಪಡೆದ ಜನನಿಯ ತೆರದಿ ಸ್ವಾಮಿ ಹೊಣೆಗೀಡಾಗಿ\nಬಿಡದೆ ರಕ್ಷಿಪನು ಇದಕೆ ಸಂಶಯವಿಲ್ಲ ॥',
            meaning: {
              en: 'Who gives food at every step to the beasts and birds that roam the forest? Like the mother who bore them, the Lord takes charge of them and protects them unfailingly.',
              kn: 'ಕಾಡಿನಲ್ಲಿ ಓಡಾಡುವ ಮೃಗಪಕ್ಷಿಗಳಿಗೆಲ್ಲ ಹೆಜ್ಜೆಹೆಜ್ಜೆಗೂ ಆಹಾರ ಕೊಟ್ಟವರು ಯಾರು? ಹೆತ್ತ ತಾಯಿಯಂತೆ ಸ್ವಾಮಿಯೇ ಹೊಣೆ ಹೊತ್ತು ಬಿಡದೆ ಕಾಪಾಡುತ್ತಾನೆ.',
            },
          },
          {
            n: 3,
            text: 'ಕಲ್ಲಿನಲ್ಲಿ ಹುಟ್ಟಿ ಕೂಗುವ ಕಪ್ಪೆಗಳಿಗೆಲ್ಲ\nಅಲ್ಲಲ್ಲಿಗಾಹಾರವನು ತಂದಿತ್ತವರು ಯಾರೋ ।\nಬಲ್ಲಿದನು ಕಾಗಿನೆಲೆಯಾದಿಕೇಶವರಾಯ\nಎಲ್ಲರನು ಸಲಹುವನು ಇದಕೆ ಸಂಶಯವಿಲ್ಲ ॥',
            meaning: {
              en: 'Who brings food to the croaking frogs born inside the rock, each where it lives? The mighty Ādikeśava of Kāginele protects everyone; there is no doubt of this.',
              kn: 'ಕಲ್ಲಿನೊಳಗೆ ಹುಟ್ಟಿ ಕೂಗುವ ಕಪ್ಪೆಗಳಿಗೆ ಅವು ಇರುವಲ್ಲಿಗೇ ಆಹಾರ ತಂದುಕೊಟ್ಟವರು ಯಾರು? ಸಮರ್ಥನಾದ ಕಾಗಿನೆಲೆಯ ಆದಿಕೇಶವರಾಯನು ಎಲ್ಲರನ್ನೂ ಕಾಪಾಡುತ್ತಾನೆ; ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.',
            },
          },
        ],
      },
  ],
};

export const dpBhushanakeBhushana: Mantra = {
  id: 'dasara-pada-bhushanake-bhushana',
  title: 'ಭೂಷಣಕೆ ಭೂಷಣ ಇದು ಭೂಷಣ',
  titleEn: 'Sripadaraja · Bhushanake Bhushana Idu Bhushana',
  category: 'dasara-pada',
  order: 17,
  sourceScript: 'kannada',
  deity: 'Śrī Veṅkaṭeśa',
  source: 'Śrī Śrīpādarāja',
  summary: 'Śrīpādarāja lists the true ornaments: the name of Nārāyaṇa for the tongue, pilgrimage for the feet, giving for the hands, knowledge for sages, the sight of Raṅga for the eyes, and above all the name of Raṅgaviṭhala.',
  summaryKn: 'ನಾಲಿಗೆಗೆ ನಾರಾಯಣನಾಮ, ಕಾಲಿಗೆ ಹರಿಯಾತ್ರೆ, ಕೈಗಳಿಗೆ ದಾನ, ಮುನಿಗಳಿಗೆ ಜ್ಞಾನ, ಕಣ್ಣುಗಳಿಗೆ ರಂಗನ ದರ್ಶನ, ಎಲ್ಲಕ್ಕಿಂತ ಮಿಗಿಲಾಗಿ ರಂಗವಿಠಲನ ನಾಮ: ಇವೇ ನಿಜವಾದ ಆಭರಣಗಳು ಎಂದು ಶ್ರೀಪಾದರಾಜರು ಸಾರುವ ಕೀರ್ತನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಭೂಷಣಕೆ ಭೂಷಣ ಇದು ಭೂಷಣ ।\nಶೇಷಗಿರಿವಾಸ ಶ್ರೀವರವೇಂಕಟೇಶ ॥',
            meaning: {
              en: 'This is the ornament of ornaments, O Veṅkaṭeśa, Lord of Śrī, who dwell on the Śeṣa hill.',
              kn: 'ಶೇಷಾಚಲವಾಸನಾದ ಶ್ರೀಪತಿ ವೇಂಕಟೇಶನೇ, ಆಭರಣಗಳಿಗೂ ಆಭರಣ ಇದು.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ನಾಲಿಗೆಗೆ ಭೂಷಣ ನಾರಾಯಣ ನಾಮ\nಕಾಲಿಗೆ ಭೂಷಣ ಹರಿಯಾತ್ರೆಯು ।\nಆಲಯಕೆ ಭೂಷಣ ತುಳಸಿ ವೃಂದಾವನ\nವಿಶಾಲ ಕರ್ಣಕೆ ಭೂಷಣ ವಿಷ್ಣುಕಥೆಯು ॥',
            meaning: {
              en: 'The ornament of the tongue is the name of Nārāyaṇa; of the feet, pilgrimage to Hari; of a house, the tulasī shrine; of the ears, the stories of Viṣṇu.',
              kn: 'ನಾಲಿಗೆಗೆ ಆಭರಣ ನಾರಾಯಣನ ನಾಮ; ಕಾಲಿಗೆ ಹರಿಯ ಕ್ಷೇತ್ರಯಾತ್ರೆ; ಮನೆಗೆ ತುಳಸಿ ವೃಂದಾವನ; ಕಿವಿಗಳಿಗೆ ವಿಷ್ಣುವಿನ ಕಥೆ.',
            },
          },
          {
            n: 2,
            text: 'ದಾನವೇ ಭೂಷಣ ಎರಡು ಹಸ್ತಂಗಳಿಗೆ\nಮಾನವೇ ಭೂಷಣ ಮಾನವರಿಗೆ ।\nಜ್ಞಾನವೇ ಭೂಷಣ ಮುನಿಯೋಗಿವರರಿಗೆ\nಮಾನಿನಿಗೆ ಭೂಷಣ ಪತಿಭಕ್ತಿಯು ॥',
            meaning: {
              en: 'Giving is the ornament of the two hands; honour is the ornament of men; knowledge, of sages and yogis; devotion to her husband, of a woman.',
              kn: 'ಎರಡು ಕೈಗಳಿಗೆ ದಾನವೇ ಆಭರಣ; ಮನುಷ್ಯರಿಗೆ ಮಾನವೇ ಆಭರಣ; ಮುನಿಗಳಿಗೂ ಯೋಗಿಗಳಿಗೂ ಜ್ಞಾನವೇ ಆಭರಣ; ಸತಿಗೆ ಪತಿಭಕ್ತಿಯೇ ಆಭರಣ.',
            },
          },
          {
            n: 3,
            text: 'ರಂಗನ್ನ ನೋಡುವುದೆ ಕಂಗಳಿಗೆ ಭೂಷಣ\nಮಂಗಳಾಂಗಗೆ ಮಣಿವ ಶಿರ ಭೂಷಣ ।\nಶೃಂಗಾರ ತುಳಸಿಮಣಿ ಕೊರಳಿಗೆ ಭೂಷಣ\nರಂಗವಿಠಲನ ನಾಮ ಅತಿ ಭೂಷಣ ॥',
            meaning: {
              en: 'To see Raṅga is the ornament of the eyes; a head that bows to the auspicious Lord is itself an ornament; tulasī beads adorn the neck; and the name of Raṅgaviṭhala is the highest ornament of all.',
              kn: 'ರಂಗನನ್ನು ನೋಡುವುದೇ ಕಣ್ಣುಗಳಿಗೆ ಆಭರಣ; ಮಂಗಳಸ್ವರೂಪನಿಗೆ ನಮಿಸುವ ತಲೆಯೇ ಆಭರಣ; ತುಳಸಿಮಣಿಯ ಮಾಲೆ ಕೊರಳಿಗೆ ಆಭರಣ; ರಂಗವಿಠಲನ ನಾಮವೇ ಎಲ್ಲಕ್ಕಿಂತ ಶ್ರೇಷ್ಠ ಆಭರಣ.',
            },
          },
        ],
      },
  ],
};

export const dpKrishnaNiBeganeBaro: Mantra = {
  id: 'dasara-pada-krishna-ni-begane-baro',
  title: 'ಕೃಷ್ಣಾ ನೀ ಬೇಗನೆ ಬಾರೋ',
  titleEn: 'Vyasaraja · Krishna Ni Begane Baro',
  category: 'dasara-pada',
  order: 18,
  sourceScript: 'kannada',
  deity: 'Śrī Kṛṣṇa of Uḍupi',
  source: 'Śrī Vyāsarāja Tīrtha',
  summary: 'Vyāsarāja’s call to the child Kṛṣṇa of Uḍupi to come quickly and show his face, dancing in anklets, with the Vaijayantī garland, yellow silk, flute and sandal paste.',
  summaryKn: 'ಗೆಜ್ಜೆ ಕಟ್ಟಿ ನಾಟ್ಯವಾಡುತ್ತ, ವೈಜಯಂತಿಮಾಲೆ, ಪೀತಾಂಬರ, ಕೊಳಲು, ಶ್ರೀಗಂಧಗಳೊಂದಿಗೆ ಬೇಗ ಬಂದು ಮುಖ ತೋರು ಎಂದು ಉಡುಪಿಯ ಬಾಲಕೃಷ್ಣನನ್ನು ವ್ಯಾಸರಾಜರು ಕರೆಯುವ ಕೀರ್ತನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಕೃಷ್ಣಾ ನೀ ಬೇಗನೆ ಬಾರೋ ॥',
            meaning: {
              en: 'Kṛṣṇa, come quickly.',
              kn: 'ಕೃಷ್ಣಾ, ನೀನು ಬೇಗನೆ ಬಾ.',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ಬೇಗನೆ ಬಾರೋ ಮುಖವನ್ನು ತೋರೋ ॥',
            meaning: {
              en: 'Come quickly and show me your face.',
              kn: 'ಬೇಗನೆ ಬಂದು ನಿನ್ನ ಮುಖವನ್ನು ತೋರಿಸು.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ಕಾಲಾಲಂದುಗೆ ಗೆಜ್ಜೆ ನೀಲದ ಬಾವುಲಿ ।\nನೀಲವರ್ಣನೆ ನಾಟ್ಯವಾಡುತ ಬಾರೋ ॥',
            meaning: {
              en: 'With anklets and bells on your feet and sapphire studs in your ears, come dancing, dark-blue one.',
              kn: 'ಕಾಲಿಗೆ ಅಂದುಗೆ-ಗೆಜ್ಜೆ, ಕಿವಿಗೆ ನೀಲಮಣಿಯ ಬಾವುಲಿ ತೊಟ್ಟು, ನೀಲವರ್ಣನೇ, ನಾಟ್ಯವಾಡುತ್ತ ಬಾ.',
            },
          },
          {
            n: 2,
            text: 'ಉಡಿಯಲ್ಲಿ ಉಡುಗೆಜ್ಜೆ ಬೆರಳಲ್ಲಿ ಉಂಗುರ ।\nಕೊರಳಲ್ಲಿ ಹಾಕಿದ ವೈಜಯಂತಿಮಾಲೆ ॥',
            meaning: {
              en: 'With a belt of bells at your waist, rings on your fingers and the Vaijayantī garland round your neck.',
              kn: 'ಸೊಂಟದಲ್ಲಿ ಗೆಜ್ಜೆಯ ಉಡುದಾರ, ಬೆರಳುಗಳಲ್ಲಿ ಉಂಗುರ, ಕೊರಳಲ್ಲಿ ವೈಜಯಂತಿಮಾಲೆ ಧರಿಸಿ ಬಾ.',
            },
          },
          {
            n: 3,
            text: 'ಕಾಶಿ ಪೀತಾಂಬರ ಕೈಯಲ್ಲಿ ಕೊಳಲು ।\nಪೂಸಿದ ಶ್ರೀಗಂಧ ಮೈಯೊಳು ಗಮ್ಮ ॥',
            meaning: {
              en: 'Wearing yellow silk of Kāśī, a flute in your hand, your body fragrant with the sandal paste smeared on it.',
              kn: 'ಕಾಶಿಯ ಪೀತಾಂಬರ ಉಟ್ಟು, ಕೈಯಲ್ಲಿ ಕೊಳಲು ಹಿಡಿದು, ಮೈಗೆ ಹಚ್ಚಿದ ಶ್ರೀಗಂಧದ ಪರಿಮಳದೊಂದಿಗೆ ಬಾ.',
            },
          },
          {
            n: 4,
            text: 'ತಾಯಿಗೆ ಬಾಯಲ್ಲಿ ಜಗವನ್ನು ತೋರಿದ ।\nಜಗದೋದ್ಧಾರಕ ನಮ್ಮ ಉಡುಪಿ ಶ್ರೀಕೃಷ್ಣ ॥',
            meaning: {
              en: 'You who showed your mother the whole world in your mouth, uplifter of the world, our Śrī Kṛṣṇa of Uḍupi.',
              kn: 'ತಾಯಿ ಯಶೋದೆಗೆ ತನ್ನ ಬಾಯಲ್ಲಿ ಜಗತ್ತನ್ನೇ ತೋರಿಸಿದ, ಜಗದೋದ್ಧಾರಕನಾದ ನಮ್ಮ ಉಡುಪಿಯ ಶ್ರೀಕೃಷ್ಣನೇ, ಬಾ.',
            },
          },
        ],
      },
  ],
};

export const dpInduEnageGovinda: Mantra = {
  id: 'dasara-pada-indu-enage-govinda',
  title: 'ಇಂದು ಎನಗೆ ಗೋವಿಂದ ನಿನ್ನ',
  titleEn: 'Raghavendra Tirtha · Indu Enage Govinda',
  category: 'dasara-pada',
  order: 19,
  sourceScript: 'kannada',
  deity: 'Śrī Kṛṣṇa (Veṇugopāla)',
  source: 'Śrī Rāghavendra Tīrtha',
  summary: 'Śrī Rāghavendra Tīrtha’s best-known Kannada song (ankita Veṇugopāla), a prayer of complete surrender: “Today, Govinda, show me your lotus feet; I have wandered lost in saṃsāra, count not my faults, carry me across.”',
  summaryKn: 'ಶ್ರೀರಾಘವೇಂದ್ರತೀರ್ಥರ (ಅಂಕಿತ ವೇಣುಗೋಪಾಲ) ಪ್ರಸಿದ್ಧ ಕೀರ್ತನೆ; ಸಂಪೂರ್ಣ ಶರಣಾಗತಿಯ ಪ್ರಾರ್ಥನೆ: “ಗೋವಿಂದನೇ, ಇಂದು ನಿನ್ನ ಪಾದಾರವಿಂದವನ್ನು ತೋರು; ಸಂಸಾರದಲ್ಲಿ ದಾರಿತಪ್ಪಿದ ನನ್ನ ದೋಷಗಳನ್ನು ಎಣಿಸದೆ ಪಾರುಮಾಡು.”',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
      {
        title: 'ಪಲ್ಲವಿ',
        titleEn: 'Pallavi',
        verses: [
          {
            text: 'ಇಂದು ಎನಗೆ ಗೋವಿಂದ ನಿನ್ನ ।\nಪಾದಾರವಿಂದವ ತೋರೋ ಮುಕುಂದನೆ ॥',
            meaning: {
              en: 'Today, Govinda, Mukunda, show me your lotus feet.',
              kn: 'ಗೋವಿಂದನೇ, ಮುಕುಂದನೇ, ಇಂದು ನನಗೆ ನಿನ್ನ ಪಾದಕಮಲಗಳನ್ನು ತೋರಿಸು.',
            },
          },
        ],
      },
      {
        title: 'ಅನುಪಲ್ಲವಿ',
        titleEn: 'Anupallavi',
        verses: [
          {
            text: 'ಸುಂದರವದನನೆ ನಂದಗೋಪನ ಕಂದ ।\nಇಂದಿರಾರಮಣ ॥',
            meaning: {
              en: 'O lovely-faced one, son of Nandagopa, beloved of Indirā.',
              kn: 'ಸುಂದರ ಮುಖದವನೇ, ನಂದಗೋಪನ ಮಗನೇ, ಲಕ್ಷ್ಮೀರಮಣನೇ.',
            },
          },
        ],
      },
      {
        title: 'ಚರಣಗಳು',
        titleEn: 'Caraṇas',
        verses: [
          {
            n: 1,
            text: 'ನೊಂದೆನಯ್ಯ ಭವಬಂಧನದೊಳು ಸಿಲುಕಿ\nಮುಂದೆ ದಾರಿ ಕಾಣದೆ ಕುಂದಿದೆ ಜಗದೊಳು ।\nಕಂದನಂತೆಂದೆನ್ನ ಕುಂದುಗಳೆಣಿಸದೆ\nತಂದೆ ಕಾಯೋ ಕೃಷ್ಣ ಕಂದರ್ಪಜನಕನೆ ॥',
            meaning: {
              en: 'Caught in the bonds of saṃsāra I have suffered; seeing no way ahead I have wasted away in this world. Think of me as your child, do not count my faults, and protect me, Father Kṛṣṇa, father of Kāma.',
              kn: 'ಸಂಸಾರಬಂಧನದಲ್ಲಿ ಸಿಲುಕಿ ನೊಂದಿದ್ದೇನೆ; ಮುಂದೆ ದಾರಿ ಕಾಣದೆ ಈ ಜಗತ್ತಿನಲ್ಲಿ ಕುಗ್ಗಿಹೋಗಿದ್ದೇನೆ. ನನ್ನನ್ನು ನಿನ್ನ ಮಗುವೆಂದು ಭಾವಿಸಿ, ನನ್ನ ದೋಷಗಳನ್ನು ಎಣಿಸದೆ, ತಂದೆಯೇ, ಮನ್ಮಥಜನಕನಾದ ಕೃಷ್ಣನೇ, ಕಾಪಾಡು.',
            },
          },
          {
            n: 2,
            text: 'ಮೂಢತನದಿ ಬಹು ಹೇಡಿಜೀವ ನಾನಾಗಿ\nದೃಢಭಕುತಿಯನು ಮಾಡಲಿಲ್ಲವೊ ಹರಿಯೆ ।\nನೋಡಲಿಲ್ಲವೊ ನಿನ್ನ ಪಾಡಲಿಲ್ಲವೊ ಮಹಿಮೆ\nಗಾಡಿಕಾರ ಕೃಷ್ಣ ಬೇಡಿಕೊಂಬೆನೊ ನಿನ್ನ ॥',
            meaning: {
              en: 'In my folly I became a great coward and never practised firm devotion, Hari. I did not look upon you, I did not sing your glory. Charming Kṛṣṇa, I beg you.',
              kn: 'ಮೂರ್ಖತನದಿಂದ ಬಹಳ ಹೇಡಿಯಾದ ಜೀವವಾಗಿ, ಹರಿಯೇ, ನಾನು ದೃಢಭಕ್ತಿಯನ್ನು ಮಾಡಲಿಲ್ಲ. ನಿನ್ನನ್ನು ನೋಡಲಿಲ್ಲ, ನಿನ್ನ ಮಹಿಮೆಯನ್ನು ಹಾಡಲಿಲ್ಲ. ಮನೋಹರನಾದ ಕೃಷ್ಣನೇ, ನಿನ್ನನ್ನು ಬೇಡಿಕೊಳ್ಳುತ್ತೇನೆ.',
            },
          },
          {
            n: 3,
            text: 'ಧಾರುಣಿಯೊಳು ಭೂಭಾರಜೀವ ನಾನಾಗಿ\nದಾರಿತಪ್ಪಿ ನಡೆದೆ ಸೇರಿದೆ ಕುಜನರ ।\nಆರೂ ಕಾಯುವರಿಲ್ಲ ಸೇರಿದೆ ನಿನಗಯ್ಯ\nಧೀರ ವೇಣುಗೋಪಾಲ ಪಾರುಗಾಣಿಸೊ ಹರಿಯೆ ॥',
            meaning: {
              en: 'I have lived on earth as a burden to it; I strayed from the path and kept bad company. No one else can save me, so I have come to you. Valiant Veṇugopāla, Hari, carry me across.',
              kn: 'ಭೂಮಿಗೆ ಭಾರವಾದ ಜೀವವಾಗಿ ಬದುಕಿದೆ; ದಾರಿತಪ್ಪಿ ನಡೆದು ದುರ್ಜನರ ಸಂಗ ಸೇರಿದೆ. ಕಾಪಾಡುವವರು ಬೇರೆ ಯಾರೂ ಇಲ್ಲ, ನಿನ್ನನ್ನೇ ಸೇರಿದ್ದೇನೆ. ಧೀರನಾದ ವೇಣುಗೋಪಾಲನೇ, ಹರಿಯೇ, ನನ್ನನ್ನು ಪಾರುಮಾಡು.',
            },
          },
        ],
      },
  ],
};
