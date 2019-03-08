import React from 'react';
import { Link } from 'react-router';

import PageLayout from './../pageLayout';

const HeaderComponent = () => {
  return <h1 className="h3">Could not find what you are looking for.</h1>;
};

const BodyComponent = () => {
  return (
    <p>
      Sorry, we could not find that Route. Go back to{' '}
      <Link to="/" className="UIK-link">
        Manage Dashboards
      </Link>
    </p>
  );
};

const NoMatch = () => {
  return (
    <PageLayout
      pageKey="noMatch"
      breadcrumbPaths={[
        { path: '/', name: 'Manage Dashboards' },
        { path: '', name: `Not found` }
      ]}
      HeaderComponent={HeaderComponent}
      BodyComponent={BodyComponent}
    />
  );
};

export default NoMatch;
