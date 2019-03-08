import d3 from 'd3';
import Layer from '../../../lib/javascripts/Charts/Layer';

module.exports = function() {
  describe('Layer initialise', () => {
    let layer;
    beforeAll(() => {
      let chart = {
        svg: d3.select('#container').append('svg'),
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        data: [[0, 1, 2]],
      };
      layer = new Layer({ chart: chart, above: true });

      spyOn(layer.layer, 'attr');
      spyOn(layer.layer, 'selectAll').and.callThrough();
      spyOn(layer, 'render');
      layer.init();
    });

    it('should transform position', () => {
      expect(layer.layer.attr).toHaveBeenCalled();
    });

    it('should add data and create rect', () => {
      expect(layer.layer.selectAll).toHaveBeenCalledWith('rect');
    });

    it('should call render', () => {
      expect(layer.render).toHaveBeenCalled();
    });

    afterAll(function() {
      layer = undefined;
    });
  });
};
