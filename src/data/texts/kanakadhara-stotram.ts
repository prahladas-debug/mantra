/**
 * Kanakadhārā Stotram, attributed to Śrī Śaṅkarācārya: the commonly recited
 * 22-verse text (21 + phala-śruti).
 *
 * Sources (collated with scripts/collate.ts, Nov 2026):
 * - Base: stotrasamhita/stotra-sangrahah, KanakadharaStavam.tex (typed).
 * - sa.wikisource.org, कनकधारास्तोत्रम् (via the con-jo-ry/ilx_skt mirror).
 * - eBharati-sampat, कनकधारास्तोत्रम् (sanskrit/raw_etexts): the shorter
 *   18-verse text, without verses 13–15 and 21.
 * - kumarkalpat/sacreadocs JSON (careless copy; order check only).
 * Metres: vasantatilakā; 12–15 upendravajrā; 17 rathoddhatā; 18 puṣpitāgrā;
 * 20 aupacchandasika; 22 rucirā. All pādas scan.
 *
 * Resolved: verse order follows Wikisource and most copies (देवि प्रसीद as 21,
 * before the phala-śruti; the base places it last). 7 पदवीभ्रम → पदविभ्रम
 * (all witnesses); 19 जलाप्लुताङ्गीम् → जलप्लुताङ्गीम् (Wikisource, eBharati);
 * 22 स्तुतिभिरमीभिः → अमूभिः (feminine, agreeing with स्तुतिभिः; all witnesses).
 * Kept the base: 5 तडिद् (eBharati तटिद्); 9 घर्मम् (Wikisource धर्मम्, a slip);
 * 12 दुग्धोदधिजन्मभूम्यै (2:2 against °भूत्यै); 16 दुरिताहरणोद्यतानि (with
 * eBharati; Wikisource दुरितोद्धरण°). The later couplet सुवर्णधारा स्तोत्रं… is
 * not included.
 */
import type { Mantra } from '../types';

