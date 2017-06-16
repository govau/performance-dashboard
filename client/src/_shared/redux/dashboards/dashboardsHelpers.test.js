
/*global describe,it*/
import expect from 'expect';

import {isDashboard} from './dashboardsHelpers';
import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';


describe('(Helpers) Dashboards - dashboardsHelpers', () => {

  const fixtureDashboard = fixtureState.dashboards[0];
  const fixtureWidget = fixtureState.widgets[0];

  if (typeof fixtureDashboard === 'undefined') throw new Error('invalid fixtureDashboard');
  if (typeof fixtureWidget === 'undefined') throw new Error('invalid fixtureWidget');


  describe('isDashboard', () => {
    it('should correctly verify type is Dashboard', () => {
      expect(isDashboard(fixtureDashboard)).toEqual(true);
    });
    it('should correctly verify type is not Dashboard', () => {
      expect(isDashboard(fixtureWidget)).toEqual(false);
      expect(isDashboard({})).toEqual(false);
    });
  });

});
