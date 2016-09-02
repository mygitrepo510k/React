import {
  StyleSheet
} from 'react-native';

import {
  colors,
  metrics
} from '../../theme';

export default StyleSheet.create({
  sportunityPageView: {
    flex: 1
  },
  tabView: {
    marginTop: metrics.navBarHeight,
  }
});

export const scrollableTabSpecificStyles = {
  tabBarUnderlineColor: colors.blue,
  tabBarActiveTextColor: colors.blue
};
