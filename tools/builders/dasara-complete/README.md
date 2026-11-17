# Dasara pada completeness pass (Nov 2026)

All 103 dasara padas were compared with printed editions (Samagra Dasa Sahitya volumes, the
Mahantesh Shastri and other Purandara Dasa editions, Bhakta Kanakadasara Padagalu, Sripadaraja
Kritigalu; archive.org OCR) and typed copies (kn.wikisource, dasavani, raocollectionssongs,
madhwafestivals, Bhajanamrutha). Earlier, a stanza found in only one copy was left out; now
stanzas found in a single source are included and the source is named in the text's note.

`changes.json` holds the restored text and meanings; `apply.py` inserted them (renumbering the
caranas and shifting the hi/te/ta meaning keys). Restored:

- ni-mayeyolago: the ಸವಿಯು ಸಕ್ಕರೆಯೊಳಗೊ stanza (Kanakadasara Padagalu print, kn.wikisource, SDS) and ಹರಿಯೆ in the anupallavi
- enu-bedali-ninna: the stanza on kinsmen and Nahusha (SDS, raocollections)
- indireyarasane-baro: the last three stanzas with the ankita (raocollections only)
- lali-govinda-lali: the ಪಲ್ಲವಾಧರೆಯರೆಲ್ಲ stanza (Sripadaraja Kritigalu print, raocollections)
- pranadeva-ninallade: the Angada stanza (madhwafestivals only; SDS vol 14 illegible there)
- tallanisadiru-kandya: the peacock stanza (Bhakta Kanakadasara Padagalu print, sumadhwaseva)
- ellaru-maduvudu-hottegagi: the ತಾಳ ದಂಡಿಗೆ stanza (SDS 5.1, Bhakta Kanakadasara Padagalu)
- tala-beku-takka-mela: second pallavi line and the closing ಹರಿದಾಸನಾಗಿರಬೇಕು stanza (SDS 3.1)
- bharatidevi-nene-nene: closing word ಕರುಣೆ (Mahantesh Shastri edition)
- baro-krishnayya: the fuller last line (Bhajanamrutha)
- raghavendra-suladi-gopala-dasa: three lines of the Adi tala and the full ದಿನಕರಶತತೇಜ line (SDS 12)

Noted, not changed: acharavillada-nalige as printed in SDS 3.2 is a different version (other
anupallavi and caranas); the app keeps the widely sung version. The anupallavis of
tala-beku-takka-mela and ninna-nodi-dhanyanadeno are sung but were not found in a print.
