import React from 'react';
import PropTypes from 'prop-types';
import BetaBanner from '../BetaBanner/BetaBanner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PageWrapper = props => (
  <div>
    <a href="#skiptocontent" tabIndex="1" className="skip">Skip to content</a>

    <BetaBanner />

    <Header
      isHighContrastMode={props.isHighContrastMode}
      setHighContrastMode={props.setHighContrastMode}
    />

    <main role="main" id="skiptocontent">
      {props.children}
    </main>

    <Footer />
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  isHighContrastMode: PropTypes.bool,
  setHighContrastMode: PropTypes.func,
};

export default PageWrapper;
