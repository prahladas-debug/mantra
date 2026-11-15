/**
 * Ganapati Atharvashirsha (Ganapati Upanishad): the shanti-patha, fourteen sections (the numbering of the
 * printed editions) and the closing shanti-patha. No svaras.
 * Collated Nov 2026: stotranidhi.com "Sri Ganapati Atharvashirsha Upanishat" (Devanagari with accent marks
 * and the plain version "Sri Ganapati Atharva Shirsha"), sa.wikisource "गणपत्यथर्वशीर्षम्", and the Gita Press
 * "Panchadeva Atharvashirsha Sangraha" (archive.org panchdev-atharvashirsha-sangrah-gita-press-sanskrit-hindi, OCR).
 * Readings chosen where they differ:
 *  s3 अवाधरात्तात् (stotranidhi; Gita Press OCR अवाधस्तात्); s3 अवानूचानमव शिष्यम्;
 *  s6 त्वमवस्थात्रयातीतः (kept; absent from the Gita Press OCR and some copies);
 *  s7 तारेण ऋद्धम् (stotranidhi, wikisource; Gita Press रुद्धम्); s10 वरदमूर्तये नमः (stotranidhi accented text; the
 *  other two have श्रीवरदमूर्तये नमो नमः);
 *  s11 अपापो भवति (Gita Press, wikisource); s14 महाविघ्नात्, महादोषात्, महापापात् प्रमुच्यते (Gita Press,
 *  wikisource; stotranidhi's accented text has महाविघ्नात्, महादोषात्, महाप्रत्यवायात्).
 * The second closing shanti-patha ("saha navavatu") that wikisource adds is not included.
 */
import type { Mantra } from '../types';

