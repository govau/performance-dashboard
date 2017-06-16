
import {formatRoutingDatagroupKeyHash} from 'shared/utils/formatDates';


export const getDashboardUrl = dashboardId => {
  if (typeof dashboardId === 'undefined') {
    throw new Error(`Parameters were not correctly provided: ${dashboardId}`);
  }
  return `/dashboards/${dashboardId}`;
};

export const getDashboardWidgetsUrl = dashboardId => {
  if (typeof dashboardId === 'undefined') {
    throw new Error(`Parameters were not correctly provided: ${dashboardId}`);
  }
  return `/dashboards/${dashboardId}/widgets`;
};

export const getDashboardWidgetFactUrl = (dashboardId, widgetId) => {
  if (typeof dashboardId === 'undefined' || typeof widgetId === 'undefined') {
    throw new Error(`Parameters were not correctly provided: ${dashboardId}, ${widgetId}`);
  }
  return `/dashboards/${dashboardId}/widgets/${widgetId}/fact`;
};

export const getDashboardWidgetSliceUrl = (dashboardId, widgetId, date) => {

  if (typeof dashboardId === 'undefined' || typeof widgetId === 'undefined' || typeof date === 'undefined') {
    throw new Error(`Parameters were not correctly provided: ${dashboardId}, ${widgetId}, ${date}`);
  }
  return `/dashboards/${dashboardId}/widgets/${widgetId}/slice/${formatRoutingDatagroupKeyHash(date)}`;
};

export const getDashboardWidgetDescriptionsUrl = (dashboardId, widgetId) => {
  if (typeof dashboardId === 'undefined' || typeof widgetId === 'undefined') {
    throw new Error(`Parameters were not correctly provided: ${dashboardId}, ${widgetId}`);
  }
  return `/dashboards/${dashboardId}/widgets/${widgetId}/descriptions`;
};

export const getServiceDashboardUrl = (dashboardId, dashboardName) => {
  if (typeof dashboardId === 'undefined' || typeof dashboardName === 'undefined') {
    throw new Error(`Parameters were not correctly provided: ${dashboardId}, ${dashboardName}`);
  }
  let name = dashboardName.toLowerCase().replace(/\s/g, '-');
  return `/dashboards/${dashboardId}-${name}`;
};

export const getServiceDashboardUrlAnchor = (dashboardId, dashboardName, widgetName) => {
  if (typeof dashboardId === 'undefined' || typeof dashboardName === 'undefined' || typeof widgetName === 'undefined') {
    throw new Error(`Parameters were not correctly provided: ${dashboardId}, ${dashboardName}, ${widgetName}`);
  }
  let name = dashboardName.toLowerCase().replace(/\s/g, '-');
  let anchor = widgetName.toLowerCase().replace(/\s/g, '-');
  return `/dashboards/${dashboardId}-${name}#${anchor}`;
};

/**
 * Trims the last segment from a url
 * @param url
 * @returns {string}
 */
export const trimLastUrlSegement = (url) => {
  let to = url.lastIndexOf('/') +1;
  return url.substring(0,to);
};
