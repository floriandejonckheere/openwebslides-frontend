// @flow

import * as React from 'react';
import { Translation } from 'react-i18next';
import { Modal, Button, Icon } from 'semantic-ui-react';

import { type TFunction } from 'types/i18next';
import InlineMarkdown from 'components/InlineMarkdown';
import FeedbackForm, { type FeedbackFormValues } from 'forms/FeedbackForm';
import topics from 'modules/topics';

type PassedProps = {|
  source: topics.model.Topic,
  target: topics.model.Topic,
  isOpen: boolean,
  onSubmit: (feedback: string) => void,
  onCancel: () => void,
|};

type Props = {| ...PassedProps |};

class PureAcceptPullRequestModal extends React.Component<Props> {
  handleFeedbackFormSubmit = (values: FeedbackFormValues): void => {
    const { onSubmit } = this.props;
    onSubmit(values.feedback);
  };

  render(): React.Node {
    const { isOpen, onCancel, source, target } = this.props;

    return (
      <Translation>
        {(t: TFunction): React.Node => (
          <Modal
            size="mini"
            basic={true}
            open={isOpen}
            onClose={onCancel}
            data-test-id="accept-pull-request-modal"
          >
            <Modal.Header>{t('modals:pullRequest.accept.title')}</Modal.Header>
            <Modal.Content>
              <p>
                <InlineMarkdown text={t('modals:pullRequest.accept.description', {
                  sourceTopicTitle: source.title,
                  targetTopicTitle: target.title,
                })}
                />
              </p>
              <p>
                <Icon name="lock" /> {t('modals:pullRequest.accept.access')}
              </p>
              <FeedbackForm
                onSubmit={this.handleFeedbackFormSubmit}
                required={false}
              />
            </Modal.Content>
            <Modal.Actions>
              <Button
                inverted={true}
                onClick={onCancel}
                data-test-id="accept-pull-request-modal-cancel-button"
              >
                {t('common:button.cancel')}
              </Button>
              <Button
                type="submit"
                form="feedback-form"
                color="green"
                inverted={true}
                data-test-id="accept-pull-request-modal-submit-button"
              >
                {t('pullRequests:button.accept')}
              </Button>
            </Modal.Actions>
          </Modal>
        )}
      </Translation>
    );
  }
}

const AcceptPullRequestModal = PureAcceptPullRequestModal;

export { PureAcceptPullRequestModal };
export default AcceptPullRequestModal;
