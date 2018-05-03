// @flow

import { call, put } from 'redux-saga/effects';

import * as t from '../../actionTypes';

import Api from '../../api';
import type { Topic } from '../../model';

import { addToState, setItemsInState } from '../../actions';

export const apiGetTopicSaga = function* (action: t.GetAction): Generator<*, *, *> {
  try {
    const response = yield call(Api.get, action.payload.id);

    const item = response.body.data;
    const userId = response.body.included[0].id;

    yield put(addToState(
      item.id,
      userId,
      item.attributes.title,
      item.attributes.description,
      'w4lg2u0p1h', // TODO: can't find in api call response
    ));
  }
  catch (error) {
    // TODO
  }
};

export const apiGetAllTopicsByUserIdSaga = function* (
  action: t.GetAllByUserIdAction,
): Generator<*, *, *> {
  try {
    const response = yield call(Api.getAllByUserId, action.payload.userId);

    // eslint-disable-next-line flowtype/no-weak-types
    const data = response.body.data.map((item: Object): Topic => {
      return {
        id: item.id,
        userId: action.payload.userId,
        title: item.attributes.title,
        description: item.attributes.description,
        rootContentItemId: 'w4lg2u0p1h', // TODO: can't find in api call response
      };
    });

    yield put(setItemsInState(data));
  }
  catch (error) {
    // TODO
  }
};