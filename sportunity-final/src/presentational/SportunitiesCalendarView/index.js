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
 * You get a list of sportunities and you render them as a calendar
 *
 */
const SportunitiesCalendarView = ({ sportunities }) => (
  <View>
    <Text>
      This is supposed to be the calendar view, please implement me :(
    </Text>
    {sportunities.map(sportunity => (
      <Text key={sportunity.id}>
        {sportunity.title}
      </Text>
    ))}
  </View>
);

SportunitiesCalendarView.propTypes = {
  sportunities: PropTypes.arrayOf(SportunitySummary).isRequired
};

export default SportunitiesCalendarView;
