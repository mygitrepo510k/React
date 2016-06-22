import Icon from 'react-native-vector-icons/EvilIcons';
import * as styles from '../styles';
import DB from '../models';
import Progress from './Progress';
import Empty from './Empty';
import _ from 'lodash';
import moment from 'moment';

import * as Animatable from 'react-native-animatable';

import React, {Component} from "react";
import {View, Text, ListView, TouchableHighlight} from "react-native";

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        orders: null,
        dataSource: this.ds.cloneWithRows([])
    }
  }

  getCustomerId(email){
  	fetch('https://'+this.props.SHOPIFY_CONFIG.shop+'/admin/customers/search.json?query=email:'+email, {
      headers: new Headers({
        'X-Shopify-Access-Token': this.props.SHOPIFY_CONFIG.access_token
      })
    })
    .then((response) => response.json())
    .then((customer) => 
    { 
    	if(customer.customers.length < 1){
    		this.setState({
    			orders: []
    		})
    	} else {
    		var customerID = customer.customers[0].id;
    		this.getCustomerOrders(customerID);	
    	}
    }).done();
  }

  getCustomerOrders(id){
  	fetch('https://'+this.props.SHOPIFY_CONFIG.shop+'/admin/orders.json?customer_id='+id, {
      headers: new Headers({
        'X-Shopify-Access-Token': this.props.SHOPIFY_CONFIG.access_token
      })
    })
    .then((response) => response.json())
    .then((orders) => 
    { 
    	this.setState({
    		orders: orders.orders,
    		dataSource: this.ds.cloneWithRows(orders.orders)
    	});
    }).done();
  }

  componentDidMount(){
  	DB.write(() => {
      let cart = DB.objects('Cart');
      let BillingAddress = DB.objects('BillingAddress');
      this.getCustomerId(BillingAddress[0].email);
    });
  	
  }

  orderRow(order, j, index){
    var animation = 'slideInRight';
    var delay = (index+1)*10;

    var orderTitle = '';
    _.each(order.line_items, function(item, i){
    	orderTitle += item.name;
      if(i < order.line_items.length - 1){
        orderTitle += ', ';
      }
    });

    var statusText = '';
    if(order.fulfillment_status){
    	statusText = <View style={{flexDirection:'row'}}><Icon name="check" style={styles.modalButtonIcon} size={20} color={this.props.gradient.top} /><Text style={[styles.statusText,{color:this.props.gradient.top}]}>Shipped.</Text></View>;
    } else {
    	if(order.financial_status === 'paid'){
    		statusText = <View style={{flexDirection:'row'}}><Icon name="clock" style={styles.modalButtonIcon} size={20} color={this.props.gradient.bottom} /><Text style={[styles.statusText,{color:this.props.gradient.bottom}]}>Paid. Haven't shipped.</Text></View>;
    	} else {
    		statusText = <View style={{flexDirection:'row'}}><Icon name="clock" style={styles.modalButtonIcon} size={20} color={this.props.gradient.bottom} /><Text style={[styles.statusText,{color:this.props.gradient.bottom}]}>Payment is still pending.</Text></View>;
    	}
    }

    
    var time = <Text style={[styles.lightText]}>{moment(order.created_at.substring(0,10)).startOf('hour').fromNow()}</Text>;
    var price = <Text style={[styles.lightText]}>Total: ${order.total_price}</Text>;
    var status = <View style={styles.orderStatus}>{statusText}</View>;
    var orderContent = <View>
    						<Text numberOfLines={1} style={styles.subTitle}>{orderTitle}</Text>
    						{time}
    						{price}
    						{status}
    					</View>;
    return( 
      <View style={{flex:1}}>
	    <Animatable.View 
	        duration={400} 
	        delay={delay} 
	        animation={animation} 
	        style={styles.cartItem}>
	          {orderContent}
	    </Animatable.View>
      </View>
    );
    
  }

  render(){
	var content = <View style={styles.modalInfoContainer}><Progress darkColorScheme={true} /></View>;
	if(this.state.orders){
		if(this.state.orders.length < 1){
			content = <View>
						  <View style={[styles.modalInfoContainer,{marginBottom:6}]}>
							 <Empty transparent={false} text="You haven't place any orders yet. Start shopping!" />
						  </View>
						  <View style={[styles.actionButtonContainer]}>
					          <TouchableHighlight onPress={this.props.modalRef.close} style={[styles.actionButton,{flex:3}]}>
					            <Animatable.View duration={400} delay={100} animation='slideInLeft' style={[styles.modalButton, {backgroundColor:this.props.gradient.bottom}]}>
					              <Animatable.Text duration={400} delay={400} animation='fadeIn' style={styles.actionButtonText}>Go back</Animatable.Text>
					            </Animatable.View>
					          </TouchableHighlight>
					      </View>
				      </View>
					  
		} else {
			content = <View style={styles.modalInfoContainer}>
						<Text style={[styles.title]}>Orders</Text>
						<View style={styles.sizeBoxContainer}>
							<ListView
				                style={{flex:1, height:400}}
				                dataSource={this.state.dataSource}
				                renderRow={this.orderRow.bind(this)} />
	                	</View>
                	 </View>;	
		}
	}
  	return(content)
  }
}