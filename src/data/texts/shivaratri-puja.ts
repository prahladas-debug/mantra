/**
 * Maha Shivaratri puja (Magha krishna chaturdashi): the fast, the night-long vigil and the worship
 * of Sri Shiva in the four yamas (watches) of the night, with the eightfold forms, the bilva
 * offering and the next-morning parana. Only what is specific to the vrata is given; the common
 * steps are in the app's Shodashopachara Puja text (see also Sri Rudram and Shiva Panchakshara).
 * Collated Nov 2026.
 *
 * WITNESSES
 *   D   Dharma Sastra Karadipika, Pt. K. Krishna Joyisa, Sringeri Sharada Samsthana, Sringeri 1986
 *       (Kannada script; archive.org dharma-sastra-karadipika), "Maha Shivaratri" (the rule for the
 *       four yamas and the short Parthiva (clay linga) puja). Smarta.
 *   R   Satika Vrata Ratnamala (Kannada script, Smarta; archive.org satika-vrata-ratnamala),
 *       "Masa Shivaratri Vrata Kalpa", pp. 186-196, for the sankalpa and the puja verses.
 *   S   "Shivaratri", Sri Nityananda Prakashana, Bengaluru 2016, a Kannada discourse on Shivaratri
 *       by Dr. K. G. Subrayasharma (archive.org shiva-ratri), for the vrata rules, the sixteen
 *       names of Shiva and the ekabilva verses.
 *   N   stotranidhi.com "Sri Shiva Shodasopachara Puja Vidhanam" (Telugu script), for the dhyana.
 *
 * CHOICES
 *   Dhyana ध्यायेन्नित्यं महेशम्: D N. Avahana आगच्छागच्छ देवेश: R only (printed from the scan).
 *   The eight forms (शर्व क्षितिमूर्ति ... ईशान सूर्यमूर्ति) and the sixteen names (भव शर्व ...): D S.
 *   Ekabilva verses त्रिदलं त्रिगुणाकारम् and त्रिशाखैर्बिल्वपत्रैः: S; the widely used Bilvashtakam
 *   is not in the app and its other verses were not collated.
 *   Madhva practice: the manuals read (Raghavendra Matha Vrata Muktavali, Mathada) do not give a
 *   Shivaratri puja; it is therefore given in the form of the Smarta manuals only (the text declares
 *   no tradition choice). Madhvas who keep the vrata follow their matha; the app's Vishnu and
 *   Rudra texts can be used for the stotra part.
 *   Yama sankalpas: the usual formula built from the rule in D (separate sankalpa for each yama).
 *
 */
import type { Mantra } from '../types';

