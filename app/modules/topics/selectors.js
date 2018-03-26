// @flow

import _ from 'lodash';
import { createSelector } from 'reselect';
import type { State } from 'types/state';
import type { Identifier } from 'types/model';
import type { Topic, TopicsById, TopicsState } from './model';

const getModule = (state: State): TopicsState => {
  return state.modules.topics;
};

export const getAllById = (state: State): TopicsById => {
  return getModule(state).byId;
};

export const getAll = createSelector(
  [getAllById],
  (topicsById: TopicsById): Array<Topic> => {
    return Object.keys(topicsById).map((key) => topicsById[key]);
  },
);

export const getById = (state: State, props: { id: Identifier }): ?Topic => {
  return _.get(getAllById(state), props.id, null);
};

// #TODO delete this; just select the entire topic instead and get the title from that
export const getTitleById = (state: State, id: Identifier): string => {
  return getModule(state).byId[id].title;
};

// eslint-disable-next-line
export const getAllTopicIdsWithUserId = (state: State, userId: Identifier): Array<Identifier> => {
  const topicsById = getModule(state).byId;

  /* DEBUG
  console.log('result from getModule()');
  console.log(topicsById);
  const keying = Object.keys(topicsById);
  console.log('result from keying');
  console.log(keying);
  const mapping = Object.keys(topicsById).map((key) => topicsById[key]);
  console.log('result from mapping');
  console.log(mapping);
  const result = Object
  .keys(topicsById).map((key) => topicsById[key]).filter((topic) => topic.userId === userId);
  console.log('result from filtering');
  console.log(result);
  */


  // Flow is disabled here because of a long-standing bug: https://github.com/facebook/flow/issues/3067
  return (
    Object
      .keys(topicsById)
      .map((key) => topicsById[key])
      .filter((topic) => topic.userId === userId)
  );
};
