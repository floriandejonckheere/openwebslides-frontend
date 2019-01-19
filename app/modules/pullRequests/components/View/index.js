// @flow

import * as React from 'react';
import { withNamespaces, type TranslatorProps } from 'react-i18next';
import { Header, Segment, Divider, Comment } from 'semantic-ui-react';

import FetchWrapper from 'components/FetchWrapper';

import actions from '../../actions';
import * as m from '../../model';
import selectors from '../../selectors';

import Ribbon from './Ribbon';
import SubmitComment from './SubmitComment';
import StateComment from './StateComment';

type PassedProps = {|
  pullRequestId: string,
|};

type Props = {| ...TranslatorProps, ...PassedProps |};

class PureView extends React.Component<Props> {
  renderView = (pullRequest: m.PullRequest): React.Node => {
    return (
      <div data-test-id="pull-request-view">
        <Segment raised={true}>
          <Ribbon pullRequest={pullRequest} />

          <Header as="span" data-test-id="pull-request-view-message">
            {pullRequest.message}
          </Header>

          <Divider hidden={true} />

          <Comment.Group>
            <SubmitComment pullRequest={pullRequest} />

            <StateComment pullRequest={pullRequest} />
          </Comment.Group>
        </Segment>

      </div>
    );
  };

  render(): React.Node {
    const { pullRequestId } = this.props;

    return (
      <FetchWrapper
        render={this.renderView}
        renderPropsAndState={this.props}
        fetchId={pullRequestId}
        fetchAction={actions.fetch}
        fetchedPropSelector={selectors.getById}
      />
    );
  }
}

const View = withNamespaces()(PureView);

export { PureView };
export default View;
