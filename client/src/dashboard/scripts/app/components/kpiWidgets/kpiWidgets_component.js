
import React from 'react';

import KpiWidget from './kpiWidget';


const KpiWidgets = ({
  widgets,
}) => {
  return (
    <div className="kpi-widgets">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="h3-light">Current Performance</h2>
        </div>
      </div>
      <div className="row">
        {widgets.map((w, idx) => {
          return (
            <div key={idx} className="col-xs-12 col-lg-3">
              <KpiWidget widget={w} />
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default KpiWidgets;
