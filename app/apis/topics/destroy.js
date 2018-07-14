// @flow
/**
 * API docs: #TODO
 */

import type { Identifier } from 'types/model';
import ApiRequest, { httpMethods, type ApiResponseData, type ApiToken } from 'lib/ApiRequest';

import { TOPICS_ENDPOINT } from '../endpoints';

const destroy = (id: Identifier, token: ApiToken): Promise<ApiResponseData> => {
  const request = new ApiRequest();

  request
    .setEndpoint(TOPICS_ENDPOINT)
    .setMethod(httpMethods.DELETE)
    .setResource(id)
    .setToken(token);

  return request.execute();
};

export default destroy;
