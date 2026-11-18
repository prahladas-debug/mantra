/**
 * Śrī Gāyatrī Cālīsā, in Hindi/Awadhi, Devanagari (the text printed in the Gāyatrī Parivāra tradition; poet not named).
 *
 * Collated Nov 2026 against four typed copies:
 *   B  bhaktibharat.com (amp), "Gayatri Chalisa" (base);   H  hindu-blog.com, "Gayatri Chalisa text in Hindi";
 *   S  shubhpanchang.com, "Gayatri Chalisa";   A  aajtak.in, "Shri Gayatri Chalisa".
 * B and H are the same recension (identical slips such as "सितम्बर", "विघा", "बुद्घि"); S and A are independent, so the
 * readings below follow S and A where they agree against B/H (spelling slips of B/H are mended in the same way):
 *   d1 opening seed syllables "ह्रीं श्रीं क्लीं" exactly as S and A print them (B and H print "हीं श्रीं क्लीं");
 *   v3 "सतरूपा" (S, A "सतरूपा/सत रूपा"; B "सतरुपा");  v4 "हंसारूढ़ श्वेताम्बर धारी" (B/H "सितम्बर");
 *   v6 "दुर्मति";  v7 "अद्भुत";  v10 "पार न पावें" (B/H "पारन", "does not reach the end");  v11 "ब्रह्माणी";
 *   v13 "अविद्या" (B/H "अविघा");  v14 "कालरात्रि वरदा कल्याणी";  v15 "ब्रह्मा";  v17 "जय जय जय त्रिपदा भयहारी"
 *   (B/H "जै जै जै");  v19 "क्लेशा" (S; B/H "क्लेषा", A "कलेशा");  v20 "तुमहिं ह्वै जाई" (S "ह्वै", A "व्है"; B/H "है");
 *   v22 "ब्रह्माण्ड";  v24 "तुम सन तरे पातकी भारी" (A; S "मम सन तरैं", B/H "पतकी");  v26 "मंद बुद्धि" (B/H "बुद्घि");
 *   v28 "क्लेश";  v29 "सन्तति … सुसन्तति" (B/H "संतिति") and "सम्पति" (S, A; B/H "संपत्ति");  v34 "सद्गुरु";
 *   v36 "सिद्धि";  v37 "योगी" (S, A; B/H "जोगी");  v39 "बल, बुद्धि, विद्या" (B/H "बुद्घि, विघा");  v40 "उपजें" (S, A).
 * Kept from B/H against S/A: v1 "ॐ युत" (H "ओम"), v8 "गहै … तरै", v10 "तुम्हरी", v12 "कोऊ", v13 "प्रकासै", v19 "जानि",
 * v24-v26 "तुम सन", "बुधि", v27 "दारिद मिटै" (A "दरिद्र"), v33 "और" (A "ओर"), v35 "बड़भागी", v40 "जो यह" (A "जे यह").
 * Spelling-only variants (ए/ऐ endings, ं/न्, ण्ड/ंड) follow B; commas of the sources are dropped except in the lists of v37 and v39.
 * The forty chaupai are numbered 1-40; the two opening dohas and the closing doha are not. Nukta letters are written without
 * the dot. Meanings are original; no published translation was used.
 */
import type { Mantra } from '../types';

