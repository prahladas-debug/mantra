/**
 * Śrī Sūrya Cālīsā (Bhānu Cālīsā), Hindi/Awadhi, in Devanagari. No author is named in the text.
 *
 * Collated Nov 2026 against three independent typed copies of the widely printed text:
 *   R  drikpanchang.com "Surya Deva Chalisa" (base);  B  bhaktibharat.com "Surya Chalisa";
 *   S  shubhpanchang.com "Surya Chalisa".
 * (The "Jaya jaya jaya ravi deva bhānū" text on dekhopanchang.com is a different composition and is not used.)
 * All three give an opening doha, forty chaupai couplets and a closing doha; the forty are numbered 1-40, the
 * dohas not. R and B agree with each other nearly word for word (B only spells "सहस्त्रांशु" and "रविहैं"
 * differently) and may share a source; S is looser. Readings chosen against R, by majority of R and B:
 *   c16 "छन" (R, B, S); c17 "धन सुत" (R, B; S "छन"); c22 "तिग्म तेजसः" (R, B; S "तिग्मतेजस"); c23 "पूषां ... रहत"
 *   (R, B; S "पूषा ... रहम", a slip); c25 "कटि मंह" (R, B; S "कटि मंह हंस"); c29 "जगबीच करहुं" (R, B; S "जग बीज
 *   करहूँ"); c30 "दद्रु कुष्ठ" (R, B; S "दरिद्र कुष्ट"); c32 "ग्रह गन" (R, B; S omits "ग्रह"); c37 "मधु"
 *   (R, B; S "मध"); closing doha "लहि बिबिध" (R, B; S "लहै विविध"). Spelling only: c20 "वास करहु नित" and c35
 *   "हटत सो भव के भ्रम सों" (word divisions as S); c6 "हांकत", "चढि", "सङ्ग/अङ्ग" as R. Doubts: c24 "उरसर्म सुउदरचन"
 *   (all three) and c16 "जमलहते" are obscure and printed as found; the meanings there are tentative.
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const suryaChalisa: Mantra = {
  id: 'surya-chalisa',
  title: 'श्री सूर्य चालीसा',
  titleEn: 'Sri Surya Chalisa',
  category: 'chalisa',
  order: 33,
  deity: 'Śrī Sūrya',
  source: 'Traditional (also called Bhanu Chalisa; no author named), Hindi/Awadhi',
  summary: 'The Hindi hymn to the Sun, the Bhanu Chalisa: his many names and golden seven-horse chariot, the twelve names of the twelve months, a protective kavacha placing a form of the Sun on each part of the body, and the benefits of praising him: the four aims of life, long life, freedom from disease and fear. Recited on Sundays and at sunrise with an offering of water.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'कनक बदन कुण्डल मकर, मुक्ता माला अङ्ग ।\nपद्मासन स्थित ध्याइए, शंख चक्र के सङ्ग ॥',
          meaning: { en: 'With a golden body, earrings of makara shape and a garland of pearls on the limbs, meditate on the Sun seated on a lotus, with conch and discus.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय सविता जय जयति दिवाकर ।\nसहस्रांशु सप्ताश्व तिमिरहर ॥',
          meaning: { en: 'Victory to Savita, victory to Divakara, thousand-rayed one with seven horses, destroyer of darkness.' },
        },
        {
          n: 2,
          text: 'भानु पतंग मरीची भास्कर ।\nसविता हंस सुनूर विभाकर ॥',
          meaning: { en: 'Bhanu, Patanga, Marichi, Bhaskara, Savita, Hamsa, Sunura, Vibhakara: all are your names.' },
        },
        {
          n: 3,
          text: 'विवस्वान आदित्य विकर्तन ।\nमार्तण्ड हरिरूप विरोचन ॥',
          meaning: { en: 'Vivasvan, Aditya, Vikartana, Martanda, Hariroopa and Virochana.' },
        },
        {
          n: 4,
          text: 'अम्बरमणि खग रवि कहलाते ।\nवेद हिरण्यगर्भ कह गाते ॥',
          meaning: { en: 'You are called the jewel of the sky, the Ravi, the traveller of the heavens; the Vedas sing you as Hiranyagarbha.' },
        },
        {
          n: 5,
          text: 'सहस्रांशु प्रद्योतन, कहिकहि ।\nमुनिगन होत प्रसन्न मोदलहि ॥',
          meaning: { en: 'Saying "Sahasramshu, Pradyotana", the sages are pleased and filled with joy.' },
        },
        {
          n: 6,
          text: 'अरुण सदृश सारथी मनोहर ।\nहांकत हय साता चढि रथ पर ॥',
          meaning: { en: 'Your charioteer is Aruna, lovely as dawn, driving seven horses on your chariot.' },
        },
        {
          n: 7,
          text: 'मंडल की महिमा अति न्यारी ।\nतेज रूप केरी बलिहारी ॥',
          meaning: { en: 'The glory of your disc is wonderful; I am devoted to the radiance of its light.' },
        },
        {
          n: 8,
          text: 'उच्चैःश्रवा सदृश हय जोते ।\nदेखि पुरन्दर लज्जित होते ॥',
          meaning: { en: 'Your horses are like Uchchaihshrava; seeing them, even Indra is ashamed.' },
        },
        {
          n: 9,
          text: 'मित्र मरीचि भानु अरुण भास्कर ।\nसविता सूर्य अर्क खग कलिकर ॥',
          meaning: { en: 'Mitra, Marichi, Bhanu, Aruna, Bhaskara, Savita, Surya, Arka, Khaga, Kalikara.' },
        },
        {
          n: 10,
          text: 'पूषा रवि आदित्य नाम लै ।\nहिरण्यगर्भाय नमः कहिकै ॥',
          meaning: { en: 'Pusha, Ravi, Aditya: saying these names and "Salutation to Hiranyagarbha",' },
        },
        {
          n: 11,
          text: 'द्वादस नाम प्रेम सों गावैं ।\nमस्तक बारह बार नवावैं ॥',
          meaning: { en: 'whoever sings the twelve names with love and bows his head twelve times,' },
        },
        {
          n: 12,
          text: 'चार पदारथ जन सो पावै ।\nदुःख दारिद्र अघ पुंज नसावै ॥',
          meaning: { en: 'gains the four aims of life, and his sorrow, poverty and heaps of sin are destroyed.' },
        },
        {
          n: 13,
          text: 'नमस्कार को चमत्कार यह ।\nविधि हरिहर को कृपासार यह ॥',
          meaning: { en: 'Such is the marvel of this salutation, the grace of Brahma, Vishnu and Shiva together.' },
        },
        {
          n: 14,
          text: 'सेवै भानु तुमहिं मन लाई ।\nअष्टसिद्धि नवनिधि तेहिं पाई ॥',
          meaning: { en: 'Whoever serves the Sun with his whole mind gains the eight powers and nine treasures.' },
        },
        {
          n: 15,
          text: 'बारह नाम उच्चारन करते ।\nसहस जनम के पातक टरते ॥',
          meaning: { en: 'Repeating the twelve names, the sins of a thousand births fall away.' },
        },
        {
          n: 16,
          text: 'उपाख्यान जो करते तवजन ।\nरिपु सों जमलहते सोतेहि छन ॥',
          meaning: { en: 'Those who recount your stories are (it is said) freed that very moment from enemies and from Yama\'s grip.' },
        },
        {
          n: 17,
          text: 'धन सुत जुत परिवार बढतु है ।\nप्रबल मोह को फंद कटतु है ॥',
          meaning: { en: 'His wealth, sons and family grow, and the strong snare of delusion is cut.' },
        },
        {
          n: 18,
          text: 'अर्क शीश को रक्षा करते ।\nरवि ललाट पर नित्य बिहरते ॥',
          meaning: { en: 'Now the protective kavacha: Arka guards the head, Ravi dwells ever on the forehead.' },
        },
        {
          n: 19,
          text: 'सूर्य नेत्र पर नित्य विराजत ।\nकर्ण देस पर दिनकर छाजत ॥',
          meaning: { en: 'Surya is on the eyes, Dinakara adorns the ears.' },
        },
        {
          n: 20,
          text: 'भानु नासिका वास करहु नित ।\nभास्कर करत सदा मुखको हित ॥',
          meaning: { en: 'Bhanu dwells in the nose, Bhaskara always watches over the mouth.' },
        },
        {
          n: 21,
          text: 'ओंठ रहैं पर्जन्य हमारे ।\nरसना बीच तीक्ष्ण बस प्यारे ॥',
          meaning: { en: 'Parjanya is on the lips, and sharp Tikshna on the tongue.' },
        },
        {
          n: 22,
          text: 'कंठ सुवर्ण रेत की शोभा ।\nतिग्म तेजसः कांधे लोभा ॥',
          meaning: { en: 'The neck shines with Suvarna Reta, the shoulders with sharp-rayed Tigmatejas.' },
        },
        {
          n: 23,
          text: 'पूषां बाहू मित्र पीठहिं पर ।\nत्वष्टा वरुण रहत सुउष्णकर ॥',
          meaning: { en: 'Pusha on the arms, Mitra on the back, and hot-rayed Tvashta and Varuna.' },
        },
        {
          n: 24,
          text: 'युगल हाथ पर रक्षा कारन ।\nभानुमान उरसर्म सुउदरचन ॥',
          meaning: { en: 'On both hands for protection, Bhanuman; (the second line is obscure) on the chest and belly as well.' },
        },
        {
          n: 25,
          text: 'बसत नाभि आदित्य मनोहर ।\nकटि मंह, रहत मन मुदभर ॥',
          meaning: { en: 'Aditya dwells beautifully at the navel and, at the waist, rests joyfully in the mind.' },
        },
        {
          n: 26,
          text: 'जंघा गोपति सविता बासा ।\nगुप्त दिवाकर करत हुलासा ॥',
          meaning: { en: 'Gopati and Savita are on the thighs, hidden Divakara rejoices there.' },
        },
        {
          n: 27,
          text: 'विवस्वान पद की रखवारी ।\nबाहर बसते नित तम हारी ॥',
          meaning: { en: 'Vivasvan guards the feet, and the darkness-destroyer dwells outside.' },
        },
        {
          n: 28,
          text: 'सहस्रांशु सर्वांग सम्हारै ।\nरक्षा कवच विचित्र विचारे ॥',
          meaning: { en: 'Sahasramshu looks after the whole body: a wondrous armour of protection.' },
        },
        {
          n: 29,
          text: 'अस जोजन अपने मन माहीं ।\nभय जगबीच करहुं तेहि नाहीं ॥',
          meaning: { en: 'One who holds this thought in his mind has no fear in the world.' },
        },
        {
          n: 30,
          text: 'दद्रु कुष्ठ तेहिं कबहु न व्यापै ।\nजोजन याको मन मंह जापै ॥',
          meaning: { en: 'Skin disease and leprosy never trouble him who holds it in his mind.' },
        },
        {
          n: 31,
          text: 'अंधकार जग का जो हरता ।\nनव प्रकाश से आनन्द भरता ॥',
          meaning: { en: 'He who removes the darkness of the world and fills it with new light, with joy,' },
        },
        {
          n: 32,
          text: 'ग्रह गन ग्रसि न मिटावत जाही ।\nकोटि बार मैं प्रनवौं ताही ॥',
          meaning: { en: 'whom not even the planets can swallow or quench: a million times I bow to him.' },
        },
        {
          n: 33,
          text: 'मंद सदृश सुत जग में जाके ।\nधर्मराज सम अद्भुत बांके ॥',
          meaning: { en: 'His son Shani is slow, and Dharmaraja (Yama) is a wonderful son, a handsome warrior.' },
        },
        {
          n: 34,
          text: 'धन्य-धन्य तुम दिनमनि देवा ।\nकिया करत सुरमुनि नर सेवा ॥',
          meaning: { en: 'Blessed, blessed are you, jewel of the day, whom gods, sages and men serve.' },
        },
        {
          n: 35,
          text: 'भक्ति भावयुत पूर्ण नियम सों ।\nदूर हटत सो भव के भ्रम सों ॥',
          meaning: { en: 'Those who with devotion and full discipline keep away the illusions of worldly life,' },
        },
        {
          n: 36,
          text: 'परम धन्य सों नर तनधारी ।\nहैं प्रसन्न जेहि पर तम हारी ॥',
          meaning: { en: 'that man is supremely blessed, and the darkness-destroyer is pleased with him.' },
        },
        {
          n: 37,
          text: 'अरुण माघ महं सूर्य फाल्गुन ।\nमधु वेदांग नाम रवि उदयन ॥',
          meaning: { en: 'Aruna in Magha, Surya in Phalguna, and in Madhu (Chaitra) the Sun rises as Vedanga;' },
        },
        {
          n: 38,
          text: 'भानु उदय बैसाख गिनावै ।\nज्येष्ठ इन्द्र आषाढ रवि गावै ॥',
          meaning: { en: 'Bhanu rises in Vaishakha, in Jyeshtha Indra, in Ashadha Ravi he sings;' },
        },
        {
          n: 39,
          text: 'यम भादों आश्विन हिमरेता ।\nकातिक होत दिवाकर नेता ॥',
          meaning: { en: 'Yama in Bhadrapada, in Ashvin Himareta, Kartika Divakara the leader;' },
        },
        {
          n: 40,
          text: 'अगहन भिन्न विष्णु हैं पूसहिं ।\nपुरुष नाम रवि हैं मलमासहिं ॥',
          meaning: { en: 'Margashirsha Vishnu, Pausha Purusha, and in the intercalary month Ravi.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'भानु चालीसा प्रेम युत, गावहिं जे नर नित्य ।\nसुख सम्पत्ति लहि बिबिध, होंहिं सदा कृतकृत्य ॥',
          meaning: { en: 'Those who sing this Bhanu Chalisa with love every day gain every kind of wealth and happiness and are always fulfilled.' },
        },
      ],
    },
  ],
};
