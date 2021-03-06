// @flow

import { type Saga } from 'redux-saga';
import { call, select } from 'redux-saga/effects';

import { UnsupportedOperationError } from 'errors';
import api from 'api';
import platform from 'modules/platform';

import * as a from '../../actionTypes';
import lib from '../../lib';
import selectors from '../../selectors';

const apiPatchAllByTopicIdAndRoot = function* (
  action: a.ApiPatchAllByTopicIdAndRootAction,
): Saga<void> {
  const { topicId, rootContentItemId, message } = action.payload;
  const userAuth: ?platform.model.UserAuth = yield select(platform.selectors.getUserAuth);
  if (userAuth == null) throw new UnsupportedOperationError(`Not signed in.`);

  const contentItemsById = yield select(selectors.getAllById);
  const rootContentItem = yield select(selectors.getById, { id: rootContentItemId });
  const descendantItems = yield call(
    lib.find.allDescendantItems, rootContentItem, contentItemsById,
  );
  const topicContentItems = [rootContentItem, ...descendantItems];

  yield call(api.topics.patchContent, topicId, topicContentItems, message, userAuth.accessToken);
};

export default apiPatchAllByTopicIdAndRoot;
