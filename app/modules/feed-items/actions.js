// @flow

import _ from 'lodash';
import * as t from './actionTypes';
import { generateId } from './model';
import type { PredicateType } from './model';

export const add = (
  userId: string,
  topicId: string,
  predicate: PredicateType,
): t.AddAction | t.AddErrorAction => {
  const newId = generateId();

  return {
    type: t.ADD,
    payload: {
      id: newId,
      userId,
      topicId,
      predicate,
      timestamp: _.now(),
    },
  };
};