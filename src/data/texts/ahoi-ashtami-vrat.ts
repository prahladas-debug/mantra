/**
 * Ahoi Ashtami vrata: puja outline and the kathā of the sāhūkār's daughter-in-law and the Syāhū (porcupine), in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   A  aajtak.in, "Ahoi Ashtami Vrat Katha" (vrat-katha 2680758): sāhūkār with seven sons and seven daughters-in-law,
 *      the youngest takes the Syāhū's curse, Surahī cow, Garuḍa-bird, Syāhū's lice. Fullest; base.
 *   T  aajtak.in, "Ahoi Ashtami 2024 katha": the same story with a daughter-in-law and her sister-in-law, told shorter.
 *   B  bhaktibharat.com, "Ahoi Ashtami Vrat Katha": the short form (sāhūkār's wife digs clay, a seh/porcupine cub dies,
 *      her seven sons die one by one, the elders tell her to worship the seh and its cubs on Kartika krishna ashtami).
 *   R  Rites: aajtak.in 2024 (Ahoi Ashtami pujan vidhi) and bhaktibharat.com festival page (star arghya).
 *
 * CHOICES. A, T and B agree on the outline: clay-digging before Diwali, a Syāhū cub killed by the tool, the curse on the
 * womb (A, T) or the death of the sons (B), the remedy of Ahoī worship. The story is given as in A, whose episodes (Surahī cow, snake
 * and Garuḍa-bird, lice in the Syāhū's hair, the Syāhū's "you have deceived me", the sevenfold ujaman) are all present
 * in T in outline. Where A repeats a paragraph (the Syāhū's welcome appears twice in the web copy) it is given once. "सेह"
 * (B) and "स्याहू" (A, T) are both kept as printed; both are the porcupine. The 'ननद' of A is the sister-in-law (the
 * sāhūkār's only daughter, as T says). Spelling lightly normalised (no nukta). The couplet closing A ("हे स्याहू माता…")
 * is kept. Meanings are original.
 */
import type { Mantra } from '../types';

