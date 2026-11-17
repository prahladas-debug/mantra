import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState, type Ref } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { leading, scriptFont } from '../../lib/fonts';
import { scriptFor } from '../../data';
import { useI18n } from '../../lib/i18n';
import { useSettings } from '../../lib/settings';
import { translit, type ScriptId, isRoman, nameOf } from '../../lib/transliterate';
import { EndMatter, IntroBlock, SectionBlock, VerseBlock } from './blocks';
import { useReader } from './context';
import { devDigits, type Row } from './rows';

interface Page {
  rows: Row[];
}

/** Indic combining marks (vowel signs, virama, anusvara…) don't take their own width. */
function clusters(s: string): number {
  let n = 0;
  for (const ch of s) {
    const c = ch.codePointAt(0)!;
    if (c >= 0x0900 && c <= 0x0dff) {
      const o = c & 0x7f;
      if (o <= 0x03 || (o >= 0x3a && o <= 0x4f) || (o >= 0x51 && o <= 0x57) || o === 0x62 || o === 0x63) continue;
    }
    n++;
  }
  return n;
}

interface Metrics {
  width: number;
  script: ScriptId;
  second: ScriptId | null;
  scale: number;
  bookFonts: boolean;
}

/** Rough height of a row in px, used only to pack rows into pages. */
function estimate(row: Row, m: Metrics): number {
  const contentWidth = m.width - 56;
  if (row.kind === 'intro' || row.kind === 'end') return Infinity; // own page
  if (row.kind === 'section') {
    const fs = 22 * m.scale;
    const title = row.section.title ? Math.ceil(clusters(row.section.title) / (contentWidth / (fs * 0.62))) * fs * 1.8 : 0;
    // A long note shows three lines and a "More" button until it is opened (SectionNote).
    const noteLines = row.section.note ? Math.ceil(row.section.note.length / (contentWidth / 7.2)) : 0;
    const note = (row.section.note && row.section.note.length > 220 ? Math.min(noteLines, 3) + 1 : noteLines) * 21;
    return 60 + title + (row.section.titleEn ? 20 : 0) + note;
  }
  const fs = (isRoman(m.script) ? 19 : 22) * m.scale;
  const lh = fs * leading(m.script, m.bookFonts);
  const perLine = Math.max(8, contentWidth / (fs * (isRoman(m.script) ? 0.5 : 0.62)));
  const text = translit(row.verse.text, m.script);
  const lines = text.split('\n').reduce((acc, l) => acc + Math.max(1, Math.ceil(clusters(l) / perLine)), 0);
  let h = lines * lh + 24 + 34;
  if (m.second) {
    const sfs = 16 * m.scale;
    const sl = translit(row.verse.text, m.second).split('\n').reduce((acc, l) => acc + Math.max(1, Math.ceil(clusters(l) / (contentWidth / (sfs * 0.6)))), 0);
    h += 6 + sl * sfs * 1.75;
  }
  return h * 1.06;
}

function paginate(rows: Row[], pageHeight: number, m: Metrics): Page[] {
  const pages: Page[] = [];
  let cur: Row[] = [];
  let used = 0;
  const flush = () => {
    if (cur.length) pages.push({ rows: cur });
    cur = [];
    used = 0;
  };
  rows.forEach((row) => {
    const h = estimate(row, m);
    if (h === Infinity) {
      flush();
      pages.push({ rows: [row] });
      return;
    }
    if (used + h > pageHeight && cur.length) {
      // Don't leave a section heading stranded at the bottom of a page.
      const last = cur[cur.length - 1];
      if (last.kind === 'section') {
        cur.pop();
        flush();
        cur = [last];
        used = estimate(last, m);
      } else flush();
    }
    cur.push(row);
    used += h;
  });
  flush();
  return pages;
}

export interface BookHandle {
  jumpToKey: (key: string) => void;
}

