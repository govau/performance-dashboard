import d3 from 'd3';
import OverlayLayer from '../../../lib/javascripts/Charts/OverlayLayer';

module.exports = function() {
  describe('Overlay layer', () => {
    let layer;
    let legend;
    let chart = {};
    beforeAll(()=>{
      chart = jasmine.createSpyObj('chart', ['hover']);
      chart.svg = d3.select('#container').append('svg');
      chart.margin = {top: 0, right: 0, bottom: 0, left: 0};
      chart.data = [[0, 1, 2]];

      legend = jasmine.createSpyObj('legend', ['hover']);
      layer = new OverlayLayer({chart: chart, above: true, legend: legend});

      spyOn(layer.layer, 'attr');
      spyOn(layer.layer, 'selectAll').and.callThrough();
      spyOn(layer, 'render').and.callThrough;
      layer.init();
    });

    it('should transform position', ()=>{
      expect(layer.layer.attr).toHaveBeenCalled();
    });

    it('should add data and create rect', ()=>{
      expect(layer.layer.selectAll).toHaveBeenCalledWith('rect');
    });

    it('should call render', ()=>{
      expect(layer.render).toHaveBeenCalled();
    });

    it('should update chart', ()=>{
      expect(legend.hover).toHaveBeenCalledWith(jasmine.any(Number));
    });

    it('should update legend', ()=>{
      expect(chart.hover).toHaveBeenCalledWith(jasmine.any(Number));
    });

    afterAll(function() {
      layer = undefined;
    });
  });
};
