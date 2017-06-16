
/*global describe,beforeAll,it */
import expect from 'expect';
import React from 'react';
import buildConnectedSubject from './../../../../../test/utils/buildConnectedSubject';

import initialState from './../../../redux/initialState';
import fixtureState from './../../../../../test/fixtures/jbuilder-cit-hobby';
import Container from './updateFact_container';
import Form from './fact_form';
import {makeFact} from 'shared/redux/facts/factSelectors';


describe('(Form) Update Fact Container - updateFact_container', () => {

  it('should render as a connected component without exploding', () => {
    const subject = buildConnectedSubject(Container, initialState);
    expect(subject.instance()).toExist();
  });

  it('should render deeply without exploding', () => {
    const fixtureDashboard = fixtureState.dashboards[0];
    const fixtureWidget = fixtureState.widgets.find(w => w.type === 'fact');

    if (typeof fixtureDashboard === 'undefined') throw new Error('invalid fixtureDashboard');
    if (typeof fixtureWidget === 'undefined') throw new Error('invalid fixtureWidget');
    if (fixtureWidget.dashboard_id !== fixtureDashboard.id) {
      throw new Error('invalid DashboardWidget');
    }
    const fixtureFact = makeFact(fixtureWidget, fixtureDashboard);

    // build deep
    const subject = buildConnectedSubject(Container, {...initialState, ...fixtureState}, {
      formModel: fixtureFact,
      completedUrl: '/dashboards',
    }, true);
    const form = subject.find(Form);
    expect(form.exists()).toBe(true);
  });

});
