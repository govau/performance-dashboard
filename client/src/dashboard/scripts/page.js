
import Emitter from 'tiny-emitter';

import App from './app';
import runHighContrastSwitch from './runHighContrastSwitch';
import runOnResize from './runOnResize';


class DashboardShow { // this *is not* React
  constructor(props) {
    this.props = props;

    this.emitter = new Emitter();

    this.initBtlApp();

    // todo - refactor these in to the app

    this.runOnResize();
    this.runHighContrastSwitch();
  }
  initBtlApp() {
    const el = document.getElementById('react-root');
    if (el) {
      new App({
        el,
        data: this.props.data,
        emitter: this.emitter,
      });
    }
  }
  runOnResize() {
    runOnResize({emitter: this.emitter});
  }
  runHighContrastSwitch() {
    runHighContrastSwitch({emitter: this.emitter});
  }
}

export default DashboardShow;
