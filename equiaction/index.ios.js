/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Onboarding from './src/components/Onboarding';
import Main from './src/components/Main';
import { Router, Scene, Actions } from 'react-native-router-flux';

class equiauction extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene
          name="Onboarding"
          key="onboarding"
          component={Onboarding}
          title="Onboarding"
          initial={true} />
        <Scene
          key="main"
          component={Main}
          title="Main" />
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('equiauction', () => equiauction);
