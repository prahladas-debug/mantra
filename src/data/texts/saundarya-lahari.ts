/**
 * Saundarya Laharī, attributed to Śrī Śaṅkarācārya: 100 verses in śikhariṇī
 * (Ānandalaharī 1–41, Saundaryalaharī 42–100). The three extra verses at the
 * end of some editions are omitted (see contentNote).
 *
 * Sources (collated with scripts/collate.ts, Nov 2026):
 * - Base: stotrasamhita/stotra-sangrahah (GitHub, typed; southern recitation text).
 * - eBharati-sampat no. 2990 (National Sanskrit University, Tirupati) via
 *   vishvAsa/AgamaH_shaivaH, the मूलम् blocks.
 * - GRETIL, after W. Norman Brown's edition (HOS 43, 1958), input P. Schreiner,
 *   via sanskrit/raw_etexts. Used as a witness only.
 * - Arthur Avalon, Ānandalaharī (Madras 1924; vv. 1–41), eBharati, tie-breaker.
 * All 400 pādas scan as śikhariṇī (LGGGGG LLLLLG GLLLG).
 *
 * Changes to the base (both the Tirupati and GRETIL texts agree unless noted):
 * 15 कणितयः → भणितयः (also Avalon), with sandhi मधुरिमधुरीणा भणितयः;
 * 20 निकुरुम्ब → निकुरम्ब (as in 43); 26 सम्मीलितदृशां → °दृशा;
 * 29 जम्भारिमकुटम् → °मुकुटम्; 39 यद् दृष्टिः → या दृष्टिः;
 * 61 वहत्यन्तर्मुक्ताः शिशिरकर° → वहन्नन्तर्मुक्ताः शिशिरतर°;
 * 62 त्वद्बिम्ब° → तद्बिम्ब°; 63 °लहरीमाम्ल° → °लहरीमम्ल°;
 * 67 चुबुकम् → चिबुकम्; 78 निजावालं → कलावालं; 82 भवति → भवती.
 * Hyphens added where a compound runs over the line (11, 16, 31, 44, 78, 83).
 * Kept the base (southern/Lakṣmīdhara reading) against the other witnesses:
 * 11 चतुश्चत्वारिंशद् … शरणकोणाः (GRETIL and Avalon त्रयश्चत्वारिंशद्; GRETIL
 * चरणकोणाः); 33 गुणनिबद्ध (two witnesses गुन°, a misspelling); 15 मुकुटां,
 * घुटिका; 44 बृन्दैः; 61 यस्तासां. Cross-pāda sandhi (e.g. 24 शिवः / शिव-स्तव) is
 * treated as spelling: pāda-final forms are kept.
 */
import type { Mantra } from '../types';

