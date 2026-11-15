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
 */
export function usePinch(scale: number, onCommit: (scale: number) => void) {
  const [preview, setPreview] = useState<number | null>(null);
  const live = useRef({ scale, onCommit, start: 0, value: scale });
  useEffect(() => {
    live.current.scale = scale;
    live.current.onCommit = onCommit;
  }, [scale, onCommit]);

  // The handlers below only read `live` inside touch events, never during render.
  // eslint-disable-next-line react-hooks/refs
  const [responder] = useState(() => {
    const two = (e: GestureResponderEvent) => e.nativeEvent.touches.length === 2;
    const finish = () => {
      const l = live.current;
      if (l.start) {
        l.start = 0;
        if (Math.abs(l.value - l.scale) >= 0.05) l.onCommit(l.value);
        setPreview(null);
      }
    };
    return PanResponder.create({
      onStartShouldSetPanResponderCapture: two,
      onMoveShouldSetPanResponderCapture: two,
      onPanResponderGrant: (e) => {
        live.current.start = dist(e);
        live.current.value = live.current.scale;
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
  return { panHandlers: responder.panHandlers, preview };
}
