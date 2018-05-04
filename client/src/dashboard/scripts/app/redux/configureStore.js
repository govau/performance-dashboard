let win = typeof global === 'undefined' ? window : global;
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

const configureStore = (bootState, debug = __DEV__) => {
  const middleware = [];

  const composeEnhancers = debug && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
  );

  const store = createStore(rootReducer, bootState, enhancer);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
