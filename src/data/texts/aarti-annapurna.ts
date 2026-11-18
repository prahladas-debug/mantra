/**
 * Bārambāra Praṇāma (Annapūrṇā kī Āratī), the Hindi aarti to Annapūrṇā, sung on Annapūrṇā Jayantī and in daily worship, in Devanagari. Author not named in the copies.
 *
 * Collated Nov 2026 against six copies: bhaktibharat.com "Annapurna Aarti" (B, base), aajtak.in "Annapurna Ji Ki Aarti" (A),
 * divineaarti.com (D), aartichalisa.com (C), thebhajan.com (H) and janbhakti.com (J); srimandir.com (S) has the same text. All have the same
 * five stanzas in the same order and the same refrain "बारम्बार प्रणाम, मैया बारम्बार प्रणाम", sung before the first stanza and after
 * each. Readings against the base: "सुर सुरों की रचना करती" (B, A, H, J, S) against C "सुर असुरों" , kept as in B; "तब नाम ... तब
 * धाम" (B, A, H, J) against D and C "तव"; "तिहारो ... लेत" (B, A, H, J) against D "तिहारे लेते"; "चतुर चतुरानन" (B, A, D, C); "श्रीं,
 * ह्रीं श्रद्धा श्रीं ऐं विद्या, श्रीं क्लीं कमला काम" (D, C for "ऐं") against B "श्री ऐ ... श्री क्लीं", put right as the seed syllables;
 * "कमला" (B, A, C) against D "कमल". The refrain is written once, with the opening.
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiAnnapurna: Mantra = {
  id: 'aarti-annapurna',
  title: 'बारम्बार प्रणाम आरती',
  titleEn: 'Barambar Pranam Aarti (Annapurna)',
  category: 'aarti',
  order: 61,
  deity: 'Śrī Annapūrṇā',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Annapurna, the Mother who gives food, with the refrain "Again and again I bow, Mother". It says there is no rest for those who do not worship her, that Brahma, Vishnu and Shiva bow at her feet, and ends with her seed syllables and a prayer for a boon free of desire.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'This line is the refrain, sung after each stanza.',
      verses: [
        {
          text: 'बारम्बार प्रणाम, मैया बारम्बार प्रणाम ॥',
          meaning: { en: 'Again and again I bow, Mother; again and again I bow.' },
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
          text: 'जो नहीं ध्यावे तुम्हें अम्बिके, कहां उसे विश्राम ।\nअन्नपूर्णा देवी नाम तिहारो, लेत होत सब काम ॥',
          meaning: { en: 'Mother Ambika, where is rest for one who does not meditate on you? Taking your name, Annapurna Devi, all work is accomplished.' },
        },
        {
          n: 2,
          text: 'प्रलय युगान्तर और जन्मान्तर, कालान्तर तक नाम ।\nसुर सुरों की रचना करती, कहां कृष्ण कहां राम ॥',
          meaning: { en: 'Your name lasts through the dissolution, the end of the ages, rebirth after rebirth and across all time. You make the gods; who then are Krishna and Rama (before you)?' },
        },
        {
          n: 3,
          text: 'चूमहि चरण चतुर चतुरानन, चारु चक्रधर श्याम ।\nचन्द्रचूड चन्द्रानन चाकर, शोभा लखहि ललाम ॥',
          meaning: { en: 'Clever four-faced Brahma kisses your feet, and so does handsome Shyam, bearer of the discus. Shiva, with the moon in his hair, and the moon-faced ones serve you and gaze at your lovely beauty.' },
        },
        {
          n: 4,
          text: 'देवि देव! दयनीय दशा में, दया-दया तब नाम ।\nत्राहि-त्राहि शरणागत वत्सल, शरण रूप तब धाम ॥',
          meaning: { en: 'Goddess, God! In a pitiable state we cry "mercy, mercy" in your name. Save us, save us, you who love those who take refuge; your abode is itself the refuge.' },
        },
        {
          n: 5,
          text: 'श्रीं, ह्रीं श्रद्धा श्रीं ऐं विद्या, श्रीं क्लीं कमला काम ।\nकान्ति, भ्रान्तिमयी, कान्ति शान्तिमयी, वर दे तू निष्काम ॥',
          meaning: { en: 'Shrim, hrim, faith, shrim, aim, knowledge, shrim, klim, Kamala, desire: these are your seed syllables and forms. You are radiance, even the confusion of the world, and radiance that brings peace; give us a boon free of desire.' },
        },
      ],
    },
  ],
};
