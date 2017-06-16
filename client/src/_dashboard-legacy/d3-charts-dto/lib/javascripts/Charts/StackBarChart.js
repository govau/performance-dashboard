import d3 from 'd3';
import BarChart from './BarChart';
import isActive from './../Helpers/isActive';


/**
 * process data from stack layout to handle negative values
 * @param  {Number} dataSeriesCount number of series in the data
 * @return {Array}  processed data to render the chart
 */
let buildOut = function(dataSeriesCount) {
  let currentXOffsets = [];
  let currentXIndex = 0;
  return function(d, y0, y) {
    if (currentXIndex++ % dataSeriesCount === 0) {
      currentXOffsets = [0, 0];
    }
    if (y >= 0) {
      d.y0 = currentXOffsets[1];
      d.y = y;
      currentXOffsets[1] += y;
    } else {
      d.y0 = currentXOffsets[0] + y;
      d.y = -y;
      currentXOffsets[0] += y;
    }
  }
}

/**
 * Class representing a stack bar chart.
 * @extends BarChart
 */
class StackBarChart extends BarChart {
  constructor(options) {
    super(options);

    /**
     * Stacking option: normal or percentage
     * @type {String}
     */
    this.stacking = options.stacking || 'normal';
  }

  /**
   * Caculate y axis min value, if stacking == percentage, then min value = 0
   * @return {Number} [description]
   */
  calculateYMin() {
    if (this.stacking === 'percentage') {
      return 0;
    }
    let min = d3.min(this.transformedData.map(c=> d3.min(c, (d)=>d.y0))) - this.padding.bottom;
    return Math.floor(min / 5) * 5;
  }

  /**
   * Caculate y axis max value, if stacking == percentage, then max value = 100
   * @return {Number} - description
   */
  calculateYMax() {
    if (this.stacking === 'percentage') {
      return 100;
    }
    let max = d3.max(this.transformedData.map(c=> d3.max(c, (d)=>d.y0 + d.y))) + this.padding.top;
    return Math.ceil(max / 5) * 5;
  }

  getXScale() {
    return d3.scale
             .ordinal()
             .rangeRoundBands([0, this.width], 0.5).domain(this.transformedData[0].map(d=>d.x));
  }

  getYScale() {
    return d3.scale
          .linear()
          .rangeRound([this.height, 0]).domain([this.yMin, this.yMax]);
  }

  transformForD3() {
    let tempData = this.data.slice();
    tempData.sort((a, b)=> d3.sum(a, d=>d.y) - d3.sum(b, d=>d.y));
    return d3.layout.stack().out(buildOut(this.data.length))(tempData);
  }

  hover(j) {
    let that = this;
    this.svg.selectAll('.bar-group')
        .each(function() {
          d3.select(this).selectAll('.bar')
            .attr('fill', (d, i)=>{
              if (that.isHighContrastMode === true){
                return isActive(d, i, j) === true ? d.altColorDark || d3.rgb(d.color).darker(0.85) : d.altColor;
              } else {
                return isActive(d, i, j) === true ? d3.rgb(d.color).darker(0.8) : d.color;
              }
            });
        });
  }

  render() {
    super.render();
    if (this.width > 0 && this.height > 0) {
      this.svg.selectAll('.bar')
          .attr('x', d=> this.xScale(d.x))
          .attr('width', this.xScale.rangeBand())
          .attr('y', d=> this.yScale(d.y + d.y0))
          .attr('height', d=> this.yScale(d.y0) - this.yScale(d.y + d.y0));
    }
  }

  switchColorMode(isHighContrastMode) {
    this.isHighContrastMode = isHighContrastMode;
    if(isHighContrastMode === true){
      this.svg.selectAll('.bar').attr('fill', d=>d.altColor);
    }else{
      this.svg.selectAll('.bar').attr('fill', d=>d.color);
    }
  }
}

export default StackBarChart;
module.exports = StackBarChart;
