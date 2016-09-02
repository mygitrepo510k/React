import React, {
  Component
} from 'react';
import Drawer from 'react-native-drawer';
import { Actions as NavigationActions } from 'react-native-router-flux';

import DrawerContent from '../DrawerContent';
import Router from '../Router';
import styles from './style';

/**
 * This class is responsible to render the drawer of the application
 */
class NavigationDrawer extends Component {

  /**
   * Go to the specified scene
   *
   * @param {string} target the key of the scene to go to
   */
  switchScene(target) {
    this._drawer.close();
    NavigationActions[target]();
  }

  /**
   * Render the component
   */
  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="displace"
        content={
          <DrawerContent
            switchScene={(target) => this.switchScene(target)}
          />
        }
        styles={styles}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        acceptPan={false}
        captureGestures
        tweenHandler={ratio => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <Router />
      </Drawer>
    );
  }
}

export default NavigationDrawer;
