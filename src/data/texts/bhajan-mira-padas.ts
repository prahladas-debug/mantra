/**
 * Ten padas of Mīrābāī (Rajasthani and Braj mixed with Hindi) in Devanagari. Collated Nov 2026. "पायोजी मैंने" is in bhajan-payoji-maine.
 *
 * Mīrā's padas exist in many sung forms and the printed recensions differ widely, so the text given is a particular form, not a
 * critical text. Witnesses: K = kavitakosh.org, the poet's pages; H = hindwi.org "पद" pages. Per pada: 1 मेरे तो गिरधर गोपाल K (two pages
 * with the same text; H prints a different, shorter recension: "माता छोड़ी पिता छोड़े ..."; K's form is given); 2 पग घूँघरू K; 3 बसो
 * मेरे नैनन K H; 4 हरि तुम हरो K (two pages, which differ in the middle lines; the longer, second is taken); 5 हे री मैं तो प्रेम दिवानी H,
 * and K's "हेरी म्हा दरद दिवाणौ" carries the घायल/जौहरी couplet, in a different form; 6 स्याम मने चाकर K (two) H; 7 बादल देख K (two) H;
 * 8 नहिं भावै K H (H has an extra couplet "मेवा मिसरी ..." and a different last line; K's form is given); 9 दरस बिन K (two) H;
 * 10 राणाजी म्हे तो K H. The pada sometimes cited as "हरि आप हरो जन री भीर" is given in the only form found, "हरि तुम हरो जन की भीर".
 * Where K and H differ in a word and one is a spelling variant the majority was taken. Nukta letters are written without the
 * dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanMiraPadas: Mantra = {
  id: 'bhajan-mira-padas',
  title: 'मीराबाई के पद',
  titleEn: 'Mirabai: Selected Padas',
  category: 'aarti',
  order: 72,
  deity: 'Śrī Kṛṣṇa',
  source: 'Mīrābāī, Padāvalī (Rajasthani/Braj Hindi)',
  summary: 'Ten well-known padas of Mirabai, the princess who gave up her family for Krishna: her declaration that Giridhar is her only lord, dancing with anklets, the plea to dwell in her eyes, her love-pain, the wish to be his servant and her refusal of the Rana\'s country.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'A selection of 10 padas, in one sung or printed form of each, not the whole of Mira\'s padas, whose texts vary widely between editions. \'Payoji maine\' is in its own entry.',
  sections: [
    {
      title: 'मेरे तो गिरधर गोपाल दूसरो न कोई',
      titleEn: 'Mere to Girdhar Gopal',
      note: 'Mira\'s declaration that Krishna is her only lord (Raga Jhanjhoti).',
      verses: [
        {
          text: 'मेरे तो गिरधर गोपाल दूसरो न कोई ॥',
          meaning: { en: 'For me there is only Girdhar Gopal and no one else.' },
        },
        {
          n: 1,
          text: 'जाके सिर मोर-मुकुट मेरो पति सोई ।\nतात मात भ्रात बंधु आपनो न कोई ॥',
          meaning: { en: 'He who wears the peacock crown on his head is my husband. Father, mother, brother, kinsman, none of them is mine.' },
        },
        {
          n: 2,
          text: 'छाँडि दई कुल की कानि कहा करिहै कोई ।\nसंतन ढिग बैठि बैठि लोक-लाज खोई ॥',
          meaning: { en: 'I have given up the honour of my family; what can anyone do? Sitting by the saints again and again, I have lost my fear of public shame.' },
        },
        {
          n: 3,
          text: 'चुनरी के किए टूक ओढ लीन्ही लोई ।\nमोती-मूँगे उतार बनमाला पोई ॥',
          meaning: { en: 'I tore my fine sari to rags and put on a coarse blanket; I took off pearls and coral and strung a garland of forest flowers.' },
        },
        {
          n: 4,
          text: 'अँसुवन जल सींचि-सींचि प्रेम-बेलि बोई ।\nअब तो बेल फैल गई आनँद-फल होई ॥',
          meaning: { en: 'I watered the creeper of love again and again with my tears; now the vine has spread and will bear the fruit of bliss.' },
        },
        {
          n: 5,
          text: 'दूध की मथनियाँ बडे प्रेम से बिलोई ।\nमाखन जब काढि लियो छाछ पिये कोई ॥',
          meaning: { en: 'I churned the milk with great love; once the butter was taken out, whoever wished could drink the buttermilk.' },
        },
        {
          n: 6,
          text: 'भगति देखि राजी भई जगत देखि रोई ।\nदासी मीरा लाल गिरधर तारो अब मोही ॥',
          meaning: { en: 'Seeing devotion I was glad, seeing the world I wept. Mira, your servant, begs: dear Giridhar, save me now.' },
        },
      ],
    },
    {
      title: 'पग घूँघरू बाँध मीरा नाची रे',
      titleEn: 'Pag ghunghru bandh Mira nachi re',
      note: 'Mira dances in the streets despite the family\'s anger.',
      verses: [
        {
          text: 'पग घूँघरू बाँध मीरा नाची रे ॥',
          meaning: { en: 'Tying anklets on her feet, Mira danced.' },
        },
        {
          n: 1,
          text: 'मैं तो मेरे नारायण की आपहि हो गई दासी रे ।\nलोग कहै मीरा भई बावरी, न्यात कहै कुलनासी रे ॥',
          meaning: { en: 'I have become the servant of my own Narayana by myself. People say Mira has gone mad; relatives say she has ruined the family.' },
        },
        {
          n: 2,
          text: 'बिष का प्याला राणाजी भेज्या पीवत मीरा हाँसी रे ।\nमीरा के प्रभु गिरिधर नागर सहज मिले अबिनासी रे ॥',
          meaning: { en: 'The Rana sent a cup of poison, and Mira drank it laughing. Mira\'s lord Giridhar Nagar, the imperishable, is easily met.' },
        },
      ],
    },
    {
      title: 'बसो मेरे नैनन में नंदलाल',
      titleEn: 'Baso mere nainan mein Nandlal',
      note: 'Mira asks Krishna to dwell in her eyes.',
      verses: [
        {
          text: 'बसो मेरे नैनन में नंदलाल ॥',
          meaning: { en: 'Dwell in my eyes, Nandalala.' },
        },
        {
          n: 1,
          text: 'मोहनी मूरति साँवरि सूरति, नैना बने बिसाल ।\nअधर सुधारस मुरली राजत, उर बैजंती-माल ॥',
          meaning: { en: 'Your form is enchanting, your face dark and lovely, and your eyes large. On your lips the flute rests, full of nectar, and a garland of vaijayanti flowers lies on your chest.' },
        },
        {
          n: 2,
          text: 'छुद्र घंटिका कटि-तट सोभित, नूपुर सबद रसाल ।\nमीरा प्रभु संतन सुखदाई, भगत-बछल गोपाल ॥',
          meaning: { en: 'Little bells adorn your waist and your anklets make a sweet sound. Mira\'s lord gives joy to the saints; Gopala loves his devotees.' },
        },
      ],
    },
    {
      title: 'हरि तुम हरो जन की भीर',
      titleEn: 'Hari tum haro jan ki bhir',
      note: 'A prayer recalling how Hari rescued Draupadi, the devotee Prahlada and the elephant.',
      verses: [
        {
          n: 1,
          text: 'हरि तुम हरो जन की भीर ।\nद्रोपदी की लाज राखी, तुम बढायो चीर ॥',
          meaning: { en: 'Hari, remove the troubles of your devotees. You saved Draupadi\'s honour when you lengthened her sari.' },
        },
        {
          n: 2,
          text: 'भक्त कारण रूप नरहरि, धरयो आप सरीर ।\nहिरणकश्यपु मार दीन्हों, धरयो नाहिंन धीर ॥',
          meaning: { en: 'For the sake of his devotee you took the body of Narahari, and killed Hiranyakashipu, who could not keep his composure.' },
        },
        {
          n: 3,
          text: 'बूडते गजराज राखे, कियो बाहर नीर ।\nदासि मीरा लाल गिरिधर, दुःख जहाँ तहँ पीर ॥',
          meaning: { en: 'You saved the drowning elephant-king and brought him out of the water. Mira, your servant, says: dear Giridhar, wherever I turn there is sorrow and pain; take it away.' },
        },
      ],
    },
    {
      title: 'हे री मैं तो प्रेम दिवानी',
      titleEn: 'He ri main to prem diwani',
      note: 'Mira\'s pain of love that no one else can understand.',
      verses: [
        {
          text: 'हे री मैं तो प्रेम दिवानी, मेरा दरद न जाने कोय ॥',
          meaning: { en: 'Oh friend, I am mad with love, and no one knows my pain.' },
        },
        {
          n: 1,
          text: 'सूली ऊपर सेज हमारी, किस बिध सोना होय ।\nगगन-मंडल पर सेज पिया की, किस बिध मिलना होय ॥',
          meaning: { en: 'My bed is on the stake; how can I sleep? My beloved\'s bed is in the dome of the sky; how can we meet?' },
        },
        {
          n: 2,
          text: 'घायल की गति घायल जानै, कि जिन लागी होय ।\nजौहरी की गति जौहरी जानै, कि जिन लागी होय ॥',
          meaning: { en: 'Only the wounded know the state of the wounded, those who have felt the blow. Only a jeweller knows a jeweller\'s way, one who has felt it.' },
        },
        {
          n: 3,
          text: 'दरद की मारी बन-बन डोलूँ, बैद मिल्यो नहिं कोय ।\nमीरा की प्रभु पीर मिटै जब बैद साँवलिया होय ॥',
          meaning: { en: 'Struck by pain, I wander from forest to forest and find no physician. Mira\'s pain will go only when the dark Lord himself becomes her healer.' },
        },
      ],
    },
    {
      title: 'स्याम मने चाकर राखो जी',
      titleEn: 'Syam mane chakar rakho ji',
      note: 'Mira begs to be Krishna\'s servant in the groves of Vrindavan.',
      verses: [
        {
          text: 'स्याम मने चाकर राखो जी ।\nगिरधारी लाला चाकर राखो जी ॥',
          meaning: { en: 'Shyam, keep me as your servant; Giridhari, dear one, keep me as a servant.' },
        },
        {
          n: 1,
          text: 'चाकर रहसूँ बाग लगासूँ नित उठ दरसण पासूँ ।\nबिंद्राबन की कुंजगलिन में तेरी लीला गासूँ ॥',
          meaning: { en: 'As your servant I will plant gardens and see you each morning when I rise; in the grove-lanes of Vrindavan I will sing your play.' },
        },
        {
          n: 2,
          text: 'चाकरी में दरसण पाऊँ सुमिरण पाऊँ खरची ।\nभाव भगति जागीरी पाऊँ तीनूँ बाताँ सरसी ॥',
          meaning: { en: 'In service I will get your sight, and the remembrance of you as my allowance, and as my estate the feeling of devotion; all three things will be fulfilled.' },
        },
        {
          n: 3,
          text: 'मोर मुकुट पीतांबर सोहै गल बैजंती माला ।\nबिंद्राबन में धेनु चरावे मोहन मुरलीवाला ॥',
          meaning: { en: 'You shine in a peacock crown and yellow garment with a vaijayanti garland on your neck; in Vrindavan the flute-player Mohan grazes the cows.' },
        },
        {
          n: 4,
          text: 'हरे हरे नित बाग लगाऊँ बिच बिच राखूँ क्यारी ।\nसाँवरिया के दरसण पाऊँ पहर कुसुम्मी सारी ॥',
          meaning: { en: 'I will plant green gardens, with small beds here and there, and I will wear a saffron-red sari when I see the dark one.' },
        },
        {
          n: 5,
          text: 'जोगी आया जोग करणकूँ तप करणे संन्यासी ।\nहरि भजनकूँ साधू आया बिंद्राबन के बासी ॥',
          meaning: { en: 'The yogi came to practise yoga, the sannyasi to do penance, and the saints, dwellers of Vrindavan, came to worship Hari.' },
        },
        {
          n: 6,
          text: 'मीरा के प्रभु गहिर गंभीरा सदा रहो जी धीरा ।\nआधी रात प्रभु दरसन दीन्हें प्रेमनदी के तीरा ॥',
          meaning: { en: 'Mira\'s lord is deep and grave; stay ever calm, my heart. At midnight the Lord gave his sight on the bank of the river of love.' },
        },
      ],
    },
    {
      title: 'बादल देख डरी हो, स्याम',
      titleEn: 'Badal dekh dari ho, Syam',
      note: 'A separated woman, afraid of the rain clouds, calls to her absent lord.',
      verses: [
        {
          text: 'बादल देख डरी हो, स्याम! मैं बादल देख डरी ॥',
          meaning: { en: 'Shyam, I am afraid, I am afraid when I see the clouds.' },
        },
        {
          n: 1,
          text: 'काली-पीली घटा ऊमडी, बरस्यो एक घरी ।\nजित जाऊँ तित पाणी पाणी, हुई सब भोम हरी ॥',
          meaning: { en: 'Dark and yellowish clouds gathered and rained for an hour. Wherever I go there is only water, and the whole earth has turned green.' },
        },
        {
          n: 2,
          text: 'जाका पिय परदेस बसत है, भीजूँ बाहर खरी ।\nमीरा के प्रभु हरि अबिनासी, कीजो प्रीत खरी ॥',
          meaning: { en: 'Her beloved lives in a foreign land, and she stands outside getting wet. Mira says: Lord Hari, the imperishable, keep your love true.' },
        },
      ],
    },
    {
      title: 'नहिं भावै थांरो देसडलो जी रंगरूडो',
      titleEn: 'Nahin bhavai thanro desadlo',
      note: 'Mira tells the Rana that she has given up his world for Giridhar.',
      verses: [
        {
          text: 'नहिं भावै थांरो देसडलो जी रंगरूडो ॥',
          meaning: { en: 'Your fine-coloured country does not please me, Rana.' },
        },
        {
          n: 1,
          text: 'थांरा देसा में राणा साध नहीं छै, लोग बसे सब कूडो ।\nगहणा गाँठी राणा हम सब त्यागा, त्याग्यो कररो चूडो ॥',
          meaning: { en: 'In your land there are no holy men, Rana; all the people who live there are worthless. We have given up ornaments and jewellery, and given up the bangles on our wrists.' },
        },
        {
          n: 2,
          text: 'काजल टीकी हम सब त्याग्या, त्याग्यो है बाँधन जूडो ।\nमीरा के प्रभु गिरधर नागर, बर पायो छै रूडो ॥',
          meaning: { en: 'We have given up kajal and the forehead mark, and given up tying up our hair. Mira\'s lord is Giridhar Nagar; she has gained a fine husband.' },
        },
      ],
    },
    {
      title: 'दरस बिन दूखण लागे नैन',
      titleEn: 'Daras bin dukhan lage nain',
      note: 'Mira\'s eyes ache for the sight of her beloved.',
      verses: [
        {
          n: 1,
          text: 'दरस बिन दूखण लागे नैन ।\nजबसे तुम बिछुडे प्रभु मोरे, कबहुँ न पायो चैन ॥',
          meaning: { en: 'My eyes ache without your sight. Since you were parted from me, my lord, I have never found peace.' },
        },
        {
          n: 2,
          text: 'सबद सुणत मेरी छतियाँ काँपै, मीठे लागै बैन ।\nबिरह कथा काँसूँ कहूँ सजनी, बह गई करवत ऐन ॥',
          meaning: { en: 'My heart trembles when I hear your voice, and your words sound sweet. To whom can I tell the tale of separation, friend? It has cut through me like a saw.' },
        },
        {
          n: 3,
          text: 'कल न परत पल हरि मग जोवत, भई छमासी रैन ।\nमीरा के प्रभु कब रे मिलोगे, दुख मेटण सुख दैन ॥',
          meaning: { en: 'I find no rest even a moment, watching for Hari\'s road; the night has grown as long as six months. Mira says: my lord, when will you meet me, you who remove pain and give happiness?' },
        },
      ],
    },
    {
      title: 'राणाजी, म्हे तो गोविन्द का गुण गास्यां',
      titleEn: 'Ranaji, mhe to Govind ka gun gasyan',
      note: 'Mira tells the Rana that she will go on singing of Govinda.',
      verses: [
        {
          n: 1,
          text: 'राणाजी, म्हे तो गोविन्द का गुण गास्यां ।\nचरणामृत को नेम हमारे, नित उठ दरसण जास्यां ॥',
          meaning: { en: 'Rana, I shall sing the virtues of Govinda. Taking the holy water of his feet is my rule; I will go for his sight every morning.' },
        },
        {
          n: 2,
          text: 'हरि मंदर में निरत करास्यां, घूँघरियाँ धमकास्यां ।\nराम नाम का झाझ चलास्यां भवसागर तर जास्यां ॥',
          meaning: { en: 'In the temple of Hari I shall dance, making my anklets ring; I will set the ship of Ram\'s name afloat and cross the ocean of worldly life.' },
        },
        {
          n: 3,
          text: 'यह संसार बाड का काँटा ज्या संगत नहीं जास्यां ।\nमीरा कहै प्रभु गिरधर नागर निरख परख गुण गास्यां ॥',
          meaning: { en: 'This world is a thorn in the hedge; I will not go along with its company. Mira says: Lord Giridhar Nagar, I will look, test and then sing your virtues.' },
        },
      ],
    },
  ],
};
