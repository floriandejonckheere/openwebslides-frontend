// @flow

import * as React from 'react';
import { translate, type TranslatorProps } from 'react-i18next';

import Slides from 'components/Slides';
import topics from 'modules/topics';

import Sidebar from './helpers/Sidebar';

type PassedProps = {|
  topic: topics.model.Topic,
|};

type Props = {| ...TranslatorProps, ...PassedProps |};

const PureSlidePreviewsSidebar = (props: Props): React.Node => {
  const { t, topic } = props;

  return (
    <Sidebar
      className="sidebar--slide-previews"
      header={t('topics:sidebars.slidePreviews.header')}
      icon="image"
    >
      <Slides topicId={topic.id} />
    </Sidebar>
  );
};

const SlidePreviewsSidebar = translate()(PureSlidePreviewsSidebar);

export { PureSlidePreviewsSidebar };
export default SlidePreviewsSidebar;
