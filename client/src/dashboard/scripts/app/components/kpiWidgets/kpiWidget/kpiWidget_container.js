
import React from 'react';
import {connect} from 'react-redux';
import {CountWithTrendWidget} from '@gov.au/datavizkit';

import {getDenormalizedSlices} from 'shared/redux/slices/slicesSelectors';
import transformForHighcharts from 'shared/utils/transformForHighcharts';


const mapStateToProps = (state, ownProps) => {

  const dashboard = state.dashboards[0];
  const {widget} = ownProps;

  const slices = getDenormalizedSlices(state, {
    widget,
    dashboard,
  });

  const sortedSlices = slices.sort((a,b) => {
    return new Date(a.period_start).getTime() > new Date(b.period_start).getTime();
  });

  const lastTwoSlices = sortedSlices.slice(-2);
  const transformedProps = transformForHighcharts(lastTwoSlices, true);

  return {
    // nullify for perf - carried across from container
    widget: null,
    // end nullify

    tooltipAnchorTo: '#dashboard-notes',
    units: widget.units,  // todo - this is redundant, but is being used, can access this from series

    viewport: state.ui.viewport,

    ...transformedProps,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountWithTrendWidget);


