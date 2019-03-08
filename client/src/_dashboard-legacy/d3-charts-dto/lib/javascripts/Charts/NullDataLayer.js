import d3 from 'd3';
import Layer from './Layer';

/**
 * Class representing a layer indicating null data points.
 * @extends Layer
 */
class NullDataLayer extends Layer {
  /**
   * OverlayLayer class constructor
   * @param  {object} options Object with the following properties:
   * @param {object} [options.chart] The chart object to append this legend to
   */
  constructor(options) {
    super(options);
    this.init();
  }

  /**
   * For each data point, create a rect
   * For data point that has y value === null, give the coresponding rect a 'empty' class so we can apply styles to it to indicate missing data
   * @return {undefined}
   */
  init() {
    super.init();
    this.layer.selectAll('rect').attr('class', (d, i) => {
      let dataY = this.chart.data.map(d => d[i].y);
      if (dataY.indexOf(null) > -1) {
        return 'empty';
      } else {
        return '';
      }
    });
  }
}
module.exports = NullDataLayer;
