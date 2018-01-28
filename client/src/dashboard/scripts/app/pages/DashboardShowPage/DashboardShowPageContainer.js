import React from 'react';
import { connect } from 'react-redux';
import DashboardShowPage from './DashboardShowPage';
import {
  setHighContrastMode,
  onResize,
} from './../../redux/ducks/ui_ducks';


const mapStateToProps = (state) => {
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

export default connect(
  mapStateToProps,
  {
    setHighContrastMode,
    onResize,
  }
)(DashboardShowPage);


