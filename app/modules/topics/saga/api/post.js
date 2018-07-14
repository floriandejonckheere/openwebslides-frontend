// @flow

import { call, select } from 'redux-saga/effects';

import authentication from 'modules/authentication';
import apis from 'apis';

import * as t from '../../actionTypes';

const { getToken } = authentication.selectors;

export const apiPostSaga = function* (action: t.ApiPostTopicAction): Generator<*, *, *> {
  try {
    const { userId, title, description } = action.payload;
    const token = yield select(getToken);

    // TODO: add rootContentItemId later
    yield call(apis.topics.post, userId, title, description, token);
  }
  catch (error) {
    // TODO: fix saga error handling
    throw error;
  }
};
