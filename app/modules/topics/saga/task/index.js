// @flow

/* eslint-disable sort-imports */

import { type Saga } from 'redux-saga';
import { all, takeEvery } from 'redux-saga/effects';

import * as a from '../../actionTypes';

import add from './add';
import edit from './edit';
import get from './get';
import load from './load';
import remove from './remove';
import save from './save';

const taskSaga = function* (): Saga<void> {
  yield all([
    takeEvery(a.ADD, add),
    takeEvery(a.EDIT, edit),
    takeEvery(a.GET, get),
    takeEvery(a.LOAD, load),
    takeEvery(a.REMOVE, remove),
    takeEvery(a.SAVE, save),
  ]);
};

const taskSagas = {
  add,
  edit,
  get,
  load,
  remove,
  save,
};

export { taskSagas };
export default taskSaga;
