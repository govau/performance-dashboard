import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
import HomePage from '../../dashboard-index/components/HomePage/HomePage';
import {getViewport} from './runOnResize';
import {getIsHighContrastMode} from './runHighContrastSwitch';

const pathName = window.location.pathname;
const dashboardIdMatch = pathName.match(/^\/dashboards\/(\d+)/);
const urlBase = process.env.NODE_ENV === 'production'
  ? 'api/v1/public'
  : 'public/__mocks__';

if (pathName === '/') {
  console.log('We are home');

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

  const uiState = {
    viewport: getViewport(),
    isHighContrastMode: getIsHighContrastMode(),
  };

  fetch(`/${urlBase}/dashboards/${dashboardId}.json`)
    .then(response => response.json())
    .then(data => {
      new Page({data: {...data, ui:uiState}});
    })
    .catch(err => {
      console.error(`Error fetching dashboard data. ${err}`);
    });
} else {
  console.warn(`We don't handle the URL ${window.location.pathname}`);
}
