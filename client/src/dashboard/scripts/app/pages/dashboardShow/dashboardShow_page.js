import React from 'react';
import { NullDataLayerPattern } from '@gov.au/datavizkit';
import HeroWidget from './../../components/heroWidget';
import KpiWidgets from './../../components/kpiWidgets';
import BtlWidgets from './../../components/btlWidgets';
import { dateFormats } from 'shared/utils/formatDates';

const DashboardShowPage = props => {
  const { dashboard, heroWidget, kpiWidgets, btlWidgets, ui } = props;

  return (
    <div className="page--dashboard-show">
      <NullDataLayerPattern />

      <div className="page__sky-blue-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <span className="dashboard-show__org-badge">
                <span className="badge badge-pill badge-primary">
                  {dashboard.organisation_name}
                </span>
              </span>

              <h1 className="dashboard-show__title">{dashboard.name}</h1>
            </div>
          </div>

          {kpiWidgets && kpiWidgets.length > 0 && (
            <div className="dashboard-show__kpis">
              <KpiWidgets widgets={kpiWidgets} dashboard={dashboard} />
            </div>
          )}
        </div>
      </div>

      <div className="dashboard-show__hero">
        <div className="page__white-banner">
          {heroWidget && dashboard.display_hero && (
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="col-xs-12">
                    <h2 className="h3-light">KPIs performance history</h2>

                    <span className="hero-last-updated-date">
                      Last updated{' '}
                      <time
                        dateTime={dateFormats.dateTime(
                          heroWidget.last_updated_at,
                        )}
                      >
                        {dateFormats.monthLongYear(heroWidget.last_updated_at)}
                      </time>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 tuck-it-on-in">
                    <HeroWidget widget={heroWidget} dashboard={dashboard} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {!heroWidget && <span className="spacer" />}
        </div>
      </div>

      <section className="page__grey-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="h3-light">Other Supporting Metrics</h1>
            </div>
          </div>

          <BtlWidgets widgets={btlWidgets} dashboard={dashboard} ui={ui} />
        </div>
      </section>
    </div>
  );
};

export default DashboardShowPage;
