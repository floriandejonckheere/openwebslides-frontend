// @flow

/* eslint-disable max-len, sort-imports */

import { type Saga } from 'redux-saga';
import { all, takeEvery } from 'redux-saga/effects';

import asyncRequests from 'modules/asyncRequests';

import * as a from '../../actionTypes';

import apiDeleteToken from './apiDeleteToken';
import apiPatchConfirmation from './apiPatchConfirmation';
import apiPostConfirmation from './apiPostConfirmation';
import apiPatchPassword from './apiPatchPassword';
import apiPatchToken from './apiPatchToken';
import apiPostPassword from './apiPostPassword';
import apiPostToken from './apiPostToken';

const { sagaWrapper } = asyncRequests.lib;

const apiSaga = function* (): Saga<void> {
  yield all([
    takeEvery(a.API_DELETE_TOKEN, sagaWrapper, apiDeleteToken),
    takeEvery(a.API_PATCH_CONFIRMATION, sagaWrapper, apiPatchConfirmation),
    takeEvery(a.API_PATCH_PASSWORD, sagaWrapper, apiPatchPassword),
    takeEvery(a.API_PATCH_TOKEN, sagaWrapper, apiPatchToken),
    takeEvery(a.API_POST_CONFIRMATION, sagaWrapper, apiPostConfirmation),
    takeEvery(a.API_POST_PASSWORD, sagaWrapper, apiPostPassword),
    takeEvery(a.API_POST_TOKEN, sagaWrapper, apiPostToken),
  ]);
};

const apiSagas = {
  apiDeleteToken,
  apiPatchConfirmation,
  apiPatchPassword,
  apiPatchToken,
  apiPostConfirmation,
  apiPostPassword,
  apiPostToken,
};

export { apiSagas };
export default apiSaga;
