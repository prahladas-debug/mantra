/**
 * Pāyo Jī Maiṁne Rāma Ratana Dhana Pāyo, the pada attributed to Mīrābāī, in Devanagari. Sung in Hindi; the older
 * form is in Rajasthani. Scholars doubt that all pieces sung under her name are hers, and one discussion cited for this
 * text places it in the appendix of a critical edition of the Padavali, so the ascription is the traditional one.
 *
 * Collated Nov 2026 against four typed copies: en.wikipedia.org "Payo Ji Maine Ram Ratan Dhan Payo", Original Hindi lyrics
 * (W, base), kavitakosh.org "पायो जी म्हें तो राम रतन धन पायो / मीराबाई" (K, the Rajasthani form), astrologics.in "Payo Ji Maine
 * Ram Ratan Dhan Payo" (A) and bhaktvatsal.com (V, the sung form with repeats and respelt lines).
 * Six lines agree in all four in order and sense. Readings against the base: "वस्तु अमोलक" (K, A) against W "अमोलिक"
 * (V has "अमोलिक"); "किरपा कर अपनायो" (K, A) against W "किरपा करी अपनायो" (V "कृपा कर"); "जग में सभी खोवायो" (W, K, A) against
 * V "सबी खुमायो"; "खरचै न खूटै" (W, A) against K "खरच न खूटै" (V "खर्च ना खूटे"); "भवसागर तर आयो" (W, K, A) against V "तरवयो";
 * "गिरिधर नागर" (W, K) against A "गिरधर"; "हरख हरख जस गायो" (W, A) against K "जस पायो". The opening "पायो जी मैंने"
 * (W, A, V) is the sung form and is kept; K has the Rajasthani "म्हें तो" and "म्हारे". The first line is sung again
 * after each couplet and is written once. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanPayojiMaine: Mantra = {
  id: 'bhajan-payoji-maine',
  title: 'पायो जी मैंने राम रतन धन पायो',
  titleEn: 'Payo Ji Maine Ram Ratan Dhan Payo (Mirabai)',
  category: 'aarti',
  order: 44,
  deity: 'Śrī Rāma',
  source: 'Attributed to Mīrābāī (Rajasthani, sung in Hindi)',
  summary: 'A joyful bhajan attributed to Mirabai on finding the jewel-wealth of the Name of Rama. The true guru gave it as a priceless gift; it is the capital of many births, never spent, never stolen, and grows each day. The guru\'s boat has carried her across the ocean of worldly life, and she sings the praise of her Lord Giridhara.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The first line is sung again after each couplet.',
      verses: [
        {
          text: 'पायो जी मैंने राम रतन धन पायो ।',
          meaning: { en: 'I have found it, O friend; I have found the jewel-wealth that is the Name of Rama.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      verses: [
        {
          n: 1,
          text: 'वस्तु अमोलक दी मेरे सतगुरु, किरपा कर अपनायो ॥\nजनम जनम की पूँजी पाई, जग में सभी खोवायो ॥',
          meaning: { en: 'My true guru gave me a priceless thing, and in his grace made me his own. I have found the capital of many births, and I have lost everything else in the world.' },
        },
        {
          n: 2,
          text: 'खरचै न खूटै चोर न लूटै, दिन दिन बढत सवायो ॥\nसत की नाव खेवटिया सतगुरु, भवसागर तर आयो ॥',
          meaning: { en: 'Spending does not exhaust it and no thief can rob it; day by day it grows by a quarter more. The boat is truth and the true guru is the boatman; I have crossed the ocean of worldly life.' },
        },
        {
          n: 3,
          text: 'मीरा के प्रभु गिरिधर नागर, हरख हरख जस गायो ॥',
          meaning: { en: 'Mira\'s Lord is Giridhara Nagara, the clever lifter of the mountain; with great delight, she sings his praise.' },
        },
      ],
    },
  ],
};