export const shivaratriPuja: Mantra = {
  id: "shivaratri-puja",
  title: "महाशिवरात्रिपूजा",
  titleEn: "Maha Shivaratri Puja (four yama puja)",
  category: "puja",
  deity: "Sri Shiva (Sambasadashiva)",
  source: "Dharma Sastra Karadipika (Sringeri); Satika Vrata Ratnamala; Shivaratri (Nityananda Prakashana)",
  summary: "The Maha Shivaratri vrata of Magha krishna chaturdashi: fasting and keeping awake the whole night, and worshipping Sri Shiva with abhisheka in each of the four yamas (watches) of the night. Given here: the sankalpa, dhyana, avahana, the worship of the eight forms of Shiva, the sixteen names, the ekabilva verses, the separate sankalpa for each yama, and the parana.",
  summaryKn: "ಮಾಘ ಕೃಷ್ಣ ಚತುರ್ದಶಿಯ ಮಹಾಶಿವರಾತ್ರಿ ವ್ರತ: ಉಪವಾಸ, ರಾತ್ರಿಯಿಡೀ ಜಾಗರಣೆ ಮತ್ತು ರಾತ್ರಿಯ ನಾಲ್ಕು ಯಾಮಗಳಲ್ಲಿ ಶ್ರೀಶಿವನಿಗೆ ಅಭಿಷೇಕ-ಪೂಜೆ. ಇಲ್ಲಿ: ಸಂಕಲ್ಪ, ಧ್ಯಾನ, ಆವಾಹನೆ, ಶಿವನ ಅಷ್ಟಮೂರ್ತಿ ಪೂಜೆ, ಹದಿನಾರು ನಾಮಗಳು, ಏಕಬಿಲ್ವ ಶ್ಲೋಕಗಳು, ಪ್ರತಿ ಯಾಮದ ಸಂಕಲ್ಪ ಮತ್ತು ಪಾರಣೆ.",
  difficulty: "medium",
  completeness: "partial",
  contentNote: "Gives only what is specific to this vrata, in the form of the Smarta manuals (no Madhva Shivaratri manual was found; Madhvas follow their matha). Acamana, pranayama, the desha-kala sankalpa, Ganapati puja, kalasha puja, prana-pratishtha and the sixteen upacharas for Shiva (with the name ॐ नमः शिवाय) are as in the Shodashopachara Puja text. The abhisheka is done with Sri Rudram (read it from the app) eleven or more times in each yama, or with the panchakshara; the substances used in each yama differ by family and are not fixed in the manuals read. Left out: the Shiva ashtottara and sahasranama, the Parthiva linga making in full, the udyapana, the Shivaratri katha (Shiva Purana story of the hunter), and the Bilvashtakam except two verses. The date of Shivaratri and the time of parana follow the panchanga (see Panchanga in the app).",
  sections: [
    {
      title: "व्रतविधिः",
      titleEn: "Rules of the vrata",
      note: "Shivaratri is on Magha krishna chaturdashi, when the chaturdashi covers the nishitha (the eighth muhurta of the night, midnight). If it does so on both days, or on neither, follow the rules of the panchanga and your matha (the Smarta books give detailed rules: for example, if the chaturdashi reaches the nishitha only on the next day, the vrata is kept on the next day; follow your manual). Three things make the Shivaratri: worship (puja, abhisheka, ashtottara), vigil (japa of the panchakshari, stotra and bhajan; do not sleep) and fast. If you cannot fast fully, take only milk and fruit; do not eat cooked food or leftovers. It is best on a Sunday or Tuesday, or with the Shiva-yoga. Bathe in the evening with black sesame, wear holy ash and rudraksha, go to a Shiva temple or worship a Shiva linga at home, and worship in all four yamas (about six in the evening to six in the morning), with a separate sankalpa for each yama, or one sankalpa for one worship. On the next morning (the chaturdashi or amavasya according to your manual), bathe, worship, and break the fast with parana at the time the panchanga gives.",
      noteKn: "ಮಾಘ ಕೃಷ್ಣ ಚತುರ್ದಶಿಯು ನಿಶೀಥ (ರಾತ್ರಿಯ ಎಂಟನೆಯ ಮುಹೂರ್ತ, ಮಧ್ಯರಾತ್ರಿ) ವ್ಯಾಪಿಯಾಗಿರುವ ದಿನ ಶಿವರಾತ್ರಿ. ಎರಡೂ ದಿನ ಅಥವಾ ಎರಡೂ ದಿನ ಇಲ್ಲದಿದ್ದರೆ ಪಂಚಾಂಗ ಮತ್ತು ಮಠದ ನಿರ್ಣಯದಂತೆ (ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ ವಿವರವಾದ ನಿಯಮಗಳಿವೆ; ನಿಮ್ಮ ಪುಸ್ತಕ ನೋಡಿ). ಶಿವರಾತ್ರಿಯಲ್ಲಿ ಮೂರು ನಿಯಮ: ಪೂಜೆ (ಅಭಿಷೇಕ, ಅಷ್ಟೋತ್ತರ), ಜಾಗರಣೆ (ಪಂಚಾಕ್ಷರೀ ಜಪ, ಸ್ತೋತ್ರ, ಭಜನೆ; ನಿದ್ರೆ ಮಾಡಬಾರದು), ಉಪವಾಸ. ಪೂರ್ಣ ಉಪವಾಸ ಸಾಧ್ಯವಿಲ್ಲದಿದ್ದರೆ ಹಾಲು-ಹಣ್ಣು ಮಾತ್ರ; ಬೇಯಿಸಿದ ಆಹಾರ, ಮುಸುರೆ ಸೇವಿಸಬಾರದು. ಭಾನುವಾರ, ಮಂಗಳವಾರ ಅಥವಾ ಶಿವಯೋಗವಿದ್ದರೆ ಶ್ರೇಷ್ಠ. ಸಾಯಂಕಾಲ ಕಪ್ಪು ಎಳ್ಳಿನಿಂದ ಸ್ನಾನ ಮಾಡಿ, ಭಸ್ಮ-ರುದ್ರಾಕ್ಷಿ ಧರಿಸಿ, ಶಿವಾಲಯಕ್ಕೆ ಹೋಗಿ ಅಥವಾ ಮನೆಯಲ್ಲಿ ಶಿವಲಿಂಗವನ್ನಿಟ್ಟು ನಾಲ್ಕೂ ಯಾಮಗಳಲ್ಲಿ (ಸುಮಾರು ಸಂಜೆ 6 ರಿಂದ ಬೆಳಿಗ್ಗೆ 6) ಪ್ರತಿ ಯಾಮಕ್ಕೂ ಪ್ರತ್ಯೇಕ ಸಂಕಲ್ಪ ಮಾಡಿ ಅಥವಾ ಒಂದೇ ಸಂಕಲ್ಪದಿಂದ ಪೂಜೆ ಮಾಡಿ. ಮರುದಿನ ಬೆಳಿಗ್ಗೆ ಸ್ನಾನ, ಪೂಜೆ ಮಾಡಿ ಪಂಚಾಂಗ ಹೇಳಿದ ಸಮಯದಲ್ಲಿ ಪಾರಣೆ ಮಾಡಿ.",
      verses: [
        {
          text: "ॐ नमः शिवाय ॥",
          meaning: {
            en: "Om, salutations to Shiva. (The panchakshari mantra: repeat it through the night.)",
            kn: "ಓಂ ಶಿವನಿಗೆ ನಮಸ್ಕಾರ. (ಪಂಚಾಕ್ಷರೀ ಮಂತ್ರ; ರಾತ್ರಿಯಿಡೀ ಜಪಿಸಿ.)",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa",
      note: "After acamana and pranayama, with akshata and water in the right hand, say the sankalpa, then do Ganapati puja, then the prana-pratishtha and pitha puja of Shiva with Uma. The sankalpa is the common one of the Satika Vrata Ratnamala with the name of the vrata Maha Shivaratri vrata (the book gives it for the monthly Shivaratri). Take the desha-kala part from the Shodashopachara Puja.",
      noteKn: "ಆಚಮನ-ಪ್ರಾಣಾಯಾಮದ ನಂತರ ಬಲಗೈಯಲ್ಲಿ ಅಕ್ಷತೆ-ನೀರು ಹಿಡಿದು ಸಂಕಲ್ಪ ಮಾಡಿ; ನಂತರ ಗಣಪತಿ ಪೂಜೆ, ಉಮಾಸಹಿತ ಶಿವನ ಪ್ರಾಣಪ್ರತಿಷ್ಠೆ, ಪೀಠಪೂಜೆ. ಸಂಕಲ್ಪವು ಸಟೀಕಾ ವ್ರತರತ್ನಮಾಲಾದ ಸಾಮಾನ್ಯ ಸಂಕಲ್ಪ; ವ್ರತದ ಹೆಸರು ಮಹಾಶಿವರಾತ್ರಿ ವ್ರತ (ಪುಸ್ತಕದಲ್ಲಿ ಮಾಸಶಿವರಾತ್ರಿಗೆ ಇದೆ). ದೇಶಕಾಲ ಭಾಗವನ್ನು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಿಂದ ತೆಗೆದುಕೊಳ್ಳಿ.",
      verses: [
        {
          text: "श्रीपरमेश्वरप्रीत्यर्थं मम जन्मजन्मार्जितसमस्तदुरितक्षयार्थं\nसमस्तसन्मङ्गलश्रेयःसन्तानसुतक्षेत्रायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nसमस्तमनोरथावाप्त्यर्थं श्रीसदाशिवदेवतामुद्दिश्य\nश्रीसदाशिवदेवताप्रीत्यर्थं महाशिवरात्रिव्रतमहं करिष्ये ॥",
          meaning: {
            en: "For the pleasure of Sri Parameshvara, for the destruction of all the sins I have gathered in birth after birth, for the growth of every good fortune and blessing, children, fields, long life, health and prosperity, and for the fulfilment of all my wishes, dedicated to the god Sri Sadashiva and for his pleasure, I shall keep the Maha Shivaratri vrata.",
            kn: "ಶ್ರೀಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ಜನ್ಮ-ಜನ್ಮಗಳಲ್ಲಿ ಸಂಪಾದಿಸಿದ ಸಮಸ್ತ ಪಾಪಗಳ ಕ್ಷಯಕ್ಕಾಗಿ, ಸಮಸ್ತ ಮಂಗಳ, ಶ್ರೇಯಸ್ಸು, ಸಂತಾನ, ಸುತ, ಕ್ಷೇತ್ರ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ವೃದ್ಧಿಗಾಗಿ, ಸಮಸ್ತ ಮನೋರಥಗಳ ಪ್ರಾಪ್ತಿಗಾಗಿ, ಶ್ರೀಸದಾಶಿವ ದೇವತೆಯನ್ನು ಉದ್ದೇಶಿಸಿ ಅವನ ಪ್ರೀತಿಗಾಗಿ ಮಹಾಶಿವರಾತ್ರಿ ವ್ರತವನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "ध्यानावाहनम्",
      titleEn: "Dhyana and avahana",
      note: "Meditate with folded hands and flowers, and invite him. Then continue with the upacharas (padya, arghya, acamana, abhisheka …) with the formula ॐ नमः शिवाय or ॐ श्रीउमामहेश्वराभ्यां नमः (as the Shodashopachara Puja, with the name of Shiva). For abhisheka use Sri Rudram (Namakam and Chamakam), eleven or more times, or at least the panchakshari.",
      noteKn: "ಕೈಮುಗಿದು ಹೂವು ಹಿಡಿದು ಧ್ಯಾನಿಸಿ, ಆವಾಹಿಸಿ. ನಂತರ ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, ಅಭಿಷೇಕ ಮೊದಲಾದ ಉಪಚಾರಗಳನ್ನು \"ಓಂ ನಮಃ ಶಿವಾಯ\" ಅಥವಾ \"ಓಂ ಶ್ರೀಉಮಾಮಹೇಶ್ವರಾಭ್ಯಾಂ ನಮಃ\" ಎಂದು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಮಾಡಿ. ಅಭಿಷೇಕಕ್ಕೆ ಶ್ರೀರುದ್ರ (ನಮಕ-ಚಮಕ) ಹನ್ನೊಂದು ಅಥವಾ ಹೆಚ್ಚು ಬಾರಿ, ಕನಿಷ್ಠ ಪಂಚಾಕ್ಷರಿ.",
      verses: [
        {
          text: "ध्यायेन्नित्यं महेशं रजतगिरिनिभं चारुचन्द्रावतंसं\nरत्नाकल्पोज्ज्वलाङ्गं परशुमृगवराभीतिहस्तं प्रसन्नम् ।\nपद्मासीनं समन्तात्स्तुतममरगणैर्व्याघ्रकृत्तिं वसानं\nविश्वाद्यं विश्वबीजं निखिलभयहरं पञ्चवक्त्रं त्रिनेत्रम् ॥",
          meaning: {
            en: "One should meditate always on Mahesha, white as a silver mountain, with the beautiful crescent moon as his crest, his body bright with jewels and ornaments, holding the axe, the deer and the signs of boon and fearlessness in his hands, gracious, seated in a lotus posture, praised on all sides by the hosts of gods, clad in a tiger skin, the primal one of the universe, the seed of the universe, remover of all fear, five-faced and three-eyed.",
            kn: "ಬೆಳ್ಳಿಯ ಪರ್ವತದಂತೆ ಬಿಳುಪಾದ, ಸುಂದರ ಚಂದ್ರನನ್ನು ಶಿರೋಭೂಷಣವಾಗಿ ಧರಿಸಿದ, ರತ್ನಾಭರಣಗಳಿಂದ ಹೊಳೆಯುವ ದೇಹದ, ಪರಶು, ಮೃಗ, ವರ-ಅಭಯ ಮುದ್ರೆಗಳನ್ನು ಕೈಗಳಲ್ಲಿ ಧರಿಸಿದ, ಪ್ರಸನ್ನನಾದ, ಪದ್ಮಾಸನದಲ್ಲಿ ಕುಳಿತ, ದೇವಗಣಗಳಿಂದ ಎಲ್ಲೆಡೆ ಸ್ತುತಿಸಲ್ಪಟ್ಟ, ವ್ಯಾಘ್ರಚರ್ಮ ಉಟ್ಟ, ವಿಶ್ವಕ್ಕೆ ಆದಿಯಾದ, ವಿಶ್ವಬೀಜನಾದ, ಸಮಸ್ತ ಭಯಹರನಾದ, ಪಂಚಮುಖ ತ್ರಿನೇತ್ರನಾದ ಮಹೇಶನನ್ನು ಸದಾ ಧ್ಯಾನಿಸಬೇಕು.",
          },
        },
        {
          text: "आगच्छागच्छ देवेश महादेवाभयप्रद ।\nगृहाण परमेशान तव पूजा मया कृता ॥\nश्रीउमामहेश्वराभ्यां नमः । आवाहयामि ॥",
          meaning: {
            en: "Come, come, O lord of the gods, Mahadeva, giver of fearlessness; accept, O Supreme Lord, the worship I have done for you. Salutations to Sri Uma and Maheshvara; I invoke them.",
            kn: "ದೇವೇಶನೇ, ಅಭಯಪ್ರದನಾದ ಮಹಾದೇವನೇ, ಬಾ, ಬಾ; ಪರಮೇಶಾನನೇ, ನಾನು ಮಾಡಿದ ನಿನ್ನ ಪೂಜೆಯನ್ನು ಸ್ವೀಕರಿಸು. ಶ್ರೀಉಮಾಮಹೇಶ್ವರರಿಗೆ ನಮಸ್ಕಾರ; ಆವಾಹಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "अष्टमूर्तिपूजा",
      titleEn: "Worship of the eight forms of Shiva",
      note: "The eight forms (ashtamurti) of Shiva are the five elements, the sun, the moon and the sacrificer. Worship them around the linga, each in its direction as your manual gives (the Sringeri manual places them east, north-east, north, north-west, west, south-west, south and south-east), with gandha and flowers, and then the sixteen names. Afterwards praise and salute the god, and in the short form say महादेवाय नमः and dismiss him.",
      noteKn: "ಶಿವನ ಅಷ್ಟಮೂರ್ತಿಗಳು ಪಂಚಭೂತ, ಸೂರ್ಯ, ಚಂದ್ರ, ಯಜಮಾನ. ಲಿಂಗದ ಸುತ್ತ ಪುಸ್ತಕ ಹೇಳಿದ ದಿಕ್ಕುಗಳಲ್ಲಿ (ಶೃಂಗೇರಿ ಪುಸ್ತಕದಲ್ಲಿ ಪೂರ್ವ, ಈಶಾನ್ಯ, ಉತ್ತರ, ವಾಯವ್ಯ, ಪಶ್ಚಿಮ, ನೈರುತ್ಯ, ದಕ್ಷಿಣ, ಆಗ್ನೇಯ) ಗಂಧ-ಪುಷ್ಪಗಳಿಂದ ಪೂಜಿಸಿ, ನಂತರ ಹದಿನಾರು ನಾಮ ಪೂಜೆ. ಅನಂತರ ಸ್ತುತಿಸಿ ನಮಸ್ಕರಿಸಿ, ಸಂಕ್ಷೇಪ ವಿಧಿಯಲ್ಲಿ \"ಮಹಾದೇವಾಯ ನಮಃ\" ಎಂದು ವಿಸರ್ಜಿಸಿ.",
      verses: [
        {
          text: "ॐ शर्वाय क्षितिमूर्तये नमः ।\nॐ भवाय जलमूर्तये नमः ।\nॐ रुद्राय अग्निमूर्तये नमः ।\nॐ उग्राय वायुमूर्तये नमः ।\nॐ भीमाय आकाशमूर्तये नमः ।\nॐ पशुपतये यजमानमूर्तये नमः ।\nॐ महादेवाय सोममूर्तये नमः ।\nॐ ईशानाय सूर्यमूर्तये नमः ॥",
          meaning: {
            en: "Salutations to Sharva in the form of earth; to Bhava in the form of water; to Rudra in the form of fire; to Ugra in the form of air; to Bhima in the form of space; to Pashupati in the form of the sacrificer; to Mahadeva in the form of the moon; to Ishana in the form of the sun.",
            kn: "ಶರ್ವನಿಗೆ ಭೂಮೂರ್ತಿಯಾಗಿ, ಭವನಿಗೆ ಜಲಮೂರ್ತಿಯಾಗಿ, ರುದ್ರನಿಗೆ ಅಗ್ನಿಮೂರ್ತಿಯಾಗಿ, ಉಗ್ರನಿಗೆ ವಾಯುಮೂರ್ತಿಯಾಗಿ, ಭೀಮನಿಗೆ ಆಕಾಶಮೂರ್ತಿಯಾಗಿ, ಪಶುಪತಿಗೆ ಯಜಮಾನಮೂರ್ತಿಯಾಗಿ, ಮಹಾದೇವನಿಗೆ ಸೋಮಮೂರ್ತಿಯಾಗಿ, ಈಶಾನನಿಗೆ ಸೂರ್ಯಮೂರ್ತಿಯಾಗಿ ನಮಸ್ಕಾರ.",
          },
        },
        {
          text: "ॐ भवाय देवाय नमः । ॐ शर्वाय देवाय नमः ।\nॐ ईशानाय देवाय नमः । ॐ पशुपतये देवाय नमः ।\nॐ रुद्राय देवाय नमः । ॐ उग्राय देवाय नमः ।\nॐ भीमाय देवाय नमः । ॐ महते देवाय नमः ॥\nॐ भवस्य देवस्य पत्न्यै नमः । ॐ शर्वस्य देवस्य पत्न्यै नमः ।\nॐ ईशानस्य देवस्य पत्न्यै नमः । ॐ पशुपतेर्देवस्य पत्न्यै नमः ।\nॐ रुद्रस्य देवस्य पत्न्यै नमः । ॐ उग्रस्य देवस्य पत्न्यै नमः ।\nॐ भीमस्य देवस्य पत्न्यै नमः । ॐ महतो देवस्य पत्न्यै नमः ॥",
          meaning: {
            en: "Salutations to the god Bhava, to Sharva, to Ishana, to Pashupati, to Rudra, to Ugra, to Bhima, to Mahat; and to the consort of the god Bhava, of Sharva, of Ishana, of Pashupati, of Rudra, of Ugra, of Bhima and of Mahat. (The sixteen names dear to Shiva; they can also be used for tarpana.)",
            kn: "ಭವ ದೇವನಿಗೆ, ಶರ್ವನಿಗೆ, ಈಶಾನನಿಗೆ, ಪಶುಪತಿಗೆ, ರುದ್ರನಿಗೆ, ಉಗ್ರನಿಗೆ, ಭೀಮನಿಗೆ, ಮಹತ್ತಿಗೆ ನಮಸ್ಕಾರ; ಭವ ದೇವನ ಪತ್ನಿಗೆ, ಶರ್ವನ, ಈಶಾನನ, ಪಶುಪತಿಯ, ರುದ್ರನ, ಉಗ್ರನ, ಭೀಮನ, ಮಹತ್ತಿನ ಪತ್ನಿಗೆ ನಮಸ್ಕಾರ. (ಶಿವನಿಗೆ ಪ್ರಿಯವಾದ ಷೋಡಶ ನಾಮಗಳು; ತರ್ಪಣಕ್ಕೂ ಬಳಸಬಹುದು.)",
          },
        },
      ],
    },
    {
      title: "चतुर्यामपूजा",
      titleEn: "The four yamas",
      note: "Worship in each of the four yamas of the night (roughly 6 pm to 9, 9 to midnight, midnight to 3, and 3 to 6 am), with abhisheka, the eight forms and the sixteen names, bilva leaves, the lamp and naivedya of fruit or milk, and japa and stotra between. The Sringeri manual says a separate sankalpa is made for each of the four yamas, or one sankalpa for one worship through the night. After each yama is finished, dedicate it to Shiva (श्रीसाम्बसदाशिवः प्रीयताम्) and begin the next sankalpa. The wording below is the usual one.",
      noteKn: "ರಾತ್ರಿಯ ನಾಲ್ಕು ಯಾಮಗಳಲ್ಲೂ (ಸುಮಾರು ಸಂಜೆ 6-9, 9-ಮಧ್ಯರಾತ್ರಿ, ಮಧ್ಯರಾತ್ರಿ-3, 3-6) ಅಭಿಷೇಕ, ಅಷ್ಟಮೂರ್ತಿ-ಷೋಡಶನಾಮ ಪೂಜೆ, ಬಿಲ್ವಪತ್ರೆ, ದೀಪ, ಹಣ್ಣು-ಹಾಲಿನ ನೈವೇದ್ಯಗಳಿಂದ ಪೂಜಿಸಿ; ನಡುವೆ ಜಪ-ಸ್ತೋತ್ರ. ಶೃಂಗೇರಿ ಪುಸ್ತಕದ ಪ್ರಕಾರ ನಾಲ್ಕು ಯಾಮಗಳಿಗೂ ಪ್ರತ್ಯೇಕ ಸಂಕಲ್ಪ, ಅಥವಾ ಒಂದೇ ಸಂಕಲ್ಪದಿಂದ ರಾತ್ರಿಯ ಪೂಜೆ. ಪ್ರತಿ ಯಾಮ ಮುಗಿದ ನಂತರ ಶಿವನಿಗೆ ಅರ್ಪಿಸಿ (ಶ್ರೀಸಾಂಬಸದಾಶಿವಃ ಪ್ರೀಯತಾಮ್), ಮುಂದಿನ ಸಂಕಲ್ಪ ಮಾಡಿ. ಕೆಳಗಿನ ಪಾಠ ಸಾಮಾನ್ಯ ವಾಕ್ಯ.",
      verses: [
        {
          text: "श्रीसाम्बसदाशिवप्रीत्यर्थं महाशिवरात्रौ प्रथमयामपूजां करिष्ये ।\n(द्वितीययामपूजां । तृतीययामपूजां । चतुर्थयामपूजां करिष्ये ॥)\nअनेन यामपूजनेन श्रीसाम्बसदाशिवः प्रीयताम् ॥",
          meaning: {
            en: "For the pleasure of Sri Sambasadashiva (Shiva with Uma), on Maha Shivaratri I shall perform the worship of the first yama. (In the next yamas: the second yama, the third yama, the fourth yama.) By this worship of the yama may Sri Sambasadashiva be pleased.",
            kn: "ಶ್ರೀಸಾಂಬಸದಾಶಿವನ ಪ್ರೀತಿಗಾಗಿ ಮಹಾಶಿವರಾತ್ರಿಯಲ್ಲಿ ಪ್ರಥಮ ಯಾಮ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ. (ಮುಂದಿನ ಯಾಮಗಳಲ್ಲಿ: ದ್ವಿತೀಯ ಯಾಮ, ತೃತೀಯ ಯಾಮ, ಚತುರ್ಥ ಯಾಮ.) ಈ ಯಾಮ ಪೂಜೆಯಿಂದ ಶ್ರೀಸಾಂಬಸದಾಶಿವನು ಪ್ರೀತನಾಗಲಿ.",
          },
        },
      ],
    },
    {
      title: "बिल्वार्चनम्",
      titleEn: "Bilva offering",
      note: "Offer three-leaved bilva leaves (whole, unbroken and tender), reciting these verses, and say ॐ नमः शिवाय with each leaf; to offer one hundred and eight or more is best. Bilva worship is regarded as most pleasing on this night. The verses are two of the Bilvashtakam.",
      noteKn: "ಮೂರು ದಳದ, ಅಖಂಡವಾದ, ಕೋಮಲ ಬಿಲ್ವಪತ್ರೆಗಳನ್ನು ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳುತ್ತಾ ಅರ್ಪಿಸಿ; ಪ್ರತಿ ಪತ್ರೆಗೆ \"ಓಂ ನಮಃ ಶಿವಾಯ\" ಎನ್ನಿ; ನೂರೆಂಟು ಅಥವಾ ಹೆಚ್ಚು ಅರ್ಪಿಸುವುದು ಶ್ರೇಷ್ಠ. ಈ ರಾತ್ರಿ ಬಿಲ್ವಾರ್ಚನೆ ಅತ್ಯಂತ ಪ್ರಿಯ. ಇವು ಬಿಲ್ವಾಷ್ಟಕದ ಎರಡು ಶ್ಲೋಕಗಳು.",
      verses: [
        {
          text: "त्रिदलं त्रिगुणाकारं त्रिनेत्रं च त्रियायुधम् ।\nत्रिजन्मपापसंहारमेकबिल्वं शिवार्पणम् ॥\nत्रिशाखैर्बिल्वपत्रैश्च अच्छिद्रैः कोमलैः शुभैः ।\nतव पूजां करिष्यामि एकबिल्वं शिवार्पणम् ॥",
          meaning: {
            en: "A bilva leaf of three leaflets, three-natured, like the three eyes and the three weapons (of Shiva), destroyer of the sins of three births: this one bilva leaf is offered to Shiva. With three-branched bilva leaves, unbroken, tender and auspicious, I shall worship you: this one bilva is offered to Shiva.",
            kn: "ಮೂರು ದಳದ, ಮೂರು ಗುಣಗಳ ಆಕಾರದ, ಮೂರು ಕಣ್ಣು ಮತ್ತು ಮೂರು ಆಯುಧಗಳಂತಿರುವ, ಮೂರು ಜನ್ಮಗಳ ಪಾಪ ನಾಶಕವಾದ ಈ ಒಂದು ಬಿಲ್ವವು ಶಿವನಿಗೆ ಅರ್ಪಣೆ. ಮೂರು ಕವಲಿನ, ಅಖಂಡ, ಕೋಮಲ, ಶುಭವಾದ ಬಿಲ್ವಪತ್ರೆಗಳಿಂದ ನಿನ್ನನ್ನು ಪೂಜಿಸುತ್ತೇನೆ; ಈ ಒಂದು ಬಿಲ್ವವು ಶಿವನಿಗೆ ಅರ್ಪಣೆ.",
          },
        },
      ],
    },
    {
      title: "पारणम्",
      titleEn: "Parana (breaking the fast)",
      note: "On the next day bathe, worship Shiva again with the sixteen upacharas, honour brahmanas, and eat only when the time of parana given in the panchanga has come (the rule quoted in the Vratarajah is that if the chaturdashi runs beyond the first three yamas of that day, parana is in the morning, and if it ends within them, at the end of the tithi; check the Panchanga in the app). Close with the samarpana of the Shodashopachara Puja.",
      noteKn: "ಮರುದಿನ ಸ್ನಾನ ಮಾಡಿ ಶಿವನನ್ನು ಷೋಡಶೋಪಚಾರದಿಂದ ಪುನಃ ಪೂಜಿಸಿ, ಬ್ರಾಹ್ಮಣರನ್ನು ಸತ್ಕರಿಸಿ, ಪಂಚಾಂಗದಲ್ಲಿ ಹೇಳಿದ ಪಾರಣೆ ಸಮಯ ಬಂದ ನಂತರವೇ ಊಟ ಮಾಡಿ (ವ್ರತರಾಜದ ನಿಯಮ: ಚತುರ್ದಶಿಯು ಆ ದಿನದ ಮೊದಲ ಮೂರು ಯಾಮಗಳನ್ನು ದಾಟಿದರೆ ಬೆಳಿಗ್ಗೆಯೇ ಪಾರಣೆ, ಅವುಗಳೊಳಗೆ ಮುಗಿದರೆ ತಿಥಿಯ ಅಂತ್ಯದಲ್ಲಿ; ಅಪ್ಲಿಕೇಶನ್‌ನ ಪಂಚಾಂಗ ನೋಡಿ). ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯ ಸಮರ್ಪಣೆಯೊಂದಿಗೆ ಮುಗಿಸಿ.",
      verses: [
        {
          text: "अनेन महाशिवरात्रिव्रतेन श्रीसाम्बसदाशिवः प्रीयतां सुप्रीतः सुप्रसन्नो वरदो भवतु ॥",
          meaning: {
            en: "By this Maha Shivaratri vrata may Sri Sambasadashiva be pleased, well pleased and gracious, and be a giver of boons.",
            kn: "ಈ ಮಹಾಶಿವರಾತ್ರಿ ವ್ರತದಿಂದ ಶ್ರೀಸಾಂಬಸದಾಶಿವನು ಪ್ರೀತನಾಗಲಿ, ಸುಪ್ರೀತನೂ ಸುಪ್ರಸನ್ನನೂ ವರದನೂ ಆಗಲಿ.",
          },
        },
      ],
    },
  ],
};
