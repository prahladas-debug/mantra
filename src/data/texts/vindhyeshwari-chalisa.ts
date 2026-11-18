/**
 * Śrī Vindhyeśvarī (Vindhyavāsinī) Cālīsā, Hindi, in Devanagari. No author is named.
 *
 * Collated Nov 2026 against three independent typed copies of the widely printed text:
 *   R  drikpanchang.com "Vindhyeshwari Mata Chalisa" (base);  B  bhaktibharat.com "Vindhyeshvari Chalisa";
 *   S  shubhpanchang.com "Vindhyeshwari Chalisa".
 * All three give an opening doha and thirty-eight chaupai couplets (S says 38; B's marginal count "30" and "40"
 * counts half-lines) and no closing doha. The chaupai are numbered 1-38, the doha not. Readings chosen against
 * R, by majority of B and S:
 *   doha "काज में, करती नहीं विलम्ब" (B, S; R adds "माँ");  c5 "कोउ" (B, S; R "कोई");  c9 "श्यामा" (B, S; R "शामा");
 *   c12 "लक्ष्मी", c17 "रक्षिणी", c13 "जाह्नवी" (B, S; R "लक्श्मी", "रक्शिणी", "जान्हवी", slips);
 *   c31 "जा कहँ पुत्र होय" (B, S; R "जो नर"); c32 "नौरातन में" (B, S; R "नौरातर");
 *   c33 "होहिं ... देहिं ता कहँ" (B, S; R "होय ... देहि ताकहं"); c34 "आन चढावै" (B, S; R "आनि");
 *   c37 "जापर होई जाई" (B, S; R "तापर"); c29 "सत्य वचन" (B, S). Kept against B or S: "तू ही" (R, S; B "तुम्हीं"),
 *   "सिद्धि करिय अम्बे मम बानी" (c21; B "सिद्ध करहु", S "सिद्ध करिए अब यह": three readings, R kept),
 *   "मातु सुगन्धा" (c18; S "मात संकटी"), "चोंसट्ठी" (c15). Doubt: c13 "उत्रानी" (R) is a non-word; B has "रुद्रानी",
 *   S "इन्द्राणी", so the line is kept as in R and its meaning is tentative. Nukta letters are written without the dot.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const vindhyeshwariChalisa: Mantra = {
  id: 'vindhyeshwari-chalisa',
  title: 'श्री विन्ध्येश्वरी चालीसा',
  titleEn: 'Sri Vindhyeshwari Chalisa',
  category: 'chalisa',
  order: 39,
  deity: 'Śrī Vindhyavāsinī',
  source: 'Traditional (no author named), Hindi',
  summary: 'The Hindi hymn to Vindhyeshwari, the goddess of the Vindhya hills, in thirty-eight verses and an opening doha: her lion mount and unmatched compassion, a long list of her names and forms (Vaishnavi, Rudrani, Sharada, Hingalaj, Durga, Lakshmi), and the promised fruit of reciting it: relief from debt, disease, imprisonment, trouble and childlessness. Recited in Navaratri and at Vindhyachal.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'नमो नमो विन्ध्येश्वरी, नमो नमो जगदम्ब ।\nसन्तजनों के काज में, करती नहीं विलम्ब ॥',
          meaning: { en: 'Salutations, salutations to Vindhyeshwari, Jagadamba; she never delays in the work of her devotees.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय जय जय विन्ध्याचल रानी ।\nआदि शक्ति जग विदित भवानी ॥',
          meaning: { en: 'Victory, victory, victory to the queen of Vindhyachal, the primal Shakti known to all, Bhavani.' },
        },
        {
          n: 2,
          text: 'सिंहवाहिनी जै जग माता ।\nजय जय जय त्रिभुवन सुखदाता ॥',
          meaning: { en: 'Lion-borne, victory, mother of the world; victory, giver of happiness in the three worlds.' },
        },
        {
          n: 3,
          text: 'कष्ट निवारिनी जय जग देवी ।\nजय जय जय जय असुरासुर सेवी ॥',
          meaning: { en: 'Destroyer of trouble, victory, goddess of the world, whom saints, demons and gods serve.' },
        },
        {
          n: 4,
          text: 'महिमा अमित अपार तुम्हारी ।\nशेष सहस मुख वर्णत हारी ॥',
          meaning: { en: 'Your greatness is endless and limitless; even thousand-mouthed Shesha tires telling it.' },
        },
        {
          n: 5,
          text: 'दीनन के दुःख हरत भवानी ।\nनहिं देख्यो तुम सम कोउ दानी ॥',
          meaning: { en: 'You ease the sorrows of the poor, Bhavani; no giver like you has been seen.' },
        },
        {
          n: 6,
          text: 'सब कर मनसा पुरवत माता ।\nमहिमा अमित जगत विख्याता ॥',
          meaning: { en: 'You fulfil the wishes of all, mother, and your boundless greatness is known to the world.' },
        },
        {
          n: 7,
          text: 'जो जन ध्यान तुम्हारो लावै ।\nसो तुरतहि वांछित फल पावै ॥',
          meaning: { en: 'Whoever fixes his meditation on you quickly gets the fruit he wishes.' },
        },
        {
          n: 8,
          text: 'तू ही वैष्णवी तू ही रुद्राणी ।\nतू ही शारदा अरु ब्रह्माणी ॥',
          meaning: { en: 'You are Vaishnavi, Rudrani, Sharada and Brahmani.' },
        },
        {
          n: 9,
          text: 'रमा राधिका श्यामा काली ।\nतू ही मातु सन्तन प्रतिपाली ॥',
          meaning: { en: 'Rama (Lakshmi), Radhika, Shyama, Kali; you are the mother who cherishes the good.' },
        },
        {
          n: 10,
          text: 'उमा माधवी चण्डी ज्वाला ।\nबेगि मोहि पर होहु दयाला ॥',
          meaning: { en: 'Uma, Madhavi, Chandi, Jvala: be quickly gracious to me.' },
        },
        {
          n: 11,
          text: 'तू ही हिंगलाज महारानी ।\nतू ही शीतला अरु विज्ञानी ॥',
          meaning: { en: 'You are the great queen Hingalaj, and Shitala and the wise Vijnani.' },
        },
        {
          n: 12,
          text: 'दुर्गा दुर्ग विनाशिनी माता ।\nतू ही लक्ष्मी जग सुखदाता ॥',
          meaning: { en: 'Durga, destroyer of the fortress of difficulty, you are Lakshmi, giver of happiness to the world.' },
        },
        {
          n: 13,
          text: 'तू ही जाह्नवी अरु उत्रानी ।\nहेमावती अम्बे निर्वानी ॥',
          meaning: { en: 'You are Jahnavi (Ganga) and (obscure) Utrani, Hemavati, Amba, Nirvani.' },
        },
        {
          n: 14,
          text: 'अष्टभुजी वाराहिनी देवी ।\nकरत विष्णु शिव जाकर सेवी ॥',
          meaning: { en: 'Eight-armed Varahi, goddess, whom Vishnu and Shiva serve.' },
        },
        {
          n: 15,
          text: 'चोंसट्ठी देवी कल्यानी ।\nगौरी मंगला सब गुण खानी ॥',
          meaning: { en: 'Sixty-four goddesses, auspicious Gauri, Mangala, mine of all virtues.' },
        },
        {
          n: 16,
          text: 'पाटन मुम्बा दन्त कुमारी ।\nभद्रकाली सुन विनय हमारी ॥',
          meaning: { en: 'Patan\'s Mumba (Mumbadevi), Dantakumari, Bhadrakali, hear our prayer.' },
        },
        {
          n: 17,
          text: 'वज्रधारिणी शोक नाशिनी ।\nआयु रक्षिणी विन्ध्यवासिनी ॥',
          meaning: { en: 'Holder of the thunderbolt, destroyer of grief, protector of life, Vindhyavasini.' },
        },
        {
          n: 18,
          text: 'जया और विजया बैताली ।\nमातु सुगन्धा अरु विकराली ॥',
          meaning: { en: 'Jaya and Vijaya, Vaitali, mother Sugandha, and fearsome Vikarali.' },
        },
        {
          n: 19,
          text: 'नाम अनन्त तुम्हार भवानी ।\nबरनैं किमि मानुष अज्ञानी ॥',
          meaning: { en: 'Your names are endless, Bhavani; how can an ignorant man describe them?' },
        },
        {
          n: 20,
          text: 'जा पर कृपा मातु तव होई ।\nतो वह करै चहै मन जोई ॥',
          meaning: { en: 'He on whom your grace falls does whatever his heart wills.' },
        },
        {
          n: 21,
          text: 'कृपा करहु मो पर महारानी ।\nसिद्धि करिय अम्बे मम बानी ॥',
          meaning: { en: 'Be gracious to me, great queen, and make my word come true, Amba.' },
        },
        {
          n: 22,
          text: 'जो नर धरै मातु कर ध्याना ।\nताकर सदा होय कल्याना ॥',
          meaning: { en: 'The man who meditates on the Mother always has well-being.' },
        },
        {
          n: 23,
          text: 'विपत्ति ताहि सपनेहु नहिं आवै ।\nजो देवी कर जाप करावै ॥',
          meaning: { en: 'Calamity never comes to him, even in a dream, who has the Goddess\'s praise recited.' },
        },
        {
          n: 24,
          text: 'जो नर कहं ऋण होय अपारा ।\nसो नर पाठ करै शत बारा ॥',
          meaning: { en: 'The man who has great debt, let him recite this a hundred times.' },
        },
        {
          n: 25,
          text: 'निश्चय ऋण मोचन होई जाई ।\nजो नर पाठ करै मन लाई ॥',
          meaning: { en: 'Surely he is freed from debt who recites it with a steady mind.' },
        },
        {
          n: 26,
          text: 'अस्तुति जो नर पढे पढावे ।\nया जग में सो बहु सुख पावै ॥',
          meaning: { en: 'Whoever reads or has this praise read finds great happiness in the world.' },
        },
        {
          n: 27,
          text: 'जाको व्याधि सतावै भाई ।\nजाप करत सब दूरि पराई ॥',
          meaning: { en: 'Whoever is troubled by illness, brother, finds it fled when he repeats it.' },
        },
        {
          n: 28,
          text: 'जो नर अति बन्दी महं होई ।\nबार हजार पाठ कर सोई ॥',
          meaning: { en: 'The man in prison who recites it a thousand times' },
        },
        {
          n: 29,
          text: 'निश्चय बन्दी ते छुटि जाई ।\nसत्य वचन मम मानहु भाई ॥',
          meaning: { en: 'is surely freed from bondage; believe my true word, brother.' },
        },
        {
          n: 30,
          text: 'जा पर जो कछु संकट होई ।\nनिश्चय देबिहि सुमिरै सोई ॥',
          meaning: { en: 'Whoever has any trouble should call the Goddess to mind.' },
        },
        {
          n: 31,
          text: 'जा कहँ पुत्र होय नहिं भाई ।\nसो नर या विधि करे उपाई ॥',
          meaning: { en: 'The childless man should do this:' },
        },
        {
          n: 32,
          text: 'पांच वर्ष सो पाठ करावै ।\nनौरातन में विप्र जिमावै ॥',
          meaning: { en: 'for five years have it recited, and feed Brahmins on the nine nights.' },
        },
        {
          n: 33,
          text: 'निश्चय होहिं प्रसन्न भवानी ।\nपुत्र देहिं ता कहँ गुण खानी ॥',
          meaning: { en: 'Bhavani will surely be pleased and give him a son, mine of virtue.' },
        },
        {
          n: 34,
          text: 'ध्वजा नारियल आन चढावै ।\nविधि समेत पूजन करवावै ॥',
          meaning: { en: 'Let him bring a flag and a coconut, and have worship performed by the rules.' },
        },
        {
          n: 35,
          text: 'नित प्रति पाठ करै मन लाई ।\nप्रेम सहित नहिं आन उपाई ॥',
          meaning: { en: 'Let him recite it daily with a steady mind and love; there is no other way.' },
        },
        {
          n: 36,
          text: 'यह श्री विन्ध्याचल चालीसा ।\nरंक पढत होवे अवनीसा ॥',
          meaning: { en: 'The beggar who reads this Vindhyachal Chalisa becomes a king.' },
        },
        {
          n: 37,
          text: 'यह जनि अचरज मानहु भाई ।\nकृपा दृष्टि जापर होई जाई ॥',
          meaning: { en: 'Do not think this a wonder, brother: whoever has her grace, it happens to.' },
        },
        {
          n: 38,
          text: 'जय जय जय जगमातु भवानी ।\nकृपा करहु मो पर जन जानी ॥',
          meaning: { en: 'Victory, victory, victory to the world\'s Mother, Bhavani; be kind to me, knowing me as your own.' },
        },
      ],
    },
  ],
};
