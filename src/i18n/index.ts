import type { MeaningLang } from '../data/types';
import { hi } from './hi';
import { kn } from './kn';
import { ml } from './ml';
import { ta } from './ta';
import { te } from './te';

/** Interface translations by language, keyed by the English string (see src/lib/i18n.ts). */
export const UI_STRINGS: Partial<Record<MeaningLang, Record<string, string>>> = { kn, hi, te, ta, ml };
