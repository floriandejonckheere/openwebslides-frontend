// @flow

import _ from 'lodash';
import { select } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { UnsupportedOperationError } from 'errors';
import { dummyUserData } from 'lib/testResources';

import actions from '../../actions';
import * as m from '../../model';
import selectors from '../../selectors';

import { sagas } from '..';

describe(`addTopicId`, (): void => {

  let dummyTopicId: string;
  let dummyTopicIds: $ReadOnlyArray<string>;
  let dummyUser: m.User;

  beforeEach((): void => {
    dummyTopicId = 'dummyNewTopicId';
    dummyTopicIds = ['existingTopicId1', 'existingTopicId2'];
    dummyUser = { ...dummyUserData.user, topicIds: dummyTopicIds };
  });

  it(`puts an EDIT_TOPIC_IDS_IN_STATE action containing the user's previous topic ids with the new topic id added to it`, (): void => {
    const dummyAction = actions.addTopicId(dummyUser.id, dummyTopicId);

    return expectSaga(sagas.addTopicId, dummyAction)
      .provide([
        [select(selectors.getById, { id: dummyUser.id }), dummyUser],
      ])
      .put(actions.editTopicIdsInState(dummyUser.id, _.concat(dummyTopicIds, dummyTopicId)))
      .run();
  });

  it(`throws an UnsupportedOperationError, when attempting to add an already existing topicId`, async (): Promise<mixed> => {
    const dummyAction = actions.addTopicId(dummyUser.id, dummyTopicIds[1]);

    // Suppress console.error from redux-saga $FlowFixMe
    console.error = jest.fn();
    await expect(
      expectSaga(sagas.addTopicId, dummyAction)
        .provide([
          [select(selectors.getById, { id: dummyUser.id }), dummyUser],
        ])
        .run(),
    ).rejects.toBeInstanceOf(UnsupportedOperationError);
  });

});
