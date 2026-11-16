import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import *

ID = 'mrityunjaya-homa'
RU = 'sri-rudram-namakam'

HEADER = '''/**
 * Mrityunjaya Homa (Tryambaka homa) for long life and freedom from the fear of untimely death:
 * the whole rite in order — sankalpa, the agnimukha (from "Homa: Common Procedure"), the kalasha,
 * dhyana and avahana of Mrityunjaya, the Tryambaka homa with its dravyas and counts, the Rudra
 * mantras added to it, the uttaranga, the closing puja, the sprinkling and the tirtha, samarpana.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012 (archive.org
 *    20230827_20230827_0721), chapters "Ayushya Homa" (durva dipped in honey, ghee and curd; 1000,
 *    108 or 28; the rishi Kahola; the Prayoga-parijata verse) and "Vayovasthashanti" (the Tryambaka
 *    mantra enclosed by the pranava and the vyahritis, pranava-vyahriti-samputita, for the
 *    Tryambaka-Mrityunjaya shanti; the sankalpa wording mrityudoshadi-pariharapurvakam arogyayuta-
 *    dirghayushyavaptyartham, used with the Navagraha homa at sixty).
 *  - Madhva: Tantrasara-sangraha of Sri Madhvacharya (ORI Mysore 2003) 4.100-102.
 *  - Smarta (Shaiva Agama, Tamil): "Sri Mrityunjaya Ayul Homa Shanti Paddhati", Tiruvarur N. T.
 *    Dakshinamurti Gurukkal (archive.org kyhr_sri-mrityungaya-ayul-homa-shanti-paddhati-by-tiruvarur-
 *    n-t-dakshinamurti-gu): the samidhs and materials and the counts 108 or 1000 (only clear lines used).
 *  - Mantras: Rigveda 7.59.12 and TS 1.8.6 (tryambakam), RV 1.114.8 (ma nas toke), checked on GRETIL
 *    and vishvAsa/vedAH_yajuH; the Rudra dhyana apatala… and the riks recited after the Namakam (yo
 *    rudro agnau TS 5.5; tamu shtuhi RV 5.42.11; ye te sahasram TB 3.10.8; namo rudraya vishnave)
 *    copied from this app's "Sri Rudram" (collated there against several printed editions).
 *  - Closing puja, kshamapana and the tirtha verse from this app's "Daily Puja"; the sesame-milk verse
 *    from "Ayushya Homa" (Homa-Havana).
 */'''

O = lambda si, vi, **k: C(ID, si, vi, lib=LIBO, **k)

SANK_M = V('यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थम्\nमम अपमृत्युदोषपरिहारपूर्वकम् आरोग्ययुतदीर्घायुष्यावाप्त्यर्थं\nमृत्युञ्जयरुद्रान्तर्गतश्रीसङ्कर्षणप्रीत्यर्थं मृत्युञ्जयहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
  'Prompted by Sri Parashurama, the Lord of Harini, who dwells within Mukhyaprana, the beloved of Bharati, and is the inner ruler of the Yajnapurusha, and for his pleasure: for the removal of the danger of untimely death and for gaining a long life with good health, and for the pleasure of Sri Sankarshana within Mrityunjaya Rudra, I shall perform the rite called the Mrityunjaya homa; as its part I shall prepare the sthandila and install the fire.',
  'ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ: ನನ್ನ ಅಪಮೃತ್ಯುದೋಷ ಪರಿಹಾರಪೂರ್ವಕವಾಗಿ ಆರೋಗ್ಯಸಹಿತ ದೀರ್ಘಾಯುಷ್ಯ ಪ್ರಾಪ್ತಿಗಾಗಿ, ಮೃತ್ಯುಂಜಯ ರುದ್ರಾಂತರ್ಗತ ಶ್ರೀಸಂಕರ್ಷಣನ ಪ್ರೀತಿಗಾಗಿ ಮೃತ್ಯುಂಜಯಹೋಮವೆಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ ಮಾಡಿ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.',
  'यज्ञपुरुष के अन्तर्यामी, भारतीरमण मुख्यप्राण के अन्तर्गत हरिणीपति श्रीपरशुराम की प्रेरणा से और उनकी प्रीति के लिए: मेरे अपमृत्यु-दोष के परिहार के साथ आरोग्य सहित दीर्घायु की प्राप्ति के लिए, मृत्युञ्जय रुद्र के अन्तर्गत श्रीसंकर्षण की प्रीति के लिए मैं मृत्युञ्जयहोम नामक कर्म करूँगा; उसके अंग रूप से स्थण्डिल का संस्कार कर अग्नि की स्थापना करूँगा।',
  'యజ్ఞపురుషుని అంతర్యామి, భారతీరమణ ముఖ్యప్రాణాంతర్గతుడు అయిన హరిణీపతి శ్రీపరశురాముని ప్రేరణతో, అతని ప్రీతి కొరకు: నా అపమృత్యుదోష పరిహారపూర్వకంగా ఆరోగ్యంతో కూడిన దీర్ఘాయుష్షు పొందడానికి, మృత్యుంజయ రుద్రాంతర్గత శ్రీసంకర్షణుని ప్రీతి కొరకు మృత్యుంజయహోమమనే కర్మను చేస్తాను; దాని అంగంగా స్థండిల సంస్కారం చేసి అగ్నిప్రతిష్ఠ చేస్తాను.',
  'யஜ்ஞபுருஷனின் அந்தர்யாமியும், பாரதீரமண முக்யப்ராணனுள் உறைபவனுமான ஹரிணீபதி ஶ்ரீபரசுராமனின் தூண்டுதலால், அவன் ப்ரீதிக்காக: என் அகால மரண தோஷம் நீங்கி ஆரோக்கியத்துடன் கூடிய நீண்ட ஆயுள் பெறுவதற்காக, ம்ருத்யுஞ்ஜய ருத்ரனுள் உறையும் ஶ்ரீஸங்கர்ஷணனின் ப்ரீதிக்காக ம்ருத்யுஞ்ஜய ஹோமம் என்ற கர்மத்தைச் செய்வேன்; அதன் அங்கமாக ஸ்தண்டில ஸம்ஸ்காரம் செய்து அக்னிப்ரதிஷ்டை செய்வேன்.', when=M)
