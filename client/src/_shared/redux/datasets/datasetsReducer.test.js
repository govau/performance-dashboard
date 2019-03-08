/*global describe,it*/
import expect from 'expect';

import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';
import reducer from './datasetsReducer';

describe('(Reducers) Datasets - datasetsReducer', () => {
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
});
