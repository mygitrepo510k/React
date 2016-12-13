import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HomeDrawer from '../HomeDrawer';
import Router from '../Router';
import store from '../../store';
import SideMenu from 'react-native-side-menu';

class Main extends Component {
  constructor() {
  	super();
  	this.state = {
  		isOpen: false,
  		menuType: 1,
  	}
  }

  updateMenuState = (isOpen) => {
  	this.setState({isOpen, });
  }

  toggle = (type) => {
  	this.setState({
      isOpen: !this.state.isOpen,
      menuType: type
  	});
  }
  render() {
  	const isOpen = false;
  	const menu = <HomeDrawer toggle={this.toggle} menuType={this.state.menuType} navigator={navigator} />;
  	return (
  		<Provider store={store}>
      <SideMenu 
        menu={menu}
        isOpen={this.state.isOpen} 
        onChange={(isOpen) => {
          this.updateMenuState(isOpen)
        }}
        menuPosition="right"
      >
        <Router toggle={this.toggle} isOpen={this.state.isOpen} />
      </SideMenu>
      </Provider>
  	);
  }
}

/*
const Main = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
*/

export default Main;
