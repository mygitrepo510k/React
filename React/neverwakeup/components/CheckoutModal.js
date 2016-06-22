import Modal from 'react-native-modalbox';
import Progress from './Progress';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

import _ from 'lodash';

import * as styles from '../styles';
import * as constants from '../constants';

import EmptyCart from './EmptyCart';
import CartListView from './CartListView';
import Address from './Address';
import Payment from './Payment';
import Orders from './Orders';
import Review from './Review';

import React, {Component} from "react";
import {TouchableHighlight, LayoutAnimation, View, Text} from "react-native";

const initialState = { 
  cartCount: 0,
  loaded: false,
  animationOutBuffer: false,
  isAccountPage: false,
  step: null
};
export default class CheckoutModal extends Component {
  constructor(props) {
    super(props);
    this.products = [];
    this.timer = null;
    this.state = initialState;
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  modalOpened(){
    console.log(this.props.page);
      //this is to prevent modal from going back in the checkout flow when you click 'anywhere' within the modal
      if(this.state.step){
        return false;
      }
      // If products is null, this means the modal is being called from account menu 
      this.products = this.props.products;
      this.setState({ 
	        cartCount: this.products ? this.products.length : 0,
	        loaded: true,
          isAccountPage: this.props.isAccountPage,
          step: this.props.page
	    });
  }

  modalClosed(){
      this.props.parentCloseModal();
  }

  updateCart(products){
      this.setState({ 
        cartCount: products.length
      }); 
  }

  goTo(page){
      const setPage = () => {
        this.setState({animationOutBuffer : this.state.animationOutBuffer ? false : true});
        this.timer = setTimeout(() => {
          this.setState({
            animationOutBuffer:this.state.animationOutBuffer ? false : true,
            step: page
          });
        }, 400);

        if(page == 'confirmedOrder' || page == 'problemOrder'){
          this.timer = setTimeout(() => {
              if(this.refs.modal){
                this.refs.modal.close();
              }  
          }, page == 'confirmedOrder' ? 1600 : 2500);
        }
      };
      setPage();
  }

  render() {
    var content =  <Progress darkColorScheme={true} />;
    if(this.state.loaded){
    	if(this.state.cartCount < 1 && !this.state.isAccountPage){
    		content = <EmptyCart 
                    modalRef={this.refs.modal}
                    gradient={this.props.gradient} />;
    	} else {
        if(this.state.step == 'cartList'){
	    	  content = <CartListView 
                    updateCart={(products) => this.updateCart(products)}
                    goTo={(page) => this.goTo(page)}
                    gradient={this.props.gradient}
                    products={this.products} />;
        } else if (this.state.step == 'shippingAddress'){
          content = <Address 
                      goTo={(page) => this.goTo(page)}
                      type='shipping'
                      key='shipping'
                      modalRef={this.refs.modal}
                      SHOPIFY_SHOPIFY_COUNTRY_CODE={this.props.SHOPIFY_COUNTRY_CODE}
                      isAccountPage={this.state.isAccountPage}
                      gradient={this.props.gradient} />;
        } else if (this.state.step == 'billingAddress'){
          content = <Address 
                      goTo={(page) => this.goTo(page)}
                      type='billing'
                      key='billing'
                      modalRef={this.refs.modal}
                      SHOPIFY_SHOPIFY_COUNTRY_NAME={this.props.SHOPIFY_SHOPIFY_COUNTRY_NAME}
                      isAccountPage={this.state.isAccountPage}
                      gradient={this.props.gradient} />;
        } else if (this.state.step == 'payment'){
          content = <Payment 
                      goTo={(page) => this.goTo(page)}
                      modalRef={this.refs.modal}
                      SHOPIFY_CONFIG={this.props.SHOPIFY_CONFIG}
                      isAccountPage={this.state.isAccountPage}
                      gradient={this.props.gradient} />;
        }  else if (this.state.step == 'orders'){
          content = <Orders 
                      goTo={(page) => this.goTo(page)}
                      modalRef={this.refs.modal}
                      SHOPIFY_CONFIG={this.props.SHOPIFY_CONFIG}
                      gradient={this.props.gradient} />;
        } else if (this.state.step == 'review'){
          content = <Review 
                      gradient={this.props.gradient}
                      goTo={(page) => this.goTo(page)}
                      SHOPIFY_CONFIG={this.props.SHOPIFY_CONFIG}
                      cart={this.props.products} />
        }
	    }
      content = <Animatable.View duration={400} animation={this.state.animationOutBuffer ? 'fadeOutRight' : 'fadeInRight'}>
                  {content}
                </Animatable.View>;  
    }

    if (this.state.step == 'confirmedOrder' || this.state.step == 'problemOrder'){
          return(
            <Modal onClosed={() => this.modalClosed()} ref='modal' isOpen={this.props.isOpen} backdropColor={this.props.gradient.top} style={[styles.modal, styles.modalNotify, {backgroundColor:this.props.gradient.bottom}]}>
              <Animatable.View animation="flipInY" delay={50} duration={500} style={[styles.modalInfoContainer, {alignItems:'center'}]}>
              <Icon name={this.state.step == 'confirmedOrder' ? 'checkmark-round' : 'close-round'} size={50} color='white' />
              <Text style={[styles.title, {textAlign:'center', color:'white'}]}><Text style={{fontWeight:'bold'}}>{this.state.step == 'confirmedOrder' ? 'Whee! Your order is confirmed!' : 'There is a problem with your credit card. Please try again.'}</Text></Text>
              </Animatable.View>
            </Modal>
          );
    }

  	return(
  		<Modal 
	  		onOpened={() => this.modalOpened()}
	  		onClosed={() => this.modalClosed()} 
        ref='modal'
        swipeArea={this.state.step == 'cartList' || this.state.step == 'orders' ? 50 : null} 
	  		isOpen={this.props.isOpen} 
	  		backdropColor={this.props.gradient.top} 
        backdropOpacity={0.4}
	  		style={[styles.modal, {height:500}, this.state.loaded && this.state.cartCount == 0 && !this.state.isAccountPage ? styles.modalNotify : null]}>
          	{content}
        </Modal>
  	);
  }
}