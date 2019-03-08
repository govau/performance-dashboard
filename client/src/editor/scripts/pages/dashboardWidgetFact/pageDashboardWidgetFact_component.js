import React, { Component } from 'react';

import PageLayout from './../pageLayout';
import { getDashboardWidgetsUrl } from './../../utils/formatUrl';
import UpdateFact from './../../components/jsonschemaForms/fact';
import metadatas from 'shared/redux/widgets/widgetMetadata';

const HeaderComponent = ({ title, description }) => () => (
  <div>
    <h1 className="h3">{title}</h1>
    {description && <p className="title-description">{description}</p>}
  </div>
);

class DashboardWidgetDatagroupSimplePage extends Component {
  render() {
    let { fact } = this.props;
    let { widget, dashboard } = fact;

    let metadata = metadatas[widget.type][widget.units];

    return (
      <PageLayout
        pageKey="dashboardwidgetdatagroupsimple"
        breadcrumbPaths={[
          { path: '/', name: 'Manage Dashboards' },
          {
            path: getDashboardWidgetsUrl(dashboard.id),
            name: `${dashboard.name}`,
          },
          { path: '', name: `Fact: ${widget.name}` },
        ]}
        HeaderComponent={HeaderComponent({
          title: widget.name,
          description: metadata.widget_help,
        })}
      >
        <UpdateFact
          formModel={fact}
          completedUrl={getDashboardWidgetsUrl(dashboard.id)}
        />
      </PageLayout>
    );
  }
}

export default DashboardWidgetDatagroupSimplePage;
