/**
 * Śrī Kālī Cālīsā ("Jaya Kālī Jagadamba"), Hindi/Awadhi, in Devanagari. No author is named.
 *
 * Collated Nov 2026 against four typed copies of the widely printed text:
 *   R  drikpanchang.com "Kali Mata Chalisa" (base);  B  bhaktibharat.com "Kali Mata Chalisa";
 *   A  aajtak.in "Maa Kali Chalisa";  S  shubhpanchang.com "Kali Chalisa".
 * R and B agree word for word and may share a source; A and S are separate typings. (The other
 * "Kali Chalisa", "Ari mada māna miṭāvana hārī", on bhaktibharat and shlokam.org, is a different
 * composition and is not used.) All four give two opening dohas, fifty-four chaupai couplets and a
 * closing doha. Despite the name "Chalisa" the chaupai number fifty-four (S says so: "54"), so they are
 * numbered 1-54; the dohas are not. Readings against R: S alone has "दाक्षायणी" (c4, R B A "दाक्षाणायिनी",
 * kept), "कार्तिकी" (c8), "कीन्हैं" (c27), "तब" for "तव" (c32, c37), "तुम्हें" (c45), and a mistyped
 * "त्रिदशेश्वी" (c16); all rejected. Kept against A: "सहस्राक्षि" (c15) (R B S; A "सहस्त्राक्षि"). Spelling only:
 * anusvara for chandrabindu (कहँ/कहं) follows R. Closing doha "शरणागत भक्त है": R and B print "भक्त"
 * in quotes as the poet's signature; the quotes are dropped (S, A). Doubt: "भुजामल" (c34) is printed so
 * in all four (perhaps "भुजामाल"); kept. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const kaliChalisa: Mantra = {
  id: 'kali-chalisa',
  title: 'श्री काली चालीसा',
  titleEn: 'Sri Kali Chalisa',
  category: 'chalisa',
  order: 31,
  deity: 'Śrī Kālī',
  source: 'Traditional (no author named), Hindi/Awadhi',
  summary: 'The Hindi hymn to Kali that opens "Jai Kali Jagadamb": a long litany of her names and forms (Mahavidyas, Durga, Gayatri), her black eighteen-armed form, her slaying of Shumbha, Nishumbha and Raktabija, her fifty-two shakti-pithas, her cosmic form, and a plea for forgiveness and protection. Recited at night, on Amavasya and during Kali Puja and Navaratri.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'जय काली जगदम्ब जय, हरनि ओघ अघ पुंज ।\nवास करहु निज दास के, निशदिन हृदय निकुंज ॥',
          meaning: { en: 'Victory to Kali, mother of the world, who sweeps away the heap of sin; make your home in the heart-grove of your servant, day and night.' },
        },
        {
          text: 'जयति कपाली कालिका, कंकाली सुख दानि ।\nकृपा करहु वरदायिनी, निज सेवक अनुमानि ॥',
          meaning: { en: 'Victory to Kapali Kalika, Kankali, giver of joy; show grace, giver of boons, and count your servant as your own.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय जय जय काली कंकाली ।\nजय कपालिनी, जयति कराली ॥',
          meaning: { en: 'Victory, victory, victory to Kali Kankali, to Kapalini and the fierce Karali.' },
        },
        {
          n: 2,
          text: 'शंकर प्रिया, अपर्णा, अम्बा ।\nजय कपर्दिनी, जय जगदम्बा ॥',
          meaning: { en: 'Shankara\'s beloved, Aparna, Amba, Kapardini and Jagadamba, victory to you.' },
        },
        {
          n: 3,
          text: 'आर्या, हला, अम्बिका, माया ।\nकात्यायनी उमा जगजाया ॥',
          meaning: { en: 'Arya, Hala, Ambika, Maya, Katyayani, Uma, mother of the world.' },
        },
        {
          n: 4,
          text: 'गिरिजा गौरी दुर्गा चण्डी ।\nदाक्षाणायिनी शाम्भवी प्रचंडी ॥',
          meaning: { en: 'Girija, Gauri, Durga, Chandi, Dakshayani, Shambhavi and the fierce Prachandi.' },
        },
        {
          n: 5,
          text: 'पार्वती मंगला भवानी ।\nविश्वकारिणी सती मृडानी ॥',
          meaning: { en: 'Parvati, Mangala, Bhavani, creator of the universe, Sati and Mridani.' },
        },
        {
          n: 6,
          text: 'सर्वमंगला शैल नन्दिनी ।\nहेमवती तुम जगत वन्दिनी ॥',
          meaning: { en: 'All-auspicious Sarvamangala, daughter of the mountain, Hemavati, adored by the world.' },
        },
        {
          n: 7,
          text: 'ब्रह्मचारिणी कालरात्रि जय ।\nमहारात्रि जय मोहरात्रि जय ॥',
          meaning: { en: 'Brahmacharini, Kalaratri, Maharatri, Moharatri, victory to you.' },
        },
        {
          n: 8,
          text: 'तुम त्रिमूर्ति रोहिणी कालिका ।\nकूष्माण्डा कार्तिका चण्डिका ॥',
          meaning: { en: 'You are the three-formed one, Rohini, Kalika, Kushmanda, Kartika and Chandika.' },
        },
        {
          n: 9,
          text: 'तारा भुवनेश्वरी अनन्या ।\nतुम्हीं छिन्नमस्ता शुचिधन्या ॥',
          meaning: { en: 'You are Tara, Bhuvaneshvari, Ananya, Chhinnamasta and the pure and blessed Shuchidhanya.' },
        },
        {
          n: 10,
          text: 'धूमावती षोडशी माता ।\nबगला मातंगी विख्याता ॥',
          meaning: { en: 'Dhumavati, Shodashi, Mother, Bagala and the famed Matangi.' },
        },
        {
          n: 11,
          text: 'तुम भैरवी मातु तुम कमला ।\nरक्तदन्तिका कीरति अमला ॥',
          meaning: { en: 'You are Bhairavi and Kamala, Raktadantika of spotless fame.' },
        },
        {
          n: 12,
          text: 'शाकम्भरी कौशिकी भीमा ।\nमहातमा अग जग की सीमा ॥',
          meaning: { en: 'Shakambhari, Kaushiki, Bhima, great-souled, the limit of the whole moving and unmoving world.' },
        },
        {
          n: 13,
          text: 'चन्द्रघण्टिका तुम सावित्री ।\nब्रह्मवादिनी मां गायत्री ॥',
          meaning: { en: 'Chandraghantika, Savitri, Brahmavadini and Gayatri.' },
        },
        {
          n: 14,
          text: 'रूद्राणी तुम कृष्ण पिंगला ।\nअग्निज्वाला तुम सर्वमंगला ॥',
          meaning: { en: 'Rudrani, dark-tawny Krishna-Pingala, Agnijvala and all-auspicious Sarvamangala.' },
        },
        {
          n: 15,
          text: 'मेघस्वना तपस्विनि योगिनी ।\nसहस्राक्षि तुम अगजग भोगिनी ॥',
          meaning: { en: 'Meghasvana, ascetic Tapasvini, Yogini, thousand-eyed, enjoyer of the whole world.' },
        },
        {
          n: 16,
          text: 'जलोदरी सरस्वती डाकिनी ।\nत्रिदशेश्वरी अजेय लाकिनी ॥',
          meaning: { en: 'Jalodari, Sarasvati, Dakini, Tridasheshvari and the unconquered Lakini.' },
        },
        {
          n: 17,
          text: 'पुष्टि तुष्टि धृति स्मृति शिव दूती ।\nकामाक्षी लज्जा आहूती ॥',
          meaning: { en: 'Pushti, Tushti, Dhriti and Smriti, Shiva\'s messenger, Kamakshi, Lajja and Ahuti.' },
        },
        {
          n: 18,
          text: 'महोदरी कामाक्षि हारिणी ।\nविनायकी श्रुति महा शाकिनी ॥',
          meaning: { en: 'Mahodari, Kamakshi, Harini, Vinayaki, Shruti and Maha Shakini.' },
        },
        {
          n: 19,
          text: 'अजा कर्ममोही ब्रह्माणी ।\nधात्री वाराही शर्वाणी ॥',
          meaning: { en: 'Aja, Karmamohi, Brahmani, Dhatri, Varahi and Sharvani.' },
        },
        {
          n: 20,
          text: 'स्कन्द मातु तुम सिंह वाहिनी ।\nमातु सुभद्रा रहहु दाहिनी ॥',
          meaning: { en: 'Mother of Skanda, rider of the lion, gracious Subhadra, stay on my right hand.' },
        },
        {
          n: 21,
          text: 'नाम रूप गुण अमित तुम्हारे ।\nशेष शारदा बरणत हारे ॥',
          meaning: { en: 'Your names, forms and qualities are beyond measure; even Shesha and Sharada cannot finish telling them.' },
        },
        {
          n: 22,
          text: 'तनु छवि श्यामवर्ण तव माता ।\nनाम कालिका जग विख्याता ॥',
          meaning: { en: 'Your body is dark in hue, mother, and your name Kalika is known to all the world.' },
        },
        {
          n: 23,
          text: 'अष्टादश तब भुजा मनोहर ।\nतिनमहँ अस्त्र विराजत सुन्दर ॥',
          meaning: { en: 'Your eighteen arms are lovely, and fair weapons shine in them.' },
        },
        {
          n: 24,
          text: 'शंख चक्र अरू गदा सुहावन ।\nपरिघ भुशण्डी घण्टा पावन ॥',
          meaning: { en: 'Conch, discus, mace, parigha, bhushundi and a sacred bell are in your hands.' },
        },
        {
          n: 25,
          text: 'शूल बज्र धनुबाण उठाए ।\nनिशिचर कुल सब मारि गिराए ॥',
          meaning: { en: 'With spear, thunderbolt, bow and arrow you struck down whole clans of demons.' },
        },
        {
          n: 26,
          text: 'शुंभ निशुंभ दैत्य संहारे ।\nरक्तबीज के प्राण निकारे ॥',
          meaning: { en: 'You destroyed the demons Shumbha and Nishumbha and took the life of Raktabija.' },
        },
        {
          n: 27,
          text: 'चौंसठ योगिनी नाचत संगा ।\nमद्यपान कीन्हैउ रण गंगा ॥',
          meaning: { en: 'Sixty-four yoginis danced with you and drank the battlefield like a river of wine.' },
        },
        {
          n: 28,
          text: 'कटि किंकिणी मधुर नूपुर धुनि ।\nदैत्यवंश कांपत जेहि सुनि-सुनि ॥',
          meaning: { en: 'The sweet jingle of your waist-bells and anklets makes the demon line tremble whenever it hears them.' },
        },
        {
          n: 29,
          text: 'कर खप्पर त्रिशूल भयकारी ।\nअहै सदा सन्तन सुखकारी ॥',
          meaning: { en: 'In your hands are the skull-bowl and the fearsome trident, yet you ever bring comfort to the good.' },
        },
        {
          n: 30,
          text: 'शव आरूढ नृत्य तुम साजा ।\nबजत मृदंग भेरी के बाजा ॥',
          meaning: { en: 'You dance on a corpse, and the drum and kettle-drum beat for you.' },
        },
        {
          n: 31,
          text: 'रक्त पान अरिदल को कीन्हा ।\nप्राण तजेउ जो तुम्हिं न चीन्हा ॥',
          meaning: { en: 'You drank the blood of the enemy host; those who did not know you gave up their lives.' },
        },
        {
          n: 32,
          text: 'लपलपाति जिव्हा तव माता ।\nभक्तन सुख दुष्टन दुःख दाता ॥',
          meaning: { en: 'Your tongue lolls, mother: a giver of joy to devotees and sorrow to the wicked.' },
        },
        {
          n: 33,
          text: 'लसत भाल सेंदुर को टीको ।\nबिखरे केश रूप अति नीको ॥',
          meaning: { en: 'Vermilion shines on your brow, your hair flies loose, and you are exceedingly beautiful.' },
        },
        {
          n: 34,
          text: 'मुंडमाल गल अतिशय सोहत ।\nभुजामल किंकण मनमोहन ॥',
          meaning: { en: 'A garland of skulls adorns your neck, and your arm-ornaments and bangles are charming.' },
        },
        {
          n: 35,
          text: 'प्रलय नृत्य तुम करहु भवानी ।\nजगदम्बा कहि वेद बखानी ॥',
          meaning: { en: 'You dance the dance of dissolution, Bhavani; the Vedas call you Jagadamba.' },
        },
        {
          n: 36,
          text: 'तुम मशान वासिनी कराला ।\nभजत तुरत काटहु भवजाला ॥',
          meaning: { en: 'You are fierce Karali, dweller in the cremation ground; worshipped, you cut the net of rebirth at once.' },
        },
        {
          n: 37,
          text: 'बावन शक्ति पीठ तव सुन्दर ।\nजहाँ बिराजत विविध रूप धर ॥',
          meaning: { en: 'Your fifty-two shakti-seats are beautiful, where you dwell in many forms.' },
        },
        {
          n: 38,
          text: 'विन्धवासिनी कहूँ बडाई ।\nकहँ कालिका रूप सुहाई ॥',
          meaning: { en: 'Somewhere as Vindhyavasini is your praise sung, somewhere your Kali form delights.' },
        },
        {
          n: 39,
          text: 'शाकम्भरी बनी कहँ ज्वाला ।\nमहिषासुर मर्दिनी कराला ॥',
          meaning: { en: 'Somewhere Shakambhari, somewhere Jvala, and Mahishasuramardini the terrible.' },
        },
        {
          n: 40,
          text: 'कामाख्या तव नाम मनोहर ।\nपुजवहिं मनोकामना द्रुततर ॥',
          meaning: { en: 'Kamakhya is your lovely name, where wishes are quickly fulfilled.' },
        },
        {
          n: 41,
          text: 'चंड मुंड वध छिन महं करेउ ।\nदेवन के उर आनन्द भरेउ ॥',
          meaning: { en: 'You killed Chanda and Munda in a moment and filled the gods\' hearts with joy.' },
        },
        {
          n: 42,
          text: 'सर्व व्यापिनी तुम माँ तारा ।\nअरिदल दलन लेहु अवतारा ॥',
          meaning: { en: 'You fill all things, Mother Tara; take birth again to destroy the enemy host.' },
        },
        {
          n: 43,
          text: 'खलबल मचत सुनत हुँकारी ।\nअगजग व्यापक देह तुम्हारी ॥',
          meaning: { en: 'At your roar the whole world is shaken; your body pervades earth and sky.' },
        },
        {
          n: 44,
          text: 'तुम विराट रूपा गुणखानी ।\nविश्व स्वरूपा तुम महारानी ॥',
          meaning: { en: 'You are the cosmic form, mine of qualities, the form of the universe, the great queen.' },
        },
        {
          n: 45,
          text: 'उत्पत्ति स्थिति लय तुम्हरे कारण ।\nकरहु दास के दोष निवारण ॥',
          meaning: { en: 'Creation, upkeep and dissolution come from you; remove your servant\'s faults.' },
        },
        {
          n: 46,
          text: 'माँ उर वास करहू तुम अंबा ।\nसदा दीन जन की अवलंबा ॥',
          meaning: { en: 'Mother, make your home in my heart, Amba, support of the poor and lowly.' },
        },
        {
          n: 47,
          text: 'तुम्हारो ध्यान धरै जो कोई ।\nता कहँ भीति कतहुँ नहिं होई ॥',
          meaning: { en: 'Whoever meditates on you has no fear anywhere.' },
        },
        {
          n: 48,
          text: 'विश्वरूप तुम आदि भवानी ।\nमहिमा वेद पुराण बखानी ॥',
          meaning: { en: 'You are the first, Bhavani, in the form of the universe; the Vedas and Puranas tell your greatness.' },
        },
        {
          n: 49,
          text: 'अति अपार तव नाम प्रभावा ।\nजपत न रहन रंच दुःख दावा ॥',
          meaning: { en: 'The power of your name is boundless; by repeating it not a trace of sorrow remains.' },
        },
        {
          n: 50,
          text: 'महाकालिका जय कल्याणी ।\nजयति सदा सेवक सुखदानी ॥',
          meaning: { en: 'Mahakalika, auspicious one, victory to you, ever the giver of joy to your servants.' },
        },
        {
          n: 51,
          text: 'तुम अनन्त औदार्य विभूषण ।\nकीजिए कृपा क्षमिये सब दूषण ॥',
          meaning: { en: 'You are adorned with boundless generosity; be gracious and forgive every fault.' },
        },
        {
          n: 52,
          text: 'दास जानि निज दया दिखावहु ।\nसुत अनुमानित सहित अपनावहु ॥',
          meaning: { en: 'Knowing me as your servant, show kindness; count me as your child and take me in.' },
        },
        {
          n: 53,
          text: 'जननी तुम सेवक प्रति पाली ।\nकरहु कृपा सब विधि माँ काली ॥',
          meaning: { en: 'Mother, you tend your servants; be gracious to me in every way, Mother Kali.' },
        },
        {
          n: 54,
          text: 'पाठ करै चालीसा जोई ।\nतापर कृपा तुम्हारी होई ॥',
          meaning: { en: 'Whoever recites this chalisa receives your grace.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'जय तारा, जय दक्षिणा, कलावती सुखमूल ।\nशरणागत भक्त है, रहहु सदा अनुकूल ॥',
          meaning: { en: 'Victory to Tara, Dakshina and Kalavati, root of happiness; your devotee has taken refuge, so remain ever kind to him.' },
        },
      ],
    },
  ],
};
