import { setIsHighContrastMode } from '../../../../../_shared/utils/storage';

const UI_ONRESIZE = 'ui/onResize';
const UI_ONTOGGLE_HIGH_CONTRAST = 'ui/setHighContrastMode';

export const uiReducer = (state, {type, payload}) => {
  switch (type) {
    case UI_ONRESIZE:
      return {...state, viewport: payload.viewport};
    case UI_ONTOGGLE_HIGH_CONTRAST:
      return {...state, isHighContrastMode: payload.toggle};
    default:
      return state;
  }
};

export const onResize = (viewport) => {
  return {
    type: UI_ONRESIZE,
    payload: {viewport},
  }
};

// TODO (davidg): this is "set" highContrast, not toggle
export const setHighContrastMode = (isOn) => {
  setIsHighContrastMode(isOn);

  return {
    type: UI_ONTOGGLE_HIGH_CONTRAST,
    payload: {toggle: isOn},
  }
};
