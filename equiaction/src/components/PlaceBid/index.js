import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style';
import PremiumHorse from '../PremiumHorse';
import { images, metrics } from '../../theme';

const PlaceBid = () => (
  <View style={styles.container}>
   <View style={{}}>
     <PremiumHorse margin={0} />
   </View>
   <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <View style={{padding: 10}}>
     <Text style={{color: 'red', fontWeight: 'bold'}}>
       Your maximum bid is: $5,000
     </Text>
    </View>
    <View style={{height: 50, width: metrics.screenWidth / 375 * 344, backgroundColor: 'white' }}>
      <TextInput style={{flex:1, color: 'black', textAlign: 'center'}} placeholder="Enter your bid"></TextInput>
    </View>
    <View style={{height: 50, marginTop: 20 , width: metrics.screenWidth / 375 * 344, flexDirection: 'row', padding: 3}}>
     <View style={{flex: 25, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableHighlight style={{ width: metrics.screenWidth / 375 * 70,
      	borderBottomLeftRadius: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, 
      	borderTopLeftRadius: 5, justifyContent: 'center', alignItems: 'center',
       height: metrics.screenWidth / 375 * 35, backgroundColor: 'blue', }}>
        <Text style={{color: 'white'}}>$8,600</Text>
      </TouchableHighlight>
      </View>
	 <View style={{flex: 25, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableHighlight style={{ width: metrics.screenWidth / 375 * 70,
      	borderBottomLeftRadius: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, 
      	borderTopLeftRadius: 5, justifyContent: 'center', alignItems: 'center',
       height: metrics.screenWidth / 375 * 35, backgroundColor: 'blue', }}>
        <Text style={{color: 'white'}}>$8,700</Text>
      </TouchableHighlight>
      </View>
      <View style={{flex: 25, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableHighlight style={{ width: metrics.screenWidth / 375 * 70,
      	borderBottomLeftRadius: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, 
      	borderTopLeftRadius: 5, justifyContent: 'center', alignItems: 'center',
       height: metrics.screenWidth / 375 * 35, backgroundColor: 'blue', }}>
        <Text style={{color: 'white'}}>$8,800</Text>
      </TouchableHighlight>
      </View>
      <View style={{flex: 25, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableHighlight style={{ width: metrics.screenWidth / 375 * 70,
      	borderBottomLeftRadius: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, 
      	borderTopLeftRadius: 5, justifyContent: 'center', alignItems: 'center',
       height: metrics.screenWidth / 375 * 35, backgroundColor: 'blue', }}>
        <Text style={{color: 'white'}}>$8,900</Text>
      </TouchableHighlight>
      </View>
    </View>
   </View>
  </View>
);

export default PlaceBid;