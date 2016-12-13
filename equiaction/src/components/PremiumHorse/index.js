import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { images, metrics } from '../../theme';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const PremiumHorse = (props) => (
    <TouchableHighlight onPress={() => {
        if (props.action == true) Actions.horseDetail()
    }}>
		  <View style={{flexDirection: 'row', height: 132,
		  marginTop: props.margin,
		  marginBottom: props.margin,
		  borderWidth: 1,
          backgroundColor: '#FFFFFF',
		  borderColor: '#D7D7D7'}}
          
          >
          
		    <View style={{flex: 132,}}>
		      <Image style={{height: 132}} source={images.horse1} />
		    </View>
		    <View style={{flex: 199,flexDirection: 'column'}}>
		      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    			<View style={{flex: 3, width: 20, backgroundColor: 'blue'}}>
    			 <Text style={{color: 'white', fontSize: 11}}>Lot1</Text>
    			</View>
    			<View style={{flex: 97, marginLeft: 5}}>
    			<Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>Supercoach</Text>
    			</View>
		      </View>
		      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    			<View style={{flex: 2, width: 15}}>
    			 <Icon name="map-marker" size={20} color='#AFAFAF'></Icon>
    			</View>
    			<View style={{flex: 98, }}>
    			<Text style={{fontSize: 10, color: '#B9B9B9'}}>PO Box 37, Windsor, NSW, 2756 Australia</Text>
    			</View>
		      </View>
		      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    			<View style={{flex: 2, width: 15}}>
    			 <Icon name="usd" size={15} color='blue'></Icon>
    			</View>
    			<View style={{flex: 98,}}>
    			<Text style={{color: 'black', fontSize: 18}}>8500</Text>
    			</View>
		      </View>
		      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    			<View style={{flex: 2, width: 15}}>
    			 <Icon name="gavel" size={12} color='blue'></Icon>
    			</View>
    			<View style={{flex: 98}}>
    			<Text style={{fontSize: 11, color: '#B9B9B9'}}>32</Text>
    			</View>
		      </View>
		      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    			<View style={{flex: 2, width: 15}}>
    			 <Icon name="clock-o" size={12} color='blue'></Icon>
    			</View>
    			<View style={{flex: 80}}>
    			  <Text style={{fontSize: 11, color: '#B9B9B9'}}>12d 23h 12m 34s</Text>
    			</View>
                <View style={{flex: 18, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 5}}>
                  <Icon name="heart-o" size={20} color='black'></Icon>
                </View>
		      </View>
		    </View>
		    <View style={{flex: 5, justifyContent: 'center', alignItems: 'center',
             backgroundColor: '#FED700', width: 5}}>
              <Text style={{fontSize: 9, fontWeight: 'bold', height: 10, width: 50, color: 'white', transform: [{ rotate: '90deg'}]}}>Premium</Text>
		    </View>
            
		  </View>
          </TouchableHighlight>
);

export default PremiumHorse;