export const kanakadharaStotram: Mantra = {
  id: 'kanakadhara-stotram',
  title: 'कनकधारास्तोत्रम्',
  titleEn: 'Kanakadhara Stotram',
  category: 'stotra',
  deity: 'Śrī Mahālakṣmī',
  source: 'Attributed to Śrī Śaṅkarācārya',
  summary: 'The “stream of gold” hymn to Mahālakṣmī. Tradition holds that the young Śaṅkara, given a single dried gooseberry by a poor Brahmin woman, sang it on her behalf and Lakṣmī answered with a shower of golden fruit. It prays for the merciful glance of the Goddess, who rests on Viṣṇu’s heart.',
  summaryKn: 'ಮಹಾಲಕ್ಷ್ಮಿಯನ್ನು ಕುರಿತ “ಚಿನ್ನದ ಧಾರೆ”ಯ ಸ್ತೋತ್ರ. ಬಡ ಬ್ರಾಹ್ಮಣ ಮಹಿಳೆಯೊಬ್ಬಳು ತನ್ನಲ್ಲಿದ್ದ ಒಂದೇ ಒಣ ನೆಲ್ಲಿಕಾಯಿಯನ್ನು ಭಿಕ್ಷೆಯಾಗಿ ಕೊಟ್ಟಾಗ, ಬಾಲಕ ಶಂಕರರು ಆಕೆಗಾಗಿ ಇದನ್ನು ಹಾಡಿದರು, ಲಕ್ಷ್ಮೀದೇವಿ ಚಿನ್ನದ ನೆಲ್ಲಿಕಾಯಿಗಳ ಮಳೆ ಸುರಿಸಿದಳು ಎಂದು ಪ್ರತೀತಿ. ಶ್ರೀಹರಿಯ ವಕ್ಷಸ್ಥಳದಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವಿಯ ಕರುಣಾಕಟಾಕ್ಷವನ್ನು ಬೇಡುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote: 'Follows the commonly recited 22-verse text. The shorter text printed in some editions omits verses 13–15 and 21.',
  sections: [
    {
      title: 'स्तोत्रम्',
      titleEn: 'Stotram',
      verses: [
        {
          n: 1,
          text: 'अङ्गं हरेः पुलकभूषणमाश्रयन्ती\nभृङ्गाङ्गनेव मुकुलाभरणं तमालम् ।\nअङ्गीकृताखिलविभूतिरपाङ्गलीला\nमाङ्गल्यदास्तु मम मङ्गलदेवतायाः ॥',
          meaning: {
            en: 'As a female bee settles on the tamāla tree adorned with buds, the playful side-glance of Lakṣmī rests on Hari, whose body is adorned with the thrill of joy. May that glance of the goddess of auspiciousness, which holds all prosperity, bring auspiciousness to me.',
            kn: 'ಮೊಗ್ಗುಗಳಿಂದ ಅಲಂಕೃತವಾದ ತಮಾಲವೃಕ್ಷವನ್ನು ಹೆಣ್ಣುದುಂಬಿ ಆಶ್ರಯಿಸುವಂತೆ, ರೋಮಾಂಚನವೆಂಬ ಆಭರಣವುಳ್ಳ ಶ್ರೀಹರಿಯ ದೇಹವನ್ನು ಆಶ್ರಯಿಸಿರುವ, ಸಕಲ ಐಶ್ವರ್ಯವನ್ನೂ ತನ್ನದಾಗಿಸಿಕೊಂಡಿರುವ ಮಂಗಳದೇವತೆಯಾದ ಲಕ್ಷ್ಮಿಯ ಕಡೆಗಣ್ಣ ನೋಟದ ಲೀಲೆಯು ನನಗೆ ಮಂಗಳವನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          n: 2,
          text: 'मुग्धा मुहुर्विदधती वदने मुरारेः\nप्रेमत्रपाप्रणिहितानि गतागतानि ।\nमाला दृशोर्मधुकरीव महोत्पले या\nसा मे श्रियं दिशतु सागरसम्भवायाः ॥',
          meaning: {
            en: 'Like a bee hovering round a great blue lotus, the garland of her innocent glances goes again and again to the face of Murāri and turns away, drawn by love and held back by shyness. May the glance of the ocean-born goddess grant me prosperity.',
            kn: 'ದೊಡ್ಡ ನೀಲಕಮಲದ ಸುತ್ತ ಸುಳಿಯುವ ದುಂಬಿಯಂತೆ, ಪ್ರೇಮದಿಂದ ಸೆಳೆಯಲ್ಪಟ್ಟು ನಾಚಿಕೆಯಿಂದ ಹಿಂದೆಸರಿಯುತ್ತಾ ಮುರಾರಿಯ ಮುಖದತ್ತ ಮತ್ತೆ ಮತ್ತೆ ಹೋಗಿ ಬರುವ ಸಾಗರಸಂಭವೆಯಾದ ಲಕ್ಷ್ಮಿಯ ಮುಗ್ಧ ದೃಷ್ಟಿಮಾಲೆಯು ನನಗೆ ಐಶ್ವರ್ಯವನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          n: 3,
          text: 'आमीलिताक्षमधिगम्य मुदा मुकुन्दम्\nआनन्दकन्दमनिमेषमनङ्गतन्त्रम् ।\nआकेकरस्थितकनीनिकपक्ष्मनेत्रं\nभूत्यै भवेन्मम भुजङ्गशयाङ्गनायाः ॥',
          meaning: {
            en: 'Her eye, its pupil and lashes turned in a sidelong look, gazes unblinking with joy on Mukunda, the root of bliss, whose own eyes are half-closed, lost in love. May that eye of the consort of the Lord who rests on the serpent bring me prosperity.',
            kn: 'ಆನಂದದಿಂದ ಅರೆಮುಚ್ಚಿದ ಕಣ್ಣುಗಳುಳ್ಳ, ಆನಂದದ ಮೂಲನಾದ, ಪ್ರೇಮಪರವಶನಾದ ಮುಕುಂದನನ್ನು ಸಂತೋಷದಿಂದ ರೆಪ್ಪೆ ಮಿಟುಕಿಸದೆ ನೋಡುವ, ಕಡೆಗಣ್ಣಿನತ್ತ ತಿರುಗಿದ ಕಣ್ಣುಗೊಂಬೆ ಮತ್ತು ರೆಪ್ಪೆಗಳುಳ್ಳ ಶೇಷಶಾಯಿಯ ಪತ್ನಿಯ ಕಣ್ಣು ನನಗೆ ಐಶ್ವರ್ಯವನ್ನು ತರಲಿ.',
          },
        },
        {
          n: 4,
          text: 'बाह्वन्तरे मधुजितः श्रितकौस्तुभे या\nहारावलीव हरिनीलमयी विभाति ।\nकामप्रदा भगवतोऽपि कटाक्षमाला\nकल्याणमावहतु मे कमलालयायाः ॥',
          meaning: {
            en: 'On the chest of the slayer of Madhu, where the Kaustubha gem rests, her garland of glances shines like a necklace of sapphires and fulfils the wishes even of the Lord. May the glance of the lotus-dwelling goddess bring me well-being.',
            kn: 'ಕೌಸ್ತುಭಮಣಿಯಿರುವ ಮಧುಸೂದನನ ವಕ್ಷಸ್ಥಳದಲ್ಲಿ ಇಂದ್ರನೀಲಮಣಿಗಳ ಹಾರದಂತೆ ಹೊಳೆಯುವ, ಭಗವಂತನ ಬಯಕೆಗಳನ್ನೂ ಪೂರೈಸುವ ಕಮಲಾಲಯೆಯ ಕಟಾಕ್ಷಮಾಲೆಯು ನನಗೆ ಕಲ್ಯಾಣವನ್ನು ತರಲಿ.',
          },
        },
        {
          n: 5,
          text: 'कालाम्बुदालिललितोरसि कैटभारेः\nधाराधरे स्फुरति या तडिदङ्गनेव ।\nमातुः समस्तजगतां महनीयमूर्तिः\nभद्राणि मे दिशतु भार्गवनन्दनायाः ॥',
          meaning: {
            en: 'On the chest of Kaiṭabha’s foe, lovely as a bank of dark rain-clouds, she shines like lightning flashing in a cloud. May the daughter of Bhṛgu, Mother of all the worlds, whose form is worthy of worship, grant me good fortune.',
            kn: 'ಕಪ್ಪು ಮೋಡಗಳ ಸಾಲಿನಂತೆ ಸುಂದರವಾದ ಕೈಟಭಾರಿಯ ವಕ್ಷಸ್ಥಳದಲ್ಲಿ ಮೋಡದಲ್ಲಿ ಮಿಂಚಿನಂತೆ ಹೊಳೆಯುವ, ಸಕಲ ಜಗತ್ತಿಗೂ ತಾಯಿಯಾದ, ಪೂಜನೀಯ ರೂಪವುಳ್ಳ ಭಾರ್ಗವಿಯು (ಭೃಗುಮಹರ್ಷಿಯ ಮಗಳು) ನನಗೆ ಶುಭಗಳನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          n: 6,
          text: 'प्राप्तं पदं प्रथमतः खलु यत्प्रभावात्\nमाङ्गल्यभाजि मधुमाथिनि मन्मथेन ।\nमय्यापतेत्तदिह मन्थरमीक्षणार्धं\nमन्दालसं च मकरालयकन्यकायाः ॥',
          meaning: {
            en: 'By the power of her glance, Kāma first found a place in Madhu’s slayer, the abode of all good. May that slow, languid half-glance of the daughter of the ocean fall upon me here.',
            kn: 'ಯಾರ ನೋಟದ ಪ್ರಭಾವದಿಂದ ಮನ್ಮಥನು ಮಂಗಳಮಯನಾದ ಮಧುಸೂದನನಲ್ಲಿ ಮೊದಲ ಬಾರಿಗೆ ನೆಲೆ ಪಡೆದನೋ, ಆ ಸಾಗರಕನ್ಯೆಯ ಮಂದವಾದ, ಆಲಸ್ಯಪೂರ್ಣವಾದ ಅರೆನೋಟವು ಇಲ್ಲಿ ನನ್ನ ಮೇಲೆ ಬೀಳಲಿ.',
          },
        },
        {
          n: 7,
          text: 'विश्वामरेन्द्रपदविभ्रमदानदक्षम्\nआनन्दहेतुरधिकं मुरविद्विषोऽपि ।\nईषन्निषीदतु मयि क्षणमीक्षणार्धम्\nइन्दीवरोदरसहोदरमिन्दिरायाः ॥',
          meaning: {
            en: 'Indirā’s half-glance, like the inside of a blue lotus, can bestow the splendour of Indra’s throne over all the gods and gives joy beyond measure even to Mura’s foe. May it rest on me, if only a little, for a moment.',
            kn: 'ಎಲ್ಲ ದೇವತೆಗಳ ಒಡೆಯನಾದ ಇಂದ್ರನ ಪದವಿಯ ವೈಭವವನ್ನು ಕೊಡಲು ಸಮರ್ಥವಾದ, ಮುರಾರಿಗೂ ಅಧಿಕ ಆನಂದಕ್ಕೆ ಕಾರಣವಾದ, ನೀಲಕಮಲದ ಒಳಭಾಗಕ್ಕೆ ಸಮಾನವಾದ ಇಂದಿರೆಯ ಅರೆನೋಟವು ಕ್ಷಣಕಾಲವಾದರೂ ಸ್ವಲ್ಪ ನನ್ನ ಮೇಲೆ ನೆಲೆಸಲಿ.',
          },
        },
        {
          n: 8,
          text: 'इष्टा विशिष्टमतयोऽपि यया दयार्द्र-\nदृष्ट्या त्रिविष्टपपदं सुलभं लभन्ते ।\nदृष्टिः प्रहृष्टकमलोदरदीप्तिरिष्टां\nपुष्टिं कृषीष्ट मम पुष्करविष्टरायाः ॥',
          meaning: {
            en: 'By her glance, moist with compassion, those dear to her, even the wise, easily reach the realm of heaven. May the glance of the lotus-seated goddess, bright as the heart of a blooming lotus, grant me the abundance I long for.',
            kn: 'ಯಾರ ದಯಾರ್ದ್ರ ದೃಷ್ಟಿಯಿಂದ ಆಕೆಗೆ ಪ್ರಿಯರಾದ ವಿಶಿಷ್ಟ ಬುದ್ಧಿಯುಳ್ಳವರೂ ಸ್ವರ್ಗಪದವಿಯನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯುವರೋ, ಅರಳಿದ ಕಮಲದ ಒಳಭಾಗದಂತೆ ಹೊಳೆಯುವ ಆ ಪದ್ಮಾಸನೆಯ ದೃಷ್ಟಿಯು ನಾನು ಬಯಸುವ ಸಮೃದ್ಧಿಯನ್ನು ಕೊಡಲಿ.',
          },
        },
        {
          n: 9,
          text: 'दद्याद् दयानुपवनो द्रविणाम्बुधाराम्\nअस्मिन्नकिञ्चनविहङ्गशिशौ विषण्णे ।\nदुष्कर्मघर्ममपनीय चिराय दूरं\nनारायणप्रणयिनीनयनाम्बुवाहः ॥',
          meaning: {
            en: 'May the rain-cloud of the eyes of Nārāyaṇa’s beloved, driven by the wind of compassion, drive the summer heat of my misdeeds far away for good, and pour a stream of wealth on me, a helpless young bird in distress.',
            kn: 'ದಯೆಯೆಂಬ ಗಾಳಿಯಿಂದ ಪ್ರೇರಿತವಾದ ನಾರಾಯಣಪ್ರಿಯೆಯ ಕಣ್ಣುಗಳೆಂಬ ಮೋಡವು, ನನ್ನ ದುಷ್ಕರ್ಮಗಳೆಂಬ ಬೇಸಿಗೆಯ ಬಿಸಿಲನ್ನು ಶಾಶ್ವತವಾಗಿ ದೂರಮಾಡಿ, ದುಃಖಿತನಾದ ಬಡ ಮರಿಹಕ್ಕಿಯಂತಿರುವ ನನ್ನ ಮೇಲೆ ಸಂಪತ್ತಿನ ಜಲಧಾರೆಯನ್ನು ಸುರಿಸಲಿ.',
          },
        },
        {
          n: 10,
          text: 'गीर्देवतेति गरुडध्वजसुन्दरीति\nशाकम्भरीति शशिशेखरवल्लभेति ।\nसृष्टिस्थितिप्रलयकेलिषु संस्थितायै\nतस्यै नमस्त्रिभुवनैकगुरोस्तरुण्यै ॥',
          meaning: {
            en: 'Salutations to her, the young consort of the one Teacher of the three worlds, who abides in the play of creation, preservation and dissolution, and is hailed as the goddess of speech, as the beauty of the Garuḍa-bannered Lord, as Śākambharī and as the beloved of the moon-crested Śiva.',
            kn: 'ವಾಗ್ದೇವಿ ಎಂದೂ, ಗರುಡಧ್ವಜನ ಸುಂದರಿ ಎಂದೂ, ಶಾಕಂಭರಿ ಎಂದೂ, ಚಂದ್ರಶೇಖರನ ಪ್ರಿಯೆ ಎಂದೂ ಕರೆಯಲ್ಪಡುವ, ಸೃಷ್ಟಿ, ಸ್ಥಿತಿ, ಲಯಗಳೆಂಬ ಲೀಲೆಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ, ಮೂರು ಲೋಕಗಳ ಏಕೈಕ ಗುರುವಿನ ತರುಣಿ ಪತ್ನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 11,
          text: 'श्रुत्यै नमोऽस्तु शुभकर्मफलप्रसूत्यै\nरत्यै नमोऽस्तु रमणीयगुणार्णवायै ।\nशक्त्यै नमोऽस्तु शतपत्रनिकेतनायै\nपुष्ट्यै नमोऽस्तु पुरुषोत्तमवल्लभायै ॥',
          meaning: {
            en: 'Salutations to her who is Śruti, giver of the fruit of good deeds; to Rati, ocean of lovely virtues; to Śakti, who dwells in the lotus; to Puṣṭi, beloved of Puruṣottama.',
            kn: 'ಶುಭಕರ್ಮಗಳ ಫಲವನ್ನು ಕೊಡುವ ಶ್ರುತಿಸ್ವರೂಪಿಣಿಗೆ ನಮಸ್ಕಾರ; ರಮಣೀಯ ಗುಣಗಳ ಸಾಗರವಾದ ರತಿಸ್ವರೂಪಿಣಿಗೆ ನಮಸ್ಕಾರ; ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿರುವ ಶಕ್ತಿಸ್ವರೂಪಿಣಿಗೆ ನಮಸ್ಕಾರ; ಪುರುಷೋತ್ತಮನ ಪ್ರಿಯೆಯಾದ ಪುಷ್ಟಿಸ್ವರೂಪಿಣಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 12,
          text: 'नमोऽस्तु नालीकनिभाननायै\nनमोऽस्तु दुग्धोदधिजन्मभूम्यै ।\nनमोऽस्तु सोमामृतसोदरायै\nनमोऽस्तु नारायणवल्लभायै ॥',
          meaning: {
            en: 'Salutations to her whose face is like a lotus; to her whose birthplace is the ocean of milk; to the sister of the moon and of amṛta; to the beloved of Nārāyaṇa.',
            kn: 'ಕಮಲದಂತಹ ಮುಖವುಳ್ಳವಳಿಗೆ ನಮಸ್ಕಾರ; ಕ್ಷೀರಸಾಗರವನ್ನು ಜನ್ಮಸ್ಥಾನವಾಗಿ ಉಳ್ಳವಳಿಗೆ ನಮಸ್ಕಾರ; ಚಂದ್ರ ಮತ್ತು ಅಮೃತಗಳ ಸಹೋದರಿಗೆ ನಮಸ್ಕಾರ; ನಾರಾಯಣನ ಪ್ರಿಯೆಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 13,
          text: 'नमोऽस्तु हेमाम्बुजपीठिकायै\nनमोऽस्तु भूमण्डलनायिकायै ।\nनमोऽस्तु देवादिदयापरायै\nनमोऽस्तु शार्ङ्गायुधवल्लभायै ॥',
          meaning: {
            en: 'Salutations to her seated on a golden lotus; to the queen of the whole earth; to her who is kind to the gods and to all; to the beloved of the Lord who bears the Śārṅga bow.',
            kn: 'ಸುವರ್ಣಕಮಲವನ್ನು ಪೀಠವಾಗಿ ಉಳ್ಳವಳಿಗೆ ನಮಸ್ಕಾರ; ಭೂಮಂಡಲದ ಒಡತಿಗೆ ನಮಸ್ಕಾರ; ದೇವತೆಗಳೇ ಮೊದಲಾದ ಎಲ್ಲರ ಮೇಲೆ ದಯೆಯುಳ್ಳವಳಿಗೆ ನಮಸ್ಕಾರ; ಶಾರ್ಙ್ಗಧನುಸ್ಸನ್ನು ಧರಿಸಿದ ಶ್ರೀಹರಿಯ ಪ್ರಿಯೆಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 14,
          text: 'नमोऽस्तु देव्यै भृगुनन्दनायै\nनमोऽस्तु विष्णोरुरसि स्थितायै ।\nनमोऽस्तु लक्ष्म्यै कमलालयायै\nनमोऽस्तु दामोदरवल्लभायै ॥',
          meaning: {
            en: 'Salutations to the goddess, daughter of Bhṛgu; to her who dwells on Viṣṇu’s chest; to Lakṣmī, whose home is the lotus; to the beloved of Dāmodara.',
            kn: 'ಭೃಗುನಂದಿನಿಯಾದ ದೇವಿಗೆ ನಮಸ್ಕಾರ; ವಿಷ್ಣುವಿನ ವಕ್ಷಸ್ಥಳದಲ್ಲಿ ನೆಲೆಸಿರುವವಳಿಗೆ ನಮಸ್ಕಾರ; ಕಮಲಾಲಯೆಯಾದ ಲಕ್ಷ್ಮಿಗೆ ನಮಸ್ಕಾರ; ದಾಮೋದರನ ಪ್ರಿಯೆಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 15,
          text: 'नमोऽस्तु कान्त्यै कमलेक्षणायै\nनमोऽस्तु भूत्यै भुवनप्रसूत्यै ।\nनमोऽस्तु देवादिभिरर्चितायै\nनमोऽस्तु नन्दात्मजवल्लभायै ॥',
          meaning: {
            en: 'Salutations to her who is radiance itself, the lotus-eyed; to her who is prosperity, mother of the worlds; to her whom the gods and all worship; to the beloved of Nanda’s son.',
            kn: 'ಕಾಂತಿಸ್ವರೂಪಿಣಿಯಾದ ಕಮಲಾಕ್ಷಿಗೆ ನಮಸ್ಕಾರ; ಐಶ್ವರ್ಯಸ್ವರೂಪಿಣಿಯಾದ ಲೋಕಮಾತೆಗೆ ನಮಸ್ಕಾರ; ದೇವತೆಗಳೇ ಮೊದಲಾದವರಿಂದ ಪೂಜಿತಳಾದವಳಿಗೆ ನಮಸ್ಕಾರ; ನಂದನಂದನ ಶ್ರೀಕೃಷ್ಣನ ಪ್ರಿಯೆಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 16,
          text: 'सम्पत्कराणि सकलेन्द्रियनन्दनानि\nसाम्राज्यदानविभवानि सरोरुहाक्षि ।\nत्वद्वन्दनानि दुरिताहरणोद्यतानि\nमामेव मातरनिशं कलयन्तु मान्ये ॥',
          meaning: {
            en: 'O lotus-eyed Mother, worthy of all honour: may my salutations to you, which bring wealth, delight every sense, confer the splendour of sovereignty and are ready to take away all sin, stay with me always.',
            kn: 'ಕಮಲಾಕ್ಷಿಯೇ, ಪೂಜ್ಯಳಾದ ತಾಯಿಯೇ, ಸಂಪತ್ತನ್ನು ತರುವ, ಎಲ್ಲ ಇಂದ್ರಿಯಗಳಿಗೂ ಆನಂದ ನೀಡುವ, ಸಾಮ್ರಾಜ್ಯದ ವೈಭವವನ್ನು ಕೊಡುವ, ಪಾಪಗಳನ್ನು ತೊಲಗಿಸಲು ಸಿದ್ಧವಾಗಿರುವ ನಿನ್ನ ವಂದನೆಗಳು ಸದಾ ನನ್ನೊಂದಿಗಿರಲಿ.',
          },
        },
        {
          n: 17,
          text: 'यत्कटाक्षसमुपासनाविधिः\nसेवकस्य सकलार्थसम्पदः ।\nसन्तनोति वचनाङ्गमानसैः\nत्वां मुरारिहृदयेश्वरीं भजे ॥',
          meaning: {
            en: 'I worship you, queen of Murāri’s heart: whoever serves your glance in word, body and mind gains every kind of wealth.',
            kn: 'ಯಾರ ಕಟಾಕ್ಷವನ್ನು ಮಾತು, ದೇಹ, ಮನಸ್ಸುಗಳಿಂದ ಉಪಾಸಿಸುವುದರಿಂದ ಸೇವಕನಿಗೆ ಎಲ್ಲ ಬಗೆಯ ಸಂಪತ್ತು ಲಭಿಸುವುದೋ, ಆ ಮುರಾರಿಯ ಹೃದಯೇಶ್ವರಿಯಾದ ನಿನ್ನನ್ನು ಭಜಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 18,
          text: 'सरसिजनिलये सरोजहस्ते\nधवलतमांशुकगन्धमाल्यशोभे ।\nभगवति हरिवल्लभे मनोज्ञे\nत्रिभुवनभूतिकरि प्रसीद मह्यम् ॥',
          meaning: {
            en: 'O goddess who dwells in the lotus, lotus in hand, radiant in the whitest garments, with sandal paste and garlands; O blessed one, beloved of Hari, lovely one, who brings prosperity to the three worlds, be gracious to me.',
            kn: 'ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿರುವವಳೇ, ಕಮಲವನ್ನು ಕೈಯಲ್ಲಿ ಹಿಡಿದವಳೇ, ಅತ್ಯಂತ ಬಿಳಿಯ ವಸ್ತ್ರ, ಗಂಧ, ಹೂಮಾಲೆಗಳಿಂದ ಶೋಭಿಸುವವಳೇ, ಭಗವತಿಯೇ, ಹರಿಪ್ರಿಯೆಯೇ, ಮನೋಹರಳೇ, ಮೂರು ಲೋಕಗಳಿಗೂ ಐಶ್ವರ್ಯ ನೀಡುವವಳೇ, ನನ್ನ ಮೇಲೆ ಪ್ರಸನ್ನಳಾಗು.',
          },
        },
        {
          n: 19,
          text: 'दिग्घस्तिभिः कनककुम्भमुखावसृष्ट-\nस्वर्वाहिनीविमलचारुजलप्लुताङ्गीम् ।\nप्रातर्नमामि जगतां जननीमशेष-\nलोकाधिनाथगृहिणीममृताब्धिपुत्रीम् ॥',
          meaning: {
            en: 'At dawn I bow to the Mother of the worlds, wife of the Lord of all the worlds, daughter of the ocean of nectar, whom the elephants of the quarters bathe with the pure, lovely waters of the heavenly river poured from golden pots.',
            kn: 'ದಿಗ್ಗಜಗಳು ಚಿನ್ನದ ಕಲಶಗಳ ಬಾಯಿಂದ ಸುರಿಸಿದ ಆಕಾಶಗಂಗೆಯ ನಿರ್ಮಲವಾದ ಸುಂದರ ಜಲದಿಂದ ಅಭಿಷಿಕ್ತಳಾದ, ಸಕಲ ಲೋಕಗಳ ಒಡೆಯನ ಪತ್ನಿಯಾದ, ಅಮೃತಸಾಗರದ ಪುತ್ರಿಯಾದ ಜಗನ್ಮಾತೆಗೆ ಪ್ರಾತಃಕಾಲದಲ್ಲಿ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 20,
          text: 'कमले कमलाक्षवल्लभे त्वं\nकरुणापूरतरङ्गितैरपाङ्गैः ।\nअवलोकय मामकिञ्चनानां\nप्रथमं पात्रमकृत्रिमं दयायाः ॥',
          meaning: {
            en: 'O Kamalā, beloved of the lotus-eyed Lord, look on me with side-glances that ripple with floods of compassion: I am the foremost of the poor, the true and natural object of your mercy.',
            kn: 'ಕಮಲೆಯೇ, ಕಮಲಾಕ್ಷನ ಪ್ರಿಯೆಯೇ, ಕರುಣೆಯ ಪ್ರವಾಹದಿಂದ ಅಲೆಯುಕ್ಕುವ ಕಡೆಗಣ್ಣ ನೋಟಗಳಿಂದ ನನ್ನನ್ನು ನೋಡು; ಬಡವರಲ್ಲಿ ಮೊದಲಿಗನಾದ ನಾನು ನಿನ್ನ ದಯೆಗೆ ನಿಜವಾದ ಪಾತ್ರನಾಗಿದ್ದೇನೆ.',
          },
        },
        {
          n: 21,
          text: 'देवि प्रसीद जगदीश्वरि लोकमातः\nकल्याणगात्रि कमलेक्षणजीवनाथे ।\nदारिद्र्यभीतिहृदयं शरणागतं माम्\nआलोकय प्रतिदिनं सदयैरपाङ्गैः ॥',
          meaning: {
            en: 'Be gracious, O Goddess, Queen of the universe, Mother of the worlds, of auspicious form, whose beloved Lord is the lotus-eyed one. My heart afraid of poverty, I come to you for refuge: look on me every day with your kindly side-glances.',
            kn: 'ದೇವಿಯೇ, ಪ್ರಸನ್ನಳಾಗು; ಜಗದೀಶ್ವರಿಯೇ, ಲೋಕಮಾತೆಯೇ, ಮಂಗಳಕರ ದೇಹವುಳ್ಳವಳೇ, ಕಮಲಾಕ್ಷನನ್ನು ಪ್ರಾಣನಾಥನಾಗಿ ಉಳ್ಳವಳೇ, ಬಡತನದ ಭಯದಿಂದ ಕೂಡಿದ ಹೃದಯದೊಂದಿಗೆ ನಿನ್ನಲ್ಲಿ ಶರಣು ಬಂದಿರುವ ನನ್ನನ್ನು ಪ್ರತಿದಿನವೂ ದಯಾಪೂರ್ಣ ಕಡೆಗಣ್ಣ ನೋಟಗಳಿಂದ ನೋಡು.',
          },
        },
      ],
    },
    {
      title: 'फलश्रुतिः',
      titleEn: 'Phala-śruti',
      verses: [
        {
          n: 22,
          text: 'स्तुवन्ति ये स्तुतिभिरमूभिरन्वहं\nत्रयीमयीं त्रिभुवनमातरं रमाम् ।\nगुणाधिका गुरुतरभाग्यभागिनो\nभवन्ति ते भुवि बुधभाविताशयाः ॥',
          meaning: {
            en: 'Those who praise Ramā, Mother of the three worlds and embodiment of the three Vedas, every day with these hymns, become rich in virtue and blessed with great good fortune on earth, and the wise hold their minds in honour.',
            kn: 'ವೇದತ್ರಯಸ್ವರೂಪಿಣಿಯೂ ಮೂರು ಲೋಕಗಳ ತಾಯಿಯೂ ಆದ ರಮಾದೇವಿಯನ್ನು ಈ ಸ್ತುತಿಗಳಿಂದ ಪ್ರತಿದಿನ ಸ್ತುತಿಸುವವರು ಈ ಲೋಕದಲ್ಲಿ ಗುಣಸಂಪನ್ನರೂ, ಮಹಾಭಾಗ್ಯಶಾಲಿಗಳೂ, ಜ್ಞಾನಿಗಳಿಂದ ಮನ್ನಣೆ ಪಡೆದ ಮನಸ್ಸುಳ್ಳವರೂ ಆಗುತ್ತಾರೆ.',
          },
        },
      ],
    },
  ],
};
