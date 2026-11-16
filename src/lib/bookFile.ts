import { Asset } from 'expo-asset';
import { File } from 'expo-file-system';

/**
 * The text of a bundled `.book` asset on Android and iOS: expo-asset copies it out of the app
 * (or, in development, fetches it from the dev server) into the cache, then it is read from there.
 */
export async function readBookAsset(module: number): Promise<string> {
  const asset = await Asset.fromModule(module).downloadAsync();
  if (!asset.localUri) throw new Error(`asset ${asset.name} has no local file`);
  return new File(asset.localUri).text();
}
