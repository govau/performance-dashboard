import Axis from '../../../lib/javascripts/Charts/Axis';

module.exports = function(callback) {
  describe('Axis base', () => {
    let chart;

    beforeAll(() => {
      if (!callback) {
        chart = jasmine.createSpyObj('chart', ['svg']);
        chart.svg = jasmine.createSpyObj('svg', ['append']);
        axis = new Axis({ chart: chart });
      } else {
        chart = callback().chart;
        axis = callback().axis;
      }
    });
  });
};
