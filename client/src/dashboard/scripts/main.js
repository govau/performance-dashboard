
import Page from './page';
import {getViewport} from './runOnResize';
import {getIsHighContrastMode} from './runHighContrastSwitch';


const location = window.location.pathname;
const pageRoute = location.split('?')[0];

if (pageRoute.match(/^\/dashboards\/.+(\/|)$/)) {

  // console.log('running dashboard#show');

  const uiState = {
    viewport: getViewport(),
    isHighContrastMode: getIsHighContrastMode(),
  };

  new Page({data: {...window.__STATE__, ui:uiState}});

  if (!__DEV__) {
    delete window.__STATE__;
  }
}
