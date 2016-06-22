import Icon from 'react-native-vector-icons/EvilIcons';

import * as styles from '../styles';

import React, {Component} from "react";
import {View, Text} from "react-native";

export default class Empty extends Component {
  constructor(props) {
      super(props);
      this.state = {
      }
  }
  render(){
  	return(
  		<View style={styles.empty}>
	      <Icon style={{backgroundColor:'transparent'}} name='close' size={40} color={this.props.transparent ? 'white' : '#bbb'} />
	      <Text style={[styles.emptyText,{color:this.props.transparent ? 'white' : '#aaa'}]}>Sorry</Text>
	      <Text style={[styles.emptyTextDetail,{color:this.props.transparent ? 'white' : '#aaa'}]}>{this.props.text}</Text>
	    </View>
  	)
  }
}