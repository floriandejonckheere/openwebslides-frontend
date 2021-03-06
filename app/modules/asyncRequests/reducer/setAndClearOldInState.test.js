// @flow

import { dummyAsyncRequestData as dummyData } from 'lib/testResources';

import * as a from '../actionTypes';
import * as m from '../model';

import { OLD_AGE } from './setAndClearOldInState';

import reducer from '.';

describe(`setInState`, (): void => {

  let dummyAsyncRequest1: m.AsyncRequest;
  let dummyAsyncRequest2: m.AsyncRequest;

  beforeEach((): void => {
    dummyAsyncRequest1 = { ...dummyData.pendingAsyncRequest };
    dummyAsyncRequest2 = { ...dummyData.pendingAsyncRequest2 };
  });

  it(`adds an asyncRequest to the state, when the passed asyncRequest.id does not yet exist in the state`, (): void => {
    const prevState: m.AsyncRequestsState = {
      byId: {
        [dummyAsyncRequest1.id]: dummyAsyncRequest1,
      },
      refreshing: false,
    };
    const setInStateAction: a.SetAndClearOldInStateAction = {
      type: a.SET_AND_CLEAR_OLD_IN_STATE,
      payload: {
        asyncRequest: dummyAsyncRequest2,
      },
    };
    const nextState: m.AsyncRequestsState = {
      byId: {
        [dummyAsyncRequest1.id]: dummyAsyncRequest1,
        [dummyAsyncRequest2.id]: dummyAsyncRequest2,
      },
      refreshing: false,
    };
    const resultState = reducer(prevState, setInStateAction);

    expect(resultState).toStrictEqual(nextState);
    expect(resultState).not.toBe(prevState);
    expect(resultState.byId).not.toBe(prevState.byId);
  });

  it(`replaces an asyncrequest in the state, when the passed asyncRequest.id already exists in the state`, (): void => {
    const updatedDummyAsyncRequest1: m.SuccessAsyncRequest = {
      id: dummyAsyncRequest1.id,
      status: m.statusTypes.SUCCESS,
      timestamp: dummyAsyncRequest1.timestamp,
      value: 'dummyReturnValue',
    };
    const prevState: m.AsyncRequestsState = {
      byId: {
        [dummyAsyncRequest1.id]: dummyAsyncRequest1,
      },
      refreshing: false,
    };
    const setInStateAction: a.SetAndClearOldInStateAction = {
      type: a.SET_AND_CLEAR_OLD_IN_STATE,
      payload: {
        asyncRequest: updatedDummyAsyncRequest1,
      },
    };
    const nextState: m.AsyncRequestsState = {
      byId: {
        [dummyAsyncRequest1.id]: updatedDummyAsyncRequest1,
      },
      refreshing: false,
    };
    const resultState = reducer(prevState, setInStateAction);

    expect(resultState).toStrictEqual(nextState);
    expect(resultState).not.toBe(prevState);
    expect(resultState.byId).not.toBe(prevState.byId);
    expect(resultState.byId[dummyAsyncRequest1.id]).not.toBe(prevState.byId[dummyAsyncRequest1.id]);
  });

  it(`clears completed requests from the state, when they are older than OLD_AGE`, (): void => {
    const dummyCurrentTimestamp = 123456789;
    const prevState: m.AsyncRequestsState = {
      byId: {
        [dummyAsyncRequest1.id]: {
          ...dummyAsyncRequest1,
          timestamp: dummyCurrentTimestamp - OLD_AGE,
        },
      },
      refreshing: false,
    };
    const setInStateAction: a.SetAndClearOldInStateAction = {
      type: a.SET_AND_CLEAR_OLD_IN_STATE,
      payload: {
        // $FlowFixMe spread operator bug
        asyncRequest: {
          ...dummyAsyncRequest2,
          timestamp: dummyCurrentTimestamp,
        },
      },
    };
    const nextState: m.AsyncRequestsState = {
      byId: {
        [dummyAsyncRequest2.id]: {
          ...dummyAsyncRequest2,
          timestamp: dummyCurrentTimestamp,
        },
      },
      refreshing: false,
    };
    const resultState = reducer(prevState, setInStateAction);

    expect(resultState).toStrictEqual(nextState);
    expect(resultState).not.toBe(prevState);
    expect(resultState.byId).not.toBe(prevState.byId);
  });

  it(`returns the state object unchanged, when the passed requestStatus is identical to the existing requestStatus for the passed requestId`, (): void => {
    const prevState: m.AsyncRequestsState = {
      byId: {
        [dummyAsyncRequest1.id]: dummyAsyncRequest1,
      },
      refreshing: false,
    };
    const setInStateAction: a.SetAndClearOldInStateAction = {
      type: a.SET_AND_CLEAR_OLD_IN_STATE,
      payload: {
        // $FlowFixMe flow has all necessary info to determine type; probable bug
        asyncRequest: { ...dummyAsyncRequest1 },
      },
    };
    const resultState = reducer(prevState, setInStateAction);

    expect(resultState).toStrictEqual(prevState);
    expect(resultState).toBe(prevState);
  });

});
