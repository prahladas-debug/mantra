# Mantra Sangraha (मन्त्रसङ्ग्रहः)

A cross-platform ebook app of Vedic mantras, suktas, stotras, sahasranamas,
Sandhya Vandane and puja mantras. It reads in **Devanagari (Sanskrit), Kannada,
Telugu, Tamil, Malayalam, Gujarati, Bengali, Odia and English (IAST)**.

One codebase ([Expo](https://expo.dev) / React Native) builds for the
**Google Play Store**, the **Apple App Store** and the **web**.

## Features

- **Any script, one source.** Every text is stored once in Devanagari and
  converted on the device with
  [`@indic-transliteration/sanscript`](https://github.com/indic-transliteration/sanscript.js).
  A correction to one text fixes it in every script. Tamil uses superscript
  marks (க², க³, க⁴) so that Sanskrit sounds stay unambiguous.
- **Each script follows its own spelling conventions** (see
  `src/lib/transliterate.ts`):
  - Kannada, Telugu and Gujarati use the anusvara (ಮಂತ್ರ, ಸಂಗ್ರಹ, ಗೋವಿಂದ),
    as published stotra books do.
  - Malayalam uses chillu letters and ംഗ / ംബ.
  - Bengali and Odia use য় / ୟ.
  - Tamil uses ஸ்ரீ.
  - Menus and category names are written in each language (ನಿತ್ಯ
    ಪ್ರಾರ್ಥನೆ, ಸಂಧ್ಯಾವಂದನೆ) rather than transliterated from Sanskrit.
- **Learning mode.** A second script can be shown under each verse, for
  example Kannada with IAST underneath.
- **Reader.** Font size from 70% to 220%, light, sepia and dark themes, a
  "jump to section" control for long texts, optional English meanings, and
  the screen stays on while reading.
- **Search across scripts.** Type `vishnu`, `ವಾಯು`, `कमलाकुच` or `govinda`.
  Search covers titles and every verse, and opens the text at the matching
  verse.
- **Favourites and "continue reading"**, saved on the device.
- **Works fully offline.** There is no account, no tracking and no network
  access.

## Content

| Category | Texts |
| --- | --- |
| Daily prayers | Nitya shlokas, Gayatri, Mahamrityunjaya |
| Vedic suktas | Purusha Sukta, Sri Sukta, Narayana Sukta, Mantra Pushpam, Shanti mantras |
| Sahasranama / Namavali | Vishnu Sahasranama, Krishna Ashtottara Shatanama |
| Stotras | Venkatesha Stotram, Mahalakshmi Ashtakam, Lingashtakam, Shiva Panchakshara, Madhurashtakam, Achyutashtakam, Ganesha Pancharatnam |
| Madhva stotras | Vayu Stuti (with Nakha Stuti), Raghavendra Stotram |
| Sandhya Vandane | Step-by-step, with an English instruction for each step |
| Puja | Shodashopachara puja |

Currently 21 texts with 486 verses or steps. Texts labelled **Partial** in
the app (Vayu Stuti verses 12–41, parts of Sandhya Vandane, Sri Sukta's later
ṛks, Mantra Pushpam, and the Krishna Ashtottara phala-śruti) are missing some
portions on purpose rather than guessed. See
[`PROOFREADING.md`](PROOFREADING.md).

> ⚠️ **Proofread before a public release.** These texts were entered without
> access to an authoritative source. Check each one against a printed edition
> (for example Gita Press, TTD, or a math publication for Madhva texts) before
> publishing, and record the edition in the file's header comment. See
> [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md).

## Project layout

```
src/
  app/                 screens (Expo Router: every file is a route)
    index.tsx          home: script picker, categories, favourites, recent
    category/[id].tsx  list of texts in a category
    mantra/[id].tsx    the reader
    search.tsx, settings.tsx, about.tsx
  components/ui.tsx    shared UI (chips, script picker, mantra rows)
  data/
    types.ts           content schema
    categories.ts
    texts/*.ts         one file per text, Devanagari only
    library.generated.ts  (generated, do not edit)
  lib/
    transliterate.ts   script conversion and cross-script search keys
    settings.tsx       persisted settings, favourites, recent
    theme.ts
scripts/
  gen-index.ts         regenerates library.generated.ts
  validate-content.ts  checks every text (schema, Devanagari only, numbering)
```

## Develop

```bash
npm install
npm run web            # open in a browser
npm start              # then scan the QR code with Expo Go on a phone
npm run typecheck
```

### Adding or correcting a text

1. Add or edit `src/data/texts/<id>.ts`, following [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md).
2. Run `npm run content:check`. This regenerates the library index and
   validates every text.
3. The new text appears in the app automatically.

## Publish to the stores

You do **not** need Android Studio or Xcode. Expo's cloud build service (EAS)
builds and signs both apps.

1. **Accounts.** Create an [Expo account](https://expo.dev/signup), a
   [Google Play Console](https://play.google.com/console) account (one-time
   USD 25) and an [Apple Developer Program](https://developer.apple.com/programs/)
   membership (USD 99 a year).
2. **Set your app IDs.** In `app.json`, change `ios.bundleIdentifier` and
   `android.package` from `com.mantrasangraha.app` to an ID you own, for
   example `in.yourname.mantra`. These IDs cannot be changed after the first
   store upload.
3. **Link the project.**
   ```bash
   npx eas-cli@latest login
   npx eas-cli@latest init
   ```
4. **Test build.** This produces an Android APK you can install directly on a
   phone:
   ```bash
   npx eas-cli@latest build --profile preview --platform android
   ```
5. **Store builds and submission.**
   ```bash
   npx eas-cli@latest build --profile production --platform all
   npx eas-cli@latest submit --platform android   # uploads the .aab to Play Console
   npx eas-cli@latest submit --platform ios       # uploads to App Store Connect / TestFlight
   ```
6. **Store listing.** Both stores need:
   - screenshots
   - a short and a long description
   - a privacy policy URL. The app collects no data, so a one-paragraph policy
     saying that is enough; a GitHub Pages page works.
   - a content rating questionnaire
   - Apple only: the "Data not collected" privacy label

   Category: *Books & Reference* or *Lifestyle*.

After launch, text corrections can reach users without a new store review by
using `eas update`.

### Web version

`npm run build:web` writes a static site to `dist/`, which can be hosted on
any static host (GitHub Pages, Netlify, Cloudflare Pages).

## Roadmap ideas

- Audio recitation, synchronised with the verse being read
- Vedic svara (accent) marks for the suktas, as an optional display
- Meanings and word-by-word translation in Kannada, Telugu, Tamil and Hindi
- More texts: Vishnu Sahasranama namavali, Lalita Sahasranama, Aditya
  Hridayam, Hanuman Chalisa, Madhvacharya's Dvadasha Stotra, Harikathamrutasara
- Bundled Noto Serif fonts for consistent rendering on older Android phones
