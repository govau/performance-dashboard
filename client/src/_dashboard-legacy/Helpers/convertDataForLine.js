import convertData from './convertData.js';
import cropData from './cropData.js';


/*
Convert data into format for line chart widget
 */
function convertDataForLine(_data, _range) {
  let data = _data;
  let range = _range || 13;
  if(data && data.length){
    for (let i = 0; i < data.length; i ++) {
      if(data[i].data.length > 13) {
        let t = cropData(data[i].data, range);
        data[i].data = t;
      }
    }
    return convertData(data);
  }
  return null;
}
module.exports = convertDataForLine;
