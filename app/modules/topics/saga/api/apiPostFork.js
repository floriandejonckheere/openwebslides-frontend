// @flow

import { type Saga } from 'redux-saga';
import { select, call } from 'redux-saga/effects';

import api from 'api';
import { UnexpectedHttpResponseError, UnsupportedOperationError } from 'errors';
import { type ApiResponseData } from 'lib/ApiConnection';
import platform from 'modules/platform';

import * as a from '../../actionTypes';

const apiPostFork = function* (
  action: a.ApiPostForkAction,
): Saga<{ id: string }> {
  const { id } = action.payload;
  const userAuth: ?platform.model.UserAuth = yield select(platform.selectors.getUserAuth);
  if (userAuth == null) throw new UnsupportedOperationError(`Not signed in.`);

  const topicsResponseData: ApiResponseData = yield call(
    api.topics.postFork, id, userAuth.accessToken,
  );

  if (topicsResponseData.body == null) {
    throw new UnexpectedHttpResponseError();
  }

  const { id: forkedId } = topicsResponseData.body.data;

  return { id: forkedId };
};

export default apiPostFork;
