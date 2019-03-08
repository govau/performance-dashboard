import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import PageLayout from './../pageLayout';
import {
  getServiceDashboardUrl,
  getDashboardWidgetsUrl,
  getDashboardCreateUrl,
} from './../../utils/formatUrl';

const DashboardItems = ({ dashboards }) => (
  <section className="dashboard-list">
    {dashboards.length ? (
      dashboards.map((d, idx) => {
        return <DashboardItem key={idx} dashboard={d} />;
      })
    ) : (
      <p>No dashboards</p>
    )}
  </section>
);

export const DashboardItem = ({ dashboard }) => (
  <article className="dashboard-list__item">
    <h1 className="h5">{dashboard.name}</h1>

    <span className="link-wrap">
      <Link
        to={getDashboardWidgetsUrl(dashboard.id)}
        className="btn btn-primary"
      >
        Edit Dashboard
      </Link>
    </span>

    <span className="link-wrap">
      <a
        href={getServiceDashboardUrl(dashboard.id, dashboard.name)}
        className="UIK-link"
        target="blank"
        rel="external"
      >
        View service dashboard
      </a>
    </span>
  </article>
);

const HeaderComponent = isAdmin => () => (
  <div>
    <h1 className="h3">Manage Dashboards</h1>

    {isAdmin && (
      <span className="link-wrap">
        <Link to={getDashboardCreateUrl()} className="btn btn-primary">
          Create dashboard
        </Link>
      </span>
    )}
  </div>
);

const BodyComponent = ({ dashboards }) => () => {
  let sortedDashboards = dashboards.sort((a, b) => {
    return new Date(b.ts).getTime() - new Date(a.ts).getTime();
  });

  return <DashboardItems dashboards={sortedDashboards} />;
};

const DashboardsIndex = props => (
  <PageLayout
    pageKey="dashboards"
    breadcrumbPaths={[{ path: '', name: 'Manage Dashboards' }]}
    HeaderComponent={HeaderComponent(props.isAdmin)}
    BodyComponent={BodyComponent({ dashboards: props.dashboards })}
  />
);

DashboardsIndex.propTypes = {
  dashboards: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAdmin: PropTypes.bool,
};

export default DashboardsIndex;
