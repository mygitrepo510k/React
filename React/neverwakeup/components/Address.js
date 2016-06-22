import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

import _ from 'lodash';

import * as styles from '../styles';
import DB from '../models';

import React, {Component} from "react";
import {TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, LayoutAnimation, TextInput, Vibration, ListView, View, Text} from "react-native";


export default class Address extends Component {
	constructor(props) {
	    super(props);
		this.table = null;
		this.timer = null;
	    this.state = {
	    	name: '',
	    	email: '',
	    	address: '',
	    	city: '',
	    	state: '',
	    	zipcode: '',
	    	country: 'USA',//props.SHOPIFY_CONFIG.info.country_name,
	    	sameAddress: false,
	    	failedValidation: [],
	    	focus: '',
	    	saveButtonText: 'Save'
	    }
	}

	componentWillUnmount () {
		clearTimeout(this.timer);
	}

	componentWillReceiveProps(nextProps) {
		this.table = nextProps.type == 'shipping' ? 'ShippingAddress' : 'BillingAddress';
	}
	
	componentDidMount(){
		this.table = this.props.type == 'shipping' ? 'ShippingAddress' : 'BillingAddress';
		DB.write(() => {
          let address = DB.objects(this.table);
          if(address.length > 0){
          	this.setState(address[0]);  	
          }
        });
	}

	checkbox(){
		this.setState({
			sameAddress : this.state.sameAddress ? false : true
		}, this.saveFormValues);
	}

	copyShippingToBilling(shipping){
		let billing = DB.objects('BillingAddress');
		_.forOwn(billing[0], (value, key) => { 
			billing[0][key] = shipping[0][key];
		});
	}
	
