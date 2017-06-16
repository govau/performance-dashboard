
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import PageLayout from './../pageLayout';
import {
  getServiceDashboardUrl,
  getDashboardWidgetsUrl
} from './../../utils/formatUrl';


const DashboardItems = ({dashboards}) => {
  return (
    <section className="dashboard-list">
      {dashboards.length ?
        dashboards.map((d, idx) => {
          return <DashboardItem key={idx} dashboard={d} />
        }) :
        <p>No dashboards</p>
      }
    </section>
  )
};

export const DashboardItem = ({dashboard}) => {
  return (
    <article className="dashboard-list__item">
      <h1 className="h5">{dashboard.name}</h1>
      <span className="link-wrap"><Link to={getDashboardWidgetsUrl(dashboard.id)} className="btn btn-primary">Edit Dashboard</Link></span>
      <span className="link-wrap"><a href={getServiceDashboardUrl(dashboard.id, dashboard.name)} className="UIK-link" target="blank" rel="external">View service dashboard</a></span>
    </article>
  )
};


const HeaderComponent = () => (
  <div>
    <h1 className="h3">Manage Dashboards</h1>
  </div>
);

const BodyComponent = ({dashboards}) => () => {
  let sortedDashboards = dashboards.sort((a,b) => {
    return new Date(b.ts).getTime() - new Date(a.ts).getTime();
  });
  return <DashboardItems dashboards={sortedDashboards} />;
};

const DashboardsIndex = (props) => {
   return <PageLayout pageKey="dashboards"
                      breadcrumbPaths={[
                        {path:'', name:'Manage Dashboards'}
                      ]}
                      HeaderComponent={HeaderComponent}
                      BodyComponent={BodyComponent({dashboards: props.dashboards})} />
};

if (__DEV__) {
  DashboardsIndex.propTypes = {
    dashboards: PropTypes.arrayOf(PropTypes.object).isRequired
  };
}

export default DashboardsIndex;
