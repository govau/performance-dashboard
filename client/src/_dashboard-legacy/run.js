import d3 from 'd3';
import convertData from './Helpers/convertData';
import SparklineWidget from './Widgets/SparklineWidget';
import createPatterns from './Helpers/createPatterns';

const run = () => {
  let charts = [];

  var patterns = createPatterns();
  var patternsDark = createPatterns({ darken: true });
  window.patterns = patterns;
  window.patternsDark = patternsDark;

  d3.selectAll('.kpi-sparkline .widget__inner').each(function() {
    let widget = JSON.parse(this.getAttribute('data-data'));
    let data = null;
    if (widget.datasets[0].data) {
      data = convertData(widget.datasets);
    }

    charts.push(
      new SparklineWidget({
        element: d3.select(this),
        data: data,
        prefix: widget.prefix,
        suffix: widget.suffix,
        units: widget.units,
        displayRoundedData: widget.displayRoundedData,
      }),
    );
  });
};

export default run;
