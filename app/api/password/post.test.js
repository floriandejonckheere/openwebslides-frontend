// @flow

import { API_URL } from 'config/api';
import { httpMethods } from 'lib/ApiRequest';

import api from '..';

describe(`api.password.post`, (): void => {

  beforeEach((): void => {
    fetch.resetMocks();
  });

  it(`executes the correct fetch call`, async (): Promise<*> => {
    const dummyEmail = 'test@test.be';
    fetch.mockResponseOnce(null, { status: 200 });
    await api.password.post(dummyEmail);

    expect(fetch.mock.calls).toHaveLength(1);

    const mockUrl = fetch.mock.calls[0][0];
    const mockOptions = fetch.mock.calls[0][1];

    expect(mockUrl).toBe(`${API_URL}/password`);
    expect(mockOptions.method).toBe(httpMethods.POST);
    expect(JSON.parse(mockOptions.body)).toEqual({
      data: {
        type: 'passwords',
        attributes: {
          email: dummyEmail,
        },
      },
    });
  });

});