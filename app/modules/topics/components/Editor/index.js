// @flow

import * as React from 'react';
import { withNamespaces, type TranslatorProps } from 'react-i18next';
import { connect } from 'react-redux';
import { Prompt, Link } from 'react-router-dom';
import { type Dispatch } from 'redux';
import { Button, Header, Icon } from 'semantic-ui-react';

import { type AppState, type ModulesAction } from 'types/redux';
import { TOPIC_PR_ROUTE } from 'config/routes';
import FetchWrapper from 'components/FetchWrapper';
import { type CommitFormValues } from 'forms/CommitForm';
import CommitModal from 'modals/CommitModal';
import contentItems from 'modules/contentItems';
import makeRoute from 'lib/makeRoute';

import actions from '../../actions';
import * as m from '../../model';
import selectors from '../../selectors';

type PassedProps = {|
  topicId: string,
|};

type StateProps = {|
  topic: ?m.Topic,
|};

type DispatchProps = {|
  onCommit: (values: CommitFormValues) => void,
  onSetDirty: (dirty: boolean) => void,
  onDiscard: () => void,
|};

type Props = {| ...TranslatorProps, ...PassedProps, ...StateProps, ...DispatchProps |};

type ComponentState = {|
  isCommitModalOpen: boolean,
|};

const { EditableDisplay: ContentItemEditableDisplay } = contentItems.components;

const mapStateToProps = (state: AppState, props: PassedProps): StateProps => {
  const { topicId } = props;

  return {
    topic: selectors.getById(state, { id: topicId }),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<ModulesAction>,
  props: PassedProps,
): DispatchProps => {
  const { topicId } = props;

  return {
    onCommit: (values: CommitFormValues): void => {
      dispatch(actions.patchWithContent(topicId, values.message));
    },
    onSetDirty: (dirty: boolean): void => {
      dispatch(actions.setDirtyInState(topicId, dirty));
    },
    onDiscard: (): void => {
      dispatch(actions.discard(topicId));
    },
  };
};

class PureEditor extends React.Component<Props, ComponentState> {
  state: ComponentState = {
    isCommitModalOpen: false,
  };

  showCommitModal = (): void => {
    this.setState({ isCommitModalOpen: true });
  };

  handleCommitModalSubmit = (values: CommitFormValues): void => {
    const { onCommit } = this.props;
    onCommit(values);
    this.setState({ isCommitModalOpen: false });
  };

  handleCommitModalCancel = (): void => {
    this.setState({ isCommitModalOpen: false });
  };

  beforeUnloadHandler = (event: Event): boolean => {
    const { topic } = this.props;

    if (topic.isDirty) {
      // Cancel the event as stated by the standard
      event.preventDefault();

      // Chrome requires returnValue to be set
      /* eslint-disable no-param-reassign */
      // $FlowFixMe flowtype for Event does not contain the `returnValue` property
      event.returnValue = '';
      /* eslint-enable */
    }

    return topic.isDirty;
  };

  componentDidMount = (): void => {
    // Add event listener to prevent unloading window when topic is dirty
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  };

  componentWillUnmount = (): void => {
    const { topic, onDiscard } = this.props;

    // discard topic when exiting editor
    if (topic.isDirty) onDiscard(topic.id);

    // Remove event listener to prevent unloading window when topic is dirty
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);
  };

  fetchCondition = (topic: ?m.Topic): boolean => {
    return (topic == null || !topic.isContentFetched);
  };

  renderEditor = (topic: m.Topic): React.Node => {
    const { t, onSetDirty } = this.props;
    const { isCommitModalOpen } = this.state;

    return (
      <div data-test-id="topic-editor">
        {/* Prompt when user navigates away from the page with unsaved changes */}
        <Prompt
          when={topic.isDirty}
          message={t('topics:modals.unsavedChanges.message')}
        />

        <div style={{ overflow: 'hidden' }}>
          <Button
            floated="right"
            disabled={!topic.isDirty}
            primary={true}
            icon={true}
            labelPosition="left"
            onClick={this.showCommitModal}
            data-test-id="topic-editor-commit-button"
          >
            <Icon name="save" />
            {t('common:button.save')}
          </Button>
          {topic.upstreamTopicId !== null ? (
            <Button
              icon={true}
              labelPosition="left"
              data-test-id="topic-editor-pull-request-button"
              as={Link}
              to={makeRoute(TOPIC_PR_ROUTE, { topicId: topic.id })}
            >
              <Icon name="tasks" />
              {t('common:button.pr')}
            </Button>
          ) : ''}
          <Header floated="left" as="h1" data-test-id="topic-editor-title">
            {topic.title}
            {(topic.isDirty ? '*' : '')}
          </Header>
        </div>

        <ContentItemEditableDisplay
          contentItemId={topic.rootContentItemId}
          setTopicDirty={onSetDirty}
        />

        <CommitModal
          isOpen={isCommitModalOpen}
          onSubmit={this.handleCommitModalSubmit}
          onCancel={this.handleCommitModalCancel}
        />
      </div>
    );
  };

  render(): React.Node {
    const { topicId } = this.props;

    return (
      <FetchWrapper
        render={this.renderEditor}
        renderPropsAndState={{ ...this.props, ...this.state }}
        fetchId={topicId}
        fetchAction={actions.fetchWithContent}
        fetchedPropSelector={selectors.getById}
        fetchCondition={this.fetchCondition}
      />
    );
  }
}

const Editor = connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(PureEditor));

export { PureEditor };
export default Editor;
