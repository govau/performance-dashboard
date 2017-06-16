import d3 from 'd3';
import getColors from './getColors.js';
import textures from 'textures';

/**
 * Use texturejs to create textures for high contrast mode
 * @return {array} an array of patterns created
 */
function createPatterns(options = {darken:false}) {
  let svg = d3.select('body')
              .append('div')
              .attr('class', 'patterns')
              .append('svg');
  let colors = getColors();

    if (options.darken) {
        colors = colors.map((c) => {
            return d3.rgb(c).darker(0.8);
        });
    }

  let ts = [];
  colors.forEach((c, i)=>{
    let t;
    switch(i) {
    case 0:
      t = textures.lines()
        .thicker()
        .strokeWidth(1)
        .stroke(d3.rgb(c).brighter(0.6))
        .background(c);
        break;
    case 1:
        t = textures.circles()
        .fill(d3.rgb(c).brighter(0.6))
        .thicker()
        .background(c);
        break;
    case 2:
        t = textures.paths()
        .d('crosses')
        .stroke(d3.rgb(c).brighter(0.6))
        .background(c)
        .lighter()
        .thicker();
        break;
    case 3:
        t = textures.paths()
        .d('waves')
        .thicker()
        .strokeWidth(1)
        .stroke(d3.rgb(c).brighter(0.6))
        .background(c);
        break;
    case 4:
        t = textures.lines()
        .strokeWidth(1)
        .thicker()
        .orientation('6/8')
        .stroke(d3.rgb(c).brighter(0.6))
        .background(c);
        break;
    default:
        t = textures.circles()
        .radius(3)
        .fill('transparent')
        .strokeWidth(1)
        .stroke(d3.rgb(c).brighter(0.6))
        .background(c);
        break;
      }

    svg.call(t);
    ts.push(t.url());
  });
  return ts;
}
module.exports = createPatterns;
export default createPatterns;
