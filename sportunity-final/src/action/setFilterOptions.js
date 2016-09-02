import {
  changeHour,
  increaseHour,
  decreaseHour,
  changePrice,
  incAroundOfPlace,
  decAroundOfPlace
} from './actionNames';

export const changeFilterHour = (changedHours) => ({
  type: changeHour,
  changedHours
});

export const increaseFilterHour = () => ({
  type: increaseHour
});

export const decreaseFilterHour = () => ({
  type: decreaseHour
});

export const changeFilterPrice = (changedPrices) => ({
  type: changePrice,
  changedPrices
});

export const increaseAroundOfPlace = () => ({
  type: incAroundOfPlace
});
export const decreaseAroundOfPlace = () => ({
  type: decAroundOfPlace
});
