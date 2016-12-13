
import {
  StyleSheet
} from 'react-native';

import {
  metrics, colors
} from '../../theme';

export default StyleSheet.create({
  container: {
  	flex: 1,
    marginTop: metrics.navBarHeight,
    marginBottom: metrics.navBarHeight-15,
    flexDirection: 'column',
    backgroundColor: '#F1F5F6'
  },
  swiper: {
  	height: 250,
  	backgroundColor: 'transparent'
  },
  swiperImage: {
  	resizeMode: 'cover',
  	flex: 1,
  	width: metrics.screenWidth,
  	height: 250
  },
  signInView: {
 	justifyContent: 'center',
  	alignItems: 'center',
  	height: 100,
  },
  signInBtn: {
  	margin: 5,
    height: 35,
    width: 110,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInCaption: {
  	color: 'white'
  },
  viewCatalogueView: {
 	justifyContent: 'center',
  	alignItems: 'center',
  	height: 100,
  },
  viewCatalogueBtn: {
  	margin: 5,
    height: 50,
    width: metrics.screenWidth / 375 * 344,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCatalogueCaption: {
  	color: 'white'
  },
  primiumView: {
  	flex: 1,
  	flexDirection: 'column',
  	marginTop: 10,
  	marginLeft: 10,
  	marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primiumViewHeader: {
  	flex: 1,
  	flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeft: {
  	alignItems: 'flex-start',
  	backgroundColor: 'red',
  	width: 50,
  	height: 50
  },
  headerRight: {
  	alignItems: 'flex-end',
  	width: 50
  },
  primiumViewList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  horseImage: {
  	width: 40
  },
  horseInfo: {
  	width: 50,
  },
  decorationBar: {
  	width: 10
  }
});