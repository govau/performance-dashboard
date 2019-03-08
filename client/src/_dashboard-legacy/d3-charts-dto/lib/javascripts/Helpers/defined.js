/**
 * @function defined
 * @param  {Object} value [description]
 * @return {Boolean}       [description]
 */
const defined = function(value) {
  return value !== undefined && value !== null;
};

module.exports = defined;
