import {
	include
} from 'lodash';
import { SET_CAPTION } from '../../actions/ActionNames';

const initialState = {
	caption: 'Sign In',
  verify: false
};

export default (state = initialState, action) => {
  console.log('home reducer called with state ', state, 'and action ', action);
  let {
    caption,
  	verify, 
  } = action;

  switch (action.type) {
  	case SET_CAPTION:
      if (verify == true)
        caption = 'Log Out';
      else
        caption = 'Sign In';
  	  return {
  	  	...state,
        caption: caption,
        verify: verify
  	  }
  	default:
  	  return state;
  }
};