import 'babel-polyfill';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import './styles/main.scss';

import './images/coatofarms.png';
import './images/coatofarms.svg';
import './images/dashboard.svg';
import './images/dto.png';
import './images/govau.svg';
import './images/performance.svg';
import './images/performance-dashboard-logo.svg';

import './images/title.svg';


// // check if HMR is enabled
if (module.hot) {
  // accept itself
  module.hot.accept();

  // todo - improve
  // charts depend on CSS layout, so delay the
  // async render to allow css to inject first.
  // this is only an issue on dev-server mode.
  // http://stackoverflow.com/questions/39400038/how-to-ensure-that-hot-css-loads-before-js-in-webpack-dev-server
  console.log('Start: delaying JS execution by 3 seconds.');
  setTimeout(() => {
    console.log('Executing.');
    require('./scripts/main');
  }, 3000);
} else {
  require('./scripts/main');
}
