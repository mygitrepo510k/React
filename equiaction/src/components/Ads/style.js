
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
    marginBottom: metrics.navBarHeight-15,
    backgroundColor: '#F1F5F6'
  },
  mainView: {
  	flex: 1, 
  	alignItems: 'center',
  },
  progressView: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 50
  },
  progressLeft: {
    flex: 185
  },
  progressCenter: {
    flex: 1, 
    height: 18, 
    width: 18, 
    backgroundColor: '#419BF9',
    borderBottomLeftRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderTopRightRadius: 20, 
    borderBottomRightRadius: 20, 
    borderTopLeftRadius: 20
  },
  progCenterText: {
    color: 'white'
  },
  progressRight: {
    flex: 185, 
    height:1, 
    borderWidth: 1, 
    borderColor: '#419BF9'
  },
  progressText: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10
  },
  packageView: {
    paddingLeft: 15, 
    paddingRight: 15, 
    borderColor: '#D8D8D8', 
    borderRadius: 5, 
    width: metrics.screenWidth / 375 * 350,
    height: metrics.screenWidth / 375 * 80, 
    justifyContent: 'center', 
    alignItems:'center', 
    flexDirection: 'row', 
    marginTop: 5 
  },
  packageText: {
    flex: 2, 
    backgroundColor: 'transparent',
  },
  packageCaption: {
    fontSize: 20, 
    fontWeight: 'bold'
  },
  packagePrice: {
    flex: 5, 
    alignItems: 'flex-end', 
    backgroundColor: 'transparent'
  },
  packageCheck: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: 'transparent'
  },
  splitter: {
    width: metrics.screenWidth, 
    height: 1, 
    borderColor: '#D8D8D8', 
    borderWidth: 1,
    marginTop: 20, 
    marginBottom: 5
  },
  nextBtnView: {
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    width: metrics.screenWidth, padding: 15
  },
  nextInactiveBtn: {
    height: metrics.screenWidth / 375 * 35, 
    width: metrics.screenWidth / 375 * 90,
    backgroundColor: '#D8D8D8',
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  nextActiveBtn: {
    height: metrics.screenWidth / 375 * 35, 
    width: metrics.screenWidth / 375 * 90,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  inactiveBtnText: {
    color: '#9B9B9B'
  },
  activeBtnText: {
    color: 'white'
  },
  waitingView: {
    zIndex: 10, 
    width: metrics.screenWidth, 
    height: metrics.screenHeight - metrics.navBarHeight + 15, 
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5
  }
});