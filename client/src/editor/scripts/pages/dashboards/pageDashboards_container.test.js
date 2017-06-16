
/*global describe,beforeAll,it */
import expect from 'expect';
import React from 'react';
import buildConnectedSubject from './../../../../test/utils/buildConnectedSubject';

import Container from './pageDashboards_container';
import initialState from './../../redux/initialState';

import {DashboardItem} from './pageDashboards_component';
import fixtureState from './../../../../test/fixtures/jbuilder-all';


describe('(Component) Dashboards Page - pageDashboards_container', () => {

  it('should render as a connected component without exploding', () => {
    const subject = buildConnectedSubject(Container, {...initialState, dashboards: [{id:1}]});
    expect(subject.instance()).toExist();
  });

  it('should render the number of dashboard items that are provided', () => {
    const dashboards = fixtureState.dashboards;
    const dashLen = dashboards.length;
    // build deep
    const subject = buildConnectedSubject(Container, {...initialState, dashboards: dashboards}, {}, true);
    const items = subject.find(DashboardItem);
    expect(items.length).toEqual(dashLen);
  });

});
