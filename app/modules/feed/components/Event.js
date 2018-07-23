// @flow

import * as React from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { translate, type TranslatorProps } from 'react-i18next';
import moment from 'moment';
import { Feed } from 'semantic-ui-react';

import { USER_PROFILE_ROUTE, TOPIC_EDITOR_ROUTE } from 'config/routes';
import type { State } from 'types/state';
import topics from 'modules/topics';
import users from 'modules/users';
import Gravatar from 'components/Gravatar';

import type { Event } from '../model';
import { getById } from '../selectors';

type PassedProps = {|
  eventId: string,
|};

type StateProps = {|
  event: Event,
  user: ?users.model.User,
  topic: ?topics.model.Topic,
|};

type DispatchProps = {|
  getTopic: (string) => void,
  getUser: (string) => void,
|};

type Props = {|
  ...TranslatorProps,
  ...PassedProps,
  ...StateProps,
  ...DispatchProps,
|};

const mapStateToProps = (state: State, props: PassedProps): StateProps => {
  const { eventId } = props;
  const event = getById(state, eventId);
  const topic = topics.selectors.getById(state, { id: event.topicId });
  const user = users.selectors.getById(state, event.userId);

  return {
    event,
    user,
    topic,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<*>): DispatchProps => {
  return {
    getTopic: (id: string): void => {
      dispatch(
        topics.actions.get(id),
      );
    },
    getUser: (id: string): void => {
      dispatch(
        users.actions.get(id),
      );
    },
  };
};

class PureEventWrapper extends React.Component<Props, State> {
  componentDidMount = (): void => {
    const {
      event,
      user,
      topic,
      getTopic,
      getUser,
    } = this.props;

    // Request missing data from API
    if (topic == null) {
      getTopic(event.topicId);
    }

    if (user == null || user.email === '') {
      getUser(event.userId);
    }
  };

  render = (): React.Node => {
    const {
      t,
      event,
      user,
      topic,
    } = this.props;

    // Prevent rendering when resources are still loading
    if (topic == null || user == null) {
      return null;
    }

    // construct full, displayed name of user
    const lastName = user.lastName == null ? '' : user.lastName;
    const displayName = `${user.firstName} ${lastName}`;

    return (
      <Feed.Event>
        <Feed.Label>
          <Link to={`${USER_PROFILE_ROUTE}/${user.id}`}>
            <Gravatar email={user.email} size={users.constants.GRAVATAR_SIZE_SMALL} />
          </Link>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Link as="Feed.User" to={`${USER_PROFILE_ROUTE}/${user.id}`}>
              {displayName}
            </Link>
            &nbsp;
            {t('feed:event.action', { context: `${event.predicate}` })}
            &nbsp;
            <Link className="secondaryLink" to={`${TOPIC_EDITOR_ROUTE}/${topic.id}`}>
              {topic.title}
            </Link>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Date>
              {
                moment(event.timestamp).fromNow()
              }
            </Feed.Date>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  };
}

const EventWrapper = connect(mapStateToProps, mapDispatchToProps)(translate()(PureEventWrapper));

export { PureEventWrapper };
export default EventWrapper;
