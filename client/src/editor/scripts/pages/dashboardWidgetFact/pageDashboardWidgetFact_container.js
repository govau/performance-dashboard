
import {connect} from 'react-redux';

import {selectDashboard} from 'shared/redux/dashboards/dashboardsSelectors';
import {selectWidget} from 'shared/redux/widgets/widgetsSelectors';
import {makeFact} from 'shared/redux/facts/factSelectors';
import Page from './pageDashboardWidgetFact_component';


const mapStateToProps = (state, ownProps) => {
  const dashboard = selectDashboard(state, {dashboardId: ownProps.params.dashboard_id});
  const widget = selectWidget(state, {widgetId: ownProps.params.widget_id});
  const fact = makeFact(widget, dashboard);
  return {
    fact,
    ui: {}
  }
};

export default connect(
  mapStateToProps,
  null
)(Page);
