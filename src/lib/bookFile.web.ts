import { Asset } from 'expo-asset';

/** On the web a `.book` asset is a file served next to the app: fetch it (the browser caches it). */
export async function readBookAsset(module: number): Promise<string> {
  const res = await fetch(Asset.fromModule(module).uri);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${res.url}`);
  return res.text();
}
