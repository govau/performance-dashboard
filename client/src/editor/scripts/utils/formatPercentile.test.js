
/* global describe,it */

import expect from 'expect';

import {formatPercentile2dp} from './formatPercentile';


describe(`(Util) Format Percentile - formatPercentile`, () => {

  describe('formatPercentile2dp', () => {
    it('should return stringified number as 2dp decimal when a whole number is provided', () => {
      const formatted = formatPercentile2dp(2);
      expect(/\d+?(\.\d\d$)/.test(formatted)).toBe(true);
    });
    it('should return stringified number as 2dp decimal when a float number is provided', () => {
      const formatted = formatPercentile2dp(2.2);
      expect(/\d+?(\.\d\d$)/.test(formatted)).toBe(true);
    });
  });

});
