// @flow

import type { Identifier } from 'types/model';
import type { ContentItemType } from 'modules/content-items';

import * as t from './actionTypes';
import { contentItemTypes } from '../content-items/model';

// add custom theme
export const addToState = (
  id: Identifier,
  userId: Identifier,
): t.AddToStateAction => {
  return {
    type: t.ADD_TO_STATE,
    payload: {
      id,
      userId,
      rules: {
        [contentItemTypes.HEADING]: {
          color: '#000000',
        },
        [contentItemTypes.PARAGRAPH]: {
          color: '#000000',
        },
      },
    },
  };
};

export const editContentTypeColorInState = (
  id: Identifier,
  contentItemType: ContentItemType,
  newColor: string,
): t.EditContentTypeColorAction => {
  return {
    type: t.EDIT_CONTENTTYPE_COLOR_IN_STATE,
    payload: {
      id,
      contentItemType,
      newColor,
    },
  };
};