/** Paged, book-like reading: swipe or tap ‹ › to turn pages. */
export function BookReader({
  rows,
  initialKey,
  onPosition,
  ref,
}: {
  rows: Row[];
  initialKey: string | null;
  onPosition: (key: string) => void;
  ref: Ref<BookHandle>;
}) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const { mantra, opened, highlight, practice, revealed, pinching } = useReader();
  const { width } = useWindowDimensions();
  const [height, setHeight] = useState(0);
  const listRef = useRef<FlatList<Page>>(null);
  const [page, setPage] = useState(0);
  // A Tamil-language text is shown in Tamil whatever the reading script, and has no second script.
  const script = scriptFor(mantra, settings.script);
  const second = mantra.sourceScript !== 'tamil' && settings.secondaryScript && settings.secondaryScript !== script ? settings.secondaryScript : null;

  const pageContent = Math.max(200, height - 36 - 30 - 20);
  const pages = useMemo(
    () => (height ? paginate(rows, pageContent, { width, script, second, scale: settings.fontScale, bookFonts: settings.bookFonts }) : []),
    [rows, height, pageContent, width, script, second, settings.fontScale, settings.bookFonts],
  );
  const pageOf = useCallback((key: string) => Math.max(0, pages.findIndex((p) => p.rows.some((r) => r.key === key))), [pages]);
  const startPage = initialKey ? pageOf(initialKey) : 0;

  // A row on the page in view (kept up to date by page turns and onViewable).
  const anchor = useRef<string | null>(initialKey);
  const goTo = useCallback(
    (i: number, animated = true) => {
      const target = Math.max(0, Math.min(pages.length - 1, i));
      anchor.current = pages[target]?.rows[0]?.key ?? anchor.current;
      listRef.current?.scrollToIndex({ index: target, animated });
      setPage(target);
    },
    [pages],
  );

  useImperativeHandle(
    ref,
    () => ({
      jumpToKey: (key: string) => {
        goTo(pageOf(key), false);
        anchor.current = key;
      },
    }),
    [goTo, pageOf],
  );

  // When the pages are made again (text size, script, rotation, or the display panel
  // changing the height) the list keeps its offset, which would now show other verses:
  // go back to the page that holds the anchor row instead.
  const paginated = useRef(false);
  useLayoutEffect(() => {
    if (!pages.length) return;
    const i = anchor.current ? pageOf(anchor.current) : 0;
    setPage(i);
    if (paginated.current) listRef.current?.scrollToIndex({ index: i, animated: false });
    paginated.current = true; // the first time, initialScrollIndex opens the list there
  }, [pages, pageOf]);

  // FlatList requires a stable onViewableItemsChanged; read the latest onPosition through a ref.
  const onPositionRef = useRef(onPosition);
  useEffect(() => {
    onPositionRef.current = onPosition;
  }, [onPosition]);
  const onViewable = useCallback(({ viewableItems }: { viewableItems: { item: unknown; index?: number | null }[] }) => {
    const v = viewableItems[0];
    if (v?.index == null) return;
    setPage(v.index);
    const rowsOnPage = (v.item as Page).rows;
    if (!rowsOnPage.some((r) => r.key === anchor.current)) anchor.current = rowsOnPage[0]?.key ?? null;
    const firstVerse = rowsOnPage.find((r) => r.kind === 'verse' || r.kind === 'section');
    if (firstVerse) onPositionRef.current(firstVerse.key);
  }, []);

  const runningHead = nameOf(mantra, script);
  const font = scriptFont(script, settings.bookFonts);
  const pageNo = (n: number) => (isRoman(script) || script === 'tamil' ? String(n) : translit(devDigits(n), script));

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }} onLayout={(e) => setHeight(e.nativeEvent.layout.height - 52)}>
      {pages.length > 0 && (
        <FlatList
          ref={listRef}
          data={pages}
          horizontal
          pagingEnabled
          scrollEnabled={!pinching}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => String(i)}
          initialScrollIndex={Math.min(startPage, pages.length - 1)}
          getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
          onViewableItemsChanged={onViewable}
          viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
          extraData={[opened, highlight, practice, revealed, settings, pinching]}
          windowSize={5}
          initialNumToRender={2}
          renderItem={({ item, index }) => (
            <View style={{ width, height: height || undefined, padding: 8 }}>
              <View style={[s.page, { backgroundColor: theme.page, borderColor: theme.pageEdge }]}>
                {item.rows[0]?.kind !== 'intro' && (
                  <Text numberOfLines={1} style={[s.runningHead, { color: theme.textMuted, borderColor: theme.pageEdge, fontFamily: font }]}>
                    {runningHead}
                  </Text>
                )}
                <ScrollView contentContainerStyle={{ paddingVertical: 6 }} showsVerticalScrollIndicator scrollEnabled={!pinching}>
                  {item.rows.map((row) => {
                    switch (row.kind) {
                      case 'intro':
                        return <IntroBlock key={row.key} book />;
                      case 'section':
                        return <SectionBlock key={row.key} section={row.section} book />;
                      case 'verse':
                        return <VerseBlock key={row.key} verse={row.verse} rowKey={row.key} book />;
                      case 'end':
                        return <EndMatter key={row.key} />;
                    }
                  })}
                </ScrollView>
                <Text style={[s.folio, { color: theme.ornament, fontFamily: font }]}>— {pageNo(index + 1)} —</Text>
              </View>
            </View>
          )}
        />
      )}
      <View style={[s.bar, { borderColor: theme.cardBorder, backgroundColor: theme.bg }]}>
        <Pressable onPress={() => goTo(page - 1)} disabled={page === 0} hitSlop={12} accessibilityLabel={tr('Previous page')}>
          <MaterialCommunityIcons name="chevron-left" size={26} color={page === 0 ? theme.cardBorder : theme.accent} />
        </Pressable>
        <Pressable onPress={() => goTo(0)} hitSlop={8} accessibilityLabel={tr('Go to the first page')} style={{ marginLeft: 8 }}>
          <MaterialCommunityIcons name="skip-previous-outline" size={22} color={theme.textMuted} />
        </Pressable>
        <View style={{ flex: 1, marginHorizontal: 12 }}>
          <View style={[s.track, { backgroundColor: theme.accentSoft }]}>
            <View style={{ width: `${pages.length ? ((page + 1) / pages.length) * 100 : 0}%`, height: 4, backgroundColor: theme.accent, borderRadius: 2 }} />
          </View>
          <Text style={{ color: theme.textMuted, fontSize: 13, textAlign: 'center', marginTop: 3 }}>
            {pages.length ? tr('Page {n} of {total}', { n: page + 1, total: pages.length }) : ''}
          </Text>
        </View>
        <Pressable onPress={() => goTo(page + 1)} disabled={page >= pages.length - 1} hitSlop={12} accessibilityLabel={tr('Next page')}>
          <MaterialCommunityIcons name="chevron-right" size={26} color={page >= pages.length - 1 ? theme.cardBorder : theme.accent} />
        </Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  runningHead: { textAlign: 'center', fontSize: 14, paddingVertical: 8, marginHorizontal: 20, borderBottomWidth: StyleSheet.hairlineWidth },
  folio: { textAlign: 'center', fontSize: 14, paddingVertical: 6 },
  bar: { height: 52, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderTopWidth: StyleSheet.hairlineWidth },
  track: { height: 4, borderRadius: 2, overflow: 'hidden' },
});
