// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Checkbox, Segment } from 'semantic-ui-react';

// import Color, { TwitterPicker } from 'react-color';
import type { CustomTranslatorProps } from 'types/translator';

import type { State } from 'types/state';
import contentItems, { contentItemTypes } from 'modules/content-items';
import type { DenormalizedRootContentItem } from 'modules/content-items';
import Slide from 'core-components/slides/Slide';

import VoicePlayerToggle from 'core-components/slides/VoicePlayerToggle';


import Page from '../Page';

type PassedProps = {};

type StateProps = {
  // Slide takes a denormalized root contentItem instead of a root contentItem id, because in a
  // later stage the contentItem tree passed to the slide needs to be transformed further
  // (for example, by splitting up sections and inserting repeated headers if a section is longer
  // than a single slide) and the contentItem tree can't just be extracted from the state directly.
  contentItemTreeRootItem: DenormalizedRootContentItem,
};

type Props = CustomTranslatorProps & StateProps & PassedProps;

const mapStateToProps = (state: State, props: PassedProps): StateProps => {
  const contentItemTreeRootItemId = 'qyrgv0bcd6'; // 'w4lg2u0p1h'; // #TODO stub
  const contentItemTreeRootItem = contentItems.selectors.getDenormalizedById(
    state,
    { id: contentItemTreeRootItemId },
  );

  if (contentItemTreeRootItem == null) {
    throw new Error(`ContentItem with id "${contentItemTreeRootItemId}" could not be found.`);
  }
  else if (contentItemTreeRootItem.type !== contentItemTypes.ROOT) {
    throw new Error('Not a ROOT contentItem.');
  }

  return {
    contentItemTreeRootItem,
  };
};

class PureTempSlideTestPage extends React.Component<Props, State> {
  constructor(props: Props): void {
    super(props);
    this.slideRef = React.createRef();
  }

  componentDidMount = (): void => {
    this.render();
    console.log(this.slideRef.current);
    this.setState({ toggle: false, contentToBeRead: 'd' });
    // console.log(`initieel ${this.state.toggle}`);
  };

  slideRef;

  toggleRead = (): void => {
    if (this.state.toggle) {
      this.setState({ toggle: false });
    }
    else {
      this.setState({ toggle: true, contentToBeRead: this.slideRef.current.innerText });
    }
  };

  render = (): React.Node => {
    const { contentItemTreeRootItem } = this.props;
    // console.log(`after ${this.state.toggle}, ${this.state.contentToBeRead}`);
    return (
      <Page>
        <div ref={this.slideRef}>
          <Slide contentItemTreeRootItem={contentItemTreeRootItem} />
        </div>
        <div className="Voice">
          <VoicePlayerToggle content={this.state.contentToBeRead} play={this.state.toggle} />
          <Segment compact={true}>
            <Checkbox slider={true} onClick={this.toggleRead} checked={this.state.toggle} />
          </Segment>
        </div>
      </Page>
    );
    /* <VoicePlayerToggle /> */
  }
}

const TempSlideTestPage = connect(mapStateToProps)(translate()(PureTempSlideTestPage));

export { PureTempSlideTestPage };
export default TempSlideTestPage;
