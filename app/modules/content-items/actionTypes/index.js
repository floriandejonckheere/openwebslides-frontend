// @flow

import type { Identifier } from 'types/model';
import type {
  ContentItem,
  ContentItemType,
  Context,
  VerticalContext,
  AllPropsForAllTypes,
} from '../model';

// Reducer actions
export const ADD_TO_STATE: 'contentItems/ADD_TO_STATE' = 'contentItems/ADD_TO_STATE';
export const EDIT_PROPS_FOR_TYPE_IN_STATE: 'contentItems/EDIT_PROPS_FOR_TYPE_IN_STATE' = 'contentItems/EDIT_PROPS_FOR_TYPE_IN_STATE';
export const SWITCH_EDITING_IN_STATE: 'contentItems/SWITCH_EDITING_IN_STATE' = 'contentItems/SWITCH_EDITING_IN_STATE';
export const MOVE_IN_STATE: 'contentItems/MOVE_IN_STATE' = 'contentItems/MOVE_IN_STATE';
export const REMOVE_FROM_STATE: 'contentItems/REMOVE_FROM_STATE' = 'contentItems/REMOVE_FROM_STATE';
export const SET_IN_STATE: 'contentItems/SET_IN_STATE' = 'contentItems/SET_IN_STATE';
export const SET_MULTIPLE_IN_STATE: 'contentItems/SET_MULTIPLE_IN_STATE' = 'contentItems/SET_MULTIPLE_IN_STATE';

// Task saga actions
export const ADD: 'contentItems/ADD' = 'contentItems/ADD';
export const EDIT: 'contentItems/EDIT' = 'contentItems/EDIT';
export const TOGGLE_EDITING: 'contentItems/TOGGLE_EDITING' = 'contentItems/TOGGLE_EDITING';
export const MOVE: 'contentItems/MOVE' = 'contentItems/MOVE';
export const INDENT: 'contentItems/INDENT' = 'contentItems/INDENT';
export const REVERSE_INDENT: 'contentItems/REVERSE_INDENT' = 'contentItems/REVERSE_INDENT';
export const REMOVE: 'contentItems/REMOVE' = 'contentItems/REMOVE';
export const REMOVE_AND_TOGGLE_PREVIOUS_ITEM: 'contentItems/REMOVE_AND_TOGGLE_PREVIOUS_ITEM' = 'contentItems/REMOVE_AND_TOGGLE_PREVIOUS_ITEM';

// API saga actions

/* Action types */

export type AddToStateAction = {
  type: typeof ADD_TO_STATE,
  payload: {
    id: Identifier,
    type: ContentItemType,
    context: ?VerticalContext,
    propsForType: $Shape<AllPropsForAllTypes>,
  },
};

export type EditPropsForTypeInStateAction = {
  type: typeof EDIT_PROPS_FOR_TYPE_IN_STATE,
  payload: {
    contentItem: ContentItem,
    propsForType: $Shape<AllPropsForAllTypes>,
  },
};

export type SwitchEditingInStateAction = {
  type: typeof SWITCH_EDITING_IN_STATE,
  payload: {
    previousEditingItemId: ?Identifier,
    nextEditingItemId: ?Identifier,
  },
};

export type MoveInStateAction = {
  type: typeof MOVE_IN_STATE,
  payload: {
    id: Identifier,
    nextContext: VerticalContext,
  },
};

export type RemoveFromStateAction = {
  type: typeof REMOVE_FROM_STATE,
  payload: {
    id: Identifier,
  },
};

export type SetMultipleInStateAction = {
  type: typeof SET_MULTIPLE_IN_STATE,
  payload: {
    contentItems: Array<ContentItem>,
  },
};

export type AddAction = {
  type: typeof ADD,
  payload: {
    type: ContentItemType,
    context: ?Context,
    propsForType: $Shape<AllPropsForAllTypes>,
  },
};

export type EditAction = {
  type: typeof EDIT,
  payload: {
    id: Identifier,
    propsForType: $Shape<AllPropsForAllTypes>,
  },
};

export type ToggleEditingAction = {
  type: typeof TOGGLE_EDITING,
  payload: {
    id: Identifier,
    isEditing?: boolean,
  },
};

export type MoveAction = {
  type: typeof MOVE,
  payload: {
    id: Identifier,
    nextContext: VerticalContext,
  },
};

export type IndentAction = {
  type: typeof INDENT,
  payload: {
    id: Identifier,
  },
};

export type ReverseIndentAction = {
  type: typeof REVERSE_INDENT,
  payload: {
    id: Identifier,
  },
};

export type RemoveAction = {
  type: typeof REMOVE,
  payload: {
    id: Identifier,
  };
};

export type RemoveAndTogglePreviousItemAction = {
  type: typeof REMOVE_AND_TOGGLE_PREVIOUS_ITEM,
  payload: {
    id: Identifier,
  },
};

export type ReducerAction =
  | AddToStateAction
  | EditPropsForTypeInStateAction
  | SwitchEditingInStateAction
  | MoveInStateAction
  | RemoveFromStateAction
  | SetMultipleInStateAction;

export type TaskSagaAction =
  | AddAction
  | EditAction
  | ToggleEditingAction
  | MoveAction
  | IndentAction
  | ReverseIndentAction
  | RemoveAction
  | RemoveAndTogglePreviousItemAction;