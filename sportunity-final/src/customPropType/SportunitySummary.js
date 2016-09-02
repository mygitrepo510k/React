import {
  PropTypes
} from 'react';

import sportunityKinds from '../enums/sportunityFilterKinds';

/**
 * This type represents the summary of a sportunity and will
 * be used in the SportunityPage
 *
 * Of course this object is not sealed, any attribute can be added if needed
 *
 * For example we will probably need in the future the sportuniyId and the id
 * of the place where the sportunity happen
 */
export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  // The type may be changed afterward when we plug the API
  level: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(sportunityKinds).isRequired,
  // TODO This should be changed into an enum in a upcoming commit
  // so we can deduce the color of the state
  status: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired
}).isRequired;
