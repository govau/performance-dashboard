/* global describe,it,beforeEach,afterEach */

import expect from 'expect';

import {
  getDashboardUrl,
  getDashboardWidgetsUrl,
  getDashboardWidgetFactUrl,
  getDashboardWidgetSliceUrl,
  getDashboardWidgetDescriptionsUrl,
  getServiceDashboardUrl,
  getServiceDashboardUrlAnchor,
} from './formatUrl';

describe(`(Util) Format Url - formatUrl`, () => {
  describe('getDashboardUrl', () => {
    it('should throw Error if incorrect params are provided', () => {
      expect(() => {
        getDashboardUrl();
      }).toThrow();
    });
    it('should return correctly formatted url when dashboardId is provided', () => {
      const url1 = getDashboardUrl('324');
      const url2 = getDashboardUrl(324);
      expect(/\/dashboards\/324$/.test(url1)).toBe(true);
      expect(/\/dashboards\/324$/.test(url2)).toBe(true);
    });
  });

  describe('getDashboardWidgetsUrl', () => {
    it('should throw Error if incorrect params are provided', () => {
      expect(getDashboardWidgetsUrl).toThrow();
    });
    it('should return correctly formatted url when dashboardId is provided', () => {
      const url = getDashboardWidgetsUrl('324');
      expect(/\/dashboards\/324\/widgets$/.test(url)).toBe(true);
    });
  });

  describe('getDashboardWidgetFactUrl', () => {
    it('should throw Error if incorrect params are provided', () => {
      expect(getDashboardWidgetFactUrl).toThrow();
    });
    it('should return correctly formatted url when dashboardId and widgetId are provided', () => {
      const url = getDashboardWidgetFactUrl(324, 12);
      expect(/\/dashboards\/324\/widgets\/12\/fact/.test(url)).toBe(true);
    });
  });

  describe('getDashboardWidgetSliceUrl', () => {
    it('should throw Error if incorrect params are provided', () => {
      expect(getDashboardWidgetSliceUrl).toThrow();
    });
    it('should return correctly formatted url when dashboardId and widgetId and dataroupKey are provided', () => {
      const url = getDashboardWidgetSliceUrl('324', 12, '16-10');
      // todo - improve date check
      expect(/\/dashboards\/324\/widgets\/12\/slice\/*./.test(url)).toBe(true);
    });
  });

  describe('getDashboardWidgetDescriptionsUrl', () => {
    it('should throw Error if incorrect params are provided', () => {
      expect(getDashboardWidgetDescriptionsUrl).toThrow();
    });
    it('should return correctly formatted url when dashboardId and widgetId are provided', () => {
      const url = getDashboardWidgetDescriptionsUrl(324, 12);
      expect(/\/dashboards\/324\/widgets\/12\/descriptions/.test(url)).toBe(
        true,
      );
    });
  });

  describe('getServiceDashboardUrl', () => {
    it('should throw Error if incorrect params are provided', () => {
      expect(getServiceDashboardUrl).toThrow();
    });
    it('should return correctly formatted url when dashboardId and dashboardName are provided', () => {
      const url = getServiceDashboardUrl(3, 'myGov');
      expect(/\/dashboards\/3-mygov/.test(url)).toBe(true);
    });
    it.skip('test regex parsing');
  });

  describe('getServiceDashboardUrlAnchor', () => {
    it('should throw Error if incorrect params are provided', () => {
      expect(getServiceDashboardUrlAnchor).toThrow();
    });
    it('should return correctly formatted url when dashboardId is provided', () => {
      const url = getServiceDashboardUrlAnchor(3, 'myGov', 'Best Chart Ever');
      expect(/\/dashboards\/3-mygov#best-chart-ever/.test(url)).toBe(true);
    });
    it.skip('test regex parsing');
  });
});
