import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *
import b_mrityunjaya as MJ

ID = 'ayushya-homa'
AS = 'ayushya-suktam'

HEADER = '''/**
 * Ayushya Homa and the birthday (vardhanti, varshavriddhi) rite: the whole rite in order — the day,
 * sankalpa, the agnimukha (from "Homa: Common Procedure"), the dhyana of Dhanvantari, the main
 * offerings (Madhva: the durva homa to Dhanvantari and the durva homa with the Tryambaka mantra;
 * Smarta: the Ayushya Sukta offered with ghee and the Tryambaka mantra), the uttaranga, closing puja
 * and samarpana; then the small vardhapana puja anyone can do at home, and what to avoid.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012 (archive.org
 *    20230827_20230827_0721), chapter "Ayushya Homa (Janmadinada acharane)": the birth-star, the four
 *    kinds of Ayushya homa, the durva homa (four blades dipped in milk and ghee; or dipped in honey,
 *    ghee and curd with the Mrityunjaya mantra, 1000, 108 or 28), the vardhapana with its sankalpa
 *    and the guru's leave, the sixteen deities and their invocation formulas (printed in full there),
 *    their prayers, the sesame-jaggery-milk sip, the six forbidden acts.
 *  - Madhva: Tantrasara-sangraha 4.94 (dhyana of Dhanvantari in the moon), 4.102 (the durva homa).
 *  - The Prayoga-parijata and the Dharmasindhu, as quoted in Homa-Havana.
 *  - Smarta: the Ayushya Suktam (recited and offered with ghee at the Ayushya homa) as in this app's
 *    "Ayushya Suktam" (stotranidhi and stotrasamhita, which agree), each verse offered with svaha;
 *    the Tryambaka mantra RV 7.59.12. The Sringeri manuscript "Ayushya Homa Vidhi" (archive.org
 *    itql_09-ayushya-homa-vidhi-...) was consulted but its scan could not be read.
 *  - Closing puja and kshamapana from this app's "Daily Puja".
 */'''

O = lambda si, vi, **k: C(ID, si, vi, lib=LIBO, **k)

SANK_M = V('यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थम्\nमम आयुरभिवृद्ध्यर्थं श्रीधन्वन्तरिप्रीत्यर्थं दूर्वायुष्यहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
  'Prompted by Sri Parashurama, the Lord of Harini, who dwells within Mukhyaprana, the beloved of Bharati, and is the inner ruler of the Yajnapurusha, and for his pleasure: for the increase of my life and for the pleasure of Sri Dhanvantari, I shall perform the rite called the durva Ayushya homa; as its part I shall prepare the sthandila and install the fire.',
  'ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ: ನನ್ನ ಆಯುಸ್ಸಿನ ಅಭಿವೃದ್ಧಿಗಾಗಿ, ಶ್ರೀಧನ್ವಂತರಿಯ ಪ್ರೀತಿಗಾಗಿ ದೂರ್ವಾಯುಷ್ಯಹೋಮವೆಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ ಮಾಡಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.',
  'यज्ञपुरुष के अन्तर्यामी, भारतीरमण मुख्यप्राण के अन्तर्गत हरिणीपति श्रीपरशुराम की प्रेरणा से और उनकी प्रीति के लिए: मेरी आयु की वृद्धि के लिए और श्रीधन्वन्तरि की प्रीति के लिए मैं दूर्वायुष्यहोम नामक कर्म करूँगा; उसके अंग रूप से स्थण्डिल का संस्कार कर अग्नि की स्थापना करूँगा।',
  'యజ్ఞపురుషుని అంతర్యామి, భారతీరమణ ముఖ్యప్రాణాంతర్గతుడు అయిన హరిణీపతి శ్రీపరశురాముని ప్రేరణతో, అతని ప్రీతి కొరకు: నా ఆయుష్షు వృద్ధి కొరకు, శ్రీధన్వంతరి ప్రీతి కొరకు దూర్వాయుష్యహోమమనే కర్మను చేస్తాను; దాని అంగంగా స్థండిల సంస్కారం చేసి అగ్నిప్రతిష్ఠ చేస్తాను.',
  'யஜ்ஞபுருஷனின் அந்தர்யாமியும், பாரதீரமண முக்யப்ராணனுள் உறைபவனுமான ஹரிணீபதி ஶ்ரீபரசுராமனின் தூண்டுதலால், அவன் ப்ரீதிக்காக: என் ஆயுள் வளர்வதற்காகவும் ஶ்ரீதன்வந்தரியின் ப்ரீதிக்காகவும் தூர்வாயுஷ்ய ஹோமம் என்ற கர்மத்தைச் செய்வேன்; அதன் அங்கமாக ஸ்தண்டில ஸம்ஸ்காரம் செய்து அக்னிப்ரதிஷ்டை செய்வேன்.', when=M)
