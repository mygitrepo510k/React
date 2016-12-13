import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style';
import { images, metrics } from '../../theme';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
/*
var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: "rtQtnRlDJPB00kzIcpLCKPOt6ZE8Vxm7", domain: "equiauction.au.auth0.com"});
const SignIn = () => {
    lock.show({}, (err, profile, token) => {
      console.log('Logged in!!!');
    });
}
*/
const SignIn = () => (
  <View style={styles.container}>
  	<View style={{backgroundColor: '#EBEBFF', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  	  <Image source={images.logo}
  	   style={{resizeMode: 'contain',height: metrics.screenWidth * 0.4 / 4 , width: metrics.screenWidth * 0.4}}></Image>
  	</View>
  	<View style={{flex:4, alignItems: 'center', justifyContent: 'center'}}>
  	  <View style={{flex: 3, alignItems: 'center', justifyContent: 'flex-end', margin: 5}}>
        <View style={styles.btnView}>
	  	  <View style={styles.loginBtn}>
	  	   <TouchableHighlight>
	  	    <Text>LOGIN</Text>
	  	    </TouchableHighlight>
	  	  </View>
	  	  <View style={styles.signupBtn}>
	  	    <TouchableHighlight>
	  	      <Text>SIGN UP</Text>
	  	      </TouchableHighlight>
	  	    </View>
  	    </View>
  	  </View>
      <View style={{flex: 4, alignItems: 'center', justifyContent: 'flex-start',}}>
        <View 
        style={{ 
        	flexDirection: 'row', height: metrics.screenWidth / 21 * 2, width: metrics.screenWidth / 21 * 18, 
        backgroundColor: '#F1F1F1', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="envelope-o" size={20} color='#A7A7A7'></Icon>
        </View>
        <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput style={{flex:1}} placeholder="Email"></TextInput>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: metrics.screenWidth / 21 * 2, width: metrics.screenWidth / 21 * 18, backgroundColor: '#F1F1F1', marginTop: 20}}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="lock" size={20} color='#A7A7A7'></Icon>
        </View>
        <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput style={{flex:1}} placeholder="Password"></TextInput>
          </View>
        </View>
      </View>
      <View style={{flex: 3,alignItems: 'center', justifyContent: 'flex-start', marginTop: 20}}>
      <TouchableHighlight>
       <Text>Don't you remember your password?</Text>
      </TouchableHighlight>
      </View>
  	</View>
  	<View style={{flex: 2, justifyContent: 'flex-end'}}>
	    <TouchableHighlight onPress={Actions.home}>
	       <Image style={{width: metrics.screenWidth}} source={images.loginGo} />
	    </TouchableHighlight>
  	</View>
  </View>
);

export default SignIn;