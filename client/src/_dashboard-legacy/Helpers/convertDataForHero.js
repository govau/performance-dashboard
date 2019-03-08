import convertData from './convertData.js';
import cropData from './cropData.js';
import d3 from 'd3';

function convertDataForHero(_data, _range) {
  let data = _data;
  let range = _range || 13;
  if (data && data.length) {
    data = data.filter(d => d.data && d.data.length);

    for (let i = 0; i <= data.length - 1; i++) {
      // crop data
      data[i].data = cropData(data[i].data, range);
      // normalize cost
      if (data[i].id === 'cost-per-transaction') {
        let costData = data[i].data;
        let max = d3.max(costData, d => Number(d.value));
        for (let j = 0; j < costData.length; ++j) {
          costData[j].value =
            costData[j].value === null
              ? null
              : parseInt((100 * costData[j].value) / max, 10);
        }
      }
    }
    //convert data format
    data = convertData(data);
    return data;
  }
  return null;
}
module.exports = convertDataForHero;
export default convertDataForHero;
