import {combineReducers} from 'redux';
import initialState from './initialState';
import {bindReducer} from 'shared/redux/reducerHelpers';
import dashboardsReducer from 'shared/redux/dashboards/dashboardsReducer';
import widgetsReducer from 'shared/redux/widgets/widgetsReducer';
import datasetsReducer from 'shared/redux/datasets/datasetsReducer';
import slicesReducer from 'shared/redux/slices/slicesReducer';
import {uiReducer} from './ducks/ui_ducks';

const rootReducer = combineReducers({
  dashboards: bindReducer(dashboardsReducer, initialState.dashboards),
  widgets: bindReducer(widgetsReducer, initialState.widgets),
  datasets: bindReducer(datasetsReducer, initialState.datasets),
  slices: bindReducer(slicesReducer, initialState.slices),
  ui: bindReducer(uiReducer, initialState.ui),
});

export default rootReducer;
