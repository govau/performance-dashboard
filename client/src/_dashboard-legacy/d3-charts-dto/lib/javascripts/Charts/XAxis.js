import d3 from 'd3';
import Axis from './Axis';
import getDate from './../Helpers/getDate';

/**
 * Crudely get the best Tick values by sample size
 * @param sample {Array} - the data sample
 * @returns {Array} - ticks
 */
const getBestTickValues = (sample = []) => {
  let size = sample.length;
  if ([1, 2, 3, 4].indexOf(size) >= 0) {
    return sample.map(d => d.x);
  }
  return [sample[0].x, sample[Math.floor(size / 2)].x, sample[size - 1].x];
};

let numberOfInstance = 0;

/**
 * Class representing an X axis.
 * @extends Axis
 */
class XAxis extends Axis {
  /**
   * Constructor
   * @param  {Object} options - [description]
   * @return {undefined}
   */
  constructor(options) {
    super(options);
    this.render();
  }

  /**
   * Create a new x axis based on the x values of the first series of the data
   */
  get Axis() {
    let sampleData = this.chart.data[0];
    let size = sampleData.length;

    return d3.svg
      .axis()
      .scale(this.chart.xScale)
      .orient('bottom')
      .tickFormat(getDate().long)
      .tickValues(getBestTickValues(sampleData));
  }

  /**
   * Render function
   * @return {undefined} - description
   */
  render() {
    super.render();
    this.axis
      .attr('class', 'x axis')
      .attr(
        'transform',
        `translate(${this.chart.margin.left}, ${this.chart.height +
          this.chart.margin.top})`,
      );

    numberOfInstance++;
    d3.select(window).on('resize.' + 'xAxis' + numberOfInstance, () => {
      this.axis.call(this.Axis);
    });
  }
}

export default XAxis;
module.exports = XAxis;
