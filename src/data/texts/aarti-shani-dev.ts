/**
 * Jaya Jaya Śrī Śanideva (Śanideva kī Āratī), the Hindi aarti to Śani, sung on Saturdays, in Devanagari. Author not named in
 * the copies.
 *
 * Collated Nov 2026 against three typed copies: bhaktibharat.com "Shri Shani Dev Ji, Jai Jai Shri Shani Dev" (B, base),
 * hindutone.com "Shani Chalisa lyrics ... and Shani Dev Aarti" (H) and hindu-blog.com "Shani Aarti in Hindi" (J).
 * B and H have the same five stanzas in the same order; J has four and leaves out the stanza "मोदक मिष्ठान पान".
 * Readings against the base: "क्रीट मुकुट" (B, J) against "किरिट मुकुट" (H); "रजित दिपत है लिलारी" (B, H) against
 * J "राजित", kept as in B and H; "श्याम अंक वक्र दृष्ट" (B, H) against J "अंग", kept as in B and H; "देव दनुज ऋषि मुनि
 * सुमरिन नर नारी" (B, H) against J "सुमिरत"; "ऋषि" (B, J) against H "ऋषी". J's closing line "जय जय श्री शनिदेव भक्तन हितकारी"
 * is only the opening line sung again. A different aarti with the same first line, in five stanzas ending
 * "कहत कवि सुन्दरदास" (dekhopanchang.com), is not the text given here. The refrain "जय जय श्री शनिदेव" is sung after every
 * stanza and is written once, with the opening. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiShaniDev: Mantra = {
  id: 'aarti-shani-dev',
  title: 'जय जय श्री शनिदेव आरती',
  titleEn: 'Jai Jai Shri Shani Dev Aarti',
  category: 'aarti',
  order: 40,
  deity: 'Śrī Śanideva',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Shani Dev, sung at the end of Saturday worship. It praises him as the son of the Sun and Chhaya, dark-bodied, four-armed, riding an elephant and crowned, and lists the offerings he loves: sweets, betel nut, iron, sesame, oil and black gram. It ends with gods, demons, sages and people taking refuge in him.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Jai Jai Shri Shani Dev" is sung after each stanza.',
      verses: [
        {
          text: 'जय जय श्री शनिदेव भक्तन हितकारी ।\nसूरज के पुत्र प्रभु छाया महतारी ॥\nजय जय श्री शनिदेव ॥',
          meaning: { en: 'Victory, victory to Shri Shani Dev, who does good to his devotees. Lord, you are the son of the Sun, and Chhaya is your mother.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain is sung.',
      verses: [
        {
          n: 1,
          text: 'श्याम अंक वक्र दृष्ट चतुर्भुजा धारी ।\nनीलाम्बर धार नाथ गज की असवारी ॥',
          meaning: { en: 'Dark in body, with a crooked glance, you bear four arms. Lord, you wear blue garments and ride an elephant.' },
        },
        {
          n: 2,
          text: 'क्रीट मुकुट शीश रजित दिपत है लिलारी ।\nमुक्तन की माला गले शोभित बलिहारी ॥',
          meaning: { en: 'A crowned diadem adorns your head and your forehead gleams. A garland of pearls shines at your neck; I am devoted to you.' },
        },
        {
          n: 3,
          text: 'मोदक मिष्ठान पान चढत हैं सुपारी ।\nलोहा तिल तेल उडद महिषी अति प्यारी ॥',
          meaning: { en: 'Modak sweets, other sweets, betel leaf and areca nut are offered to you. Iron, sesame, oil, black gram and the buffalo are very dear to you.' },
        },
        {
          n: 4,
          text: 'देव दनुज ऋषि मुनि सुमरिन नर नारी ।\nविश्वनाथ धरत ध्यान शरण हैं तुम्हारी ॥',
          meaning: { en: 'Gods, demons, sages, ascetics, men and women all remember you. Vishvanath meditates on you and takes refuge at your feet.' },
        },
      ],
    },
  ],
};
