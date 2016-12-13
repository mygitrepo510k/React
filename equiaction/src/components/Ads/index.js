import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import styles from './style';
import { images, metrics } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PremiumTerms from './PremiumTerms';
import FeaturedTerms from './FeaturedTerms';
import StandardTerms from './StandardTerms';
import * as Progress from 'react-native-progress';
import * as constants from '../../constants';

const Ads = (props) => {
	let content = <View></View>;
 if (props.isAsync == true)
 	content = <View style={styles.waitingView}>
		  	      <Progress.CircleSnail 
		  	        color={['red', 'green', 'blue']}
		            size={100} 
		            thickness={5}
		            style={{alignSelf:'center',opacity:0.8}}
		            indeterminate={true}
		          />
		  	    </View>;
return(
  <ScrollView style={styles.container}>
   <View style={styles.mainView}>
     {content}
	    <View style={styles.progressView}>
	      <View style={styles.progressLeft}>
	      </View>
	      <View style={styles.progressCenter}>
	        <Text style={styles.progCenterText}>1</Text>
	      </View>
	      <View style={styles.progressRight}>
	      </View>
	    </View>
	    <View style={styles.progressText}>
	      <Text>CHOOSE PACKAGE</Text>
	    </View>
	    <LinearGradient 
	      start={[0.0, 0.5]} 
	      end={[1.0, 0.7]} 
	      locations={[0,0.4,0.4,1]}
	      colors={['#FFFFFF', '#FFFFFF', '#FED700', '#FED700']} 
	      style={styles.packageView}>
	      <View style={styles.packageText}>
	         <Text style={styles.packageCaption}>Premium</Text>
	      </View>
	      <View style={styles.packagePrice}>
	        <Icon
	          name="usd" 
	          size={25} 
	          color="black">
	          <Text style={{fontSize: 45}}>99</Text>
	        </Icon>
	      </View>
	      <View style={styles.packageCheck}>
	       <Icon
	        name={(() => {
	        	if (props.packageKind != 1 
	        	|| (props.packageKind == 1 && props.isChecked == 0))
	        	  return "angle-down";
	        	else
	        	  return "check";
	        })()} 
	        size={40} 
	        color="black" 
	        onPress={() => props.onChangePremium(0, 1, 1)}></Icon>
	      </View>
        </LinearGradient>
        <PremiumTerms isOpen={props.isOpenPremium} onChangePremium={props.onChangePremium}/>
	    <LinearGradient 
	      start={[0.0, 0.5]} 
	      end={[1.0, 0.7]} 
	      locations={[0,0.4,0.4,1]}
	      colors={['#FFFFFF', '#FFFFFF', '#3392BD', '#3392BD']} 
	      style={styles.packageView}>
	      <View style={styles.packageText}>
	         <Text style={styles.packageCaption}>Featured</Text>
	      </View>
	      <View style={styles.packagePrice}>
	        <Icon name="usd" size={25} color="white">
	          <Text style={{fontSize: 45, color: 'white'}}>49</Text>
	        </Icon>
	      </View>
	      <View style={styles.packageCheck}>
	       <Icon name={(() => {
	        	if (props.packageKind != 2 || (props.packageKind == 2 && props.isChecked == 0))
	        	  return "angle-down";
	        	else
	        	  return "check";
	        })()} size={40} color="white" onPress={ () => props.onChangeFeatured(0, 1, 2)}></Icon>
	      </View>
        </LinearGradient>
        <FeaturedTerms isOpen={props.isOpenFeatured} onChangeFeatured={props.onChangeFeatured}/>
	    <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.7]} locations={[0,0.4,0.4,1]}
	     colors={['#FFFFFF', '#FFFFFF', '#DEDEDE', '#DEDEDE']} style={styles.packageView}>
	      <View style={styles.packageText}>
	         <Text style={styles.packageCaption}>Standard</Text>
	      </View>
	      <View style={styles.packagePrice}>
	        <Icon name="usd" size={25} color="black"><Text style={{fontSize: 45}}>29</Text></Icon>
	      </View>
	      <View style={styles.packageCheck}>
	       <Icon name={(() => {
	        	if (props.packageKind != 3 || (props.packageKind == 3 && props.isChecked == 0))
	        	  return "angle-down";
	        	else
	        	  return "check";
	        })()} size={40} color="black" onPress={() => props.onChangeStandard(0, 1, 3)}></Icon>
	      </View>
        </LinearGradient>
        <StandardTerms isOpen={props.isOpenStandard} onChangeStandard={props.onChangeStandard}/>
        <View style={styles.splitter}>
        </View>
        <View style={styles.nextBtnView}>
          <TouchableHighlight style={(() => {
              if (props.isChecked == 0)
                return styles.nextInactiveBtn;
              else
                return styles.nextActiveBtn;
            })()}
            onPress={() => {
            	if (props.isChecked == 1){
            		props.onIsAsync(true);
            		props.goToHorseInfo(props.packageKind);
            	}
            }}>
            <Text style={(() => {
              if (props.isChecked == 0)
                return styles.inactiveBtnText;
              else
                return styles.activeBtnText;
            })()}>Next</Text>
          </TouchableHighlight>
        </View>
    </View>
  </ScrollView>
);
}


export default Ads;