SANK_S = V('ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nमम आयुरारोग्याभिवृद्ध्यर्थम् आयुष्यहोमं करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
  'For the removal of all my accumulated sins and for the pleasure of the Supreme Lord, for the increase of my life and health, I shall perform the Ayushya homa; as its part I shall prepare and mark the sthandila and install the fire.',
  'ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ನನ್ನ ಆಯುಸ್ಸು–ಆರೋಗ್ಯಗಳ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಆಯುಷ್ಯಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.',
  'मेरे संचित सब पापों के क्षय द्वारा परमेश्वर की प्रीति के लिए, मेरी आयु और आरोग्य की वृद्धि के लिए मैं आयुष्यहोम करूँगा; उसके अंग रूप से स्थण्डिल पर रेखाएँ खींचकर अग्नि की प्रतिष्ठा करूँगा।',
  'నేను సంపాదించిన సమస్త పాపాల క్షయం ద్వారా పరమేశ్వరుని ప్రీతి కొరకు, నా ఆయురారోగ్యాల వృద్ధి కొరకు ఆయుష్యహోమం చేస్తాను; దాని అంగంగా స్థండిలంపై రేఖలు గీసి అగ్నిప్రతిష్ఠ చేస్తాను.',
  'நான் சேர்த்த எல்லாப் பாவங்களின் அழிவின் மூலம் பரமேஶ்வரனின் ப்ரீதிக்காக, என் ஆயுளும் ஆரோக்கியமும் வளர்வதற்காக ஆயுஷ்ய ஹோமம் செய்வேன்; அதன் அங்கமாக ஸ்தண்டிலத்தில் கோடுகள் வரைந்து அக்னிப்ரதிஷ்டை செய்வேன்.', when=S)

AVA = V('ॐ भूर्भुवः स्वः । श्रीधन्वन्तरिम् अस्मिन्कलशे आवाहयामि स्थापयामि पूजयामि ॥',
  'Om, earth, sky, heaven: I invoke Sri Dhanvantari into this kalasha; I install him and worship him.',
  'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಶ್ರೀಧನ್ವಂತರಿಯನ್ನು ಈ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.',
  'ॐ भूर्भुवः स्वः: मैं श्रीधन्वन्तरि का इस कलश में आवाहन करता हूँ, स्थापना करता हूँ और पूजन करता हूँ।',
  'ఓం భూర్భువః స్వః: శ్రీధన్వంతరిని ఈ కలశంలో ఆవాహన చేస్తున్నాను, స్థాపిస్తున్నాను, పూజిస్తున్నాను.',
  'ஓம் பூர்புவஃ ஸ்வஃ: ஶ்ரீதன்வந்தரியை இந்தக் கலசத்தில் ஆவாஹனம் செய்கிறேன், ஸ்தாபிக்கிறேன், பூஜிக்கிறேன்.')

SV = svaha_add  # unused helper name kept short
def asukta(i):
    src = LIB[AS]['sections'][0]['verses'][i]
    add = {'en': 'Svaha.', 'kn': 'ಸ್ವಾಹಾ.', 'hi': 'स्वाहा।', 'te': 'స్వాహా.', 'ta': 'ஸ்வாஹா.'}
    return {'text': src['text'].rstrip(' ॥') + ' स्वाहा ॥', 'm': {l: src['meaning'][l].rstrip() + ' ' + add[l] for l in LANGS}, 'n': i + 1, 'when': S}

SAM_M = V('अनेन आयुष्यहोमेन यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गतः\nश्रीधन्वन्तरिः प्रीयताम् । श्रीकृष्णार्पणमस्तु ॥',
  'By this Ayushya homa may Sri Dhanvantari, the inner ruler of the Yajnapurusha, who dwells within Mukhyaprana, the beloved of Bharati, be pleased. May it be an offering to Sri Krishna.',
  'ಈ ಆಯುಷ್ಯಹೋಮದಿಂದ ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಶ್ರೀಧನ್ವಂತರಿಯು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.',
  'इस आयुष्यहोम से यज्ञपुरुष के अन्तर्यामी, भारतीरमण मुख्यप्राण के अन्तर्गत श्रीधन्वन्तरि प्रसन्न हों। श्रीकृष्ण को अर्पित हो।',
  'ఈ ఆయుష్యహోమంతో యజ్ఞపురుషుని అంతర్యామి, భారతీరమణ ముఖ్యప్రాణాంతర్గతుడు అయిన శ్రీధన్వంతరి ప్రీతుడగుగాక. శ్రీకృష్ణార్పణమస్తు.',
  'இந்த ஆயுஷ்ய ஹோமத்தால் யஜ்ஞபுருஷனின் அந்தர்யாமியும், பாரதீரமண முக்யப்ராணனுள் உறைபவனுமான ஶ்ரீதன்வந்தரி மகிழ்வானாக. ஶ்ரீக்ருஷ்ணார்ப்பணமஸ்து.', when=M)
