/**
 * Śrī Pārvatī Cālīsā, Hindi/Awadhi, in Devanagari. No author is named in the text.
 *
 * Collated Nov 2026 against three independent typed copies of the widely printed text:
 *   R  drikpanchang.com "Parvati Mata Chalisa" (base for spelling and order);
 *   B  bhaktibharat.com "Parvati Chalisa" (numbered 10-40);  S  shubhpanchang.com "Parvati Chalisa".
 * All three give an opening doha, forty chaupai couplets and a closing doha, with no differences of
 * order or content; they differ in spelling and in a few words. The forty chaupai are numbered 1-40;
 * the two dohas are not. Readings chosen against the base R:
 *   c1 "तुम्हरो" (R, B; S "तुम्हरे");  c3 "तेऊ" (R, B; S "तेरो");  c3 "हित" (R, S; B "हिय");
 *   c11 "विकासिनी" (B, S; R "विकासिन", metre);  c34 "ऋषि", c35 "सप्तऋषि" (B, S; R "रिषि");
 *   c35 "तब तब जय जय जय" (B; R and S "तव तव", which does not construe: "then and then");
 *   c35 "सिधारेउ" (R, S; B "सिद्धारेउ", a typing slip);  c39 "सों हे भामा" (R, S; B omits "हे");
 *   closing doha "जयति जयति सुख खानि" (R, B; S has one "जयति").
 * Spelling only: c22 "पह आयी" (S; B, R run it together); c23 "तेहि कों" (B, S). Nukta letters are written
 * without the dot. Doubts: none beyond the above; the three copies are plainly one recension. Meanings are original.
 */
import type { Mantra } from '../types';

