'use strict';

import React, {Component} from "react";
import {AppRegistry, AppState, View, LayoutAnimation, NativeModules} from "react-native";

import codePush from "react-native-code-push";
import Progress from './components/Progress';
import * as Animatable from 'react-native-animatable';
import { FormattedWrapper } from 'react-native-globalize';
import * as locale from './locale/lang';

import App from './app';

class nevergonnawakeup extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.appLocale = NativeModules.SettingsManager.settings.AppleLocale;
    
    if(this.appLocale.indexOf('en') > -1){
      this.appLocale = 'en';
    } else if(
      this.appLocale.indexOf('hant') > -1 ||
      this.appLocale.indexOf('zh-tw') > -1
    ){
      this.appLocale = 'zh-Hant'
    } else {
      this.appLocale = 'en';
    }

    //for test
    //this.appLocale = 'zh-Hant';

    this.currency = null;
    this.state = {
    	data: null,
    	animationOutBuffer: false
    }
  }
  
  componentWillUnmount(){
    clearTimeout(this.timer);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  componentWillMount(){
  	fetch(this.props.STORE)
  	.then((response) => response.json())
  	.then((data) => 
  	{ 
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
  	  this.setState({animationOutBuffer : this.state.animationOutBuffer ? false : true});
      this.currency = data.info.currency;
      this.timer = setTimeout(() => {
  		  this.setState({
  		    data: data,
  		    animationOutBuffer : this.state.animationOutBuffer ? false : true
  		  });
  	  }, 200);
    	  
  	}).done();
  }

  componentDidMount(){
  	AppState.addEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange(newState){
    newState === "active" && codePush.sync();
  }

  render() {
  	var content = <Progress darkColorScheme={true} />;
  	if(this.state.data){
      content = <App 
                  SHOPIFY_CONFIG = {this.state.data} />;
  	}

    return (
        <FormattedWrapper locale={this.appLocale} currency={this.currency} messages={locale.Messages}>
          <Animatable.View animation={this.state.animationOutBuffer ? 'fadeOut' : 'fadeIn'} style={{flex:1,backgroundColor:'white'}}>
            {content}
          </Animatable.View>
        </FormattedWrapper>
    );
  }
}

AppRegistry.registerComponent('nevergonnawakeup', () => nevergonnawakeup);
