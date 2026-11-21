import { EVERYDAY_TITLES } from '../data/everydayTitles';
import type { Mantra } from '../data/types';
import { isRoman, nameOf, translitTitle, type ScriptId } from './transliterate';

/**
 * A title as a list shows it: the everyday form ('गजेन्द्र मोक्ष', not 'गजेन्द्रमोक्षः'), which in
 * Telugu, Tamil and Malayalam keeps the -m those languages say ('గజేంద్ర మోక్షం').
 */
export function listTitle(m: Mantra, script: ScriptId): string {
  const plain = EVERYDAY_TITLES[m.id];
  if (!plain || isRoman(script)) return nameOf(m, script);
  const sayM = (script === 'telugu' || script === 'tamil' || script === 'malayalam') && /(म्|ं|ः)$/.test(m.title.trim()) && /[क-ह]$/.test(plain);
  return translitTitle(sayM ? `${plain}${script === 'tamil' ? 'म्' : 'ं'}` : plain, script);
}

