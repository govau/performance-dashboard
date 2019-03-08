import { selectWidget } from './../widgets/widgetsSelectors';
import { WidgetTypeSlice } from '../../../editor/scripts/components/widgetListItem';

export const selectDataset = (state, { datasetId }) => {
  return state.datasets.find(d => d.id === datasetId);
};

export const selectDatasets = (state, { datasetIds }) => {
  return state.datasets.filter(d => datasetIds.includes(d.id));
};

export const selectDatasetsByWidget = (state, { widgetId }) => {
  const widget = selectWidget(state, { widgetId });

  return state.datasets.filter(d => {
    return widget.datasets.includes(d.id);
  });
};
