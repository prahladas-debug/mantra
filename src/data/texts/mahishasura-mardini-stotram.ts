// Śrī Mahiṣāsuramardinī Stotram (अयि गिरिनन्दिनि…). Collated Nov 2026; not yet
// checked line by line against a printed edition.
//
// Sources (independent digital witnesses):
//   A. stotranidhi.com, Devanagari page (from the printed "Prabhāta Stotranidhi"):
//      base text and word spacing.
//   B. sa.wikisource.org, "महिषासुरमर्दिनी स्तोत्रम्" (typed Devanagari).
//   C. stotrasamhita/stotra-sangrahah (GitHub), MahishasuramardiniStotram.tex.
//   D. Gita Press "Devī Stotra Ratnākara", no. 60 "श्रीसंकटास्तुतिः"
//      (sanskrit/raw_etexts, misc-gp). D is a different recension: verses 4–7
//      come in another order and many words differ. It is used only to break
//      ties between A, B and C.
//
// Differences resolved by majority (A B C, then D):
//   v1 नन्दिनुते (A C D) / नन्दनुते (B); भूरिकृते (A B C) / भूतिकृते (D)
//   v2 किल्बिषमोषिणि घोषरते (B C, and A as a variant) / कल्मषमोषिणि घोररते (A)
//   v4 निपातितखण्ड (A B C) / निपातितचण्ड (D, and A as a variant)
//   v5 वधोदित (A C) / वधोद्यत (B); v6 दायकरे (A C) / दानकरे (B)
//   v8 हतावटुके (A C) / हताबटुके (B D)
//   v10 झणझण झिञ्झिमि झिङ्कृत (B D, and A as a variant) / भणभण भिञ्जिमि भिङ्कृत (A C)
//   v12 सितकृतफुल्ल (A C) / सित्कृत्पुल्ल (B)
//   v13 त्रिभुवन (A C); B has the typo त्रिभिवन
//   v14 मिलद्बकुलालिकुले (B: bees on the bakula flowers) / मिलद्भकुलालि (A C),
//       taken from B on the sense
//   v17 सूनुसुते (A C) / सुनूसुते (B)
//   v21 तथानुमितासिरते (B C) / तथानुभितासिरते (A); अपाकुरुते (B C) / अपाकुरु ते [मे] (A)
// C lacks verse 9 (सुरललना…), which A, B and D all have.
// B adds a closing phala verse (स्तुतिमिमां स्तिमितः सुसमाधिना…) that A and C
// lack; it is not included here.
import type { Mantra } from '../types';

const REFRAIN = 'जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥';

