import d3 from 'd3';

let numberOfInstance = 0;
let benchMarkColor = '#5c6976';

/** Class representing a benchmark. */
class BenchMark {
  constructor(options) {
    this.chart = options.chart;
    this.benchMarkData = options.benchMarkData;
    this.benchMark = this.chart.svg.append('g').attr('class', 'bench-mark-group');
    this.init();
  }

  init() {
    this.benchMark.attr('transform', `translate(${this.chart.margin.left} , ${this.chart.margin.top})`);
    let group = this.benchMark.selectAll('line')
        .attr('class', 'benchMark')
        .data(this.benchMarkData)
        .enter();

    group.append('line')
        .attr('stroke', benchMarkColor)
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '5,5')
        .attr('y1', d=> this.chart.yScale(d))
        .attr('y2', d=> this.chart.yScale(d));

    group.append('text', 'line')
         .text(d=> d + this.chart.units)
         .attr('x', 0)
         .attr('y', d=> this.chart.yScale(d))
         .attr('dy', '1em')
         .style({
           'fill': benchMarkColor,
           'font-size': '10px'
         });

    this.render();
    numberOfInstance ++;
    d3.select(window).on('resize.' + 'benchMark' + numberOfInstance, this.render.bind(this));
  }

  render() {
    this.benchMark.selectAll('line')
        .attr('x1', 0)
        .attr('x2', this.chart.width);

  }
}

module.exports = BenchMark;
