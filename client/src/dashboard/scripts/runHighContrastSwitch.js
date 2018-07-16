let win = typeof global === 'undefined' ? window : global;

export const getIsHighContrastMode = () =>
  win && win.localStorage && win.localStorage.getItem('high_contrast_mode') === 'true';

const runHighContrastSwitch = ({emitter}) => {
  const hcSwitch = document.getElementById('high-contrast-switch');
  let toggled = getIsHighContrastMode();

  // trigger once before binding click
  if (toggled) {
    hcSwitch.click();
  }

  const toggle = (e) => {
    toggled = !getIsHighContrastMode();

    if (toggled) {
      document.body.classList.add('is-high-contrast');
      localStorage.setItem('high_contrast_mode', true);
      emitter.emit('set-high-contrast-mode', true);
    } else {
      document.body.classList.remove('is-high-contrast');
      localStorage.setItem('high_contrast_mode', false);
      emitter.emit('set-high-contrast-mode', false);
    }
  };

  hcSwitch.addEventListener('click', toggle);
};

export default runHighContrastSwitch;
