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
const Ads = () => (
  <ScrollView style={styles.container}>
  	<View style={{flex: 1, alignItems: 'center',}}>
	    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50}}>
	      <View style={{flex: 185, height:1, borderWidth: 1, borderColor: '#419BF9'}}>
	      </View>
	      <View style={{flex: 1, height: 18, width: 18, backgroundColor: '#419BF9',
	      borderBottomLeftRadius: 20, justifyContent: 'center', alignItems: 'center',
		      borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20}}>
	        <Text style={{color: 'white'}}>3</Text>
	      </View>
	      <View style={{flex: 185, height:1, borderWidth: 1, borderColor: '#419BF9'}}>
	      </View>
	    </View>
	    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
	      <Text>Payment</Text>
	    </View>
	    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50}}>
	      <View style={{flex: 115, marginLeft: 10}}>
	        <Text style={{}}>Payment form</Text>
	      </View>
	      <View style={{flex: 260, height:1, borderWidth: 1, borderColor: 'black'}}>
	      </View>
	    </View>
	    <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
	      <Text style={{fontWeight: 'bold', marginBottom: 5}}>Country</Text>
	      <View style={{height: 40, width: metrics.screenWidth / 375 * 344, backgroundColor: 'white',marginBottom: 5 }}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown"></TextInput>
	      </View>
	      <Text style={{fontWeight: 'bold', marginBottom: 5}}>Sir name</Text>
	      <View style={{height: 40, width: metrics.screenWidth / 375 * 344, backgroundColor: 'white',marginBottom: 5 }}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown"></TextInput>
	      </View>
	      <Text style={{fontWeight: 'bold', marginBottom: 5}}>Card Number</Text>
	      <View style={{height: 40, width: metrics.screenWidth / 375 * 344, backgroundColor: 'white',marginBottom: 5 }}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown"></TextInput>
	      </View>
	      <Text style={{fontWeight: 'bold', marginBottom: 5}}>Payment type</Text>
	      <View style={{height: 40, width: metrics.screenWidth / 375 * 344, backgroundColor: 'white',marginBottom: 5 }}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown"></TextInput>
	      </View>
	      <Text style={{fontWeight: 'bold', marginBottom: 5}}>Location</Text>
	      <View style={{height: 40, width: metrics.screenWidth / 375 * 344, backgroundColor: 'white',marginBottom: 5 }}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown"></TextInput>
	      </View>
	      <Text style={{fontWeight: 'bold', marginBottom: 5}}>Password</Text>
	      <View style={{height: 40, width: metrics.screenWidth / 375 * 344, backgroundColor: 'white',marginBottom: 5 }}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown"></TextInput>
	      </View>
	    </View>
        <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', width: metrics.screenWidth, padding: 15}}>
          <TouchableHighlight style={{height: metrics.screenWidth / 375 * 35, width: metrics.screenWidth / 375 * 90,
          	backgroundColor: '#D8D8D8', borderRadius: 5,justifyContent: 'center', alignItems: 'center'}}
          	onPress={Actions.confirmInfo}
          	>
          	  <Text>Next</Text>
          </TouchableHighlight>
        </View>
    </View>
  </ScrollView>
);

export default Ads;