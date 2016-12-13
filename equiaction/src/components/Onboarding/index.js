import React, { Component } from 'react';

import {
  Text,
  View, 
  Image,
  TouchableHighlight
} from 'react-native';

import styles from './style';
import { images, metrics } from '../../theme';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

const Onboarding = () => (
  <View style={styles.container}>
    <View style={styles.swiper}>
		<Swiper autoplay={true} height={metrics.screenHeight / 7 * 5}>
		  <View>
		    <Image style={styles.swiperImage} source={images.slider} />
		  </View>
		  <View>
		    <Image style={styles.swiperImage} source={images.slider} />
		  </View>
		  <View>
		    <Image style={styles.swiperImage} source={images.slider} />
		  </View>
		</Swiper>
	</View>
	<View style={styles.description}>
	  <View>
	    <Text>Hold your horse!</Text>
	  </View>
	  <View>
	    <Text style={styles.description2}>Never ever think of giving up.  
	    Winners never quit and quitters never win.</Text>
	  </View>
	</View>
	<View style={styles.getStarted}>
      <TouchableHighlight style={styles.getStartedBtn} onPress={Actions.main}>
        <Text style={styles.getStartedCaption}>Get Started</Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default Onboarding;