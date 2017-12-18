
import React from 'react';
import {Provider} from 'react-redux';
import DashboardShowPage from './pages/dashboardShow';
import ShowPageWrapper from './components/ShowPageWrapper/ShowPageWrapper';

// import {configureDatavizkit} from '@gov.au/datavizkit/lib/configure';


const AppContainer = (props) => {
  const {store, emitter} = props;

  // configureDatavizkit({});

  return (
    <Provider store={store}>
      <ShowPageWrapper>
        <DashboardShowPage emitter={emitter} />
      </ShowPageWrapper>
    </Provider>
  );
};

export default AppContainer;
