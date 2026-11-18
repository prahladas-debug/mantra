#!/usr/bin/env python3
"""Titles and summaries of the 33 units of the Ayodhya Kand (hand-written). Run: make_units_ayodhya.py -> units/2-ayodhya.json"""
import json, os

U = [
 # 1  1-10
 ("राज्याभिषेक का निश्चय और तैयारी",
  "The decision to crown Rama and the preparations",
  "After the wedding Ayodhya prospers, and Dasharatha, seeing his own age in the mirror, resolves to make Rama his heir. Vashishtha and the ministers approve, the city is decked and the holy waters are brought, and the king sends Vashishtha to prepare Rama for the rite.",
  "विवाह के बाद अयोध्या में नित नए मंगल होते हैं, और दर्पण में अपनी वृद्धावस्था देखकर दशरथ रामजी को युवराज बनाने का निश्चय करते हैं। वसिष्ठ और मन्त्री सहमत होते हैं, नगर सजता है, तीर्थों का जल मँगाया जाता है और राजा वसिष्ठ को रामजी को विधि समझाने भेजते हैं।"),
 # 2  11-20
 ("देवताओं की चिन्ता और मन्थरा की कुमन्त्रणा",
  "The gods' alarm and Manthara's evil counsel",
  "The city rings with music, but the gods fear that the coronation will spoil their cause and ask Sarasvati to turn the mind of the queen's maid Manthara. Manthara sees the adorned city, works on Kaikeyi's fears about Bharata's future, and Kaikeyi, who first rebukes her, is gradually won over.",
  "नगर में बाजे बजते हैं, पर देवता डरते हैं कि राज्याभिषेक से उनका काम बिगड़ जाएगा और वे सरस्वती से कैकेयी की दासी मन्थरा की बुद्धि फेरने की प्रार्थना करते हैं। मन्थरा सजा हुआ नगर देखती है, भरत के भविष्य का भय दिखाती है, और पहले फटकारने वाली कैकेयी धीरे-धीरे उसके वश में आ जाती है।"),
 # 3  21-30
 ("कैकेयी का कोपभवन और दो वरों की माँग",
  "Kaikeyi in the chamber of anger and the demand of the two boons",
  "Manthara reminds Kaikeyi of the two boons the king once promised her, and Kaikeyi lies down in the room of anger in poor clothes. Dasharatha, finding her so, pleads and swears to grant her any wish; she then asks that Bharata be crowned and that Rama live in the forest for fourteen years.",
  "मन्थरा कैकेयी को राजा के दिए दो वर याद दिलाती है और कैकेयी मैले वस्त्र पहनकर कोपभवन में लेट जाती है। राजा उसे इस दशा में देखकर मनाते हैं और कोई भी माँग पूरी करने की शपथ लेते हैं; तब वह भरत को राज्य और रामजी को चौदह वर्ष का वनवास माँगती है।"),
 # 4  31-40
 ("दशरथ की व्यथा और राम का बुलावा",
  "Dasharatha's anguish and the summons of Rama",
  "Struck by the demand, Dasharatha falls down in anguish, begs Kaikeyi to take back her words and reminds her of Rama's love for her, but she stays hard. At daybreak the people gather at the gate, Sumantra goes in and finds the king in a pitiful state, and Rama is called to his father.",
  "वर सुनकर दशरथ व्याकुल होकर गिर पड़ते हैं, कैकेयी से वचन वापस लेने की विनती करते हैं और रामजी के उसके प्रति प्रेम की याद दिलाते हैं, पर वह कठोर बनी रहती है। भोर होने पर लोग द्वार पर जुटते हैं, सुमन्त्र भीतर जाकर राजा को दयनीय दशा में पाते हैं और रामजी पिता के पास बुलाए जाते हैं।"),
 # 5  41-50
 ("राम का वनवास स्वीकार करना और नगर का शोक",
  "Rama accepts the forest and the city mourns",
  "Kaikeyi tells Rama the king's wish, and Rama, glad to obey his father, accepts at once, while Dasharatha faints. News of the exile spreads and the people of Ayodhya, in grief and anger, blame Kaikeyi and wonder whether Sita and Lakshmana will go too.",
  "कैकेयी रामजी को राजा की इच्छा बताती है और रामजी पिता की आज्ञा मानकर सहर्ष वनवास स्वीकार करते हैं, जबकि दशरथ मूर्छित हो जाते हैं। वनवास का समाचार फैलने पर अयोध्या के लोग शोक और क्रोध में कैकेयी को दोष देते हैं और सोचते हैं कि क्या सीता और लक्ष्मण भी जाएँगे।"),
 # 6  51-60
 ("कौसल्या से विदा और सीता से बात",
  "Leave-taking of Kaushalya and the talk with Sita",
  "Rama goes to Kaushalya, who is torn between the duty to let him go and her motherly grief, and in the end she blesses his going. Sita hears the news and comes to her mother-in-law, and Rama begins to tell her of the hardships of the forest.",
  "रामजी कौसल्या के पास जाते हैं; वे धर्म और ममता के बीच दुखी होती हैं, पर अन्त में रामजी को वन जाने की अनुमति और आशीर्वाद देती हैं। सीताजी समाचार सुनकर सास के पास आती हैं और रामजी उन्हें वन के कष्ट बताने लगते हैं।"),
 # 7  61-70
 ("सीता का आग्रह और राम की स्वीकृति",
  "Sita's plea and Rama's consent",
  "Rama counsels Sita to stay and serve her elders, but Sita answers with tears that a wife's place is by her husband and that the forest will be a joy with him. Seeing her ready to die of grief, Rama agrees to take her, and Sita takes her mother-in-law's blessing; Lakshmana hears of the matter and runs up in distress.",
  "रामजी सीताजी को घर रहकर सास-ससुर की सेवा करने की सीख देते हैं, पर सीताजी आँसुओं के साथ कहती हैं कि पत्नी का स्थान पति के साथ है और उनके साथ वन भी सुखकर होगा। उन्हें विरह से व्याकुल देखकर रामजी साथ ले चलना मान लेते हैं और सीताजी सास से आशीर्वाद लेती हैं; लक्ष्मणजी समाचार पाकर व्याकुल दौड़ आते हैं।"),
 # 8  71-80
 ("लक्ष्मण का साथ चलना और माताओं से विदा",
  "Lakshmana goes too and the farewells to the mothers",
  "Rama tells Lakshmana to stay and serve their parents, but Lakshmana pleads that he has no refuge but Rama's feet, and Rama consents. Lakshmana takes leave of his mother Sumitra, who tells him to look on Rama as his father and Sita as his mother, and the three go to take leave of the king and Kaikeyi.",
  "रामजी लक्ष्मणजी को घर पर माता-पिता की सेवा के लिए रुकने को कहते हैं, पर लक्ष्मणजी रामजी के चरणों के सिवा कोई आश्रय नहीं मानते और रामजी मान जाते हैं। लक्ष्मणजी माता सुमित्रा से विदा लेते हैं, जो उन्हें राम को पिता और सीता को माता मानने की सीख देती हैं, और तीनों राजा तथा कैकेयी से विदा लेने जाते हैं।"),
 # 9  81-90
 ("नगर से प्रस्थान तमसा का पडाव और गुह की भेंट",
  "Leaving the city, the night at the Tamasa and Guha",
  "Rama consoles them all, bows to Vashishtha and, at the king's word, Sumantra takes the three on his chariot while the people follow in crowds. At the Tamasa they sleep the first night, leave in the dark while the people are asleep, and the Nishada chief Guha, hearing the news, comes to meet them at Shringaverpur.",
  "रामजी सबको समझाते हैं, वसिष्ठ को प्रणाम करते हैं, और राजा के वचन से सुमन्त्र तीनों को रथ पर बैठाकर चलते हैं जबकि नगर के लोग उनके पीछे चल पड़ते हैं। तमसा के तट पर पहली रात बिताकर वे अँधेरे में, लोगों के सोते रहने पर, आगे बढ़ जाते हैं, और निषादराज गुह समाचार सुनकर शृंगवेरपुर में उनसे मिलने आता है।"),
 # 10  91-100
 ("गुह लक्ष्मण संवाद सुमन्त्र की विदाई और केवट",
  "Guha and Lakshmana, Sumantra sent back and the boatman",
  "Guha laments Rama sleeping on the ground, and Lakshmana tells him that no one is to blame, for joy and sorrow come of one's past actions. Rama sends Sumantra back with messages for the king and the queens, and on the Ganga bank the boatman refuses to row them until he has washed Rama's feet.",
  "गुह रामजी को भूमि पर सोता देखकर दुखी होता है और लक्ष्मणजी उसे समझाते हैं कि इसमें किसी का दोष नहीं, सुख-दुख अपने कर्मों का फल है। रामजी राजा और रानियों के लिए सन्देश देकर सुमन्त्र को लौटाते हैं और गंगा के तट पर केवट बिना चरण धोए नाव चलाने को तैयार नहीं होता।"),
 # 11  101-110
 ("केवट का प्रेम गंगा पार प्रयाग और भरद्वाज",
  "The boatman's love, the Ganga crossed, Prayag and Bharadvaj",
  "The boatman washes Rama's feet, drinks the water with his family and takes Rama across; he will accept no fare, and Sita prays to the Ganga for the safe return of her husband and brother-in-law. At Prayag Rama bathes, is received by the sage Bharadvaj and spends the night there; next day four of the sage's pupils guide them to the Yamuna, are sent back with Rama's blessing, and the three cross the river.",
  "केवट रामजी के चरण धोकर परिवार सहित चरणामृत पीता है और उन्हें पार उतारता है, पर उतराई नहीं लेता; सीताजी गंगाजी से पति और देवर की कुशल वापसी की प्रार्थना करती हैं। प्रयाग में रामजी स्नान करते हैं, भरद्वाज मुनि उनका सत्कार करते हैं और रात वहीं बीतती है; अगले दिन भरद्वाज के चार शिष्य उन्हें यमुना तक पहुँचाते हैं, रामजी उन्हें विदा करते हैं और तीनों नदी पार करते हैं।"),
 # 12  111-120
 ("यमुना पार गुह की विदाई और ग्रामवासियों का प्रेम",
  "Across the Yamuna, Guha sent home and the villagers' love",
  "On the far bank of the Yamuna Rama gently persuades his friend Guha to go home, and then walks on with Sita and Lakshmana. The men and women of the villages on the way gather to see the three dark and fair travellers in bark and matted hair, and the women ask Sita who they are.",
  "यमुना के पार रामजी मित्र गुह को समझा-बुझाकर घर लौटाते हैं और सीताजी तथा लक्ष्मणजी के साथ आगे बढ़ते हैं। मार्ग के गाँवों के स्त्री-पुरुष वल्कल और जटा वाले श्याम-गौर पथिकों को देखने उमड़ पड़ते हैं, और स्त्रियाँ सीताजी से उनका परिचय पूछती हैं।"),
 # 13  121-130
 ("वाल्मीकि के आश्रम में और निवास का प्रश्न",
  "At Valmiki's hermitage and the question of a dwelling",
  "Rama gives happiness to those he meets on the road and comes to Valmiki's lovely hermitage. He asks the sage where he should live, and Valmiki, after praising Rama as Brahman beyond speech, names the hearts of those who love him as the best of dwellings.",
  "मार्ग में मिलने वालों को सुख देते हुए रामजी वाल्मीकि के सुन्दर आश्रम पहुँचते हैं और उनसे पूछते हैं कि वे कहाँ रहें। वाल्मीकि उन्हें वाणी से परे ब्रह्म कहकर उनकी स्तुति करते हैं और भक्तों के हृदयों को ही उनके रहने के सबसे अच्छे स्थान बताते हैं।"),
 # 14  131-140
 ("चित्रकूट का निवास देवताओं और कोल भीलों का आगमन",
  "Dwelling at Chitrakut and the coming of gods and forest-dwellers",
  "Valmiki tells them of the glory of Chitrakut; they bathe in the Mandakini and Lakshmana builds a leaf-hut on the river bank, where the gods come to see Rama. The Kols and Bhils come with joy to bring roots and fruit, and the gods call the birds, beasts and trees of Chitrakut blessed for having seen Rama.",
  "वाल्मीकि चित्रकूट की महिमा सुनाते हैं; तीनों मन्दाकिनी में स्नान करते हैं और लक्ष्मणजी नदी के तट पर पर्णकुटी बनाते हैं, जहाँ देवता रामजी के दर्शन को आते हैं। कोल-भील आनन्द से कन्द-मूल-फल लाते हैं, और देवता चित्रकूट के पक्षियों, पशुओं और वृक्षों को रामजी के दर्शन पाकर धन्य कहते हैं।"),
 # 15  141-150
 ("चित्रकूट में सुख और सुमन्त्र का अयोध्या लौटना",
  "Peace at Chitrakut and Sumantra's return to Ayodhya",
  "Rama, Sita and Lakshmana live happily in their hut, while in Ayodhya even the beasts and birds refuse food. Sumantra, who has turned back from the Ganga with the empty chariot, grieves on the way, and when he reaches the palace the king asks eagerly after Rama, and Sumantra, gently reminding him that joy and sorrow come and go, tells him of the first nights of the journey.",
  "रामजी, सीताजी और लक्ष्मणजी पर्णकुटी में सुख से रहते हैं, उधर अयोध्या में पशु-पक्षी तक भोजन-जल छोड़ देते हैं। सुमन्त्र खाली रथ लेकर गंगा-तट से लौटते हैं और मार्ग में शोक में डूबे रहते हैं; महल पहुँचने पर राजा रामजी के बारे में आतुरता से पूछते हैं, और सुमन्त्र सुख-दुख के आने-जाने की बात कहते हुए यात्रा की पहली रातों का हाल सुनाते हैं।"),
 # 16  151-160
 ("दशरथ का देहान्त भरत का बुलावा और अयोध्या में प्रवेश",
  "Dasharatha's death, the summons of Bharata and his return",
  "Sumantra gives Rama's messages to the king, who laments through the night, remembers the curse of the blind hermit, Shravana's father, and, calling Rama's name, gives up his life. Vashishtha sends swift riders to Bharata and Shatrughna at their uncle's house; Bharata, troubled by evil omens, returns to a silent Ayodhya, where Kaikeyi tells him what has happened.",
  "सुमन्त्र रामजी के सन्देश राजा को सुनाते हैं; दशरथ रात भर विलाप करते हैं, उन्हें श्रवणकुमार के अन्धे पिता का श्राप याद आता है और वे राम-राम कहते हुए प्राण त्याग देते हैं। वसिष्ठ भरत और शत्रुघ्न को ननिहाल से बुलाने के लिए दूत भेजते हैं; अशुभ शकुनों से चिन्तित भरत सूनी अयोध्या में लौटते हैं, जहाँ कैकेयी उन्हें सब बताती है।"),
 # 17  161-170
 ("भरत का शोक कौसल्या से भेंट और भरत की सौगन्ध",
  "Bharata's grief, the meeting with Kaushalya and his oath",
  "Bharata, learning what his mother has done, rebukes her bitterly and grieves for his father and for Rama's exile. He goes to Kaushalya, who gently speaks of Rama's love for him, and Bharata swears before her that he had no part in the plot, and Vashishtha comforts him.",
  "माता का किया जानकर भरत उसे कठोर वचन कहते हैं और पिता के निधन तथा रामजी के वनवास पर शोक करते हैं। वे कौसल्या के पास जाते हैं, जो रामजी के उनके प्रति स्नेह की बात कहती हैं, भरत अपने निर्दोष होने की सौगन्ध खाते हैं और वसिष्ठ उन्हें सान्त्वना देते हैं।"),
 # 18  171-180
 ("वसिष्ठ का उपदेश और भरत का राज्य अस्वीकार करना",
  "Vashishtha's counsel and Bharata's refusal of the throne",
  "Vashishtha tells Bharata that fate is strong and has the king's last rites performed. When the ministers and the guru ask Bharata to take the crown, Bharata folds his hands and refuses, saying he will not rule while his father is in heaven and Rama and Sita are in the forest.",
  "वसिष्ठ भरत को समझाते हैं कि भावी प्रबल है और राजा का अन्तिम संस्कार कराते हैं। जब मन्त्री और गुरु भरत से राजतिलक स्वीकार करने को कहते हैं तो भरत हाथ जोड़कर मना कर देते हैं और कहते हैं कि पिता स्वर्ग में हैं और राम-सीता वन में, ऐसे में मैं राज्य कैसे करूँ।"),
 # 19  181-190
 ("भरत का वन जाने का निश्चय और गुह की शंका",
  "Bharata resolves to go to Rama and Guha's suspicion",
  "Bharata speaks of his own misfortune and Kaushalya's love for him, and in the end the council decides to go to the forest and bring Rama back. The whole city sets out with the queens, and when the army reaches the Ganga, Guha, seeing so great a host, fears that Bharata has come in anger and calls his people to arms.",
  "भरत अपनी दीनता और कौसल्या के स्नेह की बात कहते हैं, और अन्त में सभा निश्चय करती है कि वन जाकर रामजी को लौटा लाया जाए। सारा नगर रानियों के साथ चल पड़ता है; गंगा-तट पर इतनी बड़ी सेना देखकर गुह को शंका होती है कि भरत क्रोध से आए हैं और वह अपने लोगों को सजग करता है।"),
 # 20  191-200
 ("गुह और भरत की भेंट तथा गंगा पार",
  "Guha meets Bharata and the Ganga is crossed",
  "Guha first prepares to resist, then, learning Bharata's purpose, takes gifts and goes to meet him, and Bharata embraces him as dearly as Lakshmana. Guha tells of Rama's night under the simsupa tree and the hard bed of grass, and Bharata, with tears, sees Sita's resting place and cannot bear it.",
  "गुह पहले युद्ध की तैयारी करता है, फिर भरत का उद्देश्य जानकर भेंट लेकर उनसे मिलने जाता है और भरत उसे लक्ष्मण के समान स्नेह से गले लगाते हैं। गुह शीशम के नीचे रामजी के रात बिताने और कुश की शय्या की बात बताता है, और भरत आँखों में आँसू भरे सीताजी की शय्या देखकर सहन नहीं कर पाते।"),
 # 21  201-210
 ("प्रयाग में भरत और भरद्वाज की भेंट",
  "Bharata and Bharadvaj meet at Prayag",
  "Bharata enters Prayag in the afternoon, bathes at the confluence and prays not for wealth or release but for love at Rama's feet. Bharadvaj receives him, speaks tenderly to him about his mother's deed, and tells him that Rama himself, drawn by Bharata's love, will not turn him away.",
  "भरत तीसरे पहर प्रयाग पहुँचते हैं, त्रिवेणी में स्नान करके धन, धर्म या मोक्ष नहीं, केवल रामजी के चरणों में प्रेम की प्रार्थना करते हैं। भरद्वाज उनका स्वागत करते हैं, माता के कर्म पर संकोच न करने को कहते हैं और बताते हैं कि भरत के प्रेम के कारण रामजी स्वयं उन्हें लौटाएँगे नहीं।"),
 # 22  211-220
 ("भरद्वाज का आतिथ्य और इन्द्र की चिन्ता",
  "Bharadvaj's hospitality and Indra's fear",
  "Bharadvaj, by the power of his austerity, gives Bharata and his whole company a feast fit for kings, but Bharata's heart is full of grief for Rama. The gods, afraid that Bharata's love may bring Rama back and spoil their purpose, scheme, and Brihaspati warns Indra not to plot against a devotee of Rama.",
  "भरद्वाज अपने तपोबल से भरत और उनके सारे समाज को राजाओं जैसा भोज देते हैं, पर भरत का हृदय रामजी के वियोग में दुखी है। देवता डरते हैं कि भरत का प्रेम कहीं रामजी को लौटा न ले और उनका काम बिगड़ न जाए; बृहस्पति इन्द्र को रामभक्त के विरुद्ध षड्यन्त्र से रोकते हैं।"),
 # 23  221-230
 ("चित्रकूट की ओर यात्रा और लक्ष्मण का आवेश",
  "The road to Chitrakut and Lakshmana's anger",
  "Bharata walks on foot, and the people of the villages come out to see him and bless him. From Chitrakut Lakshmana sees the dust and the great army and, taking it for an attack, tells Rama in anger that Bharata, drunk with power, has come to kill them, and swears to meet him in battle.",
  "भरत पैदल चलते हैं और मार्ग के गाँवों के लोग उन्हें देखने और आशीर्वाद देने उमड़ पड़ते हैं। चित्रकूट पर लक्ष्मणजी धूल और बड़ी सेना देखकर आक्रमण समझते हैं और क्रोध में रामजी से कहते हैं कि भरत राज के मद में हमें मारने आए हैं, और युद्ध की सौगन्ध लेते हैं।"),
 # 24  231-240
 ("लक्ष्मण का क्रोध शान्त होना और भरत का राम से मिलन",
  "Lakshmana calmed and Bharata meets Rama",
  "Rama quiets Lakshmana by praising Bharata's goodness, and the gods applaud him; Lakshmana is ashamed. Bharata sees the hill of Chitrakut and the hut among the sages, runs and falls at Rama's feet, and Rama lifts him up and holds him to his heart.",
  "रामजी भरत के गुणों का बखान करके लक्ष्मणजी को शान्त करते हैं, देवता भी भरत की सराहना करते हैं और लक्ष्मणजी लज्जित होते हैं। भरत चित्रकूट पर्वत और मुनियों के बीच पर्णकुटी देखते हैं, दौड़कर रामजी के चरणों में गिरते हैं, और रामजी उन्हें उठाकर हृदय से लगा लेते हैं।"),
 # 25  241-250
 ("माताओं और गुरु का मिलन राम की सभा में",
  "The meeting with the mothers and the guru",
  "Rama embraces Shatrughna and Guha, then greets Vashishtha and the queens, who come in procession; Sita bows to each of her mothers-in-law and is blessed. Next morning, at Vashishtha's command, Rama performs his father's last offerings with faith, and the whole company settles by Chitrakut.",
  "रामजी शत्रुघ्न और गुह को गले लगाते हैं, फिर वसिष्ठ और रानियों से मिलते हैं; सीताजी सभी सासों के चरण छूकर आशीर्वाद पाती हैं। अगले प्रभात वसिष्ठ की आज्ञा से रामजी श्रद्धा से पिता की अन्त्येष्टि-क्रिया सम्पन्न करते हैं और सारा समाज चित्रकूट के आसपास ठहर जाता है।"),
 # 26  251-260
 ("चित्रकूट में निवास भरत की चिन्ता और सभा में निवेदन",
  "Life at Chitrakut, Bharata's sorrow and the plea in the assembly",
  "The people of Ayodhya wander happily over Chitrakut, but Bharata is sleepless and pained, and he goes to the assembly of the sages and Rama. Bharata says that he does not know what to ask, since whatever he asks will only be his own misfortune, and Vashishtha tells him to speak without fear.",
  "अयोध्यावासी चित्रकूट के वनों में आनन्द से घूमते हैं, पर भरत को न नींद आती है न भूख, और वे सभा में जाते हैं जहाँ मुनिगण और रामजी विराजमान हैं। भरत कहते हैं कि वे नहीं जानते क्या माँगें, क्योंकि जो भी माँगें वह उनका ही दुर्भाग्य होगा, और वसिष्ठ उन्हें निर्भय होकर बोलने को कहते हैं।"),
 # 27  261-270
 ("भरत की प्रार्थना और देवताओं की चिन्ता",
  "Bharata's petition and the gods' concern",
  "Bharata, with a full heart, tells Rama that he has come only to take him back, and begs that Rama return to Ayodhya or let him go to the forest in his place. The gods, anxious, take counsel with their teacher Brihaspati, who tells them to put away their worry, since Bharata's devotion is the root of all that is good.",
  "भरत भरे हृदय से रामजी से कहते हैं कि वे उन्हें लौटा ले जाने आए हैं, और विनती करते हैं कि रामजी अयोध्या लौट चलें या उनके स्थान पर उन्हें वन भेज दें। चिन्तित देवता अपने गुरु बृहस्पति से सलाह लेते हैं, जो उन्हें चिन्ता छोड़ने को कहते हैं, क्योंकि भरत की भक्ति ही सब मंगलों की जड़ है।"),
 # 28  271-280
 ("जनक का चित्रकूट आना और समाज से भेंट",
  "Janaka comes to Chitrakut and meets the company",
  "Messengers tell Janaka in Mithila of Bharata's journey, and the king, moved, sets out for Chitrakut with Sunayana and his people. Rama and Bharata go out to welcome him, the two courts meet with deep love, and Rama and his fellow-dwellers send roots and fruits for the guests.",
  "मिथिला में जनक को दूतों से भरत की यात्रा का समाचार मिलता है और वे सुनयना तथा अपने समाज के साथ चित्रकूट के लिए चल पड़ते हैं। रामजी और भरत उनकी अगवानी करते हैं, दोनों समाज प्रेम से मिलते हैं, और रामजी तथा वनवासी अतिथियों के लिए कन्द-मूल-फल भेजते हैं।"),
 # 29  281-290
 ("कौसल्या और सुनयना की भेंट सीता का मिलन और भरत की प्रशंसा",
  "Kaushalya and Sunayana meet, Sita with her parents, and the praise of Bharata",
  "Kaushalya and Sunayana meet in tears and speak of Sita's hardships and their own helplessness, and Sita is comforted at her mother's side. Janaka and Sunayana speak of Bharata's unmatched goodness, and Sunayana tells Kaushalya that Bharata will never go against Rama's will.",
  "कौसल्या और सुनयना आँसुओं के साथ मिलती हैं, सीताजी के कष्टों और अपनी विवशता की बातें करती हैं, और सीताजी माता के पास सान्त्वना पाती हैं। जनक और सुनयना भरत के अनुपम गुणों की चर्चा करते हैं, और सुनयना कौसल्या से कहती हैं कि भरत रामजी की इच्छा के विरुद्ध कभी नहीं जाएँगे।"),
 # 30  291-300
 ("सभा में निर्णय की चर्चा राम की शपथ और भरत की विनय",
  "The council weighs the decision, Rama's oath and Bharata's humility",
  "Vashishtha tells Janaka that only he can settle the dilemma; Janaka, moved, speaks of Rama's truth and kindness and says that the choice should be left to Bharata, who answers that Rama's wish and vow must decide. The gods, in their selfishness, spread fear and confusion by their illusion; Rama pledges himself, the assembly falls silent, and Bharata, bowing to all, begins to speak.",
  "वसिष्ठ जनक से कहते हैं कि इस दुविधा को केवल आप ही सुलझा सकते हैं; जनक भावविभोर होकर रामजी की सत्यनिष्ठा और शील की बात करते हैं और निर्णय भरत पर छोड़ते हैं, जो कहते हैं कि रामजी की रुचि और धर्म-व्रत की रक्षा ही अन्तिम बात होगी। स्वार्थी देवता माया से भय और भ्रम फैलाते हैं; रामजी की शपथ से सभा चुप हो जाती है और भरत सबको प्रणाम करके बोलने लगते हैं।"),
 # 31  301-310
 ("राम का निर्णय अभिषेक जल और भरत कूप",
  "Rama's decision, the consecration water and Bharata's well",
  "Indra's mischief clouds the minds of the people, but Rama, seeing their distress, speaks to Bharata, praising his purity and telling him that the guru's grace will look after the realm. Bharata then asks what is to be done with the water of all the holy places that he brought for Rama's coronation, and on the advice of Atri it is poured into a well, which is named after Bharata.",
  "इन्द्र की माया लोगों की बुद्धि को घेर लेती है, पर रामजी उनका दुख देखकर भरत से बात करते हैं, उनके निर्मल हृदय की प्रशंसा करते हैं और कहते हैं कि गुरु की कृपा से सब कार्य निभ जाएँगे। फिर भरत पूछते हैं कि राज्याभिषेक के लिए सब तीर्थों से लाए जल का क्या किया जाए, और अत्रि मुनि की सलाह से वह एक कुएँ में स्थापित होता है, जो भरत-कूप कहलाता है।"),
 # 32  311-320
 ("भरत की विदा और चरण पादुका",
  "Bharata's leave-taking and Rama's sandals",
  "Bharata visits the holy places of Chitrakut for five days and then asks Rama how he should spend the term. Rama teaches him that a ruler is like the mouth that feeds every limb, and, seeing that Bharata finds no peace without a support, gives him his sandals; Bharata bows to them with joy and takes leave of Rama, Sita, Lakshmana, the sages and the mothers.",
  "भरत पाँच दिन चित्रकूट के तीर्थ देखते हैं और फिर रामजी से अवधि बिताने की शिक्षा माँगते हैं। रामजी राजा को उस मुख के समान बताते हैं जो सब अंगों का पोषण करता है, और भरत को बिना आधार के शान्ति न पाते देखकर अपनी पादुकाएँ देते हैं; भरत उन्हें प्रणाम करके आनन्दित होते हैं और रामजी, सीताजी, लक्ष्मणजी, मुनियों तथा माताओं से विदा लेते हैं।"),
 # 33  321-326
 ("भरत का अयोध्या लौटना नन्दिग्राम का तप और फलश्रुति",
  "Bharata's return, his austerity at Nandigram and the fruit of hearing",
  "Bharata returns to Ayodhya and, installing Rama's sandals on the throne, lives as an ascetic at Nandigram, watching the days to the end of the term. Tulsidas closes with the promise that those who hear or sing of Bharata's conduct with faith will win love for Sita and Rama.",
  "भरत अयोध्या लौटते हैं, रामजी की पादुकाओं को सिंहासन पर प्रतिष्ठित करते हैं और नन्दिग्राम में तपस्वी की तरह रहते हुए अवधि के बीतने की प्रतीक्षा करते हैं। तुलसीदास फलश्रुति कहते हैं कि जो भरत के चरित को श्रद्धा से सुनेंगे-गाएँगे उन्हें सीताराम के चरणों में प्रेम प्राप्त होगा।"),
]

out = [{'title': t, 'titleEn': te, 'summary': {'en': se, 'hi': sh}} for (t, te, se, sh) in U]
assert len(out) == 33, len(out)
here = os.path.dirname(os.path.abspath(__file__))
os.makedirs(os.path.join(here, 'units'), exist_ok=True)
with open(os.path.join(here, 'units', '2-ayodhya.json'), 'w', encoding='utf8') as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print('wrote', len(out))
