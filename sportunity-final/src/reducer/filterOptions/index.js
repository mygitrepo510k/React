import {
	include
} from 'lodash';

import {
	changeHour,
	increaseHour,
	decreaseHour,
	changePrice,
  decAroundOfPlace,
  incAroundOfPlace
 } from '../../action/actionNames';

const filterHourInitialState = {
  rangeHour: [0, 24],
  minHour: 0,
  maxHour: 24,
  rangePrice: [0, 1000],
  minPrice: 0,
  maxPrice: 1000,
  aroundOfPlace: 1
};

export default (state = filterHourInitialState, action) => {
  switch (action.type) {
  	case changePrice:
      const { changedPrices } = action;
  	  return Object.assign({}, state, {
  	  	minPrice: changedPrices[0],
  	  	maxPrice: changedPrices[1]
  	  });
  	case changeHour:
      const { changedHours } = action;
  	  return Object.assign({}, state, {
  	  	minHour: changedHours[0],
  	  	maxHour: changedHours[1]
  	  });
  	case increaseHour:
  	  return Object.assign({}, state, {
        maxHour: state.maxHour + 1
  	  });
  	case decreaseHour:
  	  return Object.assign({}, state, {
        minHour: state.mixHour - 1
  	  });
    case decAroundOfPlace:
      return Object.assign({}, state, {
        aroundOfPlace: state.aroundOfPlace - 1
      });
    case incAroundOfPlace:
      return Object.assign({}, state, {
        aroundOfPlace: state.aroundOfPlace + 1
      });
  	default:
  	  return state;
  }
};