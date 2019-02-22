import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {CAN_UPDATE_SLICE, CAN_UPDATE_WIDGET_DESCRIPTIONS} from './../../config';
import Preview from './../datagroupPreview';
import TrafficLight from './../widgetTrafficLight';
import UikitAlert from 'shared/components/uikit-alert';
import {isLatestSlice} from 'shared/redux/slices/slicesSelectors';
import {
  getDashboardWidgetDescriptionsUrl,
  getDashboardWidgetSliceUrl,
  getServiceDashboardUrlAnchor
} from './../../utils/formatUrl';
import {getNextPeriod} from 'shared/redux/slices/slicesSelectors';
import {getWidgetType, isKpi} from 'shared/utils/proposedApiChanges'
import {makeDeriveColor} from 'shared/utils/getColors'

const WidgetTypeSlice = (props) => {
  const {
    slice,
    actions,
    alertProps
  } = props;

  const serviceDashboardUrlAnchor = getServiceDashboardUrlAnchor(slice.dashboard.id, slice.dashboard.name, slice.widget.name);
  const editUrl = getDashboardWidgetSliceUrl(slice.dashboard.id, slice.widget.id, slice.period_start);
  const addUrl = getDashboardWidgetSliceUrl(slice.dashboard.id, slice.widget.id, getNextPeriod(slice.period_start));
  const editDescriptionsUrl = getDashboardWidgetDescriptionsUrl(slice.dashboard.id, slice.widget.id);
  const title = slice.widget.name === 'Kpis' ? 'Key performance indicators' : slice.widget.name;
  const widgetType = getWidgetType(slice.widget);
  const deriveColor = makeDeriveColor(slice.widget.pos, isKpi(widgetType));

  return (
    <article className="widget-list__item">
      {alertProps && alertProps.description && (
        <UikitAlert 
          type={alertProps.type}
          text={alertProps.description}
          className="animated fadeIn" 
        />
      )}

      <header>
        <div className="title">
          <h1 className="h5">{title}</h1>
        </div>
        <div className="meta-status">
          <TrafficLight 
            dateSeriesEnd={slice.widget.series_end} 
            datePublished={slice.widget.last_updated_at}
            type={slice.widget.type}
            units={slice.widget.units}
            size={slice.widget.size}
            period ={slice.period}
          />
        </div>
      </header>

      <div className="row">
        <div className="col-xs-12 col-lg-6">
          {slice.period_start && (
            <Preview slice={slice} getColorByRowFn={deriveColor} />
          )}
        </div>
        
        <div className="col-xs-12 col-lg-6 ctas">
          {slice.period !== 'custom' && (
            <span>
              <Link 
                to={addUrl} 
                className="UIK-button btn btn-primary"
                disabled={isLatestSlice(slice)}
                onClick={() => actions.setLastWidgetImpression({widgetId: slice.widget.id})}
              >
                Add new data
              </Link>
              
              <br />
            
              <Link to={editUrl}
                className="UIK-link"
                disabled={CAN_UPDATE_SLICE === false}
                onClick={(e) => CAN_UPDATE_SLICE === false ?
                  e.preventDefault() :
                  actions.setLastWidgetImpression({widgetId: slice.widget.id})
                }
              >
                Edit existing data
              </Link>
              
              <br />
            </span>
          )}

          {/* 
          
          <Link to={editDescriptionsUrl}
            className="UIK-link"
            disabled={CAN_UPDATE_WIDGET_DESCRIPTIONS === false}
            onClick={e => CAN_UPDATE_WIDGET_DESCRIPTIONS === false ?
              e.preventDefault() :
              e.preventDefault()
            }
          >
            Edit labels and descriptions
          </Link> 
          
          <br/>
          
          */}          

          <a 
            href={serviceDashboardUrlAnchor} 
            className="UIK-link" 
            target="blank" 
            rel="external"
          >
            View on Dashboard
          </a>
        </div>
      </div>

    </article>
  );
};

// todo - deprecate
WidgetTypeSlice.defaultProps = {
  alertProps: null
};

if (__DEV__) {
  WidgetTypeSlice.propTypes = {
    alertProps: PropTypes.shape({
      description: PropTypes.string,
      type: PropTypes.string
    }),
    actions: PropTypes.shape({
      setLastWidgetImpression: PropTypes.func.isRequired
    })
  };
}

export default WidgetTypeSlice;
