// @flow

import * as a from '../../actionTypes';

import actions from '.';

describe(`apiPatchToken`, (): void => {

  it(`returns a platform API_PATCH_TOKEN action containing the passed props`, (): void => {
    const dummyRefreshToken = 'dummyRefreshToken';
    const expectedAction: a.ApiPatchToken = {
      type: a.API_PATCH_TOKEN,
      payload: {
        refreshToken: dummyRefreshToken,
      },
    };
    const actualAction = actions.apiPatchToken(dummyRefreshToken);
    expect(actualAction).toStrictEqual(expectedAction);
  });

});
