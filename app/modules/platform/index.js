// @flow

import actions from './actions';
import components from './components';
import * as model from './model';
import reducer from './reducer';
import saga from './saga';
import selectors from './selectors';

const platform = {
  actions,
  components,
  model,
  reducer,
  saga,
  selectors,
};

export default platform;
