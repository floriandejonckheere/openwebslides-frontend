// @flow

import { expectSaga } from 'redux-saga-test-plan';

import actions from '../../actions';
import * as m from '../../model';

import lib from '..';

describe(`putAndReturn`, (): void => {

  let dummyId: string;
  let dummyValue: string;
  let dummyError: Error;

  beforeEach((): void => {
    dummyId = 'dummyId';
    dummyValue = 'dummyValue';
    dummyError = new Error('dummy');
    lib.generateId = jest.fn((): string => dummyId);
  });

  it(`puts the passed action, waits until a matching setSuccess action dispatched, and returns its value`, (): void => {
    const dummyAction = { type: 'dummy' };
    const dummyNotMatchingTypeAction = actions.setInState({ id: dummyId, status: m.statusTypes.SUCCESS, value: null });
    const dummyNotMatchingStatusAction = actions.setPending(dummyId);
    const dummyNotMatchingIdAction = actions.setSuccess('notMatchingId', null);
    const dummyMatchingAction = actions.setSuccess(dummyId, dummyValue);

    return expectSaga(lib.putAndReturn, dummyAction)
      .put({ ...dummyAction, asyncRequestId: dummyId })
      .dispatch(dummyNotMatchingTypeAction)
      .dispatch(dummyNotMatchingStatusAction)
      .dispatch(dummyNotMatchingIdAction)
      .dispatch(dummyMatchingAction)
      .returns(dummyValue)
      .run();
  });

  it(`puts the passed action, waits until a matching setFailure action dispatched, and re-throws the error`, async (): Promise<mixed> => {
    const dummyAction = { type: 'dummy' };
    const dummyNotMatchingTypeAction = actions.setInState({ id: dummyId, status: m.statusTypes.FAILURE, error: dummyError });
    const dummyNotMatchingStatusAction = actions.setPending(dummyId);
    const dummyNotMatchingIdAction = actions.setFailure('notMatchingId', dummyError);
    const dummyMatchingAction = actions.setFailure(dummyId, dummyError);

    // Suppress console.error from redux-saga $FlowFixMe
    console.error = jest.fn();
    await expect(
      expectSaga(lib.putAndReturn, dummyAction)
        .put({ ...dummyAction, asyncRequestId: dummyId })
        .dispatch(dummyNotMatchingTypeAction)
        .dispatch(dummyNotMatchingStatusAction)
        .dispatch(dummyNotMatchingIdAction)
        .dispatch(dummyMatchingAction)
        .run(),
    ).rejects.toStrictEqual(dummyError);
  });

  it(`uses the original asyncRequestId instead of generating a random one, if the passed action has an asyncRequestId`, (): void => {
    const dummyPassedId = 'dummyPassedId';
    const dummyAction = { type: 'dummy', asyncRequestId: dummyPassedId };

    return expectSaga(lib.putAndReturn, dummyAction)
      .put({ ...dummyAction, asyncRequestId: dummyPassedId })
      .dispatch(actions.setSuccess(dummyPassedId, dummyValue))
      .returns(dummyValue)
      .run();
  });

});
