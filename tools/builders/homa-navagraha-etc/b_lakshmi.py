import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *

ID = 'lakshmi-homa'
SS = 'sri-sukta'
PS = 'purusha-sukta'

HEADER = '''/**
 * Sri Sukta Homa (Lakshmi Homa; in the Madhva manual the Sukrita homa with the Purusha Sukta and
 * the Sri Sukta): the whole rite in order — sankalpa, the agnimukha (from "Homa: Common Procedure"),
 * dhyana and avahana of Lakshmi (Madhva: Lakshmi-Narayana), the Purusha Sukta homa verse by verse
 * (Madhva), the Sri Sukta homa verse by verse, the uttaranga, closing puja and samarpana.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012 (archive.org
 *    20230827_20230827_0721), chapter "Sukrita Homa": the Rigvedic Purusha Sukta of sixteen verses,
 *    each offered sixteen times with ghee (256), the Sri Sukta of fifteen verses, each fifteen times
 *    (225), what the rite is done for.
 *  - The Purusha Sukta in its Rigveda form, RV 10.90.1-16, from GRETIL (Aufrecht), svaras removed; the
 *    meanings follow this app's "Purusha Suktam" (Taittiriya form) verse for verse.
 *  - The Sri Sukta (fifteen riks), the phala-shruti verse that enjoins the daily ghee homa with the
 *    fifteen riks (yah shucih prayato bhutva juhuyad ajyam anvaham), the dhyana sragdhara and the
 *    Lakshmi Gayatri, copied from this app's "Sri Suktam" (collated there against several editions),
 *    so that the readings agree.
 *  - Closing puja and kshamapana from this app's "Daily Puja".
 * No printed Smarta Lakshmi homa manual could be read; the Smarta form here is the Sri Sukta homa that
 * the Sri Sukta's own phala-shruti teaches, with the counts left to the family manual (see contentNote).
 */'''

def svh(text, deity_line, mm, add):
    return {'text': text + '\n' + deity_line, 'm': {l: mm[l].rstrip() + ' ' + add[l] for l in LANGS}}

SRI_ADD = svaha_add('Sri (Lakshmi)', 'ಶ್ರೀದೇವಿಗೆ', 'श्री (लक्ष्मी) के लिए', 'శ్రీదేవికి', 'ஶ்ரீதேவிக்கு')
PUR_ADD = svaha_add('the Purusha', 'ಪುರುಷನಿಗೆ', 'पुरुष के लिए', 'పురుషునికి', 'புருஷனுக்கு')

def kd(n):
    return ''.join('೦೧೨೩೪೫೬೭೮೯'[int(c)] for c in str(n))

RV_PS = [
 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥',
 'पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।\nउतामृतत्वस्येशानो यदन्नेनातिरोहति ॥',
 'एतावानस्य महिमातो ज्यायांश्च पूरुषः ।\nपादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि ॥',
 'त्रिपादूर्ध्व उदैत्पुरुषः पादोऽस्येहाभवत्पुनः ।\nततो विष्वङ्व्यक्रामत्साशनानशने अभि ॥',
 'तस्माद्विराळजायत विराजो अधि पूरुषः ।\nस जातो अत्यरिच्यत पश्चाद्भूमिमथो पुरः ॥',
 'यत्पुरुषेण हविषा देवा यज्ञमतन्वत ।\nवसन्तो अस्यासीदाज्यं ग्रीष्म इध्मः शरद्धविः ॥',
 'तं यज्ञं बर्हिषि प्रौक्षन्पुरुषं जातमग्रतः ।\nतेन देवा अयजन्त साध्या ऋषयश्च ये ॥',
 'तस्माद्यज्ञात्सर्वहुतः सम्भृतं पृषदाज्यम् ।\nपशून्तांश्चक्रे वायव्यानारण्यान्ग्राम्याश्च ये ॥',
 'तस्माद्यज्ञात्सर्वहुत ऋचः सामानि जज्ञिरे ।\nछन्दांसि जज्ञिरे तस्माद्यजुस्तस्मादजायत ॥',
 'तस्मादश्वा अजायन्त ये के चोभयादतः ।\nगावो ह जज्ञिरे तस्मात्तस्माज्जाता अजावयः ॥',
 'यत्पुरुषं व्यदधुः कतिधा व्यकल्पयन् ।\nमुखं किमस्य कौ बाहू का ऊरू पादा उच्येते ॥',
 'ब्राह्मणोऽस्य मुखमासीद्बाहू राजन्यः कृतः ।\nऊरू तदस्य यद्वैश्यः पद्भ्यां शूद्रो अजायत ॥',
 'चन्द्रमा मनसो जातश्चक्षोः सूर्यो अजायत ।\nमुखादिन्द्रश्चाग्निश्च प्राणाद्वायुरजायत ॥',
 'नाभ्या आसीदन्तरिक्षं शीर्ष्णो द्यौः समवर्तत ।\nपद्भ्यां भूमिर्दिशः श्रोत्रात्तथा लोकाँ अकल्पयन् ॥',
 'सप्तास्यासन्परिधयस्त्रिः सप्त समिधः कृताः ।\nदेवा यद्यज्ञं तन्वाना अबध्नन्पुरुषं पशुम् ॥',
 'यज्ञेन यज्ञमयजन्त देवास्तानि धर्माणि प्रथमान्यासन् ।\nते ह नाकं महिमानः सचन्त यत्र पूर्वे साध्याः सन्ति देवाः ॥',
]
TA_IDX = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 6, 17]

