import * as Animatable from 'react-native-animatable';
import * as ProgressNative from 'react-native-progress';
import * as styles from '../styles';

import React, {Component} from "react";
import {View, Text} from "react-native";


export default class Progress extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Animatable.View animation='fadeIn' style={styles.center}>
        <Animatable.View iterationCount='infinite' delay={100} animation='pulse' style={[styles.progressOuterCircle,{borderColor: this.props.darkColorScheme ? '#ccc' : '#fff'}]}>
          <ProgressNative.CircleSnail  
            color={this.props.darkColorScheme ? '#aaa' : '#fff'} 
            size={80} 
            thickness={40}
            style={{alignSelf:'center',opacity:0.6}}
            indeterminate={true}>
          </ProgressNative.CircleSnail>
        </Animatable.View>
      </Animatable.View>
    );
  }
}
                  
                  