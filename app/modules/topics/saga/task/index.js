// @flow

/* eslint-disable max-len, sort-imports */

import { type Saga } from 'redux-saga';
import { all, takeEvery } from 'redux-saga/effects';

import asyncRequests from 'modules/asyncRequests';

import * as a from '../../actionTypes';

import create from './create';
import discard from './discard';
import fetch from './fetch';
import fetchWithContent from './fetchWithContent';
import fork from './fork';
import patchWithContent from './patchWithContent';
import remove from './remove';
import update from './update';

const { sagaWrapper } = asyncRequests.lib;

const taskSaga = function* (): Saga<void> {
  yield all([
    takeEvery(a.CREATE, sagaWrapper, create),
    takeEvery(a.DISCARD, sagaWrapper, discard),
    takeEvery(a.FETCH, sagaWrapper, fetch),
    takeEvery(a.FETCH_WITH_CONTENT, sagaWrapper, fetchWithContent),
    takeEvery(a.FORK, sagaWrapper, fork),
    takeEvery(a.PATCH_WITH_CONTENT, sagaWrapper, patchWithContent),
    takeEvery(a.REMOVE, sagaWrapper, remove),
    takeEvery(a.UPDATE, sagaWrapper, update),
  ]);
};

const taskSagas = {
  create,
  discard,
  fetch,
  fetchWithContent,
  fork,
  patchWithContent,
  remove,
  update,
};

export { taskSagas };
export default taskSaga;
