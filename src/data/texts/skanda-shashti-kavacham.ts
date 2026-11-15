/**
 * Kandar Ṣaṣṭi Kavacam of Bālan Dēvarāya Svāmikaḷ (Tamil, in Tamil script).
 *
 * Collated Nov 2026 against:
 *  S. shlokam.org "Kanda Sashti Kavacham" (Tamil text with Ramachander's English; text only).
 *  K. kaumaram.com, "Kandhar Shashti Kavasam" Tamil page (kskavasam_u.html; line numbers every five).
 *  W. Tamil Wikisource "கந்த சஷ்டி கவசம்" (typed copy).
 *  P. Printed editions on archive.org (OCR): Tamil Digital Library 1952 print (tdl.38686), the
 *     older Golden Press print (tdl.22263) and the edition with commentary (tdl.4237), used to
 *     settle variants. 238 lines of the nūl, as in S, K and W.
 * Structure: kuṟaḷ veṇpā (kāppu: 4 lines "துதிப்போர்க்கு…" in nērisai veṇpā, then 2 lines
 * "அமரர் இடர்…" in kuṟaḷ veṇpā), then the nilaimaṇṭila āciriyappā of 238 lines. The kuṟaḷ and
 * kāppu verses are given together as Kāppu; K labels the first one kuṟaḷ veṇpā by mistake.
 * The 238 lines are grouped by sense here (shlokam's plan of the lines), not as printed.
 * Readings chosen where the copies differ (S, K, W; P):
 *  9  இந்திரன் முதலா எண்டிசை போற்ற (S, P: "இந்திரன்"; K: "இந்திர")
 *  16-21 the bīja syllables are spelt with ஹ (K, P: "சரஹண", "ரஹண", "நிறென"); S and W write ர, வ.
 *  27 "ஐயும்" (K, W, P; S: "ஐயம்"); "சௌவும்" (S, W line 2, P; K "செளவும்", W line 1 "சவ்வும்").
 *  30 "நித்தமும் ஒளிரும்" (S, W; K "நித்தம்"); 31 "சண்முகன் நீயும் தனியொளி" (S, W, P; K "சண்முகம் … தணியொளி").
 *  68 "விதிசெவி" (K, S, P 1952; W and P 22263 "விழிசெவி").
 *  84 "ஆண்குறி இரண்டும்" (S, W; K "ஆண்பெண்குறிகளை").
 *  100 "அரையிருள் தன்னில் அணையவேல்" (S, W; K "அறையிருள் … அனைய").
 *  104-106 "நோக்க நோக்க … தாக்க தாக்க … பார்க்க பார்க்க" (S, W, P; K doubles the final க்).
 *  115 "எல்லிலும் இருட்டிலும்" (W, S, P; K "எல்லினும் இருட்டினும்").
 *  116 "காளியோ டனைவரும்" (S, W; K "காளியோடனே வரும்").
 *  152 "குடல்விப் பிரிதி" (W, P; K "பிருதி").
 *  164 "பவமொழி பவனே" (S, W; K "பவம்ஒளி"). 165 "அமராபதியைக்" (S, K, P; W "அமராவதி").
 *  168 "கடம்பா கடம்பனை" (S, W, P, both prints; K "கடம்பனே"). 169 "இடும்பனை அழித்த" (S, W, P; K "ஏற்ற").
 *  211 "மாற்றலரெல்லாம்" (K; S and W "மாற்றவரல்லாம்", which makes no sense).
 *  214 "ஈரெட்டாய் வாழ்வர்" (S, W; K "ஈரெட்டா"). 216 "வழியாற் காண" (K; S, W "வழியாய்க் காண").
 *  228 "வேலவா போற்றி" (S, W; K "வேலவ"). 234 "வெட்சி புனையும் வேளே போற்றி" (K, P; S and W "வேலே").
 * Meanings are original; no published translation was used.
 */
import type { Mantra } from '../types';

