import * as Animatable from 'react-native-animatable';
import _ from 'lodash';

import * as styles from '../styles';
import * as constants from '../constants';

import React, {Component} from "react";
import {TouchableOpacity, Dimensions, Linking, ListView, View, Text} from "react-native";


export default class AccountMenu extends Component {
  constructor(props) {
    super(props);
  }

  contactUs(){
    Linking.openURL('mailto:'+this.props.CONTACT_EMAIL).catch(err => console.error('An error occurred', err));
  }

  render(){
    let index = 0;
    const menu = [
        { label: 'Orders', action: this.props.openCheckout, param: 'orders' },
        { label: 'Address', action: this.props.openCheckout, param: 'shippingAddress' },
        { label: 'Payment', action: this.props.openCheckout, param: 'payment' },
        { label: 'Contact Us', action: () => this.contactUs() },
        { label: 'LINE', action: this.press},
        { label: 'Go Back', action: this.props.toggleAccountMenu }
    ];
    var arr = [];
    _.each(menu, (item, i) => {
      var delay = i*50;
      var key = this.props.animationOutBuffer ? i : i*item.label.length;

      var link = <TouchableOpacity onPress={() => item.action(item.param)} key={key}>
                  <Animatable.View animation={this.props.animationOutBuffer ? 'slideInLeft' : 'slideOutLeft'} delay={delay} duration={400}>     
                    <Text style={styles.menuLink}>{item.label}</Text>
                  </Animatable.View>
                 </TouchableOpacity>;

      if(item.label === 'LINE'){
        link = <Animatable.View key={key} animation={this.props.animationOutBuffer ? 'slideInLeft' : 'slideOutLeft'} duration={400}>     
                 <View style={{backgroundColor:'#fff', height:2, width:Math.floor(Dimensions.get('window').width/2), marginVertical: 20}} />
               </Animatable.View>
      }
      
      arr.push(link);
    });
    return(
      <View style={styles.menuContainer}>     
        {arr}
      </View>
    );
  }
}
                  
                  