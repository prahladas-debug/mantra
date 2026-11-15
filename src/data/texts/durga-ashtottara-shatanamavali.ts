// Śrī Durgā Aṣṭottara Śatanāmāvalī (ॐ सत्यै नमः, ॐ साध्व्यै नमः, ॐ भवप्रीतायै नमः …): the 108 names of
// Durgā from the Durgāṣṭottaraśatanāma Stotra of the Viśvasāra Tantra (सती साध्वी भवप्रीता भवानी भवमोचनी …).
// Collated Nov 2026; not yet checked line by line against a printed edition beyond the Gita Press.
//
// Sources:
//   A. Gita Press, Śatanāma-stotra-saṅgraha, "Śrī Durgā Aṣṭottaraśatanāmāvalī", numbered 1-108 (sanskrit/raw_etexts,
//      misc-gp): base text.
//   B. Gita Press, Devī Stotra Ratnākara no. 70, "Śrī Durgāṣṭottaraśatanāmastotra", the same names in verse
//      (colophon: iti śrīviśvasāratantre); it agrees with A in every name.
//   C. stotranidhi.com, "Durgā Aṣṭottara Śatanāmāvalī 1" (Devanagari) and the matching stotra: a recension
//      that agrees with A for names 1-88 and differs after.
//   D. stotrasamhita/stotra-sangrahah (GitHub), stotras/shatanama/DurgaAshtottaraShatanamaStotram.tex.
// Differences (A B unless stated):
//   14 चण्डघण्टायै (A B D) / चन्द्रघण्टायै (C)
//   23 सत्तायै (A B) / सत्यायै (C D)
//   28-29 भव्यायै, अभव्यायै (A B D) / भवायै, भव्यायै (C)
//   31 शाम्भव्यै (A B D) / शम्भुपत्न्यै (C); 34 रत्नप्रियायै (A B D) / सदा रत्नप्रियायै (C)
//   39 अनेकवर्णायै (A B D) / पर्णायै (C); 44 अमेयविक्रमायै (A B) / अमेयायै, विक्रमायै (C)
//   62-65 ज्ञानायै क्रियायै नित्यायै बुद्धिदायै (A B D) / ज्ञानक्रियायै, सत्यायै, वाक्प्रदायै (C)
//   89-100: A B D read महोदर्यै मुक्तकेश्यै … भद्रकाल्यै विष्णुमायायै जलोदर्यै (names of Durgā in her fierce
//   forms); C reads another list (श्रद्धायै शान्त्यै धृत्यै कान्त्यै … निद्रायै छायायै), taken from the
//   Devīmāhātmya's "yā devī sarvabhūteṣu"; A is followed.
//   D (stotra only) reads ईशानी महाराज्ञी ह्यप्रमेयपराक्रमा and has a few more words in 44-50; not followed.
//   A and B agree in all 108 names; C is the weakest witness here.
// The stotra's phalaśruti and the viniyoga/dhyāna lines of D are not included.
import type { Mantra } from '../types';

