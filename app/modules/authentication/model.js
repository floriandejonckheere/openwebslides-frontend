// @flow
/* eslint-disable import/prefer-default-export */

import type { Identifier } from 'types/model';
import generateRandomString from 'lib/generate-random-string';

// #TODO optimal id length / generation method?
const ID_LENGTH = 10;

export type Account = {
  +id: Identifier,
  +firstName: string,
  +lastName: ?string,
  +email: string,
};

export type AuthState = {
  +authenticated: boolean,
  +account: ?Account,
};

export const generateId = (): string => {
  return generateRandomString(ID_LENGTH);
};