	saveFormValues(saveBeforeGoingToNextPage){
		var state = this.state;
		DB.write(() => {
			let shipping = DB.objects(this.table);
			console.log(shipping);
			if(shipping.length > 0){
				_.forOwn(shipping[0], (value, key) => { 
					if(key == 'focus' ||
					   key == 'saveButtonText'){
						return false;
					}
					//only show validation error when user trying to go to the next step
					//this is also where you set the validation you wanna check
					if(saveBeforeGoingToNextPage){
						if(_.isEmpty(this.state[key])){
							if(key !== 'sameAddress' &&
							   key === 'name' ||
							   key === 'address' ||
							   key === 'email' ||
							   key === 'zipcode' ||
							   key === 'country'){
								this.state.failedValidation.push(key);
							}
						} else {
							_.pull(this.state.failedValidation, key);
						}
					}
					shipping[0][key] = state[key];
					if(this.state.sameAddress == true){
						this.copyShippingToBilling(shipping);
					}
				});
			} else {
				console.log(this.table, state);
				DB.create(this.table, state);	
			}
			
			if(saveBeforeGoingToNextPage){
				if(saveBeforeGoingToNextPage == 'prevPage'){
					var prevPage = this.props.type == 'shipping' ? 'cartList' : 'shippingAddress';
					this.props.goTo(prevPage);
				}  else {
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
							var nextPage = 'payment';
							if(this.props.type == 'shipping'){
								nextPage = this.state.sameAddress ? 'payment' : 'billingAddress';
							}
							this.props.goTo(nextPage);
						}
					}
				}
			}
		});
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
		var nextButtonText = 'Credit Card';
		var checkbox = <View style={{paddingVertical:16}} />;
		
		if(this.props.type == 'shipping'){
			nextButtonText = this.state.sameAddress ? 'Credit Card' : 'Billing Address';
			checkbox = <TouchableWithoutFeedback onPress={() => this.checkbox()}>
							 <View style={[styles.modalInfoContainer, {alignItems:'center',flexDirection:'row',paddingVertical:16}]}>
							 	<View style={[styles.checkbox]}>
							 		{this.state.sameAddress ? <View style={[styles.checkboxChecked, {backgroundColor:this.props.gradient.top}]} /> : null}
							 	</View>
							 	<Text style={{color:this.state.sameAddress ? '#333' : '#aaa'}}>Use same address for billing</Text>
							 </View>
						 </TouchableWithoutFeedback>;
		} 

		

		if(!this.props.isAccountPage){
			var buttons = <View style={[styles.actionButtonContainer]}>
				    	  <TouchableHighlight onPress={() => this.saveFormValues('prevPage')} style={[styles.actionButton,{flex:1}]}>
				            <View style={[styles.modalButton, {backgroundColor:this.props.gradient.bottom}]}>
					            <Animatable.View delay={400} duration={400} animation="slideInRight">
					              <Icon name="navigate-before" style={styles.modalButtonIcon} size={36} color='white' />
					            </Animatable.View>
				            </View>
				          </TouchableHighlight>
				          <TouchableHighlight onPress={() => this.saveFormValues('nextPage')} style={[styles.actionButton,{flex:3}]}>
				            <View key={this.state.sameAddress} style={[styles.modalButton, {backgroundColor:this.props.gradient.top}]} duration={500} animation="fadeIn">
				              <Animatable.Text duration={400} delay={300} animation="fadeIn" style={styles.actionButtonText}>{nextButtonText}</Animatable.Text>
				              <Animatable.View duration={400} delay={300} animation="slideInLeft"><Icon name="navigate-next" style={styles.modalButtonIcon} size={36} color='white' /></Animatable.View>
				            </View>
				          </TouchableHighlight>
				        </View>
		} else {
			//If this is an account page
			nextButtonText = this.state.sameAddress || this.props.type == 'billing' ? this.state.saveButtonText : 'Billing Address';
			var prev = null;
			if(this.props.type == 'billing'){
				prev = <TouchableHighlight onPress={() => this.saveFormValues('prevPage')} style={[styles.actionButton,{flex:1}]}>
				            <View style={[styles.modalButton, {backgroundColor:this.props.gradient.bottom}]}>
					            <Animatable.View delay={400} duration={400} animation="slideInRight">
					              <Icon name="navigate-before" style={[styles.modalButtonIcon]} size={36} color='white' />
					            </Animatable.View>
				            </View>
				          </TouchableHighlight>;
			}
			var buttons = <View style={[styles.actionButtonContainer]} key={this.state.sameAddress}>
							  {prev}
					          <TouchableHighlight onPress={() => this.saveFormValues(this.state.sameAddress || this.props.type == 'billing' ? 'save' : 'nextPage')} style={[styles.actionButton,{flex:3}]}>
					            <Animatable.View duration={550} delay={480} animation={this.state.submitted == 1 ? 'bounceOutRight' : null} style={[styles.modalButton, {paddingVertical:25,backgroundColor:this.props.gradient.top}]}>
					              <Animatable.Text duration={400} delay={this.state.submitted == 1 ? 0 : 300} animation={this.state.submitted == 1 ? 'fadeOut' : 'fadeIn'} style={styles.actionButtonText}>{nextButtonText}</Animatable.Text>
								</Animatable.View>
					          </TouchableHighlight>
					        </View>;
		}

		return(
			<View>
				<View style={[styles.modalInfoContainer, {paddingBottom:0}]}>
					<Text style={styles.title}>
						{_.capitalize(this.props.type)} Address
					</Text>
				</View>
				<View style={styles.formContainer}>
		          <View style={{flexDirection:'row'}}> 
		          		<TouchableOpacity 
		          		onPress={() => this.focusInput('name')}
		          		style={[styles.formInputRowContainer,{borderRightWidth:1, borderTopWidth:0}, this.isValidateStyle('name'), this.state.focus == 'name' ? {backgroundColor:'#eee'}: null]}>
			            	<View>  
			            	  <Text style={[styles.formInputPlaceholder]}>Full Name</Text>
			            	  <TextInput
							    style={[styles.formInputRow]}
							    ref='name'
							    onEndEditing={() => this.saveFormValues()}
							    onFocus={() => this.setState({focus: 'name'})}
							    onChangeText={(text) => this.setState({name:text})}
							    value={this.state.name} />
							</View>
						</TouchableOpacity>

						<TouchableOpacity 
		          		 onPress={() => this.focusInput('email')}
		          		 style={[styles.formInputRowContainer, {borderTopWidth:0}, this.isValidateStyle('email'), this.state.focus == 'email' ? {backgroundColor:'#eee'}: null]}>
						    <View>  
						    	<Text style={styles.formInputPlaceholder}>{_.capitalize('Email')}</Text>
							    <TextInput
							    keyboardType='email-address'
							    ref='email'
							    autoCapitalize='none'
							    onEndEditing={() => this.saveFormValues()}
							    onFocus={() => this.setState({focus: 'email'})}
							    style={styles.formInputRow}
							    onChangeText={(text) => this.setState({email:text})}
							    value={this.state.email} />
							</View>
						</TouchableOpacity>
    				</View>
    				<TouchableOpacity
    				 onPress={() => this.focusInput('address')}
    				 style={[styles.formInputRowContainer, {borderBottomWidth:0}, this.isValidateStyle('address'), this.state.focus == 'address' ? {backgroundColor:'#eee'}: null]}>
	    				<View>  
					    	<Text style={styles.formInputPlaceholder}>{_.capitalize('Address')}</Text>
						    <TextInput
						    style={styles.formInputRow}
						    ref='address'
						    onEndEditing={() => this.saveFormValues()}
						    onFocus={() => this.setState({focus: 'address'})}
						    onChangeText={(text) => this.setState({address:text})}
						    value={this.state.address} />
						</View>
					</TouchableOpacity>
					<View style={{flexDirection:'row'}}> 
						<TouchableOpacity
						  onPress={() => this.focusInput('city')}
						  style={[styles.formInputRowContainer,{borderRightWidth:1}, this.state.focus == 'city' ? {backgroundColor:'#eee'}: null]}>
			            	<View>  
			            	  <Text style={styles.formInputPlaceholder}>{_.capitalize('City')}</Text>
			            	  <TextInput
							    style={styles.formInputRow}
							    ref='city'
							    onEndEditing={() => this.saveFormValues()}
							    onFocus={() => this.setState({focus: 'city'})}
							    onChangeText={(text) => this.setState({city:text})}
							    value={this.state.city} />
							</View>
						</TouchableOpacity>
						<TouchableOpacity
						  onPress={() => this.focusInput('state')}
 						  style={[styles.formInputRowContainer, this.state.focus == 'state' ? {backgroundColor:'#eee'}: null]}>
							<View>  
			            	  <Text style={styles.formInputPlaceholder}>{_.capitalize('State')}</Text>
			            	  <TextInput
							    style={styles.formInputRow}
							    ref='state'
							    onEndEditing={() => this.saveFormValues()}
							    onFocus={() => this.setState({focus: 'state'})}
							    onChangeText={(text) => this.setState({state:text})}
							    value={this.state.state} />
							</View>
						</TouchableOpacity>
    				</View>
					<View style={{flexDirection:'row'}}> 
						<TouchableOpacity
			  		      onPress={() => this.focusInput('zipcode')}
						  style={[styles.formInputRowContainer,{borderRightWidth:1}, this.isValidateStyle('zipcode'), this.state.focus == 'zipcode' ? {backgroundColor:'#eee'}: null]}>
							<View>  
						    	<Text style={styles.formInputPlaceholder}>{_.capitalize('Zipcode')}</Text>
							    <TextInput
							    style={styles.formInputRow}
							    ref='zipcode'
							    onEndEditing={() => this.saveFormValues()}
							    onFocus={() => this.setState({focus: 'zipcode'})}
							    onChangeText={(text) => this.setState({zipcode:text})}
							    value={this.state.zipcode} />
							</View>
						</TouchableOpacity>
						
						<TouchableOpacity
			  		      onPress={() => this.focusInput('country')}
						  style={[styles.formInputRowContainer, this.isValidateStyle('country'), this.state.focus == 'country' ? {backgroundColor:'#eee'}: null]}>
						<View> 
					    	<Text style={styles.formInputPlaceholder}>{_.capitalize('Country')}</Text>
						    <TextInput
						    style={styles.formInputRow}
						    ref='country'
						    onEndEditing={() => this.saveFormValues()}
						    onFocus={() => this.setState({focus: 'country'})}
						    onChangeText={(text) => this.setState({country:text})}
						    value={this.state.country} />
					    </View>
					    </TouchableOpacity>
					</View>
				 </View>

				 {checkbox}

		    	 {buttons}
        	</View>
		);
	}

}
