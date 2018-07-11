// @flow

import * as t from '../actionTypes';
import * as m from '../model';
import { dummyContentItemsById } from '../dummyData';

import addToState from './addToState';
import editPropsForTypeInState from './editPropsForTypeInState';
import switchEditingInState from './switchEditingInState';
import moveInState from './moveInState';
import removeFromState from './removeFromState';
import setMultipleInState from './setMultipleInState';

const initialState: m.ContentItemsState = {
  byId: dummyContentItemsById,
};

const reducer = (
  state: m.ContentItemsState = initialState,
  action: t.ReducerAction,
): m.ContentItemsState => {
  switch (action.type) {
    case t.ADD_TO_STATE:
      return addToState(state, action);
    case t.EDIT_PROPS_FOR_TYPE_IN_STATE:
      return editPropsForTypeInState(state, action);
    case t.SWITCH_EDITING_IN_STATE:
      return switchEditingInState(state, action);
    case t.MOVE_IN_STATE:
      return moveInState(state, action);
    case t.REMOVE_FROM_STATE:
      return removeFromState(state, action);
    case t.SET_MULTIPLE_IN_STATE:
      return setMultipleInState(state, action);
    default:
      // Make sure a flow type error is thrown when not all action.type cases are handled
      (action: empty);
      return state;
  }
};

export default reducer;
