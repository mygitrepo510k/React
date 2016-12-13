
import {
  StyleSheet
} from 'react-native';

import {
  metrics
} from '../../theme';

export default StyleSheet.create({
  container: {
  	flex: 1,
    marginTop: metrics.navBarHeight,
    flexDirection: 'column',

  },
  btnView: {
  	flexDirection: 'row',
  	borderWidth: 1,
  	borderColor: 'blue',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  loginBtn: {
    height: metrics.screenWidth / 22 * 2,
    width: metrics.screenWidth / 21 * 9,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  signupBtn: {
    height: metrics.screenWidth / 22 * 2,
    width: metrics.screenWidth / 21 * 9,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
});