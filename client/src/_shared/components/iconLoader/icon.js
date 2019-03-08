import React, { PropTypes } from 'react';

import ICONS from './_iconData';

const Icon = ({ name, size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      className={`icon icon-${name}`}
      fill="currentColor"
    >
      <title>${name}</title>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(ICONS.map(i => i.name)).isRequired,
};

export default Icon;
