import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';

import styles from './style';
import { images, metrics } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PremiumHorse from '../PremiumHorse';
const QuestionDetail = () => (
	<View style={styles.container}>
	<View style={{width: metrics.screenWidth}}>
		  <View style={{flexDirection: 'row', height: 80,
		  borderWidth: 1,
          backgroundColor: '#FFFFFF',
		  borderColor: '#D7D7D7'}}
          >
		    <View style={{flex: 80,justifyContent: 'center', alignItems: 'center'}}>
		      <Image style={{height: 60, width: 60}} source={images.horse1} />
		    </View>
		    <View style={{flex: 290,flexDirection: 'column'}}>
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
    			<View style={{flex: 10}}>
    			<Text style={{fontSize: 11, color: '#B9B9B9'}}>32</Text>
    			</View>
    			<View style={{flex: 2, width: 15}}>
    			 <Icon name="clock-o" size={12} color='blue'></Icon>
    			</View>
    			<View style={{flex: 100}}>
    			  <Text style={{fontSize: 11, color: '#B9B9B9'}}>12d 23h 12m 34s</Text>
    			</View>
		      </View>
		    </View>
		  </View>
		</View>
  <ScrollView style={{backgroundColor: '#F1F5F6'}}>
    <View style={{alignItems: 'center'}}>
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
	      </View>
    </View>
  </ScrollView>
      <View style={{backgroundColor: '#E5E5E5', height:60, width: metrics.screenWidth, padding: 10,
      flexDirection: 'row', borderColor: '#CDCDCD', borderWidth:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 9}}>
          <View style={{backgroundColor: 'white', height: 40, width: metrics.screenWidth/ 375 * 300,
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 10,
          borderTopLeftRadius:5, borderBottomRightRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 5}}>
            <TextInput style={{flex:1, color: 'black'}} placeholder="Reply..."></TextInput>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight>
            <Text style={{color: 'blue'}}>Send</Text>
          </TouchableHighlight>
        </View>
      </View>
  </View>
);

export default QuestionDetail;