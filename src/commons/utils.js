import { LANGUAGE_CODES } from './constants.js';

const getLanguageKey = value =>
  Object.keys(LANGUAGE_CODES).find(key => LANGUAGE_CODES[key] === value);

export { getLanguageKey };
