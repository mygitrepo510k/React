import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { FormattedMessage } from 'react-native-globalize';

import { NativeModules } from 'react-native';
var BuySdkManager = NativeModules.BuySdkManager;

import _ from 'lodash';
import * as constants from './constants';
import * as styles from './styles';

import CollectionView from './components/CollectionView';
import BottomNavigation from './components/BottomNavigation';
import AccountMenu from './components/AccountMenu';
import CollectionMenu from './components/CollectionMenu';

import BuyModal from './components/BuyModal';
import CheckoutModal from './components/CheckoutModal';
import ImageInfoModal from './components/ImageInfoModal';

import DB from './models';

import React, {Component} from "react";
import {LayoutAnimation, View, Text} from "react-native";

const initialState  = { 
    cartProducts: null,
    animationOutBuffer: false,
    showAccountMenu: false,
    showCollectionMenu: true,
    collection: null,
    currentProduct: null,
    openedModalType: false,
    checkoutPage: 'cartList',
    cartProducts: null
};

export default class App extends Component {
   constructor(props) {
    super(props);
    this.timer = null;
    this.gradient = JSON.parse(props.SHOPIFY_CONFIG.configuration.gradient);
    this.state = initialState;
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    this.setState(initialState);
    DB.write(() => {
      let cart = DB.objects('Cart');
      let ShippingAddress = DB.objects('ShippingAddress');
      this.setState({cartProducts: cart});
      //clear all local db entry for development
      //DB.delete(cart);
    });
  }

  backToCollections(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    this.setState({animationOutBuffer : this.state.animationOutBuffer ? false : true});
    this.timer = setTimeout(() => {
      this.componentDidMount();
    }, 400);
  }

  toggleAccountMenu(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    this.setState({animationOutBuffer : this.state.animationOutBuffer ? false : true});
    this.timer = setTimeout(() => {
      this.setState({showAccountMenu: this.state.showAccountMenu ? false : true});
    }, 400);
  }

  selectCollection(collection){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    this.setState({animationOutBuffer : this.state.animationOutBuffer ? false : true});
    this.timer = setTimeout(() => {
      this.setState({
        showCollectionMenu: this.state.showCollectionMenu ? false : true,
        animationOutBuffer : this.state.animationOutBuffer ? false : true,
        collection: collection
      });
    }, 400);
  }

  parentCloseModal(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    DB.write(() => {
      let cart = DB.objects('Cart');
      //always close the cart modal first
      this.setState({
        openedModalType: false,
        cartProducts: cart,
        checkoutPage: 'cartList'
      });
    });
  }
  
  openCheckout(page){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    DB.write(() => {
      let cart = DB.objects('Cart').sorted('date', true); 
      this.setState({
        openedModalType: 'checkout',
        cartProducts: cart,
        checkoutPage: page || this.state.checkoutPage
      });  
    });
  }

  openImageInfoModal(product, type){
    if(type == 'image'){
      this.setState({
        openedModalType: 'image',
        currentProduct: product
      });
    } else {
      this.setState({
        openedModalType: 'description',
        currentProduct: product
      });
    }
  }

  openSizeSelection(product){

    
    //BuySdkManager.buildCart(JSON.stringify(product.variants[0]));
  /*  
    var MERCHANT_ID = null;
    BuySdkManager.authorize(
      this.props.SHOPIFY_CONFIG.shop, 
      this.props.SHOPIFY_CONFIG.configuration.mobileApiKey, 
      this.props.SHOPIFY_CONFIG.configuration.channelId, 
      MERCHANT_ID, 
      (error, header) => {
        BuySdkManager.presentProductwithId(String(product.id));
    });
*/
  
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      openedModalType: 'buy',
      currentProduct: product
    });
  }

  render() {
    var title = this.props.SHOPIFY_CONFIG.configuration.name;
    var subcontent = <CollectionMenu 
                        SHOPIFY_CONFIG={this.props.SHOPIFY_CONFIG}
                        selectCollection={(collection) => this.selectCollection(collection)} />;
    
    if(!this.state.showCollectionMenu){
        title = 'Collections > ' + this.state.collection.title;
        subcontent = <CollectionView
                      SHOPIFY_CONFIG={this.props.SHOPIFY_CONFIG}
                      gradient={this.gradient}
                      openImageInfoModal={(product, type) => this.openImageInfoModal(product, type)}
                      openSizeSelection={(item) => this.openSizeSelection(item)}
                      collection={this.state.collection} />;                  
    }
    title = <Animatable.View animation={this.state.animationOutBuffer ? 'fadeOutRight' : 'fadeInRight'} duration={600} style={styles.mainTitle}><Text numberOfLines={1} style={styles.mainTitleText}>{title} <FormattedMessage
        message="collections" /></Text></Animatable.View>;
    subcontent = <Animatable.View animation={this.state.animationOutBuffer ? 'fadeOutRight' : 'fadeInRight'} delay={100} duration={500} style={{flex:1}}>
                   {title}               
                   {subcontent}
                   <BottomNavigation 
                        gradient={this.gradient}
                        openCheckout={() => this.openCheckout()}
                        toggleAccountMenu={() => this.toggleAccountMenu()}
                        backToCollections={() => this.backToCollections()}
                        cartProducts={this.state.cartProducts} />
                 </Animatable.View>;

    if(this.state.showAccountMenu){
        subcontent = <AccountMenu 
                        animationOutBuffer={this.state.animationOutBuffer}
                        CONTACT_EMAIL={this.props.SHOPIFY_CONFIG.configuration.email}
                        openCheckout={(page) => this.openCheckout(page)}
                        toggleAccountMenu={() => this.toggleAccountMenu()} />;
    } 



    var modal = null;
    if(this.state.openedModalType == 'image' || this.state.openedModalType == 'description'){
      modal = <ImageInfoModal 
            parentCloseModal={() => this.parentCloseModal()}
            gradient={this.gradient}
            type={this.state.openedModalType}
            product={this.state.currentProduct} 
            isOpen={this.state.openedModalType ? true : false} />;
    } else if(this.state.openedModalType == 'checkout'){
      modal = <CheckoutModal 
            parentCloseModal={() => this.parentCloseModal()}
            SHOPIFY_CONFIG={this.props.SHOPIFY_CONFIG}
            gradient={this.gradient}
            products={this.state.cartProducts}
            page={this.state.checkoutPage}
            isAccountPage={this.state.showAccountMenu}
            isOpen={this.state.openedModalType ? true : false} />;
    } else if(this.state.openedModalType == 'buy'){
      modal = <BuyModal 
          parentCloseModal={() => this.parentCloseModal()} 
          SIZE_URL={this.props.SHOPIFY_CONFIG.configuration.size}
          product={this.state.currentProduct} 
          gradient={this.gradient}
          openCheckout={() => this.openCheckout()}
          isOpen={this.state.openedModalType ? true : false} />;
    }
    
    
    return (
      <LinearGradient colors={[this.gradient.top, this.gradient.bottom]} style={styles.loadView}>
        {subcontent}
        {modal}
      </LinearGradient>
    );
  }
}

