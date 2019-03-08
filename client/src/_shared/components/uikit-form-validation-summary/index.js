// todo - errors should be links to fields
// todo - provide summary messages other than the danger type

import React, { PropTypes } from 'react';

import { Icon } from './../iconLoader';

const Summary = ({ errors, headingText }) => {
  const getHeadingText = () => {
    const len = errors.length;
    if (len === 1) {
      return 'There was an error found in the information you submitted';
    }
    return `There were ${len} errors found in the information you submitted`;
  };
  return (
    <div
      className={`UIK-form-validation-summary UIK-alert alert alert-danger`}
      role="alert"
    >
      <div className="alert__icon">
        <Icon name="error" size="31" />
      </div>
      <div className="alert__text">
        <span className="heading-text h6">
          {headingText || getHeadingText()}
        </span>
        <ol
          className={`list-ordered ${
            errors.length === 1 ? 'has-singular' : ''
          }`}
        >
          {errors.map((error, i) => {
            return <li key={i}>{error}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

Summary.defaultProps = {
  type: 'error',
};

Summary.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Summary;
