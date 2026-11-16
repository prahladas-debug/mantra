// Learn more https://docs.expo.dev/guides/customizing-metro/
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// The long works (Valmiki Ramayana, Mahabharata) ship as one `.book` file per sarga/adhyaya
// (minified JSON written by scripts/build-books.ts). As assets they stay out of the JS bundle
// and are read only when a reader opens them (src/lib/books.ts).
config.resolver.assetExts.push('book');

module.exports = config;
