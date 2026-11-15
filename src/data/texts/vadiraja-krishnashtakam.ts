// Krishnashtaka ("Palayachyuta") of Sri Vadiraja Tirtha, on Sri Krishna of Udupi (Rupyapitha, the
// "silver seat"). Collated from three typed copies: madhwafestivals.com ("Krishna ashtakam by
// vadirajaru", Kannada, 2016), raocollectionssongs.blogspot.com ("Paalayaachyuta Krishnashtakam",
// Kannada, 2020), and the Devanagari copy reproduced on the same page (the sanskritdocuments text,
// "atha krishnashtakam"), which breaks off after the first half of verse 9; the second half of 9 is
// in both Kannada copies.
// Where the copies differ, the reading of two against one is kept:
//   rupya- (Rao and Devanagari; madhwafestivals "raupya-", same sense: of silver) throughout;
//   2b -sarorasam (madhwafestivals "sarosam"); 4a -rashana- "girdle" (madhwafestivals "rasana");
//   6b -bhanu-mandala- (madhwafestivals "-bhara-mandala-"); 8b taraka-upama "like stars"
//   (madhwafestivals "dvarakopama", which is the reading of 8d).
// The refrain is sung at the start and after every verse.
import type { Mantra } from '../types';

export const vadirajaKrishnashtakam: Mantra = {
  id: 'vadiraja-krishnashtakam',
  title: 'श्रीकृष्णाष्टकम् (पालयाच्युत)',
  titleEn: 'Krishnashtaka (Palayachyuta) · Sri Vadiraja',
  category: 'madhva',
  deity: 'Sri Krishna (Udupi)',
  source: 'Sri Vadiraja Tirtha',
  summary:
    'Eight verses and a closing verse by Sri Vadiraja Tirtha on Sri Krishna of Udupi, "who has made his home on the silver seat" (Rupyapitha, the old name of Udupi). Each verse looks at one part of the image, from the shining face and conch-like neck down to the lotus feet, the churning rope in the hand, the golden girdle and anklets, and asks the mind to remember, worship, bow and hold Him in the heart. The refrain "Palayachyuta, palayajita" (protect me, Achyuta; protect me, Ajita) is sung after every verse.',
  summaryKn:
    'ಉಡುಪಿಯ ಶ್ರೀಕೃಷ್ಣನ ಮೇಲೆ ಶ್ರೀವಾದಿರಾಜತೀರ್ಥರು ರಚಿಸಿದ ಎಂಟು ಶ್ಲೋಕಗಳು ಮತ್ತು ಫಲಶ್ಲೋಕ. "ರೂಪ್ಯಪೀಠ"ದಲ್ಲಿ (ಬೆಳ್ಳಿಯ ಪೀಠ, ಉಡುಪಿಯ ಹಳೆಯ ಹೆಸರು) ನೆಲೆಸಿದ ಹರಿಯ ಮುಖ, ಶಂಖದಂತಹ ಕಂಠದಿಂದ ಹಿಡಿದು ಕಡೆಗೋಲು-ಹಗ್ಗ ಹಿಡಿದ ಕೈಗಳು, ಚಿನ್ನದ ಉಡಿದಾರ, ಗೆಜ್ಜೆ, ಪಾದಕಮಲಗಳವರೆಗೆ ಒಂದೊಂದು ಶ್ಲೋಕದಲ್ಲಿ ವರ್ಣಿಸಿ, ಮನಸ್ಸೇ ಅವನನ್ನು ಸ್ಮರಿಸು, ಭಜಿಸು, ಹೃದಯದಲ್ಲಿ ಧರಿಸು ಎನ್ನುತ್ತಾರೆ. "ಪಾಲಯಾಚ್ಯುತ ಪಾಲಯಾಜಿತ" ಎಂಬ ಪಲ್ಲವಿಯನ್ನು ಪ್ರತಿ ಶ್ಲೋಕದ ನಂತರ ಹಾಡುತ್ತಾರೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Refrain',
      verses: [
        {
          n: 0,
          text: 'पालयाच्युत पालयाजित पालय कमलालय ।\nलीलया धृतभूधराम्बुरुहोदर स्वजनोदर ॥',
          meaning: {
            en: 'Protect me, Achyuta (who never falls); protect me, Ajita (the unconquered); protect me, abode of Lakshmi. You who held up the mountain in play, from whose navel the lotus rises, who keeps your own people safe within you.',
            kn: 'ಅಚ್ಯುತನೇ ಕಾಪಾಡು, ಅಜಿತನೇ ಕಾಪಾಡು, ಲಕ್ಷ್ಮಿಗೆ ನೆಲೆಯಾದವನೇ ಕಾಪಾಡು. ಲೀಲೆಯಿಂದ ಗೋವರ್ಧನ ಬೆಟ್ಟವನ್ನು ಎತ್ತಿಹಿಡಿದವನೇ, ಹೊಕ್ಕುಳಲ್ಲಿ ಕಮಲವುಳ್ಳವನೇ, ತನ್ನವರನ್ನು ತನ್ನೊಳಗಿಟ್ಟು ಕಾಯುವವನೇ.',
          },
        },
      ],
    },
    {
      title: 'अष्टकम्',
      titleEn: 'The eight verses',
      verses: [
        {
          n: 1,
          text: 'मध्वमानसपद्मभानुसमं स्मरप्रतिमं स्मर\nस्निग्धनिर्मलशीतकान्तिलसन्मुखं करुणोन्मुखम् ।\nहृद्यकम्बुसमानकन्धरमक्षयं दुरितक्षयं\nस्निग्धसंस्तुतरूप्यपीठकृतालयं हरिमालयम् ॥',
          meaning: {
            en: 'Remember Him, who is like the sun to the lotus of Madhva\'s mind, lovely as Manmatha; whose face shines with a gentle, pure, cool radiance, ever turned to compassion; whose neck is graceful like a conch; the imperishable, destroyer of sins; praised by those who love Him: Hari, the refuge, who has made His home on the silver seat.',
            kn: 'ಮಧ್ವಾಚಾರ್ಯರ ಮನಸ್ಸೆಂಬ ಕಮಲಕ್ಕೆ ಸೂರ್ಯನಂತಿರುವ, ಮನ್ಮಥನಂತೆ ಸುಂದರನಾದ, ಸ್ನಿಗ್ಧವೂ ನಿರ್ಮಲವೂ ತಂಪೂ ಆದ ಕಾಂತಿಯಿಂದ ಹೊಳೆಯುವ ಮುಖವುಳ್ಳ, ಕರುಣೆಗೆ ಸದಾ ಸಿದ್ಧನಾದ, ಶಂಖದಂತೆ ಸುಂದರವಾದ ಕಂಠವುಳ್ಳ, ಅಕ್ಷಯನಾದ, ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವ, ಪ್ರೀತಿಯುಳ್ಳ ಭಕ್ತರಿಂದ ಸ್ತುತನಾದ, ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ, ಎಲ್ಲರಿಗೂ ಆಶ್ರಯನಾದ ಹರಿಯನ್ನು ಸ್ಮರಿಸು.',
          },
        },
        {
          n: 2,
          text: 'अङ्गदादिसुशोभिपाणियुगेन संक्षुभितैनसं\nतुङ्गमाल्यमणीन्द्रहारसरोरसं खलनीरसम् ।\nमङ्गलप्रदमन्थदामविराजितं भजताजितं\nतं गृणे वररूप्यपीठकृतालयं हरिमालयम् ॥',
          meaning: {
            en: 'With His two hands, lovely with armlets and bracelets, He scatters our sins; on His broad chest lie long garlands and a necklace of the finest gems; the wicked find no taste in Him. He shines with the churning rope that brings blessings. Worship the Unconquered! I praise Him, Hari, the refuge, who has made His home on the excellent silver seat.',
            kn: 'ಅಂಗದವೇ ಮೊದಲಾದ ಆಭರಣಗಳಿಂದ ಶೋಭಿಸುವ ಎರಡು ಕೈಗಳಿಂದ ಪಾಪಗಳನ್ನು ಚದುರಿಸುವ, ಎತ್ತರವಾದ ಮಾಲೆಗಳೂ ಶ್ರೇಷ್ಠ ಮಣಿಗಳ ಹಾರವೂ ಇರುವ ವಿಶಾಲ ಎದೆಯುಳ್ಳ, ದುಷ್ಟರಿಗೆ ರುಚಿಸದ, ಮಂಗಳವನ್ನು ಕೊಡುವ ಕಡೆಗೋಲಿನ ಹಗ್ಗದಿಂದ ವಿರಾಜಿಸುವ ಆ ಅಜಿತನನ್ನು ಭಜಿಸಿರಿ. ಶ್ರೇಷ್ಠವಾದ ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ, ಆಶ್ರಯನಾದ ಆ ಹರಿಯನ್ನು ನಾನು ಸ್ತುತಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 3,
          text: 'पीनरम्यतनूदरं भज हे मनः शुभ हे मनः\nस्वानुभावनिदर्शनाय दिशन्तमर्थिसुशन्तमम् ।\nआनतोऽस्मि निजार्जुनप्रियसाधकं खलबाधकं\nहीनतोज्झितरूप्यपीठकृतालयं हरिमालयम् ॥',
          meaning: {
            en: 'O mind, O good mind, worship Him of the full and lovely form and belly, who, to show His own greatness, gives the highest happiness to those who ask. I bow to Him who did what was dear to His own Arjuna and who torments the wicked: Hari, the refuge, free from every lack, who has made His home on the silver seat.',
            kn: 'ಮನಸ್ಸೇ, ಶುಭವಾದ ಮನಸ್ಸೇ, ಪುಷ್ಟವೂ ಸುಂದರವೂ ಆದ ದೇಹ-ಉದರವುಳ್ಳ, ತನ್ನ ಮಹಿಮೆಯನ್ನು ತೋರಿಸಲು ಬೇಡುವವರಿಗೆ ಪರಮಸುಖವನ್ನು ಕೊಡುವವನನ್ನು ಭಜಿಸು. ತನ್ನ ಅರ್ಜುನನಿಗೆ ಪ್ರಿಯವಾದುದನ್ನು ಸಾಧಿಸಿದ, ದುಷ್ಟರನ್ನು ಬಾಧಿಸುವ, ಯಾವ ಕೊರತೆಯೂ ಇಲ್ಲದ, ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ, ಆಶ್ರಯನಾದ ಹರಿಗೆ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 4,
          text: 'हैमकिङ्किणिमालिकारशनाञ्चितं तमवञ्चितं\nकम्रकाञ्चनवस्त्रचित्रकटिं घनप्रभया घनम् ।\nनम्रनागकरोपमोरुमनामयं शुभधीमयं\nनौम्यहं वररूप्यपीठकृतालयं हरिमालयम् ॥',
          meaning: {
            en: 'Adorned with a girdle hung with a string of little golden bells, Him whom no one can deceive; whose waist is bright with a lovely golden cloth, dark like a rain-cloud in His deep lustre; whose thighs are like the trunk of a bending elephant; free from all ill, full of auspicious wisdom: I praise Hari, the refuge, who has made His home on the excellent silver seat.',
            kn: 'ಚಿನ್ನದ ಕಿರುಗೆಜ್ಜೆಗಳ ಸಾಲಿನ ಉಡಿದಾರದಿಂದ ಅಲಂಕೃತನಾದ, ಯಾರಿಂದಲೂ ವಂಚಿತನಾಗದ, ಸುಂದರವಾದ ಚಿನ್ನದ ವಸ್ತ್ರದಿಂದ ಶೋಭಿಸುವ ಸೊಂಟವುಳ್ಳ, ದಟ್ಟ ಕಾಂತಿಯಿಂದ ಮೋಡದಂತೆ ಶ್ಯಾಮಲನಾದ, ಬಾಗಿದ ಆನೆಯ ಸೊಂಡಿಲಿನಂತಹ ತೊಡೆಗಳುಳ್ಳ, ರೋಗರಹಿತನಾದ, ಶುಭವಾದ ಜ್ಞಾನಮಯನಾದ, ಶ್ರೇಷ್ಠ ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ, ಆಶ್ರಯನಾದ ಹರಿಯನ್ನು ನಾನು ಸ್ತುತಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 5,
          text: 'वृत्तजानुमनोज्ञजङ्घममोहदं परमोहदं\nरत्नकल्पनखत्विषा हृतहृत्तमस्ततिमुत्तमम् ।\nप्रत्यहं रचितार्चनं रमया स्वयाऽऽगतया स्वयं\nचित्त चिन्तय रूप्यपीठकृतालयं हरिमालयम् ॥',
          meaning: {
            en: 'With rounded knees and lovely shanks; who gives no delusion to His own, and deludes the hostile; the Highest, whose toenails shine like gems and drive away the mass of darkness in the heart; worshipped every day by His own Rama (Lakshmi), who comes of her own accord: O mind, meditate on Hari, the refuge, who has made His home on the silver seat.',
            kn: 'ದುಂಡನೆಯ ಮೊಣಕಾಲು, ಸುಂದರವಾದ ಕಣಕಾಲುಗಳುಳ್ಳ, ತನ್ನವರಿಗೆ ಮೋಹವನ್ನು ಕೊಡದೆ ವಿರೋಧಿಗಳಿಗೆ ಮೋಹವನ್ನುಂಟುಮಾಡುವ, ರತ್ನಗಳಂತಹ ಉಗುರುಗಳ ಕಾಂತಿಯಿಂದ ಹೃದಯದ ಕತ್ತಲೆಯ ರಾಶಿಯನ್ನು ಕಳೆಯುವ ಉತ್ತಮನಾದ, ತಾನಾಗಿಯೇ ಬಂದ ತನ್ನ ರಮೆಯಿಂದ (ಲಕ್ಷ್ಮಿ) ಪ್ರತಿದಿನ ಪೂಜಿತನಾದ, ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ, ಆಶ್ರಯನಾದ ಹರಿಯನ್ನು, ಮನಸ್ಸೇ, ಚಿಂತಿಸು.',
          },
        },
        {
          n: 6,
          text: 'चारुपादसरोजयुग्मरुचाऽमरोच्चयचामरो-\nदारमूर्धजभानुमण्डलरञ्जकं कलिभञ्जकम् ।\nवीरतोचितभूषणं वरनूपुरं स्वतनूपुरं\nधारयात्मनि रूप्यपीठकृतालयं हरिमालयम् ॥',
          meaning: {
            en: 'With the glow of His two lovely lotus feet He colours the shining crowns on the heads of the hosts of gods, their hair fine as chowries, bowed before Him; the breaker of Kali; wearing ornaments fit for a hero and fine anklets; whose body is His own city (not made of matter): hold in your heart Hari, the refuge, who has made His home on the silver seat.',
            kn: 'ಸುಂದರವಾದ ಎರಡು ಪಾದಕಮಲಗಳ ಕಾಂತಿಯಿಂದ, ತಲೆಬಾಗಿದ ದೇವತೆಗಳ ಸಮೂಹದ ಚಾಮರದಂತಹ ಕೂದಲಿನ ತಲೆಗಳ ಮೇಲಿನ ಕಿರೀಟಗಳ ಹೊಳಪನ್ನು ರಂಜಿಸುವ, ಕಲಿಯನ್ನು ಮುರಿಯುವ, ವೀರನಿಗೆ ತಕ್ಕ ಆಭರಣಗಳೂ ಶ್ರೇಷ್ಠ ಗೆಜ್ಜೆಗಳೂ ಉಳ್ಳ, ತನ್ನ ದೇಹವೇ ತನ್ನ ಪುರವಾಗಿರುವ (ಪ್ರಾಕೃತವಲ್ಲದ ದೇಹವುಳ್ಳ), ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ, ಆಶ್ರಯನಾದ ಹರಿಯನ್ನು ಹೃದಯದಲ್ಲಿ ಧರಿಸು.',
          },
        },
        {
          n: 7,
          text: 'शुष्कवादिमनोऽतिदूरतरागमोत्सवदागमं\nसत्कवीन्द्रवचोविलासमहोदयं महितोदयम् ।\nलक्षयामि यतीश्वरैः कृतपूजनं गुणभाजनं\nधिक्कृतोपमरूप्यपीठकृतालयं हरिमालयम् ॥',
          meaning: {
            en: 'He is known through the scriptures, which lie far beyond the minds of dry debaters and are a festival of joy; He is the great rise of the graceful words of the best poets, of glorious appearing. I behold Him, worshipped by the great ascetics, the treasury of virtues: Hari, the refuge, beyond all comparison, who has made His home on the silver seat.',
            kn: 'ಒಣವಾದಿಗಳ ಮನಸ್ಸಿಗೆ ಬಹುದೂರವಾದ, ಆನಂದದ ಉತ್ಸವವನ್ನು ಕೊಡುವ ಆಗಮಗಳಿಂದ ತಿಳಿಯಲ್ಪಡುವ, ಸತ್ಕವಿಶ್ರೇಷ್ಠರ ವಾಕ್‌ವಿಲಾಸಕ್ಕೆ ಮಹಾ ಉದಯವಾದ, ಮಹಿಮೆಯ ಉದಯವುಳ್ಳ, ಯತಿಶ್ರೇಷ್ಠರಿಂದ ಪೂಜಿತನಾದ, ಗುಣಗಳಿಗೆ ಪಾತ್ರನಾದ, ಎಲ್ಲ ಹೋಲಿಕೆಗಳನ್ನೂ ಮೀರಿದ, ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ, ಆಶ್ರಯನಾದ ಹರಿಯನ್ನು ನಾನು ಕಾಣುತ್ತೇನೆ.',
          },
        },
        {
          n: 8,
          text: 'नारदप्रियमाविशाम्बुरुहेक्षणं निजरक्षणं\nतारकोपमचारुदीपचयान्तरे गतचिन्त रे ।\nधीर मानस पूर्णचन्द्रसमानमच्युतमानम\nद्वारकोपमरूप्यपीठकृतालयं हरिमालयम् ॥',
          meaning: {
            en: 'O steady mind, free from care, enter into Him, dear to Narada, lotus-eyed, the protector of His own, shining like the full moon amid the rows of lovely lamps that glitter like stars; bow to Achyuta, Hari, the refuge, who has made His home on the silver seat, a place like Dvaraka.',
            kn: 'ಧೀರವಾದ ಮನಸ್ಸೇ, ಚಿಂತೆಯನ್ನು ಬಿಟ್ಟು, ನಾರದರಿಗೆ ಪ್ರಿಯನಾದ, ಕಮಲದಂತಹ ಕಣ್ಣುಳ್ಳ, ತನ್ನವರನ್ನು ರಕ್ಷಿಸುವ, ನಕ್ಷತ್ರಗಳಂತೆ ಹೊಳೆಯುವ ಸುಂದರ ದೀಪಗಳ ಸಾಲಿನ ನಡುವೆ ಪೂರ್ಣಚಂದ್ರನಂತೆ ಶೋಭಿಸುವವನನ್ನು ಪ್ರವೇಶಿಸು (ಧ್ಯಾನಿಸು). ದ್ವಾರಕೆಯಂತಿರುವ ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ, ಆಶ್ರಯನಾದ ಅಚ್ಯುತನಾದ ಹರಿಗೆ ನಮಸ್ಕರಿಸು.',
          },
        },
        {
          n: 9,
          text: 'रूप्यपीठकृतालयस्य हरेः प्रियं दुरिताप्रियं\nतत्पदार्चकवादिराजयतीरितं गुणपूरितम् ।\nगोप्यमष्टकमेतदुच्चमुदे ममास्त्विह निर्मम\nप्राप्य शुद्धफलाय तत्र सुकोमलं हृतधीमलम् ॥',
          meaning: {
            en: 'This secret ashtaka, dear to Hari who has made His home on the silver seat and hateful to sin, full of virtues, spoken by the ascetic Vadiraja who worships His feet: may it be for my great joy here, O You who claim nothing as Your own; and, gentle and cleansing the impurity of the mind, may it lead to the pure fruit there, in the world beyond.',
            kn: 'ರೂಪ್ಯಪೀಠದಲ್ಲಿ ನೆಲೆಸಿದ ಹರಿಗೆ ಪ್ರಿಯವಾದ, ಪಾಪಕ್ಕೆ ಅಪ್ರಿಯವಾದ, ಅವನ ಪಾದಗಳನ್ನು ಪೂಜಿಸುವ ವಾದಿರಾಜಯತಿಗಳಿಂದ ಹೇಳಲ್ಪಟ್ಟ, ಗುಣಗಳಿಂದ ತುಂಬಿದ ಈ ರಹಸ್ಯವಾದ ಅಷ್ಟಕವು, ಮಮಕಾರವಿಲ್ಲದವನೇ, ಇಲ್ಲಿ ನನಗೆ ಮಹಾ ಆನಂದಕ್ಕಾಗಲಿ; ಮೃದುವಾಗಿ ಬುದ್ಧಿಯ ಕೊಳೆಯನ್ನು ಕಳೆಯುತ್ತ ಪರಲೋಕದಲ್ಲಿ ಶುದ್ಧವಾದ ಫಲವನ್ನು ಕೊಡಲಿ.',
          },
        },
      ],
    },
  ],
};
