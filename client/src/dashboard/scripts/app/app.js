import React from 'react';
import {Provider} from 'react-redux';
import DashboardShowPage from './pages/dashboardShow';

const AppContainer = (props) => {
  const {store, emitter} = props;

  return (
    <Provider store={store}>
      <DashboardShowPage emitter={emitter} />
    </Provider>
  );
};

export default AppContainer;
