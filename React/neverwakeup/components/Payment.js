import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Progress from './Progress';
import _ from 'lodash';
import * as styles from '../styles';

import { ChargeCreditCard } from './Stripe';
import { ShopifyCheckout } from './ShopifyCheckout';

import { detectCardType, ccFormat } from '../util';
import DB from '../models';

import React, {Component} from "react";
import {TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, LayoutAnimation, TextInput, ListView, Vibration, View, Text} from "react-native";


export default class Payment extends Component {
	constructor(props) {
	    super(props);
	    this.table = 'CreditCard';
	    this.timer = null;
	    this.state = {
	    	cvc: '',
	    	expiry: '',
	    	cardNumber: '',
	    	rememberCC: true,
	    	cardType: '',
	    	submitted: 0,
	    	failedValidation: [],
	    	saveButtonText: 'Save',
	    	focus: 'cardNumber'
	    }
	}

	componentWillUnmount () {
		clearTimeout(this.timer);
	}

	checkbox(){
		this.setState({rememberCC : this.state.rememberCC ? false : true});
		this.saveFormValues();
	}

	submitOrder(){
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({submitted: 1});
		
      	let cart = DB.objects('Cart');
      	let shipping = DB.objects('ShippingAddress');
      	let billing = DB.objects('BillingAddress');
      	let cc = DB.objects('CreditCard');
      	console.log(cart, shipping, billing, cc);
		this.timer = setTimeout(() => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			this.setState({submitted: 2});
		}, 650);