export const saundaryaLahari: Mantra = {
  id: 'saundarya-lahari',
  title: 'सौन्दर्यलहरी',
  titleEn: 'Saundarya Lahari',
  category: 'stotra',
  deity: 'Śrī Lalitā (Tripurasundarī)',
  source: 'Attributed to Śrī Śaṅkarācārya',
  summary: '“The Wave of Beauty”: a hundred verses in praise of the Divine Mother as the power (śakti) without whom Śiva cannot stir. The first part, Ānandalaharī (1–41), celebrates her supremacy and worship; the second (42–100) describes her form from crown to feet and ends in self-offering.',
  summaryKn: '“ಸೌಂದರ್ಯದ ಅಲೆ” ಎಂಬ ಅರ್ಥದ ನೂರು ಶ್ಲೋಕಗಳ ಸ್ತೋತ್ರ. ಆಕೆಯ ಶಕ್ತಿಯಿಲ್ಲದೆ ಶಿವನೂ ಚಲಿಸಲಾರ ಎಂದು ಜಗನ್ಮಾತೆಯನ್ನು ಸ್ತುತಿಸುತ್ತದೆ. ಮೊದಲ ಭಾಗ ಆನಂದಲಹರಿ (೧–೪೧) ಆಕೆಯ ಶ್ರೇಷ್ಠತೆ ಮತ್ತು ಉಪಾಸನೆಯನ್ನು ಹೊಗಳುತ್ತದೆ; ಎರಡನೆಯ ಭಾಗ (೪೨–೧೦೦) ಕಿರೀಟದಿಂದ ಪಾದಗಳವರೆಗೆ ಆಕೆಯ ರೂಪವನ್ನು ವರ್ಣಿಸಿ ಆತ್ಮಾರ್ಪಣೆಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ.',
  difficulty: 'advanced',
  completeness: 'complete',
  contentNote: 'The standard 100 verses. Three further verses found at the end of some editions (समानीतः पद्भ्याम्…, समुद्भूतस्थूलस्तनभरम्…, निधे नित्यस्मेरे…) are later additions and are not included.',
  sections: [
    {
      title: 'आनन्दलहरी',
      titleEn: 'Ananda Lahari (1–41)',
      verses: [
        {
          n: 1,
          text: 'शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि ।\nअतस्त्वामाराध्यां हरिहरविरिञ्चादिभिरपि\nप्रणन्तुं स्तोतुं वा कथमकृतपुण्यः प्रभवति ॥',
          meaning: {
            en: 'Śiva can create only when He is united with Śakti; without her the god cannot even stir. How then can one without merit bow to you or praise you, whom even Hari, Hara and Brahmā worship?',
            kn: 'ಶಕ್ತಿಯೊಡನೆ ಕೂಡಿದಾಗ ಮಾತ್ರ ಶಿವನು ಸೃಷ್ಟಿಸಲು ಸಮರ್ಥನಾಗುತ್ತಾನೆ; ಇಲ್ಲದಿದ್ದರೆ ಆ ದೇವನು ಅಲುಗಾಡಲೂ ಶಕ್ತನಲ್ಲ. ಹೀಗಿರುವಾಗ ಹರಿ, ಹರ, ಬ್ರಹ್ಮಾದಿಗಳಿಂದಲೂ ಪೂಜಿತಳಾದ ನಿನ್ನನ್ನು ಪುಣ್ಯವಿಲ್ಲದವನು ನಮಿಸಲು ಅಥವಾ ಸ್ತುತಿಸಲು ಹೇಗೆ ಸಮರ್ಥನಾದಾನು?',
          },
        },
        {
          n: 2,
          text: 'तनीयांसं पांसुं तव चरणपङ्केरुहभवं\nविरिञ्चिः सञ्चिन्वन् विरचयति लोकानविकलम् ।\nवहत्येनं शौरिः कथमपि सहस्रेण शिरसां\nहरः सङ्क्षुद्यैनं भजति भसितोद्धूलनविधिम् ॥',
          meaning: {
            en: 'Gathering a tiny speck of dust from your lotus feet, Brahmā creates the worlds without flaw; Viṣṇu, as Śeṣa, bears it with effort on his thousand heads; and Hara grinds it fine and smears it on himself as sacred ash.',
            kn: 'ನಿನ್ನ ಪಾದಕಮಲಗಳ ಸಣ್ಣ ಧೂಳಿನ ಕಣವನ್ನು ಸಂಗ್ರಹಿಸಿ ಬ್ರಹ್ಮನು ಲೋಕಗಳನ್ನು ಲೋಪವಿಲ್ಲದೆ ಸೃಷ್ಟಿಸುತ್ತಾನೆ; ಶೇಷರೂಪಿಯಾದ ವಿಷ್ಣುವು ಅದನ್ನು ತನ್ನ ಸಾವಿರ ಹೆಡೆಗಳಿಂದ ಕಷ್ಟದಿಂದ ಹೊರುತ್ತಾನೆ; ಹರನು ಅದನ್ನು ಪುಡಿಮಾಡಿ ಭಸ್ಮವಾಗಿ ಲೇಪಿಸಿಕೊಳ್ಳುತ್ತಾನೆ.',
          },
        },
        {
          n: 3,
          text: 'अविद्यानामन्तस्तिमिरमिहिरद्वीपनगरी\nजडानां चैतन्यस्तबकमकरन्दस्रुतिझरी ।\nदरिद्राणां चिन्तामणिगुणनिका जन्मजलधौ\nनिमग्नानां दंष्ट्रा मुररिपुवराहस्य भवती ॥',
          meaning: {
            en: 'For the ignorant you are a city of the sun that dispels inner darkness; for the dull, a stream of honey from the flower of awareness; for the poor, a string of wish-fulfilling gems; and for those drowning in the sea of births, the tusk of Viṣṇu as the Boar.',
            kn: 'ಅಜ್ಞಾನಿಗಳಿಗೆ ಒಳಗಿನ ಕತ್ತಲನ್ನು ಹೋಗಲಾಡಿಸುವ ಸೂರ್ಯನ ನಗರಿ ನೀನು; ಜಡರಿಗೆ ಚೈತನ್ಯವೆಂಬ ಹೂಗೊಂಚಲಿನ ಮಕರಂದದ ಝರಿ ನೀನು; ಬಡವರಿಗೆ ಚಿಂತಾಮಣಿಗಳ ಮಾಲೆ ನೀನು; ಜನ್ಮಸಾಗರದಲ್ಲಿ ಮುಳುಗಿದವರಿಗೆ ವರಾಹರೂಪಿ ಶ್ರೀಹರಿಯ ದಾಡೆ ನೀನು.',
          },
        },
        {
          n: 4,
          text: 'त्वदन्यः पाणिभ्यामभयवरदो दैवतगणः\nत्वमेका नैवासि प्रकटितवराभीत्यभिनया ।\nभयात् त्रातुं दातुं फलमपि च वाञ्छासमधिकं\nशरण्ये लोकानां तव हि चरणावेव निपुणौ ॥',
          meaning: {
            en: 'The other gods show the gestures of fearlessness and boon with their hands; you alone make no such show, for your feet themselves, O refuge of the worlds, are able to save from fear and to give even more than is desired.',
            kn: 'ಉಳಿದ ದೇವತೆಗಳು ಕೈಗಳಿಂದ ಅಭಯ, ವರ ಮುದ್ರೆಗಳನ್ನು ತೋರಿಸುತ್ತಾರೆ; ನೀನೊಬ್ಬಳೇ ಹಾಗೆ ತೋರಿಸುವುದಿಲ್ಲ. ಏಕೆಂದರೆ, ಲೋಕಗಳಿಗೆ ಶರಣ್ಯಳೇ, ಭಯದಿಂದ ರಕ್ಷಿಸಲೂ ಬಯಸಿದ್ದಕ್ಕಿಂತ ಹೆಚ್ಚು ಫಲವನ್ನು ಕೊಡಲೂ ನಿನ್ನ ಪಾದಗಳೇ ಸಮರ್ಥವಾಗಿವೆ.',
          },
        },
        {
          n: 5,
          text: 'हरिस्त्वामाराध्य प्रणतजनसौभाग्यजननीं\nपुरा नारी भूत्वा पुररिपुमपि क्षोभमनयत् ।\nस्मरोऽपि त्वां नत्वा रतिनयनलेह्येन वपुषा\nमुनीनामप्यन्तः प्रभवति हि मोहाय महताम् ॥',
          meaning: {
            en: 'By worshipping you, who bring good fortune to those who bow, Hari once became a woman and stirred even Śiva; and Kāma, bowing to you, with a form that delights Rati’s eyes, can bewilder even great sages.',
            kn: 'ನಮಿಸುವವರಿಗೆ ಸೌಭಾಗ್ಯ ನೀಡುವ ನಿನ್ನನ್ನು ಆರಾಧಿಸಿ ಹಿಂದೆ ಶ್ರೀಹರಿಯು ಮೋಹಿನಿಯಾಗಿ ತ್ರಿಪುರಾರಿಯನ್ನೂ ಕ್ಷೋಭೆಗೊಳಿಸಿದನು; ನಿನಗೆ ನಮಿಸಿದ ಮನ್ಮಥನೂ ರತಿಯ ಕಣ್ಣುಗಳಿಗೆ ಸವಿಯಾದ ರೂಪದಿಂದ ಮಹಾಮುನಿಗಳ ಮನಸ್ಸನ್ನೂ ಮೋಹಗೊಳಿಸಬಲ್ಲನು.',
          },
        },
        {
          n: 6,
          text: 'धनुः पौष्पं मौर्वी मधुकरमयी पञ्च विशिखाः\nवसन्तः सामन्तो मलयमरुदायोधनरथः ।\nतथाप्येकः सर्वं हिमगिरिसुते कामपि कृपाम्\nअपाङ्गात्ते लब्ध्वा जगदिदमनङ्गो विजयते ॥',
          meaning: {
            en: 'His bow is of flowers, its string of bees, his arrows only five, spring his ally and the Malaya breeze his chariot; yet bodiless Kāma, alone, conquers this whole world, having won a little grace from your side-glance, O daughter of the snow mountain.',
            kn: 'ಹೂವಿನ ಬಿಲ್ಲು, ದುಂಬಿಗಳ ಹೆದೆ, ಐದೇ ಬಾಣಗಳು, ವಸಂತನೇ ಸಾಮಂತ, ಮಲಯಮಾರುತವೇ ಯುದ್ಧರಥ; ಆದರೂ ಹಿಮಗಿರಿಸುತೆಯೇ, ನಿನ್ನ ಕಡೆಗಣ್ಣಿನಿಂದ ಸ್ವಲ್ಪ ಕೃಪೆಯನ್ನು ಪಡೆದು ದೇಹವಿಲ್ಲದ ಮನ್ಮಥನು ಒಬ್ಬನೇ ಈ ಇಡೀ ಜಗತ್ತನ್ನು ಗೆಲ್ಲುತ್ತಾನೆ.',
          },
        },
        {
          n: 7,
          text: 'क्वणत्काञ्चीदामा करिकलभकुम्भस्तननता\nपरिक्षीणा मध्ये परिणतशरच्चन्द्रवदना ।\nधनुर्बाणान् पाशं सृणिमपि दधाना करतलैः\nपुरस्तादास्तां नः पुरमथितुराहोपुरुषिका ॥',
          meaning: {
            en: 'With a tinkling girdle, slender of waist and slightly bowed by her bosom, her face like the full autumn moon, holding bow, arrows, noose and goad in her hands: may she, the very pride of Śiva, stand before us.',
            kn: 'ಝಣಝಣಿಸುವ ಒಡ್ಯಾಣವುಳ್ಳ, ತೆಳುವಾದ ನಡುವುಳ್ಳ, ವಕ್ಷಸ್ಥಳದ ಭಾರದಿಂದ ಸ್ವಲ್ಪ ಬಾಗಿದ, ಶರತ್ಕಾಲದ ಪೂರ್ಣಚಂದ್ರನಂತಹ ಮುಖವುಳ್ಳ, ಕೈಗಳಲ್ಲಿ ಬಿಲ್ಲು, ಬಾಣ, ಪಾಶ, ಅಂಕುಶಗಳನ್ನು ಹಿಡಿದಿರುವ, ತ್ರಿಪುರಾರಿಯ ಅಭಿಮಾನದ ಮೂರ್ತಿಯಾದ ದೇವಿಯು ನಮ್ಮ ಮುಂದೆ ನೆಲೆಸಲಿ.',
          },
        },
        {
          n: 8,
          text: 'सुधासिन्धोर्मध्ये सुरविटपिवाटीपरिवृते\nमणिद्वीपे नीपोपवनवति चिन्तामणिगृहे ।\nशिवाकारे मञ्चे परमशिवपर्यङ्कनिलयां\nभजन्ति त्वां धन्याः कतिचन चिदानन्दलहरीम् ॥',
          meaning: {
            en: 'In the midst of the ocean of nectar, on the jewelled island ringed by groves of heavenly trees, in the palace of wish-gems amid kadamba woods, on a couch shaped of Śiva with Paramaśiva as your seat, a blessed few worship you, the wave of consciousness and bliss.',
            kn: 'ಅಮೃತಸಾಗರದ ಮಧ್ಯದಲ್ಲಿ, ಕಲ್ಪವೃಕ್ಷಗಳ ತೋಪುಗಳಿಂದ ಸುತ್ತುವರಿದ ಮಣಿದ್ವೀಪದಲ್ಲಿ, ಕದಂಬವನದ ನಡುವಿನ ಚಿಂತಾಮಣಿ ಮಂದಿರದಲ್ಲಿ, ಶಿವಾಕಾರದ ಮಂಚದ ಮೇಲೆ ಪರಮಶಿವನನ್ನೇ ಆಸನವಾಗಿ ಉಳ್ಳ, ಚಿದಾನಂದದ ಅಲೆಯಾದ ನಿನ್ನನ್ನು ಕೆಲವೇ ಧನ್ಯರು ಭಜಿಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 9,
          text: 'महीं मूलाधारे कमपि मणिपूरे हुतवहं\nस्थितं स्वाधिष्ठाने हृदि मरुतमाकाशमुपरि ।\nमनोऽपि भ्रूमध्ये सकलमपि भित्वा कुलपथं\nसहस्रारे पद्मे सह रहसि पत्या विहरसे ॥',
          meaning: {
            en: 'Passing through earth in the mūlādhāra, water in the maṇipūra, fire in the svādhiṣṭhāna, air in the heart, space above it and mind between the brows, piercing the whole inner path, you sport in secret with your Lord in the thousand-petalled lotus.',
            kn: 'ಮೂಲಾಧಾರದ ಭೂತತ್ತ್ವವನ್ನು, ಮಣಿಪೂರದ ಜಲತತ್ತ್ವವನ್ನು, ಸ್ವಾಧಿಷ್ಠಾನದ ಅಗ್ನಿಯನ್ನು, ಹೃದಯದ ವಾಯುವನ್ನು, ಅದರ ಮೇಲಿನ ಆಕಾಶವನ್ನು, ಭ್ರೂಮಧ್ಯದ ಮನಸ್ಸನ್ನೂ ದಾಟಿ, ಇಡೀ ಕುಲಮಾರ್ಗವನ್ನು ಭೇದಿಸಿ, ಸಹಸ್ರಾರ ಕಮಲದಲ್ಲಿ ನಿನ್ನ ಪತಿಯೊಡನೆ ಏಕಾಂತದಲ್ಲಿ ವಿಹರಿಸುತ್ತೀಯೆ.',
          },
        },
        {
          n: 10,
          text: 'सुधाधारासारैश्चरणयुगलान्तर्विगलितैः\nप्रपञ्चं सिञ्चन्ती पुनरपि रसाम्नायमहसः ।\nअवाप्य स्वां भूमिं भुजगनिभमध्युष्टवलयं\nस्वमात्मानं कृत्वा स्वपिषि कुलकुण्डे कुहरिणि ॥',
          meaning: {
            en: 'Bathing the body’s world with streams of nectar flowing from your feet, you return from the radiant realm of the moon to your own place, take the form of a coiled serpent, and sleep in the hollow of the kula-kuṇḍa.',
            kn: 'ನಿನ್ನ ಪಾದಗಳಿಂದ ಹರಿಯುವ ಅಮೃತಧಾರೆಗಳಿಂದ ದೇಹಪ್ರಪಂಚವನ್ನು ತೋಯಿಸಿ, ಪ್ರಕಾಶಮಯವಾದ ಚಂದ್ರಮಂಡಲದಿಂದ ಮತ್ತೆ ನಿನ್ನ ಸ್ವಸ್ಥಾನಕ್ಕೆ ಮರಳಿ, ಸರ್ಪದಂತೆ ಸುರುಳಿಸುತ್ತಿದ ರೂಪವನ್ನು ತಾಳಿ, ಕುಲಕುಂಡದ ಗುಹೆಯಲ್ಲಿ ನಿದ್ರಿಸುತ್ತೀಯೆ.',
          },
        },
        {
          n: 11,
          text: 'चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि\nप्रभिन्नाभिः शम्भोर्नवभिरपि मूलप्रकृतिभिः ।\nचतुश्चत्वारिंशद्वसुदलकलाश्रत्रिवलय-\nत्रिरेखाभिः सार्धं तव शरणकोणाः परिणताः ॥',
          meaning: {
            en: 'With the four triangles of Śiva and the five of Śakti, nine root-principles distinct from Śambhu, together with the eight- and sixteen-petalled lotuses, the three circles and the three lines, the angles of your dwelling (the Śrīcakra) number forty-four.',
            kn: 'ನಾಲ್ಕು ಶಿವಕೋಣಗಳು, ಐದು ಶಕ್ತಿಕೋಣಗಳು ಎಂಬ ಒಂಬತ್ತು ಮೂಲಪ್ರಕೃತಿಗಳು, ಎಂಟು ದಳ ಮತ್ತು ಹದಿನಾರು ದಳಗಳ ಕಮಲಗಳು, ಮೂರು ವಲಯಗಳು, ಮೂರು ರೇಖೆಗಳೊಡನೆ ನಿನ್ನ ನೆಲೆಯಾದ ಶ್ರೀಚಕ್ರದ ಕೋಣಗಳು ನಲವತ್ತನಾಲ್ಕು ಆಗಿವೆ.',
          },
        },
        {
          n: 12,
          text: 'त्वदीयं सौन्दर्यं तुहिनगिरिकन्ये तुलयितुं\nकवीन्द्राः कल्पन्ते कथमपि विरिञ्चिप्रभृतयः ।\nयदालोकौत्सुक्यादमरललना यान्ति मनसा\nतपोभिर्दुष्प्रापामपि गिरिशसायुज्यपदवीम् ॥',
          meaning: {
            en: 'Great poets like Brahmā strain to find a match for your beauty, O daughter of the snow mountain; and the heavenly maidens, longing to behold it, reach in their minds that oneness with Śiva which is hard to win even by penance.',
            kn: 'ಹಿಮಗಿರಿಕನ್ಯೆಯೇ, ನಿನ್ನ ಸೌಂದರ್ಯವನ್ನು ಹೋಲಿಸಲು ಬ್ರಹ್ಮನೇ ಮೊದಲಾದ ಕವಿಶ್ರೇಷ್ಠರು ಕಷ್ಟಪಡುತ್ತಾರೆ; ಅದನ್ನು ನೋಡುವ ಹಂಬಲದಿಂದ ದೇವಲೋಕದ ಸುಂದರಿಯರು ತಪಸ್ಸಿನಿಂದಲೂ ಪಡೆಯಲು ಕಷ್ಟವಾದ ಶಿವಸಾಯುಜ್ಯವನ್ನು ಮನಸ್ಸಿನಲ್ಲೇ ಪಡೆಯುತ್ತಾರೆ.',
          },
        },
        {
          n: 13,
          text: 'नरं वर्षीयांसं नयनविरसं नर्मसु जडं\nतवापाङ्गालोके पतितमनुधावन्ति शतशः ।\nगलद्वेणीबन्धाः कुचकलशविस्रस्तसिचया\nहठात् त्रुट्यत्काञ्च्यो विगलितदुकूला युवतयः ॥',
          meaning: {
            en: 'Even an old man, plain to look at and slow in wit, once your glance falls on him, is followed by young women in hundreds, their braids coming loose, their upper garments slipping from their pitcher-like breasts, their girdles suddenly snapping and their silks falling away.',
            kn: 'ವಯಸ್ಸಾದ, ನೋಡಲು ಸುಂದರನಲ್ಲದ, ಸರಸದಲ್ಲಿ ಜಡನಾದ ಮನುಷ್ಯನ ಮೇಲೂ ನಿನ್ನ ಕಡೆಗಣ್ಣ ನೋಟ ಬಿದ್ದರೆ, ನೂರಾರು ಯುವತಿಯರು ಅವನನ್ನು ಹಿಂಬಾಲಿಸುತ್ತಾರೆ — ಅವರ ಜಡೆಗಳು ಸಡಿಲಾಗುತ್ತವೆ, ಕಲಶದಂತಹ ಸ್ತನಗಳಿಂದ ಸೆರಗು ಜಾರುತ್ತದೆ, ಒಡ್ಯಾಣಗಳು ಥಟ್ಟನೆ ಕಡಿಯುತ್ತವೆ, ರೇಷ್ಮೆಯ ಉಡುಗೆ ಜಾರಿಬೀಳುತ್ತದೆ.',
          },
        },
        {
          n: 14,
          text: 'क्षितौ षट्पञ्चाशद् द्विसमधिकपञ्चाशदुदके\nहुताशे द्वाषष्टिश्चतुरधिकपञ्चाशदनिले ।\nदिवि द्विष्षट्त्रिंशन्मनसि च चतुष्षष्टिरिति ये\nमयूखास्तेषामप्युपरि तव पादाम्बुजयुगम् ॥',
          meaning: {
            en: 'Fifty-six rays in earth, fifty-two in water, sixty-two in fire, fifty-four in air, seventy-two in space and sixty-four in mind: above all these rays are your two lotus feet.',
            kn: 'ಭೂತತ್ತ್ವದಲ್ಲಿ ಐವತ್ತಾರು, ಜಲದಲ್ಲಿ ಐವತ್ತೆರಡು, ಅಗ್ನಿಯಲ್ಲಿ ಅರವತ್ತೆರಡು, ವಾಯುವಿನಲ್ಲಿ ಐವತ್ತನಾಲ್ಕು, ಆಕಾಶದಲ್ಲಿ ಎಪ್ಪತ್ತೆರಡು, ಮನಸ್ಸಿನಲ್ಲಿ ಅರವತ್ತನಾಲ್ಕು ಕಿರಣಗಳಿವೆ; ಅವೆಲ್ಲಕ್ಕಿಂತಲೂ ಮೇಲೆ ನಿನ್ನ ಪಾದಕಮಲಗಳಿವೆ.',
          },
        },
        {
          n: 15,
          text: 'शरज्ज्योत्स्नाशुद्धां शशियुतजटाजूटमुकुटां\nवरत्रासत्राणस्फटिकघुटिकापुस्तककराम् ।\nसकृन्न त्वा नत्वा कथमिव सतां सन्निदधते\nमधुक्षीरद्राक्षामधुरिमधुरीणा भणितयः ॥',
          meaning: {
            en: 'How could the good who have bowed even once to you, pure as autumn moonlight, the moon in your matted locks, your hands showing boon and fearlessness and holding a crystal rosary and a book, fail to gain words sweeter than honey, milk and grapes?',
            kn: 'ಶರತ್ಕಾಲದ ಬೆಳದಿಂಗಳಿನಂತೆ ಶುಭ್ರಳಾದ, ಚಂದ್ರನಿಂದ ಕೂಡಿದ ಜಟಾಮಕುಟವುಳ್ಳ, ವರ, ಅಭಯ ಮುದ್ರೆಗಳೂ ಸ್ಫಟಿಕಮಾಲೆ, ಪುಸ್ತಕಗಳೂ ಇರುವ ಕೈಗಳುಳ್ಳ ನಿನ್ನನ್ನು ಒಮ್ಮೆ ನಮಿಸಿದ ಸಜ್ಜನರಿಗೆ ಜೇನು, ಹಾಲು, ದ್ರಾಕ್ಷಿಗಳ ಸಿಹಿಯನ್ನು ಮೀರಿಸುವ ಮಾತುಗಳು ಹೇಗೆ ಒದಗದಿರುತ್ತವೆ?',
          },
        },
        {
          n: 16,
          text: 'कवीन्द्राणां चेतःकमलवनबालातपरुचिं\nभजन्ते ये सन्तः कतिचिदरुणामेव भवतीम् ।\nविरिञ्चिप्रेयस्यास्तरुणतरशृङ्गारलहरी-\nगभीराभिर्वाग्भिर्विदधति सतां रञ्जनममी ॥',
          meaning: {
            en: 'The good few who worship you as the rosy Aruṇā, morning sunlight to the lotus-forest of great poets’ minds, delight the learned with deep words that are waves of Sarasvatī’s youthful grace.',
            kn: 'ಮಹಾಕವಿಗಳ ಮನಸ್ಸೆಂಬ ಕಮಲವನಕ್ಕೆ ಎಳೆಬಿಸಿಲಿನಂತಿರುವ ಅರುಣವರ್ಣದ ನಿನ್ನನ್ನು ಭಜಿಸುವ ಕೆಲವು ಸಜ್ಜನರು, ಸರಸ್ವತಿಯ ತಾರುಣ್ಯದ ಸೊಬಗಿನ ಅಲೆಗಳಂತಿರುವ ಗಂಭೀರ ಮಾತುಗಳಿಂದ ವಿದ್ವಾಂಸರನ್ನು ಸಂತೋಷಪಡಿಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 17,
          text: 'सवित्रीभिर्वाचां शशिमणिशिलाभङ्गरुचिभिः\nवशिन्याद्याभिस्त्वां सह जननि सञ्चिन्तयति यः ।\nस कर्ता काव्यानां भवति महतां भङ्गिरुचिभिः\nवचोभिर्वाग्देवीवदनकमलामोदमधुरैः ॥',
          meaning: {
            en: 'Whoever meditates on you, O Mother, with Vaśinī and the other goddesses who give birth to speech, bright as moonstone, becomes the author of poems as graceful as those of the great, in words sweet with the fragrance of Sarasvatī’s lotus face.',
            kn: 'ಚಂದ್ರಕಾಂತಶಿಲೆಯಂತೆ ಹೊಳೆಯುವ, ವಾಕ್ಕಿಗೆ ಜನ್ಮ ನೀಡುವ ವಶಿನೀ ಮೊದಲಾದ ದೇವತೆಗಳೊಡನೆ ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುವವನು ಮಹಾಕವಿಗಳಂತೆ ಸೊಗಸಾದ, ಸರಸ್ವತಿಯ ಮುಖಕಮಲದ ಸುಗಂಧದಂತೆ ಮಧುರವಾದ ಮಾತುಗಳಿಂದ ಕಾವ್ಯಗಳನ್ನು ರಚಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 18,
          text: 'तनुच्छायाभिस्ते तरुणतरणिश्रीसरणिभिः\nदिवं सर्वामुर्वीमरुणिमनिमग्नां स्मरति यः ।\nभवन्त्यस्य त्रस्यद्वनहरिणशालीननयनाः\nसहोर्वश्या वश्याः कति कति न गीर्वाणगणिकाः ॥',
          meaning: {
            en: 'Whoever contemplates heaven and earth bathed in the rosy glow of your form, bright as the rising sun, wins over countless heavenly maidens, Urvaśī among them, with eyes shy as a startled deer.',
            kn: 'ಉದಯಸೂರ್ಯನ ಕಾಂತಿಯಂತಿರುವ ನಿನ್ನ ದೇಹಕಾಂತಿಯಲ್ಲಿ ಸ್ವರ್ಗ, ಭೂಮಿಗಳೆಲ್ಲ ಕೆಂಪಾಗಿ ಮುಳುಗಿರುವುದನ್ನು ಧ್ಯಾನಿಸುವವನಿಗೆ, ಬೆದರಿದ ಜಿಂಕೆಯಂತಹ ಕಣ್ಣುಗಳುಳ್ಳ ಊರ್ವಶಿಯೇ ಮೊದಲಾದ ಎಷ್ಟೋ ಅಪ್ಸರೆಯರು ವಶರಾಗುತ್ತಾರೆ.',
          },
        },
        {
          n: 19,
          text: 'मुखं बिन्दुं कृत्वा कुचयुगमधस्तस्य तदधो\nहरार्धं ध्यायेद्यो हरमहिषि ते मन्मथकलाम् ।\nस सद्यः सङ्क्षोभं नयति वनिता इत्यतिलघु\nत्रिलोकीमप्याशु भ्रमयति रवीन्दुस्तनयुगाम् ॥',
          meaning: {
            en: 'Whoever meditates on your Kāmakalā, O queen of Hara, making your face the bindu, the pair of breasts below it, and below them the half of Hara, at once stirs women, a small thing, and swiftly sways even the three worlds, whose breasts are the sun and the moon. (A Śrīvidyā meditation.)',
            kn: 'ಹರನ ಮಹಿಷಿಯೇ, ಮುಖವನ್ನು ಬಿಂದುವಾಗಿಸಿ, ಅದರ ಕೆಳಗೆ ಸ್ತನಯುಗಲವನ್ನೂ ಅದರ ಕೆಳಗೆ ಹರಾರ್ಧವನ್ನೂ ಭಾವಿಸಿ ನಿನ್ನ ‘ಮನ್ಮಥಕಲೆ’ಯನ್ನು ಧ್ಯಾನಿಸುವವನು ಸ್ತ್ರೀಯರನ್ನು ಕ್ಷಣದಲ್ಲಿ ಕ್ಷೋಭೆಗೊಳಿಸುತ್ತಾನೆ — ಅದು ಅತಿ ಸಣ್ಣ ವಿಷಯ — ಸೂರ್ಯಚಂದ್ರರೇ ಸ್ತನಗಳಾಗಿರುವ ಮೂರು ಲೋಕಗಳನ್ನೂ ಬೇಗನೆ ಭ್ರಮೆಗೊಳಿಸುತ್ತಾನೆ. (ಇದು ಶ್ರೀವಿದ್ಯಾ ಸಂಪ್ರದಾಯದ ಒಂದು ಧ್ಯಾನ.)',
          },
        },
        {
          n: 20,
          text: 'किरन्तीमङ्गेभ्यः किरणनिकुरम्बामृतरसं\nहृदि त्वामाधत्ते हिमकरशिलामूर्तिमिव यः ।\nस सर्पाणां दर्पं शमयति शकुन्ताधिप इव\nज्वरप्लुष्टान् दृष्ट्या सुखयति सुधाधारसिरया ॥',
          meaning: {
            en: 'Whoever holds you in his heart like an image of moonstone, pouring rays of nectar from every limb, subdues the pride of serpents like Garuḍa and soothes the fevered with a glance that flows with nectar.',
            kn: 'ಅಂಗಗಳಿಂದ ಅಮೃತದ ಕಿರಣಗಳನ್ನು ಸೂಸುವ, ಚಂದ್ರಕಾಂತಶಿಲೆಯ ಮೂರ್ತಿಯಂತಿರುವ ನಿನ್ನನ್ನು ಹೃದಯದಲ್ಲಿ ಧ್ಯಾನಿಸುವವನು ಗರುಡನಂತೆ ಸರ್ಪಗಳ ದರ್ಪವನ್ನು ಅಡಗಿಸುತ್ತಾನೆ; ಜ್ವರದಿಂದ ಬಳಲುವವರನ್ನು ಅಮೃತಧಾರೆಯಂತಹ ದೃಷ್ಟಿಯಿಂದ ಸುಖಪಡಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 21,
          text: 'तटिल्लेखातन्वीं तपनशशिवैश्वानरमयीं\nनिषण्णां षण्णामप्युपरि कमलानां तव कलाम् ।\nमहापद्माटव्यां मृदितमलमायेन मनसा\nमहान्तः पश्यन्तो दधति परमाह्लादलहरीम् ॥',
          meaning: {
            en: 'Great souls, their minds cleansed of impurity and illusion, behold your subtle form, slender as a streak of lightning, made of sun, moon and fire, seated above the six lotuses in the great lotus-forest, and are filled with waves of supreme joy.',
            kn: 'ಮಿಂಚಿನ ಗೆರೆಯಂತೆ ಸೂಕ್ಷ್ಮವಾದ, ಸೂರ್ಯ, ಚಂದ್ರ, ಅಗ್ನಿಮಯವಾದ, ಆರು ಕಮಲಗಳಿಗಿಂತಲೂ ಮೇಲೆ ಮಹಾಪದ್ಮವನದಲ್ಲಿ ನೆಲೆಸಿರುವ ನಿನ್ನ ಕಲೆಯನ್ನು ಮಲ, ಮಾಯೆಗಳು ತೊಲಗಿದ ಮನಸ್ಸಿನಿಂದ ಕಾಣುವ ಮಹಾತ್ಮರು ಪರಮಾನಂದದ ಅಲೆಗಳನ್ನು ಅನುಭವಿಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 22,
          text: 'भवानि त्वं दासे मयि वितर दृष्टिं सकरुणाम्\nइति स्तोतुं वाञ्छन् कथयति भवानि त्वमिति यः ।\nतदैव त्वं तस्मै दिशसि निजसायुज्यपदवीं\nमुकुन्दब्रह्मेन्द्रस्फुटमुकुटनीराजितपदाम् ॥',
          meaning: {
            en: 'If a devotee only begins, “O Bhavānī, cast your compassionate glance on me, your servant”, saying “bhavāni tvam” (which also means “may I become you”), at that very moment you grant him oneness with you, at whose feet Mukunda, Brahmā and Indra wave the light of their crowns.',
            kn: '“ಭವಾನಿಯೇ, ದಾಸನಾದ ನನ್ನ ಮೇಲೆ ಕರುಣಾದೃಷ್ಟಿಯನ್ನು ಬೀರು” ಎಂದು ಸ್ತುತಿಸಲು ಬಯಸಿ ಯಾರಾದರೂ “ಭವಾನಿ ತ್ವಂ” ಎಂದು ಹೇಳಿದ ಕೂಡಲೇ (ಅದಕ್ಕೆ ‘ನಾನು ನೀನಾಗುವೆ’ ಎಂಬ ಅರ್ಥವೂ ಇದೆ), ಮುಕುಂದ, ಬ್ರಹ್ಮ, ಇಂದ್ರರ ಕಿರೀಟಗಳಿಂದ ನೀರಾಜನಗೊಂಡ ಪಾದಗಳುಳ್ಳ ನಿನ್ನ ಸಾಯುಜ್ಯವನ್ನು ಅವನಿಗೆ ಆಗಲೇ ಕರುಣಿಸುತ್ತೀಯೆ.',
          },
        },
        {
          n: 23,
          text: 'त्वया हृत्वा वामं वपुरपरितृप्तेन मनसा\nशरीरार्धं शम्भोरपरमपि शङ्के हृतमभूत् ।\nयदेतत्त्वद्रूपं सकलमरुणाभं त्रिनयनं\nकुचाभ्यामानम्रं कुटिलशशिचूडालमुकुटम् ॥',
          meaning: {
            en: 'Having taken the left half of Śambhu’s body and still unsatisfied, you seem to have taken the other half as well: for this form of yours is wholly rosy, three-eyed, bowed by the bosom and crowned with the crescent moon.',
            kn: 'ಶಂಭುವಿನ ದೇಹದ ಎಡಭಾಗವನ್ನು ಪಡೆದರೂ ತೃಪ್ತಿಯಾಗದೆ ನೀನು ಉಳಿದ ಅರ್ಧವನ್ನೂ ಪಡೆದುಕೊಂಡಿರುವೆ ಎಂದು ಶಂಕಿಸುತ್ತೇನೆ; ಏಕೆಂದರೆ ನಿನ್ನ ಈ ರೂಪವೆಲ್ಲವೂ ಅರುಣವರ್ಣದ್ದಾಗಿ, ಮೂರು ಕಣ್ಣುಗಳುಳ್ಳದ್ದಾಗಿ, ವಕ್ಷಸ್ಥಳದ ಭಾರದಿಂದ ಬಾಗಿದ್ದಾಗಿ, ಚಂದ್ರಕಲೆಯ ಕಿರೀಟವುಳ್ಳದ್ದಾಗಿದೆ.',
          },
        },
        {
          n: 24,
          text: 'जगत्सूते धाता हरिरवति रुद्रः क्षपयते\nतिरस्कुर्वन्नेतत्स्वमपि वपुरीशस्तिरयति ।\nसदापूर्वः सर्वं तदिदमनुगृह्णाति च शिवः\nतवाज्ञामालम्ब्य क्षणचलितयोर्भ्रूलतिकयोः ॥',
          meaning: {
            en: 'Brahmā creates the world, Hari protects it, Rudra dissolves it; Īśa withdraws all this and even his own form, and Sadāśiva restores it all by his grace: each acts on your command, given by a moment’s movement of your creeper-like brows.',
            kn: 'ಬ್ರಹ್ಮನು ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸುತ್ತಾನೆ, ಹರಿಯು ರಕ್ಷಿಸುತ್ತಾನೆ, ರುದ್ರನು ಲಯಗೊಳಿಸುತ್ತಾನೆ; ಈಶ್ವರನು ಇದೆಲ್ಲವನ್ನೂ ತನ್ನ ದೇಹವನ್ನೂ ಮರೆಮಾಡುತ್ತಾನೆ; ಸದಾಶಿವನು ಇದೆಲ್ಲವನ್ನೂ ಮತ್ತೆ ಅನುಗ್ರಹಿಸುತ್ತಾನೆ; ಇವರೆಲ್ಲರೂ ಕ್ಷಣಕಾಲ ಅಲುಗಾಡುವ ನಿನ್ನ ಹುಬ್ಬುಗಳ ಆಜ್ಞೆಯನ್ನು ಅನುಸರಿಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 25,
          text: 'त्रयाणां देवानां त्रिगुणजनितानां तव शिवे\nभवेत् पूजा पूजा तव चरणयोर्या विरचिता ।\nतथा हि त्वत्पादोद्वहनमणिपीठस्य निकटे\nस्थिता ह्येते शश्वन् मुकुलितकरोत्तंसमकुटाः ॥',
          meaning: {
            en: 'O Śivā, worship offered at your feet is worship of the three gods born of the three guṇas; for they stand always beside the jewelled footstool that bears your feet, their hands joined above their crowns.',
            kn: 'ಶಿವೆಯೇ, ನಿನ್ನ ಪಾದಗಳಿಗೆ ಮಾಡಿದ ಪೂಜೆಯೇ ತ್ರಿಗುಣಗಳಿಂದ ಹುಟ್ಟಿದ ಮೂರು ದೇವತೆಗಳಿಗೂ ಪೂಜೆಯಾಗುತ್ತದೆ; ಏಕೆಂದರೆ ಅವರು ನಿನ್ನ ಪಾದಗಳನ್ನು ಹೊರುವ ಮಣಿಪೀಠದ ಬಳಿ ಕಿರೀಟಗಳ ಮೇಲೆ ಕೈಮುಗಿದು ಸದಾ ನಿಂತಿರುತ್ತಾರೆ.',
          },
        },
        {
          n: 26,
          text: 'विरिञ्चिः पञ्चत्वं व्रजति हरिराप्नोति विरतिं\nविनाशं कीनाशो भजति धनदो याति निधनम् ।\nवितन्द्री माहेन्द्री विततिरपि सम्मीलितदृशा\nमहासंहारेऽस्मिन् विहरति सति त्वत्पतिरसौ ॥',
          meaning: {
            en: 'At the great dissolution Brahmā meets his end, Hari rests, Yama is destroyed, Kubera dies, and even Indra’s tireless hosts close their eyes; but your Lord, O faithful one, still sports, by your power.',
            kn: 'ಮಹಾಪ್ರಳಯದಲ್ಲಿ ಬ್ರಹ್ಮನು ಪಂಚತ್ವವನ್ನು ಹೊಂದುತ್ತಾನೆ, ಹರಿಯು ವಿರಮಿಸುತ್ತಾನೆ, ಯಮನು ನಾಶವಾಗುತ್ತಾನೆ, ಕುಬೇರನು ಮರಣ ಹೊಂದುತ್ತಾನೆ, ದಣಿವರಿಯದ ಇಂದ್ರನ ಪರಿವಾರವೂ ಕಣ್ಣು ಮುಚ್ಚುತ್ತದೆ; ಸತಿಯೇ, ಆಗಲೂ ನಿನ್ನ ಪತಿಯು ನಿನ್ನ ಪ್ರಭಾವದಿಂದ ವಿಹರಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 27,
          text: 'जपो जल्पः शिल्पं सकलमपि मुद्राविरचना\nगतिः प्रादक्षिण्यक्रमणमशनाद्याहुतिविधिः ।\nप्रणामः संवेशः सुखमखिलमात्मार्पणदृशा\nसपर्यापर्यायस्तव भवतु यन्मे विलसितम् ॥',
          meaning: {
            en: 'With the feeling of offering myself to you, may all I do become your worship: my talk your japa, every movement of my hands a mudrā, my walking a circumambulation, my eating an oblation, my lying down a prostration, and all my joys your service.',
            kn: 'ಆತ್ಮಾರ್ಪಣೆಯ ಭಾವದಿಂದ ನಾನು ಮಾಡುವುದೆಲ್ಲವೂ ನಿನ್ನ ಪೂಜೆಯಾಗಲಿ: ನನ್ನ ಮಾತೆಲ್ಲ ಜಪವಾಗಲಿ, ಕೈಯ ಚಲನೆಗಳೆಲ್ಲ ಮುದ್ರೆಗಳಾಗಲಿ, ನಡಿಗೆ ಪ್ರದಕ್ಷಿಣೆಯಾಗಲಿ, ಊಟ ಆಹುತಿಯಾಗಲಿ, ಮಲಗುವುದು ನಮಸ್ಕಾರವಾಗಲಿ, ನನ್ನ ಎಲ್ಲ ಸುಖಗಳೂ ನಿನ್ನ ಸೇವೆಯಾಗಲಿ.',
          },
        },
        {
          n: 28,
          text: 'सुधामप्यास्वाद्य प्रतिभयजरामृत्युहरिणीं\nविपद्यन्ते विश्वे विधिशतमखाद्या दिविषदः ।\nकरालं यत्क्ष्वेलं कबलितवतः कालकलना\nन शम्भोस्तन्मूलं तव जननि ताटङ्कमहिमा ॥',
          meaning: {
            en: 'Even after tasting the nectar that removes fearful old age and death, Brahmā, Indra and the other gods perish; yet Śambhu, who swallowed the dreadful poison, is not touched by time. The reason, O Mother, is the power of your ear-ornaments, the sign of a wife whose husband lives.',
            kn: 'ಭಯಂಕರವಾದ ಮುಪ್ಪು, ಸಾವುಗಳನ್ನು ಹೋಗಲಾಡಿಸುವ ಅಮೃತವನ್ನು ಸವಿದರೂ ಬ್ರಹ್ಮ, ಇಂದ್ರ ಮೊದಲಾದ ದೇವತೆಗಳು ನಾಶವಾಗುತ್ತಾರೆ; ಘೋರ ವಿಷವನ್ನು ನುಂಗಿದ ಶಂಭುವಿಗೆ ಕಾಲನ ಬಾಧೆಯಿಲ್ಲ. ತಾಯೇ, ಅದಕ್ಕೆ ಕಾರಣ ಸೌಮಂಗಲ್ಯದ ಸಂಕೇತವಾದ ನಿನ್ನ ಕಿವಿಯೋಲೆಗಳ ಮಹಿಮೆಯೇ.',
          },
        },
        {
          n: 29,
          text: 'किरीटं वैरिञ्चं परिहर पुरः कैटभभिदः\nकठोरे कोटीरे स्खलसि जहि जम्भारिमुकुटम् ।\nप्रणम्रेष्वेतेषु प्रसभमुपयातस्य भवनं\nभवस्याभ्युत्थाने तव परिजनोक्तिर्विजयते ॥',
          meaning: {
            en: 'As you rise in haste to greet Śiva arriving at your palace, your attendants call out over the gods bowed before you: “Mind Brahmā’s crown in front! You will trip on the hard crown of Viṣṇu! Step past Indra’s crown!” Those words are glorious.',
            kn: 'ಮನೆಗೆ ಬರುತ್ತಿರುವ ಶಿವನನ್ನು ಸ್ವಾಗತಿಸಲು ನೀನು ಆತುರದಿಂದ ಎದ್ದಾಗ, ನಿನ್ನ ಮುಂದೆ ನಮಸ್ಕರಿಸಿ ಬಿದ್ದಿರುವ ದೇವತೆಗಳನ್ನು ಕಂಡು ಪರಿಚಾರಿಕೆಯರು “ಮುಂದಿರುವ ಬ್ರಹ್ಮನ ಕಿರೀಟವನ್ನು ತಪ್ಪಿಸು, ವಿಷ್ಣುವಿನ ಗಟ್ಟಿಯಾದ ಕಿರೀಟಕ್ಕೆ ಎಡವುವೆ, ಇಂದ್ರನ ಕಿರೀಟವನ್ನು ಬಿಟ್ಟು ನಡೆ” ಎಂದು ಹೇಳುವ ಮಾತುಗಳು ವಿಜಯಶಾಲಿಯಾಗಿವೆ.',
          },
        },
        {
          n: 30,
          text: 'स्वदेहोद्भूताभिर्घृणिभिरणिमाद्याभिरभितो\nनिषेव्ये नित्ये त्वामहमिति सदा भावयति यः ।\nकिमाश्चर्यं तस्य त्रिनयनसमृद्धिं तृणयतो\nमहासंवर्ताग्निर्विरचयति नीराजनविधिम् ॥',
          meaning: {
            en: 'Whoever meditates always, “I am you”, on you, the eternal one served on every side by Aṇimā and the other powers that are rays of your own body, counts even Śiva’s riches as straw; what wonder if the fire of the great dissolution waves the ārati for him?',
            kn: 'ನಿನ್ನ ದೇಹದಿಂದಲೇ ಹೊರಹೊಮ್ಮಿದ ಕಿರಣಗಳಾದ ಅಣಿಮಾದಿ ಸಿದ್ಧಿಗಳಿಂದ ಸುತ್ತಲೂ ಸೇವಿಸಲ್ಪಡುವ ನಿತ್ಯಳೇ, “ನಾನೇ ನೀನು” ಎಂದು ಸದಾ ಧ್ಯಾನಿಸುವವನು ಶಿವನ ಸಂಪತ್ತನ್ನೂ ಹುಲ್ಲಿನಂತೆ ಕಾಣುತ್ತಾನೆ; ಅವನಿಗೆ ಪ್ರಳಯಾಗ್ನಿಯೇ ನೀರಾಜನ ಮಾಡಿದರೆ ಆಶ್ಚರ್ಯವೇನು?',
          },
        },
        {
          n: 31,
          text: 'चतुष्षष्ट्या तन्त्रैः सकलमतिसन्धाय भुवनं\nस्थितस्तत्तत्सिद्धिप्रसवपरतन्त्रैः पशुपतिः ।\nपुनस्त्वन्निर्बन्धादखिलपुरुषार्थैकघटना-\nस्वतन्त्रं ते तन्त्रं क्षितितलमवातीतरदिदम् ॥',
          meaning: {
            en: 'Paśupati kept the whole world busy with sixty-four tantras, each aimed at its own particular powers, and rested; then, at your insistence, he brought down to earth your own independent tantra, which alone brings together all the goals of life.',
            kn: 'ಪಶುಪತಿಯು ಆಯಾ ಸಿದ್ಧಿಗಳನ್ನೇ ಗುರಿಯಾಗಿಟ್ಟ ಅರವತ್ತನಾಲ್ಕು ತಂತ್ರಗಳಿಂದ ಜಗತ್ತನ್ನು ತೊಡಗಿಸಿ ಸುಮ್ಮನಿದ್ದನು; ನಂತರ ನಿನ್ನ ಒತ್ತಾಯದಿಂದ ಎಲ್ಲ ಪುರುಷಾರ್ಥಗಳನ್ನೂ ಒಟ್ಟಿಗೆ ಕೊಡುವ ಸ್ವತಂತ್ರವಾದ ನಿನ್ನ ತಂತ್ರವನ್ನು ಭೂಮಿಗೆ ಇಳಿಸಿದನು.',
          },
        },
        {
          n: 32,
          text: 'शिवः शक्तिः कामः क्षितिरथ रविः शीतकिरणः\nस्मरो हंसः शक्रस्तदनु च परामारहरयः ।\nअमी हृल्लेखाभिस्तिसृभिरवसानेषु घटिता\nभजन्ते वर्णास्ते तव जननि नामावयवताम् ॥',
          meaning: {
            en: 'The letters signified by Śiva, Śakti, Kāma, earth, sun, moon and the rest, in three groups each closed by the syllable hṛllekhā, become the parts of your name, O Mother. (The verse is a coded form of the Goddess’s fifteen-syllabled mantra, which is learnt from a guru.)',
            kn: 'ಶಿವ, ಶಕ್ತಿ, ಕಾಮ, ಭೂಮಿ, ಸೂರ್ಯ, ಚಂದ್ರ ಮೊದಲಾದವುಗಳನ್ನು ಸೂಚಿಸುವ ಅಕ್ಷರಗಳು, ಮೂರು ಗುಂಪುಗಳಾಗಿ ಪ್ರತಿ ಗುಂಪಿನ ಕೊನೆಯಲ್ಲಿ ಹೃಲ್ಲೇಖಾ ಬೀಜದೊಡನೆ ಸೇರಿ, ತಾಯೇ, ನಿನ್ನ ನಾಮದ ಅವಯವಗಳಾಗುತ್ತವೆ. (ಈ ಶ್ಲೋಕವು ಗುರುಮುಖದಿಂದ ಕಲಿಯಬೇಕಾದ ದೇವಿಯ ಪಂಚದಶಾಕ್ಷರೀ ಮಂತ್ರವನ್ನು ಸಂಕೇತರೂಪದಲ್ಲಿ ಸೂಚಿಸುತ್ತದೆ.)',
          },
        },
        {
          n: 33,
          text: 'स्मरं योनिं लक्ष्मीं त्रितयमिदमादौ तव मनोः\nनिधायैके नित्ये निरवधिमहाभोगरसिकाः ।\nभजन्ति त्वां चिन्तामणिगुणनिबद्धाक्षवलयाः\nशिवाग्नौ जुह्वन्तः सुरभिघृतधाराहुतिशतैः ॥',
          meaning: {
            en: 'Some, devoted to endless bliss, place three seed-syllables before your mantra and worship you with rosaries of wish-gems, offering hundreds of oblations of fragrant ghee into the fire of Śiva.',
            kn: 'ನಿರಂತರ ಆನಂದದಲ್ಲಿ ಆಸಕ್ತರಾದ ಕೆಲವರು ಮೂರು ಬೀಜಾಕ್ಷರಗಳನ್ನು ನಿನ್ನ ಮಂತ್ರದ ಮೊದಲಿಗೆ ಇಟ್ಟು, ಚಿಂತಾಮಣಿಗಳ ಜಪಮಾಲೆಗಳನ್ನು ಹಿಡಿದು, ಶಿವಾಗ್ನಿಯಲ್ಲಿ ಸುಗಂಧಿತ ತುಪ್ಪದ ನೂರಾರು ಆಹುತಿಗಳನ್ನು ಅರ್ಪಿಸುತ್ತಾ ನಿನ್ನನ್ನು ಭಜಿಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 34,
          text: 'शरीरं त्वं शम्भोः शशिमिहिरवक्षोरुहयुगं\nतवात्मानं मन्ये भगवति नवात्मानमनघम् ।\nअतः शेषः शेषीत्ययमुभयसाधारणतया\nस्थितः सम्बन्धो वां समरसपरानन्दपरयोः ॥',
          meaning: {
            en: 'O Bhagavatī, you are the body of Śambhu, with sun and moon as your breasts, and I think His faultless ninefold self is your self. So the bond of part and whole holds equally between you both, one in supreme bliss.',
            kn: 'ಭಗವತಿಯೇ, ಸೂರ್ಯಚಂದ್ರರೇ ಸ್ತನಗಳಾಗಿರುವ ನೀನೇ ಶಂಭುವಿನ ಶರೀರ; ದೋಷರಹಿತನಾದ ನವಾತ್ಮಕನಾದ ಆತನೇ ನಿನ್ನ ಆತ್ಮ ಎಂದು ಭಾವಿಸುತ್ತೇನೆ. ಆದ್ದರಿಂದ ಅಂಗ-ಅಂಗಿ ಸಂಬಂಧವು ಪರಮಾನಂದದಲ್ಲಿ ಒಂದಾದ ನಿಮ್ಮಿಬ್ಬರಿಗೂ ಸಮಾನವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 35,
          text: 'मनस्त्वं व्योम त्वं मरुदसि मरुत्सारथिरसि\nत्वमापस्त्वं भूमिस्त्वयि परिणतायां न हि परम् ।\nत्वमेव स्वात्मानं परिणमयितुं विश्ववपुषा\nचिदानन्दाकारं शिवयुवति भावेन बिभृषे ॥',
          meaning: {
            en: 'You are mind, you are space, you are air, you are fire, you are water, you are earth; when you have become all this, nothing is left beyond you. To transform yourself into the universe, you yourself take on the form of consciousness and bliss, O consort of Śiva.',
            kn: 'ಮನಸ್ಸೂ ನೀನೇ, ಆಕಾಶವೂ ನೀನೇ, ವಾಯುವೂ ನೀನೇ, ಅಗ್ನಿಯೂ ನೀನೇ, ಜಲವೂ ನೀನೇ, ಭೂಮಿಯೂ ನೀನೇ; ನೀನು ಹೀಗೆ ಪರಿಣಮಿಸಿದಾಗ ನಿನಗಿಂತ ಬೇರೆ ಏನೂ ಇಲ್ಲ. ಶಿವಯುವತಿಯೇ, ನಿನ್ನನ್ನೇ ವಿಶ್ವರೂಪವಾಗಿ ಪರಿಣಮಿಸಲು ನೀನೇ ಚಿದಾನಂದ ರೂಪವನ್ನು ಧರಿಸುತ್ತೀಯೆ.',
          },
        },
        {
          n: 36,
          text: 'तवाज्ञाचक्रस्थं तपनशशिकोटिद्युतिधरं\nपरं शम्भुं वन्दे परिमिलितपार्श्वं परचिता ।\nयमाराध्यन् भक्त्या रविशशिशुचीनामविषये\nनिरालोकेऽलोके निवसति हि भालोकभवने ॥',
          meaning: {
            en: 'I bow to the supreme Śambhu in your ājñā centre, shining like millions of suns and moons, joined at His side by the supreme Consciousness. Whoever worships Him with devotion dwells in that self-luminous realm beyond the reach of sun, moon and fire.',
            kn: 'ನಿನ್ನ ಆಜ್ಞಾಚಕ್ರದಲ್ಲಿರುವ, ಕೋಟಿ ಸೂರ್ಯಚಂದ್ರರ ಕಾಂತಿಯುಳ್ಳ, ಪರಚಿತ್‌ಶಕ್ತಿಯಿಂದ ಪಾರ್ಶ್ವದಲ್ಲಿ ಕೂಡಿದ ಪರಶಂಭುವನ್ನು ವಂದಿಸುತ್ತೇನೆ. ಆತನನ್ನು ಭಕ್ತಿಯಿಂದ ಆರಾಧಿಸುವವನು ಸೂರ್ಯ, ಚಂದ್ರ, ಅಗ್ನಿಗಳಿಗೆ ನಿಲುಕದ ಸ್ವಯಂಪ್ರಕಾಶ ಲೋಕದಲ್ಲಿ ನೆಲೆಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 37,
          text: 'विशुद्धौ ते शुद्धस्फटिकविशदं व्योमजनकं\nशिवं सेवे देवीमपि शिवसमानव्यवसिताम् ।\nययोः कान्त्या यान्त्या शशिकिरणसारूप्यसरणिं\nविधूतान्तर्ध्वान्ता विलसति चकोरीव जगती ॥',
          meaning: {
            en: 'In your viśuddhi centre I worship Śiva, clear as pure crystal, source of space, and the Goddess equal to Him in resolve; by their moonlike radiance the world, freed of inner darkness, rejoices like the cakorī bird.',
            kn: 'ನಿನ್ನ ವಿಶುದ್ಧಿಚಕ್ರದಲ್ಲಿ ಶುದ್ಧ ಸ್ಫಟಿಕದಂತೆ ನಿರ್ಮಲನಾದ, ಆಕಾಶತತ್ತ್ವಕ್ಕೆ ಕಾರಣನಾದ ಶಿವನನ್ನೂ ಆತನಿಗೆ ಸಮಾನ ನಿಶ್ಚಯವುಳ್ಳ ದೇವಿಯನ್ನೂ ಸೇವಿಸುತ್ತೇನೆ. ಅವರ ಬೆಳದಿಂಗಳಿನಂತಹ ಕಾಂತಿಯಿಂದ ಒಳಗಿನ ಕತ್ತಲು ತೊಲಗಿ ಜಗತ್ತು ಚಕೋರಿಯಂತೆ ಸಂತೋಷಪಡುತ್ತದೆ.',
          },
        },
        {
          n: 38,
          text: 'समुन्मीलत् संवित् कमलमकरन्दैकरसिकं\nभजे हंसद्वन्द्वं किमपि महतां मानसचरम् ।\nयदालापादष्टादशगुणितविद्यापरिणतिः\nयदादत्ते दोषाद् गुणमखिलमद्भ्यः पय इव ॥',
          meaning: {
            en: 'I worship that wondrous pair of swans who delight only in the honey of the blossoming lotus of knowledge and move in the minds of the great; from their converse come the eighteen branches of learning, and, as swans take milk from water, they take the good from the faulty.',
            kn: 'ಅರಳುತ್ತಿರುವ ಜ್ಞಾನಕಮಲದ ಮಕರಂದದಲ್ಲೇ ಆಸಕ್ತವಾದ, ಮಹಾತ್ಮರ ಮನಸ್ಸುಗಳಲ್ಲಿ ಸಂಚರಿಸುವ ಅಪೂರ್ವವಾದ ಹಂಸದಂಪತಿಯನ್ನು ಭಜಿಸುತ್ತೇನೆ; ಅವುಗಳ ಸಂಭಾಷಣೆಯಿಂದ ಹದಿನೆಂಟು ವಿದ್ಯೆಗಳು ಹುಟ್ಟುತ್ತವೆ; ಹಂಸವು ನೀರಿನಿಂದ ಹಾಲನ್ನು ಬೇರ್ಪಡಿಸುವಂತೆ ಅವು ದೋಷದಿಂದ ಗುಣವನ್ನು ಆರಿಸಿಕೊಳ್ಳುತ್ತವೆ.',
          },
        },
        {
          n: 39,
          text: 'तव स्वाधिष्ठाने हुतवहमधिष्ठाय निरतं\nतमीडे संवर्तं जननि महतीं तां च समयाम् ।\nयदालोके लोकान् दहति महति क्रोधकलिते\nदयार्द्रा या दृष्टिः शिशिरमुपचारं रचयति ॥',
          meaning: {
            en: 'In your svādhiṣṭhāna I praise the fire of dissolution dwelling there, and you, the great Samayā, with Him; when His angry gaze burns the worlds, your glance, moist with compassion, brings them cooling relief.',
            kn: 'ನಿನ್ನ ಸ್ವಾಧಿಷ್ಠಾನದಲ್ಲಿ ನೆಲೆಸಿರುವ ಪ್ರಳಯಾಗ್ನಿರೂಪನಾದ ಶಿವನನ್ನೂ, ತಾಯೇ, ಮಹತಿಯಾದ ಸಮಯಾದೇವಿಯಾದ ನಿನ್ನನ್ನೂ ಸ್ತುತಿಸುತ್ತೇನೆ. ಆತನ ಕೋಪದ ನೋಟವು ಲೋಕಗಳನ್ನು ಸುಡುವಾಗ ನಿನ್ನ ದಯಾರ್ದ್ರ ದೃಷ್ಟಿಯು ಅವಕ್ಕೆ ತಂಪಿನ ಉಪಚಾರ ಮಾಡುತ್ತದೆ.',
          },
        },
        {
          n: 40,
          text: 'तटित्त्वन्तं शक्त्या तिमिरपरिपन्थिस्फुरणया\nस्फुरन्नानारत्नाभरणपरिणद्धेन्द्रधनुषम् ।\nतव श्यामं मेघं कमपि मणिपूरैकशरणं\nनिषेवे वर्षन्तं हरमिहिरतप्तं त्रिभुवनम् ॥',
          meaning: {
            en: 'I worship that wondrous dark cloud dwelling in your maṇipūra, with you as its lightning that dispels darkness, bright with a rainbow of many jewelled ornaments, raining on the three worlds scorched by the sun-like fire of Hara.',
            kn: 'ಕತ್ತಲನ್ನು ಹೋಗಲಾಡಿಸುವ ಮಿಂಚಿನಂತೆ ನಿನ್ನ ಶಕ್ತಿಯಿಂದ ಕೂಡಿದ, ನಾನಾ ರತ್ನಾಭರಣಗಳಿಂದ ಕಾಮನಬಿಲ್ಲಿನಂತೆ ಹೊಳೆಯುವ, ಮಣಿಪೂರದಲ್ಲೇ ನೆಲೆಸಿರುವ ಅಪೂರ್ವವಾದ ಕಪ್ಪು ಮೋಡವನ್ನು ಸೇವಿಸುತ್ತೇನೆ; ಅದು ಹರನ ಸೂರ್ಯಸಮಾನ ಅಗ್ನಿಯಿಂದ ಬೆಂದ ಮೂರು ಲೋಕಗಳ ಮೇಲೆ ಮಳೆಗರೆಯುತ್ತದೆ.',
          },
        },
        {
          n: 41,
          text: 'तवाधारे मूले सह समयया लास्यपरया\nनवात्मानं मन्ये नवरसमहाताण्डवनटम् ।\nउभाभ्यामेताभ्यामुदयविधिमुद्दिश्य दयया\nसनाथाभ्यां जज्ञे जनकजननीमज्जगदिदम् ॥',
          meaning: {
            en: 'In your mūlādhāra I contemplate the ninefold Lord, dancing the great Tāṇḍava full of the nine rasas, together with you, Samayā, intent on the gentle Lāsya dance. This world has these two as father and mother, who joined in compassion to bring it forth anew.',
            kn: 'ನಿನ್ನ ಮೂಲಾಧಾರದಲ್ಲಿ ಲಾಸ್ಯನೃತ್ಯದಲ್ಲಿ ತೊಡಗಿರುವ ಸಮಯಾದೇವಿಯಾದ ನಿನ್ನೊಡನೆ ನವರಸಭರಿತ ಮಹಾತಾಂಡವವನ್ನಾಡುವ ನವಾತ್ಮಕನಾದ ಶಿವನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇನೆ. ಮತ್ತೆ ಸೃಷ್ಟಿಸುವ ಉದ್ದೇಶದಿಂದ ದಯೆಯಿಂದ ಒಂದಾದ ಈ ಇಬ್ಬರನ್ನು ತಂದೆತಾಯಿಯಾಗಿ ಪಡೆದು ಈ ಜಗತ್ತು ಹುಟ್ಟಿತು.',
          },
        },
      ],
    },
    {
      title: 'सौन्दर्यलहरी',
      titleEn: 'Saundarya Lahari (42–100)',
      verses: [
        {
          n: 42,
          text: 'गतैर्माणिक्यत्वं गगनमणिभिः सान्द्रघटितं\nकिरीटं ते हैमं हिमगिरिसुते कीर्तयति यः ।\nस नीडेयच्छायाच्छुरणशबलं चन्द्रशकलं\nधनुः शौनासीरं किमिति न निबध्नाति धिषणाम् ॥',
          meaning: {
            en: 'Whoever describes your golden crown, O daughter of the snow mountain, thickly set with the suns become rubies, will surely take the crescent moon on it, dappled by the gems’ many-coloured light, for Indra’s rainbow.',
            kn: 'ಹಿಮಗಿರಿಸುತೆಯೇ, ಮಾಣಿಕ್ಯಗಳಾಗಿ ಬದಲಾದ ಸೂರ್ಯರಿಂದ ದಟ್ಟವಾಗಿ ಕೆತ್ತಲ್ಪಟ್ಟ ನಿನ್ನ ಚಿನ್ನದ ಕಿರೀಟವನ್ನು ವರ್ಣಿಸುವವನು, ಆ ರತ್ನಗಳ ಬಣ್ಣಬಣ್ಣದ ಕಾಂತಿಯಿಂದ ಮಿಶ್ರವಾದ ಅದರ ಮೇಲಿನ ಚಂದ್ರಕಲೆಯನ್ನು ಇಂದ್ರಧನುಸ್ಸೆಂದೇ ಭಾವಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 43,
          text: 'धुनोतु ध्वान्तं नस्तुलितदलितेन्दीवरवनं\nघनस्निग्धश्लक्ष्णं चिकुरनिकुरम्बं तव शिवे ।\nयदीयं सौरभ्यं सहजमुपलब्धुं सुमनसो\nवसन्त्यस्मिन् मन्ये वलमथनवाटीविटपिनाम् ॥',
          meaning: {
            en: 'May your thick, glossy, soft mass of hair, O Śivā, like a grove of opened blue lotuses, dispel our darkness. I think the flowers of Indra’s garden dwell in it to gain its natural fragrance.',
            kn: 'ಶಿವೆಯೇ, ಅರಳಿದ ನೀಲಕಮಲಗಳ ವನದಂತಿರುವ, ದಟ್ಟವಾದ, ಹೊಳಪಿನ, ಮೃದುವಾದ ನಿನ್ನ ಕೇಶರಾಶಿಯು ನಮ್ಮ ಅಜ್ಞಾನದ ಕತ್ತಲನ್ನು ಹೋಗಲಾಡಿಸಲಿ. ಅದರ ಸಹಜ ಸುಗಂಧವನ್ನು ಪಡೆಯಲೆಂದೇ ಇಂದ್ರನ ಉದ್ಯಾನದ ಹೂವುಗಳು ಅದರಲ್ಲಿ ನೆಲೆಸಿವೆ ಎಂದು ಭಾವಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 44,
          text: 'तनोतु क्षेमं नस्तव वदनसौन्दर्यलहरी-\nपरीवाहस्रोतःसरणिरिव सीमन्तसरणिः ।\nवहन्ती सिन्दूरं प्रबलकबरीभारतिमिर-\nद्विषां बृन्दैर्बन्दीकृतमिव नवीनार्ककिरणम् ॥',
          meaning: {
            en: 'May the parting of your hair bring us well-being: it is like a channel for the overflowing flood of your face’s beauty, and the vermilion in it is like the young sun’s rays held captive by the dark host of your thick braids.',
            kn: 'ನಿನ್ನ ಮುಖಸೌಂದರ್ಯದ ಪ್ರವಾಹವು ಹರಿಯುವ ಕಾಲುವೆಯಂತಿರುವ, ದಟ್ಟ ಕೇಶರಾಶಿಯೆಂಬ ಕತ್ತಲೆಯ ಶತ್ರುಗಳಿಂದ ಸೆರೆಹಿಡಿಯಲ್ಪಟ್ಟ ಎಳೆಸೂರ್ಯನ ಕಿರಣಗಳಂತಿರುವ ಸಿಂಧೂರವನ್ನು ಧರಿಸಿದ ನಿನ್ನ ಬೈತಲೆಯು ನಮಗೆ ಕ್ಷೇಮವನ್ನುಂಟುಮಾಡಲಿ.',
          },
        },
        {
          n: 45,
          text: 'अरालैः स्वाभाव्यादलिकलभसश्रीभिरलकैः\nपरीतं ते वक्त्रं परिहसति पङ्केरुहरुचिम् ।\nदरस्मेरे यस्मिन् दशनरुचिकिञ्जल्करुचिरे\nसुगन्धौ माद्यन्ति स्मरदहनचक्षुर्मधुलिहः ॥',
          meaning: {
            en: 'Your face, framed by naturally curling locks dark as young bees, mocks the beauty of the lotus; in that gently smiling, fragrant face, lovely with the filaments of your shining teeth, the bees that are the eyes of Śiva, burner of Kāma, grow drunk with delight.',
            kn: 'ಸ್ವಾಭಾವಿಕವಾಗಿ ಗುಂಗುರಾದ, ಮರಿದುಂಬಿಗಳಂತೆ ಕಪ್ಪಾದ ಮುಂಗುರುಳುಗಳಿಂದ ಆವೃತವಾದ ನಿನ್ನ ಮುಖವು ಕಮಲದ ಸೊಬಗನ್ನು ಅಣಕಿಸುತ್ತದೆ; ಮಂದಹಾಸದಿಂದ ಕೂಡಿದ, ಹಲ್ಲುಗಳ ಕಾಂತಿಯೆಂಬ ಕೇಸರಗಳಿಂದ ಸುಂದರವಾದ, ಸುಗಂಧಭರಿತವಾದ ಆ ಮುಖದಲ್ಲಿ ಮನ್ಮಥನನ್ನು ಸುಟ್ಟ ಶಿವನ ಕಣ್ಣುಗಳೆಂಬ ದುಂಬಿಗಳು ಮತ್ತೇರುತ್ತವೆ.',
          },
        },
        {
          n: 46,
          text: 'ललाटं लावण्यद्युतिविमलमाभाति तव यत्\nद्वितीयं तन्मन्ये मकुटघटितं चन्द्रशकलम् ।\nविपर्यासन्यासादुभयमपि सम्भूय च मिथः\nसुधालेपस्यूतिः परिणमति राकाहिमकरः ॥',
          meaning: {
            en: 'Your forehead, pure with the lustre of beauty, I take to be a second crescent moon beside the one in your crown; set together the other way round, the two would make the full moon, joined by a coat of nectar.',
            kn: 'ಲಾವಣ್ಯದ ಕಾಂತಿಯಿಂದ ನಿರ್ಮಲವಾಗಿ ಹೊಳೆಯುವ ನಿನ್ನ ಹಣೆಯನ್ನು ಕಿರೀಟದ ಚಂದ್ರಕಲೆಗೆ ಎರಡನೆಯ ಚಂದ್ರಕಲೆಯೆಂದು ಭಾವಿಸುತ್ತೇನೆ; ತಿರುಗಿಸಿ ಜೋಡಿಸಿದರೆ ಇವೆರಡೂ ಸೇರಿ ಅಮೃತಲೇಪನದಿಂದ ಅಂಟಿಕೊಂಡ ಪೂರ್ಣಚಂದ್ರನಾಗುತ್ತವೆ.',
          },
        },
        {
          n: 47,
          text: 'भ्रुवौ भुग्ने किञ्चिद् भुवनभयभङ्गव्यसनिनि\nत्वदीये नेत्राभ्यां मधुकररुचिभ्यां धृतगुणम् ।\nधनुर्मन्ये सव्येतरकरगृहीतं रतिपतेः\nप्रकोष्ठे मुष्टौ च स्थगयति निगूढान्तरमुमे ॥',
          meaning: {
            en: 'O Umā, ever intent on ending the fear of the worlds, your slightly curved brows, strung with your bee-dark eyes, seem to me the bow of Kāma held in his left hand, its middle hidden by his wrist and fist.',
            kn: 'ಉಮೆಯೇ, ಲೋಕಗಳ ಭಯವನ್ನು ಹೋಗಲಾಡಿಸುವುದರಲ್ಲೇ ಆಸಕ್ತಳೇ, ಸ್ವಲ್ಪ ಬಾಗಿದ, ದುಂಬಿಗಳಂತೆ ಕಪ್ಪಾದ ಕಣ್ಣುಗಳೆಂಬ ಹೆದೆಯುಳ್ಳ ನಿನ್ನ ಹುಬ್ಬುಗಳು, ಎಡಗೈಯಲ್ಲಿ ಹಿಡಿದು ಮಧ್ಯಭಾಗವು ಮುಂಗೈ ಮತ್ತು ಮುಷ್ಟಿಯಿಂದ ಮರೆಯಾದ ಮನ್ಮಥನ ಬಿಲ್ಲಿನಂತೆ ನನಗೆ ತೋರುತ್ತವೆ.',
          },
        },
        {
          n: 48,
          text: 'अहः सूते सव्यं तव नयनमर्कात्मकतया\nत्रियामां वामं ते सृजति रजनीनायकतया ।\nतृतीया ते दृष्टिर्दरदलितहेमाम्बुजरुचिः\nसमाधत्ते सन्ध्यां दिवसनिशयोरन्तरचरीम् ॥',
          meaning: {
            en: 'Your right eye, being the sun, brings forth the day; your left eye, being the moon, brings forth the night; and your third eye, like a half-opened golden lotus, brings forth the twilight that lies between them.',
            kn: 'ಸೂರ್ಯಸ್ವರೂಪವಾದ ನಿನ್ನ ಬಲಗಣ್ಣು ಹಗಲನ್ನು ಹುಟ್ಟಿಸುತ್ತದೆ; ಚಂದ್ರಸ್ವರೂಪವಾದ ಎಡಗಣ್ಣು ರಾತ್ರಿಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ; ಅರೆಅರಳಿದ ಚಿನ್ನದ ಕಮಲದಂತಿರುವ ನಿನ್ನ ಮೂರನೆಯ ಕಣ್ಣು ಹಗಲು ರಾತ್ರಿಗಳ ನಡುವಿನ ಸಂಧ್ಯೆಯನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.',
          },
        },
        {
          n: 49,
          text: 'विशाला कल्याणी स्फुटरुचिरयोध्या कुवलयैः\nकृपाधाराधारा किमपि मधुरा भोगवतिका ।\nअवन्ती दृष्टिस्ते बहुनगरविस्तारविजया\nध्रुवं तत्तन्नामव्यवहरणयोग्या विजयते ॥',
          meaning: {
            en: 'Your glance is wide (Viśālā), auspicious (Kalyāṇī), unconquered by blue lilies (Ayodhyā), a stream of grace (Dhārā), sweet (Madhurā), rich in delight (Bhogavatī), protecting (Avantī) and victorious (Vijayā): surely it deserves the names of all these cities.',
            kn: 'ನಿನ್ನ ದೃಷ್ಟಿಯು ವಿಶಾಲವಾದದ್ದು (ವಿಶಾಲಾ), ಮಂಗಳಕರವಾದದ್ದು (ಕಲ್ಯಾಣೀ), ನೀಲಕಮಲಗಳಿಗೂ ಸೋಲದದ್ದು (ಅಯೋಧ್ಯಾ), ಕೃಪೆಯ ಧಾರೆ (ಧಾರಾ), ಮಧುರವಾದದ್ದು (ಮಧುರಾ), ಆನಂದಭರಿತವಾದದ್ದು (ಭೋಗವತೀ), ರಕ್ಷಿಸುವಂಥದ್ದು (ಅವಂತೀ), ವಿಜಯಶಾಲಿಯಾದದ್ದು (ವಿಜಯಾ); ಆದ್ದರಿಂದ ಆ ಎಲ್ಲ ನಗರಗಳ ಹೆಸರುಗಳಿಗೂ ಅದು ಯೋಗ್ಯವಾಗಿದೆ.',
          },
        },
        {
          n: 50,
          text: 'कवीनां सन्दर्भस्तबकमकरन्दैकरसिकं\nकटाक्षव्याक्षेपभ्रमरकलभौ कर्णयुगलम् ।\nअमुञ्चन्तौ दृष्ट्वा तव नवरसास्वादतरलौ\nअसूयासंसर्गादलिकनयनं किञ्चिदरुणम् ॥',
          meaning: {
            en: 'Seeing the two young bees of your side-glances clinging to your ears, which delight in the honey of poets’ verses, eager to taste the nine rasas, your third eye has turned a little red, as if with jealousy.',
            kn: 'ಕವಿಗಳ ರಚನೆಗಳೆಂಬ ಹೂಗೊಂಚಲುಗಳ ಮಕರಂದದಲ್ಲೇ ಆಸಕ್ತವಾದ ನಿನ್ನ ಕಿವಿಗಳನ್ನು, ನವರಸಗಳ ಸವಿಗಾಗಿ ಆತುರಪಡುವ ಕಡೆಗಣ್ಣ ನೋಟಗಳೆಂಬ ಎರಡು ಮರಿದುಂಬಿಗಳು ಬಿಡದೆ ಮುತ್ತಿರುವುದನ್ನು ಕಂಡು, ಅಸೂಯೆಯಿಂದಲೋ ಎಂಬಂತೆ ನಿನ್ನ ಹಣೆಗಣ್ಣು ಸ್ವಲ್ಪ ಕೆಂಪಾಗಿದೆ.',
          },
        },
        {
          n: 51,
          text: 'शिवे शृङ्गारार्द्रा तदितरजने कुत्सनपरा\nसरोषा गङ्गायां गिरिशचरिते विस्मयवती ।\nहराहिभ्यो भीता सरसिरुहसौभाग्यजननी\nसखीषु स्मेरा ते मयि जननि दृष्टिः सकरुणा ॥',
          meaning: {
            en: 'Your glance is tender with love towards Śiva, scornful towards others, angry at Gaṅgā, full of wonder at Śiva’s deeds, afraid of His serpents, lovelier than the lotus, smiling on your companions, and full of compassion towards me, O Mother.',
            kn: 'ತಾಯೇ, ನಿನ್ನ ದೃಷ್ಟಿಯು ಶಿವನ ಮೇಲೆ ಪ್ರೇಮದಿಂದ ಆರ್ದ್ರವಾಗಿದೆ, ಇತರರ ಬಗ್ಗೆ ತಿರಸ್ಕಾರದಿಂದಿದೆ, ಗಂಗೆಯ ಮೇಲೆ ರೋಷದಿಂದಿದೆ, ಶಿವನ ಚರಿತ್ರೆಯಲ್ಲಿ ವಿಸ್ಮಯದಿಂದಿದೆ, ಶಿವನ ಸರ್ಪಗಳನ್ನು ಕಂಡು ಭಯದಿಂದಿದೆ, ಕಮಲದ ಸೊಬಗನ್ನೂ ಮೀರಿಸುತ್ತದೆ, ಸಖಿಯರತ್ತ ಮುಗುಳ್ನಗುತ್ತದೆ, ನನ್ನ ಮೇಲೆ ಕರುಣೆಯಿಂದ ಕೂಡಿದೆ.',
          },
        },
        {
          n: 52,
          text: 'गते कर्णाभ्यर्णं गरुत इव पक्ष्माणि दधती\nपुरां भेत्तुश्चित्तप्रशमरसविद्रावणफले ।\nइमे नेत्रे गोत्राधरपतिकुलोत्तंसकलिके\nतवाकर्णाकृष्टस्मरशरविलासं कलयतः ॥',
          meaning: {
            en: 'O crest-bud of the mountain king’s race, your eyes reach to your ears and bear lashes like the feathers of an arrow; they break the calm of Tripura’s destroyer and play like Kāma’s arrows drawn back to the ear.',
            kn: 'ಪರ್ವತರಾಜನ ಕುಲಕ್ಕೆ ಶಿರೋಭೂಷಣದ ಮೊಗ್ಗಿನಂತಿರುವವಳೇ, ಕಿವಿಗಳವರೆಗೆ ಹರಡಿದ, ಬಾಣದ ಗರಿಗಳಂತಹ ರೆಪ್ಪೆಗಳುಳ್ಳ, ತ್ರಿಪುರಾರಿಯ ಮನಸ್ಸಿನ ಶಾಂತಿಯನ್ನು ಕದಡುವ ನಿನ್ನ ಈ ಕಣ್ಣುಗಳು ಕಿವಿಯವರೆಗೆ ಎಳೆದ ಮನ್ಮಥನ ಬಾಣಗಳಂತೆ ವಿಲಾಸದಿಂದ ಕಾಣುತ್ತವೆ.',
          },
        },
        {
          n: 53,
          text: 'विभक्तत्रैवर्ण्यं व्यतिकरितलीलाञ्जनतया\nविभाति त्वन्नेत्रत्रितयमिदमीशानदयिते ।\nपुनः स्रष्टुं देवान् द्रुहिणहरिरुद्रानुपरतान्\nरजः सत्त्वं बिभ्रत् तम इति गुणानां त्रयमिव ॥',
          meaning: {
            en: 'O beloved of Īśāna, your three eyes, three-coloured with the touch of collyrium, shine as if bearing the three guṇas, rajas, sattva and tamas, to create anew Brahmā, Viṣṇu and Rudra after they have withdrawn.',
            kn: 'ಈಶಾನನ ಪ್ರಿಯೆಯೇ, ಕಾಡಿಗೆಯ ಲೇಪದಿಂದ ಮೂರು ಬಣ್ಣಗಳಾಗಿ ತೋರುವ ನಿನ್ನ ಮೂರು ಕಣ್ಣುಗಳು, ಪ್ರಳಯದಲ್ಲಿ ಲೀನರಾದ ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರರನ್ನು ಮತ್ತೆ ಸೃಷ್ಟಿಸಲು ರಜಸ್ಸು, ಸತ್ತ್ವ, ತಮಸ್ಸು ಎಂಬ ಮೂರು ಗುಣಗಳನ್ನು ಧರಿಸಿರುವಂತೆ ಹೊಳೆಯುತ್ತವೆ.',
          },
        },
        {
          n: 54,
          text: 'पवित्रीकर्तुं नः पशुपतिपराधीनहृदये\nदयामित्रैर्नेत्रैररुणधवलश्यामरुचिभिः ।\nनदः शोणो गङ्गा तपनतनयेति ध्रुवममुं\nत्रयाणां तीर्थानामुपनयसि सम्भेदमनघम् ॥',
          meaning: {
            en: 'O you whose heart belongs to Paśupati, to purify us your compassionate eyes, red, white and dark, bring together the holy confluence of the three sacred rivers, the Śoṇa, the Gaṅgā and the Yamunā.',
            kn: 'ಪಶುಪತಿಗೆ ಅಧೀನವಾದ ಹೃದಯವುಳ್ಳವಳೇ, ನಮ್ಮನ್ನು ಪವಿತ್ರಗೊಳಿಸಲು ಕೆಂಪು, ಬಿಳಿ, ಕಪ್ಪು ಬಣ್ಣಗಳ ನಿನ್ನ ದಯಾಪೂರ್ಣ ಕಣ್ಣುಗಳಿಂದ ಶೋಣಾ, ಗಂಗಾ, ಯಮುನಾ ಎಂಬ ಮೂರು ತೀರ್ಥಗಳ ಪವಿತ್ರ ಸಂಗಮವನ್ನು ಒದಗಿಸುತ್ತೀಯೆ.',
          },
        },
        {
          n: 55,
          text: 'निमेषोन्मेषाभ्यां प्रलयमुदयं याति जगती\nतवेत्याहुः सन्तो धरणिधरराजन्यतनये ।\nत्वदुन्मेषाज्जातं जगदिदमशेषं प्रलयतः\nपरित्रातुं शङ्के परिहृतनिमेषास्तव दृशः ॥',
          meaning: {
            en: 'The wise say the world dissolves and arises as you close and open your eyes, O daughter of the mountain king. I believe your eyes never blink so as to save this whole world, born of their opening, from dissolution.',
            kn: 'ಪರ್ವತರಾಜನ ಮಗಳೇ, ನೀನು ಕಣ್ಣು ಮುಚ್ಚಿದಾಗ ಜಗತ್ತು ಲಯವಾಗುತ್ತದೆ, ತೆರೆದಾಗ ಹುಟ್ಟುತ್ತದೆ ಎಂದು ಸಜ್ಜನರು ಹೇಳುತ್ತಾರೆ. ನಿನ್ನ ಕಣ್ಣು ತೆರೆಯುವಿಕೆಯಿಂದ ಹುಟ್ಟಿದ ಈ ಜಗತ್ತನ್ನು ಪ್ರಳಯದಿಂದ ರಕ್ಷಿಸಲೆಂದೇ ನಿನ್ನ ಕಣ್ಣುಗಳು ರೆಪ್ಪೆ ಮುಚ್ಚುವುದನ್ನೇ ಬಿಟ್ಟಿವೆ ಎಂದು ಭಾವಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 56,
          text: 'तवापर्णे कर्णेजपनयनपैशुन्यचकिता\nनिलीयन्ते तोये नियतमनिमेषाः शफरिकाः ।\nइयं च श्रीर्बद्धच्छदपुटकवाटं कुवलयं\nजहाति प्रत्यूषे निशि च विघटय्य प्रविशति ॥',
          meaning: {
            en: 'O Aparṇā, the little fish hide in the water without ever closing their eyes, afraid your ear-reaching eyes will tell tales about them; and the beauty of the blue lily leaves it at dawn, its petals shut, to dwell in your eyes, and enters it again at night.',
            kn: 'ಅಪರ್ಣೆಯೇ, ಕಿವಿಗಳವರೆಗೆ ಚಾಚಿರುವ ನಿನ್ನ ಕಣ್ಣುಗಳು ತಮ್ಮ ಬಗ್ಗೆ ಚಾಡಿ ಹೇಳಿಯಾವು ಎಂದು ಹೆದರಿ ಮೀನುಗಳು ರೆಪ್ಪೆ ಮುಚ್ಚದೆ ನೀರಿನಲ್ಲಿ ಅಡಗಿಕೊಳ್ಳುತ್ತವೆ; ನೀಲಕಮಲದ ಸೊಬಗು ಬೆಳಗಿನ ಜಾವ ದಳಗಳು ಮುಚ್ಚಿದ ಆ ಹೂವನ್ನು ಬಿಟ್ಟು ನಿನ್ನ ಕಣ್ಣುಗಳಲ್ಲಿ ನೆಲೆಸಿ, ರಾತ್ರಿ ಅದನ್ನು ತೆರೆದು ಮತ್ತೆ ಪ್ರವೇಶಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 57,
          text: 'दृशा द्राघीयस्या दरदलितनीलोत्पलरुचा\nदवीयांसं दीनं स्नपय कृपया मामपि शिवे ।\nअनेनायं धन्यो भवति न च ते हानिरियता\nवने वा हर्म्ये वा समकरनिपातो हिमकरः ॥',
          meaning: {
            en: 'O Śivā, with your long glance, lovely as a half-opened blue lotus, bathe me too in compassion, poor and far away though I am. I shall be blessed and you will lose nothing: the moon sheds its light alike on forest and palace.',
            kn: 'ಶಿವೆಯೇ, ಅರೆಅರಳಿದ ನೀಲಕಮಲದಂತೆ ಸುಂದರವಾದ ನಿನ್ನ ದೀರ್ಘ ದೃಷ್ಟಿಯಿಂದ ದೂರದಲ್ಲಿರುವ ದೀನನಾದ ನನ್ನನ್ನೂ ಕೃಪೆಯಿಂದ ತೋಯಿಸು. ಇದರಿಂದ ನಾನು ಧನ್ಯನಾಗುತ್ತೇನೆ, ನಿನಗೆ ಯಾವ ನಷ್ಟವೂ ಇಲ್ಲ; ಚಂದ್ರನು ಕಾಡಿನ ಮೇಲೂ ಅರಮನೆಯ ಮೇಲೂ ಸಮನಾಗಿ ಬೆಳದಿಂಗಳನ್ನು ಸುರಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 58,
          text: 'अरालं ते पालीयुगलमगराजन्यतनये\nन केषामाधत्ते कुसुमशरकोदण्डकुतुकम् ।\nतिरश्चीनो यत्र श्रवणपथमुल्लङ्घ्य विलसन्\nअपाङ्गव्यासङ्गो दिशति शरसन्धानधिषणाम् ॥',
          meaning: {
            en: 'O daughter of the mountain king, who would not take the curved line between your eyes and ears for Kāma’s bow? Your side-glance, darting sideways past the ear, looks like an arrow being fitted to it.',
            kn: 'ಪರ್ವತರಾಜನ ಮಗಳೇ, ನಿನ್ನ ಕಣ್ಣಂಚು ಮತ್ತು ಕಿವಿಯ ನಡುವಿನ ಬಾಗಿದ ಭಾಗವು ಯಾರಿಗೆ ಮನ್ಮಥನ ಬಿಲ್ಲಿನ ಭ್ರಮೆಯನ್ನು ಉಂಟುಮಾಡುವುದಿಲ್ಲ? ಅಲ್ಲಿ ಕಿವಿಯ ದಾರಿಯನ್ನೂ ದಾಟಿ ಓರೆಯಾಗಿ ಹರಿಯುವ ನಿನ್ನ ಕಡೆಗಣ್ಣ ನೋಟವು ಬಾಣವನ್ನು ಹೂಡುತ್ತಿರುವಂತೆ ತೋರುತ್ತದೆ.',
          },
        },
        {
          n: 59,
          text: 'स्फुरद्गण्डाभोगप्रतिफलितताटङ्कयुगलं\nचतुश्चक्रं मन्ये तव मुखमिदं मन्मथरथम् ।\nयमारुह्य द्रुह्यत्यवनिरथमर्केन्दुचरणं\nमहावीरो मारः प्रमथपतये सज्जितवते ॥',
          meaning: {
            en: 'Your face, with your two ear-rings mirrored in your shining cheeks, seems to me Kāma’s four-wheeled chariot; riding it, Māra the great warrior challenges Śiva, who stands ready on the chariot of the earth with sun and moon for wheels.',
            kn: 'ಹೊಳೆಯುವ ಕೆನ್ನೆಗಳಲ್ಲಿ ಪ್ರತಿಬಿಂಬಿತವಾದ ಎರಡು ಕಿವಿಯೋಲೆಗಳಿಂದ ಕೂಡಿದ ನಿನ್ನ ಮುಖವು ನಾಲ್ಕು ಚಕ್ರಗಳ ಮನ್ಮಥನ ರಥದಂತೆ ತೋರುತ್ತದೆ; ಅದನ್ನೇರಿ ಮಹಾವೀರನಾದ ಮಾರನು, ಸೂರ್ಯಚಂದ್ರರೇ ಚಕ್ರಗಳಾದ ಭೂಮಿಯೆಂಬ ರಥದಲ್ಲಿ ಸಿದ್ಧನಾಗಿ ನಿಂತ ಶಿವನನ್ನು ಎದುರಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 60,
          text: 'सरस्वत्याः सूक्तीरमृतलहरीकौशलहरीः\nपिबन्त्याः शर्वाणि श्रवणचुलुकाभ्यामविरलम् ।\nचमत्कारश्लाघाचलितशिरसः कुण्डलगणो\nझणत्कारैस्तारैः प्रतिवचनमाचष्ट इव ते ॥',
          meaning: {
            en: 'O Śarvāṇī, as you drink in with your ears the words of Sarasvatī, finer than waves of nectar, and nod in wonder and praise, the ringing of your ear-ornaments seems to answer her.',
            kn: 'ಶರ್ವಾಣಿಯೇ, ಅಮೃತದ ಅಲೆಗಳನ್ನೂ ಮೀರಿಸುವ ಸರಸ್ವತಿಯ ಸೂಕ್ತಿಗಳನ್ನು ಕಿವಿಗಳೆಂಬ ಬೊಗಸೆಗಳಿಂದ ಬಿಡದೆ ಕುಡಿಯುತ್ತಾ ಮೆಚ್ಚುಗೆಯಿಂದ ನೀನು ತಲೆದೂಗಿದಾಗ, ನಿನ್ನ ಕಿವಿಯೋಲೆಗಳ ಝಣತ್ಕಾರವು ಅವಳಿಗೆ ಉತ್ತರ ಕೊಡುತ್ತಿರುವಂತಿದೆ.',
          },
        },
        {
          n: 61,
          text: 'असौ नासावंशस्तुहिनगिरिवंशध्वजपटि\nत्वदीयो नेदीयः फलतु फलमस्माकमुचितम् ।\nवहन्नन्तर्मुक्ताः शिशिरतरनिश्वासगलितं\nसमृद्ध्या यस्तासां बहिरपि च मुक्तामणिधरः ॥',
          meaning: {
            en: 'O banner of the snow mountain’s race, may your nose, straight as a bamboo, soon grant us the fruit we need. Within it holds pearls carried by your cool breath, and from their abundance it wears a pearl outside as well.',
            kn: 'ಹಿಮಗಿರಿವಂಶದ ಧ್ವಜಪಟದಂತಿರುವವಳೇ, ಬಿದಿರಿನಂತೆ ನೇರವಾದ ನಿನ್ನ ಈ ಮೂಗು ನಮಗೆ ಉಚಿತವಾದ ಫಲವನ್ನು ಬೇಗನೆ ಕೊಡಲಿ. ಅದು ಒಳಗೆ ತಂಪಾದ ಉಸಿರಿನಿಂದ ಬಂದ ಮುತ್ತುಗಳನ್ನು ಹೊತ್ತಿದ್ದು, ಅವುಗಳ ಸಮೃದ್ಧಿಯಿಂದ ಹೊರಗೂ ಮುತ್ತಿನ ಮೂಗುತಿಯನ್ನು ಧರಿಸಿದೆ.',
          },
        },
        {
          n: 62,
          text: 'प्रकृत्यारक्तायास्तव सुदति दन्तच्छदरुचेः\nप्रवक्ष्ये सादृश्यं जनयतु फलं विद्रुमलता ।\nन बिम्बं तद्बिम्बप्रतिफलनरागादरुणितं\nतुलामध्यारोढुं कथमिव विलज्जेत कलया ॥',
          meaning: {
            en: 'O lovely-toothed one, let me tell what your naturally red lips are like: only if the coral creeper bore fruit would it match them; the bimba fruit, reddened merely by their reflection, would be ashamed to be weighed against them even in part.',
            kn: 'ಸುಂದರ ದಂತಪಂಕ್ತಿಯುಳ್ಳವಳೇ, ಸ್ವಭಾವದಿಂದಲೇ ಕೆಂಪಾದ ನಿನ್ನ ತುಟಿಗಳ ಹೋಲಿಕೆಯನ್ನು ಹೇಳುತ್ತೇನೆ: ಹವಳದ ಬಳ್ಳಿ ಹಣ್ಣು ಬಿಟ್ಟರೆ ಮಾತ್ರ ಅದು ಸಮವಾದೀತು; ಅವುಗಳ ಪ್ರತಿಬಿಂಬದಿಂದ ಮಾತ್ರ ಕೆಂಪಾದ ತೊಂಡೆಹಣ್ಣು ಅಂಶಮಾತ್ರದಲ್ಲಾದರೂ ಅವುಗಳೊಡನೆ ತೂಗಲು ನಾಚದಿರುವುದೇ?',
          },
        },
        {
          n: 63,
          text: 'स्मितज्योत्स्नाजालं तव वदनचन्द्रस्य पिबतां\nचकोराणामासीदतिरसतया चञ्चुजडिमा ।\nअतस्ते शीतांशोरमृतलहरीमम्लरुचयः\nपिबन्ति स्वच्छन्दं निशि निशि भृशं काञ्जिकधिया ॥',
          meaning: {
            en: 'The chakora birds, drinking the moonlight of the smile on your moon-like face, found their beaks numbed by its sweetness; so now, craving something sour, they drink the moon’s nectar night after night as if it were sour gruel.',
            kn: 'ನಿನ್ನ ಮುಖಚಂದ್ರನ ಮಂದಹಾಸದ ಬೆಳದಿಂಗಳನ್ನು ಕುಡಿಯುತ್ತಿದ್ದ ಚಕೋರ ಪಕ್ಷಿಗಳ ಕೊಕ್ಕುಗಳು ಅತಿಯಾದ ಸಿಹಿಯಿಂದ ಜಡವಾದವು; ಆದ್ದರಿಂದ ಹುಳಿಯನ್ನು ಬಯಸಿ ಅವು ಪ್ರತಿರಾತ್ರಿಯೂ ಚಂದ್ರನ ಅಮೃತವನ್ನು ಹುಳಿಗಂಜಿಯೆಂದು ಭಾವಿಸಿ ಯಥೇಷ್ಟವಾಗಿ ಕುಡಿಯುತ್ತವೆ.',
          },
        },
        {
          n: 64,
          text: 'अविश्रान्तं पत्युर्गुणगणकथाम्रेडनजपा\nजपापुष्पच्छाया तव जननि जिह्वा जयति सा ।\nयदग्रासीनायाः स्फटिकदृषदच्छच्छविमयी\nसरस्वत्या मूर्तिः परिणमति माणिक्यवपुषा ॥',
          meaning: {
            en: 'Glorious is your tongue, O Mother, red as the japā flower, ceaselessly repeating the praises of your Lord; Sarasvatī, seated on its tip, crystal-white by nature, there turns ruby-red.',
            kn: 'ತಾಯೇ, ನಿನ್ನ ಪತಿಯ ಗುಣಗಳನ್ನು ಬಿಡುವಿಲ್ಲದೆ ಮತ್ತೆ ಮತ್ತೆ ಜಪಿಸುವ, ದಾಸವಾಳದ ಹೂವಿನ ಕೆಂಪು ಕಾಂತಿಯುಳ್ಳ ನಿನ್ನ ನಾಲಗೆ ವಿಜಯಶಾಲಿಯಾಗಿದೆ; ಅದರ ತುದಿಯಲ್ಲಿ ಕುಳಿತ ಸರಸ್ವತಿಯ ಸ್ಫಟಿಕದಂತೆ ಶುಭ್ರವಾದ ರೂಪವು ಮಾಣಿಕ್ಯದಂತೆ ಕೆಂಪಾಗಿ ಕಾಣುತ್ತದೆ.',
          },
        },
        {
          n: 65,
          text: 'रणे जित्वा दैत्यानपहृतशिरस्त्रैः कवचिभिः\nनिवृत्तैश्चण्डांशत्रिपुरहरनिर्माल्यविमुखैः ।\nविशाखेन्द्रोपेन्द्रैः शशिविशदकर्पूरशकला\nविलीयन्ते मातस्तव वदनताम्बूलकबलाः ॥',
          meaning: {
            en: 'Returning from battle after defeating the demons, still in armour but with helmets off, Skanda, Indra and Viṣṇu leave aside Śiva’s leftover offerings, which belong to Caṇḍa, and take instead the betel morsels from your mouth, white with camphor like the moon.',
            kn: 'ಯುದ್ಧದಲ್ಲಿ ದೈತ್ಯರನ್ನು ಗೆದ್ದು, ಶಿರಸ್ತ್ರಾಣವನ್ನು ತೆಗೆದು ಕವಚ ಧರಿಸಿಯೇ ಹಿಂದಿರುಗಿದ ಸ್ಕಂದ, ಇಂದ್ರ, ಉಪೇಂದ್ರರು ಚಂಡನ ಪಾಲಾದ ಶಿವನಿರ್ಮಾಲ್ಯವನ್ನು ಬಿಟ್ಟು, ತಾಯೇ, ಚಂದ್ರನಂತೆ ಬಿಳಿಯ ಕರ್ಪೂರದ ತುಣುಕುಗಳುಳ್ಳ ನಿನ್ನ ಬಾಯಿಯ ತಾಂಬೂಲವನ್ನು ಸ್ವೀಕರಿಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 66,
          text: 'विपञ्च्या गायन्ती विविधमपदानं पशुपतेः\nत्वयारब्धे वक्तुं चलितशिरसा साधुवचने ।\nतदीयैर्माधुर्यैरपलपिततन्त्रीकलरवां\nनिजां वीणां वाणी निचुलयति चोलेन निभृतम् ॥',
          meaning: {
            en: 'When Sarasvatī, singing Paśupati’s many deeds on her vīṇā, hears you begin to say “Well done!” with a nod, she quietly wraps her vīṇā in its cover, its sweet notes put to shame by the sweetness of your voice.',
            kn: 'ಸರಸ್ವತಿಯು ವೀಣೆಯನ್ನು ನುಡಿಸುತ್ತಾ ಪಶುಪತಿಯ ವಿವಿಧ ಸಾಹಸಗಳನ್ನು ಹಾಡುತ್ತಿರುವಾಗ, ನೀನು ತಲೆದೂಗಿ “ಸಾಧು” ಎಂದು ಮೆಚ್ಚುಗೆಯ ಮಾತನ್ನು ಆರಂಭಿಸಿದಾಗ, ನಿನ್ನ ದನಿಯ ಮಾಧುರ್ಯದ ಮುಂದೆ ತಂತಿಗಳ ನಾದ ಸೋತದ್ದರಿಂದ ಅವಳು ಮೌನವಾಗಿ ತನ್ನ ವೀಣೆಯನ್ನು ಹೊದಿಕೆಯಿಂದ ಮುಚ್ಚಿಡುತ್ತಾಳೆ.',
          },
        },
        {
          n: 67,
          text: 'कराग्रेण स्पृष्टं तुहिनगिरिणा वत्सलतया\nगिरीशेनोदस्तं मुहुरधरपानाकुलतया ।\nकरग्राह्यं शम्भोर्मुखमुकुरवृन्तं गिरिसुते\nकथङ्कारं ब्रूमस्तव चिबुकमौपम्यरहितम् ॥',
          meaning: {
            en: 'Your chin, touched with love by your father Himavān’s fingertips and lifted again and again by Śiva in his longing, is the handle by which Śambhu holds the mirror of your face. How can we describe it, O daughter of the mountain, when nothing compares with it?',
            kn: 'ತಂದೆ ಹಿಮವಂತನು ವಾತ್ಸಲ್ಯದಿಂದ ಬೆರಳ ತುದಿಯಿಂದ ಮುಟ್ಟಿದ, ಗಿರೀಶನು ಪ್ರೇಮದಿಂದ ಮತ್ತೆ ಮತ್ತೆ ಮೇಲೆತ್ತಿದ, ಶಂಭುವು ಹಿಡಿಯುವ ಮುಖವೆಂಬ ಕನ್ನಡಿಯ ಹಿಡಿಕೆಯಂತಿರುವ ನಿನ್ನ ಗಲ್ಲವನ್ನು, ಗಿರಿಸುತೆಯೇ, ಹೋಲಿಕೆಯೇ ಇಲ್ಲದಿರುವಾಗ ಹೇಗೆ ವರ್ಣಿಸೋಣ?',
          },
        },
        {
          n: 68,
          text: 'भुजाश्लेषान् नित्यं पुरदमयितुः कण्टकवती\nतव ग्रीवा धत्ते मुखकमलनालश्रियमियम् ।\nस्वतः श्वेता कालागरुबहुलजम्बालमलिना\nमृणालीलालित्यं वहति यदधो हारलतिका ॥',
          meaning: {
            en: 'Your neck, its hair ever thrilled by the embrace of Tripura’s conqueror, has the beauty of the stalk of your lotus face; and the pearl necklace below it, white by nature but darkened with aloe paste, looks like the stalk’s fibre.',
            kn: 'ತ್ರಿಪುರಾರಿಯ ಆಲಿಂಗನದಿಂದ ಸದಾ ರೋಮಾಂಚಿತವಾದ ನಿನ್ನ ಕಂಠವು ಮುಖಕಮಲದ ದಂಟಿನ ಸೊಬಗನ್ನು ಹೊಂದಿದೆ; ಅದರ ಕೆಳಗಿರುವ, ಸ್ವಭಾವತಃ ಬಿಳಿಯಾಗಿದ್ದರೂ ಕಪ್ಪು ಅಗರು ಲೇಪದಿಂದ ಮಸುಕಾದ ಮುತ್ತಿನ ಹಾರವು ಕಮಲದ ದಂಟಿನ ನಾರಿನಂತೆ ಕಾಣುತ್ತದೆ.',
          },
        },
        {
          n: 69,
          text: 'गले रेखास्तिस्रो गतिगमकगीतैकनिपुणे\nविवाहव्यानद्धप्रगुणगुणसङ्ख्याप्रतिभुवः ।\nविराजन्ते नानाविधमधुररागाकरभुवां\nत्रयाणां ग्रामाणां स्थितिनियमसीमान इव ते ॥',
          meaning: {
            en: 'O you skilled in rhythm, ornament and song, the three lines on your neck, reminders of the threads tied at your wedding, shine like the boundaries of the three musical scales, the sources of many sweet rāgas.',
            kn: 'ಗತಿ, ಗಮಕ, ಗೀತಗಳಲ್ಲಿ ನಿಪುಣಳೇ, ವಿವಾಹದಲ್ಲಿ ಕಟ್ಟಿದ ಮಂಗಳಸೂತ್ರದ ಎಳೆಗಳ ಗುರುತಿನಂತಿರುವ ನಿನ್ನ ಕಂಠದ ಮೂರು ರೇಖೆಗಳು, ನಾನಾ ಮಧುರ ರಾಗಗಳ ಉಗಮಸ್ಥಾನಗಳಾದ ಮೂರು ಗ್ರಾಮಗಳ ಸೀಮಾರೇಖೆಗಳಂತೆ ಹೊಳೆಯುತ್ತವೆ.',
          },
        },
        {
          n: 70,
          text: 'मृणालीमृद्वीनां तव भुजलतानां चतसृणां\nचतुर्भिः सौन्दर्यं सरसिजभवः स्तौति वदनैः ।\nनखेभ्यः सन्त्रस्यन् प्रथममथनादन्धकरिपोः\nचतुर्णां शीर्षाणां सममभयहस्तार्पणधिया ॥',
          meaning: {
            en: 'Brahmā praises with his four faces the beauty of your four arms, soft as lotus stalks; for, fearing the nails of Śiva, who once cut off his fifth head, he hopes you will place your fearless hands on all four heads at once.',
            kn: 'ಕಮಲದ ದಂಟಿನಂತೆ ಮೃದುವಾದ ನಿನ್ನ ನಾಲ್ಕು ತೋಳುಗಳ ಸೌಂದರ್ಯವನ್ನು ಬ್ರಹ್ಮನು ತನ್ನ ನಾಲ್ಕು ಮುಖಗಳಿಂದ ಸ್ತುತಿಸುತ್ತಾನೆ; ಹಿಂದೆ ತನ್ನ ಐದನೆಯ ತಲೆಯನ್ನು ಚಿವುಟಿದ ಶಿವನ ಉಗುರುಗಳಿಗೆ ಹೆದರಿ, ಉಳಿದ ನಾಲ್ಕು ತಲೆಗಳ ಮೇಲೂ ಏಕಕಾಲದಲ್ಲಿ ನೀನು ಅಭಯಹಸ್ತವನ್ನು ಇಡುವೆ ಎಂಬ ಆಶೆಯಿಂದ.',
          },
        },
        {
          n: 71,
          text: 'नखानामुद्द्योतैर्नवनलिनरागं विहसतां\nकराणां ते कान्तिं कथय कथयामः कथमुमे ।\nकयाचिद्वा साम्यं भजतु कलया हन्त कमलं\nयदि क्रीडल्लक्ष्मीचरणतललाक्षारसचणम् ॥',
          meaning: {
            en: 'O Umā, tell us how we can describe the beauty of your hands, whose shining nails mock the colour of fresh lotuses. The lotus might share a little of their likeness only if it were reddened with lac from the feet of Lakṣmī at play in it.',
            kn: 'ಉಮೆಯೇ, ಉಗುರುಗಳ ಕಾಂತಿಯಿಂದ ಹೊಸ ಕಮಲದ ಬಣ್ಣವನ್ನು ಅಣಕಿಸುವ ನಿನ್ನ ಕೈಗಳ ಕಾಂತಿಯನ್ನು ಹೇಗೆ ವರ್ಣಿಸೋಣ, ಹೇಳು. ಕಮಲದಲ್ಲಿ ಆಡುವ ಲಕ್ಷ್ಮಿಯ ಪಾದದ ಅರಗಿನ ರಸದಿಂದ ಕೆಂಪಾದರೆ ಮಾತ್ರ ಅದು ಸ್ವಲ್ಪಮಟ್ಟಿಗೆ ಅವುಗಳನ್ನು ಹೋಲೀತು.',
          },
        },
        {
          n: 72,
          text: 'समं देवि स्कन्दद्विपवदनपीतं स्तनयुगं\nतवेदं नः खेदं हरतु सततं प्रस्नुतमुखम् ।\nयदालोक्याशङ्काकुलितहृदयो हासजनकः\nस्वकुम्भौ हेरम्बः परिमृशति हस्तेन झटिति ॥',
          meaning: {
            en: 'O Devī, may your breasts, ever flowing with milk, from which Skanda and the elephant-faced Gaṇeśa drink together, take away our sorrow; seeing them, Heramba in sudden doubt feels his own temples with his hand, to everyone’s amusement.',
            kn: 'ದೇವಿಯೇ, ಸ್ಕಂದ ಮತ್ತು ಗಜಮುಖ ಗಣಪತಿಯರು ಒಟ್ಟಿಗೆ ಹಾಲುಣ್ಣುವ, ಸದಾ ಹಾಲು ಸುರಿಸುವ ನಿನ್ನ ಸ್ತನಗಳು ನಮ್ಮ ದುಃಖವನ್ನು ಹೋಗಲಾಡಿಸಲಿ; ಅವನ್ನು ಕಂಡು ಶಂಕೆಯಿಂದ ಹೇರಂಬನು ತನ್ನ ಕುಂಭಸ್ಥಳಗಳನ್ನು ಕೈಯಿಂದ ಮುಟ್ಟಿ ನೋಡಿಕೊಳ್ಳುವುದು ನಗೆಯನ್ನುಂಟುಮಾಡುತ್ತದೆ.',
          },
        },
        {
          n: 73,
          text: 'अमू ते वक्षोजावमृतरसमाणिक्यकुतुपौ\nन सन्देहस्पन्दो नगपतिपताके मनसि नः ।\nपिबन्तौ तौ यस्मादविदितवधूसङ्गरसिकौ\nकुमारावद्यापि द्विरदवदनक्रौञ्चदलनौ ॥',
          meaning: {
            en: 'O banner of the mountain king, we have no doubt that your breasts are ruby flasks of nectar; for the two who drink from them, the elephant-faced one and the piercer of Mount Krauñca, are youths even today.',
            kn: 'ಪರ್ವತರಾಜನ ಧ್ವಜದಂತಿರುವವಳೇ, ನಿನ್ನ ಸ್ತನಗಳು ಅಮೃತರಸದಿಂದ ತುಂಬಿದ ಮಾಣಿಕ್ಯದ ಕುಪ್ಪಿಗಳು ಎಂಬುದರಲ್ಲಿ ನಮಗೆ ಸಂದೇಹವಿಲ್ಲ; ಏಕೆಂದರೆ ಅವುಗಳಿಂದ ಹಾಲುಂಡ ಗಜಮುಖನೂ ಕ್ರೌಂಚವನ್ನು ಭೇದಿಸಿದ ಕುಮಾರನೂ ಇಂದಿಗೂ ಕುಮಾರರಾಗಿಯೇ ಇದ್ದಾರೆ.',
          },
        },
        {
          n: 74,
          text: 'वहत्यम्ब स्तम्बेरमदनुजकुम्भप्रकृतिभिः\nसमारब्धां मुक्तामणिभिरमलां हारलतिकाम् ।\nकुचाभोगो बिम्बाधररुचिभिरन्तः शबलितां\nप्रतापव्यामिश्रां पुरदमयितुः कीर्तिमिव ते ॥',
          meaning: {
            en: 'O Mother, your bosom wears a pure necklace of pearls taken from the temples of the elephant-demon, tinged within by the glow of your bimba-red lips, like the fame of Tripura’s conqueror mingled with his valour.',
            kn: 'ತಾಯೇ, ನಿನ್ನ ವಕ್ಷಸ್ಥಳವು ಗಜಾಸುರನ ಕುಂಭಸ್ಥಳಗಳಿಂದ ಹುಟ್ಟಿದ ಮುತ್ತುಗಳಿಂದ ಕಟ್ಟಿದ ನಿರ್ಮಲವಾದ ಹಾರವನ್ನು ಧರಿಸಿದೆ; ತೊಂಡೆಹಣ್ಣಿನಂತಹ ತುಟಿಗಳ ಕಾಂತಿಯಿಂದ ಒಳಗೆ ಮಿಶ್ರಿತವಾದ ಅದು, ಪ್ರತಾಪದೊಡನೆ ಬೆರೆತ ತ್ರಿಪುರಾರಿಯ ಕೀರ್ತಿಯಂತಿದೆ.',
          },
        },
        {
          n: 75,
          text: 'तव स्तन्यं मन्ये धरणिधरकन्ये हृदयतः\nपयःपारावारः परिवहति सारस्वतमिव ।\nदयावत्या दत्तं द्रविडशिशुरास्वाद्य तव यत्\nकवीनां प्रौढानामजनि कमनीयः कवयिता ॥',
          meaning: {
            en: 'O daughter of the mountain, I think the milk of your breast is an ocean of wisdom flowing from your heart; for the Dravidian child who tasted it, given by you in compassion, became a delightful poet among great poets. (Tradition takes the child to be Tirujñānasambandar, or Śaṅkara himself.)',
            kn: 'ಗಿರಿಕನ್ಯೆಯೇ, ನಿನ್ನ ಎದೆಹಾಲು ನಿನ್ನ ಹೃದಯದಿಂದ ಹರಿಯುವ ಜ್ಞಾನದ ಕ್ಷೀರಸಾಗರವೆಂದು ಭಾವಿಸುತ್ತೇನೆ; ಏಕೆಂದರೆ ದಯಾಮಯಿಯಾದ ನೀನು ಕೊಟ್ಟ ಅದನ್ನು ಸವಿದ ದ್ರಾವಿಡ ಶಿಶು ಪ್ರೌಢ ಕವಿಗಳ ನಡುವೆ ಮನೋಹರ ಕವಿಯಾದನು. (ಈ ಶಿಶುವನ್ನು ಸಂಪ್ರದಾಯವು ತಿರುಜ್ಞಾನಸಂಬಂಧರೆಂದೋ ಶಂಕರರೆಂದೋ ಹೇಳುತ್ತದೆ.)',
          },
        },
        {
          n: 76,
          text: 'हरक्रोधज्वालावलिभिरवलीढेन वपुषा\nगभीरे ते नाभीसरसि कृतसङ्गो मनसिजः ।\nसमुत्तस्थौ तस्मादचलतनये धूमलतिका\nजनस्तां जानीते तव जननि रोमावलिरिति ॥',
          meaning: {
            en: 'Kāma, his body scorched by the flames of Hara’s anger, plunged into the deep lake of your navel; from it rose a thin wisp of smoke, which people know, O Mother, as the fine line of hair above your navel.',
            kn: 'ಹರನ ಕೋಪಾಗ್ನಿಯ ಜ್ವಾಲೆಗಳಿಂದ ಸುಟ್ಟ ದೇಹದೊಡನೆ ಮನ್ಮಥನು ನಿನ್ನ ಆಳವಾದ ನಾಭಿಸರೋವರದಲ್ಲಿ ಮುಳುಗಿದನು; ಅದರಿಂದ ಮೇಲೆದ್ದ ಹೊಗೆಯ ಎಳೆಯನ್ನೇ, ತಾಯೇ, ಜನರು ನಿನ್ನ ರೋಮಾವಳಿ ಎಂದು ತಿಳಿಯುತ್ತಾರೆ.',
          },
        },
        {
          n: 77,
          text: 'यदेतत् कालिन्दीतनुतरतरङ्गाकृति शिवे\nकृशे मध्ये किञ्चिज्जननि तव तद् भाति सुधियाम् ।\nविमर्दादन्योऽन्यं कुचकलशयोरन्तरगतं\nतनूभूतं व्योम प्रविशदिव नाभिं कुहरिणीम् ॥',
          meaning: {
            en: 'What looks like a slender wave of the Yamunā on your slim waist, O Śivā, seems to the wise to be the sky itself, made thin by the pressing together of your breasts, entering the hollow of your navel.',
            kn: 'ಶಿವೆಯೇ, ನಿನ್ನ ತೆಳುವಾದ ನಡುವಿನಲ್ಲಿ ಯಮುನೆಯ ಸಣ್ಣ ಅಲೆಯಂತೆ ಕಾಣುವ ಆ ರೇಖೆಯು, ಸ್ತನಗಳು ಪರಸ್ಪರ ಒತ್ತಿದ್ದರಿಂದ ತೆಳುವಾದ ಆಕಾಶವೇ ನಿನ್ನ ನಾಭಿಯ ಗುಹೆಯನ್ನು ಪ್ರವೇಶಿಸುತ್ತಿರುವಂತೆ ಜ್ಞಾನಿಗಳಿಗೆ ತೋರುತ್ತದೆ.',
          },
        },
        {
          n: 78,
          text: 'स्थिरो गङ्गावर्तः स्तनमुकुलरोमावलिलता-\nकलावालं कुण्डं कुसुमशरतेजोहुतभुजः ।\nरतेर्लीलागारं किमपि तव नाभिर्गिरिसुते\nबिलद्वारं सिद्धेर्गिरिशनयनानां विजयते ॥',
          meaning: {
            en: 'Your navel, O daughter of the mountain, is glorious: a steady whirlpool of the Gaṅgā, a basin for the creeper of fine hair that bears your breasts as its buds, the fire-pit of Kāma’s flame, Rati’s pleasure-house, and the doorway to the fulfilment of Śiva’s eyes.',
            kn: 'ಗಿರಿಸುತೆಯೇ, ನಿನ್ನ ನಾಭಿಯು ಗಂಗೆಯ ಸ್ಥಿರವಾದ ಸುಳಿಯಂತೆ, ಸ್ತನಗಳೆಂಬ ಮೊಗ್ಗುಗಳುಳ್ಳ ರೋಮಾವಳಿಯೆಂಬ ಬಳ್ಳಿಗೆ ಪಾತಿಯಂತೆ, ಮನ್ಮಥನ ತೇಜಸ್ಸೆಂಬ ಅಗ್ನಿಯ ಕುಂಡದಂತೆ, ರತಿಯ ಲೀಲಾಗೃಹದಂತೆ, ಶಿವನ ಕಣ್ಣುಗಳ ಸಿದ್ಧಿಗೆ ಗುಹಾದ್ವಾರದಂತೆ ವಿಜಯಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 79,
          text: 'निसर्गक्षीणस्य स्तनतटभरेण क्लमजुषो\nनमन्मूर्तेर्नारीतिलक शनकैस्त्रुट्यत इव ।\nचिरं ते मध्यस्य त्रुटिततटिनीतीरतरुणा\nसमावस्थास्थेम्नो भवतु कुशलं शैलतनये ॥',
          meaning: {
            en: 'O jewel among women, daughter of the mountain, may your waist, slender by nature, tired by the weight of your bosom and bending as if about to break, long remain safe and steady, like a tree on a crumbling river bank.',
            kn: 'ನಾರೀತಿಲಕಳೇ, ಶೈಲತನಯೆಯೇ, ಸ್ವಭಾವತಃ ತೆಳುವಾದ, ವಕ್ಷಸ್ಥಳದ ಭಾರದಿಂದ ಬಳಲಿ ಬಾಗಿ ಮೆಲ್ಲನೆ ಮುರಿಯುತ್ತಿರುವಂತೆ ಕಾಣುವ ನಿನ್ನ ನಡುವು, ಕೊಚ್ಚಿಹೋಗುತ್ತಿರುವ ನದೀತೀರದ ಮರದಂತಿದ್ದರೂ, ಬಹುಕಾಲ ಸ್ಥಿರವಾಗಿ ಕ್ಷೇಮವಾಗಿರಲಿ.',
          },
        },
        {
          n: 80,
          text: 'कुचौ सद्यःस्विद्यत्तटघटितकूर्पासभिदुरौ\nकषन्तौ दोर्मूले कनककलशाभौ कलयता ।\nतव त्रातुं भङ्गादलमिति वलग्नं तनुभुवा\nत्रिधा नद्धं देवि त्रिवलि लवलीवल्लिभिरिव ॥',
          meaning: {
            en: 'O Devī, Kāma, seeing your golden-pot breasts pressing against your arms and bursting your bodice, bound your waist three times with the three folds, as if with lavalī creepers, to keep it from breaking.',
            kn: 'ದೇವಿಯೇ, ರವಿಕೆಯನ್ನು ಬಿರಿಯುವಂತೆ ತೋಳುಗಳ ಬುಡವನ್ನು ಒತ್ತುವ ಚಿನ್ನದ ಕಲಶಗಳಂತಹ ನಿನ್ನ ಸ್ತನಗಳನ್ನು ಕಂಡ ಮನ್ಮಥನು, ನಡು ಮುರಿಯದಂತೆ ರಕ್ಷಿಸಲು ಲವಲೀ ಬಳ್ಳಿಗಳಿಂದಲೋ ಎಂಬಂತೆ ತ್ರಿವಳಿಗಳಿಂದ ಅದನ್ನು ಮೂರು ಸುತ್ತು ಕಟ್ಟಿದನು.',
          },
        },
        {
          n: 81,
          text: 'गुरुत्वं विस्तारं क्षितिधरपतिः पार्वति निजात्\nनितम्बादाच्छिद्य त्वयि हरणरूपेण निदधे ।\nअतस्ते विस्तीर्णो गुरुरयमशेषां वसुमतीं\nनितम्बप्राग्भारः स्थगयति लघुत्वं नयति च ॥',
          meaning: {
            en: 'O Pārvatī, the king of mountains took weight and breadth from his own slopes and gave them to you as your dowry; so your broad, heavy hips cover the whole earth and make it seem light.',
            kn: 'ಪಾರ್ವತಿಯೇ, ಪರ್ವತರಾಜನು ತನ್ನ ತಪ್ಪಲುಗಳಿಂದ ಭಾರವನ್ನೂ ವಿಸ್ತಾರವನ್ನೂ ತೆಗೆದು ನಿನಗೆ ಬಳುವಳಿಯಾಗಿ ಕೊಟ್ಟನು; ಆದ್ದರಿಂದಲೇ ನಿನ್ನ ವಿಸ್ತಾರವಾದ, ಭಾರವಾದ ನಿತಂಬವು ಇಡೀ ಭೂಮಿಯನ್ನು ಮುಚ್ಚಿ ಅದನ್ನು ಹಗುರವಾಗಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 82,
          text: 'करीन्द्राणां शुण्डान् कनककदलीकाण्डपटलीम्\nउभाभ्यामूरुभ्यामुभयमपि निर्जित्य भवती ।\nसुवृत्ताभ्यां पत्युः प्रणतिकठिनाभ्यां गिरिसुते\nविधिज्ञे जानुभ्यां विबुधकरिकुम्भद्वयमसि ॥',
          meaning: {
            en: 'O daughter of the mountain, knower of right ways, with your thighs you have surpassed both the trunks of great elephants and the stems of golden plantains; and with your round knees, hardened by bowing to your Lord, the temples of the heavenly elephant too.',
            kn: 'ವಿಧಿಯನ್ನರಿತ ಗಿರಿಸುತೆಯೇ, ನಿನ್ನ ತೊಡೆಗಳಿಂದ ಆನೆಗಳ ಸೊಂಡಿಲುಗಳನ್ನೂ ಚಿನ್ನದ ಬಾಳೆಯ ಕಾಂಡಗಳನ್ನೂ ಗೆದ್ದಿರುವೆ; ಪತಿಗೆ ನಮಿಸುವುದರಿಂದ ಗಟ್ಟಿಯಾದ ದುಂಡನೆಯ ಮೊಣಕಾಲುಗಳಿಂದ ಐರಾವತದ ಕುಂಭಸ್ಥಳಗಳನ್ನೂ ಮೀರಿಸಿರುವೆ.',
          },
        },
        {
          n: 83,
          text: 'पराजेतुं रुद्रं द्विगुणशरगर्भौ गिरिसुते\nनिषङ्गौ जङ्घे ते विषमविशिखो बाढमकृत ।\nयदग्रे दृश्यन्ते दश शरफलाः पादयुगली-\nनखाग्रच्छद्मानः सुरमकुटशाणैकनिशिताः ॥',
          meaning: {
            en: 'To conquer Rudra, Kāma made your calves two quivers holding twice his five arrows; the ten toenails at their tips, sharpened on the whetstones of the gods’ crowns, are the arrowheads.',
            kn: 'ರುದ್ರನನ್ನು ಗೆಲ್ಲಲು ಮನ್ಮಥನು ನಿನ್ನ ಕಣಕಾಲುಗಳನ್ನು ಎರಡು ಪಟ್ಟು ಬಾಣಗಳುಳ್ಳ ಬತ್ತಳಿಕೆಗಳನ್ನಾಗಿ ಮಾಡಿದನು; ಅವುಗಳ ತುದಿಯಲ್ಲಿ ಕಾಣುವ, ದೇವತೆಗಳ ಕಿರೀಟಗಳೆಂಬ ಸಾಣೆಕಲ್ಲುಗಳಿಂದ ಹರಿತವಾದ ಹತ್ತು ಕಾಲ್ಬೆರಳ ಉಗುರುಗಳೇ ಆ ಬಾಣಗಳ ಮೊನೆಗಳು.',
          },
        },
        {
          n: 84,
          text: 'श्रुतीनां मूर्धानो दधति तव यौ शेखरतया\nममाप्येतौ मातः शिरसि दयया धेहि चरणौ ।\nययोः पाद्यं पाथः पशुपतिजटाजूटतटिनी\nययोर्लाक्षालक्ष्मीररुणहरिचूडामणिरुचिः ॥',
          meaning: {
            en: 'O Mother, in your mercy place on my head too those feet which the Upaniṣads, crown of the Vedas, wear as their crest; whose water for washing is the river in Śiva’s locks, and whose red dye is the glow of Viṣṇu’s crest-jewel.',
            kn: 'ತಾಯೇ, ವೇದಗಳ ಶಿರಸ್ಸುಗಳಾದ ಉಪನಿಷತ್ತುಗಳು ಶಿರೋಭೂಷಣವಾಗಿ ಧರಿಸುವ, ಶಿವನ ಜಟೆಯ ಗಂಗೆಯೇ ಪಾದ್ಯಜಲವಾಗಿರುವ, ಶ್ರೀಹರಿಯ ಚೂಡಾಮಣಿಯ ಕೆಂಪು ಕಾಂತಿಯೇ ಅರಗಿನ ಬಣ್ಣವಾಗಿರುವ ನಿನ್ನ ಈ ಪಾದಗಳನ್ನು ದಯೆಯಿಂದ ನನ್ನ ತಲೆಯ ಮೇಲೂ ಇಡು.',
          },
        },
        {
          n: 85,
          text: 'नमोवाकं ब्रूमो नयनरमणीयाय पदयोः\nतवास्मै द्वन्द्वाय स्फुटरुचिरसालक्तकवते ।\nअसूयत्यत्यन्तं यदभिहननाय स्पृहयते\nपशूनामीशानः प्रमदवनकङ्केलितरवे ॥',
          meaning: {
            en: 'We offer salutations to your two feet, lovely to the eye and bright with red lac; the Lord of beings himself envies the aśoka tree in your garden, which longs for their touch.',
            kn: 'ಕಣ್ಣಿಗೆ ರಮಣೀಯವಾದ, ಹೊಳೆಯುವ ಅರಗಿನ ಬಣ್ಣದಿಂದ ಕೂಡಿದ ನಿನ್ನ ಈ ಎರಡು ಪಾದಗಳಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇವೆ; ಅವುಗಳ ಸ್ಪರ್ಶವನ್ನು ಬಯಸುವ ನಿನ್ನ ಉದ್ಯಾನದ ಅಶೋಕವೃಕ್ಷದ ಬಗ್ಗೆ ಪಶುಪತಿಯೇ ಅತ್ಯಂತ ಅಸೂಯೆಪಡುತ್ತಾನೆ.',
          },
        },
        {
          n: 86,
          text: 'मृषा कृत्वा गोत्रस्खलनमथ वैलक्ष्यनमितं\nललाटे भर्तारं चरणकमले ताडयति ते ।\nचिरादन्तःशल्यं दहनकृतमुन्मूलितवता\nतुलाकोटिक्वाणैः किलिकिलितमीशानरिपुणा ॥',
          meaning: {
            en: 'When your Lord, having teasingly called you by another’s name, bows his head in embarrassment and you touch his forehead with your lotus foot, Kāma, Śiva’s old foe, cries out in joy through your jingling anklets, as if the long-held thorn of his burning were at last pulled out.',
            kn: 'ತಮಾಷೆಗಾಗಿ ಬೇರೆ ಹೆಸರಿನಿಂದ ಕರೆದು ನಾಚಿಕೆಯಿಂದ ತಲೆಬಾಗಿದ ಪತಿಯ ಹಣೆಗೆ ನೀನು ಪಾದಕಮಲದಿಂದ ತಟ್ಟಿದಾಗ, ಬಹುಕಾಲದಿಂದ ಸುಟ್ಟ ನೋವಿನ ಮುಳ್ಳನ್ನು ಹೃದಯದಲ್ಲಿ ಹೊತ್ತಿದ್ದ ಶಿವನ ಶತ್ರು ಮನ್ಮಥನು ಅದು ಕಿತ್ತುಹೋದಂತೆ ನಿನ್ನ ಕಾಲ್ಗೆಜ್ಜೆಯ ಝಣತ್ಕಾರದ ಮೂಲಕ ಹರ್ಷಧ್ವನಿ ಮಾಡುತ್ತಾನೆ.',
          },
        },
        {
          n: 87,
          text: 'हिमानीहन्तव्यं हिमगिरिनिवासैकचतुरौ\nनिशायां निद्राणां निशि चरमभागे च विशदौ ।\nवरं लक्ष्मीपात्रं श्रियमतिसृजन्तौ समयिनां\nसरोजं त्वत्पादौ जननि जयतश्चित्रमिह किम् ॥',
          meaning: {
            en: 'O Mother, your feet live happily in the snowy mountains, are bright by night and at dawn, and give wealth to your devotees; the lotus is killed by snow, sleeps at night and is only Lakṣmī’s seat. What wonder that your feet surpass it?',
            kn: 'ತಾಯೇ, ಹಿಮಗಿರಿಯಲ್ಲೇ ನೆಲೆಸಲು ಸಮರ್ಥವಾದ, ರಾತ್ರಿಯಲ್ಲೂ ಮುಂಜಾವಿನಲ್ಲೂ ಹೊಳೆಯುವ, ಭಕ್ತರಿಗೆ ಐಶ್ವರ್ಯವನ್ನು ಕೊಡುವ ನಿನ್ನ ಪಾದಗಳು, ಹಿಮದಿಂದ ನಾಶವಾಗುವ, ರಾತ್ರಿ ಮುಚ್ಚಿಕೊಳ್ಳುವ, ಲಕ್ಷ್ಮಿಗೆ ಕೇವಲ ಆಸನವಾಗಿರುವ ಕಮಲವನ್ನು ಗೆಲ್ಲುತ್ತವೆ; ಇದರಲ್ಲಿ ಆಶ್ಚರ್ಯವೇನಿದೆ?',
          },
        },
        {
          n: 88,
          text: 'पदं ते कीर्तीनां प्रपदमपदं देवि विपदां\nकथं नीतं सद्भिः कठिनकमठीकर्परतुलाम् ।\nकथं वा बाहुभ्यामुपयमनकाले पुरभिदा\nयदादाय न्यस्तं दृषदि दयमानेन मनसा ॥',
          meaning: {
            en: 'O Devī, how could poets compare the top of your foot, home of all glory and no place for misfortune, with the hard shell of a tortoise? And how could Śiva, tender-hearted, have lifted it in his hands at your wedding and set it on the hard stone?',
            kn: 'ದೇವಿಯೇ, ಕೀರ್ತಿಗಳಿಗೆ ನೆಲೆಯಾದ, ವಿಪತ್ತುಗಳಿಗೆ ಎಡೆಯಿಲ್ಲದ ನಿನ್ನ ಪಾದದ ಮೇಲ್ಭಾಗವನ್ನು ಕವಿಗಳು ಆಮೆಯ ಗಟ್ಟಿ ಚಿಪ್ಪಿಗೆ ಹೇಗೆ ಹೋಲಿಸಿದರು? ವಿವಾಹದ ಸಮಯದಲ್ಲಿ ಕೋಮಲ ಮನಸ್ಸಿನ ತ್ರಿಪುರಾರಿಯು ಅದನ್ನು ಕೈಗಳಿಂದ ಎತ್ತಿ ಗಟ್ಟಿಯಾದ ಕಲ್ಲಿನ ಮೇಲೆ ಹೇಗೆ ಇಟ್ಟನು?',
          },
        },
        {
          n: 89,
          text: 'नखैर्नाकस्त्रीणां करकमलसङ्कोचशशिभिः\nतरूणां दिव्यानां हसत इव ते चण्डि चरणौ ।\nफलानि स्वःस्थेभ्यः किसलयकराग्रेण ददतां\nदरिद्रेभ्यो भद्रां श्रियमनिशमह्नाय ददतौ ॥',
          meaning: {
            en: 'O Caṇḍī, your feet, whose nails are moons that make the lotus hands of heavenly women close, seem to laugh at the heavenly trees: those give fruit only to the dwellers of heaven, while your feet give lasting prosperity to the poor, day and night, without delay.',
            kn: 'ಚಂಡಿಯೇ, ದೇವಲೋಕದ ಸ್ತ್ರೀಯರ ಕರಕಮಲಗಳನ್ನು ಮುಚ್ಚಿಸುವ ಚಂದ್ರರಂತಿರುವ ಉಗುರುಗಳುಳ್ಳ ನಿನ್ನ ಪಾದಗಳು, ಸ್ವರ್ಗವಾಸಿಗಳಿಗೆ ಮಾತ್ರ ಫಲ ನೀಡುವ ಕಲ್ಪವೃಕ್ಷಗಳನ್ನು ನೋಡಿ ನಗುತ್ತಿರುವಂತಿವೆ; ಏಕೆಂದರೆ ನಿನ್ನ ಪಾದಗಳು ಬಡವರಿಗೆ ಮಂಗಳಕರವಾದ ಐಶ್ವರ್ಯವನ್ನು ಸದಾ ತಡಮಾಡದೆ ಕೊಡುತ್ತವೆ.',
          },
        },
        {
          n: 90,
          text: 'ददाने दीनेभ्यः श्रियमनिशमाशानुसदृशीम्\nअमन्दं सौन्दर्यप्रकरमकरन्दं विकिरति ।\nतवास्मिन् मन्दारस्तबकसुभगे यातु चरणे\nनिमज्जन् मज्जीवः करणचरणः षट्चरणताम् ॥',
          meaning: {
            en: 'May my soul, with its six senses for feet, become a six-footed bee and plunge into your foot, lovely as a cluster of mandāra flowers, which ever gives the poor wealth as great as their hopes and pours out the honey of beauty.',
            kn: 'ದೀನರಿಗೆ ಅವರ ಆಸೆಗೆ ತಕ್ಕ ಸಂಪತ್ತನ್ನು ಸದಾ ಕೊಡುವ, ಸೌಂದರ್ಯದ ಮಕರಂದವನ್ನು ಹೇರಳವಾಗಿ ಸುರಿಸುವ, ಮಂದಾರ ಹೂಗೊಂಚಲಿನಂತೆ ಸುಂದರವಾದ ನಿನ್ನ ಪಾದದಲ್ಲಿ, ಆರು ಇಂದ್ರಿಯಗಳನ್ನೇ ಕಾಲುಗಳಾಗಿ ಉಳ್ಳ ನನ್ನ ಜೀವವು ಮುಳುಗಿ ದುಂಬಿಯಾಗಲಿ.',
          },
        },
        {
          n: 91,
          text: 'पदन्यासक्रीडापरिचयमिवारब्धुमनसः\nस्खलन्तस्ते खेलं भवनकलहंसा न जहति ।\nअतस्तेषां शिक्षां सुभगमणिमञ्जीररणित-\nच्छलादाचक्षाणं चरणकमलं चारुचरिते ॥',
          meaning: {
            en: 'O you of graceful ways, the swans of your palace, as if eager to learn your gait, keep stumbling after you; so your lotus feet seem to be teaching them, under the guise of the jingling of your jewelled anklets.',
            kn: 'ಸುಂದರ ಚರಿತ್ರೆಯುಳ್ಳವಳೇ, ನಿನ್ನ ನಡಿಗೆಯನ್ನು ಕಲಿಯಲು ಬಯಸಿದಂತೆ ನಿನ್ನ ಮನೆಯ ಹಂಸಗಳು ಎಡವುತ್ತಲೇ ನಿನ್ನನ್ನು ಹಿಂಬಾಲಿಸುತ್ತವೆ; ಆದ್ದರಿಂದ ನಿನ್ನ ಪಾದಕಮಲಗಳು ಮಣಿಗೆಜ್ಜೆಗಳ ನಾದದ ನೆಪದಿಂದ ಅವಕ್ಕೆ ಪಾಠ ಹೇಳುತ್ತಿರುವಂತಿವೆ.',
          },
        },
        {
          n: 92,
          text: 'गतास्ते मञ्चत्वं द्रुहिणहरिरुद्रेश्वरभृतः\nशिवः स्वच्छच्छायाघटितकपटप्रच्छदपटः ।\nत्वदीयानां भासां प्रतिफलनरागारुणतया\nशरीरी शृङ्गारो रस इव दृशां दोग्धि कुतुकम् ॥',
          meaning: {
            en: 'Brahmā, Hari, Rudra and Īśvara have become the legs of your couch, and Śiva, his clear lustre its coverlet, reddened by the reflection of your radiance, seems the sentiment of love in bodily form, delighting your eyes.',
            kn: 'ಬ್ರಹ್ಮ, ಹರಿ, ರುದ್ರ, ಈಶ್ವರರು ನಿನ್ನ ಮಂಚದ ಕಾಲುಗಳಾಗಿದ್ದಾರೆ; ಶುಭ್ರಕಾಂತಿಯುಳ್ಳ ಸದಾಶಿವನು ಅದರ ಹೊದಿಕೆಯಾಗಿದ್ದು, ನಿನ್ನ ಕಾಂತಿಯ ಪ್ರತಿಫಲನದಿಂದ ಕೆಂಪಾಗಿ, ದೇಹವನ್ನು ಧರಿಸಿದ ಶೃಂಗಾರರಸದಂತೆ ನಿನ್ನ ಕಣ್ಣುಗಳಿಗೆ ಆನಂದ ನೀಡುತ್ತಾನೆ.',
          },
        },
        {
          n: 93,
          text: 'अराला केशेषु प्रकृतिसरला मन्दहसिते\nशिरीषाभा चित्ते दृषदुपलशोभा कुचतटे ।\nभृशं तन्वी मध्ये पृथुरुरसिजारोहविषये\nजगत्त्रातुं शम्भोर्जयति करुणा काचिदरुणा ॥',
          meaning: {
            en: 'Curling in her tresses, simple in her gentle smile, soft as the śirīṣa flower at heart, firm at the bosom, slender at the waist and full at the hips: so shines a wondrous rosy Compassion of Śambhu, come to save the world.',
            kn: 'ಕೂದಲಿನಲ್ಲಿ ಗುಂಗುರಾಗಿ, ಮಂದಹಾಸದಲ್ಲಿ ಸರಳಳಾಗಿ, ಮನಸ್ಸಿನಲ್ಲಿ ಶಿರೀಷ ಪುಷ್ಪದಂತೆ ಕೋಮಲಳಾಗಿ, ವಕ್ಷಸ್ಥಳದಲ್ಲಿ ದೃಢಳಾಗಿ, ನಡುವಿನಲ್ಲಿ ತೆಳುವಾಗಿ, ನಿತಂಬದಲ್ಲಿ ವಿಶಾಲಳಾಗಿರುವ, ಜಗತ್ತನ್ನು ರಕ್ಷಿಸಲು ಮೂರ್ತಿವೆತ್ತ ಶಂಭುವಿನ ಅರುಣವರ್ಣದ ಅಪೂರ್ವ ಕರುಣೆಯು ವಿಜಯಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 94,
          text: 'कलङ्कः कस्तूरी रजनिकरबिम्बं जलमयं\nकलाभिः कर्पूरैर्मरकतकरण्डं निबिडितम् ।\nअतस्त्वद्भोगेन प्रतिदिनमिदं रिक्तकुहरं\nविधिर्भूयो भूयो निबिडयति नूनं तव कृते ॥',
          meaning: {
            en: 'The dark mark of the moon is your musk; the moon’s watery disc is your emerald casket, filled with its digits as pieces of camphor. Because you use them up each day, Brahmā surely refills it for you again and again.',
            kn: 'ಚಂದ್ರನಲ್ಲಿರುವ ಕಲೆಯೇ ನಿನ್ನ ಕಸ್ತೂರಿ; ಜಲಮಯವಾದ ಚಂದ್ರಬಿಂಬವೇ ಕರ್ಪೂರದ ತುಣುಕುಗಳಂತಿರುವ ಕಲೆಗಳಿಂದ ತುಂಬಿದ ನಿನ್ನ ಮರಕತದ ಭರಣಿ. ನೀನು ಪ್ರತಿದಿನ ಅದನ್ನು ಬಳಸಿ ಖಾಲಿ ಮಾಡುವುದರಿಂದಲೇ ಬ್ರಹ್ಮನು ನಿನಗಾಗಿ ಅದನ್ನು ಮತ್ತೆ ಮತ್ತೆ ತುಂಬಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 95,
          text: 'पुरारातेरन्तःपुरमसि ततस्त्वच्चरणयोः\nसपर्यामर्यादा तरलकरणानामसुलभा ।\nतथा ह्येते नीताः शतमखमुखाः सिद्धिमतुलां\nतव द्वारोपान्तस्थितिभिरणिमाद्याभिरमराः ॥',
          meaning: {
            en: 'You are the queen of the inner palace of Tripura’s destroyer, so the right to worship your feet is not easily won by those with restless senses. That is why Indra and the other gods stay at your gate with Aṇimā and the other powers, and gain matchless attainments there.',
            kn: 'ನೀನು ತ್ರಿಪುರಾರಿಯ ಅಂತಃಪುರದ ಒಡತಿ; ಆದ್ದರಿಂದ ಚಂಚಲ ಇಂದ್ರಿಯಗಳುಳ್ಳವರಿಗೆ ನಿನ್ನ ಪಾದಪೂಜೆಯ ಅವಕಾಶ ಸುಲಭವಲ್ಲ. ಹಾಗಾಗಿಯೇ ಇಂದ್ರನೇ ಮೊದಲಾದ ದೇವತೆಗಳು ಅಣಿಮಾದಿ ಸಿದ್ಧಿಗಳೊಡನೆ ನಿನ್ನ ಬಾಗಿಲ ಬಳಿಯಲ್ಲೇ ನಿಂತು ಅನುಪಮ ಸಿದ್ಧಿಯನ್ನು ಪಡೆದಿದ್ದಾರೆ.',
          },
        },
        {
          n: 96,
          text: 'कलत्रं वैधात्रं कति कति भजन्ते न कवयः\nश्रियो देव्याः को वा न भवति पतिः कैरपि धनैः ।\nमहादेवं हित्वा तव सति सतीनामचरमे\nकुचाभ्यामासङ्गः कुरवकतरोरप्यसुलभः ॥',
          meaning: {
            en: 'How many poets do not win the favour of learning, Brahmā’s consort? Who does not become a master of wealth with a little riches? But you, O faithful one, first among devoted wives, are for Mahādeva alone; the embrace of your breasts is not granted even to the kuravaka tree (which blossoms when a woman embraces it).',
            kn: 'ಎಷ್ಟು ಕವಿಗಳು ಬ್ರಹ್ಮನ ಪತ್ನಿಯಾದ ವಿದ್ಯೆಯನ್ನು ಒಲಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ? ಸ್ವಲ್ಪ ಹಣದಿಂದಲೇ ಯಾರು ಸಂಪತ್ತಿನ ಒಡೆಯರಾಗುವುದಿಲ್ಲ? ಆದರೆ ಪತಿವ್ರತೆಯರಲ್ಲಿ ಅಗ್ರಗಣ್ಯಳಾದ ಸತಿಯೇ, ನೀನು ಮಹಾದೇವನಿಗೆ ಮಾತ್ರ ಸೇರಿದವಳು; ಸ್ತ್ರೀಯ ಆಲಿಂಗನದಿಂದ ಅರಳುವ ಕುರವಕ ವೃಕ್ಷಕ್ಕೂ ನಿನ್ನ ಸ್ತನಗಳ ಸ್ಪರ್ಶ ದೊರಕದು.',
          },
        },
        {
          n: 97,
          text: 'गिरामाहुर्देवीं द्रुहिणगृहिणीमागमविदो\nहरेः पत्नीं पद्मां हरसहचरीमद्रितनयाम् ।\nतुरीया कापि त्वं दुरधिगमनिःसीममहिमा\nमहामाया विश्वं भ्रमयसि परब्रह्ममहिषि ॥',
          meaning: {
            en: 'Those versed in scripture call you Sarasvatī, consort of Brahmā; Padmā, wife of Hari; and Pārvatī, companion of Hara. But you are the indescribable Fourth, of boundless, unfathomable glory, Mahāmāyā, who sets the universe turning, O queen of the supreme Brahman.',
            kn: 'ಆಗಮಗಳನ್ನು ಬಲ್ಲವರು ನಿನ್ನನ್ನು ಬ್ರಹ್ಮನ ಪತ್ನಿ ವಾಗ್ದೇವಿ ಎಂದೂ, ಹರಿಯ ಪತ್ನಿ ಪದ್ಮಾ ಎಂದೂ, ಹರನ ಸಹಚರಿ ಪಾರ್ವತಿ ಎಂದೂ ಹೇಳುತ್ತಾರೆ; ಆದರೆ ನೀನು ಅರಿಯಲು ಅಸಾಧ್ಯವಾದ ಅಪಾರ ಮಹಿಮೆಯುಳ್ಳ ಅನಿರ್ವಚನೀಯ ತುರೀಯಳು; ಪರಬ್ರಹ್ಮನ ಮಹಿಷಿಯೇ, ಮಹಾಮಾಯೆಯಾಗಿ ಜಗತ್ತನ್ನು ಚಲಿಸುವಂತೆ ಮಾಡುತ್ತೀಯೆ.',
          },
        },
        {
          n: 98,
          text: 'कदा काले मातः कथय कलितालक्तकरसं\nपिबेयं विद्यार्थी तव चरणनिर्णेजनजलम् ।\nप्रकृत्या मूकानामपि च कविताकारणतया\nकदा धत्ते वाणीमुखकमलताम्बूलरसताम् ॥',
          meaning: {
            en: 'Tell me, Mother, when shall I, a seeker of knowledge, drink the water that has washed your lac-red feet? When will that water, which makes poets even of those born mute, become for me like the betel juice from Sarasvatī’s lotus mouth?',
            kn: 'ತಾಯೇ, ಹೇಳು, ವಿದ್ಯಾರ್ಥಿಯಾದ ನಾನು ಅರಗಿನ ಬಣ್ಣದಿಂದ ಕೂಡಿದ ನಿನ್ನ ಪಾದಗಳನ್ನು ತೊಳೆದ ತೀರ್ಥವನ್ನು ಯಾವಾಗ ಕುಡಿಯುವೆನು? ಹುಟ್ಟಿನಿಂದ ಮೂಕರಾದವರನ್ನೂ ಕವಿಗಳನ್ನಾಗಿಸುವ ಆ ತೀರ್ಥವು ಯಾವಾಗ ನನಗೆ ಸರಸ್ವತಿಯ ಮುಖಕಮಲದ ತಾಂಬೂಲರಸದಂತಾಗುವುದು?',
          },
        },
        {
          n: 99,
          text: 'सरस्वत्या लक्ष्म्या विधिहरिसपत्नो विहरते\nरतेः पातिव्रत्यं शिथिलयति रम्येण वपुषा ।\nचिरं जीवन्नेव क्षपितपशुपाशव्यतिकरः\nपरानन्दाभिख्यं रसयति रसं त्वद्भजनवान् ॥',
          meaning: {
            en: 'Your devotee becomes the equal of Brahmā and Hari in learning and wealth, and so handsome that he could shake even Rati’s constancy; living long, his bonds as a bound soul destroyed, he tastes the joy called supreme bliss.',
            kn: 'ನಿನ್ನನ್ನು ಭಜಿಸುವವನು ವಿದ್ಯೆ ಮತ್ತು ಸಂಪತ್ತುಗಳಲ್ಲಿ ಬ್ರಹ್ಮ, ಹರಿಯರಿಗೆ ಸಮಾನನಾಗುತ್ತಾನೆ; ರತಿಯ ಪಾತಿವ್ರತ್ಯವನ್ನೂ ಸಡಿಲಗೊಳಿಸುವಷ್ಟು ಸುಂದರನಾಗುತ್ತಾನೆ; ಬಹುಕಾಲ ಬಾಳಿ, ಪಶುಪಾಶಗಳ ಬಂಧನ ನಾಶವಾಗಿ, ಪರಾನಂದವೆಂಬ ರಸವನ್ನು ಸವಿಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 100,
          text: 'प्रदीपज्वालाभिर्दिवसकरनीराजनविधिः\nसुधासूतेश्चन्द्रोपलजललवैरर्घ्यरचना ।\nस्वकीयैरम्भोभिः सलिलनिधिसौहित्यकरणं\nत्वदीयाभिर्वाग्भिस्तव जननि वाचां स्तुतिरियम् ॥',
          meaning: {
            en: 'Like waving a lamp before the sun, offering the moon water from moonstone, or pleasing the ocean with its own water, is this hymn to you, O Mother of speech, made of words that are your own.',
            kn: 'ದೀಪದ ಜ್ವಾಲೆಯಿಂದ ಸೂರ್ಯನಿಗೆ ನೀರಾಜನ ಮಾಡಿದಂತೆ, ಚಂದ್ರಕಾಂತಶಿಲೆಯ ನೀರಿನಿಂದ ಚಂದ್ರನಿಗೆ ಅರ್ಘ್ಯ ಕೊಟ್ಟಂತೆ, ಸಮುದ್ರವನ್ನು ಅದರದೇ ನೀರಿನಿಂದ ತೃಪ್ತಿಪಡಿಸಿದಂತೆ, ವಾಕ್ಕುಗಳ ಜನನಿಯೇ, ನಿನ್ನದೇ ಆದ ಮಾತುಗಳಿಂದ ರಚಿಸಿದ ಈ ಸ್ತುತಿ ನಿನಗೇ ಅರ್ಪಿತ.',
          },
        },
      ],
    },
  ],
};
