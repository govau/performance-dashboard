
import React from 'react';
import {Provider} from 'react-redux';
import DashboardShowPage from './pages/dashboardShow';

// import {configureDatavizkit} from '@gov.au/datavizkit/lib/configure';


const AppContainer = (props) => {
  const {store, emitter} = props;

  // configureDatavizkit({});

  return (
    <Provider store={store}>
      <DashboardShowPage emitter={emitter} />
    </Provider>
  );
};

export default AppContainer;
