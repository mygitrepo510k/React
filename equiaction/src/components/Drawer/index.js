import React, {
  Component
} from 'react';
import Drawer from 'react-native-drawer';
import { Actions as NavigationActions } from 'react-native-router-flux';
import HomeDrawer from '../HomeDrawer';
import styles from './style';
import Router from '../Router';
import Profile from '../Profile';
class NavigationDrawer extends Component {
  switchScene(target) {
    this._drawer.close();
    NavigationActions[target]();
  }
  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="displace"
        content={
          <HomeDrawer
            switchScene={(target) => this.switchScene(target)}
          />
        }
        side="right"
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
            backgroundColor: '#fff',
            borderRightWidth: 1,
          },
        }}
        tapToClose
        openDrawerOffset={0.25}
        closedDrawerOffset={0}
        panCloseMask={0.2}
        negotiatePan
        acceptPan={false}
        captureGestures
        tweenHandler={ratio => ({
          main: { opacity: (Math.max(0.54, 1 - ratio)) },
        })}>
        <Router />
      </Drawer>
    );
  }
}

export default NavigationDrawer;