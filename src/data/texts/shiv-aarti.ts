/**
 * Ōṁ Jaya Śiva Oṅkārā (Śrī Śiva kī Āratī), Hindi, in Devanagari. The closing stanza names Śivānanda Svāmī; the authorship is not certain.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com (B) and shubhpanchang.com (S). They agree in every
 * stanza apart from spelling ("भांग धतूर का / धतूरे का", "कमंडल / कमण्डलु"). B marks the four stanzas "लक्ष्मी व सावित्री …",
 * "पर्वत सोहें पार्वती …", "जटा में गंग बहत है …" and "काशी में विराजे विश्वनाथ …" as an addition; S sings them
 * before the closing stanza, and that order is followed, with the four in a section of their own. Closing stanza:
 * "सुख संपति पावे" (B) against "मनवांछित फल पावे" (S); the first is kept, being the same line as in the Jagdish aarti.
 * The refrain "ॐ जय शिव ओंकारा" is sung after each stanza. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const shivAarti: Mantra = {
  id: 'shiv-aarti',
  title: 'ॐ जय शिव ओंकारा आरती',
  titleEn: 'Om Jai Shiv Omkara Aarti',
  category: 'aarti',
  order: 29,
  deity: 'Śrī Śiva',
  source: 'Traditional Hindi aarti, with the name of Śivānanda Svāmī',
  summary: 'The Hindi aarti to Shiva sung on Mondays, at Pradosha and on Mahashivaratri. It greets him as the Om, Brahma, Vishnu and Sadashiva in one, describes his one, four and five faces, his rudraksha and skull garlands, tiger skin, trident and crescent moon, and ends with the Ganga in his hair, Kailasa, Kashi and the promise to those who sing it. Four stanzas that many printings add are given in a separate section.',
  summaryKn: 'ಸೋಮವಾರ, ಪ್ರದೋಷ ಮತ್ತು ಮಹಾಶಿವರಾತ್ರಿಯಂದು ಹಾಡುವ ಶಿವನ ಹಿಂದಿ ಆರತಿ. ಅವನನ್ನು ಓಂಕಾರ, ಬ್ರಹ್ಮ-ವಿಷ್ಣು-ಸದಾಶಿವರು ಒಂದೇ ಎಂದು ಸ್ವಾಗತಿಸಿ, ಅವನ ಒಂದು, ನಾಲ್ಕು, ಐದು ಮುಖಗಳು, ರುದ್ರಾಕ್ಷಿ-ಮುಂಡಮಾಲೆ, ಹುಲಿಚರ್ಮ, ತ್ರಿಶೂಲ, ಚಂದ್ರರೇಖೆಯನ್ನು ವರ್ಣಿಸಿ, ಜಟೆಯ ಗಂಗೆ, ಕೈಲಾಸ, ಕಾಶಿ ಮತ್ತು ಹಾಡುವವರಿಗೆ ಫಲಶ್ರುತಿಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ. ಅನೇಕ ಮುದ್ರಣಗಳಲ್ಲಿ ಸೇರಿಸುವ ನಾಲ್ಕು ಪದ್ಯಗಳು ಪ್ರತ್ಯೇಕ ವಿಭಾಗದಲ್ಲಿವೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The opening, sung again after each stanza.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಮತ್ತೆ ಹಾಡುವ ಪಲ್ಲವಿ.',
      verses: [
        {
          text: 'ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा ।\nब्रह्मा विष्णु सदाशिव, अर्द्धांगी धारा ॥',
          meaning: { en: 'Om, victory to Shiva, the Om; victory to my Lord Shiva, the Om. Brahma, Vishnu and Sadashiva, and the one who bears his consort as half of his body.', kn: 'ಓಂ, ಓಂಕಾರರೂಪಿ ಶಿವನಿಗೆ ಜಯ; ನನ್ನ ಸ್ವಾಮಿ ಓಂಕಾರ ಶಿವನಿಗೆ ಜಯ. ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ಸದಾಶಿವ; ಅರ್ಧದೇಹದಲ್ಲಿ ಪತ್ನಿಯನ್ನು ಧರಿಸಿದವನು.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain "Om Jai Shiv Omkara" is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ “ಓಂ ಜಯ ಶಿವ ಓಂಕಾರಾ” ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'एकानन चतुरानन, पंचानन राजे ।\nहंसासन गरुड़ासन, वृषवाहन साजे ॥',
          meaning: { en: 'With one face, four faces and five faces he shines; seated on the swan, on Garuda, and mounted on the bull, he is adorned.', kn: 'ಒಂದು ಮುಖ, ನಾಲ್ಕು ಮುಖ, ಐದು ಮುಖಗಳಿಂದ ಬೆಳಗುತ್ತಾನೆ; ಹಂಸಾಸನ, ಗರುಡಾಸನ, ವೃಷಭವಾಹನದಲ್ಲಿ ಶೋಭಿಸುತ್ತಾನೆ.' },
        },
        {
          n: 2,
          text: 'दो भुज चार चतुर्भुज, दसभुज अति सोहे ।\nत्रिगुण रूप निरखते, त्रिभुवन जन मोहे ॥',
          meaning: { en: 'With two arms, four arms and ten arms he is most beautiful; people of the three worlds are enchanted as they behold his form of the three qualities.', kn: 'ಎರಡು ಕೈ, ನಾಲ್ಕು ಕೈ, ಹತ್ತು ಕೈಗಳಿಂದ ಅತಿ ಶೋಭಿಸುತ್ತಾನೆ; ತ್ರಿಗುಣರೂಪವನ್ನು ನೋಡಿ ಮೂರು ಲೋಕಗಳ ಜನರು ಮೋಹಗೊಳ್ಳುತ್ತಾರೆ.' },
        },
        {
          n: 3,
          text: 'अक्षमाला वनमाला, मुण्डमाला धारी ।\nचंदन मृगमद सोहे, भाले शशिधारी ॥',
          meaning: { en: 'He wears a garland of rudraksha beads, a garland of forest flowers and a garland of skulls; sandalwood and musk shine on him, and he bears the moon on his forehead.', kn: 'ರುದ್ರಾಕ್ಷಿಮಾಲೆ, ವನಮಾಲೆ, ಮುಂಡಮಾಲೆಗಳನ್ನು ಧರಿಸಿದವನು; ಚಂದನ-ಕಸ್ತೂರಿ ಶೋಭಿಸುತ್ತವೆ, ಹಣೆಯಲ್ಲಿ ಚಂದ್ರನನ್ನು ಧರಿಸಿದವನು.' },
        },
        {
          n: 4,
          text: 'श्वेताम्बर पीताम्बर, बाघम्बर अंगे ।\nसनकादिक गरुड़ादिक, भूतादिक संगे ॥',
          meaning: { en: 'In white cloth, yellow cloth and a tiger\'s skin on his body; Sanaka and the sages, Garuda and the birds, and the spirits are his companions.', kn: 'ಬಿಳಿ ವಸ್ತ್ರ, ಹಳದಿ ವಸ್ತ್ರ, ದೇಹದ ಮೇಲೆ ಹುಲಿಚರ್ಮ; ಸನಕಾದಿಗಳು, ಗರುಡಾದಿಗಳು, ಭೂತಗಣಗಳು ಜೊತೆಯಲ್ಲಿವೆ.' },
        },
        {
          n: 5,
          text: 'कर के मध्य कमण्डलु, चक्र त्रिशूलधारी ।\nसुखकारी दुखहारी, जगपालन कारी ॥',
          meaning: { en: 'In his hands are a water pot, a discus and a trident; he brings happiness, removes sorrow, and sustains the world.', kn: 'ಕೈಗಳಲ್ಲಿ ಕಮಂಡಲು, ಚಕ್ರ, ತ್ರಿಶೂಲ ಧರಿಸಿದವನು; ಸುಖ ಕೊಡುವವನು, ದುಃಖ ಹರಿಸುವವನು, ಜಗತ್ತನ್ನು ಪಾಲಿಸುವವನು.' },
        },
        {
          n: 6,
          text: 'ब्रह्मा विष्णु सदाशिव, जानत अविवेका ।\nप्रणवाक्षर में शोभित, ये तीनों एका ॥',
          meaning: { en: 'Only the unwise think Brahma, Vishnu and Sadashiva are different; in the sacred syllable Om these three shine as one.', kn: 'ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ಸದಾಶಿವರನ್ನು ಬೇರೆ ಎಂದು ತಿಳಿಯುವವರು ವಿವೇಕವಿಲ್ಲದವರು; ಪ್ರಣವಾಕ್ಷರದಲ್ಲಿ ಈ ಮೂವರೂ ಒಂದಾಗಿ ಶೋಭಿಸುತ್ತಾರೆ.' },
        },
      ],
    },
    {
      title: 'अतिरिक्त पद',
      titleEn: 'Extra stanzas',
      note: 'Added in many printings, sung before the closing stanza.',
      noteKn: 'ಹಲವು ಮುದ್ರಣಗಳಲ್ಲಿ ಸೇರಿಸಿರುವ, ಕೊನೆಯ ಪದ್ಯದ ಮೊದಲು ಹಾಡುವ ಪದ್ಯಗಳು.',
      verses: [
        {
          text: 'लक्ष्मी व सावित्री, पार्वती संगा ।\nपार्वती अर्द्धांगी, शिवलहरी गंगा ॥',
          meaning: { en: 'Lakshmi, Savitri and Parvati are with him; Parvati is his other half, and the Ganga flows from Shiva\'s locks.', kn: 'ಲಕ್ಷ್ಮಿ, ಸಾವಿತ್ರಿ, ಪಾರ್ವತಿ ಅವನ ಜೊತೆಯಲ್ಲಿದ್ದಾರೆ; ಪಾರ್ವತಿ ಅವನ ಅರ್ಧಾಂಗಿ, ಶಿವನ ಜಟೆಯಿಂದ ಗಂಗೆ ಹರಿಯುತ್ತಾಳೆ.' },
        },
        {
          text: 'पर्वत सोहें पार्वती, शंकर कैलासा ।\nभांग धतूर का भोजन, भस्मी में वासा ॥',
          meaning: { en: 'The mountains grace Parvati, and Shankara dwells on Kailasa; his food is hemp and datura, and he lives in ashes.', kn: 'ಪರ್ವತಗಳು ಪಾರ್ವತಿಗೆ ಶೋಭೆ, ಶಂಕರ ಕೈಲಾಸದಲ್ಲಿ; ಭಂಗಿ-ಉಮ್ಮತ್ತಿ ಅವನ ಆಹಾರ, ವಿಭೂತಿಯಲ್ಲಿ ವಾಸ.' },
        },
        {
          text: 'जटा में गंग बहत है, गल मुण्डन माला ।\nशेष नाग लिपटावत, ओढ़त मृगछाला ॥',
          meaning: { en: 'The Ganga flows in his matted hair and a garland of skulls hangs from his neck; the serpent Shesha coils round him and he wears a deerskin.', kn: 'ಜಟೆಯಲ್ಲಿ ಗಂಗೆ ಹರಿಯುತ್ತಾಳೆ, ಕುತ್ತಿಗೆಯಲ್ಲಿ ಮುಂಡಮಾಲೆ; ಶೇಷನಾಗ ಸುತ್ತಿಕೊಂಡಿದೆ, ಜಿಂಕೆಚರ್ಮ ಹೊದ್ದಿದ್ದಾನೆ.' },
        },
        {
          text: 'काशी में विराजे विश्वनाथ, नंदी ब्रह्मचारी ।\nनित उठ दर्शन पावत, महिमा अति भारी ॥',
          meaning: { en: 'In Kashi he is enthroned as Vishvanatha, with the celibate Nandi; people rise each day to have his sight, and his greatness is very great.', kn: 'ಕಾಶಿಯಲ್ಲಿ ವಿಶ್ವನಾಥನಾಗಿ ವಿರಾಜಿಸುತ್ತಾನೆ, ಬ್ರಹ್ಮಚಾರಿ ನಂದಿಯೊಂದಿಗೆ; ಪ್ರತಿದಿನ ಎದ್ದು ದರ್ಶನ ಪಡೆಯುತ್ತಾರೆ, ಮಹಿಮೆ ಅತಿ ದೊಡ್ಡದು.' },
        },
      ],
    },
    {
      title: 'समापन',
      titleEn: 'Closing stanza',
      verses: [
        {
          text: 'त्रिगुणस्वामी जी की आरती, जो कोई नर गावे ।\nकहत शिवानन्द स्वामी, सुख संपति पावे ॥',
          meaning: { en: 'Whoever sings this aarti of the lord of the three qualities gains comfort and prosperity, says Shivananda Swami.', kn: 'ತ್ರಿಗುಣಸ್ವಾಮಿಯ ಈ ಆರತಿಯನ್ನು ಹಾಡುವವನು ಸುಖ-ಸಂಪತ್ತು ಪಡೆಯುತ್ತಾನೆ ಎಂದು ಶಿವಾನಂದ ಸ್ವಾಮಿ ಹೇಳುತ್ತಾರೆ.' },
        },
      ],
    },
  ],
};
