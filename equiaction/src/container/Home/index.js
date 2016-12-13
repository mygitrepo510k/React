import { connect } from 'react-redux';
import {
  getVerify,
  setCaption,
  logIn,
  logOut
} from '../../actions/Home';

import Home from
  '../../components/Home';

const stateToProps = (state) => ({
  caption: state.Home.caption,
  verify: state.Home.verify
});

const dispatchToProps = (dispatch) => ({
  getVerify: () => dispatch(getVerify()),
  logIn: () => dispatch(logIn()),
  logOut: () => dispatch(logOut())
});

export default connect(
  stateToProps,
  dispatchToProps
)(Home);