// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, type ContextRouter as RouterProps } from 'react-router-dom';
import { translate, type TranslatorProps } from 'react-i18next';

import ContainerPageWrapper from 'components/ContainerPageWrapper';
import type { State } from 'types/state';
import platform from 'modules/platform';
import users from 'modules/users';

const { ProfileCard } = users.components;

type StateProps = {|
  currentUserId: ?string,
|};

type Props = {|
  ...TranslatorProps,
  ...RouterProps,
  ...StateProps,
|};

const mapStateToProps = (state: State): StateProps => {
  let currentUserId: ?string = null;
  const userAuth = platform.selectors.getUserAuth(state);

  if (userAuth != null) {
    currentUserId = userAuth.userId;
  }

  return {
    currentUserId,
  };
};

// #TODO extract into separate file
const CurrentUserProfile = (props: { userId: string }): React.Node => {
  const { userId } = props;

  return (
    <React.Fragment>
      <ProfileCard userId={userId} />
    </React.Fragment>
  );
};

const UserProfile = (props: Props): React.Node => {
  const { match } = props;
  const userId = match.params.id || '';

  return (
    <React.Fragment>
      <ProfileCard userId={userId} />
    </React.Fragment>
  );
};

const PureProfilePage = (props: Props): React.Node => {
  const {
    t,
    match,
    currentUserId,
  } = props;

  // #TODO WTF?
  const newCurrentUserId = currentUserId || 'jantje1234';

  return (
    <ContainerPageWrapper>
      <React.Fragment>
        <h1>{t('global:title.profile')}</h1>
        <Switch>
          <Route path={`${match.url}/:id`} component={UserProfile} />
          { /* #TODO */ }
          { /* eslint-disable-next-line react/jsx-no-bind */ }
          <Route render={() => <CurrentUserProfile userId={newCurrentUserId} />} />
        </Switch>
      </React.Fragment>
    </ContainerPageWrapper>
  );
};

const ProfilePage = connect(mapStateToProps)(translate()(PureProfilePage));

export { PureProfilePage };
export default ProfilePage;
