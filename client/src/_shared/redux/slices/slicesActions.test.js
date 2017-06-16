
/* global describe, it, beforeAll */
import expect from 'expect';
import buildMockApiEnvironment, {
  mockFetch,
  mockFetchError
} from './../../../test/utils/buildMockApiEnvironment';

import {createSlice, updateSlice} from './slicesActions';

describe('(Actions) Slices - slicesActions', () => {

  let store;
  beforeAll(() => {
    store = buildMockApiEnvironment();
  });

  describe('createSlice', () => {
    it('on success (201) should return a Promise', () => {
      const fixturePayload = {
        period_start: new Date('2016-01-01'),
        period: 'month',
        widget: {id:1}
      };
      const fixtureReponse = {widget:{}, slice: {}, datasets: [{}]};
      mockFetch('widgets/1/slices/month/2016-01-01', 201, fixtureReponse);
      const request = store.dispatch(createSlice(fixturePayload));
      expect(request).toBeA(Promise);
      return request.then(data => {
        return expect(data).toContain(data);
      });
    });

    it('on error should reject a Promise', () => {
      const fixturePayload = {
        period_start: new Date('2016-01-01'),
        period: 'month',
        widget: {id:1}
      };
      const fixtureReponse = {widget:{}, slice: {}, datasets: [{}]};
      mockFetchError('widgets/1/slices/month/2016-01-01', 201, fixtureReponse);
      const request = store.dispatch(createSlice(fixturePayload));
      return request.catch(error => {
        return expect(error).toBeTruthy();
      });
    });
  });

  describe('updateSlice', () => {
    it.skip('on success (201) should return a Promise');
  });

});


