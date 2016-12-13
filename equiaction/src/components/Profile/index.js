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

const Profile = () => (
  <View style={styles.container}>
   <View style={{alignItems: 'center'}}>
    <View style={{width: metrics.screenWidth, alignItems: 'center', backgroundColor: '#EAEAEA', paddingTop: 10}}>
     <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'blue',
     justifyContent: 'center', alignItems: 'center'}}>
       <Icon name='user' size={20} color="white" />
     </View>
     <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>Handdorj Gantugs</Text>
     <Text style={{marginBottom: 20, color: '#AAAAAA'}}>handdorj0429@gmail.com</Text>
    </View> 
   </View>
   <TouchableHighlight style={{height: 50, width: metrics.screenWidth, borderBottomColor: 'white',
   borderTopColor: '#E3E3E3', borderLeftColor: 'white', borderRightColor: 'white', borderWidth: 1}}
   onPress={Actions.questions}>
   <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
   >
     <View style={{flex: 9, marginLeft: 15}}>
       <Text>Question</Text>
     </View>
       <View style={{width: 15, height: 15, backgroundColor: 'red', borderRadius: 7,
       justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{fontSize: 9,color: 'white'}}>1</Text>
       </View>
       <View style={{width: 40, alignItems: 'center'}}>
       <Icon name="angle-right" size={30} color="#9C9C9C" />
     </View>
     </View>
   </TouchableHighlight>
   <TouchableHighlight style={{height: 50, width: metrics.screenWidth, borderBottomColor: 'white',
   borderTopColor: '#E3E3E3', borderLeftColor: 'white', borderRightColor: 'white', borderWidth: 1}}>
   <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
     <View style={{flex: 9, marginLeft: 15}}>
       <Text>My favourite</Text>
     </View>
       <View style={{width: 15, height: 15, backgroundColor: '#B1B1B1', borderRadius: 7,
       justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{fontSize: 9,color: 'white'}}>1</Text>
       </View>
       <View style={{width: 40, alignItems: 'center'}}>
       <Icon name="angle-right" size={30} color="#9C9C9C" />
     </View>
     </View>
   </TouchableHighlight>
   <TouchableHighlight style={{height: 50, width: metrics.screenWidth, borderBottomColor: 'white',
   borderTopColor: '#E3E3E3', borderLeftColor: 'white', borderRightColor: 'white', borderWidth: 1}}>
   <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
     <View style={{flex: 9, marginLeft: 15}}>
       <Text>My Horse</Text>
     </View>
       <View style={{width: 15, height: 15, backgroundColor: 'white', borderRadius: 7,
       justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{fontSize: 9,color: 'white'}}>1</Text>
       </View>
       <View style={{width: 40, alignItems: 'center'}}>
       <Icon name="angle-right" size={30} color="#9C9C9C" />
     </View>
     </View>
   </TouchableHighlight>
   <TouchableHighlight style={{height: 50, width: metrics.screenWidth, borderBottomColor: 'white',
   borderTopColor: '#E3E3E3', borderLeftColor: 'white', borderRightColor: 'white', borderWidth: 1}}>
   <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
     <View style={{flex: 9, marginLeft: 15}}>
       <Text>Settings</Text>
     </View>
       <View style={{width: 15, height: 15, backgroundColor: 'white', borderRadius: 7,
       justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{fontSize: 9,color: 'white'}}>1</Text>
       </View>
       <View style={{width: 40, alignItems: 'center'}}>
       <Icon name="angle-right" size={30} color="#9C9C9C" />
     </View>
     </View>
   </TouchableHighlight>
   <TouchableHighlight style={{height: 50, width: metrics.screenWidth, borderBottomColor: '#E3E3E3',
   borderTopColor: '#E3E3E3', borderLeftColor: 'white', borderRightColor: 'white', borderWidth: 1}}>
   <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
     <View style={{flex: 9, marginLeft: 15}}>
       <Text>Log out</Text>
     </View>
   </View>
   </TouchableHighlight>
  </View>
);

export default Profile;