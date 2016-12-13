import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput
} from 'react-native';

import styles from './style';
import { images, metrics } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import ModalPicker from 'react-native-modal-picker';
const Ads = (props) => {
let indexColor = 0;
const dataColor = [
    { key: indexColor++, label: "Bay" },
    { key: indexColor++, label: "Black" },
    { key: indexColor++, label: "Brown" },
    { key: indexColor++, label: "Buckskin" },
    { key: indexColor++, label: "Champagne" },
    { key: indexColor++, label: "Chestnut" },
    { key: indexColor++, label: "Coloured" },
    { key: indexColor++, label: "Cremello" },
    { key: indexColor++, label: "Grey" },
    { key: indexColor++, label: "Palomino" },
    { key: indexColor++, label: "Perlino" },
    { key: indexColor++, label: "Pinto" },
    { key: indexColor++, label: "Roan"},
];
let indexSex = 0;
const dataSex = [
    { key: indexSex++, label: "Colt" },
    { key: indexSex++, label: "Filly" },
    { key: indexSex++, label: "Gelding" },
    { key: indexSex++, label: "Mare" },
    { key: indexSex++, label: "Stallion/Entire" },
];

return (
  <KeyboardAwareScrollView
   style={styles.container}
   keyboardDismissMode="interactive"
   keyboardShouldPersistTaps={true}
   getTextInputRef={() => {
   	return [this._titleTI, this._nameTI, this._sireTI, this._damTI, this._colorTI, this._yobTI]
   }}>
  	<View style={styles.mainView}>
	    <View style={styles.progressHeader}>
	      <View style={styles.leftProgHeader}>
	      </View>
	      <View style={styles.centerProgHeader}>
	        <Text style={styles.progCircle}>2</Text>
	      </View>
	      <View style={styles.rightProgHeader}>
	      </View>
	    </View>
	    <View style={styles.headerTitle}>
	      <Text>Add Horse</Text>
	    </View>
	    <View style={styles.subTitle}>
	      <View style={styles.leftSubT}>
	        <Text style={{}}>Horse Information</Text>
	      </View>
	      <View style={styles.rightSubT}>
	      </View>
	    </View>
	    <View style={styles.mainForm}>
	      <Text style={styles.labelView}>Heading</Text>
	      <View style={styles.inputView}>
	      <TextInput style={styles.inputTI} placeholder="Unknown" 
	      ref={(r) => {this._titleTI = r;}} returnKeyType={'next'}
	      onSubmitEditing={(event) => this._nameTI.focus()} value={props.title}
	      onChangeText={(text) => props.onGetFormData(text, 1)}></TextInput>
	      </View>
	      <Text style={styles.labelView}>Horse name</Text>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" 
	      ref={(r) => {this._nameTI = r;}} returnKeyType={'next'}
	      onSubmitEditing={(event) => this._sireTI.focus()} value={props.name}
	      onChangeText={(text) => props.onGetFormData(text, 2)}></TextInput>
	      </View>
	      <Text style={styles.labelView}>Sire</Text>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" 
	      ref={(r) => {this._sireTI = r;}} returnKeyType={'next'}
	      onSubmitEditing={(event) => this._damTI.focus()} value={props.sire}
	      onChangeText={(text) => props.onGetFormData(text, 3)}></TextInput>
	      </View>
	      <Text style={styles.labelView}>Dam</Text>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" 
	      ref={(r) => {this._damTI = r;}} returnKeyType={'next'}
	      onSubmitEditing={(event) => this._colorTI.focus()} value={props.dam}
	      onChangeText={(text) => props.onGetFormData(text, 4)}></TextInput>
	      </View>
	      <Text style={styles.labelView}>Colour</Text>
          <ModalPicker
                    data={dataColor}
                    initValue="Unknown"
                    onChange={(option) => props.onSelectColor(option.label)}>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" editable={false}
	      ref={(r) => {this._colorTI = r;}} returnKeyType={'next'} value={props.color}
	      ></TextInput>
	      </View>
	      </ModalPicker>
	      
	      <Text style={styles.labelView}>YOB</Text>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" 
	      ref={(r) => {this._yobTI = r;}} returnKeyType={'next'} value={props.yob}
	      onChangeText={(text) => props.onGetFormData(text, 6)}></TextInput>
	      </View>
	      <Text style={styles.labelView}>Sex</Text>
          <ModalPicker
                    data={dataSex}
                    initValue="Unknown"
                    onChange={(option) => props.onSelectSex(option.label)}>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" editable={false}
	      ref={(r) => {this._sexTI = r;}} returnKeyType={'go'} value={props.sex}
	      ></TextInput>
	      </View>
	      </ModalPicker>
	      <Text style={styles.labelView}>Has this horse been seen to windsuck?</Text>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" 
	      ref={(r) => {this._windsuckTI = r;}} returnKeyType={'next'}
	      onSubmitEditing={(event) => this._sireTI.focus()} value={props.windsuck}
	      onChangeText={(text) => props.onGetFormData(text, 7)}></TextInput>
	      </View>
	      <Text style={styles.labelView}>Description</Text>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" 
	      ref={(r) => {this._descTI = r;}} returnKeyType={'next'}
	      onSubmitEditing={(event) => this._sireTI.focus()} value={props.desc}
	      onChangeText={(text) => props.onGetFormData(text, 8)}></TextInput>
	      </View>
	      <Text style={styles.labelView}>Suburb/Town</Text>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" 
	      ref={(r) => {this._townTI = r;}} returnKeyType={'next'}
	      onSubmitEditing={(event) => this._sireTI.focus()} value={props.town}
	      onChangeText={(text) => props.onGetFormData(text, 8)}></TextInput>
	      </View>
	      <Text style={styles.labelView}>Is this horse being sold with a reserve?</Text>
	      <View style={styles.inputView}>
	      <TextInput style={{flex:1, color: 'black'}} placeholder="Unknown" 
	      ref={(r) => {this._reserveTI = r;}} returnKeyType={'next'}
	      onSubmitEditing={(event) => this._sireTI.focus()} value={props.reserve}
	      onChangeText={(text) => props.onGetFormData(text, 9)}></TextInput>
	      </View>
	    </View>
        <View style={styles.btnView}>
          <TouchableHighlight style={styles.activeBtn}
          	onPress={() => {
              var horseInfo = [];
              horseInfo.title = props.title;
              horseInfo.name = props.name;
              horseInfo.sire = props.sire;
              horseInfo.dam = props.dam;
              horseInfo.color = props.color;
              horseInfo.yob = props.yob;
              props.saveHorseInfo(horseInfo, props.entryId);
          	}}
          	>
          	  <Text style={styles.activeBtnText}>Next</Text>
          </TouchableHighlight>
        </View>
    </View>
  </KeyboardAwareScrollView>
);
}

export default Ads;