import React from 'react';

const Footer = () => (
  <footer role="contentinfo">
    <div className="govau-footer">
      <div className="container">
        <div className="govau-footer__container">
          <div className="govau-footer__container__logo">
            <img
              src="/images/coat-of-arms.png?c4be90534c4a1531dc37d580dcbb6074"
               width="185"
               height="135"
               alt="Commonwealth of Australia Coat of Arms Logo"
            />
          </div>

          <div className="govau-footer__container__utils">
            <div className="line-1">
              <ul className="list-unstyled govau-footer__links-list">
                <li><a href="/editor" className="UIK-link">Editor sign in</a></li>
                <li><a href="https://www.dto.gov.au/standard/" rel="external" className="UIK-link" target="_blank">Digital Service Standard</a></li>
                <li><a href="https://www.dto.gov.au/standard/11-measure-performance/" rel="external" className="UIK-link" target="_blank">About Performance Measurement</a></li>
                <li><a href="/api" className="UIK-link">Dashboard API</a></li>
                <li><a href="/copyright" className="UIK-link">Copyright</a></li>
                <li><a href="https://www.dto.gov.au/blog/" rel="external" className="UIK-link" target="_blank">DTA Blog</a></li>
                <li><a href="/feedback" className="UIK-link">Please give feedback</a></li>
              </ul>
            </div>

            <div className="line-2">
              <small>© Commonwealth of Australia</small>
              <p className="small">This work is licensed under a Creative Commons Attribution 3.0 International <a href="https://creativecommons.org/licenses/by/3.0/au/deed.en" className="UIK-link " rel="external">License</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
