import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Icon } from 'shared/components/iconLoader';
import { getHumanisedMonth } from 'shared/utils/formatDates';
import { getDashboardWidgetSliceUrl } from './../utils/formatUrl';
import { isPeriodInTheFuture } from 'shared/redux/slices/slicesSelectors';

const Pagination = ({
  prevKey,
  nextKey,
  dashboardId,
  widgetId,
  disablePrev,
}) => {
  const disableNext = isPeriodInTheFuture(nextKey);
  return (
    <div>
      <Link
        to={getDashboardWidgetSliceUrl(dashboardId, widgetId, prevKey)}
        className="UIK-button btn btn-primary paginate-left"
        disabled={disablePrev}
        onClick={e => {
          if (disablePrev) return e.preventDefault();
        }}
      >
        <Icon name="chevron-left" />
        <span>{getHumanisedMonth(prevKey)}</span>
      </Link>
      <Link
        to={getDashboardWidgetSliceUrl(dashboardId, widgetId, nextKey)}
        className="UIK-button btn btn-primary paginate-right"
        disabled={disableNext}
        onClick={e => {
          if (disableNext) return e.preventDefault();
        }}
      >
        <span>{getHumanisedMonth(nextKey)}</span>
        <Icon name="chevron-right" />
      </Link>
    </div>
  );
};

Pagination.propTypes = {
  prevKey: PropTypes.string.isRequired,
  nextKey: PropTypes.string.isRequired,
  dashboardId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  widgetId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Pagination;
