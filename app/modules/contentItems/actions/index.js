// @flow

import addToState from './addToState';
import editPropsForTypeInState from './editPropsForTypeInState';
import switchEditingInState from './switchEditingInState';
import moveInState from './moveInState';
import removeFromState from './removeFromState';
import setMultipleInState from './setMultipleInState';
import add from './add';
import edit from './edit';
import toggleEditing from './toggleEditing';
import move from './move';
import indent from './indent';
import reverseIndent from './reverseIndent';
import remove from './remove';
import removeAndTogglePreviousItem from './removeAndTogglePreviousItem';

const actions = {
  addToState,
  editPropsForTypeInState,
  switchEditingInState,
  moveInState,
  removeFromState,
  setMultipleInState,
  add,
  edit,
  toggleEditing,
  move,
  indent,
  reverseIndent,
  remove,
  removeAndTogglePreviousItem,
};

export default actions;