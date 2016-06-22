import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';


import Swipeout from 'react-native-swipeout';
import * as styles from '../styles';
import { calculateCartTotal } from '../util';
import DB from '../models';

import React, {Component} from "react";
import {TouchableOpacity, TouchableHighlight, LayoutAnimation, ListView, View, Text} from "react-native";

export default class CartListView extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.deletedProductIdAndSize = null;
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        scrollEnabled: true,
        products: props.products,
        dataSource: this.ds.cloneWithRows(props.products)
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products,
      dataSource: this.ds.cloneWithRows(nextProps.products)
    });
  }
  
  allowScroll(scrollEnabled) {
    this.setState({ scrollEnabled: scrollEnabled })
  }

  deleteProduct(product){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    
    //key flag to animate out the deleted row
    this.deletedProductIdAndSize = product.id + product.size
    this.setState({ 
        scrollEnabled: false,
        dataSource: this.ds.cloneWithRows(this.state.products)
    }); 

    this.timer = setTimeout(() => {
      DB.write(() => {
          let cartItem = DB.objects('Cart').filtered('id = "'+product.id+'" AND size = "'+product.size+'"');
          DB.delete(cartItem);

          let newCart = DB.objects('Cart').sorted('date', true);
          this.props.updateCart(newCart);
          if(newCart.length > 0){
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({ 
                products: newCart,
                dataSource: this.ds.cloneWithRows(newCart)
            });  
          } 
      });
    }, 500);
  }

  productRow(product, j, index){
    const swipeBtns = [{
      text: 'remove',
      backgroundColor: '#eee',
      color: '#666',
      onPress: () => { this.deleteProduct(product) }
    }];

    
    var animation = 'slideInRight';
    var delay = (index+1)*10;
    if(this.deletedProductIdAndSize == product.id+product.size){
        animation = 'slideOutLeft';
    } 

    var size = <Text style={[styles.lightText, {color:this.props.gradient.bottom}]}>{product.sizeName}</Text>;
    var price = <Text style={[styles.lightText, {color:this.props.gradient.top}]}>${product.price*product.count}</Text>;
    return( 
      <View style={{flex:1}}>
        <Swipeout 
            right={swipeBtns}
            scroll={event => this.allowScroll(event)}
            autoClose={true}
            backgroundColor= 'transparent'>
          <Animatable.View 
            duration={400} 
            delay={delay} 
            animation={animation} 
            style={styles.cartItem}>
              <Text style={styles.subTitle}><Text style={{fontWeight:'bold'}}>{product.count}</Text> {_.startCase(product.title)} {size} {price}</Text>
          </Animatable.View>
        </Swipeout>
      </View>
    );
  }

  render(){
    var totalPrice = calculateCartTotal(this.state.products);
    return(
      <View>
        <View style={styles.modalInfoContainer}>
            <Text style={[styles.title]}>Total Cart: <Text style={{color:this.props.gradient.top}}>${totalPrice}</Text></Text>
            <View style={styles.sizeBoxContainer}>
              <ListView
                style={{flex:1, height:300}}
                scrollEnabled={this.state.scrollEnabled}
                dataSource={this.state.dataSource}
                renderRow={this.productRow.bind(this)} />
            </View>
        </View>
        <View style={[styles.actionButtonContainer]}>
          <TouchableHighlight onPress={() => this.props.goTo('shippingAddress')} style={[styles.actionButton]}>
            <View style={[styles.modalButton, {backgroundColor:this.props.gradient.top}]}>
              <Animatable.Text delay={300} duration={400} animation="fadeIn" style={styles.actionButtonText}>Shipping Address</Animatable.Text>
              <Animatable.View delay={400} duration={500} animation="slideInLeft"><Icon name="navigate-next" style={styles.modalButtonIcon} size={36} color='white' /></Animatable.View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
                  
                  