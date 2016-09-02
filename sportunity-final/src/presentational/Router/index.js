import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import SportunityPage from '../SportunityPage';
import ProfilePage from '../ProfilePage';
import CirclesPage from '../CirclesPage';
import ChatPage from '../ChatPage';
import NotificationsPage from '../NotificationsPage';
import HistoryPage from '../HistoryPage';
import SettingsPage from '../SettingsPage';
import FiltersPage from '../FiltersPage';
import AdvancedFiltersPage from '../AdvancedFiltersPage';
// import DetailFiltersPage from '../DetailFiltersPage';
import FilterOptionsPage from
  '../../container/FilterOptionsPage';
import { images } from '../../theme';


const SportunityRouter = () => (
  <Router>
    <Scene key="root" duration={1}>
      <Scene key="tabbar" duration={1}>
        <Scene
          key="sportunities"
          component={SportunityPage}
          title="sportunities"
          initial={Boolean(true)}
          onRight={() => Actions.filters()}
          rightButtonImage={images.filter}
        />
        <Scene
          key="profile"
          title="Profile"
          component={ProfilePage}
        />
        <Scene
          key="circles"
          title="Circles"
          component={CirclesPage}
        />
        <Scene
          key="chat"
          title="Chat"
          component={ChatPage}
        />
        <Scene
          key="notifications"
          title="Notifications"
          component={NotificationsPage}
        />
        <Scene
          key="history"
          title="History"
          component={HistoryPage}
        />
        <Scene
          key="settings"
          title="Settings"
          component={SettingsPage}
        />
        <Scene
          key="filters"
          title="Filters"
          component={FiltersPage}
        />
        <Scene
          key="advancedFilters"
          title="Advanced Filters"
          component={AdvancedFiltersPage}
        />
        <Scene
          key="detailFilters"
          title="Filters"
          component={FilterOptionsPage}
        />
      </Scene>
    </Scene>
  </Router>
);

export default SportunityRouter;
