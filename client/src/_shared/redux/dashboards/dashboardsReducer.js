/**
 * @param state
 * @param action.type
 * @param action.payload
 * @returns {Array.<Dashboards>}
 */

import { types } from './dashboardsActions';

const dashboardsReducer = (state, {type, payload}) => {
  switch (type) {
    case types.HYDRATE__DASHBOARD_CREATED:
      return [
        ...state,
        payload
      ];

    default:
      return state;
  }
};

export default dashboardsReducer;
