import d3 from 'd3';
import BarChart from '../../../lib/javascripts/Charts/BarChart';
import addChartSpec from './ChartSpec.js';

module.exports = function() {
  describe('Bar Chart', () => {
    let data;
    let options;
    let barChart;

    beforeAll(() => {
      data = [
        [
          { x: new Date('2016-01'), y: 29.39, id: 0 },
          { x: new Date('2016-02'), y: null, id: 0 },
          { x: new Date('2016-03'), y: 0, id: 0 },
        ],
        [
          { x: new Date('2016-01'), y: 29.39, id: 1 },
          { x: new Date('2016-02'), y: null, id: 1 },
          { x: new Date('2016-03'), y: 0, id: 1 },
        ],
      ];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      };

      barChart = new BarChart(options);
      barChart.init();
    });
    it('should create rectangles', () => {
      expect(d3.selectAll('rect').node()).not.toBe(null);
      expect(d3.selectAll('rect')[0].length).toEqual(
        data[1].length + data[0].length,
      );
    });

    it('rects should not have height or width', () => {
      expect(d3.selectAll('rect').attr('width')).toBe(null);
      expect(d3.selectAll('rect').attr('height')).toBe(null);
    });

    it('rects should have correct class', () => {
      d3.selectAll('rect').each(function() {
        expect(d3.select(this).attr('class')).toEqual('bar');
      });
    });

    addChartSpec(() => ({ chart: barChart, data: data }));
    afterAll(() => {
      barChart.destroy();
    });
  });
};
