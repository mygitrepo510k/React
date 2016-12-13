import { connect } from 'react-redux';
import {
  changePremium,
  changeFeatured,
  changeStandard,
  goToHorseInfo,
  async,
} from '../../actions/EnterHorse';

import Ads from
  '../../components/Ads';

const stateToProps = (state) => ({
  packageKind: state.ChoosePackage.packageKind,
  isOpenPremium: state.ChoosePackage.isOpenPremium,
  isOpenFeatured: state.ChoosePackage.isOpenFeatured,
  isOpenStandard: state.ChoosePackage.isOpenStandard,
  isChecked: state.ChoosePackage.isChecked,
  isAsync: state.ChoosePackage.isAsync
});

const dispatchToProps = (dispatch) => ({
  onChangePremium: (isChecked, isOpen, packageKind) => dispatch(changePremium(isChecked, isOpen, packageKind)),
  onChangeFeatured: (isChecked, isOpen, packageKind) => dispatch(changeFeatured(isChecked, isOpen, packageKind)),
  onChangeStandard: (isChecked, isOpen, packageKind) => dispatch(changeStandard(isChecked, isOpen, packageKind)),
  goToHorseInfo: (packageKind) => dispatch(goToHorseInfo(packageKind)),
  onIsAsync: (isAsync) => dispatch(async(isAsync))
});

export default connect(
  stateToProps,
  dispatchToProps
)(Ads);