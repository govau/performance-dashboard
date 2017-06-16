

export const selectWidget = (state, {widgetId}) => {
  return state.widgets.find(d => d.id == widgetId);   // ==
};

export const selectWidgetsByDashboard = (state, {dashboardId}) => {
  return state.widgets.filter(w => w.dashboard_id == dashboardId); // ==
};

