import React from 'react';

import {
  AsyncStorage
} from 'react-native';

import { 
	SET_CAPTION,
	IS_VERIFIED
} from './ActionNames';

import { dispatch } from 'react-redux';
import * as constants from '../constants';
import Auth0Lock from 'react-native-lock';

// caption - sign in or log out

export const setCaption = (verify) => ({
  type: SET_CAPTION,
  verify: verify
});

export const getVerify = () => {
  return dispatch => {
  	AsyncStorage.getItem("verify", (err, result) => {
  		if (result == '1')
  		    dispatch(setCaption(true));
  	    else
  	    	dispatch(setCaption(false));
  	});
  }
};
export const logOut = () => {
 return dispatch => {
 	AsyncStorage.removeItem("verify", (err, result) => {
 		AsyncStorage.removeItem("token", (err, result) => {
 			dispatch(setCaption(false));
 		});
 	})
 }

};

export const logIn = () => {
  return dispatch => {
	  	AsyncStorage.getItem("token", (err, result) => {
	  	if (err) {
	  	  console.log(err);
	  	  item = null;
	  	} else {
	  	  console.log(result);
	  	  let token = result;
	  	  if (token == null || token == undefined || token == '') {
	        var lock = new Auth0Lock({clientId: constants.CLIENTID, domain: constants.DOMAIN});
	        lock.show({
	  	      closable: true
	        }, (err, profile, token) => {
	  	      if (err) {
	  		    console.log(err);
	  		    return;
	  	      } else {
	  	       AsyncStorage.setItem("token", token.idToken, () => {
	  	         console.log(token);	
	  	         fetch(constants.URL+'/verify?token='+token.idToken)
				 .then((response) => response.json())
	  			 .then((responseData) => {
	  			 	if (responseData.errorMessage) {
	  				  console.log(responseData.errorMessage);
	  				  AsyncStorage.removeItem("token");
	  				  dispatch(setCaption(false));
	  			 	} else {
	  				  AsyncStorage.setItem("verify", '1', (err, result) => {
	  				  	dispatch(setCaption(true));
	  				  });
	  				}
	  			 })
	 			 .done();
	  	        });
	  	      }
	        });
	      } else {
	      	dispatch(setCaption(true));
	      }
	  	}
	  });
  }
}