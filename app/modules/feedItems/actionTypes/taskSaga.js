// @flow

/* eslint-disable no-multiple-empty-lines, flowtype/require-types-at-top */

import { type TaskSagaAction } from 'types/actions';


// Action constants --------------------------------------------------------------------------------

export const FETCH_ALL: 'feedItems/FETCH_ALL' = 'feedItems/FETCH_ALL';


// Action types ------------------------------------------------------------------------------------

export type FetchAllAction = {|
  ...TaskSagaAction,
  type: typeof FETCH_ALL,
  payload: {|
    ...$PropertyType<TaskSagaAction, 'payload'>,
  |},
|};


// TaskSaga action ---------------------------------------------------------------------------------

export type FeedItemsTaskSagaAction =
  | FetchAllAction;
