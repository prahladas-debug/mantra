/**
 * Śrī Śiva Cālīsā, attributed to Ayodhyādāsa (Awadhi/Hindi), in Devanagari.
 *
 * Collated Nov 2026 against four typed copies of the widely printed text:
 *   P  prabhatkhabar.com "Shiv Chalisa" (base);   B  bhaktibharat.com, Shiv Chalisa;
 *   M  mahakavya.com "Shiv Chalisa with meaning";  S  shubhpanchang.com, Shiv Chalisa.
 * P, B and M agree (apart from spacing and the verse numbers); S, a second recension of the same text,
 * differs in a few words, none of which changes the sense; the P/B/M readings are kept. S readings:
 *   c3 "छार लगाये"; c4 "नाग मुनि मोहे"; c15 "सेवक अस्तुति"; c17 "प्रगटी … जरे सुरासुर भये";
 *   c23 "जै जै जै … सबकी घट वासी"; c27 "मातु पिता भ्राता सब कोई"; c30 "करों तिहारी";
 *   c32 "नारद शारद"; c36 "पुत्रहीन इच्छा कर कोई"; c38 "तन नहिं ताके रहे कलेशा"; c40 "अन्त वास".
 * The forty verses are numbered; the opening doha and the closing couplet "कहैं अयोध्यादास …"
 * are not. Nukta letters are written without the dot (as in the Hanuman Chalisa here). The verse
 * "ॠनियां" is written ऋनियां. The closing dohas name the date (Saṃvat 64, Mārgaśīrṣa, ṣaṣṭhī) as printed.
 * Meanings are original; no published translation was used.
 */
import type { Mantra } from '../types';

