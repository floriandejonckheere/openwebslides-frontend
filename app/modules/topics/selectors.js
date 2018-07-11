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

export const getById = (state: State, props: { id: Identifier }): Topic => {
  const { id } = props;
  return _.get(getAllById(state), id, null);
};

// #TODO delete this; just select the entire topic instead and get the title from that
export const getTitleById = (state: State, id: Identifier): string => {
  return getModule(state).byId[id].title;
};

export const getAllTopicIdsByUserId = (state: State, userId: Identifier): Array<Identifier> => {
  const topicsById = getAllById(state);

  return (
    Object
      .keys(topicsById)
      .map((key) => topicsById[key])
      .filter((topic) => topic.userId === userId)
      .map((topic) => topic.id)
  );
};
