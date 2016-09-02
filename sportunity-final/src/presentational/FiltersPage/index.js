import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import styles from './style';
import { images } from '../../theme';

/*
 * ViewCell template for such as My tennis, Looking1 on Design
 */
const ApplyViewCell = (props) => (
  <TouchableHighlight style={styles.applyViewCell}>
    <View style={styles.applyViewCellContext}>
      <Text style={styles.applyCellCaption}>{props.caption}</Text>
      <Image style={styles.discloser} source={images.close} />
    </View>
  </TouchableHighlight>
);

ApplyViewCell.propTypes = {
  caption: React.PropTypes.string
};

/*
 * ViewCell template for such as Sports, Dates, Places etc on Design
 */
const FiltersViewCell = (props) => (
  <TouchableHighlight
    style={styles.filterViewCell}
    onPress={() => (props.advanced === true ? Actions.advancedFilters() : Actions.detailFilters())}
  >
    <View style={styles.filterViewCellContext}>
      <Text style={styles.filterCellCaption}>{props.caption}</Text>
      <Image style={styles.discloser} source={images.right_arrow} />
    </View>
  </TouchableHighlight>
);

FiltersViewCell.propTypes = {
  caption: React.PropTypes.string,
  advanced: React.PropTypes.bool
};

const FiltersPage = () => (
  <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
    <View style={styles.applyView}>
      <TouchableHighlight style={styles.clearAllCell}>
        <View style={styles.applySavedCellContext}>
          <Text style={styles.applySavedCellCaption}>Apply saved filter</Text>
          <Image style={styles.discloser} source={images.expand_arrow} />
        </View>
      </TouchableHighlight>
      <ApplyViewCell caption="My tennis" />
      <ApplyViewCell caption="Looking1" />
      <TouchableHighlight style={styles.clearAllCell}>
        <Text style={styles.clearCellCaption}>CLEAR ALL</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.filtersView}>
      <FiltersViewCell caption="Sports" advanced={false} />
      <FiltersViewCell caption="Dates" advanced={false} />
      <FiltersViewCell caption="Places" advanced={false} />
      <FiltersViewCell caption="Price" advanced={false} />
      <FiltersViewCell caption="Hour" advanced={false} />
      <FiltersViewCell caption="Advanced Filters" advanced={Boolean(true)} />
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableHighlight style={styles.applyButton}>
        <Text style={styles.applyButtonCaption}>APPLY</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.applyButton}>
        <Text style={styles.applyButtonCaption}>RESET</Text>
      </TouchableHighlight>
    </View>
  </ScrollView>
);

export default FiltersPage;
