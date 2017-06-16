
import isObject from 'lodash/isObject';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import api from './../../editor/scripts/redux/api';
import {API_BASE_URL_V1 as rootUrl} from './../../editor/scripts/config';


/**
 * Fake response object
 * @param status
 * @param statusText
 * @param response {String|Object}
 * @returns {*}
 */
export const mockResponse = (status, statusText, response) => {
  if (isObject(response)) {
    response = JSON.stringify(response);
  }
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

const handleResponse = (mockedUrl, response) => {
  window.fetch = jest.fn().mockImplementation(() => response);
};

// stub successful fetch
export const mockFetch = (mockedUrl, status = 201, responseData) => {
  handleResponse(
    rootUrl + mockedUrl,
    Promise.resolve(mockResponse(status, null, responseData))
  );
};

// stub failing fetch
export const mockFetchError = (mockedUrl, status, responseError = '{}') => {
  handleResponse(
    rootUrl + mockedUrl,
    Promise.reject(mockResponse(status, 'Error', responseError))
  );
};


const buildMockApiEnv = () => {
  const mockStore = configureStore([
    thunkMiddleware.withExtraArgument(api)
  ]);
  return mockStore({
    currentUser: {
      token: 'faketoken'
    }
  });
};

export default buildMockApiEnv;
