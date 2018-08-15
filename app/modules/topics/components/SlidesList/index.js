// @flow

import * as React from 'react';
import { translate, type TranslatorProps } from 'react-i18next';
import { connect } from 'react-redux';

import { type State } from 'types/state';
import contentItems from 'modules/contentItems';
import contentItemSplit from 'lib/contentItemSplit';

import selectors from '../../selectors';

import Slide from './Slide';

type PassedProps = {|
  topicId: string,
|};

type StateProps = {|
  // Root contentItems for each separate slide
  rootContentItems: ?$ReadOnlyArray<contentItems.model.DenormalizedRootContentItem>,
|};

type Props = {| ...TranslatorProps, ...PassedProps, ...StateProps |};

const mapStateToProps = (state: State, props: PassedProps): StateProps => {
  const { topicId } = props;
  const topic = selectors.getById(state, { id: topicId });
  const denormalizedTopicRoot = (topic != null)
    ? contentItems.selectors.getDenormalizedById(state, { id: topic.rootContentItemId })
    : null;

  if (denormalizedTopicRoot == null) {
    return {
      rootContentItems: null,
    };
  }
  else {
    return {
      rootContentItems: contentItemSplit(denormalizedTopicRoot),
    };
  }
};

const PureSlidesList = (props: Props): React.Node => {
  const { rootContentItems } = props;

  return (rootContentItems == null) ? null : (
    <div className="ows_slides_list">
      {rootContentItems.map((contentItem) => (
        <Slide key={contentItem.id} contentItem={contentItem} />
      ))}
    </div>
  );
};

const SlidesList = connect(mapStateToProps)(translate()(PureSlidesList));

export { PureSlidesList };
export default SlidesList;
