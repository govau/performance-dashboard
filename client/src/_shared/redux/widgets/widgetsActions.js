
export const types = {
  HYDRATE__WIDGET_UPDATED: 'hydrate/widget_updated',
};

export const updateWidget = ({widget_id, dashboard_id, formData}) => {
  return (dispatch, getState, api) => {
    return api(`dashboards/${dashboard_id}/widgets/${widget_id}`, getState().currentUser.token, {
      method: 'PATCH',
      body: JSON.stringify(formData)
    })
      .then(response => {
        dispatch({
          type: types.HYDRATE__WIDGET_UPDATED,
          payload: {
            widget: response
          }
        });
        return response;
      });
  };
};