SANK_S = V('ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nमम अपमृत्युदोषपरिहारपूर्वकम् आरोग्ययुतदीर्घायुष्यावाप्त्यर्थं\nश्रीमृत्युञ्जयप्रसादसिद्ध्यर्थं मृत्युञ्जयहोमं करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
  'For the removal of all my accumulated sins and for the pleasure of the Supreme Lord; for the removal of the danger of untimely death and for gaining a long life with good health; for the grace of Sri Mrityunjaya, I shall perform the Mrityunjaya homa; as its part I shall prepare and mark the sthandila and install the fire.',
  'ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ; ಅಪಮೃತ್ಯುದೋಷ ಪರಿಹಾರಪೂರ್ವಕವಾಗಿ ಆರೋಗ್ಯಸಹಿತ ದೀರ್ಘಾಯುಷ್ಯ ಪ್ರಾಪ್ತಿಗಾಗಿ; ಶ್ರೀಮೃತ್ಯುಂಜಯನ ಪ್ರಸಾದಸಿದ್ಧಿಗಾಗಿ ಮೃತ್ಯುಂಜಯಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.',
  'मेरे संचित सब पापों के क्षय द्वारा परमेश्वर की प्रीति के लिए; अपमृत्यु-दोष के परिहार के साथ आरोग्य सहित दीर्घायु की प्राप्ति के लिए; श्रीमृत्युञ्जय के प्रसाद की सिद्धि के लिए मैं मृत्युञ्जयहोम करूँगा; उसके अंग रूप से स्थण्डिल पर रेखाएँ खींचकर अग्नि की प्रतिष्ठा करूँगा।',
  'నేను సంపాదించిన సమస్త పాపాల క్షయం ద్వారా పరమేశ్వరుని ప్రీతి కొరకు; అపమృత్యుదోష పరిహారపూర్వకంగా ఆరోగ్యంతో కూడిన దీర్ఘాయుష్షు పొందడానికి; శ్రీమృత్యుంజయుని ప్రసాదసిద్ధి కొరకు మృత్యుంజయహోమం చేస్తాను; దాని అంగంగా స్థండిలంపై రేఖలు గీసి అగ్నిప్రతిష్ఠ చేస్తాను.',
  'நான் சேர்த்த எல்லாப் பாவங்களின் அழிவின் மூலம் பரமேஶ்வரனின் ப்ரீதிக்காக; அகால மரண தோஷம் நீங்கி ஆரோக்கியத்துடன் கூடிய நீண்ட ஆயுள் பெறுவதற்காக; ஶ்ரீம்ருத்யுஞ்ஜயனின் அருள் கிட்டுவதற்காக ம்ருத்யுஞ்ஜய ஹோமம் செய்வேன்; அதன் அங்கமாக ஸ்தண்டிலத்தில் கோடுகள் வரைந்து அக்னிப்ரதிஷ்டை செய்வேன்.', when=S)

AVAHANA = V('ॐ भूर्भुवः स्वः । श्रीमृत्युञ्जयम् अस्मिन्कलशे आवाहयामि स्थापयामि पूजयामि ॥',
  'Om, earth, sky, heaven: I invoke Sri Mrityunjaya into this kalasha; I install him and worship him.',
  'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ: ಶ್ರೀಮೃತ್ಯುಂಜಯನನ್ನು ಈ ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸುತ್ತೇನೆ, ಸ್ಥಾಪಿಸುತ್ತೇನೆ, ಪೂಜಿಸುತ್ತೇನೆ.',
  'ॐ भूर्भुवः स्वः: मैं श्रीमृत्युञ्जय का इस कलश में आवाहन करता हूँ, स्थापना करता हूँ और पूजन करता हूँ।',
  'ఓం భూర్భువః స్వః: శ్రీమృత్యుంజయుని ఈ కలశంలో ఆవాహన చేస్తున్నాను, స్థాపిస్తున్నాను, పూజిస్తున్నాను.',
  'ஓம் பூர்புவஃ ஸ்வஃ: ஶ்ரீம்ருத்யுஞ்ஜயனை இந்தக் கலசத்தில் ஆவாஹனம் செய்கிறேன், ஸ்தாபிக்கிறேன், பூஜிக்கிறேன்.')

