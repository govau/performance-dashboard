
import deepMerge from 'deepmerge';
import {API_BASE_URL_V1 as rootUrl} from './../config';


export const checkStatus = response => {
  if (!response.ok) {
    let error = new Error();
    // save http request error properties
    error.response = response;
    return response.json().then(serverResponse => {
      // save server error
      error.message = serverResponse.message || serverResponse.error || 'Request failed';
      // explicitly reject the promise chain, next call will be catch()
      throw error;
    });
  }
  // continue to next then()
  return response;
};

/**
 * Assumes response has 'Content-Type': 'application/json'
 */
export const parseBody = response => {
  return response.json();
};

/**
 * @param route - API endpoint
 * @param token - API session token
 * @param options - options to pass to Fetch
 * @return {Promise}
 */
const api = (route, token, options={}) => {
  // this will only ever happen if token fails on load because it never rehydrates
  if (!token) {
    alert(`We're logging you out now because your session expired. Please log in again.`);
    window.location.hostname = '/sign-out';
    return new Promise((resolve, reject) => reject('No session token found.'));
  }
  return fetch(`${rootUrl}${route}`, deepMerge({
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  }, options))
    .then(checkStatus)
    .then(parseBody);
};

export default api;
