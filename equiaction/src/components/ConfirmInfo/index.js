import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput
} from 'react-native';

import styles from './style';
import { images, metrics } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import PremiumHorse from '../PremiumHorse';
const Ads = () => (
  <ScrollView style={styles.container}>
  	<View style={{flex: 1, alignItems: 'center',}}>
	    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50}}>
	      <View style={{flex: 185, height:1, borderWidth: 1, borderColor: '#419BF9'}}>
	      </View>
	      <View style={{flex: 1, height: 18, width: 18, backgroundColor: '#419BF9',
	      borderBottomLeftRadius: 20, justifyContent: 'center', alignItems: 'center',
		      borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20}}>
	        <Text style={{color: 'white'}}>4</Text>
	      </View>
	      <View style={{flex: 185, height:1}}>
	      </View>
	    </View>
	    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
	      <Text>Confirm</Text>
	    </View>
	    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 10, marginLeft: 10}}>
	      <Text style={{fontWeight: 'bold', marginBottom: 5}}>Thank you add horse success!</Text>
	      <Text style={{marginBottom: 5, color: '#818485'}}>
	      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci impedit sint id est illo, magni, necessitatibus debitis, totam quod reiciendis quisquam laborum veritatis earum corrupti. Odio perferendis labore, praesentium id. 
          </Text>
	    </View>
        <View style={{width: metrics.screenWidth / 375 * 354 }}>
         <PremiumHorse margin={10} action={false} />
        </View>
    </View>
  </ScrollView>
);

export default Ads;