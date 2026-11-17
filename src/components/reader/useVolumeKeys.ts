import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import VolumeKeys from '../../../modules/volume-keys';

/** While `on` (and on Android), the volume buttons call `onKey`: 1 for down, -1 for up. */
export function useVolumeKeys(on: boolean, onKey: (dir: 1 | -1) => void) {
  const latest = useRef(onKey);
  useEffect(() => {
    latest.current = onKey;
  });
  useEffect(() => {
    if (!on || Platform.OS !== 'android' || !VolumeKeys) return;
    const keys = VolumeKeys;
    keys.setEnabled(true);
    const sub = keys.addListener('onKey', (e) => latest.current(e.dir));
    return () => {
      sub.remove();
      keys.setEnabled(false);
    };
  }, [on]);
}
