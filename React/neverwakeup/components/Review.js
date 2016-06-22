import IconE from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';
import * as styles from '../styles';
import { calculateCartTotal } from '../util';
import _ from 'lodash';
import DB from '../models';
import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";

export default class Review extends Component {
  constructor(props) {
      super(props);
      this.state = {
        orderDescription: null,
        totalOrder: 0,
        totalCart:0,
        shipping: 0,
        taxes: 0
      }
  }

  componentDidMount(){
    DB.write(() => {
      let address = DB.objects('ShippingAddress');
      if(address.length > 0){
        var country = address[0].country;    
        country='malaysia';
        fetch('https://'+this.props.SHOPIFY_CONFIG.shop+'//admin/countries.json?name='+country, {
          headers: new Headers({
            'X-Shopify-Access-Token': this.props.SHOPIFY_CONFIG.access_token
          })
        })
        .then((response) => response.json())
        .then((result) => 
        { 
          //countries > provinces >
            console.log(result);
        }).done();
      }
    });

    var products = this.props.cart;
    var orderTitle = '';
    _.each(products, function(item, i){
      orderTitle += item.title;
      if(i < products.length - 1){
        orderTitle += ', ';
      }
    });
    
    var cartValue = calculateCartTotal(products);

    this.setState({
      orderDescription: orderTitle,
      totalCart: cartValue,
      totalOrder: cartValue + (cartValue * this.state.taxes) + this.state.shipping
    });

  }

  render(){
    var tax = '';
    if(!this.props.SHOPIFY_CONFIG.info.taxes_included){
      tax = <Animatable.View delay={200} animation='fadeInRight' duration={400} style={styles.reviewRow}>
              <View style={styles.reviewLeftColumn}>
                <Text style={styles.subTitle}>Taxes</Text>
              </View>
              <IconE name="chevron-right" style={styles.reviewIcon} size={28} color='#ddd' />
              <View style={styles.reviewRightColumn}>
                <Text style={[styles.subTitle, {color:this.props.gradient.top}]}>{this.state.taxes == 0 ? 'None' : this.state.taxes}</Text>
              </View>
            </Animatable.View>;
    } else {
      tax = <Animatable.View></Animatable.View>;
    }
  	return(
  		<View>
        <View style={[styles.modalInfoContainer,{marginBottom:6}]}>
          <Text style={styles.title}>Review order</Text>
          <Animatable.View delay={100} animation='fadeInRight' duration={400} style={[styles.reviewRow, {marginTop:20}]}>
            <View style={styles.reviewLeftColumn}>
              <Text numberOfLines={2} style={styles.subTitle}>{this.state.orderDescription}</Text>
            </View>
            <IconE name="chevron-right" style={styles.reviewIcon} size={28} color='#ddd' />
            <View style={styles.reviewRightColumn}>
              <Text style={[styles.subTitle, {color:this.props.gradient.top}]}>${this.state.totalCart}</Text>
            </View>
          </Animatable.View>
          {tax}
          <Animatable.View delay={400} animation='fadeInRight' duration={400} style={styles.reviewRow}>
            <View style={styles.reviewLeftColumn}>
              <Text style={styles.subTitle}>Shipping</Text>
            </View>
            <IconE name="chevron-right" style={styles.reviewIcon} size={28} color='#ddd' />
            <View style={styles.reviewRightColumn}>
              <Text style={[styles.subTitle, {color:this.props.gradient.top}]}>{this.state.shipping == 0 ? 'Free' : this.state.shipping}</Text>
            </View>
          </Animatable.View>
          <Animatable.View delay={800} animation='fadeInUp' duration={400} style={[styles.reviewRow, {paddingVertical:10}]}>
            <View style={styles.reviewLeftColumn}>
              <Text style={[styles.title]}>Total</Text>
            </View>
            <IconE name="chevron-right" style={[styles.reviewIcon, {marginTop:13}]} size={28} color='#ddd' />
            <View style={styles.reviewRightColumn}>
              <Text style={[styles.title, {color:this.props.gradient.top, fontWeight:'bold'}]}>${this.state.totalOrder}</Text>
            </View>
          </Animatable.View>
        </View>
        <View style={[styles.actionButtonContainer]}>
          <TouchableHighlight onPress={() => this.props.goTo('payment')} style={[styles.actionButton,{flex:1}]}>
            <Animatable.View duration={400} delay={350} animation={this.state.submitted == 1 ? 'bounceOutLeft' : null} View style={[styles.modalButton, {backgroundColor:this.props.gradient.bottom}]}>
              <Animatable.View delay={300} duration={400} animation={this.state.submitted == 1 ? 'fadeOut' : 'slideInRight'}>
                <Icon name="navigate-before" style={styles.modalButtonIcon} size={36} color='white' />
              </Animatable.View>
            </Animatable.View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.saveFormValues('next')} style={[styles.actionButton,{flex:3}]}>
            <Animatable.View duration={550} delay={480} animation={this.state.submitted == 1 ? 'bounceOutRight' : null} style={[styles.modalButton, {backgroundColor:this.props.gradient.top}]}>
              <Animatable.Text duration={400} delay={this.state.submitted == 1 ? 0 : 300} animation={this.state.submitted == 1 ? 'fadeOut' : 'fadeIn'} style={styles.actionButtonText}>Submit Order</Animatable.Text>
              <Animatable.View duration={400} delay={this.state.submitted == 1 ? 100 : 300} animation={this.state.submitted == 1 ? 'fadeOut' : 'slideInLeft'}><Icon name="favorite" style={[styles.modalButtonIcon, {marginLeft:8}]} size={36} color='white' /></Animatable.View>
            </Animatable.View>
          </TouchableHighlight>
        </View>
      </View>
  	)
  }
}