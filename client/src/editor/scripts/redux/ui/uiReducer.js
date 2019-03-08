import { types } from './uiActions';
import initialState from './../initialState';

const ui = (state = initialState.ui, { type, payload }) => {
  switch (type) {
    case types.UI_SET_LASTWIDGETIMPRESSION:
      return { ...state, lastWidgetImpression: payload };

    case types.UI_SET_SHOWPREVIEW:
      return { ...state, showPreview: payload.condition };

    default:
      return state;
  }
};

export default ui;
