import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({ color, radius = 7 }) => {
  const dimension = radius * 2;

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={`0 0 ${dimension} ${dimension}`}
    >
      <circle r={radius} cx={radius} cy={radius} fill={color} />
    </svg>
  );
};

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  radius: PropTypes.number,
};

export default Dot;
