// @flow

import _ from 'lodash';
import * as React from 'react';

import type { Identifier } from 'types/model';

import type { ParagraphContentItem } from '../../../model';

import { passThroughProps } from '..';
import DisplayBlockWrapper from '../DisplayBlockWrapper';
import EditableTextContent from '../EditableTextContent';

type PassedProps = {
  contentItem: ParagraphContentItem,
  onUpdatePlainText: (id: Identifier, text: string) => void,
};

type Props = PassedProps;

const PureParagraph = (props: Props): React.Node => {
  const { contentItem, onUpdatePlainText } = props;

  return (
    <DisplayBlockWrapper
      {..._.pick(props, passThroughProps)}
      iconName="paragraph"
    >
      <EditableTextContent
        multiline={true}
        initialText={contentItem.text}
        onDeactivate={(text: string) => onUpdatePlainText(contentItem.id, text)}
      />
    </DisplayBlockWrapper>
  );
};

const Paragraph = PureParagraph;

export { PureParagraph };
export default Paragraph;