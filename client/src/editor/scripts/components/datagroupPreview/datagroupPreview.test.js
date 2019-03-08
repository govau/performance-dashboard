/* global describe,it */

import expect from 'expect';

import { formatValue } from './datagroupPreview';

describe('(Component) Datagroup Preview - datagroupPreview', () => {
  describe('formatValue', () => {
    it('should throw Error if no value provided', () => {
      expect(formatValue).toThrow();
      expect(() => {
        formatValue(void 0);
      }).toThrow();
    });

    it(`should return string when both params are provided correctly`, () => {
      expect(/[aA-zZ]*/.test(formatValue('23.4', '%'))).toBe(true);
    });
  });
});
