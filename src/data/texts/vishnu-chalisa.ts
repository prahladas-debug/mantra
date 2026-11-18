/**
 * Śrī Viṣṇu Cālīsā, in Hindi/Awadhi, Devanagari. A traditional text of uncertain authorship; the last chaupai names
 * a petitioner "Nigam" ("निगम सदा ये विनय सुनावै"), and some sites attribute it to Sundaradāsa without evidence.
 *
 * Collated Nov 2026 against four typed copies:
 *   B  bhaktibharat.com (amp), "Vishnu Chalisa" (base);   A  aajtak.in, "Vishnu Chalisa";
 *   P  prabhatkhabar.com (amp), "Vishnu Chalisa";   S  shubhpanchang.com, "Vishnu Chalisa".
 * B, A and P agree word for word (apart from spelling and the verse numbers); S is a looser, partly respelt copy of the same
 * text. One reading is chosen against the base:
 *   v39 "सुत सम्पति दे सुख उपजाओ" (A, S; B and P print "सुख संपत्ति दे सुख उपजाओ", repeating "सुख"; the 2-2 split is decided by sense).
 * S readings not taken: d1 "करत" (for "कीरत"), v11 "थेनु", v13 "हिरण्याक्ष" (B, A, P "हरण्याक्ष"; the printed form is kept, and
 * the meaning names Hiranyaksha), v15 "अमि लख" (B, A, P "अमिलख"), v30 "देखहूँ में नित", v33 "छबि", v36 "सिवकाई".
 * A reads "जब पूजन" in v32 (B, S, P "जप पूजन"). v27 "हिरणाकुश" is printed so by all four copies and is kept.
 * Spelling-only variants (ं/न्, ए/ऐ, वराह/वाराह) follow B. There is no closing doha in any copy; the text is the opening doha
 * and the forty chaupai, which are numbered 1-40. Nukta letters are written without the dot. Meanings are original; no published
 * translation was used.
 */
import type { Mantra } from '../types';

