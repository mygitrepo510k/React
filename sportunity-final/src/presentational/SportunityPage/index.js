import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
  View
} from 'react-native';

import SportunityFilterKind from '../SportunityFilterKind';
import SportunitiesListView from '../SportunitiesListView';
import SportunitiesCalendarView from '../SportunitiesCalendarView';
import SportunitiesMapView from '../SportunitiesMapView';
import SportunitiesListDataSource from
  '../../container/SportunitiesListDataSource';
import style, {
  scrollableTabSpecificStyles
} from './style.js';

const SportunityList = () => (
  <View style={style.sportunityPageView}>
    <ScrollableTabView
      style={style.tabView}
      {...scrollableTabSpecificStyles}
    >
      <SportunitiesListDataSource
        tabLabel="List"
        ComponentToFeed={SportunitiesListView}
      />
      <SportunitiesListDataSource
        tabLabel="Calendar"
        ComponentToFeed={SportunitiesCalendarView}
      />
      <SportunitiesListDataSource
        tabLabel="Map"
        ComponentToFeed={SportunitiesMapView}
      />
    </ScrollableTabView>
    <View>
      <SportunityFilterKind />
    </View>
  </View>
);

export default SportunityList;
