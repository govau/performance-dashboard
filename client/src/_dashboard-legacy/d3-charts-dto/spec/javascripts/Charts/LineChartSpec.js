import d3 from 'd3';
import LineChart from '../../../lib/javascripts/Charts/LineChart';
import addChartSpec from './ChartSpec.js';

module.exports = function() {
  describe('Single lineChart', () => {
    let data;
    let options;
    let lineChart;

    beforeAll(() => {
      data = [
        [
          { x: new Date('2016-01'), y: 29.39, id: 0, index: 0 },
          { x: new Date('2016-02'), y: null, id: 0, index: 0 },
          { x: new Date('2016-03'), y: 0, id: 0, index: 0 },
        ],
      ];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      };

      lineChart = new LineChart(options);
      lineChart.init();
    });

    it('should have correct class', () => {
      expect(d3.selectAll('.line')[0][0].getAttribute('class')).toEqual(
        'line line-0',
      );
    });

    it('should append one path', () => {
      expect(d3.selectAll('path').node()).not.toBe(null);
      expect(d3.selectAll('path')[0].length).toEqual(1);
    });

    it('should append tooltip circles', () => {
      expect(d3.selectAll('circle').node()).not.toBe(null);
      expect(d3.selectAll('circle')[0].length).toEqual(3);
    });

    it('tooltip circle should have correct size', () => {
      d3.selectAll('circle').each(function() {
        expect(d3.select(this).attr('r')).toEqual('3');
      });
    });

    it('should append tooltip rulers', () => {
      expect(d3.selectAll('.ruler').node()).not.toBe(null);
      expect(d3.selectAll('.ruler')[0].length).toEqual(3);
    });

    it('tooltip rulers should have correct position', () => {
      d3.selectAll('.ruler').each(function(d, i) {
        expect(d3.select(this).attr('y1')).toEqual('0');
        expect(d3.select(this).attr('y2')).toEqual('300');
        expect(d3.select(this).attr('x1')).toEqual(d3.select(this).attr('x2'));
      });
      let x1 = +d3.selectAll('.ruler')[0][0].getAttribute('x1');
      let x2 = +d3.selectAll('.ruler')[0][1].getAttribute('x1');
      let x3 = +d3.selectAll('.ruler')[0][2].getAttribute('x1');
      expect(x3).not.toBeLessThan(x2);
      expect(x2).not.toBeLessThan(x1);
    });

    it('tooltip rulers should not be visible', () => {
      d3.selectAll('.ruler').each(function() {
        expect(d3.select(this).attr('stroke-width')).toEqual('0');
      });
    });

    it('path should not be empty', () => {
      expect(d3.selectAll('path').attr('d')).not.toBe(null);
    });

    it('should have break for null data', () => {
      let line = d3.select('.line-0');
      let pathArray = line.attr('d').split('');
      let filtered = pathArray.filter(d => d === 'M');
      expect(filtered.length).toEqual(2);
    });

    it('circles should indicate hover', () => {
      lineChart.hover(0);
      d3.selectAll('circle').each(function(d, i) {
        if (i === 0) {
          expect(d3.select(this).classed('is-hover')).toEqual(true);
        } else {
          expect(d3.select(this).classed('is-hover')).toEqual(false);
        }
      });
    });

    it('tooltip rulers should be visible on hover', () => {
      lineChart.hover(0);
      d3.selectAll('.ruler-wrapper').each(function(d, i) {
        if (i === 0) {
          expect(d3.select(this).classed('is-hover')).toEqual(true);
        } else {
          expect(d3.select(this).classed('is-hover')).toEqual(false);
        }
      });
    });

    addChartSpec(() => ({ chart: lineChart, data: data }));

    afterAll(() => {
      lineChart.destroy();
    });
  });

  describe('Multiple lineChart', () => {
    let data;
    let options;
    let lineChart;

    beforeAll(() => {
      data = [
        [
          { x: new Date('2016-01'), y: 29.39, id: 0, index: 0 },
          { x: new Date('2016-02'), y: null, id: 0, index: 0 },
          { x: new Date('2016-03'), y: 0, id: 0, index: 0 },
        ],
        [
          { x: new Date('2016-01'), y: 29.39, id: 1, index: 1 },
          { x: new Date('2016-02'), y: null, id: 1, index: 1 },
          { x: new Date('2016-03'), y: 0, id: 1, index: 1 },
        ],
      ];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      };

      lineChart = new LineChart(options);

      lineChart.init();
    });

    it('should have correct class', () => {
      expect(d3.selectAll('.line')[0][0].getAttribute('class')).toEqual(
        'line line-0',
      );
      expect(d3.selectAll('.line')[0][1].getAttribute('class')).toEqual(
        'line line-1',
      );
    });

    it('should append two path', () => {
      expect(d3.selectAll('path').node()).not.toBe(null);
      expect(d3.selectAll('path')[0].length).toEqual(2);
    });

    it('should append tooltip circles', () => {
      expect(d3.selectAll('circle').node()).not.toBe(null);
      expect(d3.selectAll('circle')[0].length).toEqual(6);
    });

    it('should append tooltip rulers', () => {
      expect(d3.selectAll('.ruler').node()).not.toBe(null);
      expect(d3.selectAll('.ruler')[0].length).toEqual(3);
    });

    it('tooltip rulers should have correct position', () => {
      d3.selectAll('.ruler').each(function(d, i) {
        expect(d3.select(this).attr('y1')).toEqual('0');
        expect(d3.select(this).attr('y2')).toEqual('300');
      });
    });

    it('tooltip rulers should not be visible', () => {
      d3.selectAll('.ruler').each(function() {
        expect(d3.select(this).attr('stroke-width')).toEqual('0');
      });
    });

    it('path should not be empty', () => {
      expect(d3.selectAll('path').attr('d')).not.toBe(null);
    });

    it('should have break for null data', () => {
      let line = d3.select('.line-0');
      let pathArray = line.attr('d').split('');
      let filtered = pathArray.filter(d => d === 'M');
      expect(filtered.length).toEqual(2);
    });

    addChartSpec(() => ({ chart: lineChart, data: data }));
    afterAll(() => {
      lineChart.destroy();
    });
  });
};
