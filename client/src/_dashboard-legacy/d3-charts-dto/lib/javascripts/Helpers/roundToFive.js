/**
 * @function roundToFive
 * @param  {Number} d [description]
 * @return {Number}   [description]
 */
const roundToFive = function roundToFive(d) {
  return {
    upper: Math.ceil(d / 5) * 5,
    lower: Math.floor(d / 5) * 5,
  };
};

module.exports = roundToFive;
