
import React from 'react';
import {
  HeroWidget,
  LineWidget,
  ColumnWidget,
  DonutWidget,
  StackedColumnWidget,
  SparklineWidget,
} from '@gov.au/datavizkit';

import FactWidget from 'shared/components/factWidget';


const WIDGET_TYPES = {
  hero: {component: HeroWidget},
  line: {component: LineWidget},
  column: {component: ColumnWidget},
  stackedColumn: {component: StackedColumnWidget},
  donut: {component: DonutWidget},
  sparkline: {component: SparklineWidget},
  fact: {component: FactWidget},
};

const BtlWidget = (props) => {

  const {_type} = props;

  if (  // whitelist
    _type !== 'hero' &&
    _type !== 'donut' &&
    _type !== 'column' &&
    _type !== 'stackedColumn' &&
    _type !== 'line' &&
    _type !== 'sparkline' &&
    _type !== 'fact'
  ) {
    if (__DEV__) {
      return null;
    } else {
      throw new Error(`Widget type: "${_type}" is not yet supported.`)
    }
  }

  const Widget = WIDGET_TYPES[_type].component;

  if (_type === 'fact') {
    return (
      <div className="D_widget-card D_widget widget">{/* todo - deprecate these classes */}
        <Widget description={props.chartDescription} />
      </div>
    )
  }

  if (_type === 'hero') {
    return <Widget {...props} />
  }

  // todo - rename these props like those passes in
  return (
    <div className={`D_widget-card D_widget widget`}>{/* todo - deprecate these classes */}
      <Widget {...props} />
    </div>
  );

};

export default BtlWidget;
