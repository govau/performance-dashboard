/**
 * @funcition isActive
 * @param  {Object}  d [description]
 * @param  {Number}  i [description]
 * @param  {Number}  j [description]
 * @return {Boolean}   [description]
 */
function isActive(d, i, j) {
  if (d.y === null) {
    return false;
  }
  if (i !== j) {
    return false;
  }
  return true;
}
module.exports = isActive;
