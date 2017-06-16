
import React, {PropTypes} from 'react';
import {CONTEXTUAL_STATES} from './../meta';
import {Icon} from './../iconLoader';


const UikitAlert = ({type, headingText, text}) => {
  return (
    <div className={`UIK-alert alert alert-${type}`} role="alert">
      <div className="alert__icon">
        <Icon name={type} size="31" />
      </div>
      <div className="alert__text">
        {headingText && <span className="heading-text">{headingText}</span>}
        <p>{text}</p>
      </div>
    </div>
  )
};

UikitAlert.propTypes = {
  type: PropTypes.oneOf(Object.keys(CONTEXTUAL_STATES)).isRequired,
  text: PropTypes.string.isRequired,
  headingText: PropTypes.string
};

export default UikitAlert;
