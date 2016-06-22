import * as Animatable from 'react-native-animatable';
import _ from 'lodash';
import moment from 'moment';

import Progress from './Progress';
import Empty from './Empty';
import * as styles from '../styles';
import * as constants from '../constants';
import RemoteImage from './RemoteImage';
import { loadLocale } from '../util';

import React, {Component} from "react";
import {TouchableOpacity, ListView, Image, View, Text} from "react-native";

import { PropTypes } from 'react-native-globalize';

export default class CollectionMenu extends Component {
  constructor(props) {
    super(props);
    this.regex = /(<([^>]+)>)/ig;
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      loaded: false,
      imageLoaded: false,
      collections: [],
      dataSource: this.ds.cloneWithRows([])
    }
  }

  componentWillMount(){
    loadLocale(this.context.globalize.locale, 'moment');
  }

  componentDidMount(){
    this.fetchData();
  }
  
  filter(products = []) {
    return new Promise((res, rej) => {
      const filtered = products.filter( item => {
          return !_.isNull(item.published_at)
      })
      res(_.sortBy(filtered, 'updated_at').reverse());
    })
  }

  fetchData(){
    var type = this.props.SHOPIFY_CONFIG.configuration.collection === 'smart' ? 'smart_collections' : 'custom_collections';
    fetch('https://'+this.props.SHOPIFY_CONFIG.shop+'/admin/'+type+'.json', {
      headers: new Headers({
        'X-Shopify-Access-Token': this.props.SHOPIFY_CONFIG.access_token
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(this.props.SHOPIFY_CONFIG.configuration.collection === 'smart'){
        return this.filter(responseData.smart_collections); 
      } else {
        return this.filter(responseData.custom_collections); 
      }
    })
    .then((collections) => 
    { 
        this.setState({
          loaded: true,
          collections: collections,
          dataSource: this.ds.cloneWithRows(collections)
        });
    }).done();
  }

  selectionAction(item){
    this.props.selectCollection(item);
  }

  collectionRow(item, section, index){
    
    var description = item.body_html ? item.body_html.replace(this.regex, '').trim() : '';
    if(description.length > 1){
      description = <Text style={styles.collectionDescription} numberOfLines={3}>{description}</Text>;
    } else {
      description = null;
    }
    
    var content = <View style={styles.collectionMetadata}>
                    <Text style={styles.collectionTitle}>{item.title}</Text>
                    {description}
                    <Text style={styles.collectionUpdated}>Updated {moment(item.updated_at.substring(0,10)).startOf('hour').fromNow()}</Text>
                  </View>

    var image = <View style={[styles.collectionImage]}>
                  <Empty transparent={false} text="We can't seem to locate the image" />
                </View>
    if(!_.isUndefined(item.image)){
      image = <RemoteImage 
                style={styles.collectionImage}
                url={item.image.src} />;
    }
    
    content = <View>
                {image}
                {content}
              </View>;
    return( 
        <Animatable.View 
          animation='fadeInLeft'
          duration={400} 
          delay={index*200}  
          style={styles.collection}>
          <TouchableOpacity onPress={() => this.selectionAction(item)}>
            {content}
          </TouchableOpacity>
        </Animatable.View>  
    );
  }

  render(){
    var content = <Progress darkColorScheme={false} />;
    if(this.state.loaded){
      content = <ListView
                contentContainerStyle={styles.collectionListView}
                dataSource={this.state.dataSource}
                renderRow={(item) => this.collectionRow(item)} />
    }
    return(
      content
    );
  }
}
CollectionMenu.contextTypes = {
  globalize: PropTypes.globalizeShape
};
                  