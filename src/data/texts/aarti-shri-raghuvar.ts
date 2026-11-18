/**
 * Āratī Kījai Śrī Raghuvara Jī Kī, the Hindi aarti to Śrī Rāma (Raghuvara), sung at Rāma Navamī and at the close of Rāma worship and Rāmāyaṇa recitation, in Devanagari. Author not named in the copies.
 *
 * Collated Nov 2026 against six typed copies: bhaktibharat.com "Raghuvar Shri Ramchandra Ji" (B, base), shubhpanchang.com
 * "Aarti Kije Shri Raghuvar Ji Ki" (S), vedadhara.com (V), bhagwatgeeta.co.in (G, with a Roman copy), bhajanlyrics.in (L) and
 * bhajandiary.com (D). Four short stanzas after the opening couplet, in the same order in all six. dharmsaar.com and
 * shrihanumanchalisa.in repeat B word for word and are not counted. Readings against the base: "तनय" (B, S, V, G, D) against L
 * "तनया"; "सत चित" (B, G, D, L) against "सत् चित्" (S, V); "अवन्ह" (B, V, L, D) against S "अवन" and G "अवंनह", kept as in B (the
 * word is unclear and the sense "protector" is taken from अवन); "विश्व वन्द्य" (B, S, V, L, D) against G "विश्व बंध"; "शरणागत"
 * (B, S, V, L, D) against G "शरणागति"; "कल्पतरुवर" written as two words in B, S, L. S, G, L and D write the refrain "आरती कीजै श्री
 * रघुवर जी की" after each stanza; B does not, but it is sung, and it is written once here with the opening. A different aarti
 * with the first words "आरती कीजे श्रीरामलला की" (aajtak.in) is not the text given here. Nukta letters are written without the dot.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiShriRaghuvar: Mantra = {
  id: 'aarti-shri-raghuvar',
  title: 'आरती कीजै श्री रघुबर जी की',
  titleEn: 'Aarti Kije Shri Raghuvar Ji Ki',
  category: 'aarti',
  order: 50,
  deity: 'Śrī Rāma',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Shri Raghuvar, Lord Rama, sung at Rama Navami and after Ramayana recitation. It praises him as truth, awareness and bliss, the son of Dasharatha, ideal of right conduct, refuge of all that lives, and friend of the monkeys, and says that taking his name purifies the world.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Aarti kijai Shri Raghuvar ji ki" is sung after each stanza.',
      verses: [
        {
          text: 'आरती कीजै श्री रघुवर जी की ।\nसत चित आनन्द शिव सुन्दर की ॥',
          meaning: { en: 'Sing the aarti of Shri Raghuvar, Lord of the Raghu line, who is truth, awareness and bliss, auspicious and beautiful.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the first line, "Aarti kijai Shri Raghuvar ji ki", is sung again.',
      verses: [
        {
          n: 1,
          text: 'दशरथ तनय कौशल्या नन्दन ।\nसुर मुनि रक्षक दैत्य निकन्दन ॥\nअनुगत भक्त भक्त उर चन्दन ।\nमर्यादा पुरुषोत्तम वर की ॥',
          meaning: { en: 'He is the son of Dasharatha and the joy of Kaushalya, the protector of gods and sages and the destroyer of demons. He is sandalwood to the hearts of his devoted followers, the best of men and the ideal of right conduct.' },
        },
        {
          n: 2,
          text: 'निर्गुण सगुण अनूप रूप निधि ।\nसकल लोक वन्दित विभिन्न विधि ॥\nहरण शोक-भय दायक नव निधि ।\nमाया रहित दिव्य नर वर की ॥',
          meaning: { en: 'Beyond form and with form, he is a treasure of matchless beauty, worshipped by all the worlds in many ways. He takes away sorrow and fear and gives the nine treasures; he is the best of men, divine and free of illusion.' },
        },
        {
          n: 3,
          text: 'जानकी पति सुर अधिपति जगपति ।\nअखिल लोक पालक त्रिलोक गति ॥\nविश्व वन्द्य अवन्ह अमित गति ।\nएक मात्र गति सचराचर की ॥',
          meaning: { en: 'He is the husband of Janaki, lord of the lords of the gods, master of the world, keeper of all the worlds and the refuge of the three worlds. Worshipped by the whole world, a protector of boundless reach, he is the only refuge of everything that moves and stays still.' },
        },
        {
          n: 4,
          text: 'शरणागत वत्सल व्रतधारी ।\nभक्त कल्प तरुवर असुरारी ॥\nनाम लेत जग पावनकारी ।\nवानर सखा दीन दुख हर की ॥',
          meaning: { en: 'He is kind to those who take refuge, firm in his vow, a wish-fulfilling tree for his devotees and the enemy of demons. Saying his name purifies the world; he is the friend of the monkeys and takes away the sorrow of the humble.' },
        },
      ],
    },
  ],
};
