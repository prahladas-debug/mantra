/**
 * Vinaya-patrikā of Tulasīdāsa: twelve of its 279 padas (Braj/Awadhi, with the raga of the old edition left out), in Devanagari,
 * numbered as in the Gita Press edition. Collated Nov 2026.
 *
 * Witnesses: W = the Gita Press text on hi.wikisource.org ("पृष्ठ:विनय पत्रिका.djvu", the scanned edition; the pages are partly
 * unproofread OCR, so its reading was used with care; W also gave the pada numbers); K = kavitakosh.org (separate pages for 1, 87,
 * 105, 111 and 198); H = hindwi.org "पद" pages (1, 105, 111 and 162, which cite Gita Press). Witnesses per pada: 1 W K H; 30 W;
 * 79 W; 87 W K; 101 W; 105 W K H; 111 W K H (two prints in K); 114 W; 120 W; 162 W H; 172 W; 198 W K. So 1, 105 and 111 have
 * three copies, 87, 162 and 198 two, and 30, 79, 101, 114, 120 and 172 rest on the OCR of W alone; I looked for a second typed copy of
 * these and did not find one. W's Devanagari uses व where Tulasīdāsa's text has ब (विनय-पत्रिका style); the ब spelling is restored
 * throughout, as in K and H. Nukta letters are written without the dot.
 *
 * OCR faults of W mended (the line is otherwise as printed): 30 "सोव" for सोक; 79 "ही" for हौं; 101 "फेहि" for केहि, "फवन"
 * for कवन, "इठि" for हठि; 114 "ईस न त्यागी" is as printed; 120 "मर्थ" for अर्थ, "कोठारी" for को टारी; 172 several run-together
 * words divided. Where W was too garbled the other copies were followed: 198 "अब नाथहिं अनुरागु" and "बुझै न काम-अगिनि" (K; W
 * "अव नाहिं" and drops न). Other readings: 87 "सुनु" (W; K "सुन") and "राम को चेरो" (W; K "राम कर"); 105 "अबलौं" run together (W, H) and
 * "मन-मधुकर पनकै" (W, H; K "मन मधुपहिं प्रन करि"); 111 "केसव" (K, H, W); 162 "अरपि" (H; W "भरप") and "करैं" (H). Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanVinayPatrika: Mantra = {
  id: 'bhajan-vinay-patrika',
  title: 'विनय पत्रिका के पद',
  titleEn: 'Vinay Patrika: Selected Padas (Tulsidas)',
  category: 'aarti',
  order: 70,
  deity: 'Śrī Rāma',
  source: 'Gosvāmī Tulasīdāsa, Vinaya-patrikā (Braj/Awadhi)',
  summary: 'Twelve of the best-known padas of Tulsidas\'s petition to Rama, from the invocation of Ganesha and the hymn to Hanuman to the self-reproach, the plea for mercy and the vow to live as a saint. Each pada is given with its number in the Vinay Patrika.',
  difficulty: 'medium',
  completeness: 'partial',
  contentNote: 'A selection of 12 padas, not the whole Vinay Patrika, which has 279 padas. Each section is one pada and carries its Gita Press number; six of the twelve rest on a single scan, see the notes in the file header.',
  sections: [
    {
      title: 'गाइये गनपति जगबंदन',
      titleEn: 'Pada 1: Sing of Ganapati',
      note: 'Vinay Patrika, pada 1.',
      verses: [
        {
          n: 1,
          text: 'गाइये गनपति जगबंदन ।\nसंकर-सुवन भवानी-नंदन ॥',
          meaning: { en: 'Sing of Ganapati, whom all the world reveres, son of Shankara and delight of Bhavani.' },
        },
        {
          n: 2,
          text: 'सिद्धि-सदन, गज-बदन, बिनायक ।\nकृपा-सिंधु, सुंदर, सब-लायक ॥',
          meaning: { en: 'He is the home of success, elephant-faced, the lord of obstacles, an ocean of kindness, handsome and capable in every way.' },
        },
        {
          n: 3,
          text: 'मोदक-प्रिय, मुद-मंगल-दाता ।\nबिद्या-बारिधि, बुद्धि-बिधाता ॥',
          meaning: { en: 'He loves modak sweets and gives joy and good fortune; he is an ocean of learning and the maker of wisdom.' },
        },
        {
          n: 4,
          text: 'माँगत तुलसिदास कर जोरे ।\nबसहिं रामसिय मानस मोरे ॥',
          meaning: { en: 'With folded hands Tulsidas begs one thing: let Rama and Sita dwell in my heart.' },
        },
      ],
    },
    {
      title: 'जाके गति है हनुमान की',
      titleEn: 'Pada 30: Whose refuge is Hanuman',
      note: 'Vinay Patrika, pada 30.',
      verses: [
        {
          n: 1,
          text: 'जाके गति है हनुमान की ।\nताकी पैज पूजि आई, यह रेखा कुलिस पषान की ॥',
          meaning: { en: 'Whoever has Hanuman as his refuge sees his resolve fulfilled; this is a line drawn on a diamond, never to be erased.' },
        },
        {
          n: 2,
          text: 'अघटित-घटन सुघट-बिघटन, ऐसी बिरुदावलि नहिं आन की ।\nसुमिरत संकट-सोक-बिमोचन, मूरति मोद-निधान की ॥',
          meaning: { en: 'He makes the impossible happen and undoes what seemed settled; no one else has such a record of fame. Remembering that joyful form frees one from trouble and sorrow.' },
        },
        {
          n: 3,
          text: 'तापर सानुकूल गिरिजा, हर, लखन, राम अरु जानकी ।\nतुलसी कपि की कृपा-बिलोकनि, खानि सकल कल्यान की ॥',
          meaning: { en: 'Over him Girija, Shiva, Lakshmana, Rama and Janaki are all kindly. Says Tulsi: a glance of favour from the monkey-lord is a mine of every blessing.' },
        },
      ],
    },
    {
      title: 'तू दयालु, दीन हौं, तू दानि, हौं भिखारी',
      titleEn: 'Pada 79: You are kind, I am wretched',
      note: 'Vinay Patrika, pada 79.',
      verses: [
        {
          n: 1,
          text: 'तू दयालु, दीन हौं, तू दानि, हौं भिखारी ।\nहौं प्रसिद्ध पातकी, तू पाप-पुंज-हारी ॥',
          meaning: { en: 'You are merciful and I am poor; you are the giver and I the beggar. I am a notorious sinner and you are the remover of heaps of sin.' },
        },
        {
          n: 2,
          text: 'नाथ तू अनाथ को, अनाथ कौन मोसो ।\nमो समान आरत नहिं, आरतिहर तोसो ॥',
          meaning: { en: 'You are the lord of the helpless, and who is more helpless than I? No sufferer is like me, no healer of suffering like you.' },
        },
        {
          n: 3,
          text: 'ब्रह्म तू, हौं जीव, तू है ठाकुर, हौं चेरो ।\nतात-मातु, गुरु-सखा, तू सब बिधि हितु मेरो ॥',
          meaning: { en: 'You are the Absolute and I the soul; you are the master and I the servant. Father, mother, teacher and friend, you are my well-wisher in every way.' },
        },
        {
          n: 4,
          text: 'तोहि मोहि नाते अनेक, मानियै जो भावै ।\nज्यों त्यों तुलसी कृपालु! चरन-सरन पावै ॥',
          meaning: { en: 'There are many bonds between you and me; accept whichever pleases you. Only grant that Tulsi, somehow, finds refuge at your feet.' },
        },
      ],
    },
    {
      title: 'सुनु मन मूढ सिखावन मेरो',
      titleEn: 'Pada 87: Listen, foolish mind',
      note: 'Vinay Patrika, pada 87.',
      verses: [
        {
          n: 1,
          text: 'सुनु मन मूढ सिखावन मेरो ।\nहरि-पद-बिमुख लह्यो न काहु सुख, सठ! यह समुझ सबेरो ॥',
          meaning: { en: 'Listen to my advice, foolish mind: no one who turned away from Hari\'s feet has found happiness. Understand this early, you fool.' },
        },
        {
          n: 2,
          text: 'बिछुरे ससि-रबि मन-नैननि तें, पावत दुख बहुतेरो ।\nभ्रमत श्रमित निसि-दिवस गगन महँ, तहँ रिपु राहु बडेरो ॥',
          meaning: { en: 'The moon and the sun, parted from the Lord\'s mind and eye, suffer much; they wander wearily day and night across the sky, where the mighty enemy Rahu waits.' },
        },
        {
          n: 3,
          text: 'जद्यपि अति पुनीत सुरसरिता, तिहुँ पुर सुजस घनेरो ।\nतजे चरन अजहूँ न मिटत नित, बहिबो ताहू केरो ॥',
          meaning: { en: 'The Ganga is utterly pure and famed in all three worlds, yet having left his feet she still has to flow on without rest.' },
        },
        {
          n: 4,
          text: 'छुटै न बिपति भजे बिनु रघुपति, श्रुति संदेहु निबेरो ।\nतुलसिदास सब आस छाँडि करि, होहु राम को चेरो ॥',
          meaning: { en: 'Misery does not end without worshipping Raghupati; the Vedas settle this doubt. Tulsidas says: give up every other hope and become Rama\'s servant.' },
        },
      ],
    },
    {
      title: 'जाउँ कहाँ तजि चरन तुम्हारे',
      titleEn: 'Pada 101: Where can I go?',
      note: 'Vinay Patrika, pada 101.',
      verses: [
        {
          n: 1,
          text: 'जाउँ कहाँ तजि चरन तुम्हारे ।\nकाको नाम पतित-पावन जग, केहि अति दीन पियारे ॥',
          meaning: { en: 'Where can I go, leaving your feet? Whose name is Purifier of the Fallen in this world, and whom are the very poor dear to?' },
        },
        {
          n: 2,
          text: 'कौने देव बराइ बिरद-हित, हठि हठि अधम उधारे ।\nखग, मृग, ब्याध, पषान, बिटप जड, जवन कवन सुर तारे ॥',
          meaning: { en: 'What other god, to guard his name, has stubbornly raised the lowly again and again? Birds, deer, a hunter, a stone, a lifeless tree; what Yavana or god have you not saved?' },
        },
        {
          n: 3,
          text: 'देव, दनुज, मुनि, नाग, मनुज, सब माया-बिबस बिचारे ।\nतिनके हाथ दास तुलसी प्रभु, कहा अपनपौ हारे ॥',
          meaning: { en: 'Gods, demons, sages, serpents and men are all helpless captives of maya. Lord, why should your servant Tulsi give himself into their hands?' },
        },
      ],
    },
    {
      title: 'अब लौं नसानी, अब न नसैहौं',
      titleEn: 'Pada 105: Enough of wasted days',
      note: 'Vinay Patrika, pada 105.',
      verses: [
        {
          n: 1,
          text: 'अबलौं नसानी, अब न नसैहौं ।\nराम-कृपा भव-निसा सिरानी, जागे फिरि न डसैहौं ॥',
          meaning: { en: 'Till now my life has been wasted; now I will not waste it. By Rama\'s grace the night of worldly life has ended, and having woken I will not lie down again.' },
        },
        {
          n: 2,
          text: 'पायेउँ नाम चारु चिंतामनि, उर कर तें न खसैहौं ।\nस्यामरूप सुचि रुचिर कसौटी, चित कंचनहिं कसैहौं ॥',
          meaning: { en: 'I have found the lovely wishing-jewel of the Name; I will not let it slip from my heart or hand. The pure, beautiful dark form of Rama is the touchstone on which I will test my mind, the gold.' },
        },
        {
          n: 3,
          text: 'परबस जानि हँस्यो इन इंद्रिन, निज बस ह्वै न हँसैहौं ।\nमन-मधुकर पनकै, तुलसी रघुपति-पद-कमल बसैहौं ॥',
          meaning: { en: 'These senses laughed at me when they saw me helpless; now I will be my own master and give them no chance to laugh. Making a vow, Tulsi will settle the bee of the mind in the lotus feet of Raghupati.' },
        },
      ],
    },
    {
      title: 'केसव! कहि न जाइ का कहिये',
      titleEn: 'Pada 111: Keshava, what can one say?',
      note: 'Vinay Patrika, pada 111.',
      verses: [
        {
          n: 1,
          text: 'केसव! कहि न जाइ का कहिये ।\nदेखत तव रचना बिचित्र हरि! समुझि मनहिं मन रहिये ॥',
          meaning: { en: 'Keshava, it cannot be told, what can one say? Seeing your wondrous creation, one understands and keeps silent within.' },
        },
        {
          n: 2,
          text: 'सून्य भीति पर चित्र, रंग नहिं, तनु बिनु लिखा चितेरे ।\nधोये मिटइ न मरइ भीति, दुख पाइय एहि तनु हेरे ॥',
          meaning: { en: 'On an empty wall there is a picture, with no colours, drawn by a painter without a body. Washing does not wipe it out, nor does it die with the wall; to look at this body is to suffer.' },
        },
        {
          n: 3,
          text: 'रबिकर-नीर बसै अति दारुन मकर रूप तेहि माहीं ।\nबदन-हीन सो ग्रसै चराचर, पान करन जे जाहीं ॥',
          meaning: { en: 'In the water of the sun\'s rays, the mirage, lives a dreadful crocodile; it has no mouth, yet it swallows every creature that goes to drink there.' },
        },
        {
          n: 4,
          text: 'कोउ कह सत्य, झूठ कह कोऊ, जुगल प्रबल कोउ मानै ।\nतुलसिदास परिहरै तीन भ्रम, सो आपन पहिचानै ॥',
          meaning: { en: 'Some call the world true, some false, some hold both strongly. Says Tulsidas: one who gives up all three doubts comes to know himself.' },
        },
      ],
    },
    {
      title: 'माधव! मो समान जग माहीं',
      titleEn: 'Pada 114: Madhava, none like me',
      note: 'Vinay Patrika, pada 114.',
      verses: [
        {
          n: 1,
          text: 'माधव! मो समान जग माहीं ।\nसब बिधि हीन, मलीन, दीन अति, लीन बिषय कोउ नाहीं ॥',
          meaning: { en: 'Madhava, there is no one like me in the world: wanting in every way, soiled, very wretched, and no one so lost in sense-pleasures.' },
        },
        {
          n: 2,
          text: 'तुम सम हेतु-रहित कृपालु आरत-हित ईस न त्यागी ।\nमैं दुख-सोक-बिकल कृपालु! केहि कारन दया न लागी ॥',
          meaning: { en: 'There is no merciful lord like you, kind without a reason, who does not abandon the afflicted. I am wild with grief; for what reason has pity not touched you?' },
        },
        {
          n: 3,
          text: 'नाहिन कछु औगुन तुम्हार, अपराध मोर मैं माना ।\nग्यान-भवन तनु दियेहु नाथ, सोउ पाय न मैं प्रभु जाना ॥',
          meaning: { en: 'There is no fault in you at all; the offence is mine, I admit it. You gave me this body as a house of knowledge, and even having it I did not know you, Lord.' },
        },
        {
          n: 4,
          text: 'बेनु करील, श्रीखंड बसंतहि दूषन मृषा लगावै ।\nसार-रहित हत-भाग्य सुरभि पल्लव सो कहु किमि पावै ॥',
          meaning: { en: 'The bamboo and the thorny karil blame spring falsely for their lack of sandal-fragrance; the hollow, unlucky ones how can they have fragrant new leaves?' },
        },
        {
          n: 5,
          text: 'सब प्रकार मैं कठिन, मृदुल हरि दृढ बिचार जिय मोरे ।\nतुलसिदास प्रभु मोह-सृंखला छुटिहि तुम्हारे छोरे ॥',
          meaning: { en: 'In every way I am hard and you, Hari, are gentle; this firm thought is in my heart. Tulsidas says: Lord, the chain of delusion will come undone only when you loosen it.' },
        },
      ],
    },
    {
      title: 'हे हरि! कस न हरहु भ्रम भारी',
      titleEn: 'Pada 120: Hari, why not remove my great delusion?',
      note: 'Vinay Patrika, pada 120.',
      verses: [
        {
          n: 1,
          text: 'हे हरि! कस न हरहु भ्रम भारी ।\nजद्यपि मृषा सत्य भासै जबलगि नहिं कृपा तुम्हारी ॥',
          meaning: { en: 'Hari, why do you not remove my great delusion? Though false, it seems true as long as your grace has not come.' },
        },
        {
          n: 2,
          text: 'अर्थ अबिद्यमान जानिय संसृति नहिं जाइ गोसाईं ।\nबिन बाँधे निज हठ सठ परबस परयो कीर की नाईं ॥',
          meaning: { en: 'The world, though known to be unreal, does not go away, master; unbound, the fool has by his own stubbornness fallen captive like the parrot of the fable.' },
        },
        {
          n: 3,
          text: 'सपने ब्याधि बिबिध बाधा जनु मृत्यु उपस्थित आई ।\nबैद अनेक उपाय करै जागे बिनु पीर न जाई ॥',
          meaning: { en: 'In a dream, illness and many troubles come, as though death itself had arrived; physicians try many cures, but the pain does not go until one wakes.' },
        },
        {
          n: 4,
          text: 'श्रुति-गुरु-साधु-समृति-संमत यह दृस्य असत दुखकारी ।\nतेहि बिनु तजे, भजे बिनु रघुपति, बिपति सकै को टारी ॥',
          meaning: { en: 'The Vedas, the teacher, the saints and the scriptures all agree that this visible world is unreal and brings sorrow; without abandoning it and worshipping Raghupati, who can remove the calamity?' },
        },
        {
          n: 5,
          text: 'बहु उपाय संसार-तरन कहँ, बिमल गिरा श्रुति गावै ।\nतुलसिदास मैं-मोर गये बिनु जिउ सुख कबहुँ न पावै ॥',
          meaning: { en: 'The pure words of the Vedas speak of many ways to cross the world. Says Tulsidas: without losing the sense of I and mine, the soul never finds happiness.' },
        },
      ],
    },
    {
      title: 'ऐसो को उदार जग माहीं',
      titleEn: 'Pada 162: Who is so generous?',
      note: 'Vinay Patrika, pada 162.',
      verses: [
        {
          n: 1,
          text: 'ऐसो को उदार जग माहीं ।\nबिनु सेवा जो द्रवै दीन पर राम सरिस कोउ नाहीं ॥',
          meaning: { en: 'Who in the world is so generous? No one is like Rama, who melts for the poor without being served.' },
        },
        {
          n: 2,
          text: 'जो गति जोग बिराग जतन करि नहिं पावत मुनि ग्यानी ।\nसो गति देत गीध सबरी कहँ प्रभु न बहुत जिय जानी ॥',
          meaning: { en: 'The state that wise sages cannot reach even through yoga, renunciation and great effort, the Lord gave to the vulture and to Shabari, and did not think it much.' },
        },
        {
          n: 3,
          text: 'जो संपति दस सीस अरपि करि रावन सिव पहँ लीन्ही ।\nसो संपदा बिभीषन कहँ अति सकुच-सहित हरि दीन्ही ॥',
          meaning: { en: 'The wealth that Ravana obtained from Shiva by offering his ten heads, Hari gave to Vibhishana with great shyness.' },
        },
        {
          n: 4,
          text: 'तुलसिदास सब भाँति सकल सुख जो चाहसि मन मेरो ।\nतौ भजु राम, काम सब पूरन करैं कृपानिधि तेरो ॥',
          meaning: { en: 'Tulsidas says: my mind, if you want every comfort in every way, worship Rama; the treasury of kindness will fulfil all your wishes.' },
        },
      ],
    },
    {
      title: 'कबहुँक हौं यहि रहनि रहौंगो',
      titleEn: 'Pada 172: Will I ever live this way?',
      note: 'Vinay Patrika, pada 172.',
      verses: [
        {
          n: 1,
          text: 'कबहुँक हौं यहि रहनि रहौंगो ।\nश्रीरघुनाथ-कृपालु-कृपा तें संत-सुभाव गहौंगो ॥',
          meaning: { en: 'Will I ever live in this way? By the grace of the kind Raghunath, will I take on the nature of a saint?' },
        },
        {
          n: 2,
          text: 'जथालाभ संतोष सदा काहू सों कछु न चहौंगो ।\nपरहित-निरत-निरंतर, मन क्रम बचन नेम निबहौंगो ॥',
          meaning: { en: 'I will always be content with whatever comes and ask nothing of anyone; I will be ever busy in doing good to others and keep my vows in thought, deed and word.' },
        },
        {
          n: 3,
          text: 'परुष बचन अति दुसह स्रवन सुनि तेहि पावक न दहौंगो ।\nबिगत मान, सम सीतल मन, पर-गुन नहिं दोष कहौंगो ॥',
          meaning: { en: 'Though I hear harsh, unbearable words, I will not burn in the fire of anger; free of pride, even and cool in mind, I will speak of others\' virtues and not their faults.' },
        },
        {
          n: 4,
          text: 'परिहरि देह-जनित चिंता, दुख-सुख सम बुद्धि सहौंगो ।\nतुलसिदास प्रभु यहि पथ रहि अबिचल हरि-भगति लहौंगो ॥',
          meaning: { en: 'Leaving aside the worries that come from the body, I will bear pain and pleasure with an even mind. Says Tulsidas: staying on this path, Lord, I will gain unshaken devotion to Hari.' },
        },
      ],
    },
    {
      title: 'मन पछितैहै अवसर बीते',
      titleEn: 'Pada 198: Mind, you will repent when the chance is gone',
      note: 'Vinay Patrika, pada 198.',
      verses: [
        {
          n: 1,
          text: 'मन पछितैहै अवसर बीते ।\nदुर्लभ देह पाइ हरिपद भजु, करम, बचन अरु हीते ॥',
          meaning: { en: 'Mind, you will regret it when the moment has passed. You have won this rare human body; worship Hari\'s feet with deed, word and heart.' },
        },
        {
          n: 2,
          text: 'सहसबाहु, दसबदन आदि नृप बचे न काल बलीते ।\nहम हम करि धन-धाम सँवारे, अंत चले उठि रीते ॥',
          meaning: { en: 'Sahasrabahu, Ravana and other kings were not spared by mighty Time. Saying I, I, they built up wealth and houses, and at the end they rose and left empty-handed.' },
        },
        {
          n: 3,
          text: 'सुत-बनितादि जानि स्वारथरत न करु नेह सबहीते ।\nअंतहु तोहिं तजेंगे पामर! तू न तजै अबहीते ॥',
          meaning: { en: 'Knowing that sons, wife and the rest are bound up with their own interest, do not cling to them all. In the end they will leave you, wretch; do you leave them now.' },
        },
        {
          n: 4,
          text: 'अब नाथहिं अनुरागु जागु जड, त्यागु दुरासा जीते ।\nबुझै न काम-अगिनि तुलसी कहुँ, बिषयभोग बहु घी ते ॥',
          meaning: { en: 'Now love the Lord, wake up, dull mind, and give up the evil hopes you cherish. Tulsi says: the fire of desire is never put out by feeding it more of the ghee of worldly pleasure.' },
        },
      ],
    },
  ],
};
