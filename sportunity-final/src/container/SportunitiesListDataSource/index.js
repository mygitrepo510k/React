import React, {
  PropTypes
} from 'react';
import { connect } from 'react-redux';

import sportunitiesExamples from '../../dummyData/SportunitySummaries';

import SportunitySummary from
'../../customPropType/SportunitySummary';
/**
 * This component is here to inject data into other components.
 * It does not display anything and inject data in presentational
 * container, therefore it is a container component
 */
const SportunitiesListDataSource = ({ ComponentToFeed, sportunities }) => (
  <ComponentToFeed
    sportunities={sportunities}
  />
);

SportunitiesListDataSource.propTypes = {
  /**
   * I was not able to find how to specify that this prop should be a
   * React Component (not an instance of one)
   *
   * If anyone finds how to do it feel free to change any by the correct
   * propType
   */
  ComponentToFeed: PropTypes.any.isRequired,
  sportunities: PropTypes.arrayOf(SportunitySummary)
};


const stateToProps = ({ sportunityList }) => ({
  sportunities: sportunitiesExamples.filter(
    ({ kind }) => kind === sportunityList.selectedKind
  )
});

export default connect(stateToProps)(SportunitiesListDataSource);
