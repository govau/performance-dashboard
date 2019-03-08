import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Breadcrumbs = ({ paths }) => {
  let activePath = paths.pop();
  return (
    <div className="breadcrumbs" aria-label="breadcrumb">
      <ol>
        {paths.map((c, idx) => (
          <li key={idx}>
            <Link to={c.path} className="UIK-link">
              {c.name}
            </Link>
          </li>
        ))}
        <li>{activePath.name}</li>
      </ol>
    </div>
  );
};

Breadcrumbs.defaultProps = {
  paths: [{ path: '/', name: 'Home' }],
};

Breadcrumbs.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Breadcrumbs;
