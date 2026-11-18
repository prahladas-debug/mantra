/**
 * Śrī Lakṣmī Cālīsā, attributed to Rāmadāsa (named in the closing verses), Hindi/Awadhi, in Devanagari.
 *
 * Collated Nov 2026 against four typed copies of the widely printed text:
 *   B  bhaktibharat.com "Shri Lakshmi Chalisa" (base);  S  shubhpanchang.com "Lakshmi Chalisa";
 *   H  shlokam.org "Lakshmi Chalisa" (numbered 1-39, with a note on printings that add a fortieth);
 *   T  hindutone.com "Lakshmi Chalisa lyrics" (consulted for the text only; its translation was not used).
 * (dekhopanchang.com gives a quite different short version and was not used.) The two opening dohas
 * (doha and sortha) are in S, B and H's note; the longer refrain "सिन्धु सुता विष्णुप्रिये …" is in T and
 * H's note only and is left out. The forty chaupai are numbered; the doha, sortha and closing dohas
 * are not. Readings chosen against the base B (4):
 *   c4 "तुम ही हो घट घट के वासी" (H, T; B "सब घट घट वासी");  c11 "प्रभुहिं बनि दासी" (H, T; B "प्रभु बनि");
 *   c15 "अपनायो" (S, H, T; B "अपनाया");  closing doha "शत्रु का नाश" (H; B "शत्रु को", S "दुश्मन का").
 * Order and extent: S puts "केहि प्रकार …" before "बिन दर्शन …"; B, H, T put it last, which is followed.
 * The fortieth chaupai "रामदास अब कहै पुकारी । करो दूर तुम विपति हमारी" is in T and in H's note on
 * fuller printings, but not in S or B; it is kept so that the Chalisa has its forty verses. The base
 * misprints (c20 "नोई", c35 "दजै") are corrected from the others. Tie readings kept as in B: c16 "तुम सम …
 * कहँ लौं" (S, B; H, T "तुम सब … कहं तक"); c32 "लक्ष्मी भवानी … हो" (S, B; H, T "महारानी … जो");
 * c36 "तुमहि अछत" (S, B; H, T "अक्षत"). Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const lakshmiChalisa: Mantra = {
  id: 'lakshmi-chalisa',
  title: 'श्री लक्ष्मी चालीसा',
  titleEn: 'Sri Lakshmi Chalisa',
  category: 'chalisa',
  order: 11,
  deity: 'Śrī Lakṣmī',
  source: 'Rāmadāsa (named in the closing verses), Hindi/Awadhi',
  summary: 'The Hindi hymn to Lakshmi: a prayer to the ocean-born Mother to dwell in the heart, her service to Vishnu through every avatar from the churning of the ocean to Sita at Janakpur, the fruits of reciting the Chalisa, and a plea for forgiveness, darshan and relief from suffering. Recited on Fridays and at Diwali.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening dohas',
      verses: [
        {
          text: 'मातु लक्ष्मी करि कृपा, करो हृदय में वास ।\nमनोकामना सिद्ध करि, पुरवहु मेरी आस ॥',
          meaning: { en: 'Mother Lakshmi, be gracious and dwell in my heart; make my wishes come true and fulfil my hope.' },
        },
        {
          text: 'यही मोर अरदास, हाथ जोड विनती करूँ ।\nसब विधि करौ सुवास, जय जननि जगदम्बिका ॥',
          meaning: { en: 'This is my petition; with folded hands I pray: make my dwelling pleasant in every way. Victory to Mother Jagadambika.' },
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
          text: 'सिन्धु सुता मैं सुमिरौं तोही ।\nज्ञान बुद्धि विद्या दो मोही ॥',
          meaning: { en: 'Daughter of the ocean, I remember you; grant me knowledge, intelligence and learning.' },
        },
        {
          n: 2,
          text: 'तुम समान नहिं कोई उपकारी ।\nसब विधि पुरवहु आस हमारी ॥',
          meaning: { en: 'No one is as kind a benefactor as you; fulfil our hopes in every way.' },
        },
        {
          n: 3,
          text: 'जय जय जगत जननि जगदम्बा ।\nसबकी तुम ही हो अवलम्बा ॥',
          meaning: { en: 'Victory, victory to the mother of the world, Jagadamba; you alone are the support of all.' },
        },
        {
          n: 4,
          text: 'तुम ही हो घट घट के वासी ।\nविनती यही हमारी खासी ॥',
          meaning: { en: 'You dwell in every heart; this is my special prayer.' },
        },
        {
          n: 5,
          text: 'जगजननी जय सिन्धु कुमारी ।\nदीनन की तुम हो हितकारी ॥',
          meaning: { en: 'Victory to the mother of the world, daughter of the ocean; you are the well-wisher of the poor.' },
        },
        {
          n: 6,
          text: 'विनवौं नित्य तुमहिं महारानी ।\nकृपा करौ जग जननि भवानी ॥',
          meaning: { en: 'I pray to you every day, great queen; be gracious, Bhavani, mother of the world.' },
        },
        {
          n: 7,
          text: 'केहि विधि स्तुति करौं तिहारी ।\nसुधि लीजै अपराध बिसारी ॥',
          meaning: { en: 'How shall I praise you? Take notice of me and forget my faults.' },
        },
        {
          n: 8,
          text: 'कृपा दृष्टि चितवो मम ओरी ।\nजगजननी विनती सुन मोरी ॥',
          meaning: { en: 'Turn a gracious glance toward me; mother of the world, hear my prayer.' },
        },
        {
          n: 9,
          text: 'ज्ञान बुद्धि जय सुख की दाता ।\nसंकट हरो हमारी माता ॥',
          meaning: { en: 'Victory to the giver of knowledge, wisdom and happiness; Mother, remove our troubles.' },
        },
        {
          n: 10,
          text: 'क्षीरसिन्धु जब विष्णु मथायो ।\nचौदह रत्न सिन्धु में पायो ॥',
          meaning: { en: 'When Vishnu had the ocean of milk churned, fourteen jewels were found in the ocean.' },
        },
        {
          n: 11,
          text: 'चौदह रत्न में तुम सुखरासी ।\nसेवा कियो प्रभुहिं बनि दासी ॥',
          meaning: { en: 'Among the fourteen jewels you were the heap of bliss, and you served the Lord as his handmaid.' },
        },
        {
          n: 12,
          text: 'जब जब जन्म जहाँ प्रभु लीन्हा ।\nरूप बदल तहँ सेवा कीन्हा ॥',
          meaning: { en: 'Whenever and wherever the Lord took birth, you changed your form and served him there.' },
        },
        {
          n: 13,
          text: 'स्वयं विष्णु जब नर तनु धारा ।\nलीन्हेउ अवधपुरी अवतारा ॥',
          meaning: { en: 'When Vishnu himself took a human body, he was born in Ayodhya.' },
        },
        {
          n: 14,
          text: 'तब तुम प्रगट जनकपुर माहीं ।\nसेवा कियो हृदय पुलकाहीं ॥',
          meaning: { en: 'Then you appeared in Janakpur and served him with a heart thrilled with joy.' },
        },
        {
          n: 15,
          text: 'अपनायो तोहि अन्तर्यामी ।\nविश्व विदित त्रिभुवन की स्वामी ॥',
          meaning: { en: 'The all-knowing Lord made you his own; you are known to the whole world as mistress of the three worlds.' },
        },
        {
          n: 16,
          text: 'तुम सम प्रबल शक्ति नहिं आनी ।\nकहँ लौं महिमा कहौं बखानी ॥',
          meaning: { en: 'No other power is as mighty as you; how far can I go in describing your glory?' },
        },
        {
          n: 17,
          text: 'मन क्रम वचन करै सेवकाई ।\nमन इच्छित वांछित फल पाई ॥',
          meaning: { en: 'One who serves you in thought, deed and word obtains the fruit his heart desires.' },
        },
        {
          n: 18,
          text: 'तजि छल कपट और चतुराई ।\nपूजहिं विविध भाँति मन लाई ॥',
          meaning: { en: 'Giving up deceit, trickery and cleverness, they worship you in many ways with the whole mind.' },
        },
        {
          n: 19,
          text: 'और हाल मैं कहौं बुझाई ।\nजो यह पाठ करै मन लाई ॥',
          meaning: { en: 'Let me explain further: whoever recites this with his heart in it,' },
        },
        {
          n: 20,
          text: 'ताको कोई कष्ट न होई ।\nमन इच्छित पावै फल सोई ॥',
          meaning: { en: 'will have no hardship and will receive the fruit he desires.' },
        },
        {
          n: 21,
          text: 'त्राहि त्राहि जय दुःख निवारिणि ।\nत्रिविध ताप भव बंधन हारिणी ॥',
          meaning: { en: 'Save us, save us; victory to you who remove sorrow and break the threefold suffering and the bondage of worldly life.' },
        },
        {
          n: 22,
          text: 'जो चालीसा पढै पढावै ।\nध्यान लगाकर सुनै सुनावै ॥',
          meaning: { en: 'One who reads this Chalisa or has it read, who listens to it or recites it with attention,' },
        },
        {
          n: 23,
          text: 'ताकौ कोई न रोग सतावै ।\nपुत्र आदि धन सम्पत्ति पावै ॥',
          meaning: { en: 'is troubled by no disease and gains sons, wealth and property.' },
        },
        {
          n: 24,
          text: 'पुत्रहीन अरु संपति हीना ।\nअन्ध बधिर कोढी अति दीना ॥',
          meaning: { en: 'Those without sons, without wealth, the blind, the deaf, the leper, the utterly wretched,' },
        },
        {
          n: 25,
          text: 'विप्र बोलाय कै पाठ करावै ।\nशंका दिल में कभी न लावै ॥',
          meaning: { en: 'should call a brahmin to recite it and never let doubt into the heart.' },
        },
        {
          n: 26,
          text: 'पाठ करावै दिन चालीसा ।\nता पर कृपा करैं गौरीसा ॥',
          meaning: { en: 'Whoever has it recited for forty days receives the grace of Gaurisa, the Lord of Gauri.' },
        },
        {
          n: 27,
          text: 'सुख सम्पत्ति बहुत सी पावै ।\nकमी नहीं काहू की आवै ॥',
          meaning: { en: 'He gains abundant comfort and wealth and never lacks anything.' },
        },
        {
          n: 28,
          text: 'बारह मास करै जो पूजा ।\nतेहि सम धन्य और नहिं दूजा ॥',
          meaning: { en: 'One who worships for twelve months is more blessed than anyone else.' },
        },
        {
          n: 29,
          text: 'प्रतिदिन पाठ करै मन माहीं ।\nउन सम कोइ जग में कहुं नाहीं ॥',
          meaning: { en: 'One who recites it every day with a devoted mind has no equal anywhere in the world.' },
        },
        {
          n: 30,
          text: 'बहुविधि क्या मैं करौं बडाई ।\nलेय परीक्षा ध्यान लगाई ॥',
          meaning: { en: 'How much more can I praise it? Test it for yourself with attention.' },
        },
        {
          n: 31,
          text: 'करि विश्वास करै व्रत नेमा ।\nहोय सिद्ध उपजै उर प्रेमा ॥',
          meaning: { en: 'Keep the vow and rule with faith; success comes and love springs up in the heart.' },
        },
        {
          n: 32,
          text: 'जय जय जय लक्ष्मी भवानी ।\nसब में व्यापित हो गुण खानी ॥',
          meaning: { en: 'Victory, victory, victory to Lakshmi Bhavani, mine of virtues, present in all.' },
        },
        {
          n: 33,
          text: 'तुम्हरो तेज प्रबल जग माहीं ।\nतुम सम कोउ दयालु कहुं नाहीं ॥',
          meaning: { en: 'Your radiance is mighty in the world; nowhere is anyone as merciful as you.' },
        },
        {
          n: 34,
          text: 'मोहि अनाथ की सुधि अब लीजै ।\nसंकट काटि भक्ति मोहि दीजै ॥',
          meaning: { en: 'Now take notice of me, a helpless one; cut away my troubles and give me devotion.' },
        },
        {
          n: 35,
          text: 'भूल चूक करि क्षमा हमारी ।\nदर्शन दीजै दशा निहारी ॥',
          meaning: { en: 'Forgive my lapses and mistakes; look at my plight and grant me your sight.' },
        },
        {
          n: 36,
          text: 'बिन दर्शन व्याकुल अधिकारी ।\nतुमहि अछत दुख सहते भारी ॥',
          meaning: { en: 'Without your sight this devotee is restless; while you are there, we still suffer greatly.' },
        },
        {
          n: 37,
          text: 'नहिं मोहिं ज्ञान बुद्धि है तन में ।\nसब जानत हो अपने मन में ॥',
          meaning: { en: 'I have no knowledge or sense in this body; you know everything in your own mind.' },
        },
        {
          n: 38,
          text: 'रूप चतुर्भुज करके धारण ।\nकष्ट मोर अब करहु निवारण ॥',
          meaning: { en: 'Taking your four-armed form, now remove my suffering.' },
        },
        {
          n: 39,
          text: 'केहि प्रकार मैं करौं बडाई ।\nज्ञान बुद्धि मोहि नहिं अधिकाई ॥',
          meaning: { en: 'How can I praise you? I have little knowledge or intelligence.' },
        },
        {
          n: 40,
          text: 'रामदास अब कहै पुकारी ।\nकरो दूर तुम विपति हमारी ॥',
          meaning: { en: 'Ramadasa now cries out: take away our misfortune.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing dohas',
      verses: [
        {
          text: 'त्राहि त्राहि दुख हारिणी, हरो बेगि सब त्रास ।\nजयति जयति जय लक्ष्मी, करो शत्रु का नाश ॥',
          meaning: { en: 'Save us, remover of sorrow; quickly take away all fear. Victory, victory to Lakshmi; destroy the enemy.' },
        },
        {
          text: 'रामदास धरि ध्यान नित, विनय करत कर जोर ।\nमातु लक्ष्मी दास पर, करहु दया की कोर ॥',
          meaning: { en: 'Ramadasa meditates daily and prays with folded hands: Mother Lakshmi, cast a glance of mercy on your servant.' },
        },
      ],
    },
  ],
};
