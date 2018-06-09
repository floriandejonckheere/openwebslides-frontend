// @flow

import { put } from 'redux-saga/effects';

import * as t from '../../actionTypes';
import { apiGetAllByUserId } from '../../actions';

const getAllSaga = function* (action: t.GetAllByUserIdAction): Generator<*, *, *> {
  yield put(apiGetAllByUserId(action.payload.userId));
};

export default getAllSaga;
