/**
 * Eight padas of Kabīra (Sadhukkadi Hindi), in Devanagari. Collated Nov 2026. Kabir's dohas are in bhajan-kabir-dohe.
 *
 * Witnesses: K = kavitakosh.org, the poet's pages (most of them two pages, with small differences); H = hindwi.org (only pada 4).
 * Per pada: 1 मोको कहाँ ढूँढे K (two quite different forms; the sung form is given, with "खोजी" from the other form; the repeated
 * line "मैं तो तेरे पास में बंदे" is not written out); 2 झीनी झीनी बीनी चदरिया K ("चदरिया झीनी रे झीनी" is
 * the sung form of this same pada, so it is not repeated), with "साँई को सियत" for K's "साँ को सियत", a loss of letters; 3 मन
 * लाग्यो मेरो यार फकीरी में K (two pages, same text); 4 साधो, देखो जग बौराना K only; 5 घूँघट के पट खोल रे K H (with "आसन" and "जोग जुगत
 * सों ... पिय पायो" taken from K); 6 रहना नहिं देस बिराना है K only; 7 हमन है इश्क मस्ताना K only, with "अपने" for K's "अनपे"; 8 करम गति
 * टारै K (two pages). So only 4 and 5 and 8 have more than one copy, and 1 to 3 have two forms of one copy; the rest rest on K
 * alone, and I did not find a second typed copy. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanKabirPadas: Mantra = {
  id: 'bhajan-kabir-padas',
  title: 'कबीर के पद',
  titleEn: 'Kabir: Selected Padas',
  category: 'aarti',
  order: 73,
  deity: 'Nirguṇa Rāma',
  source: 'Kabīra, Pada and Śabda (Sadhukkadi Hindi)',
  summary: 'Eight well-known padas and shabads of Kabir: God is not in temple or mosque but near you, the fine sheet of the body, the joy of a beggar\'s life, a world gone mad over religion, the lifted veil, a foreign land, the lover\'s intoxication and the power of fate.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'A selection of 8 padas and shabads; Kabir\'s pads are many and their sung forms differ. His dohas are in a separate entry.',
  sections: [
    {
      title: 'मोको कहाँ ढूँढे रे बंदे',
      titleEn: 'Moko kahan dhundhe re bande',
      note: 'God is not in pilgrimage, temple or ritual but in the seeker\'s own breath.',
      verses: [
        {
          text: 'मोको कहाँ ढूँढे रे बंदे ।\nमैं तो तेरे पास में ॥',
          meaning: { en: 'Where do you look for me, friend? I am right next to you.' },
        },
        {
          n: 1,
          text: 'ना तीरथ में ना मूरत में ।\nना एकांत निवास में ॥',
          meaning: { en: 'Not in pilgrimage, not in an idol, not in a solitary dwelling.' },
        },
        {
          n: 2,
          text: 'ना मंदिर में ना मस्जिद में ।\nना काबे कैलास में ॥',
          meaning: { en: 'Not in a temple, not in a mosque, not in the Kaaba or on Kailasa.' },
        },
        {
          n: 3,
          text: 'ना मैं जप में ना मैं तप में ।\nना मैं बरत उपास में ॥',
          meaning: { en: 'I am not in chanting nor in austerity, nor in vows and fasting.' },
        },
        {
          n: 4,
          text: 'ना मैं किरिया करम में रहता ।\nनहिं जोग सन्यास में ॥',
          meaning: { en: 'I do not dwell in rites and works, nor in yoga and renunciation.' },
        },
        {
          n: 5,
          text: 'नहिं प्राण में नहिं पिंड में ।\nना ब्रह्मांड आकाश में ॥',
          meaning: { en: 'Not in the vital breath, not in the body, not in the cosmic egg or the sky.' },
        },
        {
          n: 6,
          text: 'ना मैं प्रकुति प्रवार गुफा में ।\nनहिं स्वांसों की स्वांस में ॥',
          meaning: { en: 'Not in nature\'s mountains and caves, and not even in the breath of breath.' },
        },
        {
          n: 7,
          text: 'खोजी होए तुरत मिल जाऊँ ।\nइक पल की तालास में ॥',
          meaning: { en: 'If one truly seeks, I am found at once, in a moment\'s search.' },
        },
        {
          n: 8,
          text: 'कहत कबीर सुनो भाई साधो ।\nमैं तो हूँ बिस्वास में ॥',
          meaning: { en: 'Kabir says: listen, brother sadhu, I am in faith.' },
        },
      ],
    },
    {
      title: 'झीनी झीनी बीनी चदरिया',
      titleEn: 'Jhini jhini bini chadariya',
      note: 'The body is a fine cloth woven by the Lord, which the soul must return unsoiled.',
      verses: [
        {
          text: 'झीनी झीनी बीनी चदरिया ॥',
          meaning: { en: 'A fine, fine sheet has been woven.' },
        },
        {
          n: 1,
          text: 'काहे कै ताना काहे कै भरनी ।\nकौन तार से बीनी चदरिया ॥',
          meaning: { en: 'What is its warp and what its weft? With what thread was the sheet woven?' },
        },
        {
          n: 2,
          text: 'इडा पिङ्गला ताना भरनी ।\nसुखमन तार से बीनी चदरिया ॥',
          meaning: { en: 'The channels ida and pingala are warp and weft, and the thread is sushumna.' },
        },
        {
          n: 3,
          text: 'आठ कँवल दल चरखा डोलै ।\nपाँच तत्त्व गुन तीनी चदरिया ॥',
          meaning: { en: 'The wheel of eight lotus-petals turns; five elements and three qualities make the sheet.' },
        },
        {
          n: 4,
          text: 'साँई को सियत मास दस लागे ।\nठोंक ठोंक कै बीनी चदरिया ॥',
          meaning: { en: 'The Lord took ten months to stitch it, weaving the sheet carefully, beating it down firmly.' },
        },
        {
          n: 5,
          text: 'सो चादर सुर नर मुनि ओढी ।\nओढि कै मैली कीनी चदरिया ॥',
          meaning: { en: 'Gods, men and sages wore that sheet, and after wearing it they soiled it.' },
        },
        {
          n: 6,
          text: 'दास कबीर जतन करि ओढी ।\nज्यों की त्यों धर दीनी चदरिया ॥',
          meaning: { en: 'Servant Kabir wore it with care, and put the sheet back just as it was.' },
        },
      ],
    },
    {
      title: 'मन लाग्यो मेरो यार फकीरी में',
      titleEn: 'Man lagyo mero yar fakiri mein',
      note: 'The joy of poverty in the Lord\'s name is greater than wealth.',
      verses: [
        {
          text: 'मन लाग्यो मेरो यार फकीरी में ॥',
          meaning: { en: 'My mind is fixed on the life of a beggar-saint, my friend.' },
        },
        {
          n: 1,
          text: 'जो सुख पाऊँ राम भजन में ।\nसो सुख नाहिं अमीरी में ॥',
          meaning: { en: 'The happiness I get in worshipping Rama is not to be found in riches.' },
        },
        {
          n: 2,
          text: 'भला बुरा सब का सुन लीजै ।\nकर गुजरान गरीबी में ॥',
          meaning: { en: 'Listen to everyone, good and bad, and get by in poverty.' },
        },
        {
          n: 3,
          text: 'आखिर यह तन छार मिलेगा ।\nकहाँ फिरत मगरूरी में ॥',
          meaning: { en: 'In the end this body will become ash; why walk about in pride?' },
        },
        {
          n: 4,
          text: 'प्रेम नगर में रहनी हमारी ।\nसाहिब मिले सबूरी में ॥',
          meaning: { en: 'We live in the city of love, and the Lord is found in patience.' },
        },
        {
          n: 5,
          text: 'कहत कबीर सुनो भाई साधो ।\nसाहिब मिले सबूरी में ॥',
          meaning: { en: 'Kabir says: listen, brother sadhu, the Lord is found in patience.' },
        },
      ],
    },
    {
      title: 'साधो, देखो जग बौराना',
      titleEn: 'Sadho, dekho jag baurana',
      note: 'Kabir mocks the religious quarrels and empty display of Hindus and Muslims alike.',
      verses: [
        {
          text: 'साधो, देखो जग बौराना ॥',
          meaning: { en: 'Look, sadhu, the world has gone mad.' },
        },
        {
          n: 1,
          text: 'साँची कही तो मारन धावै, झूठे जग पतियाना ॥',
          meaning: { en: 'Speak the truth and they rush to beat you; the world believes the liars.' },
        },
        {
          n: 2,
          text: 'हिन्दू कहत, राम हमारा, मुसलमान रहमाना ।\nआपस में दौऊ लडै मरत हैं, मरम कोई नहिं जाना ॥',
          meaning: { en: 'The Hindu says Rama is ours, the Muslim says Rahman. They fight and die against each other, and neither knows the secret.' },
        },
        {
          n: 3,
          text: 'बहुत मिले मोहि नेमी, धर्मी, प्रात करे असनाना ।\nआतम-छाँडि पषानै पूजै, तिनका थोथा ज्ञाना ॥',
          meaning: { en: 'I met many rule-followers and pious men who bathe every dawn; they leave the Self and worship stones, so their knowledge is hollow.' },
        },
        {
          n: 4,
          text: 'आसन मारि डिंभ धरि बैठे, मन में बहुत गुमाना ।\nपीपर-पाथर पूजन लागे, तीरथ-बरत भुलाना ॥',
          meaning: { en: 'They sit in postures with a show of piety and great pride in their minds; they have taken to worshipping peepal trees and stones, and forgotten the real pilgrimage and vows.' },
        },
        {
          n: 5,
          text: 'माला पहिरे, टोपी पहिरे, छाप-तिलक अनुमाना ।\nसाखी सब्दै गावत भूले, आतम खबर न जाना ॥',
          meaning: { en: 'They wear rosaries, caps, seals and tilak marks as guesses at holiness; they sing sakhis and shabds and forget, never learning news of the Self.' },
        },
        {
          n: 6,
          text: 'घर-घर मंत्र जो देन फिरत हैं, माया के अभिमाना ।\nगुरुवा सहित सिष्य सब बूढे, अन्तकाल पछिताना ॥',
          meaning: { en: 'Those who go from house to house giving mantras are proud of maya; teacher and pupils sink together and repent at the end.' },
        },
        {
          n: 7,
          text: 'बहुतक देखे पीर-औलिया, पढै किताब-कुराना ।\nकरै मुरीद, कबर बतलावैं, उनहूँ खुदा न जाना ॥',
          meaning: { en: 'I saw many pirs and holy men who read the Quran and other books, make disciples and point to graves; they too have not known God.' },
        },
        {
          n: 8,
          text: 'हिन्दू की दया, मेहर तुरकन की, दोनों घर से भागी ।\nवह करै जिबह, वो झटका मारे, आग दोऊ घर लागी ॥',
          meaning: { en: 'The Hindu\'s compassion and the Turk\'s mercy have both fled their houses; one slaughters the slow way and the other with a single blow, and both houses are on fire.' },
        },
        {
          n: 9,
          text: 'या बिधि हँसत चलत है, हमको आप कहावै स्याना ।\nकहै कबीर सुनो भाई साधो, इनमें कौन दिवाना ॥',
          meaning: { en: 'In this way they go about laughing, and call themselves wise. Says Kabir: listen, brother sadhu, which of these is the madman?' },
        },
      ],
    },
    {
      title: 'घूँघट के पट खोल रे',
      titleEn: 'Ghunghat ke pat khol re',
      note: 'The soul is told to lift the veil to meet the beloved.',
      verses: [
        {
          n: 1,
          text: 'तोको पीव मिलैंगे, घूँघट के पट खोल रे ।\nघट घट में वह साईं रमता, कटुक बचन मत बोल रे ॥',
          meaning: { en: 'You will meet your beloved; open the veil. The Lord lives in every heart, so do not speak bitter words.' },
        },
        {
          n: 2,
          text: 'धन जोबन को गरब न कीजै, झूठा पँचरंग चोल रे ।\nसुन्न महल में दियना बार ले, आसन सों मत डोल रे ॥',
          meaning: { en: 'Do not be proud of wealth and youth, a false five-coloured garment. Light the lamp in the empty palace and do not move from your seat.' },
        },
        {
          n: 3,
          text: 'जोग जुगत सों रंगमहल में, पिय पायो अनमोल रे ।\nकहै कबीर आनंद भयो है, बाजत अनहद ढोल रे ॥',
          meaning: { en: 'By the way of yoga, in the palace of colour, I found the priceless Beloved. Kabir says: joy has come, and the drum of the unstruck sound plays.' },
        },
      ],
    },
    {
      title: 'रहना नहिं देस बिराना है',
      titleEn: 'Rahna nahin des birana hai',
      note: 'This foreign land is not our home; the world is fragile.',
      verses: [
        {
          text: 'रहना नहिं देस बिराना है ॥',
          meaning: { en: 'We cannot stay in this foreign land.' },
        },
        {
          n: 1,
          text: 'यह संसार कागद की पुडिया, बूँद पडे गलि जाना है ॥',
          meaning: { en: 'This world is a paper packet; one drop of water and it dissolves.' },
        },
        {
          n: 2,
          text: 'यह संसार काँटे की बाडी, उलझ-पुलझ मरि जाना है ॥',
          meaning: { en: 'This world is a hedge of thorns; one gets entangled and dies.' },
        },
        {
          n: 3,
          text: 'यह संसार झाड अरु झाँखर, आग लगे बरि जाना है ॥',
          meaning: { en: 'This world is shrub and brambles; when fire is lit they burn up.' },
        },
        {
          n: 4,
          text: 'कहत कबीर सुनो भाई साधो, सतगुरु नाम ठिकाना है ॥',
          meaning: { en: 'Kabir says: listen, brother sadhu, the true teacher\'s Name is our resting place.' },
        },
      ],
    },
    {
      title: 'हमन है इश्क मस्ताना',
      titleEn: 'Haman hai ishq mastana',
      note: 'The lover of God has no use for worldly cleverness.',
      verses: [
        {
          n: 1,
          text: 'हमन है इश्क मस्ताना, हमन को होशियारी क्या ।\nरहें आजाद या जग से, हमन दुनिया से यारी क्या ॥',
          meaning: { en: 'I am drunk with love; what use is cleverness to me? Let me live free of the world; what have I to do with friendship with it?' },
        },
        {
          n: 2,
          text: 'जो बिछुडे हैं पियारे से, भटकते दर-ब-दर फिरते ।\nहमारा यार है हम में, हमन को इंतजारी क्या ॥',
          meaning: { en: 'Those who are parted from the beloved wander from door to door. My friend is within me; why should I wait?' },
        },
        {
          n: 3,
          text: 'खलक सब नाम अपने को, बहुत कर सिर पटकता है ।\nहमन गुरनाम साँचा है, हमन दुनिया से यारी क्या ॥',
          meaning: { en: 'All the world beats its head in the name of its own self. For me the Guru\'s Name is the truth; what friendship with the world could I want?' },
        },
        {
          n: 4,
          text: 'न पल बिछुडे पिया हमसे, न हम बिछडे पियारे से ।\nउन्हीं से नेह लागी है, हमन को बेकरारी क्या ॥',
          meaning: { en: 'The beloved is not parted from me for a moment, nor am I from the beloved. My love is with him alone; why should I be restless?' },
        },
        {
          n: 5,
          text: 'कबीरा इश्क का माता, दुई को दूर कर दिल से ।\nजो चलना राह नाजुक है, हमन सिर बोझ भारी क्या ॥',
          meaning: { en: 'Kabir, intoxicated with love, says: throw duality out of your heart; the road you must travel is delicate, so why carry a heavy load on your head?' },
        },
      ],
    },
    {
      title: 'करम गति टारै नाहिं टरी',
      titleEn: 'Karam gati tarai nahin tari',
      note: 'Fate cannot be turned aside, even for the great.',
      verses: [
        {
          text: 'करम गति टारै नाहिं टरी ॥',
          meaning: { en: 'The course of karma cannot be turned aside.' },
        },
        {
          n: 1,
          text: 'मुनि बसिष्ठ से पंडित ज्ञानी, सिधि के लगन धरि ।\nसीता हरन मरन दसरथ को, बनमें बिपति परी ॥',
          meaning: { en: 'Even the learned sage Vasishtha, who set the auspicious time for Rama\'s coronation, could not avert it: Sita was abducted, Dasharatha died, and trouble fell in the forest.' },
        },
        {
          n: 2,
          text: 'कहँ वह फंद कहाँ वह पारधि, कहँ वह मिरग चरी ।\nकोटि गाय नित पुन्य करत नृग, गिरगिट-जोन परि ॥',
          meaning: { en: 'Where was that snare and where that hunter, and where that deer? King Nriga gave millions of cows in charity every day, yet fell into the form of a lizard.' },
        },
        {
          n: 3,
          text: 'पाण्डव जिनके आप सारथी, तिन पर बिपति परी ।\nकहत कबीर सुनो भाई साधो, होने होके रही ॥',
          meaning: { en: 'Even the Pandavas, whose charioteer was the Lord himself, fell into trouble. Kabir says: listen, brother sadhu, what is to be will be.' },
        },
      ],
    },
  ],
};
