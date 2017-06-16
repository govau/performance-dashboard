
import React from 'react';
import {Link} from 'react-router';

import PageLayout from './../pageLayout';


const HeaderComponent = () => {
  return <h1 className="h3">Couldn't find what you're looking for.</h1>;
};

const BodyComponent = () => {
  return (
    <p>Sorry, we couldn't find that Route. Go back to <Link to="/" className="UIK-link">Manage Dashboards</Link></p>
  );
};

const NoMatch = () => {
  return <PageLayout pageKey="noMatch"
                     breadcrumbPaths={[
                       {path:'/', name:'Manage Dashboards'},
                       {path:'', name:`Not found`}
                     ]}
                     HeaderComponent={HeaderComponent}
                     BodyComponent={BodyComponent} />
};

export default NoMatch;
