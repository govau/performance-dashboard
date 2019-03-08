import d3 from 'd3';
import defined from './defined';
import formatSeconds from './formatSeconds';
/**
 * @function formatData
 * @param  {Number} value   [description]
 * @param  {String} prefix  [description]
 * @param  {String} suffix  [description]
 * @param  {Boolean} rounded [description]
 * @return {String}         [description]
 */

const isFloat = function(n) {
  return Number(n) === n && n % 1 !== 0;
};

const formatData = function(value, _prefix, _suffix, rounded, isMoney) {
  let prefix = defined(_prefix) ? _prefix : '';
  let suffix = defined(_suffix) ? _suffix : '';

  if (value === null) {
    return 'No data';
  }

  if (suffix === 's') {
    return formatSeconds(value);
  }

  if (rounded) {
    return prefix + parseInt(value, 10) + suffix;
  }

  if (value === 0) {
    return prefix + 0 + suffix;
  }

  if (isMoney) {
    return prefix + d3.format('.2f')(value) + suffix;
  }

  if (value > 1000) {
    return prefix + d3.format('.2s')(value) + suffix;
  }

  if (isFloat(value)) {
    if (rounded === false) {
      return prefix + d3.format('.1f')(value) + suffix;
    } else {
      return prefix + d3.format('f')(value) + suffix;
    }
  }

  return prefix + value + suffix;
};

module.exports = formatData;
