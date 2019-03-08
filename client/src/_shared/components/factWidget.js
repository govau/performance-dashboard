import React from 'react';
import PropTypes from 'prop-types';

const FactWidget = ({ description = 'No fact available.' }) => {
  return (
    <div className="fact">
      <div className="fact__inner">
        <p>{description}</p>
      </div>
    </div>
  );
};

FactWidget.propTypes = {
  description: PropTypes.string
};

export default FactWidget;
