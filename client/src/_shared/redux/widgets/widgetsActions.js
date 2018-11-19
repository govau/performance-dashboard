export const types = {
  HYDRATE__WIDGET_UPDATED: 'hydrate/widget_updated',
  HYDRATE__WIDGET_CREATED: 'hydrate/widget_created',
};

export const updateWidget = ({ widget_id, dashboard_id, formData }) => {
  return (dispatch, getState, api) => {
    return api(`dashboards/${dashboard_id}/widgets/${widget_id}`, getState().currentUser.token, {
      method: 'PATCH',
      body: JSON.stringify(formData)
    }).then(response => {
      dispatch({
        type: types.HYDRATE__WIDGET_UPDATED,
        payload: {
          widget: response
        },
      });

      return response;
    });
  };
};

export const createWidget = (dashboardId, { formData }) => {
  return (dispatch, getState, api) => {
    return api(`dashboards/${dashboardId}/widgets`, getState().currentUser.token, {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(response => {
      dispatch({
        type: types.HYDRATE__WIDGET_CREATED,
        payload: {
          widget: response
        },
      });

      return response;
    });
  };
};

export const initialiseWidget = (dashboardId, formData) => {
  return (dispatch, getState, api) => {
    return api(`dashboards/${dashboardId}/initialise-widget`, getState().currentUser.token, {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(response => {
      dispatch({
        type: types.HYDRATE__WIDGET_CREATED,
        payload: {
          widget: response,
        },
      });

      return response;
    });
  };
};

export const initialiseKpis = (dashboardId, formData) => {
  return (dispatch, getState, api) => {
    return api(`dashboards/${dashboardId}/initialise-kpis`, getState().currentUser.token, {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  };
};
