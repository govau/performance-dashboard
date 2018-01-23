import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HomePageWidget from './HomePageWidget';
import Header from '../../../dashboard/scripts/app/components/Header/Header';
import Footer from '../../../dashboard/scripts/app/components/Footer/Footer';
import BetaBanner from '../../../dashboard/scripts/app/components/BetaBanner/BetaBanner';
import runLegacy from 'dashboard-legacy/run';

class HomePage extends PureComponent {
  componentDidMount() {
    runLegacy(); // bind and start the D3 charts
  }

  render() {
    const { props } = this;

    return (
      <div>
        <BetaBanner />

        <Header />

        <div className="dashboards_index container">
          <section className="row" aria-labelledby="dashboardsoverview">
            <div className="col-md-12">
              <h1 id="dashboardsoverview">Performance Dashboard overview</h1>
            </div>

            <div className="dashboards-intro col-md-8">
              <p>The Performance Dashboard makes data open and accessible by measuring the performance of Australian government services against the Digital Service Standard.</p>
              <p>This promotes government transparency and helps drive the ongoing improvement of government services &mdash; for all Australians.</p>
            </div>

            <div className="dashboards-intro-sec hidden-sm-down col-md-4">
              <div className="media">
                <div className="media-left">
                  <span className="number-of-dashboards">{props.dashboards.length}</span>
                </div>
                <div className="media-body media-middle">
                  <span>service<br />dashboards</span>
                </div>
              </div>
            </div>
          </section>

          <section className="metrics row">
            <div className="metric-overview col-sm-12 col-md-4">
              <p>There are 4 key performance indicators that government services are required to publish on the Performance Dashboard.</p>
            </div>
            <div className="metric-definitions col-md-8 col-sm-12">
              <div className="metric-definitions-inner">
                <div className="metric-definitions__metric user-satisfaction col-sm-12 col-md-3">
                  <div className="widget__title">
                    <h2>User satisfaction</h2>
                  </div>
                  <p>The overall satisfaction rate with the service.</p>
                </div>
                <div className="metric-definitions__metric cost-per-transaction col-sm-12 col-md-3">
                  <div className="widget__title">
                    <h2>Cost per transaction</h2>
                  </div>
                  <p>The estimated cost to government, per transaction, for administering the service.</p>
                </div>
                <div className="metric-definitions__metric digital-take-up col-sm-12 col-md-3">
                  <div className="widget__title">
                    <h2>Digital take-up</h2>
                  </div>
                  <p>The adoption rate for the digital service.</p>
                </div>
                <div className="metric-definitions__metric completion-rate col-sm-12 col-md-3">
                  <div className="widget__title">
                    <h2>Completion rate</h2>
                  </div>
                  <p>The overall rate of completion for users of the service.</p>
                </div>
              </div>
              <div className="metric-link">
                <a href="https://www.dto.gov.au/standard/11-measure-performance/" rel="external" className="link--external-alt" target="_blank">Learn more about these key metrics</a>
              </div>
            </div>

            <div className="dashboards-intro-sec hidden-md-up col-sm-12">
              <div className="media">
                <div className="media-left">
                  <span className="number-of-dashboards">{props.dashboards.length}</span>
                </div>
                <div className="media-body media-middle">
                  <span>service<br />dashboards</span>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="servicedashboards">
            <h2 id="servicedashboards" className="dashboards-heading hidden-sm-down">Service dashboards</h2>
            <ul className="list-unstyled clearfix">
              {props.dashboards.map(dashboard => (
                <li
                  key={dashboard.id}
                  className="card row-deprecated-dont-add-this-anywhere-else"
                >
                  <div className="card__left">
                    <div>
                      <h3 className="card-title">
                        {dashboard.dashboardized_name}
                      </h3>
                      <div className="updated-at hidden-md-up">
                        <time>Last updated on {dashboard.last_updated_at}</time>
                      </div>
                    </div>
                    <div className="updated-at hidden-sm-down">
                      <time>Last updated on {dashboard.last_updated_at}</time>
                    </div>
                    <a
                      href={`/dashboards/${dashboard.id}`}
                      className="card__link__visible"
                    >
                      View dashboard
                    </a>

                    <span className='sr-only'> {dashboard.name}</span>
                  </div>

                  {dashboard.display_kpis && (
                    <div className="card__right dashboard__kpis clearfix">
                      {dashboard.widgets.map(widget => (
                        <div
                          key={widget.id}
                          className="aus-width-one-fourth"
                        >
                          <HomePageWidget
                            {...widget}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  dashboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
    dashboardized_name: PropTypes.string,
    name: PropTypes.string,
    last_updated_at: PropTypes.string,
    display_kpis: PropTypes.bool,
    widgets: PropTypes.array,
  }))
};

export default HomePage;
