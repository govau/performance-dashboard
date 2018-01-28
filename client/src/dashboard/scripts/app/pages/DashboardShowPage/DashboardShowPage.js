import React, { PureComponent } from 'react';
import {NullDataLayerPattern} from '@gov.au/datavizkit';
import HeroWidget from './../../components/heroWidget';
import KpiWidgets from './../../components/kpiWidgets';
import BtlWidgets from './../../components/btlWidgets';
import {dateFormats} from '../../../../../_shared/utils/formatDates';
import ShowPageWrapper from '../../components/PageWrapper/PageWrapper';
import ShowPageInfo from '../../components/ShowPageInfo/ShowPageInfo';
import DocumentTitle from '../../../../../_shared/components/DocumentTitle/DocumentTitle';
import runOnResize from '../../../runOnResize';

class DashboardShowPage extends PureComponent {
  componentDidMount() {
    runOnResize(viewport => {
      this.props.onResize(viewport);
    });
  }

  render() {
    const { props } = this;

    // TODO (davidg): currently React only mounts once the data is loaded,
    // so at this point, loaded is always true. Fix this to mount React with no data
    // then load the data into the store when it arrives. OR just jump straight to server-rendering
    const loaded = true;

    return (
      <ShowPageWrapper
        isHighContrastMode={props.ui.isHighContrastMode}
        setHighContrastMode={props.setHighContrastMode}
      >
        <DocumentTitle title={props.dashboard.name} />

        <div id="dashboard-show-app">
          {!loaded && (
            <div className="hero-region">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="D-loading-panel">
                      <span>Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {loaded && (
            <div className="page--dashboard-show">

              <NullDataLayerPattern />


              <div className="page__sky-blue-banner">
                <div className="container">

                  <div className="row">
                    <div className="col-xs-12">
                      <span className="dashboard-show__org-badge">
                        <span className="badge badge-pill badge-primary">{props.dashboard.organisation_name}</span>
                      </span>
                      <h1 className="dashboard-show__title">{props.dashboard.name}</h1>
                    </div>
                  </div>

                  {props.kpiWidgets && props.kpiWidgets.length > 0 && <div className="dashboard-show__kpis">
                    <KpiWidgets widgets={props.kpiWidgets} dashboard={props.dashboard} />
                  </div>}

                </div>
              </div>

              <div className="dashboard-show__hero">
                <div className="page__white-banner">

                  {props.heroWidget && props.dashboard.display_hero && <div className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="col-xs-12">
                          <h2 className="h3-light">KPIs performance history</h2>
                          <span className="hero-last-updated-date">
                            Last updated <time dateTime={dateFormats.dateTime(props.heroWidget.last_updated_at)}>
                              {dateFormats.monthLongYear(props.heroWidget.last_updated_at)}
                            </time>
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12 tuck-it-on-in">
                          <HeroWidget widget={props.heroWidget} dashboard={props.dashboard} />
                        </div>
                      </div>
                    </div>
                  </div>}

                  {!props.heroWidget && <span className="spacer" />}
                </div>
              </div>

              <section className="page__grey-banner">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12">
                      <h1 className="h3-light">Other Supporting Metrics</h1>
                    </div>
                  </div>
                  <BtlWidgets widgets={props.btlWidgets} dashboard={props.dashboard} ui={props.ui} />
                </div>
              </section>
            </div>
          )}
        </div>

        <ShowPageInfo />
      </ShowPageWrapper>
    );
  }
}

export default DashboardShowPage;
