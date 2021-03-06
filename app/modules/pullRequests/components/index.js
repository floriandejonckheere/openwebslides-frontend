// @flow

import Contribute from './Contribute';
import PullRequestEntry from './PullRequestEntry';
import View from './View';

const index = {
  Contribute,
  PullRequestEntry,
  View,
};

/* istanbul ignore next */
// $FlowFixMe Necessary to make hot loading work for components through index files
if (module.hot) module.hot.accept();

export default index;
