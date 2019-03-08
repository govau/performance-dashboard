import { connect } from 'react-redux';
import { selectDashboards } from 'shared/redux/dashboards/dashboardsSelectors';
import Page from './pageDashboards_component';

const mapStateToProps = (state, ownProps) => ({
  dashboards: selectDashboards(state),
  isAdmin: state.currentUser.admin,
});

export default connect(
  mapStateToProps,
  null,
)(Page);
