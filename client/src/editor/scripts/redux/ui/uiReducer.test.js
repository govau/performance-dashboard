/*global describe,it*/
import expect from 'expect';

import reducer from './uiReducer';
import { types } from './uiActions';
import initState from './../initialState';
import fixtureState from './../../../../test/fixtures/jbuilder-cit-hobby';

describe('(Reducers) UI - uiReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(fixtureState, {})).toEqual(fixtureState);
  });

  it('should see no state change if action is invalid', () => {
    const output = reducer(fixtureState, {
      type: 'PAT THE KITTEH',
      payload: {},
    });
    expect(output).toEqual(fixtureState);
  });

  describe('UI_SET_LASTWIDGETIMPRESSION', () => {
    it('should correctly update when supplied correct data', () => {
      const payload = { widgetId: null, type: null, description: null };
      const actual = reducer(initState, {
        type: types.UI_SET_LASTWIDGETIMPRESSION,
        payload: payload,
      });
      expect(actual.lastWidgetImpression).toEqual(payload);
    });
  });
});
