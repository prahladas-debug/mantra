/**
 * Śrī Kṛṣṇa Govinda Hare Murāri, the Kṛṣṇa dhun "हे नाथ नारायण वासुदेवा", in Devanagari. Folk bhajan in Hindi; no author is
 * named in the copies. The refrain is a string of the names of Kṛṣṇa; the three stanzas are modern Hindi lines sung with
 * it, and the opening Sanskrit verse and "त्वमेव माता च पिता त्वमेव" are sung with it in the copies given.
 *
 * Obvious misspellings shared by the copies are corrected in the text: कहीं, अद्भुत, हृदय, बँट, वहीं
 * (the copies print कही, अद्भुद, ह्रदय, बट, वही).
 * Collated Nov 2026. Two typed Devanagari copies with the full text, bhaktibharat.com "Shri Krishna Govind Hare Murari" (B,
 * base) and ilovebhajan.com "Shri Krishna Govind Hare Murari Lyrics" (I), agree line by line (I may well derive from B, so
 * they are not independent). Two more copies only give the refrain, in Roman letters: hindu-cosmos.com "Bhajans" and
 * sairhythms.sathyasai.org "Sri Krishna Govinda Harey Murare"; they agree with B and I in "Sri Krishna Govind Hare Murari, He
 * Nath Narayan Vasudeva". I did not find a third independent copy of the stanzas, so those rest on B and I, and the
 * refrain on four. Differences: B writes "श्री कृष्णा गोविन्द" after the first stanza, I "श्री कृष्ण गोविन्द" throughout; the
 * form "श्री कृष्ण गोविन्द" (B, first lines; I) is written. The singer's repeated lines are written once ("हे नाथ नारायण...",
 * "है अद्भुद, हर बात तिहारी", "सदैव भक्तों के, काम साधे"). The spellings of the copies ("कही", "अद्भुद", "तिहारी", "बट गए", "ह्रदय",
 * "बंधू") are kept as printed. The refrain is sung after each stanza and is written once, with the opening. Nukta
 * letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanShriKrishnaGovind: Mantra = {
  id: 'bhajan-shri-krishna-govind',
  title: 'श्री कृष्ण गोविन्द हरे मुरारी',
  titleEn: 'Shri Krishna Govind Hare Murari',
  category: 'aarti',
  order: 47,
  deity: 'Śrī Kṛṣṇa',
  source: 'Traditional Krishna dhun (Hindi)',
  summary: 'A short, widely sung Krishna bhajan, a chain of his names: Krishna, Govinda, Hari, Murari, Natha, Narayana, Vasudeva. Verses recall his birth in prison, his flute and Radha, the Gita\'s call to act without craving the fruit, and the Sanskrit verse that calls him mother, father, friend, knowledge and wealth.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'आरम्भ',
      titleEn: 'Opening verse',
      verses: [
        {
          text: 'सच्चिदानंद रूपाय विश्वोत्पत्यादिहेतवे ।\nतापत्रय विनाशाय श्री कृष्णाय वयं नमः ॥',
          meaning: { en: 'We bow to Shri Krishna, who is being, knowledge and bliss, the cause of the creation, sustenance and dissolution of the world, and the destroyer of the three kinds of suffering.' },
        },
      ],
    },
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain, sung after each verse.',
      verses: [
        {
          text: 'श्री कृष्ण गोविन्द हरे मुरारी ।\nहे नाथ नारायण वासुदेवा ॥\nपितु मात स्वामी सखा हमारे ।\nहे नाथ नारायण वासुदेवा ॥',
          meaning: { en: 'Shri Krishna, Govinda, Hari, Murari; O Lord, Narayana, Vasudeva! You are our father, mother, master and friend; O Lord, Narayana, Vasudeva!' },
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
          text: 'बंदी गृह के, तुम अवतारी\nकहीं जन्मे, कहीं पले मुरारी\nकिसी के जाये, किसी के कहाये\nहै अद्भुत, हर बात तिहारी\nगोकुल में चमके, मथुरा के तारे\nहे नाथ नारायण वासुदेवा ॥',
          meaning: { en: 'You came as an incarnation in a prison; you were born in one place and raised in another, Murari. Born to one, called the son of another, every thing about you is wonderful. You shine in Gokul, you are the star of Mathura. O Lord, Narayana, Vasudeva!' },
        },
        {
          n: 2,
          text: 'अधर पे बंशी, हृदय में राधे\nबँट गए दोनों में, आधे आधे\nहे राधा नागर, हे भक्त वत्सल\nसदैव भक्तों के, काम साधे\nवहीं गए वहीं, गए वहीं गए\nजहाँ गए पुकारे\nहे नाथ नारायण वासुदेवा ॥',
          meaning: { en: 'The flute is on your lips and Radha in your heart; you are divided between the two, half and half. O lover of Radha, O fond of your devotees, you always accomplish the work of your devotees. You went there, there, to the very place where they called you. O Lord, Narayana, Vasudeva!' },
        },
        {
          n: 3,
          text: 'गीता में उपदेश सुनाया\nधर्म युद्ध को धर्म बताया\nकर्म तू कर मत रख फल की इच्छा\nयह सन्देश तुम्ही से पाया\nअमर है गीता के बोल सारे\nहे नाथ नारायण वासुदेवा ॥',
          meaning: { en: 'In the Gita you gave your teaching and called the war for righteousness a duty. Do the work, but do not hold on to desire for its fruit: this message we received from you. Immortal are all the words of the Gita. O Lord, Narayana, Vasudeva!' },
        },
      ],
    },
    {
      title: 'अन्त',
      titleEn: 'Closing',
      verses: [
        {
          text: 'त्वमेव माता च पिता त्वमेव\nत्वमेव बंधू सखा त्वमेव\nत्वमेव विद्या द्रविणं त्वमेव\nत्वमेव सर्वं मम देव देवा ॥',
          meaning: { en: 'You alone are my mother and my father, you alone are my kinsman and friend, you alone are my knowledge and my wealth; you are all to me, O God of gods.' },
        },
        {
          text: 'राधे कृष्णा राधे कृष्णा\nराधे राधे कृष्णा कृष्णा ॥\nहरी बोल, हरी बोल ॥',
          meaning: { en: 'Radhe Krishna, Radhe Krishna, Radhe Radhe, Krishna Krishna. Say Hari, say Hari.' },
        },
      ],
    },
  ],
};
