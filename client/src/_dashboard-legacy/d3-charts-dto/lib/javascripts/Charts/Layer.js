import d3 from 'd3';

let numberOfInstance = 0;

/** Abstract Class representing a layer. */
class Layer {

  constructor(options) {
    /**
     * Layer class constructor
     * @param  {object} options Object with the following properties:
     * @param {object} [options.chart] The chart object to append this legend to
     * @param {boolean} [options.above] Whether the layer sits on top of the chart or below the chart
     *
     */
    this.chart = options.chart;
    if (options.above === true) {
      this.layer = this.chart.svg.append('g').attr('class', 'layer--top');
    } else {
      this.layer = this.chart.svg.insert('g', 'g.chart__wrapper').attr('class', 'layer--bottom');
    }
  }

  /**
   * Calculate the width of the layer rect
   * @private
   * @param  {Object} d - Data point
   * @param  {Number} i Index
   * @return {Number}   width for this rect
   */
  _rectW(d, i) {
    if (this.chart.type === 'bar') {
      return this.chart.xScale.rangeBand() * 2;
    }

    let nextX = this._getNextX(i);
    let prevX = this._getPrevX(i);

    if (prevX === null && nextX === null) {
      return this.chart.width;
    }
    if (prevX === null) { prevX = this.chart.xScale.domain()[0]; }
    if (nextX === null) { nextX = this.chart.xScale.domain()[this.chart.xScale.domain().length - 1]; }

    return Math.max(0, (this.chart.xScale(nextX) - this.chart.xScale(prevX)) / 2);
  }

  /**
   * X position of this rect
   * @private
   * @param  {object} d The current datapoint to create layer rectangle for
   * @param  {number} i The index of this data point in the data array
   * @return {number}   The x cordinate for this data point
   */
  _rectX(d, i) {
    let thisX = d.x;
    if (typeof this.chart.xScale.rangeBand === 'function') {
      return this.chart.xScale(thisX) - this.chart.xScale.rangeBand() * 0.5;
    }

    let nextX = this._getNextX(i);
    let prevX = this._getPrevX(i);

    // if this is a single data point position the eventRect at 0
    if (prevX === null && nextX === null) {
      return 0;
    }

    if (prevX === null) { prevX = this.chart.xScale.domain()[0]; }
    return (this.chart.xScale(thisX) + this.chart.xScale(prevX)) / 2;
  }

  /**
   * Previous data point relative to index i
   * @private
   * @param  {number} i The current index of the data point
   * @return {object}   The previous x value, which is a date object
   */
  _getPrevX(i) {
    let d = this.chart.data[0][i - 1];
    return typeof d !== 'undefined' ? d.x : null;
  }

  /**
   * Next data point relative to index i
   * @private
   * @param  {number} i The current index of the data point
   * @return {object}   The next x value, which is a date object
   */
  _getNextX(i) {
    let d = this.chart.data[0][i + 1];
    return typeof d !== 'undefined' ? d.x : null;
  }

  /**
   * Init the layer
   * @return {undefined} create a layer
   */
  init() {
    this.layer.attr('transform', `translate(${this.chart.margin.left} , ${this.chart.margin.top})`);

    this.layer.selectAll('rect')
        .data(this.chart.data[0])
        .enter()
        .append('rect');

    this.render();
    numberOfInstance++;
    d3.select(window).on('resize.' + 'layer' + numberOfInstance, this.render.bind(this));
  }

  /**
   * render the layer
   * @return {undefined} render the layer with correct width and height
   */
  render() {
    if (this.chart.width > 0 && this.chart.height > 0) {
      this.layer.selectAll('rect')
          .attr('height', this.chart.height)
          .attr('width', (d, i)=> this._rectW(d, i))
          .attr('x', (d, i)=>this._rectX(d, i));
    }
  }
}

module.exports = Layer;
