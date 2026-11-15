/**
 * Chandika Homa (Chandi Homa, Durga Saptashati Homa): the structure and the main offerings,
 * with the shared steps in "Homa: Common Procedure" (homa-purvanga).
 * NOT YET PROOFREAD against one printed edition.
 *
 * The 700 verses are NOT copied here: they are in the library as "Devi Mahatmyam" (Kavacham,
 * Argala, Kilaka, chapters 1-13, the Suktas and the kshamapana), and the homa recites them from
 * there, chapter by chapter.
 *
 * Sources:
 *  - Durga Saptashati (Gita Press text) as typed in vishvAsa/purANam (github), sarva-prastutiH:
 *    the order of recitation (pathavidhi: Kavacha, Argala, Kilaka, Ratri Sukta, Devi Atharvashirsha,
 *    navarna vidhi, the three charitras with their viniyoga, the rahasyas), and the Vaikritika
 *    Rahasya 35 ("pratishlokam cha juhuyat payasam tilasarpisha ... juhuyat stotramantrair va");
 *    chapter 12.10-11 on bali, puja and homa. Compared with the app's "Devi Mahatmyam".
 *  - "Sri Devi Mahatmyam Sri Chandi Homa Lesa Sangraham", ed. Shivagama Kalanidhi (Tamil, Grantha
 *    script, Pudukkottai 2022; archive.org zmaq_sri-devi-mahatmyam-sri-chandi-homa-lesa-sangraham-
 *    ed-by-shivagama-kalanidhi-tami): daily, nava-, shata- and sahasra-chandi; the offering of a
 *    fruit or material for each chapter; the introductory note. The scan is of poor quality in
 *    Grantha and the chapter-by-chapter list of materials could not be read; it is not given.
 *  - "Sri Chandi Saptha Sathi Homa Vidhanam" (Tamil; archive.org risz-sri-chandi-saptha-sathi-
 *    homa-vidhanam-najan-tamil-): consulted; too short and unclear to quote.
 */
import type { Mantra } from '../types';