def ps_verse(i):
    mm = dict(LIB[PS]['sections'][1]['verses'][TA_IDX[i]]['meaning'])
    n = i + 1
    ref = {'en': f'(Rigveda 10.90.{n})', 'kn': f'(ಋಗ್ವೇದ ೧೦.೯೦.{kd(n)})', 'hi': f'(ऋग्वेद 10.90.{n})', 'te': f'(ఋగ్వేదం 10.90.{n})', 'ta': f'(ரிக்வேதம் 10.90.{n})'}
    mm = {l: mm[l].rstrip() + ' ' + ref[l] for l in LANGS}
    v = svh(RV_PS[i], 'स्वाहा । पुरुषायेदं न मम ॥', mm, PUR_ADD)
    v['n'] = n
    return v

def ss_verse(i):
    src = LIB[SS]['sections'][0]['verses'][i]
    v = svh(src['text'], 'स्वाहा । श्रियै इदं न मम ॥', src['meaning'], SRI_ADD)
    v['n'] = i + 1
    return v

SANK_M = V('यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थम्\nश्रीलक्ष्मीनारायणप्रीत्यर्थं पुरुषसूक्तश्रीसूक्ताभ्यां सुकृतहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
  'Prompted by Sri Parashurama, the Lord of Harini, who dwells within Mukhyaprana, the beloved of Bharati, and is the inner ruler of the Yajnapurusha, and for his pleasure, for the pleasure of Sri Lakshmi-Narayana, I shall perform the rite called the Sukrita homa with the Purusha Sukta and the Sri Sukta; as its part I shall prepare the sthandila and install the fire.',
  'ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣರ ಪ್ರೀತಿಗಾಗಿ ಪುರುಷಸೂಕ್ತ–ಶ್ರೀಸೂಕ್ತಗಳಿಂದ ಸುಕೃತಹೋಮವೆಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ ಮಾಡಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.',
  'यज्ञपुरुष के अन्तर्यामी, भारतीरमण मुख्यप्राण के अन्तर्गत हरिणीपति श्रीपरशुराम की प्रेरणा से और उनकी प्रीति के लिए, श्रीलक्ष्मीनारायण की प्रीति के लिए मैं पुरुषसूक्त और श्रीसूक्त से सुकृतहोम नामक कर्म करूँगा; उसके अंग रूप से स्थण्डिल का संस्कार कर अग्नि की स्थापना करूँगा।',
  'యజ్ఞపురుషుని అంతర్యామి, భారతీరమణ ముఖ్యప్రాణాంతర్గతుడు అయిన హరిణీపతి శ్రీపరశురాముని ప్రేరణతో, అతని ప్రీతి కొరకు, శ్రీలక్ష్మీనారాయణుల ప్రీతి కొరకు పురుషసూక్త శ్రీసూక్తాలతో సుకృతహోమమనే కర్మను చేస్తాను; దాని అంగంగా స్థండిల సంస్కారం చేసి అగ్నిప్రతిష్ఠ చేస్తాను.',
  'யஜ்ஞபுருஷனின் அந்தர்யாமியும், பாரதீரமண முக்யப்ராணனுள் உறைபவனுமான ஹரிணீபதி ஶ்ரீபரசுராமனின் தூண்டுதலால், அவன் ப்ரீதிக்காக, ஶ்ரீலக்ஷ்மீநாராயணரின் ப்ரீதிக்காக புருஷஸூக்தம், ஶ்ரீஸூக்தம் ஆகியவற்றால் ஸுக்ருத ஹோமம் என்ற கர்மத்தைச் செய்வேன்; அதன் அங்கமாக ஸ்தண்டில ஸம்ஸ்காரம் செய்து அக்னிப்ரதிஷ்டை செய்வேன்.', when=M)
