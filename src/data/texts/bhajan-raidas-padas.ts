/**
 * Five padas of Sant Raidāsa (Ravidāsa), in Devanagari. Collated Nov 2026.
 *
 * Witnesses: K = kavitakosh.org, the poet's pages; H = hindwi.org. Per pada: 1 अब कैसे छूटै / प्रभु जी तुम चंदन हम पानी K H (the two
 * opening lines "अब कैसे छूटै ..." and "प्रभु जी तुम चंदन ..." are one pada, the refrain "अब कैसे छूटै राम नाम रट लागी" in the Guru Granth Sahib and "प्रभु जी तुम
 * चंदन ..." as its verses; H's form "अब कैसे छुटै राम रट लागी" is written); 2 ऐसी लाल तुझ बिनु कउनु करै K only (this is the Guru Granth
 * Sahib text, in its Gurmukhi spelling transcribed into Devanagari); 3 जो तुम तोरौ रांम K only; 4 माधौ संगति सरनि तुम्हारी K only, with
 * "ओछी/ओछा" for K's "वोंछी/वोछा", a misprint corrected from K's other page of the same pada; 5 आज दिवस लेऊँ बलिहारा H only. Only the
 * first has two copies; the others rest on one, and I did not find a second typed copy. "अब मैं हार्यौ" and "पांडे कैसी पूज" were
 * read and left out. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanRaidasPadas: Mantra = {
  id: 'bhajan-raidas-padas',
  title: 'रैदास के पद',
  titleEn: 'Raidas: Selected Padas',
  category: 'aarti',
  order: 74,
  deity: 'Nirguṇa Rāma',
  source: 'Raidāsa (Ravidāsa), Pada and Śabda (Sadhukkadi Hindi and Gurmukhi)',
  summary: 'Five padas of Sant Raidas: the Lord as sandalwood and the devotee as water, the Lord who raises the low, the vow never to break with Rama, the humble castor-plant gaining fragrance near the Lord, and the welcome of the Lord\'s guest.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'A selection of 5 padas; Raidas\'s pads in the Sant Bani and the Guru Granth Sahib number in the dozens.',
  sections: [
    {
      title: 'अब कैसे छूटै राम रट लागी',
      titleEn: 'Ab kaise chhutai Ram rat lagi',
      note: 'The famous pada in which Raidas compares himself to water, peacock, wick and thread, and the Lord to sandalwood, cloud, flame and pearl.',
      verses: [
        {
          text: 'अब कैसे छुटै राम रट लागी ॥',
          meaning: { en: 'How can I give it up now? The habit of calling on Rama has taken hold of me.' },
        },
        {
          n: 1,
          text: 'प्रभु जी, तुम चंदन हम पानी ।\nजाकी अंग-अंग बास समानी ॥',
          meaning: { en: 'Lord, you are sandalwood and I am water; the water takes the scent into every part of itself.' },
        },
        {
          n: 2,
          text: 'प्रभु जी, तुम घन बन हम मोरा ।\nजैसे चितवत चंद चकोरा ॥',
          meaning: { en: 'Lord, you are the cloud over the forest and I the peacock, as the chakora gazes at the moon.' },
        },
        {
          n: 3,
          text: 'प्रभु जी, तुम दीपक हम बाती ।\nजाकी जोति बरै दिन राती ॥',
          meaning: { en: 'Lord, you are the lamp and I the wick, whose flame burns day and night.' },
        },
        {
          n: 4,
          text: 'प्रभु जी, तुम मोती हम धागा ।\nजैसे सोनहिं मिलत सोहागा ॥',
          meaning: { en: 'Lord, you are the pearl and I the thread, as borax joins with gold.' },
        },
        {
          n: 5,
          text: 'प्रभु जी, तुम स्वामी हम दासा ।\nऐसी भगति करै रैदासा ॥',
          meaning: { en: 'Lord, you are the master and I the servant; this is the kind of devotion Raidas offers.' },
        },
      ],
    },
    {
      title: 'ऐसी लाल तुझ बिनु कउनु करै',
      titleEn: 'Aisi lal tujh binu kaunu karai',
      note: 'Raidas praises the Lord who raises the low, in the language of the Guru Granth Sahib.',
      verses: [
        {
          n: 1,
          text: 'ऐसी लाल तुझ बिनु कउनु करै ।\nगरीब निवाजु गुसाईआ मेरा माथै छत्रु धरै ॥',
          meaning: { en: 'Beloved, who but you would do this? My gracious master, friend of the poor, holds a royal canopy over my head.' },
        },
        {
          n: 2,
          text: 'जाकी छोति जगत कउ लागै ता पर तुहीं ढरै ।\nनीचउ ऊच करै मेरा गोबिंदु काहू ते न डरै ॥',
          meaning: { en: 'The one whose touch the world calls polluting, on him you alone are kind. My Govinda makes the low high and fears no one.' },
        },
        {
          n: 3,
          text: 'नामदेव कबीरू तिलोचनु सधना सैनु तरै ।\nकहि रविदासु सुनहु रे संतहु हरिजीउ ते सभै सरै ॥',
          meaning: { en: 'Namdev, Kabir, Trilochan, Sadhna and Sain were saved. Raidas says: listen, saints, through Hari everything is accomplished.' },
        },
      ],
    },
    {
      title: 'जो तुम तोरौ रांम मैं नहीं तोरौं',
      titleEn: 'Jo tum torau Ram main nahin torau',
      note: 'Raidas vows he will never break from Rama.',
      verses: [
        {
          text: 'जो तुम तोरौ रांम मैं नहीं तोरौं ।\nतुम सौं तोरि कवन सूँ जोरौं ॥',
          meaning: { en: 'Rama, even if you break with me I will not break with you; if I break from you, to whom shall I join?' },
        },
        {
          n: 1,
          text: 'तीरथ ब्रत का न करौं अंदेसा ।\nतुम्हारे चरन कवल का भरोसा ॥',
          meaning: { en: 'I have no worry about pilgrimages and vows; I trust in your lotus feet.' },
        },
        {
          n: 2,
          text: 'जहाँ जहाँ जाऊँ तहाँ तुम्हारी पूजा ।\nतुम्ह सा देव अवर नहीं दूजा ॥',
          meaning: { en: 'Wherever I go, there I worship you; there is no other god like you.' },
        },
        {
          n: 3,
          text: 'मैं हरि प्रीति सबनि सूँ तोरी ।\nसब स्यौं तोरि तुम्हैं स्यूँ जोरी ॥',
          meaning: { en: 'I have broken my attachment with everyone and joined it to you alone.' },
        },
        {
          n: 4,
          text: 'सब परहरि मैं तुम्हारी आसा ।\nमन क्रम बचन कहै रैदासा ॥',
          meaning: { en: 'Giving up everything else, I rest my hope in you; so Raidas says in thought, deed and word.' },
        },
      ],
    },
    {
      title: 'माधौ, संगति सरनि तुम्हारी',
      titleEn: 'Madhau, sangati sarani tumhari',
      note: 'The humble castor-plant gains the fragrance of sandalwood by living near the Lord.',
      verses: [
        {
          text: 'माधौ, संगति सरनि तुम्हारी ।\nजगजीवन कृश्न मुरारी ॥',
          meaning: { en: 'Madhava, I take refuge in your company, Krishna, Murari, life of the world.' },
        },
        {
          n: 1,
          text: 'तुम्ह मखतूल गुलाल चत्रभुज, मैं बपुरौ जस कीरा ।\nपीवत डाल फूल रस अंमृत, सहजि भई मति हीरा ॥',
          meaning: { en: 'You are the red silk and the four-armed one, and I am a poor worm like the silkworm; drinking the nectar of branch and flower, my mind has become a jewel.' },
        },
        {
          n: 2,
          text: 'तुम्ह चंदन मैं अरंड बापुरौ, निकटि तुम्हारी बासा ।\nनीच बिरख थैं ऊँच भये, तेरी बास सुबास निवासा ॥',
          meaning: { en: 'You are sandalwood and I a poor castor-plant living near you; from a low tree I have been raised high, through the sweet scent of your presence.' },
        },
        {
          n: 3,
          text: 'जाति भी ओछी जनम भी ओछा, ओछा करम हमारा ।\nहम सरनागति रांम राइ की, कहै रैदास बिचारा ॥',
          meaning: { en: 'My caste is low, my birth is low and my deeds are low; we have taken refuge in Ram, the king, says poor Raidas.' },
        },
      ],
    },
    {
      title: 'आज दिवस लेऊँ बलिहारा',
      titleEn: 'Aaj divas leun balihara',
      note: 'Raidas welcomes the Lord\'s visit to his house.',
      verses: [
        {
          text: 'आज दिवस लेऊँ बलिहारा ।\nमेरे ग्रिह आया राजा राम जी का प्यारा ॥',
          meaning: { en: 'I give myself in sacrifice today: a beloved of King Rama has come to my house.' },
        },
        {
          n: 1,
          text: 'आँगन पगड भुवन भयौ पावन ।\nहरिजन बैठे हरि जस गावन ॥',
          meaning: { en: 'His feet in the courtyard have made my house holy, and the Lord\'s people sit singing Hari\'s praise.' },
        },
        {
          n: 2,
          text: 'करी डंडौत अरु चरन पषारौं ।\nतन मन धन संतन पर वारौं ॥',
          meaning: { en: 'I bow down and wash their feet, and offer body, mind and wealth to the saints.' },
        },
        {
          n: 3,
          text: 'क्या करै अरु अरथ बिचारै ।\nआप तरैं औरनि कौ तारैं ॥',
          meaning: { en: 'Why consider anything else or ask about meaning? They cross themselves and carry others across.' },
        },
        {
          n: 4,
          text: 'कहै रैदास मिलैं निज दास ।\nजनम जनम कै काटैं पास ॥',
          meaning: { en: 'Raidas says: when one meets the Lord\'s own servant, the bonds of birth after birth are cut.' },
        },
      ],
    },
  ],
};
