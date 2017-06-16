import d3 from 'd3';
import { isDate } from 'lodash';
import Chart from './Chart';

/**
 * Class representing a line chart.
 * @extends Chart
 */
class LineChart extends Chart {

  constructor(options) {
    super(options);
    /**
     * If interpolate is specified, sets the interpolation mode to the specified string or function
     * available interpolation:
     *linear - piecewise linear segments, as in a polyline.
     *linear-closed - close the linear segments to form a polygon.
     *step - alternate between horizontal and vertical segments, as in a step function.
     *step-before - alternate between vertical and horizontal segments, as in a step function.
     *step-after - alternate between horizontal and vertical segments, as in a step function.
     *basis - a B-spline, with control point duplication on the ends.
     *basis-open - an open B-spline; may not intersect the start or end.
     *basis-closed - a closed B-spline, as in a loop.
     *bundle - equivalent to basis, except the tension parameter is used to straighten the spline.
     *cardinal - a Cardinal spline, with control point duplication on the ends.
     *cardinal-open - an open Cardinal spline; may not intersect the start or end, but will intersect other control points.
     *cardinal-closed - a closed Cardinal spline, as in a loop.
     *monotone - cubic interpolation that preserves monotonicity in y.
     * @type {String}
     */
    this.interpolate = options.interpolate || null;
  }

  /**
   * overrides super.transformForD3
   * @returns {*}
   */
  transformForD3() {
    return this.data.map((d1) => {
      return d1.map((d2) => {
        if (!isDate(d2.x)) {
          d2.x = new Date(d2.x);
        }
        return d2;
      })
    });
  }

  calculateYMin() {
    let min = d3.min(this.transformedData, (c) => {
          return d3.min(c, (v) => {
            return v.y;
          });
        }) - this.padding.bottom;
    return Math.floor(min / 5) * 5;
  }

  calculateYMax() {
    let max = d3.max(this.transformedData, (c) => {
          return d3.max(c, (v) => {
            return v.y;
          })
        }) + this.padding.top;
    return Math.ceil(max / 5) * 5;
  }

  getXScale() {
    let sampleData = this.transformedData[0];
    let head = sampleData[0].x.getTime();
    let tail = sampleData[sampleData.length - 1].x.getTime();

    let paddingLeft = (tail - head) * this.padding.left / this.width;
    let paddingRight = (tail - head) * this.padding.right / this.width;
    return d3.time.scale().range([0, this.width])
             .domain([head - paddingLeft, tail + paddingRight]);
  }

  getYScale() {
    return d3.scale.linear().range([this.height, 0])
             .domain([this.yMin, this.yMax]);
  }

  computeRenderProperty() {
    super.computeRenderProperty();
    this.line = d3.svg.line().defined(d=>d.y !== null).x(d=>this.xScale(d.x)).y(d=>this.yScale(d.y)).interpolate(this.interpolate);
  }

  render() {
    super.render();
    if (this.width > 0 && this.height > 0) {
      this.svg.selectAll('.line')
        .attr('d', this.line);

      this.svg.selectAll('.ruler')
              .attr('y1', 0)
              .attr('y2', this.height)
              .attr('x1', () =>0)
              .attr('x2', () =>0);

      this.svg.selectAll('.ruler-wrapper')
        .attr('height', this.height)
        .attr('transform', d=> `translate( ${this.xScale(d.x)}, 0)`);

      this.svg.selectAll('.circle')
          .attr('cx', d=>this.xScale(d.x))
          .attr('cy', d=>this.yScale(d.y));
    }
  }

  hover(j) {
    this.svg.selectAll('.line-group')
        .each(function() {
          d3.select(this).selectAll('.circle')
                         .classed({'is-hover': (d, i)=> i === j,
                                   'is-null': d=> !d.y
                                 });
        });

    this.svg.selectAll('.ruler-wrapper')
            .classed('is-hover', (d, i)=> i === j);
  }

  init() {
    super.init();
    this.svg
        .select('g.chart__wrapper')
        .each(function(_data) {
          // add rulers
          d3.select(this).selectAll('.ruler-wrapper')
                .data(d=>d[0])
                .enter()
                .append('g')
                .attr('class', 'ruler-wrapper')
                .append('line')
                .attr('stroke-width', 0)
                .attr('stroke', '#dddddd')
                .attr('class', 'ruler');

          let group = d3.select(this)
                        .selectAll('.line-group')
                        .data(_data)
                        .enter()
                        .append('g')
                        .attr('class', 'line-group');

          group.append('path')
               .attr('class', d=>`line line-${d[0].id}`)
               .attr('stroke', d=> d[0].color)
               .attr('fill', 'none');

          // add circles
          group.each(function() {
            d3.select(this)
            .selectAll('circle')
            .data(d=>d)
            .enter()
            .append('circle')
            .attr('class', d => `circle circle-${d.id}`)
            .attr('fill', d=> d.color)
            .attr('stroke', d=> d.color)
            .attr('r', () => 3)
            .attr('stroke-width', 0);
          });
        });
    this.render();
    this.updateLineStyle();
  }

  switchColorMode(isHighContrastMode) {
    this.isHighContrastMode = isHighContrastMode;
    this.updateLineStyle();
  }

  updateLineStyle(){
    this.svg.selectAll('.line')
    .attr('stroke-dasharray', d=>this.isHighContrastMode ? d[0].altLineStyle : 0)
    .style('stroke-linecap', this.isHighContrastMode ? 'butt' : 'round')
    this.svg.selectAll('.circle').style('fill-opacity', this.isHighContrastMode ? 0 : 1);
  }
}

export default LineChart;
module.exports = LineChart;