export const shivChalisa: Mantra = {
  id: 'shiv-chalisa',
  title: 'श्री शिव चालीसा',
  titleEn: 'Sri Shiv Chalisa',
  category: 'chalisa',
  order: 24,
  deity: 'Śrī Śiva',
  source: 'Ayodhyādāsa (attributed), Hindi/Awadhi',
  summary: 'The forty-verse hymn to Shiva in Hindi: his form with the moon, Ganga, serpent earrings and trident; his saving of the gods from Taraka, Jalandhara and Tripura, the poison of the churning of the ocean; Rama\'s worship of him before Lanka; a plea for help in trouble; and the benefits of reciting it, especially on Trayodashi. Recited on Mondays and in Shravana.',
  summaryKn: 'ಹಿಂದಿಯಲ್ಲಿ ಶಿವನ ನಲವತ್ತು ಪದ್ಯಗಳ ಸ್ತುತಿ: ಚಂದ್ರ, ಗಂಗೆ, ನಾಗಕುಂಡಲ, ತ್ರಿಶೂಲಗಳ ರೂಪ; ತಾರಕ, ಜಲಂಧರ, ತ್ರಿಪುರರಿಂದ ದೇವತೆಗಳನ್ನು ರಕ್ಷಿಸಿದ್ದು, ಸಮುದ್ರಮಥನದ ವಿಷ; ಲಂಕೆಯ ಮೊದಲು ರಾಮನು ಮಾಡಿದ ಪೂಜೆ; ಕಷ್ಟದಲ್ಲಿ ಸಹಾಯ ಬೇಡಿಕೆ; ತ್ರಯೋದಶಿಯಂದು ವಿಶೇಷವಾಗಿ ಪಠಿಸುವ ಫಲ. ಸೋಮವಾರ ಮತ್ತು ಶ್ರಾವಣದಲ್ಲಿ ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'जय गणेश गिरिजा सुवन, मंगल मूल सुजान ।\nकहत अयोध्यादास तुम, देहु अभय वरदान ॥',
          meaning: { en: 'Victory to Ganesha, son of Girija, root of all good and the wise one; Ayodhyadas says: grant me the boon of fearlessness.', kn: 'ಗಿರಿಜೆಯ ಮಗನಾದ, ಮಂಗಳದ ಮೂಲವಾದ, ಜ್ಞಾನಿ ಗಣೇಶನಿಗೆ ಜಯ; ಅಯೋಧ್ಯಾದಾಸ ಹೇಳುತ್ತಾನೆ: ನನಗೆ ಅಭಯದ ವರ ಕೊಡು.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय गिरिजा पति दीन दयाला ।\nसदा करत सन्तन प्रतिपाला ॥',
          meaning: { en: 'Victory to the Lord of Girija, kind to the poor, who always protects the saints.', kn: 'ಗಿರಿಜಾಪತಿ, ದೀನರ ಮೇಲೆ ದಯೆಯುಳ್ಳವನೇ, ಸಂತರನ್ನು ಸದಾ ಪಾಲಿಸುವವನೇ, ನಿನಗೆ ಜಯ.' },
        },
        {
          n: 2,
          text: 'भाल चन्द्रमा सोहत नीके ।\nकानन कुण्डल नागफनी के ॥',
          meaning: { en: 'The moon shines well on your forehead, and cobra-hood earrings on your ears.', kn: 'ನಿನ್ನ ಹಣೆಯ ಮೇಲೆ ಚಂದ್ರ ಶೋಭಿಸುತ್ತಾನೆ; ಕಿವಿಗಳಲ್ಲಿ ನಾಗಫಣದ ಕುಂಡಲಗಳು.' },
        },
        {
          n: 3,
          text: 'अंग गौर शिर गंग बहाये ।\nमुण्डमाल तन क्षार लगाए ॥',
          meaning: { en: 'Your body is fair, the Ganga flows from your head; you wear a garland of skulls and smear ashes on the body.', kn: 'ನಿನ್ನ ಮೈ ಬಿಳುಪು, ತಲೆಯಿಂದ ಗಂಗೆ ಹರಿಯುತ್ತಾಳೆ; ಮುಂಡಮಾಲೆ ಧರಿಸಿ, ಮೈಗೆ ಭಸ್ಮ ಬಳಿದಿರುವೆ.' },
        },
        {
          n: 4,
          text: 'वस्त्र खाल बाघम्बर सोहे ।\nछवि को देखि नाग मन मोहे ॥',
          meaning: { en: 'Your clothes are a tiger skin; seeing your beauty even the serpents are charmed.', kn: 'ನಿನ್ನ ವಸ್ತ್ರ ಹುಲಿಯ ಚರ್ಮ; ಆ ಸೊಬಗು ನೋಡಿ ಸರ್ಪಗಳ ಮನಸ್ಸೂ ಮೋಹಗೊಳ್ಳುತ್ತದೆ.' },
        },
        {
          n: 5,
          text: 'मैना मातु की हवे दुलारी ।\nबाम अंग सोहत छवि न्यारी ॥',
          meaning: { en: 'Maina\'s beloved daughter, Parvati, graces your left side with a matchless beauty.', kn: 'ಮೈನಾದೇವಿಯ ಮುದ್ದಿನ ಮಗಳು ಪಾರ್ವತಿ ನಿನ್ನ ಎಡ ಭಾಗದಲ್ಲಿ ಅನನ್ಯ ಸೊಬಗಿನಿಂದ ಶೋಭಿಸುತ್ತಾಳೆ.' },
        },
        {
          n: 6,
          text: 'कर त्रिशूल सोहत छवि भारी ।\nकरत सदा शत्रुन क्षयकारी ॥',
          meaning: { en: 'The trident in your hand shines grandly and always destroys your enemies.', kn: 'ಕೈಯ ತ್ರಿಶೂಲ ಅತಿ ಭವ್ಯವಾಗಿ ಹೊಳೆಯುತ್ತದೆ; ಅದು ಸದಾ ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡುತ್ತದೆ.' },
        },
        {
          n: 7,
          text: 'नन्दि गणेश सोहै तहँ कैसे ।\nसागर मध्य कमल हैं जैसे ॥',
          meaning: { en: 'Nandi and Ganesha look as lovely there as lotuses in the middle of the ocean.', kn: 'ನಂದಿ ಮತ್ತು ಗಣೇಶ ಅಲ್ಲಿ ಸಮುದ್ರದ ನಡುವಿನ ಕಮಲಗಳಂತೆ ಶೋಭಿಸುತ್ತಾರೆ.' },
        },
        {
          n: 8,
          text: 'कार्तिक श्याम और गणराऊ ।\nया छवि को कहि जात न काऊ ॥',
          meaning: { en: 'Kartikeya, the dark one, and the host of attendants: no one can describe this beauty.', kn: 'ಕಾರ್ತಿಕೇಯ, ಶ್ಯಾಮ ಮತ್ತು ಗಣಗಳ ರಾಜ; ಈ ಸೊಬಗನ್ನು ಯಾರೂ ವರ್ಣಿಸಲಾರರು.' },
        },
        {
          n: 9,
          text: 'देवन जबहीं जाय पुकारा ।\nतब ही दुख प्रभु आप निवारा ॥',
          meaning: { en: 'Whenever the gods went and called to you, you removed their grief at once.', kn: 'ದೇವತೆಗಳು ಹೋಗಿ ಕೂಗಿದಾಗಲೆಲ್ಲ ನೀನು ಆಗಲೇ ಅವರ ದುಃಖ ನೀಗಿಸಿದೆ.' },
        },
        {
          n: 10,
          text: 'किया उपद्रव तारक भारी ।\nदेवन सब मिलि तुमहिं जुहारी ॥',
          meaning: { en: 'When Taraka made great trouble, all the gods together praised you.', kn: 'ತಾರಕನು ದೊಡ್ಡ ಉಪದ್ರವ ಮಾಡಿದಾಗ ದೇವತೆಗಳೆಲ್ಲರೂ ಸೇರಿ ನಿನ್ನನ್ನು ಸ್ತುತಿಸಿದರು.' },
        },
        {
          n: 11,
          text: 'तुरत षडानन आप पठायउ ।\nलवनिमेष महँ मारि गिरायउ ॥',
          meaning: { en: 'At once you sent the six-faced Skanda, who killed him in the twinkling of an eye.', kn: 'ಕೂಡಲೇ ನೀನು ಷಣ್ಮುಖನನ್ನು ಕಳುಹಿಸಿದೆ; ಅವನು ಕಣ್ಣುಮುಚ್ಚಿ ತೆರೆಯುವುದರೊಳಗೆ ಅವನನ್ನು ಕೊಂದನು.' },
        },
        {
          n: 12,
          text: 'आप जलंधर असुर संहारा ।\nसुयश तुम्हार विदित संसारा ॥',
          meaning: { en: 'You destroyed the demon Jalandhara; your fame is known to the whole world.', kn: 'ಜಲಂಧರ ಅಸುರನನ್ನು ನೀನೇ ಸಂಹರಿಸಿದೆ; ನಿನ್ನ ಸುಯಶಸ್ಸು ಜಗತ್ತಿಗೆ ತಿಳಿದಿದೆ.' },
        },
        {
          n: 13,
          text: 'त्रिपुरासुर सन युद्ध मचाई ।\nसबहिं कृपा कर लीन बचाई ॥',
          meaning: { en: 'When Tripurasura waged war, you graciously saved everyone.', kn: 'ತ್ರಿಪುರಾಸುರ ಯುದ್ಧ ಮಾಡಿದಾಗ ನೀನು ಕೃಪೆಯಿಂದ ಎಲ್ಲರನ್ನೂ ಉಳಿಸಿದೆ.' },
        },
        {
          n: 14,
          text: 'किया तपहिं भागीरथ भारी ।\nपुरब प्रतिज्ञा तासु पुरारी ॥',
          meaning: { en: 'Bhagiratha did great penance, and you fulfilled your earlier promise to him, O destroyer of the three cities.', kn: 'ಭಗೀರಥನು ಘೋರ ತಪಸ್ಸು ಮಾಡಿದನು; ತ್ರಿಪುರಾರಿಯೇ, ನೀನು ಅವನಿಗೆ ಕೊಟ್ಟ ಹಳೆಯ ಪ್ರತಿಜ್ಞೆಯನ್ನು ಪೂರೈಸಿದೆ.' },
        },
        {
          n: 15,
          text: 'दानिन महँ तुम सम कोउ नाहीं ।\nसेवक स्तुति करत सदाहीं ॥',
          meaning: { en: 'There is no giver like you; your servants always praise you.', kn: 'ದಾನಿಗಳಲ್ಲಿ ನಿನಗೆ ಸಮನಾದವರಿಲ್ಲ; ನಿನ್ನ ಸೇವಕರು ಸದಾ ಸ್ತುತಿಸುತ್ತಾರೆ.' },
        },
        {
          n: 16,
          text: 'वेद नाम महिमा तव गाई ।\nअकथ अनादि भेद नहिं पाई ॥',
          meaning: { en: 'The Vedas sing the glory of your name; you are indescribable and without beginning, and no one has found your secret.', kn: 'ವೇದಗಳು ನಿನ್ನ ನಾಮಮಹಿಮೆ ಹಾಡುತ್ತವೆ; ನೀನು ವರ್ಣಿಸಲಾಗದವನು, ಅನಾದಿ; ನಿನ್ನ ರಹಸ್ಯವನ್ನು ಯಾರೂ ಕಂಡಿಲ್ಲ.' },
        },
        {
          n: 17,
          text: 'प्रकटी उदधि मंथन में ज्वाला ।\nजरत सुरासुर भए विहाला ॥',
          meaning: { en: 'When the fire of poison rose from the churning of the ocean, gods and demons burned and were in distress.', kn: 'ಸಮುದ್ರಮಥನದಲ್ಲಿ ವಿಷದ ಜ್ವಾಲೆ ಉಕ್ಕಿದಾಗ ದೇವತೆಗಳೂ ಅಸುರರೂ ಸುಡುತ್ತ ಸಂಕಟಪಟ್ಟರು.' },
        },
        {
          n: 18,
          text: 'कीन्ही दया तहं करी सहाई ।\nनीलकण्ठ तब नाम कहाई ॥',
          meaning: { en: 'You took pity there and helped; from then you were called Nilakantha, the blue-throated.', kn: 'ಅಲ್ಲಿ ನೀನು ದಯೆ ತೋರಿ ಸಹಾಯ ಮಾಡಿದೆ; ಆಗಿನಿಂದ ನೀಲಕಂಠನೆಂದು ಕರೆಯಲ್ಪಟ್ಟೆ.' },
        },
        {
          n: 19,
          text: 'पूजन रामचन्द्र जब कीन्हा ।\nजीत के लंक विभीषण दीन्हा ॥',
          meaning: { en: 'When Ramachandra worshipped you and, after conquering Lanka, gave it to Vibhishana,', kn: 'ರಾಮಚಂದ್ರನು ನಿನ್ನನ್ನು ಪೂಜಿಸಿ ಲಂಕೆಯನ್ನು ಗೆದ್ದು ವಿಭೀಷಣನಿಗೆ ಕೊಟ್ಟಾಗ,' },
        },
        {
          n: 20,
          text: 'सहस कमल में हो रहे धारी ।\nकीन्ह परीक्षा तबहिं पुरारी ॥',
          meaning: { en: 'he was offering a thousand lotuses, and then, O destroyer of the three cities, you tested him.', kn: 'ಅವನು ಸಾವಿರ ಕಮಲಗಳನ್ನು ಅರ್ಪಿಸುತ್ತಿದ್ದಾಗ ಪುರಾರಿಯೇ, ನೀನು ಅವನನ್ನು ಪರೀಕ್ಷಿಸಿದೆ.' },
        },
        {
          n: 21,
          text: 'एक कमल प्रभु राखेउ जोई ।\nकमल नयन पूजन चहं सोई ॥',
          meaning: { en: 'You hid one lotus, and he, the lotus-eyed, wished to worship with his own eye.', kn: 'ನೀನು ಒಂದು ಕಮಲವನ್ನು ಅಡಗಿಸಿಟ್ಟೆ; ಕಮಲನಯನನಾದ ಅವನು ತನ್ನ ಕಣ್ಣಿನಿಂದಲೇ ಪೂಜಿಸಲು ಬಯಸಿದ.' },
        },
        {
          n: 22,
          text: 'कठिन भक्ति देखी प्रभु शंकर ।\nभए प्रसन्न दिए इच्छित वर ॥',
          meaning: { en: 'Seeing his hard devotion, Lord Shankara was pleased and gave him the boon he wanted.', kn: 'ಅವನ ಕಠಿಣ ಭಕ್ತಿಯನ್ನು ಕಂಡು ಶಂಕರ ಸಂತುಷ್ಟನಾಗಿ ಬಯಸಿದ ವರ ಕೊಟ್ಟ.' },
        },
        {
          n: 23,
          text: 'जय जय जय अनन्त अविनाशी ।\nकरत कृपा सब के घटवासी ॥',
          meaning: { en: 'Victory, victory, victory, endless and imperishable one, who dwells in the heart of all and bestows grace.', kn: 'ಜಯ ಜಯ ಜಯ, ಅನಂತನೇ, ಅವಿನಾಶಿಯೇ, ಎಲ್ಲರ ಹೃದಯದಲ್ಲಿ ವಾಸಿಸಿ ಕೃಪೆ ಮಾಡುವವನೇ.' },
        },
        {
          n: 24,
          text: 'दुष्ट सकल नित मोहि सतावै ।\nभ्रमत रहौं मोहि चैन न आवै ॥',
          meaning: { en: 'All the wicked torment me every day; I wander about and have no peace.', kn: 'ದುಷ್ಟರೆಲ್ಲ ನನ್ನನ್ನು ದಿನವೂ ಕಾಡುತ್ತಾರೆ; ಅಲೆಯುತ್ತ ಇರುವ ನನಗೆ ನೆಮ್ಮದಿಯಿಲ್ಲ.' },
        },
        {
          n: 25,
          text: 'त्राहि त्राहि मैं नाथ पुकारो ।\nयेहि अवसर मोहि आन उबारो ॥',
          meaning: { en: 'Save me, save me, I call to you, Lord; come and rescue me at this time.', kn: 'ರಕ್ಷಿಸು ರಕ್ಷಿಸು, ನಾಥನೇ, ನಾನು ಕೂಗುತ್ತೇನೆ; ಈ ಹೊತ್ತಿನಲ್ಲಿ ಬಂದು ನನ್ನನ್ನು ಉದ್ಧರಿಸು.' },
        },
        {
          n: 26,
          text: 'लै त्रिशूल शत्रुन को मारो ।\nसंकट से मोहि आन उबारो ॥',
          meaning: { en: 'Take up your trident and kill my enemies; rescue me from this trouble.', kn: 'ತ್ರಿಶೂಲ ಹಿಡಿದು ನನ್ನ ಶತ್ರುಗಳನ್ನು ಕೊಲ್ಲು; ಈ ಸಂಕಟದಿಂದ ನನ್ನನ್ನು ಉದ್ಧರಿಸು.' },
        },
        {
          n: 27,
          text: 'मात-पिता भ्राता सब होई ।\nसंकट में पूछत नहिं कोई ॥',
          meaning: { en: 'Mother, father, brother, all are there; but when trouble comes no one asks after you.', kn: 'ತಾಯಿ, ತಂದೆ, ಅಣ್ಣ ತಮ್ಮ ಎಲ್ಲರೂ ಇದ್ದಾರೆ; ಆದರೆ ಸಂಕಟದಲ್ಲಿ ಯಾರೂ ವಿಚಾರಿಸುವುದಿಲ್ಲ.' },
        },
        {
          n: 28,
          text: 'स्वामी एक है आस तुम्हारी ।\nआय हरहु मम संकट भारी ॥',
          meaning: { en: 'Lord, my only hope is you; come and remove my great trouble.', kn: 'ಸ್ವಾಮಿ, ನನಗೆ ನಿನ್ನ ಒಬ್ಬನ ಭರವಸೆ; ಬಂದು ನನ್ನ ದೊಡ್ಡ ಸಂಕಟ ಹರಿಸು.' },
        },
        {
          n: 29,
          text: 'धन निर्धन को देत सदा हीं ।\nजो कोई जांचे सो फल पाहीं ॥',
          meaning: { en: 'You always give wealth to the poor; whoever asks gets the fruit.', kn: 'ನೀನು ಬಡವರಿಗೆ ಸದಾ ಸಂಪತ್ತು ಕೊಡುವೆ; ಯಾರು ಬೇಡಿದರೂ ಫಲ ಪಡೆಯುತ್ತಾರೆ.' },
        },
        {
          n: 30,
          text: 'अस्तुति केहि विधि करैं तुम्हारी ।\nक्षमहु नाथ अब चूक हमारी ॥',
          meaning: { en: 'How can I praise you? Forgive my mistake now, Lord.', kn: 'ನಾನು ಹೇಗೆ ಸ್ತುತಿಸಲಿ? ನಾಥನೇ, ಈಗ ನನ್ನ ತಪ್ಪನ್ನು ಕ್ಷಮಿಸು.' },
        },
        {
          n: 31,
          text: 'शंकर हो संकट के नाशन ।\nमंगल कारण विघ्न विनाशन ॥',
          meaning: { en: 'Shankara, destroyer of trouble, cause of blessing, remover of obstacles.', kn: 'ಶಂಕರನೇ, ಸಂಕಟನಾಶಕನೇ, ಮಂಗಳಕಾರಣನೇ, ವಿಘ್ನ ವಿನಾಶಕನೇ.' },
        },
        {
          n: 32,
          text: 'योगी यति मुनि ध्यान लगावैं ।\nशारद नारद शीश नवावैं ॥',
          meaning: { en: 'Yogis, ascetics and sages meditate on you; Sharada and Narada bow their heads to you.', kn: 'ಯೋಗಿಗಳು, ಯತಿಗಳು, ಮುನಿಗಳು ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾರೆ; ಶಾರದೆ, ನಾರದರು ನಿನಗೆ ತಲೆಬಾಗುತ್ತಾರೆ.' },
        },
        {
          n: 33,
          text: 'नमो नमो जय नमः शिवाय ।\nसुर ब्रह्मादिक पार न पाय ॥',
          meaning: { en: 'Salutations, salutations, victory to Namah Shivaya: even Brahma and the gods cannot find your limit.', kn: 'ನಮೋ ನಮೋ, ನಮಃ ಶಿವಾಯ ಜಯ; ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳಿಗೂ ನಿನ್ನ ಪಾರ ಸಿಗುವುದಿಲ್ಲ.' },
        },
        {
          n: 34,
          text: 'जो यह पाठ करे मन लाई ।\nता पर होत है शम्भु सहाई ॥',
          meaning: { en: 'Whoever recites this with devotion will have Shambhu\'s help.', kn: 'ಭಕ್ತಿಯಿಂದ ಇದನ್ನು ಪಠಿಸುವವನಿಗೆ ಶಂಭುವಿನ ಸಹಾಯ ದೊರೆಯುತ್ತದೆ.' },
        },
        {
          n: 35,
          text: 'ऋनियां जो कोई हो अधिकारी ।\nपाठ करे सो पावन हारी ॥',
          meaning: { en: 'Whoever is in debt and recites it will be freed of the debt.', kn: 'ಸಾಲದಲ್ಲಿರುವವನು ಇದನ್ನು ಪಠಿಸಿದರೆ ಸಾಲದಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ.' },
        },
        {
          n: 36,
          text: 'पुत्र हीन कर इच्छा जोई ।\nनिश्चय शिव प्रसाद तेहि होई ॥',
          meaning: { en: 'One who wants a son will certainly receive Shiva\'s grace.', kn: 'ಪುತ್ರ ಬಯಸುವವನಿಗೆ ಖಂಡಿತ ಶಿವನ ಅನುಗ್ರಹ ದೊರೆಯುತ್ತದೆ.' },
        },
        {
          n: 37,
          text: 'पण्डित त्रयोदशी को लावे ।\nध्यान पूर्वक होम करावे ॥',
          meaning: { en: 'Let him call a pandit on Trayodashi and have the homa done with attention.', kn: 'ತ್ರಯೋದಶಿಯಂದು ಪಂಡಿತರನ್ನು ಕರೆಸಿ ಗಮನದಿಂದ ಹೋಮ ಮಾಡಿಸಲಿ.' },
        },
        {
          n: 38,
          text: 'त्रयोदशी व्रत करै हमेशा ।\nताके तन नहीं रहै कलेशा ॥',
          meaning: { en: 'Whoever keeps the Trayodashi fast always will not have trouble in the body.', kn: 'ತ್ರಯೋದಶಿ ವ್ರತವನ್ನು ಯಾವಾಗಲೂ ಮಾಡುವವನ ದೇಹದಲ್ಲಿ ಕ್ಲೇಶ ಇರುವುದಿಲ್ಲ.' },
        },
        {
          n: 39,
          text: 'धूप दीप नैवेद्य चढावे ।\nशंकर सम्मुख पाठ सुनावे ॥',
          meaning: { en: 'Offering incense, lamp and food, let him recite this before Shankara.', kn: 'ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ ಅರ್ಪಿಸಿ ಶಂಕರನ ಮುಂದೆ ಇದನ್ನು ಪಠಿಸಲಿ.' },
        },
        {
          n: 40,
          text: 'जन्म जन्म के पाप नसावे ।\nअन्त धाम शिवपुर में पावे ॥',
          meaning: { en: 'It destroys sins of birth after birth, and at the end he gets a place in Shivapura.', kn: 'ಜನ್ಮ ಜನ್ಮದ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡಿ ಕೊನೆಗೆ ಶಿವಪುರದಲ್ಲಿ ಸ್ಥಾನ ಸಿಗುತ್ತದೆ.' },
        },
        {
          text: 'कहैं अयोध्यादास आस तुम्हारी ।\nजानि सकल दुःख हरहु हमारी ॥',
          meaning: { en: 'Ayodhyadas says: my hope is in you; knowing all my sorrows, remove them.', kn: 'ಅಯೋಧ್ಯಾದಾಸ ಹೇಳುತ್ತಾನೆ: ನನ್ನ ಭರವಸೆ ನಿನ್ನಲ್ಲಿ; ನನ್ನ ಎಲ್ಲ ದುಃಖಗಳನ್ನು ತಿಳಿದು ಹರಿಸು.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing dohas',
      verses: [
        {
          text: 'नित्त नेम कर प्रातः ही, पाठ करौं चालीसा ।\nतुम मेरी मनोकामना, पूर्ण करो जगदीश ॥',
          meaning: { en: 'Every morning I regularly recite this Chalisa; you, Lord of the world, fulfil my wishes.', kn: 'ಪ್ರತಿ ಬೆಳಿಗ್ಗೆ ನಿಯಮದಿಂದ ಈ ಚಾಲೀಸಾ ಪಠಿಸುತ್ತೇನೆ; ಜಗದೀಶನೇ, ನನ್ನ ಮನೋಕಾಮನೆಗಳನ್ನು ಪೂರೈಸು.' },
        },
        {
          text: 'मगसर छठि हेमन्त ऋतु, संवत चौसठ जान ।\nअस्तुति चालीसा शिवहि, पूर्ण कीन कल्याण ॥',
          meaning: { en: 'Written in the month of Margashirsha, in the cold season, on the sixth day, in Samvat 64, this Chalisa of praise to Shiva was completed for the good of all.', kn: 'ಹೇಮಂತ ಋತುವಿನ ಮಾರ್ಗಶಿರ ಷಷ್ಠಿಯಂದು, ಸಂವತ್ ಅರವತ್ತನಾಲ್ಕರಲ್ಲಿ, ಶಿವನ ಸ್ತುತಿಯ ಈ ಚಾಲೀಸಾ ಎಲ್ಲರ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಪೂರ್ಣಗೊಂಡಿತು.' },
        },
      ],
    },
  ],
};
