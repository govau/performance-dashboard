import 'babel-polyfill';

import './styles/main';
import './scripts/main';

import './../_shared/components/header/editor-logo.svg';

// // check if HMR is enabled
if (module.hot) {
  // accept itself
  module.hot.accept();
}
