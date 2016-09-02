import React, {
  PropTypes
} from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

import sportunityFilterKinds from '../../enums/sportunityFilterKinds';
import {
  underlayColor,
  selectedStyle,
  nonSelectedStyle
} from './style';

const textMap = {
  NORMAL: 'Sportunity',
  BOOKED: 'Booked',
  ORGANIZATION: 'Organization',
  ORGANIZED: 'Organized'
};

/**
 * Take the kind of button we are rendering and return the text to display
 *
 * @param {string} kind the kind of tab item
 *
 * @return {string} the text to display
 */
function kindToText(kind) {
  return textMap[kind];
}

const SportunityFilterKindTabItem = ({ kind, selectedKind, changeKind }) => {
  const style = (kind === selectedKind) ?
    selectedStyle :
    nonSelectedStyle;

  /**
   * Change the selected kind to the current kind of sportunity
   */
  const onPress = () => {
    changeKind(kind);
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor}
      style={style.container}
    >
      <Text
        style={style.text}
      >
        {kindToText(kind)}
      </Text>
    </TouchableHighlight>
  );
};

SportunityFilterKindTabItem.propTypes = {
  /**
   * What is the kind of sportunity I am responsible for
   */
  kind: PropTypes.oneOf(sportunityFilterKinds),
  /**
   * What is the currently selected kind of sportunity
   */
  selectedKind: PropTypes.oneOf(sportunityFilterKinds),
  /**
   * What function to call in order to change the selected kind
   */
  changeKind: PropTypes.func.isRequired
};

export default SportunityFilterKindTabItem;
