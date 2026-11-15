/** Ready-made sets of texts for an occasion or a day, opened in order. */
export interface Collection {
  id: string;
  /** Devanagari title (shown in the reader's script). */
  title: string;
  titleEn: string;
  /** One line on when it is read. */
  when: string;
  /** Text ids in reading order. Series ids (e.g. bhagavad-gita-01) open that part. */
  items: string[];
}

export const COLLECTIONS: Collection[] = [
  {
    id: 'ekadashi',
    title: 'एकादशी पारायणम्',
    titleEn: 'Ekadashi parayana',
    when: 'On Ekadashi: the thousand names, the hundred and eight names and Madhva’s Dvadasha Stotra.',
    items: ['vishnu-sahasranama', 'vishnu-ashtottara-shatanamavali', 'dvadasha-stotra-01', 'achyutashtakam', 'krishna-ashtottara-shatanama'],
  },
  {
    id: 'madhva-daily',
    title: 'माध्व नित्यपारायणम्',
    titleEn: 'Madhva daily recitation',
    when: 'A common daily set in Madhva homes.',
    items: ['vayu-stuti', 'dvadasha-stotra-01', 'raghavendra-stotram', 'vishnu-sahasranama', 'lakshmi-shobhane'],
  },
  {
    id: 'morning',
    title: 'प्रातःस्मरणम्',
    titleEn: 'Morning prayers',
    when: 'On waking and before the day’s work.',
    items: ['daily-shlokas', 'gayatri-mantra', 'venkatesha-suprabhatam', 'aditya-hridayam'],
  },
  {
    id: 'navaratri',
    title: 'नवरात्रिपारायणम्',
    titleEn: 'Navaratri parayana',
    when: 'Devi Mahatmyam across the nine nights, with its limbs before and after.',
    items: [
      'devi-mahatmyam-kavacham', 'devi-mahatmyam-argala', 'devi-mahatmyam-kilakam', 'devi-mahatmyam-ratri-suktam',
      'devi-mahatmyam-01', 'devi-mahatmyam-02', 'devi-mahatmyam-03', 'devi-mahatmyam-04', 'devi-mahatmyam-05',
      'devi-mahatmyam-06', 'devi-mahatmyam-07', 'devi-mahatmyam-08', 'devi-mahatmyam-09', 'devi-mahatmyam-10',
      'devi-mahatmyam-11', 'devi-mahatmyam-12', 'devi-mahatmyam-13', 'devi-mahatmyam-devi-suktam',
      'devi-mahatmyam-aparadha-kshamapana', 'lalitha-sahasranama',
    ],
  },
  {
    id: 'shravana-saturday',
    title: 'श्रावणशनिवारः',
    titleEn: 'Shravana Saturday',
    when: 'For Lord Venkatesha on the Saturdays of Shravana.',
    items: ['venkatesha-suprabhatam', 'venkatesha-stotram', 'venkatesha-prapatti', 'venkatesha-mangalashasanam', 'vishnu-sahasranama'],
  },
  {
    id: 'friday-lakshmi',
    title: 'शुक्रवारः · लक्ष्मीपूजा',
    titleEn: 'Friday · Lakshmi',
    when: 'Fridays and Varamahalakshmi.',
    items: ['sri-sukta', 'mahalakshmi-ashtakam', 'kanakadhara-stotram', 'lakshmi-shobhane', 'dasara-pada-bhagyada-lakshmi-baramma'],
  },
  {
    id: 'monday-shiva',
    title: 'सोमवारः · शिवः',
    titleEn: 'Monday · Shiva',
    when: 'Mondays, Pradosha and Shivaratri.',
    items: ['sri-rudram-namakam', 'sri-rudram-chamakam', 'shiva-panchakshara', 'lingashtakam', 'mahamrityunjaya-mantra'],
  },
  {
    id: 'thursday-guru',
    title: 'गुरुवारः · गुरुस्मरणम्',
    titleEn: 'Thursday · Guru',
    when: 'Thursdays and aradhana days.',
    items: ['raghavendra-stotram', 'raghavendra-kavacha', 'vayu-stuti', 'dasara-pada-guruvina-gulama'],
  },
  {
    id: 'hanuman',
    title: 'हनुमत्स्मरणम्',
    titleEn: 'Hanuman',
    when: 'Saturdays, Hanuman Jayanti, and before travel or difficulty.',
    items: ['hanuman-chalisa', 'vayu-stuti', 'manyu-sukta', 'sundarakanda-01'],
  },
  {
    id: 'sunday-surya',
    title: 'रविवारः · सूर्यः',
    titleEn: 'Sunday · Surya',
    when: 'Sundays and Ratha Saptami.',
    items: ['aditya-hridayam', 'gayatri-mantra'],
  },
];

export const collectionById = (id: string) => COLLECTIONS.find((c) => c.id === id);
