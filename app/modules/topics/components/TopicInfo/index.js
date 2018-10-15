// @flow

import * as React from 'react';
import { withNamespaces, type TranslatorProps } from 'react-i18next';
import { Item } from 'semantic-ui-react';

import * as m from '../../model';

import ForkInfo from './ForkInfo';

type PassedProps = {|
  topic: m.Topic,
|};

type Props = {| ...TranslatorProps, ...PassedProps |};

const PureTopicInfo = (props: Props): React.Node => {
  const { t, topic } = props;

  return (
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header>{t('topics:props.title')}</Item.Header>
          <Item.Description>{topic.title}</Item.Description>
          {(topic.upstreamTopicId != null) ? (
            <Item.Extra data-test-id="topic-info-fork-info">
              <ForkInfo upstreamTopicId={topic.upstreamTopicId} />
            </Item.Extra>
          ) : ''}
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>{t('topics:props.description')}</Item.Header>
          <Item.Description data-test-id="topic-info-description">
            {(topic.description != null) ? topic.description : `(${t('topics:props.noDescription')})`}
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>{t('topics:props.accessLevel')}</Item.Header>
          { /* TODO: change when it is available in Topic */ }
          <Item.Description>Public</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

const TopicInfo = withNamespaces()(PureTopicInfo);

export { PureTopicInfo };
export default TopicInfo;