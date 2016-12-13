import React from 'react';
import {Text, View, Image, TouchableHighlight } from 'react-native';
import { Scene, Router, Actions, TabBar, } from 'react-native-router-flux';
import { images } from '../../theme';
import { HomeTabIcon, CataTabIcon, AdsTabIcon, FavTabIcon, ProTabIcon } from './TabIcon';
import Home from '../../container/Home';
import Profile from '../Profile';
import Catalogue from '../Catalogue';
import Favorite from '../Favorite';
import ChoosePackage from '../../container/ChoosePackage';
import SignIn from '../SignIn';
import NavigationDrawer from '../NavigationDrawer';
import HorseDetail from '../HorseDetail';
import styles from './style';
import PlaceBid from '../PlaceBid';
import HorseInfo from '../../container/HorseInfo';
import PaymentInfo from '../PaymentInfo';
import ConfirmInfo from '../ConfirmInfo';
import Questions from '../Questions';
import QuestionDetail from '../QuestionDetail';

let backButtonFunction = function() {
 <TouchableHighlight
  style={{position: "absolute", left: 12, bottom: 12}}>
 </TouchableHighlight>
};

const EquiauctionRouter = (props) => (
  <Router 
   navigationBarStyle={styles.navBar}
  >
  <Scene key="root">
  <Scene key="horseDetail"
   clone component={HorseDetail} 
   title="Catalogue" 
   navigationBarStyle={{backgroundColor: '#FFFFFF'}}
   />
  <Scene key="placeBid"
   clone component={PlaceBid} 
   title="Place a Bid" 
   navigationBarStyle={{backgroundColor: '#FFFFFF'}}
   />
  <Scene key="horseInfo"
   clone component={HorseInfo} 
   title="Enter a Horse" 
   navigationBarStyle={{backgroundColor: '#FFFFFF'}}
   />
  <Scene key="paymentInfo"
   clone component={PaymentInfo} 
   title="Enter a Horse" 
   navigationBarStyle={{backgroundColor: '#FFFFFF'}}
   />
  <Scene key="confirmInfo"
   clone component={ConfirmInfo} 
   title="Enter a Horse" 
   navigationBarStyle={{backgroundColor: '#FFFFFF'}}
   />
  <Scene key="questions"
   clone component={Questions} 
   title="Question" 
   navigationBarStyle={{backgroundColor: '#FFFFFF'}}
   />
  <Scene key="questionDetail"
   clone component={QuestionDetail} 
   title="Question" 
   navigationBarStyle={{backgroundColor: '#FFFFFF'}}
   />
   <Scene key="sideMenu" component={NavigationDrawer}/>
  <Scene key="tabbar" initial>
    <Scene
      key="main"
      tabs
      initial
      hideTabBar={false}
      tabBarStyle={{backgroundColor: '#F8F9F9', borderWidth: 1, borderTopColor: '#D4D5D5',
      borderLeftColor: 'white', borderRightColor: 'white', borderBottomColor: 'white'}}
      tabBarSelectedItemStyle={{backgroundColor: '#DDD',borderWidth: 1, borderTopColor: '#D4D5D5',
      borderLeftColor: '#DDD', borderRightColor: '#DDD', borderBottomColor: '#DDD'}}
    >
      <Scene
        key="tabHome"
        title="Home"
        navigationBarStyle={{backgroundColor: 'blue'}}
        titleStyle={{color: 'black'}}
        initial
        icon={HomeTabIcon}
        leftButtonIconStyle={{tintColor: "#98A4AC"}}
        onRight={() => props.toggle()}
        rightButtonImage={images.menu}
      >
        <Scene
          key="home"
          component={Home}
          title="Home"
          navigationBarStyle={{backgroundColor: '#FFFFFF'}}
          hideTabBar={false}
           />
      </Scene>
      <Scene
        key="tabCatalogue"
        title="Catalogue"
        titleStyle={{color: 'black'}}
        icon={CataTabIcon}
        leftButtonIconStyle={{tintColor: "#98A4AC"}}
        onRight={() => props.toggle()}
        rightButtonImage={images.menu}
      >
        <Scene
          key="catalogue"
          toggle={props.toggle}
          component={Catalogue}
          navigationBarStyle={{backgroundColor: '#FFFFFF'}}
          hideTabBar={false}
          title="Catalogue" />
          </Scene>
      <Scene
        key="tabAds"
        title="Add ads"
        navigationBarStyle={{backgroundColor: 'blue'}}
        titleStyle={{color: 'black'}}
        icon={AdsTabIcon}
        onRight={() => props.toggle()}
        rightButtonImage={images.menu}
      >
        <Scene
          key="ads"
          component={ChoosePackage}
          navigationBarStyle={{backgroundColor: '#FFFFFF'}}
          leftButtonIconStyle={{tintColor: "#98A4AC"}}
          title="Enter a Horse" />

      </Scene>
      <Scene
        key="tabFavourite"
        title="Favourite"
        navigationBarStyle={{backgroundColor: 'blue'}}
        titleStyle={{color: 'black'}}
        icon={FavTabIcon}
      >
        <Scene
          key="favorite"
          component={Favorite}
          title="Favorite" />

      </Scene>
      <Scene
        key="tabProfile"
        title="Profile"
        navigationBarStyle={{backgroundColor: 'blue'}}
        titleStyle={{color: 'black'}}
        icon={ProTabIcon}
        onRight={() => props.toggle()}
        rightButtonImage={images.menu}
      >
        <Scene
          key="profile"
          component={Profile}
          leftButtonIconStyle={{tintColor: "#98A4AC"}}
          title="Profile" />
      </Scene>
    </Scene>
  </Scene>
  </Scene>
  </Router>
);

export default EquiauctionRouter;