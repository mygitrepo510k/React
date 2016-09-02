import { connect } from 'react-redux';

import {
  changeFilterHour,
  increaseFilterHour,
  decreaseFilterHour,
  changeFilterPrice,
  increaseAroundOfPlace,
  decreaseAroundOfPlace
} from '../../action/setFilterOptions';

import DetailFiltersPage from
  '../../presentational/DetailFiltersPage';

const stateToProps = (state) => ({
  rangeHour: state.filterOptions.rangeHour,
  minHour: state.filterOptions.minHour,
  maxHour: state.filterOptions.maxHour,
  rangePrice: state.filterOptions.rangePrice,
  minPrice: state.filterOptions.minPrice,
  maxPrice: state.filterOptions.maxPrice,
  aroundOfPlace: state.filterOptions.aroundOfPlace
});

const dispatchToProps = (dispatch) => ({
  onHourChange: (changedHours) => dispatch(changeFilterHour(changedHours)),
  onIncreaseHour: () => dispatch(increaseFilterHour()),
  onDecreaseHour: () => dispatch(decreaseFilterHour()),
  onPriceChange: (changedPrices) => dispatch(changeFilterPrice(changedPrices)),
  onPressDecAround: () => dispatch(decreaseAroundOfPlace()),
  onPressIncAround: () => dispatch(increaseAroundOfPlace())
});

export default connect(
  stateToProps,
  dispatchToProps
)(DetailFiltersPage);
