import Modal from 'react-native-modalbox';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';
// import SwipeableViews from 'react-swipeable-views/lib/index.native.scroll';

import * as Animatable from 'react-native-animatable';
import _ from 'lodash';
import HTMLView from 'react-native-htmlview';

import Progress from './Progress';
import * as htmlStyles from '../htmlStyles';
import * as styles from '../styles';
import * as constants from '../constants';

import React, {Component} from "react";
import {TouchableHighlight, TouchableOpacity, LayoutAnimation, ScrollView, Dimensions, View, Image, Text, WebView} from "react-native";

const _state = {
      imageIndex: 1,
      setIndex: true,
      loaded: false
    }
export default class ImageInfoModal extends Component {

  constructor(props) {
    super(props);
    this.width = Dimensions.get('window').width-70;
    this.state = _state
  }

  componentDidMount() {
     var index = this.props.type == 'image' ? this.state.imageIndex : 0;
     this.setState({
      imageIndex: index,
      loaded: this.props.type == 'image' ? false : true
    });      
  }

  modalClosed(){
    this.props.parentCloseModal();
  }

  closeModal(){
    if(this.refs.modal){
      this.refs.modal.close();
    }
  }

  imageLoaded(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
      this.setState({loaded: true})
    
  }

  changeImageIndex(index){
    this.setState({imageIndex: Math.floor(index), setIndex:false});
  }

  navPress(e){
    var pressPosition = e.nativeEvent.pageX;
    var widthPerBox = Math.floor(this.width/this.props.product.images.length);
    var pressBox = Math.floor((pressPosition + (widthPerBox/3)) / widthPerBox);

    this.setState({imageIndex: pressBox, setIndex: true});
  }

  render() {
    var firstImageUrl = this.props.product.images.length > 1 ? this.props.product.images[1].src : this.props.product.images[0].src;
    if(this.state.loaded){
      var slides = [];
      const HTML = `
        <!DOCTYPE html>\n
        <html>
          <head>
            <title>`+this.props.product.title+`</title>
            <meta http-equiv="content-type" content="text/html; charset=utf-8">
            <meta name="viewport" content="initial-scale=1, maximum-scale=1">
            <style type="text/css">
              body {
                margin: 0;
                padding: 0;
                width:auto;
                font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
                font-weight: 300;
                background: #fff;
              }
            </style>
          </head>
          <body>
          `+ this.props.product.body_html +`
          </body>
        </html>
        `;
console.log(this.props.product.body_html);
        /*<ScrollView >
                              <Text style={[styles.title]}>{this.props.product.title}</Text>
                              <HTMLView
                                value={this.props.product.body_html.trim()}
                                stylesheet={htmlStyles} />
                          </ScrollView>*/
      var description = <View style={[styles.modalInfoContainer]} key='description'>
                          <WebView
                            style={{
                              height:Dimensions.get('window').height-80,
                              width:Dimensions.get('window').width-60
                            }}
                            source={{html: HTML}}
                            scalesPageToFit={true}
                          />
                        </View>;
      
      slides.push(description);
      
      _.each(this.props.product.images, function(item, i, k){
          slides.push(<View key={i} animation='fadeIn' style={{flex:1}}>
                        <Image resizeMode='cover' source={{uri: item.src}} style={styles.imgModal} />
                      </View>);  
      });

      var __opacity = 0.6;
      if(this.state.imageIndex < 1){
          __opacity = 0;
      } else if(this.state.imageIndex == this.props.product.images.length){
          __opacity = 1;
      }
      
      var navigation = <TouchableHighlight underlayColor='transparent' style={{opacity:__opacity,position:'absolute',alignSelf:'center',width:this.width,bottom:22,left:0,backgroundColor:'white'}} onPress={(e) => this.navPress(e)}>
                        <View style={{width:Math.floor(this.width/slides.length*(this.state.imageIndex+1)),backgroundColor:this.props.gradient.top,height:50}}></View>
                      </TouchableHighlight>;
      if(this.props.product.images.length < 2){
          navigation = null;
      }

      var content = <Animatable.View animation='fadeIn' duration={400} style={{flex:1}}>
                      <SwipeableViews
                        index={this.state.setIndex ? this.state.imageIndex : null}
                        onSwitching={(index) => this.changeImageIndex(index)}>
                       {slides}
                      </SwipeableViews>
                      {navigation}
                      <TouchableOpacity onPress={() => this.closeModal()} style={{opacity:1,backgroundColor:this.props.gradient.top,justifyContent:'center',height:50,position:'absolute',width:50,bottom:22,right:0}}>
                        <Text style={[{fontSize:16,textAlign:'center',color:'#fff'}]}>close</Text>
                      </TouchableOpacity>
                    </Animatable.View>;
    } else {
      content = <View>
                  <Progress darkColorScheme={false} />
                  <Image onLoad={() => this.imageLoaded()} source={{uri: firstImageUrl}}
                    style={{height:1,width:1}} />
                </View>;
    }
    
    return(
        <Modal 
          onClosed={() => this.modalClosed()} 
          ref={"modal"} 
          isOpen={this.props.isOpen} 
          swipeToClose={false} 
          backdropColor={this.props.gradient.top} 
          style={[styles.modal,
            {
              backgroundColor:this.state.imageIndex < 1 ? 'white' : 'transparent',
              height:Dimensions.get('window').height-80}]
            }>
          {content}
        </Modal>
    )
  }
}