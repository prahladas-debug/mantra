import type { Category, CategoryId } from '../data/types';
import { translit, type ScriptId } from './transliterate';

/**
 * Interface labels written the way each language actually writes them,
 * rather than transliterated Sanskrit (e.g. Kannada ನಿತ್ಯ ಪ್ರಾರ್ಥನೆ,
 * not ನಿತ್ಯ ಪ್ರಾರ್ಥನಾ). Texts themselves stay Sanskrit and are transliterated.
 * Falls back to transliterating the Devanagari label.
 */
type Labels = Partial<Record<ScriptId, string>>;

export const APP_TITLE: Labels = {
  devanagari: 'नन्दादीपः',
  kannada: 'ನಂದಾದೀಪ',
  telugu: 'నందాదీపం',
  tamil: 'நந்தா தீபம்',
  malayalam: 'നന്ദാദീപം',
  gujarati: 'નંદાદીપ',
  bengali: 'নন্দাদীপ',
  oriya: 'ନନ୍ଦାଦୀପ',
  iast: 'Nandādīpa',
  english: 'Nandadeepa',
};

/**
 * The motto under the name: "Lead me from darkness to light" (Brihadaranyaka Upanishad 1.3.28),
 * shown in the reader's script.
 */
export const APP_MOTTO = 'तमसो मा ज्योतिर्गमय';
/** What the app holds, in plain English. */
export const APP_TAGLINE = 'Mantra · Parayana · Panchanga';

