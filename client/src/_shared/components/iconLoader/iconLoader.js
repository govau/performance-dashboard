import React from 'react';

import ICONS from './_iconData';

/**
 * Load Icons
 *
 * @usage
 * Get svgs from anywhere and whack em in. Make sure for now, path has property
 * fill=currentColor
 *
 * For debugging, be sure to enable "Show user agent shadow DOM" in Chrome.
 *
 * todo - make fill.currentColor css in the js
 * todo - load on props in
 *
 */

const IconLoader = () => {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      className="invisible"
    >
      <defs>
        {ICONS.map((data, idx) => {
          return (
            <svg
              key={idx}
              id={`icon-${data.name}`}
              viewBox={data.viewBox}
              width="100%"
              height="100%"
            >
              <title>{data.name}</title>
              {data.html}
            </svg>
          );
        })}
      </defs>
    </svg>
  );
};

export default IconLoader;
