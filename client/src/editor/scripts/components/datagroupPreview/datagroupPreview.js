import React from 'react';
import PropTypes from 'prop-types';
import LegendDot from './../svgs/legendDot';
import { getHumanisedUnits } from 'shared/redux/datasets/datasetsHelper';
import { getHumanisedVeryShortDate } from 'shared/utils/formatDates';
import { formatCurrency2dp } from './../../utils/formatCurrency';
import { formatPercentile2dp } from './../../utils/formatPercentile';

/**
 * Format and decorate value provided for the View
 * @param value {Number|String<Number>|null}
 * @param units {String}
 * @returns {String}
 */
export const formatValue = (value, units) => {
  if (typeof value === 'undefined') {
    throw Error(
      'Group has no datapoint or value is not provided. Something is very wrong.',
    );
  }

  if (value === null) {
    return 'No data';
  }

  let formattedValue;
  let formattedUnits = getHumanisedUnits(units);
  let unitsStr = formattedUnits ? ` ${formattedUnits}` : '';
  if (units === '$') {
    formattedValue = formatCurrency2dp(value) + unitsStr;
  } else if (units === '%') {
    formattedValue = formatPercentile2dp(value) + unitsStr;
  } else {
    formattedValue = value + unitsStr;
  }
  return formattedValue;
};

const Preview = ({ slice, getColorByRowFn }) => {
  return (
    <div className="preview">
      <p className="most-recent-text strong">
        {slice.period === 'custom' && slice.row_label}

        {slice.period !== 'custom' &&
          getHumanisedVeryShortDate(slice.period_start)}
      </p>
      {slice.groups.map((group, idx) => {
        return (
          <div key={idx} className="preview-table">
            <span className="key">
              <LegendDot color={getColorByRowFn(idx)} />
            </span>

            {!!group.dataset && (
              <span className="description">{group.dataset.label}</span>
            )}

            {!!group.dataset && (
              <span className="value">
                {formatValue(
                  typeof group.value !== 'undefined' ? group.value : null,
                  group.dataset.units,
                )}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

Preview.propTypes = {
  slice: PropTypes.object.isRequired,
  getColorByRowFn: PropTypes.func.isRequired,
};

export default Preview;