export const vishnuChalisa: Mantra = {
  id: 'vishnu-chalisa',
  title: 'श्री विष्णु चालीसा',
  titleEn: 'Sri Vishnu Chalisa',
  category: 'chalisa',
  order: 23,
  deity: 'Śrī Viṣṇu',
  source: 'Traditional (author unknown; a last verse names Nigam), Hindi/Awadhi',
  summary: 'The forty-verse Hindi hymn to Vishnu: his form with the yellow robe, conch, discus and mace, his avatars as Rama, the Boar, the Fish and the Tortoise, the stories of Mohini, Jalandhara and Vrinda, Dhruva, Prahlada and Ajamila, and a humble prayer to be accepted as his servant. Recited on Thursdays and Ekadashi.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'विष्णु सुनिए विनय सेवक की चितलाय ।\nकीरत कुछ वर्णन करूं दीजै ज्ञान बताय ॥',
          meaning: { en: 'Hear my plea, Lord Vishnu, and give your servant your attention; I shall tell a little of your glory, so grant me the knowledge to do it.' },
        },
      ],
    },
    {
      title: 'चालीसा',
      titleEn: 'Chalisa',
      note: 'The forty verses.',
      verses: [
        {
          n: 1,
          text: 'नमो विष्णु भगवान खरारी ।\nकष्ट नशावन अखिल बिहारी ॥',
          meaning: { en: 'Salutations to Lord Vishnu, the enemy of Khara, who removes sorrow and sports through the whole world.' },
        },
        {
          n: 2,
          text: 'प्रबल जगत में शक्ति तुम्हारी ।\nत्रिभुवन फैल रही उजियारी ॥',
          meaning: { en: 'Your power is mighty in the world, and its light has spread through the three worlds.' },
        },
        {
          n: 3,
          text: 'सुन्दर रूप मनोहर सूरत ।\nसरल स्वभाव मोहनी मूरत ॥',
          meaning: { en: 'Your form is lovely and charming, your nature gentle, and your image captivating.' },
        },
        {
          n: 4,
          text: 'तन पर पीतांबर अति सोहत ।\nबैजन्ती माला मन मोहत ॥',
          meaning: { en: 'A yellow robe adorns your body, and the Vaijayanti garland charms the mind.' },
        },
        {
          n: 5,
          text: 'शंख चक्र कर गदा बिराजे ।\nदेखत दैत्य असुर दल भाजे ॥',
          meaning: { en: 'Conch, discus and mace shine in your hands; seeing them, demon hosts flee.' },
        },
        {
          n: 6,
          text: 'सत्य धर्म मद लोभ न गाजे ।\nकाम क्रोध मद लोभ न छाजे ॥',
          meaning: { en: 'Where truth and dharma stand, pride and greed do not roar, and lust, anger, pride and greed do not take hold.' },
        },
        {
          n: 7,
          text: 'संतभक्त सज्जन मनरंजन ।\nदनुज असुर दुष्टन दल गंजन ॥',
          meaning: { en: 'You delight saints, devotees and the good, and crush the hosts of demons and wicked ones.' },
        },
        {
          n: 8,
          text: 'सुख उपजाय कष्ट सब भंजन ।\nदोष मिटाय करत जन सज्जन ॥',
          meaning: { en: 'You bring happiness, break all sorrow, remove faults and make people good.' },
        },
        {
          n: 9,
          text: 'पाप काट भव सिंधु उतारण ।\nकष्ट नाशकर भक्त उबारण ॥',
          meaning: { en: 'You cut away sin, carry people across the ocean of worldly life, and end sorrow to rescue your devotees.' },
        },
        {
          n: 10,
          text: 'करत अनेक रूप प्रभु धारण ।\nकेवल आप भक्ति के कारण ॥',
          meaning: { en: 'Lord, you take many forms, and only for the sake of devotion.' },
        },
        {
          n: 11,
          text: 'धरणि धेनु बन तुमहिं पुकारा ।\nतब तुम रूप राम का धारा ॥',
          meaning: { en: 'When the Earth, in the form of a cow, called out to you, you took the form of Rama.' },
        },
        {
          n: 12,
          text: 'भार उतार असुर दल मारा ।\nरावण आदिक को संहारा ॥',
          meaning: { en: 'You lifted the burden of the earth, killed the demon hosts and destroyed Ravana and others.' },
        },
        {
          n: 13,
          text: 'आप वराह रूप बनाया ।\nहरण्याक्ष को मार गिराया ॥',
          meaning: { en: 'You took the form of the Boar and struck down Hiranyaksha.' },
        },
        {
          n: 14,
          text: 'धर मत्स्य तन सिंधु बनाया ।\nचौदह रतनन को निकलाया ॥',
          meaning: { en: 'You took the form of a Fish and made the ocean produce the fourteen jewels.' },
        },
        {
          n: 15,
          text: 'अमिलख असुरन द्वंद मचाया ।\nरूप मोहनी आप दिखाया ॥',
          meaning: { en: 'Seeing the nectar, the demons began to quarrel, and you showed them your Mohini form.' },
        },
        {
          n: 16,
          text: 'देवन को अमृत पान कराया ।\nअसुरन को छवि से बहलाया ॥',
          meaning: { en: 'You gave the gods the nectar to drink and beguiled the demons with your charm.' },
        },
        {
          n: 17,
          text: 'कूर्म रूप धर सिंधु मझाया ।\nमंद्राचल गिरि तुरत उठाया ॥',
          meaning: { en: 'In the form of the Tortoise you went into the ocean and quickly lifted Mount Mandara.' },
        },
        {
          n: 18,
          text: 'शंकर का तुम फन्द छुडाया ।\nभस्मासुर को रूप दिखाया ॥',
          meaning: { en: 'You freed Shankara from a trap by showing your form to Bhasmasura.' },
        },
        {
          n: 19,
          text: 'वेदन को जब असुर डुबाया ।\nकर प्रबंध उन्हें ढूंढवाया ॥',
          meaning: { en: 'When a demon drowned the Vedas, you arranged to have them found and brought back.' },
        },
        {
          n: 20,
          text: 'मोहित बनकर खलहि नचाया ।\nउसही कर से भस्म कराया ॥',
          meaning: { en: 'You became enchanting and made the wicked one dance, and had him burned to ash by his own hand.' },
        },
        {
          n: 21,
          text: 'असुर जलंधर अति बलदाई ।\nशंकर से उन कीन्ह लडाई ॥',
          meaning: { en: 'The very strong demon Jalandhara fought with Shankara.' },
        },
        {
          n: 22,
          text: 'हार पार शिव सकल बनाई ।\nकीन सती से छल खल जाई ॥',
          meaning: { en: 'Shiva was brought almost to defeat, and the wicked one went and tricked Sati (Parvati).' },
        },
        {
          n: 23,
          text: 'सुमिरन कीन तुम्हें शिवरानी ।\nबतलाई सब विपत कहानी ॥',
          meaning: { en: 'The queen of Shiva remembered you and told you the whole story of her trouble.' },
        },
        {
          n: 24,
          text: 'तब तुम बने मुनीश्वर ज्ञानी ।\nवृन्दा की सब सुरति भुलानी ॥',
          meaning: { en: 'Then you became a wise sage, and made Vrinda forget all her senses.' },
        },
        {
          n: 25,
          text: 'देखत तीन दनुज शैतानी ।\nवृन्दा आय तुम्हें लपटानी ॥',
          meaning: { en: 'Seeing the mischief of the three demons, Vrinda came and clung to you.' },
        },
        {
          n: 26,
          text: 'हो स्पर्श धर्म क्षति मानी ।\nहना असुर उर शिव शैतानी ॥',
          meaning: { en: 'On being touched she felt her dharma was lost, and Shiva struck down the wicked-hearted demon.' },
        },
        {
          n: 27,
          text: 'तुमने ध्रुव प्रहलाद उबारे ।\nहिरणाकुश आदिक खल मारे ॥',
          meaning: { en: 'You saved Dhruva and Prahlada, and killed Hiranyakashipu and other wicked ones.' },
        },
        {
          n: 28,
          text: 'गणिका और अजामिल तारे ।\nबहुत भक्त भव सिन्धु उतारे ॥',
          meaning: { en: 'You redeemed the courtesan and Ajamila, and carried many other devotees across the ocean of life.' },
        },
        {
          n: 29,
          text: 'हरहु सकल संताप हमारे ।\nकृपा करहु हरि सिरजन हारे ॥',
          meaning: { en: 'Remove all our sufferings; show grace, Hari, maker of creation.' },
        },
        {
          n: 30,
          text: 'देखहुं मैं निज दरश तुम्हारे ।\nदीन बन्धु भक्तन हितकारे ॥',
          meaning: { en: 'Let me see your vision, friend of the poor and well-wisher of devotees.' },
        },
        {
          n: 31,
          text: 'चहत आपका सेवक दर्शन ।\nकरहु दया अपनी मधुसूदन ॥',
          meaning: { en: 'Your servant longs for your sight; show mercy, Madhusudana.' },
        },
        {
          n: 32,
          text: 'जानूं नहीं योग्य जप पूजन ।\nहोय यज्ञ स्तुति अनुमोदन ॥',
          meaning: { en: 'I know no worship or chanting that is worthy; may my sacrifice and praise be accepted.' },
        },
        {
          n: 33,
          text: 'शीलदया सन्तोष सुलक्षण ।\nविदित नहीं व्रतबोध विलक्षण ॥',
          meaning: { en: 'I lack good conduct, kindness and contentment, and I know no vows or deeper knowledge.' },
        },
        {
          n: 34,
          text: 'करहुं आपका किस विधि पूजन ।\nकुमति विलोक होत दुख भीषण ॥',
          meaning: { en: 'How shall I worship you? Seeing my poor mind, I am greatly distressed.' },
        },
        {
          n: 35,
          text: 'करहुं प्रणाम कौन विधिसुमिरण ।\nकौन भांति मैं करहु समर्पण ॥',
          meaning: { en: 'By what method shall I bow, remember you and offer myself?' },
        },
        {
          n: 36,
          text: 'सुर मुनि करत सदा सेवकाई ।\nहर्षित रहत परम गति पाई ॥',
          meaning: { en: 'Gods and sages always serve you, and remain joyful and gain the highest state.' },
        },
        {
          n: 37,
          text: 'दीन दुखिन पर सदा सहाई ।\nनिज जन जान लेव अपनाई ॥',
          meaning: { en: 'You are always the helper of the poor and afflicted; take me as your own.' },
        },
        {
          n: 38,
          text: 'पाप दोष संताप नशाओ ।\nभव-बंधन से मुक्त कराओ ॥',
          meaning: { en: 'Destroy my sin, fault and suffering, and free me from the bonds of worldly life.' },
        },
        {
          n: 39,
          text: 'सुत सम्पति दे सुख उपजाओ ।\nनिज चरनन का दास बनाओ ॥',
          meaning: { en: 'Give me sons and wealth, and bring about happiness; make me the servant of your feet.' },
        },
        {
          n: 40,
          text: 'निगम सदा ये विनय सुनावै ।\nपढै सुनै सो जन सुख पावै ॥',
          meaning: { en: 'Nigam always offers this prayer; whoever reads or hears it gains happiness.' },
        },
      ],
    },
  ],
};
