// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import type { State } from 'types/state';
import platform from 'modules/platform';
import users from 'modules/users';

const { AuthMenu } = platform.components;
const { UserAccountMenu } = users.components;

type StateProps = {|
  currentUserId: ?string,
|};

type Props = {| ...StateProps |};

const mapStateToProps = (state: State): StateProps => {
  const userAuth = platform.selectors.getUserAuth(state);
  return {
    currentUserId: (userAuth != null) ? userAuth.userId : null,
  };
};

const PureAccountMenu = (props: Props): React.Node => {
  const { currentUserId } = props;

  return (currentUserId)
    ? <UserAccountMenu userId={currentUserId} />
    : <AuthMenu />;
};

const AccountMenu = connect(mapStateToProps)(PureAccountMenu);

export { PureAccountMenu };
export default AccountMenu;