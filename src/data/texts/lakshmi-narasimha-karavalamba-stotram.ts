/**
 * Lakshmi-Nrisimha Karavalamba Stotram (shrimat-payonidhi-niketana-chakrapane ...), attributed to Adi Shankaracharya;
 * seventeen verses, each ending "lakshmi-nrisimha mama dehi karavalambam".
 * Collated Nov 2026: sa.wikisource "लक्ष्मीनृसिंहकरुणारसस्तोत्रम्" (Shankaracharya, printed 1910), a second
 * sa.wikisource copy with variant readings, and stotranidhi.com "Lakshmi Nrusimha Karavalamba Stotram"
 * (Prabhata Stotranidhi). The 1910 print has slips (तनूरहस्य, मागधमूलं, भक्तानुरुक्त) that were corrected
 * against the other two. Readings chosen where they differ:
 *  v3 तनूरुहस्य (all agree on sense); v5 अगाधमूलं; v7 विषदिग्ध (1910 print and wikisource 2; stotranidhi विषदग्ध);
 *  v8 दुःखफलितं चकितं (wikisource 2, stotranidhi bracketed; the 1910 print has फलिनं);
 *  v10 दीनं विलोकय ... परिहारपरावतार (stotranidhi, wikisource 2; the 1910 print has विलोक्य ... कृतावतार);
 *  v16 भक्तानुरक्त. The longer 25-verse version found on some sites is not included.
 */
import type { Mantra } from '../types';

