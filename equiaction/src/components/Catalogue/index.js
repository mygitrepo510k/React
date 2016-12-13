import React, { Component } from 'react';
import PremiumHorse from '../PremiumHorse';
import styles from './style';
import { images, metrics } from '../../theme';

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import Swiper from 'react-native-swiper';

const Catalogue = (props) => (
  <View style={{flex:1,}}>
  <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
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
		  <Text>321 Lots</Text>
		  </View>
		  <View style={{flex: 5, flexDirection: 'row' , width:50, height: 10, alignItems: 'flex-end', 
		  padding: 0, justifyContent: 'flex-end'}}>
		  <TouchableHighlight onPress={() => props.toggle(2)}>
		  <Text>FILTER</Text>
		  </TouchableHighlight>
		  <TouchableHighlight>
		  <Text> | </Text>
		  </TouchableHighlight>
		  <TouchableHighlight onPress={() => props.toggle(3)}>
		  <Text>SORT</Text>
		  </TouchableHighlight>
		  </View>
		</View>
		<View style={{flexDirection: 'column'}}>
		  <PremiumHorse margin={10} action={true} />
		  <PremiumHorse margin={10} action={true} />
		  <PremiumHorse margin={10} action={true} />
		  <PremiumHorse margin={10} action={true} />
		  <PremiumHorse margin={10} action={true} />
		</View>
	</View>
	</ScrollView>
	</View>

);

export default Catalogue;