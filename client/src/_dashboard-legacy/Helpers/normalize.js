import d3 from 'd3';
/**
 * @function normalise
 * @param  {array} arr  target array
 * @param  {number} item item to be normalised to
 * @return {number} normalized value
 */
const normalize = function normalize(arr, item) {
  let max = d3.max(arr);
  let min = d3.min(arr);
  let scale = d3.scale.linear().domain([min, max]).range([0, 100]);
  return scale(item);
};

module.exports = normalize;
