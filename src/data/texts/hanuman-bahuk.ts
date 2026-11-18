/**
 * Hanumān Bāhuka, the forty-four chhands of Tulasīdāsa to Hanumān (Awadhi/Braj), as printed by Gita Press (2 chhappay, 1 jhulna, 5
 * savaiya and 36 ghanakshari), in Devanagari. Collated Nov 2026; not checked against a printed copy.
 *
 * Witnesses (three independent typed copies): K = kavitakosh.org "हनुमान बाहुक" (base for the line division and spelling; it is
 * the Gita Press text with a Hindi paraphrase); B = bhaktibharat.com "श्री हनुमान बाहुक" (with drikpanchang.com, which gives
 * the same wording and is evidently a copy of it, though its conversion has turned every nukta ड़/ढ़ into 'डए'/'ढए'; bhaktikatha.com
 * and bhaktihome.com repeat B and K respectively, so they were read but are not counted); W = sampurnchalisa.com "Hanuman Bahuk"
 * (Gita Press orthography, with postpositions joined to the noun). All 44 chhands and their order agree in the three. Nukta letters
 * are written without the dot; K's spelling with ब is kept (B writes व in many words, W a mixture).
 *
 * Readings chosen where they differ (verse number, reading, against): 5 "केतु" (W; K, B "केथू"; केतु, the banner, is the only
 * reading that makes sense on Arjuna's chariot); 17 "जे उर घाले" (B, W; K "घर"); 18 "रन-केहरि" (W; K, B "रनि"), and K's exclamation
 * mark after "बानर बाज" dropped; 28 "बाल केलि" (W; K, B "बालि केलि", which would be Vali, not the Sun-and-Rahu episode the line is
 * about) and "साम दाम भेद" (B, W; K "दान"); 31 "समत्थ" (W; K, B "समत्व", a shared slip against the rhyme); 34 "आपनो" (B, W; K "आपनी");
 * 38 "सकल सरीर पीरमई" (W; K, B drop "सरीर", leaving the line a syllable short) and "बूड़े गोखुरनि" (W; K, B "बूढ़े"); 9 "विघटन" and
 * 11 "सुदान" (K, W; B "निघटन", "दुदान"); 14 "सीताराम के" (K, B; W "सीतानाथके"); 16 "तो" (K, B; W "ते"); 32 "बाम" (K, W; B "बाग");
 * 33 "तोसो" (K, B; W "तोसे"); 39 "जगजाप" (K, W; B "जप जाग"). Pure spacing and hyphenation differences were settled to K. The
 * word-breaks in "मवा से", "छवा से", "लवा-से" follow K and W, and the rarer words (कनिगर, डाबरे, दमानक, कढोरि) are left as all three give them.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const hanumanBahuk: Mantra = {
  id: 'hanuman-bahuk',
  title: 'हनुमान बाहुक',
  titleEn: 'Hanuman Bahuk (Tulsidas)',
  category: 'chalisa',
  order: 60,
  deity: 'Hanumān',
  source: 'Gosvāmī Tulasīdāsa, Hanumān Bāhuka (Awadhi/Braj)',
  summary: 'Tulsidas\'s forty-four chhands to Hanuman, composed, as tradition says, when a terrible pain seized his arm (bahu). They praise Hanuman\'s great deeds, from the childhood leap at the Sun to the burning of Lanka and the carrying of the Drona mountain, and turn into a personal plea to heal his body, in chhappay, jhulna, ghanakshari and savaiya metres.',
  difficulty: 'advanced',
  completeness: 'complete',
  sections: [
    {
      title: 'छप्पय',
      titleEn: 'Chhappay',
      note: 'Chhands 1 to 2.',
      verses: [
        {
          n: 1,
          text: 'सिंधु-तरन, सिय-सोच-हरन, रबि-बाल-बरन तनु ।\nभुज बिसाल, मूरति कराल कालहुको काल जनु ॥\nगहन-दहन-निरदहन लंक निःसंक, बंक-भुव ।\nजातुधान-बलवान-मान-मद-दवन पवनसुव ॥\nकह तुलसिदास सेवत सुलभ सेवक हित सन्तत निकट ।\nगुन-गनत, नमत, सुमिरत, जपत समन सकल-संकट-विकट ॥',
          meaning: { en: 'He leaps the ocean, removes Sita\'s grief, and has the colour of the young sun; his arms are long and his form so fearsome that he seems the Death of Death. He fearlessly burned the unburnable Lanka and broke the pride of the strong demons, this son of the Wind. Says Tulsidas: he is easy to serve and always near his servants, and praising, bowing to, remembering and repeating his name ends every terrible trouble.' },
        },
        {
          n: 2,
          text: 'स्वर्न-सैल-संकास कोटि-रबि-तरुन-तेज-घन ।\nउर बिसाल भुज-दंड चंड नख-बज्र बज्र-तन ॥\nपिंग नयन, भृकुटी कराल रसना दसनानन ।\nकपिस केस, करकस लँगूर, खल-दल बल भानन ॥\nकह तुलसिदास बस जासु उर मारुतसुत मूरति बिकट ।\nसंताप पाप तेहि पुरुष पहिं सपनेहुँ नहिं आवत निकट ॥',
          meaning: { en: 'His body is like a golden mountain, dense with the glare of millions of young suns; broad chest, mighty arms, nails fierce as thunderbolts and a body hard as the thunderbolt. His eyes are tawny, brows knitted, tongue and teeth terrible, hair tawny and tail rough, the breaker of the strength of the wicked. Says Tulsidas: in whoever\'s heart this fearsome form of the Wind\'s son lives, grief and sin do not come near him even in a dream.' },
        },
      ],
    },
    {
      title: 'झूलना',
      titleEn: 'Jhulna',
      note: 'Chhand 3.',
      verses: [
        {
          n: 3,
          text: 'पञ्चमुख-छमुख-भृगु मुख्य भट असुर सुर, सर्व-सरि-समर समरत्थ सूरो ।\nबाँकुरो बीर बिरुदैत बिरुदावली, बेद बंदी बदत पैजपूरो ॥\nजासु गुनगाथ रघुनाथ कह, जासुबल, बिपुल-जल-भरित जग-जलधि झूरो ।\nदुवन-दल-दमनको कौन तुलसीस है, पवन को पूत रजपूत रुरो ॥',
          meaning: { en: 'Among Shiva, Kartikeya, Bhrigu and the other great warriors of gods and demons, who is the true champion in battle? The proud, handsome hero whose vow the Vedas, like bards, proclaim fulfilled. Raghunath himself tells his glory, and for his sake the vast ocean of the world shrank like a puddle. Who else crushes the enemy host? Tulsi\'s lord, the son of the Wind, the splendid warrior.' },
        },
      ],
    },
    {
      title: 'घनाक्षरी',
      titleEn: 'Ghanakshari',
      note: 'Chhands 4 to 15.',
      verses: [
        {
          n: 4,
          text: 'भानुसों पढन हनुमान गये भानु मन-अनुमानि सिसु-केलि कियो फेरफार सो ।\nपाछिले पगनि गम गगन मगन-मन, क्रम को न भ्रम, कपि बालक बिहार सो ॥\nकौतुक बिलोकि लोकपाल हरि हर बिधि, लोचननि चकाचौंधी चित्तनि खभार सो ।\nबल कैंधौं बीर-रस धीरज कै, साहस कै, तुलसी सरीर धरे सबनि को सार सो ॥',
          meaning: { en: 'Hanuman went to study under the Sun; the Sun, taking him for a child at play, changed his ways. Stepping backwards through the sky with an untroubled mind, careless of the order of things, the little monkey went on with his games. Seeing the sport, the guardians of the worlds, Vishnu, Shiva and Brahma were dazzled and uneasy. Was it strength, heroic spirit, steadiness or daring, or the essence of all of them taken in a body?' },
        },
        {
          n: 5,
          text: 'भारत में पारथ के रथ केतु कपिराज, गाज्यो सुनि कुरुराज दल हल बल भो ।\nकह्यो द्रोन भीषम समीर सुत महाबीर, बीर-रस-बारि-निधि जाको बल जल भो ॥\nबानर सुभाय बाल केलि भूमि भानु लागि, फलँग फलाँग हूँतें घाटि नभतल भो ।\nनाई-नाई माथ जोरि-जोरि हाथ जोधा जोहैं, हनुमान देखे जगजीवन को फल भो ॥',
          meaning: { en: 'On Arjuna\'s chariot in the Mahabharata the Monkey-king on the banner roared, and the Kaurava army shook at the sound. Drona and Bhishma said: this is the great hero, son of the Wind, whose strength is the water of the ocean of valour. By his monkey nature, in boyhood play, the whole sky was too small for his leaps to reach the Sun. Warriors with folded hands and bowed heads looked on Hanuman and felt that seeing him was the fruit of life.' },
        },
        {
          n: 6,
          text: 'गो-पद पयोधि करि होलिका ज्यों लाई लंक, निपट निसंक परपुर गलबल भो ।\nद्रोन-सो पहार लियो ख्याल ही उखारि कर, कंदुक-ज्यों कपि खेल बेल कैसो फल भो ॥\nसंकट समाज असमंजस भो रामराज, काज जुग पूगनि को करतल पल भो ।\nसाहसी समत्थ तुलसी को नाह जाकी बाँह, लोकपाल पालन को फिर थिर थल भो ॥',
          meaning: { en: 'He made the ocean a cow\'s hoofprint, burned Lanka like a Holi bonfire, fearless, and threw the enemy city into uproar. He plucked up the Drona mountain in play and tossed it like a ball; for him such feats were as easy as a bel fruit. When the court of Rama was in trouble, the work of two ages was done in a moment. Tulsi\'s mighty, capable lord is the one on whose arm the world-guardians stand firm again.' },
        },
        {
          n: 7,
          text: 'कमठ की पीठि जाके गोडनि की गाडैं मानो, नाप के भाजन भरि जल निधि जल भो ।\nजातुधान-दावन परावन को दुर्ग भयो, महामीन बास तिमि तोमनि को थल भो ॥\nकुम्भकरन-रावन पयोद-नाद-ईंधन को, तुलसी प्रताप जाको प्रबल अनल भो ।\nभीषम कहत मेरे अनुमान हनुमान, सारिखो त्रिकाल न त्रिलोक महाबल भो ॥',
          meaning: { en: 'His leaps pressed pits into the tortoise\'s back, and the ocean\'s waters filled them like measuring bowls. For the destruction and scattering of demons he became a fortress, and the great fish and sea creatures found a home. To Kumbhakarna, Ravana and Meghanada he was the fire and they the fuel. Bhishma says: to my mind, Hanuman, there never was, in the three times and three worlds, any equal in great strength.' },
        },
        {
          n: 8,
          text: 'दूत रामराय को, सपूत पूत पौनको, तू अंजनी को नन्दन प्रताप भूरि भानु सो ।\nसीय-सोच-समन, दुरित दोष दमन, सरन आये अवन, लखन प्रिय प्रान सो ॥\nदसमुख दुसह दरिद्र दरिबे को भयो, प्रकट तिलोक ओक तुलसी निधान सो ।\nज्ञान गुनवान बलवान सेवा सावधान, साहेब सुजान उर आनु हनुमान सो ॥',
          meaning: { en: 'You are Rama\'s messenger, the Wind\'s worthy son, Anjani\'s joy, radiant as a sun. You remove Sita\'s worry, destroy sin and fault, protect those who take refuge, and are dear as life to Lakshmana. You appeared in the three worlds to wipe out the ten-headed demon of Tulsi\'s poverty. O people, keep in your heart the wise lord Hanuman, who is learned, virtuous, strong and attentive in service.' },
        },
        {
          n: 9,
          text: 'दवन-दुवन-दल भुवन-बिदित बल, बेद जस गावत बिबुध बंदीछोर को ।\nपाप-ताप-तिमिर तुहिन-विघटन-पटु, सेवक-सरोरुह सुखद भानु भोर को ॥\nलोक-परलोक तें बिसोक सपने न सोक, तुलसी के हिये है भरोसो एक ओर को ।\nराम को दुलारो दास बामदेव को निवास, नाम कलि-कामतरु केसरी-किसोर को ॥',
          meaning: { en: 'He crushes enemy hosts, his strength is known in the world, and the Vedas and gods praise him as the liberator of the captive. He melts the cold darkness of sin and suffering, and is a sunrise to the lotus of his servants. In this world and the next he is free from care, grief does not touch him even in dreams, and Tulsi has trust in him alone. He is Rama\'s beloved servant and Shiva\'s dwelling, and the name of Kesari\'s son is a wishing tree in the Kali age.' },
        },
        {
          n: 10,
          text: 'महाबल-सीम महाभीम महाबान इत, महाबीर बिदित बरायो रघुबीर को ।\nकुलिस-कठोर तनु जोरपरै रोर रन, करुना-कलित मन धारमिक धीर को ॥\nदुर्जन को कालसो कराल पाल सज्जन को, सुमिरे हरनहार तुलसी की पीर को ।\nसीय-सुख-दायक दुलारो रघुनायक को, सेवक सहायक है साहसी समीर को ॥',
          meaning: { en: 'He is the limit of great strength, terrible and mighty, the hero Rama chose and the world knows. His body is hard as a thunderbolt and he roars in battle, yet his heart is full of compassion, righteous and steady. To the wicked he is a fearful Death, to the good a guardian, and remembering him takes away Tulsi\'s pain. He gives joy to Sita, is the beloved of Rama, helps his servants, and is the bold son of the Wind.' },
        },
        {
          n: 11,
          text: 'रचिबे को बिधि जैसे, पालिबे को हरि, हर मीच मारिबे को, ज्याईबे को सुधापान भो ।\nधरिबे को धरनि, तरनि तम दलिबे को, सोखिबे कृसानु, पोषिबे को हिम-भानु भो ॥\nखल-दुःख दोषिबे को, जन-परितोषिबे को, माँगिबो मलीनता को मोदक सुदान भो ।\nआरत की आरति निवारिबे को तिहुँ पुर, तुलसी को साहेब हठीलो हनुमान भो ॥',
          meaning: { en: 'To create he is like Brahma, to protect like Vishnu, to destroy like Shiva, to revive like the drink of nectar; to bear the load he is the earth, to scatter darkness the sun, to dry up the fire, to nourish the moon and sun. He torments the wicked and satisfies his devotees, and for the stain of begging he is the sweet gift. To end the sorrow of the afflicted in the three worlds, Tulsi\'s stubborn lord has become Hanuman.' },
        },
        {
          n: 12,
          text: 'सेवक स्योकाई जानि जानकीस मानै कानि, सानुकूल सूलपानि नवै नाथ नाँक को ।\nदेवी देव दानव दयावने ह्वै जोरैं हाथ, बापुरे बराक कहा और राजा राँक को ॥\nजागत सोवत बैठे बागत बिनोद मोद, ताके जो अनर्थ सो समर्थ एक आँक को ।\nसब दिन रुरो परै पूरो जहाँ-तहाँ ताहि, जाके है भरोसो हिये हनुमान हाँक को ॥',
          meaning: { en: 'Knowing the servant\'s devotion, the lord of Janaki feels obliged, Shiva is favourable, and the lord of heaven bows. Gods, demons and goddesses, made gentle, join their hands; what are poor kings and beggars? Waking, sleeping, sitting, strolling, in play and joy, who has the power to wish harm to him? Always and everywhere it goes well for the one whose heart trusts the roar of Hanuman.' },
        },
        {
          n: 13,
          text: 'सानुग सगौरि सानुकूल सूलपानि ताहि, लोकपाल सकल लखन राम जानकी ।\nलोक परलोक को बिसोक सो तिलोक ताहि, तुलसी तमाइ कहा काहू बीर आनकी ॥\nकेसरी किसोर बन्दीछोर के नेवाजे सब, कीरति बिमल कपि करुनानिधान की ।\nबालक-ज्यों पालिहैं कृपालु मुनि सिद्ध ताको, जाके हिये हुलसति हाँक हनुमान की ॥',
          meaning: { en: 'With his followers and Gauri, Shiva looks kindly on him, as do all the world-guardians, Lakshmana, Rama and Janaki. Free from sorrow in this world and the next, what craving can Tulsi have for another\'s strength? Because Hanuman, Kesari\'s son, the liberator of captives, is pleased, kind sages and siddhas nurture such a person like a child. Such is the spotless fame of that ocean of compassion, in whose heart his call rings.' },
        },
        {
          n: 14,
          text: 'करुनानिधान, बलबुद्धि के निधान मोद-महिमा निधान, गुन-ज्ञान के निधान हौ ।\nबामदेव-रुप भूप राम के सनेही, नाम लेत-देत अर्थ धर्म काम निरबान हौ ॥\nआपने प्रभाव सीताराम के सुभाव सील, लोक-बेद-बिधि के बिदूष हनुमान हौ ।\nमन की बचन की करम की तिहूँ प्रकार, तुलसी तिहारो तुम साहेब सुजान हौ ॥',
          meaning: { en: 'You are a treasure of compassion, of strength and wisdom, of joy and greatness, of virtue and knowledge. You are the form of Shiva and a friend of King Rama; by taking your name one gains wealth, duty, desire and liberation. By your own glory, with the nature and goodness of Sita and Rama, you know the ways of the world and the Vedas. In mind, speech and deed, in all three ways, Tulsi is yours and you are his wise lord.' },
        },
        {
          n: 15,
          text: 'मन को अगम, तन सुगम किये कपीस, काज महाराज के समाज साज साजे हैं ।\nदेव-बंदी छोर रनरोर केसरी किसोर, जुग जुग जग तेरे बिरद बिराजे हैं ॥\nबीर बरजोर, घटि जोर तुलसी की ओर, सुनि सकुचाने साधु खल गन गाजे हैं ।\nबिगरी सँवार अंजनी कुमार कीजे मोहिं, जैसे होत आये हनुमान के निवाजे हैं ॥',
          meaning: { en: 'O lord of monkeys, you made easy in body what was beyond the mind, and arranged everything for King Rama\'s work. Liberator of the gods from prison, uproarious in battle, Kesari\'s son, your fame has shone through age after age. Mighty hero, has your strength failed toward Tulsi? Hearing it, the good are embarrassed and the wicked crowd and rejoice. Set right my spoiled affairs, son of Anjani, as the favoured of Hanuman always have been.' },
        },
      ],
    },
    {
      title: 'सवैया',
      titleEn: 'Savaiya',
      note: 'Chhands 16 to 19.',
      verses: [
        {
          n: 16,
          text: 'जान सिरोमनि हौ हनुमान सदा जन के मन बास तिहारो ।\nढारो बिगारो मैं काको कहा केहि कारन खीझत हौं तो तिहारो ॥\nसाहेब सेवक नाते तो हातो कियो सो तहाँ तुलसी को न चारो ।\nदोष सुनाये तें आगेहुँ को होशियार ह्वैं हों मन तौ हिय हारो ॥',
          meaning: { en: 'Crest-jewel of the wise, Hanuman, you dwell for ever in the hearts of your devotees. What have I spoiled and for whom, why am I petulant, all of it is yours. If in the bond of lord and servant you have let me go, Tulsi has no remedy there. I will be careful in future when my faults are told, but my heart has lost courage.' },
        },
        {
          n: 17,
          text: 'तेरे थपे उथपै न महेस, थपै थिरको कपि जे उर घाले ।\nतेरे निवाजे गरीब निवाज बिराजत बैरिन के उर साले ॥\nसंकट सोच सबै तुलसी लिये नाम फटै मकरी के से जाले ।\nबूढ भये, बलि, मेरिहि बार, कि हारि परे बहुतै नत पाले ॥',
          meaning: { en: 'Whom you set up, even Shiva cannot unseat; whoever you have established stays firm and pricks his enemies\' hearts. Because you favour them, the troubles of those who take your name tear like a spider\'s web. I have grown old, I offer myself to you; is it only in my turn that you have tired of the many you have cherished?' },
        },
        {
          n: 18,
          text: 'सिंधु तरे, बडे बीर दले खल, जारे हैं लंक से बंक मवा से ।\nतैं रन-केहरि केहरि के बिदले अरि-कुंजर छैल छवा से ॥\nतोसों समत्थ सुसाहेब सेई सहै तुलसी दुख दोष दवा से ।\nबानर बाज, बढे खल-खेचर, लीजत क्यों न लपेटि लवा-से ॥',
          meaning: { en: 'You crossed the sea, struck down mighty demons and burned Lanka, a fortress strong as any. You, lion of battle, tore apart the enemy elephants like cubs. A master as capable as you is the one whose servant can bear this much fire of pain, Tulsi. O hawk among monkeys, many evil birds have multiplied; why do you not seize them as a hawk seizes quails?' },
        },
        {
          n: 19,
          text: 'अच्छ-विमर्दन कानन-भानि दसानन आनन भा न निहारो ।\nबारिदनाद अकंपन कुंभकरन्न-से कुञ्जर केहरि-बारो ॥\nराम-प्रताप-हुतासन, कच्छ, बिपच्छ, समीर समीर-दुलारो ।\nपाप-तें साप-तें ताप तिहूँ-तें सदा तुलसी कहँ सो रखवारो ॥',
          meaning: { en: 'You crushed Aksha, wrecked the garden, and Ravana\'s face lost its glow when he saw you. Indrajit, Akampana and Kumbhakarna were elephants, and you were the lion hunting them. Rama\'s glory was the fire, the enemy was dry fuel, and the Wind\'s son was the wind that fanned it. From sin, from curses, from the three kinds of affliction, he is Tulsi\'s guard for ever.' },
        },
      ],
    },
    {
      title: 'घनाक्षरी',
      titleEn: 'Ghanakshari',
      note: 'Chhands 20 to 35.',
      verses: [
        {
          n: 20,
          text: 'जानत जहान हनुमान को निवाज्यौ जन, मन अनुमानि बलि, बोल न बिसारिये ।\nसेवा-जोग तुलसी कबहुँ कहा चूक परी, साहेब सुभाव कपि साहिबी सँभारिये ॥\nअपराधी जानि कीजै सासति सहस भाँति, मोदक मरै जो ताहि माहुर न मारिये ।\nसाहसी समीर के दुलारे रघुबीर जू के, बाँह पीर महाबीर बेगि ही निवारिये ॥',
          meaning: { en: 'The world knows the servant Hanuman has favoured; remember your word. What fault in Tulsi\'s service has slipped, O gracious lord? Even if you think me guilty and punish me a thousand ways, do not kill with poison one who would die of a sweet laddu. Dear son of the Wind, favourite of Rama, quickly cure this pain in my arm.' },
        },
        {
          n: 21,
          text: 'बालक बिलोकि, बलि बारेतें आपनो कियो, दीनबन्धु दया कीन्हीं निरुपाधि न्यारिये ।\nरावरो भरोसो तुलसी के, रावरोई बल, आस रावरीयै दास रावरो बिचारिये ॥\nबडो बिकराल कलि, काको न बिहाल कियो, माथे पगु बलि को, निहारि सो निवारिये ।\nकेसरी किसोर, रनरोर, बरजोर बीर, बाँहुपीर राहुमातु ज्यौं पछारि मारिये ॥',
          meaning: { en: 'Seeing me a child, you made me yours from boyhood; friend of the poor, you were kind to me for no reason at all. Tulsi trusts only you, rests on your strength, hopes in you, is your servant. Kali is fearful and has plagued everyone, it has set its foot on my head; look at it and remove it. Son of Kesari, roaring and mighty, strike down this arm-pain as you struck the mother of Rahu and kill it.' },
        },
        {
          n: 22,
          text: 'उथपे थपनथिर थपे उथपनहार, केसरी कुमार बल आपनो सँभारिये ।\nराम के गुलामनि को कामतरु रामदूत, मोसे दीन दूबरे को तकिया तिहारिये ॥\nसाहेब समर्थ तोसों तुलसी के माथे पर, सोऊ अपराध बिनु बीर, बाँधि मारिये ।\nपोखरी बिसाल बाँहु, बलि, बारिचर पीर, मकरी ज्यौं पकरि कै बदन बिदारिये ॥',
          meaning: { en: 'You set up the fallen and unsettle the established; son of Kesari, call up your strength. Wishing-tree to Rama\'s servants, Rama\'s messenger, the only support of a poor weak one like me. With a master as mighty as you over Tulsi\'s head, this pain binds and beats me though I am blameless, O hero. The pain is a fish in the broad pool of my arm; seize it as you seized the crocodile-woman and tear open its mouth.' },
        },
        {
          n: 23,
          text: 'राम को सनेह, राम साहस लखन सिय, राम की भगति, सोच संकट निवारिये ।\nमुद-मरकट रोग-बारिनिधि हेरि हारे, जीव-जामवंत को भरोसो तेरो भारिये ॥\nकूदिये कृपाल तुलसी सुप्रेम-पब्बयतें, सुथल सुबेल भालू बैठि कै बिचारिये ।\nमहाबीर बाँकुरे बराकी बाँह-पीर क्यों न, लंकिनी ज्यों लात-घात ही मरोरि मारिये ॥',
          meaning: { en: 'I have love for Rama and courage from Rama, Lakshmana and Sita, and devotion to Rama; remove my worry. The monkeys of joy have given up on the sea of disease, and the soul, the Jambavan, puts his hope in you. Leap, compassionate one, from the mountain of Tulsi\'s love; the soul sits on the Suvela of the heart, waiting. Mighty hero, why not crush this arm-pain, a Lankini, with a kick?' },
        },
        {
          n: 24,
          text: 'लोक-परलोकहुँ तिलोक न बिलोकियत, तोसे समरथ चष चारिहूँ निहारिये ।\nकर्म, काल, लोकपाल, अग-जग जीवजाल, नाथ हाथ सब निज महिमा बिचारिये ॥\nखास दास रावरो, निवास तेरो तासु उर, तुलसी सो देव दुखी देखियत भारिये ।\nबात तरुमूल बाँहुसूल कपिकच्छु-बेलि, उपजी सकेलि कपिकेलि ही उखारिये ॥',
          meaning: { en: 'In this world, the next and the three worlds, I look with all four eyes and see no one as able as you. Karma, time, the guardians and all moving and unmoving beings are in your hands; think of your own greatness. Your own servant, in whose heart you dwell, is seen in great distress. The pain in the arm is a creeper of itching beans; gather it up and pull it out by the roots as in a monkey\'s play.' },
        },
        {
          n: 25,
          text: 'करम-कराल-कंस भूमिपाल के भरोसे, बकी बकभगिनी काहू तें कहा डरैगी ।\nबडी बिकराल बाल घातिनी न जात कहि, बाँहूबल बालक छबीले छोटे छरैगी ॥\nआई है बनाइ बेष आप ही बिचारि देख, पाप जाय सबको गुनी के पाले परैगी ।\nपूतना पिसाचिनी ज्यौं कपिकान्ह तुलसी की, बाँहपीर महाबीर तेरे मारे मरैगी ॥',
          meaning: { en: 'Relying on cruel Kamsa-like karma, how will the demoness Putana, sister of Baka, fear anyone? She is fearful, slays children, and cannot be described, cheating small lovely children with the power of her arms. She has come in disguise; think it over, her sin will fall, and she will land in the hands of the master. Like Putana, this pain in Tulsi\'s arm will die by your blow, great hero.' },
        },
        {
          n: 26,
          text: 'भालकी कि कालकी कि रोष की त्रिदोष की है, बेदन बिषम पाप ताप छल छाँह की ।\nकरमन कूट की कि जन्त्र मन्त्र बूट की, पराहि जाहि पापिनी मलीन मन माँह की ॥\nपैहहि सजाय, नत कहत बजाय तोहि, बाबरी न होहि बानि जानि कपि नाँह की ।\nआन हनुमान की दुहाई बलवान की, सपथ महाबीर की जो रहै पीर बाँह की ॥',
          meaning: { en: 'Is this a mark on the forehead, or of time, or of anger, or of the three humours, a hard pain of sin or a deceiving shadow? Is it the fruit of some wicked spell or charm? Be gone, filthy-minded sinner, or you will be punished; I proclaim it, do not be foolish, know the nature of the monkey-lord. By Hanuman, by the mighty one\'s oath, if this arm-pain stays I swear it will not.' },
        },
        {
          n: 27,
          text: 'सिंहिका सँहारि बल, सुरसा सुधारि छल, लंकिनी पछारि मारि बाटिका उजारी है ।\nलंक परजारि मकरी बिदारि बारबार, जातुधान धारि धूरिधानी करि डारी है ॥\nतोरि जमकातरि मंदोदरी कढोरि आनी, रावन की रानी मेघनाद महँतारी है ।\nभीर बाँह पीर की निपट राखी महाबीर, कौन के सकोच तुलसी के सोच भारी है ॥',
          meaning: { en: 'You killed Simhika, tricked Sursa, struck down Lankini and wrecked the garden; you burned Lanka, split Makari, and made the demon host dust. You pulled Mandodari out from her stronghold, Ravana\'s queen and Meghanada\'s mother. Great hero, you have always made short work of such crowds; what hesitation of yours, then, leaves Tulsi so heavily worried over this arm-pain?' },
        },
        {
          n: 28,
          text: 'तेरो बाल केलि बीर सुनि सहमत धीर, भूलत सरीर सुधि सक्र-रबि-राहु की ।\nतेरी बाँह बसत बिसोक लोकपाल सब, तेरो नाम लेत रहै आरति न काहु की ॥\nसाम दाम भेद बिधि बेदहू लबेद सिधि, हाथ कपिनाथ ही के चोटी चोर साहु की ।\nआलस अनख परिहास कै सिखावन है, एते दिन रही पीर तुलसी के बाहु की ॥',
          meaning: { en: 'Hearing of your childhood play, the brave tremble, and Indra, the Sun and Rahu forget their bodies. Under your arm the world-guardians live without sorrow, and no one who says your name keeps his pain. By the four ways, Vedas and powers, the thief and the honest man alike are in the hands of the monkey-lord. Was this laziness, resentment and teasing a lesson for me? Tulsi\'s arm hurt for so many days.' },
        },
        {
          n: 29,
          text: 'टूकनि को घर-घर डोलत कँगाल बोलि, बाल ज्यों कृपाल नतपाल पालि पोसो है ।\nकीन्ही है सँभार सार अँजनी कुमार बीर, आपनो बिसारि हैं न मेरेहू भरोसो है ॥\nइतनो परेखो सब भाँति समरथ आजु, कपिराज साँची कहौं को तिलोक तोसो है ।\nसासति सहत दास कीजे पेखि परिहास, चीरी को मरन खेल बालकनि को सो है ॥',
          meaning: { en: 'A beggar going from door to door for scraps, you called me and cherished me like a child, kind protector of the helpless. You took care of me, son of Anjani; you will not forget your own, I trust. My only complaint is this: today, when you are so capable, who in the three worlds is like you? Your servant suffers punishment while you look on and laugh; it is a child\'s game and the ant\'s death.' },
        },
        {
          n: 30,
          text: 'आपने ही पाप तें त्रिपात तें कि साप तें, बढी है बाँह बेदन कही न सहि जाति है ।\nऔषध अनेक जन्त्र मन्त्र टोटकादि किये, बादि भये देवता मनाये अधिकाति है ॥\nकरतार, भरतार, हरतार, कर्म काल, को है जगजाल जो न मानत इताति है ।\nचेरो तेरो तुलसी तू मेरो कह्यो राम दूत, ढील तेरी बीर मोहि पीर तें पिराति है ॥',
          meaning: { en: 'By my own sins, or the three fevers, or a curse, my arm\'s pain has grown beyond bearing. Medicines, charms, spells and every remedy were useless; appeasing the gods only worsened it. Creator, preserver, destroyer, karma and time, who in this net of the world does not believe in these? Tulsi is your servant and you said you are mine; the delay is yours, hero, and it is more painful than the pain itself.' },
        },
        {
          n: 31,
          text: 'दूत राम राय को, सपूत पूत बाय को, समत्थ हाथ पाय को सहाय असहाय को ।\nबाँकी बिरदावली बिदित बेद गाइयत, रावन सो भट भयो मुठिका के घाय को ॥\nएते बडे साहेब समर्थ को निवाजो आज, सीदत सुसेवक बचन मन काय को ।\nथोरी बाँह पीर की बडी गलानि तुलसी को, कौन पाप कोप, लोप प्रकट प्रभाय को ॥',
          meaning: { en: 'Rama\'s messenger, the Wind\'s worthy son, strong of hand and foot, helper of the helpless, your vows are proud and famed in the Vedas, and the warrior Ravana fell to a blow from your fist. Such a great and capable lord favours me today, yet your servant suffers in word, mind and body. For a small arm-pain Tulsi feels great shame; what sin of mine, what anger, hides your plain power?' },
        },
        {
          n: 32,
          text: 'देवी देव दनुज मनुज मुनि सिद्ध नाग, छोटे बडे जीव जेते चेतन अचेत हैं ।\nपूतना पिसाची जातुधानी जातुधान बाम, राम दूत की रजाइ माथे मानि लेत हैं ॥\nघोर जन्त्र मन्त्र कूट कपट कुरोग जोग, हनुमान आन सुनि छाडत निकेत हैं ।\nक्रोध कीजे कर्म को प्रबोध कीजे तुलसी को, सोध कीजे तिनको जो दोष दुख देत हैं ॥',
          meaning: { en: 'Goddesses, gods, demons, humans, sages, siddhas and nagas, all beings small and great, sentient or not, even Putana, goblins and demonesses obey the command of Rama\'s messenger. Fierce charms and spells, deceit, bad diseases and magic leave the house the moment they hear the name of Hanuman. Turn your wrath on them, console Tulsi for his karma, and punish those who give him pain.' },
        },
        {
          n: 33,
          text: 'तेरे बल बानर जिताये रन रावन सों, तेरे घाले जातुधान भये घर-घर के ।\nतेरे बल रामराज किये सब सुरकाज, सकल समाज साज साजे रघुबर के ॥\nतेरो गुनगान सुनि गीरबान पुलकत, सजल बिलोचन बिरंचि हरि हर के ।\nतुलसी के माथे पर हाथ फेरो कीसनाथ, देखिये न दास दुखी तोसो कनिगर के ॥',
          meaning: { en: 'By your strength the monkeys won the war against Ravana, by your blows the demons were ruined, by your strength Rama\'s reign was established and the work of the gods done, and you arranged everything for Raghubar. Hearing your praise, the gods thrill, and Brahma, Vishnu and Shiva shed tears. Place your hand on Tulsi\'s head, lord of monkeys; do not see your servant sad, such a master craftsman as you.' },
        },
        {
          n: 34,
          text: 'पालो तेरे टूक को परेहू चूक मूकिये न, कूर कौडी दूको हौं आपनी ओर हेरिये ।\nभोरानाथ भोरे ही सरोष होत थोरे दोष, पोषि तोषि थापि आपनो न अवडेरिये ॥\nअँबु तू हौं अँबुचर, अँबु तू हौं डिंभ सो न, बूझिये बिलंब अवलंब मेरे तेरिये ।\nबालक बिकल जानि पाहि प्रेम पहिचानि, तुलसी की बाँह पर लामी लूम फेरिये ॥',
          meaning: { en: 'I live on your crumbs; even when I err, do not fall silent, and look to me, a worthless one worth two cowries. Guileless lord, you grow angry at small faults in your simplicity; set me up, nourish me and do not cast me aside. You are the water and I the creature in it, you the mother and I the child; do not delay, I have only you. Seeing the child in distress, protect him, know his love, and pass your long tail over Tulsi\'s arm.' },
        },
        {
          n: 35,
          text: 'घेरि लियो रोगनि, कुजोगनि, कुलोगनि ज्यौं, बासर जलद घन घटा धुकि धाई है ।\nबरसत बारि पीर जारिये जवासे जस, रोष बिनु दोष धूम-मूल मलिनाई है ॥\nकरुनानिधान हनुमान महा बलवान, हेरि हँसि हाँकि फूँकि फौजैं ते उडाई है ।\nखाये हुतो तुलसी कुरोग राढ राकसनि, केसरी किसोर राखे बीर बरिआई है ॥',
          meaning: { en: 'Diseases have surrounded me, like evil company, like a day when thick rain-clouds rush together. The rain of pain scorches like heat on the jawasa shrub, and the smoke of anger rises for no fault. Hanuman, mighty ocean of compassion, with a glance, a laugh, a shout and a breath scattered the armies. Tulsi had been eaten up by wasting disease and demons; Kesari\'s son saved him by sheer force.' },
        },
      ],
    },
    {
      title: 'सवैया',
      titleEn: 'Savaiya',
      note: 'Chhand 36.',
      verses: [
        {
          n: 36,
          text: 'राम गुलाम तु ही हनुमान गोसाँई सुसाँई सदा अनुकूलो ।\nपाल्यो हौं बाल ज्यों आखर दू पितु मातु सों मंगल मोद समूलो ॥\nबाँह की बेदन बाँह पगार पुकारत आरत आनँद भूलो ।\nश्री रघुबीर निवारिये पीर रहौं दरबार परो लटि लूलो ॥',
          meaning: { en: 'Gosain Hanuman, you are Rama\'s slave and my kind master, ever favourable. The two syllables of Rama\'s name raised me like father and mother, the root of joy and welfare. In the pain of my arm I cry out to you, the support of arms, forgetting all delight. Raghubir, remove my pain, so that I may stay at your door, even lame and crippled.' },
        },
      ],
    },
    {
      title: 'घनाक्षरी',
      titleEn: 'Ghanakshari',
      note: 'Chhands 37 to 44.',
      verses: [
        {
          n: 37,
          text: 'काल की करालता करम कठिनाई कीधौं, पाप के प्रभाव की सुभाय बाय बावरे ।\nबेदन कुभाँति सो सही न जाति राति दिन, सोई बाँह गही जो गही समीर डाबरे ॥\nलायो तरु तुलसी तिहारो सो निहारि बारि, सींचिये मलीन भो तयो है तिहुँ तावरे ।\nभूतनि की आपनी पराये की कृपा निधान, जानियत सबही की रीति राम रावरे ॥',
          meaning: { en: 'Is it the cruelty of time, the hardness of karma, the effect of sin, or the madness of the wind that has seized me? The pain cannot be borne by day or night, and it holds the very arm the Wind\'s son once held. Tulsi is a tree that you planted, scorched by the three heats and withered; look at it and water it with mercy. Treasure of grace, Rama, you know the ways of the ghosts, of your own and of others.' },
        },
        {
          n: 38,
          text: 'पाँय पीर पेट पीर बाँह पीर मुँह पीर, जरजर सकल सरीर पीरमई है ।\nदेव भूत पितर करम खल काल ग्रह, मोहि पर दवरि दमानक सी दई है ॥\nहौं तो बिनु मोल के बिकानो बलि बारेही तें, ओट राम नाम की ललाट लिखि लई है ।\nकुँभज के किंकर बिकल बूडे गोखुरनि, हाय राम राय ऐसी हाल कहूँ भई है ॥',
          meaning: { en: 'Pain in feet, belly, arm and mouth, my whole body worn and full of pain. Gods, ghosts, ancestors, karma, wicked influences, time and the planets have beaten on me like a drum. I was sold to Rama for nothing from boyhood, and the support of Rama\'s name was written on my forehead. Agastya\'s servant, I am distressed and drowning in a cow\'s hoofprint; alas, Lord Rama, has anyone been in such a state?' },
        },
        {
          n: 39,
          text: 'बाहुक-सुबाहु नीच लीचर-मरीच मिलि, मुँहपीर केतुजा कुरोग जातुधान हैं ।\nराम नाम जगजाप कियो चहों सानुराग, काल कैसे दूत भूत कहा मेरे मान हैं ॥\nसुमिरे सहाय राम लखन आखर दोऊ, जिनके समूह साके जागत जहान हैं ।\nतुलसी सँभारि ताडका सँहारि भारि भट, बेधे बरगद से बनाइ बानवान हैं ॥',
          meaning: { en: 'Subahu, Maricha and Tadaka stand for arm-pain, weakness and mouth-pain and the other wicked diseases like demons. I wish to do the rite of repeating Rama\'s name with love; but are these death-like ghosts in my control? The two syllables of Rama and Lakshmana, whose fame wakes the world, come to my help when I remember them. Tulsi, remember the slayer of Tadaka, who pierces these great warriors like banyan fruit with his arrows.' },
        },
        {
          n: 40,
          text: 'बालपने सूधे मन राम सनमुख भयो, राम नाम लेत माँगि खात टूकटाक हौं ।\nपरयो लोक-रीति में पुनीत प्रीति राम राय, मोह बस बैठो तोरि तरकि तराक हौं ॥\nखोटे-खोटे आचरन आचरत अपनायो, अंजनी कुमार सोध्यो रामपानि पाक हौं ।\nतुलसी गुसाँई भयो भोंडे दिन भूल गयो, ताको फल पावत निदान परिपाक हौं ॥',
          meaning: { en: 'In boyhood I turned to Rama with a straight mind, begging scraps while saying his name. Then I fell into the ways of the world and, deluded, broke the holy love of Rama with a single leap. Doing low deeds, I was taken up by Anjani\'s son, who had Rama\'s hand mend me. Tulsi became a Gosain and forgot the bad days; now he is reaping the final fruit of them.' },
        },
        {
          n: 41,
          text: 'असन-बसन-हीन बिषम-बिषाद-लीन, देखि दीन दूबरो करै न हाय हाय को ।\nतुलसी अनाथ सो सनाथ रघुनाथ कियो, दियो फल सील सिंधु आपने सुभाय को ॥\nनीच यहि बीच पति पाइ भरु हाईगो, बिहाइ प्रभु भजन बचन मन काय को ।\nता तें तनु पेषियत घोर बरतोर मिस, फूटि फूटि निकसत लोन राम राय को ॥',
          meaning: { en: 'Seeing him without food or clothing, sunk in sorrow, thin and wretched, who would not have cried alas? Raghunath made that orphan Tulsi his own, giving the fruit of his gentle nature. But in between, the low man, having won respect, puffed up and gave up worship of the Lord in word, mind and body. So the body now shows terrible boils, as if Rama\'s salt were bursting out of it.' },
        },
        {
          n: 42,
          text: 'जीओं जग जानकी जीवन को कहाइ जन, मरिबे को बारानसी बारि सुरसरि को ।\nतुलसी के दुहूँ हाथ मोदक हैं ऐसे ठाँउ, जाके जिये मुये सोच करिहैं न लरि को ॥\nमोको झूटो साँचो लोग राम को कहत सब, मेरे मन मान है न हर को न हरि को ।\nभारी पीर दुसह सरीर तें बिहाल होत, सोऊ रघुबीर बिनु सकै दूर करि को ॥',
          meaning: { en: 'To live in the world as Janaki\'s beloved\'s servant, and to die in Varanasi by Ganga\'s water: so both laddus are in Tulsi\'s hands in such a place, where even his children would not fret over his living or dying. People call me Rama\'s, true or false, and my mind admits no loyalty to Shiva or Hari. The pain is great and my body unbearably weak; who but Raghubir can take it away?' },
        },
        {
          n: 43,
          text: 'सीतापति साहेब सहाय हनुमान नित, हित उपदेश को महेस मानो गुरु कै ।\nमानस बचन काय सरन तिहारे पाँय, तुम्हरे भरोसे सुर मैं न जाने सुर कै ॥\nब्याधि भूत जनित उपाधि काहु खल की, समाधि कीजे तुलसी को जानि जन फुर कै ।\nकपिनाथ रघुनाथ भोलानाथ भूतनाथ, रोग सिंधु क्यों न डारियत गाय खुर कै ॥',
          meaning: { en: 'Sita\'s lord is my master, Hanuman my constant helper, and Shiva gives the counsel of a guru. In mind, word and body I take shelter at your feet, and with you to trust, I know no other god. Heal the affliction from ghosts or any evil one, and treat Tulsi as your true servant. Lord of monkeys, Raghunath, Shiva, why not drop this ocean of disease into the hoofprint of a cow?' },
        },
        {
          n: 44,
          text: 'कहों हनुमान सों सुजान राम राय सों, कृपानिधान संकर सों सावधान सुनिये ।\nहरष विषाद राग रोष गुन दोष मई, बिरची बिरञ्ची सब देखियत दुनिये ॥\nमाया जीव काल के करम के सुभाय के, करैया राम बेद कहैं साँची मन गुनिये ।\nतुम्ह तें कहा न होय हा हा सो बुझैये मोहि, हौं हूँ रहों मौनही बयो सो जानि लुनिये ॥',
          meaning: { en: 'I say to Hanuman, to wise Rama and to kind Shiva: listen attentively. Brahma has made this whole world a mixture of joy and sorrow, attachment, anger, virtue and fault. The Vedas say that the doer of maya, souls, time, karma and nature is Rama, and I hold this true. What can you not do? Explain this to me; and I, too, will stay silent, knowing that I reap what I sowed.' },
        },
      ],
    },
  ],
};
