import _, {	include } from 'lodash';
import { 
  GET_FORM_DATA, 
  SELECT_COLOR,
  SELECT_SEX
} from '../../actions/ActionNames';

const initialState = {
  title: '',
  name: '',
  sire: '',
  dam: '',
  color: '',
  yob: '',
  sex: '',
  isEmpty: true
};

export default (state = initialState, action) => {
  console.log('Horse Info reducer called with state ', state, 'and action ', action);
  let {
    data,
  	fieldId,
    color,
    sex 
  } = action;
  let isEmpty = true;

  if (_.isEmpty(state.title) == false
   && _.isEmpty(state.name) == false
   && _.isEmpty(state.sire) == false
   && _.isEmpty(state.dam) == false
   && _.isEmpty(state.color) == false
   && _.isEmpty(state.yob) == false)
    isEmpty = false;

  switch (action.type) {
  	case GET_FORM_DATA:
      switch (fieldId) {
        case 1: // title
          return { ...state, title: data, isEmpty: isEmpty }
        case 2: // horse name
          return { ...state, name: data, isEmpty: isEmpty }
        case 3: // sire
          return { ...state, sire: data, isEmpty: isEmpty }
        case 4: // dam
          return { ...state, dam: data, isEmpty: isEmpty }
        case 6: // yob
          return { ...state, yob: data, isEmpty: isEmpty }
        default:
          break;
      }
    case SELECT_COLOR:
      return {
        ...state,
        color: color
      } 
    case SELECT_SEX:
      return {
        ...state,
        sex: sex
      } 
  	default:
  	  return state;
  }
};