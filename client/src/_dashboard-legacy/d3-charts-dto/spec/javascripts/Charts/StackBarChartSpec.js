import d3 from 'd3';
import StackBarChart from '../../../lib/javascripts/Charts/StackBarChart';
import addChartSpec from './ChartSpec.js';

module.exports = function() {
  describe('Single Bar Chart', () => {
    let data;
    let options;
    let barChart;

    beforeAll(()=>{
      data = [
        [ {'x': new Date('2016-01'), 'y': 29.39, id: 0},
          {'x': new Date('2016-02'), 'y': null, id: 0},
          {'x': new Date('2016-03'), 'y': 0, id: 0}]
      ];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: {top: 0, right: 0, bottom: 0, left: 0}
      };

      barChart = new StackBarChart(options);
      spyOn(barChart,'render').and.callThrough();
      barChart.init();
    });

    it('should call render', ()=>{
       expect(barChart.render).toHaveBeenCalled();
    });

    it('should have correct class', () => {
      expect(d3.select('.bar-group').attr('class')).toEqual('bar-group bar-group-0');
    });

    it('should create rectangles', () => {
      expect(d3.selectAll('rect').node()).not.toBe(null);
      expect(d3.selectAll('rect')[0].length).toEqual(data[0].length);
    });

    it('rects should have correct height and width', () => {
      let wCeil = Math.ceil(window.testChartWidth / (data[0].length + data[0].length + 1));
      let wFloor = Math.floor(window.testChartWidth / (data[0].length + data[0].length + 1));

      for (let i = 0; i < data[0].length; i ++) {
        expect(parseInt(d3.selectAll('rect')[0][i].getAttribute('width'))).toEqual(wCeil||wFloor);
      }
      expect(parseInt(d3.selectAll('rect')[0][0].getAttribute('height'))).toEqual(294);
      expect(parseInt(d3.selectAll('rect')[0][1].getAttribute('height'))).toEqual(0);
      expect(parseInt(d3.selectAll('rect')[0][2].getAttribute('height'))).toEqual(0);
    });

    addChartSpec(()=>({ chart: barChart, data: data}));
    afterAll(()=>{
      barChart.destroy();
    });
  });

  describe('Stacked Bar Chart', () => {
    let data;
    let options;
    let barChart;

    beforeAll(()=>{
      data = [
        [ {'x': new Date('2016-01'), 'y': 29.39, id: 0},
          {'x': new Date('2016-02'), 'y': null, id: 0},
          {'x': new Date('2016-03'), 'y': 0, id: 0}],
        [ {'x': new Date('2016-01'), 'y': 29.39, id: 1},
          {'x': new Date('2016-02'), 'y': 10, id: 1},
          {'x': new Date('2016-03'), 'y': 10, id: 1}]
      ];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: {top: 0, right: 0, bottom: 0, left: 0}
      };

      barChart = new StackBarChart(options);
      barChart.init();
    });

    it('should have correct class', () => {
      expect(d3.selectAll('.bar-group')[0][0].getAttribute('class')).toEqual('bar-group bar-group-0');
      expect(d3.selectAll('.bar-group')[0][1].getAttribute('class')).toEqual('bar-group bar-group-1');
    });

    it('should create rectangles', () => {
      expect(d3.selectAll('rect').node()).not.toBe(null);
      expect(d3.selectAll('rect')[0].length).toEqual(data[0].length * 2);
    });

    it('rects should have correct height and width for each rect', () => {
      let wCeil = Math.ceil(window.testChartWidth / (data[0].length + data[0].length + 1));
      let wFloor = Math.floor(window.testChartWidth / (data[0].length + data[0].length + 1));
      for (let i = 0; i < data[0].length * 2; i ++) {
        expect(parseInt(d3.selectAll('rect')[0][i].getAttribute('width'))).toEqual(wCeil || wFloor);
      }
      expect(parseInt(d3.selectAll('.bar-group-0 rect')[0][0].getAttribute('height'))).toEqual(147);
      expect(parseInt(d3.selectAll('.bar-group-0 rect')[0][1].getAttribute('height'))).toEqual(0);
      expect(parseInt(d3.selectAll('.bar-group-0 rect')[0][2].getAttribute('height'))).toEqual(0);


      expect(parseInt(d3.selectAll('.bar-group-1 rect')[0][0].getAttribute('height'))).toEqual(147);
      expect(parseInt(d3.selectAll('.bar-group-1 rect')[0][1].getAttribute('height'))).toEqual(50);
      expect(parseInt(d3.selectAll('.bar-group-1 rect')[0][2].getAttribute('height'))).toEqual(50);
    });

    addChartSpec(()=>({ chart: barChart, data: data}));
    afterAll(()=>{
      barChart.destroy();
    });
  });
}
