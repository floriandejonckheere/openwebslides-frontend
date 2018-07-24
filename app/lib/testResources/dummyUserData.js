// @flow

import users from 'modules/users';

const { model } = users;

export const user: $Exact<model.User> = {
  id: 'dummyUserId',
  name: 'Test Tester',
  email: 'test@test.be',
};

export const user2: $Exact<model.User> = {
  id: 'dummyUser2Id',
  name: 'Lorem ipsum',
  email: null,
};

export const user3: $Exact<model.User> = {
  id: 'dummyUser3Id',
  name: 'Dummyuser',
  email: 'dummy.user@test.com',
};
