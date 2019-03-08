/*global describe,beforeAll,it */
import expect from 'expect';
import React from 'react';
import buildConnectedSubject from './../../../../test/utils/buildConnectedSubject';

import initialState from './../../redux/initialState';
import fixtureState from './../../../../test/fixtures/jbuilder-cit-hobby';
import Container from './pageDashboardWidgetFact_container';
import UpdateFactForm from './../../components/jsonschemaForms/fact/fact_form';
import { makeFact } from 'shared/redux/facts/factSelectors';

describe('(Component) Dashboard Widget Fact Page - pageDashboardWidgetFact', () => {
  it('should render as a connected component without exploding', () => {
    const subject = buildConnectedSubject(Container, {
      ...initialState,
      dashboard: { id: 1 },
      widget: { id: 1 },
    });
    expect(subject.instance()).toExist();
  });

  it('should render deeply without exploding', () => {
    const fixtureDashboard = fixtureState.dashboards[0];
    const fixtureWidget = fixtureState.widgets.find(w => w.type === 'fact');

    if (typeof fixtureDashboard === 'undefined')
      throw new Error('invalid fixtureDashboard');
    if (typeof fixtureWidget === 'undefined')
      throw new Error('invalid fixtureWidget');
    if (fixtureWidget.dashboard_id !== fixtureDashboard.id) {
      throw new Error('invalid DashboardWidget');
    }
    const fixtureFact = makeFact(fixtureWidget, fixtureDashboard);

    // build deep
    const subject = buildConnectedSubject(
      Container,
      { ...initialState, ...fixtureState },
      {
        params: {
          dashboard_id: fixtureFact.dashboard.id,
          widget_id: fixtureFact.widget.id,
        },
      },
      true,
    );
    const form = subject.find(UpdateFactForm);
    expect(form.exists()).toBe(true);
  });
});