export const parvatiChalisa: Mantra = {
  id: 'parvati-chalisa',
  title: 'श्री पार्वती चालीसा',
  titleEn: 'Sri Parvati Chalisa',
  category: 'chalisa',
  order: 30,
  deity: 'Śrī Pārvatī',
  source: 'Traditional (no author named), Hindi/Awadhi',
  summary: 'The forty-verse Hindi hymn to Parvati, daughter of the Himalaya and consort of Shiva: her glowing form and ornaments, her husband\'s wild ways and the Ganga on his head, her austere penance under Narada\'s instruction, the Seven Sages\' failed test and the boon of marrying Shiva. Recited on Mondays, in Shravan, on Hartalika Teej and in Navaratri.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'जय गिरी तनये दक्षजे, शम्भु प्रिये गुणखानि ।\nगणपति जननी पार्वती, अम्बे शक्ति भवानि ॥',
          meaning: { en: 'Victory to Girija, the Himalaya\'s daughter, born of Daksha, dear to Shambhu and a mine of virtues; mother of Ganapati, Ambe, Shakti, Bhavani.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'ब्रह्मा भेद न तुम्हरो पावे ।\nपंच बदन नित तुमको ध्यावे ॥',
          meaning: { en: 'Not even Brahma can know your secret; five-faced Shiva ever meditates on you.' },
        },
        {
          n: 2,
          text: 'षड्मुख कहि न सकत यश तेरो ।\nसहसबदन श्रम करत घनेरो ॥',
          meaning: { en: 'Six-faced Kartikeya cannot tell your glory, and thousand-headed Shesha tires in the effort.' },
        },
        {
          n: 3,
          text: 'तेऊ पार न पावत माता ।\nस्थित रक्षा लय हित सजाता ॥',
          meaning: { en: 'Even they find no end to you, mother; creation, preservation and dissolution are all held in your heart.' },
        },
        {
          n: 4,
          text: 'अधर प्रवाल सदृश अरुणारे ।\nअति कमनीय नयन कजरारे ॥',
          meaning: { en: 'Your lips are red like coral and your dark-lined eyes very lovely.' },
        },
        {
          n: 5,
          text: 'ललित ललाट विलेपित केशर ।\nकुंकुम अक्षत शोभा मनहर ॥',
          meaning: { en: 'On your charming brow are saffron and a mark of kumkum and rice grains, a delight to see.' },
        },
        {
          n: 6,
          text: 'कनक बसन कंचुकी सजाए ।\nकटी मेखला दिव्य लहराए ॥',
          meaning: { en: 'You wear golden clothes and a bodice, and a divine girdle sways at your waist.' },
        },
        {
          n: 7,
          text: 'कण्ठ मदार हार की शोभा ।\nजाहि देखि सहजहि मन लोभा ॥',
          meaning: { en: 'A garland of mandara flowers graces your neck, so that the mind is at once enchanted on seeing it.' },
        },
        {
          n: 8,
          text: 'बालारुण अनन्त छबि धारी ।\nआभूषण की शोभा प्यारी ॥',
          meaning: { en: 'You have the endless glow of the newly risen sun, and your ornaments are lovely.' },
        },
        {
          n: 9,
          text: 'नाना रत्न जटित सिंहासन ।\nतापर राजति हरि चतुरानन ॥',
          meaning: { en: 'On a throne set with many jewels you sit, and Vishnu and four-faced Brahma attend you.' },
        },
        {
          n: 10,
          text: 'इन्द्रादिक परिवार पूजित ।\nजग मृग नाग यक्ष रव कूजित ॥',
          meaning: { en: 'Indra and the gods are your family and worship you; beasts, serpents and yakshas sing your praise.' },
        },
        {
          n: 11,
          text: 'गिर कैलास निवासिनी जय जय ।\nकोटिक प्रभा विकासिनी जय जय ॥',
          meaning: { en: 'Victory to you, dweller on Kailasa, spreading the light of millions of suns.' },
        },
        {
          n: 12,
          text: 'त्रिभुवन सकल कुटुम्ब तिहारी ।\nअणु अणु महं तुम्हारी उजियारी ॥',
          meaning: { en: 'The three worlds are all your family, and your light shines in every atom.' },
        },
        {
          n: 13,
          text: 'हैं महेश प्राणेश तुम्हारे ।\nत्रिभुवन के जो नित रखवारे ॥',
          meaning: { en: 'Mahesha, lord of life, is yours, he who is forever the guardian of the three worlds.' },
        },
        {
          n: 14,
          text: 'उनसो पति तुम प्राप्त कीन्ह जब ।\nसुकृत पुरातन उदित भए तब ॥',
          meaning: { en: 'You won him as your husband when the merit of your former lives came to fruition.' },
        },
        {
          n: 15,
          text: 'बूढा बैल सवारी जिनकी ।\nमहिमा का गावे कोउ तिनकी ॥',
          meaning: { en: 'His mount is an old bull; who can sing the greatness of such a one?' },
        },
        {
          n: 16,
          text: 'सदा श्मशान बिहारी शंकर ।\nआभूषण हैं भुजंग भयंकर ॥',
          meaning: { en: 'Shankara ever roams the cremation ground, with fearsome serpents for ornaments.' },
        },
        {
          n: 17,
          text: 'कण्ठ हलाहल को छबि छायी ।\nनीलकण्ठ की पदवी पायी ॥',
          meaning: { en: 'The sheen of the poison lies on his throat, and so he won the title Neelakantha.' },
        },
        {
          n: 18,
          text: 'देव मगन के हित अस कीन्हों ।\nविष लै आपु तिनहि अमि दीन्हों ॥',
          meaning: { en: 'For the sake of the anxious gods he did this: took the poison himself and gave them the nectar.' },
        },
        {
          n: 19,
          text: 'ताकी तुम पत्नी छवि धारिणि ।\nदूरित विदारिणी मंगल कारिणि ॥',
          meaning: { en: 'You are his wife, beautiful, destroyer of sin and bringer of auspiciousness.' },
        },
        {
          n: 20,
          text: 'देखि परम सौन्दर्य तिहारो ।\nत्रिभुवन चकित बनावन हारो ॥',
          meaning: { en: 'Seeing your supreme beauty, the three worlds are left astonished.' },
        },
        {
          n: 21,
          text: 'भय भीता सो माता गंगा ।\nलज्जा मय है सलिल तरंगा ॥',
          meaning: { en: 'Mother Ganga was afraid, her waves full of shame.' },
        },
        {
          n: 22,
          text: 'सौत समान शम्भु पह आयी ।\nविष्णु पदाब्ज छोडि सो धायी ॥',
          meaning: { en: 'Like a co-wife she came near Shambhu, leaving Vishnu\'s lotus feet and rushing there.' },
        },
        {
          n: 23,
          text: 'तेहि कों कमल बदन मुरझायो ।\nलखि सत्वर शिव शीश चढायो ॥',
          meaning: { en: 'Her lotus face withered, and seeing it Shiva quickly set her on his head.' },
        },
        {
          n: 24,
          text: 'नित्यानन्द करी बरदायिनी ।\nअभय भक्त कर नित अनपायिनी ॥',
          meaning: { en: 'You are ever blissful and a giver of boons, ever the sure fearlessness of your devotees.' },
        },
        {
          n: 25,
          text: 'अखिल पाप त्रयताप निकन्दिनि ।\nमाहेश्वरी हिमालय नन्दिनि ॥',
          meaning: { en: 'You destroy every sin and the three kinds of suffering, Maheshvari, daughter of Himalaya.' },
        },
        {
          n: 26,
          text: 'काशी पुरी सदा मन भायी ।\nसिद्ध पीठ तेहि आपु बनायी ॥',
          meaning: { en: 'Kashi is ever dear to you, and you yourself made it a seat of spiritual power.' },
        },
        {
          n: 27,
          text: 'भगवती प्रतिदिन भिक्षा दात्री ।\nकृपा प्रमोद सनेह विधात्री ॥',
          meaning: { en: 'Bhagavati, you give alms each day, and bestow grace, joy and tenderness.' },
        },
        {
          n: 28,
          text: 'रिपुक्षय कारिणि जय जय अम्बे ।\nवाचा सिद्ध करि अवलम्बे ॥',
          meaning: { en: 'Destroyer of foes, victory to you, Ambe, who make a devotee\'s word come true.' },
        },
        {
          n: 29,
          text: 'गौरी उमा शंकरी काली ।\nअन्नपूर्णा जग प्रतिपाली ॥',
          meaning: { en: 'You are Gauri, Uma, Shankari, Kali, and Annapurna, who nurtures the world.' },
        },
        {
          n: 30,
          text: 'सब जन की ईश्वरी भगवती ।\nपतिप्राणा परमेश्वरी सती ॥',
          meaning: { en: 'You are the sovereign of all, Bhagavati, devoted to your husband, supreme goddess, Sati.' },
        },
        {
          n: 31,
          text: 'तुमने कठिन तपस्या कीनी ।\nनारद सों जब शिक्षा लीनी ॥',
          meaning: { en: 'You performed hard austerity when you took instruction from Narada.' },
        },
        {
          n: 32,
          text: 'अन्न न नीर न वायु अहारा ।\nअस्थि मात्रतन भयउ तुम्हारा ॥',
          meaning: { en: 'You took no food, water or even air, until your body was only bone.' },
        },
        {
          n: 33,
          text: 'पत्र घास को खाद्य न भायउ ।\nउमा नाम तब तुमने पायउ ॥',
          meaning: { en: 'Even leaves and grass were not your food, and so you were given the name Uma.' },
        },
        {
          n: 34,
          text: 'तप बिलोकि ऋषि सात पधारे ।\nलगे डिगावन डिगी न हारे ॥',
          meaning: { en: 'Seeing your penance the Seven Sages came and tried to turn you aside, but you did not waver.' },
        },
        {
          n: 35,
          text: 'तब तब जय जय जय उच्चारेउ ।\nसप्तऋषि निज गेह सिधारेउ ॥',
          meaning: { en: 'Then they cried "Victory, victory, victory!" and went home.' },
        },
        {
          n: 36,
          text: 'सुर विधि विष्णु पास तब आए ।\nवर देने के वचन सुनाए ॥',
          meaning: { en: 'Then the gods, Brahma and Vishnu came and promised you a boon.' },
        },
        {
          n: 37,
          text: 'मांगे उमा वर पति तुम तिनसों ।\nचाहत जग त्रिभुवन निधि जिनसों ॥',
          meaning: { en: 'You asked for the husband from whom the world and the three realms draw their treasure.' },
        },
        {
          n: 38,
          text: 'एवमस्तु कहि ते दोऊ गए ।\nसुफल मनोरथ तुमने लए ॥',
          meaning: { en: 'They said "so be it" and departed, and your wish was gloriously fulfilled.' },
        },
        {
          n: 39,
          text: 'करि विवाह शिव सों हे भामा ।\nपुनः कहाई हर की बामा ॥',
          meaning: { en: 'You married Shiva, noble lady, and were again known as Hara\'s consort.' },
        },
        {
          n: 40,
          text: 'जो पढिहै जन यह चालीसा ।\nधन जन सुख देइहै तेहि ईसा ॥',
          meaning: { en: 'Whoever reads this chalisa, the Lord grants him wealth, family and happiness.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'कूट चन्द्रिका सुभग शिर, जयति जयति सुख खानि ।\nपार्वती निज भक्त हित, रहहु सदा वरदानि ॥',
          meaning: { en: 'With the moon-crest on your lovely brow, victory, victory, mine of joy; Parvati, remain forever the giver of boons to your devotee.' },
        },
      ],
    },
  ],
};
