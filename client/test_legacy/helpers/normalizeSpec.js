import d3 from 'd3';
import normalize from './../../src/_dashboard-legacy/Helpers/normalize';

module.exports = function() {
  describe('Normalize a series to be between 0, 100', () => {
    it('should normalize array of all positive values', () => {
      let array = [10000, 12, 389843, 100];
      let normalizedArray = array.map(d => normalize(array, d));
      // check the bound of normalized array is 0 to 100
      expect(d3.max(normalizedArray)).toEqual(100);
      expect(d3.min(normalizedArray)).toEqual(0);
    });

    it('should normalize array of negative values', () => {
      let array = [10000, 12, -389843, -100];
      let normalizedArray = array.map(d => normalize(array, d));
      // check the bound of normalized array is 0 to 100
      expect(d3.max(normalizedArray)).toEqual(100);
      expect(d3.min(normalizedArray)).toEqual(0);
    });

    it('should normalize array of negative values and strings that can be converted to numbers', () => {
      let array = [0, 12, -389843, -100];
      let normalizedArray = array.map(d => normalize(array, d));
      // check the bound of normalized array is 0 to 100
      expect(d3.max(normalizedArray)).toEqual(100);
      expect(d3.min(normalizedArray)).toEqual(0);
    });
  });
};
