// @flow

import type { Error } from 'types/error';
import type { Identifier } from 'types/model';
import type { RouterHistory } from 'react-router-dom';

import type { Topic } from './model';

/* Action constants */

// Reducer actions
export const ADD_TO_STATE: 'topics/ADD_TO_STATE' = 'topics/ADD_TO_STATE';
export const EDIT_IN_STATE: 'topics/EDIT_IN_STATE' = 'topics/EDIT_IN_STATE';
export const REMOVE_FROM_STATE: 'topics/REMOVE_FROM_STATE' = 'topics/REMOVE_FROM_STATE';
export const SET_ITEMS_IN_STATE: 'topics/SET_ITEMS_IN_STATE' = 'topics/SET_ITEMS_IN_STATE';

export const ADD_TO_STATE_ERROR: 'topics/ADD_TO_STATE_ERROR' = 'topics/ADD_TO_STATE_ERROR';
export const EDIT_IN_STATE_ERROR: 'topics/EDIT_IN_STATE_ERROR' = 'topics/EDIT_IN_STATE_ERROR';
export const REMOVE_FROM_STATE_ERROR: 'topics/REMOVE_FROM_STATE_ERROR' = 'topics/REMOVE_FROM_STATE_ERROR';
export const SET_ITEMS_IN_STATE_ERROR: 'topics/SET_ITEMS_IN_STATE_ERROR' = 'topics/SET_ITEMS_IN_STATE_ERROR';

// Task saga actions
export const ADD: 'topics/ADD' = 'topics/ADD';
export const EDIT: 'topics/EDIT' = 'topics/EDIT';
export const REMOVE: 'topics/REMOVE' = 'topics/REMOVE';
export const FETCH: 'topics/FETCH' = 'topics/FETCH';

export const ADD_ERROR: 'topics/ADD_ERROR' = 'topics/ADD_ERROR';
export const EDIT_ERROR: 'topics/EDIT_ERROR' = 'topics/EDIT_ERROR';
export const REMOVE_ERROR: 'topics/REMOVE_ERROR' = 'topics/REMOVE_ERROR';
export const FETCH_ERROR: 'topics/FETCH_ERROR' = 'topics/FETCH_ERROR';

// API saga actions
export const API_DELETE_TOPIC: 'topics/API_DELETE_TOPIC' = 'topics/API_DELETE_TOPIC';
export const API_GET_TOPICS: 'topics/API_GET_TOPICS' = 'topics/API_GET_TOPICS';
export const API_POST_TOPIC: 'topics/API_POST_TOPIC' = 'topics/API_POST_TOPIC';

/* Action types */

// Reducer actions
export type AddToStateAction = {
  type: typeof ADD_TO_STATE,
  payload: {
    id: Identifier,
    userId: Identifier,
    title: string,
    description: string,
    rootContentItemId: Identifier,
  },
};

export type EditInStateAction = {
  type: typeof EDIT_IN_STATE,
  payload: {
    id: Identifier,
    title: ?string,
    description: ?string,
  },
};

export type RemoveFromStateAction = {
  type: typeof REMOVE_FROM_STATE,
  payload: {
    id: Identifier,
  },
};

export type SetItemsInStateAction = {
  type: typeof SET_ITEMS_IN_STATE,
  payload: {
    items: ?Array<Topic>,
  },
};

export type AddToStateErrorAction = {
  type: typeof ADD_TO_STATE_ERROR,
  error: Error,
};

export type EditInStateErrorAction = {
  type: typeof EDIT_IN_STATE_ERROR,
  error: Error,
};

export type RemoveFromStateErrorAction = {
  type: typeof REMOVE_FROM_STATE_ERROR,
  error: Error,
};

export type SetItemsInStateErrorAction = {
  type: typeof SET_ITEMS_IN_STATE_ERROR,
  error: Error,
};

// Task saga actions
export type AddAction = {
  type: typeof ADD,
  payload: {
    id: Identifier,
    userId: Identifier,
    title: string,
    description: string,
    rootContentItemId: Identifier,
    history: RouterHistory,
  },
};

export type EditAction = {
  type: typeof EDIT,
  payload: {
    id: Identifier,
    title: ?string,
    description: ?string,
  },
};

export type RemoveAction = {
  type: typeof REMOVE,
  payload: {
    id: Identifier,
    modalType: string,
  },
};

export type FetchAction = {
  type: typeof FETCH,
};

export type AddErrorAction = {
  type: typeof ADD_ERROR,
  error: Error,
};

export type EditErrorAction = {
  type: typeof EDIT_ERROR,
  error: Error,
};

export type RemoveErrorAction = {
  type: typeof REMOVE_ERROR,
  error: Error,
};

export type FetchErrorAction = {
  type: typeof FETCH_ERROR,
  error: Error,
};

// API saga actions
export type ApiDeleteTopicAction = {
  type: typeof API_DELETE_TOPIC,
  payload: {
    id: Identifier,
  },
};

export type ApiGetTopicsAction = {
  type: typeof API_GET_TOPICS,
};

export type ApiPostTopicAction = {
  type: typeof API_POST_TOPIC,
  payload: {
    userId: Identifier,
    title: string,
    description: ?string,
  },
};

export type TopicReducerAction =
  | AddToStateAction
  | EditInStateAction
  | RemoveFromStateAction
  | SetItemsInStateAction
  | AddToStateErrorAction
  | EditInStateErrorAction
  | RemoveFromStateErrorAction
  | SetItemsInStateErrorAction;


export type TopicTaskSagaAction =
  | AddAction
  | EditAction
  | FetchAction
  | RemoveAction
  | AddErrorAction
  | EditErrorAction
  | FetchErrorAction
  | RemoveErrorAction;