SAMPUTA = V('ॐ भूर्भुवः स्वः । त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् । स्वर्भुवर्भूः ॐ ॥\nस्वाहा । मृत्युञ्जयरुद्रान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतश्रीसङ्कर्षणायेदं न मम ॥',
  'Om, earth, sky, heaven. We worship the three-eyed one, fragrant, who increases nourishment; as the ripe cucumber from its stalk, may I be freed from death, not from immortality. Heaven, sky, earth, Om. Svaha; this is for Sri Sankarshana, who dwells within Mukhyaprana, the beloved of Bharati, within Mrityunjaya Rudra, not for me. (Rigveda 7.59.12, enclosed by the pranava and the vyahritis as the Homa-Havana teaches)',
  'ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ. ಮೂರು ಕಣ್ಣುಗಳ, ಸುಗಂಧಮಯನಾದ, ಪುಷ್ಟಿವರ್ಧಕನಾದ ದೇವನನ್ನು ಪೂಜಿಸುತ್ತೇವೆ; ಮಾಗಿದ ಸೌತೆಕಾಯಿ ತೊಟ್ಟಿನಿಂದ ಬಿಡುಗಡೆಯಾಗುವಂತೆ ನಾನು ಮೃತ್ಯುವಿನಿಂದ ಬಿಡುಗಡೆ ಹೊಂದಲಿ, ಅಮೃತತ್ವದಿಂದಲ್ಲ. ಸ್ವರ್ಭುವರ್ಭೂಃ ಓಂ. ಸ್ವಾಹಾ; ಇದು ಮೃತ್ಯುಂಜಯ ರುದ್ರಾಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಸಂಕರ್ಷಣನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೭.೫೯.೧೨, ಹೋಮ–ಹವನ ಹೇಳುವಂತೆ ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ)',
  'ॐ भूर्भुवः स्वः। हम तीन नेत्रों वाले, सुगन्धित, पुष्टिवर्धक देव का यजन करते हैं; जैसे पका खरबूजा डंठल से छूटता है, वैसे मैं मृत्यु से छूटूँ, अमृत से नहीं। स्वर्भुवर्भूः ॐ। स्वाहा; यह मृत्युञ्जय रुद्र के अन्तर्गत, भारतीरमण मुख्यप्राण के अन्तर्गत श्रीसंकर्षण के लिए है, मेरा नहीं। (ऋग्वेद 7.59.12, होम-हवन के अनुसार प्रणव और व्याहृतियों से सम्पुटित)',
  'ఓం భూర్భువః స్వః. మూడు కన్నుల, సుగంధమయుడైన, పుష్టిని పెంచే దేవుని పూజిస్తున్నాము; పండిన దోసకాయ తొడిమ నుండి విడివడినట్లు నేను మృత్యువు నుండి విడివడుదునుగాక, అమృతత్వం నుండి కాదు. స్వర్భువర్భూః ఓం. స్వాహా; ఇది మృత్యుంజయ రుద్రాంతర్గత భారతీరమణ ముఖ్యప్రాణాంతర్గత శ్రీసంకర్షణునికి, నాది కాదు. (ఋగ్వేదం 7.59.12, హోమ–హవనం చెప్పినట్లు ప్రణవ వ్యాహృతులతో సంపుటితం)',
  'ஓம் பூர்புவஃ ஸ்வஃ. மூன்று கண்களுடைய, நறுமணமுள்ள, ஊட்டம் பெருக்கும் தேவனை வழிபடுகிறோம்; பழுத்த வெள்ளரி காம்பிலிருந்து விடுபடுவதுபோல் நான் மரணத்திலிருந்து விடுபடுவேனாக, அமிர்தத்திலிருந்து அல்ல. ஸ்வர்புவர்பூஃ ஓம். ஸ்வாஹா; இது ம்ருத்யுஞ்ஜய ருத்ரனுள், பாரதீரமண முக்யப்ராணனுள் உறையும் ஶ்ரீஸங்கர்ஷணனுக்கு, என்னுடையதல்ல. (ரிக்வேதம் 7.59.12, ஹோம–ஹவனம் சொல்வதுபோல் ப்ரணவ வ்யாஹ்ருதிகளால் ஸம்புடிதம்)', when=M)

TIL = C('ayushya-homa', 2, 8, lib=LIBO)

