// @flow

import {
  Http401UnauthorizedError,
  Http403ForbiddenError,
  Http422ValidationError,
  Http5xxServerError,
  UnexpectedHttpStatusError,
} from 'errors';

import * as m from './model';

const extractTokenFromAuthHeader = (authHeader: ?string): ?string => {
  return (authHeader) ? authHeader.slice(7) : null;
};

const getDataFromResponse = async (response: Response): Promise<m.ApiResponseData> => {
  const responseBody = (response.body)
    ? await response.json()
    : {};
  return {
    body: responseBody,
    status: response.status,
    token: extractTokenFromAuthHeader(response.headers.get('Authorization')),
  };
};

// #TODO rename
const asyncFetch = async (url: string, options: RequestOptions): Promise<m.ApiResponseData> => {
  const response = await fetch(url, options);
  const { status } = response;

  if (status < 400) {
    return getDataFromResponse(response);
  }
  else if (status === 401) {
    throw new Http401UnauthorizedError();
  }
  else if (status === 403) {
    throw new Http403ForbiddenError();
  }
  else if (status === 422) {
    const responseBody = await response.json();
    throw new Http422ValidationError(responseBody.errors);
  }
  else if (status >= 500) {
    throw new Http5xxServerError(response.statusText);
  }
  else {
    throw new UnexpectedHttpStatusError(response.statusText);
  }
};

export default asyncFetch;
