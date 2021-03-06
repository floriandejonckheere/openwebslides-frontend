// @flow

import { API_URL } from 'config/url';
import { httpMethods } from 'lib/ApiConnection';

import api from '..';

describe(`api.confirmation.post`, (): void => {

  beforeEach((): void => {
    fetch.resetMocks();
  });

  it(`executes the correct fetch call`, async (): Promise<void> => {
    const dummyEmail = 'test@test.be';
    fetch.mockResponseOnce('', { status: 200 });
    await api.confirmation.post(dummyEmail);

    expect(fetch.mock.calls).toHaveLength(1);

    const mockUrl = fetch.mock.calls[0][0];
    const mockOptions = fetch.mock.calls[0][1];

    expect(mockUrl).toBe(`${API_URL}/confirmation`);
    expect(mockOptions.method).toBe(httpMethods.POST);
    expect(JSON.parse(mockOptions.body)).toStrictEqual({
      data: {
        type: 'confirmations',
        attributes: {
          email: dummyEmail,
        },
      },
    });
  });

});