SAM_M = V('अनेन मृत्युञ्जयहोमेन यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गतः\nमृत्युञ्जयरुद्रान्तर्गतः श्रीसङ्कर्षणः प्रीयताम् । श्रीकृष्णार्पणमस्तु ॥',
  'By this Mrityunjaya homa may Sri Sankarshana, the inner ruler of the Yajnapurusha, who dwells within Mukhyaprana, the beloved of Bharati, and within Mrityunjaya Rudra, be pleased. May it be an offering to Sri Krishna.',
  'ಈ ಮೃತ್ಯುಂಜಯಹೋಮದಿಂದ ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ, ಮೃತ್ಯುಂಜಯ ರುದ್ರಾಂತರ್ಗತನಾದ ಶ್ರೀಸಂಕರ್ಷಣನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.',
  'इस मृत्युञ्जयहोम से यज्ञपुरुष के अन्तर्यामी, भारतीरमण मुख्यप्राण के अन्तर्गत और मृत्युञ्जय रुद्र के अन्तर्गत श्रीसंकर्षण प्रसन्न हों। श्रीकृष्ण को अर्पित हो।',
  'ఈ మృత్యుంజయహోమంతో యజ్ఞపురుషుని అంతర్యామి, భారతీరమణ ముఖ్యప్రాణాంతర్గతుడు, మృత్యుంజయ రుద్రాంతర్గతుడు అయిన శ్రీసంకర్షణుడు ప్రీతుడగుగాక. శ్రీకృష్ణార్పణమస్తు.',
  'இந்த ம்ருத்யுஞ்ஜய ஹோமத்தால் யஜ்ஞபுருஷனின் அந்தர்யாமியும், பாரதீரமண முக்யப்ராணனுள்ளும் ம்ருத்யுஞ்ஜய ருத்ரனுள்ளும் உறைபவனுமான ஶ்ரீஸங்கர்ஷணன் மகிழ்வானாக. ஶ்ரீக்ருஷ்ணார்ப்பணமஸ்து.', when=M)
SAM_S = V('अनेन मृत्युञ्जयहोमकर्मणा श्रीमृत्युञ्जयः प्रीयताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥',
  'By this rite of the Mrityunjaya homa may Sri Mrityunjaya be pleased. Om tat sat: may it be an offering to Brahman.',
  'ಈ ಮೃತ್ಯುಂಜಯಹೋಮ ಕರ್ಮದಿಂದ ಶ್ರೀಮೃತ್ಯುಂಜಯನು ಪ್ರೀತನಾಗಲಿ. ಓಂ ತತ್ಸತ್ ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು.',
  'इस मृत्युञ्जयहोम कर्म से श्रीमृत्युञ्जय प्रसन्न हों। ॐ तत्सत्, ब्रह्म को अर्पित हो।',
  'ఈ మృత్యుంజయహోమ కర్మతో శ్రీమృత్యుంజయుడు ప్రీతుడగుగాక. ఓం తత్సత్ బ్రహ్మార్పణమస్తు.',
  'இந்த ம்ருத்யுஞ்ஜய ஹோம கர்மத்தால் ஶ்ரீம்ருத்யுஞ்ஜயன் மகிழ்வானாக. ஓம் தத்ஸத், பிரம்மத்துக்கு அர்ப்பணமாகட்டும்.', when=S)

