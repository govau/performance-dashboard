
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {selectDashboard} from 'shared/redux/dashboards/dashboardsSelectors';
import {selectWidget} from 'shared/redux/widgets/widgetsSelectors';
import {
  isEmptySlice,
  getDenormalizedSlice,
  getEmptyDenormalizedSlice
} from 'shared/redux/slices/slicesSelectors';
import Page from './pageDashboardWidgetSlice_component';


const mapStateToProps = (state, ownProps) => {
  const dashboard = selectDashboard(state, {dashboardId: ownProps.params.dashboard_id});
  const widget = selectWidget(state, {widgetId: ownProps.params.widget_id});

  let widgetSlice = getDenormalizedSlice(state, {
    widgetId: widget.id,
    dashboardId: dashboard.id,
    periodStart: ownProps.params.datagroup_key,
  });
  if (widgetSlice === null || isEmptySlice(widgetSlice)) {
    widgetSlice = getEmptyDenormalizedSlice(state, {
      widgetId: widget.id,
      dashboardId: dashboard.id,
      datagroupKey: ownProps.params.datagroup_key,
    });
  }
  return {
    slice: widgetSlice
  }
};
const mapDispatchToProps = dispatch => ({
  push: bindActionCreators(push, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
