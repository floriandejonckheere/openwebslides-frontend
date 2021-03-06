// @flow

import { createSelector } from 'reselect';

import { type AppState } from 'types/redux';

import * as m from '../model';

import getAllById from './getAllById';

const getAll = createSelector<AppState, ?{}, $ReadOnlyArray<m.User>, m.UsersById>(
  [getAllById],
  (usersById: m.UsersById): $ReadOnlyArray<m.User> => {
    return Object.keys(usersById).map((key) => usersById[key]);
  },
);

export default getAll;
