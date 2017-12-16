
import Page from './page';
import {getViewport} from './runOnResize';
import {getIsHighContrastMode} from './runHighContrastSwitch';

const dashboardIdMatch = window.location.pathname.match(/^\/dashboards\/(\d+)/);

if (dashboardIdMatch) {
  const urlBase = process.env.NODE_ENV === 'production'
    ? 'api/v1'
    : 'public/__mocks__';

  const dashboardId = dashboardIdMatch[1];

  const uiState = {
    viewport: getViewport(),
    isHighContrastMode: getIsHighContrastMode(),
  };

  fetch(`/${urlBase}/${dashboardId}.json`)
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
