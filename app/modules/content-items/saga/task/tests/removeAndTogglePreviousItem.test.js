// @flow

import { expectSaga } from 'redux-saga-test-plan';
import ObjectNotFoundError from 'errors/usage-errors/ObjectNotFoundError';

import * as t from '../../../actionTypes';
import type {
  RootContentItem,
  HeadingContentItem,
  ParagraphContentItem,
  ContentItemsById,
} from '../../../model';
import * as dummyData from '../../../lib/test-resources/dummyContentItemData';

import removeAndTogglePreviousItemSaga from '../removeAndTogglePreviousItem';

describe(`removeAndTogglePreviousItemSaga`, (): void => {

  let dummyParagraph11: $Exact<ParagraphContentItem>;
  let dummyHeading1: $Exact<HeadingContentItem>;
  let dummyRoot: $Exact<RootContentItem>;
  let dummyContentItemsById: $Exact<ContentItemsById>;
  let dummyState: any;

  beforeEach((): void => {
    dummyParagraph11 = { ...dummyData.paragraphContentItem };
    dummyHeading1 = {
      ...dummyData.headingContentItem,
      subItemIds: [dummyParagraph11.id],
    };
    dummyRoot = {
      ...dummyData.rootContentItem,
      childItemIds: [dummyHeading1.id],
    };
    dummyContentItemsById = {
      [dummyRoot.id]: dummyRoot,
      [dummyHeading1.id]: dummyHeading1,
      [dummyParagraph11.id]: dummyParagraph11,
    };
    dummyState = {
      modules: {
        contentItems: {
          byId: dummyContentItemsById,
        },
      },
    };
  });

  it(`puts a remove action`, (): void => {
    const dummyRemoveAndTogglePreviousItemAction: t.RemoveAndTogglePreviousItemAction = {
      type: t.REMOVE_AND_TOGGLE_PREVIOUS_ITEM,
      payload: {
        id: dummyParagraph11.id,
      },
    };
    return expectSaga(removeAndTogglePreviousItemSaga, dummyRemoveAndTogglePreviousItemAction)
      .withState(dummyState)
      .put.like({
        action: {
          type: t.REMOVE,
          payload: {
            id: dummyParagraph11.id,
          },
        },
      })
      .run();
  });

  it(`puts a toggleEditing action which moves the isEditing state to the removed contentItem's previousEditorItem, when the removed contentItem has a previousEditorItem`, (): void => {
    const dummyRemoveAndTogglePreviousItemAction: t.RemoveAndTogglePreviousItemAction = {
      type: t.REMOVE_AND_TOGGLE_PREVIOUS_ITEM,
      payload: {
        id: dummyParagraph11.id,
      },
    };
    return expectSaga(removeAndTogglePreviousItemSaga, dummyRemoveAndTogglePreviousItemAction)
      .withState(dummyState)
      .put.like({
        action: {
          type: t.TOGGLE_EDITING,
          payload: {
            id: dummyHeading1.id,
            isEditing: true,
          },
        },
      })
      .run();
  });

  it(`does not put a toggleEditing action, when the removed contentItem does not have a previousEditorItem`, (): void => {
    const dummyRemoveAndTogglePreviousItemAction: t.RemoveAndTogglePreviousItemAction = {
      type: t.REMOVE_AND_TOGGLE_PREVIOUS_ITEM,
      payload: {
        id: dummyRoot.id,
      },
    };
    return expectSaga(removeAndTogglePreviousItemSaga, dummyRemoveAndTogglePreviousItemAction)
      .withState(dummyState)
      .not.put.actionType(t.TOGGLE_EDITING)
      .run();
  });

  it(`throws an ObjectNotFoundError, when the contentItem for the passed id cannot be found`, async (): Promise<*> => {
    const dummyRemoveAndTogglePreviousItemAction: t.RemoveAndTogglePreviousItemAction = {
      type: t.REMOVE_AND_TOGGLE_PREVIOUS_ITEM,
      payload: {
        id: 'ThisIdIsNotVeryValid',
      },
    };

    // Suppress console.error from redux-saga $FlowFixMe
    console.error = jest.fn();
    await expect(
      expectSaga(removeAndTogglePreviousItemSaga, dummyRemoveAndTogglePreviousItemAction)
        .withState(dummyState)
        .run(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

});