export const ganapatiAtharvashirsha: Mantra = {
  id: 'ganapati-atharvashirsha',
  title: 'गणपत्यथर्वशीर्षम्',
  titleEn: 'Ganapati Atharvashirsha',
  category: 'vedic',
  deity: 'Ganapati',
  source: 'Atharvaveda (Ganapati Upanishad)',
  summary: 'The Upanishad of Ganapati, belonging to the Atharvaveda: it hails Ganapati as the visible Brahman, creator, sustainer and destroyer of all, gives his bija mantra (Om gam ganapataye namah), the Ganesha Gayatri, his meditation form, and the fruit of reciting it. It is recited at the start of auspicious undertakings and in Ganesha worship, and at the abhisheka of the image.',
  summaryKn: 'ಅಥರ್ವವೇದದ ಗಣಪತಿ ಉಪನಿಷತ್ತು: ಗಣಪತಿಯನ್ನು ಪ್ರತ್ಯಕ್ಷ ಬ್ರಹ್ಮನೆಂದು, ಎಲ್ಲದರ ಸೃಷ್ಟಿಕರ್ತ, ಪಾಲಕ, ಸಂಹಾರಕನೆಂದು ಸ್ತುತಿಸುತ್ತದೆ; ಅವನ ಬೀಜಮಂತ್ರ (ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ), ಗಣೇಶ ಗಾಯತ್ರಿ, ಧ್ಯಾನರೂಪ ಮತ್ತು ಪಠನದ ಫಲವನ್ನು ಹೇಳುತ್ತದೆ. ಶುಭಕಾರ್ಯಗಳ ಆರಂಭದಲ್ಲಿ, ಗಣಪತಿ ಪೂಜೆ ಮತ್ತು ಅಭಿಷೇಕದ ಸಮಯದಲ್ಲಿ ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'advanced',
  completeness: 'complete',
  contentNote: 'Text without svaras (accents). Collated against two further printings; the few places where copies differ are listed in the source note of the text file (e.g. the last phrases of section 14). Not included: the second closing shanti-patha (saha navavatu) that some copies add.',
  sections: [
    {
      title: 'शान्तिपाठः',
      titleEn: 'Shanti-patha (opening)',
      verses: [
        {
          text: 'ॐ भद्रं कर्णेभिः शृणुयाम देवाः ।\nभद्रं पश्येमाक्षभिर्यजत्राः ।\nस्थिरैरङ्गैस्तुष्टुवाꣳसस्तनूभिः ।\nव्यशेम देवहितं यदायुः ॥\nॐ स्वस्ति न इन्द्रो वृद्धश्रवाः ।\nस्वस्ति नः पूषा विश्ववेदाः ।\nस्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः ।\nस्वस्ति नो बृहस्पतिर्दधातु ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'O gods, may we hear what is auspicious with our ears; may we see what is auspicious with our eyes, O worshipful ones. With firm limbs and bodies, praising you, may we live the span of life given by the gods. May Indra of ancient fame be gracious to us; may Pushan, the all-knowing, be gracious; may Tarkshya of unharmed rim be gracious; may Brihaspati grant us well-being. Om peace, peace, peace.',
            kn: 'ಓ ದೇವತೆಗಳೇ, ನಾವು ಕಿವಿಗಳಿಂದ ಶುಭವನ್ನೇ ಕೇಳುವಂತಾಗಲಿ; ಪೂಜ್ಯರೇ, ಕಣ್ಣುಗಳಿಂದ ಶುಭವನ್ನೇ ನೋಡುವಂತಾಗಲಿ. ದೃಢವಾದ ಅಂಗಗಳಿಂದ, ದೇಹಗಳಿಂದ ನಿಮ್ಮನ್ನು ಸ್ತುತಿಸುತ್ತಾ ದೇವರು ಕೊಟ್ಟ ಆಯುಸ್ಸನ್ನು ಅನುಭವಿಸುವಂತಾಗಲಿ. ವೃದ್ಧಕೀರ್ತಿಯ ಇಂದ್ರನು ನಮಗೆ ಮಂಗಳ ಮಾಡಲಿ; ಸರ್ವಜ್ಞನಾದ ಪೂಷನು ಮಂಗಳ ಮಾಡಲಿ; ಅರಿಷ್ಟನೇಮಿಯಾದ ತಾರ್ಕ್ಷ್ಯನು ಮಂಗಳ ಮಾಡಲಿ; ಬೃಹಸ್ಪತಿಯು ನಮಗೆ ಮಂಗಳವನ್ನು ಕೊಡಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
      ],
    },
    {
      title: 'उपनिषत् — १. प्रत्यक्षं ब्रह्म',
      titleEn: 'Upanishad 1: the visible Brahman',
      verses: [
        {
          n: 1,
          text: 'ॐ नमस्ते गणपतये ।\nत्वमेव प्रत्यक्षं तत्त्वमसि ।\nत्वमेव केवलं कर्ताऽसि ।\nत्वमेव केवलं धर्ताऽसि ।\nत्वमेव केवलं हर्ताऽसि ।\nत्वमेव सर्वं खल्विदं ब्रह्मासि ।\nत्वं साक्षादात्माऽसि नित्यम् ॥',
          meaning: {
            en: 'Om, salutations to Ganapati. You alone are the visible Truth. You alone are the creator; you alone are the sustainer; you alone are the destroyer. You alone are all this, Brahman indeed. You are the Self itself, eternal.',
            kn: 'ಓಂ, ಗಣಪತಿಗೆ ನಮಸ್ಕಾರ. ನೀನೇ ಪ್ರತ್ಯಕ್ಷ ತತ್ತ್ವ. ನೀನೇ ಕರ್ತ; ನೀನೇ ಧರ್ತ; ನೀನೇ ಹರ್ತ. ಇದೆಲ್ಲವೂ ನೀನೇ, ಬ್ರಹ್ಮವೇ ಆಗಿರುವೆ. ನೀನು ನಿತ್ಯವಾದ ಸಾಕ್ಷಾತ್ ಆತ್ಮ.',
          },
        },
      ],
    },
    {
      title: '२. ऋतं सत्यं च',
      titleEn: 'Upanishad 2: I speak the right and the true',
      verses: [
        {
          n: 2,
          text: 'ऋतं वच्मि । सत्यं वच्मि ॥',
          meaning: {
            en: 'I speak the right; I speak the truth.',
            kn: 'ನಾನು ಋತವನ್ನು ಹೇಳುತ್ತೇನೆ; ಸತ್ಯವನ್ನು ಹೇಳುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: '३. रक्षा-प्रार्थना',
      titleEn: 'Upanishad 3: prayer for protection',
      verses: [
        {
          n: 3,
          text: 'अव त्वं माम् । अव वक्तारम् ।\nअव श्रोतारम् । अव दातारम् ।\nअव धातारम् । अवानूचानमव शिष्यम् ।\nअव पश्चात्तात् । अव पुरस्तात् ।\nअवोत्तरात्तात् । अव दक्षिणात्तात् ।\nअव चोर्ध्वात्तात् । अवाधरात्तात् ।\nसर्वतो मां पाहि पाहि समन्तात् ॥',
          meaning: {
            en: 'Protect me; protect the speaker; protect the listener; protect the giver; protect the holder (of the teaching); protect the learned teacher and the pupil. Protect from behind and from the front, from the north and from the south, from above and from below. Guard me on every side, guard me completely.',
            kn: 'ನನ್ನನ್ನು ರಕ್ಷಿಸು; ಹೇಳುವವನನ್ನು ರಕ್ಷಿಸು; ಕೇಳುವವನನ್ನು ರಕ್ಷಿಸು; ಕೊಡುವವನನ್ನು ರಕ್ಷಿಸು; ಧರಿಸುವವನನ್ನು ರಕ್ಷಿಸು; ಜ್ಞಾನಿಯಾದ ಗುರುವನ್ನೂ ಶಿಷ್ಯನನ್ನೂ ರಕ್ಷಿಸು. ಹಿಂದಿನಿಂದ, ಮುಂದಿನಿಂದ, ಉತ್ತರದಿಂದ, ದಕ್ಷಿಣದಿಂದ, ಮೇಲಿನಿಂದ, ಕೆಳಗಿನಿಂದ ರಕ್ಷಿಸು. ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ನನ್ನನ್ನು ಕಾಪಾಡು, ಕಾಪಾಡು.',
          },
        },
      ],
    },
    {
      title: '४. ब्रह्ममयत्वम्',
      titleEn: 'Upanishad 4: you are of the nature of Brahman',
      verses: [
        {
          n: 4,
          text: 'त्वं वाङ्मयस्त्वं चिन्मयः ।\nत्वमानन्दमयस्त्वं ब्रह्ममयः ।\nत्वं सच्चिदानन्दाद्वितीयोऽसि ।\nत्वं प्रत्यक्षं ब्रह्मासि ।\nत्वं ज्ञानमयो विज्ञानमयोऽसि ॥',
          meaning: {
            en: 'You are of the nature of speech and of consciousness; you are of bliss and of Brahman. You are Existence-Consciousness-Bliss, without a second. You are the visible Brahman. You are full of knowledge and of realisation.',
            kn: 'ನೀನು ವಾಙ್ಮಯ, ನೀನು ಚಿನ್ಮಯ; ನೀನು ಆನಂದಮಯ, ನೀನು ಬ್ರಹ್ಮಮಯ. ನೀನು ಸಚ್ಚಿದಾನಂದ ಅದ್ವಿತೀಯ. ನೀನು ಪ್ರತ್ಯಕ್ಷ ಬ್ರಹ್ಮ. ನೀನು ಜ್ಞಾನಮಯ, ವಿಜ್ಞಾನಮಯ.',
          },
        },
      ],
    },
    {
      title: '५. जगत्कारणत्वम्',
      titleEn: 'Upanishad 5: the cause of the world',
      verses: [
        {
          n: 5,
          text: 'सर्वं जगदिदं त्वत्तो जायते ।\nसर्वं जगदिदं त्वत्तस्तिष्ठति ।\nसर्वं जगदिदं त्वयि लयमेष्यति ।\nसर्वं जगदिदं त्वयि प्रत्येति ।\nत्वं भूमिरापोऽनलोऽनिलो नभः ।\nत्वं चत्वारि वाक्पदानि ॥',
          meaning: {
            en: 'All this world is born from you; all this world stands in you; all this world will dissolve into you; all this world returns to you. You are earth, water, fire, air and space. You are the four levels of speech.',
            kn: 'ಈ ಜಗತ್ತೆಲ್ಲವೂ ನಿನ್ನಿಂದ ಹುಟ್ಟುತ್ತದೆ; ನಿನ್ನಲ್ಲಿ ನೆಲೆಯಾಗಿರುತ್ತದೆ; ನಿನ್ನಲ್ಲಿ ಲಯವಾಗುತ್ತದೆ; ನಿನ್ನಲ್ಲೇ ಮರಳಿ ಸೇರುತ್ತದೆ. ನೀನು ಭೂಮಿ, ನೀರು, ಅಗ್ನಿ, ವಾಯು, ಆಕಾಶ. ನೀನು ವಾಕ್ಕಿನ ನಾಲ್ಕು ಪದಗಳು (ಪರಾ, ಪಶ್ಯಂತೀ, ಮಧ್ಯಮಾ, ವೈಖರೀ).',
          },
        },
      ],
    },
    {
      title: '६. त्रयातीतत्वम्',
      titleEn: 'Upanishad 6: beyond the three',
      verses: [
        {
          n: 6,
          text: 'त्वं गुणत्रयातीतः । त्वमवस्थात्रयातीतः ।\nत्वं देहत्रयातीतः ।\nत्वं कालत्रयातीतः ।\nत्वं मूलाधारस्थितोऽसि नित्यम् ।\nत्वं शक्तित्रयात्मकः ।\nत्वां योगिनो ध्यायन्ति नित्यम् ।\nत्वं ब्रह्मा त्वं विष्णुस्त्वं रुद्रस्त्वमिन्द्रस्त्वमग्निस्त्वं वायुस्त्वं सूर्यस्त्वं चन्द्रमास्त्वं ब्रह्म भूर्भुवःस्वरोम् ॥',
          meaning: {
            en: 'You are beyond the three gunas, beyond the three states (waking, dream, deep sleep), beyond the three bodies, beyond the three times. You abide always in the muladhara. You are made of the three powers. Yogis meditate on you always. You are Brahma, Vishnu, Rudra, Indra, Agni, Vayu, Surya, Chandra; you are Brahman, and Bhur, Bhuvah, Svah and Om.',
            kn: 'ನೀನು ತ್ರಿಗುಣಗಳನ್ನು ಮೀರಿದವನು, ಮೂರು ಅವಸ್ಥೆಗಳನ್ನು (ಜಾಗ್ರತ್, ಸ್ವಪ್ನ, ಸುಷುಪ್ತಿ) ಮೀರಿದವನು, ಮೂರು ದೇಹಗಳನ್ನು ಮೀರಿದವನು, ಮೂರು ಕಾಲಗಳನ್ನು ಮೀರಿದವನು. ನೀನು ನಿತ್ಯವೂ ಮೂಲಾಧಾರದಲ್ಲಿ ನೆಲೆಸಿರುವೆ. ನೀನು ತ್ರಿಶಕ್ತಿಸ್ವರೂಪ. ಯೋಗಿಗಳು ನಿತ್ಯವೂ ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾರೆ. ನೀನು ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಇಂದ್ರ, ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ಚಂದ್ರ; ನೀನೇ ಬ್ರಹ್ಮ, ಭೂಃ ಭುವಃ ಸ್ವಃ ಮತ್ತು ಓಂ.',
          },
        },
      ],
    },
    {
      title: '७. गणेशमन्त्रः',
      titleEn: 'Upanishad 7: the Ganesha mantra',
      verses: [
        {
          n: 7,
          text: 'गणादिं पूर्वमुच्चार्य वर्णादींस्तदनन्तरम् ।\nअनुस्वारः परतरः ।\nअर्धेन्दुलसितम् ।\nतारेण ऋद्धम् ।\nएतत्तव मनुस्वरूपम् ।\nगकारः पूर्वरूपम् ।\nअकारो मध्यमरूपम् ।\nअनुस्वारश्चान्त्यरूपम् ।\nबिन्दुरुत्तररूपम् ।\nनादः सन्धानम् ।\nसंहिता सन्धिः ।\nसैषा गणेशविद्या ।\nगणक ऋषिः ।\nनिचृद्गायत्रीच्छन्दः ।\nगणपतिर्देवता ।\nॐ गं गणपतये नमः ॥',
          meaning: {
            en: 'Pronounce first the first letter of the word "gana", then the first letter of the alphabet (a), then the anusvara after it, adorned by the half-moon and enclosed by Om: this is the form of your mantra. The letter "g" is its first form, "a" its middle form, the anusvara its last form, the bindu its upper form, the nada its junction, and their union the joining. This is Ganesha-vidya. The seer is Ganaka, the metre Nichrit-gayatri, the deity Ganapati: Om gam ganapataye namah.',
            kn: '“ಗಣ” ಶಬ್ದದ ಆದ್ಯಕ್ಷರವನ್ನು (ಗ) ಮೊದಲು ಉಚ್ಚರಿಸಿ, ಅನಂತರ ವರ್ಣಾದಿಯಾದ ಅ-ಕಾರ, ಅದರ ಮೇಲೆ ಅನುಸ್ವಾರ; ಅರ್ಧಚಂದ್ರನಿಂದ ಶೋಭಿತವಾಗಿ ಓಂಕಾರದಿಂದ ಆವೃತವಾದದ್ದು ನಿನ್ನ ಮಂತ್ರಸ್ವರೂಪ. ಗಕಾರ ಪೂರ್ವರೂಪ, ಅಕಾರ ಮಧ್ಯರೂಪ, ಅನುಸ್ವಾರ ಅಂತ್ಯರೂಪ, ಬಿಂದು ಉತ್ತರರೂಪ, ನಾದ ಸಂಧಾನ, ಸಂಹಿತೆಯೇ ಸಂಧಿ. ಇದೇ ಗಣೇಶವಿದ್ಯೆ. ಗಣಕ ಋಷಿ, ನಿಚೃದ್ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಗಣಪತಿ ದೇವತೆ: ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ.',
          },
        },
      ],
    },
    {
      title: '८. गणेशगायत्री',
      titleEn: 'Upanishad 8: the Ganesha Gayatri',
      verses: [
        {
          n: 8,
          text: 'एकदन्ताय विद्महे वक्रतुण्डाय धीमहि ।\nतन्नो दन्तिः प्रचोदयात् ॥',
          meaning: {
            en: 'We know the one-tusked; we meditate on the curved-trunked. May that Danti (the elephant-faced) inspire us.',
            kn: 'ಏಕದಂತನನ್ನು ತಿಳಿಯುತ್ತೇವೆ; ವಕ್ರತುಂಡನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಆ ದಂತಿಯು ನಮ್ಮನ್ನು ಪ್ರೇರಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: '९. ध्यानम्',
      titleEn: 'Upanishad 9: meditation',
      verses: [
        {
          n: 9,
          text: 'एकदन्तं चतुर्हस्तं पाशमङ्कुशधारिणम् ।\nरदं च वरदं हस्तैर्बिभ्राणं मूषकध्वजम् ॥\nरक्तं लम्बोदरं शूर्पकर्णकं रक्तवाससम् ।\nरक्तगन्धानुलिप्ताङ्गं रक्तपुष्पैः सुपूजितम् ॥\nभक्तानुकम्पिनं देवं जगत्कारणमच्युतम् ।\nआविर्भूतं च सृष्ट्यादौ प्रकृतेः पुरुषात्परम् ॥\nएवं ध्यायति यो नित्यं स योगी योगिनां वरः ॥',
          meaning: {
            en: 'He has one tusk and four hands, bearing the noose and the goad, and with his hands holding a tusk and showing the boon-giving gesture; his banner is the mouse. He is red, big-bellied, with ears like winnowing fans, wearing red clothes, his limbs anointed with red sandal and worshipped with red flowers. He is the god compassionate to devotees, the cause of the world, the imperishable, who appeared at the beginning of creation, beyond Prakriti and Purusha. He who meditates on him thus every day is a yogi, the best of yogis.',
            kn: 'ಏಕದಂತನು, ನಾಲ್ಕು ಕೈಗಳುಳ್ಳವನು, ಪಾಶ ಮತ್ತು ಅಂಕುಶ ಧರಿಸಿದವನು; ಕೈಗಳಲ್ಲಿ ದಂತ ಮತ್ತು ವರಮುದ್ರೆ ಹಿಡಿದವನು; ಇಲಿಯೇ ಧ್ವಜವುಳ್ಳವನು. ಕೆಂಪು ವರ್ಣದವನು, ಲಂಬೋದರ, ಮೊರದಂತಹ ಕಿವಿಯುಳ್ಳವನು, ಕೆಂಪು ವಸ್ತ್ರ ಧರಿಸಿದವನು, ಕೆಂಪು ಗಂಧ ಲೇಪಿತ ಅಂಗಗಳುಳ್ಳವನು, ಕೆಂಪು ಹೂವುಗಳಿಂದ ಚೆನ್ನಾಗಿ ಪೂಜಿತನು. ಭಕ್ತರ ಮೇಲೆ ಅನುಕಂಪವುಳ್ಳ ದೇವನು, ಜಗತ್ತಿನ ಕಾರಣನು, ಅಚ್ಯುತನು, ಸೃಷ್ಟಿಯ ಆದಿಯಲ್ಲಿ ಆವಿರ್ಭವಿಸಿದವನು, ಪ್ರಕೃತಿ ಪುರುಷರನ್ನು ಮೀರಿದವನು. ಹೀಗೆ ನಿತ್ಯವೂ ಧ್ಯಾನಿಸುವವನು ಯೋಗಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠ ಯೋಗಿ.',
          },
        },
      ],
    },
    {
      title: '१०. नमस्कारः',
      titleEn: 'Upanishad 10: salutation',
      verses: [
        {
          n: 10,
          text: 'नमो व्रातपतये नमो गणपतये नमः प्रमथपतये\nनमस्तेऽस्तु लम्बोदरायैकदन्ताय विघ्ननाशिने\nशिवसुताय वरदमूर्तये नमः ॥',
          meaning: {
            en: 'Salutations to the lord of the groups (vratapati), to Ganapati, to the lord of the pramathas. Salutations to you, the big-bellied, the one-tusked, destroyer of obstacles, son of Shiva, the form that gives boons.',
            kn: 'ವ್ರಾತಪತಿಗೆ ನಮಸ್ಕಾರ; ಗಣಪತಿಗೆ ನಮಸ್ಕಾರ; ಪ್ರಮಥಪತಿಗೆ ನಮಸ್ಕಾರ. ಲಂಬೋದರನಿಗೆ, ಏಕದಂತನಿಗೆ, ವಿಘ್ನನಾಶಕನಿಗೆ, ಶಿವಪುತ್ರನಿಗೆ, ವರದಮೂರ್ತಿಗೆ ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: '११. फलश्रुतिः',
      titleEn: 'Upanishad 11: the fruit of reciting',
      verses: [
        {
          n: 11,
          text: 'एतदथर्वशीर्षं योऽधीते ।\nस ब्रह्मभूयाय कल्पते ।\nस सर्वविघ्नैर्न बाध्यते ।\nस सर्वत्र सुखमेधते ।\nस पञ्चमहापापात्प्रमुच्यते ।\nसायमधीयानो दिवसकृतं पापं नाशयति ।\nप्रातरधीयानो रात्रिकृतं पापं नाशयति ।\nसायंप्रातः प्रयुञ्जानो अपापो भवति ।\nसर्वत्राधीयानोऽपविघ्नो भवति ।\nधर्मार्थकाममोक्षं च विन्दति ।\nइदमथर्वशीर्षमशिष्याय न देयम् ।\nयो यदि मोहाद्दास्यति स पापीयान्भवति ।\nसहस्रावर्तनाद्यं यं काममधीते तं तमनेन साधयेत् ॥',
          meaning: {
            en: 'He who studies this Atharvashirsha becomes fit for union with Brahman. He is not hindered by any obstacles. He prospers everywhere in happiness. He is freed from the five great sins. Reciting it in the evening he destroys the sins of the day; reciting it in the morning he destroys the sins of the night; reciting it at both dawn and dusk he becomes sinless. Reciting it everywhere he becomes free of obstacles and attains dharma, wealth, desire and liberation. This Atharvashirsha should not be given to one who is not a disciple; if one gives it out of delusion he becomes more sinful. Whatever desire one has, by reciting it a thousand times one can fulfil that by it.',
            kn: 'ಈ ಅಥರ್ವಶೀರ್ಷವನ್ನು ಅಧ್ಯಯನ ಮಾಡುವವನು ಬ್ರಹ್ಮಭಾವಕ್ಕೆ ಅರ್ಹನಾಗುತ್ತಾನೆ. ಅವನು ಯಾವ ವಿಘ್ನಗಳಿಂದಲೂ ಬಾಧಿತನಾಗುವುದಿಲ್ಲ. ಎಲ್ಲೆಡೆ ಸುಖವಾಗಿ ವೃದ್ಧಿಹೊಂದುತ್ತಾನೆ. ಪಂಚಮಹಾಪಾಪಗಳಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ. ಸಾಯಂಕಾಲ ಪಠಿಸಿದರೆ ಹಗಲಿನ ಪಾಪವನ್ನೂ, ಬೆಳಗ್ಗೆ ಪಠಿಸಿದರೆ ರಾತ್ರಿಯ ಪಾಪವನ್ನೂ ನಾಶಮಾಡುತ್ತಾನೆ; ಸಾಯಂ-ಪ್ರಾತಃ ಎರಡೂ ಹೊತ್ತು ಪಠಿಸುವವನು ನಿಷ್ಪಾಪನಾಗುತ್ತಾನೆ. ಎಲ್ಲೆಡೆ ಪಠಿಸುವವನು ವಿಘ್ನರಹಿತನಾಗಿ ಧರ್ಮ, ಅರ್ಥ, ಕಾಮ, ಮೋಕ್ಷಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಈ ಅಥರ್ವಶೀರ್ಷವನ್ನು ಶಿಷ್ಯನಲ್ಲದವನಿಗೆ ಕೊಡಬಾರದು; ಮೋಹದಿಂದ ಕೊಟ್ಟವನು ಪಾಪಿಷ್ಠನಾಗುತ್ತಾನೆ. ಸಾವಿರ ಬಾರಿ ಪಠಿಸಿ ಯಾವ ಇಷ್ಟವನ್ನು ಬಯಸುತ್ತಾನೋ ಅದನ್ನು ಇದರಿಂದ ಸಾಧಿಸಬಹುದು.',
          },
        },
      ],
    },
    {
      title: '१२. अभिषेकफलम्',
      titleEn: 'Upanishad 12: the fruit of the abhisheka',
      verses: [
        {
          n: 12,
          text: 'अनेन गणपतिमभिषिञ्चति स वाग्मी भवति ।\nचतुर्थ्यामनश्नन् जपति स विद्यावान्भवति ।\nस यशोवान्भवति ।\nइत्यथर्वणवाक्यम् ।\nब्रह्माद्याचरणं विद्यान्न बिभेति कदाचनेति ॥',
          meaning: {
            en: 'He who performs the abhisheka of Ganapati with this becomes eloquent. He who recites it fasting on Chaturthi becomes learned and famous. So says the word of the Atharvan seer. He who knows the conduct taught beginning with Brahman never fears.',
            kn: 'ಇದರಿಂದ ಗಣಪತಿಗೆ ಅಭಿಷೇಕ ಮಾಡುವವನು ವಾಗ್ಮಿಯಾಗುತ್ತಾನೆ. ಚತುರ್ಥಿಯಂದು ಉಪವಾಸವಿದ್ದು ಜಪಿಸುವವನು ವಿದ್ಯಾವಂತನೂ ಯಶಸ್ವಿಯೂ ಆಗುತ್ತಾನೆ. ಇದು ಅಥರ್ವಣ ವಾಕ್ಯ. ಬ್ರಹ್ಮಾದಿಗಳಿಂದ ಆಚರಿಸಲ್ಪಟ್ಟದ್ದನ್ನು ತಿಳಿದವನು ಎಂದೂ ಭಯಪಡುವುದಿಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: '१३. यजनफलम्',
      titleEn: 'Upanishad 13: the fruit of worship',
      verses: [
        {
          n: 13,
          text: 'यो दूर्वाङ्कुरैर्यजति स वैश्रवणोपमो भवति ।\nयो लाजैर्यजति स यशोवान्भवति ।\nस मेधावान्भवति ।\nयो मोदकसहस्रेण यजति स वाञ्छितफलमवाप्नोति ।\nयः साज्यसमिद्भिर्यजति स सर्वं लभते स सर्वं लभते ॥',
          meaning: {
            en: 'He who worships with shoots of durva grass becomes like Vaishravana (Kubera). He who worships with parched rice becomes famous, and gains intelligence. He who worships with a thousand modakas obtains the fruit he desires. He who worships with sacrificial sticks and ghee obtains everything, obtains everything.',
            kn: 'ಗರಿಕೆಯ ಚಿಗುರುಗಳಿಂದ ಪೂಜಿಸುವವನು ಕುಬೇರನಂತಾಗುತ್ತಾನೆ. ಅರಳಿನಿಂದ ಪೂಜಿಸುವವನು ಯಶಸ್ವಿಯಾಗುತ್ತಾನೆ; ಮೇಧಾವಿಯೂ ಆಗುತ್ತಾನೆ. ಸಾವಿರ ಮೋದಕಗಳಿಂದ ಪೂಜಿಸುವವನು ಇಷ್ಟಫಲವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ತುಪ್ಪ ಮತ್ತು ಸಮಿತ್ತುಗಳಿಂದ (ಹೋಮ ಮಾಡಿ) ಪೂಜಿಸುವವನು ಎಲ್ಲವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ, ಎಲ್ಲವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: '१४. सिद्धिः',
      titleEn: 'Upanishad 14: accomplishment',
      verses: [
        {
          n: 14,
          text: 'अष्टौ ब्राह्मणान्सम्यग्ग्राहयित्वा सूर्यवर्चस्वी भवति ।\nसूर्यग्रहे महानद्यां प्रतिमासंनिधौ वा जप्त्वा सिद्धमन्त्रो भवति ।\nमहाविघ्नात्प्रमुच्यते ।\nमहादोषात्प्रमुच्यते ।\nमहापापात्प्रमुच्यते ।\nस सर्वविद्भवति स सर्वविद्भवति ।\nय एवं वेद ।\nइत्युपनिषत् ॥',
          meaning: {
            en: 'He who has eight brahmins duly receive (this teaching) becomes radiant like the Sun. He who recites it during a solar eclipse, in a great river or before an image, has his mantra perfected. He is freed from great obstacles, great faults and great sins. He becomes all-knowing, all-knowing - he who knows thus. Such is the Upanishad.',
            kn: 'ಎಂಟು ಬ್ರಾಹ್ಮಣರಿಗೆ ಚೆನ್ನಾಗಿ ಇದನ್ನು ಗ್ರಹಿಸುವಂತೆ ಮಾಡಿದವನು ಸೂರ್ಯನಂತೆ ತೇಜಸ್ವಿಯಾಗುತ್ತಾನೆ. ಸೂರ್ಯಗ್ರಹಣದಲ್ಲಿ ಮಹಾನದಿಯಲ್ಲಿ ಅಥವಾ ಪ್ರತಿಮೆಯ ಸನ್ನಿಧಿಯಲ್ಲಿ ಜಪಿಸಿದವನು ಮಂತ್ರಸಿದ್ಧನಾಗುತ್ತಾನೆ. ಮಹಾವಿಘ್ನ, ಮಹಾದೋಷ, ಮಹಾಪಾಪಗಳಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ. ಹೀಗೆ ತಿಳಿದವನು ಸರ್ವಜ್ಞನಾಗುತ್ತಾನೆ, ಸರ್ವಜ್ಞನಾಗುತ್ತಾನೆ. ಇದು ಉಪನಿಷತ್ತು.',
          },
        },
      ],
    },
    {
      title: 'शान्तिपाठः',
      titleEn: 'Shanti-patha (closing)',
      verses: [
        {
          text: 'ॐ भद्रं कर्णेभिः शृणुयाम देवाः ।\nभद्रं पश्येमाक्षभिर्यजत्राः ।\nस्थिरैरङ्गैस्तुष्टुवाꣳसस्तनूभिः ।\nव्यशेम देवहितं यदायुः ॥\nॐ स्वस्ति न इन्द्रो वृद्धश्रवाः ।\nस्वस्ति नः पूषा विश्ववेदाः ।\nस्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः ।\nस्वस्ति नो बृहस्पतिर्दधातु ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'O gods, may we hear what is auspicious with our ears; may we see what is auspicious with our eyes, O worshipful ones. With firm limbs and bodies, praising you, may we live the span of life given by the gods. May Indra of ancient fame be gracious to us; may Pushan, the all-knowing, be gracious; may Tarkshya of unharmed rim be gracious; may Brihaspati grant us well-being. Om peace, peace, peace.',
            kn: 'ಓ ದೇವತೆಗಳೇ, ನಾವು ಕಿವಿಗಳಿಂದ ಶುಭವನ್ನೇ ಕೇಳುವಂತಾಗಲಿ; ಪೂಜ್ಯರೇ, ಕಣ್ಣುಗಳಿಂದ ಶುಭವನ್ನೇ ನೋಡುವಂತಾಗಲಿ. ದೃಢವಾದ ಅಂಗಗಳಿಂದ, ದೇಹಗಳಿಂದ ನಿಮ್ಮನ್ನು ಸ್ತುತಿಸುತ್ತಾ ದೇವರು ಕೊಟ್ಟ ಆಯುಸ್ಸನ್ನು ಅನುಭವಿಸುವಂತಾಗಲಿ. ವೃದ್ಧಕೀರ್ತಿಯ ಇಂದ್ರನು ನಮಗೆ ಮಂಗಳ ಮಾಡಲಿ; ಸರ್ವಜ್ಞನಾದ ಪೂಷನು ಮಂಗಳ ಮಾಡಲಿ; ಅರಿಷ್ಟನೇಮಿಯಾದ ತಾರ್ಕ್ಷ್ಯನು ಮಂಗಳ ಮಾಡಲಿ; ಬೃಹಸ್ಪತಿಯು ನಮಗೆ ಮಂಗಳವನ್ನು ಕೊಡಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
      ],
    },
  ],
};
