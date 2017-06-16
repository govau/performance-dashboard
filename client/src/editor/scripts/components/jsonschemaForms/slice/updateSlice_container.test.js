
/*global describe,beforeAll,it */
import expect from 'expect';
import React from 'react';
import buildConnectedSubject from './../../../../../test/utils/buildConnectedSubject';

import initialState from './../../../redux/initialState';
import fixtureState from './../../../../../test/fixtures/jbuilder-cit-hobby';
import Container from './updateSlice_container';
import Form from './slice_form';
import {getDenormalizedSlice} from 'shared/redux/slices/slicesSelectors';


describe('(Form) Update Slice Container - updateSlice_container', () => {

  it('should render as a connected component without exploding', () => {
    const subject = buildConnectedSubject(Container, initialState);
    expect(subject.instance()).toExist();
  });

  it('should render deeply without exploding', () => {
    const fixtureSlice = fixtureState.slices[0];
    const fixtureComposedState = {...initialState, ...fixtureState};
    const denormalizedFixtureSlice = getDenormalizedSlice(fixtureComposedState, {
      widgetId: fixtureSlice.widget_id,
      dashboardId: fixtureSlice.dashboard_id,
    });
    if (typeof fixtureSlice === 'undefined') throw new Error('invalid fixtureDashboard');
    if (denormalizedFixtureSlice === null) throw new Error('invalid denormalizedFixtureSlice');
    if (fixtureSlice.widget_id !== denormalizedFixtureSlice.widget.id) {
      throw new Error('invalid DashboardWidget');
    }

    // build deep
    const subject = buildConnectedSubject(Container, fixtureComposedState, {
      formModel: denormalizedFixtureSlice,
      completedUrl: '/dashboards',
    }, true);
    const form = subject.find(Form);
    expect(form.exists()).toBe(true);
  });

});
