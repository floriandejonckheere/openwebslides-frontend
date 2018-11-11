// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { type Dispatch } from 'redux';
import { withNamespaces, type TranslatorProps } from 'react-i18next';
import { push } from 'connected-react-router';
import { Grid, Icon } from 'semantic-ui-react';
import moment from 'moment';

import { TOPIC_EDITOR_ROUTE } from 'config/routes';
import { type ModulesAction, type AppState } from 'types/redux';
import makeRoute from 'lib/makeRoute';
import InlineMarkdown from 'components/InlineMarkdown';
import users from 'modules/users';
import topics from 'modules/topics';

import * as m from '../../../model';

type PassedProps = {|
  alert: m.Alert,
|};

type StateProps = {|
  topic: ?topics.model.Topic,
  user: ?users.model.User,
|};

type DispatchProps = {|
  fetchTopic: () => void,
  fetchUser: () => void,
  redirect: () => void,
|};

type Props = {| ...TranslatorProps, ...PassedProps, ...StateProps, ...DispatchProps |};

const mapStateToProps = (state: AppState, props: PassedProps): StateProps => {
  const { alert } = props;

  return {
    topic: alert.topicId != null ? topics.selectors.getById(state, { id: alert.topicId }) : null,
    user: users.selectors.getById(state, { id: alert.userId }),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ModulesAction>,
  props: PassedProps,
): DispatchProps => {
  const { alert } = props;

  return {
    fetchTopic: (): void => {
      if (alert.topicId != null) dispatch(topics.actions.fetch(alert.topicId));
    },
    fetchUser: (): void => {
      dispatch(users.actions.fetch(alert.userId));
    },
    redirect: (): void => {
      // TODO: mark alert as read

      // Redirect to editor
      // $FlowFixMe push different routes based on alert type
      dispatch(push(makeRoute(TOPIC_EDITOR_ROUTE, { topicId: alert.topicId })));

      // TODO: push PR route if pull request alert
    },
  };
};

class PureAlert extends React.Component<Props> {
  componentDidMount(): void {
    const { topic, user, fetchTopic, fetchUser } = this.props;
    if (topic == null) fetchTopic();
    if (user == null) fetchUser();
  }

  render(): React.Node {
    const { t, alert, topic, user, redirect } = this.props;

    if (topic == null || user == null) {
      return null;
    }
    else {
      switch (alert.type) {
        case m.alertTypes.TOPIC_UPDATED:
          return (
            <Grid onClick={redirect} data-test-id="alert">
              <Grid.Column width={1} verticalAlign="middle">
                <Icon name="arrow alternate circle up outline" />
              </Grid.Column>
              <Grid.Column width={13}>
                <InlineMarkdown
                  text={t('alerts:menu.updated', { count: alert.count, topicTitle: topic.title })}
                />
                <p className="date">{moment(alert.timestamp).fromNow()}</p>
              </Grid.Column>
            </Grid>
          );
        /*
        case m.alertTypes.PR_SUBMITTED:
          return (
            <Grid data-test-id="alert">
              <Grid.Column width={1} verticalAlign="middle">
                <Icon name="fork" />
              </Grid.Column>
              <Grid.Column width={13}>
                <InlineMarkdown
                  text={t('alerts:menu.submitted', {
                    userName: user.name,
                    topicTitle: topic.title,
                  })}
                />
                <p className="date">{moment(alert.timestamp).fromNow()}</p>
              </Grid.Column>
            </Grid>
          );
        */
        default:
          return null;
      }
    }
  }
}

const Alert = connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(PureAlert));

export { PureAlert };
export default Alert;
