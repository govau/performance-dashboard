import d3 from 'd3';
import Chart from '../../../lib/javascripts/Charts/Chart';

module.exports = function(callback) {
  describe('Basic SVG and data ', () => {
    let data;
    let options;
    let chart;

    beforeAll(()=>{
      if (!callback) {
        data = [[{'x': new Date('2016-01'), 'y': 40},
                {'x': new Date('2016-02'), 'y': null},
                {'x': new Date('2016-03'), 'y': 0}]];
        options = {
          height: 300,
          data: data,
          element: d3.select('#chart'),
          margin: {top: 0, right: 0, bottom: 0, left: 0}
        };
        chart = new Chart(options);
        chart.init();
        chart.render();

      }
       else {
        chart = callback().chart;
        data = callback().data;
      }
    });

    it('should create an chart object', () => {
      expect(chart).toEqual(jasmine.any(Object));
    });

    it('should create an svg of correct size', () => {
      expect(d3.select('svg').style('width')).toEqual(window.testChartWidth + 'px');
      expect(d3.select('svg').style('height')).toEqual('300px');
    });

    it('should create group of corect class', () => {
      expect(d3.select('g').attr('class')).toEqual('chart__wrapper');
    });

    it('should have data', () => {
      let chartData = d3.select('.chart__wrapper')[0][0].__data__;
      expect(chartData.length).toEqual(data.length);
    });

    afterAll(function() {
      chart.destroy();
    });
  });
};
