import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import HomePage from './app/components/HomePage/HomePage';
import {getViewport} from './runOnResize';
import { getIsHighContrastMode } from '../../_shared/utils/storage';
import configureStore from './app/redux/configureStore';
import initialState from './app/redux/initialState';
import merge from 'lodash/merge';
import DashboardShowPageContainer from './app/pages/DashboardShowPage/DashboardShowPageContainer';

const pathName = window.location.pathname;
const dashboardIdMatch = pathName.match(/^\/dashboards\/(\d+)/);
const urlBase = process.env.NODE_ENV === 'production'
  ? 'api/v1/public'
  : 'public/__mocks__';

if (pathName === '/') {
  fetch(`/${urlBase}/dashboards.json`)
    .then(response => response.json())
    .then(data => {
      ReactDOM.render(
        <HomePage dashboards={data} />,
        document.getElementById('react-root'),
      );
    })
    .catch(err => {
      console.error(`Error fetching dashboard data. ${err}`);
    });
} else if (dashboardIdMatch) {
  const dashboardId = dashboardIdMatch[1];

  fetch(`/${urlBase}/dashboards/${dashboardId}.json`)
    .then(response => response.json())
    .then(data => {
      const bootState = merge(
        initialState,
        data,
        {
          ui: {
            viewport: getViewport(),
            isHighContrastMode: getIsHighContrastMode() || false,
          },
        },
      );

      const store = configureStore(bootState);

      ReactDOM.render(
        <Provider store={store}>
          <DashboardShowPageContainer />
        </Provider>,
        document.getElementById('react-root'),
      );
    })
    .catch(err => {
      console.error(`Error fetching dashboard data. ${err}`);
    });
} else {
  console.warn(`We don't handle the URL ${window.location.pathname}`);
}
