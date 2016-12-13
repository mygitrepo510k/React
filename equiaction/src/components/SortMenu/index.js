import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './style';
import { images, metrics } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
const SortMenu = (props) => (
    <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
	  <View style={{}}>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	    borderBottomColor: 'black', borderTopColor: 'white', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Sort</Text>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: '#E3E3E3', borderTopColor: 'white', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>All ads</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="check" size={20} color="blue"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: '#E3E3E3', borderTopColor: 'white', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Most recent</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: '#E3E3E3', borderTopColor: 'white', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Best Match</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: '#E3E3E3', borderTopColor: 'white', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Most Expensive</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: '#E3E3E3', borderTopColor: 'white', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Cheapest</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	      </View>
	    </View>
	  </View>
    </ScrollView>
);

export default SortMenu;