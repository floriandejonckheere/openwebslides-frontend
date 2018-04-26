// @flow

import * as actions from '../actions';
import * as t from '../actionTypes';

describe(`actions`, (): void => {
  describe(`reducer actions`, (): void => {
    describe(`setItemInState`, (): void => {
      it(`returns set item action`, (): void => {
        const item = {
          id: '1',
          firstName: 'foo',
        };

        const action = actions.setItemInState(item);

        expect(action).toEqual({
          type: t.SET_ITEM_IN_STATE,
          payload: {
            item,
          },
        });
      });
    });

    describe(`setItemsInState`, (): void => {
      it(`returns set items action`, (): void => {
        const items = [{
          id: '1',
          firstName: 'foo',
        }];

        const action = actions.setItemsInState(items);

        expect(action).toEqual({
          type: t.SET_ITEMS_IN_STATE,
          payload: {
            items,
          },
        });
      });
    });
  });

  describe(`task saga actions`, (): void => {
    describe(`get`, (): void => {
      it(`returns get action`, (): void => {
        const action = actions.get('1');

        expect(action).toEqual({
          type: t.GET,
          payload: {
            id: '1',
          },
        });
      });
    });
  });

  describe(`API saga actions`, (): void => {
    describe(`apiGetUsers`, (): void => {
      it(`returns get users action`, (): void => {
        const action = actions.apiGetUsers('1');

        expect(action).toEqual({
          type: t.API_GET_USERS,
          payload: {
            id: '1',
          },
        });
      });
    });
  });
});
