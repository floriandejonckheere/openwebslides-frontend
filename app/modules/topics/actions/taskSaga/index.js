// @flow

import create from './create';
import edit from './edit';
import fetch from './fetch';
import fetchWithContent from './fetchWithContent';
import fork from './fork';
import patchWithContent from './patchWithContent';
import remove from './remove';

const taskSagaActions = {
  create,
  edit,
  fetch,
  fetchWithContent,
  fork,
  patchWithContent,
  remove,
};

export default taskSagaActions;