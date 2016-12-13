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
const FilterMenu = (props) => (
    <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
	  <View style={{}}>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	    borderBottomColor: 'black', borderTopColor: 'white', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Filter</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <TouchableHighlight>
	          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'blue'}}>Apply</Text>
	        </TouchableHighlight>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Discipline</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="check" size={20} color="blue"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Breed</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="angle-right" size={25} color="#E3E3E3"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Age</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="angle-right" size={25} color="#E3E3E3"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Height</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="angle-right" size={25} color="#E3E3E3"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Type</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="angle-right" size={25} color="#E3E3E3"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Country</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="angle-right" size={25} color="#E3E3E3"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Colour</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="angle-right" size={25} color="#E3E3E3"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>Covering sire</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="angle-right" size={25} color="#E3E3E3"></Icon>
	      </View>
	    </View>
	    <View style={{flex:1, flexDirection: 'row', height: 40, padding: 10, borderWidth:1, 
	      borderBottomColor: 'white', borderTopColor: '#E3E3E3', borderLeftColor: 'white',
	    borderRightColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
	      <View style={{flex: 5}}>
	        <Text>In foal</Text>
	      </View>
	      <View style={{flex: 5, alignItems: 'flex-end'}}>
	        <Icon name="angle-right" size={25} color="#E3E3E3"></Icon>
	      </View>
	    </View>
	  </View>
    </ScrollView>
);

export default FilterMenu;