export const lakshmiNarasimhaKaravalambaStotram: Mantra = {
  id: 'lakshmi-narasimha-karavalamba-stotram',
  title: 'लक्ष्मीनृसिंहकरावलम्बस्तोत्रम्',
  titleEn: 'Lakshmi Narasimha Karavalamba Stotram',
  category: 'stotra',
  deity: 'Sri Lakshmi-Narasimha',
  source: 'Attributed to Adi Shankaracharya',
  summary: 'Seventeen verses to Lakshmi-Nrisimha. In each the devotee describes one anguish of worldly life - the forest fire of samsara, the net, the well, the elephant, the serpent, the tree, the sea, the beasts, the agents of Yama - and ends with the refrain "O Lakshmi-Nrisimha, give me your hand to hold". Recited for protection and freedom from fear.',
  summaryKn: 'ಲಕ್ಷ್ಮೀನೃಸಿಂಹನನ್ನು ಕುರಿತ ಹದಿನೇಳು ಶ್ಲೋಕಗಳು. ಪ್ರತಿ ಶ್ಲೋಕದಲ್ಲೂ ಸಂಸಾರದ ಒಂದೊಂದು ಸಂಕಟ — ಕಾಡ್ಗಿಚ್ಚು, ಬಲೆ, ಬಾವಿ, ಆನೆ, ಹಾವು, ಮರ, ಸಮುದ್ರ, ಕಾಡುಮೃಗಗಳು, ಯಮಭಟರು — ವರ್ಣಿತವಾಗಿ “ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆ ಕೊಡು” ಎಂಬ ಪಲ್ಲವಿಯಿಂದ ಮುಗಿಯುತ್ತದೆ. ರಕ್ಷೆ ಮತ್ತು ಭಯನಿವಾರಣೆಗಾಗಿ ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'स्तोत्रम्',
      titleEn: 'Stotram',
      verses: [
        {
          n: 1,
          text: 'श्रीमत्पयोनिधिनिकेतनचक्रपाणे\nभोगीन्द्रभोगमणिराजितपुण्यमूर्ते ।\nयोगीश शाश्वत शरण्य भवाब्धिपोत\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'O Chakrapani who dwell in the ocean of milk, holy form shining with the jewels on the hoods of the king of serpents, Lord of yogis, eternal refuge, the boat over the sea of becoming! O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ನೆಲೆಸಿದ ಚಕ್ರಪಾಣಿಯೇ, ಶೇಷನ ಹೆಡೆಗಳ ಮಣಿಗಳಿಂದ ಶೋಭಿಸುವ ಪುಣ್ಯಮೂರ್ತಿಯೇ, ಯೋಗೀಶ್ವರನೇ, ಶಾಶ್ವತ ಶರಣ್ಯನೇ, ಸಂಸಾರಸಾಗರವನ್ನು ದಾಟಿಸುವ ನಾವೆಯೇ! ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 2,
          text: 'ब्रह्मेन्द्ररुद्रमरुदर्ककिरीटकोटि-\n-सङ्घट्टिताङ्घ्रिकमलामलकान्तिकान्त ।\nलक्ष्मीलसत्कुचसरोरुहराजहंस\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'Whose lotus feet are touched by the crowns of Brahma, Indra, Rudra, the Maruts and the Sun, lover of the pure radiance of Lakshmi, royal swan on the lotus-breasts of Lakshmi! O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಬ್ರಹ್ಮ, ಇಂದ್ರ, ರುದ್ರ, ಮರುತ್ತುಗಳು, ಸೂರ್ಯ — ಇವರ ಕೋಟ ಕಿರೀಟಗಳು ತಾಗುವ ಪಾದಕಮಲಗಳುಳ್ಳವನೇ, ಶುದ್ಧಕಾಂತಿಯಿಂದ ಮನೋಹರನೇ, ಲಕ್ಷ್ಮಿಯ ಕಮಲದಂತಹ ವಕ್ಷಸ್ಥಲದ ರಾಜಹಂಸನೇ! ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 3,
          text: 'संसारदावदहनाकरभीकरोरु-\n-ज्वालावलीभिरतिदग्धतनूरुहस्य ।\nत्वत्पादपद्मसरसीरुहमागतस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'I whose body\'s very hairs are scorched by the fearful tall flames of the forest fire of samsara, have come to the lotus of your feet. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಸಂಸಾರವೆಂಬ ಕಾಡ್ಗಿಚ್ಚಿನ ಭಯಂಕರ ಎತ್ತರದ ಜ್ವಾಲೆಗಳಿಂದ ರೋಮರೋಮವೂ ಸುಟ್ಟುಹೋದ, ನಿನ್ನ ಪಾದಕಮಲವೆಂಬ ಸರೋವರಕ್ಕೆ ಬಂದ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 4,
          text: 'संसारजालपतितस्य जगन्निवास\nसर्वेन्द्रियार्थबडिशाग्रझषोपमस्य ।\nप्रोत्कम्पितप्रचुरतालुकमस्तकस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'O dwelling-place of the world: I am fallen in the net of samsara, like a fish on the hook-point of all sense objects, my palate and head trembling greatly. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಜಗನ್ನಿವಾಸನೇ, ಸಂಸಾರದ ಬಲೆಯಲ್ಲಿ ಬಿದ್ದವನು, ಎಲ್ಲ ಇಂದ್ರಿಯ ವಿಷಯಗಳೆಂಬ ಗಾಳದ ತುದಿಗೆ ಸಿಕ್ಕಿದ ಮೀನಿನಂತಿರುವವನು, ಅಂಗುಳು ಮತ್ತು ತಲೆ ತುಂಬ ನಡುಗುತ್ತಿರುವವನು ನಾನು — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 5,
          text: 'संसारकूपमतिघोरमगाधमूलं\nसम्प्राप्य दुःखशतसर्पसमाकुलस्य ।\nदीनस्य देव कृपया पदमागतस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'I have fallen into the dreadful, bottomless well of samsara, teeming with the hundred serpents of sorrow; O Lord, wretched, I have come to your feet for mercy. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಅತಿಭಯಂಕರವೂ ತಳವಿಲ್ಲದ್ದೂ ಆದ ಸಂಸಾರದ ಬಾವಿಯಲ್ಲಿ ಬಿದ್ದು, ನೂರಾರು ದುಃಖಸರ್ಪಗಳಿಂದ ಮುತ್ತಲ್ಪಟ್ಟ, ದೀನನಾಗಿ ಕರುಣೆಗಾಗಿ ನಿನ್ನ ಪಾದಕ್ಕೆ ಬಂದ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 6,
          text: 'संसारभीकरकरीन्द्रकराभिघात-\n-निष्पीड्यमानवपुषः सकलार्तिनाश ।\nप्राणप्रयाणभवभीतिसमाकुलस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'O destroyer of all suffering: my body is crushed by the blows of the trunk of the fearsome elephant of samsara, and I am distraught with the terror of death and rebirth when the breath departs. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಸಕಲ ಆರ್ತಿಯನ್ನು ನಾಶಮಾಡುವವನೇ, ಸಂಸಾರವೆಂಬ ಭಯಂಕರ ಗಜೇಂದ್ರನ ಸೊಂಡಿಲಿನ ಏಟುಗಳಿಂದ ನಜ್ಜುಗುಜ್ಜಾದ ದೇಹವುಳ್ಳ, ಪ್ರಾಣ ಹೊರಡುವಾಗ ಬರುವ ಜನ್ಮ-ಮರಣ ಭಯದಿಂದ ತಲ್ಲಣಿಸುತ್ತಿರುವ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 7,
          text: 'संसारसर्पविषदिग्धमहोग्रतीव्र-\n-दंष्ट्राग्रकोटिपरिदष्टविनष्टमूर्तेः ।\nनागारिवाहन सुधाब्धिनिवास शौरे\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'O Shauri, whose vehicle is Garuda, enemy of serpents, dweller in the ocean of nectar: my body is ruined, bitten by the tips of the terrible, sharp fangs of the serpent of samsara, dripping with poison. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಗರುಡವಾಹನನೇ, ಸುಧಾಸಾಗರವಾಸಿಯೇ, ಶೌರಿಯೇ, ಸಂಸಾರಸರ್ಪದ ವಿಷಲೇಪಿತ ಮಹೋಗ್ರ ತೀಕ್ಷ್ಣ ಕೋರೆಗಳ ತುದಿಗಳಿಂದ ಕಚ್ಚಲ್ಪಟ್ಟು ನಾಶವಾದ ದೇಹವುಳ್ಳ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 8,
          text: 'संसारवृक्षमघबीजमनन्तकर्म-\n-शाखायुतं करणपत्रमनङ्गपुष्पम् ।\nआरुह्य दुःखफलितं चकितं दयालो\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'O merciful One: I climbed the tree of samsara - its seed is sin, its branches endless actions, its leaves the senses, its flowers desire - which bears the fruit of sorrow, and I now hang there frightened. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ದಯಾಳುವೇ, ಪಾಪವೇ ಬೀಜ, ಅನಂತ ಕರ್ಮಗಳೇ ಕೊಂಬೆಗಳು, ಇಂದ್ರಿಯಗಳೇ ಎಲೆಗಳು, ಕಾಮವೇ ಹೂವು ಆಗಿರುವ, ದುಃಖವೆಂಬ ಹಣ್ಣು ಬಿಡುವ ಸಂಸಾರವೃಕ್ಷವನ್ನು ಹತ್ತಿ ಭೀತನಾಗಿರುವ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 9,
          text: 'संसारसागरविशालकरालकाल-\n-नक्रग्रहग्रसितनिग्रहविग्रहस्य ।\nव्यग्रस्य रागनिचयोर्मिनिपीडितस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'I am seized by the great and terrible crocodile of Time in the sea of samsara, my body helplessly held fast, restless, battered by the waves of countless attachments. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಸಂಸಾರಸಾಗರದ ವಿಶಾಲ ಭಯಂಕರ ಕಾಲವೆಂಬ ಮೊಸಳೆಯ ಹಿಡಿತದಲ್ಲಿ ಸಿಲುಕಿ ಅಸಹಾಯವಾದ ದೇಹವುಳ್ಳ, ಚಡಪಡಿಸುವ, ರಾಗಗಳ ರಾಶಿಯೆಂಬ ಅಲೆಗಳಿಂದ ಪೀಡಿತನಾದ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 10,
          text: 'संसारसागरनिमज्जनमुह्यमानं\nदीनं विलोकय विभो करुणानिधे माम् ।\nप्रह्लादखेदपरिहारपरावतार\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'I am bewildered, sinking in the sea of samsara: O all-pervading Lord, treasure of compassion, look upon me, wretched; you who took an incarnation solely to end Prahlada\'s distress! O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಸಂಸಾರಸಾಗರದಲ್ಲಿ ಮುಳುಗಿ ಮೂಢನಾಗುತ್ತಿರುವ ದೀನನಾದ ನನ್ನನ್ನು, ವಿಭುವೇ, ಕರುಣಾನಿಧಿಯೇ, ನೋಡು; ಪ್ರಹ್ಲಾದನ ಸಂಕಟವನ್ನು ನೀಗಿಸಲೆಂದೇ ಅವತರಿಸಿದವನೇ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 11,
          text: 'संसारघोरगहने चरतो मुरारे\nमारोग्रभीकरमृगप्रचुरार्दितस्य ।\nआर्तस्य मत्सरनिदाघसुदुःखितस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'O Murari: I wander in the dense, terrible forest of samsara, tormented by the many fierce, frightening beasts of Kama (desire); distressed, and sorely afflicted by the summer heat of envy. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಮುರಾರಿಯೇ, ಸಂಸಾರವೆಂಬ ಘೋರ ಕಾಡಿನಲ್ಲಿ ಅಲೆಯುತ್ತಾ, ಕಾಮನೆಂಬ ಉಗ್ರ ಭಯಂಕರ ಮೃಗಗಳ ಹಿಂಡಿನಿಂದ ಪೀಡಿತನಾಗಿ, ಮತ್ಸರವೆಂಬ ಬೇಸಗೆಯ ಬಿಸಿಲಿನಿಂದ ತುಂಬ ನೊಂದ ಆರ್ತನಾದ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 12,
          text: 'बद्ध्वा गले यमभटा बहुतर्जयन्तः\nकर्षन्ति यत्र भवपाशशतैर्युतं माम् ।\nएकाकिनं परवशं चकितं दयालो\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'O merciful One: where the soldiers of Yama, binding my neck and threatening me again and again, drag me along with hundreds of nooses of worldly bonds, alone, helpless and terrified. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ದಯಾಳುವೇ, ಯಮಭಟರು ನನ್ನ ಕೊರಳಿಗೆ ಕಟ್ಟಿ ಪದೇ ಪದೇ ಬೆದರಿಸುತ್ತಾ ನೂರಾರು ಸಂಸಾರಪಾಶಗಳೊಂದಿಗೆ ಎಳೆದೊಯ್ಯುವಾಗ, ಒಂಟಿಯಾಗಿ, ಪರಾಧೀನನಾಗಿ, ಹೆದರಿರುವ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 13,
          text: 'लक्ष्मीपते कमलनाभ सुरेश विष्णो\nयज्ञेश यज्ञ मधुसूदन विश्वरूप ।\nब्रह्मण्य केशव जनार्दन वासुदेव\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'O Lord of Lakshmi, Lotus-naveled, Lord of the gods, Vishnu, Lord of sacrifice and sacrifice itself, Madhusudana, Cosmic Form, friend of the brahmins, Keshava, Janardana, Vasudeva! O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಲಕ್ಷ್ಮೀಪತಿಯೇ, ಕಮಲನಾಭನೇ, ಸುರೇಶನೇ, ವಿಷ್ಣುವೇ, ಯಜ್ಞೇಶನೇ, ಯಜ್ಞಸ್ವರೂಪನೇ, ಮಧುಸೂದನನೇ, ವಿಶ್ವರೂಪನೇ, ಬ್ರಹ್ಮಣ್ಯನೇ, ಕೇಶವನೇ, ಜನಾರ್ದನನೇ, ವಾಸುದೇವನೇ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 14,
          text: 'एकेन चक्रमपरेण करेण शङ्ख-\n-मन्येन सिन्धुतनयामवलम्ब्य तिष्ठन् ।\nवामेतरेण वरदाभयपद्मचिह्नं\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'With one hand holding the discus, with another the conch, with another embracing the daughter of the ocean (Lakshmi) as you stand, and with the right hand showing the sign of boon, fearlessness and the lotus — O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಒಂದು ಕೈಯಲ್ಲಿ ಚಕ್ರ, ಇನ್ನೊಂದರಲ್ಲಿ ಶಂಖ, ಮತ್ತೊಂದರಿಂದ ಸಾಗರಪುತ್ರಿಯಾದ ಲಕ್ಷ್ಮಿಯನ್ನು ಆಲಿಂಗಿಸಿ ನಿಂತಿರುವ, ಬಲಗೈಯಿಂದ ವರ, ಅಭಯ, ಪದ್ಮ ಮುದ್ರೆಗಳನ್ನು ತೋರುವ ನಿನ್ನ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 15,
          text: 'अन्धस्य मे हृतविवेकमहाधनस्य\nचोरैर्महाबलिभिरिन्द्रियनामधेयैः ।\nमोहान्धकारकुहरे विनिपातितस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'I am blind; the great wealth of my discrimination has been stolen by the mighty robbers called the senses, and I am thrown into the cave of the darkness of delusion. O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ನಾನು ಕುರುಡನಾಗಿದ್ದೇನೆ; ವಿವೇಕವೆಂಬ ಮಹಾಧನವನ್ನು ಇಂದ್ರಿಯಗಳೆಂಬ ಮಹಾಬಲಿಷ್ಠ ಕಳ್ಳರು ಕದ್ದಿದ್ದಾರೆ; ಮೋಹಾಂಧಕಾರದ ಗುಹೆಯಲ್ಲಿ ಬಿದ್ದಿರುವ ನನಗೆ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 16,
          text: 'प्रह्लादनारदपराशरपुण्डरीक-\n-व्यासादिभागवतपुङ्गवहृन्निवास ।\nभक्तानुरक्तपरिपालनपारिजात\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥',
          meaning: {
            en: 'You who dwell in the hearts of the foremost devotees - Prahlada, Narada, Parashara, Pundarika, Vyasa and others - the wish-granting parijata tree that protects those who love you! O Lakshmi-Nrisimha, give me your hand to hold.',
            kn: 'ಪ್ರಹ್ಲಾದ, ನಾರದ, ಪರಾಶರ, ಪುಂಡರೀಕ, ವ್ಯಾಸ ಮೊದಲಾದ ಶ್ರೇಷ್ಠ ಭಾಗವತರ ಹೃದಯದಲ್ಲಿ ನೆಲೆಸಿರುವವನೇ, ಭಕ್ತಾನುರಕ್ತರನ್ನು ಪರಿಪಾಲಿಸುವ ಪಾರಿಜಾತವೇ — ಹೇ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ, ನನಗೆ ನಿನ್ನ ಕೈಯ ಆಸರೆಯನ್ನು ಕೊಡು.',
          },
        },
        {
          n: 17,
          text: 'लक्ष्मीनृसिंहचरणाब्जमधुव्रतेन\nस्तोत्रं कृतं शुभकरं भुवि शङ्करेण ।\nये तत्पठन्ति मनुजा हरिभक्तियुक्ता-\n-स्ते यान्ति तत्पदसरोजमखण्डरूपम् ॥',
          meaning: {
            en: 'This auspicious hymn was composed on earth by Shankara, a bee at the lotus feet of Lakshmi-Nrisimha. Those people who recite it with devotion to Hari reach his lotus feet in unbroken fullness.',
            kn: 'ಲಕ್ಷ್ಮೀನೃಸಿಂಹನ ಪಾದಕಮಲಗಳ ದುಂಬಿಯಾದ ಶಂಕರನಿಂದ ಭೂಮಿಯಲ್ಲಿ ಈ ಮಂಗಳಕರ ಸ್ತೋತ್ರ ರಚಿತವಾಯಿತು. ಹರಿಭಕ್ತಿಯಿಂದ ಇದನ್ನು ಪಠಿಸುವ ಜನರು ಅಖಂಡರೂಪವಾದ ಅವನ ಪಾದಕಮಲವನ್ನು ಸೇರುತ್ತಾರೆ.',
          },
        },
        {
          text: 'इति श्रीमत्परमहंसपरिव्राजकाचार्य श्रीमच्छङ्करभगवत्पादकृतं लक्ष्मीनृसिंहकरावलम्बस्तोत्रं सम्पूर्णम् ॥',
          meaning: {
            en: 'Thus ends the Lakshmi-Nrisimha Karavalamba Stotram composed by the revered Shankara, the paramahamsa, wandering teacher.',
            kn: 'ಹೀಗೆ ಪರಮಹಂಸ ಪರಿವ್ರಾಜಕಾಚಾರ್ಯರಾದ ಶ್ರೀಶಂಕರ ಭಗವತ್ಪಾದರು ರಚಿಸಿದ ಲಕ್ಷ್ಮೀನೃಸಿಂಹ ಕರಾವಲಂಬ ಸ್ತೋತ್ರ ಸಂಪೂರ್ಣವಾಯಿತು.',
          },
        },
      ],
    },
  ],
};