export const chandikaHoma: Mantra = {
  id: 'chandika-homa',
  title: 'चण्डिकाहोमः',
  titleEn: 'Chandika Homa (Durga Saptashati Homa)',
  category: 'homa',
  order: 6,
  deity: 'Chandika (Mahakali, Mahalakshmi, Mahasarasvati)',
  source: 'Durga Saptashati (Markandeya Purana, Gita Press text) with its rahasyas; Tamil Chandi Homa manual (Shivagama Kalanidhi)',
  summary: 'The structure of the Chandi homa, in which the Devi Mahatmyam (Durga Saptashati) is recited chapter by chapter and offered into the fire: the preliminary recitations, the three charitras and their deities, the navarna mantra, how the 700 verses are offered, the daily, nine-, hundred- and thousand-fold forms, balidana, and the purnahuti. The verses themselves are not copied; they open in the library as the Devi Mahatmyam texts.',
  summaryKn: 'ದೇವೀಮಾಹಾತ್ಮ್ಯ (ದುರ್ಗಾಸಪ್ತಶತೀ)ವನ್ನು ಅಧ್ಯಾಯ ಅಧ್ಯಾಯವಾಗಿ ಪಠಿಸಿ ಅಗ್ನಿಗೆ ಅರ್ಪಿಸುವ ಚಂಡೀ ಹೋಮದ ರಚನೆ: ಪೂರ್ವಭಾವಿ ಪಠಣಗಳು, ಮೂರು ಚರಿತ್ರಗಳು ಮತ್ತು ಅವುಗಳ ದೇವತೆಗಳು, ನವಾರ್ಣ ಮಂತ್ರ, ೭೦೦ ಮಂತ್ರಗಳ ಹೋಮ ಕ್ರಮ, ನಿತ್ಯ–ನವ–ಶತ–ಸಹಸ್ರ ಚಂಡೀ ರೂಪಗಳು, ಬಲಿದಾನ, ಪೂರ್ಣಾಹುತಿ. ಶ್ಲೋಕಗಳನ್ನು ಇಲ್ಲಿ ನಕಲು ಮಾಡಿಲ್ಲ; ಅವು ಗ್ರಂಥಾಲಯದ ದೇವೀಮಾಹಾತ್ಮ್ಯ ಪಠ್ಯಗಳಲ್ಲಿ ತೆರೆಯುತ್ತವೆ.',
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'A guide for understanding and following along; homas are traditionally done with a trained priest, and the Chandi homa is a large rite done by several priests. The 700 verses of the Devi Mahatmyam are not copied here: read them from the library texts named in the sections (Devi Mahatmyam: Kavacham, Argala, Kilaka, Chapters 1 to 13, Ratri Suktam, Devi Suktam, Devyaparadha-kshamapana). Left out because the sources could not be read or agree: the chapter-by-chapter list of materials (each chapter has its own fruit or material in the Tamil manual), the complete nyasa of the navarna and of the Saptashati, the dhyanas of the three charitras, and the full nine-day or hundred-recitation procedures. Whether and how this homa is done by Madhva families depends on the guru; the Smarta and Shakta households follow their own manuals.',
  sections: [
    {
      title: 'चण्डीहोमस्वरूपम्',
      titleEn: 'What the Chandi homa is and its forms',
      note: 'In the Chandi homa the Devi Mahatmyam (the Durga Saptashati, 700 mantras in thirteen chapters) is recited and the Devi is worshipped and offered oblations. Tamil manual: the form is called Dina-chandi (one recitation), Nava-chandi (nine), Shata-chandi (one hundred) and Sahasra-chandi (one thousand). The three-fold Chandi, who is Durga, Lakshmi and Sarasvati, who is Brahman herself, is worshipped, praised and offered homa, and the homa is offered to her. The Devi herself says in chapter 12 that her story should be recited and heard in full at times of bali, puja, fire-worship (homa) and festivals; and that she receives with pleasure the bali, puja and homa offered, knowingly or not. (Devi Mahatmyam 12.10-11)',
      noteKn: 'ಚಂಡೀ ಹೋಮದಲ್ಲಿ ದೇವೀಮಾಹಾತ್ಮ್ಯವನ್ನು (ದುರ್ಗಾಸಪ್ತಶತೀ, ಹದಿಮೂರು ಅಧ್ಯಾಯಗಳ ೭೦೦ ಮಂತ್ರಗಳು) ಪಠಿಸಿ, ದೇವಿಯನ್ನು ಪೂಜಿಸಿ, ಆಹುತಿ ನೀಡಲಾಗುತ್ತದೆ. ತಮಿಳು ಗ್ರಂಥ: ದಿನ ಚಂಡೀ (ಒಂದು ಪಾರಾಯಣ), ನವ ಚಂಡೀ (ಒಂಬತ್ತು), ಶತ ಚಂಡೀ (ನೂರು), ಸಹಸ್ರ ಚಂಡೀ (ಸಾವಿರ). ದುರ್ಗಾ–ಲಕ್ಷ್ಮೀ–ಸರಸ್ವತೀ ಎಂಬ ತ್ರಿಗುಣಾತ್ಮಿಕೆಯಾದ, ಬ್ರಹ್ಮಸ್ವರೂಪಿಣಿಯಾದ ಚಂಡಿಯನ್ನು ಪೂಜಿಸಿ, ಸ್ತುತಿಸಿ, ಹೋಮ ಮಾಡಿ ಅವಳಿಗೆ ಅರ್ಪಿಸುತ್ತಾರೆ. ಬಲಿದಾನ, ಪೂಜೆ, ಅಗ್ನಿಕಾರ್ಯ (ಹೋಮ), ಮಹೋತ್ಸವಗಳ ಸಮಯದಲ್ಲಿ ತನ್ನ ಚರಿತ್ರವನ್ನು ಪೂರ್ತಿ ಪಠಿಸಿ ಕೇಳಬೇಕೆಂದೂ, ತಿಳಿದೋ ತಿಳಿಯದೆಯೋ ಮಾಡಿದ ಬಲಿ–ಪೂಜೆ–ಹೋಮವನ್ನು ತಾನು ಪ್ರೀತಿಯಿಂದ ಸ್ವೀಕರಿಸುತ್ತೇನೆಂದೂ ದೇವಿಯೇ ೧೨ನೆಯ ಅಧ್ಯಾಯದಲ್ಲಿ ಹೇಳುತ್ತಾಳೆ. (ದೇವೀಮಾಹಾತ್ಮ್ಯ ೧೨.೧೦–೧೧)',
      verses: [
        {
          text: 'बलिप्रदाने पूजायामग्निकार्ये महोत्सवे ।\nसर्वं ममैतच्चरितमुच्चार्यं श्राव्यमेव च ॥',
          meaning: {
            en: 'On the occasions of offering bali, of worship, of the fire rite and of great festivals, this whole story of mine should be recited and heard. (Devi Mahatmyam 12.10)',
            kn: 'ಬಲಿದಾನ, ಪೂಜೆ, ಅಗ್ನಿಕಾರ್ಯ (ಹೋಮ), ಮಹೋತ್ಸವಗಳ ಸಮಯದಲ್ಲಿ ನನ್ನ ಈ ಚರಿತ್ರವನ್ನು ಪೂರ್ತಿ ಪಠಿಸಬೇಕು ಮತ್ತು ಕೇಳಬೇಕು. (ದೇವೀಮಾಹಾತ್ಮ್ಯ ೧೨.೧೦)',
          },
        },
        {
          text: 'जानताजानता वापि बलिपूजां तथा कृताम् ।\nप्रतीच्छिष्याम्यहं प्रीत्या वह्निहोमं तथा कृतम् ॥',
          meaning: {
            en: 'Whether done knowingly or unknowingly, I shall receive with love the bali and worship so offered, and the fire-offering likewise. (Devi Mahatmyam 12.11)',
            kn: 'ತಿಳಿದೋ ತಿಳಿಯದೆಯೋ ಮಾಡಿದ ಬಲಿ–ಪೂಜೆಗಳನ್ನು, ಹಾಗೆಯೇ ಹೋಮವನ್ನು, ನಾನು ಪ್ರೀತಿಯಿಂದ ಸ್ವೀಕರಿಸುವೆನು. (ದೇವೀಮಾಹಾತ್ಮ್ಯ ೧೨.೧೧)',
          },
        },
      ],
    },
    {
      title: 'पूर्वपाठक्रमः',
      titleEn: 'The order of recitation before the homa',
      note: 'The Saptashati is prepared for recitation in this order (Gita Press): Devi Kavacham, Argala Stotram, Kilaka Stotram (all three open in the library as "Devi Mahatmyam: Kavacham", "Argala Stotram", "Kilaka Stotram"), the Ratri Suktam of the Rigveda ("Devi Mahatmyam: Ratri Suktam"), the Devi Atharvashirsha, then the navarna vidhi (viniyoga, nyasa, dhyana of the nine-syllable mantra and its japa), and then the thirteen chapters. The nine-syllable mantra is the heart of the rite and is taken from a guru. The Saptashati is also prepared with its own nyasa. Do the sankalpa and the common steps (see "Homa: Common Procedure") first; the Devi puja and the kalasha before them are the usual Devi puja of your tradition; the Devi is invoked on a kalasha and on the fire.',
      noteKn: 'ಸಪ್ತಶತಿಯ ಪಾರಾಯಣಕ್ಕೆ ಹೀಗೆ ಸಿದ್ಧತೆ (ಗೀತಾ ಪ್ರೆಸ್): ದೇವೀ ಕವಚ, ಅರ್ಗಲಾ ಸ್ತೋತ್ರ, ಕೀಲಕ ಸ್ತೋತ್ರ (ಮೂರೂ ಗ್ರಂಥಾಲಯದಲ್ಲಿ “ದೇವೀಮಾಹಾತ್ಮ್ಯ: ಕವಚ”, “ಅರ್ಗಲಾ ಸ್ತೋತ್ರ”, “ಕೀಲಕ ಸ್ತೋತ್ರ” ಎಂದು ತೆರೆಯುತ್ತವೆ), ಋಗ್ವೇದದ ರಾತ್ರಿ ಸೂಕ್ತ (“ದೇವೀಮಾಹಾತ್ಮ್ಯ: ರಾತ್ರಿ ಸೂಕ್ತ”), ದೇವ್ಯಥರ್ವಶೀರ್ಷ, ನಂತರ ನವಾರ್ಣವಿಧಿ (ನವಾಕ್ಷರ ಮಂತ್ರದ ವಿನಿಯೋಗ, ನ್ಯಾಸ, ಧ್ಯಾನ, ಜಪ), ನಂತರ ಹದಿಮೂರು ಅಧ್ಯಾಯಗಳು. ನವಾಕ್ಷರ ಮಂತ್ರವೇ ಕ್ರಿಯೆಯ ಹೃದಯ; ಅದನ್ನು ಗುರುವಿನಿಂದ ಪಡೆಯಬೇಕು. ಸಪ್ತಶತಿಗೆ ತನ್ನದೇ ನ್ಯಾಸವೂ ಇದೆ. ಮೊದಲು ಸಂಕಲ್ಪ ಮತ್ತು ಸಾಮಾನ್ಯ ಹಂತಗಳನ್ನು (“ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ನೋಡಿ) ಮಾಡಿ; ಅವುಗಳ ಮೊದಲಿನ ದೇವೀಪೂಜೆ–ಕಲಶಗಳು ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ಸಾಮಾನ್ಯ ದೇವೀಪೂಜೆ; ದೇವಿಯನ್ನು ಕಲಶದಲ್ಲಿಯೂ ಅಗ್ನಿಯಲ್ಲಿಯೂ ಆವಾಹಿಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'ऐं ह्रीं क्लीं चामुण्डायै विच्चे ॥',
          meaning: {
            en: 'The navarna (nine-syllable) mantra of Chandika: Aim, Hrim, Klim, to Chamunda, vichche. (Taken with its viniyoga and nyasa from a guru.)',
            kn: 'ಚಂಡಿಕೆಯ ನವಾರ್ಣ (ಒಂಬತ್ತು ಅಕ್ಷರ) ಮಂತ್ರ: ಐಂ ಹ್ರೀಂ ಕ್ಲೀಂ ಚಾಮುಂಡಾಯೈ ವಿಚ್ಚೇ. (ವಿನಿಯೋಗ–ನ್ಯಾಸಗಳೊಡನೆ ಗುರುವಿನಿಂದ ಪಡೆಯಬೇಕು.)',
          },
        },
        {
          text: 'ब्रह्मविष्णुरुद्रा ऋषयः, गायत्र्युष्णिगनुष्टुभश्छन्दांसि,\nमहाकालीमहालक्ष्मीमहासरस्वत्यो देवताः, ऐं बीजम्, ह्रीं शक्तिः, क्लीं कीलकम्,\nमहाकालीमहालक्ष्मीमहासरस्वतीप्रीत्यर्थे जपे विनियोगः ॥',
          meaning: {
            en: 'The rishis are Brahma, Vishnu and Rudra; the metres are Gayatri, Ushnih and Anushtubh; the deities are Mahakali, Mahalakshmi and Mahasarasvati; Aim is the seed, Hrim the power, Klim the key; its use is in japa, for the pleasure of Mahakali, Mahalakshmi and Mahasarasvati. (The viniyoga of the navarna mantra, Gita Press.)',
            kn: 'ಋಷಿಗಳು ಬ್ರಹ್ಮ–ವಿಷ್ಣು–ರುದ್ರರು; ಛಂದಸ್ಸುಗಳು ಗಾಯತ್ರೀ, ಉಷ್ಣಿಕ್, ಅನುಷ್ಟುಪ್; ದೇವತೆಗಳು ಮಹಾಕಾಳೀ–ಮಹಾಲಕ್ಷ್ಮೀ–ಮಹಾಸರಸ್ವತೀ; ಐಂ ಬೀಜ, ಹ್ರೀಂ ಶಕ್ತಿ, ಕ್ಲೀಂ ಕೀಲಕ; ಮಹಾಕಾಳೀ–ಮಹಾಲಕ್ಷ್ಮೀ–ಮಹಾಸರಸ್ವತೀ ಪ್ರೀತಿಗಾಗಿ ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ. (ನವಾರ್ಣ ಮಂತ್ರದ ವಿನಿಯೋಗ, ಗೀತಾ ಪ್ರೆಸ್.)',
          },
        },
      ],
    },
    {
      title: 'त्रिचरित्रविनियोगः',
      titleEn: 'The three charitras and their deities',
      note: 'The thirteen chapters form three charitras, each with its rishi, deity and viniyoga, recited (for the homa: for japa and for homa, "havane") with the viniyoga said before each. Prathama charitra (chapter 1, Madhu-Kaitabha): deity Mahakali. Madhyama charitra (chapters 2 to 4, Mahishasura): deity Mahalakshmi. Uttama (uttara) charitra (chapters 5 to 13, Shumbha and Nishumbha, the praise of Narayani, the fruit and the boons): deity Mahasarasvati. The library has each chapter as a separate text ("Devi Mahatmyam: Chapter 1 (Madhu-Kaitabha vadha)" to "Chapter 13") with the same viniyogas.',
      noteKn: 'ಹದಿಮೂರು ಅಧ್ಯಾಯಗಳು ಮೂರು ಚರಿತ್ರಗಳು; ಪ್ರತಿಯೊಂದಕ್ಕೂ ಋಷಿ, ದೇವತೆ, ವಿನಿಯೋಗವಿದೆ; ಪ್ರತಿಯೊಂದರ ಮೊದಲು ವಿನಿಯೋಗ ಹೇಳಿ (ಹೋಮದಲ್ಲಿ “ಹವನೇ”) ಪಠಿಸಿ. ಪ್ರಥಮ ಚರಿತ್ರ (ಅಧ್ಯಾಯ ೧, ಮಧುಕೈಟಭ): ಮಹಾಕಾಳೀ. ಮಧ್ಯಮ ಚರಿತ್ರ (ಅಧ್ಯಾಯ ೨–೪, ಮಹಿಷಾಸುರ): ಮಹಾಲಕ್ಷ್ಮೀ. ಉತ್ತಮ (ಉತ್ತರ) ಚರಿತ್ರ (ಅಧ್ಯಾಯ ೫–೧೩, ಶುಂಭ–ನಿಶುಂಭ, ನಾರಾಯಣೀ ಸ್ತುತಿ, ಫಲಶ್ರುತಿ, ವರದಾನ): ಮಹಾಸರಸ್ವತೀ. ಗ್ರಂಥಾಲಯದಲ್ಲಿ ಪ್ರತಿ ಅಧ್ಯಾಯವೂ (“ದೇವೀಮಾಹಾತ್ಮ್ಯ: ಅಧ್ಯಾಯ ೧ (ಮಧುಕೈಟಭವಧ)” ಯಿಂದ “ಅಧ್ಯಾಯ ೧೩”ರವರೆಗೆ) ಅದೇ ವಿನಿಯೋಗಗಳೊಡನೆ ಪ್ರತ್ಯೇಕ ಪಠ್ಯವಾಗಿದೆ.',
      verses: [
        {
          text: 'ॐ प्रथमचरित्रस्य ब्रह्मा ऋषिः, महाकाली देवता, गायत्री छन्दः,\nनन्दा शक्तिः, रक्तदन्तिका बीजम्, अग्निस्तत्त्वम्, ऋग्वेदः स्वरूपम्,\nश्रीमहाकालीप्रीत्यर्थे प्रथमचरित्रजपे (हवने) विनियोगः ॥',
          meaning: {
            en: 'The first charitra: the rishi is Brahma, the deity Mahakali, the metre Gayatri, the power Nanda, the seed Raktadantika, the element fire, the form the Rigveda; its use is in japa (or homa) of the first charitra, for the pleasure of Sri Mahakali.',
            kn: 'ಪ್ರಥಮ ಚರಿತ್ರ: ಋಷಿ ಬ್ರಹ್ಮ, ದೇವತೆ ಮಹಾಕಾಳೀ, ಛಂದಸ್ಸು ಗಾಯತ್ರೀ, ಶಕ್ತಿ ನಂದಾ, ಬೀಜ ರಕ್ತದಂತಿಕಾ, ತತ್ತ್ವ ಅಗ್ನಿ, ಸ್ವರೂಪ ಋಗ್ವೇದ; ಶ್ರೀಮಹಾಕಾಳೀ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಥಮ ಚರಿತ್ರದ ಜಪ (ಅಥವಾ ಹೋಮ)ದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ मध्यमचरित्रस्य विष्णुर्ऋषिः, महालक्ष्मीर्देवता, उष्णिक् छन्दः,\nशाकम्भरी शक्तिः, दुर्गा बीजम्, वायुस्तत्त्वम्, यजुर्वेदः स्वरूपम्,\nश्रीमहालक्ष्मीप्रीत्यर्थं मध्यमचरित्रजपे (हवने) विनियोगः ॥',
          meaning: {
            en: 'The middle charitra: the rishi is Vishnu, the deity Mahalakshmi, the metre Ushnih, the power Shakambhari, the seed Durga, the element air, the form the Yajurveda; its use is in japa (or homa) of the middle charitra, for the pleasure of Sri Mahalakshmi.',
            kn: 'ಮಧ್ಯಮ ಚರಿತ್ರ: ಋಷಿ ವಿಷ್ಣು, ದೇವತೆ ಮಹಾಲಕ್ಷ್ಮೀ, ಛಂದಸ್ಸು ಉಷ್ಣಿಕ್, ಶಕ್ತಿ ಶಾಕಂಭರೀ, ಬೀಜ ದುರ್ಗಾ, ತತ್ತ್ವ ವಾಯು, ಸ್ವರೂಪ ಯಜುರ್ವೇದ; ಶ್ರೀಮಹಾಲಕ್ಷ್ಮೀ ಪ್ರೀತಿಗಾಗಿ ಮಧ್ಯಮ ಚರಿತ್ರದ ಜಪ (ಅಥವಾ ಹೋಮ)ದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
        {
          text: 'ॐ उत्तरचरित्रस्य रुद्र ऋषिः, महासरस्वती देवता, अनुष्टुप् छन्दः,\nभीमा शक्तिः, भ्रामरी बीजम्, सूर्यस्तत्त्वम्, सामवेदः स्वरूपम्,\nमहासरस्वतीप्रीत्यर्थे उत्तरचरित्रजपे (हवने) विनियोगः ॥',
          meaning: {
            en: 'The last charitra: the rishi is Rudra, the deity Mahasarasvati, the metre Anushtubh, the power Bhima, the seed Bhramari, the element the sun, the form the Samaveda; its use is in japa (or homa) of the last charitra, for the pleasure of Mahasarasvati.',
            kn: 'ಉತ್ತರ ಚರಿತ್ರ: ಋಷಿ ರುದ್ರ, ದೇವತೆ ಮಹಾಸರಸ್ವತೀ, ಛಂದಸ್ಸು ಅನುಷ್ಟುಪ್, ಶಕ್ತಿ ಭೀಮಾ, ಬೀಜ ಭ್ರಾಮರೀ, ತತ್ತ್ವ ಸೂರ್ಯ, ಸ್ವರೂಪ ಸಾಮವೇದ; ಮಹಾಸರಸ್ವತೀ ಪ್ರೀತಿಗಾಗಿ ಉತ್ತರ ಚರಿತ್ರದ ಜಪ (ಅಥವಾ ಹೋಮ)ದಲ್ಲಿ ವಿನಿಯೋಗ.',
          },
        },
      ],
    },
    {
      title: 'सप्तशतीहोमक्रमः',
      titleEn: 'How the 700 verses are offered',
      note: 'The Vaikritika Rahasya gives the old rule: offer, with each verse (shloka) of the Saptashati, payasa mixed with sesame and ghee; or offer a good havis with the mantras of the stotras that occur in the Saptashati (the praises of Brahma, of the gods and of Narayani, the Shakrastuti and the Devistuti); then worship the Devi again with her names. In practice the recitation goes chapter by chapter by several priests together and the offerings are made as your purohita directs (with each verse, or at the end of each chapter, or with the stotra verses of the Saptashati); the Tamil manual assigns a separate fruit or material to each of the thirteen chapters, laid out on a cloth before the chapter is begun (the list could not be read in the scan). One Chandi has 700 mantras. How many times the navarna mantra is offered, and where, differs between manuals; ask your purohita.',
      noteKn: 'ವೈಕೃತಿಕ ರಹಸ್ಯವು ಹಳೆಯ ನಿಯಮವನ್ನು ಹೇಳುತ್ತದೆ: ಸಪ್ತಶತಿಯ ಪ್ರತಿ ಶ್ಲೋಕದೊಡನೆ ಎಳ್ಳು–ತುಪ್ಪ ಸೇರಿಸಿದ ಪಾಯಸವನ್ನು ಹೋಮಿಸಿ; ಅಥವಾ ಸಪ್ತಶತಿಯಲ್ಲಿ ಬರುವ ಸ್ತೋತ್ರಗಳ ಮಂತ್ರಗಳಿಂದ (ಬ್ರಹ್ಮ, ದೇವತೆಗಳು, ನಾರಾಯಣೀ ಸ್ತುತಿಗಳು — ಶಕ್ರಾದಿ ಸ್ತುತಿ, ದೇವೀ ಸ್ತುತಿ) ಚಂಡಿಕೆಗೆ ಶುಭ ಹವಿಸ್ಸನ್ನು ಹೋಮಿಸಿ; ನಂತರ ಅವಳ ನಾಮಗಳಿಂದ ಮತ್ತೆ ಪೂಜಿಸಿ. ಪ್ರಾಯೋಗಿಕವಾಗಿ ಹಲವು ಪುರೋಹಿತರು ಒಟ್ಟಾಗಿ ಅಧ್ಯಾಯ ಅಧ್ಯಾಯವಾಗಿ ಪಠಿಸುತ್ತಾರೆ; ಆಹುತಿಗಳನ್ನು ಪುರೋಹಿತರ ಸೂಚನೆಯಂತೆ (ಪ್ರತಿ ಶ್ಲೋಕದೊಡನೆ, ಅಥವಾ ಪ್ರತಿ ಅಧ್ಯಾಯದ ಕೊನೆಯಲ್ಲಿ, ಅಥವಾ ಸಪ್ತಶತಿಯ ಸ್ತೋತ್ರ ಮಂತ್ರಗಳೊಡನೆ) ನೀಡುತ್ತಾರೆ; ತಮಿಳು ಗ್ರಂಥವು ಹದಿಮೂರು ಅಧ್ಯಾಯಗಳಿಗೆ ಪ್ರತ್ಯೇಕ ಫಲ–ದ್ರವ್ಯಗಳನ್ನು ನಿಯೋಜಿಸುತ್ತದೆ, ಅಧ್ಯಾಯ ಆರಂಭಿಸುವ ಮೊದಲು ಬಟ್ಟೆಯ ಮೇಲೆ ಇಡುತ್ತಾರೆ (ಆ ಪಟ್ಟಿ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಓದಲಾಗಲಿಲ್ಲ). ಒಂದು ಚಂಡಿಗೆ ೭೦೦ ಮಂತ್ರಗಳು. ನವಾರ್ಣ ಮಂತ್ರವನ್ನು ಎಷ್ಟು ಬಾರಿ, ಎಲ್ಲಿ ಹೋಮಿಸುವುದು ಎಂಬುದು ಗ್ರಂಥದಿಂದ ಗ್ರಂಥಕ್ಕೆ ಭಿನ್ನ; ಪುರೋಹಿತರನ್ನು ಕೇಳಿ.',
      verses: [
        {
          text: 'प्रतिश्लोकं च जुहुयात्पायसं तिलसर्पिषा ।\nजुहुयात्स्तोत्रमन्त्रैर्वा चण्डिकायै शुभं हविः ।\nभूयो नामपदैर्देवीं पूजयेत्सुसमाहितः ॥',
          meaning: {
            en: 'With each verse offer payasa with sesame and ghee; or offer an auspicious havis to Chandika with the mantras of the stotras; and then, steadily, worship the Devi again with the words of her names. (Vaikritika Rahasya 35)',
            kn: 'ಪ್ರತಿ ಶ್ಲೋಕಕ್ಕೂ ಎಳ್ಳು–ತುಪ್ಪ ಸಹಿತ ಪಾಯಸವನ್ನು ಹೋಮಿಸಬೇಕು; ಅಥವಾ ಸ್ತೋತ್ರ ಮಂತ್ರಗಳಿಂದ ಚಂಡಿಕೆಗೆ ಶುಭ ಹವಿಸ್ಸನ್ನು ಹೋಮಿಸಬೇಕು; ನಂತರ ಏಕಾಗ್ರ ಚಿತ್ತನಾಗಿ ಅವಳ ನಾಮಪದಗಳಿಂದ ಮತ್ತೆ ದೇವಿಯನ್ನು ಪೂಜಿಸಬೇಕು. (ವೈಕೃತಿಕ ರಹಸ್ಯ ೩೫)',
          },
        },
      ],
    },
    {
      title: 'बलिदानम्',
      titleEn: 'Balidana',
      note: 'The Devi Mahatmyam names bali among the offerings (12.10-11). The Vaikritika Rahasya says that the worship with blood-smeared bali, meat and wine is not for brahmins ("this worship with bali and meat is not for brahmins; for them worship with meat and liquor is nowhere taught"), and gives the rest of the worship: arghya and ornaments, scent, flowers, akshata, incense, lamps and naivedya of many foods, betel with camphor, and homage to the demon-buffalo on the left and the lion on the right. In households that offer no animal, the bali is symbolic: families commonly offer a pumpkin or ash-gourd, a lemon or cooked rice with kumkuma and turmeric, cut or broken at the end with the Devi’s name, after the purnahuti; this is a custom of family and region, which this guide cannot confirm from its sources; follow your family and guru. The bali is offered on the north side or outside the house, with water and a lamp, and the water poured out.',
      noteKn: 'ದೇವೀಮಾಹಾತ್ಮ್ಯವು ಬಲಿಯನ್ನು ಅರ್ಪಣೆಗಳಲ್ಲಿ ಹೇಳುತ್ತದೆ (೧೨.೧೦–೧೧). ವೈಕೃತಿಕ ರಹಸ್ಯವು ರಕ್ತ–ಮಾಂಸ–ಮದ್ಯಗಳಿಂದ ಮಾಡುವ ಬಲಿಪೂಜೆ ಬ್ರಾಹ್ಮಣರಿಗಲ್ಲವೆಂದು (“ಈ ಬಲಿಮಾಂಸಾದಿ ಪೂಜೆ ವಿಪ್ರರಿಗೆ ವರ್ಜ್ಯ”) ಹೇಳಿ ಉಳಿದ ಪೂಜೆಯನ್ನು ಕೊಡುತ್ತದೆ: ಅರ್ಘ್ಯ, ಅಲಂಕಾರ, ಗಂಧ, ಹೂವು, ಅಕ್ಷತೆ, ಧೂಪ, ದೀಪ, ಅನೇಕ ಭಕ್ಷ್ಯಗಳ ನೈವೇದ್ಯ, ಕರ್ಪೂರಸಹಿತ ತಾಂಬೂಲ, ಎಡಭಾಗದಲ್ಲಿ ಮಹಿಷಾಸುರನಿಗೂ ಬಲಭಾಗದಲ್ಲಿ ಸಿಂಹಕ್ಕೂ ನಮನ. ಪ್ರಾಣಿಬಲಿ ಇಲ್ಲದ ಮನೆತನಗಳಲ್ಲಿ ಬಲಿ ಸಾಂಕೇತಿಕ: ಕುಂಬಳಕಾಯಿ ಅಥವಾ ಬೂದುಗುಂಬಳ, ನಿಂಬೆ ಅಥವಾ ಅರಿಶಿನ–ಕುಂಕುಮದ ಅನ್ನವನ್ನು ಪೂರ್ಣಾಹುತಿಯ ನಂತರ ದೇವಿಯ ನಾಮದೊಡನೆ ಒಡೆದು ಅರ್ಪಿಸುತ್ತಾರೆ; ಇದು ಮನೆತನ–ಪ್ರದೇಶದ ಪದ್ಧತಿ; ಇದನ್ನು ಈ ಮಾರ್ಗದರ್ಶಿಯ ಆಧಾರಗಳಿಂದ ದೃಢಪಡಿಸಲಾಗದು; ನಿಮ್ಮ ಮನೆತನ–ಗುರುವನ್ನು ಅನುಸರಿಸಿ. ಬಲಿಯನ್ನು ಮನೆಯ ಹೊರಗೆ ಅಥವಾ ಉತ್ತರ ಭಾಗದಲ್ಲಿ ನೀರು–ದೀಪದೊಡನೆ ಅರ್ಪಿಸಿ ನೀರು ಬಿಡಿ.',
      verses: [
        {
          text: 'अर्घ्यादिभिरलङ्कारैर्गन्धपुष्पैस्तथाक्षतैः ।\nधूपैर्दीपैश्च नैवेद्यैर्नानाभक्ष्यसमन्वितैः ॥',
          meaning: {
            en: 'With arghya and the like, with ornaments, scents, flowers and akshata, with incense, lamps and offerings of food together with many kinds of eatables. (Vaikritika Rahasya, on the Devi puja.)',
            kn: 'ಅರ್ಘ್ಯಾದಿಗಳಿಂದ, ಅಲಂಕಾರಗಳಿಂದ, ಗಂಧ–ಪುಷ್ಪ–ಅಕ್ಷತೆಗಳಿಂದ, ಧೂಪ–ದೀಪಗಳಿಂದ, ಅನೇಕ ಭಕ್ಷ್ಯಗಳ ನೈವೇದ್ಯಗಳಿಂದ (ದೇವಿಯನ್ನು ಪೂಜಿಸಬೇಕು). (ವೈಕೃತಿಕ ರಹಸ್ಯ, ದೇವೀಪೂಜೆ.)',
          },
        },
      ],
    },
    {
      title: 'पूर्णाहुतिः क्षमापनं च',
      titleEn: 'Purnahuti and kshamapana',
      note: 'When the thirteen chapters and the offerings are complete, do the svishtakrit, prayaschitta, purnahuti (as in the Common Procedure, with a fruit or coconut), the vasordhara and the rest. Recite the Devi Suktam of the library ("Devi Mahatmyam: Devi Suktam") after the thirteenth chapter, and end with the Devyaparadha-kshamapana ("Devi Mahatmyam: Devyaparadha-kshamapana Stotram") begging pardon for any lapse. After the purnahuti circumambulate the fire and the Devi and bow. Give dakshina to the priests and feed brahmins.',
      noteKn: 'ಹದಿಮೂರು ಅಧ್ಯಾಯ ಮತ್ತು ಆಹುತಿಗಳು ಮುಗಿದ ಮೇಲೆ ಸ್ವಿಷ್ಟಕೃತ್, ಪ್ರಾಯಶ್ಚಿತ್ತ, ಪೂರ್ಣಾಹುತಿ (ಸಾಮಾನ್ಯ ವಿಧಿಯಂತೆ, ಫಲ ಅಥವಾ ತೆಂಗಿನಕಾಯಿಯೊಡನೆ), ವಸೋರ್ಧಾರಾ ಇತ್ಯಾದಿಗಳನ್ನು ಮಾಡಿ. ಹದಿಮೂರನೆಯ ಅಧ್ಯಾಯದ ನಂತರ ಗ್ರಂಥಾಲಯದ ದೇವೀ ಸೂಕ್ತವನ್ನು (“ದೇವೀಮಾಹಾತ್ಮ್ಯ: ದೇವೀ ಸೂಕ್ತ”) ಪಠಿಸಿ, ಲೋಪಗಳಿಗೆ ಕ್ಷಮೆ ಬೇಡುವ ದೇವ್ಯಪರಾಧಕ್ಷಮಾಪನ ಸ್ತೋತ್ರದಿಂದ (“ದೇವೀಮಾಹಾತ್ಮ್ಯ: ದೇವ್ಯಪರಾಧಕ್ಷಮಾಪನ ಸ್ತೋತ್ರ”) ಮುಗಿಸಿ. ಪೂರ್ಣಾಹುತಿಯ ನಂತರ ಅಗ್ನಿ–ದೇವಿಗೆ ಪ್ರದಕ್ಷಿಣೆ, ನಮಸ್ಕಾರ. ಪುರೋಹಿತರಿಗೆ ದಕ್ಷಿಣೆ, ಬ್ರಾಹ್ಮಣರಿಗೆ ಭೋಜನ.',
      verses: [
        {
          text: 'प्रदक्षिणानमस्कारान्कृत्वा मूर्ध्नि कृताञ्जलिः ।\nक्षमापयेज्जगद्धात्रीं मुहुर्मुहुरतन्द्रितः ॥',
          meaning: {
            en: 'Having circumambulated and bowed, with joined hands raised to the head, one should without tiring beg pardon again and again of the Mother of the world. (Vaikritika Rahasya)',
            kn: 'ಪ್ರದಕ್ಷಿಣೆ–ನಮಸ್ಕಾರಗಳನ್ನು ಮಾಡಿ, ತಲೆಯ ಮೇಲೆ ಕೈಜೋಡಿಸಿ, ಆಲಸ್ಯವಿಲ್ಲದೆ ಜಗನ್ಮಾತೆಯಲ್ಲಿ ಮತ್ತೆ ಮತ್ತೆ ಕ್ಷಮೆ ಬೇಡಬೇಕು. (ವೈಕೃತಿಕ ರಹಸ್ಯ)',
          },
        },
      ],
    },
  ],
};
