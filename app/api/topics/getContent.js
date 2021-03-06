// @flow

/**
 * GET on topics/content endpoint, retrieve course content for a topic
 *
 * API docs: https://openwebslides.github.io/documentation/#get-topic-content
 */

import ApiRequest, { httpMethods, type ApiResponseData } from 'lib/ApiConnection';

import { TOPICS_ENDPOINT, TOPICS_CONTENT_ENDPOINT } from '../endpoints';

const getContent = (id: string, accessToken: ?string): Promise<ApiResponseData> => {
  return new ApiRequest(httpMethods.GET)
    .addPathSegment(TOPICS_ENDPOINT)
    .addPathSegment(id)
    .addPathSegment(TOPICS_CONTENT_ENDPOINT)
    .setToken(accessToken)
    .execute();
};

export default getContent;
