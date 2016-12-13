import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Catalogue from '../Catalogue';
describe("<Catalogue />", () => {
  it("should render", () => {
    const catalogue = shallow(<Catalogue />);
    //expect(catalogue.contains(ScrollView)).to.equal(true);
  });
});