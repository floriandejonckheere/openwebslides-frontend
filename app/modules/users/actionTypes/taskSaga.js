// @flow

/* eslint-disable no-multiple-empty-lines, flowtype/require-types-at-top */


// Action constants --------------------------------------------------------------------------------

export const FETCH: 'users/FETCH' = 'users/FETCH';


// Action types ------------------------------------------------------------------------------------

export type FetchAction = {|
  type: typeof FETCH,
  payload: {
    id: string,
  },
|};


// TaskSaga action ---------------------------------------------------------------------------------

export type TaskSagaAction =
  | FetchAction;