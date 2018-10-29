// @flow

import * as a from '../actionTypes';
import * as m from '../model';

import setMultipleInState from './setMultipleInState';

const initialState: m.AlertsState = {
  byId: {},
};

const reducer = (
  state: m.AlertsState = initialState,
  action: a.AlertsReducerAction,
): m.AlertsState => {
  switch (action.type) {
    case a.SET_MULTIPLE_IN_STATE:
      return setMultipleInState(state, action);
    default:
      // Make sure a flow type error is thrown when not all action.type cases are handled
      (action: empty);
      return state;
  }
};

export { initialState };
export default reducer;
