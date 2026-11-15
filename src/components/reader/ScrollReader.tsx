import { useCallback, useEffect, useImperativeHandle, useRef, type Ref } from 'react';
import { FlatList } from 'react-native';
import { useSettings } from '../../lib/settings';
import { EndMatter, IntroBlock, SectionBlock, VerseBlock } from './blocks';
import { useReader } from './context';
import type { BookHandle } from './BookReader';
import type { Row } from './rows';

/** Continuous single-column reading. */
export function ScrollReader({
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
  const { opened, highlight, practice, revealed } = useReader();
  const listRef = useRef<FlatList<Row>>(null);

  // Retries for a jump to a row that is not laid out yet. Without a cap, a jump that keeps
  // failing bounces between the estimated offset and the retry for ever (the screen flickers
  // between two places).
  const retries = useRef(0);
  const scrollTo = useCallback((index: number, animated = true) => {
    listRef.current?.scrollToIndex({ index, viewPosition: 0.05, animated });
  }, []);
  const jump = useCallback(
    (index: number, animated = true) => {
      retries.current = 0;
      scrollTo(index, animated);
    },
    [scrollTo],
  );

  useImperativeHandle(
    ref,
    () => ({
      jumpToKey: (key: string) => {
        const i = rows.findIndex((r) => r.key === key);
        if (i >= 0) jump(i);
      },
    }),
    [rows, jump],
  );

  // Open at the saved / requested position.
  useEffect(() => {
    if (!initialKey) return;
    const i = rows.findIndex((r) => r.key === initialKey);
    if (i <= 0) return;
    const t = setTimeout(() => jump(i, false), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPositionRef = useRef(onPosition);
  useEffect(() => {
    onPositionRef.current = onPosition;
  }, [onPosition]);
  const onViewable = useCallback(({ viewableItems }: { viewableItems: { item: unknown; index?: number | null }[] }) => {
    const first = viewableItems.find((v) => (v.item as Row).kind === 'verse' || (v.item as Row).kind === 'section');
    if (first) onPositionRef.current((first.item as Row).key);
  }, []);

  return (
    <FlatList
      ref={listRef}
      style={{ backgroundColor: theme.bg }}
      data={rows}
      keyExtractor={(row) => row.key}
      renderItem={({ item }) => {
        switch (item.kind) {
          case 'intro':
            return <IntroBlock />;
          case 'section':
            return <SectionBlock section={item.section} />;
          case 'verse':
            return <VerseBlock verse={item.verse} rowKey={item.key} />;
          case 'end':
            return <EndMatter />;
        }
      }}
      extraData={[settings, highlight, opened, practice, revealed]}
      initialNumToRender={20}
      windowSize={11}
      contentContainerStyle={{ paddingBottom: 48 }}
      onViewableItemsChanged={onViewable}
      viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      onScrollToIndexFailed={(info) => {
        // Move near the row so it gets laid out, then try again — at most three times.
        listRef.current?.scrollToOffset({ offset: info.averageItemLength * info.index, animated: false });
        if (retries.current >= 3) return;
        retries.current += 1;
        setTimeout(() => scrollTo(info.index, false), 150);
      }}
    />
  );
}
