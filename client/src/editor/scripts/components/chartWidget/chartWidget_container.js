import { connect } from 'react-redux';

import {
  getWidgetType,
  getWidgetOptions,
} from 'shared/utils/proposedApiChanges';
import transformForHighcharts from 'shared/utils/transformForHighcharts';

import ChartWidget from 'shared/components/chartWidget';

const mapStateToProps = (state, ownProps) => {
  const { slices } = ownProps;
  const {
    ui: { isHighContrastMode, viewport },
  } = state;
  const widget = slices[0].widget;

  const widgetType = getWidgetType(widget);

  const isKpi = widgetType === 'hero';

  if (widgetType === 'fact') {
    return {
      // nullify for perf - carried across from container props in page
      slices: null,
      // end nullify

      widgetType: 'fact',
      widget,
    };
  }

  const transformedProps = transformForHighcharts(slices, widgetType, isKpi);

  return {
    // nullify for perf - carried across from container props in page
    slices: null,
    // end nullify

    widgetType: widgetType,

    viewport: viewport || 'sm',
    displayHighContrast: isHighContrastMode || false,

    ...transformedProps,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChartWidget);