s0 = LIBO[ID]['sections'][0]
secs = [
 Sec(s0['title'], 'Before you begin: when, with what and how many',
     s0['note'] + ' The order of this text: sankalpa; the agnimukha of the Common Procedure; the kalasha, dhyana and avahana of Mrityunjaya; the Tryambaka homa; the Rudra mantras; the uttaranga; the closing puja; the sprinkling with the kalasha water and the tirtha; samarpana. Keep ready the durva (in bundles of four), honey, ghee and curd mixed (trimadhura), the samidhs and payasa or sesame as your tradition uses, and a kalasha with water.',
     s0['noteKn'] + ' ಈ ಪಠ್ಯದ ಕ್ರಮ: ಸಂಕಲ್ಪ; ಸಾಮಾನ್ಯ ವಿಧಿಯ ಅಗ್ನಿಮುಖ; ಕಲಶದಲ್ಲಿ ಮೃತ್ಯುಂಜಯನ ಧ್ಯಾನ–ಆವಾಹನೆ; ತ್ರ್ಯಂಬಕ ಹೋಮ; ರುದ್ರಮಂತ್ರಗಳು; ಉತ್ತರಾಂಗ; ಉತ್ತರಪೂಜೆ; ಕಲಶಜಲ ಪ್ರೋಕ್ಷಣೆ–ತೀರ್ಥ; ಸಮರ್ಪಣೆ. ನಾಲ್ಕು ನಾಲ್ಕರ ಗರಿಕೆ ಕಟ್ಟುಗಳು, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನ ಮಿಶ್ರಣ (ತ್ರಿಮಧುರ), ನಿಮ್ಮ ಸಂಪ್ರದಾಯದ ಸಮಿಧೆಗಳು, ಪಾಯಸ ಅಥವಾ ಎಳ್ಳು, ನೀರಿನ ಕಲಶವನ್ನು ಸಿದ್ಧಪಡಿಸಿ.',
     [O(0, 0), O(0, 1), O(0, 2)]),
 Sec('सङ्कल्पः', 'Sankalpa (Madhva)', 'Do achamana and pranayama, say the deshakala as in the Daily Puja sankalpa, and make this sankalpa with akshata and water. Name the person: for another, say अस्य यजमानस्य (with his birth-star and name) for मम.',
     'ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲ ಹೇಳಿ, ಅಕ್ಷತೆ–ನೀರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ ಯಜಮಾನಸ್ಯ” (ಅವರ ನಕ್ಷತ್ರ, ಹೆಸರಿನೊಡನೆ).', [SANK_M], M),
 Sec('सङ्कल्पः', 'Sankalpa (Smarta)', 'Remember Ganapati (शुक्लाम्बरधरं…), do achamana and pranayama, say the deshakala and make this sankalpa. For another person, say अस्य यजमानस्य (with his birth-star and name) for मम.',
     'ಗಣಪತಿಸ್ಮರಣೆ (“ಶುಕ್ಲಾಂಬರಧರಂ…”), ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ದೇಶಕಾಲ ಹೇಳಿ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ. ಇನ್ನೊಬ್ಬರಿಗಾಗಿ “ಮಮ” ಬದಲು “ಅಸ್ಯ ಯಜಮಾನಸ್ಯ” (ನಕ್ಷತ್ರ, ಹೆಸರಿನೊಡನೆ).', [SANK_S], S),
 purvanga_step('Madhvas also do the samskaras of Agni and the Vaishnava offerings given there.', 'ಮಾಧ್ವರು ಅಲ್ಲಿರುವ ಅಗ್ನಿಸಂಸ್ಕಾರಗಳು ಮತ್ತು ವೈಷ್ಣವ ಆಹುತಿಗಳನ್ನೂ ಮಾಡುತ್ತಾರೆ.'),
 Sec('मृत्युञ्जयध्यानम् आवाहनं च', 'Dhyana and avahana of Mrityunjaya in the kalasha',
     'On the kalasha set up with the purvanga (or on a linga or image), meditate on the Lord with the Rudra dhyana, invoke Mrityunjaya with the vyahritis and worship him with gandha, akshata, bilva or flowers, dhupa, dipa and naivedya, saying ॐ नमो भगवते रुद्राय with each. Madhvas meditate on Sri Sankarshana within Rudra, the Lord who gives life (Homa-Havana), and offer tulasi to him within. The nyasa and the bija form of the Mahamrityunjaya mantra (ॐ हौं जूं सः…) printed in some Smarta manuals is taken only from one\'s guru and is not given here.',
     'ಪೂರ್ವಾಂಗದಲ್ಲಿ ಇಟ್ಟ ಕಲಶದ ಮೇಲೆ (ಅಥವಾ ಲಿಂಗ, ಪ್ರತಿಮೆಯಲ್ಲಿ) ರುದ್ರಧ್ಯಾನದಿಂದ ಭಗವಂತನನ್ನು ಧ್ಯಾನಿಸಿ, ವ್ಯಾಹೃತಿಗಳಿಂದ ಮೃತ್ಯುಂಜಯನನ್ನು ಆವಾಹಿಸಿ, “ಓಂ ನಮೋ ಭಗವತೇ ರುದ್ರಾಯ” ಎನ್ನುತ್ತಾ ಗಂಧ, ಅಕ್ಷತೆ, ಬಿಲ್ವ ಅಥವಾ ಹೂವು, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯಗಳಿಂದ ಪೂಜಿಸಿ. ಮಾಧ್ವರು ರುದ್ರಾಂತರ್ಗತ ಆಯುಷ್ಯದಾತ ಶ್ರೀಸಂಕರ್ಷಣನನ್ನು ಧ್ಯಾನಿಸಿ (ಹೋಮ–ಹವನ) ಒಳಗಿರುವ ಅವನಿಗೆ ತುಳಸಿ ಅರ್ಪಿಸುತ್ತಾರೆ. ಕೆಲವು ಸ್ಮಾರ್ತ ಗ್ರಂಥಗಳಲ್ಲಿ ಮುದ್ರಿತವಾದ ಮಹಾಮೃತ್ಯುಂಜಯದ ನ್ಯಾಸ ಮತ್ತು ಬೀಜಸಹಿತ ರೂಪವನ್ನು (ಓಂ ಹೌಂ ಜೂಂ ಸಃ…) ಗುರುವಿನಿಂದಲೇ ಪಡೆಯಬೇಕು; ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ.',
     [C(RU, 1, 0), AVAHANA, C(RU, 2, 0)]),
 Sec('त्र्यम्बकहोमः', 'The Tryambaka homa: dravyas and counts',
     'Offer with the Tryambaka mantra, one oblation for each repetition, while the kalasha is touched. Madhva (Homa-Havana): durva, four blades to each oblation, dipped in honey, ghee and curd, 1000, 108 or 28 times, with the mantra enclosed by the pranava and the vyahritis; or, for illness, amrita (guduchi) samidhs with cow\'s ghee and milk (Tantrasara). Smarta (Shaiva Agama manual): samidhs of ashvattha, apamarga, guduchi, durva, shami and palasha, then payasa and ghee, each 108 or 1000 times, and sesame 108 times, with the plain mantra and svaha. After the counted oblations, offer the Rudra mantras of the next step.',
     'ತ್ರ್ಯಂಬಕ ಮಂತ್ರದ ಪ್ರತಿ ಪಠಣಕ್ಕೆ ಒಂದು ಆಹುತಿಯಂತೆ, ಕಲಶವನ್ನು ಮುಟ್ಟಿಕೊಂಡು ಹೋಮಿಸಿ. ಮಾಧ್ವ (ಹೋಮ–ಹವನ): ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ೧೦೦೦, ೧೦೮ ಅಥವಾ ೨೮ ಬಾರಿ, ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ ಮಂತ್ರದಿಂದ; ಅಥವಾ ರೋಗಶಾಂತಿಗೆ ಗೋವಿನ ತುಪ್ಪ–ಹಾಲಿನೊಡನೆ ಅಮೃತಬಳ್ಳಿ ಸಮಿಧೆಗಳು (ತಂತ್ರಸಾರ). ಸ್ಮಾರ್ತ (ಶೈವಾಗಮ ಗ್ರಂಥ): ಅಶ್ವತ್ಥ, ಉತ್ತರಾಣೆ, ಅಮೃತಬಳ್ಳಿ, ಗರಿಕೆ, ಶಮೀ, ಪಲಾಶ ಸಮಿಧೆಗಳು, ನಂತರ ಪಾಯಸ, ತುಪ್ಪ — ಒಂದೊಂದನ್ನೂ ೧೦೮ ಅಥವಾ ೧೦೦೦ ಬಾರಿ, ಎಳ್ಳು ೧೦೮ ಬಾರಿ, ಸ್ವಾಹಾಕಾರಸಹಿತ ಮಂತ್ರದಿಂದ. ಎಣಿಸಿದ ಆಹುತಿಗಳ ನಂತರ ಮುಂದಿನ ಹಂತದ ರುದ್ರಮಂತ್ರಗಳು.',
     [SAMPUTA, O(1, 0, when=S)]),
 Sec('रुद्रमन्त्राः', 'The Rudra mantras with the homa',
     'After the Tryambaka oblations, recite these riks that follow the Namakam of the Sri Rudram (copied from that text). The verse ये ते सहस्रम्… ends with मृत्यवे स्वाहा twice: offer two oblations of ghee with it, to Mrityu (Madhva: to the Lord within him). Then recite the others with folded hands. Families that do the full Rudra homa (the eleven anuvakas of the Namakam with ghee) do it here as their purohita directs; it is a longer rite of its own.',
     'ತ್ರ್ಯಂಬಕ ಆಹುತಿಗಳ ನಂತರ ಶ್ರೀರುದ್ರದ ನಮಕದ ನಂತರ ಬರುವ ಈ ಋಕ್ಕುಗಳನ್ನು ಹೇಳಿ (ಆ ಪಠ್ಯದಿಂದ ತೆಗೆದದ್ದು). “ಯೇ ತೇ ಸಹಸ್ರಮ್…” ಮಂತ್ರ “ಮೃತ್ಯವೇ ಸ್ವಾಹಾ” ಎಂದು ಎರಡು ಬಾರಿ ಮುಗಿಯುತ್ತದೆ: ಅದರಿಂದ ಮೃತ್ಯುವಿಗೆ (ಮಾಧ್ವ: ಒಳಗಿರುವ ಭಗವಂತನಿಗೆ) ಎರಡು ಆಜ್ಯಾಹುತಿ ನೀಡಿ. ಉಳಿದವುಗಳನ್ನು ಕೈಮುಗಿದು ಹೇಳಿ. ಪೂರ್ಣ ರುದ್ರಹೋಮ (ನಮಕದ ಹನ್ನೊಂದು ಅನುವಾಕಗಳಿಂದ ಆಜ್ಯಾಹುತಿ) ಮಾಡುವವರು ಇಲ್ಲಿ ಪುರೋಹಿತರ ಮಾರ್ಗದರ್ಶನದಂತೆ ಮಾಡಲಿ; ಅದು ಪ್ರತ್ಯೇಕ ದೀರ್ಘ ಕರ್ಮ.',
     [C(RU, 14, 4), C(RU, 14, 1), C(RU, 14, 2), C(RU, 14, 5), C(RU, 14, 6), C(RU, 14, 7)]),
 uttaranga_step('For the svishtakrit offer a little of each material used in the main homa (durva with trimadhura, the samidhs, payasa, sesame).',
                'ಸ್ವಿಷ್ಟಕೃತ್‌ಗೆ ಪ್ರಧಾನ ಹೋಮದ ಪ್ರತಿ ದ್ರವ್ಯದ ಸ್ವಲ್ಪ ಭಾಗ (ತ್ರಿಮಧುರದ ಗರಿಕೆ, ಸಮಿಧೆ, ಪಾಯಸ, ಎಳ್ಳು).'),
]
secs += closing_puja('Worship Mrityunjaya in the kalasha once more with dhupa, dipa and naivedya.', 'ಕಲಶದಲ್ಲಿರುವ ಮೃತ್ಯುಂಜಯನಿಗೆ ಮತ್ತೆ ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ ಅರ್ಪಿಸಿ.')
secs.append(Sec('कलशप्रोक्षणं तीर्थप्रसादश्च', 'Sprinkling with the kalasha water, the tirtha and prasada',
  'Take up the kalasha and sprinkle the person for whom the homa was done, and then the family, with its water, reciting the Tryambaka mantra (without svaha) and मा नस्तोके…; give the water to drink as tirtha with the verse अकालमृत्युहरणं…. Eat the prasada (the naivedya and the remains of the payasa) to remove untimely death (Shiva Purana, as quoted in the Tamil manual). On a birthday the person also drinks milk with sesame and jaggery with the verse सतिलं गुडसम्मिश्रं… (Homa-Havana; see "Ayushya Homa").',
  'ಕಲಶವನ್ನು ಎತ್ತಿಕೊಂಡು ಯಾರಿಗಾಗಿ ಹೋಮ ಮಾಡಿದೆಯೋ ಅವರಿಗೂ ನಂತರ ಮನೆಯವರಿಗೂ ತ್ರ್ಯಂಬಕ ಮಂತ್ರ (ಸ್ವಾಹಾ ಇಲ್ಲದೆ) ಮತ್ತು “ಮಾ ನಸ್ತೋಕೇ…” ಹೇಳುತ್ತಾ ಅದರ ಜಲವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ; “ಅಕಾಲಮೃತ್ಯುಹರಣಂ…” ಎಂದು ತೀರ್ಥವಾಗಿ ಕುಡಿಯಲು ಕೊಡಿ. ಅಕಾಲಮೃತ್ಯು ನಿವಾರಣೆಗೆ ಪ್ರಸಾದವನ್ನು (ನೈವೇದ್ಯ, ಪಾಯಸದ ಶೇಷ) ಸೇವಿಸಿ (ತಮಿಳು ಗ್ರಂಥದಲ್ಲಿ ಉದ್ಧೃತ ಶಿವಪುರಾಣ). ಜನ್ಮದಿನದಂದು “ಸತಿಲಂ ಗುಡಸಮ್ಮಿಶ್ರಂ…” ಎಂದು ಎಳ್ಳು–ಬೆಲ್ಲ ಸೇರಿದ ಹಾಲು ಕುಡಿಯಿರಿ (ಹೋಮ–ಹವನ; “ಆಯುಷ್ಯ ಹೋಮ” ನೋಡಿ).',
  [C('mahamrityunjaya-mantra', 0, 0), O(2, 0), C('nitya-puja', 39, 0), TIL]))
