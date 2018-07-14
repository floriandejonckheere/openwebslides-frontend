// @flow
/**
 * API docs: https://openwebslides.github.io/documentation/#users-api
 */

import ApiRequest, { httpMethods, type ApiResponseData } from 'lib/ApiRequest';

import { USERS_ENDPOINT } from '../endpoints';

const post = (
  email: string,
  firstName: string,
  lastName: ?string,
  password: string,
  tosAccepted: boolean,
): Promise<ApiResponseData> => {
  const body = JSON.stringify({
    data: {
      type: 'users',
      attributes: {
        email,
        firstName,
        lastName,
        password,
        tosAccepted,
      },
    },
  });

  return new ApiRequest(httpMethods.POST)
    .addPathSegment(USERS_ENDPOINT)
    .setBody(body)
    .execute();
};

export default post;
