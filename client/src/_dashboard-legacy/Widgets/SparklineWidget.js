import formatData from './../d3-charts-dto/lib/javascripts/Helpers/formatData';
import LineChart from './../d3-charts-dto/lib/javascripts/Charts/LineChart.js';
import getDate from './../d3-charts-dto/lib/javascripts/Helpers/getDate';
import defined from './../d3-charts-dto/lib/javascripts/Helpers/defined.js';

class SparklineWidget {
  constructor(options) {
    this.container = options.element.append('div').attr('class', 'sparkline__inner');
    this.displayRoundedData = options.displayRoundedData;
    this.prefix = options.prefix;
    this.suffix = options.suffix;
    this.units = options.units;
    this.data = options.data;
    this.sparkline = undefined;
    this.metricData = undefined;
    this.metricDataValue = undefined;
    this.metricDataTrend = undefined;
    this.metricDataUnit = undefined;
    this.summary = undefined;
    this.init();
  }

  init(){
    this.metricData = this.container.append('div').attr('class', 'metric-data');
    this.metricDataValue = this.metricData.append('div').attr('class', 'value');
    this.metricDataValue.text('No data');

    if(this.data && this.data.length){
      this.addChart();
    }
  }

  addChart(){
    let sparkLineContainer = this.container.append('div').attr('class', 'sparkline');
    let decorator;
    if (this.units === '$') {
      // prepend if currency
      decorator = this.metricData.insert('div', ":first-child").attr('class', 'decorator');
    } else {
      decorator = this.metricData.append('div').attr('class', 'decorator');
    }

    this.metricDataTrend = decorator.append('div');
    this.metricDataUnit = decorator.append('div').attr('class', 'metric-unit').text(this.units);

    if(this.data[0].length > 1){
      this.sparkline = new LineChart({
        element: sparkLineContainer,
        data: this.data,
        height: 28,
        margin: {top: 0, right: 0, bottom: 0, left: 0},
        padding: {left: 0, right: 0, bottom: 0, top: 0},
        interpolate: 'cardinal',
        isHighContrastMode: false
      });
      this.sparkline.init();
      // new NullDataLayer({chart: this.sparkline, above: false });
      let meta = this.container.append('div').attr('class', 'metric-meta');
      this.summary = meta.append('span');
    }

    this.hover(this.data[0].length - 1);
  }

  hover(i) {
    if(defined(this.sparkline)){
      this.sparkline.hover(i);
      this.summary.html(this.getSummary(i));
    }

    if (this.data[0][i]) {
      this.container.classed('no-data', this.data[0][i].y === null);
      this.metricDataValue.text(formatData(this.data[0][i].y, '', '', false, defined(this.prefix) && this.prefix === '$'));
      this.metricDataTrend.attr('class', 'metric-trend');
    } else  {
      this.container.classed('no-data', true);
      this.metricDataValue.text(formatData(null));
      this.metricDataTrend.attr('class', 'metric-trend');
    }
    return;
  }

  getSummary(i) {
    let trend = 'Up';
    let volume = 0;
    let date = getDate().long(this.data[0][this.data[0].length - 1].x);
    if (i < this.data[0].length && i > 0) {
      trend = this.getTrend(i);
      date = getDate().long(this.data[0][i-1].x);
      volume = formatData(
          Math.abs(this.data[0][i].y - this.data[0][ i - 1].y),
          this.prefix,
          this.suffix
      );
      if (Math.abs(this.data[0][i].y - this.data[0][ i - 1 ].y) === 0) {
        volume = ' ';
      }
    }
    return `<span class='metric-trend fa fa-arrow-${trend}'></span><span class='summary-text'>${trend} ${volume} since ${date}</span>`;
  }

  getTrend(i){
    if (i < this.data[0].length && i > 0) {
      if (this.data[0][i].y > this.data[0][i - 1].y) {
        return 'up';
      } else if (this.data[0][i].y < this.data[0][i - 1].y){
        return 'down';
      } else {
        return 'unchanged';
      }
    }
    return null;
  }

  destroy(){
    this.container.remove();
  }
}

module.exports = SparklineWidget;
export default SparklineWidget;
