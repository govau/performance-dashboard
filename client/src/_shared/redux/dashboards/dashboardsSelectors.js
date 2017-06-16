
export const selectDashboards = (state) => {
  return state.dashboards;
};

export const selectDashboard = (state, {dashboardId}) => {
  return state.dashboards.find(d => d.id == dashboardId); // ==
};
