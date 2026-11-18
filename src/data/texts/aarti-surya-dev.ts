/**
 * Oṃ Jaya Sūrya Bhagavān (Sūryadeva kī Āratī), the Hindi aarti to Sūrya, sung on Sundays, at sunrise and at Chhath, in Devanagari. Author not named in the copies.
 *
 * Collated Nov 2026 against four Devanagari copies: bhaktibharat.com "Shri Surya Dev, Om Jai Surya Bhagwan" (B, base),
 * shubhpanchang.com "Om Jai Surya Bhagwan" (S), prabhatkhabar.com "Surya Dev Ki Aarti" (P) and sanatanbliss.com "Om Jai Surya
 * Bhagwan Aarti" (N), and a Roman copy (vividhgyan.com) that agrees with B. All have the opening and the same stanzas in the
 * same order; N leaves out the last stanza ("पूजन करती दिशाएं"). Readings against the base: "ऊँ" (B) against "ॐ" (S, P, N);
 * "जगत् के नेत्रस्वरूपा, तुम हो त्रिगुण स्वरूपा" (B, P, N) against S "नेत्रस्वरूप ... स्वरूप"; "धरत" (B, P, N) against S "धरते";
 * "तुम चार भुजाधारी" (B, P, N) against S "चतुर्भुजधारी"; "ऊषाकाल" (B, P, N) against S "उषाकाल"; "जागता" (B, P, N) against S "जगता";
 * "सबके हो प्राण" (B, S) against P "हों"; "करती दिशाएं" (B) against S "करति" and P "करतीं", kept as in B. Shared slips in B put right:
 * "तुंहारे" for "तुम्हारे", "कोटी" for "कोटि", "गोधुली" for "गोधूलि", "स्त्रोत" for "स्तोत्र", "रचियता" for "रचयिता", "बृद्धि" for
 * "बुद्धि", "रूवरूपा" for "स्वरूपा"; "महिमा तब अपरम्पार" (B, S, P) is "तव" (as N). The opening is sung again at the end in all copies
 * and is written once. A different, shorter aarti with the same first words ("भास्कर जय सूर्य भगवान", dekhopanchang.com) and
 * "जय कश्यप-नन्दन" are not the text given here. The refrain "ऊँ जय सूर्य भगवान" follows each stanza. Nukta letters are written without
 * the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiSuryaDev: Mantra = {
  id: 'aarti-surya-dev',
  title: 'ऊँ जय सूर्य भगवान आरती',
  titleEn: 'Om Jai Surya Bhagwan Aarti',
  category: 'aarti',
  order: 51,
  deity: 'Śrī Sūryadeva',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Surya, the Sun God, sung on Sundays, at sunrise and at Chhath. It praises him as the eye of the world on a seven-horse chariot driven by Aruna, describes his rising and setting, and calls him the life of all beings, the keeper of the seasons and the quarters.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Om jai Surya Bhagwan" is sung after each stanza.',
      verses: [
        {
          text: 'ऊँ जय सूर्य भगवान, जय हो दिनकर भगवान ।\nजगत् के नेत्रस्वरूपा, तुम हो त्रिगुण स्वरूपा ।\nधरत सब ही तव ध्यान, ऊँ जय सूर्य भगवान ॥',
          meaning: { en: 'Victory to Lord Surya, victory to the maker of the day. You are the eye of the world and have the form of the three gunas; everyone meditates on you.' },
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
          text: 'सारथी अरुण हैं प्रभु तुम, श्वेत कमलधारी ।\nतुम चार भुजाधारी ॥\nअश्व हैं सात तुम्हारे, कोटि किरण पसारे ।\nतुम हो देव महान ॥',
          meaning: { en: 'Aruna is your charioteer, Lord, and you hold a white lotus and have four arms. Seven horses are yours and you spread countless rays; you are a great god.' },
        },
        {
          n: 2,
          text: 'ऊषाकाल में जब तुम, उदयाचल आते ।\nसब तब दर्शन पाते ॥\nफैलाते उजियारा, जागता तब जग सारा ।\nकरे सब तब गुणगान ॥',
          meaning: { en: 'When you come to the eastern mountain at dawn, all can see you. You spread light, the whole world wakes, and everyone sings your praise.' },
        },
        {
          n: 3,
          text: 'संध्या में भुवनेश्वर, अस्ताचल जाते ।\nगोधन तब घर आते ॥\nगोधूलि बेला में, हर घर हर आंगन में ।\nहो तव महिमा गान ॥',
          meaning: { en: 'In the evening, Lord of the worlds, you go to the western mountain and the cows come home. At the hour of cow dust, in every house and every courtyard, your glory is sung.' },
        },
        {
          n: 4,
          text: 'देव दनुज नर नारी, ऋषि मुनिवर भजते ।\nआदित्य हृदय जपते ॥\nस्तोत्र ये मंगलकारी, इसकी है रचना न्यारी ।\nदे नव जीवनदान ॥',
          meaning: { en: 'Gods, demons, men and women, sages and the best of ascetics worship you and recite the Aditya Hridaya. This hymn brings blessing, its composition is wonderful, and it gives new life.' },
        },
        {
          n: 5,
          text: 'तुम हो त्रिकाल रचयिता, तुम जग के आधार ।\nमहिमा तव अपरम्पार ॥\nप्राणों का सिंचन करके, भक्तों को अपने देते ।\nबल बुद्धि और ज्ञान ॥',
          meaning: { en: 'You are the maker of the three times and the support of the world; your glory is beyond measure. Pouring life into your devotees, you give them strength, understanding and knowledge.' },
        },
        {
          n: 6,
          text: 'भूचर जलचर खेचर, सबके हो प्राण तुम्हीं ।\nसब जीवों के प्राण तुम्हीं ॥\nवेद पुराण बखाने, धर्म सभी तुम्हें माने ।\nतुम ही सर्वशक्तिमान ॥',
          meaning: { en: 'Of those that move on land, in water and in the sky, you alone are the life; you are the life of every living being. The Vedas and Puranas tell of you and all faiths honour you; you alone are all-powerful.' },
        },
        {
          n: 7,
          text: 'पूजन करती दिशाएं, पूजे दश दिक्पाल ।\nतुम भुवनों के प्रतिपाल ॥\nऋतुएं तुम्हारी दासी, तुम शाश्वत अविनाशी ।\nशुभकारी अंशुमान ॥',
          meaning: { en: 'The directions worship you and the ten guardians of the quarters worship you; you are the keeper of the worlds. The seasons are your servants; you are eternal and undying, the giver of good, the one with the rays.' },
        },
      ],
    },
  ],
};
