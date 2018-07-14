// @flow
/**
 * API docs: #TODO
 */

import * as m from '../../model';
import ApiRequest from '../../ApiRequest';
import { NOTIFICATIONS_ENDPOINT } from '../endpoints';

const getAll = async (): Promise<m.ApiResponseData> => {
  const request = new ApiRequest();

  request
    .setEndpoint(NOTIFICATIONS_ENDPOINT)
    .setMethod(m.httpMethods.GET)
    .setParameter('sort', '-createdAt')
    .setParameter('page[limit]', '10')
    .setParameter('page[offset]', '0')
    .setParameter('include', 'user');

  return request.execute();
};

export default getAll;