export const mahishasuraMardiniStotram: Mantra = {
  id: 'mahishasura-mardini-stotram',
  title: 'महिषासुरमर्दिनीस्तोत्रम्',
  titleEn: 'Mahishasura Mardini Stotram',
  category: 'stotra',
  deity: 'Śrī Durgā as Mahiṣāsuramardinī',
  source: 'Traditionally attributed to Ādi Śaṅkarācārya',
  summary:
    'Twenty-one rhythmic verses, each ending "jaya jaya he mahiṣāsuramardini", hailing the Goddess, daughter of the mountain, who slew the buffalo-demon Mahiṣa. They recall her battles with Mahiṣa, Caṇḍa-Muṇḍa, Dhūmralocana, Raktabīja and Śumbha-Niśumbha, her beauty and her music and dance, and end with a plea for her compassion.',
  summaryKn:
    'ಪ್ರತಿ ಶ್ಲೋಕವೂ "ಜಯ ಜಯ ಹೇ ಮಹಿಷಾಸುರಮರ್ದಿನಿ" ಎಂದು ಕೊನೆಗೊಳ್ಳುವ ಇಪ್ಪತ್ತೊಂದು ಲಯಬದ್ಧ ಶ್ಲೋಕಗಳು. ಮಹಿಷಾಸುರನನ್ನು ಸಂಹರಿಸಿದ ಗಿರಿಜೆಯನ್ನು ಇವು ಸ್ತುತಿಸುತ್ತವೆ; ಮಹಿಷ, ಚಂಡಮುಂಡ, ಧೂಮ್ರಲೋಚನ, ರಕ್ತಬೀಜ, ಶುಂಭನಿಶುಂಭರೊಡನೆ ಅವಳ ಯುದ್ಧಗಳನ್ನೂ ಅವಳ ಸೌಂದರ್ಯ, ಸಂಗೀತ, ನೃತ್ಯಗಳನ್ನೂ ವರ್ಣಿಸಿ, ಕೊನೆಯಲ್ಲಿ ಅವಳ ಕರುಣೆಯನ್ನು ಬೇಡುತ್ತವೆ.',
  difficulty: 'advanced',
  completeness: 'complete',
  sections: [
    {
      title: 'स्तोत्रम्',
      titleEn: 'Stotram',
      note: 'The last line of every verse is the refrain "jaya jaya he mahiṣāsuramardini…".',
      noteKn: 'ಪ್ರತಿ ಶ್ಲೋಕದ ಕೊನೆಯ ಸಾಲು "ಜಯ ಜಯ ಹೇ ಮಹಿಷಾಸುರಮರ್ದಿನಿ…" ಎಂಬ ಪಲ್ಲವಿ.',
      verses: [
        {
          n: 1,
          text: `अयि गिरिनन्दिनि नन्दितमेदिनि विश्वविनोदिनि नन्दिनुते\nगिरिवरविन्ध्यशिरोऽधिनिवासिनि विष्णुविलासिनि जिष्णुनुते ।\nभगवति हे शितिकण्ठकुटुम्बिनि भूरिकुटुम्बिनि भूरिकृते\n${REFRAIN}`,
          meaning: {
            en: 'O daughter of the mountain, who gladdens the earth and delights the universe, praised by Nandī; who dwells on the peak of the great Vindhya, who shines with Viṣṇu’s glory and is praised by Indra; O blessed one, wife of the blue-throated Śiva, mother of a vast family, doer of great deeds: victory, victory to you, slayer of Mahiṣāsura, lovely one with braided hair, daughter of the mountain!',
            kn: 'ಗಿರಿನಂದಿನಿಯೇ, ಭೂಮಿಯನ್ನು ಆನಂದಗೊಳಿಸುವವಳೇ, ವಿಶ್ವಕ್ಕೆ ವಿನೋದ ನೀಡುವವಳೇ, ನಂದಿಯಿಂದ ಸ್ತುತಳಾದವಳೇ, ವಿಂಧ್ಯಪರ್ವತದ ಶಿಖರದಲ್ಲಿ ನೆಲೆಸಿರುವವಳೇ, ವಿಷ್ಣುವಿನ ವೈಭವದಿಂದ ಶೋಭಿಸುವವಳೇ, ಇಂದ್ರನಿಂದ ಸ್ತುತಳಾದವಳೇ, ನೀಲಕಂಠನ ಪತ್ನಿಯೇ, ದೊಡ್ಡ ಕುಟುಂಬದ ಜನನಿಯೇ, ಮಹತ್ಕಾರ್ಯಗಳನ್ನು ಮಾಡುವವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ಸುಂದರ ಜಟೆಯುಳ್ಳವಳೇ, ಶೈಲಸುತೆಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ, ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 2,
          text: `सुरवरवर्षिणि दुर्धरधर्षिणि दुर्मुखमर्षिणि हर्षरते\nत्रिभुवनपोषिणि शङ्करतोषिणि किल्बिषमोषिणि घोषरते ।\nदनुजनिरोषिणि दितिसुतरोषिणि दुर्मदशोषिणि सिन्धुसुते\n${REFRAIN}`,
          meaning: {
            en: 'You shower boons on the gods, overpower the invincible Durdhara, bear with and then subdue Durmukha, and delight in joy; you nourish the three worlds, please Śaṅkara, steal away sin and love the sound of praise; you check the Dānavas, rage against the sons of Diti and dry up the arrogant, O daughter of the ocean: victory to you, slayer of Mahiṣa!',
            kn: 'ದೇವತೆಗಳ ಮೇಲೆ ವರಗಳ ಮಳೆಗರೆಯುವವಳೇ, ದುರ್ಧರನನ್ನು ಅಡಗಿಸಿದವಳೇ, ದುರ್ಮುಖನನ್ನು ಸಹಿಸಿ ನಿಗ್ರಹಿಸಿದವಳೇ, ಹರ್ಷದಲ್ಲಿ ರಮಿಸುವವಳೇ, ಮೂರು ಲೋಕಗಳನ್ನು ಪೋಷಿಸುವವಳೇ, ಶಂಕರನನ್ನು ಸಂತೋಷಪಡಿಸುವವಳೇ, ಪಾಪಗಳನ್ನು ಕಳೆಯುವವಳೇ, ಸ್ತುತಿಘೋಷದಲ್ಲಿ ಆನಂದಿಸುವವಳೇ, ದಾನವರನ್ನು ತಡೆಯುವವಳೇ, ದೈತ್ಯರ ಮೇಲೆ ಕೋಪಿಸುವವಳೇ, ದುರಹಂಕಾರಿಗಳನ್ನು ಒಣಗಿಸುವವಳೇ, ಸಮುದ್ರಸುತೆಯೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 3,
          text: `अयि जगदम्ब मदम्ब कदम्बवनप्रियवासिनि हासरते\nशिखरिशिरोमणि तुङ्गहिमालय शृङ्गनिजालय मध्यगते ।\nमधुमधुरे मधुकैटभगञ्जिनि कैटभभञ्जिनि रासरते\n${REFRAIN}`,
          meaning: {
            en: 'O Mother of the world, my own Mother, who loves to dwell in the kadamba forest and delights in laughter; who lives in her home on the lofty peak of the Himālaya, crown jewel of mountains; sweet as honey, humbler of Madhu and Kaiṭabha, destroyer of Kaiṭabha, who delights in the circle dance: victory to you, slayer of Mahiṣa!',
            kn: 'ಜಗದಂಬೆಯೇ, ನನ್ನ ತಾಯಿಯೇ, ಕದಂಬವನದಲ್ಲಿ ಪ್ರೀತಿಯಿಂದ ವಾಸಿಸುವವಳೇ, ನಗುವಿನಲ್ಲಿ ಆನಂದಿಸುವವಳೇ, ಪರ್ವತಶ್ರೇಷ್ಠವಾದ ಎತ್ತರದ ಹಿಮಾಲಯದ ಶಿಖರದ ನಿನ್ನ ಮನೆಯಲ್ಲಿ ನೆಲೆಸಿರುವವಳೇ, ಜೇನಿನಂತೆ ಮಧುರಳೇ, ಮಧುಕೈಟಭರ ಗರ್ವ ಮುರಿದವಳೇ, ಕೈಟಭನನ್ನು ಸಂಹರಿಸಿದವಳೇ, ರಾಸನೃತ್ಯದಲ್ಲಿ ರಮಿಸುವವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 4,
          text: `अयि शतखण्ड विखण्डितरुण्ड वितुण्डितशुण्ड गजाधिपते\nरिपुगजगण्ड विदारणचण्ड पराक्रमशुण्ड मृगाधिपते ।\nनिजभुजदण्ड निपातितखण्डविपातितमुण्डभटाधिपते\n${REFRAIN}`,
          meaning: {
            en: 'You cut the headless trunks of the enemy into a hundred pieces and lopped the trunks of the lordly elephants; your lion, fierce in valour, rips open the temples of the enemy’s elephants; with the rod of your own arms you struck down and shattered the heads of the leaders of the demon warriors: victory to you, slayer of Mahiṣa!',
            kn: 'ಶತ್ರುಗಳ ತಲೆಯಿಲ್ಲದ ಮುಂಡಗಳನ್ನು ನೂರು ತುಂಡುಗಳಾಗಿ ಕತ್ತರಿಸಿದವಳೇ, ಗಜರಾಜರ ಸೊಂಡಿಲುಗಳನ್ನು ಕಡಿದವಳೇ, ಶತ್ರುಗಳ ಆನೆಗಳ ಕಪೋಲಗಳನ್ನು ಸೀಳುವ ಪ್ರಚಂಡ ಪರಾಕ್ರಮದ ಸಿಂಹವನ್ನು ಹೊಂದಿದವಳೇ, ನಿನ್ನ ಭುಜದಂಡದಿಂದ ರಾಕ್ಷಸ ಸೇನಾಪತಿಗಳ ತಲೆಗಳನ್ನು ಉರುಳಿಸಿದವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 5,
          text: `अयि रणदुर्मद शत्रुवधोदित दुर्धरनिर्जर शक्तिभृते\nचतुरविचारधुरीण महाशिव दूतकृत प्रमथाधिपते ।\nदुरितदुरीह दुराशयदुर्मति दानवदूत कृतान्तमते\n${REFRAIN}`,
          meaning: {
            en: 'You bear the irresistible power of the gods, which rose up to slay enemies drunk with battle; you made the great Śiva, lord of the pramathas and foremost in wise counsel, your messenger; you resolved to be death itself to the envoy of the wicked, evil-minded demons: victory to you, slayer of Mahiṣa!',
            kn: 'ಯುದ್ಧಮದದಿಂದ ಮೆರೆಯುವ ಶತ್ರುಗಳನ್ನು ವಧಿಸಲು ಉದಿಸಿದ ತಡೆಯಲಾಗದ ದೇವಶಕ್ತಿಯನ್ನು ಧರಿಸಿದವಳೇ, ಚತುರ ವಿಚಾರದಲ್ಲಿ ಮುಂದಾಳುವಾದ ಪ್ರಮಥಾಧಿಪತಿ ಮಹಾಶಿವನನ್ನೇ ದೂತನನ್ನಾಗಿ ಮಾಡಿಕೊಂಡವಳೇ, ಪಾಪಿಷ್ಠ ದುರ್ಬುದ್ಧಿಯ ದಾನವರ ದೂತನಿಗೆ ಯಮನಂತಾದವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 6,
          text: `अयि शरणागतवैरिवधूवर वीरवराभयदायकरे\nत्रिभुवन मस्तक शूलविरोधिशिरोधिकृतामल शूलकरे ।\nदुमिदुमितामर दुन्दुभिनाद महो मुखरीकृत तिग्मकरे\n${REFRAIN}`,
          meaning: {
            en: 'Your hand grants fearlessness even to the wives of enemy heroes who come to you for refuge; your hand holds the spotless trident, raised against the heads of those who were a spear-point at the head of the three worlds; the "dumi dumi" of the gods’ drums fills the sky to the very sun: victory to you, slayer of Mahiṣa!',
            kn: 'ಶರಣು ಬಂದ ಶತ್ರುವೀರರ ಪತ್ನಿಯರಿಗೂ ಅಭಯವನ್ನು ನೀಡುವ ಕೈಯುಳ್ಳವಳೇ, ಮೂರು ಲೋಕಗಳ ತಲೆಯ ಮೇಲೆ ಶೂಲದಂತಿದ್ದ ಶತ್ರುಗಳ ತಲೆಗಳ ಮೇಲೆ ನಿರ್ಮಲ ತ್ರಿಶೂಲವನ್ನು ಎತ್ತಿದವಳೇ, ದೇವದುಂದುಭಿಗಳ "ದುಮಿ ದುಮಿ" ನಾದವು ಸೂರ್ಯನವರೆಗೂ ಮೊಳಗುವಂತೆ ಮಾಡಿದವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 7,
          text: `अयि निजहुङ्कृतिमात्र निराकृत धूम्रविलोचन धूम्रशते\nसमरविशोषित शोणितबीज समुद्भवशोणित बीजलते ।\nशिव शिव शुम्भ निशुम्भ महाहव तर्पित भूत पिशाचरते\n${REFRAIN}`,
          meaning: {
            en: 'With a mere "huṃ" of yours you reduced Dhūmralocana and his hundreds to smoke; in battle you dried up the creepers of Raktabīja that sprang from his own blood; in the great war with Śumbha and Niśumbha you sated the spirits and goblins with offerings, O auspicious one: victory to you, slayer of Mahiṣa!',
            kn: 'ನಿನ್ನ "ಹುಂ"ಕಾರ ಮಾತ್ರದಿಂದಲೇ ಧೂಮ್ರಲೋಚನನನ್ನೂ ಅವನ ನೂರಾರು ಸೈನಿಕರನ್ನೂ ಹೊಗೆಯಾಗಿಸಿದವಳೇ, ರಕ್ತಬೀಜನ ರಕ್ತದಿಂದ ಹುಟ್ಟಿದ ಬಳ್ಳಿಗಳಂತಹ ರಾಕ್ಷಸರನ್ನು ಯುದ್ಧದಲ್ಲಿ ಒಣಗಿಸಿದವಳೇ, ಶುಂಭನಿಶುಂಭರೊಡನೆಯ ಮಹಾಯುದ್ಧದಲ್ಲಿ ಭೂತಪಿಶಾಚಿಗಳನ್ನು ತೃಪ್ತಿಪಡಿಸಿದ ಮಂಗಳರೂಪಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 8,
          text: `धनुरनुसङ्ग रणक्षणसङ्ग परिस्फुरदङ्ग नटत्कटके\nकनक पिशङ्गपृषत्कनिषङ्गरसद्भट शृङ्ग हतावटुके ।\nकृतचतुरङ्ग बलक्षितिरङ्ग घटद्बहुरङ्ग रटद्बटुके\n${REFRAIN}`,
          meaning: {
            en: 'As you hold the bow in the thick of battle your limbs flash and your bracelets dance; from your quiver of golden-tawny arrows you strike down the heads and necks of roaring warriors; on the battlefield the four-fold army clashes in many hues and the young warriors cry out: victory to you, slayer of Mahiṣa!',
            kn: 'ಯುದ್ಧದ ಕ್ಷಣದಲ್ಲಿ ಬಿಲ್ಲನ್ನು ಹಿಡಿದಾಗ ನಿನ್ನ ಅಂಗಗಳು ಹೊಳೆಯುತ್ತವೆ, ಕಂಕಣಗಳು ನರ್ತಿಸುತ್ತವೆ; ಚಿನ್ನದ ಬಣ್ಣದ ಬಾಣಗಳ ಬತ್ತಳಿಕೆಯಿಂದ ಗರ್ಜಿಸುವ ಯೋಧರ ತಲೆ ಕುತ್ತಿಗೆಗಳನ್ನು ಹೊಡೆದುರುಳಿಸುವೆ; ರಣರಂಗದಲ್ಲಿ ಚತುರಂಗ ಸೇನೆ ಬಗೆಬಗೆಯಾಗಿ ಹೋರಾಡುತ್ತಾ ಯುವಯೋಧರು ಕೂಗುತ್ತಾರೆ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 9,
          text: `सुरललना ततथेयि तथेयि कृताभिनयोदर नृत्यरते\nकृत कुकुथः कुकुथो गडदादिकताल कुतूहल गानरते ।\nधुधुकुट धुक्कुट धिन्धिमित ध्वनि धीर मृदङ्ग निनादरते\n${REFRAIN}`,
          meaning: {
            en: 'You delight in the dance of the heavenly maidens, full of expressive gesture to the beat of "ta-ta-theyi, ta-theyi"; you delight in songs that play with rhythms such as "kukutha, kukutha, gaḍa-da"; you delight in the deep sound of the mṛdaṅga going "dhudhukuṭa, dhukkuṭa, dhindhimita": victory to you, slayer of Mahiṣa!',
            kn: '"ತತ ಥೇಯಿ ತಥೇಯಿ" ಎಂಬ ತಾಳಕ್ಕೆ ಅಭಿನಯಪೂರ್ಣವಾಗಿ ನರ್ತಿಸುವ ದೇವಲಲನೆಯರ ನೃತ್ಯದಲ್ಲಿ ಆನಂದಿಸುವವಳೇ, "ಕುಕುಥ ಕುಕುಥ ಗಡದ" ಮುಂತಾದ ತಾಳಗಳ ಕುತೂಹಲಭರಿತ ಗಾನದಲ್ಲಿ ರಮಿಸುವವಳೇ, "ಧುಧುಕುಟ ಧುಕ್ಕುಟ ಧಿಂಧಿಮಿತ" ಎಂಬ ಗಂಭೀರ ಮೃದಂಗನಾದದಲ್ಲಿ ಆನಂದಿಸುವವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 10,
          text: `जय जय जप्य जये जय शब्दपरस्तुति तत्पर विश्वनुते\nझणझण झिञ्झिमि झिङ्कृतनूपुर सिञ्जितमोहित भूतपते ।\nनटितनटार्ध नटीनटनायक नाटितनाट्य सुगानरते\n${REFRAIN}`,
          meaning: {
            en: 'Victory, victory! O Victorious One, worthy of being chanted, praised by the whole world intent on hymns full of the word "jaya"; you charm the Lord of beings (Śiva) with the "jhaṇa-jhaṇa, jhiñjhimi" tinkling of your anklets; you delight in the drama and sweet song performed by the Lord of dancers, half of whose body is the dancing Goddess: victory to you, slayer of Mahiṣa!',
            kn: 'ಜಯ ಜಯ! ಜಪಿಸಲು ಯೋಗ್ಯಳಾದ ಜಯಶೀಲೆಯೇ, "ಜಯ" ಶಬ್ದದಿಂದ ತುಂಬಿದ ಸ್ತುತಿಗಳಲ್ಲಿ ತೊಡಗಿದ ಜಗತ್ತಿನಿಂದ ಸ್ತುತಳಾದವಳೇ, "ಝಣ ಝಣ ಝಿಂಝಿಮಿ" ಎಂದು ಝಣಝಣಿಸುವ ಕಾಲ್ಗೆಜ್ಜೆಗಳಿಂದ ಭೂತಪತಿಯಾದ ಶಿವನನ್ನು ಮೋಹಗೊಳಿಸಿದವಳೇ, ಅರ್ಧ ದೇಹದಲ್ಲಿ ನರ್ತಕಿಯಾದ ದೇವಿಯನ್ನು ಹೊಂದಿದ ನಟರಾಜನು ಆಡಿದ ನಾಟ್ಯ ಮತ್ತು ಸುಗಾನದಲ್ಲಿ ಆನಂದಿಸುವವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 11,
          text: `अयि सुमनः सुमनः सुमनः सुमनः सुमनोहर कान्तियुते\nश्रित रजनी रजनी रजनी रजनी रजनीकर वक्त्रवृते ।\nसुनयन विभ्रमर भ्रमर भ्रमर भ्रमर भ्रमराधिपते\n${REFRAIN}`,
          meaning: {
            en: 'A verse of word-play on sumanaḥ, rajanī and bhramara: you are full of a radiance that delights the good-hearted, the gods and the flowers alike; your face is like the moon that brightens the night; the restless glances of your lovely eyes outshine even the king of the bees: victory to you, slayer of Mahiṣa!',
            kn: '"ಸುಮನಃ", "ರಜನೀ", "ಭ್ರಮರ" ಎಂಬ ಪದಗಳ ಶ್ಲೇಷದ ಶ್ಲೋಕ: ಸಜ್ಜನರ, ದೇವತೆಗಳ, ಹೂಗಳ ಮನಸ್ಸನ್ನೂ ಸೆಳೆಯುವ ಕಾಂತಿಯುಳ್ಳವಳೇ, ರಾತ್ರಿಯನ್ನು ಬೆಳಗುವ ಚಂದ್ರನಂತಹ ಮುಖವುಳ್ಳವಳೇ, ಸುಂದರ ಕಣ್ಣುಗಳ ಚಂಚಲ ನೋಟದಿಂದ ಭ್ರಮರರಾಜನನ್ನೂ ಮೀರಿಸುವವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 12,
          text: `सहित महाहव मल्लम तल्लिक मल्लित रल्लक मल्लरते\nविरचित वल्लिक पल्लिक मल्लिक भिल्लिक भिल्लिक वर्ग वृते ।\nसितकृत फुल्लसमुल्लसितारुण तल्लज पल्लव सल्ललिते\n${REFRAIN}`,
          meaning: {
            en: 'A verse of sound-play: in the great battle you delight in the finest of wrestlers and in the wrestling of the young; you are surrounded by bands of hill-women who make garlands of creepers and jasmine; you are lovely with bright, blossoming, reddish tender shoots and smiling flowers: victory to you, slayer of Mahiṣa!',
            kn: 'ಶಬ್ದಾಲಂಕಾರದ ಶ್ಲೋಕ: ಮಹಾಯುದ್ಧದಲ್ಲಿ ಶ್ರೇಷ್ಠ ಮಲ್ಲರ ಮತ್ತು ಯುವ ಯೋಧರ ಕಾಳಗದಲ್ಲಿ ಆನಂದಿಸುವವಳೇ, ಬಳ್ಳಿ ಮಲ್ಲಿಗೆಗಳ ಮಾಲೆ ಕಟ್ಟುವ ಬೇಡತಿಯರ ಗುಂಪುಗಳಿಂದ ಸುತ್ತುವರಿಯಲ್ಪಟ್ಟವಳೇ, ಅರಳಿದ ಬಿಳಿಯ ಹೂಗಳು ಮತ್ತು ಕೆಂಪಾದ ಚಿಗುರುಗಳಿಂದ ಮನೋಹರಳಾದವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 13,
          text: `अविरलगण्डगलन्मदमेदुर मत्तमतङ्गज राजपते\nत्रिभुवनभूषणभूतकलानिधि रूपपयोनिधि राजसुते ।\nअयि सुदतीजन लालसमानस मोहनमन्मथ राजसुते\n${REFRAIN}`,
          meaning: {
            en: 'Your gait is like that of a lordly elephant in rut, its temples streaming with ichor; you are the daughter of the King of mountains, an ocean of beauty like the moon that adorns the three worlds; you are like the daughter of Manmatha himself, enchanting the hearts of fair-toothed maidens: victory to you, slayer of Mahiṣa!',
            kn: 'ಕಪೋಲಗಳಿಂದ ನಿರಂತರವಾಗಿ ಮದಜಲ ಸುರಿಯುವ ಮದಗಜರಾಜನಂತೆ ಗಂಭೀರ ನಡಿಗೆಯವಳೇ, ಮೂರು ಲೋಕಗಳಿಗೂ ಅಲಂಕಾರವಾದ ಚಂದ್ರನಂತಹ ಸೌಂದರ್ಯಸಾಗರಳಾದ ಪರ್ವತರಾಜನ ಮಗಳೇ, ಸುಂದರಿಯರ ಮನಸ್ಸನ್ನೂ ಮೋಹಗೊಳಿಸುವ ಮನ್ಮಥರಾಜನ ಮಗಳಂತಿರುವವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 14,
          text: `कमलदलामल कोमलकान्ति कलाकलितामल भाललते\nसकलविलासकलानिलय क्रमकेलिचलत्कलहंसकुले ।\nअलिकुल सङ्कुल कुवलय मण्डल मौलिमिलद्बकुलालि कुले\n${REFRAIN}`,
          meaning: {
            en: 'Your fair forehead glows with a soft, spotless lustre like a lotus petal; your graceful gait, home of every charm, is like that of a flock of swans at play; your hair is crowned with clusters of blue lilies thronged by bees and with bakula flowers swarming with them: victory to you, slayer of Mahiṣa!',
            kn: 'ಕಮಲದಳದಂತೆ ನಿರ್ಮಲವಾದ ಕೋಮಲಕಾಂತಿಯಿಂದ ಶೋಭಿಸುವ ಹಣೆಯುಳ್ಳವಳೇ, ಎಲ್ಲ ವಿಲಾಸಕಲೆಗಳ ನೆಲೆಯಾದ ನಡಿಗೆಯಲ್ಲಿ ಆಟವಾಡುವ ಕಲಹಂಸಗಳ ಹಿಂಡಿನಂತಿರುವವಳೇ, ದುಂಬಿಗಳು ಮುತ್ತಿದ ನೀಲಕಮಲಗಳ ಹಾಗೂ ಬಕುಳ ಪುಷ್ಪಗಳ ಗೊಂಚಲುಗಳನ್ನು ಮುಡಿಯಲ್ಲಿ ಧರಿಸಿದವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 15,
          text: `करमुरलीरववीजितकूजित लज्जितकोकिल मञ्जुमते\nमिलित पुलिन्द मनोहर गुञ्जित रञ्जितशैल निकुञ्जगते ।\nनिजगुणभूत महाशबरीगण सद्गुणसम्भृत केलितले\n${REFRAIN}`,
          meaning: {
            en: 'The music of the flute in your hand puts the sweet-voiced cuckoo to shame; you roam the mountain groves made lovely by the humming songs of the gathered hill-folk; you play in glades filled with hosts of tribal women who are your own virtues in visible form: victory to you, slayer of Mahiṣa!',
            kn: 'ನಿನ್ನ ಕೈಯ ಕೊಳಲಿನ ನಾದವು ಮಧುರವಾಗಿ ಕೂಗುವ ಕೋಗಿಲೆಯನ್ನೂ ನಾಚಿಸುತ್ತದೆ; ಒಟ್ಟುಗೂಡಿದ ಪುಲಿಂದರ (ಬೇಡರ) ಮನೋಹರ ಗುಂಜನದಿಂದ ರಂಜಿತವಾದ ಪರ್ವತದ ಲತಾಕುಂಜಗಳಲ್ಲಿ ನೀನು ಸಂಚರಿಸುವೆ; ನಿನ್ನ ಗುಣಗಳೇ ರೂಪತಾಳಿದಂತಿರುವ ಶಬರಿಯರ ಸಮೂಹದೊಡನೆ ಸದ್ಗುಣಪೂರ್ಣವಾದ ಕ್ರೀಡಾಸ್ಥಳದಲ್ಲಿ ಆಡುವೆ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 16,
          text: `कटितटपीत दुकूलविचित्र मयूखतिरस्कृत चन्द्ररुचे\nप्रणतसुरासुर मौलिमणिस्फुरदंशुलसन्नख चन्द्ररुचे ।\nजितकनकाचल मौलिपदोर्जित निर्भरकुञ्जर कुम्भकुचे\n${REFRAIN}`,
          meaning: {
            en: 'The many-coloured shimmer of the yellow silk at your waist outshines the moon; your toenails shine like moons, lit by the rays of the jewels on the crowns of the bowing gods and demons; your full bosom, like the temples of a mighty elephant, surpasses the summit of the golden mountain: victory to you, slayer of Mahiṣa!',
            kn: 'ನಿನ್ನ ಸೊಂಟದಲ್ಲಿನ ಹಳದಿ ರೇಷ್ಮೆವಸ್ತ್ರದ ಬಣ್ಣಬಣ್ಣದ ಹೊಳಪು ಚಂದ್ರನ ಕಾಂತಿಯನ್ನೂ ಮೀರಿಸುತ್ತದೆ; ನಮಿಸುವ ದೇವಾಸುರರ ಕಿರೀಟಮಣಿಗಳ ಕಿರಣಗಳಿಂದ ನಿನ್ನ ಕಾಲುಗುರುಗಳು ಚಂದ್ರರಂತೆ ಹೊಳೆಯುತ್ತವೆ; ಸ್ವರ್ಣಪರ್ವತದ ಶಿಖರವನ್ನೂ ಗೆಲ್ಲುವ ಗಜಕುಂಭಗಳಂತಹ ಪೂರ್ಣಸ್ತನಗಳುಳ್ಳವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 17,
          text: `विजित सहस्रकरैक सहस्रकरैक सहस्रकरैकनुते\nकृत सुरतारक सङ्गरतारक सङ्गरतारक सूनुसुते ।\nसुरथसमाधि समानसमाधि समाधिसमाधि सुजातरते\n${REFRAIN}`,
          meaning: {
            en: 'A verse of word-play: you outshine the thousand-rayed Sun and are praised by him with his thousand hands; your son Skanda fought the battle against Tāraka to save the gods; you delight in King Suratha and the merchant Samādhi, who worshipped you with equal devotion in deep meditation: victory to you, slayer of Mahiṣa!',
            kn: 'ಶ್ಲೇಷದ ಶ್ಲೋಕ: ಸಾವಿರ ಕಿರಣಗಳ ಸೂರ್ಯನನ್ನೂ ಮೀರಿಸುವವಳೇ, ಅವನಿಂದ ಸ್ತುತಳಾದವಳೇ, ದೇವತೆಗಳನ್ನು ಕಾಪಾಡಲು ತಾರಕಾಸುರನೊಡನೆ ಯುದ್ಧಮಾಡಿದ ಸ್ಕಂದನ ತಾಯಿಯೇ, ಸಮಾನ ಭಕ್ತಿಯಿಂದ ಆಳವಾದ ಸಮಾಧಿಯಲ್ಲಿ ನಿನ್ನನ್ನು ಆರಾಧಿಸಿದ ಸುರಥರಾಜ ಮತ್ತು ಸಮಾಧಿ ವೈಶ್ಯರಲ್ಲಿ ಪ್ರೀತಿಯುಳ್ಳವಳೇ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 18,
          text: `पदकमलं करुणानिलये वरिवस्यति योऽनुदिनं स शिवे\nअयि कमले कमलानिलये कमलानिलयः स कथं न भवेत् ।\nतव पदमेव परम्पदमित्यनुशीलयतो मम किं न शिवे\n${REFRAIN}`,
          meaning: {
            en: 'O abode of compassion, O auspicious one: he who serves your lotus feet day after day, O Kamalā who dwells in the lotus, how could he not become a home of fortune? As I hold that your feet alone are the highest state, what could I lack, O Śivā? Victory to you, slayer of Mahiṣa!',
            kn: 'ಕರುಣೆಯ ನೆಲೆಯೇ, ಮಂಗಳೆಯೇ, ನಿನ್ನ ಪಾದಕಮಲಗಳನ್ನು ಪ್ರತಿದಿನವೂ ಸೇವಿಸುವವನು, ಕಮಲವಾಸಿನಿಯಾದ ಕಮಲೆಯೇ, ಸಂಪತ್ತಿನ ನೆಲೆಯಾಗದೆ ಹೇಗಿರುವನು? ನಿನ್ನ ಪಾದವೇ ಪರಮಪದವೆಂದು ಧ್ಯಾನಿಸುವ ನನಗೆ, ಶಿವೆಯೇ, ಏನು ತಾನೇ ದೊರೆಯದು? — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 19,
          text: `कनकलसत्कल सिन्धुजलैरनुसिञ्चिनुते गुणरङ्गभुवं\nभजति स किं न शचीकुचकुम्भ तटीपरिरम्भ सुखानुभवम् ।\nतव चरणं शरणं करवाणि नतामरवाणि निवासि शिवं\n${REFRAIN}`,
          meaning: {
            en: 'He who bathes your courtyard, the stage of your virtues, with the shining waters of golden rivers: will he not enjoy the joys of heaven, like Indra embracing Śacī? O Goddess to whom the gods bow, in whom speech itself dwells, I take refuge at your auspicious feet: victory to you, slayer of Mahiṣa!',
            kn: 'ನಿನ್ನ ಗುಣಗಳ ರಂಗಭೂಮಿಯಾದ ಅಂಗಳವನ್ನು ಹೊಳೆಯುವ ಸ್ವರ್ಣನದಿಗಳ ನೀರಿನಿಂದ ತೊಳೆಯುವವನು ಶಚಿಯನ್ನು ಆಲಿಂಗಿಸುವ ಇಂದ್ರನಂತೆ ಸ್ವರ್ಗಸುಖವನ್ನು ಅನುಭವಿಸದೇ ಇರುವನೇ? ದೇವತೆಗಳು ನಮಿಸುವ, ವಾಣಿಯ ನೆಲೆಯಾದ ದೇವಿಯೇ, ನಿನ್ನ ಮಂಗಳಕರ ಪಾದಗಳಿಗೆ ಶರಣಾಗುತ್ತೇನೆ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 20,
          text: `तव विमलेन्दुकुलं वदनेन्दुमलं सकलं ननु कूलयते\nकिमु पुरुहूत पुरीन्दुमुखी सुमुखीभिरसौ विमुखीक्रियते ।\nमम तु मतं शिवनामधने भवती कृपया किमुत क्रियते\n${REFRAIN}`,
          meaning: {
            en: 'He who has found your moon-like face, pure as the spotless moon, is surely drawn to it entirely; would he be turned away by the moon-faced beauties of Indra’s city? To my mind, O Goddess whose wealth is the name of Śiva, what is there that your grace cannot do? Victory to you, slayer of Mahiṣa!',
            kn: 'ನಿರ್ಮಲಚಂದ್ರನಂತೆ ಶುದ್ಧವಾದ ನಿನ್ನ ಮುಖಚಂದ್ರನನ್ನು ಕಂಡವನು ಸಂಪೂರ್ಣವಾಗಿ ಅದರತ್ತಲೇ ಸೆಳೆಯಲ್ಪಡುತ್ತಾನೆ; ಇಂದ್ರನಗರಿಯ ಚಂದ್ರಮುಖಿ ಸುಂದರಿಯರು ಅವನನ್ನು ವಿಮುಖನನ್ನಾಗಿಸಬಲ್ಲರೇ? ಶಿವನಾಮವನ್ನೇ ಸಂಪತ್ತಾಗಿ ಹೊಂದಿರುವ ದೇವಿಯೇ, ನಿನ್ನ ಕೃಪೆಯಿಂದ ಆಗದಿರುವುದು ಏನಿದೆ ಎಂಬುದೇ ನನ್ನ ಮತ — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          n: 21,
          text: `अयि मयि दीनदयालुतया कृपयैव त्वया भवितव्यमुमे\nअयि जगतो जननी कृपयासि यथासि तथानुमितासिरते ।\nयदुचितमत्र भवत्युररीकुरुतादुरुतापमपाकुरुते\n${REFRAIN}`,
          meaning: {
            en: 'O Umā, kind to the helpless, you must surely be gracious to me. You are the Mother of the world, and just as you are gracious to all, so I take you to be gracious to me, O you who delight in your devotees. Do whatever is fitting here, and take away my great suffering: victory to you, slayer of Mahiṣa!',
            kn: 'ಉಮೆಯೇ, ದೀನರ ಮೇಲೆ ದಯೆಯುಳ್ಳವಳಾಗಿ ನೀನು ನನ್ನ ಮೇಲೆ ಕೃಪೆ ತೋರಲೇಬೇಕು. ಜಗತ್ತಿಗೆ ತಾಯಿಯಾದ ನೀನು ಎಲ್ಲರ ಮೇಲೆ ಹೇಗೆ ಕೃಪಾಳುವೋ ಹಾಗೆಯೇ ನನ್ನ ಮೇಲೂ ಎಂದು ನಾನು ನಂಬಿದ್ದೇನೆ. ಇಲ್ಲಿ ಯಾವುದು ಉಚಿತವೋ ಅದನ್ನು ಮಾಡು, ನನ್ನ ಅಪಾರ ತಾಪವನ್ನು ದೂರಮಾಡು — ಮಹಿಷಾಸುರಮರ್ದಿನಿಯೇ, ನಿನಗೆ ಜಯವಾಗಲಿ!',
          },
        },
        {
          text: 'इति श्रीमहिषासुरमर्दिनिस्तोत्रं सम्पूर्णम् ॥',
        },
      ],
    },
  ],
};