SANK_S = V('ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nश्रीमहालक्ष्मीप्रसादसिद्ध्यर्थं श्रीसूक्तेन श्रीसूक्तहोमं करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
  'For the removal of all my accumulated sins and for the pleasure of the Supreme Lord, for the grace of Sri Mahalakshmi, I shall perform the Sri Sukta homa with the Sri Sukta; as its part I shall prepare and mark the sthandila and install the fire.',
  'ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ಶ್ರೀಮಹಾಲಕ್ಷ್ಮಿಯ ಪ್ರಸಾದಸಿದ್ಧಿಗಾಗಿ ಶ್ರೀಸೂಕ್ತದಿಂದ ಶ್ರೀಸೂಕ್ತಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.',
  'मेरे संचित सब पापों के क्षय द्वारा परमेश्वर की प्रीति के लिए, श्रीमहालक्ष्मी के प्रसाद की सिद्धि के लिए मैं श्रीसूक्त से श्रीसूक्तहोम करूँगा; उसके अंग रूप से स्थण्डिल पर रेखाएँ खींचकर अग्नि की प्रतिष्ठा करूँगा।',
  'నేను సంపాదించిన సమస్త పాపాల క్షయం ద్వారా పరమేశ్వరుని ప్రీతి కొరకు, శ్రీమహాలక్ష్మి ప్రసాదసిద్ధి కొరకు శ్రీసూక్తంతో శ్రీసూక్తహోమం చేస్తాను; దాని అంగంగా స్థండిలంపై రేఖలు గీసి అగ్నిప్రతిష్ఠ చేస్తాను.',
  'நான் சேர்த்த எல்லாப் பாவங்களின் அழிவின் மூலம் பரமேஶ்வரனின் ப்ரீதிக்காக, ஶ்ரீமஹாலக்ஷ்மியின் அருள் கிட்டுவதற்காக ஶ்ரீஸூக்தத்தால் ஶ்ரீஸூக்த ஹோமம் செய்வேன்; அதன் அங்கமாக ஸ்தண்டிலத்தில் கோடுகள் வரைந்து அக்னிப்ரதிஷ்டை செய்வேன்.', when=S)

AVA_M = V('ॐ भूर्भुवः स्वः । श्रीलक्ष्मीनारायणौ अस्मिन्कलशे आवाहयामि स्थापयामि पूजयामि ॥',
  'Om, earth, sky, heaven: I invoke Sri Lakshmi and Narayana into this kalasha; I install them and worship them.',
  'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣರನ್ನು ಈ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.',
  'ॐ भूर्भुवः स्वः: मैं श्रीलक्ष्मी और नारायण का इस कलश में आवाहन करता हूँ, स्थापना करता हूँ और पूजन करता हूँ।',
  'ఓం భూర్భువః స్వః: శ్రీలక్ష్మీనారాయణులను ఈ కలశంలో ఆవాహన చేస్తున్నాను, స్థాపిస్తున్నాను, పూజిస్తున్నాను.',
  'ஓம் பூர்புவஃ ஸ்வஃ: ஶ்ரீலக்ஷ்மீநாராயணரை இந்தக் கலசத்தில் ஆவாஹனம் செய்கிறேன், ஸ்தாபிக்கிறேன், பூஜிக்கிறேன்.', when=M)
