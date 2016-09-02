import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import ItemCheckBox from 'react-native-item-checkbox';
import styles from './style';
/*
 * ViewCell template for such as Female, Male on Design
 */
const GenderViewCell = (props) => (
  <TouchableHighlight style={styles.genderViewCell}>
    <View style={styles.genderViewCellContext}>
      <Text style={styles.genderCellCaption}>{props.caption}</Text>
      <ItemCheckBox size={30} color="#AFD5BA" backgroundColor="#BEE7C5" />
    </View>
  </TouchableHighlight>
);

GenderViewCell.propTypes = {
  caption: React.PropTypes.string
};

const AdvancedFiltersPage = () => (
  <View style={styles.container}>
    <View style={styles.genderView}>
      <TouchableHighlight style={styles.genderViewHeader}>
        <Text style={styles.genderHeaderCaption}>Gender Selection</Text>
      </TouchableHighlight>
      <GenderViewCell caption="Female" />
      <GenderViewCell caption="Male" />
    </View>
    <View style={styles.emptyView} />
    <View style={styles.buttonsContainer}>
      <TouchableHighlight style={styles.clearButton}>
        <Text style={styles.clearButtonCaption}>CLEAR</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.applyButton}>
        <Text style={styles.applyButtonCaption}>VALIDATE</Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default AdvancedFiltersPage;
