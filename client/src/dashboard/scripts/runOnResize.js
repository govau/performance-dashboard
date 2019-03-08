let win = typeof global === 'undefined' ? window : global;

const SCREEN_SIZES = {
  sm: 544,
  md: 992,
  lg: 1200,
};

export const getViewport = () => {
  const w = win.innerWidth;

  let viewport = 'sm';
  if (w >= SCREEN_SIZES.sm && w < SCREEN_SIZES.md) {
    viewport = 'sm';
  } else if (w >= SCREEN_SIZES.md && w < SCREEN_SIZES.lg) {
    viewport = 'md';
  } else if (w >= SCREEN_SIZES.lg) {
    viewport = 'lg';
  }

  return viewport;
};

let attached = false;

const runOnResize = ({ emitter }) => {
  let _v;

  const handleChange = () => {
    const viewport = getViewport();
    if (_v !== viewport) {
      emitter.emit('set-viewport-changed', viewport);
    }
  };

  if (!attached) {
    win.addEventListener('resize', handleChange, true);
    attached = true;
  }

  handleChange();
};

export default runOnResize;
