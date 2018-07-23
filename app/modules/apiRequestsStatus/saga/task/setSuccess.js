// @flow

import { put } from 'redux-saga/effects';

import actions from '../../actions';
import * as a from '../../actionTypes';
import * as m from '../../model';

const setSuccessSaga = function* (action: a.SetSuccessAction): Generator<*, *, *> {
  const { requestId, value } = action.payload;
  const requestStatus: m.SuccessRequestStatus = {
    status: m.statusTypes.SUCCESS,
    value,
  };

  yield put(actions.setStatusInState(requestId, requestStatus));
};

export default setSuccessSaga;
