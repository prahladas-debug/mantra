/**
 * Jaya Bhairava Devā (Bhairava kī Āratī), the Hindi aarti to Bhairava as Baṭukanātha, sung on Saturdays, Bhairava Aṣṭamī and Bhairava Jayantī, in Devanagari.
 *
 * Collated Nov 2026 against five copies: bhaktibharat.com "Shri Bhairav Dev Ji Aarti" (B, base), aajtak.in "Kaal Bhairav Ji
 * Ki Aarti" (A), hindi.webdunia.com "Bhairav Aarti" (W), dharmsaar.com (D, repeats B) and pandit.com (P). B, A, W and P have the same
 * opening and six stanzas in the same order. Readings against the base: "गौरा देवी" (A, W, P) against B and D "गौर"; "तुम्हीं"
 * (A, W, P) against B "तुम्ही"; "श्वान" (B, D, P) against A and W "शवन"; "महिमा अमित" (B, A, D, P) against W "अमिट"; "जय जय भयहारी"
 * (B, D, P) against A and W "भयकारी"; "दर्शन दुःख सगरे खोवे" (A, W) against B, D and P "दर्शन दुःख खोवे"; "तेल चटकि दधि मिश्रित
 * भाषावलि तेरी" (A, W, P) against B "चटकी ... भाषावाली"; "करिये" (A, P) against B "कीजिये" and W "करिए"; "डमकावत" (A, W) against B
 * "दम्कावत" and P "जमकावत"; "बालक जन मन हरषावत" (A, P) against B "बालक जल मन" and W "हर्षावत"; "बटुकनाथ जी की" (B, W) against A
 * "बथुकनाथ की" and P "बटकुनाथ की"; "धरणीधर" (A, W, P) against B "धरनी धर"; "कहे" (B, P) against A and W "कहें". "भाषावलि" is in
 * every copy and is kept; its sense is unclear. A longer aarti sung by Anuradha Paudwal (poojaaarti.com) is a different version and is
 * not used. The refrain "जय भैरव देवा" is sung after every stanza and is written once, with the opening. Nukta letters are written
 * without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiBhairav: Mantra = {
  id: 'aarti-bhairav',
  title: 'जय भैरव देवा आरती',
  titleEn: 'Jai Bhairav Deva Aarti',
  category: 'aarti',
  order: 53,
  deity: 'Śrī Bhairava (Baṭuka Bhairava)',
  source: 'Traditional Hindi aarti (Hindi); the last stanza names Dharanidhar',
  summary: 'The Hindi aarti to Bhairav, in his form as Batuknath, sung on Saturdays and at Bhairav Ashtami. It praises him as the rescuer of sinners and giver of happiness, with a dog as mount and a trident in hand, and says that whoever sings it receives the fruit his mind desires.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Jai Bhairav Deva" is sung after each stanza.',
      verses: [
        {
          text: 'जय भैरव देवा, प्रभु जय भैरव देवा ।\nजय काली और गौरा देवी कृत सेवा ॥',
          meaning: { en: 'Victory to Bhairav Deva, victory to Lord Bhairav, whom Kali and Goddess Gaura serve.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain is sung.',
      verses: [
        {
          n: 1,
          text: 'तुम्हीं पाप उद्धारक दुःख सिन्धु तारक ।\nभक्तों के सुख कारक भीषण वपु धारक ॥',
          meaning: { en: 'You lift people out of sin and carry them across the sea of sorrow. You give happiness to your devotees, though you take a fearsome body.' },
        },
        {
          n: 2,
          text: 'वाहन श्वान विराजत कर त्रिशूल धारी ।\nमहिमा अमित तुम्हारी जय जय भयहारी ॥',
          meaning: { en: 'A dog is your mount and a trident is in your hand. Your greatness is without measure; victory, victory to you who take away fear.' },
        },
        {
          n: 3,
          text: 'तुम बिन देवा सेवा सफल नहीं होवे ।\nचौमुख दीपक दर्शन दुःख सगरे खोवे ॥',
          meaning: { en: 'Without you, Lord, worship does not bear fruit. The four-faced lamp and your darshan drive away all sorrow.' },
        },
        {
          n: 4,
          text: 'तेल चटकि दधि मिश्रित भाषावलि तेरी ।\nकृपा करिये भैरव करिए नहीं देरी ॥',
          meaning: { en: 'Your offering sizzling in oil and mixed with curd is made to you (the word bhashavali is unclear in the copies). Be kind, Bhairav, and do not delay.' },
        },
        {
          n: 5,
          text: 'पाँव घुँघरू बाजत अरु डमरू डमकावत ।\nबटुकनाथ बन बालक जन मन हरषावत ॥',
          meaning: { en: 'Anklets sound on your feet and your drum rattles. As the boy Batuknath you delight the hearts of the people.' },
        },
        {
          n: 6,
          text: 'बटुकनाथ जी की आरती जो कोई नर गावे ।\nकहे धरणीधर नर मनवांछित फल पावे ॥',
          meaning: { en: 'Dharanidhar says: whoever sings this aarti of Batuknath receives the fruit his mind desires.' },
        },
      ],
    },
  ],
};
