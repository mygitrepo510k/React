
import {
  StyleSheet
} from 'react-native';

import {
  metrics,
  colors
} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  swiper: {
  	flex: 5,
  	backgroundColor: 'transparent'
  },
  swiperView: {
  	flex: 1,
  },
  swiperImage: {
  	resizeMode: 'cover',
  	flex: 1,
  	width: metrics.screenWidth,
  	height: metrics.screenHeight / 7 * 5
  },
  description: {
    flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  description2: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  	textAlign: 'center',
  	color: colors.lightGrey,
  },
  getStarted: {
    flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  getStartedBtn: {
  	margin: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: metrics.screenWidth / 14 * 2,
    width: metrics.screenWidth / 10 * 8,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',

  },
  getStartedCaption: {
  	color: 'white'
  }
});