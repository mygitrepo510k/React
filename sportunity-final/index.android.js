/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry
} from 'react-native';

import Drawer from './src/presentational/Drawer';
import store from './src/store';

const sportunity = () => (
  <Provider store={store}>
    <Drawer />
  </Provider>
);

AppRegistry.registerComponent('sportunity', () => sportunity);