SAM_S = V('अनेन आयुष्यहोमकर्मणा श्रीपरमेश्वरः प्रीयताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥',
  'By this rite of the Ayushya homa may the Supreme Lord be pleased. Om tat sat: may it be an offering to Brahman.',
  'ಈ ಆಯುಷ್ಯಹೋಮ ಕರ್ಮದಿಂದ ಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ. ಓಂ ತತ್ಸತ್ ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು.',
  'इस आयुष्यहोम कर्म से परमेश्वर प्रसन्न हों। ॐ तत्सत्, ब्रह्म को अर्पित हो।',
  'ఈ ఆయుష్యహోమ కర్మతో పరమేశ్వరుడు ప్రీతుడగుగాక. ఓం తత్సత్ బ్రహ్మార్పణమస్తు.',
  'இந்த ஆயுஷ்ய ஹோம கர்மத்தால் பரமேஶ்வரன் மகிழ்வானாக. ஓம் தத்ஸத், பிரம்மத்துக்கு அர்ப்பணமாகட்டும்.', when=S)

VR_SANK = V('आयुरभिवृद्ध्यर्थं वर्षवृद्धिकर्म करिष्ये ।\nश्रीगुरुभ्यो नमः । वृद्धिकर्मण्याज्ञा दीयताम् ।\nगं गणपतये नमः । अविघ्नं कुरु ॥',
  'For the increase of life I shall perform the rite of the growing year. Salutations to the gurus: grant me leave for this rite of increase. Gam, salutations to Ganapati: make it free of obstacles. (The vardhapana sankalpa, Homa-Havana)',
  'ಆಯುಸ್ಸಿನ ಅಭಿವೃದ್ಧಿಗಾಗಿ ವರ್ಷವೃದ್ಧಿ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ. ಗುರುಗಳಿಗೆ ನಮಸ್ಕಾರ: ಈ ವೃದ್ಧಿಕರ್ಮಕ್ಕೆ ಅಪ್ಪಣೆ ಕೊಡಿ. ಗಂ ಗಣಪತಯೇ ನಮಃ: ವಿಘ್ನವಿಲ್ಲದಂತೆ ಮಾಡು. (ವರ್ಧಾಪನ ಸಂಕಲ್ಪ, ಹೋಮ–ಹವನ)',
  'आयु की वृद्धि के लिए मैं वर्षवृद्धि कर्म करूँगा। गुरुओं को नमस्कार: इस वृद्धिकर्म की आज्ञा दें। गं गणपतये नमः: इसे निर्विघ्न करो। (वर्धापन संकल्प, होम-हवन)',
  'ఆయుర్వృద్ధి కొరకు వర్షవృద్ధి కర్మ చేస్తాను. గురువులకు నమస్కారం: ఈ వృద్ధికర్మకు అనుమతి ఇవ్వండి. గం గణపతయే నమః: విఘ్నం లేకుండా చేయి. (వర్ధాపన సంకల్పం, హోమ–హవనం)',
  'ஆயுள் வளர்வதற்காக வர்ஷவ்ருத்தி கர்மம் செய்வேன். குருக்களுக்கு நமஸ்காரம்: இந்த வ்ருத்தி கர்மத்துக்கு அனுமதி தாருங்கள். கம் கணபதயே நமஃ: தடையின்றிச் செய்வாயாக. (வர்தாபன ஸங்கல்பம், ஹோம–ஹவனம்)')
