
import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import merge from 'lodash/merge';

import configureStore from './redux/configureStore';
import initialState from './redux/initialState';
import App from './app';


const AppBtl = ({el, data, emitter}) => {
  // todo - include ui stuffs in boot data

  const bootState = merge(initialState, data);
  const store = configureStore(bootState);

  render(<App store={store} emitter={emitter} />, el);
};

if (__DEV__) {
  AppBtl.propTypes = {
    el: PropTypes.element.isRequired,
    data: PropTypes.object.isRequired,
  };
}

export default AppBtl;
