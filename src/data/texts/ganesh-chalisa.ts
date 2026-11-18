/**
 * Śrī Gaṇeśa Cālīsā, attributed to Rāmasundara (named in verse 37), Hindi/Awadhi, in Devanagari.
 *
 * Collated Nov 2026 against three independent typed copies of the widely printed text:
 *   B  bhaktibharat.com "Shri Ganesh Chalisa" (base: numbered, complete);
 *   S  shubhpanchang.com "Ganesh Chalisa";  P  prabhatkhabar.com "Ganesh Chalisa Lyrics in Hindi".
 * All three give an opening doha, 38 chaupai couplets and a closing pair of dohas. Despite its name the
 * Chalisa is printed with 38 chaupai (B says so itself: "38"), so the verses are numbered 1-38; the
 * opening doha and the closing dohas are not. Readings chosen against B (6):
 *   c7 "गौरी ललन" (S, P; B "लालन");  c28 "सिधाये … लाये" (S, P; B "सिधायो");  c34 "कहि" (S, P; B "कही");
 *   c38 "दया दीन पर" (S, P; B "दीना", metre);  closing "पाठ करै धर ध्यान" (S, P "धर"; B "कर");
 *   closing "सम्वत् अपन" (P, close to S "संवत् अपना"; B "सम्बन्ध अपने").
 * Minor choices by majority: c1 "गणराजू" (S, B; P lacks "गण", metre); c8 "चंवर सुधारे" (S, B; P "डुलावे");
 * c16 "पालना" (S, B; P "पलना"); c21 "गुनि" (P, B; S "गनि"); c25 "सिर … अकाशा" (S, B; P "शिर … आकाशा");
 * c26 "गिरिजा … गिरी" (S, B); c35 "तुम्हरी … सके"; c37 "जग प्रयाग" (S, B; P "लख"). Spelling only
 * (वर्तनी) differences among the copies are normalised. The closing doha's Samvat date is printed
 * as in the copies. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const ganeshChalisa: Mantra = {
  id: 'ganesh-chalisa',
  title: 'श्री गणेश चालीसा',
  titleEn: 'Sri Ganesh Chalisa',
  category: 'chalisa',
  order: 10,
  deity: 'Śrī Gaṇeśa',
  source: 'Rāmasundara (named in verse 37), Hindi/Awadhi',
  summary: 'The Hindi hymn to Ganesha in thirty-eight verses and two dohas: his elephant-headed form and ornaments, the story of his birth to Parvati, Shani\'s glance and the elephant\'s head fitted by Vishnu, his victory over Kartikeya by circling his parents, and a plea for strength and devotion. Recited on Wednesdays and before any new undertaking.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'जय गणपति सद्गुण सदन, कविवर बदन कृपाल ।\nविघ्न हरण मंगल करण, जय जय गिरिजालाल ॥',
          meaning: { en: 'Victory to Ganapati, home of good qualities, the compassionate best of poets; remover of obstacles, bringer of blessings, victory, victory to Girija\'s son.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      note: 'The thirty-eight verses (this Chalisa is printed with thirty-eight, not forty).',
      verses: [
        {
          n: 1,
          text: 'जय जय जय गणपति गणराजू ।\nमंगल भरण करण शुभ काजू ॥',
          meaning: { en: 'Victory, victory, victory to Ganapati, king of the hosts, who fills life with blessing and brings success to every good undertaking.' },
        },
        {
          n: 2,
          text: 'जय गजबदन सदन सुखदाता ।\nविश्वविनायक बुद्धि विधाता ॥',
          meaning: { en: 'Victory to the elephant-faced one, the abode and giver of happiness, leader of the whole world, bestower of wisdom.' },
        },
        {
          n: 3,
          text: 'वक्र तुण्ड शुचि शुण्ड सुहावन ।\nतिलक त्रिपुण्ड भाल मन भावन ॥',
          meaning: { en: 'Your curved mouth and pure, lovely trunk, and the tilak and three lines on your forehead, delight the heart.' },
        },
        {
          n: 4,
          text: 'राजत मणि मुक्तन उर माला ।\nस्वर्ण मुकुट शिर नयन विशाला ॥',
          meaning: { en: 'A garland of gems and pearls shines on your chest, a golden crown on your head, and your eyes are wide.' },
        },
        {
          n: 5,
          text: 'पुस्तक पाणि कुठार त्रिशूलं ।\nमोदक भोग सुगन्धित फूलं ॥',
          meaning: { en: 'A book, an axe and a trident are in your hands; you are offered modaka sweets and fragrant flowers.' },
        },
        {
          n: 6,
          text: 'सुन्दर पीताम्बर तन साजित ।\nचरण पादुका मुनि मन राजित ॥',
          meaning: { en: 'A lovely yellow garment adorns your body, and your sandalled feet dwell shining in the minds of the sages.' },
        },
        {
          n: 7,
          text: 'धनि शिव सुवन षडानन भ्राता ।\nगौरी ललन विश्व विख्याता ॥',
          meaning: { en: 'Blessed son of Shiva, brother of the six-faced Kartikeya, darling of Gauri, famed throughout the world.' },
        },
        {
          n: 8,
          text: 'ऋद्धि सिद्धि तव चंवर सुधारे ।\nमूषक वाहन सोहत द्वारे ॥',
          meaning: { en: 'Riddhi and Siddhi arrange the fly-whisk for you, and your mouse mount looks fine at the door.' },
        },
        {
          n: 9,
          text: 'कहौं जन्म शुभ कथा तुम्हारी ।\nअति शुचि पावन मंगलकारी ॥',
          meaning: { en: 'Let me tell the auspicious story of your birth, most pure and holy, bringing good fortune.' },
        },
        {
          n: 10,
          text: 'एक समय गिरिराज कुमारी ।\nपुत्र हेतु तप कीन्हा भारी ॥',
          meaning: { en: 'Once the daughter of the mountain king performed great austerities to gain a son.' },
        },
        {
          n: 11,
          text: 'भयो यज्ञ जब पूर्ण अनूपा ।\nतब पहुँच्यो तुम धरि द्विज रूपा ॥',
          meaning: { en: 'When her matchless sacrifice was complete, you arrived in the form of a brahmin.' },
        },
        {
          n: 12,
          text: 'अतिथि जानि कै गौरी सुखारी ।\nबहु विधि सेवा करी तुम्हारी ॥',
          meaning: { en: 'Taking you for a guest, Gauri was glad and served you in many ways.' },
        },
        {
          n: 13,
          text: 'अति प्रसन्न ह्वै तुम वर दीन्हा ।\nमातु पुत्र हित जो तप कीन्हा ॥',
          meaning: { en: 'Greatly pleased, you gave a boon for the austerity the mother had performed for a son.' },
        },
        {
          n: 14,
          text: 'मिलहि पुत्र तुहि बुद्धि विशाला ।\nबिना गर्भ धारण यहि काला ॥',
          meaning: { en: 'You will have a son of great wisdom, without bearing him in the womb, at this very time.' },
        },
        {
          n: 15,
          text: 'गणनायक गुण ज्ञान निधाना ।\nपूजित प्रथम रूप भगवाना ॥',
          meaning: { en: 'He will lead the ganas, a treasure of virtue and knowledge, a form of God worshipped before all others.' },
        },
        {
          n: 16,
          text: 'अस कहि अन्तर्धान रूप ह्वै ।\nपालना पर बालक स्वरूप ह्वै ॥',
          meaning: { en: 'Having said this, you vanished and took the form of a baby in the cradle.' },
        },
        {
          n: 17,
          text: 'बनि शिशु रुदन जबहिं तुम ठाना ।\nलखि मुख सुख नहिं गौरी समाना ॥',
          meaning: { en: 'When, as a baby, you began to cry, Gauri looked at your face and her joy could not be contained.' },
        },
        {
          n: 18,
          text: 'सकल मगन सुख मंगल गावहिं ।\nनभ ते सुरन सुमन वर्षावहिं ॥',
          meaning: { en: 'Everyone, absorbed in delight, sang songs of joy and blessing, and the gods rained flowers from the sky.' },
        },
        {
          n: 19,
          text: 'शम्भु उमा बहु दान लुटावहिं ।\nसुर मुनि जन सुत देखन आवहिं ॥',
          meaning: { en: 'Shambhu and Uma gave away gifts freely, and gods, sages and people came to see the son.' },
        },
        {
          n: 20,
          text: 'लखि अति आनन्द मंगल साजा ।\nदेखन भी आए शनि राजा ॥',
          meaning: { en: 'Seeing the great joy and the festive arrangements, King Shani also came to see him.' },
        },
        {
          n: 21,
          text: 'निज अवगुण गुनि शनि मन माहीं ।\nबालक देखन चाहत नाहीं ॥',
          meaning: { en: 'Thinking of his own harmful nature, Shani did not wish to look at the child.' },
        },
        {
          n: 22,
          text: 'गिरिजा कछु मन भेद बढायो ।\nउत्सव मोर न शनि तुहि भायो ॥',
          meaning: { en: 'Girija felt a little hurt and said: Shani, did you not like my celebration?' },
        },
        {
          n: 23,
          text: 'कहन लगे शनि मन सकुचाई ।\nका करिहौ शिशु मोहि दिखाई ॥',
          meaning: { en: 'Shani spoke, embarrassed: what is the use of showing me the child?' },
        },
        {
          n: 24,
          text: 'नहिं विश्वास उमा उर भयऊ ।\nशनि सों बालक देखन कह्यऊ ॥',
          meaning: { en: 'Uma\'s heart did not believe any harm could come, and she told Shani to look at the child.' },
        },
        {
          n: 25,
          text: 'पडतहिं शनि दृग कोण प्रकाशा ।\nबालक सिर उडि गयो अकाशा ॥',
          meaning: { en: 'The instant the light from the corner of Shani\'s eye fell on him, the child\'s head flew into the sky.' },
        },
        {
          n: 26,
          text: 'गिरिजा गिरी विकल ह्वै धरणी ।\nसो दुख दशा गयो नहिं वरणी ॥',
          meaning: { en: 'Girija fell to the ground in distress; her state of grief cannot be described.' },
        },
        {
          n: 27,
          text: 'हाहाकार मच्यो कैलाशा ।\nशनि कीन्हों लखि सुत को नाशा ॥',
          meaning: { en: 'A cry of lament rose on Kailasa: Shani\'s glance had destroyed the son.' },
        },
        {
          n: 28,
          text: 'तुरत गरुड चढि विष्णु सिधाये ।\nकाटि चक्र सो गज शिर लाये ॥',
          meaning: { en: 'At once Vishnu came on Garuda and, cutting off a head with his discus, brought an elephant\'s head.' },
        },
        {
          n: 29,
          text: 'बालक के धड ऊपर धारयो ।\nप्राण मन्त्र पढि शंकर डारयो ॥',
          meaning: { en: 'It was set on the child\'s body, and Shankara recited the life-giving mantra and breathed life into him.' },
        },
        {
          n: 30,
          text: 'नाम गणेश शम्भु तब कीन्हे ।\nप्रथम पूज्य बुद्धि निधि वर दीन्हे ॥',
          meaning: { en: 'Shambhu then named him Ganesha and granted him the boons of being worshipped first and being a treasure of wisdom.' },
        },
        {
          n: 31,
          text: 'बुद्धि परीक्षा जब शिव कीन्हा ।\nपृथ्वी कर प्रदक्षिणा लीन्हा ॥',
          meaning: { en: 'When Shiva set a test of intelligence, the task was to circle the earth.' },
        },
        {
          n: 32,
          text: 'चले षडानन भरमि भुलाई ।\nरचे बैठ तुम बुद्धि उपाई ॥',
          meaning: { en: 'Shadanana set off and wandered in confusion, while you sat down and devised a clever plan.' },
        },
        {
          n: 33,
          text: 'चरण मातु पितु के धर लीन्हें ।\nतिनके सात प्रदक्षिण कीन्हें ॥',
          meaning: { en: 'You held your mother\'s and father\'s feet and circled them seven times.' },
        },
        {
          n: 34,
          text: 'धनि गणेश कहि शिव हिय हरषे ।\nनभ ते सुरन सुमन बहु बरसे ॥',
          meaning: { en: 'Saying “Blessed is Ganesha,” Shiva rejoiced in his heart, and the gods showered many flowers from the sky.' },
        },
        {
          n: 35,
          text: 'तुम्हरी महिमा बुद्धि बडाई ।\nशेष सहस मुख सके न गाई ॥',
          meaning: { en: 'Your glory and the greatness of your wisdom cannot be sung even by Shesha with his thousand mouths.' },
        },
        {
          n: 36,
          text: 'मैं मति हीन मलीन दुखारी ।\nकरहुँ कौन विधि विनय तुम्हारी ॥',
          meaning: { en: 'I am dull-witted, impure and unhappy; how can I rightly pray to you?' },
        },
        {
          n: 37,
          text: 'भजत रामसुन्दर प्रभुदासा ।\nजग प्रयाग ककरा दुर्वासा ॥',
          meaning: { en: 'Ramasundara, the Lord\'s servant, sings your praise; the line names Prayag, Kakara and Durvasa, places linked with him.' },
        },
        {
          n: 38,
          text: 'अब प्रभु दया दीन पर कीजै ।\nअपनी शक्ति भक्ति कुछ दीजै ॥',
          meaning: { en: 'Now, Lord, have mercy on this humble one and give me a little of your strength and devotion.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing dohas',
      verses: [
        {
          text: 'श्री गणेश यह चालीसा, पाठ करै धर ध्यान ।\nनित नव मंगल गृह बसै, लहे जगत सन्मान ॥',
          meaning: { en: 'Whoever recites this Ganesha Chalisa with attention will find new blessings dwelling in the home each day and will win honour in the world.' },
        },
        {
          text: 'सम्वत् अपन सहस्र दश, ऋषि पंचमी दिनेश ।\nपूरण चालीसा भयो, मंगल मूर्ति गणेश ॥',
          meaning: { en: 'The date is given (as printed) as a Samvat year on Rishi Panchami, a Sunday; on it the Chalisa was completed, O Ganesha, embodiment of blessing.' },
        },
      ],
    },
  ],
};
