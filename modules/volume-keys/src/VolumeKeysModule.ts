import { NativeModule, requireOptionalNativeModule } from 'expo';

import type { VolumeKeysModuleEvents } from './VolumeKeys.types';

declare class VolumeKeysModule extends NativeModule<VolumeKeysModuleEvents> {
  setEnabled(on: boolean): void;
}

/** Android only; null on iOS, the web and Expo Go. */
export default requireOptionalNativeModule<VolumeKeysModule>('VolumeKeys');
