import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HomePageWidget = props => {
  const wrapperClassName = classnames(
    'D1_kpi-group',
    {
      'has-data': props.has_current_data,
      'has-no-data': !props.has_current_data,
    }
  );

  const widgetClassName = classnames(
    'widget',
    props.name_slug,
    props.style,
  );

  const titleClassName = classnames(
    'widget__title',
    props.name_slug,
  );

  const innerClassName = classnames(
    'widget__inner',
    props.name_slug,
  );

  return (
    <div
      className={wrapperClassName}
      data-id={props.id}
    >
      <div className={widgetClassName}>
        <div className={titleClassName}>
          <h4>{props.name}</h4>
        </div>

        <div
          className={innerClassName}
          data-data={JSON.stringify(props)}
          aria-hidden="true"
        />
        {/*// TODO (davidg): data table thing*/}
      </div>
    </div>
  );
};

HomePageWidget.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  has_current_data: PropTypes.bool,
  name_slug: PropTypes.string,
};

export default HomePageWidget;
