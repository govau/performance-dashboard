import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';
import Layout from './layout';
import Dashboards from './dashboards';
import CreateDashboard from './CreateDashboard/CreateDashboard';
import DashboardWidgets from './dashboardWidgets';
import DashboardWidgetFact from './dashboardWidgetFact';
import DashboardWidgetSlice from './dashboardWidgetSlice';
import NoMatch from './noMatch';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRedirect to="/dashboards" />

        <Route path="dashboards/create" component={CreateDashboard} />

        <Route path="dashboards" component={Dashboards} />

        <Route
          path="dashboards/:dashboard_id/widgets"
          component={DashboardWidgets}
        />

        <Route
          path="dashboards/:dashboard_id/widgets/:widget_id/fact"
          component={DashboardWidgetFact}
        />

        <Route
          path="dashboards/:dashboard_id/widgets/:widget_id/slice/:datagroup_key"
          component={DashboardWidgetSlice}
        />

        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