secs += samarpana(SAM_M, SAM_S)

m = {
 'id': ID, 'title': 'मृत्युञ्जयहोमः', 'titleEn': 'Mrityunjaya Homa (Tryambaka homa)', 'category': 'homa', 'order': 4,
 'deity': 'Mrityunjaya (Tryambaka); Madhva: Sri Sankarshana within Rudra',
 'source': 'Rigveda 7.59.12; Madhva: Homa-Havana and Tantrasara-sangraha 4.99-102; Smarta: Shaiva Agama Tamil manual; the riks of the Sri Rudram',
 'summary': 'The Mrityunjaya homa from start to end, done on the birth-star, on a birthday, in illness or against the fear of untimely death: sankalpa, the agnimukha, the dhyana and avahana of Mrityunjaya in the kalasha, the Tryambaka homa (Madhva: enclosed by the pranava and vyahritis, with durva dipped in honey, ghee and curd; Smarta: with the six samidhs, payasa, ghee and sesame) with the counts 28, 108 or 1000, the Rudra mantras, the uttaranga, the closing puja, the sprinkling with the kalasha water, the tirtha and prasada, and the samarpana.',
 'summaryKn': 'ಜನ್ಮನಕ್ಷತ್ರ, ಜನ್ಮದಿನ, ರೋಗ ಅಥವಾ ಅಕಾಲಮೃತ್ಯುಭಯದಲ್ಲಿ ಮಾಡುವ ಮೃತ್ಯುಂಜಯ ಹೋಮ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ಸಂಕಲ್ಪ, ಅಗ್ನಿಮುಖ, ಕಲಶದಲ್ಲಿ ಮೃತ್ಯುಂಜಯನ ಧ್ಯಾನ–ಆವಾಹನೆ, ತ್ರ್ಯಂಬಕ ಹೋಮ (ಮಾಧ್ವ: ಪ್ರಣವ–ವ್ಯಾಹೃತಿ ಸಂಪುಟಿತ, ಜೇನು–ತುಪ್ಪ–ಮೊಸರಿನ ಗರಿಕೆಯಿಂದ; ಸ್ಮಾರ್ತ: ಆರು ಸಮಿಧೆ, ಪಾಯಸ, ತುಪ್ಪ, ಎಳ್ಳು) — ೨೮, ೧೦೮ ಅಥವಾ ೧೦೦೦ ಸಂಖ್ಯೆ, ರುದ್ರಮಂತ್ರಗಳು, ಉತ್ತರಾಂಗ, ಉತ್ತರಪೂಜೆ, ಕಲಶಜಲ ಪ್ರೋಕ್ಷಣೆ, ತೀರ್ಥ–ಪ್ರಸಾದ, ಸಮರ್ಪಣೆ.',
 'variants': [TRADITION], 'difficulty': 'medium', 'completeness': 'complete',
 'contentNote': 'Homas are traditionally done with a trained priest; this text lets the family follow every step. The agnimukha and the uttaranga are done from "Homa: Common Procedure"; everything particular to this homa is printed here. Not given, because it is taken only from a guru: the nyasa and the bija form of the Mahamrityunjaya mantra (ॐ हौं जूं सः…) and the avarana puja of the Shaiva Agama form; the full Rudra homa with the eleven anuvakas is a separate, longer rite. The Smarta counts and materials come from one Tamil Shaiva manual whose scan is partly illegible. Follow your family manual and purohita where they differ.',
 'sections': secs,
}
SUM = {
 'hi': 'जन्मनक्षत्र, जन्मदिन, रोग या अकालमृत्यु के भय में किया जाने वाला मृत्युञ्जय होम आरम्भ से अन्त तक: संकल्प, अग्निमुख, कलश में मृत्युञ्जय का ध्यान और आवाहन, त्र्यम्बक होम (माध्व: प्रणव-व्याहृति से सम्पुटित, शहद-घी-दही में भिगोई दूर्वा से; स्मार्त: छह समिधाएँ, पायस, घी और तिल) — 28, 108 या 1000 की संख्या, रुद्र मन्त्र, उत्तरांग, उत्तरपूजा, कलशजल से प्रोक्षण, तीर्थ-प्रसाद और समर्पण।',
 'te': 'జన్మనక్షత్రం, పుట్టినరోజు, రోగం లేదా అకాలమృత్యుభయంలో చేసే మృత్యుంజయ హోమం మొదటి నుండి చివరి వరకు: సంకల్పం, అగ్నిముఖం, కలశంలో మృత్యుంజయుని ధ్యానం ఆవాహన, త్ర్యంబక హోమం (మాధ్వ: ప్రణవ వ్యాహృతి సంపుటితం, తేనె–నెయ్యి–పెరుగులో ముంచిన గరికతో; స్మార్త: ఆరు సమిధలు, పాయసం, నెయ్యి, నువ్వులు) — 28, 108 లేదా 1000 సంఖ్య, రుద్ర మంత్రాలు, ఉత్తరాంగం, ఉత్తరపూజ, కలశజల ప్రోక్షణ, తీర్థప్రసాదాలు, సమర్పణ.',
 'ta': 'ஜன்மநக்ஷத்திரம், பிறந்தநாள், நோய் அல்லது அகால மரண பயத்தில் செய்யும் ம்ருத்யுஞ்ஜய ஹோமம் தொடக்கம் முதல் முடிவு வரை: ஸங்கல்பம், அக்னிமுகம், கலசத்தில் ம்ருத்யுஞ்ஜயனின் தியானமும் ஆவாஹனமும், த்ர்யம்பக ஹோமம் (மாத்வ: ப்ரணவ வ்யாஹ்ருதி ஸம்புடிதம், தேன்–நெய்–தயிரில் தோய்த்த அருகுடன்; ஸ்மார்த்த: ஆறு ஸமித்துகள், பாயஸம், நெய், எள்) — 28, 108 அல்லது 1000 எண்ணிக்கை, ருத்ர மந்திரங்கள், உத்தராங்கம், உத்தரபூஜை, கலச நீர் ப்ரோக்ஷணம், தீர்த்தப் பிரசாதம், ஸமர்ப்பணம்.',
}
if __name__ == '__main__':
    check(m)
    write_ts(f'{REPO}/src/data/texts/mrityunjaya-homa.ts', HEADER, 'mrityunjayaHoma', m)
    merge_packs(m, SUM)
    print(ID, len(m['sections']), 'sections', count(m), 'verses')
