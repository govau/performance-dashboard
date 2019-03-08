import React from 'react';
import classnames from 'classnames';
import BtlWidget from './btlWidget';

const sortWidgetsByPosition = widgets => {
  if (widgets && widgets.length) {
    return widgets.sort((a, b) => {
      // sort numerically by the first slice
      return a.pos - b.pos;
    });
  }
  return widgets;
};

const groupWidgetsToColumns = (widgets, viewport) => {
  let colsNum;

  if (viewport === 'sm') {
    colsNum = 1;
  } else if (viewport === 'md') {
    colsNum = 2;
  } else if (viewport === 'lg') {
    colsNum = 3;
  }

  const len = widgets.length;
  let res = {};
  let counter = 0;
  const size = colsNum;

  const placeItem = (item, idx, len) => {
    if (counter < size) {
      if (res[counter]) {
        // if this is the last item and uneven row in odd number of cols
        // and there is only a single item in the row
        if (counter === 0 && idx + 1 === len && size === 3) {
          res[1].push(item);
        } else {
          res[counter].push(item);
        }
      } else {
        res[counter] = [item];
      }
      counter++;
    } else {
      counter = 0;
      placeItem(item, idx, len);
    }
  };

  widgets.forEach((item, idx) => {
    placeItem(item, idx, len);
  });

  return res;
};

const BtlWidgets = ({ dashboard, widgets, ui }) => {
  const { viewport } = ui;
  const sortedWidgets = sortWidgetsByPosition(widgets);
  const columnsOfWidgets = groupWidgetsToColumns(sortedWidgets, viewport);

  return (
    <div className="row no-gutters">
      {Object.keys(columnsOfWidgets).map((cIdx, idx1) => {
        return (
          <div
            key={idx1}
            className={classnames({
              'col-xs-12': viewport === 'sm',
              'col-xs-12 col-md-6': viewport === 'md',
              'col-xs-12 col-md-6 col-lg-4':
                viewport === 'lg' || typeof viewport === 'undefined',
            })}
          >
            {columnsOfWidgets[cIdx].map((w, idx2) => {
              return <BtlWidget key={idx2} widget={w} dashboard={dashboard} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BtlWidgets;
