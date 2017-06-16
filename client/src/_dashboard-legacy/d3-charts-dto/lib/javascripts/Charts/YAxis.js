import d3 from 'd3';
import Axis from './Axis';
import formatData from './../Helpers/formatData';

/**
 * Class representing an Y axis.
 * @extends Axis
 */
class YAxis extends Axis {

  /**
   * Constructor
   * @param  {Object} options - description
   * @return {undefined}
   */
  constructor(options) {
    super(options);
    this.render();
  }

  /**
   * Create a new y axis based on the x values of the first series of the data
   */
  get Axis() {
    let min = this.chart.yMin;
    let max = this.chart.yMax;
    let tickValues = [min, max];
    if (min < 0) {
      tickValues = [min, 0, max];
    }

    return d3.svg.axis()
      .scale(this.chart.yScale)
      .orient('right')
      .tickFormat(d=>formatData(d, this.chart.prefix, this.chart.suffix, this.chart.displayRoundedData))
      .tickValues(tickValues);
  }

  /**
   * Render function
   * @return {undefined} - description
   */
  render() {
    super.render();
    this.axis.attr('class', 'y axis')
        .attr('transform', `translate(7, ${this.chart.margin.top})`)
        .selectAll('text')
        .attr('y', -6)
        .style('text-anchor', 'start');
  }
}

export default YAxis;
module.exports = YAxis;