VR_AVA = V('कुलदेवतायै नमः । कुलदेवताम् आवाहयामि । जन्मनक्षत्रदेवतायै नमः । जन्मनक्षत्रदेवताम् आवाहयामि ।\nपितृगणेभ्यो नमः । पितॄन् आवाहयामि । प्रजापतये नमः । प्रजापतिम् आवाहयामि ।\nवेदव्यासाय नमः । वेदव्यासम् आवाहयामि । जामदग्न्यरामाय नमः । परशुरामम् आवाहयामि ।\nहनुमते नमः । हनुमन्तम् आवाहयामि । अश्वत्थाम्ने नमः । अश्वत्थामानम् आवाहयामि ।\nबलये नमः । बलिम् आवाहयामि । विभीषणाय नमः । विभीषणम् आवाहयामि ।\nकृपाय नमः । कृपम् आवाहयामि । मार्कण्डेयाय नमः । मार्कण्डेयम् आवाहयामि ।\nषष्ठीदेव्यै नमः । षष्ठीदेवीम् आवाहयामि । प्रह्लादाय नमः । प्रह्लादम् आवाहयामि ।\nभानवे नमः । भानुम् आवाहयामि । विघ्नेशाय नमः । विघ्नेशम् आवाहयामि ॥\nकुलदेवतादिषोडशवर्षवृद्धिदेवताः एतेषु अक्षतपुञ्जेषु आवाहयामि ॥',
  'Salutation to each of the sixteen deities of the growing year, and "I invoke" each: the family deity, the deity of the birth-star (by its name, see the note), the ancestors, Prajapati, Vedavyasa, Parashurama, Hanuman, Ashvatthama, Bali, Vibhishana, Kripa, Markandeya, Shashthi-devi, Prahlada, Bhanu (the Sun) and Vighnesha. Then: I invoke the sixteen deities of the growing year, beginning with the family deity, into these heaps of akshata. (Homa-Havana)',
  'ವರ್ಷವೃದ್ಧಿಯ ಹದಿನಾರು ದೇವತೆಗಳಿಗೆ ನಮಸ್ಕಾರ, ಪ್ರತಿಯೊಬ್ಬರ ಆವಾಹನೆ: ಕುಲದೇವತೆ, ಜನ್ಮನಕ್ಷತ್ರದೇವತೆ (ಹೆಸರಿನಿಂದ; ಸೂಚನೆ ನೋಡಿ), ಪಿತೃಗಳು, ಪ್ರಜಾಪತಿ, ವೇದವ್ಯಾಸ, ಪರಶುರಾಮ, ಹನುಮಂತ, ಅಶ್ವತ್ಥಾಮ, ಬಲಿ, ವಿಭೀಷಣ, ಕೃಪ, ಮಾರ್ಕಂಡೇಯ, ಷಷ್ಠೀದೇವಿ, ಪ್ರಹ್ಲಾದ, ಭಾನು, ವಿಘ್ನೇಶ. ನಂತರ: ಕುಲದೇವತಾದಿ ಹದಿನಾರು ವರ್ಷವೃದ್ಧಿ ದೇವತೆಗಳನ್ನು ಈ ಅಕ್ಷತೆಯ ರಾಶಿಗಳಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ. (ಹೋಮ–ಹವನ)',
  'वर्षवृद्धि के सोलह देवताओं में प्रत्येक को नमस्कार और आवाहन: कुलदेवता, जन्मनक्षत्र देवता (नाम से; टिप्पणी देखें), पितर, प्रजापति, वेदव्यास, परशुराम, हनुमान, अश्वत्थामा, बलि, विभीषण, कृप, मार्कण्डेय, षष्ठीदेवी, प्रह्लाद, भानु (सूर्य) और विघ्नेश। फिर: कुलदेवता आदि सोलह वर्षवृद्धि देवताओं का इन अक्षत-पुंजों में आवाहन करता हूँ। (होम-हवन)',
  'వర్షవృద్ధి పదహారు దేవతలకు ఒక్కొక్కరికి నమస్కారం, ఆవాహన: కులదేవత, జన్మనక్షత్ర దేవత (పేరుతో; సూచన చూడండి), పితృదేవతలు, ప్రజాపతి, వేదవ్యాసుడు, పరశురాముడు, హనుమంతుడు, అశ్వత్థామ, బలి, విభీషణుడు, కృపుడు, మార్కండేయుడు, షష్ఠీదేవి, ప్రహ్లాదుడు, భానుడు, విఘ్నేశుడు. తరువాత: కులదేవతాది పదహారు వర్షవృద్ధి దేవతలను ఈ అక్షత పుంజాలలో ఆవాహన చేస్తున్నాను. (హోమ–హవనం)',
  'வர்ஷவ்ருத்தியின் பதினாறு தேவதைகளுக்கும் ஒவ்வொருவருக்கும் நமஸ்காரமும் ஆவாஹனமும்: குலதேவதை, ஜன்மநக்ஷத்திர தேவதை (பெயரால்; குறிப்பைப் பார்க்கவும்), பித்ருக்கள், பிரஜாபதி, வேதவ்யாஸர், பரசுராமர், ஹனுமான், அஶ்வத்தாமா, பலி, விபீஷணன், க்ருபர், மார்க்கண்டேயர், ஷஷ்டீதேவி, ப்ரஹ்லாதன், பானு (சூரியன்), விக்னேசர். பிறகு: குலதேவதை முதலிய பதினாறு வர்ஷவ்ருத்தி தேவதைகளை இந்த அக்ஷதைக் குவியல்களில் ஆவாஹனம் செய்கிறேன். (ஹோம–ஹவனம்)')

