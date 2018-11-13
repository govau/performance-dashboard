import { types } from './widgetsActions';

/**
 * @param state
 * @param action.type
 * @param action.payload
 * @returns {Array.<Widgets>}
 */
const widgetsReducer = (state, {type, payload}) => {
  switch (type) {
    case types.HYDRATE__WIDGET_UPDATED:
      return state.map(widget => {
        if (widget.id === payload.widget.id) {
          return Object.assign(widget, payload.widget);
        }
        return widget;
      });

    case types.HYDRATE__WIDGET_CREATED:
      return [
        ...state,
        payload.widget
      ];

    default:
      return state;
  }
};

export default widgetsReducer;
