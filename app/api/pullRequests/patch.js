// @flow

/**
 * PATCH on pullRequests endpoint, review a pull request
 *
 * API docs: https://openwebslides.github.io/documentation/#accept-a-pull-request
 * API docs: https://openwebslides.github.io/documentation/#reject-a-pull-request
 */

import ApiRequest, { httpMethods, type ApiResponseData } from 'lib/ApiRequest';

import { PULL_REQUESTS_ENDPOINT } from '../endpoints';

const patch = (
  id: string,
  stateEvent: string,
  feedback: ?string,
  token: string,
): Promise<ApiResponseData> => {
  const body = JSON.stringify({
    data: {
      type: 'pullRequests',
      id,
      attributes: {
        stateEvent,
        feedback,
      },
    },
  });

  return new ApiRequest(httpMethods.PATCH)
    .addPathSegment(PULL_REQUESTS_ENDPOINT)
    .addPathSegment(id)
    .setBody(body)
    .setToken(token)
    .execute();
};

export default patch;