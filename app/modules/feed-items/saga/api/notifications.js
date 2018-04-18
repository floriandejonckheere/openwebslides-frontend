// @flow

import { call, put } from 'redux-saga/effects';

import users from 'modules/users';
import type { UserType } from 'modules/users';

import * as t from '../../actionTypes';

import Api from '../../api';
import { predicateTypes } from '../../model';
import type { FeedItemType } from '../../model';

import { setFeedItemsInState } from '../../actions';

const { setItemInState } = users.actions;

// TODO: change this to topic once backend is deployed
const mapEventTypeToPredicateType = {
  topic_created: predicateTypes.CREATE,
  topic_updated: predicateTypes.UPDATE,
};

export const apiGetNotificationsSaga = function* (action: t.FetchAction): Generator<*, *, *> {
  try {
    const response = yield call(Api.fetch);

    // eslint-disable-next-line flowtype/no-weak-types
    const data = response.body.data.map((item: Object): FeedItemType => {
      return {
        id: item.id,
        userId: item.relationships.user.data.id,
        topicId: item.relationships.topic.data.id,
        predicate: mapEventTypeToPredicateType[item.attributes.eventType],
        timestamp: Number(item.meta.createdAt) * 1000,
      };
    });

    const user: UserType = {
      id: response.body.included[0].id,
      email: response.body.included[0].attributes.email,
      firstName: response.body.included[0].attributes.firstName,
      lastName: response.body.included[0].attributes.lastName,
    };

    yield put(setFeedItemsInState(data));
    yield put(setItemInState(user));
  }
  catch (error) {
    // TODO
    throw error;
  }
};