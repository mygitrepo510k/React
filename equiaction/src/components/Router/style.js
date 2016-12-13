
import {
  StyleSheet
} from 'react-native';

import {
  metrics,
  images
} from '../../theme';

export default StyleSheet.create({
  container: {
  	flex: 1,
    marginTop: metrics.navBarHeight,
    backgroundColor: 'blue'
  },
  navBar: {
  	flex: 1, 
  	flexDirection: 'row', 
  	alignItems: 'center', 
  	justifyContent: 'center'
  },
  leftBtn: {
    width: 100,
    height: 37,
    position: 'absolute',
    right: 2,
    padding: 8,
    marginLeft: metrics.screenWidth - 50,
  },
  originalBtn: {
    width: 100,
    height: 37,
    position: 'absolute',
    right: 2,
    padding: 8,
    marginLeft: 0
  },
  tabIconView: {
  	alignItems: 'center',
  	justifyContent: 'center'
  }
});
