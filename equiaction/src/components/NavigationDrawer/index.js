import React, { Component, PropTypes } from 'react';

import {
  Text,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';
import {DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux';

import styles from './style';
import HomeDrawer from '../HomeDrawer';
const propTypes = {
	navigationState: PropTypes.object,
};
class NavigationDrawer extends React.Component {
  switchScene(target) {
    this._drawer.close();
    NavigationActions[target]();
  }
	render() {
		const state = this.props.navigationState;
		const children = state.children;
		return (
			<Drawer
			  ref={(ref) => { this._drawer = ref; }}
			  type="displace"
        content={
          <HomeDrawer
            switchScene={(target) => this.switchScene(target)}
          />
        }
			  tapToClose
			  side="right"
			  openDrawerOffset={0.2}
			  panCloseMask={0.2}
			  negotiatePan
			  tweenHandler={(ratio) => ({
			  	main: {opacity: Math.max(0.54, 1 - ratio)},
			  })}
			>
			<DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />

			</Drawer>
		);
	}
}

NavigationDrawer.propTypes = propTypes;

export default NavigationDrawer;