
/*global describe,beforeAll,it */
import expect from 'expect';
import React from 'react';
import buildConnectedSubject from './../../../../../test/utils/buildConnectedSubject';

import initialState from './../../../redux/initialState';
import fixtureState from './../../../../../test/fixtures/jbuilder-cit-hobby';
import Container from './createSlice_container';
import Form from './slice_form';
import {getEmptyDenormalizedSlice} from 'shared/redux/slices/slicesSelectors';


describe('(Form) Create Slice Container - createSlice_container', () => {

  it('should render as a connected component without exploding', () => {
    const subject = buildConnectedSubject(Container, initialState);
    expect(subject.instance()).toExist();
  });

  it('should render deeply without exploding', () => {
    const fixtureSlice = fixtureState.slices[0];
    const fixtureComposedState = {...initialState, ...fixtureState};
    const denormalizedEmptyFixtureSlice = getEmptyDenormalizedSlice(fixtureComposedState, {
      widgetId: fixtureSlice.widget_id,
      dashboardId: fixtureSlice.dashboard_id,
      datagroupKey: '2040-10',
    });
    if (typeof fixtureSlice === 'undefined') throw new Error('invalid fixtureDashboard');
    if (denormalizedEmptyFixtureSlice === null) throw new Error('invalid denormalizedEmptyFixtureSlice');
    if (fixtureSlice.widget_id !== denormalizedEmptyFixtureSlice.widget.id) {
      throw new Error('invalid DashboardWidget');
    }

    // build deep
    const subject = buildConnectedSubject(Container, fixtureComposedState, {
      formModel: denormalizedEmptyFixtureSlice,
      completedUrl: '/dashboards',
    }, true);
    const form = subject.find(Form);
    expect(form.exists()).toBe(true);
  });

});
