/**
 * Kabīra ke Dohe, twenty-five of the best-known dohas of Kabīra, in Devanagari. The dohas are in Kabir's mixed
 * Sadhukkadi Hindi; a few are only found in sung or popular form, and Kabir's own words reached us through oral
 * tradition, so the readings of the printed editions differ a little line by line.
 *
 * Collated Nov 2026 against: kavitakosh.org "कबीर दोहावली" (K, its numbered first page and other pages of the same book,
 * base); hi.wikiquote.org "कबीर" (Q); vedpath.pages.dev "Dohas of Kabir" (V); and for a few dohas amarujala.com's Kabir
 * Jayanti gallery (A) and hi.wikipedia.org "कबीर" (Wk). Witnesses per doha: 1 K Q V; 2 K Q; 3 K Q V; 4 K Q A Wk; 5 K Q V;
 * 6 K Q V; 7 K Q; 8 K Q V Wk; 9 K Q V; 10 K Q V A; 11 K Q V Wk; 12 K V; 13 K V; 14 K V; 15 K V; 16 K Q V; 17 K Q V;
 * 18 K Q; 19 K Q; 20 K Q; 21 K Q; 22 K Q; 23 K Q; 24 K Q; 25 K Wk. Thus 1, 3-6, 8-11, 16 and 17 have three or more
 * copies and the others two; I looked for a third and did not find one, so the less-attested dohas rest on K with one more.
 * K prints some dohas twice (in the numbered page and in the later pages) with small differences; both prints were looked at.
 * Readings chosen against the base K: 1 "दुःख में सुमिरन ... दुःख काहे को होय" (Q, V; K "दुख में सुमरिन"); 3 "उडि आँखिन
 * परे" (V; K "उड आँखिन"); 4 "कर का मनका डार दे" (A, Wk; K and Q have "कर का मन का", a misprint); 5 "दोऊ खडे"
 * (V; K "दोनों") and "बलिहारी गुरु आपने" (V, Q; K "आपनो"); 6 "साधु ना भूखा जाय" (K, Q; V "न"); 8 "पूछि लीजिए" (K, Q;
 * V, Wk "पूछ"); 9 "ऋतु" (K "ॠतु"); 10 "पोथी पढि पढि ... पढे सो पंडित" (Q, V, A; K "पढ-पढ ... पढै"); 11 "बडा हुआ
 * तो क्या हुआ ... पंथी" (Q, V; K "बडा हुआ सो ... पँछी"); 12 "बहुरि करेगा कब" (K; V "करेगो"); 13 "ऐसी वाणी बोलिए ... आपहुँ"
 * (V; K p.1 "बोलेए"); 14 "बिन पानी साबुन बिना" (V; K "बिन साबुन पानी बिना"); 15 "दो पाटन के बीच में, साबुत बचा न कोय"
 * (V; K "दुइ पट भीतर आइके, साबित"); 18 "हीरा जन्म अमोल था, कौडी" (Q, and K's second print; K's first print has
 * the misprint "हीना"); 20 "जम जब घर ले जायेंगे, पडी रहेगी म्यान" (K, Q); 21 "थोथा देइ उडाय" (Q; K "थोथ"); 22 "जो तोकू काँटा
 * बुवे ... त्रिशूल" (K; Q has "जो तोको ... तिरसुल"); 23 and 24 as K and Q; 25 "पूजौं पहार ... याते ये चक्की भली" (K; Wk "वा ते तो
 * चाकी भली, पीसी खाय"). Doha 22 is often sung with "काँटा बुवै" and "तिरसूल"; 22 and 25 are given as in K. The other dohas of these pages, and "बुरा जो देखन मैं चला" (found in V only), are not in the list. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanKabirDohe: Mantra = {
  id: 'bhajan-kabir-dohe',
  title: 'कबीर के दोहे',
  titleEn: 'Kabir Dohe (selection of 25)',
  category: 'aarti',
  order: 45,
  deity: 'Nirguṇa Rāma',
  source: 'Kabīra, Sākhī (Sadhukkadi Hindi)',
  summary: 'Twenty-five of the best-known couplets of the weaver-saint Kabir. They teach remembering God in happiness as well as in sorrow, valuing a person for knowledge and not for caste, speaking gently, doing today\'s work today, and replacing reading and counting beads with real love and a clean mind.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'A selection of 25 well-known dohas, not the whole body of Kabir\'s sakhis, which runs to many hundreds of couplets.',
  sections: [
    {
      title: 'दोहे',
      titleEn: 'Dohas',
      note: 'Twenty-five dohas of Kabir, numbered 1 to 25.',
      verses: [
        {
          n: 1,
          text: 'दुःख में सुमिरन सब करे, सुख में करे न कोय ।\nजो सुख में सुमिरन करे, दुःख काहे को होय ॥',
          meaning: { en: 'In sorrow everyone remembers God; in happiness no one does. If a person remembered him in happiness too, why would sorrow come at all?' },
        },
        {
          n: 2,
          text: 'सुख में सुमिरन ना किया, दुःख में किया याद ।\nकह कबीर ता दास की, कौन सुने फरियाद ॥',
          meaning: { en: 'He did not remember God in happiness and called on him only in sorrow. Says Kabir, who will listen to the plea of such a servant?' },
        },
        {
          n: 3,
          text: 'तिनका कबहुँ न निंदिये, जो पाँयन तर होय ।\nकबहुँ उडि आँखिन परे, पीर घनेरी होय ॥',
          meaning: { en: 'Never despise even a blade of straw lying under your feet; if it should fly up and fall in your eye, the pain is great.' },
        },
        {
          n: 4,
          text: 'माला फेरत जुग भया, फिरा न मन का फेर ।\nकर का मनका डार दे, मन का मनका फेर ॥',
          meaning: { en: 'Telling the rosary for an age, the turning of the mind did not turn. Throw away the bead in your hand and turn the bead of the mind.' },
        },
        {
          n: 5,
          text: 'गुरु गोविन्द दोऊ खडे, काके लागूँ पाँय ।\nबलिहारी गुरु आपने, गोविन्द दियो बताय ॥',
          meaning: { en: 'Guru and Govinda both stand before me; whose feet shall I touch first? I give myself to my guru, for he is the one who showed me Govinda.' },
        },
        {
          n: 6,
          text: 'साईं इतना दीजिए, जा में कुटुम समाय ।\nमैं भी भूखा न रहूँ, साधु ना भूखा जाय ॥',
          meaning: { en: 'Lord, give me only so much that my family is provided for; that I too do not go hungry, and no holy man goes away hungry from my door.' },
        },
        {
          n: 7,
          text: 'लूट सके तो लूट ले, राम नाम की लूट ।\nपाछे फिरे पछताओगे, प्राण जाहिं जब छूट ॥',
          meaning: { en: 'Plunder if you can the treasure of the name of Rama. You will repent later, when the breath leaves the body.' },
        },
        {
          n: 8,
          text: 'जाति न पूछो साधु की, पूछि लीजिए ज्ञान ।\nमोल करो तलवार का, पडा रहन दो म्यान ॥',
          meaning: { en: 'Do not ask a holy man his caste; ask what he knows. Judge the value of the sword and let the sheath lie where it is.' },
        },
        {
          n: 9,
          text: 'धीरे-धीरे रे मना, धीरे सब कुछ होय ।\nमाली सींचे सौ घडा, ऋतु आए फल होय ॥',
          meaning: { en: 'Slowly, slowly, my mind; everything happens slowly. The gardener may water the tree with a hundred pots, but the fruit comes only when its season comes.' },
        },
        {
          n: 10,
          text: 'पोथी पढि पढि जग मुआ, पंडित भया न कोय ।\nढाई आखर प्रेम का, पढे सो पंडित होय ॥',
          meaning: { en: 'Reading book after book the world has died, and no one became a pandit. The one who reads the two and a half letters of love becomes a true pandit.' },
        },
        {
          n: 11,
          text: 'बडा हुआ तो क्या हुआ, जैसे पेड खजूर ।\nपंथी को छाया नहीं, फल लागे अति दूर ॥',
          meaning: { en: 'What good is being big, like the date palm? The traveller gets no shade from it, and the fruit hangs far out of reach.' },
        },
        {
          n: 12,
          text: 'काल करे सो आज कर, आज करे सो अब ।\nपल में प्रलय होएगी, बहुरि करेगा कब ॥',
          meaning: { en: 'What you would do tomorrow, do today; what you would do today, do now. In a moment the end may come; when will you do it then?' },
        },
        {
          n: 13,
          text: 'ऐसी वाणी बोलिए, मन का आपा खोय ।\nऔरन को शीतल करे, आपहुँ शीतल होय ॥',
          meaning: { en: 'Speak such words as put away the pride of the mind; they cool others and cool you too.' },
        },
        {
          n: 14,
          text: 'निंदक नियरे राखिए, आँगन कुटी छवाय ।\nबिन पानी साबुन बिना, निर्मल करे सुभाय ॥',
          meaning: { en: 'Keep your critic near; build him a hut in your courtyard. Without water and without soap, he makes your nature clean.' },
        },
        {
          n: 15,
          text: 'चलती चक्की देख के, दिया कबीरा रोय ।\nदो पाटन के बीच में, साबुत बचा न कोय ॥',
          meaning: { en: 'Seeing the mill grind, Kabir wept: between the two stones no one is left whole.' },
        },
        {
          n: 16,
          text: 'माया मरी न मन मरा, मर-मर गए शरीर ।\nआशा तृष्णा न मरी, कह गए दास कबीर ॥',
          meaning: { en: 'Neither illusion nor the mind died; bodies died again and again. Hope and craving did not die, says the servant Kabir.' },
        },
        {
          n: 17,
          text: 'माटी कहे कुम्हार से, तू क्या रौंदे मोय ।\nएक दिन ऐसा आएगा, मैं रौंदूँगी तोय ॥',
          meaning: { en: 'The clay says to the potter: why do you trample me? A day will come when I shall trample you.' },
        },
        {
          n: 18,
          text: 'रात गँवाई सोय के, दिवस गँवाया खाय ।\nहीरा जन्म अमोल था, कौडी बदले जाय ॥',
          meaning: { en: 'You wasted the nights in sleep and the days in eating. This birth was a priceless diamond, and it goes in exchange for a shell.' },
        },
        {
          n: 19,
          text: 'पाँच पहर धन्धे गया, तीन पहर गया सोय ।\nएक पहर हरि नाम बिन, मुक्ति कैसे होय ॥',
          meaning: { en: 'Five watches went in work and three in sleep. Without even one watch for the name of Hari, how can there be liberation?' },
        },
        {
          n: 20,
          text: 'कबीरा सोया क्या करे, उठि न भजे भगवान ।\nजम जब घर ले जायेंगे, पडी रहेगी म्यान ॥',
          meaning: { en: 'Kabir, why do you lie asleep? Rise and sing to God. When Yama takes you to his house, the sheath will lie behind, empty.' },
        },
        {
          n: 21,
          text: 'साधु ऐसा चाहिए, जैसा सूप सुभाय ।\nसार-सार को गहि रहे, थोथा देइ उडाय ॥',
          meaning: { en: 'A holy man should be like a winnowing basket in nature: he keeps the grain and lets the chaff blow away.' },
        },
        {
          n: 22,
          text: 'जो तोकू काँटा बुवे, ताहि बोय तू फूल ।\nतोकू फूल के फूल हैं, बाकू है त्रिशूल ॥',
          meaning: { en: 'Whoever sows thorns for you, sow flowers for him. You will have flowers, and he will have a trident of thorns.' },
        },
        {
          n: 23,
          text: 'जग में बैरी कोई नहीं, जो मन शीतल होय ।\nयह आपा तो डाल दे, दया करे सब कोय ॥',
          meaning: { en: 'No one in the world is an enemy if your mind is cool. Throw away this pride and everyone will show you kindness.' },
        },
        {
          n: 24,
          text: 'कबीरा ते नर अन्ध है, गुरु को कहते और ।\nहरि रूठे गुरु ठौर है, गुरु रूठे नहीं ठौर ॥',
          meaning: { en: 'Kabir says that those are blind who take the guru to be someone else. If Hari is angry, the guru is a shelter; if the guru is angry, there is no shelter.' },
        },
        {
          n: 25,
          text: 'पाहन पूजे हरि मिलें, तो मैं पूजौं पहार ।\nयाते ये चक्की भली, पीस खाय संसार ॥',
          meaning: { en: 'If worshipping a stone were to bring Hari, I would worship a mountain. Better than that is the grinding stone, for the whole world eats its flour.' },
        },
      ],
    },
  ],
};