export const ahoiAshtamiVrat: Mantra = {
  id: 'ahoi-ashtami-vrat',
  title: 'अहोई अष्टमी व्रत कथा',
  titleEn: 'Ahoi Ashtami Vrat Katha',
  category: 'puja',
  order: 61,
  deity: 'Ahoī Mātā',
  source: 'North Indian vrata-kathā (Kārttika kṛṣṇa aṣṭamī, pūrṇimānta); popular printed and web copies',
  summary:
    'Ahoi Ashtami, the fast kept by mothers for their children on Kartika krishna ashtami (purnimanta), eight days before Diwali: the Ahoi Mata image and evening puja, the katha of the moneylender\'s youngest daughter-in-law and the cubs of the Syahu (porcupine), and the star arghya that ends the day.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'व्रत और पूजा का विधान',
      titleEn: 'The fast and the puja',
      note: 'Kartika krishna ashtami (purnimanta), about eight days before Diwali. Mothers fast for their children and break the fast on seeing a star.',
      verses: [
        {
          text: 'कार्तिक कृष्ण अष्टमी को, दीपावली से आठ दिन पहले, अहोई अष्टमी का व्रत किया जाता है। माताएँ अपनी सन्तान की लम्बी आयु और सुख के लिए अहोई माता की पूजा करती हैं।',
          meaning: { en: 'The Ahoi Ashtami fast is kept on the eighth day of the dark half of Kartika, eight days before Diwali. Mothers worship Ahoi Mata for the long life and happiness of their children.' },
        },
        {
          text: 'प्रातः स्नान करके अहोई की पूजा का संकल्प लें। दीवार पर गेरू या लाल रंग से अहोई माता की आकृति बनाएँ, जिसके साथ सेह (स्याहू) और उसके बच्चों का चित्र भी बनाया जाता है।',
          meaning: { en: 'Bathe in the morning and take the resolve to worship Ahoi. On the wall draw the form of Ahoi Mata in geru or red colour, together with a picture of the seh (Syahu, the porcupine) and her cubs.' },
        },
        {
          text: 'सूर्यास्त के बाद जब तारे निकल आएँ तब पूजन आरम्भ करें। पूजन-सामग्री में चाँदी या किसी धातु की एक अहोई, चाँदी के मोतियों की माला, जल से भरा कलश, दूध, भात, हलवा, फूल और दीपक रखें।',
          meaning: { en: 'Begin the puja after sunset, when the stars have come out. Keep ready a small silver (or metal) Ahoi, a garland of silver beads, a pot of water, milk, boiled rice, halva, flowers and a lamp.' },
        },
        {
          text: 'पहले अहोई माता की रोली, फूल और दीप से पूजा करें। इसके बाद उन्हें दूध और भात अर्पित करें। फिर हाथ में गेहूँ के सात दाने और कुछ दक्षिणा लेकर अहोई की कथा सुनें।',
          meaning: { en: 'First worship Ahoi Mata with roli, flowers and a lamp. Then offer her milk and rice. Then, holding seven grains of wheat and a little money in the hand, listen to the katha of Ahoi.' },
        },
        {
          text: 'कथा के बाद माला गले में पहन लें और हाथ में रखे गेहूँ के दाने तथा दक्षिणा सास को देकर उनका आशीर्वाद लें। यह चाँदी की माला अष्टमी से दीपावली तक गले में रहती है; दीपावली के दिन उसे उतारकर जल के छींटे देकर सुरक्षित रख दें।',
          meaning: { en: 'After the katha put the garland round your neck, give the wheat grains and the money to the mother-in-law, and take her blessing. The silver garland is worn from the ashtami until Diwali; on Diwali take it off, sprinkle it with water and put it away safely.' },
        },
        {
          text: 'सायंकाल तारों के दर्शन होने पर आकाश के तारे को जल का अर्घ्य देकर व्रत का समापन किया जाता है। कहीं-कहीं चन्द्रमा के उदय की प्रतीक्षा कर उसे अर्घ्य दिया जाता है।',
          meaning: { en: 'In the evening, when the stars are seen, the fast is ended by offering an arghya of water to a star in the sky. In some places the rising moon is awaited and given the arghya instead.' },
        },
      ],
    },
    {
      title: 'अहोई अष्टमी व्रत कथा',
      titleEn: 'The katha of the sahukar\'s daughter-in-law and the Syahu',
      note: 'Heard in the evening puja with grains of wheat (or turmeric rice) in a small bowl.',
      verses: [
        {
          text: 'पौराणिक कथा के अनुसार एक साहूकार था जिसके सात बेटे और सात बहुएँ थीं। दिवाली से पहले कार्तिक कृष्ण अष्टमी को सातों बहुएँ अपनी इकलौती ननद के साथ जंगल में जाकर खदान में मिट्टी खोद रही थीं। वहाँ स्याहू की माँद थी। मिट्टी खोदते समय ननद के हाथ से स्याहू का बच्चा मर गया।',
          meaning: { en: 'According to the old tradition, there was a moneylender with seven sons and seven daughters-in-law. Before Diwali, on the ashtami of Kartika, the seven daughters-in-law went to the forest with their only sister-in-law and were digging clay in a pit. There was a den of the Syahu there. While digging, the sister-in-law accidentally killed a Syahu cub.' },
        },
        {
          text: 'इससे स्याहू माता बहुत नाराज हो गईं और बोलीं कि मैं तेरी कोख बाँधूँगी। तब ननद ने अपनी सातों भाभियों से कहा कि तुम में से कोई अपनी कोख बँधवा लो। सभी भाभियों ने इनकार कर दिया। परन्तु सबसे छोटी भाभी ने सोचा कि यदि मैं कोख नहीं बँधवाऊँगी तो सास नाराज होंगी, और उसने ननद के बदले अपनी कोख बँधवा ली। इसके बाद उसे जो बच्चा होता वह सात दिन का होकर मर जाता।',
          meaning: { en: 'The Syahu was very angry and said, "I shall bind your womb." The sister-in-law then asked her seven brothers\' wives to let one of them have her womb bound, but all refused. The youngest thought that her mother-in-law would be displeased if she did not, and had her womb bound in the sister-in-law\'s place. After that, every child born to her died when seven days old.' },
        },
        {
          text: 'एक दिन उसने पण्डित को बुलाकर पूछा कि मेरी सन्तान सातवें दिन क्यों मर जाती है। पण्डित ने कहा कि तुम सुरही गाय की सेवा करो। सुरही गाय स्याहू माता की सखी है; वह तेरी कोख खुलवा देगी, तब तेरा बच्चा जिएगा। अब वह बहुत सवेरे उठकर चुपचाप सुरही गाय के नीचे साफ-सफाई कर आती।',
          meaning: { en: 'One day she called a pandit and asked why her children died on the seventh day. The pandit said: "Serve the Surahi cow. Surahi is a friend of the Syahu mother; she will get your womb opened, and then your child will live." So she began rising very early and quietly cleaning the place beneath the cow.' },
        },
        {
          text: 'सुरही गाय ने सोचा कि रोज उठकर मेरी सेवा कौन करता है, आज देखूँगी। सवेरे गऊ माता ने देखा कि साहूकार के बेटे की बहू उनके नीचे सफाई कर रही है। गऊ माता ने पूछा कि तू क्या माँगती है। साहूकार की बहू बोली कि स्याहू माता आपकी सखी हैं और उन्होंने मेरी कोख बाँध रखी है, आप मेरी कोख खुलवा दीजिए। गऊ माता ने कहा, अच्छा, ठीक है।',
          meaning: { en: 'The Surahi cow wondered who was serving her every morning, and decided to see. At dawn the cow mother saw the moneylender\'s son\'s wife cleaning beneath her, and asked what she wanted. The wife said, "The Syahu mother is your friend and has bound my womb; please get it opened." The cow said, "Very well."' },
        },
        {
          text: 'अब गऊ माता साहूकार की बहू को लेकर समुद्र पार अपनी सखी के पास चल पडीं। रास्ते में कडी धूप थी, इसलिए वे दोनों एक पेड के नीचे बैठ गईं। थोडी देर में एक साँप आया। उसी पेड पर गरुड पंखनी का एक बच्चा था, और साँप उसे डसने लगा। तब साहूकार की बहू ने साँप को मारकर ढाल के नीचे दबा दिया और बच्चे को बचा लिया।',
          meaning: { en: 'Now the cow mother set out with the moneylender\'s wife across the sea to her friend. The sun was fierce on the way, so the two sat down under a tree. After a while a snake came. On that tree was a young one of the Garuda bird, and the snake began to bite it. The moneylender\'s wife killed the snake, pressed it under her shield, and saved the chick.' },
        },
        {
          text: 'थोडी देर में गरुड पंखनी आई। वहाँ खून देखकर उसने साहूकार की बहू को चोंच मारनी शुरू कर दी। तब बहू बोली कि मैंने तेरे बच्चे को नहीं मारा, साँप तेरे बच्चे के पास आया था और मैंने तो उससे उसकी रक्षा की है। यह सुनकर गरुड पंखनी बोली, माँग, तू क्या माँगती है। बहू ने कहा कि सात समुद्र पार स्याहू माता रहती हैं, हमें उनके पास पहुँचा दे। तब गरुड पंखनी ने दोनों को अपनी पीठ पर बैठाकर स्याहू माता के पास पहुँचा दिया।',
          meaning: { en: 'Soon the Garuda bird came. Seeing blood there, she began to peck at the moneylender\'s wife. The wife said, "I did not kill your chick; a snake came near it, and I saved it from him." Hearing this the bird said, "Ask what you wish." She replied, "Across the seven seas lives the Syahu mother; take us to her." So the bird seated them both on her back and carried them to the Syahu.' },
        },
        {
          text: 'स्याहू माता उन्हें देखकर बोलीं, आ बहन, बहुत दिनों में आई है। फिर कहने लगीं कि बहन, मेरे सिर में जुएँ पड गई हैं। तब सुरही के कहने पर साहूकार की बहू ने उनकी सारी जुएँ निकाल दीं। इस पर स्याहू माता प्रसन्न होकर बोलीं कि तूने मेरे सिर में बहुत सलाई घेरी है, इसलिए तेरे सात बेटे और सात बहुएँ होंगी।',
          meaning: { en: 'Seeing them, the Syahu mother said, "Come, sister, you have come after many days." Then she said, "Sister, my head is full of lice." At Surahi\'s bidding the moneylender\'s wife picked out all the lice. Pleased, the Syahu mother said, "You have soothed my head so much that you shall have seven sons and seven daughters-in-law."' },
        },
        {
          text: 'वह बोली कि मेरे तो एक भी बेटा नहीं है, सात बेटे कहाँ से होंगे। स्याहू माता ने कहा कि वचन दे दिया है। तब साहूकार की बहू बोली कि मेरी कोख तो आपके पास बन्द पडी है। यह सुनकर स्याहू माता बोलीं कि तूने मुझे ठग लिया; जा, तेरे घर पर तुझे सात बेटे और सात बहुएँ मिलेंगी। तू जाकर उजमन करना: सात अहोई बनाकर सात कढाई करना।',
          meaning: { en: 'She said, "I have not even one son; where will seven come from?" The Syahu mother said, "I have given my word." Then the moneylender\'s wife said, "But my womb is shut up with you." Hearing this the Syahu mother said, "You have outwitted me. Go; at home you will find seven sons and seven daughters-in-law. Go and perform the ujaman: make seven Ahois and offer seven pans of sweets."' },
        },
        {
          text: 'वह लौटकर घर आई तो वहाँ देखा कि सात बेटे और सात बहुएँ बैठे हैं। वह बहुत खुश हो गई। उसने सात अहोई बनाईं, सात उजमन किए और सात कढाई कीं।',
          meaning: { en: 'She returned home and found seven sons and seven daughters-in-law sitting there. She was overjoyed. She made seven Ahois, performed seven ujamans and offered seven pans of sweets.' },
        },
        {
          text: 'शाम के समय जेठानियाँ आपस में कहने लगीं कि जल्दी-जल्दी पूजा कर लो, कहीं छोटी बच्चों को याद करके रोने न लगे। थोडी देर में उन्होंने अपने बच्चों से कहा कि अपनी चाची के घर जाकर देख आओ कि आज वह अभी तक रोई क्यों नहीं। बच्चों ने आकर कहा कि चाची तो कुछ माँड रही है, खूब उजमन हो रहा है।',
          meaning: { en: 'In the evening the elder sisters-in-law said to one another, "Finish the puja quickly, lest the youngest begins to weep for her children." After a while they told their children to go to their aunt\'s house and see why she had not yet wept. The children came back and said, "Auntie is drawing something; there is a grand ujaman going on."' },
        },
        {
          text: 'यह सुनते ही जेठानियाँ दौडी-दौडी वहाँ आईं और कहने लगीं कि तूने कोख कैसे खुलवाई। वह बोली कि तुमने तो कोख बँधवाई नहीं थी, मैंने बँधवा ली थी; अब स्याहू माता ने कृपा करके मेरी कोख खोल दी है।',
          meaning: { en: 'Hearing this the elder sisters-in-law came running and asked, "How did you get your womb opened?" She said, "You did not have yours bound; I did. Now the Syahu mother in her kindness has opened mine."' },
        },
        {
          text: 'हे स्याहू माता! जिस प्रकार उस साहूकार की बहू की कोख खोली, उसी प्रकार हमारी भी कोख खोलना।',
          meaning: { en: 'O Syahu Mother! As you opened the womb of that moneylender\'s daughter-in-law, so open ours also.' },
        },
      ],
    },
    {
      title: 'अहोई अष्टमी की संक्षिप्त कथा',
      titleEn: 'The short form of the katha',
      note: 'The briefer version printed in many booklets, in which the sahukar\'s wife herself kills the seh cub.',
      verses: [
        {
          text: 'प्राचीन काल में किसी नगर में एक साहूकार रहता था। उसके सात लडके थे। दीपावली से पहले साहूकार की स्त्री घर की लीपापोती के लिए मिट्टी लेने खदान में गई और कुदाल से मिट्टी खोदने लगी।',
          meaning: { en: 'In ancient times a moneylender lived in a certain town. He had seven sons. Before Diwali the moneylender\'s wife went to a pit to fetch clay for plastering the house, and began to dig with a hoe.' },
        },
        {
          text: 'दैवयोग से उसी जगह एक सेह की माँद थी। सहसा उस स्त्री के हाथ से कुदाल बच्चे को लग गई जिससे सेह का बच्चा तत्काल मर गया। इस हत्या का साहूकार की पत्नी को बहुत दुःख हुआ, पर अब क्या हो सकता था; वह शोकाकुल और पछताती हुई घर लौट आई।',
          meaning: { en: 'By chance there was a den of a seh in that very spot. Suddenly the hoe struck a cub in her hand, and the seh\'s young one died on the spot. The moneylender\'s wife was deeply grieved by the killing, but what could be done now; she returned home sorrowful and repenting.' },
        },
        {
          text: 'कुछ दिनों बाद उसके एक बेटे का निधन हो गया। फिर अचानक दूसरा, तीसरा, और इस प्रकार वर्ष भर में उसके सातों बेटे मर गए। वह बहुत दुःखी रहने लगी। एक दिन उसने पास-पडोस की स्त्रियों को रोते हुए बताया कि मैंने जान-बूझकर कभी पाप नहीं किया, हाँ, एक बार खदान में मिट्टी खोदते समय अनजाने में मेरे हाथ से सेह के बच्चे की हत्या हुई थी, और उसके बाद मेरे सातों बेटे मर गए।',
          meaning: { en: 'A few days later one of her sons died. Then suddenly a second, a third, and so within a year all her sons had died. She lived in great distress. One day, weeping, she told the neighbour women: "I never sinned knowingly; but once, while digging clay in the pit, I unknowingly killed a seh\'s cub, and after that all my seven sons died."' },
        },
        {
          text: 'यह सुनकर पडोस की वृद्ध स्त्रियों ने उसे दिलासा देते हुए कहा कि यह बात बताकर तूने जो पश्चात्ताप किया है उससे तेरा आधा पाप नष्ट हो गया। तू अष्टमी को भगवती माता की शरण लेकर सेह और सेह के बच्चों का चित्र बनाकर उनकी आराधना कर और क्षमा माँग; ईश्वर की कृपा से तेरा पाप धुल जाएगा।',
          meaning: { en: 'Hearing this, the old women of the neighbourhood comforted her: "By confessing this and repenting, half your sin is already gone. On the ashtami take refuge in Bhagavati, draw the seh and her cubs, worship them and ask forgiveness; by God\'s grace your sin will be washed away."' },
        },
        {
          text: 'साहूकार की पत्नी ने वृद्ध स्त्रियों की बात मानकर कार्तिक मास की कृष्ण पक्ष की अष्टमी को उपवास और पूजा-याचना की। वह हर वर्ष नियम से ऐसा करने लगी। तब उसे सात पुत्र-रत्न प्राप्त हुए। तभी से अहोई व्रत की परम्परा चल पडी।',
          meaning: { en: 'Following the old women\'s advice, the moneylender\'s wife fasted and prayed for forgiveness on the ashtami of the dark half of Kartika, and went on doing so every year. Then she received seven sons. From that time the tradition of the Ahoi fast spread.' },
        },
        {
          text: 'अहोई माता की जय!',
          meaning: { en: 'Victory to Ahoi Mata!' },
        },
      ],
    },
  ],
};
