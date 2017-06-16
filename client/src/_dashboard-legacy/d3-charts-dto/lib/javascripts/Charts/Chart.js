import d3 from 'd3';
import defined from './../Helpers/defined';

/**
 * @Chart
 * In D3, If an event listener was already registered for the same type on the selected element, the existing listener is removed before the new listener is added.
 * To register multiple listeners for the same event type, the type may be followed by an optional namespace, such as "click.foo" and "click.bar".
 * count the instance of chart, use the instance to namespace the event listener for window resize to make the chart responsive
 * @type {Number}
 */
let numberOfInstance = 0;



/** Abstract Class representing a chart. */
class Chart {
  /**
   * Chart base class constructor
   * @param  {object} options Object with the following properties:
   * @param {number} [options.height] The height of the chart, the height of the svg would be height of the chart + margin, default = 300
   * @param {object} options.element The element to append the chart to.
   * @param {object} [options.margin] Margin of chart relative to its wrapping svg.
   * @param {object} [options.padding] Padding of chart data. for example, if the max value of the data is 10, setting a paddig top will make the highest point of the chart bigger than 10.
   * @param {string} [options.units] Units of the values in the dataset.
   * @param {string} [options.prefix] Prefix of the values in the dataset.
   * @param {string} [options.suffix] Suffix of the values in the dataset.
   * @param {string} [options.units] Units of the datasets.
   * @param {array} options.data Data for the chart.
   * @param {string} [options.type] The type of chart to be created.
   * @param {boolean} [options.displayRoundedData] Whether to round data value to integer when displaying vlaue in legend and tooltip
   * @param {boolean} [options.isHighContrastMode] Whether to use alternative color/style
   *
   */
  constructor(options) {
    this.render = this.render.bind(this);


    /**
     * Gets or sets the height of the chart,
     * @type {number}
     */
    this.height = options.height || 300;
    /**
     * Gets or sets the element
     * @type {object}
     */
    this.element = options.element;

    /**
     * Gets or sets the margin
     * @type {object}
     */
    this.margin = options.margin || {top: 40, right: 40, bottom: 40, left: 40};

    /**
     * Gets or sets the units for data values
     * @type {string}
     */
    this.units = options.units || '';

    /**
     * Gets or sets the prefix of the data values
     * @type {string}
     */
    this.prefix = options.prefix || '';

    /**
     * Gets or sets the suffix of the data values
     * @type {string}
     */
    this.suffix = options.suffix || '';

    /**
     * Gets or sets the wrapper of the chart
     * @type {object}
     */
    this.wrapper = this.element.append('div').attr('class', 'chart');

    /**
     * Gets or sets the svg for the chart
     * @type {object}
     */
    this.svg = this.wrapper.append('svg').style('fill', '#ffffff');

    /**
     * Gets or sets data for the chart
     * @type {array}
     */
    this.data = options.data;

    /**
     * Gets or sets the type of chart, could be line, bar or pie
     * @type {string}
     */
    this.type = options.type || 'line';

    /**
     * Gets or sets whether data displayed for this chart should be rounded, for example, if a tooltip is displayed
     * @type {boolean}
     */
    this.displayRoundedData = options.displayRoundedData || false;

    /**
     * Gets or sets padding for data
     * @type {object}
     */
    this.padding = options.padding || {top: 0, right: 0, bottom: 0, left: 0};

    this.isHighContrastMode = options.isHighContrastMode;
  }

/**
 * Gets or sets the width of the chart content
 * @return {number} [description]
 */
  get width() {
    return this.wrapper.node().getBoundingClientRect().width - this.margin.left - this.margin.right;
  }

  /**
   * Compute and cache graphic properties
   * @return {undefined} computer render properties
   */
  computeRenderProperty() {
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
  }

  /**
   * Compute and cache data properties
   * @return {undefined} computer data related properties
   */
  computeDataProperty() {
    this.transformedData = this.transformForD3();
    this.yMin = this.calculateYMin();
    this.yMax = this.calculateYMax();
  }

  /**
   * Caculate min y values
   * @return {number}
   */
  calculateYMin() {
    return null;
  }

  /**
   * Caculate max y values
   * @return {number}
   */
  calculateYMax() {
    return null;
  }

  /**
   * get x scale
   * @return {function}
   */
  getXScale() {
    return null;
  }

  /**
   * get x scale
   * @return {function}
   */
  getYScale() {
    return null;
  }

/**
 * Render the chart based computed render properties
 * @return {undefined}
 */
  render() {
    this.svg
        .attr('width', this.width + this.margin.left + this.margin.right)
        .attr('height', this.height + this.margin.top + this.margin.bottom);
    this.computeRenderProperty();
  }
/**
 * Switch color mode
 * @return {undefined}
 */
  switchColorMode(isHighContrastMode) {
    throw new Error('switchColorMode must be implemented in derived classes');
  }

/**
 * Highlight datapoint
 * @param  {number} j index of the dataset that should be highlighted
 * @return {undefined}
 */
  hover() {
    throw new Error('hover must be implemented in derived classes');
  }

  /**
   * Sometimes data needs to be transformed for certain layout(e.g: stack layout, pie layout)
   * @return {array} [description]
   */
  transformForD3() {
    // copy the data
    return this.data.slice();
  }

/**
 * init the chart
 * @return {undefined}
 */
  init() {
    this.computeDataProperty();

    if(!defined(this.transformedData) || !this.transformedData.length){
      throw new Error(`data for d3 charts is ${this.transformedData}`);
    }

    this.svg
        .append('g')
        .attr('class', 'chart__wrapper')
        .attr('transform', `translate(${this.margin.left} , ${this.margin.top})`)
        .datum(this.transformedData);

    numberOfInstance ++;

    d3.select(window).on('resize.' + 'chart' + numberOfInstance, this.render);

    return this;
  }

/**
 * Destroy the chart
 * @return {undefined}
 */
  destroy() {
    this.wrapper.remove();
    d3.select(window).on('resize.' + 'chart' + numberOfInstance, null);
  }
}

export default Chart;
module.exports = Chart;
