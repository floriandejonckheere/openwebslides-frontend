// @flow

import ApiRequest from '../ApiRequest';
import { DEFAULT_URL, MEDIA_TYPE } from '../constants';

import type { Request } from '../model';
import { methodTypes } from '../model';

const defaultHeaders = {
  'Content-Type': MEDIA_TYPE,
  Accept: MEDIA_TYPE,
  Authorization: '',
};

describe(`ApiRequest`, (): void => {
  let request: Request;

  beforeEach((): void => {
    request = new ApiRequest();
  });

  describe(`config`, (): void => {
    it(`has a default config`, (): void => {
      expect(request.config.url).toEqual(DEFAULT_URL);
      expect(request.config.endpoint).toEqual('');
      expect(request.config.headers).toEqual(defaultHeaders);
      expect(request.config.parameters).toEqual({});
      expect(request.config.method).toEqual(methodTypes.GET);
      expect(request.config.body).toEqual('');
    });
  });

  describe(`setEndpoint`, (): void => {
    it(`sets endpoint without slash`, (): void => {
      request.setEndpoint('foobar');

      expect(request.config.endpoint).toEqual('/foobar');
    });

    it(`sets endpoint with slash`, (): void => {
      request.setEndpoint('/foobar');

      expect(request.config.endpoint).toEqual('/foobar');
    });
  });

  describe(`setMethod`, (): void => {
    it(`sets method`, (): void => {
      request.setMethod(methodTypes.DELETE);

      expect(request.config.method).toEqual(methodTypes.DELETE);
    });
  });

  describe(`setParameter`, (): void => {
    it(`sets parameter`, (): void => {
      request.setParameter('foo', 'bar');

      expect(request.config.parameters).toEqual({
        foo: 'bar',
      });
    });
  });

  describe(`setHeader`, (): void => {
    it(`sets header`, (): void => {
      request.setHeader('Accept', 'application/json');

      expect(request.config.headers.Accept).toEqual('application/json');
    });

    it(`adds header`, (): void => {
      request.setHeader('Host', 'localhost');

      // $FlowFixMe: object literal does not contain all headers
      expect(request.config.headers).toEqual(Object.assign({ Host: 'localhost' }, defaultHeaders));
    });
  });

  describe(`setBody`, (): void => {
    it(`sets body`, (): void => {
      request.setBody('foobar');

      expect(request.config.body).toEqual('foobar');
    });
  });

  describe(`getUrl`, (): void => {
    it(`generates correct url without parameters`, (): void => {
      request.setEndpoint('/endpoint');

      expect(request.getUrl()).toEqual(`${DEFAULT_URL}/endpoint`);
    });

    it(`generates correct url with one parameter`, (): void => {
      request.setEndpoint('/endpoint');
      request.setParameter('param1', 'value1');

      expect(request.getUrl()).toEqual(`${DEFAULT_URL}/endpoint?param1=value1`);
    });

    it(`generates correct url with two parameters`, (): void => {
      request.setEndpoint('/endpoint');
      request.setParameter('param1', 'value1');
      request.setParameter('param2', 'value2');

      expect(request.getUrl()).toEqual(`${DEFAULT_URL}/endpoint?param1=value1&param2=value2`);
    });
  });

  describe(`getOptions`, (): void => {
    it(`generates correct options with POST request`, (): void => {
      request.setMethod(methodTypes.POST);
      request.setBody('foobar');
      request.setHeader('User-Agent', 'jest')

      expect(request.getOptions()).toEqual({
        method: methodTypes.POST,
        body: 'foobar',
        // $FlowFixMe: object literal does not contain all headers
        headers: Object.assign({ 'User-Agent': 'jest' }, defaultHeaders),
      });
    });

    it(`generates correct options with GET request`, (): void => {
      request.setMethod(methodTypes.GET);
      request.setBody('foobar');
      request.setHeader('User-Agent', 'jest')

      // No body in GET requests
      expect(request.getOptions()).toEqual({
        method: methodTypes.GET,
        // $FlowFixMe: object literal does not contain all headers
        headers: Object.assign({ 'User-Agent': 'jest' }, defaultHeaders),
      });
    });

    describe(`execute`, (): void => {
      // TODO
    });
  });
});