export const gayatriChalisa: Mantra = {
  id: 'gayatri-chalisa',
  title: 'श्री गायत्री चालीसा',
  titleEn: 'Sri Gayatri Chalisa',
  category: 'chalisa',
  order: 22,
  deity: 'Śrī Gāyatrī',
  source: 'Traditional (poet not named), Hindi/Awadhi',
  summary: 'The forty-verse Hindi hymn to Gayatri, mother of the Vedas: the seed syllables and the twenty-four letters of the mantra, her swan-borne form with book and rosary, her identity with Sarasvati, Lakshmi and Kali, the power of the mantra to bring knowledge, health and peace, and the blessings for those who recite it with devotion.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening dohas',
      verses: [
        {
          text: 'ह्रीं श्रीं क्लीं मेधा प्रभा, जीवन ज्योति प्रचण्ड ।\nशांति, क्रांति, जागृति, प्रगति, रचना शक्ति अखण्ड ॥',
          meaning: { en: 'Hrim, Shrim, Klim; intellect, radiance, the flame of life, burning bright; peace, revolution, awakening, progress, and unbroken creative power.' },
        },
        {
          text: 'जगत जननि, मंगल करनि, गायत्री सुखधाम ।\nप्रणवों सावित्री, स्वधा, स्वाहा पूरन काम ॥',
          meaning: { en: 'Mother of the world, source of blessings, Gayatri, abode of happiness; Pranava, Savitri, Svadha and Svaha, who fulfils every wish.' },
        },
      ],
    },
    {
      title: 'चालीसा',
      titleEn: 'Chalisa',
      note: 'The forty verses.',
      verses: [
        {
          n: 1,
          text: 'भूर्भुवः स्वः ॐ युत जननी ।\nगायत्री नित कलिमल दहनी ॥',
          meaning: { en: 'You are joined with Om and Bhur Bhuvah Svah, Mother Gayatri, who always burns away the stain of the Kali age.' },
        },
        {
          n: 2,
          text: 'अक्षर चौबिस परम पुनीता ।\nइनमें बसें शास्त्र श्रुति गीता ॥',
          meaning: { en: 'Its twenty-four syllables are most pure; in them dwell the scriptures, the Shruti and the Gita.' },
        },
        {
          n: 3,
          text: 'शाश्वत सतोगुणी सतरूपा ।\nसत्य सनातन सुधा अनूपा ॥',
          meaning: { en: 'You are eternal, of pure sattva and true in form; truth everlasting, a nectar beyond compare.' },
        },
        {
          n: 4,
          text: 'हंसारूढ श्वेताम्बर धारी ।\nस्वर्णकांति शुचि गगन बिहारी ॥',
          meaning: { en: 'Seated on a swan, robed in white, with a golden-bright, pure form, you move through the sky.' },
        },
        {
          n: 5,
          text: 'पुस्तक पुष्प कमंडलु माला ।\nशुभ्र वर्ण तनु नयन विशाला ॥',
          meaning: { en: 'You hold a book, flowers, a water-pot and a rosary; your body is pure white and your eyes are wide.' },
        },
        {
          n: 6,
          text: 'ध्यान धरत पुलकित हिय होई ।\nसुख उपजत दुःख दुर्मति खोई ॥',
          meaning: { en: 'The heart thrills as one meditates on you; happiness arises and sorrow and bad thinking are lost.' },
        },
        {
          n: 7,
          text: 'कामधेनु तुम सुर तरु छाया ।\nनिराकार की अद्भुत माया ॥',
          meaning: { en: 'You are the wish-cow and the shade of the wish-tree; you are the wonderful power of the formless.' },
        },
        {
          n: 8,
          text: 'तुम्हरी शरण गहै जो कोई ।\nतरै सकल संकट सों सोई ॥',
          meaning: { en: 'Whoever takes refuge in you crosses over all his troubles.' },
        },
        {
          n: 9,
          text: 'सरस्वती लक्ष्मी तुम काली ।\nदिपै तुम्हारी ज्योति निराली ॥',
          meaning: { en: 'You are Sarasvati, Lakshmi and Kali; your light shines with a marvellous glory.' },
        },
        {
          n: 10,
          text: 'तुम्हरी महिमा पार न पावें ।\nजो शारद शत मुख गुण गावें ॥',
          meaning: { en: 'Even Sharada with a hundred mouths cannot reach the end of your glory when she sings it.' },
        },
        {
          n: 11,
          text: 'चार वेद की मातु पुनीता ।\nतुम ब्रह्माणी गौरी सीता ॥',
          meaning: { en: 'You are the pure mother of the four Vedas; you are Brahmani, Gauri and Sita.' },
        },
        {
          n: 12,
          text: 'महामंत्र जितने जग माहीं ।\nकोऊ गायत्री सम नाहीं ॥',
          meaning: { en: 'Among all the great mantras in the world, none equals Gayatri.' },
        },
        {
          n: 13,
          text: 'सुमिरत हिय में ज्ञान प्रकासै ।\nआलस पाप अविद्या नासै ॥',
          meaning: { en: 'Remembering you, knowledge dawns in the heart, and laziness, sin and ignorance are destroyed.' },
        },
        {
          n: 14,
          text: 'सृष्टि बीज जग जननि भवानी ।\nकालरात्रि वरदा कल्याणी ॥',
          meaning: { en: 'You are the seed of creation, mother of the world, Bhavani, Kalaratri, giver of boons, bringer of welfare.' },
        },
        {
          n: 15,
          text: 'ब्रह्मा विष्णु रुद्र सुर जेते ।\nतुम सों पावें सुरता तेते ॥',
          meaning: { en: 'Brahma, Vishnu, Rudra and all the gods receive their godliness only from you.' },
        },
        {
          n: 16,
          text: 'तुम भक्तन की भक्त तुम्हारे ।\nजननिहिं पुत्र प्राण ते प्यारे ॥',
          meaning: { en: 'You are the devotee of your devotees; they are dearer to you than life, as sons are to a mother.' },
        },
        {
          n: 17,
          text: 'महिमा अपरम्पार तुम्हारी ।\nजय जय जय त्रिपदा भयहारी ॥',
          meaning: { en: 'Your glory is boundless; victory, victory, victory to the three-footed one, who removes fear.' },
        },
        {
          n: 18,
          text: 'पूरित सकल ज्ञान विज्ञाना ।\nतुम सम अधिक न जग में आना ॥',
          meaning: { en: 'You are full of all knowledge and wisdom, and no one in the world is greater than you.' },
        },
        {
          n: 19,
          text: 'तुमहिं जानि कछु रहै न शेषा ।\nतुमहिं पाय कछु रहै न क्लेशा ॥',
          meaning: { en: 'Knowing you, nothing more remains to be known; having found you, no affliction remains.' },
        },
        {
          n: 20,
          text: 'जानत तुमहिं तुमहिं ह्वै जाई ।\nपारस परसि कुधातु सुहाई ॥',
          meaning: { en: 'One who knows you becomes you, as base metal touched by the philosopher\'s stone becomes gold.' },
        },
        {
          n: 21,
          text: 'तुम्हरी शक्ति दिपै सब ठाई ।\nमाता तुम सब ठौर समाई ॥',
          meaning: { en: 'Your power shines everywhere; Mother, you pervade every place.' },
        },
        {
          n: 22,
          text: 'ग्रह नक्षत्र ब्रह्माण्ड घनेरे ।\nसब गतिवान तुम्हारे प्रेरे ॥',
          meaning: { en: 'The planets, stars and countless universes all move because you impel them.' },
        },
        {
          n: 23,
          text: 'सकलसृष्टि की प्राण विधाता ।\nपालक पोषक नाशक त्राता ॥',
          meaning: { en: 'You are the giver of life to all creation: nourisher, sustainer, destroyer and saviour.' },
        },
        {
          n: 24,
          text: 'मातेश्वरी दया व्रत धारी ।\nतुम सन तरे पातकी भारी ॥',
          meaning: { en: 'Mother goddess, vowed to mercy; through you even heavy sinners are carried across.' },
        },
        {
          n: 25,
          text: 'जापर कृपा तुम्हारी होई ।\nतापर कृपा करें सब कोई ॥',
          meaning: { en: 'Anyone on whom your grace falls receives kindness from everyone.' },
        },
        {
          n: 26,
          text: 'मंद बुद्धि ते बुधि बल पावें ।\nरोगी रोग रहित है जावें ॥',
          meaning: { en: 'The dull-witted gain wit and strength, and the sick become free of disease.' },
        },
        {
          n: 27,
          text: 'दारिद मिटै कटै सब पीरा ।\nनाशै दुःख हरै भव भीरा ॥',
          meaning: { en: 'Poverty ends and all pain is cut away; sorrow is destroyed and the fear of worldly life removed.' },
        },
        {
          n: 28,
          text: 'गृह क्लेश चित चिंता भारी ।\nनासै गायत्री भय हारी ॥',
          meaning: { en: 'Household strife and heavy worry of the mind are destroyed by Gayatri, remover of fear.' },
        },
        {
          n: 29,
          text: 'सन्तति हीन सुसन्तति पावें ।\nसुख सम्पति युत मोद मनावें ॥',
          meaning: { en: 'The childless gain good children and celebrate with happiness and wealth.' },
        },
        {
          n: 30,
          text: 'भूत पिशाच सबै भय खावें ।\nयम के दूत निकट नहिं आवें ॥',
          meaning: { en: 'Ghosts and spirits are afraid, and the messengers of Yama do not come near.' },
        },
        {
          n: 31,
          text: 'जो सधवा सुमिरें चित लाई ।\nअछत सुहाग सदा सुखदाई ॥',
          meaning: { en: 'A married woman who remembers you with a steady mind keeps her marriage unbroken and enjoys lasting happiness.' },
        },
        {
          n: 32,
          text: 'घर वर सुख प्रद लहैं कुमारी ।\nविधवा रहें सत्य व्रत धारी ॥',
          meaning: { en: 'Unmarried girls find a good home and husband, and widows keep their vow of truth.' },
        },
        {
          n: 33,
          text: 'जयति जयति जगदम्ब भवानी ।\nतुम सम और दयालु न दानी ॥',
          meaning: { en: 'Victory, victory to Jagadamba Bhavani; there is no one so kind and generous as you.' },
        },
        {
          n: 34,
          text: 'जो सद्गुरु सों दीक्षा पावें ।\nसो साधन को सफल बनावें ॥',
          meaning: { en: 'Those who receive initiation from a true guru make their practice bear fruit.' },
        },
        {
          n: 35,
          text: 'सुमिरन करें सुरुचि बडभागी ।\nलहैं मनोरथ गृही विरागी ॥',
          meaning: { en: 'The fortunate who remember you with love, householders and renunciants alike, attain their desires.' },
        },
        {
          n: 36,
          text: 'अष्ट सिद्धि नवनिधि की दाता ।\nसब समर्थ गायत्री माता ॥',
          meaning: { en: 'Giver of the eight powers and the nine treasures, Mother Gayatri, you are all-capable.' },
        },
        {
          n: 37,
          text: 'ऋषि, मुनि, यती, तपस्वी, योगी ।\nआरत, अर्थी, चिंतित, भोगी ॥',
          meaning: { en: 'Sages, ascetics, yogis, the afflicted, the seekers, the anxious and the pleasure-seekers,' },
        },
        {
          n: 38,
          text: 'जो जो शरण तुम्हारी आवें ।\nसो सो मन वांछित फल पावें ॥',
          meaning: { en: 'whoever comes to your refuge obtains the fruit he desires in his heart.' },
        },
        {
          n: 39,
          text: 'बल, बुद्धि, विद्या, शील स्वभाऊ ।\nधन वैभव यश तेज उछाऊ ॥',
          meaning: { en: 'Strength, intellect, learning, good character and nature, wealth, splendour, fame and brilliance:' },
        },
        {
          n: 40,
          text: 'सकल बढें उपजें सुख नाना ।\nजो यह पाठ करै धरि ध्याना ॥',
          meaning: { en: 'all of these grow and many kinds of happiness arise for the one who recites this with steady mind.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'यह चालीसा भक्तियुत, पाठ करे जो कोय ।\nतापर कृपा प्रसन्नता, गायत्री की होय ॥',
          meaning: { en: 'Whoever recites this Chalisa with devotion will receive the grace and favour of Gayatri.' },
        },
      ],
    },
  ],
};
