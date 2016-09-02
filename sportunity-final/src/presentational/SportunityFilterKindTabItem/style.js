import {
  StyleSheet
} from 'react-native';

import { merge } from 'lodash';

import {
  colors,
  metrics,
  fonts
} from '../../theme';

const nonSelected = {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: metrics.sportunitiesBottomTabItemPadding,
    paddingBottom: metrics.sportunitiesBottomTabItemPadding,
  },
  text: {
    ...fonts.style.tabItem
  }
};

const selected = merge({}, nonSelected, {
  container: {
    backgroundColor: colors.silver,
    flex: 1
  },
  text: {
    color: colors.blue
  }
});

export const nonSelectedStyle = StyleSheet.create(nonSelected);
export const selectedStyle = StyleSheet.create(selected);
export const underlayColor = colors.steel;
