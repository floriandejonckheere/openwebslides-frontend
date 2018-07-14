// @flow

import * as httpMethods from './httpMethods';

export type Headers = {
  [name: string]: string,
};

export type Parameters = {
  [name: string]: string,
};

export type RequestConfig = {
  url: string,
  endpoint: string,
  resource: ?string,
  subEndpoint: ?string,
  subResource: ?string,
  headers: Headers,
  parameters: Parameters,
  method: httpMethods.HttpMethod,
  body: string,
};

export type Token = string;

export type ApiResponseData = {
  +body: {},
  +status: number,
  +token: ?Token,
};

export type Request = {
  +config: RequestConfig,
  +setEndpoint: (endpoint: string) => Request,
  +setResource: (endpoint: string) => Request,
  +setSubEndpoint: (endpoint: string) => Request,
  +setSubResource: (endpoint: string) => Request,
  +setMethod: (method: httpMethods.HttpMethod) => Request,
  +setParameter: (parameter: string, value: string) => Request,
  +setHeader: (header: string, value: string) => Request,
  +setBody: (body: string) => Request,
  +setToken: (token: ?Token) => Request,
  +execute: () => Promise<ApiResponseData>,

  +getUrl: () => string,
  +getOptions: () => RequestOptions,
};

export * from './httpMethods';