AVA_S = V('ॐ भूर्भुवः स्वः । श्रीमहालक्ष्मीम् अस्मिन्कलशे आवाहयामि स्थापयामि पूजयामि ॥',
  'Om, earth, sky, heaven: I invoke Sri Mahalakshmi into this kalasha; I install her and worship her.',
  'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಶ್ರೀಮಹಾಲಕ್ಷ್ಮಿಯನ್ನು ಈ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.',
  'ॐ भूर्भुवः स्वः: मैं श्रीमहालक्ष्मी का इस कलश में आवाहन करता हूँ, स्थापना करता हूँ और पूजन करता हूँ।',
  'ఓం భూర్భువః స్వః: శ్రీమహాలక్ష్మిని ఈ కలశంలో ఆవాహన చేస్తున్నాను, స్థాపిస్తున్నాను, పూజిస్తున్నాను.',
  'ஓம் பூர்புவஃ ஸ்வஃ: ஶ்ரீமஹாலக்ஷ்மியை இந்தக் கலசத்தில் ஆவாஹனம் செய்கிறேன், ஸ்தாபிக்கிறேன், பூஜிக்கிறேன்.', when=S)

SAM_M = V('अनेन सुकृतहोमेन यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गतः\nश्रीलक्ष्मीनारायणः प्रीयताम् । श्रीकृष्णार्पणमस्तु ॥',
  'By this Sukrita homa may Sri Lakshmi-Narayana, the inner ruler of the Yajnapurusha, who dwells within Mukhyaprana, the beloved of Bharati, be pleased. May it be an offering to Sri Krishna.',
  'ಈ ಸುಕೃತಹೋಮದಿಂದ ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.',
  'इस सुकृतहोम से यज्ञपुरुष के अन्तर्यामी, भारतीरमण मुख्यप्राण के अन्तर्गत श्रीलक्ष्मीनारायण प्रसन्न हों। श्रीकृष्ण को अर्पित हो।',
  'ఈ సుకృతహోమంతో యజ్ఞపురుషుని అంతర్యామి, భారతీరమణ ముఖ్యప్రాణాంతర్గతుడు అయిన శ్రీలక్ష్మీనారాయణుడు ప్రీతుడగుగాక. శ్రీకృష్ణార్పణమస్తు.',
  'இந்த ஸுக்ருத ஹோமத்தால் யஜ்ஞபுருஷனின் அந்தர்யாமியும், பாரதீரமண முக்யப்ராணனுள் உறைபவனுமான ஶ்ரீலக்ஷ்மீநாராயணன் மகிழ்வானாக. ஶ்ரீக்ருஷ்ணார்ப்பணமஸ்து.', when=M)
SAM_S = V('अनेन श्रीसूक्तहोमकर्मणा श्रीमहालक्ष्मीः प्रीयताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥',
  'By this rite of the Sri Sukta homa may Sri Mahalakshmi be pleased. Om tat sat: may it be an offering to Brahman.',
  'ಈ ಶ್ರೀಸೂಕ್ತಹೋಮ ಕರ್ಮದಿಂದ ಶ್ರೀಮಹಾಲಕ್ಷ್ಮಿಯು ಪ್ರೀತಳಾಗಲಿ. ಓಂ ತತ್ಸತ್ ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು.',
  'इस श्रीसूक्तहोम कर्म से श्रीमहालक्ष्मी प्रसन्न हों। ॐ तत्सत्, ब्रह्म को अर्पित हो।',
  'ఈ శ్రీసూక్తహోమ కర్మతో శ్రీమహాలక్ష్మి ప్రీతురాలగుగాక. ఓం తత్సత్ బ్రహ్మార్పణమస్తు.',
  'இந்த ஶ்ரீஸூக்த ஹோம கர்மத்தால் ஶ்ரீமஹாலக்ஷ்மி மகிழ்வாளாக. ஓம் தத்ஸத், பிரம்மத்துக்கு அர்ப்பணமாகட்டும்.', when=S)

