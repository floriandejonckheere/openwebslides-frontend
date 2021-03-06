// @flow

/**
 * POST on topics fork endpoint, forks a topic
 *
 * API docs: https://openwebslides.github.io/documentation/#fork-a-topic
 */

import ApiRequest, { httpMethods, type ApiResponseData } from 'lib/ApiConnection';

import { TOPICS_ENDPOINT, TOPICS_FORK_ENDPOINT } from '../endpoints';

const postFork = (
  id: string,
  accessToken: ?string,
): Promise<ApiResponseData> => {
  return new ApiRequest(httpMethods.POST)
    .addPathSegment(TOPICS_ENDPOINT)
    .addPathSegment(id)
    .addPathSegment(TOPICS_FORK_ENDPOINT)
    .setToken(accessToken)
    .execute();
};

export default postFork;
