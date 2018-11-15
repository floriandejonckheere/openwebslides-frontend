// @flow

import { API_URL } from 'config/api';
import { httpMethods } from 'lib/ApiRequest';

import api from '..';

describe(`api.pullRequests.get`, (): void => {

  let dummyPullRequestId: string;
  let dummyToken: string;

  beforeEach((): void => {
    fetch.resetMocks();

    dummyPullRequestId = 'dummyPullRequestId';
    dummyToken = 'dummyToken';
  });

  it(`executes the correct fetch call`, async (): Promise<mixed> => {
    fetch.mockResponseOnce('', { status: 200 });
    await api.pullRequests.get(dummyPullRequestId, dummyToken);

    expect(fetch.mock.calls).toHaveLength(1);

    const mockUrl = fetch.mock.calls[0][0];
    const mockOptions = fetch.mock.calls[0][1];

    expect(mockUrl).toBe(`${API_URL}/pullRequests/${dummyPullRequestId}`);
    expect(mockOptions.method).toBe(httpMethods.GET);
    expect(mockOptions.body).toBeNull();
    expect(mockOptions.headers.Authorization).toBe(`Bearer ${dummyToken}`);
  });

});
