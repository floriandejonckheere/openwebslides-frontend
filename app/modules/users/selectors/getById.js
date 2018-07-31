// @flow

import { type State } from 'types/state';

import * as m from '../model';

const getById = (state: State, props: { id: string }): ?m.User => {
  const { id } = props;
  return state.modules.users.byId[id] || null;
};

export default getById;