s0 = LIBO[ID]['sections'][0]; s1 = LIBO[ID]['sections'][1]; s2 = LIBO[ID]['sections'][2]; s3 = LIBO[ID]['sections'][3]
secs = [
 Sec(s0['title'], s0['titleEn'],
     s0['note'] + ' The order of this text: sankalpa; the agnimukha of the Common Procedure; the dhyana and avahana of Dhanvantari; the main offerings; the uttaranga; the closing puja; samarpana. Then the vardhapana puja, done on every birthday with or without the homa. Keep ready durva in bundles of four, milk and ghee (and honey, ghee and curd for the Mrityunjaya durva homa), ghee for the Ayushya Sukta, and a kalasha.',
     s0['noteKn'] + ' ಈ ಪಠ್ಯದ ಕ್ರಮ: ಸಂಕಲ್ಪ; ಸಾಮಾನ್ಯ ವಿಧಿಯ ಅಗ್ನಿಮುಖ; ಧನ್ವಂತರಿಯ ಧ್ಯಾನ–ಆವಾಹನೆ; ಪ್ರಧಾನ ಆಹುತಿಗಳು; ಉತ್ತರಾಂಗ; ಉತ್ತರಪೂಜೆ; ಸಮರ್ಪಣೆ. ನಂತರ ಹೋಮವಿರಲಿ ಇಲ್ಲದಿರಲಿ ಪ್ರತಿ ಜನ್ಮದಿನದಂದು ಮಾಡುವ ವರ್ಧಾಪನ ಪೂಜೆ. ನಾಲ್ಕು ನಾಲ್ಕರ ಗರಿಕೆ ಕಟ್ಟುಗಳು, ಹಾಲು–ತುಪ್ಪ (ಮೃತ್ಯುಂಜಯ ದೂರ್ವಾಹೋಮಕ್ಕೆ ಜೇನು–ತುಪ್ಪ–ಮೊಸರು), ಆಯುಷ್ಯಸೂಕ್ತಕ್ಕೆ ತುಪ್ಪ, ಕಲಶ ಸಿದ್ಧವಿರಲಿ.',
     [O(0, 0)]),
 Sec('सङ्कल्पः', 'Sankalpa (Madhva)', 'Do achamana and pranayama, say the deshakala (with the birth-star) as in the Daily Puja sankalpa, and make this sankalpa with akshata and water. For a child or another person, say अस्य (with the name and star) for मम.',
     'ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲ (ಜನ್ಮನಕ್ಷತ್ರಸಹಿತ) ಹೇಳಿ, ಅಕ್ಷತೆ–ನೀರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಮಗುವಿಗಾಗಿ ಅಥವಾ ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ” (ಹೆಸರು, ನಕ್ಷತ್ರದೊಡನೆ).', [SANK_M], M),
 Sec('सङ्कल्पः', 'Sankalpa (Smarta)', 'Remember Ganapati (शुक्लाम्बरधरं…), do achamana and pranayama, say the deshakala (with the birth-star) and make this sankalpa. For a child or another person, say अस्य (with the name and star) for मम.',
     'ಗಣಪತಿಸ್ಮರಣೆ, ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ದೇಶಕಾಲ (ಜನ್ಮನಕ್ಷತ್ರಸಹಿತ) ಹೇಳಿ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಮಗುವಿಗಾಗಿ ಅಥವಾ ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ” (ಹೆಸರು, ನಕ್ಷತ್ರದೊಡನೆ).', [SANK_S], S),
 purvanga_step('Madhvas also do the samskaras of Agni and the Vaishnava offerings given there.', 'ಮಾಧ್ವರು ಅಲ್ಲಿರುವ ಅಗ್ನಿಸಂಸ್ಕಾರಗಳು ಮತ್ತು ವೈಷ್ಣವ ಆಹುತಿಗಳನ್ನೂ ಮಾಡುತ್ತಾರೆ.'),
 Sec(s1['title'], 'Dhyana and avahana of Dhanvantari',
     'Meditate on Dhanvantari in the circle of the moon within yourself (the Tantrasara: first the moon in oneself, then the Lord in it), invoke him into the kalasha with the vyahritis and worship him with gandha, akshata, tulasi, dhupa, dipa and naivedya as in the Daily Puja.',
     'ತನ್ನೊಳಗಿನ ಚಂದ್ರಮಂಡಲದಲ್ಲಿ ಧನ್ವಂತರಿಯನ್ನು ಧ್ಯಾನಿಸಿ (ತಂತ್ರಸಾರ: ಮೊದಲು ತನ್ನೊಳಗೆ ಚಂದ್ರಮಂಡಲ, ಅದರಲ್ಲಿ ಭಗವಂತ), ವ್ಯಾಹೃತಿಗಳಿಂದ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸಿ, ನಿತ್ಯಪೂಜೆಯಂತೆ ಗಂಧ, ಅಕ್ಷತೆ, ತುಳಸಿ, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯಗಳಿಂದ ಪೂಜಿಸಿ.',
     [O(1, 0), AVA]),
 Sec('दूर्वाहोमः', 'The durva homa (Madhva)',
     'First, the Dhanvantari durva-ayushya homa (Tantrasara 4.102, Homa-Havana): four durva blades to each oblation, dipped in milk and ghee, offered with the Dhanvantari mantra received from one\'s guru (it is not printed here), 108 or 28 times. Then, or instead, the durva homa with the Mrityunjaya mantra (Prayoga-parijata, Homa-Havana): four durva blades dipped in honey, ghee and curd, 1000, 108 or 28 times, with the Tryambaka mantra enclosed by the pranava and the vyahritis, below. Madhvas may also recite the Ayushya Sukta (given for the Smarta form) while the durva is offered.',
     'ಮೊದಲು ಧಾನ್ವಂತರ ದೂರ್ವಾಯುಷ್ಯ ಹೋಮ (ತಂತ್ರಸಾರ ೪.೧೦೨, ಹೋಮ–ಹವನ): ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ, ಗುರುವಿನಿಂದ ಪಡೆದ ಧನ್ವಂತರಿ ಮಂತ್ರದಿಂದ (ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ), ೧೦೮ ಅಥವಾ ೨೮ ಬಾರಿ. ನಂತರ ಅಥವಾ ಅದರ ಬದಲು ಮೃತ್ಯುಂಜಯ ಮಂತ್ರದಿಂದ ದೂರ್ವಾಹೋಮ (ಪ್ರಯೋಗಪಾರಿಜಾತ, ಹೋಮ–ಹವನ): ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ೧೦೦೦, ೧೦೮ ಅಥವಾ ೨೮ ಬಾರಿ, ಕೆಳಗಿನ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ ತ್ರ್ಯಂಬಕ ಮಂತ್ರದಿಂದ. ಗರಿಕೆ ಹೋಮಿಸುವಾಗ ಮಾಧ್ವರು ಆಯುಷ್ಯಸೂಕ್ತವನ್ನೂ (ಸ್ಮಾರ್ತ ರೂಪದಲ್ಲಿ ಕೊಟ್ಟಿದೆ) ಪಠಿಸಬಹುದು.',
     [C('mrityunjaya-homa', 0, 0, lib=LIBO), dict(MJ.SAMPUTA)], M),
 Sec('आयुष्यसूक्तहोमः', 'The Ayushya Sukta homa (Smarta)',
     'Offer ghee with each of the eight mantras of the Ayushya Sukta, which itself says "I offer to him with ghee"; then recite the closing Vishnu mantra. Then offer durva dipped in milk and ghee (or honey, ghee and curd) with the Tryambaka mantra, 108 or 28 times. Follow your family manual for the number of rounds.',
     'ಆಯುಷ್ಯಸೂಕ್ತದ ಎಂಟು ಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದಲೂ ಆಜ್ಯಾಹುತಿ ನೀಡಿ (ಸೂಕ್ತವೇ “ಘೃತದಿಂದ ಹೋಮಿಸುತ್ತೇನೆ” ಎನ್ನುತ್ತದೆ); ನಂತರ ಕೊನೆಯ ವಿಷ್ಣುಮಂತ್ರ ಹೇಳಿ. ನಂತರ ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ (ಅಥವಾ ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ) ಅದ್ದಿದ ಗರಿಕೆಯನ್ನು ತ್ರ್ಯಂಬಕ ಮಂತ್ರದಿಂದ ೧೦೮ ಅಥವಾ ೨೮ ಬಾರಿ ಹೋಮಿಸಿ. ಆವೃತ್ತಿಗಳ ಸಂಖ್ಯೆಗೆ ನಿಮ್ಮ ಪದ್ಧತಿಯನ್ನು ಅನುಸರಿಸಿ.',
     [asukta(i) for i in range(8)] + [C(AS, 0, 8, when=S, n=9), C('mrityunjaya-homa', 1, 0, lib=LIBO, when=S)], S),
 uttaranga_step('For the svishtakrit offer a little of the durva and of the ghee.', 'ಸ್ವಿಷ್ಟಕೃತ್‌ಗೆ ಸ್ವಲ್ಪ ಗರಿಕೆ ಮತ್ತು ತುಪ್ಪ.'),
]
secs += closing_puja('Worship Dhanvantari in the kalasha once more with dhupa, dipa and naivedya; sprinkle the person whose birthday it is with the kalasha water.',
                     'ಕಲಶದಲ್ಲಿರುವ ಧನ್ವಂತರಿಗೆ ಮತ್ತೆ ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ ಅರ್ಪಿಸಿ; ಜನ್ಮದಿನದವರಿಗೆ ಕಲಶಜಲವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ.')
