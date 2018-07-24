// @flow

import { call, put, select } from 'redux-saga/effects';

import api from 'api';
import { UnsupportedOperationError } from 'errors';
import { type ApiResponseData } from 'lib/ApiRequest';
import apiRequestsStatus from 'modules/apiRequestsStatus';
import platform from 'modules/platform';

import actions from '../../actions';
import * as a from '../../actionTypes';
import * as m from '../../model';

const apiGet = function* (action: a.ApiGetAction): Generator<*, *, *> {
  yield put(apiRequestsStatus.actions.setPending(action.type));

  try {
    const { id } = action.payload;
    const userAuth: ?platform.model.UserAuth = yield select(platform.selectors.getUserAuth);
    if (userAuth == null) throw new UnsupportedOperationError(`Not signed in.`);

    const response: ApiResponseData = yield call(api.users.get, id, userAuth.apiToken);
    const { attributes } = response.body.data;
    const user: m.User = {
      id,
      email: attributes.email,
      name: attributes.name,
    };
    yield put(actions.setMultipleInState([user]));

    yield put(apiRequestsStatus.actions.setSuccess(action.type));
  }
  catch (error) {
    yield put(apiRequestsStatus.actions.setFailure(action.type, error));
  }
};

export default apiGet;
