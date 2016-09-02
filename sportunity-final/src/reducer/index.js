import { combineReducers } from 'redux';
import sportunityList from './sportunityList';
import filterOptions from './filterOptions';

export default combineReducers({
  sportunityList,
  filterOptions
});
