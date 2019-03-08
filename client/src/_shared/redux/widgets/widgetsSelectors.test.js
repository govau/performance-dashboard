/* global describe, it */
import expect from 'expect';

import { selectWidget, selectWidgetsByDashboard } from './widgetsSelectors';
import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';

describe('(Selectors) - Widgets - widgetsSelectors', () => {
  const fixtureWidget = fixtureState.widgets[0];
  if (typeof fixtureWidget === 'undefined')
    throw new Error('invalid fixtureWidget');

  describe('selectWidget', () => {
    it('should return a Widget with the same id as was provided', () => {
      expect(
        selectWidget(fixtureState, { widgetId: fixtureWidget.id }),
      ).toEqual(fixtureWidget);
    });
  });

  describe('selectWidgetsByDashboard', () => {
    it.skip('should return Widgets with the same dashboard_id as was provided', () => {});
  });

  // describe('(Selectors)', () => {
  //   describe('getWidgetById', () => {
  //     const state = [{id:1},{id:2}];
  //     it('should return the correct widget when supplied id as Number', () => {
  //       const record = getWidgetById(state, 1);
  //       expect(record).toBeTruthy();
  //       expect(record.id).toEqual(1);
  //     });
  //     it('should return the correct widget when supplied id as String', () => {
  //       const record = getWidgetById(state, '1');
  //       expect(record).toBeTruthy();
  //       expect(record.id).toEqual(1);
  //     });
  //     it('should return undefined if no widget is found', () => {
  //       const record = getWidgetById(state, 100);
  //       expect(record).toEqual(void 0);
  //     });
  //     it('should throw if state provided is not correct type', () => {
  //       expect(() => {
  //         getWidgetById({}, 1);
  //       }).toThrow();
  //     });
  //   });
  //
  //   describe('getWidgetsByDashboardId', () => {
  //     const state = [
  //       {id:1,dashboard_id:2},
  //       {id:2,dashboard_id:null},
  //       {id:3,dashboard_id:2},
  //       {id:4,dashboard_id:1},
  //       {id:5,dashboard_id:4},
  //       {id:6,dashboard_id:3},
  //       {id:7,dashboard_id:2},
  //     ];
  //     it('should return an array', () => {
  //       expect(isArray(getWidgetsByDashboardId(state, ))).toEqual(true);
  //       expect(isArray(getWidgetsByDashboardId(state, 2))).toEqual(true);
  //     });
  //     it('should return correct widgets with the supplied dashboard_id', () => {
  //       const records = getWidgetsByDashboardId(state, 2);
  //       expect(records.length).toBe(3);
  //       expect(records.every(r => r.dashboard_id === 2)).toBeTruthy();
  //     });
  //     it('should return an empty array if no matches are found', () => {
  //       const records = getWidgetsByDashboardId(state, 200);
  //       expect(isArray(records)).toBeTruthy();
  //       expect(records.length).toBe(0);
  //     });
  //   });
  //
  // });
});
