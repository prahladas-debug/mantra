import { useCallback, useEffect, useImperativeHandle, useRef, type Ref } from 'react';
import { FlatList, Pressable } from 'react-native';
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
  const { opened, highlight, practice, revealed, pinching, focus, toggleFocus, autoPlaying, autoPace, pauseAuto, onFinish } = useReader();
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

  // Where the column is, how far it can go, and how tall the screen is (hands-free, volume keys).
  const offset = useRef(0);
  const maxOffset = useRef(Infinity);
  const viewHeight = useRef(600);

  useImperativeHandle(
    ref,
    () => ({
      jumpToKey: (key: string) => {
        const i = rows.findIndex((r) => r.key === key);
        if (i >= 0) jump(i);
      },
      step: (dir: 1 | -1) => {
        offset.current = Math.max(0, Math.min(maxOffset.current, offset.current + dir * viewHeight.current * 0.85));
        listRef.current?.scrollToOffset({ offset: offset.current, animated: true });
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

  // Hands-free: the column moves up steadily at the chosen pace; a touch pauses it.
  useEffect(() => {
    if (!autoPlaying) return;
    let last = Date.now();
    const id = setInterval(() => {
      const now = Date.now();
      offset.current = Math.min(maxOffset.current, offset.current + (autoPace * (now - last)) / 1000);
      last = now;
      listRef.current?.scrollToOffset({ offset: offset.current, animated: false });
    }, 33);
    return () => clearInterval(id);
  }, [autoPlaying, autoPace]);

  const playing = useRef(autoPlaying);
  useEffect(() => {
    playing.current = autoPlaying;
  }, [autoPlaying]);
  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  const onPositionRef = useRef(onPosition);
  useEffect(() => {
    onPositionRef.current = onPosition;
  }, [onPosition]);
  const onViewable = useCallback(({ viewableItems }: { viewableItems: { item: unknown; index?: number | null }[] }) => {
    const first = viewableItems.find((v) => (v.item as Row).kind === 'verse' || (v.item as Row).kind === 'section');
    if (first) onPositionRef.current((first.item as Row).key);
    if (viewableItems.some((v) => (v.item as Row).kind === 'end')) onFinishRef.current();
  }, []);

  return (
    <FlatList
      ref={listRef}
      style={{ backgroundColor: theme.bg }}
      data={rows}
      scrollEnabled={!pinching}
      keyExtractor={(row) => row.key}
      renderItem={({ item }) => {
        switch (item.kind) {
          case 'intro':
            return <IntroBlock />;
          case 'section':
            return <SectionBlock section={item.section} />;
          case 'verse':
            // A tap on a verse (not on its buttons) hides or shows the header, as in the book view.
            return (
              <Pressable
                onPress={() => {
                  pauseAuto();
                  toggleFocus();
                }}
                accessible={false}
              >
                <VerseBlock verse={item.verse} rowKey={item.key} />
              </Pressable>
            );
          case 'end':
            return <EndMatter />;
        }
      }}
      extraData={[settings, highlight, opened, practice, revealed, focus]}
      initialNumToRender={20}
      windowSize={11}
      contentContainerStyle={{ paddingBottom: 48 }}
      onScroll={(e) => {
        const n = e.nativeEvent;
        // While hands-free is moving the column, its own offset is ahead of these (throttled) reports.
        if (!playing.current) offset.current = n.contentOffset.y;
        maxOffset.current = Math.max(0, n.contentSize.height - n.layoutMeasurement.height);
        viewHeight.current = n.layoutMeasurement.height;
      }}
      scrollEventThrottle={100}
      onScrollBeginDrag={pauseAuto}
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
