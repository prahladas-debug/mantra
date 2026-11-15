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
  devanagari: 'मन्त्रसङ्ग्रहः',
  kannada: 'ಮಂತ್ರ ಸಂಗ್ರಹ',
  telugu: 'మంత్ర సంగ్రహం',
  tamil: 'மந்திரத் தொகுப்பு',
  malayalam: 'മന്ത്ര സംഗ്രഹം',
  gujarati: 'મંત્ર સંગ્રહ',
  bengali: 'মন্ত্র সংগ্রহ',
  oriya: 'ମନ୍ତ୍ର ସଂଗ୍ରହ',
  iast: 'Mantra Saṅgraha',
};

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
  devimahatmya: { kannada: 'ದೇವೀಮಾಹಾತ್ಮ್ಯ', telugu: 'దేవీమాహాత్మ్యం', tamil: 'தேவீ மாஹாத்மியம்', malayalam: 'ദേവീമാഹാത്മ്യം', gujarati: 'દેવીમાહાત્મ્ય', bengali: 'দেবীমাহাত্ম্য', oriya: 'ଦେବୀମାହାତ୍ମ୍ୟ' },
  harikathamrutasara: { kannada: 'ಹರಿಕಥಾಮೃತಸಾರ', telugu: 'హరికథామృతసార', tamil: 'ஹரிகதாம்ருதஸார', malayalam: 'ഹരികഥാമൃതസാര', gujarati: 'હરિકથામૃતસાર', bengali: 'হরিকথামৃতসার', oriya: 'ହରିକଥାମୃତସାର' },
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
    kannada: 'ಹೋಮ ವಿಧಾನ',
    telugu: 'హోమ విధానం',
    tamil: 'ஹோம முறை',
    malayalam: 'ഹോമവിധി',
    gujarati: 'હોમ વિધિ',
    bengali: 'হোম বিধি',
    oriya: 'ହୋମ ବିଧି',
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
  return CATEGORY_LABELS[c.id][script] ?? translit(c.title, script);
}
