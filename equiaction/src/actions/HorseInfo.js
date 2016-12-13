import React from 'react';
import _ from 'lodash';
import {
  AsyncStorage
} from 'react-native';

import { 
	GET_FORM_DATA,
	SAVE_HORSE_INFO,
	SELECT_COLOR,
	SELECT_SEX,
} from './ActionNames';

import { dispatch } from 'react-redux';
import * as constants from '../constants';

// caption - sign in or log out

export const getFormData = (data, fieldId) => ({
  type: GET_FORM_DATA,
  data: data,
  fieldId: fieldId,
});

export const selectColor = (color) => ({
	type: SELECT_COLOR,
	color: color

}); 

export const selectSex = (sex) => ({
  type: SELECT_SEX,
  sex: sex

});

export const saveHorseInfo = (data, entryId ) => {
  return dispatch => {
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
				'step': 2,
				'values': {
					'title': data.title,
					'name': data.name,
					'sire': data.sire,
					'dam': data.dam,
					'colour': data.colour,
					'yob': data.yob
				},
				'entryId': entryId
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
			      Actions.paymentInfo({
					entryId: responseData.entryId
				  });
			    }
			}
		})
	}
  })
  }
};