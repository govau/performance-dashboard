
import React, {Component} from 'react';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import jump from 'jump.js';

import {NullDataLayerPattern} from '@gov.au/datavizkit';

import IconLoader from 'shared/components/iconLoader';
import Footer from 'shared/components/footer';
import {trimLastUrlSegement} from './../utils/formatUrl';


class Layout extends Component {

  componentDidUpdate(prevProps) {
    let route = this.props.location.pathname;
    let prevRoute = prevProps.location.pathname;

    const shouldUpdateScrollPosition = () => {
      // Exclusions:
      if (/^\/dashboards\/\d+\/widgets\/\d+\/(slice|fact)/.test(route)) {
        // if segments before are identical assume navigating in same type of route
        return trimLastUrlSegement(route) !== trimLastUrlSegement(prevRoute);
      }
      return true;
    };
    if (shouldUpdateScrollPosition()) {
      jump(document.body, {
        duration: -100
      });
    }
  }

  render() {
    return (
      <div className="app-scene">
        <IconLoader />
        <NullDataLayerPattern />
        <TransitionGroup
          transitionLeave={false}
          transitionName={{
            enter:'fadeIn',
            leave:'fadeOut'
          }}
          transitionEnterTimeout={400}  // total time
          transitionLeaveTimeout={200}  // total time
          component="div"
          className="app-page-parent">
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default Layout;
