/** Class representing an Axis. */
class Axis {
  /**
   * Constructor
   * @param  {Object} options
   * @return {undefined}
   */
  constructor(options) {
    /**
     * The chart to append this axis to
     * @type {Object}
     */
    this.chart = options.chart;

    /**
     * Axis element
     * @type {Object}
     */
    this.axis = this.chart.svg.append('g');
  }

  /**
   * Axis function
   * need to be implemented in child class
   */
  get Axis() {
    throw new Error('axis must be implemented in derived classes');
  }

  /**
   * Render function
   * @return {undefined}
   * Apply the axis to a selection, the selection must contain an svg or g element
   */
  render() {
    this.axis.call(this.Axis);
  }


/**
 * Destroy the axis
 * @return {undefined} remove the `g` element that holds the axis
 */
  destroy() {
    this.axis.remove();
  }
}

module.exports = Axis;