export const durgaAshtottaraShatanamavali: Mantra = {
  id: "durga-ashtottara-shatanamavali",
  title: "दुर्गाष्टोत्तरशतनामावलिः",
  titleEn: "Durga Ashtottara Shatanamavali",
  category: "sahasranama",
  deity: "Śrī Durgā",
  source: "Vishvasara Tantra (Durga Ashtottara Shatanama Stotra)",
  summary:
    "The 108 names of Goddess Durga, each offered as \"Om … namah\", from the Vishvasara Tantra. They praise her as Sati, Bhavani, the three-eyed one with trident and Pinaka bow, as the power behind mind, intellect and ego, as the seven Matrikas, and as the slayer of Shumbha, Nishumbha, Madhu-Kaitabha, Mahisha and Chanda-Munda. Used in Navaratri and Friday worship with red flowers and kumkuma.",
  summaryKn:
    "ವಿಶ್ವಸಾರ ತಂತ್ರದಿಂದ ದುರ್ಗಾದೇವಿಯ ನೂರೆಂಟು ನಾಮಗಳು; ಪ್ರತಿಯೊಂದೂ \"ಓಂ … ನಮಃ\" ಎಂದು ಸಮರ್ಪಿಸಲ್ಪಡುತ್ತದೆ. ಅವಳನ್ನು ಸತಿ, ಭವಾನಿ, ತ್ರಿನೇತ್ರೆ, ತ್ರಿಶೂಲ ಪಿನಾಕಧಾರಿಣಿ, ಮನಸ್ಸು ಬುದ್ಧಿ ಅಹಂಕಾರಗಳ ಹಿಂದಿನ ಶಕ್ತಿ, ಸಪ್ತಮಾತೃಕೆಯರು, ಶುಂಭ ನಿಶುಂಭ ಮಧುಕೈಟಭ ಮಹಿಷ ಚಂಡಮುಂಡರನ್ನು ಸಂಹರಿಸಿದವಳು ಎಂದು ಸ್ತುತಿಸುತ್ತವೆ. ನವರಾತ್ರಿ ಮತ್ತು ಶುಕ್ರವಾರದ ಪೂಜೆಯಲ್ಲಿ ಕೆಂಪು ಹೂವು ಕುಂಕುಮಗಳೊಡನೆ ಬಳಸಲಾಗುತ್ತದೆ.",
  difficulty: "easy",
  completeness: "complete",
  sections: [
    {
      title: "नामावलिः",
      titleEn: "Namavali",
      note: "Offer a red flower, a bilva leaf or a pinch of kumkuma at each name.",
      noteKn: "ಪ್ರತಿ ನಾಮಕ್ಕೂ ಕೆಂಪು ಹೂವು, ಬಿಲ್ವಪತ್ರೆ ಅಥವಾ ಚಿಟಿಕೆ ಕುಂಕುಮವನ್ನು ಅರ್ಪಿಸಬೇಕು.",
      verses: [
        { n: 1, text: "ॐ सत्यै नमः ॥", meaning: { en: "Sati, the Truth (Sati, the pure wife of Shiva).", kn: "ಸತಿಗೆ, ಸತ್ಯಸ್ವರೂಪಳಿಗೆ." } },
        { n: 2, text: "ॐ साध्व्यै नमः ॥", meaning: { en: "the virtuous One.", kn: "ಸಾಧ್ವಿಗೆ, ಸದ್ಗುಣಶೀಲೆಗೆ." } },
        { n: 3, text: "ॐ भवप्रीतायै नमः ॥", meaning: { en: "who is dear to Bhava (Shiva).", kn: "ಭವನಿಗೆ (ಶಿವನಿಗೆ) ಪ್ರಿಯಳಿಗೆ." } },
        { n: 4, text: "ॐ भवान्यै नमः ॥", meaning: { en: "Bhavani, the consort of Bhava.", kn: "ಭವಾನಿಗೆ, ಭವನ ಪತ್ನಿಗೆ." } },
        { n: 5, text: "ॐ भवमोचन्यै नमः ॥", meaning: { en: "who frees from the cycle of worldly existence.", kn: "ಸಂಸಾರದಿಂದ ಬಿಡಿಸುವವಳಿಗೆ." } },
        { n: 6, text: "ॐ आर्यायै नमः ॥", meaning: { en: "the noble One.", kn: "ಆರ್ಯೆಗೆ, ಶ್ರೇಷ್ಠಳಿಗೆ." } },
        { n: 7, text: "ॐ दुर्गायै नमः ॥", meaning: { en: "Durga, the one hard to reach and the saviour from hardship.", kn: "ದುರ್ಗೆಗೆ, ಸಂಕಟದಿಂದ ಕಾಪಾಡುವವಳಿಗೆ." } },
        { n: 8, text: "ॐ जयायै नमः ॥", meaning: { en: "Jaya, the victorious.", kn: "ಜಯೆಗೆ, ವಿಜಯಿನಿಗೆ." } },
        { n: 9, text: "ॐ आद्यायै नमः ॥", meaning: { en: "the Primal One.", kn: "ಆದ್ಯೆಗೆ, ಮೊದಲಿನವಳಿಗೆ." } },
        { n: 10, text: "ॐ त्रिनेत्रायै नमः ॥", meaning: { en: "the three-eyed.", kn: "ತ್ರಿನೇತ್ರೆಗೆ." } },
        { n: 11, text: "ॐ शूलधारिण्यै नमः ॥", meaning: { en: "who bears the trident.", kn: "ತ್ರಿಶೂಲಧಾರಿಣಿಗೆ." } },
        { n: 12, text: "ॐ पिनाकधारिण्यै नमः ॥", meaning: { en: "who bears the Pinaka bow.", kn: "ಪಿನಾಕ ಧನುರ್ಧಾರಿಣಿಗೆ." } },
        { n: 13, text: "ॐ चित्रायै नमः ॥", meaning: { en: "the wondrous One.", kn: "ಚಿತ್ರೆಗೆ, ಅದ್ಭುತಳಿಗೆ." } },
        { n: 14, text: "ॐ चण्डघण्टायै नमः ॥", meaning: { en: "Chandaghanta, who has a fierce bell.", kn: "ಚಂಡಘಂಟೆಗೆ." } },
        { n: 15, text: "ॐ महातपसे नमः ॥", meaning: { en: "who has great austerity.", kn: "ಮಹಾತಪಸ್ವಿನಿಗೆ." } },
        { n: 16, text: "ॐ मनसे नमः ॥", meaning: { en: "the Mind.", kn: "ಮನಸ್ಸು ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 17, text: "ॐ बुद्ध्यै नमः ॥", meaning: { en: "the Intellect.", kn: "ಬುದ್ಧಿ ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 18, text: "ॐ अहङ्कारायै नमः ॥", meaning: { en: "the sense of self (ahamkara).", kn: "ಅಹಂಕಾರ ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 19, text: "ॐ चित्तरूपायै नमः ॥", meaning: { en: "who is the form of the thinking mind (chitta).", kn: "ಚಿತ್ತ ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 20, text: "ॐ चितायै नमः ॥", meaning: { en: "the Pure Consciousness (Chita).", kn: "ಚಿತಾ, ಚೈತನ್ಯಳಿಗೆ." } },
        { n: 21, text: "ॐ चित्यै नमः ॥", meaning: { en: "the Awareness (Chiti).", kn: "ಚಿತಿ, ಜ್ಞಾನಸ್ವರೂಪಳಿಗೆ." } },
        { n: 22, text: "ॐ सर्वमन्त्रमय्यै नमः ॥", meaning: { en: "who is made of all mantras.", kn: "ಎಲ್ಲ ಮಂತ್ರಮಯಿಗೆ." } },
        { n: 23, text: "ॐ सत्तायै नमः ॥", meaning: { en: "Existence itself (Satta).", kn: "ಸತ್ತೆ, ಅಸ್ತಿತ್ವ ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 24, text: "ॐ सत्यानन्दस्वरूपिण्यै नमः ॥", meaning: { en: "whose nature is truth and bliss.", kn: "ಸತ್ಯಾನಂದ ಸ್ವರೂಪಿಣಿಗೆ." } },
        { n: 25, text: "ॐ अनन्तायै नमः ॥", meaning: { en: "the Infinite.", kn: "ಅನಂತೆಗೆ." } },
        { n: 26, text: "ॐ भाविन्यै नमः ॥", meaning: { en: "who brings all that will be (Bhavini).", kn: "ಭಾವಿನಿಗೆ, ಭವಿಷ್ಯವನ್ನು ಉಂಟುಮಾಡುವವಳಿಗೆ." } },
        { n: 27, text: "ॐ भाव्यायै नमः ॥", meaning: { en: "who is to be meditated on (Bhavya).", kn: "ಭಾವ್ಯೆಗೆ, ಧ್ಯಾನಿಸಲು ಯೋಗ್ಯಳಿಗೆ." } },
        { n: 28, text: "ॐ भव्यायै नमः ॥", meaning: { en: "the auspicious One.", kn: "ಭವ್ಯೆಗೆ, ಮಂಗಳಕರಳಿಗೆ." } },
        { n: 29, text: "ॐ अभव्यायै नमः ॥", meaning: { en: "the Terrible, the unfavourable to the wicked (Abhavya).", kn: "ಅಭವ್ಯೆಗೆ, ದುಷ್ಟರಿಗೆ ಭಯಂಕರಳಿಗೆ." } },
        { n: 30, text: "ॐ सदागत्यै नमः ॥", meaning: { en: "the eternal refuge.", kn: "ಸದಾಗತಿಗೆ, ಶಾಶ್ವತ ಆಶ್ರಯಳಿಗೆ." } },
        { n: 31, text: "ॐ शाम्भव्यै नमः ॥", meaning: { en: "the consort of Shambhu (Shiva).", kn: "ಶಾಂಭವಿಗೆ, ಶಂಭುವಿನ ಪತ್ನಿಗೆ." } },
        { n: 32, text: "ॐ देवमात्रे नमः ॥", meaning: { en: "the Mother of the gods.", kn: "ದೇವಮಾತೆಗೆ." } },
        { n: 33, text: "ॐ चिन्तायै नमः ॥", meaning: { en: "Thought, Chinta (the One we think of).", kn: "ಚಿಂತೆಗೆ, ಚಿಂತನೆ ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 34, text: "ॐ रत्नप्रियायै नमः ॥", meaning: { en: "who loves jewels.", kn: "ರತ್ನಪ್ರಿಯೆಗೆ." } },
        { n: 35, text: "ॐ सर्वविद्यायै नमः ॥", meaning: { en: "who is all knowledge.", kn: "ಸರ್ವ ವಿದ್ಯಾ ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 36, text: "ॐ दक्षकन्यायै नमः ॥", meaning: { en: "the daughter of Daksha.", kn: "ದಕ್ಷನ ಮಗಳಿಗೆ." } },
        { n: 37, text: "ॐ दक्षयज्ञविनाशिन्यै नमः ॥", meaning: { en: "who destroyed Daksha's sacrifice.", kn: "ದಕ್ಷಯಜ್ಞವನ್ನು ನಾಶಮಾಡಿದವಳಿಗೆ." } },
        { n: 38, text: "ॐ अपर्णायै नमः ॥", meaning: { en: "Aparna, who took no food even of leaves in her austerity.", kn: "ಅಪರ್ಣೆಗೆ, ತಪಸ್ಸಿನಲ್ಲಿ ಎಲೆಯನ್ನೂ ತಿನ್ನದವಳಿಗೆ." } },
        { n: 39, text: "ॐ अनेकवर्णायै नमः ॥", meaning: { en: "who has many colours (and forms).", kn: "ಅನೇಕ ವರ್ಣಗಳುಳ್ಳವಳಿಗೆ." } },
        { n: 40, text: "ॐ पाटलायै नमः ॥", meaning: { en: "Patala, the pale-red One (like the patala flower).", kn: "ಪಾಟಲೆಗೆ, ಪಾಟಲ ಪುಷ್ಪದಂತೆ ಕೆಂಪು ವರ್ಣದವಳಿಗೆ." } },
        { n: 41, text: "ॐ पाटलावत्यै नमः ॥", meaning: { en: "who is adorned with patala flowers.", kn: "ಪಾಟಲಾವತಿಗೆ." } },
        { n: 42, text: "ॐ पट्टाम्बरपरीधानायै नमः ॥", meaning: { en: "who wears silk garments.", kn: "ರೇಷ್ಮೆ ವಸ್ತ್ರ ಧರಿಸಿದವಳಿಗೆ." } },
        { n: 43, text: "ॐ कलमञ्जीररञ्जिन्यै नमः ॥", meaning: { en: "who is adorned with tinkling anklets.", kn: "ಇಂಪಾಗಿ ಧ್ವನಿಸುವ ಕಾಲ್ಗೆಜ್ಜೆಗಳಿಂದ ಶೋಭಿಸುವವಳಿಗೆ." } },
        { n: 44, text: "ॐ अमेयविक्रमायै नमः ॥", meaning: { en: "whose valour is immeasurable.", kn: "ಅಳೆಯಲಾಗದ ವಿಕ್ರಮವುಳ್ಳವಳಿಗೆ." } },
        { n: 45, text: "ॐ क्रूरायै नमः ॥", meaning: { en: "the Fierce One (to the wicked).", kn: "ಕ್ರೂರೆಗೆ, ದುಷ್ಟರಿಗೆ ಉಗ್ರಳಿಗೆ." } },
        { n: 46, text: "ॐ सुन्दर्यै नमः ॥", meaning: { en: "the Beautiful.", kn: "ಸುಂದರಿಗೆ." } },
        { n: 47, text: "ॐ सुरसुन्दर्यै नमः ॥", meaning: { en: "the beauty of the gods.", kn: "ಸುರಸುಂದರಿಗೆ, ದೇವತೆಗಳ ಸೌಂದರ್ಯಳಿಗೆ." } },
        { n: 48, text: "ॐ वनदुर्गायै नमः ॥", meaning: { en: "Vanadurga, Durga of the forest.", kn: "ವನದುರ್ಗೆಗೆ." } },
        { n: 49, text: "ॐ मातङ्ग्यै नमः ॥", meaning: { en: "Matangi.", kn: "ಮಾತಂಗಿಗೆ." } },
        { n: 50, text: "ॐ मतङ्गमुनिपूजितायै नमः ॥", meaning: { en: "who is worshipped by the sage Matanga.", kn: "ಮತಂಗ ಮುನಿಯಿಂದ ಪೂಜಿತಳಿಗೆ." } },
        { n: 51, text: "ॐ ब्राह्म्यै नमः ॥", meaning: { en: "Brahmi (the Shakti of Brahma).", kn: "ಬ್ರಾಹ್ಮಿಗೆ." } },
        { n: 52, text: "ॐ माहेश्वर्यै नमः ॥", meaning: { en: "Maheshvari (the Shakti of Shiva).", kn: "ಮಾಹೇಶ್ವರಿಗೆ." } },
        { n: 53, text: "ॐ ऐन्द्र्यै नमः ॥", meaning: { en: "Aindri (the Shakti of Indra).", kn: "ಐಂದ್ರಿಗೆ." } },
        { n: 54, text: "ॐ कौमार्यै नमः ॥", meaning: { en: "Kaumari (the Shakti of Kumara).", kn: "ಕೌಮಾರಿಗೆ." } },
        { n: 55, text: "ॐ वैष्णव्यै नमः ॥", meaning: { en: "Vaishnavi (the Shakti of Vishnu).", kn: "ವೈಷ್ಣವಿಗೆ." } },
        { n: 56, text: "ॐ चामुण्डायै नमः ॥", meaning: { en: "Chamunda.", kn: "ಚಾಮುಂಡೆಗೆ." } },
        { n: 57, text: "ॐ वाराह्यै नमः ॥", meaning: { en: "Varahi.", kn: "ವಾರಾಹಿಗೆ." } },
        { n: 58, text: "ॐ लक्ष्म्यै नमः ॥", meaning: { en: "Lakshmi.", kn: "ಲಕ್ಷ್ಮಿಗೆ." } },
        { n: 59, text: "ॐ पुरुषाकृत्यै नमः ॥", meaning: { en: "who takes the form of Purusha.", kn: "ಪುರುಷಾಕೃತಿಗೆ." } },
        { n: 60, text: "ॐ विमलायै नमः ॥", meaning: { en: "the Stainless One.", kn: "ವಿಮಲೆಗೆ, ನಿರ್ಮಲಳಿಗೆ." } },
        { n: 61, text: "ॐ उत्कर्षिण्यै नमः ॥", meaning: { en: "who raises up (her devotees).", kn: "ಉತ್ಕರ್ಷಿಣಿಗೆ, ಮೇಲೆತ್ತುವವಳಿಗೆ." } },
        { n: 62, text: "ॐ ज्ञानायै नमः ॥", meaning: { en: "Knowledge.", kn: "ಜ್ಞಾನ ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 63, text: "ॐ क्रियायै नमः ॥", meaning: { en: "Action (the power to act).", kn: "ಕ್ರಿಯೆ ಸ್ವರೂಪಳಿಗೆ." } },
        { n: 64, text: "ॐ नित्यायै नमः ॥", meaning: { en: "the Eternal.", kn: "ನಿತ್ಯೆಗೆ." } },
        { n: 65, text: "ॐ बुद्धिदायै नमः ॥", meaning: { en: "who gives understanding.", kn: "ಬುದ್ಧಿಯನ್ನು ನೀಡುವವಳಿಗೆ." } },
        { n: 66, text: "ॐ बहुलायै नमः ॥", meaning: { en: "the Abundant One.", kn: "ಬಹುಲೆಗೆ, ಹೇರಳಳಿಗೆ." } },
        { n: 67, text: "ॐ बहुलप्रेमायै नमः ॥", meaning: { en: "who has abundant love.", kn: "ಅಪಾರ ಪ್ರೇಮವುಳ್ಳವಳಿಗೆ." } },
        { n: 68, text: "ॐ सर्ववाहनवाहनायै नमः ॥", meaning: { en: "who is the vehicle of all vehicles.", kn: "ಎಲ್ಲ ವಾಹನಗಳಿಗೂ ವಾಹನಳಿಗೆ." } },
        { n: 69, text: "ॐ निशुम्भशुम्भहनन्यै नमः ॥", meaning: { en: "who slew Nishumbha and Shumbha.", kn: "ನಿಶುಂಭ ಶುಂಭರನ್ನು ಸಂಹರಿಸಿದವಳಿಗೆ." } },
        { n: 70, text: "ॐ महिषासुरमर्दिन्यै नमः ॥", meaning: { en: "who crushed the demon Mahisha.", kn: "ಮಹಿಷಾಸುರನನ್ನು ಮರ್ದಿಸಿದವಳಿಗೆ." } },
        { n: 71, text: "ॐ मधुकैटभहन्त्र्यै नमः ॥", meaning: { en: "who slew Madhu and Kaitabha.", kn: "ಮಧುಕೈಟಭರನ್ನು ಕೊಂದವಳಿಗೆ." } },
        { n: 72, text: "ॐ चण्डमुण्डविनाशिन्यै नमः ॥", meaning: { en: "who destroyed Chanda and Munda.", kn: "ಚಂಡಮುಂಡರನ್ನು ನಾಶಮಾಡಿದವಳಿಗೆ." } },
        { n: 73, text: "ॐ सर्वासुरविनाशायै नमः ॥", meaning: { en: "who destroys all asuras.", kn: "ಎಲ್ಲ ಅಸುರರನ್ನು ವಿನಾಶ ಮಾಡುವವಳಿಗೆ." } },
        { n: 74, text: "ॐ सर्वदानवघातिन्यै नमः ॥", meaning: { en: "who slays all danavas.", kn: "ಎಲ್ಲ ದಾನವರನ್ನು ಸಂಹರಿಸುವವಳಿಗೆ." } },
        { n: 75, text: "ॐ सर्वशास्त्रमय्यै नमः ॥", meaning: { en: "who is made of all scriptures.", kn: "ಸರ್ವ ಶಾಸ್ತ್ರಮಯಿಗೆ." } },
        { n: 76, text: "ॐ सत्यायै नमः ॥", meaning: { en: "the True One.", kn: "ಸತ್ಯೆಗೆ." } },
        { n: 77, text: "ॐ सर्वास्त्रधारिण्यै नमः ॥", meaning: { en: "who holds all weapons.", kn: "ಎಲ್ಲ ಅಸ್ತ್ರಗಳನ್ನು ಧರಿಸಿದವಳಿಗೆ." } },
        { n: 78, text: "ॐ अनेकशस्त्रहस्तायै नमः ॥", meaning: { en: "whose hands hold many weapons.", kn: "ಅನೇಕ ಶಸ್ತ್ರ ಹಸ್ತೆಗೆ." } },
        { n: 79, text: "ॐ अनेकास्त्रधारिण्यै नमः ॥", meaning: { en: "who bears many missiles.", kn: "ಅನೇಕ ಅಸ್ತ್ರಗಳನ್ನು ಧರಿಸಿದವಳಿಗೆ." } },
        { n: 80, text: "ॐ कुमार्यै नमः ॥", meaning: { en: "Kumari, the maiden.", kn: "ಕುಮಾರಿಗೆ." } },
        { n: 81, text: "ॐ एककन्यायै नमः ॥", meaning: { en: "the One Girl (the only maiden).", kn: "ಏಕಕನ್ಯೆಗೆ." } },
        { n: 82, text: "ॐ कैशोर्यै नमः ॥", meaning: { en: "the adolescent girl.", kn: "ಕೈಶೋರಿಗೆ, ಕಿಶೋರಿಗೆ." } },
        { n: 83, text: "ॐ युवत्यै नमः ॥", meaning: { en: "the young woman.", kn: "ಯುವತಿಗೆ." } },
        { n: 84, text: "ॐ यत्यै नमः ॥", meaning: { en: "the ascetic woman.", kn: "ಯತಿಗೆ, ಸನ್ಯಾಸಿನಿಗೆ." } },
        { n: 85, text: "ॐ अप्रौढायै नमः ॥", meaning: { en: "who is not old.", kn: "ಪ್ರೌಢೆಯಲ್ಲದವಳಿಗೆ." } },
        { n: 86, text: "ॐ प्रौढायै नमः ॥", meaning: { en: "who is mature.", kn: "ಪ್ರೌಢೆಗೆ." } },
        { n: 87, text: "ॐ वृद्धमात्रे नमः ॥", meaning: { en: "the old Mother.", kn: "ವೃದ್ಧ ಮಾತೆಗೆ." } },
        { n: 88, text: "ॐ बलप्रदायै नमः ॥", meaning: { en: "who gives strength.", kn: "ಬಲವನ್ನು ನೀಡುವವಳಿಗೆ." } },
        { n: 89, text: "ॐ महोदर्यै नमः ॥", meaning: { en: "who has a great belly (the universe within).", kn: "ಮಹೋದರಿಗೆ, ದೊಡ್ಡ ಉದರವುಳ್ಳವಳಿಗೆ." } },
        { n: 90, text: "ॐ मुक्तकेश्यै नमः ॥", meaning: { en: "who has loose hair.", kn: "ಬಿಚ್ಚಿದ ಕೂದಲುಳ್ಳವಳಿಗೆ." } },
        { n: 91, text: "ॐ घोररूपायै नमः ॥", meaning: { en: "whose form is terrible.", kn: "ಘೋರ ರೂಪಿಣಿಗೆ." } },
        { n: 92, text: "ॐ महाबलायै नमः ॥", meaning: { en: "who is of great strength.", kn: "ಮಹಾಬಲೆಗೆ." } },
        { n: 93, text: "ॐ अग्निज्वालायै नमः ॥", meaning: { en: "who is a flame of fire.", kn: "ಅಗ್ನಿಜ್ವಾಲೆಗೆ." } },
        { n: 94, text: "ॐ रौद्रमुख्यै नमः ॥", meaning: { en: "whose face is fierce (Raudra).", kn: "ರೌದ್ರಮುಖಿಗೆ." } },
        { n: 95, text: "ॐ कालरात्र्यै नमः ॥", meaning: { en: "Kalaratri, the night of dissolution.", kn: "ಕಾಲರಾತ್ರಿಗೆ." } },
        { n: 96, text: "ॐ तपस्विन्यै नमः ॥", meaning: { en: "the austere One (ascetic).", kn: "ತಪಸ್ವಿನಿಗೆ." } },
        { n: 97, text: "ॐ नारायण्यै नमः ॥", meaning: { en: "Narayani.", kn: "ನಾರಾಯಣಿಗೆ." } },
        { n: 98, text: "ॐ भद्रकाल्यै नमः ॥", meaning: { en: "Bhadrakali.", kn: "ಭದ್ರಕಾಳಿಗೆ." } },
        { n: 99, text: "ॐ विष्णुमायायै नमः ॥", meaning: { en: "Vishnumaya, the Maya of Vishnu.", kn: "ವಿಷ್ಣುಮಾಯೆಗೆ." } },
        { n: 100, text: "ॐ जलोदर्यै नमः ॥", meaning: { en: "who has the waters in her belly (the one who holds the waters).", kn: "ಜಲೋದರಿಗೆ, ಜಲವನ್ನು ಗರ್ಭದಲ್ಲಿ ಧರಿಸಿದವಳಿಗೆ." } },
        { n: 101, text: "ॐ शिवदूत्यै नमः ॥", meaning: { en: "Shivaduti, whose messenger is Shiva.", kn: "ಶಿವದೂತಿಗೆ." } },
        { n: 102, text: "ॐ कराल्यै नमः ॥", meaning: { en: "the terrible, fearsome One.", kn: "ಕರಾಳಿಗೆ, ಭಯಂಕರಳಿಗೆ." } },
        { n: 103, text: "ॐ अनन्तायै नमः ॥", meaning: { en: "the Endless.", kn: "ಅನಂತೆಗೆ." } },
        { n: 104, text: "ॐ परमेश्वर्यै नमः ॥", meaning: { en: "the Supreme Goddess.", kn: "ಪರಮೇಶ್ವರಿಗೆ." } },
        { n: 105, text: "ॐ कात्यायन्यै नमः ॥", meaning: { en: "Katyayani.", kn: "ಕಾತ್ಯಾಯನಿಗೆ." } },
        { n: 106, text: "ॐ सावित्र्यै नमः ॥", meaning: { en: "Savitri.", kn: "ಸಾವಿತ್ರಿಗೆ." } },
        { n: 107, text: "ॐ प्रत्यक्षायै नमः ॥", meaning: { en: "the Visible One (directly present).", kn: "ಪ್ರತ್ಯಕ್ಷೆಗೆ, ಕಣ್ಣಿಗೆ ಕಾಣುವವಳಿಗೆ." } },
        { n: 108, text: "ॐ ब्रह्मवादिन्यै नमः ॥", meaning: { en: "the speaker of Brahman (Brahmavadini).", kn: "ಬ್ರಹ್ಮವಾದಿನಿಗೆ." } },
        { text: "इति श्रीविश्वसारतन्त्रे श्रीदुर्गाष्टोत्तरशतनामावलिः सम्पूर्णा ॥", meaning: { en: "Thus ends the Durga Ashtottara Shatanamavali from the Vishvasara Tantra.", kn: "ಹೀಗೆ ವಿಶ್ವಸಾರ ತಂತ್ರದ ಶ್ರೀದುರ್ಗಾಷ್ಟೋತ್ತರಶತನಾಮಾವಳಿಯು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
