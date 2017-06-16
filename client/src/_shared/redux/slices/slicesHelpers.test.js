
/*global describe,it*/
import expect from 'expect';

import fixtureState from './../../../test/fixtures/jbuilder-cit-hobby';
import {
  isSlice,
  updateSliceinSlices,
  createSliceinSlices,
} from './slicesHelpers';


describe('(Helpers) Slices - slicesHelpers', () => {

  const fixtureSlices = fixtureState.slices;
  const fixtureSlice = fixtureSlices[0];
  const fixtureDashboard = fixtureState.dashboards[0];

  if (typeof fixtureSlice === 'undefined') throw new Error('invalid fixtureSlice');
  if (typeof fixtureDashboard === 'undefined') throw new Error('invalid fixtureDashboard');


  describe('isSlice', () => {
    it('should correctly verify type is Widget', () => {
      expect(isSlice(fixtureSlice)).toEqual(true);
    });
    it('should correctly verify type is not Widget', () => {
      expect(isSlice(fixtureDashboard)).toEqual(false);
      expect(isSlice({})).toEqual(false);
    });
  });

  describe('updateSliceinSlices', () => {
    const newSliceState = {...fixtureSlice, groups: [{dataset_id: fixtureSlice.groups[0].dataset_id, value: 23874}]};
    const actual = updateSliceinSlices(fixtureSlices, newSliceState);

    it('should update a slice on state', () => {
      expect(actual).toContain(newSliceState);
    });

    it('should not increase the size of state', () => {
      expect(actual.length).toEqual(fixtureSlices.length);
    });

    it('should have updated the correct property on the correct slice in state', () => {
      expect(actual.find(s => {
        return s.id == newSliceState.id && s.period === newSliceState.period && s.period_start === newSliceState.period_start;
      }).groups[0].value).toEqual(newSliceState.groups[0].value);
    });
  });

  describe('createSliceinSlices', () => {
    const newSliceState = {
      ...fixtureSlice,
      ...{
        period: 'month',
        period_start: new Date('2040-10-10'),
        groups: [{dataset_id: fixtureSlice.groups[0].dataset_id, value: 2873874}]
      }
    };

    const actual = createSliceinSlices(fixtureSlices, newSliceState);

    it('should create a slice on state', () => {
      expect(actual).toContain(newSliceState);
    });

    it('should increase the size of state', () => {
      expect(actual.length).toEqual(fixtureSlices.length + 1);
    });

    it('should have updated the correct property on the correct slice in state', () => {
      expect(actual.find(s => {
        return s.id == newSliceState.id && s.period === newSliceState.period && s.period_start === newSliceState.period_start;
      }).groups[0].value).toEqual(newSliceState.groups[0].value);
    });
  });

});
