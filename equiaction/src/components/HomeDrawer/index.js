import React, {
  PropTypes, Component
} from 'react';
import { ScrollView, Image, View } from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './style';
import DrawerButton from '../DrawerButton';
import FilterMenu from '../FilterMenu';
import SortMenu from '../SortMenu';
/*
const DrawerContent = ({ switchScene }) => (
  <ScrollView style={styles.container}>
    <DrawerButton text="Home" onPress={() => switchScene('tabHome')} />
    <DrawerButton text="About Us" onPress={() => switchScene('tabHome')} />
    <DrawerButton text="Contact Us" onPress={() => switchScene('tabHome')} />
    <DrawerButton text="FAQ" onPress={() => switchScene('tabHome')} />
    <DrawerButton text="Profile" onPress={() => switchScene('tabProfile')} />
    <DrawerButton text="Settings" onPress={() => switchScene('tabProfile')} />
    <DrawerButton text="Log out" onPress={() => switchScene('home')} />
  </ScrollView>
);

*/
class DrawerContent extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    var Home = <ScrollView style={styles.container}>
                    <DrawerButton text="Home" onPress={() => {props.toggle(); Actions.tabHome()}} />
                    <DrawerButton text="About Us" onPress={() => {props.toggle(); Actions.tabHome()}} />
                    <DrawerButton text="Contact Us" onPress={() => {props.toggle(); Actions.tabHome()}} />
                    <DrawerButton text="FAQ" onPress={() => {props.toggle(); Actions.tabHome()}} />
                    <DrawerButton text="Profile" onPress={() => {props.toggle(); Actions.tabHome()}} />
                    <DrawerButton text="Settings" onPress={() => {props.toggle(); Actions.tabHome()}} />
                    <DrawerButton text="Log out" onPress={() => {props.toggle(); Actions.tabHome()}} />
                  </ScrollView>;
    var Filter = <FilterMenu />;
    var Sort = <SortMenu />;
    var instanceMenu;
    if (this.props.menuType == 1)
      instanceMenu = Home;
    else if (this.props.menuType == 2)
      instanceMenu = Filter;
    else if (this.props.menuType == 3)
      instanceMenu = Sort;
    else
      instanceMenu = Home;
    return(
      <View style={{flex: 1, marginTop: 30}}>
     {instanceMenu}
     </View>
    );
  }

};
/*
const DrawerContent = (props) => {
  
  if (props.menuType == 1) {
return(
  <ScrollView style={styles.container}>
    <DrawerButton text="Home" onPress={() => {props.toggle(); Actions.tabHome()}} />
    <DrawerButton text="About Us" onPress={() => {props.toggle(); Actions.tabHome()}} />
    <DrawerButton text="Contact Us" onPress={() => {props.toggle(); Actions.tabHome()}} />
    <DrawerButton text="FAQ" onPress={() => {props.toggle(); Actions.tabHome()}} />
    <DrawerButton text="Profile" onPress={() => {props.toggle(); Actions.tabHome()}} />
    <DrawerButton text="Settings" onPress={() => {props.toggle(); Actions.tabHome()}} />
    <DrawerButton text="Log out" onPress={() => {props.toggle(); Actions.tabHome()}} />
  </ScrollView>
);
}
}
*/
export default DrawerContent;
