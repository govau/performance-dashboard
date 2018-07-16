import d3 from 'd3';
import SparklineWidget from './../../src/_dashboard-legacy/Widgets/SparklineWidget';


module.exports = function() {
  describe('sparkline widget creation', () => {
    let widget;
    let data = [[{'x': new Date('2016-01'), 'y': 40},
                {'x': new Date('2016-02'), 'y': null},
                {'x': new Date('2016-03'), 'y': 0}]];


    beforeAll(function() {
      widget = new SparklineWidget({
            element: d3.select('#chart'),
            data: null,
            prefix: '%',
            suffix: '%',
            units:'%',
            displayRoundedData: false
          });
    });

    it('should create widget', () => {
        expect(widget).toBeDefined();
        expect(widget.prefix).toBeDefined();
        expect(widget.suffix).toBeDefined();
        expect(widget.units).toBeDefined();
        expect(widget.displayRoundedData).toBeDefined();
    });

    it('should not create widget if there is no data', ()=>{
        spyOn(widget, 'addChart');
        widget.init();
        expect(widget.sparkline).not.toBeDefined();
        expect(widget.addChart).not.toHaveBeenCalled();
    });

    it('should display no data if there is no data', ()=>{
        expect(widget.metricDataValue).toBeDefined();
        expect(widget.metricDataValue.text()).toEqual('No data');
    });

    it('should display no summary and trend and unit', ()=>{
        expect(widget.metricDataTrend).not.toBeDefined();
        expect(widget.metricDataUnit).not.toBeDefined();
        expect(widget.summary).not.toBeDefined();
    });

    it('should create widget if there is data', ()=>{
        widget.data = data;
        spyOn(widget, 'addChart').and.callThrough();
        widget.init();
        expect(widget.sparkline).toBeDefined();
        expect(widget.addChart).toHaveBeenCalled();
    });

    it('should have summary and trend and unit when data is defined', ()=>{
        expect(widget.metricDataTrend).toBeDefined();
        expect(widget.metricDataUnit).toBeDefined();
        expect(widget.summary).toBeDefined();
    });

    afterAll(()=>{
      widget.destroy();
    });
  });
}
