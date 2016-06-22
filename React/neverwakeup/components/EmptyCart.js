import * as Animatable from 'react-native-animatable';
import * as styles from '../styles';

import React, {Component} from "react";
import {TouchableHighlight, View, Text} from "react-native";

export default class EmptyCart extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View>
        <View style={styles.modalInfoContainer}>
          <Text style={styles.title}>Checkout</Text>
          <View style={{marginTop:16, marginBottom:6}}>
             <Text style={styles.normalText}>Your shopping cart is empty. Add some products and come back later.</Text>
          </View>
        </View>
        <View style={[styles.actionButtonContainer]}>
          <TouchableHighlight onPress={() => this.props.modalRef.close()} style={[styles.actionButton]}>
            <Animatable.View style={{paddingVertical:20,backgroundColor:this.props.gradient.bottom}} duration={500} animation="fadeIn">
              <Animatable.Text delay={50} animation='fadeIn' style={styles.actionButtonText}>Go back</Animatable.Text>
            </Animatable.View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
                  
                  