/**
 * Śrī Kṛṣṇa Cālīsā, attributed to Sundaradāsa (named in verse 38), Hindi/Braj, in Devanagari.
 *
 * Collated Nov 2026 against four typed copies of the widely printed text:
 *   B  bhaktibharat.com "Shri Krishna Chalisa" (base: numbered);  A  aajtak.in "Shri Krishna Chalisa";
 *   D  drikpanchang.com "Shree Krishna Chalisa";  S  shubhpanchang.com "Krishna Chalisa" (a looser,
 *   partly respelt copy). B and A agree throughout; D agrees with them in the chaupai but gives a
 *   different, partly garbled opening doha ("… पिताम्बर शुभ साज । … करहु कृपा हे रवि तनय …"), not followed.
 * The two opening dohas, the forty chaupai and the closing doha are as in B, A and S. The forty
 * chaupai are numbered; the dohas are not. Readings chosen against the base (4):
 *   c14 "मूसर धार" (S; B, A, D "मसूर", which is not a word that fits: मूसलाधार = pestle-thick);
 *   c18 "कीन्हें" (S; B, A, D "किन्हें", spelling, to rhyme with "लीन्हें");
 *   c24 "दै भीमहिं तृण चीर सहारा" ("भीमहिं" from S, for B/A/D "भिन्हीं", an evident corruption; "सहारा"
 *   from B, A, D; S "संहारा");  c37 "अस अनाथ के नाथ" (S; B, A, D "अस नाथ के नाथ", short by a syllable).
 * By majority against S: c5 "धरी तेरी … मनोरथ मेरो"; c8 "वैजयंती"; c12 "पूतनहि"; c16 "महं"; c23
 * "षट दश सहस"; c36; c37; c40 "जै". Misprints in B are corrected from A/D/S (c36 "ननन्दलाला"). Nukta
 * letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const krishnaChalisa: Mantra = {
  id: 'krishna-chalisa',
  title: 'श्री कृष्ण चालीसा',
  titleEn: 'Sri Krishna Chalisa',
  category: 'chalisa',
  order: 12,
  deity: 'Śrī Kṛṣṇa',
  source: 'Sundaradāsa (named in verse 38), Hindi/Braj',
  summary: 'The Hindi hymn to Krishna: his flute, dark beauty and festival of play; Putana, Kaliya, the lifting of Govardhana and the vision of the worlds in his mouth; the killing of Kamsa and rescue of his parents; Sudama, Vidura, Mira, Draupadi and the Gita; and a plea for forgiveness and darshan. Recited on Janmashtami and Wednesdays.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening dohas',
      verses: [
        {
          text: 'बंशी शोभित कर मधुर, नील जलद तन श्याम ।\nअरुण अधर जनु बिम्बफल, नयन कमल अभिराम ॥',
          meaning: { en: 'A sweet flute adorns your hand and your dark body is like a blue rain cloud; your red lips are like the bimba fruit and your lotus eyes are delightful.' },
        },
        {
          text: 'पूर्ण इन्द्र अरविन्द मुख, पीताम्बर शुभ साज ।\nजय मनमोहन मदन छवि, कृष्णचन्द्र महाराज ॥',
          meaning: { en: 'Your face is like the full moon and the lotus, your yellow robe a lovely dress; victory to the heart-stealer with the beauty of Cupid, King Krishnachandra.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      note: 'The forty verses.',
      verses: [
        {
          n: 1,
          text: 'जय यदुनन्दन जय जगवन्दन ।\nजय वसुदेव देवकी नन्दन ॥',
          meaning: { en: 'Victory to the joy of the Yadus, adored by the world, son of Vasudeva and Devaki.' },
        },
        {
          n: 2,
          text: 'जय यशुदा सुत नन्द दुलारे ।\nजय प्रभु भक्तन के दृग तारे ॥',
          meaning: { en: 'Victory to Yashoda\'s son, Nanda\'s darling, the pupil of his devotees\' eyes.' },
        },
        {
          n: 3,
          text: 'जय नट-नागर नाग नथैया ।\nकृष्ण कन्हैया धेनु चरैया ॥',
          meaning: { en: 'Victory to the clever dancer, tamer of the serpent, Krishna Kanhaiya, grazer of cows.' },
        },
        {
          n: 4,
          text: 'पुनि नख पर प्रभु गिरिवर धारो ।\nआओ दीनन कष्ट निवारो ॥',
          meaning: { en: 'You held up the great mountain on your fingernail; come and remove the troubles of the poor.' },
        },
        {
          n: 5,
          text: 'वंशी मधुर अधर धरी तेरी ।\nहोवे पूर्ण मनोरथ मेरो ॥',
          meaning: { en: 'Your sweet flute is raised to your lips; may my heart\'s wish be fulfilled.' },
        },
        {
          n: 6,
          text: 'आओ हरि पुनि माखन चाखो ।\nआज लाज भारत की राखो ॥',
          meaning: { en: 'Come, Hari, taste the butter once more; today protect the honour of Bharata\'s land.' },
        },
        {
          n: 7,
          text: 'गोल कपोल चिबुक अरुणारे ।\nमृदु मुस्कान मोहिनी डारे ॥',
          meaning: { en: 'Round cheeks and a reddish chin; a soft smile casts enchantment.' },
        },
        {
          n: 8,
          text: 'रंजित राजिव नयन विशाला ।\nमोर मुकुट वैजयंती माला ॥',
          meaning: { en: 'Broad, tinted lotus eyes, a peacock-feather crown and a Vaijayanti garland.' },
        },
        {
          n: 9,
          text: 'कुण्डल श्रवण पीतपट आछे ।\nकटि किंकणी काछन काछे ॥',
          meaning: { en: 'Earrings on your ears, a fine yellow cloth, a belt of little bells and the dhoti tucked at the waist.' },
        },
        {
          n: 10,
          text: 'नील जलज सुन्दर तनु सोहे ।\nछवि लखि सुर नर मुनिमन मोहे ॥',
          meaning: { en: 'Your beautiful body shines like a blue lotus; seeing it, gods, men and sages are enchanted.' },
        },
        {
          n: 11,
          text: 'मस्तक तिलक अलक घुंघराले ।\nआओ कृष्ण बांसुरी वाले ॥',
          meaning: { en: 'Tilak on the forehead and curling locks; come, Krishna of the flute.' },
        },
        {
          n: 12,
          text: 'करि पय पान पूतनहि तारयो ।\nअका बका कागासुर मारयो ॥',
          meaning: { en: 'Drinking her milk, you liberated Putana, and you killed Agha, Baka and the crow-demon.' },
        },
        {
          n: 13,
          text: 'मधुवन जलत अग्नि जब ज्वाला ।\nभै शीतल लखितहिं नन्दलाला ॥',
          meaning: { en: 'When flames of forest fire burned the Madhuvan, it turned cool at a mere glance from Nandalala.' },
        },
        {
          n: 14,
          text: 'सुरपति जब ब्रज चढयो रिसाई ।\nमूसर धार वारि वर्षाई ॥',
          meaning: { en: 'When angry Indra attacked Braj, he poured rain in pestle-thick streams.' },
        },
        {
          n: 15,
          text: 'लगत-लगत ब्रज चहन बहायो ।\nगोवर्धन नखधारि बचायो ॥',
          meaning: { en: 'Braj was about to be washed away, but you saved it by holding up Govardhana on your nail.' },
        },
        {
          n: 16,
          text: 'लखि यसुदा मन भ्रम अधिकाई ।\nमुख महं चौदह भुवन दिखाई ॥',
          meaning: { en: 'Seeing Yashoda\'s great confusion, you showed her the fourteen worlds inside your mouth.' },
        },
        {
          n: 17,
          text: 'दुष्ट कंस अति उधम मचायो ।\nकोटि कमल जब फूल मंगायो ॥',
          meaning: { en: 'Wicked Kamsa made great mischief and demanded crores of lotus flowers.' },
        },
        {
          n: 18,
          text: 'नाथि कालियहिं तब तुम लीन्हें ।\nचरणचिन्ह दै निर्भय कीन्हें ॥',
          meaning: { en: 'You then subdued Kaliya and made him fearless by leaving the marks of your feet on him.' },
        },
        {
          n: 19,
          text: 'करि गोपिन संग रास विलासा ।\nसबकी पूरण करी अभिलाषा ॥',
          meaning: { en: 'You played the rasa dance with the gopis and fulfilled everyone\'s wish.' },
        },
        {
          n: 20,
          text: 'केतिक महा असुर संहारयो ।\nकंसहि केस पकडि दै मारयो ॥',
          meaning: { en: 'You destroyed many mighty demons and killed Kamsa, seizing him by the hair.' },
        },
        {
          n: 21,
          text: 'मात-पिता की बन्दि छुडाई ।\nउग्रसेन कहं राज दिलाई ॥',
          meaning: { en: 'You freed your parents from prison and gave the kingdom back to Ugrasena.' },
        },
        {
          n: 22,
          text: 'महि से मृतक छहों सुत लायो ।\nमातु देवकी शोक मिटायो ॥',
          meaning: { en: 'You brought back the six dead sons from below the earth and ended Mother Devaki\'s grief.' },
        },
        {
          n: 23,
          text: 'भौमासुर मुर दैत्य संहारी ।\nलाये षट दश सहसकुमारी ॥',
          meaning: { en: 'You killed the demons Bhaumasura and Mura and brought back sixteen thousand maidens.' },
        },
        {
          n: 24,
          text: 'दै भीमहिं तृण चीर सहारा ।\nजरासिंधु राक्षस कहं मारा ॥',
          meaning: { en: 'By giving Bhima the hint of a blade of grass torn in two, you had the demon Jarasandha killed.' },
        },
        {
          n: 25,
          text: 'असुर बकासुर आदिक मारयो ।\nभक्तन के तब कष्ट निवारियो ॥',
          meaning: { en: 'You killed the demon Bakasura and others, and so ended your devotees\' troubles.' },
        },
        {
          n: 26,
          text: 'दीन सुदामा के दुःख टारयो ।\nतंदुल तीन मूंठ मुख डारयो ॥',
          meaning: { en: 'You took away poor Sudama\'s sorrow, eating three handfuls of his rice.' },
        },
        {
          n: 27,
          text: 'प्रेम के साग विदुर घर मांगे ।\nदुर्योधन के मेवा त्यागे ॥',
          meaning: { en: 'You asked for the loving dish of greens at Vidura\'s house and refused Duryodhana\'s delicacies.' },
        },
        {
          n: 28,
          text: 'लखि प्रेम की महिमा भारी ।\nऐसे श्याम दीन हितकारी ॥',
          meaning: { en: 'See the great glory of love: such is Shyama, the friend of the poor.' },
        },
        {
          n: 29,
          text: 'भारत के पारथ रथ हांके ।\nलिए चक्र कर नहिं बल ताके ॥',
          meaning: { en: 'You drove the chariot of Partha of Bharata\'s line; you took the discus in hand, and no strength could stand against you.' },
        },
        {
          n: 30,
          text: 'निज गीता के ज्ञान सुनाये ।\nभक्तन हृदय सुधा वर्षाये ॥',
          meaning: { en: 'You taught the knowledge of your own Gita and rained nectar into your devotees\' hearts.' },
        },
        {
          n: 31,
          text: 'मीरा थी ऐसी मतवाली ।\nविष पी गई बजाकर ताली ॥',
          meaning: { en: 'Mira was so intoxicated with love that she drank poison, clapping her hands.' },
        },
        {
          n: 32,
          text: 'राना भेजा सांप पिटारी ।\nशालिग्राम बने बनवारी ॥',
          meaning: { en: 'The Rana sent a basket with a snake in it, and Banavari became a shaligrama stone.' },
        },
        {
          n: 33,
          text: 'निज माया तुम विधिहिं दिखायो ।\nउर ते संशय सकल मिटायो ॥',
          meaning: { en: 'You showed your own maya even to Brahma and removed every doubt from the heart.' },
        },
        {
          n: 34,
          text: 'तब शत निन्दा करी तत्काला ।\nजीवन मुक्त भयो शिशुपाला ॥',
          meaning: { en: 'When Shishupala abused you a hundred times, he was at once set free.' },
        },
        {
          n: 35,
          text: 'जबहिं द्रौपदी टेर लगाई ।\nदीनानाथ लाज अब जाई ॥',
          meaning: { en: 'When Draupadi cried out, “Lord of the poor, my honour is going now!”' },
        },
        {
          n: 36,
          text: 'तुरतहिं वसन बने नन्दलाला ।\nबढे चीर भै अरि मुँह काला ॥',
          meaning: { en: 'At once Nandalala became her garment; the cloth grew longer and the enemy\'s face turned black with shame.' },
        },
        {
          n: 37,
          text: 'अस अनाथ के नाथ कन्हैया ।\nडूबत भंवर बचावत नैया ॥',
          meaning: { en: 'Such is Kanhaiya, lord of the helpless, who saves the boat sinking in the whirlpool.' },
        },
        {
          n: 38,
          text: 'सुन्दरदास आस उर धारी ।\nदयादृष्टि कीजै बनवारी ॥',
          meaning: { en: 'Sundaradasa holds hope in his heart: look on him with mercy, Banavari.' },
        },
        {
          n: 39,
          text: 'नाथ सकल मम कुमति निवारो ।\nक्षमहु बेगि अपराध हमारो ॥',
          meaning: { en: 'Lord, remove all my wrong-mindedness and quickly forgive my faults.' },
        },
        {
          n: 40,
          text: 'खोलो पट अब दर्शन दीजै ।\nबोलो कृष्ण कन्हैया की जै ॥',
          meaning: { en: 'Open the curtain and give your sight now; say, “Victory to Krishna Kanhaiya!”' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'यह चालीसा कृष्ण का, पाठ करै उर धारि ।\nअष्ट सिद्धि नवनिधि फल, लहै पदारथ चारि ॥',
          meaning: { en: 'Whoever recites this Krishna Chalisa, holding it in the heart, gains the eight siddhis, the nine treasures and the four goals of life.' },
        },
      ],
    },
  ],
};
