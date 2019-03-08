/*
  POST   /api/v1/dashboards/:dashboard_id/widgets(.:format)
  api/v1/widgets#create {:format=>"json"}
 */

export const types = {
  HYDRATE__DASHBOARD_CREATED: 'create/dashboard/success',
};

export const createDashboard = ({ formData }) => {
  return (dispatch, getState, api) => {
    return api('dashboards', getState().currentUser.token, {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  };
};

export const initialiseDashboard = ({ formData }) => {
  return (dispatch, getState, api) => {
    return api('initialise-dashboard', getState().currentUser.token, {
      method: 'POST',
      body: JSON.stringify(formData),
    }).then(response => {
      dispatch({
        type: types.HYDRATE__DASHBOARD_CREATED,
        payload: response,
      });

      return response;
    });
  };
};
