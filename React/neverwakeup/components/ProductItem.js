import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import HTMLView from 'react-native-htmlview';
import Triangle from 'react-native-triangle';
import _ from 'lodash';
import Progress from './Progress';
import Empty from './Empty';

import * as styles from '../styles';
import * as htmlStyles from '../htmlStyles';

import React, {Component} from "react";
import {TouchableOpacity, LayoutAnimation, Image, View, Text} from "react-native";

export default class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.regex = /(<([^>]+)>)/ig;
    this.state = {
      imageLoaded: false
    }
  }

  imageLoaded(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    this.setState({imageLoaded: true})
  }

  render() {

    var content = null;

    if(_.isUndefined(this.props.data) || this.props.data.images.length < 1){
      return null;
    }
    
    content = <View style={[styles.loadView]}>
                    <Progress darkColorScheme={true} />
                    <Image onLoad={() => this.imageLoaded()} source={{uri: this.props.data.images[0].src}}
                      style={{height:1,width:1}} />
                  </View>
    if(this.state.imageLoaded){
      content = 
              <Animatable.View animation='fadeIn'>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.openImageInfoModal(this.props.data, 'image')}>
                  <Image source={{uri: this.props.data.images[0].src}}
                    style={[styles.img,{justifyContent:'flex-end'}]} >
                      <LinearGradient style={{justifyContent:'flex-end',height:240}} colors={['transparent',this.props.gradient.top]}>
                        <TouchableOpacity style={styles.description} style={[styles.titleView]} activeOpacity={0.8} onPress={() => this.props.openImageInfoModal(this.props.data, 'description')}>
                          <Animatable.Text animation='slideInDown' delay={200} numberOfLines={1} style={[styles.title,{color:'#fff'}]}>
                            {_.startCase(this.props.data.title)}
                          </Animatable.Text>
                          <Animatable.Text animation='slideInUp' delay={400} style={{fontSize:16, marginTop:6, color:'#fff'}} numberOfLines={2}>
                            {this.props.data.body_html.replace(this.regex, '').trim()}
                          </Animatable.Text>
                        </TouchableOpacity>
                      </LinearGradient>
                  </Image>
                </TouchableOpacity>
              </Animatable.View>;
    }

    var priceFontSize = this.props.data.variants[0].price.replace('.00', '');
    var bottomMargin = 56;
    if(priceFontSize.length > 4){
      priceFontSize = 26;
      bottomMargin = 40;
    } else {
      if(priceFontSize.length < 4){
        priceFontSize = 42;
      } else {
        priceFontSize = 31;
      }
    }
    return(
        <View style={styles.page} key={this.props.index}>
          {content}
          <TouchableOpacity style={[styles.priceView]} onPress={() => this.props.openSizeSelection(this.props.data)}>
              <View style={{position:'absolute',bottom:0,right:0}}>
                <Triangle
                  width={136}
                  height={136}
                  color={this.props.gradient.bottom}
                  direction={'down-right'} />
              </View>
              <Animatable.View animation='slideInRight' delay={100} duration={500}>
                <Triangle
                  width={130}
                  height={130}
                  color={this.props.gradient.top}
                  direction={'down-right'} />
                  <Text style={{opacity:0.8,backgroundColor:'transparent',color:'white',position:'absolute',bottom:bottomMargin,right:8}}>BUY</Text>
                  <Text animation="slideInUp" style={[styles.clearView, styles.price, {fontSize: priceFontSize}]}>
                    <Text style={{fontSize:14}}>$</Text>{this.props.data.variants[0].price.replace('.00', '')}
                  </Text>
              </Animatable.View>
          </TouchableOpacity>
        </View>
    )
  }
}
