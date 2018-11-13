import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from './../pageLayout';
import Pagination from './../../components/widgetPagePagination';
import {getHumanisedVeryShortDate} from 'shared/utils/formatDates';
import {CreateSliceForm, UpdateSliceForm} from './../../components/jsonschemaForms/slice';
import metadatas from 'shared/redux/widgets/widgetMetadata';
import TrafficLight from './../../components/widgetTrafficLight';
import {getDashboardWidgetsUrl} from './../../utils/formatUrl';
import {getNextPeriod, getPrevPeriod, isEmptySlice, reachedLimitSeriesMin} from 'shared/redux/slices/slicesSelectors';


const HeaderComponent = ({title, dateSeriesEnd, datePublished, description}) => () => (
  <div>
    <div className="page__title">
      <h1 className="h3">{title}</h1>
      <TrafficLight dateSeriesEnd={dateSeriesEnd} datePublished={datePublished} />
    </div>
    {description && <p className="title-description">{description}</p>}
  </div>
);

const DashboardWidgetDatagroupTimeSeriesPage = (props) => {
  const {slice} = props;
  const {widget, dashboard} = slice;

  let metadata = {
    label: null,
    widget_help: null,
    widget_form_help: null
  };

  if (widget.type && widget.units) {
    if (metadatas[widget.type] && metadatas[widget.type][widget.units]) {
      metadata = metadatas[widget.type][widget.units];
    }
  }

  return (
    <PageLayout pageKey="dashboardwidgetdatagrouptimeseries"
                breadcrumbPaths={[
                 {path: '/', name:'Manage Dashboards'},
                 {path: getDashboardWidgetsUrl(dashboard.id), name:`${dashboard.name}`},
                 {path: '', name:`${widget.name} - ${getHumanisedVeryShortDate(slice.period_start)}`}
                ]}
                HeaderComponent={HeaderComponent({
                  title: metadata.label || widget.name,
                  seriesEnd: slice.widget.series_end,
                  datePublished: slice.widget.last_updated_at,
                  description: metadata.widget_help || null
                })}>

      <div>
        <div className="timeseries-pagination">
          <span className="timeseries-pagination__supp-title">{isEmptySlice(slice) ? 'Add' : 'Edit'} data for:</span>
          <span className="timeseries-pagination__title">{getHumanisedVeryShortDate(slice.period_start)}</span>
          <Pagination prevKey={getPrevPeriod(slice.period_start)}
                      disablePrev={reachedLimitSeriesMin(slice.widget.series_start, slice.period_start)}
                      nextKey={getNextPeriod(slice.period_start)}
                      widgetId={widget.id}
                      dashboardId={dashboard.id} />
        </div>

        <hr />

        {metadata.widget_form_help && <p className="page-dashboardwidgetdatagrouptimeseries__form-help">{metadata.widget_form_help}</p>}

        {isEmptySlice(slice) ?
          <CreateSliceForm formModel={slice} completedUrl={getDashboardWidgetsUrl(dashboard.id)} /> :
          <UpdateSliceForm formModel={slice} completedUrl={getDashboardWidgetsUrl(dashboard.id)} />
        }

      </div>

    </PageLayout>
  );
};

if (__DEV__) {
  DashboardWidgetDatagroupTimeSeriesPage.propTypes = {
    slice: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired
  };
}

export default DashboardWidgetDatagroupTimeSeriesPage;
