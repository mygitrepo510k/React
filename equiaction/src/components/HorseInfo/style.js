
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
  progressHeader: {
  	flexDirection: 'row', 
  	justifyContent: 'center', 
  	alignItems: 'center', 
  	height: 50
  },
  leftProgHeader: {
  	flex: 185, 
  	height:1, 
  	borderWidth: 1, 
  	borderColor: '#419BF9'
  },
  centerProgHeader: {
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
  progCircle: {color: 'white'},
  rightProgHeader: {
  	flex: 185, 
  	height:1, 
  	borderWidth: 1, 
  	borderColor: '#419BF9'
  },
  headerTitle: {
  	justifyContent: 'center', 
  	alignItems: 'center', 
  	marginBottom: 10
  },
  subTitle: {
  	flexDirection: 'row', 
  	justifyContent: 'center', 
  	alignItems: 'center', 
  	height: 50
  },
  leftSubT: {
  	flex: 115, 
  	marginLeft: 10
  },
  rightSubT: {
  	flex: 260, 
  	height:1, 
  	borderWidth: 1, 
  	borderColor: 'black'
  },
  mainForm: {
  	flex: 1, 
  	marginLeft: 10, 
  	marginRight: 10
  },
  labelView: {
  	fontWeight: 'bold', 
  	marginBottom: 5
  },
  inputView: {
  	height: 40, 
  	width: metrics.screenWidth / 375 * 344, 
  	backgroundColor: 'white',
  	marginBottom: 5 
  },
  inputTI: {
  	flex:1, 
  	color: 'black'
  },
  btnView: {
  	justifyContent: 'flex-end', 
  	alignItems: 'flex-end', 
  	width: metrics.screenWidth, 
  	padding: 15
  },
  btn: {
  	height: metrics.screenWidth / 375 * 35, 
  	width: metrics.screenWidth / 375 * 90,
    backgroundColor: '#D8D8D8', 
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  activeBtn: {
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

});