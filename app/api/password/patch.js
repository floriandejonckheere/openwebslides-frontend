// @flow

/**
 * PATCH password and resetPasswordToken on password endpoint, resets an account password
 */

import ApiRequest, { httpMethods, type ApiResponseData } from 'lib/ApiRequest';

import { PASSWORD_ENDPOINT } from '../endpoints';

const patch = (password: string, resetPasswordToken: string): Promise<ApiResponseData> => {
  const body = JSON.stringify({
    data: {
      id: '',
      type: 'passwords',
      attributes: {
        password,
        resetPasswordToken,
      },
    },
  });

  return new ApiRequest(httpMethods.PATCH)
    .addPathSegment(PASSWORD_ENDPOINT)
    .setBody(body)
    .execute();
};

export default patch;
