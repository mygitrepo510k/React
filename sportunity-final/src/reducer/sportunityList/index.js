import {
  includes
} from 'lodash';

import { changeSportunityFilterKind } from '../../action/actionNames';
import displayKinds from '../../enums/sportunityFilterKinds';

const defaultState = {
  selectedKind: displayKinds[0] // take the first one as default
};

export default (store = defaultState, action) => {
  switch (action.type) {
    case changeSportunityFilterKind: {
      const { kind } = action;
      if (includes(displayKinds, kind)) { // check this is a valid kind
        return {
          ...store,
          selectedKind: kind
        };
      }
      return store; // otherwise return the state unchanged
    }
    default:
      return store;
  }
};
