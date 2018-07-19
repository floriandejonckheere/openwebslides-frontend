// @flow
/**
 * API docs: #TODO
 */

import ApiRequest, { httpMethods, type ApiResponseData } from 'lib/ApiRequest';

import { CONFIRMATION_ENDPOINT } from '../endpoints';

const postEmail = (email: string): Promise<ApiResponseData> => {
  const body = JSON.stringify({
    data: {
      type: 'confirmations',
      attributes: {
        email,
      },
    },
  });

  return new ApiRequest(httpMethods.POST)
    .addPathSegment(CONFIRMATION_ENDPOINT)
    .setBody(body)
    .execute();
};

export default postEmail;
