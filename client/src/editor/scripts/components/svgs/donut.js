
import React from 'react';
import PropTypes from 'prop-types';


const Donut = ({strokeColor, innerColor, radius = 11, strokeWidth = 4}) => {

  const dimension = radius*2;
  const fauxRadius = radius - strokeWidth;  // because strokes the outside of path

  return (
    <svg width={dimension} height={dimension} viewBox={`0 0 ${dimension} ${dimension}`}>
      <circle r={fauxRadius} cx={radius} cy={radius} fill={innerColor} stroke={strokeColor} strokeWidth={strokeWidth} />
    </svg>
  );
};

if (__DEV__) {
  Donut.propTypes = {
    strokeColor: PropTypes.string.isRequired,
    innerColor: PropTypes.string,
    radius: PropTypes.number,
    strokeWidth: PropTypes.number,
  };
}

export default Donut;