const CATEGORY_LABELS: Record<CategoryId, Labels> = {
  nitya: {
    kannada: 'ನಿತ್ಯ ಪ್ರಾರ್ಥನೆ',
    telugu: 'నిత్య ప్రార్థన',
    tamil: 'தினசரி பிரார்த்தனைகள்',
    malayalam: 'നിത്യ പ്രാർത്ഥന',
    gujarati: 'નિત્ય પ્રાર્થના',
    bengali: 'নিত্য প্রার্থনা',
    oriya: 'ନିତ୍ୟ ପ୍ରାର୍ଥନା',
  },
  gita: {
    kannada: 'ಭಗವದ್ಗೀತೆ',
    telugu: 'భగవద్గీత',
    tamil: 'பகவத் கீதை',
    malayalam: 'ഭഗവദ്ഗീത',
    gujarati: 'ભગવદ્ ગીતા',
    bengali: 'ভগবদ্গীতা',
    oriya: 'ଭଗବଦ୍ ଗୀତା',
  },
  sundarakanda: { kannada: 'ಸುಂದರಕಾಂಡ', telugu: 'సుందరకాండ', tamil: 'சுந்தர காண்டம்', malayalam: 'സുന്ദരകാണ്ഡം', gujarati: 'સુંદરકાંડ', bengali: 'সুন্দরকাণ্ড', oriya: 'ସୁନ୍ଦରକାଣ୍ଡ' },
  ramayana: { kannada: 'ವಾಲ್ಮೀಕಿ ರಾಮಾಯಣ', telugu: 'వాల్మీకి రామాయణం', tamil: 'வால்மீகி ராமாயணம்', malayalam: 'വാൽമീകി രാമായണം', gujarati: 'વાલ્મીકિ રામાયણ', bengali: 'বাল্মীকি রামায়ণ', oriya: 'ବାଲ୍ମୀକି ରାମାୟଣ' },
  mahabharata: { kannada: 'ಮಹಾಭಾರತ', telugu: 'మహాభారతం', tamil: 'மகாபாரதம்', malayalam: 'മഹാഭാരതം', gujarati: 'મહાભારત', bengali: 'মহাভারত', oriya: 'ମହାଭାରତ' },
  devimahatmya: { kannada: 'ದೇವೀಮಾಹಾತ್ಮ್ಯ', telugu: 'దేవీమాహాత్మ్యం', tamil: 'தேவீ மாஹாத்மியம்', malayalam: 'ദേവീമാഹാത്മ്യം', gujarati: 'દેવીમાહાત્મ્ય', bengali: 'দেবীমাহাত্ম্য', oriya: 'ଦେବୀମାହାତ୍ମ୍ୟ' },
  harikathamrutasara: { kannada: 'ಹರಿಕಥಾಮೃತಸಾರ', telugu: 'హరికథామృతసార', tamil: 'ஹரிகதாம்ருத ஸாரம்', malayalam: 'ഹരികഥാമൃതസാര', gujarati: 'હરિકથામૃતસાર', bengali: 'হরিকথামৃতসার', oriya: 'ହରିକଥାମୃତସାର' },
  sumadhvavijaya: { kannada: 'ಸುಮಧ್ವವಿಜಯ', telugu: 'సుమధ్వవిజయం', tamil: 'ஸுமத்வ விஜயம்', malayalam: 'സുമധ്വവിജയം', gujarati: 'સુમધ્વવિજય', bengali: 'সুমধ্ববিজয়', oriya: 'ସୁମଧ୍ୱବିଜୟ' },
  vedic: {
    kannada: 'ವೈದಿಕ ಸೂಕ್ತಗಳು',
    telugu: 'వైదిక సూక్తాలు',
    tamil: 'வேத சூக்தங்கள்',
    malayalam: 'വൈദിക സൂക്തങ്ങൾ',
    gujarati: 'વૈદિક સૂક્તો',
    bengali: 'বৈদিক সূক্ত',
    oriya: 'ବୈଦିକ ସୂକ୍ତ',
  },
  sahasranama: {
    kannada: 'ಸಹಸ್ರನಾಮಗಳು',
    telugu: 'సహస్రనామాలు',
    tamil: 'ஸஹஸ்ரநாமங்கள்',
    malayalam: 'സഹസ്രനാമങ്ങൾ',
    gujarati: 'સહસ્રનામ',
    bengali: 'সহস্রনাম',
    oriya: 'ସହସ୍ରନାମ',
  },
  stotra: {
    kannada: 'ಸ್ತೋತ್ರಗಳು',
    telugu: 'స్తోత్రాలు',
    tamil: 'ஸ்தோத்திரங்கள்',
    malayalam: 'സ്തോത്രങ്ങൾ',
    gujarati: 'સ્તોત્રો',
    bengali: 'স্তোত্র',
    oriya: 'ସ୍ତୋତ୍ର',
  },
  madhva: {
    kannada: 'ಮಾಧ್ವ ಸ್ತೋತ್ರಗಳು',
    telugu: 'మాధ్వ స్తోత్రాలు',
    tamil: 'மாத்வ ஸ்தோத்திரங்கள்',
    malayalam: 'മാധ്വ സ്തോത്രങ്ങൾ',
    gujarati: 'માધ્વ સ્તોત્રો',
    bengali: 'মাধ্ব স্তোত্র',
    oriya: 'ମାଧ୍ୱ ସ୍ତୋତ୍ର',
  },
  'dasara-pada': {
    kannada: 'ದಾಸರ ಪದಗಳು',
    telugu: 'దాసర పదాలు',
    tamil: 'தாஸர் பதங்கள்',
    malayalam: 'ദാസര പദങ്ങൾ',
    gujarati: 'દાસર પદ',
    bengali: 'দাসর পদ',
    oriya: 'ଦାସର ପଦ',
  },
  sandhya: {
    kannada: 'ಸಂಧ್ಯಾವಂದನೆ',
    telugu: 'సంధ్యావందనం',
    tamil: 'சந்தியாவந்தனம்',
    malayalam: 'സന്ധ്യാവന്ദനം',
    gujarati: 'સંધ્યાવંદન',
    bengali: 'সন্ধ্যাবন্দনা',
    oriya: 'ସନ୍ଧ୍ୟାବନ୍ଦନ',
  },
  puja: {
    kannada: 'ಪೂಜಾ ವಿಧಾನ',
    telugu: 'పూజా విధానం',
    tamil: 'பூஜை முறை',
    malayalam: 'പൂജാവിധി',
    gujarati: 'પૂજા વિધિ',
    bengali: 'পূজা বিধি',
    oriya: 'ପୂଜା ବିଧି',
  },
  homa: {
    kannada: 'ಯಜ್ಞಗಳು',
    telugu: 'యజ్ఞాలు',
    tamil: 'யக்ஞங்கள்',
    malayalam: 'യജ്ഞങ്ങൾ',
    gujarati: 'યજ્ઞો',
    bengali: 'যজ্ঞ',
    oriya: 'ଯଜ୍ଞ',
  },
  samskara: {
    kannada: 'ಸಂಸ್ಕಾರ ಮತ್ತು ಕರ್ಮಗಳು',
    telugu: 'సంస్కారాలు, కర్మలు',
    tamil: 'ஸம்ஸ்காரங்கள், கர்மங்கள்',
    malayalam: 'സംസ്കാരങ്ങൾ, കർമ്മങ്ങൾ',
    gujarati: 'સંસ્કાર અને કર્મ',
    bengali: 'সংস্কার ও কর্ম',
    oriya: 'ସଂସ୍କାର ଓ କର୍ମ',
  },
  kirtana: {
    kannada: 'ಕೀರ್ತನೆಗಳು',
    telugu: 'కీర్తనలు',
    tamil: 'கீர்த்தனைகள்',
    malayalam: 'കീർത്തനങ്ങൾ',
    gujarati: 'કીર્તન',
    bengali: 'কীর্তন',
    oriya: 'କୀର୍ତ୍ତନ',
  },
};

export function appTitle(script: ScriptId): string {
  return APP_TITLE[script] ?? translit(APP_TITLE.devanagari!, script);
}

export function categoryTitle(c: Category, script: ScriptId): string {
  if (script === 'english') return c.titleEn;
  return CATEGORY_LABELS[c.id][script] ?? translit(c.title, script);
}
