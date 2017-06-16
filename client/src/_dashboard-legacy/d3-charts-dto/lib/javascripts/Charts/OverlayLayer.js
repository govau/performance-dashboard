import d3 from 'd3';
import Layer from './Layer';
import defined from './../Helpers/defined';


/**
 * Class representing a layer to aid interaction.
 * @extends Layer
 */
class OverlayLayer extends Layer {
  /**
   * OverlayLayer class constructor
   * @param  {object} options Object with the following properties:
   * @param {object} [options.chart] The chart object to append this legend to
   * @param {object} [options.legend] The legend object which will be updated when hover happens
   * @param {function} [options.hoverCallback] The callback function
  */
  constructor(options) {
    super(options);
    this.legend = options.legend;
    this.hoverCallback = options.hoverCallback;
    this.init();
  }

/**
 * initialise hover layer
 * This function does the following things:
 * 1. update legend and chart to show the latest data point as action
 * 2. listen to touchmove event on mobile to update active data point for legend and chart
 * 3. listen to mousemove event to update active data point for legend and chart
 * @return {undefined}
 */
  init() {
    super.init();
    let that = this;
    let lastIndex = this.chart.data[0].length - 1;
    this.hover(lastIndex);

    function handleTouchMove() {
      d3.event.preventDefault();
      // d3.event.stopPropagation();
      let index = lastIndex;
      let x = d3.touches(this)[0][0];
      let data = that.chart.data[0];

      if (that.chart.type === 'bar') {
        let rectW = that.chart.xScale.rangeBand() * 2;
        let indexTemp = Math.floor(x / rectW);
        if (data[indexTemp]) {
          index = indexTemp;
        }
      } else {
        let bisectDate = d3.bisector(function(d) { return d.x; }).left;
        let x0 = that.chart.xScale.invert(x);

        let i = bisectDate(data, x0, 1);
        let d0 = data[i - 1];
        let d1 = data[i];
        if (d0 && d1) {
          index = x0 - d0.x > d1.x - x0 ? i : i - 1;
        }
      }
      that.hover(index);
    }

    this.layer.selectAll('rect')
        .attr('fill', '#FFFFFF')
        .attr('fill-opacity', 0)
        .on('mouseover', (d, i)=>{
          that.hover(i);
        })
        .on('touchmove', handleTouchMove);
  }

  /**
   * hover function, activate data point being hovered , activate the data point for chart and legend, then run callback function
   * @param  {number} i index of data point to be activated
   * @return {undefined}
   */
  hover(i) {
    if (!defined(this.chart)) {
      throw new Error('Chart is not defined.');
    } else {
      this.chart.hover(i);
    }
    this.legend && this.legend.hover(i);
    if (this.hoverCallback && typeof this.hoverCallback === 'function') {
      this.hoverCallback(i, this.chart.data);
    }
  }
}
module.exports = OverlayLayer;

