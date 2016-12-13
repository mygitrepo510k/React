import _ from 'lodash';
import { 
	CHOOSE_PREMIUM, 
	CHOOSE_FEATURED, 
	CHOOSE_STANDARD,
	GO_HORSE_INFO,
	IS_ASYNC,
} from './ActionNames';

import {
  AsyncStorage
} from 'react-native';

import { dispatch } from 'react-redux';
import * as constants from '../constants';
import { Actions } from 'react-native-router-flux';
export const changePremium = (isChecked, isOpen, packageKind) => ({
	type: CHOOSE_PREMIUM,
	packageKind : packageKind,
	isOpenPremium: isOpen,
	isChecked: isChecked
});
export const changeFeatured = (isChecked, isOpen, packageKind) => ({
	type: CHOOSE_FEATURED,
	packageKind : packageKind,
	isOpenFeatured: isOpen,
	isChecked: isChecked
});
export const changeStandard = (isChecked, isOpen, packageKind) => ({
	type: CHOOSE_STANDARD,
	packageKind : packageKind,
	isOpenStandard: isOpen,
	isChecked: isChecked
});

export const async = (isAsync) => ({
  type: IS_ASYNC,
  isAsync: isAsync
});

export const goToHorseInfo = (packageKind) => {
  return dispatch => {
  	dispatch(async(true));
	AsyncStorage.getItem("verify", (err, result) => {
	  if (err) {
		console.log(err);
		return;
	  } else {
		if (result == '1') {
			AsyncStorage.getItem("token", (err, result) => {
				if (err) {
					console.log(err);
					return;
				} else {
					fetch(constants.URL+'/createEntry', {
						method: 'post',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + result
						},
						body: JSON.stringify({
							'step': 1,
							'values': {
								'package': constants.PACKAGES[packageKind - 1]
							},
							'entryId': ''
						})
					})
					.then((response) => response.json())
					.then((responseData) => {
						if (responseData.errorMessage) {
							console.log(responseData.errorMessage);
							return;
						} else {
							console.log(responseData);
							if (responseData.errors && _.isEmpty(responseData.errors) != true)
								alert(responseData.errors.package);
							else {
								dispatch(async(false));
						      Actions.horseInfo({
								packageKind: packageKind,
								entryId: responseData.entryId
							  });
						    }
						}
					})

				}
			});
			
		} else
			alert("You need to log in.");
	  }
    });
  }
}