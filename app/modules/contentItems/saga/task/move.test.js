// @flow

import { expectSaga } from 'redux-saga-test-plan';

import * as a from '../../actionTypes';
import * as m from '../../model';

import { sagas } from '..';

describe(`move`, (): void => {

  it(`puts a MOVE_IN_STATE action`, (): void => {
    const dummyMoveAction: a.MoveAction = {
      type: a.MOVE,
      payload: {
        id: 'abcdefghijklmnoprst',
        nextContext: {
          contextType: m.contextTypes.SUPER,
          contextItemId: 'uvwxyzabcdefghijklmn',
        },
      },
    };
    return expectSaga(sagas.move, dummyMoveAction)
      .put.like({
        action: {
          type: a.MOVE_IN_STATE,
          payload: {
            id: dummyMoveAction.payload.id,
            nextContext: dummyMoveAction.payload.nextContext,
          },
        },
      })
      .run();
  });

});
