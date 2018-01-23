

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import runOnResize from '../../../runOnResize';

import DashboardShowPage from './dashboardShow_page';
import {
  onToggleHighContrast,
  onResize,
} from './../../redux/ducks/ui_ducks';


const mapStateToProps = (state, ownProps) => {

  const dashboard = state.dashboards[0];
  const dashboardWidgets = state.widgets;

  const heroWidget = dashboardWidgets.find(w => {
    return w.type === 'full';
  });

  const kpiWidgets = dashboardWidgets.filter(w => {
    return w.type === 'kpi-sparkline';
  });

  const btlWidgets = dashboardWidgets.filter(widget => {
    return ['full', 'kpi-sparkline'].includes(widget.type) === false;
  });

  return {
    dashboard,
    heroWidget,
    kpiWidgets,
    btlWidgets,
    ui: state.ui,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const {emitter} = ownProps;

  // RITMO move this into the onMount of a componentn
  runOnResize(viewport => {
    dispatch(onResize(viewport));
  });
  // TODO (davidg): shouldn't need an emitter to do this
  // emitter.on('set-viewport-changed', (viewport) => {
  //   dispatch(onResize(viewport));
  // });
  return {
    onToggleHighContrast: isOn => dispatch(onToggleHighContrast(isOn)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardShowPage);


