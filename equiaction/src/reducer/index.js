import { combineReducers } from 'redux';
import SignIn from './SignIn';
import ChoosePackage from './ChoosePackage';
import Home from './Home';
import HorseInfo from './HorseInfo';

export default combineReducers({
	SignIn,
	ChoosePackage,
	Home,
	HorseInfo
});