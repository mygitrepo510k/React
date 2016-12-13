import React from 'react';
import {Text, View, Image} from 'react-native';
import { Scene, Router, Actions, TabBar } from 'react-native-router-flux';
import { images } from '../../../theme';
import styles from './style';
const HomeTabIcon = (props) => (
  <View style={styles.tabIconView}>
  <Image source={props.selected ? images.HomeActive: images.HomeInactive} />
  <Text style={{ fontSize: 11, color: props.selected ? 'blue': 'black'}} >{props.title}</Text>
  </View>
);
const CataTabIcon = (props) => (
  <View style={styles.tabIconView}>
  <Image source={props.selected ? images.CatalogueActive: images.CatalogueInactive} />
  <Text style={{ fontSize: 11, color: props.selected ? 'blue': 'black'}} >{props.title}</Text>
  </View>
);
const AdsTabIcon = (props) => (
  <View style={styles.tabIconView}>
  <Image source={props.selected ? images.AdsActive: images.AdsInactive} />
  <Text style={{ fontSize: 11, color: props.selected ? 'blue': 'black'}} >{props.title}</Text>
  </View>
);
const FavTabIcon = (props) => (
  <View style={styles.tabIconView}>
  <Image source={props.selected ? images.FavoriteActive: images.FavoriteInactive} />
  <Text style={{ fontSize: 11, color: props.selected ? 'blue': 'black'}} >{props.title}</Text>
  </View>
);
const ProTabIcon = (props) => (
  <View style={styles.tabIconView}>
  <Image source={props.selected ? images.ProfileActive: images.ProfileInactive} />
  <Text style={{ fontSize: 11, color: props.selected ? 'blue': 'black'}} >{props.title}</Text>
  </View>
);
export {HomeTabIcon , CataTabIcon , AdsTabIcon , FavTabIcon , ProTabIcon};