export const skandaShashtiKavacham: Mantra = {
  id: 'skanda-shashti-kavacham',
  title: 'கந்தர் சஷ்டி கவசம்',
  titleEn: 'Skanda Shashti Kavacham',
  category: 'kirtana',
  order: 2,
  sourceScript: 'tamil',
  deity: 'Śrī Subrahmaṇya (Murugan)',
  source: 'Bālan Dēvarāya Svāmikaḷ (Tamil)',
  summary: 'The Tamil "armour" of Murugan by Devaraya Swamigal: the Lord is called to come with His spear and peacock, the head, limbs and every hour of the day are placed under the protection of the spear, evil influences, beasts and diseases are driven off, and the fruit of reciting it is told. It is recited especially in the six days of Skanda Shashti.',
  summaryKn: 'ಬಾಲ ದೇವರಾಯ ಸ್ವಾಮಿಗಳು ತಮಿಳಿನಲ್ಲಿ ರಚಿಸಿದ ಮುರುಗನ “ಕವಚ”. ವೇಲು, ನವಿಲುಗಳೊಂದಿಗೆ ಬರುವಂತೆ ಅವನನ್ನು ಕರೆಯುವುದು, ತಲೆ ಕೈಕಾಲುಗಳೂ ದಿನದ ಪ್ರತಿ ಹೊತ್ತೂ ವೇಲಿನ ರಕ್ಷೆಯಲ್ಲಿರಲಿ ಎಂದು ಬೇಡುವುದು, ದುಷ್ಟ ಪ್ರಭಾವ, ಮೃಗ, ರೋಗಗಳನ್ನು ಓಡಿಸುವುದು ಮತ್ತು ಪಠಿಸಿದ ಫಲವನ್ನು ಹೇಳುವುದು ಇದರಲ್ಲಿವೆ. ಸ್ಕಂದ ಷಷ್ಠಿಯ ಆರು ದಿನಗಳಲ್ಲಿ ವಿಶೇಷವಾಗಿ ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'காப்பு',
      titleEn: 'Kāppu (invocation)',
      note: 'The opening verses: the first states the fruit of reciting the Kavacham, the second asks the mind to meditate on the feet of Kumara.',
      noteKn: 'ಆರಂಭ ಪದ್ಯಗಳು: ಮೊದಲನೆಯದು ಕವಚವನ್ನು ಪಠಿಸುವ ಫಲವನ್ನು ಹೇಳುತ್ತದೆ, ಎರಡನೆಯದು ಕುಮಾರನ ಪಾದವನ್ನು ಧ್ಯಾನಿಸುವಂತೆ ಮನಸ್ಸಿಗೆ ಹೇಳುತ್ತದೆ.',
      verses: [
        {
          text: 'துதிப்போர்க்கு வல்வினை போம் துன்பம் போம் நெஞ்சில்\nபதிப்போர்க்குச் செல்வம் பலித்துக் கதித்தோங்கும்\nநிஷ்டையும் கைகூடும் நிமலரருள் கந்தர்\nசஷ்டி கவசந் தனை',
          meaning: { en: 'For those who praise it, great deeds of past evil go and sorrow goes; for those who fix it in the heart, wealth bears fruit and rises high; meditation too becomes firm: this is the Kanda Shashti Kavacham, given by the grace of the Pure One.', kn: 'ಇದನ್ನು ಸ್ತುತಿಸುವವರ ಕಠಿಣ ಕರ್ಮ ಹೋಗುವುದು, ದುಃಖ ಹೋಗುವುದು; ಹೃದಯದಲ್ಲಿ ಇರಿಸಿಕೊಳ್ಳುವವರಿಗೆ ಸಂಪತ್ತು ಫಲಿಸಿ ಬೆಳೆಯುವುದು; ನಿಷ್ಠೆ (ಧ್ಯಾನ) ಕೈಗೂಡುವುದು. ಇದು ನಿರ್ಮಲನ ಅನುಗ್ರಹದ ಕಂದ ಷಷ್ಠಿ ಕವಚ.' },
        },
        {
          text: 'அமரர் இடர்தீர அமரம் புரிந்த\nகுமரன் அடி நெஞ்சே குறி',
          meaning: { en: 'O my mind, think of the feet of Kumara, who fought a battle to end the troubles of the gods.', kn: 'ಮನವೇ, ದೇವತೆಗಳ ಕಷ್ಟ ನೀಗಲು ಯುದ್ಧ ಮಾಡಿದ ಕುಮಾರನ ಪಾದಗಳನ್ನು ಧ್ಯಾನಿಸು.' },
        },
      ],
    },
    {
      title: 'அழைப்பு',
      titleEn: 'Invitation',
      note: 'Lines 1-32 call the Lord to come, with His names, the mantra syllables and the bija sounds; the lines are grouped here as in common printed editions.',
      noteKn: '1 ರಿಂದ 32ನೇ ಪಂಕ್ತಿಗಳು ಮುರುಗನನ್ನು ಅವನ ನಾಮಗಳು, ಮಂತ್ರಾಕ್ಷರಗಳು ಮತ್ತು ಬೀಜ ಧ್ವನಿಗಳೊಂದಿಗೆ ಬರಲು ಕರೆಯುತ್ತವೆ.',
      verses: [
        {
          text: 'சஷ்டியை நோக்கச் சரவணபவனார்\nசிஷ்டருக் குதவும் செங்கதிர் வேலோன்\nபாதம் இரண்டில் பன்மணிச் சதங்கை\nகீதம் பாடக் கிண்கிணி யாட\nமையல் நடஞ்செய்யும் மயில்வாகனனார்',
          meaning: { en: 'Looking toward Shashti, the Lord born in the Saravana lake, the red-rayed spear-bearer who helps the good, with bells of many gems ringing on his two feet and anklets sounding as he dances, the peacock-rider who dances in a way that charms the eye.', kn: 'ಷಷ್ಠಿಯನ್ನು ಕುರಿತು, ಶರವಣದಲ್ಲಿ ಹುಟ್ಟಿದ, ಸಜ್ಜನರಿಗೆ ಸಹಾಯ ಮಾಡುವ, ಕೆಂಬೆಳಕಿನ ವೇಲನ್ನು ಹಿಡಿದ, ಎರಡು ಪಾದಗಳಲ್ಲಿ ಹಲವು ರತ್ನಗಳ ಗೆಜ್ಜೆಗಳು ನಾದ ಮಾಡುತ್ತ, ಕಾಲ್ಗಡಗ ಕುಣಿಯುತ್ತ, ಮನಸೆಳೆಯುವಂತೆ ನರ್ತಿಸುವ ಮಯೂರವಾಹನನನ್ನು ಸ್ಮರಿಸುತ್ತೇನೆ.' },
        },
        {
          text: 'கையில் வேலால் எனைக் காக்கவென்று வந்து\nவர வர வேலாயுதனார் வருக\nவருக வருக மயிலோன் வருக\nஇந்திரன் முதலா எண்டிசை போற்ற\nமந்திர வடிவேல் வருக வருக',
          meaning: { en: '"Protect me with the spear in your hand": thus asking, I say "Come, come, Lord of the spear! Come, come, rider of the peacock! Come, you whose spear is praised by Indra and the gods of the eight directions, you who are the form of mantra: come, come!"', kn: '“ಕೈಯ ವೇಲಿನಿಂದ ನನ್ನನ್ನು ಕಾಪಾಡು” ಎಂದು ಬೇಡುತ್ತ “ಬಾ, ಬಾ, ವೇಲಾಯುಧನೇ ಬಾ; ಬಾ, ಬಾ, ಮಯೂರವಾಹನನೇ ಬಾ; ಇಂದ್ರನೇ ಮೊದಲಾದ ಅಷ್ಟದಿಕ್ಕಿನವರು ಸ್ತುತಿಸುವ ಮಂತ್ರಸ್ವರೂಪ ವೇಲನೇ, ಬಾ ಬಾ” ಎಂದು ಕರೆಯುತ್ತೇನೆ.' },
        },
        {
          text: 'வாசவன் மருகா வருக வருக\nநேசக் குறமகள் நினைவோன் வருக\nஆறுமுகம் படைத்த ஐயா வருக\nநீறிடும் வேலவன் நித்தம் வருக\nசிரகிரி வேலவன் சீக்கிரம் வருக',
          meaning: { en: 'Come, son-in-law of Indra; come, you who dwell in the thought of the loving Kurava girl; come, father with the six faces; come, lord of the spear who wears sacred ash every day; come quickly, lord of Chiragiri (Chennimalai).', kn: 'ಇಂದ್ರನ ಅಳಿಯನೇ ಬಾ ಬಾ; ಪ್ರೀತಿಯ ಕುರವರ ಹೆಣ್ಣಿನ ಮನದಲ್ಲಿರುವವನೇ ಬಾ; ಆರು ಮುಖಗಳ ಒಡೆಯನೇ ಬಾ; ನಿತ್ಯ ವಿಭೂತಿ ಧರಿಸುವ ವೇಲನೇ ಬಾ; ಶಿರಗಿರಿಯ (ಚೆನ್ನಿಮಲೈ) ವೇಲನೇ, ಬೇಗ ಬಾ.' },
        },
        {
          text: 'சரஹணபவனார் சடுதியில் வருக\nரஹண பவச ரரரர ரரர\nரிஹண பவச ரிரிரிரி ரிரிரி\nவிணபவ சரஹண வீரா நமோ நம\nநிபவ சரஹண நிறநிற நிறென',
          meaning: { en: 'Come quickly, Saravanabhava; and the syllables of the bija sounds and the sound-syllables "ra ra ra", "ri ri ri", "vina bhava sarahana vira namo nama", "nibhava sarahana nira nira nire" follow, calling the Lord of the six-syllabled mantra.', kn: 'ಶರವಣಭವನೇ, ಬೇಗ ಬಾ; ಅನಂತರ “ರರರರ ರರರ”, “ರಿರಿರಿರಿ ರಿರಿರಿ”, “ವಿಣಭವ ಸರಹಣ ವೀರಾ ನಮೋ ನಮ”, “ನಿಭವ ಸರಹಣ ನಿರ ನಿರ ನಿರೆನ” ಎಂಬ ಬೀಜಧ್ವನಿಗಳಿಂದ ಷಡಕ್ಷರದ ಒಡೆಯನನ್ನು ಕರೆಯುತ್ತೇನೆ.' },
        },
        {
          text: 'வசர ஹணப வருக வருக\nஅசுரர் குடிகெடுத்த ஐயா வருக\nஎன்னை ஆளும் இளையோன் கையில்\nபன்னிரண்டாயுதம் பாசாங்குசமும்\nபரந்த விழிகள் பன்னிரண்டிலங்க\nவிரைந்தெனைக் காக்க வேலோன் வருக',
          meaning: { en: 'Come, come, scatterer of demons\' families, with the twelve weapons, noose and goad in your lord\'s hands, who rules me, and your wide twelve eyes shining: come quickly to protect me, Lord of the spear.', kn: 'ಬಾ ಬಾ, ಅಸುರರ ಕುಲವನ್ನು ನಾಶಮಾಡಿದ ಒಡೆಯನೇ; ನನ್ನನ್ನು ಆಳುವ ಕಿರಿಯ ಪ್ರಭುವಿನ ಕೈಗಳಲ್ಲಿ ಹನ್ನೆರಡು ಆಯುಧಗಳು, ಪಾಶ, ಅಂಕುಶ, ಹನ್ನೆರಡು ವಿಶಾಲ ಕಣ್ಣುಗಳು ಹೊಳೆಯುತ್ತಿರಲು, ಬೇಗ ಬಂದು ನನ್ನನ್ನು ಕಾಪಾಡು ವೇಲನೇ.' },
        },
        {
          text: 'ஐயும் கிலியும் அடைவுடன் சௌவும்\nஉய்யொளி சௌவும் உயிரையும் கிலியும்\nகிலியும் சௌவும் கிளரொளி யையும்\nநிலைபெற் றென்முன் நித்தமும் ஒளிரும்\nசண்முகன் நீயும் தனியொளி யொவ்வும்\nகுண்டலியாம் சிவகுகன் தினம் வருக',
          meaning: { en: 'The syllables "aim, kili, sau" in due order, shining in the firm light that is Shanmukha, and the light that matches the single radiance, come and stand before me and shine always. Come, Shiva-Guha, Lord of the kundalini, every day.', kn: '“ಐಂ ಕ್ಲೀಂ ಸೌ” ಬೀಜಾಕ್ಷರಗಳು ಕ್ರಮವಾಗಿ ಉರಿದು, ಷಣ್ಮುಖನ ಅನನ್ಯ ತೇಜಸ್ಸಿಗೆ ಸಮನಾದ ಬೆಳಕಾಗಿ ನನ್ನ ಮುಂದೆ ನೆಲೆಸಿ ನಿತ್ಯವೂ ಹೊಳೆಯಲಿ. ಕುಂಡಲಿನಿಯ ಅಧಿಪತಿ ಶಿವಗುಹನೇ, ದಿನವೂ ಬಾ.' },
        },
      ],
    },
    {
      title: 'திருக்கோலம்',
      titleEn: 'The form of the Lord',
      note: 'Lines 33-60 describe the six faces, the ornaments and the sounds of the anklets.',
      noteKn: '33 ರಿಂದ 60ನೇ ಪಂಕ್ತಿಗಳು ಆರು ಮುಖಗಳು, ಆಭರಣಗಳು ಮತ್ತು ಗೆಜ್ಜೆಗಳ ನಾದವನ್ನು ವರ್ಣಿಸುತ್ತವೆ.',
      verses: [
        {
          text: 'ஆறுமுகமும் அணிமுடி ஆறும்\nநீறிடு நெற்றியும் நீண்ட புருவமும்\nபன்னிரு கண்ணும் பவளச் செவ்வாயும்\nநன்னெறி நெற்றியில் நவமணிச் சுட்டியும்\nஈராறு செவியில் இலகு குண்டலமும்\nஆறிரு திண்புயத் தழகிய மார்பில்\nபல் பூஷணமும் பதக்கமும் தரித்து\nநன்மணி பூண்ட நவரத்ன மாலையும்',
          meaning: { en: 'Come with your six faces and six crowns, ash on the forehead, long eyebrows, twelve eyes, coral-red lips, a nine-gem ornament on the forehead, rings in twelve ears, a fine chest on twelve strong arms, many ornaments and medallions, and a garland of nine kinds of gems.', kn: 'ಆರು ಮುಖ, ಆರು ಕಿರೀಟ, ವಿಭೂತಿ ಧರಿಸಿದ ಹಣೆ, ಉದ್ದ ಹುಬ್ಬು, ಹನ್ನೆರಡು ಕಣ್ಣು, ಹವಳದಂತಹ ಕೆಂಪು ತುಟಿ, ಹಣೆಯಲ್ಲಿ ನವರತ್ನದ ಚುಟ್ಟಿ, ಹನ್ನೆರಡು ಕಿವಿಗಳಲ್ಲಿ ಕುಂಡಲ, ಹನ್ನೆರಡು ಬಲಿಷ್ಠ ತೋಳು, ಚೆಲುವಾದ ಎದೆ, ಬಹು ಆಭರಣ ಪದಕಗಳು, ನವರತ್ನ ಮಾಲೆ, ಇವುಗಳೊಂದಿಗೆ ಬಾ.' },
        },
        {
          text: 'முப்புரி நூலும் முத்தணி மார்பும்\nசெப்பழகுடைய திருவயிறு உந்தியும்\nதுவண்ட மருங்கில் சுடரொளிப் பட்டும்\nநவரத்தினம் பதித்த நற்சீராவும்\nஇருதொடை அழகும் இணைமுழந்தாளும்',
          meaning: { en: 'With the sacred thread, a chest adorned with pearls, a handsome belly and navel, a bright silk cloth on the supple waist, a fine sword studded with nine gems, beautiful thighs and joined knees: come.', kn: 'ಯಜ್ಞೋಪವೀತ, ಮುತ್ತಿನ ಎದೆ, ಚೆಲುವಾದ ಹೊಟ್ಟೆ ಮತ್ತು ಹೊಕ್ಕಳು, ಬಳುಕುವ ನಡುವಿನಲ್ಲಿ ಹೊಳೆಯುವ ರೇಷ್ಮೆ ಕಟಿಬಂಧ, ನವರತ್ನ ಖಚಿತ ಒಳ್ಳೆಯ ಕತ್ತಿ, ಚೆಲುವಾದ ತೊಡೆ, ಜೋಡಿ ಮೊಣಕಾಲುಗಳೊಂದಿಗೆ ಬಾ.' },
        },
        {
          text: 'திருவடி யதனில் சிலம்பொலி முழங்க\nசெககண செககண செககண செகண\nமொகமொக மொகமொக மொகமொக மொகென\nநகநக நகநக நகநக நகென\nடிகுகுண டிகுடிகு டிகுகுண டிகுண',
          meaning: { en: 'As the anklets sound on your holy feet, with the sounds "sekakana sekakana sekakana sekana", "mokamoka mokamoka mokamoka mokena", "nakanaka nakanaka nakanaka nakena", "dikukuna dikudiku dikukuna dikuna".', kn: 'ಪವಿತ್ರ ಪಾದಗಳಲ್ಲಿ ಗೆಜ್ಜೆ ಮೊಳಗುತ್ತಿರಲು, “ಸೆಕಗಣ ಸೆಕಗಣ ಸೆಕಗಣ ಸೆಗಣ”, “ಮೊಕಮೊಕ ಮೊಕಮೊಕ ಮೊಕಮೊಕ ಮೊಕೆನ”, “ನಕನಕ ನಕನಕ ನಕನಕ ನಕೆನ”, “ಡಿಕುಕುಣ ಡಿಕುಡಿಕು ಡಿಕುಕುಣ ಡಿಕುಣ” ಎಂಬ ಧ್ವನಿಗಳೊಂದಿಗೆ.' },
        },
        {
          text: 'ரரரர ரரரர ரரரர ரரர\nரிரிரிரி ரிரிரிரி ரிரிரிரி ரிரிரி\nடுடுடுடு டுடுடுடு டுடுடுடு டுடுடு\nடகுடகு டிகுடிகு டங்கு டிங்குகு',
          meaning: { en: 'With the sounds "rarara rara", "ririri riri", "dududu dudu" and "dakudaku dikudiku danku dinkuku", which make the whole space ring.', kn: '“ರರರರ ರರರರ ರರರರ ರರರ”, “ರಿರಿರಿರಿ ರಿರಿರಿರಿ ರಿರಿರಿರಿ ರಿರಿರಿ”, “ಡುಡುಡುಡು ಡುಡುಡುಡು ಡುಡುಡುಡು ಡುಡುಡು”, “ಡಕುಡಕು ಡಿಕುಡಿಕು ಡಂಗು ಡಿಂಗುಕು” ಎಂಬ ಧ್ವನಿಗಳೊಂದಿಗೆ.' },
        },
        {
          text: 'விந்து விந்து மயிலோன் விந்து\nமுந்து முந்து முருகவேள் முந்து\nஎன்றனை ஆளும் ஏரகச் செல்வ\nமைந்தன் வேண்டும் வரம்மகிழ்ந்து உதவும்',
          meaning: { en: 'Come, come, lord of the peacock; come forward, forward, Murugavel; you who rule me, Lord of Erakam (Swamimalai), son who grants the boon I ask gladly.', kn: 'ಬಾ ಬಾ ಮಯೂರನ ಒಡೆಯನೇ; ಮುಂದೆ ಬಾ ಬಾ ಮುರುಗವೇಳೇ; ನನ್ನನ್ನು ಆಳುವ ಏರಕದ (ಸ್ವಾಮಿಮಲೈ) ಒಡೆಯನೇ, ನಾನು ಬೇಡಿದ ವರವನ್ನು ಸಂತೋಷದಿಂದ ಕೊಡುವ ಮಗನೇ.' },
        },
      ],
    },
    {
      title: 'காவல் வேண்டுதல்',
      titleEn: 'Prayer for protection',
      note: 'Lines 59-107 ask the Lord\'s spear to guard the devotee, limb by limb and hour by hour.',
      noteKn: '59 ರಿಂದ 107ನೇ ಪಂಕ್ತಿಗಳು ಭಕ್ತನ ಅಂಗಾಂಗಗಳನ್ನೂ ಪ್ರತಿ ಹೊತ್ತನ್ನೂ ವೇಲು ಕಾಯಲಿ ಎಂದು ಬೇಡುತ್ತವೆ.',
      verses: [
        {
          text: 'லாலா லாலா லாலா வேசமும்\nலீலா லீலா லீலா வினோதனென்று\nஉன்திருவடியை உறுதி என்றெண்ணும்\nஎன்தலை வைத்துன் இணையடி காக்க\nஎன்னுயிர்க் குயிராம் இறைவன் காக்க\nபன்னிரு விழியால் பாலனைக் காக்க\nஅடியேன் வதனம் அழகுவேல் காக்க',
          meaning: { en: 'With the sounds "lala lala lala" and "leela leela leela", O playful One: holding your holy feet as my sure refuge, may the spear protect the head I lay at your twin feet; may the Lord, life of my life, protect me; may the child with twelve eyes protect me; may the beautiful spear protect my face.', kn: '“ಲಾಲಾ ಲಾಲಾ ಲಾಲಾ”, “ಲೀಲಾ ಲೀಲಾ ಲೀಲಾ” ಎಂಬ ಧ್ವನಿಗಳೊಂದಿಗೆ ಲೀಲಾವಿನೋದನೇ, ನಿನ್ನ ಪವಿತ್ರ ಪಾದಗಳನ್ನು ದೃಢ ಆಶ್ರಯವೆಂದು ನಂಬಿ ನಾನು ಅವುಗಳಲ್ಲಿ ಇಟ್ಟ ತಲೆಯನ್ನು ವೇಲು ಕಾಯಲಿ; ನನ್ನ ಪ್ರಾಣಕ್ಕೆ ಪ್ರಾಣವಾದ ಒಡೆಯ ಕಾಯಲಿ; ಹನ್ನೆರಡು ಕಣ್ಣಿನ ಬಾಲಕ ನನ್ನನ್ನು ಕಾಯಲಿ; ನನ್ನ ಮುಖವನ್ನು ಚೆಲುವಾದ ವೇಲು ಕಾಯಲಿ.' },
        },
        {
          text: 'பொடிபுனை நெற்றியைப் புனிதவேல் காக்க\nகதிர்வேல் இரண்டும் கண்ணினைக் காக்க\nவிதிசெவி யிரண்டும் வேலவர் காக்க\nநாசிகள் இரண்டும் நல்வேல் காக்க\nபேசிய வாய்தனைப் பெருவேல் காக்க',
          meaning: { en: 'May the pure spear protect my forehead marked with ash; may the two bright spears protect my eyes; may the Lord\'s spear protect my two ears; may the good spear protect my two nostrils; may the great spear protect the mouth that speaks.', kn: 'ವಿಭೂತಿ ಹಚ್ಚಿದ ಹಣೆಯನ್ನು ಪವಿತ್ರ ವೇಲು ಕಾಯಲಿ; ಹೊಳೆಯುವ ಎರಡು ವೇಲುಗಳು ನನ್ನ ಕಣ್ಣುಗಳನ್ನು ಕಾಯಲಿ; ಎರಡು ಕಿವಿಗಳನ್ನು ವೇಲವರ ವೇಲು ಕಾಯಲಿ; ಎರಡು ಮೂಗಿನ ಹೊಳ್ಳೆಗಳನ್ನು ಒಳ್ಳೆಯ ವೇಲು ಕಾಯಲಿ; ಮಾತಾಡುವ ಬಾಯಿಯನ್ನು ದೊಡ್ಡ ವೇಲು ಕಾಯಲಿ.' },
        },
        {
          text: 'முப்பத் திருபல் முனைவேல் காக்க\nசெப்பிய நாவைச் செவ்வேல் காக்க\nகன்னம் இரண்டும் கதிர்வேல் காக்க\nஎன்னிளங் கழுத்தை இனியவேல் காக்க\nமார்பை ரத்ன வடிவேல் காக்க',
          meaning: { en: 'May the sharp-tipped spear protect my thirty-two teeth; may the red spear protect my tongue; may the radiant spear protect both cheeks; may the gracious spear protect my young neck; may the jewelled spear protect my chest.', kn: 'ಮುವತ್ತೆರಡು ಹಲ್ಲುಗಳನ್ನು ಮೊನೆಯ ವೇಲು ಕಾಯಲಿ; ನಾಲಿಗೆಯನ್ನು ಕೆಂಪು ವೇಲು ಕಾಯಲಿ; ಎರಡು ಕೆನ್ನೆಗಳನ್ನು ಕಾಂತಿಯ ವೇಲು ಕಾಯಲಿ; ನನ್ನ ಎಳೆ ಕತ್ತನ್ನು ಇನಿಯ ವೇಲು ಕಾಯಲಿ; ಎದೆಯನ್ನು ರತ್ನಖಚಿತ ವೇಲು ಕಾಯಲಿ.' },
        },
        {
          text: 'சேரிள முலைமார் திருவேல் காக்க\nவடிவேல் இருதோள் வளம்பெறக் காக்க\nபிடரிகள் இரண்டும் பெருவேல் காக்க\nஅழகுடன் முதுகை அருள்வேல் காக்க\nபழுபதி னாறும் பருவேல் காக்க',
          meaning: { en: 'May the sacred spear protect my breast and chest; may the sharp spear protect both shoulders so that they thrive; may the great spear protect both back of the neck; may the spear of grace protect my back beautifully; may the strong spear protect the sixteen ribs.', kn: 'ಸ್ತನವೂ ಎದೆಯೂ ಇರುವ ಭಾಗವನ್ನು ಪವಿತ್ರ ವೇಲು ಕಾಯಲಿ; ಹರಿತ ವೇಲು ಎರಡು ಭುಜಗಳನ್ನು ಸಮೃದ್ಧವಾಗಿ ಕಾಯಲಿ; ಕತ್ತಿನ ಹಿಂಭಾಗಗಳನ್ನು ದೊಡ್ಡ ವೇಲು ಕಾಯಲಿ; ಬೆನ್ನನ್ನು ಅಂದವಾಗಿ ಕರುಣೆಯ ವೇಲು ಕಾಯಲಿ; ಹದಿನಾರು ಪಕ್ಕೆಲುಬುಗಳನ್ನು ಬಲವಾದ ವೇಲು ಕಾಯಲಿ.' },
        },
        {
          text: 'வெற்றிவேல் வயிற்றை விளங்கவே காக்க\nசிற்றிடை அழகுறச் செவ்வேல் காக்க\nநாணாங் கயிற்றை நல்வேல் காக்க\nஆண்குறி இரண்டும் அயில்வேல் காக்க\nபிட்டம் இரண்டும் பெருவேல் காக்க',
          meaning: { en: 'May the spear of victory protect my belly well; may the red spear protect my slender waist beautifully; may the good spear protect the cord at the waist; may the sharp spear protect my private part; may the great spear protect both hips.', kn: 'ವಿಜಯದ ವೇಲು ಹೊಟ್ಟೆಯನ್ನು ಚೆನ್ನಾಗಿ ಕಾಯಲಿ; ಕೆಂಪು ವೇಲು ತೆಳು ನಡುವನ್ನು ಅಂದವಾಗಿ ಕಾಯಲಿ; ಒಳ್ಳೆಯ ವೇಲು ನಡುವಿನ ದಾರವನ್ನು ಕಾಯಲಿ; ಹರಿತ ವೇಲು ಗುಹ್ಯಾಂಗವನ್ನು ಕಾಯಲಿ; ದೊಡ್ಡ ವೇಲು ಎರಡು ಸೊಂಟಗಳನ್ನು ಕಾಯಲಿ.' },
        },
        {
          text: 'வட்டக் குதத்தை வல்வேல் காக்க\nபணைத்தொடை இரண்டும் பருவேல் காக்க\nகணைக்கால் முழந்தாள் கதிர்வேல் காக்க\nஐவிரல் அடியினை அருள்வேல் காக்க\nகைகள் இரண்டும் கருணைவேல் காக்க',
          meaning: { en: 'May the mighty spear protect the round anus; may the thick spear protect both thighs; may the bright spear protect shins and knees; may the spear of grace protect the soles of the feet and five toes; may the compassionate spear protect both hands.', kn: 'ಮಲದ್ವಾರವನ್ನು ಬಲವಾದ ವೇಲು ಕಾಯಲಿ; ಎರಡು ತೊಡೆಗಳನ್ನು ದಪ್ಪ ವೇಲು ಕಾಯಲಿ; ಮೀನಖಂಡ ಮತ್ತು ಮೊಣಕಾಲುಗಳನ್ನು ಕಾಂತಿಯ ವೇಲು ಕಾಯಲಿ; ಐದು ಬೆರಳಿನ ಪಾದಗಳನ್ನು ಅರುಳ್ವೇಲು ಕಾಯಲಿ; ಎರಡು ಕೈಗಳನ್ನು ಕರುಣೆಯ ವೇಲು ಕಾಯಲಿ.' },
        },
        {
          text: 'முன்கை இரண்டும் முரண்வேல் காக்க\nபின்கை இரண்டும் பின்னவள் இருக்க\nநாவில் சரஸ்வதி நற்றுணை ஆக\nநாபிக் கமலம் நல்வேல் காக்க\nமுப்பால் நாடியை முனைவேல் காக்க',
          meaning: { en: 'May the strong spear protect both forearms; may Valli, the younger consort, remain with my back arms; may Sarasvati be a good help on my tongue; may the good spear protect the lotus of my navel; may the sharp spear protect the nerve of the triple channels.', kn: 'ಎರಡು ಮುಂಗೈಗಳನ್ನು ಬಲವಾದ ವೇಲು ಕಾಯಲಿ; ಹಿಂಗೈಗಳೊಂದಿಗೆ ಕಿರಿಯ ರಾಣಿ ವಳ್ಳಿ ಇರಲಿ; ನಾಲಿಗೆಯಲ್ಲಿ ಸರಸ್ವತಿ ಒಳ್ಳೆಯ ಸಹಾಯಕಳಾಗಲಿ; ಹೊಕ್ಕಳ ಕಮಲವನ್ನು ಒಳ್ಳೆಯ ವೇಲು ಕಾಯಲಿ; ಮೂರು ನಾಡಿಗಳನ್ನು ಹರಿತ ವೇಲು ಕಾಯಲಿ.' },
        },
        {
          text: 'எப்பொழுதும் எனை எதிர்வேல் காக்க\nஅடியேன் வசனம் அசைவுள நேரம்\nகடுகவே வந்து கனகவேல் காக்க\nவரும்பகல் தன்னில் வச்சிரவேல் காக்க\nஅரையிருள் தன்னில் அணையவேல் காக்க\nஏமத்தில் சாமத்தில் எதிர்வேல் காக்க\nதாமதம் நீக்கிச் சதுர்வேல் காக்க',
          meaning: { en: 'May the facing spear always protect me. At the time of my words and my movement, let the golden spear come quickly and protect me. May the thunderbolt spear protect me in the day to come, the fine spear protect me in half-darkness, the facing spear protect me at midnight and in the watches of the night, and the clever spear remove all delay and protect me.', kn: 'ಎದುರಿನ ವೇಲು ಸದಾ ನನ್ನನ್ನು ಕಾಯಲಿ. ನನ್ನ ಮಾತಿನ, ಚಲನೆಯ ಸಮಯದಲ್ಲಿ ಚಿನ್ನದ ವೇಲು ಬೇಗ ಬಂದು ಕಾಯಲಿ. ಬರುವ ಹಗಲಿನಲ್ಲಿ ವಜ್ರವೇಲು ಕಾಯಲಿ; ಅರೆಗತ್ತಲಲ್ಲಿ ಒಳ್ಳೆಯ ವೇಲು ಕಾಯಲಿ; ನಡುರಾತ್ರಿ ಮತ್ತು ಯಾಮಗಳಲ್ಲಿ ಎದುರಿನ ವೇಲು ಕಾಯಲಿ; ಎಲ್ಲ ವಿಳಂಬವನ್ನು ನೀಗಿಸಿ ಜಾಣ ವೇಲು ಕಾಯಲಿ.' },
        },
        {
          text: 'காக்க காக்க கனகவேல் காக்க\nநோக்க நோக்க நொடியினில் நோக்க\nதாக்க தாக்க தடையறத் தாக்க\nபார்க்க பார்க்க பாவம் பொடிபட\nபில்லி சூனியம் பெரும்பகை அகல',
          meaning: { en: 'Protect, protect, golden spear; look, look, look in a moment; strike, strike, strike without hindrance; see, see, so that sin turns to powder; and let witchcraft, sorcery and great enmity depart.', kn: 'ಕಾಯಿ ಕಾಯಿ ಕನಕವೇಲೇ; ನೋಡು ನೋಡು ಕ್ಷಣದಲ್ಲಿ ನೋಡು; ಹೊಡೆ ಹೊಡೆ ತಡೆಯಿಲ್ಲದೆ ಹೊಡೆ; ನೋಡು ನೋಡು ಪಾಪ ಪುಡಿಯಾಗುವಂತೆ; ಮಾಟ, ಮಂತ್ರ, ದೊಡ್ಡ ಹಗೆ ತೊಲಗಲಿ.' },
        },
      ],
    },
    {
      title: 'தீமைகளை அகற்றுதல்',
      titleEn: 'Driving away harm',
      note: 'Lines 108-160 ask that evil spirits, spells, wild animals, poisons and diseases flee and be bound. These lines name many folk beliefs; they are kept as in the printed text.',
      noteKn: '108 ರಿಂದ 160ನೇ ಪಂಕ್ತಿಗಳು ದುಷ್ಟಶಕ್ತಿಗಳು, ಮಾಟ, ಕಾಡುಪ್ರಾಣಿ, ವಿಷ ಮತ್ತು ರೋಗಗಳು ಓಡಿ ಹೋಗಲಿ, ಕಟ್ಟಲ್ಪಡಲಿ ಎಂದು ಬೇಡುತ್ತವೆ. ಇವುಗಳಲ್ಲಿ ಜಾನಪದ ನಂಬಿಕೆಗಳ ಹೆಸರುಗಳಿವೆ; ಮುದ್ರಿತ ಪಠ್ಯದಂತೆಯೇ ಇಡಲಾಗಿದೆ.',
      verses: [
        {
          text: 'வல்ல பூதம் வலாஷ்டிகப் பேய்கள்\nஅல்லற் படுத்தும் அடங்கா முனியும்\nபிள்ளைகள் தின்னும் புழக்கடை முனியும்\nகொள்ளிவாய்ப் பேய்களும் குறளைப் பேய்களும்\nபெண்களைத் தொடரும் பிரமராட்சதரும்',
          meaning: { en: 'The strong spirits and the vilashtika ghosts, the unruly ancestral spirits that torment, the back-door spirit that eats children, the fire-mouthed ghosts and tale-bearing ghosts, and the Brahma-demons that follow women: let them all', kn: 'ಬಲಿಷ್ಠ ಭೂತಗಳು, ವಲಾಷ್ಟಿಕ ಪ್ರೇತಗಳು, ನೋವು ಕೊಡುವ ಅಡಗದ ಮುನಿ, ಮಕ್ಕಳನ್ನು ತಿನ್ನುವ ಹಿತ್ತಲ ಮುನಿ, ಕೊಳ್ಳಿ ಬಾಯಿಯ ಪಿಶಾಚಗಳು, ಚಾಡಿ ಪಿಶಾಚಗಳು, ಹೆಂಗಸರನ್ನು ಹಿಂಬಾಲಿಸುವ ಬ್ರಹ್ಮರಾಕ್ಷಸರು, ಇವರೆಲ್ಲ' },
        },
        {
          text: 'அடியனைக் கண்டால் அலறிக் கலங்கிட\nஇரிசிக் காட்டேரி இத்துன்ப சேனையும்\nஎல்லிலும் இருட்டிலும் எதிர்ப்படும் அண்ணரும்\nகனபூசை கொள்ளும் காளியோ டனைவரும்\nவிட்டாங் காரரும் மிகுபல பேய்களும்',
          meaning: { en: 'tremble and shake on seeing me, the devotee: the hags, the vampire women, this army of troubles, the ones who meet you in light or dark, and all who come with Kali, who accepts heavy offerings, as well as the many ghosts of the unclean sorcerers, the devils who dance,', kn: 'ಅಡಿಯವನನ್ನು ಕಂಡು ಅಲೆದು ನಡುಗಲಿ: ಇರಿಸಿಕಾಟೇರಿ ಮೊದಲಾದ ಈ ತೊಂದರೆಯ ಸೈನ್ಯ, ಹಗಲು ಇರುಳು ಎದುರಾಗುವ ಅಣ್ಣರು, ಭಾರೀ ಪೂಜೆ ಸ್ವೀಕರಿಸುವ ಕಾಳಿಯೊಂದಿಗೆ ಬರುವ ಎಲ್ಲರು, ವಿಟ್ಟಾಂಗಾರರು, ಬಹುಬಗೆಯ ಪ್ರೇತಗಳು, ತಂಡಿಯಕಾರರು, ಚಾಂಡಾಲರು.' },
        },
        {
          text: 'தண்டியக் காரரும் சண்டாளர்களும்\nஎன்பெயர் சொல்லவும் இடிவிழுந் தோடிட\nஆனை அடியினில் அரும்பாவைகளும்\nபூனை மயிரும் பிள்ளைகள் என்பும்\nநகமும் மயிரும் நீண்முடி மண்டையும்',
          meaning: { en: 'At the mention of my name let thunder fall and let them flee, with the demonic dolls at elephant\'s feet, cat\'s hair, children\'s bones, nails and hair, and the skull with long hair:', kn: 'ನನ್ನ ಹೆಸರು ಹೇಳಿದ ಕೂಡಲೇ ಸಿಡಿಲು ಬಿದ್ದಂತೆ ಓಡಲಿ; ಆನೆಯ ಹೆಜ್ಜೆಯಲ್ಲಿ ಹೂಳಿದ ಅರಂಬಾವೆಗಳು, ಬೆಕ್ಕಿನ ಕೂದಲು, ಮಕ್ಕಳ ಎಲುಬು, ಉಗುರು, ಕೂದಲು, ಉದ್ದ ಕೂದಲಿನ ತಲೆಬುರುಡೆ.' },
        },
        {
          text: 'பாவைகளுடனே பலகலசத்துடன்\nமனையிற் புதைத்த வஞ்சனை தனையும்\nஒட்டியச் செருக்கும் ஒட்டியப் பாவையும்\nகாசும் பணமும் காவுடன் சோறும்\nஓதும் அஞ்சனமும் ஒருவழிப் போக்கும்',
          meaning: { en: 'The buried dolls with pots, the treacherous things buried in houses, the arrogance of the possessed and the doll made for it, coins and money and cooked rice offered at the shrine, fragrant black collyrium and spells that send one on the one-way road:', kn: 'ಪಾವೆಗಳೊಂದಿಗೆ ಕಲಶಗಳು, ಮನೆಯಲ್ಲಿ ಹೂಳಿದ ವಂಚನೆಯ ವಸ್ತುಗಳು, ಹಿಡಿದವರ ಸೊಕ್ಕು ಮತ್ತು ಅದಕ್ಕೆಂದು ಮಾಡಿದ ಬೊಂಬೆ, ಕಾಸು, ಹಣ, ದೇವಸ್ಥಾನಕ್ಕೆ ಇಟ್ಟ ಅನ್ನ, ಮಂತ್ರಿಸಿದ ಕಾಡಿಗೆ, ಒಮ್ಮಾರ್ಗದ ಮಾಟ.' },
        },
        {
          text: 'அடியனைக் கண்டால் அலைந்து குலைந்திட\nமாற்றார் வஞ்சகர் வந்து வணங்கிட\nகாலதூ தாளெனைக் கண்டாற் கலங்கிட\nஅஞ்சி நடுங்கிட அரண்டு புரண்டிட\nவாய்விட் டலறி மதிகெட் டோட',
          meaning: { en: 'Let them all, seeing me, writhe and be scattered; let enemies and cheats come and bow to me; let the messengers of death tremble when they see me; let them be frightened and roll over in confusion; let them cry out with open mouths and lose their wits and run.', kn: 'ಅಡಿಯವನನ್ನು ಕಂಡು ಇವರೆಲ್ಲ ಅಲೆದು ಚೆದುರಲಿ; ಶತ್ರುಗಳು, ವಂಚಕರು ಬಂದು ನನಗೆ ನಮಸ್ಕರಿಸಲಿ; ಯಮದೂತರು ನನ್ನನ್ನು ಕಂಡು ನಡುಗಲಿ; ಹೆದರಿ ಅಳ್ಳೆದೆಯಿಂದ ಹೊರಳಲಿ; ಬಾಯಿ ತೆರೆದು ಕಿರುಚಿ ಬುದ್ಧಿ ಕಳೆದುಕೊಂಡು ಓಡಲಿ.' },
        },
        {
          text: 'படியினில் முட்டப் பாசக் கயிற்றால்\nகட்டுடன் அங்கம் கதறிடக் கட்டு\nகட்டி உருட்டு கால்கை முறிய\nகட்டு கட்டு கதறிடக் கட்டு\nமுட்டு முட்டு விழிகள் பிதுங்கிட',
          meaning: { en: 'Bind them with the noose rope so that they strike the ground; bind them so that their bodies cry out; bind and roll them so that hands and feet break; bind, bind, so that they cry out; strike, strike, so that their eyes bulge.', kn: 'ನೆಲಕ್ಕೆ ಬಡಿಯುವಂತೆ ಪಾಶದ ಹಗ್ಗದಿಂದ ಕಟ್ಟು; ಮೈ ಕಿರುಚುವಂತೆ ಕಟ್ಟು; ಕಾಲು ಕೈ ಮುರಿಯುವಂತೆ ಕಟ್ಟಿ ಉರುಳಿಸು; ಕಟ್ಟು ಕಟ್ಟು ಅಳುವಂತೆ ಕಟ್ಟು; ಬಡಿ ಬಡಿ ಕಣ್ಣು ಉಬ್ಬುವಂತೆ.' },
        },
        {
          text: 'செக்கு செக்கு செதில் செதிலாக\nசொக்கு சொக்கு சூர்ப்பகைச் சொக்கு\nகுத்து குத்து கூர்வடி வேலால்\nபற்று பற்று பகலவன் தணலெரி\nதணலெரி தணலெரி தணலது வாக\nவிடு விடு வேலை வெருண்டது ஓட',
          meaning: { en: 'Crush, crush into small pieces; strike, strike the enemy of the demon Sura; stab, stab with the sharp spear; seize, seize with the heat of the sun\'s embers; let them be flames, flames, flames; let go, let go the spear so that they flee in fear.', kn: 'ಪುಡಿ ಪುಡಿ ಮಾಡು, ಚೂರು ಚೂರಾಗಿಸು; ಸೂರನ ಶತ್ರುವನ್ನು ಹೊಡೆ ಹೊಡೆ; ಹರಿತ ವೇಲಿನಿಂದ ಚುಚ್ಚು ಚುಚ್ಚು; ಸೂರ್ಯನ ಕೆಂಡದ ತಾಪದಿಂದ ಹಿಡಿ ಹಿಡಿ; ಉರಿ ಉರಿ ಜ್ವಾಲೆಯಾಗಲಿ; ವೇಲನ್ನು ಬಿಡು ಬಿಡು, ಅವರು ಹೆದರಿ ಓಡಲಿ.' },
        },
        {
          text: 'புலியும் நரியும் புன்னரி நாயும்\nஎலியும் கரடியும் இனித்தொடர்ந் தோட\nதேளும் பாம்பும் செய்யான் பூரான்\nகடிவிட விஷங்கள் கடித்துய ரங்கம்\nஏறிய விஷங்கள் எளிதினில் இறங்க',
          meaning: { en: 'Let tigers, foxes, wild boar and dogs, rats and bears run off without following me; and let scorpions, snakes, the poisonous centipede, and the poison from their bites that has risen into the body come down easily.', kn: 'ಹುಲಿ, ನರಿ, ಕಾಡುಹಂದಿ, ನಾಯಿ, ಇಲಿ, ಕರಡಿ ನನ್ನನ್ನು ಹಿಂಬಾಲಿಸದೆ ಓಡಲಿ; ಚೇಳು, ಹಾವು, ವಿಷದ ಅರಿವಾಣ, ಕಡಿತದ ವಿಷ ದೇಹಕ್ಕೆ ಏರಿದ್ದರೂ ಸುಲಭವಾಗಿ ಇಳಿಯಲಿ.' },
        },
        {
          text: 'ஒளிப்புஞ் சுளுக்கும் ஒருதலை நோயும்\nவாதம் சயித்தியம் வலிப்புப் பித்தம்\nசூலைசயங் குன்மம் சொக்குச் சிரங்கு\nகுடைச்சல் சிலந்தி குடல்விப் பிரிதி\nபக்கப் பிளவை படர் தொடை வாழை',
          meaning: { en: 'May body-swelling, sprain, headache, wind disease, the madness of fits, bile, colic, stomach pain, consumption, itching, boils, abdominal disorders and other troubles go; and may swelling at the side, thigh and plantain-like swelling also go.', kn: 'ಊತ, ಉಳುಕು, ತಲೆನೋವು, ವಾತ, ಸನ್ನಿ, ಪಿತ್ತ, ಶೂಲೆ, ಕ್ಷಯ, ಗುಲ್ಮ, ತುರಿ, ಕುರು, ಹೊಟ್ಟೆಯ ತೊಂದರೆ ಮೊದಲಾದ ರೋಗಗಳು ಹೋಗಲಿ; ಪಕ್ಕದ ಬಾವು, ತೊಡೆಯ ಬಾವು, ಬಾಳೆಯಂಥ ಬಾವು ಕೂಡ ಹೋಗಲಿ.' },
        },
        {
          text: 'கடுவன் படுவன் கைத்தாள் சிலந்தி\nபற்குத்து அரணை பருஅரை யாப்பும்\nஎல்லாப் பிணியும் என்றனைக் கண்டால்\nநில்லா தோட நீ எனக் கருள்வாய்\nஈரேழ் உலகமும் எனக்கு உறவாக\nஆணும் பெண்ணும் அனைவரும் எனக்கா\nமண்ணாள் அரசரும் மகிழ்ந்துறவாகவும்',
          meaning: { en: 'Boils, ulcers, tooth ache and the like, and all disease, when they see me, let them not stand but flee; and Lord, grant me that the fourteen worlds may be my kin, men and women all may be mine, and kings who rule the land may be happily friendly to me.', kn: 'ಕುರು, ಹುಣ್ಣು, ಹಲ್ಲುನೋವು ಮೊದಲಾದ ಎಲ್ಲ ರೋಗಗಳು ನನ್ನನ್ನು ಕಂಡು ನಿಲ್ಲದೆ ಓಡಲಿ; ಹದಿನಾಲ್ಕು ಲೋಕಗಳೂ ನನಗೆ ಬಂಧುಗಳಾಗಲಿ; ಗಂಡಸರು ಹೆಂಗಸರು ಎಲ್ಲರೂ ನನ್ನವರಾಗಲಿ; ನಾಡನ್ನಾಳುವ ಅರಸರು ಸಂತೋಷದಿಂದ ನನಗೆ ಬಂಧುಗಳಾಗಲಿ ಎಂದು ನೀನು ಅನುಗ್ರಹಿಸು.' },
        },
      ],
    },
    {
      title: 'திருநாமத் துதி',
      titleEn: 'Praise of the names',
      note: 'Lines 161-186: the devotee sings the Lord\'s names, centres of worship and deeds, and asks for sacred ash and grace.',
      noteKn: '161 ರಿಂದ 186ನೇ ಪಂಕ್ತಿಗಳು ಮುರುಗನ ನಾಮಗಳನ್ನೂ ಕ್ಷೇತ್ರಗಳನ್ನೂ ಹಾಡಿ ವಿಭೂತಿ ಮತ್ತು ಕೃಪೆಯನ್ನು ಬೇಡುತ್ತವೆ.',
      verses: [
        {
          text: 'உன்னைத் துதிக்க உன் திருநாமம்\nசரஹண பவனே சைலொளி பவனே\nதிரிபுர பவனே திகழொளி பவனே\nபரிபுர பவனே பவமொழி பவனே\nஅரிதிரு மருகா அமரா பதியைக்\nகாத்துத் தேவர்கள் கடுஞ்சிறை விடுத்தாய்',
          meaning: { en: 'To praise you, your holy names: Saravanabhava, Sailolibhava, Tripurabhava, Tigazholibhava, Paripurabhava, the one who destroys rebirth, kinsman of Hari and Lakshmi, who freed the gods from the harsh prison of Amaravati and protected them.', kn: 'ನಿನ್ನನ್ನು ಸ್ತುತಿಸಲು ನಿನ್ನ ಪವಿತ್ರ ನಾಮಗಳು: ಶರವಣಭವ, ಶೈಲೊಳಿಭವ, ತ್ರಿಪುರಭವ, ತಿಗಳೊಳಿಭವ, ಪರಿಪುರಭವ, ಭವವನ್ನು ಅಳಿಸುವವ, ಹರಿ-ಲಕ್ಷ್ಮಿಯರ ಸೋದರಳಿಯ, ಅಮರಾವತಿಯ ಕಠಿಣ ಸೆರೆಯಿಂದ ದೇವತೆಗಳನ್ನು ಬಿಡಿಸಿ ಕಾಪಾಡಿದವ.' },
        },
        {
          text: 'கந்தா குகனே கதிர்வேலவனே\nகார்த்திகை மைந்தா கடம்பா கடம்பனை\nஇடும்பனை அழித்த இனியவேல் முருகா\nதணிகா சலனே சங்கரன் புதல்வா\nகதிர்கா மத்துறை கதிர்வேல் முருகா\nபழநிப் பதிவாழ் பால குமாரா\nஆவினன் குடிவாழ் அழகிய வேலா\nசெந்தின்மா மலையுறும் செங்கல்வராயா\nசமரா புரிவாழ் சண்முகத் தரசே',
          meaning: { en: 'Kanda, Guha, lord of the shining spear, son of Karttika, Kadamba, Kadambanai, Murugan with the sweet spear who destroyed Idumban, Lord of Tanikai-malai, son of Shankara, Murugan of Katirkamam, child of Palani, handsome Velan of Avinankudi, Senkalvaraya of Tirucchendur, king Shanmukha of Samarapuri.', kn: 'ಕಂದ, ಗುಹ, ಕದಿರ್ವೇಲವ, ಕಾರ್ತಿಕೆಯ ಮಗ, ಕದಂಬ, ಕದಂಬನೆ, ಇಡುಂಬನನ್ನು ಅಳಿಸಿದ ಇನಿಯ ವೇಲ ಮುರುಗ, ತಣಿಕಾಚಲದ ಒಡೆಯ, ಶಂಕರನ ಮಗ, ಕತಿರ್ಕಾಮದ ವೇಲ ಮುರುಗ, ಪಳನಿಯ ಬಾಲಕುಮಾರ, ಆವಿನನ್ಕುಡಿಯ ಅಂದದ ವೇಲ, ತಿರುಚೆಂದೂರಿನ ಸೆಂಗಲ್ವರಾಯ, ಸಮರಾಪುರಿಯ ಷಣ್ಮುಖ ಅರಸ.' },
        },
        {
          text: 'காரார் குழலாள் கலைமகள் நன்றாய்\nஎன்நா இருக்க யான் உனைப் பாட\nஎனைத்தொடர்ந் திருக்கும் எந்தை முருகனைப்\nபாடினேன் ஆடினேன் பரவசமாக\nஆடினேன் நாடினேன் ஆவினன் பூதியை',
          meaning: { en: 'Sarasvati of dark hair, be my good help; as my tongue is there, let me sing you; I have sung and danced in joy at the one who follows me, my father Murugan; I have danced and sought the sacred ash of Avinankudi.', kn: 'ಕಪ್ಪು ಕೇಶದ ಸರಸ್ವತಿ ಒಳ್ಳೆಯ ಸಹಾಯಕಳಾಗಲಿ; ನನ್ನ ನಾಲಿಗೆ ಇರುವುದರಿಂದ ನಿನ್ನನ್ನು ಹಾಡುವೆನು; ನನ್ನನ್ನು ಹಿಂಬಾಲಿಸುವ ತಂದೆ ಮುರುಗನನ್ನು ಹಾಡಿದೆನು, ಪರವಶನಾಗಿ ಕುಣಿದೆನು; ಕುಣಿದು ಆವಿನನ್ಕುಡಿಯ ವಿಭೂತಿಯನ್ನು ಬಯಸಿದೆನು.' },
        },
        {
          text: 'நேசமுடன் யான் நெற்றியில் அணியப்\nபாச வினைகள் பற்றது நீங்கி\nஉன்பதம் பெறவே உன்னருளாக\nஅன்புடன் இரக்ஷி அன்னமுஞ் சொன்னமும்\nமெத்த மெத்தாக வேலாயுதனார்\nசித்திபெற் றடியேன் சிறப்புடன் வாழ்க',
          meaning: { en: 'To wear it with love on my forehead, let the bonds of my deeds be loosened; to reach your feet by your grace, protect me with love; again and again, may the Lord of the spear give me rice and gold, and let me live happily with success.', kn: 'ನಾನು ಅದನ್ನು ಪ್ರೀತಿಯಿಂದ ಹಣೆಗೆ ಧರಿಸಲು ಕರ್ಮಬಂಧಗಳು ಸಡಿಲವಾಗಲಿ; ನಿನ್ನ ಕೃಪೆಯಿಂದ ನಿನ್ನ ಪಾದ ಸೇರಲು ಪ್ರೀತಿಯಿಂದ ಕಾಪಾಡು; ಮತ್ತೆ ಮತ್ತೆ ವೇಲಾಯುಧನು ಅನ್ನವನ್ನೂ ಹೊನ್ನನ್ನೂ ಕೊಡಲಿ; ಸಿದ್ಧಿ ಪಡೆದು ಸಂತೋಷದಿಂದ ಬಾಳಲಿ ಈ ಸೇವಕ.' },
        },
      ],
    },
    {
      title: 'வாழ்த்தும் வேண்டுதலும்',
      titleEn: 'Blessings and prayer',
      note: 'Lines 187-206 wish long life to the Lord and His spear, confess faults and ask Him to forgive them as a father and mother would, and tell how to recite the Kavacham.',
      noteKn: '187 ರಿಂದ 206ನೇ ಪಂಕ್ತಿಗಳು ಮುರುಗ ಮತ್ತು ಅವನ ವೇಲಿಗೆ ಜಯಕಾರ ಹೇಳುತ್ತವೆ, ತಪ್ಪುಗಳನ್ನು ಒಪ್ಪಿ ಕ್ಷಮೆ ಬೇಡುತ್ತವೆ, ಕವಚವನ್ನು ಪಠಿಸುವ ವಿಧಾನವನ್ನು ಹೇಳುತ್ತವೆ.',
      verses: [
        {
          text: 'வாழ்க வாழ்க மயிலோன் வாழ்க\nவாழ்க வாழ்க வடிவேல் வாழ்க\nவாழ்க வாழ்க மலைக்குரு வாழ்க\nவாழ்க வாழ்க மலைக்குற மகளுடன்\nவாழ்க வாழ்க வாரணத்துவசம்\nவாழ்க வாழ்க என் வறுமைகள் நீங்க',
          meaning: { en: 'Long live the lord of the peacock; long live the sharp spear; long live the guru of the hills; long live Him with the hill-girl Valli; long live the banner with the cock; and long live to end my poverty.', kn: 'ನವಿಲಿನ ಒಡೆಯ ಜಯಿಸಲಿ; ಹರಿತ ವೇಲು ಜಯಿಸಲಿ; ಬೆಟ್ಟದ ಗುರು ಜಯಿಸಲಿ; ಬೆಟ್ಟದ ಕುರವರ ಹೆಣ್ಣು ವಳ್ಳಿಯೊಂದಿಗೆ ಅವನು ಜಯಿಸಲಿ; ಹುಂಜದ ಧ್ವಜ ಜಯಿಸಲಿ; ನನ್ನ ಬಡತನ ನೀಗುವಂತೆ ಜಯವಾಗಲಿ.' },
        },
        {
          text: 'எத்தனை குறைகள் எத்தனை பிழைகள்\nஎத்தனை யடியேன் எத்தனை செய்தால்\nபெற்றவன் நீ குரு பொறுப்பது உன் கடன்\nபெற்றவள் குறமகள் பெற்றவளாமே\nபிள்ளையென் றன்பாய்ப் பிரிய மளித்து\nமைந்தனென் மீதுன் மனமகிழ்ந் தருளித்\nதஞ்சமென் றடியார் தழைத்திட அருள்செய்',
          meaning: { en: 'How many faults and how many mistakes, however many your servant commits, you are my father and guru, it is your duty to forgive; the hill-girl is the mother who bore me. Giving love as to a son, rejoice in me and grant grace so that your devotees thrive; and accept this Kanda Shashti Kavacham which you desired.', kn: 'ಎಷ್ಟು ಕೊರತೆಗಳು, ಎಷ್ಟು ತಪ್ಪುಗಳು, ಅಡಿಯವನು ಎಷ್ಟು ಮಾಡಿದರೂ, ನೀನೇ ತಂದೆ, ಗುರು, ಕ್ಷಮಿಸುವುದು ನಿನ್ನ ಕರ್ತವ್ಯ; ಕುರವರ ಹೆಣ್ಣು ನನ್ನನ್ನು ಹೆತ್ತ ತಾಯಿ. ಮಗನೆಂದು ಪ್ರೀತಿ ನೀಡಿ, ಮನ ಮೆಚ್ಚಿ, ಭಕ್ತರು ಬೆಳೆಯುವಂತೆ ಅನುಗ್ರಹಿಸು; ನೀನು ಬಯಸಿದ ಈ ಕಂದ ಷಷ್ಠಿ ಕವಚವನ್ನು ಸ್ವೀಕರಿಸು.' },
        },
        {
          text: 'கந்தர் சஷ்டி கவசம் விரும்பிய\nபாலன் தேவ ராயன் பகர்ந்ததைக்\nகாலையில் மாலையில் கருத்துடன் நாளும்\nஆசாரத்துடன் அங்கந் துலக்கி\nநேசமுடன் ஒரு நினைவதுவாகிக்\nகந்தர் சஷ்டிக் கவசம் இதனைச்\nசிந்தை கலங்காது தியானிப்பவர்கள்',
          meaning: { en: 'Those who recite what the child Devaraya has composed, morning and evening with devotion every day, after cleaning the body in purity, with a single loving thought, and meditate on this Kanda Shashti Kavacham with an untroubled mind, will have these benefits.', kn: 'ಬಾಲ ದೇವರಾಯನು ಹೇಳಿದ ಇದನ್ನು ಬೆಳಿಗ್ಗೆ ಸಂಜೆ ಭಕ್ತಿಯಿಂದ ನಿತ್ಯ, ಶುಚಿಯಾಗಿ ದೇಹ ತೊಳೆದು, ಪ್ರೀತಿಯಿಂದ ಒಂದೇ ಚಿಂತನೆಯಲ್ಲಿ, ಚಿಂತೆಯಿಲ್ಲದ ಮನಸ್ಸಿನಿಂದ ಈ ಕಂದ ಷಷ್ಠಿ ಕವಚವನ್ನು ಧ್ಯಾನಿಸುವವರಿಗೆ ಈ ಫಲಗಳು ಸಿಗುವುವು.' },
        },
      ],
    },
    {
      title: 'பலன்',
      titleEn: 'Fruit of reciting',
      note: 'Lines 207-220 describe the benefits promised for those who recite it, in the form the Kavacham itself gives.',
      noteKn: '207 ರಿಂದ 220ನೇ ಪಂಕ್ತಿಗಳು ಪಠಿಸುವವರಿಗೆ ಕವಚವೇ ಹೇಳುವ ಫಲಗಳನ್ನು ವಿವರಿಸುತ್ತವೆ.',
      verses: [
        {
          text: 'ஒருநாள் முப்பத் தாறுருக் கொண்டு\nஓதியே செபித்து உகந்து நீறணிய\nஅஷ்டதிக் குள்ளோர் அடங்கலும் வசமாய்த்\nதிசைமன்ன ரெண்மர் செயலது அருளுவர்\nமாற்றல ரெல்லாம் வந்து வணங்குவர்',
          meaning: { en: 'On a day, reciting it thirty-six times and wearing sacred ash gladly, all who live in the eight directions come under their power; the eight guardians of the quarters grant them favour; and all enemies come and bow to them.', kn: 'ಒಂದು ದಿನ ಮುವತ್ತಾರು ಬಾರಿ ಪಠಿಸಿ ಸಂತೋಷದಿಂದ ವಿಭೂತಿ ಧರಿಸಿದರೆ, ಅಷ್ಟದಿಕ್ಕಿನ ಎಲ್ಲರೂ ವಶರಾಗುವರು; ದಿಕ್ಪಾಲಕ ಅರಸರು ಅನುಗ್ರಹಿಸುವರು; ಶತ್ರುಗಳೆಲ್ಲ ಬಂದು ನಮಸ್ಕರಿಸುವರು.' },
        },
        {
          text: 'நவகோள் மகிழ்ந்து நன்மை யளித்திடும்\nநவமத னெனவும் நல்லெழில் பெறுவர்\nஎந்த நாளும் ஈரெட்டாய் வாழ்வர்\nகந்தர்கை வேலாம் கவசத் தடியை\nவழியாற் காண மெய்யாய் விளங்கும்',
          meaning: { en: 'The nine planets rejoice and do good; they gain the beauty of the new Kama and live always sixteen years of age; the Lord\'s spear is this Kavacham: it shines as a refuge to those who see it by their way, and the demons flee when they see it with their eyes.', kn: 'ನವಗ್ರಹಗಳು ಸಂತೋಷಿಸಿ ಒಳಿತನ್ನು ನೀಡುವುವು; ನವ ಮನ್ಮಥನಂತೆ ಸುಂದರ ಚೆಲುವು ಪಡೆಯುವರು; ಯಾವಾಗಲೂ ಹದಿನಾರರ ಪ್ರಾಯದಂತೆ ಬಾಳುವರು; ಕಂದನ ಕೈ ವೇಲೇ ಈ ಕವಚ; ದಾರಿಯಲ್ಲಿ ನೋಡಿದವರಿಗೆ ಅದು ಆಧಾರವಾಗಿ ಹೊಳೆಯುವುದು; ಕಣ್ಣಿಂದ ನೋಡಿದರೆ ಪ್ರೇತಗಳು ಹೆದರಿ ಓಡುವುವು.' },
        },
        {
          text: 'விழியாற் காண வெருண்டிடும் பேய்கள்\nபொல்லா தவரைப் பொடிப் பொடி யாக்கும்\nநல்லோர் நினைவில் நடனம் புரியும்\nசர்வ சத்துரு சங்கா ரத்தடி',
          meaning: { en: 'The ghosts flee on seeing it with the eyes; it grinds the wicked into powder; it dances in the minds of the good; it is the destroyer of all enemies.', kn: 'ಕಣ್ಣಿಂದ ನೋಡಿದರೆ ಪ್ರೇತಗಳು ಹೆದರಿ ಓಡುವುವು; ದುಷ್ಟರನ್ನು ಪುಡಿಪುಡಿ ಮಾಡುವುದು; ಸಜ್ಜನರ ಮನಸ್ಸಿನಲ್ಲಿ ನರ್ತಿಸುವುದು; ಎಲ್ಲ ಶತ್ರುಗಳನ್ನು ಸಂಹರಿಸುವ ಪಾದ ಅದು.' },
        },
      ],
    },
    {
      title: 'போற்றி',
      titleEn: 'Salutations',
      note: 'Lines 221-238 salute the Lord who feeds the heroes and His many names, and end in surrender at His lotus feet.',
      noteKn: '221 ರಿಂದ 238ನೇ ಪಂಕ್ತಿಗಳು ಮುರುಗನಿಗೆ ವಂದನೆ ಸಲ್ಲಿಸಿ ಅವನ ಪಾದಕಮಲಕ್ಕೆ ಶರಣಾಗತಿಯಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತವೆ.',
      verses: [
        {
          text: 'அறிந்தென துள்ளம் அஷ்டலட் சுமிகளில்\nவீரலட் சுமிக்கு விருந்துண வாகச்\nசூரபத்மாவைத் துணித்தகை யதனால்\nஇருபத் தேழ்வர்க்கு உவந்தமு தளித்த\nகுருபரன் பழநிக் குன்றினி லிருக்கும்',
          meaning: { en: 'Knowing my mind that dwells in the eight Lakshmis, you who gave sweet nectar as a feast to Veera-Lakshmi and the twenty-seven, with the hand that cut Surapadma: praise to the child of the guru, who lives on the hill of Palani.', kn: 'ಎಂಟು ಲಕ್ಷ್ಮಿಯರಲ್ಲಿರುವ ನನ್ನ ಮನಸ್ಸನ್ನು ಅರಿತು, ಸೂರಪದ್ಮನನ್ನು ಕತ್ತರಿಸಿದ ಕೈಯಿಂದ ವೀರಲಕ್ಷ್ಮಿ ಮತ್ತು ಇಪ್ಪತ್ತೇಳು ಮಂದಿಗೆ ಅಮೃತದ ಔತಣ ನೀಡಿದ, ಪಳನಿ ಬೆಟ್ಟದ ಗುರುಪರನ ಚಿಕ್ಕ ಮಗುವಿಗೆ ವಂದನೆ.' },
        },
        {
          text: 'சின்னக் குழந்தை சேவடி போற்றி\nஎனைத்தடுத் தாட்கொள என்றன துள்ளம்\nமேவிய வடிவுறும் வேலவா போற்றி\nதேவர்கள் சேனா பதியே போற்றி\nகுறமகள் மனமகிழ் கோவே போற்றி\nதிறமிகு திவ்விய தேகா போற்றி',
          meaning: { en: 'Praise to the red feet of the child; praise to the Lord who takes my mind and lets me be his; praise to Velava of the matching form; praise to commander of the gods; praise to the lord whom the hill-girl rejoices in; praise to the divine one of great skill.', kn: 'ಆ ಮಗುವಿನ ಕೆಂಪು ಪಾದಗಳಿಗೆ ವಂದನೆ; ನನ್ನನ್ನು ತಡೆದು ಆಳುತ್ತ ನನ್ನ ಮನ ಸೇರಿದ ಒಡೆಯನಿಗೆ ವಂದನೆ; ಸೂಕ್ತ ರೂಪದ ವೇಲವನಿಗೆ ವಂದನೆ; ದೇವತೆಗಳ ಸೇನಾಪತಿಗೆ ವಂದನೆ; ಕುರವರ ಹೆಣ್ಣಿನ ಮನ ಮೆಚ್ಚಿದ ಒಡೆಯನಿಗೆ ವಂದನೆ; ಮಹಾ ಸಾಮರ್ಥ್ಯದ ದಿವ್ಯ ದೇಹಿಗೆ ವಂದನೆ.' },
        },
        {
          text: 'இடும்பா யுதனே இடும்பா போற்றி\nகடம்பா போற்றி கந்தா போற்றி\nவெட்சி புனையும் வேளே போற்றி\nஉயர்கிரி கனகசபைக்கோர் அரசே\nமயில்நட மிடுவோய் மலரடி சரணம்\nசரணம் சரணம் சரஹணபவ ஓம்\nசரணம் சரணம் சண்முகா சரணம்',
          meaning: { en: 'Praise to Idumbayudhan, the Idumban-slayer; praise to Kadamba, to Kanda; praise to the Lord who wears the vetchi flower; Lord of the high hill, the single king of the golden hall: I take refuge at your feet, you who make the peacock dance. Refuge, refuge, Saravanabhava Om; refuge, refuge, Shanmukha, refuge.', kn: 'ಇಡುಂಬಾಯುಧನೇ, ಇಡುಂಬನನ್ನು ಕೊಂದವನೇ ನಮೋ; ಕದಂಬನೇ ನಮೋ, ಕಂದನೇ ನಮೋ; ವೆಟ್ಚಿ ಹೂ ಧರಿಸುವ ಒಡೆಯನೇ ನಮೋ; ಉನ್ನತ ಗಿರಿ, ಕನಕ ಸಭೆಯ ಏಕ ಅರಸನೇ; ನವಿಲನ್ನು ಕುಣಿಸುವವನೇ, ನಿನ್ನ ಪಾದಕ್ಕೆ ಶರಣು. ಶರಣು ಶರಣು ಶರವಣಭವ ಓಂ; ಶರಣು ಶರಣು ಷಣ್ಮುಖ ಶರಣು.' },
        },
      ],
    },
  ],
};
