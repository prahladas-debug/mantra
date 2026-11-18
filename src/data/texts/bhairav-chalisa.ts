/**
 * Śrī Bhairava Cālīsā ("Śrī gaṇapati guru gaurī pada"), attributed to Sundaradāsa (named in verse 35), Hindi/Awadhi.
 *
 * Collated Nov 2026 against three typed copies of the widely printed text:
 *   H  hindutone.com "Bhairav Chalisa" (base);  B  bhaktibharat.com "Bhairav Chalisa";
 *   A  aajtak.in "Shri Kaal-Bhairav Chalisa".
 * (A different text, "Jaya ḍamarūdhara nayana viśālā", printed by shubhpanchang.com and drikpanchang.com, is
 * another composition and is not used; its two copies also differ from each other widely.) H, B and A give
 * two opening dohas, thirty-six chaupai couplets and a doha at the end; so the chaupai are numbered 1-36
 * (not forty) and the dohas are not. Readings chosen against the base H:
 *   c12 "कटाक्ष" (B, A; H "कटाक्श", a slip);  c18 "तीनहूँ" (A; H and B "नीनहूँ", a slip: "the three forms");
 *   c32 "जाकर निर्मल" (A; H and B "जनकर"); c31 "नसै" (H, B; A "नासै"). Spelling only:
 *   "बं बं बं" (H; B "बम बम बम"), "भूतों के", "कृपा करि", "सुन्दर दास" (word divisions as A and B).
 * A swaps "नाथ-भैरव" and "सर्व-भैरव" in c3 and has the slips "बोतल" (c15, for "बोलत"), "त्रिलोकन" (c22),
 * "जय" for "भय" (c2); all rejected. A alone prints a second closing doha ("जो यह चालीसा पढ़े प्रेम सहित सत बार / उस घर
 * सर्वानन्द हों वैभव बड़े अपार"); H and B omit it, and it is not included. H and B are close enough that
 * they may share a source. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhairavChalisa: Mantra = {
  id: 'bhairav-chalisa',
  title: 'श्री भैरव चालीसा',
  titleEn: 'Sri Bhairav Chalisa',
  category: 'chalisa',
  order: 32,
  deity: 'Śrī Bhairava',
  source: 'Sundaradāsa (named in verse 35), Hindi/Awadhi',
  summary: 'The Hindi hymn to Kala Bhairava, Shiva\'s fierce form and the guardian-kotwal of Kashi: the three coloured forms of Bhairava, his skull-wreathed dance and cremation-ground attendants, a long litany of his names (Batuka, Nakulesha, Kalanatha), the clearing of sin and fear by his staff, and the claim that those who praise him gain all they seek. Recited on Sundays, Tuesdays and Bhairava Ashtami.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'श्री गणपति गुरु गौरि पद प्रेम सहित धरि माथ ।\nचालीसा वन्दन करौं श्री शिव भैरवनाथ ॥',
          meaning: { en: 'Bowing my head with love to Ganapati, Guru and Gauri\'s feet, I praise Shri Shiva Bhairavanatha with this chalisa.' },
        },
        {
          text: 'श्री भैरव संकट हरण मंगल करण कृपाल ।\nश्याम वरण विकराल वपु लोचन लाल विशाल ॥',
          meaning: { en: 'Shri Bhairava, remover of troubles, bringer of blessings and kindness, dark and terrible in form, with wide red eyes.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय जय श्री काली के लाला ।\nजयति जयति काशी-कुतवाला ॥',
          meaning: { en: 'Victory, victory to the son of Kali, victory to the kotwal of Kashi.' },
        },
        {
          n: 2,
          text: 'जयति बटुक-भैरव भय हारी ।\nजयति काल-भैरव बलकारी ॥',
          meaning: { en: 'Victory to Batuka-Bhairava who removes fear, to Kala-Bhairava the strong.' },
        },
        {
          n: 3,
          text: 'जयति नाथ-भैरव विख्याता ।\nजयति सर्व-भैरव सुखदाता ॥',
          meaning: { en: 'Victory to the famed Natha-Bhairava, to Sarva-Bhairava, giver of happiness.' },
        },
        {
          n: 4,
          text: 'भैरव रूप कियो शिव धारण ।\nभव के भार उतारण कारण ॥',
          meaning: { en: 'Shiva took the form of Bhairava to lift the burden of the world.' },
        },
        {
          n: 5,
          text: 'भैरव रव सुनि ह्वै भय दूरी ।\nसब विधि होय कामना पूरी ॥',
          meaning: { en: 'Hearing Bhairava\'s roar, fear flees and every wish is fulfilled in every way.' },
        },
        {
          n: 6,
          text: 'शेष महेश आदि गुण गायो ।\nकाशी-कोतवाल कहलायो ॥',
          meaning: { en: 'Shesha, Mahesha and others sang your qualities, and you came to be called the Kotwal of Kashi.' },
        },
        {
          n: 7,
          text: 'जटा जूट शिर चंद्र विराजत ।\nबाला मुकुट बिजायठ साजत ॥',
          meaning: { en: 'Moon on your matted locks, a young crown and arm-ornament on you;' },
        },
        {
          n: 8,
          text: 'कटि करधनी घूँघरू बाजत ।\nदर्शन करत सकल भय भाजत ॥',
          meaning: { en: 'the bells at your waist ring, and seeing you all fear flees.' },
        },
        {
          n: 9,
          text: 'जीवन दान दास को दीन्ह्यो ।\nकीन्ह्यो कृपा नाथ तब चीन्ह्यो ॥',
          meaning: { en: 'You gave life to your servant; knowing him as yours, you showed mercy.' },
        },
        {
          n: 10,
          text: 'वसि रसना बनि सारद-काली ।\nदीन्ह्यो वर राख्यो मम लाली ॥',
          meaning: { en: 'You dwelt on my tongue as Sharada and Kali and gave the boon that saved my honour.' },
        },
        {
          n: 11,
          text: 'धन्य धन्य भैरव भय भंजन ।\nजय मनरंजन खल दल भंजन ॥',
          meaning: { en: 'Blessed, blessed Bhairava, destroyer of fear, delight of hearts, scatterer of the wicked.' },
        },
        {
          n: 12,
          text: 'कर त्रिशूल डमरू शुचि कोडा ।\nकृपा कटाक्ष सुयश नहिं थोडा ॥',
          meaning: { en: 'Trident, damaru and a pure staff in your hands; your glance of grace and your fame are not small.' },
        },
        {
          n: 13,
          text: 'जो भैरव निर्भय गुण गावत ।\nअष्टसिद्धि नव निधि फल पावत ॥',
          meaning: { en: 'Whoever sings your praise fearlessly gains the eight powers and the nine treasures.' },
        },
        {
          n: 14,
          text: 'रूप विशाल कठिन दुख मोचन ।\nक्रोध कराल लाल दुहुँ लोचन ॥',
          meaning: { en: 'Your vast form removes hard sorrow, and your two fierce eyes are red with anger.' },
        },
        {
          n: 15,
          text: 'अगणित भूत प्रेत संग डोलत ।\nबं बं बं शिव बं बं बोलत ॥',
          meaning: { en: 'Countless ghosts and spirits move with you, shouting "Bam, bam, bam" to Shiva.' },
        },
        {
          n: 16,
          text: 'रुद्रकाय काली के लाला ।\nमहा कालहू के हो काला ॥',
          meaning: { en: 'Terrible of body, son of Kali, you are the Time of even Mahakala.' },
        },
        {
          n: 17,
          text: 'बटुक नाथ हो काल गँभीरा ।\nश्वेत रक्त अरु श्याम शरीरा ॥',
          meaning: { en: 'Batuka-natha, grave Kala, you appear white, red and dark of body.' },
        },
        {
          n: 18,
          text: 'करत तीनहूँ रूप प्रकाशा ।\nभरत सुभक्तन कहँ शुभ आशा ॥',
          meaning: { en: 'You show yourself in these three forms and fulfil the good hopes of devotees.' },
        },
        {
          n: 19,
          text: 'रत्न जडित कंचन सिंहासन ।\nव्याघ्र चर्म शुचि नर्म सुआनन ॥',
          meaning: { en: 'You sit on a throne of gold and jewels, in a pure soft tiger-skin.' },
        },
        {
          n: 20,
          text: 'तुमहि जाइ काशिहिं जन ध्यावहिं ।\nविश्वनाथ कहँ दर्शन पावहिं ॥',
          meaning: { en: 'People who meditate on you in Kashi gain Vishvanatha\'s darshan as well.' },
        },
        {
          n: 21,
          text: 'जय प्रभु संहारक सुनन्द जय ।\nजय उन्नत हर उमा नन्द जय ॥',
          meaning: { en: 'Victory, destroyer, joyful one, victory to the noble husband of Uma.' },
        },
        {
          n: 22,
          text: 'भीम त्रिलोचन स्वान साथ जय ।\nवैजनाथ श्री जगतनाथ जय ॥',
          meaning: { en: 'Victory to the three-eyed fearsome one with his dog, to Vaidyanatha and Jagannatha.' },
        },
        {
          n: 23,
          text: 'महा भीम भीषण शरीर जय ।\nरुद्र त्र्यम्बक धीर वीर जय ॥',
          meaning: { en: 'Victory to the very fearsome, terrible-bodied one, to Rudra Tryambaka, steadfast hero.' },
        },
        {
          n: 24,
          text: 'अश्वनाथ जय प्रेतनाथ जय ।\nस्वानारुढ सयचंद्र नाथ जय ॥',
          meaning: { en: 'Victory to Ashvanatha and Pretanatha, to the dog-rider Sayachandra-natha.' },
        },
        {
          n: 25,
          text: 'निमिष दिगंबर चक्रनाथ जय ।\nगहत अनाथन नाथ हाथ जय ॥',
          meaning: { en: 'Victory to Nimisha and Digambara, to Chakranatha who takes the helpless in hand.' },
        },
        {
          n: 26,
          text: 'त्रेशलेश भूतेश चंद्र जय ।\nक्रोध वत्स अमरेश नन्द जय ॥',
          meaning: { en: 'Victory to Treshalesha, Bhutesha and Chandra, to Krodhavatsa and Amaresha-nanda.' },
        },
        {
          n: 27,
          text: 'श्री वामन नकुलेश चण्ड जय ।\nकृत्याऊ कीरति प्रचण्ड जय ॥',
          meaning: { en: 'Victory to Vamana, Nakulesha and Chanda, to Kritya and Prachanda in glory.' },
        },
        {
          n: 28,
          text: 'रुद्र बटुक क्रोधेश कालधर ।\nचक्र तुण्ड दश पाणिव्याल धर ॥',
          meaning: { en: 'Rudra, Batuka, Krodhesha, Kaladhara, Chakratunda, ten-armed, serpent-bearing one.' },
        },
        {
          n: 29,
          text: 'करि मद पान शम्भु गुणगावत ।\nचौंसठ योगिन संग नचावत ॥',
          meaning: { en: 'Drinking in his ecstasy, Shambhu\'s Bhairava sings, and sixty-four yoginis dance with him.' },
        },
        {
          n: 30,
          text: 'करत कृपा जन पर बहु ढंगा ।\nकाशी कोतवाल अडबंगा ॥',
          meaning: { en: 'You show grace to people in many ways, wayward Kotwal of Kashi.' },
        },
        {
          n: 31,
          text: 'देयँ काल भैरव जब सोटा ।\nनसै पाप मोटा से मोटा ॥',
          meaning: { en: 'When Kala-Bhairava lays on his staff, even the biggest sin is destroyed.' },
        },
        {
          n: 32,
          text: 'जाकर निर्मल होय शरीरा ।\nमिटै सकल संकट भव पीरा ॥',
          meaning: { en: 'The one so struck becomes pure of body and all trouble and pain of rebirth ends.' },
        },
        {
          n: 33,
          text: 'श्री भैरव भूतों के राजा ।\nबाधा हरत करत शुभ काजा ॥',
          meaning: { en: 'Shri Bhairava, king of ghosts, removes obstacles and brings good work to pass.' },
        },
        {
          n: 34,
          text: 'ऐलादी के दुःख निवारयो ।\nसदा कृपा करि काज सम्हारयो ॥',
          meaning: { en: 'You ended Ailadi\'s sorrow and always looked after his work with grace.' },
        },
        {
          n: 35,
          text: 'सुन्दर दास सहित अनुरागा ।\nश्री दुर्वासा निकट प्रयागा ॥',
          meaning: { en: 'Sundaradasa, with love, near Durvasa\'s place at Prayag,' },
        },
        {
          n: 36,
          text: 'श्री भैरव जी की जय लेख्यो ।\nसकल कामना पूरण देख्यो ॥',
          meaning: { en: 'wrote of Shri Bhairava\'s victory; every desire is seen fulfilled.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'जय जय जय भैरव बटुक स्वामी संकट टार ।\nकृपा दास पर कीजिए शंकर के अवतार ॥',
          meaning: { en: 'Victory, victory, victory to Bhairava Batuka, lord and remover of troubles; be kind to your servant, avatar of Shankara.' },
        },
      ],
    },
  ],
};
