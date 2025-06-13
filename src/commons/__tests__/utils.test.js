import { describe, test, expect } from '@jest/globals';

import { getLanguageKey } from '../utils.js';

describe('Test on utils', () => {
  test('should return the correct key for known values', () => {
    expect(getLanguageKey('es')).toBe('ES');
    expect(getLanguageKey('en')).toBe('EN');
  });

  test('should return undefined for unknown values', () => {
    expect(getLanguageKey('fr')).toBeUndefined();
    expect(getLanguageKey('')).toBeUndefined();
    expect(getLanguageKey(null)).toBeUndefined();
  });
});
