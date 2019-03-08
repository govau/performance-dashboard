import getColors from './getColors.js';
import strokeDashes from './strokeDashes';

let kpiColors = {
  'user-satisfaction': '#cf7e33',
  'cost-per-transaction': '#7e985c',
  'digital-take-up': '#007cc3',
  'completion-rate': '#6e63a7',
};

let kpiLineStyles = {
  'user-satisfaction': '12, 5',
  'cost-per-transaction': '10, 5',
  'digital-take-up': '3, 3',
  'completion-rate': '5, 10',
};

function getColor(id, i, data) {
  if (kpiColors[id]) {
    return {
      color: kpiColors[id],
      altColor: window.patterns[i],
      altColorDark: window.patternsDark[i],
      altLineStyle: kpiLineStyles[id],
    };
  }
  return {
    color: getColors()[i],
    altColor: window.patterns[i],
    altColorDark: window.patternsDark[i],
    altLineStyle: data.length > 1 ? strokeDashes[i] : 0,
  };
}

/*
@function convertData
@param array
the data to be converted
each data point should have the following property:
{
  x: x value
  y: y value
  id: the id of the series
  color: color of the series
  altColor: alternative color for the series
  altLineStyle: alternative style for line
  name: name of the series
  }
 */
function convertData(data) {
  if (!data || !data.length) {
    return null;
  } else {
    let tempData = data.map((c, i) =>
      c.data.map(d => ({
        x: new Date(d.label),
        y: d.value === null ? d.value : Number(d.value),
        id: c.id,
        color: getColor(c.id, i, data).color,
        altColor: getColor(c.id, i, data).altColor,
        altColorDark: getColor(c.id, i, data).altColorDark,
        altLineStyle: getColor(c.id, i, data).altLineStyle,
        name: c.name,
      })),
    );
    for (let i = 0; i < tempData.length; i++) {
      tempData[i].sort((a, b) => a.x - b.x);
    }
    return tempData;
  }
}

export default convertData;
module.exports = convertData;
