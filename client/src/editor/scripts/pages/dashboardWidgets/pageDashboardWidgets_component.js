
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router';
import jump from 'jump.js';

import PageLayout from './../pageLayout';
import UikitAlert from 'shared/components/uikit-alert';
import {getDashboardUrl} from './../../utils/formatUrl';
import {onNextFrame} from './../../utils/DOM';
import {WidgetTypeSlice, WidgetTypeFact} from './../../components/widgetListItem';
import {sanitizeBtlWidgetByType} from 'shared/redux/widgets/widgetsHelpers';


const HeaderComponent = ({title}) => () => (
  <div>
    <h1 className="h3">{title}</h1>
    <p className="title-description">Edit service overview</p>
  </div>
);

class PageDashboardWidgets extends Component {

  componentDidMount() {
    const {ui} = this.props;
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

  render() {
    let {
      ui,
      dashboard,
      heroSlice,
      btlSlices,
      facts,
      actions
    } = this.props;

    return (
      <PageLayout pageKey="dashboardwidgets"
                  breadcrumbPaths={[
                    {path: '/', name:'Manage Dashboards'},
                    {path: getDashboardUrl(dashboard.id), name:`${dashboard.name}`}
                  ]}
                  HeaderComponent={HeaderComponent({title: dashboard.name})}>

        <div>
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
                  <WidgetTypeFact fact={fact}
                                  actions={{setLastWidgetImpression: actions.setLastWidgetImpression}}
                                  alertProps={ui.lastWidgetImpression && ui.lastWidgetImpression.widgetId === fact.widget.id ? ui.lastWidgetImpression : null}
                  />
                </div>
              )
            })}

            <section className="page-dashboardwidgets__bookend-ctas">
              <Link to="" className="UIK-button btn btn-primary pr-1" disabled={true} onClick={e => e.preventDefault()}>Add new chart</Link>
              <Link to="" className="UIK-button btn btn-primary" disabled={true} onClick={e => e.preventDefault()}>Add new fact</Link>
            </section>

          </section>

        </div>

      </PageLayout>
    )
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

export default PageDashboardWidgets;
