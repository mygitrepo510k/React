import { connect } from 'react-redux';

import change from '../../action/changeSportunityFilterKind';
import SportunityFilterKindTabItem from
  '../../presentational/SportunityFilterKindTabItem';

const stateToProps = (state) => ({
  selectedKind: state.sportunityList.selectedKind
});

const dispatchToProps = (dispatch) => ({
  changeKind: (kind) => dispatch(change(kind))
});

export default connect(
  stateToProps,
  dispatchToProps
)(SportunityFilterKindTabItem);
