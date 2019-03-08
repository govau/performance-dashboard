import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from 'shared/components/uikit-breadcrumbs';

const PageLayout = ({
  pageKey,
  HeaderComponent,
  BodyComponent = null,
  breadcrumbPaths = null,
  children = null,
}) => {
  return (
    <div className={`page page-${pageKey}`}>
      <div className="page__header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              {breadcrumbPaths && <Breadcrumbs paths={breadcrumbPaths} />}

              <HeaderComponent />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page__body">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              {children ? children : BodyComponent ? <BodyComponent /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PageLayout.propTypes = {
  pageKey: PropTypes.string.isRequired,
  HeaderComponent: PropTypes.func,
  BodyComponent: PropTypes.func,
  children: PropTypes.element,
  breadcrumbPaths: PropTypes.array,
};

export default PageLayout;
