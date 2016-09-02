import React, {
  PropTypes
} from 'react';
import { ScrollView, Image } from 'react-native';

import styles from './style';
import { images } from '../../theme';
import DrawerButton from '../DrawerButton';

const DrawerContent = ({ switchScene }) => (
  <ScrollView style={styles.container}>
    <Image source={images.logo} style={styles.logo} />
    <DrawerButton text="Sportunities" onPress={() => switchScene('sportunities')} />
    <DrawerButton text="My Profile" onPress={() => switchScene('profile')} />
    <DrawerButton text="My Circles" onPress={() => switchScene('circles')} />
    <DrawerButton text="Chats" onPress={() => switchScene('chat')} />
    <DrawerButton text="Notifications" onPress={() => switchScene('notifications')} />
    <DrawerButton text="History" onPress={() => switchScene('history')} />
    <DrawerButton text="Settings" onPress={() => switchScene('settings')} />
  </ScrollView>
);

DrawerContent.propTypes = {
  switchScene: PropTypes.func.isRequired
};

export default DrawerContent;
