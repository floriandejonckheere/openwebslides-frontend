// @flow

import { API_URL } from 'config/api';
import { httpMethods } from 'lib/ApiRequest';

import api from '..';

describe(`api.token.postSignin`, (): void => {

  beforeEach((): void => {
    fetch.resetMocks();
  });

  it(`executes the correct fetch call`, async (): Promise<*> => {
    const dummyEmail = 'test@test.be';
    const dummyPassword = 'mahpasswordy0';
    fetch.mockResponseOnce(null, { status: 200 });
    await api.token.postSignin(dummyEmail, dummyPassword);

    expect(fetch.mock.calls).toHaveLength(1);

    const mockUrl = fetch.mock.calls[0][0];
    const mockOptions = fetch.mock.calls[0][1];

    expect(mockUrl).toBe(`${API_URL}/token`);
    expect(mockOptions.method).toBe(httpMethods.POST);
    expect(JSON.parse(mockOptions.body)).toEqual({
      data: {
        type: 'tokens',
        attributes: {
          email: dummyEmail,
          password: dummyPassword,
        },
      },
    });
  });

});