		ShopifyCheckout(
			cart, 
			shipping[0], 
			billing[0], 
			cc[0], 
			this.props.SHOPIFY_CONFIG.shop,
  			this.props.SHOPIFY_CONFIG.access_token,
  			this.props.SHOPIFY_CONFIG.configuration.mobileApiKey,
  			this.props.SHOPIFY_CONFIG.configuration.channelId,
  			this.props.SHOPIFY_CONFIG.info.currency,
			(response)=> {
			if(response.ok){
				LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
				//DB.delete(cart);
				//this.props.goTo('confirmedOrder');
			} else {
				LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
				//this.props.goTo('problemOrder');
			}
		});
		/*

		//STRIPE option
		ChargeCreditCard(
			cart, 
			shipping[0], 
			billing[0], 
			cc[0], 
			(response)=> {
				if(response.ok){
					LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
					DB.delete(cart);
					this.props.goTo('confirmedOrder');
				} else {
					LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
					this.props.goTo('problemOrder');
				}
			});
		*/	
	}

	componentDidMount(){
		DB.write(() => {
          let creditCard = DB.objects(this.table);
          if(creditCard.length > 0){
          	this.setState(creditCard[0]);  	
          } 
        });
	}

	saveFormValues(saveBeforeGoingToNextPage){
		var state = this.state;

		DB.write(() => {
			let creditCard = DB.objects(this.table);
			if(this.state.rememberCC){
				if(creditCard.length > 0){
					_.forOwn(creditCard[0], (value, key) => { 
						if(key == 'rememberCC' || 
						   key == 'focus' ||
						   key == 'failedValidation' ||
						   key == 'submitted' ||
						   key == 'saveButtonText'){
							return false;
						}
						if(saveBeforeGoingToNextPage){
							if(_.isEmpty(this.state[key])){
								if(key == 'cardNumber' ||
								   key === 'expiry' ||
								   key === 'cvc'){
									this.state.failedValidation.push(key);
								}
							} else {
								_.pull(this.state.failedValidation, key);
							}
						}
						creditCard[0][key] = state[key];
					});
				} else {
					DB.create(this.table, state);	
				}
			} else {
				DB.delete(creditCard);
			}

			//Check if shipping and billing address are the same
			// So we can decide the previous destination
			if(saveBeforeGoingToNextPage){
				if(saveBeforeGoingToNextPage == 'prev'){
					let shippingAddress = DB.objects('ShippingAddress');
					var prevPage = 'shippingAddress';
					if(shippingAddress.length > 0){
						if(!shippingAddress[0].sameAddress){
							prevPage = 'billingAddress';
						} 
					}
					this.props.goTo(prevPage);
				} else {
					if(this.state.failedValidation.length > 0){
						Vibration.vibrate();
						this.setState({failedValidation: this.state.failedValidation});
					} else {
						if(saveBeforeGoingToNextPage == 'save'){
							this.setState({saveButtonText: 'Saving...'});
							this.timer = setTimeout(() => {
								this.setState({saveButtonText: 'Saved'});
								this.props.modalRef.close();
							}, 500);
						} else {
							this.submitOrder();	
							//var nextPage = 'review';
							//this.props.goTo(nextPage);
						}
					}
				}
			}
		});
	}

	updateValue(type, string){
		if(type === 'cvc'){
			this.setState({cvc:string});
		} else if (type === 'cardNumber'){
			var _cardType = '';
			if(string.length > 4){
				_cardType = detectCardType(parseInt(string));
			}
		    this.setState({
		    	cardNumber: string,
		    	cardType: _cardType 
		    });
		} else if (type === 'expiry'){
			var val = string, temp_val;

			if(val.indexOf('/') > -1){
				temp_val = val;
			} else if(val == 1 && val.length == 1){
				temp_val = val;
			} else if(val > 1 && val < 10 && val.length == 1) {
		        temp_val = "0" + val + "/";
		    } else if (val >= 1 && val < 10 && val.length == 2) {
		        temp_val = val + "/";
		    } else if(val > 9 && val.length == 2) {
		    	//make sure month is < 12
			    temp_val = val > 12 ? '12' : val;
			    temp_val = temp_val + "/";
		    } 

			this.setState({
				expiry: temp_val
			})
		}
	}

	focusInput(input){
		if(this.refs[input]){
			this.refs[input].focus();
		}
	}

	isValidateStyle(type){
		var flag = _.find(this.state.failedValidation, function(item){return item === type});
		return flag ? {backgroundColor: '#ffffcc'} : null;
	}

	render(){
		if(this.state.submitted == 2){
			return(
				<Animatable.View style={{alignItems:'center'}} duration={400} animation='zoomIn'>
					<Progress darkColorScheme={true} />
                    <Text style={[styles.title, {color:'#999',marginTop:20}]}>
                    	Processing your order...
                    </Text>
				</Animatable.View>
			);
		} 

		var buttons = <View style={[styles.actionButtonContainer]}>
				          <TouchableHighlight onPress={() => this.saveFormValues('save')} style={[styles.actionButton,{flex:3}]}>
				            <Animatable.View duration={550} delay={480} animation={this.state.submitted == 1 ? 'bounceOutRight' : null} style={[styles.modalButton, {backgroundColor:this.props.gradient.top}]}>
				              <Animatable.Text duration={400} delay={this.state.submitted == 1 ? 0 : 300} animation={this.state.submitted == 1 ? 'fadeOut' : 'fadeIn'} style={styles.actionButtonText}>{this.state.saveButtonText}</Animatable.Text>
				            </Animatable.View>
				          </TouchableHighlight>
				        </View>;

		var checkboxButton = <View style={{height:40}}></View>;
		
		if(!this.props.isAccountPage){
			checkboxButton = <TouchableWithoutFeedback onPress={() => this.checkbox()}>
								 <Animatable.View duration={600} delay={400} animation={this.state.submitted == 1 ? 'bounceOutRight' : null} View style={[styles.modalInfoContainer, {alignItems:'center',flexDirection:'row',paddingBottom:40}]}>
								 	<View style={[styles.checkbox]}>
								 		{this.state.rememberCC ? <View style={[styles.checkboxChecked, {backgroundColor:this.props.gradient.top}]} /> : null}
								 	</View>
								 	<Text style={{color:this.state.rememberCC ? '#333' : '#aaa'}}>Remember my card</Text>
								 </Animatable.View>
							 </TouchableWithoutFeedback>;

			buttons =  <View style={[styles.actionButtonContainer]}>
				    	  <TouchableHighlight onPress={() => this.saveFormValues('prev')} style={[styles.actionButton,{flex:1}]}>
				            <Animatable.View duration={400} delay={350} animation={this.state.submitted == 1 ? 'bounceOutLeft' : null} View style={[styles.modalButton, {backgroundColor:this.props.gradient.bottom}]}>
					            <Animatable.View delay={300} duration={400} animation={this.state.submitted == 1 ? 'fadeOut' : 'slideInRight'}>
					              <Icon name="navigate-before" style={styles.modalButtonIcon} size={36} color='white' />
					            </Animatable.View>
				            </Animatable.View>
				          </TouchableHighlight>
				          <TouchableHighlight onPress={() => this.saveFormValues('next')} style={[styles.actionButton,{flex:3}]}>
				            <Animatable.View duration={550} delay={480} animation={this.state.submitted == 1 ? 'bounceOutRight' : null} style={[styles.modalButton, {backgroundColor:this.props.gradient.top}]}>
				              <Animatable.Text duration={400} delay={this.state.submitted == 1 ? 0 : 300} animation={this.state.submitted == 1 ? 'fadeOut' : 'fadeIn'} style={styles.actionButtonText}>Review Order</Animatable.Text>
				              <Animatable.View duration={400} delay={this.state.submitted == 1 ? 100 : 300} animation={this.state.submitted == 1 ? 'fadeOut' : 'slideInLeft'}><Icon name="navigate-next" style={styles.modalButtonIcon} size={36} color='white' /></Animatable.View>
				            </Animatable.View>
				          </TouchableHighlight>
				        </View>;
		}
		return(
			<View>
				<View style={[styles.modalInfoContainer, {paddingBottom:0}]}>
					<Animatable.Text duration={400} delay={600} animation={this.state.submitted == 1 ? 'bounceOutUp' : null} style={styles.title}>
						<Text>{this.state.cardType == '' ? 'Credit' : _.capitalize(this.state.cardType)}</Text> Card
					</Animatable.Text>
				</View>
				<Animatable.View duration={600} delay={500} animation={this.state.submitted == 1 ? 'bounceOutLeft' : null} style={[styles.formContainer]}>
		          	<TouchableOpacity
		          		onPress={() => this.focusInput('cardNumber')}
		          		style={[styles.formInputRowContainer, {borderTopWidth:0}, this.isValidateStyle('cardNumber'), this.state.focus == 'cardNumber' ? {backgroundColor:'#eee'}: null]}>
			          	<View>  
					    	<Text style={styles.formInputPlaceholder}>Card Number</Text>
						    <TextInput
							    ref='cardNumber'
							    keyboardType='numeric'
							    maxLength={this.state.cardType === 'AMEX' ? 17 : 19}
							    style={styles.formInputRow}
							    onEndEditing={() => this.saveFormValues()}
							    onFocus={() => this.setState({focus: 'cardNumber'})}
							    onChangeText={(text) => this.updateValue('cardNumber', text)}
						    	value={ccFormat(this.state.cardNumber, this.state.cardType)} />
						</View>
					</TouchableOpacity>
					<View style={{flexDirection:'row'}}> 
						<TouchableOpacity
			          		onPress={() => this.focusInput('expiry')}
			          		 style={[styles.formInputRowContainer,{borderRightWidth:1}, this.isValidateStyle('expiry'), this.state.focus == 'expiry' ? {backgroundColor:'#eee'}: null]}>
				        	<View>  
			            	  <Text style={styles.formInputPlaceholder}>Expiry Date</Text>
			            	  <TextInput
			            	  	ref='expiry'
			            	  	keyboardType='numeric'
			            	  	placeholder='mm/yy'
			            	  	clearTextOnFocus={true}
			            	  	maxLength={7}
							    style={styles.formInputRow}
							    onEndEditing={() => this.saveFormValues()}
							    onFocus={() => this.setState({focus: 'expiry'})}
							    onChangeText={(text) => this.updateValue('expiry', text)}
							    value={this.state.expiry} />
							</View>
						</TouchableOpacity>
						<TouchableOpacity
			          		onPress={() => this.focusInput('cvc')}
			          		 style={[styles.formInputRowContainer, this.isValidateStyle('cvc'), this.state.focus == 'cvc' ? {backgroundColor:'#eee'}: null]}>
				        	<View>  
			            	  <Text style={styles.formInputPlaceholder}>CVC</Text>
			            	  <TextInput
							    style={styles.formInputRow}
							    ref='cvc'
							    keyboardType='numeric'
							    maxLength={this.state.cardType === 'AMEX' ? 4 : 3}
							    onEndEditing={() => this.saveFormValues()}
							    onFocus={() => this.setState({focus: 'cvc'})}
							    onChangeText={(text) => this.updateValue('cvc', text)}
							    value={this.state.cvc} />
							</View>
						</TouchableOpacity>
    				</View>
				 </Animatable.View>

				{checkboxButton}

		    	{buttons}
        	</View>
		);


	}

}