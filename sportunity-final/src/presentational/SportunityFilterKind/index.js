import React from 'react';
import {
  View
} from 'react-native';

import SportunityFilterKindTabItem from '../../container/SportunityFilterKindTabItem';
import style from './style';

const SportunityFilterKind = () => (
  <View
    style={style.tabContainer}
  >
    <SportunityFilterKindTabItem kind="NORMAL" />
    <SportunityFilterKindTabItem kind="BOOKED" />
    <SportunityFilterKindTabItem kind="ORGANIZATION" />
    <SportunityFilterKindTabItem kind="ORGANIZED" />
  </View>
);

export default SportunityFilterKind;
