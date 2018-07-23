// @flow

import { expectSaga } from 'redux-saga-test-plan';

import apiSaga from '..';

import { apiGetNotificationsSaga } from '../notifications';
import * as a from '../../../actionTypes';

describe(`apiSaga`, (): void => {
  it(`takes every API_GET_NOTIFICATIONS action and forks apiGetNotificationsSaga`, (): void => {
    return expectSaga(apiSaga)
      .take(a.API_GET_NOTIFICATIONS, apiGetNotificationsSaga)
      .silentRun();
  });
});
