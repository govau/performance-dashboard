import d3 from 'd3';
import PieChart from '../../../lib/javascripts/Charts/PieChart';
import addChartSpec from './ChartSpec.js';

module.exports = function() {
  describe('Pie Chart', () => {
    let data;
    let options;
    let pieChart;

    beforeAll(() => {
      data = [{ x: '0', y: 50 }, { x: '1', y: 50 }];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      };

      pieChart = new PieChart(options);
      spyOn(pieChart, 'render').and.callThrough();
      pieChart.init();
    });

    it('should call render', () => {
      expect(pieChart.render).toHaveBeenCalled();
    });

    it('should transform data', () => {
      expect(pieChart.transformedData.length).toEqual(2);
    });

    it('should create a arcs', () => {
      expect(d3.selectAll('.arc')[0].length).toEqual(2);
    });
    addChartSpec(() => ({ chart: pieChart, data: data }));
    afterAll(() => {
      pieChart.destroy();
    });
  });
};
