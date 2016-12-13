import { connect } from 'react-redux';
import {
  getFormData,
  saveHorseInfo,
  selectColor,
  selectSex
} from '../../actions/HorseInfo';

import HorseInfo from
  '../../components/HorseInfo';
/*
 * Design link : https://projects.invisionapp.com/share/6Q8AHAJXE@/screens/181534216 
 * @title: Title field
 * @name: Horse name field
 * @Sire: Sire field in Horse Information
 * @Dam: Dam field in Horse Information
 * ...
 */

const stateToProps = (state) => ({
  title: state.HorseInfo.title,
  name: state.HorseInfo.name,
  sire: state.HorseInfo.sire,
  dam: state.HorseInfo.dam,
  colour: state.HorseInfo.colour,
  yob: state.HorseInfo.yob,
  isEmpty: state.HorseInfo.isEmpty,
  color: state.HorseInfo.color,
  sex: state.HorseInfo.sex
});

/*
 * getFormData: capture data in input box and refresh props vaules
 * @data: data in input box
 * @fieldId: identification of input box which user's input is being focused now.
 */

const dispatchToProps = (dispatch) => ({
  onGetFormData: (data, fieldId) => dispatch(getFormData(data, fieldId)),
  saveHorseInfo: (data, entryId) => dispatch(saveHorseInfo(data, entryId)),
  onSelectColor: (color) => dispatch(selectColor(color)),
  onSelectSex: (sex) => dispatch(selectSex(sex))
});

export default connect(
  stateToProps,
  dispatchToProps
)(HorseInfo);