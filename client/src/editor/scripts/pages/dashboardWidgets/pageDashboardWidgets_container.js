import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectDashboard} from 'shared/redux/dashboards/dashboardsSelectors';
import {selectWidgetsByDashboard} from 'shared/redux/widgets/widgetsSelectors';
import {selectUi} from './../../redux/ui/uiSelectors';
import {
  getDenormalizedSlice,
  filterSlicesByHero,
  filterSlicesByBtl
} from 'shared/redux/slices/slicesSelectors';
import {setLastWidgetImpression} from './../../redux/ui/uiActions';
import Page from './pageDashboardWidgets_component';
import {makeFact} from 'shared/redux/facts/factSelectors';

const mapStateToProps = (state, ownProps) => {
  const dashboard = selectDashboard(state, {dashboardId: ownProps.params.dashboard_id});
  const dashboardWidgets = selectWidgetsByDashboard(state, {dashboardId: dashboard.id});
  const ui = selectUi(state);

  // get 1 most recent denormalized slices per widget
  const denormalizedSlices = dashboardWidgets.filter(widget => {
    return widget.type !== 'fact';
  }).map(widget =>
    getDenormalizedSlice(
      state,
      { widgetId: widget.id, dashboardId: dashboard.id },
    )
  );

  const heroLatestSlice = filterSlicesByHero(denormalizedSlices)[0];
  const btlLatestSlices = filterSlicesByBtl(denormalizedSlices);

  const denormalizedFacts = dashboardWidgets.filter(widget => {
    return widget.type === 'fact';
  }).map(widget => {
    return makeFact(widget, dashboard);
  });

  return {
    dashboard,
    ui,
    heroSlice: heroLatestSlice,
    btlSlices: btlLatestSlices,
    facts: denormalizedFacts,
    isAdmin: state.currentUser.admin,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({setLastWidgetImpression}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
