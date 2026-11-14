# Meaning packs (Hindi, Telugu, Tamil)

English and Kannada meanings live in the text files themselves. Meanings in
other languages live here, one folder per language, so translators never
edit the sacred text files.

```ts
// src/data/meanings/te/stotras.ts
import type { MeaningPack } from '../../types';

export const teStotras: MeaningPack = {
  lang: 'te',
  texts: {
    'venkatesha-stotram': {
      summary: '…',                     // optional, Telugu
      verses: { '0.0': '…', '0.1': '…' }, // "sectionIndex.verseIndex", 0-based
    },
  },
};
```

Keys follow the order of `sections` and `verses` in the text file, counting
from 0. Translate from the English meaning, checking against the Sanskrit.
Write in the target script only; Sanskrit words also go in the target script.

`npm test` regenerates the index and runs `scripts/validate-meanings.ts`.
