import Emitter from 'tiny-emitter';
import App from './app';
import runHighContrastSwitch from './runHighContrastSwitch';
import runOnResize from './runOnResize';

class DashboardShow {
  constructor(options) {
    this.options = options;
    this.emitter = new Emitter();
    this.initBtlApp();

    // todo - refactor these in to the app
    this.runOnResize();
    this.runHighContrastSwitch();
  }

  initBtlApp() {
    const el = document.getElementById('dashboard-show-app');

    if (el) {
      new App({
        el,
        data: this.options.data,
        emitter: this.emitter,
      });
    }
  }

  runOnResize() {
    runOnResize({ emitter: this.emitter });
  }

  runHighContrastSwitch() {
    runHighContrastSwitch({ emitter: this.emitter });
  }
}

export default DashboardShow;
