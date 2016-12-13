import {
	include
} from 'lodash';
import { CHOOSE_PREMIUM, CHOOSE_FEATURED, CHOOSE_STANDARD, IS_ASYNC } from '../../actions/ActionNames';
/* 1 - premium , 2 - featured, 3 - standard */
const choosePackageInitialState = {
	packageKind: 1,
	isChecked: 0,
	isOpenPremium: 0,
	isOpenFeatured: 0,
	isOpenStandard: 0,
	isAsync: false
};

export default (state = choosePackageInitialState, action) => {
  console.log('choosePackage reducer called with state ', state, 'and action ', action);
  let { 
  	packageKind, 
  	isOpenPremium, 
  	isOpenFeatured,
  	isOpenStandard,
  	isChecked,
  	isAsync
  } = action;

  switch (action.type) {
  	case IS_ASYNC:
   	  return {
  	  	...state,
  	  	isAsync: isAsync
  	  } 	  
  	case CHOOSE_PREMIUM:
  	  if (state.packageKind == 1 
  	  	&& state.isOpenPremium == 1 
  	  	&& state.isChecked == 0 
  	  	&& isOpenPremium == 1) {
  	  	packageKind = 1;
  	  	isOpenPremium = 0;
  	  	isChecked = 0;
  	  }
  	  return {
  	  	...state,
  	  	packageKind: packageKind,
  	  	isOpenPremium: isOpenPremium,
  	  	isChecked: isChecked,
  	  	isOpenFeatured: 0,
  	  	isOpenStandard: 0
  	  }
  	case CHOOSE_FEATURED:
  	  if (state.packageKind == 2 
  	  	&& state.isOpenFeatured == 1 
  	  	&& state.isChecked == 0 
  	  	&& isOpenFeatured == 1) {
  	  	packageKind = 2;
  	  	isOpenFeatured = 0;
  	  	isChecked = 0;
  	  }
  	  return {
  	  	...state,
  	  	packageKind: packageKind,
  	  	isOpenFeatured: isOpenFeatured,
  	  	isChecked: isChecked,
  	  	isOpenPremium: 0,
  	  	isOpenStandard: 0
  	  }
  	case CHOOSE_STANDARD:
  	  if (state.packageKind == 3 
  	  	&& state.isOpenStandard == 1 
  	  	&& state.isChecked == 0 
  	  	&& isOpenStandard == 1) {
  	  	packageKind = 3;
  	  	isOpenStandard = 0;
  	  	isChecked = 0;
  	  }
  	  return {
  	  	...state,
  	  	packageKind: packageKind,
  	  	isOpenStandard: isOpenStandard,
  	  	isChecked: isChecked,
  	  	isOpenFeatured: 0,
  	  	isOpenPremium: 0
  	  }
  	default:
  	  return state;
  }
};