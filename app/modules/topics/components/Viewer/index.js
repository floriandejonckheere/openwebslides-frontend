// @flow

import * as React from 'react';
import { withNamespaces, type TranslatorProps } from 'react-i18next';
import { connect } from 'react-redux';
import { Header, Menu, Button, Icon } from 'semantic-ui-react';

import { type AppState } from 'types/redux';
import FetchWrapper from 'components/FetchWrapper';

import actions from '../../actions';
import * as m from '../../model';
import selectors from '../../selectors';
import Course from '../Course';

type PassedProps = {|
  topicId: string,
  onForkTopic: (topicId: string) => void,
|};

type StateProps = {|
  topic: ?m.Topic,
|};

type Props = {| ...TranslatorProps, ...PassedProps, ...StateProps |};

const mapStateToProps = (state: AppState, props: PassedProps): StateProps => {
  const { topicId } = props;

  return {
    topic: selectors.getById(state, { id: topicId }),
  };
};

class PureViewer extends React.Component<Props> {
  handleForkButtonClick = (): void => {
    const { onForkTopic, topicId } = this.props;
    onForkTopic(topicId);
  };

  fetchCondition = (topic: ?m.Topic): boolean => {
    return (topic == null || !topic.isContentFetched);
  };

  renderViewer = (topic: m.Topic): React.Node => {
    const { t } = this.props;

    return (
      <div data-test-id="topic-viewer">
        <Menu attached={true} borderless={true} className="viewer-menu">
          <Menu.Menu position="right">
            {topic.upstreamTopicId == null ? (
              <Menu.Item>
                <Button
                  icon={true}
                  labelPosition="left"
                  onClick={this.handleForkButtonClick}
                  data-test-id="topic-viewer-fork-button"
                >
                  <Icon name="copy outline" />
                  {t('common:button.fork')}
                </Button>
              </Menu.Item>
            ) : ''}

          </Menu.Menu>
        </Menu>

        <Header as="h1">{topic.title}</Header>

        <Course topic={topic} />
      </div>
    );
  };

  render(): React.Node {
    const { topicId } = this.props;

    return (
      <FetchWrapper
        render={this.renderViewer}
        renderPropsAndState={this.props}
        fetchId={topicId}
        fetchAction={actions.fetchWithContent}
        fetchedPropSelector={selectors.getById}
        fetchCondition={this.fetchCondition}
      />
    );
  }
}

const Viewer = connect(mapStateToProps)(withNamespaces()(PureViewer));

export { PureViewer };
export default Viewer;