secs += samarpana(SAM_M, SAM_S)
secs.append(Sec(s2['title'], s2['titleEn'], s2['note'], s2['noteKn'], [VR_SANK, VR_AVA] + [O(2, i) for i in range(len(s2['verses']))]))
secs.append(Sec(s3['title'], s3['titleEn'], s3['note'], s3['noteKn'], [O(3, 0)]))

m = {
 'id': ID, 'title': 'आयुष्यहोमः वर्धापनविधिश्च', 'titleEn': 'Ayushya Homa and the Birthday Rite (Vardhapana)', 'category': 'homa', 'order': 8,
 'deity': 'Dhanvantari and Mrityunjaya (the Lord who gives life); Markandeya and the other chiranjivis',
 'source': 'Madhva: Homa-Havana (Satyanarayanacharya), Tantrasara-sangraha 4.94 and 4.102; Prayoga-parijata and Dharmasindhu as quoted; Smarta: the Ayushya Sukta',
 'summary': 'The rite for long life on the birth-star or birthday, from start to end: the day, sankalpa, the agnimukha, the dhyana of Dhanvantari, the main offerings (Madhva: the durva homa to Dhanvantari, four blades dipped in milk and ghee, and the durva homa with the Tryambaka mantra; Smarta: the eight Ayushya Sukta mantras with ghee and the Tryambaka mantra), the uttaranga, closing puja and samarpana; then the small vardhapana puja anyone can do at home (the sixteen deities invoked on heaps of akshata, their prayers, milk with sesame and jaggery) and what to avoid on the day.',
 'summaryKn': 'ಜನ್ಮನಕ್ಷತ್ರ ಅಥವಾ ಜನ್ಮದಿನದಂದು ಆಯುಸ್ಸಿಗಾಗಿ ಮಾಡುವ ಕ್ರಿಯೆ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ದಿನ, ಸಂಕಲ್ಪ, ಅಗ್ನಿಮುಖ, ಧನ್ವಂತರಿ ಧ್ಯಾನ, ಪ್ರಧಾನ ಆಹುತಿಗಳು (ಮಾಧ್ವ: ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ಧನ್ವಂತರಿಗೆ ಹೋಮ ಮತ್ತು ತ್ರ್ಯಂಬಕ ಮಂತ್ರದಿಂದ ದೂರ್ವಾಹೋಮ; ಸ್ಮಾರ್ತ: ಆಯುಷ್ಯಸೂಕ್ತದ ಎಂಟು ಮಂತ್ರಗಳಿಂದ ಆಜ್ಯಹೋಮ ಮತ್ತು ತ್ರ್ಯಂಬಕ ಮಂತ್ರ), ಉತ್ತರಾಂಗ, ಉತ್ತರಪೂಜೆ, ಸಮರ್ಪಣೆ; ನಂತರ ಮನೆಯಲ್ಲಿ ಯಾರಾದರೂ ಮಾಡಬಹುದಾದ ಚಿಕ್ಕ ವರ್ಧಾಪನ ಪೂಜೆ (ಅಕ್ಷತೆಯ ರಾಶಿಗಳಲ್ಲಿ ಹದಿನಾರು ದೇವತೆಗಳ ಆವಾಹನೆ, ಪ್ರಾರ್ಥನೆ, ಎಳ್ಳು–ಬೆಲ್ಲದ ಹಾಲು) ಮತ್ತು ಆ ದಿನ ವರ್ಜ್ಯವಾದವು.',
 'variants': [TRADITION], 'difficulty': 'medium', 'completeness': 'partial',
 'contentNote': 'Homas are traditionally done with a trained priest; this text lets the family follow every step. The agnimukha and the uttaranga are done from "Homa: Common Procedure"; everything particular to this homa is printed here. Still missing: the Dhanvantari mantra itself, which the Madhva manuals leave to the guru (the durva homa with the Tryambaka mantra is given in full instead); the vardhapana prayers to Ashvatthama, Kripa, Prahlada, Bhanu and Shashthi-devi and the second Markandeya verse, whose lines are broken in the one scan of the Homa-Havana (their invocations are given); and a printed Smarta Ayushya homa manual (the Sringeri manuscript consulted could not be read), so the Smarta counts are left to the family manual. Follow your family manual and purohita where they differ.',
 'sections': secs,
}
SUM = {
 'hi': 'जन्मनक्षत्र या जन्मदिन पर आयु के लिए किया जाने वाला कर्म आरम्भ से अन्त तक: दिन, संकल्प, अग्निमुख, धन्वन्तरि का ध्यान, प्रधान आहुतियाँ (माध्व: दूध-घी में भिगोई चार दूर्वाओं से धन्वन्तरि को होम और त्र्यम्बक मन्त्र से दूर्वाहोम; स्मार्त: आयुष्यसूक्त के आठ मन्त्रों से घृतहोम और त्र्यम्बक मन्त्र), उत्तरांग, उत्तरपूजा और समर्पण; फिर घर में कोई भी कर सके ऐसी छोटी वर्धापन पूजा (अक्षत-पुंजों में सोलह देवताओं का आवाहन, प्रार्थना, तिल-गुड़ मिला दूध) और उस दिन के वर्ज्य।',
 'te': 'జన్మనక్షత్రం లేదా పుట్టినరోజున ఆయుష్షు కొరకు చేసే కర్మ మొదటి నుండి చివరి వరకు: రోజు, సంకల్పం, అగ్నిముఖం, ధన్వంతరి ధ్యానం, ప్రధాన ఆహుతులు (మాధ్వ: పాలు–నెయ్యిలో ముంచిన నాలుగు గరికలతో ధన్వంతరికి హోమం, త్ర్యంబక మంత్రంతో దూర్వాహోమం; స్మార్త: ఆయుష్యసూక్తంలోని ఎనిమిది మంత్రాలతో ఆజ్యహోమం, త్ర్యంబక మంత్రం), ఉత్తరాంగం, ఉత్తరపూజ, సమర్పణ; తరువాత ఇంట్లో ఎవరైనా చేయగల చిన్న వర్ధాపన పూజ (అక్షత పుంజాలలో పదహారు దేవతల ఆవాహన, ప్రార్థన, నువ్వులు–బెల్లం కలిపిన పాలు), ఆ రోజు వర్జించవలసినవి.',
 'ta': 'ஜன்மநக்ஷத்திரம் அல்லது பிறந்தநாளில் ஆயுளுக்காகச் செய்யும் கர்மம் தொடக்கம் முதல் முடிவு வரை: நாள், ஸங்கல்பம், அக்னிமுகம், தன்வந்தரி தியானம், பிரதான ஆஹுதிகள் (மாத்வ: பால்–நெய்யில் தோய்த்த நான்கு அருகுகளால் தன்வந்தரிக்கு ஹோமமும் த்ர்யம்பக மந்திரத்தால் தூர்வா ஹோமமும்; ஸ்மார்த்த: ஆயுஷ்ய ஸூக்தத்தின் எட்டு மந்திரங்களால் நெய் ஹோமமும் த்ர்யம்பக மந்திரமும்), உத்தராங்கம், உத்தரபூஜை, ஸமர்ப்பணம்; பிறகு வீட்டில் யாரும் செய்யக்கூடிய சிறிய வர்தாபன பூஜை (அக்ஷதைக் குவியல்களில் பதினாறு தேவதைகளின் ஆவாஹனம், பிரார்த்தனை, எள்–வெல்லம் கலந்த பால்) மற்றும் அன்று தவிர்க்க வேண்டியவை.',
}
if __name__ == '__main__':
    check(m)
    write_ts(f'{REPO}/src/data/texts/ayushya-homa.ts', HEADER, 'ayushyaHoma', m)
    merge_packs(m, SUM)
    print(ID, len(m['sections']), 'sections', count(m), 'verses')