s0 = LIBO[ID]['sections'][0]
secs = [
 Sec(s0['title'], 'Before you begin: the Sukrita homa and how it is counted',
     s0['note'] + ' The Sri Sukta itself teaches the homa: whoever, pure and attentive, offers ghee daily with the fifteen riks and recites them, desiring prosperity (its phala-shruti, below). The order of this text: sankalpa; the agnimukha of the Common Procedure; dhyana and avahana; (Madhva) the Purusha Sukta homa; the Sri Sukta homa; the uttaranga; the closing puja; samarpana. Keep ready ghee in plenty; Smarta families also use lotus flowers, bilva leaves or payasa as their manual directs.',
     s0['noteKn'] + ' ಶ್ರೀಸೂಕ್ತವೇ ಈ ಹೋಮವನ್ನು ವಿಧಿಸುತ್ತದೆ: ಶುಚಿಯಾಗಿ ಏಕಾಗ್ರನಾಗಿ ಪ್ರತಿದಿನ ಹದಿನೈದು ಋಕ್ಕುಗಳಿಂದ ಆಜ್ಯಹೋಮ ಮಾಡಿ ಜಪಿಸುವವನಿಗೆ ಶ್ರೀ ಲಭಿಸುತ್ತದೆ (ಅದರ ಫಲಶ್ರುತಿ, ಕೆಳಗೆ). ಈ ಪಠ್ಯದ ಕ್ರಮ: ಸಂಕಲ್ಪ; ಸಾಮಾನ್ಯ ವಿಧಿಯ ಅಗ್ನಿಮುಖ; ಧ್ಯಾನ–ಆವಾಹನೆ; (ಮಾಧ್ವ) ಪುರುಷಸೂಕ್ತ ಹೋಮ; ಶ್ರೀಸೂಕ್ತ ಹೋಮ; ಉತ್ತರಾಂಗ; ಉತ್ತರಪೂಜೆ; ಸಮರ್ಪಣೆ. ಸಾಕಷ್ಟು ತುಪ್ಪ ಸಿದ್ಧವಿರಲಿ; ಸ್ಮಾರ್ತರು ತಮ್ಮ ಪದ್ಧತಿಯಂತೆ ಕಮಲ, ಬಿಲ್ವಪತ್ರೆ ಅಥವಾ ಪಾಯಸವನ್ನೂ ಬಳಸುತ್ತಾರೆ.',
     [C(SS, 1, 0)]),
 Sec('सङ्कल्पः', 'Sankalpa (Madhva)', 'Do achamana and pranayama, say the deshakala as in the Daily Puja sankalpa, and make this sankalpa with akshata and water. A particular wish (a marriage, the release of a departed one, expiation) may be named before the name of the homa.',
     'ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲ ಹೇಳಿ, ಅಕ್ಷತೆ–ನೀರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ವಿಶೇಷ ಉದ್ದೇಶವಿದ್ದರೆ (ವಿವಾಹ, ಪ್ರೇತಮೋಕ್ಷ, ಪ್ರಾಯಶ್ಚಿತ್ತ) ಹೋಮದ ಹೆಸರಿನ ಮೊದಲು ಹೇಳಬಹುದು.', [SANK_M], M),
 Sec('सङ्कल्पः', 'Sankalpa (Smarta)', 'Remember Ganapati (शुक्लाम्बरधरं…), do achamana and pranayama, say the deshakala and make this sankalpa. A particular wish may be named before the name of the homa.',
     'ಗಣಪತಿಸ್ಮರಣೆ (“ಶುಕ್ಲಾಂಬರಧರಂ…”), ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ದೇಶಕಾಲ ಹೇಳಿ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ವಿಶೇಷ ಉದ್ದೇಶವನ್ನು ಹೋಮದ ಹೆಸರಿನ ಮೊದಲು ಹೇಳಬಹುದು.', [SANK_S], S),
 purvanga_step('Madhvas also do the samskaras of Agni and the Vaishnava offerings given there (they include one round of the Purusha Sukta; the sixteen rounds below are the main homa).',
               'ಮಾಧ್ವರು ಅಲ್ಲಿರುವ ಅಗ್ನಿಸಂಸ್ಕಾರಗಳು ಮತ್ತು ವೈಷ್ಣವ ಆಹುತಿಗಳನ್ನೂ ಮಾಡುತ್ತಾರೆ (ಅವುಗಳಲ್ಲಿ ಪುರುಷಸೂಕ್ತದ ಒಂದು ಆವೃತ್ತಿ ಇದೆ; ಕೆಳಗಿನ ಹದಿನಾರು ಆವೃತ್ತಿಗಳು ಪ್ರಧಾನ ಹೋಮ).'),
 Sec('ध्यानम् आवाहनं च', 'Dhyana, avahana and puja',
     'On the kalasha (or the saligrama and an image of Lakshmi) meditate on Lakshmi with the verse या सा पद्मासनस्था… (both halves), invoke her (Madhva: Lakshmi with Narayana) with the vyahritis and worship with gandha, akshata, red flowers or lotuses, kumkuma, dhupa, dipa and naivedya (payasa, fruit) as in the Daily Puja. Recite the Lakshmi Gayatri (ten, twenty-eight or a hundred and eight times) before the homa.',
     'ಕಲಶದಲ್ಲಿ (ಅಥವಾ ಸಾಲಿಗ್ರಾಮ ಮತ್ತು ಲಕ್ಷ್ಮೀಪ್ರತಿಮೆಯಲ್ಲಿ) “ಯಾ ಸಾ ಪದ್ಮಾಸನಸ್ಥಾ…” (ಎರಡು ಭಾಗಗಳು) ಶ್ಲೋಕದಿಂದ ಲಕ್ಷ್ಮಿಯನ್ನು ಧ್ಯಾನಿಸಿ, ವ್ಯಾಹೃತಿಗಳಿಂದ ಆವಾಹಿಸಿ (ಮಾಧ್ವ: ನಾರಾಯಣಸಹಿತ ಲಕ್ಷ್ಮಿ), ನಿತ್ಯಪೂಜೆಯಂತೆ ಗಂಧ, ಅಕ್ಷತೆ, ಕೆಂಪು ಹೂವು ಅಥವಾ ಕಮಲ, ಕುಂಕುಮ, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ (ಪಾಯಸ, ಫಲ) ಅರ್ಪಿಸಿ. ಹೋಮಕ್ಕೆ ಮೊದಲು ಲಕ್ಷ್ಮೀಗಾಯತ್ರಿಯನ್ನು (೧೦, ೨೮ ಅಥವಾ ೧೦೮ ಬಾರಿ) ಜಪಿಸಿ.',
     [C(SS, 1, 9), C(SS, 1, 10), AVA_M, AVA_S, C(SS, 1, 18)]),
 Sec('पुरुषसूक्तहोमः', 'The Purusha Sukta homa (Rigveda 10.90)',
     'Madhva (Sukrita homa): with each of the sixteen verses of the Rigvedic Purusha Sukta offer ghee sixteen times (256 oblations in all; Homa-Havana). The Purusha is the Lord, Narayana, the Father of the world; offer meditating on him with Lakshmi. Yajurvedi families who use the Taittiriya form open "Purusha Suktam" in the library.',
     'ಮಾಧ್ವ (ಸುಕೃತಹೋಮ): ಋಗ್ವೇದದ ಪುರುಷಸೂಕ್ತದ ಹದಿನಾರು ಮಂತ್ರಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದಲೂ ಹದಿನಾರು ಬಾರಿ ಆಜ್ಯಾಹುತಿ (ಒಟ್ಟು ೨೫೬; ಹೋಮ–ಹವನ). ಪುರುಷನು ಜಗತ್ಪಿತನಾದ ನಾರಾಯಣ; ಲಕ್ಷ್ಮೀಸಹಿತನಾದ ಅವನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಹೋಮಿಸಿ. ತೈತ್ತಿರೀಯ ರೂಪವನ್ನು ಬಳಸುವ ಯಜುರ್ವೇದಿಗಳು ಗ್ರಂಥಾಲಯದ “ಪುರುಷಸೂಕ್ತಂ” ತೆರೆಯಿರಿ.',
     [ps_verse(i) for i in range(16)], M),
 Sec('श्रीसूक्तहोमः', 'The Sri Sukta homa',
     'With each of the fifteen riks of the Sri Sukta offer ghee: Madhva, fifteen times each (225 oblations in all; Homa-Havana). Smarta: once each, or as many rounds as your family manual gives (the phala-shruti asks only that the fifteen riks be offered with ghee); families that offer lotuses, bilva leaves or payasa offer one with each rik, dipped in ghee. Meditate on Lakshmi as the Mother of the world, who drives away Alakshmi and leads the household to the Lord.',
     'ಶ್ರೀಸೂಕ್ತದ ಹದಿನೈದು ಋಕ್ಕುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದಲೂ ಆಜ್ಯಾಹುತಿ: ಮಾಧ್ವ — ತಲಾ ಹದಿನೈದು ಬಾರಿ (ಒಟ್ಟು ೨೨೫; ಹೋಮ–ಹವನ). ಸ್ಮಾರ್ತ — ತಲಾ ಒಮ್ಮೆ, ಅಥವಾ ನಿಮ್ಮ ಪದ್ಧತಿ ಹೇಳುವಷ್ಟು ಆವೃತ್ತಿ (ಫಲಶ್ರುತಿ ಹದಿನೈದು ಋಕ್ಕುಗಳಿಂದ ಆಜ್ಯಹೋಮವನ್ನಷ್ಟೇ ಹೇಳುತ್ತದೆ); ಕಮಲ, ಬಿಲ್ವ ಅಥವಾ ಪಾಯಸ ಹೋಮಿಸುವವರು ಪ್ರತಿ ಋಕ್ಕಿಗೆ ಒಂದನ್ನು ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿ ಹೋಮಿಸುತ್ತಾರೆ. ಅಲಕ್ಷ್ಮಿಯನ್ನು ಓಡಿಸಿ ಮನೆಯನ್ನು ಭಗವಂತನ ಬಳಿಗೆ ಕರೆದೊಯ್ಯುವ ಜಗನ್ಮಾತೆ ಲಕ್ಷ್ಮಿಯನ್ನು ಧ್ಯಾನಿಸಿ.',
     [ss_verse(i) for i in range(15)]),
 uttaranga_step('For the svishtakrit offer a little of the ghee (and of the lotuses or payasa, if used).',
                'ಸ್ವಿಷ್ಟಕೃತ್‌ಗೆ ಸ್ವಲ್ಪ ತುಪ್ಪ (ಕಮಲ ಅಥವಾ ಪಾಯಸ ಬಳಸಿದ್ದರೆ ಅದರ ಸ್ವಲ್ಪ).'),
]
secs += closing_puja('Worship Lakshmi (Madhva: Lakshmi-Narayana) once more with dhupa, dipa and naivedya; sprinkle the family and the house with the kalasha water and give it as tirtha.',
                     'ಲಕ್ಷ್ಮಿಗೆ (ಮಾಧ್ವ: ಲಕ್ಷ್ಮೀನಾರಾಯಣರಿಗೆ) ಮತ್ತೆ ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ ಅರ್ಪಿಸಿ; ಕಲಶಜಲವನ್ನು ಮನೆಯವರಿಗೂ ಮನೆಗೂ ಪ್ರೋಕ್ಷಿಸಿ ತೀರ್ಥವಾಗಿ ಕೊಡಿ.')
