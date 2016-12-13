import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import style from './style';

const DrawerButton = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={style.text}>{text}</Text>
  </TouchableOpacity>
);


DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DrawerButton;
