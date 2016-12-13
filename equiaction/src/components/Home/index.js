import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PremiumHorse from '../PremiumHorse';
import styles from './style';
import Tabs from 'react-native-tabs';
import Swiper from 'react-native-swiper';
import { images, metrics } from '../../theme';



class Home extends Component {

  componentWillMount() {
  	this.props.getVerify();
  }

render() {
return(
  <View style={{flex:1,}}>
  <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
    <View style={styles.swiper}>
		<Swiper autoplay={true} height={250}>
		  <View>
		    <Image style={styles.swiperImage} source={images.homeBaner} />
		  </View>
		  <View>
		    <Image style={styles.swiperImage} source={images.homeBaner} />
		  </View>
		  <View>
		    <Image style={styles.swiperImage} source={images.homeBaner} />
		  </View>
		</Swiper>
	</View>
	<View style={styles.signInView}>
	  <TouchableHighlight style={styles.signInBtn}
	   onPress={() => {
	    if (this.props.verify == true)
	    	this.props.logOut();
	    else
	    	this.props.logIn();
	   }}>
	    <View style={styles.signInBtnView}>
	    <Text style={styles.signInCaption}>{this.props.caption}</Text>
	    </View>
	  </TouchableHighlight>
	</View>
	<View style={{marginLeft: 10, marginRight: 10,}}>
		<View style={{
		 flexDirection: 'row', 
		 borderBottomWidth: 1, 
		 borderBottomColor: '#D7D7D7',
		 marginBottom: 5,
		 justifyContent: 'center',
		 height: 40,
		 alignItems: 'center'}}>
		  <View style={{flex: 5, width:50, height: 10}}>
		  <Text>Premium horses</Text>
		  </View>
		  <View style={{flex: 5, width:50, height: 10, alignItems: 'flex-end', 
		  padding: 0}}>
		  <Text>All horses</Text>
		  </View>
		</View>
		<View style={{flexDirection: 'column'}}>
		  <PremiumHorse margin={10} />
		  <PremiumHorse margin={10} />
		  <PremiumHorse margin={10} />
		  <PremiumHorse margin={10} />
		  <PremiumHorse margin={10} />
		</View>
	</View>
	<View style={styles.viewCatalogueView}>
	  <TouchableHighlight style={styles.viewCatalogueBtn}>
	    <View>
	      <Text style={styles.viewCatalogueCaption}>VIEW CATALOGUE</Text>
	    </View>
	  </TouchableHighlight>
	</View>
	</ScrollView>
	</View>

);
}
}

export default Home;