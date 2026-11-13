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
    description: 'Vālmīki Rāmāyaṇa, Sundarakāṇḍa, sarga by sarga for pārāyaṇa.',
  },
  {
    id: 'devimahatmya',
    title: 'देवीमाहात्म्यम्',
    titleEn: 'Devi Mahatmyam',
    description: 'Durgā Saptaśatī: 13 chapters with Kavaca, Argalā and Kīlaka.',
  },
  {
    id: 'harikathamrutasara',
    title: 'हरिकथामृतसार',
    titleEn: 'Harikathamrutasara',
    description: 'Jagannātha Dāsa’s Kannada classic, sandhi by sandhi.',
  },
  {
    id: 'sumadhvavijaya',
    title: 'सुमध्वविजयः',
    titleEn: 'Sumadhva Vijaya',
    description: 'Nārāyaṇa Paṇḍitācārya’s life of Śrī Madhvācārya, sarga by sarga.',
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
];

export const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  Category['id'],
  Category
>;
