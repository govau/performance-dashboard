/*global describe,beforeAll,it */
import expect from 'expect';
import React from 'react';
import buildConnectedSubject from './../../../../test/utils/buildConnectedSubject';

import Container from './pageDashboardWidgets_container';
import initialState from './../../redux/initialState';
import fixtureState from './../../../../test/fixtures/jbuilder-cit-hobby';

describe('(Container) Dashboard Widgets Page - pageDashboardWidgets_container', () => {
  it('should render as a connected component without exploding', () => {
    const subject = buildConnectedSubject(
      Container,
      {
        ...initialState,
        ...fixtureState
      },
      {
        dashboard_id: 2
      }
    );
    expect(subject.instance).toExist();
  });
});
