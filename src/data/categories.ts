import type { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'nitya',
    title: 'नित्य प्रार्थना',
    titleEn: 'Daily Prayers',
    description: 'Short everyday shlokas: morning, before study, before meals, at night.',
  },
  {
    id: 'gita',
    title: 'श्रीमद्भगवद्गीता',
    titleEn: 'Bhagavad Gita',
    description: 'All 18 chapters, 700 verses, with the traditional chapter colophons.',
  },
  {
    id: 'sundarakanda',
    title: 'सुन्दरकाण्डम्',
    titleEn: 'Sundarakanda',
    description: 'Valmiki Ramayana, Sundarakanda, sarga by sarga for parayana.',
  },
  {
    id: 'ramayana',
    title: 'वाल्मीकि रामायणम्',
    titleEn: 'Valmiki Ramayana',
    description: 'The Adi Kavya of Valmiki, kanda by kanda and sarga by sarga, in the Southern recension.',
  },
  {
    id: 'ramcharitmanas',
    title: 'श्रीरामचरितमानस',
    titleEn: 'Ramcharitmanas',
    description: 'Tulsidas’s Awadhi Ramayana, kanda by kanda, in ten-doha sections, with the Gita Press text.',
  },
  {
    id: 'mahabharata',
    title: 'महाभारतम्',
    titleEn: 'Mahabharata',
    description: 'Vyasa’s epic, parva by parva and adhyaya by adhyaya. The Bhagavad Gita and Vishnu Sahasranama open in their own books.',
  },
  {
    id: 'devimahatmya',
    title: 'देवीमाहात्म्यम्',
    titleEn: 'Devi Mahatmyam',
    description: 'Durga Saptashati: 13 chapters with Kavaca, Argala and Kilaka.',
  },
  {
    id: 'harikathamrutasara',
    title: 'हरिकथामृतसार',
    titleEn: 'Harikathamrutasara',
    description: 'Jagannatha Dasa’s Kannada classic, sandhi by sandhi.',
  },
  {
    id: 'sumadhvavijaya',
    title: 'सुमध्वविजयः',
    titleEn: 'Sumadhva Vijaya',
    description: 'Narayana Panditacharya’s life of Shri Madhvacharya, sarga by sarga.',
  },
  {
    id: 'vedic',
    title: 'वैदिक सूक्तानि',
    titleEn: 'Vedic Suktas',
    description: 'Purusha Sukta, Sri Sukta, Narayana Sukta, Shanti mantras and more.',
  },
  {
    id: 'sahasranama',
    title: 'सहस्रनाम',
    titleEn: 'Sahasranama & Namavali',
    description: 'Thousand-name and hundred-and-eight-name hymns.',
  },
  {
    id: 'stotra',
    title: 'स्तोत्राणि',
    titleEn: 'Stotras',
    description: 'Popular hymns to Vishnu, Krishna, Venkatesha, Lakshmi, Shiva and Ganesha.',
  },
  {
    id: 'madhva',
    title: 'माध्व स्तोत्राणि',
    titleEn: 'Madhva Stotras',
    description: 'Vayu Stuti, Raghavendra Stotra and hymns of the Dvaita tradition.',
  },
  {
    id: 'dasara-pada',
    title: 'दासर पदगळु',
    titleEn: 'Dasara Pada',
    description: 'Kannada devotional songs of the Haridasas: Purandara Dasa, Kanaka Dasa, Vijaya Dasa and others.',
  },
  {
    id: 'sandhya',
    title: 'सन्ध्यावन्दनम्',
    titleEn: 'Sandhya Vandane',
    description: 'Daily twilight worship: achamana, marjana, arghya, Gayatri japa, upasthana.',
  },
  {
    id: 'puja',
    title: 'पूजाविधानम्',
    titleEn: 'Puja Mantras',
    description: 'Step-by-step shodashopachara puja with mantras for each offering.',
  },
  {
    id: 'homa',
    title: 'यज्ञाः',
    titleEn: 'Yajnas (Homas)',
    description: 'Yajnas done at home, step by step with every mantra: Ganapati, Navagraha, Mrityunjaya, Sri Sukta, Chandi and more.',
  },
  {
    id: 'samskara',
    title: 'संस्काराः कर्माणि च',
    titleEn: 'Rites and samskaras',
    description: 'Shraddha, upakarma, punyahavachana, griha pravesha and other household rites, step by step.',
  },
  {
    id: 'chalisa',
    title: 'चालीसा एवं पाठ',
    titleEn: 'Chalisa and path',
    description: 'The Hindi chalisas, Bajrang Baan, Hanuman Ashtak and Tulsidas\'s Sundar Kand, read daily and on Tuesdays and Saturdays across North India.',
  },
  {
    id: 'kirtana',
    title: 'कीर्तनानि',
    titleEn: 'Kirtanas and bhajans',
    description: 'Devotional songs in Tamil and Telugu: the Tiruppavai, Annamacharya and Skanda Shashti Kavacham.',
  },
  {
    id: 'aarti',
    title: 'आरती भजनानि च',
    titleEn: 'Aarti and bhajans',
    description: 'Traditional aartis and bhajans sung at the close of puja: Hindi, Marathi and Sanskrit, with meanings.',
  },
];

export const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  Category['id'],
  Category
>;
