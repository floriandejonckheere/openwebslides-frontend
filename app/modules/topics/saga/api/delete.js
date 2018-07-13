// @flow

import { call, put, select } from 'redux-saga/effects';

import authentication from 'modules/authentication';
import { TopicsApi } from 'lib/api';

import * as t from '../../actionTypes';
import { removeFromState } from '../../actions';

const { getToken } = authentication.selectors;

export const apiDeleteSaga = function* (action: t.ApiDeleteTopicAction): Generator<*, *, *> {
  try {
    const { id } = action.payload;
    const token = yield select(getToken);

    yield call(TopicsApi.destroy, id, token);
    yield put(removeFromState(id));
  }
  catch (error) {
    // TODO: fix saga error handling
    throw error;
  }
};
