import convertData from './convertData.js';
import cropData from './cropData.js';
import d3 from 'd3';

/**
 * convert data into acceptable format for the pie chart
 * @param  {array} _data  pass raw data in
 * @param  {number} _range select a data range to convert, for example, 13 means
 * the latest 13 month worth of data
 * @return {array}  an array of data, each data  point should have the followinf format:
 * {
 *   x: the id of the data series
 *   y: the sum of all data point values in this series
 *   color: the color of this data series
 *   altColor: alternative color for this series
 *   id: id for this series
 *   name: name for this series
 * }
 * When creating a pie layout using d3.layout.pie(), the function constructs a
 * new pie function with the default value accessor (number),
 * sort comparator (descending value), start angle (0) and end angle (2π)
 */
function convertDataForPie(_data, _range) {
  let data = _data;
  let range = _range || 13;

  if (data && data.length) {
    for (let i = 0; i <= data.length - 1; i++) {
      data[i].data = cropData(data[i].data, range);
    }
    //convert data
    data = convertData(data);

    //calculate data
    let sumAll = d3.sum(data, c => d3.sum(c, e => e.y));
    data = data.map(d => ({
      x: d[0].id,
      y: (d3.sum(d, c => c.y) / sumAll) * 100,
      color: d[0].color,
      altColor: d[0].altColor,
      id: d[0].id,
      name: d[0].name,
    }));
    return data;
  }
  return null;
}
module.exports = convertDataForPie;
