
/*global describe,beforeAll,it */
import React from 'react';
import expect from 'expect';
import buildConnectedSubject from './../../../../test/utils/buildConnectedSubject';

import initialState from './../../redux/initialState';
import fixtureState from './../../../../test/fixtures/jbuilder-cit-hobby';
import Container from './pageDashboardWidgetSlice_container';


describe('(Component) Dashboard Widget Slice Page - pageDashboardWidgetSlice_component', () => {

  const fixtureDashboard = fixtureState.dashboards[0];
  const fixtureWidget = fixtureState.widgets[0];

  if (typeof fixtureDashboard === 'undefined') throw new Error('invalid fixtureDashboard');
  if (typeof fixtureWidget === 'undefined') throw new Error('invalid fixtureWidget');
  if (fixtureWidget.dashboard_id !== fixtureDashboard.id) {
    throw new Error('invalid DashboardWidget');
  }

  describe('Container', () => {
    it('should render as a connected component without exploding', () => {
      const subject = buildConnectedSubject(Container, {...initialState,
        dashboard: fixtureDashboard,
        widget: fixtureWidget,
        datagroup_key: '2016-05'
      });
      expect(subject.instance()).toExist();
    });
  });

  describe('Component', () => {
    it('should render deeply without exploding', () => {
      // build deep
      const subject = buildConnectedSubject(Container, {...initialState, ...fixtureState}, {
        params: {
          dashboard_id: fixtureDashboard.id,
          widget_id: fixtureWidget.id,
          datagroup_key: '2016-05'
        }
      }, true);
      expect(subject).toBeTruthy();
      expect(subject.find('div').exists()).toBe(true);
    });
  });

});
