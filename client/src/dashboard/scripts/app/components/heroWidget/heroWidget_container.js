import React from 'react';
import { connect } from 'react-redux';
import { HeroWidget } from '@gov.au/datavizkit';

import transformForHighcharts from 'shared/utils/transformForHighcharts';
import { getDenormalizedSlices } from 'shared/redux/slices/slicesSelectors';

const mapStateToProps = (state, ownProps) => {
  const { widget, dashboard } = ownProps;
  const {
    ui: { isHighContrastMode },
  } = state;

  const slices = getDenormalizedSlices(state, {
    widget,
    dashboard,
  });

  const transformedProps = transformForHighcharts(slices, true);

  return {
    // nullify for perf - carried across from ownProps
    dashboard: null,
    widget: null,
    // end nullify

    displayHighContrast: isHighContrastMode,

    ...transformedProps,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeroWidget);
