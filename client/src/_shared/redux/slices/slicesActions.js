import { formatDate } from './../../utils/formatDates';

export const types = {
  HYDRATE__SLICE_UPDATED: 'update/slice/success',
  HYDRATE__SLICE_CREATED: 'create/slice/success',
};

export const createSlice = ({ widget_id, period, period_start, formData }) => {
  const periodStartSegment = formatDate(period_start, 'YYYY-MM-DD');
  return (dispatch, getState, api) => {
    return api(
      `widgets/${widget_id}/slices/${period}/${periodStartSegment}`,
      getState().currentUser.token,
      {
        method: 'POST',
        body: JSON.stringify(formData),
      },
    ).then(response => {
      if (
        !response.slice ||
        !response.widget ||
        !response.datasets ||
        response.datasets.length <= 0
      ) {
        throw new Error('Server did not return the correct response');
      }
      dispatch({
        type: types.HYDRATE__SLICE_CREATED,
        payload: response,
      });
      return response;
    });
  };
};

export const updateSlice = ({ widget_id, period, period_start, formData }) => {
  const periodStartSegment = formatDate(period_start, 'YYYY-MM-DD');
  return (dispatch, getState, api) => {
    return api(
      `widgets/${widget_id}/slices/${period}/${periodStartSegment}`,
      getState().currentUser.token,
      {
        method: 'PATCH',
        body: JSON.stringify(formData),
      },
    ).then(response => {
      if (
        !response.slice ||
        !response.widget ||
        !response.datasets ||
        response.datasets.length <= 0
      ) {
        throw new Error('Server did not return the correct response');
      }
      dispatch({
        type: types.HYDRATE__SLICE_UPDATED,
        payload: response,
      });
      return response;
    });
  };
};
