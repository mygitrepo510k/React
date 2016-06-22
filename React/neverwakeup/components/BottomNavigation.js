import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import { calculateCartTotal } from '../util';


import * as styles from '../styles';

import React, {Component} from "react";
import {TouchableOpacity, LayoutAnimation, View, Text} from "react-native";


export default class BottomNavigation extends Component {
	  constructor(props) {
    	super(props);
      this.state = {
        updated: false
      };
  	}

    componentWillReceiveProps(nextProps) {
      this.setState({
        updated: true
      });
    }

  	render() {
      var count = _.reduce(this.props.cartProducts, function(sum, n) {
        return sum + n.count;
      }, 0);

      var totalPrice = calculateCartTotal(this.props.cartProducts);
      var cartCount = null;

  		if(count > 0){
  			cartCount = <Animatable.View animation="slideInUp" duration={400} style={[styles.cartNavElement, {backgroundColor:this.props.gradient.top}]}>
							         <Text style={[styles.navText]}>{count} {count == 1 ? 'item':'items'}. Total: ${totalPrice}</Text>
						        </Animatable.View>
  		}

      var cartElement = <Animatable.View style={[styles.cartNav]} duration={400} delay={this.state.updated ? 0 : 600}  animation="slideInUp">
                          <Icon name="shopping-cart" size={30} color='white' />
                          {cartCount}
                        </Animatable.View>;
      if(this.state.updated){
          cartElement = <View style={[styles.cartNav]}>
                          <Animatable.View style={[styles.cartNav]} duration={400} animation="slideInDown">
                            <Icon name="shopping-cart" size={30} color='white' />
                          </Animatable.View>
                          {cartCount}
                        </View>;
      } 

  		return(
  			<View style={styles.nav}>
  				<TouchableOpacity onPress={() => this.props.toggleAccountMenu()} style={[styles.navElement]}>
  					<Animatable.View duration={400} delay={200} animation='slideInUp'>
              <Icon name="face" size={30} color='white' />
            </Animatable.View>
  				</TouchableOpacity>
          <TouchableOpacity onPress={this.props.backToCollections} style={[styles.navElement]}>
            <Animatable.View duration={400} animation='slideInUp' delay={300}>
              <Icon name="apps" size={30} color='white' />
            </Animatable.View>
          </TouchableOpacity>
  				<TouchableOpacity onPress={this.props.openCheckout} key={count} style={[styles.navElement]}>
  					{cartElement}
  				</TouchableOpacity>
  			</View>
  		);
  	}
}

