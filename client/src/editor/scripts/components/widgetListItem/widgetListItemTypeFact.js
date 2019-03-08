import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { CAN_UPDATE_FACT } from './../../config';
import { humanisedShortDate } from 'shared/utils/formatDates';
import {
  getDashboardWidgetFactUrl,
  getServiceDashboardUrl
} from './../../utils/formatUrl';
import UikitAlert from 'shared/components/uikit-alert';

const WidgetTypeFact = props => {
  const { fact, actions, alertProps } = props;
  const { dashboard, widget } = fact;
  const description = widget.description;
  const datePublished = widget.last_updated_at;
  const title = widget.name;
  const serviceDashboardUrl = getServiceDashboardUrl(
    dashboard.id,
    dashboard.name
  );
  const editUrl = getDashboardWidgetFactUrl(dashboard.id, widget.id);

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
          <div className="traffic-light">
            <span className="traffic-light__bottom">
              <span className="traffic-light__bottom__left">
                Published date: <time>{humanisedShortDate(datePublished)}</time>
              </span>
            </span>
          </div>
        </div>
      </header>

      <p>{description}</p>

      <div className="row">
        <div className="col-xs-12 col-lg-6 ctas">
          <Link
            to={editUrl}
            className="UIK-button btn btn-primary"
            disabled={CAN_UPDATE_FACT === false}
            onClick={e =>
              CAN_UPDATE_FACT === false
                ? e.preventDefault()
                : actions.setLastWidgetImpression({ widgetId: widget.id })
            }
          >
            Edit fact
          </Link>
          <br />

          <a
            href={serviceDashboardUrl}
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
WidgetTypeFact.defaultProps = {
  alertProps: null
};

WidgetTypeFact.propTypes = {
  alertProps: PropTypes.shape({
    description: PropTypes.string,
    type: PropTypes.string
  })
};

export default WidgetTypeFact;
