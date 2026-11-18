/**
 * Śrī Durgā Cālīsā, attributed to Devīdāsa (Hindi/Awadhi), in Devanagari.
 *
 * Collated Nov 2026 against three typed copies of the widely printed text:
 *   S  shubhpanchang.com "Durga Chalisa" (base for order and spelling of unlisted lines);
 *   B  bhaktibharat.com (amp), "Shri Durga Chalisa";  M  mahakavya.com, "Durga Chalisa".
 * Where B and M agree against S, their reading is taken (S being a looser, partly respelt copy):
 *   c1 "नमो नमो दुर्गे दुःख हरनी" (S "अम्बे"); c6 "अन्नपूर्णा"; c10 "धरयो रूप नरसिंह"; c11 "हिरण्याक्ष"
 *   (S "हिरणाकुश"); c15 "भुवनेश्वरी"; c20 "नगरकोट में तुम्हीं विराजत" (S "नाग कोटि"); c23 "कालिका धारा";
 *   c25 "अमरपुरी अरु बासव लोका"; c26 "ज्वाला में है ज्योति तुम्हारी" (S "ताही"); c32 "शक्ति रूप का मरम";
 *   c33-40 spelling. Kept from S and M against B: c36 "रिपु मुरख मोहि अति डरपावे" (B "मोह मदादिक सब बिनशावें").
 * The forty verses are numbered; the couplet naming Devidas ("देवीदास शरण निज जानी …") and the
 * closing doha are not. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const durgaChalisa: Mantra = {
  id: 'durga-chalisa',
  title: 'श्रीदुर्गाचालीसा',
  titleEn: 'Sri Durga Chalisa',
  category: 'chalisa',
  order: 25,
  deity: 'Śrī Durgā',
  source: 'Devīdāsa (attributed), Hindi/Awadhi',
  summary: 'The forty-verse Hindi hymn to the Mother: her radiant form, her appearances as Sarasvati, Narasimha\'s power, Lakshmi, Annapurna, Kali and the ten Mahavidyas, her slaying of Shumbha, Nishumbha, Raktabija and Mahishasura, the repentance of Shankaracharya and the promise to those who sing her praise with love. Recited on Tuesdays, Fridays and in Navaratri.',
  summaryKn: 'ಮಾತೆಯ ಮೇಲೆ ಹಿಂದಿಯಲ್ಲಿ ನಲವತ್ತು ಪದ್ಯಗಳ ಸ್ತುತಿ: ಅವಳ ತೇಜೋರೂಪ, ಸರಸ್ವತಿ, ನರಸಿಂಹಶಕ್ತಿ, ಲಕ್ಷ್ಮಿ, ಅನ್ನಪೂರ್ಣೆ, ಕಾಳಿ, ದಶಮಹಾವಿದ್ಯೆಗಳ ರೂಪಗಳು, ಶುಂಭ, ನಿಶುಂಭ, ರಕ್ತಬೀಜ, ಮಹಿಷಾಸುರರ ವಧೆ, ಶಂಕರಾಚಾರ್ಯರ ಪಶ್ಚಾತ್ತಾಪ ಮತ್ತು ಪ್ರೀತಿಯಿಂದ ಹಾಡುವವರಿಗೆ ಅವಳ ಅಭಯ. ಮಂಗಳವಾರ, ಶುಕ್ರವಾರ ಮತ್ತು ನವರಾತ್ರಿಯಲ್ಲಿ ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'चालीसा',
      titleEn: 'Chalisa',
      note: 'The forty verses, and the closing couplet that names the author (Devidas).',
      verses: [
        {
          n: 1,
          text: 'नमो नमो दुर्गे सुख करनी ।\nनमो नमो दुर्गे दुःख हरनी ॥',
          meaning: { en: 'Salutations, salutations to Durga who gives happiness; salutations, salutations to Durga who removes sorrow.', kn: 'ಸುಖ ಕೊಡುವ ದುರ್ಗೆಗೆ ನಮೋ ನಮೋ; ದುಃಖ ಹರಿಸುವ ದುರ್ಗೆಗೆ ನಮೋ ನಮೋ.' },
        },
        {
          n: 2,
          text: 'निरंकार है ज्योति तुम्हारी ।\nतिहूं लोक फैली उजियारी ॥',
          meaning: { en: 'Your light is formless, and its radiance spreads through the three worlds.', kn: 'ನಿನ್ನ ಜ್ಯೋತಿ ನಿರಾಕಾರ; ಅದರ ಬೆಳಕು ಮೂರು ಲೋಕಗಳಲ್ಲೂ ಹರಡಿದೆ.' },
        },
        {
          n: 3,
          text: 'शशि ललाट मुख महा विशाला ।\nनेत्र लाल भृकुटी विकराला ॥',
          meaning: { en: 'A moon on the forehead, a very wide face, red eyes and fearsome brows.', kn: 'ಹಣೆಯಲ್ಲಿ ಚಂದ್ರ, ವಿಶಾಲ ಮುಖ, ಕೆಂಪು ಕಣ್ಣು, ಭಯಂಕರ ಹುಬ್ಬು.' },
        },
        {
          n: 4,
          text: 'रूप मातु को अधिक सुहावे ।\nदरश करत जन अति सुख पावे ॥',
          meaning: { en: 'Mother\'s form is most lovely; people who see you gain great happiness.', kn: 'ಮಾತೆಯ ರೂಪ ಬಹು ಸುಂದರ; ದರ್ಶನ ಮಾಡಿದ ಜನರಿಗೆ ಅಪಾರ ಸುಖ ಸಿಗುತ್ತದೆ.' },
        },
        {
          n: 5,
          text: 'तुम संसार शक्ति लै कीना ।\nपालन हेतु अन्न धन दीना ॥',
          meaning: { en: 'You created the power of the world and gave food and wealth for its sustenance.', kn: 'ನೀನು ಜಗತ್ತಿನ ಶಕ್ತಿಯನ್ನು ಸೃಷ್ಟಿಸಿ, ಅದರ ಪೋಷಣೆಗೆ ಅನ್ನ-ಧನ ಕೊಟ್ಟೆ.' },
        },
        {
          n: 6,
          text: 'अन्नपूर्णा हुई जग पाला ।\nतुम ही आदि सुन्दरी बाला ॥',
          meaning: { en: 'You became Annapurna and nourished the world; you alone are the first beautiful girl.', kn: 'ಅನ್ನಪೂರ್ಣೆಯಾಗಿ ಜಗತ್ತನ್ನು ಪೋಷಿಸಿದೆ; ನೀನೇ ಆದಿ ಸುಂದರ ಬಾಲೆ.' },
        },
        {
          n: 7,
          text: 'प्रलयकाल सब नाशन हारी ।\nतुम गौरी शिव शंकर प्यारी ॥',
          meaning: { en: 'At the end of the world you destroy everything; you are Gauri, dear to Shiva Shankara.', kn: 'ಪ್ರಳಯಕಾಲದಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ನಾಶಮಾಡುವವಳು ನೀನು; ನೀನು ಗೌರಿ, ಶಿವ ಶಂಕರನ ಪ್ರಿಯೆ.' },
        },
        {
          n: 8,
          text: 'शिव योगी तुम्हरे गुण गावें ।\nब्रह्मा विष्णु तुम्हें नित ध्यावें ॥',
          meaning: { en: 'Shiva and the yogis sing your praise; Brahma and Vishnu always meditate on you.', kn: 'ಶಿವ ಮತ್ತು ಯೋಗಿಗಳು ನಿನ್ನ ಗುಣಗಳನ್ನು ಹಾಡುತ್ತಾರೆ; ಬ್ರಹ್ಮ, ವಿಷ್ಣು ನಿನ್ನನ್ನು ನಿತ್ಯ ಧ್ಯಾನಿಸುತ್ತಾರೆ.' },
        },
        {
          n: 9,
          text: 'रूप सरस्वती को तुम धारा ।\nदे सुबुद्धि ऋषि मुनिन उबारा ॥',
          meaning: { en: 'You took the form of Sarasvati and saved the sages by giving them good intellect.', kn: 'ಸರಸ್ವತಿಯ ರೂಪ ಧರಿಸಿ ಸುಬುದ್ಧಿ ನೀಡಿ ಋಷಿಮುನಿಗಳನ್ನು ಉದ್ಧರಿಸಿದೆ.' },
        },
        {
          n: 10,
          text: 'धरयो रूप नरसिंह को अम्बा ।\nपरगट भई फाड कर खम्बा ॥',
          meaning: { en: 'Mother, you took the form of Narasimha and appeared by splitting the pillar.', kn: 'ಅಮ್ಮಾ, ನರಸಿಂಹರೂಪ ಧರಿಸಿ ಕಂಬವನ್ನು ಸೀಳಿ ಪ್ರಕಟವಾದೆ.' },
        },
        {
          n: 11,
          text: 'रक्षा करि प्रह्लाद बचायो ।\nहिरण्याक्ष को स्वर्ग पठायो ॥',
          meaning: { en: 'You protected Prahlada and sent Hiranyaksha (Hiranyakashipu) to heaven.', kn: 'ಪ್ರಹ್ಲಾದನನ್ನು ರಕ್ಷಿಸಿ ಹಿರಣ್ಯಾಕ್ಷನನ್ನು (ಹಿರಣ್ಯಕಶಿಪುವನ್ನು) ಸ್ವರ್ಗಕ್ಕೆ ಕಳುಹಿಸಿದೆ.' },
        },
        {
          n: 12,
          text: 'लक्ष्मी रूप धरो जग माहीं ।\nश्री नारायण अंग समाहीं ॥',
          meaning: { en: 'You took the form of Lakshmi in the world and merged into the body of Sri Narayana.', kn: 'ಜಗತ್ತಿನಲ್ಲಿ ಲಕ್ಷ್ಮಿಯ ರೂಪ ಧರಿಸಿ ಶ್ರೀ ನಾರಾಯಣನ ಅಂಗದಲ್ಲಿ ಲೀನವಾದೆ.' },
        },
        {
          n: 13,
          text: 'क्षीरसिन्धु में करत विलासा ।\nदयासिन्धु दीजै मन आसा ॥',
          meaning: { en: 'You sport in the ocean of milk; ocean of mercy, fulfil my wish.', kn: 'ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ವಿಲಾಸ ಮಾಡುವೆ; ದಯಾಸಾಗರಿಯೇ, ನನ್ನ ಮನದಾಸೆ ಪೂರೈಸು.' },
        },
        {
          n: 14,
          text: 'हिंगलाज में तुम्हीं भवानी ।\nमहिमा अमित न जात बखानी ॥',
          meaning: { en: 'You are Bhavani at Hinglaj; your boundless glory cannot be described.', kn: 'ಹಿಂಗುಲಾಜದಲ್ಲಿ ನೀನೇ ಭವಾನಿ; ನಿನ್ನ ಅಪಾರ ಮಹಿಮೆಯನ್ನು ವರ್ಣಿಸಲಾಗದು.' },
        },
        {
          n: 15,
          text: 'मातंगी अरु धूमावति माता ।\nभुवनेश्वरी बगला सुख दाता ॥',
          meaning: { en: 'Matangi, Dhumavati, Bhuvaneshvari, Bagala: you are the givers of happiness.', kn: 'ಮಾತಂಗಿ, ಧೂಮಾವತಿ, ಭುವನೇಶ್ವರಿ, ಬಗಲಾ: ನೀನೇ ಸುಖದಾತೆ.' },
        },
        {
          n: 16,
          text: 'श्री भैरव तारा जग तारिणी ।\nछिन्न भाल भव दुःख निवारिणी ॥',
          meaning: { en: 'Sri Bhairavi and Tara who carries the world across, Chinnamasta who ends the sorrow of birth.', kn: 'ಶ್ರೀ ಭೈರವಿ, ಜಗತ್ತನ್ನು ದಾಟಿಸುವ ತಾರಾ, ಭವದ ದುಃಖ ನೀಗುವ ಛಿನ್ನಮಸ್ತಾ.' },
        },
        {
          n: 17,
          text: 'केहरि वाहन सोह भवानी ।\nलांगुर वीर चलत अगवानी ॥',
          meaning: { en: 'The lion is your vehicle, Bhavani; the hero Langur walks before you as herald.', kn: 'ಸಿಂಹ ನಿನ್ನ ವಾಹನ, ಭವಾನಿ; ವೀರ ಲಾಂಗುರ ಮುಂದೆ ದಾರಿ ತೋರಿ ನಡೆಯುತ್ತಾನೆ.' },
        },
        {
          n: 18,
          text: 'कर में खप्पर खड्ग विराजै ।\nजाको देख काल डर भाजै ॥',
          meaning: { en: 'A skull-bowl and sword shine in your hand; at the sight of them death runs away in fear.', kn: 'ಕೈಯಲ್ಲಿ ಖಪ್ಪರ ಮತ್ತು ಖಡ್ಗ ಹೊಳೆಯುತ್ತವೆ; ಅವನ್ನು ಕಂಡು ಕಾಲನೂ ಭಯದಿಂದ ಓಡುತ್ತಾನೆ.' },
        },
        {
          n: 19,
          text: 'सोहै अस्त्र और त्रिशूला ।\nजाते उठत शत्रु हिय शूला ॥',
          meaning: { en: 'Weapons and a trident adorn you, from which pain rises in the hearts of enemies.', kn: 'ಆಯುಧಗಳು ಮತ್ತು ತ್ರಿಶೂಲ ಶೋಭಿಸುತ್ತವೆ; ಅವುಗಳಿಂದ ಶತ್ರುಗಳ ಎದೆಯಲ್ಲಿ ಶೂಲ ಏಳುತ್ತದೆ.' },
        },
        {
          n: 20,
          text: 'नगरकोट में तुम्हीं विराजत ।\nतिहूं लोक में डंका बाजत ॥',
          meaning: { en: 'You dwell at Nagarkot, and your drum sounds in the three worlds.', kn: 'ನಗರಕೋಟ್‌ನಲ್ಲಿ ನೀನು ವಿರಾಜಿಸುತ್ತೀಯೆ; ಮೂರು ಲೋಕಗಳಲ್ಲಿ ನಿನ್ನ ನಗಾರಿ ಮೊಳಗುತ್ತದೆ.' },
        },
        {
          n: 21,
          text: 'शुम्भ निशुम्भ दानव तुम मारे ।\nरक्तबीज शंखन संहारे ॥',
          meaning: { en: 'You killed the demons Shumbha and Nishumbha; you destroyed Raktabija and the Shankhas.', kn: 'ಶುಂಭ, ನಿಶುಂಭ ದಾನವರನ್ನು ನೀನು ಕೊಂದೆ; ರಕ್ತಬೀಜ ಮತ್ತು ಶಂಖರನ್ನು ಸಂಹರಿಸಿದೆ.' },
        },
        {
          n: 22,
          text: 'महिषासुर नृप अति अभिमानी ।\nजेहि अघ भार मही अकुलानी ॥',
          meaning: { en: 'King Mahishasura was very proud, and the earth was troubled under the burden of his sins.', kn: 'ಮಹಿಷಾಸುರ ರಾಜ ಬಹಳ ಅಭಿಮಾನಿ; ಅವನ ಪಾಪದ ಭಾರದಿಂದ ಭೂಮಿ ಕಂಗೆಟ್ಟಿತು.' },
        },
        {
          n: 23,
          text: 'रूप कराल कालिका धारा ।\nसेन सहित तुम तिहि संहारा ॥',
          meaning: { en: 'Taking the terrible form of Kali, you destroyed him with his army.', kn: 'ಭಯಂಕರ ಕಾಳಿಯ ರೂಪ ಧರಿಸಿ ಅವನನ್ನು ಸೇನೆಸಹಿತ ಸಂಹರಿಸಿದೆ.' },
        },
        {
          n: 24,
          text: 'परी गाढ सन्तन पर जब जब ।\nभई सहाय मातु तुम तब-तब ॥',
          meaning: { en: 'Whenever hard trouble fell on the saints, Mother, you came to help them each time.', kn: 'ಸಜ್ಜನರ ಮೇಲೆ ಕಷ್ಟ ಬಂದಾಗಲೆಲ್ಲ ಮಾತೆಯೇ, ನೀನು ಆಗಲೇ ಸಹಾಯಕ್ಕೆ ಬಂದೆ.' },
        },
        {
          n: 25,
          text: 'अमरपुरी अरु बासव लोका ।\nतब महिमा सब रहें अशोका ॥',
          meaning: { en: 'In the city of the immortals and other worlds, through your glory all stay free of sorrow.', kn: 'ಅಮರಪುರಿ ಮತ್ತು ಇತರ ಲೋಕಗಳಲ್ಲಿ ನಿನ್ನ ಮಹಿಮೆಯಿಂದ ಎಲ್ಲರೂ ದುಃಖರಹಿತರಾಗಿರುತ್ತಾರೆ.' },
        },
        {
          n: 26,
          text: 'ज्वाला में है ज्योति तुम्हारी ।\nतुम्हें सदा पूजें नर नारी ॥',
          meaning: { en: 'Your light is in Jwala (Jwalamukhi), and men and women always worship you.', kn: 'ಜ್ವಾಲಾ (ಜ್ವಾಲಾಮುಖಿ) ಕ್ಷೇತ್ರದಲ್ಲಿ ನಿನ್ನ ಜ್ಯೋತಿ ಇದೆ; ನರನಾರಿಯರು ಸದಾ ನಿನ್ನನ್ನು ಪೂಜಿಸುತ್ತಾರೆ.' },
        },
        {
          n: 27,
          text: 'प्रेम भक्ति से जो यश गावें ।\nदुःख दारिद्र निकट नहिं आवें ॥',
          meaning: { en: 'Whoever sings your fame with loving devotion, to him sorrow and poverty do not come near.', kn: 'ಪ್ರೇಮಭಕ್ತಿಯಿಂದ ನಿನ್ನ ಯಶಸ್ಸನ್ನು ಹಾಡುವವನ ಬಳಿಗೆ ದುಃಖ-ದಾರಿದ್ರ್ಯ ಬರುವುದಿಲ್ಲ.' },
        },
        {
          n: 28,
          text: 'ध्यावे तुम्हें जो नर मन लाई ।\nजन्ममरण ताकौ छुटि जाई ॥',
          meaning: { en: 'Whoever meditates on you with a steady mind is freed from birth and death.', kn: 'ಮನಸ್ಸು ಇಟ್ಟು ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುವವನಿಗೆ ಜನ್ಮ-ಮರಣ ತಪ್ಪುತ್ತದೆ.' },
        },
        {
          n: 29,
          text: 'जोगी सुर मुनि कहत पुकारी ।\nयोग न हो बिन शक्ति तुम्हारी ॥',
          meaning: { en: 'Yogis, gods and sages cry out: there is no yoga without your power.', kn: 'ಯೋಗಿಗಳು, ದೇವತೆಗಳು, ಮುನಿಗಳು ಕೂಗಿ ಹೇಳುತ್ತಾರೆ: ನಿನ್ನ ಶಕ್ತಿಯಿಲ್ಲದೆ ಯೋಗವಿಲ್ಲ.' },
        },
        {
          n: 30,
          text: 'शंकर आचारज तप कीनो ।\nकाम अरु क्रोध जीति सब लीनो ॥',
          meaning: { en: 'Shankaracharya performed austerities and conquered all desire and anger.', kn: 'ಶಂಕರಾಚಾರ್ಯರು ತಪಸ್ಸು ಮಾಡಿ ಕಾಮ-ಕ್ರೋಧಗಳನ್ನು ಗೆದ್ದರು.' },
        },
        {
          n: 31,
          text: 'निशि दिन ध्यान धरो शंकर को ।\nकाहु काल नहिं सुमिरो तुमको ॥',
          meaning: { en: 'Day and night he meditated on Shankara but never at any time remembered you.', kn: 'ಹಗಲು ರಾತ್ರಿ ಶಂಕರನನ್ನು ಧ್ಯಾನಿಸಿದರು; ಯಾವ ಕಾಲದಲ್ಲೂ ನಿನ್ನನ್ನು ಸ್ಮರಿಸಲಿಲ್ಲ.' },
        },
        {
          n: 32,
          text: 'शक्ति रूप का मरम न पायो ।\nशक्ति गई तब मन पछितायो ॥',
          meaning: { en: 'He did not know the secret of Shakti; when his power left him, he repented.', kn: 'ಶಕ್ತಿಯ ರಹಸ್ಯ ಅವರಿಗೆ ತಿಳಿದಿರಲಿಲ್ಲ; ಶಕ್ತಿ ಹೋದಾಗ ಮನಸ್ಸಿನಲ್ಲಿ ಪಶ್ಚಾತ್ತಾಪಪಟ್ಟರು.' },
        },
        {
          n: 33,
          text: 'शरणागत हुई कीर्ति बखानी ।\nजय जय जय जगदम्ब भवानी ॥',
          meaning: { en: 'Taking refuge, he praised your fame: victory, victory, victory to Jagadamba Bhavani.', kn: 'ಶರಣಾಗತನಾಗಿ ನಿನ್ನ ಕೀರ್ತಿಯನ್ನು ಬಣ್ಣಿಸಿದರು: ಜಯ ಜಯ ಜಯ ಜಗದಂಬ ಭವಾನಿ.' },
        },
        {
          n: 34,
          text: 'भई प्रसन्न आदि जगदम्बा ।\nदई शक्ति नहीं कीन विलम्बा ॥',
          meaning: { en: 'The primal Jagadamba was pleased and gave him power without delay.', kn: 'ಆದಿ ಜಗದಂಬೆ ಪ್ರಸನ್ನಳಾಗಿ ತಡಮಾಡದೆ ಶಕ್ತಿ ಕೊಟ್ಟಳು.' },
        },
        {
          n: 35,
          text: 'मोको मातु कष्ट अति घेरो ।\nतुम बिन कौन हरै दुःख मेरो ॥',
          meaning: { en: 'Mother, great trouble surrounds me; without you who can remove my sorrow?', kn: 'ಅಮ್ಮಾ, ನನ್ನನ್ನು ದೊಡ್ಡ ಸಂಕಟ ಸುತ್ತಿದೆ; ನೀನಲ್ಲದೆ ನನ್ನ ದುಃಖ ಯಾರು ಹರಿಸುವರು?' },
        },
        {
          n: 36,
          text: 'आशा तृष्णा निपट सतावें ।\nरिपु मुरख मोहि अति डरपावे ॥',
          meaning: { en: 'Hope and craving torment me greatly, and foolish enemies frighten me.', kn: 'ಆಸೆ ಮತ್ತು ತೃಷ್ಣೆ ನನ್ನನ್ನು ಬಹಳ ಕಾಡುತ್ತವೆ; ಮೂರ್ಖ ಶತ್ರುಗಳು ನನ್ನನ್ನು ಬೆದರಿಸುತ್ತಾರೆ.' },
        },
        {
          n: 37,
          text: 'शत्रु नाश कीजै महारानी ।\nसुमिरौं इकचित तुम्हें भवानी ॥',
          meaning: { en: 'Destroy my enemies, Great Queen; I remember you with one mind, Bhavani.', kn: 'ಮಹಾರಾಣಿಯೇ, ನನ್ನ ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡು; ಭವಾನಿ, ಏಕಚಿತ್ತದಿಂದ ನಿನ್ನನ್ನು ಸ್ಮರಿಸುತ್ತೇನೆ.' },
        },
        {
          n: 38,
          text: 'करो कृपा हे मातु दयाला ।\nऋद्धिसिद्धि दै करहु निहाला ॥',
          meaning: { en: 'Be gracious, kind Mother; give me prosperity and powers and make me happy.', kn: 'ದಯಾಳು ಮಾತೆಯೇ, ಕೃಪೆ ಮಾಡು; ಋದ್ಧಿ ಸಿದ್ಧಿ ಕೊಟ್ಟು ನನ್ನನ್ನು ಸುಖಿಯಾಗಿಸು.' },
        },
        {
          n: 39,
          text: 'जब लगि जिऊँ दया फल पाऊँ ।\nतुम्हरो यश मैं सदा सुनाऊँ ॥',
          meaning: { en: 'As long as I live, may I receive your grace; I shall always proclaim your fame.', kn: 'ನಾನು ಬದುಕಿರುವವರೆಗೆ ನಿನ್ನ ದಯೆಯ ಫಲ ಪಡೆಯುತ್ತಿರಲಿ; ನಿನ್ನ ಯಶಸ್ಸನ್ನು ಸದಾ ಹೇಳುತ್ತೇನೆ.' },
        },
        {
          n: 40,
          text: 'दुर्गा चालीसा जो गावैं ।\nसब सुख भोग परमपद पावै ॥',
          meaning: { en: 'Whoever sings the Durga Chalisa enjoys every pleasure and reaches the highest state.', kn: 'ದುರ್ಗಾ ಚಾಲೀಸಾ ಹಾಡುವವನು ಎಲ್ಲ ಸುಖ ಭೋಗಿಸಿ ಪರಮಪದ ಪಡೆಯುತ್ತಾನೆ.' },
        },
        {
          text: 'देवीदास शरण निज जानी ।\nकरहु कृपा जगदम्ब भवानी ॥',
          meaning: { en: 'Knowing Devidas to have taken your refuge, show favour, Jagadamba Bhavani.', kn: 'ದೇವೀದಾಸ ತನ್ನ ಶರಣನೆಂದು ತಿಳಿದು ಕೃಪೆ ಮಾಡು, ಜಗದಂಬ ಭವಾನಿ.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'शरणागत रक्षा करे, भक्त रहे निःशंक ।\nमैं आया तेरी शरण में, मातु लीजिये अंक ॥',
          meaning: { en: 'The one who takes refuge is protected and stays without fear; I have come to your refuge, Mother: take me on your lap.', kn: 'ಶರಣಾದವನನ್ನು ಕಾಪಾಡಿದರೆ ಭಕ್ತ ನಿರ್ಭಯನಾಗಿರುತ್ತಾನೆ; ನಾನು ನಿನ್ನ ಶರಣಿಗೆ ಬಂದಿದ್ದೇನೆ, ಮಾತೆಯೇ, ನನ್ನನ್ನು ಮಡಿಲಿಗೆ ತೆಗೆದುಕೋ.' },
        },
      ],
    },
  ],
};
