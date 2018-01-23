import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header className="main__header" role="banner">
    <div className="govau-header ">
      <div className="container">
        <div className="govau-header__container">
          <div className="govau-header__container__logo">
            <a href="/">
              <img
                src="/images/performance-dashboard-logo.svg?87b2f2845055654510e3c36ef2cf8a9e"
                width="394"
                height="29"
                alt="Performance Dashboards"
              />
            </a>
          </div>

          {!!props.onToggleHighContrast && (
            <div className="govau-header__container__utils">
              <div className="toggle-switch">
                <label className="switch-light switch-material">
                  <strong className="switch-text">High contrast mode</strong>
                  <input
                    type="checkbox"
                    id="high-contrast-switch"
                    checked={props.isHighContrastMode}
                    onChange={(e) => {
                      props.onToggleHighContrast(e.target.checked);
                    }}
                  />
                  {/*The below empty elements are needed for the toggle switch CSS*/}
                  <span>
                  <span />
                  <span />
                  <a />
                </span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  isHighContrastMode: PropTypes.bool,
  onToggleHighContrast: PropTypes.func,
};

export default Header;
