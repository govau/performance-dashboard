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
        <div className="widget__data sr-only--and-no-js">
          {!!props.datasets.length && props.datasets.map(dataset => (
            <table key={dataset.id} className="data-table table">
              <caption>
                {`${props.name || props.id} ${props.units_to_s}`}
              </caption>

              <tbody>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Value</th>
                </tr>

                {!!dataset.data.length && dataset.data.map(data => (
                  <tr key={data.id}>
                    <td scope="row">{data.label}</td>
                    <td scope="row">{`${props.prefix}${data.value || ''}${props.suffix}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>

      </div>
    </div>
  );
};

HomePageWidget.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  has_current_data: PropTypes.bool,
  name_slug: PropTypes.string,
  units_to_s: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  datasets: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number,
    })),
  })),
};

export default HomePageWidget;