secs += samarpana(SAM_M, SAM_S)

m = {
 'id': ID, 'title': 'श्रीसूक्तहोमः (सुकृतहोमः)', 'titleEn': 'Sri Sukta Homa (Lakshmi Homa, Sukrita Homa)', 'category': 'homa', 'order': 7,
 'deity': 'Sri Lakshmi (Madhva: with Narayana, by the Purusha Sukta)',
 'source': 'Madhva: Homa-Havana (Satyanarayanacharya), chapter on the Sukrita homa; Rigveda 10.90 and the Sri Sukta with its phala-shruti',
 'summary': 'The Lakshmi homa from start to end: sankalpa, the agnimukha, dhyana and avahana of Lakshmi (Madhva: Lakshmi-Narayana), the Purusha Sukta homa with all sixteen Rigvedic verses, each with svaha and offered sixteen times (Madhva), the Sri Sukta homa with all fifteen riks, each with svaha (Madhva fifteen times each), the uttaranga, the closing puja and samarpana.',
 'summaryKn': 'ಲಕ್ಷ್ಮೀಹೋಮ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ಸಂಕಲ್ಪ, ಅಗ್ನಿಮುಖ, ಲಕ್ಷ್ಮಿಯ (ಮಾಧ್ವ: ಲಕ್ಷ್ಮೀನಾರಾಯಣರ) ಧ್ಯಾನ–ಆವಾಹನೆ, ಋಗ್ವೇದದ ಪುರುಷಸೂಕ್ತದ ಹದಿನಾರೂ ಮಂತ್ರಗಳಿಂದ ಸ್ವಾಹಾಕಾರಸಹಿತ ಹೋಮ — ತಲಾ ಹದಿನಾರು ಬಾರಿ (ಮಾಧ್ವ), ಶ್ರೀಸೂಕ್ತದ ಹದಿನೈದೂ ಋಕ್ಕುಗಳಿಂದ ಸ್ವಾಹಾಕಾರಸಹಿತ ಹೋಮ (ಮಾಧ್ವರಲ್ಲಿ ತಲಾ ಹದಿನೈದು ಬಾರಿ), ಉತ್ತರಾಂಗ, ಉತ್ತರಪೂಜೆ, ಸಮರ್ಪಣೆ.',
 'variants': [TRADITION], 'difficulty': 'medium', 'completeness': 'complete',
 'contentNote': 'Homas are traditionally done with a trained priest; this text lets the family follow every step. The agnimukha and the uttaranga are done from "Homa: Common Procedure"; everything particular to this homa is printed here. The counts are those of the Madhva manual (Homa-Havana). No printed Smarta Lakshmi homa manual could be read: the Smarta form given is the Sri Sukta homa that the Sri Sukta\'s phala-shruti enjoins, and the number of rounds, the lotus, bilva or payasa offerings and any Lakshmi ashtottara that some families add are left to the family manual. Follow your family manual and purohita where they differ.',
 'sections': secs,
}
SUM = {
 'hi': 'लक्ष्मीहोम आरम्भ से अन्त तक: संकल्प, अग्निमुख, लक्ष्मी (माध्व: लक्ष्मीनारायण) का ध्यान और आवाहन, ऋग्वेद के पुरुषसूक्त के सोलहों मन्त्रों से स्वाहा सहित होम — प्रत्येक सोलह बार (माध्व), श्रीसूक्त की पन्द्रहों ऋचाओं से स्वाहा सहित होम (माध्व में प्रत्येक पन्द्रह बार), उत्तरांग, उत्तरपूजा और समर्पण।',
 'te': 'లక్ష్మీహోమం మొదటి నుండి చివరి వరకు: సంకల్పం, అగ్నిముఖం, లక్ష్మి (మాధ్వ: లక్ష్మీనారాయణుల) ధ్యానం ఆవాహన, ఋగ్వేద పురుషసూక్తంలోని పదహారు మంత్రాలతో స్వాహాకారసహిత హోమం — ఒక్కొక్కటి పదహారు సార్లు (మాధ్వ), శ్రీసూక్తంలోని పదిహేను ఋక్కులతో స్వాహాకారసహిత హోమం (మాధ్వులలో ఒక్కొక్కటి పదిహేను సార్లు), ఉత్తరాంగం, ఉత్తరపూజ, సమర్పణ.',
 'ta': 'லக்ஷ்மீ ஹோமம் தொடக்கம் முதல் முடிவு வரை: ஸங்கல்பம், அக்னிமுகம், லக்ஷ்மியின் (மாத்வ: லக்ஷ்மீநாராயணரின்) தியானமும் ஆவாஹனமும், ரிக்வேத புருஷஸூக்தத்தின் பதினாறு மந்திரங்களாலும் ஸ்வாஹாவுடன் ஹோமம் — ஒவ்வொன்றும் பதினாறு முறை (மாத்வ), ஶ்ரீஸூக்தத்தின் பதினைந்து ருக்குகளாலும் ஸ்வாஹாவுடன் ஹோமம் (மாத்வரில் ஒவ்வொன்றும் பதினைந்து முறை), உத்தராங்கம், உத்தரபூஜை, ஸமர்ப்பணம்.',
}
if __name__ == '__main__':
    check(m)
    write_ts(f'{REPO}/src/data/texts/lakshmi-homa.ts', HEADER, 'lakshmiHoma', m)
    merge_packs(m, SUM)
    print(ID, len(m['sections']), 'sections', count(m), 'verses')
