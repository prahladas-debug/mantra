import type { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'nitya',
    title: 'नित्य प्रार्थना',
    titleEn: 'Daily Prayers',
    description: 'Short everyday shlokas: morning, before study, before meals, at night.',
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
