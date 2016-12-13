import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TextInput
} from 'react-native';

import styles from './style';
import { images, metrics } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import PremiumHorse from '../PremiumHorse';
import { Actions } from 'react-native-router-flux';

const HorseDetail = () => (
  <View style={{flex:1,}}>
  <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
  <View style={{marginLeft: 15, marginRight: 15,}}>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={images.horse} style={{resizeMode: 'cover', width: metrics.screenWidth}}/>
    </View>
    <View style={{flex:1, marginTop:10, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
       <View style={{width:30, backgroundColor: 'blue'}}>
         <Text style={{color: 'white'}}>Lot1</Text>
       </View>
       <View style={{width:300, marginLeft:10}}>
         <Text style={{fontSize: 18, fontWeight: 'bold'}}>Supercoach</Text>
       </View>
       <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-end'}}>
         <Icon name="heart-o" size={20} color='black'></Icon>
       </View>
      </View> 
      <View style={{flexDirection: 'row', paddingTop:5, paddingBottom: 5}}>
       <View style={{width:20, justifyContent: 'flex-start',alignItems: 'flex-start' }}>
        <Icon name="map-marker" size={20} color='#AFAFAF'></Icon>
       </View>
       <View style={{flex: 9,marginLeft: 5,justifyContent: 'flex-start',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>PO Box 37, Windsor, NSW, 2756, Australia</Text>
       </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 3, paddingBottom: 3}}>
       <View style={{width:20}}>
        <Icon name="usd" size={25} color='blue'></Icon>
       </View>
       <View style={{flex: 9,marginLeft: 5,justifyContent: 'center',alignItems: 'flex-start'}}>
         <Text style={{fontSize: 21}}>8500</Text>
       </View>
      </View>
      <View style={{flexDirection: 'row', paddingTop: 3, paddingBottom: 3}}>
       <View style={{width:20}}>
        <Icon name="gavel" size={15} color='blue'></Icon>
       </View>
       <View style={{flex: 9,marginLeft: 5,justifyContent: 'center',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>32</Text>
       </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 3, paddingBottom: 3}}>
       <View style={{width:20}}>
        <Icon name="clock-o" size={15} color='blue'></Icon>
       </View>
       <View style={{flex: 9,marginLeft: 5,justifyContent: 'center',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>12d 23h 12m 43s</Text>
       </View>
      </View>
      <TouchableHighlight style={{
      	height: 50,
	    width: metrics.screenWidth / 375 * 344,
	    borderTopLeftRadius: 5,
	    borderBottomLeftRadius: 5,
	    borderTopRightRadius: 5,
	    borderBottomRightRadius: 5,
	    backgroundColor: 'blue',
	    justifyContent: 'center',
	    alignItems: 'center',
      }}  onPress={Actions.placeBid}>
          <Text style={{color: 'white'}}>PLACE A BID</Text>
      </TouchableHighlight>
      <View style={{width: metrics.screenWidth / 375 * 344, marginTop:10, marginBottom: 10}}>
        <Text style={{alignItems: 'flex-start',justifyContent: 'center', fontWeight: 'bold'}}>
        More information
        </Text>
      </View>
      <View style={{width: metrics.screenWidth / 375 * 344}}>
        <Text style={{alignItems: 'flex-start',justifyContent: 'center',alignItems: 'flex-start'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat velit iste similique. Quisquam qui totam vel impedit quis dolores obcaecati ipsum officiis adipisci eligendi deleniti laboriosam, ea, temporibus enim numquam.
        </Text>
      </View>
      <View style={{width: metrics.screenWidth / 375 * 344, marginTop:10, marginBottom: 10}}>
        <Text style={{color: 'blue', alignItems: 'flex-start',justifyContent: 'center', fontWeight: 'bold'}}>
        Show more
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingTop:5, paddingBottom: 5}}>
       <View style={{flex: 3, justifyContent: 'flex-start',alignItems: 'flex-start' }}>
        <Text style={{fontWeight: 'bold'}}>Discipline</Text>
       </View>
       <View style={{flex: 7,marginLeft: 5,justifyContent: 'flex-start',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>Weanlings</Text>
       </View>
      </View>
      <View style={{flexDirection: 'row', paddingTop:5, paddingBottom: 5}}>
       <View style={{flex: 3, justifyContent: 'flex-start',alignItems: 'flex-start' }}>
        <Text style={{fontWeight: 'bold'}}>Colour</Text>
       </View>
       <View style={{flex: 7,marginLeft: 5,justifyContent: 'flex-start',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>Bay</Text>
       </View>
      </View>
      <View style={{flexDirection: 'row', paddingTop:5, paddingBottom: 5}}>
       <View style={{flex: 3, justifyContent: 'flex-start',alignItems: 'flex-start' }}>
        <Text style={{fontWeight: 'bold'}}>Sex</Text>
       </View>
       <View style={{flex: 7,marginLeft: 5,justifyContent: 'flex-start',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>Mare</Text>
       </View>
      </View>
      <View style={{flexDirection: 'row', paddingTop:5, paddingBottom: 5}}>
       <View style={{flex: 3, justifyContent: 'flex-start',alignItems: 'flex-start' }}>
        <Text style={{fontWeight: 'bold'}}>Sire</Text>
       </View>
       <View style={{flex: 7,marginLeft: 5,justifyContent: 'flex-start',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>Key</Text>
       </View>
      </View>
      <View style={{flexDirection: 'row', paddingTop:5, paddingBottom: 5}}>
       <View style={{flex: 3, justifyContent: 'flex-start',alignItems: 'flex-start' }}>
        <Text style={{fontWeight: 'bold'}}>Business</Text>
       </View>
       <View style={{flex: 7,marginLeft: 5,justifyContent: 'flex-start',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>Dam</Text>
       </View>
      </View>
      <View style={{flexDirection: 'row', paddingTop:5, paddingBottom: 5}}>
       <View style={{flex: 3, justifyContent: 'flex-start',alignItems: 'flex-start' }}>
        <Text style={{fontWeight: 'bold'}}>Lady</Text>
       </View>
       <View style={{flex: 7,marginLeft: 5,justifyContent: 'flex-start',alignItems: 'flex-start'}}>
         <Text style={{color: '#AFAFAF'}}>Baleen</Text>
       </View>
      </View>
      <View style={{
      	flexDirection: 'row',
      	height: 50,
	    width: metrics.screenWidth / 375 * 344,
	    borderWidth: 1,
	    borderColor: 'blue',
	    justifyContent: 'center',
	    alignItems: 'center',
	    marginBottom: 10
      }}>
       <View style={{width: 50, height:50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
         <Icon name="user" size={30} color="white" />
       </View>
       <View style={{flex: 3, padding: 5}}>
         <View style={{flexDirection: 'column'}}>
           <Text>Vendor</Text>
           <Text style={{fontWeight: 'bold'}}>Jackson Cox</Text>
         </View>
       </View>
       <View style={{flex: 5, padding: 5}}>
         <View style={{flexDirection: 'column'}}>
           <Text>Phone <Text style={{color: 'blue'}}>(call)</Text></Text>
           <Text style={{fontWeight: 'bold'}}>3412 1234 12</Text>
         </View>
       </View>
      </View>
      <View style={{backgroundColor: '#E5E5E5', height:60, width: metrics.screenWidth, padding: 10,
      flexDirection: 'row', borderColor: '#CDCDCD', borderWidth:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 9}}>
          <View style={{backgroundColor: 'white', height: 40, width: metrics.screenWidth/ 375 * 300,
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
          borderTopLeftRadius:5, borderBottomRightRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 5}}>
            <View style={{width: 20, paddingLeft: 5}}>
              <Icon name="question-circle" size={15} color="#8E8E93" />
            </View>
            <TextInput style={{flex:1, color: 'black'}} placeholder="Do you have a question?"></TextInput>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight>
            <Text style={{color: 'blue'}}>Send</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={{flex:1}}>
	      <View style={{flex:1, borderWidth: 1, borderColor: '#E1E1E1', borderBottomLeftRadius: 5,
	      borderTopRightRadius: 5, borderBottomRightRadius: 5, marginTop: 10, marginBottom: 10,
	      borderTopLeftRadius: 5, padding: 5,
	      width: metrics.screenWidth / 375 * 354 }}>
	        <View style={{flexDirection: 'row'}}>
	          <View style={{flex: 5}}>
	            <Text style={{color: 'black', fontWeight: 'bold'}}>Handdorj</Text>
	          </View>
	          <View style={{flex: 5, alignItems: 'flex-end'}}>
	            <Text>1 hours ago</Text>
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
	      <View style={{flex:1, borderWidth: 1, borderColor: '#E1E1E1', borderBottomLeftRadius: 5,
	      borderTopRightRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, padding: 5,
	      width: metrics.screenWidth / 375 * 354 }}>
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
	      <View style={{justifyContent: 'center', alignItems: 'center', padding: 20 }}>
	       <TouchableHighlight>
	         <Text style={{color: 'blue', fontWeight: 'bold'}}>Show more</Text>
	       </TouchableHighlight>
	      </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
        width: metrics.screenWidth, borderWidth:1, borderColor: '#C9C9C9', backgroundColor: '#F1F5F6' }}>
        <View style={{width: metrics.screenWidth / 375 * 354, marginTop: 10, marginBottom: 10 }}>
         <Text style={{color: 'black', fontWeight: 'bold'}}>You may interested</Text>
        </View>
        <View style={{width: metrics.screenWidth / 375 * 354 }}>
         <PremiumHorse margin={10} action={false} />
        </View>
        <View style={{width: metrics.screenWidth / 375 * 354 }}>
         <PremiumHorse margin={10}  action={false} />
        </View>
        <View style={{width: metrics.screenWidth / 375 * 354 }}>
         <PremiumHorse margin={10}  action={false} />
        </View>
        <View style={{width: metrics.screenWidth / 375 * 354 }}>
         <PremiumHorse margin={10}  action={false} />
        </View>
        <View style={{width: metrics.screenWidth / 375 * 354 }}>
         <PremiumHorse margin={10}  action={false} />
        </View>
      </View>
    </View> 
    </View>
  </ScrollView>
  </View>
);

export default HorseDetail;