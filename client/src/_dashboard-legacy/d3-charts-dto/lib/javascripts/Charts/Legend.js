
let $ = window.jQuery || {};
import d3 from 'd3';
import formatData from './../Helpers/formatData';
import getDate from './../Helpers/getDate';
import defined from './../Helpers/defined';
import reverse from 'lodash/reverse';

const iconSize = 12;

/** Class representing a legend. */
class Legend {
  /**
   * Legend class constructor
   * @param  {object} options Object with the following properties:
   * @param {object} [options.chart] The chart object to append this legend to
   */
  constructor(options) {
    this.chart = options.chart;
    this.widget_id = options.widget_id;
    this.type = this.chart.type;
    this.displayRoundedData = this.chart.displayRoundedData;

    // todo - always supply non-transformed data as the legend data
    // hack: if legendData is provided, use that instead of the data
    // which has been transformed for display in chart
    if (this.legendData) {
      this.data = this.chart.type === 'bar' ?
          reverse(this.chart.legendData) :
          this.chart.transformedData;
    } else {
      this.data = this.chart.type === 'bar' ?
          reverse(this.chart.transformedData) :
          this.chart.transformedData;
    }

    // insert as last element *after* .chart
    this.container = this.chart.element.insert('div', '.chart + *').attr('class', 'legend');
    this.init();
  }

  /**
   * Initialise the legend
   * @return {undefined}
   */
  init(){
    this.render();
    this.updateLegendIcon();
  }

  /**
   * render legend, create a div with tables to display legend and data
   * @return {undefined}
   */
  render() {
    this.date = this.container.append('div')
                .attr('class', 'date').attr('style', 'display:none')
                .datum(this.data[0]);

    let row = this.container.append('table')
              .attr('style', this.data.length > 7 ? 'font-size: 0.8rem;' : '')  // stodo - hack fix: scale the legend data down for nationalmap.gov.au
              .selectAll('tr')
              .data(this.data)
              .enter()
              .append('tr');

    this.th = row.append('th');

    let svg = this.th.append('svg')
             .attr('width', iconSize)
             .attr('height', iconSize)
             .append('g')
             .attr('class', 'legend--icon');

    svg.append('rect').attr('x', 0).attr('y', 0).attr('width', iconSize).attr('height', iconSize).attr('fill', d=> defined(d[0]) ? d[0].color : d.data.color);

    svg.append('line')
       .attr('x1', 0)
       .attr('x2', iconSize)
       .attr('y1', iconSize / 2)
       .attr('y2', iconSize / 2)
       .attr('stroke-linecap','butt')
       .attr('stroke', d=> defined(d[0]) ? d[0].color : d.data.color)
       .attr('stroke-dasharray', d=>defined(d[0]) ? d[0].altLineStyle : 0);

    this.th.append('span').attr('class', 'legend--data-name').text(this.getDataName.bind(this));

    this.td = row.append('td');

    if (this.type === 'pie') {
      this.td.text(d=>formatData(d.data.y, this.chart.prefix, this.chart.suffix, this.displayRoundedData));
    }
  }

  /**
   * Get the name of the data
   * @param  {number} d The current data point
   * @return {undefined}
   */
  getDataName(d) {
    if (this.type !== 'pie') {
      return `${d[0].name}`;
    }
    return `${d.data.name}`;
  }

  /**
   * Update the icon for the legend
   * The reason this is a seperate function is the legends have different icons when in normal mode and high contrast mode
   * @return {undefined}
   */
  updateLegendIcon() {
    let that = this;
    let squares = this.th.selectAll('.legend--icon rect');
    let lines = this.th.selectAll('.legend--icon line');

    squares.each(function(){
      d3.select(this)
          .attr('fill', d=>defined(d[0]) ? (that.chart.isHighContrastMode ?
            d[0].altColor : d[0].color) : (that.chart.isHighContrastMode ? d.data.altColor : d.data.color))
          .attr('visibility', (that.chart.type === 'line' && that.chart.isHighContrastMode === true) ? 'hidden' : 'visible')
          .attr('rx', that.chart.isHighContrastMode ? 2 : iconSize/2)
          .attr('ry', that.chart.isHighContrastMode ? 2 : iconSize/2);
    });

    lines.each(function(){
      d3.select(this).attr('visibility', (that.chart.type === 'line' && that.chart.isHighContrastMode === true) ? 'visible' : 'hidden');
    });
  }

  /**
   * When user hover on the chart, the  data displayed in the legend should be updated
   * @param  {number} i the index of data being hovered
   * @return {undefined}
   */
  hover(i) {
    this.date.text(d => {
      const dateString = getDate().long(d[i].x);
      $(window).trigger(`update:legend_label:${this.widget_id}`, dateString);
      return dateString;
    });

    this.td.text(d => {
      return formatData(d[i].y, this.chart.prefix, this.chart.suffix, this.displayRoundedData);
    });
  }
}

export default Legend;
module.exports = Legend;
