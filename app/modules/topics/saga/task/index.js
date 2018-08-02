// @flow

/* eslint-disable sort-imports */

import { type Saga } from 'redux-saga';
import { all, takeEvery } from 'redux-saga/effects';

import * as a from '../../actionTypes';

import addSaga from './add';
import editSaga from './edit';
import getSaga from './get';
import removeSaga from './remove';
import saveSaga from './save';
import loadSaga from './load';

const taskSaga = function* (): Saga<void> {
  yield all([
    takeEvery(a.ADD, addSaga),
    takeEvery(a.EDIT, editSaga),
    takeEvery(a.GET, getSaga),
    takeEvery(a.REMOVE, removeSaga),
    takeEvery(a.SAVE, saveSaga),
    takeEvery(a.LOAD, loadSaga),
  ]);
};

export default taskSaga;
