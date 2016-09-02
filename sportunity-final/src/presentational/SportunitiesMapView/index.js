import React, {
  PropTypes
} from 'react';

import {
  Text,
  View
} from 'react-native';

import SportunitySummary from '../../customPropType/SportunitySummary';

/**
 * TODO Render it properly
 *
 * You get a list of sportunities and you render them in a map
 *
 */
const SportunitiesMapView = ({ sportunities }) => (
  <View>
    <Text>
      This is supposed to be the map view, please implement me :(
    </Text>
    {sportunities.map(sportunity => (
      <Text key={sportunity.id}>
        {sportunity.title}
      </Text>
    ))}
  </View>
);

SportunitiesMapView.propTypes = {
  sportunities: PropTypes.arrayOf(SportunitySummary).isRequired
};

export default SportunitiesMapView;
