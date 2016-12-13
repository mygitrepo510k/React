
import {
  StyleSheet
} from 'react-native';

import {
  metrics
} from '../../../theme';

export default StyleSheet.create({
  container: {
    borderColor: '#D8D8D8', 
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5,
	width: metrics.screenWidth / 375 * 350, 
	padding: 5, 
	backgroundColor: 'white'
  },
  cell: {
  	flexDirection: 'row',
  	paddingTop: 5,
  	paddingBottom: 5
  },
  checkIcon: {
  	flex: 1, 
  	justifyContent: 'flex-start', 
  	alignItems: 'center'
  },
  termContent: {
  	flex: 9, 
  	justifyContent: 'flex-start', 
  	alignItems: 'flex-start'
  },
  termContentText: {
  	fontSize: 10
  },
  btnView: {
  	justifyContent: 'center', 
  	alignItems: 'center',
  },
  checkBtn:{ 
  	borderColor: '#D8D8D8', 
  	borderWidth: 1,
    borderBottomLeftRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderBottomRightRadius: 5, 
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5,
    height: metrics.screenWidth / 375 * 50,
	width: metrics.screenWidth / 375 * 320, 
}
});