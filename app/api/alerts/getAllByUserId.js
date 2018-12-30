// @flow

/**
 * GET on users alerts endpoint, get all alerts
 *
 * API documentation: https://openwebslides.github.io/documentation/#get-all-user-alerts
 */

import ApiRequest, { httpMethods, type ApiResponseData } from 'lib/ApiRequest';

import { USERS_ENDPOINT, ALERTS_ENDPOINT } from '../endpoints';

const getAllByUserId = (userId: string, token: string): Promise<ApiResponseData> => {
  return new ApiRequest(httpMethods.GET)
    .addPathSegment(USERS_ENDPOINT)
    .addPathSegment(userId)
    .addPathSegment(ALERTS_ENDPOINT)
    .setParameter('include', 'user,topic,pullRequest,subject')
    .setToken(token)
    .execute();
};

export default getAllByUserId;