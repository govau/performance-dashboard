
import React, {PropTypes} from 'react';

import imageEditorLogo from './editor-logo.svg';
import {Icon} from './../../components/iconLoader';


const GovauHeader = ({isLoggedIn, userEmail, signInUrl, signOutUrl}) => {
  return (
    <header className="govau-header">
      <div className="container">
        <div className="govau-header__container">

          <div className="govau-header__container__logo">
            <a href="/editor">
              <img src={imageEditorLogo} width="240" height="54" alt="Performance Dashboards - Editor" />
            </a>
          </div>

          <div className="govau-header__container__utils">
            {isLoggedIn && <span className="block-user-email">
              <span className="user-email"><Icon name="avatar" size="16" />{userEmail}</span></span>}
            <a href={isLoggedIn ? signOutUrl : signInUrl} className="UIK-button btn sign-out">{isLoggedIn ? 'Sign out' : 'Sign in'}</a>
          </div>

        </div>
      </div>
    </header>
  )
};

GovauHeader.DefaultTypes = {
  isLoggedIn: false,
  signInUrl: '/sign-in',
  signOutUrl: '/sign-out',
};

GovauHeader.PropTypes = {
  isLoggedIn: PropTypes.bool,
  userEmail: PropTypes.string,
  signInUrl: PropTypes.string,
  signOutUrl: PropTypes.string,
};

export default GovauHeader;

