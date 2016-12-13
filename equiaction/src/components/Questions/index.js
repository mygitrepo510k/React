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
import { Actions } from 'react-native-router-flux';
const Questions = () => (
  <ScrollView style={styles.container}>
  <View style={{alignItems: 'center'}}>
   <TouchableHighlight onPress={Actions.questionDetail}>
	      <View style={{flex:1, borderWidth: 1, borderColor: '#E1E1E1', borderBottomLeftRadius: 5,
	      borderTopRightRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, padding: 5,
	      width: metrics.screenWidth / 375 * 354, marginTop: 10, marginBottom: 10,
	      backgroundColor: 'white' }}>
	        <View style={{flexDirection: 'row'}}>
	          <View style={{flex: 5}}>
	            <Text style={{color: 'black', fontWeight: 'bold'}}>Jackson Cox</Text>
	          </View>
	          <View style={{flex: 5, alignItems: 'flex-end'}}>
	            <Text>2 hours ago</Text>
	          </View>
	        </View>
	        <View style={{marginTop: 5, marginBottom: 5}}>
	          <Text>In some situations you may request to have a horse scoped with the express?</Text>
	        </View>
	        <View style={{backgroundColor: '#F5F5F5',flexDirection: 'column', marginLeft: 30, padding: 5}}>
	          <Text style={{color: 'blue', fontWeight: 'bold'}}>Vender</Text>
	          <Text>In some situations you may request to</Text>
	        </View>
	      </View>
	      </TouchableHighlight>
	      </View>
  </ScrollView>
);

export default Questions;