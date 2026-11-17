import * as DocumentPicker from 'expo-document-picker';

/** On the web the backup is downloaded as a file (the Web Share API cannot share files from a page). */
export async function saveBackupFile(json: string, name: string): Promise<'shared' | 'unavailable'> {
  if (typeof document === 'undefined') return 'unavailable';
  const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
  return 'shared';
}

/** The browser's file chooser; the text of the chosen file, or null if cancelled. */
export async function pickBackupFile(): Promise<string | null> {
  const res = await DocumentPicker.getDocumentAsync({ type: ['application/json', 'text/plain', '.json'], base64: false });
  const asset = res.canceled ? undefined : res.assets?.[0];
  if (!asset) return null;
  if (asset.file) return asset.file.text();
  return (await fetch(asset.uri)).text();
}
