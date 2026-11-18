import { useState } from 'react';
import { Image, View } from 'react-native';
import { ART, HERO_FACE_Y, type ArtKey } from '../lib/art';

/**
 * A wide painting filling its box as `cover` does, but cropped round the face rather than the
 * middle: on a tablet a banner is far wider than the picture, and a centred crop shows only the
 * figures' chests. `place` is where in the box the face goes (0 top, 1 bottom).
 */
export function ArtFill({ art, place = 0.4, opacity = 1 }: { art: ArtKey; place?: number; opacity?: number }) {
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const aspect = 16 / 9;
  let frame: { left: number; top: number; width: number; height: number } | undefined;
  if (box) {
    const wide = box.w / box.h > aspect;
    const width = wide ? box.w : box.h * aspect;
    const height = wide ? box.w / aspect : box.h;
    const top = Math.min(0, Math.max(box.h - height, box.h * place - HERO_FACE_Y[art] * height));
    frame = { left: (box.w - width) / 2, top, width, height };
  }
  return (
    <View
      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, overflow: 'hidden' }}
      pointerEvents="none"
      onLayout={(e) => setBox({ w: e.nativeEvent.layout.width, h: e.nativeEvent.layout.height })}
    >
      {frame && <Image source={ART[art].hero} style={{ position: 'absolute', ...frame, opacity }} resizeMode="cover" accessibilityIgnoresInvertColors />}
    </View>
  );
}
