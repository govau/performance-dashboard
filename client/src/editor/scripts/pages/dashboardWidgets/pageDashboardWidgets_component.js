import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import jump from 'jump.js';
import Breadcrumbs from 'shared/components/uikit-breadcrumbs';
import CreateChart from './CreateChart';
import UikitAlert from 'shared/components/uikit-alert';
import {
  getDashboardUrl,
  getDashboardWidgetFactUrl,
  getServiceDashboardUrlAnchor,
} from './../../utils/formatUrl';
import { onNextFrame } from './../../utils/DOM';
import { WidgetTypeSlice, WidgetTypeFact } from './../../components/widgetListItem';
import { sanitizeBtlWidgetByType } from 'shared/redux/widgets/widgetsHelpers';
import { createWidget, initialiseWidget } from 'shared/redux/widgets/widgetsActions';

class PageDashboardWidgets extends Component {
  state = {
    creatingChart: false,
  };

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentDidMount() {
    const { ui } = this.props;

    if (ui.lastWidgetImpression && ui.lastWidgetImpression.widgetId) {
      this.scrollToWidget(ui.lastWidgetImpression.widgetId);
    }
  }

  componentWillUnmount() {
    const {ui, actions} = this.props;
    // clear lastWidgetImpression on unmount so the component can rerender correctly
    // without losing its alert message
    if (ui.lastWidgetImpression && ui.lastWidgetImpression.widgetId) {
      actions.setLastWidgetImpression({});  // clear
    }
  }

  scrollToWidget(widgetId) {
    let node = findDOMNode(this.refs[widgetId]);
    if (node !== 'undefined') {
      onNextFrame(() => {
        jump(node, {
          duration:-100 // appear to not transition,
        });
      });
    }
  }

  handleAddNewFact = (event) => {
    event.preventDefault();
    const dashboardId = this.props.dashboard.id;

    this.props.createWidget(dashboardId, {
      formData: {
        name: 'Fact',
        description: 'Fact text',
        options: {},
        row: 0,
        pos: 0,
        type: 'fact',
        size: 'small',
        units: 'n',
      },
    }).then((widget) => {
      console.log(`Fact widget created (${widget.id})`);
      this.context.router.push(getDashboardWidgetFactUrl(dashboardId, widget.id));
    });
  }

  toggleChartForm = (event) => {
    if (event) {
      event.preventDefault();
    }

    this.setState({
      creatingChart: !this.state.creatingChart,
    });
  };

  handleAddNewChart = (formData) => {
    this.toggleChartForm();
    const { dashboard } = this.props;

    this.props.initialiseWidget(dashboard.id, formData).then((widget) => {
      console.log(`Chart widget created (${widget.id})`);
      window.location = getServiceDashboardUrlAnchor(dashboard.id, dashboard.name, widget.name)
    });
  }

  render() {
    const pageKey = 'dashboardwidgets';
    let {
      ui,
      dashboard,
      heroSlice,
      btlSlices,
      facts,
      actions
    } = this.props;

    const breadcrumbPaths = [
      { path: '/', name: 'Manage Dashboards' },
      { path: getDashboardUrl(dashboard.id), name: `${dashboard.name}` },
    ];

    return (
      <div className={`page page-${pageKey}`}>
        <div className="page__header">
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'center',
            }}>
              <div style={{
                flex: '1',
              }}>
                <Breadcrumbs paths={breadcrumbPaths} />

                <div>
                  <h1 className="h3">{dashboard.name}</h1>

                  <p className="title-description">Edit service overview</p>
                </div>
              </div>

              <div>
                <Link
                  to=""
                  className="UIK-button btn btn-primary pr-1"
                  onClick={this.toggleChartForm}
                >
                  Add new chart
                </Link>

                &nbsp;&nbsp;&nbsp;

                <Link
                  to=""
                  className="UIK-button btn btn-primary"
                  onClick={this.handleAddNewFact}
                >
                  Add new fact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {this.state.creatingChart && (
          <div style={{
            backgroundColor: '#f8f8f8',
          }}>
            <div className="container">
              <CreateChart
                onSubmit={this.handleAddNewChart}
              />
            </div>
          </div>
        )}

        <div className="page__body">
          <div className="container">
            <section className="widget-list">

              {(!heroSlice && !btlSlices.length) && <div className="row">
                <div className="col-xs-12">
                  <UikitAlert type="info" text="Your dashboard does not yet contain any charts or facts. Please contact the dashboard team to set up this information." />
                </div>
              </div>}

              {heroSlice && <div ref={String(heroSlice.widget.id)}>
                <WidgetTypeSlice
                    slice={heroSlice}
                    actions={{setLastWidgetImpression: actions.setLastWidgetImpression}}
                    alertProps={ui.lastWidgetImpression &&  ui.lastWidgetImpression.widgetId === heroSlice.widget.id ? ui.lastWidgetImpression : null}
                />
              </div>}

              {btlSlices.map((slice, idx) => {
                // check that we recognise the widget item, before continuing
                if (slice === null || sanitizeBtlWidgetByType(slice.widget.type) === null) {
                  return null;
                }
                return (
                  <div key={idx} ref={String(slice.widget.id)}>
                    <WidgetTypeSlice
                      slice={slice}
                      actions={{setLastWidgetImpression: actions.setLastWidgetImpression}}
                      alertProps={ui.lastWidgetImpression &&  ui.lastWidgetImpression.widgetId === slice.widget.id ? ui.lastWidgetImpression : null}
                    />
                  </div>
                );
              })}

              {facts.map((fact, idx) => {
                return (
                  <div key={idx} ref={String(fact.widget.id)}>
                    <WidgetTypeFact
                      fact={fact}
                      actions={{setLastWidgetImpression: actions.setLastWidgetImpression}}
                      alertProps={ui.lastWidgetImpression && ui.lastWidgetImpression.widgetId === fact.widget.id ? ui.lastWidgetImpression : null}
                    />
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

if (__DEV__) {
  PageDashboardWidgets.propTypes = {
    dashboard: PropTypes.object.isRequired,
    heroSlice: PropTypes.object,
    btlSlices: PropTypes.array,
    facts: PropTypes.array,
    ui: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
}

PageDashboardWidgets.propTypes = {
  createWidget: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => ({
    createWidget: (dashboardId, payload) => {
      return dispatch(createWidget(dashboardId, payload));
    },
    initialiseWidget: (dashboardId, payload) => {
      return dispatch(initialiseWidget(dashboardId, payload));
    },
  }),
)(PageDashboardWidgets);

// export default PageDashboardWidgets;
