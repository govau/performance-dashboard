
/*global describe,it,beforeEach*/

import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {API_BASE_URL_V1 as rootUrl} from './../config';
import {
  mockResponse,
  mockFetch,
  mockFetchError
} from './../../../test/utils/testUtils';
import api, {checkStatus, parseBody} from './api';

const mockStore = configureStore([
  thunkMiddleware.withExtraArgument(api)
]);


describe('(Store) - redux-thunk third argument - api', () => {

  describe('checkStatus', () => {
    it('should allow response to pass through when a response is ok', () => {
      const response = mockResponse(200, 'success', JSON.stringify({lorem:'ipsum'}));
      expect(checkStatus(response)).toEqual(response);
    });

    it('should resolve to an Error when a response is not ok', () => {
      const response = mockResponse(401, 'error', JSON.stringify({lorem:'ipsum'}));
      return checkStatus(response)
        .catch(err => expect(err).toBeAn(Error));
    });

    it('should resolve to an Error when a response is not ok with the right signature', () => {
      const response = mockResponse(401, 'error', JSON.stringify({lorem:'ipsum'}));
      return checkStatus(response)
        .catch(err => {
          expect(err.message).toBeTruthy();
          expect(err.response).toBeAn(Response);
        });
    });

    it('should reject on 400', () => {
      const response = mockResponse(400, 'error', JSON.stringify({lorem:'ipsum'}));
      return checkStatus(response).catch(err => expect(err).toBeTruthy());
    });

    it('should reject on 401', () => {
      const response = mockResponse(401, 'error', JSON.stringify({lorem:'ipsum'}));
      return checkStatus(response).catch(err => expect(err).toBeTruthy());
    });

    it('should reject on 404', () => {
      const response = mockResponse(404, 'error', JSON.stringify({lorem:'ipsum'}));
      return checkStatus(response).catch(err => expect(err).toBeTruthy());
    });

    it('should resolve on 200', () => {
      const response = mockResponse(200, 'success', JSON.stringify({lorem:'ipsum'}));
      expect(checkStatus(response).ok).toBeTruthy();
    });
  });

  describe('parseBody', () => {
    let response;
    beforeEach(() => {
      response = mockResponse(200, 'success', JSON.stringify({lorem:'ipsum'}));
    });

    it('should receive a promise', () => {
      expect(parseBody(response)).toBeAn(Promise);
    });

    it('should return JSON once resolved', () => {
      return parseBody(response).then(resp => {
        expect(resp).toContain({lorem:'ipsum'});
      });
    });
  });

  describe('api', () => {
    let store;
    beforeEach(() => store = mockStore());

    it('should reject if no token is provided', () => {
      const data = {type:'test action type', payload:{id:1,dataset_id:20}};
      const action = data => {
        return (dispatch, getState, api) => {
          return api('datasets/20/datapoint', '', data);
        }
      };
      return store.dispatch(action(data))
        .catch(err => expect(err).toBeTruthy());
    });

    it('should resolve with JSON if request is successful', () => {
      const data = {type:'test action type', payload:{id:1,dataset_id:20}};
      mockFetch(`${rootUrl}datasets/20/datapoints`, 201, data);
      const action = data => {
        return (dispatch, getState, api) => {
          return api('datasets/20/datapoint', 'dsfsdf', data);
        }
      };
      return store.dispatch(action(data))
        .then(data => {
          return expect(data).toContain(data);
        });
    });

    it('should reject with Error if request is unsuccessful', () => {
      const data = {type:'test action type', payload:{id:1,dataset_id:20}};
      mockFetchError(`${rootUrl}datasets/20/datapoints`, 400);
      const action = data => {
        return (dispatch, getState, api) => {
          return api('datasets/20/datapoint', 'dsfsdf', data);
        }
      };
      return store.dispatch(action(data))
        .catch(err => expect(err).toBeTruthy());
    });
  });

});
