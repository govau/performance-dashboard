
/* global describe, it */
import expect from 'expect';

import {
  selectDashboards,
  selectDashboard
} from './dashboardsSelectors';
import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';


describe('(Selectors) - Dashboards - dashboardsSelectors', () => {

  const fixtureDashboard = fixtureState.dashboards[0];
  if (typeof fixtureDashboard === 'undefined') throw new Error('invalid fixtureDashboard');

  describe('selectDashboards', () => {
    it('should return the same dashboard state as provided', () => {
      expect(selectDashboards(fixtureState)).toEqual(fixtureState.dashboards);
    });
  });
  describe('selectDashboard', () => {
    it('should return a Dashboard with the same id as was provided', () => {
      expect(selectDashboard(fixtureState, {dashboardId: fixtureDashboard.id})).toEqual(fixtureDashboard);
    });

    // const state = [{id:1},{id:2}];
    // it('should return the correct dashboard when supplied id as Number', () => {
    //   const record = selectDashboard(state, 1);
    //   expect(record).toBeTruthy();
    //   expect(record.id).toEqual(1);
    // });
    // it('should return the correct dashboard when supplied id as String', () => {
    //   const record = selectDashboard(state, '1');
    //   expect(record).toBeTruthy();
    //   expect(record.id).toEqual(1);
    // });
    // it('should return undefined if no dashboard is found', () => {
    //   const record = selectDashboard(state, 100);
    //   expect(record).toEqual(void 0);
    // });
    // it('should throw if state provided is not correct type', () => {
    //   expect(() => {
    //     selectDashboard({}, 1);
    //   }).toThrow();
    // });
  });

});
