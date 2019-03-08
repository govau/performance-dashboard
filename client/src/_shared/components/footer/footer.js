import React from 'react';
import imageCoatOfArms from './coat-of-arms.png';

const Footer = () => {
  return (
    <footer className="main__footer">
      <div className="govau-footer">
        <div className="container">
          <div className="govau-footer__container">
            <div className="govau-footer__container__logo">
              <img
                src={imageCoatOfArms}
                width="185"
                height="135"
                alt="Commonwealth of Australia Coat of Arms Logo"
              />
            </div>

            <div className="govau-footer__container__utils">
              <div className="line-1">
                <a
                  href="mailto:performance-dashboard@digital.gov.au"
                  rel="external"
                  className="UIK-button btn btn-secondary report-an-issue"
                >
                  Report an issue
                </a>
              </div>
              <div className="line-2">
                <small>© Commonwealth of Australia</small>
                <p className="small">
                  This work is licensed under a Creative Commons Attribution 3.0
                  International{' '}
                  <a
                    href="https://creativecommons.org/licenses/by/3.0/au/deed.en"
                    className="UIK-link "
                    rel="external"
                  >
                    License
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
