import Progress from './Progress';
import * as styles from '../styles';

import React, {Component} from "react";
import {View, Image, LayoutAnimation} from "react-native";


export default class RemoteImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  imageLoaded(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({loaded: true})
  }

  render(){
    var content = <View style={this.props.style}>
                    <Progress darkColorScheme={true} />
                    <Image onLoad={() => this.imageLoaded()} 
                    source={{uri: this.props.url}} 
                    style={{height:1,width:1}} />            
                  </View>;
    if(this.state.loaded){
      const url = this.props.url.replace('.jpg', '_large.jpg');
      content = <Image resizeMode='cover' source={{uri: url}} 
                    style={this.props.style} />
    } 
    return(content);
  }
}
                  
                  