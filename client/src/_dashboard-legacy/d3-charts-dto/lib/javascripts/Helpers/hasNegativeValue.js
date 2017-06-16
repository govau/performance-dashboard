/**
 * @function hasNegativeValue
 * @param  {Array}  series [description]
 * @return {Boolean}        [description]
 */
const hasNegativeValue = function hasNegativeValue(series) {
  let hasNegative = false;
  for (let i = 0; i < series.length; i ++) {
    for (let j = 0; j < series[i].length; j++) {
      if (series[i][j].y < 0) {
        hasNegative = true;
        return hasNegative;
      }
    }
    if (hasNegative === true) {return hasNegative;}
  }
  return hasNegative;
};

module.exports = hasNegativeValue;
