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
 * You get a list of sportunities and you render them as a list
 *
 */
const SportunitiesListView = ({ sportunities }) => (
  <View>
    <Text>
      This is supposed to be the list view, please implement me :(
    </Text>
    {sportunities.map(sportunity => (
      <Text key={sportunity.id}>
        {sportunity.title}
      </Text>
    ))}
  </View>
);

SportunitiesListView.propTypes = {
  sportunities: PropTypes.arrayOf(SportunitySummary).isRequired
};

export default SportunitiesListView;
