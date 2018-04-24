// @flow

import * as t from './actionTypes';
import type { Account, AuthState } from './model';

const initialState: AuthState = {
  authenticated: false,
  account: null,
  token: null,
};

const setAccount = (state: AuthState, action: t.SetAccountAction): AuthState => {
  const { account } = action.payload;

  return {
    ...state,
    account,
  };
};

const setToken = (state: AuthState, action: t.SetTokenAction): AuthState => {
  const { token } = action.payload;

  return {
    ...state,
    authenticated: (token !== null),
    token,
  };
};

const signup = (state: AuthState, action: t.SignupSuccessAction): AuthState => {
  const { email, firstName, lastName } = action.payload;

  const account: Account = {
    id: 'markfrank1',
    email,
    firstName,
    lastName,
  };

  return {
    ...state,
    authenticated: true,
    account,
  };
};

const reducer = (state: AuthState = initialState, action: t.AuthenticationAction): AuthState => {
  switch (action.type) {
    case t.SET_ACCOUNT:
      return setAccount(state, action);
    case t.SET_TOKEN:
      return setToken(state, action);
    case t.SIGNUP_SUCCESS:
      return signup(state, action);
    case t.SIGNUP_FAILURE:
      return state;
    default:
      return state;
  }
};

export default reducer;
