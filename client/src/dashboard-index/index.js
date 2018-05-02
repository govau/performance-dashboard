import 'babel-polyfill';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import Page from './page';

const location = window.location.pathname;
const pageRoute = location.split('?')[0];

console.log('Running dashbord index');

if (pageRoute === '/') {
  new Page({ data: window.__STATE__ });

  if (!__DEV__) {
    delete window.__STATE__;
  }
}
