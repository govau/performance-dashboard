import d3 from 'd3';
import Chart from './Chart';
/**
 * Abstract Class representing a bar chart.
 * @extends Chart
 */
class BarChart extends Chart {
  /**
   * Render rects
   * @return {undefined}
   */
  init() {
    super.init();
    this.svg
        .select('g')
        .each(function(_data) {
          d3.select(this)
            .selectAll('g')
            .data(_data)
            .enter()
            .append('g')
            .attr('class', d => `bar-group bar-group-${d[0].id}`)
            .selectAll('rect')
            .data(d=>d)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('fill', d=>this.isHighContrastMode ? d.altColor : d.color);
        });

    this.render();
  }
}

export default BarChart;
module.exports = BarChart;
