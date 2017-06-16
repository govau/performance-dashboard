
import {combineReducers} from 'redux';
import reduceReducers from 'reduce-reducers';
import {routerReducer} from 'react-router-redux'

import {bindReducer} from 'shared/redux/reducerHelpers';
import initialState from './initialState';

import ui from './ui/uiReducer';
import currentUser from './currentUser/currentUserReducer';
import dashboardsReducer from 'shared/redux/dashboards/dashboardsReducer';
import widgetsReducer from 'shared/redux/widgets/widgetsReducer';
import datasetsReducer from 'shared/redux/datasets/datasetsReducer';
import slicesReducer from 'shared/redux/slices/slicesReducer';

import {types as sliceTypes} from 'shared/redux/slices/slicesActions';
import {updateSliceinSlices, createSliceinSlices} from 'shared/redux/slices/slicesHelpers';
import {updateWidgetInWidgets} from 'shared/redux/widgets/widgetsHelpers';
import {updateDatasetInDatasets} from 'shared/redux/datasets/datasetsHelper';


const rootReducer = reduceReducers(
  combineReducers({
    routing: routerReducer,
    ui,
    currentUser,
    dashboards: bindReducer(dashboardsReducer, initialState.dashboards),
    widgets: bindReducer(widgetsReducer, initialState.widgets),
    datasets: bindReducer(datasetsReducer, initialState.datasets),
    slices: bindReducer(slicesReducer, initialState.slices),
  }),

  //
  // cross-cutting concerns because here `state` is the whole state tree
  //

  (state, {type, payload}) => {

    switch (type) {

      case sliceTypes.HYDRATE__SLICE_UPDATED:
        {
          const {slice, widget, datasets} = payload;
          state.slices = updateSliceinSlices(state.slices, slice);
          state.widgets = updateWidgetInWidgets(state.widgets, widget);

          datasets.forEach(dataset => {
            state.datasets = updateDatasetInDatasets(state.datasets, dataset);
          });
          return state;
        }

      case sliceTypes.HYDRATE__SLICE_CREATED:
        {
          const {slice, widget, datasets} = payload;
          state.slices = createSliceinSlices(state.slices, slice);
          state.widgets = updateWidgetInWidgets(state.widgets, widget);

          datasets.forEach(dataset => {
            state.datasets = updateDatasetInDatasets(state.datasets, dataset);
          });
          return state;
        }

      default:
        return state;
    }
  }
);

export default rootReducer;
