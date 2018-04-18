// @flow

import { put } from 'redux-saga/effects';

import * as t from '../../actionTypes';
import { apiGetUsers } from '../../actions';

const getSaga = function* (action: t.GetAction): Generator<*, *, *> {
  const { id } = action.payload;

  yield put(apiGetUsers(id));
};

export default getSaga;