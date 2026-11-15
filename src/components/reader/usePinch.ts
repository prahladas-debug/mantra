import { useEffect, useRef, useState } from 'react';
import { PanResponder, type GestureResponderEvent } from 'react-native';

const dist = (e: GestureResponderEvent) => {
  const [a, b] = e.nativeEvent.touches;
  return a && b ? Math.hypot(a.pageX - b.pageX, a.pageY - b.pageY) : 0;
};

/**
 * Two-finger pinch on the reader changes the text size. Built on the responder system (no
 * extra native module): a second finger claims the gesture from the page list, the live
 * size is shown while pinching, and the new size is saved when the fingers lift.
 *
 * `active` is true from the moment two fingers are down until they lift: the reader stops
 * its lists scrolling for that time. Otherwise the native scroll view takes the touch as
 * soon as a finger has moved a little (the page turns or scrolls under the pinch) and the
 * pinch is cancelled after one step.
 */
export function usePinch(scale: number, onCommit: (scale: number) => void) {
  const [preview, setPreview] = useState<number | null>(null);
  const [active, setActive] = useState(false);
  const live = useRef({ scale, onCommit, start: 0, value: scale });
  useEffect(() => {
    live.current.scale = scale;
    live.current.onCommit = onCommit;
  }, [scale, onCommit]);

  // The handlers below only read `live` inside touch events, never during render.
  // eslint-disable-next-line react-hooks/refs
  const [responder] = useState(() => {
    const two = (e: GestureResponderEvent) => e.nativeEvent.touches.length === 2;
    // Always clears, whatever was measured: a pinch must never leave the lists locked.
    const finish = () => {
      const l = live.current;
      if (l.start && Math.abs(l.value - l.scale) >= 0.05) l.onCommit(l.value);
      l.start = 0;
      setPreview(null);
      setActive(false);
    };
    return PanResponder.create({
      onStartShouldSetPanResponderCapture: two,
      onMoveShouldSetPanResponderCapture: two,
      onPanResponderGrant: (e) => {
        live.current.start = dist(e);
        live.current.value = live.current.scale;
        setActive(true);
      },
      onPanResponderMove: (e) => {
        const l = live.current;
        const d = dist(e);
        if (!d) return;
        if (!l.start) l.start = d;
        l.value = Math.min(2.4, Math.max(0.7, Math.round(((l.scale * d) / l.start) * 10) / 10));
        setPreview(l.value);
      },
      onPanResponderRelease: finish,
      onPanResponderTerminate: finish,
      onPanResponderTerminationRequest: () => false,
    });
  });
  return { panHandlers: responder.panHandlers, preview, active };
}
