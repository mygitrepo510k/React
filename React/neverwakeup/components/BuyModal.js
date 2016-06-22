import Modal from 'react-native-modalbox';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/EvilIcons';
import _ from 'lodash';

import * as styles from '../styles';
import * as constants from '../constants';
import DB from '../models';

import React, {Component} from "react";
import {TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Linking, LayoutAnimation, ScrollView, View, Text} from "react-native";

const initialState = { 
    addedToCart: false,
    size: null,
    sizeKey: 0,
    sizeName: null,
    price: null
};


export default class BuyModal extends Component {

  constructor(props) {
    super(props);
    this.timer = null;
    this.state = initialState;
  }

  componentWillUnmount () {
	  clearTimeout(this.timer);
  }

  isSizeSelected(){
  	if(!this.state.size){
  		//if product size is not selected, rerender the modal to get bouncing effect
  		this.setState({
  			sizeKey: _.random(0, 10000)
  		});
  		return false;
  	}
  	return true;
  }

  selectSize(size, price, sizeName){
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
	    this.setState({
  		  size: size,
        price: price,
        sizeName: sizeName
  	  });
  }

  insertDB(){
  	DB.write(() => {
      //check if product with the same size has been added to the cart
  		let product = DB.objects('Cart').filtered('id = "'+this.props.product.id+'" AND size = "'+this.state.size+'"');

  		//product doesn't exist
  		if(product.length == 0){
  			let newProduct   = this.props.product;
  			newProduct.date  = new Date();
  			newProduct.size  = this.state.size;
        newProduct.price = this.state.price;
        newProduct.sizeName = this.state.sizeName;
  			newProduct.count = 1;

        console.log(this.props.product);
  			DB.create('Cart', newProduct);
  		} else {
  			product[0].count += 1;
  		}
		});
  }

  checkout(){
    if(this.isSizeSelected()){
      this.insertDB();
      this.props.openCheckout();
      if(this.refs.modal){
        this.refs.modal.close();
      }
    }
  }

  addToCart(){
  	if(this.isSizeSelected()){
		  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
		  this.insertDB();
  		this.setState({
	  		addedToCart: true
	  	});	
	  	
	  	this.timer = setTimeout(() => {
	    	if(this.refs.modal){
  				this.refs.modal.close();
  			}
	  	}, 1000);
  	}
  }

  modalClosed(){
  	this.props.parentCloseModal();
  }

  visitSizeInfo(){
    Linking.openURL(this.props.SIZE_URL).catch(err => console.error('An error occurred', err));
  }

  fontSize(x){
    var size = x.title.length > 3 ? 16 : 20;
    if(x.title.length == 1){
      size = 25;
    }
    return size
  }

  render() {

  	if(this.state.addedToCart){
  		return(
  			<Modal onClosed={() => this.modalClosed()}  ref={"modal"} isOpen={this.props.isOpen} backdropColor={this.props.gradient.top} style={[styles.modal, styles.modalNotify, {backgroundColor:this.props.gradient.bottom}]}>
	          <Animatable.View animation="flipInY" delay={50} duration={500} style={[styles.modalInfoContainer, {alignItems:'center'}]}>
		    	<Icon name="heart" size={50} color='white' />
		    	<Text style={[styles.title, {textAlign:'center', color:'white'}]}><Text style={{fontWeight:'bold'}}>{_.startCase(this.props.product.title)}</Text> has been added to your cart</Text>
	  		  </Animatable.View>
  			</Modal>
  		);
  	}

    
  	return(
        <Modal onClosed={() => this.modalClosed()} ref={"modal"} isOpen={this.props.isOpen} backdropColor={this.props.gradient.bottom} style={[styles.modal]}>
          <View style={styles.modalInfoContainer}>
	          <Text style={styles.title}>Size</Text>
            <View style={{overflow:'hidden',marginBottom:10,height:200}}>
              <ScrollView>
    	          <View style={[styles.sizeBoxContainer]}>
                    {this.props.product.variants.map((x, i) =>
            					<TouchableWithoutFeedback key={i+this.state.sizeKey} onPress={() => this.selectSize(x.id, x.price, x.title)}>
            						<Animatable.View delay={_.random(0, 200)} animation="bounce" duration={700} style={[styles.sizeBox, this.state.size == x.id ? styles.sizeSelected : null]}>
            							<Text style={[styles.title, styles.sizeBoxText, this.state.size == x.id ? styles.sizeSelectedText : null, {fontSize: this.fontSize(x)}]}>{x.title}</Text>
            						</Animatable.View>
            					</TouchableWithoutFeedback>
            				)}
                  
    	          </View>
              </ScrollView>
            </View>
	          <TouchableOpacity onPress={() => this.visitSizeInfo()}><Text style={styles.lightText}>Size Charts</Text></TouchableOpacity>
          </View>
          <View style={[styles.actionButtonContainer, this.state.size ? null : styles.disableAddToCartButton]}>
          	<TouchableHighlight onPress={() => this.addToCart()} style={[styles.actionButton]}><Animatable.View style={{paddingVertical:20,backgroundColor:this.props.gradient.bottom}} duration={500} animation="slideInLeft"><Text style={styles.actionButtonText}>Add to cart</Text></Animatable.View></TouchableHighlight>
          	<TouchableHighlight onPress={() => this.checkout()} style={[styles.actionButton]}><Animatable.View style={{paddingVertical:20,backgroundColor:this.props.gradient.top}} duration={500} animation="slideInRight"><Text style={styles.actionButtonText}>Checkout</Text></Animatable.View></TouchableHighlight>
          </View>
        </Modal>
    )
  }
}