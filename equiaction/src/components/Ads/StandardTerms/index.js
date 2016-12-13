import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import styles from './style';
import { images, metrics } from '../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const TermCell = (props) => (
	<View style={styles.cell}>
	  <View style={styles.checkIcon}>
	    <Icon name="check" size={15} color="#DEDEDE" />
	  </View>
      <View style={styles.termContent}>
        <Text style={styles.termContentText}>{props.content}</Text>
	  </View>
	</View>
);

const StandardTerms = (props) => {
	if (props.isOpen == 1) {
		return (
			<View style={styles.container}>
			  <TermCell content="Listing includes 12 photos + 6 videos + PDF uploads" />
			  <TermCell content="Up to 500 words in your listing description" />
			  <TermCell content="Three photo display within Auction catalogue view" />
			  <TermCell content="Gold marker will appear within your listing to highlight your" />
			  <TermCell content="Listing appears on the landing page slider on a random / rotating basis" />
			  <TermCell content="Your listing will also appear in the fixed side bar that follows users when scrolling, keeping your horse top of mind on a random/rotating basis" />
			  <TermCell content="Ability to add in your horse(s) pedigree" />
			  <TermCell content="Your horse will be included in Social Media posts & addtional marketing over the 2 weeks the Auction is live" />
			  <TermCell content="Included emails sent to all members with your selected breed/displine as their listed internet" />
			  <View style={styles.btnView}>
			  <TouchableHighlight 
			    style={styles.checkBtn} 
			    onPress={() => props.onChangeStandard(1, 0, 3)}>
			    <Text>Check</Text>
			  </TouchableHighlight>
			  </View>
			</View>
		)
	} else {
		return null;
	}
};
export default StandardTerms;