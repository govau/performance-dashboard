import React from 'react';
import { render } from 'react-dom';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';
import initialState from './redux/initialState';
import Root from './pages/root';

const bootState = merge(initialState, window.__EDITOR_STATE__);
const store = configureStore(bootState, hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('editor_index')
);
