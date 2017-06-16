import addHasNegativeValueSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Helpers/hasNegativeValueSpec.js';
import addCropDataSpec from './helpers/cropDataSpec.js';
import addNormalizeSpec from './helpers/normalizeSpec.js';
import addGetDateSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Helpers/getDateSpec.js';
import addFormatSecondsSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Helpers/formatSecondsSpec.js';

import addChartSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/ChartSpec.js';
import addLineChartSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/LineChartSpec.js';
import addBarChartSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/BarChartSpec.js';
import addStackBarChartSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/StackBarChartSpec.js';
import addStackBarChartNegativeSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/StackBarChartNegativeSpec.js';
import addPieChartSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/PieChartSpec.js';

import addAxisSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/AxisSpec.js';
// import addXAxisSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/XAxisSpec.js';
import addLayerSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/LayerSpec.js';
import addOverlayLayerSpec from './../src/dashboard/legacy/d3-charts-dto/spec/javascripts/Charts/OverlayLayerSpec.js';

import addSparklineWidgetSpec from './Widgets/SparklineWidgetSpec.js';
import addHeroWidgetSpec from './Widgets/HeroWidgetSpec.js';



describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});

addHasNegativeValueSpec();
addCropDataSpec();
addNormalizeSpec();
addGetDateSpec();
addFormatSecondsSpec();



describe('Chart DOM test suite', () => {

  beforeAll(function() {
    window.testChartWidth = 200;
    $j('body').append('<div id="chart" style="width:200px"></div>');
  });
  afterAll(()=>{
    $j('#chart').remove();
  });

  addChartSpec();
  addLineChartSpec();
  addBarChartSpec();
  addStackBarChartSpec();
  addStackBarChartNegativeSpec();
  addPieChartSpec();

  addAxisSpec();
  addLayerSpec();
  addOverlayLayerSpec();

  addSparklineWidgetSpec();
  addHeroWidgetSpec();

});
