
import React from 'react';
import {connect} from 'react-redux';

import KpiWidgets from './kpiWidgets_component';


const mapStateToProps = (state, ownProps) => {

  const {widgets} = ownProps;

  // sort by pos order
  const sortedWidgets = widgets.sort((a, b) => {
    return a.pos - b.pos;
  });

  return {
    widgets: sortedWidgets
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KpiWidgets);


