/**
 * @function cropData
 * @param  {Array} arr an array of data to be cropped
 * @param  {Number} num the length for the array to be cropped to
 * @return {Array} the cropped array
 */
function cropData(arr, num) {
  let result = arr;
  if (arr.length > num) {
    let head = new Date(result[0].label);
    let tail = new Date(result[result.length-1].label);
    if (head - tail > 0){
      result = arr.slice(0, num);
    } else {
      result = arr.slice(arr.length - num, arr.length);
    }
  }
  return result;
}

module.exports = cropData;
