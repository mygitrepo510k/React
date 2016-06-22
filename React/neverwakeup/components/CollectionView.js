import InfiniteScrollView from 'react-native-infinite-scrollview';
import * as Animatable from 'react-native-animatable';

import Progress from './Progress';
import Empty from './Empty';

import _ from 'lodash';
import * as constants from '../constants';
import * as styles from '../styles';

import ProductItem from './ProductItem';
import DB from '../models';

import React, {Component} from "react";
import {TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, LayoutAnimation, TextInput, ListView, View, Text} from "react-native";

export default class CollectionView extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data: null,
        loaded: false
      }
  }

  componentDidMount(){
    this.fetchCollectionData();
  }

  filter(products = []) {
    return new Promise((res, rej) => {
      const filtered = products.filter( item => {
        return !_.isNull(item) && item.images.length > 0 
      })
      res(_.shuffle(filtered));
    })
  }
  
  fetchCollectionData() {
    fetch('https://'+this.props.SHOPIFY_CONFIG.shop+'/admin/products.json?collection_id='+this.props.collection.id, {
      headers: new Headers({
        'X-Shopify-Access-Token': this.props.SHOPIFY_CONFIG.access_token
      })
    })
      .then((response) => response.json())
      .then((responseData) => this.filter(responseData.products))
      .then((products) => 
      { 
          this.setState({
            data: products,
            loaded: true
          });
      }).done();
  }

  renderProducts(index) {
    return (
        <ProductItem 
          data={this.state.data[index]}
          openSizeSelection={(item) => this.props.openSizeSelection(item)} 
          openImageInfoModal={(item, type) => this.props.openImageInfoModal(item, type)}
          gradient={this.props.gradient} 
          index={index} />
    );
  }

  render(){
    var content = <Progress darkColorScheme={false} />;

    if(this.state.loaded){
       if(this.state.data.length < 1){
          content = <View style={{marginTop:100,opacity:0.8}}><Empty transparent={true} text="There's no product in this collection" /></View>;
       } else {
          content = 
                <Animatable.View animation='slideInRight' duration={400} style={{flex:1}}>
                  <InfiniteScrollView 
                    showsHorizontalScrollIndicator={false}
                    toIndex={this.state.data.length-1} 
                    fromIndex={0} 
                    horizontal={true} 
                    renderPage={(index) => this.renderProducts(index)}/>
                </Animatable.View>;
       }
    }

    return(
      <View style={{flex:1}}>
        {content}
      </View>
    )
  }
}