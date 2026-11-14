import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState, type Ref } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { leading, scriptFont } from '../../lib/fonts';
import { useSettings } from '../../lib/settings';
import { translit, translitTitle, type ScriptId } from '../../lib/transliterate';
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
    const note = row.section.note ? Math.ceil(row.section.note.length / (contentWidth / 7.2)) * 21 : 0;
    return 60 + title + (row.section.titleEn ? 20 : 0) + note;
  }
  const fs = (m.script === 'iast' ? 19 : 22) * m.scale;
  const lh = fs * leading(m.script, m.bookFonts);
  const perLine = Math.max(8, contentWidth / (fs * (m.script === 'iast' ? 0.5 : 0.62)));
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
  const { mantra, opened, highlight, practice, revealed } = useReader();
  const { width } = useWindowDimensions();
  const [height, setHeight] = useState(0);
  const listRef = useRef<FlatList<Page>>(null);
  const [page, setPage] = useState(0);
  const script = settings.script;
  const second = settings.secondaryScript && settings.secondaryScript !== script ? settings.secondaryScript : null;

  const pageContent = Math.max(200, height - 36 - 30 - 20);
  const pages = useMemo(
    () => (height ? paginate(rows, pageContent, { width, script, second, scale: settings.fontScale, bookFonts: settings.bookFonts }) : []),
    [rows, height, pageContent, width, script, second, settings.fontScale, settings.bookFonts],
  );
  const pageOf = useCallback((key: string) => Math.max(0, pages.findIndex((p) => p.rows.some((r) => r.key === key))), [pages]);
  const startPage = initialKey ? pageOf(initialKey) : 0;

  const goTo = useCallback(
    (i: number, animated = true) => {
      const target = Math.max(0, Math.min(pages.length - 1, i));
      listRef.current?.scrollToIndex({ index: target, animated });
      setPage(target);
    },
    [pages.length],
  );

  useImperativeHandle(ref, () => ({ jumpToKey: (key: string) => goTo(pageOf(key)) }), [goTo, pageOf]);

  // FlatList requires a stable onViewableItemsChanged; read the latest onPosition through a ref.
  const onPositionRef = useRef(onPosition);
  useEffect(() => {
    onPositionRef.current = onPosition;
  }, [onPosition]);
  const onViewable = useCallback(({ viewableItems }: { viewableItems: { item: unknown; index?: number | null }[] }) => {
    const v = viewableItems[0];
    if (v?.index == null) return;
    setPage(v.index);
    const firstVerse = (v.item as Page).rows.find((r) => r.kind === 'verse' || r.kind === 'section');
    if (firstVerse) onPositionRef.current(firstVerse.key);
  }, []);

  const runningHead = translitTitle(mantra.title, script);
  const font = scriptFont(script, settings.bookFonts);
  const pageNo = (n: number) => (script === 'iast' || script === 'tamil' ? String(n) : translit(devDigits(n), script));

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }} onLayout={(e) => setHeight(e.nativeEvent.layout.height - 52)}>
      {pages.length > 0 && (
        <FlatList
          ref={listRef}
          data={pages}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => String(i)}
          initialScrollIndex={Math.min(startPage, pages.length - 1)}
          getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
          onViewableItemsChanged={onViewable}
          viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
          extraData={[opened, highlight, practice, revealed, settings]}
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
                <ScrollView contentContainerStyle={{ paddingVertical: 6 }} showsVerticalScrollIndicator>
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
        <Pressable onPress={() => goTo(page - 1)} disabled={page === 0} hitSlop={12} accessibilityLabel="Previous page">
          <Ionicons name="chevron-back" size={26} color={page === 0 ? theme.cardBorder : theme.accent} />
        </Pressable>
        <Pressable onPress={() => goTo(0)} hitSlop={8} accessibilityLabel="Go to the first page" style={{ marginLeft: 8 }}>
          <Ionicons name="play-skip-back-outline" size={18} color={theme.textMuted} />
        </Pressable>
        <View style={{ flex: 1, marginHorizontal: 12 }}>
          <View style={[s.track, { backgroundColor: theme.accentSoft }]}>
            <View style={{ width: `${pages.length ? ((page + 1) / pages.length) * 100 : 0}%`, height: 4, backgroundColor: theme.accent, borderRadius: 2 }} />
          </View>
          <Text style={{ color: theme.textMuted, fontSize: 12, textAlign: 'center', marginTop: 3 }}>
            {pages.length ? `Page ${page + 1} of ${pages.length}` : ''}
          </Text>
        </View>
        <Pressable onPress={() => goTo(page + 1)} disabled={page >= pages.length - 1} hitSlop={12} accessibilityLabel="Next page">
          <Ionicons name="chevron-forward" size={26} color={page >= pages.length - 1 ? theme.cardBorder : theme.accent} />
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
  runningHead: { textAlign: 'center', fontSize: 13, paddingVertical: 8, marginHorizontal: 20, borderBottomWidth: StyleSheet.hairlineWidth },
  folio: { textAlign: 'center', fontSize: 13, paddingVertical: 6 },
  bar: { height: 52, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderTopWidth: StyleSheet.hairlineWidth },
  track: { height: 4, borderRadius: 2, overflow: 'hidden' },
});
